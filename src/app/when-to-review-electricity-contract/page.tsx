import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人が電力契約を見直すタイミング｜料金上昇・更新時期・使用状況変化で確認したいポイント";
const pageDescription =
  "法人が電力契約を見直すべきタイミングを解説。電気料金の上昇、契約更新、使用状況の変化、設備更新などをきっかけに、確認したいポイントと比較時の視点を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電力契約 見直し タイミング",
    "電気料金 見直し サイン",
    "契約更新 電気料金 比較",
    "法人 電気料金 値上がり",
    "電力会社 比較 進め方",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/when-to-review-electricity-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/when-to-review-electricity-contract",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人が電力契約を見直すタイミング",
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

export default function WhenToReviewElectricityContractPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人が電力契約を見直すタイミング</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電力契約は、一度決めると長期間そのままになることが少なくありません。ですが、料金上昇や事業環境の変化があると、
          現在の契約内容が実態に合わなくなる場合があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見直しを検討しやすいタイミングと、比較前に確認したいポイントを整理します。単なる一般論ではなく、
          実務で判断しやすい確認順序を意識してまとめています。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人が電力契約を見直すべき主なタイミング</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">請求額が以前より大きくなったとき</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量が大きく変わっていなくても、燃料価格、為替、市場価格、制度要因によって請求額が上がることがあります。
            まずは「使用量が増えたのか」「単価が上がったのか」を切り分けることが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            上昇が続く場合は、契約メニューが自社のリスク許容度に合っているかも見直します。要因整理には{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>{" "}
            と{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額
            </Link>{" "}
            の確認が有効です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約更新や満了時期が近づいたとき</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新は見直ししやすい代表的なタイミングです。自動更新のまま継続すると、比較の機会を逃すことがあります。
            更新前に単価水準、契約条件、違約金、見直し余地を確認しておくと判断しやすくなります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">拠点の稼働状況や使用量が変わったとき</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            生産量や営業時間、空調負荷、設備稼働が変わると、適した料金プランも変わる可能性があります。使用量だけでなく、
            使う時間帯の変化も確認すべきポイントです。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">設備更新や増設を行ったとき</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            空調更新、冷凍冷蔵設備更新、EV導入、蓄電池設置などで負荷特性が変わると、契約電力や料金メニューの前提が変わることがあります。
            設備投資後は省エネ効果だけでなく、契約条件も確認することが重要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">複数拠点の請求状況に差があるとき</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            似た規模の拠点でも契約条件や単価体系の違いで請求額に差が出ることがあります。特に多拠点企業では、拠点ごとの契約を横並びで比較し、
            全体最適の観点で見直し余地を探すことが有効です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し前に確認したいポイント</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">請求書のどこを見るか</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金</li>
            <li>電力量料金</li>
            <li>燃料費調整額</li>
            <li>再エネ賦課金</li>
            <li>契約電力と使用量</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金上昇の原因が制度・燃料・市場・契約条件のどこにあるかを切り分けると、見直しの方向性が明確になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">現在の契約が固定型か市場連動型か</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約の仕組みを理解しないまま比較すると、単価だけで誤判断しやすくなります。安定重視か相場連動を許容するかで、
            選ぶべき方向性が変わります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">契約条件や解約条件</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約期間</li>
            <li>更新条件</li>
            <li>解約金</li>
            <li>最低利用条件</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">料金表だけでなく、契約条件まで含めて比較することが重要です。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">こんなときは比較・診断を進めやすい</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>更新時期が近い</li>
            <li>請求額の上昇が続いている</li>
            <li>使用状況が変わった</li>
            <li>現在契約の仕組みがわからない</li>
            <li>他拠点との差が大きい</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            このような状態は、比較や診断に進む合理的なタイミングです。比較の進め方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>{" "}
            で整理できます。
          </p>

          <h2 className="mt-6 text-xl font-semibold text-slate-900">法人が電力契約を見直すときの注意点</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけで決めない</li>
            <li>市場連動リスクを見落とさない</li>
            <li>燃料費調整額や再エネ賦課金の扱いも確認する</li>
            <li>契約条件まで含めて見る</li>
            <li>将来の使用状況変化も少し織り込む</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">迷ったら比較の前に現状整理から始める</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>直近数か月の請求書</li>
            <li>契約更新時期</li>
            <li>使用量推移</li>
            <li>現在の料金体系</li>
            <li>拠点ごとの差</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ここまで整理してから比較に進むと、見積の読み違いを減らせます。見直しの入口は請求額上昇だけではなく、更新時期や設備更新、
            使用状況の変化も含めて捉えることが大切です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見直しタイミングを整理した後は、要因理解と比較軸の確認を組み合わせると判断しやすくなります。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場の変動が請求額へ波及する背景を確認できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "請求額が増える主因を全体像で整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "見落としやすい燃調費の影響を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較前にそろえる情報と判断軸を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して判断する"
          description="見直しタイミングと確認項目を整理したら、現行契約と候補条件を同じ前提で比較すると方針を決めやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
