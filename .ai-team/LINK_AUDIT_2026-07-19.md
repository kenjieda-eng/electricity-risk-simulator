# 全サイト内部リンク健全性検査レポート（2026-07-19）

- **発注**: docs＋メンテ発注③（全サイト内部リンク健全性検査・レポートのみ）
- **作業ブランチ基準**: `main` = `88bbf23`（#295 マージ済み時点）
- **性質**: 読み取り専用の診断。**コード修正は一切行っていない**。404候補・不整合の是正方針はリンが判断し、別発注とする。

## 0. 検査方法（再現性のため）

`sitemap.ts` の href 検査ロジックを全ルートへ拡張し、以下を機械的に突合した。

1. **実在ルート集合の構築（1109 ルート）** — `src/app/sitemap.ts` と同一のデータソースを Node 24 のネイティブ TS import で読み込み、以下を合算:
   - 静的ページ（`src/app/**/page.tsx` をルートグループ `(x)`／プライベート `_x`／動的 `[x]` 規則で走査）
   - API ルートハンドラ（`route.ts`。`/api/datasets/*`・`/api/downloads/*` 等のデータ／DLエンドポイントは404ではない）
   - 動的スラッグ全11系統（記事 `articleList`、カテゴリ `articleCategories`（40）、振り返り、有事/石油/ガス/素材/食料/為替の特集6系統、業種別 `by-industry/[middle]/[industry]`）
   - `next.config.ts` の `redirects()` の source（30 件。リダイレクトは404ではない）
   - `public/` 配下の静的アセット（`/downloads/*` 等）
2. **内部href抽出** — `src/app/**/page.tsx` 全 920 ファイルから `href="/..."`／`href: "/..."`／`href={"/..."}`／静的テンプレート `` href=`/...` `` を抽出（`#`アンカー・`?`クエリは除去）。`${...}` を含む動的テンプレート 37 件は解決不能として集計対象外。
3. **突合** — 各hrefを実在ルート集合と照合。ヒットしないものを (a) 404候補、`/articles/{X}` 形かつ `X` が `articleCategories` に無いものを (b) カテゴリ不整合として分類。

> **二重検証**: Node 正規表現による抽出とは独立に、ripgrep による別経路抽出（988ユニーク宛先）でも同一の 65 件を再現。さらに全65件の `page.tsx`/`route.ts` 不在をファイルシステムで確認し、catch-all ルート（`[...slug]`）が存在しないことも確認済み。偽陽性は排除されている。

## 1. サマリ

| 指標 | 値 |
|---|--:|
| 実在ルート集合サイズ | 1109 |
| 検査対象 page.tsx ファイル数 | 920 |
| 抽出した内部href総数（page.tsx） | 19815 |
| 動的テンプレート（解決対象外） | 37 |
| **(a) 404候補（distinct）** | **65** |
| (a) 404候補（延べ出現数） | 223 |
| 404候補が含まれるファイル数 | 123 |
| **(b) カテゴリ不整合** | **0** |
| 参考: 共有層（components/lib/data）scan 内部href / 404 | 498 / 0 |

**結論**: `/articles/` カテゴリ不整合は **ゼロ**（全 `/articles/{X}` リンクは実在40カテゴリまたは実在静的ページ `by-industry` 等に解決）。一方、**404候補は distinct 65件・延べ223件**（123ファイルに分布）を検出。うち9件は有事シナリオ特集ハブの導線バグ（後述）、残り56件は記事スラッグ切れ。

## 2. (a) 404候補 — 有事シナリオ特集ハブの導線プレフィックス欠落（9件・確度高）

`src/app/special/emergency-scenario-analysis/page.tsx` の「特集内の主要導線」カード9枚のhrefが、絶対パス先頭の `/special/emergency-scenario-analysis` を欠いており、トップレベル（例: `/background`）を指している。9スラッグは `EMERGENCY_SCENARIO_SLUGS` と完全一致するため、特集配下ページへの導線が全滅している（各ページ自体は実在）。

