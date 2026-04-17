import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "新電力から契約解除通知が届いたときの対応｜初動と切替先選定";
const pageDescription =
  "新電力会社から契約解除・供給停止の通知が届いたときの緊急対応ガイド。初動チェックリスト・切替先の探し方・最終保障供給への移行手続き・時間軸テーブルを法人向けに解説します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-supplier-withdrawal";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "新電力 契約解除 通知 対応",
    "新電力 供給停止 対処",
    "新電力 撤退 法人 対応",
    "電力 契約解除 切替先",
    "新電力 廃業 次の手",
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
    title: "通知書面の内容確認（当日）",
    desc: "契約解除日・供給停止日・解除理由・連絡窓口を確認する。供給停止日が明記されている場合、その日から逆算してスケジュールを組む。",
  },
  {
    num: "02",
    title: "一般送配電事業者への連絡（翌日以内）",
    desc: "供給停止が差し迫っている場合、最終保障供給への自動移行が可能かどうかを地域の一般送配電事業者（東京電力パワーグリッドなど）に確認する。",
  },
  {
    num: "03",
    title: "経営層・財務への速報（翌日以内）",
    desc: "供給停止リスク・最終保障供給移行時のコスト影響・切替スケジュールの概要を速報する。意思決定を早期に仰ぐことで行動スピードが上がる。",
  },
  {
    num: "04",
    title: "電力使用量データの取得（翌日以内）",
    desc: "過去12〜24カ月の使用量データ（30分コマ別が望ましい）を新電力または一般送配電事業者から即日取得依頼する。切替見積もりに必須。",
  },
  {
    num: "05",
    title: "切替候補の相見積もり開始（3日以内）",
    desc: "最低3社に並行して見積もりを依頼する。緊急時はエネルギーブローカーや一括比較サービスの活用が有効。条件は若干緩めてでも供給確保を優先する。",
  },
  {
    num: "06",
    title: "切替先の決定・手続き開始（1週間以内）",
    desc: "供給停止日から逆算し、切替完了に必要な期間（通常30〜60日）を確保できる候補を優先する。完了が間に合わない場合は最終保障供給を一時利用する計画も同時進行させる。",
  },
  {
    num: "07",
    title: "新電力への違約金・未払い請求の確認（2週間以内）",
    desc: "契約解除に伴う違約金・精算金の請求が来る可能性がある。契約書の解除条件を確認し、不当な請求については法律的な観点から対応を検討する。",
  },
];

const timelineRows = [
  { timing: "当日", action: "通知内容確認・供給停止日の把握・スケジュール逆算", priority: "★★★" },
  { timing: "翌日以内", action: "一般送配電事業者へ連絡・使用量データ取得依頼・経営層速報", priority: "★★★" },
  { timing: "3日以内", action: "最低3社への見積もり依頼完了", priority: "★★★" },
  { timing: "1週間以内", action: "切替先の決定・申込手続き開始", priority: "★★★" },
  { timing: "2週間以内", action: "新電力との精算・違約金確認・書面での確認完了", priority: "★★" },
  { timing: "30〜60日後", action: "新供給会社からの供給開始・切替完了の確認", priority: "★★★" },
];

const causeTable = [
  {
    cause: "新電力の事業撤退・廃業",
    situation: "会社ごと事業を停止するケース。複数の顧客が同時に影響を受ける。",
    action: "最終保障供給への自動移行を確認しつつ、即座に切替先を探す。敷金・保証金の回収も並行して対応。",
  },
  {
    cause: "燃料費高騰による供給コスト超過",
    situation: "市場価格が契約料金を超え、供給を継続できなくなるケース。",
    action: "次の契約では燃調上限ありの固定料金メニューを優先。同じリスクを繰り返さない契約条件を確認。",
  },
  {
    cause: "特定エリア・電圧区分からの撤退",
    situation: "一部の地域や電圧区分（高圧など）から選択的に撤退するケース。",
    action: "同エリア・同電圧区分で供給実績のある電力会社を優先的に選定。",
  },
  {
    cause: "新電力の経営悪化・信用不安",
    situation: "倒産前の段階で契約を終了させるケース。前兆として料金の支払い遅延などがある場合も。",
    action: "財務健全性の高い電力会社（大手電力・財務情報公開の新電力）へ切替を検討。",
  },
];

