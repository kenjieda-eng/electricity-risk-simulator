import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "自家消費型太陽光が向く法人の特徴｜屋根面積と使用パターンの条件";
const pageDescription =
  "自家消費型太陽光発電の投資対効果が出やすい法人の特徴と条件を解説。屋根面積・電力使用パターン・契約形態・業種別の傾向など、費用対効果を左右する主要な判断軸を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "自家消費 太陽光 法人",
    "太陽光発電 法人 向き",
    "自家消費型 太陽光 条件",
    "法人 太陽光 投資対効果",
    "オンサイト 太陽光 費用対効果",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/solar-suited-corporations",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/solar-suited-corporations",
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

const suitedConditions = [
  {
    label: "昼間の電力使用量が多い",
    detail:
      "太陽光発電は日中（概ね9時〜16時頃）に発電するため、この時間帯に電力使用が多い法人ほど自家消費率が高まり、購入電力量を効率よく削減できる。平日昼間に工場・施設を稼働させているパターンが典型的。",
  },
  {
    label: "設置可能な屋根面積が十分にある",
    detail:
      "太陽光パネルの発電量は設置面積に比例する。一般的に100kW（小規模高圧）以上の出力を確保するには500〜600㎡程度の設置面積が必要。工場・倉庫・スーパー・学校など、屋根面積が広い施設で効果が出やすい。",
  },
  {
    label: "屋根の向き・傾斜・強度が適切",
    detail:
      "南向き・傾斜角10〜30度程度が最も発電効率が高い。フラット屋根の場合は架台で傾斜をつけることができるが、設置荷重に対する屋根強度の確認が必要。設置前の構造診断が推奨される。",
  },
  {
    label: "昼間単価が高い（または今後上昇リスクがある）",
    detail:
      "電力量料金の単価が高い、または今後さらに上昇するリスクがある場合、自家消費型太陽光による購入電力量の削減価値が高まる。電気料金の高騰リスクが大きい事業者ほど、太陽光による「リスクヘッジ」の効果も大きい。",
  },
  {
    label: "長期間同じ場所で事業を継続する見込みがある",
    detail:
      "太陽光発電設備は一般的に20〜25年以上の使用を想定した投資。賃借建物への設置の場合は地主・建物オーナーとの合意が必要で、退去時の撤去費用も考慮が必要。長期的に施設を所有・使用する法人に向く。",
  },
  {
    label: "蓄電池との組み合わせで自家消費率をさらに高められる",
    detail:
      "太陽光発電の余剰電力を蓄電池に蓄えることで、夕方以降や曇天時にも自家消費を継続できる。夜間帯の電力使用も多い施設（病院・ホテル・食品工場など）で組み合わせ効果が高い。",
  },
];

const lessEffectiveConditions = [
  {
    label: "夜間のみの稼働で昼間の電力使用が少ない",
    detail:
      "工場・施設が夜間のみ稼働し、昼間の電力使用がほとんどない場合は自家消費率が低くなり、余剰電力を売電（FIT等）しても費用対効果が出にくいことがある。",
  },
  {
    label: "設置可能な屋根面積が小さい・構造上設置が難しい",
    detail:
      "屋根面積が小さい、または屋根の構造・強度・形状の問題で設置が難しい施設では、導入コストが割高になりやすい。",
  },
  {
    label: "テナント入居中の賃借物件で交渉が困難",
    detail:
      "建物オーナーとのPPA・設備設置交渉が成立しない場合、オフサイトPPAなど別の手段を検討することになる。",
  },
];

