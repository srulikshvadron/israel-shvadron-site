import Link from "next/link";
import { getCopy, pathForLocale } from "@/content/copy";
import { getRequestLocale } from "@/lib/locale";
import { Container } from "@/components/ui/Container";
import { OopsMark } from "@/components/brand/OopsMark";

export default async function NotFound() {
  const locale = await getRequestLocale();
  const copy = getCopy(locale);

  return (
    <main id="main-content" className="flex flex-1 items-center py-24">
      <Container className="max-w-xl text-center">
        <OopsMark />
        <p className="text-sm font-medium text-accent">{copy.notFound.kicker}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg">
          {copy.notFound.title}
        </h1>
        <p className="mt-4 text-muted">{copy.notFound.line}</p>
        <p className="mt-8">
          <Link href={pathForLocale(locale, "/")} className="text-sm font-semibold text-accent">
            {copy.pages.back}
          </Link>
        </p>
      </Container>
    </main>
  );
}
