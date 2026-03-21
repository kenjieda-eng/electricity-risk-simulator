import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "法人向け電気料金の内訳とは｜基本料金・電力量料金・燃調費・再エネ賦課金を整理";
const pageDescription =
  "法人向け電気料金の内訳を解説。基本料金、電力量料金、燃料費調整額、再エネ賦課金など、請求額が何で構成されているかを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人向け 電気料金 内訳",
    "電気料金 内訳 企業",
    "高圧 電気料金 内訳",
    "請求書 電気料金 内訳 法人",
    "電気料金 何で決まる 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/business-electricity-bill-breakdown",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金の内訳とは",
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

export default function BusinessElectricityBillBreakdownPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電気料金の内訳とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、単純に使用量だけで決まるわけではありません。請求書には複数の項目が並ぶため、初めて見る担当者には分かりにくいことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、請求額が何で構成されているかを全体俯瞰で整理します。各項目の詳細確認ページへ進む前提として活用してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人向け電気料金は何で構成されるか</h2>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">基本料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金は契約条件、とくに契約電力との関係が大きい固定費部分です。使用量とは別にかかるため、総額を読むときの起点になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">電力量料金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金は実際に使った電力量に応じて変わる部分です。使用量が多い月は影響が大きく、繁忙期との関係も確認が必要です。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">燃料費調整額</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、燃料価格などの変動を反映する項目です。毎月の請求増減を説明するときの重要な要素になります。
          </p>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">再エネ賦課金</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は制度に基づく費用項目です。使用量が多い法人ほど金額が大きくなりやすく、制度要因として分けて把握する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ内訳を分けて見る必要があるのか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求額が増えた理由を切り分けやすくなる</li>
            <li>使用量要因・燃料要因・制度要因を整理しやすくなる</li>
            <li>見積比較や契約見直しの判断精度を上げやすくなる</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">内訳を見るときによくある誤解</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>単価だけ見れば十分だと思う</li>
            <li>すべて使用量の影響だと考える</li>
            <li>燃料費調整額と再エネ賦課金を同じ項目のように見る</li>
            <li>固定費部分を見落とす</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人担当者がまず確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金の水準</li>
            <li>契約電力</li>
            <li>使用量</li>
            <li>燃料費調整額</li>
            <li>再エネ賦課金</li>
            <li>前月・前年同月との差分</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">内訳を理解すると見積比較もしやすくなる</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の請求構造が分かると、提案見積との差分を構造的に読みやすくなります。単価だけでなく、総額の決まり方で比較できるようになる点が実務上の利点です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金は、複数の要素で構成されます。内訳を分けて見ることで、値上がり理由や見直し余地が分かりやすくなります。
            請求書や見積書を読む前提知識として活用してください。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="全体俯瞰の次に、各項目を個別に深掘りするための導線です。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "月次の変動要因としての燃調費を確認できます。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "制度要因としての賦課金を整理できます。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "基本料金と見積比較の前提を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "実際の請求書確認の手順に進めます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "比較・切り替え検討時の確認軸を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="現状の料金構造を比較につなげる"
          description="内訳の全体像を押さえたら、現在条件と候補条件を同じ前提で比較して判断する流れが実務的です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
