import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";
import { DEMAND_SEASON_HOUR } from "../../data/demandData";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import MarketDataDownload from "../../components/market-data/MarketDataDownload";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle =
  "デマンド値の見方｜契約電力と基本料金への影響を理解する";
const pageDescription =
  "デマンド値（最大需要電力）が契約電力・基本料金にどう影響するかを解説。30分計測の仕組み・デマンドコントローラーの役割・デマンド管理の実務ポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "デマンド値 見方",
    "デマンド 契約電力 基本料金",
    "最大需要電力 30分 計測",
    "デマンドコントローラー デマコン",
    "高圧 デマンド管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/demand-value-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/demand-value-guide",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/basic", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/basic"],
  },
};

const demandSections = [
  {
    heading: "デマンド値（最大需要電力）とは",
    content: [
      "デマンド値とは「最大需要電力」のことで、30分間の平均電力の最大値として記録されます。単位はkW（キロワット）で、使用したエネルギー量（kWh）とは異なります。電力量（kWh）が「どれだけ使ったか」を示すのに対して、デマンド（kW）は「どれだけ同時に使ったか（電力の最大瞬間風速）」を示す指標です。",
      "高圧電力では、電力会社のスマートメーターが30分ごとに電力量を計測し、各30分間の平均電力値を積み上げます。ある30分間（例：9:30〜10:00）に使われた電力量が60kWhであれば、その30分間の平均電力は60kWh÷0.5h = 120kW となります。1か月間の全30分間の中で最も高かった値がその月の「最大需要電力（デマンド値）」です。",
    ],
    checkPoints: [
      "自社の直近12か月の月別デマンド値（最大需要電力、kW）",
      "デマンド値が最も高くなった月・時間帯の特定",
      "使用量（kWh）とデマンド（kW）の違いを理解しているか",
    ],
  },
  {
    heading: "デマンド値が契約電力を決める仕組み",
    content: [
      "高圧電力（および特別高圧）では、過去1年間（当月を含む直近12か月）の月別デマンド値の最大値が、翌月以降の「契約電力」として設定されます。これを「1年間固定制（デマンド自動更新制）」といいます。今月のデマンドが過去最高値を更新すると、その値が契約電力となり、1年後まで基本料金の計算基礎になります。",
      "例えば、ある月に設備の集中稼働や特別な作業が重なり、デマンドが通常より20%高い値を記録したとします。そのデマンド値は12か月間継続して契約電力に反映され、毎月の基本料金が通常より20%高い水準になります。デマンド管理の重要性は、この「一時的なピークが長期間のコストに響く」という構造にあります。",
    ],
    checkPoints: [
      "現在の契約電力は何年何月のデマンド実績から設定されているか",
      "その高デマンドが発生した原因（設備故障・特別作業・季節要因等）",
      "来月以降に契約電力が下がる見込みはあるか（デマンド実績の推移確認）",
      "通常時のデマンドと契約電力の差（余裕の大きさ）",
    ],
  },
  {
    heading: "デマンドコントローラー（デマコン）の役割",
    content: [
      "デマンドコントローラー（デマコン）は、30分ごとの電力使用量をリアルタイムで監視し、設定した目標デマンド値を超えそうになると警報を発したり、制御可能な設備（空調・照明・特定の生産設備等）を自動でOFF・制御したりする装置です。",
      "デマコンの設置・運用によって、30分電力のピーク値を意図的に抑制することができます。目標デマンドを現在の契約電力より低く設定して運用を続けることで、1年後に契約電力が下がり、基本料金の削減につながります。デマコンは投資コストに対する基本料金削減効果が明確に計算できるため、費用対効果を評価しやすい省エネ設備の一つです。",
    ],
    checkPoints: [
      "デマンドコントローラーの設置有無",
      "設定目標デマンド値と実績の乖離状況",
      "デマコンで制御できる設備の種類と台数",
      "目標デマンドを現在の契約電力より低く設定して運用しているか",
    ],
  },
  {
    heading: "デマンドが高くなりやすい状況",
    content: [
      "デマンドが急上昇しやすいのは、短時間に多くの電気機器が同時に稼働するタイミングです。よくある例として、①始業時間帯（空調・照明・生産設備が一斉に起動）、②夏季の猛暑日（冷房負荷が集中）、③生産ラインのフル稼働時、④設備保全後の起動試験などが挙げられます。",
      "デマンドの高さは使用量（kWh）の多さとは必ずしも一致しません。短時間の集中使用がデマンドを引き上げますが、使用量自体は少ない場合もあります。デマンドを下げるためには「電力使用の平準化」が基本戦略です。設備の起動タイミングをずらす、空調の段階的起動を設定するなど、デマンドのピークを分散させる運用が効果的です。",
    ],
    checkPoints: [
      "デマンドが最大になりやすい時間帯・季節・状況の特定",
      "始業時間帯の一斉起動を段階的に分散する余地があるか",
      "夏季の冷房負荷ピーク対策の実施状況",
      "設備起動・試験タイミングの調整可否",
    ],
  },
  {
    heading: "デマンド実績の読み方と分析",
    content: [
      "デマンド実績は月次の請求書に記載されているほか、電力会社のWebシステムや計測機器の管理画面で30分単位のデータを参照できる場合があります。月次デマンドの推移を確認することで、デマンドが高い月・低い月のパターンが把握でき、デマンド管理の優先時期を特定できます。",
      "30分単位のデマンドデータが取得できる場合は、年間を通じて何時・何曜日にデマンドが高くなりやすいかを分析できます。この分析結果がデマコンの目標設定値や、設備運用改善の根拠データになります。電力会社のスマートメーターデータを利用した詳細分析は、デマンド管理改善の出発点として有効です。",
    ],
    checkPoints: [
      "月次デマンド実績（請求書）の直近12か月分の整理",
      "30分単位のデマンドデータの取得可否（スマートメーター活用）",
      "デマンドが高い時間帯・曜日・月のパターン分析",
      "デマンド削減の目標値（基本料金削減試算）の設定",
    ],
  },
  {
    heading: "デマンド削減の効果試算",
    content: [
      "デマンドを削減した場合の基本料金削減効果は明確に試算できます。例えば、現在の契約電力が500kW・基本料金単価が1,500円/kWの場合、デマンドを10kW削減して契約電力が490kWになると、毎月の基本料金は10kW × 1,500円 = 15,000円（年間18万円）の削減になります。",
      "デマコンの設置費用を100万円とすると、投資回収期間は100万円÷18万円/年 ≒ 5.6年です。デマコン以外にも、設備の運用改善（起動タイミングの分散等）でデマンドを抑制できる場合は、ほぼコストゼロでの基本料金削減が実現します。自社の状況に合わせてデマンド削減の費用対効果を試算してみてください。",
    ],
    checkPoints: [
      "現在の基本料金単価（円/kW）の確認",
      "デマンドを何kW削減できれば契約電力が下がるかの試算",
      "年間の基本料金削減見込み額の試算",
      "デマコン設置・運用改善のコストとの比較",
    ],
  },
];

