# チーム意思決定ログ

> このファイルは、AIエージェントチームの重要な意思決定を記録する。
> 新しいセッション開始時に必ず読み込むこと。

---

## 2026-05-01 朝〜午後セッション

### 2026-05-01-D1: B-32（FaqPageJsonLd 拡大）全面中止

当初 15 候補を抽出したが、リン側の追加調査で全 15 件が `<ArticleJsonLd faq={...}>` 経由で既に FAQPage schema 出力済と判明。
ClaudeCode に発注したが、コミット 0 件状態で停止 → ブランチ `claude/B-32-faq-schema-expansion-20260501` 削除。

サイト全体カバレッジ:
- `<ArticleJsonLd faq={...}>` 経由出力: 416 ファイル
- `FaqPageJsonLd` 単体使用: 10 ファイル
- 合計 426 / 533 ファイル ≈ 80% カバレッジ済

真の未適用は 2 件（contact, electricity-double-billing-faq）でいずれも別経路で schema 出力済 → 施策成立せず。

### 2026-05-01-D2: Lesson-12 案を確立（5/5 後 ops-notes 統合予定）

**Lesson-12: 構造化データ「未適用」判定の方法論欠陥**

import の有無のみで判定せず、共通コンポーネント本体（`src/components/seo/JsonLd.tsx`）の prop 仕様を必ず Read してから発注プロンプトを書く。
今回 `ArticleJsonLd` の `faq?` 内蔵 prop を見落とし、15 ファイル全件で schema 重複追加リスクが発生する仕様を出してしまった。

### 2026-05-01-D3: B-33 (HowToJsonLd 拡大) マージ完了 (PR #143)

- ブランチ: `claude/B-33-howto-schema-expansion-20260501` / SHA: `c77c844`
- diff: 9 files, +72 -9（一律 +8 -1 / file）
- HowToJsonLd 適用記事数 8 → **17**（+9）
- 対象: emergency-* 系 6 件 + how-to-switch-electricity-provider + reduce-cost-without-switching + internal-consensus-building-order
- 各ファイルで既存 steps 配列の中身は無変更、type 変換 mapping 行のみ追加
- リン PRE_MERGE_CHECKLIST 全項目 PASS、GO 判定 → KENJI さんマージ完了
- ビルド: 37.9s / 759 ページ生成 / 0 error
- Rich Results Test で 9 件全件 HowTo 認識確認済

### 2026-05-01-D4: Lesson-13 案を確立（5/5 後 ops-notes 統合予定）

**Lesson-13: 検証コマンドの期待値は実装完了形を脳内シミュレーションしてから書く**

B-33 仕様書でリンが「`total_match=3`」と書いたが、正しくは `total_match=2`（`import` 行 1 + JSX 開始タグ 1 = 計 2 出現が正常）。
ClaudeCode が指摘して事なきを得たが、リン側の仕様書品質に課題。

### 2026-05-01-D5: B-1d-4（TOC 拡大第二弾）プロンプト完成、5/2 朝発注予定 → **後に保留へ**

- ファイル: `.ai-team/B-1d-4_TOC_EXPANSION_2026-05-01.md`
- 候補 18 件: case-study 系 10 件全て + 高 H2 大型記事 8 件
- TOC 適用 72 → **90**（+25%）想定
- ※ 後の D9 で発注完全保留に変更（TOC バグ修正後に再開）

### 2026-05-01-D6: 案 A 採用（5/1 で打切り、5/2 に B-1d-4、5/3 休息）

KENJI さん「ガンガン動く」モード継続中だが、5/1 中に既に B-32 中止 + B-33 マージで密度高い半日。
5/1 中の追加発注（B-1d-4 連続投下）はリスク重視で見送り。

採用ロードマップ:
- 5/1 残り: KENJI さん B-33 反映確認 + インデックス申請 / リン DECISIONS / HANDOVER / 競合 SERP / C-2 QA
- 5/2: KENJI さん B-1d-4 発注 → マージ / リン B-1d-4 検証 + ドラフト QA 続き
- 5/3: 完全休息
- 5/4: リン 競合 SERP 取得（クエリリストは 5/1 終に確定）
- 5/5: GSC 計測 → 達成判定

### 2026-05-01-D7: TOC 無限ループバグ発覚 + B-34 緊急修正発注（最重要）

KENJI さんの実機確認で「`/business-electricity-price-trend-10-years` の内部リンクが効かない」と報告。
リン側調査で 3 ページ追加検証（`/business-electricity-bill-breakdown` `/jepx-explained` `/last-resort-supply`）で同症状確認 → **TOC 適用済 72 ページ全件で内部リンクが応答しない重大不具合と確定**。

**原因**: `src/components/market-data/TableOfContents.tsx` の `useEffect` で、依存配列に `selectors`（関数引数のデフォルト配列）を入れたため、毎レンダリングで新規参照 = useEffect 毎回再実行 = setItems で再レンダリング = **完全な無限ループ**。CPU が無限ループに専有され、`<Link>` のクリックイベントが応答する余裕なし。

