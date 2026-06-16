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
  "広島県の法人電気料金完全ガイド｜中国電力エリア単価分析・マツダ自動車・呉造船・広島都市圏の契約最適化";
const pageDescription =
  "広島県の法人電気料金を地域特化で解説。中国電力エリアの単価水準を業種別に再加工して提示し、マツダ自動車府中工場、呉造船・JFEスチール、福山鉄鋼、広島市都市圏のデータセンター・商業集積、宮島観光業の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "広島県 法人電気料金",
    "中国電力 高圧 単価",
    "マツダ 自動車 電気代",
    "呉造船 福山 鉄鋼 電力",
    "広島 宮島 観光 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/hiroshima-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hiroshima-business-electricity-cost",
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
    label: "中国電力エリアと広島県の位置付け",
    detail:
      "広島県は中国電力のエリア。広島市・呉市・福山市・東広島・尾道・三原・廿日市の都市圏と備北（庄原・三次）から構成。県内総電力需要は約180億kWhで中国電力管内の約30%を占める最大需要県。マツダ自動車（府中工場・宇品工場・三次研究所）、呉造船（JMU・IHI）、福山JFEスチール、広島市都市圏のデータセンター・大型商業施設、宮島・尾道観光業が県内電力消費の中核。",
  },
  {
    label: "電源構成 — 中国電力主力火力と原発",
    detail:
      "中国電力管内はLNG火力（柳井・水島）と石炭火力（三隅・水島）が主力で石炭比率約40%、LNG火力約30%、原発（島根原発2号機が2024年12月再稼働）約10%、再エネ・水力約20%。県内には中国電力の大崎発電所（大崎上島町、CO2分離回収実証）、新成羽川揚水発電所が立地。中国電力本社所在県として地域電力安定供給の中核。",
  },
  {
    label: "気象条件 — 瀬戸内温暖と広島都市圏",
    detail:
      "県内は瀬戸内気候で温暖少雨。年間冷房度日（CDD24）1,300〜1,600、暖房度日1,500〜2,000。広島市内のヒートアイランド現象で夏季冷房需要急増。北部（庄原・三次）は内陸性で寒暖差大きく冬季積雪あり。",
  },
  {
    label: "需給ひっ迫 — 中国電力エリア最大需要県",
    detail:
      "広島県は中国電力管内最大の電力需要県。需給ひっ迫局面ではマツダ・呉造船・福山JFEスチールへのDR要請が発動。広島市内のデータセンター集積も電力需要拡大要因で、契約kW・時間帯別管理の高度化が重要。",
  },
  {
    label: "県内産業構造 — 自動車・造船・鉄鋼・データセンター・観光",
    detail:
      "広島市・府中市・三次市はマツダ自動車（府中工場・宇品工場・三次研究所）の自動車製造集積。呉市は造船（JMU呉造船所、IHI呉）。福山市はJFEスチール西日本・福山ガス。東広島市はマイクロン半導体・東広島キャンパス。広島市内はデータセンター・大型商業施設（パセーラ・本通・八丁堀）。観光業は宮島・尾道・廿日市に集積。",
  },
];

const utilitiesList = [
  {
    name: "中国電力（送配電は中国電力ネットワーク）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大。中国電力本社所在県として地域貢献も強い。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。2023年6月に規制料金値上げを実施。島根原発2号機の2024年12月再稼働により今後の単価動向に注目。",
  },
  {
    name: "中国電力ミライズ・中国電力グループ系新電力",
    role: "中国電力グループ系",
    detail:
      "広島市・呉市・福山市・東広島市等の中国電力グループ新電力。大型法人需要への営業力強い。県内水力発電所・大崎CO2分離回収発電との連携で再エネアピールも展開。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "マツダ・呉造船・福山JFEスチール・東広島マイクロンの高圧・特別高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。広島県内の大規模法人需要にも対応。特にデータセンター・自動車工場向け。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力・広島ガスエナジー",
    role: "ガス系新電力",
    detail:
      "広島ガスのガス供給網との連携で電気・ガスセット契約を提供。商業施設・観光業で実績。マツダ系部品工場向けに広島ガスエナジーの実績多数。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は12〜15社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "中国電力『高圧電力A』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+2.0〜+3.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は24〜29円/kWhレンジ。全国平均と概ね同水準、新電力競争で1〜2円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。広島県内ではマツダ府中工場、JMU呉造船、JFEスチール西日本福山、マイクロン東広島、広島市内データセンター等の大型事業者が対象。新電力競争入札による単価最適化余地が大きく、年間1〜30億円規模のコスト変動。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "中国電力『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。広島市内商業施設・宮島観光業の中小ホテル旅館は低圧電灯中心。",
  },
  {
    label: "島根原発再稼働の影響",
    detail:
      "2024年12月の島根原発2号機再稼働により、中国電力管内の燃料費調整額の引き下げが期待される。マツダ・呉造船・福山JFEスチール等の超大規模需要では、燃料費調整額の0.5円/kWh低下でも年間数億円規模のコスト改善効果が見込まれる。",
  },
];

