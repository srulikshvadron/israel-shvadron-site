import type { Metadata } from "next";
import Link from "next/link";
import { ContactChannels } from "@/components/contact/ContactChannels";
import {
  LegalDocument,
  LegalSection,
  PolicyLink,
} from "@/components/legal/LegalDocument";
import {
  googlePolicyLinks,
  legalMeta,
  operator,
  productName,
  siteConfig,
} from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "תנאי שימוש",
  description:
    "תנאי השימוש של שרוליק פתרונות: השירותים, מערכת התוכן, חיבור יוטיוב, ואחריות הלקוח והמפעיל.",
  path: "/terms",
});

const listClass = "list-disc space-y-2 ps-5";

export default function TermsPage() {
  return (
    <LegalDocument
      kicker={siteConfig.name}
      title="תנאי שימוש"
      intro="השימוש באתר ובשירותים מהווה הסכמה לתנאים אלה. אם אינכם מסכימים, אין להשתמש בשירות. הגרסה העברית היא הקובעת לקריאה באתר. גרסה באנגלית מופיעה בהמשך."
      updatedLabel={`עודכן לאחרונה: ${legalMeta.updatedHe}`}
    >
      <article id="he" lang="he" className="scroll-mt-24">
        <LegalSection id="he-who" title="מי אנחנו">
          <p>
            {operator.businessHe} מופעל על ידי {operator.givenHe} (
            {operator.legalNameHe}), {operator.localityHe}, {operator.countryHe}.
            פרטי יצירת קשר מופיעים בסוף העמוד.{" "}
            <Link
              href="/privacy"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong"
            >
              מדיניות הפרטיות
            </Link>{" "}
            היא חלק מההתקשרות בכל מה שנוגע למידע.
          </p>
        </LegalSection>

        <LegalSection id="he-service" title="השירות">
          <p>
            אנחנו עושים את העבודה הדיגיטלית עבור עסקים ומוסדות. זה אינו קורס
            ואינו הכשרה: אנחנו בונים ומפעילים, ואתם נשארים עם התוצאה.
          </p>
          <ul className={listClass}>
            <li>בניית אתרים ודפי נחיתה.</li>
            <li>בוטים בוואטסאפ.</li>
            <li>אוטומציות וחיבורים בין מערכות.</li>
            <li>
              {productName.he}: איתור תוכן, הפקת מדיה קצרה בעברית, והפצה
              לטלגרם, לוואטסאפ וליוטיוב.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="he-who-for" title="למי זה מיועד">
          <p>
            השירות מיועד לבעלי עסקים ולמוסדות, או למי שמוסמך לפעול בשמם. הוא
            אינו מיועד לילדים.
          </p>
        </LegalSection>

        <LegalSection id="he-accounts" title="חשבונות שאתם מחברים">
          <p>
            חיבור יוטיוב, ובהמשך טלגרם או וואטסאפ, נעשה בהרשאת בעל החשבון בלבד.
            אתם מאשרים שיש לכם זכות לחבר את הערוץ, ושאתם רשאים לפרסם בו את
            התוכן.
          </p>
          <p>
            ביוטיוב החיבור הוא OAuth של גוגל. בשימוש בחיבור הזה אתם מסכימים גם
            ל־
            <PolicyLink href={googlePolicyLinks.youtubeTerms}>
              YouTube Terms of Service
            </PolicyLink>
            .
          </p>
          <p>
            אפשר לבטל את החיבור בכל עת{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              מדף ההרשאות של גוגל
            </PolicyLink>
            , וגם לבקש מאיתנו לנתק ולמחוק נתונים לפי מדיניות הפרטיות.
          </p>
        </LegalSection>

        <LegalSection id="he-youtube" title="יוטיוב — מגבלות ידועות">
          <ul className={listClass}>
            <li>
              ההעלאה כפופה למכסות ולמדיניות של יוטיוב. מכסה או סירוב של יוטיוב
              יכולים לעכב או לחסום העלאה, וזה אינו בשליטתנו.
            </li>
            <li>
              עד שגוגל מאשרת את האפליקציה, סרטון עשוי לעלות כפרטי. מעבר לציבורי
              נעשה רק באישור שלכם. אנחנו לא משנים סטטוס פרטיות בלי הוראה
              מפורשת.
            </li>
            <li>
              אתם בוחרים או מאשרים את הכותרת, התיאור וסטטוס הפרטיות לפני
              הפרסום.
            </li>
            <li>
              סרטון שעלה לערוץ שלכם נשאר בחשבון היוטיוב שלכם, בכפוף לתנאי
              יוטיוב.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="he-content" title="התוכן">
          <p>
            אתם אחראים לכך שיש לכם זכות להשתמש בחומר שנמסר לנו, ושהתוכן
            המפורסם בשמכם חוקי ואינו פוגע בזכויות של אחרים.
          </p>
          <p>
            אנחנו רשאים לסרב לפרסם תוכן בלתי חוקי, פוגעני, או כזה שאיננו
            יכולים לפרסם לפי דין או לפי כללי הפלטפורמה.
          </p>
        </LegalSection>

        <LegalSection id="he-ai" title="תוכן שנוצר בכלים אוטומטיים">
          <p>
            חלק מהמדיה מופק בעזרת כלים אוטומטיים. אתם מקבלים הזדמנות לבדוק לפני
            פרסום, כפי שסוכם בעבודה. אם פלטפורמה דורשת סימון של תוכן שנוצר כך,
            הסימון נעשה לפי ההנחיה שלכם ולפי כללי הפלטפורמה.
          </p>
        </LegalSection>

        <LegalSection id="he-promise" title="מה אנחנו מתחייבים">
          <p>
            לעשות את העבודה ברמה מקצועית וסבירה, לפי מה שסוכם. אנחנו לא
            מתחייבים למספר צפיות, לדירוג בגוגל, לאישור של גוגל לאפליקציה, או
            לתוצאה עסקית מסוימת.
          </p>
        </LegalSection>

        <LegalSection id="he-pay" title="תשלום וביטול">
          <p>
            אין סליקה באתר. מחיר, היקף ולוח זמנים נקבעים בכתב לפני תחילת עבודה,
            כולל הודעת וואטסאפ או אימייל. עבודה שסוכמה ושבוצעה מחויבת לפי מה
            שסוכם. כל צד יכול להפסיק המשך עבודה לפי מה שנקבע באותה הסכמה.
            סכומים ששולמו עבור עבודה שכבר נמסרה אינם מתבטלים, אלא אם סוכם אחרת
            או שהדין מחייב.
          </p>
        </LegalSection>

        <LegalSection id="he-ip" title="קניין רוחני">
          <p>
            התוכן, החשבונות והחומרים שלכם נשארים שלכם. אתם נותנים לנו רישיון
            להשתמש בהם רק כדי לבצע את השירות.
          </p>
          <p>
            האתר, השיטה והתוכנה שלנו נשארים של {operator.businessHe}. אין
            בשימוש בשירות העברת בעלות עליהם.
          </p>
        </LegalSection>

        <LegalSection id="he-liability" title="הגבלת אחריות">
          <p>
            במידה שהדין מתיר, האחריות שלנו לעבודה מסוימת מוגבלת לסכום ששילמתם
            עליה. איננו אחראים לנזק עקיף, לאובדן רווח, או למעשה של יוטיוב,
            וואטסאפ, טלגרם או גוגל. אין באמור כדי לגרוע מאחריות שאי אפשר
            להתנות עליה לפי דין.
          </p>
        </LegalSection>

        <LegalSection id="he-law" title="דין">
          <p>
            הדין החל הוא דין מדינת ישראל. סמכות השיפוט נתונה לבתי המשפט
            המוסמכים בישראל.
          </p>
        </LegalSection>

        <LegalSection id="he-contact" title="יצירת קשר">
          <ContactChannels
            formLabel="טופס יצירת הקשר באתר"
            whatsappLabel="וואטסאפ"
            phoneLabel="טלפון"
          />
        </LegalSection>
      </article>

      <article
        id="en"
        lang="en"
        dir="ltr"
        className="mt-16 scroll-mt-24 border-t border-line pt-16 text-start"
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Terms of Use
        </h2>
        <p className="mt-4 text-sm text-muted">
          Last updated: {legalMeta.updatedEn}. This English text matches the
          Hebrew terms above. Using the website or the services means you agree
          to these terms. If you do not agree, do not use the service.
        </p>
        <p className="mt-4">
          <a
            href="#he"
            className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4"
          >
            עברית
          </a>
        </p>

        <LegalSection id="en-who" level={3} title="Who we are">
          <p>
            {operator.businessEn} ({operator.businessHe}) is operated by{" "}
            {operator.givenEn} ({operator.legalNameEn}), {operator.localityEn},{" "}
            {operator.countryEn}. Contact details are at the end of this page.
            The{" "}
            <Link
              href="/privacy#en"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong"
            >
              Privacy Policy
            </Link>{" "}
            is part of this agreement wherever it concerns personal data.
          </p>
        </LegalSection>

        <LegalSection id="en-service" level={3} title="The service">
          <p>
            We do the digital work for businesses and institutions. This is not
            a course and not training: we build and operate, and you keep the
            result.
          </p>
          <ul className={listClass}>
            <li>Websites and landing pages.</li>
            <li>WhatsApp bots.</li>
            <li>Automations and connections between systems.</li>
            <li>
              {productName.en}: finding source material, producing short Hebrew
              media, and distributing it to Telegram, WhatsApp, and YouTube.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="en-who-for" level={3} title="Who it is for">
          <p>
            The service is for business owners and institutions, or someone
            authorized to act for them. It is not directed at children.
          </p>
        </LegalSection>

        <LegalSection id="en-accounts" level={3} title="Accounts you connect">
          <p>
            Connecting YouTube, and later Telegram or WhatsApp, is done only
            with the account owner’s authorization. You confirm that you have
            the right to connect the channel and to publish the content there.
          </p>
          <p>
            The YouTube connection uses Google OAuth. By using that connection
            you also agree to the{" "}
            <PolicyLink href={googlePolicyLinks.youtubeTerms}>
              YouTube Terms of Service
            </PolicyLink>
            .
          </p>
          <p>
            You can revoke the connection at any time on the{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              Google Account permissions page
            </PolicyLink>
            , and you can ask us to disconnect and delete data as described in
            the Privacy Policy.
          </p>
        </LegalSection>

        <LegalSection id="en-youtube" level={3} title="YouTube — known limits">
          <ul className={listClass}>
            <li>
              Uploads are subject to YouTube quotas and policies. A quota or a
              refusal by YouTube can delay or block an upload, and that is
              outside our control.
            </li>
            <li>
              Until Google approves the application, a video may be uploaded as
              private. Making it public happens only with your approval. We do
              not change a privacy status without an explicit instruction from
              you.
            </li>
            <li>
              You choose or approve the title, description, and privacy status
              before publication.
            </li>
            <li>
              A video uploaded to your channel stays in your YouTube account,
              under YouTube’s terms.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="en-content" level={3} title="Content">
          <p>
            You are responsible for having the right to use material you give
            us, and for the content published for you being lawful and not
            infringing anyone else’s rights.
          </p>
          <p>
            We may refuse content that is unlawful, abusive, or that we cannot
            publish under the law or under a platform’s rules.
          </p>
        </LegalSection>

        <LegalSection id="en-ai" level={3} title="Content produced with automated tools">
          <p>
            Some media is produced with automated tools. You get a chance to
            review it before publication, as agreed for that work. If a
            platform requires labeling of content produced that way, the label
            follows your instruction and the platform’s rules.
          </p>
        </LegalSection>

        <LegalSection id="en-promise" level={3} title="What we commit to">
          <p>
            We will do the work at a reasonable professional standard, as
            agreed. We do not promise a number of views, a Google ranking,
            Google’s approval of the application, or a particular business
            result.
          </p>
        </LegalSection>

        <LegalSection id="en-pay" level={3} title="Fees and cancellation">
          <p>
            The website does not take payment. Price, scope, and timing are
            agreed in writing before work starts, including by WhatsApp or
            email. Work that was agreed and delivered is billed as agreed.
            Either side may stop further work as set out in that agreement.
            Amounts paid for work already delivered are not refunded unless
            agreed otherwise or required by law.
          </p>
        </LegalSection>

        <LegalSection id="en-ip" level={3} title="Intellectual property">
          <p>
            Your content, accounts, and materials stay yours. You grant us a
            license to use them only to perform the service.
          </p>
          <p>
            Our website, methods, and software stay with {operator.businessEn}.
            Using the service does not transfer ownership of them.
          </p>
        </LegalSection>

        <LegalSection id="en-liability" level={3} title="Limitation of liability">
          <p>
            Where the law allows, our liability for a given piece of work is
            limited to the amount you paid for it. We are not liable for
            indirect damage, lost profit, or acts of YouTube, WhatsApp,
            Telegram, or Google. Nothing here removes a liability that the law
            does not allow to be limited.
          </p>
        </LegalSection>

        <LegalSection id="en-law" level={3} title="Law">
          <p>
            The laws of the State of Israel apply. The competent courts in
            Israel have jurisdiction.
          </p>
        </LegalSection>

        <LegalSection id="en-contact" level={3} title="Contact">
          <ContactChannels
            formLabel="Contact form on this website"
            whatsappLabel="WhatsApp"
            phoneLabel="Phone"
          />
        </LegalSection>
      </article>
    </LegalDocument>
  );
}
