# 運用知見メモ（AI チーム協働のオペレーション記録）

**目的**: Cowork（リン）+ Claude Code + EDA の 3 者協働で得られた運用知見・失敗回避パターンを蓄積。同じ問題を次回も踏まないための備忘録。

**更新**: 新知見が出たらこのファイルに追記。恒久的に参照される。

---

## 1. Cowork サンドボックスの git 操作制約

### 2026-04-21 朝に判明

**現象**:
- Cowork の Linux サンドボックスから `git log` / `git status` が `fatal: your current branch appears to be broken` で失敗
- `git status --short` は動くが、`AM`（Added + Modified）状態が大量に出て不安定
- サンドボックスから直接 `git push origin main` もブロックされる（harness 側の permission hook）

**原因仮説**:
- Windows/Linux 間のファイル権限差異（755 vs 777、改行コード、ファイルロック）
- `rwx------` 権限が全ファイルに付与される副作用
- サンドボックスの FUSE マウントが git index と同期しない瞬間がある

**運用上の回避策**:

1. **Cowork（リン）はファイル編集のみ実施**（Edit/Write ツール）
2. **git commit / push は EDA のローカル Git Bash または Claude Code 経由**で実行
3. Cowork が `git status` / `git log` を走らせて異常状態が出ても **心配不要**、ファイル編集結果はローカルディスクに反映されている

### 禁止事項

- Cowork から `git add` / `git commit` / `git push` を試みない（失敗するか、部分的にしか反映されない）
- サンドボックスの git 差分を信じて「変更あり」と判断しない（`AM` 大量表示はサンドボックス固有の誤認）

---

## 2. Cowork サンドボックスの外部ネットワーク制約

### 2026-04-21 朝に判明

**現象**:
- `curl https://simulator.eic-jp.org/articles` → HTTP 403（`blocked-by-allowlist`）
- `mcp__workspace__web_fetch` → `Host "simulator.eic-jp.org" is not on the network allowlist`

**理由**: サンドボックスのネットワーク許可リストが npm/pypi/GitHub/Anthropic 系に限定されている。本番サイト・Google API・その他外部ドメインは原則ブロック。

**許可されているドメイン**:
- registry.npmjs.org, pypi.org, github.com, objects.githubusercontent.com
- archive.ubuntu.com, security.ubuntu.com, crates.io
- playwright.download.prss.microsoft.com
- *.anthropic.com, claude.com, *.claude.com
- business.enechange.jp（競合サイト、競合分析用に許可されている）
- **www.googleapis.com**（2026-04-23 判明、PSI API 呼び出しが Cowork 直接で動作）

**運用上の回避策**:

1. **本番 HTML の目視確認が必要な場合**: EDA の Windows 環境から curl / ブラウザで確認、結果を Cowork に共有
2. **PSI API 呼び出し**: **Cowork 直接で可能**（2026-04-23 Day 2 朝計測で確認済）。ただし chunked 実行が必要（§9 参照）
3. **競合サイト調査**: business.enechange.jp は許可されているので Cowork 直接 fetch 可能

### 例外対応

Team/Enterprise 管理者が Settings → Capabilities で追加ドメインを許可可能。現状は必要性が薄いので未対応。

---

## 3. PR #59 パターン: Cowork ローカル main → 新ブランチ PR 化

### 2026-04-21 朝に確立

**状況**:
- Cowork セッション中に EDA が Claude Code に「複数ファイル変更を main に commit + push」を依頼
- Claude Code が **ローカル main に直接 commit** した（仕様）
- push の段階で harness 側の permission hook が `git push origin main` をブロック

**解決手順（Claude Code 実施）**:

```bash
# 1. 現在位置を確認（ローカル main に 3 コミット先行）
git log --oneline -5

# 2. 新ブランチを現在の HEAD で作成
git branch chore/memory-morning-lin-2026-04-21

# 3. main を origin/main まで巻き戻し（--mixed で working tree の非コミット変更は保全）
git reset --mixed origin/main

# 4. 新ブランチに checkout
git checkout chore/memory-morning-lin-2026-04-21

# 5. リモートに push（ブランチの push は harness で許可される）
git push -u origin chore/memory-morning-lin-2026-04-21

# 6. PR 作成
gh pr create --title "..." --body "..."
```

