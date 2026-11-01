import { capabilities } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Capabilities() {
  return (
    <Section
      id={capabilities.id}
      title={capabilities.title}
      subtitle={capabilities.subtitle}
      eyebrow="שיטת עבודה"
    >
      <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {capabilities.items.map((item, index) => (
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
      </ul>
    </Section>
  );
}
