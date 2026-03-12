import React, { useState, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../src/services/pixelService';

export const BookingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Expose a global function to open the widget
  useEffect(() => {
    (window as any).openBookingWidget = () => {
      setIsOpen(true);
      trackEvent('Schedule', {
        content_name: 'Booking Widget Opened'
      });
    };
    return () => {
      delete (window as any).openBookingWidget;
    };
  }, []);

  // Google Calendar Embed URL for drabeleza.pt@gmail.com
  const calendarUrl = "https://calendar.google.com/calendar/embed?src=drabeleza.pt%40gmail.com&ctz=Europe%2FLisbon&mode=WEEK&showPrint=0&showTabs=0&showCalendars=0&showTitle=0&showNav=1&showDate=1&showTz=0";

  return (
    <>
      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-stone-900/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-stone-200"
            >
              {/* Header */}
              <div className="p-4 md:p-5 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-100 p-2 rounded-lg text-brand-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-serif text-stone-900 font-bold leading-tight">Agendamento Online</h3>
                    <p className="text-[10px] md:text-xs text-stone-500">Selecione o melhor horário para a sua consulta.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-400 hover:text-stone-600"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Calendar Iframe */}
              <div className="flex-grow bg-stone-50 relative">
                <iframe 
                  src={calendarUrl}
                  style={{ border: 0 }} 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no"
                  title="Google Calendar"
                  className="absolute inset-0 opacity-0 animate-fade-in"
                  onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                ></iframe>
              </div>

              {/* Footer Note */}
              <div className="p-3 bg-brand-50 text-brand-800 text-[10px] md:text-xs text-center font-medium border-t border-brand-100">
                Para suporte imediato, contacte-nos via WhatsApp.
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
