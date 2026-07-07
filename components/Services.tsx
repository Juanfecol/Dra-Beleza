import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { CalendlyButton } from './CalendlyButton';
import { OptimizedImage } from './OptimizedImage';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Sparkles, Syringe, Scissors, HeartHandshake, ArrowLeft, Clock, Activity, ShieldCheck } from 'lucide-react';
import { getTreatmentDetail } from '../src/data/treatmentDetails';
import { useSearchParams } from 'react-router-dom';

const ServiceModal = ({ 
  service, 
  isOpen, 
  onClose, 
  tCommon, 
  language,
  selectedTreatmentTitle,
  setSelectedTreatmentTitle
}: any) => {

  if (!isOpen) return null;

  const handleBack = () => {
    setSelectedTreatmentTitle(null);
  };

  // Resolve detailed info
  const treatmentDetail = selectedTreatmentTitle ? getTreatmentDetail(selectedTreatmentTitle) : null;
  const treatmentImage = selectedTreatmentTitle 
    ? (service.items.find((item: any) => item.title === selectedTreatmentTitle)?.image || service.image)
    : service.image;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="bg-white rounded-2xl sm:rounded-[32px] w-full max-w-2xl my-2 sm:my-8 overflow-hidden shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-32 sm:h-48 md:h-56 flex-shrink-0">
          <OptimizedImage src={treatmentImage} alt={selectedTreatmentTitle || service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
          
          <button 
            onClick={onClose} 
            className="absolute top-3 right-3 p-2.5 bg-black/30 backdrop-blur-md rounded-full text-white hover:bg-black/50 transition-all duration-200 shadow-md z-10"
            title={language === 'pt' ? 'Fechar' : 'Close'}
          >
            <X size={18} />
          </button>

          {selectedTreatmentTitle && (
            <button 
              onClick={handleBack}
              className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-semibold hover:bg-black/60 transition-all duration-200 shadow-md z-10"
            >
              <ArrowLeft size={14} />
              <span>{language === 'pt' ? 'Voltar' : 'Back'}</span>
            </button>
          )}

          <div className="absolute bottom-3 left-4 sm:left-6 md:left-8 pr-12">
            <span className="text-brand-300 text-[10px] font-bold uppercase tracking-widest bg-stone-900/55 backdrop-blur-sm px-3 py-1 rounded-full border border-brand-500/20">
              {selectedTreatmentTitle 
                ? (language === 'pt' ? 'Tratamento Avançado' : 'Advanced Procedure') 
                : (language === 'pt' ? 'Categoria Protocolos' : 'Protocol Category')}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-white mt-1 drop-shadow-md line-clamp-1">
              {selectedTreatmentTitle || service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Treatments Grid / Details */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 bg-stone-50/50">
          {!selectedTreatmentTitle ? (
            /* --- STATE 1: List of all treatments in category --- */
            <>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
                {language === 'pt' ? 'Selecione um procedimento para ver detalhes clínicos' : 'Select a procedure to view clinical details'} ({service.items.length})
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {service.items.map((item: { title: string, image: string }, idx: number) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedTreatmentTitle(item.title)}
                    className="text-left bg-white rounded-2xl overflow-hidden border border-stone-150/60 shadow-sm hover:shadow-md hover:border-brand-200 hover:scale-[1.01] transition-all duration-300 group flex flex-col h-full cursor-pointer w-full focus:outline-none"
                  >
                    {/* Treatment Thumbnail */}
                    <div className="h-28 w-full overflow-hidden relative flex-shrink-0">
                      <OptimizedImage 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                    
                    {/* Treatment details */}
                    <div className="p-4 flex-1 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div className="flex-1">
                        <span className="text-stone-800 font-serif text-sm font-semibold leading-snug group-hover:text-brand-700 transition-colors block">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-brand-600 font-bold uppercase tracking-wider mt-1 block opacity-0 group-hover:opacity-100 transition-opacity">
                          {language === 'pt' ? 'Ver informações clínicas →' : 'View details →'}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* --- STATE 2: Detailed scientific + highly commercial overview --- */
            <div className="space-y-4 sm:space-y-6">
              {/* Scientific/Clinical Description */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-150/60 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    {language === 'pt' ? 'Abordagem Científica & Fisiológica' : 'Scientific & Physiological Approach'}
                  </h4>
                </div>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-serif">
                  {treatmentDetail?.scientificDesc}
                </p>
              </div>

              {/* Treatment Specs (Duration & Recovery) */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white rounded-xl p-4 border border-stone-100 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-500 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase block">
                      {language === 'pt' ? 'Duração Média' : 'Average Duration'}
                    </span>
                    <span className="text-xs sm:text-sm text-stone-800 font-semibold">
                      {treatmentDetail?.duration}
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-stone-100 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold uppercase block">
                      {language === 'pt' ? 'Recuperação' : 'Recovery'}
                    </span>
                    <span className="text-xs sm:text-sm text-stone-800 font-semibold line-clamp-1" title={treatmentDetail?.recovery}>
                      {treatmentDetail?.recovery}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Benefits Bulleted */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-150/60 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                    {language === 'pt' ? 'Benefícios Clínicos Comprovados' : 'Proven Clinical Benefits'}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {treatmentDetail?.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHY DRA BELEZA SECTION */}
              <div className="bg-gradient-to-br from-brand-50/50 to-amber-50/30 rounded-2xl p-4 sm:p-6 border border-brand-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <HeartHandshake size={80} />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <HeartHandshake className="w-4 h-4 text-brand-700" />
                  <h4 className="text-xs font-bold text-brand-800 uppercase tracking-wider">
                    {language === 'pt' ? 'Porquê fazer este procedimento com a Dra. Beleza?' : 'Why perform this procedure with Dra. Beleza?'}
                  </h4>
                </div>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-serif">
                  {treatmentDetail?.whyDoctor}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Call to Action Footer */}
        <div className="p-4 sm:p-6 border-t border-stone-100 bg-white flex-shrink-0 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="text-center sm:text-left w-full sm:w-auto">
            {selectedTreatmentTitle ? (
              <button 
                onClick={handleBack}
                className="text-stone-500 hover:text-brand-700 text-xs font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1 transition-colors mx-auto sm:mx-0 py-2"
              >
                <ArrowLeft size={12} />
                <span>{language === 'pt' ? 'Ver outros tratamentos' : 'View other treatments'}</span>
              </button>
            ) : (
              <p className="text-xs text-stone-500 font-medium text-center sm:text-left leading-relaxed">
                {language === 'pt' 
                  ? 'Todos os procedimentos são adaptados à sua saúde celular e objetivos.' 
                  : 'All procedures are fully tailored to your cellular health and goals.'}
              </p>
            )}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            {selectedTreatmentTitle && (
              <button
                onClick={handleBack}
                className="hidden sm:inline-flex items-center justify-center border border-stone-200 hover:border-stone-400 text-stone-600 hover:text-stone-900 font-bold py-3 px-5 rounded-xl transition-all text-sm"
              >
                {language === 'pt' ? 'Voltar' : 'Back'}
              </button>
            )}
            <CalendlyButton 
              className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all text-sm text-center"
              text={selectedTreatmentTitle 
                ? (language === 'pt' ? `Agendar ${selectedTreatmentTitle.split('(')[0].trim()}` : tCommon.scheduleBtn) 
                : tCommon.scheduleBtn}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC<{ isPreview?: boolean }> = ({ isPreview = false }) => {
  const [selectedService, setSelectedService] = useState<any | null>(null);
  const [selectedTreatmentTitle, setSelectedTreatmentTitle] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { language } = useLanguage();
  const t = CONTENT[language].services;

  const treatmentParam = searchParams.get('treatment');

  useEffect(() => {
    if (treatmentParam) {
      // Find the service that has this treatment
      const foundService = t.data.find((s: any) => 
        s.items.some((item: any) => item.title.toLowerCase() === treatmentParam.toLowerCase() || item.title === treatmentParam)
      );
      if (foundService) {
        setSelectedService(foundService);
        const foundTreatment = foundService.items.find((item: any) => item.title.toLowerCase() === treatmentParam.toLowerCase() || item.title === treatmentParam);
        if (foundTreatment) {
          setSelectedTreatmentTitle(foundTreatment.title);
        }
      }
    }
  }, [treatmentParam, t.data]);

  const handleCloseModal = () => {
    setSelectedService(null);
    setSelectedTreatmentTitle(null);
    if (searchParams.has('treatment')) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('treatment');
      setSearchParams(newParams);
    }
  };

  return (
    <section id="services" className={`py-20 md:py-28 bg-stone-50 ${!isPreview ? 'scroll-mt-28' : ''}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-xs bg-white px-4 py-1.5 rounded-full shadow-sm border border-brand-100">
            {t.badge}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mt-6 mb-4">
            {t.title}
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {t.data.map((service) => {
            // Pick matching icon
            let IconComponent = Syringe;
            if (service.id === 'skincare') IconComponent = Sparkles;
            else if (service.id === 'capilar') IconComponent = Scissors;
            else if (service.id === 'consultoria') IconComponent = HeartHandshake;

            return (
              <motion.div 
                key={service.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100/80 flex flex-col h-full group cursor-pointer"
              >
                {/* Category Cover Image with Zoom Suave */}
                <div className="h-60 overflow-hidden relative flex-shrink-0">
                  <OptimizedImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/5 transition-all duration-500" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-stone-900 shadow-sm flex items-center gap-1.5">
                    <IconComponent size={12} className="text-brand-600" />
                    <span>
                      {service.id === 'facial-corporal' 
                        ? (language === 'pt' ? 'Corporal & Facial' : 'Body & Facial') 
                        : service.id === 'skincare' 
                          ? (language === 'pt' ? 'Pele & Brilho' : 'Skin & Glow') 
                          : service.id === 'capilar' 
                            ? (language === 'pt' ? 'Capilar' : 'Hair') 
                            : (language === 'pt' ? 'Consulta' : 'Consulting')}
                    </span>
                  </div>
                </div>

                {/* Content / Info Card Body */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-stone-900 leading-tight mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Selected treatment highlights preview */}
                    <div className="space-y-2 mt-2 mb-6">
                      {service.items.slice(0, 3).map((item: any, idx: number) => (
                        <div key={idx} className="flex items-center gap-2 text-stone-500 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                          <span className="truncate">{item.title}</span>
                        </div>
                      ))}
                      {service.items.length > 3 && (
                        <p className="text-brand-600 font-bold text-[11px] uppercase tracking-wider pt-1">
                          + {service.items.length - 3} {language === 'pt' ? 'outros procedimentos' : 'other procedures'}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="space-y-3 mt-auto pt-4 border-t border-stone-100">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="w-full text-center text-stone-600 hover:text-stone-900 font-bold text-xs uppercase tracking-wider py-3 rounded-xl border border-stone-200 hover:border-stone-400 transition-all duration-300"
                    >
                      {language === 'pt' ? 'Ver Todos os Tratamentos' : 'View All Treatments'}
                    </button>

                    <CalendlyButton 
                      className="w-full bg-stone-950 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                      text={language === 'pt' ? 'Agendar este tratamento' : 'Schedule this treatment'}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Premium Modal View */}
        <AnimatePresence>
          {selectedService && (
            <ServiceModal 
              service={selectedService} 
              isOpen={!!selectedService} 
              onClose={handleCloseModal}
              selectedTreatmentTitle={selectedTreatmentTitle}
              setSelectedTreatmentTitle={setSelectedTreatmentTitle}
              tCommon={{ scheduleBtn: t.scheduleBtn }}
              language={language}
            />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
