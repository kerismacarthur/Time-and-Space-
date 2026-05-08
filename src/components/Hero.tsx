import { Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#f7f4f0] pt-14 sm:pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 sm:mb-6">
              Counselling & Psychotherapy
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-stone-800 leading-tight mb-4 sm:mb-6">
              Finding your way back to yourself
            </h1>
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Time and Space offers a warm, integrative approach to therapy — for
              individuals ready to explore what's getting in the way of living well.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="bg-[#7c9a7e] text-white px-6 sm:px-8 py-3.5 sm:py-3 rounded-full text-center hover:bg-[#5a7a5c] transition-colors text-sm sm:text-base font-medium"
              >
                Book a free 15-min consult
              </a>
              <a
                href="#about"
                className="border border-stone-300 text-stone-600 px-6 sm:px-8 py-3.5 sm:py-3 rounded-full text-center hover:border-stone-500 transition-colors text-sm sm:text-base"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Decorative card — hidden on mobile, visible md+ */}
          <div className="hidden md:block">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-stone-100">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-6">
                <Leaf className="text-[#7c9a7e]" size={26} />
              </div>
              <blockquote className="font-serif text-lg lg:text-xl text-stone-700 leading-relaxed mb-6">
                "Whether you're navigating addiction, working through anxiety, or
                simply feeling stuck — we're here to offer the time and space you need."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#7c9a7e]" />
                <span className="text-sm text-stone-400">Keris & Pia</span>
              </div>
            </div>
          </div>

          {/* Mobile-only quote — shown below the CTA on small screens */}
          <div className="md:hidden bg-white rounded-2xl p-6 border border-stone-100">
            <p className="font-serif text-base text-stone-600 leading-relaxed italic">
              "We're here to offer the time and space you need."
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-px bg-[#7c9a7e]" />
              <span className="text-xs text-stone-400">Keris & Pia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
