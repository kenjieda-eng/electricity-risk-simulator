import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "低圧電力の料金の見方｜法人の小規模契約で確認したい料金構造と見直し判断";
const pageDescription =
  "低圧電力（動力・電灯）の料金構造を法人向けに解説。従量電灯と動力の違い、主開閉器契約と負荷設備契約、低圧から高圧への切り替え判断基準（50kWの壁）を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "低圧電力 料金 法人",
    "低圧 高圧 違い",
    "従量電灯 動力 違い",
    "50kW 高圧 切り替え",
    "低圧電力 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/low-voltage-electricity-pricing",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/low-voltage-electricity-pricing",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "低圧電力の料金の見方",
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
  { question: "低圧電力と従量電灯（低圧電灯）の違いは何ですか？", answer: "低圧電力（動力）は3相200Vで主に工場・設備用、従量電灯（電灯）は単相100V/200Vで主に照明・コンセント用です。法人でも両方の契約を持つ場合があり、契約種別によって料金体系が異なります。" },
  { question: "低圧から高圧への切り替えはどのくらいの規模から検討できますか？", answer: "一般的に電力使用量が50kW以上になると高圧への切り替えを検討できます。高圧移行には変電設備の設置費用がかかりますが、単価が低くなるため大規模になるほどコスト削減効果が大きくなります。" },
  { question: "主開閉器契約と負荷設備契約の違いは何ですか？", answer: "主開閉器契約は電力量計のブレーカー容量で契約電力を決める方式、負荷設備契約は施設内の設備容量をもとに契約電力を算出する方式です。実際の使用パターンによってどちらが有利かが変わります。" },
];

