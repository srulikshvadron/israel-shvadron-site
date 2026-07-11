export const siteConfig = {
  name: "ישראל שוודרון",
  nameEn: "Israel Shvadron",
  title: "ישראל שוודרון | טכנולוגיה, בינה מלאכותית ופיתוח מוצרים",
  description:
    "איש טכנולוגיה עם חשיבה מערכתית, יכולת למידה עצמית גבוהה ופתרון בעיות מורכבות — בפיתוח תוכנה, בינה מלאכותית, סייבר ורשתות.",
  locale: "he_IL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "hello@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    github: "https://github.com/your-username",
    phone: "",
  },
} as const;

export const navigation = [
  { href: "#about", label: "אודות" },
  { href: "#capabilities", label: "יכולות" },
  { href: "#interests", label: "תחומי עניין" },
  { href: "#vision", label: "חזון" },
  { href: "#contact", label: "יצירת קשר" },
] as const;

export const hero = {
  brand: "ישראל שוודרון",
  headline: "חשיבה מערכתית, למידה עצמית ופתרון בעיות טכנולוגיות מורכבות",
  supporting:
    "בונה הבנה עמוקה של מערכות — מפיתוח תוכנה ובינה מלאכותית ועד רשתות, סייבר וחשיבה מוצרית.",
  primaryCta: { href: "#contact", label: "יצירת קשר" },
  secondaryCta: { href: "#about", label: "למידע נוסף" },
} as const;

export const about = {
  id: "about",
  title: "אודות",
  paragraphs: [
    "הדרך שלי לטכנולוגיה התחילה מסקרנות אמיתית להבין איך מערכות עובדות מאחורי הקלעים — לא רק להשתמש בהן, אלא לפרק אותן, להבין את הקשרים ביניהן ולבנות מחדש בצורה מדויקת יותר.",
    "מאז אני משקיע באופן עקבי בלמידה עצמית, בחקר טכנולוגיות חדשות, בבניית פרויקטים ובפתרון בעיות אמיתיות. הגישה שלי משלבת חשיבה אנליטית עם סקרנות טכנולוגית, ויכולת להיכנס במהירות לקוד קיים, למפות מערכת ולהתקדם לעבר פתרון ברור.",
    "אני פונה למעסיקים, ללקוחות ולשותפים עסקיים שמחפשים שותף טכנולוגי אמין — כזה שמבין גם את השכבה הטכנית וגם את הערך המוצרי למשתמש.",
  ],
} as const;

export const capabilities = {
  id: "capabilities",
  title: "יכולות מרכזיות",
  subtitle: "כישורים שמניעים למידה מהירה, ניתוח מדויק וביצוע ממוקד.",
  items: [
    {
      title: "למידה עצמאית מהירה",
      description:
        "כניסה מהירה לתחומים חדשים, בניית ידע מעמיק והפיכת חומר מורכב ליישום פרקטי.",
    },
    {
      title: "חשיבה אנליטית",
      description:
        "פירוק בעיות לרכיבים, זיהוי דפוסים והסקת מסקנות מבוססות נתונים והקשר.",
    },
    {
      title: "פתרון בעיות מורכבות",
      description:
        "התמודדות עם אתגרים רב־שכבתיים — מטכניקה ועד מוצר — עד לפתרון יציב ובר־קיימא.",
    },
    {
      title: "ניתוח מערכות",
      description:
        "הבנת ארכיטקטורה, תלויות וזרימות נתונים כדי לקבל החלטות הנדסיות מדויקות.",
    },
    {
      title: "כניסה מהירה לקוד קיים",
      description:
        "התמצאות בקודבייסים לא מוכרים, מיפוי מבנה והמשך פיתוח בלי לעצור את הקצב.",
    },
    {
      title: "חשיבה מוצרית",
      description:
        "חיבור בין יכולת טכנית לצרכי משתמש — בניית פתרונות שמייצרים ערך אמיתי.",
    },
    {
      title: "חקירה טכנולוגית",
      description:
        "בדיקת כלים, גישות וטכנולוגיות חדשות והערכת התאמה לבעיה הספציפית.",
    },
    {
      title: "התמדה ולמידה מתמשכת",
      description:
        "עקביות לאורך זמן, שיפור מתמיד והישארות מעודכן בקדמת הטכנולוגיה.",
    },
  ],
} as const;

export const interests = {
  id: "interests",
  title: "תחומי עניין",
  subtitle: "מפת תוכנה, אוטומציה ובינה מלאכותית ועד תשתית, אבטחה ועיצוב מערכות.",
  items: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "APIs",
    "Automation",
    "AI Agents",
    "Prompt Engineering",
    "Networking",
    "Linux",
    "Cyber Security",
    "System Design",
    "Product Thinking",
  ],
} as const;

export const vision = {
  id: "vision",
  title: "חזון",
  text: "לבנות מוצרים טכנולוגיים שמאפשרים לאנשים ללא רקע טכנולוגי להפוך רעיונות למציאות — באמצעות בינה מלאכותית, אוטומציה וחוויית שימוש ברורה.",
} as const;

export const values = {
  id: "values",
  title: "ערכים",
  subtitle: "עקרונות שמנחים כל החלטה טכנית ומוצרית.",
  items: [
    { title: "סקרנות", description: "שאלות טובות מובילות להבנה עמוקה יותר." },
    { title: "מקצועיות", description: "סטנדרט גבוה בביצוע, בתקשורת ובאיכות הקוד." },
    { title: "אמינות", description: "עמידה בהתחייבויות ושקיפות לאורך הדרך." },
    {
      title: "למידה מתמשכת",
      description: "שיפור מתמיד והתאמה לעולם טכנולוגי משתנה.",
    },
    {
      title: "יצירת ערך למשתמש",
      description: "הטכנולוגיה קיימת כדי לפתור בעיה אמיתית.",
    },
    {
      title: "חשיבה לטווח ארוך",
      description: "בנייה יציבה שניתן להרחיב, לתחזק ולשפר לאורך זמן.",
    },
  ],
} as const;

export const contact = {
  id: "contact",
  title: "יצירת קשר",
  subtitle:
    "לשיחה על שיתוף פעולה, פרויקט או הזדמנות מקצועית — מוזמנים לפנות.",
  form: {
    nameLabel: "שם",
    emailLabel: "אימייל",
    messageLabel: "הודעה",
    submitLabel: "שליחה",
    namePlaceholder: "השם המלא",
    emailPlaceholder: "name@company.com",
    messagePlaceholder: "במה אוכל לעזור?",
  },
  note: "הטופס נפתח כרגע דרך האימייל. אינטגרציית שליחה מלאה תתווסף בהמשך.",
} as const;

export const footer = {
  tagline: "טכנולוגיה, למידה עצמית ובניית מוצרים שמזיזים מחט.",
  rights: "כל הזכויות שמורות.",
} as const;
