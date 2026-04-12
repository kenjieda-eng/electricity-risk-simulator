import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "法人向け電力契約でよくある市場価格調整とは｜市場連動との違いも解説";
const pageDescription =
  "法人向け電力契約で見かける市場価格調整の考え方を解説します。市場連動との違い、どのようなときに電気料金へ影響するのか、見積比較で確認したいポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://simulator.eic-jp.org/what-is-market-price-adjustment",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/what-is-market-price-adjustment",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: "法人向け電力契約でよくある市場価格調整とは" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function WhatIsMarketPriceAdjustmentPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">法人向け電力契約でよくある市場価格調整とは</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          見積書や料金説明の中では、「市場価格調整」「市場調整」「電源調達調整」など似た表現が使われることがあります。ここを見落とすと、
          単価が同じに見える提案でも実際の電気料金・電気代の比較を誤る原因になります。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整は、契約単価とは別に確認したい変動要素</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整は、契約単価の説明とは別レイヤーで、卸電力市場などの動きを反映するために設定されることがある項目です。見積段階で単価だけを見ていると、
            後から請求時の差として現れる場合があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整と市場連動は何が違うのか</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>市場連動は、市場価格に連動する契約設計そのもの</li>
            <li>市場価格調整は、契約単価とは別に変動要素として反映される考え方</li>
            <li>同じ「市場」という言葉でも、比較すべき場所が異なる</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動の基礎は{" "}
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランとは
            </Link>
            、契約タイプ比較は{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの違い
            </Link>
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整が電気料金に影響しやすい場面</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>卸電力市場価格が高騰した局面</li>
            <li>夏冬の需給ピークが重なる時期</li>
            <li>燃料価格上昇や需給逼迫が市場価格へ波及した場面</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            背景要因は{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            も合わせて参照すると理解しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見積比較で確認したいポイント</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>調整対象となる価格指標が何か</li>
            <li>調整額の上限・下限の有無</li>
            <li>反映タイミング（月次か時間帯別か）</li>
            <li>基本料金・電力量料金との関係</li>
            <li>他の調整費（燃料費調整額など）との重複有無</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            実務での比較手順は{" "}
            <Link href="/compare" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較ページ
            </Link>
            や{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              比較時の確認ガイド
            </Link>
            と組み合わせると運用しやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約メニュー名だけで判断しないことが重要</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            「固定」「市場連動」といった名称は、契約の全体像を示す入口に過ぎません。実際の比較では、どの項目が固定で、どの項目が後から動くかを分けて確認することが、
            契約後のギャップを減らす近道です。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場価格調整額の影響レンジ（過去実績ベース）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間<span className="font-semibold text-slate-900">50,000kWh</span>使用の高圧事業所で、基準単価10円/kWhの場合の影響試算です。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">市場環境</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">JEPX月平均</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">調整単価</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額影響</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">過去の該当時期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">安定期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">7〜9円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">▲1〜3円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">▲5〜15万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2020年春〜秋</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">やや上昇</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">12〜15円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+2〜5円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">+10〜25万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2023〜2024年通常期</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">高騰期</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">20〜30円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+10〜20円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+50〜100万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2022年通年</td>
              </tr>
              <tr className="bg-red-50">
                <td className="border border-slate-200 px-3 py-2 text-slate-700">異常高騰</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">50円超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">+40円超</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">+200万円超</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2021年1月</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 上限設定がない契約では、異常高騰時に月額が数百万円単位で増加する可能性があります。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場価格調整は、契約名だけでは見えにくい変動部分です。見積比較では、変動部分がどこにある契約かを読み分けることが重要です。特に、
            <Link href="/power-procurement-adjustment-fee" className="ml-1 text-slate-900 underline underline-offset-2 hover:text-slate-700">
              電源調達調整費の解説
            </Link>
            と合わせて確認すると、似た名称の違いを整理しやすくなります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="市場価格調整の理解を、契約タイプ比較や追加費用確認へつなげる導線です。"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場連動の契約構造そのものを確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約タイプごとの変動の受け方を比較できます。",
            },
            {
              href: "/power-procurement-adjustment-fee",
              title: "電源調達調整費とは何か",
              description: "市場価格調整と混同されやすい調整費の違いを整理できます。",
            },
            {
              href: "/articles",
              title: "解説ページ一覧",
              description: "カテゴリ全体で関連論点を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="見積条件を整理したい方へ"
          description="契約メニュー名だけでなく、調整項目の反映条件まで確認して比較すると判断しやすくなります。"
          links={[
            { href: "/how-to-compare-electricity-suppliers", label: "比較時の確認ポイントを見る" },
            { href: "/compare", label: "比較ページを見る" },
            { href: "/articles", label: "解説ページ一覧に戻る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="what-is-market-price-adjustment" />
      </div>
    </main>
  );
}
