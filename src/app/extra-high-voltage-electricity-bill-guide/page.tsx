import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "特別高圧電力の請求書の見方｜大規模施設の請求書確認ポイント";
const pageDescription =
  "特別高圧電力契約の請求書で確認すべき項目を解説。複雑な料金構造・時間帯別単価・デマンド管理・各種調整費の見方と、高圧契約との違いを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧電力 請求書 見方",
    "特別高圧 電気 確認項目",
    "特高 電力 デマンド 基本料金",
    "特別高圧 電力量料金 時間帯",
    "大規模施設 電気 請求書",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/extra-high-voltage-electricity-bill-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/extra-high-voltage-electricity-bill-guide",
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

const billSections = [
  {
    heading: "特別高圧電力の契約形態と請求書の特徴",
    content: [
      "特別高圧電力（20kV以上または66kV以上での受電）は、大規模工場・ショッピングモール・データセンター・大型病院などで使われる契約です。高圧（6,600V）と比べて供給規模が大きく、料金メニューの複雑さも増します。",
      "特高契約の請求書では、高圧と異なる点として「料金メニューの個別交渉要素が強い」「需要調整契約などの特殊条項が含まれる場合がある」「時間帯・季節別の料金区分が細かく設定されていることが多い」などが挙げられます。請求書を読む際は、契約書・料金メニューと照らし合わせながら確認することが必要です。",
    ],
    checkPoints: [
      "受電電圧（20kV・66kV・154kV等）と契約種別",
      "適用されている料金メニューの正式名称",
      "個別交渉による特約条項の有無",
    ],
  },
  {
    heading: "契約電力・デマンド管理と基本料金",
    content: [
      "特高契約の基本料金も高圧同様、契約電力（kW）に基本料金単価を乗じて算出されますが、特高では契約電力そのものが数千kW〜数万kWに及ぶことが多く、基本料金の絶対額が非常に大きくなります。デマンドが1か月でも急上昇すると、その後1年間の基本料金に影響が及ぶ構造は高圧と同じです。",
      "特高ではデマンドコントローラー（デマコン）や需要監視システムの導入が一般的です。デマンドの管理が適切に行われているかどうかを請求書の最大需要電力実績と照合することが重要です。また、特高契約では「契約最大需要電力」と「実績最大需要電力」の差が大きい場合、見直しによる基本料金削減ポテンシャルが存在する可能性があります。",
    ],
    checkPoints: [
      "契約最大需要電力（kW）と実績最大需要電力の差異",
      "過去12か月のデマンド最大値が発生した月・時期",
      "デマンドコントローラーの稼働実績と設定値",
      "力率の実績値と力率割引・割増の適用状況",
    ],
  },
  {
    heading: "時間帯別・季節別の電力量料金",
    content: [
      "特高電力の電力量料金は、高圧以上に細かく時間帯・季節別に区分されているケースが多くあります。一般的な区分は「ピーク時間帯（夏季日中等）」「昼間時間帯（平日日中）」「夜間時間帯」「休日・深夜」などです。",
      "大規模な施設では、ピーク時間帯に集中する電力需要をどこまで抑制できるかが、電力量料金の削減に直結します。請求書の各時間帯別使用量を分析することで、どの時間帯のコスト負担が最大かを把握し、設備運用の最適化に活かすことができます。また、見積比較では各時間帯の単価を現行と比較することが必要です。",
    ],
    checkPoints: [
      "適用されている時間帯区分と各時間帯の月間使用量（kWh）",
      "ピーク時間帯・夏季時間帯の使用量の割合",
      "時間帯別使用量の月次推移（繁忙期・閑散期の差）",
      "時間帯シフトによるコスト削減の余地",
    ],
  },
  {
    heading: "燃料費調整額と市場連動費用",
    content: [
      "特高電力でも燃料費調整額は使用量に比例して加減算されます。使用量の絶対値が大きい特高契約では、調整額の変動による月次コストへの影響が高圧以上に大きくなります。過去12か月の推移を把握し、上振れ時の最大負担額を把握しておくことが重要です。",
      "特高クラスの大規模需要家の場合、市場連動型プランの採用や電力の相対取引（PPA、相対契約等）を通じた調達も選択肢に入ります。その場合は「電源調達費」「市場調達コスト」等の名称で請求項目が設けられる場合があります。調達構造の違いを請求書の項目から把握しておくと、調達方法の見直し検討の基礎資料になります。",
    ],
    checkPoints: [
      "燃料費調整額の過去12か月の変動幅（最大・最小・月平均）",
      "市場連動型コストの項目の有無と変動状況",
      "調達コスト構造（固定単価型か市場連動型か）",
      "上限設定（キャップ）の有無と条件",
    ],
  },
  {
    heading: "需要調整契約・特殊条項の確認",
    content: [
      "特高電力では、電力会社との間で「需要調整契約」や「ピーク抑制に応じる代わりに単価を下げる」といった特殊な条件が盛り込まれていることがあります。これらは請求書の注記や別紙契約として管理されているケースが多く、通常の料金項目欄には表示されない場合もあります。",
      "需要調整に応じた実績がある場合、請求書に「需要調整割引」として反映されることがあります。こういった特約の有無と活用状況を把握しておくと、電力会社との交渉材料や見積条件の整理に役立ちます。",
    ],
    checkPoints: [
      "需要調整契約の有無と条件",
      "需要調整割引の適用実績",
      "特別割引や長期契約割引の有無",
      "契約期間と解約条件（見直し可能時期の確認）",
    ],
  },
  {
    heading: "再エネ賦課金・容量拠出金と制度費用",
    content: [
      "特高電力でも再エネ賦課金・容量拠出金は使用量に応じて課されます。使用規模が大きい特高では年間の制度費用負担が億単位になるケースもあるため、各制度費用の単価と年間負担額を正確に把握しておく必要があります。",
      "制度費用は電力会社が変わっても同じ単価が適用されるものがほとんどですが、見積書への含め方が異なる場合があります。比較の前提として「制度費用込み」か「別途加算」かを各見積書で確認し、横並びで比較できる状態にしておくことが重要です。",
    ],
    checkPoints: [
      "再エネ賦課金の月額・年間負担額",
      "容量拠出金の月額・年間負担額（または電力量料金への含み方）",
      "見積比較時に制度費用の含め方が統一されているか",
    ],
  },
];

