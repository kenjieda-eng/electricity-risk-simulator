# チーム意思決定ログ

> このファイルは、AIエージェントチームの重要な意思決定を記録する。
> 新しいセッション開始時に必ず読み込むこと。

---

## 2026-04-30 B-22: GSC 7日データに基づく 5記事 CTR 最適化 (PR #135)

- (1) bilateral-power-contracts, (5) renewable-energy-surcharge: title/description 全更新
- (2) capacity, (3) accounting-guide, (4) price-trend-10-years: keywords のみ追加（title/desc は既に最適化済のため変更せず）
- 期待効果: 月 10〜20 クリック増（即反映）
- リン検証: PR #135 全項目 PASS、マージ判定 GO
- ブランチ: `claude/B-22-title-description-optimization-20260430`、SHA `9dc9079`、diff stat 5 files +27/-6

---

## 2026-04-28（リン整備セッション + B-19 マージ）

### 2026-04-28-D1: 4/27 INTERNAL_LINK_DENSITY_AUDIT は方法論欠陥

旧監査の grep `grep -c 'href="/'` は JSX 属性形式のみ計測し、`RelatedLinks` の
`{ href: "/..." }` 形式（オブジェクトプロパティ）を見逃していた。25本中23本が誤検出。

→ 修正版（`INTERNAL_LINK_DENSITY_AUDIT_2026-04-28_CORRECTED.md`）で上書き、
旧 B-9 / B-10 発注は廃棄、新 B-19（真に低密度な6本）に置換。

### 2026-04-28-D2: B-19（PR #127 / SHA `12e8544`）マージ完了

- Branch: `claude/B-19-low-density-hubs-20260428-1340`
- 6 files changed, +77 -0
- Build: 176秒、エラーなし
- 全6ファイル outgoing ≥5（manga は ≥8）達成

### 2026-04-28-D3: ContactCtaCard ≠ ContentCta の発見

B-19 実装時に判明:
- `posters` `manga` などのハブ系記事は `ContactCtaCard`（src/components/contact/）を使用
- 通常記事ページは `ContentCta`（src/components/simulator/）を使用
- `data-visualizations` は ContactCtaCard すら無く、`ComparisonRadar` 直後に挿入

→ 今後の発注プロンプトでは「ContentCta or ContactCtaCard の **直前**」と両形式に対応する文言にすべき。
→ data-visualizations のような特殊レイアウト記事は「`</main>` 直前」を fallback として明示。

### 2026-04-28-D4: リン側準備完了の確認

PART3（B-19/B-20/B-21/C-1/T1-#11/T1-#13/B-14）+ 月次振り返り 2026-05号完成形 +
GSC 流し込みヘルパー + 薄い記事補強プラン + Lesson-09 すべて準備済。

### 2026-04-28-D5: 本日 7 PR を main に投入（圧巻のスループット）

朝 wait-and-see モード予定だったが、PART3 完成後に KENJI さんから即発注の判断があり、
1日で 7 PR がすべてマージされた。本日 main HEAD = `6256bc0`。

| PR | ID | 内容 | 効果 |
|---|---|---|---|
| #128 | B-1d-1 | TOC を how-to 系4記事に追加 | TOC 47→51 |
| #127 | B-19 | 低密度ハブ6本に RelatedLinks 追加 | 6資源ハブの outgoing 強化 |
| #129 | B-21 | Footer に資料・コンテンツハブ5本リンク追加 | 全549頁から資源ハブへ incoming 強化 |
| #130 | B-1d-2 | TOC を基礎・FAQ系9記事に追加 | TOC 51→60 |
| #131 | B-1d-3 | TOC を契約・プラン系9記事に追加 | TOC 60→69 |
| #132 | B-6b | ReviewJsonLd 追加 + 1記事適用 | Review schema 0→1 + 共通基盤完成 |
| #133 | B-6b-2 | 残り case-study 9 + switching に Review schema | Review schema 1→11 |

最終達成: TOC **47→69**（+22）/ Review schema **0→11**（+11）/ 6資源ハブの中央駅化完成。
5/5 計測まで残 7 日、施策は出し尽くした状態で wait-and-see モード本格突入。

### 2026-04-28-D6: B-6b の slug spec ミスと Lesson-11 確立

