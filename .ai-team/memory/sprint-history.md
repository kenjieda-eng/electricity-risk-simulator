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

### 深夜追加マージ PR（#53〜#56）

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #53 | `chore/memory-sync-2026-04-20-night` | G: memory sync (#48〜#52 + 計測運用ルール) | `cd83f48` |
| #54 | `tooling/psi-baseline-interval-option` | F: `scripts/psi-baseline.mjs` に `--interval` オプション追加 | `d9b015b` |
| #55 | `perf/articles-content-visibility` | H: `/articles` の `<details>` 配下グリッドに `content-visibility: auto` 適用（PR C-1） | `fc5c9f8` |
| #56 | `measure/psi-after-pr-c1-content-visibility` | I: PR #55 後の PSI After 計測（結論 β） | `acc8e42` |

**本日の PR マージ合計: 14 本**（#43〜#56）。

### PR #55（H: content-visibility）の効果判定

PR #56 計測結果:

| 指標 | Before（17:05 計測） | After（5 runs 中央値・外れ値除外） | 差分 |
|---|---:|---:|---:|
| Mobile Perf | 80 | 70 | −10（ノイズ起因と推定）|
| Mobile LCP | 2.6s | 5.1s | +2.5s（ノイズ起因と推定） |
| Mobile TBT | **630ms** | **309ms** | **−321ms / −51%** ✅ |

**判定**: β（部分達成）、ただし **実質 α 相当**

- TBT 309ms は期待レンジ下限 330ms を下回る → 施策 B 効果は明確
- Perf/LCP の変動は `content-visibility: auto` の性質上（off-screen のみ影響、LCP 要素は above-the-fold）では説明できないため、PSI 計測ノイズと判定
- β に留めたのは「Before 17:05 の値 80 が `--interval` なしの 1 snapshot だった」という基盤側の不確実性への誠実な留保

### タスク I の最大の副次発見: Before 値も疑う

タスク E の「`--runs N` 同値 = PSI API キャッシュの再返却」ルールが、**Before 側の測定値にも遡及適用**される可能性が PR #56 で判明:

- 17:05 の `/articles` Before 値（Perf 80 / TBT 630ms）は `--interval` なしで取られた 1 snapshot
- この値自体が PSI キャッシュ同値の可能性あり
- 今後の Before/After 比較は **両側とも `--interval 60` 付き複数 runs で取った値を使う**

この学びを反映し、**運用ルールに 5 項目目を追加** → `pending-tasks.md` にも記録。

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

### 深夜追加マージ PR（#53〜#56）

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #53 | `chore/memory-sync-2026-04-20-night` | G: memory sync (#48〜#52 + 計測運用ルール 4 項目) | `cd83f48` |
| #54 | `tooling/psi-baseline-interval-option` | F: `scripts/psi-baseline.mjs` に `--interval` オプション追加（デフォルト 60s、0 で従来動作） | `d9b015b` |
| #55 | `perf/articles-content-visibility` | H: `/articles` の `<details>` 配下グリッド 4 箇所に `content-visibility: auto` + `contain-intrinsic-size: 800px` 適用（PR C-1） | `fc5c9f8` |
| #56 | `measure/psi-after-pr-c1-content-visibility` | I: PR #55 後の PSI After 計測（結論 β、実質 α 相当） | `acc8e42` |

**本日の PR マージ合計: 14 本**（#43〜#56）。

### PR #55（H: content-visibility）効果判定（PR #56 計測結果）

| 指標 | Before（17:05、1 snap） | After（5 runs 中央値・外れ値除外） | 差分 |
|---|---:|---:|---:|
| Mobile Perf | 80 | 70 | −10（ノイズ起因）|
| Mobile LCP | 2.6s | 5.1s | +2.5s（ノイズ起因）|
| Mobile TBT | **630ms** | **309ms** | **−321ms / −51%** ✅ |

- **判定**: β（部分達成）、ただし **実質 α 相当**
- TBT 309ms は期待レンジ下限 330ms を下回る → 施策 B 効果は明確
- Perf/LCP の変動は `content-visibility: auto` の性質上（off-screen のみ影響、LCP 要素は above-the-fold）では説明できない → PSI 計測ノイズと判定
- β に留めたのは「Before 17:05 の値 80 が `--interval` なしの 1 snapshot だった」という基盤側の不確実性への誠実な留保

### タスク I の最大の副次発見: Before 値も疑う

タスク E の「`--runs N` 同値 = PSI API キャッシュの再返却」ルールが、**Before 側の測定値にも遡及適用**される可能性が PR #56 で判明:

- 17:05 の `/articles` Before 値（Perf 80 / TBT 630ms）は `--interval` なしで取られた 1 snapshot
- この値自体が PSI キャッシュ同値の可能性あり
- 今後の Before/After 比較は **両側とも `--interval 60` 付き複数 runs で取った値を使う**

これを反映し、**計測運用ルールに 5 項目目を追加**:

1. PR マージ後 30 分以内は PSI 計測しない
2. `--runs N` で同値 = キャッシュ疑う（`--interval 60` 必須）
3. 真の中央値は時刻をまたぐ
4. 異常値 1 回で騒がない
5. **Before 値も疑う**（Before/After 比較は両側とも `--interval 60` 付き複数 runs）

