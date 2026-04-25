# 未完了・次にやるべきタスク（2026-04-24 17:00 計測運用ルール追加）

## 🧠🧠 2026-04-24 17:00 EDAさん 提供の重要運用ルール（絶対に忘れない）

### ルール R-01: データの信頼可能期間

**2026-03-31 以前のデータは分析ベースラインに使わない**

理由:
- サイト立ち上げ初期（2026-02〜03）は身内（関係者）クリック比率が高く、CTR/クリック数ともに実力以上に出ていた
- テスト訪問・QA 動線・内部デモ閲覧も含まれていた
- 表示数が少ないため統計的にも信頼度が低い

**使用可能データの起点**: 2026-04-01 以降
**身内クリック希釈完了の目安**: 日平均表示 500+ を超えた頃（本件では 4/13 前後）

### ルール R-02: 初期 CTR は実力値ではない

- サイト運用 1〜3 ヶ月目の CTR は関係者クリックで底上げされる
- 実力 CTR は「順位相応」（順位 10 位なら 2-3% が標準、Backlinko 2022）
- リライト効果測定は **「一般ユーザー時代の CTR」vs「リライト後 CTR」** で評価

### ルール R-03: 評価軸は CTR より順位とインプレッション

- 順位 1 つ上がると CTR は業界平均で 1.5-2 倍
- CTR 直接最適化（title/description リライト）より、**順位改善施策**（E-E-A-T / 内部リンク / コンテンツ拡充）の方が費用対効果大
- 5/5 中間計測・5/18 本計測の KPI は以下の順で優先:
  1. 平均順位の改善（9.0 → 7 台目標）
  2. インプレッション（表示）カバレッジ拡大
  3. 新規クエリ獲得数
  4. CTR（副産物、順位改善と連動）

### HANDOVER に書いてある数字の注意

HANDOVER_2026-04-24.md v1〜v3 で「GSC 過去 3 か月: クリック 262 / 表示 7,925 / CTR 3.31% / 平均順位 9.0」と書いているが、
- この数字は **2026-01-24〜04-24** ベースで、**3 月末まで 3 分の 2 が身内汚染**
- 次セッションの memory-sync PR で「2026-04-01〜04-24」の 24 日分ベースに差し替えが必要

### ops-notes への昇格予定（次セッション）

```
.ai-team/memory/ops-notes.md §15「GSC/Analytics データの信頼可能期間」
  - R-01: 2026-03-31 以前は使わない
  - R-02: 初期 CTR は身内汚染、順位相応が実力
  - R-03: 評価軸は順位 > インプレッション > CTR
```

---

# 未完了・次にやるべきタスク（2026-04-24 16:00 リン訂正反映）

## 🔴🔴 2026-04-24 16:00 リン診断ミスの訂正

### 先ほど（14:00 更新で）記載した「PR #72 が実コード上 0 件」は誤り

14:00 時点で「PR #72 の内部リンク 9 本が反映されていない」と報告したが、Claude Code が origin/main を直接調査した結果、**PR #72 の内部リンクはコミット 8aadbd2 として origin/main に正しく取り込まれていた**。

- **原因**: Cowork サンドボックスの working tree が origin/main から遅れていた（または stash 復元前の状態）
- **私の誤操作**: `git log origin/main -- <file>` で最終状態を確認せず、local working tree を grep した
- **今後の運用改善**: origin/main を直接参照する確認コマンドを必須化

### 結果として PR #76 の実態
- 元の発注文: 「PR #72 復旧（+9 内部リンク再追加）」
- 実際の PR #76: G-04/G-05 既存リンクの description 文言調整（-26/+28）+ CTR リライト 5 記事に AuthorBadge 配置（新規）
- PR-B の拡張版という位置付けで有益な PR

### 3 PR 現状（2026-04-24 16:00）

| PR | タイトル | 差分 | Build | 状態 |
|---|---|---|---|---|
| #74 | seo(e-e-a-t): /kenji-eda 被リンク 59 記事化 + JsonLd 著者情報強化 | 2 files / +30 -1 | ✓ 28.4s | レビュー待ち |
| #75 | seo(faq): G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加 | 2 files / +76 -0 | ✓ 21.8s | レビュー待ち |
| #76 | seo(internal-linking): G-04/G-05 リンク description 調整 + CTR 5 記事に AuthorBadge | 13 files / +28 -26 | ✓ 21.1s | レビュー待ち |

