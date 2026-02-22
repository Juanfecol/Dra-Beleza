import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { OptimizedImage } from './OptimizedImage';

// Mock Data for Journal
const JOURNAL_DATA = [
  {
    id: 1,
    date: 'OUT 24, 2024',
    title: { pt: 'O Futuro da Estética Regenerativa', en: 'The Future of Regenerative Aesthetics' },
    category: { pt: 'Ciência', en: 'Science' },
    image: 'https://images.unsplash.com/photo-1612862061902-6014e7a3390c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    date: 'NOV 02, 2024',
    title: { pt: 'Pele de Porcelana: Mitos e Verdades', en: 'Porcelain Skin: Myths and Truths' },
    category: { pt: 'Skincare', en: 'Skincare' },
    image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'NOV 15, 2024',
    title: { pt: 'Exossomos: A Revolução Celular', en: 'Exosomes: The Cellular Revolution' },
    category: { pt: 'Inovação', en: 'Innovation' },
    image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=800&auto=format&fit=crop'
  }
];

export const Journal: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-32 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-on-scroll">
          <div>
            <span className="block text-brand-500 font-bold tracking-widest uppercase text-xs mb-4">Journal</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800">
              {language === 'pt' ? 'Artigos & Novidades' : 'News & Articles'}
            </h2>
          </div>
          <button className="hidden md:block text-xs font-bold uppercase tracking-widest text-stone-800 hover:text-brand-500 transition-colors border-b border-stone-800 hover:border-brand-500 pb-1 mt-6 md:mt-0">
            {language === 'pt' ? 'Ver Todos' : 'View All'}
          </button>
        </div>

        <div className="flex flex-col border-t border-stone-200">
          {JOURNAL_DATA.map((item) => (
            <div 
              key={item.id} 
              className="group py-10 border-b border-stone-200 flex flex-col md:flex-row gap-8 md:items-center justify-between cursor-pointer hover:bg-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 animate-on-scroll"
            >
              <div className="md:w-1/4">
                <span className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-1">{item.category[language]}</span>
                <span className="block text-xs text-stone-400 font-medium tracking-wide">{item.date}</span>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-serif text-stone-800 group-hover:text-brand-500 transition-colors duration-300">
                  {item.title[language]}
                </h3>
              </div>

              <div className="md:w-1/4 flex justify-end items-center gap-6">
                <div className="w-24 h-16 overflow-hidden rounded opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hidden lg:block">
                  <OptimizedImage src={item.image} alt={item.title[language]} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-stone-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden text-center">
            <button className="text-xs font-bold uppercase tracking-widest text-stone-800 hover:text-brand-500 transition-colors border-b border-stone-800 pb-1">
                {language === 'pt' ? 'Ver Todos' : 'View All'}
            </button>
        </div>

      </div>
    </section>
  );
};