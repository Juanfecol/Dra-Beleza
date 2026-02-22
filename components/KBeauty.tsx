import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, MessageCircle, LogIn, Gift } from 'lucide-react';
import { Button } from './Button';
import { ASSETS, KBEAUTY_COMMUNITY_URL, getOptimizedUrl } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';

export const KBeauty: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].kbeauty;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  
  const handleJoinCommunity = () => {
    window.open(KBEAUTY_COMMUNITY_URL, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.warn("K-Beauty Video autoplay failed", error));
      }
    }
  }, [videoError]);

  return (
    <section id="k-beauty" className="py-16 md:py-20 bg-gradient-to-r from-pink-50 to-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6 animate-on-scroll">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-brand-200/40 transition-all duration-500 overflow-hidden group border border-stone-100">
          
          <div className="w-full md:w-1/2 p-0 h-[300px] md:h-auto md:min-h-[500px] overflow-hidden relative bg-stone-100">
            {videoError || !ASSETS.kbeautyVideo ? (
              <OptimizedImage 
                src={ASSETS.kbeauty}
                alt="K-Beauty"
                className="w-full h-full object-cover object-top absolute inset-0"
              />
            ) : (
              <video 
                key={ASSETS.kbeautyVideo}
                ref={videoRef}
                src={ASSETS.kbeautyVideo}
                poster={getOptimizedUrl(ASSETS.kbeauty, 800)}
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/5 transition-colors duration-700 pointer-events-none" />
          </div>

          <div className="w-full md:w-1/2 p-8 md:p-12">
            <div className="flex items-center gap-2 text-brand-600 mb-4">
              <Sparkles size={18} className="md:w-5 md:h-5" />
              <span className="font-bold tracking-wide text-xs md:text-sm">{t.badge}</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif text-stone-900 mb-4 md:mb-6 leading-tight">
              {t.titleStart} <span className="italic text-brand-600">{t.titleHighlight}</span>
            </h2>
            
            <p className="text-stone-600 mb-6 leading-relaxed text-sm md:text-base">
              {t.desc}
            </p>

            <div className="bg-gradient-to-r from-brand-50 to-white p-4 md:p-5 rounded-xl mb-8 border border-brand-100 shadow-sm">
              <p className="text-xs md:text-sm text-brand-900 font-bold uppercase tracking-wide leading-relaxed flex items-start gap-2">
                 <span className="text-brand-500 mt-0.5">✨</span> {t.promo}
              </p>
              <div className="mt-3 pt-3 border-t border-brand-100">
                  <p className="text-[10px] md:text-xs text-stone-600 flex items-center gap-2">
                      <Gift size={14} className="text-brand-500" /> {t.vipOffer}
                  </p>
              </div>
            </div>

            <Button onClick={handleJoinCommunity} className="px-8 md:px-10 w-full md:w-auto text-sm md:text-base">
              {t.btn} <LogIn className="w-4 h-4 ml-2" />
            </Button>
            
            <p className="mt-6 text-[10px] md:text-xs text-stone-400 flex items-center justify-center md:justify-start gap-2">
              <MessageCircle size={14} /> {t.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};