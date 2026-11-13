import { PageHero } from '@/global/components/page/PageHero'
import { howItWorksIntro } from '@/global/data/how-it-works'
import { withBase } from '@/global/lib/asset'

export function HowHero() {
  return (
    <PageHero
      eyebrow="Illustrative sample"
      title="How it works, in four steps."
      highlight="four steps"
      body="Choose a property or a fund, pick a sample amount, follow your holdings and view sample distributions. Every figure on this page is illustrative."
      actions={[
        { label: 'See the steps', href: '#how-steps' },
        { label: 'Get started', href: '/get-started' },
      ]}
      media={
        <img
          src={withBase(howItWorksIntro.image.src)}
          alt={howItWorksIntro.image.alt}
          width={2000}
          height={1200}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full bg-sx-sand object-cover sm:aspect-[16/7]"
        />
      }
    />
  )
}
