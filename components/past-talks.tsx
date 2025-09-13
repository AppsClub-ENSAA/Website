"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Youtube, Users } from "lucide-react"

export default function PastTalks() {
  const talks = [
    {
      id: 1,
      title: "Meet ENSA AGADIR Laureates: Success Stories and Career Advice",
      description: "Join us for an inspiring session with our 2022 laureates! Experienced individuals share their personal journeys and valuable career advice. Topics include Double Diplomation, software engineering success, and choosing the right programming path.",
      videoId: "NmKFH8sKj6I",
      highlights: ["🎓 Double Diplomation", "👨‍💻 Software Engineering Success", "🧑‍🏫 Programming Path Guidance"]
    },
    {
      id: 2,
      title: "How I Made My Journey from ENSA to Google with Karima Ichou",
      description: "An inspiring talk with Karima Ichou, ENSA laureate and Software Engineer at Google London! Learn how she made it to Google, get study excellence advice, and discover tips for landing jobs at top tech companies.",
      videoId: "5_vUFC-gMD4",
      highlights: ["🚀 ENSA to Google Journey", "💡 Study Excellence Tips", "📈 Tech Career Insights"]
    }
  ]

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  const handleThumbnailError = (e: React.SyntheticEvent<HTMLImageElement>, videoId: string) => {
    const target = e.target as HTMLImageElement
    const currentSrc = target.src

    if (currentSrc.includes("hqdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    } else if (currentSrc.includes("mqdefault")) {
      target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`
    } else {
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Past Talks</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Inspiring sessions and career guidance from industry experts and successful alumni
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {talks.map((talk) => (
            <Card
              key={talk.id}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 flex flex-col h-full"
            >
              <CardHeader>
                <div className="relative group cursor-pointer" onClick={() => openVideo(talk.videoId)}>
                  <img
                    src={getThumbnailUrl(talk.videoId)}
                    alt={talk.title}
                    className="w-full aspect-video object-cover rounded-lg"
                    onError={(e) => handleThumbnailError(e, talk.videoId)}
                  />
                  {/* YouTube icon overlay */}
                  <div className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-lg shadow-lg">
                    <Youtube className="h-4 w-4" />
                  </div>
                  {/* Play button on hover */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <Play className="h-16 w-16 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-white mt-4 leading-tight">
                  {talk.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col h-full">
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {talk.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Key Highlights:
                  </h4>
                  <ul className="space-y-1">
                    {talk.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-400">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
