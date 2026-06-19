# Bundle Analysis 2026-04-21 — LCP 仮説の実測検証

## 結論（1 行）

**仮説 1 / 仮説 2 いずれも確定（裏付け）**。PublicHeader と ArticleScrollTracker の両方が `articleList` を client bundle に取り込み、全ページに共通の `layout` chunk へ articleList（~500 記事分のメタデータ）+ 6 系統のシナリオシリーズデータが混入している。

---

## 計測条件

- Next.js 16.1.6
- `ANALYZE=true npx next build --webpack` （Turbopack は bundle analyzer 非互換のため webpack で再ビルド）
- `NODE_OPTIONS=--max-old-space-size=8192`（初回 OOM 対策）
- 生成物: `.next/analyze/{client.html, edge.html, nodejs.html}` と `.next/static/chunks/`

---

## 共通 chunk 実測値

全ページに共通してロードされる client chunk（`.next/static/chunks/` 直下および `app/layout-*.js`）。

| chunk | 役割 | size (raw) | size (gzip) |
|---|---|---:|---:|
| `app/layout-8d11a410c18fcbd0.js` | **root layout（articleList + 全シナリオ + 業種データ混入）** | **293,918 B (287 KB)** | **72,516 B (71 KB)** |
| `72885-5111b7110f13fbef.js` | fuse.js（BitapSearch 実装含む） | 23,628 B (23 KB) | 8,197 B (8 KB) |
| `framework-56d3dd72aee730b5.js` | React runtime | 189,686 B | — |
| `main-8b26e94003969af5.js` | Next.js app main | 130,281 B | — |
| `4bd1b696-2c71dfe22a468256.js` | React 内部（ReactDOM client） | 198,488 B | — |
| `93794-7c9ec055a33b9975.js` | Next.js runtime utilities | 188,973 B | — |
| `polyfills-42372ed130431b0a.js` | polyfills（legacy browser） | 112,594 B | — |

**この時点で仮説対象の 2 chunk だけで 315 KB（raw）／ 80 KB（gzip）が全ページに乗る。**

---

## 仮説 1：PublicHeader → HeaderSearch → searchIndex 連鎖の裏付け

### 依存グラフ

```
src/app/layout.tsx          (Server Component)
 └─ <PublicHeader />         ("use client")
     └─ <HeaderSearch />     ("use client")
         ├─ import Fuse from "fuse.js"
         └─ import { buildSearchIndex } from "../../lib/searchIndex"
             └─ import { articleList, articleCategories } from "../data/articles"
                       // + EMERGENCY / OIL / GAS / MATERIALS / FOOD / FX の 6 シリーズ
                       // + INDUSTRY_MIDDLE_CATEGORIES
                       // + MONTHLY_RETROSPECTIVE_ITEMS
```

### ソースサイズ（取り込まれた原本）

| source file | bytes | 備考 |
|---|---:|---|
| `src/data/articles.ts` | 270,084 | 最大。articleList 全エントリ |
| `src/lib/articleIndustryCategories.ts` | 31,310 | 業種カテゴリ + 個別業種記事 |
| `src/lib/emergencyScenarioAnalysis.ts` | 5,294 | |
| `src/lib/materialsPackagingScenarioAnalysis.ts` | 4,059 | |
| `src/lib/oilScenarioAnalysis.ts` | 3,933 | |
| `src/lib/fxDoubleEffectScenarioAnalysis.ts` | 3,894 | |
| `src/lib/foodProcurementScenarioAnalysis.ts` | 3,866 | |
| `src/lib/gasScenarioAnalysis.ts` | 3,864 | |
| **合計** | **326,304** | |

### chunk 内混入の実証

`grep` で `app/layout-*.js`（287 KB）を走査した結果：

| 検出パターン | 回数 | 意味 |
|---|---:|---|
| `publishedAt` | 499 | articleList 各エントリのフィールド（≈ 記事数） |
| `categorySlug` | 500 | 同上 |
| kebab-case string (10+ chars) ユニーク | 520 | 記事 slug + カテゴリ slug + シナリオ slug |
| `fuel-cost-adjustment`（サンプル slug） | 12 | 記事 slug が複数箇所で参照されている |

→ **articleList（+ articleCategories + 全シナリオシリーズ）は確実に layout chunk に含まれている**。他のどの chunk にも `publishedAt` は含まれていない（layout 単独）。