- `/action-roadmap` → 実在するのは `/special/emergency-scenario-analysis/action-roadmap`
- `/background` → 実在するのは `/special/emergency-scenario-analysis/background`
- `/contract-risk` → 実在するのは `/special/emergency-scenario-analysis/contract-risk`
- `/industry-impact` → 実在するのは `/special/emergency-scenario-analysis/industry-impact`
- `/mechanism` → 実在するのは `/special/emergency-scenario-analysis/mechanism`
- `/quadruple-pressure` → 実在するのは `/special/emergency-scenario-analysis/quadruple-pressure`
- `/scenario-1` → 実在するのは `/special/emergency-scenario-analysis/scenario-1`
- `/scenario-2` → 実在するのは `/special/emergency-scenario-analysis/scenario-2`
- `/scenario-3` → 実在するのは `/special/emergency-scenario-analysis/scenario-3`

> 参照元: `src/app/special/emergency-scenario-analysis/page.tsx`（1ファイル、L179–187）。

## 3. (a) 404候補 — 記事スラッグ切れ（56件・延べ214件）

出現数降順。「参考: 類似実在slug」は編集距離による**機械的サジェスト**であり確定ではない（距離が大きいものは無関係の可能性が高い＝要人手確認）。是正可否・是正先はリン判断。

