// Loads one Journal article's full text. Used only by the server page in ../[slug]/page.tsx, so each
// article page ships its own article and nothing else. One loader per file keeps the imports static
// for the bundler.

import type { Article } from './article'

type Loader = () => Promise<{ default: unknown }>

const loaders: Record<string, Loader> = {
  'ayubia-national-park-from-nathia-gali-guide': () => import('./articles/ayubia-national-park-from-nathia-gali-guide.json'),
  'best-time-to-visit-nathia-gali': () => import('./articles/best-time-to-visit-nathia-gali.json'),
  'buying-holiday-home-in-nathia-gali': () => import('./articles/buying-holiday-home-in-nathia-gali.json'),
  'compare-hotel-apartment-payment-schedules': () => import('./articles/compare-hotel-apartment-payment-schedules.json'),
  'furnished-hotel-apartment-inclusions': () => import('./articles/furnished-hotel-apartment-inclusions.json'),
  'galiyat-mountain-property-outperforming-city-real-estate': () => import('./articles/galiyat-mountain-property-outperforming-city-real-estate.json'),
  'hotel-apartment-cost-nathia-gali-2026': () => import('./articles/hotel-apartment-cost-nathia-gali-2026.json'),
  'hotel-apartment-ownership-in-pakistan': () => import('./articles/hotel-apartment-ownership-in-pakistan.json'),
  'hotel-apartment-vs-holiday-home-pakistan': () => import('./articles/hotel-apartment-vs-holiday-home-pakistan.json'),
  'hotel-apartment-vs-plot-investment-pakistan': () => import('./articles/hotel-apartment-vs-plot-investment-pakistan.json'),
  'how-to-get-to-nathia-gali-complete-driving-guide': () => import('./articles/how-to-get-to-nathia-gali-complete-driving-guide.json'),
  'how-to-spend-48-hours-in-nathiagali': () => import('./articles/how-to-spend-48-hours-in-nathiagali.json'),
  'is-serene-heights-nathiagali-worth-investment': () => import('./articles/is-serene-heights-nathiagali-worth-investment.json'),
  'islamabad-to-nathia-gali-travel-guide-2026': () => import('./articles/islamabad-to-nathia-gali-travel-guide-2026.json'),
  'maximize-rental-income-from-nathia-gali-property': () => import('./articles/maximize-rental-income-from-nathia-gali-property.json'),
  'nathia-gali-december-month-guide': () => import('./articles/nathia-gali-december-month-guide.json'),
  'nathia-gali-first-time-visitors-guide': () => import('./articles/nathia-gali-first-time-visitors-guide.json'),
  'nathia-gali-for-couples': () => import('./articles/nathia-gali-for-couples.json'),
  'nathia-gali-for-families-guide': () => import('./articles/nathia-gali-for-families-guide.json'),
  'nathia-gali-in-spring-march-april-may-guide': () => import('./articles/nathia-gali-in-spring-march-april-may-guide.json'),
  'nathia-gali-real-estate-investment': () => import('./articles/nathia-gali-real-estate-investment.json'),
  'nathia-gali-remote-workers-digital-nomads-workation-guide': () => import('./articles/nathia-gali-remote-workers-digital-nomads-workation-guide.json'),
  'nathia-gali-vs-abbottabad-living-investment': () => import('./articles/nathia-gali-vs-abbottabad-living-investment.json'),
  'nathia-gali-vs-murree-vs-kalam': () => import('./articles/nathia-gali-vs-murree-vs-kalam.json'),
  'nathia-gali-vs-murree': () => import('./articles/nathia-gali-vs-murree.json'),
  'nathia-gali-weather-seasons-climate-guide': () => import('./articles/nathia-gali-weather-seasons-climate-guide.json'),
  'nathia-gali-with-elderly-guide': () => import('./articles/nathia-gali-with-elderly-guide.json'),
  'serene-heights-site-visit-checklist': () => import('./articles/serene-heights-site-visit-checklist.json'),
  'snowfall-in-nathia-gali': () => import('./articles/snowfall-in-nathia-gali.json'),
  'things-to-do-in-nathia-gali': () => import('./articles/things-to-do-in-nathia-gali.json'),
}

export async function loadArticle(slug: string): Promise<Article | undefined> {
  const load = loaders[slug]
  if (!load) return undefined
  const mod = await load()
  return mod.default as Article
}
