"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function WhatsAppFloat({ label, prefill }: { label: string; prefill: string }) {
  const href = whatsappHref(prefill);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setHidden(Boolean(entry?.isIntersecting)),
      { threshold: 0, rootMargin: "0px 0px -35% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!href) return null;

  return (
    <a
      href={href}
      className={cn("whatsapp-float", hidden && "is-hidden")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M5 18.5 6.2 15A7 7 0 1 1 12 19a7 7 0 0 1-3.2-.8L5 18.5Zm3.1-2.2.4.2a5.2 5.2 0 1 0-1.4-1.4l.2.4-.5 1.6 1.3-.8Z" />
      </svg>
    </a>
  );
}
