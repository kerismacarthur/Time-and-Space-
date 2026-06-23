const links = [
  { label: 'Home', href: '#home', mobileHidden: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
]

export default function Navbar() {
  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-lg text-stone-900 tracking-wide focus-visible:outline-2 shrink-0"
          aria-label="Time and Space Counselling — go to homepage"
        >
          Time & Space
        </a>

        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-5 lg:gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs sm:text-sm text-stone-600 hover:text-stone-900 transition-colors underline-offset-4 hover:underline${link.mobileHidden ? ' hidden sm:inline' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@timeandspace-counselling.com.au"
            className="text-xs sm:text-sm bg-[#4a6e4c] text-white px-3 sm:px-5 py-2 rounded-full hover:bg-[#3d5e3f] transition-colors whitespace-nowrap font-medium shrink-0"
            aria-label="Contact us via email"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  )
}
