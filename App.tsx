import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Events } from './components/Events'; 
import { Shop } from './components/Shop'; 
import { KBeauty } from './components/KBeauty';
import { Membership } from './components/Membership';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';
import { MouseTrail } from './components/MouseTrail';
import { PromoBanner } from './components/PromoBanner';
import { FloatingPromo } from './components/FloatingPromo';
import { Testimonials } from './components/Testimonials';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-brand-200 selection:text-brand-900 font-sans">
        <MouseTrail />
        <Header />
        <main>
          <Hero />
          <PromoBanner />
          <About />
          <Testimonials />
          <Services />
          <Events /> 
          <Shop />
          <KBeauty />
          <Membership />
        </main>
        <Contact />
        <WhatsAppButton />
        <FloatingPromo />
        <CookieConsent />
      </div>
    </LanguageProvider>
  );
}

export default App;