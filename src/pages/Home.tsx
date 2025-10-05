import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skill";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/certification";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0d1117] text-gray-200 font-sans scroll-smooth">
      <section id="hero">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <Footer />
    </div>
  );
}
