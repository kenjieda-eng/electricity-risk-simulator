import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ } from "../../data/categoryFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";

const __CATEGORY_FAQ__ = CATEGORY_FAQ["price-trends"];


const pageTitle =
  "中小企業と大企業で電気料金高騰の影響はどう違うか｜企業規模別の負担分析";
const pageDescription =
  "中小企業と大企業で電気料金高騰の影響がどう違うかを分析。売上比、契約区分、交渉力、価格転嫁力の差を整理。中小企業が特に厳しい構造的理由を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中小企業 電気料金 影響",
    "電気代高騰 中小企業 大企業 違い",
    "企業規模 電気料金 負担",
    "中小企業 電気代 高い理由",
    "電気代値上げ 中小 影響",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/sme-vs-large-company-electricity-impact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/sme-vs-large-company-electricity-impact",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
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

// --- データ定義 ---

type ScaleRow = {
  scale: string;
  salesScale: string;
  annualElectricity: string;
  salesRatio: string;
  contract: string;
  negotiationPower: string;
  pricePassOn: string;
};

const SCALE_IMPACT_ROWS: ScaleRow[] = [
  {
    scale: "小規模事業者",
    salesScale: "〜5,000万円",
    annualElectricity: "30〜150万円",
    salesRatio: "1〜5%",
    contract: "低圧（従量電灯・低圧電力）",
    negotiationPower: "ほぼなし",
    pricePassOn: "困難（固定価格・慣行）",
  },
  {
    scale: "中小企業",
    salesScale: "5,000万〜5億円",
    annualElectricity: "150〜1,500万円",
    salesRatio: "0.5〜3%",
    contract: "高圧（主力）・一部低圧",
    negotiationPower: "限定的",
    pricePassOn: "業種依存（難しい場合が多い）",
  },
  {
    scale: "中堅企業",
    salesScale: "5〜100億円",
    annualElectricity: "1,500万〜5,000万円",
    salesRatio: "0.3〜2%",
    contract: "高圧・特別高圧（混在）",
    negotiationPower: "一定あり（複数社見積もり可能）",
    pricePassOn: "一部転嫁できる場合もある",
  },
  {
    scale: "大企業",
    salesScale: "100億円超",
    annualElectricity: "5,000万円〜数十億円",
    salesRatio: "0.1〜1%（製造業除く）",
    contract: "特別高圧・高圧（主力）",
    negotiationPower: "高い（相対交渉・入札可能）",
    pricePassOn: "転嫁力・価格決定力ともに高い",
  },
];

const STRUCTURAL_REASONS = [
  {
    no: "①",
    title: "低圧契約は高圧・特別高圧より単価が高い",
    detail:
      "電力の供給コストは大口ほど低くなる構造があり、低圧（〜50kW）は高圧（50〜2,000kW）や特別高圧（2,000kW超）に比べてkWh単価が高くなる。\n" +
      "小規模事業者や中小企業の一部は低圧契約が中心となるため、同じ電気代上昇率でも出発点の単価が高く、負担が重くなりやすい。",
    data: "低圧従量電灯：25〜35円/kWh前後 ／ 高圧：15〜22円/kWh前後 ／ 特別高圧：12〜18円/kWh前後（2024年目安）",
  },
  {
    no: "②",
    title: "情報格差：節電・契約見直しノウハウへのアクセスが限られる",
    detail:
      "大企業にはエネルギー管理士・施設管理部門・外部コンサルタントを活用するリソースがある。\n" +
      "中小企業では担当者が兼務であることが多く、最適な料金メニューや電力会社の切り替えオプションの比較検討まで手が回りにくい。",
    data: "エネルギー管理士の選任義務は「年間エネルギー使用量1,500kL以上（原油換算）」の事業者に限られ、多くの中小企業は対象外。",
  },
  {
    no: "③",
    title: "専任担当不在：契約更新時の交渉が属人化・形骸化しやすい",
    detail:
      "電力会社との契約更新は数年に一度の機会だが、担当者の異動・退職によって交渉ノウハウが引き継がれず、従来契約のまま更新されるケースが多い。\n" +
      "大企業では調達部門やエネルギー専任チームが継続的に対応するため、契約条件の定期的な見直しが制度化されている。",
    data: "",
  },
  {
    no: "④",
    title: "電力会社との交渉力が弱く、メニュー選択肢が少ない",
    detail:
      "電力使用量が大きい大口需要家は、新電力・旧一般電気事業者の双方から積極的な営業アプローチを受け、入札・相見積もりが成立しやすい。\n" +
      "小口需要家は切り替えの恩恵が小さいため新電力側の関心が薄く、選べるメニューの幅が限られる。市場の競争が大口優位になっている。",
    data: "",
  },
  {
    no: "⑤",
    title: "価格転嫁力が低く、コスト増がそのまま利益を圧迫する",
    detail:
      "中小企業はBtoB取引において価格交渉力が弱く、原材料費・電気代が上昇しても取引先への価格転嫁が難しい。\n" +
      "大企業は価格決定力・コスト管理能力ともに高く、値上げの一部を川下に転嫁できる可能性が高い。中小企業は利益率が低く、コスト増が経営危機に直結しやすい。",
    data: "中小企業庁「価格転嫁状況実態調査」では、中小企業の約6割がコスト上昇分を「全く転嫁できていない」または「一部しか転嫁できていない」と回答（2023年）。",
  },
];