**ポイント**:
- `git reset --mixed` で commit は消えるが working tree の変更は保全される
- 新ブランチが先に commit を持っているので、working tree の変更は**追加**として残る
- 3 コミットの時系列的意味を残したい場合は **rebase-merge 推奨**、1 本にまとめてよい場合は **squash-merge**

**このパターンの適用条件**:
- Cowork から memory/docs のみ変更（コード変更なし）の作業が多い
- 都度 PR を挟むオーバーヘッドを避けたいが、harness の安全柵は外したくない
- Claude Code が main への直接 push で止まった場合の**定番リカバリー手順**として確立

---

## 4. 計測運用ルール（2026-04-20〜22 で確立、6 項目）

夜セッションで確定、朝セッションでも堅く守られた。ルール 6 は 2026-04-22 夕 Day 1 計測で判明し追加:

1. **PR マージ後 30 分以内は PSI 計測しない**（Edge cache-bust 直後の cold hit 回避）
2. **`--runs N` で同値 = キャッシュ疑う**（`scripts/psi-baseline.mjs --interval 60` 必須）
3. **真の中央値は時刻をまたぐ**（朝 / 夕 / 翌朝で比較）
4. **異常値 1 回で騒がない**（2〜3 時間後に再計測してから判断）
5. **Before 値も疑う**（Before/After 比較は両側とも `--interval 60` 付き複数 runs で取った値を使う。過去の 1 snapshot 値は参考程度）
6. **3 run サマリは中央値ベースで読む**（2026-04-22 夕に判明）。`/articles` 朝 TBT 376ms は 3 run のうち run3=559ms が外れ値だったことが夕計測で発覚、真値は 176ms。平均値は外れ値に引きずられるので、今後のサマリは **median (中央値)** を既定にする。外れ値の原因として考えられるのは: run 間のネットワーク変動、gtag.js の非決定的な実行タイミング、PSI サーバ側の負荷変動。
7. **r1 は PSI 側 cold-run バイアスの可能性があるため単独で信頼しない**（2026-04-23 Day 2 朝に判明）。Day 2 朝計測で 3 URL 中 2 URL の r1 LCP が r2/r3 より 1.4〜1.7s 高い現象が発生（`/` r1=3.7s / r2=2.2s / r3=2.2s、`/articles` r1=3.9s / r2=2.5s / r3=2.4s）。平均値 2717ms に対し median 2228ms が真値を捕捉。完全に一律パターンではなく、`/capacity` では r1 がむしろ最良値だったケースもあるため「r1 を自動除外」はしない。**r1 が突出している場合は median で救われるので、run 数は 3 以上必須**。

これらのルールを朝セッションで適用し、**LCP 4.5〜4.9s が 1 回計測で出た段階で 02B を即発注する**という早計判断を回避できた。夕方再計測で真偽判定する運用に切り替え。

---

## 8. 時間帯差の読み方（2026-04-22 Day 1 計測で判明）

### 2026-04-22 夕に判明

**現象**:
- Phase 1 After 計測（16:03）: `/` LCP 2.2s, `/capacity` LCP 2.9s
- Day 1 夕計測（20:18）: `/` LCP 2.4s（+0.2s）, `/capacity` LCP 3.3s（+0.4s）
- 同一日内、4 時間差で URL により +0.2〜+0.4s の時間帯差

**原因仮説**:
- **夕方はトラフィックピーク**で Vercel Edge / PSI サーバの混雑が増す
- **朝は CDN キャッシュが fresh**、夕方は staleness が混在
- PSI サーバ側の同時計測負荷が時間帯で変動

**解釈の原則**:

1. **朝計測は best-case、夕計測は real-world に近い**と仮定して両方取る
2. 「Phase X 直後の計測」だけで判定せず、**翌朝で定常化確認**してから確定
3. Good 基準（LCP < 2.5s）に対して朝 2.2s / 夕 2.4s なら「朝は確実 Good、夕は境界」の両論併記で評価

