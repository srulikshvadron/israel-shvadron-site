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

let enterObserver: IntersectionObserver | null = null;
let leaveObserver: IntersectionObserver | null = null;

function byDocumentOrder(a: Element, b: Element) {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}

function observers() {
  // Show once a card is a little inside the viewport. Hide again only when it is
  // completely off screen, so nothing can flicker while it sits near an edge.
  enterObserver ??= new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting && !entry.target.classList.contains("is-shown"))
        .map((entry) => entry.target as HTMLElement)
        .sort(byDocumentOrder)
        .forEach((node, index) => {
          node.style.setProperty("--reveal-delay", `${Math.min(index, MAX_STEPS) * STAGGER_MS}ms`);
          node.classList.add("is-shown");
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  leaveObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting && entry.target.classList.contains("is-shown")) {
          (entry.target as HTMLElement).style.setProperty("--reveal-delay", "0ms");
          entry.target.classList.remove("is-shown");
        }
      }
    },
    { threshold: 0 },
  );

  return { enter: enterObserver, leave: leaveObserver };
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

    node.classList.add("reveal-arm");
    if (onScreenAtLoad) node.classList.add("is-shown");

    const { enter, leave } = observers();
    enter.observe(node);
    leave.observe(node);

    return () => {
      enter.unobserve(node);
      leave.unobserve(node);
      node.classList.remove("reveal-arm", "is-shown");
    };
  }, []);

  return (
    <div ref={ref} className={cn("reveal", `reveal-${variant}`, className)}>
      {children}
    </div>
  );
}
