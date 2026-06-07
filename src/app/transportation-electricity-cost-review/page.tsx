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
  "運輸業の電気料金見直しポイント｜物流センターとEV充電を踏まえた契約最適化";
const pageDescription =
  "運輸業（陸運・トラック・倉庫付物流センター）の電気料金見直しを解説。仕分け設備・冷凍車両プレクール・EV充電インフラの負荷特性、燃料費と連動する事業リスク、契約見直しと省エネ施策、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "運輸業 電気料金 見直し",
    "物流センター 電気代 削減",
    "トラック EV 充電 電力契約",
    "陸運業 電力コスト",
    "配送センター 電気料金 高い",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/transportation-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/transportation-electricity-cost-review",
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
    label: "仕分け・搬送設備（コンベア・ソーター）",
    detail:
      "中・大規模物流センターの電力使用の30〜45%を占める基幹設備。出荷ピーク時間帯（10〜12時、15〜18時）に同時稼働するため、デマンドの押し上げ要因として最大。自動仕分け機（オートソーター）導入センターでは1台あたり数十kWのモーター負荷が連続する。",
  },
  {
    label: "EV・FCV車両の充電インフラ",
    detail:
      "2025年以降の物流脱炭素化方針により、EVトラック・配送バン・構内EVフォークリフトの充電負荷が急増。1台あたり50〜150kWの急速充電器が複数同時稼働すると、契約電力が一気に押し上がる。充電タイミング設計が電気代を左右する新しい論点。",
  },
  {
    label: "照明・空調（事務所棟・倉庫棟）",
    detail:
      "24時間稼働の物流センターでは照明・空調の連続使用で年間消費電力の20〜30%を占める。天井高8〜12mの大空間照明はLED化で30〜50%削減可能だが、依然として大きな割合。",
  },
  {
    label: "冷凍車両プレクール・低温保管庫",
    detail:
      "食品・医薬品物流では出荷前の車両プレクール（庫内温度を-20°C等に予冷）に大きな電力を消費。一時保管庫の温度維持と合わせ、ピーク時の電力負荷が集中する。",
  },
  {
    label: "情報システム（WMS・TMS・データセンター）",
    detail:
      "倉庫管理システム（WMS）と運行管理システム（TMS）のサーバー類は24時間稼働の連続負荷。中規模センターで5〜15kW、大規模では50kW超のベースロード。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全日本トラック協会・国交省統計によれば、運輸業の電気料金は売上高の0.8〜1.8%（陸運単体）、物流センター運営併設では2.5〜4.5%に達する。燃料費（軽油）が事業コストの15〜25%を占めるため、燃料費連動の事業構造を持つ。",
  },
  {
    label: "1平米あたりの年間電力使用量",
    detail:
      "一般的な常温物流センター（24時間稼働）で年間70〜110 kWh/m²、低温対応センターは年間180〜350 kWh/m²。EV充電インフラを併設した最新拠点では年間40〜80 kWh/m²上乗せ。",
  },
  {
    label: "車両1台あたりの電力換算",
    detail:
      "従来の軽油トラック1台で軽油3,000〜5,000L/年（CO₂換算8〜13t）。EV化後の電力換算は1台あたり年間8,000〜15,000 kWh（10t車）。100台のEV化で年100〜150万 kWh の電力需要が新規発生する規模感。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の急騰（24h稼働）",
    detail:
      "24時間稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模センター（月50万kWh）で月50万円の差。年間で600万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、運輸業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。月50万kWh使用センターで年間209万円の負担増。減免制度（年間1,000万kWh以上等）の対象は大規模センターに限られ、中規模以下は満額負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、運輸業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "EV充電による契約電力急増",
    detail:
      "急速充電器1基（50〜150kW）×複数基で契約電力が一気に200〜500kW上振れ。基本料金単価1,400〜1,800円/kW・月で計算すると、月30〜90万円の基本料金増。EV導入時の電力契約見直しが必須。",
  },
  {
    label: "燃料費（軽油）との二重コスト構造",
    detail:
      "従来車両の燃料費（軽油）が高騰している中で、EV化を進めると電気代の上昇が同時に重なる。コスト全体の最適化には燃料費と電気代の総合管理が必要。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模物流センター（3,000〜8,000 m²、車両20〜50台）",
    profile: "地場運送会社の地域拠点／高圧契約 200〜500 kW／年間 80〜200 万 kWh",
    annualCost: "年間電気代 2,000〜4,800 万円",
    note: "新電力切替・固定3年契約・LED化・デマンド管理で年10〜18%削減事例多数。SII補助金1/2活用で投資回収3〜5年。",
  },
  {
    size: "中規模物流センター（10,000〜25,000 m²、車両100〜300台）",
    profile: "中堅運送会社の基幹拠点／高圧 800〜1,800 kW／年間 400〜1,200 万 kWh",
    annualCost: "年間電気代 1.0〜3.0 億円",
    note: "EV充電器併設の事例増加。固定プラン年契約＋自家消費太陽光（1〜2MW）＋蓄電池の組合せで年12〜22%削減。",
  },
  {
    size: "大規模物流センター（30,000 m²以上、車両500台超）",
    profile: "総合物流大手の基幹DC／特別高圧 3,000〜8,000 kW／年間 2,000〜6,000 万 kWh",
    annualCost: "年間電気代 5〜15 億円",
    note: "1〜2%の単価改善でも年数千万円のインパクト。固定vs市場連動の判断が事業収支に直結。EV化前提のグリッド連携も検討対象。",
  },
];

