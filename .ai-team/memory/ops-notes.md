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

## 16. 内部リンク数 grep 計測の落とし穴（Lesson-09、2026-04-28 確立）

### 現象

2026-04-27 に作成した `INTERNAL_LINK_DENSITY_AUDIT_2026-04-27.md` で、内部リンク数の計測に
`grep -c 'href="/'` のみを使った結果、「outgoing 0」と判定された 25 記事のうち **23 記事は実際には 6〜14 本**
の outgoing リンクを持つ健全記事だった。誤検出率 92%。

### 原因

このコードベースの内部リンクは2形式で書かれている:

**形式A：JSX 属性形式**（`<Link>` / `<a>` 直書き）
```tsx
<Link href="/jepx-explained">JEPXとは</Link>
```
→ `grep -c 'href="/'` で検出される。

**形式B：オブジェクトプロパティ形式**（`RelatedLinks` / `ContentCta` の links 配列）
```tsx
<RelatedLinks links={[
  { href: "/jepx-explained", title: "...", description: "..." },
]} />
```
→ `grep -c 'href="/'` では検出されない（`href:` は属性ではないため）。

このサイトでは形式B が形式A を圧倒的に上回り、記事末尾の RelatedLinks が事実上のリンク群の主要部となっている。

### 恒久ルール

**Rule 1：内部リンク計測は 2 形式合算**

```bash
jsx=$(grep -c 'href="/' "$f")
obj=$(grep -cE 'href: *"/' "$f")
total=$((jsx + obj))
```

**Rule 2：監査値が直感に反するときは内訳確認**

「outgoing 0 のはずなのに、ファイルサイズが 17KB ある」のような直感との乖離が出たら、その時点で計測手法を疑う。

### 関連ドキュメント
- `INTERNAL_LINK_DENSITY_AUDIT_2026-04-28_CORRECTED.md`（修正版監査）
- `INTERNAL_LINK_DENSITY_AUDIT_2026-04-27.md`（旧版、方法論欠陥）
- `OPS_NOTES_LESSON_09_2026-04-28.md`（独立ファイル、本セクションに統合済）

---

## 17. CTA コンポーネント 2 系統併存（Lesson-10、2026-04-28 PR #127 で判明）

### 現象

B-19（PR #127）実装時、ハブ系記事（`/posters`, `/manga` など）は `ContactCtaCard`
（src/components/contact/ContactCtaCard）を使用しているのに対し、通常の記事ページは
`ContentCta`（src/components/simulator/ContentCta）を使用していた。

さらに `/data-visualizations` は ContactCtaCard すら無く、`<ComparisonRadar />` 直後・`</main>` 直前に
直接 RelatedLinks を挿入する必要があった。

### 影響

発注プロンプトに「ContentCta 直前」と書くと、ハブ系記事では「該当なし」となり、ClaudeCode が判断に迷う。
特殊レイアウト記事では何も挿入できなくなる。

### 恒久ルール

**Rule 1：CTA 直前指示は両形式対応で書く**

```
末尾の <ContentCta> または <ContactCtaCard> の直前に新規 <RelatedLinks> を挿入する。
両方が存在しない場合は、メインコンテンツの最後の構造（チャート・ナビ・カード等）の直後・</main> の直前に配置する。
```

**Rule 2：対象記事の CTA タイプを事前確認するコマンド**

```bash
for slug in $TARGET_SLUGS; do
  f="src/app/${slug}/page.tsx"
  cta=$(grep -E "ContentCta|ContactCtaCard" "$f" | head -1 | grep -oE "ContentCta|ContactCtaCard")
  echo "$slug: ${cta:-(none)}"
done
```

### 関連 PR
- PR #127（B-19 / 2026-04-28）— 本 Lesson の発端

---

## 18. 発注プロンプトの slug 実地確認必須（Lesson-11、2026-04-28 PR #132 で判明）

### 現象

リンが B-6b 発注プロンプトに記載した case-study 系 7 slug のうち **6 slug が実在しなかった**:

| spec の slug | 実在 |
|---|---|
| case-study-price-increase-negotiation | ✅ |
| case-study-multi-site-procurement | ❌ |
| case-study-renewable-procurement | ❌ |
| case-study-fixed-vs-market-switch | ❌ |
| case-study-emergency-supply-transition | ❌ |
| case-study-cost-reduction-30-percent | ❌ |
| switching-guide | ❌（正しくは `switching-business-electricity-contract`）|

