// Serene Investors is served under a base path (/serene-investors) so it can live inside the
// Serene Heights Group site (sereneheightsgroup.com/serene-investors). Next.js prefixes <Link>,
// the router and its own assets automatically, but not plain <img> sources, plain <a> links or
// fetch() URLs — those go through withBase().

/** Base path baked in at build time by next.config.mjs (e.g. "/serene-investors", or "" at the root). */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

/** Prefix a site-relative path ("/images/…", "/api/…") with the base path; absolute URLs pass through. */
export function withBase<T extends string | null | undefined>(path: T): T {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) return path
  return `${BASE_PATH}${path}` as T
}
