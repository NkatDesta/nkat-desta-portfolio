import { Nav } from "@/app/components/layout/Nav";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Projects } from "@/app/components/sections/Projects";
import { Skills } from "@/app/components/sections/Skills";
import { About } from "@/app/components/sections/About";
import { Contact } from "@/app/components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
