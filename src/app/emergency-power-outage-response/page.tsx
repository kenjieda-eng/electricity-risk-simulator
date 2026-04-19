import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "停電・計画停電が発生したときの法人対応マニュアル｜緊急対応ガイド";
const pageDescription =
  "停電が発生したとき、法人はまず何をすべきか。初動の安全確認から設備停止・復電手順・保険対応・BCP連携まで、5ステップの初動フローと設備別チェックリストを解説します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-power-outage-response";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "停電 法人 対応",
    "計画停電 企業 準備",
    "停電 設備 チェックリスト",
    "UPS 非常用発電機 運用",
    "復電 手順 法人",
    "停電 BCP 事業継続",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/emergency-response", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/emergency-response"],
  },
};

const initialSteps = [
  {
    num: "01",
    title: "安全確認・人員確認（発生直後）",
    desc: "まず従業員・来訪者の安全を確認する。エレベーター閉じ込め・暗所での転倒・医療機器への影響を最優先でチェックする。非常照明の作動状態を確認し、要支援者がいれば速やかに誘導する。",
  },
  {
    num: "02",
    title: "停電範囲・原因の初期確認（5分以内）",
    desc: "自拠点のみか、周辺エリア全体か、電力会社の計画停電かを確認する。電力会社の停電情報サービス・公式Webサイト・スマートフォンアプリで最新情報を取得する。",
  },
  {
    num: "03",
    title: "重要設備の緊急停止・保護措置（10分以内）",
    desc: "サーバー・生産ライン・冷蔵・冷凍設備を優先順位に従って保護処置する。UPS稼働中はシステムの正常シャットダウンを実施。非常用発電機が起動している場合は優先負荷を確認する。",
  },
  {
    num: "04",
    title: "関係者への連絡・情報共有（15分以内）",
    desc: "社内責任者・上司・施設管理部門へ状況報告する。顧客・取引先への影響が想定される場合は速やかに連絡する。電力会社への問い合わせ窓口に復旧見込み時刻を確認する。",
  },
  {
    num: "05",
    title: "復電後の設備再起動・被害確認（復電直後）",
    desc: "復電後は一斉起動を避け、優先度の高い設備から順次再起動する。停電中の設備ダメージ・データ損失・食品廃棄等の被害を記録し、保険申請に備える。",
  },
];

const timelineRows = [
  { timing: "発生直後", action: "人員安全確認・エレベーター確認・非常照明確認", priority: "★★★" },
  { timing: "5分以内", action: "停電範囲・原因・復旧見込みの確認", priority: "★★★" },
  { timing: "10分以内", action: "重要設備の停止保護・UPS状態確認", priority: "★★★" },
  { timing: "15分以内", action: "社内連絡・顧客・取引先への速報", priority: "★★" },
  { timing: "1時間以内", action: "食品・医薬品等の温度管理設備の状態記録", priority: "★★" },
  { timing: "復電直後", action: "段階的設備再起動・被害記録開始", priority: "★★★" },
  { timing: "復電翌日以内", action: "被害集計・保険会社への連絡・報告書作成", priority: "★★" },
];

const plannedOutageChecklist = [
  { item: "電力会社からの計画停電通知の受領・日時確認", done: false },
  { item: "停電時間帯中の業務スケジュール変更・事前周知", done: false },
  { item: "UPS・非常用発電機の動作テスト実施", done: false },
  { item: "サーバー・基幹システムの事前シャットダウン手順確認", done: false },
  { item: "冷蔵・冷凍庫の事前温度下げ運転・保冷剤準備", done: false },
  { item: "生産ライン・設備の安全停止手順確認", done: false },
  { item: "携帯電話・無線機の充電完了確認", done: false },
  { item: "顧客・取引先への事前通知（納期・対応遅延の可能性）", done: false },
  { item: "復電後の再起動手順書の配布・担当者確認", done: false },
];

