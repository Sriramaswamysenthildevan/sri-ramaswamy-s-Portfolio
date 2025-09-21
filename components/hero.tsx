"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import DeskScene from "@/components/desk-scene"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = clientX / window.innerWidth
      const y = clientY / window.innerHeight

      container.style.setProperty("--x", `${x}`)
      container.style.setProperty("--y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), rgba(147, 51, 234, 0.15), transparent 40%)",
      }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-5xl absolute">
          <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <DeskScene />
            </Float>
            <Environment preset="night" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </div>
      </div>

      <div className="z-10 px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-400 via-fuchsia-500 to-indigo-400">
            Sriramaswamy
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl text-gray-300 font-light"
          >
            Web Developer
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 flex flex-col items-center"
        >
          <button className="group relative px-8 py-3 overflow-hidden rounded-full bg-black border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            <div className="absolute inset-0 w-3 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-white group-hover:text-white">View Projects</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
