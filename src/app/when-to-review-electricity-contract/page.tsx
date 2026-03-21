import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人が電力契約を見直すタイミングとは？確認したいサインと比較の進め方を解説";
const pageDescription =
  "法人が電力契約を見直すべきタイミングをわかりやすく解説。請求額の上昇、契約更新、使用状況の変化、市場環境の変化など、確認したいサインと見直し時のポイントを整理します。";

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
      <header className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人が電力契約を見直すタイミングとは？確認したいサインと比較の進め方を解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、契約を一度結んだらそのままでよいとは限りません。請求額の上昇、契約更新、使用量の変化、市場環境の変化などによって、
          現在の契約が自社に合わなくなることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ただし、電気料金が上がったからといって、すぐに契約先を変えればよいとは限りません。まずは何が原因で負担が増えているのか、
          どの条件を見直すべきかを整理することが大切です。このページでは、見直しの代表的なタイミングと比較前の確認ポイントをまとめます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電力契約は定期的な見直しが必要か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電力契約は、事業内容や使用状況が大きく変わっていなくても、市場環境や料金条件の変化によって見直し余地が生まれることがあります。
            近年は燃料価格、為替、市場価格、制度負担などが変動しやすく、契約条件によって請求額の差が出やすい状況です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約締結時には適していたプランでも、現在の使用実態やリスク許容度に合わなくなることがあります。
            そのため、一定のタイミングで見直し候補として確認する価値があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しを検討しやすい代表的なタイミング</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しを考えやすいタイミングには、いくつかの典型があります。以下のような変化があった場合は、現契約を継続すべきか、
            比較を始めるべきかを整理しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求額が以前より大きく上がったとき</li>
            <li>契約更新の案内が来たとき</li>
            <li>使用量や稼働時間が変わったとき</li>
            <li>拠点の増減や設備更新があったとき</li>
            <li>市場連動型と固定型のどちらがよいか迷い始めたとき</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求額が上がったときにまず確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求額が上がると、すぐに契約変更を検討しがちです。ただし、原因を切り分けないまま比較を始めると、判断を誤ることがあります。
            まずは何が増えているのかを明確にすることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>使用量が増えているのか</li>
            <li>契約単価が上がっているのか</li>
            <li>燃料費調整額の影響が大きいのか</li>
            <li>再エネ賦課金など制度要因なのか</li>
            <li>市場連動型の価格変動を受けているのか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            上昇要因の全体像は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            、燃調費は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            もあわせて確認すると整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約更新や条件変更の前後で見直したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新は、電力契約を見直す代表的なタイミングです。更新条件が提示されたときは、そのまま継続する前に現在の条件が妥当かを確認します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金と電力量料金のバランス</li>
            <li>燃料費調整額の扱い</li>
            <li>市場連動型か固定型か</li>
            <li>契約期間や解約条件</li>
            <li>自社の使用実態との適合性</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用状況や事業環境が変わったときも見直し候補</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            工場や倉庫の稼働時間の変更、拠点の増減、設備更新などの変化があると、以前は合っていた契約条件でも現在の実態に合わなくなることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            特にピークの立ち方や季節変動が変わると、料金構造の見え方も変わります。請求額だけでなく、契約条件全体を見直すことが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較を始める前に整理しておきたいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較前に前提情報をそろえると、単価だけでなく自社に合った契約を選びやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の契約種別</li>
            <li>直近数か月の請求額</li>
            <li>使用量の傾向</li>
            <li>基本料金と電力量料金の構成</li>
            <li>燃料費調整額などの影響</li>
            <li>課題が「高いこと」か「変動が大きいこと」か</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較軸の整理は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力を比較するときのポイント
            </Link>
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し後の比較は何を基準に進めるべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較では価格差だけで決めず、価格・条件・リスクをあわせて確認することが重要です。法人の電気料金は、単価表だけでは見えにくい差があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>総額で見たときにどうか</li>
            <li>価格変動リスクをどの程度受けるか</li>
            <li>自社の使用実態に合っているか</li>
            <li>市場連動型か固定型か</li>
            <li>契約条件や見積の透明性があるか</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見直しの入口を押さえた後は、要因分析・契約タイプ理解・比較基準の順で確認すると実務判断につなげやすくなります。"
          links={[
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
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "価格変動を受ける契約の特徴と注意点を把握できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "価格安定性を重視する契約の考え方を整理できます。",
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
