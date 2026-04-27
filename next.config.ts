import type { NextConfig } from "next";

const PRODUCTION_VERCEL_HOST = "electricity-risk-simulator.vercel.app";
const CANONICAL_BASE_URL = "https://simulator.eic-jp.org";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["chart.js", "react-chartjs-2", "lucide-react"],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
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
      // Consolidated pages: redirect deprecated slugs to surviving pages
      {
        source: "/how-to-read-business-electricity-quotation",
        destination: `${CANONICAL_BASE_URL}/how-to-read-electricity-quote`,
        permanent: true,
      },
      {
        source: "/how-to-read-business-electricity-bill",
        destination: `${CANONICAL_BASE_URL}/how-to-read-electricity-bill`,
        permanent: true,
      },
      {
        source: "/demand-charge",
        destination: `${CANONICAL_BASE_URL}/contract-demand-what-is-it`,
        permanent: true,
      },
      {
        source: "/capacity-contribution-increase-impact",
        destination: `${CANONICAL_BASE_URL}/capacity-contribution-cost-impact`,
        permanent: true,
      },
      {
        source: "/what-is-market-price-adjustment",
        destination: `${CANONICAL_BASE_URL}/market-price-adjustment`,
        permanent: true,
      },
      // GSC 404 fixes (B-17)
      {
        source: "/sme-subsidy-funding-guide",
        destination: `${CANONICAL_BASE_URL}/subsidy-sme-energy-saving-patterns`,
        permanent: true,
      },
      {
        source: "/gx-ets-regulation-timeline",
        destination: `${CANONICAL_BASE_URL}/gx-ets-impact-business-electricity`,
        permanent: true,
      },
      {
        source: "/solar-self-consumption-for-business",
        destination: `${CANONICAL_BASE_URL}/self-consumption-solar-cost-benefit`,
        permanent: true,
      },
      {
        source: "/logistics-warehouse-electricity-cost-review",
        destination: `${CANONICAL_BASE_URL}/case-study-logistics-solar-integration`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
