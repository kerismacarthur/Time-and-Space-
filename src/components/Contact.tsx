import BookingWizard from './BookingWizard'

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
          Book a consultation
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-4 sm:mb-6 leading-snug">
          Ready to take the first step?
        </h2>
        <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 max-w-2xl">
          Your first consultation is completely free — 15 minutes to ask questions,
          get a feel for how we work, and see if we're the right fit for you.
          No commitment required.
        </p>

        {/* Wizard */}
        <div className="mb-10 sm:mb-14">
          <BookingWizard />
        </div>

        {/* Crisis support */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-stone-100 max-w-lg">
          <h3 className="font-medium text-stone-700 mb-2 sm:mb-3 text-sm sm:text-base">
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
    </section>
  )
}
