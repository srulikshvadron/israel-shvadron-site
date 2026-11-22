"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
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
      <WhatsAppIcon />
    </a>
  );
}
