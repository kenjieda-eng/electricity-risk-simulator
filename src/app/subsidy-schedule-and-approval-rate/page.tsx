import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "補助金申請のスケジュールと採択率の目安｜法人の電気料金対策";
const pageDescription =
  "主要な省エネ・電力補助金の公募時期・採択率・申請から交付までのスケジュール感を整理します。";
const pageUrl = "https://simulator.eic-jp.org/subsidy-schedule-and-approval-rate";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金 スケジュール",
    "省エネ補助金 採択率",
    "補助金 申請時期",
    "法人 補助金 公募",
  ],
  alternates: { canonical: pageUrl },
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

const annualCalendar = [
  {
    month: "1〜2月",
    programs: ["ものづくり補助金（一般・グリーン枠）公募開始（年1〜2回）", "IT導入補助金 公募開始（通年型）"],
    note: "年明けから動き始める制度が多い。社内調整・見積取得を年内に済ませておく。",
  },
  {
    month: "3〜4月",
    programs: ["SII省エネ補助金 公募要領公開・GビズID取得推奨期", "需要家主導型太陽光PPA補助 公募準備"],
    note: "新年度の補助金情報が公開される時期。公募要領を早めに入手して要件確認。",
  },
  {
    month: "5〜7月",
    programs: ["SII省エネ補助金（一次公募）締切", "需要家主導型太陽光PPA補助（一次公募）締切", "SHIFT事業（温対計画策定支援）公募"],
    note: "一次公募の申請期限が集中する。複数制度を同時申請する場合は工数に注意。",
  },
  {
    month: "8〜9月",
    programs: ["SII省エネ補助金 採択結果発表（一次）", "ものづくり補助金 採択結果発表（前回分）"],
    note: "夏以降に一次採択通知。採択後に交付決定を経てから発注・着工。",
  },
  {
    month: "10〜11月",
    programs: ["SII省エネ補助金（二次公募）開始・締切", "需要家主導型PPA補助（二次公募）", "小規模事業者持続化補助金 公募締切"],
    note: "二次公募は一次より採択枠が少ない傾向がある。一次を逃した場合の滑り止め。",
  },
  {
    month: "12〜翌1月",
    programs: ["各補助金の完了実績報告・補助金交付", "翌年度補助金情報の先行公開開始"],
    note: "当年度事業の完了報告期限が集中する時期。翌年度の計画立案も並行して行う。",
  },
];

const approvalRates = [
  {
    program: "SII省エネ補助金（A類型）",
    rate: "40〜60%",
    trend: "横ばい〜やや低下",
    point: "要件充足が必須。設備仕様と省エネ量の整合性が審査の焦点。",
  },
  {
    program: "SII省エネ補助金（B類型）",
    rate: "30〜50%",
    trend: "競争率高め",
    point: "大規模投資向け。事業計画の完成度で差がつく。専門家関与で採択率が上がる傾向。",
  },
  {
    program: "需要家主導型太陽光PPA補助",
    rate: "50〜70%",
    trend: "応募数により変動",
    point: "PPA契約の実現可能性・発電設備の仕様が重視される。",
  },
  {
    program: "ものづくり補助金（グリーン枠）",
    rate: "40〜55%",
    trend: "全枠合計で競争率高い",
    point: "付加価値額向上の事業計画が中心。省エネ要件は追加要素。",
  },
  {
    program: "SHIFT事業（温対計画策定）",
    rate: "70〜85%",
    trend: "比較的高め",
    point: "設備補助ではなく計画策定支援のため審査ハードルが低め。まず計画から始めたい場合に活用。",
  },
  {
    program: "小規模事業者持続化補助金",
    rate: "55〜70%",
    trend: "安定的",
    point: "販路開拓が主目的だが省エネ設備も対象。補助上限が小さい（最大200万円）。",
  },
];

