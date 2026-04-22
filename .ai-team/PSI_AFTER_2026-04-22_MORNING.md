# PSI After 計測（02E+02F マージ後 / 2026-04-22 朝）

**計測日時**: 2026-04-22 08:31〜08:37 JST
**label**: `morning-after-2026-04-22` / `morning-after-2026-04-22-home`
**条件**: PSI API v5, Mobile, 3 runs × `--interval 60s`
**対象**: `https://simulator.eic-jp.org`
**前提**:
- 最終 merge: 2026-04-21 18:46 JST（SHA `9e9e19a` — perf(02F) ArticleScrollTracker）
- Edge cache 安定化: 約 14 時間経過
- 昨夕 Before: `.ai-team/PSI_MEASUREMENT_2026-04-21_1832.md` / `_1836.md`

**実行コマンド**:
```
node scripts/psi-baseline.mjs --label morning-after-2026-04-22 --runs 3 --interval 60 \
  --strategy mobile --urls /,/articles,/capacity-contribution-explained
```
> Git Bash の MSYS path 変換で `/` が `C:/Program Files/Git/` に化けて run 失敗。
> `/` のみ `https://simulator.eic-jp.org/` で再計測（label: `morning-after-2026-04-22-home`）。

---

## サマリー表（Mobile 中央値 / vs 昨夕）

| URL | Perf | LCP (median) | TBT (median) | CLS (median) | vs 昨夕 Perf | vs 昨夕 LCP | vs 昨夕 TBT | vs 昨夕 CLS |
|---|:-:|---|---|---|---|---|---|---|
| `/` | **80** | 4.5s | 150ms | 0.125 | +5 | −0.4s | −67ms | **+0.125 ⚠️** |
| `/articles` | **81** | 2.2s | 258ms | 0.129 | −5 | −0.3s | −167ms | **+0.128 ⚠️** |
| `/capacity-contribution-explained` | **71** | 5.1s | 162ms | 0.125 | −10 | **+2.2s ⚠️** | −171ms | **+0.125 ⚠️** |

**昨夕 Before 参照**:
| URL | Perf | LCP | TBT | CLS |
|---|:-:|---|---|---|
| `/` | 75 | 4.9s | 217ms | 0.000 |
| `/articles` | 86 | 2.5s | 425ms | 0.001 |
| `/capacity-contribution-explained` | 81 | 2.9s | 333ms | 0.000 |

---

## 生データ（3 runs）

| URL | Perf (run1/run2/run3) | LCP (run1/run2/run3) | TBT (run1/run2/run3) |
|---|---|---|---|
| `/` | 78 / 88 / 80 | 4.5s / 1.9s / 4.5s | 150ms / 329ms / 68ms |
| `/articles` | 88 / 81 / 75 | 1.6s / 2.2s / 4.6s | 258ms / 513ms / 126ms |
| `/capacity-contribution-explained` | 76 / 70 / 71 | 4.7s / 5.1s / 5.1s | 159ms / 203ms / 162ms |

分散所見:
- `/` と `/articles` は run 間ブレが大きい（LCP 幅 1.6〜4.6s）。中央値は「しぶい側」を採っている。
- `/capacity-contribution-explained` は 3 runs とも LCP 4.7〜5.1s で安定的に高値 → 真に悪化している可能性が高い。

---

## 判定（`/` LCP 基準）

判定フレーム:
- < 2.5s → 02E+02F 完勝（α）
- 2.5〜3.5s → 部分効果、02B 追加検討
- 3.5〜4.0s → 効果限定、02G or DevTools 調査
- **≧ 4.0s → bundle 外主因、根本再調査** ← **該当**

### `/` LCP median = 4.5s：**bundle 外主因と判定**

02E（HeaderSearch dynamic import）+ 02F（articleList 全件 import 除去）は **TBT には明確に効いた**（217ms → 150ms, −67ms、run3 は 68ms）が、**LCP は 4.5s のままで 4.0s を超えた**。つまり `/` の LCP ボトルネックは JS bundle サイズ/パース時間ではなく、他の要因に依存している可能性が高い。

