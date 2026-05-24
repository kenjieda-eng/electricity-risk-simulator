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
  "長崎県の法人電気料金完全ガイド｜九州電力エリア単価分析・三菱重工長崎造船・離島電力供給・ハウステンボス観光業の契約最適化";
const pageDescription =
  "長崎県の法人電気料金を地域特化で解説。九州電力エリアの単価水準を業種別に再加工して提示し、三菱重工長崎の造船業、壱岐・対馬・五島の離島電力供給、ハウステンボス・佐世保の観光業、長崎市の都市圏オフィス・水産業の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "長崎県 法人電気料金",
    "九州電力 高圧 単価",
    "三菱重工 長崎 造船 電気代",
    "離島 電力供給 壱岐 対馬 五島",
    "ハウステンボス 観光業 電気代",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/nagasaki-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/nagasaki-business-electricity-cost",
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
    label: "九州電力エリアと長崎県の系統",
    detail:
      "長崎県は九州電力エリアに属し、壱岐・対馬・五島・平戸等の離島系統を含む。県内総電力需要は約80億kWhで、三菱重工長崎造船所等の造船業が約20%、長崎市・佐世保市の都市圏オフィス・商業・観光業が約30%、ハウステンボス・佐世保観光が約10%、離島（壱岐・対馬・五島）が約10%、水産業・農業が約15%、住宅・小規模事業者が約15%の構成。",
  },
  {
    label: "電源構成 — 九州電力エリアと離島系統の二重構造",
    detail:
      "九州電力管内は原発再稼働（玄海3・4号機、川内1・2号機）と太陽光大量導入により、エリア電源構成は原子力約35%、太陽光等再エネ約20%、LNG火力約25%、石炭火力約15%、その他5%。長崎県の離島は独立系統で石油火力・ディーゼル発電依存度が高く、本土系統より単価が高い特殊事情あり。県内には九電の松島火力（石炭）等が立地。",
  },
  {
    label: "気象条件 — 温暖湿潤・台風常襲・離島の特殊気候",
    detail:
      "県内は温暖湿潤気候で夏季高温多湿、冬季は穏やか。年間冷房度日（CDD24）1,500〜1,700、暖房度日400〜600。台風常襲地域で年間複数回の直撃。離島（壱岐・対馬・五島）は海上気候の影響で塩害対策・台風BCP対応が経営課題。観光業の年中冷房需要も高水準。",
  },
  {
    label: "需給ひっ迫 — 太陽光出力制御と離島系統の特殊事情",
    detail:
      "九州電力管内は太陽光大量導入により昼間余剰、夕方ひっ迫の二重構造。離島系統は本土と独立しているため需給融通不可能で、台風時の停電復旧も県内体制のみで対応。離島事業者には島嶼型マイクログリッド（太陽光＋蓄電池＋発電機）の活用機会が広がっている。",
  },
  {
    label: "県内産業構造 — 造船・観光・離島・水産・都市圏オフィス",
    detail:
      "三菱重工長崎造船所（長崎市・諫早市）、佐世保重工業（佐世保市）、長崎造船産業集積。ハウステンボス（佐世保市）、雲仙温泉、長崎市内観光業（出島・グラバー園）。壱岐・対馬・五島・平戸の離島観光業・水産業。長崎市・佐世保市の都市圏オフィス・商業。水産業（マグロ・カツオ・サバ・養殖魚）が長崎港・松浦港・平戸港中心。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（送配電は九州電力送配電）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大、規制料金・自由料金両方を提供。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。離島系統は九電が独占供給。2023年6月に規制料金値上げを実施したが、原発稼働により値上げ幅は東日本各社より小幅に留まった。",
  },
  {
    name: "九電みらいエナジー・西部ガス系新電力",
    role: "九州電力グループ系・地域密着型",
    detail:
      "長崎市・佐世保市の地域密着型新電力。九電グループおよび西部ガス系の電気・ガスセット契約で都市圏オフィス・商業向け営業力強い。離島では選択肢が限定的。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき・Looopでんき",
    role: "全国系新電力",
    detail:
      "九州電力エリアで法人向け高圧契約に展開。三菱重工長崎造船の特高契約や長崎市内のオフィス・観光業で実績。固定単価3年契約や燃料費調整額上限ありメニューを展開。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。長崎県内の造船業・大型観光施設（ハウステンボス）・大手水産加工の大口需要にも対応。",
  },
  {
    name: "地域系・離島系新電力",
    role: "地域密着型",
    detail:
      "長崎県内のガス系新電力、地元商工会連携系、離島マイクログリッド系の地域密着型新電力。中小事業者・離島事業者向けの省エネ提案やCO2フリー電源メニューも展開。",
  },
  {
    name: "新電力市場の構造",
    role: "市場動向",
    detail:
      "長崎県の新電力シェアは2024年時点で約15〜20%（全国平均より低水準）。三菱重工長崎造船・ハウステンボス・長崎市内オフィスで新電力切替が活発。離島事業者は九州電力依存度が高い。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金14〜17円/kWh+調整項目。長崎県内では三菱重工長崎造船所、佐世保重工業、ハウステンボス、長崎市内の大型商業施設が対象。本州エリアより1〜2円/kWh安い水準で、競争入札による更なる1〜3円/kWh削減余地あり。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "九州電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜21円/kWh。長崎市・佐世保市の中小オフィス・観光業中堅・水産加工小規模事業者は低圧電灯中心。",
  },
  {
    label: "離島系統の単価特殊事情",
    detail:
      "壱岐・対馬・五島・平戸等の離島は独立系統で石油火力・ディーゼル発電依存度が高く、本土系統より単価が2〜4円/kWh高い。離島事業者は太陽光自家消費＋蓄電池の組合せが電気代削減と台風BCP対応の両立に最も効果的。島嶼型マイクログリッド補助の活用余地大。",
  },
];

