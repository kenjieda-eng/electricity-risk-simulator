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
  "福井県の法人電気料金完全ガイド｜繊維・眼鏡（鯖江）・原発立地・越前ガニ漁業の契約最適化";
const pageDescription =
  "福井県の法人電気料金を地域特化で解説。北陸電力エリア、鯖江の眼鏡工業全国シェア9割、福井繊維工業、嶺南の原発立地（美浜・敦賀・大飯・高浜）、越前ガニ等漁業の電力負荷、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "福井県 法人電気料金",
    "北陸電力 高圧 福井",
    "鯖江 眼鏡 電気代",
    "福井 繊維 電力",
    "原発立地 嶺南 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/fukui-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fukui-business-electricity-cost",
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
    label: "北陸電力エリアと福井県の位置付け",
    detail:
      "福井県は北陸電力エリア。嶺北（福井市・鯖江市・越前市・あわら市）と嶺南（敦賀市・小浜市等）の2地域に分かれる。県内総電力需要は約35億kWhで北陸電力エリアの19%を占める。嶺南は関西電力の原発立地で関西圏とも経済的に近接。",
  },
  {
    label: "電源構成 — 原発立地と再稼働状況",
    detail:
      "嶺南には関西電力所有の美浜原発（1〜3号機、3号機が再稼働済）、大飯原発（1〜4号機、3・4号機が再稼働済）、高浜原発（1〜4号機、1〜4号機が再稼働済）、日本原電所有の敦賀原発（2号機、再稼働申請中）が立地。原発は関電エリア向けの電源で福井県内事業者の料金体系には直接影響しない。",
  },
  {
    label: "気象条件 — 北陸雪国気候",
    detail:
      "福井市・鯖江市の降雪量は年間2〜3m、奥越地域（大野・勝山）は年間5〜10m。暖房度日3,000〜3,300。融雪・除排雪電力需要が高い。夏季は内陸最高気温33℃前後で本州並み。",
  },
  {
    label: "需給ひっ迫 — 冬季暖房ピーク",
    detail:
      "北陸電力エリアの需給ひっ迫局面は冬季夕方（17〜20時）の暖房ピークが中心。福井県の融雪・暖房電力需要が同時最大の主要構成要素。",
  },
  {
    label: "産業集積 — 眼鏡・繊維と漁業",
    detail:
      "鯖江市の眼鏡工業は全国シェア9割超で世界三大眼鏡産地のひとつ。福井市・越前市・あわら市の繊維工業（合繊・絹織物）も伝統的な集積。嶺南は越前ガニ・カレイ等の漁業、嶺北は若狭湾沿岸の漁業・水産加工が主要産業。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（ほくでん）",
    role: "一般送配電事業者・小売",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』など。2023年4月の規制料金改定では家庭向け45.84%値上げ（北陸電力管内）で大幅改定。法人向けも同等の大幅改定を実施。",
  },
  {
    name: "北陸電力 株式会社（小売子会社）",
    role: "新電力（北陸電力グループ）",
    detail:
      "北陸電力グループの新電力。固定単価メニュー中心。繊維・眼鏡工業で実績。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "全国系新電力。中堅製造業で実績。2023年の北陸電力大幅値上げを受けて新電力切替が加速。",
  },
  {
    name: "関西電力（嶺南エリア向け一部供給）",
    role: "近隣電力会社",
    detail:
      "嶺南地域は関西電力エリアではないが、原発立地として関西電力との経済的繋がりが深い。商業施設や一部の事業者で関西電力の特別契約事例あり（県境近接案件のみ）。",
  },
  {
    name: "Looopでんき・auでんき",
    role: "市場連動・通信系新電力",
    detail:
      "市場連動プラン中心の新電力、通信会社系新電力。中小事業者・店舗中心。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰・北陸電力大幅値上げ局面で新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は6社前後が県内で法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "北陸電力『業務用高圧電力』の電力量料金は20〜24円/kWh（2023年4月改定後）。燃料費調整額（2024〜2025年は+3.5〜+5.0円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は28〜33円/kWhレンジ。2023年値上げにより全国平均より2〜4円/kWh高い水準。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金19〜22円/kWh+調整項目。福井繊維・眼鏡工業の大型工場、化学工場などが対象。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "北陸電力『低圧電力（動力）』は12〜16円/kWh+調整項目（2023年改定後）。中小事業所・眼鏡工房・店舗等で利用。低圧電灯（事務所等）は19〜23円/kWh。",
  },
  {
    label: "燃料費調整額の北陸電力特性",
    detail:
      "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度。2022〜2023年は月最大+7円/kWh水準、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・鯖江眼鏡工場（鯖江市・高圧 280kW、年間 145万kWh）",
    before:
      "Before: 鯖江市の眼鏡フレームメーカーA社（チタンフレーム）。プレス機・研磨機・コンプレッサーを24時間稼働。市場連動プラン継続で2023年冬には月最大380万円の電気代経験。年間電気代 3,700万円。研磨機の旧型・冬季暖房は電気パネルヒーター・コンプレッサー旧型運用。",
    after:
      "After: 北陸電力フロンティアに切替し固定3年プラン採用。研磨機の高効率化、コンプレッサーをインバータ式に更新（SII補助1/2活用、投資1,200万円）、寒冷地仕様ヒートポンプエアコン転換、屋根面積1,400m²に自家消費太陽光200kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 3,700万円 → 3,000万円（▲19%、▲700万円）／契約kW 280→240／投資回収 2.3年（補助金後 1.2年）。",
  },
  {
    title: "業種2: 流通業・越前ガニ水産加工冷凍倉庫（越前町・高圧 320kW、年間 175万kWh）",
    before:
      "Before: 越前町の越前ガニ・水産加工冷凍倉庫B社。-25℃冷凍庫を3棟運用、年間連続稼働（特に11〜3月のカニ漁シーズン集中）。年間電気代 5,500万円。2023年北陸電力値上げで前年比+1,100万円の上昇。冷凍設備が古く（17年経過）。",
    after:
      "After: 固定3年プランへ切替／冷凍庫コンプレッサーをCO2冷媒インバータ式に更新（SII＋農水補助1/2活用、投資2,800万円）／断熱性能改善工事／屋根太陽光150kW自家消費＋蓄電池。",
    result:
      "Result: 年間電気代 5,500万円 → 4,400万円（▲20%、▲1,100万円）／契約kW 320→270／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種3: サービス業・あわら温泉ホテル（あわら市、高圧 380kW、年間 215万kWh）",
    before:
      "Before: あわら温泉のリゾートホテルC社（150室）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の55%を占める。年間電気代 7,000万円。市場連動プラン継続で2023年1月は月1,200万円の請求（前年同月+420万円）を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資420万円、SII補助1/2活用）／高効率ヒートポンプ給湯機への更新／温泉熱交換器の高効率化／融雪設備のスマート制御導入。",
    result:
      "Result: 年間電気代 7,000万円 → 5,950万円（▲15%、▲1,050万円）／契約kW 380→340／投資回収 1.6年（補助金後 0.8年）。",
  },
];

