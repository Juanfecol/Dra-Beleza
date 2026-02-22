import React from 'react';
import { Crown, Check, Mail } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { STRIPE_MEMBERSHIP_URL } from '../constants';

export const Membership: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].membership;
  
  const handleSubscribe = () => {
    window.open(STRIPE_MEMBERSHIP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="membership" className="py-20 bg-stone-900 text-white relative overflow-hidden scroll-mt-28">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center animate-on-scroll">
        <div className="inline-flex items-center justify-center p-3 bg-stone-800 rounded-full mb-6">
          <Crown className="w-6 h-6 text-gold-500 mr-2" />
          <span className="text-gold-500 font-bold tracking-widest uppercase text-sm">{t.badge}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif mb-6">{t.title}</h2>
        <p className="text-stone-300 max-w-2xl mx-auto mb-12 text-lg">
          {t.desc}
        </p>

        <div className="max-w-md mx-auto bg-gradient-to-b from-stone-800 to-stone-900 border border-stone-700 rounded-3xl p-8 shadow-2xl relative transform hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide shadow-lg animate-pulse">
            {t.offer}
          </div>
          
          <div className="text-center mb-8">
            <span className="text-5xl font-bold text-white">1,99€</span>
            <span className="text-stone-400">{t.period}</span>
          </div>

          <ul className="space-y-4 mb-8 text-left">
            {t.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="bg-brand-900/50 p-1 rounded-full"><Check className="w-4 h-4 text-brand-400" /></div>
                <span className="text-stone-200">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button 
            fullWidth 
            variant="primary" 
            className="bg-gold-600 hover:bg-gold-500 text-black font-bold shadow-gold-500/20"
            onClick={handleSubscribe}
          >
            {t.btn}
          </Button>
          <p className="mt-4 text-xs text-stone-500 flex items-center justify-center gap-1">
            <Mail size={12} /> {t.delivery}
          </p>
        </div>
      </div>
    </section>
  );
};