const caseStudies = [
  {
    title: "事例1：地場運送5,000 m²拠点の年間18%削減（Before/After）",
    before: "地場運送会社A社の5,000 m²配送拠点（高圧 380 kW、年間 140 万 kWh、年間電気代 3,500万円）。市場連動プラン継続、LED未更新、デマンド管理未実施。",
    after: "新電力切替（固定3年）／全照明LED化（投資 800万円）／デマンドコントローラー導入／EV配送バン 5台導入と充電時間帯シフト。",
    result: "年間電気代 3,500万円 → 2,870万円（▲18%、▲630万円）／契約 kW 380→340／投資回収 1.3年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅運送15,000 m²基幹拠点の年間22%削減",
    before: "中堅運送会社B社の15,000 m²基幹拠点（高圧 1,500 kW、年間 800 万 kWh、年間電気代 2.0億円）。3年前に新電力切替済も市場連動継続。EV化進行中で契約電力が上振れ傾向。",
    after: "固定5年プラン切替／自家消費太陽光 1.5 MW 導入（屋根8,000 m²）／蓄電池 2 MWh 併設／EV充電タイミング夜間シフト／需要家主導型PPA補助金活用。",
    result: "年間電気代 2.0億円 → 1.56億円（▲22%、▲4,400万円）／契約 kW 1,500→1,280／投資回収 6.5年（補助金後 4.8年）",
  },
  {
    title: "事例3：総合物流大手40,000 m²基幹DCの年間2.8億円削減",
    before: "総合物流大手C社の40,000 m²基幹DC（特別高圧 5,000 kW、年間 3,800 万 kWh、年間電気代 9.5億円）。長期固定契約継続、自家消費太陽光なし、構内EVフォークリフト50台導入予定。",
    after: "電力契約の集約交渉（10拠点バンドル）／自家消費太陽光 5 MW＋蓄電池 6 MWh／EV充電タイミング全拠点同時最適化／高圧サーボフォークリフト導入／DR（デマンドレスポンス）契約締結。",
    result: "年間電気代 9.5億円 → 6.7億円（▲29%、▲2.8億円）／契約 kW 5,000→4,200／投資回収 5.5年（補助金後 4年）／CO₂削減 約12,000 t/年",
  },
];

