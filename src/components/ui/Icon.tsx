import type { ReactNode } from "react";
import type { IconName } from "@/content/copy";
import { cn } from "@/lib/utils";

const paths: Record<IconName, ReactNode> = {
  site: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  system: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
      <path d="M17 13.5v7M13.5 17h7" />
    </>
  ),
  loop: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  support: (
    <>
      <path d="M5.5 4h3l1.5 4-2 1.2a11 11 0 0 0 5.8 5.8L15 13l4 1.5v3a2 2 0 0 1-2 2A13 13 0 0 1 3.5 6a2 2 0 0 1 2-2Z" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l8-8M16 7l2.5 2.5M14 9l2 2" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8a1 1 0 0 1 0 1.4l-7.6 7.6a1 1 0 0 1-1.4 0l-8-8Z" />
      <circle cx="8.5" cy="8.5" r="1.2" />
    </>
  ),
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      {paths[name]}
    </svg>
  );
}

export function IconBadge({ name, quiet = false }: { name: IconName; quiet?: boolean }) {
  return (
    <span className={cn("icon-badge", quiet && "is-quiet")} aria-hidden="true">
      <Icon name={name} />
    </span>
  );
}
