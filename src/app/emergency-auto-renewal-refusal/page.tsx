import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "自動更新契約の停止・拒否の進め方｜期限管理と手続きガイド";
const pageDescription =
  "電力契約の自動更新を停止・拒否するための進め方を解説。解約通告期限の確認方法・期限を過ぎた場合の対処・電力会社との交渉・次回更新での失敗を防ぐ期限管理を法人向けに整理しました。";
const pageUrl = "https://simulator.eic-jp.org/emergency-auto-renewal-refusal";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 自動更新 拒否 手続き",
    "電気 契約 自動更新 停止",
    "電力 自動更新 解約通告 期限",
    "法人 電気 自動更新 断る方法",
    "電力契約 更新拒否 期限管理",
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
    title: "契約書の自動更新条項・解約通告期限の確認（早急）",
    desc: "契約書の「自動更新」「更新拒否」「解約通告」の条項を確認する。「契約満了○カ月前までに申し出なければ自動更新とみなす」という記載が典型。具体的な期限を把握する。",
  },
  {
    num: "02",
    title: "契約満了日と解約通告期限の逆算（確認後すぐ）",
    desc: "契約満了日から「解約通告期限」（例: 満了3カ月前）を逆算してカレンダーに記入する。この期限を1日でも過ぎると、自動更新が成立する可能性が高い。",
  },
  {
    num: "03",
    title: "切替先の選定・相見積もり（期限の3カ月以上前から）",
    desc: "自動更新拒否を決意したら、すぐに切替先の選定を開始する。見積もり・審査・切替工事に通常30〜60日かかるため、余裕をもって進める必要がある。",
  },
  {
    num: "04",
    title: "電力会社への更新拒否通知の送付（期限前）",
    desc: "「次回の自動更新は行わない」旨を書面（内容証明郵便または電子記録が残る方法）で電力会社に通知する。電話のみの連絡では記録が残らず、後日のトラブルになるため注意。",
  },
  {
    num: "05",
    title: "電力会社からの受領確認を取得（通知後すぐ）",
    desc: "更新拒否通知が電力会社に届いたことの確認（受領書・受領メール）を取得する。確認が取れない場合は再送・電話でのフォローアップを行う。",
  },
  {
    num: "06",
    title: "切替先との契約締結（満了日の1カ月以上前）",
    desc: "新供給会社との契約を締結し、切替手続きを完了させる。切替完了日が現契約の満了日と重ならないようスケジュールを調整する（供給の空白を避ける）。",
  },
  {
    num: "07",
    title: "次回のために社内の期限管理体制を整備（切替完了後）",
    desc: "次の契約の満了日・解約通告期限を社内システム・カレンダーに登録し、半年前・3カ月前・1カ月前にアラートが届く仕組みを整える。",
  },
];

const timelineRows = [
  { timing: "契約満了の6カ月前", action: "契約書の確認・解約通告期限の把握・切替検討開始", priority: "★★★" },
  { timing: "契約満了の4〜5カ月前", action: "切替候補の相見積もり（最低3社）", priority: "★★★" },
  { timing: "契約満了の3カ月前（期限の目安）", action: "更新拒否通知の送付・受領確認の取得", priority: "★★★" },
  { timing: "契約満了の2カ月前", action: "切替先との契約締結・切替手続き開始", priority: "★★★" },
  { timing: "契約満了の1カ月前", action: "切替完了の確認・旧供給会社への最終確認", priority: "★★" },
  { timing: "契約満了日", action: "新供給会社からの供給開始確認", priority: "★★★" },
  { timing: "切替完了後", action: "次回契約の満了日・通告期限を社内カレンダーに登録", priority: "★" },
];

