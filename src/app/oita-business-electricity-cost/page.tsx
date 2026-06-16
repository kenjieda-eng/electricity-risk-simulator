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
  "大分県の法人電気料金完全ガイド｜九州電力エリア単価分析・大分臨海工業地帯・別府湯布院観光業・八丁原地熱の契約最適化";
const pageDescription =
  "大分県の法人電気料金を地域特化で解説。九州電力エリアの単価水準を業種別に再加工して提示し、大分臨海工業地帯（鉄鋼・化学コンビナート）、別府・湯布院温泉観光業、八丁原地熱発電（全国最大級）、大分市の都市圏オフィス・物流の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "大分県 法人電気料金",
    "九州電力 高圧 単価",
    "大分臨海工業地帯 鉄鋼化学 電気代",
    "別府 湯布院 観光業 電気代",
    "八丁原地熱発電 大分",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/oita-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/oita-business-electricity-cost",
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
    label: "九州電力エリアと大分県の系統",
    detail:
      "大分県は九州電力エリアに属し、八丁原地熱発電（全国最大級、設備容量11万kW）の立地県。県内総電力需要は約100億kWhで、大分臨海工業地帯（鉄鋼・化学・LNG基地）が約35%、別府・湯布院温泉観光業が約10%、大分市の都市圏オフィス・商業が約20%、農業・林業（しいたけ・カボス）が約10%、住宅・小規模事業者が約25%の構成。",
  },
  {
    label: "電源構成 — 九州電力エリアと地熱発電",
    detail:
      "九州電力管内は原発再稼働（玄海3・4号機、川内1・2号機）と太陽光大量導入により、エリア電源構成は原子力約35%、太陽光等再エネ約20%（地熱含む）、LNG火力約25%、石炭火力約15%、その他5%。大分県は八丁原地熱発電（九重町）・大岳地熱発電等の地熱発電集積（日本一の地熱資源県）。県内には九電の新大分火力（LNG）・大分共同火力（石炭・新日鐵住金大分共同）が立地。",
  },
  {
    label: "気象条件 — 温暖湿潤・別府湾の海洋気候・由布岳の寒暖差",
    detail:
      "県内は温暖湿潤気候で夏季高温多湿、冬季は穏やか。年間冷房度日（CDD24）1,500〜1,700、暖房度日400〜600（湯布院・九重等の山間部は本県平均より暖房需要大）。別府湾の海洋気候の影響で塩害対策も経営課題。観光業の年中冷房・暖房需要も高水準。",
  },
  {
    label: "需給ひっ迫 — 太陽光出力制御と地熱安定供給",
    detail:
      "九州電力管内は太陽光大量導入により昼間余剰、夕方ひっ迫の二重構造。大分県の地熱発電は24時間安定供給のベースロード電源として系統安定に貢献。蓄電池併設による昼夜シフトと地熱の安定供給を組合せた電力契約戦略が県内事業者の競争優位。",
  },
  {
    label: "県内産業構造 — 鉄鋼化学コンビナート・温泉観光・地熱・物流",
    detail:
      "大分臨海工業地帯（大分市・佐伯市）は新日鐵住金大分製鉄所、JX大分石油化学、昭和電工大分、九州電力新大分火力、大分共同火力、LNG基地等が立地。別府温泉（全国2位温泉源数）、湯布院温泉、九重連山・由布岳の観光業。八丁原地熱発電（九重町、全国最大級）・大岳地熱発電。大分港の物流（コンテナ・RORO）。しいたけ（全国1位）、カボス（全国1位）、農業・林業。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（送配電は九州電力送配電）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大、規制料金・自由料金両方を提供。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。2023年6月に規制料金値上げを実施したが、原発稼働と地熱発電により値上げ幅は東日本各社より小幅に留まった。",
  },
  {
    name: "九電みらいエナジー・西部ガス系新電力",
    role: "九州電力グループ系・地域密着型",
    detail:
      "大分市・別府市・湯布院町の地域密着型新電力。九電グループおよび西部ガス系の電気・ガスセット契約で都市圏オフィス・観光業向け営業力強い。地熱発電由来のCO2フリー電源メニューも展開。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき・Looopでんき",
    role: "全国系新電力",
    detail:
      "九州電力エリアで法人向け高圧契約に積極展開。大分臨海工業地帯の特高契約や別府湯布院観光業の高圧契約で実績。固定単価3年契約や燃料費調整額上限ありメニューを展開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。大分県内の鉄鋼・化学大手・大型物流施設・観光業大手の大口需要にも対応。",
  },
  {
    name: "地域系・地熱由来新電力",
    role: "地域密着型",
    detail:
      "大分県内のガス系新電力、地熱発電由来のCO2フリー電源を扱う地域密着型新電力。観光業・中小事業者向けの省エネ提案や脱炭素メニューも展開。",
  },
  {
    name: "新電力市場の構造",
    role: "市場動向",
    detail:
      "大分県の新電力シェアは2024年時点で約20%（全国平均並み）。大分臨海工業地帯の特高大口と別府湯布院観光業大手で新電力切替が活発。地熱由来CO2フリー電源を活用したRE100対応メニューが県固有の競争優位。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "九州電力『高圧電力A』の電力量料金は16〜20円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+1.5〜+2.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は22〜27円/kWhレンジ。全国平均に近い水準で、新電力切替により1〜2円/kWh改善余地あり。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金14〜17円/kWh+調整項目。大分県内では新日鐵住金大分製鉄所、JX大分石油化学、昭和電工大分、大型観光リゾート（別府ハーモニーランド・湯布院温泉郷）が対象。本州エリアより1〜2円/kWh安い水準で、競争入札による更なる1〜3円/kWh削減余地あり。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "九州電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜21円/kWh。大分市・別府市・湯布院町の中小オフィス・観光業中堅・農業法人は低圧電灯中心。",
  },
  {
    label: "地熱由来CO2フリー電源の活用余地",
    detail:
      "大分県は八丁原地熱発電（11万kW、全国最大級）・大岳地熱発電等の地熱集積。九電みらいエナジー等の地熱由来CO2フリー電源メニューを活用することで、RE100対応・CO2削減・電気代削減を同時に実現できる県固有の競争優位。",
  },
];

