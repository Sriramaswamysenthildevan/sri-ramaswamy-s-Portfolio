"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimateOnScrollProps = {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "rotate" | "blur" | "flip"
  className?: string
  threshold?: number
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 700 | 1000
  once?: boolean
  rootMargin?: string
  duration?: "fast" | "normal" | "slow"
}

export function AnimateOnScroll({
  children,
  animation = "fade",
  className = "",
  threshold = 0.1,
  delay = 0,
  once = true,
  rootMargin = "0px 0px -50px 0px",
  duration = "normal",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once, rootMargin])

  const getAnimationClass = () => {
    const baseClass = "animate-on-scroll gpu-accelerated"
    switch (animation) {
      case "fade":
        return baseClass
      case "slide-up":
        return `${baseClass} animate-slide-up`
      case "slide-down":
        return `${baseClass} animate-slide-down`
      case "slide-left":
        return `${baseClass} animate-slide-left`
      case "slide-right":
        return `${baseClass} animate-slide-right`
      case "scale":
        return `${baseClass} animate-scale`
      case "rotate":
        return `${baseClass} animate-rotate`
      case "blur":
        return `${baseClass} animate-blur`
      case "flip":
        return `${baseClass} animate-flip`
      default:
        return baseClass
    }
  }

  const getDelayClass = () => {
    if (delay === 0) return ""
    return `animate-delay-${delay}`
  }

  const getDurationClass = () => {
    switch (duration) {
      case "fast":
        return "duration-300"
      case "slow":
        return "duration-800"
      default:
        return "duration-600"
    }
  }

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), getDelayClass(), getDurationClass(), isVisible ? "visible" : "", className)}
    >
      {children}
    </div>
  )
}