const faq = [
  { question: "デマンド値はどのように計測されますか？", answer: "電力会社の電力量計が30分ごとの平均電力（kW）を計測します。その月の最大値が「当月最大デマンド」となり、直近12か月の最高値が契約電力（翌年度分）の算定に使用されます。" },
  { question: "デマンド値が上がると電気代はどのくらい増えますか？", answer: "契約電力が1kW増加すると基本料金単価（高圧で概ね1,500〜2,000円/kW程度）分だけ毎月の基本料金が増加します。50kW上昇すると月7.5〜10万円、年間90〜120万円の基本料金増加になる計算です。" },
  { question: "デマンド値を下げるためにできることは何ですか？", answer: "デマンドコントローラーによる自動制御、ピーク時間帯の大電力設備の稼働ずらし、空調の集中起動回避などが効果的です。夏冬のピーク月（7月・8月・1月・2月）に集中的に取り組むことが重要です。" },
];

export default function DemandValueGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline="デマンド値の見方｜契約電力と基本料金への影響を理解する"
        description="デマンド値（最大需要電力）が契約電力・基本料金にどう影響するかを解説。30分計測の仕組み・デマンドコントローラーの役割・デマンド管理の実務ポイントを整理します。"
        url="https://simulator.eic-jp.org/demand-value-guide"
        datePublished="2026-04-10"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "基礎から知る", url: "https://simulator.eic-jp.org/articles/basic" },
          { name: "デマンド値の見方" },
        ]}
        faq={faq}
      />
    <ReadingProgressBar />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          デマンド値の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の基本料金は「契約電力（kW）」によって決まり、その契約電力は過去1年間の最大需要電力（デマンド値）から自動的に設定されます。デマンドの仕組みを理解することは、基本料金の管理と削減において最も重要な基礎知識の一つです。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、デマンド値の意味・計測の仕組み・契約電力への影響・デマンド管理の実務ポイントを解説します。基本料金の算出については{" "}
          <Link
            href="/basic-charge-explained"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            基本料金の見方
          </Link>{" "}
          もあわせてご覧ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>デマンド値（最大需要電力）の意味と計測方法</li>
            <li>デマンドが契約電力・基本料金に影響する仕組み</li>
            <li>デマンドコントローラー（デマコン）の役割</li>
            <li>デマンド削減による基本料金削減の試算方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド・契約電力・基本料金の関係図
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンドから基本料金に至るまでの関係を整理します。
          </p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-center text-sm font-semibold text-slate-900">
                30分間の電力使用量を計測 → 最大値がデマンド値（kW）
              </p>
            </div>
            <div className="text-slate-400">↓</div>
            <div className="w-full max-w-2xl rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-center text-sm font-semibold text-slate-900">
                過去12か月のデマンド最大値 → 契約電力（kW）として設定
              </p>
            </div>
            <div className="text-slate-400">↓</div>
            <div className="w-full max-w-2xl rounded-lg border border-sky-200 bg-sky-50 p-4">
              <p className="text-center text-sm font-semibold text-slate-900">
                契約電力 × 基本料金単価 × 力率係数 = 基本料金（毎月固定）
              </p>
            </div>
          </div>
        </section>

        {demandSections.map((section) => (
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            デマンド管理の実践チェックリスト
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド管理の取り組み状況を自己チェックするための項目です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">現状把握</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>直近12か月の月別デマンド値を把握している</li>
                <li>現在の契約電力がいつのデマンドで設定されたか把握している</li>
                <li>デマンドが高くなりやすい時間帯・状況を特定している</li>
                <li>通常のデマンドと契約電力の差（余裕値）を把握している</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">対策実施</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                <li>デマンドコントローラーが設置・稼働している</li>
                <li>目標デマンドを契約電力より低く設定している</li>
                <li>始業時の一斉起動を段階的に分散する運用がある</li>
                <li>デマンド削減の年間効果を金額で把握している</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">季節×時間帯で見るデマンドのターゲット</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド抑制の効果を最大化するには、「どの季節の何時台」にピークが集中するかを把握することが重要です。全国実測データ（OCCTO公表データ集計）による季節別・時間帯別の需要パターンを確認します。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">季節×時間帯の需要比較（抜粋）</h3>
          <div className="mt-3 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700 sm:text-base">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">時間帯</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">夏（MW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">冬（MW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">春（MW）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">秋（MW）</th>
                </tr>
              </thead>
              <tbody>
                {DEMAND_SEASON_HOUR.filter((d) => [8, 10, 12, 14, 16, 18, 20].includes(d.hour)).map((d) => {
                  const isSummerPeak = d.hour === 14;
                  const isWinterPeak = d.hour === 18;
                  return (
                    <tr key={d.hour}>
                      <td className="border border-slate-200 px-3 py-2 font-semibold">{d.hour}時</td>
                      <td className={`border border-slate-200 px-3 py-2 text-right tabular-nums ${isSummerPeak ? "bg-red-50 font-bold text-red-700" : ""}`}>
                        {d.summer.toLocaleString()}
                      </td>
                      <td className={`border border-slate-200 px-3 py-2 text-right tabular-nums ${isWinterPeak ? "bg-red-50 font-bold text-red-700" : ""}`}>
                        {d.winter.toLocaleString()}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right tabular-nums">
                        {d.spring.toLocaleString()}
                      </td>
                      <td className="border border-slate-200 px-3 py-2 text-right tabular-nums">
                        {d.autumn.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm leading-7 text-red-900">
              <span className="font-semibold">夏は13〜14時の冷房ピーク、冬は18時の暖房+照明ピークが最大。</span>デマンド抑制はこの時間帯をターゲットにすると最も効果的です。
              夏14時（123,372MW）・冬18時（123,157MW）が各季節の最大ポイントです。
      <MarketDataDownload
        apiPath="/api/datasets/demand"
        caption="全国電力需要データ（CC BY 4.0、商用利用可）"
      />
            </div>
            
      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="rounded-lg border border-sky-200 bg-sky-50 p-3 text-sm leading-7 text-sky-900">
              春・秋は10万MW以下で安定しており、この時期のデマンド管理は比較的容易です。設備点検やデマンドコントローラーの目標値再設定など、準備作業を行うのに適した時期です。
            </div>
          </div>
        </section>

        <SourcesAndFaq
          faq={faq}
          sources={[
            { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp", description: "デマンド制度・契約電力に関するデータ" },
            { name: "OCCTO 電力広域的運営推進機関", url: "https://www.occto.or.jp", description: "需給データ・デマンド情報" },
            { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp", description: "電力市場の監視データ" },
          ]}
          publishedAt="2026-04-10"
        />

        <RelatedLinks
          heading="関連ページ"
          intro="デマンド管理と基本料金削減に役立てるための関連ページです。"
          links={[
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "デマンドと連動する基本料金の算出構造と削減アプローチ。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "デマンド（kW）と使用量（kWh）の違いと電力量料金の仕組み。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "請求書でデマンド値・契約電力を確認するためのポイント。",
            },
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "見積書で基本料金・デマンド条件を確認する方法。",
            },
            {
              href: "/how-to-read-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description:
                "請求書全体の構造と各項目の読み方を整理。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description:
                "デマンド・契約電力を含む見積書の比較整理方法。",
            },
            {
              href: "/how-to-start-electricity-contract-review",
              title: "電力契約の見直しを始めるには",
              description: "デマンド管理の取り組みを契約見直しのステップへつなげられます。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "デマンド・基本料金を把握したうえで、プラン選択の軸を整理できます。",
            },
            {
              href: "/concierge",
              title: "AI コンシェルジュで関連情報を探す",
              description: "35 カテゴリを横断して、自社のリスクに該当する記事を AI が提案します。",
            },
          ]}
        />

        <AuthorBadge publishedAt="2026-04-10" updatedAt="2026-04-10" />

        <ContentCta
          heading="デマンド・基本料金のリスクをシミュレーションする"
          description="現在の契約電力・デマンドをもとに、基本料金の変動リスクを試算できます。デマンド削減の効果を定量的に把握するためにご活用ください。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="demand-value-guide" />
      </div>
      <div className="mt-8">
        <ContactCtaCard
          source="article"
          variant="secondary"
          heading="電力コストの見直し、専門家に相談しませんか？"
          description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
        />
      </div>

    </main>
    </>
  );
}
