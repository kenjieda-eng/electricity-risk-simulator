# G-04 / G-05 デプロイ Claude Code 発注文

**作成日**: 2026-04-23（リン）
**送信先**: Claude Code（EDAさんがコピペで投げる）
**目的**: リンがすでに作成済みの G-04 / G-05 ページを、ブランチ切り→コミット→push→PR 作成→マージまで一気に進める

---

## 前提

- 対象ファイルはすでに作成済み（リンが `src/app/tariff-revision-calendar-2026/page.tsx` と `src/app/demand-response-revenue-model/page.tsx`、および `src/data/articles.ts` の追記まで完了）
- TypeScript `tsc --noEmit` 検証は済み（EXIT:0）
- 外部監修は不要判断済み、EDAさん承認済み
- 現在ブランチは `perf/phase1-ga-lazy-onload`
- 未コミット変更が 500+ ファイルあるので**選別コミット必須**

---

## コピペ用 Claude Code 発注文

```
G-04 / G-05 の 2 記事を公開するための git 作業一式をお願いします。

【状況】
リン（Cowork 側エージェント）が以下をすでに実装済みです：
- src/app/tariff-revision-calendar-2026/page.tsx（新規、G-04）
- src/app/demand-response-revenue-model/page.tsx（新規、G-05）
- src/data/articles.ts（G-04 を price-trends order:26 featured:true で追加、G-05 を power-procurement order:25 で追加、両カテゴリの recommendedReadingOrder に slug 追記済）

TypeScript tsc --noEmit は EXIT:0 で通っています。
外部監修は不要判断済み、EDAさん（江田）の公開 GO 判断取得済みです。
現在 git ブランチは perf/phase1-ga-lazy-onload で、未コミット変更が 500+ ファイル蓄積しているので選別コミット必須です。

【作業依頼（順に実行してください）】

1. 新ブランチ作成
   git switch -c article/batch-a-g04-g05

2. 選別コミット（以下 6 ファイルのみ add → commit）

   コミット 1:
     git add src/app/tariff-revision-calendar-2026/page.tsx
     git add src/app/demand-response-revenue-model/page.tsx
     git commit -m "article(G-04,G-05): 制度改定カレンダーと DR 収益モデルの記事ページ追加"

   コミット 2:
     git add src/data/articles.ts
     git commit -m "article(G-04,G-05): articles.ts に記事メタと recommendedReadingOrder 追加"

   コミット 3:
     git add .ai-team/drafts/G-04-tariff-revision-calendar-2026.md
     git add .ai-team/drafts/G-05-demand-response-revenue-model.md
     git add .ai-team/memory/pending-tasks.md
     git commit -m "docs: G-04/G-05 ドラフトと pending-tasks 更新"

   ※ 他の未コミット変更（.ai-team の他メモ、未関係の src/app 配下、scripts/、public/ 等）は今回は触らないでください。

3. ビルド検証
   npm run build

   エラーが出たら作業中断して原因を報告してください。
   特に以下のチェックをお願いします：
   - TypeScript エラー 0 件
   - /tariff-revision-calendar-2026 と /demand-response-revenue-model が Static ルートとして生成されていること
   - 警告は可能な範囲で確認

4. push
   git push -u origin article/batch-a-g04-g05

5. PR 作成
   gh pr create \
     --base main \
     --head article/batch-a-g04-g05 \
     --title "article(Batch A): G-04 制度改定カレンダー + G-05 DR 収益モデル 公開" \
     --body "$(cat <<'EOF'
## 概要

Batch A 残り 2 記事（G-04・G-05）の公開 PR。外部監修は不要判断済み、EDAさん 公開 GO 取得済み。

## 追加ファイル

- src/app/tariff-revision-calendar-2026/page.tsx（G-04）
- src/app/demand-response-revenue-model/page.tsx（G-05）

## 更新

- src/data/articles.ts
  - G-04: price-trends order:26, featured:true
  - G-05: power-procurement order:25
  - 両カテゴリ recommendedReadingOrder に slug 追加

## 主要コンテンツ

### G-04: 2026〜2028年 法人電気料金 制度改定カレンダー
- 再エネ賦課金 2026 年度 4.18 円/kWh（METI 2026-03-19 告示）
- 容量拠出金 2027 年度 全国平均 7,847 円/kW、2028 年度 エリア別 8,785〜14,812 円/kW（OCCTO 公表値）
- 託送料金はレベニューキャップ第 1 次規制期間継続、本体改定は 2028 年 4 月から

### G-05: DR 収益化モデル
- 業種別 kW あたり年間収益レンジ（5 業種、2026〜2027 年度水準）
- アグリゲーター契約パターン 3 種、分配比率、参入実務ステップ 4 段階
- G-04 と相互リンク

## 検証

- [x] tsc --noEmit EXIT:0
- [x] 内部リンク全 10 本存在確認済
- [x] npm run build エラー 0 件（本 PR 作業時に再確認）
- [x] リンによるセルフレビュー完了（数値整合、内部リンク、相互整合）

## 公開後の確認項目

- /tariff-revision-calendar-2026 200 OK
- /demand-response-revenue-model 200 OK
- /articles/price-trends カテゴリ一覧に G-04 掲載
- /articles/power-procurement カテゴリ一覧に G-05 掲載
- Google Search Console インデックス申請（EDAさん手動）
EOF
)"

6. PR URL を報告してください。マージは EDAさん が確認後に実施します（自動マージはしないでください）。

【備考】
- `gh` CLI が使えない場合は、git push まで実行して GitHub ブラウザで PR を作ってもらえれば OK
- Vercel デプロイは main マージで自動的に走る想定
- タイトル・description の「2026〜2027 年」が「2026〜2028 年」に差し替え済であることを確認してください（リンが修正済）
```

---

## Claude Code 実行後、EDAさんがやること

1. Claude Code が報告した PR URL を開いて**差分を一読**（レビュー）
2. 問題なければ **Merge pull request**（GitHub UI で「Squash and merge」推奨）
3. Vercel デプロイ完了を待機（通常 1〜3 分）
4. **リンに「マージ完了した」と伝えてください** → リンが 200 OK 確認と pending-tasks.md 更新を自動で走らせます
5. **Google Search Console で 2 URL のインデックス申請**（手動、EDAさん側作業）
   - https://search.google.com/search-console
   - URL 検査 → `https://simulator.eic-jp.org/tariff-revision-calendar-2026` → インデックス登録をリクエスト
   - 同様に `/demand-response-revenue-model`

---

## 想定タイムライン

| 時刻 | 作業 |
|---|---|
| 〜14:30 | EDAさん が Claude Code に発注、PR URL 取得 |
| 14:30〜14:45 | EDAさん PR レビュー → マージ |
| 14:45〜14:48 | Vercel デプロイ（自動） |
| 14:48〜14:55 | リンが 200 OK 確認、pending-tasks.md 更新 |
| 14:55〜15:00 | EDAさん が GSC インデックス申請 |
| 17:00〜 | Day 2 夕計測（リン実施） |

---

## トラブル時の切り分け

- **`gh` CLI が認証エラー**: git push まで実行して GitHub ブラウザで PR を手動作成で OK
- **`npm run build` がエラー**: エラー内容をリンに共有 → リンが修正案をドラフト
- **Vercel デプロイ失敗**: Vercel ダッシュボードのビルドログ確認、ビルドで通ったのにデプロイで落ちるケースは環境変数か Next.js キャッシュ問題が多い
- **200 OK 確認で 404**: サイトマップ再生成タイミングのずれの可能性、数分待って再確認
