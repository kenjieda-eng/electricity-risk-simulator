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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["municipality"];


const pageTitle = "指定管理施設の電力契約は誰がどう見直すか｜自治体向け";
const pageDescription =
  "指定管理者制度下の電力契約について、自治体と指定管理者の役割分担と見直しの進め方を整理します。";
const pageUrl = "https://simulator.eic-jp.org/municipality-designated-manager-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "指定管理 電力契約",
    "指定管理者 電気代",
    "指定管理施設 電力見直し",
    "自治体 指定管理 電気料金",
  ],
  alternates: { canonical: pageUrl },
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

const contractPatternRows = [
  {
    pattern: "自治体が契約主体",
    contractParty: "自治体（設置者）",
    payment: "自治体の予算から支払い",
    bidSubject: "入札対象（公共調達ルール適用）",
    riskBearing: "コスト増加は自治体予算に直撃",
    flexibility: "低い（入札手続き必要）",
  },
  {
    pattern: "指定管理者が契約主体",
    contractParty: "指定管理者（管理者）",
    payment: "指定管理料の中から支払い",
    bidSubject: "原則入札対象外（民間契約）",
    riskBearing: "指定管理料が不足するリスクあり",
    flexibility: "高い（自由に切り替え可）",
  },
];

const issues = [
  {
    title: "指定管理料に電気代が含まれる場合の高騰リスク",
    desc: "指定管理料に電気代相当額が包括されている場合、電気料金が想定を超えて上昇すると指定管理者の財務を圧迫します。管理者が費用削減のために施設サービスを縮小する、あるいは指定管理を返上するリスクがあります。",
  },
  {
    title: "管理者任せで実態が見えない",
    desc: "指定管理者が電力契約を締結している場合、自治体側に使用量や単価の情報が共有されないことがあります。実態を把握できなければ、過剰なコストが発生していても是正できません。",
  },
  {
    title: "省エネ・脱炭素への取り組みにばらつき",
    desc: "電力契約の主体が管理者の場合、再エネ電力や省エネ機器への切り替えを自治体が主導できません。自治体全体の脱炭素目標との整合性が取れなくなる問題が生じます。",
  },
  {
    title: "次期指定管理者への引き継ぎ問題",
    desc: "電力契約が管理者名義で締結されている場合、指定管理期間終了時に契約の継承・中途解約の問題が発生します。解約違約金が誰の負担になるかがあいまいなケースがあります。",
  },
];

const reviewSteps = [
  {
    step: "STEP 1",
    title: "協定書・仕様書の確認",
    desc: "指定管理協定書および管理仕様書で、電力契約の契約主体（自治体か管理者か）・電気代の負担方法（指定管理料に含む・実費精算）を確認します。",
  },
  {
    step: "STEP 2",
    title: "実態の把握（使用量・単価・支払額）",
    desc: "管理者が契約主体の場合でも、情報提供義務を協定書に盛り込んでいれば使用量・単価・支払額の報告を求めることができます。情報開示を要請し現状を把握してください。",
  },
  {
    step: "STEP 3",
    title: "課題と改善方針の協議",
    desc: "把握した実態をもとに、コスト削減・脱炭素対応・リスク分担の観点から管理者と協議します。次期指定管理の公募条件に反映させる事項もこの段階でまとめます。",
  },
  {
    step: "STEP 4",
    title: "次期指定管理の公募条件の整理",
    desc: "現行の課題を解決するため、次期指定管理の公募仕様書に電力契約に関する条件（報告義務・再エネ対応・精算方法等）を明記します。自治体一括調達への参加義務化も検討してください。",
  },
];

const nextDesignationConditions = [
  "電力使用量・単価・支払額を四半期ごとに自治体に報告する義務を課す",
  "電力契約の変更・更新時は事前に自治体に届け出ることを義務化する",
  "電気代高騰時の精算ルール（上限超過分の実費支給等）を協定書に明記する",
  "自治体の一括調達（バンドリング）に参加する施設として指定する場合は契約主体を自治体とする",
  "再エネ電力・非化石証書の活用を努力義務または必須要件として設定する",
  "省エネ計画・省エネ実績の報告をモニタリング項目に追加する",
];

