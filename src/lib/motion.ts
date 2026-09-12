export const DEPTH_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
export const ENTRANCE_QUERY = '(prefers-reduced-motion: no-preference)'
export const MOBILE_MOTION_QUERY = '(max-width: 1023px) and (prefers-reduced-motion: no-preference)'

export const DEPTH = {
  perspective: 1400,
  far: -56,
  back: -32,
  mid: 0,
  front: 40,
  hover: 28,
} as const

export function canUseDepth() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(DEPTH_QUERY).matches
}
