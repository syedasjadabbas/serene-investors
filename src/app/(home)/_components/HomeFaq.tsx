import Link from 'next/link'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { homeFaq } from '../_lib/home'

export function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="px-4 sm:px-8">
      <div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 id="home-faq-heading" className="font-heading text-4xl font-bold tracking-[-0.02em] text-sx-ink">
            {homeFaq.heading}
          </h2>
          <p className="mt-2 text-base text-sx-ink/60">{homeFaq.body}</p>
          <Link href={homeFaq.more.href} className="mt-6 inline-block text-sm font-semibold text-sx-forest underline underline-offset-4">
            {homeFaq.more.label}
          </Link>
        </div>
        <FaqAccordion items={homeFaq.items} />
      </div>
    </section>
  )
}