**再発予防**: Phase 判定は必ず **朝 + 夕 + 翌朝の 3 点以上**で中央値を取ってから確定する。単発の勝利宣言は禁物（リン自身が 16:03 で「大勝利」と言いかけ、20:18 で冷静化された事例あり）。

---

---

## 5. タスク命名の運用（task-roadmap.md 参照）

2026-04-21 朝にリニューアル:

- **旧**: K / L-A / L-B など記号型 ID
- **新**: 01-朝イチ基準計測 / 02A-記事リンク絞り込み など業務内容が見える名称

### 運用原則

- 会話・チャット・新規ドキュメント → **新名を使う**
- 既存のコミットメッセージ・PR タイトル・既マージ依頼ファイル → **旧 ID のまま残す**（履歴の整合性）
- 新旧の対応は `task-roadmap.md` で一元管理

### 新規タスク発行時の手順

1. 命名ルール（2 桁番号 + 枝番 + 動詞/目的）に従って新名を決める
2. `task-roadmap.md` の対応表に 1 行追加
3. 依頼ファイルは新名で作成（例: `03-improvement-after-measurement.md`）
4. 旧名を使う必然性がない限り、新名で発注する

---

## 6. AI チーム協働のロール分担（2026-04-21 朝で明確化）

| メンバー | 責務 | 具体的な作業 |
|---|---|---|
| **リン（Cowork）** | PM-Lead、戦略・意思決定 | タスク設計、メモリ管理、仕様判定、リスク評価、発注文作成 |
| **Claude Code** | 実装・計測実行 | コード変更 PR、PSI 計測、git 操作、Vercel デプロイ確認 |
| **EDA** | 意思決定者、外部連携 | 最終承認、PR マージ、外部施策（pps-net.org / eic-jp.org）、Git Bash 操作 |

### 協働の基本パターン

1. リンが依頼文を作成（`.ai-team/tasks/YYYY-MM-DD-time/`）
2. EDA が Claude Code に依頼文パスを渡す
3. Claude Code が実装 → PR 作成 → EDA が確認・マージ
4. マージ後、リンが結果を memory に反映

### 異常系の対応

- Claude Code がスコープ逸脱しそうな場合: 依頼文に「スコープ逸脱禁止」を明記、EDA が止めて再発注
- サンドボックス git が壊れている場合: リンはファイル編集のみ、commit は Claude Code or EDA
- 計測値が異常な場合: ルール 4「1 回で騒がない」に従い、夕方再計測

---

## 7. Next.js 16 + Turbopack での bundle-analyzer 互換性

### 2026-04-21 昼に判明（PR #61 作業中）

**現象**:
- Next.js 16 は Turbopack がデフォルトビルダー
- `@next/bundle-analyzer`（webpack plugin）は Turbopack と非互換 → `ANALYZE=true npm run build` ではレポート生成されない
- Next.js 16 の build 出力は従来の「Size / First Load JS」表を表示しない仕様変更あり

**回避策**:

1. **webpack builder を明示指定してビルド**
   ```bash
   NODE_OPTIONS=--max-old-space-size=8192 ANALYZE=true npx next build --webpack
   ```
   - `--webpack` フラグで強制的に webpack ビルド
   - OOM 対策で `--max-old-space-size=8192`（デフォルト 2GB では足りない）
   - ビルド時間は Turbopack の 3〜5 倍になるので analysis 目的のみ

2. **chunk サイズの直接測定**
   - `.next/static/chunks/` を直接調査
   - raw サイズ: `ls -la .next/static/chunks/app/layout-*.js`
   - gzip サイズ: `gzip -c .next/static/chunks/app/layout-*.js | wc -c`
   - 内容検証: `grep -c 'publishedAt' .next/static/chunks/app/layout-*.js` で articleList 混入を検出

3. **代替ツール（将来検討）**
   - Turbopack 公式の bundle 分析ツールを待つ
   - Chrome DevTools の Coverage タブで実使用 JS を実測

**教訓**:
- Next.js 16 の bundle 解析は従来パイプラインが壊れている
- `--webpack` flag で旧来の分析は当面可能
- 定期計測には `.next/static/chunks/` の直接 size 記録が最速

