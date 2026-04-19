import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "カーボンプライシングが法人電気料金に与える影響｜GX-ETSと炭素税の見通し";
const pageDescription =
  "カーボンプライシング（GX-ETS・炭素税）が法人の電気料金にどう影響するかを解説。導入スケジュール、電力セクターへの転嫁経路、EU先行事例との比較を整理。";
const pageUrl = "https://simulator.eic-jp.org/carbon-pricing-electricity-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "カーボンプライシング 電気料金",
    "GX-ETS 電力 影響",
    "炭素税 電気料金 法人",
    "排出権取引 電力 コスト",
    "EU-ETS 比較",
    "炭素価格 kWh単価",
    "GX 2026 電力",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/price-trends", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/price-trends"],
  },
};

const gxSchedule = [
  {
    phase: "2026年度（試行期間）",
    target:
      "大規模排出事業者（電力・製造・鉄鋼等、年排出3万tCO2e以上が目安）",
    priceLevel: "国内クレジット・カーボンオフセット活用で実質コストは限定的",
    powerImpact:
      "電力セクターへの直接義務付けは限定的。発電事業者は段階的に参加",
    note: "自主参加型から義務化への移行期。罰則なし",
  },
  {
    phase: "2028年度（本格運用）",
    target: "対象拡大（年排出1万tCO2e以上へ引き下げ検討）",
    priceLevel: "市場価格が形成される。5,000〜15,000円/tCO2水準が想定",
    powerImpact:
      "電力会社が排出コストを卸価格・小売単価に反映する動きが本格化",
    note: "排出枠の有償配分が始まると電力コストへの転嫁が加速",
  },
  {
    phase: "2030年（拡大・深化）",
    target: "GX実現基本方針に沿った全セクター対応。カーボン税との組み合わせ検討",
    priceLevel: "20,000〜50,000円/tCO2も視野（欧州並みへの収束想定）",
    powerImpact:
      "電気料金への転嫁が一般化。電源構成の脱炭素化で部分的に吸収",
    note: "EU-ETS水準に近づく場合、追加コストは2〜5円/kWh規模に",
  },
];

const carbonPriceImpact = [
  {
    price: "1,000円/tCO2",
    kwhImpact: "+約0.04〜0.05円/kWh",
    monthlyImpact5man: "+約2,000〜2,500円/月",
    annualImpact5man: "+約2.4〜3万円/年",
    note: "現時点（試行段階）の実質的な影響に近い",
  },
  {
    price: "3,000円/tCO2",
    kwhImpact: "+約0.12〜0.15円/kWh",
    monthlyImpact5man: "+約6,000〜7,500円/月",
    annualImpact5man: "+約7.2〜9万円/年",
    note: "2026〜2027年の本格化初期の目安水準",
  },
  {
    price: "5,000円/tCO2",
    kwhImpact: "+約0.20〜0.25円/kWh",
    monthlyImpact5man: "+約1〜1.25万円/月",
    annualImpact5man: "+約12〜15万円/年",
    note: "2028〜2029年の本格運用初期の目安水準",
  },
  {
    price: "10,000円/tCO2",
    kwhImpact: "+約0.40〜0.50円/kWh",
    monthlyImpact5man: "+約2〜2.5万円/月",
    annualImpact5man: "+約24〜30万円/年",
    note: "欧州的な普及段階（日本では2030年代以降の想定）",
  },
];

const euComparison = [
  {
    item: "制度名",
    japan: "GX-ETS（グリーントランスフォーメーション排出量取引制度）",
    eu: "EU-ETS（EU排出権取引制度）",
  },
  {
    item: "開始年",
    japan: "2026年（試行）、2028年（本格）",
    eu: "2005年（電力セクターは第1フェーズから）",
  },
  {
    item: "炭素価格水準",
    japan: "試行段階では実質低水準。本格化後5,000〜15,000円/tCO2想定",
    eu: "60〜80ユーロ/tCO2（7,000〜9,600円相当、2023〜2024年水準）",
  },
  {
    item: "電力への転嫁",
    japan: "本格化後に発電コストを通じた間接転嫁が本格化",
    eu: "卸電力価格にマージナルコストとして転嫁済み（2〜5円/kWh相当）",
  },
  {
    item: "法人の対応状況",
    japan: "現時点では準備段階。大企業はスコープ2排出管理で先行",
    eu: "PPAや再エネ証書（GO）の活用が一般化し、コスト管理が成熟",
  },
];

const prepSteps = [
  {
    title: "電力由来のCO2排出量（スコープ2）を定量化する",
    detail:
      "年間使用量（kWh）× 排出係数（kg-CO2/kWh）で概算できます。将来の炭素価格を掛けることでコストインパクトを試算できます。",
  },
  {
    title: "再エネ電力・非化石証書でスコープ2を削減する",
    detail:
      "カーボンプライシングが強化されるほど、再エネ比率を高めることでコスト転嫁の影響を回避できます。オンサイト太陽光・オフサイトPPAを検討するタイミングです。",
  },
  {
    title: "電力契約にカーボンフリーメニューを比較に加える",
    detail:
      "主要な電力会社が提供するカーボンフリーオプション（再エネ証書付き）の単価と、将来の炭素コスト転嫁リスクとを比較して費用対効果を評価します。",
  },
  {
    title: "予算前提にカーボンコストの段階的上昇を織り込む",
    detail:
      "2026〜2030年にかけて段階的に上昇する炭素コストをシナリオに組み込み、電気料金予算にレンジ管理の考え方を導入します。",
  },
  {
    title: "GX-ETSの動向を年1〜2回モニタリングする",
    detail:
      "経済産業省のGX推進機構公表資料・炭素クレジット市場の取引価格を定期確認し、想定より早く価格が上昇している場合は対策を前倒します。",
  },
];

