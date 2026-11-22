export type Locale = "he" | "en";

export type IconName = "site" | "system" | "loop" | "support" | "person" | "key" | "tag";

export type LegalBlock = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: { href: string; label: string }[];
};

export type Copy = {
  meta: { title: string; description: string; socialTitle: string; siteName: string; locale: string };
  whatsappPrefill: string;
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
    items: { icon: IconName; title: string; lines: string[]; quiet?: boolean }[];
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
    callCta: string;
    phoneLine: string;
    trust: { icon: IconName; title: string; text: string }[];
    reachHint: string;
    briefTitle: string;
    briefItems: string[];
    afterTitle: string;
    after: string;
    nameLabel: string;
    phoneLabel: string;
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
    credit: string;
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
    contact: string;
    message: string;
    rate: string;
    send: string;
  };
  emails: {
    owner: { subject: string; title: string; intro: string; reply: string; site: string };
    visitor: { subject: string; title: string; hello: string; body: string; next: string; sign: string; whatsapp: string; reply: string };
  };
};

const he: Copy = {
  meta: {
    title: "שרוליק | אתרים ומערכות לעסקים. אופס, זה כבר עובד.",
    description:
      "אתרים ומערכות שנתפרים לעסק, וליווי גם אחרי שהכול עולה. מפתח תוכנה שניהל בעבר עובדים, מחסן ודוחות, ומכיר את הבעיות של עסק מבפנים.",
    socialTitle: "שרוליק | מה שמציק לך בעסק, אצלי זה כבר משימה.",
    siteName: "שרוליק",
    locale: "he_IL",
  },
  whatsappPrefill: "היי שרוליק, הגעתי מהאתר. יש משהו בעסק שמציק לי, אפשר לדבר?",
  skip: "דילוג לתוכן",
  brand: "שרוליק",
  navLabel: "ניווט",
  mobileNavLabel: "תפריט",
  menuOpen: "פתיחת תפריט",
  menuClose: "סגירת תפריט",
  menuSr: "תפריט",
  whatsappShort: "וואטסאפ",
  headerCta: { label: "נדבר בוואטסאפ", short: "נדבר" },
  langLabel: "שפה",
  nav: [
    { id: "services", label: "מה אני עושה" },
    { id: "process", label: "איך מתחילים" },
    { id: "examples", label: "לפני ואחרי" },
    { id: "about", label: "מי אני" },
    { id: "contact", label: "דבר איתי" },
  ],
  hero: {
    eyebrow: "אתרים, בוטים ומערכות לעסקים",
    headline: "מה שמציק לך בעסק, אצלי זה כבר משימה.",
    line: "ניהלתי עובדים, מחסן ודוחות. היום אני מפתח מערכות במשרה מלאה. את שני העולמות אני מביא לעסק שלך.",
    aside: "אופס, זה כבר עובד.",
    primary: "נדבר בוואטסאפ",
    secondary: "מה אני עושה",
  },
  services: {
    id: "services",
    eyebrow: "מה אני עושה",
    title: "אני לוקח את הצד הטכני. כולו.",
    items: [
      {
        icon: "site",
        title: "אתר שעונה לפני שמתקשרים",
        lines: [
          "מה אתה עושה, למי זה מתאים ואיך פונים: ברור מהשנייה הראשונה.",
          "הלקוח קורא, מבין, ושולח הודעה.",
        ],
      },
      {
        icon: "system",
        title: "מערכת שתפורה לעסק שלך",
        lines: [
          "לא תוכנה מהמדף שהעסק צריך להתאים את עצמו אליה, אלא מערכת שנבנית סביב הדרך שבה אתה כבר עובד.",
          "הזמנות, לקוחות, תשלומים ומלאי, במסך אחד.",
        ],
      },
      {
        icon: "loop",
        title: "פחות העתק-הדבק",
        lines: ["מה שאתה עושה ידנית כל יום, חיבור קטן או בוט יכולים לעשות במקומך."],
        quiet: true,
      },
      {
        icon: "support",
        title: "יש למי להתקשר",
        lines: [
          "אני לא נעלם אחרי שהכול עולה.",
          "נתקע משהו? מתקשרים אליי, לא למוקד. ובלי \"תנסה לעשות ריסטרט\".",
        ],
      },
    ],
  },
  process: {
    id: "process",
    beats: ["שולחים הודעה.", "מספרים מה מציק.", "אופס, זה כבר עובד."],
  },
  examples: {
    id: "examples",
    title: "מכיר את זה?",
    labels: { before: "לפני", after: "אחרי" },
    items: [
      {
        before: "\"מי שילם? רגע, אני מחפש במחברת.\"",
        after: "פותחים את הטלפון ורואים.",
      },
      {
        before: "מסביר שוב בטלפון מה אתה עושה.",
        after: "שולח קישור, וזהו.",
      },
      {
        before: "הזמנות על פתקים, ופתקים בכיסים.",
        after: "כל ההזמנות במסך אחד.",
      },
      {
        before: "סוף חודש הולך על ערב שלם של דוחות.",
        after: "הדוח מוכן כשאתה צריך אותו.",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "מי אני",
    title: "אני מכיר את העסק שלך מבפנים.",
    paragraphs: [
      "אני שרוליק שוודרון, מפתח תוכנה.",
      "לפני הקוד ניהלתי עבודה בחברת שליחויות: עובדים, מחסן, דוחות, ובעצם כל מה שלא היה לו אחראי אחר.",
      "שם ראיתי כמה זמן הולך על חיפוש בפתקים, על אקסל שאף אחד לא מבין ועל טלפון שמצלצל באמצע הכול.",
      "מערכות זה לא תחביב אצלי, זו העבודה שלי, כל יום. ביום אני בונה מערכות גדולות שאנשים סומכים עליהן, ובשבילך אני בונה בדיוק כאלה, רק בגודל של העסק שלך.",
      "היום אני בונה את הכלים שהיו חסרים לי אז. אתה מספר מה מציק, ואני כבר יודע איך זה נראה מבפנים ומה צריך לבנות.",
      "בגובה העיניים, בלי מונחים, ובלי שתצטרך ללמוד שום דבר.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "נדבר?",
    title: "ספר לי מה מציק. משם זה עליי.",
    subtitle: "וואטסאפ או טופס, מה שנוח לך. כל פנייה מגיעה ישירות אליי.",
    whatsappTitle: "וואטסאפ",
    whatsappBody: "הדרך הקצרה ביותר. כותבים שורה, ואני חוזר.",
    whatsappCta: "נדבר בוואטסאפ",
    callCta: "להתקשר",
    phoneLine: "או בטלפון:",
    trust: [
      {
        icon: "person",
        title: "עונה אישית",
        text: "כשאתה כותב, אני זה שעונה. לא מוקד ולא בוט. בדרך כלל עוד באותו יום.",
      },
      {
        icon: "key",
        title: "בלי שלשלאות",
        text: "בלי חוזה שתוקע אותך ובלי אותיות קטנות. האתר, הקוד והדומיין רשומים על שמך. זה שלך, נקודה.",
      },
      {
        icon: "tag",
        title: "מחיר בלי הפתעות",
        text: "המחיר נקבע לפי מה שהעסק באמת צריך. אחרי השיחה הראשונה אתה מקבל הצעה מסודרת וברורה, ומתחילים רק אחרי שאמרת כן.",
      },
    ],
    reachHint: "איך חוזרים אליך? מספיק טלפון או אימייל, אחד מהם.",
    briefTitle: "מה קורה בשיחה הראשונה",
    briefItems: [
      "אתה מספר מה מציק",
      "אני אומר בפשטות מה אפשר לעשות",
      "מחליטים יחד אם ומתי מתחילים",
    ],
    afterTitle: "אחרי השליחה",
    after: "הפנייה מגיעה ישירות אליי, ואני חוזר אליך. ממהר? הוואטסאפ פתוח.",
    nameLabel: "שם",
    phoneLabel: "טלפון",
    emailLabel: "אימייל",
    messageLabel: "מה מציק?",
    submit: "שליחה",
    sending: "שולח…",
    namePlaceholder: "איך לפנות אליך?",
    phonePlaceholder: "מספר לחזרה",
    emailPlaceholder: "כתובת לחזרה",
    messagePlaceholder: "כמה מילים מספיקות. למשל: ההזמנות מתפזרות לי בין וואטסאפ לפתקים.",
    note: "אני חוזר לכל פנייה.",
    successTitle: "אופס, זה כבר עובד.",
    success: "הפנייה אצלי. אחזור אליך בקרוב.",
    successConfirmed: "הפנייה אצלי, ואישור נשלח למייל שלך. אחזור אליך בקרוב.",
    fallbackError: "אופס, הפעם זה לא עבד. נסה שוב, או שלח לי וואטסאפ.",
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
    credit: "נבנה ע״י שרוליק. מה חשבת?",
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
    line: "העמוד הזה לא קיים, אבל דף הבית קיים.",
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
        "פניות מהטופס נשמרות כדי שנוכל לחזור אליך. הגישה אליהן מוגבלת למפעיל.",
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
      paragraphs: ["אם נתקלת בקושי, נשמח שתכתוב לנו ונתקן."],
    },
  ],
  api: {
    tooLong: "ההודעה ארוכה מדי. אפשר לקצר, או להמשיך בוואטסאפ.",
    invalid: "משהו בפנייה לא תקין. נסה שוב.",
    name: "איך קוראים לך? חסר שם.",
    phone: "המספר לא נראה תקין. כדאי לבדוק שוב.",
    email: "כתובת המייל לא נראית תקינה.",
    contact: "השאר טלפון או אימייל, כדי שאוכל לחזור אליך.",
    message: "כתוב בכמה מילים מה מציק.",
    rate: "נשלחו הרבה פניות ברצף. נסה שוב בעוד כמה דקות.",
    send: "אופס, הפעם זה לא עבד. נסה שוב, או שלח לי וואטסאפ.",
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
      subject: "הפנייה שלך אצלי",
      title: "הפנייה שלך אצלי",
      hello: "שלום",
      body: "קיבלתי את הפנייה, אין צורך לשלוח אותה שוב.",
      next: "אחזור אליך בקרוב.",
      sign: "שרוליק",
      whatsapp: "להמשך בוואטסאפ",
      reply: "אפשר גם פשוט להשיב למייל הזה.",
    },
  },
};

const en: Copy = {
  meta: {
    title: "Srulik | Websites and systems. Oops, it already works.",
    description:
      "Websites and custom systems built around your business, with support after launch. By a developer who has run workers, a warehouse and reports.",
    socialTitle: "Srulik | What bugs you about your business is my next job.",
    siteName: "Srulik",
    locale: "en_US",
  },
  whatsappPrefill: "Hi Srulik, I found you through the website. Something in my business is bugging me. Can we talk?",
  skip: "Skip to content",
  brand: "Srulik",
  navLabel: "Navigation",
  mobileNavLabel: "Menu",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuSr: "Menu",
  whatsappShort: "WhatsApp",
  headerCta: { label: "Let's talk on WhatsApp", short: "Let's talk" },
  langLabel: "Language",
  nav: [
    { id: "services", label: "What I do" },
    { id: "process", label: "Getting started" },
    { id: "examples", label: "Before & after" },
    { id: "about", label: "Who I am" },
    { id: "contact", label: "Talk to me" },
  ],
  hero: {
    eyebrow: "Websites, bots and systems for businesses",
    headline: "What bugs you about your business is my next job.",
    line: "I've managed workers, a warehouse, and reports. Today I'm a full-time systems developer. I bring both worlds to your business.",
    aside: "Oops, it already works.",
    primary: "Let's talk on WhatsApp",
    secondary: "What I do",
  },
  services: {
    id: "services",
    eyebrow: "What I do",
    title: "I take the technical side. All of it.",
    items: [
      {
        icon: "site",
        title: "A site that answers before they call",
        lines: [
          "What you do, who it's for, and how to reach you, clear in a second.",
          "They read it, get it, and send a message.",
        ],
      },
      {
        icon: "system",
        title: "A system made for your business",
        lines: [
          "Not off-the-shelf software you bend to fit, but one built around how you already work.",
          "Orders, customers, payments, and stock on one screen.",
        ],
      },
      {
        icon: "loop",
        title: "Less copy-paste",
        lines: ["The things you do by hand every day, a small connection or bot can do for you."],
        quiet: true,
      },
      {
        icon: "support",
        title: "Someone to call",
        lines: [
          "I don't vanish after launch.",
          "Stuck? You call me, not a call center. And no \"try restarting it.\"",
        ],
      },
    ],
  },
  process: {
    id: "process",
    beats: ["Send a message.", "Tell me what's bugging you.", "Oops, it already works."],
  },
  examples: {
    id: "examples",
    title: "Sound familiar?",
    labels: { before: "Before", after: "After" },
    items: [
      {
        before: "\"Who paid? Hang on, checking the notebook.\"",
        after: "Open your phone and see.",
      },
      {
        before: "Explaining again on the phone what you do.",
        after: "Send a link, done.",
      },
      {
        before: "Orders on notes, notes in pockets.",
        after: "Every order on one screen.",
      },
      {
        before: "End of month means a whole evening of reports.",
        after: "The report's ready when you need it.",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "Who I am",
    title: "I know your business from the inside.",
    paragraphs: [
      "I'm Srulik Shvadron, a software developer.",
      "Before code, I was a work manager at a courier company: workers, a warehouse, reports, and pretty much anything nobody else owned.",
      "I saw how much time goes on digging through notes, on spreadsheets nobody understands, and on a phone that rings in the middle of everything.",
      "Systems aren't a hobby for me, they're my job, every day. By day I build large systems people rely on, and for you I build exactly that, sized for your business.",
      "Now I build the tools I was missing back then. You tell me what's bugging you, and I already know what it looks like from the inside and what needs building.",
      "Straight talk, no jargon, nothing for you to learn.",
    ],
  },
  contact: {
    id: "contact",
    eyebrow: "Let's talk?",
    title: "Tell me what's bugging you. I'll take it from there.",
    subtitle: "WhatsApp or the form, whichever is easier. Every message comes straight to me.",
    whatsappTitle: "WhatsApp",
    whatsappBody: "The shortest way. Write a line, and I'll get back to you.",
    whatsappCta: "Let's talk on WhatsApp",
    callCta: "Call",
    phoneLine: "Or by phone:",
    trust: [
      {
        icon: "person",
        title: "I answer personally",
        text: "Not a call center, not a bot. Usually the same day.",
      },
      {
        icon: "key",
        title: "No lock-in",
        text: "No binding contract, no fine print. The site, the code and the domain are in your name.",
      },
      {
        icon: "tag",
        title: "No-surprise pricing",
        text: "Pricing fits what your business actually needs. A clear quote after the first call, and nothing starts until you say yes.",
      },
    ],
    reachHint: "How do I reach you? A phone number or an email is enough, either one.",
    briefTitle: "What happens on the first call",
    briefItems: [
      "You tell me what's bugging you",
      "I tell you plainly what can be done",
      "We decide together if and when to start",
    ],
    afterTitle: "After you send",
    after: "Every message comes straight to me, and I'll get back to you. In a hurry? WhatsApp is open.",
    nameLabel: "Name",
    phoneLabel: "Phone",
    emailLabel: "Email",
    messageLabel: "What's bugging you?",
    submit: "Send",
    sending: "Sending…",
    namePlaceholder: "What should I call you?",
    phonePlaceholder: "Number to call back",
    emailPlaceholder: "Where to reply",
    messagePlaceholder: "A few words is enough. For example: my orders are scattered between WhatsApp and notes.",
    note: "I reply to every message.",
    successTitle: "Oops, it already works.",
    success: "Got it. I'll get back to you soon.",
    successConfirmed: "Got it, and a confirmation is in your inbox. I'll get back to you soon.",
    fallbackError: "Oops, that didn't go through. Try again, or WhatsApp me.",
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
    credit: "Built by Srulik. Naturally.",
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
    line: "This page doesn't exist, but the home page does.",
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
    back: "Back to home",
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
    tooLong: "That's a bit long. Shorten it, or continue on WhatsApp.",
    invalid: "Something in the form isn't right. Please try again.",
    name: "What's your name?",
    phone: "That number doesn't look right.",
    email: "That email doesn't look right.",
    contact: "Leave a phone number or an email so I can get back to you.",
    message: "Tell me in a few words what's bugging you.",
    rate: "Too many messages in a row. Try again in a few minutes.",
    send: "Oops, that didn't go through. Try again, or WhatsApp me.",
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
      subject: "Your message is with me",
      title: "Your message is with me",
      hello: "Hello",
      body: "I got your message, no need to send it again.",
      next: "I'll get back to you soon.",
      sign: "Srulik",
      whatsapp: "Continue on WhatsApp",
      reply: "You can also just reply to this email.",
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