### PR #61 で判明した構造的 insight

- articleList (287 KB / 71 KB gzip) は layout chunk に **2 経路で混入**
  - (a) PublicHeader → HeaderSearch → searchIndex
  - (b) ArticleScrollTracker が直接 import
- **両方を同時に剥がさないと layout chunk から剥離できない**
- 02E（HeaderSearch 遅延化）単独では effect ほぼゼロ → **02E + 02F セット運用必須**
- 今後 client component から巨大 data module を import する際は、必ず bundle 解析で layout chunk 混入を確認する

### PR #62 + #65 で実測された削減効果（02E + 02F 同時適用）

| 指標 | Before（main） | After（02E+02F） | 削減 |
|---|---:|---:|---:|
| layout chunk raw | 287 KB | **24 KB** | −263 KB（−91%）|
| layout chunk gzip | 71 KB | **8 KB** | −63 KB（−89%）|
| `publishedAt` 混入 grep | 499 | 0 | articleList 完全剥離 |

articleList は dynamic chunk `52192.*.js`（282 KB）に隔離され、HeaderSearch の dynamic import 時のみロード。**02F 単独適用では layout chunk 287 → 311 KB と逆に微増**（ARTICLE_SLUGS 分 +15 KB 追加）し、セット運用が必須であることを実測で裏付け。

### 巨大データ list を client component から切り離すパターン（PR #65 案 A'）

記事 slug のような一覧データを client component が使用するケースで、次の順で検討:

- **案 A（build-time JSON 生成）**: `scripts/generate-*.mjs` で JSON を public 配下に出力 → client から fetch
  - **欠点**: fetch の async timing が複雑、初期表示までのラグ
- **案 B（正規表現判定）**: pathname パターンで擬似判定
  - **欠点**: false positive（例: `/about-this-site`, `/simulate` 等の 1 階層ページ）、event 誤発火
- **案 A'（TS module 生成、推奨）**: `scripts/generate-*.mjs` で `.ts` module を自動生成 → client は import
  - 例: `src/generated/article-slugs.ts` に `export const ARTICLE_SLUGS = [...]` を出力
  - commit 対象に含める（build-time 生成、差分レビュー可能）
  - **利点**: fetch 不要、精度ロスゼロ、bundle 追加はスリム配列分のみ（PR #65 では +15 KB）、tree-shake 可能、TypeScript 型推論が効く
  - **欠点**: 生成 script の保守が必要、source と generated の 2 重管理

**今後の類似ケース**: 業種別記事一覧 / category slug list / scenario ID list 等、client から slug のみ必要な用途は**案 A' を第一候補**に。

**運用ポイント**:
- `package.json` の `prebuild` に生成 script を追加しておくと、build 前に自動同期
- 生成ファイルは `// THIS FILE IS AUTO-GENERATED` コメントを先頭に明記、手編集禁止を明示
- `.gitignore` には入れず commit 対象にする（レビューで差分を確認できる、CI で再生成すると差分 0 になるはず）

---

## 8. PR 運用パターン: PR #60 変則ケース（先行 PR マージ済み + 追加編集あり）

### 2026-04-21 午前に判明

**状況**:
- PR #59 が既に EDA の手動 rebase-merge でマージ済
- ローカル working tree には「PR #59 の内容 + それ以降の追加編集（ops-notes.md 新規作成等）」が積み重なっていた
- 単純に `git checkout main` だと衝突で失敗

**回避策（Claude Code 実施、PR #60）**:

```bash
# 現ブランチをリネーム（chore/memory-morning-lin-2026-04-21 → -v2）
git branch -m chore/memory-morning-lin-2026-04-21-v2

# local main を origin/main（PR #59 merge 済み）に強制更新
git branch -f main origin/main

# HEAD を main に移動、working tree は保持（--mixed 相当）
git reset main

# この時点で:
# - ブランチ: main
# - HEAD: origin/main（PR #59 込み）
# - working tree: PR #59 以降に追加された編集分のみ（差分として見える）

# 新ブランチ作成して push
git checkout -b chore/memory-morning-lin-2026-04-21-v2
git add [対象ファイル]
git commit -m "..."
git push -u origin chore/memory-morning-lin-2026-04-21-v2
gh pr create ...
```

