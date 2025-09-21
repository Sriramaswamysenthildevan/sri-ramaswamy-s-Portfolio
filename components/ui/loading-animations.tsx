"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Loader2, Code, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

// Skeleton Loading Components
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse", className)}>
      <div className="rounded-lg bg-gray-800/50 p-6 space-y-4">
        <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-700/50 rounded"></div>
          <div className="h-3 bg-gray-700/50 rounded w-5/6"></div>
        </div>
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-700/50 rounded-full w-16"></div>
          <div className="h-6 bg-gray-700/50 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  )
}

export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("animate-pulse space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className={cn("h-4 bg-gray-700/50 rounded", i === lines - 1 ? "w-3/4" : "w-full")} />
      ))}
    </div>
  )
}

export function SkeletonAvatar({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return <div className={cn("animate-pulse rounded-full bg-gray-700/50", sizeClasses[size])} />
}

// Loading Spinners
export function LoadingSpinner({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className={cn("border-2 border-purple-500/30 border-t-purple-500 rounded-full", sizeClasses[size], className)}
    />
  )
}

export function PulsingDots({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-1", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.2,
          }}
          className="w-2 h-2 bg-purple-500 rounded-full"
        />
      ))}
    </div>
  )
}

export function WaveLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-end space-x-1", className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          animate={{
            scaleY: [1, 2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.1,
          }}
          className="w-1 h-4 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full"
        />
      ))}
    </div>
  )
}

// Advanced Loading Components
export function CodeLoadingAnimation() {
  const codeLines = [
    "const portfolio = new Portfolio()",
    "portfolio.loadProjects()",
    "portfolio.initializeAnimations()",
    "portfolio.render()",
  ]

  return (
    <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3">
        <Code className="w-4 h-4 text-green-400" />
        <span className="text-green-400">Loading Portfolio...</span>
      </div>
      {codeLines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.5, duration: 0.3 }}
          className="text-gray-300 mb-1"
        >
          <span className="text-purple-400">{">"}</span> {line}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 + 0.3 }}
            className="text-green-400 ml-1"
          >
            ✓
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}

export function ParticleLoader() {
  return (
    <div className="relative w-24 h-24">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500 rounded-full"
          style={{
            left: "50%",
            top: "50%",
            transformOrigin: "0 40px",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <Sparkles className="w-6 h-6 text-purple-400" />
      </div>
    </div>
  )
}

// Page Loading Component
export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-center">
        <ParticleLoader />
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-white mt-6 mb-2"
        >
          Loading Portfolio
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400"
        >
          Preparing an amazing experience...
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          className="w-48 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6 mx-auto"
        />
      </div>
    </motion.div>
  )
}

// Button Loading States
export function LoadingButton({
  children,
  loading = false,
  className,
  ...props
}: {
  children: React.ReactNode
  loading?: boolean
  className?: string
  [key: string]: any
}) {
  return (
    <button
      className={cn("relative overflow-hidden transition-all duration-300", loading && "cursor-not-allowed", className)}
      disabled={loading}
      {...props}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading...
          </motion.div>
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

// Section Loading Placeholder
export function SectionLoader({ title }: { title: string }) {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700/50 rounded w-48 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-700/50 rounded w-96 mx-auto"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

// Mobile-optimized loading states
export function MobileOptimizedLoader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full mb-6"
      />
      <motion.h3
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-lg font-semibold text-white mb-2"
      >
        Loading...
      </motion.h3>
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.1,
            }}
            className="w-2 h-2 bg-purple-500 rounded-full"
          />
        ))}
      </div>
    </div>
  )
}
