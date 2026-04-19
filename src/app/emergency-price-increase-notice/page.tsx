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

const pageTitle = "値上げ通知が届いたらまずやる7つのこと｜法人向け電気料金の緊急対応";
const pageDescription =
  "電力会社から値上げ通知が届いたとき、法人はまず何をすべきか。通知受領から対応完了までの7ステップと時間軸、判断フロー、やってはいけないNG行動を解説します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-price-increase-notice";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 値上げ通知 対応",
    "法人 電力 値上げ 緊急",
    "電気料金 値上げ 手順",
    "電力 値上げ 交渉",
    "法人向け電気料金 値上げ対策",
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
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const steps = [
  {
    num: "01",
    title: "通知内容の正確な把握（当日）",
    desc: "値上げ率・適用開始日・対象契約・異議申立期限を書面で確認する。口頭や電話での確認は後回しにせず、まず書面を精読する。",
  },
  {
    num: "02",
    title: "インパクト試算（当日〜翌日）",
    desc: "過去12カ月の電力使用量に値上げ率を乗じ、月次・年次の追加コストを計算する。シミュレーターを活用すると効率的。",
  },
  {
    num: "03",
    title: "経営層・財務への速報（翌日以内）",
    desc: "試算結果を添えて経営層・財務部門に速報する。予算計画の修正が必要な場合は早急にアラートを出す。",
  },
  {
    num: "04",
    title: "契約条件の再確認（3日以内）",
    desc: "現在の契約書を取り出し、値上げ通告義務・猶予期間・解約条件・違約金の有無を確認する。",
  },
  {
    num: "05",
    title: "他社料金の相見積もり（1週間以内）",
    desc: "最低3社から見積もりを取得する。燃調・市場価格調整額の上限設定の有無も必ず確認する。",
  },
  {
    num: "06",
    title: "現供給会社への交渉・申し入れ（2週間以内）",
    desc: "相見積もりの結果を持参し、現供給会社に条件交渉を行う。値上げ幅の圧縮・固定化オプションを確認する。",
  },
  {
    num: "07",
    title: "切替または継続の最終決定（期限1週間前まで）",
    desc: "異議申立期限・解約通告期限を逆算し、最終意思決定を行う。期限超過は自動継続の可能性があるため厳守する。",
  },
];

const timelineRows = [
  { timing: "当日", action: "通知内容の精読・インパクト試算開始", priority: "★★★" },
  { timing: "翌日以内", action: "経営層・財務への速報", priority: "★★★" },
  { timing: "3日以内", action: "契約書確認・解約条件把握", priority: "★★★" },
  { timing: "1週間以内", action: "他社相見積もり取得（最低3社）", priority: "★★★" },
  { timing: "2週間以内", action: "現供給会社へ交渉・申し入れ", priority: "★★" },
  { timing: "期限1週間前", action: "切替または継続の最終決定・手続き開始", priority: "★★★" },
  { timing: "期限当日", action: "異議申立または解約通告の提出完了", priority: "★★★" },
];

const causeTable = [
  {
    cause: "燃料費調整額の上限撤廃・引き上げ",
    action: "燃調上限あり・なしを確認。上限あり契約の他社を優先比較。",
  },
  {
    cause: "市場価格調整額の新設・増額",
    action: "市場連動要素の割合を確認し、固定料金メニューと比較試算。",
  },
  {
    cause: "基本料金・電力量料金の改定",
    action: "過去のコスト推移と比較し、上昇幅が同業他社より大きいか確認。",
  },
  {
    cause: "再生可能エネルギー賦課金の増加",
    action: "国の制度由来のため回避困難。他費用の削減で相殺を検討。",
  },
  {
    cause: "電力会社の経営事情による値上げ",
    action: "他社への切替を優先検討。ただし切替時のリスクも並行評価。",
  },
];

const ngItems = [
  { title: "すぐに解約通告を出す", detail: "契約書の解約条件を確認せずに解約通告すると、違約金が発生する場合があります。必ず契約書を確認してから行動しましょう。" },
  { title: "通知を読まずに放置する", detail: "異議申立期限・解約通告期限が設定されていることが多く、期限を過ぎると自動継続・自動同意となるリスクがあります。" },
  { title: "口頭・電話のみで交渉する", detail: "交渉内容は必ず書面（メール可）で残してください。後日のトラブル防止に不可欠です。" },
  { title: "1社だけで判断する", detail: "相見積もりなしに「これ以上は無理」と判断するのは危険です。市場相場を把握してから交渉・決定してください。" },
  { title: "値上げ率だけで判断する", detail: "値上げ後の絶対額・燃調上限の有無・契約期間も含めた総合コストで判断が必要です。値上げ率が低くても燃調リスクが高い契約は要注意。" },
];

