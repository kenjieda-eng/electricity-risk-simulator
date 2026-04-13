import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "複数拠点の電力コスト一元管理フレームワーク｜5拠点以上の法人向け";
const pageDescription =
  "5拠点以上を持つ法人のための電力コスト一元管理フレームワーク。拠点別の契約条件・単価・使用量の可視化、一括調達と個別最適の比較、月次ダッシュボード設計、グループ全体のリスクポートフォリオ管理を経営層・CFO向けに解説。";
const pageUrl = "https://simulator.eic-jp.org/executive-multi-site-cost-management";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "複数拠点 電力コスト管理",
    "電気代 一元管理",
    "一括調達 電力",
    "電力費 ダッシュボード",
    "多拠点 電気料金",
    "法人電力 ポートフォリオ管理",
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

const siteCostModel = [
  { site: "本社（東京）", area: "高圧（東京電力EP）", usage: "850,000", unitPrice: "22.4", annualCost: "1,904", contractEnd: "2026年3月", note: "次回更新で一括検討" },
  { site: "大阪工場", area: "特別高圧（関電工業）", usage: "3,200,000", unitPrice: "19.8", annualCost: "6,336", contractEnd: "2025年9月", note: "最重点管理拠点" },
  { site: "名古屋営業所", area: "高圧（中部電力）", usage: "320,000", unitPrice: "23.1", annualCost: "739", contractEnd: "2027年3月", note: "単価が最も高い" },
  { site: "福岡倉庫", area: "高圧（九州電力）", usage: "480,000", unitPrice: "20.5", annualCost: "984", contractEnd: "2026年9月", note: "冷凍倉庫で夜間消費大" },
  { site: "札幌支店", area: "低圧電力（北海道電力）", usage: "95,000", unitPrice: "25.8", annualCost: "245", contractEnd: "随時", note: "単価高・見直し余地あり" },
];

const bulkVsIndividual = [
  { aspect: "調達単価", bulk: "一括調達により0.5〜2円/kWh程度の値引き交渉が可能", individual: "各拠点が個別に交渉するため割引余地が小さい", winner: "一括" },
  { aspect: "契約管理コスト", bulk: "1契約（または少数）で管理コスト大幅削減", individual: "拠点数分の契約管理・更新管理が発生", winner: "一括" },
  { aspect: "地域・需要特性への対応", bulk: "全拠点に同一条件を適用するため最適化に制約", individual: "拠点ごとの需要特性・使用パターンに最適化できる", winner: "個別" },
  { aspect: "リスク分散", bulk: "単一供給者リスクが高まる", individual: "供給者を分散でき、リスクを低減できる", winner: "個別" },
  { aspect: "RE100・ESG対応", bulk: "一括でグリーン電力・非化石証書を調達しやすい", individual: "拠点ごとの調達になり、証明・管理が複雑", winner: "一括" },
  { aspect: "電力小売市場変化への対応", bulk: "全拠点が一斉に更新時期を迎え、タイミングの調整が必要", individual: "拠点ごとに最適なタイミングで市場対応できる", winner: "個別" },
  { aspect: "管理の透明性", bulk: "コスト全体を経営が把握しやすい", individual: "各拠点の担当者に任され、全体最適化が困難", winner: "一括" },
];

const dashboardItems = [
  { category: "コスト管理", kpi: "拠点別月次電力費（万円）", frequency: "月次", threshold: "予算比±10%でアラート", owner: "経理・経営企画" },
  { category: "コスト管理", kpi: "全社電力費合計・予算対比", frequency: "月次", threshold: "全社計▲500万円超で経営報告", owner: "CFO" },
  { category: "単価管理", kpi: "拠点別kWh単価（円/kWh）", frequency: "月次", threshold: "業種ベンチマーク+15%超で要検討", owner: "経営企画" },
  { category: "使用量管理", kpi: "拠点別電力消費量（kWh）", frequency: "月次", threshold: "前年同月比+15%超で調査", owner: "設備・総務" },
  { category: "使用量管理", kpi: "電力原単位（kWh/生産量等）", frequency: "月次", threshold: "目標値±5%以内で管理", owner: "生産・設備" },
  { category: "契約管理", kpi: "契約更新期限リスト", frequency: "四半期", threshold: "更新6ヶ月前に検討開始", owner: "経営企画" },
  { category: "リスク管理", kpi: "市場連動比率（%）", frequency: "四半期", threshold: "連動比率50%超は要ヘッジ検討", owner: "CFO" },
  { category: "リスク管理", kpi: "最高リスク拠点の特定", frequency: "半期", threshold: "電力費/売上比率上位3拠点", owner: "経営企画" },
];