const ppsNetUnitData = [
  {
    label: "九州電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、九州電力エリアの特別高圧電力単価は2024年度実績で約14〜17円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より2〜3円/kWh安く、原発稼働の影響が反映されている。長崎県内の三菱重工長崎造船・佐世保重工・ハウステンボスにとっては、競争入札による更なる1〜3円/kWh削減で年間1,000万〜1億円規模のコスト削減余地。",
  },
  {
    label: "九州電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は16〜20円/kWh、本州エリアより1〜2円/kWh安い。県内中規模事業者（長崎市内オフィス・佐世保観光業中堅・水産加工大手）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、長崎県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替で年間100〜300万円規模のコスト削減が見込める。",
  },
  {
    label: "離島系統・低圧単価水準",
    detail:
      "壱岐・対馬・五島・平戸等の離島は石油火力・ディーゼル発電依存で単価が本土より2〜4円/kWh高い。低圧電力11〜14円/kWh、低圧電灯19〜22円/kWh水準。離島事業者（観光業・水産加工・小規模商業）は新電力切替の余地が限られるが、太陽光自家消費＋蓄電池＋島嶼型マイクログリッドの組合せで電気代を大幅削減可能。",
  },
  {
    label: "県内産業構造との接続 — 造船・観光・離島・水産に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを長崎県の産業構造に紐づけて再加工すると、①三菱重工長崎造船・佐世保重工の特高契約は競争入札＋自家発電・コージェネ最適化＋PPAで年間1,000万〜1億円の総合削減効果、②ハウステンボス・観光業の高圧契約は新電力切替＋屋根太陽光＋蓄電池で年間500万〜3,000万円の削減余地、③離島観光業・水産加工は島嶼型マイクログリッド（太陽光＋蓄電池＋発電機）で年間100〜500万円の削減余地と台風BCP対応の両立、という3層構造で契約判断を行うべき。",
  },
];

