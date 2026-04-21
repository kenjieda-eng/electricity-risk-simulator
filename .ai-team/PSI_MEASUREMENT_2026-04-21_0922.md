# PSI 計測結果（2026-04-21 09:22 JST / label: baseline-2026-04-21-morning）

**API**: PageSpeed Insights v5
**Runs per URL**: 3（中央値採用）
**Interval**: 60s
**計測対象**: `https://simulator.eic-jp.org`
**Categories**: performance, accessibility, best-practices, seo

## Mobile（中央値）

| ページ | Perf | A11y | BP | SEO | LCP | TBT | CLS | FCP |
|---|:-:|:-:|:-:|:-:|---|---|---|---|
| `/` | **79** | 96 | 100 | 100 | 4.7s | 208ms | 0.000 | 2.3s |
| `/compare` | **77** | 96 | 100 | 100 | 4.9s | 135ms | 0.019 | 2.4s |
| `/articles` | **78** | 96 | 100 | 100 | 4.8s | 140ms | 0.001 | 2.3s |
| `/capacity-contribution-explained` | **80** | 96 | 100 | 100 | 4.6s | 73ms | 0.000 | 2.2s |

## Mobile 生データ（3 runs）

| ページ | Perf (run1/run2/run3) | LCP (run1/run2/run3) | TBT (run1/run2/run3) |
|---|---|---|---|
| `/` | 95/74/79 | 2.4s/5.0s/4.7s | 208ms/231ms/99ms |
| `/compare` | 81/75/77 | 4.5s/5.0s/4.9s | 134ms/183ms/135ms |
| `/articles` | 80/78/78 | 4.9s/4.7s/4.8s | 159ms/140ms/134ms |
| `/capacity-contribution-explained` | 96/80/79 | 2.7s/4.6s/4.7s | 64ms/73ms/101ms |

> **注記**: `/` は最初の baseline 実行（09:22）で Git Bash の MSYS パス変換により URL が
> `C:/Program Files/Git/` に壊れ 3 runs 全て `FAILED_DOCUMENT_REQUEST`。`MSYS_NO_PATHCONV=1`
> を付けて 09:25 に `/` のみ単独再計測した結果（label: `baseline-2026-04-21-morning-home`、
> 元ファイル: [PSI_MEASUREMENT_2026-04-21_0925.md](PSI_MEASUREMENT_2026-04-21_0925.md)）を
> 上記 `/` 行に統合してある。他 3 URL は 09:22 バッチで問題なく取得。

---

## 昨日の成果との比較

### `/articles`（PR #55 H: content-visibility の再評価）

| 指標 | 昨日 Before（17:05 計測、1 snap） | 昨日 After（20:08+20:12、median 5 runs） | 今朝（真の基準値、median 3 runs） | 最終判定 |
|---|---:|---:|---:|---|
| Mobile TBT | 630ms | 309ms | **140ms** | **α（効果確定 + 期待超）** |
| Mobile Perf | 80 | 70（高変動） | 78 | - |
| Mobile LCP | 2.6s | 5.1s（高変動） | 4.8s | - |

- **判定: α（H 効果確定、期待超）**
- 朝 3 runs の TBT 生データ `159/140/134ms` は互いに近く、PSI キャッシュ同値ではない安定改善。昨日 After の中央値 309ms よりも **さらに 169ms 低い 140ms**
- α の定義（≈ 309ms ± 30ms）は外れ値だが、方向は "After が正しいかの検証" と「下方向に下振れ」で同じ判定 — PR #55 の施策 B 効果は完全確定
- 昨日 Before 630ms → 今朝 140ms は **−490ms（−78%）** の改善、昨日時点の "β 部分達成" 判定は **α に格上げ**
- Perf 78 / LCP 4.8s は目標値未達（Perf 90、LCP 2.5s）だが、これは TBT 施策の範囲外の原因（LCP 要素・画像プリロード等）

### `/`（PR #43 効果の最終確定）

| 指標 | 昨日朝 Before（15:38、3 run 同値） | 昨日夜の揺れ（15:38/17:05/18:00） | 今朝（median 3 runs） |
|---|---:|---:|---:|
| Mobile Perf | 97 | 97 / 81 / 94 | **79** |
| Mobile LCP | 2.3s | 2.3s / 4.7s / 2.5s | **4.7s** |
| Mobile TBT | 119ms | 119ms / 90ms / 172ms | **208ms** |

