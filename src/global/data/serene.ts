// Real Serene Heights data — the single source of truth for this site.
//
// Every figure and fact below is copied from the client's own sites:
//   - serene heights group/client/global/constants/site.ts   (group facts, projects, plans, contacts)
//   - serene heights nathiagali/src/data/site.ts + pages.ts  (Nathia Gali: Smart Property Unit, amenities,
//                                                             route, progress videos, privacy policy)
//   - serene heights lahore/src/lib/site.ts + app/invest, project, amenities pages (Lahore tower)
// Change a fact there first, then here. Do not add figures that are not on those sites.
// Images live in public/images/serene/ (copied from the same projects).

const IMG = '/images/serene'

/* ------------------------------------------------------------------ company */

export const company = {
  name: 'Serene Heights Group',
  investorsName: 'Serene Investors',
  developer: 'DM Consortium',
  founded: 2017,
  ceo: { name: 'Fahad Masud Lone', role: 'Chief Executive, Serene Heights · DM Consortium' },
  intro:
    'Serene Heights is redefining luxury resort living in the heart of the Galiyat: the first resort in Pakistan to blend modern comfort with breathtaking mountain views. It is not just an accommodation but a lifestyle destination, with world-class amenities and activities.',
  model:
    'With innovative financial models, Serene Heights is making real estate in Pakistan more liquid and more accessible: owners hold a share of a managed hotel, not just a building.',
  management: 'DM Consortium manages Serene Heights as one hotel: bookings, housekeeping, maintenance and owner returns.',
  philosophy: [
    { title: 'Purpose-driven business', body: 'Fahad’s eight-plus years as an entrepreneur have centred on building businesses that create lasting, meaningful impact, not just short-term returns.' },
    { title: 'Transparent ownership', body: 'Serene Heights was built around a simple promise: zero maintenance charges, zero hidden costs. What you own is what you own, with nothing more to pay later.' },
    { title: 'Leadership & education', body: 'Through “The Art of Being a CEO”, Fahad shares the leadership, decision-making and scaling principles behind his own entrepreneurial journey.' },
  ],
  completed: [{ name: 'Serene Farms', place: 'Barki Road, Lahore', note: 'Completed horizontal development', image: `${IMG}/nathiagali/mist-valley.webp` }],
  logo: { dark: `${IMG}/brand/logo-blue.png`, light: `${IMG}/brand/logo-white.png` },
} as const

/* ------------------------------------------------------------------ contact */

export const contact = {
  uan: '042-111-111-744',
  uanHref: 'tel:+9242111111744',
  whatsapp: '+92 300 8497999',
  whatsappHref: 'https://wa.me/923008497999',
  headOffice: 'H. No. 71 C3, Gulberg III, Park View Lane, Lahore',
  emails: {
    nathiagali: 'info@sereneheightsnathiagali.com',
    lahore: 'info@sereneheightslahore.com',
  },
  lahorePhones: [
    { label: 'Corporate office / commercial', numbers: ['0304-1111106'] },
    { label: 'Co-working / hotel apartments', numbers: ['0321-4979446', '0300-8497999'] },
  ],
  offices: [
    { label: 'Project', name: 'Serene Heights Nathia Gali', address: '1.5 km, Kala Bagh Air Base Road, Nathia Gali, Khyber Pakhtunkhwa' },
    { label: 'Project', name: 'Serene Heights Lahore', address: 'Gulberg Main Boulevard, Lahore, Pakistan' },
    { label: 'Head office', name: 'DM Consortium', address: 'H. No. 71 C3, Gulberg III, Park View Lane, Lahore' },
  ],
  nathiagaliMap: 'https://www.google.com/maps/search/?api=1&query=34.0745,73.379',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/sereneheightshotelsandresorts' },
    { label: 'Facebook', href: 'https://www.facebook.com/sereneheightshotelsandresorts' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/serene-heights-hotel-resort' },
    { label: 'YouTube', href: 'https://www.youtube.com/@sereneheightsnathiagali5573' },
  ],
  sites: {
    nathiagali: 'https://serene-nathiagali.vercel.app/',
    lahore: 'https://serene-heights-lahore-five.vercel.app/',
  },
} as const

/** "0304-1111106" → "tel:03041111106" */
export const tel = (n: string) => `tel:${n.replace(/\D/g, '')}`

/** WhatsApp link with a prefilled message. */
export const whatsappWith = (text: string) => `${contact.whatsappHref}?text=${encodeURIComponent(text)}`

