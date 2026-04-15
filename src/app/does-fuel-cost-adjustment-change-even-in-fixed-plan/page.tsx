import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
const pageTitle = "燃料費調整額は固定プランでも変わるのか｜法人向け電気料金の見方";
const pageDescription =
  "固定プランでも燃料費調整額によって請求額が変わることがあります。法人向け電力契約における固定単価と燃料費調整額の違い、見積比較や社内説明で押さえたいポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/does-fuel-cost-adjustment-change-even-in-fixed-plan",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/does-fuel-cost-adjustment-change-even-in-fixed-plan",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "燃料費調整額は固定プランでも変わるのか" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function DoesFuelCostAdjustmentChangeEvenInFixedPlanPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定でも燃調費は変わるのか</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">燃料費調整額は固定プランでも変わるのか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「固定プランなのに請求額が増えた」という疑問は、法人の契約見直しでよく出てくる論点です。固定されているのは契約単価の一部であり、
          請求全体ではない場合があるため、固定と変動の境界を分けて理解することが重要です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プランでも請求額が変わることはある</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは、主に電力量料金単価などの見通しを持ちやすくする契約です。一方、燃料費調整額や再エネ賦課金が別建てで反映される場合、
            月ごとの請求額は変動します。固定という名称だけで「請求が完全固定」と理解すると、比較判断を誤りやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定されるものと変わるものを分けて考える</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>固定されやすいもの: 契約単価（電力量料金単価など）</li>
            <li>変わりうるもの: 燃料費調整額</li>
            <li>変わりうるもの: 再エネ賦課金</li>
            <li>契約により変わりうるもの: 市場価格調整や追加調整費</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランの全体像は{" "}
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プランとは
            </Link>
            、燃調費の基礎は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額が反映される仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は、発電用燃料価格の変動を電気料金に反映する仕組みです。固定プランでも、この項目が契約単価と別に設定されていれば、
            月ごとに増減し得ます。特に使用量が多い法人や複数拠点を持つ企業では、影響額が大きくなりやすいため注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で誤解しやすいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積書の契約単価だけを見て、調整項目を確認しない</li>
            <li>請求書で合計金額だけを見て、増減要因を分解しない</li>
            <li>「固定=完全固定」と捉えてしまう</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            比較時は、単価比較に加えて契約条件・調整項目を並べることが重要です。具体的な観点は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動と固定の比較ページ
            </Link>
            でも確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">社内説明で押さえたい整理</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランは変動要素をゼロにする契約ではなく、変動の中心を抑える契約です。この整理で説明すると、予算管理部門や現場担当への説明が通りやすくなります。
            さらに、電気料金が上がる背景を{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              上昇要因の解説
            </Link>
            と合わせると、短期変動と契約条件を分けて共有しやすくなります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">固定プラン請求額の内訳分解（月50,000kWh使用の高圧事業所）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">請求項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定/変動</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">単価目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">変動幅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">固定</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,800円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約18万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">固定</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">16円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約80万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">なし</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-amber-700">変動</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲2〜+5円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲10〜+25万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">月35万円幅</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-amber-700">年度変動</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3.49円/kWh（2025年度）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約17.5万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年度改定あり</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">合計</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">約105〜140万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">固定項目98万円+変動項目</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「固定プラン」でも請求額は月<span className="font-semibold text-slate-900">約35万円</span>の変動幅を持ちます。
            これは燃料費調整額が別建てのためで、固定されているのは電力量料金単価だけである点に注意が必要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定プランでも、燃料費調整額が別建てで反映されるなら請求額は動きます。固定される項目と変動する項目を分けて読み、見積比較と社内説明の前提をそろえることが、
            実務上の判断精度を高めるポイントです。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="does-fuel-cost-adjustment-change-even-in-fixed-plan" terms={["燃料費調整額", "固定プラン", "市場連動プラン", "電力量料金", "基本料金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="固定契約の見方を、燃調費と契約タイプ比較へつなげるページです。"
          links={[
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "固定契約の基本と向いている法人像を確認できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の仕組みと請求影響の基礎を整理できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "固定と市場連動の変動性の差を比較できます。",
            },
            {
              href: "/why-business-electricity-prices-rise",
              title: "法人の電気料金が上がる理由",
              description: "燃調費を含む上昇要因を全体像で確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="社内説明に使える比較軸をそろえる"
          description="固定契約の前提を整理したら、現在契約と候補条件を同じ見方で比較し、請求変動の説明可能性まで確認しましょう。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/how-to-compare-electricity-suppliers", label: "比較時の確認ポイントを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
    </main>
  );
}