**ポイント**:
- `git checkout main` の衝突回避に `branch -f` + `reset` の組み合わせが有効
- working tree を保持しつつ HEAD 位置だけ動かせる
- stash を使わないのでコンフリクト解決作業が不要

**このパターンの適用条件**:
- 先行 PR が既にマージ済み、かつローカルに「先行 PR + 追加編集」が積まれている
- stash pop 時のコンフリクト地獄を回避したい

---

## 9. 追記ルール

このファイルは**新しい知見が出たら追記**する。過去の記載を消さない（学習の履歴）。

新知見の記載テンプレート:

```markdown
## N. 知見のタイトル

### YYYY-MM-DD （いつ判明したか）

**現象**: 何が起きたか
**原因**: 推定される原因
**解決策 / 回避策**: 具体的な対応
**再発予防**: このファイルに記録する意義
```

---

## 10. Skeleton の dynamic import 時は実寸合わせ必須（2026-04-22 朝に判明）

### 現象

PR #62（02E: HeaderSearch `dynamic({ ssr: false })` 化）merge 後、2026-04-22 朝 08:31 After 計測で 3 URL すべて **CLS 0.000 → 0.125 に退行**。JS bundle は −91%、TBT 改善、LCP 微改善という勝ちパターンの中で CLS のみが Core Web Vitals の Good 閾値（< 0.1）を突破して Poor 域に転落。

### 原因

`PublicHeader.tsx` の `dynamic` loading fallback skeleton が実寸より小さく、HeaderSearch の実コンポーネントに置換わる瞬間に HeroSection 付近で layout shift が発生:

```tsx
const HeaderSearch = dynamic(() => import("./search/HeaderSearch"), {
  ssr: false,
  loading: () => (
    <div className="...">
      <div className="h-4 w-4 shrink-0" />      // skeleton 寸法
      <div className="h-5 w-28 sm:w-40 lg:w-52" />
    </div>
  ),
});
```

- skeleton の wrapper は `px-2.5 py-1.5` （padding 小）
- 実 HeaderSearch は input + 装飾で高さが ~40px と skeleton の 32px より厚い
- 差 8px × ヘッダー幅の layout shift が 3 URL 全部で 0.125 に帰着（同一 shift、同じ場所）

### 解決（PR #66、merge SHA `fa28f60`）

skeleton の padding・高さ・wrapper dimensions を実 HeaderSearch と一致させる（`py-1.5` → `py-[7px]`、子要素の高さ調整）。CLS 0.125 → 0.000 完全復帰。

### 再発予防ルール

**`dynamic({ ssr: false, loading: ... })` で上部要素を置換する場合、loading fallback は実コンポーネントとピクセル完全一致させること**。特に:

1. Header / HeroSection / above-the-fold の近接要素
2. wrapper の `padding` / `border` / `height` / `width` すべて
3. 内部要素も親の高さに影響しないよう調整

計測前チェックリスト:
- [ ] skeleton と実コンポーネントを DevTools で並べて overlap、差分 0 を確認
- [ ] LCP element が skeleton 直下にある場合は特に要注意（paint 再認定のリスク）
- [ ] PSI After 計測で CLS を必ず観測項目に含める

### 関連 PR / メモ

- PR #62: 02E 原版（CLS 0.125 退行）
- PR #66: 02E-fix（CLS 完全復帰、`fa28f60`）
- 計測ドキュメント: `PSI_AFTER_2026-04-22_MORNING.md`（08:31 計測で退行検出）→ `PSI_AFTER_2026-04-22_MORNING_REMEASURE.md`（11:11 再計測で完全復帰確認）

---

## 11. LCP 問題はサイト横断の構造問題（2026-04-22 朝に判明）

### 現象

02E + 02F + 02E-fix を 2026-04-21〜22 で投入し、以下を達成にもかかわらず LCP は 4.3〜4.7s レンジから動かない:

- layout chunk 287KB → 24KB（−91%）
- CLS 0.125 → 0.000（完全復帰）
- TBT 改善（50〜80%減）

