export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  url: string;
  sales: string;
  pricePer?: string;
}

// Clinical, medical-grade dermo-cosmetics and regenerative skincare solutions
export const ATOMY_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Kit Renovador Retinol Clínico',
    description: 'Protocolo de renovação dérmica profunda formulado com retinol puro a 0.25% e agentes calmantes. Ideal para suavizar rugas finas, uniformizar o tom e textura da pele.',
    price: 49.00,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800',
    url: '#contact',
    sales: 'Protocolo Exclusivo Recomendado',
    pricePer: '1 set / 49.00 EUR'
  },
  {
    id: 'p2',
    name: 'Sérum Ativo Bioestimulador (PDRN + Péptidos)',
    description: 'Sérum regenerativo ultraconcentrado com PDRN (polidesoxirribonucleotídeo) e complexo de péptidos biomiméticos. Estimula a síntese natural de colagénio e restaura a firmeza da pele.',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800',
    url: '#contact',
    sales: 'Alta Concentração de Ativos'
  },
  {
    id: 'p3',
    name: 'Creme Regenerador Pós-Procedimento (Cica + Pantenol)',
    description: 'Fórmula calmante intensiva rica em Centelha Asiática (Cica), Pantenol e Vitamina E. Desenvolvido especificamente para acalmar e acelerar a recuperação da barreira cutânea após microagulhamento, peeling ou injetáveis.',
    price: 26.50,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800',
    url: '#contact',
    sales: 'Efeito Protetor Conforto'
  },
  {
    id: 'p4',
    name: 'Protetor Solar Clínico Mineral FPS 50+',
    description: 'Filtro solar físico 100% mineral de amplo espetro (UVA/UVB), com propriedades antioxidantes e textura invisível. Indispensável no cuidado diário e proteção absoluta da pele em tratamento.',
    price: 19.50,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800',
    url: '#contact',
    sales: 'Filtros 100% Minerais'
  },
  {
    id: 'p5',
    name: 'Gel de Limpeza Enzimática Suave',
    description: 'Gel higienizante facial de pH fisiológico com enzimas de papaia para uma microesfoliação diária biológica e suave, sem agredir o microbioma da pele.',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800',
    url: '#contact',
    sales: 'Indicado para Pele Sensível'
  },
  {
    id: 'p6',
    name: 'Tónico Capilar Antiqueda e Revitalizante',
    description: 'Tónico capilar com fatores de crescimento e extratos botânicos estimulantes. Fortalece o folículo piloso, melhora a microcirculação e combate a queda sazonal ou hormonal.',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315347d?q=80&w=800',
    url: '#contact',
    sales: 'Estimulante do Crescimento'
  },
  {
    id: 'p7',
    name: 'Sérum Contorno de Olhos Tripla Ação',
    description: 'Fórmula drenante com cafeína, ácido hialurónico e péptidos tensores para atenuar olheiras congestionadas, rugas e rídulas de expressão na zona periocular.',
    price: 29.00,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
    url: '#contact',
    sales: 'Resultados Clínicos Visíveis'
  },
  {
    id: 'p8',
    name: 'E-book: Os Segredos da Estética Regenerativa',
    description: 'O guia digital definitivo para compreender o envelhecimento celular. Aprenda a desenhar a sua rotina de skincare personalizada, escolher alimentos estratégicos e potenciar os tratamentos clínicos.',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800',
    url: '#contact',
    sales: 'Download Digital Imediato'
  }
];
