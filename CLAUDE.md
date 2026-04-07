# CLAUDE.md — ANAsyumiCursorNext

法人向け電気料金上昇・高騰リスクシミュレーター（https://simulator.eic-jp.org）のNext.jsプロジェクト。
運営: 一般社団法人エネルギー情報センター。

---

## 技術スタック

- **Next.js 16** (App Router、基本的にすべてServer Component)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**（PostCSS経由）
- **Supabase** (`@supabase/supabase-js`)
- **Chart.js / react-chartjs-2**（グラフ表示）

Client Componentが必要なときのみ `"use client"` を付ける（`PublicHeader` はパス判定のため使用中）。

---

## ディレクトリ構成

```
src/
├── app/                   # Next.js App Router のルート
│   ├── layout.tsx         # グローバルレイアウト（PublicHeader / Footer / GoogleAnalytics）
│   ├── page.tsx           # トップページ（シミュレーター）
│   ├── sitemap.ts         # サイトマップ自動生成
│   ├── robots.ts
│   ├── _components/       # トップページ専用コンポーネント
│   ├── [article-slug]/    # 記事ページ（静的・1階層）
│   │   └── page.tsx
│   ├── articles/          # 記事ハブ・カテゴリページ
│   │   ├── page.tsx       # /articles 記事一覧ハブ
│   │   ├── [categorySlug]/page.tsx  # カテゴリ別一覧
│   │   └── by-industry/   # 業種別カテゴリ
│   ├── business-electricity-retrospective/  # 月次振り返りシリーズ
│   │   ├── page.tsx       # 振り返りハブ
│   │   ├── [slug]/        # 月次・年次動向ページ（動的）
│   │   └── _lib/          # シリーズ専用データ・ヘルパー
│   ├── special/
│   │   └── emergency-scenario-analysis/  # 有事シナリオ分析特集
│   │       ├── page.tsx   # 特集トップ
│   │       ├── [slug]/    # 個別シナリオページ（動的）
│   │       └── _components/  # 特集専用コンポーネント（EmergencyScenarioLayout等）
│   ├── compare/           # 料金メニュー比較診断
│   ├── how-to/            # シミュレーターの使い方
│   ├── admin/             # 管理ページ（サイトマップ・公開対象外）
│   └── api/               # APIルート（サイトマップ・公開対象外）
├── components/
│   ├── PublicHeader.tsx   # グローバルヘッダー（"use client"）
│   ├── Footer.tsx         # グローバルフッター
│   ├── analytics/
│   │   └── GoogleAnalytics.tsx
│   ├── articles/          # 記事ハブ専用コンポーネント
│   └── simulator/         # 記事ページ内で使う共通コンポーネント
│       ├── ContentCta.tsx
│       ├── RelatedLinks.tsx
│       ├── InfoBox.tsx
│       └── FlowDiagram.tsx
├── data/
│   └── articles.ts        # 記事マスターデータ（articleList / articleCategories）
└── lib/
    ├── articles.ts        # 記事データ取得ヘルパー関数
    ├── emergencyScenarioAnalysis.ts  # 有事シナリオシリーズデータ
    ├── businessElectricityRetrospective/  # 振り返りシリーズ関連
    ├── riskScore.ts
    ├── supabase.ts
    └── industry*Articles.ts  # 業種別記事データ
```

---

## URLルーティング規則

| URL パターン | 内容 |
|---|---|
| `/` | シミュレーターホーム |
| `/how-to` | シミュレーターの使い方 |
| `/compare` | 料金メニュー比較 |
| `/articles` | 記事ハブ（カテゴリ一覧） |
| `/articles/[categorySlug]` | カテゴリ別記事一覧 |
| `/[article-slug]` | 記事ページ（1階層。例: `/fuel-cost-adjustment`） |
| `/business-electricity-retrospective` | 月次振り返りハブ |
| `/business-electricity-retrospective/[slug]` | 個別月次ページ（例: `2026-02`） |
| `/special/emergency-scenario-analysis` | 有事シナリオ分析特集トップ |
| `/special/emergency-scenario-analysis/[slug]` | 個別シナリオページ |

**記事ページのslugは必ず1階層のケバブケース**（`/articles/` 配下は使わない）。

---

## 記事データの管理

### `src/data/articles.ts`

すべての記事メタデータはここで一元管理する。

