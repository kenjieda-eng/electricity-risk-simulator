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
  "ガラス・窯業の電気料金見直しポイント｜溶融炉と焼成炉の連続稼働を踏まえた契約最適化";
const pageDescription =
  "ガラス・窯業（板ガラス・容器・陶磁器・耐火物）の電気料金見直しを解説。溶融炉・焼成炉の連続稼働、廃熱回収とコージェネ、業界ピーク時間帯、固定vs市場連動の判断、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ガラス工場 電気料金 見直し",
    "窯業 電気代 削減",
    "溶融炉 電力契約",
    "陶磁器 焼成炉 電気料金",
    "耐火物 工場 電力コスト",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/glass-ceramics-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/glass-ceramics-electricity-cost-review",
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
    label: "溶融炉・焼成炉（基幹熱処理設備）",
    detail:
      "板ガラス・容器ガラスの溶融炉は1,400〜1,600°C、陶磁器・耐火物の焼成炉は1,200〜1,800°Cの高温維持が必要。電気溶融炉では1基あたり数百kW〜数MWの連続負荷で、工場全体の電力使用量の50〜70%を占める基幹設備。停止・再立上げに数日〜数週間を要するため、24時間連続稼働が原則。",
  },
  {
    label: "成形・後加工ライン",
    detail:
      "ガラスの成形（プレス・吹き・フロート）、陶磁器の成形（ろくろ・プレス・押出）に伴う成形機・搬送装置の動力。1ラインあたり50〜200kWの常時負荷。製品検査・仕上げ工程の照明・空調も連続使用される。",
  },
  {
    label: "徐冷炉・熱処理ライン",
    detail:
      "溶融・焼成後の徐冷工程では数時間〜数十時間かけて段階的に温度を下げる。徐冷炉の電力は溶融炉の20〜30%程度だが、連続運転で年間消費量に大きく寄与する。",
  },
  {
    label: "原料調合・粉砕工程",
    detail:
      "ガラス原料（珪砂・ソーダ灰）や陶磁器原料（粘土・長石・珪石）の粉砕・配合・搬送に大型モーター（30〜200kW）を使用。バッチ式運転だが1日複数回稼働。",
  },
  {
    label: "排ガス処理・集塵設備",
    detail:
      "高温工程に伴う排ガス処理（バグフィルター・電気集塵機・脱硫脱硝）の連続運転が必須。1工場で50〜300kWの恒常負荷。環境規制強化で増設傾向にある。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "経産省工業統計・板硝子協会・日本ガラスびん協会の統計によれば、ガラス・窯業の電気料金は売上高の8〜18%（電気溶融比率の高い工場）に達する。製造原価に占める比率は12〜25%。エネルギー多消費型業種として国内最高水準の電力依存度を持つ。",
  },
  {
    label: "1トン製品あたりの電力使用量",
    detail:
      "板ガラスの電気溶融炉で1トンあたり800〜1,200 kWh、容器ガラスで600〜900 kWh、陶磁器（磁器）で400〜700 kWh、耐火物で1,200〜2,500 kWh が業界平均。ガス併用炉では電力は1/2〜1/3に下がるが、燃料費が代替コストとなる。",
  },
  {
    label: "工場規模別の年間使用量",
    detail:
      "中規模ガラス工場（年産5,000〜15,000トン）で年間500〜1,800 万kWh、大規模工場（年産30,000トン超）で年間6,000〜15,000 万kWh。特別高圧契約（2,000kW超）が業界標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の連続稼働ベースへの影響",
    detail:
      "24時間連続稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模工場（月100万kWh）で月100万円の差、年間1,200万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、ガラス・窯業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間1.5億kWh使用の大規模工場で年6.3億円の負担、5年で30億円超。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になりやすいが申請要件は厳格。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、ガラス・窯業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。中規模工場で年200〜500万円の上乗せ。",
  },
  {
    label: "電気溶融炉の動力電気代",
    detail:
      "電気溶融炉は1基あたり1,500〜3,000kWの連続負荷で、年間使用量1,500〜2,500万kWh。電力単価が1円/kWh動くだけで年1,500〜2,500万円の差。電力契約条件の見直しが事業収支に直結する代表的設備。",
  },
  {
    label: "高調波・力率改善コスト",
    detail:
      "電気炉の整流回路から発生する高調波対策のためアクティブフィルタや進相コンデンサが必要。設備投資と保守費が継続的に発生。力率管理が不十分だと基本料金の力率割引（最大15%）を失う。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模窯業工場（年産1,000〜3,000トン、従業員30〜80名）",
    profile: "陶磁器・耐火物の地場メーカー／高圧 200〜500kW／年間 80〜300万 kWh",
    annualCost: "年間電気代 2,400〜9,000 万円",
    note: "ガス窯併用比率高い／LED化・空調更新で年10〜15%削減事例多数。SII補助金1/2活用で投資回収3〜5年。市場連動からの離脱が最重要論点。",
  },
  {
    size: "中規模ガラス・窯業工場（年産5,000〜15,000トン、従業員150〜400名）",
    profile: "容器ガラス・陶磁器中堅メーカー／高圧 1,500〜3,000kW／年間 1,500〜5,000万 kWh",
    annualCost: "年間電気代 3.0〜11.0 億円",
    note: "電気溶融炉導入の有無で電力消費が2倍前後変動。固定5年契約＋廃熱回収＋コージェネ併用で年8〜15%削減事例。屋根面積を活用した自家消費太陽光（1〜3MW）の相性も良好。",
  },
  {
    size: "大規模板ガラス・耐火物工場（年産30,000トン超、従業員500名以上）",
    profile: "板ガラス・大型耐火物の総合メーカー／特別高圧 8,000〜25,000kW／年間 6,000〜20,000万 kWh",
    annualCost: "年間電気代 12〜50 億円",
    note: "1%の単価改善でも年1,000〜5,000万円のインパクト。長期固定（5〜10年）契約と需要家主導型PPA併用が主流。容量市場ファイナンスでの取引参加も検討対象。",
  },
];

