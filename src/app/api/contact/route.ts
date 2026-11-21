import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSiteUrl } from "@/content/site";
import { whatsappHref } from "@/lib/contact";
import {
  ownerNotificationEmail,
  visitorConfirmationEmail,
} from "@/lib/contact-email";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[\d+\-\s()]{7,40}$/;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    let body: ContactBody;
    try {
      body = (await request.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        { error: "הבקשה אינה תקינה." },
        { status: 400 },
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "הבקשה אינה תקינה." },
        { status: 400 },
      );
    }

    const name = asTrimmedString(body.name);
    const email = asTrimmedString(body.email);
    const phone = asTrimmedString(body.phone);
    const message = asTrimmedString(body.message);

    if (!name || name.length > 120) {
      return NextResponse.json(
        { error: "נא להזין שם תקין." },
        { status: 400 },
      );
    }

    if (phone && !phonePattern.test(phone)) {
      return NextResponse.json(
        { error: "נא להזין מספר טלפון תקין, או להשאיר את השדה ריק." },
        { status: 400 },
      );
    }

    if (!email || !emailPattern.test(email) || email.length > 200) {
      return NextResponse.json(
        { error: "נא להזין אימייל תקין." },
        { status: 400 },
      );
    }

    if (!message || message.length < 5 || message.length > 5000) {
      return NextResponse.json(
        { error: "נא להזין הודעה קצרה וברורה." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const configuredFrom = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
    const fromEmail = configuredFrom || "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      return NextResponse.json(
        { error: "שליחת מייל אינה מוגדרת בשרת." },
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
      replyTo: email,
      subject: ownerMail.subject,
      html: ownerMail.html,
      text: ownerMail.text,
    });

    if (error) {
      return NextResponse.json(
        { error: "שליחת ההודעה נכשלה. נסו שוב בעוד רגע." },
        { status: 502 },
      );
    }

    let confirmationSent = false;
    if (configuredFrom) {
      const visitorMail = visitorConfirmationEmail({
        name,
        siteUrl,
        whatsappUrl: whatsappHref(),
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
      { error: "אירעה שגיאה בשליחה. נסו שוב." },
      { status: 500 },
    );
  }
}