リン側の発注プロンプトで case-study 系 7 slug のうち 6 slug が空想（実在しない）だった。
ClaudeCode は強引に新規作成せず、実在 1 slug のみ正しく適用 + 残りは差分発注に回す形で報告
（Lesson-07 を正しく実行）。

→ 教訓 Lesson-11: **発注プロンプトの slug は必ず repo を `ls src/app/` で実地確認してから書く**。
  特に case-study / switching / case のような事例系記事は命名規則がブレやすい。

差分発注 B-6b-2 で 10 件追加し、最終的に当初目標 7 件を超えて **11 件適用達成**。

---

## 2026-04-18（キックオフ）

### ターゲット定義（全員合意）
**「電力コストの見直しを任されたが、何をどう判断すればいいかわからない法人・自治体の担当者」**

### ペルソナ
1. **総務部 電力担当（中堅企業）** — 40代、専門家ではない、上司から「電気代を下げろ」と言われている
2. **自治体 施設管理課** — 50代、公共施設の電力一括管理、入札対応が必要
3. **エネルギー管理士（大企業）** — 30代、専門知識あり、最新の市場動向・データを求めている

### インフラ完了事項
- Google Cloud サービスアカウント作成済み（`eic-analytics@eic-simulator.iam.gserviceaccount.com`）
- GA4 閲覧権限付与済み（プロパティID: 311657832）
- Search Console 閲覧権限付与済み（サイト: https://simulator.eic-jp.org）
- `.env.local` に認証情報設定済み
- `scripts/test-google-api.mjs` で疎通確認済み（2026-04-18）
- `googleapis` パッケージをインストール済み

### GA4ベースライン（2026-04-11〜04-18、7日間）
- 総ユーザー: 872
- 総セッション: 1,074
- 総PV: 5,014
- 平日: 150〜180ユーザー/日、土日: 26〜28ユーザー/日

### Search Console上位クエリ（同期間）
- 「電気料金推移 10年 法人」— 順位2.9、CTR 45.5%（強い）
- 「高圧 電力 見直し」— 順位7.7、クリック1（ターゲットど真ん中、改善余地大）
- 「燃料費調整額 市場価格調整額 違い」— 順位6.0（実務者向け）

### 改善提案（優先度順、EDA承認待ち）

#### 優先度A: 今すぐやるべき（1〜2週間）
- **A-1** 記事ページにインラインCTAコンポーネント追加（カテゴリ別自動出し分け）→ Frontend-Dev + Content-Strat ⭐ 最優先
- **A-2** シミュレーター計算ロジックのユニットテスト作成（1,300行のHomePageClientから計算ロジック切り出し）→ QA-Engineer + Backend-Dev
- **A-3** ストレスシナリオ倍率の検証・更新（ハードコード値の妥当性確認）→ Energy-Expert

#### 優先度B: 2〜4週間で着手
- **B-1** HomePageClientの分割リファクタリング → Frontend-Dev + Backend-Dev
- **B-2** 記事ハブのUX改善（ペルソナ別入口に整理）→ Content-Strat + Frontend-Dev
- **B-3** リンク切れ・未実装ページの一掃 → QA-Engineer
- **B-4** TOPページのCTA配置改善 + ハブとしての再設計（旧A-1）→ Frontend-Dev

### EDAの重要な指摘（2026-04-18）

💬 「TOPから来る人ばかりではないよね。そういう意味でTOPって重要かね？」
→ TOPページ改善を最優先から格下げ。記事ページの改善を最優先に変更。
→ TOPの役割を「ランディング」→「ハブ（全体地図・ブックマーク判断の場）」に再定義。

💬 「そもそもTOPやサイトの名前がすでにこのサイトのコンテンツ全体からするとちがってきているのではないだろうか？もともとシミュレーターだけのサイトだったんだけど、もうそうでなくなっている。ターゲットの法人担当者からしたら、シミュレーターを使いたいわけではないから」
💬 「シミュレーターをさせるのがゴールではなく、問い合わせがゴールです」
→ **サイトの根本的な再定義が必要。**

### サイト再定義（2026-04-18、EDA方針）

#### サイトの本質（旧→新）
- 旧: 電気料金シミュレーター（計算ツール）
- 新: **法人の電力コスト意思決定を支援する総合プラットフォーム**

