import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to handle scroll animations
export function setupScrollAnimations() {
  if (typeof window !== "undefined") {
    const animateElements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          } else {
            // Optional: remove the class when element is out of view
            // entry.target.classList.remove("visible")
          }
        })
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }
}
