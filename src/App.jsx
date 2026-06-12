import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Features from '../src/components/Features'
import Pricing from '../src/components/Pricing'
import Testimonials from '../src/components/Testimonials'
import Footer from '../src/components/Footer'


function App() {
  return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
    <Navbar />
    <Hero />
    <Features />
    <Pricing />
    <Testimonials />
    <Footer />
  </div>
}

export default App
