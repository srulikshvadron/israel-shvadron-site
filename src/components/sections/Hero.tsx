import { hero } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroAtmosphere } from "@/components/motion/HeroAtmosphere";
import { whatsappHref } from "@/lib/contact";

export function Hero() {
  const whatsapp = whatsappHref();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden"
    >
      <HeroAtmosphere />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-bg to-transparent"
      />

      <Container className="relative z-[2] flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 pb-28 sm:py-28">
        <div className="max-w-3xl">
          <p className="animate-fade-up flex items-center gap-3 text-sm font-medium tracking-wide text-accent">
            <span aria-hidden className="h-px w-8 bg-accent/80" />
            {hero.brand}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up mt-5 font-display text-4xl font-bold leading-[1.15] tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="animate-fade-up-delay mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {hero.supporting}
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={whatsapp ?? "/#contact"}
              className="w-full sm:w-auto"
              {...(whatsapp
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {hero.primaryCta}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