| # | リンク先(404候補) | 出現 | 参照file数 | 参考: 類似実在slug(編集距離) |
|--:|---|--:|--:|---|
| 1 | `/how-to-choose-new-electricity-supplier` | 49 | 49 | （近似なし・最近傍 d=8） |
| 2 | `/datacenter-electricity-cost-review` | 22 | 13 | `/data-center-electricity-cost-review` (d=1) |
| 3 | `/corporate-ppa-types` | 13 | 12 | — |
| 4 | `/onsite-ppa-explained` | 8 | 8 | （近似なし・最近傍 d=7） |
| 5 | `/peak-demand-management` | 7 | 7 | — |
| 6 | `/food-industry-electricity-cost-review` | 5 | 5 | `/food-factory-electricity-cost-review` (d=6) |
| 7 | `/automotive-parts-electricity-cost-review` | 5 | 5 | `/auto-parts-electricity-cost-review` (d=6) |
| 8 | `/electricity-liberalization-timeline` | 4 | 4 | — |
| 9 | `/renewable-surcharge-revision-history` | 4 | 4 | — |
| 10 | `/power-factor-improvement` | 4 | 4 | — |
| 11 | `/demand-response-explained` | 4 | 3 | — |
| 12 | `/restaurant-electricity-cost-review` | 4 | 2 | `/restaurant-chain-electricity-cost-review` (d=6) |
| 13 | `/chemical-industry-electricity-cost-review` | 3 | 3 | （近似なし・最近傍 d=9） |
| 14 | `/global-energy-procurement-overview` | 3 | 3 | — |
| 15 | `/major-countries-electricity-price-comparison` | 3 | 3 | （近似なし・最近傍 d=14） |
| 16 | `/electricity-cost-account-classification` | 3 | 3 | （近似なし・最近傍 d=12） |
| 17 | `/battery-solar-depreciation` | 3 | 3 | — |
| 18 | `/why-business-electricity-expensive-faq` | 3 | 3 | （近似なし・最近傍 d=11） |
| 19 | `/contract-review-flow-faq` | 3 | 3 | — |
| 20 | `/market-linked-plan-faq` | 3 | 3 | `/market-linked-plan` (d=4) |
| 21 | `/business-electricity-cost-components` | 3 | 3 | （近似なし・最近傍 d=12） |
| 22 | `/scope3-supply-chain-renewable-procurement` | 3 | 3 | — |
| 23 | `/electricity-contract-glossary` | 3 | 3 | `/electricity-contract-clauses` (d=6) |
| 24 | `/electricity-market-glossary` | 3 | 3 | — |
| 25 | `/electricity-facility-glossary` | 3 | 3 | — |
| 26 | `/sme-cost-reduction-ideas` | 3 | 3 | （近似なし・最近傍 d=8） |
| 27 | `/office-electricity-cost-review` | 2 | 2 | `/clinic-electricity-cost-review` (d=5) |
| 28 | `/ma-electricity-contract-succession` | 2 | 2 | （近似なし・最近傍 d=9） |
| 29 | `/company-split-electricity-contract` | 2 | 2 | — |
| 30 | `/datacenter-ai-demand` | 2 | 1 | — |
| 31 | `/electricity-price-high-plateau-reasons` | 2 | 2 | — |
| 32 | `/ev-charging-facility-contract` | 2 | 2 | — |
| 33 | `/corporate-ev-introduction` | 2 | 2 | — |
| 34 | `/corporate-ev-roi-calculation` | 2 | 2 | — |
| 35 | `/agriculture-electricity-cost-review` | 2 | 2 | （近似なし・最近傍 d=7） |
| 36 | `/electricity-contract-main-clauses` | 2 | 2 | `/electricity-contract-clauses` (d=5) |
| 37 | `/force-majeure-clause` | 2 | 2 | — |
| 38 | `/auto-renewal-clause` | 2 | 2 | `/auto-renewal-clause-risks` (d=6) |
| 39 | `/commercial-facility-electricity-cost-review` | 2 | 1 | `/cultural-facility-electricity-cost-review` (d=6) |
| 40 | `/compressor-energy-saving` | 1 | 1 | — |
| 41 | `/department-cost-allocation` | 1 | 1 | — |
| 42 | `/contract-termination-penalty` | 1 | 1 | — |
| 43 | `/tcfd-cdp-electricity-disclosure` | 1 | 1 | （近似なし・最近傍 d=8） |
| 44 | `/electricity-price-risk-simulation` | 1 | 1 | — |
| 45 | `/contract-period-guide` | 1 | 1 | — |
| 46 | `/contract-cancellation-clause-guide` | 1 | 1 | （近似なし・最近傍 d=8） |
| 47 | `/last-resort-supply-emergency-action` | 1 | 1 | `/last-resort-supply-emergency-response` (d=6) |
| 48 | `/renewable-energy-certificate` | 1 | 1 | （近似なし・最近傍 d=9） |
| 49 | `/gx-electricity-surcharge-impact` | 1 | 1 | — |
| 50 | `/distillery-electricity-cost-review` | 1 | 1 | `/textile-electricity-cost-review` (d=6) |
| 51 | `/small-business-electricity-cost-saving` | 1 | 1 | （近似なし・最近傍 d=9） |
| 52 | `/livestock-electricity-cost-review` | 1 | 1 | `/drugstore-electricity-cost-review` (d=6) |
| 53 | `/capacity-market-explained` | 1 | 1 | `/capacity-market-timeline` (d=6) |
| 54 | `/ceramics-electricity-cost-review` | 1 | 1 | `/clinic-electricity-cost-review` (d=5) |
| 55 | `/what-to-start-with-electricity-contract-review` | 1 | 1 | （近似なし・最近傍 d=8） |
| 56 | `/30-year-weather-data` | 1 | 1 | — |

### 注目所見（事実のみ・是正指示ではない）

- **`/how-to-choose-new-electricity-supplier`（49件／49ファイル）**: 都道府県・地域の `*-business-electricity-cost` ページ群に共通で埋め込まれた導線。単一の共通ブロック由来と推測される最大の切れリンク。実在の近縁は `/how-to-compare-electricity-suppliers`。
- **`/datacenter-electricity-cost-review`（22件／13ファイル）**: 実在ページは `/data-center-electricity-cost-review`（ハイフン有・編集距離1）。表記ゆれの可能性が高い。
- 業種別 `*-electricity-cost-review` 系（food-industry／automotive-parts／restaurant／chemical-industry／office／commercial-facility／agriculture／livestock／ceramics／distillery 等）に、実在ページと語幹の異なる宛先が散見される（命名ドリフト）。
- `*-faq`・`*-glossary` 系（why-business-electricity-expensive-faq／contract-review-flow-faq／market-linked-plan-faq／electricity-contract-glossary／electricity-market-glossary／electricity-facility-glossary 等）は、統合済みページや別命名の実在ページに解決していない。

