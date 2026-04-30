import type { Metadata } from "next";
import Link from "next/link";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqPageJsonLd,
  HowToJsonLd,
} from "../../components/seo/JsonLd";

const pageTitle = "電気代の二重請求・二重契約とは｜原因と対処法・予防策の完全FAQ";
const pageDescription =
  "電気代の二重請求・二重契約・二重支払いが発生する5つの典型パターンと対処法、予防策を中立社団がFAQ形式で完全解説。電力会社切替時のトラブル予防に。";
const pageUrl = "https://simulator.eic-jp.org/electricity-double-billing-faq";
const publishedAt = "2026-04-30";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気 二重請求",
    "電気 二重契約",
    "電気 二重支払い",
    "電気 二重 払い",
    "電気代 二重請求 対処法",
    "電力会社 切替 トラブル 予防",
    "供給地点特定番号 重複契約 確認",
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

const breadcrumbItems = [
  { name: "ホーム", url: "https://simulator.eic-jp.org/" },
  { name: "見直しポイントを知る", url: "https://simulator.eic-jp.org/articles/review-points" },
  { name: "電気代の二重請求・二重契約FAQ" },
];

const patterns = [
  {
    no: "①",
    title: "電力会社切替時の検針日ズレ（最頻出）",
    desc: "新電力への切替で、旧電力会社の検針日と新電力の供給開始日が完全に一致せず、同一日が両社に計上される。法人の高圧契約でも切替月の請求書が二重に届く事例が最も多い。",
  },
  {
    no: "②",
    title: "名義変更時の旧契約者との重複",
    desc: "事業承継・店舗譲渡・本社移転で名義を変更したのに、旧契約者の口座引落が止まらない。引継書類が片方の電力会社にしか届いていないケース。",
  },
  {
    no: "③",
    title: "誤検針・電力会社のシステムエラー",
    desc: "スマートメーターのデータ送信不良、検針員の入力ミス、料金計算システムの不具合などにより、同一期間の請求が2通発行される。",
  },
  {
    no: "④",
    title: "仲介業者を介した詐欺・架空契約",
    desc: "「電力会社の代理」と名乗る仲介業者と契約したが、実際には別の小売電気事業者と契約させられ、現契約者と二社から請求が来る悪質ケース。",
  },
  {
    no: "⑤",
    title: "同一供給地点に契約が2本ある（旧契約解約漏れ）",
    desc: "新電力に切り替えたつもりが旧契約の解約手続きが完了しておらず、同じ供給地点特定番号に対して契約が並走している状態。",
  },
];

const responseSteps = [
  {
    pattern: "①検針日ズレ",
    confirm: "新旧両社の請求書の対象期間（自○月○日〜至○月○日）と切替完了通知書の供給開始日を突き合わせる。",
    contact: "まず両社のカスタマーセンターに同時連絡。解決しなければ電力・ガス取引監視等委員会（ECOM）。",
    docs: "切替完了通知書、両社の請求書、検針票。",
    period: "通常2〜4週間。日割り再計算で次月相殺になることが多い。",
  },
  {
    pattern: "②名義重複",
    confirm: "新旧契約者の名義・契約番号・請求宛先を請求書で照合。",
    contact: "電力会社のカスタマーセンター（書面で名義変更受付日の証明を要求）。",
    docs: "名義変更届、登記簿謄本、譲渡契約書、解約完了通知書。",
    period: "1〜2か月。旧契約者への返金処理を伴うため時間を要する。",
  },
  {
    pattern: "③誤検針・システムエラー",
    confirm: "スマートメーター実測値（電力会社Webポータル）と請求書記載の使用量を kWh 単位で突合。",
    contact: "電力会社のカスタマーセンター。改善されなければ ECOM。",
    docs: "請求書、スマートメーターデータのスクリーンショット、過去12か月の使用量推移。",
    period: "2〜3週間。再検針が必要な場合は1か月。",
  },
  {
    pattern: "④仲介業者詐欺",
    confirm: "請求元の電気事業者コード（経産省登録番号）と契約書記載の事業者名を照合。電気事業者リストに無い業者からの請求は要警戒。",
    contact: "消費生活センター（局番なし188）と警察相談（#9110）。法人なら法律相談（弁護士会・法テラス）も併用。",
    docs: "営業時の説明資料、契約書、請求書、業者名刺、通話録音。",
    period: "1〜6か月（法的手続きが入る場合は更に長期化）。",
  },
  {
    pattern: "⑤旧契約解約漏れ",
    confirm: "供給地点特定番号（請求書末尾の22桁）で同一地点の契約数を旧電力会社に照会。",
    contact: "旧電力会社（解約処理担当）。完了通知書を必ず書面で取得。",
    docs: "切替申込書控、新契約の供給開始通知書、過去の解約申出書。",
    period: "3〜6週間。遡及解約と返金処理を含めて1〜2か月かかる場合あり。",
  },
];

