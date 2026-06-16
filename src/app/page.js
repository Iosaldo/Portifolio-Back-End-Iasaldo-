import About from "@/components/dashboard/About";
import Education from "@/components/dashboard/Education";
import Hero from "@/components/dashboard/Hero";
import Projects from "@/components/dashboard/Projects";
import Skills from "@/components/dashboard/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <div style={{ marginTop: "80px" }} aria-hidden="true" />
      <Education />
      <About />
    </>
  );
}
