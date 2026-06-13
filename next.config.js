/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['172.16.0.2', 'localhost:3000', 'localhost:3001', 'localhost:3002'],
};

module.exports = nextConfig;
