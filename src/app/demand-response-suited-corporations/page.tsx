import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "DR活用が向く法人の特徴｜柔軟な需要調整ができる条件";
const pageDescription =
  "需要応答（DR）プログラムへの参加が向く法人の特徴と条件を解説。電力使用の柔軟性・設備の特性・契約形態・業種別の傾向など、DR活用による収益・コスト削減の可能性を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "需要応答 DR 法人",
    "デマンドレスポンス 企業 向き",
    "需要調整 電力 法人",
    "DR プログラム 参加条件",
    "ネガワット 法人",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/demand-response-suited-corporations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-response-suited-corporations",
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
    label: "下げDR（需要抑制型）",
    detail:
      "電力需給がひっ迫する局面で電力会社や需給調整機関からの要請に応じて電力使用を削減するタイプ。削減した電力量（ネガワット）に対して対価が支払われる場合がある。夏季・冬季の需給ひっ迫時に発令されることが多い。",
  },
  {
    label: "上げDR（需要増加型）",
    detail:
      "太陽光・風力など変動型再生可能エネルギーの出力が過剰になった局面で、余剰電力を積極的に活用してもらうために電力使用を増やすよう要請するタイプ。蓄電池への充電などで対応できる場合がある。",
  },
  {
    label: "アグリゲーター経由のDR",
    detail:
      "単独での参加規模が小さい場合でも、アグリゲーター（需要家側の電力調整を取りまとめる事業者）を通じてDRプログラムに参加できる仕組みがある。複数の需要家の調整能力をまとめて電力市場に提供する。",
  },
];

const suitedConditions = [
  {
    label: "一定時間の電力使用削減が事業に支障をきたさない",
    detail:
      "DRへの参加では、数十分〜数時間の電力使用削減が求められる。照明の調光・空調の設定変更・蓄電池からの供給切替など、事業継続に影響を与えない範囲で調整できる設備・運用ルールを持つ法人が向く。",
  },
  {
    label: "大きな電力使用を持つ高圧・特別高圧需要家",
    detail:
      "DRプログラムの参加条件として最低限の調整可能容量が求められるケースが多い。高圧・特別高圧の大口需要家はこの条件を満たしやすく、参加によって得られるインセンティブの絶対額も大きくなりやすい。",
  },
  {
    label: "蓄電池・自家発電設備を保有している",
    detail:
      "蓄電池を保有している場合、充放電のコントロールによってDRに参加しやすくなる。自家発電設備（非常用発電機を含む）を活用できる場合は、購入電力の削減を通じてDRに参加する方法もある。",
  },
  {
    label: "生産・営業スケジュールに柔軟性がある",
    detail:
      "製造ラインや設備を停止・調整できる時間帯が存在する法人は、その時間をDR参加に充てることができる。すべての設備が24時間フル稼働で停止不可能な法人はDRへの参加が難しい。",
  },
  {
    label: "EMS（エネルギー管理システム）で需要管理をしている",
    detail:
      "エネルギー管理システム（EMS）や高機能なスマートメーターを導入している場合、DRの発令に対して自動的に需要調整を行うことができ、運用負担を抑えながらDRに参加しやすくなる。",
  },
];

const lessEffectiveConditions = [
  {
    label: "医療機器・食品安全など電力中断が許容できない設備が中心",
    detail:
      "手術室・ICU・精密加工機械・低温倉庫など、電力の安定供給が絶対条件の設備が中心の法人はDRへの参加が困難。参加できる設備が限られ、調整可能容量が小さくなる。",
  },
  {
    label: "低圧の小口需要家",
    detail:
      "電力使用量が小さい低圧需要家は、単独でDRプログラムに参加できる規模に達しないことが多い。アグリゲーター経由での参加も条件次第となる。",
  },
  {
    label: "需要の柔軟性がなく調整できる設備が限定的",
    detail:
      "電力使用が常に一定で、削減・調整できる設備がほとんどない場合は参加できる余地が小さい。",
  },
];

export default function DemandResponseSuitedCorporationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          DR活用が向く法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          需要応答（DR：Demand Response）は、電力需給状況に応じて需要家が電力使用を調整し、その対価としてインセンティブを受け取る仕組みです。電力系統の安定化に貢献しながら、電気料金の実質的な削減につながる可能性があります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          ただし、DRに参加できる法人・できない法人があります。このページでは、DR活用の効果が出やすい法人の特徴と条件を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>DRの種類（下げDR・上げDR）と参加の仕組み</li>
            <li>DR活用が向く法人の5つの条件</li>
            <li>DR参加が難しい法人の特徴</li>
            <li>業種・施設別の傾向</li>
            <li>蓄電池・設備対策との組み合わせ方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需要応答（DR）の仕組みと種類
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要応答（DR）は、電力需給バランスの変動に対して需要家側が電力使用量を調整することで、電力系統の安定化に貢献する仕組みです。参加する需要家はインセンティブ（削減量に応じた報酬・電気料金の割引など）を受け取れる場合があります。
          </p>
          <div className="mt-4 space-y-3">
            {drTypes.map((item) => (
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
            DR活用が向く5つの条件
          </h2>
          <div className="mt-4 space-y-3">
            {suitedConditions.map((item) => (
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
            DR参加が難しい条件
          </h2>
          <div className="mt-4 space-y-3">
            {lessEffectiveConditions.map((item) => (
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
            業種・施設別の傾向
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">業種・施設</th>
                  <th className="border border-slate-200 px-3 py-2">DR向き</th>
                  <th className="border border-slate-200 px-3 py-2">主な理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">工場（調整可能な製造ライン）</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">生産スケジュールを調整できる時間帯がある</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">データセンター（蓄電池保有）</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">大容量の蓄電池・自家発を活用した調整が可能</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">大型商業施設</td>
                  <td className="border border-slate-200 px-3 py-2">条件次第</td>
                  <td className="border border-slate-200 px-3 py-2">空調・照明の一部調整は可能だが来客への影響も考慮が必要</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">病院・医療施設</td>
                  <td className="border border-slate-200 px-3 py-2">慎重な判断が必要</td>
                  <td className="border border-slate-200 px-3 py-2">医療継続への影響を排除しながら参加できる範囲に限定</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">オフィスビル</td>
                  <td className="border border-slate-200 px-3 py-2">空調・照明での参加</td>
                  <td className="border border-slate-200 px-3 py-2">空調・照明の調整で一定の参加余地があるケースも</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            設備対策・契約見直しとの組み合わせ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            DRは単独での取り組みよりも、蓄電池・太陽光発電・EMSなどの設備対策や電力契約の見直しと組み合わせることで、総合的な電気料金削減効果が高まります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>蓄電池との組み合わせ：DR発令時に蓄電池から放電して購入電力を削減</li>
            <li>太陽光との組み合わせ：上げDR時に余剰電力を吸収して充電、下げDR時に放電</li>
            <li>EMSとの連携：自動制御でDRへの対応を効率化し、運用負担を低減</li>
            <li>市場連動型契約との組み合わせ：高騰局面でDRに参加してコストを抑制</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            設備対策との全体的な組み合わせについては{" "}
            <Link
              href="/contract-review-and-equipment-combination"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              契約見直しと設備対策をどう組み合わせるか
            </Link>{" "}
            で整理しています。
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
              href: "/solar-suited-corporations",
              title: "自家消費型太陽光が向く法人の特徴",
              description: "太陽光発電の費用対効果が出やすい条件の整理。",
            },
            {
              href: "/contract-review-and-equipment-combination",
              title: "契約見直しと設備対策をどう組み合わせるか",
              description: "契約と設備の両面からコストを最適化する考え方。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "市場価格連動型の電力契約の仕組みとリスク。",
            },
            {
              href: "/demand-charge",
              title: "デマンドとは",
              description: "契約電力と基本料金の関係をわかりやすく解説。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力の調達の仕組み",
              description: "電力がどのように調達・供給されるかの基礎。",
            },
          ]}
        />

        <ContentCta
          heading="自社の電力コストリスクを確認する"
          description="DR参加を検討する前に、現行の電力契約条件での料金上振れリスクをシミュレーターで試算できます。まず現状のリスクを数値で把握することをお勧めします。"
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
