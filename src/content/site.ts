/**
 * Site content and public settings for שרוליק פתרונות.
 *
 * Product name: change `productName.he` and `productName.en` only.
 * Public email stays empty until a real address is chosen.
 */

const DEFAULT_SITE_URL = "https://israel-shvadron-site.vercel.app";

/** Public deployment until sruliksolutions.com is connected. */
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

/** Temporary label. Rename here only — pages read these two fields. */
export const productName = {
  he: "מערכת התוכן וההפצה",
  en: "Content and Distribution System",
} as const;

export const operator = {
  businessHe: "שרוליק פתרונות",
  businessEn: "Srulik Solutions",
  personHe: "שרוליק שוודרון",
  personEn: "Srulik Shvadron",
  localityHe: "מודיעין עילית",
  localityEn: "Modi'in Illit",
  countryHe: "ישראל",
  countryEn: "Israel",
} as const;

/** YouTube Data API scope the product requests: upload videos to the authorized channel. */
export const youtubeScope = "https://www.googleapis.com/auth/youtube.upload";

export const googlePolicyLinks = {
  userDataPolicy:
    "https://developers.google.com/terms/api-services-user-data-policy",
  privacy: "https://www.google.com/policies/privacy",
  youtubeTerms: "https://www.youtube.com/t/terms",
  youtubeApiTerms:
    "https://developers.google.com/youtube/terms/api-services-terms-of-service",
  permissions: "https://security.google.com/settings/security/permissions",
} as const;

export const legalMeta = {
  updatedIso: "2026-11-21",
  updatedHe: "21 בנובמבר 2026",
  updatedEn: "21 November 2026",
} as const;

