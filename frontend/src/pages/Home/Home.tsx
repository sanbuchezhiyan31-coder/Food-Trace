import Navbar from "../../components/common/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Features from "../../components/home/Features/Features";
import HowItWorks from "../../components/home/HowItWorks/HowItWorks";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import Statistics from "../../components/home/Statistics/Statistics";
import Footer from "../../components/common/Footer/Footer";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import FAQ from "../../components/home/FAQ/FAQ";
import CTA from "../../components/home/CTA/CTA";


function Home() {
  return (
 <>
  <Navbar />
  <Hero />
  <Features />
  <HowItWorks />
  <FeaturedProducts />
  <Statistics />
  <Testimonials />
  <FAQ />
  <CTA />
  <Footer />
</>
  );
}

export default Home;