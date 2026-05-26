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
  "給食センター・セントラルキッチンの電気料金見直しポイント｜大量調理機器・ブラストチラー・洗浄機の契約最適化";
const pageDescription =
  "給食センター・セントラルキッチンの電気料金見直しを解説。大量調理機器、ブラストチラー急速冷却、洗浄機、コールドチェーン、HACCP対応、規模別事例、固定vs市場連動、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "給食センター 電気料金 見直し",
    "セントラルキッチン 電気代",
    "ブラストチラー 洗浄機 電力",
    "学校給食 電気代",
    "給食 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/central-kitchen-catering-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/central-kitchen-catering-electricity-cost-review",
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
    label: "大量調理機器（連続フライヤー・スチームコンベクションオーブン）",
    detail:
      "給食センター・セントラルキッチンの中核設備。連続フライヤー（30〜80kW）、スチームコンベクションオーブン（10〜40kW）、回転釜（IH 20〜50kW）、煮炊釜、揚物機等の大量調理機器が朝〜昼の調理時間帯に集中稼働。1施設あたり総設備200〜2,000kWで、ピーク時間帯（5時〜10時）に最大デマンドを記録。施設全体の電力使用量の35〜50%を占める。",
  },
  {
    label: "ブラストチラー・急速冷却機（HACCP対応）",
    detail:
      "HACCP対応の必須設備。調理品を90分以内に芯温10℃以下に冷却する急速冷却。1施設あたり総設備50〜500kWの瞬時負荷で、調理直後の集中稼働で30分デマンドに直撃。施設全体の10〜15%を占める。コールドチェーン維持のため停止不可。",
  },
  {
    label: "洗浄機（食器洗浄機＋ボイラー連動）",
    detail:
      "コンベア式食器洗浄機（30〜100kW）と給湯ボイラー（電気・ガス・蒸気）の連動運転。1施設あたり総設備50〜400kWで、食事提供後の集中稼働。施設全体の15〜25%を占める。HACCP対応の高温洗浄（85℃以上）が必須。",
  },
  {
    label: "冷蔵冷凍庫・大型冷凍庫（コールドチェーン）",
    detail:
      "食材保管用の大型冷蔵冷凍庫（プレハブ型）。1施設あたり総設備100〜500kWの24h常時稼働。冷却ガス・コンプレッサーの効率が電力消費を左右。冷凍庫（▲20℃以下）と冷蔵庫（5℃以下）の温度帯別管理が必要。",
  },
  {
    label: "空調・厨房換気（HACCP対応の温度湿度管理）",
    detail:
      "厨房内の温度湿度管理用空調と大規模換気フード（給排気ファン15〜80kW）。HACCP対応で調理エリア・盛付エリア・洗浄エリアのゾーン管理が必須。施設全体の10〜15%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "日本給食協会・日本食品衛生協会・文科省学校給食実施状況調査の統計によれば、給食センター・セントラルキッチンの電気料金は売上高（給食委託費）の3〜8%、食材費を除いた原価ベースでは10〜20%。コールドチェーン維持＋大量調理＋HACCP対応で電力依存度が極めて高い業種。",
  },
  {
    label: "1食あたりの電力使用量",
    detail:
      "学校給食センター（1日3,000食級）で1食あたり0.5〜1.0 kWh、コンビニ向けセントラルキッチンで1食あたり0.8〜1.5 kWh、病院・福祉給食センターで1食あたり1.0〜2.0 kWh。HACCP対応で全工程が電力依存。",
  },
  {
    label: "施設規模別の年間使用量",
    detail:
      "小規模給食センター（1日500〜2,000食、年商1〜5億円）で年間20〜100万 kWh、中規模セントラルキッチン（1日3,000〜10,000食、年商10〜50億円）で年間200〜1,500万 kWh、大規模学校給食センター・コンビニ向け（1日20,000〜100,000食、年商100億円超）で年間2,000万〜1億 kWh。特別高圧契約が大規模給食標準。",
  },
];

