import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "再エネ賦課金とは？法人の電気料金で確認したい仕組みと影響を解説";
const pageDescription =
  "再エネ賦課金とは何か、法人の電気料金にどう影響するのかをわかりやすく解説。請求書での見方や燃料費調整額との違い、見直し時の確認ポイントも整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ賦課金 とは",
    "法人 電気料金 制度負担",
    "再エネ賦課金 燃料費調整額 違い",
    "電気料金 請求書 見方",
    "電力契約 見直し ポイント",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/renewable-energy-surcharge",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/renewable-energy-surcharge",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "再エネ賦課金とは",
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

export default function RenewableEnergySurchargePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          再エネ賦課金とは？法人の電気料金で確認したい仕組みと影響を解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金の請求書には、基本料金や電力量料金に加えて再エネ賦課金が記載されることがあります。意味が分かりにくく、
          何に対する負担なのか迷いやすい項目です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          再エネ賦課金は、再生可能エネルギーの導入を支える制度に基づいて電気料金に上乗せされる項目です。このページでは、仕組み、
          法人料金への影響、請求書での見方、燃料費調整額との違いを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネ賦課金とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金とは、再生可能エネルギーの導入を支える制度に基づいて電気料金に上乗せされる負担です。電力会社が再生可能エネルギー由来の電気を
            買い取る仕組みを支えるために、需要家側が一定の負担を分担する形になっています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            個別の電力会社が独自に設定する料金というより、制度に基づき広く反映される項目です。法人の請求書でも他の料金項目と並んで記載されます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金にはどう影響するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は使用量に応じて請求額へ影響するため、使用量が多い法人ほど負担額も大きくなりやすくなります。工場、倉庫、商業施設、
            オフィスビルなどでは、月ごとの請求額に一定の影響を与える項目です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、契約単価だけでなく、再エネ賦課金を含めた総額で確認する必要があります。単価が変わっていないのに請求額が増える場合でも、
            制度項目が影響していることがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書ではどこを見ればよいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多くの請求書では、再エネ賦課金は独立した項目で確認できます。総額だけでなく、内訳で確認することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>再エネ賦課金がどこに記載されているか</li>
            <li>請求額全体の中でどの程度を占めているか</li>
            <li>使用量との関係でどれくらい増減しているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金、電力量料金、燃料費調整額、再エネ賦課金を分けて確認すると、負担増の要因を切り分けやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金と燃料費調整額は、どちらも請求額に上乗せされる項目として混同されやすいですが、見ている対象は異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、LNGや石炭、原油など発電用燃料の価格変動を反映する仕組みです。一方、再エネ賦課金は再生可能エネルギー導入を支える
            制度負担です。燃調費の詳細は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約見直しのときにどう考えるべきか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は重要な項目ですが、それだけを切り離して判断しないことが大切です。請求額が高いと感じたときは、料金構造全体を確認します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約単価そのものの差</li>
            <li>燃料費調整額の影響</li>
            <li>再エネ賦課金など制度項目</li>
            <li>市場連動型か固定型か</li>
            <li>総額として見たときにどうか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金の全体像を理解するためにあわせて見たいページ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金の理解は、契約見直しの出発点として有効です。実務では、燃料費調整額、契約プラン、市場価格の影響、使用量の傾向も
            あわせて確認すると判断精度を高められます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="制度項目の理解を、請求分析と比較判断に接続するための導線です。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "燃料価格変動が請求額へ反映される構造を確認できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "制度要因を含めた上昇要因の全体像を整理できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "請求書の内訳を実務目線で確認できます。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "どの段階で比較検討に進むべきかを整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "総額・条件・リスクの比較軸を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確認する"
          description="制度項目を理解したうえで、現行契約と候補条件を同条件で比較すると、見直し判断を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
