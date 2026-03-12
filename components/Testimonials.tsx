
import React, { useRef, useState, useEffect } from 'react';
import { ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { Play, Volume2, VolumeX } from 'lucide-react';

const VideoItem: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      setIsMuted(false);
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented", error);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      setIsPlaying(false);
      setIsMuted(true);
      videoRef.current.muted = true;
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  return (
    <div 
      className="relative w-[240px] h-[420px] md:w-[280px] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl border border-stone-200 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-20 bg-black mx-3 md:mx-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
      />
      
      {/* Overlay when not playing */}
      <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
           <Play className="fill-white text-white ml-1" size={18} />
        </div>
      </div>

      {/* Sound Indicator */}
      <div className={`absolute bottom-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].testimonials;
  const videos = [...ASSETS.testimonials, ...ASSETS.testimonials]; // Duplicate for infinite scroll

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-stone-50 overflow-hidden scroll-mt-28">
       <div className="container mx-auto px-6 mb-10 md:mb-12 text-center animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-[10px] md:text-xs border border-brand-100 px-3 py-1 rounded-full bg-white shadow-sm mb-4 inline-block">{t.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">
            {t.title} <span className="text-brand-600 italic">{t.titleHighlight}</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto text-sm md:text-base">{t.desc}</p>
       </div>

       <div className="relative w-full">
         {/* Gradient Masks */}
         <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>

         <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-8 md:py-10">
            {videos.map((src, index) => (
              <VideoItem key={`${index}-${src}`} src={src} />
            ))}
         </div>
       </div>
    </section>
  );
};