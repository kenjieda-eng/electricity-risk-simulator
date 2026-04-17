import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "高圧契約の見直しで確認したいこと｜料金構造と契約条件の着眼点";
const pageDescription =
  "高圧電力契約を見直す際に確認すべき着眼点を解説。基本料金・デマンド・電力量料金・燃料費調整額の構造、複数社見積比較の注意点、切替時の手順を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧契約 見直し 法人",
    "高圧電力 料金 確認",
    "デマンド 基本料金 見直し",
    "高圧 電力会社 比較",
    "高圧契約 切替",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/high-voltage-contract-review-points",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-contract-review-points",
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

const reviewPoints = [
  {
    point: "デマンド（最大需要電力）の管理",
    detail:
      "高圧の基本料金はデマンド値（30分間の最大需要電力）に基づいて算定されます。デマンド値が実際の使用パターンに対して高止まりしていないかを確認します。デマンドコントローラーの設定見直しやピークカット施策でデマンドを下げると基本料金が削減できます。",
  },
  {
    point: "燃料費調整額の上限設定の有無",
    detail:
      "現在の契約プランに燃料費調整額の上限（キャップ）が設定されているかを確認します。上限なしのプランでは、LNG等の燃料価格が高騰した際に請求が大きく上振れするリスクがあります。",
  },
  {
    point: "固定プランと市場連動プランの選択",
    detail:
      "高圧需要家では市場連動プランを選ぶ選択肢もあります。使用量が大きい分、価格変動の影響も大きくなるため、リスク許容度と使用パターンを踏まえた慎重な判断が必要です。",
  },
  {
    point: "季節・時間帯別の料金区分の有無",
    detail:
      "高圧のプランには、季節別・時間帯別に電力量料金の単価が異なるものがあります。自社の使用パターン（昼間が多い/夜間が多いなど）に合った料金体系を選ぶことが重要です。",
  },
  {
    point: "契約期間・解約条件",
    detail:
      "高圧契約には1〜3年の契約期間が設定されることが多く、中途解約には違約金が発生するケースがあります。更新時期と解約条件を把握しておきます。",
  },
  {
    point: "力率割引の適用状況",
    detail:
      "現在の力率を確認し、割増が発生していないかをチェックします。力率が低い場合は進相コンデンサの点検・設置を検討します。",
  },
];

export default function HighVoltageContractReviewPointsPage() {
  return (
    <>
      <ArticleJsonLd
        headline="高圧契約の見直しで確認したいこと｜料金構造と契約条件の着眼点"
        description="高圧電力契約を見直す際に確認すべき着眼点を解説。基本料金・デマンド・電力量料金・燃料費調整額の構造、複数社見積比較の注意点、切替時の手順を詳しく説明します。"
        url="https://simulator.eic-jp.org/high-voltage-contract-review-points"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "高圧契約の見直しで確認したいこと" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">高圧契約の見直し</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧契約の見直しで確認したいこと
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力（6,600V受電）の契約は、低圧に比べて料金構造が複雑で、基本料金・電力量料金・燃料費調整額・力率割引など複数の要素が絡み合います。契約更新時や電力会社の変更を検討する際には、これらの要素を正確に把握して比較することが重要です。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、高圧契約を見直す際に確認すべき着眼点を整理します。担当者が「どこを確認すればよいか」を把握するための実践的なガイドです。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>高圧料金構造の基本とデマンド管理の重要性</li>
            <li>契約見直し時の6つの確認ポイント</li>
            <li>複数社見積比較の注意点</li>
            <li>切替検討時の手順</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            高圧料金の基本構造を把握する
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力契約の電気料金は、大きく分けると以下の要素で構成されます。見直しに先立って、現在の請求書でこれらの内訳を確認してください。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">基本料金（円/kW・月）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">デマンド値（最大需要電力）×単価。力率によって割引・割増。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">電力量料金（円/kWh）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">使用量×単価。季節・時間帯別の場合あり。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">燃料費調整額（円/kWh）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">燃料価格に連動して変動。上限設定の有無が重要。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">再エネ賦課金（円/kWh）</p>
              <p className="mt-1 text-sm leading-7 text-slate-700">制度負担。プランに関係なく発生。年度改定。</p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直し時の6つの確認ポイント
          </h2>
          <div className="mt-3 space-y-3">
            {reviewPoints.map((item) => (
              <div
                key={item.point}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.point}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            力率の詳しい仕組みは{" "}
            <Link
              href="/what-is-power-factor"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              力率とは何か
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            複数社見積比較の注意点
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧契約の見積書を複数社から取得して比較する際には、以下の点に注意することで正確な比較が可能になります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">同じ使用量データで見積を依頼する：</span>
              過去12カ月の月別使用量・デマンド値・力率を各社に提供し、同条件で比較します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">燃調の条件を統一して比較する：</span>
              現時点の燃調単価を固定した場合と変動した場合を分けて比較すると、プラン構造の差が明確になります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">初年度だけでなく複数年のコストを比較する：</span>
              燃調の扱いやエスカレーション条項（単価改定条件）によって、2年目以降のコストが変わることがあります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">年間総コストで比較する：</span>
              電力量料金の単価だけでなく、基本料金・燃調・賦課金を含めた年間総額で比較します。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            切替検討時の手順
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>現在の契約書・請求書で契約期間・更新時期・解約条件を確認する。</li>
            <li>過去12カ月の使用量・デマンド・力率データを準備する。</li>
            <li>複数の電力会社・新電力に見積書の提出を依頼する。</li>
            <li>年間総コストでの比較表を作成する（シミュレーターで試算可能）。</li>
            <li>切替候補の電力会社の供給安定性・サポート体制を確認する。</li>
            <li>社内稟議・決裁を得て、更新期日に合わせて切替手続きを進める。</li>
          </ol>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="high-voltage-contract-review-points" terms={["高圧電力", "燃料費調整額", "市場価格調整額", "容量拠出金", "契約電力", "デマンド値", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/high-voltage-vs-extra-high-voltage-differences",
              title: "高圧と特別高圧の違い",
              description: "高圧契約の基本的な位置づけと特別高圧との比較。",
            },
            {
              href: "/what-is-power-factor",
              title: "力率とは何か",
              description: "高圧の基本料金に影響する力率の仕組みと改善方法。",
            },
            {
              href: "/extra-high-voltage-contract-review-points",
              title: "特別高圧契約の見直しで確認したいこと",
              description: "より大規模な需要家向けの契約見直しの着眼点。",
            },
            {
              href: "/high-voltage-market-linked-considerations",
              title: "高圧・特別高圧で市場連動を考えるときの注意点",
              description: "高圧需要家が市場連動プランを検討する際の注意点。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "高圧見積書を正しく読んで比較する方法。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "高圧契約を含む全般的な見直し確認項目。",
            },
            {
              href: "/fixed-price-plan",
              title: "固定プランとは",
              description: "高圧契約での固定プラン選択の判断軸と特徴。",
            },
          ]}
        />

        <ContentCta
          heading="高圧契約の年間コストをシミュレーターで確認する"
          description="デマンド値・使用量・プランタイプをもとに、年間電気料金と見直し効果をシミュレーターで試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
    </>
  );
}
