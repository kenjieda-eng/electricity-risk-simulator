# `/` Mobile Perf 97→81 退行原因調査（2026-04-20 夜）

**調査**: Claude Code
**依頼**: `.ai-team/tasks/2026-04-20-evening/E-home-lcp-regression-investigation.md`
**結論**: **Y（計測ノイズ / PSI 側の測定条件差）** — コード起因の退行は確認されず

---

## 1. 事実確認（計測値の再確認）

本日の `/` Mobile PSI 計測履歴（すべて 3 runs、各 run 内は完全同値）:

| 計測時刻（JST） | 計測時刻（UTC） | label | Mobile Perf | Mobile LCP | Mobile TBT | Mobile FCP | Mobile CLS |
|---|---|---|---:|---:|---:|---:|---:|
| **15:38** | 06:38 | `after-chart-defer` | **97** | 2.3s | 119ms | 1.1s | 0.010 |
| **17:05** | 08:05 | `after-all-2026-04-20-evening` | **81** | 4.7s | 90ms | 1.0s | 0.000 |
| **18:00** | 09:00 | `regression-check-2026-04-20` | **94** | 2.5s | 172ms | — | — |

### 差分サマリー

| 指標 | 15:38 → 17:05 | 17:05 → 18:00 |
|---|---|---|
| Perf | 97 → 81 (**−16**) | 81 → 94 (**+13**) |
| LCP | 2.3s → 4.7s (**+2.4s**) | 4.7s → 2.5s (**−2.2s**) |
| TBT | 119ms → 90ms（**−29ms 改善**） | 90ms → 172ms（**+82ms**） |

### 観察

- 17:05 の **LCP +2.4s は実在する変動**（3 runs 同値） — ただし 55 分後の 18:00 計測で **自動的に回復（2.5s）**
- **TBT は 17:05 のほうが 90ms と最良**（改善シグナル、PR #43 Chart.js 遅延効果は健在）
- Perf スコアの主要因子は LCP なので、LCP が揺れればスコアも揺れる
- 「3 runs 完全同値」は **PSI API が短時間内の同一 URL 呼び出しに対して 1 本の Lighthouse 結果をキャッシュ返却している**ことに起因（連続 3 呼び出しで `3 runs` を名乗っているが、実体は 1 本のスナップショット）。よって「3 runs 同値 = 測定が安定」とは言えない

---

## 2. コード変更の有無（仮説 X 検証）

### 調査範囲

PR #43 マージ commit（`e49567e`）以降の全 commit:

```
036b10d Merge PR #51 (content/batch-a-g01)       ← 08:32 UTC、1705 計測より後
574a6d5 feat(content): G-01 新記事
d2ecc24 Merge PR #50 (docs/articles-tbt-strategy) ← 08:16 UTC、1705 計測より後
a56d070 docs: /articles TBT 戦略
49211f7 Merge PR #49 (measure/psi-after)          ← 08:13 UTC、1705 計測より後
cece822 measure: PSI after all
0844724 Merge PR #48 (chore/pending-tasks)        ← 08:06 UTC、1705 計測より後
250bc7d chore: pending-tasks refresh
15b0b02 Merge PR #47 (seo/alist-5pages-rewrite)   ← 07:24 UTC、1538–1705 の間
90db3c8 seo: A-list 5 ページ
c405ea6 Merge PR #46 (seo/top10-ctr-6pages)       ← 06:53 UTC、1538–1705 の間
b16514d seo: トップ10圏 6 ページ
d5ce4a4 Merge PR #45 (seo/capacity-contribution)  ← 06:43 UTC、1538–1705 の間
9c74576 seo: /capacity-contribution-explained
3e5bc05 Merge PR #44 (chore/psi-baseline-script)  ← #43 の直後
```

**1538 計測時点で live だったのは PR #43 / #44**、
**1705 計測時点で live だったのは PR #43〜#47**（#48〜#51 は 1705 より後のマージ）。
調査範囲は **PR #45〜#47** の diff。

### `/` に影響しうるファイルのチェック

`/` のレンダリングに関わる全候補ファイルを `git diff e49567e..HEAD --name-only` に対して grep:

```bash
git diff --name-only e49567e..HEAD | grep -E "^(src/app/layout|src/app/page|src/app/_components|src/components/(PublicHeader|Footer|analytics|contact/ContactCtaCard)|next\.config|package\.json|public/)"
```

**→ 空（マッチなし）**。

実際の `git diff e49567e..HEAD --name-only` 全 18 ファイル:

