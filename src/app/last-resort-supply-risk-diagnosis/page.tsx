import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "最終保障供給リスク診断｜自社が最終保障供給になるリスクを確認";
const pageDescription =
  "最終保障供給（最終保障）に移行するリスクがあるかを診断チェックで確認。契約状況・新電力との関係・倒産リスクへの備えなど、法人担当者が知っておくべき判断ポイントを解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 リスク 診断",
    "最終保障供給 なりやすい",
    "新電力 倒産 最終保障",
    "法人 電力 最終保障供給",
    "最終保障供給 回避 チェック",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/last-resort-supply-risk-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/last-resort-supply-risk-diagnosis",
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

const riskCheckItems = [
  {
    label: "現在の電力会社が小規模な新電力会社である",
    note: "資本力・財務基盤が脆弱な新電力は、電力市場の急騰局面で撤退・倒産するリスクがあります。供給元の財務状況を定期的に確認することが重要です。",
    level: "high",
  },
  {
    label: "現在の電力会社から「供給停止」「事業撤退」「契約終了」の通知を受けたことがある",
    note: "このような通知を受けた場合、速やかに代替の電力会社に切り替えないと最終保障供給に移行するリスクがあります。すぐに行動を開始してください。",
    level: "high",
  },
  {
    label: "現在の電力契約が終了しているが、新たな契約先を決めていない",
    note: "契約が空白になっている場合、自動的に最終保障供給（一般送配電事業者の提供）に移行することがあります。最終保障供給は通常の小売より単価が高い傾向があります。",
    level: "high",
  },
  {
    label: "現在の電力会社の経営状況・ニュースを直近1年以内に確認していない",
    note: "電力小売会社の事業撤退・廃業は突然告知されることがあります。主要な新電力のニュースを年数回チェックする習慣が、早期対応につながります。",
    level: "medium",
  },
  {
    label: "現在の電力契約の満了日を把握していない",
    note: "契約が終了した後に放置されると最終保障供給に移行します。満了日を把握し、更新または切替の手続きを確実に行う体制が必要です。",
    level: "medium",
  },
  {
    label: "電力契約の担当者が不在・引き継ぎ不足で、契約状況が把握できていない",
    note: "担当者交代や引き継ぎ漏れで、電力契約の状況が把握できていないケースがあります。契約情報の管理体制を確認してください。",
    level: "medium",
  },
  {
    label: "複数拠点があり、一部拠点の契約状況を把握していない",
    note: "複数拠点を管理している場合、一部拠点が最終保障供給になっていることに気づかないケースがあります。定期的に全拠点の契約状況を確認する体制が重要です。",
    level: "medium",
  },
  {
    label: "電力使用量が多く、最終保障供給になった場合のコスト増加が大きい",
    note: "最終保障供給は単価が高いため、使用量が多い法人ほどコストへのインパクトが大きくなります。予備の切替候補を事前に検討しておくことが有効です。",
    level: "low",
  },
  {
    label: "現在の電力会社との契約が単年度更新で、更新のたびに条件変更の可能性がある",
    note: "単年度契約は柔軟性がある反面、年度ごとに条件交渉が必要です。更新時に不利な条件提示があった場合、速やかに代替候補を検討できる体制を持っておくことが重要です。",
    level: "low",
  },
];

const lastResortFacts = [
  {
    title: "最終保障供給とは",
    body: "電力の小売契約が終了した際に、需要家が電力供給を受け続けられるよう、一般送配電事業者が提供するセーフティネットです。通常の小売電気事業者との契約とは別の料金体系が適用されます。",
  },
  {
    title: "最終保障供給の料金水準",
    body: "最終保障供給の料金は、通常の小売価格より高く設定される傾向があります。電力市場の状況や地域によって異なりますが、一般的に割高になる可能性が高いといえます。",
  },
  {
    title: "移行するケース",
    body: "新電力会社の事業撤退・倒産、契約期間終了後の放置、契約が成立しないまま供給が継続している状態などが最終保障供給に移行する主な原因です。",
  },
  {
    title: "移行後の対応",
    body: "最終保障供給に移行した場合、できるだけ早く新たな小売電気事業者との契約を締結することが重要です。最終保障供給期間中も切替手続きは行えます。",
  },
];