**バグ潜在期間**: TableOfContents.tsx 作成時から（B-1a 系の TOC 初適用 = 2026-04-27 頃以降、約 1 週間）。GSC で TOC 適用記事の CTR・滞在時間が低下していた可能性大。

**緊急対応**:
- B-34 発注プロンプト（最小修正、`DEFAULT_SELECTORS` を module-level const に出すだけ）作成済 → KENJI さんが ClaudeCode に発注予定
- B-1d-4（TOC 18 ページ追加、5/2 朝発注予定）は **B-34 マージまで完全保留**
- 修正すれば 72 ページの内部リンクが一気に正常化、5/5 GSC 計測時にもプラス効果が期待される

**5/5 計測時の追加分析項目**:
- TOC 適用記事 vs 未適用記事の CTR 差分
- 4/27 以降の TOC 適用記事の imp / click 推移（バグ期間とその後）

### 2026-05-01-D8: Lesson-14 を確立（即 ops-notes 統合済）

**Lesson-14: React useEffect の依存配列に「関数引数のデフォルト配列」を入れない**

5/5 後にまとめて統合予定の Lesson-12/13 と異なり、Lesson-14 は **致命的不具合の予防**のため即時 `.ai-team/memory/ops-notes.md` §19 として統合済。

**恒久ルール**:
1. useEffect の依存配列に「関数引数のデフォルト配列／オブジェクト」を直接入れない（参照不安定で無限ループ）
   - 対策: module-level const に出す / useMemo でメモ化 / 依存から外す
2. Client Component の useEffect は必ず「依存配列の参照安定性」を確認してから書く
3. 「ページ全体のリンクが効かない」型の症状が出たら、まず Client Component の useEffect 無限ループを疑う

詳細: `.ai-team/memory/ops-notes.md` §19 を参照。

### 2026-05-01-D9: B-1d-4 発注を完全保留 → **後に解禁（D10 参照）**

TOC バグ確定により、B-1d-4（TOC 18 ページ追加）を **5/2 朝発注予定だったが完全保留**。
B-34 マージで TOC が修正されてから再開。

## 2026-05-02 朝〜午後セッション

### 2026-05-02-D11: B-35（FAQ schema 重複削除）マージ完了（PR #145）

- ブランチ: `claude/B-35-faq-schema-dedupe-20260502` / SHA: `2436c15`
- diff: 3 files, +3 -6（最小修正）
- articles/basic/pricing・contracts・risk から FaqPageJsonLd 単体使用を削除、ArticleJsonLd.faq prop に統一
- リン PRE_MERGE_CHECKLIST 全項目 PASS、KENJI さんマージ完了
- GSC「項目 FAQPage が重複」エラー 6 件 → 0 件（次回クロール反映後に確定）
- 5/1 の B-32 調査時にリンが既に予測していた問題（DECISIONS 5/1-D2）の前倒し対応

### 2026-05-02-D12: B-1d-4（TOC 拡大第二弾）マージ完了（PR #146）

- ブランチ: `claude/B-1d-4-toc-expansion-20260502` / SHA: `1050c3f`
- diff: 18 files, +54 -0（一律 +3 / file）
- case-study 系 10 件全て + 高 H2 大型記事 8 件に TOC 追加
- TOC 適用記事数 72 → **90**（+18）
- リン PRE_MERGE_CHECKLIST 全項目 PASS、KENJI さん実機動作確認（case-study-hospital-peak-cut）OK → マージ完了
- B-34 で TOC 無限ループ修正済のため安全に拡大できた

### 2026-05-02-D13: 構造化データ整合性総点検（案 B）— 全項目 CLEAR

サイト全体（533 ファイル）で以下を grep スキャン:
- `<ArticleJsonLd faq>` + `<FaqPageJsonLd>` 二重出力: **0 件**
- `<HowToJsonLd>` 同一ファイル内二重使用: **0 件**
- `<ReviewJsonLd>` 同一ファイル内二重使用: **0 件**

→ 隠れた構造化データ重複は存在しない。B-36 として追加発注は不要。
GSC で残るエラーは B-35 関連の 6 件のみ（クロール反映待ち）。

### 2026-05-02-D14: B-1d-5（TOC 拡大第三弾）マージ完了（PR #147）

- ブランチ: `claude/B-1d-5-toc-expansion-20260502` / SHA: `81863da`
- diff: 12 files, +36 -0（一律 +3 / file）
- H2 11+ の高ボリューム記事 12 件に TOC 追加
- TOC 適用記事数 90 → **102**（+12）
- 階層差（1 階層 vs 3 階層）の import path も正しく実装（B-32 教訓反映）
- retrospective/2026-* (2 件) は `../../../components/market-data/TableOfContents` で 3 階層対応
- リン PRE_MERGE_CHECKLIST 全項目 PASS、KENJI さん実機動作確認（retrospective/2026-02）OK → マージ完了

