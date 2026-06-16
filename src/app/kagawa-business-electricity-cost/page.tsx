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
  "香川県の法人電気料金完全ガイド｜四国電力エリア単価分析・讃岐うどん製造・坂出造船・高松物流の契約最適化";
const pageDescription =
  "香川県の法人電気料金を地域特化で解説。四国電力エリアの単価水準を業種別に再加工して提示し、讃岐うどん製造・冷蔵倉庫、坂出造船（JMU・川重）、高松都市圏オフィス・データセンター、小豆島観光業の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "香川県 法人電気料金",
    "四国電力 高圧 単価",
    "讃岐うどん 製造 電気代",
    "坂出 造船 電力",
    "高松 物流 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kagawa-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kagawa-business-electricity-cost",
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
    label: "四国電力エリアと香川県の位置付け",
    detail:
      "香川県は四国電力のエリア。高松・丸亀・坂出・善通寺・観音寺・小豆島の6地域から構成。県内総電力需要は約50億kWhで四国電力管内の約20%を占める。讃岐うどん製造（県内600軒超）、坂出造船（JMU・川崎重工）、高松都市圏のオフィス・データセンター、小豆島観光業、農産物冷蔵倉庫が県内電力消費の中核。",
  },
  {
    label: "電源構成 — 坂出火力と四国電力エリア",
    detail:
      "四国電力管内は伊方原発（伊方町・3号機が安定稼働中）の原発比率が高めで約30%、LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には四国電力の坂出LNG火力発電所、坂出石炭火力発電所、内海ダム水力発電所が立地。坂出は四国電力エリア最大の火力発電拠点として地域電力供給の中核。",
  },
  {
    label: "気象条件 — 瀬戸内温暖少雨と渇水リスク",
    detail:
      "県内は瀬戸内気候で温暖少雨。日本でも有数の少雨地域で渇水リスクが定期的。年間冷房度日（CDD24）1,200〜1,500、暖房度日1,500〜2,000。夏季の渇水・水不足が経営課題となるため、農業・うどん製造業では水・電力管理が一体化。",
  },
  {
    label: "需給ひっ迫 — 四国電力エリアの伊方原発依存",
    detail:
      "四国電力管内は伊方原発の安定稼働により需給バランスは比較的良好。香川県内は坂出造船・讃岐うどん工場・高松都市圏のオフィスへのDR要請が発動。台風シーズン（夏〜秋）の電力需要管理も重要。",
  },
  {
    label: "県内産業構造 — うどん製造・造船・物流・観光",
    detail:
      "高松市は四国の中心都市で、商業集積・データセンター・四国フェリー物流。讃岐うどん製造は県全域に600軒超が分布し、冷蔵保存・粉砕・茹で・冷却の電力消費。坂出市は造船業（JMU・川崎重工）と臨海工業。丸亀市は団扇・冷凍食品製造。観光業は小豆島・直島・栗林公園・金刀比羅宮に集積。",
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
      "高松市・坂出市・丸亀市等の四国電力グループ新電力。大型法人需要への営業力強い。坂出火力との連携で大口供給に強み。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "讃岐うどん工場・坂出造船・高松データセンターの高圧・特別高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。香川県内の大規模法人需要にも対応。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力",
    role: "ガス系新電力",
    detail:
      "香川県内のガス供給網との連携で電気・ガスセット契約を提供。観光業・商業施設で実績。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は8〜10社前後が県内法人向け高圧で新規受付中。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。香川県内ではJMU坂出造船所、川崎重工坂出、坂出LNG火力周辺事業者、高松データセンター等が対象。新電力競争入札による単価最適化余地が大きく、年間1〜10億円規模のコスト変動。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "四国電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。讃岐うどん店・小豆島観光業の中小ホテル旅館・商店街事業者は低圧電灯中心。",
  },
  {
    label: "伊方原発稼働の単価安定化メリット",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。燃料費調整額は中国電力エリアより0.5〜1円/kWh低水準で推移しており、香川県内事業者にも直接的なメリット。",
  },
];

