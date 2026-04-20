# 未完了・次にやるべきタスク（2026-04-20 深夜 最終更新・14 PR 完了版）

## 本日の最終成績

**1 日で PR #43〜#56 の 14 本マージ・Vercel 本番公開完了。**

### パフォーマンス成果

| 指標 | Before（朝） | After（夜） | 改善 |
|---|---:|---:|---|
| Mobile Perf（`/`） | 74 | 97→94 | +20〜23 |
| Mobile LCP（`/`） | 4.9s | 2.3s | −53% |
| Mobile TBT（`/`） | 276ms | 119ms | −57% |
| Mobile TBT（`/articles`） | 630ms | **309ms** | **−51%** |

※ `/` の 97→94 揺れは PSI 計測ノイズ（タスク E で Y 確定）
※ `/articles` Before 630ms は `--interval` なし 1 snapshot、真の Before は明朝 K で再確立予定

### SEO 成果見込み（2026-05-18 GSC 計測で評価）

- T-15/T-16/T-17 合算: 月 +20〜35 clicks
- G-01 新記事（`/fuel-vs-market-adjustment-comparison`）: 月 +3〜10 clicks

### 計測基盤成果

- `scripts/psi-baseline.mjs` に `--interval` オプション追加（PR #54）
- 計測運用ルール 5 項目を memory に恒久記録（下記）

### 本日マージ済み PR 一覧（14 本）

| PR | 概要 | Commit |
|---|---|---|
| #43 | Chart.js 遅延マウント | `e49567e` |
| #44 | PSI 計測スクリプト | `3e5bc05` |
| #45 | T-15 `/capacity-contribution-explained` リライト | `d5ce4a4` |
| #46 | T-16 順位 4〜10 圏 6 ページ title/meta | `c405ea6` |
| #47 | T-17 A-list 5 ページ H1/導入文 | `15b0b02` |
| #48 | A: `pending-tasks.md` 再書き直し | `0844724` |
| #49 | D: PSI After 計測 | `49211f7` |
| #50 | C: `/articles` TBT 戦略レポート | `d2ecc24` |
| #51 | B: G-01 新記事 | `036b10d` |
| #52 | E: `/` LCP 退行調査（Y 確定） | `0cac7df` |
| #53 | G: memory sync (#48〜#52 + 計測運用ルール 4 項目) | `cd83f48` |
| #54 | F: `scripts/psi-baseline.mjs --interval` オプション | `d9b015b` |
| #55 | H: `/articles` content-visibility 適用（PR C-1） | `fc5c9f8` |
| #56 | I: PR #55 After 計測（β、TBT 630→309ms / −51%） | `acc8e42` |

---

## 明朝（2026-04-21）最優先タスク

### タスク J: memory 最終同期
- 依頼: `.ai-team/tasks/2026-04-21-morning/J-memory-final-sync.md`
- 内容: #53〜#56 + β 判定 + 計測基盤副次発見（ルール 5）を sprint-history / pending-tasks に追記
- ※ 本ファイル（リン直筆）で先行的に反映済み。J は正式 PR としての git 化のみ

### タスク K: PSI 朝計測で真の Before 値確立
- 依頼: `.ai-team/tasks/2026-04-21-morning/K-psi-morning-baseline.md`
- 対象: `/`, `/compare`, `/articles`, `/capacity-contribution-explained` × Mobile × `--interval 60 --runs 3`
- 目的: 以降 4 週間の全パフォーマンス判定 Before として恒久利用
- 判定分岐:
  - `/articles` 真 TBT ≈ 309ms ± 30ms → H 効果確定（α 格上げ）
  - 400〜550ms → C-2（初期件数絞り込み）起動
  - 550ms 超 → DevTools 現地調査

### K 結果次第で起動するタスク L 候補
- **L-A**: C-2（`slice(0, 3) → slice(0, 2)` + カテゴリ誘導リンク）、TBT −80〜−150ms
- **L-B**: C-3（画像 43 枚中 5〜8 枚のみ `priority`、残り `loading="lazy"`）、LCP −300〜−500ms 期待
- **L-C**: Chrome DevTools Performance で `/articles` 実地観察
- **L-D**: `/compare` TBT が 400ms 超なら同じ content-visibility 施策を横展開
- 明朝 K の結果を見てリンが L 依頼文を新規作成

### 並行: 04-21〜23 朝・夕 PSI 観測継続
- 3 日連続で `/` Mobile Perf 90〜97 レンジ維持を確認
- 簡易コマンド: `node scripts/psi-baseline.mjs --label morning-YYYY-MM-DD --runs 3 --interval 60 --strategy mobile --urls /`

---

## 効果計測マイルストーン

| 日付 | 計測内容 |
|---|---|
| 2026-04-21 朝 | J + K → 真の Before 値確立 |
| 2026-04-21〜23 朝・夕 | `/` 定期観測（PR #43 効果恒久確認） |
| 2026-05-05 | GSC 中間計測（T-15/T-16/T-17 + G-01 早期シグナル） |
| 2026-05-18 | GSC 本計測 → Batch A 残り 2 本 / Batch B 起動判断 |

---

## 計測運用ルール（2026-04-20 夜 確定版、5 項目）

1. **PR マージ後 30 分以内は PSI 計測しない**（Edge cache-bust 直後の cold hit 回避）
2. **`--runs N` で同値 = キャッシュ疑う**（`scripts/psi-baseline.mjs --interval 60` 必須）
3. **真の中央値は時刻をまたぐ**（朝 / 夕 / 翌朝 で比較）
4. **異常値 1 回で騒がない**（2〜3 時間後に再計測してから判断）
5. **Before 値も疑う**（Before/After 比較は両側とも `--interval 60` 付き複数 runs で取った値を使う。過去の 1 snapshot 値は参考程度）

---

## 外部施策（EDA 担当、並行進行待ち）

- pps-net.org 執筆者リンク施策（月 50 万 PV の強力リンク源、全記事に `simulator.eic-jp.org/kenji-eda` リンクを入れるのが理想）
- eic-jp.org フッター `simulator.eic-jp.org` リンク追加

EDA が進めたタイミングでリンに一声ください。ブリッジ施策として memory に記録します。

---

## 次の大きな判断（2026-05-18 GSC 再取得後）

- 選択肢 I: Batch A 残り 2 本（G-04 改定カレンダー、G-05 DR 収益モデル）
- 選択肢 II: Batch B キーワード再優先度付け + 新規 5 本
- 選択肢 III: SEO 効果が想定以下なら A/B 観点で追加リライト

---

## 備考: 昨夜〜今夜のタスクフォルダ

- `.ai-team/tasks/2026-04-20-evening/` — 昨日のタスク A〜I（14 PR 中 9 本の発注元）
- `.ai-team/tasks/2026-04-21-morning/` — 今日明朝の J / K（+ L は K 結果後にリン追加）
