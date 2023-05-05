/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXTAUTH_URL: "https://fumeli.vercel.missionvideo",
  },
  images: {
    domains: ["api-demowebsite.cdktcnqn.edu.vn"],
  },
};

module.exports = nextConfig;
