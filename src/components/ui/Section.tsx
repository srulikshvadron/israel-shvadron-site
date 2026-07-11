import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  eyebrow?: string;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  eyebrow,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>
        <Reveal>
          <header className="mb-10 max-w-3xl sm:mb-14">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium tracking-wide text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2
              id={id ? `${id}-title` : undefined}
              className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl"
            >
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {subtitle}
              </p>
            ) : null}
          </header>
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