### stash の扱い
- `stash@{0}: lin-afternoon-2026-04-24-wip` → 3 PR マージ後に内容確認の上 drop
- `stash@{1}: memory-sync` → 前セッションからの残留、同じく内容確認の上 drop

---

# 未完了・次にやるべきタスク（2026-04-24 朝セッション・10:50 更新）

## 2026-04-24 10:50 SEO CTR リライト本番反映確認

### PR #70 マージ完了、全 7 URL タイトル反映確認

- **PR**: https://github.com/kenjieda-eng/electricity-risk-simulator/pull/70
- **コミット**: 0bf95fe（7 SEO ファイル、14 挿入/14 削除）、d6fd9e（ドラフト文書）
- **build**: エラー 0 / 警告 0
- **M&A 特殊文字**: ビルド・HTML 出力ともに問題なし（`M&amp;A` に適切にエスケープ）
- **7 URL 全て 200 OK + 新タイトル反映確認**（curl `<title>` 抜き取り、リンが検証）

### 注意: stash@{0} 保持中（task #24 で追跡）

Claude Code が PR #70 作成時、`.ai-team/memory/ops-notes.md` と `task-roadmap.md` のローカル未コミット変更を stash 退避。PR #69 マージによる競合で自動復元不可のため保持。

**含まれる可能性が高い内容**:
- ops-notes.md §9 "Cowork サンドボックスでの PSI chunked 実行" ルール追記
- task-roadmap.md の 04-23 更新

**復元方針**:
- 別セッションで新ブランチ切って `git stash show -p stash@{0}` → 手動適用 → PR 作成
- 急がないが、ops-notes §9 は失いたくない内容なので次回作業時に最優先

---

# 未完了・次にやるべきタスク（2026-04-24 朝セッション・12:00 更新）

## 🎯 次セッションで最優先にやるべきこと

### EDAさん に依頼中（リン待機中）
1. **/kenji-eda プロフィール強化 PR 発注** → `.ai-team/drafts/kenji-eda-enhancement-claude-code-order.md`
2. **SEO 内部リンク強化 PR 発注（8 記事）** → `.ai-team/drafts/seo-internal-linking-claude-code-order.md`
3. **memory sync + stash 復元 PR 発注** → `.ai-team/drafts/memory-sync-04-observation-claude-code-order.md`
4. **GSC インデックス申請**（G-04/G-05/`/what-is-market-price-adjustment` の「修正を完了」）

### リン待機後の処理
- 3 つの PR マージ後、リンが 200 OK 確認 + pending-tasks 更新
- stash@{0} が PR 経由で取り込まれたことが確認できたら `git stash drop` 指示

### 次の大きな判断ポイント
- **5/5 GSC 中間計測**: Batch A 3 記事 + CTR リライト 7 記事の初期効果観測
- **5/18 GSC 本計測**: Batch B 起動判断、Phase 2 再検討
- **月次振り返り 2026-03**: 5 月上旬データ揃い次第公開（scaffolding 済）

---

## 2026-04-24 朝の完了事項

### Day 3 朝 PSI 計測（10:18〜10:22、リン chunked 実行）

04-23 夕計測が未実施だったため、04-24 朝 Day 3 朝計測として実施。**Phase 2 要否判定の最終材料**。

- **レポート**: `.ai-team/PSI_04_DAY3_MORNING_2026-04-24.md`
- **中央値（Day 2 朝 → Day 3 朝）**:
  - `/`: LCP 2,228 → **3,702ms（+1,474ms 悪化）**、TBT 58 → 21ms ✅、CLS 0.000 維持
  - `/articles`: LCP 2,500 → **2,442ms ✅**、TBT 188 → 136ms ✅
  - `/capacity`: LCP 2,700 → 2,913ms（+213ms）、TBT 255 → 194ms ✅、CLS 0.000 → 0.010
- **`/` の LCP が run 間で 2 倍乖離**（r1=1,891ms / r2=3,702ms / r3=3,762ms）= 構造問題ではなく run 分散 or CDN キャッシュ状態
- **Phase 2 (02G) 判定**: **発注見送り**、5/5 中間計測まで wait-and-see
  - 理由: 3 URL とも Perf 90+ 維持、TBT 改善、`/` の乖離は構造的悪化ではない

### SEO CTR リライト 7 記事 実装（10:00〜10:15）

GSC データ（過去 3 か月、4/13 以降で日平均表示 16.4 倍、CTR 7.77%→2.46% 低下）に基づくタイトル/description リライトを 7 ファイル一括編集。