3 URL（`/`, `/articles`, `/capacity-contribution-explained`）で **FCP 2.2s が一致**、**LCP - FCP ギャップ 2s も一致**。URL 固有要因ではなく **layout.tsx 層で共通発生するボトルネック**。

### 08 調査での判明事項（`.ai-team/LCP_INVESTIGATION_08_2026-04-22.md`）

1. **LCP 要素は 3 URL すべて「ヒーローカードのリード文 `<p>`」**（画像ではない）
   - 昨日仮説の「ロゴ or 画像 priority 不足」は全否定
   - 画像 priority / next/image 最適化は効果なし
2. **TTFB 0〜10ms で無罪**、サーバー応答は完璧
3. **render-blocking resources ゼロ**
4. **支配要因は `elementRenderDelay` 1.4〜8.5s**（LCP 要素発見 → 最終 paint までの遅延）
5. **新主因仮説**: PublicHeader の `"use client"` root layout 全体 hydration が mobile 4x CPU slowdown 下で 1-2s 要し、hydration 時の style 再計算で LCP 要素が paint 再認定される
6. **連動原因**: gtag.js (`afterInteractive`、152KB、unused 41%) が FCP→LCP 窓内で main thread 競合

### 昨日（2026-04-21）仮説との差分

| 昨日仮説 | 解消状況 | 残存寄与 |
|---|---|---|
| HeaderSearch 経由の重量 bundle (270KB) | ✅ 02E で dynamic 化 | ほぼゼロ |
| ArticleScrollTracker の articleList 全件 import | ✅ 02F で 案 A' 採用 | ほぼゼロ |

→ **昨日の主因 2 候補はいずれも解消済**。LCP 残存は別次元（hydration re-pinning + gtag）。

### 推奨アクション（09 以降）

- **Phase 1 (S)**: GoogleAnalytics を `lazyOnload` 化（1 ファイル 2 行、LCP -200〜-500ms 期待）
- **Phase 2 (M)**: PublicHeader を Server/Client 分割（Server nav + Client active link、LCP -500ms〜-1.5s 期待）
- **Phase 3 (観測)**: PSI 再計測で α/β/γ 判定

### 運用ルール更新

- **計測運用ルール 6 を追加**: 「バンドル削減 PR で LCP が改善しない時は、LCP 要素の種類（text/image）・elementRenderDelay・TTFB を PSI API の `lcp-breakdown-insight` / `largest-contentful-paint-element` audit で必ず確認してから次手を決める」
- **初動診断 TemplateScript**: `scripts/psi-diagnostic.mjs` を今後の LCP 調査で最初に走らせる（LCP element / TTFB / mainThreadWork / longTasks / unusedJS を一括取得）

---

---

## 12. Cowork サンドボックスでの PSI chunked 実行

### 2026-04-23 Day 2 朝計測で確立

**現象**:
- Cowork の bash ツールは 45s タイムアウト上限。`scripts/psi-baseline.mjs --runs 3 --interval 60 --strategy mobile --urls "/, /articles, /capacity"` は合計約 15 分かかり、単一 bash 呼び出しでは完走不可
- `nohup node scripts/... &` で backgrounded プロセスに切り替えても、bwrap の `--unshare-pid` により bash 呼び出し境界でプロセスが kill される（確認済）

**解決策: chunked 実行パターン**

1 URL × 1 run を 1 つの bash 呼び出しで実行し、出力を共通 JSONL ファイルに append していく。自然な tool-call turnaround が同一 URL の run 間 60 秒以上の間隔を確保する（script 既定 `--interval 60` と同等以上）。

最小実装（psi-one.mjs 相当）:

```js
// 1 PSI API call per invocation, append to JSONL
// Usage: node psi-one.mjs <url> <run_label> <state_file>
// 詳細は .ai-team/（outputs）参照
```

実行順序（Day 2 朝実績）:

