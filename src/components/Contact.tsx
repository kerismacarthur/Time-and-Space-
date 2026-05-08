import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission placeholder — connect to Formspree or similar
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#f7f4f0]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-[#7c9a7e] text-sm font-medium tracking-widest uppercase mb-4">
          Get in touch
        </p>
        <h2 className="font-serif text-4xl text-stone-800 mb-6 leading-snug">
          Ready to take the first step?
        </h2>
        <p className="text-stone-500 text-lg leading-relaxed mb-14 max-w-2xl">
          Send us a message and we'll be in touch within 1–2 business days. Or, if
          you'd prefer, book a free 15-minute consultation and we can chat first.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[#e8f0e9] rounded-2xl p-10 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="text-[#7c9a7e]" size={48} />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">
                  Thank you for reaching out
                </h3>
                <p className="text-stone-500">
                  We'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-stone-500 mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-[#7c9a7e] transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-500 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-[#7c9a7e] transition-colors"
                    placeholder="jane@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-stone-500 mb-1">
                    What brings you here?
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-[#7c9a7e] transition-colors resize-none"
                    placeholder="You don't need to have it all figured out — just share as much or as little as feels right."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#7c9a7e] text-white px-8 py-3 rounded-full hover:bg-[#5a7a5c] transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 border border-stone-100">
              <h3 className="font-medium text-stone-700 mb-3">
                Book a free consultation
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                Not sure if we're the right fit? A free 15-minute call is a
                no-pressure way to ask questions and get a feel for how we work.
              </p>
              <a
                href="mailto:hello@timeandspacecounselling.com.au"
                className="text-[#7c9a7e] text-sm hover:underline"
              >
                hello@timeandspacecounselling.com.au
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-stone-100">
              <h3 className="font-medium text-stone-700 mb-3">Crisis support</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-3">
                If you're in crisis or need urgent support, please contact:
              </p>
              <ul className="space-y-2 text-sm text-stone-500">
                <li>
                  <span className="text-stone-700 font-medium">Lifeline</span>{' '}
                  13 11 14 (24/7)
                </li>
                <li>
                  <span className="text-stone-700 font-medium">Beyond Blue</span>{' '}
                  1300 22 4636
                </li>
                <li>
                  <span className="text-stone-700 font-medium">Emergency</span>{' '}
                  000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