/* ------------------------------------------------------------------ projects */

export type ProjectId = 'nathia-gali' | 'lahore'

export const projects = [
  {
    id: 'nathia-gali' as const,
    name: 'Serene Heights Nathia Gali',
    short: 'Nathia Gali',
    place: 'Kala Bagh Air Base Road, Nathia Gali, KPK',
    status: 'Under construction',
    since: 'Since 2021',
    kind: 'Hotel & Resort',
    summary:
      "Pakistan's first and largest winter resort — fully furnished hotel apartments in the pines at 7,906 ft, two hours from Islamabad.",
    facts: ['7,906 ft', '30+ kanals', '3 towers', '150+ apartments', '50+ amenities'],
    image: `${IMG}/nathiagali/tower-forest-mist.webp`,
    gallery: [
      `${IMG}/nathiagali/snow-tower.webp`,
      `${IMG}/nathiagali/pool-aerial.webp`,
      `${IMG}/nathiagali/ridge.webp`,
      `${IMG}/nathiagali/terraces.webp`,
      `${IMG}/nathiagali/rooftop.webp`,
      `${IMG}/nathiagali/pines.webp`,
    ],
    email: 'info@sereneheightsnathiagali.com',
    phone: '042-111-111-744',
    site: 'https://serene-nathiagali.vercel.app/',
  },
  {
    id: 'lahore' as const,
    name: 'Serene Heights Lahore',
    short: 'Lahore',
    place: 'Gulberg Main Boulevard, Lahore',
    status: 'Now selling · 2-year delivery',
    since: 'LDA approved',
    kind: 'Mixed-use tower',
    summary:
      'A 21-storey address beside the CBD — retail, offices, co-working, parking and serviced hotel apartments under one in-house management.',
    facts: ['21 storeys', '7 office floors', '2 co-working floors', 'Hotel apartments', 'Helipad'],
    image: `${IMG}/lahore/tower.jpg`,
    gallery: [`${IMG}/lahore/aerial.jpg`, `${IMG}/lahore/dusk.jpg`, `${IMG}/lahore/facade.jpg`, `${IMG}/lahore/street.jpg`, `${IMG}/lahore/building-7-new.jpg`],
    email: 'info@sereneheightslahore.com',
    phone: '0304-1111106',
    site: 'https://serene-heights-lahore-five.vercel.app/',
  },
]

export const projectById = (id: string) => projects.find((p) => p.id === id)

/* ------------------------------------------------------------------ Nathia Gali */

