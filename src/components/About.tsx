
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
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-4">
              We take an integrative approach, drawing on person-centred, trauma-informed, cognitive-behavioural, and mindfulness-based practises to tailor our work to each person's hopes, their unique needs and lived experience.
            </p>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
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
            <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between mb-4 sm:mb-5">
              <div className="order-2 sm:order-1 text-center sm:text-left mt-3 sm:mt-0">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Pia</h3>
                <p className="text-[#4a6e4c] text-sm font-semibold">
                  Counsellor & Psychotherapist
                </p>
              </div>
              <img
                src="/pia.jpg"
                alt="Pia Storey"
                className="order-1 sm:order-2 w-28 h-28 sm:w-28 sm:h-28 rounded-full object-cover object-[center_25%] shrink-0"
              />
            </div>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              Pia works with individuals and couples navigating stress and anxiety, relationship challenges, identity, and life transitions. Her approach is collaborative and deeply relational, taking a holistic view of wellbeing that recognises how relationships, family dynamics, culture, work, sleep, movement, and daily life shape emotional health.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-4">
              Pia utilises a range of evidence-based approaches, including Acceptance and Commitment Therapy, Attachment Theory, Cognitive Behavioural Therapy, Schema Therapy, and the Gottman Method for couples, to support each client's unique needs.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              Having grown up in Europe, Pia brings a multicultural lens to her work and is particularly interested in how people develop a sense of self and belonging. She supports clients in cultivating emotional awareness, self-acceptance, and healthier ways of relating to themselves and others, offering space where connection to what matters most can be gently restored.
            </p>
          </article>

          <article className="bg-[#f7f4f0] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between mb-4 sm:mb-5">
              <div className="order-2 sm:order-1 text-center sm:text-left mt-3 sm:mt-0">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-1">Keris</h3>
                <p className="text-[#4a6e4c] text-sm font-semibold">
                  Counsellor & Psychotherapist
                </p>
              </div>
              <img
                src="/keris.jpg"
                alt="Keris Macarthur"
                className="order-1 sm:order-2 w-28 h-28 sm:w-28 sm:h-28 rounded-full object-cover object-top shrink-0"
              />
            </div>
            <p className="text-stone-700 text-base leading-relaxed mb-3 sm:mb-4">
              Keris' therapeutic perspective is grounded in compassion and a genuine curiosity about how we make sense of ourselves, our relationships and our place in the world. She draws on evidence-based practice alongside a firm belief that connection and presence are foundational to healing and ongoing growth.
            </p>
            <p className="text-stone-700 text-base leading-relaxed mb-3 sm:mb-4">
              With specialist experience in drug and alcohol counselling and a background in suicide prevention, Keris brings both depth and warmth to her work with individuals, couples and groups. In private practice, she draws on an intersectional lens to complement her person-centred, process-oriented approach.
            </p>
            <p className="text-stone-700 text-base leading-relaxed">
              Keris is a creative and intuitive therapist, who draws on Cognitive Behavioural Therapy, Cognitive Processing Therapy, Internal Family Systems, Schema Therapy and Motivational Interviewing to shape each therapeutic encounter and nurture genuine rapport.
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}
