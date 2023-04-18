/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["api-demowebsite.cdktcnqn.edu.vn"],
  },
};

module.exports = nextConfig;
