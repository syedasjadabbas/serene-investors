import type { Property, PropertyDocumentation, PropertyFeature, PropertyImage, PropertyInvestmentExample } from '@/global/types/property'
import { formatSampleMinimum } from '@/global/lib/format'

const sampleInvestmentExample: PropertyInvestmentExample = {
  amountLabel: '$10,000',
  amountNote: 'Sample investment',
  rental: {
    label: 'Sample rental income',
    value: '+$420',
    amount: 420,
  },
  valueChange: {
    label: 'Sample value movement',
    value: '+$580',
    amount: 580,
  },
  total: {
    label: 'Illustrative total',
    value: '+$1,000',
  },
  rate: {
    label: 'Illustrative return',
    value: '10.0%',
  },
  disclaimer:
    'Illustrative sample only. Returns are not guaranteed and these figures do not represent actual Serene Investors performance.',
}

function sampleRecord(code: string): PropertyDocumentation {
  return {
    recordLabel: 'Property record',
    recordValue: code,
    ownershipLabel: 'Ownership structure',
    ownershipValue: 'Sample fractional structure',
    documentsLabel: 'Documentation',
    documentsValue: 'Sample documentation available',
    statusLabel: 'Status',
    statusValue: 'Demonstration record',
    note: 'All documentation shown here is illustrative demonstration content.',
  }
}

// Local building photos (public/images), rotated per listing so galleries differ.
const GALLERY_POOL = [
  '/images/journey/residential.jpg',
  '/images/story/direct-cedar-court.png',
  '/images/journey/tower-pool.jpg',
  '/images/story/receive-cedar-court.png',
  '/images/properties/marina-tower.jpg',
  '/images/story/value-cedar-walk.png',
  '/images/properties/boulevard-point-hero.jpg',
  '/images/story/grow-townhouses.png',
]

function sampleGallery(id: string, alts: string[]): PropertyImage[] {
  const offset = [...id].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % GALLERY_POOL.length
  return alts.map((alt, index) => ({
    src: GALLERY_POOL[(offset + index) % GALLERY_POOL.length],
    alt,
  }))
}

const residentialFeatures: PropertyFeature[] = [
  { id: 'courtyard', title: 'Courtyard living' },
  { id: 'light', title: 'Natural light' },
  { id: 'layouts', title: 'Flexible layouts' },
  { id: 'amenities', title: 'Shared amenities' },
  { id: 'walkable', title: 'Walkable setting' },
  { id: 'long-term', title: 'Long-term residential appeal' },
]

export const propertiesNotice = {
  eyebrow: 'Sample information',
  body: 'All properties, figures, locations and returns shown on this demonstration platform are fictional and provided for design purposes only. They do not represent actual investment opportunities or historical performance.',
} as const

export const propertiesFeaturedBand = {
  eyebrow: 'Featured sample property',
  heading: 'A closer look at the opportunity.',
  cta: 'View property',
  propertyId: 'courtyard-residences',
} as const

export const propertiesCta = {
  heading: 'Find your next property.',
  body: 'Explore the collection or start with the basics before reviewing sample opportunities.',
  primary: { label: 'Explore a property', href: '/properties/courtyard-residences' },
  secondary: { label: 'How it works', href: '/how-it-works' },
  image: {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&h=1050&q=80',
    alt: 'Modern architectural villa featuring clean lines, warm evening light, and landscaped reflection pool',
    badge: 'Featured Property',
  },
} as const

/**
 * Sample listings for layout work only.
 * Names, yields, and prices are invented. Do not treat as market data.
 */
