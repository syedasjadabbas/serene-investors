// Index of the Serene Heights Journal: the client's 30 articles, newest first, in the order the
// Nathia Gali site lists them (serene heights nathiagali/src/data/pages.ts → `posts`).
// Only list fields live here so the hub never ships article bodies; each article's full text is
// in ./articles/<slug>.json and is loaded by its own page (see ./articles.ts).
// Covers: the article's own image where it has one, otherwise a project render (same rule as the
// Nathia Gali site).

export type JournalEntry = {
  slug: string
  title: string
  category: string
  /** ISO date, for <time dateTime>. */
  date: string
  /** As published, e.g. "October 11, 2026". */
  dateLabel: string
  description: string
  /** Card image (640px). */
  cover: string
  /** Full-size image for the featured cards and the article page. */
  hero: string
}

export const journal: JournalEntry[] = [
  {
    slug: 'serene-heights-site-visit-checklist',
    title: 'What to Check During a Serene Heights Site Visit',
    category: 'Project Due Diligence',
    date: '2026-10-11',
    dateLabel: 'October 11, 2026',
    description: 'Planning a Serene Heights site visit? This checklist covers construction progress, questions to ask, documents to request, and how to get maximum value from the trip.',
    cover: '/images/serene/journal/serene-heights-site-visit-checklist-640.webp',
    hero: '/images/serene/journal/serene-heights-site-visit-checklist.webp',
  },
  {
    slug: 'furnished-hotel-apartment-inclusions',
    title: 'What Is Included in a Furnished Hotel Apartment? A Buyer’s Guide to Finish, Furniture and Handover Scope',
    category: 'Unit Specifications',
    date: '2026-10-09',
    dateLabel: 'October 9, 2026',
    description: 'What does “fully furnished hotel apartment” actually mean? Finish specifications, furniture, appliances, handover scope and the difference between illustrations and contractual inclusions.',
    cover: '/images/serene/journal/furnished-hotel-apartment-inclusions-640.webp',
    hero: '/images/serene/journal/furnished-hotel-apartment-inclusions.webp',
  },
  {
    slug: 'compare-hotel-apartment-payment-schedules',
    title: 'How to Compare Two Hotel Apartment Payment Schedules: A Framework for Buyers',
    category: 'Payment Literacy',
    date: '2026-10-06',
    dateLabel: 'October 6, 2026',
    description: 'Two payment plans can look similar on paper but cost very differently in total. Compare total consideration, instalments, charges, default terms and cancellation.',
    cover: '/images/serene/journal/compare-hotel-apartment-payment-schedules-640.webp',
    hero: '/images/serene/journal/compare-hotel-apartment-payment-schedules.webp',
  },
  {
    slug: 'hotel-apartment-vs-holiday-home-pakistan',
    title: 'Hotel Apartment vs Holiday Home: Which Ownership Model Fits Your Use Case?',
    category: 'Ownership Guide',
    date: '2026-09-26',
    dateLabel: 'September 26, 2026',
    description: 'Compare ownership control, rental income, management, personal use and resale to find which model fits your situation.',
    cover: '/images/serene/journal/hotel-apartment-vs-holiday-home-pakistan-640.webp',
    hero: '/images/serene/journal/hotel-apartment-vs-holiday-home-pakistan.webp',
  },
  {
    slug: 'hotel-apartment-ownership-in-pakistan',
    title: 'Hotel Apartment Ownership in Pakistan: How Owner Stays, Rental Income and Management Actually Work',
    category: 'Investment',
    date: '2026-09-14',
    dateLabel: 'September 14, 2026',
    description: 'How managed hotel-apartment ownership works in Pakistan: owner stays, rental income distribution, management responsibilities, and what to ask before you buy.',
    cover: '/images/serene/journal/hotel-apartment-ownership-in-pakistan-640.webp',
    hero: '/images/serene/journal/hotel-apartment-ownership-in-pakistan.webp',
  },
  {
    slug: 'buying-holiday-home-in-nathia-gali',
    title: 'Buying a Holiday Home in Nathia Gali: Balancing Family Use and Rental Income',
    category: 'Investment',
    date: '2026-09-12',
    dateLabel: 'September 12, 2026',
    description: 'Layout choices, peak-season owner rules, financial planning and what to confirm before you buy.',
    cover: '/images/serene/journal/buying-holiday-home-in-nathia-gali-640.webp',
    hero: '/images/serene/journal/buying-holiday-home-in-nathia-gali.webp',
  },
  {
    slug: 'ayubia-national-park-from-nathia-gali-guide',
    title: 'Ayubia National Park from Nathia Gali: 2026 Visitor Guide',
    category: 'Travel Guide',
    date: '2026-09-09',
    dateLabel: 'September 9, 2026',
    description: 'The Pipeline Track, chairlift, wildlife, trails, entry fees, timings and the best things to do.',
    cover: '/images/serene/journal/ayubia-national-park-from-nathia-gali-guide-640.webp',
    hero: '/images/serene/journal/ayubia-national-park-from-nathia-gali-guide.webp',
  },
  {
    slug: 'nathia-gali-in-spring-march-april-may-guide',
    title: 'Nathia Gali in Spring: March, April and May Guide (2026)',
    category: 'Travel Guide',
    date: '2026-09-07',
    dateLabel: 'September 7, 2026',
    description: 'Spring is Nathia Gali’s most beautiful and least crowded season: wildflowers, trails, weather and why spring visitors come back.',
    cover: '/images/serene/journal/nathia-gali-in-spring-march-april-may-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-in-spring-march-april-may-guide.webp',
  },
  {
    slug: 'how-to-spend-48-hours-in-nathiagali',
    title: 'How to Spend 48 Hours in Nathia Gali: Realistic Weekend Itinerary',
    category: 'Travel Guide',
    date: '2026-08-31',
    dateLabel: 'August 31, 2026',
    description: 'A realistic 48-hour itinerary with actual timings, named spots, and contingency plans for rain.',
    cover: '/images/serene/journal/how-to-spend-48-hours-in-nathiagali-640.webp',
    hero: '/images/serene/journal/how-to-spend-48-hours-in-nathiagali.webp',
  },
  {
    slug: 'nathia-gali-first-time-visitors-guide',
    title: 'What Nobody Tells You About Visiting Nathia Gali for the First Time',
    category: 'Travel Guide',
    date: '2026-08-30',
    dateLabel: 'August 30, 2026',
    description: 'The traffic, the altitude, the bazaar reality, which trails are worth it, and how to actually plan the trip.',
    cover: '/images/serene/journal/nathia-gali-first-time-visitors-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-first-time-visitors-guide.webp',
  },
  {
    slug: 'nathia-gali-vs-abbottabad-living-investment',
    title: 'Nathia Gali vs Abbottabad: Mountain Living and Investment Comparison',
    category: 'Investment',
    date: '2026-08-26',
    dateLabel: 'August 26, 2026',
    description: 'Altitude, lifestyle, real estate returns, infrastructure, accessibility, and which suits mountain living versus weekend investment.',
    cover: '/images/serene/journal/nathia-gali-vs-abbottabad-living-investment-640.webp',
    hero: '/images/serene/journal/nathia-gali-vs-abbottabad-living-investment.webp',
  },
  {
    slug: 'nathia-gali-with-elderly-guide',
    title: 'Nathia Gali with Elderly: How to Plan a Comfortable Visit (2026)',
    category: 'Travel Guide',
    date: '2026-08-25',
    dateLabel: 'August 25, 2026',
    description: 'Altitude preparation, accommodation requirements, suitable activities, and how Serene Heights makes it manageable.',
    cover: '/images/serene/journal/nathia-gali-with-elderly-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-with-elderly-guide.webp',
  },
  {
    slug: 'nathia-gali-vs-murree-vs-kalam',
    title: 'Nathia Gali vs Murree vs Kalam for Visitors and Investors (2026)',
    category: 'Travel Guide',
    date: '2026-08-24',
    dateLabel: 'August 24, 2026',
    description: 'Altitude, accessibility, infrastructure, rental yields, crowd levels and who each suits best.',
    cover: '/images/serene/journal/nathia-gali-vs-murree-vs-kalam-640.webp',
    hero: '/images/serene/journal/nathia-gali-vs-murree-vs-kalam.webp',
  },
  {
    slug: 'snowfall-in-nathia-gali',
    title: 'Snowfall in Nathia Gali 2026-27: Complete Guide',
    category: 'Travel Guide',
    date: '2026-08-18',
    dateLabel: 'August 18, 2026',
    description: 'When snow starts, peak snowfall months, road conditions, what to pack, and safety tips for mountain travel.',
    cover: '/images/serene/journal/snowfall-in-nathia-gali-640.webp',
    hero: '/images/serene/journal/snowfall-in-nathia-gali.webp',
  },
  {
    slug: 'nathia-gali-december-month-guide',
    title: 'Nathia Gali in December: What to Expect in the Winter Season',
    category: 'Travel Guide',
    date: '2026-08-13',
    dateLabel: 'August 13, 2026',
    description: 'The weather, when snowfall starts, what is open, and how December compares to January and November.',
    cover: '/images/serene/journal/nathia-gali-december-month-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-december-month-guide.webp',
  },
  {
    slug: 'galiyat-mountain-property-outperforming-city-real-estate',
    title: 'Why Galiyat Mountain Property Is Outperforming City Real Estate in Pakistan (2026)',
    category: 'Investment',
    date: '2026-08-12',
    dateLabel: 'August 12, 2026',
    description: 'Why mountain property is drawing investors, how the tourism rental model works, and what to know before buying.',
    cover: '/images/serene/journal/galiyat-mountain-property-outperforming-city-real-estate-640.webp',
    hero: '/images/serene/journal/galiyat-mountain-property-outperforming-city-real-estate.webp',
  },
  {
    slug: 'islamabad-to-nathia-gali-travel-guide-2026',
    title: 'Complete Travel Guide: Islamabad to Nathia Gali 2026',
    category: 'Travel Guide',
    date: '2026-08-08',
    dateLabel: 'August 8, 2026',
    description: 'Best routes, driving distance, time, tips for each season, what to pack, and what to expect on arrival.',
    cover: '/images/serene/journal/islamabad-to-nathia-gali-travel-guide-2026-640.webp',
    hero: '/images/serene/journal/islamabad-to-nathia-gali-travel-guide-2026.webp',
  },
  {
    slug: 'hotel-apartment-cost-nathia-gali-2026',
    title: 'How Much Does a Hotel Apartment Cost in Nathia Gali? (2026 Guide)',
    category: 'Travel Guide',
    date: '2026-08-07',
    dateLabel: 'August 7, 2026',
    description: 'Nightly rates by category, weekend vs weekday costs, what is included, and how Serene Heights compares to standard hotels.',
    cover: '/images/serene/journal/hotel-apartment-cost-nathia-gali-2026-640.webp',
    hero: '/images/serene/journal/hotel-apartment-cost-nathia-gali-2026.webp',
  },
  {
    slug: 'nathia-gali-for-families-guide',
    title: 'Nathia Gali for Families: Kids’ Activities & Family Vacation Planning',
    category: 'Travel Guide',
    date: '2026-07-28',
    dateLabel: 'July 28, 2026',
    description: 'Outdoor exploration for children and a slower mountain pace for parents: how to plan a family trip that works.',
    cover: '/images/serene/journal/nathia-gali-for-families-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-for-families-guide.webp',
  },
  {
    slug: 'nathia-gali-remote-workers-digital-nomads-workation-guide',
    title: 'Nathia Gali for Remote Workers & Digital Nomads: Your Workation Guide',
    category: 'Travel Guide',
    date: '2026-07-27',
    dateLabel: 'July 27, 2026',
    description: 'Reliable connectivity, a cooler climate, and a cost of living that stretches freelance income further.',
    cover: '/images/serene/journal/nathia-gali-remote-workers-digital-nomads-workation-guide-640.webp',
    hero: '/images/serene/journal/nathia-gali-remote-workers-digital-nomads-workation-guide.webp',
  },
  {
    slug: 'how-to-get-to-nathia-gali-complete-driving-guide',
    title: 'How to Get to Nathia Gali: Guide from Islamabad & Lahore',
    category: 'Travel Guide',
    date: '2026-07-26',
    dateLabel: 'July 26, 2026',
    description: 'Routes, road conditions and travel timing, before you even arrive.',
    cover: '/images/serene/journal/how-to-get-to-nathia-gali-complete-driving-guide-640.webp',
    hero: '/images/serene/journal/how-to-get-to-nathia-gali-complete-driving-guide.webp',
  },
  {
    slug: 'maximize-rental-income-from-nathia-gali-property',
    title: 'How to Maximize Rental Income from Your Nathia Gali Property Investment',
    category: 'Investment',
    date: '2026-07-13',
    dateLabel: 'July 13, 2026',
    description: 'Five strategies to increase occupancy, optimise pricing, and improve returns.',
    cover: '/images/serene/nathiagali/pines-960.webp',
    hero: '/images/serene/nathiagali/pines.webp',
  },
  {
    slug: 'is-serene-heights-nathiagali-worth-investment',
    title: 'Is Serene Heights Nathia Gali Worth the Investment?',
    category: 'Investment',
    date: '2026-07-12',
    dateLabel: 'July 12, 2026',
    description: 'Financial metrics, specific advantages, realistic limitations, and a framework to decide whether it fits your situation.',
    cover: '/images/serene/nathiagali/terraces-960.webp',
    hero: '/images/serene/nathiagali/terraces.webp',
  },
  {
    slug: 'nathia-gali-weather-seasons-climate-guide',
    title: 'Nathia Gali Weather & Seasons for Investors and Visitors',
    category: 'Travel & Investment Guide',
    date: '2026-07-11',
    dateLabel: 'July 11, 2026',
    description: 'Year-round temperatures, rainfall, seasonal activities, tourism demand, and occupancy patterns.',
    cover: '/images/serene/nathiagali/rooftop-960.webp',
    hero: '/images/serene/nathiagali/rooftop.webp',
  },
  {
    slug: 'nathia-gali-for-couples',
    title: 'Nathia Gali for Couples: Memories With Your Partner in Nature',
    category: 'Travel Guide',
    date: '2026-06-19',
    dateLabel: 'June 19, 2026',
    description: 'Pine trees, cold mornings, and a proper mountain view from a room with actual heating.',
    cover: '/images/serene/journal/nathia-gali-for-couples-640.webp',
    hero: '/images/serene/journal/nathia-gali-for-couples.webp',
  },
  {
    slug: 'nathia-gali-vs-murree',
    title: 'Nathia Gali vs Murree: An Honest Look at Both Hill Stations',
    category: 'Travel Guide',
    date: '2026-06-19',
    dateLabel: 'June 19, 2026',
    description: 'Both are about two hours from Islamabad, with pine forests and cold nights. Here is how they differ.',
    cover: '/images/serene/journal/nathia-gali-vs-murree-640.webp',
    hero: '/images/serene/journal/nathia-gali-vs-murree.webp',
  },
  {
    slug: 'best-time-to-visit-nathia-gali',
    title: 'Best Time to Visit Nathia Gali (By Month, By Season, By What You Want)',
    category: 'Travel Guide',
    date: '2026-06-14',
    dateLabel: 'June 14, 2026',
    description: 'For comfortable weather and open trails, go in April, May or October. For snowfall, January is your month.',
    cover: '/images/serene/journal/best-time-to-visit-nathia-gali-640.webp',
    hero: '/images/serene/journal/best-time-to-visit-nathia-gali.webp',
  },
  {
    slug: 'things-to-do-in-nathia-gali',
    title: 'Things to Do in Nathia Gali: Hikes, Landmarks, and Activities',
    category: 'Travel Guide',
    date: '2026-06-14',
    dateLabel: 'June 14, 2026',
    description: 'From Miranjani and Mukshpuri to colonial landmarks, wildlife and adventure activities.',
    cover: '/images/serene/journal/things-to-do-in-nathia-gali-640.webp',
    hero: '/images/serene/journal/things-to-do-in-nathia-gali.webp',
  },
  {
    slug: 'hotel-apartment-vs-plot-investment-pakistan',
    title: 'Hotel Apartment vs Plot Investment in Pakistan: Which Gives Better Returns?',
    category: 'Investment',
    date: '2026-06-09',
    dateLabel: 'June 9, 2026',
    description: 'Buy a plot and wait for appreciation, or buy a hotel apartment and earn rental income from day one?',
    cover: '/images/serene/nathiagali/rooftop-960.webp',
    hero: '/images/serene/nathiagali/rooftop.webp',
  },
  {
    slug: 'nathia-gali-real-estate-investment',
    title: 'Investing in Nathia Gali Real Estate: What You Need to Know Before You Buy',
    category: 'Investment',
    date: '2026-06-09',
    dateLabel: 'June 9, 2026',
    description: 'Tourism demand, managed rental operations and long-term appreciation at 7,906 ft, 80 km from Islamabad.',
    cover: '/images/serene/nathiagali/sunrise-960.webp',
    hero: '/images/serene/nathiagali/sunrise.webp',
  },
]

export const journalIntro = {
  eyebrow: 'Serene Heights Journal',
  heading: 'The Serene Heights Journal.',
  highlight: 'Journal',
  body: 'Guides from the Serene Heights team on owning a hotel apartment, payment plans, site visits and life in Nathia Gali, from the drive up to the first snowfall.',
} as const

/** Categories in the order they first appear (newest first). */
export const journalCategories: string[] = Array.from(new Set(journal.map((entry) => entry.category)))

/** The latest Investment articles, for the featured row on the hub. */
export const featuredJournal: JournalEntry[] = journal.filter((entry) => entry.category === 'Investment').slice(0, 3)

export const journalSlugs = journal.map((entry) => entry.slug)

export const getJournalEntry = (slug: string) => journal.find((entry) => entry.slug === slug)

/** Up to `count` other articles, same category first, topped up with the latest articles. */
export function relatedJournal(slug: string, count = 3): JournalEntry[] {
  const current = getJournalEntry(slug)
  const others = journal.filter((entry) => entry.slug !== slug)
  const same = others.filter((entry) => entry.category === current?.category)
  const rest = others.filter((entry) => entry.category !== current?.category)
  return [...same, ...rest].slice(0, count)
}