### 2026-05-02-D15: 5/2 終時点の累計成果と 5/5 達成見込み

5/1 朝〜5/2 終時点の累計:
- マージ済 PR: **5 本**（B-33 / B-34 / B-35 / B-1d-4 / B-1d-5）
- TOC 適用記事数: 47 → **102**（+55、約 2.2 倍）
- HowToJsonLd 適用記事数: 8 → **17**（+9）
- 重大バグ発見・修正: 1 件（TOC 無限ループ、約 1 週間潜在）
- 確立した教訓: Lesson-12 / 13 / 14（Lesson-14 は致命性のため即統合済）

**5/5 達成シナリオ確率**: 80% → **90%** に上方修正
- TOC バグ修正で 102 ページの内部リンクが正常動作
- B-35 で FAQ schema エラー解消
- TOC カバレッジ大幅拡大（特に case-study 系 10 件全件）

### 2026-05-02-D16: 5/3 完全休息へ移行 + ロードマップ確定

- 5/3 (日): 完全休息（軽量 GSC 確認のみ）
- 5/4 (月): リン 競合 SERP 取得（クエリリスト確定済 → COMPETITOR_SERP_QUERIES_2026-05-01.md）
- 5/5 (火): GSC 計測 → 達成判定 → 達成シナリオなら C-2 ピラー記事 → T1 → 季節記事 → プレスリリース順次発注

達成シナリオ判定基準（達成: 平均順位 8.0〜8.5 / 日 imp 800〜900 / 新規クエリ +20〜30）:
- 平均順位 -0.5〜-1.0 改善
- imp +15〜25%
- TOC バグ修正効果が 4/27 以降の隠れた CTR 低下を回復させる可能性

---

## 2026-05-01 朝〜午後セッション

### 2026-05-01-D10: B-34 マージ完了 + 内部リンク復旧確認 + B-1d-4 発注解禁

- ブランチ: `claude/B-34-toc-infinite-loop-fix-20260501` / SHA: `7486928`
- diff: 1 file, +3 -1（最小修正）
- リン PRE_MERGE_CHECKLIST 全項目 PASS、GO 判定
- KENJI さん 5/1 夕方マージ → Vercel デプロイ完了 → **NG だった 4 ページすべてで内部リンク復旧確認**
  - /business-electricity-price-trend-10-years ✅
  - /why-business-electricity-prices-rise ✅
  - /business-electricity-bill-breakdown ✅
  - /jepx-explained ✅
- TOC 適用済 72 ページ全件で同時に正常化したと推定（実質サイト全体の内部リンク復旧）

**判定**:
- B-1d-4 発注を **解禁**、5/2 朝に予定通り発注 OK
- D9 の「完全保留」を取り消し
- 5/2 朝の B-1d-4 発注 → マージで TOC 適用 72 → 90 達成見込み

**5/5 計測への影響**:
- TOC バグの修正で、4/27 以降低下していた可能性のある TOC 適用記事の CTR・滞在時間が回復
- 5/5 計測時の達成シナリオ確率が **80% → 85% に上方修正** 可能（達成判定は 5/5 当日に確定）

---

## 2026-04-30 B-22: GSC 7日データに基づく 5記事 CTR 最適化 (PR #135)

- (1) bilateral-power-contracts, (5) renewable-energy-surcharge: title/description 全更新
- (2) capacity, (3) accounting-guide, (4) price-trend-10-years: keywords のみ追加（title/desc は既に最適化済のため変更せず）
- 期待効果: 月 10〜20 クリック増（即反映）
- リン検証: PR #135 全項目 PASS、マージ判定 GO
- ブランチ: `claude/B-22-title-description-optimization-20260430`、SHA `9dc9079`、diff stat 5 files +27/-6

---

## 2026-04-28（リン整備セッション + B-19 マージ）

### 2026-04-28-D1: 4/27 INTERNAL_LINK_DENSITY_AUDIT は方法論欠陥

旧監査の grep `grep -c 'href="/'` は JSX 属性形式のみ計測し、`RelatedLinks` の
`{ href: "/..." }` 形式（オブジェクトプロパティ）を見逃していた。25本中23本が誤検出。

→ 修正版（`INTERNAL_LINK_DENSITY_AUDIT_2026-04-28_CORRECTED.md`）で上書き、
旧 B-9 / B-10 発注は廃棄、新 B-19（真に低密度な6本）に置換。

### 2026-04-28-D2: B-19（PR #127 / SHA `12e8544`）マージ完了

- Branch: `claude/B-19-low-density-hubs-20260428-1340`
- 6 files changed, +77 -0
- Build: 176秒、エラーなし
- 全6ファイル outgoing ≥5（manga は ≥8）達成

### 2026-04-28-D3: ContactCtaCard ≠ ContentCta の発見

