#!/usr/bin/env node
/**
 * Internal link checker for src/app.
 *
 * - Walks src/app/ to enumerate all routes (static page.tsx files + known dynamic slugs).
 * - Scans every .tsx under src/ for href="/..." and path-literal usages.
 * - Reports internal hrefs that do not resolve to a known route / file.
 *
 * External links and API endpoints are reported separately but not fetched (to avoid rate limits).
 * Run via: node scripts/check-links.mjs
 */

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), "..");
const APP_DIR = path.join(ROOT, "src", "app");
const PUBLIC_DIR = path.join(ROOT, "public");

const SKIP_ROUTE_DIRS = new Set([
  "api",
  "_components",
]);

const DYNAMIC_ROUTE_SEGMENT = /^\[.+\]$/;
const ROUTE_GROUP_SEGMENT = /^\(.+\)$/;

/** @returns {Promise<{routes: string[], dynamicParents: string[]}>} */
async function walkRoutes(baseDir, subPath = "") {
  const entries = await fs.readdir(baseDir, { withFileTypes: true });
  const routes = [];
  const dynamicParents = [];
  for (const entry of entries) {
    if (entry.name.startsWith("_")) continue;
    if (SKIP_ROUTE_DIRS.has(entry.name)) continue;
    const next = path.join(baseDir, entry.name);
    if (entry.isDirectory()) {
      if (DYNAMIC_ROUTE_SEGMENT.test(entry.name)) {
        // Record that the current subPath accepts any slug.
        dynamicParents.push(subPath || "/");
        continue;
      }
      let childSub;
      if (ROUTE_GROUP_SEGMENT.test(entry.name)) {
        childSub = subPath;
      } else {
        childSub = subPath + "/" + entry.name;
      }
      const nested = await walkRoutes(next, childSub);
      routes.push(...nested.routes);
      dynamicParents.push(...nested.dynamicParents);
    } else if (entry.isFile() && entry.name === "page.tsx") {
      routes.push(subPath || "/");
    }
  }
  return { routes, dynamicParents };
}

async function loadKnownDynamicRoutes() {
  const known = new Set();

  // Article categories
  try {
    const articlesPath = path.join(ROOT, "src", "data", "articles.ts");
    const raw = await fs.readFile(articlesPath, "utf8");
    const catMatches = [...raw.matchAll(/slug:\s*"([a-z0-9-]+)"/g)];
    for (const m of catMatches) {
      known.add(`/articles/${m[1]}`);
      known.add(`/${m[1]}`);
    }
  } catch {}

  // by-industry
  const industryDir = path.join(APP_DIR, "articles", "by-industry");
  try {
    const industries = await fs.readdir(industryDir, { withFileTypes: true });
    for (const d of industries) {
      if (d.isDirectory()) known.add(`/articles/by-industry/${d.name}`);
    }
  } catch {}

  return known;
}

async function walkForTsxFiles(dir) {
  const results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
      results.push(...(await walkForTsxFiles(full)));
    } else if (entry.isFile() && (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts"))) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  const walked = await walkRoutes(APP_DIR);
  const routes = new Set(walked.routes.map((r) => (r === "" ? "/" : r)));
  const dynamicParents = new Set(walked.dynamicParents);
  const dynamic = await loadKnownDynamicRoutes();
  for (const d of dynamic) routes.add(d);

  // Also accept every top-level article directory (1-level slugs).
  const topLevel = await fs.readdir(APP_DIR, { withFileTypes: true });
  for (const d of topLevel) {
    if (d.isDirectory() && !SKIP_ROUTE_DIRS.has(d.name) && !d.name.startsWith("_") && !DYNAMIC_ROUTE_SEGMENT.test(d.name)) {
      try {
        const st = await fs.stat(path.join(APP_DIR, d.name, "page.tsx"));
        if (st.isFile()) routes.add(`/${d.name}`);
      } catch {}
    }
  }

  const files = await walkForTsxFiles(path.join(ROOT, "src"));
  const hrefRe = /href=["'](\/[^"'#?]*)["']/g;

  const internalRefs = new Map(); // href -> Set of files
  const externalRefs = new Set();
  const downloadRefs = new Set();
  const apiRefs = new Set();

  for (const file of files) {
    const src = await fs.readFile(file, "utf8");
    const matches = [...src.matchAll(hrefRe)];
    for (const m of matches) {
      const href = m[1];
      if (href.startsWith("/downloads/")) {
        downloadRefs.add(href);
        continue;
      }
      if (href.startsWith("/api/")) {
        apiRefs.add(href);
        continue;
      }
      if (!internalRefs.has(href)) internalRefs.set(href, new Set());
      internalRefs.get(href).add(path.relative(ROOT, file));
    }

    const externalRe = /href=["'](https?:\/\/[^"']+)["']/g;
    const ext = [...src.matchAll(externalRe)];
    for (const m of ext) externalRefs.add(m[0]);
  }

  // Classify internal refs
  const broken = [];
  const ok = [];
  for (const [href, refs] of internalRefs.entries()) {
    const normalized = href.replace(/\/$/, "") || "/";
    if (routes.has(normalized) || routes.has(normalized + "/")) {
      ok.push(href);
      continue;
    }
    // Accept if the parent path matches a known dynamic route parent.
    const seg = normalized.split("/").filter(Boolean);
    if (seg.length >= 1) {
      const parent = "/" + seg.slice(0, -1).join("/");
      const parentNorm = parent === "/" ? "/" : parent;
      if (dynamicParents.has(parentNorm)) {
        ok.push(href);
        continue;
      }
    }
    broken.push({ href, refs: [...refs] });
  }

  // Check downloads exist
  const brokenDownloads = [];
  for (const d of downloadRefs) {
    const rel = d.replace(/^\//, "");
    const p = path.join(PUBLIC_DIR, rel);
    try {
      await fs.stat(p);
    } catch {
      brokenDownloads.push(d);
    }
  }

  console.log(`\nInternal routes enumerated: ${routes.size}`);
  console.log(`Internal hrefs found: ${internalRefs.size}`);
  console.log(`External hrefs found: ${externalRefs.size}`);
  console.log(`/downloads/ hrefs found: ${downloadRefs.size}`);
  console.log(`/api/ hrefs found: ${apiRefs.size}`);

  if (broken.length === 0) {
    console.log(`\nOK No broken internal links.`);
  } else {
    console.log(`\nBroken internal links: ${broken.length}`);
    for (const b of broken.slice(0, 100)) {
      console.log(`  - ${b.href}  (from ${b.refs.slice(0, 2).join(", ")}${b.refs.length > 2 ? " +" + (b.refs.length - 2) : ""})`);
    }
    if (broken.length > 100) console.log(`  ...and ${broken.length - 100} more`);
  }

  if (brokenDownloads.length === 0) {
    console.log(`\nOK All /downloads/ files exist.`);
  } else {
    console.log(`\nMissing downloads (${brokenDownloads.length}):`);
    for (const d of brokenDownloads) console.log(`  - ${d}`);
  }

  process.exit(broken.length > 0 || brokenDownloads.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(2);
});
