export interface TeamMember {
  id: number | string;
  name: string;
  role: string;
  quote?: string;
  bio?: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
  isAssistant?: boolean;
  department?: string;
  bureauHistory?: Array<{
    bureau: string;
    fromYear: number;
    toYear?: number | null;
  }>;
}

export const currentTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Hiba Ait Belmoumene",
    role: "President",
    quote: "Leading with purpose, innovation, and passion.",
    image: "/images/team/hiba-ait-belmoumene.jpg",
    linkedin: "https://www.linkedin.com/in/hiba-a-0974032a1/",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2025, toYear: null },
      { bureau: "Technical Lead", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 2,
    name: "Zainab El-Haissouni",
    role: "Vice President",
    quote: "Together, we turn ideas into action.",
    image: "/images/team/zainab-el-haissouni.png",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 3,
    name: "Younes Ouzbid",
    role: "Treasurer",
    quote: "Behind every great initiative is strategic planning and execution.",
    image: "/images/team/younes-ouzbid.jpg",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 4,
    name: "Chaimae Fekhar",
    role: "Secretary",
    quote: "Alone we dream, together we achieve.",
    image: "/images/team/chaimae-fekhar.jpg",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 5,
    name: "Soufiane El Barji",
    role: "Tech Lead",
    quote: "Innovating solutions, one line of code at a time.",
    image: "/images/team/soufiane-el-barji.jpg",
    bureauHistory: [
      { bureau: "Technical Cell", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 6,
    name: "Othmane Elarroussi",
    role: "Training Officer",
    quote: "The more you know, the more you realize you don't know.",
    image: "/images/team/othmane-elarroussi.jpg",
    linkedin: "https://www.linkedin.com/in/othmane-elarroussi",
    bureauHistory: [
      { bureau: "Training Cell", fromYear: 2025, toYear: null },
      { bureau: "Competitive Programming Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 7,
    name: "Achraf Boulhem",
    role: "CP Cell Lead",
    quote: "Code. Compete. Improve.",
    image: "/images/team/achraf-boulhem.jpg",
    linkedin: "https://www.linkedin.com/in/achraf-boulhem-b72286294",
    bureauHistory: [
      { bureau: "Competitive Programming Cell", fromYear: 2025, toYear: null },
      { bureau: "Competitive Programming Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 8,
    name: "Aymane Galibou",
    role: "Data Cell Lead",
    quote: "Data is our soldier. Intelligence is our victory.",
    image: "/images/team/aymane-galibou.png",
    bureauHistory: [
      { bureau: "Data Cell", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 9,
    name: "Ilyass Igouia",
    role: "Cybersecurity Cell Lead",
    quote: "Building, guiding, securing. That's the mission.",
    image: "/images/team/ilyass-igouia.jpg",
    bureauHistory: [
      { bureau: "Cybersecurity Cell", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 10,
    name: "Mohamed Amine Bougraou",
    role: "Logistics Officer",
    quote: "Behind the scenes, ahead of the need.",
    image: "/images/team/mohamed-amine-bougraou.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-amine-bougraou-38b792335",
    bureauHistory: [
      { bureau: "Logistics", fromYear: 2025, toYear: null },
      { bureau: "Design Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 11,
    name: "Hakim Echahbi",
    role: "Design Leader",
    quote: "Less noise. More impact.",
    image: "/images/team/hakim-echahbi.jpg",
    bureauHistory: [
      { bureau: "Design Cell", fromYear: 2025, toYear: null }
    ]
  },
  {
    id: 12,
    name: "Mustapha Mouchtarik",
    role: "Assistant Member",
    quote: "Learn, Share, Code together!",
    image: "/images/team/mustapha-mouchtarik.jpg",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Development Cell", fromYear: 2025, toYear: null }
    ]
  }
];

export const pastTeamMembers: TeamMember[] = [
  {
    id: 101,
    name: "Youssef Taguejgalet",
    role: "President",
    quote: "Leading with purpose, not pressure.",
    linkedin: "https://www.linkedin.com/in/youssef-tag/",
    image: "/images/team/youssef-taguejgalet.png",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 102,
    name: "Nassima Charite",
    role: "Vice President",
    quote: "Together, we turn ideas into action.",
    linkedin: "https://www.linkedin.com/in/nassima-charite-387319260/",
    image: "/images/team/nassima-charite.png",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 103,
    name: "Hajar Baais",
    role: "Secretary",
    quote: "Alone we dream, together we achieve.",
    linkedin: "https://www.linkedin.com/in/hajar-baais-b91450321/",
    image: "/images/team/hajar-baais.png",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 104,
    name: "Reda Erraoui",
    role: "Treasurer",
    quote: "Behind every successful project is a team and a balanced budget.",
    linkedin: "https://www.linkedin.com/in/reda-erraoui-79a2a6130/",
    image: "/images/team/reda-erraoui.png",
    bureauHistory: [
      { bureau: "Executive Bureau", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 105,
    name: "Lahoussine El Hossni",
    role: "Logistics Officer",
    quote: "Behind the scenes, ahead of the need.",
    linkedin: "https://www.linkedin.com/in/lahoussine-el-hossni/",
    image: "/images/team/lahoussine-el-hossni.png",
    bureauHistory: [
      { bureau: "Logistics", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 106,
    name: "Houcine Gahboub",
    role: "Training Officer",
    quote: "The more you know, the more you realize you don't know.",
    linkedin: "https://www.linkedin.com/in/houcine-gahboub-32955b32b",
    image: "/images/team/houcine-gahboub.png",
    bureauHistory: [
      { bureau: "Training Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 107,
    name: "Hajar Azaou",
    role: "Training Assistant",
    quote: "Here to guide you as you learn and grow.",
    linkedin: "https://www.linkedin.com/in/hajar-azaou-46b53b27a/",
    image: "/images/team/hajar-azaou.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Training Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 108,
    name: "Yassine Moutaoikkil Basskar",
    role: "Data Cell Lead",
    quote: "Data is our soldier. Intelligence is our victory.",
    linkedin: "https://www.linkedin.com/in/yassine-m-basskar",
    image: "/images/team/yassine-moutaoikkil-basskar.png",
    bureauHistory: [
      { bureau: "Data Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 109,
    name: "Hafsa Mokhlis",
    role: "Cybersecurity Cell Lead",
    quote: "Building, guiding, securing. That's the mission.",
    linkedin: "https://www.linkedin.com/in/hafsa-mokhlis-a5521a210",
    image: "/images/team/hafsa-mokhlis.png",
    bureauHistory: [
      { bureau: "Cybersecurity Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 110,
    name: "Mohamed Essadik El Maghraoui",
    role: "Photographer",
    quote: "Capturing the soul of Apps Club.",
    linkedin: "https://www.linkedin.com/in/mohamed-essadik-el-maghraoui-a62607361/",
    image: "/images/team/mohamed-essadik-el-maghraoui.png",
    bureauHistory: [
      { bureau: "Media Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 111,
    name: "Abd el aziz Hatafi",
    role: "CP Cell Assistant",
    quote: "Code. Test. Optimize. Repeat.",
    linkedin: "https://www.linkedin.com/in/abd-el-aziz-hatafi-8539a7312",
    image: "/images/team/abd-el-aziz-hatafi.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Competitive Programming Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 112,
    name: "Hiba Loughzal",
    role: "Data Cell Assistant",
    quote: "Empowering insights, leading with data.",
    linkedin: "https://www.linkedin.com/in/hiba-loughzal-3b5414252",
    image: "/images/team/hiba-loughzal.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Data Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 113,
    name: "Amina TOUMI",
    role: "Data Cell Assistant",
    quote: "Data is the new fuel",
    linkedin: "https://www.linkedin.com/in/amina-toumi-b12155252",
    image: "/images/team/amina-toumi.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Data Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 114,
    name: "Abdelhak Ait Kadir",
    role: "Cybersecurity Cell Assistant",
    quote: "Cybersecurity begins where distraction ends.",
    linkedin: "https://www.linkedin.com/in/ait-kadir/",
    image: "/images/team/abdelhak-ait-kadir.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Cybersecurity Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 115,
    name: "Hicham Lamine",
    role: "Preparatory Cycle Cell Assistant",
    quote: "Guiding learners through code and logic.",
    linkedin: "https://www.linkedin.com/in/hicham-lamine-aa18a722b/",
    image: "/images/team/hicham-lamine.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Preparatory Cycle Cell", fromYear: 2024, toYear: 2025 }
    ]
  },
  {
    id: 116,
    name: "Abdessalam Ait-oubanali",
    role: "Development Cell Assistant",
    quote: "Learn, Share, Code together!",
    linkedin: "https://www.linkedin.com/in/abdessalam-ait-oubanali-13134528b",
    image: "/images/team/abdessalam-ait-oubanali.png",
    isAssistant: true,
    bureauHistory: [
      { bureau: "Development Cell", fromYear: 2024, toYear: 2025 }
    ]
  }
];

export const SHOW_MEMBER_LINKEDIN = false;

export function getAllMembers(): TeamMember[] {
  return [...currentTeamMembers, ...pastTeamMembers];
}
