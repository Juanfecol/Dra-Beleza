import React, { useState, memo } from 'react';
import { CheckCircle2, ChevronDown, Plus, ArrowRight, CreditCard } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';

const ServiceCard = memo(({ service, isOpen, onToggle, onSchedule, tCommon }: any) => {
  return (
    <div 
      onClick={() => onToggle(service.id)}
      className={`bg-white rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden group border ${
        isOpen 
          ? 'ring-2 ring-brand-200 shadow-xl border-brand-200 scale-[1.01] md:scale-[1.02]' 
          : 'shadow-sm hover:shadow-lg border-stone-100'
      }`}
    >
      <div className="p-5 md:p-7">
        <div className="flex items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <div className={`p-3 md:p-3.5 rounded-2xl transition-colors duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-600 text-white shadow-lg shadow-brand-200' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-100'}`}>
              <service.icon size={20} className="md:w-6 md:h-6" strokeWidth={isOpen ? 2.5 : 2} />
            </div>
            <h3 className={`text-base md:text-xl font-serif font-bold transition-colors leading-tight ${isOpen ? 'text-brand-800' : 'text-stone-800 group-hover:text-brand-700'}`}>
              {service.title}
            </h3>
          </div>
          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'bg-brand-50 rotate-180 text-brand-600' : 'text-stone-400 bg-stone-50'}`}>
            <ChevronDown size={16} className="md:w-[18px] md:h-[18px]" />
          </div>
        </div>

        <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
              <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-stone-100">
                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 pb-6">
                  {service.items.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-600 text-sm md:text-base">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-snug font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4 bg-stone-50/50 p-4 rounded-xl border border-stone-100">
                    <div className="text-[10px] md:text-xs text-stone-500 flex items-center gap-2">
                        <CreditCard size={14} className="text-brand-500" /> 
                        <span className="font-medium text-stone-600">{tCommon.paymentNotice}</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSchedule('consultation');
                      }}
                      className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white text-xs md:text-sm font-bold uppercase tracking-wide transition-all py-2.5 px-6 rounded-full shadow-lg shadow-brand-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {tCommon.scheduleBtn} &rarr;
                    </button>
                </div>
              </div>
          </div>
        </div>
        
        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-0 opacity-0' : 'max-h-8 opacity-100 mt-2'}`}>
          <div className="pl-[4.5rem] md:pl-[5.25rem]">
              <span className="text-[10px] md:text-xs font-medium text-stone-400 group-hover:text-brand-500 flex items-center gap-1 transition-colors">
                  <Plus size={10} className="md:w-3 md:h-3" /> {tCommon.viewList}
              </span>
          </div>
        </div>

      </div>
    </div>
  );
});

export const Services: React.FC = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = CONTENT[language].services;
  const common = CONTENT[language];

  const toggleService = (id: string) => {
    setOpenServiceId(prev => prev === id ? null : id);
  };

  const handleSchedule = (interestId: string) => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        const event = new CustomEvent('prefill-contact-form', { 
          detail: { interest: interestId } 
        });
        window.dispatchEvent(event);
      }, 800);
    } else {
       const contactSection = document.getElementById('contact');
       if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-24 bg-brand-50/30 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10 md:mb-14 animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-[10px] md:text-xs bg-white px-3 py-1 rounded-full shadow-sm border border-brand-100">{t.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-4 md:mt-6 mb-4">{t.title}</h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-20 md:mb-28 flex flex-col gap-4 md:gap-5">
          {t.data.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              isOpen={openServiceId === service.id}
              onToggle={toggleService}
              onSchedule={handleSchedule}
              tCommon={{...t, paymentNotice: common.paymentNotice}}
            />
          ))}
        </div>

        <div id="education" className="bg-stone-900 rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 text-white scroll-mt-28 animate-on-scroll shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-900/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="text-center mb-10 md:mb-16 relative z-10">
             <h2 className="text-3xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-400 mb-4 md:mb-6">{t.academyTitle}</h2>
             <p className="text-stone-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
               {t.academyDesc}
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {t.education.map((edu, index) => (
              <div key={index} className={`bg-stone-800/40 p-6 md:p-8 rounded-2xl border border-stone-700/50 backdrop-blur-sm hover:bg-stone-800 hover:border-brand-900/50 transition-all duration-300 hover:-translate-y-2 animate-on-scroll delay-${index * 100} group`}>
                <div className="mb-4 md:mb-6 text-brand-400 group-hover:text-brand-300 transition-colors">
                  <edu.icon size={32} className="md:w-[36px] md:h-[36px]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-stone-100">{edu.title}</h3>
                <p className="text-sm text-stone-400 mb-6 leading-relaxed">{edu.description}</p>
                <ul className="space-y-3">
                  {edu.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-stone-300 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center animate-on-scroll delay-300 relative z-10">
            <Button 
              onClick={() => handleSchedule('academy')}
              className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-xl shadow-brand-900/30 text-base md:text-lg px-8 py-3 md:px-10 md:py-4 rounded-full w-full sm:w-auto"
            >
              {t.academyBtn} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-stone-500 text-[10px] md:text-xs mt-4 md:mt-5 uppercase tracking-wide">{t.academyNote}</p>
          </div>

        </div>

      </div>
    </section>
  );
};