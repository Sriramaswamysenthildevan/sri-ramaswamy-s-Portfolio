"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { MobileCard, useIsMobile } from "@/components/ui/mobile-optimizations"
import { SkeletonCard } from "@/components/ui/loading-animations"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useIsMobile()
  const [skillsLoaded, setSkillsLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setSkillsLoaded(true), 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 15 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.4,
      },
    },
  }

  const skillCategories = [
    {
      name: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C"],
    },
    {
      name: "Web Development",
      skills: ["HTML5", "CSS3", "React", "Node.js", "Tailwind CSS"],
    },
    {
      name: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      name: "AI/ML",
      skills: ["Deep Learning", "Generative AI", "scikit-learn", "Pandas", "Streamlit"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "AWS", "Figma"],
    },
  ]

  if (!skillsLoaded) {
    return (
      <section ref={ref} className="py-12 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <div className="animate-pulse">
              <div className="h-8 md:h-10 bg-gray-700/50 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700/50 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-6 bg-gray-700/50 rounded w-48 animate-pulse"></div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <SkeletonCard key={j} className="h-20 md:h-24" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" ref={ref} className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-foreground">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 bg-white text-gray-800">
             <h3 className="font-medium mb-2">Frontend</h3>
             <ul className="text-sm space-y-1">
               <li>React / Next.js</li>
               <li>Tailwind CSS</li>
               <li>Framer Motion</li>
             </ul>
           </div>
 
          <div className="p-4 rounded-lg border border-gray-200 bg-white text-gray-800">
             <h3 className="font-medium mb-2">3D / WebGL</h3>
             <ul className="text-sm space-y-1">
               <li>Three.js</li>
               <li>@react-three/fiber</li>
               <li>@react-three/drei</li>
             </ul>
           </div>
 
          <div className="p-4 rounded-lg border border-gray-200 bg-white text-gray-800">
             <h3 className="font-medium mb-2">Tools</h3>
             <ul className="text-sm space-y-1">
               <li>TypeScript</li>
               <li>zod</li>
               <li>ESLint / Prettier</li>
             </ul>
           </div>
         </div>
      </div>
    </section>
  )
}
