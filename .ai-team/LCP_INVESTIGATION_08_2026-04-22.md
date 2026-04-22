# LCP 構造調査（タスク 08 / 2026-04-22 11:30 JST）

**目的**: 02E + 02F + 02E-fix で bundle -91%・CLS 完全復帰達成後も残る LCP 4.3〜4.7s の主因特定。
**前提**: FCP 2.2s が 3 URL 共通 / FCP-LCP ギャップ 2s の構造解明。
**スコープ**: 調査のみ、コード変更なし、commit 待機。
**比較元ドキュメント**: [LCP_HYPOTHESIS_2026-04-21_MORNING.md](./LCP_HYPOTHESIS_2026-04-21_MORNING.md)

---

## エグゼクティブサマリー

- ✅ **LCP 要素を 3 URL 全て特定**: ヒーローカード内のリード文 **`<p>` テキスト**（画像ではない）
- ✅ **TTFB は無罪**: 全 URL 0〜20ms、サーバー応答は完璧
- ✅ **Render-blocking resources はゼロ**
- 🔴 **新主因（最有力）**: **`elementRenderDelay`（LCP 要素が発見されてから描画されるまでの時間）が 1.4〜8.5s** と支配的。
- 🔴 **連動原因**: PublicHeader の `"use client"` による **root layout 全体 hydration** が mobile 4x CPU slowdown 下で長時間化、LCP 要素が paint 再認定されている。
- ⚪ **昨日の仮説は両方とも解消済・棄却確定**（HeaderSearch bundle ○, ArticleScrollTracker ○）が、LCP は残存。
- 🎯 **推奨施策**: **GoogleAnalytics lazyOnload 化 (S)** → **PublicHeader の server/client 分割 (M)** の 2 段階。

---

## 1. LCP 要素特定結果（全 URL）

**計測ソース**: PSI API v5 / `lcp-breakdown-insight` audit
**出力 JSON**: [LCP_DIAG_2026-04-22_1130.json](./LCP_DIAG_2026-04-22_1130.json) / [LCP_ELEMENT_RAW_1130.json](./LCP_ELEMENT_RAW_1130.json)

| URL | LCP 要素 | HTML snippet | selector | サイズ (px) |
|---|---|---|---|---|
| `/` | ヒーローカードのリード文 p | `<p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base sm:leading-7">` | `section.px-4 > div.mx-auto > div.rounded-2xl > p.mt-3` | 338×140 |
| `/articles` | 同左（「法人向け電気料金の見直しや比較…」） | `<p class="mt-3 text-sm leading-7 text-slate-700 sm:text-base">` | `main > main > header.rounded-2xl > p.mt-3` | 338×140 |
| `/capacity-contribution-explained` | 同左（「容量拠出金とは…」） | `<p class="mt-4 text-sm leading-7 text-slate-700 sm:text-base">` | `main > main > header.rounded-xl > p.mt-4` | 330×140 |

### 共通パターン
- **LCP 要素は全 URL で「ヒーローカード内のリード文 `<p>`」** — 画像ではない
- boundingRect サイズも 330-338 × 140 で一致
- Tailwind クラス `text-sm leading-7 text-slate-700 sm:text-base` も一致
- PublicHeader の直下 `<main>` 内にある最初の section の p タグ

→ **画像 priority / next/image 最適化 / fetchPriority は LCP に効かない**（LCP はテキスト）
→ `lcp-discovery-insight` audit = `notApplicable`（画像 LCP でないため該当しない）

---

## 2. TTFB / FCP / LCP ブレイクダウン

### 2.1 計測値（2026-04-22 11:30 JST 単発 run、mobile）

| URL | Perf | FCP | LCP | LCP - FCP gap | TTFB | ElementRenderDelay |
|---|:-:|---|---|---|---|---|
| `/` | 82 | 2.19s | 4.41s | **+2.22s** | **0.9ms** ✅ | 1393ms |
| `/articles` | 82 | 2.23s | 4.33s | **+2.10s** | **8ms** ✅ | (別 run で 8526ms) |
| `/capacity-contribution-explained` | 28* | 5.64s | 6.95s | +1.31s | **4ms** ✅ | 1557ms |