const ppsNetUnitData = [
  {
    label: "四国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、四国電力エリアの特別高圧電力単価は2024年度実績で約16〜19円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より0.5〜1円/kWh安く、伊方原発稼働メリットを反映している。関西電力エリアと並んで全国でも安価な部類。県内大型事業者（JMU坂出造船・川崎重工坂出・高松データセンター）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間1〜5億円規模の差が出る。",
  },
  {
    label: "四国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は17〜21円/kWh。県内中規模事業者（讃岐うどん大手製造・坂出造船関連・高松オフィス・小豆島観光業）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、香川県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "四国電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯16〜19円/kWhの水準。県内中小事業者（讃岐うどん店・小豆島観光業・高松市内商店街）の標準帯域。讃岐うどん店は600軒超と多数あり、低圧契約の見直し余地は数千軒分の積み上げ効果がある。",
  },
  {
    label: "県内産業構造との接続 — うどん製造・造船・物流・観光に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを香川県の産業構造に紐づけて再加工すると、①JMU坂出造船・川崎重工坂出のような特高契約は固定5年で年間1〜3億円の安定化効果、②讃岐うどん大手製造（テーブルマーク・カトキチ等）の高圧契約は冷蔵倉庫・粉砕機・茹で釜の連続稼働で年間300〜1,000万円の削減余地、③小豆島・直島観光業の中小契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という3層構造で契約判断を行うべき。",
  },
];

