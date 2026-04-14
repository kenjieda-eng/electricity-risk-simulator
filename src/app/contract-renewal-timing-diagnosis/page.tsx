import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";

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

export default function ContractRenewalTimingDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">契約更新タイミング診断</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
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
        <DiagnosisClient />

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

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">更新時期別のアクション</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在の契約更新までの残り期間によって、取るべきアクションと優先度が変わります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">更新までの期間</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">やるべきこと</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">優先度</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">注意点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">6か月前以上</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">現状把握・シミュレーション・社内方針の確認</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">低〜中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">余裕を持って情報収集できる最良のタイミング。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">3か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2〜3社へ見積依頼・比較・社内稟議準備を開始</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">中</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積〜比較〜稟議に最低2か月必要。今月中に依頼を出す。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">1か月前</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">見積比較・切替先確定・現行会社への解約申告を急ぐ</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-100 px-2 py-0.5 text-xs font-semibold text-red-700">高</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">時間が限られる。切替できない場合は現行更新も視野に入れる。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">期限切れ後</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自動更新・最終保障の確認と早急な切替先探索</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="rounded bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-800">緊急</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">自動更新・最終保障供給移行の両パターンを確認。今すぐ動く。</td>
              </tr>
            </tbody>
          </table>
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
    </main>
  );
}
