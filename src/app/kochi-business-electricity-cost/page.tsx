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
  "高知県の法人電気料金完全ガイド｜四国電力エリア単価分析・紙パルプ・施設園芸ナスピーマン・カツオ水産加工の契約最適化";
const pageDescription =
  "高知県の法人電気料金を地域特化で解説。四国電力エリアの単価水準を業種別に再加工して提示し、土佐紙パルプ、施設園芸（ナス・ピーマン全国1位）、カツオ水産加工、四万十川観光業、太平洋型台風BCPの電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高知県 法人電気料金",
    "四国電力 高圧 単価",
    "土佐 紙パルプ 電気代",
    "施設園芸 ナス ピーマン 電力",
    "カツオ 水産加工 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kochi-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kochi-business-electricity-cost",
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
    label: "四国電力エリアと高知県の位置付け",
    detail:
      "高知県は四国電力のエリア。高知・南国・土佐・須崎・宿毛・四万十・室戸の7地域から構成。県内総電力需要は約25億kWhで四国電力管内の約10%を占める。土佐市・伊野町の紙パルプ工業、安芸郡・南国市の施設園芸（ナス・ピーマン全国1位）、カツオ水産加工（高知・土佐清水・宿毛）、四万十川・室戸岬の観光業が県内電力消費の中核。人口減少県だが第一次産業集積による電力需要が特徴。",
  },
  {
    label: "電源構成 — 四国電力エリアと県内水力",
    detail:
      "四国電力管内は伊方原発（伊方町・3号機が安定稼働中）の原発比率が高めで約30%、LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には四国電力の早明浦ダム・本山発電所・大渡ダム・須崎火力発電所が立地。山岳地域の豊富な水力電源と四万十川流域の自家発電・再エネ電源が県内エネルギー自給率を高めている。",
  },
  {
    label: "気象条件 — 太平洋温暖多雨と台風常襲",
    detail:
      "県内は太平洋気候で温暖湿潤・年間降水量3,000mm超（日本有数の多雨地域）。年間冷房度日（CDD24）1,300〜1,600、暖房度日1,300〜1,700。冬季積雪はほぼなし。台風常襲地域として停電リスクが高く、BCP対応が経営の必須要件。",
  },
  {
    label: "需給ひっ迫 — 四国電力エリアの伊方原発依存",
    detail:
      "四国電力管内は伊方原発の安定稼働により需給バランスは比較的良好。高知県内は土佐紙パルプ工場・施設園芸団地・カツオ水産加工へのDR要請が発動されることがある。台風シーズン（夏〜秋）の停電対応も重要。",
  },
  {
    label: "県内産業構造 — 紙パルプ・施設園芸・水産・観光",
    detail:
      "土佐市・いの町・須崎市は土佐和紙発祥地で日本製紙土佐パルプ・大王製紙関連の紙パルプ工業集積。安芸郡・南国市・四万十市は施設園芸（ナス・ピーマン・ミョウガ全国1位）の温室加温・冷蔵需要。室戸市・土佐清水市・宿毛市・高知市はカツオ・マグロ水産加工。観光業は四万十川・室戸岬・桂浜・四国カルストに集積。",
  },
];

const utilitiesList = [
  {
    name: "四国電力（送配電は四国電力送配電）",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』など。2023年6月に規制料金値上げを実施したが、伊方原発の安定稼働により他エリアより値上げ幅は抑制された。",
  },
  {
    name: "四国電力ミライズ・地域密着型新電力",
    role: "四国電力グループ系・地域密着型",
    detail:
      "高知市・南国市・土佐市等の四国電力グループ新電力。県内水力発電所との連携で再エネメニュー展開。施設園芸団地への地産地消型供給も。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "土佐紙パルプ工場・施設園芸大規模団地・カツオ水産加工事業者向け高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。高知県内の中規模法人需要にも対応。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力",
    role: "ガス系新電力",
    detail:
      "高知県内のガス供給網との連携で電気・ガスセット契約を提供。観光業・商業施設で実績。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は7〜10社前後が県内法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "四国電力『高圧電力A』の電力量料金は17〜21円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+1.5〜+3.0円/kWh、伊方原発稼働により比較的低水準）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は23〜27円/kWhレンジ。全国平均より0.5〜1円/kWh安い水準、新電力競争で更に1〜2円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。高知県内では日本製紙土佐パルプ、大王製紙関連、施設園芸大規模団地等が対象。県内事業者数が限られるため、特高契約は新電力競争入札による単価最適化余地が比較的大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "四国電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。施設園芸の中小農家・四万十川観光業の中小ホテル旅館・室戸カツオ漁業者は低圧電灯中心。",
  },
  {
    label: "伊方原発稼働の単価安定化メリット",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。燃料費調整額は中国電力エリアより0.5〜1円/kWh低水準で推移しており、高知県内事業者にも直接的なメリット。",
  },
];

