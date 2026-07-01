# GA4キーイベント設計書（2026-07-01 リン）
## P0測定基盤 — 観測フェーズのCV計測を成立させる

作成: 2026-07-01 リン / 本番コード実装を実確認して作成（G-VCCJXB8WGP ＋ G-WGXXZN9G7Y）

---

## 0. 背景・ゴール

- **現状 GA4キーイベント=0**。6月末施策（ConsultCta / StickyConsultBar）を7/5・7/30に観測しても「CV=0」しか出ず、効果が読めない。
- **朗報**: イベント計測コード自体は充実して発火済み。欠けているのは「キーイベント（＝コンバージョン）指定」と「カスタムディメンション登録」のGA4 UI設定のみ。
- **ゴール**: 既存イベントをキーイベント化し、from別ファネルを可視化。**原則コード変更ゼロ＝観測フェーズ・凍結と両立**（むしろ観測を成立させる前提）。
- **北極星**: contact到達 35→150+/28日、ツール→contact遷移率、相談CV 1–5→10–15/日。

---

## 1. 現状のイベント計測（本番コード実確認済み・2026-07-01）

本番プロパティ `G-VCCJXB8WGP` ＋ シミュレータ `G-WGXXZN9G7Y` に送信。以下は**すでに発火している**：

| イベント名 | 発火元（実ファイル） | 主なパラメータ | ファネル上の役割 |
|---|---|---|---|
| `contact_form_submitted` | `contact/_components/InquiryTypeSelector.tsx` | `event_label`=相談種別 | **主CV（※下記2.5の注意）** |
| `cta_click` | `ConsultCta.tsx` / `StickyConsultBar.tsx` / `simulator/ContentCta.tsx` | `label`, `href`, `from` | 橋渡し（最重要マイクロCV） |
| `contact_cta_click` | `contact/ContactCtaCard.tsx` | — | 橋渡し |
| `calculator_cta_click` | `IndustryElectricityCalculator.tsx` / `ScenarioSimulator.tsx` | — | 橋渡し（計算機・シナリオ） |
| `simulator_completed` | `_components/HomePageClient.tsx` | `event_label`="診断結果ページ到達" | ツール接触（診断・母数） |
| `compare_result_viewed` | `compare/ComparePageClient.tsx` | `event_label`="比較診断結果ページ表示" | ツール接触（比較・母数） |
| `download_completed` | `analytics/DownloadLink.tsx` | — | ソフトCV（リードマグネット） |
| `concierge_used` | `concierge/ConciergeSearch.tsx` | — | エンゲージ |
| `cta_dismiss` | `StickyConsultBar.tsx` | — | 離脱シグナル（stickyを閉じた） |

### 1.5. `from` 値は設置面ごとに一意（実装済み・確認済み）

`cta_click` の `from` は設置箇所ごとに別値が渡っており、**from別アトリビューションはGA4のカスタムディメンション登録だけで機能する（コード不要）**：

| from値 | 設置面 |
|---|---|
| `home` | トップ（`app/page.tsx`） |
| `simulate` | `/simulate` |
| `compare` | `/compare` |
| `scenario` | `/electricity-scenario-simulation`（2箇所） |
| `sticky` | 全ページ追従バー（StickyConsultBar） |

`label` は `consult`（ConsultCta）/ `sticky`（StickyConsultBar）/ ContentCtaはボタン文言。→ `label`でCTA種別、`from`で設置面が割れる。

---

## 2. キーイベント指定（GA4管理UI・コード不要）

GA4管理 → 「イベント」→ 各行の「**キーイベントとしてマーク**」をON：

| 優先 | イベント | キーイベント化 | 位置づけ |
|---|---|---|---|
| ★主 | `contact_form_submitted` | **ON** | 相談CV（プロキシ）。最重要の1本。 |
| ★準 | `cta_click` | **ON** | 橋渡し到達（warm→相談導線クリック）。 |
| ○ | `download_completed` | ON | ソフトCV。 |
| △ | `simulator_completed` / `compare_result_viewed` | キーにせず「指標」利用 | ツール接触の母数。 |
| — | `cta_dismiss` | OFF | 離脱分析用（キーにしない）。 |

