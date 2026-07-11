import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-accent text-[#042f2e] hover:bg-accent-strong shadow-[0_0_0_1px_rgba(45,212,191,0.25)]",
  secondary:
    "border border-line bg-transparent text-fg hover:border-accent/50 hover:bg-accent-soft",
  ghost: "text-muted hover:text-fg",
} as const;

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
