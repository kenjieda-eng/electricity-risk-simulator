import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqPageJsonLd,
  HowToJsonLd,
} from "../../components/seo/JsonLd";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContactCtaCard from "../../components/contact/ContactCtaCard";

// --- 定数 ---
const pageTitle =
  "法人の電気料金を削減する見直しポイント7選｜契約区分別の削減効果と進め方を中立社団が完全ガイド【2026年5月版】";
const pageDescription =
  "法人の電気料金削減に効く見直しポイント7項目を一般社団法人エネルギー情報センターが中立解説。契約電力・燃調・容量拠出金・市場連動 vs 固定・デマンド制御・PPA・自家消費太陽光まで、契約区分別・業種別の削減効果と進め方を完全ガイド。再エネ賦課金 4.18 円/kWh・容量拠出金 409 円/kW など 2026 年度最新数値反映。";
const pageUrl =
  "https://simulator.eic-jp.org/business-electricity-cost-reduction-review-points";
const publishedDate = "2026-05-05";

// --- 削減ポイント 7 選一覧 ---
const REDUCTION_POINTS: {
  no: string;
  title: string;
  effect: string;
  target: string;
}[] = [
  {
    no: "1",
    title: "契約電力（kW）の最適化（基本料金削減）",
    effect: "5〜10%",
    target: "全区分",
  },
  {
    no: "2",
    title: "燃料費調整額の上限／変動条件確認",
    effect: "0〜15%",
    target: "高圧・特高",
  },
  {
    no: "3",
    title: "容量拠出金の転嫁条件確認（2026 年度 409 円/kW）",
    effect: "0〜5%",
    target: "全区分",
  },
  {
    no: "4",
    title: "市場連動 vs 固定の使い分け",
    effect: "0〜20%",
    target: "高圧",
  },
  {
    no: "5",
    title: "再エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策",
    effect: "0〜3%",
    target: "全区分",
  },
  {
    no: "6",
    title: "デマンド制御・ピークカット",
    effect: "5〜15%",
    target: "高圧・低圧動力",
  },
  {
    no: "7",
    title: "自家消費太陽光・蓄電池・PPA（オンサイト/オフサイト/コーポレート）の検討",
    effect: "10〜30%",
    target: "全区分",
  },
];

// --- 業種別マトリクス ---
const INDUSTRY_MATRIX: {
  industry: string;
  recommended: string;
  estimated: string;
  guide: string;
}[] = [
  {
    industry: "製造業（高圧）",
    recommended: "1, 2, 4, 6",
    estimated: "100〜500 万円",
    guide: "factory-electricity-cost-reduction-complete（5/20 公開予定）",
  },
  {
    industry: "オフィス（高圧）",
    recommended: "1, 4, 6, 7",
    estimated: "50〜200 万円",
    guide: "（順次公開）",
  },
  {
    industry: "医療（高圧）",
    recommended: "1, 2, 6",
    estimated: "50〜300 万円",
    guide: "hospital-electricity-cost-reduction（5/12〜15 公開予定）",
  },
  {
    industry: "飲食・小売（低圧動力）",
    recommended: "1, 6, 7",
    estimated: "10〜80 万円",
    guide: "restaurant-electricity-cost-reduction（5/12〜15 公開予定）",
  },
  {
    industry: "物流倉庫（高圧）",
    recommended: "1, 6, 7",
    estimated: "80〜400 万円",
    guide: "cold-storage-warehouse-electricity（5/12〜15 公開予定）",
  },
  {
    industry: "小売チェーン（高圧）",
    recommended: "1, 4, 6",
    estimated: "50〜300 万円",
    guide: "drugstore-pharmacy-electricity（5/12〜15 公開予定）",
  },
];