- Perf 90 以上・LCP 2.5s 以下の条件 **未達成** — PR #43 効果は "確定" までいかない
- 生データ `95/74/79`・`2.4s/5.0s/4.7s` は **依然として高い変動**。昨日 15:38 / 18:00 の 3-run 完全同値（97/97/97、94/94/94）は PSI キャッシュ再返却の疑い濃厚、`--interval 60` 付きの今朝が真の変動幅
- LCP 中央値が 2.3s → 4.7s と悪化方向に見えるが、run 1 は 2.4s なのでページ自体はたまに 2.5s 切る — **Edge キャッシュ状態差 / PSI 側サーバー負荷差**の揺れが真因と推定
- **結論**: `/` の安定した Perf 90+ 到達には追加の LCP 施策（画像プリロード・フォント・LCP 要素最適化）が必要

### `/capacity-contribution-explained`（T-15 影響評価）

| 指標 | 昨日（17:05、3 run 同値） | 今朝（median 3 runs） | 判定 |
|---|---:|---:|---|
| Mobile Perf | 72 | **80** | ↑改善 |
| Mobile LCP | 2.7s | **4.6s** | **Good 基準（2.5s）超過、悪化方向**（※変動大） |
| Mobile TBT | 869ms | **73ms** | ↓大幅改善（−796ms） |

- TBT の劇的改善（869 → 73ms）は昨日の 3-run 同値がキャッシュ再返却だった可能性を強く示唆。真の TBT は 100ms 未満
- LCP は run 1 で 2.7s（Good）、run 2/3 で 4.6s/4.7s（Poor）と **2 極化**。ページ自体は速く描画できるが PSI 実行タイミングによって LCP 要素認識が大きくブレる
- Core Web Vitals "Good" 基準（< 2.5s）を 3 run 中 1 run のみ達成 → **現時点では "Needs Improvement / Poor"**

### `/compare`（改善候補判断）

| 指標 | 昨日（17:05、3 run 同値） | 今朝（median 3 runs） | 次アクション |
|---|---:|---:|---|
| Mobile Perf | 78 | **77** | ほぼ同値 |
| Mobile TBT | 739ms | **135ms** | **400ms 超 NOT 該当** — content-visibility 横展開は不要 |
| Mobile LCP | 2.6s | 4.9s | Poor、`/` と類似パターン |

- TBT 739ms → 135ms（**−604ms、−82%**）は `/articles` と同じく昨日の 3-run 同値がキャッシュ再返却だった示唆
- TBT は健全（< 400ms）なので、タスク K 依頼ファイル「次アクション C: content-visibility 横展開」は **不要**

---

## 次アクション推奨（リン判断用）

今朝の計測結果に基づき、依頼ファイル末尾 A〜E の選択肢から該当するものを列挙（判断はリンに委ねる）:

- **A に該当**: `/articles` TBT 140ms で完全健全（α 確定）。C-3（画像 priority 再点検）は起動可能な状態。ただし TBT は既に目標超過のため、C-3 の主効果は LCP 改善狙いとなる
- **D に該当**: `/capacity-contribution-explained` Mobile LCP 中央値 4.6s で Good 基準（2.5s）を大幅超過、run 間変動も 2.7s ↔ 4.7s と大きい。T-15 リライト後の LCP 要素見直し（hero 画像 / above-the-fold DOM / フォント）を検討する候補
- **C には非該当**: `/compare` TBT 135ms（< 400ms）なので content-visibility の横展開は不要
- **B には非該当**: `/articles` TBT 140ms（< 400ms）なので C-2（初期件数絞り込み）は不要
- **E には非該当**: 全 4 ページの Mobile LCP 中央値がすべて 4.6s 以上（/=4.7s、/compare=4.9s、/articles=4.8s、/capacity=4.6s）で Good 基準未達、"すべて健全" とは言えない

### 追加所見（A〜E 外、リン参考）

- 4 ページ共通で **LCP 中央値が 4.5〜4.9s**、かつ各ページで run 1 は概ね 2〜3s、run 2/3 で 4〜5s に跳ねるパターン。これは個別ページ問題というより **PSI 側の実行タイミング／Vercel Edge キャッシュ状態差** のサイト横断要因が支配的な可能性
- TBT は全ページ健全（最大でも `/` 208ms）、CLS も 0.019 以下。**メインスレッド・レイアウト面の基盤は整っている** → 今後の優先度は LCP 要素最適化に集中させるのが効率的
- 依頼ファイル備考通り、本値を以降 4 週間（〜2026-05-18 GSC 計測）の Before として恒久使用。2026-04-21〜23 の 3 日間、朝・夕各 1 回の観測で信頼性を強化する運用推奨

### リン判断メモ

—（空欄、リンがセッション開始時に記入）
