// next.config.ts  ← BARA i gh-pages-export-grenen
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // Aktiverar statisk export
  basePath: '/Indesign0a0info/chans',     // Byt ut REPO_NAMN mot GitHub-reponamn
  assetPrefix: '/Indesign0a0info/chans/', // Samma som basePath
  trailingSlash: true,        // Rekommenderat för GitHub Pages
  images: {
    unoptimized: true,        // Krävs för statisk export
  },
  reactStrictMode: true,
}

export default nextConfig