import { useState } from 'react'
import { CalendarDays } from 'lucide-react'
import BookingWizard from './BookingWizard'

export default function Contact() {
  const [wizardOpen, setWizardOpen] = useState(false)

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
          Book a consultation
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-4 sm:mb-6 leading-snug">
          Ready to take the first step?
        </h2>
        <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
          Your first consultation is completely free — 15 minutes to ask questions,
          get a feel for how we work, and see if we're the right fit. No commitment required.
        </p>

        {/* CTA card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-stone-100 mb-8 max-w-xl">
          <div className="w-12 h-12 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-6">
            <CalendarDays className="text-[#7c9a7e]" size={22} />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-stone-800 mb-2">
            Free 15-minute consultation
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed mb-8">
            Choose your practitioner, how you'd like to meet, and pick a time that
            works for you — all in a few easy steps.
          </p>
          <button
            onClick={() => setWizardOpen(true)}
            className="flex items-center gap-2 bg-[#7c9a7e] text-white px-8 py-3.5 rounded-full hover:bg-[#5a7a5c] transition-colors font-medium"
          >
            Book now
            <CalendarDays size={16} />
          </button>
        </div>

        {/* Crisis support */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-stone-100 max-w-lg">
          <h3 className="font-medium text-stone-700 mb-2 text-sm sm:text-base">
            Need urgent support?
          </h3>
          <p className="text-stone-500 text-sm leading-relaxed mb-3">
            If you're in crisis, please reach out to:
          </p>
          <ul className="space-y-2 text-sm text-stone-500">
            <li>
              <span className="text-stone-700 font-medium">Lifeline</span>{' '}
              <a href="tel:131114" className="hover:text-[#7c9a7e] transition-colors">13 11 14</a> (24/7)
            </li>
            <li>
              <span className="text-stone-700 font-medium">Beyond Blue</span>{' '}
              <a href="tel:1300224636" className="hover:text-[#7c9a7e] transition-colors">1300 22 4636</a>
            </li>
            <li>
              <span className="text-stone-700 font-medium">Emergency</span>{' '}
              <a href="tel:000" className="hover:text-[#7c9a7e] transition-colors">000</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Full-screen modal */}
      {wizardOpen && <BookingWizard onClose={() => setWizardOpen(false)} />}
    </section>
  )
}