```ts
// 記事カテゴリ
export type ArticleCategorySlug =
  | "basic" | "price-increase" | "price-trends" | "plan-types"
  | "review-points" | "last-resort-supply" | "risk-scenarios"
  | "power-procurement" | "monthly-review";

export type ArticleCategory = {
  name: string;
  slug: ArticleCategorySlug;
  description: string;
  intro: string;
  learnPoints: string[];
  recommendedReadingOrder: string[];  // slugの配列（表示順）
  order: number;                      // カテゴリ表示順
  group: "learning" | "monthly";
};

// 個別記事
export type ArticleMeta = {
  title: string;
  slug: string;          // URLパス（先頭スラッシュなし）
  description: string;
  category: string;      // 表示用カテゴリ名
  categorySlug: ArticleCategorySlug;
  featured?: boolean;
  publishedAt: string;   // "YYYY-MM-DD" 形式
  order: number;         // カテゴリ内の並び順
};

export const articleCategories: ArticleCategory[] = [...];
export const articleList: ArticleMeta[] = [...];
```

### 記事取得ヘルパー（`src/lib/articles.ts`）

```ts
getSortedCategories()                  // order順にソートしたカテゴリ一覧
getCategoryBySlug(slug)                // slug → ArticleCategory
getArticlesByCategory(categorySlug)    // カテゴリ内の記事をorder順で取得
getArticlesBySlugs(slugs)             // slug配列順に記事を取得
getLatestArticles(limit)              // publishedAt降順
getFeaturedArticles(limit)            // featured=true の記事
```

---

## 新しい記事ページの追加手順

### 1. `src/data/articles.ts` にメタデータを追加

```ts
{
  title: "ページタイトル",
  slug: "url-slug-kebab-case",
  description: "150字程度の説明文（metaやカードに使用）",
  category: "カテゴリ名（日本語）",
  categorySlug: "basic",  // 適切なカテゴリを選択
  order: 99,              // カテゴリ内の並び順
  publishedAt: "2026-04-05",
},
```

必要なら `recommendedReadingOrder` にも追加する。

### 2. `src/app/[slug]/page.tsx` を作成

**ページファイルの標準構成:**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

// --- 定数 ---
const pageTitle = "完全なSEOタイトル｜サブタイトル";
const pageDescription = "metadescription（150字程度）";

// ページ固有データ（配列・オブジェクト）
const someData = [...];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["キーワード1", "キーワード2"],
  alternates: {
    canonical: "https://simulator.eic-jp.org/url-slug-kebab-case",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/url-slug-kebab-case",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- Page Component ---
export default function PageNamePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">ページタイトル</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">リード文</p>
      </header>

      {/* 本文セクション群 */}
      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">セクション見出し</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本文</p>
        </section>
      </section>

      {/* 関連リンク（ページ末尾） */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[{ href: "/...", title: "...", description: "..." }]}
        />
      </div>

      {/* CTA（最末尾） */}
      <div className="mt-6">
        <ContentCta
          heading="次にすること"
          description="..."
          links={[{ href: "/", label: "シミュレーターで診断する" }]}
        />
      </div>
    </main>
  );
}
```

### 3. サイトマップ

**静的ページは自動検出されるため `sitemap.ts` の編集不要。**
動的ルート（新しいシリーズ）を追加する場合のみ `sitemap.ts` を更新する。

---

## 共通コンポーネント（`src/components/simulator/`）

### `ContentCta`
ページ末尾のアクション誘導セクション。

```tsx
<ContentCta
  heading="見出し"
  description="説明文"
  links={[
    { href: "/", label: "ボタンラベル" },
    { href: "/articles", label: "解説を読む" },
  ]}
/>
```

### `RelatedLinks`
関連記事カード（2カラムグリッド）。

```tsx
<RelatedLinks
  heading="関連記事"
  intro="任意の導入文"
  links={[
    { href: "/slug", title: "記事タイトル", description: "説明文" },
  ]}
/>
```

### `InfoBox`
補足情報・注記ボックス。

```tsx
<InfoBox title="ポイント">
  <p>補足内容</p>