const industryImpact = [
  {
    title: "業種1: 造船業・三菱重工長崎（長崎市、特別高圧 12,000kW、年間 9,500万kWh)",
    before:
      "Before: 長崎市の大型造船A社（連続稼働、溶接・切断・塗装・大型クレーン運転、艦船・LNG船・洋上風力基礎建造）。年間電気代 19億円。電気溶接機・大型クレーン・コンプレッサー・塗装乾燥炉・空調が消費電力の70%。九電継続で固定費・燃料費調整額の変動リスクあり。",
    after:
      "After: 特別高圧の競争入札（複数全国系新電力で2.5円/kWh削減）／屋根太陽光6MW・敷地内太陽光2MW・蓄電池8MWh導入（需要家主導型PPA補助・SII補助併用、投資18億円）／電気溶接機インバータ更新・廃熱回収高度化／塗装乾燥炉ヒートポンプ化／コージェネ更新／BEMS全工程導入。",
    result:
      "Result: 年間電気代 19億円 → 13.3億円（▲30%、▲5.7億円）／契約kW 12,000→11,000／太陽光自家消費比率 25%／投資回収 補助金後 3〜4年／RE100進捗 25%達成／CO2 ▲20%。",
  },
  {
    title: "業種2: 大型観光施設・ハウステンボス（佐世保市、高圧 4,000kW、年間 3,200万kWh）",
    before:
      "Before: 佐世保市の大型観光施設B社（ハウステンボス、ホテル・レストラン・商業・アトラクション併設、国内外観光客対応）。年間電気代 9.6億円。冷房（夏季）・暖房（冬季）・客室照明・アトラクション電源・大型イルミネーションが消費電力の80%。",
    after:
      "After: 高圧の固定3年契約（全国系新電力で1.8円/kWh削減）／屋根太陽光4MW・蓄電池5MWh導入（SII補助・長崎県補助併用、投資10億円）／客室空調インバータ更新／LED全館化・イルミネーションLED化／アトラクション省エネ機器更新／BEMS導入。",
    result:
      "Result: 年間電気代 9.6億円 → 6.72億円（▲30%、▲2.88億円）／契約kW 4,000→3,600／太陽光自家消費比率 30%／投資回収 補助金後 4〜5年／RE100進捗 30%達成。",
  },
  {
    title: "業種3: 離島観光業・五島リゾート（五島市、高圧 500kW、年間 400万kWh）",
    before:
      "Before: 五島市の中型観光リゾートC社（客室120室、ビーチリゾート・マリンアクティビティ、国内外観光客中心）。年間電気代 1.4億円。冷房（年中稼働）・客室照明・厨房・プール温度管理が消費電力の主要要素。離島ゆえに本土系新電力の選択肢ほぼなし、石油火力依存単価高。",
    after:
      "After: 高圧の固定3年契約（九電継続で条件最適化）／島嶼型マイクログリッド導入（屋根太陽光800kW・敷地内太陽光500kW・蓄電池3MWh・台風時BCP自家発電機、長崎県離島補助・需要家主導型PPA補助併用、投資5億円）／客室空調インバータ更新・人感センサ連動／LED全館化／BEMS導入。",
    result:
      "Result: 年間電気代 1.4億円 → 9,800万円（▲30%、▲4,200万円）／契約kW 500→440／太陽光自家消費比率 50%／投資回収 補助金後 6年（電気代削減＋台風BCP価値）／離島電力安定供給の事業継続性向上。",
  },
];

