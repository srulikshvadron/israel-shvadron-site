"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.classList.add("is-shown");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion =
      document.documentElement.classList.contains("js-motion") &&
      !reduced &&
      typeof IntersectionObserver !== "undefined";

    if (!motion) {
      show();
      return;
    }

    const rect = node.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      show();
      return;
    }

    node.classList.add("reveal-arm");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(node);
    const fallback = window.setTimeout(show, 1200);
    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
