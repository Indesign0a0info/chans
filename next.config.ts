//// next.config.ts  ← BARA i gh-pages-export-grenen
//import type { NextConfig } from 'next'

// next.config.ts
//const isProd = process.env.NODE_ENV === 'production';
//
//const nextConfig: NextConfig = {
//  output: 'export',
//  basePath: isProd ? '/chans' : '',
//  assetPrefix: isProd ? '/chans/' : '',
//  trailingSlash: true,
//  images: { unoptimized: true },
//  typescript: { ignoreBuildErrors: true },
//  reactStrictMode: true,
//}



// next.config.ts
//const isProd = process.env.NODE_ENV === 'production';
//
//const nextConfig: NextConfig = {
//  output: 'export',
//  basePath: isProd ? '/chans' : '',
//  assetPrefix: isProd ? '/chans/' : '',
//  trailingSlash: true,
//  images: { unoptimized: true },
//    typescript: {
//      ignoreBuildErrors: true,  // ← tillfälligt
//    },
//  reactStrictMode: true,
//}



//const nextConfig: NextConfig = {
//  output: 'export',           // Aktiverar statisk export
//  basePath: '/chans',     // Byt ut REPO_NAMN mot GitHub-reponamn
//  assetPrefix: '/chans/', // Samma som basePath
//  trailingSlash: true,        // Rekommenderat för GitHub Pages
//  images: {
//    unoptimized: true,        // Krävs för statisk export
//  },
//  typescript: {
//    ignoreBuildErrors: true,  // ← tillfälligt
//  },
//  reactStrictMode: true,
//  turbopack: {
//    root: '.',  // ← lägg till denna
//  },
//}
//
//export default nextConfig



import type { NextConfig } from 'next'
import path from 'path'

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/chans' : '',
  assetPrefix: isProd ? '/chans/' : '',
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  reactStrictMode: true,
}

export default nextConfig