import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized images when deployed to static hosts (GitHub Pages etc.)
    // Comment this out when deploying to Vercel for automatic optimization
    unoptimized: true,
  },
};

export default nextConfig;
