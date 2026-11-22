import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getCopy, type Locale } from "@/content/copy";
import { getSiteUrl } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import {
  ownerNotificationEmail,
  visitorConfirmationEmail,
} from "@/lib/contact-email";
import { allowContactSubmission, clientAddress } from "@/lib/contact-guard";

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phonePattern = /^[\d+\-\s()]{7,40}$/;
const MAX_BODY_BYTES = 20_000;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  company?: unknown;
  locale?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function stripControls(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "");
}

function sanitizeMessage(value: string) {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
}

export async function POST(request: Request) {
  try {
    const declaredLength = Number(request.headers.get("content-length") ?? "0");
    if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
      return NextResponse.json(
        { error: getCopy("he").api.tooLong },
        { status: 413 },
      );
    }

    let body: ContactBody;
    try {
      body = (await request.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        { error: getCopy("he").api.invalid },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: getCopy("he").api.invalid },
        { status: 400 },
      );
    }

    const locale: Locale = body.locale === "en" ? "en" : "he";
    const text = getCopy(locale).api;
    const honeypot = asTrimmedString(body.company);
    const name = stripControls(asTrimmedString(body.name));
    const email = stripControls(asTrimmedString(body.email));
    const phone = stripControls(asTrimmedString(body.phone));
    const message = sanitizeMessage(asTrimmedString(body.message));

    if (honeypot) {
      return NextResponse.json({ ok: true, confirmationSent: false });
    }

    if (!name || name.length > 120) {
      return NextResponse.json(
        { error: text.name },
        { status: 400 },
      );
    }

    if (phone && !phonePattern.test(phone)) {
      return NextResponse.json(
        { error: text.phone },
        { status: 400 },
      );
    }

    if (!phone && !email) {
      return NextResponse.json(
        { error: text.contact },
        { status: 400 },
      );
    }

    if (email && (!emailPattern.test(email) || email.length > 200)) {
      return NextResponse.json(
        { error: text.email },
        { status: 400 },
      );
    }

    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json(
        { error: text.message },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const configuredFrom = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
    const fromEmail = configuredFrom || "onboarding@resend.dev";

    if (!allowContactSubmission(clientAddress(request), email || phone)) {
      return NextResponse.json(
        { error: text.rate },
        { status: 429, headers: { "Retry-After": "600" } },
      );
    }

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: text.send },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const siteUrl = getSiteUrl();
    const ownerMail = ownerNotificationEmail({
      name,
      email,
      phone,
      message,
      siteUrl,
    });
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      ...(email ? { replyTo: email } : {}),
      subject: ownerMail.subject,
      html: ownerMail.html,
      text: ownerMail.text,
    });

    if (error) {
      return NextResponse.json(
        { error: text.send },
        { status: 502 },
      );
    }

    let confirmationSent = false;
    if (configuredFrom && email) {
      const visitorMail = visitorConfirmationEmail({
        name,
        siteUrl,
        whatsappUrl: whatsappHref(getCopy(locale).whatsappPrefill),
        locale,
      });
      try {
        const confirmation = await resend.emails.send({
          from: configuredFrom,
          to: [email],
          replyTo: toEmail,
          subject: visitorMail.subject,
          html: visitorMail.html,
          text: visitorMail.text,
        });
        confirmationSent = !confirmation.error;
        if (confirmation.error) {
          console.error("Visitor confirmation email failed");
        }
      } catch {
        console.error("Visitor confirmation email failed");
      }
    }

    return NextResponse.json({ ok: true, confirmationSent });
  } catch {
    return NextResponse.json(
      { error: getCopy("he").api.send },
      { status: 500 },
    );
  }
}
