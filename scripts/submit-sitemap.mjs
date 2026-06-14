#!/usr/bin/env node
/**
 * サイトマップ 自動submit ＋ 死活/綴り監視（GSC Sitemaps API）。
 *
 * 背景:
 *   従来サイトマップ送信は手動プッシュ運用で、2026-05-18 に綴り誤り `/sitamap.xml` を
 *   プッシュ→取得失敗→約4週間気づかず登録ゼロのまま放置した。6/14 に正しい
 *   `/sitemap.xml` を手動送信して復旧。本スクリプトは「手動依存」と「監視欠如」を
 *   構造的に解消するため、(1)死活 (2)綴り の自己点検と (3)GSCへの自動submit を行う。
 *
 * 重要な前提:
 *   - サイトマップは1回送信すれば Google が以後自動で定期再クロールする。よって submit は
 *     「鮮度の再通知＋人的ミス排除」が主目的で、毎回の強制再取得ではない。過大評価しない。
 *   - 本質的リスクは「登録が壊れても検知できない」こと → 死活/綴り監視を中心に据え、
 *     壊れていれば exit 1 で CI を赤にして GitHub の標準失敗通知を発火させる。
 *
 * 環境変数:
 *   SITEMAP_URL    既定 "https://simulator.eic-jp.org/sitemap.xml"
 *   ROBOTS_URL     既定 "https://simulator.eic-jp.org/robots.txt"
 *   GSC_SITE_URL   GSCプロパティ識別子。URLプレフィックス型 "https://simulator.eic-jp.org/"
 *                  / ドメインプロパティ型 "sc-domain:simulator.eic-jp.org"。未設定可。
 *   GSC_SA_KEY     サービスアカウントJSON鍵の「全文」。未設定可。
 *   MIN_URL_COUNT  既定 800。sitemap の <loc> 件数の下限（激減検知）。
 *
 * 処理順（いずれか失敗で exit 1・原因を明示ログ。成功は exit 0）:
 *   1. 死活: SITEMAP_URL を fetch → HTTP200・Content-Type が xml 系・本文に <urlset> を含む。
 *            <loc> 件数を数え MIN_URL_COUNT 以上か検証（下回ったら fail）。
 *   2. 綴り: ROBOTS_URL を fetch → "Sitemap:" 行が正しい綴り(sitemap.xml)で存在し、
 *            かつ誤綴り "sitamap" が本文に出現しない（出現したら fail）。
 *   3. submit（★グレースフルスキップ）: GSC_SA_KEY か GSC_SITE_URL が未設定なら
 *            「submitスキップ（Secrets未設定）」とログし、死活/綴りOKなら exit 0。
 *            両方設定済なら SA鍵で JWT(scope webmasters) を取得し
 *            PUT webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath} を実行。非2xxは fail。
 *   4. （任意）submit後に当該sitemapの状態を GET し errors>0 を warn 表示（fail にはしない）。
 *
 * 認証情報の取り扱い:
 *   GSC_SA_KEY / private_key / アクセストークンは絶対にログ出力しない（Secrets参照のみ）。
 *
 * 実行: node scripts/submit-sitemap.mjs
 */

const SITEMAP_URL = process.env.SITEMAP_URL || "https://simulator.eic-jp.org/sitemap.xml";
const ROBOTS_URL = process.env.ROBOTS_URL || "https://simulator.eic-jp.org/robots.txt";
const GSC_SITE_URL = process.env.GSC_SITE_URL || "";
const GSC_SA_KEY = process.env.GSC_SA_KEY || "";
const MIN_URL_COUNT = Number(process.env.MIN_URL_COUNT || "800");

const FETCH_TIMEOUT_MS = 20000;
const USER_AGENT = "eic-sitemap-monitor/1.0 (+https://simulator.eic-jp.org)";
const WEBMASTERS_SCOPE = "https://www.googleapis.com/auth/webmasters";
const CORRECT_SPELLING = "sitemap.xml";
const MISSPELLING = "sitamap"; // 2026-05-18 に実際にプッシュされた綴り誤り。再発の番人。

const log = (msg) => console.log(msg);
const ok = (msg) => console.log(`✓ ${msg}`); // ✓
const fail = (msg) => console.error(`✗ ${msg}`); // ✗

