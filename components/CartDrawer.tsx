import React from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    // Navigate to contact with cart details
    const cartDetails = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');
    navigate('/contactos', { state: { interest: 'order', details: cartDetails } });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-50 text-brand-600 rounded-xl">
                  <ShoppingBag size={20} />
                </div>
                <h2 className="text-xl font-serif font-bold text-stone-900">O seu Carrinho</h2>
                <span className="bg-stone-100 text-stone-500 text-xs font-bold px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-50 rounded-full transition-colors text-stone-400 hover:text-stone-900"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center text-stone-200">
                    <ShoppingBag size={40} />
                  </div>
                  <div>
                    <p className="text-stone-900 font-bold">O seu carrinho está vazio</p>
                    <p className="text-stone-400 text-sm">Adicione alguns produtos para começar.</p>
                  </div>
                  <Button variant="outline" onClick={onClose}>
                    Continuar a comprar
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 group">
                      <div className="w-20 h-20 bg-stone-50 rounded-2xl overflow-hidden flex-shrink-0 border border-stone-100">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-stone-900 truncate mb-1">{item.name}</h3>
                        <p className="text-brand-600 font-bold text-sm mb-3">{item.price.toFixed(2)}€</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 px-2 hover:bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-2 text-xs font-bold text-stone-900 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 px-2 hover:bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-300 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-stone-50 border-t border-stone-100 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium">Subtotal</span>
                  <span className="text-xl font-bold text-stone-900">{totalPrice.toFixed(2)}€</span>
                </div>
                <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest">
                  Portes calculados no checkout
                </p>
                <Button 
                  fullWidth 
                  onClick={handleCheckout}
                  className="bg-brand-600 hover:bg-brand-700 text-white shadow-xl shadow-brand-200 py-4 rounded-2xl"
                >
                  Finalizar Encomenda <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
