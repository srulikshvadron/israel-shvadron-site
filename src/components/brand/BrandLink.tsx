import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function BrandLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 items-center gap-2 font-display text-base font-semibold tracking-tight text-fg transition-colors hover:text-accent sm:text-lg",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent-soft font-display text-xs font-bold text-accent sm:h-8 sm:w-8 sm:text-sm"
      >
        ש
      </span>
      <span className="truncate">{siteConfig.name}</span>
    </Link>
  );
}
