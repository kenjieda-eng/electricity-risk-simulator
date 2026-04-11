import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "最終保障供給を比較検討の中でどう位置づけるか｜通常契約との判断基準";
const pageDescription =
  "最終保障供給を、通常の電力小売契約と比較した場合の位置づけを解説。料金水準の差、選択すべきでない理由、通常契約との判断基準、切り替えを急ぐべき理由を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 比較 通常契約",
    "最終保障供給 コスト比較",
    "最終保障供給 判断基準",
    "最終保障供給 脱出 タイミング",
    "電力 セーフティネット 位置づけ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/last-resort-supply-comparison-positioning",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-comparison-positioning",
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

const comparisonItems = [
  {
    item: "料金水準",
    normalContract: "市場競争を経た合理的な水準",
    lastResort: "通常契約の1.5〜2倍以上となることがある",
  },
  {
    item: "供給期間",
    normalContract: "契約期間内（1〜3年など）継続可能",
    lastResort: "上限あり（通常9カ月程度）",
  },
  {
    item: "選択の自由度",
    normalContract: "複数の電力会社・プランから選択可能",
    lastResort: "地域の一般送配電事業者のみ",
  },
  {
    item: "目的",
    normalContract: "継続的な電力調達",
    lastResort: "契約が失効した際の緊急的な供給継続",
  },
  {
    item: "コスト予測性",
    normalContract: "固定プランなら予測しやすい",
    lastResort: "料金改定の可能性があり予測が難しい場合がある",
  },
];

export default function LastResortSupplyComparisonPositioningPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給を比較検討の中でどう位置づけるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給は、電力自由化後のセーフティネット制度として設けられていますが、法人の電気料金管理の観点からは「使い続けるべき選択肢」ではなく「一時的な緊急避難手段」として位置づけられます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、最終保障供給を通常の電力小売契約と比較した場合の位置づけを整理し、早期に通常契約に戻るべき理由と判断基準を解説します。担当者が経営層や関係者に説明する際の参考としても活用できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>最終保障供給と通常契約の比較（料金・期間・選択肢）</li>
            <li>最終保障供給を長期利用すべきでない理由</li>
            <li>通常契約への切替タイミングの判断基準</li>
            <li>脱出を急ぐべき状況の確認</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給の本来の位置づけ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給制度は、電力自由化によって生まれた「電力会社を自由に選べる」市場環境の中で、万一の供給途絶を防ぐために設けられたセーフティネットです。医療における救急医療に近い位置づけで、緊急の際には頼れるが、日常的に使い続けることを前提とした制度ではありません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の料金が高く、期間に上限があることは、制度として「早期に通常契約に戻ることを促す」設計になっているからです。したがって、「最終保障供給でいいか」という選択肢はなく、「いかに早く通常契約に戻るか」を常に意識することが法人の電気料金管理の重要な課題です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            通常契約との比較
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">比較項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">通常の電力小売契約</th>
                  <th className="p-3 text-left font-semibold text-slate-900">最終保障供給</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonItems.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-medium text-slate-700">{row.item}</td>
                    <td className="p-3 text-slate-700">{row.normalContract}</td>
                    <td className="p-3 text-slate-700">{row.lastResort}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給の料金水準の詳細は電力会社・時期によって異なりますが、通常の高圧・特別高圧小売契約より割高になることがほぼすべてのケースで確認されています。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給を長期利用すべきでない理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給に長期滞在することには、以下の問題があります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">コストが高止まりし続ける：</span>
              通常契約に比べて高い料金が毎月発生します。使用量の大きい法人では月額数百万円規模の余分なコストが積み上がっていきます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">供給期間の上限がある：</span>
              最終保障供給には利用できる期間の上限があります。期限が切れると電力供給が停止するリスクがあります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">プランの選択肢が制約される：</span>
              最終保障供給中は地域の一般送配電事業者からしか電力を受けられないため、コストや条件を最適化する選択肢がありません。
            </li>
            <li>
              <span className="font-semibold text-slate-900">コスト予測がしにくい：</span>
              通常契約なら固定プランで単価を確定できますが、最終保障供給では料金改定があり得るためコスト予測が難しくなります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            通常契約への切替タイミングの判断基準
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            最終保障供給から通常契約への切替は「できるだけ早く」が原則ですが、以下の基準で判断します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">供給期間の上限から逆算する：</span>
              残余期間が3カ月を切ったら、遅くても切替手続きを開始します。手続きには通常数週間〜1カ月程度かかります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">通常契約の年間コストが確定したら速やかに切り替える：</span>
              代替先との見積比較が完了し、合理的な選択肢が確定したら、コスト差の累積を防ぐために速やかに切り替えます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">「もっとよい条件が出るかもしれない」と先延ばしにしない：</span>
              より良い条件を待っている間にも、高い最終保障供給料金のコストが積み上がります。合理的な範囲で早期に判断します。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            脱出を特に急ぐべき状況
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の状況では、通常契約への早期復帰を特に優先します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>月間電力使用量が大きく、毎月の余分なコストが大きい場合。</li>
            <li>供給期間の残余が半分を切っている場合。</li>
            <li>利益率が低く、高いコストが直接的に損益に影響する業種の場合。</li>
            <li>複数拠点が最終保障供給に移行しており、累積コストが増大している場合。</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度の基本的な仕組みと概要。",
            },
            {
              href: "/last-resort-supply-emergency-response",
              title: "最終保障供給に入りそうなときの対応手順",
              description: "早期発見から代替契約締結までの対応フロー。",
            },
            {
              href: "/last-resort-supply-internal-explanation",
              title: "最終保障供給を社内説明するときのポイント",
              description: "経営層への説明と意思決定の加速方法。",
            },
            {
              href: "/last-resort-supply-extra-high-voltage",
              title: "特別高圧で最終保障供給を使うときの注意点",
              description: "大規模需要家での早期脱出の重要性。",
            },
            {
              href: "/high-voltage-contract-review-points",
              title: "高圧契約の見直しで確認したいこと",
              description: "最終保障供給後に選ぶ通常契約の見直しポイント。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "最終保障供給リスクを含む総合的な契約管理項目。",
            },
          ]}
        />

        <ContentCta
          heading="通常契約の年間コストをシミュレーターで試算する"
          description="代替候補の電力プランの年間コストをシミュレーターで確認し、最終保障供給との差額を把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="last-resort-supply-comparison-positioning" />
      </div>
    </main>
  );
}
