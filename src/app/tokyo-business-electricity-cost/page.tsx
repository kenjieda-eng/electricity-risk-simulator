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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["by-region"];

const pageTitle =
  "東京都の法人電気料金完全ガイド｜首都経済集積・データセンター・大型商業施設の契約最適化";
const pageDescription =
  "東京都の法人電気料金を地域特化で解説。東京電力エリアの中核首都、23区オフィスビル・データセンター集中、多摩地区の工業集積、大型商業施設・ホテルの電力負荷プロファイル、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東京都 法人電気料金",
    "東京電力 高圧 都心",
    "23区 オフィスビル 電気代",
    "データセンター 電力消費",
    "東京 商業施設 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/tokyo-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tokyo-business-electricity-cost",
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
    label: "東京電力エリアと東京都の位置付け",
    detail:
      "東京都は東京電力パワーグリッド（送配電）・東京電力エナジーパートナー（小売）の中核エリア。23区と多摩地区で配電網構造が異なる。都内総電力需要は約780億kWhで東電エリア全体の30%弱を占める。系統規模は世界有数で、需給安定性は国内トップ水準。",
  },
  {
    label: "電源構成 — 火力中心と長距離送電依存",
    detail:
      "東京電力エリアは火力（LNG・石炭・石油）依存度65%、原発（柏崎刈羽）停止中、再エネ20%程度。発電所は東京都外（千葉・神奈川・福島・新潟）に立地し、500kV基幹送電網で都内に供給。FIT/FIP電源も含めて都内需要を県外発電で賄う構造。",
  },
  {
    label: "気象条件 — ヒートアイランドと冷房需要",
    detail:
      "23区はヒートアイランド現象で夏季最高気温が周辺県より2〜4℃高い。年間冷房度日（CDD24）は1,500以上で全国上位。冬季は比較的温暖で暖房度日2,000程度。冷房需要のピーク（7〜9月午後）が需給管理上最大の課題。",
  },
  {
    label: "需給ひっ迫 — 夏季・冬季の最大需要",
    detail:
      "東京電力エリアの最大需要は夏季午後（13〜16時）と冬季夕方（17〜19時）。2022〜2023年は需給ひっ迫警報の発令対象となり、都心オフィスビル・データセンターの計画停電準備が話題に。需要家主導型DR（デマンドレスポンス）契約が拡大。",
  },
  {
    label: "23区と多摩地区の事業者構造差",
    detail:
      "23区はオフィスビル・データセンター・商業施設・ホテルの密集地で、年間使用量200〜5,000万kWh規模の大規模事業所が多数立地。多摩地区は工業集積（八王子・町田・武蔵村山）で中小製造業中心。電力需要パターンが大きく異なる。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "都内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』『高圧電力AB』など。2023年6月の規制料金改定で家庭向け15.9%値上げ。法人向けも同等の改定を実施。燃料費調整額の上限撤廃継続。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "都内の新電力シェア最上位グループ。固定単価・市場連動の両方を提供。23区オフィスビル・データセンター・商業施設で実績多数。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信会社系・流通系の新電力。中小事業者・店舗中心だが、大規模事業者向け高圧プランも展開。固定単価メニュー中心。",
  },
  {
    name: "東急パワーサプライ・東京ガスエナジー",
    role: "地域・ガス系新電力",
    detail:
      "東急電鉄系・東京ガス系の新電力。都内沿線エリア・ガス併売エリアで強み。複合契約（電気＋ガス）のメリットあり。",
  },
  {
    name: "みんな電力・自然電力",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供する新電力。RE100宣言企業・CO2削減志向の事業者向け。料金水準はやや高めだが、SBT・TCFD対応の観点で選択肢になる。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で都内でも新電力の新規受付停止・撤退が相次いだ（特にデータセンター向け）。2024年以降は徐々に再開、現在は15社前後が都内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。全国平均と同水準。新電力競争による単価低下が顕著で、新電力経由なら2〜4円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。データセンター・大規模工場・大型商業施設・地域冷暖房事業者が対象。全国平均比1〜2円/kWh安い水準で、新電力競争による圧力大。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力（動力）』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。",
  },
  {
    label: "データセンター向け特別料金体系",
    detail:
      "データセンター事業者向けには需要パターン（高負荷率・24時間運用・電源信頼性）に応じた特別契約が一般化。高圧・特別高圧の標準メニューより1〜2円/kWh安い単価交渉が可能なケース多数。新電力経由ではさらに優遇可能性。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・多摩地区電子部品工場（八王子市、高圧 800kW、年間 420万kWh）",
    before:
      "Before: 八王子市の電子部品メーカーA社。24時間稼働クリーンルーム＋一般加工ライン。市場連動プラン継続で2023年夏には月最大1,650万円の電気代経験。年間電気代 1.26億円。クリーンルーム空調が消費電力の50%超を占めるが、デマンド管理は手動運用。",
    after:
      "After: 全国系新電力に切替し固定3年プラン採用。クリーンルーム空調を可変風量制御に変更／コンプレッサーをインバータ式に更新（SII補助1/2活用、投資1,400万円）／屋根面積3,500m²に自家消費太陽光500kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.26億円 → 1.04億円（▲17%、▲2,200万円）／契約kW 800→720／投資回収 補助金後 2.6年。",
  },
  {
    title: "業種2: 流通業・大型商業施設（23区銀座、特別高圧 3,200kW、年間 2,300万kWh）",
    before:
      "Before: 銀座の大型商業施設B（地下4階・地上12階、テナント120店）。冷暖房・照明・エレベーター・エスカレーター・テナント供給が中心。年間電気代 6.9億円。市場連動プランで2023年夏は月最大1.1億円の請求。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／全館LED化（投資2,800万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／屋上太陽光500kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 6.9億円 → 5.66億円（▲18%、▲1.24億円）／契約kW 3,200→2,850／投資回収 補助金後 2.0年。",
  },
  {
    title: "業種3: サービス業・データセンター（江東区、特別高圧 4,500kW、年間 3,800万kWh）",
    before:
      "Before: 江東区の中規模データセンターC社（サーバ4,500ラック）。冷却電力が全体の40%、UPS・PDU等の付帯設備20%。年間電気代 11.4億円。デマンドピーク管理は冷却機制御で実施するが、PUE（電力使用効率）1.65と業界平均より高い。",
    after:
      "After: 特別高圧の固定5年契約（DC専門新電力との競争入札）／冷却を外気冷房（フリークーリング）併用に／サーバ更新で電力密度向上／需要家主導型PPAでオフサイト太陽光5MW契約／PUE 1.65→1.38に改善。",
    result:
      "Result: 年間電気代 11.4億円 → 9.0億円（▲21%、▲2.4億円）／契約kW 4,500→4,000／PPAは初期投資ゼロで即効果。",
  },
];

