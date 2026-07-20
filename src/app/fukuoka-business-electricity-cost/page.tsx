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
  "福岡県の法人電気料金完全ガイド｜九州電力エリア単価分析・北九州工業地帯・博多都市圏オフィス・物流の契約最適化";
const pageDescription =
  "福岡県の法人電気料金を地域特化で解説。九州電力エリアの単価水準を業種別に再加工して提示し、北九州工業地帯（鉄鋼・化学・自動車）、博多都市圏のオフィス・商業集積、博多港・北九州港の物流、福岡空港周辺のサービス業の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "福岡県 法人電気料金",
    "九州電力 高圧 単価",
    "北九州工業地帯 電気代",
    "博多都市圏 オフィス 電気代",
    "福岡 物流 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/fukuoka-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fukuoka-business-electricity-cost",
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
    label: "九州電力エリアと福岡県の系統",
    detail:
      "福岡県は九州電力エリアに属し、本州との関門連系線（4回線、運用容量274万kW）で連系。県内総電力需要は約450億kWhで九州エリア最大、北九州工業地帯（鉄鋼・化学・自動車）が約30%、博多都市圏（オフィス・商業・データセンター）が約30%、福岡空港周辺・物流・サービス業が約20%、住宅・小規模事業者が約20%の構成。",
  },
  {
    label: "電源構成 — 九州電力エリアの太陽光大量導入と原発再稼働",
    detail:
      "九州電力管内は原発再稼働（玄海3・4号機、川内1・2号機）と太陽光大量導入により、エリア電源構成は原子力約35%、太陽光等再エネ約20%、LNG火力約25%、石炭火力約15%、その他5%。太陽光出力制御（カット）が頻発しており、春秋の昼間に余剰電力が発生。福岡県内には九電の苅田火力（石炭・LNG）、新小倉火力（LNG）、相浦火力（石油・廃止予定）が立地。",
  },
  {
    label: "気象条件 — 温暖湿潤・夏季猛暑・冬季穏やか",
    detail:
      "県内は温暖湿潤気候で夏季猛暑日多発、冬季は穏やか。年間冷房度日（CDD24）1,500〜1,800（全国上位）、暖房度日400〜600（全国下位）。夏季ピーク需要が冬季を上回り、特に7〜9月の最大需要時間帯の電気代が経営課題。福岡市・北九州市の都市圏ヒートアイランド現象も加わり、商業施設・オフィスの空調需要が高水準。",
  },
  {
    label: "需給ひっ迫 — 太陽光出力制御と関門連系線活用",
    detail:
      "九州電力管内は太陽光大量導入により昼間余剰、夕方ひっ迫の二重構造。関門連系線で本州へ送電する一方、需給ひっ迫時には逆に本州から受電。県内事業者には太陽光出力制御対応のDR（デマンドレスポンス）参加や蓄電池併設による昼夜シフトの機会が広がっている。",
  },
  {
    label: "県内産業構造 — 北九州工業地帯・博多都市圏・物流・空港経済",
    detail:
      "北九州工業地帯（八幡・戸畑・若松・小倉）は日本製鉄八幡製鉄所、三菱化学黒崎、TOTO小倉、安川電機、日産自動車九州（苅田）、トヨタ自動車九州（宮田）、ダイハツ九州（中津工場連携）等が立地。博多都市圏（福岡市・春日市・大野城市）はオフィス・商業・データセンター・サービス業。博多港（コンテナ・RORO）、北九州港、福岡空港（旅客・貨物）の物流拠点。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（送配電は九州電力送配電）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大、規制料金・自由料金両方を提供。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。2023年6月に規制料金値上げを実施したが、原発稼働により値上げ幅は東日本各社より小幅に留まった。",
  },
  {
    name: "九電みらいエナジー・西部ガス系新電力",
    role: "九州電力グループ系・地域密着型",
    detail:
      "福岡市・北九州市の地域密着型新電力。九電グループおよび西部ガス系の電気・ガスセット契約で都市圏オフィス・商業向け営業力強い。県内火力・再エネとの連携でメニュー展開。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき・Looopでんき",
    role: "全国系新電力",
    detail:
      "九州電力エリアで法人向け高圧契約に積極展開。北九州工業地帯の特高契約や博多都市圏のオフィス・商業・データセンターで実績多数。固定単価3年契約や燃料費調整額上限ありメニューを展開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。福岡県内の大型物流施設・データセンター・北九州工業地帯の大口需要にも対応。",
  },
  {
    name: "地域系・ガス系新電力",
    role: "地域密着型",
    detail:
      "西部ガス『でんきトクトクプラン』、北九州市内ガス系、福岡商工会議所連携系の地域密着型新電力。中小事業者向けの省エネ提案やCO2フリー電源メニューも展開。",
  },
  {
    name: "新電力市場の構造",
    role: "市場動向",
    detail:
      "福岡県の新電力シェアは2024年時点で約25%（全国平均並み）。北九州工業地帯の特高大口と博多都市圏のオフィス・商業で新電力切替が活発。一方、中小事業者は九州電力継続が多数派。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金14〜17円/kWh+調整項目。福岡県内では北九州工業地帯の大口需要家（日本製鉄、三菱化学、TOTO、安川電機、日産・トヨタ・ダイハツ系自動車）、博多都市圏の大型データセンターが対象。本州エリアと同水準で、競争入札による1〜3円/kWh削減余地あり。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "九州電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜21円/kWh。博多都市圏の中小オフィス・北九州市内の中小事業者・福岡空港周辺のサービス業は低圧電灯中心。",
  },
  {
    label: "原発再稼働メリットと太陽光出力制御",
    detail:
      "九州電力は玄海・川内原発の安定稼働により、燃料費調整額の上振れリスクが本州各社より低い。一方、太陽光出力制御の頻発により、春秋昼間の余剰電力を活用するDR参加・蓄電池併設・PPA契約の競争余地が大きい。",
  },
];

