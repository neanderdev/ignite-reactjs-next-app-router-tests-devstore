/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise this will respond with 400 Bad Request.
        // protocol: 'https',
        // hostname: '**.github.com',
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
