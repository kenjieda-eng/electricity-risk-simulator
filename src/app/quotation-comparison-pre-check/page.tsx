import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import DiagnosisClient from "./DiagnosisClient";

const pageTitle =
  "見積比較前チェック診断｜電力見積依頼を始める前に確認したいこと";
const pageDescription =
  "電力見積を依頼する前に確認すべき情報・資料・社内調整を診断チェックリスト形式で整理。準備不足のまま見積を取ると比較精度が下がるリスクを防ぐための実務チェックページです。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 見積 比較前 チェック",
    "電気料金 見積依頼 準備",
    "法人 電力見積 何を用意する",
    "電力契約 見積比較 準備リスト",
    "電気料金 見積 比較方法",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/quotation-comparison-pre-check",
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

export default function QuotationComparisonPreCheckPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          見積比較前チェック診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力見積の比較は「条件を揃えること」が精度の前提です。情報が不足したまま見積を依頼すると、前提条件がそろわない見積が届いたり、比較に使えない資料になってしまうことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見積依頼を始める前に確認・準備すべき事項を「必須情報」「あると有効な情報」「社内調整事項」「見積受領後の確認ポイント」の4カテゴリでチェックリスト形式で整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積依頼に必須の情報・書類一覧</li>
            <li>精度を高めるためにあると有効な情報</li>
            <li>見積依頼前に社内で確認すべき事項</li>
            <li>見積受領後の条件確認チェックリスト</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">なぜ準備が見積の質を左右するのか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の見積は「提供された情報の精度」に依存します。使用量データが不完全だと年間コストの試算精度が下がり、比較判断が難しくなります。また、供給地点特定番号が不明だと、そもそも見積計算を開始できない電力会社もあります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積の比較方法については{" "}
            <Link href="/compare-business-electricity-estimates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人の電気料金見積比較の方法
            </Link>{" "}
            もあわせて確認してください。
          </p>
        </section>

        <DiagnosisClient />

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">準備から見積比較までのステップ整理</h2>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "必須情報（供給地点特定番号・使用量・契約電力等）を揃える" },
              { step: 2, text: "シミュレーターで現行プランのリスクを試算し、社内説明の根拠を準備する" },
              { step: 3, text: "見直しの目的と比較軸を社内で共有する" },
              { step: 4, text: "2〜3社以上の電力会社に同一条件で見積依頼を出す" },
              { step: 5, text: "見積受領後、前提条件が揃っているかを確認してから比較を行う" },
              { step: 6, text: "年間総額・変動リスク・契約条件の3軸で比較し、社内承認を得る" },
            ].map(({ step, text }) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {step}
                </span>
                <p className="text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見積比較の準備から比較・判断まで、関連する情報をまとめました。"
          links={[
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の各項目の意味と、比較判断に使える確認ポイントを解説。",
            },
            {
              href: "/compare-business-electricity-estimates",
              title: "法人の電気料金見積比較の方法",
              description: "複数の見積を受け取ったときに、どう比較すべきかを解説。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "電力契約見直しチェックリスト",
              description: "見積依頼前の準備全般を網羅したチェックリスト。",
            },
            {
              href: "/bill-check-diagnosis",
              title: "請求書確認ポイント診断",
              description: "見積依頼に必要な情報を請求書から確認するチェックリスト。",
            },
            {
              href: "/contract-renewal-timing-diagnosis",
              title: "契約更新タイミング診断",
              description: "いつ見積依頼を始めるべきかを更新時期から逆算して確認。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "単価以外に確認したい比較軸を整理。見積比較の精度を高める。",
            },
          ]}
        />

        <ContentCta
          heading="見積比較の前にリスクを試算する"
          description="見積依頼を始める前にシミュレーターで現行プランの上振れリスクを確認しておくと、比較の判断基準として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="quotation-comparison-pre-check" />
      </div>
    </main>
  );
}
