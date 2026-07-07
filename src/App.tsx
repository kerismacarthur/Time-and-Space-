import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Fees from './components/Fees'
import Acknowledgement from './components/Acknowledgement'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      {/* Skip to main content — keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <Acknowledgement />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Fees />
      </main>

      <Footer />
    </>
  )
}

export default App
