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
    <section id="services" aria-labelledby="services-heading" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
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

        {/* How we work */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-stone-200">
          <h3 className="sr-only">How sessions work</h3>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <dt className="text-[#4a6e4c] text-sm font-semibold mb-2">Session format</dt>
              <dd className="text-stone-700 text-base">50-minute individual sessions, weekly or fortnightly</dd>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-stone-200 pt-4 sm:pt-0 sm:pl-8">
              <dt className="text-[#4a6e4c] text-sm font-semibold mb-2">How we meet</dt>
              <dd className="text-stone-700 text-base">In-person or telehealth — available Australia-wide</dd>
            </div>
            <div className="border-t sm:border-t-0 sm:border-l border-stone-200 pt-4 sm:pt-0 sm:pl-8">
              <dt className="text-[#4a6e4c] text-sm font-semibold mb-2">Getting started</dt>
              <dd className="text-stone-700 text-base">Free 15-minute phone or video consultation — no commitment required</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
