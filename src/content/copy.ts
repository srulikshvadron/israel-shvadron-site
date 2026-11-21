import { googlePolicyLinks, youtubeScope } from "@/content/site";

export type Locale = "he" | "en";

export type LegalBlock = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
};

export type Copy = {
  meta: { title: string; description: string; siteName: string; locale: string };
  skip: string;
  brand: string;
  navLabel: string;
  mobileNavLabel: string;
  menuOpen: string;
  menuClose: string;
  menuSr: string;
  whatsappShort: string;
  langLabel: string;
  nav: { id: string; label: string }[];
  hero: { eyebrow: string; headline: string; line: string; secondary: string };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    items: { title: string; line: string }[];
  };
  about: { id: string; eyebrow: string; title: string; paragraphs: string[] };
  contact: {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsappTitle: string;
    whatsappBody: string;
    whatsappCta: string;
    nameLabel: string;
    phoneLabel: string;
    phoneHint: string;
    emailLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    note: string;
    success: string;
    successConfirmed: string;
    fallbackError: string;
    honeypot: string;
  };
  footer: {
    tagline: string;
    operator: string;
    rights: string;
    navLabel: string;
    privacy: string;
    terms: string;
    accessibility: string;
    whatsapp: string;
    phone: string;
  };
  a11y: { title: string; large: string; contrast: string; statement: string; button: string };
  pages: {
    privacy: { title: string; description: string; kicker: string; intro: string; updated: string };
    terms: { title: string; description: string; kicker: string; intro: string; updated: string };
    accessibility: {
      title: string;
      description: string;
      kicker: string;
      intro: string;
      updated: string;
    };
    back: string;
  };
  privacy: LegalBlock[];
  terms: LegalBlock[];
  accessibility: LegalBlock[];
  api: {
    tooLong: string;
    invalid: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    rate: string;
    send: string;
  };
  emails: {
    owner: { subject: string; title: string; intro: string; reply: string; site: string };
    visitor: { subject: string; title: string; hello: string; body: string; next: string; whatsapp: string; reply: string };
  };
};

