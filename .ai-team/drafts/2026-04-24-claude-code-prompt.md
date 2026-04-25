# Claude Code 貼り付け用プロンプト

**使い方**: 下の「貼り付け開始」から「貼り付け終了」までを **そのままコピーして Claude Code に貼り付け**てください。

---

## 🚀 貼り付け開始

リン（Claude Agent SDK 側、Cowork モード）が 2026-04-24 午後に実施した未コミット編集を、3 つの PR に分けて main に取り込んでください。リポジトリには 500+ の未コミット変更が蓄積しているため、**必ず選別 add** で対象ファイルのみコミットしてください。

### 前提条件

- 作業前に `git status` で現状を確認
- ブランチが main 最新であることを確認
- **500+ 未コミット変更には一切触れない**（今回扱うファイルのみ選別 add）
- 各 PR 作成前に `npm run build` でエラー 0 を確認、エラーあれば中断して報告

### 完全な発注内容は以下のファイルを参照

```
.ai-team/drafts/2026-04-24-afternoon-pr-order.md
```

### 3 つの PR を順次作成（並行 OK、依存関係なし）

---

#### 📌 PR-A: AuthorBadge 強化（/kenji-eda 被リンク 59 記事化）

**目的**: AuthorBadge コンポーネント 1 つの編集で、既存 53 記事 + 新規 6 記事 = 59 記事から /kenji-eda へ被リンクを張る。E-E-A-T の最大効率施策。

**対象ファイル（2 本のみ）**:
```
src/components/market-data/AuthorBadge.tsx
src/components/seo/JsonLd.tsx
```

**手順**:
```bash
git switch -c seo/author-badge-kenji-eda-link-2026-04-24

git add src/components/market-data/AuthorBadge.tsx src/components/seo/JsonLd.tsx

npm run build
# エラー 0 を確認。エラーあれば中断して報告

git commit -m "seo(e-e-a-t): AuthorBadge に /kenji-eda リンクを追加、ArticleJsonLd author を強化

- AuthorBadge に 'この記事の著者: 江田 健二（プロフィール →）' リンク追加
  → 既存 53 記事 + 新規 6 記事 = 59 記事から /kenji-eda への被リンク実現
- ArticleJsonLd Person.url を /kenji-eda に紐付け（全記事で Google 認識強化）
- Person.jobTitle '代表理事' → '理事' に正確化
- Person.sameAs に /kenji-eda + eic-jp.org 追加
- Person.alumniOf に 慶應義塾大学 経済学部 追加"

git push -u origin seo/author-badge-kenji-eda-link-2026-04-24

gh pr create --base main \
  --title "seo(e-e-a-t): /kenji-eda 被リンク 59 記事化 + JsonLd 著者情報強化" \
  --body "AuthorBadge と ArticleJsonLd を 2 ファイル編集するだけで、59 記事から /kenji-eda への被リンク + 全記事の Person 構造化データ強化を実現。E-E-A-T シグナル最大化。"
```

---

#### 📌 PR-B: G-04/G-05 に FAQPage 構造化データ + AuthorBadge 配置

**目的**: G-04/G-05 の Featured Snippet 獲得 + 著者バッジ統一。

**対象ファイル（2 本のみ）**:
```
src/app/tariff-revision-calendar-2026/page.tsx
src/app/demand-response-revenue-model/page.tsx
```

**手順**:
```bash
git switch main && git pull
git switch -c seo/g04-g05-faq-and-authorbadge-2026-04-24

git add src/app/tariff-revision-calendar-2026/page.tsx src/app/demand-response-revenue-model/page.tsx

npm run build
# エラー 0 を確認

git commit -m "seo(faq): G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加

- tariff-revision-calendar-2026: FAQ 5問 + MarketDataFaq + AuthorBadge
- demand-response-revenue-model: FAQ 5問 + MarketDataFaq + AuthorBadge
- ArticleJsonLd faq prop 経由で FAQPage JSON-LD 出力
- visible FAQ セクションと JSON-LD の二重実装で強調スニペット獲得を狙う"

git push -u origin seo/g04-g05-faq-and-authorbadge-2026-04-24

gh pr create --base main \
  --title "seo(faq): G-04/G-05 に FAQPage 構造化データと AuthorBadge を追加" \
  --body "G-04 と G-05 に FAQ 5 問ずつを追加。MarketDataFaq で visible FAQ + ArticleJsonLd faq prop で FAQPage JSON-LD 出力。強調スニペット獲得を狙う。"
```

---

#### 📌 PR-C: PR #72 復旧（内部リンク 9 本再追加）+ CTR リライト 5 記事に AuthorBadge

**目的**: HANDOVER では「PR #72 本番反映済」となっていたが、実コード上は内部リンクが 0 件だった問題の復旧。合わせて CTR リライト 5 記事にも AuthorBadge を配置。