const equipmentTable = [
  {
    equipment: "サーバー・IT機器",
    stopAction: "UPSのバッテリー時間内に正常シャットダウンを実施",
    protectAction: "データバックアップ状態の確認・UPS稼働ログの保存",
    resumeAction: "電圧安定確認後に順次起動・ログ確認",
  },
  {
    equipment: "生産ライン・工作機械",
    stopAction: "非常停止ボタンで安全停止・加工中ワークを固定",
    protectAction: "制御盤ブレーカーをOFFにして過電流保護",
    resumeAction: "安全確認後に制御盤から順番に起動",
  },
  {
    equipment: "冷蔵・冷凍設備",
    stopAction: "扉を開けず密閉状態を維持（2〜4時間は温度維持）",
    protectAction: "温度計・記録計で温度推移を記録・写真撮影",
    resumeAction: "復電後すぐに起動・温度回復ログを保存",
  },
  {
    equipment: "空調・換気設備",
    stopAction: "特別な停止操作は不要（停電で自動停止）",
    protectAction: "密閉空間の換気状態に注意（CO₂蓄積リスク）",
    resumeAction: "段階的に起動（電力突入電流集中を防止）",
  },
  {
    equipment: "医療・介護機器",
    stopAction: "バッテリー内蔵機器の残量確認・外部電源への切替",
    protectAction: "使用者の安全を最優先・担当者に即報告",
    resumeAction: "機器メーカーの手順に従い再起動",
  },
];

const damageRecordItems = [
  "停電開始時刻・復電時刻を正確に記録する",
  "設備ごとの停電前後の状態を写真・動画で記録する",
  "廃棄した食品・医薬品の品目・数量・購入価格を記録する",
  "生産・業務停止による損失額を試算する",
  "設備の故障・損傷があれば修理見積もりを取得する",
  "電力会社の停電原因証明書（場合により発行）を入手する",
];

const faqForSchema = [
  { question: "停電で設備が壊れた場合、電力会社に損害賠償を請求できますか？", answer: "電力会社の過失（設備故障・工事ミスなど）による停電の場合は損害賠償請求が可能なケースがあります。ただし、自然災害・第三者の過失・計画停電など、電力会社に帰責がない場合は請求困難です。損害の記録を保存したうえで弁護士や保険会社に相談することを推奨します。" },
  { question: "非常用発電機の定期点検はどのくらいの頻度で行うべきですか？", answer: "消防法上、特定防火対象物に設置された非常用発電機は年1回以上の負荷試験が義務付けられています。それ以外の施設でも、月1回の無負荷試運転と年1回の負荷試験を実施することが推奨されます。" },
  { question: "BCPに停電シナリオを組み込む際の最低限のポイントは何ですか？", answer: "停電時の指揮命令系統と連絡先リスト、重要システムのバックアップ電源稼働時間、代替手段（紙運用・別拠点への移行）、顧客・取引先への対応基準、復旧優先順位の明確化の5点が最低限必要です。年1回以上の訓練で手順の実効性を確認することを推奨します。" },
];

