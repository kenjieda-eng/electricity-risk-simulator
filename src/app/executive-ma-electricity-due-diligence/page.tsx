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


const pageTitle = "M&A・拠点統廃合時の電力契約デューデリジェンス｜PMI電力コスト最適化ガイド";
const pageDescription =
  "M&Aで引き継ぐ電力契約の確認ポイント、拠点統廃合での契約まとめ替え、違約金・中途解約条件の確認方法、PMIフェーズでの電力コスト最適化、買収後100日計画への電力コスト項目組み込みを経営層・CFO向けに解説。";
const pageUrl = "https://simulator.eic-jp.org/executive-ma-electricity-due-diligence";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "M&A 電力契約 デューデリジェンス",
    "PMI 電力コスト",
    "電力契約 中途解約",
    "拠点統廃合 電気代",
    "M&A 電気料金 リスク",
    "買収 電力費 最適化",
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

const ddChecklist = [
  { no: 1, item: "現在の電力供給者・契約種別の確認", priority: "最重要", detail: "一般送配電事業者（旧一電）か新電力PPSか。供給者の財務健全性・最終保障移行リスクも確認。" },
  { no: 2, item: "電力単価・料金メニューの確認", priority: "最重要", detail: "kWh単価・基本料金・燃調費・各種賦課金の内訳。市場連動型の場合は変動リスクの評価が必須。" },
  { no: 3, item: "契約期間・更新時期の確認", priority: "最重要", detail: "残存期間と更新条件。PMI期間中に更新を迎える場合は早期に見直し方針を決定する。" },
  { no: 4, item: "中途解約条件・違約金の確認", priority: "高", detail: "解約予告期間（通常1〜6ヶ月前）・違約金の有無と算定方法。固定長期契約は高額の違約金が設定される場合がある。" },
  { no: 5, item: "契約名義・口座振替の確認", priority: "高", detail: "法人合併・商号変更・代表者変更に伴う名義変更手続きと所要期間。電力会社への届出タイミングを把握する。" },
  { no: 6, item: "年間電力費の実績と推移", priority: "高", detail: "直近3年間の月別電力費・使用量。異常値がある場合は設備変更・拡張・生産変動との対応を確認。" },
  { no: 7, item: "デマンド値・最大需要電力の確認", priority: "中", detail: "契約電力（デマンド）が実態と乖離していないか。デマンド超過があった場合の追加料金発生履歴も確認。" },
  { no: 8, item: "自家発電設備・PPAの有無", priority: "中", detail: "太陽光・コジェネ等の自家発電設備や、PPAによる供給契約が存在する場合はその内容を詳細確認。" },
  { no: 9, item: "省エネ法・再エネ特措法の届出状況", priority: "中", detail: "エネルギー管理指定工場の指定状況・省エネ計画書の提出履歴。未対応があれば引き継ぎ後に対応が必要。" },
  { no: 10, item: "電力会社との未解決問題の有無", priority: "中", detail: "未払い料金・請求トラブル・メーター誤計測の訴訟・クレーム等の係争案件がないか確認。" },
];

const contractConditionMatrix = [
  { condition: "契約種別", checkPoint: "低圧・高圧・特別高圧の区分", riskOnMa: "高圧→低圧への格下げは再工事が必要な場合あり", action: "現状維持を原則とし、統合後に改めて見直し" },
  { condition: "固定 vs 市場連動", checkPoint: "料金メニューの変動リスク", riskOnMa: "市場連動型は買収後の電力費が予測困難", action: "バリュエーションの前提となる電力費見通しに反映" },
  { condition: "違約金", checkPoint: "中途解約時の違約金額・算定方式", riskOnMa: "残存期間が長いほど高額になる", action: "早期統合のコスト試算に違約金を必ず含める" },
  { condition: "自動更新条項", checkPoint: "更新通知期限・自動更新の有無", riskOnMa: "クロージング後に更新されると見直しタイミングを逃す", action: "クロージング前後のカレンダー管理を徹底" },
  { condition: "名義変更", checkPoint: "合併・社名変更時の手続き要件", riskOnMa: "名義変更手続きが遅れると請求先不一致が生じる", action: "M&Aクロージング後30日以内に電力会社へ届出" },
  { condition: "設備の引き継ぎ", checkPoint: "電力設備（変電設備等）の所有者", riskOnMa: "設備の所有者変更に伴う許認可の引き継ぎが必要", action: "電気主任技術者の選任状況も含めて確認" },
];

