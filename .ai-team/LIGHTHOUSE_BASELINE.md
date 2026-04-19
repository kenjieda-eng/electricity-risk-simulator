# Lighthouse ベースライン（2026-04-19 計測）

**計測手法**: Lighthouse CLI v12.8.2（Chrome ヘッドレス / 本番 URL を直接クロール）
**戦略**: mobile（主軸 / Moto G Power 相当, 4G throttling）/ desktop（参考 / 1350x940, 10 Mbps throttling）
**URL**: 本番ドメイン `https://simulator.eic-jp.org/`
**担当**: Frontend-Dev（S1-07）

> 備考: 当初計画では Google PageSpeed Insights API v5 を使用予定でしたが、キーレス共用プロジェクト（project 583797351490）の日次クォータが計測開始時点で既に枯渇していたため、ローカル Chrome + Lighthouse CLI v12.8.2 に切り替えて計測を実行しました。Lighthouse エンジン自体は PSI と同じものです。

---

## Mobile スコア

| ページ | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS | FCP |
|--------|:-:|:-:|:-:|:-:|---|---|---|---|
| `/` | **98** | 96 | 100 | 100 | 2.2 s | 110 ms | 0 | 1.6 s |
| `/simulate` | **69** | 96 | 100 | 100 | 4.9 s | 510 ms | 0.01 | 1.3 s |
| `/compare` | **82** | 96 | 100 | 100 | 4.5 s | 170 ms | 0.02 | 1.2 s |
| `/articles` | **77** | 100 | 100 | 100 | 3.2 s | 590 ms | 0.01 | 1.3 s |
| `/journey` | **83** | 92 | 100 | 100 | 3.8 s | 260 ms | 0 | 1.2 s |

## Desktop スコア（参考）

| ページ | Performance | Accessibility | Best Practices | SEO | LCP | TBT | CLS | FCP |
|--------|:-:|:-:|:-:|:-:|---|---|---|---|
| `/` | **98** | 96 | 100 | 100 | 1.2 s | 10 ms | 0.003 | 0.3 s |
| `/simulate` | **98** | 96 | 100 | 100 | 1.2 s | 0 ms | 0.003 | 0.3 s |
| `/compare` | **100** | 96 | 100 | 100 | 0.6 s | 0 ms | 0.015 | 0.3 s |
| `/articles` | **99** | 100 | 100 | 100 | 0.9 s | 30 ms | 0.003 | 0.3 s |
| `/journey` | **99** | 92 | 96 | 100 | 0.9 s | 0 ms | 0.003 | 0.3 s |

> Desktop では全ページが Performance 98〜100 で合格圏。モバイル体感が次スプリント以降の主戦場になる。

---

## 改善優先度（Mobile が対象）

しきい値判定: **Performance < 80** もしくは **LCP > 2.5s** を超えたページを優先度順に並べた。

### P0 — `/simulate`（Perf 69 / LCP 4.9s / TBT 510ms）

最も深刻。LCP/TBT ともに「Poor」閾値を超えており、シミュレーター本体の初期体験が悪い。

1. **Reduce unused JavaScript**（削減見込み 59 KiB / 300 ms）— 初期描画で不要なチャンクをクライアントに送っている。Chart.js / react-chartjs-2 の遅延読み込み、未使用ポリフィルの除去を検討。
2. **Avoid serving legacy JavaScript to modern browsers**（削減見込み 10 KiB / 150 ms）— レガシー構文向けトランスパイル（core-js 等）が modern build に混入。Next.js の `browserslist` を見直し、ES2020+ ターゲットへ引き上げる。
3. **Preconnect to required origins**（削減見込み 340 ms）— Supabase / GA / 広告系オリジンへの `<link rel="preconnect">` を `<head>` で明示。
4. **Minimize main-thread work**（合計 2.9s）— ハイドレーション時の重い初期計算（リスクスコア計算・グラフ初期化）を `requestIdleCallback` や動的 import で分割。
5. **LCP element が 4,930ms**（ヒーロー画像・見出しカードなど）— LCP 要素を特定し `priority` / `preload` を付与、または SSG で初期マークアップを軽量化。

