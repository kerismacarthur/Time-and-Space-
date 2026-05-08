import { Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#f7f4f0] pt-16"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#7c9a7e] text-sm font-medium tracking-widest uppercase mb-6">
            Counselling & Psychotherapy
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-stone-800 leading-tight mb-6">
            Finding your way back to yourself
          </h1>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">
            Time and Space offers a warm, integrative approach to therapy — for
            individuals ready to explore what's getting in the way of living well.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#7c9a7e] text-white px-8 py-3 rounded-full text-center hover:bg-[#5a7a5c] transition-colors"
            >
              Book a free 15-min consult
            </a>
            <a
              href="#about"
              className="border border-stone-300 text-stone-600 px-8 py-3 rounded-full text-center hover:border-stone-500 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>

        {/* Decorative card */}
        <div className="hidden md:block">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
            <div className="w-16 h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-[#7c9a7e]" size={28} />
            </div>
            <blockquote className="font-serif text-xl text-stone-700 leading-relaxed mb-6">
              "Whether you're navigating addiction, working through anxiety, or
              simply feeling stuck — we're here to offer the time and space you need."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-[#7c9a7e]" />
              <span className="text-sm text-stone-400">Keris & Pia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
