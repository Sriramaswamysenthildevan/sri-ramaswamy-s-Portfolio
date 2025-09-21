"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Hook to detect mobile device
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  return isMobile
}

// Hook to detect touch device
export function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  return isTouch
}

// Mobile-optimized animation wrapper
export function MobileOptimizedMotion({
  children,
  className,
  mobileAnimation,
  desktopAnimation,
  ...props
}: {
  children: React.ReactNode
  className?: string
  mobileAnimation?: any
  desktopAnimation?: any
  [key: string]: any
}) {
  const isMobile = useIsMobile()

  const animation = isMobile ? mobileAnimation : desktopAnimation

  return (
    <motion.div className={className} {...animation} {...props}>
      {children}
    </motion.div>
  )
}

// Touch-friendly button component
export function TouchButton({
  children,
  className,
  size = "default",
  ...props
}: {
  children: React.ReactNode
  className?: string
  size?: "sm" | "default" | "lg"
  [key: string]: any
}) {
  const isTouch = useIsTouch()

  const sizeClasses = {
    sm: isTouch ? "px-4 py-3 text-sm" : "px-3 py-2 text-sm",
    default: isTouch ? "px-6 py-4 text-base" : "px-4 py-2 text-base",
    lg: isTouch ? "px-8 py-5 text-lg" : "px-6 py-3 text-lg",
  }

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(
        "rounded-lg font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Mobile-optimized card component
export function MobileCard({
  children,
  className,
  hover = true,
  ...props
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
  [key: string]: any
}) {
  const isMobile = useIsMobile()

  return (
    <motion.div
      whileHover={!isMobile && hover ? { y: -5, scale: 1.02 } : {}}
      whileTap={isMobile ? { scale: 0.98 } : {}}
      className={cn(
        "rounded-xl bg-gray-900/50 border border-gray-800 p-6",
        "transition-all duration-300",
        !isMobile && hover && "hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Responsive text component
export function ResponsiveText({
  children,
  className,
  mobileSize = "text-sm",
  desktopSize = "text-base",
}: {
  children: React.ReactNode
  className?: string
  mobileSize?: string
  desktopSize?: string
}) {
  return <div className={cn(mobileSize, `md:${desktopSize}`, className)}>{children}</div>
}

// Mobile-optimized grid
export function ResponsiveGrid({
  children,
  className,
  cols = { mobile: 1, tablet: 2, desktop: 3 },
}: {
  children: React.ReactNode
  className?: string
  cols?: { mobile: number; tablet: number; desktop: number }
}) {
  return (
    <div
      className={cn(
        `grid grid-cols-${cols.mobile} md:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop} gap-4 md:gap-6`,
        className,
      )}
    >
      {children}
    </div>
  )
}

// Performance-optimized image component for mobile
export function OptimizedImage({
  src,
  alt,
  className,
  loading = "lazy",
  ...props
}: {
  src: string
  alt: string
  className?: string
  loading?: "lazy" | "eager"
  [key: string]: any
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gray-800/50 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={cn("w-full h-full object-cover", isLoaded ? "block" : "hidden")}
        {...props}
      />

      {hasError && (
        <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}
