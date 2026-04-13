import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "病院で蓄電池を検討するときの着眼点｜BCP対策と料金削減の両立";
const pageDescription =
  "病院で蓄電池の導入を検討する際の主要な着眼点を解説。医療機能の継続性（BCP）と電気料金削減の両立、非常用電源との関係、法規制対応、投資判断の整理方法まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "病院 蓄電池 導入",
    "医療施設 BCP 蓄電池",
    "病院 電気料金 削減",
    "医療機関 非常用電源 蓄電池",
    "病院 デマンドカット",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/hospital-battery-considerations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hospital-battery-considerations",
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

const bcpPoints = [
  {
    label: "医療機器への安定供給",
    detail:
      "手術室・ICU・救急処置室など生命維持に関わる医療機器は、瞬時停電を含む電力品質の低下を許容できない。蓄電池はUPS（無停電電源装置）と組み合わせることで、これらへの安定供給を強化できる。",
  },
  {
    label: "非常用発電機との役割分担",
    detail:
      "多くの病院は非常用発電機を法律上の義務として設置しているが、発電機の起動には数十秒かかる場合がある。蓄電池は発電機起動までの「つなぎ」として機能し、停電直後の電力供給を途切れさせない役割を担える。",
  },
  {
    label: "燃料備蓄の補完",
    detail:
      "非常用発電機は燃料（重油・軽油）の備蓄量に依存する。大規模災害時は燃料補給が困難になるケースがあり、蓄電池による電力貯蔵を組み合わせることで、重要負荷への供給可能時間を延ばせる可能性がある。",
  },
  {
    label: "停電時の優先負荷の整理",
    detail:
      "蓄電池容量には限りがあるため、「停電時に最低限動かし続けるべき設備」を事前に整理しておくことが重要。照明・通信・医療機器・空調（最小限）など、優先度を付けた負荷切り出しの設計が必要になる。",
  },
];

const costReductionPoints = [
  {
    heading: "デマンドカットによる基本料金削減",
    content:
      "病院は24時間稼働の設備が多く、時間帯によってデマンドのピークが生じやすい。特に午前中の外来診察開始時間帯に空調・医療機器・照明が一斉稼働することでピークが上がりやすい。蓄電池でこのピーク時間帯の放電を行うことで、デマンド値を抑え基本料金の削減につながる可能性がある。",
  },
  {
    heading: "ピークシフトによる電力量料金の削減",
    content:
      "時間帯別料金が適用される契約では、夜間の割安な電力で充電し、昼間の高単価時間帯に放電するピークシフトが有効。ただし病院の場合は夜間も電力使用量が一定程度あるため、充電・放電のスケジュール設計を実際の使用パターンに合わせて精査する必要がある。",
  },
  {
    heading: "電力会社の需要応答（DR）への参加",
    content:
      "大型の蓄電池を導入した医療機関は、電力系統の需給調整に参加する需要応答（DR）プログラムを通じて収益を得ることも検討できる。ただし医療機能を維持しながらDRに参加するためには、制御の自由度と医療継続の両立を慎重に設計する必要がある。",
  },
];

export default function HospitalBatteryConsiderationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          病院で蓄電池を検討するときの着眼点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          病院・クリニック・診療所など医療施設は、電力の安定性が最優先される事業者のひとつです。電気料金の上昇が続くなか、料金削減だけを目的に蓄電池を導入することは難しく、BCP（事業継続）への貢献と電気料金削減の両面を考慮した判断が求められます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、医療施設特有の電力使用の特性と、蓄電池導入を検討する際の実務的な着眼点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>病院の電力使用の特性とBCPの観点から蓄電池を考える理由</li>
            <li>非常用発電機との役割分担の考え方</li>
            <li>デマンドカット・ピークシフトによる電気料金削減の可能性</li>
            <li>法規制・設置条件の確認ポイント</li>
            <li>投資判断を進めるための整理方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            病院の電力使用の特性
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            病院の電力使用は、他の商業・オフィス施設と大きく異なる特性を持っています。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>24時間365日の連続稼働が前提で、深夜・休日も一定の電力使用がある</li>
            <li>医療機器・空調・照明など多様な設備が同時稼働し、電力使用量が大きい</li>
            <li>停電・電圧変動が患者の生命に直結するため、電力品質の要求水準が高い</li>
            <li>外来・手術・入院など機能区分によって電力使用パターンが異なる</li>
            <li>大規模病院は特別高圧または高圧契約で、基本料金の占める割合が大きい</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            BCP対策としての蓄電池の役割
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            病院にとっての蓄電池の最初の検討軸は、電気料金削減ではなくBCPであることが多いです。以下の観点から蓄電池の役割を整理しておくことが重要です。
          </p>
          <div className="mt-4 space-y-3">
            {bcpPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気料金削減の観点から蓄電池を評価する
          </h2>
          <div className="mt-4 space-y-4">
            {costReductionPoints.map((item) => (
              <div key={item.heading}>
                <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法規制・安全基準の確認
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            医療施設に蓄電池を設置する場合、一般の商業施設と比較して確認すべき法規制が多くなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>消防法（危険物・電気設備の取扱い）</li>
            <li>建築基準法（機械室・設置スペースの要件）</li>
            <li>医療法（設備の安全性・患者への影響）</li>
            <li>電気設備技術基準（系統連系・保護装置）</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これらの法規制への対応は専門的な知識が必要なため、設備設計段階で電気設備の専門家や施工会社と連携しながら進めることが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            投資判断の進め方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            病院での蓄電池導入の投資判断は、「電気料金削減単体での投資回収」と「BCP投資としての価値」を分けて評価することが現実的です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">電気料金削減として評価</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年間デマンド削減による基本料金削減額</li>
                <li>ピークシフトによる電力量料金削減額</li>
                <li>DR参加による収益（可能な場合）</li>
                <li>上記の合計と初期投資・維持費の比較</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">BCP投資として評価</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>停電時の診療継続・患者安全に対する価値</li>
                <li>既存の非常用発電機設備との相乗効果</li>
                <li>地域防災・行政からの補助金・支援の活用</li>
                <li>保険・リスク管理の観点からのコスト評価</li>
              </ul>
            </div>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/battery-suited-corporations",
              title: "蓄電池導入が向く法人の特徴",
              description: "投資対効果が出やすい条件と法人特性の整理。",
            },
            {
              href: "/municipality-battery-considerations",
              title: "自治体施設で蓄電池を検討するときの着眼点",
              description: "防災拠点機能と電気料金削減の両立方法。",
            },
            {
              href: "/demand-response-suited-corporations",
              title: "DR活用が向く法人の特徴",
              description: "需要応答プログラムに参加しやすい法人の条件。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "デマンドとは",
              description: "契約電力と基本料金の関係をわかりやすく解説。",
            },
            {
              href: "/contract-review-and-equipment-combination",
              title: "契約見直しと設備対策をどう組み合わせるか",
              description: "契約と設備の両面からコストを最適化する考え方。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害時の電気料金リスク",
              description: "自然災害が電力供給と料金に与える影響を整理。",
            },
          ]}
        />

        <ContentCta
          heading="自院の電力リスクを確認する"
          description="病院の現行契約条件をもとに、電気料金の上振れリスクをシミュレーターで試算できます。蓄電池導入の検討前に、まず現状のコストリスクを数値で把握することをお勧めします。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="hospital-battery-considerations" />
      </div>
    </main>
  );
}
