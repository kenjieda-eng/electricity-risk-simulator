import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["emergency-response"];


const pageTitle = "電力会社から契約条件変更の通知が来たときの対応｜法人の電力契約トラブル";
const pageDescription =
  "電力会社から料金体系・調整項目・契約条件の変更通知を受けた場合の確認手順と対応方法を整理します。";
const pageUrl = "https://simulator.eic-jp.org/emergency-contract-terms-change";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["電力会社 条件変更", "電力契約 条件変更通知", "電力 料金体系変更", "電力契約 市場連動 切替"],
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

const changeTypes = [
  {
    type: "料金体系の変更",
    example: "固定単価から時間帯別料金・季節別料金への変更",
    impact: "高",
    note: "使用時間帯によっては大幅なコスト増になるケースがある",
  },
  {
    type: "燃調から市場連動方式への切替",
    example: "燃料費調整を廃止し、JEPX連動価格に変更",
    impact: "高",
    note: "市場価格の変動リスクを直接受ける。スポット価格が高騰すると請求額が急増する",
  },
  {
    type: "調整項目の追加",
    example: "容量拠出金・再エネ賦課金の転嫁方法変更",
    impact: "中",
    note: "従来は含まれていたコストが別途請求になり、見かけ上の単価が変わる",
  },
  {
    type: "契約容量・デマンドの算定方法変更",
    example: "ピーク月の計算期間を3カ月から12カ月に変更",
    impact: "中",
    note: "夏季・冬季のピーク時に契約容量が増加し、基本料金が増える可能性がある",
  },
  {
    type: "最低利用料・違約金条件の変更",
    example: "中途解約ペナルティの引き上げ、最低購入量の設定",
    impact: "中",
    note: "将来の切替コストが増加する。早期に解約する場合のコスト試算が必要",
  },
  {
    type: "供給停止条件・支払条件の変更",
    example: "支払猶予日数の短縮、延滞利息率の変更",
    impact: "低〜中",
    note: "キャッシュフローへの影響を確認する",
  },
];

const initialSteps = [
  {
    num: "①",
    title: "通知内容を正確に把握する",
    detail:
      "通知書の全文を読み、変更される項目・変更の内容・変更の適用開始日を一覧化します。「見た」で終わらず、具体的な変更内容を文書化することが重要です。",
  },
  {
    num: "②",
    title: "現行条件との差額を試算する",
    detail:
      "変更前後の条件で直近12カ月分の請求額を再計算し、年間コストの差を算出します。変更が複数ある場合は項目別に試算し、合算します。シミュレーターを活用することで精度が上がります。",
  },
  {
    num: "③",
    title: "変更の拒否・協議が可能か確認する",
    detail:
      "契約書に「条件変更の拒否権」「協議条項」が含まれているか確認します。一般的に新電力との相対契約ではある程度の協議余地があります。規制料金・経過措置は拒否が難しい場合があります。",
  },
  {
    num: "④",
    title: "他社見積もりを取得する",
    detail:
      "変更後の条件が不利であれば、すぐに他社から見積もりを取ります。見積もりには通常2〜4週間かかるため、回答期限を確認してから動き始めることが重要です。",
  },
  {
    num: "⑤",
    title: "社内報告と判断を行う",
    detail:
      "差額試算・他社比較の結果を経理・経営層に報告し、受け入れ・交渉・切替のどれを選ぶか意思決定します。年間コスト差が大きい場合は経営判断が必要になります。",
  },
];

const impactTable = [
  { changeType: "固定→市場連動への変更", shortTerm: "市場次第で急増", longTerm: "リスクが常時発生", urgency: "高" },
  { changeType: "燃調算定方法の変更", shortTerm: "数百〜数千円/月", longTerm: "エネルギー情勢次第", urgency: "中" },
  { changeType: "容量拠出金の転嫁方法変更", shortTerm: "小〜中程度", longTerm: "制度変更と連動", urgency: "中" },
  { changeType: "料金体系（時間帯別等）への変更", shortTerm: "操業形態次第で大", longTerm: "使用パターン改善で対応可", urgency: "高" },
  { changeType: "最低利用料の新設", shortTerm: "小規模事業所は影響大", longTerm: "固定費の増加", urgency: "中" },
  { changeType: "支払条件の変更", shortTerm: "資金繰りへの影響", longTerm: "延滞リスクに注意", urgency: "低〜中" },
];

