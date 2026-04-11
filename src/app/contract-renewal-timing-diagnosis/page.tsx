import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "契約更新タイミング診断｜いつ電力契約の見直しを始めるべきか";
const pageDescription =
  "電力契約の更新時期から逆算して、見直しをいつ始めるべきかを診断。更新まで6か月以上・3〜6か月・3か月未満・更新直後の4パターンで、今取るべきアクションを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 更新 タイミング",
    "電気料金 見直し いつ始める",
    "法人 電力契約 更新時期",
    "電力契約 見直し スケジュール",
    "電気代 見直し タイミング 診断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/contract-renewal-timing-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/contract-renewal-timing-diagnosis",
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

const timingPatterns = [
  {
    label: "更新まで6か月以上ある",
    icon: "🟢",
    urgency: "余裕あり",
    summary: "今から準備を始めることで最も選択肢が広い状態で判断できます。",
    actions: [
      { step: 1, text: "現行契約書と直近12か月分の請求書を手元に揃える" },
      { step: 2, text: "シミュレーターで現行プランのリスクを試算し、見直しの必要性を判断する" },
      { step: 3, text: "現行プランの変動費（燃料費調整額・市場価格調整額）の傾向を確認する" },
      { step: 4, text: "固定型・市場連動型どちらの方向性が自社に合うかを社内で議論する" },
      { step: 5, text: "更新4〜5か月前を目安に、2〜3社へ同一条件で見積依頼を開始する" },
    ],
    caution: "余裕があるからこそ先送りになりがちです。情報収集だけ先に始めておくことで、いざ見積依頼を始めたときの精度が上がります。",
  },
  {
    label: "更新まで3〜6か月ある",
    icon: "🟡",
    urgency: "準備着手を推奨",
    summary: "見直しを行うのに最も適した時間帯です。今すぐ動き始めることで、複数社の見積を比較したうえで判断できます。",
    actions: [
      { step: 1, text: "現行契約の満了日・中途解約条件を正確に把握する" },
      { step: 2, text: "供給地点特定番号・月間使用量・契約電力を整理する" },
      { step: 3, text: "シミュレーターで現行プランのリスクを試算し、社内説明資料を準備する" },
      { step: 4, text: "見直し目的と比較軸を社内で共有し、承認フローを確認する" },
      { step: 5, text: "2〜3社以上に見積依頼を出し、条件・リスク・総額で比較する" },
      { step: 6, text: "見積比較結果をもとに社内承認を得て、切替手続きを開始する" },
    ],
    caution: "切替完了には通常1〜2か月の手続き期間が必要です。比較・決定に時間をかけすぎると切替が間に合わない可能性があります。",
  },
  {
    label: "更新まで3か月未満",
    icon: "🔴",
    urgency: "急いで対応が必要",
    summary: "時間的余裕が少ない状況です。今すぐ動かないと自動更新で現行条件が延長されるリスクがあります。",
    actions: [
      { step: 1, text: "まず現行契約書を確認し、中途解約違約金・自動更新条項を把握する" },
      { step: 2, text: "必要情報（供給地点特定番号・使用量・契約電力）を即座に準備する" },
      { step: 3, text: "今週中に2〜3社へ見積依頼を出す" },
      { step: 4, text: "見積受領後、最低限の比較基準で判断し、早急に社内承認を得る" },
      { step: 5, text: "切替先が決まり次第、すぐに手続きを開始する" },
    ],
    caution: "時間不足で条件の十分な比較が難しい場合は、まず現行契約の継続（自動更新）を受け入れつつ、次回更新に向けて早めに準備を始めるという判断も合理的です。",
  },
  {
    label: "更新直後・更新が完了した",
    icon: "⚪",
    urgency: "次回更新に向けて準備",
    summary: "今すぐ切替は難しい状況ですが、次回更新を見据えた準備を今から始めることで、選択肢が広い状態で次の判断ができます。",
    actions: [
      { step: 1, text: "現行契約の満了日と中途解約条件を改めて確認する" },
      { step: 2, text: "シミュレーターで現行プランの上振れリスクを確認し、リスクを認識する" },
      { step: 3, text: "請求書を月次でモニタリングし、変動費の動向を把握する" },
      { step: 4, text: "次回更新の6か月前（目安）をカレンダーに設定し、見直し開始のトリガーにする" },
      { step: 5, text: "太陽光・蓄電池等の設備投資の可能性も含め、中長期の電力戦略を検討する" },
    ],
    caution: "更新直後でも、例外的に中途解約が許容される場合（違約金が少額・条件が明示されている等）は、見直しを検討する価値があります。契約書を確認してください。",
  },
];