ClaudeCode は spec の不一致を強引に新規ファイル作成で対応せず、実在 1 件のみ正しく適用 + 残りは差分発注に
回す形で報告（**Lesson-07** を正しく実行）。

### 影響

- 発注プロンプトのうち 86%（6/7）が無効
- B-6b 完了後に B-6b-2（差分発注）を追加発注する必要が生じた

幸い ClaudeCode の判断が正しかったため大事には至らなかったが、リン側の手間として spec 確認 → 差分発注の往復が発生。

### 恒久ルール

**Rule 1：発注プロンプトの slug は必ず `ls src/app/` で実地確認**

```bash
# 発注プロンプト作成前に必ず実行
ls -d src/app/case-study-* 2>/dev/null | sed 's|src/app/||'
ls -d src/app/switching-* 2>/dev/null | sed 's|src/app/||'
```

**Rule 2：命名規則がブレやすい記事系列は特に警戒**

以下の系列は実在 slug を都度確認:
- `case-study-*`
- `switching-*`
- `*-electricity-cost-review`
- `region-*`
- `emergency-*`
- `review-*`
- `faq-*`

**Rule 3：過去のドラフト・監査文書を信用しすぎない**

旧 audit 文書に slug が書かれていても、それは作成時点の状態。新規発注プロンプト作成時は必ず repo 実地確認。

### 関連 PR
- PR #132（B-6b 部分完了 / 2026-04-28）— spec ミスの発端
- PR #133（B-6b-2 差分発注 / 2026-04-28）— 正しい slug で 10 件追加適用

---

## 19. React useEffect の依存配列に「関数引数のデフォルト配列」を入れない（Lesson-14、2026-05-01 確立）

### 現象

`src/components/market-data/TableOfContents.tsx` で、TOC 適用済 72 ページの **すべてで内部リンクのクリックが応答しない** 重大不具合が発生。
KENJI さんがブラウザ確認で「内部リンクをクリックしても遷移しない」と気づき、サイト全体規模の SEO 損失が継続していた。

### 原因（典型的な React useEffect バグ）

```tsx
"use client";
export default function TableOfContents({ selectors = ["main h2", "main h3"] }: Props) {
  ...
  useEffect(() => {
    const headings = document.querySelectorAll(selectors.join(","));
    ...
    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [selectors]);
  ...
}
```

1. `selectors = ["main h2", "main h3"]` は **関数引数のデフォルト値**
2. レンダリング毎に **新しい配列インスタンス** が作られる（JavaScript の仕様）
3. `useEffect` の依存 `[selectors]` で React は `Object.is` 参照比較 → 毎回「変化あり」判定
4. **`useEffect` が毎レンダリング再実行**
5. `setItems(itemList)` で再レンダリング → 再 `useEffect` 発火 → **完全な無限ループ**
6. CPU が無限ループに専有 → ブラウザの **`<Link>` クリックイベントが応答する余裕なし**

### 影響範囲（バグ発覚時 = 2026-05-01 朝）

- TOC 適用済記事数: 72 ページ
- 影響継続期間: TableOfContents.tsx 作成時から（B-1a 系の TOC 初適用 = 2026-04-27 頃以降、約 1 週間）
- 隠れた SEO 損失: GSC 上で TOC 適用記事の CTR・滞在時間が低下していた可能性
  - 4/13 以降の CTR 健全化局面で「TOC 適用ページがブレーキ役」になっていた可能性
  - 5/5 計測時に「TOC 適用ページの imp / click / 平均順位」を別途分析必要

### 解決（PR #144 想定、B-34、最小修正）

**修正前**:
```tsx
export default function TableOfContents({ selectors = ["main h2", "main h3"] }: Props) {
```

**修正後**:
```tsx
const DEFAULT_SELECTORS = ["main h2", "main h3"];

export default function TableOfContents({ selectors = DEFAULT_SELECTORS }: Props) {
```

→ `DEFAULT_SELECTORS` を module-level const に出すことで参照が固定される。useEffect は一度だけ実行され、無限ループ解消。

### 恒久ルール

