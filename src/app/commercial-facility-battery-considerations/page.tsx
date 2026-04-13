import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "商業施設で蓄電池を検討するときの着眼点｜ピーク負荷と営業への影響";
const pageDescription =
  "商業施設で蓄電池の導入を検討する際の主要な着眼点を解説。ピーク負荷の削減効果、テナント・営業への影響、投資回収の考え方、BCP対応の可能性まで実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "商業施設 蓄電池 導入",
    "ショッピングモール 蓄電池",
    "商業施設 ピーク電力 削減",
    "蓄電池 デマンドカット",
    "商業施設 電気料金 対策",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/commercial-facility-battery-considerations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/commercial-facility-battery-considerations",
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

const checkPoints = [
  {
    label: "ピーク負荷の把握",
    detail:
      "商業施設はオープン直後の空調・照明の一斉稼働でデマンドのピークが発生しやすい。ピーク時刻と大きさを事前に計測・把握することが蓄電池の容量設計の前提になる。",
  },
  {
    label: "テナントへの影響",
    detail:
      "蓄電池の充放電制御がテナントの電力品質に影響しないか確認が必要。特に精密機器を扱うテナントや、停電・電圧変動に敏感な業種が入居している場合は丁寧な検討が求められる。",
  },
  {
    label: "設置スペースの確保",
    detail:
      "蓄電池ユニットは相応の設置面積が必要で、既存の機械室・駐車場・屋上などに設置スペースを確保できるかが導入可否の前提条件になる。消防法や建築基準法の要件も確認が必要。",
  },
  {
    label: "電力会社・施設管理者との調整",
    detail:
      "商業施設は複数テナントへの電力供給を管理する立場になる場合があり、蓄電池導入に際して電力会社や施設管理会社との調整が必要になるケースがある。事前に確認しておくことで後のトラブルを防ぎやすくなる。",
  },
];

const benefits = [
  {
    heading: "基本料金の削減（デマンドカット）",
    content:
      "蓄電池の最大の活用方法のひとつが、ピーク時間帯に蓄電池から放電してデマンド値を抑えるデマンドカットです。高圧・特別高圧の契約では基本料金が契約電力に連動することが多く、ピーク電力を削減すれば基本料金の削減につながる可能性があります。商業施設の場合、開店直後や夏季昼間などにピークが集中しやすいため、蓄電池による放電タイミングの設計が重要になります。",
  },
  {
    heading: "電力量料金の削減（ピークシフト）",
    content:
      "時間帯別料金制を利用している場合、深夜の割安な電力で蓄電し、昼間の高単価時間帯に放電することで電力量料金を削減できます。ただし商業施設の多くは昼間営業が前提のため、放電タイミングと使用パターンを精査することが必要です。",
  },
  {
    heading: "BCP（事業継続計画）への貢献",
    content:
      "災害時や停電時に蓄電池から電力を供給することで、施設の機能を一定時間維持できます。避難誘導設備・セキュリティ・POSシステムなど、最低限の機能維持に必要な電力を確保するための非常用電源として位置づけることも可能です。ただし商業施設全体を維持するだけの容量を確保することはコスト面で現実的でない場合が多く、「重要負荷の切り出し」という考え方が実務的です。",
  },
];

export default function CommercialFacilityBatteryConsiderationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          商業施設で蓄電池を検討するときの着眼点
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ショッピングモールや複合商業施設などの大型商業施設では、テナント多数・大面積の空調・長時間営業といった特性から電気料金が高くなりやすい傾向があります。電気料金の上昇が続くなかで、蓄電池の導入を検討する施設運営者が増えています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、商業施設特有のピーク負荷の特性と、蓄電池導入を検討する際に確認すべき着眼点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>商業施設でピーク負荷が発生しやすい構造的な理由</li>
            <li>蓄電池によるデマンドカット・ピークシフトの考え方</li>
            <li>テナントへの影響や設置スペースなど実務的な確認事項</li>
            <li>BCP（事業継続）への活用可能性</li>
            <li>投資回収を判断するための基本的な整理方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            商業施設の電力使用の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            商業施設の電力使用には、他の業種とは異なるいくつかの特徴があります。これらが蓄電池の費用対効果を左右する主な要因になります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>開店直後に空調・照明・エスカレーターなどが一斉起動し、デマンドのピークが発生しやすい</li>
            <li>営業時間中は照明・空調・エレベーターなどが長時間稼働し、電力量が大きくなる</li>
            <li>夏季・冬季は空調負荷が増大し、年間で最も使用量が多い時期と料金の上振れが重なりやすい</li>
            <li>大型商業施設では特別高圧または高圧契約が前提になるため、基本料金の占める割合が大きい</li>
            <li>テナントへの転売・共有費用分担の仕組みがあり、電気料金の見直しがテナント管理に影響することがある</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の構造については{" "}
            <Link
              href="/business-electricity-bill-breakdown"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金の内訳
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            蓄電池導入の主な効果
          </h2>
          <div className="mt-4 space-y-4">
            {benefits.map((item) => (
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
            検討前に確認したい実務的な着眼点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池の導入可否を判断する前に、以下の観点を整理しておくと、提案依頼の質が上がり、比較検討がしやすくなります。
          </p>
          <div className="mt-4 space-y-3">
            {checkPoints.map((item) => (
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
            投資回収の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池の投資回収期間は、導入コスト・削減効果・補助金活用の有無などによって大きく異なります。商業施設で蓄電池の投資回収を試算する際の基本的な整理方法は以下のとおりです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">削減効果の試算</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>年間のデマンド削減による基本料金削減額を算出</li>
                <li>ピークシフトによる電力量料金削減額を算出</li>
                <li>両者を合算した年間削減額を確認する</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">コストの把握</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>蓄電池本体・工事費の初期投資額</li>
                <li>年間メンテナンスコストと交換サイクル</li>
                <li>補助金・税制優遇の適用可能性</li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            一般的に、大型商業施設でデマンド削減効果が大きい場合は投資回収期間が短くなりやすい傾向がありますが、個々の施設状況によって大きく異なるため、複数業者からの提案・試算を比較することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            蓄電池単独ではなく複合的に検討する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池は単独の対策として検討するよりも、契約見直しや他の設備対策と組み合わせて考えることで、総合的な電気料金削減効果が高まります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自家消費型太陽光発電と組み合わせて余剰電力を蓄電するハイブリッド構成</li>
            <li>デマンドコントローラーとの連携で制御精度を高める</li>
            <li>電力契約のプラン見直し（時間帯別料金の活用）と連動させる</li>
            <li>LED照明や高効率空調への更新と並行して電力使用量自体を削減する</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約見直しと設備対策の組み合わせ方については{" "}
            <Link
              href="/contract-review-and-equipment-combination"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              契約見直しと設備対策をどう組み合わせるか
            </Link>{" "}
            で整理しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターで現行リスクを把握する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            蓄電池導入の意思決定をする前に、現行の電力契約条件でどの程度の料金上振れリスクがあるかを把握しておくことが重要です。シミュレーターを使うことで、燃料費調整額の変動や市場価格の上昇が年間電気料金にどの程度影響するかを試算できます。
          </p>
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
              href: "/contract-review-and-equipment-combination",
              title: "契約見直しと設備対策をどう組み合わせるか",
              description: "契約と設備の両面からコストを最適化する考え方。",
            },
            {
              href: "/solar-suited-corporations",
              title: "自家消費型太陽光が向く法人の特徴",
              description: "太陽光発電の費用対効果が出やすい条件の整理。",
            },
            {
              href: "/contract-demand-what-is-it",
              title: "デマンドとは",
              description: "契約電力と基本料金の関係をわかりやすく解説。",
            },
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人向け電気料金の内訳",
              description: "料金の構成要素を分解して理解するための解説。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直しポイント",
              description: "冷蔵・空調負荷を踏まえた商業施設の見直し方。",
            },
          ]}
        />

        <ContentCta
          heading="自社の電力リスクを確認する"
          description="商業施設の現行契約条件をもとに、電気料金の上振れリスクをシミュレーターで試算できます。蓄電池導入の検討前に、まず現状のリスクを数値で把握することをお勧めします。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="commercial-facility-battery-considerations" />
      </div>
    </main>
  );
}