const preventionChecklist = [
  {
    title: "旧契約の解約日と新契約の開始日のズレ確認",
    desc: "切替申込時に「旧契約の解約日」と「新契約の供給開始日」が同じ日になっているか、両社からの書面で確認する。1日でもズレると当該日の請求が両社から来るリスクがある。",
  },
  {
    title: "名義変更時の引継書類を双方に提出",
    desc: "名義変更は「現契約者の解約申出」と「新契約者の名義変更届」が両方そろって完了する。片方しか提出していないと旧契約者に請求が続く。",
  },
  {
    title: "検針日と請求月の整合確認",
    desc: "検針票の検針日（〇月〇日）と請求書の対象期間が連続して空白なくつながっているか、3か月分並べて確認する。",
  },
  {
    title: "仲介業者の電気事業者コード確認",
    desc: "経済産業省「登録小売電気事業者一覧」に名前があるかを契約前に必ず確認する。代理店契約の場合は「実際の供給事業者名」も契約書で明示してもらう。",
  },
  {
    title: "供給地点特定番号で同一地点の契約数確認",
    desc: "請求書末尾の22桁の供給地点特定番号で、その地点に契約が何本ぶら下がっているかを切替後1か月以内に旧電力会社に照会する。1地点1契約が原則。",
  },
];

const initialResponse = [
  {
    name: "請求書を時系列で整理（直近6ヶ月分）",
    text: "新旧両社の請求書を月単位で時系列に並べ、対象期間・使用量・請求額をスプレッドシートに転記する。重複期間が一目で分かる状態に整理する。",
  },
  {
    name: "検針日と契約日のズレを確認",
    text: "切替完了通知書の供給開始日と、新旧両社の検針日を突き合わせる。1日でも重なる期間があれば二重請求の可能性が高い。",
  },
  {
    name: "電力会社へ問い合わせ（電話＋書面）",
    text: "両社のカスタマーセンターに連絡し、問い合わせ番号を取得。電話だけでなくメールまたはWebフォームでも同じ内容を送信し、必ず書面で記録を残す。",
  },
  {
    name: "返金交渉",
    text: "正しいと考える金額・差額・返金方法（次月相殺／振込）を具体的に提示する。回答期限（例：2週間以内）を明示する。",
  },
  {
    name: "必要なら経産省（ECOM）に申告",
    text: "電力会社の対応が不十分なときは電力・ガス取引監視等委員会に相談（電話03-3501-5725、Webフォーム）。第三者機関による仲介・あっせん制度を利用できる。",
  },
];

