import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { operator, siteConfig } from "@/content/site";
import { phoneHref, publicEmail, publicPhone, whatsappHref } from "@/lib/contact";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "הצהרת נגישות",
  description:
    "הצהרת נגישות לאתר של שרוליק פתרונות — התאמות שבוצעו ודרכי פנייה בנושא נגישות.",
  path: "/accessibility",
});

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong";

export default function AccessibilityPage() {
  const email = publicEmail();
  const phone = publicPhone();
  const whatsapp = whatsappHref();

  return (
    <main id="main-content" className="py-24 sm:py-32">
      <Container className="max-w-3xl space-y-8">
        <header>
          <p className="text-sm font-medium text-accent">{siteConfig.name}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            הצהרת נגישות
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            אתר {operator.businessHe} פועל מתוך מחויבות להנגשה דיגיטלית, במטרה
            לאפשר שימוש נוח ככל האפשר לקהל רחב, כולל אנשים עם מוגבלויות.
          </p>
        </header>

        <section aria-labelledby="a11y-effort" className="space-y-3">
          <h2 id="a11y-effort" className="font-display text-2xl font-semibold text-fg">
            התאמות שבוצעו באתר
          </h2>
          <ul className="list-disc space-y-2 ps-5 leading-relaxed text-muted">
            <li>מבנה סמנטי עם כותרות, אזורי ניווט ותוכן ראשי ברורים</li>
            <li>תמיכה בניווט מקלדת והדגשת פוקוס</li>
            <li>קישור לדילוג לתוכן הראשי</li>
            <li>תוויות ברורות בטופס יצירת הקשר והודעות סטטוס</li>
            <li>תמיכה בהעדפת הפחתת תנועה במערכת</li>
            <li>כפתור נגישות עם אפשרות להגדלת טקסט ולהגברת ניגודיות</li>
            <li>עמודי מדיניות ותנאים בעברית, עם גרסה באנגלית באותו עמוד</li>
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
            נתקלתם בבעיית נגישות? נשמח לשמוע ולתקן. אפשר לפנות דרך{" "}
            <Link href="/#contact" className={linkClass}>
              טופס יצירת הקשר
            </Link>
            {whatsapp ? (
              <>
                {" "}
                או{" "}
                <a
                  href={whatsapp}
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  בוואטסאפ
                </a>
              </>
            ) : null}
            {email ? (
              <>
                {" "}
                או באימייל{" "}
                <a href={`mailto:${email}`} className={linkClass}>
                  {email}
                </a>
              </>
            ) : null}
            {phone ? (
              <>
                {" "}
                או בטלפון{" "}
                <a href={phoneHref(phone)} className={linkClass}>
                  {phone}
                </a>
              </>
            ) : null}
            .
          </p>
        </section>

        <p className="text-sm text-muted">עדכון אחרון להצהרה זו: נובמבר 2026.</p>

        <Link href="/" className="inline-flex text-sm font-semibold text-accent hover:text-accent-strong">
          חזרה לדף הבית
        </Link>
      </Container>
    </main>
  );
}
