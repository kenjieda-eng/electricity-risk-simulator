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
  "物流倉庫（常温・一般倉庫）の電気料金見直しポイント｜24h稼働とLED・空調・搬送設備の契約最適化";
const pageDescription =
  "物流倉庫（常温・一般倉庫）の電気料金見直しを解説。冷蔵倉庫と異なる一般倉庫の負荷構造、24h稼働の照明・空調・搬送設備、LED化・自家消費太陽光・蓄電池の費用対効果、固定プランの相性、補助金活用、契約見直しチェックリストまで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "物流倉庫 電気料金 見直し",
    "倉庫 電気代 削減",
    "配送センター 電力契約",
    "常温倉庫 電気代",
    "一般倉庫 電力 LED",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/warehouse-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/warehouse-electricity-cost-review",
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
    label: "天井高8〜12mの高出力LED照明（24h稼働の主役）",
    detail:
      "常温倉庫・一般倉庫の電力消費の30〜45%を占める。天井高が高いため水銀灯400Wクラスや高出力LED（200〜400W）が多数必要。24時間稼働の倉庫では年間消費電力に占める割合が最大で、LED化と人感センサ制御の費用対効果が最も高い領域。",
  },
  {
    label: "搬送・仕分け設備（コンベア・ソーター・フォークリフト充電）",
    detail:
      "コンベア・自動仕分け機（ソーター）・電動フォークリフト充電が電力消費の25〜35%を占める。出荷ピーク時間帯（10〜12時、15〜18時）の同時稼働でデマンドの押し上げ要因として最大。電動フォークリフト導入拡大で充電負荷が新規発生。",
  },
  {
    label: "事務所棟・作業エリア空調",
    detail:
      "夏季の作業環境維持のための空調が電力消費の15〜25%。断熱性能が低い倉庫建物では空調負荷が大きく、夏季ピークの主因。冷蔵倉庫と違い庫内温度管理は不要だが、作業員の安全確保（熱中症対策）で空調需要は増加傾向。",
  },
  {
    label: "WMS（倉庫管理システム）サーバー・IoT機器",
    detail:
      "倉庫管理システム（WMS）サーバー、ロケーション管理タブレット、自動倉庫制御PLC、IoT温湿度センサーなどの情報システム電力。中規模倉庫で年間10〜30万kWh規模の連続負荷。",
  },
  {
    label: "ドック設備・荷捌き場（油圧式ドックレベラー等）",
    detail:
      "トラックバース付近の油圧式ドックレベラー、エアカーテン、シャッター電動開閉などの設備電力。出荷時間帯に集中稼働しデマンドピークの一部を形成。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "全日本トラック協会・国交省統計によれば、一般物流倉庫の電気料金は売上高（倉庫保管料）の2.5〜5.0%。冷蔵倉庫（10〜18%）より低いが、24h稼働の中で見れば物流業界の中核コスト。",
  },
  {
    label: "1平米あたりの年間電力使用量",
    detail:
      "一般的な常温倉庫（24時間稼働）で年間70〜110 kWh/m²、日勤のみの常温倉庫で年間40〜70 kWh/m²。自動倉庫（高層ラック・自動搬送）併設では年間120〜180 kWh/m²。冷蔵倉庫（年間250〜600 kWh/m²）と比べて3〜5分の1。",
  },
  {
    label: "床面積別の月間電気代",
    detail:
      "小規模倉庫（3,000 m²、24h稼働）月15〜30万円。中規模倉庫（10,000 m²、24h稼働）月60〜120万円。大規模倉庫（30,000 m²、24h稼働）月200〜400万円。低温対応や自動倉庫設備の有無で1.5〜2倍の幅。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の急騰（24h稼働）",
    detail:
      "24時間稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動でも中規模倉庫（月30万kWh）で月30万円の差。年間360万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、倉庫業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。月30万kWh使用倉庫で年間125万円の負担増。減免制度（年間1,000万kWh以上等）の対象は大規模倉庫に限られ、中規模以下は満額負担。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、倉庫業のような大量電力消費業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "電動フォークリフト・自動搬送機の充電負荷急増",
    detail:
      "従来のガスフォークリフトから電動フォークリフトへの転換、AGV（無人搬送車）・AMR（自律移動ロボット）の導入で充電負荷が新規発生。中規模倉庫で年20〜50万kWhの追加需要、電気代換算で年500〜1,250万円規模の上振れ。契約電力10〜20%増の影響もあり。",
  },
  {
    label: "倉庫DX（WMS高度化・IoT）による情報システム電力増",
    detail:
      "WMS高度化、ピッキングロボット、IoT温湿度センサー、ドローン棚卸しなどの倉庫DX進展で情報システム電力が増加。中規模倉庫で年5〜15万kWhの追加需要。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模倉庫（3,000〜8,000 m²、24h稼働）",
    profile: "地場運送会社の地域配送拠点／高圧 150〜400 kW／年間 60〜180 万 kWh",
    annualCost: "年間電気代 1,500〜4,500 万円",
    note: "新電力切替・固定3年契約・LED化・空調更新で年10〜18%削減事例。SII補助金1/2活用で投資回収3〜5年。",
  },
  {
    size: "中規模倉庫（10,000〜20,000 m²、24h稼働）",
    profile: "中堅3PL・荷主企業の基幹倉庫／高圧 600〜1,400 kW／年間 280〜800 万 kWh",
    annualCost: "年間電気代 7,000万〜2.0 億円",
    note: "固定5年プラン＋自家消費太陽光（1〜2MW）＋蓄電池＋電動フォークリフト充電制御で年12〜22%削減。",
  },
  {
    size: "大規模倉庫（30,000 m²超、自動倉庫・大手物流DC）",
    profile: "総合物流大手の基幹DC／特別高圧 2,500〜6,000 kW／年間 1,500〜4,000 万 kWh",
    annualCost: "年間電気代 3.8〜10 億円",
    note: "1〜2%の単価改善でも年数千万円のインパクト。固定vs市場連動の判断が事業収支に直結。AGV・AMR導入前提のグリッド連携も検討対象。",
  },
];

