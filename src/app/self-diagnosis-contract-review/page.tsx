import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "法人向け電力契約見直し自己診断｜見直しが必要かを簡易チェック";
const pageDescription =
  "現在の電力契約を見直す必要があるかを10項目の簡易チェックで確認。契約内容・料金推移・満足度など、法人担当者が自社の状況を素早く棚卸しできる診断ページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 自己診断",
    "法人 電気料金 見直し チェック",
    "電力契約 見直すべきか",
    "法人電力 自己診断",
    "電気料金 見直し タイミング",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/self-diagnosis-contract-review",
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

const checkItems = [
  {
    label: "直近1年間で電気料金が目に見えて上がった",
    note: "料金の上昇は見直しの最も基本的なきっかけです。燃料費調整額・市場価格調整額・容量拠出金など、変動要素が増えているか確認しましょう。",
    weight: "high",
  },
  {
    label: "現在の契約プランが固定型か市場連動型か、正確に把握していない",
    note: "プランの種類によってリスク構造が大きく異なります。請求書や契約書でプラン名を確認し、料金変動の仕組みを理解することが見直しの前提になります。",
    weight: "high",
  },
  {
    label: "契約の満了日・更新時期を把握していない",
    note: "自動更新で1年延長されるケースがあります。満了の3〜6か月前から動き始めることが、選択肢を広げるうえで重要です。",
    weight: "high",
  },
  {
    label: "現在の電力会社から値上げ通知を受け取ったことがある",
    note: "値上げ通知を受けた後は、現行プランの条件が変わっている可能性があります。改めて見積を取り、比較することが有効です。",
    weight: "high",
  },
  {
    label: "過去2年以内に電力契約を比較・見直ししていない",
    note: "電力市場は2021年以降に大きく変化しました。2年以上見直しをしていない場合、現行プランが現在の相場と乖離している可能性があります。",
    weight: "medium",
  },
  {
    label: "請求書に「市場価格調整額」や「容量拠出金」が加算されているか確認したことがない",
    note: "これらの項目は近年新たに導入された変動費用です。加算されているかどうか、また月々の変動幅がどの程度かを確認することが見直し判断の材料になります。",
    weight: "medium",
  },
  {
    label: "現在のプランの「燃料費調整額に上限があるか」を知らない",
    note: "上限なしの市場連動プランでは、燃料価格が高騰した際に調整額が青天井になります。上限設定の有無はリスク管理上の重要ポイントです。",
    weight: "medium",
  },
  {
    label: "電力使用量が過去と比べて大きく変わった（増加・減少どちらも）",
    note: "使用量が変わると最適な契約プランも変わります。特に大幅増加した場合は、現行の契約電力（kW）設定が割高になっていないか確認が必要です。",
    weight: "medium",
  },
  {
    label: "複数拠点を持つが、まとめて見直しを検討したことがない",
    note: "複数拠点を一括で見直すと、交渉力が上がり、より有利な条件を引き出せる場合があります。拠点別の契約を横断的に確認するタイミングです。",
    weight: "low",
  },
  {
    label: "再エネ・脱炭素目標に関連して、電力調達の方針を整理する必要がある",
    note: "サステナビリティ要件（RE100・SBT等）の対応や、非化石証書・グリーン電力調達のニーズがある場合は、コストと環境価値の両面から見直しを検討する価値があります。",
    weight: "low",
  },
];

export default function SelfDiagnosisContractReviewPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人向け電力契約見直し自己診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          「今の電力契約を見直すべきか」を判断するための簡易診断ページです。10項目のチェックを通じて、現状の課題を素早く整理できます。すべての項目に回答することで、見直しの優先度を自分で把握できます。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          総務・経理・施設管理・購買など、電力契約に関わる法人担当者が、初期の状況確認として活用できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自社の電力契約に見直しの必要性があるかの判断基準</li>
            <li>10項目の診断チェックリストと各項目の意味</li>
            <li>チェックが多い場合・少ない場合それぞれの対応方針</li>
            <li>見直しを始めるうえで次にとるべきアクション</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断の使い方</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の10項目について、自社の現状と照らし合わせてください。「当てはまる」と感じた項目が多いほど、今すぐ見直しを検討する価値が高い状況といえます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <p className="text-sm font-semibold text-red-700">重要度：高</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                1つでも該当する場合、早急な確認を推奨します。
              </p>
            </div>
            <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-700">重要度：中</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                複数該当する場合、見直しの準備を始めることが有効です。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-700">重要度：低</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                今後の方針として検討の参考にしてください。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">重要度：高 ― すぐに確認すべき項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            1項目でも該当する場合は、現行の契約条件を早急に確認することを推奨します。
          </p>
          <div className="mt-4 space-y-3">
            {checkItems
              .filter((item) => item.weight === "high")
              .map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg border border-red-100 bg-red-50 p-4"
                >
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
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">重要度：中 ― 近く対応を検討したい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数該当する場合、見直しに向けた情報収集・準備を始めることが有効です。
          </p>
          <div className="mt-4 space-y-3">
            {checkItems
              .filter((item) => item.weight === "medium")
              .map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg border border-amber-100 bg-amber-50 p-4"
                >
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
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">重要度：低 ― 中長期的に検討したい項目</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            すぐに対応が必要な項目ではありませんが、今後の方針検討の参考にしてください。
          </p>
          <div className="mt-4 space-y-3">
            {checkItems
              .filter((item) => item.weight === "low")
              .map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果の見方と次のアクション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            チェック数と重要度に応じた対応の目安を以下に示します。あくまで参考ですが、優先度を判断する材料として活用してください。
          </p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「高」に1つ以上該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  まず現行の契約書と直近12か月分の請求書を手元に用意してください。契約満了日と中途解約条件を確認したうえで、見積依頼先のリストアップを始めることを推奨します。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  重要度「中」に複数該当する場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  見直しの準備段階として、まずシミュレーターで現行契約の上振れリスクを試算しましょう。リスクの数値を社内共有することで、見直し着手の判断を得やすくなります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  該当項目が少ない・ほとんどない場合
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  現時点では緊急性は低いと考えられます。ただし、次回の契約更新時期の把握と、年1回程度の定期的な料金チェックは続けることをおすすめします。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しを始めるための整理ポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            診断後に見直しを進める場合、以下の順で情報を整理すると効率よく進めることができます。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約書から「プラン名・契約期間・満了日・中途解約条件」を確認する</li>
            <li>直近12か月分の請求書から「基本料金・変動費用項目・月間使用量」を抽出する</li>
            <li>シミュレーターで現行プランの上振れリスクを試算する</li>
            <li>社内での見直し目的・比較軸を事前に共有する</li>
            <li>複数の電力会社から見積を取り、条件・リスク・総額で比較する</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            詳細な手順については{" "}
            <Link
              href="/business-electricity-contract-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しチェックリスト
            </Link>{" "}
            もあわせてご覧ください。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="診断結果をもとに、次のステップへ進むためのページをご紹介します。"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し前の準備で確認したい情報・書類・社内調整ポイントを一覧で整理。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "どのタイミングで見直しを始めるべきか、判断基準と行動指針を解説。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型プランの違い",
              description: "2つのプランのリスク・コスト構造の違いを比較して理解する。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の各項目の意味と、見直し判断に使える確認ポイントを解説。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "更新時期から逆算して、いつ見直しを始めるべきかを確認する。",
            },
            {
              href: "/quotation-comparison-pre-check",
              title: "見積比較前チェック診断",
              description: "見積を依頼する前に揃えておくべき情報・資料を確認する。",
            },
          ]}
        />

        <ContentCta
          heading="現行契約のリスクをシミュレーターで確認する"
          description="診断で見直しの必要性を確認したら、次はシミュレーターで現行プランの上振れリスクを数値で把握しましょう。社内説明の根拠資料にも活用できます。"
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
