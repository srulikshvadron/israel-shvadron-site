import Link from "next/link";
import { footer, footerNav, operator, siteConfig } from "@/content/site";
import { BrandLink } from "@/components/brand/BrandLink";
import { Container } from "@/components/ui/Container";
import { phoneHref, publicEmail, publicPhone, whatsappHref } from "@/lib/contact";

const textLink =
  "text-sm text-muted transition-colors hover:text-accent";

export function Footer() {
  const year = new Date().getFullYear();
  const email = publicEmail();
  const phone = publicPhone();
  const whatsapp = whatsappHref();

  return (
    <footer className="border-t border-line bg-bg-elevated/40 py-12">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <BrandLink />
          <p className="mt-3 text-sm leading-relaxed text-muted">{footer.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            מופעל על ידי {operator.givenHe} ({operator.legalNameHe}) · {operator.localityHe}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <nav aria-label="יצירת קשר ומידע" className="flex flex-col gap-3">
            {whatsapp ? (
              <a
                href={whatsapp}
                className={textLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                וואטסאפ
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
            {footerNav.map((item) => (
              <Link key={item.href} href={item.href} className={textLink}>
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