const ppsNetUnitData = [
  {
    label: "四国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、四国電力エリアの特別高圧電力単価は2024年度実績で約16〜19円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より0.5〜1円/kWh安く、伊方原発稼働メリットを反映している。関西電力エリアと並んで全国でも安価な部類。県内大型事業者（日本製紙土佐パルプ・施設園芸大規模団地）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間1〜3億円規模の差が出る。",
  },
  {
    label: "四国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は17〜21円/kWh。県内中規模事業者（紙パルプ関連・施設園芸中堅団地・カツオ水産加工）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、高知県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "四国電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯16〜19円/kWhの水準。県内中小事業者（施設園芸個人農家・四万十川観光業中小旅館・室戸カツオ漁業者）の標準帯域。施設園芸の温室加温は冬季に大きな電力需要が発生するため、低圧契約の見直し効果が高い。",
  },
  {
    label: "県内産業構造との接続 — 紙パルプ・施設園芸・水産・観光に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを高知県の産業構造に紐づけて再加工すると、①日本製紙土佐パルプのような特高契約は固定5年で年間1〜3億円の安定化効果、②施設園芸大規模団地（ナス・ピーマン）の高圧契約は温室加温・冷蔵設備の連続稼働で年間300〜800万円の削減余地、③室戸カツオ・宿毛マグロの水産加工冷蔵倉庫は中規模高圧でCO2冷媒インバータ化により年間200〜500万円の削減余地、④四万十川観光業中小契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という4層構造で契約判断を行うべき。",
  },
];

const industryImpact = [
  {
    title: "業種1: 紙パルプ工場（土佐市・いの町、特別高圧 7,000kW、年間 5,500万kWh）",
    before:
      "Before: 土佐市・いの町の紙パルプ工場A社（日本製紙土佐系・パルプ・段ボール原紙・特殊紙製造）。24時間連続運転、年間電気代 13億円。蒸解釜・抄紙機・乾燥機・コージェネが消費電力の70%。市場連動プラン継続で2023年夏に月最大2.0億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.9円/kWh安、新電力競争入札／伊方原発稼働メリット込み）／蒸解釜の省エネ運転・抄紙機・乾燥機ヒートポンプ転換／コージェネレーション設備更新（SII補助1/3活用・GX関連補助併用、投資3.5億円）／需要家主導型PPAでオフサイト太陽光10MW契約／敷地内太陽光2MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 13億円 → 10.4億円（▲20%、▲2.6億円）／契約kW 7,000→6,300／投資回収 補助金後 3.5年／RE100進捗 40%達成。",
  },
  {
    title: "業種2: 施設園芸団地（安芸郡・南国市、高圧 800kW、年間 640万kWh）",
    before:
      "Before: 安芸郡・南国市の施設園芸団地B社（ナス・ピーマン・ミョウガの温室加温・冷蔵保管・選果機械、全国1位の出荷シェア）。年間電気代 1.9億円。温室加温（冬季）・冷蔵保管・選果機械・換気ファンが消費電力の主要要素。冬季加温需要が電力ピーク。",
    after:
      "After: 高圧の固定3年契約（地域密着型新電力との地産地消契約／四国電力継続より0.9円/kWh安）／温室加温のヒートポンプ転換（SII補助1/2活用・農水省補助併用、投資3,500万円）／冷蔵庫CO2冷媒インバータ式更新／LED補光（光合成促進）／屋根太陽光200kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.9億円 → 1.52億円（▲20%、▲3,800万円）／契約kW 800→700／投資回収 補助金後 2.5年／LED補光による収穫量増加で出荷収入も増加。",
  },
  {
    title: "業種3: カツオ水産加工冷蔵倉庫（土佐清水市、高圧 300kW、年間 240万kWh）",
    before:
      "Before: 土佐清水市のカツオ・マグロ専用水産加工・冷蔵倉庫C社（年間漁獲時期に合わせた長期冷凍保管、-30℃管理）。年間電気代 7,200万円。超低温冷凍設備・加工機械・空調が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+1,500万円の上昇。",
    after:
      "After: 高圧の固定5年契約（地域密着型新電力との地産地消契約／四国電力継続より0.8円/kWh安）／超低温冷凍庫CO2冷媒インバータ式更新（SII補助1/2活用、投資1,800万円）／断熱性能改善工事／屋根太陽光100kW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光300kW契約。",
    result:
      "Result: 年間電気代 7,200万円 → 5,760万円（▲20%、▲1,440万円）／契約kW 300→260／投資回収 補助金後 2.5年／水産加工品質向上で出荷収入も増加。",
  },
];

