import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["benchmarks"];


const pageTitle = "工場の電気代相場｜業種・契約電力・使用量別のベンチマーク";
const pageDescription =
  "工場の電気代を業種・契約電力・月間使用量別にベンチマーク。軽工業から重工業・食品加工・化学まで業種別の相場を一覧化。基本料金・電力量料金の内訳と削減ポイントも解説します。";
const pageUrl = "https://simulator.eic-jp.org/factory-electricity-cost-benchmark";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "工場 電気代 相場",
    "製造業 電気料金 目安",
    "工場 電気代 ベンチマーク",
    "特別高圧 工場 電気代",
    "高圧 製造業 電気代",
    "工場 電力コスト",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
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

const industryBenchmark = [
  { industry: "食品加工（小規模）", contract: "高圧50〜150kW", usage: "3〜8万kWh", monthly: "45〜120万円", yearly: "540〜1,440万円", note: "冷蔵・冷凍設備あり" },
  { industry: "食品加工（中規模）", contract: "高圧200〜500kW", usage: "15〜40万kWh", monthly: "225〜600万円", yearly: "2,700〜7,200万円", note: "連続製造ライン" },
  { industry: "金属加工（中規模）", contract: "高圧200〜500kW", usage: "10〜30万kWh", monthly: "150〜450万円", yearly: "1,800〜5,400万円", note: "プレス・旋盤設備" },
  { industry: "化学・樹脂製造", contract: "高圧〜特高500kW〜2MW", usage: "30〜150万kWh", monthly: "450万〜2,250万円", yearly: "5,400万〜2.7億円", note: "反応炉・乾燥炉" },
  { industry: "繊維・縫製", contract: "高圧100〜300kW", usage: "5〜15万kWh", monthly: "75〜225万円", yearly: "900万〜2,700万円", note: "織機・染色設備" },
  { industry: "組立製造（電機・自動車部品）", contract: "高圧300kW〜特高", usage: "20〜100万kWh", monthly: "300万〜1,500万円", yearly: "3,600万〜1.8億円", note: "多品種少量〜大量" },
  { industry: "木材・家具製造", contract: "高圧100〜300kW", usage: "5〜15万kWh", monthly: "75〜225万円", yearly: "900万〜2,700万円", note: "木工機械・乾燥設備" },
  { industry: "印刷・製本", contract: "高圧100〜400kW", usage: "5〜20万kWh", monthly: "75〜300万円", yearly: "900万〜3,600万円", note: "オフセット印刷機" },
  { industry: "鉄鋼・非鉄金属", contract: "特高2MW以上", usage: "200万kWh以上", monthly: "3,000万円〜", yearly: "3.6億円〜", note: "電気炉・圧延設備" },
  { industry: "セメント・建材", contract: "特高1〜5MW", usage: "100〜500万kWh", monthly: "1,500万〜7,500万円", yearly: "1.8億〜9億円", note: "ロータリーキルン" },
  { industry: "半導体・電子部品", contract: "特高1MW以上", usage: "100万kWh以上", monthly: "1,500万円〜", yearly: "1.8億円〜", note: "クリーンルーム常時稼働" },
  { industry: "冷凍・物流倉庫", contract: "高圧200〜500kW", usage: "10〜25万kWh", monthly: "150〜375万円", yearly: "1,800〜4,500万円", note: "冷凍機24時間稼働" },
];

const contractTierData = [
  { tier: "低圧（〜50kW）", unitPrice: "30〜40円/kWh", baseCharge: "1,500〜2,500円/kW", note: "小規模工場・別棟" },
  { tier: "高圧（50〜2,000kW）", unitPrice: "18〜28円/kWh", baseCharge: "1,200〜1,800円/kW", note: "中規模工場の主流" },
  { tier: "特別高圧（2,000kW以上）", unitPrice: "12〜20円/kWh", baseCharge: "800〜1,400円/kW", note: "大工場・大規模施設" },
];

const energySourceData = [
  { item: "動力設備（モーター・ポンプ）", ratio: "35〜50%", bar: 42, color: "bg-sky-500" },
  { item: "加熱・乾燥設備", ratio: "20〜35%", bar: 28, color: "bg-rose-500" },
  { item: "冷凍・冷却設備", ratio: "10〜25%", bar: 18, color: "bg-emerald-500" },
  { item: "照明・付帯設備", ratio: "5〜15%", bar: 10, color: "bg-amber-500" },
  { item: "空調（事務所・倉庫）", ratio: "5〜15%", bar: 8, color: "bg-purple-400" },
];

