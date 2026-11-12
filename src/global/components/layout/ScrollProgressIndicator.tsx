'use client'

import { useEffect, useRef } from 'react'

export function ScrollProgressIndicator() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frameId: number

    function update() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) {
        if (barRef.current) barRef.current.style.transform = 'scaleX(0)'
        return
      }
      const currentScroll = window.scrollY
      const progress = Math.min(1, Math.max(0, currentScroll / totalHeight))
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`
      }
    }

    function onScroll() {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100001] h-[2.5px] bg-transparent"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-[#00A663] via-[#00c48c] to-[#25c974] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