const timeline = [
  { phase: "準備期", period: "申請締切の2〜3か月前", actions: ["公募要領の入手・精読", "対象設備の選定・見積取得", "省エネ量の事前計算", "GビズID・電子申請システムへの登録", "社内稟議・承認"] },
  { phase: "申請期", period: "公募期間中（2〜4週間）", actions: ["申請書・計画書の作成", "必要書類（決算書・登記簿等）の収集", "オンライン申請（GビズID使用）", "補足書類の郵送（制度による）"] },
  { phase: "審査期", period: "申請締切後2〜3か月", actions: ["SIIによる書類審査", "必要に応じて追加資料の提出依頼", "採択・不採択の通知"] },
  { phase: "交付決定期", period: "採択通知後2〜4週間", actions: ["交付申請書の提出", "交付決定通知の受領", "【重要】交付決定後に発注・着工"] },
  { phase: "事業実施期", period: "交付決定後〜年度末", actions: ["設備の発注・納入・工事", "省エネ効果の計測・記録", "完了実績報告書の提出"] },
  { phase: "交付期", period: "完了確認後1〜2か月", actions: ["SIIによる完了確認", "補助金の口座振込"] },
];

const managementTips = [
  { title: "補助金カレンダーを社内共有する", detail: "主要補助金の公募開始・締切時期を年間カレンダーに整理し、担当者間で共有する。メール通知サービスや中小企業庁のメールマガジンへの登録も有効。" },
  { title: "GビズIDを事前取得しておく", detail: "取得に1〜2週間かかる場合がある。公募が始まってから取得しようとすると申請が間に合わない。余裕をもって年度初めに取得しておく。" },
  { title: "設備更新計画と補助金公募を連動させる", detail: "設備の法定耐用年数・更新時期を把握し、補助金の公募時期に合わせて更新計画を前倒し・後ろ倒しすることで補助金を確実に活用できる。" },
  { title: "採択率を踏まえた申請計画を立てる", detail: "採択率は30〜60%程度の幅がある。不採択の場合のフォールバックプランも用意しておく。複数の制度を並行検討することでリスク分散になる。" },
];

