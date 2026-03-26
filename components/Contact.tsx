import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO, ASSETS } from '../constants';
import { Phone, MapPin, Instagram, MessageCircle, Calendar } from 'lucide-react';
import { LeadForm } from './LeadForm';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { LegalModals } from './LegalModals';
import { trackEvent } from '../src/services/pixelService';

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = CONTENT[language].contact;
  const [openLegal, setOpenLegal] = useState<'privacy' | 'terms' | 'ral' | 'ers' | 'cookies' | null>(null);

  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    trackEvent('Contact', {
      content_name: 'Contact Section WhatsApp Button'
    });
  };

  return (
    <section id="contact" className="bg-stone-50 py-16 md:py-24 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6 animate-on-scroll">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          <div className="lg:w-1/2 space-y-6 md:space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-3 md:mb-4">{t.title}</h2>
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

            <div className="pt-4 flex flex-wrap gap-3">
              <a 
                href={CONTACT_INFO.whatsappLink} 
                target="_blank" 
                rel="noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#20BD5C] transition-transform hover:scale-105 shadow-lg shadow-green-200 text-sm md:text-base"
              >
                <MessageCircle /> {t.whatsappBtn}
              </a>
              <button 
                onClick={() => {
                  trackEvent('Contact', { content_name: 'Contact Section Agendar Online Button' });
                  navigate('/contactos');
                }}
                className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-full font-bold hover:bg-brand-700 transition-transform hover:scale-105 shadow-lg shadow-brand-200 text-sm md:text-base"
              >
                <Calendar size={18} /> Agendar Online
              </button>
            </div>

            {/* Simple Image Integration */}
            <div className="pt-8 block">
              <img 
                src={ASSETS.contact} 
                alt="Dra. Beleza" 
                className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-stone-900 mb-2">Envie uma mensagem</h3>
              <p className="text-stone-500 text-sm">Entraremos em contacto o mais breve possível.</p>
            </div>
            <LeadForm />
          </div>
        </div>
      </div>

      <LegalModals openModal={openLegal} onClose={() => setOpenLegal(null)} />
    </section>
  );
};