</InfoBox>
```

### `FlowDiagram`
フロー図コンポーネント（`src/components/simulator/FlowDiagram.tsx` 参照）。

---

## デザイン規則（Tailwindクラス）

### レイアウト

| 用途 | クラス |
|---|---|
| ページ全体のmax幅 | `max-w-[1600px]` |
| ページ横padding | `px-4 sm:px-6 lg:px-8` |
| ページ縦padding | `py-8` |
| ページ背景 | `bg-white text-slate-800` |

### カードスタイル

| 種類 | クラス |
|---|---|
| 標準カード | `rounded-xl border border-slate-200 bg-white p-5` |
| ヘッダー・強調 | `rounded-xl border border-sky-200 bg-sky-50 p-6` |
| まとめ・結論 | `rounded-xl border border-sky-200 bg-sky-50 p-5` |
| 背景グレー | `rounded-xl border border-slate-200 bg-slate-50 p-5` |
| 小カード（影付き） | `rounded-xl border border-slate-200 bg-white p-4 shadow-sm` |

### テキスト

| 用途 | クラス |
|---|---|
| H1 | `text-3xl font-bold tracking-tight text-slate-900` |
| H2 | `text-xl font-semibold text-slate-900` |
| H3 | `text-lg font-semibold text-slate-900` |
| 本文 | `text-sm leading-7 text-slate-700 sm:text-base` |
| 小文字注記 | `text-xs text-slate-500` |
| 内部リンク | `text-sky-700 underline underline-offset-2 hover:text-sky-900` |

### グリッド

| 用途 | クラス |
|---|---|
| 2カラム | `grid gap-3 md:grid-cols-2` |
| 3カラム | `grid gap-3 md:grid-cols-2 xl:grid-cols-3` |
| 4カラム | `grid gap-3 md:grid-cols-2 xl:grid-cols-4` |

---

## 特集シリーズの追加パターン

複数ページから成る連載特集（有事シナリオ分析のような構成）を作る場合:

1. **`src/lib/[featureName].ts`** にシリーズデータ定義
   - ページ一覧配列 (`SERIES: Page[]`)
   - スラッグ一覧 (`SLUGS: string[]`)
   - ヘルパー関数（`getBySlug`, `getNeighbors`, `getPagePath`）

2. **`src/app/special/[feature-name]/_components/[Feature]Layout.tsx`** に共有レイアウト
   - パンくずナビ、シリーズ全体構成リスト、前後ページナビを含める

3. **`src/app/special/[feature-name]/page.tsx`** に特集トップページ

4. **`src/app/special/[feature-name]/[slug]/page.tsx`** に動的ページ

5. **`sitemap.ts`** に動的ページを追加:
   ```ts
   for (const slug of FEATURE_SLUGS) {
     upsertRouteDate(routeDateMap, `/special/[feature-name]/${slug}`, lastmod);
   }
   ```

---

## グローバルレイアウト（変更時の注意）

### `PublicHeader.tsx`
- `headerLinks` 配列でナビリンクを管理
- `specialFeatureLink` オブジェクトで特集リンク（紫バッジ）を管理
- ヘッダー統計（シミュレーション回数・平均リスクスコア）は `/api/simulation-results/average` から取得

### `Footer.tsx`
- `mainPageLinks`・`themeLinks`・`retrospectiveDataLinks` の配列でリンク管理
- 新カテゴリや特集を追加したときは適宜フッターリンクも更新する

---

## 月次振り返りシリーズ（`/business-electricity-retrospective`）

- データは `src/app/business-electricity-retrospective/_lib/retrospective-data.ts` に集約
- 契約区分: `extra-high-voltage` / `high-voltage` / `low-voltage-power` / `low-voltage-lighting`
- 年次データ: 2020〜2025
- 新しい月のページを追加する場合は `_lib/` 内のデータと `getAllRetrospectiveSlugs()` を更新

---

## サイトマップの動作

`src/app/sitemap.ts` は以下を自動処理する:

- `src/app/` 以下を再帰的に走査して静的ページを収集
- `admin/`・`api/`・`_`（プライベート）・`[動的セグメント]`・`(ルートグループ)` はスキップ
- 記事カテゴリページ（動的ルート）を `articleCategories` から生成
- 振り返りページを `getAllRetrospectiveSlugs()` から生成
- 有事シナリオページを `EMERGENCY_SCENARIO_SLUGS` から生成

**新しい静的ページは自動検出される。新しい動的シリーズのみ `sitemap.ts` に追記が必要。**

---

## 記事カテゴリ一覧

| slug | 名称 | order |
|---|---|---|
| `basic` | 基礎から知る | 1 |
| `price-increase` | 料金が上がる理由を知る | 2 |
| `price-trends` | 電気料金の推移と高止まり | 3 |
| `plan-types` | 契約メニューの違いを知る | 4 |
| `review-points` | 見直しポイントを知る | 5 |
| `last-resort-supply` | 最終保障供給を知る | 6 |
| `risk-scenarios` | リスクシナリオ別に知る | 7 |
| `power-procurement` | 電力調達の仕組みを知る | 8 |
| `monthly-review` | 法人電気料金振り返り | 9 (monthly group) |