const ppsNetUnitData = [
  {
    label: "九州電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、九州電力エリアの特別高圧電力単価は2024年度実績で約14〜17円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より2〜3円/kWh安く、原発稼働と地熱発電の影響が反映されている。大分県内の新日鐵住金大分・JX大分石油化学・昭和電工大分にとっては、競争入札による更なる1〜3円/kWh削減で年間1〜10億円規模のコスト削減余地。",
  },
  {
    label: "九州電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は16〜20円/kWh、本州エリアより1〜2円/kWh安い。県内中規模事業者（別府湯布院温泉観光業、大分市内オフィス・データセンター、大分港物流中堅）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、大分県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替で年間100〜300万円規模のコスト削減が見込める。",
  },
  {
    label: "九州電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯17〜21円/kWhの水準で、全国平均と同水準。県内中小事業者（中小商店・農業法人・温泉宿中堅）は新電力切替で年間5〜30万円規模の削減余地が中心。太陽光自家消費・蓄電池併設で更なる効果。",
  },
  {
    label: "県内産業構造との接続 — 鉄鋼化学・観光・地熱・物流に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを大分県の産業構造に紐づけて再加工すると、①新日鐵住金大分・JX大分石油化学・昭和電工大分の特高契約は競争入札＋自家発電・コージェネ最適化＋地熱由来CO2フリーで年間1〜10億円の総合削減効果、②別府湯布院温泉観光業の高圧契約は新電力切替＋屋根太陽光＋蓄電池＋地熱由来CO2フリー電源で年間500万〜3,000万円の削減余地、③農業法人・物流の高圧契約は新電力切替＋LED化＋空調最適化で年間100〜500万円の削減余地、という3層構造で契約判断を行うべき。地熱由来CO2フリー電源活用が県内事業者の特異的競争優位。",
  },
];

