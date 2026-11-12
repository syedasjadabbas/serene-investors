import { useLayoutEffect, useRef, useState, type RefObject } from 'react'
import type { Property } from '@/global/types/property'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'

function idsKey(items: Property[]) {
  return items.map((item) => item.id).join('|')
}

export function useCatalogueTransition(
  rootRef: RefObject<HTMLElement | null>,
  properties: Property[],
) {
  const reduced = usePrefersReducedMotion()
  const [rendered, setRendered] = useState(properties)
  const latestRef = useRef(properties)
  const firstRef = useRef(true)
  const incomingRef = useRef(false)
  useLayoutEffect(() => {
    latestRef.current = properties
    const root = rootRef.current
    if (!root) return

    const next = latestRef.current
    const cards = root.querySelectorAll<HTMLElement>('[data-catalogue-card]')

    // On initial mount, ensure all cards are visible immediately at full opacity without delay
    if (firstRef.current) {
      firstRef.current = false
      incomingRef.current = false
      if (cards.length > 0) {
        gsap.set(cards, { clearProps: 'all' })
      }
      return
    }

    if (idsKey(next) === idsKey(rendered)) return

    registerGsapPlugins()

    if (reduced || cards.length === 0) {
      incomingRef.current = true
      setRendered(next)
      return
    }

    const tween = gsap.to(cards, {
      opacity: 0,
      y: 10,
      scale: 0.99,
      duration: 0.16,
      stagger: 0.015,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => {
        incomingRef.current = true
        setRendered(latestRef.current)
      },
    })

    return () => {
      tween.kill()
      gsap.set(cards, { clearProps: 'all' })
    }
  }, [properties, reduced, rendered, rootRef])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced || !incomingRef.current) return
    incomingRef.current = false
    const cards = root.querySelectorAll<HTMLElement>('[data-catalogue-card]')
    if (cards.length === 0) return

    const tween = gsap.fromTo(
      cards,
      { opacity: 0, y: 14, scale: 0.985 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.32,
        stagger: 0.03,
        ease: 'power3.out',
        overwrite: 'auto',
        clearProps: 'all',
      },
    )

    return () => {
      tween.kill()
      gsap.set(cards, { clearProps: 'all' })
    }
  }, [reduced, rendered, rootRef])

  return rendered
}