B-19 実装時に判明:
- `posters` `manga` などのハブ系記事は `ContactCtaCard`（src/components/contact/）を使用
- 通常記事ページは `ContentCta`（src/components/simulator/）を使用
- `data-visualizations` は ContactCtaCard すら無く、`ComparisonRadar` 直後に挿入

→ 今後の発注プロンプトでは「ContentCta or ContactCtaCard の **直前**」と両形式に対応する文言にすべき。
→ data-visualizations のような特殊レイアウト記事は「`</main>` 直前」を fallback として明示。

### 2026-04-28-D4: リン側準備完了の確認

PART3（B-19/B-20/B-21/C-1/T1-#11/T1-#13/B-14）+ 月次振り返り 2026-05号完成形 +
GSC 流し込みヘルパー + 薄い記事補強プラン + Lesson-09 すべて準備済。

### 2026-04-28-D5: 本日 7 PR を main に投入（圧巻のスループット）

朝 wait-and-see モード予定だったが、PART3 完成後に KENJI さんから即発注の判断があり、
1日で 7 PR がすべてマージされた。本日 main HEAD = `6256bc0`。

| PR | ID | 内容 | 効果 |
|---|---|---|---|
| #128 | B-1d-1 | TOC を how-to 系4記事に追加 | TOC 47→51 |
| #127 | B-19 | 低密度ハブ6本に RelatedLinks 追加 | 6資源ハブの outgoing 強化 |
| #129 | B-21 | Footer に資料・コンテンツハブ5本リンク追加 | 全549頁から資源ハブへ incoming 強化 |
| #130 | B-1d-2 | TOC を基礎・FAQ系9記事に追加 | TOC 51→60 |
| #131 | B-1d-3 | TOC を契約・プラン系9記事に追加 | TOC 60→69 |
| #132 | B-6b | ReviewJsonLd 追加 + 1記事適用 | Review schema 0→1 + 共通基盤完成 |
| #133 | B-6b-2 | 残り case-study 9 + switching に Review schema | Review schema 1→11 |

最終達成: TOC **47→69**（+22）/ Review schema **0→11**（+11）/ 6資源ハブの中央駅化完成。
5/5 計測まで残 7 日、施策は出し尽くした状態で wait-and-see モード本格突入。

### 2026-04-28-D6: B-6b の slug spec ミスと Lesson-11 確立

リン側の発注プロンプトで case-study 系 7 slug のうち 6 slug が空想（実在しない）だった。
ClaudeCode は強引に新規作成せず、実在 1 slug のみ正しく適用 + 残りは差分発注に回す形で報告
（Lesson-07 を正しく実行）。

→ 教訓 Lesson-11: **発注プロンプトの slug は必ず repo を `ls src/app/` で実地確認してから書く**。
  特に case-study / switching / case のような事例系記事は命名規則がブレやすい。

差分発注 B-6b-2 で 10 件追加し、最終的に当初目標 7 件を超えて **11 件適用達成**。

---

## 2026-04-18（キックオフ）

### ターゲット定義（全員合意）
**「電力コストの見直しを任されたが、何をどう判断すればいいかわからない法人・自治体の担当者」**

### ペルソナ
1. **総務部 電力担当（中堅企業）** — 40代、専門家ではない、上司から「電気代を下げろ」と言われている
2. **自治体 施設管理課** — 50代、公共施設の電力一括管理、入札対応が必要
3. **エネルギー管理士（大企業）** — 30代、専門知識あり、最新の市場動向・データを求めている

### インフラ完了事項
- Google Cloud サービスアカウント作成済み（`eic-analytics@eic-simulator.iam.gserviceaccount.com`）
- GA4 閲覧権限付与済み（プロパティID: 311657832）
- Search Console 閲覧権限付与済み（サイト: https://simulator.eic-jp.org）
- `.env.local` に認証情報設定済み
- `scripts/test-google-api.mjs` で疎通確認済み（2026-04-18）
- `googleapis` パッケージをインストール済み

### GA4ベースライン（2026-04-11〜04-18、7日間）
- 総ユーザー: 872
- 総セッション: 1,074
- 総PV: 5,014
- 平日: 150〜180ユーザー/日、土日: 26〜28ユーザー/日

### Search Console上位クエリ（同期間）
- 「電気料金推移 10年 法人」— 順位2.9、CTR 45.5%（強い）
- 「高圧 電力 見直し」— 順位7.7、クリック1（ターゲットど真ん中、改善余地大）
- 「燃料費調整額 市場価格調整額 違い」— 順位6.0（実務者向け）

### 改善提案（優先度順、EDA承認待ち）

#### 優先度A: 今すぐやるべき（1〜2週間）
- **A-1** 記事ページにインラインCTAコンポーネント追加（カテゴリ別自動出し分け）→ Frontend-Dev + Content-Strat ⭐ 最優先
- **A-2** シミュレーター計算ロジックのユニットテスト作成（1,300行のHomePageClientから計算ロジック切り出し）→ QA-Engineer + Backend-Dev
- **A-3** ストレスシナリオ倍率の検証・更新（ハードコード値の妥当性確認）→ Energy-Expert