const autoRenewalRisks = [
  {
    label: "自動更新後に新しい電力会社に切り替えようとすると、違約金が発生する場合がある",
    note: "自動更新の条項が含まれているプランでは、更新後に中途解約すると違約金が発生することがあります。金額は契約によって異なります。",
  },
  {
    label: "更新時に単価条件が変更されていることがある",
    note: "自動更新時に、電力会社側の都合で単価が改定されるケースがあります。更新ごとに請求書と契約書を照合する習慣が重要です。",
  },
  {
    label: "現行プランが割高になっていても気づきにくい",
    note: "自動更新が続くと、市場相場と比較して現行単価が割高になっていても気づきにくくなります。年1回の定期的な市場確認が有効です。",
  },
];

export default function ContractRenewalTimingDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          契約更新タイミング診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは「いつ始めるか」が成否を左右します。更新直前に動き始めると選択肢が限られ、十分な比較ができないままになることがあります。逆に早すぎても動けないケースも。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、現在の契約更新時期から「今どのタイミングにいるか」を確認し、今取るべきアクションを4パターンで整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>更新時期から逆算した見直し開始の最適タイミング</li>
            <li>更新まで6か月以上・3〜6か月・3か月未満・更新直後の各対応手順</li>
            <li>自動更新のリスクと注意点</li>
            <li>見直しを先送りするリスク</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">まず確認：現在の契約状況</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の情報を手元に用意してから、該当するタイミングのパターンを確認してください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              { label: "契約満了日", note: "契約書の「契約期間」欄を確認" },
              { label: "自動更新条項の有無", note: "「自動更新」「自動継続」などの条項を確認" },
              { label: "中途解約条件・違約金", note: "違約金の算定方式と発生条件を確認" },
              { label: "解約予告期間", note: "「○か月前までに解約申告」などの条件を確認" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {timingPatterns.map((pattern) => (
          <section key={pattern.label} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">{pattern.label}</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {pattern.urgency}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{pattern.summary}</p>
            <div className="mt-4 space-y-3">
              {pattern.actions.map(({ step, text }) => (
                <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                    {step}
                  </span>
                  <p className="text-sm leading-7 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-amber-100 bg-amber-50 p-3">
              <p className="text-sm leading-6 text-amber-800">
                <span className="font-semibold">注意点：</span>{pattern.caution}
              </p>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自動更新を見過ごすリスク</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多くの法人電力契約には自動更新条項が含まれています。更新時期を見逃すと、気づかないまま現行条件で1年以上延長されてしまうケースがあります。
          </p>
          <div className="mt-4 space-y-3">
            {autoRenewalRisks.map((item) => (
              <div key={item.label} className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-500">
                  ✓
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しの「標準タイムライン」</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            余裕を持って進める場合の標準的なスケジュールを以下に示します。更新時期が決まったら、逆算してスケジューリングしてください。
          </p>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <span className="font-semibold text-slate-900">更新6か月前</span>
              <span>現状把握・シミュレーション・社内方針確認を開始</span>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <span className="font-semibold text-slate-900">更新4〜5か月前</span>
              <span>2〜3社への見積依頼を開始</span>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <span className="font-semibold text-slate-900">更新3〜4か月前</span>
              <span>見積比較・社内説明・稟議を実施</span>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <span className="font-semibold text-slate-900">更新2〜3か月前</span>
              <span>切替先決定・手続き開始・現行会社への解約申告</span>
            </div>
            <div className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
              <span className="font-semibold text-slate-900">更新1か月前</span>
              <span>切替完了の確認・新旧請求書の確認準備</span>
            </div>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見直しのタイミングと手順を理解するための関連ページです。"
          links={[
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "どのタイミングで動き始めるべきか、判断基準を詳しく解説。",
            },
            {
              href: "/electricity-contract-cancellation-renewal-terms",
              title: "電力契約の中途解約・更新条件",
              description: "自動更新・違約金・解約予告期間の仕組みを解説。",
            },
            {
              href: "/review-contract-renewal-deadlines",
              title: "契約更新期限と見直し準備",
              description: "期限から逆算した準備手順を整理。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "見積を依頼する前に揃えておくべき情報・資料を確認する。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "見直しの必要性があるかを10項目で確認する診断ページ。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "見直し全体の準備チェックリストを網羅的に確認。",
            },
          ]}
        />

        <ContentCta
          heading="今すぐリスクを試算して見直しの根拠を作る"
          description="シミュレーターで現行プランの上振れリスクを確認しておくことで、見積比較や社内説明の根拠として活用できます。更新前の早い段階からの活用を推奨します。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="contract-renewal-timing-diagnosis" />
      </div>
    </main>
  );
}