// --- 5 ステップ ---
const HOW_TO_STEPS = [
  {
    name: "Step 1：直近 6 ヶ月の請求書・契約書を収集する",
    text: "請求書・契約書・最大デマンド実績・使用量実績を直近 6 ヶ月分集めます。基本料金、電力量料金、燃料費調整額、再エネ賦課金、市場価格調整額の各項目を一覧化し、現状の料金構造を可視化します。",
  },
  {
    name: "Step 2：7 ポイントの該当度をチェックする",
    text: "本記事の削減ポイント 7 選について、契約電力に余剰があるか、燃調上限が外れていないか、容量拠出金が転嫁されているか、プランは現状の使用パターンに合っているかを 1 つずつ確認します。",
  },
  {
    name: "Step 3：シミュレーターで削減効果を試算する",
    text: "/simulate にて自社の契約区分・地域・使用量を入力し、現契約と切替シナリオの差分、リスクスコアを算出。社内説明資料に転用しやすい形で出力します。",
  },
  {
    name: "Step 4：複数社の見積もりを取得する",
    text: "条件を統一したうえで 3〜5 社から相見積もりを取得。/electricity-quote-evaluation-checklist の 8 領域 30 項目に沿って単価以外の契約条件まで横並び比較します。",
  },
  {
    name: "Step 5：切替交渉・既存社内交渉を進める",
    text: "見積結果を持って既存電力会社にも値引き交渉を行い、切替するか同社に残るかを最終判断。社内稟議に必要な比較表とリスク説明を整えてから決裁ルートに乗せます。",
  },
];

// --- FAQ ---
const FAQS = [
  {
    question: "電気料金を削減するうえで最初に着手すべきポイントはどれですか",
    answer:
      "まずは契約電力（kW）の最適化を優先します。基本料金は使用量にかかわらず固定で発生するため、過大契約の縮減は確実な削減につながります。直近 12 ヶ月の最大デマンドを確認し、ピークが安定して契約電力を下回っていれば引き下げ余地があります。",
  },
  {
    question: "市場連動プランと固定プランはどちらが法人に向いていますか",
    answer:
      "業種・使用パターン・経営体力で異なります。日中使用が多く、価格変動を許容できる体力がある法人は市場連動でメリットが出ることがあります。一方、夜間/休日中心や価格変動を避けたい場合は固定が向きます。詳しくは /market-linked-vs-fixed をご参照ください。",
  },
  {
    question: "再エネ賦課金（4.18 円/kWh）は法人でも削減できますか",
    answer:
      "原則として全需要家に課されますが、自家消費太陽光導入により買電量を減らすことで実質的な負担を圧縮できます。また年間電力使用量が 100 万 kWh を超える事業者向けの減免制度もあります。詳細は /renewable-energy-surcharge と /renewable-energy-surcharge-reduction-system を確認してください。",
  },
  {
    question: "容量拠出金 409 円/kW は今後も上昇しますか",
    answer:
      "2026 年度は 409 円/kW（全国平均）で、これは新電力経由・大手電力経由ともに何らかの形で需要家負担に転嫁されます。2027〜2028 年度はさらに上昇する見込みのため、契約更新時に転嫁条件（固定額か変動か、上限の有無）を必ず確認してください。",
  },
  {
    question: "PPA とは何ですか。法人にメリットがありますか",
    answer:
      "PPA（Power Purchase Agreement）は、屋根や敷地に設置した太陽光発電設備をサービス事業者が所有し、法人は発電された電力を kWh 単位で購入する仕組みです。初期投資ゼロで導入できることが多く、オンサイト 12〜18 円/kWh・オフサイト 13〜16 円/kWh が目安。再エネ調達と電気代削減を同時に実現できます。",
  },
  {
    question: "見直しによる削減幅は実際どの程度ですか",
    answer:
      "弊団体が支援した法人の実績では、軽微な見直し（契約電力最適化＋プラン変更）で年 5〜10%、設備投資を伴う見直し（PPA 太陽光・蓄電池導入）まで含めると 15〜30% の削減事例が出ています。業種・規模・現契約条件で大きく異なるため、まずは /simulate で試算してください。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金削減 見直し ポイント",
    "電気料金 削減 ポイント",
    "法人 電気料金 削減",
    "電気代 削減 見直し",
    "電気料金 見直し ポイント",
    "法人 電気料金 見直し",
    "電気代削減 法人",
    "電気料金 削減 方法",
    "電気代 削減 方法 法人",
    "電気代 安くする 法人",
    "電気代 高騰 対策 法人",
    "電力契約 見直し 削減",
    "高圧 電力 見直し",
    "法人 電気代 内訳",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/review-points",
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
    images: ["/api/og/review-points"],
  },
};

const BREADCRUMB_ITEMS = [
  { name: "ホーム", url: "https://simulator.eic-jp.org/" },
  {
    name: "見直しポイントを知る",
    url: "https://simulator.eic-jp.org/articles/review-points",
  },
  { name: "法人の電気料金を削減する見直しポイント7選" },
];