export default function ExtraHighVoltageElectricityBillGuidePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧電力の請求書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧電力（20kV以上）は大規模施設向けの契約で、高圧と比べてさらに複雑な料金構造を持ちます。請求書に含まれる時間帯別料金・デマンド情報・特殊条項の読み方を理解することが、見積比較や調達見直しの第一歩になります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の請求書については{" "}
          <Link
            href="/high-voltage-electricity-bill-guide"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            高圧電力の請求書の見方
          </Link>{" "}
          で別途解説しています。特高特有のポイントに絞って説明します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>特別高圧電力の料金構造と高圧との違い</li>
            <li>時間帯別・季節別電力量料金の確認ポイント</li>
            <li>デマンド管理と基本料金への影響</li>
            <li>需要調整契約・特殊条項の確認方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特別高圧と高圧の請求書の主な違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧と高圧では、料金の算出方法は基本的に同じ構造（基本料金＋電力量料金＋調整費）を持ちますが、規模と複雑さが異なります。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">比較項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">高圧（6,600V）</th>
                  <th className="p-3 text-left font-semibold text-slate-900">特別高圧（20kV〜）</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">契約電力の規模</td>
                  <td className="p-3 text-slate-700">概ね50〜2,000kW程度</td>
                  <td className="p-3 text-slate-700">2,000kW以上が目安</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">料金メニュー</td>
                  <td className="p-3 text-slate-700">標準メニューが基本</td>
                  <td className="p-3 text-slate-700">個別交渉・特約が多い</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">時間帯区分</td>
                  <td className="p-3 text-slate-700">2〜3区分が一般的</td>
                  <td className="p-3 text-slate-700">3〜5区分以上の場合も</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">特殊契約</td>
                  <td className="p-3 text-slate-700">少ない</td>
                  <td className="p-3 text-slate-700">需要調整契約等が多い</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">年間電力費規模</td>
                  <td className="p-3 text-slate-700">数百万〜数千万円</td>
                  <td className="p-3 text-slate-700">数千万〜数億円以上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {billSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.content.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特高契約の請求書確認は専門知識が必要な場合も
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧電力の契約は規模が大きく、料金体系も複雑なため、請求書の内容を完全に把握するには電力調達の専門知識が求められるケースがあります。特に需要調整契約や個別交渉による特約条項が含まれる場合は、契約書や覚書と照らし合わせた確認が欠かせません。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            見積比較を行う際は、電力コンサルタントや専門家のサポートを活用することで、比較精度と交渉力を高めることができます。まずは現行請求書のデータを整理し、年間コストの全体像を把握することから始めてください。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">特別高圧 請求内訳サンプル（契約電力2,000kW・月800,000kWh）</h2>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">項目</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">算定</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">基本料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2,000kW × 1,400円 × 0.97</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">2,716,000円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">電力量料金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">800,000kWh × 14.5円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">11,600,000円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">燃料費調整額</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">800,000kWh × +2.1円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">1,680,000円</span></td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">再エネ賦課金</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">800,000kWh × 3.49円</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">2,792,000円</span></td>
              </tr>
              <tr className="bg-sky-50">
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">請求合計（税抜）</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">―</td>
                <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">18,788,000円</td>
              </tr>
            </tbody>
          </table>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="特別高圧電力の理解を深め、見積比較や見直しに役立てるための関連ページです。"
          links={[
            {
              href: "/extra-high-voltage-quotation-guide",
              title: "特別高圧電力見積書の見方",
              description:
                "特高の見積書で比較すべき項目と大規模契約の注意点を整理。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "高圧（6,600V）の請求書確認ポイントと見積比較への活用方法。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が契約電力・基本料金に与える影響を詳しく解説。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "契約電力と基本料金単価の関係、力率調整の仕組みを解説。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "時間帯別・季節別の電力量料金の読み方と活用方法。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description: "複数の見積書を横並びで比較するための整理方法。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "請求書の燃調費項目の仕組みと変動要因を確認できます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "特別高圧契約でのプラン選択軸を整理できます。",
            },
          ]}
        />

        <ContentCta
          heading="大規模施設の電力コストをシミュレーションする"
          description="特別高圧電力の使用量・デマンドをもとに電気料金の上振れリスクを試算できます。年間コストの全体像を把握するためにご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="extra-high-voltage-electricity-bill-guide" />
      </div>
    </main>
  );
}
