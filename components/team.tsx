"use client"

import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"

interface TeamMember {
  id: number
  name: string
  role: string
  quote: string
  linkedin: string
  image: string
  isAssistant?: boolean
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Youssef Taguejgalet",
    role: "President",
    quote: "Leading with purpose, not pressure.",
    linkedin: "https://www.linkedin.com/in/youssef-tag/",
    image: "/images/team/Taguejgalet.png",
  },
  {
    id: 2,
    name: "Nassima Charite",
    role: "Vice President",
    quote: "Together, we turn ideas into action.",
    linkedin: "https://www.linkedin.com/in/nassima-charite-387319260/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BZ2%2B%2FmTLGQIeNoH%2BalXdS%2BA%3D%3D",
    image: "/images/team/Charite.png",
  },
  {
    id: 3,
    name: "Hajar Baais",
    role: "Secretary",
    quote: "Alone we dream, together we achieve.",
    linkedin: "https://www.linkedin.com/in/hajar-baais-b91450321/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BZ2%2B%2FmTLGQIeNoH%2BalXdS%2BA%3D%3D",
    image: "/images/team/Baais.png",
  },
  {
    id: 4,
    name: "Reda Erraoui",
    role: "Treasurer",
    quote: "Behind every successful project is a team and a balanced budget.",
    linkedin: "https://www.linkedin.com/in/reda-erraoui-79a2a6130/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BZ2%2B%2FmTLGQIeNoH%2BalXdS%2BA%3D%3D",
    image: "/images/team/Erraoui.png",
  },
  {
    id: 5,
    name: "Lahoussine El Hossni",
    role: "Logistics Officer",
    quote: "Behind the scenes, ahead of the need.",
    linkedin: "https://www.linkedin.com/in/lahoussine-el-hossni/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_connections%3BZ2%2B%2FmTLGQIeNoH%2BalXdS%2BA%3D%3D",
    image: "/images/team/El Hossni.png",
  },
  {
    id: 6,
    name: "Hiba Ait Belmoumene",
    role: "Technical Lead",
    quote: "Tech alone isn't enough. That's why I lead.",
    linkedin: "https://www.linkedin.com/in/hiba-ait-belmoumene-b430b6229/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people%3BCKSlg3V6SzGhlfXxWBajNw%3D%3D",
    image: "/images/team/Ait Belmoumene .png",
  },
  {
    id: 7,
    name: "Houcine Gahboub",
    role: "Training Officer",
    quote: "The more you know, the more you realize you don't know.",
    linkedin: "https://www.linkedin.com/in/houcine-gahboub-32955b32b?miniProfileUrn=urn%3Ali%3Afsd_profile%3AACoAAFMyjREBvVyMBHpPplY_RT1bT9fvUA2k1Zg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BOkmbbJBSQNOh4w0AzpH4Gw%3D%3D",
    image: "/images/team/Gahboub.png",
  },
  {
    id: 8,
    name: "Hajar Azaou",
    role: "Training Assistant",
    quote: "Here to guide you as you learn and grow.",
    linkedin: "https://www.linkedin.com/in/hajar-azaou-46b53b27a/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bovv4qgDkSc2Fxcj8wAdwCg%3D%3D",
    image: "/images/team/Azaou.png",
  },
  {
    id: 9,
    name: "Othmane Elarroussi",
    role: "CP Cell Lead",
    quote: "Code. Compete. Improve.",
    linkedin: "https://www.linkedin.com/in/othmane-elarroussi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFJzEVUB-DJU7W4rD2nKbCqlb1Gz-jLLTlg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhJq7Ej%2F1Q3ahsdIq6u0%2BjQ%3D%3D",
    image: "/images/team/Elarroussi.png",
  },
  {
    id: 10,
    name: "Yassine Moutaoikkil Basskar",
    role: "Data Cell Lead",
    quote: "Data is our soldier. Intelligence is our victory.",
    linkedin: "https://www.linkedin.com/in/yassine-m-basskar?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD6j8swB4S_kirhmu6XUWZ97bDT12djg_wc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bj4ciQ%2FesQraaJEFrCEzE2w%3D%3D",
    image: "/images/team/Moutaoikkil Basskar.png",
  },
  {
    id: 11,
    name: "Hafsa Mokhlis",
    role: "Cybersecurity Cell Lead",
    quote: "Building, guiding, securing. That's the mission.",
    linkedin: "https://www.linkedin.com/in/hafsa-mokhlis-a5521a210?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADVs8mEB-0JKKgNSUiXi_7nrHkmVFJC55zc&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BqUBDYSgdSnau9bjDaqPkbw%3D%3D",
    image: "/images/team/Mokhlis.png",
  },
  {
    id: 12,
    name: "Mohamed Amine Bougraou",
    role: "Design Officer",
    quote: "Less noise. More impact.",
    linkedin: "https://www.linkedin.com/in/mohamed-amine-bougraou-38b792335?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAFRMjJsBJ6n2rhPzVgzoIbmEaLtGC30PnU4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BTljmfhs9SheGDkP%2FSBYgTw%3D%3D",
    image: "/images/team/Bougraou.png",
  },
  {
    id: 13,
    name: "Mohamed Essadik El Maghraoui",
    role: "Photographer",
    quote: "Capturing the soul of Apps Club.",
    linkedin: "https://www.linkedin.com/in/mohamed-essadik-el-maghraoui-a62607361/",
    image: "/images/team/El maghraoui .png",
  },
  {
    id: 14,
    name: "Achraf Boulhem",
    role: "CP Cell Assistant",
    quote: "Assistant member in CP related activities",
    linkedin: "https://www.linkedin.com/in/achraf-boulhem-b72286294?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEc7TwYB9N4-K-wP6PnXfrr-beD8f_FNW8c&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3Bq4a%2BjC0ZSkCBM0kzqhGIGQ%3D%3D",
    image: "/images/team/Boulhem.png",
    isAssistant: true,
  },
  {
    id: 15,
    name: "Abd el aziz Hatafi",
    role: "CP Cell Assistant",
    quote: "Code. Test. Optimize. Repeat.",
    linkedin: "https://www.linkedin.com/in/abd-el-aziz-hatafi-8539a7312?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAE-Gaf8B_bG7Fgvq7tindzuWAxwQFNB7zjM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B%2F3F4Xj9sQcKvYKsmlkiKMg%3D%3D",
    image: "/images/team/Hatafi.png",
    isAssistant: true,
  },
  {
    id: 16,
    name: "Hiba Loughzal",
    role: "Data Cell Assistant",
    quote: "Empowering insights, leading with data.",
    linkedin: "https://www.linkedin.com/in/hiba-loughzal-3b5414252?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD5afjkBeTtqWxuXTT21fhghuiIoAxbWKFA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBYTdGYpUSxmsR%2BrPBVCwkg%3D%3D",
    image: "/images/team/Loughzal.png",
    isAssistant: true,
  },
  {
    id: 17,
    name: "Amina TOUMI",
    role: "Data Cell Assistant",
    quote: "Data is the new fuel",
    linkedin: "https://www.linkedin.com/in/amina-toumi-b12155252?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD5QaP4BJHK1Ft_YyV6EAEH5tOyDeZZgBZA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BcQRLMYeQSPui7MspHY5C2Q%3D%3D",
    image: "/images/team/TOUMI.png",
    isAssistant: true,
  },
  {
    id: 18,
    name: "Abdelhak Ait Kadir",
    role: "Cybersecurity Cell Assistant",
    quote: "Cybersecurity begins where distraction ends.",
    linkedin: "https://www.linkedin.com/in/ait-kadir/",
    image: "/images/team/Ait Kadir .png",
    isAssistant: true,
  },
  {
    id: 19,
    name: "Hicham Lamine",
    role: "Preparatory Cycle Cell Assistant",
    quote: "C instructor and teaching assistant",
    linkedin: "https://www.linkedin.com/in/hicham-lamine-aa18a722b/",
    image: "/images/team/Lamine.png",
    isAssistant: true,
  },
  {
    id: 20,
    name: "Abdessalam Ait-oubanali",
    role: "Development Cell Assistant",
    quote: "Learn, Share, Code together !",
    linkedin: "https://www.linkedin.com/in/abdessalam-ait-oubanali-13134528b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEZZ-nUB73-AS94ZmiEdZ-e57_u2ncsBHHk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BpiVutJ0IRL2Lvs35puXmpg%3D%3D",
    image: "/images/team/Ait-oubanali.png",
    isAssistant: true,
  },
]

