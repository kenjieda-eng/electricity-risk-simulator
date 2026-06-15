import { promises as fs } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { articleCategories, articleList } from "../data/articles";
import { getAllRetrospectiveSlugs } from "./business-electricity-retrospective/_lib/retrospective-data";
import { EMERGENCY_SCENARIO_SLUGS, EMERGENCY_SERIES_LAST_MODIFIED } from "../lib/emergencyScenarioAnalysis";
import { OIL_SCENARIO_SLUGS, OIL_SERIES_LAST_MODIFIED } from "../lib/oilScenarioAnalysis";
import { GAS_SCENARIO_SLUGS, GAS_SERIES_LAST_MODIFIED } from "../lib/gasScenarioAnalysis";
import { MATERIALS_SCENARIO_SLUGS, MATERIALS_SERIES_LAST_MODIFIED } from "../lib/materialsPackagingScenarioAnalysis";
import { FOOD_SCENARIO_SLUGS, FOOD_SERIES_LAST_MODIFIED } from "../lib/foodProcurementScenarioAnalysis";
import { FX_DOUBLE_EFFECT_SLUGS, FX_DOUBLE_EFFECT_SERIES_LAST_MODIFIED } from "../lib/fxDoubleEffectScenarioAnalysis";
import { INDUSTRY_MIDDLE_CATEGORIES, INDUSTRY_SERIES_LAST_MODIFIED } from "../lib/articleIndustryCategories";
import { getOfficePublicIndustrySlugs } from "../lib/industryOfficePublicArticles";
import { getCommercialIndustrySlugs } from "../lib/industryCommercialArticles";
import { getHotelLeisureIndustrySlugs } from "../lib/industryHotelLeisureArticles";
import { getMedicalWelfareIndustrySlugs } from "../lib/industryMedicalWelfareArticles";
import { getManufacturingIndustrySlugs } from "../lib/industryManufacturingArticles";
import { getLogisticsInfrastructureIndustrySlugs } from "../lib/industryLogisticsInfrastructureArticles";
import { getITTechnologyIndustrySlugs } from "../lib/industryITTechnologyArticles";
import { getAgriculturePrimaryIndustrySlugs } from "../lib/industryAgriculturePrimaryArticles";

const SITE_URL = "https://simulator.eic-jp.org";
const REQUIRED_PATHS = ["/", "/simulate", "/how-to", "/compare", "/articles"] as const;
const APP_DIR = path.join(process.cwd(), "src", "app");
const ARTICLES_DATA_FILE = path.join(process.cwd(), "src", "data", "articles.ts");
const CATEGORY_PAGE_FILE = path.join(APP_DIR, "articles", "[categorySlug]", "page.tsx");
const RETROSPECTIVE_DYNAMIC_PAGE_FILE = path.join(APP_DIR, "business-electricity-retrospective", "[slug]", "page.tsx");
const RETROSPECTIVE_DATA_FILE = path.join(
  APP_DIR,
  "business-electricity-retrospective",
  "_lib",
  "retrospective-data.ts",
);

const PRIORITY_BY_PATH: Record<string, number> = {
  "/": 1,
  "/simulate": 0.95,
  "/how-to": 0.95,
  "/compare": 0.95,
  "/articles": 0.95,
  "/business-electricity-cost-reduction-review-points": 0.95,
};

const CHANGE_FREQUENCY_BY_PATH: Partial<Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]>> = {
  "/": "weekly",
  "/articles": "weekly",
  "/business-electricity-cost-reduction-review-points": "weekly",
};

