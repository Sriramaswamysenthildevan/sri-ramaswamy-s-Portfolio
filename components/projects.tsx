"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"
import { MobileCard, OptimizedImage, useIsMobile } from "@/components/ui/mobile-optimizations"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isMobile = useIsMobile()
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({})

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.2 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: isMobile ? 20 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
      },
    },
  }

  const projects = [
    {
      title: "Multiple Disease Prediction System",
      description:
        "Predictive system for diseases like diabetes and heart disease using machine learning models, deployed with Streamlit.",
      image: "/medical-ai-dashboard.jpg",
      tags: ["Python", "scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/Sriramaswamysenthildevan",
      demo: "#",
    },
    {
      title: "Reverse Classroom Learning Platform",
      description:
        "Adaptive learning platform with emotion tracking and dynamic video content adjustment. Modern responsive UI.",
      image: "/education-platform-interface.png",
      tags: ["Python", "Streamlit", "Tailwind CSS", "Emotion Detection"],
      github: "https://github.com/Sriramaswamysenthildevan",
      demo: "#",
    },
  ]

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>

      <div ref={ref} className="container mx-auto px-4 max-w-6xl relative z-10">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-fuchsia-500">
              Featured Projects
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500"></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4"
          >
            Showcasing my latest work with interactive and innovative solutions.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 w-full">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                variants={itemVariants}
                index={index}
                onImageLoad={() => handleImageLoad(index)}
                imageLoaded={imagesLoaded[index]}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
  }
  variants: any
  index: number
  onImageLoad: () => void
  imageLoaded?: boolean
}

function ProjectCard({ project, variants, index, onImageLoad, imageLoaded }: ProjectCardProps) {
  const isMobile = useIsMobile()

  return (
    <motion.div variants={variants} className="group perspective">
      <MobileCard className="h-full transform-style-3d transition-all duration-500" hover={!isMobile}>
        <div className="relative h-48 md:h-56 overflow-hidden rounded-lg mb-4 group-hover:h-44 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>

          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-800/50 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            </div>
          )}

          <OptimizedImage src={project.image} alt={project.title} className="w-full h-full" onLoad={onImageLoad} />
        </div>

        <div className="p-2 md:p-4">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 md:px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors touch-manipulation"
            >
              <Github size={18} />
              <span className="text-sm md:text-base">Github</span>
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors touch-manipulation"
            >
              <span className="text-sm md:text-base">Live Demo</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </MobileCard>
    </motion.div>
  )
}
