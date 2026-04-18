import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "電力会社が倒産・事業撤退したときの対応｜法人向け緊急対応ガイド";
const pageDescription =
  "新電力が倒産・廃業した場合に法人がとるべき対応手順を解説。電力供給が止まるまでの猶予期間、最終保障供給への自動切替の仕組み、新契約先の選定基準、未払い債権の回収方法まで網羅します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-supplier-bankruptcy";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新電力 倒産 対応",
    "電力会社 廃業 法人",
    "最終保障供給 切替",
    "電力 供給停止 対処",
    "新電力 事業撤退 手続き",
    "電力契約 倒産 未払い",
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

const initialSteps = [
  {
    num: "01",
    title: "通知内容の正確な把握（受領当日）",
    desc: "倒産・廃業通知の種類（破産・民事再生・事業譲渡・廃業）を確認する。供給停止予定日・猶予期間・問い合わせ窓口を書面で確認する。口頭確認より書面の内容を優先する。",
  },
  {
    num: "02",
    title: "最終保障供給への自動切替の確認（当日〜翌日）",
    desc: "供給停止日以降は一般送配電事業者（東京電力PG・関西電力送配電等）による最終保障供給に自動移行する仕組みを確認する。電気が「突然止まる」ことはないが、料金は通常より高くなる。",
  },
  {
    num: "03",
    title: "経営層・財務部門への速報（翌日以内）",
    desc: "倒産の事実・供給停止予定日・最終保障供給移行後のコスト増加見込みを経営層・財務部門に速報する。予算計画の修正と切替コスト確保を依頼する。",
  },
  {
    num: "04",
    title: "切替先候補の相見積もり開始（3日以内）",
    desc: "最低3社に見積もりを依頼する。最終保障供給の料金は高いため、早期の切替先確保が重要。切替完了まで通常30〜60日かかることを念頭に置く。",
  },
  {
    num: "05",
    title: "未払い電気代・デポジットの確認（1週間以内）",
    desc: "直近の請求書・支払い状況を確認する。倒産会社への未払い債務は破産管財人または清算人への届出が必要。逆に、過払い・デポジット返還については管財人に対して債権届出を行う。",
  },
  {
    num: "06",
    title: "経産省・電力・ガス取引監視等委員会への確認（必要に応じて）",
    desc: "供給停止トラブル・不当な請求が生じた場合は、電力・ガス取引監視等委員会（ECOM）または経済産業省の相談窓口に問い合わせることができる。",
  },
  {
    num: "07",
    title: "新契約締結・切替手続きの完了（最終保障供給開始後60日以内が目安）",
    desc: "相見積もり結果をもとに新たな供給会社を選定し、切替申し込みを完了させる。最終保障供給は一時的なセーフティネットであり、長期利用はコスト高となるため早期切替が基本。",
  },
];

const timelineRows = [
  { days: "当日", action: "倒産・廃業通知の内容確認・供給停止日の把握", priority: "★★★" },
  { days: "翌日以内", action: "経営層・財務部門への速報・コスト試算", priority: "★★★" },
  { days: "3日以内", action: "最終保障供給の料金確認・相見積もり開始", priority: "★★★" },
  { days: "1週間以内", action: "未払い債権・デポジットの確認・管財人への債権届出", priority: "★★" },
  { days: "2週間以内", action: "切替先の選定・切替申し込み完了", priority: "★★★" },
  { days: "30〜60日", action: "新供給会社への切替完了（電力切替の標準期間）", priority: "★★" },
  { days: "60日以内", action: "最終保障供給からの離脱完了（長期化は料金高騰につながる）", priority: "★★" },
];

const lastResortFacts = [
  {
    title: "最終保障供給とは",
    body: "電力小売事業者が倒産・廃業した場合に、需要家（企業・家庭）の電力供給を守るセーフティネットとして、一般送配電事業者が提供する電力供給サービスです。供給は自動的に継続されるため、停電は発生しません。",
  },
  {
    title: "料金水準",
    body: "最終保障供給の料金は、通常の新電力・規制料金より高く設定されています。あくまでも「一時的な緊急措置」のため、長期利用すると電気代が大幅に増加します。早期の切替が重要です。",
  },
  {
    title: "適用期間",
    body: "最終保障供給には法令上の上限期間が設定されており、供給開始から一定期間（通常1〜2年）内に新たな供給契約を締結する必要があります。ただし事前に新契約を締結すれば自動終了します。",
  },
];

const selectionCriteria = [
  { criterion: "料金の安定性", detail: "燃料費調整額の上限設定の有無・市場価格連動型かどうかを確認する。変動リスクの少ない固定型を優先検討。" },
  { criterion: "供給実績・財務健全性", detail: "事業開始からの年数・供給規模・親会社の信用力を確認する。財務状況の開示が不十分な新興会社は慎重に。" },
  { criterion: "契約期間・解約条件", detail: "長期契約の場合、途中解約違約金の有無を確認。外部環境変化に対応できる柔軟性も重要。" },
  { criterion: "サポート体制", detail: "問い合わせ窓口・担当者の対応速度・24時間対応の有無を確認する。緊急時の連絡先が明確か確認。" },
  { criterion: "切替速度", detail: "現在の最終保障供給から早期に切替できるか。申し込みから切替完了までの標準日数を確認する。" },
];