const costFactors = [
  {
    label: "造船業の連続稼働と電気代影響",
    detail:
      "三菱重工長崎・佐世保重工等の造船業は電気溶接機・大型クレーン・塗装乾燥炉の連続稼働が標準。年間9,500万kWh使用の大型造船で電気代19億円規模、燃料費調整額1円/kWh変動で年9,500万円の差として経営に直接影響。LNG船・洋上風力基礎建造需要増加で電力需要拡大傾向。",
  },
  {
    label: "離島系統の単価高と電力供給特殊事情",
    detail:
      "壱岐・対馬・五島・平戸等の離島は石油火力・ディーゼル発電依存で単価が本土より2〜4円/kWh高い。離島事業者は太陽光自家消費＋蓄電池の組合せが電気代削減と台風BCP対応の両立に最も効果的。島嶼型マイクログリッド補助の活用余地大。",
  },
  {
    label: "観光業の年中冷房需要とイルミネーション",
    detail:
      "ハウステンボス、雲仙温泉、長崎市内観光業の年中冷房需要・冬季イルミネーション需要が経営課題。大型イルミネーションのLED化、ホテル空調インバータ更新による電気代削減効果大。",
  },
  {
    label: "台風常襲とBCP重要性",
    detail:
      "長崎県は台風常襲地域で、年間複数回の直撃を受ける。離島では台風時の停電復旧が県内体制のみで対応されるため、BCP対応が経営課題。蓄電池・自家発電設備の併設は離島事業者にとって必須投資。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後と上昇。年間9,500万kWh使用の大型造船で年3.8億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・電気溶接機",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では造船業の電気溶接機・塗装乾燥炉更新で大型採択実績多数。ハウステンボスのLED・空調更新でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "長崎県は太陽光出力制御頻発エリアとして、自家消費・近接PPAの効果が大きい。離島では台風BCP対応で蓄電池併設の重要性極めて高い。",
  },
  {
    name: "長崎県脱炭素・離島エネルギー補助",
    target: "県内事業者の高効率設備・再エネ設備導入、離島マイクログリッド",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "長崎県独自補助。造船業・観光業・離島・水産加工の脱炭素化を支援する大型補助あり。離島系統の特性を踏まえた島嶼型マイクログリッド補助も。",
  },
  {
    name: "長崎市・佐世保市・五島市の脱炭素補助",
    target: "市町村内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "長崎市『長崎市カーボンニュートラル支援』、佐世保市『環境未来都市』、五島市『五島型マイクログリッド支援』。市町村独自の脱炭素政策と連動した支援。",
  },
  {
    name: "造船業・観光業向け省エネ補助",
    target: "造船業、観光業、離島事業者、水産加工施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "国交省・観光庁・農水省・環境省・九州経済産業局連携の省エネ補助。電気溶接機・塗装乾燥炉・空調・冷凍冷蔵設備更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "造船業（長崎市・佐世保市・諫早市）",
    detail:
      "三菱重工長崎造船所、佐世保重工業、関連の造船・舶用機器・素材加工。年間使用量1,000万〜1億kWh規模。連続稼働・大量電力消費の特性。",
  },
  {
    label: "大型観光施設（ハウステンボス・雲仙・長崎市内）",
    detail:
      "ハウステンボス（佐世保市）、雲仙温泉、長崎市内観光業（出島・グラバー園・原爆資料館周辺）。年間使用量500万〜3,500万kWh規模。",
  },
  {
    label: "離島観光業・水産業（壱岐・対馬・五島・平戸）",
    detail:
      "壱岐・対馬・五島・平戸の離島観光業、マグロ・カツオ・サバ・養殖魚水産加工。年間使用量50万〜500万kWh規模。",
  },
  {
    label: "オフィス・商業（長崎市・佐世保市）",
    detail:
      "長崎市・佐世保市の都市圏オフィス、商業施設、サービス業。年間使用量100万〜1,000万kWh規模。",
  },
  {
    label: "中小製造業・水産加工（県全域）",
    detail:
      "長崎市・佐世保市・諫早市の中小製造業（食品・建設資材・印刷）、市内商業施設・スーパー・店舗、水産加工。年間使用量50万〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは約15〜20%（全国平均より低水準）。三菱重工長崎造船・ハウステンボス・長崎市内オフィスで新電力切替が活発。離島事業者は九州電力依存度が高い。",
  },
  {
    label: "市場連動プランの選択肢",
    detail:
      "九州電力エリアは太陽光出力制御で昼間スポット価格が低下する一方、夕方ひっ迫で高騰する変動が大きい。市場連動プランの選択肢は本州エリアと同等にあるが、造船業の連続稼働事業者は固定プランが安全。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 原発稼働による安定供給と燃料費調整額の上振れ抑制、離島供給の唯一の選択肢、災害時の復旧体制。デメリット: 競争入札と比較した単価高、太陽光出力制御による余剰活用余地の未活用。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①九州電力エリア供給実績の有無、②造船業向け連続稼働対応の信頼性、③固定単価期間の確実性、④燃料費調整額の有無・上限、⑤太陽光自家消費・PPA連携メニューの充実度、の5点が県内では特に重要。",
  },
  {
    label: "離島事業者の島嶼型マイクログリッド優位性",
    detail:
      "長崎県の離島事業者は太陽光自家消費＋蓄電池＋自家発電機の島嶼型マイクログリッドが電気代削減・台風BCP対応の両立に最も効果的。長崎県離島補助・需要家主導型PPA補助の組合せで投資回収を1〜2年短縮できる。",
  },
];

