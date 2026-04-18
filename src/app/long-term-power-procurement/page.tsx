import type { Metadata } from "next";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "長期契約とは何か｜安定調達のために期間を長く取る考え方";
const pageDescription =
  "電力会社は短期市場だけでなく、長期契約で数量や価格の安定を図ることがあります。長期契約の役割、短期市場との違い、価格安定と柔軟性のトレードオフを整理します。";
const pageUrl = "https://simulator.eic-jp.org/long-term-power-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代"],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const comparisonRows = [
  {
    method: "短期調達",
    period: "前日〜当日中心",
    price: "相場をその時点で反映しやすい",
    flexibility: "高い",
    role: "不足分や見込み差の調整",
  },
  {
    method: "相対契約",
    period: "数か月〜数年",
    price: "個別条件で設定",
    flexibility: "中程度",
    role: "市場依存を下げつつ条件を持つ",
  },
  {
    method: "長期契約",
    period: "複数年中心",
    price: "将来の条件を中長期で見通しやすくする",
    flexibility: "低め",
    role: "基礎需要の安定調達",
  },
  {
    method: "先物",
    period: "将来受渡月・季節・年度",
    price: "将来価格のヘッジに使う",
    flexibility: "約定後は一定",
    role: "価格急変への備え",
  },
];

export default function LongTermPowerProcurementPage() {
  return (
    <>
      <ArticleJsonLd
        headline="長期契約とは何か｜安定調達のために期間を長く取る考え方"
        description="電力会社は短期市場だけでなく、長期契約で数量や価格の安定を図ることがあります。長期契約の役割、短期市場との違い、価格安定と柔軟性のトレードオフを整理します。"
        url="https://simulator.eic-jp.org/long-term-power-procurement"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "長期契約とは何か" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          長期契約とは何か｜安定調達のために期間を長く取る考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社の仕入れを市場調達だけで見ていると、「必要になったときに買えばよい」と考えがちです。ただ、実際の調達では、
          先の期間まで見据えて数量や価格の条件を押さえておく発想が重要になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          長期契約は、その代表的な考え方です。将来の仕入れ条件をある程度見通せるようにしておくことで、数量確保や価格安定に役立つ一方、
          市場が下がったときの追随のしにくさなど、別の論点も出てきます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">この記事で分かること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>長期契約が、単に「長く契約する」こと以上に、安定調達の手段であること</li>
            <li>短期市場、相対契約、先物と比べたときの役割の違い</li>
            <li>価格安定と柔軟性が両立しにくい理由</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長期契約とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期契約は、将来の一定期間にわたって、数量や価格条件をあらかじめ持っておく調達の考え方です。契約内容は案件ごとに多様ですが、
            実務では「市場だけでは持ちにくい安定性を、期間で確保する手段」と整理すると理解しやすくなります。
          </p>
          <InfoBox title="注意して見たい点">
            長期契約は「安い契約」と同義ではありません。価格を下げるためというより、価格と数量の不確実性を抑えるために使う面があります。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ期間を長く取って調達するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社は、販売先の需要をおおまかに見通しながら、基礎需要の一部をあらかじめ押さえる必要があります。長期契約を入れると、
            将来の仕入れ条件が読みやすくなり、料金設計やリスク管理の前提を置きやすくなります。
          </p>
          
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-4 grid gap-4 lg:grid-cols-3">
            <InfoBox title="数量確保">
              将来必要になる基礎量を、完全ではなくても先に押さえやすくなります。
            </InfoBox>
            <InfoBox title="価格安定">
              短期の市場高騰に対して、すべてが同時に跳ねる構造を避けやすくなります。
            </InfoBox>
            <InfoBox title="事業計画">
              小売商品の価格設計や予算計画の前提を置きやすくなります。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">短期市場だけでは安定しにくい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            短期市場は柔軟性が高く、過不足調整には欠かせませんが、需給逼迫時には価格が急変します。もし基礎需要まで短期市場で賄うと、
            必要量を確保できてもコストの振れが大きくなりやすく、料金設計の安定性を持ちにくくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このため、実務では「ベースは長めの契約で持ち、不足や変動は市場で調整する」という役割分担が現実的です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">短期調達・相対契約・長期契約・先物の比較表</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">調達手段</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">期間感</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">価格の持ち方</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">柔軟性</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な役割</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.method} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.method}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.period}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.price}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.flexibility}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            一般的な比較です。実務では契約条項や商品設計によって位置づけが重なることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">長期契約のメリットと注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            長期契約のメリットは、価格や数量の前提を一定期間持てることです。特に市場急変時には、ベース需要の一部を既に押さえていることが
            コスト急伸の緩和に役立つ場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方で、相場が下がった局面では相対的に割高に見えることがありますし、需要構造が変わったときも機動的な組み替えはしにくくなります。
            つまり、長期契約は「相場に勝つ」ためではなく、「振れを抑える」ための色合いが強い手段です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">長期契約はどんな局面で効いてくるのか</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>需給逼迫で短期市場価格が急変した局面</li>
            <li>販売先に一定のベース需要があり、数量見通しを立てやすい局面</li>
            <li>価格水準そのものより、予見性や社内説明のしやすさを重視する局面</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="相対契約と長期契約の違いを押さえたら、次は将来価格を固定する先物の考え方へ進むと整理しやすくなります。"
          links={[
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "長期契約の前提になる個別契約の考え方を確認できます。",
            },
            {
              href: "/power-futures",
              title: "先物取引とは何か｜将来の価格を先に固定する仕組み",
              description: "期間で安定性を持つ方法と、価格ヘッジの方法を比較できます。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "長期契約がポートフォリオの中でどの役割を持つかを整理できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "長期調達の仕組みが背景にある安定型料金メニューを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="次は先物の考え方へ"
          description="長期契約が期間で安定性を持つ手段だと分かったら、次は価格変動だけを先に固定する先物の考え方を確認すると整理しやすくなります。"
          links={[
            { href: "/power-futures", label: "先物取引の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav currentSlug="long-term-power-procurement" />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="long-term-power-procurement" />
      </div>
    </main>
    </>
  );
}