**Rule 1: useEffect の依存配列に「関数引数のデフォルト配列／オブジェクト」を直接入れない**

- 関数引数のデフォルト値が配列リテラル（`= [...]`）/ オブジェクトリテラル（`= {...}`）の場合、毎レンダリングで新規生成される
- `useEffect` の依存に入れると毎回参照変化 = 無限ループになる
- **対策**:
  - (a) module-level const に出す（最小修正、推奨）: `const DEFAULT_X = [...]`
  - (b) `useMemo` でメモ化: `const x = useMemo(() => [...], [])`
  - (c) 依存配列から外す（必要時のみ）: `}, []);`

**Rule 2: Client Component の useEffect は必ず「依存配列の参照安定性」を確認してから書く**

- 配列リテラル / オブジェクトリテラル / 関数リテラル を依存に入れる場合は要警戒
- ESLint の `react-hooks/exhaustive-deps` ルールは依存抜けは検出するが、参照不安定問題は検出しない
- code review で「依存に配列／オブジェクト／関数があるか」を必ず確認

**Rule 3: 「ページ全体のリンクが効かない」型の症状が出たら、まず Client Component の useEffect 無限ループを疑う**

- 不具合報告: 「リンクが効かない」「クリックしても何も起きない」
- 原因候補の優先順:
  1. **Client Component の useEffect 無限ループ**（CPU 占有でクリック応答不可）
  2. CSS の `pointer-events: none` / 全画面 overlay
  3. JavaScript エラーで Hydration 失敗
- 切り分け: 同じ Client Component（TOC, Modal, Calculator 等）を使うページ群で **共通して** 症状が出るかを確認

### 検証手順（再発防止用）

ローカルで以下を実行して、useEffect の無限ループが起きていないか確認:

```js
// ブラウザ devtools の Performance タブで開発者ツール記録 → ページを 5 秒放置
// → CPU usage が高止まり / フレームレート低下 / "Recalculate Style" "Layout" の頻発
// = 何らかの無限ループ発生の兆候
```

または、useEffect 内に console.log を入れて、レンダリング毎に出力されるか確認:

```tsx
useEffect(() => {
  console.log("[DEBUG] TableOfContents useEffect triggered");
  ...
}, [selectors]);
```

→ 数秒で何回も出力されたら無限ループ確定。

### 関連 PR / メモ
- PR #128 〜 #131（B-1d-1/2/3、4/28 マージ）— TOC 大量適用で症状の影響が広がった
- PR #117 / #118 / #119（B-1a/1b/1c、4/27 までマージ）— TOC 初適用、バグ潜在開始
- PR #143（B-33、5/1 マージ）— B-34 直前
- PR #144 想定（B-34、5/1 緊急修正）— 本不具合の解決

---

## 20. 構造化データ「未適用」判定の方法論欠陥（Lesson-12、2026-05-01 確立）

### 現象

B-32（FaqPageJsonLd 拡大施策）で当初 15 候補を「未適用」と判定し ClaudeCode に発注したが、
リン側の追加調査で **全 15 件が `<ArticleJsonLd faq={...}>` 経由で既に FAQPage schema を出力済み** と判明。
このまま実装したら 15 ファイル全件で **schema 二重出力リスク** が発生していた。
ClaudeCode はコミット 0 件状態で停止 → ブランチ `claude/B-32-faq-schema-expansion-20260501` を削除して施策中止。

### 原因（判定方法論の欠陥）

リン側の判定ロジック:

```bash
# 「FaqPageJsonLd を import しているか」のみで判定（誤）
grep -l "FaqPageJsonLd" src/app/*/page.tsx
```

→ `import { FaqPageJsonLd }` の有無だけでは判定できない。`<ArticleJsonLd faq={...}>` 経由の
内蔵出力が見落とされる。

### サイト全体カバレッジ（5/1 朝の判明値）

| 出力経路 | ファイル数 |
|---|---:|
| `<ArticleJsonLd faq={...}>` 経由 | 416 |
| `FaqPageJsonLd` 単体使用 | 10 |
| 合計（重複なし）| **426 / 533 ≈ 80% カバレッジ済** |

**真の未適用は 2 件**（contact, electricity-double-billing-faq）でいずれも別経路で
schema 出力済み → 施策成立せず。