const industryImpact = [
  {
    title: "業種1: 鉄鋼・化学コンビナート（大分市、特別高圧 30,000kW、年間 2.4億kWh)",
    before:
      "Before: 大分市の大型鉄鋼・化学コンビナートA社（新日鐵住金大分製鉄所・JX大分石油化学級、連続稼働、転炉・電炉・圧延・化学反応槽運転）。年間電気代 46億円。電炉・圧延機・冷却ポンプ・コンプレッサー・大型反応槽電熱が消費電力の70%。九電継続で固定費・燃料費調整額の変動リスクあり。",
    after:
      "After: 特別高圧の競争入札＋地熱由来CO2フリー電源契約（複数全国系新電力で2.5円/kWh削減）／屋根太陽光12MW・敷地内太陽光5MW・蓄電池15MWh導入（需要家主導型PPA補助・SII補助併用、投資35億円）／電炉インバータ更新・廃熱回収高度化／コージェネ更新／BEMS全工程導入。",
    result:
      "Result: 年間電気代 46億円 → 32.2億円（▲30%、▲13.8億円）／契約kW 30,000→28,000／太陽光自家消費比率 20%＋地熱由来15%でRE100進捗 35%／投資回収 補助金後 3〜4年／CO2 ▲25%。",
  },
  {
    title: "業種2: 別府温泉観光リゾート（別府市、高圧 1,500kW、年間 1,200万kWh）",
    before:
      "Before: 別府市の大型温泉観光リゾートB社（客室350室、温泉・レストラン・スパ・大型イルミネーション併設、国内外観光客対応）。年間電気代 3.6億円。冷房（夏季）・暖房（冬季）・温泉ポンプ・客室照明・大型イルミネーションが消費電力の80%。",
    after:
      "After: 高圧の固定3年契約＋地熱由来CO2フリー電源契約（地域系新電力で1.8円/kWh削減）／屋根太陽光1.5MW・蓄電池3MWh導入（SII補助・大分県補助・観光庁補助併用、投資6億円）／客室空調インバータ更新／LED全館化・イルミネーションLED化／温泉ポンプインバータ化／BEMS導入。",
    result:
      "Result: 年間電気代 3.6億円 → 2.52億円（▲30%、▲1.08億円）／契約kW 1,500→1,350／太陽光自家消費比率 25%＋地熱由来20%でRE100進捗 45%／投資回収 補助金後 4〜5年。",
  },
  {
    title: "業種3: 大分港物流・データセンター（大分市東部、高圧 700kW、年間 560万kWh）",
    before:
      "Before: 大分市東部の物流・データセンター複合C社（24時間稼働、冷蔵・常温倉庫＋データセンター併設）。年間電気代 1.7億円。冷凍冷蔵設備・サーバー・データセンター空調・荷役機械・倉庫照明が消費電力の主要要素。",
    after:
      "After: 高圧の固定3年契約＋地熱由来CO2フリー電源契約（全国系新電力で1.5円/kWh削減）／屋根太陽光700kW・蓄電池1.5MWh導入（SII補助・大分県補助併用、投資2.5億円）／CO2冷媒インバータ化／フリークーリング導入／LED全館化／BEMS導入。",
    result:
      "Result: 年間電気代 1.7億円 → 1.19億円（▲30%、▲5,100万円）／契約kW 700→630／太陽光自家消費比率 25%＋地熱由来20%でRE100進捗 45%／投資回収 補助金後 4〜5年。",
  },
];

