import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "江東区の法人電気料金完全ガイド｜湾岸データセンター集積・豊洲再開発・有明ビッグサイト";
const pageDescription =
  "江東区の法人電気料金を区固有の視点で解説。首都圏データセンター集積の中核・豊洲タワマンとオフィス・有明ビッグサイト・辰巳新木場の湾岸物流・清澄白河の中小製造まで、AI需要時代の特別高圧契約戦略、契約見直し・補助金活用を実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "江東区 法人電気料金",
    "豊洲 オフィス 電気代",
    "湾岸 データセンター AI 電力",
    "有明 ビッグサイト イベント 電力",
    "辰巳 新木場 物流 倉庫",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/koto-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/koto-ku-business-electricity-cost",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const electricSituation = [
  {
    label: "江東区の事業者集積と電力需要構造",
    detail:
      "江東区は東京電力エナジーパートナーの供給エリアで、首都圏データセンター集積の中核区。区内年間電力需要は推計40〜50億kWh規模と23区内でも最大級。データセンター（東陽町・木場・有明）、湾岸物流（辰巳・新木場）、豊洲・有明の大型商業施設、清澄白河・亀戸の中小製造が並列する複合構造。",
  },
  {
    label: "首都圏データセンター集積の中核",
    detail:
      "江東区は東京湾岸DC地帯（東陽町・木場・有明・新木場）の中心で、年間使用量5,000万kWh超の特別高圧DC契約が複数立地。AI需要拡大により2024年以降は新規DC建設・既存DC増床が急加速し、AIサーバ高密度化（1ラック10〜30kW）で電力需要が一段増加。系統制約も顕在化。",
  },
  {
    label: "豊洲再開発と大型商業施設の電力需要",
    detail:
      "豊洲はタワーマンション・オフィス・商業（豊洲ららぽーと）・市場が混在する大規模再開発エリア。豊洲市場（2018年開場）は冷凍冷蔵設備の電力負荷が大きく特別高圧契約。オフィスエリアは大手企業の本社・基幹機能が集積し、特別高圧ビルが複数。",
  },
  {
    label: "有明ビッグサイト・有明アリーナの大型イベント電力",
    detail:
      "有明地区は東京ビッグサイト（国際展示場）、有明アリーナ、有明コロシアム、有明ガーデンなどMICE・スポーツ・商業施設が集積。コミックマーケットなど大型イベント開催時のピーク電力負荷が極端に大きく、需給管理が独特。",
  },
  {
    label: "辰巳・新木場・東雲の湾岸物流",
    detail:
      "辰巳・新木場・東雲・夢の島は東京港に面した物流倉庫・3PL拠点。冷凍冷蔵倉庫、e-commerce対応物流DC、自動車輸入関連事業者が集積。高圧500〜2,000kW級の物流DC契約が中心で、屋根面積の広さを活かした自家消費太陽光導入余地が大きい。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "旧一般電気事業者",
    detail:
      "江東区内シェア最大。高圧は『業務用季節別時間帯別電力』『業務用高圧電力』、特別高圧は個別契約。豊洲・有明の大型施設、東陽町・木場のDCでは標準メニューよりも個別交渉契約が主流。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "江東区内のオフィス・物流DC・商業施設で採用実績多数。固定単価3〜5年プランで東電EP標準比2〜4円/kWh安い水準も。DC専門の特別高圧契約も提案実績あり。",
  },
  {
    name: "ジェネックス・新出光・サミットエナジー",
    role: "DC・大口向け新電力",
    detail:
      "データセンター・大口需要家向けに特化した新電力。特別高圧4,500kW級のDC契約で競争入札による単価優遇実績あり。RE100対応の再エネメニューも展開。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系は熱併設の豊洲タワマン・オフィスで強み（電気＋ガス複合契約）。中小オフィス・商業施設で実績あり。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化）",
    role: "再エネ特化型新電力",
    detail:
      "RE100宣言企業のDC・本社オフィスで採用実績あり。料金水準はやや高めだがSBT・TCFD対応の観点で選択肢。需要家主導型オフサイトPPAとの組合せも多い。",
  },
  {
    name: "新規受付状況（2025年10月時点）",
    role: "市場動向",
    detail:
      "DC向けは2022〜2023年の市場高騰で受付停止社多数。2024年以降は段階的に再開し、現在は15社前後が高圧で新規受付中。DC新設案件は系統制約により早期予約が必要。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』は電力量料金18〜22円/kWh+燃料費調整額（2024〜2025年+3.0〜+4.5円/kWh）+再エネ賦課金（2025年度3.98円/kWh）で、実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準（豊洲・有明・DC）",
    detail:
      "特別高圧2,000kW超の標準メニューは電力量料金17〜20円/kWh＋調整項目。豊洲・有明の大型施設は競争入札により標準比1〜2円/kWh安い水準を獲得。DCでは負荷率の高さからさらに優遇される事例多数。",
  },
  {
    label: "データセンター向け特別契約",
    detail:
      "DC事業者向けには需要パターン（高負荷率・24時間運用・電源信頼性）に応じた特別契約が一般化。標準メニューより1〜3円/kWh安い単価交渉が可能なケース多数。新電力経由ではさらに優遇可能性あり。",
  },
  {
    label: "湾岸物流・冷凍冷蔵倉庫の契約パターン",
    detail:
      "辰巳・新木場の物流DC・冷凍冷蔵倉庫は24時間稼働で負荷率が高く、新電力との競争入札で単価優遇を獲得しやすい。屋根太陽光の導入と組合せで実質単価▲15〜25%が可能。",
  },
];

