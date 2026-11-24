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
  draw = false,
  className,
}: {
  href: string;
  name: string;
  tagline?: string;
  slogan?: string;
  draw?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const logo = root.querySelector<HTMLElement>(".brand-logo");
    const captions = root.querySelector<HTMLElement>(".brand-captions");
    const tag = root.querySelector<HTMLElement>(".brand-tagline");
    const line = root.querySelector<HTMLElement>(".brand-slogan");
    if (!logo || !captions || !tag) return;

    const fitTo = (el: HTMLElement, width: number) => {
      el.style.fontSize = "32px";
      const needed = el.scrollWidth;
      el.style.fontSize = needed > 0 ? `${(32 * width) / needed}px` : "12px";
    };

    const apply = () => {
      const width = logo.offsetWidth || Math.round(logo.offsetHeight * (691 / 378));
      if (!width) return;
      captions.style.width = `${width}px`;
      fitTo(tag, width * 0.92);
      if (line) fitTo(line, width * 0.7);
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(apply);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(logo);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={name}
      className={cn("brand-lockup min-w-0 flex-col gap-0", draw && "logo-draw", className)}
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
