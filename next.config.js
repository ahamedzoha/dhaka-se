/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      "tailwindui.com",
      "cdn.tailwindui.com",
      "unsplash.com",
      "images.unsplash.com",
    ],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
