"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/lib/utils";

const INTRO_KEY = "srulik-intro";

export function BrandLink({
  href,
  name,
  tagline,
  taglineClassName,
  playIntro = false,
  className,
}: {
  href: string;
  name: string;
  tagline?: string;
  taglineClassName?: string;
  playIntro?: boolean;
  className?: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!playIntro) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    try {
      if (sessionStorage.getItem(INTRO_KEY)) return;
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      return;
    }
    linkRef.current?.classList.add("logo-intro");
  }, [playIntro]);

  return (
    <Link
      href={href}
      aria-label={name}
      ref={linkRef}
      className={cn("inline-flex min-w-0 flex-col items-start gap-1", className)}
    >
      <LogoMark className="h-9 w-auto sm:h-10" />
      {tagline ? (
        <span className={cn("brand-tagline max-w-[15rem] text-[11px] leading-tight text-muted", taglineClassName)}>
          {tagline}
        </span>
      ) : null}
    </Link>
  );
}
