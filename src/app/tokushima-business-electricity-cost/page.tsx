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
  "徳島県の法人電気料金完全ガイド｜四国電力エリア単価分析・日亜化学LED・医薬品・阿波踊り観光の契約最適化";
const pageDescription =
  "徳島県の法人電気料金を地域特化で解説。四国電力エリアの単価水準を業種別に再加工して提示し、日亜化学工業のLED・半導体、徳島大塚製薬・医薬品、阿波踊り観光業、鳴門わかめ水産加工の電力負荷プロファイル、契約見直し・補助金活用まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "徳島県 法人電気料金",
    "四国電力 高圧 単価",
    "日亜化学 LED 電気代",
    "大塚製薬 医薬品 電力",
    "阿波踊り 観光 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/tokushima-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tokushima-business-electricity-cost",
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
    label: "四国電力エリアと徳島県の位置付け",
    detail:
      "徳島県は四国電力のエリア。徳島市・鳴門・阿南・吉野川・美馬・三好の6地域から構成。県内総電力需要は約50億kWhで四国電力管内の約20%を占める。阿南市の日亜化学工業（LED世界トップシェア・半導体）、徳島市大塚製薬・医薬品工業、鳴門わかめ水産加工、阿波踊り観光業が県内電力消費の中核。",
  },
  {
    label: "電源構成 — 伊方原発と四国電力エリア",
    detail:
      "四国電力管内は伊方原発（伊方町・3号機が安定稼働中）の原発比率が高めで約30%、LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には四国電力の橘湾火力発電所（阿南市、石炭・LNG）、阿南火力発電所（液化燃料）が立地。伊方原発の安定稼働により四国電力エリアは中国電力エリアより安定的な単価推移。",
  },
  {
    label: "気象条件 — 瀬戸内温暖と山間部寒冷",
    detail:
      "県内瀬戸内側（徳島市・鳴門・阿南）は瀬戸内気候で温暖少雨。山間部（祖谷・剣山周辺）は冬季積雪あり。年間冷房度日（CDD24）1,200〜1,500、暖房度日1,500〜2,000。夏季冷房需要が電力消費の大きな比重。台風被害リスクは中四国の中では中程度。",
  },
  {
    label: "需給ひっ迫 — 四国電力エリアの伊方原発依存",
    detail:
      "四国電力管内は伊方原発の安定稼働により需給バランスは比較的良好。徳島県内は日亜化学・大塚製薬・橘湾火力立地地としてDR要請の重要拠点。台風シーズン（夏〜秋）の電力需要管理も重要。",
  },
  {
    label: "県内産業構造 — LED半導体・医薬品・観光・水産",
    detail:
      "阿南市は日亜化学工業（青色LED発明・世界トップシェア・半導体）の大型工場立地。徳島市は大塚製薬・大塚化学・大塚倉庫の医薬品・食品工業集積。鳴門市は鳴門わかめ水産加工。観光業は阿波踊り（徳島市・8月）、鳴門うずしお、祖谷渓に集積。三好市・美馬市は山間部の小規模事業者中心。",
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
      "徳島市・阿南市・鳴門市等の四国電力グループ新電力。大型法人需要への営業力強い。県内水力発電所との連携で再エネメニューも展開。",
  },
  {
    name: "ENEOSでんき・Looopでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "日亜化学・大塚製薬・大塚化学の高圧・特別高圧契約で実績。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが2024年以降は再開。",
  },
  {
    name: "イーレックス・エネット・F-Power",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向け固定単価による大口契約。徳島県内の大規模法人需要にも対応。特に阿南日亜化学・徳島大塚製薬向け。",
  },
  {
    name: "大阪ガスエナジー・東京ガス系新電力",
    role: "ガス系新電力",
    detail:
      "徳島県内のガス供給網との連携で電気・ガスセット契約を提供。観光業・商業施設で実績。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。徳島県内では日亜化学工業（阿南）、大塚製薬（徳島・松茂）、大塚化学（徳島）等が対象。新電力競争入札による単価最適化余地が大きく、年間1〜30億円規模のコスト変動。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "四国電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。鳴門わかめ加工小規模事業者・観光業の中小ホテル旅館は低圧電灯中心。",
  },
  {
    label: "伊方原発稼働の単価安定化メリット",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。燃料費調整額は中国電力エリアより0.5〜1円/kWh低水準で推移しており、徳島県内事業者にも直接的なメリット。新電力経由でさらに優遇可能性。",
  },
];

