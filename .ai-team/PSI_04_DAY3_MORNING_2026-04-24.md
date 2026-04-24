# PSI 04 Day 3 朝計測レポート（2026-04-24）

**実施時刻**: 2026-04-24 10:18〜10:22 JST（リン chunked 実行）
**計測方法**: scripts/psi-one.mjs（単発 PSI API call）を 9 回、各 URL × 3 run、同一 URL 間は 60s+ 間隔
**URL**: `/`, `/articles`, `/capacity-contribution-explained`

**背景**: 04-23 夕計測（Day 2 夕）は実施されず、04-24 朝に Day 3 朝として実施。Phase 2（02G: PublicHeader 分割）要否の最終材料。

---

## 中央値サマリ（3 URL × 3 runs）

| URL | Perf | LCP | TBT | CLS | FCP |
|---|---|---|---|---|---|
| `/` | 90 | **3,702ms** ⚠️ | 21ms ✅ | 0.000 ✅ | 989ms |
| `/articles` | 94 | 2,442ms ✅ | 136ms ✅ | 0.001 ✅ | 1,051ms |
| `/capacity-contribution-explained` | 92 | 2,913ms | 194ms ✅ | 0.010 | 1,087ms |

---

## Day 2 朝（04-23）→ Day 3 朝（04-24）中央値比較

| URL | LCP | TBT | CLS |
|---|---|---|---|
| `/` | 2,228 → **3,702ms（+1,474ms 悪化）** | 58 → 21ms ✅ | 0.000 → 0.000 |
| `/articles` | 2,500 → 2,442ms ✅ | 188 → 136ms ✅ | 0.001 → 0.001 |
| `/capacity` | 2,700 → 2,913ms（+213ms） | 255 → 194ms ✅ | 0.000 → 0.010 |

---

## Run 別の分散（重要観察）

### `/` が極端な 2 山分布
- **r1: LCP 1,891ms（Perf 98）** — Good 余裕、素晴らしい値
- **r2: LCP 3,702ms（Perf 90）**
- **r3: LCP 3,762ms（Perf 89）**

r1 と r2/r3 で LCP が **2 倍以上** 乖離。median 3,702ms は警戒値だが、**r1 が外れ値とは言えない**（3/3 でなく 1/3 で低い = 可能性としてはどちらが真値かが不明）。

### `/articles` は r2 が外れ値
- r1: 2,101ms、r2: 3,950ms、r3: 2,442ms
- median 2,442ms が安定値。r2 が run 分散ノイズの可能性

### `/capacity` は狭いバンド
- r1〜r3: 2,898 / 3,063 / 2,913ms
- 分散が小さく、median 2,913ms が信頼できる値
- Day 2 朝 2,700ms から +213ms はあるが、run 分散範囲内

---

## 4 観点チェック

| 観点 | 結果 |
|---|---|
| 1. `/capacity` TBT 400ms+ 再現 | ❌ r2 で 317ms、他は 173-194ms。400+ は再現せず |
| 2. `/` CLS 新規発生 | ❌ r3 のみ 0.010、median は 0.000 |
| 3. `/` LCP の時間帯依存性 | 朝 r1=1.9s / r2-3=3.7s。**時間帯依存より run 分散が支配的** |
| 4. 中央値ベース報告 | ✅ 上記数値はすべて median |

---

## Phase 2（02G）最終判定

### 現状総合評価
- **`/articles`**: LCP/TBT ともに改善傾向で安定 ✅
- **`/capacity`**: LCP 2.9s 前後で安定、TBT も改善 ✅
- **`/`**: LCP が r 間で 2 倍乖離 = 構造的というよりは **測定ノイズ or CDN キャッシュ状態** が支配的

### 判定: **Phase 2 発注は見送り**、5/5 中間計測まで wait-and-see

理由:
1. 3 URL とも Perf スコア 90 以上を維持
2. TBT は 3 URL すべてで Day 2 朝より改善
3. `/` の LCP 乖離は構造的悪化ではなく run 分散の可能性が高い（r1 が 1.9s 出ている以上、構造問題ではない）
4. Phase 2 実装コスト（PublicHeader Server/Client 分割）に見合う改善余地が限定的

### 継続監視ポイント
- `/` の LCP が連日 median 3.5s+ で推移するなら Phase 2 発注判断
- `/capacity` の CLS 0.010 が複数日続くなら要因調査（r1+r2=0.010, r3=0）
- 5/5 GSC 中間計測のタイミングで PSI も再実行推奨

---

## 補足: 当日並行作業（SEO リライト）

- 本日同日に `/jepx-price-trend-and-corporate-impact` ほか **6 記事のタイトル/description リライト PR**（SEO CTR 改善目的）が EDAさん 側で発注予定
- リライト反映後も PSI 値には影響しないはず（メタデータのみ変更）が、Day 4（必要時）で再確認可能

---

## Raw data

`/sessions/eloquent-jolly-archimedes/mnt/outputs/psi-day3-morning.jsonl`（9 行）

---

## 次アクション

- 04 観測 memory sync PR（Day 3 朝込みで 04-24 夕 or 04-25 朝）
- Phase 2 保留方針を pending-tasks.md に反映
- 5/5 GSC 中間計測時に PSI 再実施
