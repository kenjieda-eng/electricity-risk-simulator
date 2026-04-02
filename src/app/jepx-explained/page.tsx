import type { Metadata } from "next";
import PowerProcurementSeriesNav from "../../components/articles/PowerProcurementSeriesNav";
import ContentCta from "../../components/simulator/ContentCta";
import FlowDiagram from "../../components/simulator/FlowDiagram";
import InfoBox from "../../components/simulator/InfoBox";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "JEPXとは何か｜卸電力市場の仕組み";
const pageDescription =
  "JEPXは、日本の電力会社や発電事業者などが電気を売買する卸電力市場です。一日前市場、時間前市場などの基本的な仕組みと、電力会社がJEPXをどのような場面で使っているのかを法人向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/jepx-explained";

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
        alt: "JEPXとは何か",
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

export default function JepxExplainedPage() {
  const marketRows = [
    {
      market: "一日前市場（スポット市場）",
      timing: "受渡前日に翌日の30分単位を売買するとき",
      adjust: "翌日の需要見込みに対する主な調達量",
      usage: "不足見込みを前日に埋める、余剰見込みを売却する",
    },
    {
      market: "時間前市場",
      timing: "当日に需要予測や発電計画のずれを修正するとき",
      adjust: "当日発生した過不足や見込み差",
      usage: "天候急変や需要変動を受けた追加調整",
    },
  ];

  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">JEPXとは何か｜卸電力市場の仕組み</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社の仕入れを理解するとき、まず押さえておきたいのがJEPXです。JEPXは、日本の卸電力市場として、
          発電事業者や小売電気事業者などが電気を売買する場です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          価格ニュースで名前が出ることが多い一方で、実務では不足分を調達したり、需給見込みのずれを調整したりする場でもあります。
          このページでは制度紹介だけで終わらせず、電力会社がJEPXを何のために使うのかという視点で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXは、日本卸電力取引所として、発電事業者、小売電気事業者などが電気を売買する市場です。
            電気は大量にためておきにくく、受渡時刻ごとに需給を合わせる必要があるため、卸市場は調達実務の中核的な機能を持ちます。
          </p>
          <InfoBox title="ここで押さえたい前提">
            小売電気事業者が必要量のすべてをJEPXだけで調達するわけではありません。相対契約や自社電源などと併用しつつ、
            JEPXを短中期の調整弁として使う見方が基本です。
          </InfoBox>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ卸電力市場が必要なのか</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電力会社は、翌日や当日の需要をかなりの精度で予測しますが、実需は天候、操業状況、再エネ出力などでずれます。
            卸市場がなければ、このずれを埋める場が限られ、供給の柔軟性が下がります。JEPXは、過不足を調整しつつ価格シグナルも示す市場として機能しています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            価格が高いか安いかだけでなく、どれだけ需給が引き締まっているかを読み取る指標としても見られます。
            法人向け料金の背景を考えるとき、JEPXは単なるニュースの数字ではなく、調達コスト形成の一部です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">一日前市場と時間前市場の基本</h2>
          <table className="mt-4 min-w-[760px] w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">市場名</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">いつ使うか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">何を調整するか</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">主な使い方</th>
              </tr>
            </thead>
            <tbody>
              {marketRows.map((row) => (
                <tr key={row.market} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.market}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.timing}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.adjust}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            2026年4月2日時点でJEPX公式サイト上で案内されている現行の中核市場区分に絞って整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力会社はJEPXをどんな場面で使うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            典型的には、翌日の需要に対して不足しそうな量を一日前市場で確保し、当日になって気温や再エネ出力が変わった場合に時間前市場で微調整します。
            発電事業者側にとっては、余剰になりそうな電気を売る出口としても機能します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ここで重要なのは、JEPXが「全部を買う場所」ではなく、「調達全体の中で不足やずれを吸収する場所」になっていることです。
            相対契約や長期契約でベースを持ちながら、市場を活用する構造が一般的です。
          </p>
          <div className="mt-4">
            <FlowDiagram
              heading="卸市場が調達全体のどこに位置するか"
              steps={[
                {
                  title: "1. ベース調達",
                  description: "自社発電、相対契約、長期契約などで基礎量を確保する",
                },
                {
                  title: "2. 翌日計画",
                  description: "需要見込みに対して一日前市場で不足や余剰を調整する",
                },
                {
                  title: "3. 当日修正",
                  description: "時間前市場で天候や需要変動によるずれを微調整する",
                },
                {
                  title: "4. 小売供給",
                  description: "最終的な調達コストと需給バランスが料金設計の背景になる",
                },
              ]}
            />
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXだけで仕入れるわけではない理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXは柔軟性が高い反面、需給が引き締まった局面では価格が大きく動きます。もし全量を市場に依存すると、価格急変や需給逼迫の影響が
            そのまま仕入れコストに表れやすくなります。そのため、多くの電力会社は市場の機動性を活かしつつ、市場依存度が高くなりすぎないように設計します。
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <InfoBox title="JEPXの強み">
              需要予測との差分を埋めやすく、価格シグナルが見えるため、短期調達には欠かせない手段です。
            </InfoBox>
            <InfoBox title="JEPXの限界">
              市場価格が急騰した局面では、柔軟性の高さがそのままコスト変動の大きさにもつながります。
            </InfoBox>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">JEPXを見るときに押さえたいポイント</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>市場価格は調達全体の一部であり、相対契約や長期契約と切り分けて読むこと</li>
            <li>価格だけでなく、どの時間帯・どのエリアで動いたかを見ること</li>
            <li>需給逼迫、燃料、再エネ出力、系統制約が重なると価格変動が大きくなりやすいこと</li>
          </ul>
          <p className="mt-3 text-xs leading-6 text-slate-500">
            参考: JEPX公式サイトのスポット市場・時間前市場ページ（2026年4月2日確認）。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="JEPXの仕組みを押さえたら、次は価格形成と市場以外の調達手段を見ると全体像がつながります。"
          links={[
            {
              href: "/how-electricity-prices-are-determined",
              title: "電気の価格はどう決まるのか｜JEPX価格の決まり方",
              description: "JEPX価格がなぜ時間帯ごとに動くのかを掘り下げます。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力会社の仕入れの全体像",
              description: "市場が調達全体のどこに位置するかを入口から確認できます。",
            },
            {
              href: "/bilateral-power-contracts",
              title: "相対契約とは何か｜市場に依存しない仕入れの考え方",
              description: "市場以外の調達ルートがなぜ必要かを確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "JEPX価格が料金メニューへどう波及するかを整理します。",
            },
          ]}
        />

        <ContentCta
          heading="次のステップ"
          description="JEPXの次は価格形成を見ると、なぜ同じ日でも価格差が出るのか、なぜ高騰時に影響が大きいのかが読みやすくなります。"
          links={[
            { href: "/how-electricity-prices-are-determined", label: "JEPX価格の決まり方を見る" },
            { href: "/articles/power-procurement", label: "カテゴリ一覧を見る" },
          ]}
        />

        <PowerProcurementSeriesNav currentSlug="jepx-explained" />
      </section>
    </main>
  );
}