const caseStudies = [
  {
    title: "事例1：中堅陶磁器メーカー2,500トン工場の年間14%削減（Before/After）",
    before: "中部地区の陶磁器メーカーA社の年産2,500トン工場（高圧 450kW、年間 250万 kWh、年間電気代 7,500万円）。市場連動プラン継続、LED未更新、デマンド管理未実施、焼成炉の廃熱を放熱。",
    after: "新電力切替（固定3年）／全照明LED化（投資 350万円）／焼成炉廃熱を成形工程の予熱に再利用／デマンドコントローラー導入／力率改善コンデンサ更新。",
    result: "年間電気代 7,500万円 → 6,450万円（▲14%、▲1,050万円）／契約 kW 450→400／投資回収 1.2年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中規模容器ガラス工場の年間16%削減",
    before: "西日本のガラスびんメーカーB社の年産10,000トン工場（高圧 2,200kW、年間 2,800万 kWh、年間電気代 7.0億円）。市場連動プランで2022〜2023年に月最大3,000万円の追加負担を経験。",
    after: "固定5年プラン切替／自家消費太陽光 2.0 MW 導入（屋根11,000 m²）／廃熱コージェネ（500kW級）追加／徐冷炉の温度プロファイル最適化／需要家主導型PPA補助金活用。",
    result: "年間電気代 7.0億円 → 5.88億円（▲16%、▲1.12億円）／契約 kW 2,200→1,900／投資回収 6.8年（補助金後 4.9年）",
  },
  {
    title: "事例3：大規模板ガラス工場の年間2.4億円削減",
    before: "国内大手板ガラスメーカーC社の40,000トン基幹工場（特別高圧 15,000kW、年間 12,000万 kWh、年間電気代 30億円）。長期固定契約継続も電気溶融炉拡張で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／自家消費太陽光 5 MW＋蓄電池 6 MWh／コージェネ 2MW増設／溶融炉廃熱発電（バイナリー）導入／DR（デマンドレスポンス）契約締結／需要家主導型PPA。",
    result: "年間電気代 30億円 → 27.6億円（▲8%、▲2.4億円）／契約 kW 15,000→13,500／投資回収 7.5年（補助金後 5.8年）／CO₂削減 約25,000 t/年",
  },
];