#### 優先度B: 2〜4週間で着手
- **B-1** HomePageClientの分割リファクタリング → Frontend-Dev + Backend-Dev
- **B-2** 記事ハブのUX改善（ペルソナ別入口に整理）→ Content-Strat + Frontend-Dev
- **B-3** リンク切れ・未実装ページの一掃 → QA-Engineer
- **B-4** TOPページのCTA配置改善 + ハブとしての再設計（旧A-1）→ Frontend-Dev

### EDAの重要な指摘（2026-04-18）

💬 「TOPから来る人ばかりではないよね。そういう意味でTOPって重要かね？」
→ TOPページ改善を最優先から格下げ。記事ページの改善を最優先に変更。
→ TOPの役割を「ランディング」→「ハブ（全体地図・ブックマーク判断の場）」に再定義。

💬 「そもそもTOPやサイトの名前がすでにこのサイトのコンテンツ全体からするとちがってきているのではないだろうか？もともとシミュレーターだけのサイトだったんだけど、もうそうでなくなっている。ターゲットの法人担当者からしたら、シミュレーターを使いたいわけではないから」
💬 「シミュレーターをさせるのがゴールではなく、問い合わせがゴールです」
→ **サイトの根本的な再定義が必要。**

### サイト再定義（2026-04-18、EDA方針）

#### サイトの本質（旧→新）
- 旧: 電気料金シミュレーター（計算ツール）
- 新: **法人の電力コスト意思決定を支援する総合プラットフォーム**

#### 最終ゴール（旧→新）
- 旧: シミュレーション実行
- 新: **問い合わせ（エネルギー情報センターへの相談）**

#### ファネル
```
検索流入 → 記事で信頼獲得 → サイト全体像を理解 → シミュレーターで自分事化 → 問い合わせ
```
シミュレーターはゴールではなく、問い合わせに至る中間ステップ。

#### KPI再設計
- North Star Metric: **月間問い合わせ数**
- 先行指標: シミュレーション完了数、記事→シミュレーター遷移率、リピーター率
- 健全性指標: 検索順位、PV、記事滞在時間

#### サイト名リブランディング（2026-04-18、EDA承認済み）

- **新サイト名: 法人電気料金ナビ**
- **サブタイトル: 見直し・比較・リスク診断**
- **タイトルタグ: `法人電気料金ナビ｜見直し・比較・リスク診断`**
- ヘッダーに「一般社団法人エネルギー情報センター運営」を常に表示し信頼性を担保

💬 EDA: 「いいですね」（候補3案の中からチーム推薦の「法人電気料金ナビ」を承認）

選定理由:
- 短く覚えやすい（10文字）、口頭で伝えやすい
- 「ナビ」=迷っている人を案内する。ターゲットの状態そのもの
- 「法人電気料金」がSEOキーワードとしてそのまま入る
- シミュレーターだけでなく記事・診断・分析すべてを包含する

#### 要対応事項
- サイト名変更の実装（全ページのmetadata、OGP、JSON-LD、ヘッダー、フッター）
- ~~シミュレーター結果ページ → 問い合わせ導線の追加~~ ✅ **完了 2026-04-18**（Frontend-Dev + Backend-Dev）
- 全ページの問い合わせCTA設計（ContactCtaCardコンポーネントを再利用）

### Sprint 1-09 実装記録（2026-04-18、Frontend-Dev + Backend-Dev）

#### 実装範囲
- **Frontend-Dev**: 再利用型 Client Component `src/components/contact/ContactCtaCard.tsx` 作成
  - Props: `source` / `variant` (primary/secondary) / `heading` / `description` / `ctaLabel` / `context`
  - 結果文脈（riskLabel, riskScore, contractType, region, diffRate, resultId）を query params として /contact に引き継ぎ
  - クリック時に GA4 `contact_cta_click` イベント送信（source/variant/リスク指標をパラメータとして）
- **Frontend-Dev**: `ComparePageClient` に CTA を 2箇所挿入
  - (1) 結果サマリー直下: primary variant（最も熱量の高い瞬間）
  - (2) 「再度入力する」の下: secondary variant（読了後の最終接点）
- **Backend-Dev**: `/contact` を Server Component のまま `searchParams` 対応（Next.js 16 の `Promise<searchParams>` 形式）
  - `?from=compare-result-primary&risk_label=...&risk_score=...&contract_type=...&region=...&diff_rate=...&result_id=...` を受けて冒頭にコンテクストバナーを表示
  - 契約区分・地域を日本語化して表示
  - 「シミュレーター結果を引き継ぎ中」バッジ + 来訪元表示 + 結果ID を担当者伝達用に表示

