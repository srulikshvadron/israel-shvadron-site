import { values } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Values() {
  return (
    <Section
      id={values.id}
      title={values.title}
      subtitle={values.subtitle}
      eyebrow={values.eyebrow}
    >
      <ul className="grid gap-8 sm:grid-cols-2">
        {values.items.map((item) => (
          <Reveal key={item.title}>
            <li>
              <h3 className="font-display text-xl font-semibold text-fg">
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