export const nathiagali = {
  figures: [
    { value: '7,906 ft', label: 'Altitude' },
    { value: '30+', label: 'Kanals of land' },
    { value: '3', label: 'Towers' },
    { value: '150+', label: 'Apartments' },
    { value: '50+', label: 'Amenities' },
    { value: '15+', label: 'Resort activities' },
  ],
  residences: [
    { name: 'One bedroom', note: 'Hotel apartment · fully furnished' },
    { name: 'Two bedroom', note: 'Hotel apartment · fully furnished' },
    { name: 'Three bedroom', note: 'Hotel apartment · fully furnished' },
    { name: 'Smart Property Unit', note: 'Co-own from 50 sq ft' },
  ],
  seasons: {
    winter: {
      months: 'December – March',
      title: 'Snow on the pines, warmth inside.',
      body: 'A heated infinity pool, sauna and jacuzzi, and a rooftop restaurant looking over the snow. Nathia Gali goes quiet in winter, and Serene Heights stays open through it.',
      image: `${IMG}/nathiagali/winter-side.webp`,
    },
    summer: {
      months: 'April – November',
      title: 'Cool air when the plains are at 45°.',
      body: 'Hiking trails, the zipline and rock climbing, archery and mini golf through the day, and the telescope on the roof once the sky clears at night.',
      image: `${IMG}/nathiagali/valley-tower.webp`,
    },
  },
  amenityGroups: [
    {
      name: 'Water & wellness',
      image: `${IMG}/nathiagali/pool-aerial.webp`,
      items: [
        ['Heated infinity pool', 'Valley views, open all year, lifeguard on duty'],
        ['Sauna & jacuzzi', 'With dedicated massage therapy rooms'],
        ['Fitness gym', 'Cardio and strength equipment'],
        ['Pool lounge', 'Loungers and complimentary towel service'],
      ],
    },
    {
      name: 'Adventure',
      image: `${IMG}/nathiagali/pines.webp`,
      items: [
        ['Zipline', 'Through the resort grounds, fully supervised'],
        ['Rock climbing', 'Outdoor wall for every skill level'],
        ['Archery range', 'Equipment and coaching provided'],
        ['Air-gun shooting range', 'Trained supervision'],
        ['18-hole mini golf', 'Set into the landscaping'],
      ],
    },
    {
      name: 'The rooftop table',
      image: `${IMG}/nathiagali/rooftop.webp`,
      items: [
        ['Rooftop restaurant', 'By Coffee, Tea & Company. Breakfast, lunch and dinner at 7,906 ft'],
        ['Room service', 'From the same kitchen, to your apartment'],
      ],
    },
    {
      name: 'After dark',
      image: `${IMG}/nathiagali/ridge.webp`,
      items: [
        ['Refractor telescope', 'Stargazing above the cloud line, away from city light'],
        ['Lit pathways', 'Street lighting across the grounds'],
      ],
    },
    {
      name: 'Everyday ease',
      image: `${IMG}/nathiagali/approach.webp`,
      items: [
        ['24/7 power backup', 'Generators tested and maintained'],
        ['Dedicated parking floor', 'Covered, out of the weather'],
        ['Business centre', 'High-speed Wi-Fi, printing, meeting space'],
        ['Mosque', 'On site'],
        ['24/7 CCTV & security', 'Common areas and perimeter'],
        ['Staff residence floor', 'For household and hotel staff'],
      ],
    },
  ],
  route: [
    { dist: '80 km', place: 'Islamabad', time: '2 hr drive' },
    { dist: '35 km', place: 'Abbottabad city centre', time: '50 min' },
    { dist: '5 km', place: 'Nathia Gali main bazaar', time: '10 min' },
    { dist: '3 km', place: 'Hotel Elites', time: '6 min' },
    { dist: '1.5 km', place: 'Main Nathia Gali road', time: '3 min' },
    { dist: '50 m', place: 'PAF Airbase · Serene Heights', time: 'You have arrived' },
  ],
  gallery: [
    { src: `${IMG}/nathiagali/snow-tower-dusk.webp`, title: 'First snow on the tower', tag: 'Winter' },
    { src: `${IMG}/nathiagali/arrival-snow-dusk.webp`, title: 'The drive after snowfall', tag: 'Arrival' },
    { src: `${IMG}/nathiagali/pool-aerial-dusk.webp`, title: 'Glasshouse and infinity pool', tag: 'Rooftop' },
    { src: `${IMG}/nathiagali/ridge-dusk.webp`, title: 'Above the cloud line', tag: 'Ridge' },
    { src: `${IMG}/nathiagali/terraces-dusk.webp`, title: 'Balconies on every floor', tag: 'Residences' },
    { src: `${IMG}/nathiagali/pines-dusk.webp`, title: 'In the pines', tag: 'Summer' },
    { src: `${IMG}/nathiagali/rooftop.webp`, title: 'The rooftop at sunset', tag: 'Evening' },
    { src: `${IMG}/nathiagali/sunrise.webp`, title: 'The view at first light', tag: 'Galiyat' },
  ],
  resortImages: [
    { src: `${IMG}/resort/aerial-rooftop-pool.jpg`, alt: 'Aerial view of the rooftop pool' },
    { src: `${IMG}/resort/glass-roof-pool.jpg`, alt: 'Pool under the glass roof' },
    { src: `${IMG}/resort/sky-lounge.jpg`, alt: 'Sky lounge' },
    { src: `${IMG}/resort/ski-slope.jpg`, alt: 'Ski slope' },
    { src: `${IMG}/resort/winter-trails.jpg`, alt: 'Winter trails' },
    { src: `${IMG}/resort/archery.jpg`, alt: 'Archery' },
    { src: `${IMG}/resort/adventure-park.jpg`, alt: 'Adventure park' },
    { src: `${IMG}/resort/mini-golf.jpg`, alt: 'Mini golf course' },
    { src: `${IMG}/resort/rooftop-restaurant.jpg`, alt: 'Rooftop restaurant' },
    { src: `${IMG}/resort/tower-snow-night.jpg`, alt: 'Tower in the snow at night' },
  ],
  floorPlans: [
    { title: 'Ground floor', note: 'Arrival and lobby', file: 'ground1' },
    { title: 'Ground floor', note: 'Layout', file: 'ground' },
    { title: '1st floor', note: '', file: '1st' },
    { title: '2nd floor', note: '', file: '2nd' },
    { title: '3rd floor', note: '', file: '3rd' },
    { title: '5th floor', note: '', file: '5th' },
    { title: '6th floor', note: '', file: '6th' },
    { title: '7th floor', note: '', file: '7th' },
    { title: '8th floor', note: '', file: '8th' },
  ].map((f) => ({ ...f, thumb: `${IMG}/plans/${f.file}-1080.webp`, full: `${IMG}/plans/${f.file}.webp` })),
}

