export default function Fees() {
  return (
    <section id="fees" aria-labelledby="fees-heading" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4" aria-hidden="true">
          Fees
        </p>
        <h2 id="fees-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6 leading-snug">
          How much will this cost?
        </h2>
        <p className="text-stone-700 text-lg leading-relaxed mb-10 sm:mb-14 max-w-2xl">
          We believe quality mental health support should be accessible. If cost is a
          barrier, please reach out — we're happy to have an honest conversation.
        </p>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-10">
            <div className="mb-4">
              <p className="text-stone-600 text-sm mb-1">Individual counselling</p>
              <p className="font-serif text-4xl sm:text-5xl text-stone-900 mb-1" aria-label="One hundred and forty dollars per session">$140</p>
              <p className="text-stone-600 text-sm">per 50-minute session</p>
            </div>
            <hr className="border-stone-300 mb-6 sm:mb-8" />
            <div className="mb-6 sm:mb-8">
              <p className="text-stone-600 text-sm mb-1">Relationship counselling</p>
              <p className="font-serif text-4xl sm:text-5xl text-stone-900 mb-1" aria-label="One hundred and seventy dollars per session">$170</p>
              <p className="text-stone-600 text-sm">per 50-minute session</p>
            </div>
            <hr className="border-stone-300 mb-6 sm:mb-8" />
            <ul className="space-y-3 text-stone-700 text-base" aria-label="What's included">
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] mt-0.5 shrink-0 font-bold" aria-hidden="true">✓</span>
                90-minute sessions available by request
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] mt-0.5 shrink-0 font-bold" aria-hidden="true">✓</span>
                In-person and telehealth available
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] mt-0.5 shrink-0 font-bold" aria-hidden="true">✓</span>
                Invoice provided for private health claims
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="bg-[#e8f0e9] rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="font-semibold text-stone-900 mb-2 text-base">Medicare & rebates</h3>
              <p className="text-stone-700 leading-relaxed text-base">
                As counsellors and psychotherapists, we are not currently eligible to
                provide Medicare rebates under the Better Access scheme. We recommend
                checking with your private health insurer — many extras policies cover
                counselling sessions.
              </p>
            </div>
            <div className="bg-[#f7f4f0] rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="font-semibold text-stone-900 mb-2 text-base">Cancellation policy</h3>
              <p className="text-stone-700 leading-relaxed text-base">
                We ask for 24 hours' notice for cancellations or rescheduling.
                Late cancellations may incur a fee. We understand life happens —
                please just let us know as early as you can.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
