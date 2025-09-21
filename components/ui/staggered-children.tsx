"use client"

import { useRef, useEffect, useState, type ReactNode, Children, cloneElement, isValidElement } from "react"
import { cn } from "@/lib/utils"

type StaggeredChildrenProps = {
  children: ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale"
  className?: string
  childClassName?: string
  threshold?: number
  staggerDelay?: number
  baseDelay?: number
  once?: boolean
  rootMargin?: string
}

export function StaggeredChildren({
  children,
  animation = "fade",
  className = "",
  childClassName = "",
  threshold = 0.1,
  staggerDelay = 100,
  baseDelay = 0,
  once = true,
  rootMargin = "0px",
}: StaggeredChildrenProps) {
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
    switch (animation) {
      case "fade":
        return "animate-on-scroll"
      case "slide-up":
        return "animate-on-scroll animate-slide-up"
      case "slide-down":
        return "animate-on-scroll animate-slide-down"
      case "slide-left":
        return "animate-on-scroll animate-slide-left"
      case "slide-right":
        return "animate-on-scroll animate-slide-right"
      case "scale":
        return "animate-on-scroll animate-scale"
      default:
        return "animate-on-scroll"
    }
  }

  const childrenArray = Children.toArray(children)
  const staggeredChildren = childrenArray.map((child, index) => {
    if (isValidElement(child)) {
      const delay = baseDelay + index * staggerDelay
      const delayClass = `animate-delay-${delay}`

      return cloneElement(child, {
        className: cn(
          child.props.className,
          getAnimationClass(),
          isVisible ? "visible" : "",
          childClassName,
          // Use inline style for precise delay timing
          // since we can't dynamically generate class names
        ),
        style: {
          ...child.props.style,
          transitionDelay: `${delay}ms`,
        },
      })
    }
    return child
  })

  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
    </div>
  )
}
