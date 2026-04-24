# メモリインデックス（2026-04-24 11:30 最終更新）

| ファイル | 内容 |
|---------|------|
| pending-tasks.md | 次のチャットで最初にやること（04-24 11:30 時点: PR #69/#70 マージ済、/kenji-eda 強化 PR 待ち、stash@{0} 復元待ち、次は 5/5 中間計測まで wait-and-see） |
| task-roadmap.md | **タスク命名規則（旧K/L → 新 01/02）と時系列フロー**（04-22 ステータス反映済） |
| ops-notes.md | **運用知見（サンドボックス git 制約 / ネットワーク許可 / PR #59 パターン / 計測ルール 7 項目 / 時間帯差の読み方 / ロール分担 / §9 chunked 実行ルール[stash@{0}]）** |
| sprint-history.md | Sprint 0〜2の完了記録 + **04-23/24 スプリント**（SEO 大型リリース: Batch A G-04/G-05 公開、CTR リライト 7 記事、/kenji-eda 強化、Phase 2 見送り判定） |
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
- **PR #NEW-TBD**: /kenji-eda プロフィール強化（著書 8 冊、講演実績 23 団体、内部リンク 9 本追加）

### 📊 観測結果（Phase 1 後）
- `/`: LCP 1.9s-3.7s（run 分散あり）、TBT 22ms 良好
- `/articles`: LCP 2.4s、TBT 136ms 良好
- `/capacity`: LCP 2.9s、TBT 195ms 良好
- **Phase 2（02G: PublicHeader 分割）は発注見送り**、5/5 中間計測まで wait-and-see

### 🎯 SEO 戦略確定事項
- GSC 過去 3 か月: クリック 262 / 表示 7,925 / CTR 3.31% / 平均順位 9.0
- 4/13 以降急増: 日平均表示 45 → 740（16.4倍）、CTR 7.77% → 2.46% 低下
- **勝ちクエリ**: 「電気料金推移 10年 法人」CTR 25.8%、「高圧 電力 見直し」15.4%
- **リライト候補残存**: Batch C（未着手） として JEPX 以外のクラスター未最適化あり
- **Batch B キーワード候補 8 件**: ダックカーブ、容量拠出金とは、電力 BCP、蓄電池減価償却 等

### 🔧 待機中
- stash@{0}: ops-notes §9 chunked 実行ルール + task-roadmap 更新（task #24）
- 月次振り返り 2026-03: データ取得待ち（5 月上旬）
- GSC インデックス申請: G-04 / G-05 / /what-is-market-price-adjustment「修正完了」（EDAさん作業）
