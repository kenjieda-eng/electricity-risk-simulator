import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

const pageTitle =
  "セメント・生コン業の電気料金見直しポイント｜粉砕ミル・ミキサ・建設需要期変動の契約最適化";
const pageDescription =
  "セメント・生コン業の電気料金見直しを解説。粉砕ミル24h・コンクリートミキサ、建設需要期変動、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "セメント 電気料金 見直し",
    "生コン 電気代",
    "粉砕ミル 電力",
    "コンクリート 電気代",
    "セメント 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/cement-readymix-concrete-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/cement-readymix-concrete-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "セメント粉砕ミル（原料粉砕・仕上げ粉砕）",
    detail:
      "セメント工場の中核設備。原料（石灰石・粘土）粉砕ミル、クリンカ仕上げ粉砕ミル（ボールミル・縦型ミル）。1基あたり1〜10MWの大電力負荷で24h連続稼働。セメント工場全体の電力使用量の50〜70%を占める業種特有のコスト構造。",
  },
  {
    label: "コンクリートミキサ（生コン工場）",
    detail:
      "生コン工場の主要設備。骨材・セメント・水の練り混ぜミキサ。1基あたり75〜300kWの瞬間負荷で、出荷時間帯に集中稼働。生コン工場全体の電力使用量の30〜45%を占める。",
  },
  {
    label: "ロータリーキルン補機（セメント）",
    detail:
      "セメントクリンカ焼成のロータリーキルン（1,450℃の長時間焼成）の電気補機。送風機・冷却機・原料供給機等で1基あたり1〜5MWの常時負荷。",
  },
  {
    label: "骨材ベルトコンベア・サイロ",
    detail:
      "骨材・セメントの搬送ベルトコンベア、サイロ撹拌、計量ホッパー等の動力。1工場あたり総設備100〜500kWの常時負荷。",
  },
  {
    label: "排熱発電・コンプレッサー・空調",
    detail:
      "排熱発電装置（一部の大手セメント工場）、コンプレッサー（30〜200kW）、空調・換気の常時負荷。排熱発電は省エネと自家消費を同時実現。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・セメント協会の統計によれば、セメント業の電気料金は売上高の8〜15%（粉砕ミル稼働で最高水準）。生コン業は3〜8%。製造原価に占める比率はセメント10〜20%、生コン5〜12%。",
  },
  {
    label: "製品1トンあたりの電力使用量",
    detail:
      "セメント（粉砕含む全工程）で1トンあたり100〜130 kWh、生コンで1m³あたり3〜6 kWh、骨材で1トンあたり2〜5 kWhが業界平均。粉砕工程が最も電力消費が大きい。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "小規模生コン工場（年商3〜15億円）で年間100〜500万 kWh、中規模セメント・生コン工場（年商50〜300億円）で年間2,000〜8,000万 kWh、大規模セメントメーカー（年商1,000億円超）で年間8,000万〜5億 kWh。特別高圧契約が大手業界標準。",
  },
];

