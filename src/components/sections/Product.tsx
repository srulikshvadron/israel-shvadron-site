import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";

export function Offer({ copy }: { copy: Copy }) {
  const offer = copy.offer;
  const whatsapp = whatsappHref();

  return (
    <Section id={offer.id} title={offer.title}>
      <Reveal>
        <div className="studio-card max-w-xl">
          <p className="text-lg leading-relaxed text-muted">{offer.line}</p>
          <Button
            href={whatsapp ?? "#contact"}
            className="mt-6"
            {...(whatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {offer.cta}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