### 恒久ルール

**Rule 1: 構造化データ系の発注前は必ず共通コンポーネント本体を Read する**

- 対象ファイル: `src/components/seo/JsonLd.tsx`（および類似の共通 JSON-LD コンポーネント）
- Read のチェック項目:
  - 各コンポーネントの **prop 仕様**（特に optional な内蔵 prop）
  - 内蔵 prop で別 schema を出力する分岐ロジック
  - 例: `ArticleJsonLd` は `faq?: FaqItem[]` prop を取り、渡されると FAQPage schema を内蔵出力する
- Grep だけでは見落とす（import 行の有無では判定不可）

**Rule 2: 「未適用」判定の手順を 3 段階で実施する**

1. **共通コンポーネント本体の Read**（prop 仕様の把握）
2. **import の有無 grep**（適用候補の抽出）
3. **個別ファイルでの prop 渡し有無 grep**（内蔵 prop で別 schema 出力していないか確認）
   - 例: `grep -l "<ArticleJsonLd[^>]*faq=" src/app/*/page.tsx` で faq prop を渡しているファイル抽出
   - これらは FaqPageJsonLd 別出力すると重複リスク

**Rule 3: 候補リストを ClaudeCode に渡す前に、リン側で「重複リスク 0」を確認する**

- 候補リスト作成後、各 slug について Read で実装状況を確認
- 重複リスクがあるファイルは候補から除外
- 「真の未適用」が 0 件 / 少数のときは施策そのものを再検討

### 検証スクリプト例（再発防止用）

```bash
# 1. ArticleJsonLd の faq prop 有無を確認
grep -rl "<ArticleJsonLd[^>]*faq=" src/app/

# 2. FaqPageJsonLd の単体 import 確認
grep -rl "import.*FaqPageJsonLd" src/app/ | xargs grep -L "<ArticleJsonLd"

# 3. 上記の集合演算で「真の未適用」を抽出
# = (FaqPageJsonLd を使えそうな全 page) - (ArticleJsonLd 内蔵経由) - (FaqPageJsonLd 既使用)
```

### 関連: B-32 ブランチ削除コマンド

```bash
git branch -D claude/B-32-faq-schema-expansion-20260501
git push origin --delete claude/B-32-faq-schema-expansion-20260501
```

---

## 21. 検証コマンドの期待値は実装完了形を脳内シミュレーションする（Lesson-13、2026-05-01 確立）

### 現象

B-33（HowToJsonLd 9 記事追加）の発注プロンプトで、リンが検証コマンドの期待値を
`total_match=3` と書いたが、ClaudeCode が実装着手前に「正しくは `total_match=2` では?」と指摘。
リン側の仕様書品質に問題があり、ClaudeCode の指摘で事なきを得た。

### 原因

リンが「import 行 1 + JSX 開始タグ 1 + JSX 閉じタグ 1 = 3 出現」と勘違いした。
正しくは:

```tsx
import { HowToJsonLd } from "@/components/seo/JsonLd";  // 1 出現
...
<HowToJsonLd                                              // 2 出現目（同行内）
  steps={[...]}
/>
```

JSX 自己完結タグの場合、開始と閉じが同一トークン → grep でカウントされるのは **import 行 1 + JSX タグ 1 = 計 2** が正常。

### 恒久ルール

**Rule 1: 検証コマンドの期待値を書く前に「実装完了形のコードイメージ」を脳内シミュレーションする**

- 想定実装コードを 1 ファイル分だけ頭の中で書く
- そのコードに対して検証コマンド（grep / wc / find 等）を脳内実行
- 結果数を期待値として書く

**Rule 2: 期待値は「想定範囲」で書く**

- 単一の数字より、「N 以上」「M〜N」のような範囲表現が安全
- 例: `期待: 2`（厳密）ではなく `期待: 2 以上`（柔軟）
- ファイル間で実装パターンに差異が出る場合は範囲が必須

**Rule 3: 検証コマンドはリン側でも 1 ファイルだけ実地で試す**

- 既存の類似ファイルで grep を実行
- 想定値とのズレを確認
- ズレがあれば期待値を修正してから ClaudeCode に渡す

### 検証コマンド例（B-33 で正しかったケース）

