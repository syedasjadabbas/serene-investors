'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { cn } from '@/global/lib/cn'

type Stat = { value: string; label: string }

/**
 * Splits "AED 2,000,000" / "4×" / "12%" into prefix, number and suffix so the number can count
 * up. Values without a plain number ("24/7", "Online") are shown as they are.
 */
function parse(value: string) {
  const match = value.match(/^(\D*?)(\d[\d,]*(?:\.\d+)?)(.*)$/)
  if (!match || value.includes('/')) return null
  const [, prefix, digits, suffix] = match
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0
  return { prefix, target: Number(digits.replace(/,/g, '')), suffix, decimals, grouped: digits.includes(',') }
}

function format(n: number, decimals: number, grouped: boolean) {
  return n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: grouped })
}

function CountUp({ value, run }: { value: string; run: boolean }) {
  const parsed = parse(value)
  const [shown, setShown] = useState(parsed ? 0 : null)

  useEffect(() => {
    if (!parsed || !run) return
    const start = performance.now()
    const duration = 1400
    let frame = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      setShown(parsed.target * (1 - Math.pow(1 - t, 3)))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // parsed is derived from value; re-run only when the value or trigger changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, run])

  if (!parsed || shown === null) return <>{value}</>
  return (
    <>
      {parsed.prefix}
      {format(run ? shown : parsed.target, parsed.decimals, parsed.grouped)}
      {parsed.suffix}
    </>
  )
}

/** Row of big-number cards that count up when they scroll into view. `light` = white cards, `dark` = dark cards. */
export function StatCards({ items, tone = 'light', caption, className }: { items: Stat[]; tone?: 'light' | 'dark'; caption?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()
  const [run, setRun] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || reduced) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div ref={ref} className={className}>
      <ul className={cn('grid grid-cols-2 gap-3 sm:gap-4', items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              'flex min-h-[150px] flex-col justify-between gap-6 rounded-[20px] p-5 sm:min-h-[220px] sm:p-7',
              tone === 'dark' ? 'bg-sx-card text-white' : 'bg-white text-sx-ink',
            )}
          >
            <span className="whitespace-nowrap font-heading text-3xl font-semibold tracking-[-0.03em] sm:text-[3.25rem]">
              {/* Screen readers get the final value, not the animation. */}
              <span aria-hidden="true">
                <CountUp value={item.value} run={run} />
              </span>
              <span className="sr-only">{item.value}</span>
            </span>
            <span className={cn('text-sm sm:text-base', tone === 'dark' ? 'text-white/65' : 'text-sx-ink/60')}>{item.label}</span>
          </li>
        ))}
      </ul>
      {caption && <p className={cn('mt-3 text-xs', tone === 'dark' ? 'text-white/60' : 'text-sx-ink/60')}>{caption}</p>}
    </div>
  )
}
