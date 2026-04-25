# Batch B 記事執筆プラン（候補深掘り・5/5 結果後起動）

**発行日**: 2026-04-24
**担当**: リン（単独草稿）→ EDAさん レビュー → Claude Code 発注
**ステータス**: 🟡 **候補深掘り完了、5/5 GSC 中間計測結果を見て起動判断**
**目標公開日**: 2026-05-中旬〜5/18 GSC 本計測前
**本数**: 5 本（8 候補から優先度で 5 本に絞り込み）

---

## 1. Batch B 全体方針

### 起動条件（2026-04-25 R-03 適用に修正）

- **5/5 GSC 中間計測**で Batch A（G-01/G-04/G-05）の初期シグナル + CTR リライト 7 記事の効果が確認できた時点
- 評価軸の優先順位（R-03、ops-notes §15 準拠）:
  1. **平均順位**: 9.0 → 8.3 以下に改善 → Batch B 即起動（執筆開始）
  2. **インプレッション**: 日平均表示 850+ 達成 → 同上
  3. **新規クエリ獲得数**: 4/13 比 +20 クエリ以上 → 同上
  4. CTR は 4 番目の評価軸（順位改善の副産物として観察）
- 上記いずれかが想定未達 → 既存記事の更なる最適化を優先、Batch B は 5/18 本計測後に再判断
- ⚠️ 旧版にあった「CTR が想定以上に伸びれば」という単一指標起動は R-03 に反するため廃止

### 共通構造

- CLAUDE.md 標準構成（ヘッダー→本文→FAQ→RelatedLinks→ContentCta→ContactCtaCard→AuthorBadge）
- **FAQPage JSON-LD を全記事に付与**（G-04/G-05 パターン踏襲）
- **AuthorBadge を全記事末尾に配置**（2026-04-24 導入パターン踏襲）
- **Author URL を JSON-LD に含める**（/kenji-eda への Person.url 設定済）

### 文字数・内部リンク

- 本文 3,000〜4,500 字／本
- RelatedLinks 最低 5 本（Top-Linked Top 10 から 2 本以上必須）
- 新規記事同士のクロスリンク必須（Batch 内で相互参照）

---

## 2. 5 本の優先順位と選定理由

| # | slug（案） | 主キーワード | 現状 | 競合強度 | 実装優先 |
|---|---|---|---|---|---|
| B-1 | `duck-curve-corporate-impact` | ダックカーブ | 現ページなし、キーワード1つだけ 9.6 位 | 中 | 🥇 |
| B-2 | `what-is-capacity-contribution` | 容量拠出金とは | 「容量拠出金 仕組み」で記事あり、「とは」純クエリが抜け | 低 | 🥇 |
| B-3 | `electricity-bcp-for-corporates` | 電力 BCP | `/energy-bcp-overview` 既存だが「電力 BCP」直撃なし | 中 | 🥈 |
| B-4 | `battery-depreciation-tax-treatment` | 蓄電池 減価償却 | 対応記事なし、税制関連クエリの穴 | 低 | 🥈 |
| B-5 | `negawatt-trading-explained` | ネガワット取引とは | `/demand-response-revenue-model` で触れるが専門ページなし | 低 | 🥉 |

### 見送り候補（5/18 以降に再検討）

- 📦 `retail-rate-matching-analysis`（小売料金の最適マッチング分析）: 検索需要小
- 📦 `energy-storage-system-roi-calculator`（蓄電池 ROI 計算）: `/battery-electricity-cost-benefit` で代替可能
- 📦 `green-tariff-explained`（グリーン料金とは）: `/corporate-ppa-overview` で代替

---

## 3. 各記事の詳細設計

### B-1: `duck-curve-corporate-impact`

**基本情報**
- title: `ダックカーブとは｜法人電気料金への影響と太陽光急増時代の料金変動リスク`
- categorySlug: `price-increase`
- 想定順位（公開3ヶ月後）: 6-10 位
- primary query: 「ダックカーブ」「ダックカーブ 電気料金」「ダックカーブ 影響」

**Search Intent**
- Know クエリ（ダックカーブの定義を知りたい）+ Do クエリ（法人での対策を知りたい）の混合
- 競合: 再エネ系メディア、電力卸売系ブログが多数。ただし「法人電気料金への影響」という切り口はほぼ空白

