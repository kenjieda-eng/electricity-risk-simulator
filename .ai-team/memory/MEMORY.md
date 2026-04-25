# メモリインデックス（2026-04-25 朝 最終更新）

| ファイル | 内容 |
|---------|------|
| pending-tasks.md | 次のチャットで最初にやること（04-24 17:00 時点: 3 PR #74/#75/#76 マージ済、**R-01〜R-03 運用ルール確立**、memory-sync PR 待ち、5/5 中間計測まで保守体制） |
| task-roadmap.md | **タスク命名規則（旧K/L → 新 01/02）と時系列フロー**（04-22 ステータス反映済） |
| ops-notes.md | **運用知見（§1〜§12 既存 + §13 Lessons 20260424 / §14 初期 CTR 汚染 / §15 R-01〜R-03 信頼可能期間ルール）** |
| sprint-history.md | Sprint 0〜2の完了記録 + **04-23/24 スプリント**（SEO 大型リリース: Batch A G-04/G-05 公開、CTR リライト 7 記事、/kenji-eda 強化、Phase 2 見送り判定、3 PR マージ + R-01〜R-03 確立） |
| project-overview.md | サイト全体像・技術スタック・KPI・ペルソナ |
| seo-keywords.md | キーワード分析結果と対応状況 + **GSC 3 か月分析（4/13 以降 日平均表示 16.4倍急増、CTR 2.46%）** |
| domain-strategy.md | 3サイト連携・ブリッジ施策・成長戦略 + **1 リンク戦略（セミナー告知ページからは /kenji-eda のみ、着地で回遊）** |
| competitor-analysis.md | エネチェンジBizとの差別化 |
| team-structure.md | AIチーム構成と運用ルール |
| user-eda.md | EDAさんの方針・好み・過去の重要指摘 |

---

## 2026-04-23/24 スプリント 成果サマリ（記憶アンカー）

### 🚢 公開済み PR
- **PR #68（Phase 1）**: GoogleAnalytics lazyOnload → LCP 平均 -1.9s
- **PR #69（Batch A）**: G-04 制度改定カレンダー 2026-2028 + G-05 DR 収益モデル 公開
- **PR #70（CTR リライト）**: 7 記事のタイトル/description 改善（JEPX, 市場調整額, 容量拠出金 他）
- **PR #71**: /kenji-eda プロフィール強化（著書 8 冊、講演実績 23 団体、内部リンク 9 本追加）
- **PR #72**: G-04/G-05 への被リンクを 8 記事の RelatedLinks に追加
- **PR #73**: memory(04-sync) Day 1-3 PSI 観測記録 + stash@{0} chunked 実行ルール取り込み
- **PR #74（E-E-A-T）**: AuthorBadge に /kenji-eda リンク追加 + JsonLd author 強化（59 記事から被リンク）
- **PR #75（FAQ）**: G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加
- **PR #76（内部リンク）**: G-04/G-05 リンク description 調整 + CTR 5 記事に AuthorBadge

### 📚 未コミットの計画・分析ドキュメント（memory-sync PR で取り込み予定）
- `.ai-team/HANDOVER_2026-04-24.md` / `HANDOVER_2026-04-25.md`
- `.ai-team/INTERNAL_LINK_MAP_2026-04-24.md` / `.json`（501 pages リンクマップ）
- `.ai-team/ARTICLES_BATCH_B_PLAN_2026-04-24.md`（5 本詳細設計）
- `.ai-team/drafts/2026-04-24-afternoon-pr-order.md` / `claude-code-prompt.md`
- `.ai-team/memory/pending-tasks.md`（R-01/R-02/R-03 + 17:00 訂正反映）
- `.ai-team/memory/ops-notes.md`（§13/§14/§15 追記）
- `.ai-team/drafts/2026-04-25-memory-sync-order.md`（本日朝、Claude Code 発注文）
- `.ai-team/STASH_ANALYSIS_2026-04-25.md`（古 stash 7 件 drop 判定）
- `.ai-team/FAQ_VERIFICATION_2026-04-25.md`（PR #74/#75 production HTML 検証）
- `.ai-team/BATCH_C_CANDIDATES_2026-04-25.md`（Batch C 先行候補洗い出し）

