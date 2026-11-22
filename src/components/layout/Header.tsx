"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { pathForLocale, type Copy, type Locale } from "@/content/copy";
import { BrandLink } from "@/components/brand/BrandLink";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function Header({ locale, copy }: { locale: Locale; copy: Copy }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname() || "/";
  const home = pathForLocale(locale, "/");
  const whatsapp = whatsappHref(copy.whatsappPrefill);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;

    const distance = 100;
    const smoothing = 50;
    const maxSpeed = 220;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetNow = () => Math.min(1, Math.max(0, window.scrollY / distance));

    let target = targetNow();
    let current = target;
    let frame = 0;
    let last = 0;

    const paint = () => node.style.setProperty("--hp", current.toFixed(4));

    const tick = (time: number) => {
      const dt = last ? Math.min(64, time - last) : 16;
      last = time;
      const delta = target - current;
      const cap = dt / maxSpeed;
      const step = delta * (1 - Math.exp(-dt / smoothing));
      current += Math.abs(step) > cap ? Math.sign(step) * cap : step;
      if (Math.abs(target - current) < 0.002) {
        current = target;
        paint();
        frame = 0;
        last = 0;
        return;
      }
      paint();
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      target = targetNow();
      if (reduced) {
        current = target;
        paint();
        return;
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
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
    <header ref={headerRef} className={cn("site-header sticky top-0 z-50", open && "is-open")}>
      <Container className="flex items-center justify-between gap-2 py-2 sm:gap-3">
        <div className="header-logo-slot">
          <div className="header-logo-scale">
            <BrandLink
              href={home}
              name={copy.brand}
              tagline={copy.footer.tagline}
              slogan={copy.hero.aside}
              draw
            />
          </div>
        </div>

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
          <nav aria-label={copy.langLabel} className="flex items-center text-sm max-sm:hidden">
            <a
              href={pathForLocale("he", pathname)}
              hrefLang="he"
              lang="he"
              aria-current={locale === "he" ? "true" : undefined}
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2",
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
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2",
                locale === "en" ? "text-accent" : "text-muted hover:text-fg",
              )}
            >
              EN
            </a>
          </nav>
          <a
            href={whatsapp ?? sectionHref("contact")}
            className="btn-primary header-cta"
            {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="inline-flex items-center gap-1.5 sm:hidden">
              <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
              {copy.headerCta.short}
            </span>
            <span className="hidden sm:inline">{copy.headerCta.label}</span>
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-fg lg:hidden"
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
          <a
            href={pathForLocale(locale === "he" ? "en" : "he", pathname)}
            hrefLang={locale === "he" ? "en" : "he"}
            lang={locale === "he" ? "en" : "he"}
            className="rounded-lg px-3 py-3 text-base text-fg hover:bg-accent-soft sm:hidden"
            onClick={closeMenu}
          >
            {locale === "he" ? "English" : "עברית"}
          </a>
          <a
            href={whatsapp ?? sectionHref("contact")}
            className="btn-primary mt-2"
            onClick={closeMenu}
            {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {copy.hero.primary}
          </a>
        </nav>
      </div>
    </header>
  );
}
