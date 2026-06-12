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
  "飲食店の夏季電力対策｜法人の夏季電気代対策（厨房×空調のピーク重複／規模別・代表シナリオ）";
const pageDescription =
  "飲食店（居酒屋・カフェ・ファミレス・専門店・チェーン）の夏季電力対策を解説。厨房発熱が空調負荷を押し上げる夏季特有の二重負荷、ランチ／ディナーの来店ピーク、冷蔵冷凍・製氷機の負荷、業態別の最適戦略、規模別の代表シナリオ、デマンド管理、多店舗の一括調達、補助金活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "飲食店 夏 電気代",
    "厨房 空調 ピーク",
    "飲食店 デマンド 削減",
    "製氷機 冷蔵 電気代",
    "飲食 夏季 電力対策",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/restaurant-summer-electricity-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/restaurant-summer-electricity-strategy",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/seasonal-strategy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/seasonal-strategy"],
  },
};

const peakStructure = [
  {
    label: "厨房発熱と空調の二重負荷",
    detail:
      "飲食店の夏季電気代を押し上げる最大の構造要因が、厨房発熱と空調の二重負荷です。コンロ・フライヤー・オーブン・スチコンが放出する熱が店内温度を引き上げ、その熱を打ち消すために空調がフル稼働するという正のフィードバックが起きます。厨房発熱を給排気で外に逃がすか否かで、空調側の消費電力が大きく変わるのが夏季特有の論点です。本ページの整理は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "ランチ／ディナーの来店ピーク",
    detail:
      "飲食店の電力負荷は1日2山型（ランチ11〜14時・ディナー17〜22時）が基本で、外気温の高い昼間ピークと空調・厨房・照明が重なる夕方ピークが契約電力（デマンド）を決めます。来店ピークと外気温ピークが重なる8〜9月の昼間が、年間最大デマンドの発生時間帯になりやすい点を押さえます。",
  },
  {
    label: "冷蔵・冷凍・製氷機の常時負荷",
    detail:
      "営業時間外も止まらない冷蔵庫・冷凍庫・製氷機・ショーケースは、夏季に外気温・厨房温度の上昇で凝縮負荷が増え、消費電力が膨らみます。製氷機は夏季に氷消費が増えるため稼働率も上がり、二重に効いてきます。閉店後も走り続けるベース負荷の最適化が、飲食店の夏季対策の隠れた主戦場です。",
  },
  {
    label: "業態による電力プロファイルの違い",
    detail:
      "同じ飲食店でも、火力中心の居酒屋・焼肉、空調と冷蔵が重い カフェ、長時間営業のファミレス、専門店、多店舗チェーンで電力プロファイルは大きく異なります。一律の節電施策ではなく、業態ごとの発熱源・営業時間・席回転に応じた設計が必要です。",
  },
  {
    label: "投資判断の3軸（即効性・回収年・店舗展開）",
    detail:
      "飲食店の夏季対策投資は、即効性（運用改善・遮熱）・投資回収年（高効率厨房機器・空調更新で3〜6年、補助金活用で2〜4年）・多店舗展開のしやすさ（標準化・横展開）の3軸で判断します。1店舗で効果検証してから全店に横展開する段階アプローチが定石です。",
  },
];

const industryBenchmark = [
  {
    label: "業態別の夏季電気代水準（対通年比）",
    detail:
      "公開情報の目安として、居酒屋・焼肉など火力中心業態で対通年+20〜30%、カフェ・喫茶で+15〜25%、ファミレス・ファストフードで+15〜20%、専門店（ラーメン・そば等）で+10〜20%、空調比率の高い大箱業態ほど夏季比率が上がる傾向です。実値は立地・営業時間・席数で1.5〜2倍ぶれます。",
  },
  {
    label: "業態別の冷房・厨房電力比率の目安",
    detail:
      "飲食店の電力は概ね空調30〜45%・厨房（加熱）20〜35%・冷蔵冷凍／製氷15〜30%・照明その他10〜20%。カフェは空調と冷蔵が重く、居酒屋・焼肉は厨房比率が高く、ファミレスは長時間営業で全体が底上げされるという業態差があります。",
  },
  {
    label: "1坪あたり年間電気代の目安レンジ",
    detail:
      "公開情報の目安として、カフェ・喫茶で1坪あたり年2.5万〜5万円、一般的な居酒屋・定食店で年3万〜6万円、火力の重い焼肉・鉄板で年5万〜9万円、長時間営業のファミレスで年4万〜7万円が一つの目安です。客席面積に対する厨房比率が高いほど坪単価が上がります。",
  },
];

