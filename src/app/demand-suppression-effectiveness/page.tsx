import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { DEMAND_SEASON_HOUR, DEMAND_WEEKDAY_WEEKEND } from "../../data/demandData";
import { CDD_TREND, HDD_TREND } from "../../data/weatherData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["energy-equipment"];


const pageTitle =
  "デマンド抑制はどこまで効果があるか｜基本料金削減の可能性と限界";
const pageDescription =
  "法人の電気料金における「デマンド（最大需要電力）」の抑制が、基本料金削減にどこまで効果があるかを解説します。デマンド料金制の仕組み、抑制の実効性と限界、および蓄電池・省エネとの組み合わせについて整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンド抑制 効果 法人",
    "最大需要電力 基本料金 削減",
    "デマンド管理 電気料金",
    "法人 基本料金 下げ方",
    "デマンドコントロール 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/demand-suppression-effectiveness",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-suppression-effectiveness",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/energy-equipment", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-equipment"],
  },
};

const demandMeasurementMechanism = [
  {
    step: "1",
    heading: "30分ごとの平均使用電力を計測",
    content:
      "電力会社のスマートメーターは、30分を1コマとして、そのコマ内の平均電力（kW）を記録します。コマ内の最大瞬時値ではなく平均値であることがポイントです。",
  },
  {
    step: "2",
    heading: "月間最大値がデマンドとなる",
    content:
      "1か月（通常30〜31日）の全コマのうち、最大の30分平均電力値がその月の「最大需要電力（デマンド）」として記録されます。このデマンドが基本料金の算定基準になります。",
  },
  {
    step: "3",
    heading: "基本料金はデマンドに比例",
    content:
      "高圧・特別高圧契約の基本料金は「デマンド（kW）×基本料金単価（円/kW）」で算定されます。デマンドを10kW下げれば、毎月その分の基本料金が削減されます。",
  },
];

const suppressionMethods = [
  {
    method: "デマンドコントローラーの設置",
    detail:
      "デマンドが設定上限に近づくと、設定した設備（空調・照明・電熱等）の稼働を一時的に制御するシステムです。30分コマ内の超過を自動的に防ぎます。比較的低コストで導入できる対策です。",
    effectiveness: "高い（ピーク時の自動制御が可能）",
  },
  {
    method: "蓄電池によるピーク補完",
    detail:
      "ピーク発生時に蓄電池から放電して系統からの購入電力を減らすことで、30分平均値を引き下げます。機器の停止を伴わずにデマンドを抑制できる点がメリットです。",
    effectiveness: "高い（業務への影響なしにピーク抑制）",
  },
  {
    method: "稼働スケジュールの分散",
    detail:
      "複数設備の起動タイミングを分散させることで、同時稼働によるピークを回避します。生産計画・シフトを工夫することで実現できますが、業務運用の変更が必要な場合があります。",
    effectiveness: "中程度（業務制約との兼ね合いが必要）",
  },
  {
    method: "自家消費太陽光との組み合わせ",
    detail:
      "昼間のデマンドピーク時間帯と太陽光発電のピーク時間が重なる場合、自家消費分だけ系統からの電力を減らしデマンドを抑制できます。",
    effectiveness: "中程度（晴天昼間限定）",
  },
];

const limitations = [
  {
    limitation: "月に1回のピーク記録がすべて",
    detail:
      "デマンドは月の最大値が記録されます。月に29日は適切に抑制できても、1日だけピークが発生すると、その月のデマンドはそのピーク値になります。抑制は「確実性」が重要です。",
  },
  {
    limitation: "契約電力の変更には時間がかかる",
    detail:
      "デマンドを継続して低く抑えると、より低い契約電力への変更申請が可能になります。ただし、電力会社との契約変更には申請・確認のプロセスが必要で、即座には変更できません。",
  },
  {
    limitation: "低圧契約ではデマンド料金が適用されない",
    detail:
      "低圧（主に小規模な事業所）では定額の基本料金制が多く、デマンドに比例した基本料金制ではないため、デマンド抑制による基本料金削減効果が出ない場合があります。",
  },
  {
    limitation: "基本料金比率が低い場合は効果限定的",
    detail:
      "電気料金全体に占める基本料金の割合が低い場合（例：電力量料金が大部分を占める場合）は、デマンド削減の全体コストへの影響が小さくなります。",
  },
];

