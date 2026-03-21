import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "高圧電力の料金の見方とは？法人向け請求書で確認したいポイントを解説";
const pageDescription =
  "高圧電力の料金の見方を法人向けにわかりやすく解説。基本料金、電力量料金、燃料費調整額、再エネ賦課金、契約電力、請求書で確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧電力 料金 見方",
    "高圧電力 請求書",
    "基本料金 電力量料金",
    "契約電力 見直し",
    "法人 電気料金",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/high-voltage-electricity-pricing",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-electricity-pricing",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "高圧電力の料金の見方",
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

export default function HighVoltageElectricityPricingPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧電力の料金の見方とは？法人向けに請求書の確認ポイントを解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の請求書には、基本料金、電力量料金、燃料費調整額、再エネ賦課金など複数の項目が並びます。
          総額だけを見ても、何が原因で高くなっているのか、どこに見直し余地があるのかは分かりにくいことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          高圧契約を見直すときは、単価だけでなく、料金がどの項目で構成されているかを理解することが大切です。このページでは、
          高圧電力の基本と、請求書で確認したい実務ポイントを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力は、主に一定規模以上の法人施設で利用される電力契約です。工場、倉庫、商業施設、オフィスビル、病院、学校などで使われるケースが多く、
            家庭向けや小規模店舗向けの低圧契約とは料金の見方や契約条件が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧受電では、使用量だけでなく、契約電力や設備条件、契約内容なども請求額に影響します。請求構造全体を見て判断する視点が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧電力の料金は何で構成されるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求額は、一般に複数項目の組み合わせで決まります。主な構成要素は、基本料金、電力量料金、燃料費調整額、再エネ賦課金、
            その他の契約条件に応じた項目です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求書を見るときは、どの項目が固定的か、どの項目が変動しやすいかを先に切り分けると整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">基本料金の見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            基本料金は、高圧契約の中でも重要な項目です。一般に契約電力などの条件をもとに決まり、使用量が少ない月でも一定額がかかることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使用量だけを減らしても、基本料金の影響が大きいと総額は想定ほど下がらない場合があります。見直し時には、
            現在の契約電力や契約条件が実態に合っているかを確認することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力量料金の見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量料金は、実際に使用した電力量に応じて増減する項目です。使用量が増えれば請求額も増え、使用量が減れば請求額も下がるのが基本です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            ただし、契約プランや時間帯別単価の設定によって見え方は変わります。月ごとの総使用量だけでなく、どの時間帯に使っているか、
            季節変動があるかも確認材料になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額・再エネ賦課金の見方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求書では、燃料費調整額や再エネ賦課金も重要な項目です。これらは、基本料金や電力量料金とは別に請求額へ影響します。
            使用量の変化だけでなく、調整項目の増減もあわせて確認することが大切です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            使用量があまり変わっていないのに請求額が増えた場合、これらの項目が要因になっていることがあります。燃料費調整額の考え方は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              こちらの解説
            </Link>
            でも確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">請求書で確認したい実務ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の請求書を確認するときは、総額だけで判断しないことが重要です。少なくとも次の観点で確認すると、原因の切り分けがしやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金はいくらか</li>
            <li>電力量料金はいくらか</li>
            <li>燃料費調整額の影響はどの程度か</li>
            <li>再エネ賦課金はいくらか</li>
            <li>使用量は前月・前年同月と比べてどうか</li>
            <li>契約電力や契約条件に変化はないか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧契約の見直しで確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約を見直すときは、単価比較だけでなく請求構造全体を確認することが重要です。基本料金の負担、使用量変動との整合、
            燃料費調整額や市場連動の影響、固定型と市場連動型の適合性、リスク許容度との一致をあわせて確認します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            料金表の見た目だけでは分からない差が、請求構造の中にあることもあります。比較の実行は{" "}
            <Link href="/compare" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            が起点になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="高圧料金の読み方を、要因分析と契約比較へつなげるための導線です。"
          links={[
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "月次請求に影響する燃調費の基本と、確認ポイントを整理しています。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "請求額を押し上げる主な要因を全体像で確認できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動型プラン",
              description: "市場価格の影響を受ける契約の特徴を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プラン",
              description: "料金の見通しを重視する契約の考え方を整理しています。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型の違い",
              description: "契約選定時の比較軸をまとめて確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際の条件で比較する"
          description="解説で確認した観点をもとに、現行契約と候補を同じ前提で比較すると、見直し余地が見えやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
