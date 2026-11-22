import type { Copy } from "@/content/copy";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function WhatsAppCta({ copy, className }: { copy: Copy; className?: string }) {
  const href = whatsappHref(copy.whatsappPrefill);

  return (
    <Button
      href={href ?? "#contact"}
      className={cn("w-full sm:w-auto", className)}
      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {copy.hero.primary}
    </Button>
  );
}
