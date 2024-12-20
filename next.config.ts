import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dpbducyqwhi6dzfk.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Add Unsplash to the allowed hostnames
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during the build process
  },
};

export default nextConfig;
