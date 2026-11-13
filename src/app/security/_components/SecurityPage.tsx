'use client'

import { FileCheck, Landmark, Lock, Scale } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { SecurityRegulation } from '@/global/components/sections/SecurityRegulation'
import { usePageMeta } from '@/global/hooks/usePageMeta'

const STATS = [
  { value: 'DFSA', label: 'Regulated in the DIFC, Dubai' },
  { value: 'CMA', label: 'Saudi Arabia FinTech Lab' },
  { value: '100%', label: 'SPV title deeds (DLD)' },
  { value: 'Tier-1', label: 'Segregated custody' },
]

const PILLARS = [
  {
    icon: FileCheck,
    title: 'Dedicated property SPVs',
    body: 'Every property is acquired through a separate Special Purpose Vehicle (SPV) registered in the DIFC. You own shares in the SPV, isolated from Serene Investors’ own corporate entity.',
  },
  {
    icon: Landmark,
    title: 'Ring-fenced client custody',
    body: 'Uninvested wallet cash and rental payouts are held in ring-fenced client accounts with tier-1 international banks, never mixed with operating capital.',
  },
  {
    icon: Scale,
    title: 'Independent RICS appraisals',
    body: 'Asset values are reviewed each quarter by independent valuers accredited by the Royal Institution of Chartered Surveyors (RICS) for impartial pricing.',
  },
  {
    icon: Lock,
    title: 'Bank-grade encryption',
    body: 'Transactions, financial data and identity documents are protected with AES-256 encryption, multi-factor authentication and round-the-clock monitoring.',
  },
]

/** /security (also served at /regulation and /safety). */
export function SecurityPage() {
  usePageMeta(
    'Serene Investors | Safety & regulation',
    'How Serene Investors is regulated and how your property shares, cash and data are protected.',
  )

  return (
    <>
      <PageHero
        eyebrow="Trust & compliance"
        title="Safety & regulation."
        highlight="regulation"
        body="Your investments are safeguarded by dual regulatory oversight, independent Special Purpose Vehicles (SPVs) and tier-1 bank custody."
        actions={[
          { label: 'Browse properties', href: '/properties' },
          { label: 'How we are regulated', href: '#security' },
        ]}
      />

      <PageSection label="Regulation at a glance" pad="bottom">
        <StatCards items={STATS} />
      </PageSection>

      <SecurityRegulation />

      <PageSection labelledBy="security-pillars">
        <SectionHeading
          id="security-pillars"
          eyebrow="Four pillars of protection"
          title="How your assets are protected."
          highlight="protected"
          align="center"
        />
        <FeatureCards items={PILLARS} columns={2} className="mt-12" />
      </PageSection>

      <CtaBand
        title="Invest with peace of mind."
        highlight="peace of mind"
        body="Start building an income-generating property portfolio with as little as AED 500 (about USD 136)."
        actions={[
          { label: 'Browse properties', href: '/properties' },
          { label: 'Create an account', href: '/signup' },
        ]}
        image={{ src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower in the afternoon sun' }}
      />
    </>
  )
}
