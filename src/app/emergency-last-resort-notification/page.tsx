import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle = "最終保障供給の通知が来たときの対応｜タイムラインとチェックリスト";
const pageDescription =
  "電力会社から最終保障供給への移行通知が届いたときの緊急対応を解説。移行前・移行後のタイムライン、切替先の探し方、コスト試算、チェックリストを法人担当者向けにまとめました。";
const pageUrl = "https://simulator.eic-jp.org/emergency-last-resort-notification";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 通知 対応",
    "最終保障供給 移行 手順",
    "最終保障供給 切替先 探し方",
    "最終保障供給 法人 対応",
    "最終保障供給 コスト 高い",
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
    title: "通知の内容確認（当日）",
    desc: "最終保障供給への移行日・適用料金・移行理由・移行元の電力会社の対応状況を通知書面で確認する。移行理由によって対応の方向性が変わる。",
  },
  {
    num: "02",
    title: "経営層・財務への速報（当日〜翌日）",
    desc: "最終保障供給の料金は通常より50〜100%程度高くなる場合があることを伝え、予算への影響を速報する。「いつまでに切替が必要か」の期限も伝える。",
  },
  {
    num: "03",
    title: "現在の使用量データの取得（翌日以内）",
    desc: "過去12〜24カ月の電力使用量（できれば30分コマ別データ）を電力会社または一般送配電事業者から取得する。切替先の見積もりに必須。",
  },
  {
    num: "04",
    title: "切替先の候補リストアップと相見積もり（3日以内）",
    desc: "最低3社に見積もりを依頼する。この段階では早急な対応が必要なため、エネルギーブローカーや一括比較サービスの活用も有効。",
  },
  {
    num: "05",
    title: "最終保障供給のコストと切替コストの比較（1週間以内）",
    desc: "最終保障供給の料金（一般送配電事業者から確認）と切替候補の料金を比較。切替に要する期間（通常30〜60日）と違約金の有無も確認。",
  },
  {
    num: "06",
    title: "切替先の決定・手続き開始（2週間以内）",
    desc: "最終保障供給期間（最大9カ月）を逆算し、余裕をもって切替手続きを開始する。切替完了まで最終保障供給のコストが継続することを念頭におく。",
  },
  {
    num: "07",
    title: "切替完了と再発防止策の整備（切替完了後）",
    desc: "新供給会社との契約完了を確認。今後の供給会社の経営状況モニタリング体制と、緊急時の代替先リストを整備する。",
  },
];

const timelineRows = [
  { timing: "当日", action: "通知内容確認・経営層への速報・使用量データ取得依頼", priority: "★★★" },
  { timing: "翌日以内", action: "使用量データ入手・切替先の相見積もり開始", priority: "★★★" },
  { timing: "3日以内", action: "最低3社への見積もり依頼完了", priority: "★★★" },
  { timing: "1週間以内", action: "コスト比較・切替先の第一候補を絞り込み", priority: "★★★" },
  { timing: "2週間以内", action: "切替先の最終決定・申込手続き開始", priority: "★★★" },
  { timing: "30〜60日後", action: "切替完了（新供給会社からの供給開始）", priority: "★★" },
  { timing: "最終保障供給終了前", action: "切替完了を確認。未完了の場合は経産省等に相談", priority: "★★★" },
];

const checklistItems = [
  { phase: "通知受領直後", items: ["通知書面を保管（電子・紙とも）", "移行日・適用料金・連絡先を書き出す", "現在の供給会社（または一般送配電）の窓口電話番号を確認"] },
  { phase: "1週間以内", items: ["過去12カ月の使用量データを取得", "切替候補3社以上に見積もり依頼", "最終保障供給の詳細料金表を入手"] },
  { phase: "2週間以内", items: ["見積もり比較表を作成", "切替先を決定・経営層の承認取得", "切替申込書類の提出"] },
  { phase: "切替完了時", items: ["新供給会社からの供給開始を確認", "最終保障供給の終了手続きを確認", "今後の供給会社モニタリング体制を整備"] },
];

