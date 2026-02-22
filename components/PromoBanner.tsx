import React from 'react';
import { CalendarDays, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';

export const PromoBanner: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].promoBanner;

  const handleClick = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const event = new CustomEvent('prefill-contact-form', { 
          detail: { interest: 'consultation' } 
        });
        window.dispatchEvent(event);
      }, 800);
    } else {
      const contactSection = document.getElementById('contact');
      if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-600 text-white cursor-pointer hover:bg-brand-700 transition-colors overflow-hidden relative py-4 border-b border-brand-300/20 shadow-lg z-40"
      role="button"
      aria-label={t.text}
    >
      <div className="absolute inset-0 bg-white/5 animate-pulse pointer-events-none"></div>

      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee w-max">
        {[...Array(8)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center gap-2.5 text-sm md:text-base font-bold tracking-widest uppercase text-white drop-shadow-sm">
               <CalendarDays className="w-5 h-5 text-gold-400 drop-shadow" />
               <span>{t.text}</span>
            </div>
            <Star className="w-3 h-3 text-white/50 fill-white/50" />
            <div className="flex items-center gap-3 text-sm md:text-base font-medium text-brand-50 tracking-wide">
               <span className="underline decoration-gold-400/50 underline-offset-4">{t.cta}</span>
            </div>
            <Star className="w-3 h-3 text-white/50 fill-white/50" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};