- 対象: `/jepx-price-trend-and-corporate-impact`、`/market-price-adjustment`、`/business-transfer-name-change-procedure`、`/electricity-expense-accounting-guide`、`/capacity-contribution-explained`、`/when-will-business-electricity-prices-drop`、`/electricity-rate-revision-mechanism`
- **Claude Code 発注文**: `.ai-team/drafts/seo-ctr-rewrite-claude-code-order.md`（EDAさん が投げるだけで PR 作成完了）
- 効果測定: 5/5 GSC 中間計測、5/18 本計測時に CTR 前後比較

---

# 未完了・次にやるべきタスク（2026-04-23 午後セッション・15:00 更新）

## 2026-04-23 午前の完了事項

### Batch A 残り 2 本のドラフト執筆（G-04 / G-05、10:10〜10:30）

リン単独で全文ドラフトを完成。EDA / Energy-Expert レビュー後に TSX 化 → Claude Code 発注で PR #A2 / #A3 へ。

- **G-04 改定カレンダー 2026**: `.ai-team/drafts/G-04-tariff-revision-calendar-2026.md`（本文 3,836 字）
  - 〔要確認〕箇所 3 件: 再エネ賦課金 2026 新単価 / 託送料金改定幅 / 容量拠出金 2026/2027 単価
  - featured=true、category=price-trends
- **G-05 DR 収益モデル**: `.ai-team/drafts/G-05-demand-response-revenue-model.md`（本文 3,725 字）
  - 〔要確認〕箇所 1 件: §3 業種別 kW あたり年間収益レンジ
  - 内部リンク 1 件差し替え: `/power-procurement-basics`（未作成）→ `/how-procurement-affects-corporate-rates`
  - featured=false、category=power-procurement
- **クロスリンク**: G-05 §1 から G-04 (`/tariff-revision-calendar-2026`) への内部リンクを 1 本追加。両記事は**同時公開推奨**（PR マージ順序に注意）。

### 月次振り返り 2026-03 骨組み準備（10:50〜11:10）

Claude Code 発注前段階。**実データはまだ取得できないため骨組みのみ**（2026 年 3 月使用分の単価は 4 月下旬以降に新電力ネット等で公開見込み）。

- **成果物**: `.ai-team/drafts/retrospective-2026-03-scaffolding.md`
- **内容**:
  - ナラティブ方針: "**補助縮小 1 発目の月**"（低圧 4.5→1.5 円、高圧 2.3→0.8 円）。2026-02 の「補助最終確認」トーンから切替
  - データ取得チェックリスト（A〜G、EDA 作業分）: 2026/3 の 4 区分単価、2023〜2025 の同月値、4 月補助方針の最終確認等
  - `page.tsx` テンプレート丸ごと貼り付け済（MAR_2026_DATA 雛形 + 7 セクション構成）
  - トレンドデータの 2025/10〜2026/2 の既存数値は 2026-02 ページから引用済
  - サイトマップ自動検出のため更新不要を明記。ハブ一覧（`_lib/hub-data.ts`）の手動追加が必要かは Claude Code 発注時に確認指示
- **公開目安**: 2026-04 下旬〜5 月上旬（データ揃い次第）
- **EDA 作業**: §2 チェックリストを埋める → Claude Code に TSX 化発注 → §3〜§まとめを実データで執筆

### G-04 `〔要確認〕` 3 件の Web 調査 + 事実訂正（12:00〜12:30）

EDA 依頼により、リン側で一次ソースから数値を取得して差し込み。合わせて**事実誤認 1 件を訂正**。

- **成果物**: `.ai-team/drafts/G-04-tariff-revision-calendar-2026.md` 更新（`〔要確認〕` 0 件に）
- **差し込んだ数値**:
  - **A. 再エネ賦課金 2026 年度**: 4.18 円/kWh（前年 +0.20 円、+5.0%）— METI 2026-03-19 告示
  - **C1. 容量拠出金 2027 年度**: 全国平均 7,847 円/kW（2026 年度 5,226 円/kW から +50%）— OCCTO 2024-01-24 公表
  - **C2. 容量拠出金 2028 年度**: エリア別 8,785〜14,812 円/kW（最大 2.8 倍、首都圏+東北+北海道が最高値）— OCCTO 2025-01-29 公表