const energySaving = [
  {
    label: "造船業の電気溶接機インバータ・廃熱回収",
    detail:
      "長崎市・佐世保市の造船業で電気溶接機インバータ更新、塗装乾燥炉ヒートポンプ化、廃熱回収高度化、コージェネ更新、BEMS全工程導入で電力▲25〜35%。SII補助・需要家主導型PPA補助の組合せ活用で投資回収 3〜4年。",
  },
  {
    label: "ハウステンボス・観光業のLED・空調最適化",
    detail:
      "佐世保市・雲仙温泉・長崎市内の観光業でLED全館化・イルミネーションLED化、客室空調インバータ更新、屋根太陽光導入で電力▲25〜35%。SII補助・長崎県補助活用で投資回収 4〜5年。",
  },
  {
    label: "離島マイクログリッド（太陽光＋蓄電池＋自家発電）",
    detail:
      "壱岐・対馬・五島・平戸の離島事業者で島嶼型マイクログリッド導入で電力▲30〜50%。長崎県離島補助・需要家主導型PPA補助の組合せ活用で投資回収 6〜8年。台風BCP価値も含めると投資効果は更に大きい。",
  },
  {
    label: "水産加工の冷凍冷蔵省エネ化",
    detail:
      "長崎港・松浦港・平戸港・離島の水産加工冷蔵倉庫でCO2冷媒インバータ化、断熱性能改善、太陽光導入で電力▲25〜40%。投資回収 SII補助活用で 3〜5年。",
  },
  {
    label: "台風BCP用蓄電池・自家発電の標準化",
    detail:
      "観光業・離島事業者で台風BCP対応の蓄電池・自家発電設備の併設が標準化。需要家主導型PPA・島嶼型マイクログリッドとの連携で平常時の電気代削減と災害時BCPの両立が可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "造船業の電気溶接機連続稼働（24時間×365日）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "九州電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力（九電グループ系・西部ガス系・全国系・離島系）からの相見積を取得したか",
  "太陽光自家消費・需要家主導型PPAの試算を実施したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "蓄電池併設による太陽光出力制御回避・DR参加・台風BCP対応の試算を実施したか",
  "SII補助・長崎県補助・離島補助・長崎市佐世保市五島市補助・国交省観光庁補助の併用可否を確認したか",
  "離島事業者の場合、島嶼型マイクログリッド補助の活用可否を確認したか",
  "市場連動プランと固定プランの選択肢を造船連続稼働の自社特性で比較したか",
  "台風常襲地域でのBCP（停電対応・蓄電池・自家発・島嶼型マイクログリッド）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "長崎県の法人電気代水準は全国比どれくらいですか？", answer: "九州電力エリアは原発稼働の影響で本州エリアより1〜2円/kWh安い水準を維持しています。長崎県内法人の実質単価は22〜27円/kWh（高圧）が標準帯域で、新電力切替により1〜2円/kWh改善余地があります。一方、離島（壱岐・対馬・五島・平戸）は石油火力依存で本土より2〜4円/kWh高い特殊事情があります。" },
  { question: "なぜ長崎県の離島は電気代が高いのですか？", answer: "①本土の電力系統と独立した離島系統、②原発がなく石油火力・ディーゼル発電依存度が高い、③離島供給コストが高い、④台風BCP対応コストが上乗せされる、の4つが主な構造的要因です。一方、太陽光発電適地として自家消費による削減効果が大きく、長崎県離島補助・需要家主導型PPA補助の組合せで投資効果を最大化できます。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは長崎県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の九州電力エリアの単価データを参考に、自社の現契約単価と本州エリアとの差を定量化できます。本ページではこのデータを再加工して長崎県の産業構造（造船・観光・離島・水産）別の契約判断材料として整理しています。本土と離島の単価差や太陽光自家消費の戦略が県内事業者の競争優位を最大化します。" },
  { question: "三菱重工長崎・佐世保重工の造船業の電気代対策で最も効果的なのは？", answer: "①特別高圧の競争入札（複数全国系新電力で2〜3円/kWh削減）、②屋根太陽光4〜8MW＋蓄電池の大規模導入（需要家主導型PPA補助・SII補助の組合せ活用）、③電気溶接機インバータ更新、④塗装乾燥炉ヒートポンプ化、⑤コージェネ更新、の5本柱が中心。太陽光自家消費比率25%以上で年間電気代を30%削減可能です。" },
  { question: "離島事業者でも電気代削減の選択肢はありますか？", answer: "はい、島嶼型マイクログリッド（太陽光＋蓄電池＋自家発電機）の導入が最も効果的です。長崎県離島補助・需要家主導型PPA補助・SII補助の組合せ活用で投資回収6〜8年が目安。台風BCP価値も含めると投資効果は更に大きく、離島電力供給の事業継続性向上にも直結します。" },
  { question: "長崎県で活用できる省エネ・再エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、長崎県脱炭素・離島エネルギー補助、長崎市・佐世保市・五島市の脱炭素補助、造船業・観光業向け省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "ハウステンボス・観光業の電気代対策は？", answer: "①新電力切替＋燃料費調整額上限ありメニュー選択、②屋根太陽光＋蓄電池導入（イルミネーション用電力相殺）、③LED全館化・イルミネーションLED化、④客室空調インバータ更新、⑤BEMS導入・アトラクション省エネ機器更新、の5本柱が中心。太陽光自家消費比率30%以上で年間電気代を30%削減可能です。" },
  { question: "台風常襲地域でのBCP対応は電力契約にどう影響しますか？", answer: "長崎県は台風常襲地域で、BCP対応が経営課題です。①蓄電池・自家発電設備の併設、②離島事業者は島嶼型マイクログリッドへの参加、③複数の電源確保（九電＋自家太陽光＋蓄電池）、④台風時の燃料調達ルート確保、⑤BEMSによる停電復旧時の電力管理、の5点が重要。新電力選定時に台風時の緊急対応力を最優先で評価してください。" },
];

const sourcesItems = [
  { name: "九州電力 公式サイト", url: "https://www.kyuden.co.jp/" },
  { name: "長崎県環境部", url: "https://www.pref.nagasaki.jp/" },
  { name: "九州経済産業局", url: "https://www.kyushu.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function NagasakiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/nagasaki-business-electricity-cost"
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
          <span className="text-slate-800">長崎県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            長崎県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            長崎県は九州電力エリアに属し、本土と独立した離島系統（壱岐・対馬・五島・平戸）を持つ特殊なエリア。三菱重工長崎・佐世保重工の造船業、ハウステンボス・雲仙温泉・長崎市内の観光業、離島観光業・水産業（マグロ・カツオ・養殖魚）、長崎市・佐世保市の都市圏オフィス・商業と多様な産業構造を持ちます。本土では原発稼働メリットを享受する一方、離島は石油火力依存で本土より2〜4円/kWh高い特殊事情があり、太陽光自家消費＋蓄電池＋島嶼型マイクログリッドによる契約最適化戦略が主流です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-24" updatedAt="2026-05-24" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>九州電力エリアの本州より安い電気代水準と離島系統の特殊事情（pps-net.org/unitデータ加工）</li>
              <li>三菱重工長崎造船・ハウステンボス・五島離島観光業のBefore/After削減事例</li>
              <li>太陽光自家消費＋蓄電池＋島嶼型マイクログリッドによる電気代30%削減戦略</li>
              <li>SII・長崎県・離島・長崎市佐世保市五島市・国交省観光庁補助の組合せ活用</li>
              <li>台風常襲地域での電力契約と離島BCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              長崎県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県は九州電力エリアに属し、本土と独立した離島系統（壱岐・対馬・五島・平戸）を持つ特殊エリア。三菱重工長崎造船・佐世保重工の造船業、ハウステンボス・雲仙温泉の観光業、離島観光業・水産業、長崎市・佐世保市の都市圏オフィス・商業が県内電力消費の中核を形成します。本土と離島の二重構造への対応が県固有の経営課題です。
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
              長崎県では九州電力が最大シェアを持ちますが、本土では2024年時点で複数の新電力が法人向け高圧で営業中です。離島では九電が独占供給。九州電力グループ系、西部ガス系、全国系、地域・離島系の4カテゴリが主軸となります。
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
              長崎県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九州電力エリアは原発稼働メリットにより本州より1〜2円/kWh安い水準を維持。一方、離島は石油火力依存で本土より2〜4円/kWh高い特殊事情があります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで本土と離島を分けて比較することが重要です。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理。実際の単価は契約条件・季節・時間帯・新電力選定・離島か本土かで変動します。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、長崎県の産業構造（造船・観光・離島・水産）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。本土と離島の二重構造への対応が戦略の中心です。
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
              業種別影響度3件 — 三菱重工長崎造船・ハウステンボス・五島離島観光業（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県の主力業種3つで、契約見直し＋太陽光自家消費＋蓄電池の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。離島事業者は島嶼型マイクログリッドによる年間電気代30%削減と台風BCP対応の両立が実現可能です。
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
              <Link href="/shipbuilding-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">造船業の電気料金見直し</Link>
              、観光業向けは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・旅館の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              長崎県固有の電気代上昇要因 — 造船連続稼働・離島系統・台風BCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県の電気代変動は、造船業の連続稼働、離島系統の単価高、観光業の年中冷房需要、台風常襲とBCPの重要性、再エネ賦課金など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直し・太陽光自家消費・蓄電池BCP投資の優先順位付けが可能になります。
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
              長崎県の補助金・優遇制度 — SII・県独自・離島・市町村・国交省観光庁
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県では国補助（SII等）に加え、県独自補助、離島・島嶼型エネルギー補助、長崎市・佐世保市・五島市の脱炭素補助、国交省・観光庁・農水省の省エネ補助が組合せ可能です。最大3〜4補助の組合せで投資回収を1〜2年短縮できます。
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
              長崎県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県の事業者構成は、造船業、大型観光施設、離島観光業・水産業、オフィス・商業、中小製造業・水産加工の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              長崎県の新電力シェアは2024年時点で約15〜20%（全国平均より低水準）。三菱重工長崎造船・ハウステンボス・長崎市内オフィスで新電力切替が活発です。離島事業者は九州電力依存度が高く、島嶼型マイクログリッドの活用が重要です。
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
              長崎県の電気代対策は『造船業の電気溶接機インバータ・廃熱回収』『ハウステンボス・観光業のLED・空調最適化』『離島マイクログリッド』『水産加工の冷凍冷蔵省エネ化』『台風BCP用蓄電池・自家発電の標準化』の5軸が主力。本土と離島の二重構造に対応した契約最適化が県内事業者の競争優位です。
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
              長崎県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や太陽光・蓄電池投資の判断材料が下がります。離島事業者と本土事業者で論点が異なり、台風BCP対応が経営課題です。
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
              シミュレーターで長崎県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長崎県は造船業・観光業・離島・水産業と多様な産業構造を持ち、本土と離島の単価二重構造が特徴的なエリアです。シミュレーターで自社条件における上振れ幅を試算し、太陽光自家消費＋蓄電池導入・島嶼型マイクログリッド・新電力競争入札・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>造船業の電気溶接機連続稼働の影響額を試算する</li>
              <li>太陽光自家消費＋蓄電池の組合せによる削減効果を試算する</li>
              <li>事例で示した30%前後の削減レンジの自社適用可能性を見立てる</li>
              <li>離島事業者は島嶼型マイクログリッドの台風BCP投資効果を評価する</li>
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
            <GlossaryLinks currentSlug="nagasaki-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/fukuoka-business-electricity-cost", title: "福岡県の法人電気料金", description: "九州電力エリア・北九州工業地帯の事情(参考)。" },
              { href: "/saga-business-electricity-cost", title: "佐賀県の法人電気料金", description: "九州電力エリア・有田焼窯業の事情(参考)。" },
              { href: "/kumamoto-business-electricity-cost", title: "熊本県の法人電気料金", description: "九州電力エリア・TSMC進出・農業の事情(参考)。" },
              { href: "/oita-business-electricity-cost", title: "大分県の法人電気料金", description: "九州電力エリア・鉄鋼化学コンビナート・地熱発電の事情(参考)。" },
              { href: "/kagoshima-business-electricity-cost", title: "鹿児島県の法人電気料金", description: "九州電力エリア・川内原発・焼酎産業の事情(参考)。" },
              { href: "/okinawa-business-electricity-cost", title: "沖縄県の法人電気料金", description: "沖縄電力エリア・離島供給・観光業の事情(参考)。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "造船連続稼働事業者の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "離島・造船が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "ハウステンボス・雲仙温泉・離島観光向け。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "マグロ・養殖魚水産加工冷蔵向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "電気溶接機・LED・冷凍冷蔵設備更新の主力補助金。" },
              { href: "/onsite-ppa-explained", title: "オンサイトPPA(自家消費型太陽光)", description: "太陽光自家消費＋蓄電池の組合せ戦略。" },
            ]}
          />

          <ContentCta
            heading="長崎県の自社条件で電気代リスクを試算する"
            description="三菱重工長崎・佐世保重工の造船業、ハウステンボス・雲仙温泉・長崎市内の観光業、壱岐対馬五島平戸の離島事業者、長崎港・松浦港の水産加工など長崎県固有の条件と九州電力エリア単価・本土離島二重構造・台風常襲BCPを踏まえ、シミュレーターで自社の上振れリスクと太陽光自家消費＋蓄電池による削減余地を試算できます。"
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
            heading="長崎県の電力契約見直し、専門家に相談しませんか？"
            description="三菱重工長崎・佐世保重工の造船業、ハウステンボス・雲仙温泉の観光業、壱岐対馬五島平戸の離島事業者、長崎港・松浦港の水産加工の電気代見直しは業種・地域により論点が異なります。台風常襲BCP・離島島嶼型マイクログリッド対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