## 4. (b) カテゴリ不整合（`/articles/{X}`）

**ゼロ件。** page.tsx 内の全 `/articles/{X}` リンクは、実在する40カテゴリ（`articleCategories`）または実在静的ルート（`/articles/by-industry` 等）に解決した。

参考: 実在カテゴリ 40 =
`accounting-tax`, `basic`, `benchmarks`, `by-municipality`, `by-region`, `case-studies`, `cfo-executive`, `contract-legal`, `corporate-ppa`, `datacenter-ai-demand`, `decarbonization`, `diagnostic-tools`, `emergency-response`, `energy-bcp`, `energy-dx`, `energy-equipment`, `ev-charging`, `faq`, `for-executives`, `global-energy`, `glossary`, `industry-guide`, `industry-region`, `internal-explanation`, `last-resort-supply`, `ma-organizational-change`, `market-data`, `monthly-review`, `municipality`, `plan-types`, `power-procurement`, `power-utility-guide`, `price-increase`, `price-trends`, `regulation-timeline`, `review-points`, `risk-scenarios`, `seasonal-strategy`, `sme-guide`, `subsidies`

## 5. 参考スコープ: 共有層（components / lib / data）

発注スコープ（page.tsx）に加え、`src/{components,lib,data}` 配下の `.ts/.tsx`（page.tsx除く 261 ファイル）の内部hrefも走査した（RelatedLinks等の共有リンクデータの切れは多ページに波及するため）。**404候補は0件**（抽出 498 href）。切れリンクは page.tsx 直書き側に集中している。

## 6. 次アクション（リン判断事項・本レポートでは未実施）

1. §2 有事特集ハブ導線9件のプレフィックス補完（単一ファイル・確度高）。
2. §3-注目所見の高出現2件（how-to-choose 49・datacenter 22）の是正先確定（新規作成 or 既存へ張り替え or リダイレクト追加）。
3. 残り記事スラッグ切れの棚卸し（統合済み→リダイレクト、命名ドリフト→張り替え、未作成→撒き餌キューへ）。

※ いずれも本発注では**修正未実施**。是正は方針確定後に別発注とする。

---

## 付録: 完全なファイル→リンク先一覧（記事スラッグ切れ56件・延べ214件）

有事特集9件は全て `src/app/special/emergency-scenario-analysis/page.tsx` 単一ファイル由来のため §2 を参照。以下は §3 の全参照元。

