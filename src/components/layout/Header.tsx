"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { pathForLocale, type Copy, type Locale } from "@/content/copy";
import { BrandLink } from "@/components/brand/BrandLink";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || "/";
  const home = pathForLocale(locale, "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
    menuButtonRef.current?.focus();
  }

  function sectionHref(id: string) {
    return `${home === "/" ? "/" : home}#${id}`;
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-bg/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex min-h-16 items-center justify-between gap-3 py-2">
        <BrandLink
          href={home}
          name={copy.brand}
          tagline={copy.footer.tagline}
          taglineClassName="hidden md:block"
        />

        <nav aria-label={copy.navLabel} className="hidden items-center gap-6 lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              className="nav-link text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <nav aria-label={copy.langLabel} className="flex items-center gap-1 text-sm">
            <a
              href={pathForLocale("he", pathname)}
              hrefLang="he"
              lang="he"
              aria-current={locale === "he" ? "true" : undefined}
              className={cn(
                "rounded-md px-2 py-1",
                locale === "he" ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              HE
            </a>
            <span aria-hidden className="text-muted">
              /
            </span>
            <a
              href={pathForLocale("en", pathname)}
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "true" : undefined}
              className={cn(
                "rounded-md px-2 py-1",
                locale === "en" ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              EN
            </a>
          </nav>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? copy.menuClose : copy.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{copy.menuSr}</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className={cn("block h-0.5 w-5 bg-current transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-current transition-transform", open && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>
      </Container>

      <div id="mobile-nav" className={cn("border-t border-line bg-bg lg:hidden", open ? "block" : "hidden")}>
        <nav aria-label={copy.mobileNavLabel} className="flex flex-col gap-1 px-5 py-4">
          {copy.nav.map((item) => (
            <a
              key={item.id}
              href={sectionHref(item.id)}
              className="rounded-lg px-3 py-3 text-base text-fg hover:bg-accent-soft"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
