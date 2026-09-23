import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { Calendar, MapPin, ArrowLeft, Users } from "lucide-react"
import Link from "next/link"
import { activities, getActivityBySlug } from "@/data/activities"

export function generateStaticParams() {
  return activities.map((activity) => ({
    slug: activity.slug,
  }))
}

export default function ActivityPage({ params }: { params: { slug: string } }) {
  const activity = getActivityBySlug(params.slug)

  if (!activity) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden pt-24">
      <AnimatedBackground />
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <Link
          href="/activities"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Activities
        </Link>

        {activity.videoId ? (
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl bg-black border border-gray-800">
            <iframe
              src={`https://www.youtube.com/embed/${activity.videoId}?autoplay=0`}
              title={activity.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : activity.coverImage ? (
          <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-2xl">
            <img src={activity.coverImage} alt={activity.title} className="w-full h-full object-cover" />
          </div>
        ) : null}

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-purple-900/50 text-purple-300 border border-purple-500/30 rounded-full text-xs uppercase font-semibold">
            {activity.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          {activity.title}
        </h1>

        <div className="flex flex-wrap gap-6 mb-8 text-gray-300 border-b border-gray-800 pb-8 text-sm">
          {activity.date && (
            <div className="flex items-center gap-2">
              <Calendar className="text-purple-400 w-4 h-4" />
              <span>{activity.date}</span>
            </div>
          )}
          {activity.location && (
            <div className="flex items-center gap-2">
              <MapPin className="text-purple-400 w-4 h-4" />
              <span>{activity.location}</span>
            </div>
          )}
        </div>

        {activity.highlights && activity.highlights.length > 0 && (
          <div className="bg-gray-800/60 border border-purple-500/20 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Users className="text-purple-400 w-5 h-5" /> Key Highlights
            </h3>
            <ul className="space-y-2">
              {activity.highlights.map((h, i) => (
                <li key={i} className="text-gray-300 flex items-start gap-2">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-base sm:text-lg">
          <p>{activity.description}</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