| 開始時刻 | URL | run | elapsed |
|---|---|---|---|
| 09:42:52 | `/` | r1 | 14.5s |
| 09:43:12 | `/articles` | r1 | 26.1s |
| 09:43:41 | `/capacity` | r1 | 24.2s |
| 09:44:16 | `/` | r2 | 15.8s（r1 から +84s）|
| 09:44:35 | `/articles` | r2 | 24.3s（r1 から +83s）|
| 09:45:02 | `/capacity` | r2 | 34.9s（r1 から +81s）|
| 09:45:44 | `/` | r3 | 16.1s（r2 から +88s）|
| 09:46:03 | `/articles` | r3 | 25.6s（r2 から +88s）|
| 09:46:31 | `/capacity` | r3 | 16.1s（r2 から +89s）|

9 bash 呼び出し、合計 ~4 分で完走。同一 URL の run 間隔は 80〜90 秒で、script 既定 `--interval 60` を超える。

**出力形式**:

- chunked 実行では `PSI_MEASUREMENT_YYYY-MM-DD_HHMM.md`（script 自動生成）が作られない代わりに、aggregator で median 計算して直接 `PSI_04_*.md` を書く
- raw data は `/tmp/day2-results.jsonl` に JSONL 形式で保存、再計算・再出力が容易

**適用条件**:

- Cowork から直接 PSI API 呼び出しが必要
- Claude Code が使えない / 応答待ちが許容できない
- EDA のローカル環境が別作業中

**非適用条件**:

- 標準の `PSI_MEASUREMENT_*.md` フォーマットを厳密に維持したい場合 → Claude Code に投げる
- `--strategy both`（mobile + desktop 両方）が必要な場合 → 実行回数が 2 倍になりコスト高

**ops-notes §2 との関係**: §2 で「PSI API は Claude Code 側で」と書かれていたが、2026-04-23 時点で Cowork から `www.googleapis.com` へのアクセスが動作することが確認された。**今後の計測はどちらでも可、ただし記録フォーマット重視なら Claude Code**。

---

## 13. Lessons 20260424（PR #74〜#76 作業中に発生した 3 ミスの恒久反省）

### 2026-04-24 夕に確立

PR #74/#75/#76 のリリース過程で発生した 3 件の操作ミス。再発防止のため恒久ルール化する。

### lesson-20260424-01: local working tree ≠ origin/main

**現象**: 14:00 の状況確認時、PR #72（`8aadbd2`）でマージ済の「内部リンク 9 本」を、ローカル working tree を grep して「実コード上 0 件」と誤報告。

**原因**:
- Cowork サンドボックスの local main が origin/main から遅れていた（または stash 復元前の状態）
- `grep` 対象が local working tree のみで origin/main の状態を反映していなかった

**恒久ルール**:
1. PR の反映確認は **必ず `git log origin/main -- <file>`** または `git show origin/main:<path>` で行う
2. local working tree の grep だけで「未反映」と判定しない
3. 乖離発生時のチェック手順:
   - local working tree で grep
   - **必ず origin/main で再確認**
   - 差異があれば「どちらが正か」を判定（通常は origin/main が真）

### lesson-20260424-02: HTML 検証は `grep -c` ではなく `grep -o ... | wc -l`

**現象**: ビルド済 HTML（minified）で `grep -c '<a href="/kenji-eda"'` の結果が「0」になり「リンクが存在しない」と誤判定。

**原因**:
- `grep -c` は **行数**カウント
- minified HTML は 1 行に圧縮されているため、複数 occurrence があっても「1 行」または「0 行」しか返らない

**恒久ルール**:
- ❌ `grep -c 'pattern'`（行数カウント、minified HTML で過小）
- ✅ `grep -o 'pattern' | wc -l`（occurrence カウント、正確）
- HTML / 1 行 JSON / minified asset の検証時は **必ず `-o`** で occurrence をカウントする

### lesson-20260424-03: 検証 URL は事前に「該当機能を持つか」を grep 確認してから発注

**現象**: kenji-eda 強化 PR の検証発注文で、AuthorBadge を持たない URL を「AuthorBadge 検証対象」として 3 本指定し、Claude Code から「該当 URL に AuthorBadge は配置されていません」とフィードバックを受けた。

**原因**:
- 「59 記事に AuthorBadge を配置した」という発注文を書く前に、対象 URL リストを作っていなかった
- 検証 URL は「過去に CTR 計測した URL」を機械的に流用してしまった

