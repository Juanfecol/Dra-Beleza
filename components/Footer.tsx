import React, { useState } from 'react';
import { CONTACT_INFO, ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { LegalModals } from './LegalModals';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].contact;
  const [openLegal, setOpenLegal] = useState<'privacy' | 'terms' | 'ral' | 'ers' | 'cookies' | null>(null);

  return (
    <footer className="bg-stone-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        
        {/* Top Logo & Tagline */}
        <div className="flex flex-col items-center text-center mb-12">
          <img 
            src={ASSETS.logo} 
            alt="Dra. Beleza" 
            className="h-10 md:h-12 w-auto object-contain mb-8 brightness-0 invert opacity-90"
            referrerPolicy="no-referrer"
          />
          
          <h2 className="text-2xl md:text-3xl font-serif max-w-3xl leading-tight tracking-tight text-brand-50">
            {language === 'pt' ? (
              <>
                Criamos <span className="italic font-light text-brand-200">beleza regenerativa</span>, <br className="hidden md:block" />
                combinando ciência médica com <span className="italic font-light text-brand-200">naturalidade</span> absoluta.
              </>
            ) : (
              <>
                We create <span className="italic font-light text-brand-200">regenerative beauty</span>, <br className="hidden md:block" />
                combining medical science with absolute <span className="italic font-light text-brand-200">naturalness</span>.
              </>
            )}
          </h2>
        </div>

        {/* Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-t border-white/10 pt-10">
          
          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">REDES SOCIAIS</h3>
            <div className="flex gap-3">
              <a 
                href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-200 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-200 hover:bg-brand-500 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">LOCALIZAÇÃO</h3>
            <p className="text-xs md:text-sm font-medium max-w-[220px] text-stone-300">
              {CONTACT_INFO.address}
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4">CONTACTOS</h3>
            <div className="space-y-1">
              <a href={`mailto:${CONTENT[language].form.email || 'geral@drabeleza.pt'}`} className="block text-xs md:text-sm font-bold text-brand-200 hover:text-brand-400 transition-colors">
                geral@drabeleza.pt
              </a>
              <p className="text-xs md:text-sm font-bold text-stone-200">
                {CONTACT_INFO.phone}
              </p>
              <p className="text-xs md:text-sm font-bold text-stone-200">
                WhatsApp: {CONTACT_INFO.whatsapp}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="border-t border-white/5 pt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[9px] uppercase tracking-widest font-bold text-white/30">
          <button onClick={() => setOpenLegal('terms')} className="hover:text-brand-300 transition-colors">
            {t.links.terms}
          </button>
          <button onClick={() => setOpenLegal('cookies')} className="hover:text-brand-300 transition-colors">
            {t.links.cookies}
          </button>
          <button onClick={() => setOpenLegal('privacy')} className="hover:text-brand-300 transition-colors">
            {t.links.privacy}
          </button>
        </div>

      </div>

      <LegalModals openModal={openLegal} onClose={() => setOpenLegal(null)} />
    </footer>
  );
};
