// =========================================================================
const SUPABASE_URL = 'https://ewusvjnpttqwjtdlrgtz.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_ETEFERlUS6cfvsmfWjSPsg_K-GeTt6y';

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

// =========================================================================
// 1. EDITORIAL PORTRAIT & PRODUCT SVGS
// =========================================================================
function renderHairPortraitSVG(skinTone, hairColor, textureStyle, highlightColor) {
  let hairBack = '';
  let hairFront = '';

  if (textureStyle === 'straight') {
    hairBack = `<path d="M25 54 Q26 16 60 15 Q94 16 95 54 L98 112 L22 112 Z" fill="${hairColor}" />`;
    hairFront = `<path d="M35 38 Q60 18 85 38" stroke="${highlightColor}" stroke-width="2" fill="none" opacity="0.6" />`;
  } else if (textureStyle === 'wavy') {
    hairBack = `<path d="M24 54 Q25 15 60 15 Q95 15 96 54 Q103 75 94 94 Q100 105 90 112 L30 112 Q20 105 26 94 Q17 75 24 54 Z" fill="${hairColor}" />`;
    hairFront = `<path d="M31 48 Q22 65 30 82 Q24 96 31 108 M89 48 Q98 65 90 82 Q96 96 89 108" stroke="${highlightColor}" stroke-width="2" fill="none" opacity="0.55" />`;
  } else if (textureStyle === 'curly') {
    hairBack = `
      <circle cx="30" cy="48" r="16" fill="${hairColor}" /><circle cx="90" cy="48" r="16" fill="${hairColor}" />
      <circle cx="24" cy="70" r="16" fill="${hairColor}" /><circle cx="96" cy="70" r="16" fill="${hairColor}" />
      <circle cx="30" cy="92" r="14" fill="${hairColor}" /><circle cx="90" cy="92" r="14" fill="${hairColor}" />
      <circle cx="44" cy="28" r="16" fill="${hairColor}" /><circle cx="76" cy="28" r="16" fill="${hairColor}" />
      <circle cx="60" cy="22" r="16" fill="${hairColor}" />
    `;
    hairFront = `<path d="M26 62 C20 68, 32 74, 24 80 M94 62 C100 68, 88 74, 96 80" stroke="${highlightColor}" stroke-width="1.8" fill="none" opacity="0.55" />`;
  } else {
    hairBack = `
      <circle cx="60" cy="48" r="40" fill="${hairColor}" />
      <circle cx="25" cy="48" r="15" fill="${hairColor}" /><circle cx="95" cy="48" r="15" fill="${hairColor}" />
      <circle cx="35" cy="24" r="16" fill="${hairColor}" /><circle cx="85" cy="24" r="16" fill="${hairColor}" />
      <circle cx="60" cy="17" r="16" fill="${hairColor}" />
    `;
    hairFront = `<path d="M34 32 Q38 26 42 32 M56 20 Q60 14 64 20 M78 32 Q82 26 86 32" stroke="${highlightColor}" stroke-width="1.5" fill="none" opacity="0.5" />`;
  }

  return `
    <svg viewBox="0 0 120 120" class="w-full h-full" aria-hidden="true">
      <rect width="120" height="120" rx="18" fill="#141118" />
      ${hairBack}
      <path d="M48 82 L48 98 L72 98 L72 82 Z" fill="${skinTone}" />
      <path d="M26 120 Q34 96 60 96 Q86 96 94 120 Z" fill="#C99E32" opacity="0.9" />
      <ellipse cx="60" cy="58" rx="22" ry="26" fill="${skinTone}" />
      ${hairFront}
      <circle cx="51" cy="56" r="2.1" fill="#1B1720" />
      <circle cx="69" cy="56" r="2.1" fill="#1B1720" />
      <path d="M47 50 Q51 48 55 50 M65 50 Q69 48 73 50" stroke="#1B1720" stroke-width="1.4" fill="none" stroke-linecap="round" />
      <path d="M53 69 Q60 75 67 69" stroke="#5A2A27" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>
  `;
}

function renderProductPhotoSVG(shape, labelText) {
  if (shape === 'jar') {
    return `<svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto drop-shadow-sm" aria-hidden="true"><ellipse cx="60" cy="103" rx="34" ry="6" fill="#E6D8B8"/><rect x="28" y="42" width="64" height="58" rx="12" fill="#141118" stroke="#C99E32" stroke-width="1.5"/><rect x="26" y="31" width="68" height="14" rx="5" fill="#C99E32"/><rect x="34" y="54" width="52" height="32" rx="6" fill="#FBF8F2"/><text x="60" y="68" text-anchor="middle" font-size="7.5" font-weight="800" fill="#0F0D12">ROOTED</text><text x="60" y="79" text-anchor="middle" font-size="6.2" font-weight="700" fill="#9E771C">${labelText}</text></svg>`;
  }
  if (shape === 'dropper') {
    return `<svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto drop-shadow-sm" aria-hidden="true"><ellipse cx="60" cy="105" rx="24" ry="5" fill="#E6D8B8"/><rect x="40" y="46" width="40" height="56" rx="10" fill="#141118" stroke="#C99E32" stroke-width="1.5"/><rect x="52" y="28" width="16" height="18" rx="3" fill="#C99E32"/><path d="M55 28 L55 17 Q60 11 65 17 L65 28 Z" fill="#0F0D12"/><rect x="44" y="58" width="32" height="32" rx="5" fill="#FBF8F2"/><text x="60" y="72" text-anchor="middle" font-size="7" font-weight="800" fill="#0F0D12">ROOTED</text><text x="60" y="82" text-anchor="middle" font-size="5.8" font-weight="700" fill="#9E771C">${labelText}</text></svg>`;
  }
  if (shape === 'spray') {
    return `<svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto drop-shadow-sm" aria-hidden="true"><ellipse cx="60" cy="106" rx="22" ry="5" fill="#E6D8B8"/><rect x="41" y="42" width="38" height="62" rx="9" fill="#141118" stroke="#C99E32" stroke-width="1.5"/><rect x="53" y="28" width="14" height="14" rx="2" fill="#C99E32"/><path d="M47 28 L72 28 L78 21 L52 21 Z" fill="#0F0D12"/><rect x="45" y="55" width="30" height="36" rx="5" fill="#FBF8F2"/><text x="60" y="70" text-anchor="middle" font-size="7" font-weight="800" fill="#0F0D12">ROOTED</text><text x="60" y="81" text-anchor="middle" font-size="5.5" font-weight="700" fill="#9E771C">${labelText}</text></svg>`;
  }
  return `<svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto drop-shadow-sm" aria-hidden="true"><ellipse cx="60" cy="106" rx="25" ry="5" fill="#E6D8B8"/><rect x="38" y="38" width="44" height="66" rx="11" fill="#141118" stroke="#C99E32" stroke-width="1.5"/><rect x="52" y="25" width="16" height="13" rx="2" fill="#C99E32"/><path d="M58 25 L58 17 L73 17 L73 21 L62 21 L62 25 Z" fill="#0F0D12"/><rect x="43" y="52" width="34" height="38" rx="5" fill="#FBF8F2"/><text x="60" y="68" text-anchor="middle" font-size="7.5" font-weight="800" fill="#0F0D12">ROOTED</text><text x="60" y="79" text-anchor="middle" font-size="5.8" font-weight="700" fill="#9E771C">${labelText}</text></svg>`;
}