### `/how-to-choose-new-electricity-supplier` — 49件 / 49ファイル
- src/app/aichi-business-electricity-cost/page.tsx
- src/app/aomori-business-electricity-cost/page.tsx
- src/app/bunkyo-ku-business-electricity-cost/page.tsx
- src/app/ehime-business-electricity-cost/page.tsx
- src/app/fukui-business-electricity-cost/page.tsx
- src/app/fukuoka-business-electricity-cost/page.tsx
- src/app/fukushima-business-electricity-cost/page.tsx
- src/app/gifu-business-electricity-cost/page.tsx
- src/app/hiroshima-business-electricity-cost/page.tsx
- src/app/hokkaido-business-electricity-cost/page.tsx
- src/app/hyogo-business-electricity-cost/page.tsx
- src/app/ishikawa-business-electricity-cost/page.tsx
- src/app/itabashi-ku-business-electricity-cost/page.tsx
- src/app/kagawa-business-electricity-cost/page.tsx
- src/app/kagoshima-business-electricity-cost/page.tsx
- src/app/kanagawa-business-electricity-cost/page.tsx
- src/app/kochi-business-electricity-cost/page.tsx
- src/app/koto-ku-business-electricity-cost/page.tsx
- src/app/kumamoto-business-electricity-cost/page.tsx
- src/app/kyoto-business-electricity-cost/page.tsx
- src/app/mie-business-electricity-cost/page.tsx
- src/app/miyazaki-business-electricity-cost/page.tsx
- src/app/nagano-business-electricity-cost/page.tsx
- src/app/nagasaki-business-electricity-cost/page.tsx
- src/app/nakano-ku-business-electricity-cost/page.tsx
- src/app/nara-business-electricity-cost/page.tsx
- src/app/niigata-business-electricity-cost/page.tsx
- src/app/oita-business-electricity-cost/page.tsx
- src/app/okayama-business-electricity-cost/page.tsx
- src/app/okinawa-business-electricity-cost/page.tsx
- src/app/osaka-business-electricity-cost/page.tsx
- src/app/ota-ku-business-electricity-cost/page.tsx
- src/app/saga-business-electricity-cost/page.tsx
- src/app/setagaya-ku-business-electricity-cost/page.tsx
- src/app/shiga-business-electricity-cost/page.tsx
- src/app/shimane-business-electricity-cost/page.tsx
- src/app/shinagawa-ku-business-electricity-cost/page.tsx
- src/app/shizuoka-business-electricity-cost/page.tsx
- src/app/sumida-ku-business-electricity-cost/page.tsx
- src/app/taito-ku-business-electricity-cost/page.tsx
- src/app/tokushima-business-electricity-cost/page.tsx
- src/app/tokyo-business-electricity-cost/page.tsx
- src/app/toshima-ku-business-electricity-cost/page.tsx
- src/app/tottori-business-electricity-cost/page.tsx
- src/app/toyama-business-electricity-cost/page.tsx
- src/app/wakayama-business-electricity-cost/page.tsx
- src/app/yamagata-business-electricity-cost/page.tsx
- src/app/yamaguchi-business-electricity-cost/page.tsx
- src/app/yamanashi-business-electricity-cost/page.tsx

### `/datacenter-electricity-cost-review` — 22件 / 13ファイル
- src/app/chiyoda-ku-business-electricity-cost/page.tsx
- src/app/chuo-ku-business-electricity-cost/page.tsx
- src/app/demand-side-flexibility/page.tsx
- src/app/ibaraki-business-electricity-cost/page.tsx
- src/app/koto-ku-business-electricity-cost/page.tsx
- src/app/minato-ku-business-electricity-cost/page.tsx
- src/app/miyagi-business-electricity-cost/page.tsx
- src/app/ppa-contract-pitfalls/page.tsx
- src/app/ppa-price-benchmark-2026/page.tsx
- src/app/service-industry-cfo-electricity-strategy/page.tsx
- src/app/shibuya-ku-business-electricity-cost/page.tsx
- src/app/shinjuku-ku-business-electricity-cost/page.tsx
- src/app/tokyo-business-electricity-cost/page.tsx

### `/corporate-ppa-types` — 13件 / 12ファイル
- src/app/akita-business-electricity-cost/page.tsx
- src/app/aomori-business-electricity-cost/page.tsx
- src/app/chiba-business-electricity-cost/page.tsx
- src/app/gunma-business-electricity-cost/page.tsx
- src/app/ibaraki-business-electricity-cost/page.tsx
- src/app/manufacturing-cfo-electricity-strategy/page.tsx
- src/app/miyagi-business-electricity-cost/page.tsx
- src/app/retail-cfo-electricity-strategy/page.tsx
- src/app/saitama-business-electricity-cost/page.tsx
- src/app/scope2-reduction-cfo-responsibility/page.tsx
- src/app/service-industry-cfo-electricity-strategy/page.tsx
- src/app/tochigi-business-electricity-cost/page.tsx

