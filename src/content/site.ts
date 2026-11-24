/**
 * Public settings for שרוליק.
 * Page copy lives in src/content/copy.ts.
 */

const DEFAULT_SITE_URL = "https://srulikshvadron.com";

/** Canonical public site URL. */
export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;

  try {
    const url = new URL(raw);
    const loopback =
      url.hostname === "localhost" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "0.0.0.0";
    const allowed = url.protocol === "https:" || url.protocol === "http:";
    if (!allowed || loopback) return DEFAULT_SITE_URL;
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const operator = {
  businessHe: "שרוליק",
  businessEn: "Srulik",
  personHe: "שרוליק שוודרון",
  personEn: "Srulik Shvadron",
} as const;

export const legalMeta = {
  updatedIso: "2026-11-21",
  updatedHe: "21 בנובמבר 2026",
  updatedEn: "21 November 2026",
} as const;

export const siteConfig = {
  name: operator.businessHe,
  nameEn: operator.businessEn,
  title: "שרוליק | מערכות ניהול לעסקים. אופס, זה כבר עובד.",
  description:
    "מערכות ניהול לעסקים: הזמנות, חובות, משמרות, מלאי ודוחות, הכול במסך אחד ובדיוק לפי איך שהעסק שלך עובד. נבנות על ידי מפתח תוכנה שניהל עסק מבפנים. וגם אתר או בוט, אם צריך.",
  locale: "he_IL",
  url: getSiteUrl(),
  contact: {
    whatsappE164: "972535271942",
    email: "",
    phone: "053-5271942",
  },
} as const;

export const publicPages = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/en", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/en/privacy", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.5 },
  { path: "/en/terms", changeFrequency: "yearly", priority: 0.5 },
  { path: "/accessibility", changeFrequency: "yearly", priority: 0.3 },
  { path: "/en/accessibility", changeFrequency: "yearly", priority: 0.3 },
] as const;
