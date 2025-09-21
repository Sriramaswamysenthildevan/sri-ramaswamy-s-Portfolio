"use client"

import type React from "react"

import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code2, Lightbulb, Database, Sigma } from "lucide-react"
import { MobileCard, useIsMobile } from "@/components/ui/mobile-optimizations"
import { SkeletonText } from "@/components/ui/loading-animations"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const isMobile = useIsMobile()
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setContentLoaded(true), 300)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.15 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 15 : 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.5,
      },
    },
  }

  const features = [
    {
      icon: <Code2 className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />,
      title: "Full-Stack Development",
      description: "Building responsive, fast, and accessible web applications with modern frameworks.",
    },
    {
      icon: <Lightbulb className="h-6 w-6 md:h-8 md:w-8 text-amber-400" />,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing interfaces for exceptional user experiences.",
    },
    {
      icon: <Sigma className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />,
      title: "AI & Machine Learning",
      description: "Developing intelligent systems that learn and adapt to user behavior.",
    },
    {
      icon: <Database className="h-6 w-6 md:h-8 md:w-8 text-emerald-400" />,
      title: "Data Analysis",
      description: "Transforming complex data into meaningful insights and visualization.",
    },
  ]

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About Me</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-2xl mb-8 md:mb-12 text-center px-4">
            {contentLoaded ? (
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm a passionate web developer with expertise in AI/ML, full-stack development, and user-centric design.
                Driven by creating intuitive digital experiences that leverage cutting-edge technology to solve
                real-world problems.
              </p>
            ) : (
              <SkeletonText lines={3} />
            )}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                variants={itemVariants}
                loaded={contentLoaded}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  variants: any
  loaded: boolean
}

function FeatureCard({ icon, title, description, variants, loaded }: FeatureCardProps) {
  if (!loaded) {
    return (
      <div className="animate-pulse">
        <div className="p-4 md:p-6 rounded-xl bg-gray-900/50 border border-gray-800">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700/50 rounded-full mb-4"></div>
          <div className="h-5 bg-gray-700/50 rounded mb-2"></div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-700/50 rounded"></div>
            <div className="h-3 bg-gray-700/50 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div variants={variants}>
      <MobileCard className="h-full group">
        <div className="p-2 md:p-3 rounded-full w-fit bg-gray-800/50 mb-4 group-hover:bg-gray-800 transition-all">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
      </MobileCard>
    </motion.div>
  )
}
