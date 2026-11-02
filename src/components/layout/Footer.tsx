import Link from "next/link";
import { footer, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { href: siteConfig.contact.email ? `mailto:${siteConfig.contact.email}` : "#", label: "אימייל" },
  { href: siteConfig.contact.linkedin, label: "LinkedIn" },
  { href: siteConfig.contact.github, label: "GitHub" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-bg-elevated/40 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-fg hover:text-accent"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {footer.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:items-end">
          <nav aria-label="קישורי רשתות" className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-accent"
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={link.href.startsWith("http") ? "_blank" : undefined}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/accessibility"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              הצהרת נגישות
            </Link>
          </nav>
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. {footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
