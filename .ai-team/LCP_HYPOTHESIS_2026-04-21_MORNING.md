# LCP 悪化仮説レポート（2026-04-21 朝セッション）

**作成**: リン（PM-Lead）、2026-04-21 09:40 JST
**前提**: 01-朝イチ基準計測（PR #58）で 4 ページ全部 LCP 4.5〜4.9s、run 間変動 2〜5s を記録
**目的**: 夕方 18:00 再計測で LCP 悪化が確定した場合に、即応できる根本原因候補と対策をあらかじめ整理しておく
**スコープ**: 調査のみ、コード変更なし

---

## エグゼクティブサマリー

- **LCP 原因の第 1 候補**: **PublicHeader (use client) が HeaderSearch を経由して全記事データ (270 KB) + fuse.js を全ページの client bundle に入れている**
- **第 2 候補**: **ArticleScrollTracker が articleList を全件 import**（記事ページ以外でも）
- **フォントは無罪**: next/font・@font-face・Google Fonts すべて未使用、系統フォントのみ
- **ロゴ画像も無罪**: 8 KB・priority 指定済み、LCP 押し下げ要因としては小さい
- **夕方 LCP 悪化確定時の即応候補**: 下の「施策優先順位」セクションを参照

---

## 01 計測値（2026-04-21 朝）

| ページ | Mobile Perf | Mobile LCP | Mobile TBT |
|---|---:|---:|---:|
| `/` | 79 | 4.7s | 208ms |
| `/articles` | -（80 近辺） | 4.7s | **140ms（α確定）** |
| `/compare` | 77 | 4.9s | 135ms |
| `/capacity-contribution-explained` | 80 | 4.6s | 73ms |

**共通パターン**: TBT は健全（全 400ms 未満）、LCP が 4 ページ揃って 4.5〜4.9s。run 間変動 2〜5s。

---

## LCP 原因の候補ランキング

### 🔴 候補 1（最有力）: PublicHeader 経由の重量 client bundle

**構造**:

```
app/layout.tsx (Server)
  └─ PublicHeader (use client)  ← 全ページ展開
      └─ HeaderSearch (use client)
          └─ searchIndex.ts  ← 全記事＋全シナリオ集計
              ├─ articleList (270 KB / 534 エントリ)
              ├─ articleCategories
              ├─ EMERGENCY_SCENARIO_SERIES
              ├─ OIL_SCENARIO_SERIES
              ├─ GAS_SCENARIO_SERIES
              ├─ MATERIALS_SCENARIO_SERIES
              ├─ FOOD_SCENARIO_SERIES
              ├─ FX_DOUBLE_EFFECT_SERIES
              ├─ INDUSTRY_MIDDLE_CATEGORIES
              └─ MONTHLY_RETROSPECTIVE_ITEMS
          └─ fuse.js (24 KB min / 57 KB dev)
```

**なぜ LCP を押し下げるか**:

1. Next.js は `"use client"` コンポーネントを初期 HTML と別にクライアント側で hydrate する
2. PublicHeader は root layout で展開 → 全ページで上記の全ツリーを bundle に含める
3. モバイル 3G 相当の PSI 計測環境では、**JS の download + parse + execute が LCP を遅らせる**
4. LCP 要素（テキストヒーロー or logo）自体は速いのに、hydrate 完了前は layout shift で確定しない → LCP として記録される時間が遅れる

**裏付け**:
- `articles.ts` 270 KB / 4,426 行（534 記事エントリ）
- `fuse.js` 24 KB (min) / 57 KB (dev)
- PSI Mobile は CPU slowdown 4x、Network Slow 4G 相当 → **250 KB の JS parse に数秒かかり得る**

**run 間変動 2〜5s との整合**: JS parse 時間は CPU 負荷により大きく揺れるため、PSI の仮想環境で同時に他タスクが走るかどうかで ±2〜5s の変動は説明可能。

### 🟡 候補 2（有力）: ArticleScrollTracker の articleList 全件 import

**構造**:

```
app/layout.tsx
  └─ ArticleScrollTracker (use client)  ← 全ページ展開
      └─ articleList (270 KB) ※SLUG_SET 作成用
```

**なぜ問題か**:

- ArticleScrollTracker は**記事ページでしかスクロール追跡しない**（`SLUG_SET.has(slug)` チェック）
- しかし `articleList` 全件 import は**全ページで発生**
- `SLUG_SET` を作るためだけに 534 件の配列を全部 bundle に詰めている

**候補 1 との関係**: 同じ articleList を参照するので、候補 1 と bundle 重複は発生しないが、**ツリーシェイクで削れない**要因になっている。

### 🟢 候補 3（弱・低優先）: BackToTop / WebSiteJsonLd / 他 use client

- `BackToTop`: 純粋な scroll listener、依存は React の useEffect のみ、影響小
- `WebSiteJsonLd`: Server Component、影響ゼロ
- `GoogleAnalytics`: `strategy="afterInteractive"` + Suspense で遅延、影響小

### ⚪ 無罪確定

- **フォント**: next/font・@font-face・Google Fonts 未使用。系統フォント依存で LCP への影響ゼロ
- **ロゴ画像**: `/logo.png` 8 KB、`priority` 指定済み、小サイズ
- **画像一般**: PublicHeader 外に priority 画像は現状ゼロ、候補は多いが LCP が全ページ揃って遅い事実を説明しきれない
- **CSS**: `globals.css` は Tailwind 本体＋40 行程度、軽量
- **Footer**: Server Component、影響ゼロ

