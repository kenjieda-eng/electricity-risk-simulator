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

---

## 2026-04-21 昼セッション（PR #60〜#63、bundle 解析で仮説確証）

### マージ済 / 作成済 PR

| PR | 種別 | 状態 | 概要 |
|---|---|---|---|
| #60 | memory sync | ✅ マージ済（squash `282edd1`） | 朝セッション memory 追加分（ops-notes.md 新規 + task-roadmap 02E/F/G + pending-tasks 朝結果 + sprint-history 朝セッション + MEMORY.md 索引） |
| #61 | analysis | 🔵 Draft（マージ不要） | @next/bundle-analyzer 導入 + layout chunk 内容調査レポート |
| #62 | perf (02E) | 🔵 Draft（18:00 判断待ち） | HeaderSearch を `dynamic({ ssr: false })` 化（`src/components/PublicHeader.tsx` +6 −1） |
| #63 | parking | ✅ マージ済（squash `f4b1b90`） | `tsconfig.tsbuildinfo` を `.gitignore` に追加 + git untrack |

※ PR #60 は当初 PR #59 として作成したが EDA 側の手動マージで #60 に再構成（stash pop 回避のため）。詳細は `ops-notes.md` § 8。

### PR #61（bundle analyzer）の核心的発見

**計測環境の困難**:
- Next.js 16 は Turbopack がデフォルトビルダー、`@next/bundle-analyzer`（webpack plugin）と非互換
- `ANALYZE=true npm run build` ではレポート生成されず
- 回避策: `NODE_OPTIONS=--max-old-space-size=8192 ANALYZE=true npx next build --webpack` で webpack ビルド強制
- Next.js 16 の build 出力も従来の「Size / First Load JS」表を出さない仕様 → `.next/static/chunks/` を直接 size 計測

**実測値**（all-page 共通 layout chunk、raw / gzip）:

| chunk | 内容 | raw | gzip |
|---|---|---:|---:|
| `app/layout-*.js` | root layout + articleList 全件 + 6 scenario + 業種データ | **287 KB** | **71 KB** |
| `72885-*.js` | fuse.js | 23 KB | 8 KB |

**layout chunk 内の検出結果**（grep ベース）:
- `publishedAt` × 499、`categorySlug` × 500、ユニーク kebab-case × 520
- → **articleList 全件が layout chunk に混入している確証**

**仮説との一致**: **第 1・第 2 候補いずれも裏付け確定**。
- 経路 (a): PublicHeader → HeaderSearch → searchIndex（articleList 全件）
- 経路 (b): ArticleScrollTracker が直接 articleList import（slug 用途のみで全件引き込み）
- **両経路を同時に切り離さないと layout chunk から articleList は剥がれない**
- → **02E（PR #62、HeaderSearch 遅延化）単独では layout chunk 削減効果ほぼゼロ**
- → **02E + 02F のセット運用が必須**

### PR #62（02E）の位置づけ更新

- 当初「02E 単独で LCP −500ms〜−1.5s」と想定したが、bundle 解析で fuse.js (8 KB gzip) と HeaderSearch 本体コードのみが dynamic chunk に移る程度
- layout chunk の articleList (71 KB gzip) は ArticleScrollTracker のせいで残る
- 結果: **02E 単独 LCP 期待値を −100ms〜−300ms に下方修正**
- **02F と同時マージして初めて本来の −500ms〜−1.5s 効果**

### 新しい 02 採用判断フレーム（夕方 18:00 基準）

| 夕方 `/` LCP | 採用する 02 |
|---|---|
| < 3.0s | 02E+02F は後日マージ候補（bundle 健全化として有益、緊急性低） |
| 3.0〜4.0s | **02E + 02F を同時マージ**（02E 単独では効果 0） |
| ≧ 4.0s | 上記 + **02B（画像 priority）複合発注** |
| ≧ 4.5s + 上記効果不足 | **02G（Header server/client 分割）追加検討** |

### 運用知見の更新（ops-notes.md § 7, § 8）

- Next.js 16 + Turbopack での bundle-analyzer 互換性問題と回避策
- PR #60 で実行した「先行 PR merge 済み + ローカルに追加編集あり」状態からの新 PR 作成パターン（`git branch -m` + `git branch -f main origin/main` + `git reset main` の三段 combo）