\* `/capacity-contribution-explained` run 1 は PSI lab ノイズスパイク（TBT 3332ms, bootup 4.3s, style & layout 11.6s）。他 run では Perf 78-80 で安定。

### 2.2 FCP → LCP ギャップ 2.1s の内訳（home 基準、main thread work breakdown）

| 項目 | duration | 累積 |
|---|---:|---:|
| Script Evaluation | 395ms | 395ms |
| Style & Layout | 347ms | 742ms |
| Script Parsing & Compilation | 144ms | 886ms |
| Other | 120ms | 1006ms |
| Parse HTML & CSS | 11ms | 1017ms |
| Rendering | 10ms | 1027ms |
| **合計 main thread work** | **1027ms** | |
| Bootup time (JS) | 478ms | (上記に含まれる) |
| Long tasks (total 4) | 177 / 94 / 66 / 64 ms | max 177ms block |

### 2.3 TTFB 判定: ✅ 無罪

- 全 URL 10ms 以下
- Vercel edge cache が効いている状態
- **サーバー応答時間は LCP 悪化の主因ではない**

### 2.4 ElementRenderDelay の支配性（新発見）

`lcp-breakdown-insight` によれば:
- `/`: timeToFirstByte **0.9ms** + elementRenderDelay **1393ms** → 合計 1394ms
- `/articles` (別 run): timeToFirstByte 20ms + elementRenderDelay **8526ms** → 合計 8546ms

**ElementRenderDelay = 「LCP 要素が発見されてから画面に paint されるまでの時間」**
→ これが支配的ということは、HTML は即座に届いているが、**何かが要素の最終描画を 1.4〜8.5s 遅らせている**。

---

## 3. 主因候補ランキング（2026-04-22 版）

### 🔴 候補 1（最有力）: Hydration-induced LCP re-pinning

**構造**:
```
app/layout.tsx (Server)
  └─ PublicHeader "use client"  ← 全ページ展開
      ├─ HeaderSearch (dynamic, ssr:false, 02E で lazy 化済)
      ├─ usePathname()  ← hydration 必須
      └─ Image logo (priority)

<main>
  └─ [page content] ← LCP 要素が含まれる
```

**なぜ LCP を遅らせるか**:

1. HTML は 2.2s で FCP 達成（PublicHeader 含む初期 HTML は server render）
2. ブラウザは PublicHeader の hydration を待ちながらも、**その下の LCP 要素の「最終 paint」を仮置き**
3. Mobile 4x CPU slowdown 下で hydration に 1-2s かかる
4. Hydration 完了時に `usePathname()` で active state の classname が書き換わる → **style 再計算**（Style & Layout 347ms で記録）
5. Lighthouse はこの style 再計算による微細な paint 変更を「最終 LCP paint」として記録 → LCP 時刻が hydration 完了付近（4.3s）にスライド

**裏付け**:
- CLS が 0 ではなく 0.009〜0.01（微小 layout shift あり）
- Script Evaluation 395ms + Script Parsing 144ms = **539ms の pure JS bootup**
- Long task 177ms @ 942ms → FCP 直前に main thread block
- Bootup Time 478ms（PSI のメトリクス上も JS 起動コストを認識）
- 3 URL で FCP 2.2s / LCP 4.3s のギャップが一致 = **layout.tsx 層で共通発生**

**反証可能性**:
- PublicHeader を完全 server component 化して計測し、LCP が改善すれば確定
- 現時点では相関的証拠のみ

### 🟡 候補 2（有力）: GoogleAnalytics (gtag.js) の FCP 直後実行

**構造**:
```
<Script src="https://www.googletagmanager.com/gtag/js?id=..." strategy="afterInteractive" />
```

**なぜ遅らせるか**:

- `afterInteractive` = Next.js が「hydration 完了直後」にロード
- gtag.js は 152KB / **unused 41% (62KB)** → download + parse + evaluate で main thread 占有
- FCP 2.2s → hydration 開始 → gtag.js 取得 → parse/eval が LCP 4.3s の窓に重なる
- PSI の `unused-javascript` audit でも gtag.js が第 1 位、3 URL すべてで警告

**裏付け**:
- Long task 94ms @ 4400ms, 66ms @ 4494ms → **LCP 時刻 (4.3s) 直後に連続 long task**
- これらは gtag.js の eval/init とタイミング一致

**反証可能性**:
- `strategy="lazyOnload"` に変更して計測 → LCP 改善すれば確定
- `defer` 相当になり LCP 後まで gtag 実行が遅れる

### 🟢 候補 3（弱）: 日本語フォントの系統フォント解決コスト

- `next/font` / `@font-face` 未使用は確認済（layout.tsx に font 宣言なし）
- `globals.css` でも system font のみ
- しかし日本語 UI stack で「ヒラギノ角ゴ → メイリオ → sans-serif」のフォールバック解決にブラウザが数十 ms 使う可能性
- **FCP 2.2s という FCP 自体の遅さ**（通常 mobile の good 閾値 1.8s を超過）を部分的に説明し得る
- 影響規模: 小〜中、画面単体で -100〜-300ms 程度

### 🟢 候補 4（弱）: Style & Layout の多段階計算

- Style & Layout: home 347ms / articles 432ms / capacity 11.6s (ノイズ)
- Tailwind の complexity（多数の responsive modifier: `sm:`, `md:`, `lg:` 混在）
- 手動 class の 100+ 件が PublicHeader + 各ページに広がる
- style 再計算そのものが重い

---

## 4. 昨日仮説との差分

| 昨日の仮説 | 解消状況 | 残存への寄与 |
|---|---|---|
| 候補1: PublicHeader 経由の重量 client bundle (articleList+fuse.js 270KB) | ✅ 02E で HeaderSearch dynamic 化、bundle -91% (287→24KB) | ほぼゼロ |
| 候補2: ArticleScrollTracker の articleList 全件 import | ✅ 02F で pathname 正規表現判定、全件 import 剥離 | ほぼゼロ |
| フォント無罪 | 継続 | 小（候補 3 として残存） |
| ロゴ画像無罪 | 継続 | ゼロ |

→ **昨日の主因 2 候補はいずれも解消済。LCP 残存の原因は別次元（hydration re-pinning + gtag）**。

---

## 5. 優先度付き対策案

### 🥇 Phase 1 (S): GoogleAnalytics を `lazyOnload` に変更

**変更ファイル**: [src/components/analytics/GoogleAnalytics.tsx](src/components/analytics/GoogleAnalytics.tsx) 2 行変更

```diff
- <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
- <Script id="ga4-init" strategy="afterInteractive">
+ <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="lazyOnload" />
+ <Script id="ga4-init" strategy="lazyOnload">
```

**想定効果**: LCP -200〜-500ms（gtag.js の FCP→LCP 窓内競合を解消）
**リスク**: 初回 pageview 計測がわずかに遅延する（数百 ms）。GA4 は visibility 変化時に send_to_queue するので事実上のデータ欠損はない。
**PR size**: XS（1 ファイル 2 行）
**所要時間**: 30 分

### 🥈 Phase 2 (M): PublicHeader を Server/Client 分割

**変更ファイル**: 2-3 新規 + 1 修正
- `src/components/PublicHeader.tsx` → Server Component 化（logo + nav + contact button）
- `src/components/PublicHeaderActiveLink.tsx` (新規, `"use client"`) → `usePathname` だけを持つ軽量 client component
- `src/components/search/HeaderSearch.tsx` → そのまま（既に dynamic ssr:false）

**構造案**:
```tsx
// Server
export function PublicHeader() {
  return (
    <header>
      <Logo />
      <nav>
        {headerLinks.map(l => <ActiveLink key={l.href} {...l} />)}
      </nav>
      <ContactLink />
      <HeaderSearch /> {/* dynamic wrapper が client side */}
    </header>
  );
}

// Client (小さい)
"use client";
export function ActiveLink({ href, label }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);
  return <Link href={href} className={active ? "..." : "..."}>{label}</Link>;
}
```