const acceptOrRejectGuide = [
  {
    situation: "受け入れるべきケース",
    color: "sky",
    conditions: [
      "変更後も他社と比較して競争力がある（年間コスト差5%未満）",
      "制度改正への対応であり、他社も同条件となる変更",
      "変更拒否・切替にかかるコスト（違約金等）が差額を上回る",
      "切替に必要なリードタイムが確保できない（2カ月以内に適用の場合）",
    ],
  },
  {
    situation: "断る・交渉すべきケース",
    color: "rose",
    conditions: [
      "年間コスト差が5〜10%以上になり、他社がより安い見積もりを出している",
      "市場連動への変更で価格変動リスクが受け入れられない",
      "変更内容が複数重なり、合算すると大幅なコスト増になる",
      "変更後の条件が業界水準から外れている（電力会社の一方的な不利変更）",
    ],
  },
];

const responseTimeline = [
  { step: "通知受領", timing: "Day 0", action: "通知の全文確認・変更内容の一覧化" },
  { step: "内容把握", timing: "Day 1〜3", action: "現行条件との差額試算・影響度の確認" },
  { step: "判断材料の収集", timing: "Day 3〜10", action: "他社見積もりの依頼・拒否可否の確認" },
  { step: "社内報告", timing: "Day 7〜14", action: "差額試算・選択肢の報告・意思決定" },
  { step: "回答期限", timing: "通知に記載の期限", action: "受け入れ・交渉・切替の意思表示" },
  { step: "切替実行", timing: "変更適用日の前", action: "切替先との契約締結・手続き完了" },
];

const commonChangePatterns = [
  {
    pattern: "新電力の経営悪化に伴うコスト転嫁",
    background:
      "2022年以降の電力市場の高騰を受け、多くの新電力が固定単価を維持できなくなり、市場連動型への切替を求める通知を発出しました。電力会社の財務状況が悪化すると、コストを顧客に転嫁する変更通知が増える傾向があります。",
  },
  {
    pattern: "制度変更への対応（容量市場・再エネ賦課金等）",
    background:
      "容量市場の本格稼働（2024年度〜）に伴い、容量拠出金の転嫁方法を変更する電力会社が増えています。これは業界全体の制度対応であり、一社だけの問題ではありません。ただし転嫁方法は各社で異なります。",
  },
  {
    pattern: "料金メニューの廃止・統合",
    background:
      "電力自由化後に設けられた旧来のメニューを廃止し、新メニューへの移行を促す変更通知があります。旧メニューが有利な条件であった場合、新メニューへの移行はコスト増になるケースがあります。",
  },
];

