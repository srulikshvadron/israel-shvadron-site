"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/lib/utils";

export function BrandLink({
  href,
  name,
  tagline,
  slogan,
  compact = false,
  draw = false,
  className,
}: {
  href: string;
  name: string;
  tagline?: string;
  slogan?: string;
  compact?: boolean;
  draw?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!draw) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    ref.current?.classList.add("logo-draw");
  }, [draw]);

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={name}
      className={cn("brand-lockup min-w-0 flex-col gap-0", compact && "is-compact", className)}
    >
      <LogoMark className="brand-logo" />
      {tagline ? <span className="brand-tagline">{tagline}</span> : null}
      {slogan ? <span className="brand-slogan">{slogan}</span> : null}
    </Link>
  );
}