### 昼セッションの到達点

- ✅ bundle 解析による LCP 悪化の構造的原因確定（articleList 2 経路混入）
- ✅ 02E + 02F セット運用必須の確信確立（効果の独立性を否定）
- ✅ 夕方判断フレームの精密化（LCP 閾値ベース、シナリオ明確化）
- ✅ PR #60 / #63 マージで memory / parking 整理
- ✅ **PR #64（MEETING_LOG.md 追記）作成**、commit `3553e22`（+340 行）
- ✅ **PR #65（02F 案 A' 採用）作成**、layout chunk 287→24 KB（−91%）を実測で確認
- 🔵 次アクション: **18:00 JST 夕方 PSI 計測**（02E+02F マージ前の Before 値）→ **PR #62 + PR #65 を連続マージ**（LCP 結果問わず bundle 観点で merge 確定）

### PR #65（02F）の案 A' 採用判断

Claude Code が当初の A / B 案を検討した結果、**新案 A'（TS module 生成）を採用**。理由:

- **案 B（regex）**: `/about-this-site`, `/simulate` 等で false positive、event 誤発火
- **案 A（JSON fetch）**: async 取得の timing 複雑、初期表示ラグ
- **案 A'（TS module、採用）**: fetch 不要、精度ロスゼロ、bundle 追加 ~15 KB のみ、tree-shake 可能

ファイル構成:
- `scripts/generate-article-slugs.mjs` を新設（articleList から ARTICLE_SLUGS 配列を TS module として出力）
- `src/generated/article-slugs.ts` を生成（commit 対象、レビュー可能）
- `package.json` の `prebuild` に生成コマンド追加
- `ArticleScrollTracker.tsx` で ARTICLE_SLUGS を import（articleList 全件 import を除去）

**02F 単独適用では layout chunk が 287 → 311 KB と逆に微増**（ARTICLE_SLUGS 分 +15 KB 追加）、02E との同時マージで初めて効果発現。PR 本文にも明記済み。

### 昼セッション後半の到達点（12:30 頃）

- ✅ 02E + 02F 両 PR が draft 状態で待機、18:00 後の連続マージ体制確立
- ✅ 案 A' を ops-notes.md にパターンとして記録（今後の類似ケースの第一候補）
- ✅ MEETING_LOG.md の扱いを正式 PR として整理（PR #64、parking 消化）
- 🔵 次アクション: 18:00 JST PSI Before 計測 → 連続マージ → 翌朝 After 計測で α/β/γ 判定

---

## 2026-04-21 夕方セッション（PR #62/#65 本番投入）

### 18:00 PSI Before 計測（commit `344d684` = PR #64 merge 直後）

実施時刻: 18:32〜18:36 JST（PR #64 merge から 45 分後、Edge cache 安定化確認済）

| URL | Perf | LCP | TBT | 判定 |
|---|---:|---:|---:|---|
| `/` | 75 | **4.9s（中央値、run 2/3 で 4.9-5.0s）** | 217ms | **LCP 真の悪化確定**（Scenario C）|
| `/articles` | 86 | 2.5s（朝 4.7s → Good 閾値）| 425ms（run2 外れ値影響、311/2209/425）| LCP 朝ノイズ確定、TBT 要警戒 |
| `/capacity-contribution-explained` | 81 | 2.9s（朝 4.6s → Good 圏）| 333ms | LCP 朝ノイズ確定 |

**主要知見**:
- 朝の「全ページ LCP 4.5〜4.9s 同時悪化」は PSI ノイズ確定（ルール 4 の正しさ裏付け）
- **`/` トップのみ LCP 真の悪化が継続**（bundle 要因 + `/` 固有要因の両立可能性）
- TBT が 3 ページ中 2 ページで +250〜290ms 増加（原因不明、明朝再計測で判定）

### 02E + 02F 本番投入（連続 squash merge）

| PR | 内容 | merge SHA | 時刻 |
|---|---|---|---|
| **#62** | 02E: HeaderSearch を dynamic import 化（`PublicHeader.tsx` +6 −1）| `7e7d744` | 18:46:02 JST |
| **#65** | 02F: ArticleScrollTracker から articleList 剥離（案 A' TS module 生成）| `9e9e19a` | 18:46:30 JST |

