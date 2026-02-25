import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Check, ShoppingCart, Info, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { CONTENT } from '../content';
import { OptimizedImage } from './OptimizedImage';
import { ATOMY_PRODUCTS, Product } from '../src/data/products';
import { motion, AnimatePresence } from 'motion/react';

export const Shop: React.FC = () => {
  const { language } = useLanguage();
  const { addToCart, totalItems, totalPrice, setIsCartOpen } = useCart();
  const t = CONTENT[language].shop;
  const [searchTerm, setSearchTerm] = useState('');
  const [addedId, setAddedId] = useState<string | null>(null);

  const filteredProducts = ATOMY_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section id="shop" className="py-20 md:py-24 bg-gradient-to-b from-white to-brand-50/30 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-[10px] md:text-xs border border-brand-100 px-3 py-1 rounded-full bg-white">{t.badge}</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mt-4 md:mt-6 mb-4">{t.title}</h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base">
            Descubra a excelência dos produtos Atomy, agora disponíveis para si.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Pesquisar produtos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex justify-center mb-10 md:mb-16 animate-on-scroll">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-white rounded-full shadow-sm border border-stone-100 text-xs md:text-sm font-medium text-stone-600 hover:shadow-md transition-shadow">
                <CreditCard size={14} className="text-brand-600 md:w-4 md:h-4" />
                {CONTENT[language].paymentNotice}
             </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <motion.div 
              layout
              key={product.id}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-2xl border border-stone-100 flex flex-col relative overflow-hidden group transition-all duration-300 h-full"
            >
              <div className="relative h-48 md:h-56 mb-6 bg-stone-50 rounded-2xl overflow-hidden group-hover:bg-brand-50 transition-colors">
                <OptimizedImage 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-serif text-stone-900 mb-2 leading-tight group-hover:text-brand-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-stone-400 text-xs mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-bold text-stone-900">{product.price.toFixed(2)}€</span>
                    {product.pricePer && (
                      <span className="text-[10px] text-stone-400 font-medium">{product.pricePer}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="primary" 
                      onClick={() => handleAddToCart(product)}
                      fullWidth
                      className={`text-xs py-2.5 rounded-xl transition-all ${
                        addedId === product.id 
                          ? 'bg-emerald-500 hover:bg-emerald-600' 
                          : 'bg-stone-900 hover:bg-stone-800'
                      }`}
                    >
                      {addedId === product.id ? (
                        <><Check size={14} className="mr-2" /> Adicionado</>
                      ) : (
                        <><ShoppingCart size={14} className="mr-2" /> Adicionar</>
                      )}
                    </Button>
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-stone-200 text-stone-400 hover:text-brand-600 hover:border-brand-200 transition-all"
                      title="Ver detalhes"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-[10px] text-stone-400">
                    <Info size={10} />
                    <span>{product.sales}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone-400">Nenhum produto encontrado para "{searchTerm}"</p>
            <Button 
              variant="outline" 
              onClick={() => setSearchTerm('')}
              className="mt-4"
            >
              Limpar pesquisa
            </Button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-brand-600 text-white px-8 py-4 rounded-full shadow-2xl shadow-brand-200 flex items-center gap-3 hover:bg-brand-700 transition-all active:scale-95 group"
            >
              <div className="relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-white text-brand-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <span className="font-bold">Ver Carrinho</span>
              <div className="w-px h-4 bg-white/20 mx-1"></div>
              <span className="font-medium opacity-90 group-hover:opacity-100 transition-opacity">
                {totalPrice.toFixed(2)}€
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
