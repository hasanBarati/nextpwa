
/** @type {import('next').NextConfig} */

const path = require('path')

const withPWA = require('next-pwa')({ dest: 'public', skipWaiting: false })

const nextConfig = {
  // reactStrictMode: true,
  output: 'standalone',
  // experimental: {
  //   outputStandalone: true,
  // },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.parsimap.ir',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
@use "styles/vars" as *;
@use "styles/mixins" as *;`,
  },
}

module.exports = withPWA(nextConfig)