export default function FactoryElectricityCostBenchmarkPage() {
  return (
    <>
      <ArticleJsonLd
        headline="工場の電気代相場｜業種・契約電力・使用量別のベンチマーク"
        description="工場の電気代を業種・契約電力・月間使用量別にベンチマーク。軽工業から重工業・食品加工・化学まで業種別の相場を一覧化。基本料金・電力量料金の内訳と削減ポイントも解説します。"
        url="https://simulator.eic-jp.org/factory-electricity-cost-benchmark"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "工場の電気代相場" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/benchmarks" className="underline-offset-2 hover:underline">ベンチマーク・数値で見る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">工場の電気代相場</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          工場の電気代相場
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">業種・契約電力・使用量別のベンチマーク</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          工場の電気代は、法人が抱える最大のエネルギーコストであることが多く、業種・規模・操業時間・設備構成によって月数十万円から数千万円まで幅があります。
          同業他社や同規模の工場と比べて自社の電気代が適正かどうかを判断するには、業種別・契約電力別のベンチマークが不可欠です。本ページでは主要業種の工場電気代相場を一覧で解説します。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">工場の電気代を左右する主要因</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">操業時間</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">1直（8時間）〜3直24時間連続では同一設備でも電気代が3倍以上差が出ます。</p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">設備の電力密度</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">電気炉・電解設備・クリーンルーム空調は非常に高い電力密度を持ちます。</p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">契約区分</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">高圧・特別高圧では電力量単価が大きく下がるため、規模拡大時の切替は重要です。</p>
            </div>
            <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
              <h3 className="font-semibold text-rose-800">デマンド管理</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">ピーク需要が1回でも高くなると翌12か月の基本料金に影響します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 業種別メインテーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別 工場電気代相場一覧</h2>
          <p className="mt-2 text-sm text-slate-600">2024〜2025年度の料金水準をベースにした概算値</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">業種・規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">契約区分・電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間換算</th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">主な特徴</th>
                </tr>
              </thead>
              <tbody>
                {industryBenchmark.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.industry}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.contract}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.usage}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.monthly}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.yearly}</td>
                    <td className="px-4 py-2 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 契約区分別単価比較 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">契約区分別 電気料金の単価比較</h2>
          <p className="mt-2 text-sm text-slate-600">大きい契約ほど電力量単価が下がる仕組みを理解しておくことが重要です</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">契約区分</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">電力量単価の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">基本料金単価の目安</th>
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">対象工場</th>
                </tr>
              </thead>
              <tbody>
                {contractTierData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.tier}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right font-semibold text-sky-700">{row.unitPrice}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-700">{row.baseCharge}</td>
                    <td className="px-4 py-2 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※燃料費調整額・再エネ賦課金・容量拠出金は別途加算されます。上記は基本的な電力量料金・基本料金の目安です。</p>
        </div>
      </section>

      {/* エネルギー消費内訳 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">工場エネルギー消費の用途別内訳（一般製造業の場合）</h2>
          <div className="mt-5 space-y-4">
            {energySourceData.map((item) => (
              <div key={item.item} className="flex items-center gap-3">
                <span className="w-48 shrink-0 text-sm text-slate-700">{item.item}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div
                    className={`h-4 rounded ${item.color}`}
                    style={{ width: `${item.bar * 2}%` }}
                  />
                </div>
                <span className="w-24 shrink-0 text-right text-sm font-semibold text-slate-700">{item.ratio}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">※業種によって構成は大きく異なります。食品加工は冷凍・冷却比率が高く、化学製造は加熱・反応炉の比率が高い傾向があります。</p>
        </div>
      </section>

      {/* 月額電気代バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別 月額電気代の規模感（代表値）</h2>
          <div className="mt-5 space-y-4">
            {[
              { label: "鉄鋼・非鉄金属", value: 95, color: "bg-slate-700" },
              { label: "半導体・電子部品", value: 80, color: "bg-sky-600" },
              { label: "化学・樹脂製造", value: 70, color: "bg-rose-500" },
              { label: "組立製造（大）", value: 55, color: "bg-emerald-500" },
              { label: "食品加工（中）", value: 40, color: "bg-amber-500" },
              { label: "金属加工（中）", value: 30, color: "bg-purple-500" },
              { label: "冷凍倉庫", value: 25, color: "bg-teal-500" },
              { label: "食品加工（小）", value: 12, color: "bg-sky-400" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-32 shrink-0 text-right text-sm font-semibold text-slate-700">
                  {item.value >= 80 ? "1,500万円〜" : item.value >= 60 ? "450〜750万円" : item.value >= 40 ? "225〜450万円" : item.value >= 25 ? "150〜300万円" : "45〜120万円"}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">※各業種の代表的な中〜大規模事業者の月額電気代概算。実際は操業条件により大きく変動します。</p>
        </div>
      </section>

      {/* 工場の削減ポイント */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">相場より高い工場が確認すべき削減ポイント</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-slate-800">基本料金（デマンド）の削減</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・デマンドコントローラーの導入でピーク需要を抑制</li>
                <li>・生産ラインの起動タイミングをずらすシフト管理</li>
                <li>・契約電力が実需より過大でないか確認</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">電力量料金の削減</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・インバータ化によるモーター省エネ（20〜40%削減事例あり）</li>
                <li>・コンプレッサーの省エネ型更新・エア漏れ補修</li>
                <li>・加熱設備の断熱強化・廃熱回収</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">契約・調達の最適化</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・高圧〜特高切替による単価引き下げ</li>
                <li>・時間帯別料金プランを活用した夜間シフト</li>
                <li>・PPA・自家発電との組み合わせ</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">設備更新の効果</h3>
              <ul className="mt-2 space-y-1 text-sm leading-7 text-slate-700">
                <li>・冷凍機・チラーの高効率機更新</li>
                <li>・工場照明のLED化（反射型天井灯など）</li>
                <li>・変圧器のアモルファス型更新</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm leading-7 text-slate-600">
            ※本ページの金額は業界平均を参考にした概算値です。契約区分・地域・使用パターンにより大きく変動します。正確な見積は専門家にご相談ください。
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
            { href: "/electricity-cost-benchmark-by-industry", title: "業種別 法人電気代の月額相場一覧", description: "業種横断での電気代相場を一覧で比較" },
            { href: "/contract-demand-what-is-it", title: "デマンドとは", description: "工場コスト削減の核心・デマンド管理の仕組みを解説" },
            { href: "/demand-control-reduction-effect", title: "デマンドコントロールの削減効果", description: "基本料金をどれだけ下げられるかをシミュレーション" },
            { href: "/contract-demand-what-is-it", title: "契約電力とは", description: "契約電力の設定と基本料金の関係" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="工場の電気代リスクを診断する"
          description="契約電力・月間使用量・業種を入力して、現在の電気代水準と今後の上昇リスクをシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/demand-control-reduction-effect", label: "デマンドコントロールの効果を見る" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
