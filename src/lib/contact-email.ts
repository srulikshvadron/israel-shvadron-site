import { operator } from "../content/site";

export type OwnerEmailInput = {
  name: string;
  email: string;
  phone: string;
  message: string;
  siteUrl: string;
};

export type VisitorEmailInput = {
  name: string;
  siteUrl: string;
  whatsappUrl: string | null;
};

export type RenderedEmail = {
  subject: string;
  html: string;
  text: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function oneLine(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}

function shell(title: string, bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#eef3f8;color:#0b1220;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" dir="rtl" style="background:#eef3f8;padding:28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" dir="rtl" style="max-width:560px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #d7e2ee;">
            <tr>
              <td style="background:#0b1220;padding:22px 24px;text-align:right;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;letter-spacing:0.08em;color:#2dd4bf;">${escapeHtml(operator.businessHe)}</div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:22px;line-height:1.35;font-weight:700;color:#f4f8fc;margin-top:6px;">${escapeHtml(title)}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;text-align:right;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.7;color:#1c2836;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 22px;text-align:right;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#5d7084;">
                ${escapeHtml(operator.businessHe)} · ${escapeHtml(operator.localityHe)}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function fieldRow(label: string, value: string) {
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e6eef5;font-weight:700;color:#0b1220;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0 10px 12px;border-bottom:1px solid #e6eef5;color:#1c2836;vertical-align:top;">${escapeHtml(value)}</td>
  </tr>`;
}

function button(href: string, label: string) {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;margin-top:8px;background:#2dd4bf;color:#042f2e;text-decoration:none;font-weight:700;padding:12px 18px;border-radius:10px;">${escapeHtml(label)}</a>`;
}

export function ownerNotificationEmail(input: OwnerEmailInput): RenderedEmail {
  const safeName = oneLine(input.name);
  const safeEmail = oneLine(input.email);
  const subject = `פנייה חדשה מהאתר — ${safeName}`;
  const phone = oneLine(input.phone) || "—";
  const replyHref = `mailto:${safeEmail}?subject=${encodeURIComponent(`מענה לפנייה — ${safeName}`)}`;
  const html = shell(
    "פנייה חדשה",
    `<p style="margin:0 0 16px;">הגיעה פנייה חדשה מאתר ${escapeHtml(operator.businessHe)}.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" dir="rtl" style="border-collapse:collapse;">
      ${fieldRow("שם", safeName)}
      ${fieldRow("טלפון או וואטסאפ", phone)}
      ${fieldRow("אימייל", safeEmail)}
    </table>
    <p style="margin:18px 0 8px;font-weight:700;">הודעה</p>
    <div style="white-space:pre-wrap;background:#f4f8fb;border:1px solid #e1ebf3;border-radius:12px;padding:14px;">${escapeHtml(input.message)}</div>
    <p style="margin:20px 0 0;">${button(replyHref, "מענה לפונה")}</p>
    <p style="margin:16px 0 0;font-size:13px;color:#5d7084;">האתר: ${escapeHtml(input.siteUrl)}</p>`,
  );
  const text = [
    `${operator.businessHe} — פנייה חדשה`,
    "",
    `שם: ${safeName}`,
    `טלפון או וואטסאפ: ${phone}`,
    `אימייל: ${safeEmail}`,
    "",
    "הודעה:",
    input.message,
    "",
    `מענה: ${replyHref}`,
    `האתר: ${input.siteUrl}`,
  ].join("\n");

  return { subject, html, text };
}

export function visitorConfirmationEmail(input: VisitorEmailInput): RenderedEmail {
  const safeName = oneLine(input.name);
  const subject = `קיבלנו את הפנייה — ${operator.businessHe}`;
  const whatsappBlock = input.whatsappUrl
    ? `<p style="margin:18px 0 8px;">אם נוח להמשיך בוואטסאפ, זה הערוץ המהיר:</p>
       <p style="margin:0;">${button(input.whatsappUrl, "כתבו בוואטסאפ")}</p>`
    : `<p style="margin:18px 0 0;">אפשר גם להשיב למייל הזה, ונמשיך משם.</p>`;
  const html = shell(
    "הפנייה התקבלה",
    `<p style="margin:0 0 12px;">שלום ${escapeHtml(safeName)},</p>
    <p style="margin:0 0 12px;">תודה שפניתם ל${escapeHtml(operator.businessHe)}. הפנייה התקבלה, ואין צורך לשלוח את הפרטים שוב.</p>
    <p style="margin:0;font-weight:700;">מה הלאה</p>
    <p style="margin:6px 0 0;">נחזור אליכם בהקדם עם מענה ברור. אנחנו עושים את העבודה, ואתם נשארים עם התוצאה.</p>
    ${whatsappBlock}
    <p style="margin:18px 0 0;font-size:13px;color:#5d7084;"><a href="${escapeHtml(input.siteUrl)}" style="color:#0f766e;">${escapeHtml(input.siteUrl)}</a></p>`,
  );
  const text = [
    `שלום ${safeName},`,
    "",
    `תודה שפניתם ל${operator.businessHe}. הפנייה התקבלה, ואין צורך לשלוח את הפרטים שוב.`,
    "",
    "מה הלאה: נחזור אליכם בהקדם עם מענה ברור.",
    input.whatsappUrl ? `וואטסאפ: ${input.whatsappUrl}` : "אפשר גם להשיב למייל הזה.",
    "",
    input.siteUrl,
    "",
    operator.businessHe,
  ].join("\n");

  return { subject, html, text };
}
