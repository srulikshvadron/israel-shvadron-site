"use client";

import { useEffect } from "react";

export function HeadingBeacon() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-heading]")];
    if (!nodes.length) return;

    const mark = (current: HTMLElement | null) => {
      for (const node of nodes) node.classList.toggle("is-active", node === current);
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      const seen = nodes.find((node) => {
        const rect = node.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
      });
      mark(seen ?? null);
      return;
    }

    const visible = new Map<Element, number>();
    const pick = () => {
      let best: HTMLElement | null = null;
      let score = 0;
      for (const [node, ratio] of visible) {
        if (ratio > score) {
          score = ratio;
          best = node as HTMLElement;
        }
      }
      if (best) mark(best);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
          else visible.delete(entry.target);
        }
        pick();
      },
      { threshold: [0.35, 0.6, 0.9], rootMargin: "-15% 0px -45% 0px" },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
