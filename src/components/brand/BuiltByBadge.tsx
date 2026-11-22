import { pathForLocale, type Locale } from "@/content/copy";

export function BuiltByBadge({ locale, label }: { locale: Locale; label: string }) {
  return (
    <a href={pathForLocale(locale, "/")} className="built-by">
      <span className="built-by-dot" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