const costFactors = [
  {
    label: "鉄鋼化学コンビナートの連続稼働",
    detail:
      "新日鐵住金大分・JX大分石油化学・昭和電工大分等の連続稼働が標準。年間2.4億kWh使用の大型コンビナートで電気代46億円規模、燃料費調整額1円/kWh変動で年2.4億円の差として経営に直接影響。コージェネ更新・廃熱回収高度化による削減効果大。",
  },
  {
    label: "別府湯布院温泉観光業の年中需要",
    detail:
      "別府温泉（全国2位温泉源数）・湯布院温泉の年中観光需要で、冷暖房・温泉ポンプ・客室照明の電力需要が高水準。冬季イルミネーション需要も加わり、季節変動の大きい契約が課題。",
  },
  {
    label: "八丁原地熱発電と地熱由来CO2フリー電源",
    detail:
      "大分県は八丁原地熱発電（11万kW、全国最大級）・大岳地熱発電等の地熱集積。九電みらいエナジー等の地熱由来CO2フリー電源メニューを活用することで、RE100対応・CO2削減・電気代削減を同時実現可能。",
  },
  {
    label: "太陽光出力制御と地熱の組合せ",
    detail:
      "九州電力管内は太陽光大量導入により、春秋の昼間に出力制御が頻発。大分県内事業者は太陽光自家消費＋蓄電池＋地熱由来CO2フリー電源の三段構成で電気代削減・RE100対応を両立可能。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間2.4億kWh使用の鉄鋼化学コンビナートで年9.6億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では大分臨海工業地帯の大型設備更新で大型採択実績多数。別府湯布院観光業のLED・空調更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "大分県は太陽光出力制御頻発エリア＋地熱発電集積として、自家消費・近接PPA・地熱由来CO2フリー電源の組合せ効果が大きい。",
  },
  {
    name: "大分県脱炭素・地熱活用補助",
    target: "県内事業者の高効率設備・再エネ設備導入、地熱由来電源活用",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "大分県独自補助。鉄鋼化学コンビナート・観光業・農業の脱炭素化を支援する大型補助あり。地熱由来CO2フリー電源活用支援が県固有の優遇制度。",
  },
  {
    name: "大分市・別府市・由布市の脱炭素補助",
    target: "市町村内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "大分市『大分市カーボンニュートラル支援』、別府市『温泉観光地脱炭素支援』、由布市『湯布院型脱炭素支援』。市町村独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・農業向け省エネ補助",
    target: "観光リゾート・温泉宿、農業法人（しいたけ・カボス）の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省・九州経済産業局連携の省エネ補助。空調・LED・温泉ポンプ・冷蔵設備更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "鉄鋼・化学コンビナート（大分市臨海部）",
    detail:
      "新日鐵住金大分製鉄所、JX大分石油化学、昭和電工大分、大分共同火力、LNG基地。年間使用量1,000万〜3億kWh規模。連続稼働・大量電力消費の特性。",
  },
  {
    label: "温泉観光業（別府市・由布市・九重町）",
    detail:
      "別府温泉（全国2位温泉源数）、湯布院温泉、九重連山・由布岳の観光業。年間使用量200万〜2,000万kWh規模。",
  },
  {
    label: "地熱発電関連事業者（九重町・別府市）",
    detail:
      "八丁原地熱発電・大岳地熱発電の運営・保守事業者、地熱関連サプライヤー。年間使用量50万〜500万kWh規模。地熱由来CO2フリー電源の供給拠点。",
  },
  {
    label: "オフィス・物流・データセンター（大分市）",
    detail:
      "大分市中心部のオフィス、大分港物流、データセンター。年間使用量100万〜1,500万kWh規模。",
  },
  {
    label: "農業・林業・中小製造業（県全域）",
    detail:
      "しいたけ全国1位、カボス全国1位、農業（米・麦・大豆）、林業（杉檜）、中小製造業（食品・建設資材）。年間使用量50万〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは約20%（全国平均並み）。大分臨海工業地帯の特高大口と別府湯布院観光業大手で新電力切替が活発。地熱由来CO2フリー電源を活用したRE100対応メニューが県固有の競争優位として活用が拡大中。",
  },
  {
    label: "市場連動プランの選択肢",
    detail:
      "九州電力エリアは太陽光出力制御で昼間スポット価格が低下する一方、夕方ひっ迫で高騰する変動が大きい。市場連動プランの選択肢は本州エリアと同等にあるが、鉄鋼化学・観光業の連続稼働事業者は固定プランが安全。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 原発・地熱稼働による安定供給と燃料費調整額の上振れ抑制、地熱由来CO2フリー電源、災害時の復旧体制。デメリット: 競争入札と比較した単価高、太陽光出力制御による余剰活用余地の未活用。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①九州電力エリア供給実績の有無、②鉄鋼化学向け連続稼働対応の信頼性、③固定単価期間の確実性、④燃料費調整額の有無・上限、⑤地熱由来CO2フリー電源・太陽光自家消費・PPA連携メニューの充実度、の5点が県内では特に重要。",
  },
  {
    label: "地熱由来CO2フリー電源の活用優位性",
    detail:
      "大分県は地熱由来CO2フリー電源の供給拠点として、九電みらいエナジー・地域系新電力経由でCO2フリー電源を比較的安価に調達可能。観光業・データセンター・大手企業のRE100対応に直結する県固有の特異的競争優位。",
  },
];

