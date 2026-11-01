import { services } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Services() {
  return (
    <Section
      id={services.id}
      title={services.title}
      subtitle={services.subtitle}
      eyebrow="מה אני מציע"
      className="border-y border-line bg-bg-elevated/30"
    >
      <ul className="grid gap-x-10 gap-y-10 lg:grid-cols-3">
        {services.items.map((item, index) => (
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
