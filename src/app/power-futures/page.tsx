import type { Metadata } from "next";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "先物取引とは何か｜将来の価格を先に固定する仕組み";
const pageDescription =
  "先物取引は、将来の価格変動に備えるための手段です。現物市場との違い、電力会社が先物をどう位置づけるのか、価格変動リスクへの備えとしての役割を整理します。";
const pageUrl = "https://simulator.eic-jp.org/power-futures";

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
    axis: "何を主に固定するか",
    spot: "当該時点の電気そのもの",
    bilateral: "個別契約の数量・価格条件",
    futures: "将来時点の価格水準",
  },
  {
    axis: "使うタイミング",
    spot: "前日〜当日の調整",
    bilateral: "数か月〜数年のベース調達",
    futures: "将来の受渡月・季節・年度を見据える",
  },
  {
    axis: "柔軟性",
    spot: "高い",
    bilateral: "契約次第",
    futures: "ヘッジ目的での計画性が必要",
  },
  {
    axis: "向いている論点",
    spot: "数量の過不足調整",
    bilateral: "市場依存の低減",
    futures: "価格急変リスクの抑制",
  },
];

export default function PowerFuturesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">先物取引とは何か｜将来の価格を先に固定する仕組み</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力価格が大きく動く局面では、「今いくらか」だけでなく、「先の価格がどうなるか」が調達上の大きな論点になります。
          そこで重要になるのが、将来の価格変動に備えるための先物取引です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          先物取引は、現物の電気をその場で仕入れる仕組みとは少し性格が異なります。調達量そのものの確保というより、
          価格急変にどう備えるかという視点で使われることが多く、電力会社のヘッジ手段として位置づけると理解しやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">先物取引とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            先物取引は、将来のある期間の価格について、いまの時点で取引条件を持つ仕組みです。電力調達の文脈では、
            将来の現物価格が大きく変わるリスクに備えるためのヘッジ手段として理解すると分かりやすくなります。
          </p>
          <InfoBox title="読み方のポイント">
            「将来の電気を全部先に買う」のではなく、「将来の価格変動に対してどう備えるか」という観点で捉えると、現物市場との違いが見えやすくなります。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">現物市場とどこが違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一日前市場や時間前市場は、需要予測との差分を埋めるために、現物の電気を受渡直前に売買する仕組みです。先物はそれに対して、
            将来の価格リスクを先に固定する色合いが強く、短期の需給調整とは役割が異なります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">現物市場・相対契約・先物取引の違い</h2>
          <table className="mt-4 min-w-[860px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">比較項目</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">現物市場</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">相対契約</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">先物取引</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.axis} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.axis}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.spot}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.bilateral}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.futures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ将来の価格を先に押さえるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力市場は、需給逼迫や燃料高騰が重なると価格が急変します。販売先に対して一定の価格設計を持つ小売会社にとっては、
            将来の仕入れコストが読めないこと自体がリスクになります。先物は、この「先の価格の不確実性」を抑える発想です。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="価格変動に備える考え方"
              steps={[
                {
                  title: "1. 将来の販売条件を持つ",
                  description: "小売側は先の販売価格や見積条件を一定程度想定する",
                },
                {
                  title: "2. 将来の仕入れ価格が読めない",
                  description: "そのままだと市場急変で収支が大きくぶれやすい",
                },
                {
                  title: "3. 先物で価格変動をヘッジする",
                  description: "将来価格の一部を先に押さえて振れ幅を抑える",
                },
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">先物で抑えたい主なリスク</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>スポット市場価格の急騰リスク</li>
            <li>燃料高騰が将来の市場価格へ波及するリスク</li>
            <li>小売販売価格と仕入れ価格の差が大きくぶれるリスク</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            逆に言えば、先物だけで数量リスクや当日の過不足調整まで解決できるわけではありません。価格ヘッジの役割に軸を置いて考える必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社の調達全体の中での位置づけ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、ベース需要は相対契約や長期契約で押さえ、不足や変動はJEPXで調整しつつ、価格急変への備えとして先物を組み合わせる発想が分かりやすい整理です。
            先物は単独の万能策ではなく、調達ポートフォリオの一部として機能します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">先物に頼りすぎない方がよい理由</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>ヘッジした価格と実際の現物調達のズレを別途管理する必要があるため</li>
            <li>数量の過不足や需要急変まではカバーしにくいため</li>
            <li>相場下落時にはヘッジが相対的に重く見えることもあるため</li>
          </ul>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            制度・商品仕様は変わりやすいため、2026年4月2日時点ではEEXのJapanese Power Market公開情報を参照して位置づけを確認しています。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="先物は価格ヘッジの話なので、長期契約やリスク管理の記事とあわせて読むと役割分担が見えやすくなります。"
          links={[
            {
              href: "/long-term-power-procurement",
              title: "長期契約とは何か｜安定調達のために期間を長く取る考え方",
              description: "期間で安定性を持つ手段と先物の違いを比較できます。",
            },
            {
              href: "/power-risk-management",
              title: "電力会社はどうリスクを管理しているのか｜分散調達とヘッジの考え方",
              description: "先物が全体ポートフォリオのどこに入るかを確認できます。",
            },
            {
              href: "/jepx-explained",
              title: "JEPXとは何か｜卸電力市場の仕組み",
              description: "現物市場と先物の違いを前提から整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="次は燃料調達との関係へ"
          description="価格ヘッジの必要性が見えたら、次はその背景にある燃料価格の影響を確認すると、電力調達全体の構造がより分かりやすくなります。"
          links={[
            { href: "/fuel-procurement-and-electricity-prices", label: "燃料調達の記事へ進む" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav currentSlug="power-futures" />
      </section>
    </main>
  );
}