```bash
# 想定: HowToJsonLd を 1 つ追加した状態で
grep -c "HowToJsonLd" src/app/emergency-supplier-bankruptcy/page.tsx
# 正しい期待値: 2（import 1 + JSX 1）
```

### 関連 Lesson

- Lesson-09 と類似のミス: 内部リンク数 grep で形式 A (`href="/`) / 形式 B (`href: "/`) を見落とすパターン
- いずれも「実装の細部を脳内で再現できていない」ことが原因

---

## 22. GSC 実データ早期共有で SERP 取得対象が大幅改善（Lesson-15、2026-05-04 確立）

### 現象

5/4 朝、リンが事前計画した SERP 競合スナップショット 30 クエリ → 51 クエリと取得した時点で、
KENJI さんから GSC 直近 7 日データ（350+ クエリの imp / click / CTR / 順位）を共有。
このデータを反映した結果、**未開拓の高 imp クエリ 60+ 件**を新たに発見し、追加 SERP 取得で
最終的に 115 クエリに拡大。発注計画は当初の C-2 ピラー 1 本から、C-2 ＋業種別記事 8 本＋
AI/データセンター新規ピラー＋ PPA ピラー の **大型シリーズ計画**に進化。

### 判明した「未開拓の高 imp クエリ」5 大鉱脈

リン側の事前計画（30 クエリ）では捕捉できていなかったが、GSC 実データで判明した鉱脈:

1. **業種別電気代記事**（病院 / 倉庫 / 飲食店 / 工場 / ドラッグストア / パチンコ等、imp 累計 67）
2. **AI / データセンター電力**（imp 累計 50+、順位 1 で click 0 のクエリ複数）
3. **PPA 法人向け**（imp 累計 30+、自社圏外）
4. **時事ロングテール**（ナフサ / イラン / 2025年10月値上げ等、imp 累計 30+）
5. **CTR 異常**（順位 1〜3 で click 0 の 7 クエリ → B-36 で metadata 改修済）

### 原因

リン側の事前計画は「リンが既に把握している主要クエリ」しかカバーできない。
GSC 実データには **「リンが想定していなかったクエリ」** が大量に含まれており、
これらが事業機会の最大の鉱脈だった。

### 恒久ルール

**Rule 1: SERP 競合分析を実施する前に、必ず GSC 直近 7-30 日データを KENJI さんに依頼する**

- 依頼項目:
  - クエリ別 7 日データ（実績クエリ全件、imp / click / CTR / 平均順位）
  - 可能なら 30 日データも併せて（季節性把握）
  - ページ別 imp / click データ（記事別の効果測定用）
- 計画策定の優先順位:
  1. GSC データ取得 → リン側で重点クエリ抽出
  2. リン側の戦略仮説（次に攻めるべき領域）と統合
  3. SERP 競合分析の対象クエリ確定

**Rule 2: GSC データから「未開拓鉱脈」を 5 つの軸で抽出する**

| 軸 | 抽出条件 | 攻略アプローチ |
|---|---|---|
| **大 imp 圏外**（imp ≥ 10 / 順位 ≥ 20）| 既存記事が弱い、新規ピラー狙い | 新規記事発注 |
| **CTR 異常**（順位 ≤ 3 / click 0）| タイトル / OG 改善 | metadata 改修（小修正 OK）|
| **業種別**（業種名 + 電気代/削減）| 既存ハブなし | 業種別記事シリーズ |
| **時事ロングテール**（時事キーワード + 業界用語）| ニュース性、瞬発力 | 時事記事新設 |
| **新領域横断**（AI / DC / PPA / EV 等）| 既存カテゴリにない | 新カテゴリ + ピラー |

**Rule 3: GSC 実データなしの SERP 取得は「準備運動」と捉え、本格分析は GSC 取得後に実施する**

- 事前 SERP 取得: 競合構成の概観把握 / 既知クエリの順位確認
- GSC 取得後の本格 SERP 取得: 鉱脈クエリの競合分析 / 発注優先順の確定
- 両者の規模差: 事前 30 クエリ → 本格 100+ クエリ

**Rule 4: 5/5 のような中間計測前ルール下でも、metadata 改修の小修正は GSC 取得後すぐに打てる**