/**
 * URL をテキスト取得。タイムアウト/ネットワーク失敗は明示メッセージで throw。
 * タイマーは finally で必ず clear する（保留ハンドルを残したまま process.exit すると
 * Windows の libuv が異常終了するため。CI=Linux でも保留タイマーは残さないのが安全）。
 */
async function fetchText(url, label) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { "user-agent": USER_AGENT },
      redirect: "follow",
      signal: controller.signal,
    });
    const body = await res.text();
    return { status: res.status, contentType: res.headers.get("content-type") || "", body };
  } catch (err) {
    const reason = err.name === "AbortError" ? `タイムアウト(${FETCH_TIMEOUT_MS}ms)` : `${err.name}: ${err.message}`;
    throw new Error(`${label} の取得に失敗: ${url} (${reason})`);
  } finally {
    clearTimeout(timer);
  }
}

/** 1. 死活: HTTP200・xml系Content-Type・<urlset>・<loc>件数 >= MIN_URL_COUNT。 */
async function checkLiveness() {
  const { status, contentType, body } = await fetchText(SITEMAP_URL, "サイトマップ");
  const problems = [];
  if (status !== 200) problems.push(`HTTP ${status}（200を期待）`);
  if (!/xml/i.test(contentType)) problems.push(`Content-Typeがxml系でない: "${contentType}"`);
  if (!body.includes("<urlset")) problems.push("本文に <urlset> がない");
  const locCount = (body.match(/<loc>/g) || []).length;
  if (locCount < MIN_URL_COUNT) {
    problems.push(`<loc>件数 ${locCount} が下限 ${MIN_URL_COUNT} 未満（URL激減の疑い）`);
  }
  if (problems.length) {
    return { passed: false, detail: `サイトマップ死活NG: ${problems.join(" / ")}` };
  }
  return {
    passed: true,
    detail: `サイトマップ死活OK: HTTP200・${contentType}・<urlset>有・<loc> ${locCount}件（>= ${MIN_URL_COUNT}）`,
  };
}

/** 2. 綴り: robots.txt に正綴りの "Sitemap:" 行が在り、誤綴り "sitamap" が不在。 */
async function checkSpelling() {
  const { status, body } = await fetchText(ROBOTS_URL, "robots.txt");
  const problems = [];
  if (status !== 200) problems.push(`HTTP ${status}（200を期待）`);
  if (new RegExp(MISSPELLING, "i").test(body)) {
    problems.push(`誤綴り "${MISSPELLING}" が robots.txt に出現`);
  }
  const sitemapLine = body.split(/\r?\n/).find((line) => /^\s*sitemap\s*:/i.test(line));
  if (!sitemapLine) {
    problems.push('"Sitemap:" 行が存在しない');
  } else if (!sitemapLine.toLowerCase().includes(CORRECT_SPELLING)) {
    problems.push(`"Sitemap:" 行に正しい綴り "${CORRECT_SPELLING}" がない: "${sitemapLine.trim()}"`);
  }
  if (problems.length) {
    return { passed: false, detail: `robots綴り検証NG: ${problems.join(" / ")}` };
  }
  return {
    passed: true,
    detail: `robots綴り検証OK: "${sitemapLine.trim()}"・誤綴り "${MISSPELLING}" なし`,
  };
}

/** チェックを実行し、throw は failed 結果に正規化（両チェックを必ず走らせ診断性を上げる）。 */
async function runCheck(fn, name) {
  try {
    return await fn();
  } catch (err) {
    return { passed: false, detail: `${name}実行エラー: ${err.message}` };
  }
}

/** googleapis のエラーから status / body を安全に抽出（鍵やトークンは含めない）。 */
function describeApiError(err) {
  const status = err?.response?.status ?? err?.code ?? "不明";
  const data = err?.response?.data;
  let detail;
  if (data) {
    detail = typeof data === "string" ? data : JSON.stringify(data);
  } else {
    detail = err?.message || String(err);
  }
  return `HTTP ${status} / ${detail}`;
}

