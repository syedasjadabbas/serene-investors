import { createContext, useContext, useEffect, useMemo, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type LenisControl = {
  stop: () => void
  start: () => void
  scrollTo: (target: number | string | HTMLElement) => void
}

function scrollWindowTo(target: number | string | HTMLElement) {
  if (typeof target === 'number') {
    window.scrollTo({ top: target, left: 0, behavior: 'auto' })
    return
  }

  const node = typeof target === 'string' ? document.querySelector(target) : target
  node?.scrollIntoView({ behavior: 'auto', block: 'start' })
}

const LenisControlContext = createContext<LenisControl>({
  stop: () => undefined,
  start: () => undefined,
  scrollTo: scrollWindowTo,
})

export function useLenisControl() {
  return useContext(LenisControlContext)
}

type Props = {
  children: ReactNode
}

export function LenisProvider({ children }: Props) {
  const reduced = usePrefersReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)

  const control = useMemo<LenisControl>(
    () => ({
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
      scrollTo: (target) => {
        const lenis = lenisRef.current
        if (lenis) {
          lenis.scrollTo(target, { immediate: true })
          return
        }
        scrollWindowTo(target)
      },
    }),
    [],
  )

  useEffect(() => {
    registerGsapPlugins()

    if (reduced) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.disable())
      return
    }

    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.1,
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      gsap.ticker.lagSmoothing(500, 33)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reduced])

  return <LenisControlContext.Provider value={control}>{children}</LenisControlContext.Provider>
}
