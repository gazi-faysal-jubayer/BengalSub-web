/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  assetPrefix: '/BengalSub-web/',
  basePath: '/BengalSub-web',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
};

module.exports = nextConfig; 