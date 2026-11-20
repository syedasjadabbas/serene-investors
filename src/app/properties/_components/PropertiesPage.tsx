import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { PillLink } from '@/global/components/ui/PillLink'
import { investorReasons, lahore, nathiagali, projects } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { lahoreProject, nathiaGaliProject, plans } from '../_lib/projects'
import { LahoreFloors } from './LahoreFloors'
import { PlanGrid } from './PlanCard'
import { ProjectCard } from './ProjectCard'
import { ProjectsHeroVisual } from './ProjectsHeroVisual'

// Product page (Pattern A, tint) in docs/INNER-PAGE-PATTERNS.md: pinned hero → stats → the two
// projects → why invest → published payment plans → Lahore floors → closing band.

const apartments = nathiagali.figures.find((item) => item.label === 'Apartments')?.value ?? '150+'

const STATS = [
  { value: String(projects.length), label: 'Serene Heights projects' },
  { value: '21', label: 'storeys in Lahore' },
  { value: apartments, label: 'apartments in Nathia Gali' },
  { value: '30%', label: 'down, then 36 monthly instalments' },
]

// One real photo per reason, from both projects.
const REASON_IMAGES = [
  { src: nathiaGaliProject.gallery[4], alt: 'The rooftop at Serene Heights Nathia Gali' },
  { src: nathiaGaliProject.gallery[1], alt: 'The heated infinity pool at Serene Heights Nathia Gali' },
  { src: nathiaGaliProject.gallery[3], alt: 'Balconied terraces on the Nathia Gali tower' },
  { src: nathiagali.resortImages[2].src, alt: nathiagali.resortImages[2].alt },
  { src: lahoreProject.image, alt: 'The Serene Heights Lahore tower on Gulberg Main Boulevard' },
  { src: nathiaGaliProject.gallery[2], alt: 'The ridge above the cloud line at Nathia Gali' },
]

const WHY = investorReasons.map((reason, index) => ({
  title: reason.title,
  body: reason.body,
  image: REASON_IMAGES[index % REASON_IMAGES.length],
}))

export function PropertiesPage() {
  usePageMeta(
    'Serene Investors | Projects',
    'Serene Heights Nathia Gali, a hotel and resort at 7,906 ft, and Serene Heights Lahore, a 21-storey mixed-use tower on Gulberg Main Boulevard. Own a part from PKR 2 million.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Projects"
        title="Own a part of Serene Heights, in the mountains or the city."
        highlight="Serene Heights"
        body="A hotel and resort in the pines of Nathia Gali, and a 21-storey mixed-use tower on Gulberg Main Boulevard, Lahore. Both are run in-house, with smart property from PKR 2.25M in Nathia Gali and PKR 2 million in Lahore."
        actions={[
          { label: 'See the projects', href: '#projects' },
          { label: 'Payment plans', href: '/calculator' },
        ]}
        visual={<ProjectsHeroVisual />}
      />

      <HeroCover>
        <PageSection label="Serene Heights at a glance" pad="top">
          <StatCards items={STATS} caption="Figures as published by Serene Heights." />
        </PageSection>

        <PageSection id="projects" labelledBy="projects-heading" className="scroll-mt-24">
          <SectionHeading
            id="projects-heading"
            eyebrow="The projects"
            title="Two projects, managed as one."
            highlight="managed as one"
            body="Open a project for its photos, amenities, floors and payment plans."
          />
          <div className="mt-10 flex flex-col gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </PageSection>

        <section aria-labelledby="why-heading" className="py-16 sm:py-24">
          <FeatureCarousel heading="Why invest with Serene Heights" headingId="why-heading" slides={WHY} />
        </section>

        <PageSection id="plans" labelledBy="plans-heading" className="scroll-mt-24">
          <SectionHeading
            id="plans-heading"
            eyebrow="Nathia Gali payment plans"
            title="Four published plans, 30% down."
            highlight="30% down"
            body="Each plan is 30% down, with the rest over 36 monthly instalments. Figures exactly as issued by Serene Heights."
            action={
              <PillLink href="/calculator" variant="dark">
                Open payment plans
              </PillLink>
            }
          />
          <div className="mt-10">
            <PlanGrid plans={plans} />
          </div>
        </PageSection>

        <PageSection labelledBy="lahore-floors-heading">
          <SectionHeading
            id="lahore-floors-heading"
            eyebrow="Serene Heights Lahore"
            title="One tower, every kind of floor."
            highlight="every kind of floor"
            body={lahore.configuration}
            action={
              <PillLink href="/properties/lahore" variant="dark">
                Explore Lahore
              </PillLink>
            }
          />
          <div className="mt-10">
            <LahoreFloors />
          </div>
        </PageSection>

        <CtaBand
          tone="brand"
          title="Find the plan that fits, then talk to us."
          highlight="talk to us"
          body="Compare the published payment plans, or ask the Serene Heights team about either project."
          actions={[
            { label: 'Payment plans', href: '/calculator' },
            { label: 'Contact us', href: '/contact' },
          ]}
        />
      </HeroCover>
    </>
  )
}
