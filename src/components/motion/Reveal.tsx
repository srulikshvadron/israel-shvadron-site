"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "pop" | "rise" | "group";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** pop: fade + slide + scale (cards). rise: fade + slide (titles, text). group: children animate themselves. */
  variant?: Variant;
};

const STAGGER_MS = 90;
const MAX_STEPS = 5;

const pending = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;

function sharedObserver() {
  observer ??= new IntersectionObserver(
    (entries) => {
      const hits = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target)
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

      hits.forEach((node, index) => {
        (node as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${Math.min(index, MAX_STEPS) * STAGGER_MS}ms`,
        );
        pending.get(node)?.();
        pending.delete(node);
        observer?.unobserve(node);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  return observer;
}

export function Reveal({ children, className, variant = "pop" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const motion =
      document.documentElement.classList.contains("js-motion") &&
      !reduced &&
      typeof IntersectionObserver !== "undefined";
    if (!motion) return;

    const rect = node.getBoundingClientRect();
    const onScreenAtLoad = rect.top < window.innerHeight - 48 && rect.bottom > 0;
    if (onScreenAtLoad) return;

    node.classList.add("reveal-arm");
    pending.set(node, () => node.classList.add("is-shown"));
    sharedObserver().observe(node);

    return () => {
      pending.delete(node);
      observer?.unobserve(node);
      node.classList.remove("reveal-arm", "is-shown");
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal", `reveal-${variant}`, className)}>
      {children}
    </div>
  );
}