const costFactors = [
  {
    label: "23区ヒートアイランドによる冷房需要",
    detail:
      "23区の夏季冷房需要は周辺県より20〜30%高い。オフィスビル・商業施設で年間電気代の30〜45%を冷房が占める。高効率空調機更新と外気冷房の活用が重要。",
  },
  {
    label: "データセンター集中による電力需要急増",
    detail:
      "東京都・千葉県・神奈川県のデータセンター集積地で電力需要が急増。AIサーバ等の高密度サーバラック導入で1ラック当たり消費電力が10〜30kWに上昇傾向。電力契約も大幅変更が必要。",
  },
  {
    label: "オフィスビルの高効率化要求",
    detail:
      "東京都『建築物環境計画書制度』『キャップ&トレード制度』により、延床5,000m²以上のビルでCO2削減義務。電力契約見直し＋設備更新で削減目標達成を支援する制度設計。",
  },
  {
    label: "ピーク時間帯需給ひっ迫の影響",
    detail:
      "夏季午後・冬季夕方の需給ひっ迫警報発令時にはDR（デマンドレスポンス）契約のある事業者には削減要請が来る。報酬付きDR契約は商業施設・データセンターで普及拡大。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1,000万kWh使用の大規模事業者で年4,000万円規模の負担。減免制度の対象は限定的だが、適用可能性のある事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "都内ではオフィスビル・商業施設・データセンター・多摩地区工場で採択実績多数。LED化・空調更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "都内では屋根面積が限られるため、屋上太陽光より需要家主導型オフサイトPPAの活用が現実的。大型商業施設・データセンターで採択実績。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都独自の補助。建築物環境計画書制度・キャップ&トレード制度の対象事業所には別途インセンティブあり。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "オフィスビル・商業施設のZEB化を支援。都心の大型新築案件で活用実績多数。",
  },
  {
    name: "千代田区・港区・新宿区など23区独自補助",
    target: "区内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限100万〜2,000万円",
    note: "23区単位の補助。千代田区『中小規模事業所向け省エネ設備導入補助』、港区『創エネ・蓄エネ・省エネ機器設置助成』など。都補助・SII補助との併用可能なケースあり。",
  },
];

