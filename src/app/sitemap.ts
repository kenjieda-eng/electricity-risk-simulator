import type { MetadataRoute } from "next";

const SITE_URL = "https://simulator.eic-jp.org";
const PUBLIC_PATHS = [
  "/",
  "/how-to",
  "/compare",
  "/articles",
  "/market-linked-plan",
  "/fixed-price-plan",
  "/market-linked-vs-fixed",
  "/lng-electricity-price",
  "/fuel-cost-adjustment",
  "/why-business-electricity-prices-rise",
  "/high-voltage-electricity-pricing",
  "/when-to-review-electricity-contract",
  "/how-to-compare-electricity-suppliers",
  "/renewable-energy-surcharge",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return PUBLIC_PATHS.map((path, index) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