#### デザイン判断
- CTA 色は敢えて **amber（橙）** を primary で採用。サイト全体の sky-blue とは差別化し、「行動喚起の特別セクション」と視覚的に認識させる
- リスクラベルとリスクスコアをボタン近傍に表示し、ユーザーに「この結果を持って相談に進む」実感を付与
- GA4 イベントは `source` 別に区別できるため、どの配置が CTR 高いかを Growth-Analyst が後日計測可能

#### 次ステップ候補
- 他ページ（/simulate 結果、/benchmark、/journey 末尾）への ContactCtaCard 展開
- `source` 別 CTR を Growth-Analyst が GA4 で比較しベストプラクティス確立

#### 優先度C: 1〜2ヶ月で取り組む
- **C-1** 検索キーワード強化記事の企画・制作（5〜10本）→ Content-Strat + Energy-Expert
- **C-2** 診断ツール10種への導線強化 → Frontend-Dev + Content-Strat
- **C-3** GA4カスタムイベントの設計・実装 → Growth-Analyst + Frontend-Dev

---

## 2026-04-23/24 スプリント 確定事項

### SEO 大型リリース（3 PR マージ + 1 PR 作業中）

#### PR #69（2026-04-23）: Batch A G-04/G-05 公開
- **G-04** `/tariff-revision-calendar-2026`（price-trends, featured:true, order:26）
  - タイトル: 「2026〜2028年 法人電気料金 制度改定カレンダー｜容量拠出金・再エネ賦課金・託送料金の時系列一覧」
  - 実数字: 再エネ賦課金 2026年度 4.18円/kWh、容量拠出金 2027年度 7,847円/kW、2028年度 首都圏 14,812円/kW
- **G-05** `/demand-response-revenue-model`（power-procurement, order:25）
  - 業種別 kW あたり年間収益レンジ 5 業種、分配比率 60-70% 需要家
- **Energy-Expert 外部監修は不要判断**（EDAさん確定、実質的存在しないロール）

#### PR #70（2026-04-24）: CTR リライト 7 記事
- 対象: /jepx-price-trend-and-corporate-impact, /market-price-adjustment, /business-transfer-name-change-procedure, /electricity-expense-accounting-guide, /capacity-contribution-explained, /when-will-business-electricity-prices-drop, /electricity-rate-revision-mechanism
- 根拠データ: GSC 過去 3 か月、4/13 以降 表示 16.4倍、CTR 7.77% → 2.46% 低下（一般ユーザー流入が本格化しクリック取れていない記事を特定）
- 特に高 ROI: /jepx-price-trend-and-corporate-impact（表示 577 / CTR 0.5%）→ リライト効果を 5/5 GSC で検証

#### PR 作業中: /kenji-eda プロフィール強化
- 著書 8 冊 × Amazon リンク
- 講演テーマ 6、講演実績 23 団体（政府/商工会議所/公益財団/企業教育機関）
- 最新の登壇: 福井商工会議所 4/28、東京商工会議所 4/10 アーカイブ
- サイト内おすすめコンテンツ 9 記事への内部リンク
- JSON-LD 強化（Book 型 8 件、sameAs 拡充）

### SEO バックリンク戦略（確定）

**1 リンク戦略**: セミナー主催者への依頼は **`/kenji-eda` の URL 1 本のみ**。2 本以上の依頼はビジネスマナー上差し出がましいため NG。

- 理由: 商工会議所等の主催者は EDAさん の講師略歴欄に自然に URL を掲載してくれる（福井・東京商工会議所で確認済）
- 各セミナーごとに質の高いバックリンクが 1 本蓄積
- 着地ページ（/kenji-eda）で 9 本の内部リンクに分岐させ、サイト内回遊を最大化 → リンクジュース還流

### Phase 2（02G: PublicHeader Server/Client 分割）判定

**発注見送り、5/5 GSC 中間計測まで wait-and-see** 確定。

- Day 1-3 朝夕の観測で TBT は 3 URL すべて改善（Phase 1 効果の定常化）
- `/` の LCP run 分散は構造問題ではなく run 分散 or CDN キャッシュ状態の影響
- 3 URL とも Perf 90+ 維持
- 実装コスト vs 改善余地が見合わないと判定

### GSC 観測基準線（2026-04-24 時点）

- 合計クリック 262 / 表示 7,925 / CTR 3.31% / 平均順位 9.0（過去 3 か月）
- 勝ちクエリ TOP: 「電気料金推移 10年 法人」CTR 25.8%、「高圧 電力 見直し」15.4%
- Batch B キーワード候補 8 件（ダックカーブ、容量拠出金とは、電力 BCP、蓄電池減価償却、電気料金 推移 グラフ、法人 電気料金 値上げ、電気代 勘定科目、電気料金 推移 10年 法人）

### EDAさんの重要指摘（2026-04-23/24）