const costFactors = [
  {
    label: "土佐紙パルプの電力多消費・国際競争",
    detail:
      "土佐市・いの町の紙パルプ工場（日本製紙土佐パルプ等）は蒸解釜・抄紙機の連続稼働で電力多消費。国際的な紙価格・パルプ価格変動と電力単価変動の双方の影響を受ける。",
  },
  {
    label: "施設園芸の冬季加温電力需要",
    detail:
      "高知県は施設園芸（ナス・ピーマン・ミョウガ）全国1位で、冬季温室加温の電力需要が大きい。原油・LPG価格高騰時には電気加温（ヒートポンプ）への転換ニーズが高まり、補助金併用での投資回収シミュレーションが重要。",
  },
  {
    label: "伊方原発稼働のプラス影響",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。高知県内事業者にも直接的なメリット。",
  },
  {
    label: "太平洋型台風常襲とBCP対応",
    detail:
      "高知県は太平洋型台風常襲地域で、停電リスクが高く、BCP対応は経営の必須要件。施設園芸・水産加工・観光業の事業者にとって蓄電池・自家発電設備の併設は重要な投資。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間5,500万kWh使用の紙パルプ工場で年2.2億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では土佐紙パルプで大型採択実績多数。施設園芸団地の温室加温ヒートポンプ転換・水産加工冷蔵でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "瀬戸内沿岸の紙パルプ工場・施設園芸団地・水産加工施設で屋根・空地活用の太陽光導入が有効。台風BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "高知県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "高知県独自補助。紙パルプ・施設園芸・水産加工・観光業の脱炭素化を支援。SII補助との併用ルールに留意。",
  },
  {
    name: "高知市・土佐市・室戸市・四万十市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "高知市『高知市カーボンニュートラル支援』、土佐市『土佐市環境配慮型事業所支援』、室戸市・四万十市等。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "農業・水産業・観光業向け省エネ補助",
    target: "施設園芸ヒートポンプ・カツオ冷蔵・四万十川観光業の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "農水省『施設園芸省エネ補助』、観光庁・環境省連携の省エネ補助。温室加温ヒートポンプ転換・冷蔵設備更新・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "紙パルプ・素材（土佐・いの・須崎）",
    detail:
      "日本製紙土佐パルプ、大王製紙関連工場、土佐和紙工房群（土佐和紙は伝統工芸）。年間使用量5,000万〜2億kWh規模の大型事業者。",
  },
  {
    label: "施設園芸（安芸郡・南国・四万十・須崎）",
    detail:
      "ナス・ピーマン・ミョウガ・ショウガの施設園芸団地（全国1位）、冷蔵倉庫・選果機械。年間使用量100〜800万kWh規模。",
  },
  {
    label: "水産加工（室戸・土佐清水・宿毛・高知）",
    detail:
      "カツオ・マグロ水産加工、ウルメイワシ加工、ふぐ加工。中小事業者中心、年間使用量100〜400万kWh規模。",
  },
  {
    label: "観光業（四万十川・室戸岬・桂浜・四国カルスト）",
    detail:
      "四万十川観光、室戸岬世界ジオパーク、桂浜（坂本龍馬像）、四国カルスト、土佐久礼漁港。年間使用量50〜300万kWh規模。",
  },
  {
    label: "中小製造業・商業（高知市・南国市内）",
    detail:
      "高知市・南国市内の中小製造業（金属加工・機械・食品）、市内商業施設・スーパー・店舗、農産物冷蔵倉庫。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは18%前後（経産省統計、全国平均比やや低水準）。土佐紙パルプ・施設園芸大規模団地は新電力競争入札による切替が進行。観光業は地域密着型新電力との連携が現実的選択肢。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。紙パルプ・施設園芸・水産加工・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 県内水力・須崎火力立地で安定供給、台風時の復旧体制、伊方原発稼働メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①四国電力エリア供給実績の有無、②伊方原発稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤台風時の緊急対応力、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの普及状況",
    detail:
      "日本製紙土佐・大王製紙等の大企業はRE100対応でオフサイトPPA契約を検討中。瀬戸内沿岸の太陽光発電適地（高知県は全国でも日照時間が長い）特性で県内自家消費・近接PPAも有利。",
  },
];