**H2 構成**
1. ダックカーブとは何か（定義・由来・2013 California で発見）
2. なぜ日本でも起きるのか（太陽光 80GW 時代、九州電力の出力制御実績）
3. ダックカーブが法人電気料金に及ぼす 3 つの影響
   - a) 昼間の市場価格下落と夜間ピーク時の高騰
   - b) 市場連動プラン加入企業の振れ幅拡大
   - c) 容量市場単価上昇への波及
4. 業種別インパクト試算（製造業・商業施設・データセンター）
5. 法人がとる 4 つの対策
   - DR 参入、蓄電池ピークシフト、時間帯別料金活用、市場連動プランの選択戦略
6. ダックカーブの今後（2030 年に向けて）
7. まとめ

**RelatedLinks**
- `/market-price-reflected-in-corporate-rates`
- `/market-linked-vs-fixed`
- `/demand-response-revenue-model`（B内連携）
- `/battery-electricity-cost-benefit`
- `/tariff-revision-calendar-2026`
- `/renewable-energy-expansion-price-impact`

**FAQ（5 問）**
1. ダックカーブとは何か？
2. 日本ではいつからダックカーブが観測されている？
3. ダックカーブが法人電気料金に直接影響するか？
4. ダックカーブ時代に法人が採るべき対策は？
5. ダックカーブは将来どうなる？

---

### B-2: `what-is-capacity-contribution`

**基本情報**
- title: `容量拠出金とは｜2026〜2028年度の単価・影響額・法人の対策を完全解説`
- categorySlug: `price-trends`
- 想定順位（公開3ヶ月後）: 3-7 位
- primary query: 「容量拠出金 とは」「容量拠出金とは」（現在 `/capacity-contribution-explained` が 24 被リンクだがクエリ直撃度は弱い）

**Search Intent**
- Know クエリ最強（定義 → 2026 単価 → 将来影響）
- 既存 `/capacity-contribution-explained` との差別化: **「とは」ユーザ向けの短尺版 + 2028 までの単価一覧**

**H2 構成**
1. 容量拠出金とは（一文定義 + 三段階説明）
2. なぜ導入されたか（2024 年度開始・容量市場の背景）
3. 2026〜2028 年度の単価一覧（G-04 データを転載）
4. エリア別 2028 年度単価（首都圏 14,812 円/kW まで）
5. 法人の請求書でどう見える？
6. 対策 3 つ（契約電力最適化、DR 参入、容量市場メニュー検討）
7. まとめ

**RelatedLinks**
- `/capacity-contribution-explained`（深堀版への誘導）
- `/tariff-revision-calendar-2026`
- `/capacity-contribution-cost-impact`
- `/capacity-market-and-corporate-rates`
- `/business-electricity-bill-breakdown`
- `/demand-response-revenue-model`

**FAQ（5 問）**
1. 容量拠出金とは？
2. 容量拠出金はいつから始まった？
3. 2026 年度の単価はいくら？
4. 2028 年度のエリア別単価は？
5. 法人が取れる対策は？

---

### B-3: `electricity-bcp-for-corporates`

**基本情報**
- title: `電力 BCP とは｜法人の停電対策・事業継続計画における電力確保の実務ガイド`
- categorySlug: `energy-bcp`
- 想定順位（公開3ヶ月後）: 8-15 位
- primary query: 「電力 BCP」「法人 BCP 電力」「停電 BCP 企業」

**Search Intent**
- Know + Do 混合
- 既存 `/energy-bcp-overview` があるが「電力 BCP」直撃クエリには最適化されていない

**H2 構成**
1. 電力 BCP とは（定義 + 類似概念との違い）
2. なぜ 2026 年以降 重要か（ダックカーブ、逼迫警報、自然災害リスク）
3. 電力 BCP の 4 本柱
   - a) 非常用電源（UPS / 自家発）
   - b) 蓄電池
   - c) DR 参画
   - d) 多重化契約（二電源契約など）
4. 業種別の電力 BCP 設計例（病院・データセンター・製造業・ホテル）
5. 費用対効果の考え方
6. 予算規模別の推奨構成（500 万円 / 5000 万円 / 5 億円）
7. まとめ

