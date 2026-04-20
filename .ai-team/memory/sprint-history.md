# スプリント履歴

## Sprint 0（✅ 完了 2026-04-18）
- GA4/Search Console疎通確認、チーム定義、コードレビュー、改善提案9件策定
- サイト再定義（シミュレーター→総合プラットフォーム）、リブランディング「法人電気料金ナビ」

## Sprint 1（✅ 完了 2026-04-19、11/11タスク + batch4全完了）

### Sprint 1 タスク（11件完了）
- S1-01〜S1-11: 全完了（CTA追加、計算ロジック分離、テスト、ストレス倍率検証、GA4スクリプト、キーワード分析、Lighthouse計測、リンク切れチェック、ContactCtaCard全展開、リブランディング）

### batch4（8タスク、全完了 PR#22〜31）
| PR | 内容 |
|----|------|
| #22 | 特集シリーズ6レイアウトにCTA追加 |
| #23 | googleapis依存をdevDependenciesに移動 |
| #24 | h1/h2キーワードスタッフィング修正 + 容量拠出金出典追加 |
| #25 | 動的ルート（振り返り[slug]）にCTA追加 |
| #26 | publishedAt日付修正（2025→2026） |
| #27 | /search のFuse.jsアップグレード |
| #28 | テストカバレッジ拡充（3ファイル258行） |
| #29-31 | カテゴリ別OGP動的生成 + 日本語フォント対応 |

## Sprint 2（🔄 進行中 2026-04-19〜）

### S2-02: 記事ハブUX改善 ✅ PR#33マージ済み
- ペルソナ別入口カード3枚（総務部・自治体・エネルギー管理士）
- 35カテゴリを4大グループにアコーディオン化
- ネイティブHTML details要素、Client JSゼロ
- 軽微指摘: page.tsx 618行（サブコンポーネント化推奨）

### S2-03: HomePageClient分割 ✅ PR#32マージ済み
- 989行→107行（+5子コンポーネント計1,254行）
- Chart.js動的インポート対応
- 軽微指摘: 3ファイルが200行超、未使用型あり

### S2-06: キーワード強化記事30本 🔄 進行中
- Batch 1（PR#34）✅ マージ済み — 5本（検索需要ベース）
- Batch 2（PR#35）✅ マージ済み — 5本（見直し・設備・中小企業）
- Batch 3 未マージ — 5本（中小企業・EV・経理税務）
- Batch 4 未マージ — 5本（データセンター・海外・M&A・BCP）
- Batch 5 未マージ — 5本（見直し・事例・社内説明・契約）
- Batch 6 未マージ — 5本（自治体・再エネ賦課金・違約金・工場・リスクヘッジ）
- ⚠️ 問題: Batch 1・2・3・5の20本にContactCtaCard欠落

### その他の進行中タスク
- /kenji-eda ページSEO強化（タスクファイル準備済み、未実装）
- pps-net.org リンク施策（EDA作業、未着手）
- eic-jp.org リンク施策（EDA作業、未着手）

---

## 2026-04-20 パフォーマンス＋SEO 大攻勢日（1 日で PR 5 本マージ）

**背景**: Sprint 1/2 の基盤整備を踏まえ、パフォーマンス改善と既存ページの SEO 最適化を集中実施。新記事ではなく、**既に認知されているページの CTR を底上げ**する戦略に転換。

### マージ済み PR

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #43 | `perf/chart-deferred-mount` | Chart.js 遅延マウント（requestIdleCallback gating） | `e49567e` |
| #44 | `tooling/psi-baseline` | PSI 計測スクリプト（`scripts/psi-baseline.mjs`、271 行） | `3e5bc05` |
| #45 | `seo/capacity-contribution-rewrite` | T-15: `/capacity-contribution-explained` 戦略リライト（4 レバー） | `d5ce4a4` |
| #46 | `seo/top10-ctr-improvement-6pages` | T-16: 順位 4〜10 圏 0-click 6 ページの title/meta 書き換え | `c405ea6` |
| #47 | `seo/alist-5pages-rewrite` | T-17: A-list 5 ページの title/H1/導入文リライト | `15b0b02` |

### パフォーマンス結果（PR #43 効果、PSI 計測）

