import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "有事・コスト上昇シナリオ特集一覧｜電気・原油・ガス・円安・原材料・食料品";
const pageDescription =
  "法人のエネルギー・原材料・食料品などのコスト上昇リスクをシナリオ別に確認できる特集ページです。有事シナリオ（電気料金）、原油・物流、円安×原油高 W効果、法人ガス代、原材料・包装資材、食料品仕入の6テーマを3段階シナリオで比較できます。";
const canonicalUrl = "https://simulator.eic-jp.org/special";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "有事シナリオ分析",
    "コスト上昇シナリオ",
    "法人コスト上昇",
    "電気料金シナリオ",
    "原油高騰",
    "円安 輸入コスト",
    "ガス料金",
    "原材料高",
    "食料品仕入",
    "地政学リスク 法人",
    "エネルギーコスト シミュレーション",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const specialLinks = [
  {
    href: "/special/emergency-scenario-analysis",
    title: "有事シナリオ分析（電気料金）",
    description:
      "原油高騰・補助金終了・再エネ賦課金・円安の四重苦で、法人電気代の上振れを3シナリオ比較。",
  },
  {
    href: "/special/oil-scenario-analysis",
    title: "有事シナリオ分析（原油・物流コスト）",
    description:
      "イラン情勢を前提に、ガソリン・軽油と物流・社用車・出張費への影響を確認。",
  },
  {
    href: "/special/fx-double-effect-scenario-analysis",
    title: "有事シナリオ分析（円安×原油高 W効果）",
    description:
      "為替×原油の掛け算で膨らむ輸入コストを、連鎖構造と法人影響・対策で整理。",
  },
  {
    href: "/special/gas-scenario-analysis",
    title: "有事シナリオ分析（法人ガス代）",
    description:
      "都市ガス・LPガスの料金見通し、補助金持続性、業種別コスト増、電化比較を整理。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis",
    title: "有事シナリオ分析（原材料・包装資材）",
    description:
      "ナフサ不足・エチレン減産を前提に、プラ・包装・化学品・非鉄金属の影響を確認。",
  },
  {
    href: "/special/food-procurement-scenario-analysis",
    title: "有事シナリオ分析（食料品仕入コスト）",
    description:
      "小麦・食用油・畜産・水産・青果の価格動向と、飲食・食品製造への影響を整理。",
  },
] as const;

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  inLanguage: "ja",
  isPartOf: {
    "@type": "WebSite",
    name: "法人向け電気料金上昇、高騰リスクシミュレーター",
    url: "https://simulator.eic-jp.org",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: specialLinks.length,
    itemListElement: specialLinks.map((link, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://simulator.eic-jp.org${link.href}`,
      name: link.title,
      description: link.description,
    })),
  },
};

export default function SpecialTopPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "特集" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="mb-4 text-sm text-slate-600">
          <Link href="/" className="underline underline-offset-2 hover:text-slate-900">
            トップ
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">特集</span>
        </nav>

        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">有事・コスト上昇シナリオ特集一覧</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            地政学リスクや相場変動など、法人コストの上振れリスクをテーマ別に確認できる特集ページです。電気料金だけでなく、原油・ガス・円安×原油高の複合効果・原材料・食料品まで、6テーマを3段階シナリオ（軽微・中程度・深刻）で比較できます。目的に合わせて下記の特集からご確認ください。
          </p>
        </header>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特集シリーズの概要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各特集は、通常の記事では扱いきれない複合的なリスクシナリオを、3段階（軽微・中程度・深刻）で分析します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特集テーマ</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対象リスク</th>
                  <th className="hidden border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900 md:table-cell">影響を受けやすい業種</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">有事シナリオ（電気料金）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">地政学リスク全般</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">全業種</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">原油・物流コスト</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">原油価格高騰</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">製造業・物流業</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">円安×原油高 W効果</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">為替+商品高の複合</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">輸入依存業種全般</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">法人ガス代</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">LNG価格変動</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">電力多消費産業</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">原材料・包装資材</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">コストプッシュ</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">食品・製造・小売</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">食料品仕入コスト</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">食料価格高騰</td>
                  <td className="hidden border border-slate-200 px-3 py-2 text-slate-700 md:table-cell">外食・食品製造</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500 md:hidden">※ タブレット以上で「影響を受けやすい業種」列も表示されます。</p>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">どの特集から読むべきか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><span className="font-semibold text-slate-900">全業種共通:</span> まず「有事シナリオ分析（電気料金）」で電気代の上振れ幅を把握</li>
            <li><span className="font-semibold text-slate-900">製造・物流業:</span> 「原油・物流コスト」→「円安×原油高 W効果」の順で複合リスクを確認</li>
            <li><span className="font-semibold text-slate-900">食品・外食業:</span> 「食料品仕入コスト」→「原材料・包装資材」で仕入全体を把握</li>
            <li><span className="font-semibold text-slate-900">ガス使用が大きい施設:</span> 「法人ガス代」で都市ガス・LPガスへの影響を確認</li>
          </ul>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特集ページを選ぶ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {specialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:bg-slate-50"
              >
                <p className="text-lg font-semibold text-slate-900">{link.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{link.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <RelatedLinks
            heading="あわせて読みたい関連コンテンツ"
            intro="特集と合わせて、平常時の料金動向や他のテーマ別解説も参考にしてください。"
            links={[
              {
                href: "/business-electricity-retrospective",
                title: "法人電気料金 月次振り返り",
                description: "電力契約区分別の実績単価や補助金の影響を月次・年次で確認できます。",
              },
              {
                href: "/articles",
                title: "記事ハブ（カテゴリ別）",
                description: "基礎・料金推移・契約メニュー・見直しポイントなど、テーマ別に解説記事を整理しています。",
              },
              {
                href: "/articles/risk-scenarios",
                title: "リスクシナリオ別に知る",
                description: "個別のリスク要因ごとに、法人電気料金への影響と備え方をまとめた記事カテゴリです。",
              },
              {
                href: "/compare",
                title: "料金メニュー比較診断",
                description: "主要な契約メニューの特徴と、自社に合うメニューの選び方を診断できます。",
              },
            ]}
          />
        </div>

        <div className="mt-6">
          <ContentCta
            heading="自社の電気代リスクを数値で把握する"
            description="各シナリオの前提が自社にどう効くかは、まず現状の電気代リスクスコアを把握するところから。シミュレーターで2分で確認できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を確認する" },
              { href: "/articles", label: "解説記事を読む" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
