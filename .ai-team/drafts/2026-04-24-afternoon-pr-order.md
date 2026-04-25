# Claude Code 発注文: 2026-04-24 午後 リン作業の PR 化

**作成**: 2026-04-24 14:00 リン
**EDAさん へ**: このファイルを Claude Code にそのまま投げてください。500+ の未コミット変更が残っているため、**選別 add** を厳守してください。

---

## タスク概要

リンが 2026-04-24 午後に実施した 3 系統の編集を 3 つの PR に分けて main に取り込んでください。

1. **PR-A**: AuthorBadge 強化（/kenji-eda 被リンク 59 記事化）+ ArticleJsonLd 強化
2. **PR-B**: G-04/G-05 に FAQPage + AuthorBadge 配置
3. **PR-C**: PR #72 復旧（内部リンク 9 本の再追加）

各 PR ごとに独立のブランチを切って、選別 add でコミットし、PR を作成してください。

---

## PR-A: AuthorBadge 強化（/kenji-eda 被リンク 59 記事化）

### 目的
AuthorBadge コンポーネント 1 つを編集するだけで、既存の 53 記事 + 新規 6 記事 = 59 記事すべてから /kenji-eda へ被リンクが張られる。E-E-A-T 強化の最大効率施策。

### 対象ファイル
```
src/components/market-data/AuthorBadge.tsx   (Link /kenji-eda 追加)
src/components/seo/JsonLd.tsx                (Person.url, sameAs, jobTitle, alumniOf 追加)
```

### 実行手順
```bash
# 1. 新ブランチ
git switch -c seo/author-badge-kenji-eda-link-2026-04-24

# 2. 選別 add
git add src/components/market-data/AuthorBadge.tsx src/components/seo/JsonLd.tsx

# 3. build 検証
npm run build

# 4. エラー 0 なら commit
git commit -m "seo(e-e-a-t): AuthorBadge に /kenji-eda リンクを追加、ArticleJsonLd author を強化

- AuthorBadge に 'この記事の著者: 江田 健二（プロフィール →）' リンク追加
  → 既存 53 記事 + 新規 6 記事 = 59 記事から /kenji-eda への被リンク実現
- ArticleJsonLd Person.url を /kenji-eda に紐付け（全記事で Google 認識強化）
- Person.jobTitle '代表理事' → '理事' に正確化
- Person.sameAs に /kenji-eda + eic-jp.org 追加
- Person.alumniOf に 慶應義塾大学 経済学部 追加"

# 5. push + PR 作成
git push -u origin seo/author-badge-kenji-eda-link-2026-04-24
gh pr create --base main --title "seo(e-e-a-t): /kenji-eda 被リンク 59 記事化 + JsonLd 著者情報強化" --body "AuthorBadge と ArticleJsonLd を編集するだけで、59 記事から /kenji-eda への被リンク + 全記事の Person 構造化データ強化を実現。"
```

### 検証ポイント
- npm run build エラー 0
- デプロイ後、任意の記事（例: /capacity-contribution-explained）の HTML を curl して確認:
  - AuthorBadge 内の "href=\"/kenji-eda\"" が 2 箇所含まれる
  - ld+json の "author" に url フィールドがあり /kenji-eda を指している

---

## PR-B: G-04/G-05 に FAQPage 構造化データ + AuthorBadge 配置

### 目的
G-04/G-05 の Featured Snippet 獲得 + 著者バッジ統一。

### 対象ファイル
```
src/app/tariff-revision-calendar-2026/page.tsx    (FAQ_ITEMS + MarketDataFaq + AuthorBadge)
src/app/demand-response-revenue-model/page.tsx    (FAQ_ITEMS + MarketDataFaq + AuthorBadge)
```

### 実行手順
```bash
# PR-A マージ後に実施
git switch main && git pull
git switch -c seo/g04-g05-faq-and-authorbadge-2026-04-24

git add src/app/tariff-revision-calendar-2026/page.tsx src/app/demand-response-revenue-model/page.tsx

npm run build

git commit -m "seo(faq): G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加

- tariff-revision-calendar-2026: FAQ 5問 + MarketDataFaq + AuthorBadge
- demand-response-revenue-model: FAQ 5問 + MarketDataFaq + AuthorBadge
- ArticleJsonLd faq prop 経由で FAQPage JSON-LD 出力
- 強調スニペット獲得を狙う"

git push -u origin seo/g04-g05-faq-and-authorbadge-2026-04-24
gh pr create --base main --title "seo(faq): G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加"
```

---

## PR-C: 内部リンク復旧（PR #72 再現）

