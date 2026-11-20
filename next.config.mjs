// Serene Investors lives inside the Serene Heights Group site at /serene-investors (Next.js Multi-Zones):
// sereneheightsgroup.com/serene-investors/* is rewritten by the group site to this deployment.
// Set NEXT_PUBLIC_BASE_PATH="" to run at the root instead. See src/global/lib/asset.ts for paths Next
// does not prefix on its own (plain <img>, plain <a>, fetch).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '/serene-investors'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: BASE_PATH || undefined,
  // Same value for client code so image, link and API paths match the base path.
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
  // On this app's own domain, the bare root forwards to the base path (the group site owns "/").
  async redirects() {
    // Pages that moved when the site switched to real Serene Heights data. Old links keep working.
    const moved = [
      { source: '/funds', destination: '/smart-property', permanent: true },
      { source: '/funds/:slug*', destination: '/smart-property', permanent: true },
      { source: '/golden-visa', destination: '/resort', permanent: true },
      { source: '/rewards', destination: '/owner-benefits', permanent: true },
      { source: '/market-reports', destination: '/progress', permanent: true },
    ]
    const root = BASE_PATH ? [{ source: '/', destination: BASE_PATH, basePath: false, permanent: false }] : []
    return [...root, ...moved]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