type ActionRow = {
  scale: string;
  priority1: string;
  priority2: string;
  priority3: string;
  priority4: string;
};

const ACTION_PATTERNS: ActionRow[] = [
  {
    scale: "小規模事業者",
    priority1: "低圧→高圧への切り替え検討（使用量拡大時）",
    priority2: "電力会社の低圧向けメニュー比較（時間帯別など）",
    priority3: "LED・空調の省エネ投資（補助金活用）",
    priority4: "シミュレーターで料金リスクを把握する",
  },
  {
    scale: "中小企業",
    priority1: "高圧メニューの見直し・新電力比較",
    priority2: "デマンド管理（ピーク削減で基本料金削減）",
    priority3: "省エネ診断・BCP兼用の蓄電池検討",
    priority4: "電気代の月次モニタリング体制の構築",
  },
  {
    scale: "中堅企業",
    priority1: "複数電力会社との相見積もり・入札実施",
    priority2: "固定型・市場連動型のポートフォリオ管理",
    priority3: "再エネ調達（PPA・グリーン電力証書）の検討",
    priority4: "エネルギー管理の専任化・外部委託",
  },
  {
    scale: "大企業",
    priority1: "相対契約・長期契約でボラティリティヘッジ",
    priority2: "自家発電・オフサイトPPAの戦略的導入",
    priority3: "グループ一括調達でスケールメリット獲得",
    priority4: "カーボンニュートラル目標との整合設計",
  },
];