export default function Team() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Team</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Meet the passionate individuals driving AppsClub's mission forward
          </p>
          <p className="text-sm text-gray-500">← Scroll horizontally to see all team members →</p>
        </div>

        <div className="team-scroll-container">
          <div className="flex gap-6 w-max px-2 py-2">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="team-card-portrait bg-gray-800 border-gray-700 hover:bg-gray-750 relative"
              >
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 left-3 z-10 text-blue-400 hover:text-blue-300 transition-colors duration-200 bg-gray-900/80 p-1.5 rounded-full"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <div className={member.isAssistant ? "image-container-portrait-assistant" : "image-container-portrait"}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      // Create a simple data URL with the member's initials
                      const initials = member.name.split(" ").map(n => n[0]).join("").substring(0, 2)
                      const svg = `data:image/svg+xml;base64,${btoa(`
                        <svg width="250" height="400" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#374151"/>
                          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Arial" font-size="48" fill="#9CA3AF">${initials}</text>
                        </svg>
                      `)}`
                      target.src = svg
                    }}
                  />
                </div>
                <div className="text-content-portrait">
                  <div className="member-name-portrait">{member.name}</div>
                  <div className="member-role-portrait text-purple-400">{member.role}</div>
                  <div className="member-quote-portrait">"{member.quote}"</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
