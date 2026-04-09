import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "市場価格調整額とは？燃料費調整額との違いを法人向けに解説";
const pageDescription =
  "市場価格調整額の意味、燃料費調整額や市場連動プランとの違い、見積比較時に確認したいポイントを法人向けに整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場価格調整額とは",
    "燃料費調整額 違い",
    "法人 電気料金 変動要因",
    "市場連動プラン 見積",
    "法人 電力契約 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/market-price-adjustment",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/market-price-adjustment",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "市場価格調整額とは",
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

export default function MarketPriceAdjustmentPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          市場価格調整額とは？燃料費調整額との違いと法人料金への影響を解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向け電力契約では、燃料費調整額に加えて、市場価格調整額などの項目が見積書や請求書に入ることがあります。
          名前が似ていても、参照している価格や料金への反映方法は同じではありません。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、市場価格調整額の基本と、燃料費調整額・市場連動プランとの違いを整理し、見積比較で確認すべき観点を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整額とは何か</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額は、卸電力市場の価格動向などを踏まえて料金に反映される調整項目の一つです。契約によって名称や算定ルールが異なるため、同じ言葉でも中身が一致しない場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価が一定に見える見積でも、別立ての調整項目が入ることで最終請求額は変わります。見積書では、単価欄だけでなく調整項目欄も必ず確認する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、主に発電用燃料価格の変動を反映する仕組みです。一方、市場価格調整額は市場価格の動きの影響を反映する設計になっていることが多く、参照する指標が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額の基礎は
            {" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            で確認できます。両者を分けて見ることで、請求増減の原因を切り分けやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランとの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額がある契約と、市場連動プランは同義ではありません。市場連動プランは料金単価そのものが市場価格に連動しやすい設計ですが、
            市場価格調整額は固定単価契約でも追加項目として設定される場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約メニューの違いは
            {" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            と
            {" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プランとの比較
            </Link>
            をあわせて確認すると整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書や契約条件で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>調整項目の名称と算定ルール</li>
            <li>どの料金に反映されるか（電力量料金への上乗せなど）</li>
            <li>変動幅や上限の取り扱い</li>
            <li>契約書・約款・見積書で記載内容が一致しているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方は
            {" "}
            <Link href="/how-to-read-electricity-quote" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              見積書の確認ポイント
            </Link>
            で詳しく整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">料金比較で見落としやすい点</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            料金比較では、基本料金・電力量料金・調整項目・契約条件をセットで見ることが重要です。単価のみで判断すると、後から調整項目の差で総額が逆転することがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務では、同じ使用条件で複数見積を並べ、調整項目を含む総額の比較を行うことで、過度な見落としを防ぎやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整額は、燃料費調整額や市場連動プランと似て見えても役割が異なる概念です。名称だけで判断せず、反映ルールと契約条件を確認することが、法人の料金比較では欠かせません。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="変動要因の違いを整理した後に、見積比較へつなげるための導線です。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の仕組みと、請求額への影響を確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格連動型契約の特徴と注意点を整理できます。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積比較で確認したい契約条件の読み方を確認できます。",
            },
            {
              href: "/articles",
              title: "法人向け電気料金の基礎知識",
              description: "関連する基礎テーマをカテゴリ別に確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較ページで条件差を確認する"
          description="調整項目の違いを整理したら、同じ前提条件で複数メニューを比較し、総額差を確認することが有効です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
