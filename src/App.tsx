// src/App.tsx

import { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

const PortfolioSection = lazy(() => import('./components/PortfolioSection'));
const TeamSection = lazy(() => import('./components/TeamSection'));
const NewsSection = lazy(() => import('./components/NewsSection'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

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

        <Suspense fallback={<div className="text-center p-10">Memuat...</div>}>
          <PortfolioSection data-aos="fade-up" />
          <TeamSection data-aos="fade-up" />
          <NewsSection data-aos="fade-up" />
          <ContactForm data-aos="fade-up" />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;