const demandManagement = [
  {
    label: "出荷ピーク（10〜12時／15〜18時）の負荷分散",
    detail:
      "仕分け設備の段階起動、コンベア速度の負荷追従制御で同時最大負荷を抑制。デマンドコントローラーで契約電力10〜15%引下げ可能。",
  },
  {
    label: "EV充電タイミングの夜間シフト",
    detail:
      "急速充電を夜間（22時〜翌6時）の電力安価時間帯に集中。普通充電（6kW級）は構内駐車中の長時間充電で運用設計。契約電力増加を50〜70%抑制可能。",
  },
  {
    label: "冷凍車両プレクールの時間最適化",
    detail:
      "出荷直前の集中プレクールを避け、ピーク時間帯前に分散開始。低温保管庫の常時運用と合わせ、デマンドピーク回避。",
  },
  {
    label: "情報システムの電源管理",
    detail:
      "WMS・TMSサーバーは仮想化集約で消費電力30%削減事例。空調連動制御で更に効率化。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・冷凍機更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "運輸業の物流センター省エネ投資の主力。インバーター化・LED化・空調更新で採択率高い。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい物流センターと相性が良く、長期固定電力単価を確保できる。",
  },
  {
    name: "EV充電インフラ補助金（経産省・国交省）",
    target: "EVトラック・配送バン充電器設置",
    rate: "1/2〜2/3、上限数百万円〜数千万円/拠点",
    note: "2025年度以降運輸業向け枠が拡大。充電器・分電盤・受変電設備改修も対象。",
  },
  {
    name: "物流効率化・モーダルシフト補助（国交省）",
    target: "物流DX・配送最適化システム導入",
    rate: "1/3〜1/2、上限数千万円",
    note: "WMS・TMS導入で電力使用量削減効果が認められれば対象。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000 kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "EV充電インフラ導入予定が契約電力に与える影響を見積もったか",
  "自家消費型太陽光の屋根面積適性（耐荷重・方位・遮蔽）を確認したか",
  "蓄電池導入の経済合理性（ピークカット効果＋BCP＋補助金）を試算したか",
  "デマンドコントローラー・自動制御システムの導入余地を評価したか",
  "出荷ピーク時間帯の負荷分散による契約電力削減シミュレーションを実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多拠点運営の場合、拠点集約契約のボリュームディスカウントを交渉したか",
  "再エネ賦課金減免制度の対象規模（年間1,000万kWh以上等）に該当するか確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "運輸業の電気代水準はどれくらいですか？", answer: "陸運単体では売上高の0.8〜1.8%、物流センター運営併設では2.5〜4.5%が目安です。年間電気代は小規模拠点（5,000 m²）で2,000〜4,800万円、大規模DC（40,000 m²）で5〜15億円規模になります。" },
  { question: "EVトラック導入で電気代はどれくらい増えますか？", answer: "10t EVトラック1台で年間8,000〜15,000 kWhの電力消費。100台導入で年100〜150万kWhの需要増、電気代換算で年2,000〜4,500万円の上振れになります。急速充電器を昼間に集中させると契約電力も急増するため、夜間シフトと固定プラン契約が必須。" },
  { question: "物流センターの固定プランと市場連動プランどちらが向きますか？", answer: "24時間稼働でベースロードが大きく、ピーク時間帯（10〜18時）に使用量が集中する物流センターは、市場高騰のリスクが大きいため固定プランが向きやすいです。荷主への運賃転嫁が即時にできない構造上、価格変動リスク排除のメリットが大きくなります。" },
  { question: "運輸業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、設備更新主体）、需要家主導型PPA補助金（太陽光・蓄電池併設）、EV充電インフラ補助金（充電器設置、補助率1/2〜2/3）、物流効率化補助金（WMS・TMS）の4本柱。設備更新＋太陽光・蓄電池＋EV充電を組み合わせると採択率が高くなります。" },
  { question: "自家消費型太陽光は物流センターで投資回収できますか？", answer: "屋根面積5,000 m²以上、24時間稼働ベースロード大きい物流センターは業種別で上位の相性。1 MW級で年1,000〜1,500万円の削減、投資回収8〜12年（補助金後6〜9年）が目安です。EV充電と組み合わせると自家消費率が更に向上します。" },
  { question: "デマンドコントロールでどれだけ基本料金を下げられますか？", answer: "仕分け設備の段階起動、EV充電タイミング制御、冷凍プレクールの時間分散で契約電力10〜15%削減事例多数。中規模センター（契約kW 1,500）で年200〜400万円の基本料金削減。デマンドコントローラー（投資100〜300万円）の投資回収は1〜2年と短い。" },
  { question: "多拠点運営の電気代削減はどう進めるべきですか？", answer: "全拠点の契約条件（契約電力・使用量・契約期間・燃料費調整額条件）を一覧化し、契約満了時期がバラバラの場合は段階的に見直しを進めます。一括見積（5〜10社）でボリュームディスカウントを交渉、年間使用量3,000万kWh以上で5〜10%の単価優遇が現実的です。" },
  { question: "燃料費（軽油）が高騰する局面で電気代も同時に上がるリスクは？", answer: "化石燃料価格は連動して動くため、軽油高騰局面では燃料費調整額も同時上昇します。EV化により燃料費依存度を下げる一方で電気代固定プランに切替えることで、燃料費＋電気代の合計コスト変動を抑制する経営判断が重要になります。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全日本トラック協会（業界統計・燃料費動向）", url: "https://jta.or.jp/" },
  { name: "国土交通省（物流統計年報）", url: "https://www.mlit.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function TransportationElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/transportation-electricity-cost-review"
        datePublished="2026-05-17"
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
          <span className="text-slate-800">運輸業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            運輸業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            運輸業（陸運・物流センター運営）は、仕分け設備・冷凍車両プレクール・情報システムが24時間稼働する基幹インフラ業種です。2025年以降のEVトラック導入と充電インフラ整備により電力需要が急増し、燃料費（軽油）との二重コスト管理が事業競争力を決める時代に入りました。本ページでは運輸業特有の電力負荷特性、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-17" updatedAt="2026-05-17" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>運輸業の電力使用プロファイル（仕分け／EV充電／情報システム）</li>
              <li>業界平均の電気代水準（売上高比0.8〜4.5%）と1平米単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金が運輸業に与える影響</li>
              <li>規模別（5,000／15,000／40,000 m²）の電気代と削減事例3件（Before/After）</li>
              <li>デマンド管理・EV充電タイミング設計・自家消費太陽光の費用対効果</li>
              <li>SII・需要家主導型PPA・EV充電インフラ補助金の組合せ活用</li>
              <li>運輸業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              運輸業の電力使用特性 — 仕分け設備・EV充電・情報システムの3層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業の電力使用は『仕分け設備（基幹）／EV充電インフラ（新規急増）／情報システム＋照明空調（連続稼働）』の3層で構成されます。従来は仕分け設備と照明空調が中心でしたが、2025年以降のEVトラック導入により充電インフラが第3の主要負荷として急速に拡大しています。
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
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比0.8〜4.5%、1平米70〜350 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業の電気代水準は事業形態（陸運単体／物流センター併設／低温対応）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 全日本トラック協会・国土交通省物流統計年報・経産省省エネ事例集から整理。実値は地域・拠点規模・低温対応比率で1.5倍前後ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              運輸業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・EV化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 5,000m²小規模／15,000m²中規模／40,000m²大規模
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
            </p>
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
              業種横断のコスト構造比較は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、関連業種の事例は{" "}
              <Link href="/distribution-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ディストリビューションセンターの見直し</Link>
              、{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷蔵倉庫の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド管理のポイント — 出荷ピークとEV充電の同時最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業のデマンド管理は『出荷ピーク時間帯の負荷分散』と『EV充電タイミングの夜間シフト』が2大論点です。両者を同時最適化することで契約電力10〜25%削減が現実的に達成できます。
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
              、削減効果の試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 24h稼働ゆえの上振れ感応度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業は24時間稼働でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。燃料費調整額の上限有無、市場連動プランの可否は経営判断レベルの論点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>使用量が大きく価格変動の影響額が事業リスク</li>
                  <li>夏冬のピーク期に使用量増と市場高値が重なる構造</li>
                  <li>運賃への即時転嫁が荷主交渉上困難</li>
                  <li>EV充電による契約電力増で固定単価の重要性が増す</li>
                  <li>24時間稼働で価格変動から逃れる手段がない</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>荷主向け運賃に電力コスト上昇を即時転嫁できない</li>
                  <li>電力市場の常時監視と柔軟な対応体制が必要</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万円の追加負担</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、固定プラン適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、比較は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大量使用業種ゆえの負担増と減免制度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間使用量が大きい運輸業（物流センター）では、負担額が請求総額の15〜20%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模センター（年800万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 2,792万円</li>
                  <li>2025年度（3.98円/kWh）：年 3,184万円（+392万円）</li>
                  <li>2026年度（4.18円/kWh）：年 3,344万円（+552万円）</li>
                  <li>3年間で年500万円超の負担増（年使用量横ばい前提）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免制度の対象要件</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間電力使用量1,000万kWh以上の事業所</li>
                  <li>製造業・冷蔵倉庫業など対象業種の指定あり</li>
                  <li>運輸業（物流センター）は業種指定により減免可否が分かれる</li>
                  <li>自家消費太陽光で系統供給量を減らすことが実質的回避策</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、自家消費太陽光による削減策は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              運輸業特有の節電・省エネ施策 — DX・EV化・太陽光・蓄電池の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業の省エネは『運用最適化（DX・配送ルート最適化）』と『設備対策（LED・空調・EV充電制御）』『再エネ自家消費（太陽光・蓄電池）』の3軸で組み立てます。各軸の年間削減効果と投資回収年数を提示します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">運用最適化（WMS・TMS・ルート最適化）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>仕分け効率化で同時稼働ピーク▲15〜25%</li>
                  <li>配送ルート最適化で構内移動電力▲5〜10%</li>
                  <li>投資回収 2〜4年（補助金活用で1〜3年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED照明・高効率空調更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化で照明電力▲40〜60%（年300〜800万円削減）</li>
                  <li>高効率空調更新で空調電力▲25〜35%</li>
                  <li>投資回収 3〜5年（SII補助1/2活用で2〜3年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜5 MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>必要屋根面積 約6,000〜8,000 m²/MW</li>
                  <li>投資回収 8〜12年（補助金後 6〜9年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蓄電池併設＋EV充電制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ピークカットで契約kW▲5〜10%</li>
                  <li>EV急速充電と組合せて夜間蓄電→昼間放電</li>
                  <li>BCP電源確保（停電時2〜6時間）</li>
                  <li>需要家主導型PPA補助金で投資回収7〜10年</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              、太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、蓄電池活用は{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池のBCP×ピークカット活用</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・EV充電・物流DX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋EV充電＋PPA）で採択率が高くなる傾向。
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
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              運輸業に合った契約見直しチェックリスト（12項目）
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
              、契約更新3か月前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社運輸業拠点の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              運輸業はEV充電インフラ導入・燃料費調整額変動・市場価格高騰の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>EV充電導入後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した18〜29%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-17"
            />
            <GlossaryLinks currentSlug="transportation-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "32業種の電気料金見直しポイントをハブから探す。" },
              { href: "/warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "倉庫の負荷特性と契約見直しの考え方。" },
              { href: "/distribution-center-electricity-cost-review", title: "ディストリビューションセンターの見直し", description: "DCの仕分け設備と契約電力管理。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷蔵倉庫の電気料金見直し", description: "冷凍機ベースロードと固定プランの相性。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "物流連動の食品工場の電力構造。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減とBCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積大の物流センターの投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい運輸業の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調更新・コンプレッサーで活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "複数拠点の累積影響と管理の考え方。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の運輸業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社の運輸業拠点条件でリスクを確認する"
            description="物流センター・運輸事業所の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。EV充電導入後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="電力コストの見直し、専門家に相談しませんか？"
            description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