const ppsNetUnitData = [
  {
    label: "四国電力エリアの特別高圧単価水準",
    detail:
      "新電力ネット（pps-net.org/unit）のエリア別単価データによれば、四国電力エリアの特別高圧電力単価は2024年度実績で約16〜19円/kWh（電力量料金ベース）。全国平均（約17.5〜19.5円/kWh）より0.5〜1円/kWh安く、伊方原発稼働メリットを反映している。関西電力エリアと並んで全国でも安価な部類。県内大型事業者（日亜化学・大塚製薬・大塚化学）にとっては、新電力の競争入札で1〜2円/kWhの優遇を引き出せれば年間5〜30億円規模の差が出る。",
  },
  {
    label: "四国電力エリアの高圧単価水準",
    detail:
      "高圧電力（500〜2,000kW級）の単価は17〜21円/kWh。県内中規模事業者（日亜化学関連・徳島市内オフィス・鳴門わかめ加工）にとっての標準帯域。pps-net.org のエリア別データを再加工して試算すると、徳島県内の典型的な高圧契約（200〜500kW、年間使用量100〜400万kWh）では、新電力切替により年間50〜200万円規模のコスト削減が見込まれる。",
  },
  {
    label: "四国電力エリアの低圧単価水準",
    detail:
      "低圧電力9〜12円/kWh、低圧電灯16〜19円/kWhの水準。県内中小事業者（徳島市内商店・阿波踊り関連事業者・祖谷渓観光業）の標準帯域。",
  },
  {
    label: "県内産業構造との接続 — LED半導体・医薬品・観光・水産に応じた契約判断",
    detail:
      "pps-net.org/unit の単価データを徳島県の産業構造に紐づけて再加工すると、①日亜化学（LED世界トップシェア）のような24時間連続稼働特高契約は固定5年で年間5〜15億円の安定化効果、②大塚製薬・大塚化学の医薬品工業特高契約は厳格な品質管理（クリーンルーム・恒温恒湿）を支える安定電源が必須、③鳴門わかめ・阿波踊り関連の中小高圧契約は地域密着型新電力との連携で年間100〜300万円規模の最適化余地、という3層構造で契約判断を行うべき。伊方原発稼働メリットを織り込んだ見積取得が重要。",
  },
];

const industryImpact = [
  {
    title: "業種1: LED半導体工場（阿南市、特別高圧 15,000kW、年間 1.2億kWh）",
    before:
      "Before: 阿南市のLED半導体工場A社（日亜化学工業系・青色LED・白色LED・パワー半導体製造）。24時間連続運転、クリーンルーム稼働。年間電気代 28億円。クリーンルーム空調・MOCVD成長装置・封止装置・コージェネが消費電力の70%。市場連動プラン継続で2023年夏には月最大4.0億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.8円/kWh安、新電力競争入札／伊方原発稼働メリット込み）／クリーンルーム空調の高効率化・インバータ化（SII補助1/3活用・GX関連補助併用、投資6.0億円）／MOCVD装置の省エネ運転／LED全棟化／需要家主導型PPAでオフサイト太陽光20MW契約／敷地内太陽光3MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 28億円 → 22.4億円（▲20%、▲5.6億円）／契約kW 15,000→13,500／投資回収 補助金後 3.5年／RE100進捗 40%達成。",
  },
  {
    title: "業種2: 医薬品工場（徳島市・松茂、特別高圧 5,000kW、年間 4,000万kWh）",
    before:
      "Before: 徳島市・松茂町の医薬品工場B社（大塚製薬系・栄養剤・点滴・経口薬製造）。24時間連続運転、クリーンルーム・無菌室稼働。年間電気代 9.5億円。クリーンルーム空調・滅菌設備・恒温恒湿・コージェネが消費電力の70%。",
    after:
      "After: 特別高圧の固定5年契約（四国電力継続より0.8円/kWh安、新電力競争入札）／クリーンルーム空調の高効率化・恒温恒湿システムインバータ化（SII補助1/3活用、投資3.5億円）／LED全棟化／屋根太陽光2MW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光10MW契約。",
    result:
      "Result: 年間電気代 9.5億円 → 7.6億円（▲20%、▲1.9億円）／契約kW 5,000→4,500／投資回収 補助金後 3年／RE100進捗 35%達成。",
  },
  {
    title: "業種3: 観光業・阿波踊り会館（徳島市、高圧 250kW、年間 200万kWh）",
    before:
      "Before: 徳島市の阿波踊り関連観光施設・ホテルC社（客室120室、阿波踊り会館併設、年中観光客対応、8月本祭時に大量集客）。年間電気代 6,000万円。冷暖房・厨房・客室照明・大型ステージ照明が消費電力の主要要素。8月本祭時の電力ピークが特徴。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調インバータ更新・人感センサ連動／LED全館化・大型ステージ照明のLED化／厨房の高効率化（観光庁・環境省補助活用、投資2,800万円）／屋根太陽光100kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 6,000万円 → 4,800万円（▲20%、▲1,200万円）／契約kW 250→220／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "日亜化学・大塚製薬の超大規模需要",
    detail:
      "徳島県内の日亜化学工業（阿南）と大塚製薬・大塚化学（徳島・松茂）は年間使用量1〜15億kWh級。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間1〜15億円規模のコスト変動。",
  },
  {
    label: "伊方原発稼働のプラス影響",
    detail:
      "四国電力は伊方原発3号機の安定稼働により電力単価が他エリアより構造的に低い。燃料費調整額は中国電力エリアより0.5〜1円/kWh低水準で推移しており、徳島県内事業者にも直接的なメリット。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "日亜化学・大塚製薬・大塚化学等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "クリーンルーム・恒温恒湿の電力多消費",
    detail:
      "LED半導体（日亜化学）・医薬品（大塚）はクリーンルーム・恒温恒湿の連続稼働が必須で電力多消費型。電力単価変動の影響を直接受けるため、新電力競争入札による単価最適化が経営課題。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間12億kWh使用の超大規模LED工場で年48億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では阿南日亜化学・徳島大塚製薬で大型採択実績多数。鳴門わかめ加工冷蔵でも中小企業向け補助が活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "瀬戸内沿岸の日亜化学・大塚製薬工場で屋根・空地活用の太陽光導入が有効。BCP対応で蓄電池併設の重要性高い。",
  },
  {
    name: "徳島県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "徳島県独自補助。LED半導体・医薬品・観光業・水産加工の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "徳島市・阿南市・鳴門市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "徳島市『徳島市環境配慮型事業所支援』、阿南市『阿南市カーボンニュートラル支援』、鳴門市等。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・水産業向け省エネ補助",
    target: "徳島市内ホテル・祖谷渓観光業、鳴門わかめ加工施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・農水省・環境省連携の省エネ補助。空調・冷蔵設備・温泉ポンプ更新等が対象。阿波踊り関連事業者向け特別枠もあり。",
  },
];