const costFactors = [
  {
    label: "猛暑日・夏季気温の上昇トレンド",
    detail:
      "気象庁の公開データでは、過去30年で夏季平均気温と猛暑日が明確に増加傾向にあります。外気温が1℃上がると空調負荷・冷蔵冷凍の凝縮負荷がともに増えるため、飲食店の夏季ピーク電力はトレンド的に押し上げられています。",
  },
  {
    label: "厨房発熱の空調負荷への波及",
    detail:
      "厨房で発生した熱がホールに流れ込むと、空調はその熱を打ち消すために余分に稼働します。給排気バランスが崩れて負圧になると外気が無秩序に流入し、空調効率がさらに悪化します。厨房発熱の処理は、飲食店の夏季電気代を決める固有要因です。",
  },
  {
    label: "電化厨房（IH・電気フライヤー）への移行",
    detail:
      "脱ガス・脱炭素・店内環境改善の流れでIHコンロ・電気フライヤー・電気スチコンへ移行する店舗が増えています。加熱効率は高い一方で電力使用量・契約電力（デマンド）が上振れしやすく、夏季ピーク時の契約電力管理が新たな論点になります。",
  },
  {
    label: "燃料費調整額・市場価格の変動",
    detail:
      "電気料金は基本料金・電力量料金に加え、燃料費調整額や市場価格調整額、再エネ賦課金が積み上がる構造です。燃調や市場（JEPX）スポット価格の将来は不確実で、本ページでは想定・目安レンジとして扱います。仕組みの理解が交渉と契約見直しの前提になります。",
  },
  {
    label: "再エネ賦課金の単価上昇",
    detail:
      "再エネ賦課金は2026年度で4.18円/kWhです。使用電力量（kWh）に単価を掛けて課金されるため、夏季に電力使用量が増える飲食店ほど負担額が増えます。kWh×単価という基本構造を踏まえ、まずは使用量そのものを抑える対策が効きます。",
  },
];

