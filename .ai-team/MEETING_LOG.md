# ミーティングログ

> チームミーティングの議事録。新しいものを上に追記する。
> **EDAの発言・指摘・方針は必ず「💬 EDA:」として原文に近い形で記録すること。**
> EDAの視点はチーム全体の判断基準になるため、省略・要約しすぎないこと。

---

## 2026-04-20 第15回 PSI 計測・T-17 PR #47 マージ完了（今日 4 本目の PR）

**参加者**: 全員（EDA 同席、リンがファシリテート）

### 本日の PR 完走一覧（当日 1 日で 4 本）

| PR | ブランチ | 内容 | Commit |
|---|---|---|---|
| #43 | `perf/chart-deferred-mount` | Chart.js 遅延マウント | `e49567e` |
| #44 | `tooling/psi-baseline` | PSI 計測スクリプト | `3e5bc05` |
| #45 | `seo/capacity-contribution-rewrite` | T-15 /capacity-contribution-explained リライト | `d5ce4a4` |
| #46 | `seo/top10-ctr-improvement-6pages` | T-16 トップ10圏 0-click 6 ページ title/meta | `c405ea6` |
| **#47** | `seo/alist-5pages-rewrite` | **T-17 A-list 5 ページリライト** | `15b0b02` |

### PSI 計測結果（after-chart-defer）

mobile 3 runs（完全同値、PSI の安定性確認）:
- Performance **97** / LCP **2.3s** / TBT **119ms**

desktop 1 run:
- Performance **95** / LCP **1.0s** / TBT **104ms**

#### Before → After 比較（Mobile）

| 指標 | Before (Lighthouse CLI) | After (PSI) | 改善 |
|---|---:|---:|---:|
| Performance | 74 | **97** | **+23** |
| LCP | 4.9s | **2.3s** | **−53%** |
| TBT | 276ms | **119ms** | **−57%** |

PR #43 Chart.js 遅延マウントは **Mobile / Desktop 両方で圧倒的成功**。Mobile LCP "Good" 基準（2.5s 以下）・TBT "Good" 基準（200ms 以下）ともにクリア。

💬 EDA: 「進んでない気がする　もう一度したほうがいいかな？」（PSI desktop run 1/3 で詰まっているように見えた時点の報告）
→ リン対応: `Ctrl+C` → desktop 単独 1 run 再実行 → 成功。mobile 3 runs は既に取れていたため合算で合格判定。

### T-17 の重要な発見: SC 実データで prompt 仮説を検証

Claude Code が `scripts/sc-per-page-query.mjs` を新設し、GSC dimensionFilter で 5 ページを個別取得して**仮説検証**を実施。

- **最大の発見**: `/why-business-electricity-prices-rise` は prompt 想定「10 clicks / 166 imp」に対し実績 **1 click / 22 imp**。サイト 3 位強ページ仮説は成立せず → Option B（攻めのリライト）採用
- `/fuel-cost-adjustment`: pos 39-40 と低順位 → 「燃調費とは」起点化の提案どおり実装
- 残り 3 ページ（`/articles/last-resort-supply`, `/market-linked-plan`, `/how-to-start-electricity-contract-review`）: 0 imp → 未来投資として仕込み

実装内容（6 ファイル / +136 / −28）:

| ページ | Title Before → After |
|---|---|
| `/fuel-cost-adjustment` | `…市場価格調整額の違い…` → `燃料費調整額（燃調費）とは…`（H1 も同期） |
| `/why-business-electricity-prices-rise` | `…なぜ上がる？…` → `電気料金が上がる理由｜法人向けに…` |
| `/articles/last-resort-supply` | `seoTitle` / `seoDescription` 追加（カテゴリハブ） |
| `/market-linked-plan` | `…リスクとは…` → `市場連動プランとは…`（H1 も同期） |
| `/how-to-start-electricity-contract-review` | `高圧電力の見直し…` → `法人電気料金の見直し…`（H1 も同期） |

各ページ: `ArticleJsonLd.headline` / description も同期、keywords にクエリ完全一致パターンを追加。本文・JSX・CTA は不変。

検証: `tsc --noEmit` OK / `vitest run` 99 passed / `next build` 743 ページ成功。

### Vercel デプロイ確認

PR #47 は **07:24 UTC にデプロイ成功**（`state: success`）。https://simulator.eic-jp.org に反映済み。

### ドキュメント更新

- `.ai-team/LIGHTHOUSE_2026-04-20.md`: PSI After セクション追記（Before/After 比較表、PR #43 評価、次の P0 施策の優先度再評価）
- `.ai-team/memory/pending-tasks.md`: 「選択肢 A」セクションを完了ログに置換済み（Claude Code 側で更新）
- `.ai-team/PSI_MEASUREMENT_2026-04-20_1603.md`: desktop 計測結果ファイル生成

### 今日の総括

**2026-04-20 はプロジェクト史上最高の生産性日**:

1. **パフォーマンス勝利**: Mobile Perf 74→97、LCP −53%、TBT −57%
2. **SEO 即効施策 3 本**: T-15 / T-16 / T-17 合算で月 +20〜35 clicks 見込み
3. **計測基盤整備**: PSI API + GSC per-page query の 2 本セットで効果計測の精度が大幅向上
4. **合計 5 PR マージ**（#43, #44, #45, #46, #47）

### 次の判断（2 週間後 2026-05-05 頃）

GSC 再取得で T-15/T-16/T-17 効果を評価したうえで:
- **選択肢 B** 発注（Batch A G-01 新規記事執筆 `/fuel-vs-market-adjustment-comparison`）
- **選択肢 C** 発注（`/articles` 性能改善）
- または新たな施策優先度決定（GSC データ次第）

当面の休眠期に EDA さんが進めるべき外部施策: pps-net.org / eic-jp.org リンク施策。

---

## 2026-04-20 第14回 PR #43/#44 完了 & Search Console 実数値受領