const industryProfile = [
  {
    label: "LED半導体（阿南）",
    detail:
      "日亜化学工業（青色LED発明・世界トップシェア・パワー半導体）。年間使用量5〜15億kWh規模の超大型事業者。",
  },
  {
    label: "医薬品・食品（徳島・松茂・板野）",
    detail:
      "大塚製薬、大塚化学、大塚倉庫、日清薬品（栄養剤・点滴・経口薬・食品・化粧品）。年間使用量1〜10億kWh規模の大型事業者。",
  },
  {
    label: "水産加工（鳴門）",
    detail:
      "鳴門わかめ加工、鳴門うずしお関連水産業、冷凍冷蔵倉庫。中小事業者中心、年間使用量100〜500万kWh規模。",
  },
  {
    label: "観光業（阿波踊り・鳴門うずしお・祖谷渓）",
    detail:
      "阿波踊り（徳島市・8月本祭）、鳴門うずしお観潮船・大鳴門橋遊歩道、祖谷渓・大歩危・剣山。年間使用量50〜500万kWh規模。",
  },
  {
    label: "中小製造業・商業（徳島市・阿南市内）",
    detail:
      "徳島市・阿南市内の中小製造業（金属加工・機械・食品）、市内商業施設・スーパー・店舗。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは22%前後（経産省統計）。阿南日亜化学・徳島大塚製薬は競争入札による切替が標準化。観光業は四国電力グループ系新電力との連携が現実的選択肢。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。LED半導体・医薬品・観光業の事業者は特に市場連動を敬遠。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 県内電源立地で安定供給、台風時の復旧体制、伊方原発稼働メリット。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①四国電力エリア供給実績の有無、②伊方原発稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤クリーンルーム・恒温恒湿等の品質管理ニーズ対応、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "日亜化学・大塚製薬・大塚化学等の大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。",
  },
];

