"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import type { Group, Mesh } from "three"

export default function DeskScene() {
  const groupRef = useRef<Group>(null)
  const monitorRef = useRef<Mesh>(null)
  const screenRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }

    if (screenRef.current) {
      // Glow effect for screen
      screenRef.current.material.emissive.r = 0.1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05
      screenRef.current.material.emissive.b = 0.2 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0.6, 0.6, 0.6]}>
      {/* Desk */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[4, 0.1, 2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Monitor Stand */}
      <mesh position={[0, -0.5, -0.5]} castShadow>
        <boxGeometry args={[0.5, 1, 0.5]} />
        <meshStandardMaterial color="#0f0f0f" />
      </mesh>

      {/* Monitor */}
      <mesh ref={monitorRef} position={[0, 0.2, -0.6]} castShadow>
        <boxGeometry args={[3, 1.7, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.2, -0.55]} castShadow>
        <boxGeometry args={[2.8, 1.5, 0.05]} />
        <meshStandardMaterial color="#0c0c1d" emissive="#3b1f75" emissiveIntensity={0.5} />
      </mesh>

      {/* Code text on screen */}
      <Text position={[0, 0.2, -0.5]} fontSize={0.1} color="#8a63d2" anchorX="center" anchorY="middle" maxWidth={2.5}>
        {`function AI() {\n  const ml = new MachineLearning();\n  return ml.predict();\n}`}
      </Text>

      {/* Keyboard */}
      <mesh position={[0, -0.95, 0.3]} castShadow>
        <boxGeometry args={[2, 0.1, 0.8]} />
        <meshStandardMaterial color="#131313" />
      </mesh>

      {/* Mouse */}
      <mesh position={[1.2, -0.95, 0.3]} castShadow>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#131313" />
      </mesh>

      {/* Floating holographic UI elements */}
      <group position={[1.5, 0.5, 0]} rotation={[0, -Math.PI / 6, 0]}>
        <mesh castShadow>
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial color="#0c0c1d" emissive="#4b275b" transparent opacity={0.7} />
        </mesh>
        <Text position={[0, 0, 0.1]} fontSize={0.05} color="#d462eb" anchorX="center" anchorY="middle" maxWidth={0.7}>
          {`{AI: true,\nML: enabled,\nfrontend: "react"}`}
        </Text>
      </group>

      <group position={[-1.5, 0.7, 0]} rotation={[0, Math.PI / 6, 0]}>
        <mesh castShadow>
          <planeGeometry args={[0.8, 0.5]} />
          <meshStandardMaterial color="#0c0c1d" emissive="#2b4975" transparent opacity={0.7} />
        </mesh>
        <Text position={[0, 0, 0.1]} fontSize={0.06} color="#62b3eb" anchorX="center" anchorY="middle" maxWidth={0.7}>
          {"<Futuristic UI />"}
        </Text>
      </group>
    </group>
  )
}
