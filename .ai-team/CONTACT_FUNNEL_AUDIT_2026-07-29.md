# contact導線 技術点検レポート（2026-07-29）

対象: `main` = `5baa92e`（2026-07-29 時点）／**読み取りのみ・コード変更なし**

背景: 直近28日で GSCクリック +46.4%・GA4 `cta_click` +74.4% に対し、`contact_form_submitted` は 5件→5件で横ばい（`.ai-team/TOPLINE_DATA_2026-07-30.md`）。原因切り分けの材料として、実装を実確認した。

本文（§1〜§5）は**確認できた事実のみ**を記載する。改善案は §6 に「候補」として分離した。

---

## 0. 要旨（事実3点）

1. **本サイトにフォームは存在しない。** `src` 配下に `<form>` は 0 件、contact 系 API ルート・メール送信・DB保存の実装も 0 件。`/contact` は外部フォーム `https://eic-jp.org/contact` への**送客ページ**である。
2. **`contact_form_submitted` は「送信」イベントではない。** 外部フォームを開く `<a target="_blank">` の**クリック**で発火する（サイト全体で1箇所のみ）。実送信は外部ドメイン側で起き、本サイトからは観測できない。
3. **`cta_click` は contact 導線の指標ではない。** 発火元3コンポーネントのうち最大数の `ContentCta` は**リンク先を問わず全リンクで発火**し、その 2,189 リンク中 `/contact` 宛は 79 件（3.6%）。一方 `/contact` 到達の主導線である `ContactCtaCard`（845箇所）は `contact_cta_click` を送信し、**topline の集計対象イベントに含まれていない**。

→ 「流入+46% / cta_click+74% なのに CV 横ばい」という対比は、**分子と分母が別ファネルの数値**である可能性がある。

---

## 1. `/contact` の送信フロー実装

### 1-1. ページ構成

