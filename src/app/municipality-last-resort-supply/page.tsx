import type { Metadata } from "next";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle = "自治体が最終保障供給になったとき 何が起きるかを整理";
const pageDescription =
  "自治体や公共施設が最終保障供給になる背景、入札不調との関係、予算や契約事務への影響、次の対応で確認したいことを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "最終保障供給 自治体",
    "最終保障供給 入札不調",
    "自治体 電気料金 高騰",
    "公共施設 最終保障供給",
    "最終保障供給 調達 実務",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/municipality-last-resort-supply",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/municipality-last-resort-supply",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "自治体が最終保障供給になったとき",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

export default function MunicipalityLastResortSupplyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">自治体が最終保障供給になったとき何が起きるか</h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          自治体では、電力調達を入札で進めることが多く、価格高騰局面では入札不調が発生することがあります。その結果、次契約までの暫定対応として
          最終保障供給を利用するケースが見られます。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">自治体で最終保障供給が発生する主な背景</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>入札価格と市場環境の乖離</li>
            <li>小売事業者側の供給条件厳格化</li>
            <li>既存契約満了までに次契約が成立しない</li>
            <li>公共施設の供給停止を避ける必要性</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">入札不調と最終保障供給の関係</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            入札不調が起きると、通常契約が決まるまでの期間をどうつなぐかが課題になります。最終保障供給はこの空白期間を埋める制度ですが、
            それ自体が調達完了ではありません。次回調達条件の再設計と並行して進める必要があります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">予算・契約事務で気をつけたいこと</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            問題は料金だけではなく、予算措置、契約手続き、議会説明や庁内調整の実務です。学校、庁舎、上下水道、病院など止めにくい施設ほど、
            影響範囲の整理と説明準備が重要になります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">次回調達までに準備したいこと</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>施設別の使用実績と受電区分の整理</li>
            <li>仕様条件・評価項目の再点検</li>
            <li>契約期間・リスク分担の見直し</li>
            <li>調達スケジュールの前倒し検討</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">民間企業との違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            民間企業よりも調達手続きや説明責任の比重が高く、意思決定に時間を要しやすい点が自治体実務の特徴です。したがって、
            最終保障供給期間中の「次に向けた段取り」を明確にしておくことが重要です。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/last-resort-supply",
              title: "最終保障供給とは",
              description: "制度全体の位置づけと基本事項を確認できます。",
            },
            {
              href: "/last-resort-supply-switch",
              title: "最終保障供給から切り替えるには",
              description: "次契約へ移るための実務フローを整理できます。",
            },
            {
              href: "/last-resort-vs-retail-contract",
              title: "最終保障供給と通常契約の違い",
              description: "継続前提と料金の考え方の差を確認できます。",
            },
            {
              href: "/compare",
              title: "比較ページ",
              description: "調達条件の再設計後に比較検討を進める入口です。",
            },
          ]}
        />

        <ContentCta
          heading="次回調達の準備を進める"
          description="自治体実務の論点を整理したら、通常契約への切り替え条件を比較し、段階的に調達を進めることが重要です。"
          links={[
            { href: "/last-resort-supply-switch", label: "切り替え手順を見る" },
            { href: "/compare", label: "比較ページを見る" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="municipality-last-resort-supply" />
      </div>
    </main>
  );
}