/* ------------------------------------------------------------------ Lahore */

export const lahore = {
  tagline: 'A landmark 21-storey mixed-use commercial development on Gulberg Main Boulevard, Lahore.',
  configuration:
    'Designed as a mixed-use vertical development, the building includes Lower Ground + 6 commercial floors, 5 parking floors, 7 office floors, 2 co-working floors and 2 hotel apartment floors.',
  location:
    "Strategically located on Gulberg Main Boulevard, this 21-storey commercial high-rise sits within walking distance of Lahore's Central Business District, placing it at the centre of the city's most active commercial zone.",
  parking:
    "5 dedicated above-ground parking floors with drive-through ramps give vehicle access to almost every level — solving the parking problem that holds back most of Gulberg's commercial buildings.",
  floors: [
    {
      id: 'commercial',
      tag: 'Lower Ground + 6',
      title: 'Commercial floors',
      image: `${IMG}/lahore/Image3_v2.jpg`,
      body: 'Designed with multiple parking levels and drive-through ramps, the building allows vehicular access to almost all floors, significantly reducing congestion and eliminating the inconvenience typically associated with high-density commercial areas.',
    },
    {
      id: 'offices',
      tag: '×7 office floors',
      title: 'Office floors',
      image: `${IMG}/lahore/Image6_1.jpg`,
      body: "Located at the heart of Lahore's most active commercial district, the office floors offer businesses an address that delivers visibility, accessibility and influence.",
    },
    {
      id: 'coworking',
      tag: '×2 co-working floors',
      title: 'Co-working floors',
      image: `${IMG}/lahore/Image8_1.jpg`,
      body: 'Whether for startups, freelancers or established teams seeking a premium address without long-term commitment, these floors deliver convenience, community and commercial value in one smart workplace solution.',
    },
    {
      id: 'hotel',
      tag: '×2 apartment floors',
      title: 'Hotel apartments',
      image: `${IMG}/lahore/Image9.jpg`,
      body: 'Serviced hotel apartments under the same in-house management as the rest of the tower.',
    },
  ],
  reasons: [
    { title: 'High rental demand', body: 'Located on Gulberg Main Boulevard and within walking distance of the CBD, the project benefits from consistent demand from corporates, professionals and hospitality users. Limited premium commercial supply in the area positions the development for strong occupancy and sustainable rental returns.' },
    { title: 'Capital appreciation potential', body: 'Early entry on a prime commercial artery allows investors to benefit from asset appreciation as construction progresses. Historically, well-located commercial developments on Main Boulevard have demonstrated strong capital growth over time.' },
    { title: 'Professional in-house management', body: 'All operations, maintenance and facilities are managed through in-house professional management, ensuring consistent service standards, asset upkeep and long-term value preservation.' },
    { title: 'Assured delivery timeline', body: 'With a clearly defined 2-year delivery timeline, investors gain visibility and confidence on execution. Structured milestones and progress transparency keep the project aligned with planned returns and market cycles.' },
    { title: 'Dedicated above-ground parking', body: '5 dedicated above-ground parking floors with direct access via drive-through ramps. This enhances tenant convenience, increases footfall and improves leasing potential.' },
    { title: 'Low-entry smart property investment', body: 'Invest with as little as PKR 2 million through smart property units and become a part-owner of a prime commercial asset on Gulberg Main Boulevard — high-value real estate with lower capital exposure and diversified risk.' },
    { title: 'Flexible payment plans', body: 'Investor-friendly and flexible payment plans let capital be deployed gradually while value builds during construction, for better cash-flow management.' },
  ],
  amenities: [
    { name: 'Safety & security', items: ['24/7 security with comprehensive CCTV surveillance', 'Manned reception and lobby concierge', 'Fire detection systems with clearly marked emergency exits'] },
    { name: 'Access, mobility & parking', items: ['High-speed elevators with destination control', 'Private driveway access up to 5 floors', 'Ample multi-level parking across 5 dedicated floors', 'Wheelchair accessibility with dedicated ramps'] },
    { name: 'Infrastructure & utilities', items: ['Uninterrupted power supply', 'Energy-efficient lighting systems', 'High-speed internet and fibre-optic connectivity', 'Electric vehicle (EV) charging stations'] },
    { name: 'Business & corporate', items: ['Business centre and co-working spaces', 'Meeting and conference halls for corporate offices', 'Lounge for professionals and guests'] },
    { name: 'Lifestyle & convenience', items: ['Coffee shops and food courts', 'Fitness centre / gym', 'Rooftop helipad'] },
    { name: 'Operations & management', items: ['Dedicated in-house maintenance support', 'Centralised facility helpdesk'] },
  ],
  ldaBadge: `${IMG}/lahore/lda-approved.png`,
}

