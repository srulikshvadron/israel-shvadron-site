import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-brand"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 site-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent"
      />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1
            id="hero-brand"
            className="animate-fade-up font-display text-5xl font-bold tracking-tight text-fg sm:text-6xl lg:text-7xl"
          >
            {hero.brand}
          </h1>
          <p className="animate-fade-up-delay mt-6 max-w-2xl text-xl leading-relaxed text-fg/90 sm:text-2xl">
            {hero.headline}
          </p>
          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.supporting}
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
