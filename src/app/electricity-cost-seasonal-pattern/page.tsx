import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

// --- 定数 ---
const pageTitle =
  "法人の電気料金の年間変動パターン｜月別に見る請求額の動き方と予算への活かし方";
const pageDescription =
  "法人の電気料金が月ごとにどう変動するかを解説。業種別の使用量パターン、夏季・冬季ピークの特徴、燃調費の季節遅延、再エネ賦課金の4月改定、月別予算策定の考え方を整理。";

// --- 月別カレンダーデータ ---
const monthlyCalendar = [
  {
    month: "1月",
    usageTrend: "冬季ピーク（暖房最大）",
    mainFactors: "冬季料金適用・デマンド上昇リスク",
    budgetNote: "年間最大請求になりやすい",
  },
  {
    month: "2月",
    usageTrend: "冬季ピーク継続",
    mainFactors: "暖房需要継続",
    budgetNote: "1月と同水準",
  },
  {
    month: "3月",
    usageTrend: "やや低下",
    mainFactors: "暖房需要減・年度末",
    budgetNote: "翌年度予算の最終確認",
  },
  {
    month: "4月",
    usageTrend: "中間期（低め）",
    mainFactors: "再エネ賦課金改定（年度切替）",
    budgetNote: "新単価の影響を確認",
  },
  {
    month: "5月",
    usageTrend: "年間最低水準",
    mainFactors: "空調不要の時期",
    budgetNote: "年間最安月の基準値として記録",
  },
  {
    month: "6月",
    usageTrend: "やや上昇",
    mainFactors: "梅雨の除湿需要",
    budgetNote: "夏季料金の適用開始確認",
  },
  {
    month: "7月",
    usageTrend: "夏季ピーク開始",
    mainFactors: "冷房本格化・夏季料金",
    budgetNote: "デマンド管理強化",
  },
  {
    month: "8月",
    usageTrend: "夏季最大ピーク",
    mainFactors: "猛暑時は年間最大に",
    budgetNote: "冬季と並ぶ最大請求月",
  },
  {
    month: "9月",
    usageTrend: "残暑で高止まり",
    mainFactors: "冷房継続・台風リスク",
    budgetNote: "夏季料金の最終月",
  },
  {
    month: "10月",
    usageTrend: "中間期（低下）",
    mainFactors: "空調需要減",
    budgetNote: "冬に向けた予算見直し",
  },
  {
    month: "11月",
    usageTrend: "やや上昇",
    mainFactors: "暖房開始",
    budgetNote: "冬季ピーク前の準備",
  },
  {
    month: "12月",
    usageTrend: "冬季ピーク開始",
    mainFactors: "暖房本格化",
    budgetNote: "年末年始の稼働パターン確認",
  },
];

// --- 業種別使用量パターン ---
const industryPatterns = [
  {
    industry: "オフィス",
    peakMonth: "7〜8月（冷房）",
    lowMonth: "4〜5月",
    variation: "±30〜40%",
    feature: "平日昼間に集中。GW・盆・年末年始に急落",
  },
  {
    industry: "工場（2交代）",
    peakMonth: "7〜8月",
    lowMonth: "1月（正月休み）",
    variation: "±15〜25%",
    feature: "生産量に連動。操業日数の影響大",
  },
  {
    industry: "商業施設",
    peakMonth: "7〜8月、12月",
    lowMonth: "2月",
    variation: "±20〜35%",
    feature: "冷房+集客の夏と歳末のダブルピーク",
  },
  {
    industry: "スーパー・冷凍倉庫",
    peakMonth: "7〜8月",
    lowMonth: "11〜3月",
    variation: "±10〜20%",
    feature: "冷蔵冷凍で通年高い。夏の上乗せは限定的",
  },
  {
    industry: "病院",
    peakMonth: "1〜2月、7〜8月",
    lowMonth: "4〜5月",
    variation: "±10〜15%",
    feature: "24時間稼働でベースが高い。変動幅は小さい",
  },
  {
    industry: "学校",
    peakMonth: "7月、1月",
    lowMonth: "8月（夏休み）",
    variation: "±40〜60%",
    feature: "長期休暇で大幅に下がる。変動幅が最大",
  },
];