const faqs = [
  {
    question: "電力会社を切り替えたら2社から請求が来た。どうすればいい？",
    answer:
      "まず両社の請求書の対象期間と切替完了通知書の供給開始日を突き合わせ、重複している日数を特定してください。そのうえで両社のカスタマーセンターに同時連絡し、日割り再計算と返金（または次月相殺）を依頼します。多くは検針日ズレが原因で、2〜4週間で解決します。",
  },
  {
    question: "電気の二重契約はどうやって解消する？",
    answer:
      "請求書末尾の22桁の供給地点特定番号で同一地点に契約が何本あるかを旧電力会社に照会します。重複が判明したら不要な契約の解約申出書を提出し、解約完了通知書を必ず書面で取得します。遡及解約と返金処理を含めて1〜2か月かかる場合があります。",
  },
  {
    question: "スマートメーター誤検針の場合、過去分も返金される？",
    answer:
      "誤検針の事実が確認されれば過去分も返金されます。電力会社Webポータルのスマートメーター実測値と請求書の使用量を kWh 単位で突合し、差異を提示してください。電気料金債権の時効は2〜5年（民法改正の適用で異なる）あるため、できるだけ早期に申し出るのが望ましいです。",
  },
  {
    question: "仲介業者経由で契約したら知らない会社からも請求が来た。",
    answer:
      "悪質な代理店契約・架空契約の可能性があります。請求元の電気事業者コードと、経産省「登録小売電気事業者一覧」を照合してください。リストに無い業者の場合はすぐ消費生活センター（局番なし188）と警察相談（#9110）に通報し、支払いを停止してください。",
  },
  {
    question: "名義変更後、旧契約者にも請求が行ってしまった。",
    answer:
      "名義変更届と現契約者の解約申出が両方そろって初めて完了するため、片方が未提出の場合に発生します。名義変更受付日の書面証明を電力会社から取得し、旧契約者への請求を取り消し、引落済の金額は返金処理を依頼してください。1〜2か月かかります。",
  },
  {
    question: "引っ越し時の二重請求を防ぐには？",
    answer:
      "引越元の解約日と引越先の供給開始日を1日もズレなく設定してください。両方の電力会社（または同一会社の場合も）に書面で完了通知を出してもらい、最初の1か月の請求書で対象期間が連続していることを確認します。",
  },
  {
    question: "供給地点特定番号で同一地点の契約数を確認する方法は？",
    answer:
      "請求書末尾の22桁の供給地点特定番号を控え、その地点に契約が何本あるかを送配電事業者（東京電力パワーグリッド等）または現在の小売電気事業者に照会してください。送配電事業者は地点単位で契約を管理しているため、重複の有無を確認できます。",
  },
  {
    question: "過剰請求の時効は何年？",
    answer:
      "電気料金債権の消滅時効は原則2年ですが、民法改正（2020年4月1日施行）以降の請求は5年が適用される場合があります。契約条件・発生時期で異なるため、過去分の返金を求めるときは契約書と請求発生日を確認のうえ、早めに弁護士または法テラスに相談してください。",
  },
  {
    question: "電力会社が認めてくれない場合の対応は？",
    answer:
      "回答に納得できない場合は、根拠を示した書面で再回答を要求します。それでも進まない場合は電力・ガス取引監視等委員会（ECOM、電話03-3501-5725）に相談してください。費用無料で仲介・あっせん制度を利用できます。法的手続きが必要な場合は弁護士会・法テラスへ。",
  },
  {
    question: "法人と個人で対応窓口は変わる？",
    answer:
      "電力会社のカスタマーセンターと ECOM は法人・個人共通です。ただし消費生活センター（188）は個人向け、法人は弁護士会・法テラス（ただし要件あり）または顧問弁護士を活用するケースが多いです。本記事の窓口は法人を主対象に整理しています。",
  },
];

const relatedLinks = [
  {
    href: "/emergency-billing-dispute",
    title: "電気料金の二重請求・過請求が発生したときの対応",
    description: "緊急時の対応プロセス・問い合わせテンプレート・返金交渉のポイントを5ステップで解説。",
  },
  {
    href: "/switching-business-electricity-contract",
    title: "法人の電気契約の切替手順",
    description: "切替時の二重請求を未然に防ぐスケジュール管理と書類確認のポイント。",
  },
  {
    href: "/how-to-start-electricity-contract-review",
    title: "法人電気料金の見直しはどこから始める",
    description: "請求書収集→契約条件確認→使用量整理の5ステップで体系的に進める方法。",
  },
];

export default function ElectricityDoubleBillingFaqPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedAt}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <HowToJsonLd
        name="電気代の過剰請求に気づいたときの初動対応"
        description="電気代の二重請求・過剰請求に気づいたとき、5ステップで原因切り分けから返金交渉・公的機関申告までの初動を整理する。"
        steps={initialResponse}
      />
      <FaqPageJsonLd faqs={faqs} />

      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">電気代の二重請求・二重契約FAQ</span>
        </nav>

        {/* ヘッダー */}
        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">FAQ ／ 見直しポイントを知る</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            電気代の二重請求・二重契約とは｜原因と対処法・予防策の完全FAQ
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電気代の「二重請求」「二重契約」が起こると、年間で数十万円の余計な支出になることがあります。本記事では中立社団が、二重請求・二重契約・二重支払いが発生する<strong>5つの典型パターン</strong>と、それぞれの対処手順・予防策を完全FAQ形式で解説します。電力会社切替時のトラブル予防にも活用できる実務ガイドです。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すでに過剰請求が発生していて緊急対応が必要な場合は、関連記事
            <Link href="/emergency-billing-dispute" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">「電気料金の二重請求・過請求が発生したときの対応」</Link>
            の5ステップ確認フローと問い合わせテンプレートを併せてご参照ください。
          </p>
          <AuthorBadge publishedAt={publishedAt} />
        </header>

        <TableOfContents />

        <div className="mt-6 space-y-6">
          {/* H2-1 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気の「二重請求」が起こる5つの典型パターン</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人の電気契約で二重請求・二重支払いが発生する原因は、大きく5パターンに分類できます。原因によって連絡先や必要書類が異なるため、まず自社の状況がどのパターンに該当するか切り分けてください。
            </p>
            <div className="mt-4 space-y-3">
              {patterns.map((p) => (
                <div key={p.no} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="font-semibold text-slate-900">{p.no} {p.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* H2-2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">5パターンごとの対処手順</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              各パターンについて、確認項目・連絡先・必要書類・解決期間を整理しました。最初に自社の状況に該当する行を特定し、その通りに動くと最短で解決に向かいます。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">パターン</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">何を確認</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">連絡先</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">必要書類</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">解決期間</th>
                  </tr>
                </thead>
                <tbody>
                  {responseSteps.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.pattern}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.confirm}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.contact}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.docs}</td>
                      <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-700">
              判断に迷う場合は、中立社団による無料相談
              <Link href="/concierge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">「コンシェルジュ窓口」</Link>
              でも、請求書の見方・連絡先選定のアドバイスを受けられます。
            </p>
          </section>

          {/* H2-3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">二重契約を予防する5つのチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力会社の切替・名義変更・引っ越し時に、以下のチェックを事前に済ませておくと二重請求・二重契約をほぼ確実に防げます。
            </p>
            <ul className="mt-4 space-y-3">
              {preventionChecklist.map((c, i) => (
                <li key={i} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-900">☐ {i + 1}. {c.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">{c.desc}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* H2-4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">トラブル発生時の連絡先・対応窓口（実務）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              二重請求・過剰請求が発生したときの主要な連絡先は以下の4つです。原則として、まず電力会社のカスタマーセンターに連絡し、解決しなければ第三者機関に進む流れが基本です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">① 電力会社カスタマーセンター</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">最初の連絡先。電話だけでなく必ず書面（メール・Webフォーム）でも記録を残す。問い合わせ番号を取得し、回答期限を明示する。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">② 経済産業省 電力・ガス取引監視等委員会（ECOM）</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">電話 03-3501-5725（平日9:00〜18:00）。費用無料の第三者相談窓口。仲介・あっせん制度あり。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">③ 消費生活センター</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">電話 188（局番なし）。仲介業者の悪質契約・架空契約が疑われるときに相談。法人は対象外の地域もある。</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">④ 法律相談（弁護士会・法テラス）</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">交渉が決裂し法的手続きが必要なとき、または時効が迫る過去分の請求を行う際に相談。</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-slate-700">
              <p>
                ⚠️ すでに過剰請求が確定していて緊急対応が必要な場合の<strong>対応プロセス（5ステップ確認フロー・問い合わせテンプレート・返金交渉のポイント）</strong>は、関連記事
                <Link href="/emergency-billing-dispute" className="font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900">「電気料金の二重請求・過請求が発生したときの対応」</Link>
                を参照してください。本記事は「予防＋FAQ」、関連記事は「対応プロセス」と役割を分担しています。
              </p>
            </div>
          </section>

          {/* H2-5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">過剰請求に気づいたときの初動対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「請求が二重に来ている気がする」と気づいた段階で、以下の5ステップを順に進めてください。最初の整理が雑だと交渉が長引くので、Step 1〜2の事実整理を必ず先にやります。
            </p>
            <ol className="mt-4 space-y-3">
              {initialResponse.map((s, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {i + 1}
                  </div>
                  <div className="border-l-2 border-sky-200 pl-4">
                    <p className="font-semibold text-slate-900">{s.name}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-700">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* H2-6 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある質問（FAQ・10問）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              現場でよく寄せられる10問について、中立社団としての回答を整理しました。
            </p>
            <div className="mt-4 space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="font-semibold text-slate-900">Q{i + 1}. {f.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">A. {f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks heading="関連ページ" links={relatedLinks} />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="次にすること"
            description="自社の契約状況を診断し、過剰支払いがないか確認しましょう。判断に迷う場合は中立社団のコンシェルジュ窓口で無料相談を受けられます。"
            links={[
              { href: "/simulate", label: "自社の契約状況をシミュレーターで診断する" },
              { href: "/concierge", label: "中立社団のコンシェルジュに無料相談する" },
              { href: "/articles/review-points", label: "見直しポイントの記事一覧へ" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