/* ------------------------------------------------------------------ investing */

/** Nathia Gali apartment pricing: PKR per sq ft (the 50 sq ft Smart Property Unit is priced separately at
 * PKR 2,250,000), 30% down, the rest over 36 monthly instalments. */
export const pricing = { perSqft: 40000, downShare: 0.3, months: 36, currency: 'PKR' } as const

/** Published payment plans — figures exactly as issued on the Nathia Gali site. */
export const plans = [
  { id: 'spu', area: 50, kind: 'Smart Property Unit', project: 'Nathia Gali', total: 2250000, down: 675000, monthly: 43750 },
  { id: '1bhk-667', area: 667, kind: '1 BHK apartment', project: 'Nathia Gali', total: 26680000, down: 8004000, monthly: 518778 },
  { id: '1bhk-673', area: 673, kind: '1 BHK apartment', project: 'Nathia Gali', total: 26920000, down: 8076000, monthly: 523444 },
  { id: '1bhk-734', area: 734, kind: '1 BHK apartment', project: 'Nathia Gali', total: 29360000, down: 8808000, monthly: 570889 },
] as const

export type Plan = (typeof plans)[number]

export const smartUnit = {
  sqft: 50,
  value: 2250000,
  down: 675000,
  monthly: 43750,
  what:
    'Smart Property Unit is a way to invest in a premium Serene Heights apartment without buying the whole apartment. With standard units of 50 sq ft, you co-own a luxury apartment in one of Nathia Gali’s most sought-after developments. On completion the apartment is let by DM Consortium and rental income is distributed according to your units.',
  steps: [
    { title: 'Fill the booking form', body: 'Apply with a few personal and financial details.' },
    { title: 'Choose a payment plan', body: 'An affordable down payment and easy monthly instalments.' },
    { title: 'Confirm ownership', body: 'Once payments are complete, your Smart Property Unit is secured.' },
    { title: 'Managed by experts', body: 'DM Consortium takes care of rentals, maintenance and returns.' },
    { title: 'Transferable units', body: 'Sell or transfer your ownership at any time.' },
  ],
  why: [
    { title: 'Affordable investment', body: 'Own premium property in instalments. Start small, grow smart.' },
    { title: 'Simple process', body: 'Hassle-free, just like buying a full unit.' },
    { title: 'Secure contracts', body: 'Every unit is protected by legal agreements.' },
    { title: 'Legal compliance', body: 'Transactions are Shariah-compliant and legally secure.' },
    { title: 'Standardised units', body: 'Fixed units of 50 sq ft, clear and fair.' },
  ],
  /** The client's own projection; always show it with `projectionNote`. */
  projection: [
    { label: 'Investment amount', value: 'PKR 2,250,000' },
    { label: 'Expected annual rental income', value: 'PKR 300,000' },
    { label: 'Annual capital gain on investment', value: '5%' },
    { label: 'Projected return', value: '13–15%' },
  ],
  projectionNote: 'Projection published by Serene Heights. Returns are not guaranteed and depend on occupancy and market conditions.',
}

export const ownerBenefits = [
  { title: 'Zero maintenance fees', body: 'Operating costs are covered by the hotel.' },
  { title: '28 free nights a year', body: 'Nathia Gali owners stay free for 28 nights every year.' },
  { title: 'Quarterly profit share', body: 'Smart Property owners in Nathia Gali share in hotel revenue every quarter.' },
  { title: 'Extended-stay discount', body: 'A discount for owners and family on longer stays.' },
]

export const investorReasons = [
  { title: 'Managed as one hotel', body: 'DM Consortium runs rentals, upkeep and returns in-house — no unions, no third-party operators.' },
  { title: 'Quarterly profit share', body: 'Smart Property owners in Nathia Gali share in hotel revenue every quarter.' },
  { title: 'Low entry', body: 'Own a share of a hotel from PKR 2 million, with 30% down and 36 monthly instalments.' },
  { title: 'Owner stays', body: 'Nathia Gali owners get 28 free nights a year and zero maintenance fees.' },
  { title: 'Assured delivery', body: 'Serene Heights Lahore carries a 2-year delivery commitment and LDA approval.' },
  { title: 'Shariah-compliant', body: 'Every transaction is structured to be Shariah-compliant and legally secure.' },
]