const causeTable = [
  {
    cause: "新電力の事業撤退・廃業",
    detail: "契約先の新電力が事業を停止したケース。最終保障供給に自動移行。早急な切替先確保が最優先。",
    action: "切替先の確保を最優先。最終保障供給期間（最大9カ月）内に完了させる。",
  },
  {
    cause: "契約更新時の供給者未確定",
    detail: "契約満了後に新たな供給者が決まらず、一時的に最終保障供給に移行するケース。",
    action: "早急に入札・相見積もりを実施。条件を一時的に緩めても供給先を確保する。",
  },
  {
    cause: "燃調急騰による新電力の供給停止",
    detail: "市場価格連動コストが収益を超え、新電力が供給継続を断念したケース。",
    action: "固定料金型・燃調上限ありの供給会社を優先して選定。同様のリスクを避ける。",
  },
];

const ngItems = [
  { title: "「最大9カ月あるから大丈夫」と放置する", detail: "最終保障供給の料金は高額です。1カ月でも長く在籍するとコスト増加が直撃します。通知を受けた時点で即座に切替活動を開始してください。" },
  { title: "1社だけに見積もりを依頼する", detail: "緊急時でも相見積もりは必須です。1社のみでは市場相場が分からず、高い料金を承諾するリスクがあります。" },
  { title: "切替手続きを口頭だけで進める", detail: "申込書類・契約書は必ず書面（電子契約含む）で取り交わし、保管してください。口頭での合意は後日のトラブルの原因になります。" },
  { title: "最終保障供給の終了日を確認しないまま進める", detail: "切替完了が最終保障供給の終了日に間に合わない場合、一時的に電気が供給されないリスクがあります。余裕をもったスケジュール管理が不可欠です。" },
  { title: "移行前の電力会社への問い合わせを怠る", detail: "最終保障供給への移行前に、元の電力会社に連絡が取れる場合は状況確認を行ってください。場合によっては移行を回避できる可能性があります。" },
];

const reportFlow = [
  { who: "経営層（社長・役員）", when: "当日〜翌日", what: "最終保障供給移行の事実・コスト影響・切替スケジュールの概要" },
  { who: "財務・経理部門", when: "翌日以内", what: "最終保障供給期間中の追加コスト見込み・予算修正の必要性" },
  { who: "施設管理・総務部門", when: "翌日以内", what: "切替活動の開始・見積もり取得の進捗" },
  { who: "法務部門（必要時）", when: "随時", what: "元の電力会社との契約終了に関する法的問題の確認" },
];

const expertSigns = [
  "切替候補が見つからず、最終保障供給期間終了が迫っている場合",
  "複数拠点で最終保障供給に移行しており、一括最適化が必要な場合",
  "最終保障供給の料金が自社の想定を大きく超えており、即座の交渉が必要な場合",
  "元の電力会社が倒産しており、敷金・保証金の回収が問題になっている場合",
  "切替後の料金メニュー（燃調・市場価格調整）のリスク評価が難しい場合",
];

