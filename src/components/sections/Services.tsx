import { services } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <Section
      id={services.id}
      title={services.title}
      subtitle={services.subtitle}
      eyebrow={services.eyebrow}
      className="border-y border-line bg-bg-elevated/30"
    >
      <ul className="grid gap-5 lg:grid-cols-3">
        {services.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 90}>
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
      </ul>
    </Section>
  );
}
