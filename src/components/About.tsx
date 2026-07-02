"use client";

import { motion } from "framer-motion";
import { User, MapPin, Target } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: <User size={20} />,
                label: "Name",
                value: siteConfig.name,
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: siteConfig.location,
              },
              {
                icon: <Target size={20} />,
                label: "Focus",
                value: "DevOps • Cloud • Automation",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Now Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/10"
            >
              <p className="text-xs text-purple-400 uppercase tracking-wider font-semibold mb-2">
                🚀 Currently
              </p>
              <div className="space-y-1.5">
                {[
                  "Learning Kubernetes",
                  "Building DevOps Projects",
                  "Documenting 365 Days of DevOps",
                ].map((item) => (
                  <p key={item} className="text-sm text-zinc-300 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                {siteConfig.about}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "10+", label: "Projects" },
                { value: "365", label: "Days DevOps" },
                { value: "5+", label: "Certifications" },
                { value: "100+", label: "Days Git" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.5 }}
                  className="text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors"
                >
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