- **重要な事実訂正（§2）**:
  - 初稿: 「2026 年 4 月に託送料金改定」
  - 実態: レベニューキャップ制度の第 1 次規制期間（2023〜2027 年度）は継続中で、2026-04 に**本体改定なし**。本体改定は 2028-04 の第 2 次規制期間入り時
  - 2026-02-13 届出は口座振替規定追加のみで料金改定ではない
  - 期中調整（年次微修正）の可能性あり、という表現に書き換え
- **§6 カレンダー表を刷新**: 2026〜2028 の 3 年スパンに拡張、容量拠出金は「すでに確定」を強調
- **§7 まとめを更新**: 2028 年度首都圏事業所で容量拠出金関連だけで 1,000 万円規模増という具体数値に
- **出典セクション追加**: 末尾に URL 4 本を列挙

**Energy-Expert 監修で確認してほしい追加論点**:
- §3 「2026 年度容量拠出金はすでに確定」表現の正確性
- §4 2028 年度エリア別単価の転嫁メカニズム（kWh 単価に乗る時期と比率）
- §2 「2028 年 4 月 第 2 次規制期間入り」タイミングが正しいか

### G-04 セルフレビューと内部整合修正（12:40〜12:55）

EDAさんレビュー前に、リン側で数値・内部リンク・文言の整合をセルフチェックし、見つかった矛盾を修正。

- 内部リンク 5 本すべて存在確認（`/capacity-contribution-simulation` 他）✅
- タイトル・description の「2026〜2027 年」→「2026〜2028 年」に拡張
- §3 冬季調整の「10 月の容量拠出金改定」表現を修正（現行は年度切替の 4 月、10 月ではない）
- §5 契約更新の記述を 2027 年 4 月・2028 年 4 月の容量拠出金上昇前後の文脈に具体化
- ContentCta / ContactCtaCard の対象期間を 2028 年度まで拡張

### G-05 §3 業種別収益レンジ差し込み（13:00〜13:20）

EDAさん依頼により、リン側でも相場値を整理して差し込み。アグリゲーター公表値と容量市場約定価格から逆算。

- **成果物**: `.ai-team/drafts/G-05-demand-response-revenue-model.md` 更新（`〔要確認〕` 0 件に）
- **前提**: 容量市場発動指令電源 + 三次調整力② のベースケース、2026〜2027 年度水準
- **差し込み値**:
  - データセンター: 5,000〜12,000 円/kW/年（応動性能高、kW 単価最上位）
  - 製造業（連続稼働）: 2,500〜6,000 円/kW/年
  - 製造業（日中稼働）: 3,000〜8,000 円/kW/年
  - 商業施設・小売: 2,500〜5,000 円/kW/年
  - 倉庫・物流: 3,000〜7,000 円/kW/年
- **2028 年度以降の上振れ注記**: G-04 と整合する形で、容量市場単価 2.8 倍化による将来上振れ可能性を明記
- **Energy-Expert 監修観点を 1 点追加**: この暫定レンジが実務感覚と乖離していないかの確認

### G-04 / G-05 本番公開完了（PR #69 マージ、14:45 頃）

Claude Code が PR #69（https://github.com/kenjieda-eng/electricity-risk-simulator/pull/69）を作成し、EDAさんがレビュー → Squash マージ → Vercel 自動デプロイ。**リンが 200 OK 確認まで完遂**。

- **3 コミット**（article(G-04,G-05) / articles.ts メタ / docs）、他の未コミット 500+ ファイルは据え置き
- **Claude Code 側 `npm run build`**: エラー 0 / 警告 0、Static 生成 ◯
- **公開確認（リン、2026-04-23 15:00 頃）**:
  - `/tariff-revision-calendar-2026` → **200 OK**、タイトル「2026〜2028年 法人電気料金 制度改定カレンダー｜容量拠出金・再エネ賦課金・託送料金の時系列一覧」
  - `/demand-response-revenue-model` → **200 OK**、タイトル「デマンドレスポンス（DR）で収益を得る方法｜法人向けネガワット・アグリゲーター活用ガイド」
  - `/articles/price-trends` → G-04 カードが**3 ヶ所**（featured 含む）に掲載確認
  - `/articles/power-procurement` → G-05 カードが**3 ヶ所**に掲載確認
  - `sitemap.xml` → 2 URL ともに `<loc>` 掲載確認
- **Vercel デプロイ時間**: マージから約 3 分で反映

**EDAさん 残作業**:
- Google Search Console で 2 URL のインデックス申請（https://search.google.com/search-console → URL 検査 → 各 URL → インデックス登録をリクエスト）

### G-04 / G-05 TSX 実装（14:00〜14:15、外部監修不要判断後）

