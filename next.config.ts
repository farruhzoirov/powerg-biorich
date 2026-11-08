import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized images when deployed to static hosts (GitHub Pages etc.)
    // Comment this out when deploying to Vercel for automatic optimization
    unoptimized: true,
    qualities: [75, 85, 92],
  },
};

export default nextConfig;
