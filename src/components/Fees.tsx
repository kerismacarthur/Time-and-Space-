export default function Fees() {
  return (
    <section id="fees" aria-labelledby="fees-heading" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4" aria-hidden="true">
          Fees
        </p>
        <h2 id="fees-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 leading-snug">
          How much will this cost?
        </h2>
        <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
          For more information regarding our fee schedule, please contact us via{' '}
          <a href="mailto:hello@timeandspace-counselling.com.au" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">hello@timeandspace-counselling.com.au</a>
        </p>

        <div className="flex flex-col gap-4 sm:gap-6 max-w-2xl">
          <div className="bg-[#e8f0e9] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="font-semibold text-stone-900 mb-2 text-base">Medicare & rebates</h3>
            <p className="text-stone-700 leading-relaxed text-base">
              As counsellors and psychotherapists, we are not currently eligible to
              provide Medicare rebates under the Better Access scheme. We recommend
              checking with your private health insurer — many extras policies cover
              counselling sessions.
            </p>
          </div>
          <div className="bg-[#e8f0e9] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
            <h3 className="font-semibold text-stone-900 mb-2 text-base">Cancellation policy</h3>
            <p className="text-stone-700 leading-relaxed text-base">
              We ask for 48 hours' notice for cancellations or rescheduling. We understand life happens, but late cancellations will incur a fee so please let us know as early as you can.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
