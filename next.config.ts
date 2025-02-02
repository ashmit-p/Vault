import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB"
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "cloud.appwrite.io"
      }
    ]
  }
};

export default nextConfig;
