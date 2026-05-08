import { useState, useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { ChevronLeft, X, User, Users, Monitor, MapPin, Leaf } from 'lucide-react'

// ── Update these URLs once your Calendly account is set up ──
const CALENDLY_URLS: Record<string, string> = {
  keris: 'https://calendly.com/timeandspace/keris',
  pia: 'https://calendly.com/timeandspace/pia',
  nopreference: 'https://calendly.com/timeandspace/free-consultation',
}

type Practitioner = 'keris' | 'pia' | 'nopreference'
type Format = 'inperson' | 'telehealth'

const concerns = [
  'Addiction & substance use',
  'Anxiety & worry',
  'Depression & low mood',
  'Life transitions & grief',
  'Stress & burnout',
  'Relationship difficulties',
  'Trauma',
  'Self-esteem & confidence',
  'Something else',
]

interface BookingWizardProps {
  onClose: () => void
}

export default function BookingWizard({ onClose }: BookingWizardProps) {
  const [step, setStep] = useState(1)
  const [practitioner, setPractitioner] = useState<Practitioner | null>(null)
  const [format, setFormat] = useState<Format | null>(null)
  const [concern, setConcern] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const calendlyUrl = practitioner ? CALENDLY_URLS[practitioner] : CALENDLY_URLS.nopreference
  const prefill = {
    customAnswers: {
      a1: format === 'inperson' ? 'In-person' : 'Telehealth',
      a2: concern ?? 'Not specified',
    },
  }

  const totalSteps = 3

  // Steps 1 & 2 auto-advance on selection
  const selectPractitioner = (p: Practitioner) => {
    setPractitioner(p)
    setTimeout(() => setStep(2), 200)
  }

  const selectFormat = (f: Format) => {
    setFormat(f)
    setTimeout(() => setStep(3), 200)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex h-[85vh] max-h-[680px]">

        {/* Left panel — crisis info, always visible on md+ */}
        <div className="hidden md:flex flex-col w-64 lg:w-72 shrink-0 bg-[#f7f4f0] p-8 justify-between">
          <div>
            <div className="w-10 h-10 bg-[#e8f0e9] rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-[#7c9a7e]" size={18} />
            </div>
            <p className="font-serif text-stone-700 text-lg leading-snug mb-3">
              You don't have to have it all figured out.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed">
              This is a free, no-pressure conversation. We're here to listen.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium text-stone-500 uppercase tracking-widest mb-4">
              Need urgent support?
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-medium text-stone-700">Lifeline</p>
                <a href="tel:131114" className="text-[#7c9a7e] hover:underline">13 11 14</a>
                <span className="text-stone-400 text-xs"> · 24/7</span>
              </li>
              <li>
                <p className="font-medium text-stone-700">Beyond Blue</p>
                <a href="tel:1300224636" className="text-[#7c9a7e] hover:underline">1300 22 4636</a>
              </li>
              <li>
                <p className="font-medium text-stone-700">Emergency</p>
                <a href="tel:000" className="text-[#7c9a7e] hover:underline">000</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right panel — wizard */}
        <div className="flex flex-col flex-1 min-w-0">

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-4 shrink-0">
          <div>
            <p className="font-serif text-stone-800 text-lg sm:text-xl">
              Book a free consultation
            </p>
            {step < 4 && (
              <p className="text-stone-400 text-xs mt-0.5">
                Step {step} of {totalSteps}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 transition-colors p-2 -mr-2 rounded-full hover:bg-stone-100"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div className="h-0.5 bg-stone-100 mx-6 sm:mx-8 rounded-full">
            <div
              className="h-0.5 bg-[#7c9a7e] rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / totalSteps) * 100}%` }}
            />
          </div>
        )}

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">

          {/* Step 1 — Practitioner (auto-advances on selection) */}
          {step === 1 && (
            <div className="px-6 sm:px-8 py-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
                Who would you like to see?
              </h3>
              <p className="text-stone-400 text-sm mb-8">
                All practitioners offer a free 15-minute consultation.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { id: 'keris', label: 'Keris', sub: 'Specialist in addiction & substance use', icon: User },
                  { id: 'pia', label: 'Pia', sub: 'Bio coming soon', icon: User },
                  { id: 'nopreference', label: 'No preference', sub: "We'll match you with the best fit", icon: Users },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => selectPractitioner(opt.id as Practitioner)}
                    className={`text-left rounded-2xl p-5 border-2 transition-all ${
                      practitioner === opt.id
                        ? 'border-[#7c9a7e] bg-[#e8f0e9]'
                        : 'border-stone-100 hover:border-[#7c9a7e]/40'
                    }`}
                  >
                    <opt.icon
                      size={20}
                      className={practitioner === opt.id ? 'text-[#7c9a7e]' : 'text-stone-300'}
                    />
                    <p className="font-medium text-stone-800 mt-3 mb-1">{opt.label}</p>
                    <p className="text-stone-400 text-xs leading-snug">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Format (auto-advances on selection) */}
          {step === 2 && (
            <div className="px-6 sm:px-8 py-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
                How would you like to meet?
              </h3>
              <p className="text-stone-400 text-sm mb-8">
                Both options are available — choose what feels right for you.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { id: 'inperson', label: 'In-person', sub: 'Come and see us at our practice', icon: MapPin },
                  { id: 'telehealth', label: 'Telehealth', sub: 'Video session from anywhere in Australia', icon: Monitor },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => selectFormat(opt.id as Format)}
                    className={`text-left rounded-2xl p-6 border-2 transition-all ${
                      format === opt.id
                        ? 'border-[#7c9a7e] bg-[#e8f0e9]'
                        : 'border-stone-100 hover:border-[#7c9a7e]/40'
                    }`}
                  >
                    <opt.icon
                      size={22}
                      className={format === opt.id ? 'text-[#7c9a7e]' : 'text-stone-300'}
                    />
                    <p className="font-medium text-stone-800 mt-4 mb-1">{opt.label}</p>
                    <p className="text-stone-400 text-sm">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 — Concern (optional, has Skip) */}
          {step === 3 && (
            <div className="px-6 sm:px-8 py-8">
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
                What brings you here?
              </h3>
              <p className="text-stone-400 text-sm mb-8">
                Optional — just helps us understand a little before we meet.
              </p>
              <div className="flex flex-wrap gap-2">
                {concerns.map(c => (
                  <button
                    key={c}
                    onClick={() => setConcern(concern === c ? null : c)}
                    className={`px-4 py-2.5 rounded-full text-sm border transition-all ${
                      concern === c
                        ? 'border-[#7c9a7e] bg-[#e8f0e9] text-[#5a7a5c]'
                        : 'border-stone-200 text-stone-500 hover:border-stone-300'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(4)}
                className="mt-8 text-stone-400 hover:text-stone-600 text-sm transition-colors underline underline-offset-2"
              >
                Skip
              </button>
            </div>
          )}

          {/* Step 4 — Calendly */}
          {step === 4 && (
            <div>
              <div className="px-6 sm:px-8 py-4">
                <p className="text-stone-400 text-sm">
                  Free 15-min consultation ·{' '}
                  {format === 'inperson' ? 'In-person' : 'Telehealth'} ·{' '}
                  {practitioner === 'keris' ? 'Keris' : practitioner === 'pia' ? 'Pia' : 'Any practitioner'}
                </p>
              </div>
              <InlineWidget
                url={calendlyUrl}
                prefill={prefill}
                styles={{ minWidth: '320px', height: '650px' }}
              />
            </div>
          )}
        </div>

        {/* Footer — Back on every step */}
        {step > 1 && (
          <div className="px-6 sm:px-8 py-5 border-t border-stone-100 shrink-0">
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-1.5 text-stone-400 hover:text-stone-600 text-sm transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>
        )}

        {/* Mobile-only crisis strip — hidden on md+ where left panel shows */}
        <div className="md:hidden bg-[#f7f4f0] px-6 py-4 shrink-0 border-t border-stone-100">
          <p className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-2">
            Need urgent support?
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-stone-500">
            <span>
              <span className="font-medium text-stone-600">Lifeline </span>
              <a href="tel:131114" className="text-[#7c9a7e]">13 11 14</a>
              <span className="text-stone-400"> · 24/7</span>
            </span>
            <span>
              <span className="font-medium text-stone-600">Beyond Blue </span>
              <a href="tel:1300224636" className="text-[#7c9a7e]">1300 22 4636</a>
            </span>
            <span>
              <span className="font-medium text-stone-600">Emergency </span>
              <a href="tel:000" className="text-[#7c9a7e]">000</a>
            </span>
          </div>
        </div>

        </div>{/* end right panel */}
      </div>
    </div>
  )
}
