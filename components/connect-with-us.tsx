"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, MessageCircle, Youtube, Github, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export default function ConnectWithUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Create mailto link
      const subject = encodeURIComponent(`Message from ${formData.name} - Apps Club Contact`)
      const body = encodeURIComponent(
        `Hello Apps Club Team,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
      )
      
      // Open default email client
      window.location.href = `mailto:appsclubensaa22@gmail.com?subject=${subject}&body=${body}`
      
      // Show success message (optional)
      alert("Your email client should open with the message ready to send. If it doesn't open automatically, please copy the information and send it manually to appsclubensaa22@gmail.com")
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
      }, 1000)
    } catch (error) {
      console.error("Error:", error)
      alert("There was an issue opening your email client. Please send your message directly to appsclubensaa22@gmail.com")
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/appsclub.ensaa",
      label: "Instagram",
      color: "hover:bg-pink-600 hover:border-pink-600",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/appsclub-ensaa/posts/?feedView=all",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:border-blue-600",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/212681814666",
      label: "WhatsApp",
      color: "hover:bg-green-600 hover:border-green-600",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@AppsClubENSAA",
      label: "YouTube",
      color: "hover:bg-red-600 hover:border-red-600",
    },
    {
      icon: Github,
      href: "https://github.com/AppsClub-ENSAA",
      label: "GitHub",
      color: "hover:bg-gray-600 hover:border-gray-600",
    },
    {
      icon: ExternalLink,
      href: "https://linktr.ee/appsclub",
      label: "Linktree",
      color: "hover:bg-green-500 hover:border-green-500",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Stay Connected</h2>
          <p className="text-xl text-gray-400">Available 24/7 via our platforms.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media & Contact Info */}
          <div className="space-y-8">
            {/* Social Media Links */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 bg-gray-700 border border-gray-600 text-white px-4 py-3 rounded-lg transition-all duration-300 ${social.color} hover:scale-105`}
                    >
                      <social.icon className="h-5 w-5" />
                      <span className="font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>appsclubensaa22@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>ENSA Agadir, Morocco</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>Available 24/7</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Send us a message</CardTitle>
              <p className="text-gray-400 text-sm">Fill out the form below and we'll open your email client with the message ready to send to appsclubensaa22@gmail.com</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your interests, questions, or how you'd like to get involved..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Opening Email Client..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
