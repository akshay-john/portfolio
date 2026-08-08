import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { ResumeCTA } from "@/components/ResumeCTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-sky-500/30 selection:text-white">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