const actionItems = [
  {
    title: "1. 全拠点の電力契約条件を一覧化する",
    body: "供給者・契約種別・単価・契約期間・更新時期を一覧表にまとめる。経理・総務・設備管理が別々に管理しているデータを集約する作業から始める。これだけで「割高な拠点」「近く更新を迎える拠点」が即座に可視化される。",
  },
  {
    title: "2. 重点管理拠点（電力費Top3）を特定し集中管理する",
    body: "全社電力費の80%程度は上位3〜5拠点が占める（パレートの法則）。これらの重点拠点についてのみ、まず詳細な使用量分析・単価比較・省エネ可能性評価を実施することで、管理コストを最小化しながら最大効果を得られる。",
  },
  {
    title: "3. 月次モニタリングダッシュボードを整備する",
    body: "全拠点の電力費・単価・使用量を月次で集計するダッシュボードを構築する。複雑なシステムは不要で、まず共有Excelやスプレッドシートで始める。拠点担当者が月初に入力し、経営企画が集計・異常値を検知する体制を作る。",
  },
  {
    title: "4. 一括調達の可能性を年次で評価する",
    body: "複数拠点の契約更新時期が近づいたタイミングで、一括調達の価格メリットを電力小売事業者に見積もり依頼する。年間5拠点分・5,000万円超の調達規模があれば、一括調達での単価低減交渉が実質的に可能になる。",
  },
  {
    title: "5. グループ全体のリスクポートフォリオを管理する",
    body: "市場連動型契約の比率・契約更新集中リスク・供給者集中リスクをグループ全体で把握する。固定契約と市場連動契約のバランス、複数の供給者への分散がリスクポートフォリオの基本方針となる。",
  },
];

export default function ExecutiveMultiSiteCostManagementPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/for-executives" className="underline-offset-2 hover:underline">経営層・CFO向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">複数拠点コスト管理</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          複数拠点の電力コスト一元管理フレームワーク
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">5拠点以上の法人向け管理設計ガイド</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          複数拠点を持つ法人では、電力費の管理が各拠点の担当者に分散し、全社での最適化が進まないケースが多くあります。
          「各拠点がバラバラに契約更新を行い、割高な条件が放置されている」「全社で年間いくら電気代を払っているか経営が把握していない」
          という状況は珍しくありません。本ページでは、5拠点以上の法人が電力コストを一元管理するためのフレームワーク——
          拠点コスト可視化・一括調達判断・月次ダッシュボード・リスクポートフォリオ——を経営層・CFO向けに解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 複数拠点の電力費はパレートの法則が働き、上位3〜5拠点が全体の<strong>70〜80%</strong>を占める。重点管理拠点を絞り込むことが効率的。</li>
          <li>・ 全拠点の電力契約条件（単価・更新時期・契約種別）を一覧化するだけで、即座に「割高拠点」「リスク集中拠点」が特定できる。</li>
          <li>・ 年間調達額5,000万円超であれば、一括調達による単価低減交渉で年間数百万円のコスト削減余地がある。</li>
          <li>・ 月次ダッシュボードを整備することで、単価急騰・使用量異常・契約更新漏れを早期に発見できる管理体制が確立できる。</li>
          <li>・ 固定契約と市場連動契約のバランス・供給者分散が、多拠点リスクポートフォリオ管理の基本方針となる。</li>
        </ul>
      </section>

      {/* セクション1: なぜ多拠点の電力管理が難しいか */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. なぜ多拠点の電力コスト管理は難しいのか</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            多拠点法人の電力コスト管理が難しい理由は、管理の分散と情報の断絶にあります。
            典型的な問題パターンを把握し、自社の課題を特定してください。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              { label: "管理主体の分散", desc: "本社・工場・営業所でそれぞれ担当者が異なり、全社統合データが存在しない。経営企画が全体を把握できていない。" },
              { label: "契約更新の個別対応", desc: "各拠点が独自のタイミングで電力会社と契約更新を行い、一括交渉の機会を逃している。" },
              { label: "単価の差異が見えない", desc: "拠点ごとにkWh単価が異なるが、比較分析されていない。地域・規模・契約種別で2〜8円/kWhの差がある場合もある。" },
              { label: "省エネ効果の見えにくさ", desc: "省エネ投資の効果が拠点ごとに孤立し、グループ全体での省エネ原単位改善が可視化されない。" },
              { label: "市場リスクの集中", desc: "複数拠点が同一のPPS（特定規模電気事業者）と市場連動型契約を結んでいる場合、価格急騰リスクが集中する。" },
              { label: "ESG対応の複雑化", desc: "Scope2算定のために拠点別電力データを集めるのに多大な工数がかかり、GRI・TCFD開示が遅れる。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: 拠点別コスト管理シート例（5拠点モデル） */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. 拠点別コスト管理シート例（5拠点モデル）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            まず全拠点の契約条件を1枚のシートに集約することから始めます。
            以下は5拠点モデルの例です。年間電力費・kWh単価・更新時期を並べるだけで
            優先すべき拠点が見えてきます。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">拠点名</th>
                  <th className="p-3 text-left font-semibold">契約種別</th>
                  <th className="p-3 text-right font-semibold">年間消費量（kWh）</th>
                  <th className="p-3 text-right font-semibold">平均単価（円）</th>
                  <th className="p-3 text-right font-semibold">年間電力費（万円）</th>
                  <th className="p-3 text-center font-semibold">契約更新</th>
                  <th className="p-3 text-left font-semibold">備考</th>
                </tr>
              </thead>
              <tbody>
                {siteCostModel.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.site}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.area}</td>
                    <td className="p-3 border-b border-slate-100 text-right text-slate-700">{Number(row.usage).toLocaleString()}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-semibold text-slate-900">{row.unitPrice}</td>
                    <td className="p-3 border-b border-slate-100 text-right font-bold text-slate-900">{Number(row.annualCost).toLocaleString()}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-amber-700 font-semibold">{row.contractEnd}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-500 text-xs">{row.note}</td>
                  </tr>
                ))}
                <tr className="bg-slate-800 text-white">
                  <td className="p-3 font-bold" colSpan={4}>合計</td>
                  <td className="p-3 text-right font-bold text-amber-300">10,208万円</td>
                  <td className="p-3" colSpan={2}></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ モデル数値。大阪工場が全社電力費の62%を占める最重点管理拠点であることが一目でわかる。
          </p>
        </div>
      </section>

      {/* セクション3: 一括 vs 個別調達の比較表 */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 一括調達 vs 個別最適調達 比較表</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            一括調達と個別最適調達にはそれぞれメリット・デメリットがあります。
            自社の規模・地域分散度・ESG目標・リスク許容度に応じて最適な方針を選択してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">評価軸</th>
                  <th className="p-3 text-left font-semibold">一括調達</th>
                  <th className="p-3 text-left font-semibold">個別最適調達</th>
                  <th className="p-3 text-center font-semibold">優位</th>
                </tr>
              </thead>
              <tbody>
                {bulkVsIndividual.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.aspect}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.bulk}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.individual}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-bold ${
                      row.winner === "一括" ? "text-blue-700" : "text-emerald-700"
                    }`}>{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 rounded-xl border border-slate-300 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-600 mb-2">実務的な推奨アプローチ：ハイブリッド型</p>
            <p className="text-xs leading-6 text-slate-700">
              大規模消費拠点（工場・物流センター等）は個別に詳細最適化を行いつつ、
              中小規模の拠点群（営業所・支店等）は一括でまとめて交渉する「ハイブリッド型」が
              コスト削減効果と管理効率のバランスが良い。年間調達額の規模感（1億円以上が一括の目安）で判断する。
            </p>
          </div>
        </div>
      </section>

      {/* セクション4: 月次モニタリングダッシュボード */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">4. 月次モニタリングダッシュボード項目</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            複数拠点の電力コストを効果的にモニタリングするためのダッシュボード設計項目です。
            まずは経営企画部が月次で集計するExcel/スプレッドシートとして構築し、
            データが整備されてから専用ツールへ移行することを推奨します。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">カテゴリ</th>
                  <th className="p-3 text-left font-semibold">KPI</th>
                  <th className="p-3 text-center font-semibold">頻度</th>
                  <th className="p-3 text-left font-semibold">アラート閾値</th>
                  <th className="p-3 text-left font-semibold">管理責任者</th>
                </tr>
              </thead>
              <tbody>
                {dashboardItems.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-xs font-semibold text-slate-600">{row.category}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-800">{row.kpi}</td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs text-slate-600">{row.frequency}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-amber-700">{row.threshold}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-500">{row.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション5: グループ全体リスクポートフォリオ */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">5. グループ全体のリスクポートフォリオの考え方</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          多拠点法人の電力リスク管理では、個別拠点の最適化だけでなく
          グループ全体でのリスク分散・集中管理が重要です。
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">契約形態リスクの分散</h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              固定単価契約と市場連動型契約の比率をグループ全体で管理する。
              市場連動型が70%超になると価格急騰時の全社インパクトが大きくなりすぎる。
              理想的には固定60〜70%：市場連動30〜40%のバランスを目安とする。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">供給者分散リスクの管理</h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              全拠点が同一のPPSや新電力に集中している場合、その事業者の経営状況や
              最終保障供給移行リスクがグループ全体に波及する。
              拠点数10以上の場合は供給者を3社以上に分散することが望ましい。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">更新時期集中リスク</h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              複数拠点の契約更新が同一時期に集中すると、市場価格が高い時に一斉に
              高コスト契約を締結するリスクがある。更新時期をずらして
              電力市場の「高値づかみ」を防ぐ分散戦略を検討する。
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">省エネポートフォリオ管理</h3>
            <p className="mt-2 text-xs leading-6 text-slate-600">
              省エネ投資の優先順位をグループ全体で最適化する。
              電力費規模が大きい拠点・kWh単価が高い拠点・省エネ余地が大きい拠点を
              横断的に評価し、投資対効果の高い順に省エネ施策を実施する。
            </p>
          </div>
        </div>
      </section>

      {/* セクション6: 管理ツール・システムの選択 */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">6. 電力コスト管理ツール・システムの選択指針</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          拠点数・年間電力費規模・IT投資余力に応じて適切な管理ツールを選択してください。
        </p>
        <div className="mt-4 space-y-3">
          {[
            { stage: "フェーズ1（5〜10拠点、年間電力費1億円未満）", tool: "Excel/Googleスプレッドシート", desc: "まずは拠点担当者からの月次入力シートを整備。経営企画部が集計・レポートを作成。初期投資ゼロで全社可視化が実現できる。" },
            { stage: "フェーズ2（10〜30拠点、年間電力費1〜5億円）", tool: "BIツール（Power BI/Tableau）連携", desc: "請求書データのDigitization＋BIツールでダッシュボード自動更新。月次レポート作成工数を大幅削減。導入費用100〜300万円程度。" },
            { stage: "フェーズ3（30拠点以上、年間電力費5億円超）", tool: "エネルギー管理システム（EMS）専用ツール", desc: "スマートメーターからのリアルタイムデータ収集・異常検知・自動アラート機能を持つ専用SaaSを導入。ROI計算を必ず実施する。" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-start gap-3">
                <span className="rounded bg-slate-800 px-2 py-1 text-xs font-semibold text-white shrink-0">{item.stage}</span>
                <span className="rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 shrink-0">{item.tool}</span>
              </div>
              <p className="mt-2 text-xs leading-6 text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション7: アクションアイテム */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">7. 経営層のアクションアイテム</h2>
        <div className="space-y-3">
          {actionItems.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "CFO向けに電力コスト感応度分析のフレームワークを解説。",
            },
            {
              href: "/executive-mid-term-plan-electricity",
              title: "中期経営計画への電力コスト織り込み方",
              description: "3年・5年の中計シナリオ別電力コスト前提設定ガイド。",
            },
            {
              href: "/executive-ma-electricity-due-diligence",
              title: "M&A・拠点統廃合時の電力契約デューデリジェンス",
              description: "M&Aで引き継ぐ電力契約の確認ポイントとPMI対応を解説。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人電力契約チェックリスト",
              description: "電力契約の見直し時に確認すべき項目を網羅したチェックリスト。",
            },
            {
              href: "/articles/review-points",
              title: "見直しポイントカテゴリ",
              description: "電力契約の見直しポイントを解説した記事一覧。",
            },
          ]}
        />
      </div>

      {/* ContentCta */}
      <div className="mt-6">
        <ContentCta
          heading="拠点別の電気代リスクをシミュレーターで診断する"
          description="拠点ごとに電気代上昇シナリオを試算し、優先管理拠点の特定に活用できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
  );
}
