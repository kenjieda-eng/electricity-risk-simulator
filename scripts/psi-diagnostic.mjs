#!/usr/bin/env node
/**
 * PSI 詳細診断スクリプト（08 LCP 構造調査用）
 *
 * LCP 要素・TTFB・render-blocking・unused-javascript・critical-request-chains 等を
 * URL 別に抽出して、.ai-team/LCP_DIAG_<HHmm>.json に保存する。
 *
 * 使い方:
 *   node scripts/psi-diagnostic.mjs --urls "/,/articles,/capacity-contribution-explained"
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

function loadEnv() {
  const envPath = resolve(ROOT, ".env.local");
  if (!existsSync(envPath)) return {};
  const content = readFileSync(envPath, "utf-8").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const env = {};
  const re = /^([A-Z_][A-Z0-9_]*)=("(?:[^"\\]|\\.)*"|[^\n]*)/gm;
  let m;
  while ((m = re.exec(content)) !== null) {
    const key = m[1];
    let value = m[2].trim();
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1).replace(/\\n/g, "\n").replace(/\\"/g, '"');
    }
    env[key] = value;
  }
  return env;
}

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) { out[key] = true; }
    else { out[key] = next; i++; }
  }
  return out;
}

const args = parseArgs(process.argv);
const env = loadEnv();
const BASE = String(args.base || "https://simulator.eic-jp.org").replace(/\/$/, "");
const URLS_RAW = String(args.urls || "/").split(",").map((s) => s.trim()).filter(Boolean);
const URLS = URLS_RAW.map((u) => (u.startsWith("http") ? u : BASE + u));
const PSI_API_KEY = String(args.key || env.PSI_API_KEY || "");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function callPSI(url) {
  const q = new URLSearchParams({ url, strategy: "mobile" });
  q.append("category", "performance");
  if (PSI_API_KEY) q.set("key", PSI_API_KEY);
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${q.toString()}`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PSI ${res.status}: ${text.slice(0, 200)}`);
  }
  return res.json();
}

function summarize(data) {
  const lh = data.lighthouseResult;
  const aud = lh.audits || {};
  const cat = lh.categories || {};

  const lcpElem = aud["largest-contentful-paint-element"]?.details?.items || [];
  const lcpPhases = aud["largest-contentful-paint-element"]?.details?.items?.[1]?.items || [];
  const lcpLazy = aud["lcp-lazy-loaded"];
  const serverResp = aud["server-response-time"];
  const renderBlocking = aud["render-blocking-resources"]?.details?.items || [];
  const unusedJs = aud["unused-javascript"]?.details?.items || [];
  const unusedCss = aud["unused-css-rules"]?.details?.items || [];
  const reqChains = aud["critical-request-chains"];
  const thirdParty = aud["third-party-summary"]?.details?.items || [];
  const mainThreadWork = aud["mainthread-work-breakdown"]?.details?.items || [];
  const totalByteWeight = aud["total-byte-weight"];
  const longTasks = aud["long-tasks"]?.details?.items || [];
  const bootupTime = aud["bootup-time"];
  const networkRtt = aud["network-rtt"];
  const networkServerLatency = aud["network-server-latency"];

  return {
    perf: Math.round((cat.performance?.score ?? 0) * 100),
    lcpMs: aud["largest-contentful-paint"]?.numericValue,
    fcpMs: aud["first-contentful-paint"]?.numericValue,
    tbtMs: aud["total-blocking-time"]?.numericValue,
    cls: aud["cumulative-layout-shift"]?.numericValue,
    ttfbMs: serverResp?.numericValue,
    ttfbDisplay: serverResp?.displayValue,
    totalByteWeightKb: totalByteWeight?.numericValue ? Math.round(totalByteWeight.numericValue / 1024) : null,
    lcpElement: lcpElem[0]?.items?.[0] || lcpElem[0] || null,
    lcpPhases: aud["lcp-phases"]?.details || aud["largest-contentful-paint-element"]?.details || null,
    renderBlocking: renderBlocking.map((r) => ({
      url: r.url,
      totalBytes: r.totalBytes,
      wastedMs: r.wastedMs,
    })),
    unusedJavascript: unusedJs.slice(0, 5).map((r) => ({
      url: r.url,
      totalBytes: r.totalBytes,
      wastedBytes: r.wastedBytes,
      wastedPercent: r.wastedPercent,
    })),
    unusedCss: unusedCss.slice(0, 5).map((r) => ({
      url: r.url,
      totalBytes: r.totalBytes,
      wastedBytes: r.wastedBytes,
    })),
    thirdParty: thirdParty.slice(0, 5).map((r) => ({
      entity: r.entity,
      transferSize: r.transferSize,
      blockingTime: r.blockingTime,
      mainThreadTime: r.mainThreadTime,
    })),
    mainThreadWork: mainThreadWork.map((r) => ({
      groupLabel: r.groupLabel,
      duration: r.duration,
    })),
    longTasksTotal: longTasks.length,
    longTasksTopDurations: longTasks.slice(0, 5).map((t) => ({ duration: t.duration, startTime: t.startTime })),
    bootupTimeMs: bootupTime?.numericValue,
    bootupDisplay: bootupTime?.displayValue,
    networkRttMs: networkRtt?.numericValue,
    networkServerLatencyMs: networkServerLatency?.numericValue,
    criticalReqChainDuration: reqChains?.details?.longestChain?.duration,
    criticalReqChainTransferSize: reqChains?.details?.longestChain?.transferSize,
  };
}

async function main() {
  const results = {};
  for (const url of URLS) {
    process.stdout.write(`[psi-diag] ${url} ... `);
    try {
      const data = await callPSI(url);
      const s = summarize(data);
      results[url] = s;
      console.log(`perf=${s.perf} lcp=${(s.lcpMs / 1000).toFixed(1)}s ttfb=${s.ttfbDisplay || Math.round(s.ttfbMs) + "ms"}`);
    } catch (err) {
      console.log(`FAILED: ${err.message}`);
      results[url] = { error: err.message };
    }
    await sleep(1500);
  }
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const hm = `${pad(now.getHours())}${pad(now.getMinutes())}`;
  const outPath = resolve(ROOT, `.ai-team/LCP_DIAG_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${hm}.json`);
  writeFileSync(outPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`[psi-diag] wrote ${outPath}`);
}

main().catch((err) => { console.error("Fatal:", err); process.exit(1); });
