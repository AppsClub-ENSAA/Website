"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Lightbulb, Calendar } from "lucide-react"

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Hero Content */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Learn. Code. Connect.
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 650+ IT students shaping Morocco's digital future at ENSA Agadir
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
            <Button
              size="lg"
              onClick={() => scrollToSection("#connect")}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Join Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#about")}
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              Discover More
            </Button>
          </div>
        </div>

        {/* Feature Cards - Horizontal Layout - Hidden on small screens */}
        <div className="hidden md:grid md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              <span className="text-sm sm:text-base font-semibold text-white">Active Community</span>
            </div>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              <span className="text-sm sm:text-base font-semibold text-white">Real Projects</span>
            </div>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 px-3 py-2 sm:px-4 sm:py-3 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
              <span className="text-sm sm:text-base font-semibold text-white">Weekly Training</span>
            </div>
          </Card>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
