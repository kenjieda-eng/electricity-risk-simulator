import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";

const pageTitle =
  "特別高圧電力見積書の見方｜大規模契約の比較で確認したい項目";
const pageDescription =
  "特別高圧電力の見積書で確認すべき項目を解説。負荷率・デマンド条件・複雑な料金体系・需要調整対応など、大規模契約の比較で失敗しないためのポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "特別高圧電力 見積書 見方",
    "特高 電気 見積 比較 項目",
    "特別高圧 負荷率 デマンド 見積",
    "大規模 電力 見積 比較",
    "特高 電力 見積書 確認",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/extra-high-voltage-quotation-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/extra-high-voltage-quotation-guide",
    siteName: "法人電気料金ナビ",
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

const quotationSections = [
  {
    heading: "特高見積書の特徴：個別交渉と複雑な条件",
    content: [
      "特別高圧電力の見積書は、高圧と比べて個別交渉の要素が強く、書式・内容が電力会社ごとに大きく異なります。標準メニューだけでなく、需要特性に応じた個別条件が盛り込まれることが多く、見積書だけでなく「料金条件覚書」「特別条件書」などの附属書類が添付される場合があります。",
      "見積書の比較を始める前に、全ての見積書が同じ前提条件（使用量・デマンド・供給条件）で作成されていることを確認してください。特高では使用量が大きいため、前提条件が少し違うだけで試算金額が大きく変わります。",
    ],
    checkPoints: [
      "全ての見積書が同一の前提条件（使用量・デマンド）で試算されているか",
      "附属書類（特別条件書・覚書等）の有無と内容の確認",
      "料金メニューの名称と適用される標準・個別条件の区分",
    ],
  },
  {
    heading: "負荷率と基本料金の関係",
    content: [
      "負荷率とは、最大需要電力（デマンド）に対して実際にどれだけ電力を使っているかを示す指標です。負荷率（%）= 月間使用量（kWh）÷（最大需要電力（kW）× 月間時間数（h））× 100 で計算されます。負荷率が高いほど「契約電力に対して効率よく使っている」状態であり、基本料金の単位当たりコストが下がります。",
      "特高電力の見積書では、負荷率の想定が料金設計に影響する場合があります。「負荷率が高い場合に有利な料金体系」「低い場合でも最低料金が設定されている体系」など、料金構造の設計意図を理解しておくことが、自社に有利な契約を選ぶための前提になります。見積書の試算と自社の実際の負荷率を照合してください。",
    ],
    checkPoints: [
      "自社の実際の年間・月次負荷率の算出",
      "見積書の試算に使用された負荷率の前提確認",
      "料金体系が高負荷率・低負荷率のどちらに有利か",
      "最低料金・最低使用量条件の有無と水準",
    ],
  },
  {
    heading: "時間帯別・季節別料金の詳細確認",
    content: [
      "特高電力の電力量料金は、昼間・夜間・ピーク時間帯に加えて、夏季・冬季・その他季節の区分が組み合わさった多段階の料金体系が多く使われます。見積書には各区分の単価が一覧で示されますが、自社の稼働パターンで実際にかかるコストを算出するためには、各時間帯・季節帯の実使用量データが必要です。",
      "見積書の料金単価を見る際は、自社が最も電力を使う時間帯・季節の単価を特に重視してください。ピーク時間帯の単価が他社より高くても、昼間時間帯が安ければ稼働パターンによってはコスト有利になります。単純な単価比較ではなく、実使用量をもとにした年間総コスト試算が必要です。",
    ],
    checkPoints: [
      "時間帯別・季節別の単価一覧と現行との比較",
      "自社の最大使用時間帯における単価の比較",
      "各社の時間帯区分の定義が同一かどうか",
      "実使用量データを使った年間総コスト試算の実施",
    ],
  },
  {
    heading: "需要調整・ディマンドレスポンスへの対応条件",
    content: [
      "特高クラスの需要家に対しては、電力会社から「需要調整メニュー」「ディマンドレスポンス（DR）対応」に関する条件が提示されることがあります。電力需給が逼迫した際に使用量を抑制することと引き換えに、料金割引や電気料金の削減インセンティブが得られる仕組みです。",
      "DRへの対応可否は施設の運用状況・設備構成によって異なります。見積書にDR対応メニューが含まれている場合は、実際に対応可能か、対応した場合の想定削減額を確認しておくことが有用です。DRへの参加義務や参加条件（参加頻度・抑制量等）も合わせて確認してください。",
    ],
    checkPoints: [
      "需要調整メニュー・DR対応条件の有無",
      "DR参加時の割引条件・インセンティブ水準",
      "DR参加の義務・条件（頻度・最低抑制量等）",
      "自社の設備で実際にDRに対応できるか",
    ],
  },
  {
    heading: "調達構造の開示と市場リスクの評価",
    content: [
      "特高クラスの見積書では、電力の調達構造（固定単価型・市場連動型・スポット調達比率等）が明示されるケースがあります。特に大規模需要家向けでは「固定価格部分○%＋スポット連動部分○%」のような複合型調達の提案が増えています。",
      "市場連動比率が高い見積書は、電力市場が低い局面では有利になりますが、市場が高騰した際のコスト上振れリスクが高くなります。調達構造の開示がない見積書については、担当者に「調達コストの変動が将来の請求額にどう影響するか」を確認しておくことが重要です。",
    ],
    checkPoints: [
      "調達構造（固定型・市場連動型・複合型）の開示有無",
      "市場連動部分の比率と上限（キャップ）設定",
      "市場高騰時の最大負担額の試算（シナリオ分析）",
      "燃料費調整額の上限設定の有無",
    ],
  },
  {
    heading: "長期契約・解約条件と更新タイミング",
    content: [
      "特高電力の契約は1〜3年、場合によってはそれ以上の長期契約が一般的です。長期契約には単価優遇があることが多い一方で、解約・変更の柔軟性が失われます。見積書には契約期間・解約通知期間・解約時の違約金条件が明記されているはずです。",
      "特に注意が必要なのは、契約期間中に電力料金が大幅に下落した場合に途中解約・変更ができないケースです。一方で、エネルギー価格が上昇局面にある現在は、一定期間固定できる長期契約が有利に働く場面もあります。現行契約の満了時期と新契約の開始タイミングを照合し、空白期間や重複が生じないよう日程を確認してください。",
    ],
    checkPoints: [
      "契約期間（年数）と自動更新の有無・条件",
      "解約時の違約金・精算方法",
      "解約通知の必要期間（通知から解約まで何か月か）",
      "現行契約の満了時期と新契約開始の日程合わせ",
    ],
  },
];

