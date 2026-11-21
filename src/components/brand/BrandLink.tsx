import Link from "next/link";
import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/lib/utils";

export function BrandLink({
  href,
  name,
  tagline,
  taglineClassName,
  className,
}: {
  href: string;
  name: string;
  tagline?: string;
  taglineClassName?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={name}
      className={cn("inline-flex min-w-0 flex-col items-start gap-1", className)}
    >
      <LogoMark className="h-9 w-auto sm:h-10" />
      {tagline ? (
        <span className={cn("max-w-[15rem] text-[11px] leading-tight text-muted", taglineClassName)}>
          {tagline}
        </span>
      ) : null}
    </Link>
  );
}
