import type { Copy } from "@/content/copy";
import { Container } from "@/components/ui/Container";

export function Process({ copy }: { copy: Copy }) {
  const process = copy.process;

  return (
    <section id={process.id} aria-labelledby="process-title" className="scroll-mt-24">
      <Container className="py-12 sm:py-16">
        <h2 id="process-title" className="process-strip">
          {process.beats.map((beat, index) => (
            <span key={beat} className={index === process.beats.length - 1 ? "is-punch" : undefined}>
              {beat}
            </span>
          ))}
        </h2>
      </Container>
    </section>
  );
}
