import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Capabilities } from "@/components/sections/Capabilities";
import { Interests } from "@/components/sections/Interests";
import { Vision } from "@/components/sections/Vision";
import { Values } from "@/components/sections/Values";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <Interests />
      <Vision />
      <Values />
      <Contact />
    </main>
  );
}
