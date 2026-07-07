export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-stone-900 text-stone-300 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div>
          <p className="font-serif text-white text-lg mb-2">Time & Space</p>
          <p className="text-stone-300 text-base leading-relaxed max-w-xs">
            Counselling & Psychotherapy.<br />
            In-person and telehealth, Australia-wide.
          </p>
          <nav aria-label="Footer navigation" className="mt-6 mb-6 flex items-center gap-5 text-base">
            <a href="#home" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">Home</a>
            <a href="#about" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">About</a>
            <a href="#services" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">Services</a>
            <a href="#fees" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">Fees</a>
          </nav>
          <a
            href="mailto:hello@timeandspace-counselling.com.au"
            className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2 text-base sm:text-lg inline-block"
            aria-label="Send an email to Time and Space"
          >
            hello@timeandspace-counselling.com.au
          </a>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 border-t border-stone-700">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Time and Space Counselling & Psychotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
