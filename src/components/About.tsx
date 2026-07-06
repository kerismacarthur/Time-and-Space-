
export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4" aria-hidden="true">
          About
        </p>
        <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6 max-w-xl leading-snug">
          How we work.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-20">
          <div>
            <p className="text-stone-700 text-lg leading-relaxed mb-4">
              We take an integrative approach, drawing on person-centred, trauma-informed, cognitive-behavioural, and mindfulness-based practises to tailor our work to each person's hopes, their unique needs and lived experience.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              We also know that your needs and perspective may shift along the way. Building a relationship where you feel confident to ask questions from the outset and share feedback along the way, is central to how we work.
            </p>
          </div>
          <div className="bg-[#f7f4f0] rounded-2xl p-6 sm:p-8">
            <p className="font-serif text-lg lg:text-xl text-stone-800 leading-relaxed italic mb-4">
              Pia and Keris first met at Western Sydney University, each completing a Master of Counselling and Psychotherapy in 2023.
            </p>
            <p className="font-serif text-lg lg:text-xl text-stone-800 leading-relaxed italic mb-3">
              Both are now clinically registered counsellors with the Psychotherapy and Counselling Federation of Australia (PACFA).
            </p>
            <p className="font-serif text-lg lg:text-xl text-stone-800 leading-relaxed italic">
              If you'd like to learn more about PACFA's Code of Ethics, please{' '}
              <a href="https://pacfa.org.au/portal/portal/Prac-Res/code-of-ethics.aspx?hkey=ca0802b6-6f61-4252-bed3-e3fb19bcd6bb" target="_blank" rel="noopener noreferrer" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">click here</a>.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
          <article className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-end justify-between mb-4 sm:mb-5">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Pia</h3>
                <p className="text-[#4a6e4c] text-sm font-semibold">
                  Counsellor & Psychotherapist
                </p>
              </div>
              <img
                src="/pia.jpg"
                alt="Pia Storey"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0"
              />
            </div>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              With a background in drug and alcohol counselling and suicide prevention, Pia brings a calm, non-judgemental presence to complex experiences, working from a harm-minimisation perspective. She takes a holistic view of wellbeing, recognising how relationships, family dynamics, culture, work, sleep, movement and daily life all shape emotional health.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              Having grown up in Europe, Pia brings a cultural lens to her work and is particularly interested in how people develop a sense of self, belonging and connection. She supports clients in building emotional awareness, self-acceptance and healthier ways of relating to themselves and others.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              In her work with couples, Pia helps partners move out of blame and disconnection and toward clearer communication, deeper understanding and a sense of being on the same team.
            </p>
          </article>

          <article className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="flex items-end justify-between mb-4 sm:mb-5">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Keris</h3>
                <p className="text-[#4a6e4c] text-sm font-semibold">
                  Counsellor & Psychotherapist
                </p>
              </div>
              <img
                src="/keris.jpg"
                alt="Keris Macarthur"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shrink-0"
              />
            </div>
            <p className="text-stone-700 text-base leading-relaxed mb-3 sm:mb-4">
              Keris' therapeutic approach is grounded in compassion and a genuine curiosity about how we make sense of ourselves, our relationships and our place in the world. She draws on evidence-based practice alongside a firm belief that connection and presence are foundational to healing and ongoing growth.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-3 sm:mb-4">
              With specialist experience in drug and alcohol counselling and a background in suicide prevention, Keris brings both depth and warmth to her work with individuals, couples and groups. In private practice, she draws on an intersectional lens to complement her person-centred, process-oriented approach.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              She works collaboratively, drawing on cognitive behavioural therapy, cognitive processing therapy, internal family systems, motivational interviewing, narrative therapy and focusing to shape each therapeutic encounter.
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}
