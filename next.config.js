/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['yfwskzwdtvtzjivqbhmp.supabase.co'], // Add your Supabase storage domain
  },
  experimental: {
    appDir: true
  },
  distDir: '.next',
  output: 'standalone'
}

module.exports = nextConfig