const he: Copy = {
  meta: {
    title: "שרוליק פתרונות | אתרים, בוטים ואוטומציה",
    description: "אתרים, בוטים לוואטסאפ ואוטומציה לעסקים. את העבודה אנו מבצעים עבורכם.",
    siteName: "שרוליק פתרונות",
    locale: "he_IL",
  },
  skip: "דילוג לתוכן",
  brand: "שרוליק פתרונות",
  navLabel: "ניווט",
  mobileNavLabel: "תפריט",
  menuOpen: "פתיחת תפריט",
  menuClose: "סגירת תפריט",
  menuSr: "תפריט",
  whatsappShort: "וואטסאפ",
  langLabel: "שפה",
  nav: [
    { id: "services", label: "שירותים" },
    { id: "about", label: "אודות" },
    { id: "contact", label: "יצירת קשר" },
  ],
  hero: {
    eyebrow: "שרוליק פתרונות",
    headline: "אתרים ובוטים לעסקים",
    line: "אתם מציגים את הבעיה, אנחנו מוצאים את הפתרון.",
    secondary: "לשירותים",
  },
  services: {
    id: "services",
    eyebrow: "שירותים",
    title: "שירותים",
    items: [
      { title: "אתרים", line: "אתר ברור שמוביל לפנייה." },
      { title: "בוטים לוואטסאפ", line: "מענה אוטומטי, ושליחת הודעות ועדכוני סטטוס." },
      { title: "אוטומציה", line: "חיבור בין טפסים, דוא״ל ווואטסאפ." },
      {
        title: "מערכות מותאמות אישית",
        line: "מערכות ניהול, חיבור בין מערכות ופתרונות מורכבים לפי צרכי העסק.",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "אודות",
    title: "אודות",
    paragraphs: [
      "אני שרוליק שוודרון, מפתח תוכנה.",
      "בעלי עסקים רבים יודעים שטכנולוגיה יכולה לחסוך להם זמן, אך אין להם פנאי ללמוד אותה.",
      "לשם כך אני כאן: מקים עבורם אתרים, בוטים ואוטומציות, ומלווה אותם גם לאחר העלייה לאוויר.",
      "אתם מתמקדים בעסק, ואני מטפל בצד הטכנולוגי.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "פנייה",
    title: "יצירת קשר",
    subtitle: "ניתן לכתוב בוואטסאפ, או להשאיר פנייה בטופס.",
    whatsappTitle: "וואטסאפ",
    whatsappBody: "לפנייה ישירה.",
    whatsappCta: "כתבו בוואטסאפ",
    nameLabel: "שם",
    phoneLabel: "טלפון",
    phoneHint: "לא חובה",
    emailLabel: "אימייל",
    messageLabel: "הודעה",
    submit: "שליחה",
    sending: "שולח",
    namePlaceholder: "השם",
    phonePlaceholder: "טלפון",
    emailPlaceholder: "אימייל",
    messagePlaceholder: "תוכן הפנייה",
    note: "נחזור אליכם.",
    success: "הפנייה נשלחה. נחזור אליכם.",
    successConfirmed: "הפנייה נשלחה. אישור נשלח לאימייל.",
    fallbackError: "השליחה נכשלה. נסו שוב.",
    honeypot: "חברה",
  },
  footer: {
    tagline: "אתרים, בוטים ואוטומציה לעסקים.",
    operator: "שרוליק שוודרון",
    rights: "כל הזכויות שמורות.",
    navLabel: "מידע",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שימוש",
    accessibility: "הצהרת נגישות",
    whatsapp: "וואטסאפ",
    phone: "טלפון",
  },
  a11y: {
    title: "נגישות",
    large: "טקסט גדול",
    contrast: "ניגודיות גבוהה",
    statement: "הצהרת נגישות",
    button: "נגישות",
  },
  pages: {
    privacy: {
      title: "מדיניות פרטיות",
      description: "איזה מידע נאסף באתר ובחיבור ליוטיוב, וכיצד ניתן לבקש מחיקה.",
      kicker: "שרוליק פתרונות",
      intro: "מסמך זה מתאר איזה מידע נאסף, לאיזה צורך, וכיצד ניתן לבקש מחיקה.",
      updated: "עודכן: 21 בנובמבר 2026",
    },
    terms: {
      title: "תנאי שימוש",
      description: "תנאי השימוש באתר ובשירותים של שרוליק פתרונות.",
      kicker: "שרוליק פתרונות",
      intro: "השימוש באתר מהווה הסכמה לתנאים אלה.",
      updated: "עודכן: 21 בנובמבר 2026",
    },
    accessibility: {
      title: "הצהרת נגישות",
      description: "הצהרת הנגישות של אתר שרוליק פתרונות.",
      kicker: "שרוליק פתרונות",
      intro: "אנו פועלים כדי שהאתר יהיה נוח לשימוש, גם לאנשים עם מוגבלות.",
      updated: "עודכן: נובמבר 2026",
    },
    back: "חזרה לדף הבית",
  },
  privacy: [
    {
      id: "who",
      title: "מי מפעיל את השירות",
      paragraphs: [
        "האתר מופעל על ידי שרוליק פתרונות. מאחורי העסק: שרוליק שוודרון.",
        "לשאלה או לבקשת מחיקה יש לפנות בטופס, בוואטסאפ או בטלפון. בנושא הפנייה יש לכתוב: בקשת מחיקת מידע.",
      ],
    },
    {
      id: "site",
      title: "מידע באתר",
      paragraphs: ["באתר נאסף רק המידע שנמסר בפנייה, ונתוני תפעול הדרושים לאבטחה."],
      bullets: [
        "בטופס: שם, אימייל, טלפון אם נמסר, ותוכן ההודעה.",
        "בוואטסאפ: ההודעות שנשלחות אלינו.",
        "בשרת: כתובת רשת, סוג דפדפן וזמן הפנייה, עד תשעים יום.",
        "אין עוגיות פרסום ואין כלי מדידה של צד שלישי.",
        "העדפות הנגישות נשמרות בדפדפן בלבד, ואינן נשלחות אלינו.",
      ],
    },
    {
      id: "youtube",
      title: "חיבור ליוטיוב",
      paragraphs: [
        "חיבור ערוץ יוטיוב נעשה רק אם בעל החשבון מאשר זאת בעצמו.",
        "ההרשאה המבוקשת היא העלאת סרטונים לערוץ שאושר. אין בקשת גישה לדואר, לכונן או לסיסמה.",
        "המידע משמש להעלאת סרטון שאושר, ולהצגת מצב ההעלאה. הוא אינו נמכר ואינו משמש לפרסום.",
        "השימוש במידע שהתקבל מגוגל כפוף למדיניות הנתונים של גוגל, לרבות כללי השימוש המוגבל.",
        "השירות משתמש בשירותי יוטיוב. חלים גם תנאי יוטיוב ומדיניות הפרטיות של גוגל.",
      ],
      bullets: [
        "נשמרים: כתובת החשבון, מזהה הערוץ, אסימוני גישה, וכותרת הסרטון שאושר.",
        "אדם אינו קורא מידע זה, אלא אם ביקשתם זאת, או שהדבר נדרש לאבטחה או לפי דין.",
        "ניתן לבטל את הגישה בכל עת בהגדרות החשבון בגוגל.",
      ],
      links: [
        { href: googlePolicyLinks.userDataPolicy, label: "מדיניות הנתונים של גוגל" },
        { href: googlePolicyLinks.youtubeTerms, label: "תנאי יוטיוב" },
        { href: googlePolicyLinks.privacy, label: "מדיניות הפרטיות של גוגל" },
        { href: googlePolicyLinks.permissions, label: "הגדרות הגישה בגוגל" },
      ],
    },
    {
      id: "delete",
      title: "שמירה ומחיקה",
      paragraphs: [
        "האסימונים נשמרים כל עוד החיבור פעיל, בשרתים של העסק. הגישה אליהם מוגבלת למפעיל.",
        "בקשת מחיקה, או ניתוק מולנו, תושלם בתוך שבעה ימים. בניתוק מולנו האסימון מבוטל מיד.",
        "ניתוק דרך גוגל, או אסימון שאינו תקף, יוביל למחיקה בתוך שלושים יום.",
        "מחיקה אצלנו אינה מוחקת סרטון שכבר עלה ליוטיוב. מחיקת סרטון נעשית ביוטיוב.",
      ],
    },
  ],
  terms: [
    {
      id: "service",
      title: "השירות",
      paragraphs: [
        "שרוליק פתרונות מופעל על ידי שרוליק שוודרון.",
        "השירות כולל אתרים, בוטים לוואטסאפ, אוטומציה, ומערכות מותאמות אישית.",
        "אנו מבצעים את העבודה. אין כאן הדרכה או קורס.",
      ],
    },
    {
      id: "customer",
      title: "אחריות הלקוח",
      paragraphs: [
        "הלקוח אחראי לתוכן שהוא מבקש לשלוח או לפרסם, ולזכותו להשתמש בו.",
        "חיבור חשבון וואטסאפ או יוטיוב נעשה בהרשאת בעל החשבון בלבד.",
        "אנו רשאים לסרב לתוכן שאינו חוקי, או שאינו עומד בכללי הפלטפורמה.",
      ],
      links: [{ href: googlePolicyLinks.youtubeTerms, label: "תנאי יוטיוב" }],
    },
    {
      id: "pay",
      title: "תשלום ודין",
      paragraphs: [
        "אין תשלום באתר. מחיר והיקף נקבעים בכתב לפני תחילת העבודה.",
        "אין התחייבות למספר פניות או לתוצאה עסקית מסוימת.",
        "הדין החל הוא דין מדינת ישראל. סמכות השיפוט נתונה לבתי המשפט בישראל.",
      ],
    },
  ],
  accessibility: [
    {
      id: "done",
      title: "התאמות באתר",
      bullets: [
        "מבנה כותרות ברור, וקישור לדילוג לתוכן.",
        "ניווט במקלדת וסימון פוקוס.",
        "תוויות בטופס, והודעות על מצב השליחה.",
        "התאמה להפחתת תנועה.",
        "כפתור להגדלת טקסט ולהגברת ניגודיות.",
      ],
    },
    {
      id: "standard",
      title: "התקן",
      paragraphs: ["האתר נבנה לפי תקן ישראלי 5568. ייתכן שחלק מהעמודים עדיין טעון שיפור."],
    },
    {
      id: "contact",
      title: "פנייה",
      paragraphs: ["אם נתקלתם בקושי, נשמח שתכתבו לנו ונתקן."],
    },
  ],
  api: {
    tooLong: "הבקשה ארוכה מדי.",
    invalid: "הבקשה אינה תקינה.",
    name: "יש להזין שם.",
    phone: "מספר הטלפון אינו תקין.",
    email: "יש להזין אימייל תקין.",
    message: "יש להזין את תוכן הפנייה.",
    rate: "נשלחו פניות רבות. נסו שוב מאוחר יותר.",
    send: "השליחה נכשלה. נסו שוב.",
  },
  emails: {
    owner: {
      subject: "פנייה חדשה מהאתר",
      title: "פנייה חדשה",
      intro: "התקבלה פנייה באתר.",
      reply: "מענה לפנייה",
      site: "האתר",
    },
    visitor: {
      subject: "הפנייה התקבלה",
      title: "הפנייה התקבלה",
      hello: "שלום",
      body: "הפנייה התקבלה. אין צורך לשלוח אותה שוב.",
      next: "נחזור אליכם.",
      whatsapp: "לשיחה בוואטסאפ",
      reply: "ניתן גם להשיב להודעה זו.",
    },
  },
};

const en: Copy = {
  meta: {
    title: "Srulik Solutions | Websites, bots, and automation",
    description: "Websites, WhatsApp bots, and automation for businesses. We do the work for you.",
    siteName: "Srulik Solutions",
    locale: "en_US",
  },
  skip: "Skip to content",
  brand: "Srulik Solutions",
  navLabel: "Navigation",
  mobileNavLabel: "Menu",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuSr: "Menu",
  whatsappShort: "WhatsApp",
  langLabel: "Language",
  nav: [
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Srulik Solutions",
    headline: "Websites and bots for businesses",
    line: "You bring the problem. We find the solution.",
    secondary: "Services",
  },
  services: {
    id: "services",
    eyebrow: "Services",
    title: "Services",
    items: [
      { title: "Websites", line: "A clear site that leads to an inquiry." },
      {
        title: "WhatsApp bots",
        line: "Automatic replies, plus sending messages and status updates.",
      },
      { title: "Automation", line: "Forms, email, and WhatsApp, connected." },
      {
        title: "Custom systems",
        line: "Management systems, integrations, and complex solutions built around your business.",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "About",
    title: "About",
    paragraphs: [
      "I'm Srulik Shvadron, a software developer.",
      "Many business owners know technology can save them time, but have no time to learn it.",
      "That's where I come in: I build websites, bots, and automations for them, and stay with them after launch.",
      "You focus on your business; I handle the technology.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "Inquiry",
    title: "Contact",
    subtitle: "Write on WhatsApp, or leave a message in the form.",
    whatsappTitle: "WhatsApp",
    whatsappBody: "For a direct message.",
    whatsappCta: "Message on WhatsApp",
    nameLabel: "Name",
    phoneLabel: "Phone",
    phoneHint: "Optional",
    emailLabel: "Email",
    messageLabel: "Message",
    submit: "Send",
    sending: "Sending",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone",
    emailPlaceholder: "Email",
    messagePlaceholder: "Your message",
    note: "We will get back to you.",
    success: "Your message was sent. We will get back to you.",
    successConfirmed: "Your message was sent. A confirmation was sent to your email.",
    fallbackError: "The message could not be sent. Please try again.",
    honeypot: "Company",
  },
  footer: {
    tagline: "Websites, bots, and automation for businesses.",
    operator: "Srulik Shvadron",
    rights: "All rights reserved.",
    navLabel: "Information",
    privacy: "Privacy policy",
    terms: "Terms of use",
    accessibility: "Accessibility statement",
    whatsapp: "WhatsApp",
    phone: "Phone",
  },
  a11y: {
    title: "Accessibility",
    large: "Large text",
    contrast: "High contrast",
    statement: "Accessibility statement",
    button: "Accessibility",
  },
  pages: {
    privacy: {
      title: "Privacy policy",
      description: "What information is collected on the site and through YouTube, and how to request deletion.",
      kicker: "Srulik Solutions",
      intro: "This page states what information is collected, why it is used, and how to request deletion.",
      updated: "Updated: 21 November 2026",
    },
    terms: {
      title: "Terms of use",
      description: "Terms of use for the Srulik Solutions website and services.",
      kicker: "Srulik Solutions",
      intro: "Using this website means you agree to these terms.",
      updated: "Updated: 21 November 2026",
    },
    accessibility: {
      title: "Accessibility statement",
      description: "Accessibility statement for the Srulik Solutions website.",
      kicker: "Srulik Solutions",
      intro: "We work so the site can be used by people with disabilities.",
      updated: "Updated: November 2026",
    },
    back: "Back to the home page",
  },
  privacy: [
    {
      id: "who",
      title: "Who operates the service",
      paragraphs: [
        "This website is operated by Srulik Solutions. The person responsible is Srulik Shvadron.",
        "For a question or a deletion request, use the contact form, WhatsApp, or the phone. Write “data deletion request” in the subject.",
      ],
    },
    {
      id: "site",
      title: "Information on the website",
      paragraphs: ["The website collects only what you send us, and operational data needed for security."],
      bullets: [
        "Form: name, email, phone if provided, and the message.",
        "WhatsApp: the messages you send us.",
        "Server: IP address, browser type, and time of the request, kept for up to 90 days.",
        "There are no advertising cookies and no third-party analytics.",
        "Accessibility preferences stay in your browser and are not sent to us.",
      ],
    },
    {
      id: "youtube",
      title: "YouTube connection",
      paragraphs: [
        "A YouTube channel is connected only when the account owner approves it.",
        `The requested permission is the YouTube upload scope: ${youtubeScope}. It does not include Gmail, Drive, or your password.`,
        "The data is used to upload a video you approved, and to show the upload status. It is not sold and it is not used for advertising.",
        "Srulik Solutions' use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.",
        "The service uses YouTube API Services. The YouTube Terms of Service and Google’s Privacy Policy also apply.",
      ],
      bullets: [
        "We store the account email, channel id, access and refresh tokens, and the title of a video you approved.",
        "People do not read this data unless you ask, or it is required for security or by law.",
        "You can revoke access at any time in your Google Account permissions.",
      ],
      links: [
        { href: googlePolicyLinks.userDataPolicy, label: "Google API Services User Data Policy" },
        { href: googlePolicyLinks.youtubeTerms, label: "YouTube Terms of Service" },
        { href: googlePolicyLinks.privacy, label: "Google Privacy Policy" },
        { href: googlePolicyLinks.permissions, label: "Google Account permissions" },
      ],
    },
    {
      id: "delete",
      title: "Storage and deletion",
      paragraphs: [
        "Tokens are kept while the connection is active, on the business’s servers. Access is limited to the operator.",
        "A deletion request, or a disconnect with us, is completed within 7 days. On a disconnect with us, the token is revoked immediately.",
        "A disconnect through Google, or a token that can no longer be refreshed, leads to deletion within 30 days.",
        "Deleting data we store does not delete a video already uploaded to YouTube. Delete that video in YouTube.",
      ],
    },
  ],
  terms: [
    {
      id: "service",
      title: "The service",
      paragraphs: [
        "Srulik Solutions is operated by Srulik Shvadron.",
        "The service covers websites, WhatsApp bots, automation, and custom systems.",
        "We do the work. This is not a course.",
      ],
    },
    {
      id: "customer",
      title: "The customer’s responsibility",
      paragraphs: [
        "You are responsible for content you ask us to send or publish, and for your right to use it.",
        "A WhatsApp or YouTube account is connected only with the account owner’s permission.",
        "We may refuse content that is unlawful or that breaks a platform’s rules.",
      ],
      links: [{ href: googlePolicyLinks.youtubeTerms, label: "YouTube Terms of Service" }],
    },
    {
      id: "pay",
      title: "Fees and law",
      paragraphs: [
        "The website does not take payment. Price and scope are agreed in writing before work starts.",
        "We do not promise a number of inquiries or a particular business result.",
        "The laws of the State of Israel apply. The courts of Israel have jurisdiction.",
      ],
    },
  ],
  accessibility: [
    {
      id: "done",
      title: "Adjustments on the site",
      bullets: [
        "Clear headings, and a skip link.",
        "Keyboard use, and a visible focus style.",
        "Form labels, and status messages.",
        "Support for reduced motion.",
        "A control for larger text and higher contrast.",
      ],
    },
    {
      id: "standard",
      title: "Standard",
      paragraphs: [
        "The site is built toward Israeli Standard 5568 and WCAG 2.1 level AA. Some parts may still need improvement.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: ["If you meet a barrier, write to us and we will correct it."],
    },
  ],
  api: {
    tooLong: "The request is too long.",
    invalid: "The request is not valid.",
    name: "Please enter a name.",
    phone: "The phone number is not valid.",
    email: "Please enter a valid email address.",
    message: "Please enter a message.",
    rate: "Too many messages. Please try again later.",
    send: "The message could not be sent. Please try again.",
  },
  emails: {
    owner: {
      subject: "New message from the website",
      title: "New message",
      intro: "A message was received on the website.",
      reply: "Reply",
      site: "Website",
    },
    visitor: {
      subject: "We received your message",
      title: "Message received",
      hello: "Hello",
      body: "We received your message. You do not need to send it again.",
      next: "We will get back to you.",
      whatsapp: "Message on WhatsApp",
      reply: "You can also reply to this email.",
    },
  },
};

const copies = { he, en } as const;

export function getCopy(locale: Locale): Copy {
  return copies[locale];
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "he";
}

export function pathForLocale(locale: Locale, pathname: string) {
  const bare = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  if (locale === "he") return bare;
  return bare === "/" ? "/en" : `/en${bare}`;
}
