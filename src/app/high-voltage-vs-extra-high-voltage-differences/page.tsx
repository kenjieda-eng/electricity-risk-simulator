import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

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
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

export default function HighVoltageVsExtraHighVoltageDifferencesPage() {
  return (
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
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "高圧・特別高圧の見積書を正しく読む方法。",
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
    </main>
  );
}
