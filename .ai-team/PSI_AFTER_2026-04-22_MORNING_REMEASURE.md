# PSI 再計測サマリ（2026-04-22 11:11 JST / 02E-fix 後）

**計測 label**: `morning-remeasure-2026-04-22-02efix`
**生データ**: [PSI_MEASUREMENT_2026-04-22_1111.md](./PSI_MEASUREMENT_2026-04-22_1111.md)
**比較元**:
- `/` → [PSI_MEASUREMENT_2026-04-22_0835.md](./PSI_MEASUREMENT_2026-04-22_0835.md)（08:35 JST）
- `/articles`・`/capacity-contribution-explained` → [PSI_MEASUREMENT_2026-04-22_0831.md](./PSI_MEASUREMENT_2026-04-22_0831.md)（08:31 JST）
- 02E-fix merge: 2026-04-22 09:00 JST（merge commit `fa28f60`）
- edge cache 2時間経過後の再計測

---

## 1. 3URL 中央値比較

| URL | Perf (今朝→11:11) | LCP (今朝→11:11) | TBT (今朝→11:11) | CLS (今朝→11:11) |
|---|---|---|---|---|
| `/` | 80 → **83** (+3) | 4.5s → **4.3s** (-0.2) | 150ms → **88ms** (-62) | **0.125 → 0.000** ✅ |
| `/articles` | 81 → **80** (-1) | 2.2s → **4.4s** (+2.2 ⚠️) | 258ms → **233ms** (-25) | **0.129 → 0.001** ✅ |
| `/capacity-contribution-explained` | 71 → **78** (+7) | 5.1s → **4.7s** (-0.4) | 162ms → **127ms** (-35) | **0.125 → 0.000** ✅ |

---

## 2. 生データ（3 runs 値）

| URL | Perf (run1/2/3) | LCP (run1/2/3) | TBT (run1/2/3) |
|---|---|---|---|
| `/` | 85 / 82 / 83 | 4.2s / 4.4s / 4.3s | 89ms / 88ms / 49ms |
| `/articles` | 80 / 72 / 82 | 4.4s / 4.8s / 4.3s | 233ms / 310ms / 76ms |
| `/capacity-contribution-explained` | 57 / 80 / 78 | 3.2s / 4.7s / 4.9s | 1550ms / 87ms / 127ms |

`/capacity-contribution-explained` run1 だけ TBT=1550ms と突出。PSI lab データのスパイクと推測（中央値 127ms は安定域）。

---

## 3. 観点別判定

### A. CLS（3 URL とも 0.125 → 0.000 復帰目標）→ ✅ **完勝**

| URL | 今朝 CLS | 11:11 CLS | 判定 |
|---|---|---|---|
| `/` | 0.125 | **0.000** | ✅ 完全復帰 |
| `/articles` | 0.129 | **0.001** | ✅ 完全復帰（0.001 は測定誤差域） |
| `/capacity-contribution-explained` | 0.125 | **0.000** | ✅ 完全復帰 |

→ **02E-fix（HeaderSearch skeleton 実寸合わせ）は CLS 退行を完全に解消**。3 URL とも Core Web Vitals の CLS 基準（< 0.1）を大幅に下回り、Good 域に復帰。

### B. `/` LCP（4.5s → 判定閾値）→ ⚠️ **追加余地あり（2.5〜3.5s 未達 / CLS連動効果は限定的）**

- 11:11 中央値: **4.3s**（改善幅 -0.2s のみ）
- 閾値判定: 4.3s は **≧ 4.0s 域** に該当 → **「08調査（bundle 外主因）本格発注」レベル**
- 3 runs とも 4.2〜4.4s と安定高止まり → ノイズではなく構造的ボトルネック
- CLS 連動説（レイアウトシフトによる LCP element 再計測）は部分的のみ成立

### C. `/capacity-contribution-explained` LCP（5.1s → 判定）→ 🔶 **CLS 連動で部分改善、別退行の疑い薄**

- 11:11 中央値: **4.7s**（改善幅 -0.4s）
- run1 3.2s という低値も観測 → キャッシュ温度や CDN 応答で ~1.5s 幅の振れ
- 5.1s → 4.7s の 0.4s 改善は CLS 解消の連動範囲として説明可能
- **「別退行」シナリオは棄却**。この URL は `/` と同じ bundle 外主因の影響下にあると推測

### D. ⚠️ `/articles` LCP 悪化（2.2s → 4.4s, +2.2s）→ 要追加調査

- 今朝 run1=1.6s / run2=2.2s / run3=4.6s とばらつき大 → 今朝の中央値 2.2s が lucky case だった可能性
- 11:11 は 4.4/4.8/4.3 と一貫して高値 → むしろ現在のほうが真値に近い
- CLS 退行とは別次元の問題。`/` と同じ LCP 構造的問題が見えている可能性

---

## 4. 結論 & 次アクション

### 確定事項
1. **02E-fix は CLS 退行を 100% 解消した**。3 URL すべて 0.125 → 0.000 復帰、Core Web Vitals Good 域。
2. **CLS 連動による LCP 改善効果は 0.2〜0.4s 程度**。連動説は部分的に成立するが主因ではない。
3. **`/` LCP 4.3s は ≧ 4.0s 域**。08 調査（bundle 外主因 = サーバー応答・画像・フォント等）の本格発注が必要。

### 推奨次アクション
- ✅ **02E-fix は merge 完了判定**（追加作業不要、CLS 目的達成）
- 🔔 **08 調査スプリント発注**: `/` および `/articles` LCP 4.3〜4.4s の構造的ボトルネック解明
  - 候補調査軸: サーバー応答時間 (TTFB)、LCP element (hero image?) 最適化、critical CSS、フォント loading、Next.js Image 設定
- 🔍 `/articles` LCP は今朝値がノイズだった可能性を前提に、改めて基準値として 4.4s を採用して調査計画を立てる

---

## 5. メタ情報

- 計測時刻: 2026-04-22 11:11 JST
- PSI API: PageSpeed Insights v5 / Strategy: mobile / Runs: 3 / Interval: 60s
- edge cache 2時間安定期経過
- Git Bash MSYS パス変換回避のため全 URL をフル指定（今朝 08:31 の `/` 取得失敗はこれが原因）

**commit は待機中**（このドキュメント含め .ai-team/ 配下の計測ファイル群は未 commit）。
