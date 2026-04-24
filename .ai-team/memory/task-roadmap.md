# タスクロードマップ（命名規則 + 時系列フロー）

**作成**: 2026-04-21（火）朝（EDA 要望により命名体系刷新）
**最終更新**: 2026-04-22（水）20:30（Phase 1 大勝利 + Day 1 計測完了反映）
**目的**: K / L-A などの記号型 ID を、測定 → 改善 → 再測定 → 観測 → 評価 の流れが一目でわかる名前に置き換える

---

## 2026-04-22 時点のステータス概要

- **01〜03 完了**（01 朝基準 / 02E+02F merged / 03 で CLS 退行発見）
- **02E-fix（PR #66 fa28f60）で CLS 0.125→0.000 回復済**
- **08-サイト横断 LCP 構造調査で真因特定**: hydration cost + gtag.js main thread 競合
- **Phase 1（GA lazyOnload、PR #68）で LCP 大改善**: `/` 4.3s→2.2s（想定の 4〜10 倍の効果）
- **04-3日観測 Day 1 完了**（朝 16:03 + 夕 20:18）、Day 2（04-23）朝夕 → Day 3（04-24）朝夕 継続中
- **Phase 2（02G）保留**、Day 2/3 で `/capacity` TBT 400ms+ 再現したら発注確定

---

## 旧 ID → 新タスク名 対応表

| 旧 ID | 新タスク名 | 依頼ファイル | 状態 |
|---|---|---|---|
| J | （対応外・完了） | `tasks/2026-04-21-morning/J-memory-final-sync.md` | ✅ マージ済（commit 23c4e5d） |
| **K** | **01-朝イチ基準計測** | `tasks/2026-04-21-morning/K-psi-morning-baseline.md` | ✅ マージ済（PR #58） |
| **L-A** | **02A-記事リンク絞り込み** | `tasks/2026-04-21-morning/L-A-draft.md` | ⬛ 不採用（01 結果で不要と判定） |
| **L-B** | **02B-画像優先読込** | `tasks/2026-04-21-morning/L-B-draft.md` | ⬛ 保留（LCP 主因は画像ではなかった） |
| **L-C** | **02C-原因深掘り調査** | `tasks/2026-04-21-morning/L-C-draft.md` | ✅ 08-サイト横断 LCP 構造調査として実施 |
| **L-D** | **02D-比較ページ高速化** | `tasks/2026-04-21-morning/L-D-draft.md` | ⬛ 不採用（/compare TBT 135ms で健全） |
| （新規） | **02E-検索機能の遅延化** | PR #62 | ✅ マージ済（squash `7e7d744`、2026-04-21 18:46 JST）、bundle -91% 実証 / CLS 退行後 02E-fix で解消 |
| （新規） | **02E-fix-HeaderSearch skeleton 実寸合わせ** | PR #66 | ✅ マージ済（squash `fa28f60`、2026-04-22 09:00 JST）、CLS 0.125 → 0.000 完全復帰 |
| （新規） | **02F-ScrollTracker 分離** | PR #65（案 A' 採用） | ✅ マージ済（squash `9e9e19a`、2026-04-21 18:46 JST）、Vercel deploy 成功 |
| （新規） | **02G-ヘッダーの server/client 分割** | 未作成（08 調査で Phase 2 として昇格） | 🟡 **保留中**、Day 2/3 で /capacity TBT 400ms+ 再現時に発注確定 |
| （新規） | **03-改善後再計測** | 実施済（2026-04-22 08:31 + 11:11 JST） | ✅ 完了、`/` LCP 4.3s で δ 判定 → **08 発注トリガー** |
| （新規） | **04-3日安定性観測** | 軽量、依頼ファイル不要（簡易コマンド運用） | 🔄 進行中 — Day 1/2/3 完了、2026-04-24 wait-and-see 判定 |
| （新規） | **08-サイト横断 LCP 構造調査** | 2026-04-22 11:30 JST 実施完了 | ✅ 完了（`.ai-team/LCP_INVESTIGATION_08_2026-04-22.md`）、主因特定・Phase 1/2 実装案策定 |
| （新規） | **09-GoogleAnalytics lazyOnload 化**（Phase 1） | （リン直書き依頼） | ✅ PR #68 merged — LCP −1.7〜−2.1s 大勝利 |
| （新規） | **10-PublicHeader server/client 分割**（Phase 2） | 未作成（08 調査からの第二候補、02G を吸収） | 🟡 09 実施後の 03-v2 計測結果次第、M PR、LCP -500ms〜-1.5s 期待 |
| （新規） | **05-SEO中間評価** | 未作成 | ⬜ 2026-05-05 |
| （新規） | **06-SEO本評価** | 未作成 | ⬜ 2026-05-18 |
| （新規） | **07-次バッチ起動** | 未作成 | ⬜ 06 結果で選択肢 I/II/III を決定 |

---

## 時系列フロー（2026-04-22 朝更新版）

