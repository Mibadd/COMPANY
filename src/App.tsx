// src/App.tsx

import { useEffect } from 'react';
import AOS from 'aos';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TeamSection from './components/TeamSection';
import NewsSection from './components/NewsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gray-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection data-aos="fade-up" />
        <ServicesSection data-aos="fade-up" />
        <PortfolioSection data-aos="fade-up" />
        <TeamSection data-aos="fade-up" />
        <NewsSection data-aos="fade-up" />
        <ContactForm data-aos="fade-up" />
      </main>
      <Footer />
    </div>
  );
}

export default App;