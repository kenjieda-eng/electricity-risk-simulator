import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "法人向け電気料金の相場｜契約区分別の単価レンジと年間コスト目安";
const pageDescription =
  "法人向け電気料金の相場を契約区分別・業種別に整理。高圧・特別高圧の単価レンジ、年間電気代の規模感、2022年以降の単価推移データを掲載。見積比較前の相場感把握に。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 相場",
    "電気料金 相場 見方",
    "高圧 特別高圧 単価",
    "法人 年間電気代",
    "電気料金 推移 2022 2025",
    "法人 見積比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-price-benchmark",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-price-benchmark",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const faq = [
  { question: "高圧電力の相場単価はどのくらいですか？", answer: "エリアや契約条件によりますが、2024〜2025年時点で高圧の総合単価は概ね15〜22円/kWh程度が目安です。2022年以前と比べると大幅に高止まりしており、燃料費調整額・容量拠出金の影響が続いています。" },
  { question: "特別高圧と高圧で単価はどのくらい違いますか？", answer: "特別高圧は高圧よりも基本的に単価が低くなる傾向があります。大口需要家向けのため個別交渉が中心となり、使用量や負荷率によって大きく異なります。" },
  { question: "電気料金の相場はどこで確認できますか？", answer: "資源エネルギー庁の電力調査統計や電力・ガス取引監視等委員会のデータで電圧別・エリア別の平均単価を確認できます。自社の実績単価（総請求額÷使用電力量）と比較するのが効果的です。" },
];

export default function BusinessElectricityPriceBenchmarkPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人向け電気料金の相場｜契約区分別の単価レンジと年間コスト目安"
        description="法人向け電気料金の相場を契約区分別・業種別に整理。高圧・特別高圧の単価レンジ、年間電気代の規模感、2022年以降の単価推移データを掲載。"
        url="https://simulator.eic-jp.org/business-electricity-price-benchmark"
        datePublished="2025-08-04"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "法人向け電気料金の相場はどう見るか" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホーム</Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link href="/articles/basic" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基礎から知る</Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">電気料金の相場</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電気料金の相場｜契約区分別の単価レンジと年間コスト目安
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金の相場を知りたいと思っても、家庭向けのように単純な比較はしにくいのが実情です。
          契約電力、使用量、使用時間帯、契約メニュー、調整項目によって見え方が変わるためです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約区分別の単価レンジ・年間コスト規模感・2022年以降の単価推移を具体的なデータとともに整理します。
          見積比較前の相場感把握にお役立てください。
        </p>
      </header>

      <section className="mt-6 space-y-6">

        {/* 契約区分別の単価レンジ */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別の単価レンジ（2024〜2025年度参考）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約区分によって料金構造が異なるため、単価レンジも大きく変わります。低圧（動力）は基本料金が含まれた従量制、高圧・特別高圧はデマンド制の基本料金が別途加算される構造です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電力量料金単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">基本料金単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">総合単価（全費用込み）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">低圧（動力）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">25〜32円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">28〜38円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">高圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15〜22円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500〜1,900円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">22〜30円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">特別高圧</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜18円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200〜1,600円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">18〜25円/kWh</span></td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 総合単価は基本料金・燃料費調整額・再エネ賦課金・容量拠出金相当を含む概算。エリア・契約内容・使用パターンにより異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の料金構造の詳細は
            {" "}
            <Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧料金の見方</Link>
            {" "}・{" "}
            <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧料金の見方</Link>
            {" "}で確認できます。
          </p>
        </section>

        {/* 年間電気代の規模感 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">年間電気代の規模感（具体例）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量と契約区分の組み合わせによって、年間電気代は数百万円から億単位まで幅があります。以下は代表的な規模感の目安です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">小規模オフィス（低圧・月5,000kWh）</div>
              <div className="mt-1 text-2xl font-bold text-sky-700">年間 約200〜230万円</div>
              <p className="mt-1 text-xs text-slate-500">低圧動力契約。総合単価28〜38円/kWh帯が適用。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">中規模工場（高圧・月50,000kWh）</div>
              <div className="mt-1 text-2xl font-bold text-sky-700">年間 約1,900〜2,400万円</div>
              <p className="mt-1 text-xs text-slate-500">高圧契約。デマンド制基本料金込みの総合単価で試算。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">大規模工場（特高・月500,000kWh）</div>
              <div className="mt-1 text-2xl font-bold text-sky-700">年間 約1.5〜2.5億円</div>
              <p className="mt-1 text-xs text-slate-500">特別高圧契約。燃料費調整・容量拠出金の変動幅が大きい。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">商業施設（高圧・月80,000kWh）</div>
              
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-1 text-2xl font-bold text-sky-700">年間 約2,800〜3,600万円</div>
              <p className="mt-1 text-xs text-slate-500">空調・照明の割合が高く、夏冬の季節変動が出やすい。</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 基本料金・燃料費調整額・再エネ賦課金を含む概算。エリア・契約条件・季節パターンにより実績は異なります。
          </p>
        </section>

        {/* 2022〜2025年の単価推移 */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2021〜2025年の単価推移（高圧平均単価目安）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降、燃料費調整額の急騰と政府の激変緩和措置が相場を大きく動かしました。
            現在の契約単価が市場の流れの中でどのフェーズにあるかを把握することが、見直し判断の出発点になります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧平均単価目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">主な背景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2021年前半</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold">16〜18円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">コロナ後の回復期。燃料費調整額はほぼフラット。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2022年後半</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">25〜35円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">ウクライナ危機・LNG高騰で燃料費調整額が急上昇。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2023年前半</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-amber-700">22〜28円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">政府激変緩和措置（電気・ガス価格激変緩和対策事業）で抑制。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2024年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold">18〜24円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料価格の安定化。激変緩和措置の段階的終了。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">2025年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-amber-700">20〜26円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">容量拠出金の本格化により基本料金・総合単価が押し上げ。</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ 高圧（6kV受電）の全費用込み総合単価の目安。エリア・供給会社・契約メニューにより実績は異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の仕組みは
            {" "}
            <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額とは</Link>
            {" "}で詳しく確認できます。
          </p>
        </section>

        {/* 業種別単価目安テーブル（既存） */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別 法人電気料金の単価目安（高圧・2024〜2025年度参考）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">業種・施設タイプ</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電力量料金単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間電気代目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">オフィスビル（中規模）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">30,000〜60,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">18〜23円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">900〜1,800万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">工場（中規模）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000〜150,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">16〜22円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200〜4,500万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">スーパー・商業施設</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">40,000〜100,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">19〜25円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,100〜3,000万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">病院（200床規模）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">60,000〜120,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">18〜24円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500〜3,600万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">学校・大学</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20,000〜80,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">20〜26円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">600〜2,500万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">ホテル（中規模）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000〜100,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">19〜24円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,400〜3,000万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 基本料金・燃料費調整額・再エネ賦課金を含む概算。エリア・契約条件・使用パターンにより異なります。</p>
        </section>

        {/* 1円/kWhの差の影響テーブル（既存） */}
        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用量規模別 1円/kWhの差が年間に与える影響</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間使用量</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">1円/kWh差の年間影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">3円/kWh差の年間影響</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">120,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±12万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±36万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">600,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±60万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±180万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">100,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±120万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±360万円</span></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 相場感をつかむ前の基礎 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価だけで比較しにくい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            単価が低く見えても、基本料金や調整項目、契約条件によって最終総額は変わります。相場感をつかむには、単価だけでなく請求額の構成を分けて確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金構造の基礎は
            {" "}
            <Link href="/business-electricity-bill-breakdown" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金の内訳
            </Link>
            {" "}で確認できます。また、契約電力（デマンド）の仕組みは
            {" "}
            <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              契約電力とは
            </Link>
            {" "}をあわせてご覧ください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で先に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金・電力量料金・調整項目を分けて把握する</li>
            <li>契約電力と使用量の関係を確認する</li>
            <li>前月・前年同月と比較して増減要因を整理する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実際の確認手順は
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              請求書の見方
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で相場感をつかむ考え方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相場感をつかむには、複数見積を同じ前提で比較することが有効です。基本料金、電力量料金、調整項目、契約条件をそろえて比較すると、価格差の理由を説明しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較の詳細は
            {" "}
            <Link href="/how-to-read-electricity-quote" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              見積書の見方
            </Link>
            {" "}で確認できます。
          </p>
        </section>

        {/* 相場を見るときのチェックリスト */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">相場を見るときのチェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の点を確認してから相場比較に入ると、判断のズレを減らせます。
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>契約区分を確認する</strong>―低圧・高圧・特高で相場レンジが大きく異なる。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>総合単価で比べる</strong>―電力量料金単価だけでなく基本料金・調整額込みの実績単価を算出する。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>燃料費調整額の変動幅を把握する</strong>―市場連動型は上振れリスクがある。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>容量拠出金の影響を確認する</strong>―2024年度以降は基本料金相当に上乗せされている。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>複数エリア・複数拠点は個別に比較する</strong>―エリアによって単価レンジが数円異なる場合がある。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 flex-shrink-0 text-sky-600">&#10003;</span>
              <span><strong>過去12カ月の実績で判断する</strong>―月単位の変動ではなく年間総額で判断する。</span>
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金メニューの固定・市場連動の違いは
            {" "}
            <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">比較・診断ページ</Link>
            {" "}で試算できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金の相場は、契約区分によって総合単価が18〜38円/kWhと大きく異なります。
            2022年以降の単価急騰と2024〜2025年の容量拠出金本格化を経て、現在の相場は2021年比で依然として高止まりの水準です。
            単価レンジを把握したうえで、請求書の実績総合単価と見積を比較することが、相場感をつかむ最短ルートになります。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力調査統計・契約区分別単価データ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・新電力情報" },
          ]}
          publishedAt="2025-08-04"
        />

        <RelatedLinks
          heading="あわせて読みたい記事"
          intro="相場感を、内訳・見積・見直し判断までつなげると、単価だけに頼らない比較がしやすくなります。"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳とは",
              description: "相場比較の前提となる料金構造を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "実際の請求書で確認すべき項目を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積比較で確認したい項目を整理できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力（デマンド）とは",
              description: "基本料金の算定基礎となるデマンドの仕組みを理解できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "単価変動の最大要因となる燃料費調整額の仕組みを確認できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧契約特有のデマンド制料金構造を詳しく解説しています。",
            },
            {
              href: "/extra-high-voltage-electricity-pricing",
              title: "特別高圧電力の料金の見方",
              description: "特高契約の料金構造と注意点を確認できます。",
            },
            {
              href: "/compare",
              title: "料金メニューの比較・診断",
              description: "固定と市場連動の差分を、自社に近い条件で試算できます。",
            },
            {
              href: "/articles/basic",
              title: "基礎から知る（カテゴリ）",
              description: "内訳や契約の基礎テーマをカテゴリ単位で辿れます。",
            },
          ]}
        />

        <ContentCta
          heading="比較前提をそろえて確認する"
          description="相場感を整理したら、比較ページとシミュレーションで条件差を具体的に確認することが有効です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
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
