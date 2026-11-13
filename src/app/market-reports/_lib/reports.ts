export type MarketReport = {
  id: string
  title: string
  date: string
  pages: string
  desc: string
  highlights: string[]
  image: { src: string; alt: string }
}

export const reportsIntro = {
  eyebrow: 'Research & analytics',
  heading: 'Market reports',
  highlight: 'reports',
  body: 'Research on Dubai and Saudi Arabia real estate performance, rental income benchmarks and market dynamics.',
} as const

/** Newest first; the first report is shown as the featured release. */
export const marketReports: MarketReport[] = [
  {
    id: 'dubai-q1-2026',
    title: 'Dubai Real Estate Market Report Q1 2026',
    date: 'April 2026',
    pages: '28 pages',
    desc: 'In-depth analysis of residential property yields, capital appreciation trends across Dubai Marina, Downtown, and Palm Jumeirah, and secondary market liquidity.',
    highlights: ['10.1% Average Platform Yield', '+14.2% YoY Capital Appreciation', '94% Prime Rental Occupancy'],
    image: { src: '/images/journey/dubai-marina.jpg', alt: 'Dubai Marina towers along the water' },
  },
  {
    id: 'riyadh-outlook-2026',
    title: 'Riyadh Institutional Real Estate Outlook 2025/2026',
    date: 'January 2026',
    pages: '22 pages',
    desc: 'Overview of the Saudi Vision 2030 commercial real estate pipeline, high-demand logistics corridors, and institutional fund performance.',
    highlights: ['SAR 120M Total Value Tracked', '8.9% Target Fund IRR', 'Quarterly Dividend Benchmarks'],
    image: { src: '/images/journey/hittin.jpg', alt: 'A lit retail building at dusk with the Riyadh skyline behind it' },
  },
  {
    id: 'golden-visa-study-2025',
    title: 'UAE Golden Visa Inflow & Property Study',
    date: 'November 2025',
    pages: '18 pages',
    desc: 'How the AED 2,000,000 Golden Visa threshold is driving foreign investment into fractional and individual residential real estate.',
    highlights: ['+38% Visa Applications', 'AED 2M Average Allocation', 'European & Asian Inflows'],
    image: { src: '/images/journey/burj-al-arab.jpg', alt: 'The Dubai coastline at sunset' },
  },
  {
    id: 'rental-index-2025',
    title: 'Short-Term Holiday vs. Long-Term Rental Index',
    date: 'August 2025',
    pages: '20 pages',
    desc: 'Comparative study of net yield margins between DTCM-licensed holiday homes and standard 1-year tenancy agreements.',
    highlights: ['7.8% Net Long-term Yield', '9.4% Holiday Home Yield', 'Downtown Dubai Case Study'],
    image: { src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' },
  },
]
