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
  "放送業の電気料金見直しポイント｜スタジオ・送信所・4K/8K対応の契約最適化";
const pageDescription =
  "放送業（テレビ・ラジオ・送信所）の電気料金見直しを解説。スタジオ照明・空調・機材、送信所24h連続稼働、番組制作期の電力ピーク、4K/8K放送による電力増加、補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "放送局 電気料金 見直し",
    "テレビ 局 電気代 削減",
    "送信所 電力契約",
    "スタジオ 照明 空調 電気料金",
    "4K 8K 放送 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/broadcasting-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/broadcasting-electricity-cost-review",
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
    label: "スタジオ照明・撮影機材",
    detail:
      "テレビスタジオでは大型LED照明（1スタジオあたり50〜200kW）・カメラ・音声・編集機材が稼働する。生放送・収録のピーク時間帯に同時最大負荷が発生する。LED化前の従来照明は500kW級だったが、LED化で60〜80%削減されている。",
  },
  {
    label: "送信所・中継所（24時間連続稼働）",
    detail:
      "テレビ・ラジオ送信所は放送波の連続発射のため24時間運転が原則。1送信所あたり100〜500kWの連続負荷で、全国規模放送局では数十〜100箇所以上の送信所を保有。停止できない基幹インフラとして電気代の中核を占める。",
  },
  {
    label: "本社放送センター（編集・マスター室）",
    detail:
      "編集ルーム・マスター室・サーバールーム・送信主機が24時間稼働する。マスター室・主調整室の機材は冗長化のため二重稼働しており、空調も含めて連続負荷が大きい。中堅局で500〜1,500kWの恒常負荷。",
  },
  {
    label: "番組制作・編集機材（4K/8K対応）",
    detail:
      "4K/8K放送対応により編集機材・サーバー・ストレージの電力消費が従来の1.5〜2.5倍に増加。高解像度映像のエンコード・デコード負荷で編集サーバー1台あたり3〜10kW、ストレージシステム全体で50〜200kWの新規負荷。",
  },
  {
    label: "本社オフィス・関連施設の照明空調",
    detail:
      "本社・支社のオフィス、報道部・取材部のデスク、社員食堂、来訪者対応エリアなどの照明・空調。年間消費電力の10〜15%を占める。テレワーク導入後は使用量が15〜25%減少傾向。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "総務省統計・日本民間放送連盟の統計によれば、放送業の電気料金は売上高の2〜5%（送信所保有の地上波放送局）、5〜8%（地方局・小規模局）に達する。本社放送センター・送信所網の運営コストの中で電気代は減価償却費に次ぐ第2のコスト要素となる。",
  },
  {
    label: "従業員1人あたりの年間使用量",
    detail:
      "放送局本社（編集部中心）で従業員1人あたり年間10,000〜20,000 kWh、送信所運営が中心の地方局では20,000〜35,000 kWh。一般的なオフィス業種（3,000〜4,500 kWh/人）の3〜5倍と業界別で高水準。",
  },
  {
    label: "事業規模別の年間使用量",
    detail:
      "地方ラジオ局（従業員30〜80名）で年間100〜300万 kWh、地方テレビ局（200〜500名）で年間1,000〜3,500万 kWh、全国規模放送局（1,500名超＋送信所網）で年間8,000〜20,000万 kWh。特別高圧契約が業界標準。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の連続稼働ベースへの影響",
    detail:
      "送信所と本社放送センターが24時間連続稼働で月間使用量が大きく、燃料費調整額1円/kWhの変動で中堅局（月100万kWh）で月100万円の差。年1,200万円規模のインパクト。化石燃料連動の燃料費調整額は2022年以降4〜5円/kWhレンジで推移し、放送業の電気代上振れの最大要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇トレンド。年間2,000万kWh使用の中堅局で年8,360万円の負担、5年で4.18億円超。減免制度の対象規模だが、放送業は対象業種に明示されないため申請に注意。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度導入の容量市場拠出金は kWh ベースで上乗せされ、放送業のような24h連続稼働業種に大きな影響。新電力経由でも回避できず、長期的な電気代上昇圧力として継続。",
  },
  {
    label: "4K/8K放送による電力増加",
    detail:
      "4K/8K放送対応により編集・送信機材の電力消費が増加。中堅局で年200〜500万kWhの新規負荷、契約電力50〜150kW上振れする事例も。8K送信は4K比でさらに1.5〜2倍の電力消費があり、地上波4K本格化に伴う設備投資が課題。",
  },
  {
    label: "災害対応BCP電源の維持コスト",
    detail:
      "放送局は災害時の情報インフラとして停止できないため、自家発電機・蓄電池・無瞬断UPS設備の維持コストが他業種より高い。これら設備の電力負荷も含めて契約電力を設計する必要がある。",
  },
];

