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
      <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {workflow.items.map((item, index) => (
          <Reveal key={item.title}>
            <li className="border-s-2 border-accent/40 ps-5">
              <h3 className="font-display text-xl font-semibold text-fg">
                <span className="me-2 text-sm font-medium text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
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