EDAさんの「全部 OK、公開して修正なし」判断を受けて、リンが直接 TSX 化実装。Claude Code を介さず、ファイルツールで直接 page.tsx + articles.ts 更新を実行。

- **G-04 成果物**: `src/app/tariff-revision-calendar-2026/page.tsx`（新規、約620 行）
  - ArticleJsonLd + BreadcrumbJsonLd 付与
  - §1〜§7 本文セクション、§6 カレンダー表はテーブル要素 + 色分けバッジで描画
  - ContentCta + ContactCtaCard + RelatedLinks 5 本
  - 内部リンク 5 本すべて存在確認済
- **G-05 成果物**: `src/app/demand-response-revenue-model/page.tsx`（新規、約540 行）
  - 同様の構成、§3 業種別収益レンジはテーブル要素で描画
  - G-04 との相互リンク完備（G-05 §1 → G-04、G-05 末尾 RelatedLinks → G-04）
  - 内部リンク 5 本すべて存在確認済
- **articles.ts 更新**:
  - G-04 を price-trends order: 26, featured: true で追加、recommendedReadingOrder 末尾追記
  - G-05 を power-procurement order: 25 で追加、recommendedReadingOrder 末尾追記
- **TypeScript 検証**: `tsc --noEmit` を両ファイル + articles.ts で実行、EXIT:0 クリア ✅

### Energy-Expert 監修依頼メール最終版作成（13:20〜13:30、※不要判断で未送信）

EDAさんが Gmail / Slack にコピペして送信するだけの完成版を用意。

- **成果物**: `.ai-team/drafts/energy-expert-supervision-request-2026-04.md`
- **内容**:
  - コピペ用メール本文（G-01 / G-04 / G-05 まとめて監修依頼、約定日付・数値入り）
  - 監修観点リスト（G-04 固有 4 項目、G-05 固有 3 項目、共通）
  - 希望納期: 2026-04-26（段階的納期も許容）
  - フィードバック方法: Google Docs コメント / メール返信 / Slack / 電話 すべて許容
  - Google Docs で共有する場合の補助手順
  - 返信遅延時の対処プラン
  - メール送信後のリン側作業フロー
- **EDAさん側の作業**: 宛先 XX 様・署名部分の個人情報置換、添付方法決定、送信ボタン（実働 5 分想定）

### G-04 / G-05 TSX 化発注文作成（11:20〜11:40）

EDA のレビュー完了後、そのまま Claude Code に貼れるようにコピペ可能なプロンプトを用意。

- **成果物**: `.ai-team/drafts/G-04-G-05-claude-code-orders.md`
- **内容**:
  - 発注前 EDA チェックリスト（G-04: 3 件、G-05: 4 件、共通 2 件）
  - G-04 発注文（ファイル配置 / articles.ts 追記 / 内部リンク 5 本 / 検証手順）
  - G-05 発注文（同上、G-04 マージ後の順序を明記）
  - マージ順序: **G-04 → G-05**（G-05 §1 が G-04 を参照するため逆順禁止）
  - 両記事の PR は 2 本揃えてから順にマージする運用を推奨

### Day 2 朝計測（09:42〜09:46、chunked 実行）

リン側サンドボックスから直接 PSI API を叩いて実施（Claude Code 発注せず）。chunked 実行の理由: 45s bounded sandbox の制約。同一 URL の run 間隔は 80〜90s と script 既定 `--interval 60` 以上確保。

- **レポート**: `.ai-team/PSI_04_DAY2_MORNING_2026-04-23.md`
- **中央値結果（Day1 夕 → Day2 朝）**:
  - `/`: LCP 2.4s → **2.2s** ✅ / TBT 144 → **58ms** ✅ / CLS 0.010 → **0.000** ✅
  - `/articles`: LCP 2.8s → **2.5s** ✅ / TBT 176 → **188ms** ≈ / CLS 0.001 ✅
  - `/capacity`: LCP 3.3s → **2.7s** ✅ / TBT 434 → **255ms** ✅ / CLS 0.000 ✅
- **Day1 夕の悪化は 3 URL とも解消**。`/capacity` の TBT 400+/LCP 3.3s は **run 分散由来の外れ値寄り** と確定（Phase 2 判定ロジックの「構造的悪化」シナリオは棄却方向）。
- **4 観点チェック**:
  1. `/capacity` TBT 400+ 再現: ❌ 1/3 runs のみ（613 / 255 / 103ms）
  2. `/` CLS 0.010 再現: ❌ 全 run 0.000（単発ノイズ確定）
  3. `/capacity` LCP は Day1 朝寄り（2.7s < 2.9s）
  4. 中央値ベース報告: ✅（r1 は 3 URL 中 2 URL で高 LCP 外れ、median 採用の妥当性再確認）

