// Product catalog for affiliate monetization.
// TODO: Replace each *_url with your real affiliate links:
//   Amazon: amazon.com.br/associates
//   Mercado Livre: afiliados.mercadolivre.com.br
//   Shopee: shopee.com.br/m/afiliados
// TODO: Replace image_url with real product image URLs.

const CATALOG = [
  // ── LIMPEZA ──────────────────────────────────────────────────────────────
  {
    id: 'effaclar-gel-lrp',
    name: 'Effaclar Gel de Limpeza',
    brand: 'La Roche-Posay',
    category: 'limpeza_gel',
    skin_types: ['Oleosa', 'Mista'],
    concerns: ['acne', 'poros', 'oleosidade'],
    image_url: 'https://placehold.co/120x120/ddeeff/1a3a8a?text=Effaclar+Gel',
    amazon_url: 'https://amzn.to/TODO-effaclar-gel',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 45–65',
  },
  {
    id: 'cerave-espuma',
    name: 'Espuma de Limpeza Facial',
    brand: 'CeraVe',
    category: 'limpeza_espuma',
    skin_types: ['Oleosa', 'Mista', 'Normal'],
    concerns: ['acne', 'poros', 'oleosidade'],
    image_url: 'https://placehold.co/120x120/ddeeff/1a3a8a?text=CeraVe+Espuma',
    amazon_url: 'https://amzn.to/TODO-cerave-espuma',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 55–80',
  },
  {
    id: 'cetaphil-gentle',
    name: 'Gentle Skin Cleanser',
    brand: 'Cetaphil',
    category: 'limpeza_leite',
    skin_types: ['Seca', 'Sensível', 'Normal'],
    concerns: ['ressecamento', 'sensibilidade'],
    image_url: 'https://placehold.co/120x120/ddeeff/1a3a8a?text=Cetaphil',
    amazon_url: 'https://amzn.to/TODO-cetaphil-gentle',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 50–75',
  },
  {
    id: 'bioderma-sensibio',
    name: 'Sensibio H2O',
    brand: 'Bioderma',
    category: 'agua_micelar',
    skin_types: ['Todos', 'Sensível', 'Normal', 'Seca', 'Oleosa', 'Mista'],
    concerns: ['sensibilidade', 'limpeza', 'desmaquilar'],
    image_url: 'https://placehold.co/120x120/ddeeff/1a3a8a?text=Bioderma',
    amazon_url: 'https://amzn.to/TODO-bioderma-sensibio',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 80–120',
  },

  // ── HIDRATANTE ────────────────────────────────────────────────────────────
  {
    id: 'episol-oil-free',
    name: 'Episol Oil Free FPS 30',
    brand: 'Mantecorp',
    category: 'hidratante_leve',
    skin_types: ['Oleosa', 'Mista'],
    concerns: ['oleosidade', 'brilho', 'poros'],
    image_url: 'https://placehold.co/120x120/e0f5e9/1a6a3a?text=Episol+Oil',
    amazon_url: 'https://amzn.to/TODO-episol-oil-free',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 30–50',
  },
  {
    id: 'la-roche-hydraphase',
    name: 'Hydraphase HA Leve',
    brand: 'La Roche-Posay',
    category: 'hidratante_leve',
    skin_types: ['Mista', 'Normal'],
    concerns: ['desidratação', 'hidratação'],
    image_url: 'https://placehold.co/120x120/e0f5e9/1a6a3a?text=Hydraphase',
    amazon_url: 'https://amzn.to/TODO-hydraphase-leve',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 75–100',
  },
  {
    id: 'cerave-creme',
    name: 'Creme Hidratante',
    brand: 'CeraVe',
    category: 'hidratante_rico',
    skin_types: ['Seca', 'Normal'],
    concerns: ['ressecamento', 'hidratação', 'barreira'],
    image_url: 'https://placehold.co/120x120/e0f5e9/1a6a3a?text=CeraVe+Creme',
    amazon_url: 'https://amzn.to/TODO-cerave-creme',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 65–90',
  },

  // ── PROTETOR SOLAR ────────────────────────────────────────────────────────
  {
    id: 'anthelios-toque-seco',
    name: 'Anthelios XL Toque Seco FPS 50+',
    brand: 'La Roche-Posay',
    category: 'protetor_solar_leve',
    skin_types: ['Oleosa', 'Mista'],
    concerns: ['oleosidade', 'brilho', 'fotoproteção'],
    image_url: 'https://placehold.co/120x120/fff3cd/8a6a00?text=Anthelios',
    amazon_url: 'https://amzn.to/TODO-anthelios-toque-seco',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 90–130',
  },
  {
    id: 'neutrogena-sun-fresh',
    name: 'Sun Fresh Facial FPS 50',
    brand: 'Neutrogena',
    category: 'protetor_solar_hidratante',
    skin_types: ['Seca', 'Normal', 'Sensível'],
    concerns: ['fotoproteção', 'hidratação'],
    image_url: 'https://placehold.co/120x120/fff3cd/8a6a00?text=Neutrogena',
    amazon_url: 'https://amzn.to/TODO-neutrogena-sun-fresh',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 35–55',
  },
  {
    id: 'episol-color-fps50',
    name: 'Episol Color FPS 50',
    brand: 'Mantecorp',
    category: 'protetor_solar_leve',
    skin_types: ['Todos', 'Normal', 'Mista'],
    concerns: ['manchas', 'fotoproteção', 'uniformização'],
    image_url: 'https://placehold.co/120x120/fff3cd/8a6a00?text=Episol+Color',
    amazon_url: 'https://amzn.to/TODO-episol-color',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 30–50',
  },

  // ── SÉRUM ─────────────────────────────────────────────────────────────────
  {
    id: 'dermage-cvit',
    name: 'C-Vit Sérum Vitamina C 10%',
    brand: 'Dermage',
    category: 'serum_vitamina_c',
    skin_types: ['Todos', 'Normal', 'Mista', 'Seca'],
    concerns: ['manchas', 'luminosidade', 'melasma', 'hiperpigmentação'],
    image_url: 'https://placehold.co/120x120/fde8d8/8a3a00?text=C-Vit+Sérum',
    amazon_url: 'https://amzn.to/TODO-dermage-cvit',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 80–120',
  },
  {
    id: 'loreal-revitalift-c',
    name: 'Revitalift Vitamina C Sérum',
    brand: "L'Oréal",
    category: 'serum_vitamina_c',
    skin_types: ['Todos', 'Normal', 'Seca', 'Mista'],
    concerns: ['manchas', 'envelhecimento', 'luminosidade'],
    image_url: 'https://placehold.co/120x120/fde8d8/8a3a00?text=Revitalift+C',
    amazon_url: 'https://amzn.to/TODO-loreal-revitalift-c',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 55–80',
  },
  {
    id: 'needs-niacinamida',
    name: 'Sérum Niacinamida 10%',
    brand: 'Needs',
    category: 'serum_niacinamida',
    skin_types: ['Oleosa', 'Mista'],
    concerns: ['poros', 'oleosidade', 'acne', 'manchas'],
    image_url: 'https://placehold.co/120x120/fde8d8/8a3a00?text=Niacinamida',
    amazon_url: 'https://amzn.to/TODO-needs-niacinamida',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 40–65',
  },
  {
    id: 'adcos-retinol',
    name: 'Sérum Retinol 0.3%',
    brand: 'Adcos',
    category: 'serum_retinol',
    skin_types: ['Normal', 'Mista', 'Seca'],
    concerns: ['envelhecimento', 'manchas', 'rugas', 'hiperpigmentação'],
    image_url: 'https://placehold.co/120x120/fde8d8/8a3a00?text=Retinol',
    amazon_url: 'https://amzn.to/TODO-adcos-retinol',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 90–130',
  },

  // ── TRATAMENTO ────────────────────────────────────────────────────────────
  {
    id: 'needs-clareador',
    name: 'Clareador Facial Intensive',
    brand: 'Needs',
    category: 'tratamento_manchas',
    skin_types: ['Todos', 'Normal', 'Mista', 'Seca'],
    concerns: ['manchas', 'melasma', 'hiperpigmentação'],
    image_url: 'https://placehold.co/120x120/e8d8fd/4a008a?text=Clareador',
    amazon_url: 'https://amzn.to/TODO-needs-clareador',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 60–90',
  },
  {
    id: 'effaclar-duo',
    name: 'Effaclar Duo+ Anti-Imperfeições',
    brand: 'La Roche-Posay',
    category: 'tratamento_acne',
    skin_types: ['Oleosa', 'Mista'],
    concerns: ['acne', 'espinhas', 'poros', 'oleosidade'],
    image_url: 'https://placehold.co/120x120/e8d8fd/4a008a?text=Effaclar+Duo',
    amazon_url: 'https://amzn.to/TODO-effaclar-duo',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 75–110',
  },

  // ── ESFOLIANTE & TÔNICO ───────────────────────────────────────────────────
  {
    id: 'effaclar-micro',
    name: 'Effaclar Gel Micro-Esfoliante',
    brand: 'La Roche-Posay',
    category: 'esfoliante_quimico',
    skin_types: ['Oleosa', 'Mista', 'Normal'],
    concerns: ['poros', 'oleosidade', 'renovação'],
    image_url: 'https://placehold.co/120x120/d8f0e8/006a3a?text=Esfoliante',
    amazon_url: 'https://amzn.to/TODO-effaclar-micro',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 65–90',
  },
  {
    id: 'tonico-skct',
    name: 'Tônico Facial Refrescante',
    brand: 'Vichy',
    category: 'tonico_facial',
    skin_types: ['Oleosa', 'Mista', 'Normal'],
    concerns: ['poros', 'oleosidade', 'frescor'],
    image_url: 'https://placehold.co/120x120/d8f0e8/006a3a?text=Tônico',
    amazon_url: 'https://amzn.to/TODO-vichy-tonico',
    ml_url: 'https://www.mercadolivre.com.br/TODO',
    shopee_url: 'https://shopee.com.br/TODO',
    price_range: 'R$ 50–75',
  },
];

// Returns up to 6 products: one per requested category, skin-type matched when possible.
export function getProductsForDiagnosis(tipo_pele, categorias) {
  if (!Array.isArray(categorias) || categorias.length === 0) return [];

  const used = new Set();
  const results = [];

  for (const cat of categorias) {
    if (results.length >= 6) break;

    // Prefer product matching both skin type and category
    let match = CATALOG.find(p =>
      p.category === cat &&
      !used.has(p.id) &&
      (p.skin_types.includes(tipo_pele) || p.skin_types.includes('Todos'))
    );

    // Fallback: any product in this category
    if (!match) {
      match = CATALOG.find(p => p.category === cat && !used.has(p.id));
    }

    if (match) {
      used.add(match.id);
      results.push({
        id: match.id,
        name: match.name,
        brand: match.brand,
        image_url: match.image_url,
        price_range: match.price_range,
        amazon_url: match.amazon_url,
        ml_url: match.ml_url,
        shopee_url: match.shopee_url,
      });
    }
  }

  return results;
}
