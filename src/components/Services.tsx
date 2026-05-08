import {
  ShieldCheck,
  Wind,
  CloudRain,
  Compass,
  Flame,
  HeartHandshake,
  Brain,
  Star,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'

const services: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: 'Addiction & substance use' },
  { icon: Wind, label: 'Anxiety & worry' },
  { icon: CloudRain, label: 'Depression & low mood' },
  { icon: Compass, label: 'Life transitions & grief' },
  { icon: Flame, label: 'Stress & burnout' },
  { icon: HeartHandshake, label: 'Relationship difficulties' },
  { icon: Brain, label: 'Trauma & complex trauma' },
  { icon: Star, label: 'Self-esteem & confidence' },
  { icon: MessageCircle, label: 'General counselling & growth' },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
          What we help with
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 mb-4 sm:mb-6 max-w-xl leading-snug">
          Wherever you are, we meet you there
        </h2>
        <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-10 sm:mb-14 max-w-2xl">
          We work with adults across a wide range of concerns. Whatever brings you here,
          you don't have to navigate it alone.
        </p>

        {/* Services grid — 1 col mobile, 2 col sm, 3 col md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 border border-stone-100"
            >
              <Icon className="text-[#7c9a7e] shrink-0" size={18} />
              <span className="text-stone-600 text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </div>

        {/* How we work — stacked on mobile, 3 col on md */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border border-stone-100">
          <div>
            <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium mb-1 sm:mb-2">Session format</p>
            <p className="text-stone-600 text-sm sm:text-base">
              50-minute individual sessions, weekly or fortnightly
            </p>
          </div>
          <div className="border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-8">
            <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium mb-1 sm:mb-2">How we meet</p>
            <p className="text-stone-600 text-sm sm:text-base">
              In-person or telehealth — available Australia-wide
            </p>
          </div>
          <div className="border-t sm:border-t-0 sm:border-l border-stone-100 pt-4 sm:pt-0 sm:pl-8">
            <p className="text-[#7c9a7e] text-xs sm:text-sm font-medium mb-1 sm:mb-2">Getting started</p>
            <p className="text-stone-600 text-sm sm:text-base">
              Free 15-minute phone or video consultation — no commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