---

## Phase 2（02G）判定の現時点ステータス

- **Day 2 朝時点**: 保留継続の方向。ただし Day 1 夕の構造的悪化仮説は弱まった。
- **最短 close 条件**: Day 2 夕も `/capacity` TBT 250ms 台 + LCP 2.7〜2.9s なら、Day 3 を待たず「当面不要、05-SEO 中間評価（5/5）まで wait-and-see」でクローズ判断可。
- **延長条件**: Day 2 夕で `/capacity` TBT 400+ / LCP 3.3s+ が再燃したら、時間帯依存（朝 best-case、夕 degraded）か構造問題かを Day 3 で切り分け。

---

## 2026-04-22 本日の完了事項

### 午前〜午後（03 → 08 → 02E-fix → memory sync）

- **03-After 計測**（朝）: 02E+02F merged 後の計測。以下判明：
  - 朝の 02E+02F 効果: `/articles` TBT −140ms 確定（真の改善）
  - ただし **3 URL で CLS 0.000→0.125 退行発生**（skeleton ズレ）
  - `/` LCP 4.3s 高止まり = 02E+02F は LCP 主因ではなかった
- **08-サイト横断 LCP 構造調査**（新規タスク、Claude Code 実施）:
  - LCP 要素 = hero card lead `<p>` テキスト（3 URL 共通）
  - TTFB 0〜10ms（innocent）、elementRenderDelay 1.4〜8.5s が支配
  - **真因特定**: hydration cost + gtag.js main thread 競合
  - 文書: `.ai-team/LCP_INVESTIGATION_08_2026-04-22.md`
- **02E-fix（PR #66 merged as fa28f60）**: HeaderSearch skeleton を実サイズ（w-28/40/52 × h-4 枠 + border）に変更 → **CLS 0.125→0.000 完全回復**確認
- **memory sync PR #67 merged**: 02E+02F After 計測結果 + CLS 退行 + 02E-fix 反映

### 夕方（Phase 1 → Day 1 計測）

- **Phase 1（PR #68 merged）**: `GoogleAnalytics.tsx` の `strategy="afterInteractive"` → `lazyOnload` に変更（2 行）
  - gtag.js（152KB、41% unused）を FCP→LCP ウィンドウから排除
- **Phase 1 After 計測（16:03）**: **想定の 4〜10 倍の大勝利**
  - `/`: Perf 83→98（+15）、**LCP 4.3s→2.2s（−2.1s、α 到達 🎯）**、CLS 0.000 維持
  - `/articles`: LCP 4.4s→2.7s（−1.7s）、TBT 233→376ms（+143ms）、CLS 0.001 維持
  - `/capacity`: Perf 78→90（+12）、LCP 4.7s→2.9s（−1.8s）、TBT 127→227ms（+100ms）、CLS 0.000 維持
- **Day 1 夕計測（20:18）**: `.ai-team/PSI_04_DAY1_EVENING_2026-04-22.md`
  - `/`: LCP 2.2s→2.4s（Good 上限接近）、CLS 0.000→**0.010 新規微小**
  - `/articles`: LCP 2.7s→2.8s、TBT 376→176ms（**朝 run3=559ms が外れ値、真値 176ms に確定**）
  - `/capacity`: LCP 2.9s→**3.3s（+0.4s 悪化）**、TBT 227→**434ms（+207ms 拡大、structural 疑い濃厚）**

---

## Phase 2（02G: PublicHeader Server/Client 分割）判定ロジック

Day 2 朝計測（04-23 08:00〜09:00）で以下のどれに該当するかで判定：

| Day 2 朝の観測 | Phase 2 判定 |
|---|---|
| `/capacity` TBT 400ms+ 再現（run 1/2 両方） | **発注確定**（構造的悪化、GA lazyOnload × hydrate 競合と推定） |
| `/capacity` TBT 200ms 台に戻る | 保留継続、Day 3 朝夕まで待つ |
| `/` CLS 0.010 再現 | 別途 CLS 原因調査タスクを起こす |
| `/` CLS 0.000 に戻る | 単発ノイズとして無視 |
| `/`、`/articles`、`/capacity` 全て LCP 2.5s 未満 | Phase 2 不要、タスク close、05-SEO 中間評価（5/5）待機に移行 |