const preventionSteps = [
  { step: 1, text: "現行の電力契約書で満了日・自動更新条項を確認し、カレンダーに更新時期をメモする" },
  { step: 2, text: "供給元の電力会社の経営状況・ニュースを年数回チェックする習慣をつける" },
  { step: 3, text: "複数拠点がある場合は、全拠点の契約状況を一元的に把握するリストを作成する" },
  { step: 4, text: "契約担当者が変わる際は、電力契約情報の引き継ぎを確実に行う" },
  { step: 5, text: "万一に備えて、代替の電力会社候補（1〜2社）の情報を事前に把握しておく" },
  { step: 6, text: "万一最終保障供給に移行した場合の切替手続きフローを事前に確認しておく" },
];

export default function LastResortSupplyRiskDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          最終保障供給リスク診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「最終保障供給」とは、電力の小売契約が終了した際に需要家が電力供給を受け続けられる仕組みです。ただし、通常の小売価格より割高になる傾向があり、気づかないまま移行していると、電気代が上がっている原因になっていることがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自社が最終保障供給に移行するリスクがあるかをチェックリスト形式で確認し、リスクを回避するための具体的な手順を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>最終保障供給とは何か・どんな状況で移行するか</li>
            <li>自社が最終保障供給に移行するリスクの診断チェックリスト</li>
            <li>最終保障供給を未然に防ぐための対応手順</li>
            <li>移行してしまった場合の対処法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給の基本知識</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            リスク診断の前に、最終保障供給の仕組みを確認しておきましょう。詳しくは{" "}
            <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給とは
            </Link>{" "}
            をご覧ください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {lastResortFacts.map((fact) => (
              <div key={fact.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{fact.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{fact.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">リスク診断チェックリスト（9項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の項目に当てはまるものが多いほど、最終保障供給に移行するリスクが高い状況といえます。
          </p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-red-700">重要度：高（1つでも該当したら早急に確認）</p>
            <div className="mt-3 space-y-3">
              {riskCheckItems
                .filter((item) => item.level === "high")
                .map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-red-300 bg-white text-xs text-red-400">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-amber-700">重要度：中（複数該当したら対策を検討）</p>
            <div className="mt-3 space-y-3">
              {riskCheckItems
                .filter((item) => item.level === "medium")
                .map((item) => (
                  <div key={item.label} className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-300 bg-white text-xs text-amber-400">
                      ✓
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.note}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-semibold text-slate-600">重要度：低（把握しておくと安心）</p>
            <div className="mt-3 space-y-3">
              {riskCheckItems
                .filter((item) => item.level === "low")
                .map((item) => (
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
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給を未然に防ぐための6ステップ</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の手順を日常的な管理業務に組み込むことで、最終保障供給へのリスクを大幅に低減できます。
          </p>
          <div className="mt-4 space-y-3">
            {preventionSteps.map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-red-100 bg-red-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">最終保障供給に移行してしまった場合の対応</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            既に最終保障供給に移行している場合は、以下の手順で早急に対応してください。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "現在の供給状態を確認する（請求書の発行元・料金水準を確認）" },
              { step: 2, text: "供給地点特定番号・使用量データを整理し、見積依頼の準備を行う" },
              { step: 3, text: "複数の電力会社に見積を依頼し、早急に切替先を決定する" },
              { step: 4, text: "切替手続きを開始する（通常1〜2か月程度の手続き期間が必要）" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            詳しくは{" "}
            <Link href="/last-resort-supply-switch" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              最終保障供給から通常の小売契約に切り替える方法
            </Link>{" "}
            をご覧ください。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="最終保障供給の仕組みと対策についてさらに詳しく確認できるページです。"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "最終保障供給の仕組みと料金水準、移行ケースを詳しく解説。",
            },
            {
              href: "/last-resort-supply-price",
              title: "最終保障供給の料金水準",
              description: "通常の小売電力との価格差と、コストへの影響を解説。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替える方法",
              description: "移行後の切替手続きと注意点を整理。",
            },
            {
              href: "/last-resort-vs-retail-contract",
              title: "最終保障供給と通常小売契約の違い",
              description: "料金・契約条件の違いを比較形式で解説。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "更新時期から逆算して、見直し開始のタイミングを確認。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "そもそも見直しが必要かを10項目で確認する診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクをシミュレーターで確認する"
          description="最終保障供給への移行リスクを把握したら、現行の電力プランのコストリスクもシミュレーターで確認しておきましょう。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