const sizeBenchmarks = [
  {
    size: "地方ラジオ局（従業員30〜80名）",
    profile: "地方AM/FM放送局／高圧 200〜600kW／年間 100〜300万 kWh",
    annualCost: "年間電気代 3,000〜9,000 万円",
    note: "送信所2〜5箇所、本社スタジオ＋編集機材中心。新電力切替・固定3年契約・LED化・空調更新で年8〜13%削減事例。送信所の自家消費太陽光が相性良好。",
  },
  {
    size: "地方テレビ局（従業員200〜500名）",
    profile: "地方系列局（VHF/UHF）／高圧〜特別高圧 1,500〜3,500kW／年間 1,200〜3,000万 kWh",
    annualCost: "年間電気代 3.6〜9.0 億円",
    note: "送信所10〜30箇所、4K/8K対応投資中。固定5年契約＋送信所自家消費太陽光＋本社蓄電池＋編集サーバークラウド一部移行で年10〜15%削減事例。",
  },
  {
    size: "全国規模放送局（従業員1,500名以上＋送信所網）",
    profile: "全国系キー局＋全国送信所網／特別高圧 5,000〜15,000kW／年間 5,000〜15,000万 kWh",
    annualCost: "年間電気代 15〜45 億円",
    note: "1%の単価改善でも年1,500〜4,500万円のインパクト。長期固定（7〜10年）契約＋全送信所太陽光＋BCP蓄電池＋再エネ100%調達でESG対応も同時実現。",
  },
];

const caseStudies = [
  {
    title: "事例1：地方ラジオ局の年間12%削減（Before/After）",
    before: "東北地方のラジオ局A社（高圧 350kW、年間 180万 kWh、年間電気代 5,400万円）。市場連動プラン継続、スタジオ照明一部白熱灯、送信所3箇所の太陽光未導入。",
    after: "新電力切替（固定3年）／スタジオ全照明LED化（投資 400万円）／送信所3箇所に自家消費太陽光各30kW導入／空調インバータ化／力率改善コンデンサ更新。",
    result: "年間電気代 5,400万円 → 4,752万円（▲12%、▲648万円）／契約 kW 350→310／投資回収 1.8年（SII補助 1/2 活用）",
  },
  {
    title: "事例2：地方テレビ局の年間14%削減",
    before: "中部地方のテレビ局B社（特別高圧 2,500kW、年間 2,000万 kWh、年間電気代 6.0億円）。市場連動プランで2022〜2023年に月最大2,000万円の追加負担を経験。送信所15箇所、4K対応投資中。",
    after: "固定5年プラン切替／本社放送センター屋上に自家消費太陽光 1.0 MW＋蓄電池 1.5 MWh／送信所15箇所に自家消費太陽光各20〜50kW／編集サーバー一部クラウド移行／需要家主導型PPA補助金活用。",
    result: "年間電気代 6.0億円 → 5.16億円（▲14%、▲8,400万円）／契約 kW 2,500→2,200／投資回収 7年（補助金後 5年）",
  },
  {
    title: "事例3：全国規模放送局の年間3.5億円削減",
    before: "全国系キー局C社のグループ全体（本社＋全国送信所網）（特別高圧 12,000kW、年間 8,000万 kWh、年間電気代 24億円）。長期固定契約継続も8K放送対応で契約電力上振れ。",
    after: "電力契約の10年長期固定締結／本社放送センター大規模太陽光 4 MW＋蓄電池 5 MWh／全国送信所80箇所に太陽光各30〜100kW（合計5MW）／編集サーバーフルクラウド移行／DR契約締結／再エネ100%調達／需要家主導型PPA。",
    result: "年間電気代 24億円 → 20.5億円（▲15%、▲3.5億円）／契約 kW 12,000→10,500／投資回収 8年（補助金後 6年）／CO₂削減 約40,000 t/年",
  },
];