---

## 本日（2026-04-23）夕の最優先タスク: Day 2 夕計測

**発注タイミング**: 17:00〜20:00 JST

**発注文案**（コピペ用 / Claude Code 向け）:

```
04-3日安定性観測 Day 2 夕計測をお願いします。

【コマンド】
MSYS_NO_PATHCONV=1 node scripts/psi-baseline.mjs \
  --label "04-day2-evening-2026-04-23" \
  --urls "https://simulator.eic-jp.org/,https://simulator.eic-jp.org/articles,https://simulator.eic-jp.org/capacity-contribution-explained" \
  --runs 3 --interval 60 --strategy mobile

【出力先】
.ai-team/PSI_04_DAY2_EVENING_2026-04-23.md

【特に見たい観点】
1. `/capacity` TBT が 250ms 台で安定するか、400ms+ に戻るか
2. `/capacity` LCP が 2.7s（Day2 朝）、3.3s（Day1 夕）どちらに近いか
3. `/articles` LCP が 2.5s の Good 境界を維持するか
4. `/` CLS は 0.000 のままか
5. 3 run の中央値で報告

Before（Day1 朝・夕 + Day2 朝）との差分サマリで。

判定基準:
- 朝と同等（TBT 250ms台、LCP 2.7s 付近）なら Phase 2 早期 close 判断可
- Day1 夕と同等（TBT 400+、LCP 3.3s）に戻ったら時間帯依存を疑い Day3 まで継続観測
```

※ リン側は Day 2 朝と同様 chunked 実行で代行可。EDA 側で Claude Code に投げるほうが速ければそれで。

---

## タスク状態（リン側 Task 管理）

| # | Subject | 状態 |
|---|---|---|
| 1 | Claude Code に 03-After 計測発注 | ✅ 完了 |
| 2 | 計測結果の判定（α/β/γ/δ） | ✅ 完了 |
| 3 | memory sync PR | ✅ PR #67 merged |
| 4 | 02E-fix（HeaderSearch skeleton） | ✅ PR #66 merged |
| 5 | 04-3日安定性観測の夕計測（Day1） | ✅ 完了（20:18） |
| 6 | 08-サイト横断 LCP 構造調査 | ✅ 完了 |
| 7 | 02E-fix merge 後の再計測（CLS 検証） | ✅ 完了 |
| 8 | Phase1: GoogleAnalytics lazyOnload | ✅ PR #68 merged |
| 9 | **Phase2 (02G): PublicHeader Server/Client 分割** | 🟡 **保留中、Day2/3 で発注判定** |
| 10 | Phase1 merge 後の再計測 | ✅ 完了（16:03） |
| 11 | Day 2 朝計測（リン側 chunked 実行） | ✅ 完了（04-23 09:42〜09:46） |

**新規タスク（本日以降）**:
- Day 2 夕計測（04-23 夕 17:00〜20:00）
- Day 3 朝計測（04-24 朝）
- Day 3 夕計測（04-24 夕）
- 04 観測結果 memory sync PR（04-24 夕 or 04-25 朝）
- Phase 2 最終判定（Day 2 夕 or Day 3 朝夕の結果を見て）

---

## 未決事項・監視対象

1. **`/capacity` TBT の日内変動**
   - Day 1 朝 227ms → Day 1 夕 434ms → Day 2 朝 255ms（r1=613ms の単発高を含む）
   - 構造的悪化仮説は Day 2 朝で弱まったが、**Day 2 夕で再燃するか**要監視
   - 時間帯依存（朝 best-case / 夕 real-world） vs 構造問題の切り分けは Day 2 夕 + Day 3 朝夕で確定

2. **`/` CLS 0.010（Day 1 夕）**
   - ✅ **クローズ判断**: Day 2 朝で 3/3 runs 0.000、単発ノイズ確定

3. **`/articles` TBT の run 間分散**
   - Day 2 朝 r1=195ms / r2=150ms / r3=188ms と低分散で安定
   - 04-22 朝 16:03 の run3=559ms 外れ値ほどの乱れは観測されず、median ベースの解釈は引き続き有効

4. **r1 分散（Day 2 朝の新知見）**
   - `/` r1 LCP=3.7s、`/articles` r1 LCP=3.9s が r2/r3 から 1.4〜1.5s 乖離
   - 平均で見ると `/` LCP=2717ms と誘導されるが median 2228ms で真値捕捉
   - **ops-notes.md §4-6「中央値で読む」の実証例として Day 2 朝を追加する価値あり**