const ppsNetUnitData = [
  {
    label: "九州電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、九州電力エリアの特別高圧電力単価は2024年度実績で約14〜17円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より2〜3円/kWh安く、原発稼働の影響が反映されている。福岡県内の北九州工業地帯大口需要家（日本製鉄、三菱化学、TOTO、安川電機、自動車3社）にとっては、競争入札による更なる1〜3円/kWh削減で年間1〜5億円規模のコスト削減余地。",
  },
  {
    label: "九州電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は16〜20円/kWh、本州エリアより1〜2円/kWh安い。県内中規模事業者（博多都市圏オフィス、福岡空港周辺物流、商業施設、データセンター）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、福岡県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替で年間100〜300万円規模のコスト削減が見込める。",
  },
  {
    label: "九州電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯17〜21円/kWhの水準で、全国平均と同水準。県内中小事業者（中小商店・サービス業・小規模物流）は新電力切替で年間5〜30万円規模の削減余地が中心。太陽光自家消費・蓄電池併設で更なる効果。",
  },
  {
    label: "県内産業構造との接続 — 工業・都市圏・物流・空港に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを福岡県の産業構造に紐づけて再加工すると、①北九州工業地帯の特高契約（日本製鉄・自動車・化学・電機）は競争入札＋自家発電・コージェネ最適化＋PPAで年間1〜5億円の総合削減効果、②博多都市圏の高圧契約（オフィス・商業・データセンター）は新電力切替＋屋根太陽光＋蓄電池で年間500万〜3,000万円の削減余地、③物流・空港周辺の低圧契約（中小物流倉庫・サービス業）は新電力切替＋LED化＋空調最適化で年間50〜500万円の削減余地、という3層構造で契約判断を行うべき。原発稼働メリットと太陽光出力制御による昼間余剰の活用が福岡県固有の競争優位。",
  },
];