const checkTable = [
  { item: "契約書に自動更新条項が記載されているか", check: "条項番号と文言（「自動的に更新」「同一条件で継続」など）を確認。" },
  { item: "解約通告期限（何カ月前か）を把握しているか", check: "期限を把握し、カレンダーにアラートを設定する。" },
  { item: "更新拒否の通知方法（書面・電子）を確認しているか", check: "「書面で通知」「内容証明」などの指定がある場合はその方法に従う。" },
  { item: "切替先の選定を期限の3カ月以上前に開始できるか", check: "切替に30〜60日かかるため、余裕をもって開始することが必須。" },
  { item: "更新拒否通知の受領確認を電力会社から取得しているか", check: "受領確認がない場合、後日「届いていない」とのトラブルになる可能性がある。" },
  { item: "次の供給会社との契約開始日が現契約終了日と連続しているか", check: "供給の空白（停電リスク）を避けるためスケジュールを慎重に調整する。" },
];

const periodExpiredFlow = [
  {
    situation: "解約通告期限を1〜2週間過ぎた",
    action: "すぐに電力会社に連絡し、通告期限超過を正直に伝えたうえで、更新拒否・期限延長の交渉を行う。誠実な交渉で認められることもある。",
  },
  {
    situation: "解約通告期限を1カ月以上過ぎた",
    action: "自動更新が成立している可能性が高い。ただし次の更新期間の開始前に通告を行えば、次回の更新を拒否できる。電力会社に現時点での解約条件を確認する。",
  },
  {
    situation: "更新後まもなく解約を希望している",
    action: "更新後でも中途解約は可能。ただし違約金が発生する可能性がある。違約金と次の更新時の損益を比較して判断する。",
  },
];

const ngItems = [
  { title: "「まだ時間がある」と先送りにする", detail: "解約通告期限は意外と早く来ます。契約満了の6カ月前から動き始めることで、余裕をもって最適な切替先を選択できます。" },
  { title: "電話だけで更新拒否を伝える", detail: "電話での口頭連絡は記録が残りません。後日「連絡を受けていない」と言われるリスクがあります。必ず書面またはメールで通知し、受領確認を取得してください。" },
  { title: "解約通告と切替手続きを同時に始める", detail: "切替には通常30〜60日かかります。解約通告後から動き始めると供給の空白が発生するリスクがあります。切替先の選定を先に進めてから通告してください。" },
  { title: "通告期限を契約書で確認せず電話で聞いて終わりにする", detail: "電力会社の担当者が誤った期限を伝えてしまうこともあります。必ず契約書の原文で期限を確認してください。" },
  { title: "切替先が決まってから解約通告する計画を立てる", detail: "切替先の選定に時間がかかり、解約通告期限を過ぎてしまうケースがあります。「期限前に通告→切替先を並行して選定」の順序で進めることを推奨します。" },
];

const reportFlow = [
  { who: "施設管理・総務部門長", when: "契約満了6カ月前", what: "解約通告期限・切替検討の開始・スケジュール案" },
  { who: "財務・経理部門", when: "切替先決定時", what: "切替後の料金見込み・コスト変化・予算への影響" },
  { who: "経営層", when: "切替先決定前", what: "切替先の選定結果・コスト比較・意思決定依頼" },
  { who: "法務部門（必要時）", when: "随時", what: "自動更新条項の解釈・通告方法の法的確認" },
];

const expertSigns = [
  "解約通告期限をすでに過ぎており、電力会社との交渉が難航している場合",
  "自動更新後に条件が大幅に変わり、切替または解約を検討している場合",
  "複数拠点の契約の満了日・通告期限が異なり、一括管理が困難な場合",
  "自動更新条項の解釈が複雑で、法的判断が必要な場合",
  "切替後の料金条件（燃調・市場価格調整）の評価が困難な場合",
];