export default function SolarSuitedCorporationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/energy-equipment" className="underline-offset-2 hover:underline">蓄電池・太陽光・DR</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">自家消費型太陽光が向く法人の特徴</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          自家消費型太陽光が向く法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金の上昇が続くなか、自家消費型の太陽光発電設備を導入して購入電力量を削減する動きが法人の間で広がっています。ただし、すべての法人で同じ効果が得られるわけではなく、投資対効果は使用パターンや施設の特性によって大きく異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、自家消費型太陽光発電の費用対効果が出やすい法人の特徴と条件を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>自家消費型太陽光発電の仕組みと費用対効果の基本</li>
            <li>投資対効果が出やすい6つの条件</li>
            <li>効果が出にくい条件</li>
            <li>業種・施設別の傾向</li>
            <li>PPA・リース活用の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            自家消費型太陽光発電の費用対効果の仕組み
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光発電の主な経済効果は「発電した電力を購入電力の代わりに使用することで<Link href="/energy-charge-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力量料金</Link>を削減する」ことです。売電収入を目的とするFIT（固定価格買取制度）とは異なり、自家消費率を高めることで電気料金削減効果が直接現れます。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">費用対効果を高める要素</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>昼間の電力使用量が多い（自家消費率が高まる）</li>
                <li>電力量料金の単価が高い</li>
                <li>設置面積が広く発電量が大きい</li>
                <li>蓄電池との組み合わせで余剰電力を有効利用</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">費用対効果を下げる要素</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>昼間の電力使用が少なく余剰電力が多い</li>
                <li>設置面積が狭く発電量が小さい</li>
                <li>電力量料金の単価が低い</li>
                <li>屋根の方向・強度・形状の問題</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            投資対効果が出やすい6つの条件
          </h2>
          <div className="mt-4 space-y-3">
            {suitedConditions.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            効果が出にくい条件
          </h2>
          <div className="mt-4 space-y-3">
            {lessEffectiveConditions.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種・施設別の傾向
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種・施設の特性と自家消費型太陽光の向き不向きの目安を以下に整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">業種・施設</th>
                  <th className="border border-slate-200 px-3 py-2">向き</th>
                  <th className="border border-slate-200 px-3 py-2">主な理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">工場・物流倉庫</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">屋根面積が広い、昼間稼働の電力使用が多い</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">スーパー・商業施設</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">郊外型は屋根面積が大きく昼間営業</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">学校・自治体施設</td>
                  <td className="border border-slate-200 px-3 py-2">向きやすい</td>
                  <td className="border border-slate-200 px-3 py-2">昼間稼働、<Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金</Link>活用しやすい、脱炭素目標と整合</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">夜間稼働の工場</td>
                  <td className="border border-slate-200 px-3 py-2">向きにくい</td>
                  <td className="border border-slate-200 px-3 py-2">昼間の自家消費が少なく余剰発電になりやすい</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">都市ビル・テナントビル</td>
                  <td className="border border-slate-200 px-3 py-2">設置面積が制約に</td>
                  <td className="border border-slate-200 px-3 py-2">屋上面積が限られ、大きな発電容量を確保しにくい</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            PPA・リースによる初期投資ゼロの選択肢
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            自家消費型太陽光発電は導入費用が数百万〜数千万円規模になることが多く、初期投資が大きな障壁になる場合があります。そのような場合、PPA（電力購入契約）やリースを活用することで、初期費用ゼロまたは低負担で太陽光発電の電力を利用できる選択肢があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>PPA：設備は事業者が設置・所有し、発電電力を固定単価で購入する契約</li>
            <li>リース：設備をリース会社から借り受け、月次のリース料を支払う</li>
            <li>いずれも契約期間中の柔軟性（移転・解約など）が制限される点を事前に確認が必要</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力調達の仕組みについては{" "}
            <Link
              href="/how-electricity-is-procured"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電力の調達の仕組み
            </Link>{" "}
            も参考になります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/battery-suited-corporations",
              title: "蓄電池導入が向く法人の特徴",
              description: "投資対効果が出やすい条件と法人特性の整理。",
            },
            {
              href: "/contract-review-and-equipment-combination",
              title: "契約見直しと設備対策をどう組み合わせるか",
              description: "契約と設備の両面からコストを最適化する考え方。",
            },
            {
              href: "/commercial-facility-battery-considerations",
              title: "商業施設で蓄電池を検討するときの着眼点",
              description: "太陽光との組み合わせを含む商業施設の検討方法。",
            },
            {
              href: "/demand-response-suited-corporations",
              title: "DR活用が向く法人の特徴",
              description: "需要応答プログラムへの参加条件の整理。",
            },
            {
              href: "/how-electricity-is-procured",
              title: "電力の調達の仕組み",
              description: "電力がどのように調達・供給されるかの基礎。",
            },
            {
              href: "/renewable-power-procurement",
              title: "再生可能エネルギー由来の電力調達",
              description: "再エネ電力の調達手段と選択肢の整理。",
            },
          ]}
        />

        <ContentCta
          heading="自社の電力コストリスクを確認する"
          description="自家消費型太陽光の導入検討前に、現行の電力契約条件での料金上振れリスクをシミュレーターで試算できます。まず現状のリスクを数値で把握することをお勧めします。"
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
