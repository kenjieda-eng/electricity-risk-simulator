import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "再エネメニュー（RE100対応）とは｜法人向け電力契約の料金構造と通常プランとの違い";
const pageDescription =
  "RE100対応の再エネ電力メニューの仕組みを解説。通常プランとの料金差、非化石証書・トラッキング付き証書の扱い、コスト増の目安、導入判断のポイントを整理。";
const pageUrl = "https://simulator.eic-jp.org/renewable-energy-plan-explained";

// 通常プランと再エネメニューの料金構造比較
const planStructureRows = [
  {
    item: "電源",
    standard: "火力中心",
    reWithCert: "火力＋非化石証書",
    reWithSource: "太陽光/風力等指定",
  },
  {
    item: "料金上乗せ",
    standard: "なし",
    reWithCert: "+0.5〜2.0円/kWh",
    reWithSource: "+1.0〜3.0円/kWh",
  },
  {
    item: "月5万kWh施設の月額差",
    standard: "基準",
    reWithCert: "+2.5〜10万円",
    reWithSource: "+5〜15万円",
  },
  {
    item: "CO₂排出係数",
    standard: "0.4〜0.5kg/kWh",
    reWithCert: "実質ゼロ",
    reWithSource: "実質ゼロ",
  },
  {
    item: "RE100適格",
    standard: "×",
    reWithCert: "△（トラッキング付きなら○）",
    reWithSource: "○",
  },
  {
    item: "ESG開示での評価",
    standard: "低い",
    reWithCert: "中〜高",
    reWithSource: "高い",
  },
];

// 月額コスト比較（3パターン × 3使用量規模）
type CostRow = {
  scale: string;
  monthlyKwh: string;
  standard: string;
  reWithCertLow: string;
  reWithCertHigh: string;
  reWithSourceLow: string;
  reWithSourceHigh: string;
};

const monthlyCostRows: CostRow[] = [
  {
    scale: "小規模オフィス",
    monthlyKwh: "1万kWh",
    standard: "基準",
    reWithCertLow: "+0.5万円",
    reWithCertHigh: "+2万円",
    reWithSourceLow: "+1万円",
    reWithSourceHigh: "+3万円",
  },
  {
    scale: "中規模施設",
    monthlyKwh: "5万kWh",
    standard: "基準",
    reWithCertLow: "+2.5万円",
    reWithCertHigh: "+10万円",
    reWithSourceLow: "+5万円",
    reWithSourceHigh: "+15万円",
  },
  {
    scale: "大規模工場・商業施設",
    monthlyKwh: "20万kWh",
    standard: "基準",
    reWithCertLow: "+10万円",
    reWithCertHigh: "+40万円",
    reWithSourceLow: "+20万円",
    reWithSourceHigh: "+60万円",
  },
];

// 非化石証書・トラッキングの説明
const certTypes = [
  {
    name: "非化石証書（トラッキングなし）",
    description:
      "再エネ電源から発電された電気の「環境価値」を切り出した証書。電源の種類（太陽光・風力等）や発電場所の特定はできない。",
    re100: "△（一部RE100基準では認定されない場合がある）",
    cost: "比較的低コスト（0.5〜1.0円/kWh程度の上乗せが多い）",
    notes:
      "RE100やScope 2開示では、電源の追跡可能性（トラッキング）を要求するケースが増えている。",
  },
  {
    name: "非化石証書（トラッキング付き）",
    description:
      "発電所・電源種別・発電時期まで特定できる証書。太陽光・風力・水力など電源を指定して調達できる。",
    re100: "○（多くのRE100基準で認定）",
    cost: "トラッキングなしより高め（1.0〜2.0円/kWh程度の上乗せが多い）",
    notes:
      "大企業のサプライヤー評価でトラッキング付きを要求されるケースが増加している。",
  },
  {
    name: "電源指定型（PPA・自社電源由来）",
    description:
      "特定の再エネ発電所から供給される電力を直接契約する形態。オンサイトPPA・オフサイトPPA・自社設置などがある。",
    re100: "○（最も確実なRE100対応）",
    cost: "契約形態によるが上乗せ幅が大きい傾向（1.0〜3.0円/kWh以上）",
    notes:
      "長期契約（10〜20年）が多い。初期コストの有無・設備所有の有無によって実質コストが変わる。",
  },
];

