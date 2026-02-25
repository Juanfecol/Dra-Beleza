import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingWidget } from './components/BookingWidget';
import { CookieConsent } from './components/CookieConsent';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider, useCart } from './contexts/CartContext';
import { MouseTrail } from './components/MouseTrail';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './src/pages/Home';
import { AboutPage } from './src/pages/AboutPage';
import { StoriesPage } from './src/pages/StoriesPage';
import { TreatmentsPage } from './src/pages/TreatmentsPage';
import { ShopPage } from './src/pages/ShopPage';
import { ContactPage } from './src/pages/ContactPage';
import { AnimatePresence } from 'motion/react';
import { trackPageView } from './src/services/pixelService';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView();
  }, [pathname]);
  return null;
};

function AppContent() {
  const location = useLocation();
  const { isCartOpen, setIsCartOpen } = useCart();
  
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
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 selection:bg-brand-200 selection:text-brand-900 font-sans flex flex-col">
      <ScrollToTop />
      <MouseTrail />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/historias" element={<StoriesPage />} />
            <Route path="/tratamentos" element={<TreatmentsPage />} />
            <Route path="/loja" element={<ShopPage />} />
            <Route path="/contactos" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WhatsAppButton />
      <BookingWidget />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;
