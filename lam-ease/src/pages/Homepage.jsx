import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Offers from "../components/Offers"
import Process from "../components/Process"
import BusinessCTA from "../components/BusinessCTA"

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Offers />
        <Process />
        <BusinessCTA />
        <Footer />
    </>
  )
}

export default Homepage