---

## 夕方 LCP 判定シナリオ別の施策優先順位

### シナリオ A: 夕方 LCP < 3.0s → **朝はノイズ確定**

- 02 群すべて不要、04-3日観測継続
- 本レポートはアーカイブ、アクションなし

### シナリオ B: 夕方 LCP 3.0〜4.0s → **中程度悪化、一部改善が望ましい**

最優先: **02E-新規「HeaderSearch 遅延化」依頼** を作成

- `HeaderSearch` を `dynamic(() => import(...), { ssr: false })` で遅延ロード
- 検索アイコンのみ server-rendered、クリック時にバンドル読み込み
- 1〜2 ファイル、~20 行変更、S サイズ PR
- 期待効果: モバイル LCP −500ms〜−1.5s（bundle 圧縮 & parse 時間短縮）

### シナリオ C: 夕方 LCP ≧ 4.0s → **真の悪化、複合施策**

優先順位:

1. **02E: HeaderSearch 遅延化**（上記 B と同じ）
2. **02F（新規）: ArticleScrollTracker の articleList import 軽量化**
   - SLUG_SET 作成を build-time で行い、`static/slug-set.json` として public 配信 → fetch で取得
   - または: pathname matching を正規表現 (`/^\/[a-z-]+$/`) で判定し、articleList import 不要化
   - 1 ファイル、~30 行、S サイズ PR
   - 期待効果: LCP −200〜−400ms
3. **02B: 画像優先読込**（L-B 下書き既存）
   - LCP 要素が画像と判明した場合のみ
   - 期待効果: LCP −300〜−500ms
4. **02G（新規）: PublicHeader 自体の分割**
   - 検索機能を別 client component に切り出し（02E とセット）
   - header nav は server render、interactivity だけ client 化
   - M サイズ PR
   - 期待効果: LCP −500ms〜−1.5s

**複合シナリオ C での見込み効果**: 02E + 02F で LCP −700ms〜−2s、4.5s → 2.5〜3.8s レンジに到達可能性。Good 基準（2.5s 未満）到達には 02B も合わせて必要な可能性。

---

## 夕方セッションの準備物

### 1. L-B 下書きの補強（今日中、夕方前）

現行 `L-B-draft.md`（02B）は画像 priority 対策が中心。上記候補 1・2 をカバーしきれないため、夕方シナリオ C 確定時は **新規下書き 02E / 02F / 02G** が必要。

**提案**: リンが本日中に `L-E-draft.md` 等を起草しておく（リン作業、20 分）

### 2. PSI API から LCP 要素抽出スクリプトの準備

夕方計測と同時に、以下を走らせて LCP 要素を確定:

```bash
node -e "
const fetch = (await import('node-fetch')).default;
const r = await fetch('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://simulator.eic-jp.org/&strategy=mobile&category=PERFORMANCE&key=' + process.env.PSI_API_KEY);
const j = await r.json();
console.log(JSON.stringify(j.lighthouseResult.audits['largest-contentful-paint-element'].details.items, null, 2));
"
```

これで LCP 要素が **テキスト（h1 等）** か **画像（logo 等）** かが確定し、02B 要否が判断できる。

### 3. 夕方の計測コマンド（既に pending-tasks.md に記載）

```bash
node scripts/psi-baseline.mjs \
  --label evening-2026-04-21 \
  --runs 3 \
  --interval 60 \
  --strategy mobile \
  --urls /,/articles,/capacity-contribution-explained
```

---

## コミット戦略（EDA 作業、夕方まで）

サンドボックスから git commit ができないため、**EDA が Git Bash で下記を順番に実行**:

```bash
cd /c/Users/kenji/OneDrive/デスクトップ/ANAsyumiCursorNext

# 1. task-roadmap.md と MEMORY.md 更新を git 化
git add .ai-team/memory/task-roadmap.md .ai-team/memory/MEMORY.md
git commit -m "chore(memory): add task roadmap with new naming convention (K→01, L→02)"

# 2. pending-tasks.md の朝結果反映を git 化
git add .ai-team/memory/pending-tasks.md
git commit -m "chore(memory): reflect 01 morning results (TBT alpha, LCP pending evening verification)"

# 3. LCP 仮説レポートを git 化
git add .ai-team/LCP_HYPOTHESIS_2026-04-21_MORNING.md
git commit -m "docs(performance): add LCP regression hypothesis for 2026-04-21 evening verification"

# 4. push
git push origin main
```

これで夕方セッション開始時には最新 memory が git/Vercel にも反映済みの状態。

---

## まとめ: 今朝の成果

- ✅ 01-朝イチ基準計測（PR #58）マージ済、`/articles` TBT 140ms で α格上げ確定
- ✅ タスク命名体系リニューアル（task-roadmap.md 作成）
- ✅ pending-tasks.md 朝結果反映
- ✅ LCP 悪化仮説の第 1/第 2 候補を特定（HeaderSearch + ArticleScrollTracker の重量 client bundle）
- ✅ 夕方 LCP 判定シナリオ別の施策優先順位を事前策定
- 🟡 EDA 側 git commit 待ち（上記コマンド実行）
- 🔵 18:00 JST 夕方再計測で LCP 悪化の真偽判定