const sizeBenchmarks = [
  {
    size: "個店・小規模（年間電気代60万〜300万円）",
    profile: "個人経営の居酒屋・カフェ・専門店（1〜2店舗）",
    annualCost: "投資 30万〜200万円で年10万〜60万円削減が目安",
    note: "LED化・遮熱フィルム・サーキュレーター・厨房給排気の運用改善・冷蔵庫の凝縮器清掃を即時実施。空調・厨房機器の更新は更新時期に合わせて計画化。",
  },
  {
    size: "中小チェーン（年間電気代300万〜3,000万円）",
    profile: "数店舗〜数十店舗の地域チェーン・FCオーナー",
    annualCost: "投資 200万〜2,000万円で年60万〜600万円削減が目安",
    note: "高効率空調＋高効率冷蔵冷凍＋デマンド監視＋多店舗の契約見直しを2〜3年計画で組合せ。1店舗でPoCしてから横展開。プラン選定は各社相見積で中立に比較するのが原則です。",
  },
  {
    size: "大手チェーン本部（年間電気代3,000万〜数十億円）",
    profile: "全国展開の外食チェーン本部・エネルギー管理部門",
    annualCost: "投資 2,000万〜数億円で年600万〜数億円削減が目安",
    note: "全店EMS統合・デマンド一括監視・多店舗一括調達・自家消費太陽光（大型店）・DR参加・補助金フル活用が標準。Scope1/2開示との連動も。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1：個店の居酒屋（年間目安▲14%）",
    before: "都市部・客席30席の居酒屋（年間電気代 約180万円、契約電力 約25kW）。フライヤー・グリル中心の火力で厨房発熱が大きく、夏季はホール空調がフル稼働。冷蔵庫の凝縮器に油汚れが堆積し効率低下。照明は一部蛍光灯のまま。",
    after: "①厨房給排気バランスの調整＋スポット送風で発熱をホールへ流さない／②全照明LED化／③窓・出入口に遮熱フィルム＋エアカーテン運用／④冷蔵冷凍の凝縮器清掃・設定温度の適正化／⑤ピーク時間帯の機器立上げをずらす運用ルール化。",
    result: "年間電気代 約180万円 → 約155万円（▲14%、▲約25万円）／夏季ピークデマンド 25kW→22kW／投資合計 約90万円、運用改善中心のため回収 約3.5年。公開事例・業界団体ヒアリングから整理した代表シナリオであり、目安として参照ください。",
  },
  {
    title: "代表シナリオ2：中小カフェチェーン（年間目安▲16%）",
    before: "郊外ロードサイド中心・12店舗のカフェチェーン（年間電気代 合計 約2,400万円、1店あたり契約電力 約40kW）。空調＋冷蔵ショーケース＋製氷機の負荷が重く、夏季のデマンドが各店で上振れ。店舗ごとに契約・運用がばらばらで把握が困難。",
    after: "①全店にデマンド監視（見える化）導入／②高効率空調へ計画更新＋外気冷房の活用／③ショーケース・製氷機の更新と夜間製氷シフト／④遮熱・LED化を全店標準化／⑤多店舗の契約条件を棚卸しし相見積で見直し（固定／市場連動を各社比較）。",
    result: "年間電気代 合計 約2,400万円 → 約2,016万円（▲16%、▲約384万円）／各店の夏季ピークデマンド平均 40kW→34kW／投資合計 約1,500万円、補助金活用で実質 約900万円、総合回収 約2.3年。公開事例・業界団体ヒアリングから整理した代表シナリオであり、目安です。",
  },
  {
    title: "代表シナリオ3：大手外食チェーン本部（年間目安▲12%）",
    before: "全国200店舗超のファミレス系チェーン本部（年間電気代 合計 約6.0億円）。長時間営業で空調・厨房・冷蔵が一日を通して稼働。店舗間で消費量のばらつきが大きく、エネルギー管理が属人的。大型店の屋根・駐車場は未活用。",
    after: "①全店EMS統合＋デマンド一括監視で異常値店舗を抽出／②高効率厨房機器・空調・冷蔵冷凍の計画更新／③大型店に自家消費太陽光＋一部蓄電池＋DR参加／④多店舗一括調達の枠組みを整備し相見積で各社比較／⑤省エネ補助金・GX補助のフル活用。",
    result: "年間電気代 合計 約6.0億円 → 約5.28億円（▲12%、▲約7,200万円）／DR収入 年 約1,500万円／投資合計 約4億円、補助金活用で実質 約2.2億円、総合回収 約3年／CO₂削減 約4,000 t/年（目安）。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
  },
];

