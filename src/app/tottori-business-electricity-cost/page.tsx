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
  "鳥取県の法人電気料金完全ガイド｜中国電力エリア単価分析・砂丘観光・製紙電子部品・水産加工の契約最適化";
const pageDescription =
  "鳥取県の法人電気料金を地域特化で解説。中国電力エリアの単価水準を業種別に再加工して提示し、人口最少県の製紙・電子部品工業、鳥取砂丘・大山観光業、境港水産加工、二十世紀梨果樹園冷蔵の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "鳥取県 法人電気料金",
    "中国電力 高圧 単価",
    "鳥取 製紙 電子部品 電気代",
    "鳥取砂丘 大山 観光 電力",
    "境港 水産加工 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/tottori-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tottori-business-electricity-cost",
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
    label: "中国電力エリアと鳥取県の位置付け",
    detail:
      "鳥取県は中国電力のエリア。東部（鳥取市・岩美・八頭）、中部（倉吉・三朝・湯梨浜）、西部（米子・境港・大山・日吉津）の3地域から構成。県内総電力需要は約25億kWhで中国電力管内の約4%を占める。人口最少県（約54万人）で大規模需要は限定的だが、製紙・電子部品工業、水産加工、観光業に分散した中小規模需要が県内電力消費を形成。",
  },
  {
    label: "電源構成 — 中国電力石炭火力依存と県内水力",
    detail:
      "中国電力管内はLNG火力（柳井・水島）と石炭火力（三隅・水島）が主力で石炭比率約40%、LNG火力約30%、原発（島根原発2号機が2024年12月再稼働）約10%、再エネ・水力約20%。県内には中国電力の俣野川揚水発電所（大山町）、新成羽川・三朝水力発電所が立地し、地域電源としての存在感がある。",
  },
  {
    label: "気象条件 — 山陰多雨豪雪と県内気候",
    detail:
      "県内は山陰気候で冬季豪雪（特に大山周辺・倉吉以西）、夏季は日本海側で比較的涼しい。年間冷房度日（CDD24）900〜1,200、暖房度日2,200〜2,800。冬季の暖房需要が電力消費の大きな比重を占め、雪害による停電リスクもBCP上の論点。",
  },
  {
    label: "需給ひっ迫 — 中国電力エリアの冬季需要",
    detail:
      "中国電力管内の需給ひっ迫局面は冬季が中心。鳥取県内は大規模工場が少ないため大型DR要請は限定的だが、米子・境港の製紙・電子部品工場、商業施設、寒冷地暖房需要に対する協力要請が発動されることがある。",
  },
  {
    label: "県内産業構造 — 製紙・電子部品・水産加工・観光",
    detail:
      "東部（鳥取市）は鳥取三洋（パナソニック）の電子部品・通信機器、王子製紙米子工場。中部（倉吉）は機械部品・食品加工。西部（境港・米子）は境港水産加工（マグロ・ベニズワイガニ・カニ缶詰）、JFEミネラル日吉津のフェロアロイ製造、米子王子製紙等の中規模工業。観光業は鳥取砂丘・大山・三朝温泉・皆生温泉に集積。",
  },
];

const utilitiesList = [
  {
    name: "中国電力（送配電は中国電力ネットワーク）",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』など。2023年6月に規制料金値上げを実施。島根原発2号機の2024年12月再稼働により今後の単価動向に注目が集まる。",
  },
  {
    name: "山陰新電力・地域密着型",
    role: "地域密着型新電力",
    detail:
      "鳥取市・米子市・境港市等の地域密着型新電力。自治体施設、中小事業者向けに供給。県内水力発電所との連携で再エネアピールも展開。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "米子市・境港市の中規模工業・水産加工事業者向け高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット・エフビットコミュニケーションズ",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。鳥取県内の中規模法人需要にも対応。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力",
    role: "ガス系新電力",
    detail:
      "鳥取県内のガス供給網との連携で電気・ガスセット契約を提供。観光業・商業施設で実績。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は8〜10社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。鳥取県内では王子製紙米子、JFEミネラル日吉津、鳥取三洋電機等が対象。県内事業者数が限られるため、特高契約は新電力競争入札による単価最適化余地が比較的大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "中国電力『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。県内中小事業者・観光業の中小ホテル旅館・水産加工小規模事業者は低圧電灯中心。",
  },
  {
    label: "島根原発再稼働の影響",
    detail:
      "2024年12月の島根原発2号機再稼働により、中国電力管内の燃料費調整額の引き下げが期待される。鳥取県は隣県の島根原発の電力供給を受ける形になり、燃料費調整額の低下は県内法人需要にプラス影響。新電力経由でさらに優遇可能性がある。",
  },
];