| 項目 | 実装 |
|---|---|
| ページ | [src/app/contact/page.tsx](src/app/contact/page.tsx)（539行・Server Component・`async` + `searchParams`） |
| 入力UI | [src/app/contact/_components/InquiryTypeSelector.tsx](src/app/contact/_components/InquiryTypeSelector.tsx)（`"use client"`・182行） |
| 描画位置 | [page.tsx:501](src/app/contact/page.tsx#L501)（`id="inquiry-type-selector"`） |

### 1-2. 「フォーム項目」の実態

本サイト側にフォーム項目は**存在しない**。`InquiryTypeSelector` が持つのは以下の1つだけ。

- **Step 1: 種別選択**（`useState` の `selectedId`）— 4択のボタン群
  - `rate-review` / `tech-question` / `lecture-request` / `other`（[InquiryTypeSelector.tsx:16-57](src/app/contact/_components/InquiryTypeSelector.tsx#L16-L57)）
- **Step 2: 記入ヒント表示** — 選択時のみ表示される静的テキスト（入力欄なし）
- **Step 3: 外部フォームを開く `<a>`** — [InquiryTypeSelector.tsx:144-165](src/app/contact/_components/InquiryTypeSelector.tsx#L144-L165)

### 1-3. 送信先

```
const EXTERNAL_FORM_BASE = "https://eic-jp.org/contact";   // :59
const externalUrl = selected
  ? `${EXTERNAL_FORM_BASE}?category=${encodeURIComponent(selected.externalFormParam)}`
  : EXTERNAL_FORM_BASE;                                     // :64-66
```

- 属性: `target="_blank" rel="noopener noreferrer"`（別タブで開く）
- **引き継がれるのは `category` のみ。** `/contact?from=...` で受け取った流入元 `from`、および `risk_label` / `risk_score` / `contract_type` / `region` / `result_id` は**外部フォームへ渡っていない**（本サイト内のバナー表示にのみ使用）。

### 1-4. バリデーション／成功・失敗時の挙動／エラーハンドリング

**いずれも本リポジトリに実装なし**（外部フォーム側の責務）。確認済みの根拠:

| 確認項目 | 結果 |
|---|---|
| `<form>` タグ（src全体） | 0 件 |
| contact 系 API ルート | なし（`src/app/api/` は datasets / downloads / market-data / og / rag-index / scenario-simulation-results / simulation-results のみ） |
| メール送信ライブラリ | `nodemailer` / `resend` / `sendgrid` いずれも package.json に**なし** |
| Supabase への contact 保存 | 該当コードなし |
| 種別未選択時のガード | **なし**（未選択でもボタンは有効。`EXTERNAL_FORM_BASE` へ素で遷移する） |

---

## 2. `contact_form_submitted` の発火箇所と条件

### 2-1. 発火箇所（サイト全体で1箇所のみ）

[InquiryTypeSelector.tsx:148-155](src/app/contact/_components/InquiryTypeSelector.tsx#L148-L155)

```tsx
onClick={() => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "contact_form_submitted", {
      event_category: "engagement",
      event_label: selected?.externalFormParam ?? "no-category",
    });
  }
}}
```

### 2-2. タイミング

**「外部フォームを開くボタンを押した瞬間」に発火。送信成功後ではない。**
＝ 計測しているのは「送信意図（外部フォームを開いた）」であり、実送信件数ではない。
この点は `.ai-team/GA4_KEY_EVENT_DESIGN_2026-07-01.md` §2.5 でも既に明記されている。

### 2-3. 発火実装の履歴（7/2のキーイベント設定より前から発火していたか）

| コミット | 日付 | 内容 |
|---|---|---|
| `43f9dfd` | 2026-04-26 | `/contact` を段階入力UIへ（PR#87）※この時点ではイベント送信なし |
| `2d95af4` | 2026-04-26 | **7つのキーイベント GA4送信実装（PR#94）** — `contact_form_submitted` はここで追加 |

→ **イベント送信コード自体は 2026-04-26 から本番に存在**しており、7/2 のキーイベント設定（GA4管理画面）の約2か月前から発火可能な状態だった。
「7/2以前はイベントが無かったから5件しか出ていない」という説明は**成立しない**。

### 2-4. 欠落・二重発火の可能性

**欠落する経路（＝実際より少なく出る要因）**

| # | 経路 | 詳細 |
|---|---|---|
| E-1 | GA未ロード中のクリック | `trackEvent()` を経由せず生の `window.gtag` を直接参照。gtag.js は `strategy="afterInteractive"`（[GoogleAnalytics.tsx:78-87](src/components/analytics/GoogleAnalytics.tsx#L78-L87)）のため、ロード完了前のクリックは `if (window.gtag)` で**無音のまま捨てられる**（`dataLayer` へのキューイングもされない） |
| E-2 | 外部フォームへの直リンク | [about/editorial-policy/page.tsx:65](src/app/about/editorial-policy/page.tsx#L65) の `https://eic-jp.org/contact` リンクは**無計測** |
| E-3 | サイト外からの到達 | eic-jp.org 本体・検索・ブックマーク経由で外部フォームに直接到達した送信は、本サイトでは原理的に計測不能 |

**多く出る要因（＝実送信より多く出る）**

| # | 経路 | 詳細 |
|---|---|---|
| D-1 | 再クリック | 別タブで開いた後に戻って再度押すと、その都度1件計上される |
| D-2 | 中クリック / ⌘・Ctrl+クリック | 多くのブラウザで `onClick` が発火するため計上される |
| D-3 | 開いただけで離脱 | 外部フォームを開いたが記入せず閉じた場合も1件 |

**同一 onClick の重複発火はなし**（ハンドラは1本、React の合成イベントで1クリック1回）。

### 2-5. 送信パラメータ

`event_category`（固定 `"engagement"`）／`event_label`（種別 or `"no-category"`）のみ。
**`cta_from` は送信されていない**（＝ GA4 側にカスタムディメンションを登録しても、現状は内訳が取れない）。

---

## 3. `cta_click` の発火箇所と定義（68件が何のクリックか）

### 3-1. 発火元は3コンポーネント

| コンポーネント | 行 | 送信パラメータ | 設置数 |
|---|---|---|---|
| [ContentCta.tsx](src/components/simulator/ContentCta.tsx#L27) | :27 | `label`（ボタン文言）, `href` | **895箇所 / 893ファイル** |
| [ConsultCta.tsx](src/components/ConsultCta.tsx#L38) | :38 | `label:"consult"`, `href`, `from` | 68箇所 / 65ファイル |
| [StickyConsultBar.tsx](src/components/StickyConsultBar.tsx#L39) | :39 | `label:"sticky"`, `href`, `from:"sticky"` | 全ページ追従（`/contact` 配下のみ非表示） |

### 3-2. ★ `ContentCta` はリンク先を問わず全リンクで発火する

`ContentCta` は `links` 配列の**すべてのリンク**に `cta_click` を付けている。実測（`src` 全走査）:

| 指標 | 実測値 |
|---|---:|
| `<ContentCta>` ブロック数 | 895 |
| そのうち `/contact` 宛リンクを含むブロック | 79 |
| `ContentCta` 内のリンク総数 | 2,189 |
| **そのうち `/contact` 宛** | **79（3.6%）** |

→ `cta_click` の大多数は「記事末尾から他記事・トップ・診断へ回遊したクリック」であり、**contact 導線のクリックではない**。
→ `cta_click` +74.4% は「記事の回遊が増えた」ことの反映として説明可能で、contact 導線の伸びを意味しない。

### 3-3. ★ `/contact` 到達の主導線は `cta_click` ではない

`/contact` への最大の送客コンポーネントは `ContactCtaCard` だが、これは別イベント名を送信している。

| コンポーネント | 送信イベント | 設置数 | topline 集計対象か |
|---|---|---:|---|
| `ContactCtaCard` | `contact_cta_click`（[:103](src/components/contact/ContactCtaCard.tsx#L103)）／`contact_cta_view`（[:84](src/components/contact/ContactCtaCard.tsx#L84)・IntersectionObserver 50%） | **845箇所 / 844ファイル**（`page.tsx` 総数 927 の 91%） | **含まれていない** |
| `ScenarioSimulator` / `IndustryElectricityCalculator` | `calculator_cta_click` | 各1 | 含まれていない |

`scripts/fetch-topline.mjs:127`:
```js
const KEY_EVENTS = ["contact_form_submitted", "cta_click", "download_completed"];
```

→ **`/contact` 到達クリックの実ボリューム（`contact_cta_click`）は、今回の topline に一切載っていない。**
　`source` 値の内訳は `source="article"` が 833／845（98.6%）で、残り12は `compare-result-primary`・`simulate-result`・`benchmark`・`journey`・`special-*` 等。

### 3-4. 内訳が取れない理由

`from` / `label` / `source` / `event_label` はいずれも GA4 のカスタムディメンション未登録のため、Data API で内訳を取得できない（`.ai-team/TOPLINE_DATA_2026-07-30.md` L45-47 で確認済み。登録済みは `ab_version` と `diag_*` の計7件のみ）。

### 3-5. 計測が無効になる条件（全 `trackEvent` 共通）

[src/lib/analytics/ga.ts](src/lib/analytics/ga.ts) の `getGaRuntimeConfig()` により、以下でのみ送信される。

- **production**: `hostname === "simulator.eic-jp.org"` かつ https かつ `VERCEL_ENV` が未設定/`production`
- **preview-debug**: `VERCEL_ENV === "preview"` かつ https かつ `NEXT_PUBLIC_GA_ID_DEBUG` 設定あり
- **それ以外（localhost 等）は送信しない**

※ `contact_form_submitted` だけは `trackEvent` を経由せず生 `window.gtag` を叩くため、このガードを通らない（ただし gtag 自体が上記条件でしか定義されないため、実効の送信条件はほぼ同じ）。

---

## 4. 実受信記録との突合可能性

### 4-1. 本リポジトリ内の記録: **なし**

| 確認先 | 結果 |
|---|---|
| API ルート | contact 系なし |
| Supabase | contact 系テーブルへの書き込みコードなし |
| メール送信 | 依存パッケージ・実装ともになし |
| ログ出力 | なし |

→ **本サイト側には受信記録が一切存在しない。** 突合可能なデータはリポジトリからは取得不能。

### 4-2. 実受信は外部フォーム（`eic-jp.org`）側 → **要江田さん確認**

外部サービスへのログインが必要なため、以下は確認できていない。江田さんへの確認依頼事項:

1. **7月の実受信件数**（GA4 の `contact_form_submitted` 5件との突合。プロキシ補正率の算出に必要）
2. `?category=` パラメータが受信データに記録として残っているか（種別内訳の突合可否）
3. 外部フォームの**必須項目・バリデーション・送信完了ページの有無**（本サイト表記は「必須3項目」だが実物は未確認）
4. `eic-jp.org` 側に GA4 等の計測が入っているか（入っていれば、外部フォーム到達→送信完了の離脱率が測れる）
5. 外部フォームが `from` 等の追加クエリパラメータを受け入れられるか（§6 候補 C-4 の前提）

### 4-3. 既存ドキュメントとの差異（要確認）

`.ai-team/GA4_KEY_EVENT_DESIGN_2026-07-01.md` §2.5 は「真のCVは外部フォーム／**Supabase側の実受信（1–5件/日）**」と記載しているが、**本リポジトリに contact 受信を Supabase へ保存する実装は存在しない**。この「Supabase実測」が何を指すのか（別システムか、記述誤りか）は本点検では確定できなかった。

---

## 5. UX上の疑義（コードから判る範囲）

| # | 事象 | 根拠 |
|---|---|---|
| U-1 | **送信導線がページ最下部近く。** 539行のページ中、`InquiryTypeSelector` は 501行目。`<h1>`（310行）より下に `<h2>` セクションが6本ある。ファーストビューに送信ボタンは存在しない | [page.tsx:310](src/app/contact/page.tsx#L310), [:501](src/app/contact/page.tsx#L501) |
| U-2 | **フォーム直前の最強CTAが「診断へ戻す」導線。** 直前セクション（470-497行）で、塗りつぶし・amber の主ボタンが「診断を始める（無料・5分）→ `/`」、相談側（`#inquiry-type-selector`）は枠線のみの副次扱い。最終ステップの手前で分岐している | [page.tsx:470-497](src/app/contact/page.tsx#L470-L497) |
| U-3 | **送信ボタン直下にも同じ分岐。** 「まず無料診断（5分）を試す」リンクが送信ボタンの直下に置かれている | [InquiryTypeSelector.tsx:172-178](src/app/contact/_components/InquiryTypeSelector.tsx#L172-L178) |
| U-4 | **「3ステップ」の実体は外部遷移1クリック。** Step1 は必須ではなく未選択でも遷移可能。Step2 は選択時のみ表示されるため、未選択のまま進むと Step1→Step3 が直結し「3ステップ」の説明と体感が食い違う | [InquiryTypeSelector.tsx:119-130](src/app/contact/_components/InquiryTypeSelector.tsx#L119-L130) |
| U-5 | **外部サイトへの離脱が発生する。** `target="_blank"` で別ドメインへ遷移するため、ユーザーから見れば「まだ何も送っていないのに別サイトへ飛ばされる」構造。本サイトの `/contact` 到達→実送信の間に、**ドメインをまたぐ離脱点が1つ余分にある** | [InquiryTypeSelector.tsx:144-147](src/app/contact/_components/InquiryTypeSelector.tsx#L144-L147) |
| U-6 | **文脈引き継ぎが外部フォームに渡らない。** `/contact?from=...&risk_score=...` で受けた情報は本サイト内のバナー表示のみで、外部フォームには `category` しか渡らない。ユーザーは外部フォームで同じ内容を再入力する必要がある | [InquiryTypeSelector.tsx:64-66](src/app/contact/_components/InquiryTypeSelector.tsx#L64-L66), [page.tsx:190-202](src/app/contact/page.tsx#L190-L202) |
| U-7 | **追従バーの下端重なり。** `StickyConsultBar` は `fixed inset-x-0 bottom-0` だが、`layout.tsx` の `<body>`/`<main>` に padding-bottom の補正がない。最下部コンテンツ（Footer 末尾）に重なる。※`/contact` 配下では非表示のため、contact ページ自体には影響しない | [StickyConsultBar.tsx:27](src/components/StickyConsultBar.tsx#L27), [layout.tsx:58-74](src/app/layout.tsx#L58-L74) |
| U-8 | **モバイル表示崩れの兆候は見当たらない。** 送信ボタンは `px-6 py-4`（タップ領域十分）、Step1 カードは `md:grid-cols-2` で SP は1カラム、ボタン行は `flex-col gap-3 sm:flex-row`。固定幅・overflow を招く指定は確認されなかった | [InquiryTypeSelector.tsx:88](src/app/contact/_components/InquiryTypeSelector.tsx#L88), [:143](src/app/contact/_components/InquiryTypeSelector.tsx#L143), [:156-160](src/app/contact/_components/InquiryTypeSelector.tsx#L156-L160) |

※ Microsoft Clarity は導入済み（`NEXT_PUBLIC_CLARITY_PROJECT_ID` 設定時のみ有効・[ClarityScript.tsx](src/components/analytics/ClarityScript.tsx)）。実機の崩れ・スクロール到達率は Clarity のヒートマップで実証可能（本点検の範囲外）。

---

## 6. 改善候補（※提案。事実ではない・実施判断は別途）

計測側（原因の切り分けを先に成立させる）

- **C-1**: `contact_cta_click` を `scripts/fetch-topline.mjs` の `KEY_EVENTS` に追加し、`/contact` 到達クリックの実ボリュームを可視化する（スクリプトのみの変更）。§3-3 の空白が埋まる。
- **C-2**: 主要CTAイベントに `cta_from` パラメータを付与する（**本発注②で実装**）。GA4 のカスタムディメンション登録（江田さん）と対で機能する。
- **C-3**: `contact_form_submitted` を `trackEvent()` 経由に統一し、E-1（gtag 未ロード時の無音欠落）を減らす。あわせてイベント名を実態に合わせる案（例: `contact_form_opened`）も検討余地あり。※ただし改名は GA4 側の既存キーイベント設定・過去データとの断絶を招くため、実施するなら江田さんの GA4 設定と同時。

導線側

- **C-4**: 外部フォームURLに `from` 等を引き継ぐ（`?category=...&from=...`）。受信側で流入元を判別でき、GA4 プロキシ値と実受信の突合が可能になる。**前提: 外部フォームが追加パラメータを受け入れるか要確認（§4-2 の5）。**
- **C-5**: `/contact` のファーストビューに送信導線を置く（U-1）。
- **C-6**: フォーム直前セクションの視覚優先度を反転させ、「相談する」を主ボタンにする（U-2 / U-3）。
- **C-7**: `eic-jp.org` 側フォームに GA4 計測を入れ、クロスドメインで「外部フォーム到達→送信完了」を測る（U-5 の離脱点の可視化）。江田さん判断。

---

## 付録: 本点検で用いた確認コマンド（再現用）

```bash
# フォーム実装の有無
grep -rn "<form" src --include=*.tsx            # → 0件
grep -rn "nodemailer\|resend\|sendgrid" src package.json   # → 0件

# イベント発火箇所
grep -rn "contact_form_submitted\|cta_click" src --include=*.tsx

# 実装履歴
git log --follow --format='%h %ad %s' --date=short -- src/app/contact/_components/InquiryTypeSelector.tsx

# ContentCta の /contact 宛リンク比率（895ブロック / 2,189リンク中 79件）
node -e '...'   # 本文 §3-2 の実測。src 全 .tsx を走査し <ContentCta ... /> 内の href: "..." を集計
```

---

## 7. 【追記 2026-07-29】未集計だった contact 導線イベントの実測値

§3-3 で「`/contact` 到達クリックの実ボリュームは topline に一切載っていない」と記載した空白を、`scripts/fetch-topline.mjs` の `KEY_EVENTS` 拡張（PR #300・main `c2c921d`）で埋めた。以下は同一クエリ形状での read-only 実API取得値（期間は §3 の topline と同一）。

| イベント | 期間B（6/01-6/28） | 期間A（6/29-7/26） | 前期比 |
|---|---:|---:|---:|
| `contact_form_submitted` | 5 | 5 | 0.0% |
| **`contact_cta_click`** | **11** | **8** | **-27.3%** |
| **`contact_cta_view`** | **2,926** | **2,867** | **-2.0%** |
| **`calculator_cta_click`** | **1** | **9** | **+800.0%** |
| `cta_click` | 39 | 68 | +74.4% |
| `download_completed` | 11 | 3 | -72.7% |

### 7-1. 実ファネル（期間A）

`screenPageViews` 29,702 を起点とすると:

| 段階 | 件数 | 前段からの通過率 |
|---|---:|---:|
| ページビュー | 29,702 | — |
| ContactCtaCard が可視（`contact_cta_view`） | 2,867 | **9.7%** |
| CTAクリック（`contact_cta_click`） | 8 | **0.28%** |
| 外部フォームを開く（`contact_form_submitted`） | 5 | 62.5% |

### 7-2. 事実として言えること

1. **最大の詰まりは「CTAカードが2,867回見られて8回しか押されていない」区間**（0.28%）。`/contact` ページ自体や外部フォームへの受け渡しではなく、その手前にボトルネックがある。
2. **`contact_cta_click` は -27.3% と減少している。** 流入 +46.4%・`cta_click` +74.4% とは**逆方向**。§3-2 のとおり `cta_click` の大半は記事回遊であり、両者は別の動きをしている。
3. **ContactCtaCard は全927ページの91%（845箇所）に設置されているが、可視到達は全PVの9.7%にとどまる。** 記事下部に置かれているため、大半の読者はカードまでスクロールしていない。
4. `calculator_cta_click` は 1→9 と増えているが母数が小さく、傾向として断定できる水準ではない。

※ `contact_cta_view` は IntersectionObserver（threshold 0.5）による1ページ1回の発火。`contact_cta_click` の内訳（`source` 別）は、GA4 カスタムディメンション登録後に取得可能になる（→ §6 C-2 / PR #299）。

---

作成: 2026-07-29 ／ 対象コミット `5baa92e`（§7追記時点 `c2c921d`） ／ 読み取りのみ・コード変更なし
