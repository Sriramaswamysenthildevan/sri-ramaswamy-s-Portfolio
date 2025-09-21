"use client"

import type React from "react"

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import { StaggeredChildren } from "@/components/ui/staggered-children"
import { FramerScrollAnimation } from "@/components/ui/framer-scroll-animation"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ExamplePage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  return (
    <div className="container mx-auto py-12 space-y-24">
      {/* Example using AnimateOnScroll component */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">AnimateOnScroll Component</h2>

        <AnimateOnScroll animation="fade" className="p-6 bg-card rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Fade Animation</h3>
          <p>This section fades in when it enters the viewport.</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" className="p-6 bg-card rounded-lg shadow-lg" delay={200}>
          <h3 className="text-xl font-semibold mb-4">Slide Up Animation with Delay</h3>
          <p>This section slides up with a 200ms delay when it enters the viewport.</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-left" className="p-6 bg-card rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Slide Left Animation</h3>
          <p>This section slides in from the left when it enters the viewport.</p>
        </AnimateOnScroll>
      </section>

      {/* Example using StaggeredChildren component */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Staggered Children Animation</h2>

        <StaggeredChildren animation="fade" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Card 1</h3>
            <p>This card appears first in the staggered animation.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Card 2</h3>
            <p>This card appears second in the staggered animation.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Card 3</h3>
            <p>This card appears third in the staggered animation.</p>
          </div>
        </StaggeredChildren>
      </section>

      {/* Example using Framer Motion */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Framer Motion Animations</h2>

        <FramerScrollAnimation variant="fadeInUp" className="p-6 bg-card rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Fade In Up</h3>
          <p>This section uses Framer Motion to fade in and slide up when it enters the viewport.</p>
        </FramerScrollAnimation>

        <FramerScrollAnimation variant="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Staggered Item 1</h3>
            <p>This item appears with a staggered animation using Framer Motion.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Staggered Item 2</h3>
            <p>This item appears with a staggered animation using Framer Motion.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Staggered Item 3</h3>
            <p>This item appears with a staggered animation using Framer Motion.</p>
          </div>
        </FramerScrollAnimation>
      </section>

      {/* Example using useScrollAnimation hook */}
      <section
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`p-6 bg-card rounded-lg shadow-lg transition-all duration-500 transform ${
          sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl font-bold mb-4">useScrollAnimation Hook</h2>
        <p>This section uses the custom useScrollAnimation hook to animate when it enters the viewport.</p>
      </section>
    </div>
  )
}