1. 「3月は関係者のアクセスがほとんど」「一般の人のアクセスは 4月2週目くらいから」 → GA4 のユーザー平均ビューが高いページは除外して分析
2. 「先方サイトなので、1 リンクのみ・プロフィールのみが健全」 → バックリンク戦略の方針確定
3. 「外部監修は不要」 → Energy-Expert ロール不要確定
4. 「全部 OK、公開して修正なし」 → リン自律実装への信頼度向上、同等の大型変更もリン主導で可

## 2026-05-05 朝〜夕方セッション

### 2026-05-05-D1: GSC 計測達成判定 = 混合シナリオ確定

**背景**: 5/5 朝に KENJI さんから GSC 直近 7 日データ（クエリ 350+ / ページ 480+）を共有。

**判定数値**:

| 指標 | 4/22 ベース | 5/5 結果 | 達成判定 |
|---|---:|---:|:---:|
| 日平均 imp | 700 | **1,620** | ✅✅ 131% 達成 |
| 日平均 click | - | 22.4 | - |
| 平均掲載順位 | 9.0 | 9.09 | ❌ 横ばい |
| CTR | - | 1.38% | ⚠ 改善余地 |

**結論**: 混合シナリオ（imp 大勝利、順位横ばい、未登録問題発覚）

### 2026-05-05-D2: 未登録 25-27 件の重大問題発見（最大の構造課題）

**現象**: GSC「クロール済み - インデックス未登録」が 25 ページ滞留。
さらに B-23（/emergency-billing-dispute）と B-36（/ai-workload-energy-impact）改修記事 2 件も未登録判定。

**サイト全体推移**:
- 4/06: 未登録 0 / 登録 38
- 4/07: 未登録 **283** / 登録 68（大量追加で急増）
- 4/21: 未登録 51 / 登録 **665**（大規模インデックス完了）
- 4/27: 未登録 32 / 登録 664（32 件滞留）
- 5/05: 未登録 25（5/5 計測時点）

**真の原因仮説**（2 件抽出 Read で確認）:
- /reduce-cost-without-switching / /about-this-site → 本文充実、metadata 完備
- → コンテンツ品質ではなく **重複コンテンツ判定 + 内部リンク不足** が主因

**致命的影響**: B-23 / B-36 改修効果が無効化されていた。5/5 で発見できなかったら 5/12 / 5/15 で SEO 戦略全体が機能不全に。

### 2026-05-05-D3: B-38a sitemap 優先度シグナル送信 → PR #149 マージ

- ブランチ: `chore/B-38a-sitemap-priority-for-not-indexed-20260505`
- SHA: `d0cf752`
- diff: 1 file (sitemap.ts), +56 / -4
- 25 件の URL を `priority: 0.9 / changeFrequency: weekly` で優先化
- ヘルパー関数 `resolvePriority` / `resolveChangeFrequency` で既存挙動完全保持
- ビルド成功（30.2s, 759 ページ）
- マージ完了 + KENJI さんが sitemap.xml 再申請完了

### 2026-05-05-D4: B-38b-1 業務契約系 8 件 metadata 差別化 → PR #150 マージ

- ブランチ: `chore/B-38b-1-business-contract-differentiation-20260508`
- SHA: `bffcd69`
- diff: 8 files, +104 / -46
- 各記事の読者ターゲットとユースケースを title に明示（重複判定回避）
- 対象:
  - /reduce-cost-without-switching: 切替に消極的な総務担当者向け
  - /non-price-factors-in-electricity-contract: 単価以外の確認 7 項目
  - /how-procurement-affects-corporate-rates: JEPX依存度・自社電源比率
  - /low-margin-company-price-surge-risk: 利益率5%以下の中小企業
  - /how-to-explain-electricity-cost-review-internally: 社内稟議の説明資料
  - /electricity-quote-evaluation-checklist: 8領域30項目チェックリスト
  - /low-voltage-review-essentials: 小規模事業者・店舗・SOHO向け
  - /spin-off-energy-contracts: 会社分割・分社化時の引継ぎ
- ビルド成功（28.4s, 759 ページ）
- リン PRE_MERGE_CHECKLIST 全項目 PASS
- マージ完了

### 2026-05-05-D5: B-38b-2 個別 page 11 件 metadata 差別化 → PR #151 マージ

- ブランチ: `chore/B-38b-2-metadata-differentiation-11pages-20260505`
- SHA: `c8eeae2`
- diff: 11 files, +122 / -31
- 対象（特集トップ + 太陽光蓄電池 + 基礎解説 + 業種メタ）:
  - /special/emergency-scenario-analysis（特集トップ）
  - /solar-suited-corporations / /why-corporations-consider-batteries
  - /electricity-cost-reduction-case-studies
  - /how-electricity-prices-are-determined（keywords 3→12 件で大幅拡充、最重点）
  - /winter-vs-summer-electricity / /last-resort-supply-terms
  - /municipality-re100-decarbonization
  - /telecom-facility-electricity-cost-review
  - /about-this-site / /downloads（keywords 新規追加 12 件、致命的欠落解消）
