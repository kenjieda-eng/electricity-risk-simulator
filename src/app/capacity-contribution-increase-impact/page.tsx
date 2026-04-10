import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "容量拠出金増加で法人の負担はどう変わるか｜制度の今後と確認ポイント";
const pageDescription =
  "容量拠出金（容量市場の拠出金）が増加したとき、法人の電気料金にどう影響するかを解説。制度の仕組み、今後の見通し、法人の負担増の確認方法を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "容量拠出金 法人 電気料金",
    "容量市場 電気料金 影響",
    "容量拠出金 増加 負担",
    "法人 電力コスト 容量",
    "容量拠出金 確認",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/capacity-contribution-increase-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/capacity-contribution-increase-impact",
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

const checkItems = [
  {
    item: "プランに容量拠出金がどのように含まれているか",
    description:
      "電力量料金に含まれているプランと、別項目として請求書に記載されるプランがあります。見積書や請求書で確認し、比較の際に混同しないようにします。",
  },
  {
    item: "将来の容量拠出金の想定増加を考慮しているか",
    description:
      "容量市場のオークション結果によって将来の拠出金額は変わります。見積書の単価が現時点の拠出金に基づいている場合、将来増加した際には実質的な電気料金が上昇します。",
  },
  {
    item: "高圧・特別高圧契約での影響額",
    description:
      "大口需要家では容量拠出金の絶対額が大きくなります。年間使用量が大きい法人ほど、単価変化に対する影響額の感度が高くなります。",
  },
];

export default function CapacityContributionIncreaseImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          容量拠出金増加で法人の負担はどう変わるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          容量拠出金は、電力の安定供給を確保するために設けられた容量市場制度に基づいて、電力小売会社が電力消費量に応じて負担するコストです。このコストは最終的に法人の電気料金に転嫁されます。2024年度からは大幅に増加し、法人の電気料金を押し上げる要因の一つとなっています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          容量拠出金は再エネ賦課金と同様に、どのプランを選んでいても費用が発生します。制度への理解と将来の費用増加を見越した準備が重要です。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>容量拠出金の仕組みと電気料金への転嫁経路</li>
            <li>今後の費用増加の見通し</li>
            <li>法人の負担増を確認するポイント</li>
            <li>コスト管理上の対応策</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            容量拠出金とは何か：仕組みの概要
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量市場は、電力の「供給力（発電能力）」を将来にわたって確保するための制度です。発電会社が容量市場で自社の供給能力をオークションに出し、落札すると将来の一定期間にわたって容量報酬を受け取れる仕組みになっています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この容量報酬の財源が「容量拠出金」であり、電力小売業者が自社の販売電力量に応じて負担します。電力小売業者はこのコストを電気料金に上乗せして回収するため、最終的には法人を含む電力消費者が負担することになります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金の詳しい仕組みについては{" "}
            <Link
              href="/capacity-contribution"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金とは
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            増加の背景と今後の見通し
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金が増加している主な背景として、以下の要因が挙げられます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">容量市場の本格稼働：</span>
              2024年度から容量市場の対価が本格的に支払われ始めたことで、拠出金の規模が大幅に拡大しました。
            </li>
            <li>
              <span className="font-semibold text-slate-900">火力発電の維持コスト：</span>
              再エネ拡大の中でも安定供給のためにバックアップ電源（ガス・石炭火力）を維持する必要があり、そのコストが容量報酬として支払われます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">将来の需給見通しの変化：</span>
              電力需要の変化や供給力の過不足に応じてオークション価格が変動するため、将来の拠出金水準は不確実な面があります。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            当面は相当規模の拠出金が継続する見通しであり、法人の電気料金コストの構造的な上昇要因の一つとして認識する必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人の電気料金への転嫁と影響額
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金が電気料金に転嫁される方式はプランや電力会社によって異なりますが、一般的には1kWhあたりの金額として電力量料金に含まれるか、別途明示される形で請求書に記載されます。
          </p>
          <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-5">
            <p className="font-semibold text-slate-900">容量拠出金の影響額（概算）</p>
            <p className="mt-2 text-sm text-slate-600">※ 2024年度の水準（概算）を例として使用</p>
            <div className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
              <p>月間使用量 50,000kWh × 約1〜2円/kWh ＝ 月額 約5〜10万円</p>
              <p>月間使用量 200,000kWh × 約1〜2円/kWh ＝ 月額 約20〜40万円</p>
              <p>年間使用量 1,000,000kWh × 約1〜2円/kWh ＝ 年間 約100〜200万円</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            実際の単価はプランや電力会社によって異なります。自社の電力会社・プランの見積書や請求書で「容量拠出金相当」がどのように記載されているかを確認してください。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人が確認すべきポイント
          </h2>
          <div className="mt-3 space-y-3">
            {checkItems.map((item) => (
              <div
                key={item.item}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.item}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            コスト管理上の対応策
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金はプラン選択では回避できない制度負担ですが、以下の対応が有効です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">請求書の項目を確認する：</span>
              容量拠出金相当の費用がどの項目に含まれているかを把握し、コスト全体の構造を理解します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">複数年の費用試算を行う：</span>
              容量拠出金が増加した場合の年間コスト変動を、使用量をもとに試算しておきます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">使用量削減でリスクを最小化する：</span>
              使用量を削減することで、単価が上昇した際の影響額を最小化できます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">予算策定で将来の上昇を織り込む：</span>
              容量拠出金の将来的な変動を予算の想定幅に含め、急増時の影響を緩和します。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/capacity-contribution",
              title: "容量拠出金とは",
              description: "容量市場制度と拠出金の仕組みを基礎から解説。",
            },
            {
              href: "/renewable-surcharge-increase-impact",
              title: "再エネ賦課金上昇で法人の電気料金はどう変わるか",
              description: "容量拠出金と並ぶ制度負担の上昇リスク。",
            },
            {
              href: "/fuel-adjustment-surge-impact",
              title: "燃料費調整額上昇で法人の電気料金はどう上がるか",
              description: "容量拠出金以外の電気料金上昇要因の解説。",
            },
            {
              href: "/business-electricity-cost-components",
              title: "法人の電気料金の内訳",
              description: "電気料金の全構成要素を整理した解説ページ。",
            },
            {
              href: "/high-voltage-contract-review-points",
              title: "高圧契約の見直しで確認したいこと",
              description: "大口需要家向けの契約確認ポイント。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "容量拠出金を含むコスト全体の確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="容量拠出金を含むコスト全体を試算する"
          description="自社の使用量をもとに、容量拠出金を含む電気料金の総コストをシミュレーターで確認できます。"
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
