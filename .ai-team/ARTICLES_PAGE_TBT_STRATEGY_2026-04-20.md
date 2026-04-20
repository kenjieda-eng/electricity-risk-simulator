# `/articles` TBT 673ms 削減 施策設計レポート（2026-04-20）

**作成**: Claude Code（Frontend-Dev）
**依頼**: `.ai-team/tasks/2026-04-20-evening/C-articles-tbt-improvement.md`
**ターゲット**: Mobile Perf **74 → 90 以上**、TBT **673ms → 200ms 以下**
**実装方針**: 本レポートは**判断レポートのみ**。実装は別 PR で分割して実施。

---

## 1. 現状計測ダイジェスト

`/articles` は本日計測された全ページ中で唯一の Mobile Perf < 90 ページ。

| 計測元 | Mobile Perf | Mobile LCP | Mobile TBT | Desktop Perf |
|---|---:|---:|---:|---:|
| Lighthouse CLI 01:10（`.ai-team/LIGHTHOUSE_2026-04-20.md`） | 70 | 3.8s | 673ms | 97 |
| PSI 17:05（`.ai-team/PSI_MEASUREMENT_2026-04-20_1705.md`、**本日最終**） | **80** | 2.6s | **630ms** | **83** |

比較参考: 他ページ（PSI 17:05）
- `/`: Mobile Perf 81 / LCP 4.7s / TBT 90ms
- `/compare`: Mobile Perf 78 / LCP 2.6s / TBT 739ms
- `/capacity-contribution-explained`: Mobile Perf 72 / LCP 2.7s / TBT 869ms

**`/articles` は TBT 630ms が全ページワーストではないが、Mobile Perf 80 で停滞**。Core Web Vitals "Good" 基準（TBT < 200ms）から 3 倍以上乖離。

---

## 2. ボトルネック仮説の定量検証

### 実測した `/articles` 本番 HTML（2026-04-20 取得）

| 項目 | 値 | 備考 |
|---|---:|---|
| HTML raw size | 312,723 bytes (~313 KB) | |
| HTML gzip size | **44,647 bytes (~45 KB)** | HTTP 転送量、許容範囲 |
| 開始タグ数（DOM 近似） | **710** | 初期描画ノード |
| `<details>` 数 | **4** | S2-02 の大グループ数 |
| `<details open="">` 数 | **4**（= すべて初期展開） | **全ノードが初期レイアウト対象** |
| `<img>` 数 | **43** | next/Image の `<img>` 出力 |
| 内部リンク `<a href="/…">` 数 | **312** | |
| `<script>` 数 | 86 | 内訳: 2 × JSON-LD、残りは Next.js RSC/ランタイム |

### コード構造

- `src/app/articles/page.tsx`（618 行）は **純 Server Component**（`"use client"` なし）
- 子コンポーネント（`src/components/articles/*.tsx`）もすべて Server Component
- Client JS は `PublicHeader`（共通レイアウト）のみ = ほぼ全量 SSR + 静的マークアップ

### レンダリング要素

1. ペルソナ別入口カード 3 枚（`ARTICLE_PERSONA_ENTRANCES.map`）
2. クイックガイドカード 4 枚（`quickGuideCards.map`）
3. テーマ別推薦カード群（`ARTICLES_THEME_ROWS.map` × 各テーマ 3 件）
4. **カテゴリメジャーグループ** 4 個（`CATEGORY_MAJOR_GROUPS.map`、各グループに 7〜9 カテゴリ）× 2 回（ナビ用 + 本体用）
5. カテゴリカード 36 枚（各カテゴリ内に `recommendedReadingOrder.slice(0, 3)` で記事 3 件表示）
6. 業種別中間カテゴリ 3 枚（`INDUSTRY_MIDDLE_CATEGORIES.slice(0, 3)`）
7. スターター記事 3 件 + 新着記事 3 件

### 仮説ランキング（TBT への寄与度、大 → 小）

