import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["benchmarks"];


const pageTitle = "業種別 法人電気代の月額相場一覧｜製造・小売・飲食・宿泊・医療・物流";
const pageDescription =
  "製造業・小売業・飲食業・宿泊業・医療機関・物流倉庫など業種別の法人電気代月額相場を一覧で解説。規模・契約電力・使用量の目安と内訳構成もあわせて紹介します。";
const pageUrl = "https://simulator.eic-jp.org/electricity-cost-benchmark-by-industry";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "業種別 電気代",
    "法人電気代 相場",
    "製造業 電気代",
    "小売業 電気代",
    "飲食店 電気代",
    "宿泊業 電気代",
    "医療機関 電気代",
    "物流倉庫 電気代",
    "法人電気料金 目安",
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

const industryData = [
  { industry: "製造業（軽工業・小規模）", scale: "従業員10〜30名", demand: "50〜150kW", usage: "1〜4万kWh", monthly: "15〜60万円", yearly: "180〜720万円" },
  { industry: "製造業（中規模）", scale: "従業員50〜200名", demand: "200〜500kW", usage: "10〜30万kWh", monthly: "150〜450万円", yearly: "1,800〜5,400万円" },
  { industry: "製造業（大規模）", scale: "従業員200名以上", demand: "500kW〜数MW", usage: "30万kWh以上", monthly: "450万円〜", yearly: "5,400万円〜" },
  { industry: "小売業（コンビニ1店）", scale: "24時間営業", demand: "20〜30kW", usage: "4,000〜6,000kWh", monthly: "10〜20万円", yearly: "120〜240万円" },
  { industry: "小売業（ドラッグストア）", scale: "売場200〜400坪", demand: "30〜60kW", usage: "5,000〜1万kWh", monthly: "15〜30万円", yearly: "180〜360万円" },
  { industry: "小売業（ショッピングモール）", scale: "テナント込み大型", demand: "500kW〜3MW", usage: "50〜300万kWh", monthly: "750万〜4,500万円", yearly: "9,000万〜5億円" },
  { industry: "飲食業（居酒屋・40席）", scale: "17〜24時営業", demand: "15〜30kW", usage: "3,000〜5,000kWh", monthly: "8〜15万円", yearly: "96〜180万円" },
  { industry: "飲食業（ファミレス）", scale: "100席規模", demand: "40〜80kW", usage: "7,000〜1.5万kWh", monthly: "20〜45万円", yearly: "240〜540万円" },
  { industry: "宿泊業（ビジネスホテル・100室）", scale: "中規模", demand: "200〜400kW", usage: "10〜20万kWh", monthly: "150〜300万円", yearly: "1,800〜3,600万円" },
  { industry: "宿泊業（リゾートホテル・200室）", scale: "大規模", demand: "500kW〜2MW", usage: "30〜100万kWh", monthly: "450万〜1,500万円", yearly: "5,400万〜1.8億円" },
  { industry: "医療機関（診療所）", scale: "外来中心・小規模", demand: "20〜50kW", usage: "3,000〜8,000kWh", monthly: "9〜24万円", yearly: "108〜288万円" },
  { industry: "医療機関（病院・100床）", scale: "入院設備あり", demand: "300〜800kW", usage: "15〜40万kWh", monthly: "225〜600万円", yearly: "2,700〜7,200万円" },
  { industry: "物流倉庫（小規模）", scale: "冷蔵なし・1,000坪", demand: "30〜80kW", usage: "3,000〜1万kWh", monthly: "9〜30万円", yearly: "108〜360万円" },
  { industry: "物流倉庫（冷蔵・冷凍）", scale: "温度管理あり", demand: "200〜500kW", usage: "10〜25万kWh", monthly: "150〜375万円", yearly: "1,800〜4,500万円" },
  { industry: "オフィス（中規模・50名）", scale: "一般事務主体", demand: "50〜100kW", usage: "1.5〜3万kWh", monthly: "45〜90万円", yearly: "540〜1,080万円" },
];

const barData = [
  { label: "製造業（中規模）", value: 300, max: 500, color: "bg-sky-500" },
  { label: "宿泊業（ホテル）", value: 225, max: 500, color: "bg-emerald-500" },
  { label: "医療（病院）", value: 200, max: 500, color: "bg-rose-500" },
  { label: "物流（冷蔵）", value: 160, max: 500, color: "bg-amber-500" },
  { label: "オフィス（50名）", value: 68, max: 500, color: "bg-purple-500" },
  { label: "小売（ドラッグ）", value: 23, max: 500, color: "bg-teal-500" },
  { label: "飲食（居酒屋）", value: 12, max: 500, color: "bg-orange-400" },
];