// 導入判断のポイント
const decisionPoints = [
  {
    no: 1,
    title: "RE100・SBT・CDP等の外部目標をコミットしているか",
    detail:
      "国際的なRE100やSBTiのコミットメントがある場合、証書の種類（トラッキング有無）や電源指定の要否が基準で定められている。外部目標の要件を先に確認してから契約条件を選ぶ。",
  },
  {
    no: 2,
    title: "サプライヤー評価・取引先要求への対応が必要か",
    detail:
      "大手企業・自治体調達の入札条件やスコープ3削減要求として再エネ調達を求められるケースが増えている。取引先の要求水準（トラッキング有無・電源種別）を事前に把握する。",
  },
  {
    no: 3,
    title: "コスト増を許容できる予算・財務的な余地があるか",
    detail:
      "再エネメニューへの切り替えで月額数万〜数十万円のコスト増が生じる。年間増分を試算してESG投資として経営承認を得られるか、コスト転嫁可能な事業構造かを確認する。",
  },
  {
    no: 4,
    title: "ESG開示・統合報告書での再エネ比率目標が設定されているか",
    detail:
      "TCFD対応やGHGプロトコルのScope 2開示で再エネ比率の向上を目標として掲げている場合、達成時期から逆算して契約切り替えのタイミングを計画する。",
  },
  {
    no: 5,
    title: "長期契約のリスクを許容できるか",
    detail:
      "電源指定型（PPAなど）では10〜20年の長期契約になることが多い。その間の事業縮小・移転リスクや、再エネ技術のコスト低下による価格変化リスクを評価する。",
  },
];

