import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { IconBadge } from "@/components/ui/Icon";

export function Services({ copy }: { copy: Copy }) {
  const services = copy.services;
  return (
    <Section id={services.id} eyebrow={services.eyebrow} title={services.title} className="border-y border-line bg-bg-elevated/25">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.items.map((item) => (
          <li key={item.title}>
            <Reveal className="h-full">
              <div className={item.quiet ? "studio-card studio-card-calm" : "studio-card"}>
                <div className="flex items-center gap-3">
                  <IconBadge name={item.icon} quiet={item.quiet} />
                  <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
                </div>
                {item.lines.map((line) => (
                  <p key={line} className="mt-3 text-[1.0625rem] leading-relaxed text-muted">
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