const ngItems = [
  { title: "通知を無視・後回しにする", detail: "供給停止日は待ってくれません。通知を受け取った当日に対応を開始しないと、最悪の場合は電力供給が途絶えるリスクがあります。" },
  { title: "新電力の言いなりで違約金を即支払う", detail: "契約解除の責任が新電力側にある場合、違約金の支払いは不要なことがあります。契約書を確認し、必要に応じて法的助言を求めてください。" },
  { title: "1社だけ打診して決定する", detail: "緊急時でも相見積もりは必須です。「緊急だから仕方ない」と高い料金を受け入れると、その後も高コストが継続します。" },
  { title: "最終保障供給をゴールにする", detail: "最終保障供給は最長9カ月の緊急避難的な制度です。ここに長期在籍することはコストが非常に高くなります。あくまでも次の供給先が決まるまでの一時的措置として扱ってください。" },
  { title: "口頭だけで電力会社に問い合わせる", detail: "すべての問い合わせ・合意はメールまたは書面で行い、記録を保管してください。口頭でのやり取りは後日トラブルの原因になります。" },
];

const reportFlow = [
  { who: "経営層（社長・役員）", when: "当日〜翌日", what: "解除通知の事実・供給停止日・コスト影響・対応方針案" },
  { who: "財務・経理部門", when: "翌日以内", what: "最終保障供給移行時の追加コスト・切替完了までの期間とコスト見込み" },
  { who: "施設管理・総務部門", when: "翌日以内", what: "切替活動の開始・見積もり取得の進捗・電力供給の継続性確認" },
  { who: "法務部門", when: "1週間以内", what: "解除通知の法的妥当性・違約金・精算金の確認" },
];

const expertSigns = [
  "供給停止日まで30日以内に迫っており、切替先が確保できていない場合",
  "新電力が事実上倒産状態で、敷金・保証金の回収が問題になっている場合",
  "解除通知の内容が不当で、法的な異議申立を検討している場合",
  "複数拠点が同時に影響を受けており、一括対応が必要な場合",
  "切替後の料金条件（燃調・市場連動）の評価が自社だけでは困難な場合",
];

const faqs = [
  {
    q: "新電力が廃業した場合、電気はすぐに止まりますか？",
    a: "新電力が廃業しても電力供給は即座には止まりません。地域の一般送配電事業者による最終保障供給に自動的に移行し、最大9カ月間は電力の供給が継続されます。ただし料金は大幅に上昇します。",
  },
  {
    q: "最終保障供給に移行したら何をすればいいですか？",
    a: "最終保障供給は緊急避難的な制度です。移行後は即座に切替先の選定を開始し、通常30〜60日かかる切替手続きを進めてください。期間内（最大9カ月）に完了しないと供給の保証がなくなります。",
  },
  {
    q: "新電力が一方的に契約解除した場合、違約金は誰が払いますか？",
    a: "原則として、一方的な解除を行った側（新電力）が損害賠償責任を負います。ただし契約書の内容によって異なります。解除通知を受け取ったら、契約書を確認し、必要に応じて法律の専門家に相談してください。",
  },
  {
    q: "緊急で切替先を探す効率的な方法はありますか？",
    a: "エネルギーブローカーまたは一括比較・マッチングサービスを利用すると、複数社への同時打診が可能です。また経済産業省が公表している電力小売事業者リストから、自社の電圧区分に対応した事業者を確認することも有効です。",
  },
  {
    q: "切替手続きに必要な書類は何ですか？",
    a: "主に必要なものは①現在の供給設備情報（電力需給地点特定番号=供給地点番号）②過去の使用量データ③法人登記情報です。供給地点番号は現在の請求書または一般送配電事業者に確認できます。",
  },
  {
    q: "緊急時でも相見積もりは必要ですか？",
    a: "必要です。「緊急だから」と1社だけで決めると、市場相場より高い料金を承諾してしまうリスクがあります。時間が限られていても最低3社に並行して打診し、比較することが重要です。",
  },
  {
    q: "同じ問題が起きないようにするには？",
    a: "次の契約では①供給会社の財務健全性②固定料金型か市場連動型かの確認③中途解約条件と違約金④複数年契約の安定性を確認してください。また定期的に供給会社の経営状況をモニタリングする体制を整えることも重要です。",
  },
];

