import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { JEPX_YEARLY_SUMMARY } from "../../data/jepxData";

export const metadata: Metadata = {
  title: "市場連動プランと固定プランの違いを比較｜法人は何を基準に選ぶべきか",
  description:
    "市場連動プランと固定プランの違いを、料金の動き方、予算管理、リスク、向いている法人の観点から比較し、選び方の考え方を整理します。",
  keywords: [
    "市場連動プラン 固定プラン 違い",
    "法人 電気料金 比較",
    "電力契約 選び方",
    "予算管理 電気代",
    "価格変動リスク",
    "市場連動プラン 固定プラン メリット デメリット",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/market-linked-vs-fixed",
  },
  openGraph: {
    title: "市場連動プランと固定プランの違いを比較｜法人は何を基準に選ぶべきか",
    description:
      "市場連動プランと固定プランの違いを、料金の動き方、予算管理、リスク、向いている法人の観点から比較し、選び方の考え方を整理します。",
    url: "https://simulator.eic-jp.org/market-linked-vs-fixed",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "市場連動プランと固定プランの違い",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "市場連動プランと固定プランの違いを比較｜法人は何を基準に選ぶべきか",
    description:
      "市場連動プランと固定プランの違いを、料金の動き方、予算管理、リスク、向いている法人の観点から比較し、選び方の考え方を整理します。",
    images: ["/twitter-default.png"],
  },
};

const jepxRiskRows = [
  {
    jepxAvg: "7.93円",
    fy: "FY2019",
    diff: "基準（0円）",
    diffClass: "text-slate-700",
  },
  {
    jepxAvg: "11.06円",
    fy: "FY2025",
    diff: "+約25万円/月",
    diffClass: "text-amber-700 font-semibold",
  },
  {
    jepxAvg: "20.41円",
    fy: "FY2022",
    diff: "+約100万円/月",
    diffClass: "text-red-700 font-semibold",
  },
];

const comparisonRows = [
  {
    axis: "料金の変動性",
    marketLinked: "市場価格の影響を受けやすく、月ごとに単価が動きやすい",
    fixedPrice: "契約期間中の単価が比較的読みやすく、変動幅を抑えやすい",
  },
  {
    axis: "予算の見通し",
    marketLinked: "変動前提での運用が必要。月次モニタリングの体制が重要",
    fixedPrice: "予算策定や社内説明を進めやすく、見通しを立てやすい",
  },
  {
    axis: "相場上昇時の影響",
    marketLinked: "負担増が出やすく、使用量の多い法人ほど影響が大きくなることがある",
    fixedPrice: "短期急騰の影響を受けにくく、上振れ抑制に寄与しやすい",
  },
  {
    axis: "相場下落時の見え方",
    marketLinked: "下落局面のメリットを取り込みやすい",
    fixedPrice: "相対的に割高に見える局面がある",
  },
  {
    axis: "向いている法人像",
    marketLinked: "変動リスクを管理できる体制があり、機動的に見直せる法人",
    fixedPrice: "安定運用を重視し、予算管理と説明のしやすさを優先する法人",
  },
];

export default function MarketLinkedVsFixedPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場連動と固定の違い</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動プランと固定プランの違い</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気契約では、市場連動プランと固定プランのどちらにも利点と注意点があります。どちらが常に優れているというより、
          自社が重視する条件と運用体制に合うかどうかで選び方が変わります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず押さえたい違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランは単価が動きやすく、固定プランは見通しを立てやすいという違いがあります。判断では、単価水準だけでなく、
            変動にどこまで対応できるか、上振れ時の社内影響を許容できるかを合わせて確認することが実務的です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金の動き方の違い</h2>
          <table className="mt-4 min-w-full border-collapse text-sm leading-6 text-slate-700">
            <thead>
              <tr className="bg-slate-50 text-slate-900">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">比較軸</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">市場連動プラン</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold">固定プラン</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.axis} className="align-top">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">{row.axis}</th>
                  <td className="border border-slate-200 px-3 py-2">{row.marketLinked}</td>
                  <td className="border border-slate-200 px-3 py-2">{row.fixedPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算管理のしやすさの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年度予算の精度を重視する法人では、固定プランが運用しやすい場面が多くあります。一方、市場連動プランは、
            月次で実績を追いながら柔軟に判断できる体制がある場合に活用しやすい選択肢です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクの出方の違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、相場急騰がそのまま負担増につながる可能性があります。固定プランは急騰耐性がある反面、
            相場下落局面で相対的に高く見えることがあるため、どのリスクを優先的に抑えたいかを明確にすることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランのメリット・デメリット</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランのメリットは、相場下落局面の恩恵を受けやすい点です。一方のデメリットは、相場急騰時にコスト上振れが発生しやすい点にあります。
            固定プランのメリットは予算の見通しを立てやすい点で、デメリットは相場下落時に相対的に割高に見える可能性がある点です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな法人がどちらを選びやすいか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力使用量が多く、上振れ回避を優先するなら固定プランを検討しやすい</li>
            <li>変動を許容し、下落局面のメリットも取り込みたいなら市場連動を検討しやすい</li>
            <li>業種、稼働時間、拠点数、社内意思決定プロセスで最適解は変わる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">JEPXデータで見る市場連動のリスク幅</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量8万kWhの法人が市場連動プランを使用する場合、JEPX年度平均の水準によって以下のような仕入れ差額が生じます（FY2019基準）。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">JEPX年度平均</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">年度</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">月間使用量8万kWhの場合の仕入れ差額（FY2019基準）</th>
                </tr>
              </thead>
              <tbody>
                {jepxRiskRows.map((row) => (
                  <tr key={row.fy} className="align-top">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">{row.jepxAvg}</td>
                    <td className="border border-slate-200 px-3 py-2">{row.fy}</td>
                    <td className={`border border-slate-200 px-3 py-2 ${row.diffClass}`}>{row.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-slate-800">
            <p>
              <strong>ボラティリティ比較：</strong>FY2019のStdDev 3.12円 vs FY2022の10.41円 — 変動リスクも3倍超
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランなら、この<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>変動は契約期間中は転嫁されません。ただし更新時に反映される可能性があります。
          </p>
          <p className="mt-1 text-xs text-slate-500">出典: JEPX公表データ（スポット市場システムプライス年度平均）</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断に迷ったときの見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            判断に迷う場合は、平時想定だけでなく上振れシナリオを含めて比較するのが有効です。法人の電力使用量、業種、運用体制、
            予算管理の考え方を前提にしたうえで、複数条件を試算し、差分で判断することをおすすめします。
          </p>
        </section>

        <RelatedLinks
          heading="詳しく知りたい方・比較したい方へ"
          intro="個別解説ページを読むと、比較表で示した違いの背景をより具体的に確認できます。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格に連動する仕組みと、導入時に確認したい実務ポイントを解説しています。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "料金を安定させやすい理由、メリット、注意点を法人向けに整理しています。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "プラン比較を検討し始めた際の見直し開始タイミングの確認。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "市場連動プランで発生する調整項目の仕組みと変動幅を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際の判断は比較・試算とセットで"
          description="選び方の軸を整理したら、使い方ページで入力手順を確認し、比較ページとシミュレーション本体で具体的な条件差を確認してください。"
          links={[
            { href: "/market-linked-plan", label: "市場連動プランを詳しく見る" },
            { href: "/fixed-price-plan", label: "固定プランを詳しく見る" },
            { href: "/how-to", label: "使い方ページを見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
