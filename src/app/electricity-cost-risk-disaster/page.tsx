import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["risk-scenarios"];


const pageTitle =
  "災害で法人・企業・自治体の電気料金・電気代はどう上がる？供給停止リスクを解説";
const pageDescription =
  "災害によって法人・企業・自治体の電気料金・電気代が上がる仕組みを解説。発電所停止、供給力低下、発生月と翌月への影響、市場連動プランと固定プランの違いを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "災害 電気料金 法人",
    "供給力低下 電気代",
    "発電所停止 電力リスク",
    "BCP 電力契約 見直し",
    "市場連動 固定 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-risk-disaster",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-risk-disaster",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "災害リスクの解説",
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

export default function ElectricityCostRiskDisasterPage() {
  return (
    <>
      <ArticleJsonLd
        headline="災害で法人・企業・自治体の電気料金・電気代はどう上がる？供給停止リスクを解説"
        description="災害によって法人・企業・自治体の電気料金・電気代が上がる仕組みを解説。発電所停止、供給力低下、発生月と翌月への影響、市場連動プランと固定プランの違いを整理します。"
        url="https://simulator.eic-jp.org/electricity-cost-risk-disaster"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "災害で法人・企業・自治体の電気料金・電気代はどう上がる？供給停止リスクを解説" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">災害リスク</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          災害で法人・企業・自治体の電気料金・電気代はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          災害は停電リスクだけでなく、供給余力の低下を通じて電気料金・電気代の上振れ要因にもなり得ます。
          法人・企業・自治体では、事業継続の観点と電力コストの観点を分けて整理することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、災害時に電気料金へ影響が出る仕組みと、契約見直しや請求確認で押さえたいポイントを解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">災害リスクとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            災害リスクは、地震、台風、豪雨などにより、発電所や送配電設備に被害が出て供給力が低下する可能性を指します。
            シミュレーターでは、発生月だけでなく翌月にも影響が及ぶ想定を確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ災害で電気料金・電気代が上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            発電所の停止や出力低下が起こると、供給力が減少し、需給バランスが悪化しやすくなります。結果として市場価格が上振れし、
            契約条件によっては請求額に影響が表れることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            災害影響は発生直後だけでなく、設備復旧や需給調整の過程で翌月にも余波が残る場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランで違いはあるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は短期的な価格変動が表れやすく、災害時の影響を月次で把握しやすい契約です。<Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            でも、将来の見積や契約更新で無関係とは言えません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単月だけでなく年間視点で確認し、契約方式ごとの違いを整理することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体が備えたいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>BCPにおける電力確保方針の確認</li>
            <li>非常用電源の運用条件と燃料確保</li>
            <li>契約の見直しと複数拠点の管理体制</li>
            <li>電気料金だけでなく事業継続面も含めた判断</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            災害対応では、コスト管理と継続運用の両立が実務上のポイントです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">災害時に請求書・見積書で確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価の変動がどの項目で出ているか</li>
            <li><Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>や<Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整額</Link>などの調整項目</li>
            <li>契約条件と更新時期</li>
            <li>上振れが表れやすい項目の傾向</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較前の整理には{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>
            も参考になります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">過去の災害と電力市場への影響実績</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            過去の大規模災害では、発電所停止や送電設備の損傷を通じてJEPX（卸電力取引所）価格が大きく上振れした事例があります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">時期</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">災害</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">電力への影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX価格影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">復旧期間</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2018年9月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">北海道胆振東部地震</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">全道ブラックアウト、苫東厚真火力停止</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">北海道エリア一時<span className="font-semibold text-slate-900">100円/kWh超</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数日〜2か月</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2019年9月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">台風15号（房総半島）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">千葉県大規模停電、送配電設備損壊</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">東京エリア<span className="font-semibold text-slate-900">+3〜8円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2週間〜1か月超</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2021年2月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">福島県沖地震（M7.3）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">火力発電所複数停止、供給力低下</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">東北・東京エリア<span className="font-semibold text-slate-900">+5〜15円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数週間</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022年3月</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">福島県沖地震（M7.4）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">東北・東京エリア需給逼迫警報発令</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">一時<span className="font-semibold text-slate-900">200円/kWh超</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">数日〜数週間</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">
            ※ JEPX価格はエリアプライスの一時的なピーク値を含みます。実際の請求への反映は契約条件により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">災害時の電気料金影響シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランの場合、災害によるJEPX上昇がそのまま月額に反映されます。以下は、JEPXが平均<span className="font-semibold text-slate-900">+5円/kWh</span>上昇した場合の月額増加試算です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約区分</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額増加（+5円/kWh）</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額増加（+15円/kWh）</th>
                  <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額増加（+50円/kWh）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">低圧（小規模店舗）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">3,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+1.5万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+4.5万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+15万円</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">高圧（工場・商業施設）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">50,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+25万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+75万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+250万円</span></td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">特別高圧（大規模工場）</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">500,000kWh</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+250万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+750万円</span></td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+2,500万円</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランの場合、災害月の請求額には直接反映されませんが、次回の契約更新時に単価見直しが行われる可能性があります。
            2022年の福島沖地震後には、複数の新電力が契約条件の見直しや撤退を行った事例があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">災害リスクをシミュレーターでどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            発生月の影響と翌月への波及を分けて確認し、他リスクとの重なりも確認することが有効です。最後に{" "}
            <Link href="/worst-case-electricity-cost-risk" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              ワーストシナリオ
            </Link>
            と比較することで、上振れ幅の上限を検討しやすくなります。
          </p>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="electricity-cost-risk-disaster" terms={["燃料費調整額", "市場価格調整額", "JEPX", "最終保障供給", "市場連動プラン", "固定プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="災害リスクの理解を、契約見直しと比較判断につなげるための関連ページです。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "電力契約を見直すタイミング",
              description: "更新前に確認したい実務手順を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較で見落としやすい項目を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "短期変動の影響が出やすい契約の特徴を把握できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "料金安定を重視する契約の考え方を整理できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "災害要因以外も含めた全体像を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="災害影響を含めて比較・試算する"
          description="災害リスクの見方を押さえた後は、比較ページとシミュレーションで契約メニューごとの影響差を確認し、見直し判断に役立てることができます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
