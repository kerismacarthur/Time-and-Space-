export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-stone-900 text-stone-300 py-10 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-6">
          <div>
            <p className="font-serif text-white text-lg mb-2">Time & Space</p>
            <p className="text-stone-300 text-base leading-relaxed max-w-xs">
              Counselling & Psychotherapy.<br />
              In-person and telehealth, Australia-wide.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex gap-6 sm:gap-10">
            <ul className="flex flex-col gap-2 text-sm sm:text-base list-none p-0 m-0">
              <li><a href="#about" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">About</a></li>
              <li><a href="#services" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">Services</a></li>
              <li><a href="#fees" className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2">Fees</a></li>
            </ul>
            <div className="text-sm sm:text-base">
              <a
                href="mailto:hello@timeandspace-counselling.com.au"
                className="text-stone-300 hover:text-white transition-colors hover:underline underline-offset-2 break-all"
                aria-label="Send an email to Time and Space"
              >
                hello@timeandspace-counselling.com.au
              </a>
            </div>
          </nav>
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