const industryProfile = [
  {
    label: "オフィスビル・本社機能（23区都心）",
    detail:
      "千代田・港・中央・新宿・渋谷区の中高層オフィスビル群。総延床面積で全国の20%超を占める。年間使用量1,000万kWh超の大型ビルが多数。テナント供給型契約・ビル一括契約の両方が存在。",
  },
  {
    label: "データセンター（江東・印西・大手町）",
    detail:
      "江東区・大手町・印西市（千葉県）に集中する首都圏データセンター。年間使用量5,000万kWh超の特別高圧契約が中心。AI・クラウド需要拡大で2024年以降急増中。",
  },
  {
    label: "商業施設・ホテル（23区・多摩）",
    detail:
      "銀座・新宿・池袋・渋谷の百貨店・大型商業施設、御台場・新宿・赤坂のホテル。冷暖房・照明・エレベーター負荷が中心。年間使用量200〜3,000万kWh規模。",
  },
  {
    label: "多摩地区工業（八王子・町田・武蔵村山）",
    detail:
      "八王子・町田・武蔵村山・羽村・福生に電子部品・精密機械・医薬品工場が集積。年間使用量100〜2,000万kWh規模の中堅工場が中心。",
  },
  {
    label: "地域冷暖房（DHC）事業者",
    detail:
      "丸の内・新宿・六本木・お台場の地域冷暖房事業者は特別高圧大口需要家。冷温水製造設備の電力負荷が大きい。年間使用量5,000万〜2億kWh規模の超大型契約。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の都内浸透度",
    detail:
      "2024年時点で都内法人の新電力シェアは30〜35%（経産省統計）と全国最高水準。23区都心では大規模事業者の競争入札による切替が進む。多摩地区中小事業者でも切替が拡大。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で都内事業者の多くが市場連動から固定プランへ回帰。データセンター・24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。23区大規模事業者では新電力との単価差が明確。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②夏季ピーク需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が都内では特に重要。",
  },
  {
    label: "需要家主導型PPAの主流化",
    detail:
      "23区屋根面積が限られるため、オフサイト型PPAが主流化。福島・茨城・栃木・千葉の大規模太陽光・風力電源と直接契約で、初期投資ゼロで再エネ調達。RE100宣言企業を中心に普及拡大。",
  },
];

