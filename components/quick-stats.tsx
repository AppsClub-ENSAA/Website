"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  number: string
  label: string
  delay?: number
}

function StatCard({ number, label, delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const finalNumber = Number.parseInt(number.replace(/\D/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            let start = 0
            const duration = 2000
            const increment = finalNumber / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= finalNumber) {
                setCount(finalNumber)
                clearInterval(timer)
              } else {
                setCount(Math.floor(start))
              }
            }, 16)

            setHasAnimated(true)
          }, delay)
        }
      },
      { threshold: 0.5 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [finalNumber, delay, hasAnimated])

  const formatNumber = (num: number) => {
    if (number.includes("+")) return `${num}+`
    return num.toString()
  }

  return (
    <Card
      ref={cardRef}
      className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <CardContent className="p-6 text-center">
        <div className="text-4xl font-bold text-purple-400 mb-2">{formatNumber(count)}</div>
        <div className="text-gray-300 font-medium">{label}</div>
      </CardContent>
    </Card>
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
