import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";


const pageTitle = "法人の電気料金が高い会社に共通する特徴とは？見直しポイントを解説";
const pageDescription =
  "法人の電気料金が高くなりやすい会社の特徴を整理。契約電力、デマンド、調整項目、比較時の見落としなど、見直し前に確認したいポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人 電気料金 高い 理由",
    "デマンド 高い",
    "契約電力 見直し",
    "電気料金 自己診断",
    "法人 電力比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/why-business-electricity-costs-are-high",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/why-business-electricity-costs-are-high",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人の電気料金が高い会社に共通する特徴",
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

export default function WhyBusinessElectricityCostsAreHighPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気料金が高い会社の特徴</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金が高い会社に共通する特徴とは？見直し前に確認したいポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金が高く見える背景には、燃料価格や制度要因だけでなく、自社の契約条件や電力の使い方が影響していることがあります。
          請求額の大きさだけで判断するのではなく、どの項目が効いているのかを整理することが見直しの第一歩です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電気料金が高い会社に共通しやすい特徴を、自己診断に使える形で整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金が高く見える理由を分けて考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「高い」と感じる原因は一つではありません。使用量増加、契約電力、調整項目、契約条件など複数要素が重なっていることが多く、まずは要素分解して確認することが重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            外部要因の全体像は
            {" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            で整理しています。本ページでは自社側の特徴に焦点を当てます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約電力やデマンドが大きい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力が実態より大きい、またはデマンドが高止まりしている場合、基本料金負担が重くなりやすくなります。
            使用量を抑えても総額が下がりにくいときは、この要因を優先して確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連する基礎は
            {" "}
            <Link href="/contract-demand-what-is-it" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              デマンドの解説
            </Link>
            と
            {" "}
            <Link href="/contract-demand-what-is-it" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              契約電力の解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">単価だけで比較している</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較で単価だけを見て判断すると、調整項目や契約条件の差を見落としやすくなります。見た目の単価が低くても、実請求で逆転するケースは少なくありません。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">調整項目や契約条件を見落としている</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額、市場価格調整額、再エネ賦課金などの項目を見落とすと、請求増減の要因を誤認しやすくなります。
            さらに、更新条件や解約条件を確認しないまま切替すると、運用上の制約が後で顕在化する可能性があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">使用時間帯や季節変動の影響を受けやすい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日中ピークが集中する業態や、冷暖房負荷が大きい施設は、時間帯別・季節別の変動影響を受けやすくなります。
            年間総使用量だけでなく、いつ使っているかを確認することで、改善余地を特定しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直し前に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>請求書で基本料金・電力量料金・調整項目を分けて把握する</li>
            <li>契約電力とデマンドの推移を確認する</li>
            <li>契約条件（更新・解約・違約金）を確認する</li>
            <li>比較時は単価だけでなく総額と条件を同時に確認する</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書の確認は
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              請求書チェックの解説
            </Link>
            、比較の進め方は
            {" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ポイントの解説
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が高い会社には、契約条件・使い方・比較手順に共通する傾向があります。請求書、契約条件、使用実態の3点を先に整理することで、見直しの優先順位を明確にできます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="自己診断で見えた課題を、具体的な比較行動につなげるための導線です。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "デマンドとは",
              description: "ピーク電力と基本料金の関係を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "高い原因を請求項目ごとに切り分ける手順を整理できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時の見落としを減らす判断軸を確認できます。",
            },
            {
              href: "/articles",
              title: "法人向け電気料金の基礎知識",
              description: "関連する見直しテーマをまとめて確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較とシミュレーションで確認する"
          description="自己診断で整理したポイントをもとに、比較ページとシミュレーションで自社条件に近い判断を進められます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
