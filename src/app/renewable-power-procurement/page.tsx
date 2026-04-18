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


const pageTitle = "再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方";
const pageDescription =
  "再エネ電気の調達方法は一つではありません。FIT、FIP、PPA、相対契約などの違いを整理しながら、電力会社が再エネをどう調達し、どのような特徴やリスクを持つのかを法人向けに解説します。";
const pageUrl = "https://simulator.eic-jp.org/renewable-power-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["法人電気料金", "電気代", "再エネ賦課金"],
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
    scheme: "FIT",
    pricing: "固定の買取価格・制度運営色が強い",
    stability: "制度の枠組みで流通しやすい",
    fit: "制度経由で再エネ電気の流れを理解したい場面",
  },
  {
    scheme: "FIP",
    pricing: "市場価格にプレミアムを上乗せする考え方",
    stability: "市場との連動を前提にした運用",
    fit: "市場統合された再エネ電源の理解",
  },
  {
    scheme: "相対契約",
    pricing: "個別条件で価格式を設計",
    stability: "契約次第で安定性を持たせやすい",
    fit: "発電事業者と小売で条件を作り込みたい場面",
  },
  {
    scheme: "PPA",
    pricing: "長期の価格・受渡条件を事前に定めることが多い",
    stability: "中長期の確保に向きやすい",
    fit: "特定電源との継続的な関係を作りたい場面",
  },
];

export default function RenewablePowerProcurementPage() {
  return (
    <>
      <ArticleJsonLd
        headline="再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方"
        description="再エネ電気の調達方法は一つではありません。FIT、FIP、PPA、相対契約などの違いを整理しながら、電力会社が再エネをどう調達し、どのような特徴やリスクを持つのかを法人向けに解説します。"
        url="https://simulator.eic-jp.org/renewable-power-procurement"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ電気はどう調達しているのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          再エネ電気はどう調達しているのか｜FIT・FIP・PPA・相対契約の考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ電気の調達というと、太陽光や風力の設備を思い浮かべやすいかもしれません。ただ、小売電気事業者の調達という視点で見ると、
          実際には複数の仕組みが並んでいます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          FITやFIPの制度のもとで流通する電気もあれば、PPAや相対契約の形で個別に調達するケースもあります。同じ「再エネ調達」と言っても、
          価格の持ち方、数量の安定性、需給の変動の受け方はかなり異なります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ電気はどう仕入れられているのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            小売会社が再エネを調達するときは、制度経由で市場に流れる電気を扱う場合もあれば、発電事業者と個別契約を組む場合もあります。
            そのため、「再エネを調達する」を一つの方法で理解しようとすると実務が見えにくくなります。
          </p>
          <InfoBox title="先に分けて考えたいこと">
            再エネ電気そのものをどう確保するかと、再エネ価値や非化石価値をどう確保するかは、同じではありません。後者は次の記事の非化石証書でも整理します。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">FITとFIPの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            FITは固定価格での買取を前提とした制度で、再エネ導入初期の普及に大きな役割を果たしてきました。FIPはそれに対して、
            市場価格にプレミアムを上乗せする仕組みで、再エネを市場へ統合していく考え方が強くなっています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            小売会社の調達視点では、FITとFIPで価格の持ち方や市場との接続の仕方が異なるため、同じ再エネ電気でも調達リスクの出方が変わります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">FIT・FIP・相対契約・PPAの比較表</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">仕組み</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">価格の持ち方</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">調達の安定性</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">向いている場面</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.scheme} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.scheme}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.pricing}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.stability}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            制度と契約形態を同じ土俵で比較した整理表です。実務では受渡方法、環境価値の帰属、バランシングの持ち方でさらに差が出ます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">PPAと相対契約の位置づけ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            PPAは長期の売電・調達関係を組む枠組みとして語られることが多く、再エネ電源との関係性を長く持ちたいときに使われます。
            相対契約はより広い概念で、再エネに限らず個別条件で組む契約全般を含みます。再エネ調達では、この二つが重なって見えることがありますが、
            「特定電源との継続的な関係を持つか」「個別条件でどう設計するか」で整理すると理解しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ調達で見たい比較ポイント</h2>
          
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-3 grid gap-4 lg:grid-cols-3">
            <InfoBox title="価格">
              市場連動か、固定か、プレミアム方式かでコストの振れ方が変わります。
            </InfoBox>
            <InfoBox title="数量">
              太陽光や風力は出力変動があるため、必要量との一致度は別途見る必要があります。
            </InfoBox>
            <InfoBox title="価値">
              電気そのものと、再エネ価値・非化石価値が同じ形で持てるとは限りません。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">通常の電力調達と何が違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            通常の電力調達よりも、制度、環境価値、出力変動の三つを重ねて見なければならない点が大きな違いです。
            そのため、再エネ調達を理解するときは、設備導入の話に寄りすぎず、小売会社がどんな条件で再エネ電気を仕入れ、
            その価値を商品へどう反映するかに焦点を置くのが実務的です。
          </p>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            制度名称は2026年4月2日時点で、資源エネルギー庁のFIT・FIP制度公開情報をもとに確認しています。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ調達手法別の価格帯目安</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">調達手法</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">価格帯目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">契約期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">環境価値</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">法人コスト影響</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">FIT電気+非化石証書</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">10〜14円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">短〜中期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">証書で付与</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通常電気+0.3〜1円/kWh</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">FIP電気</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">11〜16円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">中期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電源由来</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">市場変動あり</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">コーポレートPPA</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">10〜15円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10〜20年</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電源由来</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">長期固定で安定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自家消費（屋根上太陽光）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">8〜12円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">設備寿命</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自家消費</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">最も安価な可能性</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 価格は概算参考値です。実際は規模・エリア・条件により異なります。</p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">再エネ比率と追加コストの関係（月50,000kWh使用の高圧事業所）</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>再エネ比率<span className="font-semibold text-slate-900">30%</span>: 追加コスト 月+約4.5〜15万円（年間<span className="font-semibold text-slate-900">+54〜180万円</span>）</li>
            <li>再エネ比率<span className="font-semibold text-slate-900">50%</span>: 追加コスト 月+約7.5〜25万円（年間<span className="font-semibold text-slate-900">+90〜300万円</span>）</li>
            <li>再エネ比率<span className="font-semibold text-slate-900">100%</span>: 追加コスト 月+約15〜50万円（年間<span className="font-semibold text-slate-900">+180〜600万円</span>）</li>
          </ul>
          <p className="mt-2 text-xs text-slate-500">※ 通常電気料金との差額として算出。非化石証書の価格帯・調達手法により幅があります。</p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="再エネ電気の調達方法を押さえたら、次は非化石証書で環境価値の持ち方を確認すると全体像がつながります。"
          links={[
            {
              href: "/non-fossil-certificates",
              title: "非化石証書とは何か｜再エネ価値をどう確保するのか",
              description: "電気そのものと環境価値を分けて整理できます。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "再エネの個別契約を理解する前提を確認できます。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "再エネ調達をポートフォリオ全体の中で位置づけられます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "再エネ調達の背景にある制度コストの仕組みを確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="次は非化石証書へ"
          description="再エネ電気の仕入れ方を見たら、次は環境価値をどう確保するかを確認すると、再エネメニューの背景が読みやすくなります。"
          links={[
            { href: "/non-fossil-certificates", label: "非化石証書の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="renewable-power-procurement"
          extraLinks={[{ href: "/non-fossil-certificates", title: "非化石証書も続けて読む" }]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="renewable-power-procurement" />
      </div>
    </main>
    </>
  );
}
