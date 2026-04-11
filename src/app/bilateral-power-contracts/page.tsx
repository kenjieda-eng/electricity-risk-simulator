import type { Metadata } from "next";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "相対契約とは何か｜市場に依存しない仕入れの考え方";
const pageDescription =
  "相対契約は、電力会社や発電事業者が市場を通さず、個別条件で電気を取引する仕組みです。JEPXとの違い、価格安定との関係、契約期間や数量の考え方を法人向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/bilateral-power-contracts";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "相対契約とは何か",
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

export default function BilateralPowerContractsPage() {
  const comparisonRows = [
    {
      axis: "価格の決まり方",
      jepx: "市場での約定価格に連動する",
      bilateral: "当事者間で価格式や固定条件を個別に決める",
    },
    {
      axis: "数量の持ち方",
      jepx: "必要な量をその都度調達しやすい",
      bilateral: "契約量をあらかじめ設定するケースが多い",
    },
    {
      axis: "柔軟性",
      jepx: "短期の需給変動に対応しやすい",
      bilateral: "条件変更は契約次第で柔軟性が限られる",
    },
    {
      axis: "価格安定性",
      jepx: "需給逼迫時は大きく動く可能性がある",
      bilateral: "市場急変の影響を和らげやすい",
    },
    {
      axis: "実務上の役割",
      jepx: "不足分や当日調整の吸収",
      bilateral: "ベース需要の一部を安定的に確保",
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          相対契約とは何か｜市場に依存しない仕入れの考え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社の仕入れは、すべて卸電力市場で完結しているわけではありません。市場を介さず、売り手と買い手が個別に条件を決めて取引する相対契約も、
          重要な調達手段の一つです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          相対契約では、数量、価格、受け渡しの考え方、契約期間などを当事者間で取り決めます。そのため、市場価格に比べて安定的な条件をつくりやすい半面、
          柔軟性や見直しのしやすさでは別の論点も出てきます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">相対契約とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相対契約は、市場を通さず、発電事業者や電源保有者などと個別条件で電気を取引する仕組みです。価格、数量、契約期間、受渡の考え方などを
            当事者同士で決められるため、市場価格だけに依存しない調達ルートを持てます。
          </p>
          <InfoBox title="相対契約の位置づけ">
            「市場ではない別ルート」と見るだけでは不十分で、安定性を持たせる代わりに柔軟性が下がることもある手段として理解すると、調達全体の中で位置づけやすくなります。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX調達と何が違うのか</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXは市場参加者同士が短期の需給調整を行う場であり、価格は市場で決まります。相対契約はそれに対して、
            個別の相手と条件を組み立てる取引です。必要な量を柔軟にその都度買いやすいのはJEPXですが、価格や契約条件の見通しを持ちやすいのは相対契約です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPX調達と相対契約の比較表</h2>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">比較項目</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">JEPX</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">相対契約</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.axis} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.axis}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.jepx}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.bilateral}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">相対契約で決める主な条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、相対契約の相手先、契約期間、供給数量、価格式、受渡条件、環境価値の扱いなどが論点になります。期間は短期から複数年まで幅がありますが、
            ベース需要の一部を一定条件で確保する目的で使われることが多くなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、需要予測と実需はずれるため、相対契約で全量をぴったり合わせるのは簡単ではありません。契約で押さえた量から外れる分は、
            市場や別契約で補うことになります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">相対契約のメリットと注意点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            相対契約のメリットは、価格安定性を持たせやすいこと、市場急騰の影響を一部和らげやすいこと、調達条件を見通しやすいことです。
            一方で、需要変動への追随力は市場より低く、契約条件が固定化すると相場下落時の見直しはしにくくなります。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <InfoBox title="安定性の面">
              市場が荒れた局面でも、契約で押さえた数量分については急激なコスト上振れを抑えやすくなります。
            </InfoBox>
            <InfoBox title="柔軟性の面">
              需要が大きく減った、相場が大きく下がったといった場面では、固定していた条件が重く見えることがあります。
            </InfoBox>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="相対契約を押さえたら、期間を長く取る長期契約や、リスク管理全体へつなげると調達構造が見えやすくなります。"
          links={[
            {
              href: "/long-term-power-procurement",
              title: "長期契約とは何か｜安定調達のために期間を長く取る考え方",
              description: "相対契約と重なる部分・違う部分を整理できます。",
            },
            {
              href: "/jepx-explained",
              title: "JEPXとは何か｜卸電力市場の仕組み",
              description: "市場調達と相対契約の対比を前提から確認できます。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力会社の仕入れの全体像",
              description: "自社発電・市場・相対契約の位置づけを整理します。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "相対契約を含むリスク管理の全体像を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="次の記事で期間の考え方を見る"
          description="相対契約の次は、期間を長く取る長期契約を見ると、価格安定と柔軟性のトレードオフをより具体的に整理できます。"
          links={[
            { href: "/long-term-power-procurement", label: "長期契約の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav
          currentSlug="bilateral-power-contracts"
          extraLinks={[{ href: "/long-term-power-procurement", title: "長期契約も続けて読む" }]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="bilateral-power-contracts" />
      </div>
    </main>
  );
}
