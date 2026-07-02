"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Docker Works — A Beginner's Deep Dive",
    excerpt: "Understanding containers, images, and the Docker daemon from the ground up.",
    date: "2026",
    tags: ["Docker", "DevOps"],
    readTime: "8 min",
  },
  {
    title: "100 Linux Commands Every DevOps Engineer Should Know",
    excerpt: "A comprehensive guide to essential Linux commands for system administration and automation.",
    date: "2026",
    tags: ["Linux", "CLI"],
    readTime: "12 min",
  },
  {
    title: "Building CI/CD Pipelines with GitHub Actions",
    excerpt: "Step-by-step guide to automating your deployment workflow with GitHub Actions.",
    date: "2026",
    tags: ["CI/CD", "GitHub"],
    readTime: "10 min",
  },
  {
    title: "AWS Basics — Getting Started with Cloud",
    excerpt: "Introduction to AWS core services: EC2, S3, IAM, and VPC explained simply.",
    date: "2026",
    tags: ["AWS", "Cloud"],
    readTime: "7 min",
  },
  {
    title: "What I Learned Today — DevOps Journal",
    excerpt: "Daily notes and reflections from my 365-day DevOps learning journey.",
    date: "2026",
    tags: ["Journal", "Learning"],
    readTime: "5 min",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Latest{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Articles
            </span>
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Technical writings and lessons from my DevOps journey
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 hover:bg-purple-500/[0.02] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span>·</span>
                <span>{post.readTime} read</span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight
                  size={16}
                  className="text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
