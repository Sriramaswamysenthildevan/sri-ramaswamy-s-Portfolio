"use client"

import { Suspense, useState, useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { OptimizedAnimate } from "@/components/ui/performance-optimized-animations"
import { PageLoader, SectionLoader, MobileOptimizedLoader } from "@/components/ui/loading-animations"
import { useIsMobile } from "@/components/ui/mobile-optimizations"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [sectionsLoaded, setSectionsLoaded] = useState({
    hero: false,
    about: false,
    projects: false,
    skills: false,
    contact: false,
  })
  const isMobile = useIsMobile()

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Gradually load sections
      const loadSections = async () => {
        const sections = ["hero", "about", "projects", "skills", "contact"]
        for (let i = 0; i < sections.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 300))
          setSectionsLoaded((prev) => ({
            ...prev,
            [sections[i]]: true,
          }))
        }
      }
      loadSections()
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return isMobile ? <MobileOptimizedLoader /> : <PageLoader />
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden smooth-scroll">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>

      {!isMobile && <CustomCursor />}
      <Navbar />

      <Suspense fallback={<div className="h-screen" />}>
        <section id="home">
          {sectionsLoaded.hero ? (
            <Hero />
          ) : (
            <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500"></div>
            </div>
          )}
        </section>

        <OptimizedAnimate animation="fade" delay={200}>
          <section id="about">{sectionsLoaded.about ? <About /> : <SectionLoader title="About" />}</section>
        </OptimizedAnimate>

        <OptimizedAnimate animation="slide-up" delay={300}>
          <section id="projects">{sectionsLoaded.projects ? <Projects /> : <SectionLoader title="Projects" />}</section>
        </OptimizedAnimate>

        <OptimizedAnimate animation="slide-up" delay={400}>
          <section id="skills">{sectionsLoaded.skills ? <Skills /> : <SectionLoader title="Skills" />}</section>
        </OptimizedAnimate>

        <OptimizedAnimate animation="fade" delay={500}>
          <section id="contact">{sectionsLoaded.contact ? <Contact /> : <SectionLoader title="Contact" />}</section>
        </OptimizedAnimate>

        <Footer />
      </Suspense>
    </main>
  )
}
