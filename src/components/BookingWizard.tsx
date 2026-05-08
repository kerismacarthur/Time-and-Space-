import { useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { ChevronLeft, User, Users, Monitor, MapPin, ChevronRight } from 'lucide-react'

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

export default function BookingWizard() {
  const [step, setStep] = useState(1)
  const [practitioner, setPractitioner] = useState<Practitioner | null>(null)
  const [format, setFormat] = useState<Format | null>(null)
  const [concern, setConcern] = useState<string | null>(null)

  const canProceed = () => {
    if (step === 1) return practitioner !== null
    if (step === 2) return format !== null
    if (step === 3) return true // concern is optional
    return false
  }

  const calendlyUrl = practitioner ? CALENDLY_URLS[practitioner] : CALENDLY_URLS.nopreference

  const prefill = {
    customAnswers: {
      a1: format === 'inperson' ? 'In-person' : 'Telehealth',
      a2: concern ?? 'Not specified',
    },
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-100 overflow-hidden">
      {step < 4 && (
        <>
          {/* Progress bar */}
          <div className="h-1 bg-stone-100">
            <div
              className="h-1 bg-[#7c9a7e] transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>

          <div className="p-6 sm:p-10">
            {/* Back button */}
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex items-center gap-1.5 text-stone-400 hover:text-stone-600 text-sm mb-6 transition-colors"
              >
                <ChevronLeft size={16} /> Back
              </button>
            )}

            {/* Step 1 — Practitioner */}
            {step === 1 && (
              <div>
                <p className="text-xs text-stone-400 mb-1">Step 1 of 3</p>
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
                      onClick={() => setPractitioner(opt.id as Practitioner)}
                      className={`text-left rounded-xl p-5 border-2 transition-all ${
                        practitioner === opt.id
                          ? 'border-[#7c9a7e] bg-[#e8f0e9]'
                          : 'border-stone-100 hover:border-stone-200'
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

            {/* Step 2 — Format */}
            {step === 2 && (
              <div>
                <p className="text-xs text-stone-400 mb-1">Step 2 of 3</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
                  How would you like to meet?
                </h3>
                <p className="text-stone-400 text-sm mb-8">
                  Both options are available — choose what feels right for you.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: 'inperson',
                      label: 'In-person',
                      sub: 'Come and see us at our practice',
                      icon: MapPin,
                    },
                    {
                      id: 'telehealth',
                      label: 'Telehealth',
                      sub: 'Video session from anywhere in Australia',
                      icon: Monitor,
                    },
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setFormat(opt.id as Format)}
                      className={`text-left rounded-xl p-6 border-2 transition-all ${
                        format === opt.id
                          ? 'border-[#7c9a7e] bg-[#e8f0e9]'
                          : 'border-stone-100 hover:border-stone-200'
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

            {/* Step 3 — Concern */}
            {step === 3 && (
              <div>
                <p className="text-xs text-stone-400 mb-1">Step 3 of 3</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-2">
                  What brings you here?
                </h3>
                <p className="text-stone-400 text-sm mb-8">
                  Optional — just helps us understand a little before we meet.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {concerns.map(c => (
                    <button
                      key={c}
                      onClick={() => setConcern(concern === c ? null : c)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        concern === c
                          ? 'border-[#7c9a7e] bg-[#e8f0e9] text-[#5a7a5c]'
                          : 'border-stone-200 text-stone-500 hover:border-stone-300'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-stone-400 mt-4">
                  You can skip this — just hit Next to continue.
                </p>
              </div>
            )}

            {/* Next button */}
            <div className="mt-8">
              <button
                onClick={() => setStep(s => s + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-[#7c9a7e] text-white px-7 py-3 rounded-full hover:bg-[#5a7a5c] transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium"
              >
                {step === 3 ? 'Choose a time' : 'Next'}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Step 4 — Calendly */}
      {step === 4 && (
        <div>
          <div className="px-6 sm:px-10 pt-6 sm:pt-8 pb-4">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-1.5 text-stone-400 hover:text-stone-600 text-sm mb-4 transition-colors"
            >
              <ChevronLeft size={16} /> Back
            </button>
            <h3 className="font-serif text-2xl text-stone-800 mb-1">
              Pick a time that suits you
            </h3>
            <p className="text-stone-400 text-sm">
              Free 15-minute consultation ·{' '}
              {format === 'inperson' ? 'In-person' : 'Telehealth'} ·{' '}
              {practitioner === 'keris' ? 'Keris' : practitioner === 'pia' ? 'Pia' : 'Any practitioner'}
            </p>
          </div>
          <InlineWidget
            url={calendlyUrl}
            prefill={prefill}
            styles={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      )}
    </div>
  )
}