候補:
1. **Hero 画像の優先度/サイズ** — LCP 要素が画像で、`priority` や `sizes` が適切でない
2. **Font の表示ブロッキング** — Google Font or next/font の取得遅延
3. **Supabase 初期 fetch** — シミュレーション回数の取得が LCP paint を遅延させている可能性
4. **Chart.js の initial paint 干渉** — CSR 時にレイアウトを占有
5. **CLS 由来の LCP 再計算** — 後述の CLS 急悪化と連動して LCP 要素が入れ替わっている可能性

---

## 副次的発見: **CLS が 3 URL 一斉に悪化**（0.000 → 0.125〜0.129）

| URL | Before CLS | After CLS | 差分 |
|---|---|---|---|
| `/` | 0.000 | 0.125 | +0.125 |
| `/articles` | 0.001 | 0.129 | +0.128 |
| `/capacity-contribution-explained` | 0.000 | 0.125 | +0.125 |

**3 URL でほぼ同値の +0.125 増分は、グローバル要素（PublicHeader / Footer / GoogleAnalytics など layout.tsx 配下）が原因である強い示唆**。02E（HeaderSearch dynamic import）が layout を占有する際に、lazy load された `HeaderSearch` の表示タイミングでヘッダー下部が押し下げられている可能性が最有力。

→ 02E の dynamic import に `loading` placeholder（同じ高さの skeleton）を渡していないか、あるいは SSR を `ssr: false` にしているなら layout reservation が効いていない可能性。

---

## 各 URL 所見

### `/` ― 部分改善だが LCP 主因は bundle 外
- TBT −67ms（217→150ms）は 02E+02F の期待効果どおり。
- LCP 4.5s は「やや改善したが 4.0s を超えたまま」= **bundle 外の施策が必要**。
- CLS 0.125 は新規退行。

### `/articles` ― TBT は大勝、LCP 横ばい、Perf score は下落
- TBT −167ms（425→258ms）は **02F の ArticleScrollTracker 最適化が明確に効いた**（`/articles` は全記事を scroll 対象にしているため）。
- LCP 2.2s 中央値は改善扱いだが、run1 1.6s / run3 4.6s と不安定。中央値 2.2s は Good 境界。
- Perf 86→81 の下落は CLS +0.128 の影響が最大と推定。

### `/capacity-contribution-explained` ― LCP 真悪化（要精査）
- LCP 2.9s → 5.1s (+2.2s) は run 3 本すべてで 4.7〜5.1s と一貫。偶発ノイズではない。
- TBT −171ms（333→162ms）は改善。
- **02E+02F は個別記事ページには直接関係しないため、この退行は別要因**。
  - 候補: Tailwind v4 / Next.js 16 のキャッシュ挙動変化、CLS 0.125 由来の paint 再計算、記事本文内の画像最適化。

---

## リン側への引き継ぎ事項

1. **`/` LCP 4.5s ≥ 4.0s → bundle 外主因**。02G（Chart.js defer）よりも **Hero / Font / Supabase 初期 fetch / LCP 要素特定**（Chrome DevTools Performance で実測）を優先すべき。
2. **CLS 全 URL +0.125 退行は layout.tsx 経由の全体退行**。02E の HeaderSearch dynamic import に skeleton placeholder を追加するか、レイアウトリザーブを効かせる対応が候補。
3. **`/capacity-contribution-explained` LCP 真悪化（+2.2s）は別調査ライン**。02E+02F 起因ではないため、切り分けが必要。
4. TBT はすべての URL で改善 → **02E+02F は TBT 削減という観点では期待どおり動いた**。ただし Perf score は CLS 悪化に引きずられ、総合では横ばいか軽微退行に見える。

---

## 注意事項

- **本ファイルは未コミット**（タスク指示どおり）。リン側で判定確定後に memory sync PR に統合される予定。
- 参照ファイル:
  - Before: `.ai-team/PSI_MEASUREMENT_2026-04-21_1832.md`（/articles, /capacity-contribution-explained）
  - Before: `.ai-team/PSI_MEASUREMENT_2026-04-21_1836.md`（/）
  - 本 After raw: `.ai-team/PSI_MEASUREMENT_2026-04-22_0831.md` + `.ai-team/PSI_MEASUREMENT_2026-04-22_0835.md`