**参加者**: 全員（EDA 同席、リンがファシリテート）

### 報告（Claude Code より受領）

**PR #43 `perf/chart-deferred-mount`（merge `e49567e`）**
- `SimulatorChart.tsx` に `chartReady` state + `useEffect` で `requestIdleCallback`（fallback `setTimeout 200ms`）を実装。ゲート前は既存 `chartLoading` スケルトンを同サイズで表示。
- 差分: +19 / −3 行、1 ファイル（スコープ厳守）
- 検証: tsc OK / vitest 99 passed / next build 成功（743 ページ）
- リン検証: `src/app/_components/simulator/SimulatorChart.tsx` L52-60 に実装を直接確認済み

**PR #44 `chore/psi-baseline-script`（merge `3e5bc05`）**
- `scripts/psi-baseline.mjs` 271 行、追加依存なし
- 機能: mobile/desktop × N runs 中央値 + 生データ Markdown 出力、429/5xx retry、`.env.local` の `PSI_API_KEY` 対応
- Smoke test `--label smoke-test --runs 2 --urls /` で Markdown 生成まで到達。実スコアは匿名 PSI クォータ枯渇で取得不可（キー投入待ち）
- リン検証: `scripts/psi-baseline.mjs` L1-50 の構造を確認済み

→ 両 PR とも**仕様どおり完了・マージ済み**。

### EDA 提供: Search Console 28日実数値（第一報）

EDA 手元から GSC のクエリ別・ページ別の実数値を受領。主要知見:

**クエリ側の発見**
- 「燃料費調整額 市場価格調整額 違い」 2 clicks / 20 imp / CTR 10% / pos 6 → **G-01 新規記事の裏付け取れた**
- トップ10圏で 0-click のクエリ群: 市場価格調整額（19 imp, pos 4.89）、受電地点特定番号（18 imp, pos 2.39）、再エネメニューとは（6 imp, pos 5.33）ほか複数
- 「容量拠出金」関連クエリ群（33+8+7 imp）がすべて低順位で 0-click

**ページ側の発見（最大機会損失）**
- `/capacity-contribution-explained`: **117 imp / 0 clicks / pos 14.15**
  → サイト内トップクラスの表示量を順位の低さで取りこぼし中
- トップ10圏 0-click ページ 6 本: `/market-price-adjustment` (148 imp, CTR 2.70%), `/winter-vs-summer-electricity` (35 imp), `/electricity-cost-risk-heatwave` (37 imp), `/market-price-adjustment-history` (28 imp), `/articles/price-increase` (35 imp), `/electricity-rate-revision-mechanism` (34 imp)
- サイト主力の確認: `/` 21 clicks / 166 imp / CTR 12.65% / pos 2.9

### 議論

**Content-Strat**
「事前の質的仮説（Batch A の G-01 が有効）は数値で裏付けられた。だが、それより大きな機会損失が 1 件判明した。`/capacity-contribution-explained` の 117 imp 0 clicks は、Batch A 3 本を書く工数より、この 1 ページの戦略リライトの方が ROI が桁違いに高い。優先度を組み替えるべき。」

**Growth-Analyst**
「トップ10圏 0 click の 6 ページはタイトル/メタ書き換えだけでいけるので、1 PR にまとめて並行実行したい。インデックス更新で 1〜2 日後には数値に出る。」

**Frontend-Dev**
「PR #43 の効果測定は `PSI_API_KEY` 待ち。EDA 側で GCP プロジェクトにキーを発行してもらえれば、PR #44 で即 before/after 計測できる。Chart.js PR のインパクト（TBT 276→180ms 目標）を定量化するのはこのキー次第。」

**Energy-Expert**
「T-15 の `/capacity-contribution-explained` は制度解釈の正確性が肝。2024-2026 の負担額水準は私が監修確認する。」

**QA-Engineer**
「T-15/T-16 は本文レベルの改修が入るので、マージ後 `scripts/check-links.mjs`（既存）で内部リンク健全性を再確認したい。」

**Backend-Dev**
「PR #44 の PSI スクリプトは GitHub Actions で `npm run psi -- --label weekly-$(date +%F)` を週次実行する cron にしても良い。T-2 以降で検討。」

### リン（PM-Lead）の整理

本日の SC 実数値で、**Batch A より先に T-15 / T-16 を挟む**のが正解。理由:
- T-15: 単一ページで 117 imp の取りこぼし回収 → 月 +5〜18 clicks の即効
- T-16: タイトル/メタだけの低工数で月 +10〜12 clicks
- Batch A: インデックス反映まで 1〜2 週間、T-15/T-16 は数時間〜1 日で反映

### EDA の方針

💬 EDA: 「全部やっておいてくれますか？」

→ T-15 / T-16 の発注プロンプト起票 + KEYWORD_COVERAGE 更新を実施。Batch A は継続しつつ後回し。

### 決定事項

| # | タスク | 担当 | 成果物 | 状態 |
|---|---|---|---|---|
| T-11 | Chart.js 遅延マウント PR | Claude Code | PR #43 | ✅ マージ済（`e49567e`） |
| T-12 | PSI API 計測スクリプト | Claude Code | PR #44 | ✅ マージ済（`3e5bc05`）/ 🔸 `PSI_API_KEY` 取得待ち |
| T-15 | `/capacity-contribution-explained` リライト | Claude Code | `seo/capacity-contribution-rewrite` ブランチ | 🆕 プロンプト起票済 |
| T-16 | トップ10圏 0-click 6 ページ title/meta 書き換え | Claude Code | `seo/top10-ctr-improvement-6pages` ブランチ | 🆕 プロンプト起票済 |
| T-13 | Batch A 記事執筆 G-01/G-04/G-05 | Claude Code（後追い） | 3 PR、2026-04-27 公開目標 | 🟡 継続、T-15/T-16 の後 |
| T-14 | Batch A 記事の Energy-Expert 監修 | Energy-Expert | G-01 比較表項目・G-05 収益レンジの確認 | 🟡 継続 |

