"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"

interface StatCardProps {
  number: string
  label: string
  delay?: number
}

function StatCard({ number, label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const finalNumber = Number.parseInt(number.replace(/\D/g, ""))
  const hasPlus = number.includes("+")

  // Intersection Observer for visibility detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true)
            setHasAnimated(true)
          }, delay)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, hasAnimated])

  // Number animation logic
  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const increment = finalNumber / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= finalNumber) {
          setCount(finalNumber)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, finalNumber])

  return (
    <div 
      ref={ref} 
      className={`animate-in fade-in slide-in-from-bottom-4 duration-700 ${isVisible ? 'animate-in' : ''}`}
    >
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-lg h-36 lg:h-40">
        <CardContent className="p-6 text-center h-full flex flex-col justify-center items-center gap-2 lg:gap-3">
          <div className="text-4xl font-bold text-purple-400 tabular-nums leading-none">
            {count.toLocaleString()}{hasPlus ? "+" : ""}
          </div>
          <div className="text-gray-300 font-medium text-center leading-tight">
            {label}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function QuickStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building Morocco's largest IT student community with measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard number="650+" label="Active Members" delay={0} />
          <StatCard number="13+" label="Staff Members" delay={200} />
          <StatCard number="10+" label="Years of Activity" delay={400} />
          <StatCard number="5+" label="Training Sessions per Week" delay={600} />
          <StatCard number="3+" label="Targeted Fields" delay={800} />
        </div>
      </div>
    </section>
  )
}
