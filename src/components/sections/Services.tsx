import type { Copy } from "@/content/copy";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

function BuildLine({ text }: { text: string }) {
  const splitAt = text.indexOf(":");
  if (splitAt === -1 || splitAt > 24) {
    return <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg">{text}</p>;
  }

  return (
    <p className="mt-3 text-[1.0625rem] leading-relaxed text-fg">
      <span className="font-semibold text-accent">{text.slice(0, splitAt + 1)}</span>
      {text.slice(splitAt + 1)}
    </p>
  );
}

export function Services({ copy }: { copy: Copy }) {
  const services = copy.services;

  return (
    <Section
      id={services.id}
      title={services.title}
      subtitle={services.intro}
      className="border-y border-line bg-bg-elevated/25"
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.items.map((item) => {
          const href = whatsappHref(item.prefill);
          return (
            <li key={item.title} className={item.distinct ? "sm:col-span-2" : undefined}>
              <Reveal className="h-full">
                <div className={cn("studio-card flex flex-col", item.distinct && "studio-card-other")}>
                  <h3 className="font-display text-xl font-semibold text-fg">{item.title}</h3>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted">{item.line}</p>
                  {item.build ? <BuildLine text={item.build} /> : null}
                  <div className="mt-auto pt-6">
                    <Button
                      href={href ?? "#contact"}
                      className="w-full sm:w-auto"
                      {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.button}
                    </Button>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted">{services.quiet}</p>
    </Section>
  );
}