### `/onsite-ppa-explained` — 8件 / 8ファイル
- src/app/fukuoka-business-electricity-cost/page.tsx
- src/app/kagoshima-business-electricity-cost/page.tsx
- src/app/kumamoto-business-electricity-cost/page.tsx
- src/app/miyazaki-business-electricity-cost/page.tsx
- src/app/nagasaki-business-electricity-cost/page.tsx
- src/app/oita-business-electricity-cost/page.tsx
- src/app/okinawa-business-electricity-cost/page.tsx
- src/app/saga-business-electricity-cost/page.tsx

### `/peak-demand-management` — 7件 / 7ファイル
- src/app/auto-repair-bodyshop-electricity-cost-review/page.tsx
- src/app/car-dealership-electricity-cost-review/page.tsx
- src/app/film-production-studio-electricity-cost-review/page.tsx
- src/app/gas-station-electricity-cost-review/page.tsx
- src/app/karaoke-box-electricity-cost-review/page.tsx
- src/app/parking-facility-electricity-cost-review/page.tsx
- src/app/wedding-banquet-hall-electricity-cost-review/page.tsx

### `/food-industry-electricity-cost-review` — 5件 / 5ファイル
- src/app/aomori-business-electricity-cost/page.tsx
- src/app/hokkaido-business-electricity-cost/page.tsx
- src/app/manufacturing-cfo-electricity-strategy/page.tsx
- src/app/niigata-business-electricity-cost/page.tsx
- src/app/yamagata-business-electricity-cost/page.tsx

### `/automotive-parts-electricity-cost-review` — 5件 / 5ファイル
- src/app/gunma-business-electricity-cost/page.tsx
- src/app/iwate-business-electricity-cost/page.tsx
- src/app/manufacturing-cfo-electricity-strategy/page.tsx
- src/app/saitama-business-electricity-cost/page.tsx
- src/app/tochigi-business-electricity-cost/page.tsx

### `/electricity-liberalization-timeline` — 4件 / 4ファイル
- src/app/energy-saving-act-revision-timeline/page.tsx
- src/app/gx-promotion-act-roadmap/page.tsx
- src/app/supply-demand-adjustment-market-timeline/page.tsx
- src/app/wheeling-charge-revenue-cap-timeline/page.tsx

### `/renewable-surcharge-revision-history` — 4件 / 4ファイル
- src/app/energy-saving-act-revision-timeline/page.tsx
- src/app/gx-promotion-act-roadmap/page.tsx
- src/app/supply-demand-adjustment-market-timeline/page.tsx
- src/app/wheeling-charge-revenue-cap-timeline/page.tsx

### `/power-factor-improvement` — 4件 / 4ファイル
- src/app/furniture-manufacturing-electricity-cost-review/page.tsx
- src/app/metal-stamping-sheet-metal-electricity-cost-review/page.tsx
- src/app/rubber-products-electricity-cost-review/page.tsx
- src/app/shipbuilding-electricity-cost-review/page.tsx

### `/demand-response-explained` — 4件 / 3ファイル
- src/app/manufacturing-cfo-electricity-strategy/page.tsx
- src/app/retail-cfo-electricity-strategy/page.tsx
- src/app/service-industry-cfo-electricity-strategy/page.tsx

### `/restaurant-electricity-cost-review` — 4件 / 2ファイル
- src/app/setagaya-ku-business-electricity-cost/page.tsx
- src/app/taito-ku-business-electricity-cost/page.tsx

### `/chemical-industry-electricity-cost-review` — 3件 / 3ファイル
- src/app/chiba-business-electricity-cost/page.tsx
- src/app/ibaraki-business-electricity-cost/page.tsx
- src/app/manufacturing-cfo-electricity-strategy/page.tsx

### `/global-energy-procurement-overview` — 3件 / 3ファイル
- src/app/china-southeast-asia-electricity-procurement/page.tsx
- src/app/europe-energy-crisis-lessons/page.tsx
- src/app/global-renewable-procurement-strategy/page.tsx

