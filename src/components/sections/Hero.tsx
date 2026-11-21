import type { Copy, Locale } from "@/content/copy";
import { pathForLocale } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";

export function Hero({ locale, copy }: { locale: Locale; copy: Copy }) {
  const servicesHref = `${pathForLocale(locale, "/")}#services`;

  return (
    <section aria-labelledby="hero-heading" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden">
      <HeroAtmosphere />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-bg to-transparent" />
      <Container className="relative z-[2] flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 pb-28 sm:py-28">
        <div className="max-w-3xl">
          {copy.hero.eyebrow ? (
            <p className="animate-fade-up flex items-center gap-3 text-sm font-medium tracking-wide text-accent">
              <span aria-hidden className="h-px w-8 bg-accent/80" />
              {copy.hero.eyebrow}
            </p>
          ) : null}
          <h1 id="hero-heading" data-heading className="section-heading animate-fade-up font-display text-4xl font-bold leading-[1.15] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            <span className="heading-dot" aria-hidden="true" />
            {copy.hero.headline}
          </h1>
          <p className="animate-fade-up-delay mt-6 max-w-2xl font-display text-2xl font-medium leading-snug text-fg sm:text-3xl">
            {copy.hero.line}
          </p>
          <p className="animate-fade-up-delay mt-4 text-sm font-medium text-accent">{copy.hero.aside}</p>
          <div className="animate-fade-up-delay-2 mt-10">
            <Button href={servicesHref} className="w-full sm:w-auto">
              {copy.hero.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
