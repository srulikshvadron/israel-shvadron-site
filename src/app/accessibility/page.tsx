import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "הצהרת נגישות",
  description:
    "הצהרת נגישות לאתר של ישראל שוודרון — התאמות שבוצעו ודרכי פנייה בנושא נגישות.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <main id="main-content" className="py-24 sm:py-32">
      <Container className="max-w-3xl space-y-8">
        <header>
          <p className="text-sm font-medium text-accent">נגישות</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            הצהרת נגישות
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            אתר זה פועל מתוך מחויבות להנגשה דיגיטלית, במטרה לאפשר שימוש נוח
            ככל האפשר לקהל רחב, כולל אנשים עם מוגבלויות.
          </p>
        </header>

        <section aria-labelledby="a11y-effort" className="space-y-3">
          <h2 id="a11y-effort" className="font-display text-2xl font-semibold text-fg">
            התאמות שבוצעו באתר
          </h2>
          <ul className="list-disc space-y-2 pe-5 text-muted leading-relaxed">
            <li>מבנה סמנטי עם כותרות, אזורי ניווט ותוכן ראשי ברורים</li>
            <li>תמיכה בניווט מקלדת והדגשת פוקוס</li>
            <li>קישור לדילוג לתוכן הראשי</li>
            <li>תוויות ברורות בטופס יצירת הקשר והודעות סטטוס</li>
            <li>תמיכה בהעדפת הפחתת תנועה במערכת</li>
            <li>כפתור נגישות עם אפשרות להגדלת טקסט ולהגברת ניגודיות</li>
          </ul>
        </section>

        <section aria-labelledby="a11y-standard" className="space-y-3">
          <h2 id="a11y-standard" className="font-display text-2xl font-semibold text-fg">
            תקן יעד
          </h2>
          <p className="leading-relaxed text-muted">
            האתר נבנה במאמץ לעמוד בהנחיות WCAG 2.1 ברמת AA. ייתכנו חלקים שטרם
            הונגשו במלואם, ואנו ממשיכים לשפר לפי הצורך.
          </p>
        </section>

        <section aria-labelledby="a11y-contact" className="space-y-3">
          <h2 id="a11y-contact" className="font-display text-2xl font-semibold text-fg">
            פנייה בנושא נגישות
          </h2>
          <p className="leading-relaxed text-muted">
            נתקלתם בבעיית נגישות? נשמח לשמוע ולתקן. ניתן לפנות דרך{" "}
            <Link href="/#contact" className="text-accent hover:text-accent-strong">
              טופס יצירת הקשר
            </Link>
            {siteConfig.contact.email && siteConfig.contact.email !== "hello@example.com"
              ? ` או באימייל ${siteConfig.contact.email}.`
              : "."}
          </p>
        </section>

        <p className="text-sm text-muted">
          עדכון אחרון להצהרה זו: נובמבר 2026.
        </p>

        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-accent hover:text-accent-strong"
        >
          חזרה לדף הבית
        </Link>
      </Container>
    </main>
  );
}