const industryImpact = [
  {
    title: "業種1: 鉄鋼・化学コンビナート（北九州市八幡、特別高圧 18,000kW、年間 1.4億kWh)",
    before:
      "Before: 北九州市八幡の大型鉄鋼・化学コンビナートA社（連続稼働、転炉・電炉・圧延・化学反応槽運転）。年間電気代 28億円。電炉・圧延機・冷却ポンプ・コンプレッサー・大型反応槽電熱が消費電力の70%。九電継続で固定費・燃料費調整額の変動リスクあり。",
    after:
      "After: 特別高圧の競争入札（複数全国系新電力で2.5円/kWh削減）／屋根太陽光8MW・敷地内太陽光3MW・蓄電池10MWh導入（需要家主導型PPA補助・SII補助併用、投資25億円）／電炉インバータ更新・廃熱回収高度化／コージェネ更新／BEMS全工程導入。",
    result:
      "Result: 年間電気代 28億円 → 19.6億円（▲30%、▲8.4億円）／契約kW 18,000→16,500／太陽光自家消費比率 25%／投資回収 補助金後 3〜4年／RE100進捗 25%達成／CO2 ▲20%。",
  },
  {
    title: "業種2: 大型データセンター・商業施設（福岡市博多区、高圧 1,800kW、年間 1,500万kWh）",
    before:
      "Before: 博多区の大型データセンター・商業施設複合B社（オフィス・小売・データセンター併設、24時間稼働）。年間電気代 4.05億円。サーバー・データセンター空調・大型商業施設照明・オフィス空調が消費電力の80%。九電継続で固定費負担大。",
    after:
      "After: 高圧の固定3年契約（地域系新電力との競争入札で1.8円/kWh削減）／屋根太陽光1.8MW・蓄電池4MWh導入（SII補助・福岡県補助併用、投資7億円）／データセンターのフリークーリング・サーバー高効率化／空調インバータ更新／LED全館化／BEMS導入。",
    result:
      "Result: 年間電気代 4.05億円 → 2.84億円（▲30%、▲1.21億円）／契約kW 1,800→1,600／太陽光自家消費比率 30%／投資回収 補助金後 4〜5年／RE100進捗 30%達成。",
  },
  {
    title: "業種3: 物流倉庫・サービス業（福岡空港周辺、高圧 600kW、年間 480万kWh）",
    before:
      "Before: 福岡空港周辺の大型物流倉庫・サービス業C社（24時間稼働、冷蔵・常温・冷凍倉庫併設）。年間電気代 1.5億円。冷凍冷蔵設備・荷役機械・倉庫照明・空調が消費電力の主要要素。",
    after:
      "After: 高圧の固定3年契約（全国系新電力で1.5円/kWh削減）／屋根太陽光500kW・蓄電池1.5MWh導入（SII補助・福岡県補助併用、投資2億円）／CO2冷媒インバータ化／断熱性能改善／LED全館化／BEMS導入。",
    result:
      "Result: 年間電気代 1.5億円 → 1.05億円（▲30%、▲4,500万円）／契約kW 600→540／太陽光自家消費比率 25%／投資回収 補助金後 4〜5年／RE100進捗 25%達成。",
  },
];

const costFactors = [
  {
    label: "夏季猛暑とピーク需要",
    detail:
      "福岡県は温暖湿潤気候で夏季猛暑日多発。7〜9月の冷房ピーク需要が経営課題。年間冷房度日1,500〜1,800（全国上位）。博多都市圏のヒートアイランド現象も加わり、商業施設・オフィスの空調需要が高水準。",
  },
  {
    label: "原発稼働メリットと燃料費調整額",
    detail:
      "九州電力は玄海・川内原発の安定稼働により、燃料費調整額の上振れリスクが本州各社より低い。2024〜2025年実績で本州各社より1〜2円/kWh安い水準を維持。一方、原発トラブル時の影響リスクは存在。",
  },
  {
    label: "太陽光出力制御と昼間余剰",
    detail:
      "九州電力管内は太陽光大量導入により、春秋の昼間に出力制御（カット）が頻発。県内事業者は太陽光自家消費の経済性が極めて高く、蓄電池併設による昼夜シフトの機会も大きい。DR参加・PPA契約の競争余地大。",
  },
  {
    label: "関門連系線と本州融通",
    detail:
      "本州との関門連系線（4回線、運用容量274万kW）で連系。九州から本州への送電（順流）と需給ひっ迫時の逆潮流（本州→九州）の双方向運用。県内の電力市場価格は本州エリアと連動性が高い。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1.4億kWh使用の鉄鋼コンビナートで年5.5億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では北九州工業地帯の大型設備更新で大型採択実績多数。博多都市圏のオフィス・商業のLED・空調更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "福岡県は太陽光出力制御頻発エリアとして、自家消費・近接PPAの効果が大きい。蓄電池併設でDR参加・昼夜シフトの経済性向上。",
  },
  {
    name: "福岡県脱炭素・再エネ補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "福岡県独自補助。北九州工業地帯・博多都市圏・物流の脱炭素化を支援する大型補助あり。北九州市・福岡市の独自補助との併用可。",
  },
  {
    name: "北九州市・福岡市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "北九州市『環境未来都市』『SDGs未来都市』、福岡市『カーボンニュートラル支援』。市町村独自の脱炭素政策と連動した支援。",
  },
  {
    name: "九州経済産業局・産業集積向け補助",
    target: "九州工業地帯の大型設備更新、コージェネ、自家発高度化",
    rate: "1/3、上限事業規模に応じる",
    note: "九州経済産業局・福岡県商工部・北九州市産業経済局の連携補助。北九州工業地帯の脱炭素化支援。",
  },
];

