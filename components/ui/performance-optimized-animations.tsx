"use client"

import type React from "react"

import { useRef, useEffect, useState, type ReactNode, useCallback } from "react"
import { cn } from "@/lib/utils"

// Performance-optimized intersection observer hook
export function useIntersectionObserver(options: IntersectionObserverInit = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)

        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, hasIntersected])

  return { ref, isIntersecting, hasIntersected }
}

// Optimized animation component with reduced reflows
interface OptimizedAnimateProps {
  children: ReactNode
  animation?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "slide-left"
    | "slide-right"
    | "scale"
    | "rotate"
    | "blur"
    | "flip"
    | "bounce"
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  threshold?: number
  rootMargin?: string
}

export function OptimizedAnimate({
  children,
  animation = "fade",
  className = "",
  delay = 0,
  duration = 600,
  once = true,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: OptimizedAnimateProps) {
  const { ref, isIntersecting, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
  })

  const shouldAnimate = once ? hasIntersected : isIntersecting

  const getAnimationStyles = useCallback(() => {
    const baseStyles = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      transitionDelay: `${delay}ms`,
      willChange: shouldAnimate ? "auto" : "opacity, transform",
    }

    if (!shouldAnimate) {
      switch (animation) {
        case "fade":
          return { ...baseStyles, opacity: 0 }
        case "slide-up":
          return { ...baseStyles, opacity: 0, transform: "translateY(50px)" }
        case "slide-down":
          return { ...baseStyles, opacity: 0, transform: "translateY(-50px)" }
        case "slide-left":
          return { ...baseStyles, opacity: 0, transform: "translateX(-50px)" }
        case "slide-right":
          return { ...baseStyles, opacity: 0, transform: "translateX(50px)" }
        case "scale":
          return { ...baseStyles, opacity: 0, transform: "scale(0.8)" }
        case "rotate":
          return { ...baseStyles, opacity: 0, transform: "rotate(-10deg) scale(0.8)" }
        case "blur":
          return { ...baseStyles, opacity: 0, filter: "blur(10px)" }
        case "flip":
          return { ...baseStyles, opacity: 0, transform: "rotateY(-90deg)" }
        case "bounce":
          return { ...baseStyles, opacity: 0, transform: "scale(0.3)" }
        default:
          return { ...baseStyles, opacity: 0 }
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: "translateY(0) translateX(0) scale(1) rotate(0deg) rotateY(0deg)",
      filter: "blur(0px)",
    }
  }, [animation, shouldAnimate, delay, duration])

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn("gpu-accelerated", className)}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  )
}

// Batch animation component for multiple elements
interface BatchAnimateProps {
  children: ReactNode[]
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale"
  className?: string
  staggerDelay?: number
  baseDelay?: number
  duration?: number
  once?: boolean
  threshold?: number
}

export function BatchAnimate({
  children,
  animation = "fade",
  className = "",
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  once = true,
  threshold = 0.1,
}: BatchAnimateProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin: "0px 0px -50px 0px",
  })

  const shouldAnimate = once ? hasIntersected : true

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <OptimizedAnimate
          key={index}
          animation={animation}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          once={once}
          threshold={0} // Already handled by parent
        >
          {child}
        </OptimizedAnimate>
      ))}
    </div>
  )
}

// Reduced motion support
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return prefersReducedMotion
}
