'use client'

import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'

const INK = '#0e100f'
const PAPER = '#f3f3ef'

/**
 * One background behind the whole home page. As the section marked `data-bg-shift` scrolls up
 * to the middle of the screen, the background fades from dark to paper, and any text marked
 * `data-shift-text` fades from white to ink with it, so the dark top flows into the light
 * bottom instead of meeting it at an edge. The bottom is rounded where it sits on the footer.
 */
export function HomeCanvas({ dark, light }: { dark: ReactNode; light: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = ref.current
    const trigger = root?.querySelector('[data-bg-shift]')
    if (!root || !trigger) return
    const texts = root.querySelectorAll('[data-shift-text]')

    if (reduced) {
      gsap.set(root, { backgroundColor: PAPER })
      gsap.set(texts, { color: INK })
      return
    }

    registerGsapPlugins()
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger, start: 'top 85%', end: 'top 30%', scrub: true },
      })
      tl.fromTo(root, { backgroundColor: INK }, { backgroundColor: PAPER, ease: 'none' }, 0)
      tl.fromTo(texts, { color: '#ffffff' }, { color: INK, ease: 'none' }, 0)
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <div ref={ref} className="relative z-[1] -mb-10 rounded-b-[40px] bg-sx-ink">
      {dark}
      {light}
    </div>
  )
}
