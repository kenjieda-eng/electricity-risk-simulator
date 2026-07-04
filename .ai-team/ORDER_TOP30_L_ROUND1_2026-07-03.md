# 発注書ドラフト：#6③ TOP30 L系 内部リンク強化・本文拡充 ラウンド1（2026-07-03）

作成: 2026-07-03 リン ／ 種別: ✏️既存修正（**加筆中心・deletions最小**） ／ main起点: 5027c11

---

## 目的
順位が2〜3P目のページを、**インバウンド内部リンク注入＋本文拡充**で1P目化する（L施策）。被リンク実数を確認し、ボトルネックに応じて4本を差別化する。

## ★観測整合
- 対象4本は **P2 12本（#272観測中）と非重複**（`supply-point-id-explained`はP2のため今回除外）。
- インバウンド供給元もP2非該当。canonical/metaは触らない＝観測を汚さない。
- fix②bは観測明け（7/30後）に回すため今回対象外。

## 被リンク実数（本発注の設計根拠・2026-07-03 grep実測）

| ページ | 現inbound | H2数 | 順位 | 診断→施策 |
|---|--:|--:|--:|---|
| /electricity-vs-gas-price-trend | **1** | 5 | 10.7 | 被リンクほぼ孤立×CTR4.26%良 → **注入最優先** |
| /reduce-cost-without-switching | **3** | 5 | 12.9 | 被リンク薄 → 注入＋軽い拡充 |
| /sme-electricity-basics | 8 | 11 | 16 | 中庸・既に深い → 注入少＋鮮度更新 |
| /factory-electricity-cost-reduction | **51** | 6 | 24.8 | 被リンクは十分 → **拡充のみ（注入しない）** |

---

## 施策詳細（4本・差別化）

### ① /electricity-vs-gas-price-trend（最優先・被リンク注入）
- **インバウンド注入（各ソース本文に文脈リンクを1本加筆）**：
  - `/business-electricity-price-trend-10-years`（★star・本文に1リンク追加のみ。meta/構造は不変）
  - `/electricity-price-trend-2019-2025`
  - `/electricity-price-trend-by-area`
  - `/fuel-mix-price-trend-and-electricity-impact`
  - `/jepx-price-trend-and-corporate-impact`
- **本文拡充（当該ページ）**：電気とガスの推移比較を1〜2 H2追加（2016→2025の相対推移／LNG価格との連動／法人の電気・ガス調達判断への示唆）。既存5 H2と重複しない角度で。

### ② /reduce-cost-without-switching（注入＋拡充）
- **インバウンド注入（各ソース本文に1リンク加筆）**：
  - `/business-electricity-cost-reduction-review-points`
  - `/5-minimum-checkpoints-for-electricity-contract-review`
  - `/business-electricity-contract-checklist`
  - `/contract-review-practice-guide`
- **本文拡充**：「切り替えずにできる削減」の具体策を1〜2 H2追加（デマンド契約の適正化／力率改善割引／基本料金の見直し 等、既存と非重複）。

### ③ /sme-electricity-basics（注入少＋鮮度）
- **インバウンド注入（各ソース本文に1リンク加筆）**：
  - `/sme-cost-reduction-quick-wins`
  - `/sme-electricity-cost-reduction-steps`
  - `/small-business-electricity-review-timing`
- **本文拡充（最小）**：既に11 H2で深いため拡充は控えめ。2026年の低圧単価・再エネ賦課金（**4.18円/kWh**）へ鮮度更新＋「低圧契約の見直し優先順位」1 H2程度。

### ④ /factory-electricity-cost-reduction（拡充のみ・注入しない）
- **インバウンドは既に51本＝十分 → 追加しない**（過剰リンクを避ける）。
- **本文拡充中心**（順位24.8＝内容の深掘り不足）：新規 H2 を2〜3本追加。
  - 業種別工場の追加削減事例（Before/After・「代表シナリオ」明示）
  - デマンド制御・ピークカットの具体手順
  - SII等補助金活用と**5年削減試算**（「▲X円×5年＝Y円」インライン計算＋電卓検算・10倍誤記厳禁）
  - 市場連動 vs 固定の工場観点
- **アウトバウンド補強**：`/factory-electricity-cost-benchmark`・`/continuous-operation-factory-electricity-cost-review`・`/case-study-factory-large-energy-saving-investment` へ RelatedLinks 補強（実在grep確認）。

