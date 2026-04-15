import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "JEPX急騰で法人の電気料金はどう上がるか｜市場連動プランへの影響";
const pageDescription =
  "JEPX（日本卸電力取引所）のスポット価格が急騰したとき、市場連動プランを契約している法人の電気料金にどう影響するかを解説。価格急騰の原因と備え方を詳しく説明します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "JEPX急騰 電気料金",
    "市場連動プラン 法人 リスク",
    "JEPX スポット価格 高騰",
    "電力取引所 価格 上昇",
    "市場連動 法人 影響",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/jepx-spike-electricity-cost-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/jepx-spike-electricity-cost-impact",
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

const spikeReasons = [
  {
    title: "燃料価格の急騰",
    detail:
      "LNG・石炭などの燃料価格が上昇すると、火力発電の限界費用が上がり、JEPXの約定価格も連動して上昇します。",
  },
  {
    title: "需給逼迫",
    detail:
      "猛暑や厳冬期に需要が急増し、供給余力が不足する場面でJEPXのスポット価格は急騰しやすくなります。2021年1月の価格急騰はその典型例です。",
  },
  {
    title: "発電所の計画外停止",
    detail:
      "大型の原子力発電所や火力発電所が突然停止すると、供給不足から価格が一時的に急騰することがあります。",
  },
  {
    title: "再エネ出力の急低下",
    detail:
      "天候不良などで太陽光・風力の発電量が急減した場合、火力発電への依存が高まり価格が上昇することがあります。",
  },
];

const planTypes = [
  {
    type: "完全市場連動プラン",
    impact: "非常に大きい",
    detail: "JEPXスポット価格がそのまま電力量料金に反映されるため、急騰時の影響が直撃します。",
  },
  {
    type: "部分市場連動プラン（一部固定）",
    impact: "中程度",
    detail: "市場連動部分の比率に応じて影響を受けます。比率が高いほど急騰時の負担が大きくなります。",
  },
  {
    type: "固定プラン（燃調あり）",
    impact: "小さい",
    detail: "電力量料金は固定ですが、燃料費調整額の変動は受けます。JEPX急騰の直撃は避けられます。",
  },
  {
    type: "固定プラン（燃調上限あり）",
    impact: "非常に小さい",
    detail: "燃調に上限が設けられているため、急騰時でも請求の上振れが抑えられます。",
  },
];

export default function JepxSpikeElectricityCostImpactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/risk-scenarios" className="underline-offset-2 hover:underline">リスクシナリオ別に知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">JEPXスパイクの影響</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          JEPX急騰で法人の電気料金はどう上がるか
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          JEPX（日本卸電力取引所）は、電力会社や新電力が電力を売買する卸売市場です。市場連動プランを契約している法人は、このJEPXのスポット価格が電気料金に直接反映されます。価格が安定している局面ではメリットがありますが、急騰した場合には想定外のコスト増に直面するリスクがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          2021年1月には国内の寒波と需給逼迫からJEPXのスポット価格が通常の数十倍に達する局面が発生し、市場連動プランを契約していた法人が月額請求の急増に苦しめられました。このページではそのリスクの仕組みと対策を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>JEPXスポット価格が急騰するメカニズム</li>
            <li>市場連動プランへの影響の大きさと波及の速さ</li>
            <li>プランタイプ別の影響比較</li>
            <li>JEPX急騰リスクへの備え方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPXのスポット価格が急騰するメカニズム
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPXのスポット市場では、翌日の電力が30分単位のコマで取引されます。需要が多く供給が少ないコマでは価格が上昇し、逆の場合は下落します。このメカニズム自体は正常に機能していますが、需給が極端に逼迫する局面では通常では考えられない水準にまで価格が跳ね上がることがあります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {spikeReasons.map((item) => (
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
            市場連動プランへの影響：即時かつ直接的
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランでは、JEPXの価格が電気料金に翌月（または当月）の請求として反映されます。固定プランが燃料費調整額を通じて数カ月後に反映されるのとは対照的に、JEPX急騰の影響は極めて速く法人の請求に届きます。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            仮にJEPXスポット価格が通常の5円/kWhから15円/kWhに急騰した場合、月間使用量50,000kWhの法人では月額コストが約50万円増加します。これが数カ月続くと、年間数百万円規模の想定外コストとなります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランの仕組みについては{" "}
            <Link
              href="/market-linked-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランとは
            </Link>{" "}
            で詳しく確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            プランタイプ別の影響比較
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX急騰シナリオでの影響は、契約しているプランタイプによって大きく異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">プランタイプ</th>
                  <th className="p-3 text-left font-semibold text-slate-900">影響度</th>
                  <th className="p-3 text-left font-semibold text-slate-900">説明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {planTypes.map((row) => (
                  <tr key={row.type}>
                    <td className="p-3 font-medium text-slate-700">{row.type}</td>
                    <td className="p-3 text-slate-700">{row.impact}</td>
                    <td className="p-3 text-slate-700">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            法人への影響：特に注意が必要なケース
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動プランを選んだ理由が「割安だったから」という場合でも、急騰時にはその割安分を大きく超えるコスト増が発生することがあります。特に以下のケースでは注意が必要です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">電力使用量が大きい法人：</span>
              月間数万kWhを超える法人では、1円/kWhの急騰が月額数万〜数十万円の影響となります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">複数の市場連動プラン契約を持つ多拠点企業：</span>
              各拠点で市場連動プランを契約していると、急騰時に拠点数分の影響が累積します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">請求上限のない契約：</span>
              市場連動プランでも価格上限（キャップ）を設けているプランがあります。上限のない契約は急騰時のリスクが無限大になる可能性があります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">電気料金をコスト予算の中で大きく見込んでいる法人：</span>
              電気料金比率の高い製造業や冷蔵倉庫では、急騰時の影響が事業収支に直結します。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            JEPX急騰リスクへの備え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            JEPX急騰リスクに対する備えとして、以下の対策が有効です。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <span className="font-semibold text-slate-900">プランに価格上限（キャップ）が設定されているか確認する：</span>
              上限が設定されていれば、急騰時の影響を一定以下に抑えられます。
            </li>
            <li>
              <span className="font-semibold text-slate-900">固定プランへの切り替えを検討する：</span>
              市場連動リスクを許容できない場合は、固定プランへの変更を検討します。
            </li>
            <li>
              <span className="font-semibold text-slate-900">高騰シナリオでの年間コストをシミュレーターで確認する：</span>
              「JEPXが2倍になった場合」「3倍になった場合」の年間コストを試算しておくと判断の基準になります。
            </li>
            <li>
              <span className="font-semibold text-slate-900">JEPX価格の動向を定期的にモニタリングする：</span>
              価格が上昇傾向に入ったタイミングで対応を検討できるよう、月次で確認する習慣をつけることも有効です。
            </li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="jepx-spike-electricity-cost-impact" terms={["JEPX", "市場価格調整額", "燃料費調整額", "市場連動プラン", "固定プラン", "容量拠出金"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/market-linked-plan",
              title: "市場連動プランとは",
              description: "JEPX連動型プランの仕組みとメリット・デメリット。",
            },
            {
              href: "/lng-price-surge-electricity-cost-impact",
              title: "LNG高騰で法人の電気料金はどう上がるか",
              description: "JEPX急騰の背景にある燃料価格高騰の仕組み。",
            },
            {
              href: "/supply-demand-tightness-impact",
              title: "需給逼迫で法人の電気料金はどう変わるか",
              description: "JEPX急騰を引き起こす需給逼迫の詳細。",
            },
            {
              href: "/businesses-not-suited-for-market-linked-electricity-plan",
              title: "市場連動プランが向かない法人の特徴",
              description: "市場連動リスクを慎重に考えるべき法人のケース。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "急騰リスクを踏まえたプラン選択の考え方。",
            },
            {
              href: "/high-voltage-market-linked-considerations",
              title: "高圧・特別高圧で市場連動を考えるときの注意点",
              description: "大口需要家が市場連動プランを選ぶ際の注意点。",
            },
            {
              href: "/electricity-price-trend-2019-2025",
              title: "法人の電気料金推移（2019〜2025年）",
              description: "JEPXスパイクが実際の電気料金推移に与えた影響を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="JEPX急騰シナリオを自社の数字で確認する"
          description="市場連動プランでJEPX価格が高騰した場合の年間コスト増加額を、シミュレーターで試算できます。"
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
