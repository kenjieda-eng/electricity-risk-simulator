# 未完了・次にやるべきタスク（2026-04-20 夕方 最終更新）

## 本日（2026-04-20）の最終成果サマリー

### ✅ 完了した施策（パフォーマンス＋SEO 大攻勢日・1 日 5 PR マージ）

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #43 | `perf/chart-deferred-mount` | Chart.js 遅延マウント（`requestIdleCallback` gating） | `e49567e` |
| #44 | `chore/psi-baseline-script` | PSI 計測スクリプト `scripts/psi-baseline.mjs`（271 行、追加依存なし） | `3e5bc05` |
| #45 | `seo/capacity-contribution-rewrite` | T-15: `/capacity-contribution-explained` 戦略リライト（4 レバー） | `d5ce4a4` |
| #46 | `seo/top10-ctr-improvement-6pages` | T-16: 順位 4〜10 圏 0-click 6 ページ title/meta 書き換え | `c405ea6` |
| #47 | `seo/alist-5pages-rewrite` | T-17: A-list 5 ページ title/H1/導入文リライト | `15b0b02` |

すべて本日中に Vercel 本番（`https://simulator.eic-jp.org`）へ反映済み。

### パフォーマンス結果（PR #43 / PSI 実測）

| 指標 | Before (Lighthouse CLI) | After (PSI) | 改善 |
|---|---:|---:|---:|
| Mobile Performance | 74 | **97** | **+23** |
| Mobile LCP | 4.9s | **2.3s** | **−53%** |
| Mobile TBT | 276ms | **119ms** | **−57%** |
| Desktop Performance | 99 | 95 | 誤差範囲 |
| Desktop LCP | 1.0s | 1.0s | 維持 |

Mobile LCP（"Good" < 2.5s）・Mobile TBT（"Good" < 200ms）ともに Core Web Vitals 基準クリア。PSI は 3 回計測で完全同値、ローカル Lighthouse CLI で観測した ±13 点の揺らぎは計測機側ノイズと確定。

詳細ログ:
- `.ai-team/PSI_MEASUREMENT_2026-04-20_1538.md`（Mobile）
- `.ai-team/PSI_MEASUREMENT_2026-04-20_1603.md`（Desktop）
- `.ai-team/LIGHTHOUSE_2026-04-20.md`（Before 値の根拠）

### SEO 施策（T-15/T-16/T-17 合算見込み）

- **T-15** `/capacity-contribution-explained` 戦略リライト: 月 117 imp / 0 click / 平均順位 14.15 → page 1 復帰狙い。タイトル・description・導入文クエリ完全一致化、容量拠出金特化 FAQ 4 問 + FAQPage JSON-LD、3 源流ページ（why-business-electricity-prices-rise / market-price-adjustment / electricity-rate-revision-mechanism）本文からの内部リンク追加。見込み月 +6〜18 clicks。
- **T-16** 順位 4〜10 圏 0-click 6 ページ title/meta 書き換え: 本文・H1 不変、メタのみ圧縮＋クエリ網羅。カテゴリハブは `ArticleCategory` 型に optional `seoTitle` / `seoDescription` を追加し `[categorySlug]/page.tsx` で優先解決。見込み月 +10〜12 clicks。
- **T-17** A-list 5 ページ title/H1/導入文リライト: 事前に `scripts/sc-per-page-query.mjs` で GSC 実データを page 単位取得してから実装。`/why-business-electricity-prices-rise` は prompt 想定（10 clicks / 166 imp）と実測（1 click / 22 imp）の乖離を検知し Option B（攻め）を採用。見込み月 +5〜10 clicks。
- **合算目標**: 月 +20〜35 clicks（現状 12 → 32〜47/月）。

### 計測基盤整備

- **PSI API（PR #44）**: `.env.local` に `PSI_API_KEY` 設定で運用可能。サーバー側計測なので安定（3 run 完全同値）
- **SC per-page query（T-17 副産物）**: `scripts/sc-per-page-query.mjs` で 1 ページ単位の top queries を dimensionFilter で取得可能
- 今後の SEO・パフォーマンス効果計測は **PSI + SC per-page** の 2 本立てで運用

---

## 次のチャットで最初にやること

本日夕方以降に残るタスクは以下 3 本（実行順: D → C → B が推奨だが、本日の残時間に応じて）。

### タスク B: Batch A G-01 新記事 `/fuel-vs-market-adjustment-comparison`
- 依頼文: `.ai-team/tasks/2026-04-20-evening/B-batch-a-g01-article.md`
- 根拠: `.ai-team/ARTICLES_BATCH_A_PLAN_2026-04-20.md` §記事 1: G-01
- 期待効果: 「燃料費調整額 市場価格調整額 違い」比較クエリを新ページで吸収、3 ページ全体のトピックオーソリティ底上げ。月 +3〜10 clicks 見込み。

### タスク C: `/articles` TBT 改善 施策設計レポート
- 依頼文: `.ai-team/tasks/2026-04-20-evening/C-articles-tbt-improvement.md`
- 現状: `/articles` Mobile Perf 74 / TBT 673ms（サイト内ワースト、他ページは 90〜97）
- 成果物: `.ai-team/ARTICLES_PAGE_TBT_STRATEGY_2026-04-20.md`（ボトルネック定量検証 + 施策 3〜5 案比較表 + P0 判断 + 実装 PR 粒度案）。**実装は別 PR**

### タスク D: PSI After 計測取り直し（PR #43〜#47 全マージ後）
- 依頼文: `.ai-team/tasks/2026-04-20-evening/D-psi-after-measurement.md`
- 対象: `/`, `/compare`, `/articles`, `/capacity-contribution-explained`（× Mobile/Desktop × 3 runs）
- 前提: `.env.local` に `PSI_API_KEY` 設定済みか事前確認
- 成果物: `.ai-team/PSI_MEASUREMENT_2026-04-20_XXXX.md`

---

## 効果計測マイルストーン

| 日付 | 計測内容 | 見るべきもの |
|---|---|---|
| 2026-05-05（月） | GSC 中間計測 | T-15/T-16/T-17 対象ページの imp / pos 動き、G-01 新記事の初期シグナル |
| 2026-05-18（月） | GSC 本計測 | 全対象ページの click 変化、T-15 は特に「容量拠出金」順位 |

---

## 外部施策（EDA 担当、並行進行）

- **pps-net.org 執筆者リンク施策**: 月 50 万 PV の強力リンク源。全記事に `simulator.eic-jp.org/kenji-eda` リンクを入れる
- **eic-jp.org フッター**: `simulator.eic-jp.org` へのリンク追加

EDA が進めたタイミングでリンに一声、bridge 施策として pending-tasks に記録。

---

## 次の判断（2026-05-18 GSC 再取得後）

GSC 再取得で効果評価後の選択肢:
- **選択肢 B'（Batch A 続編）**: G-01 が完了していれば Batch A 残り 2 本 G-04 / G-05
- **選択肢 C'（TBT 実装）**: `/articles` TBT 改善 施策設計レポート採用案どおり実装
- **選択肢 D'（追加リライト）**: SEO 効果が想定以下なら A/B 観点で追加リライト
