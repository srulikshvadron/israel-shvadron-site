# שרוליק

אתר העסק של שרוליק, בעברית (RTL) ובאנגלית. בנוי עם Next.js, TypeScript ו-Tailwind CSS.

האתר הציבורי: [https://srulikshvadron.com](https://srulikshvadron.com).

## טכנולוגיות

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Server Components

## התחלה מהירה

```bash
npm install
npm run dev
```

השרת המקומי מדפיס את הכתובת שבה הוא מאזין. כתובות קנוניות, sitemap ו-robots נשארות על האתר הציבורי גם כשמריצים מקומית.

## סקריפטים

| פקודה | תיאור |
| --- | --- |
| `npm run dev` | שרת פיתוח |
| `npm run build` | בניית פרודקשן |
| `npm run start` | הרצת בניית הפרודקשן |
| `npm run lint` | בדיקת ESLint |
| `npm run typecheck` | בדיקת TypeScript |

## תוכן, מיתוג ופרטי קשר

כל התוכן הציבורי מרוכז ב־[`src/content/site.ts`](src/content/site.ts).

- שם המוצר הזמני (`מערכת התוכן וההפצה`) מוגדר פעם אחת ב־`productName`. משנים שם רק שם.
- וואטסאפ, אימייל וטלפון ריקים עד שיוחלט עליהם. ממלאים את `siteConfig.contact` — בלי מספרים מומצאים. כשהשדות מלאים, הכפתורים, הפוטר והעמודים המשפטיים מתעדכנים לבד.
- כתובת האתר ל־SEO מגיעה מ־`NEXT_PUBLIC_SITE_URL`, עם ברירת מחדל של כתובת ה־Vercel הנוכחית.

## עמודים

| נתיב | תוכן |
| --- | --- |
| `/` | עמוד הבית: שירותים, המוצר, איך זה עובד, אודות, יצירת קשר |
| `/privacy` | מדיניות פרטיות, עברית ואנגלית |
| `/terms` | תנאי שימוש, עברית ואנגלית |
| `/accessibility` | הצהרת נגישות |

## משתני סביבה

מעתיקים את `.env.example` ל־`.env.local`.

| משתנה | תיאור |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | כתובת ציבורית ל־canonical, sitemap, robots ו-Open Graph |
| `RESEND_API_KEY` | מפתח Resend. בלי שינוי שם מההגדרה הקיימת |
| `CONTACT_TO_EMAIL` | התיבה שמקבלת את פניית בעל העסק |
| `CONTACT_FROM_EMAIL` | שולח מאומת. כשהוא ריק, ההתראה לבעל העסק יוצאת מ־`onboarding@resend.dev` ואין מייל אישור לפונה. אישור לפונה נשלח רק כשהמשתנה הזה מוגדר, כי שולח ברירת המחדל של Resend יכול לשלוח רק לבעל החשבון |

## פריסה

1. לחבר את ה-repository ל-Vercel
2. להשאיר את `NEXT_PUBLIC_SITE_URL` ריק, או להגדיר אותו ל־`https://srulikshvadron.com`
3. Deploy

## רישיון

פרטי — כל הזכויות שמורות.
