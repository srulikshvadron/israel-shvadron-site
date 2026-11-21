import { pathForLocale, type Locale } from "@/content/copy";

export function BuiltByBadge({ locale }: { locale: Locale }) {
  const label = locale === "en" ? "Built by Srulik" : "נבנה ע״י שרוליק";
  return (
    <a href={pathForLocale(locale, "/")} className="built-by">
      <span className="built-by-dot" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