// --- 燃調費の季節遅延 ---
const fuelAdjustmentDelays = [
  {
    fuelMoveTiming: "冬（12〜2月）のLNG高騰",
    reflectTiming: "翌年4〜6月の請求",
    practicalNote: "「春なのに高い」の原因",
  },
  {
    fuelMoveTiming: "夏（7〜8月）の需要増",
    reflectTiming: "秋（10〜12月）の請求",
    practicalNote: "使用量は減ったのに高い原因",
  },
  {
    fuelMoveTiming: "年度後半の原油安定",
    reflectTiming: "翌年度前半に反映",
    practicalNote: "下がるのも遅れる",
  },
];

// --- 制度改定カレンダー ---
const systemRevisions = [
  {
    timing: "4月",
    revision: "再エネ賦課金の年度改定",
    impact: "全需要家に影響。前年度との差を確認",
  },
  {
    timing: "4月",
    revision: "容量拠出金の年度更新",
    impact: "転嫁額の変動。電力会社の案内を確認",
  },
  {
    timing: "毎月",
    revision: "燃料費調整額の更新",
    impact: "電力会社ごとに公表。前月との差を確認",
  },
  {
    timing: "毎月",
    revision: "市場価格調整額の更新",
    impact: "市場連動型のみ。JEPX動向を確認",
  },
  {
    timing: "契約更新月",
    revision: "単価改定",
    impact: "契約ごと。更新3ヶ月前に見積取得推奨",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "法人電気料金",
    "年間変動パターン",
    "月別電気料金",
    "季節変動",
    "夏季ピーク",
    "冬季ピーク",
    "燃料費調整額",
    "再エネ賦課金",
    "電気料金予算",
    "業種別電力使用量",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/electricity-cost-seasonal-pattern",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-cost-seasonal-pattern",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
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

const faq = [
  { question: "電気料金が最も高くなる月はいつですか？", answer: "一般的に夏（7〜8月）と冬（1〜2月）の使用量ピーク月が高くなります。さらに燃料費調整額の反映タイムラグ（3〜5か月）を考慮すると、実際の請求額ピークは使用量ピークより数か月遅れることがあります。" },
  { question: "再エネ賦課金はいつ変わりますか？", answer: "毎年4月に単価が改定されます。年度初めの請求（5月支払い分）から新単価が適用されます。2025年度の単価は過去最高水準に達しており、年間コストへの影響が大きくなっています。" },
  { question: "月別予算策定に使えるデータはどこで取れますか？", answer: "電力会社の請求書・検針票に月別の使用量・単価・各調整費が記録されています。過去12〜24か月分を整理すると季節変動パターンが把握でき、翌年度予算の前提として活用できます。" },
];

// --- Page Component ---
export default function ElectricityCostSeasonalPatternPage() {
  return (
    <>
      <ArticleJsonLd
        headline="法人の電気料金の年間変動パターン｜月別に見る請求額の動き方と予算への活かし方"
        description="法人の電気料金が月ごとにどう変動するかを解説。業種別の使用量パターン、夏季・冬季ピークの特徴、燃調費の季節遅延、再エネ賦課金の4月改定、月別予算策定の考え方を整理。"
        url="https://simulator.eic-jp.org/electricity-cost-seasonal-pattern"
        datePublished="2026-04-13"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "電気料金の年間変動パターン" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくずナビ */}
      <nav className="mb-4 text-xs text-slate-500" aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホーム
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li>
            <Link
              href="/articles/basic"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              基礎から知る
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-slate-700">年間変動パターン</li>
        </ol>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電気料金の年間変動パターン
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気料金は、使用量の変化だけでなく、燃料費調整額の月次更新・再エネ賦課金の年度改定・夏季冬季料金の適用切替など、複数の要因が重なって月ごとに大きく動きます。年間の変動パターンを把握しておくことは、予算策定の精度向上と、「なぜ先月より高いのか」という疑問への迅速な対応につながります。
        </p>
      </header>

      {/* H2: なぜ電気料金は月によって変わるのか */}
      <section className="mt-6 space-y-4">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ電気料金は月によって変わるのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金が月ごとに変動する主な要因は5つあります。これらが複合的に動くため、単純に「使用量が増えたから高い」とは言い切れないケースも多くあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "1. 使用量の季節変動",
                body: "夏季（冷房）・冬季（暖房）に使用量が増加し、春・秋は低くなります。業種によって変動幅は異なります。",
              },
              {
                title: "2. 燃料費調整額の月次変動",
                body: "LNG・石炭・石油の市場価格に連動して毎月更新されます。燃料高騰期は大幅に上乗せされます。",
              },
              {
                title: "3. 再エネ賦課金の年度改定",
                body: "毎年4月に単価が改定されます。前年度との差が大きいほど年度切替時の請求額に影響します。",
              },
              {
                title: "4. 市場価格の季節性",
                body: "電力卸市場（JEPX）の価格は夏冬に上昇しやすく、市場連動型プランはこの動きが料金に直結します。",
              },
              {
                title: "5. 契約更新のタイミング",
                body: "高圧・特別高圧では契約更新月に単価が見直されます。更新タイミングによって年間コストが変わります。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 月別変動カレンダー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">月別の電気料金変動カレンダー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各月の使用量傾向・主な変動要因・予算管理上の注意点をまとめました。自社の実績と照らし合わせる基準としてご活用ください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    月
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    使用量傾向
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    主な変動要因
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    予算管理上の注意点
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyCalendar.map((row, i) => (
                  <tr
                    key={row.month}
                    className={
                      i % 2 === 0
                        ? "border-b border-slate-100 bg-white"
                        : "border-b border-slate-100 bg-slate-50"
                    }
                  >
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-900">
                      {row.month}
                    </td>
                    <td className="px-3 py-2 text-slate-700">{row.usageTrend}</td>
                    <td className="px-3 py-2 text-slate-700">{row.mainFactors}</td>
                    <td className="px-3 py-2 text-slate-700">{row.budgetNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 使用量傾向は標準的なオフィス・高圧需要家を基準とした目安です。業種・設備構成によって異なります。
          </p>
        </section>

        {/* H2: 業種別の月間使用量パターン */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別の月間使用量パターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の使用量パターンは業種によって大きく異なります。同じ月でも、オフィスと工場では真逆の変動を示すことがあります。自社の業種に近いパターンを把握しておくことで、予算精度が上がります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    業種
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    ピーク月
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    閑散月
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    年間変動幅
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    特徴
                  </th>
                </tr>
              </thead>
              <tbody>
                {industryPatterns.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={
                      i % 2 === 0
                        ? "border-b border-slate-100 bg-white"
                        : "border-b border-slate-100 bg-slate-50"
                    }
                  >
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-900">
                      {row.industry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-700">{row.peakMonth}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-700">{row.lowMonth}</td>
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-sky-700">
                      {row.variation}
                    </td>
                    <td className="px-3 py-2 text-slate-700">{row.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 年間変動幅は月間使用量の最大月と最小月の差（月平均比）の目安です。個社の設備・稼働状況により異なります。
          </p>
        </section>

        {/* H2: 燃料費調整額の季節遅延効果 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">燃料費調整額の季節遅延効果</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額（燃調費）は、LNG・石炭・石油の市場価格を基に毎月更新されます。しかし、実際の請求への反映には
            <span className="font-semibold text-slate-900">2〜5ヶ月の遅延</span>
            があります。このため、「使用量は少ないはずなのに請求が高い」「春なのになぜ高い？」という疑問が生じることがあります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    燃料価格が動く時期
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    燃調費に反映される時期
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    実務上の注意
                  </th>
                </tr>
              </thead>
              <tbody>
                {fuelAdjustmentDelays.map((row, i) => (
                  <tr
                    key={row.fuelMoveTiming}
                    className={
                      i % 2 === 0
                        ? "border-b border-slate-100 bg-white"
                        : "border-b border-slate-100 bg-slate-50"
                    }
                  >
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-900">
                      {row.fuelMoveTiming}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-700">
                      {row.reflectTiming}
                    </td>
                    <td className="px-3 py-2 text-slate-700">{row.practicalNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">実務上のポイント</p>
            <p className="mt-1 text-sm leading-6 text-amber-700">
              燃調費の動きを把握するには、電力会社が毎月公表する「燃料費調整単価表」を確認する習慣が重要です。前月比の変化を記録しておくと、翌月以降の請求予測に活用できます。
            </p>
          </div>
        </section>

        {/* H2: 制度改定の年間カレンダー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">制度改定の年間カレンダー</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金に影響する制度改定は、毎月・毎年度に決まったタイミングで行われます。あらかじめスケジュールを把握しておくことで、請求額の変動を見越した予算管理が可能になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    時期
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    制度改定
                  </th>
                  <th className="whitespace-nowrap px-3 py-2 text-left font-semibold text-slate-700">
                    影響
                  </th>
                </tr>
              </thead>
              <tbody>
                {systemRevisions.map((row, i) => (
                  <tr
                    key={`${row.timing}-${row.revision}`}
                    className={
                      i % 2 === 0
                        ? "border-b border-slate-100 bg-white"
                        : "border-b border-slate-100 bg-slate-50"
                    }
                  >
                    <td className="whitespace-nowrap px-3 py-2 font-semibold text-slate-900">
                      {row.timing}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-slate-700">{row.revision}</td>
                    <td className="px-3 py-2 text-slate-700">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* H2: 月別予算策定に活かす考え方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            月別予算策定に活かす考え方（5ポイント）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年間の変動パターンを踏まえた予算策定の実践的なポイントをまとめました。
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                no: "01",
                title: "前年同月比で評価する",
                body: "電気料金は季節変動が大きいため、前月比ではなく前年同月比で評価する習慣をつけましょう。前月比では「夏だから高い」という当然の変動に惑わされます。",
              },
              {
                no: "02",
                title: "5月の実績を年間最安基準値として記録する",
                body: "5月は空調需要が最も低い月です。この月の請求額を「ベースロード」として記録しておくと、空調以外のコストを可視化するベンチマークになります。",
              },
              {
                no: "03",
                title: "夏冬ピーク月に30〜50%の上振れ予算を確保する",
                body: "オフィス・商業施設では、5月比で夏冬ピーク時に30〜50%程度の上昇が想定されます。業種別パターンを参考に、月別の予算枠を設定してください。",
              },
              {
                no: "04",
                title: "4月は必ず単価確認を行う",
                body: "再エネ賦課金・容量拠出金の年度改定が4月に集中します。前年度と単価を比較し、年間コストへの影響額を試算しておきましょう。",
              },
              {
                no: "05",
                title: "契約更新3ヶ月前に見積を取得する",
                body: "高圧・特別高圧の契約は更新タイミングで単価が大きく変わることがあります。更新月から逆算して3ヶ月前には複数の電力会社から見積を取得し、比較検討する時間を確保してください。",
              },
            ].map((item) => (
              <div
                key={item.no}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {item.no}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* H2: まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              法人の電気料金は使用量・燃調費・再エネ賦課金・市場価格・契約更新の5要因が重なり月ごとに変動する
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              夏季（7〜8月）と冬季（1〜2月）がピーク、春と秋（特に5月）が閑散期という二山型が基本パターン
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              燃調費は2〜5ヶ月遅れで反映されるため、使用量と請求額の増減タイミングがずれる
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              4月の制度改定（再エネ賦課金・容量拠出金）は毎年必ず単価確認を行う
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 text-sky-600">▶</span>
              業種別パターンを把握し、前年同月比での評価と月別予算枠の設定を習慣化することが重要
            </li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "再エネ賦課金・燃調費の月次データ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "月次需給データ・季節変動情報" },
            { name: "気象庁", url: "https://www.jma.go.jp", description: "気温・気象データ（季節変動要因）" },
          ]}
          publishedAt="2026-04-13"
        />
      </div>

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-bill-breakdown",
              title: "法人の電気料金の内訳",
              description: "基本料金・電力量料金・燃調費など各項目の仕組みを解説します。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "電気料金明細の読み方",
              description: "請求書の各項目が何を意味するか、実務担当者向けに解説します。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "燃調費の計算方法・上限撤廃問題・請求への影響を詳しく説明します。",
            },
            {
              href: "/renewable-energy-surcharge",
              title: "再エネ賦課金とは",
              description: "再エネ賦課金の単価推移・改定の仕組み・今後の見通しを解説します。",
            },
            {
              href: "/when-business-electricity-price-increases-start",
              title: "電気料金値上げの開始タイミング",
              description: "値上げ通知から実際の請求に反映されるまでの時間軸を整理します。",
            },
            {
              href: "/compare",
              title: "料金メニュー比較診断",
              description: "現在の契約メニューが自社に最適かを簡単に診断できます。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電気料金の上昇リスクを数字で把握する"
          description="年間の変動パターンを理解したら、次は自社の電気料金が今後どの程度上昇するかをシミュレーションしてみましょう。燃料価格・再エネ賦課金・市場価格の変動を組み合わせたリスク診断が無料で行えます。"
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
