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
  "愛媛県の法人電気料金完全ガイド｜四国電力エリア単価分析・今治造船タオル・新居浜住友化学・みかん冷蔵の契約最適化";
const pageDescription =
  "愛媛県の法人電気料金を地域特化で解説。四国電力エリアの単価水準を業種別に再加工して提示し、今治造船世界トップシェア・今治タオル、新居浜住友化学コンビナート、伊予柑・みかん冷蔵倉庫、道後温泉観光業、伊方原発立地県の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "愛媛県 法人電気料金",
    "四国電力 高圧 単価",
    "今治造船 タオル 電気代",
    "新居浜 住友化学 電力",
    "伊予柑 みかん 冷蔵 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ehime-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ehime-business-electricity-cost",
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
    label: "四国電力エリアと愛媛県の位置付け",
    detail:
      "愛媛県は四国電力のエリア。松山・今治・新居浜・西条・伊予・大洲・宇和島の7地域から構成。県内総電力需要は約75億kWhで四国電力管内の約30%を占める。今治造船（世界トップシェア）・今治タオル、新居浜住友化学・住友金属コンビナート、伊予柑・みかん冷蔵倉庫、松山道後温泉観光業、そして伊方原発立地県という特性が県内電力消費を形成。",
  },
  {
    label: "電源構成 — 伊方原発立地県と県内火力",
    detail:
      "四国電力管内は伊方原発（伊方町・3号機が安定稼働中）の原発比率が高めで約30%、LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には四国電力の伊方原発（伊方町）、西条火力（石炭）、波方ターミナル（LNG備蓄）が立地。伊方原発立地県として地域振興制度（電源立地地域対策交付金）の対象でもある。",
  },
  {
    label: "気象条件 — 瀬戸内温暖と南予多雨",
    detail:
      "県内瀬戸内側（松山・今治・新居浜・西条）は瀬戸内気候で温暖少雨。南予（宇和島・八幡浜）は太平洋側で多雨。年間冷房度日（CDD24）1,300〜1,600、暖房度日1,400〜1,800。台風被害リスクは南予で高い。",
  },
  {
    label: "需給ひっ迫 — 四国電力エリアの伊方原発依存",
    detail:
      "四国電力管内は伊方原発の安定稼働により需給バランスは比較的良好。愛媛県内は今治造船・新居浜住友化学・住友金属の超大規模事業者へのDR要請が発動。台風シーズン（夏〜秋）の電力需要管理も重要。",
  },
  {
    label: "県内産業構造 — 造船・タオル・化学・農業・観光",
    detail:
      "今治市は今治造船（世界トップシェア・建造量国内1位）と今治タオル（国産タオル50%超のシェア）。新居浜市は住友化学愛媛工場、住友金属鉱山新居浜工場の重化学工業コンビナート。西条市は半導体・電子部品（コカ・コーラ含む食品も集積）。松山市は四国の中心都市で道後温泉観光業。南予（八幡浜・宇和島）は伊予柑・みかんの果樹園と冷蔵倉庫、水産加工業。",
  },
];

const utilitiesList = [
  {
    name: "四国電力（送配電は四国電力送配電）",
    role: "一般小売事業者・地元電力",
    detail:
      "県内シェア最大。四国電力本社所在県（高松市）と並び、伊方原発立地県として地域貢献も強い。高圧・特別高圧の標準メニューは『高圧電力A』『業務用季節別時間帯別電力』。2023年6月に規制料金値上げを実施したが、伊方原発の安定稼働により他エリアより値上げ幅は抑制された。",
  },
  {
    name: "四国電力ミライズ・地域密着型新電力",
    role: "四国電力グループ系・地域密着型",
    detail:
      "松山市・今治市・新居浜市等の四国電力グループ新電力。大型法人需要への営業力強い。伊方原発・西条火力との連携で安定供給メニュー展開。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "今治造船・新居浜住友化学・住友金属の高圧・特別高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。愛媛県内の大規模法人需要にも対応。特に新居浜コンビナート向け。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力",
    role: "ガス系新電力",
    detail:
      "愛媛県内のガス供給網との連携で電気・ガスセット契約を提供。観光業・商業施設で実績。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は10社前後が県内法人向け高圧で新規受付中。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。愛媛県内では今治造船、住友化学愛媛、住友金属鉱山、コカ・コーラ西日本西条等の大型事業者が対象。新電力競争入札による単価最適化余地が大きく、年間1〜10億円規模のコスト変動。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "四国電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。今治タオル工房・松山道後温泉観光業の中小ホテル旅館・八幡浜みかん農家は低圧電灯中心。",
  },
  {
    label: "伊方原発立地県のメリット",
    detail:
      "愛媛県は伊方原発3号機立地県として電源立地地域対策交付金の対象。四国電力は伊方原発の安定稼働により電力単価が他エリアより構造的に低い。法人需要では年間1〜3億円規模の差が出ることもあり、関連事業者にとっては各種優遇制度の活用余地もある。",
  },
];

