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
  env: {
    CLERK_FRONTEND_API: process.env.CLERK_FRONTEND_API, // Add Clerk's frontend API
    CLERK_API_KEY: process.env.CLERK_API_KEY, // Add Clerk's API key
    // Optionally, add more environment variables if necessary
  },
};

export default nextConfig;
