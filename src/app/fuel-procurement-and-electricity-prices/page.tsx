import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "燃料調達と電力調達はどうつながっているのか｜LNG・石炭・原油価格の影響";
const pageDescription =
  "電気の仕入れを理解するには、その前段にある燃料調達も重要です。LNG、石炭、原油などの価格や調達環境が、火力発電コストやJEPX価格にどう影響しうるのかを整理します。";
const pageUrl = "https://simulator.eic-jp.org/fuel-procurement-and-electricity-prices";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "JEPX"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/power-procurement", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/power-procurement"],
  },
};

const fuelRows = [
  {
    fuel: "LNG",
    usage: "調整力を持つ火力発電で広く利用",
    factors: "世界需給、スポット調達環境、為替、輸送制約",
    impact: "火力の限界費用や市場価格に反映されやすい",
  },
  {
    fuel: "石炭",
    usage: "ベース寄りの火力電源で利用されることが多い",
    factors: "国際価格、海上輸送、為替、政策動向",
    impact: "発電コストの基礎部分に効きやすいが、時間帯での効き方はLNGと異なる",
  },
  {
    fuel: "原油",
    usage: "石油火力や一部契約・指数連動の参照指標",
    factors: "地政学、中東情勢、世界景気、為替",
    impact: "直接の発電燃料だけでなく、燃料費調整や市場心理に波及することがある",
  },
];

export default function FuelProcurementAndElectricityPricesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="燃料調達と電力調達はどうつながっているのか｜LNG・石炭・原油価格の影響"
        description="電気の仕入れを理解するには、その前段にある燃料調達も重要です。LNG、石炭、原油などの価格や調達環境が、火力発電コストやJEPX価格にどう影響しうるのかを整理します。"
        url="https://simulator.eic-jp.org/fuel-procurement-and-electricity-prices"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "燃料調達と電力調達はどうつながっているのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          燃料調達と電力調達はどうつながっているのか｜LNG・石炭・原油価格の影響
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気は市場で売買されるため、電力会社の仕入れも電気そのものの価格だけを見ればよいように見えます。ただ、日本の電力供給では
          火力発電の比重が依然として大きく、燃料調達の状況が電力調達に強く影響する場面があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          LNG、石炭、原油は、同じように扱える燃料ではありません。価格の動き方も、調達先の地域性も、用途も異なります。それでも、
          火力発電のコストや稼働条件を通じて、結果としてJEPX価格や小売の調達環境に影響が及ぶことがあります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力調達の前にある燃料調達</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気を仕入れるというとJEPXや相対契約が先に見えますが、火力電源から見ると、その前段には燃料の調達があります。
            発電所が燃料をどの条件で確保できるかは、発電コストだけでなく、稼働できる量やタイミングにも関わります。
          </p>
          <InfoBox title="切り離して見にくい理由">
            日本では需給調整を火力発電が支える場面が多いため、燃料価格の上昇や燃料不足は、そのまま電力市場の緊張感につながりやすくなります。
          </InfoBox>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料ごとの特徴整理</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">燃料</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な用途</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">価格変動要因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">電力調達への影響の出方</th>
              </tr>
            </thead>
            <tbody>
              {fuelRows.map((row) => (
                <tr key={row.fuel} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.fuel}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.usage}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.factors}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料価格が上がると何が起こるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            火力発電の燃料コストが上がると、発電単価が上がり、JEPX価格や小売の調達条件に上昇圧力がかかります。特にLNG火力の比重が高い時間帯や、
            需給がタイトな局面では、燃料高の影響が見えやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、燃料価格上昇とJEPX価格上昇が一対一で連動するわけではありません。需要水準、再エネ出力、設備稼働状況、送電制約が重なることで、
            市場価格への反映のされ方は変わります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">価格だけでなく調達しやすさも重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、燃料が高いかどうかだけでなく、必要なタイミングで確保しやすいかも重要です。LNG在庫が低い、輸送が滞る、
            特定地域の供給不安が高まるといった状況では、価格以上に「使える電源が減る」ことが問題になることがあります。
          </p>
          
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4">
            <FlowDiagram
              heading="燃料高・燃料制約が電力調達へ波及する流れ"
              steps={[
                {
                  title: "1. 燃料市場の変動",
                  description: "LNG、石炭、原油の価格や調達環境が変わる",
                },
                {
                  title: "2. 火力発電コスト・稼働条件の変化",
                  description: "燃料単価や在庫条件が、使える火力の量と費用に影響する",
                },
                {
                  title: "3. JEPXや小売調達環境の変化",
                  description: "市場価格、見積条件、ヘッジ需要に波及する",
                },
                {
                  title: "4. 法人向け料金への反映",
                  description: "市場連動、固定更新、燃調などの形で見え方が変わる",
                },
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ウクライナ危機以降に何が起きたか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2022年以降は、欧州のエネルギー需給逼迫や地政学リスクの高まりを受けて、LNGを中心に燃料市場が大きく変動しました。
            日本でも、<Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の上昇、市場価格の高騰、新電力の調達環境悪化といった形で影響が出ました。
          </p>
          <InfoBox title="ここでの読み方">
            この局面は「燃料価格が上がったから電気料金も同じだけ上がった」と単純化するより、燃料高と需給逼迫が同時に起きると、
            調達コストの上振れ幅が大きくなりやすい事例として捉える方が実務的です。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">参考にした公開情報</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>資源エネルギー庁「燃料費調整制度について」</li>
            <li>財務省貿易統計のLNG・原油・石炭に関する公開統計</li>
            <li>JOGMECの天然ガス・LNG市場情報</li>
            <li>JEPXのスポット市場公開データ</li>
          </ul>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            燃料価格とJEPX価格の関係は相関の参考であり、単純な因果として断定していません。制度名称は2026年4月2日時点の公開情報ベースで確認しています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="燃料の影響を押さえたら、次は再エネ調達や非化石証書を見ると、電源構成の違いが調達構造へどう入るかが整理しやすくなります。"
          links={[
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか｜JEPX価格の決まり方",
              description: "燃料価格が市場価格へどう作用するかを前提から確認できます。",
            },
            {
              href: "/renewable-power-procurement",
              title: "再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方",
              description: "火力以外の電源をどう調達構造に組み込むかを整理できます。",
            },
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "LNGに絞って、料金への波及経路を補足できます。",
            },
          ]}
        />

        <ContentCta
          heading="次は再エネ調達へ"
          description="燃料起点の調達構造が見えたら、次は再エネ電気をどの制度・契約で仕入れているかを見ると、調達手段の幅がつかみやすくなります。"
          links={[
            { href: "/renewable-power-procurement", label: "再エネ調達の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="fuel-procurement-and-electricity-prices"
          extraLinks={[{ href: "/how-electricity-prices-are-determined", title: "JEPX価格の決まり方に戻る" }]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="fuel-procurement-and-electricity-prices" />
      </div>
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
