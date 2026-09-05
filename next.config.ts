import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  serverExternalPackages: ["googleapis", "google-auth-library"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
}

export default nextConfig