**対象ファイル（13 本）**:
```
# PR #72 復旧 8 本
src/app/capacity-contribution-explained/page.tsx
src/app/electricity-price-outlook-2026/page.tsx
src/app/capacity-market-and-corporate-rates/page.tsx
src/app/demand-response-cost-benefit/page.tsx
src/app/demand-response-suited-corporations/page.tsx
src/app/how-procurement-affects-corporate-rates/page.tsx
src/app/capacity-contribution-history/page.tsx
src/app/power-risk-management/page.tsx

# CTR リライト 5 本に AuthorBadge 追加
src/app/jepx-price-trend-and-corporate-impact/page.tsx
src/app/market-price-adjustment/page.tsx
src/app/electricity-expense-accounting-guide/page.tsx
src/app/when-will-business-electricity-prices-drop/page.tsx
src/app/electricity-rate-revision-mechanism/page.tsx
```

**手順**:
```bash
git switch main && git pull
git switch -c seo/g04-g05-internal-linking-recovery-2026-04-24

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
# エラー 0 を確認

git commit -m "seo(internal-linking): PR #72 内部リンク復旧 + CTR リライト 5 記事に AuthorBadge

PR #72 でマージされたはずの G-04/G-05 への被リンク +9 本が
ソースコード上 0 件だったため、8 記事の RelatedLinks に再追加。
合わせて CTR リライト 5 記事にも AuthorBadge を配置。

復旧後の被リンク数（リンの内部リンクマップ v2 計測）:
- /tariff-revision-calendar-2026: 1 → 6 (+5)
- /demand-response-revenue-model: 1 → 7 (+6)"

git push -u origin seo/g04-g05-internal-linking-recovery-2026-04-24

gh pr create --base main \
  --title "seo(internal-linking): PR #72 復旧 + CTR 5 記事に AuthorBadge" \
  --body "PR #72（内部リンク強化）がソースコード上反映されていなかったため再コミット。G-04 被リンク 1→6、G-05 被リンク 1→7。CTR リライト 5 記事にも AuthorBadge を配置し、デザイン統一。"
```

---

### 全 PR 完了後の報告フォーマット

以下の形式で報告してください:

```
## 結果報告

### PR-A
- Branch: seo/author-badge-kenji-eda-link-2026-04-24
- PR URL: https://github.com/.../pull/XXX
- build: エラー 0 / 警告 X
- 追加 2 ファイル / 削除 0 ファイル / 変更行数 +XX

### PR-B
- Branch: seo/g04-g05-faq-and-authorbadge-2026-04-24
- PR URL: ...
- build: ...

### PR-C
- Branch: seo/g04-g05-internal-linking-recovery-2026-04-24
- PR URL: ...
- build: ...

### 注意事項
- 触っていない未コミット変更: 500+ 件そのまま（問題なし）
- git stash 操作: なし
- その他懸念点: （あれば）
```

### トラブルシューティング

1. **npm run build でエラー発生**: エラー内容を全文報告。勝手に修正しない
2. **ブランチ名が衝突**: 末尾に `-retry` を付けて再実行
3. **PR #72 が実際に存在していた場合**: コミット hash を報告してください（リンが状況判定します）
4. **未コミット変更に引きずられる**: `git status` を全文報告し、作業中断

---

**発注者**: リン（Cowork モード、Claude Agent SDK）
**発注時刻**: 2026-04-24 14:00 JST
**実装想定時間**: 15〜20 分（3 PR 並行、build 3 回含む）

## 🚀 貼り付け終了

---

## 📝 EDAさん メモ

**貼り付け前の確認**:
- ☐ Claude Code のカレントディレクトリが `ANAsyumiCursorNext` リポジトリであること
- ☐ git の origin が設定済み、gh CLI がログイン済み
- ☐ リモート origin の main が最新かどうか（古い場合は `git pull` を事前実行）

**貼り付け後の流れ**:
1. Claude Code が PR-A を作成 → URL 報告
2. EDAさん がレビュー → Squash Merge
3. Claude Code が PR-B を作成 → URL 報告
4. EDAさん がレビュー → Squash Merge
5. Claude Code が PR-C を作成 → URL 報告
6. EDAさん がレビュー → Squash Merge
7. リン（次セッション）が本番反映検証（200 OK + FAQ 検出 + /kenji-eda リンク検出）

**並行で進めたい場合**: 「3 つの PR を順次ではなく同時並行で作成してください」と追記すれば OK。ブランチが別なので衝突しません。

---

**保存場所**: `.ai-team/drafts/2026-04-24-claude-code-prompt.md`
**関連文書**: `.ai-team/drafts/2026-04-24-afternoon-pr-order.md`（詳細版）
