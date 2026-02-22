import React from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';

interface AboutProps {
  isPreview?: boolean;
}

export const About: React.FC<AboutProps> = ({ isPreview = false }) => {
  const { language } = useLanguage();
  const t = CONTENT[language].about;
  
  return (
    <section id="about" className={`py-20 bg-white ${!isPreview ? 'scroll-mt-28' : ''}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-1/2 animate-on-scroll flex justify-center">
             <div className="relative group w-full max-w-md">
                <div className="absolute inset-0 bg-brand-900/5 rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 border border-brand-900/10"></div>
                <OptimizedImage 
                  src={ASSETS.about.portrait}
                  sizes="(max-width: 768px) 90vw, 40vw"
                  alt="Dra. Beleza Portrait" 
                  width="600"
                  height="800"
                  className="rounded-[2rem] shadow-2xl w-full h-auto aspect-[3/4] object-cover object-top bg-stone-100 transform transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-100 rounded-full blur-xl opacity-50 -z-10 pointer-events-none"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6 animate-on-scroll delay-200">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
              {t.titleStart} <span className="text-brand-600">{t.titleHighlight}</span>
            </h2>
            
            <div className="space-y-4 text-stone-600 leading-relaxed text-lg">
              <p dangerouslySetInnerHTML={{ __html: t.p1.replace('Dra. Beleza', '<strong>Dra. Beleza</strong>') }} />
              {!isPreview && (
                <>
                  <p>{t.p2}</p>
                  <p className="border-l-4 border-brand-400 pl-4 italic text-stone-700 my-6 bg-brand-50/50 p-4 rounded-r-lg">
                    {t.quote}
                  </p>
                  <p>{t.p3}</p>
                </>
              )}
              {isPreview && (
                <div className="pt-4">
                  <a 
                    href="/sobre" 
                    className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Saber mais sobre a Dra. Beleza &rarr;
                  </a>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              <div>
                <p className="text-4xl font-serif font-bold text-stone-200">08</p>
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wide">{t.stats.totalExp}</p>
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-stone-200">05</p>
                <p className="text-sm text-stone-500 font-medium uppercase tracking-wide">{t.stats.history}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};