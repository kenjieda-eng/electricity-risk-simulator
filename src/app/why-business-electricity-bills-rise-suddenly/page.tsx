import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人の電気料金はなぜ急に上がるのか｜請求額が急上昇する主な理由を解説";
const pageDescription =
  "法人の電気料金がある月から急に上がる理由を、燃料費調整額、市場価格調整額、補助金終了、契約更新などの観点から解説します。請求書や見積書で確認したいポイントも法人向けに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 急に上がる",
    "法人 電気代 今月から上がった",
    "燃料費調整額 市場価格調整額",
    "補助金終了 電気料金",
    "電力契約 更新 単価見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-business-electricity-bills-rise-suddenly",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-bills-rise-suddenly",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人の電気料金はなぜ急に上がるのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhyBusinessElectricityBillsRiseSuddenlyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人の電気料金はなぜ急に上がるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、毎月ゆるやかに変わるとは限りません。ある月から請求額が急に上がったように見える場合は、
          使用量の増加だけでなく、料金単価や調整項目、政策要因、契約条件の変化が重なっていることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは「なぜ今月から上がったのか」という実務上の疑問に絞り、請求額が急変した場面で確認したいポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず確認したいのは使用量の増加か料金単価の変化か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最初に分けて考えたいのは、使用量が増えたのか、それとも1kWhあたりの実質単価が上がったのかという点です。気温や操業状況による
            使用量増加はよくありますが、それとは別に、燃料費調整額や市場価格調整額、契約単価の見直しで請求額が増えることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            総額だけで判断せず、使用量、基本料金、電力量料金、各種調整項目を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額の変動で請求額が大きく動くことがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、火力発電の燃料価格の変動を一定のルールで料金へ反映する仕組みです。LNG、石炭、原油などの燃料価格が上昇すると、
            数か月のタイムラグを経て請求額に反映されることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            仕組みの詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額（燃調費）の解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整額や市場連動要素で急上昇することがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            卸電力市場の価格上昇が反映される契約では、短期間で請求額が大きく動くことがあります。需給が逼迫する局面や、燃料高、
            猛暑・厳冬が重なる局面では、市場価格が上がりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額の考え方は{" "}
            <Link href="/market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整額の解説
            </Link>
            、契約タイプは{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランの解説
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">補助金の縮小や終了で見かけ上大きく上がることがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            政府の負担軽減策や補助金が入っていた時期は、実際の原価上昇の一部が見えにくくなっています。補助金が縮小・終了すると、
            調達環境が急変していなくても、請求額だけが急に上がったように見えることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約更新時の単価見直しで上がることがある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電力契約では、契約更新のタイミングで基本料金や電力量料金単価が見直されることがあります。市場環境が不安定な時期は、
            更新後の条件が従来より厳しくなる場合もあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積書や契約更新案内で旧条件と新条件の差分を確認し、どの項目が増えたかを明確にすることが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">夏季・冬季の使用量増加と料金上昇を分けて考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            夏季・冬季は空調負荷で使用量が増え、請求額が上がりやすくなります。ただし、使用量増加による上昇と、制度や単価変動による上昇は
            分けて考える必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この切り分けができると、節電で対応できる部分と、契約見直しで対応すべき部分が整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量（kWh）と前月比・前年同月比</li>
            <li>基本料金と電力量料金の増減</li>
            <li>燃料費調整額と市場価格調整額の変化</li>
            <li>再エネ賦課金の単価と総額</li>
            <li>補助金反映の有無</li>
            <li>契約更新による単価改定の有無</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">急な値上がりを見たときに法人が確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            まず「使用量が増えたのか」「単価や調整項目が変わったのか」を切り分けます。そのうえで、契約メニュー、市場連動要素の有無、
            補助金終了の影響、契約更新の有無を確認すると、上昇理由を実務的に整理できます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            さらに全体像を整理したい場合は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            もあわせて確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金が急に上がる背景には、使用量増加だけでなく、燃料費調整額、市場価格、補助金終了、契約更新など複数要因があります。
            請求額の総額だけでは原因が見えにくいため、項目ごとに切り分けて確認することが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="急な上昇要因を切り分けた後に、項目別の仕組みと見直し判断へつなげる導線です。"
          links={[
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "上昇要因の全体像を整理できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整額とは",
              description: "請求額に影響する市場要因の見方を確認できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度項目が請求額へ与える影響を整理できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "値上がり時に確認したい見直しの進め方を整理できます。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較ページ",
              description: "同条件で比較し、契約判断に必要な差分を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="請求額の急変要因を比較で確認する"
          description="要因を切り分けた後は、現行契約と候補条件を同じ前提で比較すると、社内説明と見直し判断を進めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧を見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
