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

---

## 2026-05-06 朝セッション

### 2026-05-06-D11: 「未登録 25 件全件対策完遂」判定の撤回 → 実態 237 件と判明

**現象**: 5/6 朝に GSC を確認したところ「クロール済み - インデックス未登録」が **25 → 237 件**に急増。
CSV ダウンロードした「該当ページ推移」を解析した結果、急増は **4/27→4/28（一夜で +212 件）**で発生していたことが判明。
5/5 朝に 25 件と表示されていたのは GSC の **5-7 日ラグ**による旧スナップショット表示で、実態は当時すでに 237 件。

**5/5 中の対策の評価**:
- B-38a / B-38b-1 / B-38b-2 / B-38b-3 / C-2 / B-37 / B-39 = 7 PR マージ完了
- ただしカバーしたのは「実態 237 件中の 25 件（10%）」のみ
- 「完遂」判定は誤り。10% 完遂が正確

**判定撤回**: 5/5 朝の HANDOVER §3.1 「期待値 15-20 件」「12 件申請でほぼ完遂」は撤回。

### 2026-05-06-D12: 真因仮説の確定（テンプレ重複 + 被リンク欠乏）

**深掘り調査結果**（`.ai-team/UNINDEXED_237_DEEP_DIVE_2026-05-06.md`）:

1. **真の引き金**: 4/17-4/18 に 14 categories × 47 articles + cat21-style for cat6-20 = **約 500 件のテンプレ系記事を一括追加**（git log 確証）
2. **Google 反応**: 4/22 大量クロール → 4/27 評価完了 → 4/28 集団 no-index 判定
3. **二重欠陥**:
   - **H2 構造のテンプレ重複**：業種別レビュー 5 件サンプルで H2 が 6 項目中 5-6 項目完全一致（業種名差し替えのみ）
   - **被リンク 0〜数件の壊滅的不足**：未登録ページの過半が被リンク 0-5、登録済 pillar は 14-92

**業種別レビュー 33 件中 25 件（76%）が未登録**、地域別 7 件は **100% 全件未登録**（カテゴリ単位）。

### 2026-05-06-D13: D 戦略採用 - 3 サイクル × 1〜2 週間の段階対策

**選定戦略**: D 戦略（A: 本文強化 + B: 統合・整理 + C: 内部リンク強化 の複合）

| サイクル | 期間 | 内容 | 想定 PR 数 |
|---|---|---|---:|
| **サイクル 1（B-40）**| 5/7-5/15 | 内部リンク強化（TOP + 4 ピラーから業種ハブ・主要 25 業種・地域 7 件へ）| 1 |
| サイクル 2 | 5/16-5/29 | テンプレ脱却・本文差別化（業種別 25 / 地域 7 / 自治体 11 / 経営層 6）| 約 10 |
| サイクル 3 | 5/30-6/13 | 低価値ページ整理（noindex/redirect/統合）| 約 5 |

**期待効果**: 5/12 中間再計測時点では未登録 220-237 件残（部分的効果のみ）。劇的改善は **6/13 サイクル 3 完遂後の 7 月中旬**から。

### 2026-05-06-D14: 5/12〜15 業種別記事第一弾の取り扱い変更（β 案採用）

**5/5 までの計画**: 業種別記事第一弾 4 本（病院/冷蔵倉庫/飲食店/ドラッグストア）を 5/12-15 で発注

**変更後**: 4 本 → **2 本（病院・冷蔵倉庫）に絞り、各 4000 字以上の超ピラー化**
- 独自図表 3 点以上、競合 SERP 完全分析後に投入
- ドラッグストア・飲食店は当面保留（既に類似ページが未登録のため、投入はサイクル 2 完了後）
- 「テンプレ追加で更に no-index 件数増加」リスクの回避

### 2026-05-06-D15: B-40 ClaudeCode 発注プロンプト完成（5/7 朝発注予定）

**ファイル**: `.ai-team/B-40_PROMPT_2026-05-06.md`
**スコープ**: 5 ファイル編集、約 36 リンク追加
- TOP /page.tsx に「業種・エリア別の見直しポイント」セクション 1 ブロック追加（業種 25 + エリア 7 = 32 リンク）
- 4 主要 pillar の RelatedLinks に「/articles/industry-guide」末尾追加（4 リンク）

**触らない**: metadata / 構造化データ / 既存 RelatedLinks 既存項目 / sitemap / data ファイル

**期待効果**: TOP（高 PageRank）から 32 ページに直接被リンクが供給される → クロール優先度引き上げ

### 2026-05-06-D16: GSC インデックス申請は当面停止

**背景**: KENJI さん指示「GSC への申請は上限があるから今はむり」。
5/4-5/5 で 27 件申請して上限到達済み、リクエスト枠の回復待ち。

**5/6 朝に予定していた 12 件申請（C-2 + B-38b-2 系 11 件）は保留**。
当面コード側で被リンク供給（B-40）→ Google 自動再評価ルートに切り替える。

### 2026-05-06-D17: Lesson-18, 19 を ops-notes §25-§26 として即時統合

**統合済**:
- **Lesson-18**: GSC「クロール済み - インデックス未登録」は 5-7 日ラグあり、最新値だけ見ると見誤る（ops-notes §25）
- **Lesson-19**: 大量テンプレ系ページ（30+）追加時は事前に H2 重複度評価と被リンク供給設計が必須（ops-notes §26）

**運用ルール（§25-§26 で恒久化済）**:
- GSC は週次トレンドで判定、単日値で意思決定しない
- 大量追加 PR は分割、テンプレ追加と被リンク供給は同 PR 内
- 14 日経過後の indexed 率 50% 未満なら追加対策必須

### 2026-05-06-D18: 5/15 月次振り返り 2026-05号は予定通り公開

**判定**: 既存形式（同シリーズの新月号追加）のため、テンプレ追加リスクは小。
公開 → 内部リンク → 既存 retrospective ハブとの整合性確認 → 標準フローで実施可。
プレスリリース 3 社配信も予定通り。

### 2026-05-06-D19: B-40 マージ完了（PR #156）

**ブランチ**: `feat/B-40-internal-links-cycle1-20260506`
**SHA**: `3096b61`
**マージ**: KENJI さん、5/6 朝（B-40 完了報告から約 30 分後）

**変更内容**:
- 5 ファイル編集 / 71 行追加 / 0 行削除（純粋追加のみ）
  - src/app/page.tsx +58
  - src/app/business-electricity-cost-reduction-review-points/page.tsx +6
  - src/app/renewable-energy-surcharge/page.tsx +5
  - src/app/fuel-cost-adjustment/page.tsx +1
  - src/app/market-price-adjustment/page.tsx +1
- 追加リンク数: 業種 25 + エリア 7 + pillar 末尾 4 = 36

**検証結果**: PRE_MERGE_CHECKLIST 全項目 PASS（リン）→ GO 判定 → KENJI さんマージ
- ビルド成功 / 0 error
- 既存 RelatedLinks 既存項目改変なし
- metadata 改変なし
- 既存スタイル準拠（fuel/market は 1 行、renewable/C-2 は複数行）

**サイクル 1 完遂**: 未登録 237 件のうち、業種別 25 + エリア 7 = 32 件に直接被リンク供給完了。

### 2026-05-06-D20: B-41 計画確定（5/8 朝発注予定）

**B-40 で網羅できなかったカテゴリ**を対象に、被リンク強化第 2 弾を実施。

**対象**:

| カテゴリ | 件数 | 強化方法 |
|---|---:|---|
| 自治体系 `municipality-*` | 11 | TOP 拡充 + `/articles/[categorySlug]` ハブから全件リンク |
| 経営層系 `executive-*` / `cfo-*` | 6 | カテゴリハブから全件リンク + 既存 pillar から補強 |
| 補助金系 `subsidy-*` | 6 | カテゴリハブから全件リンク |
| case-study 系 | 7 | カテゴリハブから全件リンク |
| 振り返り過去年 retrospective/* | 9 | 振り返りハブを更新して全件アクセス |
| **計** | **39** | |

**規模見込み**: 5-8 ファイル編集、約 40-50 リンク追加。B-40 と同程度の軽量 PR。

**完成形プロンプト**: `.ai-team/B-41_PROMPT_2026-05-06.md` 5/7 朝に作成。
**5/8 朝発注 → 5/8 中マージ → 5/12 中間再計測時に B-40 + B-41 合算効果検証**

### 2026-05-06-D21: サイクル 2 第 1 弾スコープ確定（5/13 朝発注予定）

**対象 5 件**（バケット監査の優先順位 1-5）:
1. hospital-electricity-cost-review（病院）
2. food-factory-electricity-cost-review（食品工場）
3. office-building-electricity-cost-review（オフィスビル）
4. data-center-electricity-cost-review（データセンター）
5. supermarket-electricity-cost-review（スーパー）

**作業内容**:
- H2 構造の **70% 以上ユニーク化**（脱テンプレ）
- 業種固有データ追加（負荷特性表 / 設備例 / 年間 kWh 目安 / 削減事例）
- 本文 +2000 字以上
- 内部リンク 10 本以上を業種ハブから供給

**完成形プロンプト**: `.ai-team/B-42_PROMPT_2026-05-06.md` 5/7 朝に作成。
**1 PR で 5 件**（ClaudeCode 工数 25-30h）→ 5/13 発注 → 5/29 までマージ完了想定。

### 2026-05-06-D22: B-41 マージ完了（PR #157）

**ブランチ**: feat/B-41-orphan-pages-boost-20260507
**SHA**: 30fe338
**マージ**: KENJI さん、5/6 夕方（B-40 マージ約 6 時間後）

**変更内容**:
- 9 ファイル編集 / 0 行削除（純粋追加のみ）
- 追加リンク数: retrospective 3 + 特集 5 シリーズ × 7-9 slug = 38 + TOP 1 + 相互リンク 2 = **約 44 リンク**

**検証結果**: PRE_MERGE_CHECKLIST 全 7 項目 PASS（リン）→ GO 判定 → KENJI さんマージ
- ファイル数 9 / 削除行 0 / retrospective 3 件 / 特集 5/5 / TOP /by-role / D-1 D-2 / metadata 改変なし

**サイクル 1 完遂**: B-40 (36 リンク) + B-41 (44 リンク) = **約 80 リンクを 1 日で追加**。
未登録 237 件のうち、孤立 53 件中 **18 件（34%）が被リンク 1 以上に改善**見込み。

**ClaudeCode 指摘**: 4/5 シリーズに既に SERIES.map() で全件表示済 = 構造重複。
SEO 効果は依然プラスだが UX 冗長。**Lesson-20 として ops-notes §27 に恒久化**（D23 参照）。

### 2026-05-06-D23: Lesson-20 確立 - 特集ハブ修正前は既存 SERIES.map() 確認必須

**契機**: B-41 で 4/5 シリーズに既存 map() があった事実を ClaudeCode が発見。

**真因**: リン側の事前検証で「シリーズ全ページ」キーワードのみ grep し、`_SERIES.map()` ループ存在をチェックしていなかった。

**確立**: ops-notes §27 として **Lesson-20「特集ハブ・カテゴリハブ修正前は既存の SERIES.map() / iteration ロジックを必ず確認」**を恒久化。

**運用ルール 4 つ**（詳細は ops-notes §27 参照）:
- Rule 1: 動的ループ検出を含む事前検証
- Rule 2: 既存共通コンポーネントの存在確認
- Rule 3: 「全体構成」「シリーズ一覧」テキスト検索
- Rule 4: 仕様書テンプレートに「既存ロジック確認チェック」セクション組み込み

**今後の B-XX 発注書テンプレート修正**: §事前確認 セクションを必須化。

### 2026-05-06-D24: B-47 マージ完了（PR #158）

**ブランチ**: feat/B-47-orphan-pages-second-wave-20260507
**初回 SHA**: ab64fdb / **最終 SHA**: dd3648d（重複修正コミット込み）
**マージ**: KENJI さん、5/6 夕方〜夜（B-41 マージ約 3 時間後）

**変更内容**:
- 15 ファイル編集 / 削除行 5 のみ（重複修正で削除）
- 追加リンク数: Phase A 9（業種ハブ）+ Phase B 16（pillar 末尾追加、internationalから 1 件削除済）= **計 25 リンク**

**検証結果**: PRE_MERGE_CHECKLIST 全 7 項目 PASS（リン）→ GO 判定 → KENJI さんマージ
- ファイル数 15 / 9 業種 Link / Phase B 12 主要 + 2 件追加 pillar / 重複修正済 / metadata 改変なし

**サイクル 1 完全完遂**:
- B-40 (36) + B-41 (44) + B-47 (25) = **計 105 リンクを 5/6 - 5/7 で追加**
- 孤立 53 件中、約 43 件（81%）が被リンク 1 以上に改善見込み
- 元案 5/15 サイクル 1 完遂 → **5/7 で達成 = 8 日短縮**

### 2026-05-06-D25: ClaudeCode の自主検証・修正能力を恒久化（Lesson-13 好事例）

**契機**: B-47 でリン側事前検証で発見した「international-electricity-price-comparison に /asia-electricity-cost-comparison 既存」の重複追加リスクに対し、ClaudeCode が **自主的に重複検出 → 修正コミット dd3648d** を実施。

**好事例の意義**:
- リン仕様の「末尾追加」を機械的に実行せず、既存配列を Read で確認
- 重複が発生する場合は自主的に削除コミット
- リン側の事後警告負荷をゼロにした

**Lesson-13（実装完了形の脳内シミュレーション）の実装**:
- ClaudeCode が「実装完了後の状態」を脳内で予測 → 重複が起きる前に対応
- B-38b-3 の型定義確認（リンの spec 誤情報を保護）と同様の動き

**恒久化**: ops-notes §28 に「ClaudeCode の自主検証パターン例」として追記予定。

**運用反映**: 今後の B-XX 発注時、ClaudeCode に「重複追加リスクがある場合は自主検出・スキップを判断してよい」と明示することで、修正コミットの往復を削減する。


---

## 2026-05-07 朝セッション（V2 超圧縮 5/15 完遂目標）

### 2026-05-07-D26: GSC 404 5 件は 4 件既設 redirect 済 = B-48 不要判定

**背景**: 5/7 朝 KENJI さん GSC で 404 5 件 URL を確認 → リン curl 検証で **4 件は B-17 で設定済の redirect が HTTP 308 で正常動作**することを確認。

**4 件の状況**:
- `/sme-subsidy-funding-guide` → 308 → `/subsidy-sme-energy-saving-patterns`
- `/gx-ets-regulation-timeline` → 308 → `/gx-ets-impact-business-electricity`
- `/solar-self-consumption-for-business` → 308 → `/self-consumption-solar-cost-benefit`
- `/logistics-warehouse-electricity-cost-review` → 308 → `/case-study-logistics-solar-integration`

**判定**: Lesson-18（GSC 5-7 日ラグ）の典型例 = 実装は完了済、GSC 表示が遅延しているだけ。

**KENJI さん対応**: GSC 「修正を完了しましたか？」ボタンクリック完了（5/7 朝、検証フェーズ開始）。

**残 1 件**（`/&` 不正 URL）: クエリ片のみで通常 redirect 不可。5/12 wait 日に対応案メモ作成。

**経済的インパクト**: B-48 不要化により ClaudeCode 工数 0.5-1h 削減、リン検証 30 分削減、KENJI さん作業 10 分削減 → B-43 早期発注を 17:15 → 13:00 に 4h 前倒し可能化。

### 2026-05-07-D27: B-42 マージ完了 = サイクル 2 第 1 弾完遂、5/15 完遂目標は射程内

**マージ PR**: #159 `feat(b-42): サイクル2第1弾 - 業種別レビュー5件の脱テンプレ + 本文差別化（病院/食品工場/オフィスビル/DC/スーパー）`

**実施内容**:
- 5 ファイル変更（hospital / food-factory / office-building / data-center / supermarket -electricity-cost-review/page.tsx）
- 旧 6-7 H2 → 新 9 H2 一律（共通 2 + 業種固有 7）
- 各ファイル文字数 39K-41K chars（目標 30K+ を 30% 超過達成）
- 業種固有 FAQ 各 6 件（既存 2-3 件から拡充）
- 内部リンク 10-12 本（既存 7-12 件から補強）
- food-factory / data-center / supermarket の faq/sources を `const` 外出しパターンに統一（病院・ビル方式へ寄せた）

**検証**: `.ai-team/scripts/verify_b42.sh` で PASS 44 / WARN 4 / FAIL 0
- WARN 4 は §9 metadata 検証スクリプトの誤検知（RelatedLinks 配列の `title:/description:` キー拾い）= 実害なし
- 後の同種スクリプトで誤検知回避できるよう、§9 を `awk` で `export const metadata` ブロック範囲限定に書き換え（Lesson-21 として記録）

**規模感**: 想定 6-10h → 実際 3-4h で完成（**ClaudeCode が 4-5h 前倒し**）。Max プラン稼働率による高速化。

**ペース**:
- 5/6 = 3 PR マージ（B-40/B-41/B-47、105 リンク追加）
- 5/7 朝 = B-42 マージ + B-43 早期発注（13:00 目処）
- 5/8 朝 = B-43 マージ + B-45 発注、午後 B-46 発注
- このペース継続で **5/14 全工程完遂、5/15 月次振り返り公開** が射程

**次の動き**:
- B-43 H2 深掘り設計書（リン作成、13:00 発注用）
- verify_b43.sh 作成
- B-43 スコープは B 案（7 件、九州/中部/北海道は 5/11 GSC 計測後判断）

### 2026-05-07-D28: B-43 スコープ漏れ 3 件 → B 案採用（5/11 後判断）

**背景**: B-43_PROMPT_2026-05-06.md は地域 7 件対象だが、リン §事前確認で実態は 10 region ページ存在を発見。中部（被リンク 5）・九州（4）・北海道（3）が漏れていた（5/6 朝 UNINDEXED_237 監査時の確認漏れ）。

**A/B/C 検討**:
- A: B-43 を 10 件に拡張（工数 12-17h、5/15 リスク↑）
- **B: B-43 は 7 件、3 件は 5/11 GSC 後判断**（リン推奨、KENJI さん採用）
- C: B-43 + B-43-supp で並行発注（並行リスク↑）

**採用理由**:
- 5/15 完遂を最優先
- 被リンク強化は B-40 で全 region に最低 1 件付与済
- 5/11 GSC 計測時に 3 件のインデックス状況を確認 → 未登録なら 5/12 緊急 B-49 で対応可（wait 日が空いている）



### 2026-05-07-D29: B-43 マージ完了 = サイクル 2 第 2 弾完遂、5/15 → 5/14 完遂が射程内

**マージ PR**: #160 `feat(b-43): サイクル2第2弾 - 地域別7件の脱テンプレ + エリア固有データ`

**実施内容**:
- 7 ファイル変更（region-tokyo / kansai / chugoku / hokuriku / shikoku / tohoku / okinawa）
- 旧 7-10 H2 → 新 9 H2 一律（共通 2 + エリア固有 7）
- 各ファイル文字数 38K-41K chars（目標達成、沖縄含む）
- const faqItems を全 7 件に新規追加（各 6-7 件のエリア固有 FAQ）
- const sourcesItems を全 7 件に新規追加（電力会社 + 経産省 + OCCTO）
- SourcesAndFaq コンポーネントを全 7 件に追加（B-43 必須追加実装）
- ArticleJsonLd faq prop を __CATEGORY_FAQ__ → faqItems に切替
- 沖縄の H2-4 を離島系統版で特殊置換、H2-5（電源構成）を新設
- 隣接 region 相互リンクを各エリアに 2 件以上追加

**検証**: `.ai-team/scripts/verify_b43.sh` で **PASS 77 / WARN 0 / FAIL 0**
- WARN 0 達成 = Lesson-21（§9 範囲限定 awk）の効果
- B-42 では WARN 4 件（誤検知）→ B-43 では完全グリーン

**規模感**: 想定 8-12h → 実際 約 2h で完成（**ClaudeCode が 5-6 倍速**）
- リン側 H2 深掘り設計書が機能した
- B-43 必須追加実装（const faq/sources / SourcesAndFaq 新規）も問題なく統合

**ペース更新**:
- 5/6 = 3 PR マージ（105 リンク追加）
- 5/7 = B-42 + B-43 マージ（昼までに 2 PR）
- → このペースで 5/8 朝 B-45 マージ + B-46 発注、サイクル 2 が 5/9 → 5/8 完遂可能
- 5/15 完遂目標 → **5/14 全工程完遂が射程**

**次の動き**:
- 5/7 夕方: B-45 早期発注（V2 では 5/8 朝予定 → 半日前倒し可）
- 5/7 夜: B-45 ClaudeCode 実装中
- 5/8 朝: B-45 マージ + B-46 発注



### 2026-05-07-D30: B-43 マージ実行確認 + B-45 早期発注（V2 から半日前倒し）

**5/7 14:00-15:00 推定タイミング**:
- KENJI さん B-43 マージ実行完了（PR #160）
- 同時に B-45 を ClaudeCode へ早期発注（V2: 5/8 朝予定 → 5/7 夕方に半日前倒し）

**B-45 発注内容**:
- 対象: 自治体 4（municipality-electricity-cost-review / bundled-procurement / bidding-failure / re100-decarbonization）+ 経営層 2（executive-cfo-electricity-basics / multi-site-cost-management）= 6 件
- 必読指示: B-45_PROMPT_2026-05-06.md + B-45_H2_DEEP_DIVE_2026-05-07.md
- 想定工数: 6-8h（B-43 のペースなら 1.5-2h で完成想定）

**当初 V2 → 加速後の差分**:
- B-45 マージ予定: V2 5/8 17:00 → **5/7 夜 〜 5/8 朝**（半日前倒し）
- B-46 発注予定: V2 5/8 17:30 → **5/8 朝**（半日前倒し）
- サイクル 2 完遂予定: V2 5/9 → **5/8 中**（1 日前倒し）
- 全工程完遂予定: V2 5/11 → **5/10 中**（1 日前倒し）
- 月次振り返り公開: 5/15（変わらず、wait バッファ拡大）

**5/15 完遂目標 → 5/14 完遂が射程内**:
- 5/10 全 PR マージ完了 → 5/12-14 wait + 公開準備
- 5/15 公開時に 4 日のバッファ = リスク低下



### 2026-05-07-D31: B-45 マージ完了 = 自治体・経営層 6 件 脱テンプレ完遂

**マージ PR**: #161 `feat(b-45): サイクル2第3弾 - 自治体・経営層 6件 脱テンプレ`

**実施内容**:
- 6 ファイル変更（municipality-cost-review / bundled-procurement / bidding-failure / re100-decarbonization / executive-cfo-electricity-basics / executive-multi-site-cost-management）
- H2 数 一律 9 統一（B-45 H2 深掘り設計書では「ファイル別調整可」推奨だったが、ClaudeCode が一律 9 で統一）
- const faqItems / sourcesItems を全 6 件に新規追加
- SourcesAndFaq + GlossaryLinks を 5 ファイル（municipality-cost-review 以外）に新規追加
- 既存 H2 番号付きスタイル（CFO「1.」「2.」等）維持
- AuthorBadge / TableOfContents が無かった 4 ファイルに統一性確保のため自主追加（深掘り設計書未指示、ClaudeCode 自主判断）

**検証**: `verify_b45.sh` で **PASS 59 / WARN 0 / FAIL 0**

**規模感**: 想定 6-8h → 実 1-2h で完成（**5-6 倍速**を維持）

### 2026-05-07-D32: B-46 マージ完了 = サイクル 2 完全完遂（V2 5/9 → 5/7 で 2 日前倒し）

**マージ PR**: #162 `feat(b-46): サイクル2第4弾 - 業種別5+補助金2 7件 脱テンプレ`

**実施内容**:
- 7 ファイル変更（業種別 5: hotel/restaurant-chain/continuous-operation-factory/semiconductor-facility/distribution-center + 補助金 2: subsidy-sii-energy-saving/subsidy-shift-project）
- 業種別 5 件は H2 9 個に統一（B-42 と同じパターン）
- 補助金 2 件は SourcesAndFaq + GlossaryLinks 新規追加
- subsidy-shift-project のみ H2 10 個（業種別活用パターン H2 を ClaudeCode 自主判断で新設）
- 補助金 2 件の数値表現「目安」「想定例」維持
- AuthorBadge / TableOfContents が無かった 6 ファイルに統一性確保のため自主追加

**検証**: `verify_b46.sh` で **PASS 77 / WARN 0 / FAIL 0**

**規模感**: 想定 6-8h → 実 1-2h で完成

**サイクル 2 完遂の意義**:
- B-42 (5 件) + B-43 (7 件) + B-45 (6 件) + B-46 (7 件) = **計 25 件 脱テンプレ完遂**
- V2 当初目標 5/9 完遂 → **5/7 中達成 = 2 日前倒し**
- 5/7 1 日で 4 PR + 25 件 = **5/6 (3 PR) を超える単日最大ペース**
- ClaudeCode が全 4 PR で **想定の 5-6 倍速**を維持

**ClaudeCode 自主判断 5 例目（5/7 で 4 件追加）**:
1. B-42 (5/7): verify_b42.sh の WARN 4 件を「§9 metadata 検証スクリプトの誤検知」と即座に切り分け（§28 好事例 5）
2. B-42 (5/7): gh pr create の untracked 警告を「ops-notes §9.2 既知事象」と分析（§28 好事例 6）
3. B-45 (5/7): AuthorBadge / TableOfContents が無かった 4 ファイルに統一性確保のため自主追加（§28 好事例 7）
4. B-46 (5/7): SHIFT で「業種別活用パターン」H2 を新設（10 H2 化、§28 好事例 8）

→ ops-notes §28 ClaudeCode 自主検証パターン例 を 8 件まで拡充。

### 2026-05-07-D33: サイクル 3 開始は 5/8 朝（B 案採用、V2 通り）

**5/7 18:00 終時点での KENJI さん判断**:
- 選択肢 A（5/7 夜 早期開始）/ B（5/8 朝 通常開始、リン推奨）/ C（V2 通りバッファ最大）
- → **B 案採用**

**B 案の意義**:
- 5/8 朝 β 案 + 月次振り返り + B-44a の 3 並行発注
- 5/9 朝 3 PR マージ + B-44b/c 発注
- 5/10 中 全 PR 完遂（V2 5/11 → 1 日前倒し）
- 5/11-14 wait + 公開準備（4 日のバッファ）
- 5/15 朝 月次振り返り公開 + プレスリリース 3 社配信

**夜間対応負荷の回避**:
- KENJI さん 5/7 夜は休息
- ClaudeCode 並行 3 PR は 5/8 朝〜午後で消化
- 5/14 早期公開も射程内（5/13 で wait 解除判断可）

### 2026-05-08-D34: B-44b スコープ修正 B 案採用（retrospective ハブ集約セクション追加）

**判断**: 5/8 朝、KENJI さんが B 案採用を決定（10 秒判断）

**背景**:
- B-44_CYCLE3_INTEGRATION_PLAN §2.1 当初想定の 4 ファイル（2019/2021/2024-* 系）のうち 3 件が不在
- 1 件のみ存在（low-voltage-power-2019-2025）
- リン側で 3 案を提示: A スキップ / B ハブ集約（推奨 🌟）/ C 1 ページ統合

**B 案採用の根拠**:
- 既存 4 件の 7 年推移ページ（high-voltage / low-voltage-lighting / low-voltage-power / special-high-voltage-2019-2025）を集約対象に変更
- retrospective ハブに「過去 7 年サマリーテーブル」H2 セクション新規追加
- 4 ページは削除せず維持 = 高度ユーザー向け詳細情報源として温存
- 工数: 想定 4h → 実 1-2h で実現可能（軽量、追加実装のみ）

**実施結果（D37 で詳細）**: 5/8 14:00 マージ完了

### 2026-05-08-D35: 5/8 朝 3 並行発注完遂（β 案 + 月次振り返り + B-44a 全マージ）

**マージ済 PR**:
1. **#163 β 案** `feat(cold-storage): β案 - 冷蔵倉庫記事の超ピラー化` — 5/8 13:00 マージ
2. **#164 月次振り返り 2026-05号** `feat(monthly): 月次振り返り 2026-05号公開` — 5/8 13:30 マージ
3. **#165 B-44a 用語集統合** `feat(b-44a): 用語集9件 → /electricity-glossary 1ページ統合 + redirect 9件` — 5/8 14:00 マージ

**実績データ**:
| PR | 文字数 | H2 数 | 主要要件 |
|---|---|---|---|
| β 案 #163 | 41,676 chars | 10 H2（簡略版） | 規模別事例 3 件 / faqItems 8 / RelatedLinks 18 |
| 月次 #164 | 48,148 chars | 11 H2（重複度 36%） | 5月独自データ 5 種 / RelatedLinks 20 |
| B-44a #165 | 53,842 chars | 9 + 共通観点 1 | redirect 9 件 / 旧 9 ファイル温存 |

**規模感**: 想定 9:30 発注 → 13:00-14:00 マージ = 3.5-4.5h 想定 → 実態 想定の **1/2 で完遂**

**ClaudeCode 自主判断 4 例追加（5/8 朝）**:
- β 案: 簡略版オプション選択（H2-9/10 統合 → 10 H2 で実装、品質維持）
- 月次: publishedAt を `const publishedDate` 経由で参照（再利用性向上）
- B-44a: 重複「7 つの共通補足セクション」を 1 箇所に圧縮 = 53.8K に収まる（spec 90K-120K 推定は重複考慮なし上限想定）
- B-44a: ArticleJsonLd 用語集ピラー特殊性で省略（用語集向け実装）

→ ops-notes §28 ClaudeCode 自主検証パターン例 を 8 件 → 12 件まで拡充（後続更新）

### 2026-05-08-D36: B-44b/c 前倒し並行発注（5/8 13:30）

**判断**: 5/8 13:00 時点で 10 PR 達成（朝 3 並行 1/2 速度完遂）→ 残り 5/8 終 12 PR 目標まで余裕大

**選択肢 3 案で KENJI さん判断**:
- A: 17:00 / 17:10 V2 通り（保守的）
- B: 13:30 並行発注 = 17:00 マージ（リン推奨 🌟）
- C: B-44b のみ前倒し、B-44c は 17:00（折衷）

→ B 案採用、即発注

**結果**: 5/8 14:00 ClaudeCode 両方完了報告 → 14:30 マージ完了

### 2026-05-08-D37: 5/8 終 12 PR 達成（V2 5/11 → 3 日前倒し）

**マージ済 PR（5/7 7 + 5/8 5 = 計 12）**:
- 5/7: B-42 #159 / B-43 #160 / B-45 #161 / B-46 #162（既存 3 + 4 新 = 7）
- 5/8 朝: β 案 #163 / 月次 #164 / B-44a #165
- 5/8 午後: B-44b #166 / B-44c #167

**B-44b #166（retrospective ハブ集約 = B 案採用、5/8 14:00 マージ）**:
- 文字数 21,489 → 30,277（+8.8K、約 1.4 倍）
- H2: 9 → 10（過去 7 年サマリーテーブル追加）
- 4 件 7 年推移ページへの内部リンク 各 4 箇所
- _lib/{4区分}-price-data.ts の getYearlySummary() を import alias で再利用

**B-44c #167（last-resort 親ピラー統合、5/8 14:30 マージ）**:
- 親ピラー文字数 17,810 → 38,102（+20.3K、約 2.1 倍）
- H2: 4 → 7（緊急対応 / 社内説明 / 比較検討 の 3 H2 追加）
- アンカー id 3 件付与（#emergency-response / #internal-explanation / #comparison-positioning）
- redirect 3 件追加（permanent: true、destination は #anchor 付き）
- 旧 3 ファイル温存（5/24 以降に別 PR で物理削除予定）
- const faqItems 拡充（3 → 6 件）

**ClaudeCode 説明妥当判断（B-44c の文字数 38.6K vs spec 80K+）**:
- spec §2.4「重要部分のみ要約も可」明示
- 3 子ページに重複説明テンプレ存在 → 排除して圧縮
- 各 H2 主要要素（タイムライン表 / 比較表 / マトリクステーブル / チェックリスト / 対応ステップ）は全移植

**前倒し効果**:
- V2 当初目標 5/11 完遂 → **5/8 14:30 で実質達成 = 3 日前倒し**
- 残 1 PR (B-44d) は 5/8 夕方発注 → 5/8 終 13 PR 完遂が射程
- 5/9 は予備日として GSC 中間再計測のみ
- 5/15 公開バッファ 6 日確保

### 2026-05-08-D38: 自動マージ運用 試験運用開始（5/8 夕方 B-44d）

**判断**: KENJI さんから「GitHub マージも ClaudeCode に依頼して自動化できないか」との提案

**リン提示の 3 段階自動化レベル**:
- レベル 1: PR 作成のみ自動化（時短 5 分 / 5 PR、リスク低）
- レベル 2: 検証連動マージ（リン GO 判定後 ClaudeCode 自動マージ、時短 25 分 / 5 PR、リスク中、推奨 🌟）
- レベル 3: 完全自動マージ（リン検証スキップ、リスク高）

**KENJI さん採用**: 5/8 夕方 B-44d でレベル 2 試験運用

**準備完了**:
- gh CLI: 既に kenjieda-eng として認証済（keyring 保管、scope: repo+workflow+read:org）
- `.ai-team/AUTO_MERGE_OPS_GUIDE_2026-05-08.md`: 運用ルール（厳守事項込み）
- `.ai-team/B-44d_AUTO_MERGE_PROMPT_2026-05-08.md`: 発注テキスト（gh コマンド込み）
- `.ai-team/scripts/verify_b44d.sh`: 検証スクリプト（19 ファイル index:false 検証）

**試験運用フロー**:
```
KENJI さん発注（コピペ × 1 = 30 sec）
↓
ClaudeCode 実装 + ビルド + 自主検証
↓
ClaudeCode が gh pr create で PR 作成（自動）
↓
リン検証（verify_b44d.sh）
↓
リン GO 判定 → ClaudeCode に承認伝達
↓
ClaudeCode が gh pr merge --squash --auto --delete-branch 実行
↓
CI Vercel Build + 自動マージ + Delete branch（GitHub Actions 5-10 min）
↓
ClaudeCode が完了報告（マージ済 SHA + Vercel Ready ステータス）
```

**KENJI さん作業時間**: 30 秒（コピペ × 1）= **5/7 から 90% 削減**

**判定基準（試験運用後にリンが評価）**:
1. ClaudeCode が gh pr create 成功
2. リン GO 判定までタイムリー（30 分以内）
3. ClaudeCode が gh pr merge --auto 成功
4. Delete branch 成功
5. Vercel デプロイ Ready
6. 想定外の挙動なし

→ 6 項目すべて OK なら 5/9 朝以降本格運用へ移行

**リスク対策**:
- リン GO 判定前のマージ実行禁止
- --admin / force push / main 直 push 禁止
- 既存ファイル削除禁止
- 5/15 公開当日は完全手動に戻す


### 2026-05-08-D34: B-44b スコープ修正 → B 案採用（retrospective ハブ集約）

**5/8 朝の発見**:
- B-44b 当初想定 4 件中 3 件が既存ファイル不在
- → スコープを「retrospective ハブへの集約」に変更（B 案）

**判断**:
- 不在ファイル新規作成より、既存ハブの集約強化が SEO 価値高
- ClaudeCode に方針変更を即伝達 → 1 PR で完遂

→ 当初設計より少ない工数で同等の SEO 効果を達成。

---

### 2026-05-08-D35: 5/8 朝 3 並行発注完遂（β 案 + 月次 + B-44a）

**実績**:
- 13:00 PR #163 (β 案 冷蔵倉庫超ピラー化) MERGED
- 13:30 PR #164 (月次振り返り 2026-05号) MERGED
- 14:00 PR #165 (B-44a 用語集 9 件統合) MERGED

**所要**: 想定 1 日 → 実 4 時間（**1/2 速度**）

→ 5/8 朝で V2 当初 5/8 終目標を午前中に達成。

---

### 2026-05-08-D36: B-44b/c 前倒し並行発注（5/8 13:30）

**判断根拠**:
- 5/8 朝の 3 並行発注が想定の 2 倍速で進行
- → 午後の B-44b/c も前倒し発注可能
- 想定 17:00 開始 → 実 13:30 開始（**3.5h 前倒し**）

**結果**:
- 14:00 PR #166 (B-44b retrospective ハブ集約) MERGED
- 14:30 PR #167 (B-44c last-resort 親ピラー統合) MERGED

---

### 2026-05-08-D37: 5/8 終 12 PR 達成 = V2 5/11 → 3 日前倒し

**累計マージ済 PR**:
- 既存 4 PR（5/4-7 分）+ 新 8 PR（β + 月次 + B-44a/b/c + B-43 + B-45 + B-46）+ 5/8 中 1 PR（B-44d）= **13 PR**
- ※ B-44d は 5/8 17:30 発注、19:50 マージ で 5/8 中

**V2 計画 vs 実績**:
- V2 当初: 5/11 完遂目標
- 実績: **5/8 中達成 = 3 日前倒し**

→ 5/9-15 は超軽量モードへ移行可能。

---

### 2026-05-08-D38: 自動マージ運用 試験運用開始（5/8 夕方 B-44d、レベル 2）

**意義**:
- 旧運用: KENJI さん作業 1 PR で 5 分（コピペ + リン GO + 手動マージ + 確認）
- 新運用: KENJI さん作業 1 PR で 2 分（コピペ + リン GO + 自動マージ確認）
- → **60% の作業時間削減**を狙う

**試験運用 評価項目**:
1. ClaudeCode が gh pr create 成功
2. リン GO 判定タイムリー（30 分以内）
3. ClaudeCode が gh pr merge --auto 成功
4. Delete branch 成功
5. Vercel デプロイ Ready
6. 想定外の挙動なし

**5/8 19:50 結果**: **6/6 完全成功** → 5/9 朝以降本格運用 GO 確定（Lesson-23、ops-notes §31）

---

### 2026-05-09-D39: 5/9 B-50c 完遂、計 30 件 noindex 化（自動マージ本格運用 第 2 号）

**5/9 朝〜午後の流れ**:
- 朝（37 分）: GSC 第 1 回計測 + 312 件分析（INDEX_COVERAGE_ANALYSIS_2026-05-09.md）
- 議論: 攻撃派 / 慎重派 / データ派 / KENJI 代理 / リン総合の 5 視点ラウンドテーブル
- 結論: 「wait 一択」を撤回、案 c（noindex 11 件追加）を 5/9 着手と確定
- 14:30 KENJI さん発注（コピペ 30 秒）
- 16:30 ClaudeCode push + gh pr create
- 16:35 リン検証 → §1-§4 / §6 PASS、§5 のみ workspace 状態誤検知（Lesson-24）
- 16:40 リン GO 判定 → KENJI さんに通知
- 17:13 自動マージ完了（PR #169、SHA e8e0004）
- 17:16 本番 Vercel デプロイ SUCCESS

**計 30 件 noindex 化**:
- B-44d (5/8): 19 件
- B-50c (5/9): 11 件
- → 5/12 GSC 第 2 回計測時に効果確認予定

**自動マージ運用 第 2 号 評価**: **6/6 完全成功**（試験 + 本格運用 = 2/2 完全成功、Lesson-25）

**5/10 朝の本番反映確認**: 11/11 ✅ noindex 反映済（curl キャッシュバスティング）

---

### 2026-05-09-D40: 5/12 第 2 回 GSC 計測の判定マトリクス確定

**5/12 計測時の意思決定基準**（INDEX_COVERAGE_ANALYSIS §4.2 / MASTER_PLAN §3 から確定）:

| シグナル | 判定 | 5/12 後アクション |
|---|---|---|
| 未登録 ≤ 280 件 + 平均順位 ≤ 8.5 | 🟢 改善大 | **5/14 早期公開**検討 + 案 d（5/15 後対応）|
| 未登録 281-300 件 + 平均順位 8.5-9.0 | 🟡 改善中 | 案 d（公開後対応）|
| 未登録 301-330 件 + 平均順位 9.0-9.3 | 🟡 横ばい | 案 b のみ（北海道 1 件）|
| 未登録 ≥ 331 件 + 平均順位 ≥ 9.4 | 🔴 悪化 | 案 a + b（業種 10 件 + 北海道）|

**5/14 早期公開の前提条件**:
- 5/12 12:00 までに 🟢 シグナル確認
- KENJI さんが 5/14 朝の作業時間 90 分確保可能
- プレスリリース 3 社の配信先確認完了

**5/15 公開維持の場合**:
- デフォルト動作、想定通り
- B-50 案は公開後（5/16 以降）に対応

---

### 2026-05-10-D41: B-50e 緊急対応完遂、自社レビュー違反 11 件解消（自動マージ第 3 号）

**5/10 朝の発見**:
- GSC「リッチリザルト > レビュースニペット」で 1 件無効判定
- 該当: /case-study-logistics-solar-integration
- 調査結果: 11 ファイルで同じパターン使用 = Google Review Snippet ガイドライン違反「自社レビュー禁止」

**5 視点議論**:
- 攻撃派: 今日 B-50e 発注（5/15 公開前リスク解消）
- 慎重派: 5/12 計測後判断（汚染回避）
- データ派: noindex と異なり構造化データ削除は影響軽微、5/9 効果検証を汚染しない
- KENJI 代理: 約 2 分作業なら受容
- **リン総合: A 案推奨（今日 B-50e 発注）**

**KENJI さん判断**: A 案採用

**5/10 午後の流れ**:
- 14:00 KENJI さん B-50e 発注（コピペ 30 秒）
- 15:30 ClaudeCode push + gh pr create (#170)
- 15:35 リン検証 → 8/8 PASS（Lesson-24 適用版で workspace 問題回避）
- 15:40 リン GO 判定 → KENJI さん通知
- 16:39 自動マージ完了（PR #170、SHA 36b3fd2）
- 5/11 朝 11/11 本番反映確認（curl）= ReviewJsonLd 完全削除

**自動マージ運用 第 3 号 評価**: **6/6 完全成功**
**累計**: 試験 + 本格運用 = **3/3 完全成功**（Lesson-26 候補）

**5/12 GSC 計測時の期待**:
- リッチリザルト レビュースニペット 無効: 1 → 0 件
- ガイドライン違反 SEO リスク解消
- 5/15 公開時の信頼性維持

---

### 2026-05-10-D42: 自動マージ運用 完全運用フェーズ確立（3/3 完全成功）

**実績**:
- B-44d (5/8 試験): 6/6 ✅
- B-50c (5/9 第 2 号): 6/6 ✅
- B-50e (5/10 第 3 号): 6/6 ✅

**評価**: **3 連続完全成功** → 自動マージ運用は完全運用フェーズへ

**運用基準（5/10 確立）**:
- 5/13 以降の B-50 系発注は自動マージテンプレで標準運用
- 5/15 公開のみ手動マージ（リスク回避）
- 5/16 以降は自動マージ標準運用に再開
- 1 PR あたり KENJI さん作業時間: 約 2 分（旧 5 分から 60% 削減）

**最適サイズ判明（副次的発見）**:
- 8-15 ファイル / 1 PR が「自動マージ最適サイズ」
- 5-9 件は手動でも変わらない
- 12+ 件は分割推奨（Vercel queue 詰まりリスク）

→ Lesson-26 として 5/16 以降の B-50 系で継続検証

---

### 2026-05-11-D43: 5/11 超軽量モード継続、5/12 計測テンプレ準備完了

**5/11 (月) アクション**:
- KENJI さん: 15 分（5/12 計測手順書再読 + 5 月独自データ予備調査）
- リン並行作業: 5/12 計測テンプレ作成、B-50e 本番反映確認、ドキュメント整備
- ClaudeCode 発注: **本日不要**

**準備完了ドキュメント**:
- `.ai-team/GSC_MEASUREMENT_TEMPLATE_2026-05-12.md` — 計測結果共有テンプレート + 判定マトリクス即時適用
- `.ai-team/HANDOVER_TO_NEXT_CHAT_2026-05-11.md` — 5/12 朝の指針

**判断**:
- 5/12 計測まで wait（Lesson-18 GSC 5-7 日ラグの純度維持）
- 不測の事態（GSC 新規エラー等）発生時のみ追加対応

---

### 2026-05-12-D44: アグレッシブ拡張戦略採用「エネチェンジ biz 追いつけ追い越せ」

**5/12 夜の KENJI さん指示**:
- 「全体方針 OK、もう少しアグレッシブに進めたい」
- 「コンテンツ・内部 SEO のみ（外部 PR/リンクは対象外）」
- 「エネチェンジ biz 追いつけ追い越せが目標」
- 「チーム内で徹底議論」

**5 視点ラウンドテーブル結果**:
- 攻撃派: 月 50 件追加、1,000 記事 / 1 日 800 人
- 慎重派: 月 20 件、品質維持優先、600 記事 / 1 日 500 人
- データ派: 月 15-20 件 + SEO 強化、700 記事 / 1 日 600-700 人
- KENJI 代理: 週 5-8h、中間採用
- **リン総合**: **月 30 件、9 ヶ月で 800 記事 / 1 日 700 人**

**競合分析（重要発見）**:
- エネチェンジ biz 全体は推定 100-200 記事のみ
- enechange.jp/articles/business カテゴリは **8 記事のみ**
- **当サイト 356 記事は既に上回っている**
- 弱点: HubSpot ブログ、更新頻度低、CFO 特化なし、シミュレーターなし、月次なし

**Ahrefs DR データ（KENJI さん共有）**:
- ドメイン評価: **26**
- 被リンク: 30（37% dofollow）
- リンクしているウェブサイト: 14（50% dofollow）
- → 外部 PR 対象外で内部 SEO 強化が鍵、目標 1 年で **DR 50+**

**採用戦略「量 × 質 × 戦略性」三軸**:
1. **新規ページ大量追加**: 月 30 件、6 ヶ月で 180 件
   - 業種別第 2-4 弾 45 件（ニッチ業種網羅）
   - 県別電気料金 30 件（エネチェンジ biz に無いカテゴリ）
   - CFO・経営層特化 15 件
   - 計算ツール 3-5 件
2. **既存超ピラー化**: 月 5 件、9 ヶ月で 43 件完遂
3. **内部 SEO 最大化**: 構造化データ全件、内部リンク最適化

**KENJI さん作業時間**: 週 5-8 時間、月 23-30 時間

**1 年後（2027/04）目標**:
- 累計記事: **800-900 件**
- 1 日訪問: **700-920 人**
- Google 検索 1 位: **15-20 件**（エネチェンジ 43 件の 35-46%）
- DR: **45-55**

**「追い越し」の段階別定義**:
- 短期（1 年）: コンテンツ幅と深さで追い越し（業種 6 倍、県別 47、計算ツール 3-5）
- 中期（2-3 年）: SEO 順位で追いつき（Google 検索 1 位 30-40 件）
- 長期（3-5 年）: 訪問数で追いつき（1 日 3,000-5,000 訪問）

**明日（5/13）以降の即実行**:
- 5/16-21: B-51a プロンプト準備（5/21 発注）
- 5/22-28: B-51a/b/c 連続発注（5/19 + 5/25 + 5/29、計 15 件追加）
- 6 月以降: 月 30 件ペース継続

**関連ドキュメント**:
- `.ai-team/AGGRESSIVE_STRATEGY_2026-05-12.md` — 詳細戦略書（5 視点議論）
- `.ai-team/DOMAIN_AUTHORITY_BOOST_2026-05-12.md` — DR 26 → 50+ 戦略

---

### 2026-05-14-D45: 月次振り返り 2026-03 / 2026-04 号 欠落発見 → 5/16 B-62 で追加

**5/14 朝 KENJI さん指摘**:
- ハブページ（/business-electricity-retrospective）の月次リストに 2026-03 / 2026-04 が存在しない
- 既存: 2025-10/11/12 + 2026-01/02 + 2026-05（6 ヶ月分）
- 欠落: 2026-03 + 2026-04（2 ヶ月分）

**5 視点議論結果**:
- 攻撃派: 5/15 公開前に B-62 追加発注（直前リスク高）
- 慎重派: 5/22 中間後判断（欠落状態継続）
- データ派: 5/16 朝発注、当日マージで「8 ヶ月分完備」（推奨）
- KENJI 代理: 5/15 公開 60 分には影響なし、5/16 朝対応で OK
- **リン総合: B 案推奨（5/16 朝発注、当日マージ）**

**KENJI さん判断**: 「リンが良いと思うタイミング」→ B 案採用

**5/14 朝のリン下準備（完了）**:
- 2026 年 3-4 月独自データを WebFetch 取得（リン代行）
- `.ai-team/MONTHLY_2026-03_04_DATA_ACTUAL_2026-05-14.md` 作成
- `.ai-team/B-62_AUTO_MERGE_PROMPT_DRAFT_2026-05-14.md` 作成（5/16 朝発注用）
- `.ai-team/scripts/verify_b62.sh` 作成（13 項目検証）

**5/16 朝の予定（KENJI さん 約 2 分）**:
- 9:00 KENJI さん B-62 発注（コピペ 30 秒）
- ClaudeCode 実装 4-6h
- 15:30 リン GO 判定
- 16:00 自動マージ完了 → 17 PR 累計、**月次 8 ヶ月分完備**

**B-62 の実装内容**:
- 新規 2 ファイル: 2026-03/page.tsx + 2026-04/page.tsx（各 32K+ chars、H2 12 個、業界ニュース 5 件）
- 既存更新 2 ファイル: hub-data.ts + articles.ts（2 件登録追加）

**5/22 中間レポートでの訴求**:
- 5/15 月次 5 月号公開 + 5/16 3-4 月号追加 = 月次 **8 ヶ月分完全網羅**
- シリーズ連続性確保、エネチェンジ biz に無い「月次更新」の継続実績

---

### 2026-05-14-D46: 5/13 アグレッシブ戦略下準備完了 + 5/14 公開直前確認

**5/14 朝のリン報告**:
- 5/13 7 件のドキュメント整備完了
- 5/14 朝に 2026-03/04 欠落発見、即対応プラン提示

**KENJI さん 5/14 作業**:
- 9:00-10:00 公開直前確認 60 分（PRE_PUBLISH_CHECKLIST_2026-05-14_FINAL.md）
- 結果: 全 4 セクション OK 確認

**5/14 朝のリン側並行作業（KENJI さん作業ゼロ）**:
- B-62 関連 4 件作成（データ集 + プロンプト + 検証スクリプト + D45）
- 5/15 公開対応スタンバイ

**5/15 公開当日（KENJI さん 90 分）**:
- 9:00 月次振り返り 5 月号公開
- 10:00 プレスリリース 3 社配信
- 12:00 / 18:00 反響レビュー

---

### 2026-05-28-D47: B-76 第1弾「業種×地域クロス」15本完結

**シリーズ概要**: 地域 × 業種のクロス領域で長尾SEOを取りに行く新カテゴリ `industry-region`。地域一般・業種一般のいずれでも拾いきれない「その地域 × その業種」固有の電力事情・契約最適化を1記事55K〜58K+chars / H2 11 / FAQ 8 で網羅。

**3 PR連続マージで15本完結**:
- PR#196（2026-05-28・SHA `76e1d5a`）: パイロット3本（aichi-automotive / chiba-datacenter / kumamoto-semiconductor）＋ industry-region カテゴリ立ち上げ
- PR#197（2026-05-28・SHA `414e61f`）: Batch A 6本（osaka-sme-factory / hyogo-steel / kyoto-hotel-ryokan / mie-semiconductor / kanagawa-logistics-warehouse / ibaraki-logistics）
- PR#198（2026-05-28・SHA `383623c`）: Batch B 6本（hokkaido-food-processing / okinawa-hotel / hiroshima-automotive / niigata-food / fukuoka-retail-commerce / shizuoka-manufacturing）

**全国電力エリア網羅完成**: 北海道・東北・東京・中部・関西・中国・九州・沖縄の旧一電8エリアすべて＋静岡の富士川を境とした中部/東京2エリア構造もカバー。

**運用学び（次PRから定着）**:
1. **先回りリンク禁止**: 未作成の兄弟ページへ絶対リンクしない。同一PR内で同時マージされる兄弟のみ相互リンク可。PR#196・#197で先回りリンクの404事故が累計4件発生 → PR#198で完全防止。
2. **着手前の全href実在grep**: リンク先slugは推測せず必ず `src/data/articles.ts` と `src/app/` の grep で実在確認。PPA/CFO/補助金等の外部参照リンクも同様。
3. **コミットは明示add（`git add -A`/`-am` 禁止）**: `.ai-team/*` の常在変更を巻き込まないよう、新規ファイル＋`articles.ts` のみ明示add。PR#198は7ファイル（新規6 + articles.ts）の理想diff hygieneで通過。

**リン検証14項目**: PR#198で全項目通過。内部href 33ユニーク全件OK・404候補0件、Batch B 6本×56K前後/H2=11/pps-net=3、articleListにrecommendedReadingOrder＋ArticleMeta両方登録、出典実在（経産省・エネ庁・各業界団体）、業種固有要素（マツダ48回・造船110回・米菓72回・離島82回・天神35回・浜松31回・酪農26回 等）。

**第2弾の方向性候補**: 第二集積地補完（群馬×自動車SUBARU / 山口×石油化学 / 岐阜×陶磁器）・業種深掘り（茨城×半導体つくば / 北海道×データセンター石狩冷気利用）・食品兄弟拡張（北海道×水産加工 / 鹿児島×食肉加工）。

---

### 2026-05-29-D48: 史上最大の7PR完結（α/β/γ/δ + B-79パイロット+Batch A + 改善#5）

**1日サマリ**: 朝8時スタート→15時で**7 PR連続クロージング**達成。当初SCHEDULE「B-77補助金15＋B-70深化8」の2 PRに対し、**+5 PR の大幅前倒し**（revalidate恒久対策・索引改善#4/#5・B-79新カテゴリ立ち上げ＋9本）。

**7 PR の内訳**:
- PR#199（α）: `fix(articles)` ISR revalidate=3600 恒久対策（カテゴリ動的ルート＋記事ハブ）。**B-77マージから10分以内に本番反映** で効果即実証。
- PR#200（β）: `feat(b-77)` 補助金深耕 第1弾15本。subsidies カテゴリ 11→**26本**体制。業種×補助金6本＋設備税制別5本＋実務テクニック4本で既存総論13本とのカニバリ完全回避。
- PR#201（γ）: `feat(improve)` 索引改善#4。記事ハブトップ＋業種別ハブ＋埋もれ3ページから B-76/B-77 新規30本への被リンク強化。動的ルートと独立ファイルの実体確認後に方針調整した好例。
- PR#202（δ）: `feat(b-70)` DEEP UPDATE 第2弾。薄め既存記事8本（~11KB）を **30.5-36.7KB（約3倍化）** へ深化。URL/canonical完全不変・捏造ゼロ・B-69（PR#195）との重複ゼロ。
- PR#203: `feat(b-79)` 電力会社別解説 第1弾パイロット3本（東電EP/関電/中部ミライズ）＋**新カテゴリ`power-utility-guide`立ち上げ**。
- PR#204: `feat(b-79)` Batch A 6本（旧一電北/東北/北陸/中国/四国/九電）。power-utility-guide 3→**9本**。
- PR#205: `feat(improve)` 索引改善#5。記事ハブ＋region-* 8本→B-79記事への双方向リンク完全確立。

**累計達成（2日間 5/28〜5/29）**:
- 新規記事: B-76 industry-region 15＋B-77 subsidies 15＋B-79 power-utility-guide 9 = **39本**
- 既存深化: 8本（B-70）
- 新カテゴリ立ち上げ: 2つ（industry-region / power-utility-guide）
- インフラ強化: ISR恒久対策＋内部リンク強化2回

**運用学び（前日D47から進化した3点）**:
1. **フル4並列発注がワークする**: α/β/γ/δの4 PR並行発注（Claude Code subagent並列実装）でリン検証も独立並列回せる。1日4 PR以上の高速化が現実的。
2. **新カテゴリ立ち上げの定石確立**: 型定義 `ArticleCategorySlug` ＋ `articleCategories` 配列 ＋ `articleList` 配列 ＋ `CATEGORY_CTA` の **4箇所セット** を必須化。B-79パイロットPR#203で初回ビルドのCATEGORY_CTA漏れ→即修正の経験で確立。
3. **コンプライアンス4点（B-79で確立）**: ①中立性厳守（特定社優劣評価ゼロ）②公開情報のみ（推測単価ゼロ）③商標尊重（正式名称＋略称併記）④中立社団法人視点（「推奨も否定もしない中立的立場」を冒頭・CTA・FAQの3箇所明示）。電力会社・特定企業を扱う今後のテーマで継承必須。

**ISR恒久対策の即時効果実証**:
- 前日5/28のB-76では12時間以上カテゴリ一覧未反映＝Vercel手動Redeploy必要だった
- 5/29のB-77（PR#200）マージから10分以内に `/articles/subsidies` で15記事反映確認＝**PR#199 revalidate=3600 の効果完全実証**
- 以降は手動Purge/Redeploy不要の自動運用へ移行

**未消化の積み残し（次のリン引き継ぎへ）**:
- B-79 Batch B（沖縄電＋新電力系統別5本）= 5/30(土)朝着手予定・発注プロンプト雛形準備済
- D-1 業種別電気代計算機 = 5/30(土)午後着手予定・仕様書ドラフト準備済（`.ai-team/D-1_TOOL_SPEC_INDUSTRY_ELECTRICITY_CALCULATOR_2026-05-30.md`）
- region-hokuriku-business-electricity 新設 = バックログ追加（B-79 rikuden 記事から相互リンクを張れない地域カバレッジ欠落）
- 第2弾候補（B-76/B-77）= 未着手のままKENJIさん発注待ち

---

### 2026-05-30-D49: 6PR完結＋D-1業種別電気代計算機完成（SCHEDULE 4日前倒し）

**1日サマリ**: 5/30(土)朝8時スタート→14時半までに **6 PR連続クロージング**＋**D-1業種別電気代計算機 完成・公開**達成。SCHEDULEの「朝B-79 15＋午後D-1着手」を完全達成しつつ、D-1完成（当初6/3予定）まで **4日前倒し**で実現。

**6 PR の内訳**:
- PR#206: `feat(b-79)` 電力会社別解説 Batch B 6本（B-79第1弾15本完結・沖縄電+新電力系統別4類型+旧一電横断比較）。power-utility-guide カテゴリ 9→**15本完結** 🏆。中立性4-5回明示・「優劣評価ゼロ」を横断比較記事で明示的に宣言。
- PR#207: `feat(d-1a)` 業種別電気代計算機 バックエンド計算ロジック実装。新規5ファイル994行・vitest 46/46 PASS・代表50＋網羅330ケースで妥当範囲内確認・パフォーマンス1000回計算<100ms。既存simulator型・係数マトリクスを100%流用（仕様書「既存70%活用」を実証）。
- PR#208: `feat(d-1b)` 業種別電気代計算機 フロントエンドUI実装。/industry-electricity-calculator 公開・入力フォーム10/11/3/3完備・GA4イベント3種・法的免責「目安」4箇所明示・中立性表現多数・HowToJsonLd・横棒グラフCSS実装。

**累計達成（3日間 5/28〜5/30）**:
- 新規記事: B-76 industry-region 15＋B-77 subsidies 15＋B-79 power-utility-guide 15 = **45本**
- 既存深化: 8本（B-70）
- 新カテゴリ立ち上げ: 2つ（industry-region / power-utility-guide）
- 機能ツール: **D-1業種別電気代計算機 完成** 🏆（D-1a/D-1bの2PRで1日完成・SCHEDULE 4日前倒し）
- インフラ強化: ISR恒久対策＋内部リンク強化2回

**2日連続 史上最大ペース（5/29: 7PR / 5/30: 6PR = 計13PR）**:
- 5/29と5/30の2日間で**13PR連続マージ**達成（過去最大の連続記録）
- 通常運用2PR/日 → 6-7PR/日 = 3-3.5倍ペース
- これは「並列subagent方式（Claude Code）」と「リン検証14項目の独立並列化」が機能した結果

**運用学び（D48から進化した4点）**:
1. **計算機ツール開発の高速化**: D-1a（バックエンド）→D-1b（フロントエンド）の2PR分割で並列検証可能。既存資産100%流用（src/lib/simulator/）により当初5日間→1日で完成。次のD-2/D-3も同パターンで前倒し可能性。
2. **HowToJsonLd採用**: 計算機の使い方を構造化＝Google検索でリッチリザルト対応の可能性。SoftwareApplication系より HowTo の方が「業種選択→入力→結果」の流れに馴染む。
3. **「リンGO前 merge 禁止」運用の徹底**: D-1a（PR#207）でClaude Code側 auto-merge が一度発生したため、D-1b（PR#208）で発注プロンプト先頭に「★最重要・運用ルール再確認」として明示。結果、PR#208は正しくリンGO待機状態で運用確立。
4. **本番反映の即時性**: PR#199 revalidate=3600 の効果でB-77/B-79/D-1いずれもマージから1時間以内に本番反映確認可能。手動Purge/Redeploy不要の自動運用が完全定着。

**未消化の積み残し（次のリン引き継ぎへ）**:
- 改善#6（既存記事から /industry-electricity-calculator への被リンク注入）= 5/31以降の柱2索引改善で実施
- D-1の使い方解説記事1本 = 6/5予定（流入導線）
- D-2 シナリオ別シミュレーション 仕様検討 = 6/10予定（D-1利用ログ蓄積後）
- region-hokuriku-business-electricity 新設 = バックログ継続（B-79 rikuden記事との双方向リンク確立用）
- 第2弾候補（B-76/B-77第2弾）= 未着手・KENJIさん発注待ち

**5/31(日)の予定（標準ペース2-3 PR）**:
- 朝: B-80 ケーススタディ 第1弾 15本
- 午後: B-81 CFO 第3弾 8本（CFO 26→34本）＋週次索引率計測

**6/15時点での累計到達目標**: 累計記事 約960本（5/30時点 約711本 → +249本）／D-1完成済＋D-2着手予定。

---

### 2026-05-31-D50: 3PR完結＋第2回週次計測＋改善#6内包達成＋未登録URL優先度マトリクス整備

**1日サマリ**: 5/31(日)朝の第2回週次計測（5/16〜5/31の2週間効果検証）＋チーム会議16改善案策定→未登録417本優先度マトリクス整備（午前）→**B-80 ケーススタディ第1弾15本マージ**＋**B-81 CFO第3弾8本マージ**の3作業完結（午後）。SCHEDULE通り標準ペース2PR+週次計測タスク。

**3作業の内訳**:
- **第2回週次計測**: GSC Coverage（5/25時点 索引率52.5%・「クロール済み未登録」344→**417本に+73本拡大**）＋GSC Performance 7日（クリック500→**523**・表示+22%大幅増・1日平均クリック71.4→74.7）＋GA4月次（10年推移ページが577ユーザーでヘビーリピート確認）。`.ai-team/gsc/INDEX_RATE_WEEKLY_LOG.md` に第2回追記済。
- **チーム会議＋優先度マトリクス**: 全AIメンバー討議で**改善案16件策定**＋未登録417本の優先度マトリクス整備。最優先＝業種別レビュー31本（改善#6第2弾の本丸）として確定。`.ai-team/TEAM_DISCUSSION_2026-05-31_WEEKLY_INDEX_REVIEW.md` ＋ `.ai-team/UNINDEXED_URL_PRIORITY_2026-05-31.md` 整備。
- **PR#209**: `feat(b-80)` ケーススタディ第1弾 15本（中堅製造業×契約見直し/大規模工場×省エネ投資/自動車Tier1 PPA/半導体 RE100/小売多店舗一括/大型商業施設ZEB/リゾートホテルコージェネ/飲食チェーンデマンド管理/冷凍冷蔵蓄電池/ハイパースケールDC PUE/自動倉庫太陽光/病院BCP/高齢者施設省エネ/大学キャンパスエネマネ/自治体公共施設）。case-studies カテゴリ **11→26本**。**全15本にD-1（/industry-electricity-calculator）への被リンク注入**で**改善#6を内包達成**。
- **PR#210**: `feat(b-81)` CFO第3弾 8本（TCFD/ISSB開示・M&A電力DD・サプライチェーンCN-Scope3・為替原油連動・海外連結エネマネ・季節予算・統合報告書・投資家対話）。cfo-executive カテゴリ **6→14本**（発注メモの「26→34」は私のカテゴリ実数誤認・Claude Code判断で order 7-14調整）。**全8本にD-1リンク4回ずつ**で改善#6内包継続。出典TCFD/ISSB/IFRS S2/SSBJ/CDP/SBT/RE100/GHGプロトコル全件言及・実在企業名/評価機関名ゼロ（MSCI/FTSE/S&P等の評価機関名も完全不使用）・中立免責8-11箇所/file。

**累計達成（3日間 5/29〜5/31 大規模ラッシュ）**:
- 新規記事: B-77 15＋B-79 15＋B-80 15＋B-81 8 = **53本**（B-79 Batch B 6含む）
- 既存深化: 8本（B-70）
- 新カテゴリ立ち上げ: 2つ（industry-region / power-utility-guide）＋大幅拡張2つ（case-studies 11→26 / cfo-executive 6→14）
- 機能ツール: D-1業種別電気代計算機 完成 🏆
- インフラ強化: ISR恒久対策＋内部リンク強化2回
- 改善#6内包: **23本にD-1リンク注入完了**（B-80+B-81）

**3日連続 史上最大ペース（5/29: 7PR / 5/30: 6PR / 5/31: 2PR+計測1 = 計15-16PR）**:
- 3日間で **15+PR連続マージ＋週次計測体制確立＋カテゴリ16の体系整備** 達成
- 通常運用2PR/日 → 平均5+PR/日 = 2.5倍ペース継続
- 計測体制が **「PR量産→自走運用」へ移行する転換点**

**運用学び（D49から進化した5点）**:
1. **「改善#6内包」パターン確立**: B-80/B-81いずれも新規記事制作時に D-1への被リンクを各記事必須化＝改善#6（既存→D-1リンク注入）を「新規記事制作時」に組み込むことで二度手間ゼロ・本日23本注入完了。今後の新規制作は全て同パターン継承必須。
2. **第2回計測のフォーマット完成**: 「索引率Coverage＋Performance 7日＋GA4月次＋未登録Drilldown」の4セット定例化。次回6/7（第3回）からはB-76/B-77/B-79/B-80/B-81の浮上初観察が始まり、本格的な「施策→効果」マッピングが可能に。
3. **未登録URLの優先度マトリクス手法**: 417本を「業種別レビュー31本＝🔴1最優先 / 業種別一般6 / その他解説184 / カテゴリ25 / 特集23 / 月次9 / 再エネ7 / region-7 / 既存case-study7 / 既存subsidy6 / 市区町村5 / CFO1」とカテゴリ別分類＝改善#6/#7以降の打ち手の優先順位が一目で見える運用整備。
4. **カテゴリ実数の事前確認テンプレ化**: B-81発注メモで「cfo-executive 26→34本」と書いたが実数は6本＝私のミス。次回からテンプレに「**発注前に対象カテゴリ実数をgrepで確認**」を必須化。Claude Codeが正しくorder 7-14調整した実装は問題なし。
5. **TCFD/ISSB等のグローバル規格対応**: 5/31 B-81で「TCFD解散（2023）→ISSB(IFRS S2)・SSBJ移行」を全8本で正確に記載＝最新の制度動向に追随する執筆規律確立。今後のCFO/グローバル系記事の標準テンプレに。

**B-81発注メモの所見（次回改善点）**:
- 発注メモは「cfo-executive 26→34本」と記載＝実数は cfo-executive 6本＋for-executives 12本＝計18本（混同）
- Claude Code判断で cfo-executive に登録（order 7-14）した実装は妥当
- 次回発注は **対象カテゴリ実数を `grep "categorySlug.*<slug>" src/data/articles.ts | wc -l` で事前確認**必須

**未消化の積み残し（次のリン引き継ぎへ）**:
- 🔴 **GA恒久修正**（着地ページpage_viewドロップ・実態約2倍過少計上）= 6/3（水）実施予定・発注プロンプト本日5/31夜までにリン側準備中（KENJIさんGA4リアルタイム着弾確認をGO条件に）
- 🔴 **改善#6第2弾**（業種別レビュー31本へのD-1被リンク注入）= 6/2（火）実施予定・発注プロンプト準備済（リン提示済）
- D-2 シナリオ別シミュレーション仕様検討 = 6/10予定（D-1利用ログ蓄積後）
- region-hokuriku-business-electricity 新設 = バックログ継続
- 改善#6 第3弾（「その他」解説184本）= 6月中旬以降・GA4 PV順並び替えTOP30から段階着手
- 第2弾候補（B-76/B-77第2弾）= 未着手・KENJIさん発注待ち

**6/1（月）の予定**:
- 朝: **月次振り返り6月号公開**（business-electricity-retrospective/2026-06）= KENJIさん作業（リン側はサポート）
- 午後: B-81総括＋6/2改善#6第2弾の発注準備

**6/15時点での累計到達目標（D49から微更新）**: 累計記事 約960本（5/31時点 約740本 → +220本）／D-1完成済＋D-2着手予定＋改善#6第2-3弾完遂で索引率53%→62%目標。

---

## 2026-06-01 朝〜午後セッション

### 2026-06-01-D51: 再エネ賦課金 数値バグ全面訂正（PR #211 マージ完了）

**背景**: 6/1朝、月次振り返り6月号の準備のためデータ構造を調査中、リンが再エネ賦課金の数値バグをサイト全体で発見。SEO中核記事 `renewable-energy-surcharge-2026` が「2026年度=4.15円・前年度比+0.17円」と記載していたが、経産省2026/3/19告示の確定値は **4.18円・+0.20円**。検索流入の最重要ページの結論数値・規模別試算テーブル全体が誤った単価で計算されていた致命的バグ。

**確定値（経産省告示・複数独立ソース＋新電力ネット統計で確認）**:
- 2024年度 3.49円 / 2025年度 **3.98円** / 2026年度 **4.18円（前年度比+0.20円）**

**誤り3系統を訂正**:
- A: 専用ページ 4.15→4.18・0.17→0.20（単価表・試算5行・計算例・結論・まとめ）
- B: 月次3記事(2026-03/04/05)の前年度基準 3.49→3.98（差分+0.20は維持）
- C: hub-data 速報値+0.49→確定+0.20、retrospective-data 2025年度「据え置き」→3.98へ上昇訂正
- ＋ articles.ts recommendedReadingOrder 登録漏れ補完（2026-04/03）

**PR #211**: `b7e3f02`、main へ squash マージ。2コミット構成（755a682 賦課金6ファイル + 2c6c6a0 articles.ts）。計7ファイル。
- リン検証14項目該当分パス（⑩出典実在 ⑬数値捏造ゼロ ⑭diff hygiene ⑱本文構造不変 ⑲既存リンク順序維持）
- 本番反映確認済み（結論文4.18円・試算1億32万円に更新済）
- 2024年度=3.49円（正しい値）は保全。

**運用学び**:
1. **CRLF事故の検出と切り分け**: `core.autocrlf=true` 環境で `git status` が数百ファイル誤検出。`git diff --ignore-cr-at-eol` / `--numstat` で実変更（7ファイル）を切り分け、明示addで巻き込み回避。今後の検証定石とする。
2. **Chrome実機の不調はWebFetchで代替**: Claude in Chrome の navigate がスキーマ不整合(windowId/tabId)で機能せず。WebFetch中心に切替えてJEPX・新電力ネット・経産省データを取得完了。Chrome実機は「JS必須でWebFetchが空を返す場合のフォールバック」に位置づけ。
3. **数値の一元管理が未対応**: 賦課金単価が200超ファイルに散在。`unitPriceMatrix.ts` の `RENEWABLE_SURCHARGE_PER_KWH=3.98`(2025年度値)も要更新。`RENEWABLE_SURCHARGE_BY_YEAR` 定数化＝D-1月次更新メカニズムと統合する施策をバックログ化。

### 2026-06-01 月次振り返り構造の正しい理解（引き継ぎメモ誤り訂正）

- 月次ページ（2026-MM）は**各ディレクトリの独立した静的 page.tsx**（数値ベタ書き、`_components/MonthlyVisuals`で描画）。
- `[slug]`動的ルート + `retrospective-data.ts` は**年次×契約区分（2020-2025×4区分）専用**で月次とは無関係。
- 6月号追加に必要なのは「2026-06/page.tsx 新規 + hub-data の MONTHLY_RETROSPECTIVE_ITEMS 追加 + articles.ts 登録」の3点のみ。sitemap自動検出のため編集不要。
- **時期判断**: 6月使用分の確定データ（各社燃調・燃料価格）は6/26頃確定、新電力ネット平均単価ソースは2026/02が最新。6月号は6月下旬の速報公開が筋。代わりに2026-05号の確定値更新（記事自身が「5月末〜6月初更新」と明記）が時期的に正しい次施策。発注プロンプト準備済 = `MONTHLY_2026-05_FINAL_UPDATE_PROMPT_2026-06-01.md`。

### スコープ外の積み残し（次バッチ候補）

賦課金訂正の調査中に発見、本PRスコープ厳守のため未修正:
1. 業種別記事 多数（aquarium-zoo / advertising / auto-repair / auto-parts 等）が「2026年度4.5円/kWh前後」と記載 → 確定値4.18円と乖離
2. `budget-planning-in-high-price-era` L152 「3.49円/kWh（2023年度）」と年度誤記（3.49は2024年度）
3. `electricity-price-without-renewable-surcharge/_lib/renewable-surcharge-data.ts` L133 `yearOverYearYen: 0.49` → 2026年度YoYなら+0.20であるべきか要確認

---

## 2026-06-01 朝〜午後セッション

### 2026-06-01-D51: 再エネ賦課金 数値バグ全面訂正（PR #211 マージ完了）

**背景**: 6/1朝、月次振り返り6月号の準備のためデータ構造を調査中、リンが再エネ賦課金の数値バグをサイト全体で発見。SEO中核記事 `renewable-energy-surcharge-2026` が「2026年度=4.15円・前年度比+0.17円」と記載していたが、経産省2026/3/19告示の確定値は **4.18円・+0.20円**。検索流入の最重要ページの結論数値・規模別試算テーブル全体が誤った単価で計算されていた致命的バグ。

**確定値（経産省告示・複数独立ソース＋新電力ネット統計で確認）**:
- 2024年度 3.49円 / 2025年度 **3.98円** / 2026年度 **4.18円（前年度比+0.20円）**

**誤り3系統を訂正**:
- A: 専用ページ 4.15→4.18・0.17→0.20（単価表・試算5行・計算例・結論・まとめ）
- B: 月次3記事(2026-03/04/05)の前年度基準 3.49→3.98（差分+0.20は維持）
- C: hub-data 速報値+0.49→確定+0.20、retrospective-data 2025年度「据え置き」→3.98へ上昇訂正
- ＋ articles.ts recommendedReadingOrder 登録漏れ補完（2026-04/03）

**PR #211**: `b7e3f02`、main へ squash マージ。2コミット構成（755a682 賦課金6ファイル + 2c6c6a0 articles.ts）。計7ファイル。
- リン検証14項目該当分パス（出典実在/数値捏造ゼロ/diff hygiene/本文構造不変/既存リンク順序維持）
- 本番反映確認済み（結論文4.18円・試算1億32万円に更新済）
- 2024年度=3.49円（正しい値）は保全。

**運用学び**:
1. CRLF事故の検出と切り分け: core.autocrlf=true 環境で git status が数百ファイル誤検出。git diff --ignore-cr-at-eol / --numstat で実変更（7ファイル）を切り分け、明示addで巻き込み回避。今後の検証定石とする。
2. Chrome実機の不調はWebFetchで代替: Claude in Chrome の navigate がスキーマ不整合(windowId/tabId)で機能せず。WebFetch中心に切替えてJEPX・新電力ネット・経産省データを取得完了。
3. 数値の一元管理が未対応: 賦課金単価が200超ファイルに散在。unitPriceMatrix.ts の RENEWABLE_SURCHARGE_PER_KWH=3.98(2025年度値)も要更新。RENEWABLE_SURCHARGE_BY_YEAR 定数化＝D-1月次更新メカニズムと統合する施策をバックログ化。

### 2026-06-01 月次振り返り構造の正しい理解（引き継ぎメモ誤り訂正）

- 月次ページ（2026-MM）は各ディレクトリの独立した静的 page.tsx（数値ベタ書き、_components/MonthlyVisualsで描画）。
- [slug]動的ルート + retrospective-data.ts は年次×契約区分（2020-2025×4区分）専用で月次とは無関係。
- 6月号追加に必要なのは「2026-06/page.tsx 新規 + hub-data の MONTHLY_RETROSPECTIVE_ITEMS 追加 + articles.ts 登録」の3点のみ。sitemap自動検出のため編集不要。
- 時期判断: 6月使用分の確定データ（各社燃調・燃料価格）は6/26頃確定、新電力ネット平均単価ソースは2026/02が最新。6月号は6月下旬の速報公開が筋。代わりに2026-05号の確定値更新が時期的に正しい次施策。発注プロンプト準備済 = MONTHLY_2026-05_FINAL_UPDATE_PROMPT_2026-06-01.md。

### スコープ外の積み残し（次バッチ候補）

賦課金訂正の調査中に発見、本PRスコープ厳守のため未修正:
1. 業種別記事 多数（aquarium-zoo / advertising / auto-repair / auto-parts 等）が「2026年度4.5円/kWh前後」と記載 → 確定値4.18円と乖離
2. budget-planning-in-high-price-era L152 「3.49円/kWh（2023年度）」と年度誤記（3.49は2024年度）
3. electricity-price-without-renewable-surcharge/_lib/renewable-surcharge-data.ts L133 yearOverYearYen: 0.49 → 2026年度YoYなら+0.20であるべきか要確認

---

## 2026-06-03 GA恒久修正セッション

### 2026-06-03-D53: GA着地page_viewドロップ 恒久修正（PR #214 マージ完了・preview debug検証フロー確立）

**背景**: 着地ページの page_view が約半分しか計上されない問題（5/24以来未解決）。5/24のPR#186「config順序保証+afterInteractive・インラインinit削除」は本番でGA全停止→9時間以内にPR#190で即Revert（5/24-25の2日間データ消失）。原因は preview実機検証なしの本番直行。

**今回の解決（Option A）**:
- gtag.js を lazyOnload→afterInteractive（lazyOnloadの遅延が着地ドロップの主因。元々はPR#68のLCP改善目的）
- インライン ga4-init は維持・削除しない（PR#186の全停止要因を踏まない）
- gtag.js Script の onLoad で着地 page_view を確実送信、useEffect は SPA遷移時のみ（useRef(lastTrackedPath)で初回抑止＝二重送信防止）
- 既存 ensureGtag 再利用（initGa新設せず）

**前段改修（本番非汚染で preview 検証を可能化）**:
- getGaRuntimeConfig() で3分岐。(a)production=[G-VCCJXB8WGP, G-WGXXZN9G7Y]・debug_mode無し（現行と完全同一）、(b)preview-debug=VERCEL_ENV==="preview" かつ NEXT_PUBLIC_GA_ID_DEBUG 有 → [debug ID]・debug_mode:true、(c)その他=null
- KENJI事前: GA4 debug専用プロパティ G-7Y9ZCE6PQV 作成 + Vercel NEXT_PUBLIC_GA_ID_DEBUG を Preview スコープのみに設定（productionには設定せず＝二重の安全策）

**3段階GO（PR#186の轍を回避）**:
1. リンGO: コード独立精読（2ファイル・production不変・inline維持）+ Claude in Chrome で preview実機検証（dataLayer js→config→page_view、着地/SPA各1回・二重なし、tid=G-7Y9ZCE6PQV着弾、本番ID 0件）
2. KENJI preview実機OK: 本番ID(G-VCCJXB8WGP)検索0件をKENJI自身が確認
3. KENJI最終GO→マージ

**PR #214**: 7dbff42、main へマージ。2ファイル（ga.ts +56/-9・GoogleAnalytics.tsx +52/-19）。tsc/next build OK（979 pages）。

**本番反映の実証**: マージ後、GA4リアルタイム（EIC-GA4/G-VCCJXB8WGP）で記録を実証。アクティブユーザー16・page_view 8件・テスト訪問(/compare)が着弾表示。GA停止なし＝PR#186再発せず。

**503所見（重要）**: 検証中、GA4 g/collect が preview(debug)・production双方で503を返したが、リアルタイムで記録が確認できたため503は記録を妨げない（無害）と実証。GA4は複数エンドポイント冗長送信＋リトライのため片方503でも着地（doubleclick/Clarityは204）。原因はおそらく検証セッションの大量テストヒットによる一時スロットリングで、PR#214とは無関係（変更と無関係の既存イベントnav_clickでも発生）。

**運用学び**:
1. preview実機検証の成立条件: 本番限定ガード（hostname+VERCEL_ENV）がpreviewでGAを無効化するため、preview検証には「preview専用debugプロパティ＋VERCEL_ENV分岐」が必須。本番非汚染を保ったまま検証する設計を定石化。
2. Chrome実機検証は機能する: Claude in Chrome の navigate/javascript_tool/read_network_requests が正常動作し、dataLayer・g/collect・GA4リアルタイムまで独立検証できた（D51時点の「navigate不調」は解消）。GA系検証はChrome実機を第一手段に。
3. ステータスコードだけで判断しない: g/collectの503は記録停止を意味しない。最終確認はGA4リアルタイム/DebugViewの実データで行う。
4. 本番GAは2本のDual tag（G-VCCJXB8WGP=EIC共通2022〜 + G-WGXXZN9G7Y=simulator専用5/17 PR#173）。意図的構成で問題なし。simulator単独はG-WGXXZN9G7Y、全体俯瞰はG-VCCJXB8WGP。2つの数字は足さない。

**次アクション**: 6/4昼 GA4「ページ」レポートで着地PV約2倍化を確認（修正効果の答え合わせ）。debugプロパティ(G-7Y9ZCE6PQV)とVercel env(Preview)は今後のGA preview検証用に保持。

---

## 2026-06-04 セッション（GA翌日・#215/#216連続マージ）

### 2026-06-04-D54: 2026-05号 表現適正化（PR #215）＋ 賦課金SSOT化 C-1（PR #216）マージ完了

**PR #215（41a1f28）: 2026-05号 表現適正化**
- 「確定値」→「推計/速報」を6箇所修正（L52コメント/L188燃調FAQ/L295低圧2件/L316高圧/L340特別高圧/L568脚注）。新電力ネットの平均販売単価ソースが2026/02までで5月分は推計のため、過剰な「確定値」表記を正確化。
- 賦課金4.18円の「確定値」（経産省告示・L80/163/229/248/270/396）は正しい文脈のため維持。
- updatedDate="2026-06-04" 新設・AuthorBadge適用。publishedDate(2026-05-15)不変。★単価数値は1つも変更なし（diffで確認）。
- C項（JEPX 15.87円/kWh追記）はClaude Codeが一次ソース再確認できず省略＝数値捏造禁止原則に忠実な適切判断。
- 本番反映確認済み（4区分「推計」表示・最終更新6/4表示・数値無傷）。
- 当初の「賦課金3.49→3.98訂正」はPR#211で対応済みのためスコープから除外（事前のorigin/main実ファイル精読で検出）。

**PR #216（314c499）: タスクC-1 賦課金SSOT化（設計書 SURCHARGE_CONSTANT_DESIGN_C_2026-06-01.md）**
- 正準モジュール新設 src/lib/data/renewableSurcharge.ts: RenewableSurchargeRow型＋RENEWABLE_SURCHARGE_DATA(2012-2026全15行)を移設、getSurchargeByFiscalYear/getLatestSurcharge/CURRENT_FISCAL_YEAR を追加。import文ゼロ＝app非依存。
- 旧パス _lib/renewable-surcharge-data.ts は再エクスポート化（後方互換）。既存4importer（without-surcharge page/Charts・businessElectricityTrendHubData・priceAdjustmentHistory）は無改修でビルド通過。
- D-1計算機接続（本丸）: unitPriceMatrix.ts L109 の手書きスカラー4.18を getLatestSurcharge().unitPriceYenPerKwh に置換（import追加＋1行のみ）。スカラー二重管理＝4.15/3.49系バグの温床を構造的に解消。
- ドリフトガードtest新設: 確定値スナップショット(2024=3.49/2025=3.98/2026=4.18)＋スカラー=配列一致＋YoY全行整合。YoYテストはD51積み残し③（yearOverYearYen疑義）を実証解消（2025=+0.49・2026=+0.20で全行一致）。
- リン検証: 値の完全突合 VALUES_IDENTICAL（旧mainと新モジュールのデータ行112行がbyte一致）・151 tests passed・既存toBe(4.18)無改修で緑。
- 効果: 来年度（2027年度）改定は配列1行追記でチャート/履歴/ハブ/D-1計算機すべてに自動追従。

**運用学び**:
1. 古いローカルmain分岐事故の切り分け（#215）: ブランチが#212時点のローカルmainから分岐しており、two-dot diffでは34ファイル差分（#213/#214の巻き戻しに見える）が出た。merge-base確認＋three-dot diff＋git merge-tree衝突0で「mainに入るのはブランチ自身の1ファイルのみ」と判定しGO。以後の発注プロンプトに「git fetch origin && git checkout -b <branch> origin/main」を必須化（#216で実施済み・分岐元=最新main）。
2. リファクタPR検証の定石: append-only用の「削除行0」基準は移設リファクタには非適用。代わりに「値の完全突合（grep抽出→diff）＋後方互換（importer無改修）＋依存方向（lib→app禁止）」で担保する。
3. PRレビューは three-dot（merge-base基準）で見る。two-dot（ツリー直接比較）はmain側の新規コミットが"削除"に見える誤検知源。

**次アクション**: C-2（プロース・ドリフトガード: 賦課金文脈の単価リテラル検出スクリプト/test・燃調レンジ誤爆回避）→ C-3（タスクB: 「2026年度4.5円前後」93ファイルの個別安全修正）。6/4昼にGA効果（着地PV約2倍）の答え合わせ。

### 2026-06-04 追記（D54補遺）: GA恒久修正の効果初観測（6/4昼）

- サイト全体（EIC - GA4・日曜〜本日 vs 前期間）: 表示回数 2,808（+62.0%）に対しユーザー +14.8%＝「人が増えた」のでなく「数え落とした着地page_viewが計上され始めた」計測回復の典型シグネチャ。
- views/user の回復曲線: 約1.0（修正前の窓）→ 1.83（6/3・修正半日）→ 2.23〜2.36（6/4途中）。1セッション=着地1回分の取りこぼし回復として理論どおり。
- トップページ表示回数: 6/3丸1日=52 に対し、6/4は途中時点で既に55〜64＝丸1日換算で約2倍ペース。
- 健全性: 二重カウント兆候なし（ホーム2.67 views/userはハブとして自然）・記録停止なし。24h監視クローズ。
- 確定判定: 6/5朝に「6/2（修正前丸1日） vs 6/4（修正後丸1日）」のトップページ日次比較。6/7第3回計測にも組込み。
- プロパティ運用注: 日次比較は同一プロパティ内で行う。サイトKPIはsimulator専用プロパティ（G-WGXXZN9G7Y）が正。プロパティ間の数値突合はしない（当日データの処理ラグ＋フィルタ差で正常にズレる）。

### 2026-06-05 追記（D54補遺2）: GA恒久修正 効果の確定判定（6/2 vs 6/4 丸1日比較）

EIC - GA4・ページパス別レポート（同一プロパティ・同一条件の単日比較）:

| 指標 | 6/2(修正前) | 6/4(修正後) | 変化 |
|---|---|---|---|
| 表示回数 合計 | 490 | 1,322 | ×2.70 |
| アクティブユーザー | 439 | 550 | ×1.25 |
| views/user | 1.12 | 2.40 | ×2.14 |
| トップ「/」表示回数 | 65 | 112 | ×1.72（eic-jp.orgルート混在で希釈） |
| 平均エンゲージメント時間 | 51秒 | 1分14秒 | +45% |

- 分解: 表示回数×2.70 ≒ ユーザー実成長×1.25 × 計測回復×2.14 → **修正による計測回復は約2.1倍＝「約2倍」の想定どおりで確定**。5/24以来の計測問題は完全決着。
- 以後のKPIは6/4以降の「真の数字」を新ベースラインとする（6/7第3回計測に明記。前週比は計測不連続に注意）。
- 自動化メモ: GA4レポートURLに `_u.date00/_u.date01=YYYYMMDD` を付与すると単日指定で直接開ける（params=_u..nav%3Dmaui%26_u.date00%3D...%26_u.date01%3D...）。リン定石として記録。

---

### 2026-06-05-D55: C-2ドリフトガード（PR#217）＋ B-76第2弾8本（PR#218）マージ完了

**PR #217（40b18fe）: タスクC-2 賦課金プロース・ドリフトガード**
- scripts/check-surcharge-drift.mjs 新設（レポート専用・exit常時0・--strictでCI昇格可能な設計）＋ npm run check:surcharge ＋ ベースラインレポート SURCHARGE_DRIFT_REPORT_2026-06-05.md
- ベースライン: 走査845ファイル／不一致133ファイル184件（2026年度181・2025年度2・2022年度1）／年度不明74件 ＝ タスクB(C-3)の確定リスト
- 検出精度: 1文に3単価（3.49/3.98/4.5）が並ぶ行で4.5のみを正確検出（文スコープ年度対応・増分+除外）。燃調レンジ（〜+4.5円）誤検出ゼロ
- 新発見3件（既知93系の外側）: ウクライナ振り返り 2022年度3.36（正3.45）／「3.49円(2025年度)」×2記事（正3.98）
- 記事本体diffゼロ。実装中に再生成されたレポート差分はcheckout復元で巻き込み回避（diff hygiene）

**PR #218（0aeab4a）: B-76第2弾 業種×地域クロス8本（industry-region 15→23）**
- 新規8本: 群馬×自動車(東京)／岡山×化学(中国)／長野×精密電子(中部)／宮城×水産加工(東北)／富山×医薬品(北陸初)／香川×食品(四国初)／愛媛×製紙(四国)／鹿児島×食品(九州)
- リン検証17項目パス: 64.7K〜69.2K字・H2=11・pps-net3-4・D-1リンク1-2・中立文8-11・旧予測4.5円=0件（C-2検出器でダブルチェック）・42ユニークhref全件実在（/articles/industry-regionは動的ルート解決を確認）・articles.ts追記のみ(+17/0)・最新main分岐・削除0行
- 本番反映確認: toyama-pharmaceutical-electricity-cost をfetchし index/follow・公開日6/5・北陸固有記述（水力比率・燃調低感応）・賦課金4.18確定・D-1/pps-netリンクを確認
- 実装方式の記録: 8本を並列サブエージェントで起草→発注側が機械検証（404照合・サイズ/H2/中立文/賦課金/エリア集計・ビルド）→コミット。品質が安定する新パターン
- 備考: region-hokuriku-business-electricity は既にmainに実在（6/1 TODOのバックログメモは陳腐化していた。リンクは404にならない）

**運用学び**:
1. C-2検出器が即日活躍: B-76第2弾の「賦課金4.5円ゼロ」を機械確認＝量産と品質ガードの並走体制が確立。
2. 並列起草＋機械自己検証＋リン独立検証の3層で、8本一括でも検証17項目が安定パス。
3. バックログメモは陳腐化する。リンク実在判定は常にgit ls-tree/グレップの実測で（メモを信じない）。

**次アクション**: 6/7（日）第3回週次計測（観察4点: 改善#6第2弾31本の転換数／B-76〜81のGSC浮上／索引率52.5%→?／GA真の表示回数=新ベースライン・6/2vs6/4比較値を記載）。C-3（タスクB 184件）はC-2レポートを正として20-30件/PR×3-4回で個別修正。

---

### 2026-06-06-D56: タスクB第1弾(PR#219) + B-77補助金第2弾(PR#220) マージ完了

PR #219 (047c8fd): タスクB第1弾 賦課金プロース修正。C-2レポート184件のうちa〜e帯29ファイル+個別実バグ4件。33ファイル・55ins/55del=数値のみ(構造/リンク/metadata不変)。定型「2026年度(予測)4.5円/kWh前後」→「4.18円/kWh(確定)」、派生試算22スポットを4.18基準で再計算(電卓確認)。個別4件: ukraine 2022年度3.36→3.45 / 3.49円(2025年度)→3.98 ×2 / articles.ts 4.15→4.18(PR#211取りこぼし)。誤検出2件(容量拠出金1.1 / 平均単価16.9)は据え置き。リン独立検証: git grepで 4.5パターン180→133(-47)+個別4=-51 → check:surcharge 184→133 完全整合。検出漏れ1件 cfo-electricity-cost-basics:376 は次バッチで個別取込+スクリプト改修(燃調除外を同一文スコープへ)予定。

PR #220 (fd9ba13): B-77補助金第2弾8本(subsidies 26→34)。設備制度5(自然冷媒冷凍/EV充電/コージェネ/断熱ZEB/DR)+業種戦略3(農業一次/食品加工/オフィス不動産)。各61.7-69K字・H2 11・FAQ8。リン検証: 9ファイル削除0・order27-34・pps2-3・D-1 3-4・中立9-12・賦課金4.18のみ(check:surcharge 133→133)・55href全件解決(2件は動的ルート解決)。DR記事は実績連動報酬と明確区別・制度hedge徹底。

今週(6/3-6/6)累計7PR: #214 GA恒久修正・#215 2026-05号・#216 C-1 SSOT・#217 C-2ガード・#218 B-76第2弾8本・#219 タスクB第1弾・#220 B-77第2弾8本。記事747本・賦課金ドリフト184→133・GA計測×2.14回復確定。

次: 6/7第3回週次計測 → C-3第2弾(f〜n帯+cfo+スクリプト改修)・B-79②/B-80②/B-82・改善#6③(計測後TOP30選定)・D-2仕様。

### 2026-06-07-D57: タスクB(C-3)第2弾 賦課金プロース修正(#221) ＋ 検出器の燃調除外 文スコープ化(#222) マージ完了

**PR #221 (squash: 8a9fef8): C-3第2弾 プロース修正 f〜n帯48ファイル66件 ＋ cfo個別1件**
- 「2026年度(予測)4.5円/kWh前後」→「2026年度4.18円/kWh（確定）」。49ファイル・90ins/90del(1:1・構造/リンク/metadata不変)。
- 派生試算の再計算(電卓確認): food 8,550万→7,942万(+1,919→+1,311万)／glass 1.26億→1.17億(+2,856→+1,932万) 等。検出器の±2行窓外にある試算ブロックもgrep-zeroで修正。
- ★既存10倍誤記の是正(4.5由来でない・リン電卓検証の上KEEP): hokkaido/iwate「5年で20億円超」→「2億円超」(1,000万kWh×4.18×5=2.09億)、miyagi「2億/30億」→「2,000万/3億」。ibaraki「20億円超」は正値(1億kWh×4.18×5=20.9億)で据置き。
- リン独立検証: check:surcharge 不一致133→67(worktree実測)／f-n・cfoの4.5残存ゼロ(intersection空)／2024=3.49(187件)・2025=3.98(334件)不変／tsc・build OK。
- 江田最終GO: 10x修正KEEPで承認(rule#4・既知の明白誤値の是正)。

**PR #222 (squash: 52ab2aa): C-2追補 検出器の燃調除外を文スコープ化＋±レンジ除外追加**
- scripts/check-surcharge-drift.mjs のみ(16/8・記事/data diffゼロ)。燃調除外を±2行窓→文スコープ化、レンジ除外プレフィックスに ±(U+00B1) 追加。
- 効果: cfo:376(2026年度4.5)が不一致に露出＝第1弾の燃調窓マスク漏れを恒久解消(本丸)。cfo:375「±5円」は非出(±除外の証跡)。before→after 不一致133→137／年度不明74→89(過剰マスクの正常解消・燃調レンジ起因の誤増なし)。

**新発見(第3弾へ申し送り)**: #221後の残「2026…4.5」=67ファイル中、a〜e帯17件は検出器の窓外にある試算ブロックで、第1弾(#219 report-onlyスコープ)が拾えなかった既存ドリフト。第3弾スコープ＝o-z 50＋a-e 17 をgrep-zeroで一掃→完了で不一致は誤検出2件(capacity 1.1／lib 16.9)のみ。構造原因は賦課金アンカー(rule a)が±2行窓スコープなこと。

**運用学び**: 検出器の「不一致件数」と grep-zero(全4.5一掃)は別物。窓外の試算ブロックは grep-zero でしか拾えない。量産ドリフト修正は「レポート不一致＋grep-zero」の二段で完全化する。

---

### 2026-06-07-D58: タスクB(C-3)第3弾【最終】(#223) マージ完了 ＝ C-1〜C-3 実質クローズ

**PR #223 (squash: a9286c1): C-3第3弾【最終】o-z50＋a-e17 ドリフト一掃 ＋ 残不一致是正 ＋ 追補**
- grep-zero: 残「2026年度…4.5円/kWh」67ファイル97箇所→4.18確定。検出器の±2行窓外にある試算ブロック（a-e -review の計算ブロック＝第1弾#219の取り残し）も一掃。派生試算・3年累計・5年累計を4.18で電卓再計算。
- 非2026の真ドリフト是正: capacity-cost-impact 2025年度「約3.5→3.98円/kWh」／categoryFaq 2024「3.45→3.49」＋「345→349万円」／capacity-sim「約3.8〜4.0想定→4.18確定」＋「合算約5→約5.3円/kWh」。2012年度=0.22・容量拠出金1.1は正値で不可侵。
- 追補(dc7f032): capacity-cost-impact「約4.0→3.98」（検出器 exact-match 対応・サイト標準表記統一）／★akita・aomori「5年で20億円超→2億円超」（#219取り残しの10倍誤記。1,000万kWh×4.18×5＝2.09億。#221の hokkaido/iwate/miyagi と同型）。
- 72ファイル・109ins/109del（1:1・構造/リンク/metadata不変）。

**リン独立検証**: check:surcharge 不一致 70→3（worktree実測）／repo全体「2026…4.5」＝0（完全一掃）／「5年で20億円超」は chiba/ibaraki（年間1億kWh・年4億×5=20.9億で正）のみ／「年4,000万…5年で20億」型10x＝0／派生再計算 spot電卓多数一致（増分＝(4.18−3.49)×kWh）／tsc・build OK。本番反映: warehouse-electricity-cost-review で4.18確定表示・新試算「2,717万円」・4.5残存ゼロ確認。

**C-1〜C-3 到達点**: SSOT(#216) ＋ 検出器(#217/#222) ＋ 全ドリフト一掃(#219/#221/#223) が完了。賦課金プロース・ドリフトは repo全体ゼロ。check:surcharge の残＝正値の誤検出3件のみ（capacity-sim 1.1=容量拠出金／lib industryOfficePublicArticles 16.9=平均単価／categoryFaq 0.22=2012年度の正値）。

**残③（任意・別micro-PR）**: 検出器に上記3件の誤検出除外を入れ不一致0化 → `--strict` を CI 昇格 → C-1〜C-3 完全クローズ。

**運用学び**:
1. 検出器の「不一致件数」と grep-zero（窓外の計算ブロック）は別物。量産ドリフト修正は「レポート不一致＋grep-zero」の二段で完全化する。
2. 10倍誤記は県別テンプレ由来で帯をまたいで潜在。#221発見後、既済帯(akita/aomori=#219)への遡及点検が必要だった（広域grep監査で捕捉）。今後 県別/区別の5年累計は新規追加時に必ず 年額×5 を電卓検算。
3. 検出器の exact-match は「約4.0」のような正当な丸めも拾う。プロースは確定値そのもの（3.98）で書くのが検出器フレンドリ。

---

### 2026-06-07-D59: ③検出器の誤検出0化＋--strict CIガード新設(#224) マージ ＝ C-1〜C-3 完全クローズ

**PR #224 (squash: 6eca6f6): 検出器0化 ＋ CIガード新設**
- scripts/check-surcharge-drift.mjs（誤検出3件のロジック是正）＋ package.json ＋ .github/workflows/surcharge-guard.yml 新設。3ファイル 40ins/5del・記事/data本体 diffゼロ。
- 是正① YEAR_RE/YEAR_TEST_RE を 2020-39→2010-39: 「2012年度の0.22円/kWh」が後続2024年度へ誤ペア→不一致化していた検出器バグを是正（2012=SSOT0.22で正値化）。
- 是正② 非賦課金ラベルの局所除外（per-price）: 単価の直前15字に「容量拠出金/平均単価/託送料金」→当該単価のみ除外。capacity-sim 1.1・industryOfficePublicArticles 16.9 を除外。同一文の本物ドリフトは巻き込まない（回帰テストで実証）。
- CIガード: .github/workflows/surcharge-guard.yml（リポジトリ初のGH Actions）。src/**・検出器変更PRで `node scripts/check-surcharge-drift.mjs --strict` 実行。check:surcharge:strict を package.json に追加。

**リン独立検証**: check:surcharge 不一致 3→0（worktree）／--strict exit 0／解消は指定3件のみ（0.22/1.1/16.9）・新規不一致ゼロ／年度不明 89→88（reform-timeline 2.95が2019年度ペアでSSOT一致＝正値化）／★回帰テスト「2026年度4.5」注入→--strict exit 1（検出力健在・per-price局所除外が4.5を巻き込まない）／YAML妥当／記事・data本体 diffゼロ。CIガード稼働実証: #224上で surcharge-guard が completed/success(15s)。

**C-1〜C-3 完全クローズ到達**: SSOT(#216) ＋ 検出器(C-2 #217/文スコープ化 #222/0化 #224) ＋ 全ドリフト一掃(a-e #219/f-n #221/o-z+残是正 #223) ＋ CIガード(#224・稼働確認済)。repo全体「2026年度…4.5円/kWh」型ドリフト＝完全ゼロ／check:surcharge 不一致＝0（誤検出も0化・検出力は回帰テストで担保）／以後の同型ドリフトはPRで自動検出。

**残（任意・江田後追い可）**: branch protection で surcharge-guard を Required 化すればマージ前に物理ブロック＝恒久化。stale branch fix/surcharge-budget-and-calc（#211ベース・SSOT逆行リスク）はクローズ推奨で保留中。

**運用学び**:
1. 誤検出の解消は allowlist でなくロジック是正（YEAR_RE網羅・ラベル局所除外）が保守的に正しい。
2. CI gate 導入時は必ず回帰テスト（実ドリフト注入→exit1）で「検出力を弱めていない」ことを実証する。
3. 検出器の YEAR_RE と SSOT収録レンジの不一致は誤検出の温床＝両者（2012-）を一致させる。

**今週(6/3-6/7)累計 11PR 連続クリーンマージ**: #214 GA恒久修正／#215 2026-05号／#216 C-1 SSOT／#217 C-2ガード／#218 B-76②／#219 タスクB第1弾／#220 B-77②／#221 C-3第2弾／#222 検出器文スコープ化／#223 C-3第3弾／#224 検出器0化+CIガード。

---

### 2026-06-08-D60: B-80第2弾 事例8本(#225) マージ ＝ W2量産前倒し 始動

**PR #225 (squash: 49e7912): 事例深耕 case-studies 26→34（代表シナリオ方式・8本）**
- テーマ: 食品加工×コージェネ／化学×自家発電／製紙×バイオマス／繊維×廃熱回収／鉄鋼電炉×需給管理／食品スーパー×冷蔵省エネ／旅館温浴×ヒートポンプ／施設園芸×ヒートポンプ加温。order 27-34。
- 9ファイル（新規8＋articles.ts）・2,241ins／削除0。各46-48K字・H2 11・FAQ8・代表シナリオ13・pps-net/D-1 全8本。既存B-80第1弾と同一規格。
- リン独立検証: 内部href 55パス全照合で**真404ゼロ**（/articles/case-studiesは動的ルートで正当）／**実在企業名ゼロ**（代表シナリオ方式）／check:surcharge:strict **不一致0**（surcharge-guard通過＝CIガード初実戦）／tsc・build OK。記事数 **739→747**。
- 位置づけ: 改訂ロードマップ W2（6/8-14）量産前倒しの第1弾。次バッチ候補: B-79②（電力会社14→）／業種×地域④（23→）／B-82（市区町村15→）。
- 備考: 本番ページのfetchはリン側サンドボックスで2回タイムアウト（当該ドメインへの環境制約）。ビルドで静的プリレンダ検証済みのため反映は伝播待ち。.ai-team配下の未追跡変更は本PRと無関係で working tree に残置（従来どおりローカル作業メモ・未コミット）。

---

### 2026-06-08-D61: B-79第2弾 電力会社8本(#226) マージ ＝ W2初日 量産2バッチ完了

**PR #226 (squash: 3d8df1a): 電力会社別解説 power-utility-guide 15→23（公開情報・中立整理・8本）**
- 対象: 大阪ガス／東邦ガス／西部ガス（ガス系）・出光興産（石油系）・エネット（法人特化）・丸紅新電力／伊藤忠エネクス（商社系）・商社系横断ガイド。order 16-23。
- 9ファイル（新規8＋articles.ts）・5,040ins／削除0。各52-54K字・H2 10・faqItems 8・pps-net各2。既存B-79第1弾と同規格（D-1は当カテゴリ不使用）。
- ★商標・中立性: 正式名称のみ／「特定社の優劣評価は行いません」各本明記／**評価機関名(MSCI/FTSE/S&P)ゼロ**／公開情報のみ・数値捏造ゼロ。
- リン独立検証: 内部href 39パス全照合で**真404ゼロ**（/articles/* ・/api/og/* は動的ルート）／評価機関名ゼロ／中立性OK（「一番安い」1件はFAQ質問文で、回答は「優劣を評価する立場にない・順位づけでなく相見積推奨」と明確に拒否＝模範中立）／check:surcharge:strict **不一致0**（surcharge-guard通過）／tsc・build OK（1,011 static）。記事数 **747→755**。

**W2（6/8-14）初日 進捗**: B-80②（#225・case-studies +8）＋B-79②（#226・power-utility +8）＝量産 **+16（739→755）**。W2目標+40に対し初日で40%。次バッチ候補: 業種×地域④（industry-region 23→）／B-82（by-municipality 15→）。

**.ai-team方針メモ**: `.ai-team`（団のローカル作業メモ＝DECISIONS/ロードマップ/発注プロンプト）はリポジトリにコミットしない運用を継続（公開リポジトリへ内部戦略を出さないため＝意図的）。Claude Codeの「未コミット残置」通知は想定どおりで対応不要。バックアップが必要ならリポジトリ外（非公開）で行う。

---

### 2026-06-09-D62: B-76第3弾 業種×地域8本(#227) マージ ＝ W2 +24到達

**PR #227 (squash: 50d61fb): 業種×地域クロス industry-region 23→31（8本）**
- 福島×電子／山口×化学／大分×半導体／長崎×造船／滋賀×電子／岩手×自動車／福井×繊維眼鏡／徳島×化学LED。order 24-31。東北/中国/九州/関西/北陸/四国に分散。
- 9ファイル（新規8＋articles.ts）・5,925ins／削除0。各65K+字・H2 11・pps-net3・D-1 1・中立10-11。既存B-76と同規格。
- リン独立検証: 内部href 54パス全照合で**真404ゼロ**（/api/og・/articles/industry-region＝動的ルート）／★**5年累計 全24件（8本×3規模）年額×5 電卓一致・10倍誤記ゼロ**／電力エリア書き分け8本とも正エリア（混在ゼロ）／check:surcharge:strict **不一致0**（surcharge-guard通過）／tsc・build OK。記事数 **755→763**。
- ★書式改良: 5年累計を「**▲X円×5年＝Y円**」とインライン計算を明示する書式に。#221/#223の10倍誤記を**フォーマットレベルで構造的に防止**（発注へ「電卓検算」明記の効果）。今後の量産（県別/区別/クロス）はこの書式を標準とする。
- iwate差替: automotive-...-review 非存在 → 実在の auto-parts-...-review へ（先回りリンク禁止の運用どおり・着手前grep照合）。

**W2（6/8-14）進捗**: B-80②(+8)＋B-79②(+8)＋B-76第3弾(+8)＝量産 **+24（739→763）**。W2目標+40に対し**60%**、残り+16。次候補: B-82（by-municipality 15→）。固定: D-2仕様(6/10)・6/14第4回計測。

---

### 2026-06-09-D63: B-82 市区町村8本(#228) マージ ＝ 東京23区完結・W2 +32到達

**PR #228 (squash: 0815673): 市区町村別 by-municipality 15→23（東京23区完結・8本）**
- 残8区: 目黒/杉並/北/荒川/練馬/足立/葛飾/江戸川。order 16-23。**これで東京23区を完全カバー**。
- 9ファイル（新規8＋articles.ts）・5,567ins／削除0。各50K+字・H2 11・faq8・pps1・中立的4。既存区別と同規格・8本均一（江戸川＝サブエージェント停止により直接執筆だが他7区と一致）。
- リン独立検証: href 49パス全照合で**真404ゼロ**／★既存テンプレの壊れリンク（restaurant-review/how-to-choose）を実在先（single-restaurant/how-to-compare）に**差替＝品質改善**／★**5年累計 全24件 年額×5 電卓一致・10倍誤記ゼロ**（新書式）／check:surcharge:strict **不一致0**／tsc・build OK。記事数 **763→771**。

**W2（6/8-14）進捗 +32到達（目標+40の80%）**: 6/8 B-80②+B-79②(+16)、6/9 B-76③+B-82(+16)。残り+8。固定: D-2仕様(6/10)・6/14第4回計測。

**運用メモ（マージ承認フロー・江田提案採用）**: 2ゲート安全チェックが、引用サマリー中の「リンGO→江田最終GO待ち」文言を理由に#228初回マージをブロックした事例（「Goです」と引用の「待ち」が混在）。今後の最終GOは**引用サマリーを外し「#NNN マージOK」と簡潔指示**でスムーズ化。リン側もGO文の🔴待ちマーカーが引用に残らないよう留意する。

---

### 2026-06-10-D64: D-2 Phase1(#229) マージ ＝ シナリオ別シミュレーション公開・機能トラック前倒し

**PR #229 (squash: 5457386): D-2 シナリオ別シミュレーション Phase1（新ページ `/electricity-scenario-simulation`）**
- 新規6ファイルのみ・削除0・既存変更0。scenarioMatrix.ts(4シナリオΔ・出典sourceNote)／scenarioElectricityCalc.ts(D-1再利用＋Δ)／test20件／ScenarioSimulator.tsx／page.tsx／api/scenario-simulation-results/route.ts(graceful)。
- ★D-1エンジン（unitPriceMatrix/industryElectricityCalc/index/types）**完全不変（0行diff）・再利用のみ**（依存方向 lib→app維持）。
- ★**baseline（Δ=0）=D-1完全一致を構造的に保証**（scenarioTotalUnitPrice=base.totalUnitPrice、low/highも丸め前median×倍率でD-1同一アルゴリズム）＋330ケーススナップショットgreen。
- 4シナリオ（標準/上振れ+4.5/構造高止まり+2.1/緩和-2.0）＝加算項へのΔ。賦課金はSSOT基準・**structural Δ賦課金+0.3は「次年度想定・確定値ではない」明示**・プロースに4.5型リテラルなし。
- リン独立検証: D-1エンジン0行diff／baseline=D-1構造保証(精読)／Δ目安レンジ内／check:surcharge:strict不一致0（**surcharge-guardが機能PR上で初実戦・通過**）／href404ゼロ（新API＋/special・/articles動的ルート）／中立(優劣0・disclaimer・想定多数)／tsc・build・test全171 pass。記事数771維持（ツールページ）。

**前倒し**: 仕様(ロードマップ6/10予定)→6/9前倒し、実装(W3 6/15-予定)→6/10前倒し完了。機能トラックが約1週前倒し。

**残（任意・Phase2/運用）**: ①`scenario_simulation_results` DDLをSupabaseに適用（PR本文記載・未適用でもAPI graceful＝計算/表示無影響）②PublicHeader/Footerにツールリンク追加（未実施）③月次(季節)試算・契約メニュー別感応度精緻化（Phase2）④6/14計測でD-1人気業種→Phase1デフォルト最適化／Δ値の公開情報 念押し裏取り（任意）。

---

### 2026-06-10-D65: D-2導線追加(#230) マージ ＝ D-2 Phase1 一式完了（機能＋導線）

**PR #230 (squash: fdfb108): D-2導線追加（フッター/ヘッダ＋D-1/有事特集 相互リンク）**
- 4ファイル・+24/削除0・**全てリンク/導線・数値追加なし**。Footer(D-1計算機+D-2をツール群に)／Header(「シナリオ試算」8→9件・grid折返し吸収)／D-1ページ(→D-2相互＋対の関係1文)／有事特集index(自分ごと化CTA・中立「予測ではない」明記)。
- リン独立検証: 追加href実在(404ゼロ)／check:surcharge:strict不一致0(数値追加なし・88件不変)／tsc・build clean／ヘッダ9件レイアウト崩れなし。
- ★副次改善: D-1計算機もnav未掲載だったため同時に導線追加（ツール発見性向上）。D64残②を解消。

**D-2 Phase1 一式完了**: #229（本体・新ページ/4シナリオ/baseline=D-1一致）＋#230（導線）。機能トラックはW3予定→6/10前倒し完了。
**残（任意）**: scenario_simulation_results DDL適用（Supabase）／Phase2（月次・契約別感応度・対策後トグル・Δ裏取り）／6/14計測でデフォルト最適化。

---

### 2026-06-11-D66: B-76第4弾 業種×地域8本(#231) マージ ＝ W2量産 +40 達成・締め

**PR #231 (squash: f5b391a): 業種×地域クロス industry-region 31→39（8本）**
- 栃木×医療機器／岐阜×陶磁器／石川×機械／新潟×金属加工／和歌山×鉄鋼／島根×特殊鋼／宮崎×食品／千葉×化学。order 32-39。**新業種4（医療機器/陶磁器/機械/金属加工）**・7エリア分散。
- 9ファイル（新規8＋articles.ts）・5,937ins／削除0。各69-76K字・H2 11・pps3+・D-1 1・中立10-17。既存B-76同規格。
- リン独立検証: href54パス**真404ゼロ**／★**5年累計 全24件 年額×5 電卓一致・10倍誤記ゼロ**（新書式）／★**電力エリア書き分け完璧**（各記事 割当エリアのみ・他エリア言及0）／カニバリ意図分離（niigata同県/鉄鋼3県/京葉22回）明記／check:surcharge:strict **不一致0**／tsc・build OK。記事数 **771→779**。

**★W2（6/8-14）量産 +40 達成・締め完了**: B-80②(+8)＋B-79②(+8)＋B-76③(+8)＋B-82(+8)＋B-76④(+8)＝**+40（739→779）**。目標達成。カテゴリ実数: industry-region=39／by-municipality=23（東京23区完結）／case-studies=34／power-utility-guide=23／subsidies=34。
**W2残はゼロ**（機能D-2 Phase1は前倒し完了済）。固定: 6/14第4回計測のみ。次の量産は質シフト判断（記事1,000本 or 登録停滞 or Q3末）まで継続 or DEEP UPDATE/改善#6③へ配分。

---

### 2026-06-11-D67: 宿題クリア — stale branch削除＋branch protection案内

**stale branch `fix/surcharge-budget-and-calc` 削除完了**（D59以降クローズ保留だった#211ベース旧分岐）
- リン精査で独自変更3件すべて main superseded・かつマージは有害と確定: ① unitPriceMatrix手書き4.18 →#216 SSOT(getLatestSurcharge())への**逆行(有害)** ② budget-planning履歴表 → main既にバイト一致(1.40/2023・3.98/2025・3.10・2.58/+184%) ③ test → SSOTドリフトガードで担保済(陳腐化)。
- 関連PRなし。`git push origin --delete`で削除(force pushなし・他ブランチ/main/タグ不可触)。リン独立確認: ls-remote 空・main無傷(f5b391a)。

**branch protection Required化（残・江田の手動操作）**: GitHub Settings→Branches→`main`→「Require status checks to pass before merging」で `surcharge`(surcharge-guardのジョブ)を必須に追加。これで「2026年度4.5」型ドリフトを含むPRはマージ前に物理ブロック＝賦課金ガバナンス恒久化。

**運用学び**: 古い分岐は「マージで逆行する」リスクがある（SSOT化前のハードコードを後から持ち込む）。長期stale branchは内容精査（three-dot/two-dot＋main現値突合）のうえ削除し、放置しない。

---

### 2026-06-12-D68: 季節夏②(#232) マージ ＝ seasonal-strategy 6→14・旧テンプレ是正の起点

**夏季ピーク対策 第2弾8本追加**（業種別夏ピーク5＝小売/冷凍冷蔵/病院/ホテル/飲食 ＋ 契約/気候/市場3＝デマンド見直し/猛暑気候/市場連動リスク）。記事 779→**787**、seasonal-strategy 6→**14**。merge commit `61dd124`(squash)、feature branch削除済・packed-refs.lock除去済。タイムリー性=6-8月の夏ピーク検索需要。
- **★旧テンプレ是正の標準化**: 既存seasonal 6本(2026-05-21作)は pps-net/中立disclaimer/D-1 が未掲載だった。新規8本は **pps-net 各2・中立「推奨しません」9-10箇所・D-1リンク≥3 を上書き適用**＝カテゴリ品質の底上げ起点。方針確立: **旧カテゴリへ新規追加する際は「旧テンプレに合わせる」のではなく現行標準(pps-net/中立/D-1/5年累計新書式)を上書き適用**し、旧記事は別途DEEP UPDATEで追従させる。
- **リン独立検証(全通過)**: href404 **実0**（抽出66パス照合。`/api/og/seasonal-strategy` 1件は動的ルート`[categorySlug]`実在＋articleCategories登録済の**誤検知**＝既存seasonal記事も同一参照）／5年累計 **全14式 Y=X×5 正**（cold-storage退化例「▲1円×5年＝▲5円」→代表シナリオ連動「年▲240万円×5年＝▲1,200万円」に修正確認・10倍誤記ゼロ）／check:surcharge:strict **不一致0・exit0**（913ファイル走査・4.5円混入0）／diff hygiene 9ファイル・**削除0**・+5,485行／order 7-14連番・recommendedReadingOrder反映。
- **残(DEEP UPDATE候補)**: 既存seasonal 6本へのpps-net/中立/D-1補完は別バッチで追従（本PR非含・着手は江田の声かけ待ち）。質シフト先取りの最有力候補。
- **運用学び**: カテゴリ拡張は「旧記事の最低水準に合わせる」と負債が固定化する。新規で現行標準を入れ、旧記事はDEEP UPDATEで引き上げる二段構えが、量産しつつ品質を上げる定石。

---

### 2026-06-12-D69: 既存seasonal 6本 DEEP UPDATE(#233) マージ ＝ seasonal-strategy 全14本 標準統一・質シフト先取り第1弾

**既存seasonal 6本へ pps-net/中立/D-1 を加筆補完**（summer-peak-cfo/demand-response-summer/peak-cut-5/manufacturing-cooling/office-building-peak-cut/datacenter-summer-cooling）。merge commit `e386e28`(squash)。記事総数は787不変（加筆のみ・新規記事なし）。**D68(#232)＋本D69(#233)の2連続で seasonal-strategy 全14本が pps-net/unit・中立明記・D-1リンクの現行標準に統一（リン確認: main で 14/14本充足）**。
- **★加筆専用(additive edit)の作法を確立**: ①既存削除禁止・既存数値不変 ②`</p>`の後に独立`<p>`を挿入する手法で**全6ファイル numstat「11 0」＝削除0行**（既存行を一切改変しない） ③明示addは6 page.tsxのみ・**articles.ts不可触**（更新日フィールド無し＝publishedAt詐称回避・order/featured不変） ④新規数値ゼロ（5年累計等を足さない＝捏造回避・check:surcharge不一致増ゼロ）。
- **リン独立検証(全通過)**: 削除0行(6/6「11 0」)・articles.ts非含・pps 0→2/D-1 0→1/中立 0→9・bytes増加のみ・href実在(/industry-electricity-calculator)・check:surcharge:strict不一致0 exit0・**中立9文は分散配置**(最小行間隔10行＝密集スパムなし)・tsc/build通過。
- **既知の軽微トレードオフ**: 中立文は`text-xs`独立脚注で一部表現が反復気味（「既存行を改変しない」安全制約の帰結＝本文文末への織り込みは不可）。標準(中立8-11・分散)は充足。将来フルリライト時に本文へ溶け込ませる余地あり。
- **横展開候補(残・声かけ待ち)**: 他の旧テンプレ・カテゴリ（区別カテゴリ等）も pps-net/中立が薄い可能性。必要なら同じ加筆方式(deletions=0)でDEEP UPDATE発注可。
- **運用学び**: DEEP UPDATEは「deletions=0」を契約にすると安全性が跳ね上がる（既存破壊リスクを行レベルで排除・レビューも numstat 一発）。代償は表現の自然さ（独立脚注化）だが、量産フェーズの遡及標準化には十分なコスパ。

---

### 2026-06-13-D70: energy-equipment 16本 DEEP UPDATE(#234) マージ ＝ 横展開①完了・サイト全体の標準化負債を可視化

**energy-equipment 16本へ pps-net/中立(設備含む)/D-1 を加筆補完**（16-agent fan-out実装）。merge commit `c84642e`(squash)。記事総数787不変（加筆のみ）。seasonal(#232/#233)に続く**DEEP UPDATE横展開①が完了**。負債前進: pps欠落 559→543 / 中立欠落 695→679。
- **★6/13 全784本スキャンでサイト全体の標準化負債を可視化**: **pps-net欠落559（充足225＝29%）／中立欠落695（充足89＝11%）**。新標準が入っているのは直近バッチ（seasonal完全・industry-region/case-studies/power-utility一部）のみで、旧カテゴリ群はほぼ全面未対応＝**ルール#5(中立)/#7(pps-net必須)への実質コンプラ負債**。大物（欠落計）: industry-guide(103)/by-region(58)/review-points(46)/price-increase(34)/price-trends(27)/plan-types(25)/power-procurement(25)/basic(23)/risk-scenarios(22)…。数週間規模のプログラム。
- **設備中立の拡張**: energy-equipment向けに中立文を「特定の電力会社・契約形態・**設備**を推奨するものではありません」へ拡張（蓄電池/太陽光の製品推奨に見えないため）。語尾「推奨するものではありません」維持で検出器互換。128/128が設備込み。
- **リン独立検証(全通過・agent自己申告と独立)**: 全16本 numstat「11 0」＝**削除0行**・articles.ts非含・page.tsx以外混入0／増分 pps0→2・D1 0→1・中立0→8（合計32/16/128）／設備128/128／加筆行に新規数値0／追加内部リンクは/industry-electricity-calculatorのみ×16(実在)／check:surcharge:strict不一致0 exit0／中立分散(密集なし)／tsc・build green。
- **既知cosmetic(GO・再スピン不要)**: battery-electricity-cost-benefit のD-1 RelatedLinksエントリが1行形式（周囲は複数行）。有効JSX・ビルド通過・内容正確で機能影響ゼロ。再スピンのコスト＞見た目の利得のためGO。
- **★横展開の優先順位は6/14第4回GSC計測で決定**（計測準備doc=MEASUREMENT_4TH_PREP_2026-06-14のパートDに「負債×トラフィックで優先順位付け」を組込み済）。高表示カテゴリ（industry-guide/by-region等）から潰すと相互送客・中立の効果が最大化。
- **運用学び**: 標準化負債は「①全件スキャンで可視化 → ②トラフィック順に潰す」。闇雲な横展開でなく、読まれるページから当てる。負債の数値（559/695）を持っておくと進捗が定量化できる。

---

### 2026-06-14-D71: 第4回計測（軽量パルス）＋サイトマップ運用の構造是正

**6/14 第4回計測（GSC実データ・GA4 6/1-14）を実施。並行してサイトマップ運用の重大欠陥を発見・是正。** 申し送り通りフル計測でなく軽量パルス＋#6②/#6③＋負債優先度の位置づけ。

- **健全パルス＝良好**: 登録 534→**644(+110)**（GSC Coverage 6/5反映時点）・クリック 直近7日 **126.9/日**(28日平均90.9・前回84.4)・表示 28日平均3,761(横ばい)/直近7日4,936(上昇)。索引率 47.7%→**53.1%**。**登録頭打ちの兆候なし＝量産継続でGO**。デバイスはPC優勢(クリック2,072 vs モバイル458)。
- **#6②転換＝判定保留（評価尚早）**: 業種別レビューwatch25本のうち転換は1本(convenience-store)のみ。ただしGSC Coverageの反映が**6/5止まり**（#6②マージ6/2の3日後まで）でラグ7-14日に未達。転換1本も#6②効果か自然indexか判別不能。**7/5フル計測で再判定**（#6②とサイトマップ復旧の効果が混在する点に留意）。
- **★未登録数の実態を補正**: 「クロール済-未登録552」のうち**284本は `/_next/static/chunks/*.js`（JSアセット＝ページでないノイズ）**。実ページの未登録は**268本**（うち表示ありは80本・地域別-business-electricity-costが上位を席巻）。JSノイズ除外で実ページ索引率は概算**約70%**＝53%は過小評価だった。「**検出-未登録=0**」＝発見漏れはゼロ。robots.txt経由でGoogleは全URL発見済み。
- **★サイトマップ運用の重大欠陥を発見・是正**: GSCで5/18送信の **`/sitamap.xml`（綴り誤り）** が「取得できませんでした・検出0」のまま**約4週間放置**。正しい `/sitemap.xml` は6/14にKENJIが手動送信し**成功・検出1,003**。原因＝手動プッシュ運用＋監視欠如。コード側(sitemap.ts/robots.ts)は4/25以降正常で、生成・配信に問題なし。**Google sitemap pingは2023廃止・1回登録すれば自動再クロール**のため継続プッシュは本来不要＝本質的課題は「壊れても気づけない監視欠如」。
- **GA計測トラブルの記憶確定（KENJI質問）**: **5/24 12:03〜5/25 11:56 約24時間GA全停止**（#186マージ→#190 Revert）でデータ消失＝KENJI記憶の該当期間。着地page_view過少計上(半減)は**6/3 #214(7dbff42)で恒久修正マージ済**(Option A onLoad)。現GA4(6/1-14)全体views/users=1.43x・322/624が<1.1xだが検索直帰LP要因混在のため断定せずDebugViewで確認推奨。初期〜3/31は身内汚染でベースライン不可(R-01)。
- **施策実装＝#235マージ・自動監視が実稼働**: 「GSC自動submit＋死活/綴り監視＋失敗通知」をGitHub Actionsで実装（scripts/submit-sitemap.mjs＋.github/workflows/sitemap-submit.yml）。**リン独立検証：three-dot diff(新規2ファイル・削除0・package無変更)・実鍵リテラル非混入・ローカルモックで死活/綴り検知/異常系exit1/グレースフルスキップexit0/不正JSON鍵のcanary非出力を実機再現＝全通過**→GO→KENJIマージ(squash `ea93350`)。push:main で初稼働グリーン(28秒)・CI実ログで**グレースフルスキップ実証(loc1003≥800・綴りOK・submitスキップ・exit0)**。手動プッシュ廃止＋「壊れたら即GitHub通知」構造を確立。KENJI残＝Secrets(GSC_SA_KEY/GSC_SITE_URL)登録→workflow_dispatchでsubmit有効化。
- **発注書ストック（リン作成済）**: ①**サイトマップ最適化**(sitemap.tsプロモ枠を旧25本→6/14未登録×表示40本へ刷新＋動的6シリーズのlastmod過剰更新是正)＝SITEMAP_OPTIMIZATION_ORDER・**未発注** ②**@v5移行＝#236マージ完了(`0dd5198`)**＝ACTIONS_V5_MIGRATION_ORDER。push:mainでsitemap-submitが@v5/Node24で実緑・**Node20非推奨warning消滅**を確認。両workflow Node24対応完了(6/16期限に2日余裕)。リン独立検証＝diff6行のみ・**surcharge-guard非破壊**(drift不一致0 exit0・runコマンド/paths不変)・全@v5/node22で全通過。surcharge-guardの@v5実緑は次にsrc/scripts変更PRで自動確認。
- **運用学び**: ①GSCの未登録数はJSアセットでノイズ水増しされる→実ページで母数を正してから判断する ②手動運用は人的ミス(綴り)＋監視欠如で長期事故化(4週間)→自動監視で構造的に防ぐ ③サイトマップは1回登録で自動再クロール(ping廃止)＝継続プッシュ不要・監視が本命 ④CI基盤の変更(Node24強制化)はランナー警告を見逃さず期限管理する。

---

### 2026-06-15-D72: サイトマップ最適化#237マージ＝運用是正3点完了／working tree破損の検証教訓

**D71発注書ストック①を消化。サイトマップ最適化(#237)マージ完了**(`1c463ad`)。プロモ枠を旧25本(B-38a・4月)→6/14未登録×表示あり上位40本へ刷新(priority0.9/weekly)＋動的7系統(emergency/oil/gas/materials/food/fx/industry)のlastmodを`new Date()`→git log由来の固定日付定数(`seriesLastmod()`)へ是正。これで**6/14-15のサイトマップ運用是正が3点完了**: #235(自動submit＋死活/綴り監視＋失敗通知)・#236(@v5/Node24)・#237(プロモ刷新＋lastmod是正)。「手動プッシュ＋無監視」から「自動submit＋自己点検＋鮮度シグナル正常化」へ。
- **リン独立検証(全通過・blobベース)**: 8ファイル(記事/articles.ts非含)・プロモ40本実在404ゼロ・lastmod全7系統が過去日付(未来/捏造なし)・new Date残存はフォールバック2のみ・surcharge不一致0 exit0・URL数1003維持。origin/main反映確認(promo40/seriesLastmod14/記事787)。
- **★検証教訓(重要・再発防止)**: 当初tscで7件のTS1005構文エラーを検出しNO-GO寸前→調査で**サンドボックスのworking tree破損(FUSE同期不良・ops-notes§1)**が原因と判明(変更8ファイルがtruncated・gas 102→91行)。PR blob自体は完全で、blob復元後tscで構文エラー消滅。**PR検証はworking treeのtsc/grepでなく `git show <ref>:<path>` のblobベースで行う**(working tree破損に騙されない)。tscフル完走はサンドボックス45秒上限でtimeout＝独立exit0までは取れず、構文解消＋blob型整合＋ClaudeCodeローカルexit0で代替判定。
- **効果測定**: sitemap復旧(6/14)＋プロモ/lastmod是正(6/15)の相乗。7-14日でCoverage反映見込み。7/5フル計測で#6②(D-1被リンク)と併せて判定(効果混在に留意)。
- **残**: GSC submit有効化(段階A〜・KENJI手動・サービスアカウント/Secrets)／DEEP UPDATE横展開②=by-region(対象確定済・発注書未作成)／誤`/sitamap.xml`のGSC削除(任意)。

---

### 2026-06-15-D73: DEEP UPDATE横展開②a（by-region 16本）マージ＝地域別カテゴリ標準化の開始

**by-region 完全未対応16本に標準フル補完(#238マージ `cb0aa91`)**。fukushima/ibaraki/akita/saitama/nagano/chiba/iwate/tokyo/osaka/wakayama/toyama/hyogo/yamanashi/kyoto/gifu/mie＝6/14高表示×完全未対応(pps0/中立0/D1 0)の都道府県。各**29行追加/0削除**でpps-net×2・中立×8・D-1×1を加筆。
- **★by-region 80本の現状把握(blobスキャン)**: ①完全未対応 約40(県＋region-*10) ②**pps手厚い群17**(中四国九州・pps11=pps-net単価を記事骨格に据えた**理想テンプレ**・中立/D1のみ欠落＝過剰でない) ③東京23区23(部分対応pps1)。本②aは①の高表示16本。
- **リン独立検証(全パス・★blobベース)**: 16ファイルのみ・articles.ts非含・削除0(464ins)・pps0→2/中立0→8/D1 0→1が全16本・href実在・4.5混入なし・中立分散(行414-668)・tsc構文エラーなし(blob復元)。D72教訓を実践しworking tree破損を回避。江田最終GO→マージ。
- **横展開実績**: ①energy-equipment16(#234)＋②a by-region16(#238)＝**32本標準化**(seasonal14含め計46本)。負債概算前進: pps543→527/中立679→663。
- **後続(発注書に計画済)**: ②b完全未対応の残約24(standardフル)・②c東京23区23(pps1→2/中立→8/D1→1の底上げ)・②d pps手厚い群17(**中立8+D1 1のみ・pps追加せず**)。マージ後トラフィックで順序決定。
- **運用学び**: カテゴリ標準化は「全件blobスキャン→現状パターン分類→均一な小バッチ(16前後)に分割→1本gold standard化→複製→中央再検証」で回る。80本一括は無謀。パターン別(完全未対応/手厚い群/部分対応)で補完内容が違う点を見極めてバッチ設計する。

---

### 6/15セッション サマリ（D72-D73）
本日マージ2本: **#237 サイトマップ最適化**(プロモ40刷新＋lastmod是正・D72)＋**#238 by-region②a**(地域別16本標準化・D73)。6/14(#235自動submit/監視・#236 @v5)と合わせ、サイトマップ運用是正が完了し、地域別カテゴリ標準化が始動。検証手法の教訓(working tree破損→blobベース)を確立。残: GSC submit有効化(KENJI手動・段階A〜)／後続DEEP UPDATEバッチ②b/c/d／誤sitamap.xml削除(任意)。次回フル計測7/5。

---

### 2026-06-15-D74: DEEP UPDATE横展開②b（by-region残24本）マージ＝完全未対応群40本完結

**by-region完全未対応の残24本(県14＋電力エリア10)に標準フル補完(#239マージ `6a4caf0`)**。720行追加/0削除。②a16＋②b24＝**by-region完全未対応群40本が完結**。
- region系10本はprefecture(H2 11均一)と構造が異なる(H2 9-10・データ駆動セクション)ため専用レシピ＋region-kansai gold standardで対応。中立8は本文段落末も活用し密集回避(最小行間隔≥11)。pps脚注はsourcesItems無し3本(chubu/hokkaido/kyushu)を脚注2本で対応。
- **リン独立検証(全8項目PASS・blobベース)**: 24ファイルのみ・削除0(720ins)・全24本2/8/1・href実在・articles.ts不変・4.5混入なし・中立分散・#239対象24本のtsc構文エラー0。
- **★tsc切り分け再演**: tscが16件エラー→`comm`照合で全て②a(#238)分のworking tree破損(truncation)・#239対象は0件と確定。working tree破損に騙されずblobベースで判定(D72教訓の実践)。git index自体もcorrupt化したがgit show/logは動作し検証続行可。
- **横展開実績**: energy16＋seasonal14＋by-region40＝**70本標準化**。
- **残**: ②c東京23区23本(pps1→2・中立→8・D1→1の底上げ)／②d pps手厚い群17本(中立8+D1 1のみ・pps追加せず)。

---

### 2026-06-16-D75: DEEP UPDATE横展開②c（東京23区23本）マージ＝部分対応の底上げ

**東京23区23本をpps2/中立8/D1 1に底上げ(#240マージ `71e627e`)**。+537/0削除。部分対応(全区pps1・α8区中立4-5/D1 1・β15区中立0/D1 0)から目標2/8/1へ不足分のみ加筆。
- **★②a/②bと異なる「不足分加筆」方式**: α群は既存中立4-5を保持したまま8へ+3〜4、β群は0→8。pps全区+1(脚注方式・Sources重複回避)。D1はβ群のみ+1。
- **リン独立検証(全8項目PASS・blobベース・最終値判定)**: 23ファイルのみ・削除0(537ins)・**after全23区2/8/1到達**・href実在・articles.ts不変・4.5なし・中立分散(既存+追加の混在も密集なし)・tscエラー総数0(今回はworking tree破損なし)。
- **横展開実績**: energy16＋seasonal14＋by-region63(②a16+②b24+②c23)＝**93本標準化**。
- **運用学び**: 部分対応カテゴリは「現状をgrep -cで分類→目標値への不足分のみ加筆→最終値で検証(差分でなく)」。既存中立を壊さず8に揃える＝additive editの応用。EOLのCRLF/LFノイズはマージに無害(内容差分ゼロ)。
- **残**: ②d pps手厚い群17本(中四国九州・全17本pps11/中立0/D1 0・H2 12均一)＝中立8+D1 1のみ追加(pps11は維持・触らない)。

---

### 2026-06-16-D76: DEEP UPDATE横展開②d（pps手厚い群17本）マージ＝by-region 80本完全標準化🎉

**pps手厚い群17本(中四国九州)に中立8+D1 1のみ補完(#241マージ `2a485e7`)**。+425/0削除。pps11(分析骨格)は維持・追加なし。
- **リン独立検証(全8項目PASS・blobベース)**: 17ファイルのみ・削除0(425ins)・after全17本pps11(不変)/中立8/D1 1・**追加行のpps-net出現0(過剰追加なし)**・href実在・articles.ts不変・4.5なし・中立分散(pps単価セクション干渉なし)・#241対象17本のtscエラー0(comm切り分け・他23は別バッチのworking tree破損)。
- **★by-region 80本 完全標準化完了**: ②a16(#238)+②b24(#239)+②c23(#240)+②d17(#241)=80本にpps-net/中立/D-1が行き渡り、地域別カテゴリの標準化負債が解消。
- **横展開実績**: energy16(#234)＋seasonal14(#232/#233)＋by-region80＝**110本標準化**。
- **次の負債大物(残)**: industry-guide(業種別レビュー103・最大)／review-points46／price-increase34／price-trends27／plan-types25／power-procurement25／basic23／risk-scenarios22。横展開③はトラフィック×負債で対象選定。
- **残タスク**: GSC submit有効化(KENJI手動・段階A〜未着手)／誤sitamap.xml削除(任意)／横展開③／7/5フル計測。

---

### 6/16セッション サマリ（D75-D76）
本日マージ2本: #240 ②c東京23区23本(部分対応の底上げ)＋#241 ②d pps手厚い群17本(pps維持・中立D1のみ)＝**by-region 80本完全標準化🎉**。横展開累計110本。検証は一貫blobベース(working tree破損・git index corruptを回避)。残: GSC submit有効化／横展開③(industry-guide最大)／誤sitamap削除。次回フル計測7/5。

---

## 2026-07-01 訂正: Batch B第2弾は完了済み（申し送りメモ誤り）
- 誤: 申し送り「Batch B第2弾(B-79/82/77/65b)=未着手」
- 正: 実repo/git照合の結果、32本は6月中旬merge済み・稼働中
  （補助金33 / 電力会社別23 / 東京23区23=完結 / 夏ピーク13）
- 含意: 7月の新規発注は月次のみ（2026-06未作成=要確認・2026-07）。
  量産第3弾は7/5索引判断後に再開検討。7月主戦場=既存修正(TOP30/DEEP UPDATE/fix②b)＋観測。
- 詳細: .ai-team/JULY_2026_DAILY_TODO.md 冒頭訂正

---

## 2026-07-04 戦略転換: 撒き餌（コンテンツスケール）確定
- ゴール=問い合わせ数／KPI=索引される良質ページの絶対数×CV（索引率%は診断値へ格下げ）／CRO凍結／量産週8-16本再開。
- 旧ROADMAP（索引優先・量産停止）とJULY_2026_DAILY_TODOを上書き廃止。ROADMAP_2026Q3Q4_WEEKLY.mdは撒き餌版に置換済み。
- 正典: .ai-team/TEAM_DISCUSSION_2026-07-04_SEEDING_STRATEGY.md

### 7/5-7/6セッション サマリ
- #281 電力会社別第3弾8本(23→31・Looop受付非断定/九電ネクスト承継/エバーグリーン体制の実在調査反映)。
- #282 補助金第4弾4本+事例第3弾4本(第5回計測の芽吹く型追従。C類型廃止・ものづくり統合の2026再編を正確反映)。
- 第5回計測: 3か月クリック+24.9%・6月量産の87-100%がGSC出現=索引問題は時間差解消・芽吹く型=補助金>事例>電力会社別、クロス/市区町村/CFOは弱。
- ★運用教訓（恒久ルール・6/16 blobベース教訓の再発防止）: リン(Cowork)のソース照合は git show <ref>: 直読みのみ。作業ツリー直読み禁止（7/5、汚れた作業ツリーを読み「第2弾6本登録漏れ」と誤判定→発注に不要タスク混入。Windows側の照合で捕捉・実害なし）。

---

## 2026-07-08〜07-18 実績サマリ（撒き餌・加速モード）
- 新規70本到達（月計58を7/16超過）: B-83エリア推移10エリア完結(#284,#289,#294)／月次2026-06号(#285)／事例第4・5弾16本(#288,#291)／補助金第5・6弾14本+SII設備2+V2H(#289,#292)／電力会社別第4弾+テプコCS休止補正(#294)。
- 既存系: 土壌整備累計38本(70被リンク超)・ハブ28カテゴリintro強化・月次1-6月号の全データ確定値化(#286,#293)。
- 7/12 加速モード決定（江田GO・待機日廃止・週16-24本）。高需要単独16本の計画は既存約50本飽和の判明により実証追従（事例/補助金/個社）へ変更。
- データ品質の重要対応: (1)月次号5本の速報推計残存を検知→電力取引報確定値へ全面更新・出典を「電力取引報」に訂正 (2)4月分確定値を公表当日(7/17)反映 (3)05号JEPX表を月中速報→月間確定値化・沖縄行（JEPX対象外）の誤り解消。
- 実在調査の峻別実績: テプコカスタマーサービス=2024年4月から電力販売休止（既存記述を補正）／九電ネクスト=高圧特高は市場連動プランのみ提案（明記して記事化）／ものづくり補助金=統合改組・氷蓄熱=制度未確認（記事化回避）。

### 運用教訓（恒久ルール追記）
- 土壌整備の対象選定時はrobots(noindex)を除外する（B-50cのnoindex 11件をCFO系で誤選定→10本中5本が索引化効果なし。被リンク自体は無害）。
- 月中速報値を前年同月比較に使わない（JEPX表は月間確定値のみ。5/12時点集計の乖離が実例）。
- 条件付きリンGOは条件の全充足をリン再確認後に江田GO（#286で1条件未反映のままマージされた再発防止）。
- 発注文に「再フォーマット禁止（変更行のみ）」を標準記載（Win環境Edit→CRLF全文化の対策込み）。
- リンのgit読みはマウントキャッシュの破損ビューが間欠発生し得る→bash環境再起動で解消・実体はWindows側で確認。
---

## 2026-07-19〜07-25 実績サマリ（サイト健全性・リンク実需）
- 全サイト内部リンク監査（880ルート・19,815リンク）→404候補65検出→#296(47件是正)・#297(保留18是正)で内部404ゼロ達成。
- #298: リンク実需7本新設（scope3/オンサイトPPA/ピークデマンド管理/農業・畜産・蒸留所・商業施設review）＋退避リンク24件復元＋監査スクリプトをscripts/check-links.mjsへ正式化（旧版は抽出漏れ欠陥）。7月新規77本。
- 7月号は8/1-2公開の完結型に決定（6月号方式・月中速報を使わない）。7月号先行データはリン収集済み（燃調7・8月分10社/支援開始/JEPX途中経過）。
- 教訓追記: 土壌整備対象選定時のnoindex除外は7/18記載済み。設備用語集はglossaryハブ重複回避のため未作成（8月在庫）。GX炭素賦課金記事も8月在庫（gx-electricity-surcharge-impactリンクの再張替え候補）。
---

## 2026-07-30 第6回計測（月次topline）と8月計画決定
- 7月成績: 流入+46.4%(28日クリック5,415)・順位7.7・新規77本・内部404ゼロ。型の勝者=エリア推移(10.5クリック/本)。
- 重要発見: contactファネルの実態（サイト内フォーム不在・外部送客・カード可視→クリック0.28%がボトルネック・cta_click+74%は回遊指標でcontact導線とは別ファネル）。
- 決定: ①contact構造対応をCRO凍結の例外（構造欠陥修正）として8月第1週に1PR実施 ②8月は週8-16本・勝ち型追従 ③真のCV=外部フォーム受信数の月次確認をtopline定例化 ④索引指標は「28日クリック獲得ページ数」を新標準に（今回550）。
---

## 2026-08-04 contact構造対応(#303)＋旧号出典整備・メタ改善(#304)
- #303: 記事中間インライン相談導線（TOC直下＋RelatedLinks直上・和集合97.1%カバー・cta_from=mid-article-toc/mid-article-related）＋カード条件4項目常時表示＋/contact主従交換。返信目安は実運用に合わせ「3営業日」へ全統一（江田決定8/4・836ページに載る約束は実態基準の原則）。効果判定=8/31第7回topline（contact_cta_click・cta_from内訳）。
- #304: 旧号「新電力ネット」42→12（(b)参考案内2＋(c)解説引用10の維持は正）。05号は公表待ち型維持（電力取引報への誤帰属禁止をコード内コメント化）。10〜12号はレンジ維持＋確定値併記、01〜04号はラベルのみ修正（数値は#286反映済みで一致確認）。メタ改善12ページ（本文/H1不変・title一意・誇大語除去）。
- 積み残し: /municipality-long-term-contract「債務負担行為と長期継続契約の違い」の本文記述ゼロ（120表示・6.9位）→本文改修として次発注候補。H1とtitleの乖離2ページは許容（本文を触る機会に整えれば可）。
- 江田さん宿題（継続）: GA4カスタムディメンションcta_from登録（未登録だと内訳集計不可）・外部フォーム7月受信件数の確認。
---

## 2026-08-05 補助金第3弾(#305)＋municipality本文改修／真のCVベースライン判明
- #305: 政令市補助金 新規5本（横浜/川崎/北九州/堺/熊本・order61-65）＋既存3本status更新（名古屋=補欠受付・札幌=予算3億追記・仙台=省エネ枠終了）。発注8本中3本が第1-2弾で既存と判明し新規→更新へ切替（Windows検知・カニバリ防止として正）。広島市は市直営R8未実施→堺へ差替え。北九州は単価非断定・公募案内誘導。municipality-long-term-contractに「債務負担行為と長期継続契約の違い」H2＋5点比較表＋出典5件を追加しtitle/H1へ「違い」反映（120表示6.9位のギャップ是正）。
- 真のCV初観測: 外部フォーム問い合わせ=週2-3件（江田報告8/5・月8-13件相当）。#303ファネル改善の効果判定ベースラインとして第7回topline(8/31)に組込む。
- 教訓: 新規テーマの事前カバレッジ確認はカテゴリ全slug列挙で行う（slug命名パターンの仮定で絞ると第1-2弾の別命名を取りこぼす）。
- 第4弾候補メモ: 相模原・静岡・浜松・岡山（新潟は市独自制度確認不可・広島市は市直営再開待ち）。
---

## 2026-08-06 by-region強化第1弾(#306・W2項目の前倒し)
- #306: 県ページ強化8県（栃木/静岡/茨城/京都/奈良/和歌山/島根/埼玉）。8/4クエリ監査の「県名×電気代クエリが7〜20位CTR0%で埋没」への対応（前倒しは江田決定8/6）。新H2は県別統計を創作せず「全国4区分確定値（電力取引報2026年4月分）＋エリア要因の読み方」型に固定。title刷新（平均・相場/比較の狙い語・8本一意）・articles.tsの「完全ガイド」→「ガイド」8件・エリア別推移記事/by-area/benchmarkリンク追加。GSC実測で8県とも県ページ自身がランクすることを事前確認済み。
- 裁定: ①TOCアンカーidシフトは受容（1つ分・実害小。見出し由来の安定id化は将来改善候補） ②by-industry動的テンプレとsupermarket-large-scaleのtitle重複（main既存）はW3ハイジーン候補 ③H1の「完全ガイド」は第2弾（W3・三重/石川/岡山/山梨/富山/香川/長野/福島）で第1弾8ページ分も含め統一。
- 効果判定: 8/31第7回topline（対象8ページのクエリ別順位・CTR・クリック）。
---

## 2026-08-07 出典ドメイン移行・補助金第4弾・品質ルール明文化（4PR）
- #307: 電力・ガス取引監視等委員会のドメイン移行（emsc.meti.go.jp→egc.meti.go.jp・旧はDNS解決不能）に伴い出典URL127箇所を一括是正。★今後の電力取引報の定点観測は https://www.egc.meti.go.jp/info/business/report/results.html で行う。なお同サイトは既定UAだと403（WAF）・ブラウザUAで200。
- 電力取引報の公表状況（8/7確認）: 最新は令和8年4月分（7/17公表）。5月分は未公表で、公表実績（1月分→4/15・2月分→5/20・3月分→6/15・4月分→7/17）から8月中旬見込み。W2で監視し公表後に各号へ確定値反映。
- #308: 補助金自治体第4弾4本（相模原/岡山/新潟/静岡・order66-69）。★静岡は「市独自の直接補助が確認できない」ことを固有価値にする新パターン（市3制度＋県制度の使い分けを整理）。事前のカテゴリ全slug列挙により今回は重複ゼロ（8/5の教訓が機能）。
- #309: 投資回収・切替判断の断定表現を緩和（残存4箇所）。#308の是正8件と合わせ、「SII補助1/2で回収可能」を5本で統一。
- #310: 時限切れ表現の是正3ページ。★さいたま市の「締切間近」17箇所は7/24満了済みで既に誤情報だった（本番確認で発見）。新潟の「残り約1週間」12箇所も削除。千葉は残数が公表値だったため公表日を添えて保持（テンプレより実態を優先＝正しい判断）。
- 恒久ルール .ai-team/QUALITY_RULES.md を新設: ①相対時間表現の禁止（絶対日付＋「◯年◯月◯日時点」）②残数・執行率は公表値＋公表日のみ ③結果を約束する断定の禁止 ④未公表の終了・再開は断定しない ⑤検出は語尾正規表現でなく該当語の全件抽出＋文脈分類（体言止めの取りこぼし防止）。
- 教訓: 発注文に相対時間表現（残り約1週間）を書いたことが本文に転写された。★発注文自体もQUALITY_RULESに従う。発注文の記号（★）が本文へ混入する事象も確認（新潟6箇所を除去。岡山1・静岡1は強調として機能するため許容）。
- W1（8/3-9）実績: 新規9本（補助金第3弾5＋第4弾4）＋既存強化・是正6PR（#303/#304/#306/#307/#309/#310）。
---

## 2026-08-08 KWギャップ分析→1kWh単価クラスタ参入・取りこぼし回収第2弾（#311/#312）
- 江田さん提供のKW調査（近藤さん7/30・ラッコ/DataForSEO）とGSC実測・articles.ts全870本を突合し、.ai-team/KEYWORD_STRATEGY_SWITCH_CORPORATE_2026-08-08.md を作成。要点3つ: ①「法人電気代」の権威は既に確立（AI Overview引用元・pps-net絶対2位）②月間約10,000回の「1kWh単価」クラスタにページゼロ＝最大の空白 ③「表示あるがクリック0」133件の回収が新規より高ROI。
- ★方針決定（江田GO 8/8）: BtoC乗り換え系（電気会社 乗り換え2,400等・合計約8,000回/月）は追わない（相談CVにつながらず主題が濁るため）。ランキング記事も中立方針により作らない（代替は「選定軸」で受ける）。系統用蓄電池・蓄電所（8,100/2,900）はsimulatorでは追わずpps-net側の領域として整理（電気代文脈の接点記事のみ維持）。
- ★狙うのは「BtoB意図×高CPC×自社データ優位」: 契約電力$13.06/契約電力とは$13.08/店舗 電気 契約$13.65/法人 電力会社 比較$19.05/高圧電力$8.16。契約電力とは（590回）はページがあるのにGSC出現ゼロ＝機会損失最大。
- #311: 1kWh単価クラスタ新規2本（electricity-unit-price-per-kwh／factory-electricity-unit-price-per-kwh・basicカテゴリ order28-29）。県別・家庭平均などの統計は創作せず、電力取引報の4区分確定値＋構造説明で構成。
- ★電力取引報「販売額」の定義を一次資料（記載要領 令和8年6月改定 https://www.egc.meti.go.jp/info/business/report/pdf/2606_procedure.pdf ）で確定: 含める=基本料金・電力量料金・燃料費調整額／含めない=消費税・再エネ賦課金・延滞金・契約事務手数料／最終保障供給と離島供給は集計対象外／集計期間は暦月ベースと検針期間ベースの両方が許容（公表PDF※2に「大宗の企業は検針日までの実績を報告」）／割引の反映は明示なし。単価の算出方法（販売額÷販売電力量）自体もPDF表1・表8で検算一致（456,804,189千円÷21,376,466MWh=21.37円/kWh）。
- ★上記により、既存の定型文「販売額÷販売電力量・全国計・検針期間ベース」はやや過剰特定。W2の電力取引報5月分反映と同時に月次全号へ統一文言を展開する（今回は2ページのみ変えると不統一になるため見送り）。
- #312: 取りこぼし回収第2弾9ページ（メタのみ・本文/H1不変）。最大案件「電力切り替え 戦略」602表示は#304で対応済みと判明（リンの未対応リストが誤り・効果は8/31に判定）。
- 次発注候補（証跡あり）: ①容量拠出金の統合（104表示が8ページ分散・定義ページ74.6位で確認手順ページが最上位という逆転→カニバリ整理と受け皿明確化）②倉庫×太陽光発電の受け皿新設 ③by-industry動的テンプレとsupermarket-large-scaleのpageTitle重複（W3ハイジーン）。
- 教訓: titleに書く語は本文で裏取りする（#312でkVA「換算」が本文0回→「力率との関係」へ変更）。メタで動かせない案件（複数ページ分散）は構造整理として切り分ける。
---

## 2026-08-09 高CPC語の既存強化（#313）とW1（8/3-9）着地
- ★計画変更: 当初は「1kWh単価クラスタ残り2本＋選定軸1本」の新規3本を予定していたが、カニバリ事前確認により既存強化へ変更。office-electricity-cost-benchmark（オフィスの電気代相場）と sme-electricity-provider-comparison（中小企業向け電力会社の選び方｜比較で見るべき5項目）が既に存在し、新規を作れば共倒れになるため。使用量別早見表は狙いクエリが200kWh級＝家庭スケールでBtoC寄りのため8/8方針により不採用。
- #313: 契約電力とは主軸のtitle変更（contract-demand-what-is-it）／high-voltage-electricity-pricingのdescriptionで#312ページとの棲み分け明記／sme-electricity-provider-comparisonに新H2「ランキングで電力会社を選べない理由」（中立方針を守ったままランキング需要の受け皿を作る・特定事業者や媒体の名指しなし）／office-electricity-cost-benchmarkに新H2「オフィスの電気代 1kWhあたりの単価の目安」（4区分確定値＋#311への導線）。
- ★実測で発注の前提が3点覆った（Windowsの事前確認による）: ①「契約電力とは」はGSC出現ゼロではなく7表示16.7位 ②contract-demand-what-is-itは「デマンド 契約電力 違い」2.9位7クリック等、デマンド意図で116表示10クリックを稼いでおり、titleからデマンドを外していれば機能中の順位を壊すところだった ③「高圧電力」は対象ページが未ランク（ランクは中電ミライズページ12.0位）のため深追いせずdescriptionのみ。
- ★恒久ルール追加: 既存ページのメタを変更する前に、そのページが現に稼いでいるクエリをGSCで実測し、稼働中の意図を壊さないことを確認する（「取りこぼし」だけを見て判断しない）。QUALITY_RULESの検出手法の節に準じ、次回のルール更新時に明文化する。
- W1（8/3-9）着地: 新規11本（補助金第3弾5・第4弾4・1kWh単価2）＋強化/是正9PR（#303 contact構造／#304 出典整備とメタ／#306 by-region 8県／#307 ドメイン移行127箇所／#309 断定表現／#310 時限切れ表現と品質ルール／#311 単価クラスタ／#312 取りこぼし回収9／#313 高CPC強化4）。週8-16本の新規目標を達成。
- 選び方系4クエリ（電力会社の選び方260・電気会社の選び方210・小売電気事業者 ランキング390・法人 電力会社 おすすめ30）は現在0表示のため、8/31第7回toplineでは「表示が立つか」が受け皿づくりの成否指標になる。
---

## 2026-08-11 by-region第2弾(#314)＋出典なし相対比較の全面是正(#315)
- #314: 県ページ強化第2弾8県（三重/石川/岡山/山梨/富山/香川/長野/福島）。事前実測で対象8ページは28日クリック0（title刷新で失うものなし）を確認のうえ、都市名クエリ（四日市49/高松44/倉敷39等）をtitleに反映。山梨のみ「山梨 電力エリア」pos4.3に合わせエリア質問型。H1の「完全ガイド」統一は第1弾含む16県完了（articles.ts含む）。
- ★(c)自社単価手順の改訂: #306の「支払総額÷使用量」は販売額定義（消費税・再エネ賦課金を含まない）と範囲不一致のため、「請求額から消費税と再エネ賦課金を差し引いた額÷使用量」へ改訂。#315で#306の8県にも遡及適用し16県で統一。
- #315: 出典のない相対比較の全面是正。第1弾89箇所/36ファイル＋第2弾248箇所/66ファイル。★A類（一次出典で裏づけあり・維持）は初回抽出36ファイルで0件だった＝単価差主張のほぼ全てが裏づけなしで存在していた。「全国平均より0.5〜1円安い」等の数値・方向断定・「伊方原発の稼働により安い」等の因果断定・派生額（年200〜400万円の差）・超越表現（経済効果が最大級）を削除または定性化。香川リード文の矛盾（#314申し送り）も解消。
- ★確立した判断軸: ①検索文字列の固定は必ず取りこぼす（28→36ファイル・13→21箇所と2回過少見積）→defect class（出典のない相対比較）を定義し16語1,212文から抽出 ②A類の線引きは出典の粒度（組織名の列挙は裏づけにならない・統計名まで挙げているregion系は電源構成の機構説明としてA類維持12箇所） ③数値を消すときは派生（算術で導かれた金額・順位・超越表現）を同じ論理単位として追う。
- ★新運用: リンGO取得後、その要点をPRコメントへ1行記録してからマージする（#314でGO記録がPR上に残らない問題が判明したため。#315から適用済み）。
- 積み残し: by-region残り54本の「完全ガイド」3点セット統一（GSC実測後・別PR）／非単価文脈の相対比較399件は現時点是正不要と判断／全国上位・全国屈指等の隣接表現はW3で第2弾判定。
- 電力取引報5月分は8/11時点で未公表（最新=4月分）。昨年実績（5月分=8/15公表）から今週後半が本命。公表後: 各号確定値反映＋05号カード確定化＋「検針期間ベース」定型文の全号統一（暦月ベースも可の反映）を1PRで。
---

## 2026-08-13 容量拠出金クラスタの構造整理（#316・非破壊）
- 背景: #312実測で「容量拠出金」104〜120表示が6〜8ページに分散・最上位が見積確認ページ（intentミスマッチ）・定義ページ74.6位の逆転。原因は内部構造が2つの正解を主張していたこと——サイト共通部品（Footer/GlossaryLinks/トップ/ハブ）は explained を「とは」として参照する一方、クラスタ内部の📌ボックスは what-is を Pillar A として参照。
- 決定: 正ページ=/capacity-contribution-explained（28日GSC 618表示/9クリック/7.9位で優位＋共通部品の参照先）。反対材料（90日では what-is がヘッド語で逆転388表示@16.1）も記録のうえ採用——この振れ自体がカニバリの症状。
- #316: 5ページの役割分化（explained=定義の全体像／what-is=2026〜2028年度の単価一覧／cost-impact=転嫁の仕組み／simulation=試算手順／what-to-check=契約・予算）＋正ページに役割ラベル付き10リンク導線＋glossary3ページへ初のクラスタリンク。historyは#312改善済みのため無編集。リダイレクトなし＝悪化時はtitleを戻すだけで原状復帰可能。
- 発見と是正: articles.ts側の「完全解説」誇大語／公開metaに漏れていた内部メモ「既存「仕組み」記事との差別化版」／explainedのtitleが本文に無い数値（5,226/7,847/14,812円/kW）を約束するtitle-contentミスマッチ。increase-impactは実在せず（articles.tsコメントアウト済・クラスタは11ページ）。
- 意図的に見送り: 📌ボックス8箇所のhref張り替え（アンカー「2026〜2028年度の単価」の約束先は単価表を持つwhat-isのみ・アンカーテキスト不変の制約下でhrefだけ振ると乖離するため）／what-isのカテゴリ移設（price-trends order:99・破壊的なため）。
- 効果測定（8/31第7回topline）: ベースライン=「容量拠出金」120表示@32.9位6ページ分散・「容量拠出金とは」56表示@28.8位4ページ分散→explainedへの収斂と順位を確認。
- 次PR候補: ①Pillar A/B内部ラベル41箇所の公開面除去（W3・役割分化の定着後）②📌ボックス15ファイルのアンカー文言更新 ③クラスタ外の「完全解説」5件 ④increase-impactの扱い明文化。
- 運用改善: 江田さんのマージ指示文の冒頭に「リンGO済み・」を含める（Windows側でGO取得を確認可能にする）。
- 電力取引報5月分: 8/13時点で未公表（最新=4月分）。昨年実績どおりなら8/15前後。
---

## 2026-08-14 誇大語の全站一掃（#317・236ファイル+805/-805完全対称）
- #317: ①by-region残り54本（by-region31＋by-municipality23）のpageTitle/H1/articles.ts 3点セット同時統一（完全ガイド→ガイド・#314申し送りの解消）②全站の誇大語775件（機械置換ルール6本＋述語用法の個別置換19件）③📌ボックス15ファイルのアンカーtitle/説明文を着地ページの新役割（what-is=単価一覧）に整合（#316申し送り②の解消）。
- 事前確認: GSC全数ページング7,271行で「完全」を含むクエリ0件・クリック0＝稼働クエリを壊す余地なしを確認してから着手。
- 実装側の正しい拡張2点を承認: (1)発注の語リスト7語を「完全＋内容名詞」の族に拡張（完全マップ6/完全整理3/完全FAQ3の取りこぼしを検出・#315の教訓の適用）(2)他ページtitleの逐語コピーであるアンカーテキスト251件にも同時適用（アンカー↔着地の不一致907件→0件・hrefは不変）。
- ★裁定: 「徹底解説」14・「徹底分析」2・「徹底比較」1は変更しない。誇大語の線引き=「結果・完全性を約束する語」（完全〇〇・決定版・究極等）は是正、「姿勢の表明」（徹底〇〇）は編集慣行の範囲として許容。QUALITY_RULES次回更新時に明文化。
- 原則の確立: アンカーテキストは着地ページtitleの逐語コピーであることが多く、titleを変えるときはアンカーも同時に整合させる（リンクの約束と着地の一致）。
- 検証補足: 差分中の数値トークン変化はすべて📌アンカー説明文の書き換え由来（「4つの対策」の語除去・年度範囲のtitle追加）でデータ値の変更はゼロ（リン独立照合済み）。
- 教訓: 発注文の語リスト固定は族の取りこぼしを生む（リン側の反省・defect classで指定すべきだった）／Node書き戻しのCRLF再発（110ファイル・HEAD blob正規化で収束）／build実行中のstashは結果を無効化するため厳禁。
- 電力取引報5月分: 8/14時点で未公表。昨年実績（5月分=8/15公表）から明日8/15が本命。
---

## 2026-08-15 内部設計用語の公開面除去（#318・71ファイル+189/-189完全対称）
- #318: 「Pillar A/B」等の内部設計用語を公開描画部分から除去。発注想定41箇所に対しdefect class抽出で実測約170箇所（Pillar41／ピラー系24／クラスター記事系21／最新性軸・データ系軸20／カニバリ回避ラベル28／内部スラッグ露出16／「差別化し」10／起点記事・B-58e等10）。接尾ラベル形は括弧ごと削除・接頭パイプ形は着地実titleへ整合（#317のアンカー整合原則を適用）。
- 横断チェック: 公開描画文字列72,746件から#316同種の内部メモ漏れ30件を検出・是正（電力会社別解説10本の「本ページはそれと差別化し、」・生スラッグ表示10ファイル等）。
- コメント・変数名・ファイル名の内部用語58件は読者に見えないため維持（対象外）。
- 申し送り→次バッチ登録: 「国内最大級/国内最高水準」61件・「人気ハブページ」約35件は出典なき比較優位（#315系の別defect class）として未是正・W3候補。
- GO記録運用の確認: 江田さんの貼り付け文冒頭「リンGO済み・」＋Windows側の要点1行PRコメント転記で監査線が繋がる現行運用を維持。
- 電力取引報5月分: 8/15（土）午後時点で未公表。昨年の8/15公表は金曜日であり、本年は土日を挟むため月曜8/17が本命（公表後: 各号確定値反映＋05号カード確定化＋trendData延長＋「検針期間ベース」定型文の全号統一を1PR）。
---

## 2026-08-16 実装環境をCursor→Claude Codeデスクトップへ移行（検証完了）＋#319
- 移行の背景: 7月末以降の実装作業は実質Claude Code側で稼働しており（Cursorの現サイクル使用量$0.00で確認）、Cursor Proは8/23で解約（エディタ・アカウントは無料で残存）。
- 移行手順: ①Claudeデスクトップアプリ「Code」タブで C:\dev\ANAsyumiCursorNext を開く ②運用ルールの復唱テスト合格（明示add・リンGO前マージ禁止・HEAD blob起点編集・DATA_ACTUAL規律・禁止表現・defect class検出まで完全）③運用ルールをCLAUDE.mdへ恒久化（beb992d・道具非依存化・.cursorrulesは旧環境用と注記）。
- #319（移行後初のフルサイクル検証を兼ねた実案件）: 「人気ハブページ」29件を「ハブページ」へ最小削除（出典なき人気主張・#318申し送り）。実測29件（#318時点の約35は概算）。「定番」455件中437件は供給地点特定番号の部分一致＝偽陽性として除外、Footer「よく読まれる基礎記事」は実績編成のため維持。全工程（発注→PR→リンGO→江田GO→GO要点PRコメント→マージ→デプロイ監視→本番確認）が新環境で問題なく完走。
- 申し送り（W3の優位主張第3弾へ合流）: 「特に強く支持される」2件（三重半導体/静岡製造業）・「急速に注目を集めています」1件（ネガワット）。
- 権限モードは自動（Auto）で運用（リスク確認つき自動実行・チーム規律と併用）。
---

## 2026-08-16 出典なき優位主張の是正 第3弾（#320・810件/191ファイル）
- #320: 抽出1,110件（ユニーク）→是正810件/191ファイル（+744/-744完全対称・数値/URL/href変更ゼロ・新規数値の創作ゼロ）。#318申し送りの「国内最大級」61件・#319申し送りの3件を含め全処理。
- ★規模が発注想定61件の13倍になった原因: リン側の見積もりが1語族のカウントに基づいており、言い換え族全体を推定していなかった。抽出7ラウンド・敵対的検証4回（指摘計228件）を要した。
- ★最大の知見（QUALITY_RULESへ明文化）: 残作業の正体は「抽出漏れ」ではなく「同型テンプレートの判定ばらつき」。箇所単位の出典有無で判定するとサイト内で表現が割れるため、判定基準を「同型が是正済みなら出典の有無にかかわらず是正」へ引き上げた。
- 分割せず1本で実施（リン裁定）: 分割すると同一ページ内に是正済みと未是正が混在する期間が生じ、本PRが解決した欠陥そのものを再生産するため。
- 沖縄の裁定: okinawa-business-electricity-costは(a)＝媒体名のみで根拠不足→是正。region-okinawaは(b)＝同一ページ内表で検証可能だったが、姉妹ページ是正後の非対称を避けるため是正側へ統一（より保守的な方向への変更としてリン受理）。27.6円は電力取引報の確定値ではなく別ページの参考値であることが判明し、根拠の格を訂正。
- title変更6ページ（エネット/九電ガイド/沖縄県/愛媛製紙/秋田/青森）はCLAUDE.mdの#313ルールに従いGSC実測（秋田・青森は28日0クリック）。articles.tsとpage.tsxの逐語一致を機械確認。
- 維持した例: 熊谷「年間最高気温日本一」は実観測記録（41.1℃）のためEX_HISTORY維持。一方、山梨の「全国一の暑さ記録」は日本記録ではない事実誤りのため是正。
- 申し送り（W3以降）: 「競争優位/優位性」171件・素の「最も」534件・エリア別単価表の出典表記統一・残存「先進地」3件。
- これで7月末から続けた事実性/表現の是正シリーズ（#315→#317→#318→#319→#320）が一巡。
---

## 2026-08-19 電力取引報2026年5月分の確定値反映（#321・27ファイル）
- 電力取引報 令和8年5月分が2026年8月17日公表。4区分確定単価（販売額÷販売電力量・全国計）= 特別高圧17.45／高圧22.78／低圧電灯27.85／低圧電力34.42（円/kWh）。前月比 ▲0.11／+1.41／+1.91／+2.30、前年同月比 ▲0.21／+0.15／▲1.13／▲0.28。
- #321: ①05号カードを推計値から確定値へ差し替え（「公表待ち」「速報的な参考値」注記を解消・#293以来の暫定状態が解消）②06/07号のカードを5月分へ繰上げ・trendDataを2025/12〜2026/5へ延長・「6月分＝9月中旬公表見込み」へ更新 ③by-region16県＋単価クラスタ2＋officeベンチマーク＋articles.tsの基準値144箇所と派生計算11式を更新 ④「検針期間ベース」断定を「販売額÷販売電力量・全国計・事後訂正あり得る・多くの事業者が検針期間ベースで報告（暦月ベースも可）」へ26箇所統一（#311の定義確定を反映）。
- ★重大: リンが発注文に記載した前年同月値（16.73/19.98/27.13/28.99）は誤りだった。retrospective-data.tsから抽出する際、月ラベル定義を確認せず配列の位置で月を推定し、フィルタで行が欠けた状態のインデックスを使ったことが原因。正しくは2025年5月=17.66/22.63/28.98/34.70。実装側がrepo実データと突合して矛盾を検出し、実装を止めて確認を求めたことで公開前に是正された（この値を使うと前年比の方向まで反転し、同一ページ内の年別比較表とも矛盾していた）。
- ★恒久ルール化（QUALITY_RULESへ明文化）: 発注のDATA_ACTUALであってもrepo検証済み値と矛盾したら実装を止めて確認する／配列から月・年の値を取るときは位置でなくラベル定義で特定する／月次繰上げ時はmonthフィールドと月表記を値と同時に更新する／派生計算は全演算子で機械照合する。
- 実装側の敵対的検証が3レンズで23件を検出し、カード見出しのmonth未更新（5月値を4月見出しで表示する事故）・賦課金加算例の算術誤り・推計時代の叙述残存を公開前に是正。年別比較表の2023年行を月ズレで誤修正しかけた件も機械照合で自己検出。
- 申し送り: 6月分は9月中旬公表見込み。公表後は06号カード確定化＋各号繰上げの同型作業。
---

## 2026-08-20 補助金 中核市6市（#322・第5弾）＋新規再開
- 背景: 8月の新規は8/8時点で11本（W1のみ）、W2以降は品質是正に集中し新規ゼロだった。撒き餌戦略のKPI（索引良質ページ数×CV）に照らし種まきを再開。
- 対象選定: 8/4クエリ監査の都市名実需（宇都宮87表示・四日市47・和歌山市45・奈良市43・高松39・金沢33・いわき31・大分市30）に対し、市区ページは東京23区のみで地方主要都市はゼロだった。ただし県ページ（#306/#314で強化済み）とのカニバリを避けるため、主題が衝突しない「補助金」で展開する判断とした。
- #322: 宇都宮/金沢/高松/大分/四日市/奈良の6市（order 70-75・subsidies 69→75本）。7ファイル+4,767/-0で既存の変更ゼロ。
- ★調査で判明した構造: 市独自の設備補助が実在するのは金沢・奈良・大分の3市のみ。宇都宮・高松・四日市の市メニューはSBT認定・可視化・省エネ診断等のソフト支援に限られ、設備費は県制度が受け皿。この非対称自体を各ページの固有価値とした。
- ★もう一つの軸: 申請の前提要件が地域ごとに異なる（金沢=エコ推進事業者ネットワーク入会が令和8年度から必須化／大分県=おおいたグリーン事業者認証／奈良県=高効率エネルギー設備で省エネ診断が必須／宇都宮市=ISO14001・エコアクション21・SBT等）。設備補助の前に認証・診断が要る点が実務上の共通ハードル。
- ★リンの発注ミスを実装側が阻止（#321に続き2日連続）: 発注文の「バッチ共通の軸②」に「石川県=省エネ診断の受診」と書いたが、DATA_ACTUAL本体の石川県には診断要件の記載がなく、出所は調査エージェントのまとめ文だった。実装側が5ページ9箇所への複製を検出し、DATA_ACTUAL優先で全削除・奈良県には限定を付与。→QUALITY_RULESに「検証義務は要約・散文にも適用」を明文化。
- H2重複度: 初回生成が最大Dice 66.7%で発注要件≤60%を超過したため、テンプレ見出しに市文脈を織り込み33.3%へ低減（既存弾の実測最大63.6%より良化）。
- 「確認不可」の遵守: 宇都宮の市予算額・栃木の特別高圧単価・石川の支援金単価（画像掲載）・奈良市の1件あたり上限・四日市の旧制度（要綱404）・高松の旧制度（公式404）は数値を書かず要確認へ誘導。
- 申し送り: 石川県の電気・ガス支援金は令和8年10月頃受付予定、高松市の脱炭素先行地域の設備メニューは公表待ち、三重県太陽光・栃木県脱炭素社会づくりBは再開の可能性。動きがあれば受付状況の更新が必要。
- 8月の新規は17本。残り期間でもう1バッチ回せば月次計画（週8-16本）の圏内。
---

## 2026-08-22 補助金 中核市6市（#323・第6弾）
- 8/4クエリ監査の市名実需（和歌山92表示・つくば85・長野57・いわき31・東大阪30・倉敷28／いずれもクリック0）に対応。9ファイル+5,037/-2、subsidies 75→81本、8月の新規は23本（週8-16本の計画圏内へ復帰）。
- ★調査で判明した構造: 市独自の設備ハード補助があるのは和歌山・いわき・東大阪・倉敷。つくば市は事業者向け設備補助がゼロ（市の脱炭素メニュー4件は個人・賃貸オーナー向け）で県の「省エネ診断→設備補助」が事実上唯一のルート。長野市はハード補助が令和6年度の予算到達終了以降確認できず見える化クラウドの利用料補助のみ。
- ★特異点: 和歌山県の事業者向け太陽光補助は要件に「和歌山市、那智勝浦町を除く」と明記され、和歌山市内事業者は県制度を使えない。東大阪市は旋盤・マシニングセンタ等の生産設備そのものを省エネ補助の対象に据えており、空調・LED中心の一般的な自治体制度と性格が異なる。
- ★予算の非対称: 県は早期枯渇（福島は年度開始前のR8.3.24に到達／岡山は予算超過で抽選／大阪府の空調はR8.6.30終了）、市は枠が残る（和歌山3,300万円中残2,309万円・倉敷1,500万円中残1,054万円で受付2件・東大阪の太陽光は残800万円）。市制度は要件が細かく認知度も低いため申請が伸びていない可能性があり、記事の実用価値はここにある。
- ★事業者向けの蓄電池単体補助と、高圧・低圧の電気料金直接補填は6市いずれも確認できなかった（特別高圧限定の補填は各県とも受付終了）。負担軽減策が「料金補填」から「設備投資補助＋契約見直し」へ移行している。
- 実装側が自らの誤りを検証で2件捕捉: ①和暦→西暦の換算誤り（令和11年を2031年と記載・正しくは2029年）。原因は検証プロンプトに書いた換算表自体の誤りで、120件を機械照合して1件と確定・是正。読者が制度の残存期間を2年過大に誤認する実害があった ②articles.tsのdescriptionへの内部マーカー混入。
- リン裁定: 「確実に」はsrc全体124件を分類し3件のみ緩和・121件は維持（算術的必然・コントロール可能性・動作指示・否定形・悪質勧誘の例示）。線引きは「外部要因で変わる結果を約束しているか」→QUALITY_RULESへ明文化。
- #322の教訓（共通軸の越境）は設計段階で防止に成功。H2 Diceも生成指示の段階で0.0%を達成（#322は事後修正で33.3%）。
- 申し送り: つくば市クリーンエネルギー機器補助の再開／長野市 温暖化対策推進補助金の令和8年度実施／いわき市・倉敷市の公式404制度2件の復旧／福島県 特別高圧支援 第8次・長野県 第6弾（いずれも未公表）。動きがあれば受付状況の更新が必要。
---

## 2026-08-23 取りこぼし回収第3弾（#324）と力率割引の誤り是正（#325・#326）
- ★戦略転換の判断: 8/4監査の未対応取りこぼし135件について主要テーマの既存ページ有無を確認したところ、非鉄金属・製薬・力率・データセンター・PPA・エリアプライスとも既存ページが存在した。913本を書いた現在、不足しているのはコンテンツではなくCTRであり、新規1本より既存メタ改善のほうがROIが高い段階に入ったと判断。あわせて補助金の都市展開は実需が枯れた（残る未カバー市は富山59表示・松江30・姫路23のみ）、B-83エリア推移は10エリア完備で、量産の主要な打ち手が一巡した。
- ★計測の重要知見: GSCはロングテールのクエリを匿名化するため、クエリ次元の合計は実クリック数を大きく下回る。area-price-spreadはクエリ内訳0クリックだがページ次元では18クリック/1,198表示。したがって#313の「稼働クエリ保護」をクエリ単位だけで判定してはならず、title変更は「語を落とさない」設計（旧titleの語を残したまま狙い語を先頭に差し込む）に切り替えた。
- #324: メタ改善7title＋3description（9ファイル+16/-16・本文/H1/数値/href不変）。実装側が自らの誤りを検証で捕捉——FY2026を「年度平均」と断定（同ページ脚注は「2026年4月時点の暫定値」・年度未了）、本文にない語をtitleに書いた（#312の再発）、正ページの取り違え、アンカー13箇所が逐語使用する主題を外した、構造化データの回帰。
- #325: /what-is-power-factor のFAQ計算誤りを一次資料ベースで是正（中部電力ミライズ・関西電力で「基準85%・1ポイントにつき1%割引/割増」を確認）。誤りは率（0.5%）と算術（20×0.5=10であって5でない）の二重。4系統（表・FAQ・本文試算・500kW例）に検算式を併記して統一。あわせてarea-price-spreadの「年度平均」表記を是正（実測6箇所＋グラフ説明1・発注の想定3箇所より多かった）。★「平均」の語自体は残す判断（消すと21.14円が何の値か読み取れなくなり、期間平均をスパイク価格と誤読させる）。
- #326: 力率割引を族として一括是正。★最重要は実装誤り——BasicChargeCalculator.tsx が (力率-85)×0.0085 で、読者が入力して得る金額が誤っていた（既定値で月785,070円→是正後772,000円）。記述8件も是正し、率・基準値・係数対応・増減方向・無条件の約束の6観点でサイト内の統一を機械確認。
- ★配信されていないファイルの問題: #325で「2つの計算機が食い違う」と報告したが Cat6to20MoreCalculators.tsx はどこからもimportされておらず、誤った金額が読者に表示されていたのは1件のみだった。#326では demand-power-glossary が308リダイレクトで到達不能であることが判明し、8ファイル中実効のある是正は7ファイルだった。→QUALITY_RULESに「是正前に配信されているかを確認する」を明文化。
- 申し送り: Cat6to20MoreCalculators.tsx（未使用・約400行）とdemand-power-glossary（到達不能）の整理／係数0.97を前提とする料金目安表8箇所／「▲13%」への基準額限定／scripts/faq_data.py に旧文言が逐語残存（再実行で巻き戻る）／MEETING_LOG.mdのLF正規化／コンテンツギャップ3件（電力 自動化・化学プラント 蓄電クラウド・ppa料金）。
- 8月の新規は23本で確定（8/23時点）。次のイベントは8/31の第7回topline。
---

## 2026-08-25 力率シリーズ完結（#327）・発生源根絶・CRLF汚染637件の発見と全站復元（復元完了は8/26未明）
- #327（main 2649d92）: 残件クリーンアップ9ファイル+19/-466。①未使用のCat6to20MoreCalculators.tsx（453行・14export・全src参照ゼロ）を削除 ②係数0.97の目安表8箇所に前提「力率88%の場合（基準85%を上回る1%につき1%割引）」を明記（5編集・表セルと金額は不変） ③「力率82%→95%で基本料金▲13%」等7箇所に「力率調整前の基本料金に対し」の基準額限定 ④「85%以上で割引」型の境界誤り2箇所を「85%を上回る場合に割引（85%ちょうどは割引・割増なし）」へ是正。実装側の追加検出3件（metal:169の▲10%・hv-quote:67の境界）をリン承認。本番HTML 23項目＋リン独立2ページで反映確認。
- ★発生源の特定と根絶: #325/#326で是正した力率誤り（90%基準・0.85%/ポイント）の出所は2026-04の未追跡生成スクリプト群だった。faq_data.py（賦課金4.06の旧値も含む）に続き、enhance_articles.py・gen_glossary_expansion.py・apply_faq_pr12.py・faq_dataのpycを削除。未追跡スクリプト53本を「基準90|0.85|4.06|0.0085|emsc」で走査し残存ゼロ＝再実行による巻き戻しリスクが消滅。
- ★リンの発注ミス（F取り違え）: MEETING_LOG.mdの「LF正規化」発注は、作業ツリーの実測（CRLF 761行）をHEAD状態と取り違えたもの（8/23申し送りの記載も同根）。実測はHEAD=LF・744行で正規化コミット自体が不要だった。実装側が検証条件の不成立で停止し、未コミットだった7/17議事録17行（B-79第4弾 #294・マージコミット066e4fbの実在を照合）を発見→58e0d4cで救出追記。実装側の停止→実測照合が正しかった相互検証の3例目（#321・#322に続く）。
- ★index stat cache汚染の発見と全站復元: git status/diff/checkoutがすべて沈黙する状態で、tracked 637件（src 538・.ai-team 53・public 32・.github 2・ルート11）の作業ツリーがCRLF化していた。全数ハッシュ照合で内容差は.claude/settings.local.json（意図的変更・保持）1件のみ＝EOLのみを確認し、CRLF版を退避のうえ rm→git checkout -- でindex blobから636件を再展開（HEADがCRLFの月次4件は一致済みで対象外・保全）。復元後: 全数再照合一致・statusの正直化・HEAD=58e0d4c不変・tsc/build/193 passed/check:surcharge/check:links全green。#324〜#327のPRが汚染を免れたのは「編集はHEAD blobを唯一の入力とする」規律の効果。
- 運用の反省（リン）: VM側gitの検証で.git/index.lockの残骸を2回残した（VM側は削除不能のためrename退避→実装側で清掃）。以後リンのVM gitは読み取り専用plumbing＋--no-optional-locksに限定し、statusや作業ツリーdiffを叩かない。
- 併せてリン調査の新発見（未処理）: B-44a/B-44cで統合リダイレクトした12ページ（用語集9＋last-resort-supply子3）のpage dirが残存し、sitemap（自動走査＋articleList両経路）に308リダイレクトURLが約3.5か月掲載中。articles.tsエントリ・recommendedReadingOrder・glossaryTopics・内部リンク（demand-power-glossaryだけで約60箇所）も残存 → PR-Bとして族で一括処理予定。
- 8/31第7回toplineの準備は変更なし。8月新規は23本のまま（本日は精度・衛生のみ）。
---

## 2026-08-26 統合リダイレクト12ページの残存実体一掃（#328）と/electricity-glossary孤立の解消
- #328（main f66ce4e・93ファイル+139/-3,258）: B-44a/B-44c（2026-05-08）で統合リダイレクトした12ページ（用語集9＋last-resort-supply子3）の残存実体を一掃。①12 page dir削除（-2,945行） ②articleListエントリ12・recommendedReadingOrder12・articleSlugs12（手動除去）・glossaryTopics 9slug＋空6グループ削除・articleHubFeaturedのglossaryグループを現存3記事へ差し替え ③リンク整合122箇所/76ファイル（カード差し替え64・重複削除26・hrefのみ32） ④用語集ハブに/electricity-glossaryへの導線を新設・「12のトピック」→6へ是正。articleListは886→874（実体のないカード12枚の削除＝見かけの記事数が実体に一致）。
- ★孤立ページの発見と解消: /electricity-glossary（200+用語の統合着地）はB-44a以来、articleList未登録・内部被リンク0・ハブ導線0の孤立ページで、読者は308経由でしか到達できなかった。本PRで直接被リンク約100本＋ハブ導線が付いた。
- ★本番効果（デプロイ後に実装・リン双方で確認）: sitemap総1,092 URLから308掲載12本が消滅（約3.5か月ぶりの解消）。12 URLの308受け皿はnext.config.tsで全数継続し最終200で着地。ハブの6グループ表示・導線・旧カード非表示を本番HTMLで確認。
- ★表記標準の確立: アンカー着地カードはtitle=着地ページH1の逐語（「法人電気料金の総合用語集 200+ 用語」「最終保障供給とは」）＋description=「〈節名〉」の節で確認できます。（節名は着地見出しの逐語）で64箇所完全統一。LRSは既存先例22回とtitleが逐語一致・descのみ用途差（アンカー案内）で節名版とした。
- ★検証手法の進歩: (1)packed行（1行に最大17カードのJSON形式）の巻き込み編集を「対象外カード全部の多重集合比較＝差ゼロ」で機械保証（リン検証。追加行の数値トークンも全て既存カードの逐語保存と確定） (2)実装側がlazyマッチのブロック跨ぎ事故（4グループ72行の誤削除）を差分検査で自己捕捉→checkout差し戻し→行ベースのブロックパーサで再実装 (3)残存参照ゼロは「削除行の12slug出現170回＋削除dir内相互参照12回＝事前調査182行」の勘定一致で証明。
- ★重要発見: src/data/articleSlugs.tsが383件stale（再生成diffが「12除去のみ」にならないことから実測で発覚）。参照元はArticleScrollTracker.tsx＝GAスクロール計測が383記事で機能していない可能性。8/31第7回topline前の再生成を次PRで実施し、スクロール系イベント量の段差として計測解釈に記録する。
- 申し送り: B案（12トピック構成を維持し6トピックを#anchor直リンク化する再設計）は将来案／GlossaryTopic型ユニオンに旧6トピック名が残存（未使用・無害・最小差分で据え置き）／未追跡add_authorbadge_phase2.py:42に旧slug残存（未追跡のため対象外）。
---

## 2026-08-27 articleSlugs.ts再生成（#329）＝スクロール計測の対象漏れ381件を回収
- #329（1ファイル+382/-1）: articleSlugs.tsは2026-04-21(#65)以降4か月間再生成されておらず、4/30以降の全新規記事がArticleScrollTracker（GAスクロール計測）の対象外だった。再生成で472→853件。既存472件の相対順序は保存（部分列判定）・追加381件のpage dir実在を全数照合・#328で削除した旧12slugの混入ゼロ。
- ★再生成で復活する2件の真因特定: what-is-market-price-adjustment／capacity-contribution-increase-impact（#141が除去済み）の実体はarticles.tsのコメントアウト済みエントリで、生成器がテキスト走査でコメント内も拾うため再生成のたびに混入する。今回も#141踏襲で再除去。runtimeのarticleListには含まれず、sitemap・ハブ表示への影響なし（リンがコメントアウト状態を実見確認）。恒久対策=コメントブロックの削除を小PRとして申し送り（次の機会に同乗）。
- CLAUDE.md「新しい記事ページの追加手順」へ generate:article-slugs の実行を追記（復活2件の確認注意つき・再発防止）。
- 8/31 topline: スクロール深度イベントの対象が472→853記事に拡大するため、イベント量の段差は計測対象の拡大として解釈する（ユーザー行動の変化ではない）。
---

## 2026-08-27 articles.tsのコメントアウト済み残骸2件を削除（#330）＝再生成の冪等化（データ側）
- #330（1ファイル+0/-13・コメント行のみ）: what-is-market-price-adjustment／capacity-contribution-increase-impactのコメントアウト済みエントリ（#329で復活源と特定）を削除。受け入れ試験=削除後のgenerate:article-slugsでarticleSlugs.tsのblobハッシュ不変（実行前・実行後・HEADの3点一致＝手動除去が不要になったことの機械的証明）。非triviaトークン列30,224個のバイト一致とtranspile出力一致で「コメント以外の変更ゼロ」を証明。runtimeのarticleList.lengthは871で前後不変（発注の「873」はコメント内2件を含む文字列カウントで、実装側が数え方の齟齬を特定）。
- ★ただし生成器は未修正（コメント行を今も拾う）。新たなコメントアウトで再発し得るため、CLAUDE.md手順4の確認手順は存置し注記のみ正確化。生成側の修正（コメント除外またはpage dir実在フィルタ）は将来PR候補。
- ★実装側の新発見(A): 生成器の正規表現が「/」を含むslugを除外するため、business-electricity-retrospective/*（49ルート）とspecial/*（9）はスクロール計測の構造的対象外。さらにテストの「retrospectiveはarticleListに追加しない運用」に対し実態は20件中18件が登録済みでルールが割れている。方針整理が必要なため9月の調査項目として登録（8/31 topline前には触らない）。
- 小物の申し送り: compare-market-linked-and-fixed-by-risk-pattern:284に統合元の旧title「法人向け電力契約でよくある市場価格調整とは」のアンカー残存（着地実title=「市場価格調整額とは」・全站1箇所）→次の小修正PRに同乗。
- 発注側の反省2件: 行番号がstale stage（#328以前のsnapshot）由来／873が文字列カウントとruntime件数の混同。いずれも実装側の照合で特定（相互検証の5例目）。
---

## 2026-08-30 コンテンツギャップ3件の回収（#331）＝8月実装の締め
- #331（4ファイル+11/-1）: 表示ありクリック0の3クエリへ本文追記。①「電力 自動化」(0/72/11.7位)→ai-electricity-optimization（GSC APIのクエリ×ページ次元実測で表示ページを特定し、発注既定のbems-fems-ems-overviewから振替。72表示の全量が同ページ）②「化学プラント 蓄電クラウド」(0/70/24.1位)→化学プラント事例に「参考：本記事で扱っていない選択肢（一般論）」カードを新設し事例の事実と明確に分離 ③「ppa料金」(0/79/8.4位)→PPA価格ベンチマークへ語彙ブリッジ1文（PPA料金=PPA単価・価格の定義的同一視＋バーチャルPPAは差金決済の基準価格という但し書き）。あわせて#330申し送りの旧titleアンカー1箇所を「市場価格調整額とは」へ是正（全站最頻表記16→17件・href不変）。
- ★文面の裁定: 「蓄電クラウド」の語は書かない（サイト内0件・市場の定着語は語順の逆の「クラウド蓄電池」で住宅用中心のため、書けば出典のない呼称主張になる）。機能記述（蓄電池の遠隔監視・クラウド側の自動制御・需要予測との組合せ）で意味的に充足させる方を採用——正確性をexact matchより優先。効果は9月toplineで検証。
- 実装側の多面検証（53エージェント・指摘24件）が公開前に実質誤り3件を自己捕捉: 出典のない呼称主張／採用済み施策（FEMS・デマンド管理）を未採用の選択肢として並べる混同／「需要家が支払う金額」断定と同ページのバーチャルPPA記述の矛盾。
- 申し送り: 「市場価格調整費」誤用4件（うちprice-spike-analysisの2件は請求明細の項目名として断定・読者実害あり）→次の小修正PR候補／同着地アンカーの表記割れ5種（月次11ファイルが「総合解説」系）／bems-fems-ems-overview(0/41/8.4位・「自動化」0回)は同型の追記候補だがai-electricity-optimizationとのカニバリに注意。
- GSC教訓の再確認: クエリ次元は匿名化で行ごと消える（bems頁はページ次元で41表示が実在）。表示ページの特定は必ずクエリ×ページ次元のAPI実測で行う。
---

## 2026-08-30 「市場価格調整費」の用語誤り是正とカード形式アンカーの統一（#332）
- #332（13ファイル+19/-19完全対称）: 用語誤り「市場価格調整費」4箇所を「額」へ是正（着地/market-price-adjustmentは「費」を1度も使わない）。うちprice-spike-analysis:143は「電気料金明細に◯◯として追加請求が現れ」と項目名を断定していたため「明細での計上形態や名称は小売電気事業者によって異なる」旨のヘッジを併記（読者が請求書上で探す名称の実害を断つ）。あわせてカード形式アンカー12箇所を「市場価格調整額とは」へ統一し、同着地のカード形式29件が1種に収束。
- ★スコープの裁定: インライン<Link>39件/13種は対象外（「市場価格調整額の急騰」等の自然文アンカーは正当な用法で、機械置換は日本語を壊す——#320の教訓の適用）。#317のアンカー=title原則はtitleフィールドを持つカード型に適用する、と線引きを確定。
- ★対カードの規則: fuel-vs-market-adjustment-comparisonの対カード2組（ヒーロー型・RelatedLinks型）は両組とも両側を着地の実titleへ揃えた（燃調側=articles.ts逐語「燃料費調整額（燃調費）とは」）。片側だけの変更は対を崩すため禁止。
- ★ヘッジ文の設計判断: 当初案（着地の別名リストから「市場調整額」「電源調達調整額」を挙げる）を取り下げ。/power-procurement-adjustment-fee（H1「電源調達調整費とは何か」・全站27件）という別項目が独立ページとして存在するため、具体名を出すと本PRが直している費/額の混同を別の形で再生産する。
- 実装側の多面検証（63エージェント・指摘29件）が実質誤り3件を自己捕捉: 対カード規則を2組目に未適用（3レンズが独立指摘）／intro文が旧カード名を逐語列挙したまま陳腐化／ヘッジが名称のみの留保で着地の「別立てにならない場合も多い」と矛盾。あわせて適用スクリプトの二重edit()バグ（同一ファイルを2回編集し2回目のHEAD再読込が1回目を消す）を自己捕捉しガードを新設——#328のlazyマッチと同族の「編集器そのものの欠陥」。
- ★計測上の注意: 「市場価格調整費」はGSC実測で1クリック/10表示/CTR10.00%/8.3位の実需があった。語が誤りである以上是正が正だが、#324の「狙い語を落とさない」と同型のため、次回計測でこのクエリが0になっても原因を追えるよう記録する。
- 申し送り: 姉妹用語「電源調達調整費(27件)/額(3件)」の割れ（どちらが正かの判断が必要）／対カードのCTA行「市場価格調整とは を読む →」が新見出しと1文字違い（誤用ではない・1行で揃う）／/fuel-cost-adjustment着地は248件13種で未統一（別PR規模）／price-spike-analysisは着地へのリンクを1本も持たない。
- 前点検の反省（リン）: fetch-topline.mjsのドライラン指示に「ファイル変更なし」と書いたが、同スクリプトは4ファイルを書き出す仕様であり指示自体が不成立だった（画面の「読み取り専用」はAPI側の意味）。実装側がtracked1件をblob照合つきでHEADへ復元。点検指示は対象スクリプトの副作用を確認してから出す。
---

## 2026-08-31 第7回topline＝8月施策の一括判定と9月方針の転換（CV導線へ全振り）
- topline（GSC 8/1-8/28 vs 7/4-7/31）: クリック5,479→5,203（-5.0%）・表示208,572→215,673（+3.4%）・CTR2.63→2.41%・順位7.9→8.1。索引良質ページ（28日クリック獲得）550→519（-31）。GA4はusers -7.2%／sessions -9.2%／PV -9.9%。
- ★減少の75%は1ページで説明できる: 旗艦/business-electricity-price-trend-10-yearsが757→551クリック（-206）、表示5,883→4,612（-21.6%）、順位4.5→5.2。表示の落ち幅が順位低下で説明できないため、お盆期のB2B需要減が主因と判断。当サイトは2026-04開設で前年同月比が取れず季節性を数値分離できない点を明記する（9月計測で復帰すれば季節要因と確定）。
- 7項目の判定: ①#303 contactファネル=不合格（cta_view 2,749→2,336・cta_click 1→2・送信3→2）②#304/#312/#313/#324 メタ改善=効果検出できず（取りこぼし群クリック13→17の微増・サイト全体CTRは低下）③#306/#314 by-region 16県=不合格（エリア語表示5,292→7,500(+42%)に対しクリック6→11）④#311 1kWh単価クラスタ=半分合格（180表示@7.8位で索引・順位は合格・クリック0）⑤#316 容量拠出金クラスタ=部分合格（120表示@32.9位→145表示@23.8位・9ポイント改善で収斂が機能）⑥索引の健康=未達（550→519。#328削除の12件は308で元からクリック0のため調整不要）⑦真のCV=外部フォーム受信数を別途記録。
- ★構造的発見1（地域軸の限界）: エリア語960クエリ・7,500表示に対しクリック11（CTR0.15%）。「四日市 電気代」58表示@6.2位・「倉敷 電気代」74表示@6.8位がいずれもクリック0で、順位6位台でCTR0%は順位の問題ではなく意図の不一致（「◯◯ 電気代」は家庭向け意図が主）。地域展開を続けても法人CVに繋がらない可能性が高い。
- ★構造的発見2（勝ち筋の所在）: 「東京電力 電気料金 推移 10年」11クリック/55表示=CTR20%。社名文脈クエリ全体もCTR3.03%でエリア語の20倍。勝ち筋は「地域」ではなく「推移・実データ」。
- ★構造的発見3（最大の問題はSEOでなくCV）: 12,323ユーザー→CTA可視2,336（19%）→CTAクリック2（可視の0.09%）→送信2。B2Bの控えめな1%換算なら123件のところ2件で桁が2つ足りない。#303で導線を触っても動かなかった根因は「サイト内にフォームが無く外部サイトへ送客する」構造にあると判断。
- ★9月方針の決定（8/31 江田GO）: 主軸を「CV導線の作り直し」に置く。SEO施策は現状維持とし、9月は導線に投資を集中する。量産（新規記事）は原則停止し、定例（月次振り返り8月号・電力取引報6月分）のみ実施。
- 計測解釈の注意（記録）: #329で8/27以降スクロール計測対象が472→853記事に拡大（イベント量の段差は行動変化ではない）／#328で12URLをsitemapから削除／GSCは確定ラグ2-3日／クエリ次元の合計（クリック727）はサイト全体（5,203）を大きく下回る＝匿名化。
- 継続監視: 「市場価格調整額」212表示@7.0位クリック0（#332の費→額是正の効果を9月計測で確認）／「電気料金削減 見直し ポイント」1,170表示@8.7位クリック0（最大の単一取りこぼし・3か月連続0）／「容量拠出金」23.8位（クリック圏内20位以内への到達を確認）。
---

## 2026-09-02 計測の申し送り回収（#334）とStickyConsultBar衝突解消（#335）＝CV導線改修の第1弾
- #334（4ファイル+50/-6）: contact_form_submittedにinquiry_typeを追加（Step1のcontact_type_selectedと同一キー・同一値体系でファネル突合可能に）／ga4-report.mjsのcustomEvent:source→cta_from（4箇所・sessionSourceは標準次元として無変更）／page_pathのクエリ二重化を是正（pathOnly()・page_locationはフルURL維持）。
- #335（4ファイル+308/-5）: ①「✕」をsessionStorageで同一セッション永続化（8月のcta_dismiss 509件は「閉じても遷移で復活」の産物。localStorage不採用は維持・ストレージ不可環境はtry/catchでuseStateへフォールバック）②ContactCtaCardが画面内にある間はバーとスペーサを非表示（専用IntersectionObserver threshold 0＋カスタムイベント＋バー側カウンタ。アンマウント時にhiddenを送りカウンタ漏れを防止）。contact_cta_viewのobserver（threshold 0.5・1回限り）は無変更でGAイベント4種は完全不変。
- ★実測: 1440×900と390×844の両方で、修正前はボタン中心のelementFromPointがバー内要素（ASIDE/SPAN/P/DIV）、修正後は3測点すべてA要素。/compare（カード2枚）でカウンタ漏れなし・ソフト遷移でバー復帰・/contact配下は非表示維持。
- ★効果測定の設計: 主指標=contact_cta_click÷contact_cta_view（viewの発火条件不変のため分母が基準線として使える）。バー由来（cta_click・label=sticky）とカード由来（contact_cta_click）はイベント名で分離できるためカスタムディメンション未登録でも前後比較可能。cta_dismissは意図的に激減する（改善のサインであり、減少を悪化と誤読しない）。9月末toplineで「カード系到達が8/月から回復するか」「sticky到達が落ちすぎないか」を判定。
- 計測の知見: Browser paneが非表示（document.hidden===true）の間はIntersectionObserverのコールバックが配送されず、修正が効いていないように見える。ジオメトリ測定は各測点でdocument.hidden===falseを確認して行う。
- 運用の教訓: #335の発注文がリンの「前メッセージ参照」で欠落し、実装側が別の作業（報告A）を#335と誤認しかけた。発注文は必ず当該メッセージ内に全文を置く（参照で済ませない）。#334では回帰ガード確認時のgit checkoutで未コミット変更を失う事故が発生し、退避手順をQUALITY_RULESへ追記した。
---

## 2026-09-03 月次振り返り2026-08号の公開（#336）＝9月の定例1本目
- 収集を実装側へ発注（20エージェント・全項目に一次出典URL）→リンが一次出典で抜き取り照合（東京EP 8/28プレスの逐語「9月分は…高圧で2.30円/kWh」・四国の9月/10月分・気象庁月報の階級）→記事発注→PR、の2段構え。
- ★発注前提の誤り（発注側3例目）: 「9月分の支援単価=高圧1.8円」は使用月と料金月の混同。各社の「9月分」（料金月）に適用される高圧値引きは2.30円で、8社の値引き後公表値が「値引き前−2.30」と全一致。#301と同じ族。実装側が一次出典で検出。
- #336（4ファイル+1,033/-3）: 2026-08号 1,021行・H2 11本。JEPX 8月19.14円（前年比+59.7%・8/26 17:00に6エリア55.23円・東北のみ前月比低下）／支援は8月使用分が最大単価（低圧4.5/高圧2.3）／高温は西日本中心（福岡+2.1・広島+2.0）で東京は平年並▲0.2・多雨286mm／燃調10社の8月分・9月分（値引き前・9月高圧の支援込み2.30）＋10月分参考9社／7月貿易統計（確速）原油114.3・LNG675.5（+17.1%）・一般炭149.6・161.83円。4区分カードは5月分確定のまま・6月分は公表待ち。
- ★DATA_ACTUAL照合の双方向機械化: 記事の数値トークン1,441件→未裏づけ0（導出値11種は算出式つき許容）／主要14群の掲載確認。リンも独立に284種を照合し、差分21種が定義値・OGP寸法・書式差・許容導出値のみであることを確認。
- 実装側の反証検証（6レンズ・42エージェント）が公開前に事実誤り5件を自己捕捉（大阪の気温順位「8地点で最も高い」→3位／10月分公表社数8→9／上昇エリア数9→8と降順の乱れ／序列の欠落／「西日本はJEPX水準が高い」という自記事の表に反する出典なき相対比較）。同型5クラス（順位・順序・計数・相対比較・方向）13項目を全件機械照合し残存ゼロ。
- 同乗: 07号の丸め誤り4値を訂正（中部2025/7 13.84→13.83・LNG 576.8→576.7の2箇所・関西前年差+3.83→+3.82）。07号DATA_ACTUALには訂正節を追記（原本本文は不変）。中国+4.48は生値4.4777で正（掲載値差4.47との1銭差は丸めの正常な帰結）。
- 登録: hub-data先頭カード＋articles.tsのrecommendedReadingOrder 1行。articleListには追加しない（06/07号とテストの運用「retrospectiveはRO登録のみ」に整合）。sitemapは自動検出で1,135ページ。
- 編集判断の記録: 気象H2は地域差が要点の月は数値を見出しに入れない／燃料市況表の「算定期間の原油・為替」行は一次出典に米ドル建てが無いため省略（次号の収集項目に加えるか要判断）／気温とJEPX上昇の因果は断定しない。
- 申し送り: 電力取引報6月分の公表後に06〜08号カードの繰上げ（#321と同型）／07号の関西前年差は本PRで訂正済み。
---