- ビルド成功（36.7s, 759 ページ）
- リン PRE_MERGE_CHECKLIST 全項目 PASS
- マージ完了

### 2026-05-05-D6: C-2 ピラー記事 5/8 → 5/5 前倒し発注

**背景**: B-38a/b-1/b-2 で未登録対策 19 件完遂 = サイト全体の Google 認知サイクル正常化。
このタイミングで C-2 ピラー記事を投入することで、5/8 まで待たずに最大効果を獲得。

**判断根拠**:
1. 5/5 で imp 急増（700→1620/日、+131%）の勢いを click に転換する起爆剤
2. 「電気料金削減 見直しポイント」(155 imp / 順位 47.29 / click 0) は最大未開拓クエリ
3. 5/8 まで待つと 3 日分の機会損失（imp 460+ / 想定 click 損失 5-10）
4. ClaudeCode は Max プラン（Pro 20 倍）契約で負荷余裕あり

**発注内容**:
- ブランチ: `claude/C-2-cost-reduction-review-points-20260505`
- 新規ファイル: `src/app/business-electricity-cost-reduction-review-points/page.tsx`
- 字数目標: 6,500-7,500 字
- 内部リンク 15 個以上、/renewable-energy-surcharge への内部リンク 2 回以上
- 構造化データ: ArticleJsonLd（faq prop 未使用） + BreadcrumbJsonLd + FaqPageJsonLd（別出力）+ HowToJsonLd
- sitemap 優先度 0.95 / weekly 設定

**完成形プロンプト**: `.ai-team/PILLAR_COST_REDUCTION_PROMPT_2026-05-08_FINAL.md` §1 を完全再現

### 2026-05-05-D7: B-38b-3 動的ルート系 6 件 → 5/6 朝発注に持ち越し

**背景**: 動的ルート系 6 件（特集子 4 + カテゴリ系 1 + 業種系 1）は型定義拡張 + データファイル + 動的ルート page.tsx の修正が必要で工数大。
ClaudeCode 負荷管理と KENJI さんマージ判断回数の上限を考慮し、5/6 朝に持ち越し。

**対象**:
- /special/emergency-scenario-analysis/scenario-2 / industry-impact
- /special/oil-scenario-analysis/subsidy-outlook
- /special/materials-packaging-scenario-analysis/industry-impact
- /articles/energy-equipment（カテゴリページ）
- /articles/by-industry/commercial/restaurant-izakaya（業種別動的ルート）

**完成形プロンプト**: `.ai-team/B-38b_BATCH3_PROMPT_2026-05-06.md` 完成済

### 2026-05-05-D8: B-37 Lessons 統合 → 5/6 docs PR で一括統合

**背景**: 5/5 までに確立した 5 つの Lesson（Lesson-12/13/15/16/17）を `.ai-team/memory/ops-notes.md` に §20-§24 として一括統合。

**新規 Lesson**:
- **Lesson-16**: 新規大量記事追加時のインデックス登録監視必須（5/5 朝の未登録 25-27 件発見から確立）
- **Lesson-17**: GSC インデックス申請には 1 日上限あり、大量未登録対策時は分割（5/5 27 件申請で上限到達から確立）

**完成形プロンプト**: `.ai-team/LESSONS_UPDATE_DRAFT_2026-05-04.md`（5/5 で更新済）

### 2026-05-05-D9: GSC インデックス申請 27 件で上限到達

**現象**: 5/5 中に B-23/B-36 改修 2 件 + B-38a 効果 25 件 = 計 27 件の申請を実施し、GSC で「1 日の上限に達しました」エラー。

**対応**:
- B-38b-2 の 11 件 + C-2 の 1 件は **5/6 朝以降に申請持ち越し**
- B-38b-3 の 6 件は **5/6-7 に申請予定**

**確立**: Lesson-17（GSC インデックス申請には 1 日上限あり、10-20 件程度）

### 2026-05-05-D10: 5/5 セッション 累計成果サマリ

**マージ済 PR**: 3 本（B-38a / B-38b-1 / B-38b-2）+ C-2（実装中）

**未登録対策完了件数**: 19 件 / 25 件（76%）→ 残り 6 件は B-38b-3 で 5/6 に完遂予定

**その他**:
- リン側完成済成果物 5 ファイル：
  - B-38b_BATCH2_PROMPT / B-38b_BATCH3_PROMPT
  - PILLAR_COST_REDUCTION_PROMPT_2026-05-08_FINAL
  - INDUSTRY_ARTICLES_PHASE1_PROMPTS（5/4 作成）
  - LESSONS_UPDATE_DRAFT（5/5 で Lesson-16/17 追記）
  - HANDOVER_TO_NEXT_CHAT_2026-05-06
  - DECISIONS_2026-05-05_DRAFT（本ファイル）
