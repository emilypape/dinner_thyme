/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      'www.gannett-cdn.com',
      'www.culinaryhill.com',
      'therecipecritic.com',
      'www.eatingbirdfood.com',
      'www.mycakeschool.com',
      'www.jessicagavin.com',
      'www.thespruceeats.com',
      'hips.hearstapps.com',
    ],
  },
};