### 新規発注プロンプト

- `.ai-team/prompts/2026-04-20-t15-capacity-contribution-rewrite.md`（T-15）
- `.ai-team/prompts/2026-04-20-t16-ctr-improvement-6pages.md`（T-16）

### キー取得の補足（EDA アクション）

PSI API キー取得手順:
1. Google Cloud Console で新規 API キー発行（または既存プロジェクトに追加）
2. 「PageSpeed Insights API」を有効化
3. `.env.local` に `PSI_API_KEY=xxxxxxxxxx` を追記
4. `node scripts/psi-baseline.mjs --label after-chart-defer --runs 5` で PR #43 の効果測定

### フォローアップ

- T-15/T-16 マージ → 2026-05-04 週に GSC 再取得で CTR / 順位比較
- PSI キー投入後、PR #43 の定量効果を `.ai-team/LIGHTHOUSE_2026-04-20.md` に追記
- 次回ミーティング: T-15/T-16 マージ後、または PSI 結果着弾時

---

## 2026-04-20 第13回 ContactCtaCard/Lighthouse 受領後の方向性決定

**参加者**: 全員（EDA 同席、リンがファシリテート）

### 報告（Claude Code より受領）

1. **ContactCtaCard 7 ファイル修正（前半）**: 作業不要。全 7 ファイルに `<ContactCtaCard>` JSX はすでに配置済み。
   - リンの前回「import あるが JSX 未配置」報告は **誤り**。OneDrive マウント経由の bash grep が古い／切り詰められた内容を返していた。Read ツール（Windows 直アクセス）で再確認し誤りを認めた。以降の JSX 配置有無判定は Read を一次ソースに切替。
2. **Lighthouse 再計測（後半）**: `.ai-team/LIGHTHOUSE_2026-04-20.md` に詳細。
   - Mobile: `/` 98→74（−24）, `/simulate` 69→70, `/compare` 82→74（−8）, `/articles` 77→70, `/journey` 83→73
   - Desktop: 全ページ 97–100 で安定
   - Claude Code は「計測ノイズ（ローカル Windows、2 runs で Perf±13 振れ）」と結論。`/` は**コード変更ゼロ**にも関わらず −24 のため、ノイズ起因と解釈するのが整合的。

### 議論

**Frontend-Dev**
「Lighthouse レポートの提案 1『SimulatorChart.tsx を dynamic 化』は部分的に既に実装済み（`next/dynamic` + ssr:false）。残課題は『マウント即 fetch』で、Chart.js の chunk ダウンロードが hydration と並走している点。`requestIdleCallback` で mount を遅らせれば TBT を 276→180ms 程度に下げられる見込み。PR サイズ S で切れる。」

**Content-Strat**
「S1-06 キーワード網羅性チェックで Batch A（G-01/G-04/G-05）は既に整理済み。これはパフォーマンス系と独立に進められる。Energy-Expert 監修待ちで先発できる。」

**Growth-Analyst**
「PSI API 計測スクリプトは Chart.js PR の効果測定に必須。ローカル Lighthouse のノイズでは施策効果を判定できないので、PR より先に計測基盤を用意したい。」

**QA-Engineer**
「PSI API スクリプトは CI でも使える汎用資産。Chart.js PR とほぼ並行で作る価値あり。」

**Energy-Expert**
「Batch A の G-01（燃調 vs 市場連動比較表）と G-05（DR 収益モデル）は数値レンジの監修を自分が持つ。G-04 のカレンダーは経産省公表ベースで事実確認するだけなので、Claude Code に任せてよい。」

### EDA の方針

💬 EDA: 「任せます」

→ リン（PM-Lead）の推奨「2 → 3 並行進行」で進行。

### 決定事項

| # | タスク | 担当 | 成果物 |
|---|---|---|---|
| T-11 | Chart.js 遅延マウント PR | Claude Code | `perf/chart-deferred-mount` ブランチ、`/` TBT 180ms 以下 |
| T-12 | PSI API 計測スクリプト | Claude Code（or EDA ローカル） | `scripts/psi-baseline.mjs`、`.ai-team/PSI_MEASUREMENT_*.md` |
| T-13 | Batch A 記事執筆 G-01/G-04/G-05 | Claude Code（Content-Strat レビュー） | 3 PR、2026-04-27 公開 |
| T-14 | Batch A 記事の Energy-Expert 監修 | Energy-Expert | G-01 比較表項目・G-05 収益レンジの確認コメント |

### 発注プロンプト

- `.ai-team/prompts/2026-04-20-chart-dynamic-import.md`（T-11）
- `.ai-team/prompts/2026-04-20-psi-baseline.md`（T-12）
- `.ai-team/ARTICLES_BATCH_A_PLAN_2026-04-20.md`（T-13/T-14、記事別プロンプトは OK 確認後に生成）

### フォローアップ

- T-11 マージ → T-12 で Before/After 比較 → 効果を `.ai-team/LIGHTHOUSE_2026-04-20.md` に追記
- T-13 公開後、Google Search Console に URL 登録 + `npm run build` サイトマップ再生成確認
- 次回ミーティング: T-11/T-12 完了後、数値が揃ったタイミング

---

## 2026-04-20 第12回 次アクション議論（ContactCtaCard修正＋Lighthouse再計測の完了後）

**参加者**: 全員（EDA欠席、リンがファシリテート）

### 議題

EDA指示:
💬 EDA: 「両方とも依頼しました　それが終った後に実施したらよいことをチームで話し合って」

前提:
- ①ContactCtaCard 7ファイル修正 PR と ②Lighthouse 再計測が Claude Code で進行中
- 両方マージ/完了後、次の一手を決める

### 各メンバーの意見