const costFactors = [
  {
    label: "粉砕ミル24h連続稼働のベースロード",
    detail:
      "セメント粉砕ミルは24h連続稼働、月間使用量が極めて大きい。燃料費調整額1円/kWhの変動でも中規模セメント工場（月600万kWh）で月600万円の差、年間7,200万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間6,000万kWh使用の中規模工場で年2.508億円超の負担。",
  },
  {
    label: "建設需要期の生産集中",
    detail:
      "生コン業は建設需要期（年度末・夏季）に出荷が集中。月間使用量の変動が大きく、ピーク月の契約電力設定が年間コストを左右する。デマンド管理の影響が大きい業種。",
  },
  {
    label: "粉砕ミルの市場連動リスク",
    detail:
      "粉砕ミル24h連続稼働で市場価格高騰局面に直撃される。JEPX高騰局面では月数千万円規模の追加負担リスク。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、24h連続稼働業種に影響大。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模生コン工場（年商3〜15億円、従業員10〜30名）",
    profile: "地場生コン／高圧 300〜800kW／年間 100〜500万 kWh",
    annualCost: "年間電気代 3,000万〜1.5億円",
    note: "ミキサ運用最適化・LED化・コンプレッサー更新で年8〜12%削減事例。",
  },
  {
    size: "中規模セメント・生コン工場（年商50〜300億円、従業員100〜500名）",
    profile: "セメント＋生コン中堅メーカー／特別高圧 4,000〜8,000kW／年間 2,000〜8,000万 kWh",
    annualCost: "年間電気代 6〜24 億円",
    note: "粉砕ミル高効率化＋排熱発電＋自家消費太陽光で年8〜14%削減事例。",
  },
  {
    size: "大規模セメントメーカー（年商1,000億円超、従業員500名以上）",
    profile: "太平洋セメント・住友大阪セメント等大手／特別高圧 10,000〜50,000kW／年間 8,000万〜5億 kWh",
    annualCost: "年間電気代 24〜150 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光＋排熱発電が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模生コン工場の年間14%削減（Before/After）",
    before: "関東の生コン工場A社（高圧 500kW、年間 300万 kWh、年間電気代 9,000万円）。市場連動プラン継続、ミキサ稼働ピーク管理なし、需要期にデマンドピーク発生。",
    after: "新電力切替（固定3年）／ミキサ稼働分散制御（SII＋ものづくり補助1/2活用、投資1,000万円）／LED化／コンプレッサーインバータ化／需要期に応じた季節別契約最適化／デマンドコントローラー導入。",
    result: "年間電気代 9,000万円 → 7,740万円（▲14%、▲1,260万円）／契約 kW 500→420／投資回収 補助金後 1.6年",
  },
  {
    title: "事例2：中規模セメント工場の年間12%削減",
    before: "中部地方のセメント工場B社（特別高圧 5,000kW、年間 5,000万 kWh、年間電気代 15億円）。市場連動プランで2022〜2023年に月最大5,000万円の追加負担。粉砕ミル24h稼働。",
    after: "固定5年プラン切替／粉砕ミル高効率化（縦型ミルへの更新）／自家消費太陽光 2MW 導入（屋根15,000 m²）／BEMS／排熱発電一部導入／需要家主導型PPA／コンプレッサーインバータ化。",
    result: "年間電気代 15億円 → 13.2億円（▲12%、▲1.8億円）／契約 kW 5,000→4,400／投資回収 補助金後 4.5年",
  },
  {
    title: "事例3：大規模セメントメーカーの年間3.5億円削減",
    before: "国内大手セメントメーカーC社の主力工場（特別高圧 20,000kW、年間 2億 kWh、年間電気代 60億円）。長期固定契約継続も新ライン増設で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 5 MW＋蓄電池 8 MWh／排熱発電 10MW（クリンカ排熱）／全粉砕ミル更新／需要家主導型PPA（オフサイト風力10MW）／DR契約締結。",
    result: "年間電気代 60億円 → 56.5億円（▲5.8%、▲3.5億円）／契約 kW 20,000→18,000／投資回収 8年（補助金後 6年）／CO₂削減 約45,000 t/年",
  },
];