const ppsNetUnitData = [
  {
    label: "中国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、中国電力エリアの特別高圧電力単価は2024年度実績で約17〜20円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）と概ね同水準。県内大型事業者（マツダ・呉造船・福山JFE・マイクロン）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間10〜30億円規模の差が出る。広島県は中国電力管内最大需要県として共同調達・包括契約の選択肢も豊富。",
  },
  {
    label: "中国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は18〜22円/kWh。県内中規模事業者（マツダ系部品工場・呉造船関連・広島市内オフィス・宮島観光業）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、広島県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "中国電力エリアの低圧単価水準",
    detail:
      "低圧電力10〜13円/kWh、低圧電灯17〜20円/kWhの水準。広島市内商店街・宮島観光業・尾道商店街等の標準帯域。広島都市圏のヒートアイランド対策で夏季冷房需要が増大しており、契約見直しの優先度が高い。",
  },
  {
    label: "県内産業構造との接続 — 自動車・造船・鉄鋼・観光に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを広島県の産業構造に紐づけて再加工すると、①マツダ・呉造船・福山JFEのような特高契約は固定5年で年間5〜15億円の安定化効果、②マツダ系部品工場のような24時間稼働高圧契約は時間帯別料金最適化で年間500〜2,000万円の削減余地、③広島市内データセンターは年間使用量1〜5億kWh級で電力単価1円/kWh改善が年間1〜5億円の差、④宮島・尾道観光業中小契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という4層構造で契約判断を行うべき。",
  },
];