const costFactors = [
  {
    label: "2023年北陸電力45.84%値上げの影響",
    detail:
      "全国エリアで最大規模の値上げ。家庭向け45.84%、法人向けも同等の大幅改定。中規模事業所（年間100万kWh）で年800〜1,200万円、大規模工場（年間1,000万kWh）で年8,000万〜1.2億円の値上げ。県内法人にとって最大のコスト圧力。",
  },
  {
    label: "鯖江眼鏡工業の零細・中小集積",
    detail:
      "鯖江市の眼鏡工業は零細・中小事業者が中心で、年間使用量50〜500万kWh規模が多い。2023年大幅値上げの直接影響を受けやすく、業界全体の競争力に影響。",
  },
  {
    label: "原発立地交付金の地域経済貢献",
    detail:
      "嶺南は原発立地交付金（電源三法交付金）を活用した地域振興。事業者向け補助・優遇措置が他地域より手厚いが、近年は原発立地予算が縮小傾向。",
  },
  {
    label: "雪国・融雪設備電力",
    detail:
      "県内全域で年間2〜10mの降雪。屋根融雪・ロードヒーティング・凍結防止ヒーター・除雪機械電力など雪国特有の設備電力消費が大きい。コンビニ・SS・物流拠点で年間100〜300万円規模の電気代要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間500万kWh使用の中規模事業所で年2,000万円規模の負担。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では繊維・眼鏡工業・水産加工で採択実績多数。コンプレッサー更新・LED化・冷蔵庫更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・倉庫と相性が良い。福井県は冬季積雪量があるため、積雪荷重対応パネルの選定が必須。",
  },
  {
    name: "福井県脱炭素・省エネ設備導入補助金",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "福井県独自補助。眼鏡工業の小規模事業者向けに採択しやすい支援メニューもあり。SII補助との併用ルールに留意。",
  },
  {
    name: "鯖江市・福井市の眼鏡・繊維産業支援補助",
    target: "鯖江眼鏡工業・福井繊維工業の設備更新",
    rate: "1/3、上限100万〜500万円",
    note: "鯖江市『眼鏡産業活性化補助』、福井市『繊維産業転換支援』など。県補助・SII補助との併用可能なケースあり。",
  },
  {
    name: "電源三法交付金関連支援（嶺南地域）",
    target: "嶺南地域の原発立地市町村事業者",
    rate: "事業規模に応じる、市町村独自支援あり",
    note: "嶺南地域は原発立地交付金を活用した地域振興メニューが充実。事業者向け補助・優遇措置が他地域より手厚い。",
  },
];

