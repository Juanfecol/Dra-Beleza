import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { LeadForm } from './LeadForm';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { LegalModals } from './LegalModals';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].contact;
  const [openLegal, setOpenLegal] = useState<'privacy' | 'terms' | 'ral' | 'ers' | 'cookies' | null>(null);

  const handleWhatsAppClick = () => {
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact', {
        content_name: 'Footer WhatsApp Button'
      });
    }
  };

  return (
    <footer id="contact" className="bg-stone-50 pt-16 md:pt-20 pb-10 border-t border-stone-200 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6 animate-on-scroll">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-12 md:mb-16">
          
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-3 md:mb-4">{t.title}</h2>
              <p className="text-stone-600 text-base md:text-lg">
                {t.desc}
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{t.addressTitle}</h4>
                  <p className="text-stone-600 text-sm md:text-base">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{t.phoneTitle}</h4>
                  <a href={CONTACT_INFO.whatsappLink} className="text-stone-600 hover:text-brand-600 transition-colors text-sm md:text-base">
                    {CONTACT_INFO.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-white p-3 rounded-full shadow-sm text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  <Instagram />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{t.instaTitle}</h4>
                  <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noreferrer" className="text-stone-600 hover:text-brand-600 transition-colors text-sm md:text-base">
                    {CONTACT_INFO.instagram}
                  </a>
                </div>
              </div>
            </div>

            <a 
              href={CONTACT_INFO.whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20BD5C] transition-transform hover:scale-105 shadow-lg shadow-green-200 text-sm md:text-base"
            >
              <MessageCircle /> {t.whatsappBtn}
            </a>
          </div>

          <div className="lg:w-1/2">
            <LeadForm />
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-500">
            
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Dra. Beleza. {t.footerRights}</p>
              <p className="mt-1 text-xs">{t.footerTagline}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <button onClick={() => setOpenLegal('terms')} className="hover:text-brand-600 underline decoration-stone-300 underline-offset-2">
                {t.links.terms}
              </button>
              <button onClick={() => setOpenLegal('privacy')} className="hover:text-brand-600 underline decoration-stone-300 underline-offset-2">
                {t.links.privacy}
              </button>
               <button onClick={() => setOpenLegal('cookies')} className="hover:text-brand-600 underline decoration-stone-300 underline-offset-2">
                {t.links.cookies}
              </button>
              <button onClick={() => setOpenLegal('ral')} className="hover:text-brand-600 underline decoration-stone-300 underline-offset-2">
                {t.links.ral}
              </button>
              <button onClick={() => setOpenLegal('ers')} className="hover:text-brand-600 underline decoration-stone-300 underline-offset-2">
                Entidade Reguladora
              </button>
            </div>

          </div>
        </div>
      </div>

      <LegalModals openModal={openLegal} onClose={() => setOpenLegal(null)} />
    </footer>
  );
};