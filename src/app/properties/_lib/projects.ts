// Shared helpers for the Projects pages. All facts come from src/global/data/serene.ts.

import { plans, projects, type Plan, type ProjectId } from '@/global/data/serene'

export const nathiaGaliProject = projects[0]
export const lahoreProject = projects[1]

export const isProjectId = (slug: string | undefined): slug is ProjectId => slug === 'nathia-gali' || slug === 'lahore'

/** One photo per published plan, taken from the Nathia Gali gallery. */
const PLAN_IMAGE: Record<Plan['id'], { src: string; alt: string }> = {
  spu: { src: nathiaGaliProject.gallery[3], alt: 'Balconied terraces on the Serene Heights Nathia Gali tower' },
  '1bhk-667': { src: nathiaGaliProject.gallery[4], alt: 'The rooftop at Serene Heights Nathia Gali' },
  '1bhk-673': { src: nathiaGaliProject.gallery[1], alt: 'The heated infinity pool seen from above' },
  '1bhk-734': { src: nathiaGaliProject.gallery[0], alt: 'The Serene Heights tower in the snow' },
}

export const planImage = (id: Plan['id']) => PLAN_IMAGE[id]

/** "Smart Property Unit · 50 sq ft" */
export const planTitle = (plan: Plan) => `${plan.kind} · ${plan.area} sq ft`

export { plans }
