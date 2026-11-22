import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Services({ copy }: { copy: Copy }) {
  const services = copy.services;
  return (
    <Section id={services.id} title={services.title} className="border-y border-line bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
            <li className={item.quiet ? "studio-card studio-card-quiet" : "studio-card"}>
              <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="mt-3 leading-relaxed text-muted">
                  {line}
                </p>
              ))}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
