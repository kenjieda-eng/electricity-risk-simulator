import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["emergency-response"];


const pageTitle = "電気料金の急騰で予算超過しそうなときの緊急対応｜法人の電力契約トラブル";
const pageDescription =
  "電気料金の想定外の上昇で年度予算を超過しそうな場合に、担当者がとるべき緊急対応フローを整理します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-budget-overrun-response";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電気代 予算超過", "電気料金 予算オーバー", "電気代 急騰 対応", "電力費 予算管理"],
  alternates: {
    canonical: pageUrl,
  },
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

const warningSignals = [
  {
    signal: "月次請求額が前年同月比110%を超えている",
    timing: "月次チェックで即検知可能",
    action: "年間着地見込みを試算し、超過額を確認する",
  },
  {
    signal: "燃調・市場調整の単価が前月比で急上昇している",
    timing: "請求書受領時",
    action: "翌月以降の影響を試算し、早期に対応に動く",
  },
  {
    signal: "電力会社から値上げ・条件変更の通知を受けた",
    timing: "通知受領時",
    action: "変更後の年間コストを試算し、予算への影響を試算する",
  },
  {
    signal: "年度途中の設備増設・稼働時間延長による使用量増加",
    timing: "設備変更後の最初の請求時",
    action: "追加分のコストを試算し、残り月数での影響を計算する",
  },
];

const responseSteps = [
  {
    num: "①",
    title: "現状把握と着地見込みの試算",
    detail:
      "1月〜現在までの電気代実績を確認し、月次の平均単価・使用量・調整費の推移を整理します。「このペースが続くと年度末にいくらになるか」という着地見込み額を計算します。残り月数 × 直近3カ月の平均月額で簡易試算できます。",
  },
  {
    num: "②",
    title: "超過額の確定と社内報告",
    detail:
      "着地見込みから予算額を差し引いた「予算超過見込み額」を算出します。この数字を経理・上長に速やかに報告します。「何月時点でいくら超過する見込みか」を具体的な数字で示すことが重要です。",
  },
  {
    num: "③",
    title: "短期で効く対策の実行",
    detail:
      "すぐに着手できる使用量削減・コスト抑制策を実行します。デマンド抑制・不要設備の停止・運用時間の見直しなど、設備投資なしでできる対策から着手します。効果を月次で確認します。",
  },
  {
    num: "④",
    title: "予算措置の検討",
    detail:
      "短期対策だけでは超過が避けられない場合、予備費の活用・他費目からの振替・補正予算の申請などの予算措置を検討します。経理・財務部門と連携して、会計年度内に処理できる方法を確認します。",
  },
  {
    num: "⑤",
    title: "中長期の再発防止策の立案",
    detail:
      "今年度の超過原因を分析し、翌年度予算に反映するための再発防止策を立案します。省エネ設備投資・契約の見直し・調達先の変更など、中長期で効く対策を経営層に提案します。",
  },
];

const shortTermActions = [
  { category: "デマンド抑制", action: "ピーク時間帯（昼間・夏冬）の同時稼働を制限する", effect: "基本料金の削減", cost: "なし" },
  { category: "デマンド抑制", action: "大型設備の起動タイミングをずらす（スタッガリング）", effect: "デマンドピークの抑制", cost: "なし" },
  { category: "運用改善", action: "不要時の照明・空調の自動オフルールを徹底する", effect: "使用量削減", cost: "なし" },
  { category: "運用改善", action: "空調の設定温度を夏+1℃・冬−1℃に調整する", effect: "使用量削減", cost: "なし" },
  { category: "設備の停止", action: "稼働率の低い設備・端末を一時停止する", effect: "使用量削減", cost: "なし" },
  { category: "設備の停止", action: "夜間・休日の待機電力設備を見直す", effect: "使用量削減", cost: "なし" },
  { category: "契約の見直し", action: "現在の契約デマンド（kW）が実態に合っているか確認する", effect: "基本料金の削減", cost: "手続きのみ" },
  { category: "契約の見直し", action: "複数拠点の電力調達を一本化して単価交渉する", effect: "単価削減", cost: "調達先次第" },
];

const reportTemplate = {
  title: "社内報告書（経理・経営層向け）の構成例",
  sections: [
    { section: "現状サマリー", content: "○月時点の電気代実績：年間予算×××万円に対して実績×××万円（予算比○○%）" },
    { section: "着地見込み", content: "このペースが続くと年度末の着地見込みは×××万円（予算超過×××万円）" },
    { section: "超過原因", content: "主因：燃料費調整額の急騰（前年比+○○%）/ 使用量増加（+○○%）/ 制度変更等" },
    { section: "短期対策", content: "実施中の対策一覧と削減効果の試算（月▲×万円、年▲×万円）" },
    { section: "予算措置の要請", content: "予備費×××万円の活用（または他費目からの振替）を申請します" },
    { section: "再発防止策", content: "翌年度予算への反映案・中長期の省エネ投資計画等" },
  ],
};

