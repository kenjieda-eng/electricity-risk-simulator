import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-increase"];


const pageTitle = "再エネ賦課金の減免制度｜電気多消費事業者向けの要件と申請の流れ";
const pageDescription =
  "電気多消費事業者向けの再エネ賦課金減免制度について、対象要件（売上高比・原単位）、減免率、認定〜還付までの流れ、年度別認定件数の推移を解説します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-surcharge-reduction-system";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 減免",
    "電気多消費事業者",
    "再エネ賦課金 減免制度",
    "減免 対象",
    "認定申請 電気料金",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
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

export default function RenewableEnergySurchargeReductionSystemPage() {
  return (
    <>
      <ArticleJsonLd
        headline="再エネ賦課金の減免制度｜電気多消費事業者向けの要件と申請の流れ"
        description="電気多消費事業者向けの再エネ賦課金減免制度について、対象要件（売上高比・原単位）、減免率、認定〜還付までの流れ、年度別認定件数の推移を解説します。"
        url="https://simulator.eic-jp.org/renewable-energy-surcharge-reduction-system"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ賦課金の減免制度" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-increase" className="underline-offset-2 hover:underline">料金が上がる理由を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネ賦課金の減免制度</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">再エネ賦課金の減免制度</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金は原則として全需要家が負担しますが、一定の要件を満たす電気多消費事業者については、
          賦課金の最大 80% が減免される制度があります（FIT法第17条）。鉄鋼、化学、紙パルプなど、
          電気コストが事業の国際競争力に直結する業種を想定した制度です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度の概要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            正式名称は「再生可能エネルギー電気の利用の促進に関する特別措置法第17条に基づく認定制度」。
            経済産業大臣に申請して認定を受けた事業所について、その事業所で使用した電気にかかる賦課金の
            80% が減免されます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>認定単位は「事業所」。同一法人でも複数事業所で個別に申請する必要があります。</li>
            <li>認定期間は 1 年度ごと。翌年度も減免を受けるには毎年再申請が必要です。</li>
            <li>事後に電力会社から還付される形で適用されます。</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">対象要件（2つの基準）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            減免を受けるには次の2つの基準を両方とも満たす必要があります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">① 原単位要件</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                年間電気使用量 ÷ 付加価値額が業種平均の1.2倍以上（電気使用原単位が業種中央値より悪い＝たくさん電気を使う）。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">② 売上高比要件</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                電気料金 ÷ 売上高が 14% 以上（または電気料金 ÷ 付加価値額が一定比率以上の例外規定あり）。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            要件の数字は法改正で見直されることがあります。申請時は資源エネルギー庁の最新公表内容を確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">認定を受けやすい業種</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去の認定実績を見ると、次のような業種が中心です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">業種</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">該当しやすい理由</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">鉄鋼（電炉・アーク炉）</td>
                  <td className="border border-slate-200 px-3 py-2">溶解工程で大量の電力を使用。売上高比が14%を超えやすい。</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">化学（ソーダ工業、電解精錬）</td>
                  <td className="border border-slate-200 px-3 py-2">電解プロセスの電力消費が膨大。</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">非鉄金属（アルミ精錬など）</td>
                  <td className="border border-slate-200 px-3 py-2">世界的にも電力多消費の代表業種。</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">紙パルプ</td>
                  <td className="border border-slate-200 px-3 py-2">抄紙機・乾燥工程の消費が大きい。</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">窯業・セメント</td>
                  <td className="border border-slate-200 px-3 py-2">粉砕・焼成工程で高負荷。</td>
                </tr>
                <tr className="border-t border-slate-100">
                  <td className="border border-slate-200 px-3 py-2 font-semibold">データセンター（一部）</td>
                  <td className="border border-slate-200 px-3 py-2">要件を満たす場合あり。近年注目度が上昇。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請から還付までの流れ</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>事前準備（毎年11〜12月）</strong>：前年度の電気使用量・売上高・付加価値額・電気料金を集計。要件適合を確認。
            </li>
            <li>
              <strong>申請書提出（毎年1〜2月）</strong>：資源エネルギー庁の電子申請システムで書類提出。事業所単位で個別に。
            </li>
            <li>
              <strong>審査・認定（3月）</strong>：経済産業大臣が認定。認定通知書が発行される。
            </li>
            <li>
              <strong>適用開始（5月検針分〜翌年4月検針分）</strong>：電力会社に認定通知書を提出し、請求から減免適用。
            </li>
            <li>
              <strong>省エネ取組み報告</strong>：認定事業者は翌年度の省エネ取組実績を報告する義務があります。
            </li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">認定実績の傾向</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            資源エネルギー庁の公表資料によると、認定事業者は全国で数百事業所規模で推移しており、
            その 7〜8 割が製造業、特に鉄鋼・化学・非鉄金属・紙パルプの 4 業種で占められます。
            減免対象電力量は全国の電力消費量の 10% 前後です。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm leading-7 text-slate-800">
              <strong>注意：</strong>近年の制度見直しでは、減免率の段階化、省エネ取組みの要件厳格化などが議論されています。
              制度利用を検討する場合は、最新の経産省公表資料で要件を必ず確認してください。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">減免が使えない場合の代替策</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自家消費型太陽光・蓄電池の導入で、系統から買う kWh を物理的に減らす</li>
            <li><Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド</Link>制御で<Link href="/basic-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">基本料金</Link>と<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>を同時に抑える</li>
            <li>契約メニュー見直しで本体単価を下げ、トータルコストで相殺する</li>
            <li>オフピーク運転・夜間稼働シフトで市場連動リスクを軽減する</li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="renewable-energy-surcharge-reduction-system" terms={["再エネ賦課金", "電力量料金", "基本料金", "燃料費調整額", "容量拠出金"]} />
        </div>

        <RelatedLinks
          heading="関連する解説ページ"
          links={[
            { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "制度の基本。" },
            {
              href: "/renewable-energy-surcharge-history",
              title: "再エネ賦課金の推移と変動要因",
              description: "2012〜2026年度の単価変化を分析。",
            },
            {
              href: "/renewable-energy-surcharge-business-cost",
              title: "再エネ賦課金の法人別月額試算",
              description: "業態・規模別の負担額比較。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光の費用対効果",
              description: "減免の代替策として検討。",
            },
            { href: "/electricity-price-trend-2019-2025", title: "法人向け電気料金は高止まりしているのか", description: "賦課金を含む長期の料金水準をデータで確認できます。" },
          ]}
        />

        <ContentCta
          heading="減免対象外でも料金見直しで負担軽減"
          description="減免対象でない事業者でも、契約見直しで本体単価を下げることで電気料金全体の負担を軽減できます。"
          links={[
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="renewable-energy-surcharge-reduction-system" />
      </div>
    </main>
    </>
  );
}