const energySaving = [
  {
    label: "鉄鋼化学の電炉インバータ・廃熱回収・コージェネ",
    detail:
      "大分市臨海部の鉄鋼・化学コンビナートで電炉インバータ更新、廃熱回収高度化、コージェネ更新、BEMS全工程導入で電力▲25〜35%。SII補助・需要家主導型PPA補助の組合せ活用で投資回収 3〜4年。",
  },
  {
    label: "別府湯布院温泉観光業のLED・温泉ポンプ最適化",
    detail:
      "別府市・由布市の温泉観光業でLED全館化・イルミネーションLED化、客室空調インバータ更新、温泉ポンプインバータ化、屋根太陽光導入で電力▲25〜35%。SII補助・観光庁補助活用で投資回収 4〜5年。",
  },
  {
    label: "地熱由来CO2フリー電源のRE100対応",
    detail:
      "県内の地熱由来CO2フリー電源を活用したRE100対応メニューにより、観光業・データセンター・大手企業のCO2削減と電気代削減を両立。九電みらいエナジー・地域系新電力経由で調達。",
  },
  {
    label: "農業・林業の省エネ化",
    detail:
      "しいたけ栽培・カボス・米倉庫等でCO2冷媒インバータ化、断熱性能改善、LED化、太陽光導入で電力▲25〜40%。投資回収 SII補助・農水省補助活用で 3〜5年。",
  },
  {
    label: "屋根太陽光＋蓄電池＋地熱由来三段構成",
    detail:
      "県内全業種で屋根太陽光＋蓄電池＋地熱由来CO2フリー電源の三段構成で電気代▲25〜35%、RE100進捗40〜50%達成。県内事業者の競争優位を最大化する戦略。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "鉄鋼化学コンビナートの連続稼働（24時間×365日）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "九州電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力（九電グループ系・西部ガス系・全国系・地熱由来系）からの相見積を取得したか",
  "地熱由来CO2フリー電源契約の活用可否を確認したか（県固有の競争優位）",
  "太陽光自家消費・需要家主導型PPAの試算を実施したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "蓄電池併設による太陽光出力制御回避・DR参加・BCP対応の試算を実施したか",
  "SII補助・大分県補助・大分市別府市由布市補助・観光庁農水省補助の併用可否を確認したか",
  "市場連動プランと固定プランの選択肢を鉄鋼化学・観光連続稼働の自社特性で比較したか",
  "災害時（台風・水害・地震）でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "大分県の法人電気代水準は全国比どれくらいですか？", answer: "九州電力エリアは原発稼働と地熱発電の影響で本州エリアより1〜2円/kWh安い水準を維持しています。大分県内法人の実質単価は22〜27円/kWh（高圧）が標準帯域で、新電力切替により1〜2円/kWh改善余地があります。鉄鋼化学コンビナートの特高契約は競争入札で年間1〜10億円規模の削減も可能です。" },
  { question: "大分県の地熱由来CO2フリー電源はどのように活用できますか？", answer: "大分県は八丁原地熱発電（11万kW、全国最大級）・大岳地熱発電等の地熱集積で、九電みらいエナジー等が地熱由来CO2フリー電源メニューを提供しています。RE100対応・CO2削減・電気代削減を同時実現できる県固有の競争優位で、観光業・データセンター・大手企業の脱炭素戦略に直結します。地熱由来15〜20%＋太陽光自家消費20〜25%でRE100進捗40〜50%達成が可能です。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは大分県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の九州電力エリアの単価データを参考に、自社の現契約単価と本州エリアとの差を定量化できます。本ページではこのデータを再加工して大分県の産業構造（鉄鋼化学・観光・地熱・物流）別の契約判断材料として整理しています。地熱由来CO2フリー電源活用が県内事業者の特異的競争優位を最大化します。" },
  { question: "大分臨海工業地帯の電気代対策で最も効果的なのは？", answer: "①特別高圧の競争入札＋地熱由来CO2フリー電源契約（複数全国系新電力で2〜3円/kWh削減）、②屋根太陽光10〜15MW＋蓄電池の大規模導入（需要家主導型PPA補助・SII補助の組合せ活用）、③電炉インバータ更新、④廃熱回収高度化、⑤コージェネ更新、の5本柱が中心。太陽光自家消費＋地熱由来で年間電気代を30%削減＋RE100進捗35%達成可能です。" },
  { question: "別府湯布院観光業でも電気代削減の選択肢はありますか？", answer: "はい、新電力切替＋地熱由来CO2フリー電源＋屋根太陽光＋蓄電池の組合せが最も効果的です。SII補助・観光庁補助・大分県補助の組合せ活用で投資回収4〜5年が目安。LED全館化・温泉ポンプインバータ化・空調最適化との組合せで年間電気代を30%削減＋RE100対応も可能です。" },
  { question: "大分県で活用できる省エネ・再エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、大分県脱炭素・地熱活用補助、大分市・別府市・由布市の脱炭素補助、観光業・農業向け省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。地熱由来活用支援が県固有の優遇制度です。" },
  { question: "大分港物流・データセンター事業者の電気代対策は？", answer: "①新電力切替＋地熱由来CO2フリー電源契約、②屋根太陽光＋蓄電池導入、③CO2冷媒インバータ化、④フリークーリング導入、⑤LED全館化＋BEMS導入、の5本柱が中心。大分港周辺の物流・データセンターでは、太陽光自家消費比率25%＋地熱由来20%で年間電気代を30%削減＋RE100進捗45%が可能です。" },
  { question: "地熱発電は大分県の電力供給にどう影響しますか？", answer: "大分県の八丁原地熱発電（11万kW、全国最大級）・大岳地熱発電は24時間安定供給のベースロード電源として系統安定に貢献しています。県内事業者は地熱由来CO2フリー電源を比較的安価に調達でき、RE100対応・CO2削減・電気代削減を同時実現できる県固有の競争優位として活用できます。観光業・データセンター・大手企業の脱炭素戦略に直結する戦略電源です。" },
];

const sourcesItems = [
  { name: "九州電力 公式サイト", url: "https://www.kyuden.co.jp/" },
  { name: "大分県環境部", url: "https://www.pref.oita.jp/" },
  { name: "九州経済産業局", url: "https://www.kyushu.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function OitaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/oita-business-electricity-cost"
        datePublished="2026-05-24"
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
          <span className="text-slate-800">大分県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            大分県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            大分県は九州電力エリアに属し、八丁原地熱発電（全国最大級・11万kW）の立地県として地熱由来CO2フリー電源活用が県固有の特異的競争優位です。大分臨海工業地帯（新日鐵住金大分・JX大分石油化学・昭和電工大分の鉄鋼化学コンビナート）、別府温泉（全国2位温泉源数）・湯布院温泉の観光業、しいたけ・カボス全国1位の農業、大分市の都市圏オフィス・物流と多様な産業構造を持ちます。原発稼働メリット＋太陽光出力制御活用＋地熱由来CO2フリー電源の三段構成で電気代削減＋RE100対応を両立する契約最適化戦略が主流です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-24" updatedAt="2026-05-24" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>九州電力エリアの本州より安い電気代水準と地熱発電集積メリット（pps-net.org/unitデータ加工）</li>
              <li>大分臨海鉄鋼化学・別府温泉観光業・大分港物流のBefore/After削減事例</li>
              <li>地熱由来CO2フリー電源＋太陽光自家消費＋蓄電池の三段構成戦略</li>
              <li>SII・大分県・大分市別府市由布市・観光庁農水省補助の組合せ活用</li>
              <li>地熱安定供給活用と原発稼働メリットによる電力契約最適化</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県は九州電力エリアに属し、八丁原地熱発電（全国最大級）の立地県。大分臨海工業地帯の鉄鋼化学コンビナート、別府・湯布院温泉観光業、地熱発電関連、大分市の都市圏オフィス・物流が県内電力消費の中核を形成します。地熱由来CO2フリー電源活用が県固有の特異的競争優位です。
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
              九州電力エリアの全体像は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                九州電力エリア事情
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
              大分県では九州電力が最大シェアを持ちますが、2024年時点で複数の新電力が法人向け高圧で活発に営業中です。九州電力グループ系、西部ガス系、全国系、地域・地熱由来系の4カテゴリが主軸となります。地熱由来CO2フリー電源メニューが県固有の競争優位として活用されています。
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
              <Link href="/how-to-choose-new-electricity-supplier" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九州電力エリアは原発稼働＋地熱発電メリットにより本州より1〜2円/kWh安い水準を維持。地熱由来CO2フリー電源活用で更なる差別化が可能。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              九州電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、大分県の産業構造（鉄鋼化学・観光・地熱・物流）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。地熱由来CO2フリー電源活用が県内事業者の特異的競争優位の中心です。
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
              業種別影響度3件 — 大分臨海鉄鋼化学・別府温泉観光業・大分港物流（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の主力業種3つで、契約見直し＋太陽光自家消費＋蓄電池＋地熱由来CO2フリー電源の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。地熱由来CO2フリー電源活用により電気代削減＋RE100進捗40〜50%達成が可能です。
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
              <Link href="/steel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">鉄鋼業の電気料金見直し</Link>
              、観光業向けは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・旅館の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大分県固有の電気代上昇要因 — 鉄鋼化学連続稼働・地熱発電・観光業需要
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の電気代変動は、鉄鋼化学コンビナートの連続稼働、別府湯布院温泉観光業の年中需要、八丁原地熱発電と地熱由来CO2フリー電源活用、太陽光出力制御と地熱の組合せ、再エネ賦課金など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直し・太陽光自家消費・地熱由来電源活用の優先順位付けが可能になります。
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
              大分県の補助金・優遇制度 — SII・県独自（地熱活用）・市町村・観光庁農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県では国補助（SII等）に加え、県独自補助（地熱活用支援が県固有）、大分市・別府市・由布市の脱炭素補助、観光業・農業向け省エネ補助が組合せ可能です。最大3〜4補助の組合せで投資回収を1〜2年短縮できます。
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
              大分県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の事業者構成は、鉄鋼・化学コンビナート、温泉観光業、地熱発電関連事業者、オフィス・物流・データセンター、農業・林業・中小製造業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 九州電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の新電力シェアは2024年時点で約20%（全国平均並み）。大分臨海工業地帯の特高大口と別府湯布院観光業大手で新電力切替が活発です。地熱由来CO2フリー電源を活用したRE100対応メニューが県固有の競争優位として活用が拡大中です。
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
              県内事業者の節電・省エネ・再エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県の電気代対策は『鉄鋼化学の電炉インバータ・廃熱回収・コージェネ』『別府湯布院観光業のLED・温泉ポンプ最適化』『地熱由来CO2フリー電源のRE100対応』『農業・林業の省エネ化』『屋根太陽光＋蓄電池＋地熱由来三段構成』の5軸が主力。地熱由来活用で年間電気代を30%削減＋RE100進捗40〜50%達成する戦略が標準化しています。
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
              大分県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や地熱由来電源・太陽光投資の判断材料が下がります。地熱由来CO2フリー電源活用が県固有の特異的競争優位です。
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
              シミュレーターで大分県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大分県は地熱由来CO2フリー電源活用が特徴的なエリアです。シミュレーターで自社条件における上振れ幅を試算し、太陽光自家消費＋蓄電池＋地熱由来電源の三段構成・新電力競争入札・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>鉄鋼化学コンビナートの連続稼働の影響額を試算する</li>
              <li>太陽光自家消費＋蓄電池＋地熱由来電源の組合せ効果を試算する</li>
              <li>事例で示した30%前後の削減レンジ・RE100進捗40〜50%の自社適用可能性を見立てる</li>
              <li>競争入札・DR参加・PPA契約の経済性を評価する</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-24"
            />
            <GlossaryLinks currentSlug="oita-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/fukuoka-business-electricity-cost", title: "福岡県の法人電気料金", description: "九州電力エリア・北九州工業地帯の事情(参考)。" },
              { href: "/saga-business-electricity-cost", title: "佐賀県の法人電気料金", description: "九州電力エリア・有田焼窯業の事情(参考)。" },
              { href: "/nagasaki-business-electricity-cost", title: "長崎県の法人電気料金", description: "九州電力エリア・造船業・離島電力の事情(参考)。" },
              { href: "/kumamoto-business-electricity-cost", title: "熊本県の法人電気料金", description: "九州電力エリア・TSMC進出・農業の事情(参考)。" },
              { href: "/miyazaki-business-electricity-cost", title: "宮崎県の法人電気料金", description: "九州電力エリア・農業畜産・太陽光の事情(参考)。" },
              { href: "/kagoshima-business-electricity-cost", title: "鹿児島県の法人電気料金", description: "九州電力エリア・川内原発・焼酎産業の事情(参考)。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "鉄鋼化学・観光連続稼働事業者の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "鉄鋼化学・観光が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "別府温泉・湯布院観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "電炉・コージェネ・LED・空調更新の主力補助金。" },
              { href: "/onsite-ppa-explained", title: "オンサイトPPA(自家消費型太陽光)", description: "太陽光自家消費＋蓄電池の組合せ戦略。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="大分県の自社条件で電気代リスクを試算する"
            description="新日鐵住金大分・JX大分石油化学・昭和電工大分等の鉄鋼化学コンビナート、別府温泉・湯布院温泉の観光業、大分港物流・データセンターなど大分県固有の条件と九州電力エリア単価・地熱由来CO2フリー電源活用・太陽光出力制御活用を踏まえ、シミュレーターで自社の上振れリスクと太陽光自家消費＋蓄電池＋地熱由来三段構成による削減余地を試算できます。"
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
            heading="大分県の電力契約見直し、専門家に相談しませんか？"
            description="新日鐵住金大分・JX大分石油化学・昭和電工大分等の鉄鋼化学コンビナート、別府温泉・湯布院温泉の観光業、大分港物流・データセンターの電気代見直しは業種・地域により論点が異なります。地熱由来CO2フリー電源活用・RE100対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