const demandManagement = [
  {
    label: "厨房給排気バランスの最適化",
    detail:
      "フードの排気とホールへの給気のバランスを整え、厨房発熱をホールへ流さないことが空調負荷削減の起点です。給気不足で店内が負圧になると外気が無秩序に入り空調効率が落ちるため、給排気の調整・適正風量化で空調側の消費電力を抑えられます。投資は比較的小さく即効性が高い領域です。",
  },
  {
    label: "スポット空調・気流制御の活用",
    detail:
      "店全体を一律に冷やすのではなく、厨房作業エリアにはスポットクーラー、ホールはサーキュレーター・シーリングファンで気流を作り、設定温度を緩めても体感を維持します。発熱源近傍を局所的に冷やすことで、空調全体の負荷とデマンドを下げられます。",
  },
  {
    label: "製氷・冷蔵冷凍の運用最適化",
    detail:
      "製氷は電力単価が低く外気温も低い夜間〜早朝にシフトし、貯氷で日中ピークを避けます。冷蔵冷凍は凝縮器の定期清掃・設定温度の適正化・扉開閉の短縮・ナイトカバー活用で凝縮負荷を抑えます。常時稼働のベース負荷を削るほど、夏季の積み上がりが緩和されます。",
  },
  {
    label: "デマンド監視によるピーク抑制",
    detail:
      "デマンド監視装置で30分デマンドを見える化し、警報時に空調・予備機器の運転を一時調整するルールを定めると、契約電力（デマンド）の更新を防げます。多店舗では一括監視で異常値店舗を抽出し、横展開の優先順位を決められます。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 業務用・店舗型）",
    target: "高効率空調・高効率冷蔵冷凍・厨房機器・LED・EMS",
    rate: "中小1/2、大企業1/3（公募回により変動）",
    note: "飲食店の夏季対策で最も活用しやすい主力補助金。複数施策の組合せで採択率が上がる傾向があります。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "大型店・郊外店の自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内（公募により変動）",
    note: "屋根・駐車場面積のある大型店・本部直営店で、夏季ピーク削減と再エネ調達を両立。",
  },
  {
    name: "脱炭素・GX関連補助（環境省・経産省）",
    target: "電化厨房・高効率ヒートポンプ・自然冷媒冷蔵冷凍機",
    rate: "1/2前後（公募により変動）",
    note: "電化厨房移行やフロン規制対応と省エネ投資を連動させる際の大型補助。",
  },
  {
    name: "自治体の省エネ・脱炭素設備補助",
    target: "中小飲食店の空調・冷蔵・LED更新等",
    rate: "1/3〜2/3（自治体により変動）",
    note: "個店・地域チェーン向け。国の補助と併用可否は要確認。地域の商工会・自治体窓口で最新公募を確認。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか確認したか",
  "夏季の年間最大デマンドがランチ／ディナーのどの時間帯に出ているか把握したか",
  "厨房給排気のバランスを点検し、発熱がホールへ流れていないか確認したか",
  "スポット空調・サーキュレーターで設定温度を緩める余地を評価したか",
  "冷蔵冷凍・製氷機の凝縮器清掃・設定温度・夜間製氷シフトを実施したか",
  "デマンド監視（見える化）の導入で契約電力更新を防ぐ運用を整えたか",
  "遮熱フィルム・エアカーテン・LED化など即効性の高い施策を済ませたか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "新電力など複数社から相見積を取得し、固定／市場連動を中立に比較したか",
  "多店舗の場合、契約条件を棚卸しして一括調達・標準化の余地を試算したか",
];

const faqItems = [
  { question: "飲食店の夏季電気代は通年比でどれくらい上がりますか？", answer: "公開情報の目安として、火力中心の居酒屋・焼肉で対通年+20〜30%、カフェ・喫茶で+15〜25%、ファミレス・ファストフードで+15〜20%、専門店で+10〜20%が目安です。空調比率の高い大箱業態ほど夏季比率が上がります。実値は立地・営業時間・席数で1.5〜2倍ぶれます。" },
  { question: "なぜ飲食店は夏に電気代が跳ね上がるのですか？", answer: "厨房の加熱機器が放出する熱が店内温度を押し上げ、それを打ち消すために空調がフル稼働する『二重負荷』が起きるためです。さらに外気温上昇で冷蔵冷凍・製氷機の凝縮負荷も増えます。来店ピークと外気温ピークが重なる昼間に年間最大デマンドが出やすい点も要因です。" },
  { question: "厨房の発熱対策で最初にやるべきことは何ですか？", answer: "厨房給排気のバランス調整が第一歩です。排気に見合う給気を確保し、発熱をホールへ流さない・店内を負圧にしないことで空調負荷が下がります。次にスポット空調・気流制御で設定温度を緩める運用が即効性の高い対策です。" },
  { question: "製氷機や冷蔵冷凍の電気代を下げる方法は？", answer: "①製氷を夜間〜早朝にシフトし貯氷で日中ピークを回避／②凝縮器の定期清掃と設定温度の適正化／③扉開閉時間の短縮・ナイトカバー活用／④高効率・自然冷媒機への計画更新。常時稼働のベース負荷を削るほど夏季の積み上がりが緩和されます。" },
  { question: "電化厨房（IH・電気フライヤー）に変えると電気代は上がりますか？", answer: "加熱効率は高い一方で電力使用量と契約電力（デマンド）が上振れしやすく、夏季ピーク管理が重要になります。デマンド監視で立上げタイミングをずらす、補助金で高効率機を選ぶなどの対策と併せて検討するのが現実的です。" },
  { question: "デマンド監視は飲食店でも効果がありますか？", answer: "効果的です。30分デマンドを見える化し警報時に空調・予備機器を一時調整するだけで、契約電力（デマンド）の更新を防げます。多店舗では一括監視で異常値店舗を抽出し、対策の優先順位を決められます。仕組みは契約電力の解説ページも参照ください。" },
  { question: "多店舗チェーンの電気代はどう見直せばよいですか？", answer: "まず全店の契約条件・使用量を棚卸しして見える化し、1店舗で施策を検証してから横展開します。契約は一括調達・標準化の余地を試算し、複数社の相見積で固定／市場連動を中立に比較します。" },
  { question: "飲食店の夏季対策に使える補助金は何がありますか？", answer: "経産省SII省エネ補助金（高効率空調・冷蔵冷凍・厨房・EMS）、需要家主導型PPA補助金（大型店の太陽光・蓄電池）、脱炭素・GX補助（電化厨房・自然冷媒）、自治体の省エネ補助の4本柱が代表的です。公募回により条件が変わるため最新情報の確認が必要です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "日本冷凍空調工業会（JRAIA）", url: "https://www.jraia.or.jp/" },
  { name: "気象庁（気温・猛暑日の統計データ）", url: "https://www.data.jma.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/unit" },
];

export default function RestaurantSummerElectricityStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/restaurant-summer-electricity-strategy"
        datePublished="2026-06-12"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "季節別の電気代対策", url: "https://simulator.eic-jp.org/articles/seasonal-strategy" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/seasonal-strategy" className="underline-offset-2 hover:underline">季節別の電気代対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">飲食店の夏季電力対策</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            飲食店の夏季電力対策
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            飲食店の夏季電気代を押し上げる最大の構造要因は、厨房発熱と空調の『二重負荷』です。コンロ・フライヤー・オーブンが放出する熱を打ち消すために空調がフル稼働し、外気温ピークと来店ピークが重なる昼間に契約電力（デマンド）が跳ね上がります。さらに冷蔵冷凍・製氷機の常時負荷も夏季に膨らみます。本ページでは厨房×空調のピーク重複の構造、業態別の最適戦略、規模別の代表シナリオ、デマンド管理、多店舗の一括調達、補助金活用までを実務目線で整理します。なお本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-12" updatedAt="2026-06-12" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>厨房発熱が空調負荷を押し上げる夏季特有の二重負荷の構造</li>
              <li>業態別（居酒屋／カフェ／ファミレス／専門店／チェーン）の夏季水準</li>
              <li>ランチ／ディナーの来店ピークと契約電力（デマンド）の関係</li>
              <li>規模別の投資パターンと代表シナリオ3件（個店／中小チェーン／大手本部）</li>
              <li>厨房給排気・スポット空調・製氷／冷蔵最適化・デマンド監視</li>
              <li>多店舗の一括調達・契約の考え方と補助金活用</li>
              <li>夏季対策チェックリスト（10項目）とシミュレーターでの確認</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              飲食店の夏季電力構造 — 厨房発熱×空調×冷蔵の重なり
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季電気代は『厨房発熱と空調の二重負荷／ランチ・ディナーの来店ピーク／冷蔵冷凍・製氷の常時負荷／業態別プロファイル／投資判断3軸』の5論点で構造化されます。一律の節電ではなく、発熱源・営業時間・席回転に応じた設計が経営判断の起点です。
            </p>
            <div className="mt-4 space-y-3">
              {peakStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季電気代の全体像は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                夏季ピーク電気代の基礎とCFO視点
              </Link>
              、5戦略の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                業種横断ピークカット5戦略
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の飲食店夏季電気代水準（業態別）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季電気代水準は業態・立地・営業時間で大きく異なります。公開データから整理した業界平均値を、自社水準との比較に活用してください。数値はあくまで目安であり、自社の実績データでの検証が前提です。
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
              ※ 単価・統計・削減率はいずれも公開情報目安です。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。実値は業態・立地・営業時間で1.5〜2倍ぶれます。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要な夏季電気代上昇要因 — 猛暑・厨房発熱・電化厨房
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季電気代上昇は、猛暑トレンド、厨房発熱の空調波及、電化厨房への移行、燃料費調整額・市場価格の変動、再エネ賦課金の単価上昇という構造的要因が並列します。要因ごとに効く対策が異なる点が重要です。
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
              再エネ賦課金は2026年度で4.18円/kWh、使用電力量（kWh）×単価で課金されます。具体的な負担感は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で試算でき、固定／市場連動の選び方は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定の比較</Link>
              で確認できます。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 燃調・JEPX（市場）スポット価格の将来は不確実なため想定・目安レンジとして扱います。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の投資パターン — 個店／中小チェーン／大手本部
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季対策投資は規模で大きく異なります。個店ではLED・遮熱・運用改善を即時実施、中小チェーンでは高効率機器＋デマンド監視＋多店舗の契約見直し、大手本部では全店EMS統合・一括調達・自家消費太陽光・DRを総合活用します。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.profile}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{item.annualCost}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              チェーン全体の見直し手順は{" "}
              <Link href="/restaurant-chain-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲食チェーンの電気料金見直し</Link>
              、固定プランの適性は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の代表シナリオ3件 — 個店／中小チェーン／大手本部
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公開事例・業界団体ヒアリングから整理した3つの代表シナリオをBefore/Afterで提示します。いずれも目安であり、実際の効果は店舗条件で変動します。各シナリオで業態・規模に応じた最適戦略の組合せを確認できます。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果・目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多店舗のデマンド制御の具体は{" "}
              <Link href="/case-study-restaurant-chain-demand-control" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲食チェーンのデマンド制御事例</Link>
              、削減効果の試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季のデマンド管理 — 給排気・スポット空調・製氷／冷蔵・監視
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店のデマンド管理は『厨房給排気バランスの最適化』『スポット空調・気流制御』『製氷・冷蔵冷凍の運用最適化』『デマンド監視によるピーク抑制』の4論点を組合せて最適化します。投資が小さく即効性の高い運用改善から着手するのが定石です。
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
              デマンドの基礎は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）とは</Link>
              、入門全体像は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール入門</Link>
              で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業態別の最適戦略 — 居酒屋・カフェ・ファミレス・専門店
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業態別の最適戦略は発熱源・営業時間・席回転で大きく分かれます。自社業態に応じた組合せ設計が経営判断の基礎です。下表の削減率は公開情報目安であり、実値は店舗条件で変動します。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">居酒屋・焼肉の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>厨房給排気バランス調整＋スポット空調</li>
                  <li>無煙ロースター・排熱処理の効率化</li>
                  <li>製氷の夜間シフト・冷蔵設定適正化</li>
                  <li>目安▲14〜22%削減（公開情報目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">カフェ・喫茶の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>高効率空調＋外気冷房・遮熱対策</li>
                  <li>冷蔵ショーケース・製氷機の更新</li>
                  <li>窓面積が大きい店舗の遮熱フィルム</li>
                  <li>目安▲12〜20%削減（公開情報目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ファミレス・ファストフードの最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>長時間営業向けデマンド監視</li>
                  <li>厨房機器の高効率化・待機運転削減</li>
                  <li>大型店は自家消費太陽光・DR参加</li>
                  <li>目安▲10〜18%削減（公開情報目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">専門店（ラーメン・そば等）の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>釜・茹で機など高発熱機器の排熱処理</li>
                  <li>給排気強化＋スポット送風</li>
                  <li>ピーク時間帯の機器立上げ分散</li>
                  <li>目安▲10〜18%削減（公開情報目安）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              多店舗の一括調達・契約の考え方
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多店舗チェーンは『契約条件の棚卸し・見える化／一括調達・標準化／固定と市場連動の中立比較／更新タイミングの集約』の4観点で契約を最適化します。まず全店の使用量・契約区分を可視化し、1店舗で施策を検証してから横展開するのが定石です。特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">調達・契約の4観点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>全店の契約条件・使用量の棚卸し（見える化）</li>
                  <li>一括調達・契約標準化によるスケールメリット</li>
                  <li>固定／市場連動を複数社相見積で中立比較</li>
                  <li>契約更新タイミングの集約と交渉力強化</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">本部レポーティングの重点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>店舗別の夏季デマンド・原単位ベンチマーク</li>
                  <li>異常値店舗の抽出と横展開の優先順位</li>
                  <li>燃調・市場価格変動の感度分析（想定レンジ）</li>
                  <li>Scope2排出・補助金活用の開示材料</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン比較の基礎は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定の比較</Link>
              、近接業態の見直しは{" "}
              <Link href="/convenience-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コンビニの電気料金見直し</Link>
              も参考になります。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（飲食店の夏季対策） — SII・PPA・GX・自治体
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季対策に活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を短縮できます。複数補助金の組合せ申請で採択率が高くなる傾向があります。公募回により条件が変わるため最新情報の確認が前提です。
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
              主力補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金の活用</Link>
              、大型店の太陽光は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              飲食店の夏季電力対策チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季対策の立案前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、相見積の精度や交渉力、施策の効果が下がります。即効性の高い運用改善から順に潰していくのがおすすめです。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークカットの全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、夏のピークシフトは{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              で確認できます。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで飲食店の夏季対策を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              飲食店の夏季電気代は業態・立地・営業時間・厨房構成で大きく異なります。{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で自社条件における夏季上振れ幅と、高効率機器・デマンド監視・多店舗見直しのメリットを定量化できます。試算結果は本ページの代表シナリオと突き合わせてご活用ください。本整理は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>業態別の削減ポテンシャル（厨房給排気・空調・冷蔵冷凍）を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を中立に把握する</li>
              <li>デマンド監視・高効率機器投資の回収シナリオを比較する</li>
              <li>代表シナリオで示した目安▲12〜16%の自社適用可能性を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 5年累計の概算例として、年▲200万円 ×5年＝▲1,000万円（中小チェーン規模の目安）。実値は店舗条件で変動します。
            </p>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-12"
            />
            <GlossaryLinks currentSlug="restaurant-summer-electricity-strategy" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別戦略のハブ。" },
              { href: "/restaurant-chain-electricity-cost-review", title: "飲食チェーンの電気料金見直し", description: "多店舗チェーンの契約・運用見直しの全体像。" },
              { href: "/case-study-restaurant-chain-demand-control", title: "飲食チェーンのデマンド制御事例", description: "多店舗のデマンド一括制御の実装事例。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と夏のピークシフト戦略。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/demand-control-guide", title: "デマンドコントロール入門", description: "デマンド管理の基礎と進め方。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）とは", description: "30分デマンドと契約電力の決まり方。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理の削減効果の試算。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業態・条件別に夏季上振れと削減幅を試算。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定の比較", description: "プラン選定の中立的な比較軸。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "飲食業態の固定プラン適性。" },
              { href: "/convenience-store-electricity-cost-review", title: "コンビニの電気料金見直し", description: "近接業態の冷蔵・空調プロファイル。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "大型店・郊外店の屋根太陽光の投資回収。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "高効率空調・冷蔵冷凍・厨房更新の主力補助金。" },
            ]}
          />

          <ContentCta
            heading="自社の飲食店夏季対策をシミュレーターで確認する"
            description="業態・立地・営業時間・厨房構成をもとに、夏季電気代の上振れ幅と高効率機器・デマンド監視・多店舗見直しのメリットを試算できます。1店舗での検証から全店横展開の計画策定にもご活用ください。"
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