export const siteConfig = {
  name: operator.businessHe,
  nameEn: operator.businessEn,
  title: "שרוליק פתרונות | אתרים, אוטומציה ותוכן לעסקים",
  description:
    "עושים בשבילכם את העבודה הדיגיטלית: אתרים, בוטים בוואטסאפ, אוטומציות ומערכת תוכן לעסקים ולמוסדות.",
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

export const navigation = [
  { href: "/#services", label: "שירותים" },
  { href: "/#product", label: "המוצר" },
  { href: "/#process", label: "איך זה עובד" },
  { href: "/#about", label: "אודות" },
  { href: "/#contact", label: "יצירת קשר" },
] as const;

export const footerNav = [
  { href: "/privacy", label: "מדיניות פרטיות" },
  { href: "/terms", label: "תנאי שימוש" },
  { href: "/accessibility", label: "הצהרת נגישות" },
] as const;

export const hero = {
  brand: operator.businessHe,
  headline: "עושים בשבילכם את העבודה הדיגיטלית",
  supporting:
    "אתר, בוט, תוכן ואוטומציה לעסקים ולמוסדות — בלי קורס, בלי סיבוך, ועם ליווי ברור עד שזה עובד.",
  primaryCta: "כתבו בוואטסאפ",
  secondaryCta: { href: "/#services", label: "לשירותים" },
} as const;

export const services = {
  id: "services",
  eyebrow: "מה העסק מקבל",
  title: "שירותים",
  subtitle: "שלושה מסלולים ברורים, לפי מה שהעסק או המוסד צריכים.",
  items: [
    {
      title: "בניית אתרים ודפי נחיתה",
      description:
        "אתר או דף ברור, מהיר ומותאם לנייד, שמוביל לפנייה. מתאים לעסק, למוסד חינוכי ולשירות מקומי.",
    },
    {
      title: "בוטים בוואטסאפ",
      description:
        "מענה אוטומטי לשעות פעילות, מחירים, הרשמה ושאלות נפוצות. חוסך זמן לצוות ושומר פניות גם מחוץ לשעות הפעילות.",
    },
    {
      title: "אוטומציות וחיבורים בין מערכות",
      description:
        "הטפסים, המייל והוואטסאפ מדברים ביניהם, בלי העתקה ידנית. מתאים לרישום, התראות ומעקב אחרי פניות.",
    },
  ],
} as const;

export const product = {
  id: "product",
  eyebrow: "המוצר הראשון",
  title: productName.he,
  subtitle:
    "מערכת שמאתרת חדשות ותוכן, מייצרת מדיה קצרה בעברית, ומפיצה אותה לטלגרם, לוואטסאפ וליוטיוב. אתם מקבלים נוכחות קבועה ברשתות, בלי להפיק כל סרטון לבד.",
  steps: [
    {
      title: "איתור",
      description:
        "המערכת מאתרת חדשות ותוכן לפי הנושא שהוגדר לערוץ, כדי שיהיה חומר לעבוד איתו.",
    },
    {
      title: "הפקה בעברית",
      description:
        "מהחומר נבנית מדיה קצרה בעברית, מוכנה לפרסום, בלי שתצטרכו להפיק כל פריט בעצמכם.",
    },
    {
      title: "הפצה",
      description: "התוכן יוצא לערוצים שחיברתם: טלגרם, וואטסאפ ויוטיוב.",
    },
  ],
  oauthNote:
    "חיבור הערוץ נעשה בהרשאת בעל החשבון. ביוטיוב זו הרשאת גוגל (OAuth), והגישה המבוקשת היא העלאת סרטונים לערוץ שאישרתם.",
  approvalNote:
    "בשלב הראשון, עד אישור האפליקציה בגוגל, סרטון ביוטיוב עשוי לעלות כפרטי. המעבר לציבורי נעשה רק באישור שלכם.",
} as const;

export const workflow = {
  id: "process",
  eyebrow: "שיטת עבודה",
  title: "איך זה עובד",
  subtitle: "ארבעה שלבים, מהצורך ועד שזה עובד אצלכם.",
  items: [
    {
      title: "מבינים את הצורך",
      description:
        "מתחילים מהבעיה האמיתית — פניות, זמן, סדר או נוכחות — ורק אחר כך בוחרים מה לבנות.",
    },
    {
      title: "בונים פתרון פשוט",
      description:
        "אתר, בוט, אוטומציה או חיבור למערכת התוכן. ברור לתפעול, בלי מערכת שצריך ללמוד.",
    },
    {
      title: "מחברים למה שכבר קיים",
      description:
        "וואטסאפ, טפסים, מייל או ערוץ יוטיוב. מתחברים לכלים שכבר בשימוש, בלי להחליף הכול.",
    },
    {
      title: "מלווים בהפעלה",
      description:
        "מסבירים בקצרה, בודקים שזה עובד, ונשארים זמינים עד שהתהליך רץ ביום־יום.",
    },
  ],
} as const;

export const about = {
  id: "about",
  eyebrow: "מי עומד מאחורי העסק",
  title: "אודות",
  paragraphs: [
    "אני שרוליק שוודרון, מפתח תוכנה.",
    "אני עושה את העבודה בשבילכם: מבין את הצורך, בונה, מחבר ומלווה — בלי להניח ידע טכני מוקדם, ובלי קורס בדרך.",
    "העסק יודע לעבוד עם הציבור החרדי: שפה, סגנון וצניעות שמתאימים לקהל.",
  ],
} as const;

export const values = {
  id: "values",
  eyebrow: "עקרונות",
  title: "ערכים",
  subtitle: "מה שמנחה כל עבודה.",
  items: [
    {
      title: "בהירות",
      description: "הסברים פשוטים ותהליך מובן מתחילתו ועד סופו.",
    },
    {
      title: "אמינות",
      description: "עמידה במה שסוכם, ושקיפות לאורך הדרך.",
    },
    {
      title: "תועלת ללקוח",
      description: "כל פתרון נמדד לפי הזמן שהוא חוסך והפניות שהוא מייצר.",
    },
    {
      title: "התאמה לקהל",
      description: "שפה, סגנון וצניעות לפי העסק והקהילה שהוא משרת.",
    },
  ],
} as const;

export const contact = {
  id: "contact",
  eyebrow: "שיחה קצרה",
  title: "יצירת קשר",
  subtitle:
    "הדרך המהירה היא וואטסאפ. אפשר גם להשאיר פנייה בטופס, ונחזור עם מענה ברור.",
  whatsappTitle: "וואטסאפ",
  whatsappBody: "זה הערוץ המועדף. כותבים, וחוזרים אליכם עם מענה ענייני.",
  whatsappPending:
    "מספר הוואטסאפ יפורסם כאן. עד אז כתבו בטופס, ונחזור אליכם.",
  whatsappCta: "כתבו בוואטסאפ",
  form: {
    nameLabel: "שם",
    phoneLabel: "טלפון או וואטסאפ",
    phoneHint: "לא חובה",
    emailLabel: "אימייל",
    messageLabel: "הודעה",
    submitLabel: "שליחת פנייה",
    namePlaceholder: "השם המלא או שם העסק",
    phonePlaceholder: "מספר לחזרה",
    emailPlaceholder: "אימייל לחזרה",
    messagePlaceholder:
      "ספרו בקצרה מה צריך: אתר, בוט בוואטסאפ, אוטומציה, תוכן — או שאלה כללית.",
  },
  note: "נחזור אליכם בהקדם.",
  success: "ההודעה נשלחה בהצלחה. נחזור אליכם בהקדם.",
  successConfirmed: "ההודעה נשלחה. שלחנו גם אישור לאימייל שהזנתם.",
} as const;

export const footer = {
  tagline: "אתרים, בוטים, אוטומציות ותוכן לעסקים ולמוסדות.",
  rights: "כל הזכויות שמורות.",
} as const;
