import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "市場連動と固定は安さではなく変動の受け方で比べる｜法人向け電力契約の比較軸";
const pageDescription =
  "市場連動と固定の違いを、単純な安さではなく、電気料金の変動の受け方、予算管理、社内説明、契約条件の違いから整理します。法人向け電力契約の比較軸を分かりやすく解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/compare-market-linked-and-fixed-by-risk-pattern",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/compare-market-linked-and-fixed-by-risk-pattern",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "市場連動と固定は安さではなく変動の受け方で比べる" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function CompareMarketLinkedAndFixedByRiskPatternPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">市場連動と固定は安さではなく変動の受け方で比べる</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動と固定を比較するとき、「どちらが安いか」を先に知りたくなりますが、実務ではそれだけでは判断しにくい場面が多くあります。年によって有利不利は動くため、
          電気料金の変動の受け方と運用しやすさで整理する方が、社内説明や見直し判断に使いやすくなります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動と固定は、平均単価だけでは比べにくい</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            平均単価の比較は入口として有効ですが、上振れ月の影響や予算管理の負担までは表現しにくい指標です。特に法人・企業・自治体の契約では、
            単価の差より「変動がどこに出るか」を先に把握しておく方が運用面のギャップを減らせます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">変動の受け方で見ると違いが分かりやすい</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場連動は、市場価格の変動を受けやすい</li>
            <li>固定は、契約単価の見通しを持ちやすい</li>
            <li>ただし固定でも燃料費調整などで請求額は動きうる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            固定でも動く要素は{" "}
            <Link
              href="/does-fuel-cost-adjustment-change-even-in-fixed-plan"
              className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
            >
              固定プランでも燃料費調整額が変わる理由
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算管理と社内説明で見る違い</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>固定は予算見通しを置きやすい</li>
            <li>市場連動は価格変動の背景説明が必要になる</li>
            <li>市場連動は、調達環境次第で見直し余地を取り込みやすい</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            どちらが優位かではなく、社内の意思決定プロセスに合うかで判断するのが現実的です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約条件で見る違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約メニューの比較では、以下の論点を個別に確認すると判断しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場価格調整の有無と反映ルール</li>
            <li>電源調達調整費の扱い</li>
            <li>違約金・契約期間・更新条件</li>
            <li>上限設定の有無</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連する詳細は{" "}
            <Link href="/market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整
            </Link>
            、{" "}
            <Link href="/power-procurement-adjustment-fee" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電源調達調整費
            </Link>
            、{" "}
            <Link
              href="/electricity-contract-cancellation-renewal-terms"
              className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
            >
              契約条件の確認ポイント
            </Link>
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どちらがよいかではなく、自社に合うかで考える</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動と固定は、優劣の問題ではなく適合性の問題です。どの変動を受け入れ、どの範囲を固定したいかを明確にし、使用データと契約条件を照合して判断することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動と固定は、安さの一点比較ではなく、変動の受け方・予算管理・契約条件の3点で比べると判断しやすくなります。比較検討では、
            <Link href="/market-linked-vs-fixed" className="ml-1 text-slate-900 underline underline-offset-2 hover:text-slate-700">
              基本比較ページ
            </Link>
            も参照しながら、自社運用に合う契約を選んでください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスクパターン別 固定 vs 市場連動 年間コスト比較（月50,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">リスクパターン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX想定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">固定20円</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場連動</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">差額</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">有利</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">安定期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">平均10円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,080万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">▲120万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-sky-700 font-semibold">市場連動</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">猛暑単月型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">年平均13円（8月25円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,260万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+60万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-green-700 font-semibold">固定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">円安高止まり</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年16円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,440万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+240万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-green-700 font-semibold">固定</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">地政学リスク</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年20円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,680万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+480万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-green-700 font-semibold">固定</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">ワースト複合</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">通年25円（夏35円）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,200万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,980万円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+780万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-green-700 font-semibold">固定</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            安定期には市場連動が年間<span className="font-semibold text-slate-900">120万円</span>有利ですが、ワーストシナリオでは固定が<span className="font-semibold text-slate-900">780万円</span>有利になります。リスク許容度に応じた判断が必要です。
          </p>
        </section>

        <RelatedLinks
          heading="カテゴリ内の主要ページ"
          intro="このページを起点に、変動要素と契約条件を個別に確認すると比較精度が上がります。"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "基本の比較軸を先に確認できます。",
            },
            {
              href: "/who-should-choose-market-linked-plan",
              title: "市場連動プランが向いている法人・向いていない法人",
              description: "市場連動の適性を具体的に整理できます。",
            },
            {
              href: "/who-should-choose-fixed-price-plan",
              title: "固定プランが向いている法人・向いていない法人",
              description: "固定側の適性判断を確認できます。",
            },
            {
              href: "/does-fuel-cost-adjustment-change-even-in-fixed-plan",
              title: "燃料費調整額は固定プランでも変わるのか",
              description: "固定契約で誤解されやすい論点を整理できます。",
            },
            {
              href: "/market-price-adjustment",
              title: "法人向け電力契約でよくある市場価格調整とは",
              description: "契約単価外の変動要素を確認できます。",
            },
            {
              href: "/power-procurement-adjustment-fee",
              title: "電源調達調整費とは何か",
              description: "追加費用の見方を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="比較軸を実際の条件に当てはめる"
          description="解説で整理した比較軸を、現在契約と候補条件に当てはめて確認すると、社内説明しやすい判断材料になります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="compare-market-linked-and-fixed-by-risk-pattern" />
      </div>
    </main>
  );
}
