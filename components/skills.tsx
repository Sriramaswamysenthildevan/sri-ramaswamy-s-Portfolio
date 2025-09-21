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
      <section className="py-12 md:py-20 relative overflow-hidden">
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
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-950/10 to-transparent pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-blue-500">
              Skills & Expertise
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-blue-500"></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4"
          >
            A comprehensive toolkit of technologies I work with.
          </motion.p>

          <motion.div variants={containerVariants} className="w-full space-y-8 md:space-y-10">
            {skillCategories.map((category, idx) => (
              <motion.div key={idx} variants={itemVariants} className="w-full">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-white px-2">{category.name}</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: isMobile ? 0.3 : 0.4,
                        delay: isInView ? 0.05 * index : 0,
                      }}
                      className="group"
                    >
                      <MobileCard className="h-20 md:h-24 flex items-center justify-center p-3 md:p-4 hover:shadow-lg hover:shadow-fuchsia-500/10">
                        <div className="text-center">
                          <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm md:text-base">
                            {skill}
                          </span>
                        </div>
                      </MobileCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
