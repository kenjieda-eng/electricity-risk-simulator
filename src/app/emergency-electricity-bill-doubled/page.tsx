import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "電気代が急に2倍になったときの対応手順｜原因切り分けと緊急対応";
const pageDescription =
  "電気代が急に2倍・3倍に跳ね上がった場合の原因切り分けと緊急対応手順を解説。請求書の読み方から電力会社への問い合わせ、設備側の確認まで、法人担当者向けに整理しました。";
const pageUrl = "https://simulator.eic-jp.org/emergency-electricity-bill-doubled";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気代 急に2倍 原因",
    "電気料金 跳ね上がった 対応",
    "法人 電気代 急増 原因切り分け",
    "電力 請求 急増 対処",
    "電気料金 異常 確認",
  ],
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

const steps = [
  {
    num: "01",
    title: "請求書の各内訳を前月・前年同月と比較（当日）",
    desc: "請求書の基本料金・電力量料金・燃料費調整額・再エネ賦課金・市場価格調整額を個別に前月・前年同月と比較する。どの項目が増加しているかを特定することが原因特定の第一歩。",
  },
  {
    num: "02",
    title: "使用量データの確認（当日〜翌日）",
    desc: "電力使用量（kWh）が増えているかどうかを確認する。量が変わらずに金額だけが増えていれば単価上昇が原因。量も増えていれば設備・運用起因の可能性。",
  },
  {
    num: "03",
    title: "設備・運用変更の有無を確認（翌日以内）",
    desc: "該当月に新設備の導入・営業時間延長・生産量増加・空調設定変更などがなかったかを各部署に確認する。心当たりがあれば設備起因と判断できる。",
  },
  {
    num: "04",
    title: "電力会社への問い合わせ（3日以内）",
    desc: "請求書に疑問がある場合は電力会社のお客様窓口に連絡し、計量値・燃調係数・市場価格調整額の根拠を書面で確認する。電話ではなくメールで記録を残す。",
  },
  {
    num: "05",
    title: "メーター・計量異常の確認を依頼（1週間以内）",
    desc: "使用量に心当たりがなく電力会社の説明でも解消しない場合、計量器の検定・確認を依頼する。計量法に基づく再計量を求めることも可能。",
  },
  {
    num: "06",
    title: "設備側の電気漏れ・不具合調査（1週間以内）",
    desc: "漏電・モーター故障・空調の異常稼働などは電気代急増の典型的な原因。電気設備の保守業者に点検を依頼する。",
  },
  {
    num: "07",
    title: "原因確定後の対応・再発防止策（2〜4週間以内）",
    desc: "原因が特定できたら対応策を実施し、再発防止の仕組みを整備する。請求誤りであれば電力会社に修正を要求し、設備起因であれば保守・更新計画を策定。",
  },
];

const timelineRows = [
  { timing: "当日", action: "請求書内訳の前月・前年比較・使用量確認", priority: "★★★" },
  { timing: "翌日以内", action: "設備・運用変更の有無を各部署に確認", priority: "★★★" },
  { timing: "3日以内", action: "電力会社へ書面（メール）で問い合わせ", priority: "★★★" },
  { timing: "1週間以内", action: "計量器確認依頼・電気設備点検発注", priority: "★★" },
  { timing: "2週間以内", action: "原因特定・根本対応策の実施開始", priority: "★★" },
  { timing: "翌請求月", action: "対応効果の確認・再発防止策の定着確認", priority: "★" },
];

const causeTable = [
  {
    cause: "燃料費調整額の急騰（上限撤廃）",
    symptom: "使用量は変わらず金額が増加。燃調額の欄が大きく増えている。",
    action: "燃調上限設定のある契約への切替を検討。現供給会社に交渉。",
  },
  {
    cause: "市場価格調整額の新設・急増",
    symptom: "請求書に「市場価格調整額」が新たに登場または大幅増加。",
    action: "固定料金メニューまたは燃調上限ありメニューへの切替を比較検討。",
  },
  {
    cause: "設備の追加・営業時間延長",
    symptom: "使用量（kWh）が前月比30%以上増加している。",
    action: "使用量増加は正当な請求のため、節電対策・省エネ投資を検討。",
  },
  {
    cause: "漏電・設備故障による無駄な電力消費",
    symptom: "使用量が急増しているが、心当たりのある変更がない。",
    action: "即座に電気設備保守業者に点検を依頼。漏電ブレーカーを確認。",
  },
  {
    cause: "計量器・検針の誤り",
    symptom: "前月比で使用量が2倍以上になっているが設備変更なし。",
    action: "電力会社に再計量を依頼。計量法に基づく検定申請も可能。",
  },
  {
    cause: "料金メニューの自動変更",
    symptom: "単価が変わっており、契約変更の記憶がない。",
    action: "電力会社に適用メニューと変更理由を確認。旧メニューへの戻しを交渉。",
  },
];