### 🧠 R-01〜R-03（GSC/Analytics データの信頼可能期間ルール、ops-notes §15）
- **R-01**: 2026-03-31 以前のデータは分析ベースラインに使わない（身内クリック汚染）
- **R-02**: 初期 CTR は実力値ではない（順位相応が実力、現在 2.46% は順位 9.0 相応で健全）
- **R-03**: 評価軸の優先順位 = 平均順位 > インプレッション > 新規クエリ > CTR

### ⚠️ Lessons 20260424（ops-notes §13、3 ミス反省）
- **lesson-01**: local working tree ≠ origin/main、`git log origin/main -- <file>` で再確認
- **lesson-02**: HTML 検証は `grep -c` ❌ → `grep -o ... | wc -l` ✅
- **lesson-03**: 検証 URL は事前に「該当機能を持つか」を grep してから発注

### 📊 観測結果（Phase 1 後）
- `/`: LCP 1.9s-3.7s（run 分散あり）、TBT 22ms 良好
- `/articles`: LCP 2.4s、TBT 136ms 良好
- `/capacity`: LCP 2.9s、TBT 195ms 良好
- **Phase 2（02G: PublicHeader 分割）は発注見送り**、5/5 中間計測まで wait-and-see

### 🎯 SEO 戦略確定事項（R-01 適用、参考値要注意）
- GSC 過去 3 か月（2026-01-24〜04-24、🔴 身内汚染込み）: クリック 262 / 表示 7,925 / CTR 3.31% / 平均順位 9.0
- 4/13 以降急増（清浄期間内）: 日平均表示 45 → 740（16.4倍）、CTR 7.77% → 2.46%（順位相応に健全化、R-02）
- **勝ちクエリ**: 「電気料金推移 10年 法人」CTR 25.8%、「高圧 電力 見直し」15.4%
- **リライト候補残存**: Batch C（先行洗い出し済み、5/5 後絞り込み）として JEPX 以外のクラスター未最適化あり
- **Batch B キーワード候補 8 件**: ダックカーブ、容量拠出金とは、電力 BCP、蓄電池減価償却 等

### 🔧 待機中
- **memory-sync PR**（最優先・15-20 分・Claude Code 委任可、`.ai-team/drafts/2026-04-25-memory-sync-order.md` 参照）
- 月次振り返り 2026-03: データ取得待ち（5 月上旬）
- GSC インデックス申請: G-04 / G-05 / /what-is-market-price-adjustment「修正完了」（EDAさん作業）
- Rich Results Test 目視（FAQPage、G-04/G-05、EDAさん 作業）
- 古 stash 7 件: 内容要約 → drop 判定（`.ai-team/STASH_ANALYSIS_2026-04-25.md` で先行判定済、Claude Code に委任可）

### 🗓 直近の重要日程
- **2026-04-28（月）**: 福井商工会議所セミナー登壇（中東情勢とエネルギーコスト）→ ここまで SEO 低負荷
- **2026-05-05（火）**: GSC 中間計測（4/13 以降 22 日分）目標: 日平均表示 850+ / 順位 8.3 以下
- **2026-05-18（日）**: GSC 本計測 → Batch B 起動判断 / Phase 2 再検討
- **2026-06 末**: 日平均セッション 50〜70（保守シナリオ）

### 📊 6 月末保守予測（前日確立）
- 流入合計: 50〜70/日（Organic 30〜40 / Direct 6〜10 / Referral 8〜15 / Brand 5〜8 / Social 1〜2）
- ワースト 30〜35 / 保守 50〜70 / 楽観 100〜150
