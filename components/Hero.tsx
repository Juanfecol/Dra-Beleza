import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ASSETS, getOptimizedUrl } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate();

  const handleScheduleClick = () => {
    navigate('/contactos');
  };

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay prevented by browser:", error);
        });
      }
    }
  }, [videoError]);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-stone-50 to-white opacity-70" />
      
      <div className="absolute top-0 right-0 -z-10 opacity-40 translate-x-1/4 -translate-y-1/4 animate-float mix-blend-multiply">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-brand-200 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-30 -translate-x-1/4 translate-y-1/4 animate-float-delayed mix-blend-multiply">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gold-400/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          <div className="lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left z-10 order-2 lg:order-1">
            <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-[10px] md:text-sm font-bold tracking-wider uppercase mb-1 md:mb-2 animate-on-scroll shadow-sm">
              {t.badge}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-stone-900 leading-[1.1] animate-on-scroll delay-100 tracking-tight break-words">
              {t.titleStart} <br className="hidden lg:block" />
              <span className="text-gradient-shimmer block lg:inline">{t.titleHighlight}</span> {t.titleEnd}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-on-scroll delay-200 font-light">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-on-scroll delay-300 pt-2">
              <Button onClick={handleScheduleClick} className="group text-sm md:text-base w-full sm:w-auto">
                {t.ctaMain} <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" href="/tratamentos" className="text-sm md:text-base w-full sm:w-auto">
                {t.ctaSecondary}
              </Button>
            </div>
            
            <div className="pt-6 md:pt-8 flex items-center justify-center lg:justify-start gap-6 md:gap-12 text-sm text-stone-500 animate-on-scroll delay-500">
              <div className="text-center lg:text-left">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-600 mb-1">+1000</span>
                <span className="uppercase tracking-wide text-[10px] md:text-xs font-medium">{t.stats.patients}</span>
              </div>
              <div className="w-px h-10 md:h-12 bg-stone-200"></div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl md:text-3xl font-serif font-bold text-brand-600 mb-1">6 {language === 'pt' ? 'Anos' : 'Years'}</span>
                <span className="uppercase tracking-wide text-[10px] md:text-xs font-medium">{t.stats.experience}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative animate-on-scroll delay-200 order-1 lg:order-2 perspective-1000 w-full px-4 md:px-0">
             <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white aspect-[4/5] w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-md transform transition-transform duration-700 hover:scale-[1.02] group bg-stone-200">
                {videoError || !ASSETS.heroVideo ? (
                  <OptimizedImage
                    src={ASSETS.hero}
                    alt="Dra Beleza Hero"
                    className="w-full h-full object-cover object-top"
                    priority={true}
                  />
                ) : (
                  <video 
                    key={ASSETS.heroVideo}
                    ref={videoRef}
                    src={ASSETS.heroVideo}
                    poster={getOptimizedUrl(ASSETS.hero, 800)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onError={() => setVideoError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                )}
                
                <div className="absolute inset-0 bg-brand-900/5 pointer-events-none" />
                
                <div className="absolute bottom-6 md:bottom-8 left-0 w-full flex justify-center hidden md:flex z-20 px-4 pointer-events-none">
                   <div className="w-full max-w-[95%] md:max-w-[90%] glass-panel p-4 md:p-5 rounded-2xl shadow-lg animate-float backdrop-blur-md bg-white/60 border-white/40 pointer-events-auto">
                      <p className="text-stone-800 font-serif italic text-center leading-relaxed text-xs md:text-sm lg:text-base">
                        {t.quote}
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};