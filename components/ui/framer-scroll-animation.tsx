"use client"

import type { ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type FramerScrollAnimationProps = {
  children: ReactNode
  className?: string
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleUp" | "stagger"
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  staggerChildren?: number
}

export function FramerScrollAnimation({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  staggerChildren = 0.1,
}: FramerScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const getVariants = () => {
    switch (variant) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
      case "fadeInUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        }
      case "fadeInDown":
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        }
      case "fadeInLeft":
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        }
      case "fadeInRight":
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        }
      case "scaleUp":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } },
        }
      case "stagger":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren,
              delayChildren: delay,
            },
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
    }
  }

  const getChildVariants = () => {
    if (variant === "stagger") {
      return {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration } },
      }
    }
    return {}
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      exit="hidden"
    >
      {variant === "stagger" && Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={getChildVariants()}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
