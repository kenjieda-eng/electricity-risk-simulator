import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

const pageTitle = "デマンドコントロールとは？導入効果と費用の目安";
const pageDescription =
  "デマンドコントロールは30分デマンド値が契約電力を超えないよう監視・制御する仕組みです。装置の種類、導入効果（基本料金の削減目安）、費用相場（5〜100万円超）、投資回収期間、導入判断の基準を実務向けに整理します。";
const pageUrl = "https://simulator.eic-jp.org/demand-control-guide";
const datePublished = "2026-04-19";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンドコントロール",
    "デマンド監視装置",
    "デマンド制御 費用",
    "デマンドコントローラー 効果",
    "30分デマンド",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/energy-equipment", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/energy-equipment"],
  },
};

const deviceTypes = [
  {
    name: "警報型（監視のみ）",
    price: "本体 5〜15万円（工事費別途3〜8万円）",
    feature: "予測デマンド値が閾値を超えるとブザー・ランプで通知。制御は人が手動で行う。",
    suitable: "担当者が現場にいる事業所、設備停止の判断を人が下したいケース。",
  },
  {
    name: "簡易制御型",
    price: "本体 15〜40万円（工事費別途5〜15万円）",
    feature: "事前設定した優先順位で空調・照明など2〜4系統を自動で段階制御。",
    suitable: "店舗・小規模工場など、制御対象が限定的な施設。",
  },
  {
    name: "EMS連動型（本格制御）",
    price: "30〜150万円（BEMS/FEMS全体では200〜500万円規模）",
    feature: "複数設備を柔軟にスケジュール＋負荷連動で制御。クラウド遠隔監視・レポート機能あり。",
    suitable: "中規模以上の工場・商業施設・複数拠点運営の法人。",
  },
];

const reductionCases = [
  {
    profile: "月間電気代 30万円のクリニック（契約電力 40kW）",
    effect: "ピーク10%抑制で基本料金 ▲約8%、年間削減 10〜15万円",
    payback: "警報型導入（15万円）で1〜2年",
  },
  {
    profile: "月間電気代 80万円の中小工場（契約電力 150kW）",
    effect: "ピーク15%抑制で基本料金 ▲約12%、年間削減 40〜60万円",
    payback: "簡易制御型（50万円）で1年前後",
  },
  {
    profile: "月間電気代 200万円のオフィスビル（契約電力 400kW）",
    effect: "ピーク10〜15%抑制で基本料金 ▲約10%、年間削減 70〜100万円",
    payback: "EMS連動型（120万円）で1.5年",
  },
];

