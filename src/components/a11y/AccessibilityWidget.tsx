"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "a11y-prefs";

type Prefs = {
  largeText: boolean;
  highContrast: boolean;
};

function readPrefs(): Prefs {
  if (typeof window === "undefined") {
    return { largeText: false, highContrast: false };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { largeText: false, highContrast: false };
    const parsed = JSON.parse(raw) as Partial<Prefs>;
    return {
      largeText: Boolean(parsed.largeText),
      highContrast: Boolean(parsed.highContrast),
    };
  } catch {
    return { largeText: false, highContrast: false };
  }
}

function applyPrefs(prefs: Prefs) {
  const root = document.documentElement;
  root.classList.toggle("a11y-large-text", prefs.largeText);
  root.classList.toggle("a11y-high-contrast", prefs.highContrast);
}

export function AccessibilityWidget() {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    largeText: false,
    highContrast: false,
  });

  useEffect(() => {
    const initial = readPrefs();
    const frame = requestAnimationFrame(() => {
      setPrefs(initial);
      applyPrefs(initial);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: MouseEvent) {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  function updatePrefs(next: Prefs) {
    setPrefs(next);
    applyPrefs(next);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  return (
    <div className="fixed bottom-5 start-5 z-[60] flex flex-col items-start gap-3">
      {open ? (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-label="אפשרויות נגישות"
          className="w-64 rounded-xl border border-line bg-bg-elevated p-4 shadow-lg"
        >
          <p className="mb-3 font-display text-sm font-semibold text-fg">
            נגישות
          </p>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className={cn(
                "rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                prefs.largeText
                  ? "border-accent bg-accent-soft text-fg"
                  : "border-line text-muted hover:text-fg",
              )}
              aria-pressed={prefs.largeText}
              onClick={() =>
                updatePrefs({ ...prefs, largeText: !prefs.largeText })
              }
            >
              טקסט גדול
            </button>
            <button
              type="button"
              className={cn(
                "rounded-lg border px-3 py-2 text-start text-sm transition-colors",
                prefs.highContrast
                  ? "border-accent bg-accent-soft text-fg"
                  : "border-line text-muted hover:text-fg",
              )}
              aria-pressed={prefs.highContrast}
              onClick={() =>
                updatePrefs({ ...prefs, highContrast: !prefs.highContrast })
              }
            >
              ניגודיות גבוהה
            </button>
            <Link
              href="/accessibility"
              className="rounded-lg border border-line px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
              onClick={() => setOpen(false)}
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-bg-elevated px-4 text-sm font-semibold text-fg shadow-lg transition-colors hover:border-accent/50 hover:bg-accent-soft"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="dialog"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden className="text-base leading-none">
          A
        </span>
        נגישות
      </button>
    </div>
  );
}
