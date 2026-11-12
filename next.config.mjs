// Serene Investors lives inside the Serene Heights Group site at /serene-investors (Next.js Multi-Zones):
// sereneheightsgroup.com/serene-investors/* is rewritten by the group site to this deployment.
// Set NEXT_PUBLIC_BASE_PATH="" to run at the root instead. See src/lib/asset.ts for paths Next
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
    return BASE_PATH ? [{ source: '/', destination: BASE_PATH, basePath: false, permanent: false }] : []
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