const faq = [
  { question: "特別高圧電力の見積書で最初に確認すべきことは何ですか？", answer: "負荷率・デマンド前提・時間帯別の使用量実績を確認し、見積が適切な前提で作成されているかを確認します。特別高圧は条件差の金額インパクトが大きいため、前提条件の統一が比較の精度を左右します。" },
  { question: "特別高圧の個別交渉型見積ではどのような項目が交渉対象になりますか？", answer: "基本料金単価・電力量料金単価・力率の扱い・燃料費調整額の上限設定・需要調整対応の有無・契約期間などが主な交渉項目です。使用量・負荷率が高いほど交渉力が増す傾向があります。" },
  { question: "特別高圧の見積書で負荷率はなぜ重要ですか？", answer: "特別高圧では負荷率（年間最大電力に対する平均電力の比率）が高いほど電力会社のコスト回収率が高まり、より有利な単価を引き出せる場合があります。見積依頼時に実績の負荷率データを提供することが重要です。" },
];

export default function ExtraHighVoltageQuotationGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="特別高圧電力見積書の見方｜大規模契約の比較で確認したい項目"
        description="特別高圧電力の見積書で確認すべき項目を解説。負荷率・デマンド条件・複雑な料金体系・需要調整対応など、大規模契約の比較で失敗しないためのポイントを整理します。"
        url="https://simulator.eic-jp.org/extra-high-voltage-quotation-guide"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "特別高圧電力見積書の見方" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          特別高圧電力見積書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          特別高圧電力の見積書は、高圧と比べて個別交渉の要素が強く、負荷率・時間帯別料金・需要調整対応など確認すべき条件が複雑です。見積金額だけで判断すると、隠れたリスクや条件の違いを見落とすことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の見積書については{" "}
          <Link
            href="/high-voltage-quotation-guide"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            高圧電力見積書の見方
          </Link>{" "}
          で別途解説しています。このページでは特高契約に特有の確認ポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>特高見積書の個別交渉条件の確認方法</li>
            <li>負荷率と基本料金の関係性</li>
            <li>時間帯別・季節別料金を使った年間コスト試算の考え方</li>
            <li>需要調整・市場リスク・長期契約条件のポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            特高見積書と高圧見積書の主な違い
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特高と高圧の見積書比較では、基本的な確認項目は共通していますが、特高ならではの確認ポイントが追加で必要です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300 bg-slate-50">
                  <th className="p-3 text-left font-semibold text-slate-900">確認項目</th>
                  <th className="p-3 text-left font-semibold text-slate-900">高圧</th>
                  <th className="p-3 text-left font-semibold text-slate-900">特別高圧</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="p-3 text-slate-700">料金メニュー</td>
                  <td className="p-3 text-slate-700">標準メニューが中心</td>
                  <td className="p-3 text-slate-700">個別交渉・特約が多い</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">負荷率の影響</td>
                  <td className="p-3 text-slate-700">限定的</td>
                  <td className="p-3 text-slate-700">料金設計に直結する場合あり</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">需要調整対応</td>
                  <td className="p-3 text-slate-700">少ない</td>
                  <td className="p-3 text-slate-700">DR条件が提示される場合あり</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">調達構造の開示</td>
                  <td className="p-3 text-slate-700">一般的でない</td>
                  <td className="p-3 text-slate-700">固定・市場連動比率が示される場合</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700">契約期間</td>
                  <td className="p-3 text-slate-700">1〜2年が多い</td>
                  <td className="p-3 text-slate-700">3年以上の長期も多い</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {quotationSections.map((section) => (
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
            
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

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
            特高見積の比較は専門的なサポートの活用も有効
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            特別高圧電力の見積比較は、複数の条件を同時に評価する必要があるため、内部だけで完結させることが難しいケースがあります。エネルギーコンサルタントや電力調達の専門家のサポートを活用することで、交渉力の向上と判断ミスの回避につながります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            まずは現行の請求書データを整理し、年間コストの全体像と変動要因を把握することから始めてください。その上で、各社の見積条件を整理した比較表を作成すると、意思決定の透明性が高まります。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">負荷率別のコスト影響（特別高圧・契約電力3,000kW）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            負荷率（実際の平均使用量÷契約電力）が異なると、kWhあたりの実質単価が大きく変わります。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">負荷率</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月間使用量</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">基本料金/kWh</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">実質単価目安</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">月額合計目安</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">40%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">864,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">4.9円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-red-700">約19.4円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約1,676万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">60%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,296,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">3.2円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-slate-900">約17.7円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約2,295万円</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">80%</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">1,728,000kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">2.4円/kWh</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-green-700">約16.9円/kWh</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">約2,921万円</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-xs text-slate-500">※ 基本料金1,400円/kW、電力量料金14.5円/kWh、力率割引0.97で算定。燃調費・再エネ賦課金含まず。</p>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "特別高圧の料金制度・見積書の規制情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・系統情報" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="特別高圧電力の見積書理解と比較判断に役立てるための関連ページです。"
          links={[
            {
              href: "/extra-high-voltage-electricity-bill-guide",
              title: "特別高圧電力の請求書の見方",
              description:
                "見積比較の前提となる特高請求書の確認ポイントを整理。",
            },
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "高圧電力の見積書で確認すべき項目と注意点。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description:
                "複数社の見積を横並びで比較するための整理方法。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が基本料金に与える影響と管理方法。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "時間帯別・季節別の電力量料金の読み方と活用方法。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "契約電力と基本料金単価の関係、力率調整の仕組み。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "特別高圧の見積比較後のプラン判断軸を整理できます。",
            },
            {
              href: "/fuel-cost-adjustment",
              title: "燃料費調整額とは",
              description: "見積書の燃調条件を読むための基礎知識を確認できます。",
            },
          ]}
        />

        <ContentCta
          heading="大規模施設の電力コストをシミュレーションする"
          description="特別高圧電力の使用量・デマンドをもとに電気料金の上振れリスクを試算できます。見積比較の前に現状の把握にご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="extra-high-voltage-quotation-guide" />
      </div>
    </main>
    </>
  );
}
