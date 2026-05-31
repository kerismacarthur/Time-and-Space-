import {
  ShieldCheck, Wind, CloudRain, Compass, Flame,
  HeartHandshake, Brain, Star, MessageCircle,
  type LucideIcon,
} from 'lucide-react'

const services: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: 'Addiction & substance use' },
  { icon: Wind, label: 'Anxiety & worry' },
  { icon: CloudRain, label: 'Depression & low mood' },
  { icon: Compass, label: 'Life transitions & grief' },
  { icon: Flame, label: 'Stress & burnout' },
  { icon: HeartHandshake, label: 'Relationship difficulties' },
  { icon: Brain, label: 'Trauma, complex trauma & PTSD' },
  { icon: Star, label: 'Self-esteem & confidence' },
  { icon: MessageCircle, label: 'General counselling & growth' },
]

export default function Services() {
  return (
    <>
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#4a6e4c] text-sm font-semibold tracking-widest uppercase mb-3 sm:mb-4" aria-hidden="true">
          Services
        </p>
        <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6 max-w-xl leading-snug">
          How we help.
        </h2>
        <p className="text-stone-700 text-lg leading-relaxed mb-10 sm:mb-14 max-w-2xl">
          The categories below might suggest that the reasons people seek support fit neatly into tidy, little boxes. In our experience, it's rarely that simple; the truth may be a messy intersection of many competing concerns. Whatever brings you here, we'll meet you with openness, compassion and honesty.
        </p>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16 list-none p-0"
          aria-label="List of areas we help with"
        >
          {services.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 border border-stone-200"
            >
              <Icon className="text-[#4a6e4c] shrink-0" size={20} aria-hidden="true" />
              <span className="text-stone-700 text-base">{label}</span>
            </li>
          ))}
        </ul>

        <p className="text-stone-700 text-lg leading-relaxed mb-4 max-w-2xl">
          We offer 50 minute individual sessions, with the option of 90 minute sessions by arrangement. The frequency is determined by you, and we recognise that the rhythm of your needs may change over time. You just let us know what feels right for you, as it becomes clear.
        </p>
        <p className="text-stone-700 text-lg leading-relaxed mb-4 max-w-2xl">
          Additionally, we understand that not everyone wants to engage in person; both Pia and Keris are adept at providing counselling via telehealth and online.
        </p>
        <p className="text-stone-700 text-lg leading-relaxed max-w-2xl mb-4">
          If you'd like to find out more, please contact us via{' '}
          <a href="mailto:hello@timeandspace-counselling.com.au" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">hello@timeandspace-counselling.com.au</a>{' '}
          and we can organise a time to chat about how we can support you best.
        </p>
      </div>
    </section>

    <section aria-labelledby="crisis-heading" className="py-16 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="">
          <h3 id="crisis-heading" className="font-serif text-3xl sm:text-4xl text-stone-900 mb-3">Need urgent support?</h3>
          <p className="text-stone-700 text-lg leading-relaxed mb-6 max-w-2xl">
            If you are in crisis at this time, please consider contacting one of the following crisis support lines or attend your local hospital's emergency department.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <ul className="space-y-3 text-stone-700 text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>Suicide Call Back Service</strong>:24/7 counselling: <a href="tel:1300659467" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">1300 659 467</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>Lifeline</strong>:24/7 crisis support: <a href="tel:131114" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">13 11 14</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>13YARN</strong>:24/7 crisis support for First Nations people:<br /><a href="tel:139276" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">13 92 76</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>1800RESPECT</strong>:domestic, family & sexual violence support: <a href="tel:1800737732" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">1800 737 732</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>Kids Helpline</strong>:support for ages 5–25: <a href="tel:1800551800" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">1800 55 1800</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>MensLine Australia</strong>:support for men: <a href="tel:1300789978" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">1300 78 99 78</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>Beyond Blue</strong>:anxiety & depression support: <a href="tel:1300224636" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">1300 22 4636</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4a6e4c] font-bold shrink-0">•</span>
                <span><strong>Emergency services:</strong> <a href="tel:000" className="text-[#4a6e4c] font-semibold underline hover:text-[#3d5e3f] transition-colors">000</a></span>
              </li>
            </ul>
            <blockquote className="bg-[#f7f4f0] rounded-2xl p-6 sm:p-8">
              <p className="font-serif text-lg text-stone-800 leading-relaxed italic">
                Please note: we are not able to diagnose or treat mental disorders and as such, are not able to provide any documentation to that effect.<br /><br />If you require a licensed mental health professional, (ie: a psychiatrist or psychologist) please contact your GP to organise a referral.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

