/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
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