/** Enquiry interests (from the Lahore contact form) plus the Nathia Gali offerings. */
export const interests = {
  'ng-smart': 'Nathia Gali — Smart Property Unit (from PKR 2.25M)',
  'ng-apartment': 'Nathia Gali — 1 BHK hotel apartment',
  'lhr-smart': 'Lahore — Smart Property (from PKR 2 million)',
  'lhr-retail': 'Lahore — Commercial / retail floors',
  'lhr-offices': 'Lahore — Office floors',
  'lhr-coworking': 'Lahore — Co-working floors',
  'lhr-hotel': 'Lahore — Hotel apartments',
  visit: 'Site visit',
} as const

export type InterestKey = keyof typeof interests

/* ------------------------------------------------------------------ progress */

/** Site-visit videos on the Serene Heights YouTube channel, newest first. */
export const progressUpdates = [
  { date: 'April 2026', video: 'lxc9yQty3BA' },
  { date: 'December 2025', video: 'HIewLGoRr2g' },
  { date: 'September 2025', video: '_b7QhNjmldk' },
  { date: 'April 2025', video: 'zih0inhf1hM' },
  { date: 'July 2024', video: '_RjucM01Vp8' },
  { date: 'February 2024', video: 'J_EAtfLGICw' },
  { date: 'November 2023', video: 'YbcwSm0l4Es' },
  { date: 'July 2023', video: 'deh7Edv0cFM' },
  { date: 'October 2022', video: '_ArGeucKghA' },
  { date: 'December 2021', video: '-j6c51b2Dis' },
].map((u) => ({
  ...u,
  id: `update-${u.date.toLowerCase().replace(/\s+/g, '-')}`,
  url: `https://www.youtube.com/watch?v=${u.video}`,
  embed: `https://www.youtube-nocookie.com/embed/${u.video}`,
  thumb: `https://i.ytimg.com/vi/${u.video}/hqdefault.jpg`,
}))

/* ------------------------------------------------------------------ privacy */

export const privacyPolicy = {
  updated: 'May 8, 2026',
  sections: [
    { h: 'Overview', p: ['Serene Heights is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit our website or submit an enquiry for our resort and real estate offerings.'] },
    { h: 'Information we collect', p: ['We collect information to respond to your requests and improve the Serene Heights experience. This may include:'], list: ['Contact details such as name, email, phone number, and city.', 'Enquiry details like your interest area and preferences.', 'Basic usage data such as browser type, pages viewed, and device information.'] },
    { h: 'How we use your information', list: ['Respond to enquiries and provide requested information.', 'Share updates about Serene Heights developments and offerings.', 'Improve website content, layout, and user experience.', 'Comply with legal obligations and protect our rights.'] },
    { h: 'Information sharing', p: ['We do not sell your personal information. We may share data with trusted service providers who assist with website operations and communications, or when required by law.'] },
    { h: 'Cookies and analytics', p: ['We use cookies and analytics tools to understand website usage and improve performance. You can adjust your browser settings to manage cookies, but some features may not function properly without them.'] },
    { h: 'Data retention and security', p: ['We retain your information only as long as necessary for the purposes outlined here. We use reasonable administrative and technical safeguards to protect your data, but no system is completely secure.'] },
    { h: 'Your choices', p: ['You may request access, corrections, or deletion of your personal information by contacting us. We will respond within a reasonable timeframe.'] },
    { h: 'Contact us', p: ['If you have questions about this Privacy Policy, please contact us by phone on 042-111-111-744 or +92 300 8497999, or by email at info@sereneheightsnathiagali.com.', 'We may update this policy from time to time. Any changes will be posted on this page with an updated date.'] },
  ] as { h: string; p?: string[]; list?: string[] }[],
}

/* ------------------------------------------------------------------ format */

/** "PKR 2,250,000" */
export const pkr = (n: number) => `PKR ${Math.round(n).toLocaleString('en-PK')}`

/** "PKR 2.25M" / "PKR 26.7M" for short display. */
export const pkrShort = (n: number) =>
  n >= 1_000_000 ? `PKR ${Number((n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 2))}M` : pkr(n)
