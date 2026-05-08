import { Sprout, Leaf } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
          About us
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-10 sm:mb-16 max-w-xl leading-snug">
          Two counsellors. One shared belief.
        </h2>

        {/* Our story */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
          <div>
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-4">
              Time and Space was born from a shared conviction: that everyone deserves
              access to quality counselling delivered with warmth, skill, and genuine care.
            </p>
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed">
              Keris and Pia met through their work in the counselling field and discovered
              they shared not just a professional philosophy, but a vision for the kind of
              practice they wanted to build — one that felt personal, unhurried, and
              deeply human.
            </p>
          </div>
          <div className="bg-[#f7f4f0] rounded-2xl p-6 sm:p-8">
            <p className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed italic">
              "Our role is not to fix you — it's to walk alongside you as you find
              your own way."
            </p>
          </div>
        </div>

        {/* Team — stacked on mobile, side by side on md+ */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          {/* Keris */}
          <div className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-5 sm:mb-6">
              <Sprout className="text-[#7c9a7e]" size={22} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1">Keris</h3>
            <p className="text-[#7c9a7e] text-xs sm:text-sm mb-3 sm:mb-4">
              Counsellor & Psychotherapist, M.Couns
            </p>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
              Keris brings specialist experience working with drug and alcohol use through
              her work at Lives Lived Well, where she has supported individuals through
              some of the most challenging moments of their lives.
            </p>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              In private practice, Keris works with adults across a range of concerns —
              including substance use, anxiety, depression, relationship difficulties, and
              life transitions.
            </p>
          </div>

          {/* Pia */}
          <div className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-5 sm:mb-6">
              <Leaf className="text-[#7c9a7e]" size={22} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1">Pia</h3>
            <p className="text-[#7c9a7e] text-xs sm:text-sm mb-3 sm:mb-4">
              Counsellor & Psychotherapist
            </p>
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
              Pia's bio coming soon. We're putting the finishing touches on her profile.
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className="mt-12 sm:mt-16 border-t border-stone-100 pt-10 sm:pt-16">
          <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-4 sm:mb-6">Our approach</h3>
          <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-2xl">
            We take an integrative approach to therapy — drawing on person-centred therapy,
            trauma-informed practice, cognitive-behavioural approaches, and mindfulness to
            tailor our work to each client's unique needs, goals, and history. Meaningful
            change happens within a safe, trusting relationship.
          </p>
        </div>
      </div>
    </section>
  )
}
