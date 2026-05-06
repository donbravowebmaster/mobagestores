import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import TrustBand from '../components/TrustBand'
import WhyMoba from '../components/WhyMoba'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <TrustBand />
      <WhyMoba />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
