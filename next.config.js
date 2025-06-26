/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: '/BengalSub-web/',
  basePath: '/BengalSub-web',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.0.103:3000'
  ],
};

module.exports = nextConfig; 