const debtRecoverySteps = [
  {
    case: "倒産会社への未払い電気代（立場：債務者）",
    action: "破産管財人または清算人が判明したら支払い先を確認し、指示に従って支払う。通常の電気代は倒産後も支払い義務がある。",
  },
  {
    case: "過払い・前払い電気代の返還請求（立場：債権者）",
    action: "破産手続きの開始決定後、裁判所に債権届出を行う。デポジット・前払い金・精算未了の電気代が対象。回収率は破産財団の状況による。",
  },
  {
    case: "未精算のクレジット・割引の返還",
    action: "管財人に対して債権としての届出が必要。優先度は一般債権のため、回収が難しい場合もある。弁護士への相談を推奨。",
  },
];

const reportTemplate = {
  subject: "【緊急報告】電力供給会社の倒産に伴う対応状況について",
  body: `1. 事実の概要
　・倒産/廃業通知受領日：○○年○○月○○日
　・供給会社名：株式会社○○
　・供給停止予定日：○○年○○月○○日

2. 電力供給への影響
　・最終保障供給への自動切替：予定通り実施される見込み
　・電力供給の断絶リスク：なし
　・コスト増加見込み：月額○○万円増（最終保障供給の料金差）

3. 現在の対応状況
　・切替先候補：○社に見積もり依頼済み（○月○日回答予定）
　・未払い債権確認：△万円（管財人への届出手続き中）

4. 今後のスケジュール（予定）
　・切替先決定：○月○日
　・切替申し込み：○月○日
　・切替完了（予定）：○月○日

5. 必要な意思決定
　・切替先の最終承認（○月○日までに必要）`,
};

const faqForSchema = [
  { question: "電力会社が倒産したら電気が突然止まりますか？", answer: "いいえ、突然停電になることはありません。小売電気事業者が倒産・廃業した場合、一般送配電事業者による「最終保障供給」に自動的に移行するため、電力供給は継続されます。ただし料金が高くなるため、早急に新たな契約先を探す必要があります。" },
  { question: "倒産した電力会社に払いすぎた電気代は返ってきますか？", answer: "破産手続きが開始された場合、過払い金やデポジットは一般債権として破産管財人に届け出ることになります。回収できる金額は破産財団の資産状況によって異なり、全額回収できないケースも多くあります。弁護士に相談のうえ、確実に債権届出を行うことが重要です。" },
  { question: "新しい電力会社に切り替える際の申し込みから完了まで何日かかりますか？", answer: "低圧では通常1〜2週間、高圧以上では検針月サイクルの関係から1〜2カ月程度かかります。最終保障供給中でも切替申し込みは通常通り進められます。供給停止予定日前から動き始めると、最終保障供給への移行自体を避けられる場合もあります。" },
];

const faqs = [
  {
    q: "電力会社が倒産したら電気が突然止まりますか？",
    a: "いいえ、突然停電になることはありません。小売電気事業者が倒産・廃業した場合、一般送配電事業者による「最終保障供給」に自動的に移行するため、電力供給は継続されます。ただし料金が高くなるため、早急に新たな契約先を探す必要があります。",
  },
  {
    q: "最終保障供給の料金はどのくらい高いですか？",
    a: "最終保障供給の料金単価は通常の規制料金・自由化料金より高く設定されており、一般的に従前の契約より20〜50%程度高くなるケースもあります。具体的な料金は各一般送配電事業者の公表する最終保障供給約款で確認できます。",
  },
  {
    q: "倒産した電力会社に払いすぎた電気代は返ってきますか？",
    a: "破産手続きが開始された場合、過払い金やデポジットは一般債権として破産管財人に届け出ることになります。回収できる金額は破産財団の資産状況によって異なり、全額回収できないケースも多くあります。弁護士に相談のうえ、確実に債権届出を行うことが重要です。",
  },
  {
    q: "新しい電力会社に切り替える際の申し込みから完了まで何日かかりますか？",
    a: "低圧（家庭・小規模事業所）では通常1〜2週間、高圧以上では検針月サイクルの関係から1〜2カ月程度かかります。最終保障供給中でも切替申し込みは通常通り進められます。供給停止予定日前から動き始めると、最終保障供給への移行自体を避けられる場合もあります。",
  },
  {
    q: "電力・ガス取引監視等委員会（ECOM）はどのような場合に相談できますか？",
    a: "供給停止に関する不当な対応・料金の過大請求・契約内容との相違など、電力事業者とのトラブルについてECOMに相談できます。電話相談窓口（03-3501-5725）またはWebフォームで受け付けています。証拠書類（契約書・請求書・通知書）を手元に準備してから連絡することを推奨します。",
  },
  {
    q: "複数拠点がある場合、一括して切替先を選定すべきですか？",
    a: "拠点の電圧区分（高圧・低圧）や使用量が異なる場合は、最適な供給会社が異なることがあります。ただし交渉力の観点から、一括提案を求めて複数社から見積もりを取ることが有利になる場合も多いです。まずは拠点の全体像をまとめた資料を作成したうえで相見積もりを進めてください。",
  },
];