const industryImpact = [
  {
    title: "業種1: 造船工場（坂出市、特別高圧 6,000kW、年間 4,800万kWh）",
    before:
      "Before: 坂出市の造船工場A社（JMU坂出造船所系・大型タンカー・LNG運搬船・LPG運搬船建造）。年間電気代 11億円。クレーン・溶接機・大型コンプレッサー・乾ドック排水が消費電力の主要要素。建造船型により電力需要変動大きい。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.8円/kWh安、新電力競争入札／伊方原発稼働メリット込み）／溶接機インバータ化・クレーン回生ブレーキ化／LED全棟化（SII補助1/3活用、投資3.0億円）／敷地内太陽光2MW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光10MW契約。",
    result:
      "Result: 年間電気代 11億円 → 8.8億円（▲20%、▲2.2億円）／契約kW 6,000→5,400／投資回収 補助金後 3年／GX対応で受注競争力強化。",
  },
  {
    title: "業種2: 讃岐うどん大手製造工場（観音寺市、高圧 700kW、年間 560万kWh）",
    before:
      "Before: 観音寺市の讃岐うどん大手製造工場B社（テーブルマーク・カトキチ系・冷凍うどん・チルドうどん・出汁の素製造）。24時間連続運転、年間電気代 1.7億円。冷蔵冷凍倉庫・粉砕機・茹で釜・冷却設備・コンプレッサーが消費電力の主要要素。冷凍うどんの全国出荷で大口需要。",
    after:
      "After: 高圧の固定5年契約（中国電力グループ系新電力との競争入札／伊方原発稼働メリット込み）／冷蔵冷凍倉庫のCO2冷媒インバータ式更新（SII補助1/2活用、投資3,000万円）／粉砕機・茹で釜のインバータ化／LED全棟化／屋根太陽光200kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.7億円 → 1.36億円（▲20%、▲3,400万円）／契約kW 700→620／投資回収 補助金後 2.5年／うどん品質向上で出荷収入も増加。",
  },
  {
    title: "業種3: 観光業・小豆島オリーブ温泉ホテル（小豆島町、高圧 300kW、年間 240万kWh）",
    before:
      "Before: 小豆島町の大型観光ホテルC社（客室120室、オリーブ・醤油観光・温泉プール完備、関西・四国観光客中心、インバウンド比率20%）。年間電気代 7,200万円。冷暖房・厨房・客室照明・スパが消費電力の主要要素。観光繁忙期（GW・夏休み・紅葉シーズン）に電力ピーク。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調インバータ更新・人感センサ連動／LED全館化／スパ温水・厨房の高効率化（観光庁・環境省補助活用、投資2,800万円）／屋根太陽光100kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 7,200万円 → 5,760万円（▲20%、▲1,440万円）／契約kW 300→260／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "讃岐うどん製造業の冷蔵・粉砕電力多消費",
    detail:
      "讃岐うどん大手製造（テーブルマーク・カトキチ等）は冷蔵冷凍倉庫・粉砕機・茹で釜・冷却設備の連続稼働で電力多消費。電力単価変動の影響を直接受けるため、新電力競争入札による単価最適化が経営課題。",
  },
  {
    label: "坂出造船・川崎重工の特別高圧需要",
    detail:
      "坂出市のJMU坂出造船所、川崎重工坂出は年間使用量3〜5,000万kWh級。電気代の絶対額は中規模だが、単価1円/kWh変動で年間3〜5,000万円規模のコスト変動。",
  },
  {
    label: "高松都市圏のオフィス・データセンター需要",
    detail:
      "高松市は四国の中心都市で、データセンター・大型オフィスの集積。データセンター事業者は年間使用量1〜3億kWh級で電力単価が経営競争力に直結。",
  },
  {
    label: "伊方原発稼働のプラス影響",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。香川県内事業者にも直接的なメリット。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間5,000万kWh使用の讃岐うどん大手で年2億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では坂出造船・讃岐うどん製造で大型採択実績多数。讃岐うどん冷凍倉庫のCO2冷媒インバータ化で中小企業向け補助も活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "瀬戸内沿岸の造船工場・讃岐うどん工場で屋根・空地活用の太陽光導入が有効。台風BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "香川県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "香川県独自補助。造船・うどん製造・観光業・農業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "高松市・坂出市・小豆島町の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "高松市『高松市カーボンニュートラル支援』、坂出市『坂出市環境配慮型事業所支援』、小豆島町等。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・農業向け省エネ補助",
    target: "小豆島・直島の旅館ホテル、讃岐うどん店、農産物冷蔵倉庫の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省連携の省エネ補助。空調・冷蔵設備・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "造船・重工（坂出）",
    detail:
      "JMU坂出造船所、川崎重工坂出（造船・産業機械）。年間使用量3〜5,000万kWh規模の中大型事業者。",
  },
  {
    label: "讃岐うどん製造（県全域）",
    detail:
      "テーブルマーク・カトキチ・はなまるうどん・丸亀製麺等の大手製造、県内600軒超のうどん店。年間使用量100〜1,000万kWh規模。",
  },
  {
    label: "データセンター・IT・物流（高松）",
    detail:
      "高松市の大型データセンター・通信事業者、四国フェリー物流。年間使用量1〜3億kWh規模で電力単価が経営競争力に直結。",
  },
  {
    label: "観光業（小豆島・直島・栗林公園・金刀比羅宮）",
    detail:
      "小豆島オリーブ・醤油観光、直島アート、栗林公園、金刀比羅宮、丸亀城観光業。年間使用量50〜500万kWh規模。",
  },
  {
    label: "中小製造業・農業・商業（高松市・丸亀市内）",
    detail:
      "高松市・丸亀市内の中小製造業（団扇・冷凍食品・金属加工）、市内商業施設・スーパー・店舗、農産物冷蔵倉庫。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは20%前後（経産省統計）。坂出造船・讃岐うどん大手製造は競争入札による切替が進行。観光業は四国電力グループ系新電力との連携が現実的選択肢。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。讃岐うどん製造・坂出造船・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 県内坂出火力立地で安定供給、台風時の復旧体制、伊方原発稼働メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①四国電力エリア供給実績の有無、②伊方原発稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤讃岐うどん冷蔵倉庫等の品質管理ニーズ対応、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの普及状況",
    detail:
      "テーブルマーク・カトキチ・JMU・川崎重工等の大企業はRE100対応でオフサイトPPA契約を検討中。瀬戸内沿岸の自家消費型太陽光も有利。",
  },
];

