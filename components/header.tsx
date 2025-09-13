"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Training Cells", href: "#training" },
    { name: "Past Events", href: "#events" },
    { name: "Past Talks", href: "#talks" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partnerships" },
    { name: "Connect", href: "#connect" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-purple-800"
          : "bg-gray-900/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <img 
                src="/images/apps white.png" 
                alt="AppsClub Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="block">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-white smooth-transition">AppsClub</h1>
              <p className="text-xs text-purple-400 smooth-transition">ENSA Agadir</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-medium text-gray-300 hover:text-purple-400 smooth-transition text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Register Button */}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold shadow-lg hover:shadow-xl smooth-transition text-xs sm:text-sm px-3 sm:px-4"
            >
              <a href="https://forms.gle/w2npKDCXWX99kDVC6" target="_blank" rel="noopener noreferrer">
                Register
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-300 hover:text-white smooth-transition w-8 h-8 sm:w-10 sm:h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t rounded-b-lg shadow-lg backdrop-blur-md bg-gray-900/95 border-gray-700 smooth-transition">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-md text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 smooth-transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