const costFactors = [
  {
    label: "大量調理ピーク（朝〜昼）のデマンド集中",
    detail:
      "給食センターは朝〜昼（5時〜10時）に調理機器が集中稼働し、最大デマンドが極端なピーク形状になる。連続フライヤー・スチコン・回転釜の同時稼働で30分デマンドが跳ね上がり、年間最大デマンドが契約電力を決定。デマンド管理が経営課題。",
  },
  {
    label: "ブラストチラー急速冷却の集中稼働",
    detail:
      "HACCP対応の急速冷却は調理直後の集中稼働。1施設で50〜500kWの瞬時負荷が午前〜午後にかけて発生し、調理ピークと重なってデマンドを押し上げる。冷却サイクルの最適化が削減ポイント。",
  },
  {
    label: "洗浄機ボイラーの高温稼働",
    detail:
      "食器洗浄機は85℃以上の高温洗浄が必須で、給湯ボイラーが電力（または蒸気・ガス）を大量消費。食事提供後のピーク時間帯に集中稼働し、デマンドの第2ピークを形成する。",
  },
  {
    label: "コールドチェーン維持の24h連続稼働",
    detail:
      "大型冷蔵冷凍庫は24h停止不可。月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模セントラルキッチン（月50万kWh）で月50万円の差、年600万円規模のインパクト。",
  },
  {
    label: "再エネ賦課金・容量拠出金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。大規模学校給食センター（年5,000万kWh）で年2.25億円超の負担。容量拠出金も影響大。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模給食センター（1日500〜2,000食、年商1〜5億円）",
    profile: "病院・福祉施設給食／高圧 100〜300kW／年間 20〜100万 kWh",
    annualCost: "年間電気代 600万〜3,000万円",
    note: "LED化・調理機器更新・コンプレッサー高効率化で年8〜12%削減事例。",
  },
  {
    size: "中規模セントラルキッチン（1日3,000〜10,000食、年商10〜50億円）",
    profile: "外食チェーン・コンビニ向けCK／高圧 500〜1,500kW／年間 200〜1,500万 kWh",
    annualCost: "年間電気代 6,000万〜4.5億円",
    note: "調理機器インバータ化＋ブラストチラー高効率化＋自家消費太陽光で年10〜15%削減事例。",
  },
  {
    size: "大規模学校給食センター・コンビニ向け（1日20,000〜100,000食、年商100億円超）",
    profile: "学校給食センター・大手コンビニCK／特別高圧 2,000〜5,000kW／年間 2,000万〜1億 kWh",
    annualCost: "年間電気代 6〜30 億円",
    note: "長期固定（5〜10年）契約＋需要家主導型PPA＋自家消費太陽光＋排熱回収で年10〜15%削減事例。",
  },
];

const caseStudies = [
  {
    title: "事例1：小規模給食センターの年間12%削減（Before/After）",
    before: "地方の福祉施設給食センターA社（高圧 200kW、年間 50万 kWh、年間電気代 1,500万円）。市場連動プラン継続、調理機器15年経過、蛍光灯照明、コンプレッサー旧型。",
    after: "新電力切替（固定3年）／調理機器（スチコン・回転釜）高効率モデル更新／LED化／コンプレッサー高効率モデル更新（SII補助1/2活用、投資400万円）／冷蔵庫扉ストリップカーテン設置／デマンドコントローラー導入。",
    result: "年間電気代 1,500万円 → 1,320万円（▲12%、▲180万円）／契約 kW 200→170／投資回収 補助金後 2.5年",
  },
  {
    title: "事例2：中規模セントラルキッチンの年間14%削減",
    before: "外食チェーン向けセントラルキッチンB社（高圧 1,000kW、年間 1,000万 kWh、年間電気代 3億円）。市場連動プランで2022〜2023年に月最大3,000万円の追加負担。連続フライヤー2基、スチコン10基、ブラストチラー5基。",
    after: "固定5年プラン切替／連続フライヤー高効率モデル更新／スチコン全機更新／ブラストチラー高効率化＋冷却サイクル最適化／洗浄機ボイラー高効率モデル更新／自家消費太陽光 500kW＋蓄電池 1MWh／需要家主導型PPA／調理スケジュール分散制御／BEMS導入／コンプレッサーインバータ化／空調インバータ化／LED全面化。",
    result: "年間電気代 3億円 → 2.58億円（▲14%、▲4,200万円）／契約 kW 1,000→870／投資回収 補助金後 4年",
  },
  {
    title: "事例3：大規模学校給食センターの年間2億円削減",
    before: "市町村運営大型学校給食センターC社（特別高圧 3,000kW、年間 4,000万 kWh、年間電気代 12億円）。長期固定契約継続も施設拡張で契約電力上振れ。1日30,000食提供。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 2 MW＋蓄電池 3 MWh／調理機器全面更新（連続フライヤー・スチコン・回転釜）／ブラストチラー全機高効率化／洗浄機ボイラー排熱回収／需要家主導型PPA（オフサイト太陽光8MW）／コージェネ 1MW＋排熱回収（蒸気・温水利用）／DR契約締結／BEMS全面導入／調理スケジュール分散制御／空調インバータ化／コンプレッサーインバータ化／LED全面化。",
    result: "年間電気代 12億円 → 10億円（▲16.7%、▲2億円）／契約 kW 3,000→2,500／投資回収 7年（補助金後 5年）／CO₂削減 約9,000 t/年",
  },
];

