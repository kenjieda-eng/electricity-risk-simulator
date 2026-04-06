import { promises as fs } from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { articleCategories, articleList } from "../data/articles";
import { getAllRetrospectiveSlugs } from "./business-electricity-retrospective/_lib/retrospective-data";
import { EMERGENCY_SCENARIO_SLUGS } from "../lib/emergencyScenarioAnalysis";
import { OIL_SCENARIO_SLUGS } from "../lib/oilScenarioAnalysis";
import { GAS_SCENARIO_SLUGS } from "../lib/gasScenarioAnalysis";

const SITE_URL = "https://simulator.eic-jp.org";
const REQUIRED_PATHS = ["/", "/how-to", "/compare", "/articles"] as const;
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
  "/how-to": 0.95,
  "/compare": 0.95,
  "/articles": 0.95,
};

const CHANGE_FREQUENCY_BY_PATH: Partial<Record<string, MetadataRoute.Sitemap[number]["changeFrequency"]>> = {
  "/": "weekly",
  "/articles": "weekly",
};

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

    const emergencyScenarioLastmod = new Date();
    for (const slug of EMERGENCY_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/emergency-scenario-analysis/${slug}`, emergencyScenarioLastmod);
    }

    const oilScenarioLastmod = new Date();
    for (const slug of OIL_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/oil-scenario-analysis/${slug}`, oilScenarioLastmod);
    }

    const gasScenarioLastmod = new Date();
    for (const slug of GAS_SCENARIO_SLUGS) {
      upsertRouteDate(routeDateMap, `/special/gas-scenario-analysis/${slug}`, gasScenarioLastmod);
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
      changeFrequency: CHANGE_FREQUENCY_BY_PATH[route] ?? "monthly",
      priority: PRIORITY_BY_PATH[route] ?? 0.8,
    }));
  } catch {
    const fallbackPaths = [
      ...REQUIRED_PATHS,
      "/business-electricity-retrospective",
      "/special/emergency-scenario-analysis",
      "/special/oil-scenario-analysis",
      "/special/gas-scenario-analysis",
      ...EMERGENCY_SCENARIO_SLUGS.map((slug) => `/special/emergency-scenario-analysis/${slug}`),
      ...OIL_SCENARIO_SLUGS.map((slug) => `/special/oil-scenario-analysis/${slug}`),
      ...GAS_SCENARIO_SLUGS.map((slug) => `/special/gas-scenario-analysis/${slug}`),
    ];
    const uniquePaths = [...new Set(fallbackPaths)];
    const now = new Date();
    return uniquePaths.map((route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: CHANGE_FREQUENCY_BY_PATH[route] ?? "monthly",
      priority: PRIORITY_BY_PATH[route] ?? 0.8,
    }));
  }
}