**RelatedLinks**
- `/energy-bcp-overview`（既存詳細版への誘導）
- `/bcp-private-power-generation`
- `/emergency-power-source-options`
- `/battery-storage-bcp-peak-cut-hybrid`
- `/microgrid-for-business`
- `/demand-response-revenue-model`

**FAQ（5 問）**

---

### B-4: `battery-depreciation-tax-treatment`

**基本情報**
- title: `蓄電池の減価償却と税務処理｜法人向け耐用年数・特別償却・税制優遇まとめ`
- categorySlug: `accounting-tax`
- 想定順位（公開3ヶ月後）: 5-10 位
- primary query: 「蓄電池 減価償却」「蓄電池 耐用年数」「蓄電池 法人 税務」

**Search Intent**
- Know 強 + Do 中（経理担当が調べる）
- 競合少、税制優遇情報の需要大

**H2 構成**
1. 蓄電池の耐用年数（法定 6 年 or 17 年の分岐）
2. 定額法 vs 定率法での処理例
3. 中小企業経営強化税制（2025 年度改正対応）
4. カーボンニュートラル投資促進税制
5. 自治体補助金との併用時の処理
6. リース / 購入で税務が変わるポイント
7. まとめと仕訳例

**RelatedLinks**
- `/battery-electricity-cost-benefit`
- `/battery-suited-corporations`
- `/electricity-expense-accounting-guide`
- `/corporate-decarbonization-overview`
- `/subsidies-overview`
- `/invoice-system-electricity`

**FAQ（5 問）**

---

### B-5: `negawatt-trading-explained`

**基本情報**
- title: `ネガワット取引とは｜法人向け仕組み・収益モデル・アグリゲーター活用ガイド`
- categorySlug: `power-procurement`
- 想定順位（公開3ヶ月後）: 5-12 位
- primary query: 「ネガワット取引」「ネガワット とは」「ネガワット アグリゲーター」

**Search Intent**
- Know 強（新しい概念なので定義需要大）
- G-05 `/demand-response-revenue-model` で触れるが、「ネガワット」直撃クエリへの最適化が弱い

**H2 構成**
1. ネガワット取引とは
2. デマンドレスポンスとの違い・関係
3. ネガワット市場の 3 レイヤー（容量市場 / 需給調整市場 / ネガワット取引市場）
4. アグリゲーターの役割と料率
5. 収益試算（1MW クラスの工場で年間いくら？）
6. 参入ハードル（BEMS・計測・契約）
7. まとめ

**RelatedLinks**
- `/demand-response-revenue-model`（B内連携：詳細版への誘導）
- `/demand-response-cost-benefit`
- `/demand-response-suited-corporations`
- `/capacity-market-and-corporate-rates`
- `/how-electricity-is-procured`
- `/power-risk-management`

**FAQ（5 問）**

---

## 4. 内部クロスリンク戦略（Batch B 内）

```
B-1 (ダックカーブ) ──┐
                    ├─→ B-5 (ネガワット取引)
B-2 (容量拠出金とは) ─┤
                    ├─→ B-3 (電力 BCP)
                    └─→ B-4 (蓄電池減価償却)

B-3 (電力 BCP) ─────→ B-4 (蓄電池減価償却)
B-4 (蓄電池減価償却) ─→ B-2 (容量拠出金とは)
B-5 (ネガワット取引) ─→ B-1 (ダックカーブ)
```

各記事から、Batch 内の他 2〜3 本へ相互リンク。**Batch A/CTR リライト群への被リンクも最低 3 本**ずつ。

---

## 5. 実装順序（推奨）

### Phase 1: 5/5 結果待ち（〜5/5）

- 🟢 EDAさん 残作業（GSC 申請、stash drop）
- 🟢 5/5 中間計測レポート作成（リン単独で可）

### Phase 2: Batch B 執筆（5/6〜5/12）

**公開タイミング別 2 波で展開**:

**第 1 波（5/6〜5/9 公開）**: B-1 + B-2（最優先）
- B-2 は既存 `/capacity-contribution-explained` との住み分けが鍵
- B-1 は独立性高く執筆しやすい

