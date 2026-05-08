export default function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-400 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="font-serif text-white text-lg mb-2">Time & Space</p>
          <p className="text-sm leading-relaxed max-w-xs">
            Counselling & Psychotherapy.<br />
            In-person and telehealth, Australia-wide.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#fees" className="hover:text-white transition-colors">Fees</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <div className="text-sm">
          <p className="mb-2">
            <a
              href="mailto:hello@timeandspacecounselling.com.au"
              className="hover:text-white transition-colors"
            >
              hello@timeandspacecounselling.com.au
            </a>
          </p>
          <p className="text-xs text-stone-500 mt-6">
            © {new Date().getFullYear()} Time and Space Counselling & Psychotherapy
          </p>
        </div>
      </div>
    </footer>
  )
}