const pmiTimeline = [
  { phase: "クロージング直後（Day 1〜30）", actions: ["電力会社への名義変更届出", "月次電力費モニタリング開始", "契約書・請求書のデジタル保管", "省エネ法関連届出の確認"] },
  { phase: "統合初期（Day 31〜60）", actions: ["全拠点電力費の一覧化完了", "重点管理拠点の特定", "契約更新時期カレンダー作成", "デマンド値の適正性検証"] },
  { phase: "統合中期（Day 61〜100）", actions: ["電力コスト最適化計画の策定", "一括調達・切り替えの見積もり依頼", "省エネ投資機会のリストアップ", "100日計画への電力費削減目標反映"] },
  { phase: "PMI本格化（100日以降）", actions: ["電力契約の戦略的見直し実行", "省エネ投資の承認・実施", "電力費KPIの経営ダッシュボード統合", "次年度予算への新しい電力費前提反映"] },
];

const actionItems = [
  {
    title: "1. DDフェーズで電力契約のチェックを必須項目化する",
    body: "M&Aのデューデリジェンス項目に「電力契約DD」を標準的に組み込む。財務DD・法務DDと並行して、電力費の実績・契約条件・違約金リスク・制度対応状況を確認する。電力費が売上高比率1%超の事業では特に重要度が高い。",
  },
  {
    title: "2. バリュエーションに電力費リスクを反映する",
    body: "対象会社の将来収益予測において、電力費の上昇シナリオ（基準・悲観）を明示的に織り込む。電力費が高単価な市場連動型契約である場合、将来の費用増加がEBITDA・DCFに与える影響を定量化して交渉テーブルに乗せる。",
  },
  {
    title: "3. クロージング直後に名義変更手続きを完了させる",
    body: "電力供給契約の名義変更は、クロージング後速やかに実施する。電力会社への届出遅延が請求書の混乱・未払いリスクにつながる。名義変更に必要な書類（法人登記簿謄本・印鑑証明等）をクロージング準備と並行して準備しておく。",
  },
  {
    title: "4. PMI100日計画に電力コスト最適化を明示的に組み込む",
    body: "PMI初期の100日計画において、電力費削減を「クイックウィン項目」として位置づける。契約更新・調達切り替え・省エネ投資のうち即実施可能な施策を特定し、買収後の価値創造実績として報告できる形にする。",
  },
  {
    title: "5. 統廃合拠点の電力契約解約スキームを事前設計する",
    body: "拠点統廃合が予定される場合、対象拠点の電力契約の中途解約条件・違約金を事前に試算する。統廃合の意思決定においてこれらのコストを含めた総合的なコスト・ベネフィット分析を実施する。",
  },
];

