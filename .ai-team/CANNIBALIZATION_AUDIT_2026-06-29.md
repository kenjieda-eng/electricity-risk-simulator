# カニバリゼーション監査 2026-06-29（リン）

source: TITLE_INVENTORY_CANNIBALIZATION_2026-06-29.csv（1,003行）＋ GSC Pages(6/27 3か月)＋ Coverage Drilldown(6/28)

## 前提（索引の実数）
- Coverage「クロール済-未登録 627」= **JS資産406 + 実コンテンツ221**（JSは無害）。
- 索引済パス 879。対策対象＝実コンテンツ221。
- エンティティ系（業種レビュー100/地域別81/特集51/振り返り48/ハブ108）は別エンティティ＝カニバリでない。問題は**コンセプト記事615本内の同一intent競合**。

## 重大クラスタ（実害順・推奨アクション）

### 🔴1. 固定 vs 市場連動（プラン選択）約20本／未索引~10 ＝最大の競合
- 重複intent: 「とは」「違い比較」「向き不向き診断」「判断ガイド」「suited」が多数並走。
- ピラー(残す): `market-linked-plan`(市場連動とは)・`market-linked-vs-fixed`(違い比較)・`who-should-choose-market-linked-plan`(向き不向き)。
- 集約/canonical候補(薄・未索引): fixed-vs-market-linked-guide, fixed-vs-market-quick-diagnosis, compare-market-linked-and-fixed-by-risk-pattern, faq-market-linked-plan, market-linked-plan-suited-businesses, businesses-not-suited-for-market-linked-electricity-plan, commercial-facility / factory / municipality-fixed-vs-market-linked。

### 🔴2. 最終保障供給 15本／未索引6
- ピラー: `last-resort-supply`(総合)。
- 重複「とは」: `last-resort-supply-explained` → ピラーへ canonical。
- 統合/canonical候補(薄・未索引): comparison-positioning, extra-high-voltage, history, internal-explanation, risk-diagnosis。
- 残す角度: faq / price / switch / target / terms / high-voltage。

### 🟠3. 容量拠出金 8本／全索引だがCTR・権威の希釈大
- 「とは」重複: `capacity-contribution-explained` ↔ `what-is-capacity-contribution`。
- 「いくら」重複: impact-on-business / simulation / cost-impact(NID)。
- 「確認」重複: what-to-check / how-to-check-capacity-contribution-terms。
- 推奨: 「とは1・いくら1・推移1・確認1」の4本へ集約、残りcanonical。

### 🟠4. 再エネ賦課金 7本／未索引4
- 「とは/年額」重複: `renewable-energy-surcharge` ↔ `renewable-energy-surcharge-2026`。
- 並走: business-cost / increase-impact / history(NID)。
- 推奨: とは・年額を1本へ、推移1・減免1を残し、impact系をcanonical。

### 🟠5. 経営層/CFO（executive + cfo）約28本／未索引6
- 重複: `executive-cfo-electricity-basics`(NID) ↔ `cfo-electricity-cost-basics`。ESG/TCFD開示が executive と cfo 双方に分散。
- 推奨: CFO系をピラー化、executive重複を canonical/差別化。

### 🟡6. 燃料費調整額 6本／未索引3
- 「とは/計算式/推移」集約（fuel-cost-adjustment ＋ calculation ＋ history(NID)）。上限・固定プラン・確認方法は角度として残す。

### 🟡7. 見積 6本／未索引3
- billing-quotation-guide(NID) / pre-check(NID) / prepare(NID) が重複 → ピラー `quotation-comparison-table-guide` へ集約。高圧・特別高圧見積は残す。

### 🟢8. クイック純粋重複（7/5前でも安全に対応可）
- 省エネ税制: `energy-saving-tax-incentives`(NID) → `energy-saving-tax-incentive-2026`(idx) へ canonical。
- 容量「とは」: explained ↔ what-is を1本へ。
- 再エネ「とは」: surcharge ↔ surcharge-2026 を1本へ。
- CFO基礎: executive-cfo-electricity-basics ↔ cfo-electricity-cost-basics を1本へ。

## 実装方針
- 本件は fix②b（canonical/統合）＝本文・metadata・場合により articles.ts/301 に触れる"重い"変更。
- 原則: **7/5の答え合わせ後**（fix①でリンクが効くか確認してから本格着手）。
- 例外: 上記🟢「純粋重複」4枠は intent が完全一致＝7/5を待たず canonical で潰してよい安全枠。

## 次アクション（江田判断）
- (a) 7/5まで保留（データ駆動・推奨）
- (b) 🟢純粋重複だけ先に canonical（~4-5本）
- (c) クラスタ1-2の集約設計をリンが発注書化
