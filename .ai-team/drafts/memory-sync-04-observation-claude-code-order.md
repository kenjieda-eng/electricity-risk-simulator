# 04 観測 memory sync + stash 復元 Claude Code 発注文

**作成日**: 2026-04-24（リン）
**目的**: 
1. stash@{0} の ops-notes §9 / task-roadmap を安全に main 取り込み
2. Day 1-3 の PSI 観測結果を memory に正式記録
3. リンがセッション中に編集した memory ファイルも同 PR で反映

---

## 背景

本セッション中にリンが編集したメモリファイル類は、PR #70 作成時の競合で stash 退避された可能性があります。また、stash@{0} には以下が含まれると推測：
- `ops-notes.md` の §9 "Cowork サンドボックスでの PSI chunked 実行" ルール追記
- `task-roadmap.md` の状態更新

これらに加えて、本セッションで MEMORY.md と DECISIONS.md を更新済。

---

## コピペ用 Claude Code 発注文

```
04 観測の memory sync と stash 復元を同時にお願いします。

【作業】

1. stash@{0} の内容確認
   git stash show -p stash@{0} > /tmp/stash0.patch
   head -80 /tmp/stash0.patch

2. 新ブランチ作成
   git switch -c memory/04-observation-sync-2026-04-24

3. stash 内容を main 版にマージ適用（競合があれば手動解決）
   # まず適用試行
   git checkout stash@{0} -- .ai-team/memory/ops-notes.md .ai-team/memory/task-roadmap.md 2>/dev/null || true
   
   # 競合が出た場合、stash 版と現 main 版を両方を見て手動統合
   # ops-notes.md に §9 "Cowork サンドボックスでの PSI chunked 実行" があれば、それを必ず保持
   # task-roadmap.md は最新の状態（Day 3 朝完了、PR #69/#70 マージ済）を反映

4. 本セッションでリンが更新した他の memory ファイルをコミット対象に含める
   git add .ai-team/memory/MEMORY.md
   git add .ai-team/memory/ops-notes.md
   git add .ai-team/memory/pending-tasks.md
   git add .ai-team/memory/task-roadmap.md
   git add .ai-team/memory/sprint-history.md 2>/dev/null || true
   git add .ai-team/DECISIONS.md

5. PSI レポート追加（Day 3 朝）
   git add .ai-team/PSI_04_DAY3_MORNING_2026-04-24.md

6. 本日作成したドラフト類
   git add .ai-team/drafts/kenji-eda-enhancement-claude-code-order.md
   git add .ai-team/drafts/seo-internal-linking-claude-code-order.md
   git add .ai-team/drafts/memory-sync-04-observation-claude-code-order.md
   git add .ai-team/drafts/seo-ctr-rewrite-claude-code-order.md 2>/dev/null || true
   git add .ai-team/drafts/G-04-G-05-deploy-claude-code-order.md 2>/dev/null || true

7. 1 つのコミット
   git commit -m "memory(04-sync): Day 1-3 PSI 観測記録と stash@{0} の chunked 実行ルール取り込み"

8. ビルド検証（念のため）
   npm run build
   
   エラー 0 件を確認。

9. push
   git push -u origin memory/04-observation-sync-2026-04-24

10. gh pr create
   タイトル: memory(04-sync): 04 観測 Day 1-3 記録 + stash 復元 + セッション中の memory 更新反映
   本文:
   ---
   ## 概要
   2026-04-22 夜〜04-24 朝までの大型 SEO/観測スプリントの総まとめ PR。メモリファイル群を安全に同期し、stash@{0} に退避されていた ops-notes §9 を main に戻す。

   ## 含まれる変更

   ### PSI 観測レポート
   - `.ai-team/PSI_04_DAY3_MORNING_2026-04-24.md`（新規）
     - Day 3 朝計測結果（`/` Perf 90 / LCP 3.7s、`/articles` Perf 94 / LCP 2.4s、`/capacity` Perf 92 / LCP 2.9s）
     - Phase 2（02G: PublicHeader 分割）発注見送り判定の根拠
     - 5/5 GSC 中間計測まで wait-and-see 方針確定

   ### Memory ファイル更新
   - `.ai-team/memory/MEMORY.md`: 2026-04-24 時点の成果インデックス
   - `.ai-team/memory/ops-notes.md`: §9 "Cowork サンドボックスでの PSI chunked 実行" ルール（stash 復元）
   - `.ai-team/memory/pending-tasks.md`: 本日の完了事項追記、残タスクの再整理
   - `.ai-team/memory/task-roadmap.md`: 最新状態反映
   - `.ai-team/DECISIONS.md`: 2026-04-23/24 スプリント確定事項追加
     - Phase 2 見送り
     - 外部監修不要（Energy-Expert ロール不要）
     - 1 リンク戦略確定
     - GSC 観測基準線

   ### ドラフト類
   - `.ai-team/drafts/` 配下に本日作成の Claude Code 発注文を追加（CTR リライト、kenji-eda 強化、内部リンク強化、memory sync）

   ## 効果
   - セッション跨ぎでの記憶欠落防止
   - ops-notes §9 の保全（今後のサンドボックス PSI 計測で必須ルール）
   - Day 1-3 観測を時系列で追跡可能

   ## 検証
   - [x] ビルド影響なし（メモリファイルとレポートのみ）
   - [x] stash@{0} の内容は手動統合で失われないよう確認
   ---

11. PR URL を報告。stash は PR マージまで `git stash drop` しないこと。

【備考】
- stash@{0} 内容が想定と違う場合は、差分を報告してから進めてください
- 競合が激しければ手動統合で調整、必要なら一時的にコミット対象から除外してもOK
- 主目的は ops-notes §9 の保全、それが取り込めれば他は柔軟にOK
```

---

## リンの意図

- **本日の記憶を永続化**: セッション跨ぎで重要情報を失わないため
- **ops-notes §9 の保全**: PSI chunked 実行ルールは今後の運用で必須
- **Phase 2 判定の根拠記録**: 5/5 以降に振り返った際の参照資料

---

## EDAさん 作業後のリン実行項目

PR マージ後、stash@{0} が正しく取り込まれたことが確認できたら、リンに連絡 → `git stash drop stash@{0}` の指示を出します。
