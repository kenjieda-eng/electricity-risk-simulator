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
  "/market-price-adjustment",
  "/why-business-electricity-prices-rise",
  "/why-business-electricity-bills-rise-suddenly",
  "/impact-of-electricity-subsidy-ending",
  "/why-market-linked-electricity-prices-rise",
  "/how-much-business-electricity-prices-increase",
  "/when-business-electricity-price-increases-start",
  "/high-voltage-electricity-pricing",
  "/when-to-review-electricity-contract",
  "/how-to-compare-electricity-suppliers",
  "/is-business-electricity-price-increase-unreasonable",
  "/renewable-energy-surcharge",
  "/business-electricity-price-trend-10-years",
  "/how-long-business-electricity-price-surge-lasts",
  "/worst-case-electricity-cost-risk",
  "/electricity-cost-risk-heatwave",
  "/electricity-cost-risk-severe-winter",
  "/electricity-cost-risk-yen-depreciation",
  "/electricity-cost-risk-geopolitics",
  "/electricity-cost-risk-disaster",
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
