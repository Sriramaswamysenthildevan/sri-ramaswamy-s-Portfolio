"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { experiences } from "@/data/projectData";

const typeIcon = {
  education: <GraduationCap size={20} />,
  experience: <Briefcase size={20} />,
  leadership: <Award size={20} />,
};

const typeColor = {
  education: "from-blue-500 to-cyan-500",
  experience: "from-purple-500 to-violet-500",
  leadership: "from-amber-500 to-orange-500",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 sm:left-6 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${typeColor[exp.type]} shadow-lg ring-4 ring-[#09090B]`}
                />

                {/* Card */}
                <div className="group p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/[0.02] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 text-purple-400 flex items-center justify-center">
                        {typeIcon[exp.type]}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs text-zinc-500 bg-white/5 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