export default function EmergencyContractTermsChangePage() {
  return (
    <>
      <ArticleJsonLd
        headline="電力会社から契約条件変更の通知が来たときの対応｜法人の電力契約トラブル"
        description="電力会社から料金体系・調整項目・契約条件の変更通知を受けた場合の確認手順と対応方法を整理します。"
        url="https://simulator.eic-jp.org/emergency-contract-terms-change"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "電力会社から契約条件変更の通知が来たときの対応" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/emergency-response" className="underline-offset-2 hover:underline">緊急対応・トラブル解決</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約条件変更の通知が来たときの対応</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">EMERGENCY ／ 緊急対応</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          電力会社から契約条件変更の通知が来たときの対応
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力会社から「料金体系を変更します」「市場連動方式に切り替えます」といった通知が届くことがあります。
          こうした通知は値上げ通知とは性質が異なり、
          <strong>条件変更の受け入れ・交渉・切替のいずれかを期限内に判断する必要があります。</strong>
          このページでは通知の種類・初動5ステップ・受け入れるかどうかの判断基準・よくある変更パターンを整理します。
        </p>
      </header>

      {/* 契約条件変更通知とは */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">契約条件変更通知とはどのようなものか</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          「値上げ通知」と「条件変更通知」は異なります。値上げ通知は既存の料金体系のまま単価が上がる場合ですが、
          条件変更通知は契約の根幹となる料金体系・算定方式・調整項目の枠組み自体が変わります。
          以下のような変更が代表的です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">変更の種類</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">具体例</th>
                <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">影響度</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">注意点</th>
              </tr>
            </thead>
            <tbody>
              {changeTypes.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.type}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.example}</td>
                  <td className={`border border-slate-200 px-3 py-2 text-center font-semibold ${r.impact === "高" ? "text-rose-600" : "text-amber-600"}`}>
                    {r.impact}
                  </td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 通知が来たときの初動5ステップ */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">通知が来たときの初動5ステップ</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          変更通知を受け取ったら、以下の順序で対応します。焦って結論を出す前に、まず情報を整理することが重要です。
        </p>
        <ol className="mt-4 space-y-4">
          {initialSteps.map((s, i) => (
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

      {/* 変更の種類別の影響度一覧 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">変更の種類別の影響度と緊急度一覧</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          変更の種類によって対応の緊急度が異なります。特に<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動</Link>・料金体系変更は影響が大きく、
          すぐに試算と判断が必要です。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">変更の種類</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">短期的影響</th>
                <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-700">長期的影響</th>
                <th className="border border-slate-200 px-3 py-2 text-center font-semibold text-slate-700">緊急度</th>
              </tr>
            </thead>
            <tbody>
              {impactTable.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-800">{r.changeType}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.shortTerm}</td>
                  <td className="border border-slate-200 px-3 py-2 text-slate-700">{r.longTerm}</td>
                  <td className={`border border-slate-200 px-3 py-2 text-center font-semibold ${r.urgency === "高" ? "text-rose-600" : r.urgency === "中" ? "text-amber-600" : "text-slate-500"}`}>
                    {r.urgency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 受け入れるべきか断るべきかの判断ポイント */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">受け入れるべきか断るべきかの判断ポイント</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          変更を受け入れるか、交渉・切替を選ぶかは以下の観点で判断します。
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {acceptOrRejectGuide.map((group, i) => (
            <div
              key={i}
              className={`rounded-lg border p-4 ${
                group.color === "sky" ? "border-sky-200 bg-sky-50" : "border-rose-200 bg-rose-50"
              }`}
            >
              <p className={`font-semibold ${group.color === "sky" ? "text-sky-800" : "text-rose-800"}`}>
                {group.situation}
              </p>
              <ul className="mt-3 space-y-2">
                {group.conditions.map((c, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className={`mt-1 ${group.color === "sky" ? "text-sky-500" : "text-rose-500"}`}>▶</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 変更通知への回答期限と対応フロー */}
      <section className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">変更通知への回答期限と対応フロー</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          変更通知には回答期限が設定されていることが多く、期限を過ぎると変更を受け入れたとみなされる場合があります。
          以下のタイムラインを参考に、余裕をもって対応してください。
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-amber-100">
                <th className="border border-amber-200 px-3 py-2 text-left font-semibold text-slate-700">フェーズ</th>
                <th className="border border-amber-200 px-3 py-2 text-left font-semibold text-slate-700">目安タイミング</th>
                <th className="border border-amber-200 px-3 py-2 text-left font-semibold text-slate-700">やること</th>
              </tr>
            </thead>
            <tbody>
              {responseTimeline.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                  <td className="border border-amber-200 px-3 py-2 font-semibold text-amber-800">{r.step}</td>
                  <td className="border border-amber-200 px-3 py-2 text-slate-700">{r.timing}</td>
                  <td className="border border-amber-200 px-3 py-2 text-slate-700">{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* よくある変更パターンとその背景 */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">よくある変更パターンとその背景</h2>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          契約条件変更通知には、業界全体の動向を反映したものと、個別の電力会社の事情によるものがあります。
          背景を理解することで、適切な交渉や判断が可能になります。
        </p>
        <div className="mt-4 space-y-4">
          {commonChangePatterns.map((p, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">{p.pattern}</p>
              <p className="mt-2 text-sm leading-7 text-slate-700">{p.background}</p>
            </div>
          ))}
        </div>
      </section>

      {/* まとめ */}
      <section className="mt-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
        <h2 className="text-xl font-semibold text-slate-900">まとめ：通知を受けたら冷静に5ステップで対応する</h2>
        <ul className="mt-3 space-y-2">
          {[
            "通知を受けたらまず内容を正確に把握し、変更前後の差額を試算する",
            "市場連動への変更や複数条件の同時変更は影響が大きく、早期対応が必要",
            "回答期限を確認し、期限内に受け入れ・交渉・切替の意思決定を行う",
            "他社見積もりを取ることで交渉力が高まり、現電力会社に条件改善を求める余地が生まれる",
            "制度変更への対応は業界全体の動向を確認してから判断すると精度が上がる",
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
              href: "/emergency-price-increase-notice",
              title: "値上げ通知が届いたらまずやる7つのこと",
              description: "値上げ通知を受けたときの確認事項と対応手順を整理します。",
            },
            {
              href: "/emergency-supplier-withdrawal",
              title: "電力会社が撤退・廃業したときの対応",
              description: "供給会社が事業を終了した場合の緊急対応手順を解説します。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額の仕組みと影響",
              description: "燃調の算定ルールと電気料金への影響をわかりやすく解説。",
            },
            {
              href: "/market-price-adjustment",
              title: "市場価格調整の仕組みと注意点",
              description: "JEPX連動型の調整項目が請求に与える影響を整理します。",
            },
            {
              href: "/executive-cfo-electricity-basics",
              title: "CFOのための電力市場基礎",
              description: "契約条件変更を経営層に説明する際の電力市場の基礎知識。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="変更後の影響額をシミュレーターで確認する"
          description="契約条件の変更が年間コストにどれほど影響するか、シミュレーターで試算してから判断しましょう。"
          links={[
            { href: "/", label: "シミュレーターで影響額を試算する" },
            { href: "/articles", label: "電力調達の基礎知識を読む" },
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
