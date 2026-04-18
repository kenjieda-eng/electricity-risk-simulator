import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "電力自由化後の法人電気料金はどう変わったか｜2016年からの構造変化を整理";
const pageDescription =
  "2016年の電力完全自由化以降、法人の電気料金と市場構造がどう変わったかを整理。新電力のシェア推移、価格競争から撤退まで、自由化が法人にもたらしたメリットとリスクを解説。";
const pageUrl = "https://simulator.eic-jp.org/electricity-market-liberalization-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力自由化 法人",
    "電力自由化 効果",
    "新電力 シェア 推移",
    "電力自由化 2016",
    "新電力 撤退",
    "電気料金 自由化後",
    "電力 自由化 リスク",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- データ定義 ---

type LiberalizationPhase = {
  year: string;
  milestone: string;
  target: string;
  background: string;
  corporateImpact: string;
};

const LIBERALIZATION_PHASES: LiberalizationPhase[] = [
  {
    year: "2000年",
    milestone: "特別高圧の自由化",
    target: "2,000kW以上の大口需要家",
    background: "電力コスト削減・産業競争力強化のための規制緩和の第一弾",
    corporateImpact: "大規模工場・百貨店などが相対交渉による料金交渉を開始",
  },
  {
    year: "2004年",
    milestone: "高圧の自由化",
    target: "50kW以上の高圧需要家",
    background: "特高自由化の成果を踏まえ対象を中規模法人に拡大",
    corporateImpact:
      "中規模オフィス・商業施設・中小工場が新電力との交渉・切り替えを選択可能に",
  },
  {
    year: "2016年4月",
    milestone: "電力の完全自由化",
    target: "低圧（一般家庭・小規模法人含む全需要家）",
    background: "東日本大震災後のエネルギー政策見直し・電力システム改革の総仕上げ",
    corporateImpact:
      "全法人が旧一般電気事業者（大手10社）以外からの調達を選択できるようになった",
  },
];

type NewPowerShare = {
  year: number;
  overallShare: string;
  corporateShare: string;
  operatorsCount: string;
  note: string;
};

const NEW_POWER_SHARE_TREND: NewPowerShare[] = [
  {
    year: 2016,
    overallShare: "約10%",
    corporateShare: "約15%",
    operatorsCount: "約250社",
    note: "完全自由化初年度。価格競争が活発化",
  },
  {
    year: 2018,
    overallShare: "約14%",
    corporateShare: "約20%",
    operatorsCount: "約500社",
    note: "切り替え件数が急増。低圧でも新電力が普及",
  },
  {
    year: 2020,
    overallShare: "約18%",
    corporateShare: "約23%",
    operatorsCount: "約700社",
    note: "コロナ禍でも切り替えは継続",
  },
  {
    year: 2021,
    overallShare: "約22%",
    corporateShare: "約28%",
    operatorsCount: "約720社",
    note: "ピーク水準。冬の寒波でJEPX高騰が始まる",
  },
  {
    year: 2022,
    overallShare: "約20%",
    corporateShare: "約25%",
    operatorsCount: "約600社",
    note: "ウクライナ危機・燃料高騰で小規模新電力が撤退開始",
  },
  {
    year: 2023,
    overallShare: "約18%",
    corporateShare: "約22%",
    operatorsCount: "約500社",
    note: "最終保障供給に移行する法人が急増",
  },
  {
    year: 2024,
    overallShare: "約17%",
    corporateShare: "約21%",
    operatorsCount: "約470社",
    note: "市場は安定化方向だが競争力のある事業者数は減少",
  },
  {
    year: 2025,
    overallShare: "約17%",
    corporateShare: "約21%",
    operatorsCount: "約450社",
    note: "大手・中堅中心の寡占化が進む",
  },
];

type MeritDemerits = {
  category: string;
  merit: string;
  risk: string;
};

