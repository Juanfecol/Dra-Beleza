
export const FORM_CONFIG = {
  email: "co.felipecifuentes@gmail.com", 
  subject: "Novo Contacto - Landing Page Dra. Beleza"
};

export const SITE_URL = "https://www.drabeleza.pt";

export const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbwATXLCZYw3lln-wAU1CJC1kFetU37o6c-10eBFk_TN2DIhEgXc-2Sro-3fuSRacQv2/exec";

export const STRIPE_EBOOK_URL = "https://buy.stripe.com/00waEX7TP1PTgD0dP2ebu06";

export const CONTACT_INFO = {
  address: "Av. da República, Amadora, Portugal",
  phone: "+351 910 166 268",
  whatsapp: "+351 910 166 268",
  whatsappLink: "https://wa.me/351910166268",
  instagram: "@DraBeleza.pt"
};

export const LEGAL_INFO = {
  ers: "E123456",
  nif: "510000000",
  ral: {
    pt: "Em caso de litígio o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo: Centro de Arbitragem de Conflitos de Consumo de Lisboa (www.centroarbitragemlisboa.pt).",
    en: "In case of dispute, the consumer may resort to an Alternative Consumer Dispute Resolution Entity: Lisbon Consumer Conflict Arbitration Center (www.centroarbitragemlisboa.pt)."
  }
};

export const NAVIGATION_LINKS = [
  { id: 'home', href: '/' },
  { id: 'about', href: '/sobre' },
  { id: 'stories', href: '/historias' },
  { id: 'services', href: '/tratamentos' },
  { id: 'academy', href: '/academy' },
  { id: 'events', href: '/eventos' },
  { id: 'shop', href: '/loja' },
  { id: 'contact', href: '/contactos' },
];

export const getOptimizedUrl = (url: string, width: number = 800) => {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    return url;
  }
  if (url.includes('images.unsplash.com')) {
    return `${url}&w=${width}&auto=format&fit=crop&q=80`;
  }
  return url;
};

export const ASSETS = {
  logo: 'https://dra-beleza-pt.b-cdn.net/Ativo%2058.png',
  hero: 'https://dra-beleza-pt.b-cdn.net/IMG_5567-Editar_reducida.jpg', 
  heroVideo: '',
  
  about: {
    desk: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop',
    portrait: 'https://dra-beleza-pt.b-cdn.net/583095445_18158559397400259_1522235341548302603_n.jpg'
  },
  
  testimonials: [
    'https://dra-beleza-pt.b-cdn.net/AQNs0iLS_p-J017ApnAXBKGMxhihg96dlbrGWZluqsTK10_-0QYTuYFzltq8GY2NPIwoMu3ak-5NwJkj_aldmUoyWms-c2N2fCzdH_8.mp4',
    'https://dra-beleza-pt.b-cdn.net/AQPNao3re5Xm2Wf_HTRLyfZeHcGcWXPfci3eAOlPoY5httKxipJE7FpbMjCVU3cKGo4OSo5Tc8a2rQwWXVTp1kvSEo03qYkIe1lqnzQ.mp4',
    'https://dra-beleza-pt.b-cdn.net/AQORrx2BOG68lPF5nkz0dw2CkLACAwxIk4JM-pjV2ahw-KpID_A8sEe9WE-SC9UU9b5t2W-zXF73E589DgcRJkcguRTvU7_LNSOuO60.mp4',
    'https://dra-beleza-pt.b-cdn.net/AQOP2yjpZk34ME-DY1hg-KkPSawoL9UmJuydhCrT3NIISBv_LlsVyd2Q-XtqK_nWTRTRkuN12_YqbK1tnkREukxA19iVtNEqe54JRtg.mp4',
    'https://dra-beleza-pt.b-cdn.net/AQPntyKjF1InMg2qBtKvCkFcf2cpS7Xrgnvp9leARKn9nb7XBeT_7Z3bDwzCCguX1XUGEx0lWVwweds8jp7xQKV_b_-rzZOi2-ljyag.mp4',
    'https://dra-beleza-pt.b-cdn.net/AQPX6hCD73hQDVT2Bfkzchcji2C1iu8chduAYituxB_8PyReTmfpqzcp7dgC2Ouxhq544YE40CI9dTj9JnRcQN4q48se_jli3DakgB4.mp4'
  ],
  
  events: {
    bg: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
    lisboa: 'https://images.unsplash.com/photo-1585208798174-6ced31f47353?q=80&w=1000&auto=format&fit=crop',
    madeira: 'https://images.unsplash.com/photo-1626125345510-4703419649eb?q=80&w=1000&auto=format&fit=crop'
  },
  
  ebook: 'https://dra-beleza-pt.b-cdn.net/ebook-beleza-regenerativa.jpg',
  
  contact: 'https://dra-beleza-pt.b-cdn.net/IMG_5533-Editar.jpg',
  
  retinol: 'https://images.unsplash.com/photo-1556228552-523cd13b0302?q=80&w=1000&auto=format&fit=crop',

  products: 'https://dra-beleza-pt.b-cdn.net/250226000036929%20(1).jpg'
};