**恒久ルール**:
- 「N 記事に X を配置した」と発注文に書く際は、**必ず N 記事のリストを source 側で grep して作成してから検証 URL を選ぶ**
- 例: AuthorBadge は `import AuthorBadge` を grep してインポート済ファイルを抽出 → 該当 slug を取得 → 検証 URL リスト化

### 関連ドキュメント
- `.ai-team/HANDOVER_2026-04-25.md` §「⚠️ 運用上の注意事項」
- `.ai-team/memory/pending-tasks.md` §「2026-04-24 16:00 リン診断ミスの訂正」

---

## 14. 初期 CTR は身内クリックで汚染される（2026-04-24 夕に確立）

### 現象

サイト立ち上げ初期（2026-02〜03）の GSC CTR は、関係者のテスト訪問・QA 動線・内部デモ閲覧によって実力以上に底上げされる。

具体的には:
- 2026-01-24〜04-24 の 3 か月分 GSC データで CTR 3.31% / 平均順位 9.0
- うち 4/13 以降の 12 日間（日平均表示 740 に急増した期間）で CTR 7.77% → 2.46% に低下
- これは「順位 9 相応に正規化された結果」であり、低下ではなく **健全化**

### 影響

- 初期 CTR をベースラインにしてリライト効果測定すると、**過大な期待 → 必ず効果なし判定**になる
- title/description リライトの ROI を見誤る

### 恒久ルール

- 実力 CTR は「順位相応」（順位 10 位 ≒ 業界平均 2.5%、Backlinko 2022）
- リライト効果測定は **「一般ユーザー時代の CTR」vs「リライト後 CTR」** で評価
- 身内クリック希釈完了の目安: **日平均表示 500+ を超えた頃**（本件では 4/13 前後）

### 関連ルール
→ §15 R-01（データの信頼可能期間）と組で運用

---

## 15. GSC / Analytics データの信頼可能期間（R-01〜R-03、2026-04-24 夕に確立）

### R-01: データの信頼可能期間

**2026-03-31 以前のデータは分析ベースラインに使わない**

理由:
- §14 の身内クリック汚染（2026-02〜03 はテスト訪問が多い）
- 表示数が少ないため統計的にも信頼度が低い

**使用可能データの起点**: 2026-04-01 以降
**身内クリック希釈完了の目安**: 日平均表示 500+ を超えた頃（本件では 4/13 前後）

### R-02: 初期 CTR は実力値ではない

- サイト運用 1〜3 ヶ月目の CTR は関係者クリックで底上げされる
- 実力 CTR は「順位相応」（順位 10 位 ≒ 業界平均 2.5%、Backlinko 2022）
- 現在の 2.46% は順位 9.0 相応、**健全な数字**

### R-03: 評価軸の優先順位

1. **平均順位の改善**（9.0 → 7 台目標）
2. **インプレッション拡大**
3. **新規クエリ獲得数**
4. CTR（上位 3 指標の副産物として見る）

理由: 順位 1 つ上がると CTR は業界平均で 1.5〜2 倍になるため、CTR 直接最適化（title/description リライト）より、**順位改善施策**（E-E-A-T / 内部リンク / コンテンツ拡充）の方が費用対効果大。

### 適用範囲

- HANDOVER 系ドキュメントの「過去 3 か月 CTR」を引用する場合: **必ず 2026-04-01 以降ベースに書き直す**
- Batch B 計画書 / Batch C 候補発掘 の KPI 設計時: 順位 → インプレッション → 新規クエリ → CTR の優先順
- 5/5 中間計測 / 5/18 本計測の評価軸はすべて R-03 に準拠

### 関連ドキュメント
- `.ai-team/HANDOVER_2026-04-25.md` §「🧠 必ず守る運用ルール」
- `.ai-team/memory/pending-tasks.md` §「2026-04-24 17:00 EDAさん 提供の重要運用ルール」

---

**最終更新**: 2026-04-25 朝セッション（§13 Lessons 20260424 / §14 初期 CTR 汚染 / §15 R-01〜R-03 追加。前回 2026-04-24 朝: §12 / 計測ルール 6・7 / §2 / §8）