```
【2026-04-21（火）】完了
  朝 09:00  │ 01-朝イチ基準計測 ✅（PR #58）
  午前〜夕方 │ 02E（PR #62）/ 02F（PR #65）セットマージ ✅ 18:46 JST
  夕方 18:30│ PSI Before 計測（02E+02F 投入前）✅

【2026-04-22（水）今日】★朝セッション完了
  朝 08:31  │ 03-改善後再計測 ✅
           │   → 02E+02F 効果部分確認、CLS 0.125 退行検出
  朝 09:00  │ 02E-fix（PR #66）HeaderSearch skeleton 実寸合わせ ✅
  朝 11:11  │ 再計測（edge cache 2h 後）✅
           │   → CLS 0.000 完全復帰、/ LCP 4.3s 残存で δ 判定
  朝 11:30  │ 08-サイト横断 LCP 構造調査 ✅
           │   → LCP 要素特定、新主因仮説、Phase 1/2 策定
  昼以降    │ 【次発注候補】09-GA lazyOnload（Phase 1、XS）
           │   → Phase 2 (10-PublicHeader 分割、M) は 09 効果判定後

【2026-04-22〜04-24（水〜金）】
  朝・夕   │ 04-3日安定性観測（/ を毎日 2 回計測、LCP 改善幅観測）

【2026-05-05（約 2 週間後）】
           │ 05-SEO中間評価（T-15/16/17 + G-01 の検索流入早期シグナル）

【2026-05-18（約 4 週間後）】★大きな判断ポイント
           │ 06-SEO本評価
           │   ↓
           │ 07-次バッチ起動
           │   ├─ 選択肢 I: Batch A 残り 2 本（G-04 改定カレンダー / G-05 DR 収益モデル）
           │   ├─ 選択肢 II: Batch B キーワード再優先度 + 新規 5 本
           │   └─ 選択肢 III: 想定以下なら A/B リライト
```

---

## 02 採用判断マトリクス（夕方再計測 → 採用する 02、2026-04-21 昼更新）

### PR #61 bundle 解析後の判断フレーム

bundle 解析（PR #61）で判明: articleList (287 KB / 71 KB gzip) が layout chunk に 2 経路で常駐。**02E + 02F は セット運用必須**、単独では layout chunk 削減効果ほぼ 0。

| 夕方 `/` LCP | 採用する 02 |
|---|---|
| < 3.0s | ノイズ確定。02E+02F は **後日マージ候補**（bundle 健全化の観点で有益、緊急性低） |
| 3.0〜4.0s | **02E（PR #62）+ 02F（発注中）を同時マージ** |
| ≧ 4.0s | **02E + 02F + 02B（画像 priority）複合発注** |

### 旧判断基準（01 結果時点、`/articles` TBT 軸、参考用）

| `/articles` 真 TBT | 採用する 02 |
|---|---|
| < 400ms | 02 はすべて不要（04 観測へ） |
| 400〜550ms | **02A（記事リンク絞り込み）** |
| > 550ms | **02C（原因深掘り調査、DevTools 実地）** |

朝計測で `/articles` 真 TBT = 140ms（α 判定）のため **02A/02C は採用見送り**。

並行判定:

| `/compare` 真 TBT | 追加採用 |
|---|---|
| ≤ 400ms | なし（朝計測 135ms で採用見送り） |
| > 400ms | **02D（比較ページ高速化）** |

---

## 命名ルール（今後も踏襲）

1. **2 桁番号で時系列順**を表す（01, 02, 03, ...）
2. **同時並行タスクは A/B/C/D の枝番**で分岐（例: 02A, 02B, 02C, 02D）
3. **動詞 or 目的が名前に入る**（「計測」「絞り込み」「優先読込」など、業務内容が一目でわかる）
4. **旧 ID（K / L-A 等）は廃止せず本ファイルで対応表を維持**（過去ログ・コミット・既存依頼ファイルとの照合用）
5. **既存の依頼ファイル名（`K-psi-morning-baseline.md` 等）はリネームしない**。発注時はファイルパスで指定、ロードマップ上の呼称だけ新名を使う

---

## 各タスクの 1 行サマリ

