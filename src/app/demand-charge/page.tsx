import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "デマンドとは？法人の電気料金と契約電力の関係を解説";
const pageDescription =
  "デマンドの意味、契約電力との関係、基本料金への影響、請求書や見直し時に確認したいポイントを法人向けに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドとは",
    "法人 電気料金 デマンド",
    "契約電力 基本料金",
    "高圧電力 デマンド",
    "電力契約 見直し",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/demand-charge",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-charge",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "デマンドとは",
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

export default function DemandChargePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          デマンドとは？法人の電気料金と契約電力の関係をわかりやすく解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電気料金では、使用電力量だけでなく、どの時間帯にどれだけ電力を使ったかによって基本料金の見え方が変わることがあります。
          特に高圧電力では、デマンドの考え方が契約電力や基本料金の理解に直結します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、デマンドの意味と電気料金との関係を整理し、請求確認や見直し時にどこを見ればよいかを実務目線で解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドとは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドは、一定時間帯における電力使用の大きさを示す考え方です。法人契約では、月間使用量の合計だけでなく、短時間に使用が集中したときのピーク値が重視されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、同じ電力量を使っていても、使い方の時間配分が異なると料金の見え方が変わります。デマンドは、請求額の背景を理解するうえで重要な指標です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドと契約電力の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の契約では、デマンドの推移が契約電力の考え方に関係します。契約電力は基本料金に直結しやすく、実務上はデマンドを踏まえて確認する必要があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約電力の基礎は
            {" "}
            <Link href="/contract-demand-what-is-it" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              契約電力とは
            </Link>
            で整理できます。本ページでは、その補完としてデマンドの見方を中心に扱います。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">デマンドが高いと基本料金にどう影響するか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドが高い状態が続くと、契約電力や基本料金の負担感が大きくなりやすくなります。結果として、月間使用量が同程度でも総額差が出るケースがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「使用量が同じなのに高い」と感じる場合は、電力量料金だけでなく、契約電力と基本料金の構造を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どんな会社でデマンドが上がりやすいか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            空調の同時稼働が多いオフィスビル、生産設備を一斉に動かす工場、季節負荷が大きい施設では、短時間のピークが出やすい傾向があります。
            稼働開始時刻が集中する運用も、デマンド上昇の要因になりがちです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求額の増加要因を自社側で整理したい場合は
            {" "}
            <Link href="/why-business-electricity-costs-are-high" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電気料金が高い会社の特徴
            </Link>
            もあわせて確認すると、見直しの優先順位を決めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書や見直し時に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約電力が現在の運用実態に合っているか</li>
            <li>使用時間帯にピーク集中が起きていないか</li>
            <li>季節や曜日でデマンドの出方が偏っていないか</li>
            <li>請求書で基本料金と電力量料金を分けて確認できているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求確認の流れは
            {" "}
            <Link href="/how-to-read-electricity-bill" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              請求書の確認ポイント
            </Link>
            、見直し時期の整理は
            {" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見直しタイミングの解説
            </Link>
            が参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドは、契約電力と基本料金を理解するための実務的な基礎です。使用量だけで判断せず、ピークの出方を含めて確認することで、見直しの方向性を具体化しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="デマンドの理解を、請求確認と比較判断につなげるための導線です。"
          links={[
            {
              href: "/contract-demand-what-is-it",
              title: "契約電力とは",
              description: "契約電力の基本と、基本料金との関係を整理できます。",
            },
            {
              href: "/high-voltage-electricity-pricing",
              title: "高圧電力の料金の見方",
              description: "高圧請求書を読むときの全体構造を確認できます。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金の請求書で確認したいポイント",
              description: "請求書での確認順序と見るべき項目を整理できます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "関連テーマをカテゴリ別でまとめて確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較・シミュレーションへ進む"
          description="デマンドと契約電力の関係を整理したら、現行契約と候補条件を比較して見直し余地を確認できます。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