1. **`<details open>` 4 個が初期展開 → 全ノード（710 タグ）が初期レイアウト対象**。モバイル throttled CPU で 1 フレーム 16ms を超える Long Task を生み続ける。寄与: **大（推定 300ms+）**
2. **`<img>` 43 枚の decode**。Next/Image の priority 指定状況次第で LCP 画像以外も early decode される。モバイルで 1 画像 5-15ms × 43 = **200-600ms**。寄与: **大（推定 200ms+）**
3. **36 カテゴリ × 3 記事 = 108 + 他カード ≒ 150 超カードの初期レイアウト**。各カード Tailwind rounded/border/shadow などで layer 生成コスト。寄与: **中（推定 100ms）**
4. **内部リンク 312 本**。ブラウザの内部 URL 解決コスト（marginal）、主にパース時間。寄与: **小（推定 50ms 未満）**
5. **Client JS 起因はほぼゼロ**。`PublicHeader` 単独のハイドレートのみで、HTML の大半は React の hydrate 対象外。よって "Reduce unused JavaScript" 系の改善は効果薄。

### この仮説の含意

TBT 源泉は **「Client JS 評価時間」ではなく「ブラウザ側の HTML パース＋初期レイアウト＋画像 decode」**。よって従来型の「JS バンドル削減」アプローチは効かない。効くのは:
- **初期レイアウト対象ノードを減らす**（折りたたみ or content-visibility）
- **画像の priority 制御**（above-the-fold のみ優先）
- **初期表示カード数を絞る**（下は `/articles/[categorySlug]` で見せる）

---

## 3. 施策候補 5 つの比較

| # | 施策 | 効果見込み（TBT） | 実装コスト | UX 影響 | SEO 影響 | 採否 |
|---|---|---:|---:|---|---|---|
| **A** | `<details>` の `open` 属性を外す（フォールドのみ初期展開） | **−250〜−350ms** | 低（1 行変更 × 4 箇所） | 中: ユーザーはクリックして開く必要あり。ただし TOP ペルソナ入口カードは独立表示のため主要導線は残る | **+**: クロール対象は変わらず（`<details>` コンテンツは HTML に存在）。DOM 残存で SEO 維持 | ◯ 採用 |
| **B** | `<details>` の子コンテンツに `content-visibility: auto` を付与 | **−200〜−300ms** | 最低（CSS 2-3 行） | ゼロ: 見た目完全一致 | ゼロ: クロール影響なし | ◎ **最優先採用** |
| **C** | 各カテゴリ内の記事カード `slice(0, 3)` → `slice(0, 2)` + 「もっと見る」リンクで `/articles/[categorySlug]` へ | −80〜−150ms | 低（page.tsx の 1 箇所 + CategoryNextStepCta 軽微修正） | 中: 初期表示量が 36 × 2 = 72 件に減り、情報密度が下がる | **+**: カテゴリページ経由のクリック導線が増え、カテゴリ hub の流入貢献 | ◯ 採用（B 後の効果待ち） |
| D | `<img>` の `loading="lazy"` と `priority` 再点検。Above-the-fold の 5〜8 枚のみ優先し残りを遅延 | −100〜−200ms | 中（43 画像を上から順に priority 判定） | ゼロ | ゼロ | ◯ 採用（B/C 後の追加打ち手） |
| E | Intersection Observer でカード段階レンダ（`"use client"` 新規、hydration 増加） | −150ms | **高** | 要設計（JS 無効時の fallback 必要） | **−**: クロール時に初期 HTML から本文が消える可能性 | ✗ 不採用（SEO リスク） |

### 不採用の理由（E）

E は「Client JS 起因ではない TBT を、Client JS を足して解決」という**逆手**になる。Server Component の原則（CLAUDE.md）にも反し、カード本文がレンダ前の HTML に含まれない場合、クロール評価が下がるリスクがある。同じ狙いは B（`content-visibility: auto`）で達成できるため却下。

---

## 4. P0 推奨判断

### 採用順: **B → A → C → D**

**B（`content-visibility: auto`）を最優先**で入れる。CSS 数行で実装可能、UX・SEO 影響ゼロ、効果 200〜300ms 期待という条件は異例に良い。React/Next.js に変更は不要で、Tailwind の `content-visibility-auto`（任意の utility を定義）か、インライン style で十分。

B で TBT が 400ms 前後まで下がるなら、**「Good 基準 < 200ms」までにはまだ足りない**ので、続けて A（`<details>` を折りたたみデフォルトに）を検討。ただし A はユーザー操作（タップ）コストが増えるため、S2-02 で決定した「全グループ初期展開」という設計意図を覆すことになる。**PM 判断が必要**。