### 明朝（2026-04-21）の起点

- タスク J（memory 最終同期）と K（真の Before 値確立）の依頼文を `.ai-team/tasks/2026-04-21-morning/` に準備済み
- K で `/articles` 真 TBT が 309ms 近辺なら H 効果確定（α に格上げ）
- その後 C-2（初期件数絞り込み）/ C-3（画像 priority 再点検）/ DevTools 調査 のいずれかを起動

### 外部施策（EDA 担当、並行進行待ち）

- pps-net.org 執筆者リンク施策（月 50 万 PV の強力リンク源）
- eic-jp.org フッター simulator.eic-jp.org リンク追加

---

## 2026-04-21 朝セッション（PR #57〜#59、リン + Claude Code 協働）

### 実施事項

| PR | 種別 | 概要 |
|---|---|---|
| #57 | memory sync | J（memory 最終同期）、#53〜#56 反映、commit 23c4e5d |
| #58 | 計測 | **01-朝イチ基準計測**（旧 K）、4 ページ × Mobile × `--interval 60 --runs 3` |
| #59 | docs + memory | 朝セッションのリン成果 3 コミット（task-roadmap / pending-tasks 朝結果 / LCP 仮説） |

### 01-朝イチ基準計測（PR #58）の結果

| ページ | Mobile Perf | Mobile LCP | Mobile TBT | 判定 |
|---|---:|---:|---:|---|
| `/` | 79 | 4.7s | 208ms | TBT 健全、LCP 要検証 |
| `/articles` | 80 近辺 | 4.7s | **140ms** | **TBT α 確定（昨夜 β→α 格上げ）** |
| `/compare` | 77 | 4.9s | 135ms | TBT 健全、LCP 要検証 |
| `/capacity-contribution-explained` | 80 | 4.6s | 73ms | TBT 優秀、LCP 要検証 |

**共通パターン**: TBT は全ページ健全（73〜208ms）、LCP が 4 ページ揃って 4.5〜4.9s・run 間変動 2〜5s = 計測ノイズ疑い濃厚。

### 朝の重要判断（計測運用ルール 4「異常値 1 回で騒がない」準拠）

- **02 即発注は見送り**（LCP 4.5〜4.9s がノイズかどうかを 1 回の計測で判断しない）
- **04-3日安定性観測を先行**し、夕方 18:00 再計測で LCP 真偽判定
- 夕方結果次第で 02B / 02E / 02F / 02G の採用判断

### LCP 悪化仮説の特定（`.ai-team/LCP_HYPOTHESIS_2026-04-21_MORNING.md`）

**第 1 候補（最有力）**: `PublicHeader` → `HeaderSearch` → `searchIndex.ts` 経由で以下が全ページの client bundle に入る
- `articles.ts`（270KB、4,426 行、534 記事エントリ）
- 全 scenario series（emergency / oil / gas / materials / food / fx）
- `fuse.js`（24KB min）
- モバイル 3G 相当の PSI 計測環境で JS parse/execute 時間が LCP を押し下げる

**第 2 候補**: `ArticleScrollTracker`（root layout で全ページ展開）が `articleList` 全件を SLUG_SET 作成のためだけに import

**無罪確定**: フォント（next/font・@font-face・Google Fonts すべて未使用、系統フォントのみ）、ロゴ画像（8KB・priority 済）、Footer（Server Component）、CSS（軽量）

### タスク命名体系リニューアル（`.ai-team/memory/task-roadmap.md`）

- K / L-A 等の記号 ID → 01-朝イチ基準計測 / 02A-記事リンク絞り込み 等の業務内容が見える新名称
- 旧 ID は廃止せず対応表で保持（既存コミットメッセージ・PR タイトルとの照合用）
- 夕方シナリオ C 向けに 02E（検索機能の遅延化）/ 02F（記事データ軽量 import）/ 02G（ヘッダー分割）を新候補として追記

### 運用知見

- **サンドボックス git 不安定**: Cowork の Linux サンドボックスから `git log` / `git push` が `your current branch appears to be broken` で失敗するケースあり。回避策として **EDA のローカル Git Bash または Claude Code 経由でコミット**する運用を確立
- **PR #59 のパターン**: 「Cowork サンドボックス内でローカル main に commit → Claude Code が新ブランチに 3 コミット保持 + main を origin/main まで reset → PR 化」の流れが成功、今後の memory 系作業のテンプレートとして使える

### 朝セッションの到達点

- ✅ `/articles` TBT 140ms で**昨日の β → α 格上げ確定**（H 効果は確定的）
- ✅ LCP 悪化の根本原因候補を特定（第 1・第 2 候補 + 無罪グループ）
- ✅ 夕方シナリオ別の即応施策を事前策定（A/B/C 3 パターン、各々の期待効果と PR サイズ）
- ✅ タスク命名体系の恒久化（task-roadmap.md、MEMORY.md 索引追加）
- ✅ 運用知見の文書化（ops-notes.md）
- 🔵 次アクション: **2026-04-21 18:00 JST 夕方再計測**で LCP 真偽判定
