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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["for-executives"];


const pageTitle = "電力コストのKPI管理と経営ダッシュボードの設計｜経営層向け";
const pageDescription =
  "電力コストを経営KPIとして定常的に監視するためのダッシュボード設計と指標の選び方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/executive-electricity-kpi-dashboard";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力コスト KPI", "電気代 ダッシュボード", "経営 電力コスト管理", "電気料金 KPI"],
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

const kpiList = [
  { kpi: "電力コスト／売上高比率", unit: "%", frequency: "月次", alert: "前年同月比+10%超", note: "感応度の基本指標" },
  { kpi: "kWh単価（平均買電単価）", unit: "円/kWh", frequency: "月次", alert: "前月比+5%超", note: "単価動向の監視" },
  { kpi: "デマンドピーク値", unit: "kW", frequency: "月次", alert: "契約電力の90%超", note: "基本料金に直結" },
  { kpi: "前年同月比電気代", unit: "円・%", frequency: "月次", alert: "+15%超で要報告", note: "トレンド把握" },
  { kpi: "予算消化率（電力費）", unit: "%", frequency: "月次", alert: "累計予算比+10%超", note: "予算管理の基礎" },
  { kpi: "拠点別kWh単価", unit: "円/kWh", frequency: "四半期", alert: "拠点間格差+30%超", note: "契約見直しのトリガー" },
  { kpi: "省エネ目標進捗率", unit: "%", frequency: "四半期", alert: "達成率70%未満", note: "削減施策の評価" },
  { kpi: "電力費予測（3ヶ月先）", unit: "万円", frequency: "月次", alert: "予算比+20%以上乖離", note: "先行管理のため" },
];

const dashboardConfig = [
  {
    name: "月次報告用ダッシュボード",
    audience: "経営会議・取締役会",
    items: ["月次電力費合計・前年比", "kWh単価推移グラフ", "予算vs実績差異", "拠点別ランキング", "対策施策の進捗サマリー"],
    format: "1ページPDF or スライド1枚",
  },
  {
    name: "日次監視用ダッシュボード",
    audience: "設備・購買担当者",
    items: ["前日使用量・前週比", "デマンド監視グラフ", "異常値アラート", "拠点別リアルタイム使用量"],
    format: "社内システム or BIツール画面",
  },
];

export default function ExecutiveElectricityKpiDashboardPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力コストのKPI管理と経営ダッシュボードの設計｜経営層向け"
        description="電力コストを経営KPIとして定常的に監視するためのダッシュボード設計と指標の選び方を整理します。"
        url="https://simulator.eic-jp.org/executive-electricity-kpi-dashboard"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力コストのKPI管理と経営ダッシュボードの設計" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電力コストのKPI管理とダッシュボード設計</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電力コストのKPI管理と経営ダッシュボードの設計
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力コストは「今月の電気代」として受け身に把握されがちですが、年間数千万〜数億円規模になる企業では
          経営KPIとして積極的に管理すべき重要指標です。適切な指標を選定し、ダッシュボードを設計することで、
          コスト異常の早期発見・予算管理・経営報告の質を一段引き上げることができます。
          本ページでは、経営層が定常監視すべきKPIの一覧と、ダッシュボード構成の実務ガイドを整理します。
        </p>
      </header>

      {/* セクション1: なぜKPI管理が必要か */}
      <section className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. なぜ電力コストをKPIとして監視すべきか</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            多くの企業では電力費は「確認するが管理しない」状態に陥っています。
            請求書が届いてから初めて金額を把握し、予算超過がわかっても手が打てない——このサイクルを脱するには、
            先行指標を持ち、異常を早期に検知する仕組みが必要です。
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "売上高電力コスト比率の変動幅",
                body: "2020年から2025年にかけて、製造業・ホテル・食品業では売上高対比の電力費比率が1〜3ポイント上昇した事例が複数報告されています。この変動幅は営業利益率を侵食するレベルです。",
              },
              {
                title: "kWh単価は毎月変わる",
                body: "燃料費調整額・市場調達コストの影響で、市場連動型契約では月ごとにkWh単価が変動します。単価の異常上昇を早期に検知しなければ、想定外の出費につながります。",
              },
              {
                title: "デマンドコントロールの重要性",
                body: "電気料金の基本料金はデマンド（最大需要電力）で決まります。デマンドピークを超過すると翌1年間の基本料金が引き上げられるため、ピーク管理はコスト管理の要です。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: 主要KPI一覧表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 監視すべき主要KPI一覧</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            以下は経営レベルで監視すべきKPIの標準セットです。企業規模・業種に応じて取捨選択してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">KPI名称</th>
                  <th className="p-3 text-center font-semibold">単位</th>
                  <th className="p-3 text-center font-semibold">報告頻度</th>
                  <th className="p-3 text-left font-semibold">アラート基準（例）</th>
                  <th className="p-3 text-left font-semibold">管理上の意義</th>
                </tr>
              </thead>
              <tbody>
                {kpiList.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{row.kpi}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600">{row.unit}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600">{row.frequency}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-red-700 font-medium">{row.alert}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※ アラート基準は業種・規模によって調整が必要です。上記は一般的な目安です。</p>
        </div>
      </section>

      {/* セクション3: 閾値設定の考え方 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. KPIの閾値設定の考え方</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            KPIを設定しても「アラートを出す基準値」が明確でなければ形骸化します。
            閾値の設定には以下の3つのアプローチを組み合わせるのが実務的です。
          </p>
          <div className="mt-5 space-y-4">
            {[
              {
                title: "アプローチ①：前年同月比ベース",
                body: "前年同月と比較して+10%超を黄色アラート、+20%超を赤アラートとする方法。季節変動を吸収できるため、月次管理に最も適しています。ただし、前年が異常値だった場合は基準として機能しないため注意が必要です。",
              },
              {
                title: "アプローチ②：予算比ベース",
                body: "年度予算で確定した電力費予算との比較で管理する方法。予算消化率が累計ベースで110%を超えた時点でアクションを取るルールが一般的です。予算策定時の電気代単価前提を確認することが前提となります。",
              },
              {
                title: "アプローチ③：絶対値ベース（kWh単価）",
                body: "kWh単価が特定の閾値（例：30円/kWh）を超えた場合に通知するルール。市場連動型契約では卸電力市場の急騰時に単価が跳ね上がるため、絶対値ベースの上限設定が有効です。",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション4: ダッシュボード構成例 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. ダッシュボード構成例</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dashboardConfig.map((db, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-900">{db.name}</h3>
              <p className="mt-1 text-xs text-slate-500">対象：{db.audience}　／　形式：{db.format}</p>
              <ul className="mt-3 space-y-1">
                {db.items.map((item, j) => (
                  <li key={j} className="text-sm leading-7 text-slate-700 flex gap-2">
                    <span className="text-sky-600 font-bold shrink-0">▸</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-semibold text-slate-900">ダッシュボード構築の優先順位</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            まず月次報告用のシンプルな1ページ資料から始めることを推奨します。
            完璧なシステムを目指すより、「毎月必ず見る数字」を3〜5個に絞って定着させる方が実効性は高くなります。
            その後、データ収集の自動化・BIツール連携へと段階的に発展させてください。
          </p>
        </div>
      </section>

      {/* セクション5: データ収集の実務 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. データ収集の実務と自動化</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            KPI管理の最大のボトルネックは「データ収集の手間」です。以下の方法を段階的に整備してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">データ収集方法</th>
                  <th className="p-3 text-center font-semibold">コスト</th>
                  <th className="p-3 text-center font-semibold">リアルタイム性</th>
                  <th className="p-3 text-left font-semibold">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["請求書からの手動転記", "無料", "月次", "最も手軽。拠点が多いと負担大。Excelで可。"],
                  ["電力会社のWebポータル", "無料（多くの場合）", "月次〜日次", "電力会社によって機能差あり。まず確認推奨。"],
                  ["スマートメーターAPI連携", "要システム費", "30分〜1時間単位", "デマンド管理・異常検知に有効。大規模向け。"],
                  ["エネルギー管理システム（EMS）", "要導入コスト", "リアルタイム", "複数拠点一括管理・省エネ分析も可能。"],
                  ["電力会社のBEMS連携サービス", "要契約", "15分〜日次", "大手電力会社が提供するケースあり。要確認。"],
                ].map(([method, cost, realtime, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-medium text-slate-800">{method}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600">{cost}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-slate-600">{realtime}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション6: 拠点別比較と経営報告 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">6. 拠点別比較と経営会議への接続</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">拠点別・施設別の比較表示</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              複数拠点を持つ企業では、kWh単価・床面積あたり電力費・前年比などを拠点別に並べた比較表が有効です。
              コスト水準が高い拠点を特定することで、優先的に対策すべき場所を絞り込めます。
              少なくとも四半期に一度は拠点別データのレビューを実施してください。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-base font-semibold text-slate-900">経営会議への報告フォーマット</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              経営会議では「数字の羅列」ではなく「アクションにつながるサマリー」を提示することが重要です。
              推奨フォーマット：①今月の電力費実績と予算差異、②主な変動要因（単価上昇か使用量増加か）、
              ③対応施策と進捗、④翌月の見通し——の4点をA4一枚にまとめることを基本とします。
            </p>
          </div>
        </div>
      </section>

      {/* セクション7: 経営層のアクションアイテム */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">7. 経営層のアクションアイテム</h2>
        <ol className="mt-4 space-y-2 text-sm leading-7 text-slate-700 list-decimal list-inside">
          <li>担当部門に対し、本ページのKPI一覧から自社に適した5〜8項目を選定させる</li>
          <li>月次電力費レポートのフォーマットを標準化し、経営会議の定例議題として設定する</li>
          <li>電力会社のWebポータルを確認し、取得可能なデータの範囲を整理させる</li>
          <li>デマンドピーク管理のルールと責任者を明確にする</li>
          <li>拠点別kWh単価の比較表を四半期ごとに経営会議に提出するルールを設ける</li>
        </ol>
      </section>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "電力費上昇がEBITDA・営業利益率に与える財務インパクトを試算するフレームワーク。",
            },
            {
              href: "/executive-board-reporting-items",
              title: "取締役会で報告すべき電力リスク5項目",
              description: "経営会議の議題として設定すべき電力リスクの論点を整理します。",
            },
            {
              href: "/executive-multi-site-cost-management",
              title: "複数拠点の電力コスト一元管理の進め方",
              description: "多拠点企業が電力費を効率的に管理するための体制と手順を解説します。",
            },
            {
              href: "/executive-board-report-template",
              title: "取締役会向け電力リスク報告テンプレートの作り方",
              description: "取締役会・経営会議で使える電力コスト・リスク報告のテンプレート構成と記載項目。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直し、まず何から始めるか",
              description: "KPI管理と並行して進める契約見直しの優先順位と進め方。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電力コストの実態を数値で把握する"
          description="シミュレーターを使って自社の電気代上昇リスクを確認し、KPI管理の第一歩を踏み出しましょう。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/articles", label: "関連解説記事を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