### `/major-countries-electricity-price-comparison` — 3件 / 3ファイル
- src/app/china-southeast-asia-electricity-procurement/page.tsx
- src/app/europe-energy-crisis-lessons/page.tsx
- src/app/global-renewable-procurement-strategy/page.tsx

### `/electricity-cost-account-classification` — 3件 / 3ファイル
- src/app/electricity-cost-abc-allocation/page.tsx
- src/app/electricity-price-pass-through-legal/page.tsx
- src/app/energy-saving-tax-incentives/page.tsx

### `/battery-solar-depreciation` — 3件 / 3ファイル
- src/app/electricity-cost-abc-allocation/page.tsx
- src/app/electricity-price-pass-through-legal/page.tsx
- src/app/energy-saving-tax-incentives/page.tsx

### `/why-business-electricity-expensive-faq` — 3件 / 3ファイル
- src/app/electricity-price-increase-notice-faq/page.tsx
- src/app/last-resort-supply-faq/page.tsx
- src/app/mid-term-cancellation-penalty-faq/page.tsx

### `/contract-review-flow-faq` — 3件 / 3ファイル
- src/app/electricity-price-increase-notice-faq/page.tsx
- src/app/last-resort-supply-faq/page.tsx
- src/app/mid-term-cancellation-penalty-faq/page.tsx

### `/market-linked-plan-faq` — 3件 / 3ファイル
- src/app/electricity-price-increase-notice-faq/page.tsx
- src/app/last-resort-supply-faq/page.tsx
- src/app/mid-term-cancellation-penalty-faq/page.tsx

### `/business-electricity-cost-components` — 3件 / 3ファイル
- src/app/high-voltage-vs-extra-high-voltage-differences/page.tsx
- src/app/renewable-surcharge-increase-impact/page.tsx
- src/app/what-is-power-factor/page.tsx

### `/scope3-supply-chain-renewable-procurement` — 3件 / 3ファイル
- src/app/itabashi-ku-business-electricity-cost/page.tsx
- src/app/ota-ku-business-electricity-cost/page.tsx
- src/app/sumida-ku-business-electricity-cost/page.tsx

### `/electricity-contract-glossary` — 3件 / 3ファイル
- src/app/rate-structure-glossary/page.tsx
- src/app/renewable-energy-glossary/page.tsx
- src/app/supply-demand-planning-glossary/page.tsx

### `/electricity-market-glossary` — 3件 / 3ファイル
- src/app/rate-structure-glossary/page.tsx
- src/app/renewable-energy-glossary/page.tsx
- src/app/supply-demand-planning-glossary/page.tsx

### `/electricity-facility-glossary` — 3件 / 3ファイル
- src/app/rate-structure-glossary/page.tsx
- src/app/renewable-energy-glossary/page.tsx
- src/app/supply-demand-planning-glossary/page.tsx

### `/sme-cost-reduction-ideas` — 3件 / 3ファイル
- src/app/small-store-monthly-electricity-trend/page.tsx
- src/app/soho-sole-proprietor-electricity-tax/page.tsx
- src/app/tenant-sub-meter-electricity-billing/page.tsx

### `/office-electricity-cost-review` — 2件 / 2ファイル
- src/app/broadcasting-electricity-cost-review/page.tsx
- src/app/publishing-electricity-cost-review/page.tsx

### `/ma-electricity-contract-succession` — 2件 / 2ファイル
- src/app/business-transfer-name-change-procedure/page.tsx
- src/app/group-electricity-consolidation/page.tsx

### `/company-split-electricity-contract` — 2件 / 2ファイル
- src/app/business-transfer-name-change-procedure/page.tsx
- src/app/group-electricity-consolidation/page.tsx

### `/datacenter-ai-demand` — 2件 / 1ファイル
- src/app/datacenter-summer-cooling-strategy/page.tsx

