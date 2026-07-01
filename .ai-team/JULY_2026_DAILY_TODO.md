# 2026年7月 デイリーTODO（リン作成・2026-07-01 / 実repo照合済み）

対象: https://simulator.eic-jp.org ／ repo: C:\dev\ANAsyumiCursorNext（main HEAD 9934d39）
方針: **観測フェーズ（〜7/30）。新規CV機能=凍結（計測のみ）。7月の主戦場=既存修正＋計測。新規は月次のみ（量産はデータ次第）。**

---

## ⚠️ 冒頭の訂正（実repo照合の結果）

申し送りメモの「Batch B第2弾（B-79/82/77/65b）＝未着手」は**誤り**でした。実repoで照合した結果、**32本すべて6月中旬にmerge済み・稼働中**：

| カテゴリ | 現存数 | 状態 |
|---|---|---|
| 補助金 subsidy-* | 33本（27→34の第2弾+8含む） | ✅ 6/6 merge済 |
| 電力会社別 -corporate-electricity-guide | 23本 | ✅ 6/8 merge済 |
| 東京23区 -ku-business-electricity-cost | 23本（23区完結） | ✅ 6/9 merge済 |
| 夏ピーク seasonal | 13本 | ✅ 6/12 merge済 |

→ **これらは7月に「新規発注」しない**（重複作成防止）。7月の新規は月次振り返りのみ。量産第3弾は7/5の索引回復判断後に決定（凍結継続）。

---

## 凡例・ルール

| タグ | 意味 | 発注ルール |
|---|---|---|
| 🆕【新規】 | 新規ページ作成 | 新規`page.tsx`＋`articles.ts`/`_lib`追記OK |
| ✏️【既存修正】 | 既存ページ加筆 | **加筆中心・deletions最小・articles.ts不可触** |
| 📊【計測】 | GA4/GSC計測 | コード非該当 |
| 🧊【CV凍結】 | 相談CV機能 | 7/30まで新規実装なし（計測のみ） |

担当: **(リン)**=戦略・発注ドラフト・分析・GO検証 ／ **(Win)**=git・実装・PR ／ **(江田)**=GO・GA4 UI
フロー: リン発注 → Win実装/PR → リンGO → 江田GO → Winがsquash merge（**GO前マージ禁止**）

---

## 7月の全体像

**📊 計測（フェーズの主軸）**：7/5 早期シグナル／7/30 1ヶ月本判定

**✏️ 既存修正（7月の主戦場・すべて実在ページ）**
1. **#6③ TOP30**：Mメタ最適化（順位良×CTR低＝即効）→ Lリンク・拡充
2. **DEEP UPDATE**：横展開②by-region（未索引24・負債58）→ ③industry-guide（負債103）※deletions=0加筆
3. **fix②b カニバリ**：🟢純粋重複=随時安全／重いクラスタ=**7/5後**

**🆕 新規（月次のみ）**：6月号 `/business-electricity-retrospective/2026-06`（未作成・要確認）／7月号 `2026-07`（7/23-31）

**🧊 CV=凍結**：GA4計測設定と観測のみ。新規CTA実装なし。

**❓ 量産第3弾**：7/5で索引率が回復基調なら再開判断（それまで凍結）

---

# 週1：7/1(水)–7/5(日)　計測準備＋即効メタ＋安全枠

### 7/1(水)　★本日
- 📊 GA4キーイベント設計書 完成（`GA4_KEY_EVENT_DESIGN_2026-07-01.md`）(リン済)
- 【江田】GA4 UIでキーイベント化＋カスタムディメンション（`cta_from`/`cta_label`/`inquiry_category`）登録 ※早いほど7/30分析窓が広がる
- 【Win】コミット発注（2文書を`.ai-team`へ／`.ai-team`のM多数を`git status`確認）

### 7/2(木)
- ✏️【既存修正】**#6③ TOP30 Mメタ最適化ラウンド1 発注**（順位≤9×CTR<1%＝即効・低コスト最優先）(リン→Win)
  - `/ev-charging-glossary`（順位4・CTR0.13%＝最優先）
  - `/electricity-expense-accounting`（CTR0.23%）
  - `/datacenter-electricity-demand-surge`（順位9・CTR0.34%）
  - `/nuclear-power-and-electricity-price`（順位7・0.81%）
  - `/area-price-spread`（順位7.5・0.93%）
  - `/renewable-energy-surcharge-2026`（クリック0%※賦課金SSOT準拠＝**本文非改変・メタのみ**）
  - ※`/electricity-double-billing-faq`（順位8.4）も候補