/**
 * 3-4. GSC submit（グレースフルスキップ）＋ submit後の errors warn。
 * 失敗時は throw（呼び出し側で exit 1）。スキップ時は何もせず正常終了させる。
 */
async function submitToGsc() {
  if (!GSC_SA_KEY || !GSC_SITE_URL) {
    const missing = [!GSC_SA_KEY && "GSC_SA_KEY", !GSC_SITE_URL && "GSC_SITE_URL"]
      .filter(Boolean)
      .join(", ");
    log(`↷ GSC submit スキップ（Secrets未設定: ${missing}）。死活/綴り監視のみ実行しました。`);
    return;
  }

  let credentials;
  try {
    credentials = JSON.parse(GSC_SA_KEY);
  } catch {
    // err.message には入力の断片が含まれうるため鍵漏洩防止で出力しない。
    throw new Error("GSC_SA_KEY をJSONとして解析できません。サービスアカウント鍵の全文(JSON)を設定してください。");
  }
  if (!credentials.client_email || !credentials.private_key) {
    throw new Error("GSC_SA_KEY に client_email / private_key がありません。鍵の全文か確認してください。");
  }

  let google;
  try {
    ({ google } = await import("googleapis"));
  } catch (err) {
    throw new Error(`googleapis を読み込めません（${err.message}）。CIでは npm ci 後に利用可能です。`);
  }

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: [WEBMASTERS_SCOPE],
  });
  const searchconsole = google.searchconsole({ version: "v1", auth });

  // submit: PUT webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}
  try {
    await searchconsole.sitemaps.submit({ siteUrl: GSC_SITE_URL, feedpath: SITEMAP_URL });
  } catch (err) {
    throw new Error(`GSC submit 失敗: ${describeApiError(err)}`);
  }
  ok(`GSC submit 成功: site=${GSC_SITE_URL} / feed=${SITEMAP_URL}`);

  // 任意: submit後の状態を取得し errors を warn 表示（fail にはしない）。
  try {
    const res = await searchconsole.sitemaps.get({ siteUrl: GSC_SITE_URL, feedpath: SITEMAP_URL });
    const errors = Number(res?.data?.errors ?? 0);
    const warnings = Number(res?.data?.warnings ?? 0);
    const lastDownloaded = res?.data?.lastDownloaded || "（未取得）";
    if (errors > 0) {
      log(`⚠ GSC報告: errors=${errors} warnings=${warnings} 最終DL=${lastDownloaded} — 要確認（failにはしません）`);
    } else {
      ok(`GSC状態: errors=0 warnings=${warnings} 最終DL=${lastDownloaded}`);
    }
  } catch (err) {
    log(`（補足）submit後の状態取得はスキップ: ${err.message}`);
  }
}

async function main() {
  const submitEnabled = Boolean(GSC_SA_KEY && GSC_SITE_URL);
  log("サイトマップ監視 + GSC自動submit");
  log(`  SITEMAP_URL   = ${SITEMAP_URL}`);
  log(`  ROBOTS_URL    = ${ROBOTS_URL}`);
  log(`  MIN_URL_COUNT = ${MIN_URL_COUNT}`);
  log(`  GSC submit    = ${submitEnabled ? "有効（Secrets設定済）" : "スキップ（Secrets未設定）"}`);
  log("");

  // 1-2. 監視（両方を必ず実行してから判定）。
  const results = [
    await runCheck(checkLiveness, "死活チェック"),
    await runCheck(checkSpelling, "綴りチェック"),
  ];
  for (const r of results) {
    if (r.passed) ok(r.detail);
    else fail(r.detail);
  }

  if (results.some((r) => !r.passed)) {
    log("");
    fail("監視NG: サイトマップが壊れている可能性があります。submitは実行しません。");
    process.exitCode = 1;
    return;
  }

  // 3-4. submit（or グレースフルスキップ）。
  log("");
  await submitToGsc();

  log("");
  ok("完了");
}

// process.exit() は使わず exitCode のみ設定し、イベントループを自然に drain させる
// （保留中の keep-alive ソケット teardown と process.exit が競合して Windows libuv が
// 異常終了するのを避けるため。fetch のタイマーは fetchText の finally で解放済み）。
main().catch((err) => {
  fail(err.message);
  process.exitCode = 1;
});