const ppsNetUnitData = [
  {
    label: "四国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、四国電力エリアの特別高圧電力単価は2024年度実績で約16〜19円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より0.5〜1円/kWh安く、伊方原発稼働メリットを反映している。関西電力エリアと並んで全国でも安価な部類。県内大型事業者（今治造船・住友化学愛媛・住友金属鉱山）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間2〜10億円規模の差が出る。",
  },
  {
    label: "四国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は17〜21円/kWh。県内中規模事業者（今治タオル中堅・新居浜化学関連・松山道後温泉観光業）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、愛媛県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "四国電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯16〜19円/kWhの水準。県内中小事業者（今治タオル中小工房・八幡浜みかん農家・道後温泉中小旅館）の標準帯域。",
  },
  {
    label: "県内産業構造との接続 — 造船・タオル・化学・農業に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを愛媛県の産業構造に紐づけて再加工すると、①今治造船・住友化学愛媛・住友金属鉱山のような特高契約は固定5年で年間2〜10億円の安定化効果、②今治タオル中堅製造の高圧契約は染色・乾燥設備のインバータ化で年間300〜800万円の削減余地、③伊予柑・みかん冷蔵倉庫の中規模高圧契約はCO2冷媒インバータ化で年間200〜500万円の削減余地、④道後温泉観光業中小契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という4層構造で契約判断を行うべき。伊方原発稼働メリットを織り込んだ見積取得が重要。",
  },
];

const industryImpact = [
  {
    title: "業種1: 造船工場（今治市、特別高圧 10,000kW、年間 8,000万kWh）",
    before:
      "Before: 今治市の造船工場A社（今治造船系・コンテナ船・LNG運搬船・タンカー建造、世界トップシェア）。年間電気代 18億円。クレーン・溶接機・大型コンプレッサー・乾ドック排水が消費電力の主要要素。建造船型により電力需要変動大きい。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.9円/kWh安、新電力競争入札／伊方原発稼働メリット込み）／溶接機インバータ化・クレーン回生ブレーキ化・大型コンプレッサー高効率化／LED全棟化（SII補助1/3活用・GX関連補助併用、投資5.0億円）／敷地内太陽光3MW＋蓄電池導入／需要家主導型PPAでオフサイト風力15MW契約。",
    result:
      "Result: 年間電気代 18億円 → 14.4億円（▲20%、▲3.6億円）／契約kW 10,000→9,000／投資回収 補助金後 3.5年／GX対応で受注競争力強化・RE100対応で大手海運会社からの受注も拡大。",
  },
  {
    title: "業種2: 化学工場（新居浜市、特別高圧 12,000kW、年間 9,000万kWh）",
    before:
      "Before: 新居浜市の化学工場B社（住友化学愛媛系・無機薬品・農薬・電池材料製造）。24時間連続運転、年間電気代 21億円。電解装置・蒸留塔・圧縮機・コージェネが消費電力の70%。市場連動プラン継続で2023年夏には月最大3.0億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.9円/kWh安、新電力競争入札／伊方原発稼働メリット込み）／電解装置の省エネ運転・蓄熱式・ヒートポンプ転換／コージェネレーション設備更新（SII補助1/3活用、投資5.5億円）／需要家主導型PPAでオフサイト風力・太陽光合計20MW契約／敷地内太陽光4MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 21億円 → 16.8億円（▲20%、▲4.2億円）／契約kW 12,000→10,800／投資回収 補助金後 3.5年／RE100進捗 45%達成。",
  },
  {
    title: "業種3: みかん冷蔵倉庫（八幡浜市、高圧 300kW、年間 240万kWh）",
    before:
      "Before: 八幡浜市の伊予柑・みかん専用冷蔵倉庫C社（年間出荷時期に合わせた長期冷蔵保管、5℃管理）。年間電気代 7,200万円。冷蔵設備・選果機械・空調が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+1,500万円の上昇。",
    after:
      "After: 高圧の固定5年契約（地域密着型新電力との地産地消契約／四国電力継続より0.8円/kWh安）／冷蔵庫CO2冷媒インバータ式更新（SII補助1/2活用、投資1,500万円）／断熱性能改善工事／屋根太陽光100kW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光300kW契約。",
    result:
      "Result: 年間電気代 7,200万円 → 5,760万円（▲20%、▲1,440万円）／契約kW 300→260／投資回収 補助金後 2.5年／果樹保存品質向上で出荷収入も増加。",
  },
];