const demandManagement = [
  {
    label: "焼成炉のバッチタイミング分散",
    detail:
      "複数台の焼成炉を運用する場合、起動・昇温タイミングを30分〜2時間ずらすことでデマンドピークを抑制。1工場の同時最大負荷を10〜18%削減した事例。連続炉中心の工場でも整流盤の段階起動で同様の効果が得られる。",
  },
  {
    label: "成形ラインのピーク時間帯シフト",
    detail:
      "成形機・搬送装置・コンプレッサーの稼働を電力単価安価な深夜〜早朝に集中させる運用設計。3交代制の工場では昼勤・夜勤のシフト時刻調整で5〜10%のピーク削減が可能。",
  },
  {
    label: "コンプレッサー・送風機の負荷追従",
    detail:
      "ガラス成形のエア使用、窯業の燃焼空気送風はインバータ化・台数制御で20〜35%削減。デマンドコントローラーと連動させると更に効果的。",
  },
  {
    label: "電気溶融炉の電力プロファイル管理",
    detail:
      "電気溶融炉は温度維持のため24時間連続稼働だが、ガラス入替時の溶融エネルギー需要を市場価格安価な時間帯に意識的に集中させるオペレーション工夫がある。需給ひっ迫時の入替延期も検討対象。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・整流盤・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "ガラス・窯業のような高熱処理業種で採択率が高い主力補助金。電気溶融炉の更新や廃熱回収システム導入で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場と相性が良く、長期固定電力単価を確保できる。連続稼働で自家消費率が90%超になりやすい。",
  },
  {
    name: "高度省エネルギー設備投資補助（経産省）",
    target: "電気炉・コージェネ・廃熱回収などの基幹設備更新",
    rate: "1/3〜1/2、上限数億円",
    note: "ガラス・窯業の電気溶融炉更新で活用可能。大規模設備投資の核となる制度。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ガス炉→電気炉転換、CO₂削減大規模投資",
    rate: "1/2、上限数十億円",
    note: "脱炭素を絡めた炉の電化や排熱発電で大型補助の対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000 kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "電気溶融炉・焼成炉の電力プロファイル（連続／バッチ）を把握しているか",
  "屋根面積を活用した自家消費太陽光（1〜3MW）導入の試算を実施したか",
  "廃熱回収・コージェネ・バイナリー発電の経済合理性を評価したか",
  "デマンドコントローラー・力率改善設備の導入余地を確認したか",
  "焼成炉のバッチタイミング分散・成形ラインの時間帯シフト可能性を整理したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "SII省エネ補助金・需要家主導型PPA補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "ガラス・窯業の電気代水準はどれくらいですか？", answer: "売上高比8〜18%、製造原価比12〜25%が業界平均で、エネルギー多消費型業種として国内最高水準の電力依存度を持ちます。中規模工場（年産10,000トン級）で年3〜11億円、大規模板ガラス工場（年産40,000トン）で年12〜50億円規模の電気代になります。" },
  { question: "電気溶融炉とガス溶融炉ではどちらが有利ですか？", answer: "電力単価10〜15円/kWhならガス溶融炉が依然有利な場合が多いですが、CO₂規制強化・再エネ比率上昇局面では電化メリットが拡大します。電気溶融炉はガス炉比でCO₂を50〜70%削減でき、脱炭素経営の観点で2030年以降は採用拡大が見込まれます。" },
  { question: "ガラス・窯業の固定プランと市場連動プランどちらが向きますか？", answer: "24時間連続稼働でベースロードが大きく、停止が困難なガラス・窯業は市場高騰のリスクが最も大きい業種の1つです。固定プラン（3〜10年）が圧倒的に向きやすく、2022〜2023年の市場高騰局面では市場連動継続企業で月数千万円の追加負担が発生しました。" },
  { question: "廃熱回収・コージェネはガラス・窯業で効果がありますか？", answer: "ガラス・窯業は高温廃熱を大量に排出するため、廃熱回収（バイナリー発電・蒸気タービン発電）の相性が極めて良好です。中規模工場で500kW〜2MW級のコージェネ・廃熱発電が現実的、投資回収5〜8年（補助金後3〜6年）が目安となります。" },
  { question: "ガラス・窯業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、設備更新主体）、高度省エネルギー設備投資補助（電気炉・コージェネ）、需要家主導型PPA補助金（太陽光・蓄電池併設）、脱炭素先行地域・GX補助の4本柱。電気溶融炉更新は大規模採択の核となります。" },
  { question: "焼成炉のバッチタイミング分散でどれだけ基本料金を下げられますか？", answer: "複数台の焼成炉を運用する場合、起動・昇温タイミングを30分〜2時間ずらすだけでデマンドピークを10〜18%削減した事例が多数あります。中規模工場（契約kW 2,000）で年300〜600万円の基本料金削減が現実的、投資はデマンドコントローラー（100〜300万円）のみで回収1年以内。" },
  { question: "自家消費型太陽光はガラス・窯業で投資回収できますか？", answer: "屋根面積1万m²以上、24時間連続稼働の工場は業種別で最上位の相性。1MWで年100〜130万kWh発電、年1,000〜1,500万円の削減、投資回収7〜10年（補助金後5〜7年）が目安です。自家消費率90%超になりやすく投資効率が高いです。" },
  { question: "電気溶融炉の高調波対策は電気代にどう影響しますか？", answer: "電気溶融炉の整流回路は高調波（5次・7次など）を発生させ、対策が不十分だと力率低下で基本料金の力率割引（最大15%）を失います。アクティブフィルタ・進相コンデンサの設置で改善でき、中規模工場で年100〜300万円の基本料金回復が可能です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "板硝子協会（業界統計）", url: "https://www.itakyo.or.jp/" },
  { name: "日本ガラスびん協会", url: "https://glassbottle.org/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function GlassCeramicsElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/glass-ceramics-electricity-cost-review"
        datePublished="2026-05-18"
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
          <span className="text-slate-800">ガラス・窯業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ガラス・窯業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ガラス・窯業（板ガラス・容器ガラス・陶磁器・耐火物）は、溶融炉・焼成炉が24時間連続稼働する典型的なエネルギー多消費業種です。電気溶融炉の導入拡大、脱炭素規制強化、再エネ賦課金上昇により電力コストが事業収支を直接左右する時代に入りました。本ページでは業界特有の電力負荷特性、業界平均水準、規模別事例、廃熱回収・コージェネ活用、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-18" updatedAt="2026-05-18" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ガラス・窯業の電力使用プロファイル（溶融炉／焼成炉／成形／徐冷）</li>
              <li>業界平均の電気代水準（売上高比8〜18%）と1トン製品あたり単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金が当業種に与える影響</li>
              <li>規模別（2,500／10,000／40,000トン）の電気代と削減事例3件（Before/After）</li>
              <li>廃熱回収・コージェネ・バイナリー発電の費用対効果</li>
              <li>SII・需要家主導型PPA・高度省エネ補助・GX補助の組合せ活用</li>
              <li>ガラス・窯業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ガラス・窯業の電力使用特性 — 溶融炉・焼成炉の連続稼働が中核
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業の電力使用は『溶融炉・焼成炉（基幹）／成形・後加工（連続）／徐冷・排ガス処理（恒常）』の3層で構成されます。溶融炉・焼成炉が工場全体の50〜70%を占めるため、この基幹設備の電力プロファイルが契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比8〜18%、製品1トン400〜2,500 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業の電気代水準は製品種別（板ガラス／容器／陶磁器／耐火物）と炉種（電気炉／ガス炉／混合）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 板硝子協会・日本ガラスびん協会・経産省工業統計・省エネ事例集から整理。実値は炉種・製品種別・連続度合いで1.5〜2倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ガラス・窯業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・電化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              規模別の削減事例3件 — 2,500トン陶磁器／10,000トンガラス／40,000トン板ガラス
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-reduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場の電気代削減</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              連続稼働 vs バッチ稼働 — 業界ピーク時間帯とデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス溶融は典型的な連続稼働、陶磁器・耐火物の焼成炉はバッチ式が主流という違いがあります。業界全体としては平日昼間に成形ライン稼働が集中するため、地域配電網ピークと重なりやすい構造を持ちます。
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
              ガラス・窯業は24時間連続稼働でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。燃料費調整額の上限有無、市場連動プランの可否は経営判断レベルの論点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>使用量が業種別で最大級、価格変動の影響額が桁違い</li>
                  <li>溶融炉の停止・再立上げに数日〜数週間を要する</li>
                  <li>製品価格への即時転嫁が困難（長期契約・国際競争）</li>
                  <li>電化進行で固定単価の重要性が一層増す</li>
                  <li>24時間稼働で価格変動から逃れる手段がない</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが事業損益直撃</li>
                  <li>製品価格に電力コスト上昇を即時転嫁できない</li>
                  <li>電力市場の常時監視と柔軟な対応体制が必要</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数億円の追加負担</li>
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
              廃熱回収・コージェネとの組合せ — 高温廃熱を活かす投資設計
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業は溶融炉・焼成炉から大量の高温廃熱（300〜800°C）を排出します。この廃熱を回収・発電・予熱に活用する投資はエネルギー多消費業種の中で最も投資効率が高い領域の1つです。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">バイナリー発電（廃熱発電）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>300〜500°Cの廃熱で発電可能（100〜2,000kW級）</li>
                  <li>中規模工場で年500〜1,500万円の電力購入削減</li>
                  <li>SII補助1/2活用で投資回収 5〜8年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">コージェネレーション（熱電併給）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ガスエンジン・タービンで発電＋廃熱を炉予熱に利用</li>
                  <li>総合効率80%超、電気代＋燃料費の合計を削減</li>
                  <li>BCP電源としても活用可能</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">廃熱の成形・原料予熱再利用</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>焼成炉廃熱を成形工程の予熱に再利用</li>
                  <li>燃料・電力使用量▲5〜12%、投資1〜2年で回収</li>
                  <li>SII補助・GX補助の対象</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蓄熱式バーナー・蓄熱式燃焼装置</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>排ガスの顕熱を蓄熱体に蓄え、燃焼空気を予熱</li>
                  <li>燃焼効率20〜30%向上、電力比率低減にも寄与</li>
                  <li>陶磁器・耐火物焼成炉で標準採用が進む</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ全体像は{" "}
              <Link href="/electricity-cost-reduction-action-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力コスト削減アクションマップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 大量使用業種ゆえの負担増と減免制度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。ガラス・窯業の大規模工場では、負担額が請求総額の15〜25%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模工場（年2,800万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 9,772万円</li>
                  <li>2025年度（3.98円/kWh）：年 1.11億円（+1,372万円）</li>
                  <li>2026年度（4.18円/kWh）：年 1.17億円（+1,932万円）</li>
                  <li>3年間で年1,900万円超の負担増（年使用量横ばい前提）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免制度の対象要件</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間電力使用量1,000万kWh以上の事業所</li>
                  <li>製造業・電気使用密度（電気使用量÷売上高）要件あり</li>
                  <li>ガラス・窯業は電気使用密度が極めて高く減免対象になりやすい</li>
                  <li>自家消費太陽光で系統供給量を減らすことが実質的回避策にもなる</li>
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
              ガラス・窯業特有の節電・省エネ施策 — 電化・廃熱回収・太陽光・蓄電池
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業の省エネは『運用最適化（炉プロファイル管理）』『設備対策（LED・コンプレッサー・電化）』『再エネ自家消費・廃熱回収』の3軸で組み立てます。各軸の年間削減効果と投資回収年数を提示します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">運用最適化（炉温度・徐冷プロファイル）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>徐冷炉の温度プロファイル最適化で電力▲5〜10%</li>
                  <li>溶融炉のガラス入替タイミング最適化で電力ピーク▲8〜12%</li>
                  <li>投資回収 1〜3年（運用改善・センサー追加のみ）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED照明・高効率空調・コンプレッサー更新</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>LED化で照明電力▲40〜60%（年300〜800万円削減）</li>
                  <li>高効率コンプレッサーで電力▲25〜35%</li>
                  <li>投資回収 3〜5年（SII補助1/2活用で2〜3年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜5 MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>必要屋根面積 約6,000〜8,000 m²/MW</li>
                  <li>連続稼働で自家消費率90%超、投資回収 7〜10年（補助金後 5〜7年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蓄電池・コージェネ・廃熱発電の併設</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蓄電池でピークカット契約kW▲5〜10%</li>
                  <li>コージェネ・廃熱発電で電力購入▲10〜25%</li>
                  <li>BCP電源確保（停電時2〜6時間）</li>
                  <li>需要家主導型PPA補助金で投資回収7〜10年</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、蓄電池活用は{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池のBCP×ピークカット活用</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・PPA・高度省エネ・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋高度省エネ）で採択率が高くなる傾向。
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
              ガラス・窯業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社ガラス・窯業工場の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ガラス・窯業は24時間連続稼働・大量電力消費・電化進行の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電気溶融炉導入後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した8〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-18"
            />
            <GlossaryLinks currentSlug="glass-ceramics-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "連続稼働工場の負荷特性と契約見直しの考え方。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/pulp-paper-electricity-cost-review", title: "紙パルプ業の電気料金見直し", description: "大規模電力消費業種としての類似事例。" },
              { href: "/printing-electricity-cost-review", title: "印刷業の電気料金見直し", description: "24h稼働の印刷業の電力構造。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減とBCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積大の連続稼働工場の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい工場の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調更新・コンプレッサーで活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大のガラス・窯業に直結するリスク。" },
            ]}
          />

          <ContentCta
            heading="自社のガラス・窯業工場条件でリスクを確認する"
            description="溶融炉・焼成炉の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。電気溶融炉導入後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