const faqForSchema = [
  { question: "自動更新の解約通告期限を過ぎてしまった場合どうすればいいですか？", answer: "まず電力会社に連絡し、状況を正直に説明して更新拒否・猶予の交渉を行ってください。期限超過の場合でも、電力会社が交渉に応じてくれることがあります。応じない場合は、次の更新期間の通告期限に向けて今すぐ準備を始めてください。" },
  { question: "解約通告期限は一般的にいつですか？", answer: "電力会社や契約内容によって異なりますが、契約満了の1カ月前〜3カ月前が多いです。一部の契約では6カ月前というケースもあります。必ず手元の契約書で確認してください。" },
  { question: "自動更新を拒否した後、同じ電力会社に新条件で再契約できますか？", answer: "可能です。更新拒否後に相見積もりを取り、現在の電力会社が最も競争力のある条件を提示した場合は、改めて新条件で契約することができます。更新拒否は「現在の条件での継続を断る」ことであり、電力会社との取引を終了する意思表示ではありません。" },
];

const faqs = [
  {
    q: "自動更新の解約通告期限を過ぎてしまいました。どうすればいいですか？",
    a: "まず電力会社に連絡し、状況を正直に説明して更新拒否・猶予の交渉を行ってください。期限超過の場合でも、電力会社が交渉に応じてくれることがあります。応じない場合は、次の更新期間の通告期限に向けて今すぐ準備を始めてください。",
  },
  {
    q: "解約通告期限は一般的にいつですか？",
    a: "電力会社や契約内容によって異なりますが、契約満了の1カ月前〜3カ月前が多いです。一部の契約では6カ月前というケースもあります。必ず手元の契約書で確認してください。",
  },
  {
    q: "自動更新を拒否すると、その後の電力供給はどうなりますか？",
    a: "自動更新を拒否した場合、契約満了日以降の電力供給がなくなります。そのため、切替先との新規契約を契約満了日に合わせて開始することが必要です。タイミングがずれると供給の空白が生じるため、スケジュール管理が重要です。",
  },
  {
    q: "更新拒否通知の書き方を教えてください。",
    a: "基本的な内容として①契約番号・供給地点番号②契約満了日③「次回の自動更新を行わない」旨の明示④担当者名・会社名・連絡先——を記載してください。電力会社によっては所定の書式があるため、確認してから作成することをお勧めします。",
  },
  {
    q: "自動更新後の契約を中途解約する場合、違約金はありますか？",
    a: "自動更新後の契約においても、中途解約条項が適用される場合があります。自動更新後の残余期間や違約金条件が元の契約と同じかどうかを確認してください。違約金の計算方法については別ページ「電力契約の違約金を請求されたときの対応」もご参照ください。",
  },
  {
    q: "解約通告期限の情報を社内で管理するベストプラクティスはありますか？",
    a: "契約満了日・解約通告期限・担当者を一覧化した「電力契約管理台帳」を作成し、GmailカレンダーやOutlookなどに満了6カ月前・3カ月前・1カ月前のアラートを設定することをお勧めします。担当者の異動時にも引き継げる形で管理することが重要です。",
  },
  {
    q: "自動更新を拒否した後、同じ電力会社に新条件で再契約することはできますか？",
    a: "可能です。更新拒否後に相見積もりを取り、現在の電力会社が最も競争力のある条件を提示した場合は、改めて新条件で契約することができます。更新拒否は「現在の条件での継続を断る」ことであり、電力会社との取引を終了する意思表示ではありません。",
  },
];

