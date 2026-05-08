import { useState, useEffect } from 'react'
import { InlineWidget } from 'react-calendly'
import { ChevronLeft, X, User, Users, Monitor, MapPin } from 'lucide-react'

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
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8 pb-4 shrink-0">
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
          <div className="h-0.5 bg-stone-100 mx-6 sm:mx-10 rounded-full">
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
            <div className="px-6 sm:px-10 py-8">
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
            <div className="px-6 sm:px-10 py-8">
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
            <div className="px-6 sm:px-10 py-8">
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
              <div className="px-6 sm:px-10 py-4">
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
          <div className="px-6 sm:px-10 py-5 sm:py-6 border-t border-stone-100 shrink-0">
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-1.5 text-stone-400 hover:text-stone-600 text-sm transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