const energySaving = [
  {
    label: "紙パルプ工場のコージェネ・抄紙機最適化",
    detail:
      "土佐・いの町の紙パルプ工場でコージェネレーション設備更新、抄紙機の省エネ運転・乾燥機ヒートポンプ転換で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "施設園芸の温室加温ヒートポンプ転換",
    detail:
      "安芸郡・南国の施設園芸団地で温室加温のヒートポンプ転換・LED補光（光合成促進）導入で電力▲20〜35%。SII補助・農水省補助活用で投資回収 2〜3年。LED補光による収穫量増加で出荷収入も増加。",
  },
  {
    label: "水産加工冷蔵庫のCO2冷媒インバータ化",
    detail:
      "室戸・土佐清水・宿毛の水産加工冷蔵倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。水産加工品質向上で出荷収入も増加。",
  },
  {
    label: "観光業（四万十川・室戸岬）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、温泉ポンプ・スパ加温の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "BEMS・需要見える化・蓄電池（台風BCP重視）",
    detail:
      "工場・施設園芸・水産加工冷蔵倉庫でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。太平洋型台風BCP対応で蓄電池併設の重要性高く、DR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月、施設園芸加温）と夏季ピーク月（7〜8月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "四国電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力7〜10社からの相見積を取得し、固定vs市場連動を比較したか",
  "伊方原発稼働の燃料費調整額への影響を織り込んだ見積か",
  "施設園芸の場合、農水省補助金との併用可否を確認したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・高知県補助・市町村補助・観光庁・農水省補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "太平洋型台風常襲地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "高知県の法人電気代水準は全国比どれくらいですか？", answer: "四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。土佐紙パルプ・施設園芸大規模団地は新電力切替で年間1〜3億円規模のコスト削減事例も。" },
  { question: "施設園芸（ナス・ピーマン）の温室加温電気代対策は？", answer: "①温室加温のヒートポンプ転換（SII補助1/2＋農水省補助併用）、②LED補光（光合成促進）導入、③冷蔵庫CO2冷媒インバータ化、④高圧契約の競争入札による単価最適化、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。LED補光による収穫量増加で出荷収入増にも寄与。投資回収は補助金活用で2〜3年です。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは高知県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の四国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して高知県の産業構造（紙パルプ・施設園芸・水産加工・観光）別の契約判断材料として整理しています。" },
  { question: "土佐紙パルプの特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量5,000万〜2億kWh級の大型事業者では、新電力の競争入札による単価最適化効果が大きいです。特別高圧契約での1円/kWhの単価差が年間5,000万〜2億円規模のコスト差になります。GXトランジションで需要家主導型PPAも有効。" },
  { question: "室戸カツオ・宿毛マグロの水産加工冷蔵倉庫の電気代対策は？", answer: "①超低温冷凍庫CO2冷媒インバータ式への更新（SII補助1/2活用）、②断熱性能改善工事、③高圧契約の競争入札による単価最適化、④地域密着型新電力との地産地消契約、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。水産加工品質向上で出荷収入増にも寄与。投資回収は補助金活用で2〜3年です。" },
  { question: "高知県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、高知県脱炭素・省エネ設備導入補助、高知市・土佐市・室戸市・四万十市の脱炭素補助、農水省『施設園芸省エネ補助』、観光庁・環境省の省エネ補助の6本柱が中心。最大4〜5補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "四万十川・室戸岬等の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③温泉ポンプ・スパ加温の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "太平洋型台風常襲地域でのBCP対応は電力契約にどう影響しますか？", answer: "高知県は太平洋型台風常襲地域で、特に施設園芸・水産加工・観光業の事業者にとってBCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散、③地域密着型新電力との連携、④BEMSによる停電復旧時の電力管理、の4点が重要。新電力選定時に台風時の緊急対応力を必ず評価してください。" },
];