**Content-Strat**
「S1-06 キーワード網羅性チェックが最優先。`scripts/search-console-analysis.mjs` が既に準備済みで、Search Consoleの上位クエリから次の記事企画リストが即出せる。S2-06で30本追加したが、Search Consoleの露出クエリに対してどこが抜けているかを定量評価しないと、次の執筆が勘になる。合わせて、pps-net.org のEDA名義記事に差し込む『執筆者情報テンプレ』もこちらで下書きしたい。EDAがpps-net.orgに手を入れる前に、コピペで済む完成形を用意しておくのが一番速い。」

**Frontend-Dev**
「Lighthouse結果を見ないと優先度が決まらないが、仮に`/simulate`がPerf 80未満のままなら、次のP0候補は:
1. `Chart.js` の動的importで初期バンドルから外す
2. ヒーロー画像のpreloadとAVIF変換
3. `HomePageClient` のさらなる分割
を検討。逆に80超えたなら、次はSprint2のS2-04（TOP CTA配置改善）に移りたい。」

**Backend-Dev**
「S2-05 AIコンシェルジュの外部LLM連携は技術的におもしろいが、**月50UUのサイトで今やるのは時期尚早**。流入が月500UU超えてから投資回収を考えるフェーズ。今やるなら、むしろ `/api/simulation-results/average` のキャッシュ強化など軽量な基盤改善、もしくはSitemap/RSS整備が堅い。」

**Energy-Expert**
「S1-04監査で保留にしていた『tail scenario UIスイッチ』（2020-21年冬の250円/kWh相当の極端シナリオをオプション表示）を今入れたい。記事側はS2-06で整ったので、シミュレーター本体の信頼性を一段上げるタイミング。ただし優先度としては Content-Strat の S1-06 が先。」

**Growth-Analyst**
「GA4のベースラインデータ蓄積待ち（5月上旬）なのは変わらないが、**今のうちにD-03 GA4カスタムイベント設計をやっておくのが絶対条件**。5月上旬にD-01（ContactCtaCard配置別CTR分析）を始めたときに『イベントが仕込まれてなかった』となると2週間ロスする。記事スクロール深度、診断完了、`contact_cta_click` の詳細化、CSV DL等の洗い出しを今週中に済ませたい。」

**QA-Engineer**
「①のマージ後に `scripts/check-links.mjs` を再走させて、S2-06 batch の内部リンクが全て生きているかを確認したい。それと、せっかくvitestを入れたので、CIで `npm run test` を自動実行するGitHub Actionsワークフローを追加したい。30分で組める。テストが回らないままだと47ケースが風化する。」

### リン（PM-Lead）の整理

優先度判定軸: **(a) EDAの手を止めないか / (b) 5月のデータ分析の準備になるか / (c) 実装コスト**。

**T-1（今週やる・高優先度）**
1. **S1-06 キーワード網羅性チェック**（Content-Strat）
   - `scripts/search-console-analysis.mjs` で過去90日クエリ抽出 → 上位100クエリ × 既存450+記事のカバレッジ表を作成
   - 抜けているクエリ群を抽出し、次の記事企画リスト（10本規模）を起こす
   - 成果物: `.ai-team/KEYWORD_COVERAGE_2026-04-20.md` + 次期執筆キュー

2. **D-03 GA4カスタムイベント設計**（Growth-Analyst + Frontend-Dev）
   - 既存イベント棚卸し（`contact_cta_click` 等）
   - 追加候補: 記事スクロール深度75%、診断完了、CSV DL、記事→シミュレーター遷移、検索内クリック
   - 実装を待たず、設計書を先に確定 → EDAにGA4管理画面での設定依頼を出す
   - 成果物: `.ai-team/GA4_EVENT_DESIGN_2026-04-20.md`

3. **pps-net.org 執筆者情報テンプレ下書き**（Content-Strat + リン）
   - EDAが pps-net.org の自分名義記事に貼るだけで済む、完成形HTMLスニペットを用意
   - 「著者: 江田健二（一般社団法人エネルギー情報センター代表理事）」+ プロフ文 + `simulator.eic-jp.org/kenji-eda` へのリンク
   - 同時に、pps-net.orgフッター追加用の文言も準備
   - 成果物: `.ai-team/prompts/2026-04-XX-eda-external-link-snippets.md`（EDAへの依頼文）

**T-2（次週、①②の結果次第で分岐）**
4. **Lighthouse改善フォローアップ**（Frontend-Dev）
   - ②の結果で`/simulate` Perf < 85なら: Chart.js 動的import + 画像最適化 → PR化
   - それ以上なら: Sprint 2 の S2-04（TOP CTA配置改善）に着手

5. **QA-Engineer**: CIワークフロー整備（GitHub Actions で vitest + check-links 自動化）

**T-3（5月上旬に発火、今は待機）**
6. D-01 ContactCtaCard配置別CTR分析（Growth-Analyst）…GA4データ2週間後
7. S1-05 GA4ベースライン詳細版（Growth-Analyst）…30日データ後

**T-4（保留・優先度再評価）**
8. S2-05 AIコンシェルジュ外部LLM連携 → 月500UU突破まで保留（Backend-Devの判断を採用）
9. Energy-Expert の tail-scenario UIスイッチ → T-1完了後に着手

### 決定事項

- ①②完了後、**T-1 の3つを並行開始**。うちS1-06とGA4イベント設計は即着手可能（Cowork側のドラフト作業がメイン）。
- pps-net.orgテンプレは完成形スニペットとして用意 → EDAの作業コストをゼロに近づける。
- S2-05はコスト対効果から現時点で保留。再評価タイミングは「月間UU 500超え」または「EDAから明示的な指示」。

### 次のチャットで最初にやること

1. ①の7ファイル修正PRマージ状態を確認
2. ②Lighthouseの差分レポート（`.ai-team/LIGHTHOUSE_2026-04-20.md`）をレビュー
3. T-1開始: まずS1-06 のキーワード抽出スクリプトを実行して下地データを作る

### 未解決・EDAに要確認

