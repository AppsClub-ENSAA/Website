"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import * as Icons from "lucide-react"
import { stats, Stat } from "@/data/stats"

interface StatCardProps {
  number: string
  label: string
  iconName?: string
  delay?: number
}

function StatCard({ number, label, iconName, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const finalNumber = Number.parseInt(number.replace(/\D/g, "")) || 0
  const hasPlus = number.includes("+")

  const IconComponent = iconName ? (Icons as any)[iconName] : null

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  useEffect(() => {
    if (isVisible && finalNumber > 0) {
      const duration = 2000
      const steps = 60
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
    } else if (isVisible) {
      setCount(finalNumber)
    }
  }, [isVisible, finalNumber])

  return (
    <div
      ref={ref}
      className={`animate-in fade-in slide-in-from-bottom-4 duration-700 ${isVisible ? "animate-in" : ""}`}
    >
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-lg h-40 lg:h-48 relative overflow-hidden group">
        <CardContent className="p-6 text-center h-full flex flex-col justify-center items-center gap-2 lg:gap-3 relative z-10">
          {IconComponent && (
            <div className="mb-1 bg-purple-500/10 p-3 rounded-full text-purple-400 group-hover:bg-purple-500/20 transition-colors">
              <IconComponent size={24} />
            </div>
          )}
          <div className="text-3xl lg:text-4xl font-bold text-white tabular-nums leading-none">
            {count > 0 ? count.toLocaleString() : finalNumber.toLocaleString()}{hasPlus ? "+" : ""}
          </div>
          <div className="text-gray-400 font-medium text-center text-sm lg:text-base leading-tight">
            {label}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function QuickStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Quick Stats</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that reflect our passion and commitment to tech excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              number={stat.value}
              label={stat.label}
              iconName={stat.icon}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