> 注: 主CVは `contact_form_submitted` 1本に絞る。キーイベントを増やしすぎると"コンバージョン"の意味が薄まるため、`cta_click`/`download`は補助キーとして扱う。

### 2.5. ★重要な注意 — `contact_form_submitted` の意味

このイベントは**外部フォーム（`target=_blank`）を開くボタンのクリック**で発火する。＝「送信意図（外部フォームを開いた）」を計測しており、**実送信そのものではない**。
→ **真のCVは外部フォーム／Supabase側の実受信（1–5件/日）**。GA4値はプロキシとして扱い、Supabase実測と突合して補正率を出す（§5）。

---

## 3. カスタムディメンション登録（GA4管理UI・コード不要）★from別分析の要

GA4管理 → 「カスタム定義」→「カスタムディメンションを作成」で、イベントパラメータをイベントスコープ登録。**登録しないと from別（sticky/simulate/compare/scenario/home）に割れない**。

| ディメンション名 | スコープ | イベントパラメータ | 用途 |
|---|---|---|---|
| `cta_from` | イベント | `from` | どのCTAが効いたか（設置面別） |
| `cta_label` | イベント | `label` | consult / sticky / 文言別 |
| `inquiry_category` | イベント | `event_label`（contact_form_submitted） | 相談種別別CV |

> ★カスタムディメンションは**登録日以降のデータのみ**反映。**早く登録するほど7/30に使える窓が広がる**（＝7/5前に登録推奨の最大理由）。

---

## 4. ファネルレポート（GA4「探索」→ 目標到達プロセス）

ステップ設計：

1. `session_start`（流入）
2. ツール接触: `simulator_completed` OR `compare_result_viewed`
3. `cta_click`（相談導線クリック／内訳=`cta_from`）
4. `contact_form_submitted`（相談CV・プロキシ）

内訳ディメンション＝ `cta_from`。各ステップの離脱率で「**warmユーザーがどこで落ちるか**」を可視化 → 戦略P1（橋渡し）の効果検証に直結。

---

## 5. Supabase実測との突合（真のCV補正）

- GA4 `contact_form_submitted`（外部フォーム**開封**数） vs Supabase／フォーム**実受信**（1–5件/日）。
- **補正率 = 実受信 ÷ contact_form_submitted** → GA4プロキシを実CVに換算。
- 7/5にこの補正率を初期値として **baseline化**（以降はこの係数でGA4→実CVを推定）。

---

## 6. 江田さんが本日できる（コード不要）チェックリスト

1. GA4管理→イベント: `contact_form_submitted` / `cta_click` / `download_completed` を**キーイベント化**。
2. GA4管理→カスタム定義: `cta_from`(from) / `cta_label`(label) / `inquiry_category`(event_label) を**登録**。
3. 探索→目標到達プロセス: §4の4ステップのファネル作成、内訳=`cta_from`。
4. `simulator_completed` / `compare_result_viewed` のイベント数を確認（ツール接触の母数）。
5. DebugView／リアルタイムで `cta_click`（from=sticky等）と `contact_form_submitted` の発火を1件ずつ**実確認**。

---

## 7. コードが要る項目（＝観測後に判断・今はやらない＝凍結対象）

- **「実送信」確定イベント**（外部フォーム完了コールバック）。現状は開封プロキシ＋Supabase突合で代替できるため急がない。
- リードマグネット拡充（`/downloads`）に伴うソフトCVイベント追加。
- （diagnosis専用イベントは不要。`simulator_completed` で代用可。）

---

## 8. 7/5・7/30での使い方

- **7/5**: キーイベント／カスタムディメンション／ファネルが動作しているか初期確認 ＋ Supabase補正率を baseline化。
- **7/30**: `from`別 `cta_click` → `contact_form_submitted` の遷移率、相談CV（実測）を **before(6月)→after** で出力。どのCTA（sticky/simulate/compare/scenario/home）が効いたかを確定。

---

## 補足: リン/Windows/江田の分担

- **リン**: 本設計（本書）・CTA文言・効果測定・発注ドラフト。
- **江田**: GA4 UI設定（§6・コード不要／本日実行可能）。
- **Windows**: §7のコード項目（観測後にGO判断後、PR）。