const industryImpact = [
  {
    title: "業種1: 東陽町の中規模データセンター（特別高圧 5,200kW、年間 4,400万kWh）",
    before:
      "Before: 東陽町地区の中規模データセンターA社（サーバ5,500ラック、AIサーバ一部導入）。冷却電力が全体の40%、UPS・PDU等の付帯設備20%。年間電気代 13.2億円。市場連動プラン継続で2023年1月には月最大1.7億円の請求。PUE 1.62と業界平均より高め。",
    after:
      "After: DC専門新電力との競争入札で特別高圧固定5年契約に切替（標準比▲2.2円/kWh）／冷却を外気冷房（フリークーリング）併用に／サーバ更新で電力密度向上／需要家主導型PPAでオフサイト太陽光8MW契約（茨城県）／PUE 1.62→1.32に改善。",
    result:
      "Result: 年間電気代 13.2億円 → 10.0億円（▲24%、▲3.2億円）／契約kW 5,200→4,600／PPA初期投資ゼロで即効果／CO2排出 ▲48%／RE100進捗60%達成。",
  },
  {
    title: "業種2: 豊洲の大型商業施設＋複合ビル（特別高圧 3,800kW、年間 2,700万kWh）",
    before:
      "Before: 豊洲駅前の大型商業施設＋オフィス複合ビルB（地下2階・地上25階、テナント150店＋オフィス）。冷暖房・照明・エレベーター・テナント供給が中心。年間電気代 8.1億円。市場連動プラン継続で2023年夏は月最大1.3億円の請求。",
    after:
      "After: 全国系新電力との競争入札で特別高圧固定5年契約／全館LED化（投資3,200万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／屋上太陽光600kW＋蓄電池導入（東京都補助併用）。",
    result:
      "Result: 年間電気代 8.1億円 → 6.56億円（▲19%、▲1.54億円）／契約kW 3,800→3,400／投資回収 補助金後 2.1年／東京都キャップ&トレード制度の削減義務達成。",
  },
  {
    title: "業種3: 新木場の冷凍冷蔵物流センター（高圧 1,800kW、年間 1,100万kWh）",
    before:
      "Before: 新木場地区の食品物流C社冷凍冷蔵センター（延床18,000m²、24時間稼働、輸入冷凍食品中心）。冷凍機・冷蔵機の電力負荷が全体の70%超。市場連動プラン継続で2022年12月〜2023年2月は月最大1,950万円の請求。年間電気代 3.3億円。",
    after:
      "After: 全国系新電力の固定3年プランに切替／冷凍機をインバータ式に更新（SII補助1/2活用、投資2,800万円）／屋根面積10,000m²に自家消費太陽光1,000kW＋蓄電池700kWh導入（経産省・東京都補助併用）／デマンドピーク制御強化。",
    result:
      "Result: 年間電気代 3.3億円 → 2.5億円（▲24%、▲8,000万円）／契約kW 1,800→1,500／投資回収 補助金後 2.4年／自家消費比率 25%。",
  },
];

