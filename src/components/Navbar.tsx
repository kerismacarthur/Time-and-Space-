import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-serif text-lg text-stone-900 tracking-wide focus-visible:outline-2"
          aria-label="Time and Space Counselling — go to homepage"
        >
          Time & Space
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-600 hover:text-stone-900 transition-colors underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hello@timeandspace-counselling.com.au"
            className="text-sm bg-[#4a6e4c] text-white px-5 py-2 rounded-full hover:bg-[#3d5e3f] transition-colors whitespace-nowrap font-medium"
            aria-label="Get in touch via email"
          >
            Contact us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-stone-700 p-2 -mr-2 rounded-lg hover:bg-stone-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden bg-white border-t border-stone-100 px-4 py-6 flex flex-col gap-5 ${open ? '' : 'hidden'}`}
      >
        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-base text-stone-700 hover:text-stone-900 transition-colors py-1 underline-offset-4 hover:underline"
          >
            {link.label}
          </a>
        ))}
        <a
          href="mailto:hello@timeandspace-counselling.com.au"
          onClick={() => setOpen(false)}
          className="bg-[#4a6e4c] text-white px-6 py-3 rounded-full text-center hover:bg-[#3d5e3f] transition-colors mt-2 text-base font-medium"
          aria-label="Get in touch via email"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
