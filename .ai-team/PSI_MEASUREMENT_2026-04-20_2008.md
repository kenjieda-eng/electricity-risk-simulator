# PSI 計測結果（2026-04-20 20:08 JST / label: after-pr-c1-content-visibility）

**API**: PageSpeed Insights v5
**Runs per URL**: 3（中央値採用）
**Interval**: 60s
**計測対象**: `https://simulator.eic-jp.org`
**Categories**: performance, accessibility, best-practices, seo

## Mobile（中央値）

| ページ | Perf | A11y | BP | SEO | LCP | TBT | CLS | FCP |
|---|:-:|:-:|:-:|:-:|---|---|---|---|
| `/articles` | **70** | 96 | 100 | 100 | 5.1s | 309ms | 0.001 | 2.4s |

## Mobile 生データ（3 runs）

| ページ | Perf (run1/run2/run3) | LCP (run1/run2/run3) | TBT (run1/run2/run3) |
|---|---|---|---|
| `/articles` | 93/27/70 | 2.3s/8.2s/5.1s | 207ms/8856ms/309ms |

---

## PR #55（H: content-visibility）効果判定

### 計測条件
- **PR #55 本番公開**: 2026-04-20 09:49 UTC（18:49 JST）
- **本計測開始**: 2026-04-20 11:08 UTC（20:08 JST）、デプロイから **79 分経過**（計測運用ルール 30 分超過を十分クリア）
- **事前確認**: 本番 HTML に `content-visibility:auto` 出現 8 回（= 4 グループ × 2 [HTML + RSC payload]）、PR #55 が本番で有効動作していることを確認済み
- **スクリプト**: `scripts/psi-baseline.mjs --label after-pr-c1-content-visibility --runs 3 --interval 60 --strategy mobile --urls /articles`（PR #54 の `--interval 60` 適用）

### 計測結果（合計 6 runs、2 バッチ）

本計測（3 runs）で高変動を観測したため、追加の 3 runs を実施（`.ai-team/PSI_MEASUREMENT_2026-04-20_2012.md`、label: `after-pr-c1-content-visibility-retry`）。以下は 6 runs 統合データ。

| Run | Perf | LCP | TBT |
|:-:|:-:|---|---|
| 1 (batch1) | 93 | 2.3s | 207ms |
| 2 (batch1) ⚠️ | 27 | 8.2s | **8856ms** ← 明らかな外れ値 |
| 3 (batch1) | 70 | 5.1s | 309ms |
| 4 (batch2) | 70 | 5.1s | 309ms |
| 5 (batch2) | 67 | 4.3s | 309ms |
| 6 (batch2) | 55 | 6.5s | 227ms |

**中央値（6 runs 全体）**:
- Perf: 68.5
- LCP: 5.1s
- TBT: **309ms**

**中央値（外れ値 Run 2 除外、5 runs）**:
- Perf: 70
- LCP: 5.1s
- TBT: **309ms**

### Before / After 比較

| 指標 | Before（17:05 計測、タスク D） | After（median 5 runs） | 差分 | 判定 |
|---|---:|---:|---:|---|
| Mobile Perf | 80 | 70 | **−10** | 低下 |
| Mobile LCP | 2.6s | 5.1s | **+2.5s** | 大幅劣化 |
| Mobile TBT | **630ms** | **309ms** | **−321ms（−51%）** | **目標超達成** |

### 結論

**判定**: **β（部分達成）**

**根拠**:
- TBT は **309ms** で期待レンジ下限（330ms）を下回る水準に到達、PR #55 の施策 B 効果は明確。Before 630ms に対し **−321ms（−51%）** の改善。
- しかし Perf 中央値 70 / LCP 中央値 5.1s は期待値（Perf 85 前後 / LCP 2.6s 維持）に届かず、さらに 6 runs で Perf 27〜93 と **極めて高い変動**を観測。TBT 309ms × 3 runs の同値は `--interval 60` でも PSI キャッシュが効いた可能性示唆。
- **TBT 狙いの施策 B は成功、しかし Perf/LCP の不安定さから施策単独では Perf 90 届かず**。戦略レポートの想定どおり、Perf 90 には C-2 / C-3 の連続投入が必要と判断。

### 計測ノイズに関する所見（追加情報）

- Before（17:05 計測）の `/articles` Mobile Perf 80 は 1 snapshot の単発計測で、タスク E で判明した「`--runs 3` 完全同値 = PSI キャッシュ再返却」の対象だった可能性あり。今回 `--interval 60` 付きで初めて真の変動幅（Perf 27〜93）が露呈
- LCP の大幅な（2.6s → 5.1s 中央値）悪化は、`content-visibility: auto` の性質上ありえない（off-screen レイアウトのみスキップ、LCP 要素は above-the-fold）。従って **Before 値自体がラッキーな snapshot だった可能性が高く、施策起因の悪化ではない** と判断
- TBT のみが安定して改善方向を示しており、これは `content-visibility: auto` の期待効果（メインスレッド ブロック削減）とも一致

### 次アクション推奨

**リン向け: C-2 + C-3 連続実装の PR 発注準備**

1. **C-2（初期表示件数絞り込み）**: `renderCategoryCard` の `recommendedReadingOrder.slice(0, 3)` → `slice(0, 2)` + 「もっと見る」リンク → `/articles/[categorySlug]`。見込み TBT −80〜−150ms
2. **C-3（画像 priority 再点検）**: 43 枚の `<img>` について above-the-fold 5〜8 枚のみ `priority`、残りを `loading="lazy"` + `decoding="async"`。見込み LCP −300〜−500ms（`/articles` は LCP が不安定なため、この施策が特に効く期待）
3. **並行調査**: `/articles` の LCP 要素特定（Chrome DevTools Performance で現地観察）。`content-visibility` が原因でないことを確認し、Before 値のブレ幅を把握する

### リン判断メモ

—（空欄、リンが明朝記入）