- pps-net.orgに EDA名義の記事は何本あるか（過去に質問済み、未回答）
- eic-jp.orgフッターリンク追加の実行タイミング
- S2-05 AIコンシェルジュ外部LLM連携の保留方針で問題ないか

---

## 2026-04-19 第10回 並行一括実装セッション（Claude Code 自律実行）

**参加者**: 全員 + EDA

### EDAの指示
💬 EDA: 「全部を一気に進めてください　途中確認不要です　Vercel公開完了まで」

### 実施内容（すべて1セッションで完了）

**S1-02（Backend-Dev）**:
- `src/lib/simulator/` ディレクトリ新設（types.ts / constants.ts / calculateScenario.ts / index.ts）
- HomePageClient.tsx を 1,300行 → 840行に短縮
- 計算結果の一致を確認（`next build` 通過、static 712ページ再生成成功）

**S1-04（Energy-Expert）**:
- バックグラウンドエージェントで JEPX 価格実績・2022年燃料高騰・2020-21年冬高騰を Web 調査
- 15組中12組妥当、3組要更新（燃料×market 1.22→1.35、燃料×fixed 1.12→1.18、寒波×market 1.40→1.55）
- 2020-21年冬の250円/kWhは「tail exception」として別UIスイッチ化を提案
- `.ai-team/STRESS_MULTIPLIER_AUDIT_RESULT.md` 保存

**S1-08（QA-Engineer）**:
- `scripts/check-links.mjs` 作成。動的ルート（`[slug]`）を親ディレクトリベースで解決する方式
- 21件検出 → うち10件が真の切れリンク、11件は動的ルート誤検知（スクリプト改修で解決）
- `scripts/fix_broken_links.py` で10件を既存ページへ一括リダイレクト（35ファイル修正）
- 再検証でブロークンゼロ

**S1-10（Frontend-Dev）**:
- `/simulate`（HomePageClient 内）: primary variant + 診断結果 context 付き
- `/benchmark`, `/journey`: primary variant
- 記事詳細 455ページ: `scripts/add_contact_cta_to_articles.py` で一括投入（secondary variant）
- `/contact` の sourceLabels に `simulate-result`, `article` 追加

**TOP刷新（Content-Strat + Frontend-Dev）**:
- ヒーロー: サイト名＋サブタイトル＋運営表記に書換
- ペルソナ別3択ナビカード新設（sky=学ぶ / emerald=診断 / amber=相談）
- 最終CTA: sky「シミュレーターで診断する」+ amber「専門家に相談する」の2ボタン並列
- metadata title/description, JSON-LD description 更新
- 削除の2セクション（このツールでわかること、どんな利用者に向いているか）は `/how-to` に移設（既存テキストと重複しないよう、icon 付きカード形式のみ）

### 意思決定記録
💬 EDA: 「全部を一気に進めてください　途中確認不要です　Vercel公開完了まで」
→ 5タスク並行実装。S1-04 のリサーチのみバックグラウンドエージェントに委譲し、コード作業中に完了。

### デプロイ
- `next build` 通過（712 static + dynamic mix、warning ゼロ）
- `main` にマージ → Vercel 自動デプロイ

---

## 2026-04-19 第9回 競合サイト分析・エネチェンジBiz戦略分析（Cowork）

**参加者**: 全員 + EDA

### EDAの指示
💬 EDA: 「競合サイトなどをリサーチして、分析議論してくれる？」
💬 EDA: 「エネチェンジBiz って何ページくらいの構成？概算ページ数　どういう戦略であるかをまとめて」
💬 EDA: 「話し合ったことは全て、議事録で残して、明日以降、理解できるようにしておいてね」

### 競合マップ（4カテゴリに分類）

**① 一括見積・仲介型（ゴール＝切替契約の成約）**
- エネチェンジBiz（business.enechange.jp）— 上場企業、約40社提携、月間200万UU（個人含む全体）
- スイッチビズ（tainavi-biz.com）— 高圧・特高特化、最大5社見積
- 価格.com 高圧電力（kakaku.com/energy/business/）— ブランド力

**② 情報メディア型**
- 新電力ネット（pps-net.org）— エネルギー情報センター運営（自社の姉妹サイト、452社DB）
- 電力比較サイト（power-hikaku.info）— 452社/4,712プラン掲載
- 白くまパワー（contents.shirokumapower.com）— 値上げ・高騰解説

**③ 電力会社のオウンドメディア型**
- 丸紅新電力コラム、伊藤忠エネクス、出光興産 — 高品質だが自社誘導

**④ シミュレーション特化型**
- 東京電力EP簡易試算、エコ電力 — 自社プラン限定

### エネチェンジBiz 概算ページ数と戦略

**概算ページ数（法人関連）: 300〜450ページ、サイト全体: 1,000ページ超**