const MERIT_DEMERIT_TABLE: MeritDemerits[] = [
  {
    category: "価格競争",
    merit: "新電力の参入で大手10社も値下げ交渉に応じるケースが増加。2016〜2020年は実質的な低廉化期",
    risk:
      "市場価格連動型プランでは燃料高騰時に大幅な請求増のリスクがあり、競争の恩恵が逆回転する",
  },
  {
    category: "選択肢の拡大",
    merit: "再エネ100%プラン・固定価格プラン・時間帯別プランなど多様な契約形態が登場",
    risk:
      "選択肢が多すぎて比較困難。情報の非対称性が大きく、法人側の理解なく切り替えると不利になるケースも",
  },
  {
    category: "契約柔軟性",
    merit:
      "1〜3年の固定期間での見直しが可能。需要の変化や相場動向に合わせた切り替えができる",
    risk:
      "切り替え時の解約違約金・手続き期間の問題。繁忙期に切り替えできないケースがある",
  },
  {
    category: "供給安定性",
    merit: "大手10社の送配電ネットワークはどの小売を使っても同一。物理的な停電リスクは変わらない",
    risk:
      "小売事業者が倒産・撤退した場合、最終保障供給に自動移行し割高な料金が適用される",
  },
  {
    category: "情報透明性",
    merit: "競争により料金構造の開示が進み、燃調費・再エネ賦課金の分離記載が普及",
    risk:
      "新電力の料金設計が複雑で比較困難なケースが多い。見積もり条件の違いで実コストが見えにくい",
  },
];

type NewPowerWithdrawalStep = {
  period: string;
  event: string;
  impact: string;
};

const WITHDRAWAL_TIMELINE: NewPowerWithdrawalStep[] = [
  {
    period: "2021年1月",
    event: "寒波によるJEPX価格の急騰（200円/kWhを超える時間帯が続く）",
    impact: "市場連動型プランで調達する新電力が仕入れコストの急騰に直面",
  },
  {
    period: "2021年〜2022年",
    event: "ロシアによるウクライナ侵攻・LNG価格の歴史的高騰",
    impact: "資源依存の高い小規模新電力で財務悪化が加速。一部は供給停止",
  },
  {
    period: "2022年春〜夏",
    event: "需給逼迫警報・節電要請の発動",
    impact: "調達コストが契約価格を上回る逆ザヤが常態化。撤退判断を迫られる事業者が増加",
  },
  {
    period: "2022年〜2023年",
    event: "新電力の大量撤退・倒産（2021年比で100社以上が撤退または廃業）",
    impact: "契約法人が最終保障供給に自動移行。料金が旧来の規制料金水準以上になるケースも",
  },
  {
    period: "2023年〜2024年",
    event: "大手・中堅事業者への集約が進み、市場の構造変化が一段落",
    impact: "競争環境は維持されつつも、選択肢は実質的に縮小。価格競争力は低下傾向",
  },
];

type PriceLevelTransition = {
  year: number;
  highVoltageUnitPrice: string;
  liberalizationContext: string;
  keyFactor: string;
};

const PRICE_LEVEL_TRANSITION: PriceLevelTransition[] = [
  {
    year: 2016,
    highVoltageUnitPrice: "約13〜15円/kWh",
    liberalizationContext: "完全自由化元年。新電力の参入で競争激化",
    keyFactor: "原油安・LNG安が下支え。競争的な料金水準",
  },
  {
    year: 2019,
    highVoltageUnitPrice: "約14〜16円/kWh",
    liberalizationContext: "新電力シェアが拡大。市場は成熟段階",
    keyFactor: "消費税8%→10%の影響（2019年10月）。全体水準が微増",
  },
  {
    year: 2022,
    highVoltageUnitPrice: "約18〜25円/kWh",
    liberalizationContext: "新電力の大量撤退期。最終保障供給に移行する法人が急増",
    keyFactor: "燃料高騰・JEPX高騰が直撃。補助金（激変緩和措置）が緩衝",
  },
  {
    year: 2025,
    highVoltageUnitPrice: "約17〜22円/kWh",
    liberalizationContext: "市場再編後の安定期。大手中心の寡占化が進む",
    keyFactor: "補助金終了後の本来水準。再エネ・容量拠出金の増加が上乗せ",
  },
];

const FIVE_PERSPECTIVES = [
  {
    title: "供給者の財務安定性を確認する",
    body: "自由化後の市場では、財務基盤の弱い事業者が撤退・倒産するリスクがあります。新電力と契約する際は、事業者の資本規模・調達源の多様性・親会社の信用力を確認することが重要です。",
  },
  {
    title: "「安さ」の根拠を問う",
    body: "自由化当初に「大手より安い」を訴求した事業者の多くが、燃料高騰局面で価格優位性を失いました。安さの根拠が市場連動調達だけである場合、上昇局面でのリスクを正確に把握する必要があります。",
  },
  {
    title: "固定価格と変動価格のリスクを理解する",
    body: "固定型は相場が上がっても請求が変わらない安心感がありますが、相場が下がった場合のメリットを享受できません。変動型は節約できる可能性がある一方、急騰時に予算超過が起きます。どちらが自社に合うかを年度ごとに検討することが必要です。",
  },
  {
    title: "最終保障供給への自動移行を知っておく",
    body: "供給者が撤退した場合、法人の電気は自動的に地域の送配電会社（旧一般電気事業者）による最終保障供給に移行します。この料金は一般的に高く設定されており、早期に代替供給者を見つけることが重要です。",
  },
  {
    title: "自由化を「コスト削減機会」だけでなく「リスク管理」として捉える",
    body: "自由化は競争による価格低下の機会を提供しましたが、それは市場が安定している局面に限られます。燃料市況・需給逼迫・供給者の信用リスクを含めた総合的なリスク管理の枠組みとして電力調達を捉えることが、現代の法人担当者に求められています。",
  },
];

export default function ElectricityMarketLiberalizationImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力自由化後の法人電気料金はどう変わったか｜2016年からの構造変化を整理"
        description="2016年の電力完全自由化以降、法人の電気料金と市場構造がどう変わったかを整理。新電力のシェア推移、価格競争から撤退まで、自由化が法人にもたらしたメリットとリスクを解説。"
        url="https://simulator.eic-jp.org/electricity-market-liberalization-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力自由化後の法人電気料金はどう変わったか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link href="/articles/price-trends" className="underline-offset-2 hover:underline">
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電力自由化後の構造変化</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力自由化後の法人電気料金はどう変わったか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2016年4月の電力完全自由化から約10年が経過しました。新電力の参入による価格競争、
          2022年の燃料高騰と大量撤退、その後の市場再編——法人の電力調達環境は大きく変化しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは電力自由化の3段階の歴史、新電力シェアの推移、自由化がもたらしたメリットとリスク、
          2022年の撤退の経緯、そして料金水準の変化を、データと表で体系的に整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 電力自由化の段階 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電力自由化の3段階</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            日本の電力自由化は2000年から段階的に進められました。法人への影響が最も大きかった転換点ごとに整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    時期
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    自由化の段階
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    対象
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    背景
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    法人への影響
                  </th>
                </tr>
              </thead>
              <tbody>
                {LIBERALIZATION_PHASES.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700 whitespace-nowrap">
                      {row.year}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.milestone}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.target}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.background}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.corporateImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 新電力シェア推移 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            新電力のシェア推移（2016〜2025年）
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            完全自由化後、新電力のシェアは2021年にピークを迎えた後、燃料高騰と大量撤退を経て低下しています。
            法人向けシェアは家庭向けより高く、切り替えの活発さを示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    年
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    全体シェア（電力量ベース）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    法人向けシェア（高圧以上）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    登録小売事業者数
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    主なトピック
                  </th>
                </tr>
              </thead>
              <tbody>
                {NEW_POWER_SHARE_TREND.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.year === 2021
                        ? "bg-sky-50 font-medium"
                        : row.year >= 2022
                          ? "bg-orange-50"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                      {row.year}年
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.overallShare}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.corporateShare}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.operatorsCount}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600 text-xs">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※シェア・事業者数は公開データをもとにした推計値。出所：資源エネルギー庁「電力需要の概要」等。
          </p>
        </section>

        {/* メリットとリスクの比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自由化がもたらしたメリットとリスクの比較
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            電力自由化は競争による価格低下・選択肢拡大というメリットをもたらした一方、
            新たなリスクも生み出しました。5つの観点から整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800 w-1/6">
                    観点
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-sky-800 w-5/12">
                    自由化のメリット
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-orange-800 w-5/12">
                    自由化のリスク
                  </th>
                </tr>
              </thead>
              <tbody>
                {MERIT_DEMERIT_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                      {row.category}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.merit}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2022年の新電力撤退の経緯 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2022年の新電力大量撤退——時系列で見る経緯
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            2021〜2023年にかけて起きた新電力の大量撤退は、電力自由化後最大の市場ショックでした。
            その経緯を5つのステップで整理します。
          </p>
          <div className="mt-4 space-y-3">
            {WITHDRAWAL_TIMELINE.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-700">
                    {i + 1}
                  </div>
                  {i < WITHDRAWAL_TIMELINE.length - 1 && (
                    <div className="mt-1 h-full w-0.5 bg-orange-100" />
                  )}
                </div>
                <div className="pb-4">
                  <p className="text-sm font-semibold text-orange-700">{step.period}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{step.event}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{step.impact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm leading-7 text-slate-700">
              <span className="font-semibold text-orange-800">教訓：</span>
              自由化の恩恵は市場が安定している局面に集中します。燃料市況が急変した際には、
              競争的な価格を提示していた事業者ほど経営悪化のリスクが高くなります。
              法人は「安さ」だけでなく「供給者の財務安定性」を契約選択の基準に加える必要があります。
            </p>
          </div>
        </section>

        {/* 料金水準の変化 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自由化後の法人電気料金水準の変化
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            自由化後の法人（高圧）向け電気料金は、競争激化による下落期→高止まり期→急騰期→再調整期という
            4段階の変化をたどりました。以下に年次の水準感と背景を整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-sky-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    時点
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    高圧法人の電力量単価目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    自由化との関係
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">
                    主な価格変動要因
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICE_LEVEL_TRANSITION.map((row, i) => (
                  <tr
                    key={i}
                    className={
                      row.year === 2022
                        ? "bg-orange-50"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-slate-50"
                    }
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900 whitespace-nowrap">
                      {row.year}年
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-orange-700">
                      {row.highVoltageUnitPrice}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.liberalizationContext}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.keyFactor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※単価はオール込み（基本料金除く電力量単価＋燃調費＋再エネ賦課金の合計目安）。実際の水準は契約・地域・使用量により異なります。
          </p>
        </section>

        {/* 「自由化＝安くなる」は正しかったか？ */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「自由化＝安くなる」は正しかったか？
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力自由化の当初の期待は「競争による価格低下」でした。2016〜2020年の間は一定の実現がありました。
            新電力の参入で高圧法人でも1〜2円/kWh程度の低廉化が確認されており、
            積極的に切り替えた法人は恩恵を受けました。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            しかし2021年以降、この図式は崩れます。燃料市況の高騰が全事業者に同時に影響した結果、
            「新電力が大手より安い」という前提は成立しなくなりました。
            むしろ財務基盤の弱い新電力は調達コストが契約価格を上回る「逆ザヤ」に陥り、
            撤退を余儀なくされたのです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「自由化＝安くなる」は<span className="font-bold text-slate-900">燃料が安定している平常時には概ね正しい</span>ですが、
            燃料高騰局面では逆転するリスクがあります。
            自由化後の電力市場は、単純な「安さの競争」から「調達安定性と価格の総合評価」へと変化しています。
          </p>
        </section>

        {/* 法人が持つべき5つの視点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自由化時代に法人が持つべき5つの視点
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {FIVE_PERSPECTIVES.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>
              電力自由化は2000年・2004年・2016年の3段階で進み、2016年に全法人が選択できる環境が整った。
            </li>
            <li>
              新電力シェアは2021年に約22%でピークを迎えた後、燃料高騰と撤退で2025年には約17%まで低下。
            </li>
            <li>
              自由化のメリット（価格競争・選択肢）は平常時の燃料安定期に集中し、高騰局面では逆転リスクがある。
            </li>
            <li>
              2022年の大量撤退は、市場連動型調達に依存した新電力が燃料高騰に耐えられなかったことが主因。
            </li>
            <li>
              現在の法人電気料金は自由化前より約3〜5円/kWh高い水準で推移しており、「自由化＝安い」は成立しにくい状況。
            </li>
            <li>
              法人は「安さ」だけでなく供給安定性・財務健全性・契約形態のリスクを含めた総合評価が求められる。
            </li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-market-liberalization-impact" terms={["市場連動プラン", "固定プラン", "JEPX", "最終保障供給", "燃料費調整額", "高圧電力"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-price-trend-10-years",
              title: "法人向け電気料金の推移を10年で見る",
              description: "特別高圧・高圧・低圧のデータで10年の料金推移と主要転換点を整理。",
            },
            {
              href: "/last-resort-supply-history",
              title: "最終保障供給の仕組みと歴史",
              description: "新電力撤退時に自動移行する最終保障供給の制度と料金水準を解説。",
            },
            {
              href: "/market-price-adjustment-risk",
              title: "市場価格連動型プランのリスク",
              description: "JEPX連動プランの仕組みと急騰時の請求増リスクを具体的に解説。",
            },
            {
              href: "/electricity-rate-revision-mechanism",
              title: "電気料金の改定メカニズム",
              description: "規制料金と自由化料金それぞれの改定の仕組みと法人への影響を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電力調達リスクをシミュレーションする"
          description="自由化後の電力市場の変化を踏まえ、現在の契約が将来の燃料高騰・供給者リスクにどう影響するかをシミュレーターで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
