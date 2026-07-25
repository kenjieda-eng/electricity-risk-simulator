#!/usr/bin/env node
/**
 * 全サイト内部リンク健全性監査 (check-links.mjs)
 * ============================================================================
 * 実在ルート集合を src/app/sitemap.ts と「同一のデータソース」から構築し、
 * src/ 配下の全 .ts/.tsx から内部href（属性形 `href="/..."` と オブジェクト形
 * `href: "/..."` の両方）を抽出して照合、解決しない内部リンク（404候補）を報告する。
 *
 * 旧版（〜2026-07）の欠陥を是正:
 *   - href抽出が属性形のみで `{ href: "/..." }` オブジェクト形を取りこぼし（662件 → 実 ~19,800件）
 *   - next.config.ts の redirects() を読まず 301 元（例: /logistics-warehouse-electricity-cost-review）を偽陽性判定
 *   - 特集6系統・by-industry 個別ページを網羅できていない
 *
 * 実在ルート集合の構成（sitemap.ts と同期）:
 *   - src/app/ 静的ページ（再帰walk。admin/api/_private/[dynamic]/(group) は除外）
 *   - articleList のslug（/{slug}）/ articleCategories のカテゴリハブ（/articles/{slug}）
 *   - 月次振り返り（getAllRetrospectiveSlugs）＋ハブ
 *   - 特集6系統（emergency/oil/gas/materials/food/fx）の各 SLUGS ＋ハブ
 *   - by-industry 中分類（INDUSTRY_MIDDLE_CATEGORIES）＋個別8系統の getter
 *   - REQUIRED_PATHS（/・/simulate・/how-to・/compare・/articles）
 *   - route handler（/feed.xml）・/sitemap.xml・/robots.txt
 *   - next.config.ts redirects() の source（ワイルドカード /:path* を除く。301先も有効リンク）
 *   - public/ 配下アセット（/ogp-default.png 等）
 *
 * 実行:
 *   node scripts/check-links.mjs           # サマリ＋404候補一覧、broken>0 で exit 1
 *   node scripts/check-links.mjs --json    # 機械可読JSONを stdout に出力
 *   node scripts/check-links.mjs --quiet   # 破損のみ表示（OK行を抑制）
 *
 * 終了コード: 0 = 404候補ゼロ / 1 = 404候補あり / 2 = 設定エラー（データソース読込失敗）
 *
 * 依存: Node 24+（TS type-stripping が既定で有効なため .ts を直接 import 可能）
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const SRC_DIR = path.join(ROOT, "src");
const PUBLIC_DIR = path.join(ROOT, "public");
const NEXT_CONFIG = path.join(ROOT, "next.config.ts");

const FLAG_JSON = process.argv.includes("--json");
const FLAG_QUIET = process.argv.includes("--quiet");

const REQUIRED_PATHS = ["/", "/simulate", "/how-to", "/compare", "/articles"];

const isDynamicSegment = (s) => s.startsWith("[") && s.endsWith("]");
const isRouteGroupSegment = (s) => s.startsWith("(") && s.endsWith(")");
const isPrivateSegment = (s) => s.startsWith("_");

/** src/app を再帰walkして静的ルートを収集（sitemap.ts の collectStaticPageRoutes と同ロジック）。 */
async function collectStaticRoutes(dir, segments = []) {
  const routes = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "admin" || entry.name === "api" || isPrivateSegment(entry.name)) continue;
      if (isDynamicSegment(entry.name)) continue; // 動的セグメントは実slug側で解決
      const nextSegments = isRouteGroupSegment(entry.name) ? segments : [...segments, entry.name];
      routes.push(...(await collectStaticRoutes(full, nextSegments)));
    } else if (entry.isFile() && entry.name === "page.tsx") {
      routes.push(segments.length === 0 ? "/" : `/${segments.join("/")}`);
    }
  }
  return routes;
}

/** public/ を再帰walkして /相対パス のアセット集合を返す。 */
async function collectPublicAssets(dir, rel = "") {
  const assets = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return assets;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      assets.push(...(await collectPublicAssets(full, relPath)));
    } else if (entry.isFile()) {
      assets.push(`/${relPath.split(path.sep).join("/")}`);
    }
  }
  return assets;
}

/** next.config.ts の redirects() source を抽出（ワイルドカード /:path* を除外）。 */
async function collectRedirectSources() {
  const sources = [];
  try {
    const raw = await fs.readFile(NEXT_CONFIG, "utf8");
    for (const m of raw.matchAll(/source:\s*"([^"]+)"/g)) {
      const s = m[1];
      if (s.includes(":") || s.includes("*")) continue; // /:path* 等のパターンは除外
      sources.push(s);
    }
  } catch {}
  return sources;
}

