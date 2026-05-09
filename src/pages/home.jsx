import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoanCategories from "../components/LoanCategories";
import Banks from "../components/Banks";
import Advisor from "../components/Advisor";
import Footer from "../components/Footer";
import Contact from "./Contact";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

import Stats from "../components/Stats";
import InsuranceCategories from "../components/InsuranceCategories";
import Insurance from "../components/Insurance";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <LoanCategories />
      <InsuranceCategories />
      <WhyChooseUs/>
      <Banks />
      <Insurance />
    
      <Advisor />
      <Testimonials />
      <Contact />
      <Footer />
    
      
    </>
  );
};

export default Home;