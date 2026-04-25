# Batch C 候補発掘（2026-04-25 朝、リン作成）

> **目的**: 5/5 GSC 中間計測の結果を待たずに、INTERNAL_LINK_MAP の被リンク数のみを根拠にして「内部リンクテコ入れ + CTR リライト」が有効そうな記事を先行洗い出し。
> **制約**: GSC データ未取得のため、表示数・順位フィルタは未適用。5/5 計測時に二段階で絞り込む前提。
> **手法**: `.ai-team/INTERNAL_LINK_MAP_2026-04-24.json` の `outgoing` から inbound 集計 → 被リンク 1〜2 のページのうち、コンテンツ価値が高そうな slug を抽出。

---

## 🥇 第 1 優先候補（被リンク 1、コンテンツ既存、テコ入れ ROI 高）

| # | slug | 被リンク | 想定キーワード（推定） | 備考 |
|---|---|---:|---|---|
| C-01 | `/electricity-rate-revision-mechanism` | 1 | 電気料金 改定 メカニズム | 4/24 CTR リライト対象、**内部リンク追加が必要** |
| C-02 | `/electricity-expense-accounting-guide` | 1 | 電気代 会計処理 / 経理 | 4/24 CTR リライト対象、同上 |
| C-03 | `/electricity-price-increase-notice-faq` | 1 | 電気料金 値上げ 通知 FAQ | FAQ 系、Question / Answer 充実度に応じて FAQPage 追加候補 |
| C-04 | `/last-resort-supply-explained` | 1 | 最終保障供給 | カテゴリハブとは別の純粋解説、需要ありそう |
| C-05 | `/contract-cancellation-clause-guide` | 1 | 解約条項 / 違約金 | 法務系、企業ニーズ高 |
| C-06 | `/contract-period-guide` | 1 | 契約期間 | 同上 |
| C-07 | `/billing-quotation-guide` | 1 | 見積 請求 | 実務系、検索意図明確 |
| C-08 | `/case-study-price-increase-negotiation` | 1 | 値上げ 交渉 事例 | 事例系、コンバージョン誘導力高 |
| C-09 | `/holding-company-electricity-review` | 1 | ホールディングス 電気 | 大企業層、競合少 |
| C-10 | `/how-to-explain-electricity-price-increase-internally` | 1 | 値上げ 社内説明 | 業務サポート系、ニッチだが刺さる |

---

## 🥈 第 2 優先候補（被リンク 1、業界別レビュー記事クラスター）

業界別「〜electricity-cost-review」「〜electricity-cost-benchmark」群は **クラスター内クロスリンクが弱い**。Batch C 起動時に、業界別 6〜8 本をまとめて相互リンク化する案。

| slug | 被リンク | 業界 |
|---|---:|---|
| `/cold-storage-electricity-cost-review` | 1 | 冷蔵倉庫 |
| `/municipality-electricity-cost-review` | 1 | 自治体 |
| `/nursing-care-facility-electricity-cost-review` | 1 | 介護施設 |
| `/retail-store-electricity-cost-benchmark` | 1 | 小売 |
| `/school-electricity-cost-review` | 1 | 学校 |
| `/small-office-electricity-cost-review` | 1 | 小規模オフィス |
| `/telecom-facility-electricity-cost-review` | 1 | 通信施設 |
| `/drugstore-electricity-cost-review` | 2 | ドラッグストア |
| `/office-building-electricity-cost-review` | 2 | オフィスビル |
| `/factory-electricity-cost-benchmark` | 2 | 工場 |
| `/office-electricity-cost-benchmark` | 2 | オフィス |

→ **Batch C-Industry**: 業界別レビュー記事間で「同業他カテゴリ参照リンク」を 3〜5 本ずつ追加する PR 案。1 PR で 11 ファイル × 4 リンク = +44 リンク程度。

---

## 🥉 第 3 優先候補（被リンク 2、深掘りクラスター）

| slug | 被リンク | カテゴリ |
|---|---:|---|
| `/24h-operation-price-surge-risk` | 2 | リスクシナリオ |
| `/area-price-spread` | 2 | エリア価格 |
| `/budget-planning-in-high-price-era` | 2 | 予算策定 |
| `/electricity-price-high-plateau-reasons` | 2 | 価格高止まり |
| `/fuel-procurement-and-electricity-prices` | 2 | 燃料調達 |
| `/fuel-mix-price-trend-and-electricity-impact` | 2 | 電源構成 |
| `/price-spike-analysis` | 2 | 価格急騰 |
| `/renewable-share-price-correlation` | 2 | 再エネ比率 |
| `/contract-review-for-accounting` | 2 | 部署別: 経理 |
| `/contract-review-for-facility-management` | 2 | 部署別: 施設管理 |
| `/contract-review-for-general-affairs` | 2 | 部署別: 総務 |

→ **Batch C-Risk**: リスクシナリオ + 価格動向クラスター内クロスリンク強化 PR 案。

---

## 5/5 GSC 計測後の絞り込み手順

1. EDAさん から **2026-04-01〜05-04 の 5 週間分 GSC データ**を CSV で取得（R-01 準拠、清浄期間のみ）
2. 上記候補 30+ slug について「表示数 30+ かつ CTR 2.5% 以下 かつ 順位 5〜20」フィルタを適用
3. 残った slug を Batch C として 5〜10 本に絞り込み
4. 各記事の **CTR リライト + 内部リンク追加 + 必要なら FAQPage 追加** をパッケージ PR 化

---

## Claude Code 発注例（5/5 後、即動かせるテンプレ）

```
Batch C リライト PR を作成してください。
リンが `.ai-team/BATCH_C_CANDIDATES_2026-04-25.md` で先行洗い出しした候補から、
5/5 GSC データで絞り込んだ N 本（リスト別添）に対して以下を実施:

1. title / description の CTR リライト（lesson-20260424-03 準拠で事前 grep 確認）
2. RelatedLinks への流入リンク追加（Top-Linked Top 10 から 2 本以上）
3. 該当記事から他の Batch C 記事への相互リンク追加
4. FAQ ある記事には FAQPage JSON-LD 追加（G-04/G-05 パターン踏襲）
5. AuthorBadge 配置確認

PR タイトル: seo(batch-c): 内部リンク強化 + CTR リライト N 本（5/5 計測後第 1 弾）
```

---

## 注意事項（R-03 準拠）

- Batch C の評価軸は **平均順位 → インプレッション → 新規クエリ → CTR** の順
- CTR リライトの効果測定は「リライト前 28 日 vs リライト後 28 日」で比較（4/13 以前のデータは R-01 で除外）
- 単発 CTR の上下に一喜一憂しない、順位改善が本命

---

## 既存リソースとの関係

- ARTICLES_BATCH_B_PLAN_2026-04-24.md: **新規 5 本執筆**（Batch B、5/5 後判断）
- 本書: **既存 30+ 本のテコ入れ**（Batch C、5/5 後絞り込み）
- 両者は **独立並行実行可能**（コンフリクトなし）

---

**作成**: 2026-04-25 朝（リン）
**根拠データ**: `.ai-team/INTERNAL_LINK_MAP_2026-04-24.json`（v2、501 pages 走査済）
**次アクション**: 5/5 GSC データ受領後、リンが該当 slug の表示数・順位フィルタを適用 → 5〜10 本に絞り込み → Claude Code 発注
