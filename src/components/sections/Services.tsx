import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Services({ copy }: { copy: Copy }) {
  const services = copy.services;
  return (
    <Section id={services.id} title={services.title} className="border-y border-line bg-bg-elevated/30">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
            <li className="studio-card">
              <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.line}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
