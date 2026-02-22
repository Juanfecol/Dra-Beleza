import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAVIGATION_LINKS, ASSETS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const t = CONTENT[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-stone-100' 
            : 'bg-transparent py-5 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          <Link 
            to="/" 
            onClick={handleNavClick}
            className="relative z-50 flex-shrink-0 group"
          >
            <img 
              src={ASSETS.logo} 
              alt="Dra. Beleza" 
              className="h-8 md:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50 shadow-sm">
            {NAVIGATION_LINKS.map((link) => (
              <Link 
                key={link.id} 
                to={link.href} 
                onClick={handleNavClick}
                className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap group rounded-full hover:bg-white/80 ${
                  location.pathname === link.href ? 'text-brand-600 bg-white/80' : 'text-stone-600 hover:text-brand-600'
                }`}
              >
                {/* @ts-ignore */}
                {t.nav[link.id]}
              </Link>
            ))}
            
            <div className="w-px h-4 bg-stone-300 mx-2"></div>
            
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setLanguage('pt')}
                    className={`text-xs font-bold transition-all px-2 py-1 rounded hover:bg-brand-50 ${language === 'pt' ? 'text-brand-600' : 'text-stone-400 hover:text-stone-600'}`}
                >
                    PT
                </button>
                <button
                    onClick={() => setLanguage('en')}
                    className={`text-xs font-bold transition-all px-2 py-1 rounded hover:bg-brand-50 ${language === 'en' ? 'text-brand-600' : 'text-stone-400 hover:text-stone-600'}`}
                >
                    EN
                </button>
            </div>

            <a 
              href="https://instagram.com/DraBeleza.pt" 
              target="_blank" 
              rel="noreferrer"
              className="text-stone-500 hover:text-brand-600 hover:bg-brand-50 p-2 rounded-full transition-all ml-1"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </nav>

          <div className="lg:hidden flex items-center gap-4 relative z-50">
             <div className="flex items-center gap-1 bg-stone-100/80 backdrop-blur rounded-full p-1">
                <button
                    onClick={() => setLanguage('pt')}
                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === 'pt' ? 'bg-white text-brand-600 shadow-sm' : 'text-stone-500'}`}
                >
                    PT
                </button>
                <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === 'en' ? 'bg-white text-brand-600 shadow-sm' : 'text-stone-500'}`}
                >
                    EN
                </button>
            </div>

            <button 
              className="text-stone-800 p-2 focus:outline-none active:scale-90 transition-transform"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <div 
          className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl border-t border-stone-100 lg:hidden transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1) origin-top ${
            isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
          }`}
          style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}
        >
          <div className="flex flex-col py-2">
            {NAVIGATION_LINKS.map((link, idx) => (
              <Link 
                key={link.id} 
                to={link.href} 
                className={`font-medium py-4 px-6 border-b border-stone-50 hover:bg-brand-50 hover:pl-8 transition-all duration-300 cursor-pointer active:bg-brand-100 ${
                  location.pathname === link.href ? 'text-brand-600 pl-8 bg-brand-50' : 'text-stone-600 hover:text-brand-600'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
                onClick={handleNavClick}
              >
                {/* @ts-ignore */}
                {t.nav[link.id]}
              </Link>
            ))}
            <a 
              href="https://instagram.com/DraBeleza.pt" 
              target="_blank" 
              rel="noreferrer"
              className="text-stone-600 font-medium py-4 px-6 flex items-center gap-2 hover:bg-brand-50 hover:text-brand-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Instagram size={20} /> Instagram
            </a>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-stone-900/20 z-40 lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};