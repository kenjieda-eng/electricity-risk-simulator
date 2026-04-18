import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle = "電力契約の違約金を請求されたときの対応｜妥当性確認と交渉手順";
const pageDescription =
  "電力契約の違約金を請求されたときの対応ガイド。違約金の妥当性確認方法・不当請求への対処・交渉手順・支払い前に確認すべきチェックリストを法人担当者向けに解説します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-cancellation-fee";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 違約金 請求 対応",
    "電気 契約解除 違約金 妥当性",
    "電力 違約金 交渉",
    "新電力 解約 違約金 高い",
    "電力契約 中途解約 違約金",
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
    title: "違約金請求書の内容確認（当日）",
    desc: "請求書に記載された違約金の根拠条項・計算式・金額・支払期限を確認する。「どの条項に基づいているか」を明確に把握することが最初の一手。",
  },
  {
    num: "02",
    title: "契約書の該当条項を照合（翌日以内）",
    desc: "手元の契約書（または電力会社から取り寄せる）を開き、違約金の根拠となる条項を確認する。請求内容と契約書の記載が一致するか照合する。",
  },
  {
    num: "03",
    title: "計算式の正確性を検証（翌日以内）",
    desc: "請求された違約金の計算が契約書の条項通りに行われているかを確認する。残余期間×月額料金などの計算式は自分で検算する。",
  },
  {
    num: "04",
    title: "解約の責任所在を確認（3日以内）",
    desc: "解約の原因が自社側にあるのか、電力会社側にあるのかを明確にする。電力会社側の事情（料金変更・供給条件変更など）が原因の場合、違約金の免除・減額を求められる可能性がある。",
  },
  {
    num: "05",
    title: "電力会社へ書面で疑問・異議を申し入れ（1週間以内）",
    desc: "疑問点や異議がある場合は、電話ではなくメール・書面で文書として申し入れる。「○○条項の解釈について確認したい」という表現で具体的に問い合わせる。",
  },
  {
    num: "06",
    title: "交渉・減額申請（2週間以内）",
    desc: "不当または過大と判断した場合は、根拠を示して減額交渉を行う。電力会社が応じない場合は、電力・ガス取引監視等委員会への相談・申告も選択肢となる。",
  },
  {
    num: "07",
    title: "支払い実行または法的対応の判断（期限前）",
    desc: "交渉後に合意が得られた場合は書面で確認して支払いを実行。合意できない場合は法的措置を含めた対応を検討する。",
  },
];

const timelineRows = [
  { timing: "当日", action: "請求書内容確認・根拠条項の特定・支払期限の把握", priority: "★★★" },
  { timing: "翌日以内", action: "契約書との照合・計算式の検算", priority: "★★★" },
  { timing: "3日以内", action: "解約責任の所在確認・法務または弁護士への相談検討", priority: "★★★" },
  { timing: "1週間以内", action: "電力会社へ書面で疑問・異議を申し入れ", priority: "★★" },
  { timing: "2週間以内", action: "交渉・減額申請または監督機関への相談", priority: "★★" },
  { timing: "支払期限前", action: "合意内容の書面確認・支払い実行または法的対応判断", priority: "★★★" },
];

const checkTable = [
  { item: "契約書に違約金条項が明記されているか", check: "条項番号と文言を確認。記載がなければ請求は無効の可能性あり。" },
  { item: "計算式・金額が契約書の条項通りか", check: "残余期間・月額料金・係数などを自分で検算して確認する。" },
  { item: "解約の原因は自社側にあるか", check: "電力会社側の供給条件変更・一方的な値上げが原因の場合は免除を交渉できる。" },
  { item: "電力会社の値上げ・条件変更が解約のきっかけか", check: "重要な変更に起因する解約は違約金免除・減額交渉の根拠になる。" },
  { item: "請求書が書面（書留・電子記録）で届いているか", check: "口頭での請求には応じず、必ず書面での請求を求める。" },
  { item: "支払期限と猶予期間を把握しているか", check: "交渉・確認の時間を確保するため、期限と残り日数を把握する。" },
];

