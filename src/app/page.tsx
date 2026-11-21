import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Product } from "@/components/sections/Product";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Values } from "@/components/sections/Values";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Product />
      <Process />
      <About />
      <Values />
      <Contact />
    </main>
  );
}