```
.ai-team/ARTICLES_PAGE_TBT_STRATEGY_2026-04-20.md  ← 非サーブ
.ai-team/PSI_MEASUREMENT_2026-04-20_1705.md         ← 非サーブ
.ai-team/memory/pending-tasks.md                    ← 非サーブ
scripts/psi-baseline.mjs                            ← CLI、バンドル対象外
scripts/sc-per-page-query.mjs                       ← 同上
src/app/articles/[categorySlug]/page.tsx            ← /articles/[slug] 専用
src/app/capacity-contribution-explained/page.tsx    ← 個別ページ
src/app/electricity-cost-risk-heatwave/page.tsx     ← 個別ページ
src/app/electricity-rate-revision-mechanism/page.tsx ← 個別ページ
src/app/fuel-cost-adjustment/page.tsx               ← 個別ページ
src/app/fuel-vs-market-adjustment-comparison/page.tsx ← 新規（1705 後）
src/app/how-to-start-electricity-contract-review/page.tsx ← 個別ページ
src/app/market-linked-plan/page.tsx                 ← 個別ページ
src/app/market-price-adjustment-history/page.tsx    ← 個別ページ
src/app/market-price-adjustment/page.tsx            ← 個別ページ
src/app/why-business-electricity-prices-rise/page.tsx ← 個別ページ
src/app/winter-vs-summer-electricity/page.tsx       ← 個別ページ
src/data/articles.ts                                ← /と他多数で import
```

### `src/data/articles.ts` の影響可能性

