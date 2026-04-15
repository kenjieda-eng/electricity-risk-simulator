import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "ワーストシナリオとは｜全要因重複時の上振れ試算と備え方";
const pageDescription =
  "法人・企業・自治体の電気料金について、LNG急騰・円安・JEPX急騰・再エネ賦課金・容量拠出金・補助金終了が重複するワーストケースを試算。月5万kWhで最大+175万円/月の影響と備え方を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ワーストシナリオ 電気料金",
    "法人 電気代 リスク",
    "企業 自治体 電力契約 見直し",
    "市場連動 固定 比較",
    "電気料金 シミュレーション",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/worst-case-electricity-cost-risk",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/worst-case-electricity-cost-risk",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "ワーストシナリオとは",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const worstCaseComponents = [
  {
    factor: "LNG価格急騰",
    single: "+3〜5円",
    worst: "+5〜8円",
    probability: "中（数年に1回）",
  },
  {
    factor: "円安進行（+20円）",
    single: "+1〜2円",
    worst: "+2〜3円",
    probability: "中",
  },
  {
    factor: "JEPX急騰（猛暑+需給逼迫）",
    single: "+5〜15円",
    worst: "+10〜20円",
    probability: "低（市場連動型のみ）",
  },
  {
    factor: "再エネ賦課金増",
    single: "+0.5〜1円",
    worst: "+1円",
    probability: "高（制度的）",
  },
  {
    factor: "容量拠出金増",
    single: "+0.3〜1円",
    worst: "+1円",
    probability: "高（制度的）",
  },
  {
    factor: "補助金終了",
    single: "+1.8〜3.5円",
    worst: "+3.5円",
    probability: "確定済み",
  },
  {
    factor: "複合時の合計",
    single: "―",
    worst: "+15〜35円/kWh",
    probability: "低",
    isTotal: true,
  },
];

const monthlySimulation = [
  {
    scenario: "通常時",
    priceIncrease: "±0円",
    monthlyIncrease: "基準",
    annualIncrease: "基準",
  },
  {
    scenario: "軽度リスク（燃調+再エネ）",
    priceIncrease: "+3円/kWh",
    monthlyIncrease: "+15万円",
    annualIncrease: "+180万円",
  },
  {
    scenario: "中度リスク（+円安+容量）",
    priceIncrease: "+8円/kWh",
    monthlyIncrease: "+40万円",
    annualIncrease: "+480万円",
  },
  {
    scenario: "重度リスク（+LNG+JEPX）",
    priceIncrease: "+20円/kWh",
    monthlyIncrease: "+100万円",
    annualIncrease: "+1,200万円",
  },
  {
    scenario: "ワーストケース（全要因重複）",
    priceIncrease: "+35円/kWh",
    monthlyIncrease: "+175万円",
    annualIncrease: "+2,100万円",
    isWorst: true,
  },
];

const preparationChecklist = [
  "契約メニューが市場連動か固定かを確認し、JEPX急騰時の影響範囲を把握する",
  "燃料費調整額・容量拠出金・再エネ賦課金を請求書で個別に確認し、上振れ項目を特定する",
  "年間予算に「中度リスク（+8円/kWh相当）」の安全幅を加えた予算案を作成しておく",
  "補助金終了・再エネ賦課金増など確定済みの上振れ要因を先に予算に反映する",
  "契約更新の6ヶ月前から複数社に見積を依頼し、ワーストケース単価での比較を行う",
];

export default function WorstCaseElectricityCostRiskPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">ワーストケースリスク</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          ワーストシナリオとは｜全要因重複時の上振れ試算と備え方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ワーストシナリオは、最悪を煽るための機能ではなく、法人・企業・自治体が予算や契約見直しを保守的に検討するための確認手段です。
          単月の価格だけでは見えにくい上振れ幅を先に把握しておくことで、説明資料や比較判断の前提をそろえやすくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、シミュレーターで扱う主要リスク要因の全体像と、各要因が重複した場合の定量的な影響を整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストシナリオは何を確認するためのものか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ワーストシナリオは、猛暑、厳冬、円安、地政学、災害といった主要な上振れリスク要因を一括で反映し、
            電気料金・電気代がどの程度上がり得るかを確認する考え方です。単一要因だけを見た場合より、複数要因が重なるケースに対応しやすくなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            法人や自治体では、予算説明、庁内説明、稟議、調達比較の場面で「どこまで上振れを見込むか」が重要です。
            ワーストシナリオは、その説明を感覚ではなく構造で示すための土台になります。
          </p>
        </section>

        {/* Table 1: ワーストケース構成要素 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストケース構成要素</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            主要6要因それぞれの単独影響と、全要因が重複した場合のワーストケース影響を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">リスク要因</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">単独での影響（円/kWh）</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">ワーストケースでの影響</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">発生確率</th>
                </tr>
              </thead>
              <tbody>
                {worstCaseComponents.map((row) => (
                  <tr
                    key={row.factor}
                    className={`border-b border-slate-100 ${row.isTotal ? "bg-amber-50 font-semibold" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{row.factor}</td>
                    <td className="px-4 py-3 text-slate-700">{row.single}</td>
                    <td className={`px-4 py-3 ${row.isTotal ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.worst}</td>
                    <td className="px-4 py-3 text-slate-700">{row.probability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 影響幅は目安。契約種別（市場連動・固定）や電力会社・エリアにより異なります。JEPX急騰は市場連動プランのみ直接影響します。
          </p>
        </section>

        {/* Table 2: 月額シミュレーション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストケース月額シミュレーション（月5万kWh想定）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            月間使用量5万kWhの事業所を例に、リスクの重なり方別の月額増加・年間増加を試算します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">シナリオ</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">単価上昇幅</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">月額増加</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">年間増加</th>
                </tr>
              </thead>
              <tbody>
                {monthlySimulation.map((row) => (
                  <tr
                    key={row.scenario}
                    className={`border-b border-slate-100 ${row.isWorst ? "bg-red-50 font-semibold" : "hover:bg-slate-50"}`}
                  >
                    <td className="px-4 py-3 text-slate-800">{row.scenario}</td>
                    <td className="px-4 py-3 text-slate-700">{row.priceIncrease}</td>
                    <td className={`px-4 py-3 ${row.isWorst ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.monthlyIncrease}</td>
                    <td className={`px-4 py-3 ${row.isWorst ? "text-red-700 font-bold" : "text-slate-700"}`}>{row.annualIncrease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 月5万kWhの事業所を想定した試算。基本料金・消費税は含みません。実際の影響は契約種別・エリアにより異なります。
          </p>
        </section>

        {/* Checklist */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストケースへの備え チェックリスト</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下5項目を確認しておくことで、ワーストケース発生時の影響を最小限に抑えやすくなります。
          </p>
          <ul className="mt-4 space-y-3">
            {preparationChecklist.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-400 text-xs font-bold text-slate-500">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">反映される5つの主要リスク要因</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <Link href="/electricity-cost-risk-heatwave" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                猛暑リスク
              </Link>
              ：7月〜9月に需給が逼迫しやすく、空調負荷と単価上昇が重なる可能性があります。
            </li>
            <li>
              <Link
                href="/electricity-cost-risk-severe-winter"
                className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                厳冬リスク
              </Link>
              ：12月〜2月の暖房需要増により、電気代が上振れしやすくなります。
            </li>
            <li>
              <Link
                href="/electricity-cost-risk-yen-depreciation"
                className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                円安リスク
              </Link>
              ：輸入燃料の円換算コストが上昇し、燃料費調整額や見積単価へ波及しやすくなります。
            </li>
            <li>
              <Link
                href="/electricity-cost-risk-geopolitics"
                className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                地政学リスク
              </Link>
              ：中東情勢や国際紛争による調達不安が、燃料価格や市場価格を押し上げる場合があります。
            </li>
            <li>
              <Link href="/electricity-cost-risk-disaster" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
                災害リスク
              </Link>
              ：発電所停止や供給力低下により、発生月と翌月の電気料金へ影響する可能性があります。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ電気料金・電気代は複数要因で大きく上がるのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需要増、燃料高、為替、供給不安が同時に起こると、単独要因のときより電気料金への影響が大きくなりやすくなります。
            一部は市場価格に直接表れ、別の一部は燃料費調整額や契約更新時の見積条件として表れます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            そのため、請求書の一項目だけで判断すると、上振れの全体像を見落としがちです。
            法人・企業・自治体の実務では、基本料金、従量料金、調整項目、契約条件を分けて確認することが重要です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">市場連動プランと固定プランでは何が違うのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <Link href="/market-linked-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プラン
            </Link>
            は、短期の市場価格変動を受けやすく、上振れの影響が比較的見えやすい特徴があります。
            一方で、
            <Link href="/fixed-price-plan" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              固定プラン
            </Link>
            は毎月の単価が急変しにくい反面、契約更新時や調整項目で影響が出る場合があります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり「固定だから常に安心」「市場連動だから常に不利」という単純な話ではありません。両者の違いは{" "}
            <Link href="/market-linked-vs-fixed" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              市場連動プランと固定プランの比較ページ
            </Link>
            で整理したうえで、リスク許容度と運用体制に合わせて判断することが大切です。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人・企業・自治体でワーストシナリオを確認する意味</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            ワーストシナリオを確認しておくと、年間予算の安全幅をどこまで確保するかを考えやすくなります。特に、
            議会説明、庁内説明、経営会議、調達稟議では、変動リスクを含めた説明が求められる場面が少なくありません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            単価比較だけでなく、変動リスク込みで契約を検討することで、見積時点と運用時点のギャップを抑えやすくなります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">ワーストシナリオを見た後に確認したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自社・自施設の契約メニューが市場連動か固定か</li>
            <li>契約更新時期と更新条件</li>
            <li>請求書・見積書で変動が出やすい項目</li>
            <li>比較時に同条件で照合できているか</li>
          </ul>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            請求構造の確認は{" "}
            <Link href="/fuel-cost-adjustment" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              燃料費調整額の解説
            </Link>
            や{" "}
            <Link href="/why-business-electricity-prices-rise" className="text-slate-900 underline underline-offset-2 hover:text-slate-700">
              法人の電気料金が上がる理由
            </Link>
            のページが参考になります。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="worst-case-electricity-cost-risk" terms={["燃料費調整額", "市場価格調整額", "JEPX", "再エネ賦課金", "容量拠出金", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="個別リスクと契約メニューの理解をつなげると、見直し判断を具体化しやすくなります。"
          links={[
            {
              href: "/electricity-cost-risk-heatwave",
              title: "猛暑リスクの解説",
              description: "夏場に電気料金が上振れしやすい背景と確認ポイントを整理しています。",
            },
            {
              href: "/electricity-cost-risk-severe-winter",
              title: "厳冬リスクの解説",
              description: "冬場の暖房需要増が請求額に与える影響を確認できます。",
            },
            {
              href: "/electricity-cost-risk-yen-depreciation",
              title: "円安リスクの解説",
              description: "輸入燃料コストと電気代の関係を通年視点で整理できます。",
            },
            {
              href: "/electricity-cost-risk-geopolitics",
              title: "地政学リスクの解説",
              description: "調達不安と市場変動のつながりを理解できます。",
            },
            {
              href: "/electricity-cost-risk-disaster",
              title: "災害リスクの解説",
              description: "供給力低下が発生月と翌月に与える影響を確認できます。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "契約条件の違いを同じ前提で比較できます。",
            },
          ]}
        />

        <ContentCta
          heading="次のステップとして比較・試算する"
          description="ワーストシナリオの考え方を押さえた後は、現在契約と候補条件を比較し、自社に近い条件でシミュレーションしておくと判断しやすくなります。"
          links={[
            { href: "/compare", label: "比較ページを見る" },
            { href: "/simulate", label: "シミュレーションを始める" },
          ]}
        />
      </section>
    </main>
  );
}