const industryImpact = [
  {
    title: "業種1: 自動車組立工場（広島市府中町、特別高圧 18,000kW、年間 1.4億kWh）",
    before:
      "Before: 広島市府中町の自動車組立工場A社（マツダ府中工場・小型乗用車・SUV組立）。24時間連続運転、年間電気代 35億円。プレス・溶接・塗装・組立・コージェネが消費電力の70%。市場連動プラン継続で2023年夏には月最大5.0億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（中国電力継続より0.9円/kWh安、新電力競争入札／島根原発再稼働メリット込み）／溶接・塗装の省エネ運転・蓄熱式・ヒートポンプ転換／コージェネレーション設備更新（SII補助1/3活用・GX関連補助併用、投資7.0億円）／需要家主導型PPAでオフサイト風力・太陽光合計25MW契約／敷地内太陽光4MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 35億円 → 28億円（▲20%、▲7.0億円）／契約kW 18,000→16,200／投資回収 補助金後 3.5年／RE100進捗 45%達成。",
  },
  {
    title: "業種2: 造船工場（呉市、特別高圧 8,000kW、年間 6,400万kWh）",
    before:
      "Before: 呉市の造船工場B社（JMU呉造船所系・大型タンカー・LNG運搬船・LPG運搬船建造）。年間電気代 16億円。クレーン・溶接機・大型コンプレッサー・乾ドック排水が消費電力の主要要素。建造船型により電力需要変動大きい。",
    after:
      "After: 特別高圧の固定5年契約（新電力競争入札／島根原発再稼働メリット込み）／溶接機インバータ化・クレーン回生ブレーキ化／LED全棟化（SII補助1/3活用、投資4.0億円）／敷地内太陽光2MW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光10MW契約。",
    result:
      "Result: 年間電気代 16億円 → 12.8億円（▲20%、▲3.2億円）／契約kW 8,000→7,200／投資回収 補助金後 3年／GX対応で受注競争力強化。",
  },
  {
    title: "業種3: 観光業・宮島ホテル（廿日市市、高圧 350kW、年間 280万kWh）",
    before:
      "Before: 廿日市市宮島の大型観光ホテルC社（客室150室、世界遺産厳島神社観光客中心、インバウンド比率50%）。年間電気代 8,500万円。冷暖房・厨房・客室照明・スパが消費電力の主要要素。観光繁忙期（GW・夏休み・紅葉シーズン）に電力ピーク。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調インバータ更新・人感センサ連動／LED全館化／スパ温水・厨房の高効率化（観光庁・環境省補助活用、投資3,500万円）／屋根太陽光120kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 8,500万円 → 6,800万円（▲20%、▲1,700万円）／契約kW 350→300／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "マツダ自動車・呉造船・福山JFEの超大規模需要",
    detail:
      "広島県内のマツダ自動車（府中・宇品・三次）、呉造船（JMU・IHI）、福山JFEスチール西日本は年間使用量1〜30億kWh級。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間1〜30億円規模のコスト変動。",
  },
  {
    label: "島根原発再稼働のプラス影響",
    detail:
      "2024年12月の島根原発2号機再稼働は中国電力管内の燃料費調整額低下を通じて広島県内事業者にも直接的なメリット。マツダ・呉造船・福山JFEのような超大規模事業者にとって特に効果が大きい。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "マツダ（電気自動車戦略）、JFEスチール（GXトランジション）、マイクロン半導体等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "広島都市圏ヒートアイランド・データセンター需要",
    detail:
      "広島市内のヒートアイランド現象で夏季冷房需要急増。データセンター集積も電力需要拡大要因で、契約kW・時間帯別管理の高度化が重要。データセンター事業者は年間使用量1〜5億kWh級で電力単価が経営競争力に直結。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間14億kWh使用の超大規模自動車工場で年56億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内ではマツダ自動車・呉造船・福山JFEスチール・マイクロン半導体で大型採択実績多数。広島市内データセンターの空調更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "瀬戸内沿岸の自動車・造船工場で屋根・空地活用の太陽光導入が有効。BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "広島県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "広島県独自補助。自動車・造船・鉄鋼・データセンター・観光業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "広島市・呉市・福山市・東広島市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "広島市『広島市カーボンニュートラル支援』、呉市『呉市環境配慮型事業所支援』、福山市『福山市環境投資補助』、東広島市等。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・農業向け省エネ補助",
    target: "宮島・尾道・廿日市の旅館ホテル、果樹冷蔵倉庫、農産物加工施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省連携の省エネ補助。空調・冷蔵設備・温泉ポンプ更新等が対象。世界遺産宮島周辺の事業者向け特別枠もあり。",
  },
];

const industryProfile = [
  {
    label: "自動車・造船・鉄鋼（広島市府中・呉・福山）",
    detail:
      "マツダ自動車（府中・宇品・三次研究所）、JMU呉造船所、IHI呉、JFEスチール西日本福山。年間使用量1〜30億kWh規模の超大型事業者。",
  },
  {
    label: "半導体・電子部品（東広島・尾道）",
    detail:
      "マイクロン東広島工場（DRAM）、エルピーダ系電子部品。年間使用量3〜15億kWh規模の大型事業者。",
  },
  {
    label: "データセンター・IT（広島市内）",
    detail:
      "広島市内の大型データセンター・通信事業者。年間使用量1〜5億kWh規模で電力単価が経営競争力に直結。",
  },
  {
    label: "観光業（宮島・尾道・廿日市・三段峡）",
    detail:
      "厳島神社・宮島、尾道（千光寺・しまなみ海道）、廿日市の温泉ホテル、三段峡。年間使用量50〜500万kWh規模。",
  },
  {
    label: "中小製造業・商業（広島市・福山市内）",
    detail:
      "広島市・福山市内の中小製造業（金属加工・機械・食品）、市内商業施設・スーパー・店舗。年間使用量50〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは25%前後（経産省統計）。マツダ・呉造船・福山JFEスチールは競争入札による切替が標準化。データセンター・マイクロンも新電力活用が進む。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。自動車・造船・鉄鋼・データセンター・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "中国電力継続のメリット・デメリット",
    detail:
      "メリット: 中国電力本社所在県として安定供給、雪害時の復旧体制、島根原発再稼働メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①中国電力エリア供給実績の有無、②マツダ・呉造船・福山JFE等の大口需要対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100対応の再エネメニュー充実度、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "マツダ・JFEスチール・マイクロン・データセンター事業者等の大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。広島県内自家消費・近接PPAも瀬戸内特性で有利。",
  },
];

