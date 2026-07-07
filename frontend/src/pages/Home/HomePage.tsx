import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Footer from '../../components/Footer/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}

export default HomePage
