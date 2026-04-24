# SEO 内部リンク強化 Claude Code 発注文（8 ファイル）

**作成日**: 2026-04-24（リン）
**目的**: Batch A G-04/G-05 への内部被リンクを 1 → 5-6 に増強、SEO リンクジュースの還流を最大化

---

## 背景

本日公開の G-04 / G-05 の被リンク状況を確認：
- `/tariff-revision-calendar-2026`: **1 ページからしか被リンクなし**
- `/demand-response-revenue-model`: **1 ページからしか被リンクなし**

関連性の高い主要記事からの内部リンクがほぼ張られていない状態。これは SEO 的に大きな機会損失。
→ 主要関連記事 8 つの末尾 RelatedLinks に G-04/G-05 を追加済み（リン編集完了）。

---

## 編集済みファイル（8 本）

| # | ファイル | 追加先 |
|---|---|---|
| 1 | `src/app/capacity-contribution-explained/page.tsx` | G-04 |
| 2 | `src/app/electricity-price-outlook-2026/page.tsx` | G-04 |
| 3 | `src/app/capacity-market-and-corporate-rates/page.tsx` | G-04 + G-05 |
| 4 | `src/app/demand-response-cost-benefit/page.tsx` | G-05 |
| 5 | `src/app/demand-response-suited-corporations/page.tsx` | G-05 |
| 6 | `src/app/how-procurement-affects-corporate-rates/page.tsx` | G-05 |
| 7 | `src/app/capacity-contribution-history/page.tsx` | G-04 |
| 8 | `src/app/power-risk-management/page.tsx` | G-05 |

### 追加量
- **G-04 への被リンク**: 1 → 5（+4）
- **G-05 への被リンク**: 1 → 6（+5）

---

## コピペ用 Claude Code 発注文

```
SEO 内部リンク強化のため、リンが編集済みの 8 ファイルをビルド検証 → PR 作成までお願いします。

【前提】
各ページの末尾 RelatedLinks 配列に G-04（/tariff-revision-calendar-2026）または G-05（/demand-response-revenue-model）のエントリを 1 件追加したのみ。JSX 構造・他のロジックは未変更。

編集ファイル：
1. src/app/capacity-contribution-explained/page.tsx        (+G-04)
2. src/app/electricity-price-outlook-2026/page.tsx         (+G-04)
3. src/app/capacity-market-and-corporate-rates/page.tsx    (+G-04 +G-05)
4. src/app/demand-response-cost-benefit/page.tsx           (+G-05)
5. src/app/demand-response-suited-corporations/page.tsx    (+G-05)
6. src/app/how-procurement-affects-corporate-rates/page.tsx (+G-05)
7. src/app/capacity-contribution-history/page.tsx          (+G-04)
8. src/app/power-risk-management/page.tsx                  (+G-05)

【作業】

1. 新ブランチ
   git switch -c seo/internal-linking-g04-g05-2026-04-24

2. 選別 add + 1 コミット
   git add \
     src/app/capacity-contribution-explained/page.tsx \
     src/app/electricity-price-outlook-2026/page.tsx \
     src/app/capacity-market-and-corporate-rates/page.tsx \
     src/app/demand-response-cost-benefit/page.tsx \
     src/app/demand-response-suited-corporations/page.tsx \
     src/app/how-procurement-affects-corporate-rates/page.tsx \
     src/app/capacity-contribution-history/page.tsx \
     src/app/power-risk-management/page.tsx

   git commit -m "seo(internal-linking): G-04/G-05 への被リンクを 8 記事の RelatedLinks に追加"

3. npm run build
   エラー 0 件を確認。エラーあれば中断して報告。

4. push
   git push -u origin seo/internal-linking-g04-g05-2026-04-24

5. gh pr create（base: main）
   タイトル: seo(internal-linking): G-04/G-05 への被リンク +4/+5 増強
   本文（以下で事足ります）:
   ---
   ## 概要
   Batch A G-04/G-05 の被リンクが各 1 ページのみだったため、関連性の高い主要記事 8 本の RelatedLinks に追加。

   ## 変更量
   - G-04 被リンク: 1 → 5（+4）
   - G-05 被リンク: 1 → 6（+5）

   ## 編集内容
   各ファイルの RelatedLinks 配列末尾に G-04 または G-05 のエントリを追加したのみ。JSX 構造・他ロジックは未変更。

   ## 検証
   - [x] npm run build エラー 0 件
   - [x] リンクジュース還流の SEO 効果は 5/5 GSC 中間計測で検証
   ---

6. PR URL を報告。マージは EDAさん 判断。

【備考】
- 変更は各ファイルで 5-10 行程度の配列エントリ追加のみ
- 未コミットの他変更には触れない
- Vercel 自動デプロイは main マージで走る
```

---

## 期待効果

- 5/5 GSC 中間計測時点で G-04 / G-05 の順位上昇を期待
- 主要記事からのリンク流入で PV 増加も見込める
- 「容量拠出金 系記事」「DR 系記事」からの自然な導線形成
