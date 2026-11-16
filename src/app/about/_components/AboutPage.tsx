import { FileText, ShieldCheck, Tag } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { aboutClarity, aboutClose, aboutIdea, aboutIntro } from '../_lib/about'
import { AboutPaths } from './AboutPaths'

const CLARITY_ICONS = { labelled: Tag, format: FileText, claims: ShieldCheck } as const

// Company page (Pattern C in docs/INNER-PAGE-PATTERNS.md): header → mission quote → principle
// cards → the two ways to invest → contact card. The contact form itself lives on /contact;
// `#contact` here is kept for older links and lands on the closing card.
export function AboutPage() {
  usePageMeta(
    'Serene Investors | About',
    `${aboutIntro.body} Serene Investors is a fictional demonstration product.`,
  )

  const clarityItems = aboutClarity.points.map((point) => ({
    title: point.title,
    body: point.body,
    icon: CLARITY_ICONS[point.id],
  }))

  return (
    <>
      <PageHeader
        align="center"
        eyebrow={aboutIntro.label}
        title={aboutIntro.heading}
        highlight="Serene Investors"
        body={aboutIntro.body}
      />

      <PageSection labelledBy="about-mission-heading" pad="bottom">
        <div className="overflow-hidden rounded-[30px]">
          <img
            src={withBase(aboutIdea.image.src)}
            alt={aboutIdea.image.alt}
            width={1600}
            height={685}
            fetchPriority="high"
            className="block aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
          />
        </div>
        <div className="mt-16 grid gap-8 sm:mt-24 md:grid-cols-[220px_1fr]">
          <h2 id="about-mission-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-sx-ink/60">
            {aboutIdea.label}
          </h2>
          <div>
            <figure>
              <blockquote className="text-balance font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-sx-ink sm:text-[2.75rem]">
                <p>“{aboutIdea.statement}”</p>
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4">
                <span aria-hidden="true" className="flex size-14 items-center justify-center rounded-[14px] bg-sx-forest font-heading text-lg font-extrabold text-sx-mint">
                  S
                </span>
                <span className="text-sm font-semibold text-sx-forest">{aboutIdea.attribution}</span>
              </figcaption>
            </figure>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-sx-ink/65 sm:text-lg">{aboutIdea.body}</p>
          </div>
        </div>
      </PageSection>

      <PageSection labelledBy="about-clarity-heading" pad="bottom">
        <SectionHeading id="about-clarity-heading" eyebrow="What we hold to" title={aboutClarity.heading} highlight="clearly" body={aboutClarity.body} />
        <FeatureCards items={clarityItems} columns={3} className="mt-10" />
      </PageSection>

      <AboutPaths />

      <div id="contact" className="scroll-mt-24">
        <CtaBand
          tone="white"
          title={aboutClose.heading}
          highlight="Talk to us"
          body={aboutClose.body}
          actions={[
            { label: 'Contact us', href: '/contact' },
            { label: 'Read the FAQs', href: '/faq' },
          ]}
          image={{ src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of the Palm Jumeirah' }}
        />
      </div>
    </>
  )
}
