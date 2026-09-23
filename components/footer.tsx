"use client"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Training Cells", href: "#training" },
    { name: "Past Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Partners", href: "#partnerships" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/images/apps white.png" 
                  alt="AppsClub Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AppsClub</h3>
                <p className="text-xs text-purple-400">ENSA Agadir</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering IT students at ENSA Agadir through cutting-edge training, real-world projects, and a vibrant
              community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">📧 appsclubensaa22@gmail.com</p>
              <p className="text-gray-400">📍 ENSA Agadir, Morocco</p>
              <p className="text-gray-400">🕒 Available 24/7</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm">© 2026/2027 AppsClub ENSA Agadir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
