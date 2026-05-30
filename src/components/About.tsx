import { Sprout, Leaf } from 'lucide-react'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6 max-w-xl leading-snug">
          How we work.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
          <div>
            <p className="text-stone-700 text-lg leading-relaxed mb-4">
              We take an integrative approach, drawing on person-centred, trauma-informed, cognitive-behavioural, and mindfulness-based practices to tailor our work to each person's unique needs.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              We also know that your needs and perspective may shift along the way. Building a relationship where you feel confident to ask questions from the outset and share feedback along the way, is central to how we work.
            </p>
          </div>
          <div className="bg-[#f7f4f0] rounded-2xl p-6 sm:p-8">
            <p className="text-stone-700 text-lg leading-relaxed">
              Both Pia and Keris are clinically registered counsellors with the Psychotherapy and Counselling Federation of Australia (PACFA). If you'd like to learn more about PACFA's Code of Ethics, please{' '}
              <a href="https://pacfa.org.au/portal/portal/Prac-Res/code-of-ethics.aspx?hkey=ca0802b6-6f61-4252-bed3-e3fb19bcd6bb" target="_blank" rel="noopener noreferrer" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">click here</a>.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          <article className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-5 sm:mb-6" aria-hidden="true">
              <Sprout className="text-[#4a6e4c]" size={22} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Keris</h3>
            <p className="text-[#4a6e4c] text-sm font-semibold mb-3 sm:mb-4">
              Counsellor & Psychotherapist, M.Couns
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-3 sm:mb-4">
              Keris brings specialist experience working with drug and alcohol use through
              her work at Lives Lived Well, where she has supported individuals through
              some of the most challenging moments of their lives.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              In private practice, Keris works with adults across a range of concerns —
              including substance use, anxiety, depression, relationship difficulties, and
              life transitions.
            </p>
          </article>

          <article className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-5 sm:mb-6" aria-hidden="true">
              <Leaf className="text-[#4a6e4c]" size={22} />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Pia</h3>
            <p className="text-[#4a6e4c] text-sm font-semibold mb-3 sm:mb-4">
              Counsellor & Psychotherapist
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              With a background in drug and alcohol counselling and suicide prevention, Pia brings a calm, non-judgemental presence to complex experiences and works from a harm-minimisation perspective. She takes a holistic view of wellbeing, recognising the impact of relationships, family dynamics, culture, work, sleep, movement, and daily life on emotional health.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              Having grown up in Europe, Pia brings a cultural lens to her work and is particularly interested in how people develop a sense of self, belonging, and connection. She supports clients in building emotional awareness, self-acceptance, and healthier ways of relating to themselves and others.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              In her work with couples, Pia helps partners shift out of blame and disconnection and toward clearer communication, deeper understanding, and a sense of being on the same team.
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}