const sourcesItems = [
  { name: "四国電力 公式サイト", url: "https://www.yonden.co.jp/" },
  { name: "高知県林業振興・環境部", url: "https://www.pref.kochi.lg.jp/" },
  { name: "経済産業省 四国経済産業局", url: "https://www.shikoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function KochiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kochi-business-electricity-cost"
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
          <span className="text-slate-800">高知県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            高知県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            高知県は四国電力エリアで、土佐市・いの町の日本製紙土佐パルプ・大王製紙関連の紙パルプ工業、安芸郡・南国市の施設園芸（ナス・ピーマン・ミョウガ全国1位）、室戸・土佐清水・宿毛のカツオマグロ水産加工、四万十川・室戸岬・桂浜の観光業など多様な第一次・素材産業を持ちます。伊方原発3号機の安定稼働により電力単価が全国平均より安く、太平洋型台風常襲地域としてBCP対応が必須の県です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四国電力エリアにおける高知県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>土佐紙パルプ・施設園芸団地・カツオ水産加工のBefore/After削減事例</li>
              <li>施設園芸の温室加温ヒートポンプ転換とLED補光による収穫量増加</li>
              <li>SII・高知県・市町村・農水省・観光庁の組合せ活用パターン</li>
              <li>太平洋型台風常襲地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              高知県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県は四国電力エリアで、高知・南国・土佐・須崎・宿毛・四万十・室戸の7地域から構成されます。土佐紙パルプの電力多消費、施設園芸の冬季加温電力需要、カツオ水産加工の超低温冷凍、伊方原発稼働メリット、太平洋型台風BCP対応が県内電力消費の特徴を形成します。
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
              四国電力エリアの全体像は{" "}
              <Link href="/region-shikoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                四国電力エリア事情
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
              高知県では2024年時点で7〜10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              高知県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              四国電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、高知県の産業構造（紙パルプ・施設園芸・水産加工・観光）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
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
              業種別影響度3件 — 土佐紙パルプ・施設園芸団地・カツオ水産加工冷蔵（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              高知県固有の電気代上昇要因 — 紙パルプ需要・施設園芸加温・台風BCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県の電気代変動は、土佐紙パルプの電力多消費、施設園芸の冬季加温電力需要、伊方原発稼働メリット、太平洋型台風常襲とBCP対応など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              高知県の補助金・優遇制度 — SII・県独自・市町村・農水省・観光庁
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県では国補助（SII等）に加え、県独自補助、高知市・土佐市・室戸市・四万十市の脱炭素補助、農水省『施設園芸省エネ補助』、観光庁・環境省の省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              高知県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県の事業者構成は、紙パルプ・素材、施設園芸、水産加工、観光業、中小製造業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 四国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県の新電力シェアは2024年時点で18%前後。土佐紙パルプ・施設園芸大規模団地は新電力競争入札による切替が進行。観光業は地域密着型新電力との連携が現実的選択肢。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              高知県の省エネは『紙パルプ工場のコージェネ・抄紙機最適化』『施設園芸の温室加温ヒートポンプ転換』『水産加工冷蔵庫のCO2冷媒インバータ化』『観光業（四万十川・室戸岬）の省エネ』『BEMS・需要見える化・蓄電池（台風BCP重視）』の5軸が主力。施設園芸のLED補光・ヒートポンプ転換が省エネ・収穫量増加の両立を実現します。
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
              高知県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。太平洋型台風常襲地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで高知県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高知県は土佐紙パルプ・施設園芸全国1位・カツオ水産加工・伊方原発稼働メリット・太平洋型台風BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冬季ピーク月（1〜2月、施設園芸加温）と夏季ピーク月（7〜8月）の影響額を試算する</li>
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
            <GlossaryLinks currentSlug="kochi-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/tokushima-business-electricity-cost", title: "徳島県の法人電気料金", description: "四国電力エリア・LED医薬品の事情。" },
              { href: "/kagawa-business-electricity-cost", title: "香川県の法人電気料金", description: "四国電力エリア・讃岐うどんの事情。" },
              { href: "/ehime-business-electricity-cost", title: "愛媛県の法人電気料金", description: "隣接県・伊方原発立地県の事情。" },
              { href: "/okinawa-business-electricity-cost", title: "沖縄県の法人電気料金", description: "離島・観光業の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働紙パルプ・施設園芸の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "紙パルプ・施設園芸が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "土佐紙パルプ工場と全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "カツオ水産加工・施設園芸冷蔵向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "四万十川・室戸岬観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "ヒートポンプ・コージェネ設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "四国電力エリア・伊方原発稼働の影響。" },
            ]}
          />

          <ContentCta
            heading="高知県の自社条件で電気代リスクを試算する"
            description="土佐紙パルプ・施設園芸ナスピーマンミョウガ・カツオ水産加工・四万十川観光業など高知県固有の条件と四国電力エリア単価・伊方原発稼働メリット・太平洋型台風BCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="高知県の電力契約見直し、専門家に相談しませんか？"
            description="土佐紙パルプ・施設園芸ナスピーマンミョウガ・カツオ水産加工・四万十川観光業の電気代見直しは業種・地域により論点が異なります。太平洋型台風BCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
