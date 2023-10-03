/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'salient.tailwindui.com',
      },
    ],
  },
};

module.exports = nextConfig;
