import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "高圧と特別高圧の違い｜契約区分の基本と料金構造の比較";
const pageDescription =
  "高圧電力と特別高圧電力の違いを解説。契約電力・受電電圧・料金構造・適用される事業所タイプの違いを整理し、法人が契約区分を理解するための基礎知識をまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧 特別高圧 違い",
    "高圧電力 契約 法人",
    "特別高圧 受電 条件",
    "高圧 料金 構造",
    "高圧契約 基本料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/high-voltage-vs-extra-high-voltage-differences",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-vs-extra-high-voltage-differences",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const comparisonData = [
  {
    item: "受電電圧",
    highVoltage: "6,600V（6.6kV）",
    extraHighVoltage: "20,000V・60,000V・140,000V以上",
  },
  {
    item: "契約電力の目安",
    highVoltage: "50kW以上〜数千kW程度",
    extraHighVoltage: "概ね2,000kW以上",
  },
  {
    item: "変圧器（受電設備）",
    highVoltage: "需要家側で設置（キュービクルなど）",
    extraHighVoltage: "大型の変電設備が必要",
  },
  {
    item: "適用される主な施設",
    highVoltage: "工場、スーパー、病院、学校、中規模ビル",
    extraHighVoltage: "大規模工場、データセンター、大型商業施設、鉄道",
  },
  {
    item: "単価の傾向",
    highVoltage: "低圧より安い",
    extraHighVoltage: "高圧より安い（スケールメリット）",
  },
  {
    item: "料金構造",
    highVoltage: "基本料金（契約電力kW）＋電力量料金（kWh）",
    extraHighVoltage: "基本料金（契約電力kW）＋電力量料金（kWh）※単価水準が異なる",
  },
];

const faq = [
  { question: "高圧と特別高圧の主な違いは何ですか？", answer: "高圧は受電電圧が6,600V・契約電力50kW以上、特別高圧は受電電圧が20,000V（20kV）以上・契約電力2,000kW以上が目安です。特別高圧は大規模工場やデータセンターなどが対象で、高圧より単価が低い傾向があります。" },
  { question: "高圧から特別高圧へ切り替えるメリットはありますか？", answer: "特別高圧に移行すると単価が下がる可能性がありますが、自家用変電設備の設置費用や維持費が必要になります。電力コストの削減効果と設備投資のトレードオフを慎重に検討する必要があります。" },
  { question: "契約電力がどのくらいになると特別高圧の対象になりますか？", answer: "一般的に契約電力2,000kW以上が目安ですが、エリアや電力会社によって異なります。受電電圧の変更には電気工作物の設置届出が必要で、専門家への相談が推奨されます。" },
];

