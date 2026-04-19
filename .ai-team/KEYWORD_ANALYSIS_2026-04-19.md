# Search Console キーワード分析（2026-04-19 時点）

**注記**: Search Console データ自動取得スクリプト `scripts/search-console-analysis.mjs` を新設。
本環境では `googleapis` パッケージの自動インストールが権限ポリシーで拒否されたため、
**スクリプト実行は本環境外（EDA 実行環境 or CI）で改めて行う必要があります**:

```bash
npm install --save-dev googleapis   # 初回のみ
node scripts/search-console-analysis.mjs
```

スクリプトは `.ai-team/KEYWORD_ANALYSIS_YYYY-MM-DD.md` を上書き生成します。

以下は Sprint 0 ベースライン（`DECISIONS.md` 記載）＋Sprint 1 第7回議事録で確認されたクエリに、
チーム分析で推定した候補を加えた暫定リストです。この暫定リストを SEO_REWRITE_TOP5 の元データとして使用しました。

---

## A. リライト対象（暫定・DECISIONS 記載ベース＋推定）

| クエリ | 現在順位（baseline） | 備考 | 対応ページ | 推奨アクション |
|---|---|---|---|---|
| 高圧 電力 見直し | 7.7 | EDA指摘: ターゲットど真ん中 | `/articles/review-points`（仮）— 別候補: `/how-to-start-electricity-contract-review` | タイトルに「高圧電力 見直し」を含める／FAQ 構造化データ追加 |
| 燃料費調整額 市場価格調整額 違い | 6.0 | 実務者向け、競合手薄 | `/fuel-cost-adjustment` | 比較表形式で導入、H1 を「燃料費調整額と市場価格調整額の違い」に寄せる |
| 法人 電気料金 上がる | 推定 5〜10 | 上昇要因系 | `/why-business-electricity-prices-rise` | 4要因を冒頭で明示、内部リンク強化 |
| 市場連動型 電気料金 リスク | 推定 5〜10 | 固定との比較需要 | `/market-linked-plan` | 「向かない業種」「リスク定量化」を導入近接に |
| 最終保障供給 とは | 推定 5〜15 | 緊急性高い | `/articles/last-resort-supply`（カテゴリハブ） | ハブ構成を詳解し最初の記事で概念→手順へ誘導 |

## B. 新規記事候補（策定前）

実データ取得後、表示 > 5 かつ CTR < 5% のクエリから抽出予定。現時点での想定候補:

| 仮クエリ | 想定意図 |
|---|---|
| 高圧電力 契約期間 1年 3年 | 契約期間選定の意思決定 |
| 電気料金 再エネ賦課金 2026 | 年度単価の最新情報 |
| 容量拠出金 いくら | 2024年度開始の新制度の実額感 |
| 電気代 稟議 書き方 | 社内説明テンプレ需要 |
| 最終保障供給 切替 どうする | 実務フロー |

## C. 強みキーワード（順位 1〜3 位）

| クエリ | 順位 | 対応ページ |
|---|---|---|
| 電気料金推移 10年 法人 | 2.9 | `/business-electricity-price-trend-10-years` |

## 補足: GA4 ドメイン混在の影響

- Search Console は `simulator.eic-jp.org` 単独プロパティのため信頼できる
- ただし「2026年3月以前は EDA 自身のトラフィック大半（無効）」の指摘あり
- 本分析は28日間ウィンドウ推奨。スクリプト実行時は自動で today-28 → today にセット