const energySaving = [
  {
    label: "LED半導体工場のクリーンルーム・MOCVD最適化",
    detail:
      "阿南の日亜化学工場でクリーンルーム空調インバータ化、MOCVD装置の省エネ運転、コージェネ設備更新で電力▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "医薬品工場のクリーンルーム・恒温恒湿高効率化",
    detail:
      "徳島・松茂の大塚製薬工場でクリーンルーム空調インバータ化、恒温恒湿システム高効率化、滅菌設備の省エネ化で電力▲20〜30%。SII補助活用で投資回収 3〜4年。",
  },
  {
    label: "水産加工冷蔵庫のCO2冷媒インバータ化",
    detail:
      "鳴門のわかめ加工冷蔵倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "観光業（阿波踊り会館・ホテル）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、大型ステージ照明のLED化、厨房の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA・BEMS蓄電池",
    detail:
      "日亜化学・大塚製薬・大塚化学等の大企業を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。BEMS・蓄電池でDR報酬獲得・需要家主導型PPAの効率最大化。",
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
  "SII補助・徳島県補助・市町村補助・観光庁・農水省補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "南海トラフ地震・台風想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "徳島県の法人電気代水準は全国比どれくらいですか？", answer: "四国電力エリアは伊方原発の安定稼働により全国平均より0.5〜1円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。日亜化学・大塚製薬は新電力切替で年間1〜10億円規模のコスト削減事例も。" },
  { question: "伊方原発稼働は徳島県の電気代にどう影響しますか？", answer: "伊方原発3号機の安定稼働により、四国電力管内の燃料費調整額は中国電力エリアより0.5〜1円/kWh低水準で推移しています。徳島県内事業者にも直接的なメリットとなっており、新電力切替時の交渉余地も広がります。" },
  { question: "新電力ネット（pps-net.org）のエリア単価データは徳島県の契約検討に活用できますか？", answer: "はい、pps-net.org/unit の四国電力エリアの単価データを参考に、自社の現契約単価と比較することで新電力切替の余地を定量化できます。本ページではこのデータを再加工して徳島県の産業構造（LED半導体・医薬品・観光・水産）別の契約判断材料として整理しています。" },
  { question: "日亜化学のLED半導体工場の特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量5〜15億kWh級の超大規模事業者では、新電力の競争入札による単価最適化効果が極めて大きいです。特別高圧契約での1円/kWhの単価差が年間5〜15億円規模のコスト差になります。複数の新電力からの相見積取得が必須です。" },
  { question: "大塚製薬の医薬品工場の電気代対策は？", answer: "①クリーンルーム空調のインバータ化、②恒温恒湿システムの高効率化、③特別高圧契約の競争入札、④RE100対応のオフサイトPPA、⑤BEMS導入による需要平準化、の5本柱が中心。医薬品はクリーンルーム・恒温恒湿の連続稼働が必須なので、品質管理を維持しつつ省エネを実現する設計が重要です。" },
  { question: "徳島県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、徳島県脱炭素・省エネ設備導入補助、徳島市・阿南市・鳴門市の脱炭素補助、観光庁・農水省・環境省の省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "阿波踊り観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③大型ステージ照明のLED化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。8月本祭時の電力ピーク管理も重要。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "南海トラフ地震・台風想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "徳島県は南海トラフ地震・台風想定地域で、特に阿南日亜化学・徳島大塚製薬・鳴門水産加工の事業者にとってBCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散、③地域密着型新電力との連携、④BEMSによる停電復旧時の電力管理、の4点が重要。" },
];

const sourcesItems = [
  { name: "四国電力 公式サイト", url: "https://www.yonden.co.jp/" },
  { name: "徳島県環境生活部", url: "https://www.pref.tokushima.lg.jp/" },
  { name: "経済産業省 四国経済産業局", url: "https://www.shikoku.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・エリア別データ）", url: "https://pps-net.org/unit" },
];

export default function TokushimaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tokushima-business-electricity-cost"
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
          <span className="text-slate-800">徳島県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            徳島県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            徳島県は四国電力エリアで、阿南市の日亜化学工業（青色LED発明・世界トップシェア・パワー半導体）、徳島市・松茂の大塚製薬・大塚化学の医薬品工業、鳴門わかめ水産加工、阿波踊り・鳴門うずしお・祖谷渓の観光業など多様な産業構造を持ちます。伊方原発3号機の安定稼働により電力単価が全国平均より安く、新電力競争入札の余地も大きい県です。本ページでは新電力ネット（pps-net.org/unit）のエリア別単価データを県の産業構造に紐づけて再加工し、業種別の契約見直し・補助金活用を実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-23" updatedAt="2026-05-23" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四国電力エリアにおける徳島県の電気代水準と全国比較（pps-net.org/unitデータ加工）</li>
              <li>日亜化学LED半導体・大塚製薬医薬品・阿波踊り観光業のBefore/After削減事例</li>
              <li>伊方原発稼働メリットを活かした特別高圧競争入札の実務</li>
              <li>SII・徳島県・市町村・観光庁・農水省補助の組合せ活用パターン</li>
              <li>南海トラフ地震・台風想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              徳島県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県は四国電力エリアで、徳島市・鳴門・阿南・吉野川・美馬・三好の6地域から構成されます。日亜化学のLED半導体・大塚製薬の医薬品の超大規模需要、伊方原発稼働メリット、阿波踊り観光業集積、南海トラフ地震・台風BCP対応が県内電力消費の特徴を形成します。
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
              徳島県では2024年時点で8〜10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス系、地域密着型の3カテゴリが主軸となります。
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
              徳島県の電気料金水準と全国比較
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
              新電力ネット（pps-net.org/unit）が公開している全国9エリア別の電力単価データを、徳島県の産業構造（LED半導体・医薬品・観光・水産）に紐づけて独自に再加工し、業種別の契約判断材料として整理します。エリア単価データの丸写しではなく、県内事業者の実務判断に直結する形で再構成しています。
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
              業種別影響度3件 — 日亜化学LED・大塚製薬・阿波踊り会館（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンで、pps-net.org/unitのエリア単価データを根拠に試算しています。
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
              徳島県固有の電気代上昇要因 — LED半導体超大規模需要・伊方原発稼働・南海トラフBCP
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県の電気代変動は、日亜化学・大塚製薬の超大規模需要、伊方原発稼働メリット、クリーンルーム・恒温恒湿の電力多消費、南海トラフ地震・台風BCP対応など多面的特性が複合的に影響します。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              徳島県の補助金・優遇制度 — SII・県独自・市町村・観光庁・農水省
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県では国補助（SII等）に加え、県独自補助、徳島市・阿南市・鳴門市の脱炭素補助、観光庁・農水省・環境省の省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              徳島県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県の事業者構成は、LED半導体、医薬品・食品、水産加工、観光業、中小製造業・商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              徳島県の新電力シェアは2024年時点で22%前後。阿南日亜化学・徳島大塚製薬は競争入札による切替が標準化。観光業は四国電力グループ系新電力との連携が現実的選択肢。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              徳島県の省エネは『LED半導体工場のクリーンルーム・MOCVD最適化』『医薬品工場のクリーンルーム・恒温恒湿高効率化』『水産加工冷蔵庫のCO2冷媒インバータ化』『観光業（阿波踊り会館・ホテル）の省エネ』『需要家主導型オフサイトPPA・BEMS蓄電池』の5軸が主力。日亜化学・大塚製薬のRE100対応を意識した再エネ調達が重要です。
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
              徳島県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震・台風想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで徳島県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              徳島県は日亜化学LED半導体・大塚製薬医薬品の超大規模需要・伊方原発稼働メリット・南海トラフ台風BCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
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
            <GlossaryLinks currentSlug="tokushima-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国電力管内の料金体系・改定動向の詳細。" },
              { href: "https://pps-net.org/unit", title: "新電力ネット エリア別電力単価（出典）", description: "本ページのエリア単価分析の出典データ。最新の単価推移はこちら。" },
              { href: "/kagawa-business-electricity-cost", title: "香川県の法人電気料金", description: "隣接県・四国電力エリアの事情。" },
              { href: "/ehime-business-electricity-cost", title: "愛媛県の法人電気料金", description: "四国電力エリア・伊方原発立地県の事情。" },
              { href: "/kochi-business-electricity-cost", title: "高知県の法人電気料金", description: "四国電力エリア・紙パルプ・施設園芸の事情。" },
              { href: "/hyogo-business-electricity-cost", title: "兵庫県の法人電気料金", description: "隣接県・関西電力エリアの事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働LED工場・医薬品の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "LED半導体・医薬品が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "日亜化学LED・大塚製薬と全国比較。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "阿波踊り観光業向け。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "鳴門わかめ加工冷蔵向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "クリーンルーム設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "四国電力エリア・伊方原発稼働の影響。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="徳島県の自社条件で電気代リスクを試算する"
            description="日亜化学LED半導体・大塚製薬医薬品・阿波踊り観光業・鳴門わかめ水産加工など徳島県固有の条件と四国電力エリア単価・伊方原発稼働メリット・南海トラフ台風BCPを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="徳島県の電力契約見直し、専門家に相談しませんか？"
            description="日亜化学LED半導体・大塚製薬医薬品・阿波踊り観光業・鳴門わかめ水産加工の電気代見直しは業種・地域により論点が異なります。南海トラフ台風BCP対応も含め、エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
