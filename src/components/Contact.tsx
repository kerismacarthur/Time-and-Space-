import { CalendarDays } from 'lucide-react'

export default function Contact({ onBookNow }: { onBookNow: () => void }) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4" aria-hidden="true">
          Book a consultation
        </p>
        <h2 id="contact-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6 leading-snug">
          Ready to take the first step?
        </h2>
        <p className="text-stone-700 text-lg leading-relaxed mb-10 max-w-2xl">
          Your first consultation is completely free — 15 minutes to ask questions,
          get a feel for how we work, and see if we're the right fit. No commitment required.
        </p>

        {/* CTA card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-stone-200 mb-8 max-w-xl">
          <div className="w-12 h-12 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-6" aria-hidden="true">
            <CalendarDays className="text-[#4a6e4c]" size={22} />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-2">
            Free 15-minute consultation
          </h3>
          <p className="text-stone-700 text-base leading-relaxed mb-8">
            Choose your practitioner, how you'd like to meet, and pick a time that
            works for you — all in a few easy steps.
          </p>
          <button
            onClick={onBookNow}
            className="flex items-center gap-2 bg-[#4a6e4c] text-white px-8 py-4 rounded-full hover:bg-[#3d5e3f] transition-colors font-semibold text-base"
            aria-label="Open booking form — free 15 minute consultation"
          >
            Book now
            <CalendarDays size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Crisis support */}
        <aside aria-label="Crisis support contacts" className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-stone-200 max-w-lg">
          <h3 className="font-semibold text-stone-900 mb-2 text-base">
            Need urgent support?
          </h3>
          <p className="text-stone-700 text-base leading-relaxed mb-4">
            If you're in crisis, please reach out to:
          </p>
          <ul className="space-y-3 text-base text-stone-700">
            <li>
              <span className="font-semibold">Lifeline </span>
              <a href="tel:131114" className="text-[#4a6e4c] hover:underline font-medium" aria-label="Call Lifeline on 13 11 14">13 11 14</a>
              <span> — available 24 hours, 7 days</span>
            </li>
            <li>
              <span className="font-semibold">Beyond Blue </span>
              <a href="tel:1300224636" className="text-[#4a6e4c] hover:underline font-medium" aria-label="Call Beyond Blue on 1300 22 4636">1300 22 4636</a>
            </li>
            <li>
              <span className="font-semibold">Emergency services </span>
              <a href="tel:000" className="text-[#4a6e4c] hover:underline font-medium" aria-label="Call emergency services on 000">000</a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