#### 最終ゴール（旧→新）
- 旧: シミュレーション実行
- 新: **問い合わせ（エネルギー情報センターへの相談）**

#### ファネル
```
検索流入 → 記事で信頼獲得 → サイト全体像を理解 → シミュレーターで自分事化 → 問い合わせ
```
シミュレーターはゴールではなく、問い合わせに至る中間ステップ。

#### KPI再設計
- North Star Metric: **月間問い合わせ数**
- 先行指標: シミュレーション完了数、記事→シミュレーター遷移率、リピーター率
- 健全性指標: 検索順位、PV、記事滞在時間

#### サイト名リブランディング（2026-04-18、EDA承認済み）

- **新サイト名: 法人電気料金ナビ**
- **サブタイトル: 見直し・比較・リスク診断**
- **タイトルタグ: `法人電気料金ナビ｜見直し・比較・リスク診断`**
- ヘッダーに「一般社団法人エネルギー情報センター運営」を常に表示し信頼性を担保

💬 EDA: 「いいですね」（候補3案の中からチーム推薦の「法人電気料金ナビ」を承認）

選定理由:
- 短く覚えやすい（10文字）、口頭で伝えやすい
- 「ナビ」=迷っている人を案内する。ターゲットの状態そのもの
- 「法人電気料金」がSEOキーワードとしてそのまま入る
- シミュレーターだけでなく記事・診断・分析すべてを包含する

#### 要対応事項
- サイト名変更の実装（全ページのmetadata、OGP、JSON-LD、ヘッダー、フッター）
- ~~シミュレーター結果ページ → 問い合わせ導線の追加~~ ✅ **完了 2026-04-18**（Frontend-Dev + Backend-Dev）
- 全ページの問い合わせCTA設計（ContactCtaCardコンポーネントを再利用）

### Sprint 1-09 実装記録（2026-04-18、Frontend-Dev + Backend-Dev）

#### 実装範囲
- **Frontend-Dev**: 再利用型 Client Component `src/components/contact/ContactCtaCard.tsx` 作成
  - Props: `source` / `variant` (primary/secondary) / `heading` / `description` / `ctaLabel` / `context`
  - 結果文脈（riskLabel, riskScore, contractType, region, diffRate, resultId）を query params として /contact に引き継ぎ
  - クリック時に GA4 `contact_cta_click` イベント送信（source/variant/リスク指標をパラメータとして）
- **Frontend-Dev**: `ComparePageClient` に CTA を 2箇所挿入
  - (1) 結果サマリー直下: primary variant（最も熱量の高い瞬間）
  - (2) 「再度入力する」の下: secondary variant（読了後の最終接点）
- **Backend-Dev**: `/contact` を Server Component のまま `searchParams` 対応（Next.js 16 の `Promise<searchParams>` 形式）
  - `?from=compare-result-primary&risk_label=...&risk_score=...&contract_type=...&region=...&diff_rate=...&result_id=...` を受けて冒頭にコンテクストバナーを表示
  - 契約区分・地域を日本語化して表示
  - 「シミュレーター結果を引き継ぎ中」バッジ + 来訪元表示 + 結果ID を担当者伝達用に表示

#### デザイン判断
- CTA 色は敢えて **amber（橙）** を primary で採用。サイト全体の sky-blue とは差別化し、「行動喚起の特別セクション」と視覚的に認識させる
- リスクラベルとリスクスコアをボタン近傍に表示し、ユーザーに「この結果を持って相談に進む」実感を付与
- GA4 イベントは `source` 別に区別できるため、どの配置が CTR 高いかを Growth-Analyst が後日計測可能

#### 次ステップ候補
- 他ページ（/simulate 結果、/benchmark、/journey 末尾）への ContactCtaCard 展開
- `source` 別 CTR を Growth-Analyst が GA4 で比較しベストプラクティス確立

#### 優先度C: 1〜2ヶ月で取り組む
- **C-1** 検索キーワード強化記事の企画・制作（5〜10本）→ Content-Strat + Energy-Expert
- **C-2** 診断ツール10種への導線強化 → Frontend-Dev + Content-Strat
- **C-3** GA4カスタムイベントの設計・実装 → Growth-Analyst + Frontend-Dev

---

