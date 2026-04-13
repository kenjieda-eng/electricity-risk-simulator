import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import DiagnosisClient from "./DiagnosisClient";

const pageTitle =
  "業種別リスク診断｜自社の業種から見た電気料金リスクと対策";
const pageDescription =
  "製造業・小売業・飲食業・医療・オフィスなど業種ごとの電気料金リスクの特徴と、優先すべき対策を整理。自社の業種特性から見た電力コスト管理のポイントをチェックします。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "業種別 電気料金 リスク",
    "製造業 電力コスト リスク",
    "小売業 電気代 リスク",
    "法人 業種別 電力コスト",
    "電気料金 業種 診断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/industry-risk-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/industry-risk-diagnosis",
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


export default function IndustryRiskDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">業種別リスク診断</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          業種別リスク診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の上昇リスクは「どの業種か」によって影響の大きさと対策の優先順位が異なります。製造業と小売業では電力使用量の規模が異なりますし、医療施設では安定供給の重要性が格別に高い。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、主要な業種ごとに電力使用の特性・リスクの傾向・優先すべき対策を整理します。自社の業種に近いものを確認し、見直しの方向性を検討する参考にしてください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>業種ごとの電力使用特性とリスク水準の違い</li>
            <li>製造業・小売・飲食・医療・オフィス・宿泊業の6業種別リスクと対策</li>
            <li>業種特性に応じた優先アクションの整理</li>
            <li>全業種共通で確認すべき基本チェックポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">全業種共通の基本確認ポイントと業種選択</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種を問わず、以下の確認は見直しの前提として全法人担当者に共通です。チェックしながら確認し、その後自社の業種を選択してリスクと対策を確認してください。
          </p>
          <div className="mt-4">
            <DiagnosisClient />
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">業種別リスク診断を終えたら</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自社の業種特性とリスクを確認したら、次のステップに進みましょう。
          </p>
          <div className="mt-4 space-y-3">
            {[
              { step: 1, text: "シミュレーターで現行プランの上振れリスクを業種の使用量規模で試算する" },
              { step: 2, text: "固定型・市場連動型のどちらが業種特性に合っているかを確認する" },
              { step: 3, text: "業種に応じた設備投資（太陽光・蓄電池等）のコスト試算を行う" },
              { step: 4, text: "見積比較を実施し、業種特性に応じた条件で複数社を比較する" },
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
          intro="業種別リスク診断の後、さらに情報を深めるためのページです。"
          links={[
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "見直しの必要性があるかを10項目で確認する診断ページ。",
            },
            {
              href: "/fixed-vs-market-quick-diagnosis",
              title: "固定プラン向き・市場連動向き診断",
              description: "業種特性に合ったプランの方向性を確認する。",
            },
            {
              href: "/solar-suitability-diagnosis",
              title: "太陽光導入向き不向き診断",
              description: "業種特性から見て自家消費型太陽光が向くかを確認。",
            },
            {
              href: "/battery-suitability-diagnosis",
              title: "蓄電池導入向き不向き診断",
              description: "業種特性から見て蓄電池導入が向くかを確認。",
            },
            {
              href: "/supermarket-electricity-cost-review",
              title: "スーパーマーケットの電力コスト見直し",
              description: "小売業に特化した電力コスト管理と見直しのポイントを解説。",
            },
            {
              href: "/which-companies-benefit-most-from-review",
              title: "電力契約見直しで最も恩恵が大きい法人の特徴",
              description: "見直し効果が高い企業の条件を業種含めて解説。",
            },
          ]}
        />

        <ContentCta
          heading="業種に合わせたリスクをシミュレーターで確認する"
          description="業種特性から見たリスクを把握したら、シミュレーターで実際の使用量・プラン条件をもとに数値で確認しましょう。"
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