const demandManagement = [
  {
    label: "番組制作期のピーク管理",
    detail:
      "ドラマ収録期・特番制作期は通常時の1.5〜2倍の電力消費がある。複数スタジオの同時収録を避ける運用設計、編集サーバーの段階起動で同時最大負荷10〜15%削減。",
  },
  {
    label: "スタジオ照明のシーン別調光",
    detail:
      "LED照明の調光制御によりシーン別の必要照度に合わせて出力を変動。番組制作中の照明電力▲20〜30%削減事例。投資回収1〜2年。",
  },
  {
    label: "送信所太陽光と蓄電池併設",
    detail:
      "全国の送信所網は地方分散しており、各送信所の屋根・敷地に小規模太陽光（20〜100kW）を導入すると合計でMW級の電源確保が可能。BCP電源としての蓄電池併設で災害対応も強化。",
  },
  {
    label: "編集サーバーのクラウド移行",
    detail:
      "編集サーバー・ストレージをクラウドに移行することで自社データセンターの電力負荷を大幅削減。中堅放送局で年200〜500万kWhの電力削減、契約電力50〜150kW削減。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "スタジオLED照明・空調・編集機材・送信機更新",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "放送業の大規模設備更新の主力補助金。LED化・空調更新・編集機材更新で採択率高い。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "本社・送信所の自家消費型太陽光・蓄電池同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "全国送信所網への小規模太陽光分散導入で合計MW級になる放送業と相性良好。",
  },
  {
    name: "情報通信BCP電源補助金",
    target: "災害時の情報インフラ維持のための非常用発電機・蓄電池",
    rate: "1/2、上限数千万円",
    note: "放送業は情報インフラ事業者として優先採択。BCP電源強化と省エネ・電気代削減の同時実現。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "送信所網への再エネ集中導入、4K/8K設備更新の脱炭素対応",
    rate: "1/2、上限数億円",
    note: "全国送信所網の脱炭素一括対応で大型補助の対象になり得る。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "本社＋全送信所の使用量を集約した上で契約戦略を検討したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "スタジオ照明のLED化率と調光制御の導入余地を確認したか",
  "本社屋上＋全送信所への自家消費太陽光（合計MW級）導入の試算を実施したか",
  "編集サーバーのクラウド移行による電力削減を見積もったか",
  "4K/8K対応投資に伴う契約電力上振れを反映したか",
  "BCP電源（自家発電機・蓄電池）の維持コストと省エネ機能の両立を評価したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "再エネ賦課金減免制度の対象に該当するか確認したか",
  "SII省エネ補助金・需要家主導型PPA補助金・情報通信BCP補助金の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "放送業の電気代水準はどれくらいですか？", answer: "売上高比2〜5%（送信所保有の地上波放送局）、5〜8%（地方局・小規模局）が業界平均です。地方ラジオ局で年3,000〜9,000万円、地方テレビ局で年3.6〜9億円、全国規模放送局で年15〜45億円規模の電気代になります。" },
  { question: "送信所の電気代を削減する方法はありますか？", answer: "送信所への自家消費太陽光導入が最も有効です。各送信所20〜100kWの小規模分散導入で合計MW級の電源確保が可能、年間電力購入▲20〜35%削減できます。蓄電池併設でBCP電源強化も同時実現。需要家主導型PPA補助金1/2活用で投資回収7〜10年。" },
  { question: "4K/8K放送対応で電気代はどれくらい増えますか？", answer: "中堅地方テレビ局で4K対応により年200〜400万kWh増、8K本格化で更に1.5〜2倍、年300〜800万kWh増の見込みです。契約電力50〜200kW上振れ、年間電気代1,000〜4,000万円増となる事例も。クラウド編集移行と組み合わせて電力増を抑制する戦略が重要です。" },
  { question: "放送業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（LED・空調・編集機材更新）、需要家主導型PPA補助金（送信所太陽光分散導入）、情報通信BCP電源補助金（自家発電機・蓄電池）、脱炭素先行地域・GX補助の4本柱です。情報インフラ事業者として優先採択される傾向があります。" },
  { question: "番組制作期と通常期の契約電力はどう設定すべきですか？", answer: "ドラマ収録期・特番制作期は通常の1.5〜2倍の電力消費があり、ピーク期に合わせると年間平均で過剰契約となります。複数スタジオの同時収録回避運用、編集サーバーの段階起動、デマンドコントローラー導入でピーク管理し、契約電力を10〜15%下げる事例多数。" },
  { question: "放送業の固定プランと市場連動プランどちらが向きますか？", answer: "送信所24h連続稼働＋本社放送センター連続稼働でベースロードが大きく、固定プランが圧倒的に向きます。市場高騰のリスクが事業損益直撃する業種であり、2022〜2023年の高騰局面では市場連動継続局で月数千万円の追加負担が発生しました。" },
  { question: "BCP電源と省エネを両立する方法はありますか？", answer: "蓄電池併設の自家消費型太陽光がBCPと省エネの両立に最適です。平常時は太陽光自家消費＋ピークカットで電気代削減、災害時は蓄電池＋太陽光で本社放送センター・主要送信所の電源を最低6〜24時間維持できます。情報通信BCP電源補助金1/2活用で投資回収7〜10年。" },
  { question: "送信所網全体での電力契約最適化はどうすべきですか？", answer: "全国規模放送局では全送信所＋本社＋関連施設を集約して長期固定契約（5〜10年）を結ぶことでボリュームディスカウント5〜10%が現実的です。地方局では地域特化型新電力との交渉、自家消費太陽光分散導入との組合せで年10〜15%削減が可能です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "総務省 情報通信統計データベース", url: "https://www.soumu.go.jp/johotsusintokei/" },
  { name: "日本民間放送連盟", url: "https://j-ba.or.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
];

export default function BroadcastingElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/broadcasting-electricity-cost-review"
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
          <span className="text-slate-800">放送業の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            放送業の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            放送業（テレビ・ラジオ）は、本社放送センター＋全国送信所網が24時間連続稼働する典型的な情報インフラ業種です。4K/8K放送対応による電力増加、災害対応BCP電源、再エネ調達でのESG対応が同時進行する激変期にあり、電気料金最適化が事業継続性とESG対応の両面で経営課題となっています。本ページでは放送業特有の電力負荷特性、業界平均水準、規模別事例、4K/8K対応、補助金活用、契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-18" updatedAt="2026-05-18" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>放送業の電力使用プロファイル（スタジオ／送信所／編集機材／オフィス）</li>
              <li>業界平均の電気代水準（売上高比2〜8%）と1人あたり単価</li>
              <li>燃料費調整額・再エネ賦課金・容量拠出金が当業種に与える影響</li>
              <li>規模別（地方ラジオ／地方テレビ／全国規模）の電気代と削減事例3件（Before/After）</li>
              <li>4K/8K放送対応の電力増加と抑制戦略</li>
              <li>SII・需要家主導型PPA・情報通信BCP・GX補助の組合せ活用</li>
              <li>放送業向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              放送業の電力使用特性 — スタジオ・送信所・編集機材の4層構造
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業の電力使用は『スタジオ照明・撮影機材（バッチ稼働）／送信所（24h連続）／本社放送センター（連続）／編集機材（4K/8K対応）』の4層で構成されます。送信所と本社放送センターの連続稼働が電力消費の60〜75%を占めるため、これら基幹設備の電力プロファイルが契約見直しの起点となります。
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
              業界平均の電気代水準 — 売上高比2〜8%、1人あたり10,000〜35,000 kWh
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業の電気代水準は事業形態（地方ラジオ／地方テレビ／全国規模放送局）で大きく異なります。業界統計と公開データから整理した業界平均値を、自社水準との比較で活用してください。
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
              ※ 出典: 総務省情報通信統計・日本民間放送連盟・経産省工業統計から整理。実値は送信所数・4K/8K対応比率で1.5〜2.5倍ぶれます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              放送業の主要な電気代上昇要因 — 燃料費・賦課金・容量拠出金・4K/8K
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業の電気代上昇は、複数の制度的・構造的要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              規模別の削減事例3件 — 地方ラジオ／地方テレビ／全国規模放送局
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業の電気代削減は規模帯ごとに最適施策の組合せが異なります。実在事業者の公開事例・業界団体ヒアリングから整理した3つのパターンをBefore/Afterで提示します。
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
              <Link href="/telecom-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">通信施設の見直し</Link>
              、{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              送信所の24時間連続稼働 — 自家消費太陽光分散導入の戦略
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業特有のコスト要因として、全国規模の送信所網が24時間連続稼働する点があります。各送信所100〜500kWの連続負荷が継続するため、自家消費太陽光分散導入が最も有効な施策となります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">送信所別小規模太陽光（20〜100kW/箇所）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>各送信所の屋根・敷地に小規模太陽光導入</li>
                  <li>全国80箇所で合計MW級の電源確保が可能</li>
                  <li>24h連続負荷で自家消費率90%超</li>
                  <li>PPA補助金1/2活用で投資回収 7〜10年</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蓄電池併設でBCP強化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>災害時の送信継続を6〜24時間維持</li>
                  <li>非常用発電機の起動遅延をカバー</li>
                  <li>情報通信BCP電源補助金1/2活用</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">送信所運用最適化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>送信機の冗長化レベル見直し</li>
                  <li>低消費電力の最新送信機更新（SII補助）</li>
                  <li>空調温度設定最適化で年5〜10%削減</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">送信所網全体での電力契約集約</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>全国送信所＋本社を集約した長期固定契約</li>
                  <li>ボリュームディスカウント5〜10%</li>
                  <li>10年単位の単価安定化</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              4K/8K放送による電力増加 — 抑制戦略
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              4K/8K放送対応により編集機材・送信機の電力消費が増加します。中堅地方テレビ局で4K対応により年200〜400万kWh増、8K本格化で更に1.5〜2倍の増加が見込まれます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">4K対応の電力増要因</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>編集サーバー・ストレージ電力1.5〜2倍</li>
                  <li>送信機の電力1.3〜1.5倍</li>
                  <li>カメラ・モニター・収録機材の更新</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">電力増抑制策</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>編集サーバーのクラウド移行で自社負荷削減</li>
                  <li>最新省エネ機材選定（SII補助対象）</li>
                  <li>太陽光・蓄電池で自家消費比率向上</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">8K移行時の追加負荷想定</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>4K対比で更に1.5〜2倍の電力消費</li>
                  <li>編集サーバー・ストレージの大容量化</li>
                  <li>長期固定契約で単価変動リスク回避</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">クラウド移行のメリット</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>自社データセンター電力▲70〜90%</li>
                  <li>BCP対応・スケーラビリティ向上</li>
                  <li>DX補助金1/2〜2/3活用で投資回収2〜4年</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              データセンター電力の削減は{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              でも確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              放送業のデマンド管理 — 番組制作期と編集サーバーの最適化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業のデマンド管理は『番組制作期のピーク管理』『スタジオ照明調光制御』『送信所太陽光分散導入』『編集サーバークラウド移行』が4大論点です。これらを同時最適化することで契約電力10〜18%削減が現実的に達成できます。
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
              デマンド管理の削減効果試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              放送業の固定プランと市場連動プラン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業は送信所24h連続稼働＋本社放送センター連続稼働でベースロードが大きく、市場価格高騰局面での影響額が事業損益直撃します。情報インフラ事業者としても安定性が要求されるため、固定プランの選択が基本戦略です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向く理由</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>送信所24h連続稼働で価格変動の影響額が桁違い</li>
                  <li>放送停止が許されない情報インフラ事業</li>
                  <li>広告売上への即時転嫁が困難</li>
                  <li>4K/8K対応で固定単価の重要性が増す</li>
                  <li>長期固定で再エネ100%調達も同時実現可能（ESG対応）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合のリスク</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏冬の市場高値期に最も電力を使う特性がリスクを増幅</li>
                  <li>使用量が大きいため高騰時の追加コストが甚大</li>
                  <li>顧客（広告主）向け価格に電力コスト上昇を即時転嫁できない</li>
                  <li>電力市場の常時監視と柔軟な対応体制が必要</li>
                  <li>JEPX 80円/kWh級の高騰局面で年数千万〜数億円の追加負担</li>
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
              補助金活用（業種別） — SII・PPA・情報通信BCP・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業向けに活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を1〜3年短縮できます。情報インフラ事業者として優先採択される傾向があり、複数組合せ申請（SII＋PPA＋BCP）で採択率が高くなります。
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
              放送業に合った契約見直しチェックリスト（12項目）
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
              シミュレーターで自社放送局の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              放送業は送信所24h連続稼働・4K/8K対応・市場価格高騰の3重リスクに同時直面します。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏冬のピーク月を前提にした影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>送信所太陽光分散導入後の削減シナリオを比較する</li>
              <li>事例で示した12〜15%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="broadcasting-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/telecom-facility-electricity-cost-review", title: "通信施設の電気料金見直し", description: "通信基地局など24h連続稼働インフラの類似事例。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "編集サーバー・配信サーバーの電気代削減。" },
              { href: "/office-electricity-cost-review", title: "オフィスの電気料金見直し", description: "本社・支社オフィスの電力削減。" },
              { href: "/publishing-electricity-cost-review", title: "出版業の電気料金見直し", description: "情報インフラ業種としての類似事例。" },
              { href: "/cultural-facility-electricity-cost-review", title: "文化施設・ホールの電気料金見直し", description: "ステージ照明・音響機材を持つ業種の類似事例。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "予算管理と安定性を重視する法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "情報インフラ事業者が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "料金の動き方とリスクの差を比較。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理による基本料金削減効果。" },
              { href: "/battery-suited-corporations", title: "法人向け蓄電池導入の検討", description: "BCP強化と電気代削減を両立する蓄電池活用。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "蓄電池のBCP×ピークカット活用", description: "情報インフラ業のBCP対応で蓄電池を活かす考え方。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "送信所網への分散導入の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "送信所網を持つ放送業の太陽光適性。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "LED・空調・編集機材更新で活用できる主力補助金。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "送信所24h稼働の情報インフラ事業の市場価格リスク。" },
            ]}
          />

          <ContentCta
            heading="自社の放送局条件でリスクを確認する"
            description="本社放送センター・全国送信所網・スタジオの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。4K/8K対応後のシナリオ比較や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
