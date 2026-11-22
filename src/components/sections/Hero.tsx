import type { Copy, Locale } from "@/content/copy";
import { pathForLocale } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";
import { whatsappHref } from "@/lib/contact";

export function Hero({ locale, copy }: { locale: Locale; copy: Copy }) {
  const servicesHref = `${pathForLocale(locale, "/")}#services`;
  const whatsapp = whatsappHref(copy.whatsappPrefill);

  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <HeroAtmosphere />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-bg to-transparent" />
      <Container className="relative z-[2] flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 pb-28 sm:py-28">
        <div className="max-w-3xl">
          {copy.hero.eyebrow ? (
            <p className="animate-fade-up mb-5 flex items-center gap-3 text-base font-medium tracking-wide text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/80" />
              {copy.hero.eyebrow}
            </p>
          ) : null}
          <h1 id="hero-heading" data-heading className="section-heading animate-fade-up font-display text-4xl font-bold leading-[1.15] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            <span className="heading-dot" aria-hidden="true" />
            {copy.hero.headline}
          </h1>
          <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-relaxed text-fg/90 sm:text-xl">
            {copy.hero.line}
          </p>
          <p className="animate-fade-up-delay mt-4 text-base font-semibold text-accent">{copy.hero.aside}</p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={whatsapp ?? `${pathForLocale(locale, "/")}#contact`}
              className="w-full sm:w-auto"
              {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {copy.hero.primary}
            </Button>
            <Button href={servicesHref} variant="secondary" className="w-full sm:w-auto">
              {copy.hero.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