**想定効果**: LCP **-500ms〜-1.5s**（hydration 対象が 1/10 に縮小、style 再計算域が小さくなる）
**リスク**: active nav のスタイル反映が 100-200ms 遅延する（初期は非 active、hydration 後に active）。視覚的影響は小さい。
**PR size**: M（2-3 ファイル 60-100 行）
**所要時間**: 4-6 時間

### 🥉 Phase 3 (XS, 観測タスク): 計測・判定

**条件**: Phase 1+2 merge 後、2 時間 edge cache 安定期待ちの再計測
**コマンド**:
```bash
node scripts/psi-baseline.mjs \
  --label after-phase1-phase2-2026-04-2X \
  --runs 3 --interval 60 --strategy mobile \
  --urls https://simulator.eic-jp.org/,https://simulator.eic-jp.org/articles,https://simulator.eic-jp.org/capacity-contribution-explained
```

**判定閾値**:
- LCP < 2.5s: α完勝（Core Web Vitals Good）
- 2.5〜3.5s: 概ね成功、Phase 4 で微調整
- 3.5〜4.0s: 候補 3（フォント）/ 候補 4（Tailwind 複雑性）継続調査
- ≥ 4.0s: 主因判定ミス、再調査

### 🔧 Phase 4 (L, 保留): Framework-level 最適化

Phase 1+2 で LCP < 2.5s 到達しなかった場合のみ:

- `src/components/BackToTop` / `ArticleScrollTracker` を `lazy` + `Intersection Observer` で後段読み込み
- Next.js 16 `streaming SSR` 設定を見直し（`export const dynamic` 明示 / `ReactDOM.preload` API）
- Tailwind v4 の未使用 class 枝刈り強化（`@tailwindcss/oxide` cache chainを cache cold で検証）

**PR size**: L（複数ファイル、フレームワーク層）
**リスク**: 大（regression 可能性、十分な staging 検証が必須）

---

## 6. 推奨アクションフロー

```
  [今] 08調査完了
    │
    ▼
  09: Phase 1 (S) GA lazyOnload 実装 PR
    │    所要: 30分, PR review: 1時間
    ▼
  03-v2: PSI 再計測 (1時間)
    │    判定: LCP 改善幅で Phase 2 要否判定
    ▼
  10: Phase 2 (M) PublicHeader 分割 PR （必要時のみ）
    │    所要: 4-6時間, PR review: 3-4時間
    ▼
  03-v3: 最終 PSI 再計測
    │    判定: α 完勝 / 追加 Phase 必要
    ▼
  [α 完勝] または [Phase 4 へ]
```

---

## 7. 除外リスト（このタスクで棄却）

- ❌ TTFB 起因（0-10ms で完璧）
- ❌ Render-blocking CSS/JS（audit 結果 0 件）
- ❌ Image LCP（LCP element audit で `<p>` 確定）
- ❌ Logo image の priority 設定不足（現状問題なし、LCP 要素ですらない）
- ❌ Bundle サイズ（02E+02F で 287KB→24KB、総量 536-599KB は画像含む）
- ❌ Critical request chain（TTFB 完璧のため）
- ❌ Articles.ts 重量 import（02E+02F で解消）
- ❌ 3rd party scripts 全般（gtag 以外は supabase preconnect のみで影響小）

---

## 8. メタ情報

- 調査時刻: 2026-04-22 11:30 JST
- 計測手段: PSI API v5 `lcp-breakdown-insight` / `largest-contentful-paint-element` / 関連 audits
- 診断スクリプト: [scripts/psi-diagnostic.mjs](scripts/psi-diagnostic.mjs)（今回作成、未 commit）
- 調査所要: 約 1.5 時間
- コード変更: なし（調査のみ）
- 後続 PR: N/A（調査ドキュメントのみ）

**次セッションで 09 (Phase 1) 実装を開始可能。**