export default function SmeVsLargeCompanyElectricityImpactPage() {
  return (
    <>
      <ArticleJsonLd
        headline="中小企業と大企業で電気料金高騰の影響はどう違うか｜企業規模別の負担分析"
        description="中小企業と大企業で電気料金高騰の影響がどう違うかを分析。売上比、契約区分、交渉力、価格転嫁力の差を整理。中小企業が特に厳しい構造的理由を解説。"
        url="https://simulator.eic-jp.org/sme-vs-large-company-electricity-impact"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "中小企業と大企業で電気料金高騰の影響はどう違うか" },
        ]}
      faq={__CATEGORY_FAQ__}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link
          href="/articles/price-trends"
          className="underline-offset-2 hover:underline"
        >
          電気料金の推移と高止まり
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">中小企業と大企業の影響差</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          中小企業と大企業で電気料金高騰の影響はどう違うか
        </h1>
        <p className="mt-2 text-xs font-medium text-sky-700">
          電気料金の推移と高止まり
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電気料金が高騰する局面では、企業規模によって負担の実態が大きく異なります。
          同じ「電気代が30%上がった」という事象でも、大企業と中小企業では契約区分・交渉力・価格転嫁力・情報へのアクセス力が根本的に違うため、
          利益へのダメージ規模が変わります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、小規模・中小・中堅・大企業の4区分で影響構造を比較し、
          中小企業が特に厳しい5つの構造的理由と、規模別の見直し優先アクションを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* 企業規模別の電気料金影響テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            企業規模別の電気料金影響テーブル
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            売上高・年間電気代・売上高比率・契約区分・交渉力・転嫁力を規模別に整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2">規模</th>
                  <th className="border border-slate-200 px-3 py-2">売上高目安</th>
                  <th className="border border-slate-200 px-3 py-2">年間電気代</th>
                  <th className="border border-slate-200 px-3 py-2">電気代/売上比</th>
                  <th className="border border-slate-200 px-3 py-2">契約区分</th>
                  <th className="border border-slate-200 px-3 py-2">交渉力</th>
                  <th className="border border-slate-200 px-3 py-2">価格転嫁力</th>
                </tr>
              </thead>
              <tbody>
                {SCALE_IMPACT_ROWS.map((row, i) => (
                  <tr
                    key={row.scale}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">
                      {row.scale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.salesScale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.annualElectricity}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-red-700">
                      {row.salesRatio}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.contract}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.negotiationPower}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.pricePassOn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            ※ 年間電気代・売上比は業種・操業状況により大幅に異なる。製造業は上限を超える場合もある。
            契約区分は主力の類型を示す。
          </p>
        </section>

        {/* 電気代+10%値上げ時の利益影響比較 */}
        <section className="rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電気代+10%値上げ時の利益影響：規模別の試算例
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代が10%値上がりした場合の年間コスト増加額と、営業利益への影響倍率を規模別に試算します。
            営業利益率3%を想定した場合の比較です。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                scale: "小規模事業者",
                sales: "3,000万円",
                electricityCost: "90万円",
                increase: "+9万円",
                operatingProfit: "90万円（利益率3%）",
                impact: "利益の10%相当",
                severity: "重大",
              },
              {
                scale: "中小企業",
                sales: "2億円",
                electricityCost: "400万円",
                increase: "+40万円",
                operatingProfit: "600万円（利益率3%）",
                impact: "利益の6.7%相当",
                severity: "大",
              },
              {
                scale: "中堅企業",
                sales: "20億円",
                electricityCost: "2,000万円",
                increase: "+200万円",
                operatingProfit: "6,000万円（利益率3%）",
                impact: "利益の3.3%相当",
                severity: "中",
              },
              {
                scale: "大企業",
                sales: "500億円",
                electricityCost: "2億円",
                increase: "+2,000万円",
                operatingProfit: "15億円（利益率3%）",
                impact: "利益の1.3%相当",
                severity: "小",
              },
            ].map((card) => (
              <div
                key={card.scale}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {card.scale}
                </p>
                <dl className="mt-3 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-slate-500">売上高</dt>
                    <dd className="text-slate-700">{card.sales}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">現状電気代</dt>
                    <dd className="text-slate-700">{card.electricityCost}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">+10%増加額</dt>
                    <dd className="font-semibold text-red-700">{card.increase}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">営業利益</dt>
                    <dd className="text-slate-600 text-xs">{card.operatingProfit}</dd>
                  </div>
                  <div className="mt-2 border-t border-slate-100 pt-2 flex justify-between">
                    <dt className="font-semibold text-slate-700">利益への影響</dt>
                    <dd
                      className={`font-bold ${
                        card.severity === "重大"
                          ? "text-red-700"
                          : card.severity === "大"
                          ? "text-orange-700"
                          : card.severity === "中"
                          ? "text-amber-700"
                          : "text-slate-600"
                      }`}
                    >
                      {card.impact}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 営業利益率3%で試算。電気代比率・利益率は業種によって大きく異なる。
            製造業では影響がさらに大きくなる場合がある。
          </p>
        </section>

        {/* 中小企業が厳しい5つの構造的理由 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            中小企業が特に厳しい5つの構造的理由
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気代高騰の影響が中小企業で深刻化しやすい背景には、単純な規模の差を超えた構造的な不利があります。
          </p>
          <div className="mt-4 space-y-4">
            {STRUCTURAL_REASONS.map((reason) => (
              <div
                key={reason.no}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {reason.no} {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 whitespace-pre-line">
                  {reason.detail}
                </p>
                {reason.data && (
                  <p className="mt-2 rounded-lg bg-white border border-slate-200 px-3 py-2 text-xs text-slate-600">
                    参考: {reason.data}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 規模別の見直し優先アクション */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            規模別の見直し優先アクション4パターン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            企業規模によって、効果が出やすい施策の優先順位は異なります。
            自社の規模に対応するパターンから着手ポイントを確認してください。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100 text-left text-xs font-semibold text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 w-24">規模</th>
                  <th className="border border-slate-200 px-3 py-2">優先①</th>
                  <th className="border border-slate-200 px-3 py-2">優先②</th>
                  <th className="border border-slate-200 px-3 py-2">優先③</th>
                  <th className="border border-slate-200 px-3 py-2">優先④</th>
                </tr>
              </thead>
              <tbody>
                {ACTION_PATTERNS.map((row, i) => (
                  <tr
                    key={row.scale}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900 align-top">
                      {row.scale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.priority1}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.priority2}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.priority3}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700 align-top">
                      {row.priority4}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
          <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
            <li>・中小企業は低圧契約の単価の高さ、情報格差、交渉力の弱さ、転嫁困難という4重の構造的不利を抱えており、同じ値上げ率でも利益へのダメージが大きい。</li>
            <li>・売上高比での電気代負担は規模が小さいほど高くなる傾向があり、営業利益率が低い中小企業ほど「電気代+10%」が経営危機に直結しやすい。</li>
            <li>・中小企業の優先アクションは、まず契約区分（低圧→<Link href="/high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">高圧</Link>の検討）と電力会社の比較見直し。次に<Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド</Link>管理と省エネ投資（補助金活用）。</li>
            <li>・シミュレーターを使って自社の電気代リスクスコアを把握し、見直しの「緊急度」を数字で経営判断に組み込むことが最初のステップ。</li>
          </ul>
        </section>
      </section>

      <div className="mt-6">
        <GlossaryLinks currentSlug="sme-vs-large-company-electricity-impact" terms={["高圧電力", "特別高圧", "基本料金", "電力量料金", "再エネ賦課金", "契約電力"]} />
      </div>

      {/* 関連リンク */}
      
      <MarketDataFaq items={__CATEGORY_FAQ__} />

      <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

<div className="mt-8">
        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/electricity-vs-other-business-costs",
              title: "電気料金上昇率と他の事業コスト上昇率を比較する",
              description:
                "電気代・人件費・原材料・物流・賃料の5コストを2019→2025年で比較。コスト全体での電気代の位置づけを整理。",
            },
            {
              href: "/manufacturing-vs-non-manufacturing-electricity-impact",
              title: "製造業と非製造業で電気料金推移の影響はどう出るか",
              description:
                "電力原単位・ピーク特性・転嫁力の違いから業種構造別の影響差を比較分析。",
            },
            {
              href: "/business-electricity-price-benchmark",
              title: "業種別の電気代水準ベンチマーク",
              description:
                "自社の電気代が業種平均と比べて高いか低いかを確認するための参考データ。",
            },
            {
              href: "/5-minimum-checkpoints-for-electricity-contract-review",
              title: "電気契約見直し5つの最低限チェックポイント",
              description:
                "中小企業でも今すぐ実行できる契約見直しのチェックリスト。",
            },
          ]}
        />
      </div>

      {/* CTA */}
      <div className="mt-6">
        <ContentCta
          heading="自社の電気代リスクをシミュレーションする"
          description="売上・電気代・利益率を入力するだけで、電気料金がさらに上昇した場合の利益影響を即時試算します。中小企業の経営者・担当者の方に特におすすめです。"
          links={[
            { href: "/", label: "シミュレーターで診断する" },
            {
              href: "/articles/review-points",
              label: "見直しポイントの解説記事を見る",
            },
          ]}
        />
      </div>
    </main>
    </>
  );
}