const energySaving = [
  {
    label: "造船工場のクレーン回生・乾ドック高効率化",
    detail:
      "坂出の造船工場でクレーン回生ブレーキ化、乾ドック排水の高効率化、溶接機インバータ化で電力▲15〜25%。SII補助活用で投資回収 3〜4年。",
  },
  {
    label: "讃岐うどん工場の冷蔵・粉砕機・茹で釜最適化",
    detail:
      "讃岐うどん大手製造工場でCO2冷媒インバータ式冷蔵庫への更新、粉砕機・茹で釜のインバータ化で電力▲20〜30%。SII補助活用で投資回収 2〜3年。うどん品質向上で出荷収入も増加。",
  },
  {
    label: "データセンターのフリークーリング・サーバー最適化",
    detail:
      "高松市内データセンターでフリークーリング（外気冷却）導入、サーバー高効率化、AI需要予測による電力管理で電力▲15〜25%。投資回収 SII補助活用で 2〜4年。",
  },
  {
    label: "観光業（小豆島・直島）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、スパ温水・厨房の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA・BEMS蓄電池",
    detail:
      "テーブルマーク・カトキチ・JMU・川崎重工等を中心に、九州・東北の大規模太陽光・風力との直接契約を検討中。BEMS・蓄電池でDR報酬獲得・需要家主導型PPAの効率最大化。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "四国電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力8〜10社からの相見積を取得し、固定vs市場連動を比較したか",
  "伊方原発稼働の燃料費調整額への影響を織り込んだ見積か",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・香川県補助・市町村補助・観光庁・農水省補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "南海トラフ地震・台風・渇水想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "香川県の法人電気代水準は全国比どれくらいですか？", answer: "四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。坂出造船・讃岐うどん大手は新電力切替で年間数千万円〜数億円規模のコスト削減事例も。" },
  { question: "讃岐うどん製造工場の電気代対策は？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII補助1/2活用）、②粉砕機・茹で釜のインバータ化、③高圧契約の競争入札による単価最適化、④地域密着型新電力との連携、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。うどん品質向上で出荷収入増にも寄与。投資回収は補助金活用で2〜3年です。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは香川県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の四国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して香川県の産業構造（うどん製造・造船・物流・観光）別の契約判断材料として整理しています。" },
  { question: "坂出造船の特別高圧契約は新電力切替で有利ですか？", answer: "はい、JMU坂出造船所・川崎重工坂出のような大型事業者では、新電力の競争入札による単価最適化効果が大きいです。特別高圧契約での1円/kWhの単価差が年間3,000〜5,000万円規模のコスト差になります。GXトランジションで需要家主導型PPAも有効。" },
  { question: "高松データセンターの電気代対策は？", answer: "①フリークーリング（外気冷却）の導入、②サーバー高効率化、③AI需要予測による電力管理、④特別高圧契約の競争入札、⑤RE100対応のオフサイトPPA、の5本柱が中心。年間使用量1〜3億kWh級のため、単価1円/kWh改善で年間1〜3億円のコスト差が生まれます。" },
  { question: "香川県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、香川県脱炭素・省エネ設備導入補助、高松市・坂出市・小豆島町の脱炭素補助、観光庁・農水省・環境省の省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "小豆島・直島観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③スパ温水・厨房の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "南海トラフ地震・渇水・台風想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "香川県は南海トラフ地震・渇水・台風想定地域で、特に讃岐うどん製造・坂出造船・データセンターの事業者にとってBCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散、③地域密着型新電力との連携、④BEMSによる停電復旧時の電力管理、の4点が重要。" },
];

const sourcesItems = [
  { name: "四国電力 公式サイト", url: "https://www.yonden.co.jp/" },
  { name: "香川県環境森林部", url: "https://www.pref.kagawa.lg.jp/" },
  { name: "経済産業省 四国経済産業局", url: "https://www.shikoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function KagawaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kagawa-business-electricity-cost"
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
          <span className="text-slate-800">香川県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            香川県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            香川県は四国電力エリアで、讃岐うどん製造（県内600軒超・大手テーブルマーク・カトキチ）、坂出造船（JMU・川崎重工）、高松都市圏のオフィス・データセンター、小豆島オリーブ・直島アートの観光業など多様な産業構造を持ちます。四国電力坂出火力発電所立地県として地域電力供給の中核を担い、伊方原発3号機の安定稼働により電力単価が全国平均より安い県です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四国電力エリアにおける香川県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>坂出造船・讃岐うどん製造・小豆島観光業のBefore/After削減事例</li>
              <li>伊方原発稼働メリットを活かした高圧・特別高圧競争入札の実務</li>
              <li>SII・香川県・市町村・観光庁・農水省補助の組合せ活用パターン</li>
              <li>南海トラフ地震・台風・渇水想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              香川県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県は四国電力エリアで、高松・丸亀・坂出・善通寺・観音寺・小豆島の6地域から構成されます。讃岐うどん製造の電力多消費、坂出造船・高松データセンターの特別高圧需要、伊方原発稼働メリット、南海トラフ地震・渇水・台風BCP対応が県内電力消費の特徴を形成します。
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
              香川県では2024年時点で8〜10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              香川県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              四国電力エリアの単価水準と県内事業者への影響（pps-net.org/unit データ再加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、香川県の産業構造（うどん製造・造船・物流・観光）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
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
              業種別影響度3件 — 坂出造船・讃岐うどん大手・小豆島ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              、冷蔵倉庫向けは{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              香川県固有の電気代上昇要因 — うどん製造冷蔵需要・坂出造船・伊方原発稼働
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県の電気代変動は、讃岐うどん製造業の冷蔵・粉砕電力多消費、坂出造船・川崎重工の特別高圧需要、高松都市圏のオフィス・データセンター需要、伊方原発稼働メリット、南海トラフ地震・渇水・台風BCP対応など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              香川県の補助金・優遇制度 — SII・県独自・市町村・観光庁・農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県では国補助（SII等）に加え、県独自補助、高松市・坂出市・小豆島町の脱炭素補助、観光庁・農水省・環境省の省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              香川県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県の事業者構成は、造船・重工、讃岐うどん製造、データセンター・IT・物流、観光業、中小製造業・農業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 四国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県の新電力シェアは2024年時点で20%前後。坂出造船・讃岐うどん大手製造は競争入札による切替が進行。観光業は四国電力グループ系新電力との連携が現実的選択肢。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              香川県の省エネは『造船工場のクレーン回生・乾ドック高効率化』『讃岐うどん工場の冷蔵・粉砕機・茹で釜最適化』『データセンターのフリークーリング・サーバー最適化』『観光業（小豆島・直島）の省エネ』『需要家主導型オフサイトPPA・BEMS蓄電池』の5軸が主力。讃岐うどん製造の冷蔵電力多消費を意識した最適化が重要です。
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
              香川県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震・渇水・台風想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで香川県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              香川県は讃岐うどん製造・坂出造船・高松データセンター・伊方原発稼働メリット・南海トラフ渇水台風BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
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
            <GlossaryLinks currentSlug="kagawa-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/tokushima-business-electricity-cost", title: "徳島県の法人電気料金", description: "隣接県・四国電力エリアの事情。" },
              { href: "/ehime-business-electricity-cost", title: "愛媛県の法人電気料金", description: "四国電力エリア・伊方原発立地県の事情。" },
              { href: "/kochi-business-electricity-cost", title: "高知県の法人電気料金", description: "四国電力エリア・紙パルプ・施設園芸の事情。" },
              { href: "/okayama-business-electricity-cost", title: "岡山県の法人電気料金", description: "瀬戸内海対岸・中国電力エリアの事情。" },
              { href: "/hiroshima-business-electricity-cost", title: "広島県の法人電気料金", description: "瀬戸内海対岸・中国電力エリアの事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働うどん工場・造船の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "うどん製造・造船が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "讃岐うどん大手と全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "讃岐うどん冷蔵向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "小豆島・直島観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "冷凍冷蔵設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "四国電力エリア・伊方原発稼働の影響。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="香川県の自社条件で電気代リスクを試算する"
            description="讃岐うどん製造・坂出造船・高松データセンター・小豆島直島観光業など香川県固有の条件と四国電力エリア単価・伊方原発稼働メリット・南海トラフ渇水台風BCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="香川県の電力契約見直し、専門家に相談しませんか？"
            description="讃岐うどん製造・坂出造船・高松データセンター・小豆島直島観光業の電気代見直しは業種・地域により論点が異なります。南海トラフ渇水台風BCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