**Vercel deploy**: 両 commit とも production deploy 成功（deployment ID `4435504186`）、28 秒差で 2 回連続デプロイ。

### 判断根拠（部分 LCP ノイズ確定でも merge を選んだ理由）

`/articles` と `/capacity...` は朝ノイズ確定だったが、以下の理由で 02E+02F merge を実行:

1. **bundle 問題の客観性**: layout chunk 287 KB → 24 KB（−91%）は LCP 結果に関わらず正当な修正
2. **`/` LCP 真悪化の要因分離不可**: bundle 要因を除外しないと「`/` 固有要因が何か」の切り分けが不可能
3. **後戻りリスクゼロ**: 機能追加・破壊変更なし、dynamic import + slug 切り出しのみ

### 明朝 After 計測の判定フレーム

明日 2026-04-22 朝 09:00+ JST に After 計測（03-改善後再計測）を実施。`/` LCP で判定:

| 明朝 `/` LCP | 判定 | 次アクション |
|---|---|---|
| < 2.5s | **bundle 主因確定、02E+02F ゴール達成** | 04 観測継続、05 SEO 準備へ |
| 2.5〜3.5s | 一部改善、他要因も存在 | **02B（画像 priority）発注検討** |
| 3.5〜4.0s | 効果限定的 | **02G（Header 分割）or DevTools 実地調査** |
| ≧ 4.0s | 主因は bundle 外 | **`/` 固有の LCP 要因を根本再調査**（HeroSection / Chart.js / 本番特有要素） |

### TBT 増加（夕方）の原因候補

明朝 After 計測で同じ傾向が出れば実回帰、出なければ時間帯 or PSI lab ノイズ。今夜は判定保留。

### 夕方セッションの到達点

- ✅ 朝の LCP 異常は 2/3 ページでノイズ確定、1/3 ページ（`/`）で真悪化確定
- ✅ 02E + 02F 本番投入完了、bundle 削減 −263 KB / −89% が本番反映
- ✅ 明朝 After 計測の判定フレーム確立
- 🔵 次アクション: **2026-04-22 09:00+ JST After 計測**（cache 安定化のため merge 後 14 時間経過後）

### open PR / 未コミット memory

- **PR #61（bundle analyzer）**: draft のまま保持（明朝計測結果を受けて close or merge 判断）
- **working tree 未コミット**:
  - `.ai-team/memory/ops-notes.md`（§ 7 / § 8 / § 9 + 案 A' 追加）
  - `.ai-team/memory/sprint-history.md`（本ファイル、朝昼夕全セッション追加）
  - `.ai-team/memory/task-roadmap.md`（02E/02F 状態更新）
  - これらは明朝 After 計測結果を待って 1 本の memory sync PR として push 予定（今夜コミットすると Vercel deploy が走って After 計測の cache が汚染される）

---

## 2026-04-22 朝セッション（PR #66 + 08 調査、02E-fix + LCP 構造問題特定）

### サマリー

| トピック | 結果 |
|---|---|
| 03 After 計測（08:31 JST） | 02E+02F 効果部分確認、**CLS 0.000 → 0.125 退行を検出** |
| 02E-fix の原因特定・実装・merge | PR #66、SHA `fa28f60`、HeaderSearch skeleton 実寸合わせ |
| 11:11 再計測 | **CLS 0.125 → 0.000 完全復帰**、3 URL すべて Good 圏 |
| 08-LCP 構造調査 | LCP 要素特定、昨日仮説棄却、新主因仮説策定 |
| LCP の構造的問題 | FCP 2.2s / LCP 4.3s ギャップ 2s が 3 URL 共通 = **layout.tsx 層の共通ボトルネック** |

### 03 After 計測（08:31 JST）

実施コマンド:
```
node scripts/psi-baseline.mjs --label morning-after-2026-04-22 --runs 3 --interval 60 \
  --strategy mobile --urls /,/articles,/capacity-contribution-explained
```
→ Git Bash の MSYS path 変換で `/` が `C:/Program Files/Git/` に化けて失敗。`/` のみ URL フル指定で再実行（08:35 計測で補完）。

**結果**（詳細は `.ai-team/PSI_AFTER_2026-04-22_MORNING.md`）:

