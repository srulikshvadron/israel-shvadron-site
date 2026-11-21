import Link from "next/link";
import { pathForLocale, type Copy, type LegalBlock, type Locale } from "@/content/copy";
import { Container } from "@/components/ui/Container";
import { PolicyLink } from "@/components/legal/LegalDocument";
import { ContactChannels } from "@/components/contact/ContactChannels";

export function TextPage({
  locale,
  copy,
  title,
  kicker,
  intro,
  updated,
  blocks,
  showChannels,
}: {
  locale: Locale;
  copy: Copy;
  title: string;
  kicker: string;
  intro: string;
  updated: string;
  blocks: LegalBlock[];
  showChannels?: boolean;
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
          <p className="mt-4 text-sm text-muted">{updated}</p>
        </header>
        {blocks.map((block) => (
          <section key={block.id} aria-labelledby={block.id} className="mt-10 space-y-3">
            <h2 id={block.id} className="font-display text-2xl font-semibold text-fg">
              {block.title}
            </h2>
            <div className="space-y-3 leading-relaxed text-muted">
              {block.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.bullets ? (
                <ul className="list-disc space-y-2 ps-5">
                  {block.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {block.links ? (
                <ul className="space-y-2">
                  {block.links.map((link) => (
                    <li key={link.href}>
                      <PolicyLink href={link.href}>{link.label}</PolicyLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
        {showChannels ? (
          <div className="mt-8">
            <ContactChannels
              formHref={`${pathForLocale(locale, "/")}#contact`}
              formLabel={copy.contact.title}
              whatsappLabel={copy.footer.whatsapp}
              phoneLabel={copy.footer.phone}
            />
          </div>
        ) : null}
        <p className="mt-12">
          <Link
            href={pathForLocale(locale, "/")}
            className="text-sm font-semibold text-accent hover:text-accent-strong"
          >
            {copy.pages.back}
          </Link>
        </p>
      </Container>
    </main>
  );
}