**第 2 波（5/10〜5/12 公開）**: B-3 + B-4 + B-5
- B-3 は `/energy-bcp-overview` との差別化
- B-4 は税務専門なのでリン単独草稿後に要確認依頼
- B-5 は G-05 からの分離ページなので G-05 との内部リンク強化

### Phase 3: 5/18 本計測で判断

- B-1〜B-5 の全体効果を計測
- 伸びが良ければ Batch C 第 2 陣（3〜5 本）を企画
- 伸びが悪ければ既存 Batch A/B のリライトに戻す

---

## 6. 各記事の完成定義チェックリスト

各記事が本番反映されるまでに確認すべき項目：

- [ ] 本文 3,000 字以上
- [ ] H2 見出し 6〜8 本
- [ ] 内部リンク最低 5 本（Top-Linked Top 10 から 2 本以上）
- [ ] ArticleJsonLd + BreadcrumbJsonLd
- [ ] FAQPage JSON-LD（faq prop 経由）
- [ ] AuthorBadge 配置（末尾）
- [ ] MarketDataFaq セクション（visible FAQ）
- [ ] RelatedLinks（末尾、Batch 内クロスリンク含む）
- [ ] ContentCta
- [ ] ContactCtaCard
- [ ] articles.ts メタデータ追加
- [ ] `npm run build` エラー 0
- [ ] 本番デプロイ後 200 OK + タイトル確認
- [ ] GSC URL 検査 → インデックス申請

---

## 7. Claude Code 発注文テンプレ

Batch A と同じパターン。5 本を 2 波に分けて発注：

### 第 1 波発注文（5/6〜5/9）

```
Batch B 第 1 波（B-1 + B-2）の TSX 実装をお願いします。

ソース: .ai-team/drafts/B-1-duck-curve-corporate-impact.md
         .ai-team/drafts/B-2-what-is-capacity-contribution.md

各記事ごとに:
1. src/app/<slug>/page.tsx を新規作成
2. ArticleJsonLd + BreadcrumbJsonLd + faq prop 付与
3. MarketDataFaq で visible FAQ を配置
4. AuthorBadge を <main> の末尾に配置
5. src/data/articles.ts に ArticleMeta を追記
6. categorySlug に合わせて order を既存最大値 +1
7. npm run build エラー 0 を確認

公開日: 2026-05-09（金）
```

---

## 8. 想定リスク・注意事項

### 8.1 5/5 計測で Batch A が不発だった場合

- Batch B の起動は見送り
- 代わりに既存 Batch A（G-01/G-04/G-05）の Title/Description リライト + 内部リンク追加で再トライ
- Batch B プランは 5/18 以降に再評価

### 8.2 B-2（容量拠出金とは）の既存ページ食い合い

- `/capacity-contribution-explained` との差別化を明示
- B-2 は「とは」ユーザ向けの短尺 + 2028 までの単価表、既存は深堀解説という位置付け
- 相互リンクで両ページを活かす

### 8.3 B-3（電力 BCP）の既存ページ食い合い

- `/energy-bcp-overview` との差別化を明示
- B-3 は「電力」BCP に特化、既存は総合的なエネルギー BCP
- 明示的に「電力に絞った場合のガイド」と冒頭で宣言

### 8.4 税務記事（B-4）の正確性

- 税制優遇情報は年度で変わる
- 「2026 年度改正対応」を明示
- 必要に応じて税理士監修依頼（EDAさん 経由）

---

## 9. 想定効果（2026-06 時点）

| 項目 | Before（2026-04-24） | After（2026-06 想定） |
|---|---|---|
| 全体インプレッション（日平均） | 740 | 1,100〜1,300（+49〜76%） |
| 全体クリック（日平均） | 8-10 | 15〜20 |
| 記事数 | 507 | 512（+5） |
| 順位 3 位以内クエリ数 | 約 10 | 約 15〜18 |
| /kenji-eda 被リンク | 59（AuthorBadge 経由） | 64（Batch B 5 本追加分） |

---

**次のアクション（5/5 以降）**:
1. リンが `.ai-team/drafts/` に B-1〜B-5 の全文ドラフトを用意
2. EDAさん が内容レビュー → OK なら Claude Code 発注
3. 第 1 波 5/9、第 2 波 5/12 本番反映を目標
