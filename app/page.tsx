import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-32">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
