import type { Locale } from "@/content/copy";
import { getCopy } from "@/content/copy";
import { SwooshDivider } from "@/components/brand/SwooshDivider";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <main id="main-content">
      <Hero locale={locale} copy={copy} />
      <SwooshDivider />
      <Services copy={copy} />
      <SwooshDivider />
      <About copy={copy} />
      <SwooshDivider />
      <Contact locale={locale} copy={copy} />
    </main>
  );
}
