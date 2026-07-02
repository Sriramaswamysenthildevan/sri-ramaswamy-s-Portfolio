"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const techIcons = [
  { name: "Docker", emoji: "🐳", x: "8%", y: "18%", delay: 0, description: "Containerization platform for building, shipping, and running apps", color: "from-blue-400 to-cyan-400" },
  { name: "Linux", emoji: "🐧", x: "82%", y: "12%", delay: 0.5, description: "Open-source operating system — the backbone of DevOps", color: "from-yellow-400 to-orange-400" },
  { name: "AWS", emoji: "☁️", x: "18%", y: "72%", delay: 1, description: "Amazon Web Services — leading cloud computing platform", color: "from-orange-400 to-amber-400" },
  { name: "Git", emoji: "📦", x: "78%", y: "68%", delay: 1.5, description: "Distributed version control for tracking code changes", color: "from-red-400 to-rose-400" },
  { name: "Python", emoji: "🐍", x: "48%", y: "8%", delay: 2, description: "Versatile programming language for scripting & automation", color: "from-green-400 to-emerald-400" },
  { name: "React", emoji: "⚛️", x: "88%", y: "42%", delay: 2.5, description: "JavaScript library for building modern user interfaces", color: "from-cyan-400 to-blue-400" },
  { name: "Terraform", emoji: "🏗️", x: "12%", y: "45%", delay: 3, description: "Infrastructure as Code tool for cloud provisioning", color: "from-purple-400 to-violet-400" },
  { name: "Jenkins", emoji: "🔧", x: "62%", y: "78%", delay: 3.5, description: "Open-source automation server for CI/CD pipelines", color: "from-red-400 to-orange-400" },
  { name: "K8s", emoji: "☸️", x: "38%", y: "88%", delay: 4, description: "Kubernetes — container orchestration at scale", color: "from-blue-400 to-indigo-400" },
];

export default function TechStackFloat() {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [clickedTech, setClickedTech] = useState<string | null>(null);

  const activeItem = techIcons.find((t) => t.name === (clickedTech || activeTech));

  const handleClick = (name: string) => {
    setClickedTech((prev) => (prev === name ? null : name));
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tools I{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Love
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Click or hover to explore my favorite technologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Interactive floating area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-64 sm:h-80 lg:h-96"
        >
          {techIcons.map((icon) => {
            const isActive = (clickedTech || activeTech) === icon.name;

            return (
              <motion.div
                key={icon.name}
                className="absolute"
                style={{ left: icon.x, top: icon.y }}
                animate={{
                  y: isActive ? -5 : [0, -15, 0],
                  rotate: isActive ? 0 : [0, 5, -5, 0],
                }}
                transition={{
                  repeat: isActive ? 0 : Infinity,
                  duration: 4 + icon.delay,
                  ease: "easeInOut",
                  delay: icon.delay * 0.3,
                }}
              >
                <motion.button
                  onClick={() => handleClick(icon.name)}
                  onMouseEnter={() => setActiveTech(icon.name)}
                  onMouseLeave={() => setActiveTech(null)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative flex flex-col items-center gap-1.5 cursor-pointer outline-none transition-all duration-300 ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  aria-label={`Learn about ${icon.name}`}
                >
                  {/* Glow effect when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute -inset-4 rounded-full bg-purple-500/20 blur-xl"
                      />
                    )}
                  </AnimatePresence>

                  {/* Emoji */}
                  <span
                    className={`text-3xl sm:text-4xl transition-all duration-300 drop-shadow-lg ${
                      isActive ? "drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]" : ""
                    }`}
                  >
                    {icon.emoji}
                  </span>

                  {/* Name label */}
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : 5,
                    }}
                    className={`text-xs font-medium bg-gradient-to-r ${icon.color} bg-clip-text text-transparent whitespace-nowrap`}
                  >
                    {icon.name}
                  </motion.span>

                  {/* Pulse ring when clicked */}
                  {clickedTech === icon.name && (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0.8 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-purple-500/40"
                    />
                  )}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info card that appears when a tool is selected */}
        <div className="h-24 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {activeItem && (
              <motion.div
                key={activeItem.name}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-md mx-auto text-center px-6 py-4 rounded-2xl bg-white/[0.03] border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <span className="text-lg">{activeItem.emoji}</span>
                  <h3 className={`font-semibold bg-gradient-to-r ${activeItem.color} bg-clip-text text-transparent`}>
                    {activeItem.name}
                  </h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {activeItem.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
