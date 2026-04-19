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
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["benchmarks"];


const pageTitle = "小売店舗の電気代相場｜業態・坪数別のベンチマーク";
const pageDescription =
  "コンビニ・ドラッグストア・スーパー・アパレルなど小売業態別の電気代相場を坪数別に解説。照明・冷蔵設備・空調の内訳と、多店舗展開時のコスト管理ポイントも紹介します。";
const pageUrl = "https://simulator.eic-jp.org/retail-store-electricity-cost-benchmark";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "小売店 電気代 相場",
    "コンビニ 電気代",
    "ドラッグストア 電気代",
    "スーパー 電気代",
    "小売業 電力コスト",
    "店舗 電気代 坪数",
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

const benchmarkData = [
  { type: "コンビニエンスストア（1店舗）", area: "30〜50坪", hours: "24時間", demand: "20〜35kW", usage: "4,000〜7,000kWh", monthly: "10〜20万円", yearly: "120〜240万円" },
  { type: "ドラッグストア（標準）", area: "100〜200坪", hours: "9〜23時", demand: "30〜60kW", usage: "5,000〜1.2万kWh", monthly: "15〜36万円", yearly: "180〜432万円" },
  { type: "食品スーパー（小規模）", area: "200〜400坪", hours: "9〜22時", demand: "60〜150kW", usage: "1〜2.5万kWh", monthly: "30〜75万円", yearly: "360〜900万円" },
  { type: "食品スーパー（大規模）", area: "500〜1,500坪", hours: "8〜24時", demand: "200〜500kW", usage: "5〜15万kWh", monthly: "150〜450万円", yearly: "1,800〜5,400万円" },
  { type: "ホームセンター", area: "1,000〜3,000坪", hours: "9〜20時", demand: "200〜600kW", usage: "8〜25万kWh", monthly: "240〜750万円", yearly: "2,880〜9,000万円" },
  { type: "アパレルショップ（SC内）", area: "30〜100坪", hours: "10〜21時", demand: "10〜30kW", usage: "1,000〜3,000kWh", monthly: "3〜9万円", yearly: "36〜108万円" },
  { type: "量販店（家電）", area: "500〜2,000坪", hours: "10〜21時", demand: "200〜700kW", usage: "8〜25万kWh", monthly: "240〜750万円", yearly: "2,880〜9,000万円" },
  { type: "書店（中規模）", area: "100〜300坪", hours: "10〜22時", demand: "20〜60kW", usage: "2,000〜5,000kWh", monthly: "6〜15万円", yearly: "72〜180万円" },
  { type: "100円ショップ（標準）", area: "80〜200坪", hours: "10〜21時", demand: "20〜50kW", usage: "2,000〜5,000kWh", monthly: "6〜15万円", yearly: "72〜180万円" },
  { type: "ショッピングモール（中）", area: "テナント含む5,000坪以上", hours: "10〜21時", demand: "1,000kW〜3MW", usage: "50〜150万kWh", monthly: "1,500万〜4,500万円", yearly: "1.8億〜5.4億円" },
];

const barData = [
  { label: "ショッピングモール", value: 90, color: "bg-slate-700", note: "1,500万〜" },
  { label: "食品スーパー（大）", value: 60, color: "bg-sky-600", note: "150〜450万円" },
  { label: "ホームセンター", value: 50, color: "bg-emerald-600", note: "240〜750万円" },
  { label: "家電量販店", value: 50, color: "bg-rose-500", note: "240〜750万円" },
  { label: "食品スーパー（小）", value: 30, color: "bg-amber-500", note: "30〜75万円" },
  { label: "ドラッグストア", value: 20, color: "bg-purple-500", note: "15〜36万円" },
  { label: "コンビニ（1店）", value: 12, color: "bg-teal-500", note: "10〜20万円" },
  { label: "アパレルショップ", value: 6, color: "bg-sky-400", note: "3〜9万円" },
];

const breakdownData = [
  { item: "冷蔵・冷凍ショーケース", ratio: "35〜50%（食品系）", bar: 42, color: "bg-sky-500" },
  { item: "照明（売場・バックヤード）", ratio: "20〜35%", bar: 27, color: "bg-amber-500" },
  { item: "空調（冷暖房）", ratio: "15〜25%", bar: 20, color: "bg-emerald-500" },
  { item: "冷凍機・外部設備", ratio: "5〜15%（食品系）", bar: 10, color: "bg-rose-500" },
  { item: "POS・IT設備", ratio: "2〜8%", bar: 5, color: "bg-purple-400" },
];