fuse.js は独立した vendor chunk `72885-*.js`（23 KB）として切り出されているが、`HeaderSearch` が layout 経由で常にマウントされるため、**全ページでプリロードされる**（next の自動 prefetch 対象）。

---

## 仮説 2：ArticleScrollTracker の articleList 取り込みの裏付け

### コード実測

```ts
// src/components/analytics/ArticleScrollTracker.tsx:1-8
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { articleList } from "../../data/articles";   // ← 270 KB 全取り込み
import { trackEvent } from "../../lib/analytics/ga";

const SLUG_SET = new Set(articleList.map((a) => a.slug));  // 使うのは slug のみ
```

### 使われ方

- `src/app/layout.tsx:4,69` で root layout に常駐（全ページ）
- 使用しているのは `articleList.map((a) => a.slug)` の **slug 文字列のみ**
- `title`/`description`/`category` 等は参照されないが、tree-shake されない（モジュール全体を取り込んでいるため）

### bundle 寄与の扱い

`HeaderSearch` と同じ `articleList` モジュールを共有するため、**既に layout chunk に `articleList` が入っている**以上、ArticleScrollTracker 単体では追加のサイズ増加は生じない。ただし `HeaderSearch` を取り除いても ArticleScrollTracker だけで同じ 270 KB がそのまま layout chunk に残ることになる — **両方同時に修正しないと効果が出ない構造**。

---

## 仮説との一致度まとめ

| 仮説 | 判定 | 根拠 |
|---|---|---|
| 1. PublicHeader → HeaderSearch → searchIndex が articles.ts 270KB + fuse.js 24KB を全ページ client に混入 | **裏付け（確定）** | layout chunk 287 KB に articleList / categorySlug × 500 / publishedAt × 499 を検出。fuse.js は 23 KB の独立 vendor chunk |
| 2. ArticleScrollTracker が articleList 全件を記事ページ以外でも import | **裏付け（確定）** | layout.tsx で常駐。`articleList` 丸ごと import、slug のみ使用（270 KB の浪費）|

---

## 02E / 02F / 02G への示唆

### 02E（検索遅延化） → 優先度 **最高**

HeaderSearch の Fuse 初期化と searchIndex 構築を **クリック時 dynamic import** に切り替えるだけで、layout chunk から 270 KB 以上（articleList + シナリオデータ）+ fuse.js 24 KB を切り離せる。

期待効果（実測値ベース）:
- layout chunk: 287 KB → **~20–30 KB**（ヘッダー UI のみ残る見込み）
- fuse.js chunk: 全ページプリロード → クリック時のみ
- gzip 合計削減: ~80 KB 相当

ただし ArticleScrollTracker が同じ `articleList` を layout で import している限り、層 chunk から articleList は消えない → **02F と同時対応が必要**。

### 02F（記事データ軽量化 / ArticleScrollTracker 分離）

以下のいずれかが必要：

a. **slug のみの軽量定数ファイルを切り出す**（例: `src/data/articleSlugs.ts` に slug 配列だけ export）
b. **ArticleScrollTracker を `/[slug]` 配下でのみマウント**（記事ページだけに限定）
c. **path 判定を正規表現にする**（`/^\/[a-z0-9-]+$/` 等）— articleList 参照を廃止

推奨は **(a)+(c) のハイブリッド**：静的 slug 一覧は tiny file にし、path 判定自体は pathname だけで済ませる。

### 02G（Header 分割）

02E を先行させた場合、PublicHeader 本体は大幅に軽くなる。02G（SSR 化 + client island 分離）は **02E/02F の後に効果測定して採否判断** で十分。

---

## 夕方 18:00 PSI 再計測との突合ポイント

- 今回の bundle 実測で「layout chunk に全記事データ + fuse.js が乗っている」ことは確定済み
- もし PSI で LCP が依然 4.6〜4.9s なら → **ページ問題**（本レポートの 02E/F が根本原因）
- もし PSI で LCP が回復していたら → **朝の計測ノイズ**（ただし bundle 問題は別途存在）

**どちらに転んでも 02E/02F を打つ価値はある**（先送りする理由がない）。

---

## 付録：analyzer レポート HTML の位置

```
.next/analyze/client.html   ← ブラウザで開くと treemap 確認可能
.next/analyze/edge.html
.next/analyze/nodejs.html
```

Git 管理外（`.next/` は `.gitignore` 済み）。必要に応じて PR reviewer は `ANALYZE=true npx next build --webpack` を手元で再実行する想定。
