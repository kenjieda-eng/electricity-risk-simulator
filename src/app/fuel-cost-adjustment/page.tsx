import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "燃料費調整額（燃調費）とは？法人の電気料金への影響と確認ポイントをわかりやすく解説";
const pageDescription =
  "燃料費調整額（燃調費）とは何か、法人の電気料金にどう影響するのかをわかりやすく解説。請求書で確認したいポイントや市場連動型との違い、見直し時の注意点も紹介します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "燃料費調整額",
    "燃調費 法人",
    "法人 電気料金 見直し",
    "市場連動型 燃調費",
    "電気料金 明細 見方",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fuel-cost-adjustment",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fuel-cost-adjustment",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "燃料費調整額（燃調費）とは",
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

export default function FuelCostAdjustmentPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          燃料費調整額（燃調費）とは？法人の電気料金への影響をわかりやすく解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金を見直すとき、契約単価や基本料金だけを見て判断してしまうと、実際の請求額とのずれが生じることがあります。
          その理由の一つが、毎月変動する燃料費調整額（燃調費）です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          燃料費調整額は、発電に使う燃料価格の変動を電気料金に反映する仕組みです。特にLNGや石炭、原油などの価格が動くと、
          法人向けの電気料金にも影響が及びます。このページでは、燃料費調整額の基本、請求書で確認すべき点、契約見直し時の整理軸を解説します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額とは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額とは、発電に使う燃料の価格変動を電気料金に反映するための調整項目です。日本の電気料金は、常に同じ条件で発電できるわけではありません。
            火力発電に使うLNG、石炭、原油などの価格が上がれば、電力会社の調達コストも上がります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この変動分を一定のルールで電気料金に反映する仕組みが燃料費調整額です。そのため、同じ使用量でも月によって請求額が変わることがあります。
            法人の電気料金では、基本料金や電力量料金と並んで、請求額に影響する重要な項目です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ燃料費調整額は毎月変わるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額が毎月変わるのは、発電用燃料の価格が一定ではないためです。LNGや石炭、原油などの国際価格は、世界の需給、
            産地のトラブル、地政学リスク、為替の変動などによって動きます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本は燃料の多くを海外から輸入しているため、海外市況や円安の影響を受けやすい構造です。その結果、発電コストが変わり、
            それが燃料費調整額を通じて電気料金に反映されます。請求額が増えたときは、使用量だけでなく燃料費調整額の変化も確認する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人の電気料金で燃料費調整額が影響するポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金を見るときは、単に契約単価が安いかどうかだけでなく、最終的な請求額に何が乗っているかを見ることが大切です。
            燃料費調整額は、電力量料金に上乗せまたは調整される形で反映されることが多く、使用量が多い法人ほど影響額も大きくなりやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            工場、倉庫、商業施設、オフィスビルなどでは、燃料費調整額の変動が月次コストに与える影響を無視できません。請求書や料金明細では、
            基本料金、電力量料金、燃料費調整額、再エネ賦課金を分けて見て、どの項目が増減しているかを確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型プランとの違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額と混同されやすいのが、市場連動型プランの価格変動です。燃料費調整額は主に発電用燃料の価格変動をもとに調整される仕組みですが、
            市場連動型プランはJEPXなどの市場価格の影響を受けやすい点が異なります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            同じく請求額が変動する要素でも、見ている対象は別です。契約比較の際は、燃調費の扱いと市場価格の影響度を分けて確認する必要があります。
            市場連動型の全体像は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランの解説
            </Link>
            、固定型との違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額を確認するときの実務ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人が燃料費調整額を確認するときは、請求書や見積書の中で、どのように表示されているかをまず確認します。
            実務上は次の観点が重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額がどこに記載されているか</li>
            <li>単価に含まれているのか、別立てなのか</li>
            <li>上限の考え方があるか</li>
            <li>契約比較時に同条件で比較できているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較では、基本料金や電力量料金の見た目だけで判断すると、実際の請求額ベースで逆転することがあります。
            そのため、燃料費調整額を含めた総額ベースで確認する視点が欠かせません。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気料金を見直すときにあわせて確認したいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額だけを見ても、電気料金全体の判断はできません。実務では、契約プランが市場連動型か固定型か、基本料金と電力量料金の構成、
            使用量の季節変動やピークの有無、再エネ賦課金など他の上乗せ項目もあわせて確認すると整理しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求構造全体を見ながら、自社に合った契約を考えることが重要です。比較を進める場合は{" "}
            <Link href="/compare" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            も活用してください。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="燃料費調整額の理解を、契約タイプの違いや実際の比較判断に接続するための導線です。"
          links={[
            {
              href: "/lng-electricity-price",
              title: "法人の電気料金とLNGの関係",
              description: "燃料市場の動きが法人料金へ波及する背景を、実務目線で整理しています。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動型プランの仕組み",
              description: "市場価格の変動を受ける契約の特徴と、注意点を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型の違い",
              description: "料金の動き方や運用面の違いを比較し、選び方の軸を整理できます。",
            },
            {
              href: "/capacity-contribution-explained",
              title: "容量拠出金とは",
              description: "燃調費と並ぶ料金上昇要因として、容量拠出金の仕組みと転嫁構造を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して判断したい方へ"
          description="解説を押さえたうえで、現在契約と候補プランを同条件で比較すると、見直しの方向性を具体化しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
