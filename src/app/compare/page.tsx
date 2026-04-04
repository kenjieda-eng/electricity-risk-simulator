import type { Metadata } from "next";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ComparePageClient from "./ComparePageClient";

export const metadata: Metadata = {
  title: "固定プランと市場連動プランの比較 | 法人向け電気料金上昇、高騰リスクシミュレーター",
  description:
    "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/compare",
  },
  openGraph: {
    title: "固定プランと市場連動プランの比較 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
    url: "https://simulator.eic-jp.org/compare",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金上昇、高騰リスクシミュレーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "固定プランと市場連動プランの比較 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
    images: ["/twitter-default.png"],
  },
};

export default function ComparePage() {
  return (
    <>
      <section className="mx-auto mt-6 max-w-[1600px] bg-slate-50 px-4 py-[18px] sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
            電気料金上昇・高騰リスクと固定プラン・市場連動プランの比較結果
          </h1>
          <p className="mt-2 text-sm leading-6 sm:text-base">
            このページでは、入力条件に基づく電気料金上昇・高騰リスクスコアと、固定プラン・市場連動型プランの比較結果を確認できます。企業や自治体を含む法人向けの電力契約見直しにおいて、高圧・特別高圧の電気代と電気料金の変動リスクを把握するための電気料金シミュレーター結果ページです。
          </p>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-[1600px] bg-slate-50 px-4 py-[18px] sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
            この比較結果で確認できるポイント
          </h2>
          <p className="mt-1 text-sm text-slate-600 sm:text-base">
            以下の結果ブロックで、リスクスコア、入力条件、リスク要因、固定プランと市場連動の差分、年間グラフを順に確認できます。
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-1 text-sm leading-6 text-slate-700 sm:grid-cols-2 sm:text-base">
            <li>電気料金上昇リスクスコアと平均との比較</li>
            <li>今回の入力データと前ページで選択したリスク要因</li>
            <li>固定プラン・市場連動プランの累計比較（反映前/反映後）</li>
            <li>リスク要因による増加額と、どちらのプランが得かの比較</li>
            <li>結果解説と年間シミュレーショングラフ（表示ON/OFF切替対応）</li>
          </ul>
        </div>
      </section>

      <ComparePageClient />

      <section className="mx-auto mb-8 max-w-[1600px] bg-slate-50 px-4 py-[18px] sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <h2 className="text-base font-semibold text-slate-900 sm:text-lg">比較結果の活用メモ</h2>
          <p className="mt-2 text-sm leading-6 sm:text-base">
            本シミュレーション結果は、新電力を含む電力契約の見直しやリスク把握の参考情報です。実際の請求単価・燃料費調整・契約条件により結果は変動するため、必要に応じて再度入力して比較をご確認ください。
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
          <RelatedLinks
            heading="あわせて読みたい記事"
            intro="診断結果を、見積の読み方・上昇要因・リスクシナリオ・長期推移の理解に接続すると説明がしやすくなります。"
            links={[
              {
                href: "/how-to-read-electricity-quote",
                title: "法人向け電気料金見積書の見方",
                description: "比較結果を実際の見積条件に落とし込むときの確認軸です。",
              },
              {
                href: "/why-business-electricity-prices-rise",
                title: "法人の電気料金が上がる理由",
                description: "リスク要因と構造要因を分けて説明する材料になります。",
              },
              {
                href: "/articles/risk-scenarios",
                title: "リスクシナリオ別に知る（カテゴリ）",
                description: "猛暑・円安など、ほかの上振れパターンへ広げられます。",
              },
              {
                href: "/business-electricity-price-trend-10-years",
                title: "法人向け電気料金の10年推移",
                description: "長期の位置づけをチャートと解説で補えます。",
              },
              {
                href: "/how-to",
                title: "電力料金上昇リスク診断の使い方",
                description: "入力とリスク要因の読み方をあらためて確認できます。",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
