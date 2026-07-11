# ישראל שוודרון — אתר תדמית

אתר תדמית אישי מקצועי בעברית (RTL), בנוי עם Next.js, TypeScript ו-Tailwind CSS. מוכן לפריסה ב-Vercel ולהרחבות עתידיות (בלוג, פרויקטים, CMS, אינטגרציות AI).

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

האתר זמין בכתובת [http://localhost:3000](http://localhost:3000).

## סקריפטים

| פקודה | תיאור |
| --- | --- |
| `npm run dev` | שרת פיתוח (Turbopack) |
| `npm run build` | בניית פרודקשן |
| `npm run start` | הרצת בניית הפרודקשן |
| `npm run lint` | בדיקת ESLint |
| `npm run typecheck` | בדיקת TypeScript |

## תוכן ופרטי קשר

כל התוכן והקישורים מרוכזים בקובץ:

[`src/content/site.ts`](src/content/site.ts)

עדכנו שם את האימייל, LinkedIn, GitHub ושאר הפרטים (כרגע placeholders).

## משתני סביבה

העתיקו את `.env.example` ל-`.env.local`:

```bash
cp .env.example .env.local
```

| משתנה | תיאור |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | כתובת האתר בפרודקשן (ל-SEO / sitemap / Open Graph) |

## מבנה הפרויקט

```
src/
  app/                 # App Router — דפים, metadata, sitemap, robots
  components/
    layout/            # Header, Footer, ניווט
    sections/          # סקציות דף הבית
    ui/                # רכיבים לשימוש חוזר
    motion/            # תנועה והופעה
  content/site.ts      # תוכן האתר
  lib/                 # SEO ועוזרים
```

## פריסה ב-Vercel

1. חברו את ה-repository ל-Vercel
2. הגדירו `NEXT_PUBLIC_SITE_URL` לסביבת הפרודקשן
3. Deploy

## הרחבות עתידיות

הארכיטקטורה מוכנה להוספת:

- בלוג ומאמרים (`/blog`)
- תיק עבודות ופרויקטים (`/projects`)
- CMS
- טופס יצירת קשר עם API (כרגע mailto)
- אינטגרציות AI

## רישיון

פרטי — כל הזכויות שמורות.