const costFactors = [
  {
    label: "AI需要拡大によるDC電力急増と系統制約",
    detail:
      "江東区のDC集積は2024年以降のAI需要拡大で電力需要が一段急増。AIサーバ1ラック10〜30kW級の高密度化で、既存DCも増床・更新が必要。系統制約により新規大口契約には待ち時間が発生するケースも。早期の電力会社協議が重要。",
  },
  {
    label: "豊洲市場・大型商業施設の冷暖房負荷",
    detail:
      "豊洲市場の冷凍冷蔵設備、ららぽーと豊洲・有明ガーデンの空調・照明、有明ビッグサイトのイベント電力負荷が極端に大きい。ヒートアイランドで夏季冷房需要が周辺県より2〜3℃分高い。",
  },
  {
    label: "有明大型イベント時のピーク電力",
    detail:
      "コミックマーケット・モーターショー等の大型イベント開催時には有明地区の電力需要がピーク化。事業者個別の契約は通常時ベースだが、イベント時の特殊負荷管理が必要。デマンドピーク管理に専門知識が必要。",
  },
  {
    label: "湾岸物流の24時間稼働と冷凍冷蔵負荷",
    detail:
      "辰巳・新木場の冷凍冷蔵倉庫は24時間稼働で負荷率高く、燃料費調整額の影響を直接受ける。市場連動プラン継続事業者は2022〜2023年の高騰局面で大幅な収益圧迫を経験、固定プラン回帰が進行。",
  },
  {
    label: "再エネ賦課金の負担増（大規模事業者で年間1億円超）",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）。江東区の特別高圧DC（年間4,000万kWh）で年間1.6億円規模の負担。減免制度（電気使用密度要件等）は一部DC事業者が対象になる可能性あり。",
  },
];

const subsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    target: "高効率空調・LED・冷凍冷蔵・コンプレッサー・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "豊洲オフィス、新木場物流倉庫の冷凍機更新で採択実績多数。DC向けは高効率空調・サーバ更新で活用可能。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "DC・物流倉庫の屋根太陽光、オフサイトPPAの両方で活用可能。江東区はDCの再エネ調達ニーズが極めて大きく、オフサイトPPAの主要立地。",
  },
  {
    name: "東京都 中小規模事業所向け省エネ設備導入補助",
    target: "中小規模事業所のCO2削減設備（空調・LED・BEMS等）",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都クール・ネット東京経由で公募。SII補助との併用可能なケースあり。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "豊洲・有明のオフィスビル・商業施設新築・大規模改修で活用実績。ZEB Ready以上の認証取得が条件。",
  },
  {
    name: "江東区 エネルギー対策助成（中小企業向け省エネ・再エネ設備）",
    target: "区内中小企業の省エネ機器・再エネ設備導入",
    rate: "1/3〜1/2、上限100〜300万円（年度予算枠あり）",
    note: "江東区独自の補助制度。LED・高効率空調・太陽光発電・蓄電池が対象。区内本社・事業所要件あり。詳細は江東区産業労働課で要確認。",
  },
];

const industryProfile = [
  {
    label: "データセンター（東陽町・木場・有明）",
    detail:
      "江東区は首都圏DC集積地の中核。年間使用量5,000万kWh超の特別高圧契約が中心。AI・クラウド需要拡大で2024年以降急増中。サーバ高密度化で電力密度も増加傾向。",
  },
  {
    label: "豊洲オフィス・商業・市場",
    detail:
      "豊洲駅前のオフィスビル（NTTデータ豊洲センタービル等）、ららぽーと豊洲、豊洲市場が立地。年間使用量1,000〜5,000万kWh規模の特別高圧契約が複数。複合再開発の進行で電力需要拡大中。",
  },
  {
    label: "有明 MICE・スポーツ・商業",
    detail:
      "東京ビッグサイト、有明アリーナ、有明コロシアム、有明ガーデンなど。年間使用量1,000〜5,000万kWh規模の大型施設集積。大型イベント時のピーク電力管理が独特。",
  },
  {
    label: "湾岸物流（辰巳・新木場・東雲）",
    detail:
      "辰巳・新木場・東雲・夢の島の物流DC、冷凍冷蔵倉庫、3PL拠点。年間使用量500〜3,000万kWh規模の高圧契約が中心。屋根面積の広さを活かした自家消費太陽光導入余地大。",
  },
  {
    label: "清澄白河・亀戸の中小製造・印刷",
    detail:
      "清澄白河・亀戸・大島の中小製造業（金属加工・印刷・食品加工等、約1,500社）。年間使用量50〜500万kWh規模の中小高圧契約が中心。後継者問題・省エネ投資余力の課題も。",
  },
];

