import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "再エネ拡大は法人電気料金を下げるのか上げるのか｜両面の影響を整理";
const pageDescription =
  "再生可能エネルギーの拡大が法人電気料金に与える影響を両面から分析。再エネ賦課金（上昇圧力）とJEPX押し下げ効果のバランス、系統安定化コスト、長期展望を整理。";
const pageUrl =
  "https://simulator.eic-jp.org/renewable-energy-expansion-price-impact";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネ 電気料金 影響",
    "再エネ賦課金 上昇",
    "JEPX 押し下げ効果",
    "再生可能エネルギー 法人 電気料金",
    "メリットオーダー効果",
    "系統安定化コスト",
    "再エネ 2030 見通し",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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

const upwardFactors = [
  {
    factor: "再エネ賦課金（FIT/FIP）",
    mechanism: "FIT買取費用を全需要家に広く薄く転嫁",
    scale: "2024年度：3.49円/kWh（年間5兆円超の買取費用）",
    direction: "上昇",
  },
  {
    factor: "容量拠出金",
    mechanism: "再エネ変動に対応する調整力・予備力の確保費用",
    scale: "2024年度開始。2027年度以降に本格拡大の見込み",
    direction: "上昇",
  },
  {
    factor: "系統増強コスト",
    mechanism: "遠隔地（北海道・九州）からの送電線整備費",
    scale: "10年間で4〜7兆円規模の投資計画（経産省試算）",
    direction: "上昇",
  },
];

const downwardFactors = [
  {
    factor: "JEPXメリットオーダー押し下げ",
    mechanism: "限界費用ゼロの再エネが市場価格形成に介入し卸値を下げる",
    scale: "晴天・強風時にスポット価格が0〜1円/kWhになる時間帯が増加",
    direction: "下降",
  },
  {
    factor: "燃料費削減",
    mechanism: "火力発電の焚き量が減り、燃料費調整額が下がる方向に作用",
    scale: "再エネ比率30%時点でLNG焚き量▲10〜15%の効果（試算）",
    direction: "下降",
  },
  {
    factor: "長期PPA・オフサイトPPA",
    mechanism: "固定単価の長期契約で相場変動リスクを回避できる",
    scale: "10〜20年固定で7〜12円/kWh台の契約事例が増加中",
    direction: "下降",
  },
];

const reTrendData = [
  {
    year: "2015年度",
    reRatio: "約12%",
    unitPrice: "約16.8円/kWh",
    surcharge: "1.58円/kWh",
    note: "FIT開始直後。賦課金は低水準",
  },
  {
    year: "2019年度",
    reRatio: "約18%",
    unitPrice: "約18.3円/kWh",
    surcharge: "2.95円/kWh",
    note: "太陽光急増。賦課金が急拡大",
  },
  {
    year: "2022年度",
    reRatio: "約22%",
    unitPrice: "約26.5円/kWh",
    surcharge: "3.45円/kWh",
    note: "燃料高騰と賦課金の二重高騰",
  },
  {
    year: "2025年度",
    reRatio: "約28〜30%",
    unitPrice: "約25〜27円/kWh（推定）",
    surcharge: "3.49円/kWh",
    note: "燃料費は落ち着くも賦課金は高止まり",
  },
];

const scenarios2030 = [
  {
    scenario: "楽観シナリオ",
    assumption:
      "再エネ比率40%達成、系統整備が計画通り進む、卸価格押し下げ効果が顕在化",
    surchargeChange: "横ばい〜微減（買取費用総額の頭打ち）",
    spotEffect: "晴天帯の卸価格が大幅低下、年間平均で▲1〜2円/kWh効果",
    overallImpact: "相殺されて単価は微減〜横ばい",
  },
  {
    scenario: "中立シナリオ",
    assumption:
      "再エネ比率38%前後、系統コストが当初想定を超過、容量拠出金が本格化",
    surchargeChange: "微増（年率+0.1〜0.2円/kWh）",
    spotEffect: "押し下げ効果は限定的、時間帯格差が拡大",
    overallImpact: "現状水準から+1〜2円/kWh程度の緩やかな上昇",
  },
  {
    scenario: "悲観シナリオ",
    assumption:
      "系統制約による再エネ出力制御が頻発、追加コストが増大、容量拠出金が急拡大",
    surchargeChange: "増加（賦課金+容量拠出金で合計+1〜2円/kWh超）",
    spotEffect: "制御増加で押し下げ効果が薄れ、逆に夜間・曇天帯で高騰",
    overallImpact: "現状から+3〜5円/kWh規模のリスクあり",
  },
];

export default function RenewableEnergyExpansionPriceImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="再エネ拡大は法人電気料金を下げるのか上げるのか｜両面の影響を整理"
        description="再生可能エネルギーの拡大が法人電気料金に与える影響を両面から分析。再エネ賦課金（上昇圧力）とJEPX押し下げ効果のバランス、系統安定化コスト、長期展望を整理。"
        url="https://simulator.eic-jp.org/renewable-energy-expansion-price-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネ拡大は法人電気料金を下げるのか上げるのか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link
              href="/"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ホーム
            </Link>
          </li>
          <li className="select-none">/</li>
          <li>
            <Link
              href="/articles/price-trends"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電気料金の推移と高止まり
            </Link>
          </li>
          <li className="select-none">/</li>
          <li className="text-slate-700">再エネ拡大と電気料金の両面影響</li>
        </ol>
      </nav>

      {/* ページヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          再エネ拡大は法人電気料金を下げるのか上げるのか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「再生可能エネルギーが増えれば電気料金が下がる」という期待がある一方、
          実際には再エネ賦課金や系統整備コストが上昇圧力として働いています。
          一方で、太陽光・風力が市場に出力することで卸電力価格（JEPX）を押し下げる「メリットオーダー効果」も同時に発生しています。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、再エネ拡大が法人電気料金に与える上昇圧力・下降圧力を6項目で比較し、
          再エネ比率と単価の推移データ、メリットオーダー効果の仕組み、2030年に向けた3シナリオを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 上昇圧力 vs 下降圧力 比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            上昇圧力と下降圧力の比較（6項目）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ拡大が電気料金に与える影響は、方向が相反する複数の経路が同時に作用しています。
            上昇圧力3項目と下降圧力3項目を並べて整理します。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            上昇圧力（コスト増加要因）
          </h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-red-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    メカニズム
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    規模感・補足
                  </th>
                </tr>
              </thead>
              <tbody>
                {upwardFactors.map((row) => (
                  <tr key={row.factor} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">
                      {row.factor}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.mechanism}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.scale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            下降圧力（コスト削減要因）
          </h3>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-green-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    項目
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    メカニズム
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    規模感・補足
                  </th>
                </tr>
              </thead>
              <tbody>
                {downwardFactors.map((row) => (
                  <tr key={row.factor} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-green-700">
                      {row.factor}
                    </td>
                    <td className="border border-slate-200 px-3 py-2">
                      {row.mechanism}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.scale}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※
            上昇・下降の両方が同時に作用するため、純効果は再エネ比率・系統整備の進捗・市場設計によって変わります。
          </p>
        </section>

        {/* 再エネ比率と電気料金の推移テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再エネ比率と法人向け単価の推移（2015〜2025年度）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ比率が高まるにつれて賦課金が上昇し、料金に上乗せされてきた経緯を確認できます。
            燃料高騰（2022年度）が重なった局面では、賦課金だけでなく燃調費も同時に上昇しました。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    年度
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    再エネ比率（概算）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    高圧総合単価目安
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right">
                    再エネ賦課金
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-left">
                    背景・補足
                  </th>
                </tr>
              </thead>
              <tbody>
                {reTrendData.map((row) => (
                  <tr key={row.year} className="border-t border-slate-100">
                    <td className="border border-slate-200 px-3 py-2 font-medium">
                      {row.year}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.reRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">
                      {row.unitPrice}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-red-700">
                      {row.surcharge}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-xs text-slate-600">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※
            単価は全国平均の高圧概算値。電力会社・エリア・契約内容によって大きく異なります。
            賦課金は経済産業省告示値。
          </p>
        </section>

        {/* メリットオーダー効果の説明 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            メリットオーダー効果とは
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力市場（JEPX）では、発電コストが安い電源から順に市場に入札される「メリットオーダー（経済負荷配分）」の原則が働きます。
            太陽光・風力は燃料費がゼロに近いため、発電時は非常に低い価格で入札し、
            市場の約定価格（スポット価格）全体を引き下げる効果があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">
                押し下げが大きい時間帯
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>晴天の昼間（太陽光の大量出力）</li>
                <li>強風の深夜（風力の大量出力）</li>
                <li>春・秋の過ごしやすい日（需要が低く供給過剰）</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                これらの時間帯はスポット価格が0〜2円/kWhになることもあります。
              </p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <h3 className="text-base font-semibold text-slate-900">
                押し下げが弱い時間帯
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
                <li>曇天・雨天の日中（太陽光が出力低下）</li>
                <li>夏・冬の需要ピーク帯（午前9時〜11時、夕方）</li>
                <li>無風の夜間（再エネが出力ゼロ）</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                ピーク需要と再エネ出力のミスマッチが高騰リスクをつくります。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            再エネが増えるほど時間帯によって卸価格の格差が拡大します。
            市場連動プランを使う法人にとっては、安い時間帯を活用できるかどうかで実質コストが大きく変わります。
          </p>
        </section>

        {/* 2030年に向けた見通し3シナリオ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            2030年に向けた見通し（3シナリオ）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            第7次エネルギー基本計画では2030年度の再エネ比率目標を約38〜40%と設定しています。
            目標達成の進捗と系統整備コストの動向次第で、法人向け電気料金への影響は大きく変わります。
          </p>
          <div className="mt-4 space-y-4">
            {scenarios2030.map((s) => (
              <div
                key={s.scenario}
                className={`rounded-xl border p-4 ${
                  s.scenario === "楽観シナリオ"
                    ? "border-green-200 bg-green-50"
                    : s.scenario === "中立シナリオ"
                      ? "border-slate-200 bg-slate-50"
                      : "border-red-200 bg-red-50"
                }`}
              >
                <h3 className="font-semibold text-slate-900">{s.scenario}</h3>
                <p className="mt-1 text-xs text-slate-600">
                  前提: {s.assumption}
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-3">
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      賦課金・容量拠出金
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.surchargeChange}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      卸価格押し下げ効果
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.spotEffect}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-700">
                      総合的な料金影響
                    </span>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {s.overallImpact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※
            各シナリオは複数の不確実な要素を含む定性的な整理です。実際の料金は市場動向・政策判断・系統整備の進捗に依存します。
          </p>
        </section>

        {/* 法人として押さえるポイント */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人として押さえるポイント
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              再エネが増えても「電気料金が下がる」とは限らない。賦課金・系統コストが同時に増加するためトータルの見通しは不確実。
            </li>
            <li>
              自社の電力使用時間帯と再エネ出力パターンが合う場合（昼間型の工場など）は、市場連動プランでメリットオーダー効果を享受しやすい。
            </li>
            <li>
              逆に夜間・冬季ピーク需要型の業態は、再エネ出力の少ない時間帯に高値を引くリスクに注意が必要。
            </li>
            <li>
              オフサイトPPA・オンサイト太陽光は「賦課金の対象外」になる部分もあり、長期コスト削減の手段として検討価値がある。
            </li>
            <li>
              2030年に向けて容量拠出金の本格拡大が見込まれるため、固定費部分の増加を予算に織り込む必要がある。
            </li>
          </ul>
        </section>

        
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-6">
          <GlossaryLinks currentSlug="renewable-energy-expansion-price-impact" terms={["再エネ賦課金", "容量拠出金", "燃料費調整額", "JEPX", "非化石証書"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description:
                "FIT制度の費用が電気料金にどう転嫁されるかを解説。",
            },
            {
              href: "/capacity-market-explained",
              title: "容量市場・容量拠出金とは",
              description: "2024年度から本格化する新たな固定費増加要因。",
            },
            {
              href: "/electricity-price-outlook-2026",
              title: "2026年度以降の法人電気料金見通し",
              description:
                "要因別の方向性と3シナリオ別の予算前提の置き方を整理。",
            },
            {
              href: "/electricity-price-high-plateau-reasons",
              title: "電気料金が高止まりする理由",
              description: "構造的な高止まり要因を複数の視点から解説。",
            },
          ]}
        />

        <ContentCta
          heading="実際の料金水準をシミュレーションで確認する"
          description="現在の契約条件・使用量をもとに、今後の単価シナリオ別の月額・年額コストを試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/price-trends", label: "推移・高止まり記事を読む" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
