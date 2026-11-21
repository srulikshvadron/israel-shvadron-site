"use client";

import { useEffect, useRef } from "react";

export function HeroAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const section = node?.parentElement;
    if (!node || !section) return;
    const surface = node;
    const stage = section;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || coarse) return;

    surface.classList.add("is-live");
    let frame = 0;

    function onMove(event: PointerEvent) {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        surface.style.setProperty("--px", `${x}%`);
        surface.style.setProperty("--py", `${y}%`);
      });
    }

    function onLeave() {
      surface.style.setProperty("--px", "72%");
      surface.style.setProperty("--py", "28%");
    }

    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="hero-atmosphere" aria-hidden>
      <div className="hero-orb hero-orb-a" />
      <div className="hero-orb hero-orb-b" />
      <div className="hero-orb hero-orb-c" />
      <div className="hero-pointer" />
      <div className="hero-ring" />
      <div className="absolute inset-0 site-grid" />
    </div>
  );
}
