import type { Metadata } from "next";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "../../components/seo/JsonLd";
import ComparePageClient from "./ComparePageClient";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

export const metadata: Metadata = {
  title: "固定プランと市場連動プランの比較 | 法人電気料金ナビ",
  description:
    "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/compare",
  },
  openGraph: {
    title: "固定プランと市場連動プランの比較 | 法人電気料金ナビ",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
    url: "https://simulator.eic-jp.org/compare",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人電気料金ナビ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "固定プランと市場連動プランの比較 | 法人電気料金ナビ",
    description:
      "法人向けに、固定プランと市場連動プランの特徴や、電気料金上昇・高騰リスクの違い、電気代と電気料金への影響を比較できるページです。",
    images: ["/twitter-default.png"],
  },
};

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "電気料金プランの比較はどれくらいの時間で完了しますか？",
    answer:
      "本サイトの比較診断は 5〜10 分で完了します。事前に直近の電気料金請求書（基本料金・電力量料金・契約電力 kW・年間使用量 kWh）をご用意いただければスムーズです。診断後、自社に適合度の高いプラン上位 3〜5 件が表示され、さらに詳細を知りたい場合は各プラン解説ページに遷移できます。",
  },
  {
    question: "比較に必要な情報はどこから入手すればよいですか？",
    answer:
      "電気料金請求書（紙または Web 明細）が最も簡単です。確認すべき項目は: 基本料金 / 電力量料金（または kWh 単価）/ 契約電力（高圧の場合は契約 kW、低圧は契約 A）/ 過去 12 か月の使用量（kWh）/ 燃料費調整額・再エネ賦課金です。複数事業所がある場合は事業所単位で診断するのが推奨です。",
  },
  {
    question: "市場連動型と固定価格型の比較で何を見ればよいですか？",
    answer:
      "判断軸は 3 つです。①操業時間帯と JEPX 価格の相関（夕方ピーク操業なら市場連動はリスク高）、②契約期間中の価格変動許容度（経営計画上の予算ブレ許容幅）、③燃料費調整額の上限有無（小売各社で異なる）。本サイトの市場連動 vs 固定比較ページで両者の長所短所を整理できます。",
  },
  {
    question: "比較結果を社内決裁に使うために、どうエビデンス化すればよいですか？",
    answer:
      "比較結果ページから PDF / Excel での書き出しが可能です。社内決裁では「現契約の年間試算」「候補プランの年間試算」「リスクシナリオ別試算（JEPX 急騰時など）」の 3 点セットを揃えると稟議が通りやすくなります。当法人の決裁資料テンプレもダウンロードページからご利用いただけます。",
  },
  {
    question: "比較結果に対して中立性は担保されていますか？",
    answer:
      "本診断は一般社団法人エネルギー情報センター（非営利法人）が運営しており、特定小売電気事業者からの広告掲載料は受けていません。診断アルゴリズムは公的データ（経済産業省・OCCTO・JEPX）と業界ヒアリング結果に基づき、契約適合度を客観的に算出します。中立性は当サイトの最重要の価値です。",
  },
];


export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "固定プランと市場連動プランの比較" },
        ]}
      />
      <FaqPageJsonLd faqs={FAQ_ITEMS} />
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
          <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
            <div className="mt-4">
              <MarketDataFaq items={FAQ_ITEMS} />
            </div>
          </section>
          <RelatedLinks
            heading="あわせて読みたい記事"
            intro="診断結果を、見積の読み方・上昇要因・リスクシナリオ・長期推移の理解に接続すると説明がしやすくなります。"
            links={[
              {
                href: "/simulate",
                title: "リスク診断シミュレーター",
                description: "契約条件をもとに、電気料金の上昇リスクを30秒で診断",
              },
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
