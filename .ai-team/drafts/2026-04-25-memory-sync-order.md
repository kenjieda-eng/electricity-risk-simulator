# memory-sync PR 発注文（2026-04-25 朝、リン作成）

> **対象**: Claude Code
> **目的**: 2026-04-24 の成果と運用ルール（R-01〜R-03 / Lessons 20260424）を origin/main に正式取り込み
> **緊急性**: 中（4/28 セミナー前に終わると理想だが、4/29 以降でも可）
> **想定時間**: 15〜20 分

---

## 🎯 ゴール

新ブランチ `chore/memory-sync-2026-04-25` を作成し、以下のファイル群のみを **選別 add** で commit → push → PR 化。

**500+ の未コミット変更（行末改行 LF/CRLF 由来の差分など）は絶対に触らない**。

---

## 📁 取り込み対象ファイル（選別 add 対象、これ以外は触らない）

### A. 新規 untracked ファイル（add 対象）

```
.ai-team/HANDOVER_2026-04-24.md
.ai-team/HANDOVER_2026-04-25.md
.ai-team/INTERNAL_LINK_MAP_2026-04-24.md
.ai-team/INTERNAL_LINK_MAP_2026-04-24.json
.ai-team/ARTICLES_BATCH_B_PLAN_2026-04-24.md
.ai-team/drafts/2026-04-24-afternoon-pr-order.md
.ai-team/drafts/2026-04-24-claude-code-prompt.md
.ai-team/drafts/2026-04-25-memory-sync-order.md   # 本ファイル（自己参照）

# 2026-04-25 朝にリンが新規生成（本セッション成果）
.ai-team/STASH_ANALYSIS_2026-04-25.md             # 古 stash 7 件 drop 判定
.ai-team/FAQ_VERIFICATION_2026-04-25.md           # PR #74/#75 production HTML 検証
.ai-team/BATCH_C_CANDIDATES_2026-04-25.md         # Batch C 先行候補洗い出し
```

### B. 既存 modified ファイル（部分 add、変更内容も指定）

```
.ai-team/memory/pending-tasks.md   # R-01/R-02/R-03 + 17:00 訂正反映 + 16:00 リン診断ミス記録（リン編集済）
.ai-team/memory/ops-notes.md       # §13 Lessons 20260424 / §14 初期 CTR 汚染 / §15 R-01〜R-03（リン編集済、32005 bytes）
.ai-team/memory/MEMORY.md          # インデックス更新（リン編集済、6488 bytes）
.ai-team/HANDOVER_2026-04-24.md    # R-01 適用での数字書き直し（リン編集済、15741 bytes）
```

**注意**: B のファイルは local working tree 上で **行末改行が CRLF/LF 大量差分として表示される**（実質的に変化していない既存行）。
`git add -p` で **新規追加・編集セクションのみ** stage して、行末改行差分は stage しないこと。
もし `git add -p` での選別が困難な場合、以下の方法で local main を origin/main に揃え直してから add する:

```bash
# 既存編集を一度退避
git stash push -m "memory-sync-prep-2026-04-25" -- \
  .ai-team/memory/pending-tasks.md \
  .ai-team/memory/ops-notes.md \
  .ai-team/memory/MEMORY.md \
  .ai-team/HANDOVER_2026-04-24.md

# origin/main の状態で再チェックアウト（line ending リセット）
git checkout origin/main -- \
  .ai-team/memory/pending-tasks.md \
  .ai-team/memory/ops-notes.md \
  .ai-team/memory/MEMORY.md \
  .ai-team/HANDOVER_2026-04-24.md

# stash の編集差分のみを再適用
git stash pop
```

---

## 🚫 触らないファイル（除外対象）