const caseStudies = [
  {
    title: "事例1：地場運送5,000 m²倉庫の年間18%削減（Before/After）",
    before: "地場運送会社A社の5,000 m²常温倉庫（高圧 280 kW、年間 120 万 kWh、年間電気代 3,000万円）。地域電力会社の従量C契約継続、水銀灯400W×80基、空調10年経過、デマンド管理未実施。",
    after: "新電力切替（固定3年）／全照明LED化（200W×60基、投資 600万円）／高効率空調更新／デマンドコントローラー導入／電動フォークリフト充電時間帯シフト。",
    result: "年間電気代 3,000万円 → 2,460万円（▲18%、▲540万円）／契約 kW 280→240／投資回収 1.5年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：中堅3PL 15,000 m²基幹倉庫の年間22%削減",
    before: "中堅3PL B社の15,000 m²常温基幹倉庫（高圧 1,200 kW、年間 650 万 kWh、年間電気代 1.6億円）。3年前に新電力切替済も市場連動継続、電動フォークリフト50台導入で契約電力上振れ。",
    after: "固定5年プラン切替／自家消費太陽光 1.2 MW 導入（屋根7,200 m²）／蓄電池 1.5 MWh 併設／電動フォークリフト充電タイミング夜間シフト／需要家主導型PPA補助金活用。",
    result: "年間電気代 1.6億円 → 1.25億円（▲22%、▲3,500万円）／契約 kW 1,200→1,030／投資回収 6.5年（補助金後 4.8年）",
  },
  {
    title: "事例3：総合物流大手40,000 m²自動倉庫DCの年間2.4億円削減",
    before: "総合物流大手C社の40,000 m²自動倉庫DC（特別高圧 4,500 kW、年間 3,200 万 kWh、年間電気代 8.0億円）。長期固定契約継続、自家消費太陽光なし、AGV・AMR導入予定で契約電力上振れ見込み。",
    after: "電力契約の集約交渉（複数拠点バンドル）／自家消費太陽光 4 MW＋蓄電池 5 MWh／AGV・AMR充電タイミング全拠点同時最適化／高層ラック自動倉庫の運用最適化／DR契約締結。",
    result: "年間電気代 8.0億円 → 5.6億円（▲30%、▲2.4億円）／契約 kW 4,500→3,800／投資回収 5.5年（補助金後 4年）／CO₂削減 約11,000 t/年",
  },
];