export default function EmergencySupplierWithdrawalPage() {
  return (
    <>
      <ArticleJsonLd
        headline="新電力から契約解除通知が届いたときの対応｜初動と切替先選定"
        description="新電力会社から契約解除・供給停止の通知が届いたときの緊急対応ガイド。初動チェックリスト・切替先の探し方・最終保障供給への移行手続き・時間軸テーブルを法人向けに解説します。"
        url="https://simulator.eic-jp.org/emergency-supplier-withdrawal"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "新電力から契約解除通知が届いたときの対応" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約解除通知の対応</span>
      </nav>
      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border-2 border-rose-300 bg-rose-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-rose-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          新電力から契約解除通知が届いたときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          新電力会社から「契約を解除する」「供給を停止する」という通知が届いた瞬間、
          <strong>電力供給が途絶えるカウントダウン</strong>が始まります。
          最終保障供給への自動移行があるため即座に停電になることはありませんが、
          料金は大幅に上昇します。このページでは通知受領当日から切替完了までの
          初動・手続き・切替先選定を時間軸で整理しています。
        </p>
      </header>

      {/* STEP タイムライン */}
      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">契約解除通知受領後の7ステップ</h2>
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

      {/* 判断フロー */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">初動の判断フロー</h2>
        <div className="mt-5 space-y-3">
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q1: 供給停止日まで30日以上あるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 相見積もりを開始しつつ、最終保障供給の確認を並行して進める。
              </div>
              <div className="rounded border border-rose-200 bg-rose-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-rose-700">NO →</span> 今すぐ一般送配電事業者に連絡し最終保障供給を確認。専門家にも即日相談。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q2: 新電力が事実上倒産・廃業状態か？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-amber-200 bg-amber-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-amber-700">YES →</span> 敷金・保証金の回収のため債権者登録の準備。法務部門または弁護士に相談。
              </div>
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">NO →</span> 解除条件の契約書確認・違約金の法的妥当性を確認してから精算交渉へ。
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="font-semibold text-sky-800">Q3: 解除の責任は新電力側にあるか？</p>
            <div className="mt-2 grid gap-2 md:grid-cols-2">
              <div className="rounded border border-sky-200 bg-white p-3 text-sm text-slate-700">
                <span className="font-bold text-sky-700">YES →</span> 損害賠償請求の可能性あり。新電力への請求と切替コストの記録を保管。
              </div>
              <div className="rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                <span className="font-bold text-slate-700">判断難 →</span> 契約書を法務または弁護士に確認依頼。判断前に違約金を支払わない。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 原因別対応テーブル */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">解除原因別の対応策</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">解除原因</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">状況の特徴</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">対応策</th>
              </tr>
            </thead>
            <tbody>
              {causeTable.map((c, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{c.cause}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-600">{c.situation}</td>
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
          以下に該当する場合は、自社だけでの対応は困難です。
          <Link href="/contact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">専門家への無料相談</Link>
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

      {/* 関連リンク */}
      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/emergency-last-resort-notification",
              title: "最終保障供給の通知が来たときの対応",
              description: "最終保障供給への移行通知を受けたときのタイムラインとチェックリスト。",
            },
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
              href: "/emergency-cancellation-fee",
              title: "電力契約の違約金を請求されたときの対応",
              description: "違約金の妥当性確認と交渉手順を解説します。",
            },
            {
              href: "/executive-business-continuity-risk",
              title: "電気代高騰と事業継続リスク",
              description: "新電力撤退リスクをBCPと財務リスク管理の観点から整理します。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="切替先を今すぐ探す"
          description="新電力からの解除通知に対応するため、シミュレーターで現状を把握し、専門家に相談して切替先を素早く確保しましょう。"
          links={[
            { href: "/", label: "シミュレーターで現状診断する" },
            { href: "/contact", label: "専門家に今すぐ相談する" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