const industryProfile = [
  {
    label: "眼鏡工業（鯖江市）",
    detail:
      "鯖江市の眼鏡フレーム製造は全国シェア9割超。チタン・セルロイド・ステンレス等のフレーム素材を、プレス・研磨・蝋付け・塗装の工程で加工。零細・中小事業者が中心で年間使用量50〜500万kWh規模。",
  },
  {
    label: "繊維工業（福井市・越前市・あわら市）",
    detail:
      "福井繊維工業（合繊・絹織物）の伝統的集積。セーレン・小松マテーレ等の大手繊維企業も立地。染色・整理加工の電力負荷が大きい。年間使用量500万〜2,000万kWh規模。",
  },
  {
    label: "水産加工・越前ガニ漁業（越前町・敦賀市・小浜市）",
    detail:
      "越前ガニ・カレイ・サバ等の水産加工。冷凍倉庫の年間連続稼働、特に11〜3月のカニ漁シーズンに需要集中。年間使用量100〜500万kWh規模。",
  },
  {
    label: "観光業・温泉ホテル（あわら・芦原温泉・小浜）",
    detail:
      "あわら温泉・芦原温泉・小浜温泉の観光業、東尋坊・永平寺の観光地。冬季暖房・温泉加熱・融雪電力需要が大きい。ホテルは年間50〜300万kWh規模。",
  },
  {
    label: "化学・原発関連事業者（嶺南地域）",
    detail:
      "嶺南地域には原発関連事業者（保守・点検・廃棄物処理）、化学工業（信越化学等）が立地。年間使用量200万〜1億kWh規模の中堅〜大規模事業者。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で福井県内法人の新電力シェアは15〜20%。2023年北陸電力大幅値上げで切替が加速したが、地方部では北陸電力継続が多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。眼鏡・繊維・水産加工の中小事業者は特に市場連動を敬遠。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・豪雪災害時の復旧体制。デメリット: 単価が新電力比2〜4円/kWh高め（2023年値上げ後）、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①北陸エリア供給実績の有無、②冬季豪雪時のバランシングコスト対応、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤水力電源のメリットを活かせるか、の5点が県内では特に重要。",
  },
  {
    label: "セット契約・付帯サービス",
    detail:
      "繊維・眼鏡業界向けのセット契約、ガス＋電気セットなど県内特有のセット商品も検討対象。総コスト最適化の観点で比較検討する価値あり。",
  },
];

