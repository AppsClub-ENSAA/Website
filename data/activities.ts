export interface Activity {
  id: number | string;
  title: string;
  slug: string;
  category: "event" | "talk" | "workshop" | "training";
  description: string;
  shortDescription?: string;
  videoId?: string;
  coverImage?: string;
  location?: string;
  date?: string;
  highlights?: string[];
  showOnHomepage?: boolean;
}

export const activities: Activity[] = [
  // --- Event Recaps ---
  {
    id: 1,
    title: "Clash Of Code",
    slug: "clash-of-code",
    category: "event",
    description: `Clash of Code is an AppsClub ENSAA competitive programming event where participants put their problem-solving and coding skills to the test through timed programming challenges.

The playlist features the final rounds of the Ramadan Clash of Code 2.0 and previous Clash of Code competitions, showcasing the competitive atmosphere, challenges, and final stages of the event.`,
    videoId: "5Kc2VjBRAaI",
    coverImage:
      "https://res.cloudinary.com/ex7m5gwi/image/upload/v1789468113/appsclub/nkcflgopbz07ntgk76mg.jpg",
    location: "Online",
    date: "Mar 14, 2026",
    highlights: [
      "Competitive programming challenges",
      "Timed problem solving",
      "Algorithmic thinking",
      "Coding under pressure",
      "Clash of Code competition format",
      "Ramadan Clash of Code 2.0",
      "Final rounds and grand finale",
      "Competitive programming practice",
      "AppsClub ENSAA community",
    ],
    showOnHomepage: true,
  },
  {
    id: 2,
    title: "Biweekly Contest 25/26",
    slug: "biweekly-contest-25-26",
    category: "event",
    description: `Biweekly Contest 25/26 is a competitive programming contest series organized by the AppsClub ENSAA Competitive Programming Cell.

The initiative combines in-person programming contests with preparation sessions and detailed solution corrections. Participants challenge themselves with algorithmic problems, practice under contest conditions, and learn from post-contest walkthroughs covering topics such as Big O, Arrays, Hashing, Stacks, Two Pointers, Sliding Window, and Binary Search.

Open to beginners, intermediate, and advanced programmers, the series aims to strengthen problem-solving skills, encourage competitive programming, and prepare participants for upcoming national competitions.`,
    videoId: "7MjShjzw_tU",
    coverImage:
      "https://res.cloudinary.com/ex7m5gwi/image/upload/v1789468430/appsclub/ktjq3jmsg5y9t6ypdc9q.jpg",
    location: "Code212 UIZ Center",
    date: "25/26",
    highlights: [
      "In-person competitive programming contests",
      "Biweekly contest format",
      "Pre-contest bootcamp sessions",
      "Algorithmic problem solving",
      "Big O and complexity analysis",
      "Arrays and Hashing",
      "Stacks",
      "Two Pointers",
      "Sliding Window",
      "Binary Search",
      "Detailed post-contest corrections",
      "Practice under real contest conditions",
      "Preparation for national competitions",
      "Open to beginner, intermediate, and advanced programmers",
      "Partnership with Code212 UIZ",
    ],
    showOnHomepage: true,
  },
  {
    id: 3,
    title: "1337 Benguerir Visit",
    slug: "1337-benguerir-visit",
    category: "event",
    description: `A visit to 1337-UM6P Benguerir, giving AppsClub members the opportunity to discover an innovative learning environment and connect with the local tech community.

The visit included inspiring tech talks, CTF challenges, CodinGame activities, and memorable moments of collaboration and discovery.`,
    videoId: "1mneoFWO65c",
    location: "UM6P Benguerir",
    date: "February 2025",
    highlights: [
      "Visit to 1337-UM6P Benguerir",
      "Innovative learning environment",
      "Tech talks",
      "CTF challenges",
      "CodinGame",
      "Networking and community",
      "Technology and innovation",
    ],
    showOnHomepage: true,
  },
  {
    id: 4,
    title: "INFO DAYS 2025",
    slug: "info-days-2025",
    category: "event",
    description: `INFO DAYS 2025 was a two-day event organized at ENSA Agadir, bringing together inspiring technology conferences and competitive programming activities.

The event provided students with opportunities to discover new ideas, learn from speakers, challenge themselves through programming competitions, and connect with the AppsClub community.`,
    videoId: "XTNlFUSKjc0",
    location: "ENSA Agadir",
    date: "April 2025",
    highlights: [
      "Two-day event",
      "Technology conferences",
      "Competitive programming challenges",
      "Student learning and discovery",
      "Networking",
      "AppsClub community",
    ],
    showOnHomepage: true,
  },

  // --- Past Talks ---
  {
    id: 5,
    title: "Software Engineering: From ENSA to the Job Market",
    slug: "software-engineering-from-ensa-to-the-job-market",
    category: "talk",
    description: `An interactive live talk featuring ENSA Agadir alumni sharing their experiences and practical advice about starting a career in software engineering.

The discussion focused on the transition from engineering school to the professional world, covering the Moroccan job market, internships and PFE opportunities, technical skills, recruitment processes, LinkedIn, CV preparation, networking, and building a strong professional profile.

The speakers also shared practical advice on approaching companies, contacting recruiters, presenting personal projects, staying flexible when choosing a career path, and continuing to develop skills beyond university.`,
    videoId: "Hvt6CbUrCiU",
    coverImage:
      "https://res.cloudinary.com/ex7m5gwi/image/upload/v1789465514/appsclub/i4vcw4urgoogtbafiirk.jpg",
    location: "Youtube",
    date: "Oct 17, 2025",
    highlights: [
      "Understanding the software engineering job market",
      "How to prepare for internships and PFE opportunities",
      "Building a strong and targeted CV",
      "Optimizing your LinkedIn profile",
      "Using LinkedIn to connect with recruiters",
      "How to approach companies directly for opportunities",
      "Presenting personal projects effectively",
      "Preparing for technical interviews and coding challenges",
      "Developing problem-solving and adaptability skills",
      "Choosing a career path while staying flexible",
    ],
    showOnHomepage: true,
  },
  {
    id: 6,
    title: "Software Engineering Career Talk — Skills, Opportunities & Recruitment",
    slug: "software-engineering-career-talk-skills-opportunities-recruitment",
    category: "talk",
    description: `An interactive career talk bringing together ENSA Agadir alumni to share their experiences, advice, and insights on building a career in software engineering.

The session explored the realities of the software development market in Morocco, the technologies and skills companies look for, and how students can prepare themselves for internships and future employment.

The discussion also covered LinkedIn optimization, certifications, personal projects, technical interviews, competitive programming, cybersecurity opportunities, and the growing role of Artificial Intelligence in software development.

Through real experiences and practical advice, the session aimed to help ENSA students better understand the professional landscape and identify concrete steps they can take to improve their technical and professional profiles.`,
    videoId: "mMPJcaluIrA",
    coverImage:
      "https://res.cloudinary.com/ex7m5gwi/image/upload/v1789465749/appsclub/izebn2vcoeymwqdu1zki.jpg",
    location: "Youtube",
    date: "Nov 28, 2025",
    highlights: [
      "Understanding the software engineering job market in Morocco",
      "Technologies and skills currently valued by companies",
      "How to prepare for internships and PFE opportunities",
      "Building a strong LinkedIn profile",
      "Using LinkedIn to attract recruiters",
      "The importance of certifications and relevant experience",
      "Building personal projects for your CV",
      "Preparing for technical interviews",
      "Problem-solving and competitive programming",
      "Exploring cybersecurity career opportunities",
      "How Artificial Intelligence is changing software development",
      "Choosing a specialization while maintaining a strong technical foundation",
      "Practical advice from ENSA Agadir alumni",
    ],
    showOnHomepage: true,
  },
  {
    id: 7,
    title: "From Agadir to Silicon Valley — A Software Engineering Journey",
    slug: "from-agadir-to-silicon-valley-a-software-engineering-journey",
    category: "talk",
    description: `A live conversation with Taha, an ENSA Agadir alumnus and software engineer, sharing his personal journey from studying in Agadir to pursuing opportunities and building his career in the United States.

The discussion explores his academic and professional journey, his transition into software engineering, the importance of self-learning, and the challenges of building a career beyond the traditional university path.

Taha also shares his experience with technical communities, collaborative projects, competitive programming, public speaking, networking, research, and entrepreneurship. The session highlights how students can build their skills and professional presence by actively participating in communities, creating projects, learning from others, and challenging themselves outside the classroom.`,
    videoId: "mWsFd1hHe4o",
    coverImage:
      "https://res.cloudinary.com/ex7m5gwi/image/upload/v1789466027/appsclub/f9enpwpy32nw2vxd1xcq.jpg",
    location: "Youtube",
    date: "Oct 31, 2025",
    highlights: [
      "From ENSA Agadir to the United States",
      "Building a career in software engineering",
      "The importance of self-learning beyond university",
      "Choosing and exploring different technical fields",
      "Building a strong portfolio through real projects",
      "Learning through technical communities",
      "Collaborating on projects and competitions",
      "Developing public speaking and communication skills",
      "Networking and building a professional brand",
      "Getting involved in research and technical challenges",
      "Taking risks and challenging yourself",
      "From technical skills to entrepreneurship",
      "Lessons from a real software engineering journey",
    ],
    showOnHomepage: true,
  },
];

export function getEvents() {
  return activities.filter((a) => a.category === "event" && a.showOnHomepage !== false);
}

export function getTalks() {
  return activities.filter((a) => a.category === "talk" && a.showOnHomepage !== false);
}

export function getActivityBySlug(slug: string) {
  return activities.find((a) => a.slug === slug);
}