export default function EmergencySupplierBankruptcyPage() {
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
          { name: "電力会社倒産の対応" },
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
        <span className="text-slate-800">電力会社倒産の対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応・トラブル解決</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電力会社が倒産・事業撤退したときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          新電力の倒産・廃業通知が届いた場合、電気が「突然止まる」ことはありません。しかし、
          <strong>何も対処しないと料金が大幅に上昇し、未払い債権が回収不能になる</strong>
          可能性があります。このページでは倒産通知受領時の7ステップ初動から、最終保障供給の仕組み、切替先の選定基準、未払い債権の回収方法、社内報告テンプレートまでを解説します。
        </p>
      </header>

      {/* STEP */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">倒産通知受領時の初動（7ステップ）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          以下のステップを優先順位の高い順に進めてください。
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
        <h2 className="text-xl font-semibold text-slate-900">電力供給が止まるまでの時間軸（日数別やるべきこと）</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">倒産通知受領からの経過日数別に、やるべきことを整理しました。</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">経過時間・日数</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">やること</th>
                <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">優先度</th>
              </tr>
            </thead>
            <tbody>
              {timelineRows.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-rose-700">{r.days}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.action}</td>
                  <td className="border border-slate-200 px-3 py-2 text-center text-amber-600">{r.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 最終保障供給 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給への切替フロー</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          最終保障供給は自動移行のため手続き不要ですが、仕組みを正確に理解しておくことが重要です。
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {lastResortFacts.map((fact, i) => (
            <div key={i} className="rounded-xl border border-sky-200 bg-sky-50 p-4">
              <p className="font-semibold text-sky-800">{fact.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{fact.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">最終保障供給移行後の流れ</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded bg-rose-100 px-3 py-1 font-semibold text-rose-700">倒産通知受領</span>
            <span className="text-slate-400">→</span>
            <span className="rounded bg-amber-100 px-3 py-1 font-semibold text-amber-700">供給停止日</span>
            <span className="text-slate-400">→</span>
            <span className="rounded bg-sky-100 px-3 py-1 font-semibold text-sky-700">最終保障供給自動開始</span>
            <span className="text-slate-400">→</span>
            <span className="rounded bg-green-100 px-3 py-1 font-semibold text-green-700">新契約切替完了</span>
            <span className="text-slate-400">→</span>
            <span className="rounded bg-slate-100 px-3 py-1 font-semibold text-slate-700">最終保障供給終了</span>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            ※最終保障供給開始後は
            <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給の詳細ページ</Link>
            も参照してください。
          </p>
        </div>
      </section>

      {/* 切替先選定基準 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">新たな契約先の選定基準</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          前回の倒産を教訓に、次の契約先選定では財務健全性と料金安定性を重視してください。
        </p>
        <div className="mt-4 space-y-3">
          {selectionCriteria.map((c, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{i + 1}. {c.criterion}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 未払い債権の回収 */}
      <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">未払い債権の回収方法</h2>
        <p className="mt-2 text-sm text-rose-800">
          立場によって対応が異なります。自社が「債務者」「債権者」どちらの立場にあるかを確認してください。
        </p>
        <div className="mt-4 space-y-3">
          {debtRecoverySteps.map((item, i) => (
            <div key={i} className="rounded-lg border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-700">{item.case}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{item.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 社内報告テンプレート */}
      <section className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">社内報告テンプレート</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          経営層・財務部門への報告書のひな型です。空欄を埋めてご活用ください。
        </p>
        <div className="mt-4 rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">件名: {reportTemplate.subject}</p>
          <pre className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{reportTemplate.body}</pre>
        </div>
        <p className="mt-3 text-xs text-slate-500">※上記はひな型です。自社の状況に応じて適宜修正してください。</p>
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
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "最終保障供給制度・電力小売制度に関する公式情報" },
          { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "新電力の撤退・倒産に関する監視データと相談窓口" },
          { name: "新電力ネット", url: "https://pps-net.org", description: "新電力の撤退状況・市場動向・切替手続き情報" },
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
              href: "/last-resort-supply",
              title: "最終保障供給とは何か",
              description: "電力供給が途絶えたときのセーフティネット「最終保障供給」の仕組みと料金水準を解説。",
            },
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "電力会社から値上げ通知が届いたときの対応手順ガイド。",
            },
            {
              href: "/emergency-power-outage-response",
              title: "停電・計画停電が発生したときの法人対応マニュアル",
              description: "停電発生時の初動から復電手順・BCP連携まで体系的に解説。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "相見積もりの取り方と料金比較で見るべきポイントを解説します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="今すぐ切替先を比較・診断する"
          description="最終保障供給からの早期離脱のために、シミュレーターで現在のコスト状況を把握し、切替判断の材料を揃えましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "シミュレーターの使い方を見る" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
