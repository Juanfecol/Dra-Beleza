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

export const ATOMY_PRODUCTS: Product[] = [
  {
    id: '700501',
    name: 'Atomy Toothpaste 200g * 5set',
    description: 'Pasta de dientes con propóleo y extracto de té verde para una higiene bucal completa.',
    price: 18.50,
    image: 'https://image.atomy.com/EU/goods/700501/org/501/thumb_700501_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700501',
    sales: '165 Reviews guaranteed',
    pricePer: '100 g / 1.85 EUR'
  },
  {
    id: '704008',
    name: 'Atomy Inner Collagen',
    description: 'Colágeno para la belleza interior y salud de la piel.',
    price: 34.00,
    image: 'https://image.atomy.com/EU/goods/704008/org/398/250630000043398.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/704008',
    sales: '664 Likes'
  },
  {
    id: '700121',
    name: 'Atomy Vitamin C',
    description: 'Suplemento esencial de Vitamina C para el sistema inmunológico.',
    price: 22.50,
    image: 'https://image.atomy.com/EU/goods/700121/org/121/thumb_700121_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700121',
    sales: '88 Reviews guaranteed',
    pricePer: '100 g / 12.50 EUR'
  },
  {
    id: '700510',
    name: 'Toothbrush',
    description: 'Cepillo de dientes con cerdas súper delgadas y polvo de oro.',
    price: 7.99,
    image: 'https://image.atomy.com/EU/goods/700510/org/510/thumb_700510_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700510',
    sales: '133 Reviews guaranteed',
    pricePer: '1 ea / 1.00 EUR'
  },
  {
    id: '700111',
    name: 'Atomy Alaska E-Omega 3',
    description: 'Omega 3 de alta calidad para la salud cardiovascular.',
    price: 22.50,
    image: 'https://image.atomy.com/EU/goods/700111/org/345/250317000038345.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700111',
    sales: '1,051 Likes',
    pricePer: '100 g / 22.73 EUR'
  },
  {
    id: '700160',
    name: 'Atomy Biotics 10 Plus',
    description: 'Probióticos para una salud intestinal óptima.',
    price: 29.50,
    image: 'https://image.atomy.com/EU/goods/700160/org/160/thumb_700160_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700160',
    sales: '51 Reviews guaranteed',
    pricePer: '100 g / 19.67 EUR'
  },
  {
    id: '700276',
    name: 'Atomy Absolute Essence Sunscreen *1EA',
    description: 'Protector solar con esencia hidratante y tecnología Absolute.',
    price: 12.50,
    image: 'https://image.atomy.com/EU/goods/700276/org/198/250317000038198.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700276',
    sales: '1,370 Likes',
    pricePer: '100 ml / 31.25 EUR'
  },
  {
    id: '700521',
    name: 'Toothpaste 50g',
    description: 'Versión compacta de la pasta de dientes Atomy para viaje.',
    price: 6.50,
    image: 'https://image.atomy.com/EU/goods/700521/org/521/thumb_700521_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700521',
    sales: '98 Reviews guaranteed',
    pricePer: '100 g / 3.25 EUR'
  },
  {
    id: '700178',
    name: 'Pure Spirulina 100%',
    description: 'Espirulina 100% pura para una nutrición completa.',
    price: 24.00,
    image: 'https://image.atomy.com/EU/goods/700178/org/178/thumb_700178_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700178',
    sales: '52 Reviews guaranteed',
    pricePer: '100 g / 50.00 EUR'
  },
  {
    id: '700826',
    name: 'Sheet Laundry Detergent',
    description: 'Detergente para ropa en láminas, práctico y eficiente.',
    price: 11.00,
    image: 'https://image.atomy.com/EU/goods/700826/org/584/260116000049584.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700826',
    sales: '168 Likes'
  },
  {
    id: '700975',
    name: 'Cafe Arabica Black',
    description: 'Café Arábica negro de sabor intenso y puro.',
    price: 16.00,
    image: 'https://image.atomy.com/EU/goods/700975/org/215/260216000050215.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700975',
    sales: '27 Likes'
  },
  {
    id: '700351',
    name: 'Evening Care 4 Set * 1Set',
    description: 'Set de 4 pasos para el cuidado nocturno de la piel.',
    price: 37.00,
    image: 'https://image.atomy.com/EU/goods/700351/org/351/thumb_700351_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700351',
    sales: '137 Reviews guaranteed',
    pricePer: '100 ml / 6.85 EUR'
  },
  {
    id: '701513',
    name: 'Absolute 24K Gold Night Mask',
    description: 'Mascarilla nocturna con oro de 24K para una piel radiante.',
    price: 28.00,
    image: 'https://image.atomy.com/EU/goods/701513/org/779/251016000047779.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/701513',
    sales: '396 Likes'
  },
  {
    id: '700973',
    name: 'Cafe Arabica 50T',
    description: 'Café Arábica en formato de 50 sobres.',
    price: 12.50,
    image: 'https://image.atomy.com/EU/goods/700973/org/258/250228000037258.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700973',
    sales: '382 Likes'
  },
  {
    id: '790101',
    name: 'Hemohim G - EU',
    description: 'Suplemento para el sistema inmunológico, formulado para Europa.',
    price: 105.00,
    image: 'https://image.atomy.com/EU/goods/790101/org/101/thumb_790101_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/790101',
    sales: '89 Reviews guaranteed'
  },
  {
    id: '700681',
    name: 'Atomy Hair Oil Complex',
    description: 'Complejo de aceites para un cabello sano y brillante.',
    price: 13.50,
    image: 'https://image.atomy.com/EU/goods/700681/org/681/thumb_700681_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700681',
    sales: '70 Reviews guaranteed',
    pricePer: '100 ml / 13.50 EUR'
  },
  {
    id: '700301',
    name: 'Foam Cleanser *1EA',
    description: 'Limpiador en espuma para una limpieza profunda del rostro.',
    price: 9.50,
    image: 'https://image.atomy.com/EU/goods/700301/org/661/250220000036661.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700301',
    sales: '651 Likes',
    pricePer: '100 ml / 6.33 EUR'
  },
  {
    id: '700120',
    name: 'Atomy Organic Fermented Noni Concentrate(Pouch)',
    description: 'Concentrado de Noni orgánico fermentado en formato pouch.',
    price: 56.50,
    image: 'https://image.atomy.com/EU/goods/700120/org/339/250317000038339.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700120',
    sales: '658 Likes'
  },
  {
    id: '700601',
    name: 'Herbal Shampoo *1EA',
    description: 'Champú herbal para el cuidado natural del cabello.',
    price: 14.50,
    image: 'https://image.atomy.com/EU/goods/700601/org/601/thumb_700601_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700601',
    sales: '60 Reviews guaranteed',
    pricePer: '100 ml / 2.90 EUR'
  },
  {
    id: '700464',
    name: 'Marine Ampoule Eye Patch',
    description: 'Parches para ojos con ampolla marina para hidratación intensa.',
    price: 19.50,
    image: 'https://image.atomy.com/EU/goods/700464/org/223/250317000038223.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700464',
    sales: '1,428 Likes',
    pricePer: '100 g / 23.21 EUR'
  },
  {
    id: '700520',
    name: 'Oral Care System*1set',
    description: 'Sistema completo de cuidado bucal Atomy.',
    price: 14.50,
    image: 'https://image.atomy.com/EU/goods/700520/org/520/thumb_700520_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700520',
    sales: '57 Reviews guaranteed',
    pricePer: '1 ea / 3.63 EUR'
  },
  {
    id: '700267',
    name: 'Absolute Nutrition Cream',
    description: 'Crema nutritiva Absolute para una piel rejuvenecida.',
    price: 37.00,
    image: 'https://image.atomy.com/EU/goods/700267/org/656/250220000036656.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700267',
    sales: '760 Likes',
    pricePer: '100 ml / 92.50 EUR'
  },
  {
    id: '700400',
    name: 'Lip Glow',
    description: 'Bálsamo labial con color y protección solar.',
    price: 12.00,
    image: 'https://image.atomy.com/EU/goods/700400/org/200/250317000038200.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700400',
    sales: '400 Likes',
    pricePer: '100 g / 363.64 EUR'
  },
  {
    id: '761529',
    name: 'HemohimG+Travel kit set',
    description: 'Kit de viaje Hemohim G para llevar tu salud a todas partes.',
    price: 210.00,
    image: 'https://image.atomy.com/EU/goods/761529/org/530/260114000049530.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/761529',
    sales: '140 Likes'
  },
  {
    id: '700465',
    name: 'Daily Expert Mask Moisturising',
    description: 'Mascarilla diaria experta para una hidratación profunda.',
    price: 12.50,
    image: 'https://image.atomy.com/EU/goods/700465/org/465/thumb_700465_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700465',
    sales: '53 Reviews guaranteed',
    pricePer: '100 g / 5.21 EUR'
  },
  {
    id: '700666',
    name: 'Protein Intensive Shampoo',
    description: 'Champú intensivo con proteínas para cabello dañado.',
    price: 20.00,
    image: 'https://image.atomy.com/EU/goods/700666/org/962/250226000036962.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700666',
    sales: '889 Likes'
  },
  {
    id: '700227',
    name: 'Absolute Ampoule',
    description: 'Ampolla Absolute para un cuidado intensivo de la piel.',
    price: 41.00,
    image: 'https://image.atomy.com/EU/goods/700227/org/653/250220000036653.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700227',
    sales: '835 Likes',
    pricePer: '100 ml / 102.50 EUR'
  },
  {
    id: '700542',
    name: 'Hand Cream',
    description: 'Crema de manos hidratante y protectora.',
    price: 15.50,
    image: 'https://image.atomy.com/EU/goods/700542/org/542/thumb_700542_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700542',
    sales: '693 Likes',
    pricePer: '100 ml / 5.17 EUR'
  },
  {
    id: '700183',
    name: 'Atomy Pomegranate Mixed Fruit Jelly',
    description: 'Gelatina de granada y frutas mixtas para la salud.',
    price: 67.50,
    image: 'https://image.atomy.com/EU/goods/700183/org/350/250317000038350.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700183',
    sales: '886 Likes',
    pricePer: '100 g / 7.50 EUR'
  },
  {
    id: '700321',
    name: 'Deep Cleanser *1EA',
    description: 'Limpiador profundo para eliminar impurezas y maquillaje.',
    price: 9.50,
    image: 'https://image.atomy.com/EU/goods/700321/org/649/250220000036649.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700321',
    sales: '442 Likes',
    pricePer: '100 ml / 7.92 EUR'
  },
  {
    id: '700667',
    name: 'Atomy Protein Intensive Treatment',
    description: 'Tratamiento intensivo con proteínas para el cabello.',
    price: 16.50,
    image: 'https://image.atomy.com/EU/goods/700667/org/940/250226000036940.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700667',
    sales: '738 Likes'
  },
  {
    id: '700620',
    name: 'Saengmodan Hair Tonic',
    description: 'Tónico capilar Saengmodan para la salud del cuero cabelludo.',
    price: 14.00,
    image: 'https://image.atomy.com/EU/goods/700620/org/620/thumb_700620_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700620',
    sales: '436 Likes'
  },
  {
    id: '700693',
    name: 'Atomy Scalpcare 2 Set',
    description: 'Set de 2 productos para el cuidado del cuero cabelludo.',
    price: 28.00,
    image: 'https://image.atomy.com/EU/goods/700693/org/964/250226000036964.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700693',
    sales: '70 Reviews guaranteed',
    pricePer: '100 ml / 2.80 EUR'
  },
  {
    id: '700661',
    name: 'Herbal Hair Conditioner',
    description: 'Acondicionador herbal para un cabello suave y manejable.',
    price: 15.00,
    image: 'https://image.atomy.com/EU/goods/700661/org/661/thumb_700661_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700661',
    sales: '514 Likes',
    pricePer: '100 ml / 3.00 EUR'
  },
  {
    id: '700180',
    name: "Atomy puer tea* 1box",
    description: 'Té Puer Atomy para el bienestar y control de peso.',
    price: 25.00,
    image: 'https://image.atomy.com/EU/goods/700180/org/180/thumb_700180_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700180',
    sales: '51 Reviews guaranteed',
    pricePer: '100 g / 83.33 EUR'
  },
  {
    id: '700691',
    name: 'Atomy Scalpcare Hair Shampoo',
    description: 'Champú para el cuidado del cuero cabelludo Atomy.',
    price: 14.50,
    image: 'https://image.atomy.com/EU/goods/700691/org/691/thumb_700691_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700691',
    sales: '613 Likes',
    pricePer: '100 ml / 2.90 EUR'
  },
  {
    id: '700198',
    name: 'Atomy THE FAME Nutrition Cream',
    description: 'Crema nutritiva de la línea THE FAME para una piel sana.',
    price: 22.00,
    image: 'https://image.atomy.com/EU/goods/700198/org/198/thumb_700198_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700198',
    sales: '554 Likes',
    pricePer: '100 ml / 44.00 EUR'
  },
  {
    id: '700279',
    name: 'Atomy Absolute Urban Shield Sun Cushion',
    description: 'Cojín solar Absolute para protección urbana diaria.',
    price: 15.00,
    image: 'https://image.atomy.com/EU/goods/700279/org/166/250317000038166.png?w=480&h=480',
    url: 'https://eu.atomy.com/product/700279',
    sales: '476 Likes',
    pricePer: '100 g / 100 EUR'
  },
  {
    id: '700286',
    name: 'Sun Stick',
    description: 'Protector solar en barra para una aplicación fácil.',
    price: 12.00,
    image: 'https://image.atomy.com/EU/goods/700286/org/420/250716000044420.webp?w=480&h=480',
    url: 'https://eu.atomy.com/product/700286',
    sales: '286 Likes'
  },
  {
    id: '700779',
    name: 'Derma Real Cica Gel Cleanser',
    description: 'Limpiador en gel Derma Real Cica para pieles sensibles.',
    price: 13.50,
    image: 'https://image.atomy.com/EU/goods/700779/org/779/thumb_700779_0000.jpg?w=480&h=480',
    url: 'https://eu.atomy.com/product/700779',
    sales: '697 Likes',
    pricePer: '100 ml / 9.00 EUR'
  }
];
