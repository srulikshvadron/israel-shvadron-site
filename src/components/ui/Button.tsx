import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "text-muted hover:text-fg",
} as const;

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(variants[variant], className)} {...props}>
      {children}
    </a>
  );
}
