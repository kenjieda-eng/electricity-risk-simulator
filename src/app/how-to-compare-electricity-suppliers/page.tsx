import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "新電力を比較するときのポイントとは？法人が確認したい料金・条件・リスクを解説";
const pageDescription =
  "法人が新電力を比較するときのポイントをわかりやすく解説。単価だけでなく、燃料費調整額、市場連動、契約条件、請求構造、リスクの見方まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新電力 比較 法人",
    "法人 電気料金 比較ポイント",
    "市場連動 固定 比較",
    "燃料費調整額 見積 比較",
    "電力契約 リスク管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to-compare-electricity-suppliers",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/how-to-compare-electricity-suppliers",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "新電力を比較するときのポイント",
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

export default function HowToCompareElectricitySuppliersPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          新電力を比較するときのポイントとは？法人が確認したい料金・条件・リスクを解説
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電力契約を見直すとき、複数の新電力を比較する場面は少なくありません。見積書や料金表では単価が目に入りやすい一方で、
          実際の請求額を左右する要素は複数あります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、単価だけに偏らない比較の基本視点を整理します。比較直前の判断基準をそろえたいときの実務ガイドとして活用してください。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">新電力の比較で単価だけを見ないほうがよい理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            新電力の比較では、単価の安さが最初に目に入りやすいですが、それだけで判断すると総額の見通しを外すことがあります。
            法人の電気料金は、基本料金、電力量料金、燃料費調整額、契約条件などの組み合わせで決まるためです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較の軸は「単価の大小」ではなく、「総額がどう決まるか」を確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較時に確認したい主な項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較時は、少なくとも次の項目を同じ粒度で確認することをおすすめします。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金</li>
            <li>電力量料金</li>
            <li>燃料費調整額の扱い</li>
            <li>市場連動型か固定型か</li>
            <li>契約期間</li>
            <li>解約条件</li>
            <li>請求書の分かりやすさ</li>
            <li>価格変動リスクの大きさ</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動型と固定型の違いをどう見るか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較で大きな分岐になるのが、市場連動型か固定型かです。市場連動型は相場変動を受けやすい一方、条件次第ではコストを抑えられる可能性があります。
            固定型は見通しを立てやすい反面、市場が下がった局面で相対的に高く見えることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どちらが適しているかは一律ではありません。詳細は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            、{" "}
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            、{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              両者の比較ページ
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額や請求構造もあわせて見る</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較では、燃料費調整額の扱いを見落としやすい点に注意が必要です。見た目の単価が安くても、燃料費調整額や上乗せ項目を含めると、
            総額差が縮まることがあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価表だけでなく、請求構造全体を確認してください。燃調費の基本は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            も参考になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人ごとに重視すべき比較軸は違う</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            工場、倉庫、オフィス、店舗、医療施設など、業種や使用状況によって重視すべきポイントは変わります。共通の正解を探すより、
            自社の優先順位を先に明確にすることが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>価格の安さを重視するか</li>
            <li>月ごとの変動を抑えたいか</li>
            <li>予算管理のしやすさを優先するか</li>
            <li>契約条件の柔軟性を重視するか</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較前にそろえておきたい情報</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較精度を高めるために、事前に自社情報をそろえておくと判断しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の契約内容</li>
            <li>直近の請求書</li>
            <li>使用量の推移</li>
            <li>料金明細の内訳</li>
            <li>現在感じている課題</li>
            <li>変動許容度の考え方</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見直しの入口整理は{" "}
            <Link href="/when-to-review-electricity-contract" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人が電力契約を見直すタイミング
            </Link>
            を起点にすると進めやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較の最終判断で見たいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終判断では、最安の見た目より「自社に合っているか」を基準に確認することが重要です。価格だけでなく条件とリスクを含めて判断することで、
            導入後の想定差を減らせます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>年間で見たときに納得感があるか</li>
            <li>月ごとの変動リスクを受け入れられるか</li>
            <li>現在の使用実態に合っているか</li>
            <li>契約内容が理解しやすいか</li>
            <li>見積条件が明確か</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="比較基準を整理した後は、契約タイプの理解と見直しタイミングをあわせて確認すると意思決定しやすくなります。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "比較を始める前に、見直しのきっかけと確認順序を整理できます。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格の影響を受ける契約の特徴を確認できます。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "見通しを重視する契約の考え方を把握できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組み",
              description: "総額比較で見落としやすい調整項目を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="実際に比較して確かめる"
          description="比較軸を整理したら、現行契約と候補条件を同じ前提で照合して判断するのが実務的です。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
