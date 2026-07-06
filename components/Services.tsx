import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { CalendlyButton } from './CalendlyButton';
import { OptimizedImage } from './OptimizedImage';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Syringe, Scissors, HeartHandshake } from 'lucide-react';

const ServiceModal = ({ service, isOpen, onClose, tCommon, language }: any) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="bg-white rounded-[32px] w-full max-w-2xl my-8 overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-48 md:h-56 flex-shrink-0">
          <OptimizedImage src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-stone-900/20 to-transparent" />
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 p-2.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-200 shadow-md"
          >
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-6 md:left-8 pr-12">
            <span className="text-brand-300 text-xs font-bold uppercase tracking-widest bg-stone-900/40 backdrop-blur-sm px-3 py-1 rounded-full">
              {language === 'pt' ? 'Protocolo' : 'Protocol'}
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1 drop-shadow-sm">{service.title}</h3>
          </div>
        </div>

        {/* Scrollable Treatments Grid */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 bg-stone-50/50">
          <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
            {language === 'pt' ? 'Tratamentos Disponíveis' : 'Available Treatments'} ({service.items.length})
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.items.map((item: { title: string, image: string }, idx: number) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
              >
                {/* Treatment Thumbnail */}
                <div className="h-28 w-full overflow-hidden relative">
                  <OptimizedImage 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                {/* Treatment details */}
                <div className="p-4 flex-1 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-800 font-serif text-sm font-semibold leading-snug group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Call to Action Footer */}
        <div className="p-6 border-t border-stone-100 bg-white flex-shrink-0 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-stone-500 font-medium text-center sm:text-left">
            {language === 'pt' 
              ? 'Todos os procedimentos são adaptados à sua saúde celular e objetivos.' 
              : 'All procedures are fully tailored to your cellular health and goals.'}
          </p>
          <CalendlyButton 
            className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all text-sm"
            text={tCommon.scheduleBtn}
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC<{ isPreview?: boolean }> = ({ isPreview = false }) => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const { language } = useLanguage();
  const t = CONTENT[language].services;

  return (
    <section id="services" className={`py-20 md:py-28 bg-stone-50 ${!isPreview ? 'scroll-mt-28' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs bg-white px-4 py-1.5 rounded-full shadow-sm border border-brand-100">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mt-6 mb-4">
            {t.title}
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {t.data.map((service) => {
            // Pick matching icon
            let IconComponent = Syringe;
            if (service.id === 'skincare') IconComponent = Sparkles;
            else if (service.id === 'capilar') IconComponent = Scissors;
            else if (service.id === 'consultoria') IconComponent = HeartHandshake;

            return (
              <motion.div 
                key={service.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100/80 flex flex-col h-full group cursor-pointer"
              >
                {/* Category Cover Image with Zoom Suave */}
                <div className="h-60 overflow-hidden relative flex-shrink-0">
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/5 transition-all duration-500" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-stone-900 shadow-sm flex items-center gap-1.5">
                    <IconComponent size={12} className="text-brand-600" />
                    <span>
                      {service.id === 'facial-corporal' 
                        ? (language === 'pt' ? 'Corporal & Facial' : 'Body & Facial') 
                        : service.id === 'skincare' 
                          ? (language === 'pt' ? 'Pele & Brilho' : 'Skin & Glow') 
                          : service.id === 'capilar' 
                            ? (language === 'pt' ? 'Capilar' : 'Hair') 
                            : (language === 'pt' ? 'Consulta' : 'Consulting')}
                    </span>
                  </div>
                </div>

                {/* Content / Info Card Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Selected treatment highlights preview */}
                    <div className="space-y-2 mt-2 mb-6">
                      {service.items.slice(0, 3).map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-stone-500 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      ))}
                      {service.items.length > 3 && (
                        <p className="text-brand-600 font-bold text-[11px] uppercase tracking-wider pt-1">
                          + {service.items.length - 3} {language === 'pt' ? 'outros procedimentos' : 'other procedures'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="space-y-3 mt-auto pt-4 border-t border-stone-100">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="w-full text-center text-stone-600 hover:text-stone-900 font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-stone-200 hover:border-stone-400 transition-all duration-300"
                    >
                      {language === 'pt' ? 'Ver Todos os Tratamentos' : 'View All Treatments'}
                    </button>

                    <CalendlyButton 
                      className="w-full bg-stone-950 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                      text={language === 'pt' ? 'Agendar este tratamento' : 'Schedule this treatment'}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Premium Modal View */}
        <AnimatePresence>
          {selectedService && (
            <ServiceModal 
              service={selectedService} 
              isOpen={!!selectedService} 
              onClose={() => setSelectedService(null)}
              tCommon={{ scheduleBtn: t.scheduleBtn }}
              language={language}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
