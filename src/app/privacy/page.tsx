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
  youtubeScope,
} from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "מדיניות פרטיות",
  description:
    "מדיניות הפרטיות של שרוליק פתרונות: איזה מידע נאסף באתר ובחיבור יוטיוב, איך הוא נשמר, וכיצד מבקשים מחיקה.",
  path: "/privacy",
});

const listClass = "list-disc space-y-2 ps-5";

export default function PrivacyPage() {
  return (
    <LegalDocument
      kicker={siteConfig.name}
      title="מדיניות פרטיות"
      intro="המדיניות מסבירה איזה מידע נאסף באתר ובמערכת התוכן, למה הוא משמש, איך הוא נשמר, ואיך מבקשים למחוק אותו. הגרסה העברית היא הקובעת לקריאה באתר. גרסה באנגלית מופיעה בהמשך, לאותו תוכן."
      updatedLabel={`עודכן לאחרונה: ${legalMeta.updatedHe}`}
    >
      <article id="he" lang="he" className="scroll-mt-24">
        <LegalSection id="he-who" title="מי מפעיל את השירות">
          <p>
            האתר והמערכת מופעלים על ידי {operator.businessHe}. מאחורי העסק:{" "}
            {operator.givenHe} ({operator.legalNameHe}), {operator.localityHe},{" "}
            {operator.countryHe}. אין פרסום של כתובת מדויקת.
          </p>
          <p>
            לשאלות על פרטיות, לתלונה, או לבקשת מחיקה, פונים באחד הערוצים האלה
            וכותבים בנושא «בקשת מחיקת נתונים»:
          </p>
          <ContactChannels
            formLabel="טופס יצירת הקשר באתר"
            whatsappLabel="וואטסאפ"
            phoneLabel="טלפון"
          />
        </LegalSection>

        <LegalSection id="he-scope" title="על מה המדיניות חלה">
          <p>המדיניות חלה על:</p>
          <ul className={listClass}>
            <li>האתר הציבורי הזה.</li>
            <li>
              {productName.he}: מערכת שמאתרת חדשות ותוכן, מפיקה מדיה קצרה
              בעברית, ומפיצה אותה לטלגרם, לוואטסאפ וליוטיוב, אחרי שבעל החשבון
              חיבר את הערוץ.
            </li>
          </ul>
          <p>השירות מיועד לעסקים ולמוסדות. הוא אינו מיועד לילדים.</p>
        </LegalSection>

        <LegalSection id="he-site" title="מידע שנאסף באתר">
          <ul className={listClass}>
            <li>בטופס: שם, אימייל, מספר טלפון או וואטסאפ אם מולא, ותוכן ההודעה.</li>
            <li>אם פניתם בוואטסאפ: התוכן ששלחתם אלינו.</li>
            <li>
              נתוני תפעול שהאחסון רושם, כמו כתובת IP, סוג דפדפן וזמן הבקשה,
              לצורך אבטחה ותפעול האתר.
            </li>
          </ul>
          <p>
            אין באתר עוגיות פרסום, ואין כלי אנליטיקה של צד שלישי. העדפות הנגישות
            (גודל טקסט וניגודיות) נשמרות בדפדפן שלכם ב־localStorage, במכשיר
            עצמו, ואינן נשלחות אלינו. אנחנו לא מתירים לצד שלישי להציב עוגיות
            פרסום.
          </p>
          <p>
            מידע מהטופס ומוואטסאפ משמש רק כדי לחזור אליכם ולטפל בפנייה. הוא אינו
            נמכר ואינו משמש לפרסום.
          </p>
        </LegalSection>

        <LegalSection id="he-google" title="איזה מידע גוגל נגיש במערכת">
          <p>
            חיבור יוטיוב נעשה רק אם בעל החשבון מאשר אותו בעצמו, במסך ההסכמה של
            גוגל (OAuth). המערכת מבקשת היקף הרשאה אחד:
          </p>
          <p className="break-all font-mono text-sm text-fg">{youtubeScope}</p>
          <p>
            זה היקף להעלאת סרטונים לערוץ שאישרתם. המערכת אינה מבקשת גישה
            לג׳ימייל, לדרייב או למוצרים אחרים של גוגל, ואינה מבקשת או שומרת את
            סיסמת הגוגל.
          </p>
          <p>כשמחברים חשבון, המערכת ניגשת אל:</p>
          <ul className={listClass}>
            <li>
              פרטי החשבון שגוגל מחזירה כדי לזהות מי אישר את החיבור, ובכלל זה
              כתובת האימייל של החשבון ומזהה בסיסי.
            </li>
            <li>מזהה ערוץ היוטיוב שאישרתם.</li>
            <li>אסימון גישה ואסימון רענון (access token ו־refresh token).</li>
            <li>
              מטא־דאטה של סרטון שאישרתם להעלאה: כותרת, תיאור, סטטוס פרטיות
              (פרטי, לא רשום או ציבורי), ומזהה הסרטון שיוטיוב מחזיר.
            </li>
            <li>
              לוג טכני של ניסיון ההעלאה: זמן, הצלחה או שגיאה, ומזהה הסרטון אם
              הוחזר.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="he-use" title="למה משתמשים במידע הזה">
          <ul className={listClass}>
            <li>כדי לחבר את הערוץ שאישרתם.</li>
            <li>
              כדי להעלות לערוץ הזה סרטון שאישרתם, עם הכותרת, התיאור וסטטוס
              הפרטיות שנקבעו לאותה העלאה.
            </li>
            <li>כדי להציג את סטטוס ההעלאה, לתפעל את השירות, לאבטח אותו ולתת תמיכה.</li>
          </ul>
          <p>
            אין שימוש אחר. המידע אינו נמכר, אינו מועבר לפרסום, ואינו משמש
            לקביעת דירוג אשראי או להלוואות. לא מוצגות פרסומות של צד שלישי על
            בסיס המידע הזה.
          </p>
        </LegalSection>

        <LegalSection id="he-limited" title="Limited Use ומדיניות גוגל">
          <p>
            השימוש וההעברה של מידע שהתקבל מ־Google APIs נעשים לפי{" "}
            <PolicyLink href={googlePolicyLinks.userDataPolicy}>
              Google API Services User Data Policy
            </PolicyLink>
            , כולל דרישות Limited Use.
          </p>
          <ul className={listClass}>
            <li>
              המידע משמש רק כדי לספק ולשפר את הפעולות שגלויות במערכת: חיבור
              הערוץ והעלאת התוכן שאישרתם.
            </li>
            <li>
              המידע אינו מועבר לאחרים, למעט אל יוטיוב כי ביקשתם להעלות לשם, או
              בהסכמתכם לצורך אותה פעולה, או לאבטחה, או כדי לקיים דין, או במקרה
              של מיזוג או מכירת העסק — ורק אחרי הסכמה מפורשת שלכם מראש.
            </li>
            <li>
              אדם אינו קורא את המידע, אלא אם ביקשתם זאת במפורש (למשל בפניית
              תמיכה על פריט מסוים), או שזה נדרש לאבטחה, או שזה נדרש לפי דין, או
              שהמידע מצרפי ואינו מזהה אתכם.
            </li>
            <li>
              המידע אינו משמש להצגת פרסומות, כולל ריטרגטינג או פרסום מותאם, ואינו
              נמכר למתווכי מידע.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="he-youtube" title="YouTube API Services">
          <p>
            {productName.he} משתמשת ב־YouTube API Services. שימוש בחיבור היוטיוב
            כפוף גם ל־
            <PolicyLink href={googlePolicyLinks.youtubeTerms}>
              YouTube Terms of Service
            </PolicyLink>{" "}
            ול־
            <PolicyLink href={googlePolicyLinks.privacy}>
              Google Privacy Policy
            </PolicyLink>
            . תנאי השימוש של YouTube API Services מפורסמים{" "}
            <PolicyLink href={googlePolicyLinks.youtubeApiTerms}>כאן</PolicyLink>
            .
          </p>
          <p>
            אפשר לבטל את הגישה של האפליקציה בכל עת בדף ההרשאות של חשבון גוגל:{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              {googlePolicyLinks.permissions}
            </PolicyLink>
            .
          </p>
        </LegalSection>

        <LegalSection id="he-storage" title="שמירה, מי ניגש, וכמה זמן">
          <ul className={listClass}>
            <li>
              האסימונים והמטא־דאטה שתוארו למעלה נשמרים בשרתים שמופעלים עבור{" "}
              {operator.businessHe}, ומשמשים רק להפעלת השירות בשבילכם.
            </li>
            <li>
              הגישה אליהם מוגבלת למפעיל העסק ולמערכות שמבצעות את ההעלאה בשמכם.
            </li>
            <li>
              התעבורה מוצפנת (HTTPS). ננקטים אמצעים סבירים כדי למנוע גישה, שימוש
              או חשיפה בלי הרשאה.
            </li>
            <li>אסימונים נשמרים כל עוד החיבור פעיל, ורק למטרה שאישרתם.</li>
            <li>
              מטא־דאטה אחר של יוטיוב שנשמר אצלנו, כמו מזהה סרטון והשדות שנשלחו
              בהעלאה, נמחק או מתרענן בתוך 30 יום אם אין בו צורך מעבר לכך.
            </li>
            <li>לוגים טכניים של האתר נשמרים עד 90 יום לצורך אבטחה, ואז נמחקים.</li>
            <li>
              הודעות מהטופס נשמרות כדי לענות לפנייה ולשמור תיעוד שלה, ונמחקות
              כשאין בהן צורך או כשמבקשים למחוק, בכפוף לחובה לפי דין.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="he-share" title="שיתוף">
          <p>אנחנו לא מוכרים מידע אישי ולא משתפים אותו לפרסום.</p>
          <p>המידע מועבר רק במקרים האלה:</p>
          <ul className={listClass}>
            <li>אל יוטיוב, כשביקשתם להעלות סרטון לערוץ שלכם.</li>
            <li>
              אל ספק האחסון של האתר ואל ספק שליחת הדוא״ל של הטופס, ורק כדי
              שיבצעו את העבודה הזו עבורנו. הם אינם רשאים להשתמש במידע לפרסום
              שלהם.
            </li>
            <li>אם הדין מחייב, או כדי להגן על אבטחת השירות.</li>
          </ul>
        </LegalSection>

        <LegalSection id="he-delete" title="ניתוק ומחיקה">
          <p>
            אפשר לבקש מחיקה של המידע שאנחנו שומרים דרך פרטי הקשר שלמעלה, בנושא
            «בקשת מחיקת נתונים». אפשר גם לנתק את הגישה{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              מדף ההרשאות של גוגל
            </PolicyLink>
            . כשמנתקים את הערוץ מולנו, אנחנו מבטלים את האסימון מול גוגל ומוחקים
            את נתוני הגוגל השמורים לאותו חיבור.
          </p>
          <p>מה נמחק אצלנו:</p>
          <ul className={listClass}>
            <li>אסימוני הגישה והרענון.</li>
            <li>מזהה הערוץ ופרטי חשבון הגוגל ששמרנו לצורך החיבור.</li>
            <li>מטא־דאטה של העלאות ששמרנו, והלוגים הקשורים לאותו חיבור.</li>
          </ul>
          <p>לוחות זמנים:</p>
          <ul className={listClass}>
            <li>
              בקשת מחיקה אלינו, או ניתוק מולנו: בהקדם, ולא יאוחר מ־7 ימים.
              בניתוק מולנו האסימון מבוטל מול גוגל מיד.
            </li>
            <li>
              ביטול הגישה מדף ההרשאות של גוגל, או אסימון שאי אפשר לרענן: המחיקה
              תושלם בתוך 30 יום. אנחנו בודקים מעת לעת אם האסימון עדיין בתוקף,
              ומוחקים נתונים כשאי אפשר לרענן אותו.
            </li>
          </ul>
          <p>
            מחיקה אצלנו אינה מוחקת סרטונים שכבר עלו לערוץ היוטיוב שלכם. כדי
            למחוק סרטון מיוטיוב צריך למחוק אותו ביוטיוב עצמו.
          </p>
        </LegalSection>

        <LegalSection id="he-changes" title="שינויים">
          <p>
            אם המדיניות תשתנה, העמוד הזה יתעדכן ותאריך העדכון שלמעלה ישתנה. אם
            נשתמש במידע גוגל למטרה חדשה, נבקש הסכמה לפני כן.
          </p>
          <p>
            תנאי השימוש מפורסמים ב־
            <Link
              href="/terms"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong"
            >
              עמוד תנאי השימוש
            </Link>
            .
          </p>
        </LegalSection>
      </article>

      <article
        id="en"
        lang="en"
        dir="ltr"
        className="mt-16 scroll-mt-24 border-t border-line pt-16 text-start"
      >
        <h2 className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          Privacy Policy
        </h2>
        <p className="mt-4 text-sm text-muted">
          Last updated: {legalMeta.updatedEn}. This English text matches the
          Hebrew policy above.
        </p>
        <p className="mt-4">
          <a
            href="#he"
            className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4"
          >
            עברית
          </a>
        </p>

        <LegalSection id="en-who" level={3} title="Who operates the service">
          <p>
            This website and {productName.en} are operated by {operator.businessEn}{" "}
            ({operator.businessHe}). The person responsible is {operator.givenEn}{" "}
            ({operator.legalNameEn}), {operator.localityEn}, {operator.countryEn}.
            A street address is not published.
          </p>
          <p>
            For privacy questions, complaints, or a deletion request, use one of
            the channels below and put “data deletion request” in the subject:
          </p>
          <ContactChannels
            formLabel="Contact form on this website"
            whatsappLabel="WhatsApp"
            phoneLabel="Phone"
          />
        </LegalSection>

        <LegalSection id="en-scope" level={3} title="What this policy covers">
          <ul className={listClass}>
            <li>This public website.</li>
            <li>
              {productName.en}: a system that finds news and source material,
              produces short Hebrew media, and distributes it to Telegram,
              WhatsApp, and YouTube after the account owner connects the
              channel.
            </li>
          </ul>
          <p>
            The service is for businesses and institutions. It is not directed
            at children.
          </p>
        </LegalSection>

        <LegalSection id="en-site" level={3} title="Information collected on the website">
          <ul className={listClass}>
            <li>
              Contact form: name, email, phone or WhatsApp number if you provide
              one, and the message.
            </li>
            <li>WhatsApp: the messages you send us, if you contact us there.</li>
            <li>
              Operational data the host logs, such as IP address, browser type,
              and the time of the request, for security and operation.
            </li>
          </ul>
          <p>
            The site does not use advertising cookies and does not use
            third-party analytics. Accessibility preferences (text size and
            contrast) are stored in your browser’s localStorage on your device
            and are not sent to us. We do not allow third parties to place
            advertising cookies.
          </p>
          <p>
            Form and WhatsApp messages are used only to reply and handle the
            request. They are not sold and are not used for advertising.
          </p>
        </LegalSection>

        <LegalSection id="en-google" level={3} title="Google user data the product accesses">
          <p>
            A YouTube channel is connected only when the account owner approves
            it on Google’s consent screen (OAuth). The product requests one
            scope:
          </p>
          <p className="break-all font-mono text-sm text-fg">{youtubeScope}</p>
          <p>
            That scope allows uploading videos to the channel you authorized. The
            product does not request access to Gmail, Drive, or other Google
            products, and it never asks for or stores your Google password.
          </p>
          <p>When you connect an account, the product accesses:</p>
          <ul className={listClass}>
            <li>
              Account details Google returns so we can tell which account
              authorized the connection, including the account email address and
              a basic account identifier.
            </li>
            <li>The YouTube channel id of the channel you authorize.</li>
            <li>The OAuth access token and refresh token.</li>
            <li>
              Metadata of a video you approved for upload: title, description,
              privacy status (private, unlisted, or public), and the video id
              YouTube returns.
            </li>
            <li>
              A technical log of the upload attempt: time, success or error, and
              the video id if one was returned.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="en-use" level={3} title="How that data is used">
          <ul className={listClass}>
            <li>To connect the channel you authorized.</li>
            <li>
              To upload a video you approved to that channel, with the title,
              description, and privacy status set for that upload.
            </li>
            <li>
              To show upload status and to operate, secure, and support the
              service.
            </li>
          </ul>
          <p>
            There is no other use. Google user data is not sold, is not shared
            for advertising, and is not used to determine credit-worthiness or
            for lending. Third-party ads are not served from this data.
          </p>
        </LegalSection>

        <LegalSection id="en-limited" level={3} title="Limited Use">
          <p>
            {operator.businessEn}&apos;s use and transfer to any other app of
            information received from Google APIs will adhere to the{" "}
            <PolicyLink href={googlePolicyLinks.userDataPolicy}>
              Google API Services User Data Policy
            </PolicyLink>
            , including the Limited Use requirements.
          </p>
          <ul className={listClass}>
            <li>
              We use Google user data only to provide or improve the user-facing
              features described on this site: connecting your channel and
              uploading the content you approved.
            </li>
            <li>
              We do not transfer that data to others, except to YouTube because
              you asked us to upload there; with your consent, to provide that
              same feature; for security (for example, investigating abuse); to
              comply with applicable law; or as part of a merger, acquisition,
              or sale of the business, and only after we obtain your explicit
              prior consent.
            </li>
            <li>
              We do not allow humans to read the data unless you affirmatively
              ask us to look at a specific item (for example, a support
              request), it is necessary for security, it is necessary to comply
              with law, or the data is aggregated and used internally in a way
              that does not identify you.
            </li>
            <li>
              We do not use Google user data to serve advertisements, including
              retargeting, personalized, or interest-based advertising, and we
              do not sell it to data brokers or information resellers.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="en-youtube" level={3} title="YouTube API Services">
          <p>
            {productName.en} uses YouTube API Services. Using the YouTube
            connection is also subject to the{" "}
            <PolicyLink href={googlePolicyLinks.youtubeTerms}>
              YouTube Terms of Service
            </PolicyLink>{" "}
            and the{" "}
            <PolicyLink href={googlePolicyLinks.privacy}>
              Google Privacy Policy
            </PolicyLink>
            . The YouTube API Services Terms of Service are published{" "}
            <PolicyLink href={googlePolicyLinks.youtubeApiTerms}>here</PolicyLink>
            .
          </p>
          <p>
            You can revoke this application’s access at any time on the Google
            Account permissions page:{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              {googlePolicyLinks.permissions}
            </PolicyLink>
            .
          </p>
        </LegalSection>

        <LegalSection id="en-storage" level={3} title="Storage, access, and retention">
          <ul className={listClass}>
            <li>
              Tokens and the metadata described above are stored on servers
              operated for {operator.businessEn}, and are used only to run the
              service for you.
            </li>
            <li>
              Access is limited to the operator of the business and to the
              systems that perform the upload on your behalf.
            </li>
            <li>
              Traffic is encrypted in transit (HTTPS). Reasonable safeguards are
              used to prevent unauthorized access, use, or disclosure.
            </li>
            <li>
              Tokens are kept while the connection is active, and only for the
              purpose you consented to.
            </li>
            <li>
              Other YouTube metadata we store, such as a video id and the fields
              sent with an upload, is deleted or refreshed within 30 days when
              it is no longer needed.
            </li>
            <li>
              Technical logs of the website are kept for up to 90 days for
              security, then deleted.
            </li>
            <li>
              Contact-form messages are kept so we can reply and keep a record
              of the request, and are deleted when no longer needed or when you
              ask us to delete them, subject to a legal duty to retain them.
            </li>
          </ul>
        </LegalSection>

        <LegalSection id="en-share" level={3} title="Sharing">
          <p>
            We do not sell personal information and we do not share it for
            advertising.
          </p>
          <p>Information is transferred only:</p>
          <ul className={listClass}>
            <li>To YouTube, when you ask us to upload a video to your channel.</li>
            <li>
              To the site host and to the email provider that delivers contact
              form messages, only so they can do that work for us. They may not
              use the information for their own advertising.
            </li>
            <li>If the law requires it, or to protect the security of the service.</li>
          </ul>
        </LegalSection>

        <LegalSection id="en-delete" level={3} title="Disconnecting and deletion">
          <p>
            You can ask us to delete the data we store by using the contact
            channels above, with the subject “data deletion request”. You can
            also revoke access on the{" "}
            <PolicyLink href={googlePolicyLinks.permissions}>
              Google security settings page
            </PolicyLink>
            . When you disconnect the channel with us, we revoke the token with
            Google and delete the Google user data we stored for that
            connection.
          </p>
          <p>What we delete:</p>
          <ul className={listClass}>
            <li>Access tokens and refresh tokens.</li>
            <li>
              The channel id and the Google account details we stored for the
              connection.
            </li>
            <li>Upload metadata we stored, and logs tied to that connection.</li>
          </ul>
          <p>Timing:</p>
          <ul className={listClass}>
            <li>
              A deletion request to us, or a disconnect with us: as soon as
              possible, and no later than 7 days. On a disconnect with us, the
              token is revoked with Google immediately.
            </li>
            <li>
              Revocation on Google’s permissions page, or a token that can no
              longer be refreshed: deletion is completed within 30 days. We
              periodically check whether a token is still valid and delete data
              when it can no longer be refreshed.
            </li>
          </ul>
          <p>
            Deleting data we store does not delete videos already uploaded to
            your YouTube channel. To remove a video from YouTube, delete it in
            YouTube.
          </p>
        </LegalSection>

        <LegalSection id="en-changes" level={3} title="Changes">
          <p>
            If this policy changes, this page will be updated and the date above
            will change. If we need to use Google user data for a new purpose,
            we will ask for consent before doing so.
          </p>
          <p>
            Terms of use:{" "}
            <Link
              href="/terms#en"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong"
            >
              Terms of Use
            </Link>
            .
          </p>
        </LegalSection>
      </article>
    </LegalDocument>
  );
}