const ngItems = [
  { title: "請求書をそのまま支払って終わりにする", detail: "急増した電気代を「仕方ない」と支払ってしまうと、原因が解消されないまま翌月以降も高額請求が続きます。必ず原因を特定してください。" },
  { title: "電力会社への問い合わせを電話だけで済ませる", detail: "電話での口頭確認は記録が残りません。問い合わせ・回答はメールまたは書面で行い、内容を必ず保管してください。" },
  { title: "「燃料が高いから仕方ない」と即断する", detail: "燃調急騰だけが原因とは限りません。計量誤りや漏電など、対応可能な原因が隠れている場合もあります。必ず内訳を項目別に確認してください。" },
  { title: "設備点検を後回しにする", detail: "漏電や機器故障による電気代急増は、火災リスクとも直結します。電気代の問題だけでなく、安全上の観点から早急な点検が必要です。" },
  { title: "1カ月だけ高かったからと次月まで様子を見る", detail: "原因不明のまま放置すると翌月も同様の請求が来ます。1回の急増でも当月中に原因特定を開始してください。" },
];

const reportFlow = [
  { who: "施設管理・総務部門長", when: "当日", what: "請求額・前月比・使用量の変化・疑わしい原因の仮説" },
  { who: "財務・経理部門", when: "翌日以内", what: "追加コストの規模・支払予定・調査中である旨" },
  { who: "経営層", when: "1週間以内", what: "原因特定結果・対応策・再発防止計画" },
  { who: "各部署（設備管理）", when: "翌日以内", what: "該当月の設備変更・運用変更の有無の確認依頼" },
];

const expertSigns = [
  "電力会社に問い合わせても説明が不十分で、原因が解消しない場合",
  "計量器の誤りの可能性があるが、再計量の手続きが分からない場合",
  "複数拠点で同時に電気代が急増している場合",
  "漏電・設備故障が疑われるが、点検業者の選定方法が分からない場合",
  "急増が複合原因（燃調＋設備＋計量）の可能性があり、切り分けが難しい場合",
];

const faqs = [
  {
    q: "燃料費調整額とはどういう仕組みですか？急増する理由は？",
    a: "燃料費調整額は、火力発電に使う燃料（LNG・石炭など）の価格変動を電気料金に自動的に反映させる仕組みです。燃料の国際価格や為替の影響を毎月受けるため、急騰することがあります。上限設定のない契約ではこの影響が青天井になります。",
  },
  {
    q: "電力会社の計量ミスはよくあることですか？",
    a: "頻繁ではありませんが、計量器の故障や検針ミスは実際に発生します。使用量に心当たりがなく電力会社の説明も納得できない場合は、計量法に基づく再計量を申請する権利があります。",
  },
  {
    q: "漏電しているかどうか、自社で確認する方法はありますか？",
    a: "分電盤の漏電ブレーカーが作動していないか確認する、夜間・休日の無人時間帯に電力メーターが動いていないかを確認するといった方法があります。ただし確実な判断には電気設備の保守業者への点検依頼が必要です。",
  },
  {
    q: "電力会社に請求誤りを指摘した場合、過去分の返金はされますか？",
    a: "計量誤りが確認された場合は過去分の修正・返金が行われます。ただし遡及期間は電力会社や契約により異なります。早めに指摘・申請することで返金対象期間を最大化できます。",
  },
  {
    q: "急増した電気代を一時的に待ってもらうことはできますか？",
    a: "調査中を理由とした支払い猶予は通常認められませんが、調査中である旨を電力会社に連絡し、確認後に対応する旨を伝えることは可能です。ただし支払い遅延は供給停止リスクがあるため、まず支払いを行い、後で誤りを指摘する方法を取ることが一般的です。",
  },
  {
    q: "省エネ対策でどのくらい削減できますか？",
    a: "設備や運用によって異なりますが、照明のLED化で10〜30%、空調の温度設定最適化で5〜15%、設備のインバーター化で20〜50%の削減事例があります。専門家による省エネ診断を受けると具体的な数値が出ます。",
  },
  {
    q: "市場価格調整額はどの電力会社の請求にも含まれますか？",
    a: "すべての電力会社・すべての料金メニューに含まれているわけではありません。特に市場連動型の新電力や、一部の料金プランに含まれている場合があります。現在の契約書・料金メニュー説明書で確認してください。",
  },
  {
    q: "他の電力会社に切り替えれば、こういった急増は防げますか？",
    a: "燃調上限ありの固定料金メニューを選択することで、燃料価格連動リスクを抑えることが可能です。ただし切替後にも設備起因・計量ミスによる急増リスクはゼロではないため、月次でのモニタリング体制が重要です。",
  },
];

export default function EmergencyElectricityBillDoubledPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">電気代急騰の対応手順</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電気代が急に2倍になったときの対応手順
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          請求書を開いたら先月の2倍——。まず落ち着いて、<strong>「使用量が増えたのか」「単価が上がったのか」</strong>を確認することが最初の一手です。
          原因によって対応先が異なります。このページでは原因の切り分けから、電力会社への問い合わせ・設備点検・再発防止まで、法人担当者向けに7ステップで整理しています。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">電気代急増時の対応7ステップ</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">
          ステップ1〜3で「原因の切り分け」、ステップ4〜6で「原因別の調査・対応」、ステップ7で「根本解決・再発防止」を行います。
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

      {/* 原因切り分けフロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原因切り分けフロー</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">以下の質問に答えることで、原因を絞り込めます。</p>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q1: 電力使用量（kWh）は前月・前年同月より増えているか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">YES（量が増えている）→</span> 設備追加・運用変更・漏電・計量誤りを確認。STEP 3へ。
              </div>
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">NO（量は変わらない）→</span> 単価が上昇している。燃調・市場価格調整額の変動を確認。STEP 4へ。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q2: 該当月に設備の追加・営業時間延長・生産量増加はあったか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 使用量増加は正当な可能性が高い。節電対策・省エネ投資を検討。
              </div>
              <div className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-rose-700">NO →</span> 漏電・設備故障・計量誤りの可能性。即座に点検・問い合わせへ。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q3: 請求書に「市場価格調整額」や「燃料費調整額」の大幅増加はあるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">YES →</span> 単価上昇が原因。上限設定ありの他社メニューへの切替を検討。
              </div>
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">NO →</span> 別の原因の可能性。電力会社に内訳の詳細説明を書面で要求。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 原因別対応テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">原因別の対応策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">考えられる原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">症状の特徴</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">対応策</th>
              </tr>
            </thead>
            <tbody>
              {causeTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{c.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{c.symptom}</td>
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

      {/* 社内報告の進め方 */}
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
          以下に当てはまる場合は、自社だけでの対応に限界がある可能性があります。
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家への無料相談</Link>をご活用ください。
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

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-read-electricity-bill",
              title: "請求書の読み方",
              description: "電気料金請求書の各項目を法人担当者向けに解説。燃調・市場価格調整額の確認ポイント。",
            },
            {
              href: "/fuel-cost-adjustment-upper-limit",
              title: "燃調費の上限設定",
              description: "燃料費調整額の上限有無がコストリスクに与える影響を解説します。",
            },
            {
              href: "/market-price-adjustment-risk",
              title: "市場価格調整額のリスク",
              description: "市場連動コストが電気代に与える影響とリスク管理の方法。",
            },
            {
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "通知受領から対応完了までのステップと時間軸を整理しました。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="今すぐ現状を把握する"
          description="電気代急増の原因が分かったら、シミュレーターで今後のコスト影響を試算しましょう。対応方針の判断に迷う場合は専門家への無料相談もご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/contact", label: "専門家に無料相談する" },
          ]}
        />
      </div>
    </main>
  );
}