| URL | Perf | LCP | TBT | CLS | vs 昨夕 |
|---|:-:|---|---|---|---|
| `/` | 80 | 4.5s | 150ms | **0.125 ⚠️** | +5 / −0.4s / −67ms / **+0.125 退行** |
| `/articles` | 81 | 2.2s | 258ms | **0.129 ⚠️** | −5 / −0.3s / −167ms / **+0.128 退行** |
| `/capacity-contribution-explained` | 71 | 5.1s | 162ms | **0.125 ⚠️** | −10 / +2.2s / −171ms / **+0.125 退行** |

**判定**: 02E+02F の JS bundle 削減は効いているが、**CLS 全 URL 退行確定**。優先事項として 02E-fix を即時起動。

### 02E-fix の原因特定・実装・merge（PR #66）

**原因**（詳細は `ops-notes.md § 10`）:
- PR #62（02E: HeaderSearch dynamic 化）の `loading` fallback skeleton が実 HeaderSearch より 8px 低い
- dynamic import 解決時に header 行が 8px 伸び、3 URL で同一の 0.125 layout shift を引き起こす

**修正**:
- `src/components/PublicHeader.tsx` の skeleton を実寸合わせ（padding・高さ一致）
- 新規ファイルなし、PR size XS（1 ファイル 数行）

**merge**: 2026-04-22 09:00 JST、squash merge SHA `fa28f60`

### 11:11 再計測（edge cache 2 時間経過後）

**結果**（詳細は `.ai-team/PSI_AFTER_2026-04-22_MORNING_REMEASURE.md`）:

| URL | Perf | LCP | TBT | CLS | 今朝比 |
|---|:-:|---|---|---|---|
| `/` | 83 | 4.3s | 88ms | **0.000 ✅** | +3 / −0.2s / −62ms / **CLS 完全復帰** |
| `/articles` | 80 | 4.4s | 233ms | **0.001 ✅** | −1 / +2.2s* / −25ms / **CLS 完全復帰** |
| `/capacity-contribution-explained` | 78 | 4.7s | 127ms | **0.000 ✅** | +7 / −0.4s / −35ms / **CLS 完全復帰** |

\* `/articles` LCP は今朝 runs（1.6/2.2/4.6 ばらつき大）が lucky case、11:11 の 4.3〜4.8 一貫値が真値に近い。

**判定**:
- **A. CLS 完勝**: 3 URL すべて 0.125 → 0.000 完全復帰、Core Web Vitals Good 域
- **B. `/` LCP ≧ 4.0s 域**: 改善 -0.2s のみ、**08 調査（bundle 外主因）本格発注トリガー**
- **C. `/capacity-contribution-explained` LCP**: 5.1 → 4.7s、CLS 連動範囲、別退行ではない

### 08-LCP 構造調査（1.5h 調査、11:30 完了）

**新規ドキュメント**: `.ai-team/LCP_INVESTIGATION_08_2026-04-22.md`

**PSI API 詳細取得**（`scripts/psi-diagnostic.mjs` 新設）:
- `lcp-breakdown-insight` / `largest-contentful-paint-element` audit を使い LCP 要素を特定
- `LCP_DIAG_2026-04-22_1130.json` / `LCP_ELEMENT_RAW_1130.json` に生データ保存

**判明事項**:

1. **LCP 要素は 3 URL 全部「ヒーローカードのリード文 `<p>`」**（テキスト、画像ではない）
   - `/`: `section.px-4 > div.mx-auto > div.rounded-2xl > p.mt-3`
   - `/articles`: `main > main > header.rounded-2xl > p.mt-3`
   - `/capacity-contribution-explained`: `main > main > header.rounded-xl > p.mt-4`
   - 全て 330-338 × 140px、Tailwind `text-sm leading-7 text-slate-700 sm:text-base` 共通

2. **TTFB 0〜10ms で無罪**（サーバー応答完璧）

3. **render-blocking resources 0 件**

4. **支配要因は `elementRenderDelay` 1.4〜8.5s**（LCP 要素発見 → paint までの遅延）

5. **昨日仮説は両方とも解消済・棄却確定**:
   - HeaderSearch 経由 bundle（02E で解消）
   - ArticleScrollTracker articleList 全件 import（02F で解消）
   - それでも LCP 残存 = **新主因の存在確定**

