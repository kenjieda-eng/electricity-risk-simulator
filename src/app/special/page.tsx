import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "有事シナリオ分析 特集一覧｜法人向けシナリオ特集";
const pageDescription =
  "法人のエネルギー・原材料関連コスト上昇リスクをシナリオ別に確認できる特集ページです。電気料金版・原油物流版・円安原油版・ガス料金版・原材料包装資材版・食料品仕入コスト版の6テーマから選んで確認できます。";
const canonicalUrl = "https://simulator.eic-jp.org/special";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
      "原油高騰・補助金終了・再エネ賦課金・円安の四重苦を前提に、法人電気代の上振れリスクを3シナリオで比較します。",
  },
  {
    href: "/special/oil-scenario-analysis",
    title: "有事シナリオ分析（原油・物流コスト）",
    description:
      "イラン情勢を前提に、ガソリン・軽油価格の変動と物流コスト・社用車費用・出張旅費への影響をシナリオ別に確認できます。",
  },
  {
    href: "/special/fx-double-effect-scenario-analysis",
    title: "有事シナリオ分析（円安×原油高 W効果）",
    description:
      "為替と原油の掛け算で輸入コストが増えるW効果を、連鎖構造、シナリオ比較、家計・法人影響、対策まで整理します。",
  },
  {
    href: "/special/gas-scenario-analysis",
    title: "有事シナリオ分析（法人ガス代）",
    description:
      "都市ガス・LPガスの料金見通し、補助金の持続性、業種別コスト増、電化比較をシナリオ別に確認できます。",
  },
  {
    href: "/special/materials-packaging-scenario-analysis",
    title: "有事シナリオ分析（原材料・包装資材）",
    description:
      "ナフサ不足・エチレン減産を前提に、プラスチック・包装資材・化学品・非鉄金属の価格動向と業種別影響を確認できます。",
  },
  {
    href: "/special/food-procurement-scenario-analysis",
    title: "有事シナリオ分析（食料品仕入コスト）",
    description:
      "小麦・食用油・畜産・水産・青果の価格上昇と、飲食業・食品製造業への影響、対策ロードマップを確認できます。",
  },
] as const;

export default function SpecialTopPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "特集" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">有事シナリオ分析 特集一覧</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          地政学リスクの影響を受ける局面で、法人コストの上振れリスクをテーマ別に確認できる特集ページです。目的に合わせて、下記の特集からご確認ください。
        </p>
      </header>

      <section className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">特集シリーズの概要</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          各特集は、通常の記事では扱いきれない複合的なリスクシナリオを、3段階（軽微・中程度・深刻）で分析します。
        </p>
        <table className="mt-4 w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特集テーマ</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">対象リスク</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">影響を受けやすい業種</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">シナリオ数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">有事シナリオ（電気料金）</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">地政学リスク全般</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">全業種</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">原油・物流コスト</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">原油価格高騰</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">製造業・物流業</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">円安×原油高 W効果</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">為替+商品高の複合</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">輸入依存業種全般</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">法人ガス代</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">LNG価格変動</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">電力多消費産業</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">原材料・包装資材</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">コストプッシュ</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">食品・製造・小売</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">食料品仕入コスト</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">食料価格高騰</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700">外食・食品製造</td>
              <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">3</span></td>
            </tr>
          </tbody>
        </table>
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
    </main>
    </>
  );
}