const demandManagement = [
  {
    label: "出荷ピーク（10〜12時／15〜18時）の負荷分散",
    detail:
      "仕分け設備の段階起動、コンベア速度の負荷追従制御で同時最大負荷を抑制。デマンドコントローラーで契約電力10〜15%引下げ可能。",
  },
  {
    label: "電動フォークリフト・AGV充電タイミングの夜間シフト",
    detail:
      "急速充電を夜間（22時〜翌6時）の電力安価時間帯に集中。普通充電は構内駐車中の長時間充電で運用設計。契約電力増加を50〜70%抑制可能。",
  },
  {
    label: "高出力LED照明の人感センサ制御",
    detail:
      "通路・ピッキングエリアの照明を人感センサ＋調光制御。不在エリア消灯で年間照明電力▲30〜50%削減。",
  },
  {
    label: "ドック設備・荷捌き場の連動制御",
    detail:
      "トラックバース利用予定と連動してドックレベラー・エアカーテンを必要時のみ稼働。年間電力▲10〜15%削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "LED照明・高効率空調・コンプレッサー・電動フォークリフト充電器更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "倉庫業のLED・空調更新の主力補助金。投資回収を1〜3年短縮できる。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい倉庫と相性が良く、長期固定電力単価を確保できる。",
  },
  {
    name: "物流効率化・モーダルシフト補助（国交省）",
    target: "WMS・自動倉庫・AGV・AMR導入",
    rate: "1/3〜1/2、上限数千万円",
    note: "倉庫DX導入で電力使用量削減効果が認められれば対象。",
  },
  {
    name: "EV・電動フォークリフト充電インフラ補助",
    target: "電動フォークリフト・AGV・AMRの充電器設置",
    rate: "1/2〜2/3、上限数百万円〜数千万円/拠点",
    note: "2025年度以降倉庫業向け枠が拡大。充電器・分電盤・受変電設備改修も対象。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "高圧／特別高圧の境界（2,000 kW）に近い場合、契約区分変更の費用対効果を試算したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "電動フォークリフト・AGV・AMR導入予定が契約電力に与える影響を見積もったか",
  "高出力LED照明への更新（水銀灯・高出力蛍光灯から）の優先順位を整理したか",
  "自家消費型太陽光の屋根面積適性（耐荷重・方位・遮蔽）を確認したか",
  "蓄電池導入の経済合理性（ピークカット効果＋BCP＋補助金）を試算したか",
  "デマンドコントローラー・自動制御システムの導入余地を評価したか",
  "出荷ピーク時間帯の負荷分散による契約電力削減シミュレーションを実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "多拠点運営の場合、拠点集約契約のボリュームディスカウントを交渉したか",
  "冷蔵倉庫併設の場合は冷蔵倉庫部分との契約区分を確認したか",
];

const faqItems = [
  { question: "物流倉庫の電気代水準はどれくらいですか？", answer: "一般物流倉庫の電気料金は売上高（保管料）の2.5〜5.0%が目安です。年間電気代は小規模（5,000 m²）で1,500〜4,500万円、中規模（15,000 m²）で7,000万〜2.0億円、大規模自動倉庫（40,000 m²）で3.8〜10億円規模になります。冷蔵倉庫の3〜5分の1の水準。" },
  { question: "常温倉庫と冷蔵倉庫の電気代はどれくらい違いますか？", answer: "常温倉庫は年間70〜110 kWh/m²、冷蔵倉庫は年間250〜600 kWh/m²で、冷蔵倉庫が3〜5倍の電気代水準になります。冷蔵倉庫の見直しは別記事「冷蔵倉庫の電気料金見直しポイント」を参照ください。常温倉庫は照明・搬送設備・空調の最適化が中心、冷蔵倉庫は冷凍機COP改善が中心と打ち手の優先順位が異なります。" },
  { question: "倉庫の固定プランと市場連動プランどちらが向きますか？", answer: "24時間稼働でベースロードが大きく、出荷ピーク時間帯（10〜18時）に使用量が集中する常温倉庫は、市場高騰のリスクが大きいため固定プランが向きやすいです。日勤のみ常温倉庫は使用量が小さく、選択肢として市場連動も検討余地があります。荷主への保管料転嫁が即時にできない構造上、価格変動リスク排除のメリットが大きくなります。" },
  { question: "電動フォークリフト・AGV導入で電気代はどれくらい増えますか？", answer: "電動フォークリフト1台で年間1,500〜3,000 kWh、AGV/AMR 1台で年間1,000〜2,500 kWhの電力消費。50台導入で年7.5〜15万kWh、電気代換算で年200〜400万円の上振れ。急速充電器を昼間に集中させると契約電力も急増するため、夜間シフトと固定プラン契約が必須です。" },
  { question: "倉庫向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（補助率1/3〜1/2、LED・空調・充電器更新が主）、需要家主導型PPA補助金（太陽光・蓄電池併設）、物流効率化補助金（WMS・自動倉庫・AGV）、EV・電動フォークリフト充電インフラ補助金の4本柱。LED化＋太陽光＋電動フォークリフト充電を組み合わせると採択率が高くなります。" },
  { question: "自家消費型太陽光は常温倉庫で投資回収できますか？", answer: "屋根面積5,000 m²以上、24時間稼働ベースロード大きい倉庫は業種別で上位の相性。1 MW級で年1,000〜1,500万円の削減、投資回収8〜12年（補助金後6〜9年）が目安です。電動フォークリフト充電と組み合わせると自家消費率が更に向上します。" },
  { question: "LED化による削減効果はどれくらいですか？", answer: "天井高8〜12mの倉庫で水銀灯400W→LED 200Wへ更新すると消費電力50%削減。中規模倉庫（15,000 m²、照明80基）で年間100〜200万kWh、電気代換算で年250〜500万円の削減。投資回収は2〜4年が標準、SII補助1/2活用で1〜2年に短縮可能です。" },
  { question: "多拠点運営の電気代削減はどう進めるべきですか？", answer: "全拠点の契約条件（契約電力・使用量・契約期間・燃料費調整額条件）を一覧化し、契約満了時期がバラバラの場合は段階的に見直しを進めます。一括見積（5〜10社）でボリュームディスカウントを交渉、年間使用量2,000万kWh以上で5〜10%の単価優遇が現実的です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "全日本トラック協会（業界統計・倉庫業動向）", url: "https://jta.or.jp/" },
  { name: "国土交通省（物流統計年報）", url: "https://www.mlit.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function WarehouseElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/warehouse-electricity-cost-review"
        datePublished="2026-04-10"
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
          <span className="text-slate-800">物流倉庫の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            物流倉庫（常温・一般倉庫）の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            常温倉庫・一般倉庫は、冷蔵倉庫と異なり庫内温度管理が不要な分、電気代の主役は『高出力LED照明／搬送・仕分け設備／空調／WMS情報システム／ドック設備』の5層です。24時間稼働の物流センターでは、LED化・電動フォークリフト充電タイミング設計・自家消費太陽光の組合せが契約見直しの起点になります。本ページでは常温倉庫特有の電力構造、業界平均水準、規模別事例、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します（冷蔵倉庫の見直しは別記事「冷蔵倉庫の電気料金見直しポイント」を参照）。
          </p>
          <AuthorBadge publishedAt="2026-04-10" updatedAt="2026-05-17" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>常温倉庫・一般倉庫の電力使用プロファイル（照明／搬送／空調／WMS）</li>
              <li>業界平均の電気代水準（売上高比2.5〜5.0%）と1平米単価</li>
              <li>冷蔵倉庫との電気代水準の違い（3〜5倍の差）</li>
              <li>燃料費調整額・再エネ賦課金・電動フォークリフト充電が倉庫業に与える影響</li>
              <li>規模別（5,000／15,000／40,000 m²）の電気代と削減事例3件（Before/After）</li>
              <li>LED化・デマンド管理・自家消費太陽光・蓄電池の費用対効果</li>
              <li>SII・需要家主導型PPA・物流効率化・電動フォークリフト充電補助金の組合せ活用</li>
              <li>常温倉庫向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              常温倉庫の電力使用特性 — 照明・搬送・空調・WMS・ドック設備の5層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫・一般倉庫の電力使用は『高出力LED照明（30〜45%）／搬送・仕分け設備（25〜35%）／空調（15〜25%）／WMS情報システム（5〜10%）／ドック設備（3〜8%）』の5層構造です。冷蔵倉庫と異なり冷凍機の連続負荷がない分、LED照明と搬送設備の比重が大きく、LED化と充電タイミング制御が省エネの主軸になります。
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
              、削減打ち手の全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業界平均の電気代水準 — 売上高比2.5〜5.0%、1平米70〜180 kWh/年
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫の電気代水準は事業形態（地場倉庫／3PL基幹倉庫／大手物流DC）と設備（自動倉庫の有無）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              ※ 出典: 全日本トラック協会・国土交通省物流統計年報・経産省省エネ事例集から整理。実値は地域・拠点規模・自動倉庫有無で1.5倍前後ぶれます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              常温倉庫の主要な電気代上昇要因 — 燃料費・賦課金・電動フォークリフト・倉庫DX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、{" "}
              <Link href="/capacity-contribution-cost-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">容量拠出金の事業影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 5,000m²小規模／15,000m²中規模／40,000m²自動倉庫
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷蔵倉庫の見直し</Link>
              、{" "}
              <Link href="/distribution-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ディストリビューションセンターの見直し</Link>
              、{" "}
              <Link href="/transportation-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">運輸業の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド管理のポイント — 出荷ピークと電動フォークリフト充電の同時最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫のデマンド管理は『出荷ピーク時間帯の負荷分散』と『電動フォークリフト・AGV充電タイミングの夜間シフト』が2大論点です。両者を同時最適化することで契約電力10〜25%削減が現実的に達成できます。
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
              常温倉庫は24時間稼働でベースロードが大きく、市場価格高騰局面での影響額が事業収支に直撃します。燃料費調整額の上限有無、市場連動プランの可否は経営判断レベルの論点です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由（24h稼働倉庫）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>使用量が大きく価格変動の影響額が事業リスク</li>
                  <li>夏冬のピーク期に使用量増と市場高値が重なる構造</li>
                  <li>保管料への即時転嫁が荷主交渉上困難</li>
                  <li>電動フォークリフト充電による契約電力増で固定単価の重要性が増す</li>
                  <li>24時間稼働で価格変動から逃れる手段がない</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">日勤倉庫の市場連動検討余地</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>日勤のみ常温倉庫は使用量が小さい</li>
                  <li>夜間非稼働で深夜市場安値の恩恵は限定的</li>
                  <li>夏冬の昼間市場高値リスクが残る</li>
                  <li>使用量・契約電力の規模次第で固定プラン優位</li>
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
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間使用量が大きい倉庫では、負担額が請求総額の15〜20%に達します。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模倉庫（年650万kWh）の負担額試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 2,268万円</li>
                  <li>2025年度（3.98円/kWh）：年 2,587万円（+319万円）</li>
                  <li>2026年度（4.18円/kWh）：年 2,717万円（+449万円）</li>
                  <li>3年間で年400万円超の負担増（年使用量横ばい前提）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">減免制度の対象要件</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>年間電力使用量1,000万kWh以上の事業所</li>
                  <li>製造業・冷蔵倉庫業など対象業種の指定あり</li>
                  <li>常温倉庫業は業種指定により減免可否が分かれる</li>
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
              常温倉庫特有の節電・省エネ施策 — LED・電動化・太陽光・蓄電池
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫の省エネは『LED照明への更新（最優先）』『電動フォークリフト充電制御』『自家消費太陽光・蓄電池』『運用最適化（WMS・人感センサ）』の4軸で組み立てます。各軸の年間削減効果と投資回収年数を提示します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">LED照明への更新（最優先）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>水銀灯400W→LED 200Wで電力▲50%</li>
                  <li>中規模倉庫（80基）で年100〜200万kWh削減</li>
                  <li>人感センサ追加で更に▲30〜50%</li>
                  <li>投資回収 2〜4年（SII補助1/2活用で1〜2年）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電動フォークリフト充電制御</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夜間充電シフトで契約kW▲20〜40%</li>
                  <li>充電器集中管理システムで運用効率化</li>
                  <li>急速充電器の段階制御で同時最大負荷抑制</li>
                  <li>EV・電動フォークリフト充電補助金活用</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（1〜4 MW）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>1 MWで年110〜130万kWh発電（年1,000〜1,500万円削減）</li>
                  <li>必要屋根面積 約6,000〜8,000 m²/MW</li>
                  <li>投資回収 8〜12年（補助金後 6〜9年）</li>
                  <li>電動フォークリフト充電と組合せ自家消費率向上</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蓄電池併設＋運用最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>ピークカットで契約kW▲5〜10%</li>
                  <li>WMS高度化で電力ピーク予測・自動制御</li>
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
              補助金活用（業種別） — SII・PPA・物流効率化・電動フォークリフト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              倉庫業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。複数補助金の組合せ申請（SII＋PPA＋物流効率化）で採択率が高くなる傾向。
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
              、{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・自家消費太陽光の補助金</Link>
              、{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              常温倉庫に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              シミュレーターで自社倉庫の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              常温倉庫は電動フォークリフト導入・燃料費調整額変動・市場価格高騰の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、LED化・固定プラン切替・太陽光導入の優先順位付けに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>電動フォークリフト・AGV導入後の契約電力上振れシナリオを比較する</li>
              <li>事例で示した18〜30%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-04-10"
            />
            <GlossaryLinks currentSlug="warehouse-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "32業種の電気料金見直しポイントをハブから探す。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷蔵倉庫の電気料金見直し", description: "冷凍機ベースロードと固定プランの相性。常温倉庫と打ち手が大きく異なる。" },
              { href: "/distribution-center-electricity-cost-review", title: "ディストリビューションセンターの見直し", description: "DCの仕分け設備と契約電力管理。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "倉庫併設の運輸業の電力構造。" },
              { href: "/supermarket-electricity-cost-review", title: "スーパーマーケットの電気料金見直し", description: "冷蔵・空調負荷が大きい商業施設の見直し。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "大使用量・24h稼働法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "ピーク削減とBCP強化の蓄電池活用。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積大の倉庫の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "昼間使用量が大きい倉庫業の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調・コンプレッサーで活用できる主力補助金。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・自家消費太陽光の補助金", description: "需要家主導型PPA補助金などの活用パターン。" },
              { href: "/multi-site-company-price-surge-risk", title: "多拠点企業の料金高騰リスク", description: "複数拠点の累積影響と管理の考え方。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "ベースロード大の倉庫業に直結するリスク。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の倉庫条件でリスクを確認する"
            description="倉庫の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。電動フォークリフト導入後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