- B-36 の事例: 5/4 午後に GSC 取得 → 5/4 夕に metadata 5 ファイル改修 → 5/4 夜マージ
- 5/5 計測時には改修効果が初日から計測される
- 計測前ルールの「コード変更ゼロ・本文 0 字追加」は守りつつ、**最大の click 改善**を実現

### 関連: 5/4 セッションの規模

- SERP 取得: 51 → **115 クエリ**
- B-36 改修: 5 ファイル（metadata only、+51 -12）
- 発注計画: C-2 ピラー 1 本 → C-2 + 業種別 8 + AI/DC + PPA = **大型シリーズ計画**

---

## 23. 新規大量記事追加時のインデックス登録監視必須（Lesson-16、2026-05-05 確立）

### 現象

5/5 朝の GSC 計測で発覚：4/7 以降の大量記事追加（200+ ページ）の累積で、
**「クロール済み - インデックス未登録」が 25 ページ滞留**。
さらに B-23 / B-36 で改修した 2 記事も未登録判定（GSC では順位データが出ていたが、
URL 検査では「未登録」状態）。

### サイト全体のインデックス推移（過去 50 日）

| 日付 | 未登録 | 登録済み | 表示回数 |
|---|---:|---:|---:|
| 4/06 | 0 | 38 | 82 |
| 4/07 | **283** | 68 | 56 |
| 4/14 | 363 | 287 | 618 |
| 4/21 | 51 | **665** | 1180 |
| 4/27 | **32** | 664 | 1788 |

→ 4/7 の大量追加で 283 ページが未登録になり、4/21 までに大幅進展したものの、
**32 件が「クロール済み - インデックス未登録」のまま現在も滞留**（5/5 時点 25 件）。

### 真の原因仮説（2 件抽出 Read で確認）

- /reduce-cost-without-switching: 本文充実、metadata 完備
- /about-this-site: 同様

→ **コンテンツ品質の問題ではなく**、以下が主因と推定：
1. 重複コンテンツ判定（類似テーマの記事多数）
2. 内部リンク不足（カテゴリページから到達しにくい）
3. クロール予算分散（サイト規模に対して新規ページ多すぎ）
4. 特集子ページの孤立（特集トップから子ページへの誘導弱い）

### 致命的影響

B-23 / B-36 の改修記事 **2 件も未登録だった事実** = **改修効果がゼロ化**していた。
もし 5/5 で発見できなかったら、5/12 / 5/15 を迎える前に SEO 戦略全体が機能不全に。

### 解決パターン（B-38a / B-38b-1/2/3 で実施）

1. **B-38a**: sitemap 優先度シグナル送信（25 件を `priority: 0.9 / weekly` に上げる）
2. **B-38b-1〜3**: 25 件全件の metadata 差別化（title / description / keywords 拡充）
3. **GSC URL 検査**でインデックス再申請（1 件ずつ手動）

### 恒久ルール

**Rule 1: 新規記事追加後、必ず GSC「ページのインデックス登録」を週次で確認**

- 確認タイミング:
  - 大量追加（10 件以上）した翌週
  - 月次振り返り時の必須チェック項目
- 確認指標:
  - 未登録（クロール済み - インデックス未登録）件数
  - 検出 - インデックス未登録 件数
  - 404 / リダイレクト系の問題件数

**Rule 2: 「クロール済み - インデックス未登録」が出た記事は、コンテンツ品質強化で対応**

- 単なる「インデックス申請」では不十分（Google の判定を覆すには本文・内部リンク強化が必要）
- 対応策の優先順位:
  1. **メタ差別化**（title / description / keywords で読者ターゲット明示）
  2. **sitemap 優先度引き上げ**（priority: 0.9 / weekly）
  3. **内部リンクハブからの誘導強化**（カテゴリページからの相互リンク）
  4. **コンテンツ追記**（差別化軸の明示、独自視点の追加）

**Rule 3: B-23 / B-36 のような「既存記事改修」も、改修後にインデックス状況を確認する**

- 改修記事のインデックス状況確認手順:
  1. デプロイ後 24-48h 待つ
  2. GSC URL 検査で「URL は Google に登録されています」を確認
  3. 未登録なら即「インデックス登録をリクエスト」
  4. それでも未登録継続なら、コンテンツ品質強化で対応

