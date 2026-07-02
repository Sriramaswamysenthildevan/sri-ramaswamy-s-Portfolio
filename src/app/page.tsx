import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticleBackground from "@/components/ParticleBackground";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Certifications from "@/components/Certifications";
import TechStackFloat from "@/components/TechStackFloat";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Certifications />
        <TechStackFloat />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
