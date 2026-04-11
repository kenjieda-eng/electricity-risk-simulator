import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "力率とは何か｜力率割引・割増の仕組みと確認ポイント";
const pageDescription =
  "高圧・特別高圧契約における力率の概念と、力率割引・割増が電気料金の基本料金に与える影響を解説。改善方法と実務での確認ポイントを詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "力率 電気料金 法人",
    "力率割引 基本料金",
    "高圧 力率 改善",
    "力率 コンデンサ",
    "電力 力率 確認",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/what-is-power-factor",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/what-is-power-factor",
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

export default function WhatIsPowerFactorPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          力率とは何か
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧・特別高圧の電力契約では、電気料金の基本料金が「力率」によって増減します。力率が高ければ基本料金が割引になり、低ければ割増になるため、力率は法人の電気料金コストを左右する重要な指標です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          しかし「力率」という概念は電気工学の専門用語であり、担当者が初めて聞いた場合には直感的に理解しにくい面があります。このページでは、法人の電気料金管理担当者が知っておくべき力率の基本と、実務での確認・対応ポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>力率の概念と意味（わかりやすく解説）</li>
            <li>力率割引・割増の仕組みと計算例</li>
            <li>自社の力率を確認する方法</li>
            <li>力率改善の方法とコスト効果</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            力率とは：電力の使用効率を表す指標
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率（power factor）とは、供給された電力のうち、実際に有効に仕事をした電力の割合です。パーセント（%）または0〜1.0の小数で表されます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電力には「有効電力（実際に仕事をする電力・ワット）」と「無効電力（仕事をせずに電圧と電流の間で行ったり来たりする電力）」があります。力率は有効電力 ÷ 皮相電力（有効電力と無効電力の合成）で求められます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">わかりやすいたとえ</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              力率はビールのジョッキで例えると理解しやすくなります。ビール（有効電力）が実際に飲める部分、泡（無効電力）が無駄になる部分です。力率が高いほどビールの比率が大きく、電力を効率よく使えていることを意味します。
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              力率100%は「すべて有効電力」の理想状態。現実の設備では誘導性負荷（モーター・変圧器など）の影響で力率が低下しやすくなります。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            力率割引・割増の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特別高圧の電力契約では、力率によって基本料金が以下のように増減します。一般的な制度では、力率85%を基準として、それを上回ると割引、下回ると割増が適用されます。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">力率の状態</th>
                  <th className="p-3 text-left font-semibold text-slate-900">基本料金への影響</th>
                  <th className="p-3 text-left font-semibold text-slate-900">例（基準85%の場合）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">力率 100%</td>
                  <td className="p-3 text-slate-700">15%割引</td>
                  <td className="p-3 text-slate-500 text-xs">（100%-85%）×1%分の割引</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">力率 90%</td>
                  <td className="p-3 text-slate-700">5%割引</td>
                  <td className="p-3 text-slate-500 text-xs">（90%-85%）×1%分の割引</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">力率 85%（基準）</td>
                  <td className="p-3 text-slate-700">割引・割増なし</td>
                  <td className="p-3 text-slate-500 text-xs">基準値のため変動なし</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">力率 75%</td>
                  <td className="p-3 text-slate-700">10%割増</td>
                  <td className="p-3 text-slate-500 text-xs">（85%-75%）×1%分の割増</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">力率 60%</td>
                  <td className="p-3 text-slate-700">25%割増</td>
                  <td className="p-3 text-slate-500 text-xs">（85%-60%）×1%分の割増</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            ※ 上記は代表的な例です。電力会社・プランによって基準値や計算方式は異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            力率が低い場合の基本料金への影響額
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率が低いと基本料金が割増になります。その影響額は以下の計算で求められます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">影響額の計算例</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              基本料金 月額100万円 × 力率75%（割増10%）＝ 割増分 月額10万円、年間120万円の損
            </p>
            <p className="mt-1 text-sm leading-7 text-slate-700">
              基本料金 月額100万円 × 力率95%（割引10%）＝ 割引分 月額10万円、年間120万円の得
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率75%と95%では年間240万円の差が生じる計算になります。基本料金が大きい大口需要家ほど、力率管理のコスト効果が高くなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自社の力率を確認する方法
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">電力会社の請求書・検針票を確認する：</span>
              力率（%）が記載されている場合があります。月別の力率推移を把握します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">受電設備の計測器で確認する：</span>
              高圧受電設備（キュービクル）には力率計が設置されていることがあります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">電力会社・保守業者に確認する：</span>
              受電設備の定期点検を行う業者に力率の状況を確認することもできます。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            力率を改善する方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率が低い場合、進相コンデンサ（力率改善コンデンサ）の設置や調整によって力率を改善できます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">進相コンデンサの設置：</span>
              無効電力を補償するコンデンサを設置することで力率を引き上げます。設置コストは規模によりますが、割増基本料金の削減効果でROIを計算できます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">既存コンデンサの管理：</span>
              劣化・故障したコンデンサは力率改善機能が低下します。定期点検での確認が重要です。
            </li>
            <li>
              <span className="font-semibold text-slate-900">負荷の見直し：</span>
              大型モーターなど誘導性負荷を高効率機器に更新することで、力率改善と省エネの両方の効果が得られる場合があります。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/high-voltage-vs-extra-high-voltage-differences",
              title: "高圧と特別高圧の違い",
              description: "力率が影響する契約区分の基本的な違い。",
            },
            {
              href: "/high-voltage-contract-review-points",
              title: "高圧契約の見直しで確認したいこと",
              description: "力率を含む高圧契約の見直し着眼点。",
            },
            {
              href: "/extra-high-voltage-contract-review-points",
              title: "特別高圧契約の見直しで確認したいこと",
              description: "大規模契約での力率管理の考え方。",
            },
            {
              href: "/business-electricity-cost-components",
              title: "法人の電気料金の内訳",
              description: "基本料金・電力量料金など電気料金構成の全体像。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "力率条件が記載された見積書の読み方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "力率確認を含む契約見直しの総合チェック項目。",
            },
          ]}
        />

        <ContentCta
          heading="力率を含む電気料金を自社の数字で確認する"
          description="基本料金・電力量料金・力率割引の条件をもとに、年間電気料金をシミュレーターで試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="what-is-power-factor" />
      </div>
    </main>
  );
}