### `/electricity-price-high-plateau-reasons` — 2件 / 2ファイル
- src/app/electricity-price-outlook-2026/page.tsx
- src/app/renewable-energy-expansion-price-impact/page.tsx

### `/ev-charging-facility-contract` — 2件 / 2ファイル
- src/app/ev-charging-employee-billing/page.tsx
- src/app/ev-charging-off-peak-tou/page.tsx

### `/corporate-ev-introduction` — 2件 / 2ファイル
- src/app/ev-charging-employee-billing/page.tsx
- src/app/ev-charging-off-peak-tou/page.tsx

### `/corporate-ev-roi-calculation` — 2件 / 2ファイル
- src/app/ev-charging-employee-billing/page.tsx
- src/app/ev-charging-off-peak-tou/page.tsx

### `/agriculture-electricity-cost-review` — 2件 / 2ファイル
- src/app/kumamoto-business-electricity-cost/page.tsx
- src/app/saga-business-electricity-cost/page.tsx

### `/electricity-contract-main-clauses` — 2件 / 2ファイル
- src/app/price-revision-clause-reading/page.tsx
- src/app/supply-point-identification-number/page.tsx

### `/force-majeure-clause` — 2件 / 2ファイル
- src/app/price-revision-clause-reading/page.tsx
- src/app/supply-point-identification-number/page.tsx

### `/auto-renewal-clause` — 2件 / 2ファイル
- src/app/price-revision-clause-reading/page.tsx
- src/app/supply-point-identification-number/page.tsx

### `/commercial-facility-electricity-cost-review` — 2件 / 1ファイル
- src/app/sumida-ku-business-electricity-cost/page.tsx

### `/compressor-energy-saving` — 1件 / 1ファイル
- src/app/auto-repair-bodyshop-electricity-cost-review/page.tsx

### `/department-cost-allocation` — 1件 / 1ファイル
- src/app/by-role/page.tsx

### `/contract-termination-penalty` — 1件 / 1ファイル
- src/app/by-role/page.tsx

### `/tcfd-cdp-electricity-disclosure` — 1件 / 1ファイル
- src/app/by-role/page.tsx

### `/electricity-price-risk-simulation` — 1件 / 1ファイル
- src/app/carbon-pricing-electricity-impact/page.tsx

### `/contract-period-guide` — 1件 / 1ファイル
- src/app/emergency-missed-renewal-deadline/page.tsx

### `/contract-cancellation-clause-guide` — 1件 / 1ファイル
- src/app/emergency-missed-renewal-deadline/page.tsx

### `/last-resort-supply-emergency-action` — 1件 / 1ファイル
- src/app/executive-business-continuity-risk/page.tsx

### `/renewable-energy-certificate` — 1件 / 1ファイル
- src/app/executive-esg-electricity-disclosure/page.tsx

### `/gx-electricity-surcharge-impact` — 1件 / 1ファイル
- src/app/executive-mid-term-plan-electricity/page.tsx

### `/distillery-electricity-cost-review` — 1件 / 1ファイル
- src/app/kagoshima-business-electricity-cost/page.tsx

### `/small-business-electricity-cost-saving` — 1件 / 1ファイル
- src/app/leather-electricity-cost-review/page.tsx

### `/livestock-electricity-cost-review` — 1件 / 1ファイル
- src/app/miyazaki-business-electricity-cost/page.tsx

### `/capacity-market-explained` — 1件 / 1ファイル
- src/app/renewable-energy-expansion-price-impact/page.tsx

### `/ceramics-electricity-cost-review` — 1件 / 1ファイル
- src/app/saga-business-electricity-cost/page.tsx

### `/what-to-start-with-electricity-contract-review` — 1件 / 1ファイル
- src/app/subsidy-vs-contract-review-priority/page.tsx

### `/30-year-weather-data` — 1件 / 1ファイル
- src/app/weather-electricity-price-link/page.tsx

