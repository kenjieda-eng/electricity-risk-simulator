# 古 stash 7 件 内容要約 + drop 判定（2026-04-25 朝、リン作成）

> **目的**: 4/24 時点で残っている古い stash 7 件の中身を要約し、drop 可否を判定する。
> **判定基準**:
> - ✅ **drop 可**: 内容が既に main に反映済 / 一時的な build cache / 役目を終えた古いブランチ作業
> - 🟡 **要確認**: 一部有用な内容を含む可能性、内容を見て手作業で取り出してから drop
> - ❌ **保留**: まだ価値があり、別途 PR 化を検討

---

## 一覧

| stash | 由来ブランチ | 日付（推定） | 変更ファイル | 行数 | 判定 |
|---|---|---|---|---:|---|
| @{0} | content/s2-06-batch3 | 2026-04-19 | （マージコミット型、空 diff） | 0 | ✅ drop |
| @{1} | content/s2-06-batch2 | 2026-04 中旬 | tsconfig.tsbuildinfo | 1 | ✅ drop |
| @{2} | feat/ogp-category-images | 2026-04-19 頃 | KEYWORD_ANALYSIS_2026-04-19 / SPRINT_BACKLOG | 82 | 🟡 確認後 drop |
| @{3} | feat/sprint1-batch2 | 2026-04 上旬 | DECISIONS / MEETING_LOG | 80 | 🟡 確認後 drop |
| @{4} | feat/sprint1-batch2 | 2026-04 上旬 | settings.local.json / .gitignore / CLAUDE.md | 52 | ❌ **救出推奨**（後述） |
| @{5} | feat/add-47-articles-cat22-35 | 2026-04 上旬 | DECISIONS / MEETING_LOG / package* / tsbuildinfo | 454 | 🟡 確認後 drop |
| @{6} | feat/add-47-articles-cat22-35 | 2026-04 上旬 | MEETING_LOG / SPRINT_BACKLOG | 65 | 🟡 確認後 drop |

---

## 個別判定

### stash@{0} — `content/s2-06-batch3: before-batch4-rebase` ✅ drop 可

- マージコミット型 stash で実質的な diff なし
- batch4 rebase 前の保険、役目終了
- **判定: 即 drop 可**

```bash
git stash drop "stash@{0}"
```

---

### stash@{1} — `content/s2-06-batch2: rebase-batch2` ✅ drop 可

- `tsconfig.tsbuildinfo` のみ（1 line 差分）
- TypeScript の incremental build cache、現在は `.gitignore` で除外済（CRLF 設定変更前の名残）
- **判定: 即 drop 可**

```bash
git stash drop "stash@{1}"
```

---

### stash@{2} — `feat/ogp-category-images: temp before rebase` 🟡 確認後 drop

- `.ai-team/KEYWORD_ANALYSIS_2026-04-19.md`（109 行 / +43 -66）
- `.ai-team/SPRINT_BACKLOG.md`（39 行 / +21 -18）
- 現在の main 上の `KEYWORD_ANALYSIS_2026-04-19.md` は既に存在（modified 状態だが行末改行のみ）
- 差分の本体は何か？ → 古いキーワード分析の途中編集と推定

**確認手順**:
```bash
git stash show -p "stash@{2}" | head -100   # 内容確認
# 既に main の最新版に含まれていれば drop
git stash drop "stash@{2}"
```

---

### stash@{3} — `WIP on feat/sprint1-batch2: a2dd77e ...` 🟡 確認後 drop

- `.ai-team/DECISIONS.md`（+13）
- `.ai-team/MEETING_LOG.md`（+67）
- 古い意思決定・議事録の追記
- 現在の DECISIONS.md / MEETING_LOG.md は modified 状態（行末改行のみと推定）

**確認手順**:
```bash
git stash show -p "stash@{3}" > /tmp/stash3-diff.patch
# 内容を読んで、現在の DECISIONS / MEETING_LOG に既に反映されているか確認
git stash drop "stash@{3}"   # 反映済なら
```

---

### stash@{4} — `WIP on feat/sprint1-batch2: 609913e Merge ...` ❌ **救出推奨**

3 ファイルすべてに **救出すべき内容** を含む可能性あり。

#### a) `.gitignore`（+5）

追加内容:
```
# Google Service Account key files
*.json.key
*-service-account*.json
eic-simulator-*.json
```

**現在の `.gitignore` にはこれらが含まれていない**。GSC API / GA API の service account key を誤コミットしないための保険として **必要**。

→ **救出推奨**: 単独で `.gitignore` に追記する PR を立てる、または memory-sync PR に含める。

#### b) `CLAUDE.md`（+29）

追加内容: `## ⚡ AIエージェントチーム（自動読み込み必須）` セクション
- `.ai-team/DECISIONS.md` / `SPRINT_BACKLOG.md` / `MEETING_LOG.md` の自動読み込み指示

