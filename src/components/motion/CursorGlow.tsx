"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;

    node.hidden = false;
    let frame = 0;

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const x = event.clientX;
      const y = event.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node?.style.setProperty("transform", `translate3d(${x}px, ${y}px, 0)`);
      });
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" hidden aria-hidden="true" />;
}