export const properties: Property[] = [
  {
    id: 'courtyard-residences',
    name: 'Courtyard Residences',
    neighborhood: 'Harbor District',
    city: 'Lisbon',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&h=1750&q=80',
    imageAlt: 'Pale residential towers rising above a planted courtyard',
    beds: 2,
    areaLabel: '94 m2',
    status: 'open',
    occupancyLabel: 'Let',
    sampleYieldPct: 8.4,
    sampleNetYieldPct: 7.1,
    sampleMinInvestment: 5000,
    samplePriceLabel: formatSampleMinimum(5000),
    fundedPct: 28,
    description:
      'A carefully planned residential address designed around light, shared courtyards and everyday convenience.',
    overview: [
      'Courtyard Residences is a fictional harbor-side building arranged around a planted inner court. The sample listing is written to show how a residential address can be presented with calm, readable information.',
      'Rooms face the court or the street, with simple circulation and shared ground-floor amenities. Nothing here is an offer to invest.',
      'Use this page to review the sample structure, figures, and property record before returning to the collection.',
    ],
    sampleValueLabel: '$12.4M',
    unitsLabel: '48 sample residences',
    completion: 'Sample 2026',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&h=1200&q=80',
        alt: 'Pale residential towers rising above a planted courtyard',
      },
      ...sampleGallery('courtyard-residences', [
        'A planted court seen from an upper gallery',
        'A quiet residential lobby with stone floors',
        'An apartment interior with tall windows',
        'Evening light on a pale facade',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0312'),
  },
  {
    id: 'cedar-court',
    name: 'Cedar Court',
    neighborhood: 'Harbor District',
    city: 'Lisbon',
    type: 'Residential',
    image: '/images/story/choose-cedar-court.png',
    imageAlt: 'Pale apartment blocks around a planted inner court',
    beds: 2,
    areaLabel: '86 m2',
    status: 'open',
    occupancyLabel: 'Let',
    sampleYieldPct: 5.1,
    sampleNetYieldPct: 4.4,
    sampleMinInvestment: 5000,
    samplePriceLabel: formatSampleMinimum(5000),
    fundedPct: 100,
    description:
      'A calm residential court with pale facades, planted walks, and a simple plan that is easy to read.',
    overview: [
      'Cedar Court is a fictional residential holding used to show a funded-looking sample listing in a quieter register.',
      'The court is the center of the plan. Walks, entries, and shared rooms stay close to that planted middle.',
      'Figures on this page are invented for the demonstration and should not be read as a live opportunity.',
    ],
    sampleValueLabel: '$8.2M',
    unitsLabel: '32 sample residences',
    completion: 'Sample 2024',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: '/images/story/choose-cedar-court.png',
        alt: 'Pale apartment blocks around a planted inner court',
      },
      ...sampleGallery('cedar-court', [
        'A planted walk between two residential wings',
        'A stair hall with a high window',
        'A kitchen looking onto the court',
        'Late light on stucco walls',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0248'),
  },
  {
    id: 'pines-loft',
    name: 'Pines Loft',
    neighborhood: 'North Quarter',
    city: 'Porto',
    type: 'Residential',
    image: '/images/story/pines-loft.png',
    imageAlt: 'A narrow loft building above a quay',
    beds: 1,
    areaLabel: '54 m2',
    status: 'funding',
    occupancyLabel: 'Let',
    sampleYieldPct: 6.2,
    sampleNetYieldPct: 5.3,
    sampleMinInvestment: 7500,
    samplePriceLabel: formatSampleMinimum(7500),
    fundedPct: 41,
    description:
      'A narrow loft building with a simple floor plate, high windows, and a short walk to the quarter.',
    overview: [
      'Pines Loft is a fictional funding-stage listing. The copy is kept short so the sample figures stay easy to scan.',
      'The plan favors one-bed layouts and a shared stair. It is a study in compact residential form, not a live raise.',
    ],
    sampleValueLabel: '$4.6M',
    unitsLabel: '18 sample residences',
    completion: 'Sample 2025',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: '/images/story/pines-loft.png',
        alt: 'A narrow loft building above a quay',
      },
      ...sampleGallery('pines-loft', [
        'A loft window looking toward the quarter',
        'A compact kitchen along a masonry wall',
        'A stair with a timber handrail',
        'The street elevation at dusk',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0419'),
  },
  {
    id: 'marble-house',
    name: 'Marble House',
    neighborhood: 'Old Town',
    city: 'Valencia',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern luxury marble architectural residence',
    beds: 3,
    areaLabel: '118 m2',
    status: 'open',
    occupancyLabel: 'Let',
    sampleYieldPct: 7.1,
    sampleNetYieldPct: 6.0,
    sampleMinInvestment: 10000,
    samplePriceLabel: formatSampleMinimum(10000),
    fundedPct: 62,
    description:
      'A pale stone house on an older street, with deeper rooms and a quieter relationship to the town.',
    overview: [
      'Marble House is a fictional old-town residence used to show a larger minimum ticket in the sample catalogue.',
      'The rooms are deeper than the harbor courts. Street windows are tall, and the plan stays domestic rather than commercial.',
    ],
    sampleValueLabel: '$9.8M',
    unitsLabel: '12 sample residences',
    completion: 'Sample 2023',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=1200&q=80',
        alt: 'Modern luxury marble architectural residence',
      },
      ...sampleGallery('marble-house', [
        'A stone stair with a shallow landing',
        'A sitting room with a tall window',
        'A walled court at the rear',
        'The river street in late afternoon',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0551'),
  },
  {
    id: 'linden-house',
    name: 'Linden House',
    neighborhood: 'Garden Reach',
    city: 'Porto',
    type: 'Hospitality',
    image: '/images/story/grow-townhouses.png',
    imageAlt: 'A pale guest house set among linden trees',
    beds: 8,
    areaLabel: '420 m2',
    status: 'open',
    occupancyLabel: 'Let',
    sampleYieldPct: 6.4,
    sampleNetYieldPct: 5.4,
    sampleMinInvestment: 8000,
    samplePriceLabel: formatSampleMinimum(8000),
    fundedPct: 22,
    description:
      'A small guest house among linden trees, written as a hospitality sample rather than a home listing.',
    overview: [
      'Linden House is a fictional hospitality holding. The listing exists so the catalogue can show a second property type.',
      'Rooms are arranged along a garden walk. The sample record treats it as a guest house, not a hotel brand.',
    ],
    sampleValueLabel: '$11.2M',
    unitsLabel: '22 sample rooms',
    completion: 'Sample 2025',
    management: 'Demo hospitality manager',
    features: [
      { id: 'garden', title: 'Garden setting' },
      { id: 'light', title: 'Natural light' },
      { id: 'rooms', title: 'Quiet guest rooms' },
      { id: 'shared', title: 'Shared dining room' },
      { id: 'walkable', title: 'Walkable setting' },
      { id: 'seasonal', title: 'Seasonal stay pattern' },
    ],
    gallery: [
      {
        src: '/images/story/grow-townhouses.png',
        alt: 'A pale guest house set among linden trees',
      },
      ...sampleGallery('linden-house', [
        'A garden path toward the guest house',
        'A dining room with garden windows',
        'A guest room with pale linen',
        'Trees against a simple facade',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0670'),
  },
  {
    id: 'copper-yard',
    name: 'Copper Yard',
    neighborhood: 'Market Row',
    city: 'Rotterdam',
    type: 'Commercial',
    image: '/images/story/value-cedar-walk.png',
    imageAlt: 'A brick commercial yard with tall workshop windows',
    beds: 0,
    areaLabel: '260 m2',
    status: 'funding',
    occupancyLabel: 'Let',
    sampleYieldPct: 5.8,
    sampleNetYieldPct: 4.9,
    sampleMinInvestment: 12500,
    samplePriceLabel: formatSampleMinimum(12500),
    fundedPct: 54,
    description:
      'A brick commercial yard with workshop windows, used here as a sample mixed-work listing.',
    overview: [
      'Copper Yard is a fictional commercial holding. It lets the catalogue show a third type without changing the residential voice.',
      'The yard is the plan. Workshops sit on two sides, with a simple office range along the street.',
    ],
    sampleValueLabel: '$7.5M',
    unitsLabel: '9 sample workspaces',
    completion: 'Sample 2024',
    management: 'Demo commercial manager',
    features: [
      { id: 'yard', title: 'Shared yard' },
      { id: 'light', title: 'Workshop daylight' },
      { id: 'flexible', title: 'Flexible floor plates' },
      { id: 'street', title: 'Street-facing range' },
      { id: 'access', title: 'Simple goods access' },
      { id: 'mixed', title: 'Mixed work use' },
    ],
    gallery: [
      {
        src: '/images/story/value-cedar-walk.png',
        alt: 'A brick commercial yard with tall workshop windows',
      },
      ...sampleGallery('copper-yard', [
        'Workshop windows along the yard',
        'A brick office stair',
        'An open floor with timber trusses',
        'The street gate at the end of the day',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0784'),
  },
  {
    id: 'kiln-yard',
    name: 'Kiln Yard',
    neighborhood: 'North Gate',
    city: 'Rotterdam',
    type: 'Residential',
    image: '/images/journey/residential.jpg',
    imageAlt: 'A brick warehouse converted to dwellings',
    beds: 2,
    areaLabel: '79 m2',
    status: 'exited',
    occupancyLabel: 'Sold',
    sampleYieldPct: 4.2,
    sampleNetYieldPct: 3.6,
    sampleMinInvestment: 5000,
    samplePriceLabel: 'Exited',
    description:
      'A converted brick warehouse shown as an exited sample, kept in the collection for status contrast.',
    overview: [
      'Kiln Yard is a fictional exited listing. It remains in the catalogue so the status set stays complete.',
      'The building is a former kiln, now written as dwellings. There is no live allocation on this demonstration page.',
    ],
    sampleValueLabel: '$5.1M',
    unitsLabel: '16 sample residences',
    completion: 'Sample 2021',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: '/images/journey/residential.jpg',
        alt: 'A brick warehouse converted to dwellings',
      },
      ...sampleGallery('kiln-yard', [
        'A brick hall with new domestic openings',
        'A kitchen in a former workshop bay',
        'A roof terrace above the kiln',
        'The north gate elevation',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0190'),
  },
  {
    id: 'azure-horizon-villa',
    name: 'Azure Horizon Villa',
    neighborhood: 'Algarve Coastal',
    city: 'Faro',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&h=1750&q=80',
    imageAlt: 'Contemporary luxury villa with limestone facade, geometric cantilevered glass, and serene infinity pool',
    beds: 3,
    areaLabel: '142 m2',
    status: 'open',
    occupancyLabel: 'Let',
    sampleYieldPct: 7.8,
    sampleNetYieldPct: 6.5,
    sampleMinInvestment: 5000,
    samplePriceLabel: formatSampleMinimum(5000),
    fundedPct: 68,
    description:
      'A striking modern residence perched along coastal bluffs, combining clean geometric concrete, warm limestone, and expansive panoramic glass.',
    overview: [
      'Azure Horizon Villa represents contemporary Mediterranean residential architecture designed for calm coastal living.',
      'Floor-to-ceiling glazing connects fluid living spaces to landscaped stone terraces, shaded pergolas, and reflective water features.',
      'All figures and property details shown are sample demonstration content.',
    ],
    sampleValueLabel: '$14.2M',
    unitsLabel: '8 sample residences',
    completion: 'Sample 2025',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=1200&q=80',
        alt: 'Contemporary luxury villa with limestone facade, geometric cantilevered glass, and serene infinity pool',
      },
      ...sampleGallery('azure-horizon', [
        'Sunlit stone terrace overlooking coastal waters',
        'Open-concept living room with floor-to-ceiling glass',
        'Minimalist kitchen finished in natural timber and quartzite',
        'Evening ambient glow across the courtyard pool',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0812'),
  },
  {
    id: 'the-glass-pavilion',
    name: 'The Glass Pavilion',
    neighborhood: 'Aspen Highlands',
    city: 'Colorado',
    type: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&h=1750&q=80',
    imageAlt: 'Modern minimalist pavilion residence featuring structural glass walls, natural timber, and mountain landscaping',
    beds: 2,
    areaLabel: '110 m2',
    status: 'funded',
    occupancyLabel: 'Let',
    sampleYieldPct: 6.9,
    sampleNetYieldPct: 5.8,
    sampleMinInvestment: 10000,
    samplePriceLabel: formatSampleMinimum(10000),
    fundedPct: 100,
    description:
      'An architectural masterwork nestled into high-elevation alpine terrain, balancing transparent glass pavilions with tactile stone walls.',
    overview: [
      'The Glass Pavilion is a study in quiet transparency, framing panoramic natural vistas while preserving deep interior privacy.',
      'Sustainably sourced timber finishes and high-thermal-efficiency glass panels create a peaceful year-round sanctuary.',
      'Presented as an illustrative fully funded holding for catalogue balance and demonstration purposes.',
    ],
    sampleValueLabel: '$9.6M',
    unitsLabel: '12 sample residences',
    completion: 'Sample 2024',
    management: 'Demo property manager',
    features: residentialFeatures,
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&h=1200&q=80',
        alt: 'Modern minimalist pavilion residence featuring structural glass walls, natural timber, and mountain landscaping',
      },
      ...sampleGallery('glass-pavilion', [
        'Glass wall reflection against native pine forest',
        'Quiet reading lounge with bespoke timber shelving',
        'Sheltered stone loggia with outdoor hearth',
        'Winter dusk light through high-efficiency glass panes',
      ]),
    ],
    investmentExample: sampleInvestmentExample,
    documentation: sampleRecord('DEMO-0925'),
  },
]

const homepageFeaturedIds = ['cedar-court', 'pines-loft', 'marble-house'] as const

function requireById(id: string): Property {
  const match = properties.find((item) => item.id === id)
  if (!match) {
    throw new Error(`Missing sample record: ${id}`)
  }
  return match
}

export const featuredProperties = homepageFeaturedIds.map((id) => requireById(id))

export const catalogueFeatured = requireById(propertiesFeaturedBand.propertyId)
