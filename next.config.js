/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gannett-cdn.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
