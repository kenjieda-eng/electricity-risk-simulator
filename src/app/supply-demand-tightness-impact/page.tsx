import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

const pageTitle =
  "需給逼迫で法人の電気料金はどう変わるか｜市場価格高騰と契約への影響";
const pageDescription =
  "電力の需給が逼迫したとき、法人の電気料金にどう影響するかを解説。需給逼迫が起きる原因、JEPX価格急騰との関係、市場連動・固定プラン別の影響、法人の備え方を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "需給逼迫 電気料金 法人",
    "電力 需給 ひっ迫 影響",
    "需給逼迫 市場連動 リスク",
    "電力不足 法人 コスト",
    "需給逼迫 JEPX 高騰",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/supply-demand-tightness-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/supply-demand-tightness-impact",
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

const causes = [
  {
    title: "猛暑・厳冬期の需要急増",
    detail:
      "夏の酷暑や冬の寒波により、エアコン・暖房需要が急増し、発電能力の上限に迫るケースがあります。特に複数地域で同時に需要が急増すると逼迫が深刻になります。",
  },
  {
    title: "原子力・大型火力の計画外停止",
    detail:
      "大型の発電設備が突然停止すると、代替供給が追いつかず需給バランスが崩れます。複数機が同時停止する場合は特に深刻です。",
  },
  {
    title: "再エネ出力の急低下",
    detail:
      "再エネ比率が高まる中で、悪天候による太陽光・風力の出力急低下が需給逼迫を引き起こすことがあります。",
  },
  {
    title: "LNG在庫の減少",
    detail:
      "LNG調達トラブルや需要増により在庫が低下すると、ガス火力の出力制約が生じ、供給力が低下します。",
  },
];

export default function SupplyDemandTightnessImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="需給逼迫で法人の電気料金はどう変わるか｜市場価格高騰と契約への影響"
        description="電力の需給が逼迫したとき、法人の電気料金にどう影響するかを解説。需給逼迫が起きる原因、JEPX価格急騰との関係、市場連動・固定プラン別の影響、法人の備え方を詳しく説明します。"
        url="https://simulator.eic-jp.org/supply-demand-tightness-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "需給逼迫で法人の電気料金はどう変わるか" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">需給逼迫の影響</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          需給逼迫で法人の電気料金はどう変わるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力の需給が逼迫すると、<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>（日本卸電力取引所）のスポット価格が急騰し、<Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プラン</Link>を契約している法人の電気料金が大きく上昇することがあります。2021年1月には国内の厳冬・需給逼迫からJEPXのスポット価格が急騰し、多くの法人が想定外のコスト増を経験しました。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          需給逼迫は気候変動による極端な気象、発電設備のトラブル、燃料在庫の低下など複数の要因から発生し得るリスクです。このページでは、逼迫が起きるメカニズムと法人への影響、備え方を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>需給逼迫が起きる主な原因</li>
            <li>逼迫からJEPX急騰・電気料金上昇への波及経路</li>
            <li>プランタイプ別の影響の違い</li>
            <li>法人の備え方とシミュレーター活用</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需給逼迫が起きるシナリオ
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力の需給逼迫とは、電力の供給力（発電能力と融通力）が需要を下回るか、ギリギリで追いつく状況を指します。需給逼迫に至る主な原因は以下の通りです。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {causes.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            需給逼迫から電気料金高騰への波及経路
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            需給が逼迫すると、JEPXのスポット市場では買い手（電力会社・新電力）が高値をつけても電力を確保しようとするため、約定価格が急騰します。この価格は翌日分の取引であるため、逼迫が予想されると前日から価格が上昇し始めます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランを契約している法人には、このJEPX価格の急騰が即座に電気料金として反映されます。30分コマ単位での価格変動がそのまま請求に影響するため、需給逼迫が続く期間は高コストの状態が続きます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            一方、固定プランや燃料費調整額ベースのプランでは、JEPX急騰の直接影響は受けにくいものの、長期的な需給逼迫が燃料費上昇を通じて間接的に影響することがあります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            プランタイプ別の影響
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">プランタイプ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">需給逼迫時の影響</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 font-medium text-slate-700">完全市場連動プラン</td>
                  <td className="p-3 text-slate-700">JEPX急騰の直撃を受ける。逼迫が深刻なほど影響が大きい。</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-700">部分市場連動プラン</td>
                  <td className="p-3 text-slate-700">市場連動部分の比率に応じて影響を受ける。</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-700">固定プラン（燃調あり・上限なし）</td>
                  <td className="p-3 text-slate-700">JEPX急騰の直撃は避けるが、逼迫が長引くと燃料費上昇を通じた間接影響がある。</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-slate-700">固定プラン（燃調上限あり）</td>
                  <td className="p-3 text-slate-700">最も影響が少ない。上限を超えた分の供給継続リスクに注意。</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人への具体的な影響
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            2021年1月の実例では、JEPXスポット価格が一時的に200円/kWhを超えるコマも発生しました。通常は5〜10円/kWh程度の価格が数十倍になった計算です。市場連動プランを契約していた法人では、その月の電気料金が前月比で数倍になるケースも報告されています。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            また、需給逼迫時には政府や電力広域的運営推進機関（OCCTO）から「節電要請」や「需給ひっ迫警報」が発令されることがあります。業務に影響しない範囲での節電協力が求められると同時に、節電できない工場や設備運営法人にとっては、コスト高騰を甘受せざるを得ない状況となります。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            備え方：需給逼迫リスクへの対策
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">市場連動プランのリスク許容度を事前に確認する：</span>
              JEPX価格が「5倍」「10倍」になった場合の月次コストを試算し、許容範囲かどうかを判断しておきます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">価格上限付き市場連動プランを選ぶ：</span>
              一定価格を超えた分をキャップするプランでは、急騰時のリスクが限定されます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">固定プランとの年間コスト差を把握する：</span>
              市場連動プランの通常時のメリットと、逼迫時のリスクを年間コストで比較します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">ピークカット・需要シフトを検討する：</span>
              需要の高い時間帯の使用量を削減することで、市場連動プランにおける高価格コマの影響を軽減できます。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="supply-demand-tightness-impact" terms={["JEPX", "市場価格調整額", "燃料費調整額", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/jepx-spike-electricity-cost-impact",
              title: "JEPX急騰で法人の電気料金はどう上がるか",
              description: "需給逼迫が引き起こすJEPX価格急騰の詳細解説。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "需給逼迫と連動するLNG価格上昇リスクの解説。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "需給逼迫の影響を直接受けるプランの仕組み。",
            },
            {
              href: "/24h-operation-price-surge-risk",
              title: "24時間稼働企業が料金高騰に直面したときのリスク",
              description: "需給逼迫が特に影響する24時間稼働法人のリスク。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "需給逼迫リスクを考慮したプラン選択の考え方。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "需給逼迫リスクを踏まえた契約確認項目。",
            },
          ]}
        />

        <ContentCta
          heading="需給逼迫シナリオを自社の数字で確認する"
          description="JEPX価格が急騰した場合の月次コスト増加額を、現在の使用量をもとにシミュレーターで試算できます。"
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