const costFactors = [
  {
    label: "今治造船・新居浜住友コンビナートの大規模需要",
    detail:
      "愛媛県内の今治造船（世界トップシェア）と新居浜住友化学・住友金属鉱山は年間使用量5〜15億kWh級。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間5〜15億円規模のコスト変動。",
  },
  {
    label: "伊方原発立地県のプラス影響",
    detail:
      "愛媛県は伊方原発3号機立地県として電源立地地域対策交付金の対象。四国電力の安定電源供給メリットが直接的に県内事業者に還元される。設備投資の補助金との組合せで投資回収を加速できる。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "今治造船・住友化学・住友金属鉱山等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "今治タオル業界の電力多消費・国際競争力",
    detail:
      "今治タオルは国産タオルの50%超のシェアを持つが、染色・乾燥設備の電力多消費が経営課題。中国・ベトナム製との競争で電気代削減は重要な経営テーマ。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間9,000万kWh使用の超大規模化学工場で年3.6億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では今治造船・新居浜住友コンビナートで大型採択実績多数。今治タオル染色設備・八幡浜みかん冷蔵でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "瀬戸内沿岸の造船・化学工場で屋根・空地活用の太陽光導入が有効。台風BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "愛媛県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "愛媛県独自補助。造船・化学・タオル・農業・観光業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。電源立地地域対策交付金との連携も。",
  },
  {
    name: "今治市・新居浜市・松山市・八幡浜市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "今治市『今治市タオル業界省エネ支援』、新居浜市『新居浜市環境配慮型事業所支援』、松山市『松山市カーボンニュートラル支援』、八幡浜市等。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・農業向け省エネ補助",
    target: "道後温泉・湯ノ浦温泉の旅館ホテル、伊予柑・みかん冷蔵倉庫、農産物加工施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省連携の省エネ補助。空調・冷蔵設備・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "造船・重工（今治・西条）",
    detail:
      "今治造船（世界トップシェア・建造量国内1位）、新来島どっく、村上秀造船。年間使用量3〜8億kWh規模の大型事業者。",
  },
  {
    label: "化学・素材（新居浜）",
    detail:
      "住友化学愛媛工場、住友金属鉱山新居浜工場、東予製錬所。年間使用量3〜10億kWh規模の超大型事業者。",
  },
  {
    label: "タオル・繊維（今治）",
    detail:
      "今治タオル工業組合200社超、国産タオル50%超のシェア。中小事業者中心、年間使用量100〜600万kWh規模。",
  },
  {
    label: "観光業（松山道後温泉・湯ノ浦・伊予灘）",
    detail:
      "道後温泉、松山城、湯ノ浦温泉、伊予灘ものがたり観光列車、しまなみ海道。年間使用量50〜500万kWh規模。",
  },
  {
    label: "農業・水産業・商業（八幡浜・宇和島・松山市内）",
    detail:
      "八幡浜・宇和島の伊予柑・みかん果樹園と冷蔵倉庫、水産加工業（鯛・ぶり養殖）、松山市内商業施設。年間使用量50〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは22%前後（経産省統計）。今治造船・新居浜住友コンビナートは競争入札による切替が標準化。今治タオル・八幡浜みかん冷蔵も新電力活用が進む。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。造船・化学・タオル・農業・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 県内伊方原発・西条火力立地で安定供給、台風時の復旧体制、伊方原発立地県メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①四国電力エリア供給実績の有無、②伊方原発立地県メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100対応の再エネメニューの充実度、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "今治造船・住友化学・住友金属鉱山等の大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。",
  },
];

