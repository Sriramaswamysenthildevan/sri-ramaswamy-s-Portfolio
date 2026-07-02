"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GitHubStats() {
  const username = "sriramaswamy";

  return (
    <section id="github" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            GitHub{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Stats
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            My open-source contributions and coding activity
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 p-1"
          >
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=A855F7&text_color=a1a1aa&icon_color=7C3AED&bg_color=00000000`}
              alt="GitHub Stats"
              width={500}
              height={200}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 p-1"
          >
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=A855F7&text_color=a1a1aa&bg_color=00000000`}
              alt="Top Languages"
              width={500}
              height={200}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 p-1"
          >
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=7C3AED&fire=A855F7&currStreakLabel=A855F7&sideLabels=a1a1aa&dates=71717a&currStreakNum=fafafa&sideNums=fafafa&background=00000000`}
              alt="GitHub Streak"
              width={800}
              height={200}
              className="w-full h-auto"
              unoptimized
            />
          </motion.div>
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 p-1"
        >
          <Image
            src={`https://ghchart.rshah.org/7C3AED/${username}`}
            alt="GitHub Contribution Graph"
            width={900}
            height={130}
            className="w-full h-auto"
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