/** TSデータソースを動的import（sitemap.ts と同一）。失敗時は exit 2。 */
async function loadRouteData() {
  const imp = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);
  try {
    const [
      articles,
      retro,
      emergency,
      oil,
      gas,
      materials,
      food,
      fx,
      industryCats,
      officePublic,
      commercial,
      hotelLeisure,
      medicalWelfare,
      manufacturing,
      logistics,
      itTech,
      agriculture,
    ] = await Promise.all([
      imp("src/data/articles.ts"),
      imp("src/app/business-electricity-retrospective/_lib/retrospective-data.ts"),
      imp("src/lib/emergencyScenarioAnalysis.ts"),
      imp("src/lib/oilScenarioAnalysis.ts"),
      imp("src/lib/gasScenarioAnalysis.ts"),
      imp("src/lib/materialsPackagingScenarioAnalysis.ts"),
      imp("src/lib/foodProcurementScenarioAnalysis.ts"),
      imp("src/lib/fxDoubleEffectScenarioAnalysis.ts"),
      imp("src/lib/articleIndustryCategories.ts"),
      imp("src/lib/industryOfficePublicArticles.ts"),
      imp("src/lib/industryCommercialArticles.ts"),
      imp("src/lib/industryHotelLeisureArticles.ts"),
      imp("src/lib/industryMedicalWelfareArticles.ts"),
      imp("src/lib/industryManufacturingArticles.ts"),
      imp("src/lib/industryLogisticsInfrastructureArticles.ts"),
      imp("src/lib/industryITTechnologyArticles.ts"),
      imp("src/lib/industryAgriculturePrimaryArticles.ts"),
    ]);
    return {
      articleList: articles.articleList,
      articleCategories: articles.articleCategories,
      retrospectiveSlugs: retro.getAllRetrospectiveSlugs(),
      specialSeries: [
        { base: "emergency-scenario-analysis", slugs: emergency.EMERGENCY_SCENARIO_SLUGS },
        { base: "oil-scenario-analysis", slugs: oil.OIL_SCENARIO_SLUGS },
        { base: "gas-scenario-analysis", slugs: gas.GAS_SCENARIO_SLUGS },
        { base: "materials-packaging-scenario-analysis", slugs: materials.MATERIALS_SCENARIO_SLUGS },
        { base: "food-procurement-scenario-analysis", slugs: food.FOOD_SCENARIO_SLUGS },
        { base: "fx-double-effect-scenario-analysis", slugs: fx.FX_DOUBLE_EFFECT_SLUGS },
      ],
      industryMiddle: industryCats.INDUSTRY_MIDDLE_CATEGORIES,
      industryByMiddle: {
        "office-public": officePublic.getOfficePublicIndustrySlugs(),
        commercial: commercial.getCommercialIndustrySlugs(),
        "hotel-leisure": hotelLeisure.getHotelLeisureIndustrySlugs(),
        "medical-welfare": medicalWelfare.getMedicalWelfareIndustrySlugs(),
        manufacturing: manufacturing.getManufacturingIndustrySlugs(),
        "logistics-infrastructure": logistics.getLogisticsInfrastructureIndustrySlugs(),
        "it-technology": itTech.getITTechnologyIndustrySlugs(),
        "agriculture-primary": agriculture.getAgriculturePrimaryIndustrySlugs(),
      },
    };
  } catch (err) {
    console.error("[check-links] データソース読込に失敗しました（Node 24+ が必要）:");
    console.error(err);
    process.exit(2);
  }
}

async function buildRouteSet() {
  const routes = new Set();
  const add = (r) => routes.add(r);

  for (const r of await collectStaticRoutes(APP_DIR)) {
    if (!r.startsWith("/admin")) add(r);
  }

  const data = await loadRouteData();

  for (const a of data.articleList) add(a.slug.startsWith("/") ? a.slug : `/${a.slug}`);
  for (const c of data.articleCategories) add(`/articles/${c.slug}`);

  add("/business-electricity-retrospective");
  for (const s of data.retrospectiveSlugs) add(`/business-electricity-retrospective/${s}`);

  for (const series of data.specialSeries) {
    add(`/special/${series.base}`);
    for (const s of series.slugs) add(`/special/${series.base}/${s}`);
  }

  add("/articles/by-industry");
  for (const c of data.industryMiddle) add(`/articles/by-industry/${c.slug}`);
  for (const [middle, slugs] of Object.entries(data.industryByMiddle)) {
    for (const s of slugs) add(`/articles/by-industry/${middle}/${s}`);
  }

  for (const p of REQUIRED_PATHS) add(p);
  add("/feed.xml");
  add("/sitemap.xml");
  add("/robots.txt");

  const redirectSources = await collectRedirectSources();
  for (const s of redirectSources) add(s);

  const publicAssets = await collectPublicAssets(PUBLIC_DIR);
  for (const a of publicAssets) add(a);

  return { routes, redirectSources, publicAssetCount: publicAssets.length, articleCount: data.articleList.length };
}