export default function ExecutiveMaElectricityDueDiligencePage() {
  return (
    <>
      <ArticleJsonLd
        headline="M&A・拠点統廃合時の電力契約デューデリジェンス｜PMI電力コスト最適化ガイド"
        description="M&Aで引き継ぐ電力契約の確認ポイント、拠点統廃合での契約まとめ替え、違約金・中途解約条件の確認方法、PMIフェーズでの電力コスト最適化、買収後100日計画への電力コスト項目組み込みを経営層・CFO向けに解説。"
        url="https://simulator.eic-jp.org/executive-ma-electricity-due-diligence"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "M&A・拠点統廃合時の電力契約デューデリジェンス" },
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
        <span className="text-slate-800">M&A時の電力契約DD</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-6 text-white">
        <p className="text-xs font-semibold tracking-wide text-amber-300">EXECUTIVE ／ 経営層・CFO向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          M&A・拠点統廃合時の電力契約デューデリジェンス
        </h1>
        <p className="mt-1 text-lg font-medium text-amber-200">PMI電力コスト最適化ガイド</p>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
          M&Aのデューデリジェンスで電力契約が見落とされることは珍しくありません。
          しかし買収後に「高単価の<Link href="/market-linked-plan" className="text-sky-300 underline underline-offset-2 hover:text-sky-100">市場連動型契約</Link>が残っていた」「解約に高額の違約金が発生する」
          「<Link href="/last-resort-supply" className="text-sky-300 underline underline-offset-2 hover:text-sky-100">最終保障供給</Link>に移行していた」といった問題が発覚するケースがあります。
          本ページでは、M&Aにおける電力契約DDのチェックリスト・契約条件確認マトリクス・
          PMI電力コスト最適化タイムラインを経営層・CFO・M&A担当者向けに解説します。
        </p>
      </header>

      {/* エグゼクティブサマリー */}
      <section className="mt-6 border-l-4 border-amber-400 bg-amber-50 p-5 rounded-r-xl">
        <h2 className="text-base font-bold text-amber-900">エグゼクティブサマリー</h2>
        <ul className="mt-3 space-y-2 text-sm leading-7 text-amber-900">
          <li>・ 電力費はM&Aバリュエーションに直結する固定費であり、契約条件・上昇シナリオを財務DDに明示的に組み込む必要がある。</li>
          <li>・ 中途解約違約金・長期契約の残存リスクは表面化しにくいが、金額が大きい場合は<strong>買収価格交渉の論点</strong>になりうる。</li>
          <li>・ 対象会社がPPS（特定規模電気事業者）の市場連動型契約を結んでいる場合、買収後の電力費が予測困難になるリスクがある。</li>
          <li>・ クロージング直後の名義変更手続きは速やかに完了させる。遅延は請求書の混乱・未払いリスクにつながる。</li>
          <li>・ PMI100日計画に電力費削減（契約見直し・省エネ投資）を「クイックウィン項目」として組み込むことで、買収後の価値創造を早期に実現できる。</li>
        </ul>
      </section>

      {/* セクション1: M&Aで電力契約が問題になるケース */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">1. M&Aで電力契約が問題になる典型パターン</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            電力契約は財務DDで確認されにくい項目ですが、以下のパターンで問題が表面化します。
            案件の性格（工場取得・子会社統合・事業譲受等）に応じてリスクを事前に把握してください。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              { label: "高額違約金の発覚", desc: "新電力と3〜5年の長期固定契約を結んでいた場合、中途解約に年間電力費の数割に相当する違約金が発生することがある。クロージング直前に発覚すると価格交渉のスコープが変わる。" },
              { label: "市場連動型契約のリスク", desc: "スポット市場連動型契約を結んでいた場合、買収後の電力費が予算と大幅に乖離するリスクがある。2021〜2022年のような価格急騰時には年間電力費が倍増することも。" },
              { label: "最終保障供給への移行", desc: "PPSが撤退・経営破綻した場合、対象会社が最終保障供給に移行している場合がある。最終保障供給は一般的に割高であり、早急な切り替えが必要。" },
              { label: "設備・許認可の引き継ぎ問題", desc: "受電設備（変圧器・受電盤等）が賃貸物件内に存在する場合、所有者・管理責任の確認が必要。電気主任技術者の選任が引き継がれていないケースも。" },
              { label: "省エネ法の未対応", desc: "エネルギー使用量が多い拠点（原油換算1,500kl以上）で省エネ法の定期報告が未提出のケースがある。引き継ぎ後に行政対応が必要になる。" },
              { label: "デマンド超過のペナルティ", desc: "電力需要がデマンド値を超えている場合、翌年度の基本料金が最大使用電力をベースに自動的に引き上げられる仕組みになっている。過去の超過記録を確認する。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-red-100 bg-red-50 p-4">
                <h3 className="text-sm font-semibold text-red-800">{item.label}</h3>
                <p className="mt-2 text-xs leading-5 text-red-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション2: DDチェックリスト */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">2. DD時チェックリスト（10項目）</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            M&Aのデューデリジェンスにおいて電力契約を確認するための標準チェックリストです。
            財務DD・法務DDと並行して、専任担当者が以下の項目を確認してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-center font-semibold w-10">No.</th>
                  <th className="p-3 text-left font-semibold">確認項目</th>
                  <th className="p-3 text-center font-semibold">優先度</th>
                  <th className="p-3 text-left font-semibold">確認内容の詳細</th>
                </tr>
              </thead>
              <tbody>
                {ddChecklist.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 text-center font-bold text-slate-500">{row.no}</td>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.item}</td>
                    <td className={`p-3 border-b border-slate-100 text-center text-xs font-bold ${
                      row.priority === "最重要" ? "text-red-700" :
                      row.priority === "高" ? "text-orange-600" : "text-slate-500"
                    }`}>{row.priority}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 拠点数が多い場合は主要拠点（電力費上位3〜5拠点）を優先して確認する。全拠点の調査は時間的制約がある場合に限りスコーピングを行う。
          </p>
        </div>
      </section>

      {/* セクション3: 契約条件確認マトリクス */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">3. 契約条件確認マトリクス</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            M&Aにおける電力契約の主要条件と、それぞれの確認ポイント・リスク・対処法を整理します。
            バリュエーション・買収条件交渉の論点として活用してください。
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="p-3 text-left font-semibold">契約条件</th>
                  <th className="p-3 text-left font-semibold">確認ポイント</th>
                  <th className="p-3 text-left font-semibold">M&A時のリスク</th>
                  <th className="p-3 text-left font-semibold">対処方針</th>
                </tr>
              </thead>
              <tbody>
                {contractConditionMatrix.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-800">{row.condition}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-700 text-xs">{row.checkPoint}</td>
                    <td className="p-3 border-b border-slate-100 text-red-700 text-xs">{row.riskOnMa}</td>
                    <td className="p-3 border-b border-slate-100 text-slate-600 text-xs">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* セクション4: 違約金・中途解約コストの試算 */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">4. 違約金・中途解約コストの試算方法</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          中途解約コストはM&Aのコスト計算に含める必要があります。
          以下の方法で試算し、バリュエーション・統合計画に反映してください。
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">違約金の典型的な算定方式</h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-slate-700">
              <li>・ <span className="font-semibold">残存期間比例型：</span>残存契約期間（月数）× 月次電力費 × 一定率（5〜20%）</li>
              <li>・ <span className="font-semibold">固定金額型：</span>契約時に決められた一定額（数十〜数百万円）</li>
              <li>・ <span className="font-semibold">解約予告型：</span>X ヶ月前に予告すれば違約金なし（1〜6ヶ月前が多い）</li>
              <li>・ <span className="font-semibold">電力費相当型：</span>残存期間の電力費見込み額の一定割合</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-300 bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-900">試算例（年間電力費5,000万円の拠点）</h3>
            <div className="mt-3 space-y-2 text-xs leading-6 text-slate-700 font-mono">
              <p>契約残存：18ヶ月、月次電力費：約417万円</p>
              <p>解約予告型（3ヶ月前）：違約金なし（3ヶ月前に通知）</p>
              <p>残存比例型（月次×10%×18ヶ月）：約750万円</p>
              <p>電力費相当型（5,000万円×残存1.5年×15%）：約1,125万円</p>
              <p className="text-slate-500 mt-1">→ 契約書の条項を精査し正確な算定を行う</p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション5: PMI電力コスト最適化タイムライン */}
      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">5. PMI電力コスト最適化タイムライン</h2>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            買収後の100日計画における電力コスト最適化の標準的なタイムラインを示します。
            クロージングから始まる各フェーズのアクションを把握し、担当部門に指示してください。
          </p>
          <div className="mt-5 space-y-4">
            {pmiTimeline.map((phase, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white shrink-0">{i + 1}</span>
                  <h3 className="text-sm font-semibold text-slate-900">{phase.phase}</h3>
                </div>
                <ul className="grid gap-1 md:grid-cols-2">
                  {phase.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs leading-5 text-slate-700">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0"></span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* セクション6: 拠点統廃合時の電力契約まとめ替え */}
      <section className="mt-8 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">6. 拠点統廃合時の電力契約まとめ替え手順</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          PMIに伴う拠点統廃合（拠点閉鎖・移転・機能集約）では、電力契約のまとめ替えが必要になります。
          以下の手順で計画的に進めてください。
        </p>
        <div className="mt-4 space-y-3">
          {[
            { step: "Step 1", title: "閉鎖・縮小拠点の契約解約スケジュール策定", desc: "閉鎖が決定した拠点の電力契約解約予告期間を確認し、業務終了日から逆算して解約通知タイミングを決定する。過払いを避けるため、業務終了日と契約終了日を合わせる。" },
            { step: "Step 2", title: "移転先・統合先拠点の容量見直し", desc: "統合に伴い電力需要が増加する拠点では、契約電力（デマンド）の引き上げが必要になる場合がある。電力会社への申請から反映まで1〜3ヶ月を要することがあるため早期に手配する。" },
            { step: "Step 3", title: "一括調達の再設計", desc: "統廃合後のグループ全体の需要量・拠点構成が確定した段階で、一括調達の再設計を行う。新しい規模・構成での調達コンペを実施し、より有利な条件を引き出す。" },
            { step: "Step 4", title: "設備撤去・引き渡し手続き", desc: "賃借拠点の受電設備・分電盤等の原状回復義務を確認する。電力会社の工事が必要な場合は退去日の数ヶ月前から手配が必要。" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="rounded bg-sky-800 px-2 py-0.5 text-xs font-bold text-white">{item.step}</span>
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-xs leading-6 text-slate-700">{item.desc}</p>
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
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/executive-multi-site-cost-management",
              title: "複数拠点の電力コスト一元管理フレームワーク",
              description: "M&A後の多拠点電力コスト管理体制の構築方法を解説。",
            },
            {
              href: "/executive-ebitda-impact",
              title: "電気代がEBITDAに与える影響の測り方",
              description: "CFO向けに電力コスト感応度分析のフレームワークを解説。",
            },
            {
              href: "/executive-mid-term-plan-electricity",
              title: "中期経営計画への電力コスト織り込み方",
              description: "PMI後の中計策定で電力費をどう織り込むかを解説。",
            },
            {
              href: "/last-resort-supply-explained",
              title: "最終保障供給の仕組みと対応方法",
              description: "PPSからの最終保障供給移行リスクと対処方法。",
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
          heading="買収対象事業の電力費リスクをシミュレーターで確認する"
          description="対象会社の電気代上昇シナリオをシミュレーションし、バリュエーションへの影響を試算できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を確認する" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