export default function DemandSuppressionEffectivenessPage() {
  return (
    <>
      <ArticleJsonLd
        headline="デマンド抑制はどこまで効果があるか｜基本料金削減の可能性と限界"
        description="法人の電気料金における「デマンド（最大需要電力）」の抑制が、基本料金削減にどこまで効果があるかを解説します。デマンド料金制の仕組み、抑制の実効性と限界、および蓄電池・省エネとの組み合わせについて整理します。"
        url="https://simulator.eic-jp.org/demand-suppression-effectiveness"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "デマンド抑制はどこまで効果があるか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">デマンド抑制はどこまで効果があるか</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          デマンド抑制はどこまで効果があるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を下げる方法として「デマンド（最大需要電力）を下げる」ことが有効だと言われます。しかし、実際にどの程度の効果があり、どのような限界があるのかを理解しておくことが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          デマンド料金の仕組み、抑制の手段と実効性、そして限界を正しく把握することで、基本料金削減対策に取り組む際の判断精度が高まります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>デマンドの測定方法と基本料金算定の仕組み</li>
            <li>デマンド抑制の主な手段と実効性</li>
            <li>デマンド抑制の限界と注意点</li>
            <li>他の対策との組み合わせによる効果の最大化</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンドと基本料金の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド（最大需要電力）が基本料金に影響する仕組みを理解することが、抑制対策の出発点になります。
          </p>
          <div className="mt-4 space-y-3">
            {demandMeasurementMechanism.map((item) => (
              <div
                key={item.step}
                className="flex gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.heading}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-slate-900">計算例</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              デマンド100kW・基本料金単価1,500円/kWの場合、月の基本料金は150,000円。デマンドを90kWに抑制できれば135,000円となり、月額15,000円・年間180,000円の削減になります。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制の主な手段と実効性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドを下げるための主な方法と、それぞれの実効性を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {suppressionMethods.map((item) => (
              <div
                key={item.method}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">{item.method}</p>
                  <span className="shrink-0 rounded-full bg-sky-50 px-2 py-0.5 text-xs text-sky-700">
                    効果: {item.effectiveness}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制の限界と注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制対策を講じる前に、以下の限界と注意点を把握しておくことが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {limitations.map((item) => (
              <div
                key={item.limitation}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.limitation}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制による基本料金削減の具体例
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金単価1,650円/kWを前提に、削減幅ごとの削減効果を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">削減幅(kW)</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">基本料金単価</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">月額削減</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">年間削減</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">30 kW</td><td className="border border-slate-200 p-3 text-slate-700">1,650円</td><td className="border border-slate-200 p-3 text-slate-700">49,500円</td><td className="border border-slate-200 p-3 text-slate-700">594,000円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">50 kW</td><td className="border border-slate-200 p-3 text-slate-700">1,650円</td><td className="border border-slate-200 p-3 text-slate-700">82,500円</td><td className="border border-slate-200 p-3 text-slate-700">990,000円</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">100 kW</td><td className="border border-slate-200 p-3 text-slate-700">1,650円</td><td className="border border-slate-200 p-3 text-slate-700">165,000円</td><td className="border border-slate-200 p-3 text-slate-700">1,980,000円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">200 kW</td><td className="border border-slate-200 p-3 text-slate-700">1,650円</td><td className="border border-slate-200 p-3 text-slate-700">330,000円</td><td className="border border-slate-200 p-3 text-slate-700">3,960,000円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド監視装置の費用対効果
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            導入方法ごとの費用と想定削減効果・回収期間の目安を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">導入方法</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">初期費用</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">月額費用</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">想定削減効果</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">回収期間</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">クラウド型監視のみ</td><td className="border border-slate-200 p-3 text-slate-700">10〜30万円</td><td className="border border-slate-200 p-3 text-slate-700">3,000〜5,000円</td><td className="border border-slate-200 p-3 text-slate-700">10〜20kW削減</td><td className="border border-slate-200 p-3 text-slate-700">6〜12ヶ月</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">監視＋自動制御</td><td className="border border-slate-200 p-3 text-slate-700">50〜150万円</td><td className="border border-slate-200 p-3 text-slate-700">5,000〜10,000円</td><td className="border border-slate-200 p-3 text-slate-700">30〜80kW削減</td><td className="border border-slate-200 p-3 text-slate-700">3〜12ヶ月</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">BEMS連携型</td><td className="border border-slate-200 p-3 text-slate-700">200〜500万円</td><td className="border border-slate-200 p-3 text-slate-700">10,000〜30,000円</td><td className="border border-slate-200 p-3 text-slate-700">50〜150kW削減</td><td className="border border-slate-200 p-3 text-slate-700">12〜24ヶ月</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果を最大化するための組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制単独では限界がある場合、他の対策と組み合わせることで基本料金削減と電力量料金削減を両立できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンドコントローラー＋蓄電池</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                デマンドコントローラーで制御対象と閾値を設定し、ピーク時に蓄電池から補完することで、業務停止なしに安定したデマンド抑制が可能になります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド抑制＋省エネ投資</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                高効率空調・LED照明・インバーター化などの省エネ設備投資により設備単体の消費電力を下げることで、ピーク発生時のデマンドも低下させる効果があります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド抑制＋契約電力の見直し</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                デマンドを継続して低く抑えた実績をもとに、電力会社に契約電力の引き下げを申請します。契約電力が変わると基本料金の計算基準が変わるため、さらなる削減につながります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光＋デマンド抑制</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                昼間のデマンドピーク時間帯に自家消費太陽光が発電している場合、系統購入が減りデマンドが自然に抑制されます。晴天昼間のピーク抑制に有効です。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池による具体的なデマンド抑制の仕組みは{" "}
            <Link
              href="/battery-electricity-cost-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              蓄電池は電気料金対策としてどう効くか
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド抑制が特に有効な法人の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制による基本料金削減が特に有効な法人の特徴を整理します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>
              <span className="font-semibold">高圧・特別高圧契約の法人：</span>
              デマンド料金制が適用されるため、デマンド削減が直接基本料金削減につながります。
            </li>
            <li>
              <span className="font-semibold">デマンドのピークが特定の時間帯に集中している：</span>
              昼食後の空調再稼働・生産ライン一斉起動など、ピークが予測・特定できる場合は抑制対策が立てやすくなります。
            </li>
            <li>
              <span className="font-semibold">現在の契約電力に対してデマンドが低い月が多い：</span>
              毎月のデマンドが契約電力を大幅に下回っている場合は、契約電力の見直しで基本料金削減の余地があります。
            </li>
            <li>
              <span className="font-semibold">基本料金が電気料金全体の大きな割合を占める：</span>
              基本料金比率が高いほど、デマンド削減の全体コスト削減への寄与率が高まります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制は高圧・特別高圧契約の法人にとって有効な基本料金削減手段ですが、月に1回でもピークが発生するとその月のデマンドが更新される仕組みのため、確実な抑制が重要です。デマンドコントローラー・蓄電池・稼働スケジュール分散などの手段を組み合わせ、継続的にデマンドを管理することで、基本料金の長期的な削減効果が期待できます。ただし、低圧契約や基本料金比率が低い場合は効果が限定的なため、自社の料金構造を確認した上で優先順位を判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            実需要データで見る最適な抑制タイミング
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            全国実需要データ（OCCTO、FY2016〜2023）から季節別・時間帯別のピークを確認し、抑制対象とすべき時間帯を特定します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">時間帯</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">夏（MW）</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">冬（MW）</th>
                  <th className="border border-slate-200 p-3 text-right font-semibold text-slate-900">差（MW）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {DEMAND_SEASON_HOUR.filter((d) => d.hour >= 12 && d.hour <= 20).map((d, i) => (
                  <tr key={d.hour} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 p-3 font-medium text-slate-800">{d.hour}時</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{d.summer.toLocaleString()}</td>
                    <td className="border border-slate-200 p-3 text-right text-slate-700">{d.winter.toLocaleString()}</td>
                    <td className="border border-slate-200 p-3 text-right font-semibold text-sky-700">
                      {(d.summer - d.winter > 0 ? "+" : "") + (d.summer - d.winter).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-900">夏の抑制ターゲット: 13〜15時（冷房ピーク）</p>
              <p className="mt-1 text-sm leading-6 text-amber-800">
                夏のピークは14時台（123,372MW）に到達します。空調の設定温度調整、ブラインド制御が有効な対策です。
              </p>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-900">冬の抑制ターゲット: 17〜19時（暖房+照明ピーク）</p>
              <p className="mt-1 text-sm leading-6 text-sky-800">
                冬のピークは18時台（123,157MW）に到達します。照明の段階消灯、空調の予熱制御が有効な対策です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">平日vs休日: デマンド制御は平日に集中投資</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                平日の平均需要（{DEMAND_WEEKDAY_WEEKEND.weekdayAvgMW.toLocaleString()}MW）は休日（{DEMAND_WEEKDAY_WEEKEND.weekendAvgMW.toLocaleString()}MW）より
                +{DEMAND_WEEKDAY_WEEKEND.diffMW.toLocaleString()}MW高くなっています。
                デマンドピークは平日に集中しやすいため、平日の抑制対策に優先的に投資すべきです。
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※出典: 電力広域的運営推進機関（OCCTO）公表データ（FY2016〜2023）を集計。全国9エリア合計値。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            温暖化トレンドとデマンド抑制の優先度変化
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            冷房需要（CDD）は全都市で+24〜40%増加する一方、暖房需要（HDD）は-10〜19%減少。この構造的変化は、デマンド抑制の夏季重視へのシフトを意味します。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-rose-200 bg-rose-50 p-4">
              <p className="text-sm font-semibold text-rose-900">CDD増加（冷房需要拡大）</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-rose-100">
                      <th className="border border-rose-200 p-2 text-left font-semibold text-rose-900">都市</th>
                      <th className="border border-rose-200 p-2 text-right font-semibold text-rose-900">1995〜99年</th>
                      <th className="border border-rose-200 p-2 text-right font-semibold text-rose-900">2020〜24年</th>
                      <th className="border border-rose-200 p-2 text-right font-semibold text-rose-900">増加率</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-100">
                    {CDD_TREND.map((row) => (
                      <tr key={row.cityJa} className="bg-white">
                        <td className="border border-rose-100 p-2 text-slate-800">{row.cityJa}</td>
                        <td className="border border-rose-100 p-2 text-right text-slate-700">{row.cdd1995_99}</td>
                        <td className="border border-rose-100 p-2 text-right text-slate-700">{row.cdd2020_24}</td>
                        <td className="border border-rose-100 p-2 text-right font-semibold text-rose-700">+{row.changePercent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-sm font-semibold text-sky-900">HDD減少（暖房需要縮小）</p>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-sky-100">
                      <th className="border border-sky-200 p-2 text-left font-semibold text-sky-900">都市</th>
                      <th className="border border-sky-200 p-2 text-right font-semibold text-sky-900">1995〜99年</th>
                      <th className="border border-sky-200 p-2 text-right font-semibold text-sky-900">2020〜24年</th>
                      <th className="border border-sky-200 p-2 text-right font-semibold text-sky-900">変化率</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-100">
                    {HDD_TREND.map((row) => (
                      <tr key={row.cityJa} className="bg-white">
                        <td className="border border-sky-100 p-2 text-slate-800">{row.cityJa}</td>
                        <td className="border border-sky-100 p-2 text-right text-slate-700">{row.hdd1995_99}</td>
                        <td className="border border-sky-100 p-2 text-right text-slate-700">{row.hdd2020_24}</td>
                        <td className="border border-sky-100 p-2 text-right font-semibold text-sky-700">{row.changePercent}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-900">冬のデマンド管理も引き続き重要</p>
            <p className="mt-2 text-sm leading-6 text-amber-800">
              ただし冬の18時台ピークは依然として夏の14時台に匹敵する水準（約12.3万MW）であり、冬のデマンド管理を軽視すべきではありません。
            </p>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※CDD（冷房度日）: 基準温度22℃。HDD（暖房度日）: 基準温度14℃。出典: 気象庁過去の気象データ（1995〜2024年）を集計。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "電気料金対策とBCPの両面から蓄電池検討の動機を整理。",
            },
            {
              href: "/demand-response-cost-benefit",
              title: "DRは電気料金対策としてどう考えるか",
              description: "需要応答への参加とデマンド管理の組み合わせ。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "昼間のデマンドピーク抑制と太陽光の組み合わせ。",
            },
            {
              href: "/factory-battery-considerations",
              title: "工場で蓄電池を検討するときの着眼点",
              description: "生産ラインとデマンド管理を両立する工場特有の検討。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人電気料金の明細の見方",
              description: "基本料金とデマンドの関係を請求書で確認する方法。",
            },
          ]}
        />

        <ContentCta
          heading="基本料金の削減余地を確認する"
          description="現在の契約電力とデマンドの状況をもとに、基本料金削減の可能性をシミュレーションできます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
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
