import { workflow } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Process() {
  return (
    <Section
      id={workflow.id}
      title={workflow.title}
      subtitle={workflow.subtitle}
      eyebrow={workflow.eyebrow}
      className="border-y border-line bg-bg-elevated/30"
    >
      <ol className="grid gap-5 sm:grid-cols-2">
        {workflow.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 80}>
            <li className="studio-card">
              <p className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold text-fg">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