export default function DemandControlGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={datePublished}
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "記事一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "蓄電池・太陽光・DRを知る", url: "https://simulator.eic-jp.org/articles/energy-equipment" },
          { name: "デマンドコントロールとは" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            デマンドコントロールとは？導入効果と費用の目安
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>デマンドコントロール</strong>とは、30分平均の需要電力（デマンド値）が契約電力を超えないよう、事前に監視・警報・制御する仕組みのことです。高圧契約の基本料金は過去12か月の最大デマンドで決まるため、一度のピーク発生が1年分の基本料金に跳ね返ります。
            これを抑える手段として、多くの法人で採用されています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            本記事では、装置の種類・費用相場・削減効果の目安・投資回収期間・導入判断の軸を整理します。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンドコントロールの仕組み</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              スマートメーターや専用計測器で30分ごとの使用電力を計測し、<strong>予測デマンド値</strong>（現時点の使用ペースをその30分枠末まで延長した推定値）がしきい値を超える見込みのとき、警報または自動制御で設備の運転を抑制します。
              制御の対象は空調・照明・冷凍設備などが一般的で、「優先度の低い設備から順に段階的に落とす」方式が採用されます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              重要なのは、<strong>30分の平均値を下げること</strong>が目的という点です。瞬間的な電力が高くても、30分通算で契約電力を超えなければ問題にならないため、設備を完全停止するのではなく、数分単位で間引き運転する制御が主流です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">装置の種類と費用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンドコントロールの装置は、大きく3種類に分かれます。施設規模や運用体制に合わせて選定するのが基本です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {deviceTypes.map((d) => (
                <div key={d.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{d.name}</p>
                  <p className="mt-2 text-xs font-semibold text-sky-800">{d.price}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{d.feature}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-500">向く施設: {d.suitable}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              ※ 上記は参考相場。実際の費用は既存の受電設備、配線工事の難易度、制御対象数で変動します。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入効果の目安（基本料金削減）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンドコントロールの効果は、ピークをどれだけ抑えられるかで決まります。目安としては<strong>ピーク10〜20%の抑制</strong>が現実的なラインで、その場合の基本料金削減は▲5〜15%程度になります。
              電力量料金は使用量そのものが減るわけではないため大きく変わりません。効果の主軸は基本料金です。
            </p>
            <div className="mt-4 space-y-3">
              {reductionCases.map((c) => (
                <div key={c.profile} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{c.profile}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">効果: {c.effect}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">回収期間: {c.payback}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              ※ 試算は契約電力あたり基本料金単価を 1,700〜2,400円/kW 前後と仮定した概算。地域・契約区分・力率により増減します。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入判断の基準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              次のいずれかに当てはまる施設では、デマンドコントロールの投資効果が出やすい傾向があります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>過去12か月で最大デマンド月と他月の差が15%以上ある</li>
              <li>夏冬のピーク月が決まっており、ピーク抑制の余地がある</li>
              <li>空調・冷凍・コンプレッサーなど制御可能な大型設備がある</li>
              <li>契約電力が実績値契約で、ピーク値がそのまま料金に反映される区分である</li>
              <li>月間電気代が30万円以上で、基本料金比率が30〜40%を占めている</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              逆に、<strong>年間を通じて電力使用が安定している施設（データセンター・24時間工場の定常運転部分）</strong>ではピーク抑制の余地が少なく、効果が限定的になりやすい点には注意が必要です。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入前に確認したい3点</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                <strong>過去12か月の30分デマンド推移を取得</strong>（スマートメーターから小売・一般送配電経由で入手可）。ピーク月と谷月の差を定量化。
              </li>
              <li>
                <strong>制御対象とする設備を洗い出し、停止許容時間を確認</strong>（空調は15〜30分の間引き運転まで許容可のケースが多い）。
              </li>
              <li>
                <strong>導入後の運用ルールを決める</strong>（警報発報時の対応者、制御対象の優先順位、月次の効果レビュー体制）。
              </li>
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単に機械を置くだけでは効果が出にくい施策です。<Link href="/reduce-high-voltage-basic-charge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧電力の基本料金を下げる5つの方法</Link>と組み合わせて、契約電力の見直しまでを一連で設計するのが効果的です。
            </p>
          </section>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/demand-control-reduction-effect",
                title: "デマンドコントロールの削減効果",
                description: "実例ベースの基本料金削減目安をさらに詳しく。",
              },
              {
                href: "/demand-monitoring-device-selection",
                title: "デマンド監視装置の選び方",
                description: "装置タイプ別の機能比較と選定の考え方。",
              },
              {
                href: "/demand-suppression-effectiveness",
                title: "デマンド抑制はどこまで効果があるか",
                description: "抑制策全般の効果と限界の整理。",
              },
              {
                href: "/demand-value-guide",
                title: "デマンド値の見方",
                description: "30分デマンドの読み解きと記録の取り方。",
              },
              {
                href: "/reduce-high-voltage-basic-charge",
                title: "高圧電力の基本料金を下げる5つの方法",
                description: "デマンド抑制を含む基本料金削減の全体像。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="デマンド推移の定量評価から始めたい場合は、過去12か月のデータ取得と基本料金試算がスタート地点です。導入判断に迷う場合はご相談ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="デマンドコントロールの導入判断、専門家に相談しませんか？"
            description="最適なデマンド監視装置の選定から目標デマンド値の設定、運用ルール策定まで、エネルギー情報センターが中立的にサポートします。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
