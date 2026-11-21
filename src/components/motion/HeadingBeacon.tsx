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

    const closest = () => {
      const target = window.innerHeight * 0.32;
      let best: HTMLElement | null = null;
      let dist = Infinity;
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < 64 || rect.top > window.innerHeight * 0.72) continue;
        const delta = Math.abs(rect.top - target);
        if (delta < dist) {
          dist = delta;
          best = node;
        }
      }
      mark(best);
    };

    if (reduced) {
      closest();
      return;
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(closest);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