// =========================================================================
// 2. CATALOG, 4 HAIR GROUPS & PACKAGES
// =========================================================================
const PRODUCTS = [
  { id: 'p-shampoo-rosemary', name: 'Royal Botanical Clarifying Shampoo', category: 'Shampoo', price: 24, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1A','1B','1C','2A','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Rosemary Leaf, Niacinamide 2%, Zinc PCA', expectedResult: '41% less scalp buildup with zero stripped moisture.', safeGuarantee: 'Sulfate-free, pH 5.2 balanced for every hair type.', shape: 'pump', shortLabel: 'SHAMPOO' },
  { id: 'p-cond-rice', name: 'Silk & Rice Protein Conditioner', category: 'Conditioner', price: 26, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1A','1B','1C','2A','2B','2C','3A','3B','3C','4A'], keyIngredients: 'Hydrolyzed Rice Protein, Babassu Oil, Panthenol B5', expectedResult: 'Instant detangling slip with +28% bounce and shine.', safeGuarantee: 'Water-soluble, silicone-free formula.', shape: 'pump', shortLabel: 'CONDITIONER' },
  { id: 'p-leavein-pomegranate', name: 'Velvet Moisture Leave-In Conditioner', category: 'Leave-In Conditioner', price: 28, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1B','1C','2A','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Pomegranate Extract, Aloe Juice, Amino Ceramides', expectedResult: '+46% 48-hour hydration and frizz-free definition.', safeGuarantee: 'No mineral oil, parabens, or drying alcohols.', shape: 'spray', shortLabel: 'LEAVE-IN' },
  { id: 'p-heat-shield', name: 'Golden Shield Botanical Heat Protectant', category: 'Heat Protectant', price: 27, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1A','1B','1C','2A','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Marula Esters, Grape Seed, Silk Amino Acids', expectedResult: 'Shields strands up to 450°F while preventing cuticle snap.', safeGuarantee: 'Weightless mist; never leaves sticky residue.', shape: 'spray', shortLabel: 'HEAT SHIELD' },
  { id: 'p-cream-flax', name: 'Flaxseed & Murumuru Hair Cream', category: 'Hair Cream', price: 29, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1C','2A','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Flaxseed Mucilage, Murumuru Butter, Jojoba', expectedResult: '72% frizz reduction with soft, touchable hold.', safeGuarantee: 'Zero heavy waxes or flaking.', shape: 'jar', shortLabel: 'HAIR CREAM' },
  { id: 'p-mask-honey', name: 'Honey & Quinoa Deep Repair Hair Mask', category: 'Hair Mask', price: 34, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1B','1C','2A','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Raw Honey Extract, Quinoa Protein, Ceramide NP', expectedResult: '38% fewer split ends and restored strand elasticity.', safeGuarantee: 'Protein-moisture balanced for weekly repair.', shape: 'jar', shortLabel: 'HAIR MASK' },
  { id: 'p-oil-growth', name: 'Rosemary-Biotin Crown Growth Oil', category: 'Hair Oil', price: 30, groups: ['straight', 'wavy', 'curly', 'coily'], forTypes: ['1C','2B','2C','3A','3B','3C','4A','4B','4C'], keyIngredients: 'Rosemary Essential Oil, Biotin, Baobab & Chebe', expectedResult: '+52% length retention and nourished scalp follicles.', safeGuarantee: '100% cold-pressed oils; mineral-oil free.', shape: 'dropper', shortLabel: 'HAIR OIL' },
  { id: 'p-detangle-slip', name: 'Marshmallow Root High-Slip Detangler', category: 'Conditioner', price: 28, groups: ['curly', 'coily'], forTypes: ['3B','3C','4A','4B','4C'], keyIngredients: 'Marshmallow Root, Slippery Elm, Aloe Vera', expectedResult: '3x faster wet detangling with minimal shedding.', safeGuarantee: 'Gentle botanical slip safe for wash days.', shape: 'pump', shortLabel: 'DETANGLER' }
];

const HAIR_GROUPS = [
  {
    id: 'straight', number: 1, name: 'Group 1: Straight Hair', shortName: 'Straight (1A–1C)',
    tagline: 'Weightless royal hydration & scalp balance without flat, greasy buildup.',
    whyGenericFails: 'Most "universal" conditioners use heavy silicones and shea butter that weigh down straight strands within hours.',
    portraits: [
      { label: '1A · Sleek & Fine', skin: '#F2C9AC', hair: '#1A1418', hl: '#C99E32' },
      { label: '1B · Silky Body', skin: '#C98E6B', hair: '#2B1D16', hl: '#E3BE5C' },
      { label: '1C · Thick Straight', skin: '#6F422D', hair: '#141013', hl: '#C99E32' }
    ],
    types: [
      { code: '1A', name: '1A · Pin-Straight & Fine', keywords: '1a straight fine flat oily thin silky', diameter: 'Fine', porosityTendency: 'Low to Normal', description: 'Very soft, shiny strands that lie flat from root to tip and get oily quickly.', svgPath: 'M20 5 L20 55 M32 5 L32 55 M44 5 L44 55' },
      { code: '1B', name: '1B · Straight with Light Body', keywords: '1b straight medium body volume', diameter: 'Medium', porosityTendency: 'Normal', description: 'Straight overall with subtle bends at the ends and natural volume.', svgPath: 'M20 5 Q22 30 19 55 M32 5 Q34 30 31 55 M44 5 Q46 30 43 55' },
      { code: '1C', name: '1C · Coarse Straight', keywords: '1c straight coarse thick frizz resistant', diameter: 'Coarse', porosityTendency: 'Normal to High', description: 'Thick, resilient straight strands that resist curling and can frizz in humidity.', svgPath: 'M18 5 Q21 28 18 55 M32 5 Q35 28 32 55 M46 5 Q49 28 46 55' }
    ],
    ingredients: [
      { name: 'Rosemary + Niacinamide (2%)', result: '41% less scalp oiliness after 14 days', purpose: 'Balances sebum production at the root without stripping dry ends.', safeFor: '1A, 1B, 1C · Color-safe' },
      { name: 'Hydrolyzed Rice Protein', result: '+28% root lift & strand fullness', purpose: 'Lightweight amino acids bind to fine strands without waxy residue.', safeFor: '1A, 1B, 1C · Silicone-free' }
    ]
  },
  {
    id: 'wavy', number: 2, name: 'Group 2: Wavy Hair', shortName: 'Wavy (2A–2C)',
    tagline: 'Defined S-waves with frizz control that never pulls waves straight.',
    whyGenericFails: 'Straight-hair products leave 2A–2C frizzy, while heavy curl creams stretch out delicate S-waves.',
    portraits: [
      { label: '2A · Tousled Waves', skin: '#EBC2A4', hair: '#5A3825', hl: '#E3BE5C' },
      { label: '2B · Defined S-Waves', skin: '#B87B56', hair: '#231715', hl: '#C99E32' },
      { label: '2C · Deep Thick Waves', skin: '#8D5538', hair: '#181215', hl: '#E3BE5C' }
    ],
    types: [
      { code: '2A', name: '2A · Loose Tousled Waves', keywords: '2a wavy loose fine s-wave tousled', diameter: 'Fine to Medium', porosityTendency: 'Low to Normal', description: 'Gentle S-shaped bends starting near ear level; easily weighed down.', svgPath: 'M18 5 Q25 18 18 30 T18 55 M32 5 Q39 18 32 30 T32 55 M46 5 Q53 18 46 30 T46 55' },
      { code: '2B', name: '2B · Defined S-Waves', keywords: '2b wavy medium s-wave frizz', diameter: 'Medium', porosityTendency: 'Normal', description: 'Clearer S-waves from mid-length down with mild crown frizz.', svgPath: 'M18 5 Q28 15 18 25 T18 45 T18 55 M32 5 Q42 15 32 25 T32 45 T32 55 M46 5 Q56 15 46 25 T46 45 T46 55' },
      { code: '2C', name: '2C · Deep Thick Waves', keywords: '2c wavy coarse thick deep wave', diameter: 'Medium to Coarse', porosityTendency: 'Normal to High', description: 'Well-defined waves starting right at the root with a few spiral strands.', svgPath: 'M18 5 C28 12, 10 22, 20 32 C30 42, 12 48, 20 55 M34 5 C44 12, 26 22, 36 32 C46 42, 28 48, 36 55' }
    ],
    ingredients: [
      { name: 'Flaxseed Mucilage + Aloe', result: '72% frizz reduction in humid weather', purpose: 'Creates a breathable cast that locks in S-wave memory without crunch.', safeFor: '2A, 2B, 2C · Lightweight' },
      { name: 'Jojoba Esters', result: '+33% wave definition without heaviness', purpose: 'Mimics natural scalp lipids to smooth lifted cuticles.', safeFor: '2A, 2B, 2C · Non-comedogenic' }
    ]
  },
  {
    id: 'curly', number: 3, name: 'Group 3: Curly Hair', shortName: 'Curly (3A–3C)',
    tagline: 'Springy, hydrated curls with balanced moisture-to-protein elasticity.',
    whyGenericFails: 'Curly hair loses moisture along each bend; harsh detergents cause halo frizz and snapped curl clumps.',
    portraits: [
      { label: '3A · Loose Loops', skin: '#E5B897', hair: '#4B2E1E', hl: '#E3BE5C' },
      { label: '3B · Springy Ringlets', skin: '#A66A46', hair: '#1E1414', hl: '#C99E32' },
      { label: '3C · Tight Corkscrews', skin: '#673B26', hair: '#120E12', hl: '#E3BE5C' }
    ],
    types: [
      { code: '3A', name: '3A · Loose Loops', keywords: '3a curly loose loops big curls', diameter: 'Fine to Medium', porosityTendency: 'Normal to High', description: 'Large, sidewalk-chalk-sized loops with natural shine that can stretch easily.', svgPath: 'M20 5 C30 12, 30 22, 20 25 C10 28, 10 38, 20 42 C30 46, 30 52, 20 55 M40 5 C50 12, 50 22, 40 25 C30 28, 30 38, 40 42 C50 46, 50 52, 40 55' },
      { code: '3B', name: '3B · Springy Ringlets', keywords: '3b curly ringlets springy spiral', diameter: 'Medium', porosityTendency: 'Medium to High', description: 'Sharpie-sized springy spirals with noticeable volume and shrinkage.', svgPath: 'M20 5 C32 10, 8 18, 20 23 C32 28, 8 36, 20 41 C32 46, 8 52, 20 55 M40 5 C52 10, 28 18, 40 23 C52 28, 28 36, 40 41 C52 46, 28 52, 40 55' },
      { code: '3C', name: '3C · Tight Corkscrews', keywords: '3c curly tight corkscrew dense volume', diameter: 'Medium to Coarse', porosityTendency: 'High', description: 'Pencil-sized, densely packed corkscrews that crave rich slip and sealing.', svgPath: 'M20 5 C33 8, 7 14, 20 18 C33 22, 7 28, 20 32 C33 36, 7 42, 20 46 C33 50, 7 54, 20 55 M40 5 C53 8, 27 14, 40 18 C53 22, 27 28, 40 32 C53 36, 27 42, 40 46 C53 50, 27 54, 40 55' }
    ],
    ingredients: [
      { name: 'Pomegranate & Babassu Complex', result: '+46% moisture retention over 48 hours', purpose: 'Penetrates the curl cortex to keep ringlets bouncy and soft.', safeFor: '3A, 3B, 3C · Humectant-balanced' },
      { name: 'Hydrolyzed Quinoa + Ceramides', result: '38% fewer split ends & wet-detangle snap', purpose: 'Reinforces weak curl bends and seals raised cuticles.', safeFor: '3A, 3B, 3C · Protein-balanced' }
    ]
  },
  {
    id: 'coily', number: 4, name: 'Group 4: Coily & Kinky Hair', shortName: 'Coily (4A–4C)',
    tagline: 'Deep nourishment, high-slip detangling & length retention for tight coils.',
    whyGenericFails: 'Coily strands have the most bends per inch and fragile cuticle points—water-thin formulas evaporate fast and leave hair brittle.',
    portraits: [
      { label: '4A · Defined Coils', skin: '#995D3C', hair: '#151014', hl: '#C99E32' },
      { label: '4B · Z-Angle Coils', skin: '#6C3F28', hair: '#120D11', hl: '#E3BE5C' },
      { label: '4C · Crown Coils', skin: '#4A291A', hair: '#0F0B0E', hl: '#C99E32' }
    ],
    types: [
      { code: '4A', name: '4A · Defined Tight Coils', keywords: '4a coily tight coils s-pattern natural', diameter: 'Fine to Medium', porosityTendency: 'High or Low', description: 'Crochet-needle-sized coils with a visible S-pattern and high shrinkage.', svgPath: 'M20 5 C30 7, 10 11, 20 14 C30 17, 10 21, 20 24 C30 27, 10 31, 20 34 C30 37, 10 41, 20 44 C30 47, 10 51, 20 55 M40 5 C50 7, 30 11, 40 14 C50 17, 30 21, 40 24 C50 27, 30 31, 40 34 C50 37, 30 41, 40 44 C50 47, 30 51, 40 55' },
      { code: '4B', name: '4B · Z-Angle Zigzag Coils', keywords: '4b coily kinky z-pattern zigzag fluffy', diameter: 'Fine to Coarse', porosityTendency: 'Low to High', description: 'Sharp Z-shaped angles that create lush volume and need rich slip to detangle.', svgPath: 'M18 6 L26 12 L14 18 L26 24 L14 30 L26 36 L14 42 L26 48 L18 54 M38 6 L46 12 L34 18 L46 24 L34 30 L46 36 L34 42 L46 48 L38 54' },
      { code: '4C', name: '4C · Ultra-Tight Coils', keywords: '4c coily kinky ultra tight shrinkage afro', diameter: 'Fine to Coarse', porosityTendency: 'Often Low or High', description: 'Tightly packed coils with up to 75% shrinkage; thrives on butter-oil moisture sealing.', svgPath: 'M16 6 L24 10 L14 14 L24 18 L14 22 L24 26 L14 30 L24 34 L14 38 L24 42 L14 46 L24 50 L16 54 M36 6 L44 10 L34 14 L44 18 L34 22 L44 26 L34 30 L44 34 L34 38 L44 42 L34 46 L44 50 L36 54' }
    ],
    ingredients: [
      { name: 'Rosemary Mint + Chebe Butter', result: '+52% length retention & reduced shedding', purpose: 'Nourishes scalp follicles and coats fragile Z-angles against friction breakage.', safeFor: '4A, 4B, 4C · Mineral-oil free' },
      { name: 'Marshmallow Root + Baobab Oil', result: '3x faster wet detangling slip', purpose: 'Softens tightly packed coils so fingers and wide-tooth combs glide through.', safeFor: '4A, 4B, 4C · Scalp-safe' }
    ]
  }
];

const TYPE_FACTS = {'1A': {'facts': ['Natural scalp oils (sebum) travel straight down the smooth shaft in hours, making roots look oily fast.', 'Round, fine cuticle layers reflect light for high natural shine, but lack structural grip to hold curls.'], 'washFreq': 'Every 1–2 days', 'keyNeed': 'Weightless root cleansing & amino-acid lift', 'avoid': 'Heavy shea/castor oils, waxes, thick silicones', 'careTip': 'Apply conditioner from ear-level down only, and rinse thoroughly with cool water.'}, '1B': {'facts': ['Slightly thicker cortex than 1A gives natural body and subtle bends at the ends without losing sleekness.', 'Balanced cuticle structure holds heat styles better than 1A but still flattens under heavy creams.'], 'washFreq': 'Every 2–3 days', 'keyNeed': 'Balanced moisture at ends + volume at roots', 'avoid': 'Rich curl butters, over-conditioning the crown', 'careTip': 'Use a lightweight mist leave-in on damp ends before blow-drying or heat styling.'}, '1C': {'facts': ['Coarse, resilient strands resist bending and can puff up or frizz quickly in high humidity.', 'Outer cuticle layers are thicker, requiring targeted smoothing serums rather than sticky gels.'], 'washFreq': 'Every 3–4 days', 'keyNeed': 'Humidity-shielding hydration & cuticle smoothing', 'avoid': 'Harsh drying alcohols, skipping heat protectant', 'careTip': 'Seal damp lengths with 2–3 drops of lightweight botanical oil to lock out humidity.'}, '2A': {'facts': ['Loose S-bends usually start near eye or ear level, leaving the crown flatter and more prone to buildup.', 'Fine-to-medium strands easily stretch straight if weighted down by dense creams or thick oils.'], 'washFreq': 'Every 2–3 days', 'keyNeed': 'Featherlight wave definition & scalp balance', 'avoid': 'Heavy shea butter, thick pomades, dry brushing', 'careTip': 'Scrunch lightweight foam or mist into soaking-wet hair and air-dry or diffuse on low.'}, '2B': {'facts': ['Defined S-waves begin from mid-length down and are prone to halo frizz at the outer canopy.', 'Cuticles lift slightly at each wave curve, letting moisture escape faster than straight hair.'], 'washFreq': 'Every 3–4 days', 'keyNeed': 'Frizz-blocking cast & mid-length moisture', 'avoid': 'Sulfate shampoos, rough terry-cloth towels', 'careTip': 'Plop with a microfiber towel or cotton tee and apply a flaxseed/aloe styler while wet.'}, '2C': {'facts': ['Deep, thick S-waves start right at the root and often mix with a few spiral curls underneath.', 'Higher porosity along the wave crests makes 2C sensitive to humidity and protein-moisture imbalance.'], 'washFreq': 'Every 4–5 days', 'keyNeed': 'Deep hydration + flexible hold without crunch', 'avoid': 'Drying sulfates, fine-tooth dry combing', 'careTip': 'Detangle only in the shower with conditioner slip, then scrunch in a light cream-gel.'}, '3A': {'facts': ['Large, loose loops reflect light well but lose definition quickly when touched while drying.', 'Each curl turn creates a natural dry spot where scalp oils struggle to reach the ends.'], 'washFreq': 'Every 4–6 days', 'keyNeed': 'Clump-forming moisture & gentle hold', 'avoid': 'Heavy mineral oils, sulfates, rough towel rubbing', 'careTip': 'Rake leave-in conditioner through soaking-wet sections and let curls set undisturbed.'}, '3B': {'facts': ['Springy, marker-sized ringlets experience noticeable shrinkage (25–40%) and need elasticity support.', 'Raised cuticles along tight spirals make 3B hair prone to tangling and mid-shaft dryness.'], 'washFreq': 'Every 5–7 days', 'keyNeed': 'Moisture-protein balance & curl elasticity', 'avoid': 'Drying alcohols, waxes, heat without protectant', 'careTip': 'Layer leave-in conditioner under a curl cream on wet hair using the praying-hands method.'}, '3C': {'facts': ['Densely packed, pencil-sized corkscrews have high volume and high porosity at the bends.', 'Tightly wound strands tangle easily and can snap if detangled dry or without high-slip conditioner.'], 'washFreq': 'Every 7 days', 'keyNeed': 'Rich slip, cuticle sealing & weekly deep masks', 'avoid': 'Sulfates, dry brushing, skipping satin sleep protection', 'careTip': 'Detangle in 4–6 sections with conditioner in the shower and sleep on satin.'}, '4A': {'facts': ['Tight, crochet-needle-sized coils retain a visible S-pattern and experience up to 50% shrinkage.', 'Scalp sebum rarely travels past the first inch, making ends naturally drier than straighter types.'], 'washFreq': 'Every 7–10 days', 'keyNeed': 'Intense moisture retention & gentle scalp care', 'avoid': 'Harsh sulfates, mineral oil, high-heat flat irons', 'careTip': 'Use the LOC/LCO method (Leave-in, Cream, Oil) on damp hair to lock in hydration for days.'}, '4B': {'facts': ['Sharp Z-angle bends create lush, cloud-like volume with up to 60–70% shrinkage.', 'Each sharp Z-turn is a structural weak point where cuticles lift and friction breakage can occur.'], 'washFreq': 'Every 7–10 days', 'keyNeed': 'High-slip detangling & friction protection', 'avoid': 'Fine-tooth combs, dry manipulation, drying alcohols', 'careTip': 'Finger-detangle in small sections coated with marshmallow-root conditioner or oil.'}, '4C': {'facts': ['Ultra-tight coils have the highest density of bends per inch and up to 75% shrinkage.', 'The tightest coil structure is the most fragile when dry, thriving on rich butters and botanical oils.'], 'washFreq': 'Every 7–14 days', 'keyNeed': 'Butter-oil moisture sealing & length retention', 'avoid': 'Sulfates, parabens, daily heat, rough cotton pillowcases', 'careTip': 'Deep condition weekly with gentle warmth and keep ends tucked in low-manipulation styles.'}};

const PACKAGES = {
  regular: {
    id: 'pkg-regular', name: 'Regular Hair Care Set', price: 49,
    tagline: 'Complete foundational set + core report on what your hair needs.',
    setContents: ['At-Home Strand & Scalp Test Card', 'Full-Size Clarifying Shampoo (8 oz)', 'Full-Size Conditioner (8 oz)', 'Full-Size Leave-In Conditioner (6 oz)'],
    digitalBenefits: ['Unlocks your core "What Your Hair Needs" report', 'Basic moisture-vs-protein balance score']
  },
  exclusive: {
    id: 'pkg-exclusive', name: 'Exclusive Specialized Set', price: 89,
    tagline: 'Everything in Regular PLUS extra growth essentials, specialized to your exact hair type, hair goals, and what your hair needs to be healthy.',
    setContents: ['4-Marker Bio-Lab Hair Test Kit', 'Specialized Shampoo, Conditioner & Leave-In for your exact type', 'BONUS: Honey & Quinoa Hair Mask + Heat Protectant', 'BONUS: Rosemary-Biotin Crown Growth Oil + Satin Bonnet'],
    digitalBenefits: ['Specialized blueprint for your exact hair type (1A–4C) & hair goals', 'Unlocks "What Your Hair Needs" to grow & stay healthy', 'Unlocks "What Your Hair Doesn’t Need" (Avoid List)', 'Unlocks your interactive Step-by-Step Routine Tracker']
  }
};

// =========================================================================
// 3. STATE & SUPABASE SYNC
// =========================================================================
const STORAGE_KEY = 'pvs_royal_supabase_v1';
const DEFAULT_STATE = {
  activePage: 'home',
  activeGroupId: 'curly',
  selectedTypeCode: '3B',
  groupSubTab: 'products',
  activeCategory: 'all',
  searchQuery: '',
  currentUser: null, // { id, name, email, purchasedRegular, purchasedExclusive }
  testProfile: { hairType: '3B', porosity: 'Medium', scalp: 'Balanced', goal: 'Growth & Length Retention', lastTested: 'Nov 23, 2026' },
  routineCompleted: { 'step-1': false, 'step-2': false, 'step-3': false, 'step-4': false },
  aiMessages: [{ role: 'ai', text: 'Welcome to Rooted! Ask me anything about your hair type (1A–4C), our royal botanical products, or which package fits your hair goals.' }],
  savedProductIds: [],
  cart: [],
  orders: []
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    return { ...structuredClone(DEFAULT_STATE), ...JSON.parse(raw) };
  } catch (e) {
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
}

let state = loadState();

async function syncUserFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session || !session.user) return;
    const u = session.user;
    const { data: profile } = await supabaseClient
      .from('hair_profiles')
      .select('*')
      .eq('user_id', u.id)
      .maybeSingle();

    state.currentUser = {
      id: u.id,
      email: u.email,
      name: (u.user_metadata && u.user_metadata.full_name) || u.email.split('@')[0],
      purchasedRegular: profile ? !!profile.purchased_regular : false,
      purchasedExclusive: profile ? !!profile.purchased_exclusive : false
    };
    if (profile && profile.hair_type) {
      state.testProfile = {
        hairType: profile.hair_type,
        porosity: profile.porosity || 'Medium',
        scalp: profile.scalp || 'Balanced',
        goal: profile.goal || 'Growth & Length Retention',
        lastTested: profile.updated_at ? new Date(profile.updated_at).toLocaleDateString() : 'Synced'
      };
    }
    saveState();
    render();
  } catch (err) {
    console.warn('Supabase sync skipped:', err.message);
  }
}

async function saveProfileToSupabase() {
  if (!supabaseClient || !state.currentUser) return;
  try {
    await supabaseClient.from('hair_profiles').upsert({
      user_id: state.currentUser.id,
      hair_type: state.testProfile.hairType,
      porosity: state.testProfile.porosity,
      scalp: state.testProfile.scalp,
      goal: state.testProfile.goal,
      purchased_regular: !!state.currentUser.purchasedRegular,
      purchased_exclusive: !!state.currentUser.purchasedExclusive,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id' });
  } catch (err) {
    console.warn('Profile save error:', err.message);
  }
}

// =========================================================================
// 4. HELPERS & RENDERERS
// =========================================================================
function hasRegularAccess() { return !!(state.currentUser && (state.currentUser.purchasedRegular || state.currentUser.purchasedExclusive)); }
function hasExclusiveAccess() { return !!(state.currentUser && state.currentUser.purchasedExclusive); }
function findGroupByType(code) { return HAIR_GROUPS.find(g => g.types.some(t => t.code === code)) || HAIR_GROUPS[2]; }
function getAllTypes() { return HAIR_GROUPS.flatMap(g => g.types.map(t => ({ ...t, groupId: g.id, groupName: g.shortName }))); }

function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

function addToCart(item) {
  const existing = state.cart.find(c => c.id === item.id);
  if (existing) existing.qty += 1;
  else state.cart.push({ id: item.id, name: item.name, price: item.price, qty: 1, tag: item.tag || 'Product' });
  saveState(); updateChrome(); showToast(`${item.name} added to bag`);
}

function toggleSaveProduct(productId) {
  const idx = state.savedProductIds.indexOf(productId);
  if (idx >= 0) { state.savedProductIds.splice(idx, 1); showToast('Removed from saved'); }
  else { state.savedProductIds.push(productId); showToast('Saved to your hair profile'); }
  saveState(); render();
}

function openProductModal(product, groupLabel) {
  const modal = document.getElementById('detailModal');
  document.getElementById('modalBadge').textContent = `${product.category} · ${groupLabel}`;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalBody').innerHTML = `
    <div class="bg-champagne rounded-2xl p-4 border border-borderGold flex justify-center">${renderProductPhotoSVG(product.shape, product.shortLabel)}</div>
    <div class="p-3.5 rounded-2xl bg-goldSoft border border-borderGold">
      <div class="text-xs font-bold uppercase tracking-wider text-obsidian mb-1">Ingredients with Proven Results</div>
      <p class="font-semibold text-obsidian">${product.keyIngredients}</p>
      <p class="text-stone-700 mt-1">${product.expectedResult}</p>
    </div>
    <div class="p-3.5 rounded-2xl bg-ivory border border-borderGold">
      <div class="text-xs font-bold uppercase tracking-wider text-royalGold mb-1">Zero Second-Guessing Guarantee</div>
      <p class="text-stone-700">${product.safeGuarantee}</p>
    </div>
    <div class="flex items-center justify-between pt-2">
      <span class="text-lg font-bold text-obsidian">$${product.price}.00</span>
      <button id="modalAddBagBtn" type="button" class="px-5 py-3 rounded-xl bg-obsidian text-goldBright font-semibold hover:bg-velvet transition tap-target border border-royalGold/40">Add to Bag — $${product.price}</button>
    </div>
  `;
  modal.classList.remove('hidden');
  document.getElementById('modalAddBagBtn').onclick = () => { addToCart({ id: product.id, name: product.name, price: product.price, tag: product.category }); modal.classList.add('hidden'); };
}

function generateAiReply(question) {
  const q = question.toLowerCase();
  const p = state.testProfile;
  const group = findGroupByType(p.hairType);
  if (q.includes('heat') || q.includes('flat iron')) return `For your ${p.hairType} (${p.porosity} porosity) hair, mist our Golden Shield Botanical Heat Protectant ($27) before heat styling up to 450°F.`;
  if (q.includes('exclusive') || q.includes('regular') || q.includes('package')) return `Both packages include a whole set! Regular ($49) gives Shampoo, Conditioner, Leave-In + what your hair needs. Exclusive ($89) adds our Hair Mask, Crown Growth Oil, Heat Protectant & Satin Bonnet, specialized to your ${p.hairType} hair type and goals.`;
  if (q.includes('shampoo') || q.includes('wash')) return `Our Royal Botanical Clarifying Shampoo ($24) is sulfate-free and reduces scalp oiliness by 41% in 14 days.`;
  if (q.includes('mask') || q.includes('damage')) return `Use our Honey & Quinoa Deep Repair Hair Mask ($34) weekly—it reduces split ends by 38% and restores elasticity.`;
  if (q.includes('oil') || q.includes('grow')) return `Massage 3–4 drops of Rosemary-Biotin Crown Growth Oil ($30) into your scalp 3x weekly for +52% length retention.`;
  const matchType = q.match(/\b([1-4][a-c])\b/i);
  if (matchType) {
    const code = matchType[1].toUpperCase();
    const g = findGroupByType(code);
    return `Hair Type ${code} belongs to ${g.name}. ${g.whyGenericFails} Our top ingredient match for ${code} is ${g.ingredients[0].name} (${g.ingredients[0].result}).`;
  }
  return `Based on your saved ${p.hairType} (${p.porosity} porosity) profile and goal (${p.goal}), explore the ${group.shortName} tab in the sidebar to see people with your hair type and matched royal products!`;
}

function getDiagnosticPlan(profile) {
  const group = findGroupByType(profile.hairType);
  const isLow = profile.porosity === 'Low';
  const isHigh = profile.porosity === 'High';
  return {
    group,
    needs: [
      { title: isLow ? 'Lightweight Water-Based Hydration + Gentle Heat' : isHigh ? 'Ceramides + Protein-Moisture Sealing' : 'Balanced Amino Hydration', detail: isLow ? `Your ${profile.hairType} cuticles lie flat; warm water helps moisture absorb cleanly.` : `Reinforce ${profile.hairType} elasticity with pH-balanced cleansers and botanical oils.` },
      { title: profile.scalp === 'Oily' ? 'Rosemary + Niacinamide Scalp Clarifier' : 'Rosemary-Biotin Crown Scalp Care', detail: `Specialized for your ${profile.scalp.toLowerCase()} scalp and goal: ${profile.goal}.` }
    ],
    avoids: [
      { title: isLow ? 'Heavy Raw Butters & Waxes' : 'Harsh Sulfates (SLS / SLES)', why: isLow ? 'Blocks hydration on low-porosity cuticles.' : 'Strips essential lipids, causing breakage.' },
      { title: 'Unprotected High-Heat Styling', why: 'Always use Golden Shield Botanical Heat Protectant before heat.' },
      { title: 'Drying Short-Chain Alcohols', why: 'Evaporates moisture and causes inconsistent day-2 results.' }
    ],
    steps: [
      { id: 'step-1', step: 'Step 1 · Cleanse Scalp', time: '4 mins', action: 'Massage Royal Botanical Clarifying Shampoo onto scalp.', product: 'Royal Botanical Clarifying Shampoo' },
      { id: 'step-2', step: 'Step 2 · Condition & Detangle', time: '5 mins', action: 'Apply Silk & Rice Protein Conditioner in sections and detangle.', product: 'Silk & Rice Protein Conditioner' },
      { id: 'step-3', step: 'Step 3 · Deep Mask & Moisture Seal', time: '10 mins', action: 'Apply Honey & Quinoa Mask, rinse, then layer Leave-In & Hair Cream.', product: 'Honey & Quinoa Mask + Velvet Leave-In' },
      { id: 'step-4', step: 'Step 4 · Crown Growth Oil & Satin Bonnet', time: '2 mins', action: 'Massage Rosemary-Biotin Crown Growth Oil into scalp and protect overnight.', product: 'Crown Growth Oil + Satin Bonnet' }
    ]
  };
}

function openSidebar() { document.getElementById('appSidebar').classList.remove('-translate-x-full'); document.getElementById('sidebarBackdrop').classList.remove('hidden'); }
function closeSidebar() { document.getElementById('appSidebar').classList.add('-translate-x-full'); document.getElementById('sidebarBackdrop').classList.add('hidden'); }

function navigate(page, opts = {}) {
  state.activePage = page;
  if (opts.groupId) state.activeGroupId = opts.groupId;
  if (opts.typeCode) state.selectedTypeCode = opts.typeCode;
  if (opts.category) state.activeCategory = opts.category;
  if (opts.groupSubTab) state.groupSubTab = opts.groupSubTab;
  closeSidebar(); saveState(); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateChrome() {
  const totalItems = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('bagCountBadge');
  const mobileDot = document.getElementById('mobileBagDot');
  badge.textContent = totalItems; mobileDot.textContent = totalItems;
  badge.classList.toggle('hidden', totalItems === 0);
  mobileDot.classList.toggle('hidden', totalItems === 0);

  document.getElementById('headerAuthText').textContent = state.currentUser ? `Hi, ${state.currentUser.name}` : 'Log In';
  document.getElementById('sidebarProfileSummary').textContent = `Type ${state.testProfile.hairType} · ${state.testProfile.porosity} Porosity`;

  const titles = {
    home: 'Rooted · Home',
    groups: `${findGroupByType(state.selectedTypeCode).name}`,
    catalog: `Essentials · ${state.activeCategory === 'all' ? 'All Products' : state.activeCategory}`,
    kits: 'Whole-Set Packages', exclusive: 'My Kit Results & Routine',
    ai: 'Ask Rooted AI (Gemini)', login: 'Log In / Account', signup: 'Create Account', bag: 'Shopping Bag & Data'
  };
  document.getElementById('pageHeaderTitle').textContent = titles[state.activePage] || 'Rooted';

  document.querySelectorAll('.side-nav-btn').forEach(btn => {
    const active = btn.dataset.nav === state.activePage;
    btn.className = active ? 'side-nav-btn w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold bg-royalGold text-obsidian shadow-sm transition' : 'side-nav-btn w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-stone-300 hover:bg-velvet hover:text-goldBright transition';
  });
  document.querySelectorAll('.group-side-btn').forEach(btn => {
    const active = state.activePage === 'groups' && btn.dataset.sideGroup === state.activeGroupId;
    btn.className = active ? 'group-side-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold bg-royalGold text-obsidian transition' : 'group-side-btn w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-stone-300 hover:bg-velvet hover:text-goldBright transition';
  });
  document.querySelectorAll('.cat-nav-btn').forEach(btn => {
    const active = state.activePage === 'catalog' && btn.dataset.cat === state.activeCategory;
    btn.className = active ? 'cat-nav-btn w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold bg-royalGold text-obsidian transition' : 'cat-nav-btn w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-stone-300 hover:bg-velvet hover:text-goldBright transition';
  });
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    const active = btn.dataset.nav === state.activePage;
    btn.className = active ? 'mobile-nav-btn relative flex flex-col items-center justify-center py-1.5 rounded-xl text-[11px] font-bold text-goldBright bg-velvet transition' : 'mobile-nav-btn relative flex flex-col items-center justify-center py-1.5 rounded-xl text-[11px] font-medium text-stone-400 transition';
  });
}

function renderHome() {
  const allTypes = getAllTypes();
  const q = state.searchQuery.trim().toLowerCase();
  const matches = q ? allTypes.filter(t => t.code.toLowerCase().includes(q) || t.name.toLowerCase().includes(q) || t.keywords.includes(q)) : [];
  const homeFaces = [
    { label: 'Straight · 1A–1C', skin: '#F2C9AC', hair: '#1A1418', style: 'straight', hl: '#E3BE5C', groupId: 'straight' },
    { label: 'Wavy · 2A–2C', skin: '#B87B56', hair: '#231715', style: 'wavy', hl: '#C99E32', groupId: 'wavy' },
    { label: 'Curly · 3A–3C', skin: '#E5B897', hair: '#4B2E1E', style: 'curly', hl: '#E3BE5C', groupId: 'curly' },
    { label: 'Coily · 4A–4C', skin: '#5B3321', hair: '#110D10', style: 'coily', hl: '#C99E32', groupId: 'coily' }
  ];

  return `
    <div class="space-y-6 fade-in">
      <section class="rounded-3xl bg-gradient-to-br from-[#0F0D12] via-[#1E1924] to-[#2C2214] text-white p-6 md:p-8 shadow-md border border-royalGold/40">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royalGold/20 border border-royalGold/40 text-goldBright text-xs font-semibold mb-3"><i data-lucide="crown" class="w-3.5 h-3.5"></i><span>Rooted · Royal Care for All</span></div>
        <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">Luxury hair science crafted for <span class="text-goldBright">every race &amp; texture</span>.</h1>
        <p class="text-stone-300 text-sm md:text-base mt-3 leading-relaxed max-w-2xl">Stop guessing if a product will work or damage your hair. Explore real hair-type galleries, transparent ingredient results, and complete royal hair sets.</p>
        <div class="flex flex-wrap gap-3 mt-5">
          <button id="heroShopEssentialsBtn" type="button" class="px-5 py-3 rounded-xl bg-royalGold text-obsidian font-bold text-sm hover:bg-goldBright transition tap-target flex items-center gap-2"><span>Shop Royal Essentials</span><i data-lucide="arrow-right" class="w-4 h-4"></i></button>
          <button id="heroAskAiBtn" type="button" class="px-5 py-3 rounded-xl bg-velvet text-goldBright border border-royalGold/40 font-semibold text-sm hover:bg-black transition tap-target flex items-center gap-2"><i data-lucide="sparkles" class="w-4 h-4"></i><span>Ask Hair AI</span></button>
        </div>
      </section>

      <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm">
        <div class="flex items-center justify-between mb-3"><div><h2 class="text-lg font-bold text-obsidian">Celebrating Every Race &amp; Hair Texture</h2><p class="text-xs text-stone-500">Tap any texture to see real hair-type matches and products</p></div><span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-goldSoft text-obsidian border border-borderGold">All 12 Types</span></div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${homeFaces.map(f => `<button data-open-group="${f.groupId}" type="button" class="group text-center rounded-2xl bg-ivory border border-borderGold p-2.5 hover:border-royalGold transition tap-target"><div class="aspect-square rounded-xl overflow-hidden mb-2 border border-royalGold/30">${renderHairPortraitSVG(f.skin, f.hair, f.style, f.hl)}</div><div class="font-bold text-xs text-obsidian group-hover:text-royalGold transition">${f.label}</div></button>`).join('')}</div>
      </section>

      <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm">
        <div class="flex items-center justify-between mb-3"><div><h2 class="text-lg font-bold text-obsidian">Royal Collection Essentials</h2><p class="text-xs text-stone-500">Shampoo, Conditioner, Leave-In, Heat Protectant, Cream, Masks &amp; Oil</p></div><button id="homeViewAllProductsBtn" type="button" class="text-xs font-bold text-royalGold hover:underline tap-target">View All →</button></div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">${PRODUCTS.slice(0, 4).map(p => `<div class="rounded-2xl bg-ivory border border-borderGold p-3 flex flex-col justify-between gap-2"><div><div class="bg-white rounded-xl py-2 mb-2 border border-borderGold/60">${renderProductPhotoSVG(p.shape, p.shortLabel)}</div><div class="text-[10px] font-bold uppercase text-royalGold">${p.category}</div><h3 class="font-bold text-xs text-obsidian line-clamp-2 mt-0.5">${p.name}</h3></div><div class="flex items-center justify-between pt-2 border-t border-borderGold/60"><span class="font-bold text-xs text-obsidian">$${p.price}</span><button data-add-catalog="${p.id}" type="button" class="px-2.5 py-1 rounded-lg bg-obsidian text-goldBright text-[11px] font-semibold">Add</button></div></div>`).join('')}</div>
      </section>

      <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm">
        <div class="flex items-center justify-between gap-2 mb-2"><label for="hairSearchInput" class="font-bold text-base text-obsidian">Search Your Hair Type (1A – 4C)</label><span class="text-xs text-stone-500">12 types · 4 groups</span></div>
        <div class="relative"><i data-lucide="search" class="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"></i><input id="hairSearchInput" type="search" value="${state.searchQuery.replace(/"/g, '&quot;')}" placeholder="Try '3B', '4C', 'loose waves', 'oily', 'tight coils'..." class="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-ivory border border-borderGold text-sm focus:outline-none focus:ring-2 focus:ring-royalGold" /></div>
        ${q ? `<div class="mt-3 space-y-2">${matches.length > 0 ? matches.map(m => `<button data-jump-group="${m.groupId}" data-jump-type="${m.code}" type="button" class="w-full text-left p-3.5 rounded-2xl bg-ivory hover:bg-goldSoft border border-borderGold flex items-center justify-between gap-3 transition tap-target"><div class="flex items-center gap-3"><span class="w-10 h-10 rounded-xl bg-obsidian text-goldBright font-bold text-sm flex items-center justify-center shrink-0">${m.code}</span><div><div class="font-semibold text-sm text-obsidian">${m.name}</div><div class="text-xs text-stone-500">${m.groupName} · ${m.description}</div></div></div><i data-lucide="chevron-right" class="w-4 h-4 text-stone-400 shrink-0"></i></button>`).join('') : `<div class="p-4 rounded-2xl bg-ivory text-sm text-stone-600 text-center">No match found.</div>`}</div>` : `<div class="flex flex-wrap gap-2 mt-3"><span class="text-xs text-stone-500 py-1">Quick jump:</span>${['1A','2B','3B','4C'].map(code => { const g = findGroupByType(code); return `<button data-jump-group="${g.id}" data-jump-type="${code}" type="button" class="px-3 py-1 rounded-full bg-goldSoft border border-borderGold text-xs font-semibold text-obsidian hover:bg-royalGold hover:text-white transition">${code}</button>`; }).join('')}</div>`}
      </section>
    </div>
  `;
}

function renderGroups() {
  const group = HAIR_GROUPS.find(g => g.id === state.activeGroupId) || HAIR_GROUPS[0];
  const activeType = group.types.find(t => t.code === state.selectedTypeCode) || group.types[0];
  const activeFacts = TYPE_FACTS[activeType.code] || { facts: [], washFreq: 'Weekly', keyNeed: '', avoid: '', careTip: '' };
  const matchedProducts = PRODUCTS.filter(p => p.groups.includes(group.id));
  const subTab = state.groupSubTab || 'products';

  return `
    <div class="space-y-5 fade-in">
      <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">${HAIR_GROUPS.map(g => `<button data-select-group="${g.id}" type="button" class="px-4 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap border transition tap-target ${g.id === group.id ? 'bg-obsidian text-goldBright border-royalGold shadow-sm' : 'bg-white text-stone-700 border-borderGold'}">${g.shortName}</button>`).join('')}</div>

      <section class="bg-obsidian text-white rounded-3xl p-5 md:p-6 border border-royalGold/40 shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div><span class="text-[11px] font-bold uppercase tracking-wider text-goldBright">Real Hair Type Gallery · ${group.shortName}</span><h1 class="text-xl md:text-2xl font-extrabold mt-0.5">${group.name}</h1></div>
          <button data-save-type="${activeType.code}" type="button" class="px-3 py-1.5 rounded-full bg-velvet text-goldBright text-xs font-semibold border border-royalGold/40 hover:bg-royalGold hover:text-obsidian transition">${state.testProfile.hairType === activeType.code ? '✓ Saved as My Hair Type' : `Set ${activeType.code} as My Type`}</button>
        </div>
        <p class="text-xs sm:text-sm text-stone-300 mb-3">${group.tagline}</p>
        <div class="grid grid-cols-3 gap-3 mt-3">${group.portraits.map(pt => `<div class="rounded-2xl bg-velvet border border-royalGold/30 p-2 text-center"><div class="aspect-square rounded-xl overflow-hidden mb-1.5">${renderHairPortraitSVG(pt.skin, pt.hair, group.id, pt.hl)}</div><div class="text-[11px] font-semibold text-goldBright">${pt.label}</div></div>`).join('')}</div>
      </section>

      <section class="bg-white rounded-3xl p-4 md:p-5 border border-borderGold shadow-sm space-y-3.5">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 class="text-base font-bold text-obsidian">Facts &amp; Important Details for ${group.shortName}</h2>
            <p class="text-xs text-stone-600 mt-0.5"><strong>Why generic products fail:</strong> ${group.whyGenericFails}</p>
          </div>
          <span class="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-goldSoft text-obsidian border border-borderGold">Tap a type for full details</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          ${group.types.map(t => {
            const isSel = t.code === activeType.code;
            const tf = TYPE_FACTS[t.code] || { facts: [], washFreq: '', keyNeed: '' };
            return `<button data-select-type="${t.code}" type="button" class="text-left p-3.5 rounded-2xl border transition tap-target flex flex-col justify-between gap-2 ${isSel ? 'bg-obsidian text-white border-royalGold shadow-sm' : 'bg-ivory text-obsidian border-borderGold hover:bg-goldSoft/60'}">
              <div class="flex items-center gap-2">
                <svg viewBox="0 0 64 60" class="w-8 h-8 shrink-0 ${isSel ? 'text-goldBright' : 'text-royalGold'}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="${t.svgPath}"/></svg>
                <span class="font-bold text-sm ${isSel ? 'text-goldBright' : 'text-obsidian'}">${t.name}</span>
              </div>
              <p class="text-xs leading-relaxed ${isSel ? 'text-stone-200' : 'text-stone-600'}">${t.description}</p>
              <div class="text-[11px] space-y-0.5 pt-1.5 border-t ${isSel ? 'border-white/15 text-stone-300' : 'border-borderGold/70 text-stone-600'}">
                <div><strong class="${isSel ? 'text-goldBright' : 'text-obsidian'}">Diameter:</strong> ${t.diameter} · <strong class="${isSel ? 'text-goldBright' : 'text-obsidian'}">Porosity:</strong> ${t.porosityTendency}</div>
                <div><strong class="${isSel ? 'text-goldBright' : 'text-obsidian'}">Wash Cadence:</strong> ${tf.washFreq}</div>
              </div>
            </button>`;
          }).join('')}
        </div>
      </section>

      <div class="grid grid-cols-2 gap-3">
        <button data-group-subtab="products" type="button" class="p-3.5 rounded-2xl font-bold text-xs sm:text-sm border transition tap-target flex items-center justify-center gap-2 ${subTab === 'products' ? 'bg-royalGold text-obsidian border-royalGold shadow-sm' : 'bg-white text-obsidian border-borderGold'}"><i data-lucide="shopping-bag" class="w-4 h-4"></i><span>1. Products for ${activeType.code} &amp; ${group.shortName}</span></button>
        <button data-group-subtab="guide" type="button" class="p-3.5 rounded-2xl font-bold text-xs sm:text-sm border transition tap-target flex items-center justify-center gap-2 ${subTab === 'guide' ? 'bg-royalGold text-obsidian border-royalGold shadow-sm' : 'bg-white text-obsidian border-borderGold'}"><i data-lucide="sparkles" class="w-4 h-4"></i><span>2. Hair Guide &amp; Ingredients</span></button>
      </div>

      ${subTab === 'products' ? `
        <section class="space-y-4">
          <div class="p-4 rounded-2xl bg-goldSoft/70 border border-borderGold space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-royalGold">Key Facts · Type ${activeType.code}</span>
                <h3 class="font-bold text-sm text-obsidian">${activeType.name}</h3>
              </div>
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-obsidian text-goldBright">Wash: ${activeFacts.washFreq}</span>
            </div>
            <ul class="text-xs text-stone-700 space-y-1 list-disc list-inside">
              ${activeFacts.facts.map(f => `<li>${f}</li>`).join('')}
            </ul>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              <div class="p-2.5 rounded-xl bg-white/80 border border-borderGold"><strong class="text-obsidian">Primary Need:</strong> <span class="text-stone-700">${activeFacts.keyNeed}</span></div>
              <div class="p-2.5 rounded-xl bg-white/80 border border-borderGold"><strong class="text-obsidian">Avoid:</strong> <span class="text-stone-700">${activeFacts.avoid}</span></div>
            </div>
          </div>
          <div class="flex items-center justify-between"><h2 class="text-lg font-bold text-obsidian">Products for ${group.shortName} (${matchedProducts.length})</h2><span class="text-xs text-stone-500">Highlighted for Type ${activeType.code}</span></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${matchedProducts.map(p => { const isExact = p.forTypes.includes(activeType.code); return `<div class="bg-white rounded-3xl p-4 border border-borderGold shadow-sm flex flex-col justify-between gap-3"><div class="flex items-start gap-3.5"><div class="w-20 h-20 rounded-2xl bg-ivory border border-borderGold flex items-center justify-center shrink-0">${renderProductPhotoSVG(p.shape, p.shortLabel)}</div><div class="flex-1 min-w-0"><div class="flex items-center justify-between gap-1"><span class="text-[11px] font-bold text-royalGold">${p.category}</span><span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${isExact ? 'bg-obsidian text-goldBright' : 'bg-goldSoft text-obsidian'}">${isExact ? `Best for ${activeType.code}` : group.shortName}</span></div><h3 class="font-bold text-sm text-obsidian mt-0.5">${p.name}</h3><p class="text-[11px] text-stone-500 mt-1">${p.expectedResult}</p></div></div><div class="flex items-center justify-between pt-2.5 border-t border-borderGold/70"><button data-inspect-catalog="${p.id}" type="button" class="text-xs font-semibold text-obsidian underline tap-target">Ingredient Safety</button><button data-add-catalog="${p.id}" type="button" class="px-4 py-2 rounded-xl bg-obsidian text-goldBright text-xs font-semibold tap-target">Add · $${p.price}</button></div></div>`; }).join('')}</div>
        </section>
      ` : `
        <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm space-y-4">
          <div class="p-4 rounded-2xl bg-ivory border border-borderGold space-y-3">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-royalGold">Detailed Science &amp; Care · Type ${activeType.code}</span>
              <h3 class="font-bold text-base text-obsidian mt-0.5">${activeType.name}</h3>
              <p class="text-sm text-stone-700 mt-1">${activeType.description}</p>
            </div>
            <div class="space-y-1.5">
              <div class="text-xs font-bold text-obsidian uppercase tracking-wider">Key Hair Facts</div>
              <ul class="text-xs text-stone-700 space-y-1 list-disc list-inside">
                ${activeFacts.facts.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div class="p-3 rounded-xl bg-white border border-borderGold"><strong class="text-obsidian block mb-0.5">Strand &amp; Porosity</strong>${activeType.diameter} · ${activeType.porosityTendency}</div>
              <div class="p-3 rounded-xl bg-white border border-borderGold"><strong class="text-obsidian block mb-0.5">Ideal Wash Cadence</strong>${activeFacts.washFreq}</div>
              <div class="p-3 rounded-xl bg-white border border-borderGold"><strong class="text-obsidian block mb-0.5">What Your Hair Needs</strong>${activeFacts.keyNeed}</div>
              <div class="p-3 rounded-xl bg-white border border-borderGold"><strong class="text-obsidian block mb-0.5">Ingredients &amp; Habits to Avoid</strong>${activeFacts.avoid}</div>
            </div>
            <div class="p-3 rounded-xl bg-goldSoft/80 border border-borderGold text-xs text-obsidian"><strong>Royal Care Tip:</strong> ${activeFacts.careTip}</div>
          </div>
          <div>
            <h3 class="font-bold text-sm text-obsidian mb-2.5">Clinical Ingredients &amp; Proven Results for ${group.shortName}</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">${group.ingredients.map(ing => `<div class="p-4 rounded-2xl bg-goldSoft/60 border border-borderGold"><div class="text-xs font-bold text-royalGold mb-1">${ing.result}</div><h4 class="font-bold text-sm text-obsidian">${ing.name}</h4><p class="text-xs text-stone-700 mt-1">${ing.purpose}</p><div class="text-[11px] font-semibold text-stone-500 mt-2">${ing.safeFor}</div></div>`).join('')}</div>
          </div>
        </section>
      `}
    </div>
  `;
}

function renderCatalog() {
  const cat = state.activeCategory;
  const items = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  const userType = state.testProfile.hairType;
  return `
    <div class="space-y-5 fade-in">
      <div><h1 class="text-2xl font-extrabold text-obsidian">${cat === 'all' ? 'All Royal Hair Essentials' : cat}</h1><p class="text-xs text-stone-500 mt-0.5">Studio product photos · Proven ingredients · Matched for Type ${userType}</p></div>
      <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">${['all','Shampoo','Conditioner','Leave-In Conditioner','Heat Protectant','Hair Cream','Hair Mask','Hair Oil'].map(c => `<button data-cat-pill="${c}" type="button" class="px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap border transition tap-target ${cat === c ? 'bg-obsidian text-goldBright border-royalGold' : 'bg-white text-stone-700 border-borderGold'}">${c === 'all' ? 'All Essentials' : c}</button>`).join('')}</div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">${items.map(p => { const isMatch = p.forTypes.includes(userType); const isSaved = state.savedProductIds.includes(p.id); return `<div class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm flex flex-col justify-between gap-4"><div><div class="flex items-center justify-between gap-2 mb-3"><span class="px-2.5 py-1 rounded-full text-[11px] font-bold ${isMatch ? 'bg-obsidian text-goldBright' : 'bg-goldSoft text-obsidian'}">${isMatch ? `✓ Matches Your ${userType}` : p.category}</span><button data-toggle-save="${p.id}" type="button" class="w-9 h-9 rounded-full bg-ivory flex items-center justify-center ${isSaved ? 'text-royalGold' : 'text-stone-400'} tap-target"><i data-lucide="heart" class="w-4 h-4 ${isSaved ? 'fill-current' : ''}"></i></button></div><div class="bg-ivory rounded-2xl py-3 mb-3 border border-borderGold/70">${renderProductPhotoSVG(p.shape, p.shortLabel)}</div><h3 class="font-bold text-base text-obsidian">${p.name}</h3><p class="text-xs text-stone-500 mt-1">Key Actives: ${p.keyIngredients}</p><p class="text-xs text-royalGold font-semibold mt-1.5">${p.expectedResult}</p></div><div class="flex items-center justify-between gap-2 pt-3 border-t border-borderGold/70"><button data-inspect-catalog="${p.id}" type="button" class="text-xs font-semibold text-obsidian underline tap-target">Ingredient Safety</button><button data-add-catalog="${p.id}" type="button" class="px-4 py-2.5 rounded-xl bg-obsidian text-goldBright text-sm font-semibold tap-target">Add · $${p.price}</button></div></div>`; }).join('')}</div>
    </div>
  `;
}

function renderKits() {
  const p = state.testProfile;
  const allTypes = getAllTypes();
  const regUnlocked = hasRegularAccess();
  const exclUnlocked = hasExclusiveAccess();
  return `
    <div class="space-y-6 fade-in">
      <section><h1 class="text-2xl font-extrabold text-obsidian">Whole-Set Hair Care Packages</h1><p class="text-sm text-stone-600 mt-1">Both packages come with a whole set of full-size hair care + a test kit. Results and routines unlock once you buy.</p></section>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm flex flex-col justify-between gap-4">
          <div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-1 rounded-full bg-goldSoft text-obsidian text-xs font-bold border border-borderGold">Regular Package · Whole Set</span><span class="text-xl font-extrabold text-obsidian">$${PACKAGES.regular.price}</span></div><h2 class="text-lg font-bold text-obsidian">${PACKAGES.regular.name}</h2><p class="text-sm text-stone-600 mt-1">${PACKAGES.regular.tagline}</p><ul class="mt-4 space-y-1.5 text-sm text-stone-700">${PACKAGES.regular.setContents.map(item => `<li class="flex items-start gap-2"><i data-lucide="package-check" class="w-4 h-4 text-royalGold shrink-0 mt-0.5"></i><span>${item}</span></li>`).join('')}</ul></div>
          <div class="flex flex-col sm:flex-row gap-2 pt-3 border-t border-borderGold/70"><button id="buyRegularPkgBtn" type="button" class="flex-1 py-3 px-4 rounded-xl bg-champagne border border-borderGold font-semibold text-sm text-obsidian tap-target">Buy Regular Set ($${PACKAGES.regular.price})</button><button id="openRegularResultsBtn" type="button" class="py-3 px-4 rounded-xl bg-white border border-obsidian font-semibold text-sm text-obsidian tap-target">${regUnlocked ? 'Open Results' : 'Preview Lock'}</button></div>
        </div>
        <div class="bg-gradient-to-br from-[#0F0D12] via-[#1B1720] to-[#2C2214] text-white rounded-3xl p-5 shadow-md border border-royalGold/50 flex flex-col justify-between gap-4">
          <div><div class="flex items-center justify-between mb-2"><span class="px-2.5 py-1 rounded-full bg-royalGold text-obsidian text-xs font-bold">Exclusive · Specialized Set</span><span class="text-xl font-extrabold text-goldBright">$${PACKAGES.exclusive.price}</span></div><h2 class="text-lg font-bold">${PACKAGES.exclusive.name}</h2><p class="text-sm text-stone-300 mt-1">${PACKAGES.exclusive.tagline}</p><ul class="mt-4 space-y-1.5 text-sm text-stone-200">${PACKAGES.exclusive.setContents.map(item => `<li class="flex items-start gap-2"><i data-lucide="crown" class="w-4 h-4 text-goldBright shrink-0 mt-0.5"></i><span>${item}</span></li>`).join('')}</ul></div>
          <div class="flex flex-col sm:flex-row gap-2 pt-3 border-t border-white/15"><button id="buyExclusivePkgBtn" type="button" class="flex-1 py-3 px-4 rounded-xl bg-royalGold text-obsidian font-bold text-sm tap-target">Buy Exclusive Set ($${PACKAGES.exclusive.price})</button><button id="openExclusivePageBtn" type="button" class="py-3 px-4 rounded-xl bg-white text-obsidian font-semibold text-sm tap-target">${exclUnlocked ? 'Open Exclusive Page' : 'See What’s Inside'}</button></div>
        </div>
      </div>
      <section class="bg-white rounded-3xl p-5 md:p-6 border border-borderGold shadow-sm">
        <h2 class="text-lg font-bold text-obsidian mb-1">Your Hair Type &amp; Goal Profile</h2>
        <p class="text-xs text-stone-500 mb-4">Synced to Supabase when logged in.</p>
        <form id="testProfileForm" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div><label for="inputHairType" class="block text-xs font-bold uppercase text-stone-500 mb-1.5">Hair Type</label><select id="inputHairType" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm font-medium">${allTypes.map(t => `<option value="${t.code}" ${p.hairType === t.code ? 'selected' : ''}>${t.name}</option>`).join('')}</select></div>
          <div><label for="inputPorosity" class="block text-xs font-bold uppercase text-stone-500 mb-1.5">Porosity</label><select id="inputPorosity" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm font-medium">${['Low','Medium','High'].map(val => `<option value="${val}" ${p.porosity === val ? 'selected' : ''}>${val} Porosity</option>`).join('')}</select></div>
          <div><label for="inputScalp" class="block text-xs font-bold uppercase text-stone-500 mb-1.5">Scalp State</label><select id="inputScalp" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm font-medium">${['Dry','Balanced','Oily'].map(val => `<option value="${val}" ${p.scalp === val ? 'selected' : ''}>${val} Scalp</option>`).join('')}</select></div>
          <div><label for="inputGoal" class="block text-xs font-bold uppercase text-stone-500 mb-1.5">Primary Goal</label><select id="inputGoal" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm font-medium">${['Growth & Length Retention','Moisture & Frizz Control','Volume & Root Lift','Damage Repair'].map(val => `<option value="${val}" ${p.goal === val ? 'selected' : ''}>${val}</option>`).join('')}</select></div>
          <div class="sm:col-span-2"><button type="submit" class="px-5 py-3 rounded-xl bg-obsidian text-goldBright text-sm font-semibold tap-target">Save Hair Profile</button></div>
        </form>
      </section>
    </div>
  `;
}

function renderExclusive() {
  const p = state.testProfile;
  const plan = getDiagnosticPlan(p);
  const regAccess = hasRegularAccess();
  const exclAccess = hasExclusiveAccess();
  const completedCount = plan.steps.filter(s => state.routineCompleted[s.id]).length;
  const progressPct = Math.round((completedCount / plan.steps.length) * 100);

  if (!regAccess) {
    return `<div class="space-y-6 fade-in"><section class="rounded-3xl bg-obsidian text-white p-6 md:p-8 shadow-md border border-royalGold/40"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalGold/20 text-goldBright text-xs font-bold mb-3"><i data-lucide="lock" class="w-3.5 h-3.5"></i><span>Purchase Required to Access Results</span></div><h1 class="text-2xl md:text-3xl font-extrabold">Your Personalized Kit Results Are Locked</h1><p class="text-sm text-stone-300 mt-2 max-w-2xl">Log in and purchase a package to unlock your results, avoid list, and step-by-step routine.</p><div class="flex flex-wrap gap-3 mt-5">${!state.currentUser ? `<button id="lockedGoLoginBtn" type="button" class="px-5 py-3 rounded-xl bg-white text-obsidian font-semibold text-sm tap-target">Log In / Sign Up</button>` : ''}<button id="lockedBuyRegBtn" type="button" class="px-5 py-3 rounded-xl bg-velvet text-goldBright border border-royalGold/40 font-semibold text-sm tap-target">Buy Regular Set ($49)</button><button id="lockedBuyExclBtn" type="button" class="px-5 py-3 rounded-xl bg-royalGold text-obsidian font-bold text-sm tap-target">Buy Exclusive Set ($89)</button></div></section></div>`;
  }

  return `
    <div class="space-y-6 fade-in">
      <section class="rounded-3xl bg-obsidian text-white p-5 md:p-6 shadow-md border border-royalGold/40"><div class="flex flex-wrap items-center justify-between gap-3 mb-3"><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royalGold text-obsidian text-xs font-bold"><i data-lucide="crown" class="w-3.5 h-3.5"></i><span>${exclAccess ? 'Exclusive Specialized Set Unlocked' : 'Regular Set Unlocked (Needs Only)'}</span></div><span class="text-xs text-goldBright font-semibold">Account: ${state.currentUser.name}</span></div><h1 class="text-xl md:text-2xl font-extrabold">Your ${p.hairType} · ${p.porosity} Porosity Hair Blueprint</h1></section>
      <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm"><h2 class="text-lg font-bold text-obsidian mb-3">What Your Hair Needs to Be Healthy &amp; Grow</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-3">${plan.needs.map(n => `<div class="p-4 rounded-2xl bg-goldSoft/60 border border-borderGold"><h3 class="font-bold text-sm text-obsidian">${n.title}</h3><p class="text-xs text-stone-700 mt-1">${n.detail}</p></div>`).join('')}</div></section>
      ${exclAccess ? `
        <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm"><h2 class="text-lg font-bold text-obsidian mb-3">What Your Hair Doesn’t Need (Avoid List)</h2><div class="space-y-2.5">${plan.avoids.map(a => `<div class="p-3.5 rounded-2xl bg-ivory border border-borderGold flex items-start gap-3"><i data-lucide="x-circle" class="w-4 h-4 text-royalGold shrink-0 mt-0.5"></i><div><div class="font-bold text-sm text-obsidian">${a.title}</div><p class="text-xs text-stone-700 mt-0.5">${a.why}</p></div></div>`).join('')}</div></section>
        <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm"><div class="flex items-center justify-between mb-3"><h2 class="text-lg font-bold text-obsidian">Specialized Step-by-Step Routine</h2><span class="text-xs font-bold px-3 py-1 rounded-full bg-obsidian text-goldBright">${completedCount}/${plan.steps.length} (${progressPct}%)</span></div><div class="space-y-2.5">${plan.steps.map(s => { const done = !!state.routineCompleted[s.id]; return `<button data-toggle-step="${s.id}" type="button" class="w-full text-left p-4 rounded-2xl border transition flex items-start gap-3 tap-target ${done ? 'bg-goldSoft border-royalGold' : 'bg-ivory border-borderGold'}"><div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${done ? 'bg-obsidian border-obsidian text-goldBright' : 'bg-white border-stone-300'}">${done ? '<i data-lucide="check" class="w-4 h-4"></i>' : ''}</div><div class="flex-1"><div class="flex justify-between"><span class="font-bold text-sm ${done ? 'line-through text-stone-500' : 'text-obsidian'}">${s.step}</span><span class="text-[11px] text-stone-500">${s.time}</span></div><p class="text-xs text-stone-700 mt-1">${s.action}</p></div></button>`; }).join('')}</div></section>
      ` : `<section class="rounded-3xl p-5 bg-goldSoft border border-borderGold flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><h3 class="font-bold text-base text-obsidian">Upgrade to the Exclusive Set ($89)</h3><p class="text-xs text-stone-700 mt-1">Unlock your Avoid List and Specialized Step-by-Step Routine.</p></div><button id="upgradeExclusiveBtn" type="button" class="px-4 py-3 rounded-xl bg-obsidian text-goldBright text-sm font-semibold whitespace-nowrap tap-target">Buy Exclusive Set ($89)</button></section>`}
    </div>
  `;
}

function renderAiAssistant() {
  const p = state.testProfile;
  return `
    <div class="space-y-4 fade-in max-w-3xl mx-auto">
      <section class="rounded-3xl bg-obsidian text-white p-5 shadow-md border border-royalGold/40 flex items-center justify-between gap-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-2xl bg-velvet border border-royalGold/40 flex items-center justify-center shrink-0"><i data-lucide="sparkles" class="w-5 h-5 text-goldBright"></i></div><div><h1 class="text-lg font-extrabold">Ask Rooted AI (Powered like Gemini)</h1><p class="text-xs text-stone-300">Tailored to Type ${p.hairType} · ${p.porosity} Porosity</p></div></div><button id="clearAiChatBtn" type="button" class="px-3 py-1.5 rounded-xl bg-velvet text-goldBright text-xs font-semibold">Clear</button></section>
      <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1">${['Will heat protectant weigh down my hair?','What is the difference between Regular and Exclusive?','How do I stop breakage?','What does 4C hair need?'].map(prompt => `<button data-ai-prompt="${prompt}" type="button" class="px-3.5 py-2 rounded-2xl bg-white border border-borderGold text-xs font-semibold text-obsidian whitespace-nowrap hover:bg-goldSoft transition tap-target">${prompt}</button>`).join('')}</div>
      <section class="bg-white rounded-3xl p-4 md:p-5 border border-borderGold shadow-sm space-y-3 min-h-[260px] max-h-[400px] overflow-y-auto">${state.aiMessages.map(m => `<div class="flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}"><div class="max-w-[85%] rounded-2xl px-4 py-3 text-sm ${m.role === 'user' ? 'bg-obsidian text-goldBright rounded-br-sm' : 'bg-ivory border border-borderGold text-obsidian rounded-bl-sm'}">${m.text}</div></div>`).join('')}</section>
      <form id="aiChatForm" class="flex gap-2"><input id="aiInput" type="text" required placeholder="Ask any question about hair types, ingredients, or products..." class="flex-1 px-4 py-3.5 rounded-2xl bg-white border border-borderGold text-sm focus:outline-none focus:ring-2 focus:ring-royalGold" /><button type="submit" class="px-5 py-3.5 rounded-2xl bg-obsidian text-goldBright font-semibold text-sm tap-target flex items-center gap-1.5"><span>Ask</span><i data-lucide="send" class="w-4 h-4"></i></button></form>
    </div>
  `;
}

function renderAuth(mode) {
  const isLogin = mode === 'login';
  if (state.currentUser) {
    return `<div class="max-w-md mx-auto bg-white rounded-3xl p-6 border border-borderGold shadow-sm space-y-4 fade-in"><div class="flex items-center gap-3"><div class="w-12 h-12 rounded-2xl bg-obsidian text-goldBright font-bold text-lg flex items-center justify-center">${state.currentUser.name.charAt(0).toUpperCase()}</div><div><h1 class="text-xl font-extrabold text-obsidian">${state.currentUser.name}</h1><p class="text-xs text-stone-500">${state.currentUser.email}</p></div></div><div class="flex gap-2"><button id="goPackagesFromAcctBtn" type="button" class="flex-1 py-3 rounded-xl bg-obsidian text-goldBright text-sm font-semibold tap-target">View Packages</button><button id="logoutBtn" type="button" class="px-4 py-3 rounded-xl bg-goldSoft text-obsidian text-sm font-semibold tap-target">Log Out</button></div></div>`;
  }
  return `
    <div class="max-w-md mx-auto bg-white rounded-3xl p-6 border border-borderGold shadow-sm fade-in">
      <div class="flex bg-champagne p-1 rounded-xl mb-5"><button id="switchLoginTab" type="button" class="flex-1 py-2 rounded-lg text-sm font-semibold transition ${isLogin ? 'bg-white text-obsidian shadow-sm' : 'text-stone-600'}">Log In</button><button id="switchSignupTab" type="button" class="flex-1 py-2 rounded-lg text-sm font-semibold transition ${!isLogin ? 'bg-white text-obsidian shadow-sm' : 'text-stone-600'}">Sign Up</button></div>
      <h1 class="text-xl font-extrabold text-obsidian">${isLogin ? 'Welcome Back' : 'Create Your Royal Account'}</h1>
      <p class="text-xs text-stone-500 mt-1">Connected to Supabase Auth &amp; Database</p>
      <form id="authForm" class="space-y-3.5 mt-4">
        ${!isLogin ? `<div><label for="authName" class="block text-xs font-bold uppercase text-stone-500 mb-1">Full Name</label><input id="authName" type="text" required placeholder="e.g. Jordan Taylor" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm" /></div>` : ''}
        <div><label for="authEmail" class="block text-xs font-bold uppercase text-stone-500 mb-1">Email</label><input id="authEmail" type="email" required placeholder="you@example.com" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm" /></div>
        <div><label for="authPassword" class="block text-xs font-bold uppercase text-stone-500 mb-1">Password</label><input id="authPassword" type="password" required minlength="6" placeholder="Minimum 6 characters" class="w-full p-3 rounded-xl bg-ivory border border-borderGold text-sm" /></div>
        <button type="submit" class="w-full py-3.5 rounded-xl bg-obsidian text-goldBright font-semibold text-sm tap-target">${isLogin ? 'Log In' : 'Create Account'}</button>
      </form>
    </div>
  `;
}

function renderBag() {
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return `
    <div class="space-y-6 fade-in">
      <h1 class="text-2xl font-extrabold text-obsidian">Your Bag &amp; Saved Profile</h1>
      <section class="bg-white rounded-3xl p-5 border border-borderGold shadow-sm">
        ${state.cart.length === 0 ? `<div class="text-center py-8 text-sm text-stone-500">Your bag is empty.</div>` : `
          <div class="space-y-3">${state.cart.map(item => `<div class="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-ivory border border-borderGold"><div><span class="text-[11px] font-bold uppercase text-royalGold">${item.tag}</span><div class="font-bold text-sm text-obsidian">${item.name}</div><div class="text-xs text-stone-500">$${item.price} each</div></div><div class="flex items-center gap-2"><button data-qty-dec="${item.id}" type="button" class="w-9 h-9 rounded-xl bg-white border border-borderGold font-bold tap-target">-</button><span class="w-6 text-center text-sm font-bold">${item.qty}</span><button data-qty-inc="${item.id}" type="button" class="w-9 h-9 rounded-xl bg-white border border-borderGold font-bold tap-target">+</button></div></div>`).join('')}</div>
          <div class="mt-4 pt-4 border-t border-borderGold flex items-center justify-between"><span class="text-sm font-medium text-stone-600">Subtotal</span><span class="text-xl font-extrabold text-obsidian">$${subtotal}.00</span></div>
          ${!state.currentUser ? `<div class="mt-4 p-3.5 rounded-2xl bg-goldSoft border border-borderGold flex items-center justify-between gap-3"><span class="text-xs font-medium">Log in or sign up to unlock packages.</span><button id="bagGoLoginBtn" type="button" class="px-3.5 py-2 rounded-xl bg-obsidian text-goldBright text-xs font-semibold tap-target">Log In</button></div>` : `<button id="checkoutBtn" type="button" class="w-full mt-4 py-3.5 rounded-xl bg-obsidian text-goldBright font-semibold text-sm tap-target">Complete Checkout &amp; Unlock — $${subtotal}.00</button>`}
        `}
      </section>
    </div>
  `;
}

function render() {
  const main = document.getElementById('appMain');
  if (state.activePage === 'home') main.innerHTML = renderHome();
  else if (state.activePage === 'groups') main.innerHTML = renderGroups();
  else if (state.activePage === 'catalog') main.innerHTML = renderCatalog();
  else if (state.activePage === 'kits') main.innerHTML = renderKits();
  else if (state.activePage === 'exclusive') main.innerHTML = renderExclusive();
  else if (state.activePage === 'ai') main.innerHTML = renderAiAssistant();
  else if (state.activePage === 'login') main.innerHTML = renderAuth('login');
  else if (state.activePage === 'signup') main.innerHTML = renderAuth('signup');
  else if (state.activePage === 'bag') main.innerHTML = renderBag();
  updateChrome();
  if (window.lucide) window.lucide.createIcons();
  bindDynamicEvents();
}

function bindDynamicEvents() {
  const searchInput = document.getElementById('hairSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value; saveState(); render();
      const newInput = document.getElementById('hairSearchInput');
      if (newInput) { newInput.focus(); newInput.setSelectionRange(newInput.value.length, newInput.value.length); }
    });
  }
  const heroShop = document.getElementById('heroShopEssentialsBtn');
  if (heroShop) heroShop.onclick = () => navigate('catalog', { category: 'all' });
  const heroAi = document.getElementById('heroAskAiBtn');
  if (heroAi) heroAi.onclick = () => navigate('ai');
  const homeViewAll = document.getElementById('homeViewAllProductsBtn');
  if (homeViewAll) homeViewAll.onclick = () => navigate('catalog', { category: 'all' });

  document.querySelectorAll('[data-jump-group]').forEach(el => { el.onclick = () => navigate('groups', { groupId: el.dataset.jumpGroup, typeCode: el.dataset.jumpType }); });
  document.querySelectorAll('[data-open-group]').forEach(el => { el.onclick = () => { const g = HAIR_GROUPS.find(x => x.id === el.dataset.openGroup); navigate('groups', { groupId: g.id, typeCode: g.types[0].code }); }; });
  document.querySelectorAll('[data-group-subtab]').forEach(el => { el.onclick = () => { state.groupSubTab = el.dataset.groupSubtab; saveState(); render(); }; });
  document.querySelectorAll('[data-cat-pill]').forEach(el => { el.onclick = () => { state.activeCategory = el.dataset.catPill; saveState(); render(); }; });
  document.querySelectorAll('[data-toggle-save]').forEach(el => { el.onclick = () => toggleSaveProduct(el.dataset.toggleSave); });
  document.querySelectorAll('[data-inspect-catalog]').forEach(el => { el.onclick = () => { const prod = PRODUCTS.find(p => p.id === el.dataset.inspectCatalog); if (prod) openProductModal(prod, `Types ${prod.forTypes[0]}–${prod.forTypes[prod.forTypes.length - 1]}`); }; });
  document.querySelectorAll('[data-add-catalog]').forEach(el => { el.onclick = () => { const prod = PRODUCTS.find(p => p.id === el.dataset.addCatalog); if (prod) addToCart({ id: prod.id, name: prod.name, price: prod.price, tag: prod.category }); }; });
  document.querySelectorAll('[data-select-group]').forEach(el => { el.onclick = () => { const g = HAIR_GROUPS.find(x => x.id === el.dataset.selectGroup); state.activeGroupId = g.id; state.selectedTypeCode = g.types[0].code; saveState(); render(); }; });
  document.querySelectorAll('[data-select-type]').forEach(el => { el.onclick = () => { state.selectedTypeCode = el.dataset.selectType; saveState(); render(); }; });
  document.querySelectorAll('[data-save-type]').forEach(el => { el.onclick = async () => { state.testProfile.hairType = el.dataset.saveType; saveState(); await saveProfileToSupabase(); showToast(`Saved ${el.dataset.saveType}`); render(); }; });

  const buyReg = document.getElementById('buyRegularPkgBtn');
  if (buyReg) buyReg.onclick = () => addToCart({ id: PACKAGES.regular.id, name: PACKAGES.regular.name, price: PACKAGES.regular.price, tag: 'Whole Set' });
  const buyExcl = document.getElementById('buyExclusivePkgBtn');
  if (buyExcl) buyExcl.onclick = () => addToCart({ id: PACKAGES.exclusive.id, name: PACKAGES.exclusive.name, price: PACKAGES.exclusive.price, tag: 'Specialized Set' });
  const openReg = document.getElementById('openRegularResultsBtn');
  if (openReg) openReg.onclick = () => navigate('exclusive');
  const openExcl = document.getElementById('openExclusivePageBtn');
  if (openExcl) openExcl.onclick = () => navigate('exclusive');

  const form = document.getElementById('testProfileForm');
  if (form) {
    form.onsubmit = async (e) => {
      e.preventDefault();
      const hairType = document.getElementById('inputHairType').value;
      state.testProfile = { hairType, porosity: document.getElementById('inputPorosity').value, scalp: document.getElementById('inputScalp').value, goal: document.getElementById('inputGoal').value, lastTested: 'Just now' };
      const g = findGroupByType(hairType);
      state.activeGroupId = g.id; state.selectedTypeCode = hairType;
      saveState(); await saveProfileToSupabase(); showToast('Hair profile saved!'); render();
    };
  }

  const lockedLogin = document.getElementById('lockedGoLoginBtn');
  if (lockedLogin) lockedLogin.onclick = () => navigate('login');
  const lockedReg = document.getElementById('lockedBuyRegBtn');
  if (lockedReg) lockedReg.onclick = () => { addToCart({ id: PACKAGES.regular.id, name: PACKAGES.regular.name, price: PACKAGES.regular.price, tag: 'Whole Set' }); navigate('bag'); };
  const lockedExcl = document.getElementById('lockedBuyExclBtn');
  if (lockedExcl) lockedExcl.onclick = () => { addToCart({ id: PACKAGES.exclusive.id, name: PACKAGES.exclusive.name, price: PACKAGES.exclusive.price, tag: 'Specialized Set' }); navigate('bag'); };
  document.querySelectorAll('[data-toggle-step]').forEach(el => { el.onclick = () => { state.routineCompleted[el.dataset.toggleStep] = !state.routineCompleted[el.dataset.toggleStep]; saveState(); render(); }; });
  const upgBtn = document.getElementById('upgradeExclusiveBtn');
  if (upgBtn) upgBtn.onclick = () => { addToCart({ id: PACKAGES.exclusive.id, name: PACKAGES.exclusive.name, price: PACKAGES.exclusive.price, tag: 'Specialized Set' }); navigate('bag'); };

  const aiForm = document.getElementById('aiChatForm');
  if (aiForm) {
    aiForm.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('aiInput');
      const text = input.value.trim();
      if (!text) return;
      state.aiMessages.push({ role: 'user', text }, { role: 'ai', text: generateAiReply(text) });
      saveState(); render();
    };
  }
  document.querySelectorAll('[data-ai-prompt]').forEach(el => { el.onclick = () => { state.aiMessages.push({ role: 'user', text: el.dataset.aiPrompt }, { role: 'ai', text: generateAiReply(el.dataset.aiPrompt) }); saveState(); render(); }; });
  const clearAi = document.getElementById('clearAiChatBtn');
  if (clearAi) clearAi.onclick = () => { state.aiMessages = structuredClone(DEFAULT_STATE.aiMessages); saveState(); render(); };

  const switchLogin = document.getElementById('switchLoginTab');
  if (switchLogin) switchLogin.onclick = () => navigate('login');
  const switchSignup = document.getElementById('switchSignupTab');
  if (switchSignup) switchSignup.onclick = () => navigate('signup');

  const authForm = document.getElementById('authForm');
  if (authForm) {
    authForm.onsubmit = async (e) => {
      e.preventDefault();
      const email = document.getElementById('authEmail').value.trim().toLowerCase();
      const password = document.getElementById('authPassword').value;
      const nameInput = document.getElementById('authName');
      if (!supabaseClient) { showToast('Supabase client unavailable'); return; }

      if (nameInput) {
        const name = nameInput.value.trim();
        const { data, error } = await supabaseClient.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) { showToast(error.message); return; }
        state.currentUser = { id: data.user?.id || 'pending', name, email, purchasedRegular: false, purchasedExclusive: false };
        await saveProfileToSupabase();
        saveState(); showToast('Account created! Check email if verification is enabled.'); navigate('kits');
      } else {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) { showToast(error.message); return; }
        state.currentUser = { id: data.user.id, email: data.user.email, name: data.user.user_metadata?.full_name || email.split('@')[0], purchasedRegular: false, purchasedExclusive: false };
        await syncUserFromSupabase();
        showToast('Logged in!'); navigate('exclusive');
      }
    };
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.onclick = async () => {
    if (supabaseClient) await supabaseClient.auth.signOut();
    state.currentUser = null; saveState(); showToast('Logged out'); navigate('home');
  };
  const goPackagesAcct = document.getElementById('goPackagesFromAcctBtn');
  if (goPackagesAcct) goPackagesAcct.onclick = () => navigate('kits');

  const bagGoLogin = document.getElementById('bagGoLoginBtn');
  if (bagGoLogin) bagGoLogin.onclick = () => navigate('login');
  document.querySelectorAll('[data-qty-inc]').forEach(el => { el.onclick = () => { const item = state.cart.find(c => c.id === el.dataset.qtyInc); if (item) { item.qty += 1; saveState(); render(); } }; });
  document.querySelectorAll('[data-qty-dec]').forEach(el => { el.onclick = () => { const idx = state.cart.findIndex(c => c.id === el.dataset.qtyDec); if (idx >= 0) { state.cart[idx].qty -= 1; if (state.cart[idx].qty <= 0) state.cart.splice(idx, 1); saveState(); render(); } }; });

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.onclick = async () => {
      if (!state.currentUser) { showToast('Please log in first.'); navigate('login'); return; }
      const boughtReg = state.cart.some(i => i.id === PACKAGES.regular.id);
      const boughtExcl = state.cart.some(i => i.id === PACKAGES.exclusive.id);
      if (boughtReg) state.currentUser.purchasedRegular = true;
      if (boughtExcl) state.currentUser.purchasedExclusive = true;
      const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);
      if (supabaseClient) {
        await supabaseClient.from('orders').insert({ user_id: state.currentUser.id, items: state.cart, total_amount: total });
        await saveProfileToSupabase();
      }
      state.cart = []; saveState();
      showToast(boughtExcl || boughtReg ? 'Purchase complete! Results unlocked.' : 'Order placed!');
      if (boughtExcl || boughtReg) navigate('exclusive'); else render();
    };
  }
}

document.getElementById('brandBtn').onclick = () => navigate('home');
document.getElementById('headerBagBtn').onclick = () => navigate('bag');
document.getElementById('headerAuthBtn').onclick = () => navigate('login');
document.getElementById('headerAiBtn').onclick = () => navigate('ai');
document.getElementById('openSidebarBtn').onclick = openSidebar;
document.getElementById('closeSidebarBtn').onclick = closeSidebar;
document.getElementById('sidebarBackdrop').onclick = closeSidebar;
document.getElementById('closeModalBtn').onclick = () => document.getElementById('detailModal').classList.add('hidden');
document.getElementById('detailModal').onclick = (e) => { if (e.target.id === 'detailModal') e.currentTarget.classList.add('hidden'); };
document.querySelectorAll('[data-nav]').forEach(btn => { btn.onclick = () => navigate(btn.dataset.nav); });
document.querySelectorAll('[data-cat]').forEach(btn => { btn.onclick = () => navigate('catalog', { category: btn.dataset.cat }); });
document.querySelectorAll('[data-side-group]').forEach(btn => {
  btn.onclick = () => { const g = HAIR_GROUPS.find(x => x.id === btn.dataset.sideGroup); navigate('groups', { groupId: g.id, typeCode: g.types[0].code, groupSubTab: 'products' }); };
});

render();
syncUserFromSupabase();
