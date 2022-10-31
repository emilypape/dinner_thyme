/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ['www.gannett-cdn.com', 'www.culinaryhill.com'],
  },
};