// 2026-06-14 第4回計測: 未登録×表示あり 上位40本に刷新（旧B-38a 25本を置換）
// 「6/14 GSCで未登録（クロール済-未登録）かつ表示インプレッションがある」ページ。
// 全40本の実在を確認済み（39本は src/app/<slug>/page.tsx、2026-03 は静的ディレクトリページ）。404ゼロ。
// コメント末尾の imp=6/14 表示インプレッション数（表示降順）。
const NOT_INDEXED_URLS_TO_PROMOTE = new Set<string>([
  "/shinagawa-ku-business-electricity-cost", // imp123
  "/fukushima-business-electricity-cost", // imp119
  "/capacity-contribution-impact-on-business", // imp113
  "/kagawa-business-electricity-cost", // imp98
  "/warehouse-battery-considerations", // imp94
  "/subsidy-natural-refrigerant-freezer", // imp76
  "/subsidy-ev-charging-infrastructure", // imp72
  "/demand-monitoring-device-selection", // imp72
  "/region-chugoku-business-electricity", // imp71
  "/ibaraki-business-electricity-cost", // imp70
  "/reduce-high-voltage-basic-charge", // imp67
  "/subsidy-agriculture-primary-strategy", // imp63
  "/price-revision-clause-reading", // imp50
  "/akita-business-electricity-cost", // imp49
  "/datacenter-summer-cooling-strategy", // imp48
  "/subsidy-cogeneration-introduction", // imp43
  "/business-electricity-retrospective/2026-03", // imp38（静的ページ）
  "/saitama-business-electricity-cost", // imp38
  "/subsidy-demand-response-incentive", // imp37
  "/nagano-business-electricity-cost", // imp32
  "/subsidy-insulation-renovation", // imp29
  "/chiba-business-electricity-cost", // imp29
  "/iwate-business-electricity-cost", // imp26
  "/tokyo-business-electricity-cost", // imp25
  "/osaka-business-electricity-cost", // imp25
  "/low-voltage-review-essentials", // imp24
  "/wakayama-business-electricity-cost", // imp22
  "/electricity-market-liberalization-impact", // imp21
  "/solar-suited-corporations", // imp20
  "/toyama-business-electricity-cost", // imp19
  "/metal-processing-electricity-cost-review", // imp18
  "/hyogo-business-electricity-cost", // imp18
  "/frozen-food-electricity-cost-review", // imp17
  "/yamanashi-business-electricity-cost", // imp17
  "/transportation-electricity-cost-review", // imp17
  "/kyoto-business-electricity-cost", // imp15
  "/okinawa-business-electricity-cost", // imp14
  "/gifu-business-electricity-cost", // imp14
  "/electricity-cost-seasonal-pattern", // imp14
  "/mie-business-electricity-cost", // imp13
]);

const PROMOTED_PRIORITY = 0.9;
const PROMOTED_CHANGE_FREQUENCY: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

function resolvePriority(route: string): number {
  if (PRIORITY_BY_PATH[route] !== undefined) {
    return PRIORITY_BY_PATH[route];
  }
  if (NOT_INDEXED_URLS_TO_PROMOTE.has(route)) {
    return PROMOTED_PRIORITY;
  }
  return 0.8;
}

function resolveChangeFrequency(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (CHANGE_FREQUENCY_BY_PATH[route] !== undefined) {
    return CHANGE_FREQUENCY_BY_PATH[route];
  }
  if (NOT_INDEXED_URLS_TO_PROMOTE.has(route)) {
    return PROMOTED_CHANGE_FREQUENCY;
  }
  return "monthly";
}

type PageRoute = {
  route: string;
  lastModified: Date;
};

const normalizeRoutePath = (segments: string[]) => (segments.length === 0 ? "/" : `/${segments.join("/")}`);

const toPosixPath = (targetPath: string) => targetPath.split(path.sep).join("/");

const isDynamicSegment = (segment: string) => segment.startsWith("[") && segment.endsWith("]");
const isRouteGroupSegment = (segment: string) => segment.startsWith("(") && segment.endsWith(")");
const isPrivateSegment = (segment: string) => segment.startsWith("_");

const maxDate = (a: Date, b: Date) => (a.getTime() >= b.getTime() ? a : b);

// 動的シリーズの lastmod を「実際の最終更新日（JST）」の固定 Date に変換するヘルパー。
// 毎ビルド new Date() で全特集を更新済みに見せる過剰な鮮度シグナルを排除する。
const seriesLastmod = (isoDate: string) => new Date(`${isoDate}T00:00:00+09:00`);