const switchingReality = [
  {
    label: "江東区内の新電力切替浸透度",
    detail:
      "2024年時点で江東区法人の新電力シェアは推計35〜40%と23区内でも最高水準。DC・大型商業施設・物流DCで競争入札による切替が標準化、清澄白河・亀戸の中小事業者でも切替が拡大。",
  },
  {
    label: "DC向け新電力の競争激化と一部退場",
    detail:
      "2022〜2023年の市場高騰局面でDC向け新電力に受付停止・撤退が相次いだ。2024年以降は段階的に再開、DC専門の新電力（ジェネックス、サミットエナジー、新出光等）が再エネ調達を含めた提案を強化。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の優先復旧体制・既存契約の手続コスト不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。年間500万kWh超の事業者では切替メリットが明確。",
  },
  {
    label: "新電力選定の江東区固有ポイント",
    detail:
      "①DC・大型施設の特別高圧供給実績、②AI需要拡大に伴う系統制約への対応力、③RE100対応の再エネ電源調達力（PPA・トラッキング付証書）、④夏季ピーク（7〜9月）の対応力、⑤固定単価期間（3〜5年）の確実性、の5点が特に重要。",
  },
  {
    label: "需要家主導型オフサイトPPAの大規模普及",
    detail:
      "江東区はDCの再エネ調達ニーズが極めて大きく、オフサイトPPAの主要需要側立地。福島・茨城・千葉・栃木の大規模太陽光・風力電源と直接契約するPPAが急速に普及。RE100宣言企業のDCで導入実績多数。",
  },
];

