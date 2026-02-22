import React from 'react';
import { BookOpen, ShoppingBag, ExternalLink, Sparkles, CreditCard, Check } from 'lucide-react';
import { Button } from './Button';
import { ASSETS, STRIPE_EBOOK_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';

export const Shop: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].shop;

  const handleOrder = (productId: string) => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const event = new CustomEvent('prefill-contact-form', { 
          detail: { interest: productId } 
        });
        window.dispatchEvent(event);
      }, 800);
    } else {
       const contactSection = document.getElementById('contact');
       if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuyEbook = () => {
    window.open(STRIPE_EBOOK_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="shop" className="py-20 md:py-24 bg-gradient-to-b from-white to-brand-50/30 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-[10px] md:text-xs border border-brand-100 px-3 py-1 rounded-full bg-white">{t.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-4 md:mt-6 mb-4">{t.title}</h2>
        </div>

        <div className="flex justify-center mb-10 md:mb-16 animate-on-scroll">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-white rounded-full shadow-sm border border-stone-100 text-xs md:text-sm font-medium text-stone-600 hover:shadow-md transition-shadow">
                <CreditCard size={14} className="text-brand-600 md:w-4 md:h-4" />
                {CONTENT[language].paymentNotice}
             </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto items-stretch">
          
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-stone-100 flex flex-col relative overflow-hidden group transition-all duration-300 h-full">
             <div className="relative h-48 md:h-56 mb-6 md:mb-8 bg-brand-50/50 rounded-2xl overflow-hidden group-hover:bg-brand-50 transition-colors">
                 <OptimizedImage 
                    src={ASSETS.ebook} 
                    alt="Capa do Ebook" 
                    className="w-full h-full object-contain shadow-sm transform group-hover:scale-105 transition-transform duration-500"
                  />
             </div>
             
             <div className="flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-[10px] font-bold uppercase tracking-wide self-start mb-4">
                    <BookOpen size={12} /> {t.ebook.badge}
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-stone-900 mb-3 leading-tight">{t.ebook.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 md:mb-8 flex-1">
                    {t.ebook.desc}
                </p>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    onClick={handleBuyEbook}
                    fullWidth
                    className="border-stone-200 text-stone-600 hover:bg-stone-50 hover:text-stone-900 hover:border-stone-300 text-sm"
                  >
                    {t.ebook.btn} <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </div>
             </div>
          </div>

          <div className="bg-stone-900 text-white rounded-3xl p-1 shadow-2xl flex flex-col relative overflow-hidden group transform md:-translate-y-4 z-10 h-full mt-4 md:mt-0">
             <div className="absolute inset-0 bg-gradient-to-b from-gold-400 to-brand-900 rounded-3xl p-[1px] opacity-30"></div>
             
             <div className="bg-stone-900 rounded-[22px] p-6 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
               <div className="relative h-48 md:h-56 mb-6 md:mb-8 bg-stone-800 rounded-2xl overflow-hidden border border-stone-700/50">
                   <OptimizedImage 
                      src={ASSETS.retinol} 
                      alt="Kit Retinol" 
                      className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                         <span className="text-gold-400 font-serif italic text-lg flex items-center gap-2">
                           <Sparkles size={16} /> Premium Care
                         </span>
                    </div>
               </div>

               <div className="flex-1 flex flex-col relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-400 rounded-full text-[10px] font-bold uppercase tracking-wide self-start mb-4">
                      <Sparkles size={12} /> {t.kit.badge}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">{t.kit.title}</h3>
                  <p className="text-stone-300 text-sm leading-relaxed mb-6">
                      {t.kit.desc}
                  </p>
                  <ul className="space-y-3 mb-8 bg-stone-800/40 p-4 md:p-5 rounded-xl border border-stone-700/50 backdrop-blur-sm">
                      {t.kit.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-stone-200">
                              <Check size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      variant="primary" 
                      onClick={() => handleOrder('kit_retinol')}
                      fullWidth
                      className="bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-600 hover:to-brand-500 border-none shadow-lg shadow-brand-900/50 py-3 md:py-4 text-sm md:text-base"
                    >
                      {t.kit.btn}
                    </Button>
                  </div>
               </div>
             </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl border border-stone-100 flex flex-col relative overflow-hidden group transition-all duration-300 h-full mt-4 md:mt-0">
             <div className="relative h-48 md:h-56 mb-6 md:mb-8 bg-stone-50 rounded-2xl overflow-hidden p-2">
                 <OptimizedImage 
                    src={ASSETS.products} 
                    alt="Produtos Dra Beleza" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
             </div>

             <div className="flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-[10px] font-bold uppercase tracking-wide self-start mb-4">
                    <ShoppingBag size={12} /> {t.products.badge}
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-stone-900 mb-3 leading-tight">{t.products.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                    {t.products.desc}
                </p>
                <ul className="space-y-2 mb-8">
                  {t.products.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-stone-500">
                        <span className="w-1.5 h-1.5 bg-brand-300 rounded-full"/> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button 
                    variant="primary" 
                    onClick={() => handleOrder('products')}
                    fullWidth
                    className="bg-stone-800 hover:bg-stone-700 shadow-stone-200 text-sm"
                  >
                    {t.products.btn}
                  </Button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};