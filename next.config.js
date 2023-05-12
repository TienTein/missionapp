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
  env: {
    apiHost: "https://api.fumeli.net/api/",
  },
};

module.exports = nextConfig;
