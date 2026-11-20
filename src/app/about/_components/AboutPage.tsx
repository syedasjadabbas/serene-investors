'use client'

import { Building, CheckCircle2, Compass, GraduationCap, Handshake, MapPin, ShieldCheck } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHeader } from '@/global/components/page/PageHeader'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StepRow } from '@/global/components/page/StepRow'
import { PillLink } from '@/global/components/ui/PillLink'
import { company, contact, investorReasons, projects } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'

const PHILOSOPHY_ICONS = [Compass, ShieldCheck, GraduationCap]
const MANAGEMENT = ['Managed as one hotel', 'Quarterly profit share', 'Shariah-compliant']
const MANAGEMENT_ICONS = [Building, Handshake, CheckCircle2]

// Company page (Pattern C in docs/INNER-PAGE-PATTERNS.md): header → photo and model → leadership and
// philosophy → DM Consortium management → the two projects → completed work → offices → contact band.
export function AboutPage() {
  usePageMeta(
    'Serene Investors | About Serene Heights Group',
    `${company.intro} Developed and managed by ${company.developer}.`,
  )

  const nathiaGali = projects.find((project) => project.id === 'nathia-gali')
  const philosophy = company.philosophy.map((item, index) => ({ title: item.title, body: item.body, icon: PHILOSOPHY_ICONS[index] }))
  const management = investorReasons
    .filter((reason) => MANAGEMENT.includes(reason.title))
    .map((reason, index) => ({ title: reason.title, body: reason.body, icon: MANAGEMENT_ICONS[index] }))

  return (
    <>
      <PageHeader
        align="center"
        eyebrow={company.name}
        title="Owning a share of a hotel, made simple."
        highlight="made simple"
        body={company.intro}
      />

      <PageSection labelledBy="about-model-heading" pad="bottom">
        {nathiaGali && (
          <div className="overflow-hidden rounded-[30px] bg-sx-ink">
            <img
              src={withBase(nathiaGali.image)}
              alt="Serene Heights Nathia Gali rising above the pines in the mist"
              width={1600}
              height={685}
              fetchPriority="high"
              className="block aspect-[4/3] w-full object-cover sm:aspect-[21/9]"
            />
          </div>
        )}
        <div className="mt-16 grid gap-8 sm:mt-24 md:grid-cols-[220px_1fr]">
          <h2 id="about-model-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-sx-ink/60">
            Our model
          </h2>
          <div>
            <p className="text-balance font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-sx-ink sm:text-[2.5rem]">
              {company.model}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-sx-ink/65 sm:text-lg">
              Serene Investors is part of {company.name}, developed by {company.developer}. It brings together the group’s two
              projects, Serene Heights Nathia Gali and Serene Heights Lahore, with the payment plans and owner benefits as Serene
              Heights publishes them.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection labelledBy="about-leadership-heading" pad="bottom">
        <div className="grid gap-8 rounded-[30px] bg-sx-forest p-6 text-white sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:p-14">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>Leadership</Eyebrow>
            <h2 id="about-leadership-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
              {company.ceo.name}
            </h2>
            <p className="text-base font-semibold text-sx-mint">{company.ceo.role}</p>
          </div>
          <p className="self-end text-lg leading-relaxed text-white/80">
            {company.name} was founded in {company.founded}. Its chief executive’s philosophy rests on three ideas: build businesses
            that last, keep ownership transparent, and share what he has learned about leading a company.
          </p>
        </div>
        <FeatureCards items={philosophy} columns={3} className="mt-4" />
      </PageSection>

      <PageSection labelledBy="about-management-heading" pad="bottom">
        <SectionHeading
          id="about-management-heading"
          eyebrow={company.developer}
          title="Managed in-house, as one hotel."
          highlight="as one hotel"
          body={company.management}
        />
        <FeatureCards items={management} columns={3} className="mt-10" />
      </PageSection>

      <PageSection labelledBy="about-projects-heading" pad="bottom">
        <SectionHeading id="about-projects-heading" eyebrow="Our projects" title="Two projects, one group." highlight="one group" align="center" />
        <div className="mt-12 flex flex-col gap-6">
          {projects.map((project, index) => (
            <StepRow
              key={project.id}
              id={`about-project-${project.id}`}
              step={`${project.kind} · ${project.status}`}
              title={project.name}
              reverse={index % 2 === 1}
              image={{ src: project.image, alt: `${project.name}, ${project.place}` }}
              body={
                <>
                  <p>{project.summary}</p>
                  <ul aria-label={`${project.short} at a glance`} className="mt-5 flex flex-wrap gap-2">
                    {project.facts.map((fact) => (
                      <li key={fact} className="rounded-full bg-sx-paper px-3 py-1.5 text-sm font-semibold text-sx-ink">
                        {fact}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 flex items-start gap-2 text-sm text-sx-ink/65">
                    <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                    {project.place}
                  </p>
                </>
              }
              action={
                <div className="mt-2">
                  <PillLink href={`/properties/${project.id}`}>View {project.short}</PillLink>
                </div>
              }
            />
          ))}
        </div>
      </PageSection>

      <PageSection labelledBy="about-completed-heading" pad="bottom">
        <div className="grid gap-6 rounded-[30px] bg-white p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:p-14">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow tone="sand">Completed</Eyebrow>
            <h2 id="about-completed-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] text-sx-ink sm:text-[2.75rem]">
              Already delivered.
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {company.completed.map((item) => (
              <li key={item.name} className="flex flex-col gap-1 rounded-[20px] bg-sx-paper p-6">
                <p className="font-heading text-2xl font-semibold tracking-[-0.015em] text-sx-ink">{item.name}</p>
                <p className="text-base text-sx-ink/70">
                  {item.note} · {item.place}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection labelledBy="about-offices-heading" pad="none">
        <SectionHeading id="about-offices-heading" eyebrow="Where to find us" title="Our offices." highlight="offices" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {contact.offices.map((office) => (
            <li key={office.name} className="flex flex-col gap-3 rounded-[20px] bg-white p-6 sm:p-7">
              <span className="w-fit rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{office.label}</span>
              <h3 className="font-heading text-xl font-semibold tracking-[-0.015em] text-sx-ink">{office.name}</h3>
              <address className="flex items-start gap-2 text-base not-italic leading-relaxed text-sx-ink/70">
                <MapPin size={18} aria-hidden="true" className="mt-1 shrink-0 text-sx-brand" />
                {office.address}
              </address>
            </li>
          ))}
        </ul>
      </PageSection>

      <CtaBand
        tone="white"
        title="Questions before you invest? Talk to us."
        highlight="Talk to us"
        body={`Call ${contact.uan}, message ${contact.whatsapp} on WhatsApp, or send an enquiry about either project.`}
        actions={[
          { label: 'Contact us', href: '/contact' },
          { label: 'Read the FAQs', href: '/faq' },
        ]}
        image={{ src: '/images/serene/nathiagali/snow-tower.webp', alt: 'Serene Heights Nathia Gali in the snow' }}
      />
    </>
  )
}
