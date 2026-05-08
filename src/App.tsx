import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fees from './components/Fees'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingWizard from './components/BookingWizard'
import './index.css'

function App() {
  const [wizardOpen, setWizardOpen] = useState(false)

  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar onBookNow={() => setWizardOpen(true)} />

      <main id="main-content">
        <Hero onBookNow={() => setWizardOpen(true)} />
        <About />
        <Services />
        <Fees />
        <Contact onBookNow={() => setWizardOpen(true)} />
      </main>

      <Footer />

      {wizardOpen && <BookingWizard onClose={() => setWizardOpen(false)} />}
    </>
  )
}

export default App
