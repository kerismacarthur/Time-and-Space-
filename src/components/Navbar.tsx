import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-base sm:text-lg text-stone-800 tracking-wide">
          Time & Space
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 hover:text-stone-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm bg-[#7c9a7e] text-white px-4 py-2 rounded-full hover:bg-[#5a7a5c] transition-colors whitespace-nowrap"
          >
            Book a free consult
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-stone-600 p-2 -mr-2 touch-manipulation"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-4 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-stone-600 hover:text-stone-900 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#7c9a7e] text-white px-6 py-3 rounded-full text-center hover:bg-[#5a7a5c] transition-colors mt-2 text-base"
          >
            Book a free consult
          </a>
        </div>
      )}
    </header>
  )
}
