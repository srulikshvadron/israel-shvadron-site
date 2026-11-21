import type { Locale } from "@/content/copy";
import { getCopy } from "@/content/copy";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function HomePage({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <main id="main-content">
      <Hero locale={locale} copy={copy} />
      <Services copy={copy} />
      <About copy={copy} />
      <Contact locale={locale} copy={copy} />
    </main>
  );
}