const demandManagement = [
  {
    label: "調理機器の稼働スケジュール分散制御",
    detail:
      "連続フライヤー・スチコン・回転釜の同時稼働を避け、調理工程の時間軸で分散。1施設の最大デマンドを15〜25%削減した事例。",
  },
  {
    label: "ブラストチラー急速冷却の集中稼働分散",
    detail:
      "ブラストチラーの集中稼働を避け、冷却サイクルを時間軸で分散。HACCP対応の冷却時間制約内で最適化可能。",
  },
  {
    label: "洗浄機ボイラーの予熱・スケジュール運転",
    detail:
      "洗浄機ボイラーを安価な深夜時間帯から予熱し、ピーク時間帯の電力消費を削減。デマンドの第2ピークを抑制可能。",
  },
  {
    label: "冷蔵冷凍庫の温度設定最適化＋扉開閉管理",
    detail:
      "冷蔵冷凍庫の設定温度の見直し（過冷却の解消）と扉開閉時間の管理で15〜25%削減。ストリップカーテン設置で冷気漏洩抑制。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 事業場型）",
    target: "調理機器・ブラストチラー・洗浄機・コンプレッサー・LED化",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "給食業向けで採択率が高い主力補助金。調理機器更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "給食施設の屋根面積を活用した太陽光と相性が良い。",
  },
  {
    name: "経産省 ものづくり補助金",
    target: "最新調理機器・HACCP対応設備の新型導入",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "給食業の中小事業者で採択実績多数。設備更新のタイミングで活用。",
  },
  {
    name: "農水省 食品ロス削減・脱炭素化補助金",
    target: "HACCP対応設備・冷蔵冷凍庫・コールドチェーン高効率化",
    rate: "1/2〜2/3、上限事業規模に応じる",
    note: "食品業界の脱炭素対応として活用。給食業も対象。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "調理機器全面更新・コージェネ・蓄電池",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた大型省エネで補助対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "調理機器の電力使用量を時間帯別・機器別に把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "ブラストチラー急速冷却の稼働ピークを把握しているか",
  "屋根面積を活用した自家消費太陽光（100〜2MW）導入の試算を実施したか",
  "調理機器の高効率化・インバータ化の投資回収試算を実施したか",
  "洗浄機ボイラーの排熱回収・温水利用を検討したか",
  "冷蔵冷凍庫の温度設定・扉開閉管理の最適化を実施したか",
  "デマンドコントローラー・調理スケジュール分散制御を導入しているか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・PPA・ものづくり補助・農水省補助・GX補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "給食センター・セントラルキッチンの電気代水準はどれくらいですか？", answer: "売上高比3〜8%、原価比10〜20%が業界平均。中規模セントラルキッチン（1日5,000食級）で年6,000万〜4.5億円、大規模学校給食センター（1日30,000食級）で年6〜30億円規模の電気代になります。HACCP対応で電力依存度が極めて高い業種です。" },
  { question: "大量調理機器の電気代を削減するには？", answer: "①連続フライヤー・スチコン・回転釜の高効率モデル更新、②同時稼働回避の調理スケジュール分散制御、③IH化（油・ガス併用機器の電化）、④BEMSによる需要見える化、⑤排熱回収、の5本柱が効果的。中規模セントラルキッチンで年500〜1,500万円の削減が目安。" },
  { question: "ブラストチラー急速冷却の電気代対策は？", answer: "①高効率モデルへの更新（電力▲20〜30%）、②冷却サイクル最適化、③集中稼働分散（HACCP制約内）、④冷却室の断熱強化、⑤排熱回収、の5本柱が効果的。中規模施設で年100〜300万円の削減が目安。" },
  { question: "洗浄機ボイラーの電気代対策は？", answer: "①ボイラー高効率モデル更新、②深夜予熱運転、③排熱回収（給湯・暖房利用）、④洗浄温度・水量の最適化、⑤BEMSによる需要見える化、の5本柱が効果的。中規模施設で年200〜500万円の削減が目安。" },
  { question: "給食業の固定プランと市場連動プランどちらが向きますか？", answer: "大量調理ピーク（朝〜昼）・コールドチェーン24h維持・HACCP対応で連続稼働必須のため、固定プランが圧倒的に向きます。2022〜2023年の市場高騰局面では市場連動継続施設で月数千万円の追加負担が発生しました。給食委託費への即時転嫁が困難で固定優位性が極めて高い業種です。" },
  { question: "コールドチェーン維持コストを下げるには？", answer: "①冷蔵冷凍庫の温度設定見直し（過冷却の解消）、②扉開閉時間管理＋ストリップカーテン設置、③コンプレッサーインバータ化、④断熱強化、⑤24h監視BEMSによる異常検知、の5本柱が効果的。中規模施設で年200〜400万円の削減が目安。" },
  { question: "給食業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金、需要家主導型PPA補助金、ものづくり補助金、農水省食品ロス削減・脱炭素化補助金、脱炭素先行地域・GX補助の5本柱。複数補助の組合せ申請で採択率向上、投資回収を1〜2年短縮できます。" },
  { question: "自家消費型太陽光は給食センターで投資回収できますか？", answer: "屋根面積1,000m²以上、日中の調理稼働がある給食センターは相性が良い業種。500kWで年55〜65万kWh発電、年600〜900万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。コージェネ・排熱回収との組合せで更に効率化できます。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "公益社団法人 日本給食協会", url: "https://www.kyushoku.or.jp/" },
  { name: "公益社団法人 日本食品衛生協会", url: "https://www.n-shokuei.jp/" },
  { name: "文部科学省 学校給食実施状況等調査", url: "https://www.mext.go.jp/b_menu/toukei/chousa05/kyuushoku/index.htm" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function CentralKitchenCateringElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/central-kitchen-catering-electricity-cost-review"
        datePublished="2026-05-26"
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
          <span className="text-slate-800">給食センター・セントラルキッチンの見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            給食センター・セントラルキッチンの電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            給食センター・セントラルキッチンは、大量調理機器（連続フライヤー・スチームコンベクションオーブン・回転釜）の集中稼働、HACCP対応のブラストチラー急速冷却、洗浄機ボイラーの高温稼働、コールドチェーン維持の24h冷蔵冷凍庫など多面的な電力負荷を持ち、HACCP対応・コールドチェーン維持・給食委託費の硬直性が業種特有のコスト構造を形成します。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-26" updatedAt="2026-05-26" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>給食業の電力使用プロファイル（大量調理／ブラストチラー／洗浄機／コールドチェーン）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と1食あたり単価</li>
              <li>調理機器スケジュール分散制御の費用対効果</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>HACCP対応の温度管理と省エネの両立</li>
              <li>SII・PPA・ものづくり補助・農水省補助・GX補助の組合せ活用</li>
              <li>給食業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              給食業の電力使用特性 — 大量調理・ブラストチラー・洗浄機・コールドチェーン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業の電力使用は『大量調理機器／ブラストチラー急速冷却／洗浄機ボイラー連動／冷蔵冷凍庫コールドチェーン／空調・厨房換気』の5層で構成されます。HACCP対応の温度管理＋大量調理ピーク集中が業種特有のコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、1食0.5〜2.0 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業の電気代水準は施設規模・提供食数で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 日本給食協会・日本食品衛生協会・文科省学校給食実施状況調査から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              給食業の主要な電気代上昇要因 — 調理ピーク・コールドチェーン・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業の電気代上昇は、大量調理ピーク集中、ブラストチラー急速冷却の集中稼働、洗浄機ボイラー高温稼働、コールドチェーン24h連続稼働、再エネ賦課金、容量拠出金が複合的に重なります。
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
              規模別の削減事例3件 — 小規模給食センター／中規模CK／大規模学校給食センター
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例から整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/food-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品工場の電気料金見直し</Link>
              、{" "}
              <Link href="/restaurant-chain-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">外食チェーンの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大量調理・コールドチェーンのデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業は調理機器の稼働スケジュール分散、ブラストチラー集中稼働分散、洗浄機ボイラー予熱、冷蔵冷凍庫温度設定最適化など、業種特有のデマンド管理戦略が極めて効果的です。
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
              燃料費調整・市場連動プランの影響 — 大量調理＋コールドチェーンの直撃
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業は大量調理ピーク・コールドチェーン24h維持・HACCP対応で連続稼働必須のため、市場価格高騰局面での影響額が事業収支に直撃します。固定プランの優位性が極めて高い業種です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大量調理ピークの計画稼働必須</li>
                  <li>コールドチェーン24h維持必須</li>
                  <li>HACCP温度逸脱が即座にリコール</li>
                  <li>給食委託費への即時転嫁が困難</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季・冬季の市場高値期に冷蔵冷凍庫負荷増</li>
                  <li>調理ピークが高単価時間帯に集中</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
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
              再エネ賦課金の影響 — 給食施設業種の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.5円/kWh前後と上昇トレンド。給食業の中規模セントラルキッチンでは負担額が請求総額の10〜15%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模セントラルキッチン（年1,000万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 3,490万円</li>
                  <li>2025年度（3.98円/kWh）：年 3,980万円（+490万円）</li>
                  <li>2026年度予測（4.5円/kWh）：年 4,500万円（+1,010万円）</li>
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
              給食業特有の節電・省エネ施策 — 調理機器・チラー・洗浄機・冷蔵
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業の省エネは『調理機器スケジュール分散制御＋高効率化』『ブラストチラー高効率化＋冷却最適化』『洗浄機ボイラー排熱回収』『冷蔵冷凍庫温度設定最適化』『自家消費太陽光＋コージェネ』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">調理機器スケジュール分散制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>連続フライヤー・スチコン・回転釜の同時稼働回避</li>
                  <li>最大デマンド▲15〜25%</li>
                  <li>SII補助で投資回収2〜3年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ブラストチラー高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率モデル更新で電力▲20〜30%</li>
                  <li>冷却サイクル最適化＋集中稼働分散</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">洗浄機ボイラー排熱回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>排熱を給湯・暖房に再利用</li>
                  <li>ボイラー高効率モデル＋深夜予熱運転</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費太陽光＋コージェネ（500kW〜2MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日中調理稼働で自家消費率70%超</li>
                  <li>コージェネで電気＋蒸気の併用効率化</li>
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
              補助金活用（業種別） — SII・PPA・ものづくり・農水省補助・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業向けに活用しやすい補助金は5本柱。調理機器更新はSII＋ものづくり補助＋GX補助の組合せで補助率を最大化できます。
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
              給食業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社給食施設の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              給食業は大量調理ピーク・コールドチェーン24h・HACCP対応の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>調理機器ピーク影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜17%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-26"
            />
            <GlossaryLinks currentSlug="central-kitchen-catering-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "大量調理・冷凍が共通。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "加熱・冷却・洗浄が共通。" },
              { href: "/frozen-food-electricity-cost-review", title: "冷凍食品業の電気料金見直し", description: "コールドチェーンが共通。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷蔵冷凍倉庫の電気料金見直し", description: "冷蔵冷凍庫運用が共通。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "外食チェーンの電気料金見直し", description: "厨房電化が共通。" },
              { href: "/single-restaurant-electricity-cost-review", title: "単独飲食店の電気料金見直し", description: "厨房機器運用が共通。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "病院給食の取引先業種。" },
              { href: "/nursing-care-facility-electricity-cost-review", title: "介護施設の電気料金見直し", description: "施設給食の取引先業種。" },
              { href: "/municipality-electricity-cost-review", title: "自治体の電気料金見直し", description: "学校給食センターの委託元。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "セントラルキッチンの電気代削減アクション。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24h稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "給食業が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "給食施設の投資回収試算。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "調理機器更新の主力補助金。" },
              { href: "https://pps-net.org/unit", title: "電力単価の最新動向（新電力ネット）", description: "全国エリア別の電力量単価データ。本記事の電気代試算の参考に。" },
            ]}
          />

          <ContentCta
            heading="自社給食施設の条件でリスクを確認する"
            description="大量調理機器・ブラストチラー・洗浄機・コールドチェーン冷蔵冷凍庫の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。調理スケジュール分散後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="給食センター・セントラルキッチンの電力契約見直し、専門家に相談しませんか？"
            description="大量調理機器・ブラストチラー・洗浄機ボイラー・コールドチェーンの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で給食業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
