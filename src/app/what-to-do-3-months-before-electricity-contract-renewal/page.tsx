import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "法人の電力契約更新の3か月前にやること｜見積比較と社内準備の進め方";
const pageDescription =
  "法人の電力契約更新が3か月後に迫ったとき、何から始めるべきかを時系列で解説。請求書の整理、見積依頼、社内共有、比較判断まで、実務に沿った準備手順を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 更新 3か月前",
    "法人 電力契約 更新 準備",
    "電力契約 見直し スケジュール",
    "電気 契約更新 いつから",
    "法人 電力 見積 タイミング",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/what-to-do-3-months-before-electricity-contract-renewal",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/what-to-do-3-months-before-electricity-contract-renewal",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const timelineSteps = [
  {
    timing: "3か月前",
    title: "現行契約の確認と情報整理",
    tasks: [
      "契約満了日・自動更新条項・解約予告期限を確認する",
      "直近12か月の請求書を収集し、使用量・請求額・契約電力の推移を把握する",
      "現行契約の料金体系を整理する（固定か市場連動か、燃料費調整額の扱いなど）",
      "供給地点特定番号を請求書から確認する",
      "中途解約条項（違約金・予告期間）の有無を確認する",
    ],
  },
  {
    timing: "2.5〜2か月前",
    title: "見積依頼の準備と発注",
    tasks: [
      "見積を依頼する電力会社の候補をリストアップする",
      "見積依頼に必要な資料を整理する（請求書写し、使用量データ、施設情報など）",
      "見積依頼書を作成し、比較条件を揃えるための前提（使用量、契約電力）を明記する",
      "複数社に同時に見積を依頼する（最低2〜3社が目安）",
      "回答期限を明確にして依頼する（2週間程度が目安）",
    ],
  },
  {
    timing: "2〜1.5か月前",
    title: "見積の受領と比較検討",
    tasks: [
      "受領した見積書の前提条件が揃っているか確認する",
      "基本料金、電力量料金、燃料費調整額の扱い、契約条件を比較する",
      "単価だけでなく年間総額での比較を行う",
      "不明点があれば見積先に確認する（燃料費調整額の上限有無、容量拠出金の扱いなど）",
      "比較表を作成し、社内説明用に整理する",
    ],
  },
  {
    timing: "1.5〜1か月前",
    title: "社内共有と意思決定",
    tasks: [
      "比較結果を関係者（上司、経理、施設管理など）に共有する",
      "固定プランと市場連動プランの違いを説明し、選択の方向性を確認する",
      "稟議が必要な場合は稟議書を作成する",
      "経営層や承認者への説明を行う",
      "契約先を決定する",
    ],
  },
  {
    timing: "1か月〜2週間前",
    title: "契約手続きの実施",
    tasks: [
      "選定した電力会社に契約の意思を伝える",
      "契約書の内容を確認する（契約期間、単価、解約条件など）",
      "必要な書類に署名・捺印し、契約手続きを完了する",
      "切替に伴うスケジュールを確認する（工事の有無、切替日など）",
      "現行の電力会社への解約通知が必要な場合は手続きする",
    ],
  },
];

export default function WhatToDo3MonthsBeforeRenewalPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約更新の3か月前にやること
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の更新時期が近づいたとき、「もう少し早く動いておけばよかった」という声はよく聞かれます。見積の取得から比較検討、社内の合意形成、契約手続きまでを考えると、3か月前からの着手が実務的な目安になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、契約更新の3か月前から満了日までの準備手順を時系列で整理しています。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>なぜ3か月前から動きたいのか</li>
            <li>時系列で整理した準備手順</li>
            <li>見積依頼から比較検討までの流れ</li>
            <li>社内共有・意思決定の進め方</li>
            <li>シミュレーターの活用タイミング</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ3か月前から動きたいのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しには、情報収集・見積取得・比較検討・社内合意・手続き完了まで、想定以上に時間がかかります。以下のような理由から、3か月前の着手が推奨されます。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積の取得に1〜2週間、複数社を比較する場合はさらに時間がかかる</li>
            <li>社内の承認プロセス（稟議・経営層説明）に1〜2週間必要なケースが多い</li>
            <li>契約手続き自体に1〜2週間かかる</li>
            <li>自動更新条項がある場合、更新拒否の申出期限が1〜2か月前に設定されていることがある</li>
            <li>時間が足りないと「とりあえず現行で更新」という判断になりやすく、見直しの機会を逃す</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新のタイミングの考え方は{" "}
            <Link
              href="/when-to-review-electricity-contract"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人が電力契約を見直すタイミング
            </Link>{" "}
            でも確認できます。
          </p>
        </section>

        {timelineSteps.map((step, index) => (
          <section
            key={step.timing}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                {index + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-sky-600">{step.timing}</p>
                <h2 className="text-xl font-semibold text-slate-900">{step.title}</h2>
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {step.tasks.map((task) => (
                <li
                  key={task}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{task}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            シミュレーターをどう使うか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            契約更新の準備では、以下の2つのタイミングでシミュレーターを活用するのが効果的です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">情報整理の段階（3か月前）</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                現行契約の条件でシミュレーションを行い、年間の上振れリスク幅を確認する。「なぜ見直すのか」の根拠資料になる。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">比較検討の段階（2か月前）</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                受領した見積の条件でシミュレーションを行い、候補プラン間のコスト差やリスク差を数値で確認する。比較表と合わせて社内説明に使える。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約更新で見落としやすいこと
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>自動更新条項の申出期限を過ぎてしまう</li>
            <li>見積の前提条件がそろっておらず、正確な比較ができない</li>
            <li>燃料費調整額や容量拠出金の扱いを確認せず、単価だけで判断する</li>
            <li>社内の承認プロセスの所要時間を見積もらない</li>
            <li>現行契約の解約予告期間を確認していない</li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの準備で確認すべき全項目を一覧で整理。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書を受け取った際にどこを比較すればよいか。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書から見積比較に使う情報を整理する方法。",
            },
            {
              href: "/how-to-explain-electricity-cost-review-internally",
              title: "電気料金見直しを社内で説明するときのポイント",
              description: "比較結果を社内でどう伝えるかの論点整理。",
            },
            {
              href: "/when-to-review-electricity-contract",
              title: "法人が電力契約を見直すタイミング",
              description: "見直しのきっかけと判断基準の確認。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時に見落としやすい観点の整理。",
            },
          ]}
        />

        <ContentCta
          heading="まず現行契約のリスクを確認する"
          description="更新準備の第一歩として、現行契約の条件で年間の上振れリスクを確認してみてください。見直しの必要性を数値で把握できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="what-to-do-3-months-before-electricity-contract-renewal" />
      </div>
    </main>
  );
}
