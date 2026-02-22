import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const t = CONTENT[language].cookies;

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-stone-900/95 backdrop-blur text-white p-4 md:p-6 z-50 border-t border-stone-700 shadow-2xl animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base text-stone-300 text-center md:text-left max-w-3xl">
          {t.text}
        </p>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleDecline}
            className="text-sm text-stone-400 hover:text-white underline decoration-stone-500 underline-offset-4 transition-colors"
          >
            {t.decline}
          </button>
          <button 
            onClick={handleAccept}
            className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-900/50"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
};