"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const dot = dotRef.current;
    if (!bar || !dot) return;
    const indicator = bar;
    const traveler = dot;

    let frame = 0;

    function update() {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      indicator.style.transformOrigin =
        document.documentElement.dir === "ltr" ? "0% 50%" : "100% 50%";
      indicator.style.transform = `scaleX(${progress})`;
      traveler.style.setProperty("--scroll-progress", progress.toFixed(4));
    }

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden>
      <div ref={barRef} className="scroll-progress-bar" />
      <div ref={dotRef} className="scroll-dot" />
    </div>
  );
}
