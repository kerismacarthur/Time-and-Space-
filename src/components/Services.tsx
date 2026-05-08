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
  { icon: MessageCircle, label: 'General counselling & personal growth' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#7c9a7e] text-sm font-medium tracking-widest uppercase mb-4">
          What we help with
        </p>
        <h2 className="font-serif text-4xl text-stone-800 mb-6 max-w-xl leading-snug">
          Wherever you are, we meet you there
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed mb-14 max-w-2xl">
          We work with adults across a wide range of concerns. Whatever brings you here,
          you don't have to navigate it alone.
        </p>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-stone-100"
            >
              <Icon className="text-[#7c9a7e] shrink-0" size={20} />
              <span className="text-stone-600">{label}</span>
            </div>
          ))}
        </div>

        {/* How we work */}
        <div className="bg-white rounded-3xl p-10 grid md:grid-cols-3 gap-8 border border-stone-100">
          <div>
            <p className="text-[#7c9a7e] text-sm font-medium mb-2">Session format</p>
            <p className="text-stone-600">
              50-minute individual sessions, weekly or fortnightly
            </p>
          </div>
          <div>
            <p className="text-[#7c9a7e] text-sm font-medium mb-2">How we meet</p>
            <p className="text-stone-600">
              In-person or telehealth — available Australia-wide
            </p>
          </div>
          <div>
            <p className="text-[#7c9a7e] text-sm font-medium mb-2">Getting started</p>
            <p className="text-stone-600">
              Free 15-minute phone or video consultation — no commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
