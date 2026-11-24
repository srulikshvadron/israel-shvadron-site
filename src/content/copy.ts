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
  brandTagline: string;
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
    title: string;
    intro: string;
    items: {
      title: string;
      line: string;
      build?: string;
      button: string;
      prefill: string;
      distinct?: boolean;
    }[];
    quiet: string;
  };
  building: {
    id: string;
    title: string;
    subtitle: string;
    tag: string;
    items: string[];
    closing: string;
  };
  process: {
    id: string;
    title: string;
    subtitle: string;
    steps: string[];
    beats: [string, string, string];
  };
  tech: {
    id: string;
    title: string;
    subtitle: string;
    items: { term: string; line: string }[];
    closing: string;
  };
  examples: {
    id: string;
    title: string;
    quotes: string[];
    closing: string;
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
    title: "שרוליק | מערכות ניהול לעסקים. אופס, זה כבר עובד.",
    description:
      "מערכות ניהול לעסקים: הזמנות, חובות, משמרות, מלאי ודוחות, הכול במסך אחד ובדיוק לפי איך שהעסק שלך עובד. נבנות על ידי מפתח תוכנה שניהל עסק מבפנים. וגם אתר או בוט, אם צריך.",
    socialTitle: "שרוליק | יושב לך על הראש? אני אבנה לזה מערכת.",
    siteName: "שרוליק",
    locale: "he_IL",
  },
  whatsappPrefill: "היי שרוליק, הגעתי מהאתר. יש משהו בעסק שיושב לי על הראש. אפשר לדבר?",
  skip: "דילוג לתוכן",
  brand: "שרוליק",
  brandTagline: "מערכות ניהול לעסקים",
  navLabel: "ניווט",
  mobileNavLabel: "תפריט",
  menuOpen: "פתיחת תפריט",
  menuClose: "סגירת תפריט",
  menuSr: "תפריט",
  whatsappShort: "וואטסאפ",
  headerCta: { label: "נדבר בוואטסאפ", short: "וואטסאפ" },
  langLabel: "שפה",
  nav: [
    { id: "services", label: "מה מציק" },
    { id: "building", label: "בפיתוח" },
    { id: "process", label: "איך זה עובד" },
    { id: "tech", label: "מתחת למכסה" },
    { id: "about", label: "מי אני" },
    { id: "contact", label: "דבר איתי" },
  ],
  hero: {
    eyebrow: "מערכות ניהול לעסקים. וגם אתר או בוט, אם צריך.",
    headline: "יושב לך על הראש? אני אבנה לזה מערכת.",
    line: "הזמנות, חובות, משמרות, מלאי, מי צריך לחזור למי. כל מה שאתה סוחב בראש עובר למערכת אחת חכמה, עם בינה מלאכותית איפה שזה עוזר, ואתה חוזר לנהל את העסק.",
    aside: "אופס, זה כבר עובד.",
    primary: "ספר לי מה מציק",
    secondary: "תראה מה אפשר לבנות",
  },
  services: {
    id: "services",
    title: "תבחר מה מציק. אני אגיד לך איזו מערכת הייתי בונה.",
    intro: "לחץ על מה שהכי מזכיר את העסק שלך.",
    items: [
      {
        title: "הזמנות שהולכות לאיבוד בוואטסאפ",
        line: "הזמנה נכנסת, נקברת תחת ארבעים הודעות, ומתגלה ביום חמישי.",
        build: "הייתי בונה: מערכת הזמנות שקוראת את ההודעה בוואטסאפ (AI), מבינה מה הוזמן ושומרת אותו עם סטטוס: התקבלה, בהכנה, יצאה.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, ההזמנות אצלי הולכות לאיבוד בוואטסאפ. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "לא זוכר מי שילם",
        line: "מי שילם, מי חייב, ומי אמר \"אעביר מחר\" לפני שלושה שבועות.",
        build: "הייתי בונה: מערכת חובות ותשלומים. כרטיס לכל לקוח, רואים בטלפון מי חייב, ותזכורת נשלחת בלחיצה.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, אני לא זוכר מי שילם ומי לא. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "חצי יום מתקשר לעובדים",
        line: "מי בא מחר, מי מחליף את מי, ומי בכלל ענה לך.",
        build: "הייתי בונה: מערכת משמרות. סידור במסך, כל עובד רואה את שלו בטלפון ומאשר.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, אני מבלה חצי יום בטלפונים לעובדים. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "חשבתי שיש במלאי",
        line: "\"יש לנו מזה, אני בטוח.\" ואז פותחים את המדף.",
        build: "הייתי בונה: מערכת מלאי. כל כניסה ויציאה נרשמות, ויש התראה לפני שנגמר.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, אני חושב שיש לי במלאי ואז מתברר שאין. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "הגמ\"ח מתנהל במחברת",
        line: "הלוואות, החזרות, ערבים ותאריכים, והכול בכתב יד של מישהו אחד.",
        build: "הייתי בונה: מערכת לגמ\"ח. מי לווה, כמה החזיר, מה מגיע השבוע, והכול רק אצלך.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, הגמ\"ח שלנו מתנהל במחברת. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "סוף חודש = ערב של דוחות",
        line: "כל החודש אתה אוסף, ובסוף יושב ומחבר.",
        build: "הייתי בונה: דוחות שנבנים לבד מהנתונים שכבר נכנסו. פותחים, רואים, מדפיסים.",
        button: "זה בדיוק אני",
        prefill: "היי שרוליק, בסוף כל חודש אני יושב ערב שלם על דוחות. זה בדיוק אני. אפשר לדבר?",
      },
      {
        title: "מה שמציק לי לא מופיע פה",
        line: "אין בעיה. אני עושה כל מערכת שתצטרך. ספר לי מה יושב לך על הראש, ונראה איך נותנים לזה מסך.",
        button: "אצלי זה משהו אחר",
        prefill: "היי שרוליק, מה שמציק לי לא מופיע באתר. אפשר לספר לך מה זה?",
        distinct: true,
      },
    ],
    quiet: "צריך גם אתר או בוט לוואטסאפ? גם את זה אני עושה. רק שזה לא העיקר.",
  },
  building: {
    id: "building",
    title: "מערכות בפיתוח",
    subtitle: "מה שעל השולחן שלי עכשיו.",
    tag: "בבנייה",
    items: ["מערכת לאיתור תוכן", "מערכת להפקת תכנים", "מערכת להפצה למקורות שונים"],
    closing: "כשמשהו מוכן, הוא עולה לפה.",
  },
  process: {
    id: "process",
    title: "איך זה עובד",
    subtitle: "אתה צריך לעשות רק את הראשון.",
    steps: [
      "מספר לי מה מציק. בוואטסאפ, בשתי שורות, בלי מילים גדולות.",
      "סקיצה לפני קוד. אני מראה לך איך זה ייראה על המסך. לא מתאים? משנים עכשיו, לפני שנכתבה שורה.",
      "אני בונה, ואתה ממשיך לעבוד. בלי ישיבות ובלי שעות מולי. אני שואל רק מה שחייבים.",
      "אני נשאר זמין. נתקע משהו? מתקשרים אליי, לא למוקד. ובלי \"תנסה לעשות ריסטרט\".",
    ],
    beats: ["שולחים הודעה.", "מספרים מה מציק.", "אופס, זה כבר עובד."],
  },
  tech: {
    id: "tech",
    title: "מה יש מתחת למכסה",
    subtitle: "לא חייבים להבין את זה. כן כדאי לדעת שזה שם.",
    items: [
      {
        term: "מערכות עם בינה מלאכותית (AI / LLM)",
        line: "המערכת קוראת הודעות, מבינה מה ביקשו ומסדרת לבד. הזמנה שנכתבה בוואטסאפ בחופשיות נכנסת למקום הנכון, בלי שתעתיק.",
      },
      {
        term: "אבטחה, כי הנתונים שלך",
        line: "הצפנה, הרשאות לפי תפקיד (העובד רואה רק את שלו, השותף רואה עוד קצת, ואתה רואה הכול) וגיבויים אוטומטיים. הנתונים שייכים לך ולא לי.",
      },
      {
        term: "חיבורים ואוטומציות (API)",
        line: "וואטסאפ, מייל, חשבוניות והכלים שכבר יש לך מדברים עם המערכת. מה שעשית ידנית כל יום קורה לבד.",
      },
      {
        term: "ענן ויציבות (Uptime ומעקב)",
        line: "המערכת רצה בענן, זמינה גם כשאתה לא ליד המחשב, ואני עוקב אחריה. נתקע משהו? אני על זה.",
      },
      {
        term: "בנויה למידה של העסק (ארכיטקטורה מותאמת)",
        line: "לא תבנית שמותחים בכוח. מערכת שנתפרת לעסק היום, ויודעת לגדול איתו: עוד עובדים, עוד לקוחות, עוד סניף.",
      },
    ],
    closing: "נשמע כבד? אתה רואה רק מסך אחד. כל השאר זה התפקיד שלי.",
  },
  examples: {
    id: "examples",
    title: "מכיר את זה?",
    quotes: [
      "\"רגע, מי שילם?\"",
      "\"באיזו קבוצה הוא כתב לי את זה?\"",
      "\"את האקסל הזה רק מי שבנה אותו מבין. והוא כבר לא פה.\"",
      "\"עוד מעט סוף חודש. יאללה, ערב של דוחות.\"",
    ],
    closing: "זה לא שאתה לא מסודר. פשוט העסק רץ יותר מהר מהפתקים.",
    labels: { before: "לפני", after: "אחרי" },
    items: [
      {
        before: "פתקים בכיסים, הודעות בקבוצות, וטלפון שמצלצל באמצע.",
        after: "מסך אחד.",
      },
      {
        before: "\"מי שילם? רגע, אני מחפש.\"",
        after: "פותחים את הטלפון ורואים.",
      },
      {
        before: "חצי יום בטלפונים לעובדים: מי בא, מי מחליף, מי שכח.",
        after: "הסידור בטלפון של כל אחד, ואתה רואה מי אישר.",
      },
      {
        before: "ערב שלם של דוחות בסוף החודש.",
        after: "הדוח כבר מחכה לך.",
      },
    ],
  },
  about: {
    id: "about",
    eyebrow: "מי אני",
    title: "ניהלתי את הבלגן. עכשיו אני בונה את המערכת שהייתה חסרה לי.",
    paragraphs: [
      "אני שרוליק שוודרון, מפתח תוכנה במשרה מלאה. את היום-יום שלי אני מעביר בבניית מערכות שאסור להן ליפול.",
      "לפני זה הייתי מנהל עבודה בחברת שליחויות: עובדים, מחסן, דוחות, וכל מה שלא היה לו אחראי אחר. את הבלגן הכרתי מבפנים, כי אני זה שהחזיק אותו.",
      "ראיתי כמה זמן הולך על חיפוש בפתקים, על אקסל שאף אחד לא מבין, ועל טלפון שמצלצל באמצע הכול. ותמיד חשבתי: למה אין לזה מערכת?",
      "היום אני יודע לבנות אותה. באותה הקפדה שאני נותן למערכות שאסור להן ליפול: אבטחה, גיבויים ומעקב, רק בגודל של העסק שלך.",
      "אתה מספר, אני מתרגם. בגובה העיניים, בלי מילים גדולות, ובלי שתצטרך ללמוד שום דבר.",
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
        title: "עונה אישית.",
        text: "כשאתה כותב, אני זה שעונה. לא מוקד ולא בוט.",
      },
      {
        icon: "key",
        title: "בלי שלשלאות.",
        text: "המערכת, הקוד והנתונים שלך, מוצפנים ומגובים, ומוגנים בהרשאות לפי תפקיד. בלי חוזה שתוקע אותך ובלי אותיות קטנות. תרצה לקחת ולעבור? תיקח.",
      },
      {
        icon: "system",
        title: "בלי הפתעות.",
        text: "מה שמסכמים בהתחלה זה מה שיש בסוף. שום דבר לא מתחיל לפני שאמרת כן.",
      },
    ],
    reachHint: "איך חוזרים אליך? מספיק טלפון או אימייל, אחד מהם.",
    briefTitle: "מה קורה בשיחה הראשונה",
    briefItems: [
      "אתה מספר מה מציק",
      "אני אומר בפשטות איזו מערכת הייתי בונה",
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
    tagline: "מערכות ניהול לעסקים. וגם אתר או בוט, אם צריך.",
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
        "השירות כולל מערכות ניהול ואוטומציה מותאמות אישית, וגם אתרים ובוטים לוואטסאפ.",
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
  brandTagline: "Websites, bots and systems for businesses",
  navLabel: "Navigation",
  mobileNavLabel: "Menu",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  menuSr: "Menu",
  whatsappShort: "WhatsApp",
  headerCta: { label: "Let's talk on WhatsApp", short: "WhatsApp" },
  langLabel: "Language",
  nav: [
    { id: "services", label: "What I do" },
    { id: "building", label: "In progress" },
    { id: "process", label: "Getting started" },
    { id: "tech", label: "Under the hood" },
    { id: "about", label: "Who I am" },
    { id: "contact", label: "Talk to me" },
  ],
  hero: {
    eyebrow: "Websites, bots and systems for businesses",
    headline: "What bugs you about your business is my next job.",
    line: "Orders, debts, shifts, stock, who needs a call back. What you carry in your head moves into one smart system, with AI where it helps, and you get back to running the business.",
    aside: "Oops, it already works.",
    primary: "Let's talk on WhatsApp",
    secondary: "What I do",
  },
  services: {
    id: "services",
    title: "Pick what's bugging you. I'll tell you which system I'd build.",
    intro: "Tap the one that sounds most like your business.",
    items: [
      {
        title: "Orders getting lost on WhatsApp",
        line: "An order comes in, gets buried under forty messages, and turns up on Thursday.",
        build: "I'd build: an orders system that reads the WhatsApp message (AI), understands what was ordered, and saves it with a status: received, in progress, out.",
        button: "That's me",
        prefill: "Hi Srulik, my orders get lost on WhatsApp. That's me. Can we talk?",
      },
      {
        title: "I can't remember who paid",
        line: "Who paid, who owes, and who said \"I'll transfer tomorrow\" three weeks ago.",
        build: "I'd build: a debts and payments system. A card per customer, you see who owes on your phone, and a reminder goes out in one tap.",
        button: "That's me",
        prefill: "Hi Srulik, I can't remember who paid and who didn't. That's me. Can we talk?",
      },
      {
        title: "Half the day calling staff",
        line: "Who's in tomorrow, who's covering whom, and who even answered.",
        build: "I'd build: a shifts system. The rota on one screen, each person sees theirs on their phone and confirms.",
        button: "That's me",
        prefill: "Hi Srulik, I spend half the day on the phone with staff. That's me. Can we talk?",
      },
      {
        title: "I thought it was in stock",
        line: "\"We have that, I'm sure.\" Then you open the shelf.",
        build: "I'd build: a stock system. Every in and out is recorded, and there's an alert before it runs out.",
        button: "That's me",
        prefill: "Hi Srulik, I think something's in stock and then it isn't. That's me. Can we talk?",
      },
      {
        title: "The gemach runs from a notebook",
        line: "Loans, repayments, guarantors and dates, all in one person's handwriting.",
        build: "I'd build: a gemach system. Who borrowed, how much came back, what's due this week, and it stays with you.",
        button: "That's me",
        prefill: "Hi Srulik, our gemach runs from a notebook. That's me. Can we talk?",
      },
      {
        title: "Month-end means an evening of reports",
        line: "All month you collect, and at the end you sit and add it up.",
        build: "I'd build: reports that build themselves from the data already in. Open, see, print.",
        button: "That's me",
        prefill: "Hi Srulik, at the end of every month I spend a whole evening on reports. That's me. Can we talk?",
      },
      {
        title: "What's bugging me isn't listed",
        line: "That's fine. I build any system you need. Tell me what's on your mind, and we'll see how to give it a screen.",
        button: "Mine is something else",
        prefill: "Hi Srulik, what's bugging me isn't on the site. Can I tell you what it is?",
        distinct: true,
      },
    ],
    quiet: "Need a website or a WhatsApp bot as well? I do that too. It just isn't the main thing.",
  },
  building: {
    id: "building",
    title: "Systems in progress",
    subtitle: "What's on my desk right now.",
    tag: "Building",
    items: ["A system for finding content", "A system for producing content", "A system for distributing to different sources"],
    closing: "When something's ready, it shows up here.",
  },
  process: {
    id: "process",
    title: "How it works",
    subtitle: "You only need to do the first one.",
    steps: [
      "Tell me what's bugging you. On WhatsApp, in two lines, no big words.",
      "A sketch before code. I show you how it will look on the screen. Not right? We change it now, before a line is written.",
      "I build, and you keep working. No meetings and no hours across from me. I only ask what I have to.",
      "I stay available. Something stuck? You call me, not a call center. And no \"try restarting it.\"",
    ],
    beats: ["Send a message.", "Tell me what's bugging you.", "Oops, it already works."],
  },
  tech: {
    id: "tech",
    title: "Under the hood",
    subtitle: "You don't have to understand it. It helps to know it's there.",
    items: [
      {
        term: "Systems with AI",
        line: "The system reads messages, understands the request, and files it. A free-written WhatsApp order lands in the right place, without you copying it.",
      },
      {
        term: "Security, because it's your data",
        line: "Encryption, permissions by role, and automatic backups. The data belongs to you, not to me.",
      },
      {
        term: "Connections and automations",
        line: "WhatsApp, email, invoices, and the tools you already use talk to the system. The manual daily work happens on its own.",
      },
      {
        term: "Cloud and uptime",
        line: "The system runs in the cloud, available when you're away from the computer, and I keep an eye on it.",
      },
      {
        term: "Built to the size of the business",
        line: "Not a template stretched to fit. A system made for the business today that can grow with it.",
      },
    ],
    closing: "Sounds heavy? You only see one screen. The rest is my job.",
  },
  examples: {
    id: "examples",
    title: "Sound familiar?",
    quotes: [
      "\"Wait, who paid?\"",
      "\"Which group did he send that in?\"",
      "\"Only the person who built this spreadsheet understands it. And he's not here.\"",
      "\"Month-end is soon. Great, an evening of reports.\"",
    ],
    closing: "It's not that you're disorganized. The business just moves faster than the notes.",
    labels: { before: "Before", after: "After" },
    items: [
      {
        before: "Notes in pockets, messages in groups, and a phone ringing in the middle of it.",
        after: "One screen.",
      },
      {
        before: "\"Who paid? Hang on, I'm looking.\"",
        after: "Open your phone and see.",
      },
      {
        before: "Half a day on the phone with staff: who's in, who's covering, who forgot.",
        after: "The rota is on everyone's phone, and you see who confirmed.",
      },
      {
        before: "A whole evening of reports at the end of the month.",
        after: "The report is already waiting.",
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
      "I build it with the same care I give systems that aren't allowed to fall: security, backups, and monitoring, sized for your business.",
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
        text: "When you write, I'm the one who answers. Not a call center and not a bot.",
      },
      {
        icon: "key",
        title: "No lock-in",
        text: "The system, the code, and your data, encrypted, backed up, and protected by role. No contract that traps you, and no fine print. If you want to take it and leave, you can.",
      },
      {
        icon: "system",
        title: "No surprises",
        text: "What we agree at the start is what you get at the end. Nothing starts before you say yes.",
      },
    ],
    reachHint: "How do I reach you? A phone number or an email is enough, either one.",
    briefTitle: "What happens on the first call",
    briefItems: [
      "You tell me what's bugging you",
      "I say plainly which system I'd build",
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
        "The service covers custom management systems and automation, and also websites and WhatsApp bots.",
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