export default function CarbonPricingElectricityImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="カーボンプライシングが法人電気料金に与える影響｜GX-ETSと炭素税の見通し"
        description="カーボンプライシング（GX-ETS・炭素税）が法人の電気料金にどう影響するかを解説。導入スケジュール、電力セクターへの転嫁経路、EU先行事例との比較を整理。"
        url="https://simulator.eic-jp.org/carbon-pricing-electricity-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "カーボンプライシングが法人電気料金に与える影響" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">カーボンプライシングと電気料金</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ページヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          カーボンプライシングが法人電気料金に与える影響
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本では2026年にGX-ETS（グリーントランスフォーメーション排出量取引制度）の試行運用が始まります。
          排出権取引と炭素税は、発電セクターのコストを引き上げ、最終的に法人向け電気料金に転嫁される可能性があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、GX-ETSの3フェーズ導入スケジュール、炭素価格水準別のkWh単価への影響試算、EU-ETSとの比較、
          そして法人が今から準備すべき5項目を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* GX-ETS導入スケジュール */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            GX-ETS導入スケジュール（3フェーズ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本のカーボンプライシングは、GX推進法に基づいて段階的に拡大します。
            電力セクターへの影響は2026年試行段階では限定的ですが、2028年の本格運用以降に拡大が見込まれます。
          </p>
          <div className="mt-4 space-y-4">
            {gxSchedule.map((phase, idx) => (
              <div
                key={phase.phase}
                className={`rounded-xl border p-4 ${
                  idx === 0
                    ? "border-slate-200 bg-slate-50"
                    : idx === 1
                      ? "border-amber-200 bg-amber-50"
                      : "border-red-200 bg-red-50"
                }`}
              >
                <h3 className="font-semibold text-slate-900">{phase.phase}</h3>
                <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      対象
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {phase.target}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      価格水準
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {phase.priceLevel}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      電力への影響
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {phase.powerImpact}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      補足
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">{phase.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※
            スケジュールは2025年時点の政府方針に基づく整理です。制度設計は審議中の内容を含み、変更される可能性があります。
          </p>
        </section>

        {/* 炭素価格別の電気料金影響試算 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            炭素価格別の電気料金影響試算
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            炭素価格が電気料金に転嫁される際のkWh単価への影響を試算します。
            発電時のCO2排出量（高圧受電の場合、日本の電源構成で概算0.40〜0.45kg-CO2/kWh）に炭素価格を掛けて求めた参考値です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    炭素価格
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    kWh単価への影響
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    月5万kWh・月額影響
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    年額影響（12ヶ月）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    想定フェーズ
                  </th>
                </tr>
              </thead>
              <tbody>
                {carbonPriceImpact.map((row) => (
                  <tr key={row.price} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-semibold">
                      {row.price}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.kwhImpact}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.monthlyImpact5man}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.annualImpact5man}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            排出係数は0.43kg-CO2/kWhで試算（電力会社・年度により異なります）。炭素コストの全量が電気料金に転嫁されるわけではなく、
            電源構成の脱炭素化が進むほど影響は小さくなります。
          </p>
        </section>

        {/* EU-ETSとの比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            EU-ETSとの比較（5項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本のGX-ETSは、先行するEU排出権取引制度（EU-ETS）をモデルとした部分が多くあります。
            EU-ETSが電力価格にどう影響したかを参照することで、日本の将来の方向性を推測する手がかりになります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    比較項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    日本（GX-ETS）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    EU（EU-ETS）
                  </th>
                </tr>
              </thead>
              <tbody>
                {euComparison.map((row) => (
                  <tr key={row.item} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.japan}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.eu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            EU-ETSでは炭素価格が電力の限界費用（マージナルコスト）として卸価格に上乗せされ、
            結果として全需要家が炭素コストを負担する仕組みが定着しています。日本でも同様の転嫁メカニズムが本格化する見通しです。
          </p>
        </section>

        {/* 法人が今から準備すべき5項目 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が今から準備すべき5項目
          </h2>
          <ol className="mt-4 space-y-4">
            {prepSteps.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-4 rounded-xl border border-white bg-white p-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-bold text-white">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="carbon-pricing-electricity-impact" terms={["再エネ賦課金", "容量拠出金", "燃料費調整額", "非化石証書", "電力量料金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-price-outlook-2026",
              title: "2026年度以降の法人電気料金見通し",
              description:
                "燃料・為替・再エネ・容量・炭素コストを含む8要因と3シナリオを整理。",
            },
            {
              href: "/renewable-energy-expansion-price-impact",
              title: "再エネ拡大と電気料金の両面影響",
              description:
                "再エネ拡大が電気料金を上げる要因と下げる要因を6項目で比較。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description:
                "FIT/FIP制度の費用が毎月の請求書にどう転嫁されるかを解説。",
            },
            {
              href: "/electricity-price-risk-simulation",
              title: "電気料金リスクシミュレーション",
              description:
                "複数のリスク要因が重なった場合の料金インパクトをシミュレーション。",
            },
          ]}
        />

        <ContentCta
          heading="電気料金リスクをシミュレーションで確認する"
          description="炭素コストを含む複数のリスク要因が重なった場合の月額・年額への影響を試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・見通し記事を読む" },
          ]}
        />
      </section>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
