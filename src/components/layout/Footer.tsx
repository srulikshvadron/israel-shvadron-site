import Link from "next/link";
import { pathForLocale, type Copy, type Locale } from "@/content/copy";
import { BrandLink } from "@/components/brand/BrandLink";
import { BuiltByBadge } from "@/components/brand/BuiltByBadge";
import { Container } from "@/components/ui/Container";
import { phoneHref, publicEmail, publicPhone, whatsappHref } from "@/lib/contact";

const textLink = "text-sm text-muted transition-colors hover:text-accent";

export function Footer({ locale, copy }: { locale: Locale; copy: Copy }) {
  const year = new Date().getFullYear();
  const email = publicEmail();
  const phone = publicPhone();
  const whatsapp = whatsappHref();
  const home = pathForLocale(locale, "/");

  const pages = [
    { href: pathForLocale(locale, "/privacy"), label: copy.footer.privacy },
    { href: pathForLocale(locale, "/terms"), label: copy.footer.terms },
    { href: pathForLocale(locale, "/accessibility"), label: copy.footer.accessibility },
  ];

  return (
    <footer className="border-t border-line bg-bg-elevated/40 py-12">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <BrandLink href={home} name={copy.brand} tagline={copy.footer.tagline} />
          <p className="mt-3 text-sm leading-relaxed text-muted">{copy.footer.operator}</p>
        </div>
        <div className="flex flex-col gap-4">
          <nav aria-label={copy.footer.navLabel} className="flex flex-col gap-3">
            {whatsapp ? (
              <a href={whatsapp} className={textLink} target="_blank" rel="noopener noreferrer">
                {copy.footer.whatsapp}
              </a>
            ) : null}
            {email ? (
              <a href={`mailto:${email}`} className={textLink}>
                {email}
              </a>
            ) : null}
            {phone ? (
              <a href={phoneHref(phone)} className={textLink}>
                {phone}
              </a>
            ) : null}
            {pages.map((item) => (
              <Link key={item.href} href={item.href} className={textLink}>
                {item.label}
              </Link>
            ))}
          </nav>
          <BuiltByBadge locale={locale} />
          <p className="text-sm text-muted">
            © {year} {copy.brand}. {copy.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