6. **新主因仮説**:
   - 🔴 最有力: **Hydration-induced LCP re-pinning**（PublicHeader の `"use client"` root layout 全体 hydration が mobile 4x CPU slowdown 下で 1-2s、style 再計算で LCP 要素 paint 再認定）
   - 🟡 有力: **GoogleAnalytics gtag.js の FCP 直後 main thread 競合**（`afterInteractive` + 152KB / unused 41%）
   - 🟢 弱: 日本語フォント fallback 解決、Tailwind style & layout 複雑性

### 推奨対策案（優先度付き）

**Phase 1 (S, 09 発注候補)**: GoogleAnalytics を `lazyOnload` に変更
- 変更: `src/components/analytics/GoogleAnalytics.tsx` 2 行
- 期待効果: LCP -200〜-500ms
- PR size: XS、所要 30 分

**Phase 2 (M, 10 発注候補)**: PublicHeader を Server/Client 分割
- 変更: 2-3 ファイル、60-100 行
- 期待効果: LCP -500ms〜-1.5s（hydration 範囲縮小）
- PR size: M、所要 4-6 時間

**Phase 3 (観測)**: Phase 1+2 merge 後の PSI 再計測で α/β/γ 判定

### 昨日仮説との差分整理

| 昨日仮説 | 今朝検証 | 残存寄与 |
|---|---|---|
| HeaderSearch 経由 bundle (270KB) | ✅ 02E merge で解消、bundle -91% | ほぼゼロ |
| ArticleScrollTracker articleList 全件 import | ✅ 02F merge（案 A'）で解消 | ほぼゼロ |
| フォント無罪 | ✅ 継続（small 弱候補として残存） | 小 |
| ロゴ画像無罪 | ✅ 継続（LCP 要素ですらない） | ゼロ |

→ **昨日仮説の主因 2 候補はいずれも解消済。LCP 残存は別次元（hydration re-pinning + gtag）**。

### 計測運用ルール更新

既存 5 項目に追加:

6. **バンドル削減で LCP が改善しない時は、LCP 要素の種類 (text/image) ・`elementRenderDelay` ・TTFB を PSI API の `lcp-breakdown-insight` audit で必ず確認してから次手を決める**
   - 初動診断には `scripts/psi-diagnostic.mjs` を走らせる（LCP element / TTFB / mainThreadWork / longTasks / unusedJS を一括取得）

### 朝セッションの到達点

- ✅ 03 After 計測で 02E+02F 効果確認、**CLS 退行を即座に検出**（計測運用ルール 5 の功績）
- ✅ 02E-fix（PR #66、`fa28f60`）で CLS 完全復帰達成
- ✅ 11:11 再計測で 3 URL すべて CLS Good 圏到達確認
- ✅ 08 調査で LCP 要素特定、昨日仮説棄却確定、新主因仮説策定
- ✅ Phase 1 (GA lazyOnload) / Phase 2 (Header 分割) の実装計画確立
- ✅ 運用ルール 6 項目目（PSI diagnostic 義務化）を追加
- 🔵 次アクション: **09 発注**（Phase 1 GA lazyOnload 実装）or **リンの追加発注**

### open PR / 未コミット memory

- **PR #61（bundle analyzer）**: draft 継続、効果実証済なので明朝 close 予定
- **working tree 未コミット**（本 memory sync PR で統合）:
  - `.ai-team/memory/ops-notes.md`（§ 10 / § 11 追加）
  - `.ai-team/memory/sprint-history.md`（本ファイル、朝セッション追加）
  - `.ai-team/memory/task-roadmap.md`（02E-fix / 03 / 08 更新）
  - `.ai-team/PSI_AFTER_2026-04-22_MORNING.md`（08:31 計測サマリ）
  - `.ai-team/PSI_AFTER_2026-04-22_MORNING_REMEASURE.md`（11:11 再計測サマリ）
  - `.ai-team/PSI_MEASUREMENT_2026-04-22_{0831,0835,1111}.md`（自動出力）
  - `.ai-team/LCP_INVESTIGATION_08_2026-04-22.md`（08 調査レポート）
  - `.ai-team/LCP_DIAG_2026-04-22_1130.json` / `LCP_ELEMENT_RAW_1130.json`（診断生データ）
  - `scripts/psi-diagnostic.mjs`（PSI 詳細診断スクリプト、再利用可能）
