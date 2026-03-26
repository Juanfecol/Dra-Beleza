import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Instagram, CalendarDays, Map as MapIcon, CreditCard } from 'lucide-react';
import { Button } from './Button';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';

export const Events: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].events;
  const [activeMap, setActiveMap] = useState<'lisboa' | 'madeira' | null>(null);
  const navigate = useNavigate();

  const handleEventClick = (eventId: string) => {
    navigate('/contactos', { state: { interest: eventId } });
  };

  const toggleMap = (location: 'lisboa' | 'madeira') => {
    setActiveMap(prev => prev === location ? null : location);
  };

  return (
    <section id="events" className="py-20 md:py-24 relative overflow-hidden scroll-mt-28 bg-stone-900">
       <div className="absolute inset-0 z-0">
        <OptimizedImage 
            src={ASSETS.events.bg} 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900 via-stone-900/95 to-stone-900"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12 animate-on-scroll">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-900/50 text-brand-300 font-bold tracking-widest uppercase text-[10px] md:text-xs border border-brand-500/20 backdrop-blur-sm mb-4 md:mb-6">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white mb-4 md:mb-6">{t.title}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-8 md:mb-12 -mt-2 md:-mt-4 animate-on-scroll opacity-90">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-800/50 rounded-full border border-stone-700 text-[10px] md:text-xs font-medium text-stone-300 backdrop-blur-sm">
                <CreditCard size={14} className="text-brand-400" />
                {CONTENT[language].paymentNotice}
             </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8 md:mb-12 animate-on-scroll opacity-80">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-stone-600"></div>
            <div className="flex items-center gap-3 text-brand-200 font-serif text-lg md:text-xl tracking-wide">
                <CalendarDays className="w-5 h-5" /> {t.calendarTitle}
            </div>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-stone-600"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          
          <div className="relative bg-stone-800 rounded-3xl overflow-hidden shadow-2xl animate-on-scroll delay-100 group flex flex-col border border-brand-900/30 hover:border-brand-500/50 transition-colors duration-300 ring-1 ring-white/5">
            <div className="relative w-full overflow-hidden p-4">
                <div className="flex overflow-hidden gap-4 snap-x snap-mandatory scrollbar-hide">
                    <motion.div 
                        className="flex gap-4"
                        animate={{ x: ["0%", "-66.66%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...ASSETS.events.lisboa, ...ASSETS.events.lisboa, ...ASSETS.events.lisboa].map((src, index) => (
                            <div key={`${src}-${index}`} className="flex-none w-48 snap-center">
                                <OptimizedImage 
                                    src={src} 
                                    alt={`Evento Lisboa ${index + 1}`} 
                                    className="w-full aspect-[9/16] object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute top-8 left-8 z-20">
                    <div className="inline-flex items-center gap-2 bg-brand-900/80 backdrop-blur px-3 py-1.5 rounded-full text-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-wide border border-brand-500/20">
                        <MapPin size={12} className="text-brand-400" /> {t.lisboa.location}
                    </div>
                </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-serif text-white leading-tight max-w-[75%]">{t.lisboa.title}</h3>
                    <div className="bg-brand-900/30 border border-brand-800/50 p-2 rounded-xl text-center min-w-[60px] md:min-w-[70px] backdrop-blur-sm">
                        <span className="block text-[10px] text-brand-300 uppercase tracking-wider">{t.lisboa.month}</span>
                        <span className="block font-bold text-white text-lg md:text-xl">{t.lisboa.day}</span>
                    </div>
                </div>
                
                <p className="text-stone-400 text-sm mb-4 flex items-center gap-3 font-medium">
                     <Calendar size={16} className="text-brand-500" /> {t.lisboa.date}
                </p>

                 <a 
                    href="#"
                    onClick={(e) => {e.preventDefault(); handleEventClick('event_lisboa')}}
                    className="text-xs text-stone-500 hover:text-brand-400 flex items-center gap-2 mb-6 transition-colors w-fit"
                >
                    <Instagram size={14} /> {t.lisboa.info} &rarr;
                </a>

                <div className="mt-auto grid grid-cols-[1fr_auto] gap-3">
                  <Button 
                      variant="primary" 
                      onClick={() => handleEventClick('event_lisboa')}
                      className="w-full shadow-lg shadow-brand-900/20 text-sm md:text-base"
                  >
                      {t.lisboa.btn} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <button 
                    onClick={() => toggleMap('lisboa')}
                    className={`px-4 rounded-full border transition-all flex items-center justify-center ${activeMap === 'lisboa' ? 'bg-stone-700 border-stone-600 text-white' : 'border-stone-600 text-stone-400 hover:text-white hover:border-stone-400'}`}
                    aria-label={t.mapButton}
                  >
                    <MapIcon size={18} />
                  </button>
                </div>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeMap === 'lisboa' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
               {activeMap === 'lisboa' && (
                 <div className="bg-stone-900 border-t border-stone-700">
                   <iframe 
                     width="100%" 
                     height="300" 
                     style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
                     loading="lazy" 
                     title="Mapa Lisboa"
                     srcDoc={`<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=${encodeURIComponent(t.lisboa.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`}
                   ></iframe>
                 </div>
               )}
            </div>
          </div>

          <div className="relative bg-stone-800 rounded-3xl overflow-hidden shadow-2xl animate-on-scroll delay-200 group flex flex-col border border-brand-900/30 hover:border-brand-500/50 transition-colors duration-300 ring-1 ring-white/5">
            <div className="relative w-full overflow-hidden p-4">
                <div className="flex overflow-hidden gap-4 snap-x snap-mandatory scrollbar-hide">
                    <motion.div 
                        className="flex gap-4"
                        animate={{ x: ["0%", "-66.66%"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...ASSETS.events.madeira, ...ASSETS.events.madeira, ...ASSETS.events.madeira].map((src, index) => (
                            <div key={`${src}-${index}`} className="flex-none w-48 snap-center">
                                <OptimizedImage 
                                    src={src} 
                                    alt={`Evento Madeira ${index + 1}`} 
                                    className="w-full aspect-[9/16] object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="absolute top-8 left-8 z-20">
                    <div className="inline-flex items-center gap-2 bg-brand-900/80 backdrop-blur px-3 py-1.5 rounded-full text-brand-100 text-[10px] md:text-xs font-bold uppercase tracking-wide border border-brand-500/20">
                        <MapPin size={12} className="text-brand-400" /> {t.madeira.location}
                    </div>
                </div>
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col relative z-10">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-serif text-white leading-tight max-w-[75%]">{t.madeira.title}</h3>
                    <div className="bg-brand-900/30 border border-brand-800/50 p-2 rounded-xl text-center min-w-[60px] md:min-w-[70px] backdrop-blur-sm">
                        <span className="block text-[10px] text-brand-300 uppercase tracking-wider">{t.madeira.month}</span>
                        <span className="block font-bold text-white text-lg md:text-xl">{t.madeira.day}</span>
                    </div>
                </div>
                
                <p className="text-stone-400 text-sm mb-4 flex items-center gap-3 font-medium">
                     <Calendar size={16} className="text-brand-500" /> {t.madeira.date}
                </p>

                <a 
                    href="#"
                    onClick={(e) => {e.preventDefault(); handleEventClick('event_madeira')}}
                    className="text-xs text-stone-500 hover:text-brand-400 flex items-center gap-2 mb-6 transition-colors w-fit"
                >
                    <Instagram size={14} /> {t.madeira.info} &rarr;
                </a>

                <div className="mt-auto grid grid-cols-[1fr_auto] gap-3">
                  <Button 
                      variant="primary" 
                      onClick={() => handleEventClick('event_madeira')}
                      className="w-full shadow-lg shadow-brand-900/20 text-sm md:text-base"
                  >
                      {t.madeira.btn} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <button 
                    onClick={() => toggleMap('madeira')}
                    className={`px-4 rounded-full border transition-all flex items-center justify-center ${activeMap === 'madeira' ? 'bg-stone-700 border-stone-600 text-white' : 'border-stone-600 text-stone-400 hover:text-white hover:border-stone-400'}`}
                    aria-label={t.mapButton}
                  >
                    <MapIcon size={18} />
                  </button>
                </div>
            </div>

             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeMap === 'madeira' ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
               {activeMap === 'madeira' && (
                 <div className="bg-stone-900 border-t border-stone-700">
                    <iframe 
                      width="100%" 
                      height="300" 
                      style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
                      loading="lazy" 
                      title="Mapa Madeira"
                      srcDoc={`<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=${encodeURIComponent(t.madeira.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>`}
                    ></iframe>
                 </div>
               )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};