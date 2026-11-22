import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Examples({ copy }: { copy: Copy }) {
  const examples = copy.examples;
  return (
    <Section id={examples.id} title={examples.title} className="bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {examples.items.map((item, index) => (
          <Reveal key={item.before} delay={index * 80}>
            <li className="studio-card">
              <p className="text-sm font-semibold text-muted">{examples.labels.before}</p>
              <p className="mt-2 font-display text-xl leading-snug text-fg">{item.before}</p>
              <p className="mt-5 text-sm font-semibold text-accent">{examples.labels.after}</p>
              <p className="mt-2 font-display text-xl leading-snug text-fg">{item.after}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
