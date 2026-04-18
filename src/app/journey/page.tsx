import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../../components/seo/JsonLd";

const pageTitle = "法人電気料金 一気通貫ジャーニー｜読む→考える→診断→行動";
const pageDescription =
  "法人電気料金の見直しを「①読む（基礎理解）②考える（比較・判断）③診断する（シミュレーション）④行動する（社内合意・契約切替）」の4ステップで一気通貫に進めるガイドです。各ステップの推奨コンテンツと所要時間を提示します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "https://simulator.eic-jp.org/journey" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/journey",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: pageDescription, images: ["/twitter-default.png"] },
};

type StepAction = { label: string; href: string; note?: string };
type Step = {
  phase: string;
  title: string;
  time: string;
  goal: string;
  actions: StepAction[];
  tools?: StepAction[];
};

const STEPS: Step[] = [
  {
    phase: "① 読む",
    title: "基礎理解と現状把握",
    time: "15〜60分",
    goal: "請求書の内訳と上昇要因、契約メニューの選択肢を把握する。",
    actions: [
      { label: "基礎から知る", href: "/articles/basic", note: "請求書・内訳の見方" },
      { label: "料金が上がる理由", href: "/articles/price-increase", note: "燃料・市場・制度・補助金終了の4要因" },
      { label: "契約メニューの違い", href: "/articles/plan-types", note: "固定 vs 市場連動" },
    ],
    tools: [
      { label: "請求書チェックシート（DL）", href: "/downloads/bill-check-sheet.md" },
    ],
  },
  {
    phase: "② 考える",
    title: "比較・判断軸の整理",
    time: "30〜90分",
    goal: "自社の使用実態・業種・リスク耐性から判断軸を揃える。",
    actions: [
      { label: "見直しポイントを知る（4ステップ）", href: "/articles/review-points", note: "状況確認→比較準備→比較・交渉→切替" },
      { label: "相場・削減効果", href: "/articles/benchmarks", note: "業種×規模相場マトリクス" },
      { label: "業種別ガイド", href: "/articles/industry-guide", note: "業種×プラン適性マトリクス" },
      { label: "リスクシナリオ別", href: "/articles/risk-scenarios", note: "猛暑・円安・地政学・災害" },
    ],
    tools: [
      { label: "5項目チェックリスト（DL）", href: "/downloads/five-point-review-checklist.md" },
      { label: "見積比較表（DL）", href: "/downloads/quotation-comparison.csv" },
    ],
  },
  {
    phase: "③ 診断する",
    title: "シミュレーション・比較診断",
    time: "10〜30分",
    goal: "自社条件で上昇リスクと契約メニュー適性を定量確認する。",
    actions: [
      { label: "料金上昇リスク シミュレーター", href: "/simulate", note: "30秒で診断" },
      { label: "料金メニュー 比較診断", href: "/compare", note: "固定 vs 市場連動" },
      { label: "業種×規模 ベンチマークツール", href: "/benchmark", note: "業種平均との乖離" },
    ],
    tools: [
      { label: "セルフチェックツール一覧", href: "/articles/diagnostic-tools" },
    ],
  },
  {
    phase: "④ 行動する",
    title: "社内合意と契約切替",
    time: "1〜3か月",
    goal: "稟議を通し、契約切替を実施して切替後の確認まで完了する。",
    actions: [
      { label: "社内説明・稟議", href: "/articles/internal-explanation", note: "説明先別の論点" },
      { label: "経営層・CFO向け", href: "/articles/for-executives", note: "財務インパクトと取締役会報告" },
      { label: "緊急対応（必要な場合）", href: "/articles/emergency-response", note: "初動フロー" },
      { label: "契約書・約款の読み方", href: "/articles/contract-legal", note: "法務確認" },
    ],
    tools: [
      { label: "稟議書テンプレ（DL）", href: "/downloads/approval-template.md" },
      { label: "取締役会報告テンプレ（DL）", href: "/downloads/board-report-template.md" },
      { label: "お問い合わせ・ご相談", href: "/contact" },
    ],
  },
];

export default function JourneyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "一気通貫ジャーニー" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">一気通貫ジャーニー</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-300 bg-gradient-to-br from-sky-50 to-white p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            読む → 考える → 診断する → 行動する
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「情報を読むだけ」で終わらせず、見直し実務の完了まで一気通貫で進めるためのガイドです。
            4ステップそれぞれに推奨コンテンツ・所要時間・ダウンロード素材を配置しました。
          </p>
        </header>

        <section className="mt-6" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="sr-only">4ステップ</h2>
          <ol className="relative space-y-6 border-l-2 border-sky-200 pl-6">
            {STEPS.map((step, idx) => (
              <li key={step.phase} className="relative">
                <span
                  className="absolute -left-[33px] top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-sky-500 text-sm font-bold text-white shadow"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <article className="rounded-xl border border-sky-200 bg-white p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900">
                      {step.phase}｜{step.title}
                    </h3>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                      所要時間: {step.time}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    <strong>目標:</strong> {step.goal}
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">推奨コンテンツ</h4>
                      <ul className="mt-2 space-y-1.5 text-sm">
                        {step.actions.map((a) => (
                          <li key={a.href}>
                            <Link href={a.href} className="text-sky-700 underline-offset-2 hover:underline">
                              → {a.label}
                            </Link>
                            {a.note ? <span className="ml-1 text-xs text-slate-500">（{a.note}）</span> : null}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {step.tools ? (
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">ツール・DL素材</h4>
                        <ul className="mt-2 space-y-1.5 text-sm">
                          {step.tools.map((t) => (
                            <li key={t.href}>
                              <Link href={t.href} className="text-sky-700 underline-offset-2 hover:underline">
                                📥 {t.label}
                              </Link>
                              {t.note ? <span className="ml-1 text-xs text-slate-500">（{t.note}）</span> : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-xl border-2 border-sky-400 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-slate-900">次のアクションを選ぶ</h2>
          <p className="mt-2 text-sm leading-7 text-slate-700">
            今の状況に応じて、最初の一歩を決めましょう。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Link
              href="/simulate"
              className="rounded-lg border-2 border-sky-500 bg-sky-600 p-4 text-center text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              まず30秒で上昇リスクを診断する
            </Link>
            <Link
              href="/articles/basic"
              className="rounded-lg border border-slate-300 bg-white p-4 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              基礎から読み進める
            </Link>
            <Link
              href="/concierge"
              className="rounded-lg border border-slate-300 bg-white p-4 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              AI コンシェルジュで質問する
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