### 検証コマンド例

```bash
# サイト全体のインデックス状況を月次集計
# GSC API or 手動エクスポート → CSV 集計
# 未登録件数の推移をグラフ化（gsc_report_helper.py で対応予定）
```

### 関連: 5/5 セッションで実施した B-38 系対策

| 対策 | 内容 | 対象 |
|---|---|---:|
| B-38a (PR #149) | sitemap 優先度シグナル | 25 件 |
| B-38b-1 (PR #150) | 業務契約系 metadata 差別化 | 8 件 |
| B-38b-2 (PR #151) | 個別 page metadata 差別化 | 11 件 |
| B-38b-3 (5/6 予定) | 動的ルート系 metadata 差別化 | 6 件 |

→ **5/12 GSC 中間再計測で効果検証**（25 → 0 件解消が目標）

---

## 24. GSC インデックス申請には 1 日上限あり、大量未登録対策時は分割（Lesson-17、2026-05-05 確立）

### 現象

5/5 中に未登録対策を一気に進めた結果、**1 日で 27 件のインデックス申請を実施**:
- B-23 / B-36 改修 2 件
- B-38a 効果に伴う sitemap 由来の優先申請 25 件
- → **GSC で「1 日の上限に達しました」エラー表示**

→ B-38b-1 (PR #150 マージ) の 8 件 + B-38b-2 (PR #151 マージ) の 11 件 + C-2 1 件 =
**計 20 件は翌日以降に申請を持ち越し**。

### 推定上限

GSC インデックス申請の正確な上限は **公式に非公開**。
ユーザー報告ベースで 1 日 **10〜20 件程度**と推定（サイト規模・ドメイン信頼度で変動可能性）。

### 影響

大量未登録対策時に：
- 1 日で全件申請できない → **対策効果の浸透が遅れる**
- 申請優先順位を考えないと、重要な記事が後回しになる
- 上限到達でエラーが出ても明示的なリトライ通知はない

### 恒久ルール

**Rule 1: 大量未登録対策（10 件以上）の発注は複数日に分散する**

- 1 日の発注は **最大 10 件まで**を目安に
- B-38b のように複数バッチに分割し、マージ → 申請を 1 日 1 バッチで進行
- 申請順序を以下の優先度で決定：
  1. **imp が多い記事**（流入機会大）
  2. **公開後新しい記事**（Google が再評価しやすい）
  3. **古い記事**（既に評価済の可能性、優先度低）

**Rule 2: 上限到達時は 24h 待ってリトライ**

- エラー画面に「1 日の上限」と表示されたら、翌日朝の申請枠リセットまで待つ
- 強引にリトライするとアカウント警告のリスク

**Rule 3: 大規模対策時は申請計画を事前に立てる**

- 例: 25 件未登録対策の場合
  - Day 1: 8 件
  - Day 2: 8 件
  - Day 3: 9 件
  - 合計 25 件を 3 日に分散

### 5/5 セッションでの実例（参考）

| 日付 | 申請件数 | 累計 | 上限到達 |
|---|---:|---:|:---:|
| 5/4 | 2 | 2 | - |
| 5/5 | 25 | 27 | ✅ 上限到達 |
| 5/6 朝（予定）| 11 | 38 | - |
| 5/6-7 朝（予定）| 6 | 44 | - |

→ 27 件 / 日が上限の境界線として機能（個別記事は登録済の場合もあるため、純新規申請ベース）

### 検証コマンド（GSC API 経由は別途整備）

```bash
# 申請履歴を GSC で確認:
# Google Search Console → URL 検査 → 過去の申請履歴は表示されないため、
# 自前でログを取る必要あり（spreadsheet で管理推奨）
```

### 関連 Lesson

- **Lesson-16**: 新規大量記事追加時のインデックス登録監視必須
  → 監視で見つかった未登録ページの解消には、Lesson-17 の「分散申請」を併用すべき

---

**最終更新**: 2026-05-05 夕方（§20 Lesson-12 / §21 Lesson-13 / §22 Lesson-15 / §23 Lesson-16 / §24 Lesson-17 統合、5/5 セッションの 5 大学習を恒久化）。前回: 2026-05-01 午後（§19 Lesson-14 統合、TOC 無限ループの恒久対策）