const faqs = [
  {
    q: "UPSのバッテリー時間はどの程度あれば十分ですか？",
    a: "サーバーの正常シャットダウンには一般的に5〜15分の時間が必要です。サーバー台数や処理負荷によって異なるため、実際の所要時間を事前に計測したうえでUPS容量を選定することが重要です。重要データを扱うシステムは最低でも30分以上の稼働時間を確保することを推奨します。",
  },
  {
    q: "計画停電の通知はどこで確認できますか？",
    a: "各電力会社の公式Webサイト、停電情報アプリ、および緊急速報メール（一部エリア）で確認できます。大口需要家（高圧・特別高圧）の場合、電力会社の営業担当者から直接連絡が来ることが多いです。スマートメーター設置済みの場合は遠隔確認も可能です。",
  },
  {
    q: "停電で設備が壊れた場合、電力会社に損害賠償を請求できますか？",
    a: "電力会社の過失（設備故障・工事ミスなど）による停電の場合は損害賠償請求が可能なケースがあります。ただし、自然災害・第三者の過失・計画停電など、電力会社に帰責がない場合は請求困難です。損害の記録を保存したうえで弁護士や保険会社に相談することを推奨します。",
  },
  {
    q: "非常用発電機の定期点検はどのくらいの頻度で行うべきですか？",
    a: "消防法上、特定防火対象物に設置された非常用発電機は年1回以上の負荷試験が義務付けられています。それ以外の施設でも、月1回の無負荷試運転と年1回の負荷試験を実施することが推奨されます。バッテリー・冷却水・燃料残量の定期点検も忘れないようにしましょう。",
  },
  {
    q: "停電時に冷凍食品を廃棄しなければならない基準は何ですか？",
    a: "食品衛生法上の明確な「廃棄義務時間」は定められていませんが、冷凍食品の安全基準として「－15℃以下を維持」が必要です。停電中に冷凍庫の温度が一定以上上昇した場合、食品事業者は自社の衛生管理基準に基づき判断する必要があります。温度記録を保存しておくことが重要です。",
  },
  {
    q: "BCPに停電シナリオを組み込む際の最低限のポイントは何ですか？",
    a: "①停電時の指揮命令系統と連絡先リスト、②重要システムのバックアップ電源稼働時間、③代替手段（紙運用・別拠点への移行）、④顧客・取引先への対応基準、⑤復旧優先順位の明確化——の5点が最低限必要です。年1回以上の訓練で手順の実効性を確認することを推奨します。",
  },
];

export default function EmergencyPowerOutageResponsePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-12"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "緊急対応・トラブル解決", url: "https://simulator.eic-jp.org/articles/emergency-response" },
          { name: "停電発生時の対応" },
        ]}
        faq={faqForSchema}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">停電発生時の対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応・トラブル解決</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          停電・計画停電が発生したときの法人対応マニュアル
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          停電は予告なく発生し、サーバーダウン・生産停止・食品廃棄など大きな損失につながります。このページでは
          <strong>停電発生直後の5ステップ初動フロー</strong>から、計画停電の事前準備チェックリスト、設備別の保護・復旧手順、保険対応、BCPとの連携まで体系的に解説します。印刷して施設管理部門に配備することを推奨します。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">初動対応フロー（5ステップ）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          停電発生直後は混乱しがちです。このフローを順番に進めることで、重大な見落としを防ぎます。
        </p>
        <ol className="mt-6 space-y-5">
          {initialSteps.map((s) => (
            <li key={s.num} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-rose-400 bg-rose-100 text-sm font-bold text-rose-700">
                {s.num}
              </div>
              <div className="border-l-2 border-rose-200 pl-4">
                <p className="font-semibold text-slate-900">{s.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 時間軸テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">対応時間軸テーブル</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">「停電発生から何分以内に何をすべきか」を一覧で確認してください。</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">タイミング</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">やること</th>
                <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">優先度</th>
              </tr>
            </thead>
            <tbody>
              {timelineRows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-rose-700">{r.timing}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-amber-600">{r.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 計画停電の事前準備チェックリスト */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">計画停電の事前準備チェックリスト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          計画停電は事前通知があります。通知を受けたら以下を停電前日までに完了させてください。
        </p>
        <ul className="mt-4 space-y-2">
          {plannedOutageChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-slate-400 bg-white text-xs text-slate-400">□</span>
              <span className="text-sm text-slate-700">{item.item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 設備別の停電対策 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">設備別の停電対策</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          設備種別ごとに、停電時の停止操作・保護処置・復電後の再起動手順が異なります。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">設備</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">停電時の操作</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">停電中の保護</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">復電後の対応</th>
              </tr>
            </thead>
            <tbody>
              {equipmentTable.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.equipment}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.stopAction}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.protectAction}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.resumeAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 復電後の手順 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">復電後の設備再起動手順</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          復電直後に一斉起動すると突入電流が集中し、ブレーカートリップや設備損傷のリスクがあります。以下の順序で段階的に再起動してください。
        </p>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Phase 1: 電源・通信インフラの復旧（復電後 5分以内）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              受電設備・分電盤の状態確認 → 通信機器（ルーター・交換機）の起動 → サーバーの順次起動（基幹系から優先）
            </p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Phase 2: 生産・業務設備の再起動（復電後 15分以内）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              制御盤の電源投入 → 各設備の安全確認（センサー・リミットスイッチ） → 試運転→本稼働。生産ラインは設備保全担当者が立ち会いのうえ再起動すること。
            </p>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Phase 3: 空調・照明・その他の復旧（復電後 30分以内）</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              空調は段階的に起動（全台一斉起動は避ける）。照明・その他設備は問題がなければ通常通り起動。設備ダメージがあれば即報告・修理手配。
            </p>
          </div>
        </div>
      </section>

      {/* 被害記録と保険対応 */}
      <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">被害記録と保険対応</h2>
        <p className="mt-2 text-sm text-rose-800">
          保険請求・損害賠償請求には証拠記録が不可欠です。復電後48時間以内に以下を実施してください。
        </p>
        <ul className="mt-4 space-y-2">
          {damageRecordItems.map((item, i) => (
            <li key={i} className="flex items-start gap-2 rounded-lg border border-rose-200 bg-white p-3 text-sm text-slate-700">
              <span className="mt-0.5 shrink-0 text-rose-600">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-lg border border-rose-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">保険会社への連絡タイミング</p>
          <p className="mt-1 text-sm leading-7 text-slate-700">
            企業向け火災保険・機械保険・企業総合保険に停電被害が補償対象として含まれている場合があります。被害確認後、できるだけ早く（48時間以内が目安）保険会社または代理店に連絡し、立会い調査の日程を設定してください。被害物を勝手に廃棄・修理すると補償対象外となる場合があります。
          </p>
        </div>
      </section>

      {/* BCPとの連携 */}
      <section className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">BCP（事業継続計画）との連携ポイント</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          停電シナリオをBCPに組み込んでいない場合、今回の停電を機に整備することを強く推奨します。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-amber-200 bg-white p-4">
            <p className="font-semibold text-slate-900">最低限BCPに記載すること</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>停電時の指揮命令系統と連絡先リスト（紙でも保管）</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>重要業務の継続可能時間（UPS・発電機の稼働時間）</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>代替手段（紙運用・別拠点への業務移行）の発動基準</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>復旧優先順位（どの設備・業務から戻すか）</span></li>
            </ul>
          </div>
          <div className="rounded-lg border border-amber-200 bg-white p-4">
            <p className="font-semibold text-slate-900">停電訓練の実施ポイント</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>年1回以上、実際に停電した想定で手順確認訓練を実施</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>UPS・非常用発電機の実負荷テストを訓練に組み込む</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>担当者不在時の代行手順も訓練対象に含める</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-600">▶</span><span>訓練後に課題を洗い出しBCP・手順書を更新する</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600"
          >
            停電対策・BCP整備について専門家に相談する →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ）</h2>
        <div className="mt-4 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Q. {faq.q}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">A. {faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 出典・FAQ構造化データ */}
      <SourcesAndFaq
        faq={faqForSchema}
        sources={[
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力供給の安定性・停電対応に関する公式情報" },
          { name: "電力広域的運営推進機関（OCCTO）", url: "https://www.occto.or.jp", description: "電力需給データ・停電情報" },
          { name: "総務省消防庁", url: "https://www.fdma.go.jp", description: "非常用発電機の点検義務・消防法に関する情報" },
        ]}
        publishedAt="2026-04-12"
      />

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "電力会社から値上げ通知が届いたときの7ステップ対応ガイド。",
            },
            {
              href: "/emergency-supplier-bankruptcy",
              title: "電力会社が倒産・事業撤退したときの対応",
              description: "新電力の倒産・廃業通知を受けた場合の初動から切替先選定まで。",
            },
            {
              href: "/emergency-billing-dispute",
              title: "電気料金の二重請求・過請求が発生したときの対応",
              description: "過大請求の確認フローと電力会社への問い合わせ方法を解説。",
            },
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは何か",
              description: "電力供給が途絶えたときのセーフティネット「最終保障供給」の仕組み。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="停電リスクも含めた総合診断を"
          description="自社の電力コストリスクをシミュレーターで把握し、停電対策・BCP整備について専門家に相談しましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
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