### 7/3(金)
- ✏️ TOP30 Mラウンド1 PRレビュー（リンGO：meta文字数・キーワード・robots維持）→ 江田GO → merge
- ✏️【既存修正】**fix②b 🟢純粋重複 canonical 発注（7/5待たず安全枠）**(リン→Win)
  - 容量「とは」：`/capacity-contribution-explained` ↔ `/what-is-capacity-contribution` を1本へ／他方canonical
  - ※再エネ`/renewable-energy-surcharge`↔`/renewable-energy-surcharge-2026`は#274/SSOT整合を確認のうえ判断（TOP30 Mと衝突しないよう調整）

### 7/4(土)　バッファ（PR修正・grep差戻し対応）

### 7/5(日)　★第5回フル計測（自動リマインド09:00）
- 📊【計測】(リン)
  - **GA4**：キーイベント初動確認＋Supabase実測(1–5/日)との**補正率baseline化**
  - **GSC**：索引率（52.6%→?）、**P2 CTR 12本 before→after**、canonical3本(#274)の統合状況
  - **P2 CTR 12本の対象**（#272で書換・観測対象）：`datacenter-electricity-demand-surge`／`electricity-double-billing-faq`／`electricity-expense-accounting`／`electricity-rate-revision-mechanism`／`emergency-billing-dispute`／`ev-charging-glossary`／`international-electricity-price-comparison`／`nuclear-power-and-electricity-price`／`renewable-energy-surcharge-2026`／`supply-point-id-explained`／`what-is-capacity-contribution`／`why-business-electricity-prices-rise`
  - **#6② industry-review 25本**の索引転換 再判定（前回convenience-store 1本・ラグ未達だった）
  - **判断①**：fix②b 重いクラスタ着手可否（fix①リンクが効いたか）
  - **判断②**：量産第3弾の再開可否（索引率が回復基調か）

---

# 週2：7/6(月)–7/12(日)　TOP30 L系＋by-region＋fix②b本格

### 7/6(月)
- 📊 7/5計測の分析まとめ（リン）→ 江田へ共有。fix②b本格着手と量産再開のGO/保留を決定

### 7/7(火)
- ✏️【既存修正】**#6③ TOP30 L内部リンク・拡充ラウンド 発注**（2P目→1P目化）(リン→Win)
  - `/supply-point-id-explained`（最大表示3,591・1P目下位・拡充＋被リンク）
  - `/reduce-cost-without-switching`（2P目12.9位・被リンク注入）
  - `/factory-electricity-cost-reduction`（3P目24.8位・最も低い・要拡充）
  - `/sme-electricity-basics`（16位・拡充）
  - `/electricity-vs-gas-price-trend`（CTR4.26%良・順位押上げで伸びる）
  - ハブ：`/articles/by-region`・`/business-electricity-retrospective`（内部リンク強化）

### 7/8(水)
- ✏️【既存修正】**DEEP UPDATE 横展開②by-region 発注**（表示2位7,931×負債58×未索引24・deletions=0加筆・pps-net相互＋中立＋D-1補完）(リン→Win)

### 7/9(木)–7/10(金)
- ✏️ TOP30 L / by-region の各PRレビュー → GO → merge
- ✏️【既存修正】**fix②b クラスタ①固定vs市場連動（最大競合・約20本）集約発注**（7/5 GO後）(リン→Win)
  - ピラー維持：`/market-linked-plan`・`/market-linked-vs-fixed`・`/who-should-choose-market-linked-plan`
  - canonical候補（薄・未索引）：`/fixed-vs-market-linked-guide`・`/fixed-vs-market-quick-diagnosis`・`/compare-market-linked-and-fixed-by-risk-pattern`・`/market-linked-plan-suited-businesses`・`/businesses-not-suited-for-market-linked-electricity-plan`

### 7/11(土)–7/12(日)　バッファ

---

# 週3：7/13(月)–7/19(日)　industry-guide＋fix②b②＋6月号

### 7/13(月)
- ✏️【既存修正】**DEEP UPDATE 横展開③industry-guide 発注**（負債最大103・#6②被リンク群と相乗）(リン→Win)

### 7/14(火)
- 🆕【新規】**6月号 月次振り返り 発注**（`/business-electricity-retrospective/2026-06`・`_lib`データ＋`getAllRetrospectiveSlugs()`更新）※**6月号が未作成のため要江田確認**（cadence上スキップか、catch-upか）(リン→Win)

### 7/15(水)–7/16(木)
- ✏️ industry-guide / 6月号 PRレビュー → GO → merge
- ✏️【既存修正】**fix②b クラスタ②最終保障供給（15本/未索引6）発注**(リン→Win)
  - ピラー：`/last-resort-supply`／「とは」`/last-resort-supply-explained`→canonical
  - canonical候補：`-comparison-positioning`・`-extra-high-voltage`・`-history`・`-internal-explanation`・`-risk-diagnosis`

### 7/17(金)
- ✏️ TOP30 残Mメタ（`/materials-packaging-scenario-analysis`・`/electricity-expense-accounting-guide`・`/shizuoka-business-electricity-cost`・`/tochigi-business-electricity-cost`・`/ev-vs-gasoline-fleet-cost`）ラウンド2 発注(リン→Win)

### 7/18(土)–7/19(日)　バッファ

---

# 週4：7/20(月・海の日)–7/26(日)　fix②b残＋7月号準備

### 7/20(月)　🎌海の日（祝）— 予備日

### 7/21(火)
- ✏️【既存修正】**fix②b クラスタ③容量拠出金 or ④再エネ賦課金 発注**（7/5データに応じ優先度決定）(リン→Win)
  - ③容量：「とは1・いくら1・推移1・確認1」の4本へ集約、残りcanonical
  - ④再エネ：とは/年額を1本へ、推移1・減免1残し、impact系canonical

### 7/22(水)–7/23(木)
- ✏️ fix②b PRレビュー → GO → merge
- 🆕【新規】**7月号 データ収集開始**（リン：JEPX/燃調/賦課金・契約区分別4種・7月実績）

### 7/24(金)
- 🆕【新規】**7月号 `/business-electricity-retrospective/2026-07` 発注**(リン→Win)

### 7/25(土)–7/26(日)　バッファ

---

# 週5：7/27(月)–7/31(金)　7月号公開＋1ヶ月本判定

### 7/27(月)–7/28(火)
- 🆕 7月号 PRレビュー → GO → merge → 公開
- ✏️ fix②b 残クラスタ（⑤経営層/CFO・⑥燃調・⑦見積）から優先度上位を発注(リン→Win)

### 7/29(水)
- 📊 7/30本判定の前準備（GA4/GSC before値の最終確認・データ貼付枠づくり）(リン)

### 7/30(木)　★1ヶ月CV/SEO検証（自動リマインド09:00・本判定）
- 📊【計測】before(6月末)→after 一括出力(リン)
  - **contact到達**：35ユーザー →（目標×10＝350）。`cta_click` from別（sticky/simulate/compare/scenario/home）でどのCTAが効いたか
  - **相談CV**：1–5件/日 →（目標10–15）※Supabase実測×GA4補正率
  - **索引率**：52.6% →（目標70%）。孤立16・noindex解除6が索引されたか
  - **P2 CTR 12本**：CTR/順位 before→after／canonical統合状況
  - **🧊CV凍結の解除判断**：観測結果を見て8月のCV実装（P1橋渡し細分化等）GO可否
  - **量産第3弾の可否**：索引改善が効いていれば横展開／効かなければ質・重複側へ

### 7/31(金)
- 📊 検証結果まとめ → 8月計画（既存修正継続／CV再開／量産再開の配分）ドラフト(リン)

---

## 補足メモ

- **7月の性格**：新規量産ではなく「観測＋既存資産の索引化・CTR改善（既存修正）」が主。これは申し送りの「観測フェーズ・次の実働7/30」と整合（大きな判定は7/30）。
- **新規は月次のみ**：6月号は未作成のため要江田確認（cadence判断）。7月号は7/23-31。
- **fix②b重いcanonical**は原則7/5後。🟢純粋重複のみ前倒し安全。
- **量産第3弾**（Batch B categoriesの更なる拡張）は凍結中。7/5/7/30の索引データで再開判断。
- **CV機能凍結**：新規CTA実装なし。GA4計測設定（コード非該当）と観測のみ。
- **各既存修正発注**は「加筆中心・deletions最小・articles.ts不可触・href全件grep実在確認」を継承。
