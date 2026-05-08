export default function Fees() {
  return (
    <section id="fees" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#7c9a7e] text-sm font-medium tracking-widest uppercase mb-4">
          Fees
        </p>
        <h2 className="font-serif text-4xl text-stone-800 mb-6 leading-snug">
          Transparent and straightforward
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed mb-14 max-w-2xl">
          We believe quality mental health support should be accessible. If cost is a
          barrier, please reach out — we're happy to have an honest conversation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fee card */}
          <div className="bg-[#f7f4f0] rounded-3xl p-10">
            <p className="text-stone-400 text-sm mb-2">Individual counselling</p>
            <p className="font-serif text-5xl text-stone-800 mb-1">$130–$160</p>
            <p className="text-stone-400 text-sm mb-8">per 50-minute session</p>
            <div className="w-full h-px bg-stone-200 mb-8" />
            <ul className="space-y-3 text-stone-500">
              <li className="flex items-start gap-3">
                <span className="text-[#7c9a7e] mt-0.5">✓</span>
                Free 15-minute initial consultation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7c9a7e] mt-0.5">✓</span>
                In-person and telehealth available
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#7c9a7e] mt-0.5">✓</span>
                Invoice provided for private health claims
              </li>
            </ul>
          </div>

          {/* Medicare info */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#e8f0e9] rounded-2xl p-8">
              <h3 className="font-medium text-stone-700 mb-2">Medicare & rebates</h3>
              <p className="text-stone-500 leading-relaxed text-sm">
                As counsellors and psychotherapists, we are not currently eligible to
                provide Medicare rebates under the Better Access scheme. We recommend
                checking with your private health insurer — many extras policies cover
                counselling sessions.
              </p>
            </div>
            <div className="bg-[#f7f4f0] rounded-2xl p-8">
              <h3 className="font-medium text-stone-700 mb-2">Cancellation policy</h3>
              <p className="text-stone-500 leading-relaxed text-sm">
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
