import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppCta } from "@/components/ui/WhatsAppCta";

export function Examples({ copy }: { copy: Copy }) {
  const examples = copy.examples;
  return (
    <Section id={examples.id} title={examples.title} className="bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {examples.items.map((item) => (
          <li key={item.before}>
            <Reveal className="h-full">
              <div className="studio-card">
                <p className="text-base font-semibold text-muted">{examples.labels.before}</p>
                <p
                  className={
                    item.before.startsWith('"') && item.before.endsWith('"')
                      ? "mt-2 font-display text-[1.375rem] leading-snug text-slate-200"
                      : "mt-2 font-display text-[1.375rem] leading-snug text-fg"
                  }
                >
                  {item.before}
                </p>
                <p className="mt-5 text-base font-semibold text-accent">{examples.labels.after}</p>
                <p className="mt-2 font-display text-[1.375rem] leading-snug text-fg">{item.after}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-10">
        <WhatsAppCta copy={copy} />
      </Reveal>
    </Section>
  );
}