export default function MunicipalityDesignatedManagerElectricityPage() {
  return (
    <>
      <ArticleJsonLd
        headline="指定管理施設の電力契約は誰がどう見直すか｜自治体向け"
        description="指定管理者制度下の電力契約について、自治体と指定管理者の役割分担と見直しの進め方を整理します。"
        url="https://simulator.eic-jp.org/municipality-designated-manager-electricity"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "指定管理施設の電力契約は誰がどう見直すか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/municipality" className="underline-offset-2 hover:underline">自治体・公共向け</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">指定管理施設の電力契約</span>
      </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

      <header className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-700">MUNICIPALITY ／ 自治体・公共向け</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          指定管理施設の電力契約は誰がどう見直すか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          指定管理者制度が導入された公共施設では、電力契約の主体が「自治体」か「指定管理者」かによって
          コスト負担・調達の自由度・リスク負担が大きく異なります。
          電気料金高騰の影響を適切に管理するには、両者の役割分担を明確にし、
          協定書・仕様書に必要な条件を盛り込むことが不可欠です。
          制度の整理から見直しの進め方・次期指定管理への反映まで実務担当者向けに解説します。
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {/* 現状の整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">指定管理施設の電力契約：2つのパターン</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            指定管理施設の電力契約は、大きく「自治体が契約主体」と「指定管理者が契約主体」の2つに分かれます。
            どちらのパターンかによって、コスト負担・入札の要否・リスクの所在が異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">パターン</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">契約当事者</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">支払い主体</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">入札対象</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">コスト増加時のリスク</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-900">調達の柔軟性</th>
                </tr>
              </thead>
              <tbody>
                {contractPatternRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-indigo-700">{row.pattern}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.contractParty}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.payment}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.bidSubject}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.riskBearing}</td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">{row.flexibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* よくある課題 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">よくある4つの課題</h2>
          <div className="mt-4 space-y-4">
            {issues.map((item, i) => (
              <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{i + 1}. {item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 役割分担の整理 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">役割分担の整理：誰が契約し、誰が支払い、誰が見直すか</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            指定管理施設における電力契約の役割分担は、協定書・管理仕様書によって決まります。
            以下の3点を中心に整理してください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-700">誰が契約するか</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                自治体が一括調達に組み込む場合は自治体が契約主体となります。
                管理者が独自に調達する場合は管理者名義ですが、変更時の届出義務を課すことが望ましい。
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-700">誰が支払うか</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                自治体契約の場合は自治体予算から直接支払い。管理者契約の場合は指定管理料から支払いますが、
                電気代高騰分の精算ルールを協定書に明記しておく必要があります。
              </p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-700">誰が見直すか</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                管理者契約の場合でも、自治体は使用量・単価情報の報告を求め、省エネ・調達改善の方針を協議する
                主導的な役割を担うべきです。丸投げは問題の先送りになります。
              </p>
            </div>
          </div>
        </section>

        {/* 見直しの進め方 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">見直しの進め方：4ステップ</h2>
          <div className="mt-4 space-y-4">
            {reviewSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="flex-shrink-0 border-l-4 border-indigo-400 pl-4">
                  <p className="text-xs font-bold text-indigo-600">{s.step}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 電気代高騰時の精算ルール */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">電気代高騰時の精算ルールの設計</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            指定管理料に電気代が含まれる場合、電気料金の高騰により管理者の収支が悪化するリスクがあります。
            協定書に以下のような精算ルールを盛り込むことで、管理者と自治体のリスクを適切に分担できます。
          </p>
          <div className="mt-4 rounded-lg border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-semibold text-sky-800">精算ルールの設計例</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm leading-6 text-sky-700">
              <li>基準年度の電気代（単価×使用量）を「基準電気代」として協定書に明記する</li>
              <li>実績電気代が基準電気代を一定率（例：15%）超えた場合、超過分を実費精算する</li>
              <li>精算の上限額（例：年間200万円）を設け、自治体側のリスク上限も管理する</li>
              <li>精算の申請・審査・支払いの手続きを協定書の附属書類として整備する</li>
            </ul>
          </div>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">注意点</p>
            <p className="mt-1 text-sm leading-6 text-amber-700">
              精算ルールがないまま管理者に過大なコスト負担が続くと、管理者の経営悪化・指定管理返上につながります。
              一度返上が発生すると、自治体が直接運営するか代替の管理者を短期間で探す必要があり、行政コストが大幅に増大します。
              協定書締結時に精算ルールを盛り込んでおくことが最も合理的です。
            </p>
          </div>
        </section>

        {/* 次期指定時の条件 */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">次期指定管理の公募時に入れるべき電力関連条件</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            現在進行中の指定管理期間中は大きな変更が難しくても、次期指定管理の公募時に仕様書へ条件を追加することで
            問題を解決できます。以下の条件を検討してください。
          </p>
          <ul className="mt-3 list-disc pl-5 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            {nextDesignationConditions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </section>

      
      <MarketDataFaq items={__CATEGORY_FAQ__} />
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/municipality-facility-management-package",
              title: "公共施設の包括管理委託と電力契約の関係",
              description: "包括管理委託に電力調達を組み込む場合の考え方と留意点。",
            },
            {
              href: "/municipality-bundled-procurement",
              title: "公共施設の電力一括調達（バンドリング）の進め方",
              description: "複数施設の電力契約を一括調達するバンドリング手法のメリットと進め方。",
            },
            {
              href: "/municipality-annual-budget-impact",
              title: "電気料金高騰が自治体予算に与える影響",
              description: "電力コスト上昇が自治体財政・補正予算・事業縮小に与える影響を整理。",
            },
            {
              href: "/municipality-resident-service-impact",
              title: "電気料金高騰が住民サービスに与える影響",
              description: "コスト上昇が施設運営・サービス水準・住民負担に与える影響を解説。",
            },
            {
              href: "/subsidies-overview",
              title: "法人向け電力・省エネ補助金まとめ",
              description: "指定管理施設の省エネ改修に活用できる主要補助制度を横断比較。",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ContentCta
          heading="指定管理施設の電力コストを把握する"
          description="シミュレーターで公共施設の電力コスト水準を確認し、指定管理料の見直し検討にご活用ください。"
          links={[
            { href: "/", label: "シミュレーターで試算する" },
            { href: "/articles/municipality", label: "自治体向け記事一覧を見る" },
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