const energySaving = [
  {
    label: "データセンターの高効率化（PUE改善）",
    detail:
      "サーバ更新で電力密度向上、外気冷房（フリークーリング）併用、液冷導入、AI制御最適化でPUE 1.6→1.3に改善し電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増す。",
  },
  {
    label: "大型商業施設・オフィスビルの高効率化（豊洲・有明）",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、外気冷房（フリークーリング）併用で電力▲20〜30%。SII補助＋都補助＋江東区補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "物流DC・冷凍冷蔵倉庫の電力最適化（辰巳・新木場）",
    detail:
      "冷凍機のインバータ化、断熱強化、デマンドピーク制御、自家消費太陽光＋蓄電池で電力▲15〜25%。SII補助の冷凍冷蔵設備区分は採択率が高い。",
  },
  {
    label: "需要家主導型オフサイトPPA（DC・大口）",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。江東区DCのRE100宣言企業を中心に大規模PPA契約が普及。10〜50MW級の大規模PPAも増加中。",
  },
  {
    label: "蓄電池・ピークカット（大型施設）",
    detail:
      "ビル屋上・地下・倉庫敷地内に蓄電池設置でデマンドピーク▲20〜35%。夜間充電・昼間放電のサイクルで電気代削減＋ピーク需要時のDR報酬獲得も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "DC・大型施設の特別高圧契約は競争入札で年1回見直しを行っているか",
  "AI需要拡大に伴うサーバ高密度化での電力需要増を予測しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『キャップ&トレード制度』『建築物環境計画書制度』の対象事業所か確認したか",
  "DC事業者は系統制約による新規大口契約の予約状況を確認したか",
  "SII補助・東京都補助・江東区補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "有明イベント施設は大型イベント時のピーク電力管理を確立しているか",
];

const faqItems = [
  { question: "江東区の法人電気代水準は23区内でどの位置ですか？", answer: "江東区は特別高圧DC・大型商業施設の比率が極めて高く、競争入札による単価最適化が最も進んでいるため、実質単価は23区内でも低水準のグループに入ります。DCでは標準比1〜3円/kWh安い水準が一般的。一方、清澄白河・亀戸の中小製造業は標準メニューに近い水準で、新電力切替で2〜4円/kWh削減余地があります。" },
  { question: "AI需要拡大はDC事業者にどう影響しますか？", answer: "AI需要拡大により2024年以降、サーバ高密度化（1ラック10〜30kW級）が急速に進行し、既存DCも増床・更新が必要となっています。系統制約により新規大口契約には待ち時間が発生するケースもあり、早期の電力会社協議が重要。再エネ電源確保（オフサイトPPA）も並行で進めることが、コスト面・CO2面の両方で重要です。" },
  { question: "東陽町・木場のDC事業者で電気代を削減するポイントは？", answer: "①DC専門新電力との競争入札、②外気冷房（フリークーリング）併用でPUE改善、③サーバ更新で電力密度向上、④需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、⑤BEMS・AI分析による需要最適化、の5本柱。投資回収2〜3年で年間電気代▲20〜25%、CO2▲40〜50%が可能なレンジです。" },
  { question: "豊洲・有明の大型商業施設の電気代対策は？", answer: "全館LED化、高効率空調機更新、BEMS導入、屋上太陽光＋蓄電池、需要家主導型オフサイトPPAの組合せが基本。年間電気代▲15〜20%、東京都キャップ&トレード制度の削減義務も同時に達成可能。SII補助・東京都補助・江東区補助の組合せで投資回収1.5〜2.5年。" },
  { question: "新木場・辰巳の冷凍冷蔵物流の電気代対策は？", answer: "冷凍機のインバータ化・断熱強化・デマンドピーク制御が基本。屋根面積が大きい倉庫では自家消費太陽光＋蓄電池導入で電気代▲15〜25%＋自家消費比率20%超が可能。SII補助の冷凍冷蔵設備区分は採択率が高く、東京都補助・経産省補助との併用も可能です。" },
  { question: "江東区独自の補助制度はありますか？", answer: "江東区エネルギー対策助成（中小企業向け省エネ・再エネ設備、補助率1/3〜1/2、上限100〜300万円）が代表的。年度予算枠があるため早期申請が有利。区内中小企業要件あり。SII補助・東京都補助との併用可否は事業内容により異なるため、江東区産業労働課に事前相談を推奨します。" },
  { question: "有明ビッグサイトのイベント時電力管理は？", answer: "有明地区の大型イベント（コミックマーケット・モーターショー等）開催時には施設電力需要がピーク化。事業者個別契約は通常時ベースだが、イベント時の特殊負荷管理に専門知識が必要。BEMS導入＋イベント別電力プロファイル分析＋デマンドピーク制御の組合せが重要です。" },
  { question: "江東区で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、東京都中小規模事業所向け省エネ設備導入補助、東京都ZEB・ZEH支援事業、江東区エネルギー対策助成の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。クール・ネット東京と江東区産業労働課の最新公募情報を併せて確認するのが効果的です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "江東区 産業・労働（中小企業支援）", url: "https://www.city.koto.lg.jp/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "クール・ネット東京（東京都地球温暖化防止活動推進センター）", url: "https://www.tokyo-co2down.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
];

export default function KotoKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/koto-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">江東区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            江東区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            江東区は首都圏データセンター集積の中核区で、東陽町・木場・有明のDC、豊洲のオフィス・大型商業・市場、有明ビッグサイト・アリーナのMICE施設、辰巳・新木場の湾岸物流、清澄白河・亀戸の中小製造業と極めて多面的な事業者集積を持ちます。本ページではAI需要時代の特別高圧契約戦略、業種別影響度、契約見直し・補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>江東区DC集積の電力需要構造とAI需要拡大の影響</li>
              <li>東陽町DC・豊洲商業ビル・新木場冷凍冷蔵物流のBefore/After削減事例</li>
              <li>豊洲再開発・有明MICE・湾岸物流の電力プロファイル別契約戦略</li>
              <li>SII・東京都・江東区補助の組合せ活用パターン</li>
              <li>江東区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区は首都圏データセンター集積地の中核で、AI需要拡大期の電力需要急増の主役エリア。豊洲再開発・有明MICE・湾岸物流・中小製造が並列する複合構造です。23区の中でも特別高圧契約が極めて多く、年間電力需要は推計40〜50億kWhと最大級。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {electricSituation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都全体の電力事情は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金完全ガイド
              </Link>
              、DC事業者の論点は{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                データセンターの電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区では東電EPに加え、全国系・DC専門・通信流通系・地域ガス系・再エネ特化型の新電力15社前後が法人向け高圧で新規受付中。DC・大型施設の特別高圧契約では競争入札が標準化しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {utilitiesList.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">役割: {item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力選定の基本は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区の電気料金水準と契約パターン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区は特別高圧DC・大型商業施設の比率が極めて高く、競争入札による単価最適化が最も進んでいるため、実質単価は23区内でも低水準。一方、清澄白河・亀戸の中小製造業は標準メニューに近い水準で、切替余地があります。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 単価は2025年10月時点の標準メニューを基準に整理。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 東陽町DC・豊洲商業＋オフィス・新木場冷凍冷蔵（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表シナリオです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {industryImpact.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">{cs.before}</span></p>
                    <p><span className="font-semibold text-slate-700">{cs.after}</span></p>
                    <p><span className="font-semibold text-emerald-700">{cs.result}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種横断のコスト構造比較は{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、物流DC見直しは{" "}
              <Link href="/logistics-warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区固有の電気代上昇要因 — AI需要・大型施設・湾岸物流・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区の電気代上昇は、AI需要拡大によるDC電力急増、豊洲・有明大型施設の冷暖房負荷、有明イベント時のピーク電力、湾岸物流の24時間稼働、再エネ賦課金上昇など、区固有の要因が複合的に重なります。
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
              <Link href="/ai-demand-electricity-price-outlook" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">AI需要拡大と電気料金見通し</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区の補助金・優遇制度 — SII・東京都・江東区独自補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区では国補助（SII等）、東京都補助、江東区独自補助の3層構造を活用できます。DC・大型施設では需要家主導型PPA補助金との組合せが効果的、中小製造業ではSII＋区補助の組合せが基本パターンです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidies.map((item) => (
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
              補助金スケジュールは{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、SII補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区の大型施設・産業集積と電力需要プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区の事業者構成は、データセンター、豊洲オフィス・商業・市場、有明MICE・スポーツ、湾岸物流、清澄白河・亀戸の中小製造の5層構造です。各層で電力需要プロファイルと最適契約戦略が異なります。
            </p>
            <div className="mt-4 space-y-3">
              {industryProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電力会社切替の実情 — 東電EPと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区の新電力シェアは2024年時点で推計35〜40%と23区内でも最高水準。DC・大型施設・物流DCで競争入札による切替が標準化、需要家主導型オフサイトPPAも大規模に普及しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {switchingReality.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区の省エネは『DCのPUE改善』『豊洲・有明大型施設の高効率化』『湾岸物流の電力最適化』『需要家主導型オフサイトPPA』『蓄電池・ピークカット』の5軸が主力です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              江東区向け契約見直しチェックリスト（12項目）
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
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで江東区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              江東区は首都圏DC集積の中核で、AI需要拡大期の電力需要急増・特別高圧契約の競争入札・湾岸物流の24時間稼働など区固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した19〜24%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-27"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "東京都全体の電気料金事情と区横断の論点。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "市区町村別の電気料金事情をハブから探す。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金", description: "丸の内・大手町の特別高圧オフィス集積。" },
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "銀座・日本橋の商業・オフィス集積。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "六本木・赤坂の特別高圧ビルとDHC。" },
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "新宿副都心の超高層オフィス群。" },
              { href: "/shibuya-ku-business-electricity-cost", title: "渋谷区の法人電気料金", description: "渋谷・原宿のIT・商業集積。" },
              { href: "/shinagawa-ku-business-electricity-cost", title: "品川区の法人電気料金", description: "大崎・五反田・天王洲の特別高圧オフィス。" },
              { href: "/ota-ku-business-electricity-cost", title: "大田区の法人電気料金", description: "町工場集積と羽田空港物流。" },
              { href: "/sumida-ku-business-electricity-cost", title: "墨田区の法人電気料金", description: "中小製造業とスカイツリー観光。" },
              { href: "/taito-ku-business-electricity-cost", title: "台東区の法人電気料金", description: "上野・浅草の観光・商業集積。" },
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "大学・研究機関と中小オフィス。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "東陽町・木場・有明DCの主力打ち手を網羅。" },
              { href: "/logistics-warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "辰巳・新木場の物流DCの主力打ち手。" },
              { href: "/ai-demand-electricity-price-outlook", title: "AI需要拡大と電気料金見通し", description: "AI需要でDC電力急増の論点を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "DC・物流・製造の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="江東区の自社条件で電気代リスクを試算する"
            description="東陽町・木場のDC、豊洲・有明の大型施設、辰巳・新木場の湾岸物流など江東区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="江東区の電力契約見直し、専門家に相談しませんか？"
            description="東陽町・木場のDC、豊洲・有明の大型施設、新木場の冷凍冷蔵物流の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