**判定**: 現在の `CLAUDE.md` は Next.js プロジェクト構造に特化した内容に書き直されている。AI チーム運用は `.ai-team/memory/MEMORY.md` にインデックス化されているため、stash@{4} の CLAUDE.md 追加は **役目を終えている**。

→ **drop 推奨**（CLAUDE.md 部分のみ）

#### c) `.claude/settings.local.json`（+19 行の Bash 許可ルール）

追加内容: `python add_seo.py` / `git add *` / `git commit -m '*` 等、**ルートに今 untracked で残っている Python スクリプト** を実行するための許可

**判定**: 該当 Python スクリプト（`add_seo.py` / `enhance_articles.py` 等）は別途整理対象。許可ルールも一緒に整理して問題ない。

→ **drop 可**（settings は別途必要時に追加）

#### 救出方法

```bash
# stash@{4} を一時 apply
git stash apply "stash@{4}"

# .gitignore のみ stage
git add .gitignore

# 残り（CLAUDE.md / settings.local.json）は revert
git checkout HEAD -- CLAUDE.md .claude/settings.local.json

# 単独コミット or memory-sync PR に含める
git commit -m "chore: gitignore に GSC/GA service account key パターンを追加"

# stash drop
git stash drop "stash@{4}"
```

または、より簡単に `.gitignore` に直接 5 行追加して、stash 自体は drop。

---

### stash@{5} — `WIP on feat/sprint1-batch2: 609913e Merge ...` 🟡 確認後 drop

- `.ai-team/DECISIONS.md`（+47）
- `.ai-team/MEETING_LOG.md`（+129）
- `package-lock.json`（+298）← 大型
- `package.json`（+1）← 1 行追加
- `tsconfig.tsbuildinfo`（+2）

`package.json` の +1 行 が何かは要確認（依存追加の可能性）。ただし、**現在の main の `package.json` には既に必要な依存がすべて揃っている**ため、この +1 はおそらく古い時点の作業。

**確認手順**:
```bash
git stash show -p "stash@{5}" -- package.json
# 該当依存が現在の main に既に含まれていれば drop
git stash drop "stash@{5}"
```

---

### stash@{6} — `WIP on feat/add-47-articles-cat22-35: 2725bf9 ...` 🟡 確認後 drop

- `.ai-team/MEETING_LOG.md`（+63）
- `.ai-team/SPRINT_BACKLOG.md`（+6 -3）
- 古いミーティング議事録の追記、SPRINT_BACKLOG の細かな調整

**判定**: 既存の MEETING_LOG / SPRINT_BACKLOG に反映済の可能性が高い。確認後 drop。

```bash
git stash show -p "stash@{6}" | head -80   # 内容確認
git stash drop "stash@{6}"
```

---

## 推奨実行順序

```bash
# Step 1: 即 drop（@{0} と @{1}）
git stash drop "stash@{1}"   # tsbuildinfo のみ
git stash drop "stash@{0}"   # 空 diff

# Step 2: stash@{4} の .gitignore のみ救出
# 方法 A: stash apply で取り出す（前述）
# 方法 B: 直接 .gitignore に 5 行追記して stash drop

# Step 3: 残り 4 件（@{2}/@{3}/@{5}/@{6}）の内容を順番に確認 → drop
for i in 2 3 5 6; do
  echo "===== stash@{$i} ====="
  git stash show -p "stash@{$i}" | head -100
  read -p "drop してよいですか？ (y/N): " ans
  if [ "$ans" = "y" ]; then
    git stash drop "stash@{$i}"
  fi
done
```

**注意**: stash drop は `stash@{N}` の番号がずれていく（drop すると上が繰り上がる）ため、**必ず番号が大きい方から drop すること**。

---

## Claude Code への発注例

memory-sync PR とは独立して投げられる、軽量タスク。

```
古 stash 7 件の整理を行ってください。
リンが `.ai-team/STASH_ANALYSIS_2026-04-25.md` にまとめた判定結果に従い:

1. stash@{6} → 内容確認後、main に既反映なら drop
2. stash@{5} → package.json の +1 が現在の main に既存なら drop
3. stash@{4} → .gitignore の Google service account key 部分を救出して
   `chore: gitignore に GSC/GA service account key パターンを追加`
   というコミットで PR 化、CLAUDE.md / settings 部分は drop
4. stash@{3} → 内容確認後、main に既反映なら drop
5. stash@{2} → 内容確認後、main に既反映なら drop
6. stash@{1} → 即 drop（tsbuildinfo のみ）
7. stash@{0} → 即 drop（空 diff）

各 drop 前に diff を表示して、リンが見られるようコメントに残してください。
```

---

**作成**: 2026-04-25 朝（リン）
**根拠データ取得時刻**: 2026-04-25 朝、`git stash list` / `git stash show --stat` で取得
