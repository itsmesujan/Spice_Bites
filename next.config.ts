import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spice-bites-hirabari.com",
        pathname: "/storage/images/**",
      },
    ],
  },
};

export default nextConfig;
