import { cn } from "@/lib/utils";

/** Original mark, split into aligned transparent layers so the swoosh is the source artwork. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("logo-mark", className)} aria-hidden="true">
      <img src="/brand/logo-letters.png" alt="" className="logo-layer logo-word" />
      <img src="/brand/logo-swoosh.png" alt="" className="logo-layer logo-swoosh" />
      <img src="/brand/logo-dot.png" alt="" className="logo-layer logo-dot" />
    </span>
  );
}
