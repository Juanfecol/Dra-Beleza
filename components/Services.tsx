import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronDown, Plus, CreditCard } from 'lucide-react';
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

interface ServicesProps {
  isPreview?: boolean;
}

export const Services: React.FC<ServicesProps> = ({ 
  isPreview = false
}) => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = CONTENT[language].services;
  const common = CONTENT[language];

  const navigate = useNavigate();

  const toggleService = (id: string) => {
    setOpenServiceId(prev => prev === id ? null : id);
  };

  const handleSchedule = (interestId: string) => {
    navigate('/contactos', { state: { interest: interestId } });
  };

  return (
    <section id="services" className={`py-20 md:py-24 bg-brand-50/30 ${!isPreview ? 'scroll-mt-28' : ''}`}>
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
        
        {isPreview && (
          <div className="text-center mb-20">
            <a 
              href="/tratamentos" 
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all"
            >
              Ver todos os tratamentos &rarr;
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
