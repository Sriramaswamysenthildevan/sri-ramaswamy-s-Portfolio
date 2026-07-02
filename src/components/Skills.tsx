"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Container, Database, Wrench } from "lucide-react";
import { skills } from "@/data/projectData";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={20} />,
  layout: <Layout size={20} />,
  server: <Server size={20} />,
  container: <Container size={20} />,
  database: <Database size={20} />,
  wrench: <Wrench size={20} />,
};

export default function Skills() {
  const categories = Object.values(skills);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tech{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Technologies and tools I work with daily
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/[0.03] transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.05 + i * 0.03 }}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5 text-sm text-zinc-300 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
