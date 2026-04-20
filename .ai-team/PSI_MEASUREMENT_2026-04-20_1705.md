# PSI 計測結果（2026-04-20 17:05 JST / label: after-all-2026-04-20-evening）

**API**: PageSpeed Insights v5
**Runs per URL**: 3（中央値採用）
**計測対象**: `https://simulator.eic-jp.org`
**Categories**: performance, accessibility, best-practices, seo

## Mobile（中央値）

| ページ | Perf | A11y | BP | SEO | LCP | TBT | CLS | FCP |
|---|:-:|:-:|:-:|:-:|---|---|---|---|
| `/` | **81** | 96 | 100 | 100 | 4.7s | 90ms | 0.000 | 1.0s |
| `/compare` | **78** | 96 | 100 | 100 | 2.6s | 739ms | 0.000 | 1.2s |
| `/articles` | **80** | 100 | 100 | 100 | 2.6s | 630ms | 0.001 | 1.2s |
| `/capacity-contribution-explained` | **72** | 96 | 100 | 100 | 2.7s | 869ms | 0.000 | 1.7s |

## Mobile 生データ（3 runs）

| ページ | Perf (run1/run2/run3) | LCP (run1/run2/run3) | TBT (run1/run2/run3) |
|---|---|---|---|
| `/` | 81/81/81 | 4.7s/4.7s/4.7s | 90ms/90ms/90ms |
| `/compare` | 78/78/78 | 2.6s/2.6s/2.6s | 739ms/739ms/739ms |
| `/articles` | 80/80/80 | 2.6s/2.6s/2.6s | 630ms/630ms/630ms |
| `/capacity-contribution-explained` | 72/72/72 | 2.7s/2.7s/2.7s | 869ms/869ms/869ms |

## Desktop（中央値）

| ページ | Perf | A11y | BP | SEO | LCP | TBT | CLS | FCP |
|---|:-:|:-:|:-:|:-:|---|---|---|---|
| `/` | **90** | 96 | 100 | 100 | 0.7s | 248ms | 0.000 | 0.5s |
| `/compare` | **91** | 96 | 100 | 100 | 0.9s | 206ms | 0.000 | 0.7s |
| `/articles` | **83** | 100 | 100 | 100 | 0.8s | 373ms | 0.009 | 0.4s |
| `/capacity-contribution-explained` | **88** | 96 | 100 | 100 | 0.8s | 273ms | 0.000 | 0.5s |

## Desktop 生データ（3 runs）

| ページ | Perf (run1/run2/run3) | LCP (run1/run2/run3) | TBT (run1/run2/run3) |
|---|---|---|---|
| `/` | 90/90/90 | 0.7s/0.7s/0.7s | 248ms/248ms/248ms |
| `/compare` | 91/91/91 | 0.9s/0.9s/0.9s | 206ms/206ms/206ms |
| `/articles` | 83/83/83 | 0.8s/0.8s/0.8s | 373ms/373ms/373ms |
| `/capacity-contribution-explained` | 88/88/88 | 0.8s/0.8s/0.8s | 273ms/273ms/273ms |

---

## Before との差分

直接比較可能な PSI 測定は `/` のみ（他 3 ページは本日が PSI 初計測）。

| ページ | Mobile Perf Before → After | Mobile LCP Before → After | Mobile TBT Before → After | 備考 |
|---|---|---|---|---|
| `/` | 97 → **81** (−16) | 2.3s → **4.7s** (+2.4s) | 119ms → 90ms (−29ms) | PR #43 + T-15/T-16/T-17 全マージ後。`/` コード無変更なのに Perf 低下 — 原因調査要。TBT は微改善 |
| `/compare` | (PSI 初計測) | — → 2.6s | — → 739ms | Lighthouse CLI mobile の 93 / 2.5s / 171ms に対し PSI は Perf 78 / TBT 739ms。ツール差あるいは状態差 |
| `/articles` | (PSI 初計測) | — → 2.6s | — → 630ms | Lighthouse CLI mobile の 74 / 3.1s / 673ms と大方整合。**TBT 630ms がタスク C Before 基準値** |
| `/capacity-contribution-explained` | (初計測) | — → 2.7s | — → 869ms | T-15 リライト後。**LCP 2.7s は "Needs Improvement" 境界（Good は < 2.5s）**。本文拡張でやや悪化の可能性 |

## `/capacity-contribution-explained` LCP サマリー（リン次セッション判断材料）

- **Mobile LCP: 2.7s**（"Needs Improvement" 域、"Good" < 2.5s を +0.2s 超過）
- **Desktop LCP: 0.8s**（"Good" 域、問題なし）

Mobile は Core Web Vitals "Good" 基準を僅かに下回るが、本文 FAQ 追加で DOM が増えた影響と推定。SEO 順位への Core Web Vitals 影響はスコア > LCP の順で、Perf 72 でもランキング劣位シグナルとしては小さい。**LCP 改善より T-15 の順位改善効果（2026-05-05 GSC 中間計測）を待ってから判断推奨**。

## リン判断メモ

- `/capacity-contribution-explained` LCP: —（リンが次セッションで記入）
- `/articles`: —（同上、タスク C 優先度維持判断）
- 全体: —（同上、`/` Perf 低下の原因調査要否）

## 注記: `/` Perf 低下について

15:38 PSI 計測（PR #43 直後）: Perf 97 / LCP 2.3s / TBT 119ms（3 runs 同値）
17:05 PSI 計測（本計測）: Perf 81 / LCP 4.7s / TBT 90ms（3 runs 同値）

`/` のコード自体は PR #43 以降変更なし（T-15/T-16/T-17 は他ページへの編集）。TBT は改善方向だが、LCP が 2.3s → 4.7s と 2 倍に悪化している点は要原因調査:
- 本番 Vercel Edge のキャッシュ状態差
- PSI 側のサーバー負荷・測定条件差
- 容量拠出金系内部リンクが `/` から参照先ページへ増えたことによる画像プリロードの変化（プレビュー時のみ）

3 runs 同値で PSI 側ノイズとは言い切れないため、別セッションで `/` 再計測 + DevTools Performance 観察を推奨。
