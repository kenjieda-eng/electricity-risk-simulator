import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import ThermalVsRenewableChart from "../../components/area-supply/ThermalVsRenewableChart";
import { FY_TREND } from "../../data/areaSupplyData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["power-procurement"];


const pageTitle = "火力 vs 再エネ 年度別推移｜法人電気料金への影響を読む";
const pageDescription =
  "FY2023→FY2026で火力比率が66.6%→56.4%に低下、再エネは26.1%→27.7%に上昇。9エリア合計の30分値データから年度別の電源構成推移を分析し、法人の中長期的な電力調達戦略への示唆を解説します。";
const pageUrl = "https://simulator.eic-jp.org/thermal-vs-renewable-trend";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "火力発電 推移",
    "再エネ比率 年度別",
    "電源構成 変化",
    "脱炭素 電力",
    "法人電気料金 中長期",
    "原子力 再稼働 影響",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/power-procurement", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/power-procurement"],
  },
};

export default function ThermalVsRenewableTrendPage() {
  return (
    <>
      <ArticleJsonLd
        headline="火力 vs 再エネ 年度別推移｜法人電気料金への影響を読む"
        description="FY2023→FY2026で火力比率が66.6%→56.4%に低下、再エネは26.1%→27.7%に上昇。9エリア合計の30分値データから年度別の電源構成推移を分析し、法人の中長期的な電力調達戦略への示唆を解説します。"
        url="https://simulator.eic-jp.org/thermal-vs-renewable-trend"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "火力 vs 再エネ 年度別推移" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/power-procurement" className="underline-offset-2 hover:underline">電力調達の仕組みを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">火力 vs 再エネ 年度別推移</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">POWER SUPPLY ／ 電力調達の仕組みを知る</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          火力 vs 再エネ 年度別推移
        </h1>
        <p className="mt-1 text-base font-medium text-sky-800">法人電気料金への影響を読む</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          日本の電源構成は年々変化しています。FY2023→FY2026の4年間で火力比率は66.6%→56.4%に低下し、
          再エネは26.1%→27.7%に上昇、原子力もFY2024の861MW→FY2026の1,326MWと回復傾向にあります。
          9エリア合計の30分値実績データ（30万件超）から、法人の中長期的な電力調達戦略に必要な
          トレンドを読み解きます。
        </p>
      </header>

      {/* キーナンバー */}
      <section className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500">火力比率の変化</p>
          <p className="text-2xl font-bold text-slate-900">66.6% → 56.4%</p>
          <p className="text-xs text-slate-500">FY2023 → FY2026</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500">再エネ比率の変化</p>
          <p className="text-2xl font-bold text-emerald-700">26.1% → 27.7%</p>
          <p className="text-xs text-slate-500">FY2023 → FY2026</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500">原子力の回復</p>
          <p className="text-2xl font-bold text-indigo-700">861 → 1,326 MW</p>
          <p className="text-xs text-slate-500">FY2024 → FY2026 平均出力</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-slate-500">太陽光出力の推移</p>
          <p className="text-2xl font-bold text-amber-600">1,129 → 1,224 MW</p>
          <p className="text-xs text-slate-500">FY2023 → FY2026 平均</p>
        </div>
      </section>

      {/* チャート */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別 電源構成推移（9エリア合計）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          火力・原子力・再エネの年度別平均出力（MW）です。火力の縮小と原子力・再エネの増加が読み取れます。
        </p>
        <div className="mt-4">
          <ThermalVsRenewableChart />
        </div>
        <p className="mt-2 text-xs text-slate-500">出典: 各一般送配電事業者公表の30分値データを集計。FY2026は4月上旬までの暫定値。</p>
      </section>

      {/* 年度別テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">年度別 詳細データ</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-50">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">年度</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">需要（MW）</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">火力</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">火力比率</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">再エネ</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">再エネ比率</th>
                <th className="border border-slate-200 px-3 py-2 text-right font-semibold text-slate-700">原子力</th>
              </tr>
            </thead>
            <tbody>
              {FY_TREND.map((row, i) => {
                const thermalPct = ((row.thermal / row.demand) * 100).toFixed(1);
                const renewPct = ((row.renewable / row.demand) * 100).toFixed(1);
                return (
                  <tr key={row.fy} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{row.fy}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.demand.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.thermal.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold">{thermalPct}%</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.renewable.toLocaleString()}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-semibold text-emerald-700">{renewPct}%</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{row.nuclear.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3つの変化 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">読み取れる3つの構造変化</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">1. 火力依存の低下は進んでいるが、まだ過半数</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              FY2026でも火力は56.4%を占めており、LNG・石炭の国際価格が法人電気料金を大きく左右する構造は変わりません。
              ただしFY2023比で10ポイント低下しており、燃料費変動の「感応度」は徐々に下がっています。
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">2. 再エネ増加は「量」より「影響」が重要</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              再エネ比率は26.1%→27.7%と1.6ポイントの増加に留まりますが、太陽光の集中導入により
              <Link href="/duck-curve-electricity-price-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ダックカーブ</Link>が深化し、
              昼夕の市場価格差が拡大しています。比率以上に「時間帯別の影響」が大きい点が特徴です。
            </p>
          </div>
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-base font-semibold text-slate-900">3. 原子力の回帰が電源構成を変えつつある</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              FY2024の861MW→FY2026の1,326MWと、関西・九州を中心に原子力のベースロード供給が増加。
              これらのエリアでは火力の出力余力が生まれ、JEPX市場価格が相対的に安定しやすい構造に。
              一方、原子力ゼロの北海道・中部・北陸との格差が拡大しています。
            </p>
          </div>
        </div>
      </section>

      {/* 法人の戦略 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">法人の中長期 電力調達戦略への示唆</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">短期（1〜2年）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              火力比率はまだ50%超。LNG・石炭価格の変動リスクは依然として大きく、
              固定価格型プランによるリスクヘッジが有効です。特にLNG依存エリア（東京・中部）では要注意。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">中期（3〜5年）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              再エネの導入が進むほどダックカーブが深化し、時間帯別の価格差が拡大。
              市場連動型プランの企業は需要シフトや蓄電池の導入で昼間の安い電力を活用する戦略が有効。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">長期（5年超）</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              脱炭素政策の加速により再エネ比率はさらに上昇。カーボンプライシングが導入されれば
              火力電源のコストが上昇し、再エネやPPAの経済合理性が高まる可能性があります。
            </p>
          </div>
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h3 className="text-base font-semibold text-sky-900">エリア選定</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              新規事業所の設置や工場移転を検討する場合、エリアの電源構成は電力コストの構造的な差を生みます。
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別電源構成マップ</Link>で
              各エリアの特徴を比較してください。
            </p>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          ※ FY2026は2026年4月上旬までの暫定集計です。再エネ比率は発電端ベース（送電ロス・自家消費分を含む）で
          算出しており、最終需要端の数値とは異なります。また、年度ごとのデータ収集エリア数にばらつきがあるため、
          単純な年度間比較には注意が必要です。
        </p>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "9エリアの電源構成の違いを可視化。" },
            { href: "/duck-curve-electricity-price-impact", title: "ダックカーブとは何か", description: "再エネ増加が市場価格に与える影響を解説。" },
            { href: "/renewable-energy-surcharge", title: "再エネ賦課金とは", description: "再エネ導入拡大と法人負担の関係。" },
            { href: "/fuel-cost-adjustment", title: "燃料費調整額とは", description: "火力依存度と燃調費の関係を解説。" },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="電源構成の変化が自社にどう影響するか診断する"
          description="現在の契約内容と使用パターンから、燃料費変動・再エネ賦課金のリスクを数値化できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles/power-procurement", label: "電力調達の記事一覧" },
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
