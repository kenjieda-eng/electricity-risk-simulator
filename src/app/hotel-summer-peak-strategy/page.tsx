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
  "ホテル・宿泊業の夏季ピーク対策｜法人の夏季電気代対策（通年空調・夏インバウンド／規模別・代表シナリオ）";
const pageDescription =
  "ホテル・宿泊業（シティ／ビジネス／リゾート／旅館）の夏季ピーク電気代対策を解説。客室空調の在室連動制御、夏季稼働率上昇とインバウンド需要、大浴場・厨房・ランドリーの負荷、規模別の投資パターン、代表シナリオ3件、デマンド管理・補助金・チェックリストまで実務に即して整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ホテル 夏季 電気代",
    "宿泊業 ピーク対策",
    "客室空調 在室連動",
    "旅館 大浴場 電気代",
    "ホテル デマンド管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/hotel-summer-peak-strategy",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hotel-summer-peak-strategy",
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
    label: "客室空調 — 稼働率連動の最大変動要素",
    detail:
      "ホテルの夏季電力で最も振れ幅が大きいのが客室空調です。『稼働＝在室＝空調稼働』が基本のため、夏季の客室稼働率上昇がそのまま空調負荷増に直結します。在室判別をせず全館一律で運転すると不在客室まで冷房が回りピークを押し上げ、在室連動制御の有無が同じ稼働率でも電気代を分けます。",
  },
  {
    label: "共用部空調 — ロビー・宴会場・レストランの大空間負荷",
    detail:
      "ロビー・宴会場・レストラン・会議室は天井が高く外気導入も多く、客室より単位面積あたりの冷房負荷が重くなります。宴会・婚礼が集中する週末やレストランの昼夜ピークに共用部空調が立ち上がり、客室ピークと重なると施設全体のデマンドが跳ね上がります。",
  },
  {
    label: "厨房・ランドリー — 内部発熱と通年高負荷",
    detail:
      "厨房はコンロ・オーブン・冷蔵冷凍機・食洗機が集中し、夏季は内部発熱が厨房空調の冷房負荷を二重に押し上げます。ランドリー（洗濯・乾燥・プレス）は乾燥機・ボイラーが電力・熱を多く消費し、館内洗濯を行う旅館・リゾートでは無視できない固定負荷です。",
  },
  {
    label: "大浴場・プール — 給湯・加温・循環の連続負荷",
    detail:
      "大浴場・温浴施設・屋内外プールは給湯・加温・ろ過循環ポンプが連続稼働します。夏季は冷房需要と給湯・循環負荷が重なり、特に旅館・リゾートでは大浴場が施設全体の電力構成で大きな比率を占めます。ヒートポンプ給湯への転換余地が大きい領域です。",
  },
  {
    label: "夏季ピーク時間帯 — 業態で異なる山",
    detail:
      "シティ／ビジネスは夕方チェックイン以降の在室集中（17〜23時）、リゾート／旅館は入浴・夕食・空調が重なる時間帯（16〜22時）に山ができ、レストラン主体施設は昼ピークも加わります。業態ごとの時間帯把握がデマンド対策の起点です。",
  },
];

const industryBenchmark = [
  {
    label: "シティホテルの夏季電気代水準（対通年比）",
    detail:
      "宴会・レストラン・大規模共用部を持つシティホテルは夏季に対通年+15〜25%が目安。婚礼・宴会の稼働が重なる週末にデマンドが集中しやすく、共用部空調比率が高いほど夏季の上振れが大きくなります。数値は公開情報の目安です。",
  },
  {
    label: "ビジネス／リゾート／旅館の夏季水準",
    detail:
      "ビジネスホテルは客室空調主体で対通年+10〜18%、リゾートはプール・宴会・空調が重なり+18〜28%、旅館は大浴場・厨房・空調の合算で+15〜25%が目安レンジです。大浴場・プールを持つ業態ほど夏季比率が上がります。",
  },
  {
    label: "用途別の夏季電力構成比（目安）",
    detail:
      "夏季ホテルの電力構成は空調(客室＋共用部)40〜55%、給湯・大浴場15〜30%、厨房10〜20%、照明・動力・ランドリー10〜20%が目安。業態と施設構成で配分は変わり、リゾート・旅館では給湯・大浴場比率が相対的に高くなります。",
  },
];

