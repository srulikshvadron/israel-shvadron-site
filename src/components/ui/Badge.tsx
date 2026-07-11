import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-bg-elevated/60 px-3 py-1.5 text-sm text-fg/90",
        className,
      )}
    >
      {children}
    </span>
  );
}