### 目的
PR #72 で実施したはずの G-04/G-05 への内部リンク +9 本がソースコードに反映されていなかった問題を復旧。

### 対象ファイル（8 本 + CTR リライト 5 本の AuthorBadge 配置も含める）
```
src/app/capacity-contribution-explained/page.tsx          (+G-04)
src/app/electricity-price-outlook-2026/page.tsx           (+G-04)
src/app/capacity-market-and-corporate-rates/page.tsx      (+G-04 +G-05)
src/app/demand-response-cost-benefit/page.tsx             (+G-05)
src/app/demand-response-suited-corporations/page.tsx      (+G-05)
src/app/how-procurement-affects-corporate-rates/page.tsx  (+G-05)
src/app/capacity-contribution-history/page.tsx            (+G-04)
src/app/power-risk-management/page.tsx                    (+G-05)
src/app/jepx-price-trend-and-corporate-impact/page.tsx    (AuthorBadge 配置)
src/app/market-price-adjustment/page.tsx                  (AuthorBadge 配置)
src/app/electricity-expense-accounting-guide/page.tsx     (AuthorBadge 配置)
src/app/when-will-business-electricity-prices-drop/page.tsx  (AuthorBadge 配置)
src/app/electricity-rate-revision-mechanism/page.tsx      (AuthorBadge 配置)
```

### 実行手順
```bash
# PR-A, PR-B マージ後に実施
git switch main && git pull
git switch -c seo/g04-g05-internal-linking-recovery-2026-04-24

# 選別 add（↑ 13 ファイルのみ）
git add \
  src/app/capacity-contribution-explained/page.tsx \
  src/app/electricity-price-outlook-2026/page.tsx \
  src/app/capacity-market-and-corporate-rates/page.tsx \
  src/app/demand-response-cost-benefit/page.tsx \
  src/app/demand-response-suited-corporations/page.tsx \
  src/app/how-procurement-affects-corporate-rates/page.tsx \
  src/app/capacity-contribution-history/page.tsx \
  src/app/power-risk-management/page.tsx \
  src/app/jepx-price-trend-and-corporate-impact/page.tsx \
  src/app/market-price-adjustment/page.tsx \
  src/app/electricity-expense-accounting-guide/page.tsx \
  src/app/when-will-business-electricity-prices-drop/page.tsx \
  src/app/electricity-rate-revision-mechanism/page.tsx

npm run build

git commit -m "seo(internal-linking): PR #72 内部リンク復旧 + CTR リライト 5 記事に AuthorBadge

PR #72 でマージされたはずの G-04/G-05 への被リンク +9 本が
ソースコード上 0 件だったため、8 記事の RelatedLinks に再追加。
合わせて CTR リライト 5 記事にも AuthorBadge を配置。

復旧後の被リンク数:
- /tariff-revision-calendar-2026: 1 → 6 (+5)
- /demand-response-revenue-model: 1 → 7 (+6)"

git push -u origin seo/g04-g05-internal-linking-recovery-2026-04-24
gh pr create --base main --title "seo(internal-linking): PR #72 復旧 + CTR 5 記事に AuthorBadge"
```

---

## 共通の運用ルール（ops-notes §12 準拠）

1. **選別 add 必須**: `git add .` や `git add -A` は絶対にしない
2. **500+ 未コミット変更は据え置き**: 今回扱うファイルのみ選別 add
3. **PR マージ順序**: PR-A → PR-B → PR-C の順で依存関係なし（並行でも可、コンフリクト皆無を確認）
4. **Vercel デプロイ反映**: 各マージ後 2-3 分待ってから本番確認
5. **検証コマンド例**:
   ```bash
   curl -sI https://simulator.eic-jp.org/tariff-revision-calendar-2026 | head -1
   curl -s https://simulator.eic-jp.org/tariff-revision-calendar-2026 | grep -o 'FAQPage' | head -1
   curl -s https://simulator.eic-jp.org/capacity-contribution-explained | grep -c 'kenji-eda'
   ```

---

## EDAさん 側のアクション（実働 10 分）

1. ☐ GitHub で PR #72 のマージコミット hash を確認（リンクで共有お願いします）
2. ☐ Claude Code にこの発注文を投げる
3. ☐ PR-A, PR-B, PR-C が作成されたらレビュー → Squash Merge
4. ☐ 本番反映後（各 PR 2-3 分後）、リンが 200 OK + 機能確認を実施

---

**発注文作成: 2026-04-24 14:00 リン**
**想定実装時間（Claude Code）: 合計 15〜20 分（3 PR 並行）**
