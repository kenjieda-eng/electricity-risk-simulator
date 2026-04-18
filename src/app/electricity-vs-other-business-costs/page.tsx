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
  "電気料金上昇率と他の事業コスト上昇率を比較する｜法人のコスト構造全体で見る";
const pageDescription =
  "電気代、人件費、原材料費、物流費、賃料の上昇率を2019年→2025年で比較。業種別のコスト構造における電気代の位置づけ、経営判断への示唆を整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 事業コスト 比較",
    "電気料金 人件費 上昇率",
    "法人 コスト構造 電気代",
    "電気料金上昇 経営影響",
    "事業コスト 上昇率 2025",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/electricity-vs-other-business-costs",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/electricity-vs-other-business-costs",
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

// --- データ定義 ---

type CostRow = {
  item: string;
  rate2019: string;
  rate2025: string;
  changeRate: string;
  monthlyImpact: string; // 売上1億円・標準的規模の月額影響例
  controllable: string;
};

const COST_COMPARISON_ROWS: CostRow[] = [
  {
    item: "電気代",
    rate2019: "基準（100）",
    rate2025: "約155〜175",
    changeRate: "+55〜75%",
    monthlyImpact: "+40〜90万円",
    controllable: "◎（契約見直し・省エネ）",
  },
  {
    item: "人件費（賃金）",
    rate2019: "基準（100）",
    rate2025: "約115〜125",
    changeRate: "+15〜25%",
    monthlyImpact: "+150〜500万円",
    controllable: "△（採用・配置転換）",
  },
  {
    item: "原材料費",
    rate2019: "基準（100）",
    rate2025: "約130〜180",
    changeRate: "+30〜80%",
    monthlyImpact: "業種差大",
    controllable: "△（調達先分散・在庫管理）",
  },
  {
    item: "物流費（輸送コスト）",
    rate2019: "基準（100）",
    rate2025: "約130〜160",
    changeRate: "+30〜60%",
    monthlyImpact: "+20〜80万円",
    controllable: "△（契約条件・モーダルシフト）",
  },
  {
    item: "賃料（オフィス・工場）",
    rate2019: "基準（100）",
    rate2025: "約105〜125",
    changeRate: "+5〜25%",
    monthlyImpact: "+5〜50万円",
    controllable: "▲（契約更新時のみ）",
  },
];

type IndustryRow = {
  industry: string;
  salesRatio: string;
  costRatio: string;
  priority: string;
};

const INDUSTRY_ELECTRICITY_RATIO: IndustryRow[] = [
  {
    industry: "製造業（素材系：鉄鋼・化学・紙）",
    salesRatio: "5〜12%",
    costRatio: "10〜20%",
    priority: "最優先",
  },
  {
    industry: "食品製造業",
    salesRatio: "2〜5%",
    costRatio: "4〜10%",
    priority: "高",
  },
  {
    industry: "自動車・機械製造業",
    salesRatio: "1〜3%",
    costRatio: "3〜6%",
    priority: "中〜高",
  },
  {
    industry: "スーパー・量販店（小売）",
    salesRatio: "1〜3%",
    costRatio: "5〜12%",
    priority: "高",
  },
  {
    industry: "飲食業",
    salesRatio: "2〜5%",
    costRatio: "5〜12%",
    priority: "高",
  },
  {
    industry: "ホテル・宿泊業",
    salesRatio: "3〜7%",
    costRatio: "8〜15%",
    priority: "最優先",
  },
  {
    industry: "オフィス系サービス業",
    salesRatio: "0.5〜1.5%",
    costRatio: "1〜3%",
    priority: "低〜中",
  },
  {
    industry: "医療・介護施設",
    salesRatio: "2〜4%",
    costRatio: "4〜8%",
    priority: "高",
  },
];

const MANAGEMENT_POINTS = [
  {
    no: "①",
    title: "上昇率の大きさより「絶対額と利益への直撃度」で優先度を決める",
    detail:
      "電気代は上昇率こそ最大だが、絶対額では人件費が大きい業種も多い。「利益への影響額÷営業利益」で数字を出すと、経営会議での納得感が高まる。",
  },
  {
    no: "②",
    title: "「コントロール可否」で打ち手の難易度を分類する",
    detail:
      "電気代は契約変更・省エネ・オンサイト発電・蓄電池など比較的短期に手を打てる。人件費削減は従業員モラルや採用競争力への副作用が大きく、短期の判断には向かない。",
  },
  {
    no: "③",
    title: "「電気代だけ対策」は施策集中で成果が出やすい",
    detail:
      "コスト全体の最適化は重要だが、意思決定が分散して施策が中途半端になりやすい。電気代は担当部門・施策メニュー・ROI計算が比較的明確なため、先行して動くことが多い。",
  },
  {
    no: "④",
    title: "コスト上昇の「転嫁可否」を業種構造で確認する",
    detail:
      "電気代値上がり分を価格転嫁できるかは業種・取引構造に依存する。BtoC・短サイクル商品は転嫁しやすく、BtoB長期契約・価格競争が激しい業種は転嫁困難で利益直撃になる。",
  },
  {
    no: "⑤",
    title: "「補助政策終了後の実態水準」で将来コストを試算しておく",
    detail:
      "国の激変緩和措置は段階的に縮小・終了しており、補助込みの現状請求額が恒常的に続く前提で予算を組むと、補助終了時に想定外の費用増となる。補助なし想定の試算を並行して持つことが重要。",
  },
];

export default function ElectricityVsOtherBusinessCostsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金上昇率と他の事業コスト上昇率を比較する｜法人のコスト構造全体で見る"
        description="電気代、人件費、原材料費、物流費、賃料の上昇率を2019年→2025年で比較。業種別のコスト構造における電気代の位置づけ、経営判断への示唆を整理。"
        url="https://simulator.eic-jp.org/electricity-vs-other-business-costs"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金上昇率と他の事業コスト上昇率を比較する" },
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
        <Link
          href="/articles/price-trends"
          className="underline-offset-2 hover:underline"
        >
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気代と他コストの上昇率比較</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電気料金上昇率と他の事業コスト上昇率を比較する
        </h1>
        <p className="mt-2 text-xs font-medium text-sky-700">
          電気料金の推移と高止まり
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          2019年を基準に、電気代・人件費・原材料費・物流費・賃料の5大事業コストが2025年にかけてどの程度上昇したかを比較します。
          電気代は上昇率でみると5コストの中でも最大水準にある一方、絶対額や「コントロールしやすさ」という観点では各コストに固有の特徴があります。
          コスト構造全体のなかで電気代をどう位置づけ、経営判断に活かすかを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 5大事業コスト上昇率比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            5大事業コストの上昇率比較（2019年→2025年）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各コストの上昇率、売上1億円規模での月額影響概算、コントロール可否を一覧で確認できます。
            月額影響は業種・契約内容により大きく変動するため、あくまで目安の水準感として参照ください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2">コスト項目</th>
                  <th className="border border-slate-200 px-3 py-2">2019年（基準）</th>
                  <th className="border border-slate-200 px-3 py-2">2025年水準</th>
                  <th className="border border-slate-200 px-3 py-2 text-red-700">変化率</th>
                  <th className="border border-slate-200 px-3 py-2">月額影響概算</th>
                  <th className="border border-slate-200 px-3 py-2">コントロール可否</th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.item}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">
                      {row.rate2019}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.rate2025}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-red-700">
                      {row.changeRate}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.monthlyImpact}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.controllable}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 変化率は公表統計・業界データの複数参照による概算値。電気代は高圧契約・燃料費調整額含む総請求ベース。月額影響は売上1億円・標準規模を想定した目安。
          </p>
        </section>

        {/* 電気代の上昇率が突出する理由 */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気代の上昇率が突出して見える構造的な理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の上昇率が他コストより大きく見える背景には、以下の複合要因があります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "燃料費調整額の急変動",
                body: "LNG・石炭の国際価格が2021〜2022年に急騰し、燃料費調整額がプラス方向に大幅拡大。基本料金部分は安定的でも、燃調部分だけで請求額が数十%変動する。",
              },
              {
                title: "再エネ賦課金の累積",
                body: "2012年度に制度開始した再エネ賦課金は毎年引き上げが続き、2024年度には3.49円/kWhに達した。2019年比で約+2円/kWhの上昇分が固定コストとして追加されている。",
              },
              {
                title: "市場連動型契約の影響",
                body: "JEPX（日本卸電力取引所）の市場価格が2020〜2021年冬に急騰し、市場連動型契約の企業は一時的に極端な高値を経験。固定型に比べ変動幅が大きい。",
              },
              {
                title: "補助終了後の実態水準",
                body: "2023〜2024年の政府激変緩和措置が請求額を見かけ上押し下げたが、補助縮小・終了後は本来の水準に戻るため、上昇率が一時的に加速して見える。",
              },
              {
                title: "契約更新時の単価改定",
                body: "電力会社が2023〜2024年に規制料金・標準メニューの単価を改定した。複数年契約の更新タイミングで実質的な値上げを経験した法人も多い。",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {card.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 業種別の電気代比率テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別の電気代比率と対策優先度
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代が事業コスト全体に占める比率は業種によって大きく異なります。
            売上高比・原価比・対策優先度を8業種で整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2">業種</th>
                  <th className="border border-slate-200 px-3 py-2">売上高比</th>
                  <th className="border border-slate-200 px-3 py-2">原価比</th>
                  <th className="border border-slate-200 px-3 py-2">対策優先度</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRY_ELECTRICITY_RATIO.map((row, i) => (
                  <tr
                    key={row.industry}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.industry}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.salesRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.costRatio}
                    </td>
                    <td
                      className={`border border-slate-200 px-3 py-2 font-medium ${
                        row.priority === "最優先"
                          ? "text-red-700"
                          : row.priority === "高"
                          ? "text-orange-700"
                          : row.priority === "中〜高"
                          ? "text-amber-700"
                          : "text-slate-600"
                      }`}
                    >
                      {row.priority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 比率は業界団体統計・財務省法人企業統計を参考とした概算レンジ。個社の実態は契約形態・操業状況により異なる。
          </p>
        </section>

        {/* 「電気代だけ対策」vs「コスト全体最適化」 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「電気代だけ対策」vs「コスト全体で最適化」の比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どちらのアプローチが適切かは、企業規模・コスト構造・意思決定速度によって異なります。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
              <h3 className="text-lg font-semibold text-sky-900">
                電気代単体の集中対策
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600">◎</span>
                  <span>担当部門と施策メニューが明確で、ROI算定が比較的容易</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600">◎</span>
                  <span>省エネ・契約変更・蓄電池導入など施策が体系化されており着手しやすい</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600">◎</span>
                  <span>契約変更は最短数ヶ月で効果が発現する</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-amber-600">△</span>
                  <span>コスト全体の最適化に比べ、インパクトの絶対額に上限がある業種もある</span>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-semibold text-slate-900">
                コスト構造全体の最適化
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600">◎</span>
                  <span>人件費・物流・原材料の見直しと組み合わせることで全体利益改善が大きくなる</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-sky-600">◎</span>
                  <span>業種の特性に合わせた「重点コスト」へのリソース集中ができる</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-amber-600">△</span>
                  <span>意思決定が複数部門・経営層に分散し、施策の実行速度が落ちやすい</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 text-amber-600">△</span>
                  <span>人件費削減は採用競争力・従業員エンゲージメントへの影響が大きい</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm leading-7 text-slate-700">
              <span className="font-semibold text-slate-900">実務的な判断軸：</span>
              電気代の売上比が1%を超えている業種・規模感の場合、まず電気代単体の見直しを先行させ、
              成果が出た段階でコスト全体の最適化プロジェクトに組み込む形が実行しやすい。
              電気代比率が低い業種でも「上昇率が大きく将来も続く構造的なコスト」として経営管理に
              織り込むことが重要。
            </p>
          </div>
        </section>

        {/* 経営層への説明で使える観点 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層への説明で使える5つの観点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代対策の予算・承認を経営層から得る際、他コストとの比較視点を持つと説得力が増します。
          </p>
          <div className="mt-4 space-y-3">
            {MANAGEMENT_POINTS.map((point) => (
              <div
                key={point.no}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {point.no} {point.title}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・電気代の上昇率（+55〜75%）は5大事業コストの中で最大水準であり、特に製造業・ホテル・飲食業では売上比・原価比でも存在感が大きい。</li>
            <li>・人件費は絶対額が大きく、削減施策のハードルも高い。電気代は比較的短期かつ副作用なく対策を進められる数少ないコスト項目である。</li>
            <li>・「電気代だけ」か「全体最適化」かは二者択一ではなく、電気代対策を先行させてから全体に展開するステップアプローチが実務的。</li>
            <li>・補助政策の縮小局面を踏まえ、補助なし想定の将来コストを試算したうえで中期予算に組み込むことが重要。</li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="electricity-vs-other-business-costs" terms={["燃料費調整額", "再エネ賦課金", "容量拠出金", "電力量料金", "市場連動プラン"]} />
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
              description:
                "特別高圧・高圧・低圧の10年推移をグラフと年表で整理。急騰局面・補助政策の見え方も確認。",
            },
            {
              href: "/sme-vs-large-company-electricity-impact",
              title: "中小企業と大企業で電気料金高騰の影響はどう違うか",
              description:
                "企業規模別の売上比・交渉力・価格転嫁力の差から、中小企業が特に厳しい構造的理由を解説。",
            },
            {
              href: "/manufacturing-vs-non-manufacturing-electricity-impact",
              title: "製造業と非製造業で電気料金推移の影響はどう出るか",
              description:
                "電力原単位・ピーク特性・転嫁力の違いから業種構造別の影響差を比較分析。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組みを理解する",
              description:
                "電気代上昇の主因である燃料費調整額の計算方法と変動の構造を解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代リスクをシミュレーションする"
          description="電気料金のさらなる上昇が自社の利益にどう影響するかを、売上・電気代・利益率から即時試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            {
              href: "/articles/price-trends",
              label: "電気料金推移の解説記事一覧",
            },
          ]}
        />
      </div>
    </main>
    </>
  );
}