const overrunCauses = [
  {
    cause: "燃料費調整額・市場価格調整の急騰",
    description:
      "電力市場の混乱や燃料価格の急上昇に伴い、調整費が急激に増加するケース。予算策定時点では予見できないため、年度途中での対応が必要になります。",
    countermeasure: "翌年度予算に変動バッファ（前年度燃調平均の±30%程度）を設ける。",
  },
  {
    cause: "使用量の予想外の増加",
    description:
      "新規設備の導入・稼働時間の延長・テナント増床などにより、予算策定時の使用量見込みを超過するケース。事業拡大フェーズに多い。",
    countermeasure: "設備増強・稼働変更時に事前にコスト影響を試算し、予算修正を申請する習慣をつける。",
  },
  {
    cause: "電力会社による料金値上げ・条件変更",
    description:
      "年度途中に電力会社から値上げ通知または条件変更通知が届き、予算策定後の単価が上昇するケース。",
    countermeasure: "通知を受けたらすぐに年間影響額を試算し、予算への影響を速やかに上長に報告する。",
  },
  {
    cause: "気象要因による使用量増加",
    description:
      "記録的な猛暑・厳冬による空調負荷の増加で使用量が想定を超えるケース。特に変動費型の契約では影響が大きい。",
    countermeasure: "前年度の気象偏差を考慮した使用量見込みを立て、予備費を確保しておく。",
  },
];

const municipalityPoints = [
  "補正予算の申請には議会の議決が必要なため、早期発見・早期報告が特に重要",
  "予備費充当の上限・手続き規程を事前に財政担当部署と確認しておく",
  "光熱費の補正予算は議会から注目されやすいため、原因説明の資料を丁寧に準備する",
  "翌年度予算には「光熱費単価変動リスク」として予備的経費を計上することを検討する",
];

const nextYearBudgetPoints = [
  { point: "直近3カ年の実績単価の平均と最大値を把握する", reason: "単年度の実績だけでなく変動幅を考慮した予算設定が必要" },
  { point: "燃調・市場調整の変動幅を±20〜30%で見込む", reason: "エネルギー市場の不確実性を前提にバッファを積む" },
  { point: "設備投資・増床計画があれば使用量への影響を試算に含める", reason: "事業計画と電力予算を連動させることで精度が上がる" },
  { point: "省エネ投資の効果（削減見込み額）を予算から差し引く", reason: "投資の費用対効果を明示することで経営承認を得やすくなる" },
];

