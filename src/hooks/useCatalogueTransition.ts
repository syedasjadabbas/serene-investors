import { useLayoutEffect, useRef, useState, type RefObject } from 'react'
import type { Property } from '@/types'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

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
  latestRef.current = properties

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    const next = latestRef.current
    if (idsKey(next) === idsKey(rendered) && !firstRef.current) return

    registerGsapPlugins()

    if (reduced) {
      firstRef.current = false
      incomingRef.current = false
      setRendered(next)
      return
    }

    const cards = root.querySelectorAll<HTMLElement>('[data-catalogue-card]')

    if (firstRef.current) {
      firstRef.current = false
      incomingRef.current = false
      if (cards.length === 0) return
      const tween = gsap.fromTo(
        cards,
        { opacity: 0, y: 22, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
          overwrite: 'auto',
        },
      )
      return () => {
        tween.kill()
      }
    }

    if (cards.length === 0) {
      incomingRef.current = true
      setRendered(next)
      return
    }

    const tween = gsap.to(cards, {
      opacity: 0,
      y: 14,
      scale: 0.985,
      duration: 0.2,
      stagger: 0.02,
      ease: 'power2.out',
      overwrite: 'auto',
      onComplete: () => {
        incomingRef.current = true
        setRendered(latestRef.current)
      },
    })
    return () => {
      tween.kill()
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
      { opacity: 0, y: 16, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.38,
        stagger: 0.045,
        ease: 'power3.out',
        overwrite: 'auto',
      },
    )
    return () => {
      tween.kill()
    }
  }, [reduced, rendered, rootRef])

  return rendered
}