const causeTable = [
  {
    cause: "自社都合による中途解約（契約期間中）",
    validity: "概ね有効。ただし計算式・金額の正確性を検算する。",
    action: "計算の正確性を確認したうえで支払いを行う。次回契約では違約金条項に注意。",
  },
  {
    cause: "電力会社による一方的な料金値上げに起因する解約",
    validity: "免除・減額交渉の余地あり。「重要な変更による解約」として扱える場合がある。",
    action: "値上げ通知と解約の関係を書面で整理し、電力会社に免除申請を行う。",
  },
  {
    cause: "電力会社側の供給条件変更（燃調上限撤廃など）",
    validity: "契約内容の実質的変更として、違約金免除の根拠になり得る。",
    action: "条件変更の事実と解約の因果関係を明示して交渉。応じない場合は監督機関へ相談。",
  },
  {
    cause: "新電力が廃業したため自動解除になった場合",
    validity: "自社起因の解約ではないため、違約金請求は原則として不当。",
    action: "違約金請求には応じない。電力会社（精算人）に書面で異議を申し入れる。",
  },
  {
    cause: "契約書に違約金条項の記載がない",
    validity: "法的根拠がなく請求は無効の可能性が高い。",
    action: "根拠条項の提示を書面で求める。提示できない場合は支払いを拒否できる。",
  },
];

const ngItems = [
  { title: "請求書が来たらすぐに支払う", detail: "請求金額の正確性・法的根拠を確認しないまま支払うと、不当な過払いをするリスクがあります。まず契約書と照合してください。" },
  { title: "口頭だけで交渉する", detail: "すべての交渉はメールまたは書面で行い、内容を記録してください。口頭での合意は後日「言った言わない」のトラブルになります。" },
  { title: "支払期限を過ぎてから行動する", detail: "期限超過は延滞利息や法的措置のリスクを高めます。異議があっても「確認中のため一時留保する」旨を書面で伝えながら、並行して交渉を進めてください。" },
  { title: "契約書を確認せずに「仕方ない」と諦める", detail: "実際に違約金条項の記載がなかった、計算誤りがあったというケースは存在します。必ず契約書との照合を行ってください。" },
  { title: "1人で抱え込んで法務・経営層に報告しない", detail: "違約金請求は法的問題を含む可能性があります。法務部門・経営層・必要であれば弁護士を巻き込んで対応してください。" },
];

const reportFlow = [
  { who: "直属上司・施設管理部門長", when: "当日〜翌日", what: "違約金請求の事実・金額・根拠条項の概要・対応方針案" },
  { who: "財務・経理部門", when: "翌日以内", what: "請求金額・支払期限・予算への影響" },
  { who: "法務部門", when: "3日以内", what: "契約書の解釈・違約金の法的妥当性の確認依頼" },
  { who: "経営層", when: "1週間以内", what: "交渉の進捗・支払い判断または法的対応の要否" },
];

const expertSigns = [
  "違約金が年間電気料金の10%を超える高額請求の場合",
  "契約書に違約金条項の記載がなく、電力会社が根拠を示せない場合",
  "電力会社側の供給条件変更が解約の原因となっており、免除交渉が難航している場合",
  "複数の電力契約で同時に違約金を請求されている場合",
  "電力会社が交渉に応じず、監督機関への申告を検討している場合",
];

const faqForSchema = [
  { question: "契約書に違約金の記載がない場合でも支払い義務はありますか？", answer: "原則として、契約書に明記されていない違約金の請求には根拠がありません。ただし民法の一般原則（損害賠償責任）が適用される場合もあるため、具体的な状況については法律の専門家に相談することをお勧めします。" },
  { question: "電力会社が一方的に値上げしたのに解約すると違約金が発生しますか？", answer: "値上げが契約内容の実質的な変更に当たる場合、違約金の免除・減額を交渉できる余地があります。特に料金の大幅な変更や、契約時の条件と大きく異なる変更が行われた場合は、弁護士または専門家に相談してください。" },
  { question: "違約金を支払わないと電気を止められますか？", answer: "違約金の未払いと電力供給の継続は別の問題です。ただし電力会社が法的手続き（訴訟・仮差押えなど）を取る可能性はあります。異議がある場合でも、専門家の助言を受けながら対応することが重要です。" },
];