export default function HighVoltageVsExtraHighVoltageDifferencesPage() {
  return (
    <>
      <ArticleJsonLd
        headline="高圧と特別高圧の違い｜契約区分の基本と料金構造の比較"
        description="高圧電力と特別高圧電力の違いを解説。契約電力・受電電圧・料金構造・適用される事業所タイプの違いを整理し、法人が契約区分を理解するための基礎知識をまとめます。"
        url="https://simulator.eic-jp.org/high-voltage-vs-extra-high-voltage-differences"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "高圧と特別高圧の違い" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧と特別高圧の違い
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電力契約は、受電する電圧の高さによって「低圧」「高圧」「特別高圧」に区分されています。電力会社との契約区分が変わると、適用される料金メニューの構造も変わります。契約区分を正しく理解することは、法人が電気料金を管理・比較するための基礎知識です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、特に法人が多く該当する「高圧」と「特別高圧」の違いを、受電電圧・料金構造・適用施設の観点から整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>高圧・特別高圧の受電電圧と契約電力の違い</li>
            <li>それぞれの料金構造の基本</li>
            <li>実務での確認ポイント</li>
            <li>見積比較での活用方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電力契約の区分：低圧・高圧・特別高圧
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力供給では、使用規模（契約電力）と受電する電圧によって、以下の3つの区分に分かれます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">低圧</p>
              <p className="mt-1 text-sm text-slate-700">100V・200Vで受電。契約電力50kW未満が目安。一般家庭・小規模事業所が対象。</p>
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="font-semibold text-slate-900">高圧</p>
              <p className="mt-1 text-sm text-slate-700">6,600Vで受電。契約電力50kW以上が目安。中規模以上の工場・商業施設・病院など。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">特別高圧</p>
              <p className="mt-1 text-sm text-slate-700">20kV以上で受電。大規模工場・データセンター・鉄道など大口需要家が対象。</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            受電電圧が高くなるほど、電力会社の送電・変電コストが下がり、1kWhあたりの単価が低くなる傾向があります。ただし、高電圧を受け入れるための受電設備（変圧器・キュービクルなど）を需要家側で保有・維持するコストが発生します。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧と特別高圧の比較
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">高圧</th>
                  <th className="p-3 text-left font-semibold text-slate-900">特別高圧</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-medium text-slate-700">{row.item}</td>
                    <td className="p-3 text-slate-700">{row.highVoltage}</td>
                    <td className="p-3 text-slate-700">{row.extraHighVoltage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧・特別高圧の料金構造の基本
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の電気料金は、基本的に「基本料金」と「電力量料金」の2つの要素で構成されます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">基本料金（円/kW・月）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                契約電力（kW）または最大需要電力（デマンド）に対して課される固定的な費用。電力をほとんど使わなくても発生します。デマンドが高いほど基本料金が増加します。
              </p>
            </div>
            
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">電力量料金（円/kWh）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">
                実際に使用した電力量（kWh）に単価をかけた従量課金。燃料費調整額・再エネ賦課金・容量拠出金相当が加算されます。
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧では、力率（電力の使用効率）によって基本料金が割引または割増されます。力率が高いほど基本料金が安くなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            力率の詳細は{" "}
            <Link
              href="/what-is-power-factor"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              力率とは何か
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            実務での確認ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧契約を管理している担当者が実務上で確認すべき主なポイントを示します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">自社の受電電圧と契約区分を把握する：</span>
              検針票・電力会社の請求書で確認できます。高圧か特別高圧かで適用されるメニューが異なります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">契約電力・デマンド値を把握する：</span>
              基本料金の計算に使われるため、デマンド値の推移を把握することは基本料金削減の第一歩です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">受電設備の管理状況を確認する：</span>
              高圧受電設備（キュービクル）の点検・法定検査が法律で義務付けられており、保守管理コストも考慮に入れます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">プランの切り替えが可能かを確認する：</span>
              現在の契約に縛り期間・違約金がある場合、切り替えのタイミングに注意が必要です。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積比較での活用ポイント
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の見積書を比較する際は、以下の点に注意することで正確な比較ができます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>基本料金の単価と算定基準（最大需要電力 or 契約電力）が同じ条件か確認する。</li>
            <li>電力量料金に燃料費調整額・再エネ賦課金・容量拠出金相当が含まれているか確認する。</li>
            <li>力率割引の条件（適用される力率の基準値）を比較する。</li>
            <li>季節別・時間帯別の料金区分（昼間・夜間・ピーク）の有無と自社の使用パターンとの相性を確認する。</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の見直しポイントは{" "}
            <Link
              href="/high-voltage-contract-review-points"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              高圧契約の見直しで確認したいこと
            </Link>
            {" "}で、特別高圧は{" "}
            <Link
              href="/extra-high-voltage-contract-review-points"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              特別高圧契約の見直しで確認したいこと
            </Link>
            {" "}でそれぞれ確認できます。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">高圧と特別高圧のコスト差分析</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">比較項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">高圧（500kW・5万kWh/月）</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特別高圧（3,000kW・150万kWh/月）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,500〜1,900円/kW</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">1,200〜1,600円/kW</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金単価</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">15〜20円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">12〜18円/kWh</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">月額合計目安</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約160〜195万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約2,400〜4,400万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1円/kWh差の年間影響</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±60万円</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">±1,800万円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">受電設備費用</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">需要家負担（キュービクル）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">需要家負担（特高受電設備・変圧器）</td>
              </tr>
            </tbody>
          </table>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "高圧・特別高圧の契約制度・料金規制データ" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・系統情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/what-is-power-factor",
              title: "力率とは何か",
              description: "高圧・特別高圧料金に影響する力率の仕組みと確認方法。",
            },
            {
              href: "/high-voltage-contract-review-points",
              title: "高圧契約の見直しで確認したいこと",
              description: "高圧需要家向けの料金構造と契約条件の着眼点。",
            },
            {
              href: "/extra-high-voltage-contract-review-points",
              title: "特別高圧契約の見直しで確認したいこと",
              description: "大規模契約の比較と注意点。",
            },
            {
              href: "/high-voltage-market-linked-considerations",
              title: "高圧・特別高圧で市場連動を考えるときの注意点",
              description: "大口需要家が市場連動プランを選ぶ際の注意点。",
            },
            {
              href: "/business-electricity-cost-components",
              title: "法人の電気料金の内訳",
              description: "高圧・特別高圧を含む電気料金の全構成要素。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "高圧・特別高圧の見積書を正しく読む方法。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "契約区分を理解したうえで、プランの選択軸を整理できます。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人向け電気料金は高止まりしているのか",
              description: "高圧・特別高圧の単価推移の実態をデータで確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="高圧・特別高圧の料金を自社の数字で確認する"
          description="契約電力・使用量・プランタイプをもとに、シミュレーターで年間コストを試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="high-voltage-vs-extra-high-voltage-differences" />
      </div>
    </main>
    </>
  );
}