---

## 制約・必守（Windows向け）
- ✅ **加筆中心・deletions最小**（本文・リンクの追加のみ。既存段落の削除・作り替えはしない）。
- ✅ **articles.ts 不可触**。
- ✅ **title/description/robots/canonical/OGP/keywords は不変**（L系は本文と内部リンクのみ。メタは触らない）。
- ✅ **先回りリンク禁止**：追加する内部href全件を**着手前にgrep実在確認**（未存在ゼロ）。無ければ実在の近縁へ差替。
- ✅ **明示add**：変更した各 `page.tsx` のみ（`git add -A`/`-am` 禁止）。＝ ①〜④の本文拡充分＋インバウンド供給元の加筆分。
- ✅ ★**P2 12本**（datacenter-electricity-demand-surge / electricity-double-billing-faq / electricity-expense-accounting / electricity-rate-revision-mechanism / emergency-billing-dispute / ev-charging-glossary / international-electricity-price-comparison / nuclear-power-and-electricity-price / renewable-energy-surcharge-2026 / supply-point-id-explained / what-is-capacity-contribution / why-business-electricity-prices-rise）は**ソース・ターゲットとも触らない**。
- ✅ 数値・制度は公開情報ベース・捏造ゼロ・「2026年時点」明記（拡充部）。

---

## 発注テキスト（KENJIさんコピペ用）
```
発注: #6③ TOP30 L系 内部リンク強化・本文拡充 R1（加筆のみ・メタ非改変）

【作業フォルダ】C:\dev\ANAsyumiCursorNext
【ブランチ】git fetch origin && git checkout -b chore/top30-L-round1-20260703 origin/main
【必読】.ai-team/ORDER_TOP30_L_ROUND1_2026-07-03.md（本書・被リンク実数と差別化施策）

【対象と施策】
① /electricity-vs-gas-price-trend … インバウンド5本注入＋本文1-2 H2拡充
   注入元: business-electricity-price-trend-10-years / electricity-price-trend-2019-2025 /
           electricity-price-trend-by-area / fuel-mix-price-trend-and-electricity-impact /
           jepx-price-trend-and-corporate-impact （各本文に文脈リンク1本加筆）
② /reduce-cost-without-switching … インバウンド4本注入＋本文1-2 H2拡充
   注入元: business-electricity-cost-reduction-review-points /
           5-minimum-checkpoints-for-electricity-contract-review /
           business-electricity-contract-checklist / contract-review-practice-guide
③ /sme-electricity-basics … インバウンド3本注入＋鮮度更新(2026賦課金4.18)＋1 H2
   注入元: sme-cost-reduction-quick-wins / sme-electricity-cost-reduction-steps /
           small-business-electricity-review-timing
④ /factory-electricity-cost-reduction … 【注入しない】本文2-3 H2拡充のみ＋RelatedLinks補強
   (被リンク51本で十分。拡充=業種別事例/デマンド制御手順/補助金5年試算/市場連動vs固定)

【必守】
- 加筆のみ・deletions最小・articles.ts不可触
- title/description/robots/canonical/OGP/keywords 不変（本文と内部リンクのみ）
- 追加href全件を着手前にgrep実在確認（未存在ゼロ・無ければ近縁へ差替）
- 明示add（変更page.tsxのみ・git add -A禁止）
- ★P2 12本はソース/ターゲットとも不触
- 5年試算は「▲X円×5年＝Y円」インライン＋電卓検算（10倍誤記厳禁）・公開情報ベース

【commit】chore(seo/p2c): TOP30 L系 R1(内部リンク強化+拡充4本・加筆のみ・観測非重複)
【PR後】リンGO（meta/robots/canonical不変・deletions最小・href実在・P2非接触を差分で確認）→ 江田GO → squash merge
```

---

## GO前チェック（リン）
- [ ] 各ターゲットの title/description/robots/canonical が**diffに現れない**（＝メタ不変）
- [ ] deletions が最小（加筆主体）
- [ ] 追加hrefが全て実在（404なし）・P2 12本に触れていない
- [ ] ④に新規インバウンドを足していない（拡充のみ）／①に5本入っている
- [ ] 5年試算の桁（×5）が電卓一致