const energySaving = [
  {
    label: "オフィスビル・商業施設の高効率化",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、外気冷房（フリークーリング）併用で電力▲20〜30%。SII補助＋都補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "データセンターの高効率化",
    detail:
      "サーバ更新で電力密度向上、外気冷房（フリークーリング）併用、PUE改善（1.6→1.3）で電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増す。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言企業を中心に普及拡大。CO2削減と電気代削減を両立できる。",
  },
  {
    label: "蓄電池・ピークカット",
    detail:
      "ビル屋上・地下に蓄電池設置でデマンドピーク▲20〜35%。夜間充電・昼間放電のサイクルで電気代削減＋ピーク需要時のDR報酬獲得。",
  },
  {
    label: "BEMS・需要見える化",
    detail:
      "ビル全体の電力消費をBEMSで見える化＋AI分析でピーク需要▲15〜25%。テナント別請求の正確化、節電インセンティブ設計などにも活用可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『建築物環境計画書制度』『キャップ&トレード制度』の対象事業所か確認したか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・都補助・23区補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "ZEB・ZEH支援事業の活用可能性を新築・改修計画と照合したか",
];

const faqItems = [
  { question: "東京都の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均と同水準ですが、新電力競争による単価低下が顕著で、新電力経由なら全国平均より2〜4円/kWh安いケース多数。23区大規模事業者・データセンターでは特に競争激しく、特別高圧契約で1〜2円/kWh単位の単価交渉が一般化しています。" },
  { question: "東電EPの燃料費調整額の特徴は？", answer: "電源構成でLNG・石炭火力依存度が65%程度のため、燃料費調整額の変動幅は大きいです。2022〜2023年は月最大+8円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。柏崎刈羽原発の再稼働進展で長期的には負担減の可能性ありますが、為替・原油価格次第で再度上振れリスク。上限付きプランへの切替を強く推奨します。" },
  { question: "23区と多摩地区で電気代水準は違いますか？", answer: "東電EPの単価体系は都内一律ですが、事業者タイプと使用量パターンの違いで実質単価には差が出ます。23区大規模オフィスビル・商業施設は特別高圧の競争入札で単価交渉力があり、新電力との単価差が大きい。多摩地区中小工場は高圧契約で標準メニュー利用が中心です。" },
  { question: "東京都でデータセンター事業者の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②外気冷房（フリークーリング）併用でPUE改善、③サーバ更新で電力密度向上、④需要家主導型オフサイトPPAで再エネ調達、⑤BEMS・AI分析による需要最適化、の5本柱が中心。SBT・RE100対応と電気代削減を両立できます。" },
  { question: "東京都の再エネ調達手段は何がありますか？", answer: "①オフサイト型PPA（県外太陽光・風力との直接契約）、②再エネ特化型新電力（みんな電力・自然電力等）、③再エネ証書購入、④オンサイト太陽光（屋上面積が限られるが）、の4手段が中心。RE100宣言企業を中心にオフサイトPPAが急速に普及しています。" },
  { question: "東京都『キャップ&トレード制度』とは？", answer: "都が独自に実施する大規模事業所向けCO2排出削減義務制度。延床5,000m²以上のビルでCO2排出削減目標が課され、未達の場合は排出量取引で補う必要があります。電力契約見直し・設備更新による削減で目標達成可能。都の補助金活用とセットで戦略立てが重要です。" },
  { question: "東京都で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、東京都地球温暖化対策報告書制度関連補助、東京都ZEB・ZEH支援事業、23区独自補助（千代田・港・新宿等）の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function TokyoBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tokyo-business-electricity-cost"
        datePublished="2026-05-20"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "地域別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-region" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-region" className="underline-offset-2 hover:underline">地域別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">東京都の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            東京都の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            東京都は東京電力エリアの中核で、23区のオフィスビル・データセンター集中、多摩地区の工業集積、大型商業施設・ホテル群と多面的な事業者集積を持ちます。本ページでは都内法人の電気代水準、業種別影響度、ヒートアイランドや需給ひっ迫など東京固有の課題、契約見直しの具体策、都・23区補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリアにおける都内法人の電気代水準と全国比較</li>
              <li>多摩地区工場・23区大型商業施設・データセンターのBefore/After削減事例</li>
              <li>23区と多摩地区の事業者プロファイル差と契約戦略</li>
              <li>SII・都・23区補助の組合せ活用パターン</li>
              <li>東京都向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京都の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都は東電エリアの中核首都で、23区と多摩地区で配電網構造と事業者構成が大きく異なります。火力中心の電源構成、ヒートアイランド現象による夏季冷房需要、データセンター集中による電力需要急増、東京都独自のキャップ&トレード制度などが都内固有の要素です。
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
              東京電力エリアの全体像は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              、エリア比較は{" "}
              <Link href="/area-power-supply-mix-comparison" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                エリア別電源構成マップ
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              都内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都では2024年時点で15社前後の新電力が法人向け高圧で新規受付中です。全国系・通信流通系・地域ガス系・再エネ特化型の4カテゴリが主軸となります。23区大規模事業者では競争入札による切替が標準化しています。
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
              東京都の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東電エリアの単価は全国平均と同水準ですが、新電力競争が最も激しいエリアで、新電力経由なら全国平均より2〜4円/kWh安いケースが多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              業種別影響度3件 — 多摩工場・大型商業施設・データセンター（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、データセンター見直しは{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京都固有の電気代上昇要因 — ヒートアイランド・DC需要・キャップ&トレード・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都の電気代上昇は、首都集積特有の要因が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京都の補助金・優遇制度 — SII・都独自・23区補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都では国補助（SII等）に加え、都独自補助、23区補助、ZEB・ZEH支援事業が組合せ可能です。都内では補助金体系が最も充実しており、設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              東京都の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都の事業者構成は、オフィスビル、データセンター、商業施設・ホテル、多摩地区工業、地域冷暖房（DHC）の5層構造です。23区と多摩地区で大きく構成が異なります。
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
              東京都の新電力シェアは2024年時点で30〜35%程度と全国最高水準。23区都心では大規模事業者の競争入札による切替が標準化、需要家主導型PPAも急速に普及しています。
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
              都内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都の省エネは『オフィスビル・商業施設の高効率化』『データセンターの高効率化』『需要家主導型オフサイトPPA』『蓄電池・ピークカット』『BEMS・需要見える化』の5軸が主力。屋根面積制約が大きいためオフサイト型再エネ調達が重要な打ち手です。
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
              東京都向け契約見直しチェックリスト（12項目）
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
              シミュレーターで東京都の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都はヒートアイランド・データセンター集中・キャップ&トレード制度など首都圏特有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜21%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-20"
            />
            <GlossaryLinks currentSlug="tokyo-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "東京23区など市区町村単位の電気代事情をハブから探す。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金完全ガイド", description: "大手町・丸の内・霞が関の大企業本社・官公庁の契約最適化。" },
              { href: "/koto-ku-business-electricity-cost", title: "江東区の法人電気料金完全ガイド", description: "湾岸物流・データセンター集積地・豊洲再開発の電力事情。" },
              { href: "/ota-ku-business-electricity-cost", title: "大田区の法人電気料金完全ガイド", description: "町工場集積・羽田空港物流・京浜工業地帯の契約最適化。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電管内の料金体系・改定動向の詳細。" },
              { href: "/kanagawa-business-electricity-cost", title: "神奈川県の法人電気料金", description: "隣接県・京浜工業地帯の神奈川県の事情。" },
              { href: "/saitama-business-electricity-cost", title: "埼玉県の法人電気料金", description: "隣接県・首都圏物流拠点の埼玉県の事情。" },
              { href: "/chiba-business-electricity-cost", title: "千葉県の法人電気料金", description: "隣接県・京葉工業地帯の千葉県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "データセンター・商業施設が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC事業者の主力打ち手を網羅。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "23区大型オフィスビルの最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "多摩地区工場の全国比較。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "都心オフサイトPPA活用も含む。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "オフィスビル・DC・工場の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="東京都の自社条件で電気代リスクを試算する"
            description="オフィスビル・データセンター・商業施設・多摩工業など東京都固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="東京都の電力契約見直し、専門家に相談しませんか？"
            description="オフィスビル・データセンター・大型商業施設の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で都内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
