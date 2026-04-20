# 未完了・次にやるべきタスク（2026-04-20 深夜 最終更新）

## 本日の最終成績

**1 日で PR #43〜#52 の 10 本マージ・Vercel 本番公開完了。**

### パフォーマンス成果
- Mobile Performance: 74 → 97（+23）※ただし 18:00 計測で 94 に戻る揺れを確認（タスク E で Y=計測ノイズ確定）
- Mobile LCP: 4.9s → 2.3s（−53%、Core Web Vitals "Good" クリア）
- Mobile TBT: 276ms → 119ms（−57%、"Good" クリア）
- `/articles` は残り課題（Mobile TBT 630ms、タスク C で施策決定済み、タスク H で PR C-1 投入予定）

### SEO 成果見込み（2026-05-18 GSC 計測で評価）
- T-15/T-16/T-17 合算: 月 +20〜35 clicks
- G-01 新記事（`/fuel-vs-market-adjustment-comparison`）: 月 +3〜10 clicks

### 本日マージ済み PR 一覧

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

---

## 明朝以降 最優先タスク

### 1. `/articles` TBT 削減（PR C-1）
- 依頼ファイル: `.ai-team/tasks/2026-04-20-evening/H-articles-content-visibility.md`
- 内容: `content-visibility: auto` 適用（即マージ可の最小施策）
- 期待: Mobile TBT 630ms → 300〜400ms

### 2. PSI 計測基盤改善（`--interval` オプション）
- 依頼ファイル: `.ai-team/tasks/2026-04-20-evening/F-psi-interval-option.md`
- 内容: `scripts/psi-baseline.mjs` に runs 間 sleep オプション追加
- 期待: 真の中央値取得で再現可能な計測基盤

### 3. 翌日以降 3 日連続 PSI 観測
- 朝 9 時台 / 夕 18 時台に `/` Mobile を 1 run ずつ計測（手動 or 予約）
- 90〜97 レンジ維持なら OK、外れたら再調査

---

## 効果計測マイルストーン

| 日付 | 計測内容 |
|---|---|
| 2026-04-21〜23 | 3 日連続 PSI 観測（`/` Mobile Perf 維持確認） |
| 2026-05-05 | GSC 中間計測（T-15/T-16/T-17 + G-01 の早期シグナル） |
| 2026-05-18 | GSC 本計測 → Batch A 残り 2 本 / Batch B 起動判断 |

---

## 計測運用ルール（2026-04-20 追加、タスク E 副次発見より）

1. **PR マージ後 30 分以内は PSI 計測しない**（Edge cache-bust 直後の cold hit 回避）
2. **`--runs N` で同値が返ったら疑う**（PSI API 内部キャッシュの再返却の可能性）
3. **真の中央値取得は時刻をまたぐ**（朝 1 run、夕 1 run、翌朝 1 run で比較）
4. **異常値を観測したら即修正しない**（1 回の計測で判断せず、2〜3 時間後に再計測してから判断）

---

## 外部施策（EDA 担当、並行）

- pps-net.org 執筆者リンク施策（月 50 万 PV）
- eic-jp.org フッター simulator.eic-jp.org リンク追加

---

## 次の判断（2026-05-18 GSC 再取得後）

- 選択肢 I: Batch A 残り 2 本（G-04 改定カレンダー、G-05 DR 収益モデル）
- 選択肢 II: Batch B キーワード再優先度付け + 新規 5 本
- 選択肢 III: SEO 効果が想定以下なら A/B 観点で追加リライト
