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
  headerCta: { label: string; short: string };
  langLabel: string;
  nav: { id: string; label: string }[];
  hero: { eyebrow: string; headline: string; line: string; aside: string; primary: string; secondary: string };
  services: {
    id: string;
    eyebrow: string;
    title: string;
    items: { title: string; lines: string[]; quiet?: boolean }[];
  };
  process: {
    id: string;
    beats: [string, string, string];
  };
  examples: {
    id: string;
    title: string;
    labels: { before: string; after: string };
    items: { before: string; after: string }[];
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
    briefTitle: string;
    briefItems: string[];
    afterTitle: string;
    after: string;
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
    successTitle: string;
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
  notFound: { kicker: string; title: string; line: string };
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
    title: "שרוליק | יש לך עסק. לי יש את הצד הטכני.",
    description: "אתה מספר לי מה מציק, ואני דואג שזה יעבוד. בלי הדרכות, בלי מונחים ובלי \"תנסה לעשות ריסטרט\".",
    siteName: "שרוליק",
    locale: "he_IL",
  },
  skip: "דילוג לתוכן",
  brand: "שרוליק",
  navLabel: "ניווט",
  mobileNavLabel: "תפריט",
  menuOpen: "פתיחת תפריט",
  menuClose: "סגירת תפריט",
  menuSr: "תפריט",
  whatsappShort: "וואטסאפ",
  headerCta: { label: "בואו נדבר", short: "נדבר" },
  langLabel: "שפה",
  nav: [
    { id: "services", label: "שירותים" },
    { id: "process", label: "הדרך" },
    { id: "examples", label: "לפני ואחרי" },
    { id: "about", label: "אודות" },
    { id: "contact", label: "יצירת קשר" },
  ],
  hero: {
    eyebrow: "",
    headline: "יש לך עסק. לי יש את הצד הטכני.",
    line: "אתה מספר לי מה מציק, ואני דואג שזה יעבוד. בלי הדרכות, בלי מונחים ובלי \"תנסה לעשות ריסטרט\".",
    aside: "אופס, זה כבר עובד.",
    primary: "בואו נדבר",
    secondary: "לשירותים",
  },
  services: {
    id: "services",
    eyebrow: "שירותים",
    title: "שירותים",
    items: [
      {
        title: "הלקוחות מוצאים אותך",
        lines: [
          "אתר שאומר מה אתה עושה, בלי שתסביר את זה שוב בטלפון.",
          "הלקוח קורא, מבין, ושולח וואטסאפ.",
        ],
      },
      {
        title: "הכול במקום אחד",
        lines: [
          "מערכת שנבנית לעסק שלך, לא תוכנה מן המוכן שמתאימים בכוח.",
          "הזמנות, תשלומים ולקוחות יושבים במקום אחד.",
        ],
      },
      {
        title: "פחות עבודה ידנית",
        lines: ["בוט קטן, או חיבור קטן, רק איפה שאתה חוזר על אותו דבר."],
        quiet: true,
      },
      {
        title: "יש למי להתקשר",
        lines: [
          "אחרי שזה עובד, אני נשאר.",
          "נתקע משהו? מתקשרים. בלי \"תנסה לעשות ריסטרט\".",
        ],
      },
    ],
  },
  process: {
    id: "process",
    beats: ["מתקשרים.", "מספרים.", "אופס, זה כבר עובד."],
  },
  examples: {
    id: "examples",
    title: "לפני / אחרי",
    labels: { before: "לפני", after: "אחרי" },
    items: [
      {
        before: "מי שילם? רגע, אני בודק במחברת",
        after: "פותחים את הטלפון ורואים",
      },
      {
        before: "עסק בלי אתר",
        after: "לקוחות שולחים וואטסאפ מהאתר",
      },
      {
        before: "הזמנות על פתקים",
        after: "הכול במקום אחד",
      },
      {
        before: "לקוחות שוכחים תורים",
        after: "תזכורת יוצאת לבד",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "אודות",
    title: "אודות",
    paragraphs: [
      "אני שרוליק, מפתח תוכנה.",
      "אני עושה את הטכנולוגיה בשבילכם, כדי שלא תצטרכו ללמוד אותה.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "פנייה",
    title: "יצירת קשר",
    subtitle: "וואטסאפ, או הטופס. מה שנוח לך.",
    whatsappTitle: "וואטסאפ",
    whatsappBody: "אם יותר קל לדבר עכשיו.",
    whatsappCta: "בואו נדבר",
    briefTitle: "בשיחה",
    briefItems: ["אתה מספר מה מציק", "אני אומר מה אפשר לעשות", "מחליטים אם מתחילים", "ואם כן, מתי"],
    afterTitle: "אחרי הטופס",
    after: "שולחים, ואני חוזר. אם יותר קל לדבר עכשיו, הוואטסאפ פתוח.",
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
    note: "אחזור אליך.",
    successTitle: "אופס, זה כבר עובד ✓",
    success: "אחזור אליך.",
    successConfirmed: "אישור נשלח לאימייל. אחזור אליך.",
    fallbackError: "השליחה נכשלה. נסו שוב.",
    honeypot: "חברה",
  },
  footer: {
    tagline: "אתרים, בוטים ומערכות לעסקים",
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
  notFound: {
    kicker: "404",
    title: "אופס, זה עוד לא עובד.",
    line: "העמוד הזה אינו קיים.",
  },
  pages: {
    privacy: {
      title: "מדיניות פרטיות",
      description: "איזה מידע נאסף באתר, וכיצד ניתן לבקש מחיקה.",
      kicker: "שרוליק",
      intro: "מסמך זה מתאר איזה מידע נאסף, לאיזה צורך, וכיצד ניתן לבקש מחיקה.",
      updated: "עודכן: 21 בנובמבר 2026",
    },
    terms: {
      title: "תנאי שימוש",
      description: "תנאי השימוש באתר ובשירותים של שרוליק.",
      kicker: "שרוליק",
      intro: "השימוש באתר מהווה הסכמה לתנאים אלה.",
      updated: "עודכן: 21 בנובמבר 2026",
    },
    accessibility: {
      title: "הצהרת נגישות",
      description: "הצהרת הנגישות של אתר שרוליק.",
      kicker: "שרוליק",
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
        "האתר מופעל על ידי שרוליק. מאחורי העסק: שרוליק שוודרון.",
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
      id: "delete",
      title: "שמירה ומחיקה",
      paragraphs: [
        "פניות מהטופס נשמרות כדי שנוכל לחזור אליכם. הגישה אליהן מוגבלת למפעיל.",
        "בקשת מחיקה תושלם בתוך שבעה ימים.",
      ],
    },
  ],
  terms: [
    {
      id: "service",
      title: "השירות",
      paragraphs: [
        "שרוליק מופעל על ידי שרוליק שוודרון.",
        "השירות כולל אתרים, בוטים לוואטסאפ, אוטומציה, ומערכות מותאמות אישית.",
        "אנו מבצעים את העבודה. אין כאן הדרכה או קורס.",
      ],
    },
    {
      id: "customer",
      title: "אחריות הלקוח",
      paragraphs: [
        "הלקוח אחראי לתוכן שהוא מבקש לשלוח או לפרסם, ולזכותו להשתמש בו.",
        "חיבור חשבון וואטסאפ נעשה בהרשאת בעל החשבון בלבד.",
        "אנו רשאים לסרב לתוכן שאינו חוקי, או שאינו עומד בכללי הפלטפורמה.",
      ],
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
    title: "Srulik | You have a business. I have the technical side.",
    description: "You tell me what's bugging you, and I make sure it works. No tutorials, no jargon, and no \"try restarting it\".",
    siteName: "Srulik",
    locale: "en_US",
  },
  skip: "Skip to content",
  brand: "Srulik",
  navLabel: "Navigation",
  mobileNavLabel: "Menu",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuSr: "Menu",
  whatsappShort: "WhatsApp",
  headerCta: { label: "Let's talk", short: "Talk" },
  langLabel: "Language",
  nav: [
    { id: "services", label: "Services" },
    { id: "process", label: "The path" },
    { id: "examples", label: "Before / after" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "",
    headline: "You have a business. I have the technical side.",
    line: "You tell me what's bugging you, and I make sure it works. No tutorials, no jargon, and no \"try restarting it\".",
    aside: "Oops, it already works.",
    primary: "Let's talk",
    secondary: "Services",
  },
  services: {
    id: "services",
    eyebrow: "Services",
    title: "Services",
    items: [
      {
        title: "Customers find you",
        lines: [
          "A site that says what you do, so you don't explain it again on the phone.",
          "They read it, they get it, they send a WhatsApp.",
        ],
      },
      {
        title: "Everything in one place",
        lines: [
          "A system built for your business, not a ready-made tool we force to fit.",
          "Orders, payments, and customers sit in one place.",
        ],
      },
      {
        title: "Less work by hand",
        lines: ["A small bot, or a small connection, only where you keep repeating yourself."],
        quiet: true,
      },
      {
        title: "Someone to call",
        lines: [
          "After it works, I stay.",
          "Something stuck? You call. No \"try restarting it\".",
        ],
      },
    ],
  },
  process: {
    id: "process",
    beats: ["You call.", "You tell me.", "Oops, it already works."],
  },
  examples: {
    id: "examples",
    title: "Before / after",
    labels: { before: "Before", after: "After" },
    items: [
      {
        before: "Who paid? Hang on, I'm checking the notebook",
        after: "You open the phone and see",
      },
      {
        before: "A business with no website",
        after: "Customers send a WhatsApp from the site",
      },
      {
        before: "Orders on scraps of paper",
        after: "Everything in one place",
      },
      {
        before: "Customers forgetting appointments",
        after: "A reminder goes out on its own",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "About",
    title: "About",
    paragraphs: [
      "I'm Srulik, a software developer.",
      "I do the technology for you, so you don't have to learn it.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "Inquiry",
    title: "Contact",
    subtitle: "WhatsApp, or the form. Whichever is easier.",
    whatsappTitle: "WhatsApp",
    whatsappBody: "If it's easier to talk now.",
    whatsappCta: "Let's talk",
    briefTitle: "On the call",
    briefItems: ["You tell me what's bugging you", "I say what we can do", "We decide if we start", "And if we do, when"],
    afterTitle: "After the form",
    after: "You send it, and I get back to you. If it's easier to talk now, WhatsApp is open.",
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
    note: "I'll get back to you.",
    successTitle: "Oops, it already works ✓",
    success: "I'll get back to you.",
    successConfirmed: "A confirmation went to your email. I'll get back to you.",
    fallbackError: "The message could not be sent. Please try again.",
    honeypot: "Company",
  },
  footer: {
    tagline: "Websites, bots and systems for businesses",
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
  notFound: {
    kicker: "404",
    title: "Oops, this doesn't work yet.",
    line: "This page does not exist.",
  },
  pages: {
    privacy: {
      title: "Privacy policy",
      description: "What information is collected on the site, and how to request deletion.",
      kicker: "Srulik",
      intro: "This page states what information is collected, why it is used, and how to request deletion.",
      updated: "Updated: 21 November 2026",
    },
    terms: {
      title: "Terms of use",
      description: "Terms of use for the Srulik website and services.",
      kicker: "Srulik",
      intro: "Using this website means you agree to these terms.",
      updated: "Updated: 21 November 2026",
    },
    accessibility: {
      title: "Accessibility statement",
      description: "Accessibility statement for the Srulik website.",
      kicker: "Srulik",
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
        "This website is operated by Srulik. The person responsible is Srulik Shvadron.",
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
      id: "delete",
      title: "Storage and deletion",
      paragraphs: [
        "Form messages are kept so we can reply. Access is limited to the operator.",
        "A deletion request is completed within 7 days.",
      ],
    },
  ],
  terms: [
    {
      id: "service",
      title: "The service",
      paragraphs: [
        "Srulik is operated by Srulik Shvadron.",
        "The service covers websites, WhatsApp bots, automation, and custom systems.",
        "We do the work. This is not a course.",
      ],
    },
    {
      id: "customer",
      title: "The customer’s responsibility",
      paragraphs: [
        "You are responsible for content you ask us to send or publish, and for your right to use it.",
        "A WhatsApp account is connected only with the account owner's permission.",
        "We may refuse content that is unlawful or that breaks a platform's rules.",
      ],
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
