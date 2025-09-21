"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Calendar } from "lucide-react"
import { EnhancedContactForm } from "@/components/ui/enhanced-contact-form"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div ref={ref} className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-center relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Get In Touch
            </span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12"
          >
            Interested in working together? Feel free to contact me through the form below or via email.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            <motion.div variants={itemVariants}>
              <div className="h-full rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Connect With Me</h3>

                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:sriramaswamyworks@gmail.com"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span>sriramaswamyworks@gmail.com</span>
                  </a>

                  <a
                    href="https://github.com/Sriramaswamysenthildevan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5" />
                    </div>
                    <span>github.com/Sriramaswamysenthildevan</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/sriramaswamy-senthil-devan-056544250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span>linkedin.com/in/sriramaswamy-senthil-devan</span>
                  </a>
                </div>

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 px-5 py-3 w-full text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule a Meeting</span>
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="h-full rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 p-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Send Me a Message</h3>
                <EnhancedContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