- `package-lock.json` / `package.json`
- `tsconfig.json` / `next.config.ts` / `middleware.ts` / `postcss.config.mjs`
- `src/**/*`（行末改行差分のみのはず）
- `public/downloads/*.md`
- ルート直下の `add_*.py` / `patch_*.py` / `gen_*.py` / `fix_*.py` / `enhance_*.py` / `expand_*.py` / `batch_seo.py` 等の **Python スクリプト群**（一時作業ファイル、別途整理予定）
- `additional_articles_data.json` / `glossary_articles_data.json` / `new_category_data.json`
- `.cursorrules`
- `01-発注文-9時用.md`（ルート直下のファイル名 escape されているもの）
- `scripts/test-google-api.mjs`（後日別 PR で扱う）

---

## 🌿 ブランチ戦略

```bash
# 1. 現在位置確認（local main か新ブランチかを把握）
git status -sb

# 2. 必要なら local main を origin/main に揃え直す（working tree は保持、§3 既存 ops-notes パターン参照）
#    ※ ops-notes.md §3「PR #59 パターン」に準拠

# 3. 新ブランチ作成
git checkout -b chore/memory-sync-2026-04-25

# 4. 選別 add（上記 A + B 対象のみ）
git add .ai-team/HANDOVER_2026-04-24.md
git add .ai-team/HANDOVER_2026-04-25.md
git add .ai-team/INTERNAL_LINK_MAP_2026-04-24.md
git add .ai-team/INTERNAL_LINK_MAP_2026-04-24.json
git add .ai-team/ARTICLES_BATCH_B_PLAN_2026-04-24.md
git add .ai-team/STASH_ANALYSIS_2026-04-25.md
git add .ai-team/FAQ_VERIFICATION_2026-04-25.md
git add .ai-team/BATCH_C_CANDIDATES_2026-04-25.md
git add .ai-team/drafts/2026-04-24-afternoon-pr-order.md
git add .ai-team/drafts/2026-04-24-claude-code-prompt.md
git add .ai-team/drafts/2026-04-25-memory-sync-order.md
git add -p .ai-team/memory/pending-tasks.md      # 編集セクションのみ
git add -p .ai-team/memory/ops-notes.md          # §13/14/15 のみ
git add -p .ai-team/memory/MEMORY.md             # インデックス更新のみ
git add -p .ai-team/HANDOVER_2026-04-24.md       # R-01 適用の追記のみ

# 5. 差分確認（commit 前）
git diff --cached --stat   # 想定: 11〜14 files / +1500 -100 程度

# 6. commit
git commit -m "docs(memory): 04-24 成果反映 + 運用ルール R-01〜R-03 + Lessons 20260424"

# 7. push
git push -u origin chore/memory-sync-2026-04-25

# 8. PR 作成
gh pr create \
  --title "docs(memory): 04-24 成果反映 + 運用ルール R-01〜R-03 + Lessons 20260424" \
  --body "..."
```

---

## ✅ 成功条件

1. PR が作成され、`docs(memory):` プレフィックスで origin に push 済
2. 変更ファイル数が 11〜14 件（500+ になっていないこと）
3. CI green（実コード変更なしのため、basic checks のみで通るはず）
4. リンが PR URL を確認して「マージしてください」と EDAさん に依頼できる状態

---

## ⚠️ 失敗時のリカバリ

- **行末改行で 500+ ファイルが stage された場合**: `git reset HEAD` で全 unstage → 上記「§3 PR #59 パターン」または `git stash` で line ending リセットしてから再 add
- **新規ブランチ push が拒否された場合**: ops-notes §1 / §3 を再確認、Cowork サンドボックス git 制約に該当する操作がないか確認
- **gh pr create が失敗**: ブランチ push 単体まで完了させて、リンに「ブランチ push 済、PR 化のみ EDAさん 作業」と報告

---

## 📞 リン側のフォロー

- PR 作成完了 → リンが PR diff を grep で検証（`docs(memory):` のみであることの再確認）
- リンが EDAさん に「マージ可」とゴーサイン
- マージ後、`.ai-team/memory/MEMORY.md` の最終更新日付を再度更新（次回セッションで）

---

**作成**: 2026-04-25 朝（リン）
**Claude Code 投入予定**: EDAさん の判断で 4/25〜4/29 のいずれかのタイミング