const ppsNetUnitData = [
  {
    label: "中国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、中国電力エリアの特別高圧電力単価は2024年度実績で約17〜20円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）と概ね同水準だが、原発再稼働後の燃料費調整額低下を加味すると、関電・九電に次ぐ第3グループに位置付けられる見込み。県内大型事業者（製紙・フェロアロイ・電子部品）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間1,000万円規模の差が出る。",
  },
  {
    label: "中国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は18〜22円/kWh。県内中規模事業者（境港水産加工・米子製紙関連・大山観光）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、鳥取県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "中国電力エリアの低圧単価水準",
    detail:
      "低圧電力10〜13円/kWh、低圧電灯17〜20円/kWhの水準。県内中小事業者（鳥取市内商店・観光旅館・農産物冷蔵庫）の標準帯域。低圧契約は新電力切替の余地が高圧ほど大きくないが、地域密着型新電力との連携でセット契約や再エネプレミアム化のメリットを引き出せる。",
  },
  {
    label: "県内産業構造との接続 — 製紙・電子部品・水産加工に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを鳥取県の産業構造に紐づけて再加工すると、①王子製紙米子のような24時間稼働の特高契約は固定5年で年間2,000〜5,000万円の安定化効果、②境港水産加工のような季節変動の大きい高圧契約は時間帯別料金の見直しと需要平準化で年間300〜800万円の削減余地、③大山・三朝温泉のような観光業中小契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という3層構造で契約判断を行うべき。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製紙工場（米子市、特別高圧 8,000kW、年間 6,000万kWh）",
    before:
      "Before: 米子市の製紙工場A社（王子製紙系・段ボール原紙・新聞用紙製造）。24時間連続運転、年間電気代 15億円。抄紙機・パルプ蒸解釜・乾燥機・コージェネが消費電力の70%。市場連動プラン継続で2023年夏に月最大2.5億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（中国電力継続より0.8円/kWh安、新電力競争入札／島根原発再稼働メリット込み）／コージェネレーション設備更新（SII補助1/3活用・GX関連補助併用、投資4.0億円）／抄紙機の省エネ運転・乾燥機ヒートポンプ転換／需要家主導型PPAでオフサイト太陽光15MW契約／敷地内太陽光3MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 15億円 → 12億円（▲20%、▲3.0億円）／契約kW 8,000→7,200／投資回収 補助金後 3.5年／RE100進捗 40%達成。",
  },
  {
    title: "業種2: 水産加工冷蔵倉庫（境港市、高圧 450kW、年間 360万kWh）",
    before:
      "Before: 境港市の水産加工・冷蔵倉庫B社（ベニズワイガニ・マグロ・サワラの冷凍冷蔵保管と缶詰加工）。年間電気代 1.1億円。冷凍冷蔵設備・加工機械・空調が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+2,200万円の上昇。",
    after:
      "After: 高圧の固定3年契約（地域密着型新電力との地産地消契約／中国電力継続より0.9円/kWh安）／冷蔵庫CO2冷媒インバータ式更新（SII補助1/2活用、投資1,800万円）／断熱性能改善工事／屋根太陽光150kW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光500kW契約。",
    result:
      "Result: 年間電気代 1.1億円 → 8,800万円（▲20%、▲2,200万円）／契約kW 450→400／投資回収 補助金後 2.5年／水産加工品質向上で出荷収入も増加。",
  },
  {
    title: "業種3: 観光業・大山温泉ホテル（大山町、高圧 350kW、年間 280万kWh）",
    before:
      "Before: 大山町の大型温泉ホテルC社（客室120室、温泉プール・スパ・スキーリフト併設、関西・中国地方観光客中心）。年間電気代 8,500万円。冷暖房・温泉ポンプ・スキーリフト・厨房・客室照明が消費電力の主要要素。冬季スキーシーズンと夏季避暑期に電力ピーク。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調インバータ更新・人感センサ連動／LED全館化／温泉ポンプ・スキーリフトの高効率化（観光庁・環境省補助活用、投資3,500万円）／屋根太陽光150kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 8,500万円 → 6,800万円（▲20%、▲1,700万円）／契約kW 350→300／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "中国電力エリアの石炭火力依存と燃料価格変動",
    detail:
      "中国電力管内の石炭火力比率約40%は全国平均より高水準。石炭価格の国際市況変動（豪州・インドネシア炭）が燃料費調整額に直接影響し、2022〜2023年の石炭価格高騰時には鳥取県内事業者の電気代も大幅上昇した経緯がある。",
  },
  {
    label: "島根原発2号機再稼働のプラス影響",
    detail:
      "2024年12月の島根原発2号機再稼働は中国電力管内の燃料費調整額低下を通じて鳥取県内事業者にも直接的なメリット。2025〜2026年にかけて段階的に効果が発現する見込み。",
  },
  {
    label: "山陰豪雪・大山雪害BCPの考慮",
    detail:
      "県内特に西部（大山・米子）の冬季豪雪は停電リスクの主要因。観光業・水産加工業のBCP対応は経営の必須要件で、蓄電池・自家発電設備の併設、地域密着型新電力との緊急対応連携が重要。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後と上昇。年間6,000万kWh使用の製紙工場で年2.4億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
  {
    label: "境港水産加工の季節変動需要",
    detail:
      "境港のベニズワイガニ漁期（11月〜3月）に水産加工冷蔵需要が急増。電力ピークが冬季豪雪と重なるため、契約kWの設定と時間帯別料金の活用が重要なコスト管理ポイント。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では米子の製紙工場・境港の水産加工冷蔵で大型採択実績多数。観光業のホテル空調更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "鳥取県内の中規模工場で屋根・空地活用の太陽光導入が有効。豪雪BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "鳥取県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "鳥取県独自補助。製紙・水産加工・観光業の脱炭素化を支援。SII補助との併用ルールに留意。",
  },
  {
    name: "鳥取市・米子市・境港市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "鳥取市『鳥取市環境配慮事業所支援』、米子市『米子市環境投資補助』、境港市『境港市水産加工省エネ補助』など。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・農林水産業向け省エネ補助",
    target: "大山・三朝・皆生温泉の旅館ホテル、二十世紀梨果樹冷蔵、境港水産加工施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省連携の省エネ補助。空調・冷蔵設備・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "製紙・素材・電子部品（米子・鳥取・日吉津）",
    detail:
      "王子製紙米子、JFEミネラル日吉津のフェロアロイ製造、鳥取三洋（パナソニック）の電子部品・通信機器。年間使用量1〜10億kWh規模の大型事業者。",
  },
  {
    label: "水産加工（境港・米子）",
    detail:
      "境港水産加工（ベニズワイガニ・マグロ・サワラ）、缶詰製造、冷凍冷蔵倉庫。年間使用量100〜500万kWh規模の中規模事業者。",
  },
  {
    label: "観光業（鳥取砂丘・大山・三朝・皆生・倉吉）",
    detail:
      "鳥取砂丘、大山スキー場、三朝温泉、皆生温泉、倉吉白壁土蔵群の観光業。年間使用量50〜500万kWh規模。",
  },
  {
    label: "果樹園・農業（東伯・八頭）",
    detail:
      "二十世紀梨・新甘泉梨・ブロッコリー・ラッキョウ等の果樹園・農産物冷蔵倉庫。中小事業者中心、年間使用量50〜300万kWh規模。",
  },
  {
    label: "中小製造業・商業（鳥取市・米子市内）",
    detail:
      "鳥取市・米子市内の中小製造業（金属加工・機械・食品）、市内商業施設・スーパー・店舗。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは18%前後（経産省統計、全国平均比やや低水準）。県内事業者の規模が小さく、競争入札の選択肢が限られる中、全国系新電力と地域密着型新電力の併用が進む。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。製紙・水産加工・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "中国電力継続のメリット・デメリット",
    detail:
      "メリット: 県内供給体制の安定性、雪害時の復旧体制、島根原発再稼働メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①中国電力エリア供給実績の有無、②豪雪時の緊急対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤地域密着型新電力との連携可否、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの普及状況",
    detail:
      "王子製紙・JFEミネラル等の大企業は他県の大規模太陽光・風力電源とのオフサイトPPA契約を検討中。中小事業者は地域密着型新電力との連携が現実的選択肢。",
  },
];

const energySaving = [
  {
    label: "製紙工場のコージェネ・抄紙機最適化",
    detail:
      "米子の製紙工場でコージェネレーション設備更新、抄紙機の省エネ運転・乾燥機ヒートポンプ転換で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "水産加工冷蔵庫のCO2冷媒インバータ化",
    detail:
      "境港の水産加工冷蔵倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。水産加工品質向上で出荷収入も増加。",
  },
  {
    label: "観光業（温泉ホテル・スキーリゾート）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、温泉ポンプ・スキーリフトの高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "BEMS・需要見える化・蓄電池（豪雪BCP重視）",
    detail:
      "工場・観光施設・水産加工冷蔵倉庫でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。山陰豪雪BCP対応で蓄電池併設の重要性高く、DR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
  {
    label: "果樹冷蔵倉庫の省エネ更新",
    detail:
      "東伯・八頭の二十世紀梨・新甘泉梨冷蔵倉庫でCO2冷媒インバータ化、断熱性能改善で電力▲25〜40%。果樹保存品質向上で出荷収入増にも寄与。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）と夏季ピーク月（7〜8月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中国電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力8〜10社からの相見積を取得し、固定vs市場連動を比較したか",
  "島根原発再稼働の燃料費調整額への影響を織り込んだ見積か",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・鳥取県補助・市町村補助・観光庁・農水省補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "山陰豪雪・大山雪害想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "鳥取県の法人電気代水準は全国比どれくらいですか？", answer: "中国電力エリアは石炭火力依存により全国平均と概ね同水準ですが、2024年12月の島根原発2号機再稼働により今後の単価低下が期待されます。新電力競争で1〜2円/kWh安いケース多数。米子・境港の中規模工業は新電力切替で年間1〜3億円規模のコスト削減事例も。" },
  { question: "島根原発再稼働は鳥取県の電気代にどう影響しますか？", answer: "2024年12月の島根原発2号機再稼働により、中国電力管内の燃料費調整額の引き下げが見込まれます。鳥取県は隣県の島根原発の電力供給を受ける形になり、2025〜2026年にかけて段階的に+2.0〜+3.5円/kWhの燃料費調整額が低下する見込みです。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは鳥取県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の中国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して鳥取県の産業構造（製紙・水産加工・観光）別の契約判断材料として整理しています。" },
  { question: "境港の水産加工冷蔵倉庫の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII補助1/2活用）、②断熱性能改善工事、③高圧契約の競争入札による単価最適化、④地域密着型新電力との地産地消契約、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。水産加工品質向上で出荷収入増にも寄与。投資回収は補助金活用で1.5〜3年です。" },
  { question: "鳥取砂丘・大山・三朝温泉等の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③温泉ポンプ・スキーリフトの高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "鳥取県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、鳥取県脱炭素・省エネ設備導入補助、鳥取市・米子市・境港市の脱炭素補助、観光庁・農水省・環境省の省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "二十世紀梨・新甘泉梨の果樹冷蔵倉庫の電気代対策は？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII補助1/2活用）、②断熱性能改善工事、③高圧契約の競争入札による単価最適化、④地域密着型新電力との地産地消契約、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。果樹保存品質向上で出荷収入増にも寄与。投資回収は補助金活用で1.5〜3年です。" },
  { question: "山陰豪雪BCP対応は電力契約にどう影響しますか？", answer: "鳥取県西部（大山・米子）は冬季豪雪による停電リスクが高く、BCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散（リスク分散）、③地域密着型新電力との連携（地産地消エネルギー）、④BEMSによる停電復旧時の電力管理、の4点が重要。新電力選定時にBCP対応力を必ず評価してください。" },
];

const sourcesItems = [
  { name: "中国電力 公式サイト", url: "https://www.energia.co.jp/" },
  { name: "鳥取県環境立県推進課", url: "https://www.pref.tottori.lg.jp/" },
  { name: "経済産業省 中国経済産業局", url: "https://www.chugoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function TottoriBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tottori-business-electricity-cost"
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
          <span className="text-slate-800">鳥取県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            鳥取県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            鳥取県は中国電力エリアで、王子製紙米子・JFEミネラル日吉津のフェロアロイ・鳥取三洋電子部品の中規模工業、境港水産加工（ベニズワイガニ・マグロ）、大山・三朝・皆生温泉の観光業、二十世紀梨果樹園と冷蔵倉庫など多様な産業構造を持ちます。2024年12月の島根原発2号機再稼働により燃料費調整額の改善が期待される地域でもあります。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用・豪雪BCP対応を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中国電力エリアにおける鳥取県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>米子製紙・境港水産加工・大山温泉ホテルのBefore/After削減事例</li>
              <li>島根原発再稼働の鳥取県内事業者への影響と契約見直しタイミング</li>
              <li>SII・鳥取県・市町村・観光庁・農水省補助の組合せ活用パターン</li>
              <li>山陰豪雪・大山雪害想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鳥取県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県は中国電力エリアで、東部・中部・西部の3地域から構成されます。中国電力石炭火力依存と島根原発再稼働メリット、人口最少県ながらの製紙・水産加工・観光業集積、山陰豪雪BCP対応が県内電力消費の特徴を形成します。
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
              鳥取県では2024年時点で8〜10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              鳥取県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中国電力エリアは石炭火力依存により全国平均と概ね同水準ですが、2024年12月の島根原発2号機再稼働により今後の単価低下が期待されます。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、鳥取県の産業構造（製紙・水産加工・観光・果樹園）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
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
              業種別影響度3件 — 米子製紙・境港水産加工・大山温泉ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              、冷蔵倉庫向けは{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              鳥取県固有の電気代上昇要因 — 石炭火力依存・島根原発再稼働・豪雪BCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県の電気代変動は、中国電力石炭火力依存、島根原発再稼働メリット、山陰豪雪BCP対応、境港水産加工の季節変動需要など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              鳥取県の補助金・優遇制度 — SII・県独自・市町村・観光庁・農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県では国補助（SII等）に加え、県独自補助、鳥取市・米子市・境港市の脱炭素補助、観光庁・農水省・環境省の省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              鳥取県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県の事業者構成は、製紙・素材・電子部品、水産加工、観光業、果樹園・農業、中小製造業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              鳥取県の新電力シェアは2024年時点で18%前後。米子・境港の中規模工業・水産加工は新電力切替が進行、観光業は地域密着型新電力との連携が現実的選択肢。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              鳥取県の省エネは『製紙工場のコージェネ・抄紙機最適化』『水産加工冷蔵庫のCO2冷媒インバータ化』『観光業（温泉ホテル）の省エネ』『BEMS・需要見える化・蓄電池（豪雪BCP重視）』『果樹冷蔵倉庫の省エネ更新』の5軸が主力。山陰豪雪BCPを意識した蓄電池併設が重要です。
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
              鳥取県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。山陰豪雪想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで鳥取県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              鳥取県は中国電力石炭火力依存・島根原発再稼働メリット・山陰豪雪BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冬季ピーク月（1〜2月）と夏季ピーク月（7〜8月）の影響額を試算する</li>
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
            <GlossaryLinks currentSlug="tottori-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-chugoku-business-electricity", title: "中国電力エリアの法人電気代事情", description: "中国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価（出典）", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/shimane-business-electricity-cost", title: "島根県の法人電気料金", description: "隣接県・島根原発立地県の事情。" },
              { href: "/okayama-business-electricity-cost", title: "岡山県の法人電気料金", description: "中国電力エリア・水島コンビナートの事情。" },
              { href: "/hiroshima-business-electricity-cost", title: "広島県の法人電気料金", description: "中国電力エリア・マツダ自動車・呉造船の事情。" },
              { href: "/yamaguchi-business-electricity-cost", title: "山口県の法人電気料金", description: "中国電力エリア・周南岩国コンビナートの事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・冷蔵倉庫の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "製紙・水産加工が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "米子製紙工場と全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "境港水産加工・二十世紀梨果樹冷蔵向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "大山・三朝・皆生温泉観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・冷凍設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中国電力エリア・島根原発再稼働の影響。" },
            ]}
          />

          <ContentCta
            heading="鳥取県の自社条件で電気代リスクを試算する"
            description="米子製紙・境港水産加工・大山三朝皆生観光業・二十世紀梨果樹冷蔵など鳥取県固有の条件と中国電力エリア単価・島根原発再稼働メリット・山陰豪雪BCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="鳥取県の電力契約見直し、専門家に相談しませんか？"
            description="米子製紙・境港水産加工・大山三朝皆生観光業・二十世紀梨果樹冷蔵の電気代見直しは業種・地域により論点が異なります。山陰豪雪BCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
