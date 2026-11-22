import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AccessibilityWidget } from "@/components/a11y/AccessibilityWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { HeadingBeacon } from "@/components/motion/HeadingBeacon";
import { WhatsAppFloat } from "@/components/contact/WhatsAppFloat";
import { getCopy, pathForLocale } from "@/content/copy";
import { getRequestLocale } from "@/lib/locale";
import { createMetadata } from "@/lib/seo";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  return createMetadata(locale);
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getRequestLocale();
  const copy = getCopy(locale);

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${heebo.variable} ${rubik.variable} h-full antialiased`}
    >
      <body className="site-atmosphere flex min-h-full flex-col font-sans text-fg">
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!r&&"IntersectionObserver"in window){document.documentElement.classList.add("js-motion")}}catch(e){}',
          }}
        />
        <a href="#main-content" className="skip-link">
          {copy.skip}
        </a>
        <JsonLd locale={locale} />
        <ScrollProgress />
        <HeadingBeacon />
        <Header locale={locale} copy={copy} />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer locale={locale} copy={copy} />
        <AccessibilityWidget
          labels={copy.a11y}
          statementHref={pathForLocale(locale, "/accessibility")}
        />
        <WhatsAppFloat label={copy.whatsappShort} prefill={copy.whatsappPrefill} />
      </body>
    </html>
  );
}