async function collectStaticPageRoutes(dirPath: string): Promise<PageRoute[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const results: PageRoute[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "admin" || entry.name === "api" || isPrivateSegment(entry.name)) {
        continue;
      }
      results.push(...(await collectStaticPageRoutes(fullPath)));
      continue;
    }

    if (!entry.isFile() || entry.name !== "page.tsx") {
      continue;
    }

    const relativeDir = path.relative(APP_DIR, path.dirname(fullPath));
    const rawSegments = relativeDir === "" ? [] : toPosixPath(relativeDir).split("/");
    const publicSegments: string[] = [];
    let hasDynamicSegment = false;

    for (const segment of rawSegments) {
      if (isRouteGroupSegment(segment)) {
        continue;
      }
      if (isDynamicSegment(segment)) {
        hasDynamicSegment = true;
        break;
      }
      publicSegments.push(segment);
    }

    if (hasDynamicSegment) {
      continue;
    }

    const stat = await fs.stat(fullPath);
    results.push({
      route: normalizeRoutePath(publicSegments),
      lastModified: stat.mtime,
    });
  }

  return results;
}

async function getFileMtime(targetPath: string): Promise<Date> {
  const stat = await fs.stat(targetPath);
  return stat.mtime;
}

function upsertRouteDate(routeDateMap: Map<string, Date>, route: string, candidate: Date) {
  const current = routeDateMap.get(route);
  if (!current) {
    routeDateMap.set(route, candidate);
    return;
  }
  routeDateMap.set(route, maxDate(current, candidate));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const staticPageRoutes = await collectStaticPageRoutes(APP_DIR);
    const routeDateMap = new Map<string, Date>();

    for (const pageRoute of staticPageRoutes) {
      if (pageRoute.route.startsWith("/admin")) {
        continue;
      }
      upsertRouteDate(routeDateMap, pageRoute.route, pageRoute.lastModified);
    }

    const articlesDataMtime = await getFileMtime(ARTICLES_DATA_FILE);
    const categoryPageMtime = await getFileMtime(CATEGORY_PAGE_FILE);

    for (const article of articleList) {
      const articleRoute = article.slug.startsWith("/") ? article.slug : `/${article.slug}`;
      const publishedAt = new Date(`${article.publishedAt}T00:00:00+09:00`);
      upsertRouteDate(routeDateMap, articleRoute, publishedAt);
    }

    for (const category of articleCategories) {
      const categoryRoute = `/articles/${category.slug}`;
      upsertRouteDate(routeDateMap, categoryRoute, maxDate(articlesDataMtime, categoryPageMtime));
    }

    const retrospectivePageMtime = await getFileMtime(RETROSPECTIVE_DYNAMIC_PAGE_FILE);
    const retrospectiveDataMtime = await getFileMtime(RETROSPECTIVE_DATA_FILE);
    const retrospectiveLastmod = maxDate(retrospectivePageMtime, retrospectiveDataMtime);
    for (const retrospectiveSlug of getAllRetrospectiveSlugs()) {
      upsertRouteDate(routeDateMap, `/business-electricity-retrospective/${retrospectiveSlug}`, retrospectiveLastmod);
    }

    const emergencyScenarioLastmod = seriesLastmod(EMERGENCY_SERIES_LAST_MODIFIED);
    for (const slug of EMERGENCY_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/emergency-scenario-analysis/${slug}`, emergencyScenarioLastmod);
    }

    const oilScenarioLastmod = seriesLastmod(OIL_SERIES_LAST_MODIFIED);
    for (const slug of OIL_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/oil-scenario-analysis/${slug}`, oilScenarioLastmod);
    }

    const gasScenarioLastmod = seriesLastmod(GAS_SERIES_LAST_MODIFIED);
    for (const slug of GAS_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/gas-scenario-analysis/${slug}`, gasScenarioLastmod);
    }

    const materialsScenarioLastmod = seriesLastmod(MATERIALS_SERIES_LAST_MODIFIED);
    for (const slug of MATERIALS_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/materials-packaging-scenario-analysis/${slug}`, materialsScenarioLastmod);
    }

    const foodScenarioLastmod = seriesLastmod(FOOD_SERIES_LAST_MODIFIED);
    for (const slug of FOOD_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/food-procurement-scenario-analysis/${slug}`, foodScenarioLastmod);
    }

    const fxDoubleEffectLastmod = seriesLastmod(FX_DOUBLE_EFFECT_SERIES_LAST_MODIFIED);
    for (const slug of FX_DOUBLE_EFFECT_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/fx-double-effect-scenario-analysis/${slug}`, fxDoubleEffectLastmod);
    }

    // --- Industry category pages ---
    const industryLastmod = seriesLastmod(INDUSTRY_SERIES_LAST_MODIFIED);

    // Middle-level category pages: /articles/by-industry/[middle]
    for (const category of INDUSTRY_MIDDLE_CATEGORIES) {
      upsertRouteDate(routeDateMap, `/articles/by-industry/${category.slug}`, industryLastmod);
    }

    // Individual industry pages: /articles/by-industry/[middle]/[industry]
    const industrySlugsByMiddle: Record<string, string[]> = {
      "office-public": getOfficePublicIndustrySlugs(),
      "commercial": getCommercialIndustrySlugs(),
      "hotel-leisure": getHotelLeisureIndustrySlugs(),
      "medical-welfare": getMedicalWelfareIndustrySlugs(),
      "manufacturing": getManufacturingIndustrySlugs(),
      "logistics-infrastructure": getLogisticsInfrastructureIndustrySlugs(),
      "it-technology": getITTechnologyIndustrySlugs(),
      "agriculture-primary": getAgriculturePrimaryIndustrySlugs(),
    };

    for (const [middle, slugs] of Object.entries(industrySlugsByMiddle)) {
      for (const industrySlug of slugs) {
        upsertRouteDate(routeDateMap, `/articles/by-industry/${middle}/${industrySlug}`, industryLastmod);
      }
    }

    for (const requiredPath of REQUIRED_PATHS) {
      if (!routeDateMap.has(requiredPath)) {
        routeDateMap.set(requiredPath, new Date());
      }
    }

    const allRoutes = [...routeDateMap.keys()]
      .filter((route) => !route.startsWith("/admin"))
      .sort((a, b) => a.localeCompare(b));

    return allRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: routeDateMap.get(route),
      changeFrequency: resolveChangeFrequency(route),
      priority: resolvePriority(route),
    }));
  } catch {
    const fallbackPaths = [
      ...REQUIRED_PATHS,
      "/business-electricity-retrospective",
      "/special/emergency-scenario-analysis",
      "/special/oil-scenario-analysis",
      "/special/gas-scenario-analysis",
      "/special/materials-packaging-scenario-analysis",
      "/special/food-procurement-scenario-analysis",
      "/special/fx-double-effect-scenario-analysis",
      ...EMERGENCY_SCENARIO_SLUGS.map((slug) => `/special/emergency-scenario-analysis/${slug}`),
      ...OIL_SCENARIO_SLUGS.map((slug) => `/special/oil-scenario-analysis/${slug}`),
      ...GAS_SCENARIO_SLUGS.map((slug) => `/special/gas-scenario-analysis/${slug}`),
      ...MATERIALS_SCENARIO_SLUGS.map((slug) => `/special/materials-packaging-scenario-analysis/${slug}`),
      ...FOOD_SCENARIO_SLUGS.map((slug) => `/special/food-procurement-scenario-analysis/${slug}`),
      ...FX_DOUBLE_EFFECT_SLUGS.map((slug) => `/special/fx-double-effect-scenario-analysis/${slug}`),
      "/articles/by-industry",
      ...INDUSTRY_MIDDLE_CATEGORIES.map((c) => `/articles/by-industry/${c.slug}`),
      ...Object.entries({
        "office-public": getOfficePublicIndustrySlugs(),
        "commercial": getCommercialIndustrySlugs(),
        "hotel-leisure": getHotelLeisureIndustrySlugs(),
        "medical-welfare": getMedicalWelfareIndustrySlugs(),
        "manufacturing": getManufacturingIndustrySlugs(),
        "logistics-infrastructure": getLogisticsInfrastructureIndustrySlugs(),
        "it-technology": getITTechnologyIndustrySlugs(),
        "agriculture-primary": getAgriculturePrimaryIndustrySlugs(),
      }).flatMap(([middle, slugs]) => slugs.map((s) => `/articles/by-industry/${middle}/${s}`)),
    ];
    const uniquePaths = [...new Set(fallbackPaths)];
    const now = new Date();
    return uniquePaths.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: resolveChangeFrequency(route),
      priority: resolvePriority(route),
    }));
  }
}