const faqs = [
  {
    q: "契約書に違約金の記載がない場合でも支払い義務はありますか？",
    a: "原則として、契約書に明記されていない違約金の請求には根拠がありません。ただし民法の一般原則（損害賠償責任）が適用される場合もあるため、具体的な状況については法律の専門家に相談することをお勧めします。",
  },
  {
    q: "電力会社が一方的に値上げしたのに解約すると違約金が発生しますか？",
    a: "値上げが契約内容の実質的な変更に当たる場合、違約金の免除・減額を交渉できる余地があります。特に料金の大幅な変更や、契約時の条件と大きく異なる変更が行われた場合は、弁護士または専門家に相談してください。",
  },
  {
    q: "違約金の計算式が分からない場合はどうすればいいですか？",
    a: "電力会社に対して「計算式と根拠を書面で示してください」と文書で要求する権利があります。明確な説明ができない場合は、請求の正当性を疑う根拠になります。",
  },
  {
    q: "違約金を支払わないと電気を止められますか？",
    a: "違約金の未払いと電力供給の継続は別の問題です。ただし電力会社が法的手続き（訴訟・仮差押えなど）を取る可能性はあります。異議がある場合でも、専門家の助言を受けながら対応することが重要です。",
  },
  {
    q: "電力・ガス取引監視等委員会とはどういう機関ですか？",
    a: "電力・ガス取引監視等委員会は、電力会社の不当な行為（不当な違約金請求、供給拒否など）について相談・申告を受け付ける経済産業省所管の機関です。電力会社との交渉が行き詰まった場合に活用できます。",
  },
  {
    q: "契約期間中の解約でも違約金が安くなる場合はありますか？",
    a: "残余期間が短い場合や、電力会社が供給条件を実質的に変更している場合は、交渉によって違約金が減額されることがあります。また電力会社によっては、新契約の締結を条件に違約金を免除するケースもあります。",
  },
  {
    q: "次の電力契約を結ぶ際、違約金リスクを下げるにはどうすればいいですか？",
    a: "①契約書の違約金条項を必ず確認②残余期間に比例した計算式かどうか確認③自動更新の解約通告期限を把握④契約期間の短い・中途解約条件が柔軟なメニューを選ぶ——の4点を確認することで、リスクを抑えることができます。",
  },
  {
    q: "違約金を支払った後で不当と分かった場合、取り戻せますか？",
    a: "不当な支払いであることが証明できれば、不当利得返還請求として取り戻せる可能性があります。ただし時効（一般的に5年）に注意が必要です。支払い後であっても、不当と判断したら早めに法律の専門家に相談してください。",
  },
];

export default function EmergencyCancellationFeePage() {
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
          { name: "違約金請求の対応" },
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
        <span className="text-slate-800">違約金請求の対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電力契約の違約金を請求されたときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の解約時に違約金の請求が届いた——。
          <strong>支払う前に、必ず「根拠の確認」と「計算式の検算」を行ってください。</strong>
          違約金条項が契約書に記載されていない、計算式が間違っている、解約原因が電力会社側にあるといったケースでは、
          全額または一部の免除・減額を求めることができます。このページでは妥当性確認から交渉手順まで整理しています。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">違約金請求を受けたときの7ステップ</h2>
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
        <h2 className="text-xl font-semibold text-slate-900">支払い前の確認チェックリスト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">以下の全項目を確認してから支払い判断を行ってください。</p>
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

      {/* 原因別の妥当性と対応 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">解約原因別の妥当性と対応策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">解約原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">違約金の妥当性</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">推奨対応</th>
              </tr>
            </thead>
            <tbody>
              {causeTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{c.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{c.validity}</td>
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
          以下に1つでも当てはまる場合は、自社だけでの対応ではリスクが高い状況です。
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家へのご相談</Link>
          をご活用ください。
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
          { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力契約の違約金・不当請求に関する相談窓口と監視データ" },
          { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "電力小売制度・契約条件に関する公式情報" },
          { name: "新電力ネット", url: "https://pps-net.org", description: "電力契約の解約・違約金に関する市場動向情報" },
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
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "値上げ通知への対応手順と交渉の進め方を解説します。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "契約見直しの進め方を初めての方にも分かりやすく解説。",
            },
            {
              href: "/emergency-auto-renewal-refusal",
              title: "自動更新契約の停止・拒否の進め方",
              description: "自動更新の期限管理と解約通告の手続きガイド。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたときの対応",
              description: "供給会社側から解除通知が届いたときの初動と切替先選定。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="違約金問題の解決に向けて"
          description="違約金の妥当性判断に迷う場合は、エネルギー専門家への無料相談をご利用ください。次の契約での違約金リスク低減もあわせてアドバイスします。"
          links={[
            { href: "/contact", label: "専門家に今すぐ相談する" },
            { href: "/", label: "シミュレーターで現状診断する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
