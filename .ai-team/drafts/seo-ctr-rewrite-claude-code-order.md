# SEO CTR リライト 7 記事 Claude Code 発注文

**作成日**: 2026-04-23（リン）
**目的**: リンが編集済みの 7 記事のタイトル/description リライトを、ビルド検証 → PR 作成 → マージまで一気通貫

---

## 状況

リンが以下 7 ファイルの `pageTitle` / `pageDescription` を編集済み（JSX 構造や他のロジックには一切触れていない）:

1. `src/app/jepx-price-trend-and-corporate-impact/page.tsx`
2. `src/app/market-price-adjustment/page.tsx`
3. `src/app/business-transfer-name-change-procedure/page.tsx`
4. `src/app/electricity-expense-accounting-guide/page.tsx`
5. `src/app/capacity-contribution-explained/page.tsx`
6. `src/app/when-will-business-electricity-prices-drop/page.tsx`
7. `src/app/electricity-rate-revision-mechanism/page.tsx`

背景: GSC データで、CTR 0% or 1-2% 程度の記事を特定し、検索意図合致型タイトル + 具体数字入り description にリライト。5/5 GSC 中間計測までに効果を出すのが狙い。

---

## コピペ用 Claude Code 発注文

```
SEO CTR 改善のため、リンが編集済みの 7 記事をビルド検証 → PR 作成 → マージまでお願いします。

【前提】
- 対象 7 ファイル（pageTitle / pageDescription のみ編集、他は未変更）:
  1. src/app/jepx-price-trend-and-corporate-impact/page.tsx
  2. src/app/market-price-adjustment/page.tsx
  3. src/app/business-transfer-name-change-procedure/page.tsx
  4. src/app/electricity-expense-accounting-guide/page.tsx
  5. src/app/capacity-contribution-explained/page.tsx
  6. src/app/when-will-business-electricity-prices-drop/page.tsx
  7. src/app/electricity-rate-revision-mechanism/page.tsx

- 未コミット変更が 500+ ファイル蓄積しているので選別コミット必須
- EDAさん公開 GO 取得済み

【作業依頼】

1. 新ブランチ作成
   git switch -c seo/ctr-rewrite-batch-2026-04-23

2. 7 ファイルを選別 add → 1 コミット
   git add \
     src/app/jepx-price-trend-and-corporate-impact/page.tsx \
     src/app/market-price-adjustment/page.tsx \
     src/app/business-transfer-name-change-procedure/page.tsx \
     src/app/electricity-expense-accounting-guide/page.tsx \
     src/app/capacity-contribution-explained/page.tsx \
     src/app/when-will-business-electricity-prices-drop/page.tsx \
     src/app/electricity-rate-revision-mechanism/page.tsx

   git commit -m "seo(ctr): 7 記事のタイトル/description を GSC データに基づき検索意図合致型にリライト"

3. 関連ドラフト（任意、別コミット）
   git add .ai-team/drafts/seo-ctr-rewrite-claude-code-order.md
   git commit -m "docs(seo): CTR リライト 7 記事の発注文を追加"

4. ビルド検証
   npm run build

   エラーが出たら作業中断して報告してください。
   特に M&A の & が含まれる business-transfer-name-change-procedure のタイトル/description をビルド時に再確認してほしいです。

5. push
   git push -u origin seo/ctr-rewrite-batch-2026-04-23

6. PR 作成
   gh pr create \
     --base main \
     --head seo/ctr-rewrite-batch-2026-04-23 \
     --title "seo(ctr): 7 記事のタイトル/description リライト（CTR 改善）" \
     --body "$(cat <<'EOF'
## 概要

GSC データ分析（過去 3 か月、4/13 以降で表示 16.4 倍、CTR 7.77%→2.46% に低下）に基づき、以下 7 記事のタイトル/description をリライト。検索意図合致型 + 具体数字入りで CTR 向上を狙う。

## 対象記事と変更理由

| 記事 | 既存 CTR | 問題 | 新タイトルの狙い |
|---|---|---|---|
| /jepx-price-trend-and-corporate-impact | 0.5% (577 表示) | 具体数字なし、抽象的 | 「250円スパイク」数字で目を引く |
| /market-price-adjustment | 1.9% (207 表示) | 「2026年版」鮮度訴求なし | 「青天井になるリスク」追加 |
| /business-transfer-name-change-procedure | 0% (97 表示) | 法人向け明示弱い | 【法人】+ M&A で明確化 |
| /electricity-expense-accounting-guide | 0% (クエリ47 表示) | 候補3つを列挙しない | 「水道光熱費/製造経費/販管費のどれ？」 |
| /capacity-contribution-explained | 0% (130 表示) | 数字なし | 「2026年度5,226円/kW、2027年度7,847円/kW」 |
| /when-will-business-electricity-prices-drop | 0% (86 表示) | 期間明示なし | 「2026-2028年」「3つの理由」 |
| /electricity-rate-revision-mechanism | 0% (68 表示) | 抽象的 | 疑問形 + 2軸明示 |

## 根拠データ

- GSC 期間: 過去 3 か月（〜2026-04-24）、日本国内クリック 262、表示 7,925
- 4/13 以降に一般ユーザー流入が本格化（日平均表示 45 → 740、16.4倍）
- CTR は同時期に 7.77% → 2.46% に低下 = タイトル/description のクリック力不足が顕在化

## 検証

- [x] リンが該当 2 変数のみ編集、JSX 構造未変更
- [x] npm run build エラー 0 件（本 PR 作業時に確認）
- [x] Lighthouse スコアに影響なし（メタデータ変更のみ）

## 公開後の確認（EDAさん + リン）

- GSC で 7 URL の CTR 推移を追跡
- 5/5 GSC 中間計測で効果検証
- 4 週間後 CTR が改善していれば類似ロジックを他記事にも展開
EOF
)"

7. PR URL を報告してください。マージは EDAさん が確認後に実施します。

【備考】
- `M&A` は HTML エンティティではなく文字列としてそのまま使われます（React/Next.js が適切にエスケープ）
- サイトマップや内部リンクには影響なし（タイトル変更のみ）
- Vercel 自動デプロイは main マージで走ります
```

---

## 想定タイムライン

| 時刻 | 作業 |
|---|---|
| 〜16:30 | EDAさんが Claude Code に発注、PR URL 取得 |
| 16:30〜16:45 | EDAさん PR レビュー → マージ |
| 16:45〜16:48 | Vercel デプロイ（自動） |
| 16:48〜16:55 | リンが 7 URL の 200 OK とタイトル反映を確認 |
| 17:00〜 | Day 2 夕計測（リン実施） |

---

## 追加: 効果測定計画

- **T+0（本日マージ後）**: タイトル反映確認
- **T+7 日（2026-04-30）**: GSC で CTR 比較（リライト前 vs 後）
- **T+12 日（2026-05-05）**: GSC 中間計測時に本格評価
- **T+25 日（2026-05-18）**: GSC 本計測時に最終効果確認、類似記事への展開判断