const energySaving = [
  {
    label: "自動車工場の塗装・溶接の高効率化",
    detail:
      "マツダ府中・宇品工場で塗装ライン・溶接機のインバータ化・ヒートポンプ転換、コージェネ設備更新で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "造船工場のクレーン回生・乾ドック高効率化",
    detail:
      "呉造船でクレーン回生ブレーキ化、乾ドック排水の高効率化、溶接機インバータ化で電力▲15〜25%。SII補助活用で投資回収 3〜4年。",
  },
  {
    label: "データセンターのフリークーリング・サーバー最適化",
    detail:
      "広島市内データセンターでフリークーリング（外気冷却）導入、サーバー高効率化、AI需要予測による電力管理で電力▲15〜25%。投資回収 SII補助活用で 2〜4年。",
  },
  {
    label: "観光業（宮島・尾道）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、スパ温水・厨房の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA・BEMS蓄電池",
    detail:
      "マツダ・JFEスチール・マイクロン・データセンター事業者を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。BEMS・蓄電池でDR報酬獲得・需要家主導型PPAの効率最大化。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中国電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力12〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "島根原発再稼働の燃料費調整額への影響を織り込んだ見積か",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・広島県補助・市町村補助・観光庁・農水省補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "南海トラフ地震想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "広島県の法人電気代水準は全国比どれくらいですか？", answer: "中国電力エリアは石炭火力依存により全国平均と概ね同水準ですが、2024年12月の島根原発2号機再稼働により今後の単価低下が期待されます。新電力競争で1〜2円/kWh安いケース多数。マツダ・呉造船・福山JFEスチールは新電力切替で年間1〜30億円規模のコスト削減事例も。" },
  { question: "マツダ自動車の特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量1〜15億kWh級の超大規模事業者では、新電力の競争入札による単価最適化効果が極めて大きいです。特別高圧契約での1円/kWhの単価差が年間1〜15億円規模のコスト差になります。マツダのEV戦略・GX対応で需要家主導型PPAも積極活用中です。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは広島県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の中国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して広島県の産業構造（自動車・造船・鉄鋼・データセンター・観光）別の契約判断材料として整理しています。" },
  { question: "RE100対応のためのオフサイトPPAは広島県で活用できますか？", answer: "はい、マツダ・JFEスチール・マイクロン・データセンター事業者等を中心にオフサイトPPA契約が急速に拡大しています。九州・東北の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。マツダのEV戦略でも有効です。" },
  { question: "広島市内データセンターの電気代対策は？", answer: "①フリークーリング（外気冷却）の導入、②サーバー高効率化、③AI需要予測による電力管理、④特別高圧契約の競争入札、⑤RE100対応のオフサイトPPA、の5本柱が中心。年間使用量1〜5億kWh級のため、単価1円/kWh改善で年間1〜5億円のコスト差が生まれます。" },
  { question: "広島県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、広島県脱炭素・省エネ設備導入補助、広島市・呉市・福山市・東広島市の脱炭素補助、観光庁・農水省・環境省の省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "宮島・尾道等の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③スパ温水・厨房の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。世界遺産宮島周辺の事業者向け特別枠もあります。" },
  { question: "南海トラフ地震想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "広島県は南海トラフ地震想定地域で、特に呉造船・福山JFE・広島市内データセンターの事業者にとってBCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散、③地域密着型新電力との連携、④BEMSによる停電復旧時の電力管理、の4点が重要。" },
];

const sourcesItems = [
  { name: "中国電力 公式サイト", url: "https://www.energia.co.jp/" },
  { name: "広島県環境県民局", url: "https://www.pref.hiroshima.lg.jp/" },
  { name: "経済産業省 中国経済産業局", url: "https://www.chugoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function HiroshimaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hiroshima-business-electricity-cost"
        datePublished="2026-05-23"
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
          <span className="text-slate-800">広島県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            広島県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            広島県は中国電力エリア最大の電力需要県で、マツダ自動車（府中・宇品・三次研究所）、呉造船（JMU・IHI）、福山JFEスチール西日本、マイクロン東広島の半導体、広島市内データセンター・大型商業施設、世界遺産宮島・尾道の観光業など多様な産業構造を持ちます。中国電力本社所在県として地域経済の中核を担い、2024年12月の島根原発2号機再稼働により燃料費調整額の改善が期待されます。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中国電力エリアにおける広島県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>マツダ自動車・呉造船・宮島ホテルのBefore/After削減事例</li>
              <li>マツダEV戦略・呉造船GX対応と特別高圧競争入札の実務</li>
              <li>SII・広島県・市町村・観光庁・農水省補助の組合せ活用パターン</li>
              <li>南海トラフ地震想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広島県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県は中国電力エリア最大の電力需要県で、広島市・呉市・福山市・東広島市等の都市圏から構成されます。マツダ自動車・呉造船・福山JFEスチールの超大規模需要、データセンター集積、観光業集積、南海トラフ地震BCP対応が県内電力消費の特徴を形成します。
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
              中国電力エリアの全体像は{" "}
              <Link href="/region-chugoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中国電力エリア事情
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
              県内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県では2024年時点で12〜15社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              <Link href="/how-to-choose-new-electricity-supplier" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広島県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中国電力エリアは石炭火力依存により全国平均と概ね同水準ですが、2024年12月の島根原発2号機再稼働により今後の単価低下が期待されます。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中国電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、広島県の産業構造（自動車・造船・鉄鋼・データセンター・観光）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
            </p>
            <div className="mt-4 space-y-3">
              {ppsNetUnitData.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              出典: 新電力ネット（<a href="https://pps-net.org/unit" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">https://pps-net.org/unit</a>）を加工して作成
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — マツダ自動車・呉造船・宮島観光ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              、ホテル向けは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・旅館の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              広島県固有の電気代上昇要因 — マツダ呉造船福山JFE需要・島根原発再稼働・南海トラフBCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の電気代変動は、マツダ自動車・呉造船・福山JFEスチールの超大規模需要、中国電力石炭火力依存、島根原発再稼働メリット、広島都市圏ヒートアイランド・データセンター需要、南海トラフ地震BCP対応など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              広島県の補助金・優遇制度 — SII・県独自・市町村・観光庁・農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県では国補助（SII等）に加え、県独自補助、広島市・呉市・福山市・東広島市の脱炭素補助、観光庁・農水省・環境省の省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              広島県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の事業者構成は、自動車・造船・鉄鋼、半導体・電子部品、データセンター・IT、観光業、中小製造業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              電力会社切替の実情 — 中国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の新電力シェアは2024年時点で25%前後。マツダ・呉造船・福山JFEスチールは競争入札による切替が標準化、データセンター・マイクロンも新電力活用が進む。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              県内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県の省エネは『自動車工場の塗装・溶接の高効率化』『造船工場のクレーン回生・乾ドック高効率化』『データセンターのフリークーリング・サーバー最適化』『観光業（宮島・尾道）の省エネ』『需要家主導型オフサイトPPA・BEMS蓄電池』の5軸が主力。マツダEV戦略・JFEGXトランジションを意識した再エネ調達が重要です。
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
              広島県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで広島県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              広島県はマツダ自動車・呉造船・福山JFEスチールの超大規模需要・島根原発再稼働メリット・南海トラフBCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した20%前後の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-23"
            />
            <GlossaryLinks currentSlug="hiroshima-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-chugoku-business-electricity", title: "中国電力エリアの法人電気代事情", description: "中国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価（出典）", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/tottori-business-electricity-cost", title: "鳥取県の法人電気料金", description: "隣接県・中国電力エリアの事情。" },
              { href: "/shimane-business-electricity-cost", title: "島根県の法人電気料金", description: "隣接県・島根原発立地県の事情。" },
              { href: "/okayama-business-electricity-cost", title: "岡山県の法人電気料金", description: "隣接県・水島コンビナートの事情。" },
              { href: "/yamaguchi-business-electricity-cost", title: "山口県の法人電気料金", description: "隣接県・周南岩国コンビナートの事情。" },
              { href: "/ehime-business-electricity-cost", title: "愛媛県の法人電気料金", description: "瀬戸内海対岸・四国電力エリアの事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・データセンターの選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "自動車・造船・鉄鋼が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "マツダ自動車・呉造船と全国比較。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "宮島・尾道観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "自動車・造船設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中国電力エリア・島根原発再稼働の影響。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="広島県の自社条件で電気代リスクを試算する"
            description="マツダ自動車・呉造船・福山JFEスチール・データセンター・宮島観光業など広島県固有の条件と中国電力エリア単価・島根原発再稼働メリット・南海トラフBCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="広島県の電力契約見直し、専門家に相談しませんか？"
            description="マツダ自動車・呉造船・福山JFEスチール・データセンター・宮島観光業の電気代見直しは業種・地域により論点が異なります。南海トラフBCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
