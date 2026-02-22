import React from 'react';
import { X, Scale, Shield, BookOpen, Building, Cookie } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { LEGAL_INFO } from '../constants';

type ModalType = 'privacy' | 'terms' | 'ral' | 'ers' | 'cookies' | null;

interface LegalModalsProps {
  openModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ openModal, onClose }) => {
  const { language } = useLanguage();
  const t = CONTENT[language].legal;
  const tCookies = CONTENT[language].cookies;
  
  if (!openModal) return null;

  const getModalContent = () => {
    switch (openModal) {
      case 'privacy':
        return {
          title: language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy',
          icon: Shield,
          content: t.privacy
        };
      case 'terms':
        return {
          title: language === 'pt' ? 'Termos e Condições' : 'Terms & Conditions',
          icon: BookOpen,
          content: t.terms
        };
      case 'cookies':
        return {
          title: language === 'pt' ? 'Política de Cookies' : 'Cookie Policy',
          icon: Cookie,
          content: (
            <>
              <p className="mb-4">{tCookies.text}</p>
              <p className="text-sm text-stone-500">
                {language === 'pt' 
                  ? 'Para mais informações detalhadas sobre como tratamos os seus dados, consulte a nossa Política de Privacidade.' 
                  : 'For more detailed information on how we handle your data, please refer to our Privacy Policy.'}
              </p>
            </>
          )
        };
      case 'ral':
        return {
          title: language === 'pt' ? 'Resolução de Litígios (RAL)' : 'Dispute Resolution',
          icon: Scale,
          content: (
            <>
              <p className="mb-4">{LEGAL_INFO.ral[language]}</p>
              <p className="text-sm text-stone-500 mt-2">Lei n.º 144/2015, de 8 de setembro.</p>
            </>
          )
        };
      case 'ers':
        return {
          title: language === 'pt' ? 'Registo ERS' : 'ERS Registration',
          icon: Building,
          content: (
            <>
              <p className="mb-2">{t.ers}</p>
              <p><strong>Registo ERS:</strong> {LEGAL_INFO.ers}</p>
              <p><strong>NIF:</strong> {LEGAL_INFO.nif}</p>
            </>
          )
        };
      default:
        return null;
    }
  };

  const data = getModalContent();
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 transition-colors rounded-full hover:bg-stone-100"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mb-4">
            <data.icon size={24} />
          </div>
          <h3 className="text-2xl font-serif text-stone-900 mb-6">{data.title}</h3>
          <div className="text-stone-600 leading-relaxed text-sm md:text-base text-left w-full bg-stone-50 p-4 rounded-xl border border-stone-100">
            {typeof data.content === 'string' ? <p>{data.content}</p> : data.content}
          </div>
          <button 
            onClick={onClose}
            className="mt-6 text-sm font-bold text-brand-600 hover:text-brand-800 uppercase tracking-wide"
          >
            {language === 'pt' ? 'Fechar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};