const industryProfile = [
  {
    label: "鉄鋼・化学（北九州市八幡・戸畑・若松）",
    detail:
      "日本製鉄八幡製鉄所、三菱化学黒崎、新日鐵住金化学、若松臨海工業地帯。年間使用量5,000万〜2億kWh規模。連続稼働・大量電力消費の特性。",
  },
  {
    label: "自動車・電機・機械（苅田・宮田・小倉）",
    detail:
      "日産自動車九州（苅田）、トヨタ自動車九州（宮田）、ダイハツ九州、TOTO小倉、安川電機、三菱重工九州。年間使用量1,000万〜1億kWh規模。",
  },
  {
    label: "オフィス・データセンター・商業（博多・天神）",
    detail:
      "福岡市博多区・中央区のオフィス、データセンター、大型商業施設（博多駅周辺・天神）。年間使用量500万〜2,000万kWh規模。",
  },
  {
    label: "物流・空港経済（福岡空港・博多港・北九州港）",
    detail:
      "福岡空港周辺の物流倉庫、博多港コンテナターミナル、北九州港。冷凍冷蔵・常温倉庫、空港貨物。年間使用量200万〜1,500万kWh規模。",
  },
  {
    label: "中小製造業・商業・サービス（県全域）",
    detail:
      "福岡市・北九州市・久留米市等の中小製造業、商業施設、サービス業。年間使用量50万〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは約25%（全国平均並み）。北九州工業地帯の特高大口と博多都市圏のオフィス・商業で新電力切替が活発。中小事業者は九州電力継続が多数派。",
  },
  {
    label: "市場連動プランの選択肢",
    detail:
      "九州電力エリアは太陽光出力制御で昼間スポット価格が低下する一方、夕方ひっ迫で高騰する変動が大きい。市場連動プランの選択肢は本州エリアと同等にあるが、年中冷房稼働事業者は固定プランが安全。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 原発稼働による安定供給と燃料費調整額の上振れ抑制、地域経済貢献、災害時の復旧体制。デメリット: 競争入札と比較した単価高、太陽光出力制御による余剰活用余地の未活用。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①九州電力エリア供給実績の有無、②固定単価期間の確実性、③燃料費調整額の有無・上限、④太陽光自家消費・PPA連携メニューの充実度、⑤災害時の緊急対応力、の5点が県内では特に重要。",
  },
  {
    label: "太陽光自家消費・需要家主導型PPAの優位性",
    detail:
      "福岡県は太陽光出力制御頻発エリアとして、太陽光自家消費＋蓄電池の組合せが電気代削減・出力制御回避の両立に最も効果的。北九州工業地帯・博多都市圏・物流業界で導入を急増中。",
  },
];