const costFactors = [
  {
    label: "猛暑トレンドと冷房負荷の構造的増加",
    detail:
      "夏季平均気温の上昇と猛暑日の増加が続き、客室・共用部の冷房稼働時間が長期化しています。同じ稼働率でも外気温が高いほど冷房負荷とピークデマンドが押し上げられ、夏季電気代がトレンド的に増える構造です。",
  },
  {
    label: "インバウンド回復と夏季稼働率の上昇",
    detail:
      "訪日需要の回復で夏季の客室稼働率が高水準で推移する施設が増えています。稼働率が上がると在室客室数＝空調稼働客室数が増え客室空調負荷が直接増加し、繁閑が大きいほど契約電力（デマンド）とのミスマッチも起きやすくなります。",
  },
  {
    label: "電化シフト（給湯・厨房・ランドリー）",
    detail:
      "脱炭素・脱ガス／脱重油の流れで、給湯・厨房・ランドリーの熱源を電気ヒートポンプへ転換する施設が増えています。省エネ・CN対応に資する一方、電力使用量と夏季ピークデマンドの上振れ要因にもなり、契約電力の見直しと一体で検討します。",
  },
  {
    label: "燃料費調整額・市場価格の変動",
    detail:
      "燃料価格やJEPXスポット価格の変動は、燃料費調整額や市場連動メニューを通じて電気代に波及します。将来の単価は想定・目安レンジでしか語れないため、夏季ピーク時に市場高騰が重なるシナリオの感度を持っておくことが重要です。",
  },
  {
    label: "再エネ賦課金・容量拠出金などの公的賦課",
    detail:
      "再エネ賦課金は2026年度4.18円/kWhで、使用電力量(kWh)に単価を掛けて課金されます。容量拠出金など制度コストも料金に織り込まれます。個別交渉の余地が小さい固定的コストで、まず使用量削減で母数を抑える発想が有効です。",
  },
];

const sizeBenchmarks = [
  {
    size: "中小ビジネスホテル（年間電気代1,000万〜5,000万円）",
    profile: "客室中心・宴会／大浴場が小規模または無し",
    annualCost: "投資 300万〜2,000万円で年100万〜800万円削減(目安)",
    note: "LED化・客室在室連動制御（カードキー連動／人感）・高効率空調更新を優先。投資回収2〜4年が目安。",
  },
  {
    size: "中規模シティ／旅館（年間電気代5,000万〜2億円）",
    profile: "宴会・レストラン・大浴場を備える複合施設",
    annualCost: "投資 2,000万〜1.5億円で年800万〜4,000万円削減(目安)",
    note: "高効率空調＋BEMS＋ヒートポンプ給湯＋契約電力見直しを3年計画で組合せ。投資回収3〜5年が目安。",
  },
  {
    size: "大型リゾート（年間電気代2〜15億円）",
    profile: "大浴場・複数プール・宴会場・館内ランドリーを保有",
    annualCost: "投資 1.5〜10億円で年5,000万〜4億円削減(目安)",
    note: "高効率空調フル＋自家消費太陽光・蓄電池・DR参加＋ヒートポンプ給湯統合が標準。投資回収4〜6年が目安。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1：中小ビジネスホテル（年間約14%削減・目安）",
    before: "都市部・客室120室のビジネスホテル（年間電気代 約3,500万円、契約電力 約350kW）。客室空調は全館一律タイマー運転で不在客室も冷房継続、照明は一部蛍光灯、夏季の稼働率上昇で夕方〜夜のデマンドが上振れ。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    after: "①客室空調のカードキー連動／人感センサーによる在室連動制御／②全館LED化／③高効率パッケージ空調への計画更新／④契約電力の実績見直し／⑤フロントでのデマンド監視運用。",
    result: "Result: 年間電気代 約3,500万円 → 約3,010万円（▲約14%、▲490万円・目安）／契約電力 350→320kW／投資 約1,500万円・補助金後 投資回収 2〜3年前後（目安）。5年累計では ▲490万円×5年＝▲2,450万円（目安）。いずれも代表シナリオの目安であり、本記載は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    title: "代表シナリオ2：中規模シティホテル（年間約16%削減・目安）",
    before: "地方中核都市・客室250室＋宴会場・レストラン・小規模大浴場のシティホテル（年間電気代 約1.2億円、契約電力 約1,100kW）。共用部空調が週末宴会で立ち上がり客室ピークと重複、給湯は重油ボイラー、夏季デマンドが年間最大値を更新。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    after: "①BEMSによる共用部・客室空調の統合最適化／②客室在室連動制御／③ヒートポンプ給湯への部分転換／④宴会・レストラン稼働に合わせた空調スケジュール最適化／⑤契約電力見直し＋デマンド警報運用。",
    result: "Result: 年間電気代 約1.2億円 → 約1.008億円（▲約16%、▲1,920万円・目安）／契約電力 1,100→980kW／投資 約8,000万円・補助金後 投資回収 3〜4年前後（目安）／CO₂削減 約400t/年（目安）。5年累計では ▲1,920万円×5年＝▲9,600万円（目安）。数値はいずれも代表シナリオの目安です。",
  },
  {
    title: "代表シナリオ3：大型リゾートホテル（年間約15%削減・目安）",
    before: "観光地・客室400室＋大浴場・屋内外プール・複数宴会場・館内ランドリーの大型リゾート（年間電気代 約4.5億円、契約電力 約3,200kW）。給湯循環が連続稼働、夏季はプール・空調・宴会が重なり日中〜夕方のデマンドが急増。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    after: "①高効率空調フル更新＋BEMS統合制御／②客室在室連動制御＋共用部スケジュール最適化／③大浴場・プールのヒートポンプ給湯＋高効率循環ポンプ・断熱強化／④自家消費太陽光1MW＋蓄電池＋DR参加／⑤ランドリー設備更新・夜間運転シフト。",
    result: "Result: 年間電気代 約4.5億円 → 約3.825億円（▲約15%、▲6,750万円・目安）／契約電力 3,200→2,850kW／DR収入 年300万円前後（目安）／投資 約4.5億円・補助金後 投資回収 4〜6年前後（目安）／CO₂削減 約1,800t/年（目安）。5年累計では ▲6,750万円×5年＝▲3.375億円（目安）。いずれも代表シナリオの目安であり、自社条件での試算が前提です。",
  },
];