const reportFlow = [
  { who: "直属上司・施設担当部門長", when: "通知受領翌日以内", what: "値上げ内容の概要・試算コスト・今後の対応方針案" },
  { who: "財務・経理部門", when: "3日以内", what: "月次・年次の追加コスト見込み・予算修正の必要性" },
  { who: "経営層（社長・役員）", when: "1週間以内", what: "相見積もり結果・切替判断の要否・意思決定依頼" },
  { who: "法務部門（必要時）", when: "随時", what: "契約書の解釈・違約金リスクの法的確認" },
];

const expertSigns = [
  "値上げ率が30%超で年間コスト増加が数百万円を超える場合",
  "契約書の解約条件・違約金条項の解釈が難解で自社判断が困難な場合",
  "相見積もりを取っても条件比較の基準が分からない場合",
  "複数拠点・複数契約があり、一括最適化の判断が必要な場合",
  "切替後のリスク（燃調・市場連動）について独自評価が難しい場合",
];

const faqForSchema = [
  { question: "値上げ通知の「異議申立期限」とは何ですか？", answer: "電力会社が値上げを通告する際、「○月○日までに異議を申し立てなければ同意とみなす」と設定する期限です。この期限を過ぎると値上げを承諾したとみなされるため、必ず期限を確認してください。" },
  { question: "交渉で値上げ幅を下げることはできますか？", answer: "年間使用量が大きい法人の場合、相見積もりを持参した交渉で値上げ幅の圧縮や、固定料金メニューへの変更を勝ち取れることがあります。特に年間使用量が100万kWh以上の場合は交渉余地が大きいです。" },
  { question: "値上げを断ったら電気を止められますか？", answer: "値上げを承諾しないからといって即座に供給停止になることはありません。ただし契約終了後に新たな供給者を確保できない場合は、最終保障供給に移行する可能性があります。" },
];

const faqs = [
  {
    q: "値上げ通知の「異議申立期限」とは何ですか？",
    a: "電力会社が値上げを通告する際、「○月○日までに異議を申し立てなければ同意とみなす」と設定する期限です。この期限を過ぎると値上げを承諾したとみなされるため、必ず期限を確認してください。",
  },
  {
    q: "通知から切替完了まで何日かかりますか？",
    a: "切替には通常30〜60日程度かかります。通知を受け取った時点で余裕がない場合は、まず現供給会社に「切替を検討中」である旨を伝えて猶予を求めることが有効です。",
  },
  {
    q: "交渉で値上げ幅を下げることはできますか？",
    a: "年間使用量が大きい法人の場合、相見積もりを持参した交渉で値上げ幅の圧縮や、固定料金メニューへの変更を勝ち取れることがあります。特に年間使用量が100万kWh以上の場合は交渉余地が大きいです。",
  },
  {
    q: "値上げを断ったら電気を止められますか？",
    a: "値上げを承諾しないからといって即座に供給停止になることはありません。ただし契約終了後に新たな供給者を確保できない場合は、最終保障供給に移行する可能性があります。",
  },
  {
    q: "再生可能エネルギー賦課金の値上げは回避できますか？",
    a: "再エネ賦課金は国の制度に基づくもので、一般的には回避できません。高圧・特別高圧契約の場合、自家消費型太陽光発電の導入で一部を相殺する方法があります。",
  },
  {
    q: "複数拠点がある場合、個別に対応すべきですか？",
    a: "可能であれば一括交渉の方が有利になる場合があります。ただし、各拠点の電圧区分や使用量が異なる場合は、最適な契約が拠点ごとに異なることもあるため、専門家への相談をお勧めします。",
  },
  {
    q: "新電力と大手電力会社どちらに切り替えるべきですか？",
    a: "安定供給の信頼性・料金水準・燃調上限の有無・契約期間の柔軟性を総合的に比較してください。市場価格連動型が多い新電力は価格変動リスクがある一方、競争力ある固定料金を提示する場合もあります。",
  },
];

export default function EmergencyPriceIncreaseNoticePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-11"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "緊急対応・トラブル解決", url: "https://simulator.eic-jp.org/articles/emergency-response" },
          { name: "値上げ通知への対応" },
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
        <span className="text-slate-800">値上げ通知への対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          値上げ通知が届いたらまずやる7つのこと
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社から値上げ通知が届いた瞬間から、対応の時計は動き始めます。異議申立期限・解約通告期限を見逃すと選択肢が大幅に狭まります。このページでは
          <strong>通知受領当日からすべき7つの行動</strong>を時間軸に沿って整理しています。まず深呼吸して、このページの手順を順番に進めてください。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げ通知を受けたときの7ステップ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          以下のステップを順番に進めてください。並行作業も多いですが、優先順位は番号順です。
        </p>
        <ol className="mt-6 space-y-5">
          {steps.map((s) => (
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
        <p className="mt-2 text-sm leading-7 text-slate-700">「何日以内に何をすべきか」を一覧で確認してください。</p>
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

      {/* 判断フロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げ通知の判断フロー</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">通知を受け取ったら、以下のフローで対応方針を決めてください。</p>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q1: 値上げ幅は年間コストで10%以内か？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> まず契約書確認・相見積もり。交渉で吸収できる可能性あり。
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">NO →</span> 即座に切替検討フェーズへ。経営層への速報を優先。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q2: 現契約の残存期間・違約金はあるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">違約金なし →</span> 相見積もり後に最適な切替時期を選択できる。
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">違約金あり →</span> 違約金と値上げコストの損益分岐を計算してから判断。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q3: 異議申立期限まで1カ月以上あるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 相見積もり・交渉を経て、余裕をもって最終決定できる。
              </div>
              <div className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-rose-700">NO →</span> 今すぐ専門家に相談。期限超過の自動継続に注意。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 原因別対応テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">値上げ原因別の対応策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">値上げ原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">推奨対応策</th>
              </tr>
            </thead>
            <tbody>
              {causeTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{c.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{c.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* やってはいけないこと */}
      <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">やってはいけないNG行動</h2>
        <p className="mt-2 text-sm text-rose-800">以下の行動は状況を悪化させる可能性があります。焦っているときほど注意してください。</p>
        <ul className="mt-4 space-y-3">
          {ngItems.map((item, i) => (
            <li key={i} className="rounded-lg border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-700">✕ {item.title}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 社内報告の進め方 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">社内報告の進め方</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">誰に・いつ・何を報告すべきかを整理しました。報告遅延は意思決定の遅れに直結します。</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">報告先</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">タイミング</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">報告内容</th>
              </tr>
            </thead>
            <tbody>
              {reportFlow.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.who}</td>
                  <td className="border border-slate-200 px-3 py-2 text-rose-700">{r.when}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 専門家に相談すべきサイン */}
      <section className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">専門家に相談すべきサイン</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          以下に1つでも当てはまる場合は、自社判断だけで進めるリスクが高い状況です。早めに
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家へのご相談</Link>
          をご検討ください。
        </p>
        <ul className="mt-4 space-y-2">
          {expertSigns.map((sign, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-1 text-amber-600">▶</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600"
          >
            無料でエネルギー専門家に相談する →
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
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力料金制度・燃料費調整額の仕組みに関する公式情報" },
          { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力会社の料金変更・契約条件に関する監視データ" },
          { name: "新電力ネット", url: "https://pps-net.org", description: "電力市場の動向・新電力の料金情報" },
        ]}
        publishedAt="2026-04-11"
      />

      {/* 関連リンク */}
      
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "相見積もりの取り方と、料金比較で見るべきポイントを解説します。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "見直しの進め方を初めての方にもわかりやすく解説しています。",
            },
            {
              href: "/fuel-cost-adjustment-upper-limit",
              title: "燃調費の上限設定",
              description: "燃料費調整額の上限有無がコストリスクに与える影響を解説。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたときの対応",
              description: "供給会社側から解除通知が届いたときの初動と切替先選定ガイド。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="今すぐ現状を把握する"
          description="値上げ後のコスト増加額をシミュレーターで試算し、切替判断の材料を揃えましょう。判断に迷う場合は専門家への無料相談もご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/contact", label: "専門家に無料相談する" },
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