// チェックリスト
const checklistItems = [
  {
    no: 1,
    point: "RE100・SBT等の外部コミットメントの要件を確認したか",
    detail:
      "認定機関が定める証書種別・電源種別の要件を把握していないと、契約後に「RE100非適格」と判定されるリスクがある。",
  },
  {
    no: 2,
    point: "非化石証書のトラッキング有無を確認したか",
    detail:
      "トラッキングなしの証書はコストが低いが、RE100認定やESG開示で不十分とされるケースがある。目的に合った証書種別を選ぶ。",
  },
  {
    no: 3,
    point: "電源種別・発電地域の指定が必要かを確認したか",
    detail:
      "「国産再エネのみ」「太陽光のみ」等の条件を取引先・認定機関から求められていないか確認する。",
  },
  {
    no: 4,
    point: "月額コスト増（上乗せ単価×使用量）を年換算で試算したか",
    detail:
      "0.5〜3.0円/kWhの差が月5万kWhでは年間30〜180万円の追加コストになる。投資対効果を経営に説明できる形で試算する。",
  },
  {
    no: 5,
    point: "契約期間・途中解約条件を確認したか",
    detail:
      "電源指定型の長期契約では途中解約に違約金が発生するケースが多い。事業変化リスクと照合して契約期間を選ぶ。",
  },
  {
    no: 6,
    point: "CO₂排出係数ゼロの証明書類（証書番号・発電所情報）を取得できるか確認したか",
    detail:
      "GHGプロトコルのScope 2開示では排出係数の根拠書類が必要。電力会社から証書情報を取得できるかを契約前に確認する。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "再エネメニュー RE100",
    "非化石証書 法人",
    "再エネ電力 法人契約",
    "トラッキング付き証書",
    "Scope2 再エネ",
    "ESG 電気料金 再エネ",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

// --- Page Component ---
export default function RenewableEnergyPlanExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline="再エネメニュー（RE100対応）とは｜法人向け電力契約の料金構造と通常プランとの違い"
        description="RE100対応の再エネ電力メニューの仕組みを解説。通常プランとの料金差、非化石証書・トラッキング付き証書の扱い、コスト増の目安、導入判断のポイントを整理。"
        url="https://simulator.eic-jp.org/renewable-energy-plan-explained"
        datePublished="2026-04-17"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "再エネメニュー（RE100対応）とは" },
        ]}
      />
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      {/* パンくず */}
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">
          ホーム
        </Link>
        <span className="px-2">›</span>
        <Link
          href="/articles/plan-types"
          className="underline-offset-2 hover:underline"
        >
          契約メニューの違いを知る
        </Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">再エネメニュー（RE100対応）とは</span>
      </nav>

      {/* ヘッダー */}
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          再エネメニュー（RE100対応）とは
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          ESGへの関心が高まる中、法人の電力契約でも「再エネ100%」を証明できるメニューへの切り替えが選択肢になりつつあります。ただし、再エネメニューには「非化石証書付き」「トラッキング付き証書」「電源指定型」など複数の種類があり、それぞれコスト・RE100適格性・ESG開示での評価が異なります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、再エネメニューの仕組み・通常プランとの料金構造比較・月額コスト増の目安・非化石証書とトラッキングの違い・導入判断のポイント・チェックリストを整理します。
        </p>
      </header>

      <section className="mt-6 space-y-6">
        {/* H2: 再エネメニューとは */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネメニューとは</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネメニューとは、電力会社が提供する電力契約のうち、使用電力量に対応した「再生可能エネルギー由来の環境価値」をセットで提供するメニューです。契約者は電力の使用に加えて、CO₂排出係数がゼロまたは低い電力を使用したことを証明する証書を受け取ります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            日本では、電力の物理的な流通は通常プランと同じ送配電網を経由します。「再エネ」の実態は、再エネ発電所が発電した電力の「環境価値（非化石価値）」を証書の形で取引・付与する仕組みによって実現されています。
          </p>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">再エネメニューが使われる主な目的</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-600">
              <li>RE100・SBTi等の国際的な再エネ目標達成の証明</li>
              <li>GHGプロトコルに基づくScope 2排出量のゼロカウント</li>
              <li>CDP・TCFD・統合報告書でのCO₂排出削減の開示</li>
              <li>大手取引先・入札案件での再エネ調達要件への対応</li>
            </ul>
          </div>
        </section>

        {/* H2: 通常プランとの料金構造比較テーブル */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">通常プランとの料金構造比較</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            通常プラン・再エネメニュー（証書付き）・再エネメニュー（電源指定）の主要な違いを整理します。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold">通常プラン</th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold bg-emerald-50">
                    再エネメニュー<br />（証書付き）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold bg-sky-50">
                    再エネメニュー<br />（電源指定）
                  </th>
                </tr>
              </thead>
              <tbody>
                {planStructureRows.map((row) => (
                  <tr key={row.item} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.item}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-slate-700">
                      {row.standard}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-emerald-800 bg-emerald-50">
                      {row.reWithCert}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-center text-sky-800 bg-sky-50">
                      {row.reWithSource}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 料金上乗せ幅は電力会社・契約規模・電源種別によって異なります。実際の見積もりで確認してください。
          </p>
        </section>

        {/* H2: 月額コスト比較 */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            再エネメニューの月額コスト比較（3パターン × 3使用量規模）
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            使用量規模別に、通常プランからの月額コスト増の目安を示します。上乗せ単価の下限・上限で試算した幅で表示しています。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">規模</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">月間使用量</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold">通常プラン</th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold bg-emerald-50">
                    証書付き<br />月額差（幅）
                  </th>
                  <th className="border border-slate-200 px-3 py-2 text-right font-semibold bg-sky-50">
                    電源指定型<br />月額差（幅）
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyCostRows.map((row) => (
                  <tr key={row.scale} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.scale}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right">
                      {row.monthlyKwh}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right text-slate-500">
                      {row.standard}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-medium text-emerald-800 bg-emerald-50">
                      {row.reWithCertLow}〜{row.reWithCertHigh}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-right font-medium text-sky-800 bg-sky-50">
                      {row.reWithSourceLow}〜{row.reWithSourceHigh}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">年間コスト増の試算（月5万kWhの場合）</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-xs font-semibold text-emerald-800">証書付きメニュー（+0.5〜2.0円/kWh）</p>
                <p className="mt-1 text-sm text-slate-700">
                  年間：<span className="font-semibold">+30万〜120万円</span>
                  <span className="ml-2 text-xs text-slate-500">（月差2.5〜10万円 × 12か月）</span>
                </p>
              </div>
              <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">
                <p className="text-xs font-semibold text-sky-800">電源指定型（+1.0〜3.0円/kWh）</p>
                <p className="mt-1 text-sm text-slate-700">
                  年間：<span className="font-semibold">+60万〜180万円</span>
                  <span className="ml-2 text-xs text-slate-500">（月差5〜15万円 × 12か月）</span>
                </p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            ※ 上乗せ幅は電力会社・地域・電源種別・調達量によって異なります。実際の見積もりと照合してください。
          </p>
        </section>

        {/* H2: 非化石証書・トラッキングの仕組み */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">非化石証書・トラッキングの仕組み</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネメニューのコアとなる「非化石証書」には複数の種類があり、RE100適格性やESG開示での扱いが異なります。契約前に種別と目的の整合を確認することが重要です。
          </p>
          <div className="mt-4 space-y-4">
            {certTypes.map((cert) => (
              <div key={cert.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">{cert.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{cert.description}</p>
                <div className="mt-3 grid gap-2 md:grid-cols-3">
                  <div className="rounded border border-slate-200 bg-white p-2">
                    <p className="text-xs font-semibold text-slate-600">RE100適格性</p>
                    <p className="mt-1 text-sm text-slate-800">{cert.re100}</p>
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2">
                    <p className="text-xs font-semibold text-slate-600">コスト感</p>
                    <p className="mt-1 text-sm text-slate-800">{cert.cost}</p>
                  </div>
                  <div className="rounded border border-slate-200 bg-white p-2">
                    <p className="text-xs font-semibold text-slate-600">実務上の注意点</p>
                    <p className="mt-1 text-sm text-slate-800">{cert.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-amber-800">注意：GHGプロトコルのScope 2開示について</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              GHGプロトコル（マーケット基準法）でScope 2をゼロとして開示するには、証書の発行・無効化が適切に管理されていること、かつダブルカウントがないことの確認が必要です。電力会社から証書の詳細情報（証書番号・発電所・発電年月）を書面で取得できるかを契約前に確認してください。
            </p>
          </div>
        </section>

        {/* H2: 導入判断のポイント */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">導入判断のポイント（5項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネメニューへの切り替えを検討する際に確認すべき5つの判断軸を整理します。
          </p>
          <div className="mt-4 space-y-3">
            {decisionPoints.map((point) => (
              <div key={point.no} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    {point.no}
                  </span>
                  {point.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* H2: 再エネメニュー選定チェックリスト */}
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">再エネメニュー選定チェックリスト（6項目）</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            再エネメニューを契約する前に確認すべき6つの項目です。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2 text-center font-semibold w-12">No.</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">確認ポイント</th>
                  <th className="border border-slate-200 px-3 py-2 text-left font-semibold">詳細・リスク</th>
                </tr>
              </thead>
              <tbody>
                {checklistItems.map((row) => (
                  <tr key={row.no} className="align-top hover:bg-slate-50">
                    <td className="border border-slate-200 px-3 py-2 text-center font-semibold text-emerald-700">
                      {row.no}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-900">
                      {row.point}
                    </td>
                    <td className="border border-slate-200 px-3 py-2 text-slate-700">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* まとめ */}
        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">まとめ：再エネメニューを選ぶ前に確認すること</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>外部目標（RE100・SBTi・CDP等）の証書種別要件を先に確認し、非適格な証書でコストだけ増やすリスクを回避する</li>
            <li>月額コスト増を年換算して、ESG投資として経営承認できる水準かどうかを事前に試算する</li>
            <li>トラッキング付き証書の必要性を取引先・開示基準の要求水準から判断する</li>
            <li>電源指定型の長期契約では解約条件と事業リスクを照合して契約期間を決める</li>
            <li>GHGプロトコルのScope 2開示では証書の詳細情報（番号・発電所・発電月）を書面で取得できるか確認する</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="renewable-energy-plan-explained" terms={["非化石証書", "再エネ賦課金", "固定プラン", "市場連動プラン", "電力量料金"]} />
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description:
                  "料金構造・変動リスク・予算管理の観点から固定と市場連動を比較します。",
              },
              {
                href: "/executive-esg-electricity-disclosure",
                title: "経営層向けESG電気料金開示のポイント",
                description:
                  "Scope 2開示・再エネ比率・CDPへの対応など、ESG観点での電気料金管理を解説。",
              },
              {
                href: "/compare",
                title: "料金メニュー比較診断",
                description:
                  "通常プランと再エネメニューを含めたコスト比較を自社条件で試算できます。",
              },
              {
                href: "/articles/plan-types",
                title: "契約メニューの違いを知る（カテゴリ一覧）",
                description:
                  "固定・市場連動・ハイブリッド・再エネなど各契約タイプの解説ページ一覧。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="再エネメニューのコスト増をシミュレーターで試算する"
            description="月間使用量・現在の単価を入力して、再エネメニューへの切り替えで生じる月額・年額のコスト増を試算できます。ESG投資判断の参考にしてください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              { href: "/how-to", label: "使い方を確認する" },
            ]}
          />
        </div>
      </section>
    </main>
    </>
  );
}