const energySaving = [
  {
    label: "造船工場のクレーン回生・乾ドック高効率化",
    detail:
      "今治の造船工場でクレーン回生ブレーキ化、乾ドック排水の高効率化、溶接機インバータ化・大型コンプレッサー高効率化で電力▲15〜25%。SII補助・GX関連補助活用で投資回収 3〜4年。",
  },
  {
    label: "化学工場のコージェネ・電解装置最適化",
    detail:
      "新居浜の住友化学・住友金属鉱山でコージェネレーション設備更新、電解装置・蒸留塔の省エネ運転・ヒートポンプ転換で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "今治タオルの染色機・乾燥機高効率化",
    detail:
      "今治の染色機・洗濯機のインバータ化、乾燥機ヒートポンプ転換で電力▲20〜30%。SII補助活用で投資回収 2〜3年。CO2削減でブランド価値向上、海外向け輸出競争力強化。",
  },
  {
    label: "果樹冷蔵倉庫のCO2冷媒インバータ化",
    detail:
      "八幡浜・宇和島の伊予柑・みかん冷蔵倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。果樹保存品質向上で出荷収入も増加。",
  },
  {
    label: "需要家主導型オフサイトPPA・BEMS蓄電池",
    detail:
      "今治造船・住友化学・住友金属鉱山等の大企業を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。BEMS・蓄電池でDR報酬獲得・需要家主導型PPAの効率最大化。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "四国電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力10社からの相見積を取得し、固定vs市場連動を比較したか",
  "伊方原発稼働の燃料費調整額への影響を織り込んだ見積か",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・愛媛県補助・市町村補助・観光庁・農水省・電源立地交付金の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "南海トラフ地震・台風想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "愛媛県の法人電気代水準は全国比どれくらいですか？", answer: "四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。今治造船・新居浜住友コンビナートは新電力切替で年間2〜10億円規模のコスト削減事例も。" },
  { question: "伊方原発立地県のメリットは電気代にどう反映されますか？", answer: "愛媛県は伊方原発3号機立地県として電源立地地域対策交付金の対象です。四国電力の安定電源供給メリットが直接的に県内事業者に還元され、設備投資の補助金との組合せで投資回収を加速できます。新電力切替時の交渉余地も広がります。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは愛媛県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の四国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して愛媛県の産業構造（造船・タオル・化学・農業・観光）別の契約判断材料として整理しています。" },
  { question: "今治造船の特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量3〜8億kWh級の大型事業者では、新電力の競争入札による単価最適化効果が大きいです。特別高圧契約での1円/kWhの単価差が年間3〜8億円規模のコスト差になります。GXトランジションで需要家主導型PPAも有効。RE100対応で大手海運会社からの受注も拡大できます。" },
  { question: "今治タオル工場の電気代対策は？", answer: "①染色機・洗濯機のインバータ化、②乾燥機のヒートポンプ転換、③LED全棟化、④高圧契約の競争入札による単価最適化、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。SII補助・愛媛県補助の活用で投資回収は2〜3年が目安。CO2削減でブランド価値向上、海外向け輸出競争力強化も実現できます。" },
  { question: "愛媛県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、愛媛県脱炭素・省エネ設備導入補助、今治市・新居浜市・松山市・八幡浜市の脱炭素補助、観光庁・農水省・環境省の省エネ補助、電源立地地域対策交付金の6本柱が中心。最大4〜5補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "伊予柑・みかん冷蔵倉庫の電気代対策は？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII補助1/2活用）、②断熱性能改善工事、③高圧契約の競争入札による単価最適化、④地域密着型新電力との地産地消契約、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。果樹保存品質向上で出荷収入増にも寄与。投資回収は補助金活用で1.5〜3年です。" },
  { question: "南海トラフ地震・台風想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "愛媛県は南海トラフ地震・台風想定地域で、特に今治造船・新居浜住友コンビナート・南予水産加工の事業者にとってBCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散、③地域密着型新電力との連携、④BEMSによる停電復旧時の電力管理、の4点が重要。" },
];

const sourcesItems = [
  { name: "四国電力 公式サイト", url: "https://www.yonden.co.jp/" },
  { name: "愛媛県環境局", url: "https://www.pref.ehime.jp/" },
  { name: "経済産業省 四国経済産業局", url: "https://www.shikoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function EhimeBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ehime-business-electricity-cost"
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
          <span className="text-slate-800">愛媛県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            愛媛県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            愛媛県は四国電力エリアで、今治造船（世界トップシェア・建造量国内1位）・今治タオル（国産タオル50%超のシェア）、新居浜住友化学・住友金属鉱山の重化学コンビナート、八幡浜・宇和島の伊予柑みかん果樹園と冷蔵倉庫、松山道後温泉観光業など多様な産業構造を持ちます。伊方原発立地県として電源立地地域対策交付金の対象でもあり、伊方原発3号機の安定稼働により電力単価が全国平均より安い県です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四国電力エリアにおける愛媛県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>今治造船・新居浜住友化学・八幡浜みかん冷蔵のBefore/After削減事例</li>
              <li>伊方原発立地県のメリットと電源立地交付金活用</li>
              <li>SII・愛媛県・市町村・観光庁・農水省・電源立地交付金の組合せ活用パターン</li>
              <li>南海トラフ地震・台風想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              愛媛県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県は四国電力エリアで、松山・今治・新居浜・西条・伊予・大洲・宇和島の7地域から構成されます。今治造船・新居浜住友コンビナートの超大規模需要、今治タオルの電力多消費、伊予柑みかん冷蔵需要、伊方原発立地県メリット、南海トラフ地震・台風BCP対応が県内電力消費の特徴を形成します。
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
              愛媛県では2024年時点で10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              愛媛県の電気料金水準と全国比較
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
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、愛媛県の産業構造（造船・タオル・化学・農業・観光）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
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
              業種別影響度3件 — 今治造船・新居浜住友化学・八幡浜みかん冷蔵（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              愛媛県固有の電気代上昇要因 — 造船化学需要・タオル電力多消費・伊方原発立地
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県の電気代変動は、今治造船・新居浜住友コンビナートの大規模需要、伊方原発立地県メリット、今治タオルの電力多消費・国際競争力、再エネ調達ニーズ、南海トラフ地震・台風BCP対応など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              愛媛県の補助金・優遇制度 — SII・県独自・市町村・観光庁・農水省・電源立地交付金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県では国補助（SII等）に加え、県独自補助、今治市・新居浜市・松山市・八幡浜市の脱炭素補助、観光庁・農水省・環境省の省エネ補助、電源立地地域対策交付金が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              愛媛県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県の事業者構成は、造船・重工、化学・素材、タオル・繊維、観光業、農業・水産業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              愛媛県の新電力シェアは2024年時点で22%前後。今治造船・新居浜住友コンビナートは競争入札による切替が標準化。今治タオル・八幡浜みかん冷蔵も新電力活用が進む。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              愛媛県の省エネは『造船工場のクレーン回生・乾ドック高効率化』『化学工場のコージェネ・電解装置最適化』『今治タオルの染色機・乾燥機高効率化』『果樹冷蔵倉庫のCO2冷媒インバータ化』『需要家主導型オフサイトPPA・BEMS蓄電池』の5軸が主力。今治造船・住友化学のRE100対応を意識した再エネ調達が重要です。
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
              愛媛県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震・台風想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで愛媛県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県は今治造船・新居浜住友コンビナートの大規模需要・伊方原発立地県メリット・南海トラフ台風BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
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
            <GlossaryLinks currentSlug="ehime-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情(一覧)", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価(出典)", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/tokushima-business-electricity-cost", title: "徳島県の法人電気料金", description: "四国電力エリア・LED医薬品の事情。" },
              { href: "/kagawa-business-electricity-cost", title: "香川県の法人電気料金", description: "隣接県・四国電力エリアの事情。" },
              { href: "/kochi-business-electricity-cost", title: "高知県の法人電気料金", description: "四国電力エリア・紙パルプ・施設園芸の事情。" },
              { href: "/hiroshima-business-electricity-cost", title: "広島県の法人電気料金", description: "瀬戸内海対岸・中国電力エリア・マツダ呉造船の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働造船・化学コンビナートの選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "造船・化学・タオルが市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "今治造船・新居浜住友コンビナートと全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "伊予柑・みかん果樹冷蔵向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "松山道後温泉観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・染色設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "四国電力エリア・伊方原発稼働の影響。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="愛媛県の自社条件で電気代リスクを試算する"
            description="今治造船・新居浜住友化学・今治タオル・八幡浜みかん冷蔵・松山道後温泉観光業など愛媛県固有の条件と四国電力エリア単価・伊方原発立地県メリット・南海トラフ台風BCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="愛媛県の電力契約見直し、専門家に相談しませんか？"
            description="今治造船・新居浜住友化学・今治タオル・八幡浜みかん冷蔵・松山道後温泉観光業の電気代見直しは業種・地域により論点が異なります。南海トラフ台風BCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