const demandManagement = [
  {
    label: "客室空調の在室連動制御",
    detail:
      "カードキー連動・人感センサー・PMS連携で不在・空室時に空調をセットバック／停止。夏季の不在客室冷房を抑え、客室空調電力を目安で15〜30%削減。投資が小さく効果が早期に出やすい施策です。",
  },
  {
    label: "BEMSによる共用部・全館統合制御",
    detail:
      "BEMSで客室・共用部・厨房・大浴場の負荷を見える化し、宴会・レストラン稼働に合わせて空調を時間帯最適化。ピーク時間帯の同時立ち上げを抑え、デマンドのピークカットに直結します。",
  },
  {
    label: "ヒートポンプ給湯・循環の高効率化",
    detail:
      "大浴場・客室給湯・プールの熱源をヒートポンプ給湯へ転換し、深夜蓄熱で日中ピークを回避。循環ポンプのインバータ化・配管断熱と組合せて給湯系電力を目安で10〜25%削減します。",
  },
  {
    label: "デマンド監視と稼働連動の運用ルール",
    detail:
      "デマンド監視装置で目標デマンドを設定し、超過予兆時に共用部空調・ランドリー等を一時抑制。稼働率（予約状況）に連動した空調エリア開放ルールで、繁閑差の大きいホテルでも契約電力の上振れを抑えられます。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII／業務用建築物）",
    target: "高効率空調・ヒートポンプ給湯・BEMS・LED",
    rate: "中小1/2、大企業1/3（公募回で変動・目安）",
    note: "ホテルの夏季ピーク対策で最も活用しやすい主力補助金。複数施策の組合せで採択率が上がる傾向。",
  },
  {
    name: "需要家主導型 PPA／蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内（公募回で変動・目安）",
    note: "屋上・駐車場・敷地が広いリゾート向き。夏季ピーク削減と再エネ調達を両立。",
  },
  {
    name: "脱炭素・GX関連補助（環境省・経産省）",
    target: "ヒートポンプ・高効率設備・自家消費再エネ",
    rate: "1/2前後（公募回で変動・目安）",
    note: "CN対応の大型投資向け。給湯電化・空調更新との連動に有効。",
  },
  {
    name: "中小企業向け省エネ設備等支援補助金",
    target: "中小ホテル・旅館の設備更新",
    rate: "2/3前後（公募回で変動・目安）",
    note: "中小・地方旅館向け。空調・給湯・LED更新で採択率が高い傾向。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰／不足になっていないか",
  "客室稼働率の繁閑（夏季ピーク月）と契約電力のミスマッチを把握したか",
  "客室空調の在室連動制御（カードキー連動／人感／PMS連携）を導入済みか",
  "共用部（ロビー・宴会・レストラン）空調の時間帯スケジュールを最適化したか",
  "大浴場・プールの給湯・循環をヒートポンプ・インバータ化で高効率化したか",
  "厨房・ランドリーの内部発熱対策と運転時間帯の見直しを行ったか",
  "BEMS・デマンド監視装置で全館の負荷を見える化しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "固定プランと市場連動プランの年間コストを夏季ピーク前提で比較したか",
  "省エネ補助金・PPA補助金の対象設備とスケジュールを確認したか",
];

const faqItems = [
  { question: "ホテルの夏季電気代は通年比でどれくらい上がりますか？", answer: "業態で異なり、ビジネスホテルで対通年+10〜18%、シティで+15〜25%、リゾートで+18〜28%、旅館で+15〜25%が目安レンジです。大浴場・プール・宴会など共用部負荷が大きい業態ほど夏季比率が高くなります。数値は公開情報の目安です。" },
  { question: "客室空調のコストを下げる最初の一手は何ですか？", answer: "客室空調の在室連動制御です。カードキー連動・人感センサー・PMS連携で不在・空室の冷房をセットバック／停止し、客室空調電力を目安で15〜30%削減できます。投資が比較的小さく効果が早期に出やすい施策です。" },
  { question: "大浴場・プールの給湯負荷はどう対策しますか？", answer: "ヒートポンプ給湯への転換、循環ポンプのインバータ化、配管・浴槽断熱の強化、深夜蓄熱運転による日中ピーク回避が基本です。給湯系電力を目安で10〜25%削減でき、給湯比率が高い旅館・リゾートほど効果が大きくなります。" },
  { question: "厨房・ランドリーの夏季負荷を抑えるには？", answer: "厨房は局所排気・厨房空調の高効率化と内部発熱対策、ランドリーは高効率乾燥機・夜間シフト・廃熱回収が有効です。いずれも内部発熱が冷房負荷を二重に押し上げるため、空調負荷とセットで考えると削減効果が高まります。" },
  { question: "稼働率が大きく変動するホテルに向くプランは固定ですか市場連動ですか？", answer: "繁閑差が大きいホテルでは、夏季ピーク時の市場高騰リスクをどこまで許容できるかで判断します。価格変動を避けたい場合は固定プラン、相場が落ち着いた局面の最適化を狙う場合は市場連動が候補です。将来の単価は想定・目安レンジでしか語れず感度分析が前提で、本記載は特定の電力会社・契約形態を推奨するものではありません。" },
  { question: "自家消費型太陽光はホテルで投資回収できますか？", answer: "屋上・敷地が広く日中の空調・プール負荷が大きいリゾートは相性が良い傾向で、日中の自家消費でピーク電力量を削減でき補助金で投資回収が短縮します。屋根面積が限られる都市型ビジネスホテルでは効果が限定的になりやすく、自社条件での試算が前提です。" },
  { question: "DR（デマンドレスポンス）はホテルで参加できますか？", answer: "共用部空調・ランドリー・蓄電池・自家発電の調整余地があるリゾート・大型シティホテルで適性があります。客室快適性を損なわない範囲で共用部負荷を一時抑制でき、目安で年数百万円規模のDR収入を得る事例もあります。" },
  { question: "ホテル向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SII省エネ補助金（高効率空調・ヒートポンプ給湯・BEMS・LED）、需要家主導型PPA補助金（屋上太陽光・蓄電池）、脱炭素・GX関連補助、中小企業向け省エネ補助の4本柱です。複数施策の組合せ申請で採択率が上がる傾向です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "観光庁（宿泊旅行統計・宿泊業の動向）", url: "https://www.mlit.go.jp/kankocho/" },
  { name: "気象庁（気温・猛暑データ）", url: "https://www.jma.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/unit" },
];

export default function HotelSummerPeakStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hotel-summer-peak-strategy"
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
          <span className="text-slate-800">ホテル・宿泊業の夏季ピーク対策</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ホテル・宿泊業の夏季ピーク対策
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ホテル・宿泊業の夏季電気代は、客室空調が稼働率に連動して増える点に最大の特徴があります。シティ／ビジネス／リゾート／旅館で電力構成が異なり、共用部空調・厨房・ランドリー・大浴場・プールの負荷が夏季の稼働ピークに重なります。本ページでは客室在室連動制御、夏季稼働率とインバウンド需要、規模別の投資パターン、代表シナリオ、デマンド管理・契約調達・補助金・チェックリストまでを実務に直結する観点で整理します。本記載は特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-12" updatedAt="2026-06-12" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ホテルの夏季電力構造（客室空調・共用部・厨房・大浴場）</li>
              <li>業態別（シティ／ビジネス／リゾート／旅館）の夏季水準</li>
              <li>上昇要因（猛暑・インバウンド稼働率・電化）</li>
              <li>規模別の投資パターンと代表シナリオ3件</li>
              <li>客室在室連動制御・BEMS・ヒートポンプ給湯のデマンド管理</li>
              <li>稼働変動を踏まえた契約・調達の考え方</li>
              <li>宿泊業向け補助金とチェックリスト10項目</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ホテルの夏季電力構造 — 客室空調・共用部・厨房・大浴場
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルの夏季電気代は『客室空調（稼働率連動）／共用部空調（大空間負荷）／厨房・ランドリー（内部発熱）／大浴場・プール（給湯循環）／業態別ピーク時間帯』の5論点で構造化できます。客室空調が稼働率に比例して動く点が、他業種と最も異なるホテル特有の論点です。なお本記載は特定の電力会社・契約形態を推奨するものではありません。
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
              で確認できます。ホテルの料金見直し一般は{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ホテルの電気料金見直し
              </Link>
              を参照してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業態別の夏季電気代水準 — シティ／ビジネス／リゾート／旅館
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルの夏季電気代水準は業態と施設構成で大きく異なります。業界統計と公開データから整理した目安値を自社水準との比較に活用してください。
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
              ※ 単価・統計・削減率は公開情報の目安です。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。再エネ賦課金は2026年度4.18円/kWh。実値は業態・施設構成・地域で1.5〜2倍ぶれます。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季電気代の上昇要因 — 猛暑・インバウンド稼働率・電化
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルの夏季電気代上昇は、猛暑トレンド、インバウンド稼働率上昇、給湯・厨房・ランドリーの電化、燃料費調整額・市場価格の変動、再エネ賦課金・容量拠出金などの公的賦課という構造的要因が並列します。
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
              夏季ピーク前提のプラン選択は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定の比較</Link>
              、夏のピークシフトは{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              で確認できます。将来のJEPX・燃料費調整額は想定・目安レンジでしか語れないため、感度分析の前提として扱ってください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の投資パターン — 中小ビジネス／中規模シティ・旅館／大型リゾート
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク対策投資は施設規模で異なります。中小はLED・客室在室連動制御を即時実施、中規模は高効率空調＋BEMS＋ヒートポンプ給湯、大型リゾートは自家消費太陽光・蓄電池・DRを総合活用します。本記載は特定の電力会社・契約形態を推奨するものではありません。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の代表シナリオ3件 — ビジネス／シティ／リゾート
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公開事例・業界団体ヒアリングから整理した3つの代表シナリオをBefore/Afterで提示します。業態特性に応じた施策の組合せと削減レンジ（目安）を確認できます。数値はいずれも目安で、本記載は特定の電力会社・契約形態を推奨するものではありません。
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
              市場連動への切替を実際に行ったホテルの動きは{" "}
              <Link href="/case-study-hotel-market-linked-switch" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ホテルの市場連動切替事例
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド管理 — 客室在室連動空調・BEMS・ヒートポンプ給湯
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルのデマンド管理は『客室空調の在室連動制御』『BEMSによる全館統合制御』『ヒートポンプ給湯・循環の高効率化』『デマンド監視と稼働連動の運用ルール』の4論点を組合せて最適化します。客室快適性を損なわずにピークを抑えることが要点です。
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
              デマンド管理の基礎は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール入門</Link>
              、削減効果は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              、契約電力は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業態別の最適戦略 — シティ・ビジネス・リゾート・旅館
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業態別の最適戦略は大きく4パターンに分類できます。自社の施設構成と稼働特性に応じた組合せ設計が経営判断の基礎です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">シティホテルの最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>共用部・宴会空調のBEMS時間帯最適化</li>
                  <li>客室在室連動制御＋共用部スケジュール連携</li>
                  <li>婚礼・宴会ピークに合わせたデマンド警報運用</li>
                  <li>業界平均 ▲15〜22%削減（目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ビジネスホテルの最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>客室空調の在室連動制御を最優先</li>
                  <li>全館LED化＋高効率パッケージ空調更新</li>
                  <li>稼働率連動のフロア開放・契約電力見直し</li>
                  <li>業界平均 ▲10〜18%削減（目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">リゾートホテルの最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大浴場・プールのヒートポンプ給湯・循環高効率化</li>
                  <li>自家消費太陽光＋蓄電池＋DR参加</li>
                  <li>プール・宴会・空調の同時ピーク回避制御</li>
                  <li>業界平均 ▲15〜25%削減（目安）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">旅館の最適戦略</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>大浴場給湯のヒートポンプ・断熱強化</li>
                  <li>厨房・館内ランドリーの運転時間帯最適化</li>
                  <li>客室空調の在室連動＋共用部スケジュール</li>
                  <li>業界平均 ▲12〜22%削減（目安）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オフィスビルのピーク対策との比較は{" "}
              <Link href="/office-building-peak-cut" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルのピークカット</Link>
              、夏のピークシフトの考え方は{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約・調達の考え方 — 稼働変動とプラン選択
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルは稼働率の繁閑差が大きく、夏季ピークと閑散期で電力プロファイルが変わります。契約電力の過不足、固定／市場連動の選択、燃料費調整額の条件を夏季ピーク前提で総合評価することが重要です。将来の単価は想定・目安レンジでしか語れないため、複数シナリオの感度分析を前提とします。本記載は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">プラン選択の判断軸</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>価格変動の許容度（夏季高騰リスク）</li>
                  <li>稼働率の繁閑差と契約電力の整合</li>
                  <li>燃料費調整額の上限有無・市場価格調整額の条件</li>
                  <li>固定／市場連動のハイブリッド可否</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">調達実務の要点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>新電力複数社からの相見積で条件比較</li>
                  <li>夏季ピーク前提の年間コスト試算</li>
                  <li>契約電力見直しによる基本料金の最適化</li>
                  <li>再エネ調達・CN対応との両立</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン比較の考え方は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定の比較</Link>
              、固定が向く法人像は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（ホテル夏季対策） — SII・PPA・GX補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルの夏季ピーク対策に活用しやすい補助金は4本柱。設備投資のタイミングを補助金スケジュールと合わせると投資回収を短縮できます。複数補助金の組合せ申請（SII＋PPA＋GX）で採択率が高くなる傾向です。本記載は特定の電力会社・契約形態を推奨するものではありません。
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
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金の活用</Link>
              、自家消費太陽光の費用対効果は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ホテル夏季ピーク対策チェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピーク対策の立案前に、このチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。本記載は特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークカット施策の全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターでホテルの夏季ピーク対策を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ホテルの夏季電気代は業態・施設構成・稼働率で大きく異なります。シミュレーターで自社条件における夏季上振れ幅と、客室在室連動制御・BEMS・ヒートポンプ給湯・自家消費太陽光・DR参加のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスクを確認する</li>
              <li>業態別の削減ポテンシャルを試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>高効率設備投資の総合投資回収シナリオを比較する</li>
              <li>代表シナリオで示した▲14〜16%の削減レンジ（目安）の自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-12"
            />
            <GlossaryLinks currentSlug="hotel-summer-peak-strategy" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/hot-spring-facility-electricity-cost-review", title: "温浴施設の電気料金リスクと見直し", description: "給湯・循環・空調の高負荷を踏まえた温浴施設の見直しの考え方。" },
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別戦略のハブ。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し", description: "宿泊業の電力プロファイルと見直し一般。" },
              { href: "/case-study-hotel-market-linked-switch", title: "ホテルの市場連動切替事例", description: "市場連動への切替の実例と判断。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DRの経済性と夏のピークシフト。" },
              { href: "/office-building-peak-cut", title: "オフィスビルのピークカット", description: "BEMS・テナント連動でピーク削減。" },
              { href: "/demand-control-guide", title: "デマンドコントロール入門", description: "デマンド管理の基礎と進め方。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド管理の削減効果試算。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）とは", description: "契約電力の決まり方と最適化。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "高効率空調・給湯更新の主力補助金。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上・敷地太陽光の投資回収。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定の比較", description: "稼働変動を踏まえたプラン選択。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "価格変動を避けたい法人の選択。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種・規模別に夏季上振れを試算。" },
            ]}
          />

          <ContentCta
            heading="自社のホテル夏季ピーク対策をシミュレーターで確認する"
            description="業態・施設構成・稼働率をもとに、夏季電気代の上振れ幅と客室在室連動制御・BEMS・ヒートポンプ給湯・自家消費太陽光・DR参加のメリットを試算できます。フェーズドアプローチの計画策定にもご活用ください。本ページは特定の電力会社・契約形態を推奨するものではありません。"
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
