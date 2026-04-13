import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "DRは電気料金対策としてどう考えるか｜需要抑制の仕組みと参加メリット";
const pageDescription =
  "需要応答（DR）が法人の電気料金対策としてどう位置づけられるかを解説します。DR参加によるインセンティブ収入、電気料金削減効果、容量市場との関係、および参加に向いている法人の特徴を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "需要応答 DR 法人 メリット",
    "DR 電気料金対策 仕組み",
    "デマンドレスポンス 法人 参加",
    "需要抑制 電力 インセンティブ",
    "DR 容量市場 関係",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/demand-response-cost-benefit",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-response-cost-benefit",
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

const drTypes = [
  {
    type: "下げDR（需要抑制型）",
    description:
      "電力需給が逼迫する時間帯や電力価格が高騰する時間帯に、事業者が電力消費を通常より削減します。削減量に応じてインセンティブが支払われます。",
    example: "空調・照明・生産ラインの一時停止・出力調整",
  },
  {
    type: "上げDR（需要増加型）",
    description:
      "再生可能エネルギーの余剰電力が発生した時間帯に、電力消費を増やすことで余剰を吸収します。電力価格が安い時間帯の消費を増やすことにもなります。",
    example: "電気ボイラー・蓄電池への充電・冷蔵倉庫の事前冷却",
  },
  {
    type: "調整DRアグリゲーター経由",
    description:
      "DRアグリゲーター（仲介事業者）を通じて、電力系統の調整力市場やネガワット取引に参加します。個別の法人が単独で参加するより、アグリゲーター経由の方が参加しやすい場合があります。",
    example: "アグリゲーターとの契約に基づく需要調整",
  },
];

const benefitTypes = [
  {
    benefit: "インセンティブ収入",
    detail:
      "DRに参加し要請に応じて需要を削減すると、削減量（kWh）に応じたインセンティブが支払われます。具体的な単価はアグリゲーターや市場の条件によって異なりますが、電気料金の削減とは別の収入源になります。",
  },
  {
    benefit: "電気料金の節約",
    detail:
      "高値時間帯に需要を抑制することで、市場連動プランの場合は購入単価を下げる効果があります。固定プランでも、デマンドピークを抑制することで基本料金の削減につながります。",
  },
  {
    benefit: "容量市場への参加",
    detail:
      "需要側リソースとして容量市場のオークションに参加することで、供給力を提供する電源と同様に容量拠出金の一部を受け取る形でのメリットが生じる場合があります。",
  },
];

const suitableForDR = [
  {
    characteristic: "電力消費が大きい工場・商業施設",
    detail:
      "DR参加による削減量（kWh）が大きいほど、インセンティブ総額も大きくなります。月間電力消費量が大きい事業所ほど参加価値が高まります。",
  },
  {
    characteristic: "生産・設備の操業調整ができる",
    detail:
      "DR要請に応じて設備の稼働を一時的に下げたり、シフトしたりできる柔軟性がある工場・施設が向いています。連続生産で調整が困難な場合は参加が難しくなります。",
  },
  {
    characteristic: "蓄電池・EV・蓄熱設備を保有",
    detail:
      "蓄電池や電気自動車（EV）の充放電制御、蓄熱空調の事前稼働などをDR要請に合わせて制御できる場合は、業務影響を最小限に抑えながら参加できます。",
  },
  {
    characteristic: "市場連動プランを利用している",
    detail:
      "電力価格が高い時間帯に消費を抑制することで、市場連動プランにおける実際の購入単価を下げる効果と組み合わさります。",
  },
];

const challengesAndLimitations = [
  {
    challenge: "業務への影響との兼ね合い",
    detail:
      "DR要請への対応は、生産計画・空調・照明などに影響する可能性があります。業務の最低限の維持を優先し、調整可能な範囲を事前に設定しておくことが重要です。",
  },
  {
    challenge: "要請頻度・タイミングの予測困難",
    detail:
      "DR要請のタイミングは需給状況や市場価格によって決まるため、事前予測が難しく、日常業務への組み込みに工夫が必要です。",
  },
  {
    challenge: "参加コストと管理負荷",
    detail:
      "DR参加のためのシステム整備（制御システム・計量設備等）や運用管理のコストが発生します。得られるインセンティブとのバランスを事前に検討することが必要です。",
  },
];

export default function DemandResponseCostBenefitPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">DRは電気料金対策としてどう考えるか</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          DRは電気料金対策としてどう考えるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          需要応答（DR：Demand Response）とは、電力系統の需給状況に応じて需要家が電力消費を調整する仕組みです。電力システム改革が進む中で、DRは電気料金対策の観点からも注目されています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          DRに参加することで、インセンティブ収入・電気料金節約・容量市場への関与という複数のメリットが生じる場合があります。一方で、業務への影響や参加コストとのバランスの検討も必要です。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>需要応答（DR）の種類と仕組み</li>
            <li>DR参加による法人のメリット</li>
            <li>DR参加に向いている法人の特徴</li>
            <li>課題・限界と対応の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需要応答（DR）とは何か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要応答（DR）は、電力の需給が逼迫したとき・電力価格が高騰したときに、需要家が電力消費を減らす（または増やす）ことで電力システムの安定化に貢献する仕組みです。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            従来は発電側の調整（火力発電の出力増減）が主体でしたが、再生可能エネルギーの普及拡大とともに需要側の柔軟な調整が重視されるようになっています。需要家がDRに参加することで、電力システム全体の安定化に貢献しながら経済的なメリットを得られる仕組みが整備されつつあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            DRの主な種類
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人が関わりうるDRの主な種類を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {drTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                <p className="mt-1 text-xs text-slate-500">具体例: {item.example}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            DR参加による法人のメリット
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DRに参加することで、法人にはどのような経済的メリットが生じうるかを整理します。
          </p>
          <div className="mt-4 space-y-4">
            {benefitTypes.map((item) => (
              <div
                key={item.benefit}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">{item.benefit}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場との関係については{" "}
            <Link
              href="/capacity-market-and-corporate-rates"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量市場と法人料金の関係
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            DR参加に向いている法人の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DRによるメリットを享受しやすい法人の特徴を整理します。
          </p>
          <div className="mt-4 space-y-4">
            {suitableForDR.map((item) => (
              <div
                key={item.characteristic}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.characteristic}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            課題・限界と対応の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DR参加を検討する際に把握しておくべき課題と対応の考え方を整理します。
          </p>
          <div className="mt-4 space-y-3">
            {challengesAndLimitations.map((item) => (
              <div
                key={item.challenge}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.challenge}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            DR参加による対価の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DR参加によって得られる対価は種類・アグリゲーターによって異なります。以下は2025〜2026年時点の業界概算値です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-sky-50">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">DR種類</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">対価の目安</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">拠出条件</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">下げDR（需要抑制型）</td><td className="border border-slate-200 p-3 text-slate-700">削減1kWあたり 5〜15円/kWh</td><td className="border border-slate-200 p-3 text-slate-700">4時間以上の抑制が一般的</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">容量市場型（kW価値）</td><td className="border border-slate-200 p-3 text-slate-700">年間 約3,000〜5,000円/kW</td><td className="border border-slate-200 p-3 text-slate-700">年間数回の発動、応答義務あり</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">アグリゲーター経由</td><td className="border border-slate-200 p-3 text-slate-700">基本料: 月額数万円＋実績報酬</td><td className="border border-slate-200 p-3 text-slate-700">契約内容による</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別DR効果の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種ごとの典型的な削減可能容量と年間インセンティブ目安を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">業種</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">典型的な削減可能容量</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold text-slate-900">年間インセンティブ目安</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="border border-slate-200 p-3 text-slate-700">製造業（金属加工）</td><td className="border border-slate-200 p-3 text-slate-700">100〜300 kW</td><td className="border border-slate-200 p-3 text-slate-700">30〜90万円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">冷凍冷蔵倉庫</td><td className="border border-slate-200 p-3 text-slate-700">50〜200 kW</td><td className="border border-slate-200 p-3 text-slate-700">15〜60万円</td></tr>
                <tr><td className="border border-slate-200 p-3 text-slate-700">大型商業施設</td><td className="border border-slate-200 p-3 text-slate-700">200〜500 kW</td><td className="border border-slate-200 p-3 text-slate-700">60〜150万円</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 p-3 text-slate-700">データセンター（蓄電池活用）</td><td className="border border-slate-200 p-3 text-slate-700">500〜2000 kW</td><td className="border border-slate-200 p-3 text-slate-700">150〜600万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※上記は2025〜2026年時点の業界概算値です。実際の効果は施設条件・契約内容により異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            DRと他の対策の組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DRは単独でも効果がありますが、他の電気料金対策と組み合わせることでさらに大きな効果が期待できます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">蓄電池との組み合わせ</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                DR要請時に蓄電池から放電して生産を維持しながら系統需要を下げることができます。業務への影響を最小化しながらDR参加が可能になります。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">市場連動プランとの組み合わせ</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                電力価格が高い時間帯に需要を自動的に下げる制御と市場連動プランを組み合わせることで、購入単価を効果的に下げられます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">太陽光との組み合わせ</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                自家消費太陽光で昼間の需要を削減しつつ、夕方の高値時間帯にDRで追加削減するという組み合わせが電力コスト最適化に有効です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">デマンド管理との組み合わせ</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                通常時のデマンド管理（ピーク抑制）と非常時のDR参加を一体的に管理することで、基本料金削減とDRインセンティブを両立できます。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要応答（DR）は、電力消費の調整を通じてインセンティブ収入・電気料金節約・容量市場への関与という複数のメリットをもたらす可能性があります。特に電力消費が大きく、設備の操業調整に柔軟性がある法人や、蓄電池・制御システムを保有する法人では参加価値が高まります。業務への影響と参加コストを事前に評価した上で、DRを電気料金対策の選択肢として位置づけることをお勧めします。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/demand-suppression-effectiveness",
              title: "デマンド抑制はどこまで効果があるか",
              description: "基本料金削減の可能性と限界を整理。",
            },
            {
              href: "/battery-electricity-cost-benefit",
              title: "蓄電池は電気料金対策としてどう効くか",
              description: "デマンド抑制とピークカットの仕組みを解説。",
            },
            {
              href: "/capacity-market-and-corporate-rates",
              title: "容量市場と法人料金の関係",
              description: "容量市場とDRの関係を整理。",
            },
            {
              href: "/market-price-reflected-in-corporate-rates",
              title: "市場価格が法人料金に反映される仕組み",
              description: "市場連動プランとDRの組み合わせを理解するための基礎。",
            },
            {
              href: "/why-corporations-consider-batteries",
              title: "法人が蓄電池を検討する理由",
              description: "DRと蓄電池を組み合わせる際の前提となる考え方。",
            },
            {
              href: "/self-consumption-solar-cost-benefit",
              title: "自家消費型太陽光は電気料金対策としてどう効くか",
              description: "DRと太陽光の組み合わせの考え方。",
            },
          ]}
        />

        <ContentCta
          heading="電気料金対策の優先順位を確認する"
          description="現在の契約条件でシミュレーションして、DRを含む各種対策の優先度を把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
