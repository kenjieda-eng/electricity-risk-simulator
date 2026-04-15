import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "特別高圧契約の見直しで確認したいこと｜大規模契約の比較と注意点";
const pageDescription =
  "特別高圧電力契約を見直す際に確認すべき着眼点を解説。大規模需要家特有の料金構造、個別交渉の進め方、見積比較の注意点、切替リスクの管理方法を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧 契約 見直し",
    "特別高圧 料金 比較",
    "大規模需要家 電力 交渉",
    "特別高圧 電力会社 切替",
    "特別高圧 入札",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/extra-high-voltage-contract-review-points",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/extra-high-voltage-contract-review-points",
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
    point: "契約電力・受電電圧の確認",
    detail:
      "特別高圧の受電電圧（20kV・60kV・140kV以上）と契約電力を確認します。受電電圧が高いほど単価が下がる傾向がありますが、受電設備の規模・維持コストも増大します。",
  },
  {
    point: "個別交渉・入札の実施",
    detail:
      "特別高圧では使用量が非常に大きいため、複数の電力会社に入札形式で見積を競わせることで有利な条件を引き出せる可能性があります。標準メニューだけでなく個別交渉条件も検討します。",
  },
  {
    point: "燃料費調整額・市場価格変動リスクの管理",
    detail:
      "使用量が大きい分、燃調や市場価格の変動が年間コストに与える影響も非常に大きくなります。上限設定・価格ヘッジの条件を重要な比較ポイントとして位置づけます。",
  },
  {
    point: "長期固定と短期変動のバランス",
    detail:
      "特別高圧では複数年の長期固定契約と、年次更新の短期契約の選択肢があります。価格確定性と柔軟性のバランスを自社の経営方針に合わせて検討します。",
  },
  {
    point: "供給信頼性・サポート体制の確認",
    detail:
      "特別高圧の供給停止は事業に甚大な影響を与えます。緊急時の対応体制、バックアップ供給の有無、担当者の対応力を確認します。",
  },
  {
    point: "受電設備の維持管理コスト",
    detail:
      "特別高圧受電には大型の変電設備が必要です。設備の点検・維持管理は法律で義務付けられており、年間コストとして把握する必要があります。",
  },
];

export default function ExtraHighVoltageContractReviewPointsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">特別高圧契約の見直し</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧契約の見直しで確認したいこと
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧（20kV以上）で受電する法人は、日本国内でも比較的大規模な需要家です。年間の電力コストは数億円〜数十億円規模に達することもあり、契約条件の見直しによって削減できる金額も非常に大きくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          一方で、特別高圧の契約見直しは高圧より複雑です。個別交渉・入札の運営、受電設備の維持管理、供給信頼性の評価など、確認すべき要素が多岐にわたります。このページでは、特別高圧需要家が見直しを進める際の着眼点を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>特別高圧の料金構造の特徴</li>
            <li>大規模契約の見直し時の6つの確認ポイント</li>
            <li>入札・個別交渉の進め方の考え方</li>
            <li>切替リスクの管理方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧の料金構造の特徴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の料金構造は高圧と同様に基本料金＋電力量料金が基本ですが、以下の点で異なります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">単価水準が低い：</span>
              スケールメリットにより、高圧より1kWhあたりの単価が低くなります。ただし受電設備の維持管理コストが加わります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">個別交渉が主流：</span>
              特別高圧では標準メニューのみならず、個別交渉による特別条件が提示されることがあります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">契約期間が長い場合がある：</span>
              長期固定条件を提示される場合があり、価格の確定性と引き換えに一定期間の拘束が生じます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">需給調整・バランシングコスト：</span>
              一部のプランでは需給調整コストが別途発生する場合があります。
            </li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧との基本的な違いは{" "}
            <Link
              href="/high-voltage-vs-extra-high-voltage-differences"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              高圧と特別高圧の違い
            </Link>
            {" "}で確認できます。
          </p>
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
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            入札・個別交渉の進め方の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の見直しでは、複数の電力会社に入札形式で見積を競わせることが最もコスト削減効果を高める方法です。以下の流れで進めます。
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>過去12〜24カ月の詳細な使用量データ（30分コマ別）を準備する。</li>
            <li>入札参加資格のある電力会社・新電力をリストアップする。</li>
            <li>仕様書（使用量データ・希望条件・評価基準）を作成し、一斉配布する。</li>
            <li>提出された見積を年間総コストで比較する（燃調・賦課金含む）。</li>
            <li>上位候補と個別交渉を行い、最終条件を確定する。</li>
            <li>供給実績・経営安定性を確認したうえで切替を決定する。</li>
          </ol>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            切替リスクの管理方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧の切替は影響範囲が大きいため、以下のリスクに事前に対処することが重要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">供給停止リスク：</span>
              切替先の電力会社が経営破綻・供給停止となった場合の代替手配計画を持っておきます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">切替タイミングの調整：</span>
              現行契約の解約日と新契約の開始日を一致させる必要があります。手続きには数カ月かかる場合があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">受電設備の互換性確認：</span>
              切替先の供給電圧が現在の受電設備と対応しているかを確認します。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="extra-high-voltage-contract-review-points" terms={["特別高圧", "高圧電力", "燃料費調整額", "市場価格調整額", "容量拠出金", "契約電力", "市場連動プラン"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/high-voltage-vs-extra-high-voltage-differences",
              title: "高圧と特別高圧の違い",
              description: "特別高圧契約の基本的な位置づけと高圧との比較。",
            },
            {
              href: "/high-voltage-contract-review-points",
              title: "高圧契約の見直しで確認したいこと",
              description: "高圧需要家向けの見直し着眼点との比較参考。",
            },
            {
              href: "/what-is-power-factor",
              title: "力率とは何か",
              description: "特別高圧料金にも影響する力率の仕組み。",
            },
            {
              href: "/high-voltage-market-linked-considerations",
              title: "高圧・特別高圧で市場連動を考えるときの注意点",
              description: "大口需要家が市場連動プランを検討する際の注意点。",
            },
            {
              href: "/last-resort-supply-extra-high-voltage",
              title: "特別高圧で最終保障供給を使うときの注意点",
              description: "切替リスクが顕在化した場合の最終保障供給の位置づけ。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "特別高圧を含む全般的な見直し確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="特別高圧の年間コストをシミュレーターで確認する"
          description="契約電力・使用量・プランタイプをもとに、年間電気料金と見直し効果をシミュレーターで試算できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/compare", label: "料金メニューを比較する" },
            { href: "/how-to", label: "使い方を見る" },
          ]}
        />
      </section>
    </main>
  );
}