const demandManagement = [
  {
    label: "粉砕ミルの夜間運転シフト",
    detail:
      "粉砕ミルを電力単価安価な深夜〜早朝に集中させる運用設計。3交代制工場で夜間集中粉砕で5〜10%のピーク削減が可能。",
  },
  {
    label: "ミキサ稼働分散制御（生コン）",
    detail:
      "生コン工場の複数ミキサを運用する場合、稼働タイミング分散でデマンドピークを抑制。1工場の同時最大負荷を15〜25%削減した事例。",
  },
  {
    label: "需要期に応じた季節別契約最適化",
    detail:
      "建設需要期（年度末・夏季）と閑散期の契約電力を最適化。ピーク月の契約電力を必要最小限に絞ることで基本料金▲10〜15%。",
  },
  {
    label: "コンプレッサー・コンベアのインバータ化",
    detail:
      "コンプレッサー・ベルトコンベアのインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率粉砕ミル・縦型ミル・LED・コンプレッサー・排熱発電",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "セメント・生コン業向けで採択率が高い主力補助金。粉砕ミル更新・排熱発電で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良い。24h粉砕ミル稼働で自家消費率80%超になりやすい。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新粉砕ミル・ミキサの新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "セメント・生コン業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "排熱発電・廃棄物代替燃料化・カーボンニュートラルセメント",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型プロジェクトで補助対象になり得る。",
  },
  {
    name: "経産省 中小企業省エネルギー設備導入補助金",
    target: "中小事業者向け省エネ設備全般",
    rate: "1/2、上限数千万円",
    note: "中小生コン事業者で活用しやすい補助制度。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "粉砕ミル・ミキサの電力プロファイルを把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "粉砕ミル・キルン・ミキサ・コンベアの電力プロファイルを把握しているか",
  "屋根面積を活用した自家消費太陽光（500kW〜5MW）導入の試算を実施したか",
  "粉砕ミル高効率化（縦型ミル化）の投資回収試算を実施したか",
  "排熱発電（セメント工場）の投資回収試算を実施したか",
  "需要期と閑散期の季節別契約電力最適化を検討したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII・需要家主導型PPA・ものづくり補助金・GX補助・中小省エネの組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "セメント・生コン業の電気代水準はどれくらいですか？", answer: "セメント業は売上高比8〜15%、生コン業は3〜8%。製造原価比セメント10〜20%、生コン5〜12%が業界平均。中規模セメント・生コン工場（年商200億円級）で年6〜24億円、大規模セメントメーカー（年商1,000億円超）で年24〜150億円規模の電気代になります。" },
  { question: "粉砕ミルの電気代を削減するには？", answer: "①ボールミル→縦型ミル更新（電力▲15〜25%）、②粉砕効率向上のための原料調合最適化、③深夜時間帯シフト運用、④粉砕プロセス最適化、⑤BEMS・需要見える化、の5本柱が中心。投資回収はSII＋ものづくり補助の組合せで3〜5年が目安です。" },
  { question: "ミキサ（生コン）の電気代対策は？", answer: "①ミキサ稼働分散制御（デマンドコントローラー連動）、②高効率ミキサへの更新、③ミキササイクル時間最適化、④コンプレッサー高効率化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模工場で年300〜600万円の削減が目安。" },
  { question: "排熱発電（セメント工場）は投資回収できますか？", answer: "ロータリーキルンの排熱を利用した発電で、5〜10MW規模の自家消費が可能。投資10〜30億円、年間電気代▲3〜5億円、投資回収はGX補助で5〜7年が目安。CO₂削減と電気代削減を同時実現。" },
  { question: "セメント・生コン業の固定プランと市場連動プランどちらが向きますか？", answer: "粉砕ミル24h連続稼働、生コン需要期の集中出荷でベースロードが大きく、生産停止が困難なため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "縦型ミル化は投資回収できますか？", answer: "従来のボールミルから縦型ミルへの更新で、粉砕電力▲15〜25%。中規模工場（年間5,000万kWh）で年間1.5〜2.5億円の削減、投資回収はSII＋ものづくり補助で3〜5年が目安です。粉砕プロセスの大幅な改善になります。" },
  { question: "セメント・生コン業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、脱炭素先行地域・GX補助、中小企業省エネ設備導入補助金の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光はセメント・生コン工場で投資回収できますか？", answer: "屋根面積5,000m²以上、24h粉砕ミル稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率80%超になりやすく投資効率が高いです。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 セメント協会", url: "https://www.jcassoc.or.jp/" },
  { name: "全国生コンクリート工業組合連合会", url: "https://www.zennama.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CementReadymixConcreteElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/cement-readymix-concrete-electricity-cost-review"
        datePublished="2026-05-25"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">セメント・生コン業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            セメント・生コン業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            セメント・生コン業は、セメント粉砕ミルの24h連続大電力、コンクリートミキサの瞬間大電力、建設需要期の生産集中など多面的な電力負荷を持ち、製造原価に占める電気代比率は全業種で高位です。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-25" updatedAt="2026-05-25" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>セメント・生コン業の電力使用プロファイル（粉砕ミル／キルン／ミキサ／コンベア）</li>
              <li>業界平均の電気代水準（セメント8〜15%／生コン3〜8%）と製品単位あたり単価</li>
              <li>縦型ミル化・排熱発電の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>需要期と閑散期の季節別契約最適化</li>
              <li>SII・PPA・ものづくり補助・GX補助・中小省エネの組合せ活用</li>
              <li>セメント・生コン業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              セメント・生コン業の電力使用特性 — 粉砕ミル・ミキサ・キルン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業の電力使用は『粉砕ミル／コンクリートミキサ／キルン補機／コンベアサイロ／排熱発電』の5層で構成されます。粉砕ミル24h連続稼働が業界特有のコスト構造を形成します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {usageProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金の上昇要因の全体像は{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電気料金が上がる理由
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — セメント売上高比8〜15%、生コン3〜8%
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業の電気代水準は事業形態（セメント／生コン）と粉砕方式で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <div className="mt-4 space-y-3">
              {industryBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: セメント協会・全国生コンクリート工業組合連合会・経産省工業統計から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              セメント・生コン業の主要な電気代上昇要因 — 粉砕・需要期・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業の電気代上昇は、粉砕ミル24h稼働ベースロードに加え、建設需要期生産集中、市場連動リスク、容量拠出金が複合的に重なります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 小規模生コン／中規模セメント／大規模セメントメーカー
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-3">
                    <p><span className="font-semibold text-slate-700">プロファイル：</span>{item.profile}</p>
                    <p><span className="font-semibold text-slate-700">年間電気代：</span>{item.annualCost}</p>
                    <p><span className="font-semibold text-slate-700">特徴：</span>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連業種は{" "}
              <Link href="/construction-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">建設業の電気料金見直し</Link>
              、{" "}
              <Link href="/glass-manufacturing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ガラス製造業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              粉砕ミル・ミキサのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業は粉砕ミル夜間運転シフト、ミキサ稼働分散制御、需要期季節別契約最適化など、業種特有のデマンド管理戦略が極めて効果的です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {demandManagement.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 24h粉砕ミル稼働の直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント業は粉砕ミルの24h連続稼働が必須なため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>粉砕ミルの24h稼働が必須</li>
                  <li>セメント在庫貯蔵能力の制約</li>
                  <li>セメント・生コン価格への即時転嫁が困難</li>
                  <li>大電力消費で高単価リスクが甚大</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に粉砕電力負荷増</li>
                  <li>建設需要期の集中出荷が高単価時間帯に直撃</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万〜億単位の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大電力消費業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。セメント業の中規模工場では負担額が請求総額の10〜18%に達します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模セメント工場（年5,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1.745億円</li>
                  <li>2025年度（3.98円/kWh）：年 1.99億円（+2,450万円）</li>
                  <li>2026年度（4.18円/kWh）：年 2.09億円（+3,450万円）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              セメント・生コン業特有の節電・省エネ施策 — 縦型ミル・排熱発電・季節最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業の省エネは『粉砕ミル縦型化』『排熱発電』『季節別契約最適化』『コンプレッサーインバータ化』『自家消費太陽光』の5軸で組み立てます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">粉砕ミル縦型化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ボールミル→縦型ミルで電力▲15〜25%</li>
                  <li>大規模投資、SII＋ものづくり補助で投資回収3〜5年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">排熱発電（セメント工場）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>キルン排熱で5〜10MW自家消費</li>
                  <li>GX補助で大型補助対象</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">季節別契約最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>需要期と閑散期の契約電力差別化</li>
                  <li>基本料金▲10〜15%</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（500kW〜5MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>24h粉砕稼働で自家消費率80%超</li>
                  <li>投資回収 7〜10年（補助金後 5〜7年）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・ものづくり・GX補助・中小省エネ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業向けに活用しやすい補助金は5本柱。粉砕ミル縦型化はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyPrograms.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別制度の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              セメント・生コン業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社セメント・生コン工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              セメント・生コン業は粉砕ミル24h連続稼働・建設需要期生産集中・大電力消費の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>粉砕ミルのピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜14%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-25"
            />
            <GlossaryLinks currentSlug="cement-readymix-concrete-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/construction-electricity-cost-review", title: "建設業の電気料金見直し", description: "セメント・生コンの取引先業種。" },
              { href: "/glass-manufacturing-electricity-cost-review", title: "ガラス製造業の電気料金見直し", description: "24h連続稼働が共通。" },
              { href: "/ceramics-pottery-electricity-cost-review", title: "窯業・陶磁器業の電気料金見直し", description: "焼成炉が共通。" },
              { href: "/glass-ceramics-electricity-cost-review", title: "ガラス・窯業業の電気料金見直し", description: "ガラス窯業合体の見直し。" },
              { href: "/steel-electricity-cost-review", title: "鉄鋼業の電気料金見直し", description: "粉砕・焼結プロセスが共通。" },
              { href: "/chemical-electricity-cost-review", title: "化学業の電気料金見直し", description: "24h連続稼働が共通。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "セメント法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "24h稼働法人の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "粉砕ミル・排熱発電の主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "粉砕ミル24h稼働事業者のリスク。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社のセメント・生コン工場条件でリスクを確認する"
            description="粉砕ミル・ロータリーキルン・ミキサ・コンベアの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。縦型ミル化や排熱発電後のシナリオ比較、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="セメント・生コン業の電力契約見直し、専門家に相談しませんか？"
            description="粉砕ミル・ロータリーキルン・ミキサ・コンベアの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場でセメント・生コン業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
