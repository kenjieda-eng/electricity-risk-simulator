import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "電源調達調整費とは何か｜燃料費調整額との違いを法人向けに解説";
const pageDescription =
  "電源調達調整費とは何かを、燃料費調整額との違いとあわせて解説します。法人向け電力契約の見積比較で見落としやすい追加費用の考え方を整理し、電気料金の読み方に役立てます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/power-procurement-adjustment-fee",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/power-procurement-adjustment-fee",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "電源調達調整費とは何か" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function PowerProcurementAdjustmentFeePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電源調達調整費とは何か</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人向けの電力契約では、基本料金や電力量料金だけでなく、調整費の扱いによって実際の請求額の見え方が変わります。中でも電源調達調整費は、
          見積比較で見落とされやすく、契約後の差として表れやすい項目です。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電源調達調整費は見積比較で見落としやすい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電源調達調整費は、契約単価そのものではなく、調達コストの変動を反映する追加項目として使われることがあります。見積書で注記扱いになっていると、
            単価比較だけでは差が見えにくくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額との違い</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額は、主に燃料価格の変動を反映する仕組み</li>
            <li>電源調達調整費は、調達コストや市場要因に応じて反映される考え方として使われることがある</li>
            <li>名称や算定方法は事業者ごとに異なる場合がある</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃調費の基礎は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            、市場調整との関係は{" "}
            <Link href="/what-is-market-price-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場価格調整の解説
            </Link>
            と合わせて読むと整理しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">どのような契約で確認が必要か</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>新電力の見積提案</li>
            <li>市場連動系の契約</li>
            <li>一見単価が低く見える提案</li>
            <li>複数の調整項目が並ぶ見積</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積書や料金表で見るべき場所</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>約款の調整条項</li>
            <li>料金表の注記欄</li>
            <li>見積書の注意書きと前提条件</li>
            <li>単価表示の脚注</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            契約メニュー名より、どの費用がどの条件で動くかを確認することが重要です。比較手順の全体像は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              新電力比較のポイント
            </Link>
            で整理できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">比較時に確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>調整対象の指標と算定ルールが明示されているか</li>
            <li>上限・下限の有無が明記されているか</li>
            <li>燃料費調整額や市場価格調整との重複計上がないか</li>
            <li>比較表で「単価」「調整費」「契約条件」を分けて確認できているか</li>
          </ul>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電源調達調整費の月額影響シミュレーション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電源調達調整費が<span className="font-semibold text-slate-900">JEPX月平均と基準単価の差額</span>で算定される場合の月額影響です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX月平均</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">基準単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">調整単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額影響（50,000kWh）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">年間影響</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">8円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲2円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲10万円（減額）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲120万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">±0</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">±0</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">±0</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+5円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+25万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+300万円</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">25円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">10円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+15円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+75万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+900万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 算定方法は事業者により異なります。上限の有無で高騰時の影響が大きく変わります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電源調達調整費は、単価比較だけでは見えにくい実務論点です。法人の電気料金比較では、後から動く項目が何かまで読み込み、契約条件とセットで判断することが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="調整費の見方を、比較実務と契約タイプ理解へつなげるページです。"
          links={[
            {
              href: "/what-is-market-price-adjustment",
              title: "法人向け電力契約でよくある市場価格調整とは",
              description: "市場価格調整との違いを整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額（燃調費）とは",
              description: "燃調費の仕組みと請求への影響を確認できます。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "見積比較での確認軸をまとめて確認できます。",
            },
            {
              href: "/compare",
              title: "法人向け電気料金比較ページ",
              description: "整理した比較軸を使って条件差を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="見積書の注記まで確認して比較する"
          description="調整費の扱いを把握したうえで比較すると、導入後の想定差を減らしやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="power-procurement-adjustment-fee" />
      </div>
    </main>
  );
}