/** src/ 配下の .ts/.tsx を再帰列挙。 */
async function collectSourceFiles(dir) {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      files.push(...(await collectSourceFiles(full)));
    } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) {
      files.push(full);
    }
  }
  return files;
}

// 属性形（href="/x" / href={"/x"} / href={`/x`}）とオブジェクト形（href: "/x"）の両方に一致。
const HREF_RE = /href\s*(?:=\s*\{?|:)\s*(["'`])(\/[^"'`]*?)\1/g;

function normalizeHref(href) {
  let h = href.split("#")[0].split("?")[0];
  if (h.length > 1) h = h.replace(/\/+$/, "");
  return h === "" ? "/" : h;
}

async function main() {
  const { routes, redirectSources, publicAssetCount, articleCount } = await buildRouteSet();
  const files = await collectSourceFiles(SRC_DIR);

  const internal = new Map(); // normalizedHref -> Set<relFile>
  let totalHrefOccurrences = 0;

  for (const file of files) {
    const rel = path.relative(ROOT, file).split(path.sep).join("/");
    // admin/ は非公開（sitemap除外）領域。admin→admin リンクは 404 対象外なので走査しない。
    if (rel.startsWith("src/app/admin/")) continue;
    // sitemap/robots/route生成物やこのスクリプト自身は対象外（ルート定義側）
    if (rel.endsWith("src/app/sitemap.ts") || rel.endsWith("src/app/robots.ts")) continue;
    const src = await fs.readFile(file, "utf8");
    for (const m of src.matchAll(HREF_RE)) {
      const raw = m[2];
      // 外部・プロトコル相対・テンプレート補間・computed は除外
      if (raw.startsWith("//")) continue;
      if (/[`${}\s]/.test(raw)) continue;
      totalHrefOccurrences += 1;
      const norm = normalizeHref(raw);
      if (norm.startsWith("/api/")) continue; // APIは別系統
      if (!internal.has(norm)) internal.set(norm, new Set());
      internal.get(norm).add(rel);
    }
  }

  const broken = [];
  for (const [href, refs] of internal.entries()) {
    if (routes.has(href)) continue;
    broken.push({ href, count: refs.size, refs: [...refs].sort() });
  }
  broken.sort((a, b) => b.count - a.count || a.href.localeCompare(b.href));

  const distinctInternal = internal.size;
  const totalBrokenOccurrences = broken.reduce((n, b) => n + b.count, 0);

  if (FLAG_JSON) {
    console.log(
      JSON.stringify(
        {
          routeSetSize: routes.size,
          articleCount,
          publicAssetCount,
          redirectSourceCount: redirectSources.length,
          filesScanned: files.length,
          totalHrefOccurrences,
          distinctInternalHrefs: distinctInternal,
          distinctBroken: broken.length,
          totalBrokenOccurrences,
          broken,
        },
        null,
        2,
      ),
    );
    process.exit(broken.length > 0 ? 1 : 0);
  }

  if (!FLAG_QUIET) {
    console.log("");
    console.log(`実在ルート集合          : ${routes.size}`);
    console.log(`  ├ articleList slug    : ${articleCount}`);
    console.log(`  ├ redirect source     : ${redirectSources.length}`);
    console.log(`  └ public アセット     : ${publicAssetCount}`);
    console.log(`走査ファイル数          : ${files.length}`);
    console.log(`内部href（延べ）        : ${totalHrefOccurrences}`);
    console.log(`内部href（distinct）    : ${distinctInternal}`);
  }

  if (broken.length === 0) {
    console.log(`\n✅ 内部404候補: 0 件（distinct・延べとも）`);
  } else {
    console.log(`\n❌ 内部404候補: distinct ${broken.length} 件 / 延べ ${totalBrokenOccurrences} 件`);
    for (const b of broken) {
      const shown = b.refs.slice(0, 3).join(", ");
      const more = b.refs.length > 3 ? ` +${b.refs.length - 3}` : "";
      console.log(`  - ${b.href}  ×${b.count}  (${shown}${more})`);
    }
  }

  process.exit(broken.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
