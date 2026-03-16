import type { NextConfig } from "next";

const PRODUCTION_VERCEL_HOST = "electricity-risk-simulator.vercel.app";
const CANONICAL_BASE_URL = "https://simulator.eic-jp.org";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: PRODUCTION_VERCEL_HOST,
          },
        ],
        destination: `${CANONICAL_BASE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