const energySaving = [
  {
    label: "眼鏡・繊維工業の高効率化",
    detail:
      "研磨機・染色機の高効率化、コンプレッサーのインバータ化、LED化で電力▲20〜35%。SII補助＋県補助＋市補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "暖房ヒートポンプ・融雪スマート制御",
    detail:
      "寒冷地仕様ヒートポンプエアコンへの転換で暖房電力▲30〜50%、融雪設備の外気温・降雪量センサー連動制御で融雪電力▲30〜60%。投資回収 SII補助活用で1〜2年。",
  },
  {
    label: "水産加工冷凍倉庫のCO2冷媒化",
    detail:
      "越前ガニ・水産加工の冷凍庫でCO2冷媒インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII＋農水補助活用で 2〜3年。",
  },
  {
    label: "自家消費太陽光（積雪対応）",
    detail:
      "屋根面積1,500m²以上の事業所で200kW級導入が現実的。積雪荷重対応パネル選定が必須。冬季発電は本州平地の40〜60%、年間トータルで投資回収 9〜12年（補助金後 5〜8年）。",
  },
  {
    label: "BEMS・需要見える化・デマンド制御",
    detail:
      "工場・倉庫でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。眼鏡・繊維の中小事業者でも導入実績増。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "北陸電力の2023年4月改定後の単価で再見積を取得したか",
  "県内新電力5〜8社からの相見積を取得したか",
  "眼鏡・繊維・水産加工の業種特化型省エネメニューを検討したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "水力電源中心の新電力との契約による燃料費調整額リスク低減を試算したか",
  "融雪・凍結防止ヒーターの運転時間を最適化したか",
  "SII補助・福井県補助・市町村補助・電源三法関連支援の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "嶺南事業者は電源三法交付金関連支援の対象かを確認したか",
];

const faqItems = [
  { question: "福井県の法人電気代水準は全国比どれくらいですか？", answer: "2023年4月の北陸電力大幅値上げ（45.84%）で、高圧電力（業務用）の単価ベースで全国平均より2〜4円/kWh高い水準になりました。中規模事業所（年間100万kWh）で年200〜400万円、大規模工場（年間1,000万kWh）で年2,000〜4,000万円の差が生じます。新電力切替で2〜3円/kWhの単価最適化が可能なケースが多いため、切替を強く推奨します。" },
  { question: "鯖江眼鏡工業の中小事業者向け対策は？", answer: "①固定プランへの切替（市場連動回避）、②研磨機の高効率化、③コンプレッサーのインバータ化、④LED化、⑤鯖江市眼鏡産業活性化補助の活用、の5本柱が中心。中小事業者でも投資回収1.5〜2.5年で実現可能。複数事業者の共同調達も検討に値します。" },
  { question: "嶺南の原発立地地域では電気代が安いですか？", answer: "原発は関西電力エリア向けの電源のため、福井県内（北陸電力エリア）の事業者の電気料金体系には直接の影響はありません。ただし嶺南地域は電源三法交付金を活用した地域振興メニューが充実しており、事業者向け補助・優遇措置が他地域より手厚いです。" },
  { question: "越前ガニ水産加工の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷凍庫への更新（SII＋農水補助活用）、②断熱性能改善工事、③シーズン需要（11〜3月）を反映した契約設計、④屋根太陽光＋蓄電池の自家消費、⑤BEMSによる需要最適化、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "北陸電力の燃料費調整額の特徴は？", answer: "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度です。2022〜2023年は月最大+7円/kWh、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。当面は上限付きプランへの切替を強く推奨します。" },
  { question: "あわら温泉ホテルの電気代対策は？", answer: "①固定プランへの切替、②全館LED化、③高効率ヒートポンプ給湯への更新、④温泉熱交換器の高効率化、⑤融雪設備のスマート制御、の5本柱が中心。SII補助＋福井県補助の組合せで投資回収1〜2年が目安です。" },
  { question: "福井県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、福井県脱炭素・省エネ設備導入補助金、鯖江市・福井市の市町村補助、嶺南地域の電源三法交付金関連支援の5本柱が中心。最大3〜4補助の組合せが可能です。" },
  { question: "北陸電力と新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（北陸電力ネットワーク）が担うため、北陸電力契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "北陸電力 公式サイト", url: "https://www.rikuden.co.jp/" },
  { name: "経済産業省 中部経済産業局電力・ガス事業北陸支局", url: "https://www.chubu.meti.go.jp/b3hokuriku_denkigas/" },
  { name: "福井県環境政策課", url: "https://www.pref.fukui.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function FukuiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/fukui-business-electricity-cost"
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
          <span className="text-slate-800">福井県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            福井県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            福井県は北陸電力エリアの中で、鯖江眼鏡工業（全国シェア9割）、福井繊維工業、嶺南の原発立地、越前ガニ水産加工など特色ある産業集積を持ちます。2023年北陸電力大幅値上げの影響が県内法人にとって最大のコスト圧力。本ページでは県内法人の電気代水準、業種別影響度、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>北陸電力エリアの2023年大幅値上げと福井県の電気代水準</li>
              <li>鯖江眼鏡工場・越前ガニ水産加工・あわら温泉ホテルのBefore/After削減事例</li>
              <li>眼鏡・繊維・水産加工・嶺南原発立地など県固有の論点</li>
              <li>SII・福井県補助・市町村補助・電源三法関連支援の組合せ活用</li>
              <li>福井県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福井県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県は北陸電力エリアで、嶺北・嶺南の2地域から構成されます。嶺南は関西電力の原発立地として地域経済に大きな影響を持つ。鯖江眼鏡工業全国シェア9割、福井繊維工業、越前ガニ漁業など特色ある産業集積が県内電力消費の特徴を形成します。
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
              北陸電力エリアの全体像は{" "}
              <Link href="/region-hokuriku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                北陸電力エリア事情
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
              福井県では2024年時点で6社前後の新電力が法人向け高圧で新規受付中です。北陸電力グループ系、全国系、近隣電力会社（関西電力）、市場連動系の4カテゴリが主軸となります。
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
              福井県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              北陸電力エリアの単価は2023年4月の45.84%大幅値上げにより全国平均より2〜4円/kWh高い水準になりました。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要で、新電力切替の経済効果が最大級のエリアです。
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
              業種別影響度3件 — 鯖江眼鏡・越前ガニ水産加工・あわら温泉ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、ホテル見直しは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福井県固有の電気代上昇要因 — 2023年値上げ・眼鏡繊維・嶺南原発・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県の電気代上昇は、2023年北陸電力大幅値上げと県固有の産業集積要因が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              福井県の補助金・優遇制度 — SII・県独自・市町村・電源三法関連
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県では国補助（SII等）に加え、県独自補助、鯖江市・福井市の市町村補助、嶺南地域の電源三法交付金関連支援が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜3年短縮できます。
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
              福井県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県の事業者構成は、鯖江眼鏡工業、福井繊維工業、越前ガニ水産加工、観光業・温泉ホテル、嶺南化学・原発関連の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 北陸電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県の新電力シェアは2024年時点で15〜20%。2023年北陸電力大幅値上げを受けて切替が加速したが、地方部では北陸電力継続が多数です。
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
              福井県の省エネは『眼鏡・繊維工業の高効率化』『暖房ヒートポンプ・融雪スマート制御』『水産加工冷凍倉庫CO2冷媒化』『積雪対応自家消費太陽光』『BEMS・デマンド制御』の5軸が主力。産業集積特化型の打ち手が県内で重要です。
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
              福井県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで福井県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福井県は2023年北陸電力大幅値上げ・眼鏡繊維集積・嶺南原発立地など多面的特性を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>2023年北陸電力値上げ後の年間電気代を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="fukui-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸電力管内の料金体系・2023年大幅値上げの詳細。" },
              { href: "/toyama-business-electricity-cost", title: "富山県の法人電気料金", description: "隣接県・アルミ産業の富山県の事情。" },
              { href: "/ishikawa-business-electricity-cost", title: "石川県の法人電気料金", description: "隣接県・機械工業と観光業の石川県の事情。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "嶺南原発立地で経済繋がりの深い関西電力エリア。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "中小事業者が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "越前ガニ水産加工冷凍倉庫の削減ポイント。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "あわら温泉ホテル特有のコスト構造。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "鯖江眼鏡・福井繊維工業の全国比較。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "福井県の積雪対応PPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小事業者向け主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "北陸電力エリアの特性。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="福井県の自社条件で電気代リスクを試算する"
            description="眼鏡・繊維・水産加工・嶺南原発関連など福井県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・省エネ投資のROIもあわせて確認できます。"
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
            heading="福井県の電力契約見直し、専門家に相談しませんか？"
            description="眼鏡・繊維・水産加工・嶺南事業者の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