| 新タスク名 | 一言要約 |
|---|---|
| 01-朝イチ基準計測 | 14 PR の成果が本物かキャッシュ同値か、真の数字を取る |
| 02A-記事リンク絞り込み | `/articles` 各カードの記事リンク 3→2 で DOM 減量（TBT 対策） |
| 02B-画像優先読込 | LCP 要素に `priority` 付与、非 LCP 画像は lazy 最適化 |
| 02C-原因深掘り調査 | Chrome DevTools Performance で実 JS タスクを観察・根本原因特定 |
| 02D-比較ページ高速化 | `/compare` に content-visibility 横展開（`/articles` の成功パターン） |
| 02E-検索機能の遅延化 | HeaderSearch を `dynamic({ ssr: false })` 化（PR #62）。02F と同時マージ完了、bundle -91% 実証済 |
| 02E-fix-skeleton 実寸合わせ | PR #62 merge 後 08:31 計測で CLS 0.125 退行検出 → loading fallback skeleton を実 HeaderSearch とピクセル一致 → CLS 完全復帰（PR #66） |
| 02F-ScrollTracker 分離 | ArticleScrollTracker から articleList 全件 import を除去（案 A' TS module 生成、PR #65）。02E と同時マージ済 |
| 02G-ヘッダーの server/client 分割 | 08 調査で **10-PublicHeader 分割（Phase 2）に昇格・統合**。02G として独立計画は廃止 |
| 03-改善後再計測 | ✅ 完了（2026-04-22 08:31 + 11:11 JST）、`/` LCP 4.3s で δ 判定 → 08 発注トリガー |
| 04-3日安定性観測 | 04-22〜24 朝夕で `/` を計測、Perf 維持確認 |
| 08-サイト横断 LCP 構造調査 | ✅ 完了、LCP 要素特定（3 URL 全て hero p テキスト）、新主因仮説策定（hydration re-pinning + gtag） |
| 09-GA lazyOnload 化（Phase 1） | Script strategy を `afterInteractive` → `lazyOnload`、gtag.js の FCP→LCP 窓内競合解消 |
| 10-PublicHeader server/client 分割（Phase 2） | Server Component 化（nav 静的）+ 軽量 Client（active link のみ）、hydration 範囲縮小 |
| 05-SEO中間評価 | GSC で T-15/16/17 + G-01 の早期シグナル確認、弱ければ追加施策前倒し |
| 06-SEO本評価 | GSC 本計測、Batch A の成果を数値で最終評価 |
| 07-次バッチ起動 | 06 結果で Batch A 残り / Batch B / A/B リライトから選択 |

---

## 02E/02F/02G の詳細（夕方シナリオ C 向け事前策定、LCP_HYPOTHESIS_2026-04-21_MORNING.md 参照）

### 02E-検索機能の遅延化（最優先、シナリオ B/C 共通）

- **変更**: `src/components/PublicHeader.tsx` で `HeaderSearch` を `dynamic(() => import("./search/HeaderSearch"), { ssr: false })` に変更
- **効果**: 270KB の articles.ts + 57 sub-imports + 24KB fuse.js を全ページ bundle から分離、検索アイコンクリック時に初めて読み込む
- **期待**: モバイル LCP −500ms〜−1.5s
- **PR サイズ**: S（1 ファイル、~10 行）
- **リスク**: 検索ボックスの表示が一瞬遅れる（Suspense fallback で制御）

### 02F-記事データの軽量 import（シナリオ C）

- **変更**: `src/components/analytics/ArticleScrollTracker.tsx` から `articleList` 全件 import を除去
- **代替案 A**: pathname 正規表現で「記事ページっぽい形式」を判定（`/^\/[a-z][a-z0-9-]+$/`）、精度より bundle 削減を優先
- **代替案 B**: build-time で `public/static/article-slugs.json` を生成、fetch で取得
- **期待**: LCP −200〜−400ms
- **PR サイズ**: S（1〜2 ファイル、~30 行）
- **リスク**: 正規表現案だと article-slug 外の 1 階層ページ（例: `/about-this-site`）も記事扱いになる → 無駄な event 発火程度、害は限定的

### 02G-ヘッダーの server/client 分割（シナリオ C、02E/F でも LCP 不足時）

- **変更**: `src/components/PublicHeader.tsx` を以下に分割
  - `PublicHeader.tsx` (Server): ロゴ、nav リスト、静的リンク
  - `HeaderInteractive.tsx` (Client): usePathname に依存する active 判定、trackEvent
- **効果**: 初期 HTML に nav 構造が入り、hydrate 前でも視覚的に完成
- **期待**: LCP −500ms〜−1.5s（02E/F との重複効果あり、合算時は二重カウント注意）
- **PR サイズ**: M（2〜3 ファイル、~80 行）
- **リスク**: active 状態のハイライトが hydrate 後に一瞬遅れる

### 複合シナリオ C の見込み

02E + 02F + 02G で LCP 4.5s → 2.5〜3.5s レンジに到達の可能性。Good 基準（2.5s 未満）到達には 02B（画像 priority）も加えた**4 本同時投入**が必要な可能性あり。

---

## 参照の優先順位

新名を使う場面:
- EDA との会話、チャットでの状況共有
- 本ロードマップ内での記述
- 新規作成する依頼ファイル（今後）

旧 ID が残る場所:
- 既存の依頼ファイル名（`K-psi-morning-baseline.md`、`L-A-draft.md` 等）
- 既にマージ済みのコミットメッセージ・PR タイトル
- `tasks/2026-04-21-morning/README.md` の現行記述
- `pending-tasks.md` の既存記述（次回更新時に新名併記を検討）

**どちらの名前でも意味が通じるよう、本ファイルの対応表を参照の基盤にする。**