| 指標 | Before (Lighthouse CLI) | After (PSI) | 改善 |
|---|---:|---:|---:|
| Mobile Performance | 74 | **97** | **+23** |
| Mobile LCP | 4.9s | **2.3s** | **−53%** |
| Mobile TBT | 276ms | **119ms** | **−57%** |
| Desktop Performance | 99 | 95 | 誤差範囲 |
| Desktop LCP | 1.0s | 1.0s | 維持 |

Mobile LCP "Good" 基準（2.5s 以下）・TBT "Good" 基準（200ms 以下）ともにクリア。

### SEO 施策（T-15/T-16/T-17 合算見込み）

- **T-15** `/capacity-contribution-explained`: 順位 14→7 狙い、月 +6〜18 clicks
- **T-16** 6 ページ title/meta: 月 +10〜12 clicks
- **T-17** A-list 5 ページ + H1/導入文: 月 +5〜10 clicks
- **合算目標**: 月 +20〜35 clicks（現状 12 → 32〜47/月）
- **効果計測**: 2026-05-18 頃 GSC 再取得で評価

### T-17 の特筆事項

Claude Code が prompt の仮説を鵜呑みにせず、**`scripts/sc-per-page-query.mjs` を新設して SC 実データで仮説検証**してから実装。

- `/why-business-electricity-prices-rise` 想定「10 clicks / 166 imp」→ 実測「1 click / 22 imp」で大幅乖離発覚、Option B（攻めのリライト）採用
- 0 imp の 3 ページも未来投資として仕込み

### 計測基盤整備

- **PSI API**（PR #44）: .env.local に PSI_API_KEY 設定で運用可能、PSI は安定（3 回完全同値）
- **SC per-page query**（T-17 副産物）: `scripts/sc-per-page-query.mjs` で 1 ページ単位 top queries 取得可能
- 今後のパフォーマンス・SEO 効果計測は **PSI + SC per-page** の 2 本立てで運用

### 次の判断（2026-05-05 / 05-18）

GSC 再取得で効果評価後:
- **選択肢 B**: Batch A G-01 新規記事 `/fuel-vs-market-adjustment-comparison`
- **選択肢 C**: `/articles` 性能改善（TBT 673ms → 削減）

### 夜間追加マージ PR（#48〜#52）

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #48 | `chore/pending-tasks-refresh-2026-04-20` | A: pending-tasks.md を 2026-04-20 最終状態で書き直し | `0844724` |
| #49 | `measure/psi-after-2026-04-20-evening` | D: PR #43〜#47 全マージ後の PSI After 計測（4 ページ × Mobile/Desktop） | `49211f7` |
| #50 | `docs/articles-tbt-strategy-2026-04-20` | C: /articles TBT 673ms 削減の施策設計レポート | `d2ecc24` |
| #51 | `content/batch-a-g01-fuel-vs-market-comparison` | B: G-01 新記事 `/fuel-vs-market-adjustment-comparison`（約 4,200 字、10 項目比較表） | `036b10d` |
| #52 | `docs/home-lcp-regression-investigation` | E: `/` Mobile Perf 97→81 退行の原因調査（Y=計測ノイズ確定） | `0cac7df` |

**1 日のマージ PR 合計: 10 本**（#43〜#52）。

### タスク E の重要な副次発見（計測運用ルール化）

- `scripts/psi-baseline.mjs` の `--runs 3` で「完全同値」が返る現象は、**PSI API 内部キャッシュの再返却**であり測定の安定性を示すものではない
- 真の中央値を取るには**時刻をまたいだ個別実行**が必要
- **運用ルール**: PR マージ直後 30 分以内の PSI 計測は避ける（Vercel Edge cache-bust 直後の cold hit に当たると実力値より悪く出る）
- 翌日以降 3 日連続で朝・夕計測し、`/` Mobile Perf 90〜97 レンジ維持を確認

### 新記事 G-01 について

- 本番 URL: `https://simulator.eic-jp.org/fuel-vs-market-adjustment-comparison`
- primary query「燃料費調整額 市場価格調整額 違い」で現状 A-list 6 位
- 期待: 4 週間後（2026-05-18）GSC で 3 位前後へ、月 +3〜10 clicks
- 既存 `/fuel-cost-adjustment` / `/market-price-adjustment` の RelatedLinks 先頭に G-01 追加済み（トピックオーソリティ底上げ）

### 外部施策（EDA 担当、並行進行待ち）

- pps-net.org 執筆者リンク施策（月 50 万 PV の強力リンク源）
- eic-jp.org フッター simulator.eic-jp.org リンク追加
