import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Sparkles, ShoppingBag, ArrowRight, Activity, Calendar, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { ATOMY_PRODUCTS } from '../src/data/products';
import { motion, AnimatePresence } from 'motion/react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  type: 'treatment' | 'product' | 'navigation';
  title: string;
  description: string;
  targetUrl: string;
  categoryName?: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      // Prevent body scroll when search is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const t = CONTENT[language];

  // 1. Build Search Indexes
  const itemsIndex: SearchResult[] = [];

  // Add navigation/pages
  const navTitlesPt: Record<string, string> = {
    home: 'Início (Página Inicial)',
    about: 'Sobre Giselle Beleza / História',
    stories: 'Histórias / Testemunhos de Pacientes',
    services: 'Tratamentos & Procedimentos Clínicos',
    academy: 'Academy / Mentoria de Alta Performance',
    events: 'Eventos / Calendário Clínico',
    shop: 'Loja Online / Produtos & E-book',
    contact: 'Contactos / Fale Connosco / WhatsApp'
  };

  const navTitlesEn: Record<string, string> = {
    home: 'Home (Main Page)',
    about: 'About Giselle Beleza / History',
    stories: 'Stories / Real Patient Testimonials',
    services: 'Treatments & Clinical Procedures',
    academy: 'Academy / High Performance Mentoring',
    events: 'Events / Clinical Calendar',
    shop: 'Shop Online / Products & Ebook',
    contact: 'Contacts / Get in Touch / WhatsApp'
  };

  const navLinks = [
    { id: 'home', url: '/' },
    { id: 'about', url: '/sobre' },
    { id: 'stories', url: '/historias' },
    { id: 'services', url: '/tratamentos' },
    { id: 'academy', url: '/tratamentos#academy' },
    { id: 'events', url: '/' }, // Events are in Home
    { id: 'shop', url: '/loja' },
    { id: 'contact', url: '/contactos' }
  ];

  navLinks.forEach(link => {
    const title = language === 'pt' ? navTitlesPt[link.id] : navTitlesEn[link.id];
    itemsIndex.push({
      id: `nav-${link.id}`,
      type: 'navigation',
      title: title || link.id,
      description: language === 'pt' ? 'Secção ou página institucional' : 'Institutional section or page',
      targetUrl: link.url
    });
  });

  // Add Treatments
  const servicesData = t.services.data;
  servicesData.forEach((cat: any) => {
    cat.items.forEach((item: any) => {
      itemsIndex.push({
        id: `treatment-${item.title}`,
        type: 'treatment',
        title: item.title,
        description: cat.title,
        targetUrl: `/tratamentos?treatment=${encodeURIComponent(item.title)}`,
        categoryName: cat.title
      });
    });
  });

  // Add Academy technical and mentoring courses
  const educationData = t.services.education || [];
  educationData.forEach((course: any, idx: number) => {
    itemsIndex.push({
      id: `academy-${idx}`,
      type: 'navigation',
      title: `Academy: ${course.title}`,
      description: course.description,
      targetUrl: '/tratamentos'
    });
  });

  // Add Products
  ATOMY_PRODUCTS.forEach(p => {
    itemsIndex.push({
      id: `product-${p.id}`,
      type: 'product',
      title: p.name,
      description: p.description,
      targetUrl: `/loja`
    });
  });

  // Filter Results
  const getFilteredResults = (): SearchResult[] => {
    if (!query.trim()) return [];
    
    const searchLower = query.toLowerCase();
    
    // Exact or loose match
    return itemsIndex.filter(item => 
      item.title.toLowerCase().includes(searchLower) || 
      item.description.toLowerCase().includes(searchLower)
    ).slice(0, 8); // Max 8 suggestions
  };

  const results = getFilteredResults();

  const handleSelectResult = (result: SearchResult) => {
    onClose();
    setQuery('');
    
    if (result.targetUrl.startsWith('/')) {
      navigate(result.targetUrl);
    } else {
      window.location.hash = result.targetUrl;
    }
  };

  // Popular searches
  const popularSearches = language === 'pt' 
    ? [
        { label: 'Toxina Botulínica', url: '/tratamentos?treatment=Toxina%20Botul%C3%ADnica%20por%20zonas%20(Rosto%2C%20Hiperhidrose%2C%20Couro%20cabeludo)' },
        { label: 'Limpeza de Pele', url: '/tratamentos?treatment=Limpeza%20de%20pele%20profunda' },
        { label: 'Retinol Clínico', url: '/loja' },
        { label: 'Bioestimuladores de Colagénio', url: '/tratamentos?treatment=Bioestimuladores%20de%20Colag%C3%A9nio' },
        { label: 'Dra. Beleza Academy', url: '/tratamentos' }
      ]
    : [
        { label: 'Botulinum Toxin', url: '/tratamentos?treatment=Botulinum%20Toxin%20by%20zones%20(Face%2C%20Hyperhidrosis%2C%20Scalp)' },
        { label: 'Deep Skin Cleansing', url: '/tratamentos?treatment=Deep%20Skin%20Cleansing' },
        { label: 'Clinical Retinol', url: '/loja' },
        { label: 'Collagen Biostimulators', url: '/tratamentos?treatment=Collagen%20Biostimulators' },
        { label: 'Mentorship', url: '/tratamentos' }
      ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[250] flex items-start sm:items-center justify-center p-0 sm:p-4 bg-stone-950/60 backdrop-blur-md" onClick={onClose}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ type: 'spring', duration: 0.35 }}
          className="bg-white w-full max-w-lg h-full sm:h-auto sm:max-h-[85vh] sm:rounded-3xl shadow-2xl border-b sm:border border-stone-200 overflow-hidden flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header */}
          <div className="p-4 border-b border-stone-100 flex items-center gap-3 bg-stone-50/50">
            <Search className="text-stone-400 w-5 h-5 flex-shrink-0" />
            <input 
              ref={inputRef}
              type="text"
              className="w-full bg-transparent border-none outline-none text-stone-800 placeholder-stone-400 text-base py-1 font-serif"
              placeholder={language === 'pt' ? 'O que procura hoje? Ex: Toxina, Retinol...' : 'What are you looking for? e.g., Toxin, Retinol...'}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="text-stone-400 hover:text-stone-600 p-1.5 rounded-full hover:bg-stone-200/50 transition-colors"
                title="Limpar"
              >
                <X size={16} />
              </button>
            )}
            <button 
              onClick={onClose}
              className="text-stone-400 hover:text-stone-600 font-bold text-xs uppercase tracking-wider py-1.5 px-3 rounded-full hover:bg-stone-200/50 transition-colors sm:hidden"
            >
              {language === 'pt' ? 'Fechar' : 'Close'}
            </button>
            <button 
              onClick={onClose}
              className="hidden sm:flex text-stone-400 hover:text-stone-600 p-1.5 rounded-full hover:bg-stone-200/50 transition-colors"
              title="Fechar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Search Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {!query.trim() ? (
              /* State: Empty Query - Popular suggestions */
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                    {language === 'pt' ? 'Sugestões Populares' : 'Popular Suggestions'}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onClose();
                        navigate(item.url);
                      }}
                      className="px-3.5 py-2 bg-stone-50 hover:bg-brand-50 hover:text-brand-700 rounded-full border border-stone-200/60 hover:border-brand-200 text-stone-600 text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Search size={12} className="opacity-60" />
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-brand-600" />
                    <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
                      {language === 'pt' ? 'Áreas Principais' : 'Main Focus Areas'}
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => { onClose(); navigate('/tratamentos'); }}
                      className="p-3 text-left border border-stone-150/60 hover:border-brand-200 hover:bg-brand-50/20 rounded-xl transition-all cursor-pointer group"
                    >
                      <h5 className="text-xs font-bold text-stone-800 font-serif group-hover:text-brand-700">{language === 'pt' ? 'Tratamentos' : 'Treatments'}</h5>
                      <span className="text-[10px] text-stone-400 block mt-0.5">{language === 'pt' ? 'Estética e Rejuvenescimento' : 'Aesthetics & Rejuvenation'}</span>
                    </button>
                    <button 
                      onClick={() => { onClose(); navigate('/loja'); }}
                      className="p-3 text-left border border-stone-150/60 hover:border-brand-200 hover:bg-brand-50/20 rounded-xl transition-all cursor-pointer group"
                    >
                      <h5 className="text-xs font-bold text-stone-800 font-serif group-hover:text-brand-700">{language === 'pt' ? 'Loja Online' : 'Online Shop'}</h5>
                      <span className="text-[10px] text-stone-400 block mt-0.5">{language === 'pt' ? 'Home-Care de Alto Padrão' : 'Premium Home Care'}</span>
                    </button>
                    <button 
                      onClick={() => { onClose(); navigate('/sobre'); }}
                      className="p-3 text-left border border-stone-150/60 hover:border-brand-200 hover:bg-brand-50/20 rounded-xl transition-all cursor-pointer group"
                    >
                      <h5 className="text-xs font-bold text-stone-800 font-serif group-hover:text-brand-700">{language === 'pt' ? 'A Dra. Giselle' : 'Dr. Giselle'}</h5>
                      <span className="text-[10px] text-stone-400 block mt-0.5">{language === 'pt' ? 'Sobre a marca e experiência' : 'About brand & experience'}</span>
                    </button>
                    <button 
                      onClick={() => { onClose(); navigate('/contactos'); }}
                      className="p-3 text-left border border-stone-150/60 hover:border-brand-200 hover:bg-brand-50/20 rounded-xl transition-all cursor-pointer group"
                    >
                      <h5 className="text-xs font-bold text-stone-800 font-serif group-hover:text-brand-700">{language === 'pt' ? 'Agendamentos' : 'Appointments'}</h5>
                      <span className="text-[10px] text-stone-400 block mt-0.5">{language === 'pt' ? 'Consultas virtuais e presenciais' : 'Virtual & in-person consultations'}</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : results.length > 0 ? (
              /* State: Suggestions Found */
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">
                  {language === 'pt' ? 'Resultados da Pesquisa' : 'Search Results'} ({results.length})
                </h4>
                <div className="divide-y divide-stone-50">
                  {results.map((result) => {
                    let typeIcon = <Activity size={14} className="text-brand-600" />;
                    let typeBadge = language === 'pt' ? 'Tratamento' : 'Treatment';
                    
                    if (result.type === 'product') {
                      typeIcon = <ShoppingBag size={14} className="text-amber-600" />;
                      typeBadge = language === 'pt' ? 'Produto' : 'Product';
                    } else if (result.type === 'navigation') {
                      typeIcon = <ArrowRight size={14} className="text-stone-500" />;
                      typeBadge = language === 'pt' ? 'Navegação' : 'Navigation';
                    }

                    return (
                      <button
                        key={result.id}
                        onClick={() => handleSelectResult(result)}
                        className="w-full text-left p-3.5 hover:bg-brand-50/30 rounded-2xl flex items-center justify-between gap-4 transition-all group border border-transparent hover:border-brand-100/30 cursor-pointer"
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="p-2 bg-stone-100/80 group-hover:bg-brand-50 rounded-xl mt-0.5 text-stone-600 group-hover:text-brand-600 transition-colors flex-shrink-0">
                            {typeIcon}
                          </div>
                          <div className="min-w-0">
                            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest text-[9px] block">
                              {typeBadge}
                            </span>
                            <h5 className="text-sm font-semibold text-stone-800 group-hover:text-stone-900 font-serif leading-snug truncate">
                              {result.title}
                            </h5>
                            <p className="text-xs text-stone-400 leading-normal line-clamp-1 group-hover:text-stone-500 transition-colors">
                              {result.description}
                            </p>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-stone-300 group-hover:text-brand-600 transform group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* State: No Results Found */
              <div className="h-44 flex flex-col items-center justify-center text-center p-4">
                <Search size={32} className="text-stone-300 mb-3" />
                <h5 className="text-sm font-semibold text-stone-700 font-serif">
                  {language === 'pt' ? 'Nenhum resultado encontrado' : 'No results found'}
                </h5>
                <p className="text-xs text-stone-400 max-w-xs mt-1">
                  {language === 'pt' 
                    ? `Não conseguimos encontrar nada correspondente a "${query}". Experimente termos como Toxina, Retinol ou Limpeza.` 
                    : `We couldn't find anything matching "${query}". Try searching for terms like Toxin, Retinol, or Cleansing.`}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
