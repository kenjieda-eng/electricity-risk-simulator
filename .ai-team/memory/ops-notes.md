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

**運用上の回避策**:

1. **本番 HTML の目視確認が必要な場合**: EDA の Windows 環境から curl / ブラウザで確認、結果を Cowork に共有
2. **PSI API 呼び出しが必要な場合**: Claude Code 側で実行（EDA のローカル環境から）
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

## 4. 計測運用ルール（2026-04-20〜21 で確立、5 項目）

夜セッションで確定、朝セッションでも堅く守られた:

1. **PR マージ後 30 分以内は PSI 計測しない**（Edge cache-bust 直後の cold hit 回避）
2. **`--runs N` で同値 = キャッシュ疑う**（`scripts/psi-baseline.mjs --interval 60` 必須）
3. **真の中央値は時刻をまたぐ**（朝 / 夕 / 翌朝で比較）
4. **異常値 1 回で騒がない**（2〜3 時間後に再計測してから判断）
5. **Before 値も疑う**（Before/After 比較は両側とも `--interval 60` 付き複数 runs で取った値を使う。過去の 1 snapshot 値は参考程度）

これらのルールを朝セッションで適用し、**LCP 4.5〜4.9s が 1 回計測で出た段階で 02B を即発注する**という早計判断を回避できた。夕方再計測で真偽判定する運用に切り替え。

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

## 7. 追記ルール

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

**最終更新**: 2026-04-21 朝セッション完了時点