## 2026-04-23/24 スプリント 確定事項

### SEO 大型リリース（3 PR マージ + 1 PR 作業中）

#### PR #69（2026-04-23）: Batch A G-04/G-05 公開
- **G-04** `/tariff-revision-calendar-2026`（price-trends, featured:true, order:26）
  - タイトル: 「2026〜2028年 法人電気料金 制度改定カレンダー｜容量拠出金・再エネ賦課金・託送料金の時系列一覧」
  - 実数字: 再エネ賦課金 2026年度 4.18円/kWh、容量拠出金 2027年度 7,847円/kW、2028年度 首都圏 14,812円/kW
- **G-05** `/demand-response-revenue-model`（power-procurement, order:25）
  - 業種別 kW あたり年間収益レンジ 5 業種、分配比率 60-70% 需要家
- **Energy-Expert 外部監修は不要判断**（EDAさん確定、実質的存在しないロール）

#### PR #70（2026-04-24）: CTR リライト 7 記事
- 対象: /jepx-price-trend-and-corporate-impact, /market-price-adjustment, /business-transfer-name-change-procedure, /electricity-expense-accounting-guide, /capacity-contribution-explained, /when-will-business-electricity-prices-drop, /electricity-rate-revision-mechanism
- 根拠データ: GSC 過去 3 か月、4/13 以降 表示 16.4倍、CTR 7.77% → 2.46% 低下（一般ユーザー流入が本格化しクリック取れていない記事を特定）
- 特に高 ROI: /jepx-price-trend-and-corporate-impact（表示 577 / CTR 0.5%）→ リライト効果を 5/5 GSC で検証

#### PR 作業中: /kenji-eda プロフィール強化
- 著書 8 冊 × Amazon リンク
- 講演テーマ 6、講演実績 23 団体（政府/商工会議所/公益財団/企業教育機関）
- 最新の登壇: 福井商工会議所 4/28、東京商工会議所 4/10 アーカイブ
- サイト内おすすめコンテンツ 9 記事への内部リンク
- JSON-LD 強化（Book 型 8 件、sameAs 拡充）

### SEO バックリンク戦略（確定）

**1 リンク戦略**: セミナー主催者への依頼は **`/kenji-eda` の URL 1 本のみ**。2 本以上の依頼はビジネスマナー上差し出がましいため NG。

- 理由: 商工会議所等の主催者は EDAさん の講師略歴欄に自然に URL を掲載してくれる（福井・東京商工会議所で確認済）
- 各セミナーごとに質の高いバックリンクが 1 本蓄積
- 着地ページ（/kenji-eda）で 9 本の内部リンクに分岐させ、サイト内回遊を最大化 → リンクジュース還流

### Phase 2（02G: PublicHeader Server/Client 分割）判定

**発注見送り、5/5 GSC 中間計測まで wait-and-see** 確定。

- Day 1-3 朝夕の観測で TBT は 3 URL すべて改善（Phase 1 効果の定常化）
- `/` の LCP run 分散は構造問題ではなく run 分散 or CDN キャッシュ状態の影響
- 3 URL とも Perf 90+ 維持
- 実装コスト vs 改善余地が見合わないと判定

### GSC 観測基準線（2026-04-24 時点）

- 合計クリック 262 / 表示 7,925 / CTR 3.31% / 平均順位 9.0（過去 3 か月）
- 勝ちクエリ TOP: 「電気料金推移 10年 法人」CTR 25.8%、「高圧 電力 見直し」15.4%
- Batch B キーワード候補 8 件（ダックカーブ、容量拠出金とは、電力 BCP、蓄電池減価償却、電気料金 推移 グラフ、法人 電気料金 値上げ、電気代 勘定科目、電気料金 推移 10年 法人）

### EDAさんの重要指摘（2026-04-23/24）

1. 「3月は関係者のアクセスがほとんど」「一般の人のアクセスは 4月2週目くらいから」 → GA4 のユーザー平均ビューが高いページは除外して分析
2. 「先方サイトなので、1 リンクのみ・プロフィールのみが健全」 → バックリンク戦略の方針確定
3. 「外部監修は不要」 → Energy-Expert ロール不要確定
4. 「全部 OK、公開して修正なし」 → リン自律実装への信頼度向上、同等の大型変更もリン主導で可