export default function EmergencyBudgetOverrunResponsePage() {
  return (
    <>
      <ArticleJsonLd
        headline="電気料金の急騰で予算超過しそうなときの緊急対応｜法人の電力契約トラブル"
        description="電気料金の想定外の上昇で年度予算を超過しそうな場合に、担当者がとるべき緊急対応フローを整理します。"
        url="https://simulator.eic-jp.org/emergency-budget-overrun-response"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電気料金の急騰で予算超過しそうなときの緊急対応" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気料金の急騰で予算超過しそうなときの緊急対応</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気料金の急騰で予算超過しそうなときの緊急対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額</Link>の急騰・市場価格の上昇・想定外の使用量増加などにより、
          年度途中で電力費の予算超過リスクに気づくことがあります。
          このような状況では、<strong>早期に現状を把握し、社内報告と短期対策を並行して進めることが重要です。</strong>
          このページでは、予算超過に気づくタイミングから緊急対応フロー・削減アクション・
          社内報告の方法・翌年度予算への反映まで一貫して整理します。
        </p>
      </header>

      {/* 予算超過リスクに気づくタイミング */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">予算超過リスクに気づくタイミング</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          予算超過への対応は、気づくのが早いほど取れる手段が多くなります。以下のシグナルを月次でチェックする習慣が重要です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">異常シグナル</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">検知タイミング</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">初動アクション</th>
              </tr>
            </thead>
            <tbody>
              {warningSignals.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-rose-700">{r.signal}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.timing}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 緊急対応の優先順序 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">緊急対応の優先順序（5ステップ）</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          予算超過が見込まれる状況では、以下の順序で対応します。
          特にステップ①②の「現状把握と報告」は最優先で行うことが重要です。
        </p>
        <ol className="mt-4 space-y-4">
          {responseSteps.map((s, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-sky-400 bg-sky-100 text-sm font-bold text-sky-700">
                {s.num}
              </div>
              <div className="border-l-2 border-sky-200 pl-4">
                <p className="font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 短期でできる電気代削減アクション */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">短期でできる電気代削減アクション一覧</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          設備投資なしに、運用の見直しだけで電気代を削減できるアクションを整理します。
          今月中に着手できるものから優先して実施してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">カテゴリ</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">アクション</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">期待効果</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">初期コスト</th>
              </tr>
            </thead>
            <tbody>
              {shortTermActions.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{r.category}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.effect}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 社内への報告の仕方 */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">経理・経営層への報告の仕方</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          予算超過の報告は、数字を明確にしたうえで対策と予算措置の要請をセットで行うことが重要です。
          以下の構成を参考に報告書を作成してください。
        </p>
        <div className="mt-4 space-y-2">
          {reportTemplate.sections.map((s, i) => (
            <div key={i} className="rounded-lg border border-sky-200 bg-white p-3">
              <span className="font-semibold text-sky-800">{s.section}：</span>
              <span className="text-sm text-slate-700">{s.content}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          ※ 金額は試算値であることを明示し、確定値が出次第速やかに更新報告を行うことを記載してください。
        </p>
      </section>

      {/* 予算超過の原因パターン別の対応 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">予算超過の原因パターン別の対応</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          原因によって対応策が異なります。まず超過の主因を特定してから、最適な対処法を選んでください。
        </p>
        <div className="mt-4 space-y-4">
          {overrunCauses.map((c, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{c.cause}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{c.description}</p>
              <div className="mt-2 rounded border border-sky-200 bg-sky-50 p-2">
                <span className="text-xs font-semibold text-sky-700">再発防止策：</span>
                <span className="text-xs text-slate-700">{c.countermeasure}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 自治体の場合の補正予算対応 */}
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">自治体の場合：補正予算対応との接続</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          地方自治体では、予算の流用や予備費充当に規程上の制約があります。
          民間企業とは異なる以下のポイントに注意してください。
        </p>
        <ul className="mt-3 space-y-2">
          {municipalityPoints.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-7 text-slate-700">
              <span className="mt-1 font-bold text-amber-600">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-slate-700">
          自治体の光熱費予算管理については、
          <Link href="/municipality-supplementary-budget" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
            自治体の電気代急騰と補正予算対応
          </Link>
          もあわせてご参照ください。
        </p>
      </section>

      {/* 翌年度予算策定への反映 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">翌年度予算策定への反映ポイント</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          今年度の予算超過を来年度に繰り返さないために、以下の観点で翌年度予算を見直してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">反映ポイント</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">理由・背景</th>
              </tr>
            </thead>
            <tbody>
              {nextYearBudgetPoints.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-sky-700">{r.point}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：早期発見・早期報告が最大の対策</h2>
        <ul className="mt-3 space-y-2">
          {[
            "月次で請求書の単価と使用量を前年同月比でチェックする習慣が予算超過の早期発見につながる",
            "着地見込みを試算し、超過額を明確にしてから社内報告を行うと意思決定が早くなる",
            "短期対策（デマンド抑制・運用改善）は設備投資なしで今月から実行できる",
            "報告書には現状・原因・対策・予算措置の要請をセットで盛り込む",
            "今年度の超過原因を翌年度予算に正しく反映することが再発防止の基本",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-7 text-slate-700">
              <span className="mt-1 font-bold text-sky-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-electricity-bill-doubled",
              title: "電気代が突然2倍になったときの対応",
              description: "請求額が急騰した場合の原因確認と緊急対応手順を解説します。",
            },
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "値上げ通知を受けたときの対応手順と時間軸を整理します。",
            },
            {
              href: "/executive-electricity-kpi-dashboard",
              title: "経営層向け電気代KPIダッシュボードの作り方",
              description: "電力費を経営指標として可視化するための管理指標を解説。",
            },
            {
              href: "/municipality-supplementary-budget",
              title: "自治体の電気代急騰と補正予算対応",
              description: "公共施設の電力費急騰に対応する補正予算の進め方を整理します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="現在の電気代リスクをシミュレーターで把握する"
          description="燃調・市場連動の変動リスクが年間コストにどう影響するか、シミュレーターで試算して予算管理に活用しましょう。"
          links={[
            { href: "/", label: "シミュレーターで電気代リスクを試算する" },
            { href: "/articles", label: "電気代管理の基礎知識を読む" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
