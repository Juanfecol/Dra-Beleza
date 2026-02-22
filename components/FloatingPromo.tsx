import React from 'react';
import { CalendarDays } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';

export const FloatingPromo: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].promoCalendar;

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
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 md:bottom-6 md:right-auto md:left-6 z-40 bg-white p-4 rounded-2xl shadow-2xl border border-brand-100 hover:-translate-y-1 transition-transform duration-300 group animate-fade-in hidden sm:flex items-center gap-3 max-w-[220px]"
    >
      <div className="bg-brand-50 p-2.5 rounded-xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
        <CalendarDays size={24} />
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold uppercase tracking-wide text-stone-400">{t.title}</p>
        <p className="text-sm font-bold text-stone-800 leading-tight">
          <span className="text-brand-600">{t.highlight}</span>
        </p>
        <span className="text-[10px] text-brand-500 underline decoration-brand-200 mt-0.5 block">{t.btn}</span>
      </div>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
};