import { Eye, FileText, ShieldCheck, Tag } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { aboutClarity, aboutClose, aboutIdea, aboutIntro } from '../_lib/about'
import { AboutContact } from './AboutContact'
import { AboutExperience } from './AboutExperience'
import { AboutPaths } from './AboutPaths'

const CLARITY_ICONS = { labelled: Tag, format: FileText, claims: ShieldCheck, fiction: Eye } as const

export function AboutPage() {
  usePageMeta(
    'SERENE INVESTORS | About',
    `${aboutIntro.body} SERENE INVESTORS is a fictional demonstration product.`,
  )

  const clarityItems = aboutClarity.points.map((point) => ({
    title: point.title,
    body: point.body,
    icon: CLARITY_ICONS[point.id],
  }))

  return (
    <>
      <PageHero
        eyebrow={aboutIntro.label}
        title={aboutIntro.heading}
        highlight="Serene Investors"
        body={aboutIntro.body}
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Get in touch', href: '#contact' },
        ]}
        media={
          <img
            src={withBase(aboutIntro.image.src)}
            alt={aboutIntro.image.alt}
            width={2000}
            height={1200}
            fetchPriority="high"
            className="block aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
          />
        }
      />

      <PageSection labelledBy="about-idea-heading" pad="bottom">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <h2 id="about-idea-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-sx-ink/60">
            Our idea
          </h2>
          <figure>
            <blockquote className="font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-sx-ink sm:text-[2.75rem]">
              <p>“{aboutIdea.statement}”</p>
            </blockquote>
            <figcaption className="mt-8 max-w-2xl text-base leading-relaxed text-sx-ink/65 sm:text-lg">{aboutIdea.body}</figcaption>
          </figure>
        </div>
        <div className="mt-12 overflow-hidden rounded-[24px]">
          <img
            src={withBase(aboutIdea.image.src)}
            alt={aboutIdea.image.alt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="block aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
          />
        </div>
      </PageSection>

      <AboutPaths />

      <PageSection tone="dark" labelledBy="about-clarity-heading">
        <SectionHeading id="about-clarity-heading" tone="dark" eyebrow="Built with clarity" title={aboutClarity.heading} highlight="clearly" body={aboutClarity.body} />
        <FeatureCards items={clarityItems} tone="dark" columns={4} className="mt-12" />
      </PageSection>

      <AboutExperience />

      <AboutContact />

      <CtaBand
        title={aboutClose.heading}
        highlight="real estate"
        body={aboutClose.body}
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Learn more', href: '/learn' },
        ]}
        image={{ src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of the Palm Jumeirah' }}
      />
    </>
  )
}
