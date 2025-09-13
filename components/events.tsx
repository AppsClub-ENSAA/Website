"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, MapPin, Calendar, Youtube } from "lucide-react"

export default function Events() {
  const events = [
    {
      id: 1,
      title: "1337 Benguerir Visit",
      description:
        "Throwback to our amazing visit to 1337-UM6P 🙌🔥 Inspiring moments, tech talks, CTF challenges, CodinGame and unforgettable memories!",
      videoId: "1mneoFWO65c",
      location: "UM6P Benguerir",
      date: "February 2025",
    },
    {
      id: 2,
      title: "Infodays Event",
      description:
        "✨ Highlights from the INFO DAYS 2025 📅 A two-day event filled with inspiring tech conferences 🎤 and intense competitive programming challenges 💻",
      videoId: "XTNlFUSKjc0",
      location: "ENSA Agadir",
      date: "April 2025",
    },
  ]

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const getThumbnailUrl = (videoId: string) => {
    // Try different thumbnail qualities in order of preference
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement>, videoId: string) => {
    const target = e.target as HTMLImageElement
    const currentSrc = target.src

    // Try different thumbnail qualities as fallbacks
    if (currentSrc.includes("maxresdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    } else if (currentSrc.includes("hqdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    } else if (currentSrc.includes("mqdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`
    } else {
      // Final fallback to a simple SVG
      const svg = `data:image/svg+xml;base64,${btoa(`
        <svg width="350" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#374151"/>
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="16" fill="#9CA3AF">Video: ${videoId}</text>
        </svg>
      `)}`
      target.src = svg
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Event Recaps</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Highlights from our recent events and activities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <CardHeader>
                <div className="relative group cursor-pointer" onClick={() => openVideo(event.videoId)}>
                  <img
                    src={getThumbnailUrl(event.videoId)}
                    alt={event.title}
                    className="w-full aspect-video object-cover rounded-lg"
                    onError={(e) => handleThumbnailError(e, event.videoId)}
                  />
                  {/* YouTube icon overlay - always visible */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-lg shadow-lg">
                    <Youtube className="h-4 w-4" />
                  </div>
                  {/* Play button on hover */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white mt-4">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                <p className="text-gray-300 leading-relaxed flex-grow">{event.description}</p>

                {/* Location and Date - Fixed height section */}
                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-700 mt-auto min-h-[3rem]">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