const energySaving = [
  {
    label: "鉄鋼・化学の電炉インバータ・廃熱回収・コージェネ",
    detail:
      "北九州工業地帯の鉄鋼・化学コンビナートで電炉インバータ更新、廃熱回収高度化、コージェネ更新、BEMS全工程導入で電力▲25〜35%。SII補助・需要家主導型PPA補助の組合せ活用で投資回収 3〜4年。",
  },
  {
    label: "自動車・電機・機械の設備更新",
    detail:
      "苅田・宮田・小倉の自動車・電機・機械工場でインバータ化、LED全館化、空調最適化、コージェネ更新で電力▲20〜30%。SII補助活用で投資回収 4〜5年。",
  },
  {
    label: "データセンター・商業施設のフリークーリング・LED",
    detail:
      "博多都市圏のデータセンター・商業施設でフリークーリング導入、サーバー高効率化、LED全館化、空調インバータ更新で電力▲25〜35%。SII補助活用で投資回収 4〜5年。",
  },
  {
    label: "物流・空港周辺の冷凍冷蔵省エネ化",
    detail:
      "福岡空港周辺・博多港・北九州港の物流倉庫でCO2冷媒インバータ化、断熱性能改善、太陽光導入で電力▲25〜40%。投資回収 SII補助活用で 3〜5年。",
  },
  {
    label: "屋根太陽光＋蓄電池でDR参加",
    detail:
      "県内全業種で屋根太陽光＋蓄電池の組合せでDR（デマンドレスポンス）参加。太陽光出力制御時の昼間充電と夕方放電の昼夜シフトで電気代▲15〜25%。需要家主導型PPA・SII補助の組合せで投資回収 4〜5年。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク（7〜9月）の冷房需要使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "九州電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力（九電グループ系・西部ガス系・全国系・地域密着型）からの相見積を取得したか",
  "太陽光自家消費・需要家主導型PPAの試算を実施したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "蓄電池併設による太陽光出力制御回避・DR参加・BCP対応の試算を実施したか",
  "SII補助・福岡県補助・北九州市福岡市補助・九州経済産業局補助の併用可否を確認したか",
  "北九州工業地帯立地の場合、産業集積向け補助の活用可否を確認したか",
  "市場連動プランと固定プランの選択肢を年中冷房稼働の自社特性で比較したか",
  "災害時（台風・水害）でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "福岡県の法人電気代水準は全国比どれくらいですか？", answer: "九州電力エリアは原発稼働の影響で本州エリアより1〜2円/kWh安い水準を維持しています。福岡県内法人の実質単価は22〜27円/kWh（高圧）が標準帯域で、新電力切替により1〜2円/kWh改善余地があります。北九州工業地帯の特高大口は競争入札で年間1〜5億円規模の削減も可能です。" },
  { question: "なぜ福岡県の電気代は本州エリアより安いのですか？", answer: "①玄海・川内原発の安定稼働により燃料費調整額の上振れリスクが小さい、②太陽光大量導入による昼間電源コスト低下、③九州経済産業局の産業集積向け補助制度の充実、④関門連系線による本州との需給融通効率化、の4つが主な要因です。一方、太陽光出力制御の頻発による昼間余剰電力の活用機会も大きい特徴があります。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは福岡県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の九州電力エリアの単価データを参考に、自社の現契約単価と本州エリアとの差を定量化できます。本ページではこのデータを再加工して福岡県の産業構造（鉄鋼・自動車・データセンター・物流）別の契約判断材料として整理しています。原発稼働メリット＋太陽光出力制御活用の戦略が福岡県の競争優位を最大化します。" },
  { question: "北九州工業地帯の電気代対策で最も効果的なのは？", answer: "①特別高圧の競争入札（複数全国系新電力で2〜3円/kWh削減）、②屋根太陽光5〜10MW＋蓄電池の大規模導入（需要家主導型PPA補助・SII補助の組合せ活用）、③電炉インバータ・廃熱回収高度化、④コージェネ更新、⑤BEMS全工程導入、の5本柱が中心。太陽光自家消費比率25%以上で年間電気代を30%削減可能です。" },
  { question: "博多都市圏のオフィス・データセンターでも電気代削減の選択肢はありますか？", answer: "はい、新電力切替＋屋根太陽光＋蓄電池の組合せが最も効果的です。SII補助・福岡県補助・福岡市補助の組合せ活用で投資回収4〜5年が目安。フリークーリング・サーバー高効率化・LED化との組合せで年間電気代を30%削減可能です。" },
  { question: "福岡県で活用できる省エネ・再エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、福岡県脱炭素・再エネ補助、北九州市・福岡市の脱炭素補助、九州経済産業局・産業集積向け補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "物流・空港周辺事業者の電気代対策は？", answer: "①新電力切替＋燃料費調整額上限ありメニュー選択、②屋根太陽光＋蓄電池導入、③冷凍冷蔵設備のCO2冷媒インバータ化、④断熱性能改善、⑤LED化＋BEMS導入、の5本柱が中心。福岡空港周辺・博多港・北九州港の物流倉庫では、太陽光自家消費比率25%以上で年間電気代を30%削減可能です。" },
  { question: "太陽光出力制御は福岡県の事業者にどう影響しますか？", answer: "九州電力管内は太陽光大量導入により、春秋の昼間に出力制御（カット）が頻発しています。県内事業者にとっては、太陽光自家消費の経済性が極めて高く、蓄電池併設による昼夜シフトの機会も大きいです。屋根太陽光＋蓄電池の組合せでDR参加・PPA契約の競争余地が拡大しており、福岡県固有の競争優位として活用が進んでいます。" },
];

const sourcesItems = [
  { name: "九州電力 公式サイト", url: "https://www.kyuden.co.jp/" },
  { name: "福岡県環境部", url: "https://www.pref.fukuoka.lg.jp/" },
  { name: "九州経済産業局", url: "https://www.kyushu.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function FukuokaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/fukuoka-business-electricity-cost"
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
          <span className="text-slate-800">福岡県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            福岡県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            福岡県は九州電力エリアに属し、原発稼働メリットによる本州より1〜2円/kWh安い水準を特徴とします。北九州工業地帯（鉄鋼・化学・自動車・電機）、博多都市圏のオフィス・商業・データセンター集積、福岡空港・博多港・北九州港の物流拠点、福岡市・北九州市のサービス業と多様な産業構造を持ちます。太陽光出力制御頻発エリアとして自家消費＋蓄電池の経済性が極めて高く、原発稼働メリットと組合せた契約最適化戦略が主流です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-24" updatedAt="2026-05-24" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>九州電力エリアの本州より安い電気代水準と原発稼働メリット（pps-net.org/unitデータ加工）</li>
              <li>北九州工業地帯・博多データセンター・福岡空港物流のBefore/After削減事例</li>
              <li>太陽光出力制御活用＋蓄電池による電気代30%削減戦略</li>
              <li>SII・福岡県・北九州市福岡市・九州経済産業局補助の組合せ活用</li>
              <li>関門連系線運用と太陽光大量導入下の電力契約最適化</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福岡県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県は九州電力エリアに属し、本州との関門連系線で連系。九州エリア最大の電力需要を持ち、北九州工業地帯（鉄鋼・化学・自動車）、博多都市圏（オフィス・商業・データセンター）、福岡空港・博多港・北九州港の物流拠点が県内電力消費の中核を形成します。原発稼働メリットと太陽光出力制御活用が県固有の競争優位です。
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
              福岡県では九州電力が最大シェアを持ちますが、2024年時点で複数の新電力が法人向け高圧で活発に営業中です。九州電力グループ系、西部ガス系、全国系、地域密着型の4カテゴリが主軸となります。
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
              福岡県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九州電力エリアは原発稼働メリットにより本州より1〜2円/kWh安い水準を維持。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要で、新電力切替＋太陽光自家消費＋蓄電池の組合せで更なる削減が可能です。
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
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、福岡県の産業構造（鉄鋼・自動車・データセンター・物流・空港経済）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。原発稼働メリット＋太陽光出力制御活用が戦略の中心です。
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
              業種別影響度3件 — 北九州鉄鋼・博多データセンター・福岡空港物流（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県の主力業種3つで、契約見直し＋太陽光自家消費＋蓄電池の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。原発稼働メリット＋太陽光出力制御活用により、年間電気代を30%削減できる事業者が増えています。
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
              、データセンター向けは{" "}
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福岡県固有の電気代上昇要因 — 夏季猛暑・原発稼働・太陽光出力制御
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県の電気代変動は、夏季猛暑とピーク需要、原発稼働メリットと燃料費調整額、太陽光出力制御と昼間余剰、関門連系線と本州融通、再エネ賦課金など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直し・太陽光自家消費・蓄電池投資の優先順位付けが可能になります。
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
              福岡県の補助金・優遇制度 — SII・県独自・北九州福岡市・九州経済産業局
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県では国補助（SII等）に加え、県独自補助、北九州市・福岡市の脱炭素補助、九州経済産業局・産業集積向け補助が組合せ可能です。最大3〜4補助の組合せで投資回収を1〜2年短縮できます。
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
              福岡県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県の事業者構成は、鉄鋼・化学、自動車・電機・機械、オフィス・データセンター・商業、物流・空港経済、中小製造業・商業・サービスの5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              福岡県の新電力シェアは2024年時点で約25%（全国平均並み）。北九州工業地帯の特高大口と博多都市圏のオフィス・商業で新電力切替が活発です。太陽光出力制御頻発エリアとして自家消費＋蓄電池の組合せが最も効果的です。
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
              福岡県の電気代対策は『鉄鋼・化学の電炉インバータ・廃熱回収・コージェネ』『自動車・電機・機械の設備更新』『データセンター・商業施設のフリークーリング・LED』『物流の冷凍冷蔵省エネ化』『屋根太陽光＋蓄電池でDR参加』の5軸が主力。原発稼働メリット＋太陽光出力制御活用で年間電気代を30%削減する戦略が標準化しています。
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
              福岡県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や太陽光・蓄電池投資の判断材料が下がります。太陽光出力制御活用と原発稼働メリットを踏まえた契約最適化が県内事業者の競争優位です。
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
              シミュレーターで福岡県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県は原発稼働メリットによる安定単価と太陽光出力制御活用が特徴的なエリアです。シミュレーターで自社条件における上振れ幅を試算し、太陽光自家消費＋蓄電池導入・新電力競争入札・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜9月）の冷房需要の影響額を試算する</li>
              <li>太陽光自家消費＋蓄電池の組合せによる削減効果を試算する</li>
              <li>事例で示した30%前後の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="fukuoka-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/saga-business-electricity-cost", title: "佐賀県の法人電気料金", description: "九州電力エリア・玄海原発立地・有田焼の事情(参考)。" },
              { href: "/kumamoto-business-electricity-cost", title: "熊本県の法人電気料金", description: "九州電力エリア・TSMC進出・農業の事情(参考)。" },
              { href: "/oita-business-electricity-cost", title: "大分県の法人電気料金", description: "九州電力エリア・鉄鋼化学コンビナート・地熱発電の事情(参考)。" },
              { href: "/nagasaki-business-electricity-cost", title: "長崎県の法人電気料金", description: "九州電力エリア・造船業・離島電力の事情(参考)。" },
              { href: "/miyazaki-business-electricity-cost", title: "宮崎県の法人電気料金", description: "九州電力エリア・農業畜産・太陽光の事情(参考)。" },
              { href: "/kagoshima-business-electricity-cost", title: "鹿児島県の法人電気料金", description: "九州電力エリア・川内原発・焼酎産業の事情(参考)。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "夏季猛暑稼働業種・データセンターの選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "鉄鋼・化学・自動車が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "博多都市圏データセンター向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "空調・LED・冷凍冷蔵設備更新の主力補助金。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトPPA(自家消費型太陽光)", description: "太陽光自家消費＋蓄電池の組合せ戦略。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="福岡県の自社条件で電気代リスクを試算する"
            description="北九州工業地帯の鉄鋼・化学・自動車、博多都市圏のオフィス・商業・データセンター、福岡空港・博多港・北九州港の物流など福岡県固有の条件と九州電力エリア単価・原発稼働メリット・太陽光出力制御活用を踏まえ、シミュレーターで自社の上振れリスクと太陽光自家消費＋蓄電池による削減余地を試算できます。"
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
            heading="福岡県の電力契約見直し、専門家に相談しませんか？"
            description="北九州工業地帯の鉄鋼・化学・自動車・電機、博多都市圏のオフィス・商業・データセンター、福岡空港・博多港・北九州港の物流の電気代見直しは業種・地域により論点が異なります。原発稼働メリット＋太陽光出力制御活用も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
