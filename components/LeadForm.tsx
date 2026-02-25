import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from './Button';
import { Loader2, CheckCircle, AlertCircle, ShieldCheck } from 'lucide-react';
import { GOOGLE_SHEETS_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTENT } from '../content';
import { trackEvent } from '../src/services/pixelService';

const INTEREST_MAP: Record<string, keyof typeof CONTENT['pt']['form']['options']> = {
  'consultation': 'opt1',
  'botox': 'opt2',
  'body': 'opt3',
  'event_lisboa': 'opt4',
  'event_madeira': 'opt5',
  'ebook': 'opt6',
  'products': 'opt7',
  'kit_retinol': 'optKit',
  'academy': 'opt8',
};

export const LeadForm: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const t = CONTENT[language].form;
  
  const prevLanguageRef = useRef(language);

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    interest: t.options.opt1,
    message: '' 
  });
  
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      const prevOptions = CONTENT[prevLanguageRef.current].form.options;
      const currentOptions = CONTENT[language].form.options;
      
      const selectedKey = Object.keys(prevOptions).find(
        key => prevOptions[key as keyof typeof prevOptions] === formState.interest
      );

      if (selectedKey) {
        setFormState(prev => ({
          ...prev,
          interest: currentOptions[selectedKey as keyof typeof currentOptions]
        }));
      } else {
        setFormState(prev => ({ ...prev, interest: currentOptions.opt1 }));
      }
      
      prevLanguageRef.current = language;
    }
  }, [language, formState.interest]);

  useEffect(() => {
    if (location.state && (location.state as any).interest) {
      const interestId = (location.state as any).interest;
      const mappedKey = INTEREST_MAP[interestId];
      let finalInterest = '';
      if (mappedKey) {
        finalInterest = CONTENT[language].form.options[mappedKey];
      } else {
        finalInterest = interestId;
      }

      setFormState(prev => ({ ...prev, interest: finalInterest }));
    }
  }, [location.state, language]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    
    setStatus('submitting');

    try {
      const params = new URLSearchParams();
      params.append('name', formState.name);
      params.append('phone', formState.phone);
      params.append('email', formState.email);
      params.append('interest', formState.interest);
      params.append('message', formState.message);
      params.append('created_at', new Date().toLocaleString(language === 'pt' ? 'pt-PT' : 'en-US'));
      params.append('lang', language);
      
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString()
      });

      setStatus('success');
      
      trackEvent('Lead', {
        content_name: formState.interest,
        value: 0.00,
        currency: 'EUR'
      });

      setFormState({
        name: '',
        phone: '',
        email: '',
        interest: t.options.opt1,
        message: ''
      });
      setAgreed(false);
      
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  if (status === 'success') {
    return (
      <div id="lead-form" className="bg-brand-50/80 backdrop-blur-sm p-8 rounded-2xl text-center shadow-inner h-full flex flex-col justify-center items-center animate-fade-in border border-brand-100 scroll-mt-32">
        <div className="bg-white p-4 rounded-full shadow-sm mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-2xl font-serif text-stone-800 mb-2">{t.successTitle}</h3>
        <p className="text-stone-600 mb-8 leading-relaxed">
          {t.successDesc} <strong>{formState.interest}</strong> {t.successDescEnd}
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="text-sm">
          {t.newMsgBtn}
        </Button>
      </div>
    );
  }

  return (
    <form id="lead-form" onSubmit={handleSubmit} className="space-y-5 bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 relative scroll-mt-32">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-serif text-stone-800 mb-2">{t.title}</h3>
        <p className="text-sm text-stone-500">{t.subtitle}</p>
      </div>
      
      {status === 'error' && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 mb-4 border border-red-100">
          <AlertCircle size={16} />
          {t.error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 ml-1">{t.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all bg-stone-50/30 hover:bg-white"
            placeholder="Ex: Maria Silva"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 ml-1">{t.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formState.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all bg-stone-50/30 hover:bg-white"
              placeholder="910 000 000"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 ml-1">{t.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all bg-stone-50/30 hover:bg-white"
              placeholder="maria@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interest" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 ml-1">{t.interest}</label>
          <div className="relative">
            <select
              id="interest"
              name="interest"
              value={formState.interest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all bg-stone-50/30 hover:bg-white appearance-none cursor-pointer"
            >
              <optgroup label={t.options.group1}>
                <option value={t.options.opt1}>{t.options.opt1}</option>
                <option value={t.options.opt2}>{t.options.opt2}</option>
                <option value={t.options.opt3}>{t.options.opt3}</option>
              </optgroup>
              <optgroup label={t.options.group2}>
                <option value={t.options.opt4}>{t.options.opt4}</option>
                <option value={t.options.opt5}>{t.options.opt5}</option>
              </optgroup>
              <optgroup label={t.options.group3}>
                <option value={t.options.opt6}>{t.options.opt6}</option>
                <option value={t.options.opt7}>{t.options.opt7}</option>
                <option value={t.options.optKit}>{t.options.optKit}</option>
              </optgroup>
              <optgroup label={t.options.group4}>
                <option value={t.options.opt8}>{t.options.opt8}</option>
              </optgroup>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1 ml-1">{t.message}</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-brand-200 focus:border-brand-400 outline-none transition-all bg-stone-50/30 hover:bg-white resize-none"
            placeholder={t.messagePlaceholder}
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              name="privacy"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 text-brand-600 border-stone-300 rounded focus:ring-brand-500 cursor-pointer"
            />
          </div>
          <label htmlFor="privacy" className="text-xs text-stone-500 cursor-pointer select-none leading-tight">
            {t.privacy}
          </label>
        </div>
      </div>

      <Button 
        type="submit" 
        fullWidth 
        className="mt-4 py-4 text-base shadow-xl shadow-brand-200 disabled:opacity-70 disabled:cursor-not-allowed" 
        disabled={status === 'submitting' || !agreed}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> {t.btnSending}
          </>
        ) : (
          t.btnSubmit
        )}
      </Button>
      
      <div className="flex items-center justify-center gap-1 text-[10px] text-stone-400 mt-4">
        <ShieldCheck size={12} />
        <span>{t.security}</span>
      </div>
    </form>
  );
};