"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null,
      )
    }

    const mouseEnter = () => setIsVisible(true)
    const mouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseenter", mouseEnter)
    document.addEventListener("mouseleave", mouseLeave)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseenter", mouseEnter)
      document.removeEventListener("mouseleave", mouseLeave)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, [role="button"], [class*="cursor-pointer"] {
          cursor: none !important;
        }
      `}</style>

      {isVisible && (
        <>
          {/* Outer cursor */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[100]"
            animate={{
              x: position.x - 16,
              y: position.y - 16,
              scale: isPointer ? 1.5 : 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              mass: 0.5,
            }}
            style={{
              border: "1.5px solid rgba(147, 51, 234, 0.5)",
              borderRadius: "50%",
            }}
          />

          {/* Inner dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[100]"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              opacity: 0.8,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
              mass: 0.2,
            }}
          />

          {/* Crosshair lines */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-[1px] bg-purple-500/50 pointer-events-none z-[100]"
            animate={{
              x: position.x - 16,
              y: position.y,
              opacity: isPointer ? 0.8 : 0.4,
              scale: isPointer ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />

          <motion.div
            className="fixed top-0 left-0 w-[1px] h-8 bg-purple-500/50 pointer-events-none z-[100]"
            animate={{
              x: position.x,
              y: position.y - 16,
              opacity: isPointer ? 0.8 : 0.4,
              scale: isPointer ? 1.2 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          />
        </>
      )}
    </>
  )
}