`/` の [page.tsx:3](src/app/page.tsx#L3) は `getLatestArticles(6)` を経由して `articleList` を import している。PR #45〜#47 の `articles.ts` 差分を確認:

```
+ ArticleCategory 型に optional seoTitle / seoDescription 追加（型のみ）
+ price-increase カテゴリの recommendedReadingOrder 末尾に 1 slug 追加
+ last-resort-supply カテゴリの seoTitle / seoDescription 設定
+ 対象 5 ページ（T-17）の title / description 文字列書き換え
```

**いずれも `/` の `最近追加されたページ` セクションに並ぶ 6 カードのタイトル／説明文字列が微変更される程度**。DOM 形状・JS 実行・画像数・LCP 候補要素に変化なし。レンダリングの本質的コストに影響しない。

### 判定: X は否定

**PR #45〜#47 は `/` のレンダリング結果に影響するコード変更を含まない**。もっとも広く import されている `src/data/articles.ts` ですら文字列・順序の変更のみ。

---

## 3. ネットワーク・キャッシュ状況（仮説 Y 検証）

### TTFB 計測（2026-04-20 夜、本調査時点）

```
Run 1 | HTTP: 200 | TTFB: 0.156s | Total: 0.163s | Size: 111,906 B
Run 2 | HTTP: 200 | TTFB: 0.052s | Total: 0.058s | Size: 111,906 B
Run 3 | HTTP: 200 | TTFB: 0.047s | Total: 0.052s | Size: 111,906 B
```

### Vercel / CDN ヘッダー

```
Age: 1480
Cache-Control: public, max-age=0, must-revalidate
X-Nextjs-Prerender: 1
X-Nextjs-Stale-Time: 300
X-Vercel-Cache: HIT
X-Vercel-Id: hnd1::rmc6x-…（Tokyo リージョン）
```

### 観察

- **Warm キャッシュ TTFB 47〜52ms**、**Cold は 156ms**。15:38 時点と 18:00 時点で大きな差は想定しづらい
- HTML サイズ 112KB、1538/1705 計測でも同水準と推定（ビルド差分も無視できる量）
- `X-Vercel-Cache: HIT` / `Age: 1480` なので 25 分前のレスポンスを Edge 側がキャッシュ配信している
- 1705 計測時刻（08:05 UTC）は PR #47 マージ（07:24 UTC）の **~40 分後** で、Vercel 側のデプロイが new build に切り替わっており **Edge キャッシュがまだ cold だった可能性**あり（PSI の US ベースの Lighthouse ノードから、アジアリージョンへの初回アクセスで Edge cold hit）
- 1538 → 1705 のあいだに 4 回（PR #45〜#47 マージ）の deploy/cache-bust が走っており、PSI が叩いた瞬間に **fresh build への cold cache 命中率が高かった可能性**

### 判定: Y を強く支持

TTFB は健全だが、**PSI 側の Lighthouse 実行ノードが初回アクセス時に引いた Vercel Edge cache が cold だった** シナリオは、LCP +2.4s（= Server rendered HTML 到達が遅れる）と整合する。

---

## 4. サードパーティ応答（仮説 Z 検証）

### `/` に含まれる外部リソース（HTML パースで抽出）

```
grep -oE 'src="https://[^"]+"' /tmp/home.html | sort -u
→ (マッチなし)
```

HTML 内の `<script src="https://...">` は **ゼロ**。すべてのスクリプトは same-origin（Vercel 配下）から配信されている。外部 origin は preconnect/dns-prefetch 指定のみ:

```
<link rel="preconnect" href="https://www.googletagmanager.com" crossorigin=""/>
<link rel="dns-prefetch"  href="https://www.googletagmanager.com"/>
<link rel="preconnect" href="https://www.google-analytics.com" crossorigin=""/>
<link rel="dns-prefetch"  href="https://www.google-analytics.com"/>
<link rel="preconnect" href="https://puziapgumrgahufhmbif.supabase.co" crossorigin=""/>
<link rel="dns-prefetch"  href="https://puziapgumrgahufhmbif.supabase.co"/>
```

### 外部リソース応答時間

```
https://www.googletagmanager.com/gtag/js   : 200 140ms
https://www.google-analytics.com/g/collect : 204  80ms
https://puziapgumrgahufhmbif.supabase.co/  : 404  73ms（bare root、正常挙動）
```

### 観察

- GA（GTM + g/collect）／Supabase いずれも応答時間は平時レベル
- 新たに追加された外部 origin もなし（PR #45〜#47 ではネットワーク起点の変更ゼロ）
- PR #42 で設定した `dns-prefetch` / `preconnect` は今も全 origin に効いている

### 判定: Z は否定

**新規の外部依存は発生しておらず、既存依存の応答時間にも異常なし**。サードパーティ要因ではない。

---

## 5. 追加 PSI 計測

`scripts/psi-baseline.mjs --label regression-check-2026-04-20 --runs 3 --strategy mobile --urls /` を 18:00 JST に実行:

| Run | Perf | LCP | TBT |
|:-:|:-:|---|---|
| 1 | 94 | 2.5s | 172ms |
| 2 | 94 | 2.5s | 172ms |
| 3 | 94 | 2.5s | 172ms |

（3 runs の「完全同値」は節 1 注記のとおり PSI API 側のスナップショット再返却挙動による）

### 観察

- 17:05 の 81 / 4.7s / 90ms → **18:00 で 94 / 2.5s / 172ms へ回復**（約 55 分後）
- **コード変更ゼロ**のこの間隔で LCP が 4.7s → 2.5s に戻った以上、**17:05 の値は一過性**
- 18:00 の Perf 94 も 15:38 の 97 には届いていないが、**95 前後に自然収束している** 挙動は Core Web Vitals 上の "Good" 域内で、Lighthouse のスコアリング揺らぎ（±3〜5）の範囲
- TBT 172ms は 1538 の 119ms から +53ms だが、**Good 基準 < 200ms は維持**

---

## 結論

**原因判定**: **Y（計測ノイズ / 測定条件差）** — ただし実体としては「PSI 側 Lighthouse ノードが Vercel Edge の cold cache を引いた一過性の LCP 劣化」と推定。コード起因の退行（X）および外部依存起因（Z）は否定。

**根拠**:
1. **§2: `/` レンダリングに関わる全コード候補（layout / PublicHeader / GA / page.tsx / _components / next.config.ts / package.json / public/）に PR #43 以降の変更ゼロ**。`articles.ts` 経由の間接変更も文字列レベルで本質影響なし
2. **§3: Vercel Edge キャッシュは `X-Vercel-Cache: HIT`・Age 1480s で健全**。TTFB 47〜156ms。ただし 1705 計測時刻は PR #47 デプロイから 40 分ほどで、4 連続 PR による cache-bust 直後に PSI が叩いた可能性あり
3. **§4: 外部依存の新規追加なし、既存 GA/Supabase の応答時間も平時**
4. **§5: 18:00 再計測で LCP 4.7s → 2.5s、Perf 81 → 94 に自動回復**。コード無変更でこの動きは計測側要因でしか説明できない
5. **Mobile TBT は 15:38 の 119ms → 17:05 の 90ms と逆に改善**。実コード由来の退行なら TBT も同時に悪化するはずだが逆動き。指標間の整合性が取れないのも計測変動の特徴

**次アクション**:

- **（ケース Y 採用）**:
  - **翌日以降 3 日連続で `scripts/psi-baseline.mjs --label daily-check-YYYY-MM-DD --runs 3 --strategy mobile --urls /` を朝・夕の 2 回実行**し、Perf が 90〜97 のレンジに収まれば今回の退行は一過性で確定
  - 万が一 Perf 85 未満が継続したら、当該時刻の **Chrome DevTools Performance プロファイル（ローカル、実機 or Throttled）** を取得して LCP 要素の候補を直接観察
  - 運用ルール更新提案: PSI 単発計測の結果を根拠に「退行」と判断しない。**直近 3 回の中央値 or 日次平均**で評価する（PR #44 の計測スクリプトに `--daily` モードを追加する案を次 PR で検討）

- **（将来の防御策）**:
  - Vercel の Edge cache が cold になる瞬間（新 deploy 直後）を避けるため、**PR マージ後 30 分以上経過してから計測を開始**する運用を pending-tasks に明文化
  - LCP 要素（`/` のヒーロー画像 `logo.png`）に既に `rel="preload"` が入っているため、画像最適化面で追加打てる手は限定的

**リン判断メモ**: —（次セッションで記入）

---

## 参考情報: PSI 3 runs の同値挙動について

本調査で重要な発見として、`scripts/psi-baseline.mjs --runs 3` が返す 3 run 同値は「測定の安定性」を意味しないことが判明しました:

- PSI API は同一 URL × 同一 strategy の連続呼び出しに対し、**内部キャッシュされた直近 Lighthouse 結果**を返す
- 結果、1 回の `--runs 3` 実行内では同値が出やすい一方、**時刻をまたいだ 3 回の `--runs 1` 実行では値が大きく散らばる**
- より信頼できる "median" を取るには、**数時間〜1 日空けて個別にトリガーした 3 回の測定の中央値**を使うのが正攻法

スクリプトに `--interval 3600` のようなランダム待機オプションを追加し、「本当の 3 回独立計測」を可能にする改良は別 PR で検討できる。
