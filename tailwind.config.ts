import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Add custom durations to fix ambiguous utility classes
      duration: {
        250: "250ms",
        350: "350ms",
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
      },
      // Enhanced keyframes for more animation variants
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        rotateIn: {
          "0%": { transform: "rotate(-180deg) scale(0.8)", opacity: "0" },
          "100%": { transform: "rotate(0deg) scale(1)", opacity: "1" },
        },
        flipIn: {
          "0%": { transform: "rotateY(-90deg)", opacity: "0" },
          "100%": { transform: "rotateY(0deg)", opacity: "1" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
          "70%": { transform: "scale(0.9)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(10px)", opacity: "0" },
          "100%": { filter: "blur(0px)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        // Navbar specific animations
        navSlideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        navSlideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      // Enhanced animations
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-out": "fadeOut 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "scale-up": "scaleUp 0.6s ease-out forwards",
        "scale-down": "scaleDown 0.6s ease-out forwards",
        "rotate-in": "rotateIn 0.8s ease-out forwards",
        "flip-in": "flipIn 0.8s ease-out forwards",
        "bounce-in": "bounceIn 0.8s ease-out forwards",
        "blur-in": "blurIn 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        "nav-slide-down": "navSlideDown 0.3s ease-out forwards",
        "nav-slide-up": "navSlideUp 0.3s ease-out forwards",
      },
      // Add backdrop blur utilities
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Enhanced custom plugin for scroll-triggered animations
    plugin(({ addUtilities, addComponents }) => {
      const newUtilities = {
        // Base animation classes with performance optimizations
        ".animate-on-scroll": {
          opacity: "0",
          transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "opacity, transform",
        },
        ".animate-on-scroll.visible": {
          opacity: "1",
          willChange: "auto",
        },
        // Enhanced slide animations
        ".animate-slide-up": {
          transform: "translateY(50px)",
        },
        ".animate-slide-up.visible": {
          transform: "translateY(0)",
        },
        ".animate-slide-down": {
          transform: "translateY(-50px)",
        },
        ".animate-slide-down.visible": {
          transform: "translateY(0)",
        },
        ".animate-slide-left": {
          transform: "translateX(-50px)",
        },
        ".animate-slide-left.visible": {
          transform: "translateX(0)",
        },
        ".animate-slide-right": {
          transform: "translateX(50px)",
        },
        ".animate-slide-right.visible": {
          transform: "translateX(0)",
        },
        // New animation variants
        ".animate-scale": {
          transform: "scale(0.8)",
        },
        ".animate-scale.visible": {
          transform: "scale(1)",
        },
        ".animate-rotate": {
          transform: "rotate(-10deg) scale(0.8)",
        },
        ".animate-rotate.visible": {
          transform: "rotate(0deg) scale(1)",
        },
        ".animate-blur": {
          filter: "blur(10px)",
        },
        ".animate-blur.visible": {
          filter: "blur(0px)",
        },
        ".animate-flip": {
          transform: "rotateY(-90deg)",
        },
        ".animate-flip.visible": {
          transform: "rotateY(0deg)",
        },
        // Delay utilities
        ".animate-delay-100": {
          transitionDelay: "100ms",
        },
        ".animate-delay-200": {
          transitionDelay: "200ms",
        },
        ".animate-delay-300": {
          transitionDelay: "300ms",
        },
        ".animate-delay-400": {
          transitionDelay: "400ms",
        },
        ".animate-delay-500": {
          transitionDelay: "500ms",
        },
        ".animate-delay-700": {
          transitionDelay: "700ms",
        },
        ".animate-delay-1000": {
          transitionDelay: "1000ms",
        },
        // Performance optimizations
        ".gpu-accelerated": {
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        },
        ".smooth-scroll": {
          scrollBehavior: "smooth",
        },
      }

      const newComponents = {
        // Navbar component styles
        ".navbar-blur": {
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        },
        ".navbar-solid": {
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: "rgba(0, 0, 0, 0.95)",
          },
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    }),
  ],
} satisfies Config

export default config