// --- Page Component ---
export default function BusinessElectricityCostReductionReviewPointsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished={publishedDate}
        breadcrumbItems={BREADCRUMB_ITEMS}
      />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <FaqPageJsonLd faqs={FAQS} />
      <HowToJsonLd
        name="法人の電気料金見直し 5 ステップ"
        description="法人電気料金の見直しを成果につなげるための 5 ステップ実務手順"
        steps={HOW_TO_STEPS}
        totalTime="PT60M"
      />

      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav
          aria-label="パンくずリスト"
          className="mb-4 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            ホーム
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/articles/review-points"
            className="hover:text-sky-700 hover:underline"
          >
            見直しポイントを知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">
            法人の電気料金を削減する見直しポイント7選
          </span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            見直しポイントを知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            法人の電気料金を削減する見直しポイント7選｜契約区分別の削減効果と進め方を中立社団が完全ガイド【2026年5月版】
          </h1>
        </header>

        {/* 目次 */}
        <TableOfContents />

        {/* リード文 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            法人の電気料金は2022年以降高止まりが続き、2026年度はさらに再エネ賦課金（4.18円/kWh）・容量拠出金（409円/kW）・AIデータセンター需要急増による電力市場の上振れ圧力で、見直し未着手の法人ほど機会損失が拡大している。本記事は一般社団法人エネルギー情報センターが中立的立場から、法人電気料金を削減するために押さえるべき見直しポイント7項目を、契約区分別（特別高圧・高圧・低圧）の削減効果見積もり、業種別の推奨レバー、PPA・自家消費太陽光まで含めて完全ガイド。削減幅5〜20%を狙う実務手順を体系的に解説する。
          </p>
        </section>

        {/* 著者情報 */}
        <AuthorBadge publishedAt={publishedDate} />

        {/* H2-1 */}
        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ今、法人電気料金の見直しで削減効果が大きいのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人向け電気料金は2021年以降の燃料価格高騰で一段上昇し、2022〜2024年の補助金で一時的に抑えられたものの、2025年以降は補助金縮小・容量拠出金の本格適用・再エネ賦課金の上昇が同時進行している。さらに2026年度は再エネ賦課金が前年比+0.20円の4.18円/kWhと初の4円台に到達し、容量拠出金も全国平均409円/kWに引き上げられた。これらは契約形態にかかわらず、すべての法人需要家の請求書に何らかの形で転嫁される。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            さらに無視できないのがAIデータセンター需要の急増による電力市場への上振れ圧力だ。OCCTOの長期需給見通しでは、2030年に向けて電力需要は再び上昇トレンドに転じる見通しで、JEPXの卸売価格も需給逼迫時に大きくスパイクする傾向が強まっている。市場連動型契約の法人は直接的に、固定型契約でも次回更新時の単価改定として影響を受ける。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            こうした環境下で「同じ電力会社・同じプランのまま」を続けると、年間で数十万円〜数百万円の機会損失が積み上がる。逆に、本記事で解説する7ポイントを順に確認するだけでも、軽微な見直しで5〜10%、設備投資を伴う見直しまで広げれば15〜30%の削減事例が出ている。今着手するか・先送りするかで、3年後の電気代総額が大きく変わるフェーズに入っている。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            具体例で見ると、契約電力500kW・年間使用量250万kWhの中堅製造業の場合、現契約のまま3年間放置すると、再エネ賦課金の上昇分だけで年間50万円、容量拠出金の転嫁見直しが行われない場合さらに年間20万円、合計で3年間およそ200万円超の追加負担になり得る。一方で本記事の7ポイントを着手すれば、契約電力の最適化（−40万円）・プラン変更（−80万円）・デマンド制御（−60万円）の積み上げで初年度から黒字化できるケースも珍しくない。重要なのは「どこから手をつけるか」を契約区分・業種・経営体力に照らして優先順位づけすることだ。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            関連解説:{" "}
            <Link
              href="/business-electricity-price-trend-10-years"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人電気料金の10年推移
            </Link>
            ／{" "}
            <Link
              href="/datacenter-electricity-demand-surge"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              データセンター電力需要の急増
            </Link>
            ／{" "}
            <Link
              href="/ai-demand-electricity-price-outlook"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              AI需要が法人電気料金に与える影響
            </Link>
            。
          </p>
        </section>

        {/* H2-2 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            削減見直しポイント7選 一覧表
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            法人電気料金の削減レバーは、料金構造側（契約電力・燃料費調整・容量拠出金）、プラン選択側（市場連動 vs 固定・再エネ賦課金対策）、運用・設備側（デマンド制御・自家消費太陽光/蓄電池/PPA）の3軸に整理できる。本記事ではこれらを7ポイントに分解し、契約区分別の削減効果目安と主な対象を一覧化した。各ポイントは独立して着手可能だが、組み合わせることで削減幅は積み上がる。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">#</th>
                  <th className="px-3 py-2 text-left font-semibold">ポイント</th>
                  <th className="px-3 py-2 text-left font-semibold">削減効果目安</th>
                  <th className="px-3 py-2 text-left font-semibold">主な対象</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {REDUCTION_POINTS.map((p) => (
                  <tr key={p.no} className="border-t border-slate-200 align-top">
                    <td className="px-3 py-2 font-semibold">{p.no}</td>
                    <td className="px-3 py-2">{p.title}</td>
                    <td className="px-3 py-2 font-semibold text-sky-800">
                      {p.effect}
                    </td>
                    <td className="px-3 py-2">{p.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            削減効果は単独の施策でも数%、組み合わせれば10〜30%に達する。特に契約電力最適化（ポイント1）とデマンド制御（ポイント6）は基本料金と電力量料金の両方に効くため、ROI が最も高い領域だ。一方、PPA・自家消費太陽光（ポイント7）は初期投資または長期契約が必要だが、削減幅と脱炭素対応を同時に得られる戦略的レバーとなる。次章以降で各ポイントを詳細に解説する。
          </p>
        </section>

        {/* H2-3 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ポイント1〜3 詳細｜料金構造側の見直し
          </h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            ポイント1：契約電力（kW）の最適化
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            高圧・特高契約の基本料金は契約電力（kW）×単価で決まり、固定費として毎月発生する。過去6〜12ヶ月の30分デマンド実績を確認し、最大値が契約電力を恒常的に下回っていれば引き下げ余地がある。低圧電力の場合は主開閉器容量・スマートメーター実績を参照する。引き下げ後12ヶ月以内にピークを超えるとペナルティが課されるため、年間最大値＋安全マージン（5〜10%）で設定するのが実務的だ。コロナ禍で操業を縮小した法人や、省エネ投資・LED化を進めた法人では、契約電力が当時のまま据え置きになっているケースが多く、過大契約の温床となっている。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/demand-value-guide"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              デマンド値の見方
            </Link>
            。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            ポイント2：燃料費調整額の上限／変動条件確認
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            燃料費調整額は LNG・原油・石炭の貿易統計価格に連動して毎月変動する。規制料金には法定上限が存在するが、自由料金（高圧・特高は原則自由料金）では電力会社ごとに上限の有無が異なり、新電力では「上限なし」または「市場価格調整額の別途加算」の契約が増えている。契約書の燃調算定式と上限条項を必ず確認し、燃料高騰時に料金が青天井で上昇しない設計になっているか点検する。市場価格調整額は燃調と別建てで請求されるケースもあるため混同しないこと。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/how-to-check-fuel-cost-adjustment-terms"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              燃調条件の確認方法
            </Link>
            ／{" "}
            <Link
              href="/market-price-adjustment"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場価格調整額の仕組み
            </Link>
            。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            ポイント3：容量拠出金の転嫁条件確認（2026 年度 409 円/kW）
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            容量拠出金は容量市場で約定された供給力対価を需要家が按分負担する仕組みで、2026 年度全国平均は 409 円/kW（小売契約電力 1kW あたり年額換算）。新電力経由・大手電力経由どちらでも何らかの形で転嫁されるが、契約により（A）固定額として明示転嫁、（B）電力量料金に含めて単価化、（C）市場価格調整額に統合、と扱いが異なる。2027〜2028 年度はさらに上昇見込みのため、契約更新時に「転嫁額の上限」「変動時の通知ルール」を文面で確認することが重要だ。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/how-to-check-capacity-contribution-terms"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金の契約条件確認
            </Link>
            ／{" "}
            <Link
              href="/capacity-contribution-explained"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              容量拠出金とは
            </Link>
            。
          </p>
        </section>

        {/* H2-4 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ポイント4〜5 詳細｜プラン選択の見直し
          </h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            ポイント4：市場連動 vs 固定の使い分け
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動型はJEPX卸価格に連動し、需給緩和時には固定型より大幅に安くなる一方、需給逼迫時にはスパイクリスクを直接吸収する必要がある。固定型は単価が予測しやすく予算管理に向くが、燃調・容量拠出金・市場価格調整の複合により実質単価が読みにくくなることもある。一般に、夜間・休日中心の業態（24時間製造業、データセンター、コールドチェーン物流）は市場連動でメリットが出やすく、日中ピーク中心の業態（オフィス、商業施設、医療）は固定型の安定性が向く。経営体力（数ヶ月分の電気代変動を吸収できるか）も判断軸となる。なお市場連動でも、上限キャップ付き・市場連動比率を50%程度に抑えるハイブリッド型を提供する電力会社も増えており、リスク許容度に応じた選択肢が広がっている。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/market-linked-vs-fixed"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動 vs 固定の判断軸
            </Link>
            。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            ポイント5：再エネ賦課金（2026 年度 4.18 円/kWh）の試算と削減策
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            再エネ賦課金は2026年度 4.18 円/kWh（2025年度比+0.20円）と初の4円台に到達した。電力量料金単価に近い規模感で固定的に上乗せされるため、年間使用量1,000万kWhの工場では年4,180万円相当が請求書に乗る計算になる。削減策は大きく2つ。第一に、自家消費太陽光・蓄電池・PPAにより買電量そのものを減らすこと。第二に、年間電力使用量100万kWh超の事業者を対象とする「電気を多く使用する事業者向け減免制度」の活用だ。鉄鋼・化学・非鉄金属・紙パなど特定業種は申請により最大8割減免となるケースもある。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/renewable-energy-surcharge"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              再エネ賦課金の基礎
            </Link>
            ／{" "}
            <Link
              href="/renewable-energy-surcharge-business-cost"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              再エネ賦課金の法人コスト影響
            </Link>
            ／{" "}
            <Link
              href="/renewable-energy-surcharge-reduction-system"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              再エネ賦課金の減免制度
            </Link>
            。
          </p>
        </section>

        {/* H2-5 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            ポイント6〜7 詳細｜運用・設備側の見直し
          </h2>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            ポイント6：デマンド制御・ピークカット
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            デマンド制御は、契約電力決定の基準となる30分間最大需要電力を意図的に引き下げる運用施策だ。手段としては、（A）BEMS/EMSによる自動制御、（B）空調・照明・生産設備の段階的負荷シフト、（C）蓄電池によるピーク放電がある。導入規模により基本料金で5〜15%の削減が現実的で、契約電力そのものの段階的引き下げも視野に入る。投資回収は1〜3年が目安だが、自家消費太陽光と組み合わせるとさらに短縮できる。経済産業省の省エネ補助金やESG投資減税と組み合わせれば、初期負担を抑えつつ実装できるため、設備更新タイミングと合わせて検討すると最も効率的だ。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/demand-control-reduction-effect"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              デマンド制御の削減効果
            </Link>
            。
          </p>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            ポイント7：自家消費太陽光・蓄電池・PPA の検討
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            買電量そのものを減らす最強のレバーが、自家消費太陽光と蓄電池、そしてPPAだ。PPAは（A）オンサイトPPA：自社屋根に第三者所有設備を設置し12〜18円/kWhで購入、（B）オフサイトPPA：遠隔の発電所からの調達で13〜16円/kWh、（C）バーチャルPPA：物理供給を伴わず差額決済で再エネ価値のみ取得、の3タイプがある。買電単価が25〜35円/kWhの法人にとって、オンサイトPPAは10〜20円/kWhのコスト圧縮となり、再エネ調達と電気代削減を同時に実現する。蓄電池はピークカット・BCP・市場連動プラン併用時のスパイク回避に効く。導入判断の際は、屋根面積・電力使用パターン・契約区分・脱炭素目標の4軸でフィット度を診断し、20年契約が原則のオンサイトPPAは賃借物件か自社所有かで選択肢が大きく分かれる点に注意したい。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/self-consumption-solar-cost-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              自家消費太陽光の費用対効果
            </Link>
            ／{" "}
            <Link
              href="/battery-electricity-cost-benefit"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              蓄電池の費用対効果
            </Link>
            ／{" "}
            <Link
              href="/virtual-ppa-explained"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              バーチャルPPAとは
            </Link>
            。
          </p>
        </section>

        {/* H2-6 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            業種別・契約区分別の削減効果一覧 + 業種別ガイド
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            削減ポイントの優先順位は業種・契約区分により異なる。下表は弊団体の支援実績および公開データをもとに作成した推奨レバーと年間削減額の目安。業種別の詳細ガイドは順次公開予定で、5/12〜15・5/20 にかけて第一弾を投入する。
          </p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-100 text-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">業種</th>
                  <th className="px-3 py-2 text-left font-semibold">推奨ポイント</th>
                  <th className="px-3 py-2 text-left font-semibold">想定年間削減額</th>
                  <th className="px-3 py-2 text-left font-semibold">業種別ガイド</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {INDUSTRY_MATRIX.map((row) => (
                  <tr key={row.industry} className="border-t border-slate-200 align-top">
                    <td className="px-3 py-2 font-semibold">{row.industry}</td>
                    <td className="px-3 py-2">{row.recommended}</td>
                    <td className="px-3 py-2 font-semibold text-sky-800">
                      {row.estimated}
                    </td>
                    <td className="px-3 py-2 text-xs">{row.guide}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            業種別ガイドの URL は公開後に本ハブから順次差し替える。自社業種が一覧にない場合も、契約区分（特高/高圧/低圧動力/低圧電灯）と昼夜使用比率から推奨ポイントを推定可能だ。
          </p>
        </section>

        {/* H2-7 */}
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見直しの進め方｜5 ステップ実務手順
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            7ポイントを実際の見直しに落とし込む実務手順を5ステップで示す。社内稟議や経営層説明にもそのまま転用できる構成だ。
          </p>
          <ol className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            {HOW_TO_STEPS.map((step, i) => (
              <li key={step.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">
                  Step {i + 1}：{step.name.replace(/^Step \d+：/, "")}
                </p>
                <p className="mt-1 text-sm leading-7 text-slate-700">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            関連:{" "}
            <Link
              href="/how-to-start-electricity-contract-review"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人の電力契約見直しは何から始めるべきか
            </Link>
            ／{" "}
            <Link
              href="/electricity-quote-evaluation-checklist"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              電力見積書比較の8領域30項目チェックリスト
            </Link>
            。
          </p>

          {/* FAQ */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-slate-900">よくある質問（FAQ）</h3>
            <div className="mt-3 space-y-3">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                    Q. {faq.question}
                  </summary>
                  <p className="mt-2 text-sm leading-7 text-slate-700">A. {faq.answer}</p>
                </details>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-600">
              再エネ賦課金の最新動向と減免制度の詳細は{" "}
              <Link
                href="/renewable-energy-surcharge"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                再エネ賦課金の基礎
              </Link>{" "}
              で随時更新している。
            </p>
          </div>
        </section>

        {/* ContactCtaCard（H2-7 直後） */}
        <div className="mt-8">
          <ContactCtaCard
            source="article-cost-reduction-pillar"
            variant="secondary"
            heading="自社の電気料金、見直し優先順位を中立的に整理しませんか？"
            description="一般社団法人エネルギー情報センターでは、契約電力・燃調・容量拠出金・PPAまで含めた削減ポイントの優先順位づけと効果試算を初回無料で支援します。電力会社の勧誘は一切行いません。"
          />
        </div>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            intro="本記事の前後で読むと、見直し検討がさらに深まる関連解説を選びました。"
            links={[
              {
                href: "/how-to-start-electricity-contract-review",
                title: "法人の電力契約見直しは何から始めるべきか",
                description:
                  "資料収集から比較・切替後確認まで、見直し着手順序を実務の流れで整理。",
              },
              {
                href: "/5-minimum-checkpoints-for-electricity-contract-review",
                title: "電力契約見直しで最低限確認したい5項目",
                description:
                  "請求構造・更新条件・調整項目・解約条件・使用実態の5項目を入口として整理。",
              },
              {
                href: "/reduce-cost-without-switching",
                title: "電力会社を変えずに電気代を下げる5つの方法",
                description:
                  "切替に消極的な総務担当者向けに、同じ会社のまま3〜15%下げる5手段を解説。",
              },
              {
                href: "/electricity-quote-evaluation-checklist",
                title: "電力見積書比較の8領域30項目チェックリスト",
                description:
                  "複数社見積もりの抜け漏れを防ぐ8領域30項目の実践チェックリスト。",
              },
            ]}
          />
        </div>

        {/* CTA（最末尾） */}
        <div className="mt-6">
          <ContentCta
            heading="次のアクション｜削減効果を数値化して動き出す"
            description="自社の契約条件と使用量を入力すると、現契約と切替シナリオの削減余地を並べて確認できます。料金メニュー比較・専門スタッフへの中立相談も合わせてご活用ください。"
            links={[
              { href: "/simulate", label: "シミュレーターで削減効果を試算" },
              { href: "/compare", label: "料金メニュー比較を見る" },
              { href: "/concierge", label: "中立社団に相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