### P1 — `/articles`（Perf 77 / LCP 3.2s / TBT 590ms / DOM 1,244 要素）

TBT が 5 ページ中ワースト、DOM 肥大も顕著。カテゴリハブ内の大量カードが原因。

1. **Avoid an excessive DOM size**（1,244 要素）— カテゴリ×記事カードを初期レンダーで全件出している。`折りたたみ` / `見る件数絞り込み` / Intersection Observer で仮想化。
2. **Reduce JavaScript execution time**（1.3s）+ **Minimize main-thread work**（3.5s）— Client Component 化している箇所を Server Component に戻せないか再点検（CLAUDE.md の方針「基本すべて Server Component」に合わせる）。
3. **Reduce the impact of third-party code**（290 ms main-thread block）— GA/広告系タグの defer/lazy 化。
4. **Reduce unused JavaScript**（93 KiB / 150 ms）。
5. **Avoid serving legacy JavaScript**（10 KiB / 150 ms）。

### P2 — `/journey`（Perf 83 / LCP 3.8s）

Performance は 80 を超えているが、LCP が 3.8s と「Needs Improvement」域。

1. **Reduce unused JavaScript**（113 KiB / 300 ms）— 最大の改善余地。
2. **Preconnect to required origins**（300 ms）— 外部フォント/計測タグへの事前接続。
3. **Minimize main-thread work**（2.3s）— ステップ可視化の初期描画コストを削減。
4. **LCP element が 3,790ms** — ジャーニー先頭のヒーロー/見出しカードを優先描画。
5. Accessibility 92 も他ページより低い。コントラスト/ARIA 属性の見直しを A11y 改善タスクに積んでおく。

### P3 — `/compare`（Perf 82 / LCP 4.5s）

Performance は 80 台だが LCP が 4.5s と大きい。

1. **Reduce unused JavaScript**（106 KiB / 600 ms）— ワースト級の unused JS。比較テーブル用の重いライブラリを遅延化。
2. **Preconnect to required origins**（340 ms）。
3. **Avoid serving legacy JavaScript**（10 KiB / 150 ms）。
4. **Minimize main-thread work**（2.3s）— 比較ロジックの初期計算を ISR/SSG へ寄せる。
5. **LCP element が 4,470ms** — 比較テーブル見出し / ContactCtaCard の描画優先度を上げる。

### 対象外 — `/`（Perf 98 / LCP 2.2s）

Mobile でも全カテゴリが良好。CLAUDE.md のトップページ方針どおり Server Component 中心で軽量に保たれている。現状維持で良い。

---

## 共通して効く改善 3 点（スプリント 1〜2 の骨子）

以下 3 つは複数ページで同時に効くため、Frontend-Dev のバックログ最優先候補として提案する:

1. **`next.config.ts` の `modularizeImports` + `browserslist` 調整**で legacy JS を 10 KiB/150 ms 単位で全ページ削減。
2. **Chart.js / react-chartjs-2 の dynamic import 化**（現状 `/simulate` `/compare` `/journey` の 3 ページに効く）。
3. **Supabase / GA / フォント への `<link rel="preconnect">` を `layout.tsx` に集約**（全ページで 300〜340 ms の短縮）。

---

## 生データの保管場所（再現用）

ローカルの Lighthouse JSON は `/tmp/lh/*.json`（モバイル5 + デスクトップ5 = 10 ファイル）に保存。リポジトリには含めていない。再計測する場合は以下を実行:

```bash
# 例: /simulate の mobile 計測
npx lighthouse@12 "https://simulator.eic-jp.org/simulate" \
  --output=json --output-path=./simulate_mobile.json \
  --only-categories=performance,accessibility,best-practices,seo \
  --form-factor=mobile --screenEmulation.mobile=true \
  --chrome-flags="--headless=new --disable-gpu" \
  --quiet --max-wait-for-load=60000
```
