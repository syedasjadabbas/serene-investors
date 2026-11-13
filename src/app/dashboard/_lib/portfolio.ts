// Sample portfolio shown on /dashboard. Demonstration data only, not real holdings or payments.

export const portfolioStats = [
  { value: '£45,200', label: 'Portfolio value · +8.4% all time' },
  { value: '£3,180', label: 'Rental income paid to date' },
  { value: '3', label: 'Active holdings · 100% occupied' },
  { value: '£380', label: 'Next payout · 15 Oct 2026' },
]

export const holdingsData = [
  {
    id: 'cedar-court',
    name: 'Cedar Court',
    location: 'Manchester, M20',
    type: 'Prime Residential',
    shares: 120,
    costBasis: 15000,
    currentValue: 16250,
    gainPct: 8.33,
    yieldPct: 7.2,
    monthlyIncome: 90,
    occupancy: '100%',
    status: 'Distributing',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    link: '/properties/cedar-court',
  },
  {
    id: 'courtyard-residences',
    name: 'Courtyard Residences',
    location: 'London, SW1',
    type: 'Luxury Residential',
    shares: 160,
    costBasis: 20000,
    currentValue: 21800,
    gainPct: 9.0,
    yieldPct: 6.8,
    monthlyIncome: 113.33,
    occupancy: '100%',
    status: 'Distributing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    link: '/properties/courtyard-residences',
  },
  {
    id: 'mayfair-core-fund',
    name: 'Mayfair Core Fund',
    location: 'Central London',
    type: 'Diversified Fund',
    shares: 80,
    costBasis: 10000,
    currentValue: 10750,
    gainPct: 7.5,
    yieldPct: 7.8,
    monthlyIncome: 65,
    occupancy: '98%',
    status: 'Active Allocation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    link: '/funds',
  },
]

export const distributionTotal = '£3,180.00'

export const distributionLedger = [
  { date: '15 Jul 2026', asset: 'Cedar Court', period: 'Q2 2026 Dividend', amount: '£270.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Jul 2026', asset: 'Courtyard Residences', period: 'Q2 2026 Dividend', amount: '£340.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Jul 2026', asset: 'Mayfair Core Fund', period: 'Q2 2026 Dividend', amount: '£195.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Apr 2026', asset: 'Cedar Court', period: 'Q1 2026 Dividend', amount: '£270.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Apr 2026', asset: 'Courtyard Residences', period: 'Q1 2026 Dividend', amount: '£340.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Apr 2026', asset: 'Mayfair Core Fund', period: 'Q1 2026 Dividend', amount: '£195.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Jan 2026', asset: 'Cedar Court', period: 'Q4 2025 Dividend', amount: '£270.00', method: 'Direct Bank Transfer', status: 'Paid' },
  { date: '15 Jan 2026', asset: 'Courtyard Residences', period: 'Q4 2025 Dividend', amount: '£340.00', method: 'Direct Bank Transfer', status: 'Paid' },
]

export const documentItems = [
  {
    id: 'tax-2025-26',
    title: 'Annual Tax Statement (2025/2026)',
    desc: 'Consolidated property income and tax breakdown for your annual self-assessment.',
    date: 'Generated 06 Apr 2026',
    size: '1.4 MB',
    type: 'PDF',
  },
  {
    id: 'title-deeds',
    title: 'Title Deed Custody Certificates',
    desc: 'Certificates evidencing your fractional beneficial ownership in each property SPV.',
    date: 'Updated 12 Jun 2026',
    size: '2.8 MB',
    type: 'PDF',
  },
  {
    id: 'q2-audit',
    title: 'Quarterly Independent Financial Audit (Q2 2026)',
    desc: 'Audited rental collection ledger, building reserve fund audit, and yield reconciliation.',
    date: 'Published 20 Jul 2026',
    size: '3.1 MB',
    type: 'PDF',
  },
  {
    id: 'custody',
    title: 'Custody & Client Money Assurance',
    desc: 'Custodian segregation certificate for client funds.',
    date: 'Annual Renewal 2026',
    size: '920 KB',
    type: 'PDF',
  },
]