export default function EmergencyAutoRenewalRefusalPage() {
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
          { name: "自動更新の停止手続き" },
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
        <span className="text-slate-800">自動更新の停止手続き</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          自動更新契約の停止・拒否の進め方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の多くには「自動更新条項」があり、
          <strong>解約通告期限を1日でも過ぎると更新が自動的に成立</strong>します。
          「そろそろ見直したい」「他社に切り替えたい」と思ったときには、
          まず解約通告期限を確認し、今すぐ行動を開始することが重要です。
          このページでは期限の確認から通告・切替完了・次回の期限管理まで整理しています。
        </p>
      </header>

      {/* 重要な注意 */}
      <section className="mt-6 rounded-xl border-2 border-amber-300 bg-amber-50 p-5">
        <h2 className="text-lg font-semibold text-amber-900">まず今すぐ確認：解約通告期限はいつですか？</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          契約書を開き、「自動更新」「解約通告」「更新拒否」という文言を探してください。
          <strong>「契約満了○カ月前まで」という期限が記載されているはずです。</strong>
          この期限が今日から何日後かを計算し、以下のステップに進んでください。
          期限が1カ月以内に迫っている場合は今すぐ電力会社に連絡してください。
        </p>
      </section>

      {/* STEP タイムライン */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">自動更新を停止・拒否するための7ステップ</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">推奨スケジュール（時間軸テーブル）</h2>
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

      {/* 確認チェックリスト */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">更新拒否前の確認チェックリスト</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sky-100">
                <th className="border border-sky-200 px-3 py-2 text-left font-semibold text-slate-700">確認項目</th>
                <th className="border border-sky-200 px-3 py-2 text-left font-semibold text-slate-700">確認ポイント</th>
              </tr>
            </thead>
            <tbody>
              {checkTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-sky-50"}>
                  <td className="border border-sky-200 px-3 py-2">
                    <span className="text-sky-600">□ </span>
                    <span className="font-semibold text-slate-800">{c.item}</span>
                  </td>
                  <td className="border border-sky-200 px-3 py-2 text-slate-700">{c.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 期限を過ぎてしまった場合 */}
      <section className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">解約通告期限を過ぎてしまった場合の対処</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">期限を過ぎていても諦めないでください。状況別の対応を確認してください。</p>
        <div className="mt-4 space-y-3">
          {periodExpiredFlow.map((p, i) => (
            <div key={i} className="rounded-lg border border-amber-200 bg-white p-4">
              <p className="font-semibold text-amber-800">状況: {p.situation}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{p.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 判断フロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">更新拒否の判断フロー</h2>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q1: 解約通告期限まで1カ月以上あるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 切替先の相見積もりを開始。期限前に通告できる余裕がある。
              </div>
              <div className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-rose-700">NO →</span> 今すぐ電力会社に連絡して状況を確認。専門家への相談も検討。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q2: 自動更新後の条件は現在と同じか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">同じ →</span> 他社相見積もりで競争力を確認。更新条件交渉の余地もある。
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">変わる →</span> 変更後の条件と他社を比較。不利な場合は更新拒否を優先。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q3: 切替先はすでに決まっているか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 更新拒否通告を今すぐ書面で送付。受領確認を取得する。
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-slate-700">NO →</span> 期限が迫っている場合は先に更新拒否通告を送り、並行して切替先を探す。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* やってはいけないこと */}
      <section className="mt-6 rounded-xl border-2 border-rose-300 bg-rose-50 p-5">
        <h2 className="text-xl font-semibold text-rose-900">やってはいけないNG行動</h2>
        <ul className="mt-4 space-y-3">
          {ngItems.map((item, i) => (
            <li key={i} className="rounded-lg border border-rose-200 bg-white p-4">
              <p className="font-semibold text-rose-700">✕ {item.title}</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 社内報告 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">社内報告の進め方</h2>
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
          以下に当てはまる場合は、早めに
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家へご相談</Link>
          ください。
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
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力契約制度・自動更新条項に関する公式情報" },
          { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力契約の解約・更新に関する監視データ" },
          { name: "新電力ネット", url: "https://pps-net.org", description: "電力契約の切替手続き・市場動向情報" },
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
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "見直しの進め方を初めての方にも分かりやすく解説。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "切替先選定のための比較軸と相見積もりの取り方。",
            },
            {
              href: "/emergency-cancellation-fee",
              title: "電力契約の違約金を請求されたときの対応",
              description: "違約金の妥当性確認と交渉手順を解説します。",
            },
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "値上げ通知を受けたときの対応手順と時間軸。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="契約の見直しを今すぐ始める"
          description="自動更新のタイミングは切替の絶好の機会です。シミュレーターで現状コストを把握し、専門家の支援で最適な切替先を選びましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/contact", label: "専門家に無料相談する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
