import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // The AI Integration lead magnet moved to its own site, Foothold Systems.
        source: "/ai-integration",
        destination: "https://footholdsystems.com/guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
