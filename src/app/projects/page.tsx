import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "פרויקטים",
  description:
    "תיק עבודות ופרויקטים טכנולוגיים — העמוד בפיתוח ויהיה זמין בקרוב.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main-content" className="py-24 sm:py-32">
      <Container className="max-w-3xl">
        <p className="text-sm font-medium text-accent">בקרוב</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
          פרויקטים ותיק עבודות
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          כאן יוצגו פרויקטים נבחרים, מקרי בוחן ותוצרים טכנולוגיים. המבנה מוכן
          להרחבה עם תוכן דינמי וניהול תוכן בעתיד.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex text-sm font-semibold text-accent hover:text-accent-strong"
        >
          חזרה לדף הבית
        </Link>
      </Container>
    </main>
  );
}