export default function LowVoltageElectricityPricingPage() {
  return (
    <>
      <ArticleJsonLd
        headline="低圧電力の料金の見方｜法人の小規模契約で確認したい料金構造と見直し判断"
        description="低圧電力（動力・電灯）の料金構造を法人向けに解説。従量電灯と動力の違い、主開閉器契約と負荷設備契約、低圧から高圧への切り替え判断基準（50kWの壁）を整理。"
        url="https://simulator.eic-jp.org/low-voltage-electricity-pricing"
        datePublished="2026-04-13"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "低圧電力の料金の見方" },
        ]}
        faq={faq}
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
          <li className="before:mr-1 before:content-['>']">
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li className="before:mr-1 before:content-['>']">
            <span className="text-slate-700">低圧電力の料金</span>
          </li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          低圧電力の料金の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          低圧電力は、契約電力50kW未満の法人が利用する電力契約区分です。小規模オフィス・店舗・クリニック・飲食店・倉庫など幅広い施設が該当しますが、
          「従量電灯」と「動力（低圧電力）」の違いや、契約方式の選択、高圧への切り替え判断など、実務で迷いやすいポイントが多くあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、低圧電力の料金構造を体系的に整理し、請求書の読み方・契約方式の選択・見直し判断のポイントまでを解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 低圧電力とは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧電力とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力は、契約電力が50kW未満の法人向け電力契約区分です。小規模オフィス、店舗、クリニック、飲食店、倉庫などが該当し、
            日本全国に数百万件以上の低圧法人契約が存在します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約との最大の違いは、<strong className="font-semibold text-slate-900">キュービクル（受電設備）が不要</strong>である点です。
            電力会社の低圧配電線から直接受電するため、設備投資なしに利用できます。一方、単価は高圧より割高になる傾向があり、
            使用量が一定規模を超えると高圧への切り替えが経済的に有利になる場合があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力：50kW未満</li>
            <li>受電電圧：低圧（標準的に100V/200V）</li>
            <li>キュービクル：不要（電力会社側で変圧）</li>
            <li>主な業種：小売・飲食・医療・サービス・小型倉庫など</li>
          </ul>
        </section>

        {/* 低圧電灯と低圧電力（動力）の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            低圧電灯と低圧電力（動力）の違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧契約には「低圧電灯（従量電灯）」と「低圧電力（動力）」の2種類があります。
            用途・電圧・料金体系が異なるため、自社の設備・用途に応じた区分を使用していることを確認することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    項目
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    低圧電灯（従量電灯）
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    低圧電力（動力）
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    主な用途
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    照明・コンセント・IT機器
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    エアコン・冷蔵庫・モーター・ポンプ
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    電圧
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    単相100V/200V
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    三相200V
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    料金単価
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    段階制（使うほど高い）
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    一律単価（使うほど割安感）
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    基本料金の決まり方
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    契約アンペアまたは実量制
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    契約電力（kW）×単価
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    典型的な施設
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    小規模オフィス・店舗
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    飲食店・クリニック・小型工場
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    月間使用量目安
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    500〜5,000kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    1,000〜15,000kWh
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 両方の契約を同一施設で持つケースもあります（例：電灯用と動力用で別メーターを設置）。
          </p>
        </section>

        {/* 低圧電力の料金構成 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">低圧電力の料金構成</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力（動力）の月額請求は、基本料金・電力量料金・燃料費調整額・再エネ賦課金の合計で構成されます。
            使用量5,000kWhを例に試算値を示します。
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    費目
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    算定方法
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    単価目安
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    月5,000kWhの場合
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    基本料金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    契約電力×単価
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    1,100〜1,200円/kW
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    約1.1〜3.6万円（10〜30kW）
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    電力量料金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用量×単価
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    夏季：17〜18円/kWh、その他：15〜17円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    約7.5〜9万円
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    燃料費調整額
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用量×調整単価
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ▲2〜+5円/kWh
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ▲1〜+2.5万円
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    再エネ賦課金
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用量×賦課金単価
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    3.49円/kWh（2025年度）
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    約1.7万円
                  </td>
                </tr>
                <tr className="bg-sky-50">
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                    合計目安
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ―
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ―
                  </td>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                    約9〜16万円
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 単価は大手電力会社の標準メニュー目安。燃料費調整額は市場状況によって変動します。実際の料金はご契約内容をご確認ください。
          </p>
        </section>

        {/* 主開閉器契約と負荷設備契約の違い */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            主開閉器契約と負荷設備契約の違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力（動力）では、契約電力の決め方として「主開閉器契約」と「負荷設備契約」の2方式があります。
            どちらを選ぶかによって基本料金が変わるため、実態に合った方式を選択することが重要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    項目
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    主開閉器契約
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    負荷設備契約
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    契約電力の決まり方
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ブレーカー容量で決定
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    設備容量の合計で決定
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    メリット
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    実態に近い契約が可能
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    設備増設に柔軟
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    デメリット
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ブレーカーが落ちるリスク
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    実使用量より高い契約になりやすい
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    向いている施設
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用パターンが安定している施設
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    設備が多く同時使用率が低い施設
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    見直しポイント
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    実態に対して容量が大きすぎないか
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    設備の稼働実態を反映しているか
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の契約方式と実際の使用状況にずれが生じている場合、変更申請によって基本料金を適正化できる可能性があります。
            電力会社への確認・相談を検討してください。
          </p>
        </section>

        {/* 低圧から高圧への切り替え判断（50kWの壁） */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            低圧から高圧への切り替え判断（50kWの壁）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧契約のままでいるか、高圧へ切り替えるかの判断は、年間電気代・使用量・設備投資コストのバランスで決まります。
            一般に「50kW」前後が判断の分岐点とされます。
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white p-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    判断基準
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    低圧のまま
                  </th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">
                    高圧への切り替えを検討
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    契約電力
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    30kW未満
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    40kW以上（特に50kW前後）
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    月間使用量
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    5,000kWh未満
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    10,000kWh以上
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    年間電気代
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    150万円未満
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    300万円以上
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    設備投資
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    キュービクル不要
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    キュービクル設置が必要（200〜500万円）
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    単価メリット
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ―
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    高圧の方が3〜5円/kWh安いことが多い
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">
                    回収期間
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    ―
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">
                    使用量次第で3〜5年
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 具体的な計算例 */}
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-lg font-semibold text-slate-900">
              具体例：月間8,000kWh使用の飲食店
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力30kW・月間使用量8,000kWhの飲食店で、低圧のままの場合と高圧に切り替えた場合を比較します。
            </p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">低圧のまま（現状）</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>電力量料金：8,000kWh × 17円 = 13.6万円/月</li>
                  <li>基本料金：約3万円/月</li>
                  <li>調整・賦課金：約2万円/月</li>
                  <li className="font-semibold text-slate-900">年間合計：約200〜210万円</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200 bg-sky-50 p-4">
                <p className="font-semibold text-slate-900">高圧切り替え後</p>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  <li>電力量料金：8,000kWh × 13円 = 10.4万円/月</li>
                  <li>基本料金：約2.5万円/月</li>
                  <li>調整・賦課金：約2万円/月</li>
                  <li className="font-semibold text-slate-900">年間合計：約160〜170万円</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm text-slate-700">
              <p>
                <strong className="font-semibold text-slate-900">年間差額：約40万円の節約</strong>が見込めますが、
                キュービクル設置費用（目安300万円）の回収には約7.5年かかる計算になります。
                建物の所有形態（賃貸か自己所有か）や施設の使用年数によって判断が変わります。
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上記は試算例です。実際の単価・基本料金・設備費用は電力会社・施設条件によって異なります。
          </p>
        </section>

        {/* 請求書で確認したいポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            低圧電力の請求書で確認したいポイント（5項目チェックリスト）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力の請求書を毎月確認する際、以下の5点を習慣的にチェックすると、コスト増の原因が早期に把握しやすくなります。
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">1. 契約電力と実態のずれを確認する</span>
              <p className="mt-1 text-slate-700">
                契約電力（kW）が実際のピーク使用電力と大きくかけ離れていないか確認します。
                過大な契約電力は基本料金の無駄な支出につながります。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">2. 燃料費調整額の符号と金額を確認する</span>
              <p className="mt-1 text-slate-700">
                プラス（追加請求）かマイナス（値引き）か、前月からの変化幅を把握します。
                使用量が同じでも、燃調費の変動だけで請求額が数万円変わることがあります。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">3. 前年同月比で使用量を比較する</span>
              <p className="mt-1 text-slate-700">
                季節性のある用途（エアコン、冷蔵設備など）は、前年同月との比較が有効です。
                単純な前月比では季節変動と異常値の区別がつきにくいため注意が必要です。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">4. 契約区分（電灯・動力）が用途に合っているか確認する</span>
              <p className="mt-1 text-slate-700">
                三相200V機器（エアコン・冷蔵庫など）を多く使用しているにもかかわらず低圧電灯（従量電灯）のみ契約している場合、
                動力契約の追加が料金面で有利になる可能性があります。
              </p>
            </li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <span className="font-semibold text-slate-900">5. 年間電気代が高圧切り替えの目安（300万円）を超えていないか確認する</span>
              <p className="mt-1 text-slate-700">
                年間電気代が300万円を超えるようであれば、高圧契約への切り替えの検討が経済的に合理的になる可能性があります。
                定期的に試算を行うことを推奨します。
              </p>
            </li>
          </ol>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            低圧電力の料金を正しく把握するには、契約区分（電灯・動力）、契約方式（主開閉器・負荷設備）、
            そして使用規模が高圧切り替えの経済的ラインに達していないかを定期的に確認することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>低圧電灯と低圧電力（動力）は用途・電圧・料金体系が異なる</li>
            <li>基本料金は契約電力×単価で決まり、契約方式の選択で変わる</li>
            <li>燃料費調整額と再エネ賦課金は使用量ベースで毎月変動する</li>
            <li>年間電気代300万円・月間10,000kWh超が高圧切り替え検討の目安</li>
            <li>キュービクル投資の回収期間を含めたトータルコストで判断する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の契約内容・使用実績をもとに、定期的な見直しを行うことが長期的なコスト管理につながります。
          </p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "低圧・高圧の料金制度・契約区分データ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場データ・新電力情報" },
          ]}
          publishedAt="2026-04-13"
        />

        {/* 関連リンク */}
        
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-2">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/business-electricity-bill-breakdown",
                title: "法人電気料金の請求書の見方",
                description:
                  "請求書に記載された各費目の読み方と、確認漏れを防ぐためのチェックポイントを整理しています。",
              },
              {
                href: "/high-voltage-electricity-pricing",
                title: "高圧電力の料金の見方",
                description:
                  "高圧電力の料金構成・コスト試算・見直しポイントを体系的に解説しています。",
              },
              {
                href: "/extra-high-voltage-electricity-pricing",
                title: "特別高圧電力の料金の見方",
                description:
                  "大規模施設向け特別高圧（2,000kW以上）の料金構成と管理ポイントを整理しています。",
              },
              {
                href: "/contract-demand-what-is-it",
                title: "契約電力とは",
                description:
                  "基本料金の算定に直結する契約電力の仕組みと、見直し判断の基礎を整理しています。",
              },
              {
                href: "/how-to-read-electricity-bill",
                title: "電気料金明細の読み方",
                description:
                  "電気料金の明細書を項目別に読み解く手順と、各費目の意味を解説しています。",
              },
              {
                href: "/compare",
                title: "料金メニュー比較診断",
                description:
                  "現行契約と候補プランを同じ前提で比較し、見直し余地を可視化できます。",
              },
              {
                href: "/articles/basic",
                title: "基礎から知る（カテゴリ一覧）",
                description:
                  "電気料金の仕組みをゼロから体系的に学べる記事一覧です。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description: "低圧から高圧へ切り替える際のプラン選択軸を確認できます。",
              },
              {
                href: "/electricity-price-trend-2019-2025",
                title: "法人向け電気料金は高止まりしているのか",
                description: "低圧を含む料金水準の推移をデータで確認できます。",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気料金リスクを確認する"
          description="低圧・高圧を問わず、料金上昇リスクや見直し余地はシミュレーターで把握できます。契約内容を入力して診断してください。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
