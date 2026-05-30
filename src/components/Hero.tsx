import { Leaf } from 'lucide-react'

export default function Hero({ onBookNow }: { onBookNow: () => void }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center bg-[#f7f4f0] pt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 w-full">
        {/* Decorative label — not a heading, hidden from screen readers */}
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6" aria-hidden="true">
          Counselling & Psychotherapy
        </p>
        <h1 id="hero-heading" className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-stone-900 leading-tight mb-8 sm:mb-10 whitespace-nowrap">
          Need a hand finding your way?
        </h1>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p className="text-stone-700 text-lg leading-relaxed mb-4">
              Sometimes life's twists and turns take you completely by surprise. In other moments, we find ourselves so familiar with our stories, we're exhausted and desperately needing to make sense of it all.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed mb-4">
              Or perhaps fear of the future is pulling you away from the present. Maybe it's all of the above — quietly wearing on your sense of self and impacting your connections with the people around you.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed mb-6 sm:mb-8">
              If you're curious about what working with us looks like, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onBookNow}
                className="bg-[#4a6e4c] text-white px-8 py-4 rounded-full text-center hover:bg-[#3d5e3f] transition-colors text-base font-semibold"
                aria-label="Open booking form — free 15 minute consultation"
              >
                Book a free 15-min consult
              </button>
              <a
                href="#about"
                className="border-2 border-stone-400 text-stone-700 px-8 py-4 rounded-full text-center hover:border-stone-600 hover:text-stone-900 transition-colors text-base font-medium"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Decorative card — hidden from screen readers */}
          <div className="hidden md:block" aria-hidden="true">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-stone-200">
              <blockquote className="font-serif text-lg lg:text-xl text-stone-800 leading-relaxed italic mb-1">
                "We prioritise collaboration and curiosity and believe that meaningful change, whether in outlook, understanding, or circumstance, happens when people feel safe and supported."
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-[#4a6e4c]" />
                  <span className="text-sm text-stone-600">Keris & Pia</span>
                </div>
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center">
                  <Leaf className="text-[#4a6e4c]" size={26} />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only quote */}
          <div className="md:hidden bg-white rounded-2xl p-6 border border-stone-200" aria-hidden="true">
            <p className="font-serif text-base text-stone-700 leading-relaxed italic">
              "We're here to offer the time and space you need."
            </p>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-6 h-px bg-[#4a6e4c]" />
              <span className="text-xs text-stone-600">Keris & Pia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