export default function SubsidyScheduleAndApprovalRatePage() {
  return (
    <>
      <ArticleJsonLd
        headline="補助金申請のスケジュールと採択率の目安｜法人の電気料金対策"
        description="主要な省エネ・電力補助金の公募時期・採択率・申請から交付までのスケジュール感を整理します。"
        url="https://simulator.eic-jp.org/subsidy-schedule-and-approval-rate"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "補助金申請のスケジュールと採択率の目安" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">補助金申請のスケジュールと採択率の目安</span>
      </nav>

      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-sky-700">SUBSIDY ／ 補助金・助成金</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          補助金申請のスケジュールと採択率の目安
        </h1>
        <p className="mt-1 text-lg font-medium text-slate-700">法人の電気料金対策・年間カレンダーと採択実績から逆算する準備術</p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          補助金は「気づいたら締切が過ぎていた」という失敗が最も多いと言われます。
          主要な省エネ・電力補助金の公募時期は制度ごとに異なり、準備期間を含めると
          申請の2〜3か月前から動き始める必要があります。本ページでは年間カレンダー形式で公募時期を整理し、
          採択率の目安と申請から補助金交付までの流れをまとめます。
        </p>
      </header>

      <section className="mt-6 space-y-4">

        {/* 年間カレンダー */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">主要補助金の年間公募カレンダー（目安）</h2>
          <p className="mt-2 text-xs text-slate-500">
            ※ 公募時期は年度・予算状況により変更されます。必ず各実施機関の公式情報を確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700 w-24">時期</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">主な公募・締切イベント</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">準備ポイント</th>
                </tr>
              </thead>
              <tbody>
                {annualCalendar.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700 whitespace-nowrap">{row.month}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      <ul className="space-y-1">
                        {row.programs.map((p, j) => <li key={j}>・ {p}</li>)}
                      </ul>
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600 text-xs leading-6">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 採択率の目安 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">主要補助金の採択率目安</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            採択率は制度・年度・応募数によって大きく変動します。30〜60%程度の幅があり、
            「申請すれば必ず通る」という制度は存在しないことを前提に計画を立てましょう。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">制度名</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">採択率目安</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">傾向</th>
                  <th className="border border-slate-200 px-3 py-2 font-semibold text-slate-700">採択のポイント</th>
                </tr>
              </thead>
              <tbody>
                {approvalRates.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-800">{row.program}</td>
                    <td className="border border-slate-200 px-3 py-2 font-bold text-sky-700">{row.rate}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-600">{row.trend}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 text-xs leading-6">{row.point}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 採択率は各実施機関の公表値をもとにした目安です。最新の実績は各機関のウェブサイトでご確認ください。
          </p>
        </section>

        {/* 申請から交付までの流れ */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請から補助金交付までの流れ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            補助金は「申請して採択されればすぐにお金が入る」わけではありません。
            申請締切から補助金の口座振込まで、制度によっては1年以上かかる場合があります。
            資金繰りへの影響を考慮して計画を立ててください。
          </p>
          <div className="mt-4 space-y-3">
            {timeline.map((t, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 rounded-full bg-sky-600 px-3 py-1 text-xs font-bold text-white">{t.phase}</span>
                  <span className="text-sm font-semibold text-slate-700">{t.period}</span>
                </div>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  {t.actions.map((a, j) => <li key={j}>・ {a}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">資金繰りへの影響</p>
            <p className="mt-2 text-sm text-slate-700">
              補助金は後払いが基本です。設備費用は一旦自己資金または融資で立て替える必要があります。
              補助金を見込んだ設備投資計画を立てる場合、つなぎ融資の活用も検討してください。
              地域の信用金庫・商工会議所では補助金申請に合わせた融資相談に応じている場合があります。
            </p>
          </div>
        </section>

        {/* 申請準備に必要な期間 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請準備に必要な期間（目安：2〜3か月）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            補助金申請の準備は、締切日の2〜3か月前から開始することが推奨されます。
            特に以下の作業は時間がかかるため、余裕をもって着手してください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {[
              { label: "GビズID取得", period: "1〜2週間", detail: "郵送確認が必要なため、公募開始前に取得しておくことが必須。" },
              { label: "見積書の取得", period: "2〜4週間", detail: "複数社から見積取得して比較検討。有効期限の長い見積書を依頼する。" },
              { label: "省エネ量計算", period: "1〜3週間", detail: "既存設備と更新後設備の消費電力差を計算。SIIのツールを活用。" },
              { label: "社内稟議・承認", period: "1〜4週間", detail: "予算承認・取締役会承認が必要な場合、社内プロセスに時間を要する。" },
              { label: "申請書類作成", period: "1〜2週間", detail: "事業計画書・省エネ計算書・添付書類の整合性確認が必要。" },
              { label: "専門家への相談", period: "2〜4週間（調整込み）", detail: "中小企業診断士・省エネ専門家への相談は早めに依頼する。" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-sky-700">{item.period}</p>
                <p className="mt-1 text-xs text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 申請タイミング管理のポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">申請タイミングを逃さないための管理ポイント</h2>
          <div className="mt-4 space-y-3">
            {managementTips.map((tip, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-800">{tip.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：補助金は「待つ」より「先手」で動く</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・ 主要補助金の公募は年1〜2回。締切を逃すと翌年まで待つことになる。</li>
            <li>・ 採択率は30〜60%程度の幅がある。不採択時のフォールバック計画も用意する。</li>
            <li>・ 申請準備は締切の2〜3か月前から開始。GビズID取得・見積収集が先行作業の要。</li>
            <li>・ 交付決定前の発注・着工は補助対象外になる。スケジュール管理が最重要。</li>
            <li>・ 補助金は後払いのため、つなぎ資金の確保を並行して検討する。</li>
          </ul>
        </section>
      </section>

      <div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            { href: "/subsidies-overview", title: "法人向け電力・省エネ補助金まとめ", description: "2026年度に使える主要制度を横断比較" },
            { href: "/subsidy-sii-energy-saving", title: "省エネ補助金（SII）の申請ガイド", description: "対象設備・補助率・申請スケジュールの詳細" },
            { href: "/subsidy-application-approval-document", title: "補助金申請を前提とした稟議書の書き方", description: "構成と数値の示し方を具体的に解説" },
            { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光の補助金活用ガイド", description: "設備別の補助率・上限額・併用可否を整理" },
            { href: "/battery-electricity-cost-benefit", title: "蓄電池は電気料金対策としてどう効くか", description: "補助金活用と組み合わせた蓄電池投資の費用対効果を把握。" },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="電気料金の現状をまず数値で確認しましょう"
          description="補助金活用の前に、現状の電気料金負担をシミュレーターで診断。投資対効果の試算に使える数値を取得できます。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            { href: "/subsidies-overview", label: "補助金一覧ページへ" },
          ]}
        />
      </div>
    </main>
    </>
  );
}
