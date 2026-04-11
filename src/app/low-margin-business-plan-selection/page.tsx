import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "利益率が低い業種はどちらを選ぶべきか｜電気料金変動と収益への影響";
const pageDescription =
  "食品小売、飲食、物流など利益率が低い業種では、電気料金の変動が収益に直結します。固定プランと市場連動プランを利益率・損益分岐点の観点から比較し、業種別の判断軸を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 利益率 業種",
    "食品小売 電気代 固定プラン",
    "飲食業 電力契約 市場連動",
    "低利益率 電気料金 リスク",
    "物流 電気料金 固定",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/low-margin-business-plan-selection",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/low-margin-business-plan-selection",
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

const industryProfiles = [
  {
    industry: "食品スーパー・食品小売",
    marginRange: "1〜3%",
    electricityRatio: "売上の1.5〜3%",
    riskLevel: "高い",
    analysis:
      "食品スーパーは客単価が低く、値引き競争が激しいため、コスト増を価格転嫁しにくい業種です。冷蔵・冷凍ショーケースの24時間稼働があるため電力使用量も大きく、市場価格が高騰した月の追加コストは営業利益を大きく圧迫します。過去の高騰事例（2022年冬）では、電気料金の上昇だけで年間利益の数割が吹き飛んだ事業者もありました。",
    recommendation: "固定プランを優先",
  },
  {
    industry: "飲食業（チェーン含む）",
    marginRange: "2〜6%",
    electricityRatio: "売上の1〜2.5%",
    riskLevel: "高い",
    analysis:
      "飲食業は食材費・人件費が高い構造で、電気代の上振れが直接利益を削ります。特にチェーン店では多拠点の電気料金変動が累積するため、1店舗では小さな差額も全体では大きな金額になります。市場連動プランを採用している場合、冬季の電力高騰期に本社が各店舗の急激なコスト増に対応しきれないケースがあります。",
    recommendation: "固定プランを優先",
  },
  {
    industry: "物流・倉庫業",
    marginRange: "2〜5%",
    electricityRatio: "売上の1〜4%",
    riskLevel: "高〜中",
    analysis:
      "物流倉庫、特に冷蔵・冷凍倉庫は電力使用量が大きく、電気代が事業コストの重要な部分を占めます。常温倉庫ではやや比率が低くなりますが、大型施設では月間使用量が数十万kWhになることもあります。荷主への請求単価が長期契約で固定されているケースでは、電気代だけが変動するため特に影響を受けやすい構造です。",
    recommendation: "冷凍・冷蔵は固定、常温は要検討",
  },
  {
    industry: "食品製造業",
    marginRange: "3〜8%",
    electricityRatio: "売上の2〜5%",
    riskLevel: "中〜高",
    analysis:
      "食品製造は生産コストに電気代が含まれますが、製品の販売価格は市場や小売バイヤーとの取引条件に左右されます。電気代が上がっても製品価格への転嫁には時間と交渉が必要なため、急激な高騰時には採算が悪化しやすい構造です。大型の熱処理・冷却工程を持つ工場では特に注意が必要です。",
    recommendation: "固定プランを基本、交渉力次第で要検討",
  },
];

const breakEvenImpact = [
  {
    margin: "2%",
    monthlyRevenue: "1億円",
    monthlyProfit: "200万円",
    electricityCost: "150万円",
    risePercent: "20%",
    additionalCost: "30万円",
    profitImpact: "15%減少",
  },
  {
    margin: "5%",
    monthlyRevenue: "1億円",
    monthlyProfit: "500万円",
    electricityCost: "150万円",
    risePercent: "20%",
    additionalCost: "30万円",
    profitImpact: "6%減少",
  },
  {
    margin: "15%",
    monthlyRevenue: "1億円",
    monthlyProfit: "1,500万円",
    electricityCost: "150万円",
    risePercent: "20%",
    additionalCost: "30万円",
    profitImpact: "2%減少",
  },
];

export default function LowMarginBusinessPlanSelectionPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          利益率が低い業種はどちらを選ぶべきか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          食品小売、飲食業、物流業など、売上に対する利益率が低い業種では、電気料金の変動が収益に対して相対的に大きな影響を与えます。固定プランか市場連動プランかを選ぶ際、利益率の観点は特に重要な判断軸になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、利益率が低い業種が電力契約を検討する際の視点と、業種別の判断の目安を整理します。実際の選択は個別条件（使用量、電力会社の提示価格、契約期間など）によって変わりますが、まず自社の収益構造と電気料金の関係を把握することが出発点です。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>利益率と電気料金変動の影響の関係（数値例付き）</li>
            <li>食品小売・飲食・物流・食品製造の業種別分析</li>
            <li>損益分岐点への影響をどう考えるか</li>
            <li>価格転嫁が難しい業種の判断軸</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ利益率が電力プランの選択に影響するのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が変動した場合、その影響の「重さ」は利益率によって大きく異なります。電気代が月30万円増加した場合、利益率2%で月次利益200万円の企業にとっては利益の15%減少に相当しますが、利益率15%で月次利益1,500万円の企業には2%の減少にとどまります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            つまり、同じ絶対額の電気代変動でも、利益率が低いほど収益への打撃は大きくなります。市場連動プランを採用する場合、この「利益率に対する電気代変動の影響」を事前に試算しておくことが不可欠です。
          </p>

          <div className="mt-4 overflow-x-auto">
            <p className="text-sm font-semibold text-slate-900">
              電気代20%上昇時の利益率別影響（月間売上1億円、電気代150万円の場合）
            </p>
            <table className="mt-2 w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">利益率</th>
                  <th className="p-3 text-left font-semibold text-slate-900">月次利益</th>
                  <th className="p-3 text-left font-semibold text-slate-900">追加コスト</th>
                  <th className="p-3 text-left font-semibold text-slate-900">利益への影響</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {breakEvenImpact.map((row) => (
                  <tr key={row.margin}>
                    <td className="p-3 font-medium text-slate-800">{row.margin}</td>
                    <td className="p-3 text-slate-700">{row.monthlyProfit}</td>
                    <td className="p-3 text-slate-700">{row.additionalCost}</td>
                    <td className="p-3 font-medium text-slate-800">{row.profitImpact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-2 text-xs text-slate-500">
              ※ 試算例。実際の影響は使用量・単価・プラン条件によって異なります。
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            価格転嫁が難しい業種の構造的な問題
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金が上昇した場合、その分を製品・サービスの価格に転嫁できれば実質的な収益への影響は限定されます。しかし、以下のような構造的な要因で価格転嫁が困難な業種では、コスト増がそのまま利益減に直結します。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">競合との価格競争が激しい業種：</span>
              食品スーパーや食品小売では、値上げすると来店客数が減少するリスクがあるため、コスト増を価格に転嫁しにくい。
            </li>
            <li>
              <span className="font-semibold text-slate-900">長期固定の受注単価がある業種：</span>
              物流の荷主契約、食品メーカーの小売向け売値など、変更の頻度が限られる取引では電気代の上昇をすぐに転嫁できない。
            </li>
            <li>
              <span className="font-semibold text-slate-900">公定価格・公定料金の業種：</span>
              医療・介護・保育など、報酬単価が法令・制度で決まっている業種では価格転嫁の手段がない。
            </li>
            <li>
              <span className="font-semibold text-slate-900">消費者向けサービスの心理的な上限がある業種：</span>
              飲食業では、電気代の上昇を理由に価格を上げると客離れのリスクがある。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別の分析と判断の目安
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は、利益率が低い主要業種の収益構造と電力プラン選択の考え方です。
          </p>
          <div className="mt-4 space-y-4">
            {industryProfiles.map((profile) => (
              <div
                key={profile.industry}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-base font-semibold text-slate-900">{profile.industry}</p>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    profile.riskLevel === "高い"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    変動リスク：{profile.riskLevel}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-600">
                  <span>利益率の目安：{profile.marginRange}</span>
                  <span>電気代比率の目安：{profile.electricityRatio}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-700">{profile.analysis}</p>
                <p className="mt-2 text-sm font-medium text-sky-800">
                  方向性の目安：{profile.recommendation}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 利益率・電気代比率はあくまで業界平均的な目安です。個社の条件によって大きく異なります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            損益分岐点への影響を試算する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            利益率の低い業種では、電気料金の変動が損益分岐点（売上がいくらあれば黒字になるか）を変化させます。市場連動プランで月次の電気代が増加した場合、損益分岐点を達成するために必要な売上が増加します。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            たとえば月間固定費の一部として電気代が増加すると、損益分岐点は「電気代増加額 ÷ 限界利益率」だけ上昇します。電気代が30万円増加して限界利益率が30%の場合、損益分岐点の売上は100万円上昇する計算になります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このような試算を通じて、自社にとって市場連動プランのコスト変動が「許容できる範囲かどうか」を具体的な売上数値で評価することができます。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：利益率が低い業種の判断ポイント
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電気代が売上の2%を超える場合、市場価格の高騰は利益に対して重大なリスクになりうる</li>
            <li>価格転嫁が難しい業種では、コスト変動のリスクを取るよりも固定化するほうが経営安定に資する</li>
            <li>市場連動プランを検討する場合でも、高騰シナリオでの利益への影響を数値で把握してから判断する</li>
            <li>食品スーパー・飲食・冷凍物流については、固定プランを基本とし、差額を定量評価したうえで市場連動を検討する順序が現実的</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "利益率以外の観点も含めた固定プランとの相性を整理。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電気料金見直し",
              description: "食品小売に特化した電力コスト削減の考え方。",
            },
            {
              href: "/warehouse-electricity-cost-review",
              title: "物流倉庫の電気料金見直し",
              description: "倉庫・物流業の電力コスト構造と見直しポイント。",
            },
            {
              href: "/budget-focused-plan-selection",
              title: "予算管理を重視する法人はどちらを選ぶべきか",
              description: "予算変動の許容度から電力プランを選ぶ考え方。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "両プランの料金構造とリスクの差を比較する。",
            },
            {
              href: "/factory-fixed-vs-market-linked",
              title: "工場は固定と市場連動のどちらが向くか",
              description: "製造業の稼働パターンと負荷から考えるプラン選択。",
            },
          ]}
        />

        <ContentCta
          heading="自社の収益への影響をシミュレーターで確認する"
          description="使用量・契約電力を入力して、市場価格高騰時の追加コストを試算できます。利益への影響を数値で把握したうえでプランを比較してください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="low-margin-business-plan-selection" />
      </div>
    </main>
  );
}
