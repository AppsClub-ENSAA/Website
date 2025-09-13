"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  type: "star" | "dot" | "ring"
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate particles
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 80; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 2 + 0.5,
          type: ["star", "dot", "ring"][Math.floor(Math.random() * 3)] as "star" | "dot" | "ring",
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    // Animate particles
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          opacity: Math.sin(Date.now() * 0.001 * particle.speed) * 0.4 + 0.4,
        })),
      )
    }

    const interval = setInterval(animateParticles, 120)
    return () => clearInterval(interval)
  }, [])

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      opacity: particle.opacity,
      fontSize: `${particle.size}px`,
    }

    switch (particle.type) {
      case "star":
        return (
          <div key={particle.id} className="absolute text-purple-400 pointer-events-none select-none" style={baseStyle}>
            ✦
          </div>
        )
      case "dot":
        return (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-500 rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        )
      case "ring":
        return (
          <div
            key={particle.id}
            className="absolute border border-purple-400 rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity * 0.5,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Particles */}
      {particles.map(renderParticle)}

      {/* Large Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "500ms" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1000ms" }}
      />
    </div>
  )
}