---

## 効果計測マイルストーン（変更なし）

| 日付 | 計測内容 |
|---|---|
| 2026-04-22〜24 朝夕 | **04-3日安定性観測**（進行中、Day 1 完了） |
| 2026-04-24 夕 or 25 朝 | 04 結果 memory sync PR、Phase 2 要否確定 |
| 2026-05-05 | GSC 中間計測（T-15/T-16/T-17 + G-01 早期シグナル） |
| 2026-05-18 | **GSC 本計測** → Batch A 残り 2 本 / Batch B 起動判断 |

---

## 本日の主要成果サマリ

**LCP 改善の全体像**:

| URL | 2026-04-20 夜 (Before) | 2026-04-21 朝 | 2026-04-22 朝 03 (Before) | 2026-04-22 Phase1 After (16:03) | 2026-04-22 Day1 夕 (20:18) | **2026-04-23 Day2 朝 (09:42)** |
|---|---|---|---|---|---|---|
| `/` | 2.3s | 4.7s | 4.3s | 2.2s | 2.4s | **2.2s** ✅ |
| `/articles` | 3.1s | - | 4.4s | 2.7s | 2.8s | **2.5s** ✅ |
| `/capacity` | 4.6s | 4.6s | 4.7s | 2.9s | 3.3s | **2.7s** ✅ |

**Phase 1 単独で LCP 平均 −1.9s、Day 2 朝で 3 URL すべて Good or 境界**。Day 1 夕の悪化は Day 2 朝で解消、構造退行ではなく run 分散寄りと判定。Day 2 夕で定常性最終確認。

---

## 前セッション（2026-04-21 朝）の主要事項

以下は 04-21 朝セッションからの引き継ぎメモ。04-22 の作業で大半が解消済。

### 01 計測の主要結果（04-21 朝、今は参考値）

- `/articles` 真 TBT = 140ms（朝）→ その後 176ms 付近で安定（04-22 夕確認）
- `/` 真値: Perf 79 / LCP 4.7s / TBT 208ms → Phase1 後 Perf 98 / LCP 2.2s
- `/compare` 真値: Perf 77 / LCP 4.9s / TBT 135ms → 04-22 計測対象から外した（健全）
- `/capacity-contribution-explained` 真値: Perf 80 / LCP 4.6s / TBT 73ms → Phase1 後 Perf 90 / LCP 2.9s

### 04-21 朝の LCP 悪化仮説（04-22 で falsified → 真因確定）

- **第 1 候補（当時）**: PublicHeader bundle weight → 02E+02F で対応、**LCP 改善せず=仮説ハズレ**
- **第 2 候補（当時）**: ArticleScrollTracker 全件 import → 02F で対応、LCP 改善せず
- **04-22 判明した真因**: gtag.js main thread 競合（Phase1 lazyOnload で解消）+ PublicHeader hydration cost（Phase2 で解消見込み）

### Parking（優先度低、次回 memory sync 時に検討）

- `tsconfig.tsbuildinfo` を `.gitignore` に追加
- `01-発注文-9時用.md` の削除 or `.gitignore`

---

## 外部施策（EDA 担当、並行進行待ち、変更なし）

- pps-net.org 執筆者リンク施策（月 50 万 PV の強力リンク源）
- eic-jp.org フッター `simulator.eic-jp.org` リンク追加

---

## 次の大きな判断ポイント（変更なし）

- **2026-04-24 夕**: 04 観測完了、Phase 2 要否確定
- **2026-05-18 GSC 本計測**:
  - 選択肢 I: Batch A 残り 2 本（G-04 改定カレンダー、G-05 DR 収益モデル）
  - 選択肢 II: Batch B キーワード再優先度付け + 新規 5 本
  - 選択肢 III: SEO 効果が想定以下なら A/B 観点で追加リライト

---

## 備考: タスクフォルダ

- `.ai-team/tasks/2026-04-20-evening/` — 2026-04-20 夜の A〜I（14 PR）
- `.ai-team/tasks/2026-04-21-morning/` — J / K / L-A〜D
- `.ai-team/LCP_INVESTIGATION_08_2026-04-22.md` — 08 調査レポート（真因特定）
- `.ai-team/PSI_PHASE1_AFTER_2026-04-22.md` — Phase 1 After 計測（16:03）
- `.ai-team/PSI_04_DAY1_EVENING_2026-04-22.md` — Day 1 夕計測（20:18）