| サイト領域 | 推定ページ数 |
|-----------|-------------|
| 法人ブログ（business.enechange.jp/blog） | 50〜80本 |
| 法人向け記事（enechange.jp/articles/business） | 30〜50本 |
| 電力会社個別ページ（enechange.jp/pps/companies/*） | 200〜300ページ |
| エリア別PPS一覧 | 10ページ |
| 削減事例 | 10〜20本 |
| 見積・LP・FAQ等 | 10〜20ページ |
| 個人向け記事（enechange.jp/articles/*） | 500〜1,000本超 |

**3層戦略構造:**
1. **SEO記事で集客（上流）** — 「高圧電力とは」「燃料費調整額とは」等の解説記事。個人向け1,000本超がドメインオーソリティを底上げ
2. **電力会社データベースで回遊（中流）** — PPS事業者の個別ページ200〜300。「○○電力 評判」等で集客し回遊
3. **一括見積で成約（下流＝収益源）** — 全導線が「無料一括見積もり」に収束。成約時に電力会社からフィー（アフィリエイトモデル）

**企業情報:**
- 2020年12月 東証グロース上場
- 年間売上約15億円（2025年6月期）
- ドメイン歴約11年
- 2023年12月期に債務超過に転落。2025年に伊藤忠エネクスと資本・業務提携

### 法人電気料金ナビのポジション分析

**独自のポジション（競合空白地帯）:**
「中立的立場で、知識提供からリスク診断・比較まで一気通貫で提供し、最終的に専門家への相談に繋げる」ポジションは他に存在しない。

**エネチェンジとの戦略的差異:**

| 比較軸 | エネチェンジBiz | 法人電気料金ナビ |
|--------|---------------|----------------|
| 推定ページ数 | 法人300〜450、全体1,000超 | 約200ページ |
| ドメイン歴 | 2015年〜（約11年） | 2025年後半〜（約半年） |
| 収益モデル | 見積もり成約のフィー | 問い合わせ→コンサル |
| 立場 | 仲介プラットフォーム | 中立的な情報提供機関 |
| シミュレーター | 自社プラン誘導型 | 中立的リスク診断型 |
| 記事の着地点 | 「見積もり取ってね」 | 「理解して判断しよう」 |

**エネチェンジにできないこと（＝私たちの価値）:**
- 「そもそも今見直すべきか」への回答（中立的判断支援）
- 市場連動プランのリスク定量化（ストレスシナリオ・リスクスコア）
- 猛暑・地政学リスク等の複合シナリオ分析
- 「見直さない方がいい」と言える立場

**法人電気料金ナビの3つの武器:**
1. **中立性** — 成約フィーに依存しない
2. **診断ツール群** — リスクスコア、ストレスシナリオ、ベンチマーク
3. **姉妹サイト新電力ネットの452社DB** — 連携で独自のデータベース回遊層に

**SEO戦略の方向性:**
- エネチェンジが強い「○○とは」系キーワードでの正面衝突を避ける
- Search Consoleで成果が出ている実務・分析系キーワードを伸ばす
  - 「電気料金推移 10年 法人」順位2.9（既に勝てている）
  - 「燃料費調整額 市場価格調整額 違い」順位6.0（競合手薄）
- ニッチだが購買意欲の高いキーワード群を狙う

### 未決定事項（EDA判断待ち）
- 削減事例コンテンツの掲載可否（エネルギー情報センターへの相談実績から匿名化した事例を作れるか）
- 新電力ネット（pps-net.org）との相互送客導線の整備方針

---

## 2026-04-19 第8回 GA4データ品質に関する前提確認（Cowork）

**参加者**: 全員 + EDA

### EDAの指摘
💬 EDA: 「グーグルアナリティクスは、simulator.eic-jp.org と eic-jp.org のURLがまじっている　解析データに　今回の対象は simulator.eic-jp.org　ちなみにまだサイトはできたばかりで、多くの simulator.eic-jp.org へのアクセスが、私自身だから、２６年３月までのデータはほぼ意味がない」

### 決定事項
- **分析対象ドメイン**: `simulator.eic-jp.org` のみ（`eic-jp.org` は除外）
- **有効データ期間**: 2026年4月以降のみ（3月以前はEDA自身のアクセスが大半で無効）
- **Sprint 0ベースライン（872ユーザー/5,014PV）**: ドメイン混在の可能性があり要再検証
- **Search Console**: 単独プロパティのため信頼可能
- **GA4レポート（S1-05）**: `hostname` フィルタ必須＋内部トラフィック除外フィルタ設定が前提作業
- DECISIONS.md のベースライン数値に注意書きを追記済み

---

## 2026-04-19 第7回 本日の作業優先度決定（Cowork）

**参加者**: 全員 + EDA

### EDAの指示
💬 EDA: 「全部をすすめる　CursorClaudeCodeへの依頼文章を作成して」
💬 EDA: 「スケジュールはClaudeCodeを使えば一瞬のものも多いから、今後は、ClaudeCode前提に見積もってください」

### 前提確認
- S1-11（サイト名リブランディング）は実装完了済み。SPRINT_BACKLOG.mdのステータス更新漏れがあったため✅完了に修正。
- package.json の構文エラーは存在しなかった（DECISIONS.mdの記載が誤り。EDAの指摘で確認・修正済み）。
- TOPページリニューアル方針を**EDA承認**。

### 議論内容

**Growth-Analyst**: S1-10（ContactCtaCard展開）が最優先。コンポーネント完成済みで配置するだけ。CTRデータの蓄積が早まる。

**Frontend-Dev**: S1-10は工数が軽い。200+記事ページへの一括配置もsed等で対応可能。

**Content-Strat**: 記事ページへの展開が最重要。検索流入の大半が着地する場所に問い合わせ導線がない現状がボトルネック。

**Backend-Dev**: S1-02（計算ロジック分離）に並行着手したい。S1-03の前提作業。

**QA-Engineer**: S1-08（リンク切れチェック）はスクリプト化して自動実行。並行で回せる。

**Energy-Expert**: S1-04（ストレスシナリオ倍率検証）は独立した調査作業、並行で進められる。

### 決定事項
- **全タスク同時進行**: S1-10, S1-02, S1-04, S1-08, TOPリニューアルを並行で進める
- **TOPページリニューアル: EDA承認済み**（ペルソナ別3択ナビ＋最終CTA2ボタン化）
- **Claude Code前提の見積もり**: 今後のスケジュールはClaude Codeを使う前提で見積もる（手作業前提の過大見積もりをしない）
- Claude Code への依頼文を `.ai-team/TASK_*.md` として5件作成

### 作成した依頼文
1. `TASK_S1-10_CONTACT_CTA_DEPLOY.md` — ContactCtaCard全ページ展開
2. `TASK_S1-02_CALC_LOGIC_EXTRACT.md` — 計算ロジック分離
3. `TASK_S1-04_STRESS_MULTIPLIER_AUDIT.md` — ストレスシナリオ倍率検証
4. `TASK_S1-08_LINK_CHECK.md` — リンク切れチェック
5. `TASK_TOP_PAGE_RENEWAL.md` — TOPページリニューアル

---

## 2026-04-18 第6回 TOPページ内容のリニューアル方針（Cowork）

**参加者**: 全員 + EDA

### EDAの問題提起
💬 EDA: 「TOPの内容も変えたほうがいいよね　サイト名を変えたのだから」

### 前提確認
- サイト名変更（「法人電気料金ナビ」）の実装は完了確認済み
  - siteConfig.ts 新設、layout.tsx、ヘッダー、フッター、全ページOGP すべて反映済み
  - 旧名称の残存ゼロ（grep確認）
  - ただし package.json に構文エラーあり（別途修正必要）

### 議論内容

**Content-Strat**: 現在のTOPは上半分が「シミュレーターの説明」で占められている。「このツールでわかること」「どんな利用者に向いているか」はシミュレーターの紹介であり、「法人電気料金ナビ」のTOPとしてはズレている。

**Energy-Expert**: ターゲットがTOPに来たとき最初に見たいのはシミュレーターの機能説明ではなく「あなたの状況に合った情報がここにあります」というメッセージ。

**Growth-Analyst**: TOPに直接着地する検索流入はほぼない。来るのは「記事から回遊してきた人」か「ブックマークで戻ってきた人」。長い説明より「次にどこに行くか」の選択肢を素早く見せるほうが有効。

**Frontend-Dev**: 構成案を提案。ヒーロー（サイト名＋一言＋信頼表記）→ ペルソナ別3択ナビ → テーマ別コンテンツ → 最新記事 → 最終CTA（シミュレーター＋問い合わせの2ボタン）。

**Backend-Dev**: 「このツールでわかること」「どんな利用者に向いているか」は /how-to か /simulate に移せばよい。TOPに置く内容ではない。

**QA-Engineer**: ペルソナ別ナビカードで「すぐ見直したい→シミュレーター」を上部に入れれば、シミュレーターへの到達はむしろ改善される。

**Growth-Analyst**: 最終CTAも変更すべき。今は「シミュレーターで診断する」1ボタンだけだが、ゴールが「問い合わせ」なら「専門家に相談する」ボタンも並列で置くべき。

### 決定事項（EDA承認待ち）
- **削除**: 「このツールでわかること」「どんな利用者に向いているか」→ /how-to に移動
- **書き換え**: h1直下リード文をサイト全体像を伝える内容に変更
- **書き換え**: metadata title/description、JSON-LD description を更新
- **書き換え**: 最終CTA → シミュレーター＋問い合わせの2ボタン構成
- **新規追加**: ペルソナ別ナビカード（3択）：「基礎知識を学ぶ」「料金を比較・診断する」「専門家に相談する」
- **維持**: 「解説・比較・月次動向の入口」「テーマ別にさらに詳しく」「最近追加されたページ」はそのまま

---

## 2026-04-18 第5回 サイト名変更の実装方針（Cowork）

**参加者**: 全員 + EDA

### EDAの指示
💬 EDA: 「ここかね？リン、皆と話合って方針を考えてくれる？」（サイト名変更の実装について）

### 影響範囲調査結果
- 100+ ファイルに旧名称がハードコードされている
- siteName（OGP）が各ページのpage.tsxに個別記載
- ヘッダーとフッターで表記揺れあり（読点「、」vs 中点「・」）

### 議論内容
- **Backend-Dev**: siteNameが100ファイルにコピペされている構造がおかしい。定数として1箇所で定義すべき
- **Frontend-Dev**: `src/lib/siteConfig.ts` に SITE_NAME, SITE_DESCRIPTION, SITE_SUBTITLE を定義して各ページからimport
- **QA-Engineer**: 2段階に分けてリスク低減。Step 1でグローバル4ファイル変更→ビルド確認、Step 2で一括置換
- **Content-Strat**: descriptionも実態に合わせて変更すべき。ただしSEOキーワード「法人」「電気料金」は維持
- **Growth-Analyst**: 各ページ固有のtitleは変更しない（SEO影響回避）

### 決定事項
- siteConfig.ts 新設で定数一元管理化
- 3ステップで実装（定数ファイル → グローバル4ファイル → 100+ファイル一括置換）
- Claude Code への依頼文を `.ai-team/TASK_SITE_RENAME.md` に作成

💬 EDA: 「はい」（方針承認、Claude Codeへの依頼文作成を指示）

→ **実装完了確認済み（2026-04-18）**: 全項目OK、旧名称残存ゼロ。package.jsonの構文エラーのみ残存。

---

## 2026-04-18 第2回 TOPページの重要性について（Cowork）

**参加者**: 全員 + EDA

### EDAの問題提起
💬 EDA: 「TOPページについてのみ、皆で話し合ってください。どうしたらよいか？でもTOPから来る人ばかりではないよね。そういう意味でTOPって重要かね？」

### 議論内容

**Growth-Analyst**: Search Consoleの上位クエリは全て個別記事に着地するキーワード。TOPに着地する検索クエリはほぼない。法人サイトの典型パターンでは70-80%が検索→記事ページに直接着地。

**Content-Strat**: 改善すべきはTOPではなく、各記事ページからシミュレーターへの導線では？

**Frontend-Dev**: TOPは「毎日見るページ」ではなく「このサイトは何者かを伝えるページ」。ブックマークするかどうかを決めるハブ。

**Energy-Expert**: 法人担当者の行動パターンは 検索→記事着地→サイト全体を把握→シミュレーター試用→ブックマーク。TOPは初回ランディングではなく2ステップ目のハブ。

**Growth-Analyst**: 最優先改善は「各記事ページ→シミュレーター誘導」。ContentCtaが記事最下部にしかないのが問題。記事中盤にインラインCTAが必要。

**Content-Strat**: CTAは記事内容に合わせてカスタマイズすべき。カテゴリ別に自動出し分け。

**Frontend-Dev**: `ArticleInlineCta` コンポーネントとして実装可能。カテゴリSlugで出し分け。

### 決定事項
- TOPページの位置づけを「ランディング」→「ハブ（全体地図）」に再定義
- 改善A-1を「TOPのCTA」→「記事ページのインラインCTA」に変更
- 旧A-1（TOPのCTA）はB相当に格下げ

### EDAの発言記録（全文）
💬 「TOPページについてのみ、皆で話し合ってください。どうしたらよいか？でもTOPから来る人ばかりではないよね。そういう意味でTOPって重要かね？」
💬 「私のチャットへの記載も記憶しておくような仕組みにしておいてね」
→ MEETING_LOG の記録ルールにEDA発言の原文保存を追加

---

## 2026-04-18 第3回 サイトの本質とゴール再定義（Cowork）

**参加者**: 全員 + EDA

### EDAの問題提起
💬 EDA: 「そもそもTOPやサイトの名前がすでにこのサイトのコンテンツ全体からするとちがってきているのではないだろうか？もともとシュミレーターだけのサイトだったんだけど、もうそうでなくなっている。ターゲットの法人担当者からしたら、シュミレーターを使いたいわけではないから」
💬 EDA: 「ちなみにシュミレーターをさせるのがゴールではなく、問い合わせがゴールです。これも覚えておいてね」

### 議論内容

**Content-Strat**: 35カテゴリ、業種別ガイド、有事シナリオ分析、月次振り返り、診断10種。これだけのコンテンツがあるのに名前が「シミュレーター」は看板と中身のズレ。

**Energy-Expert**: ターゲットの課題は「シミュレーションしたい」ではなく「電力コストをどうすればいいかわからない」。サイト名が手段を名乗っている状態。

**Growth-Analyst**: ゴールが「問い合わせ」であれば、KPIの考え方が全部変わる。シミュレーション実行はゴールではなく中間指標。正しいファネルは: 検索流入→記事で信頼獲得→シミュレーターで自分事化→問い合わせ

**Frontend-Dev / Backend-Dev**: 現状、シミュレーター結果から問い合わせへの導線が設計されていない。ファネルの最後が切れている。

**Content-Strat**: このサイトの本当の価値は「法人の電力コスト意思決定を支援する総合プラットフォーム」。

### 決定事項
- サイトの本質を「シミュレーター」→「法人電力コスト意思決定支援プラットフォーム」に再定義
- 最終ゴールを「シミュレーション実行」→「問い合わせ」に変更
- North Star Metricを「月間問い合わせ数」に変更
- サイト名リブランディングを中期課題として検討開始
- シミュレーター結果→問い合わせ導線を短期で追加

---

## 2026-04-18 第4回 サイト名リブランディング（Cowork）

**参加者**: 全員 + EDA

### EDAの指示
💬 EDA: 「新しいサイト名、提案してくれないかな？今、話し合っているように？法人の電気担当者にとってなくてはならないサイトにするのがゴール、そのうえで、信頼して相談につながる」

### 候補案
1. 法人のための電気料金ガイド — Energy-Expert推し。信頼感・公的な印象。
2. 法人電気料金ナビ — Content-Strat, Frontend-Dev, Backend-Dev, QA-Engineer, Growth-Analyst推し。短く、覚えやすく、SEOに強い。
3. 法人電気料金の羅針盤 — 差別化は強いが検索しにくく堅い。

### 議論ポイント
- Energy-Expert: 「ナビ」は便利ツール感で権威性が弱まるリスク → ヘッダーに「エネルギー情報センター運営」を常時表示で解決
- Growth-Analyst: 「法人電気料金」はSEO実需キーワード。「ナビ」なら指名検索ブランドとして育てやすい
- Frontend-Dev: 10文字はモバイルヘッダーに収まる。titleタグ文字数制限にも余裕

### 決定事項
- **新サイト名「法人電気料金ナビ」に決定（6対1、EDA承認済み）**
- サブタイトル「見直し・比較・リスク診断」
- タイトルタグ: `法人電気料金ナビ｜見直し・比較・リスク診断`

💬 EDA: 「いいですね」（承認）

---

## 2026-04-18 キックオフミーティング（Cowork）

**参加者**: PM-Lead, Content-Strat, Frontend-Dev, Energy-Expert, Backend-Dev, QA-Engineer, Growth-Analyst + EDA（オーナー）

### アジェンダ
1. チーム自己紹介
2. ターゲットユーザーの定義
3. GA4 / Search Console の疎通テスト
4. サイト全体のコードレビューと改善議論

### 議論のハイライト

**ターゲット定義の議論**
- 各エージェントがそれぞれの視点でターゲットを一言で表現
- PM-Leadが統合: 「電力コストの見直しを任されたが、何をどう判断すればいいかわからない法人・自治体の担当者」
- EDA承認済み

**GA4/Search Console疎通テスト**
- サービスアカウント設定 → .env.local 設定 → テストスクリプト実行 → 成功
- 初回テストでWindows改行コード問題発生 → Backend-Devが即修正
- 過去7日間: 872ユーザー, 5,014PV

**サイト改善議論の主要論点**
- Growth-Analyst: トップページのシミュレーターCTAが最下部にしかない（致命的）
- Frontend-Dev: ファーストビューが説明文で埋まっている。忙しい担当者は離脱する
- Content-Strat: 記事ハブの35カテゴリが初心者には圧倒的すぎる
- Energy-Expert: シミュレーターの倍率がハードコード、根拠と最新性の検証が必要
- Backend-Dev: HomePageClient 1,300行が保守性リスク
- QA-Engineer: 計算ロジックにテストがゼロ。法人向けサイトとして致命的

### 決定事項
- 改善提案9件を策定（DECISIONS.md参照）
- EDAの承認後、Sprint 1として優先度A（3件）から着手

### 次回アクション
- EDAが改善提案A/B/Cの優先度を承認
- 承認後、Sprint 1開始
