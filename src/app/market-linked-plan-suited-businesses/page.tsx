import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
const pageTitle =
  "市場連動プランが向く可能性がある法人の特徴｜検討の前提と条件整理";
const pageDescription =
  "市場連動プランを検討できる法人はどのような特徴を持つか。財務的な耐性、リスクの理解度、負荷シフトの余地、部分導入の考え方など、慎重に検討するための前提条件を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場連動プラン 向く 法人",
    "市場連動 電力 メリット",
    "法人 電気料金 市場連動",
    "市場連動プラン リスク 許容",
    "固定プラン 市場連動 比較",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/market-linked-plan-suited-businesses",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/market-linked-plan-suited-businesses",
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

const prerequisites = [
  {
    heading: "市場価格の仕組みを理解している、または理解できる体制がある",
    content:
      "市場連動プランでは、電力量料金がJEPX（日本卸電力取引所）のスポット市場価格に連動して変動します。担当者が価格の決まり方を理解していないまま選択すると、高騰時に「なぜこの金額になるのか」を説明できず、社内対応が後手に回ります。基本的な仕組みを理解できる担当者がいること、または理解する意欲がある組織体制であることが最初の前提になります。",
    note: "JEPXのスポット市場は前日17時に翌日の各時間帯の価格が決まる仕組みです。価格は需給バランスによって大きく変動します。",
  },
  {
    heading: "電気料金が多少上振れしても経営に支障が出ない財務的耐性がある",
    content:
      "市場連動プランでは、高騰月に通常の1.5〜2倍を超えるコストが発生するケースがあります（2022年1月〜3月の寒波期や2021年冬のように）。このような上振れが発生したとしても、資金繰りや年間予算の達成に深刻な影響を与えない財務的な余裕があることが必要です。電気料金が総コストに占める割合が低い業種、または十分な内部留保を持つ企業が相対的に検討しやすい状況です。",
    note: "電気料金が事業コスト全体の2〜3%程度の法人は、上振れの絶対額が小さいため許容しやすい傾向があります。",
  },
  {
    heading: "使用量を時間帯ごとにある程度コントロールできる",
    content:
      "市場連動プランで費用を抑えるためには、価格が高い時間帯の使用量を減らし、安い時間帯に使用を集中させる「負荷シフト」が有効です。工場の稼働時間調整、空調の運転スケジュール変更、冷凍・冷蔵設備の事前冷却など、何らかの形で使用量を調整できる余地がある法人では、節約効果を実現できる可能性があります。逆に、24時間均一で電力を使うだけで調整の余地がない場合、市場連動のメリットを享受しにくくなります。",
    note: "完全にコントロールできなくても、ピーク時間帯（昼間）の使用量を10〜20%削減できれば一定の効果が見込まれます。",
  },
  {
    heading: "全使用量を一度に移行するのではなく、部分的な試行から始められる",
    content:
      "複数の施設や契約を持つ法人では、すべての拠点を市場連動プランに移行するのではなく、特定の1〜2拠点だけで試行的に導入することができます。試行期間中に実際のコスト変動を把握し、負荷シフトの効果を測定してから範囲を広げるアプローチは、全体リスクを抑えながら市場連動の恩恵を探るうえで現実的な方法です。",
    note: "電力使用量が比較的小さい事業所や、電気料金のコスト比率が低い施設から始めるのが一般的な進め方です。",
  },
  {
    heading: "価格高騰時のシナリオを事前に検討し、判断基準を決めておける",
    content:
      "市場連動プランで問題になるのは、高騰が発生したときに「固定に戻るべきか」「どこまで許容するか」を判断するルールが決まっていないことです。あらかじめ「月額コストが○○万円を超えた場合は次の更新で切り替える」など、判断のしきい値を決めておくことができる組織では、万一の高騰時も適切に対応できます。",
    note: "価格が高騰した実例として、2022年1〜3月の電力スポット価格は一時的に20〜30円/kWhを超えた時間帯が多数発生しました。",
  },
];

const comparisonPoints = [
  {
    item: "財務的耐性",
    suited: "電気料金の比率が低い、または内部留保が十分",
    notSuited: "電気料金の上振れが利益を直撃する業種・規模",
  },
  {
    item: "リスク理解",
    suited: "JEPXの仕組みを理解できる担当者がいる",
    notSuited: "変動理由を社内説明できない状況",
  },
  {
    item: "負荷の柔軟性",
    suited: "時間帯別に使用量をある程度調整できる",
    notSuited: "24時間一定使用で調整の余地がない",
  },
  {
    item: "導入方法",
    suited: "部分的な試行から始められる（多拠点など）",
    notSuited: "全量を一括で移行しなければならない",
  },
  {
    item: "判断体制",
    suited: "事前に高騰時の判断基準を設定できる",
    notSuited: "緊急時に意思決定が遅れる組織構造",
  },
];

export default function MarketLinkedPlanSuitedBusinessesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/plan-types" className="underline-offset-2 hover:underline">契約メニューの違いを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">市場連動が向く法人の特徴</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          市場連動プランが向く可能性がある法人の特徴
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          市場連動プランは、電力量料金が<Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPX</Link>（日本卸電力取引所）の取引価格に連動して変動する契約形態です。市場価格が低い時期にはコスト削減の機会がありますが、高騰時には想定外の費用が発生するリスクも伴います。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、市場連動プランを「向く」と断言するのではなく、「検討できる可能性がある」法人の特徴と、その前提条件を整理します。自社の状況と照らし合わせて判断するための材料としてご活用ください。市場連動プランの基本的な仕組みは{" "}
          <Link
            href="/market-linked-plan"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            市場連動プランとは
          </Link>{" "}
          で確認できます。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>市場連動プランを検討するための5つの前提条件</li>
            <li>向く可能性がある法人と向かない法人の比較</li>
            <li>「全量移行」より「部分導入」が現実的な理由</li>
            <li>事前に準備すべき判断基準の考え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            「向く」ではなく「向く可能性がある」という表現の意味
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランについて、「コストを削減できる」「節約になる」という情報を目にすることがあります。しかし、それが成立するかどうかは市場価格の水準、法人の使用パターン、負荷シフト能力、財務的な余裕など、複数の条件が揃ったときに限られます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            価格が安定して低い期間が続けばコスト削減になりますが、冬季や夏季の需給逼迫時には急激な高騰が起きることがあります。市場連動プランを選ぶということは、そのリスクを理解したうえで引き受けることを意味します。以下の5つの前提条件を自社と照らし合わせてください。
          </p>
        </section>

        {prerequisites.map((item) => (
          <section
            key={item.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{item.heading}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {item.content}
            </p>
            <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              {item.note}
            </p>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            向く可能性がある法人と向かない法人の比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下は5つの前提条件を軸にした比較です。「向く可能性がある」に当てはまる項目が多いほど、市場連動プランを検討の選択肢に加えやすい状況といえます。ただし、すべての条件が揃っていても市場価格次第でコスト増になる可能性は残ります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">観点</th>
                  <th className="p-3 text-left font-semibold text-slate-900">向く可能性がある</th>
                  <th className="p-3 text-left font-semibold text-slate-900">慎重に検討すべき</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonPoints.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-medium text-slate-800">{row.item}</td>
                    <td className="p-3 text-slate-700">{row.suited}</td>
                    <td className="p-3 text-slate-700">{row.notSuited}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            部分的なポートフォリオアプローチという考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数の事業所・施設を持つ法人では、すべてを同一のプランにする必要はありません。リスク許容度の高い拠点（電気代の占める比率が低い事務所など）では市場連動プランを試行し、リスクを抑えたい拠点（冷凍倉庫、大規模工場など）では固定プランを維持するという使い分けも選択肢の一つです。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            この「ポートフォリオアプローチ」は、全量移行によるリスクを分散しながら、市場連動の恩恵を試行的に確認するための現実的な方法です。一方で、電力会社によっては一定の最小使用量の要件があるため、小規模な拠点では市場連動プランを適用できないケースもあります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            多拠点での電力契約管理については、{" "}
            <Link
              href="/multi-site-plan-selection"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              多拠点企業はどちらを選ぶべきか
            </Link>{" "}
            でより詳しく解説しています。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            まとめ：市場連動プランを検討する前に確認すること
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>JEPXの価格変動の仕組みと過去の高騰事例を把握しているか</li>
            <li>電気料金が2倍になった場合の月額コスト増加額を試算できているか</li>
            <li>その上振れ額が自社の経営・資金繰りに与える影響を評価できているか</li>
            <li>負荷シフトや節電によってコストを調整できる余地があるか</li>
            <li>高騰時に固定プランへ切り替えるタイミングの判断基準を決められるか</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            これらを確認したうえで、シミュレーターで市場価格が高騰したシナリオと通常シナリオでのコスト差を比較することをお勧めします。
          </p>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="market-linked-plan-suited-businesses" terms={["市場連動プラン", "固定プラン", "JEPX", "市場価格調整額", "デマンド値"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "料金の動き方とリスクの差を比較して理解する。",
            },
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "JEPXへの連動の仕組みと価格変動の特徴。",
            },
            {
              href: "/businesses-suited-for-fixed-price-electricity-plan",
              title: "固定プランが向く法人の特徴",
              description: "安定性を重視する場合の判断軸。",
            },
            {
              href: "/multi-site-plan-selection",
              title: "多拠点企業はどちらを選ぶべきか",
              description: "拠点ごとの最適化と全体管理の考え方。",
            },
            {
              href: "/market-linked-risk-internal-explanation",
              title: "市場連動プランのリスクを社内説明するときのポイント",
              description: "経営層・上司へのリスク説明の実務的な進め方。",
            },
            {
              href: "/budget-focused-plan-selection",
              title: "予算管理を重視する法人はどちらを選ぶべきか",
              description: "予算変動の許容度から契約プランを考える。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "法人の電力契約見直しは何から始めるべきか",
              description: "市場連動プランへの切替を検討する際の見直し手順の入口。",
            },
          ]}
        />

        <ContentCta
          heading="市場連動プランと固定プランのコスト差を試算する"
          description="自社の使用量・契約電力を入力して、市場連動プランと固定プランの年間コスト差をシミュレーターで確認できます。高騰シナリオでの上振れ幅も把握できます。"
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