const breakdownData = [
  { item: "基本料金（デマンド）", ratio: "25〜40%", note: "契約電力に基づく固定費" },
  { item: "電力量料金", ratio: "30〜45%", note: "使用kWhに応じた変動費" },
  { item: "燃料費調整額", ratio: "5〜15%", note: "燃料価格に連動して毎月変動" },
  { item: "再生可能エネルギー賦課金", ratio: "8〜12%", note: "固定単価×使用kWh" },
  { item: "その他（容量拠出金等）", ratio: "1〜5%", note: "2024年度より順次拡大" },
];

export default function ElectricityCostBenchmarkByIndustryPage() {
  return (
    <>
      <ArticleJsonLd
        headline="業種別 法人電気代の月額相場一覧｜製造・小売・飲食・宿泊・医療・物流"
        description="製造業・小売業・飲食業・宿泊業・医療機関・物流倉庫など業種別の法人電気代月額相場を一覧で解説。規模・契約電力・使用量の目安と内訳構成もあわせて紹介します。"
        url="https://simulator.eic-jp.org/electricity-cost-benchmark-by-industry"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "業種別 法人電気代の月額相場一覧" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">業種別月額相場一覧</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          業種別 法人電気代の月額相場一覧
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">製造・小売・飲食・宿泊・医療・物流</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          法人の電気代は、業種・規模・操業形態によって大きく異なります。製造業の大規模工場では月額数百万円に達する一方、小規模飲食店では月10万円未満のケースも珍しくありません。
          自社の電気代が業界平均と比べて高いのか低いのかを把握することが、コスト削減の第一歩です。本ページでは、主要業種ごとの月額電気代相場を規模別に整理して一覧にまとめました。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6 space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種によって電気代が大きく異なる理由</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の大きさを決める要因は主に3つです。①<strong>契約電力（kW）</strong>＝ピーク需要に応じた基本料金の大きさ、
            ②<strong>月間使用量（kWh）</strong>＝実際に消費するエネルギー量、③<strong>燃料費調整額・再エネ賦課金</strong>などの変動コスト。
            製造業や宿泊業は設備稼働時間が長く契約電力も大きいため、電気代が高くなりやすい業種です。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            また同じ業種でも、地域（電力会社エリア）・築年数・設備の省エネ性能・操業シフトのパターンによって30〜50%程度の差が出ることもあります。
            以下の相場データはあくまで参考目安としてご活用ください。
          </p>
        </div>
      </section>

      {/* メインテーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別・規模別 月額電気代相場一覧</h2>
          <p className="mt-2 text-sm text-slate-600">2024〜2025年度の高圧・特別高圧料金水準を参考にした概算値</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">業種・規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">事業規模の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">契約電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間換算</th>
                </tr>
              </thead>
              <tbody>
                {industryData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.industry}</td>
                    <td className="px-4 py-2 text-slate-600">{row.scale}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.demand}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.usage}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.monthly}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CSSバーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別 月額電気代の比較（代表値）</h2>
          <p className="mt-2 text-sm text-slate-600">各業種の代表的な規模における月額中央値の比較</p>
          <div className="mt-5 space-y-4">
            {barData.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-40 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div
                    className={`h-4 rounded ${item.color}`}
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-slate-700">
                  約{item.value}万円/月
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">※上記は各業種の代表的な中規模事業者の概算値です。</p>
        </div>
      </section>

      {/* 内訳テーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">法人電気代の内訳構成（高圧契約の場合）</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            電気代は単一の料金ではなく、複数の費目から構成されています。それぞれの比率を把握することで、どこを削減すべきかが明確になります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">費目</th>
                  <th className="px-4 py-2 text-right font-semibold text-slate-700">構成比の目安</th>
                  <th className="px-4 py-2 text-left font-semibold text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {breakdownData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-2 font-medium text-slate-800">{row.item}</td>
                    <td className="px-4 py-2 text-right font-semibold text-sky-700">{row.ratio}</td>
                    <td className="px-4 py-2 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 業種別の特徴解説 */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">製造業の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            生産ラインの稼働時間が長く、モーター・コンプレッサー・加熱設備など大電力機器を多数使用するため、業種別では最も電気代が高くなりやすい。
            特別高圧契約（2,000kW以上）では年間数億円規模に達する工場も存在します。
            省エネ余地としてはデマンドコントロール・インバータ導入・コンプレッサー最適化が有効です。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">小売業・飲食業の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            1店舗あたりの電気代は比較的小さいですが、多店舗展開では合計額が膨大になります。
            照明・冷蔵設備・空調が主な消費源であり、LED化と省エネ型冷ケースへの切り替えが即効性の高い対策です。
            飲食店はコンロ・フライヤー・厨房換気が加わるため、同規模の小売店より電気代が高い傾向があります。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">宿泊業の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            24時間365日の操業が基本で、空調・給湯・照明・厨房の稼働が常時続きます。
            夏冬のピーク時には契約電力が大きく跳ね上がり、デマンド超過による割増料金が発生しやすいのも特徴です。
            省エネ対策としては熱源設備の更新・客室の個別制御・深夜電力の活用が有効です。
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">医療機関・物流倉庫の特徴</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            病院はMRI・CT・手術室設備など特殊大電力機器を持ち、24時間稼働の部門も多いため、規模の割に電気代が高くなります。
            冷蔵・冷凍倉庫は冷凍機の常時稼働により使用量が多く、圧縮機の効率が大きくコストを左右します。
            どちらも停電リスクへの備えとして自家発電設備を持つ場合が多く、維持費も考慮が必要です。
          </p>
        </div>
      </section>

      {/* 相場より高い場合の対策 */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">相場より電気代が高い場合に確認すべきこと</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li>
              <strong>契約電力の見直し：</strong>過去12か月のデマンド実績を確認し、現在の契約電力が実需に対して過大でないか確認する。
            </li>
            <li>
              <strong>プラン選択の最適化：</strong>時間帯別・季節別料金プランへの切り替えで、操業シフトに合わせたコスト削減が可能な場合がある。
            </li>
            <li>
              <strong>燃調・再エネ賦課金の把握：</strong>固定費以外の変動費が増えていないか、直近12か月の請求書で確認する。
            </li>
            <li>
              <strong>設備の老朽化：</strong>10年以上経過した空調・冷凍機・変圧器は効率が低下しており、更新で20〜30%の削減実績が出るケースもある。
            </li>
            <li>
              <strong>新電力・PPA契約の検討：</strong>高圧以上の事業所は複数の小売電気事業者から相見積もりを取ることで交渉余地が生まれる。
            </li>
          </ul>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold text-slate-900">データの前提と注意事項</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            ※本ページの金額は業界平均を参考にした概算値です。契約区分（低圧・高圧・特別高圧）・地域（電力会社エリア）・設備の省エネ性能・使用パターンにより大きく変動します。
            正確な自社コストの評価や見直し提案は、専門家またはエネルギー管理士にご相談ください。
            また、燃料費調整額・再生可能エネルギー賦課金は毎月変動するため、上記の金額レンジは変わる場合があります。
          </p>
        </div>
      </section>

      {/* データの根拠と出典 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">データの根拠と出典</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          本ページの相場データは以下の公的統計・業界データを参考に、エネルギー情報センターが独自に整理・概算したものです。
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
          <li>
            <span className="font-semibold">経済産業省 資源エネルギー庁</span>「電力調査統計」（電灯電力需要実績 月次・年次）
            ― 契約種別・地域別の販売電力量・料金収入から平均単価を算出
          </li>
          <li>
            <span className="font-semibold">電力・ガス取引監視等委員会</span>「電力取引報」（小売電気事業者の販売実績）
            ― 高圧・特別高圧の事業者別販売量・単価水準の参照
          </li>
          <li>
            <span className="font-semibold">経済産業省</span>「エネルギー消費統計調査」
            ― 業種別・規模別のエネルギー消費原単位データ
          </li>
          <li>
            <span className="font-semibold">総務省統計局</span>「経済センサス―活動調査」
            ― 業種別事業所数・従業者数の規模区分
          </li>
          <li>
            <span className="font-semibold">一般社団法人エネルギー情報センター</span> 独自調査・ヒアリング
            ― 法人向け電力見積・契約実績データの集計分析
          </li>
        </ul>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm leading-7 text-amber-800">
            <span className="font-semibold">重要:</span> 本ページの数値は上記データをもとにした概算・目安であり、
            特定の契約条件や時期における正確な請求額を保証するものではありません。
            実際の電気料金は契約プラン・使用パターン・地域・時期により大きく異なります。
            最終的な判断には、必ず電力会社の見積書や請求書の実データをご確認ください。
          </p>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          最終更新: 2026年4月（2024〜2025年度の料金水準を反映）
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/business-electricity-bill-breakdown", title: "法人向け電気料金の内訳とは", description: "基本料金・電力量料金・燃調費など各費目の仕組みを解説" },
            { href: "/contract-demand-what-is-it", title: "契約電力とは", description: "デマンド値の決まり方と基本料金への影響を詳しく解説" },
            { href: "/office-electricity-cost-benchmark", title: "オフィスの電気代相場", description: "従業員数・坪数別のオフィス電気代ベンチマーク" },
            { href: "/factory-electricity-cost-benchmark", title: "工場の電気代相場", description: "業種・契約電力・使用量別の工場電気代ベンチマーク" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代リスクを診断する"
          description="業種・契約電力・使用量を入力するだけで、現在の電気代水準と今後の上昇リスクをスコアで確認できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "節約・見直しの解説を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