const faqs = [
  {
    q: "最終保障供給とはどういう制度ですか？",
    a: "最終保障供給とは、電力の供給者が決まらない場合に、一般送配電事業者が最終的に電力を供給する制度です。供給期間は最大9カ月で、通常の電力料金より割高になることが多く、早急な切替先確保が求められます。",
  },
  {
    q: "最終保障供給の料金はどのくらい高いですか？",
    a: "最終保障供給の料金は事業者や時期によって異なりますが、通常の市場料金と比較して20〜100%程度高くなるケースが報告されています。現在の最終保障供給料金は経済産業省のウェブサイトまたは一般送配電事業者の窓口で確認できます。",
  },
  {
    q: "最終保障供給期間中に電気は止まりますか？",
    a: "最終保障供給期間中（最大9カ月）は電力供給が継続されます。ただし期間内に切替が完了しない場合は、その後の供給が保証されません。期間終了前に必ず次の供給者との契約を完了させてください。",
  },
  {
    q: "切替完了まで何日かかりますか？",
    a: "高圧・特別高圧の場合、新規契約から供給開始まで通常30〜60日かかります。最終保障供給の通知を受けた時点で、即座に切替活動を開始することが重要です。",
  },
  {
    q: "元の電力会社が倒産した場合、敷金・保証金は戻りますか？",
    a: "電力会社の倒産事案では、敷金・保証金の返還に時間がかかる場合があります。債権者として破産手続きに参加することになる可能性があり、法的な対応が必要になることもあります。専門家への相談をお勧めします。",
  },
  {
    q: "最終保障供給中も節電活動は有効ですか？",
    a: "有効です。最終保障供給は使用量ベースの課金であるため、使用量を削減することでコストを抑えられます。ただし根本解決（切替先確保）を優先することが重要です。",
  },
  {
    q: "切替後も同じ問題が起きないようにするにはどうすればいいですか？",
    a: "次の供給者選定では①財務健全性②固定料金型or燃調上限あり③契約期間と中途解約条件を確認してください。また、契約満了の6カ月前から次期契約の検討を開始する社内ルールを設けることが効果的です。",
  },
];

export default function EmergencyLastResortNotificationPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">最終保障供給通知の対応</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給の通知が来たときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          最終保障供給の通知が届いたとき、多くの担当者が「まず何をすればいいのか」と戸惑います。
          最終保障供給期間は<strong>最大9カ月</strong>ですが、料金は通常より大幅に高くなります。
          この通知を受けた瞬間から切替活動の時計が動いています。このページでは
          通知受領当日からのタイムライン・チェックリスト・判断フローを整理しています。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給通知受領後の7ステップ</h2>
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

      {/* チェックリスト */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">フェーズ別チェックリスト</h2>
        <p className="mt-2 text-sm leading-7 text-slate-700">各フェーズで完了すべき項目を確認しながら進めてください。</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {checklistItems.map((phase, i) => (
            <div key={i} className="rounded-lg border border-sky-200 bg-white p-4">
              <p className="font-semibold text-sky-800">{phase.phase}</p>
              <ul className="mt-2 space-y-1">
                {phase.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 text-sky-500">□</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 移行原因別の対応 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">最終保障供給への移行原因と対応</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">移行原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">状況の特徴</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">推奨対応</th>
              </tr>
            </thead>
            <tbody>
              {causeTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{c.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{c.detail}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{c.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 判断フロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">切替先選定の判断フロー</h2>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q1: 最終保障供給の終了まで3カ月以上あるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 相見積もりを取り、最適な切替先をじっくり選定できる。ただし今すぐ開始する。
              </div>
              <div className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-rose-700">NO →</span> 今すぐ専門家に連絡。エネルギーブローカー活用で早急に候補を絞り込む。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q2: 過去12カ月の電力使用量データはすでに手元にあるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> すぐに相見積もりを開始できる。並行して最終保障供給のコストを確認。
              </div>
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">NO →</span> 一般送配電事業者または元の電力会社に使用量データを即日請求する。
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
          以下に1つでも当てはまる場合は、早急に
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家へご相談</Link>
          ください。最終保障供給の長期在籍はコストリスクが非常に高いです。
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
              href: "/last-resort-supply-emergency-response",
              title: "最終保障供給に入りそうなときの対応手順",
              description: "移行前の早期発見・切替準備の進め方を解説します。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "電力会社の比較方法",
              description: "切替先選定のための比較軸と相見積もりの取り方。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "新電力から契約解除通知が届いたときの対応",
              description: "供給会社側から解除通知が届いたときの対処法。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しはどこから始めるか",
              description: "契約見直しの進め方を初めての方でも分かるよう解説。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="切替先を早急に探す"
          description="最終保障供給の期間内に切替先を確保するためのシミュレーションと専門家への相談を今すぐ始めましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/contact", label: "専門家に今すぐ相談する" },
          ]}
        />
      </div>
    </main>
  );
}
