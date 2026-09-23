"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { Search, Linkedin, Github, Instagram, Mail, X, ArrowLeft } from "lucide-react"
import { currentTeamMembers, pastTeamMembers, TeamMember, SHOW_MEMBER_LINKEDIN } from "@/data/team"
import { Card } from "@/components/ui/card"

export default function MembersListPage() {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<TeamMember | null>(null)

  const filterMembers = (membersList: TeamMember[]) => {
    const q = query.trim().toLowerCase()
    if (!q) return membersList
    return membersList.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.bureauHistory?.some((b) => b.bureau.toLowerCase().includes(q))
    )
  }

  const filteredCurrent = filterMembers(currentTeamMembers)
  const filteredPast = filterMembers(pastTeamMembers)

  const getCurrentBureau = (member: TeamMember) => {
    const history = Array.isArray(member.bureauHistory) ? member.bureauHistory : []
    const current = history.find((assignment) => !assignment.toYear)
    return current?.bureau || member.department || ""
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden pt-24">
      <AnimatedBackground />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-6">
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            All Members & Bureau History
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Honoring everyone driving AppsClub's mission forward across past and present mandates.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, role, or cell..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>

        {/* Section 1: Current Bureau (2025 - 2026) */}
        {filteredCurrent.length > 0 && (
          <div className="mb-16">
            <div className="border-b border-gray-800 pb-4 mb-8 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                2025 – 2026 Current Bureau
              </h2>
              <span className="text-sm text-purple-400 font-medium px-3 py-1 bg-purple-900/40 rounded-full">
                {filteredCurrent.length} Active Staff
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCurrent.map((member) => (
                <Card
                  key={member.id}
                  onClick={() => setSelected(member)}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer p-5 flex flex-col items-center text-center relative group"
                >
                  {SHOW_MEMBER_LINKEDIN && member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 text-blue-400 hover:text-blue-300 bg-gray-900/80 p-1.5 rounded-full"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-purple-500/40 group-hover:border-purple-400 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        const initials = member.name.split(" ").map((n) => n[0]).join("").substring(0, 2)
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="112" height="112" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#374151"/>
                            <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="28" fill="#9CA3AF">${initials}</text>
                          </svg>
                        `)}`
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 text-sm font-medium mb-2">{member.role}</p>
                  {member.quote && (
                    <p className="text-gray-400 text-xs italic line-clamp-2 mt-auto">"{member.quote}"</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Past Bureau (2024 - 2025) */}
        {filteredPast.length > 0 && (
          <div className="mb-16">
            <div className="border-b border-gray-800 pb-4 mb-8 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                2024 – 2025 Past Bureau
              </h2>
              <span className="text-sm text-blue-400 font-medium px-3 py-1 bg-blue-900/40 rounded-full">
                {filteredPast.length} Members
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredPast.map((member) => (
                <Card
                  key={member.id}
                  onClick={() => setSelected(member)}
                  className="bg-gray-800/80 border-gray-700/80 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer p-5 flex flex-col items-center text-center relative group"
                >
                  {SHOW_MEMBER_LINKEDIN && member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 text-blue-400 hover:text-blue-300 bg-gray-900/80 p-1.5 rounded-full"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-blue-500/30 group-hover:border-blue-400 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        const initials = member.name.split(" ").map((n) => n[0]).join("").substring(0, 2)
                        target.src = `data:image/svg+xml;base64,${btoa(`
                          <svg width="112" height="112" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#374151"/>
                            <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="28" fill="#9CA3AF">${initials}</text>
                          </svg>
                        `)}`
                      }}
                    />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                  {member.quote && (
                    <p className="text-gray-400 text-xs italic line-clamp-2 mt-auto">"{member.quote}"</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {filteredCurrent.length === 0 && filteredPast.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p className="text-lg">No members found matching "{query}".</p>
          </div>
        )}
      </main>

      {/* Selected Member Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center mt-2">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-purple-500/30 mb-6 shadow-lg">
                <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 text-center">{selected.name}</h3>
              <p className="text-lg text-purple-400 font-semibold mb-1 text-center">{selected.role}</p>
              {getCurrentBureau(selected) && (
                <p className="text-gray-400 text-sm mb-6">{getCurrentBureau(selected)}</p>
              )}

              {/* Social Links */}
              <div className="flex gap-4 mb-6">
                {SHOW_MEMBER_LINKEDIN && selected.linkedin && (
                  <a
                    href={selected.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white p-3 rounded-full transition-all"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700/50 text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-full transition-all"
                  >
                    <Github size={20} />
                  </a>
                )}
                {selected.instagram && (
                  <a
                    href={selected.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white p-3 rounded-full transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {selected.email && (
                  <a
                    href={`mailto:${selected.email}`}
                    className="bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white p-3 rounded-full transition-all"
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </div>

            {selected.quote && (
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-5 mb-6">
                <p className="text-gray-300 italic text-center text-lg">"{selected.quote}"</p>
              </div>
            )}

            {selected.bio && (
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">About</h4>
                <p className="text-gray-300 leading-relaxed">{selected.bio}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