export default function RetailStoreElectricityCostBenchmarkPage() {
  return (
    <>
      <ArticleJsonLd
        headline="小売店舗の電気代相場｜業態・坪数別のベンチマーク"
        description="コンビニ・ドラッグストア・スーパー・アパレルなど小売業態別の電気代相場を坪数別に解説。照明・冷蔵設備・空調の内訳と、多店舗展開時のコスト管理ポイントも紹介します。"
        url="https://simulator.eic-jp.org/retail-store-electricity-cost-benchmark"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "小売店舗の電気代相場" },
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
        <span className="text-slate-800">小売店舗の電気代相場</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">BENCHMARK ／ 相場・削減効果</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          小売店舗の電気代相場
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">業態・坪数別のベンチマーク</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          小売業の電気代は、業態・営業時間・冷蔵設備の有無によって大きく異なります。24時間営業のコンビニは1店舗でも月10〜20万円かかる一方、食品スーパーや大型量販店では月数百万円に達します。
          多店舗展開を行う小売業にとって、1店舗あたりの電気代の最適化は年間コスト管理の重要課題です。本ページでは主要業態ごとの電気代相場を坪数・規模別にまとめました。
        </p>
      </header>

      {/* 概要説明 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">小売店舗の電気代を決める3つの要因</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
              <h3 className="font-semibold text-sky-800">① 冷蔵・冷凍設備</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                食品系小売（スーパー・コンビニ）では冷蔵・冷凍ショーケースが電気代の35〜50%を占め、24時間稼働するため常時高い電力消費が続きます。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <h3 className="font-semibold text-amber-800">② 照明の質・量</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                売場の明るさは集客に影響するため高照度が求められます。LED化の有無で照明コストが40〜60%変わり、多店舗展開では差が大きく出ます。
              </p>
            </div>
            <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
              <h3 className="font-semibold text-emerald-800">③ 営業時間・規模</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                24時間営業は深夜の稼働コストがかかるうえ、デマンドピークの管理が難しくなります。営業面積の拡大は設備の比例以上のコスト増につながる場合があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* メインテーブル */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態・坪数別 小売店舗電気代相場一覧</h2>
          <p className="mt-2 text-sm text-slate-600">2024〜2025年度の料金水準をベースにした概算値（1店舗あたり）</p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-slate-700">業態・規模</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">売場面積</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">営業時間</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">契約電力</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月間使用量</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">月額電気代</th>
                  <th className="whitespace-nowrap px-4 py-2 text-right font-semibold text-slate-700">年間換算</th>
                </tr>
              </thead>
              <tbody>
                {benchmarkData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-800">{row.type}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.area}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-right text-slate-600">{row.hours}</td>
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

      {/* バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">業態別 月額電気代の規模感（代表値）</h2>
          <div className="mt-5 space-y-4">
            {barData.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="w-44 shrink-0 text-sm text-slate-700">{item.label}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.value}%` }} />
                </div>
                <span className="w-28 shrink-0 text-right text-sm font-semibold text-slate-700">{item.note}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">※各業態の代表的な単店規模における月額電気代の目安です。</p>
        </div>
      </section>

      {/* 内訳バーグラフ */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">小売店舗（食品系）の電気代内訳</h2>
          <p className="mt-2 text-sm text-slate-600">冷蔵・冷凍設備が最大の電気消費源です</p>
          <div className="mt-5 space-y-4">
            {breakdownData.map((item) => (
              <div key={item.item} className="flex items-center gap-3">
                <span className="w-48 shrink-0 text-sm text-slate-700">{item.item}</span>
                <div className="flex-1 rounded bg-slate-100">
                  <div className={`h-4 rounded ${item.color}`} style={{ width: `${item.bar * 2}%` }} />
                </div>
                <span className="w-32 shrink-0 text-right text-sm font-semibold text-slate-700">{item.ratio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 多店舗展開時のコスト管理 */}
      <section className="mt-6">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">多店舗展開時のコスト管理ポイント</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">一括契約・まとめ交渉</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                複数店舗をまとめて小売電気事業者と交渉することで、電力量単価の引き下げが可能な場合があります。
                50店舗以上を持つチェーンでは、一括入札で5〜10%程度のコスト削減事例が報告されています。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">標準化によるコスト比較</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                店舗ごとに「坪あたり電気代」「売上高対電気代比率」を集計・比較することで、
                コスト異常の店舗を早期に特定し、対策の優先順位をつけることができます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">冷蔵ショーケースの省エネ化</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                夜間のショーケースカーテン設置や、インバータ制御型冷凍機への更新で20〜30%の冷蔵電力削減が見込めます。
                食品系チェーンでは最もROIが高い省エネ施策のひとつです。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <h3 className="font-semibold text-slate-900">LED照明への切り替え</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                蛍光灯からLEDへの切り替えで照明電力を40〜60%削減できます。
                多店舗展開での一括導入はコストダウンになりやすく、補助金活用と組み合わせることで投資回収を早めることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相場より高い場合の確認ポイント */}
      <section className="mt-6">
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">相場より電気代が高い場合に確認すべきこと</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
            <li><strong>冷蔵ショーケースの設定温度・扉の開閉状況：</strong>設定が適切か、扉パッキンの劣化がないか確認。</li>
            <li><strong>照明の点灯スケジュール：</strong>閉店後も照明が点灯したままになっていないか確認。タイマー制御の導入を検討。</li>
            <li><strong>空調のフィルター清掃：</strong>詰まったフィルターは空調効率を大幅に低下させます。月1〜2回の清掃が基本。</li>
            <li><strong>深夜電力の活用：</strong>冷凍機や設備の予冷・予熱を深夜時間帯に集中させることで電力量料金を削減できます。</li>
            <li><strong>電力プランの見直し：</strong>営業時間や負荷パターンに合ったプランになっているか、電力会社に確認してください。</li>
          </ul>
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
            { href: "/led-air-conditioning-reduction-effect", title: "LED化・空調最適化の削減効果", description: "設備対策で使用量をどれだけ下げられるか" },
            { href: "/restaurant-electricity-cost-benchmark", title: "飲食店の電気代相場", description: "業態・席数・営業時間別の飲食店ベンチマーク" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "毎月変動する燃調費の仕組みと影響を解説" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="店舗の電気代リスクを診断する"
          description="契約電力・月間使用量を入力して、現在の電気代水準と今後の上昇リスクをシミュレーションできます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to-start-electricity-contract-review", label: "電力契約の見直し方を読む" },
          ]}
        />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
