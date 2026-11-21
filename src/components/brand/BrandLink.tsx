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
  fit = false,
  draw = false,
  className,
}: {
  href: string;
  name: string;
  tagline?: string;
  slogan?: string;
  fit?: boolean;
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

  useEffect(() => {
    if (!fit) return;
    const root = ref.current;
    if (!root) return;
    const tag = root.querySelector<HTMLElement>(".brand-tagline");
    const line = root.querySelector<HTMLElement>(".brand-slogan");

    const apply = () => {
      const available = root.clientWidth;
      if (!available || !tag) return;
      tag.style.fontSize = "13px";
      const needed = tag.scrollWidth;
      const scale = needed > 0 ? Math.min(1, (available - 1) / needed) : 1;
      tag.style.fontSize = `${13 * scale}px`;
      if (line) line.style.fontSize = `${11 * scale}px`;
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(root);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [fit]);

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={name}
      className={cn("brand-lockup min-w-0 flex-col gap-0", fit && "brand-lockup-fit", className)}
    >
      <LogoMark className="brand-logo" />
      {tagline || slogan ? (
        <span className="brand-captions">
          {tagline ? <span className="brand-tagline">{tagline}</span> : null}
          {slogan ? <span className="brand-slogan">{slogan}</span> : null}
        </span>
      ) : null}
    </Link>
  );
}