A が却下された場合、C（`slice(0, 2)` + 「もっと見る」導線）が代替。情報密度は下がるが、`/articles/[categorySlug]` への誘導が強まり、**カテゴリ hub ページの imp/click 底上げ**というボーナスが期待できる。

D は B/C 後に残っている 100〜200ms TBT を削る仕上げ。画像 priority 再点検は範囲が広いため、効果検証しながら漸進的に。

### 想定効果の積み上げ

- 現状 Mobile TBT: 630ms
- B 適用後: 330〜430ms（Perf 85 前後）
- B + C 適用後: 220〜350ms（Perf 88 前後）
- B + C + D 適用後: **120〜250ms**（**Perf 90 ± 3** 達成見込み）
- A は独立施策として選択肢

LCP（現状 2.6s）も B / D で若干改善が見込まれる（レイアウトが軽くなれば LCP 確定も早くなる）。

---

## 5. 実装 PR の粒度案

原則: **1 PR = 1 施策 = 1 効果測定**。PSI で Before/After を各 PR 後に計測して意思決定を前進させる。

### PR C-1: `content-visibility: auto`（施策 B）

- **変更箇所**: `src/app/articles/page.tsx` の `<details>` 子要素に `content-visibility: auto; contain-intrinsic-size: NNNpx` を付与。Tailwind arbitrary value (`[content-visibility:auto]`) か `style` 属性で直接。
- **ライン数**: 4〜8 行
- **リスク**: ゼロ（ブラウザ対応は Chromium / Firefox / Safari 最新版でカバー、`browserslist` も PR #42 で Chrome/Edge/FF 105+ / Safari/iOS 16+ に引き上げ済み = `content-visibility` 対応範囲と完全一致）
- **検証**: `next build` + PSI 3 runs（Mobile TBT の Before/After）
- **即マージ可**

### PR C-2: 初期表示件数絞り込み（施策 C）

- **変更箇所**: `renderCategoryCard` 内の `recommendedReadingOrder.slice(0, 3)` → `slice(0, 2)`。各カテゴリ末尾に「このカテゴリをすべて見る（残 N 件）」リンク（`/articles/[categorySlug]` への `<Link>`）
- **ライン数**: 20〜40 行
- **リスク**: UX 変化あり。PR 本文に Before/After スクリーンショット必須
- **検証**: next build + PSI + モバイル実機確認 1 回
- **PR C-1 の PSI 結果を見てから着手判断**

### PR C-3: 画像 priority 再点検（施策 D）

- **変更箇所**: `/articles/page.tsx` 内の `<Image>` 43 箇所について、フォールドからの見え方で priority を再設計。typical には above-the-fold の最初 5〜8 枚のみ `priority`、残りは `loading="lazy"` + `decoding="async"`
- **ライン数**: 10〜30 行
- **リスク**: 最初の LCP 画像候補を誤ると LCP 悪化
- **検証**: PSI 3 runs で LCP/TBT 両方を確認
- **PR C-2 の PSI 結果を見てから着手判断**

### 将来 PR C-4（オプション）: `<details>` 初期折りたたみ化（施策 A）

- 施策 B/C/D で Perf 90 達成できなかった場合にのみ起動
- UX 変更を伴うため PM 判断必須
- 「初期折りたたみ + ペルソナ入口カードでフォールド誘導を強化」のセット提案推奨

---

## 次のアクション

1. リンが本レポートを review
2. PR C-1 実装を別依頼で発注（推奨: 2026-04-21）
3. PR C-1 マージ後に PSI 再計測 → PR C-2 / C-3 の要否判断
4. 2026-05-05 GSC 中間計測時に `/articles` の click 変化も観察（TBT 改善が CTR に効くかの仮説検証）

## 関連ファイル

- 現状 PSI: `.ai-team/PSI_MEASUREMENT_2026-04-20_1705.md`
- 過去 Lighthouse: `.ai-team/LIGHTHOUSE_2026-04-20.md`
- 実装対象: `src/app/articles/page.tsx`（618 行、Server Component）
- カテゴリ定義: `src/data/articles.ts`（344 記事 / 36 カテゴリ）、`src/lib/articleCategoryGroups.ts`
