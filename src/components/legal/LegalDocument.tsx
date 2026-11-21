import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const linkClass =
  "text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong";

export function PolicyLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${linkClass} break-all`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

export function LegalSection({
  id,
  title,
  level = 2,
  children,
}: {
  id: string;
  title: string;
  level?: 2 | 3;
  children: ReactNode;
}) {
  const headingClass = "font-display text-2xl font-semibold text-fg";
  return (
    <section aria-labelledby={id} className="mt-10 space-y-3">
      {level === 2 ? (
        <h2 id={id} className={headingClass}>
          {title}
        </h2>
      ) : (
        <h3 id={id} className={headingClass}>
          {title}
        </h3>
      )}
      <div className="space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export function LegalDocument({
  kicker,
  title,
  intro,
  updatedLabel,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  updatedLabel: string;
  children: ReactNode;
}) {
  return (
    <main id="main-content" className="py-16 sm:py-24">
      <Container className="max-w-3xl [overflow-wrap:anywhere]">
        <header>
          <p className="text-sm font-medium text-accent">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
          <p className="mt-4 text-sm text-muted">{updatedLabel}</p>
          <p className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
            <a href="#he" className={linkClass}>
              עברית
            </a>
            <a href="#en" className={linkClass}>
              English
            </a>
          </p>
        </header>
        {children}
        <p className="mt-12">
          <Link href="/" className="text-sm font-semibold text-accent hover:text-accent-strong">
            חזרה לדף הבית
          </Link>
        </p>
      </Container>
    </main>
  );
}
