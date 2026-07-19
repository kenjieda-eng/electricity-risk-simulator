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
  "岩手県の法人電気料金完全ガイド｜震災復興・自動車部品集積・林業の契約最適化";
const pageDescription =
  "岩手県の法人電気料金を地域特化で解説。東北電力エリア、震災後復興と電力構造、北上市の自動車関連工場集積、林業・水産業の電力負荷、補助金活用、契約見直しまで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "岩手県 法人電気料金",
    "東北電力 高圧 燃料費調整額",
    "岩手 自動車部品 電気代",
    "北上市 工場 電気契約",
    "岩手 林業 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/iwate-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/iwate-business-electricity-cost",
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
    label: "東北電力エリアの基本構造（岩手県）",
    detail:
      "岩手県は東北電力ネットワーク管轄。盛岡市・北上市を中心に内陸部と沿岸部で電力消費構造が異なる。沿岸部は2011年東日本大震災で被災し、その後の復興過程で電力インフラが再構築された経緯を持つ。系統規模は東北電力エリア全体で約1,400万kW。",
  },
  {
    label: "電源構成 — 水力豊富・震災復興型再エネ",
    detail:
      "岩手県は東北電力エリア内でも水力発電比率が高い。一関市・奥州市・盛岡市周辺の水力発電所群が安定供給を担う。震災以降は風力・太陽光発電も導入加速し、釜石・宮古・大船渡などの沿岸部で復興型再エネプロジェクトが進行。",
  },
  {
    label: "気象条件 — 寒冷地・内陸盆地と沿岸の温度差",
    detail:
      "盛岡市の暖房度日（HDD18）は約3,400で本州有数の寒冷地。北上盆地は内陸寒冷気候で冬は-15℃以下になることも。一方で沿岸部（宮古・釜石・大船渡）は内陸より温暖で暖房負荷が軽い。同一県内でも電力消費プロファイルが大きく異なる。",
  },
  {
    label: "震災復興と電力インフラ",
    detail:
      "2011年東日本大震災で沿岸部の電力インフラが大規模被災し、その後の復興過程で送電網・変電所が再構築された。BCP（事業継続計画）電源確保への意識が県内事業者で特に高く、自家発電・蓄電池導入率が他県平均より高い傾向。",
  },
  {
    label: "需給ひっ迫と冬季ピーク",
    detail:
      "岩手県の電力需要は冬季夕方（17〜19時）の暖房需要立ち上がり時間帯にピーク。寒冷地暖房と工場稼働のダブルピークが特徴。デマンドレスポンス（DR）契約が県内でも徐々に拡大している。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（東北電力ネットワーク・東北電力EP）",
    role: "一般送配電事業者・小売",
    detail:
      "東北6県＋新潟県を供給エリアとする東北電力ネットワーク管轄。岩手県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年4月の規制料金改定では21.9%値上げが実施され、自由料金も同等改定。",
  },
  {
    name: "東北自然エネルギー・ENEOSでんき",
    role: "新電力（岩手県内供給実績あり）",
    detail:
      "東北自然エネルギー（東北電力グループ）は再エネ電源を活用したRE100対応プランを展開。ENEOSでんきは固定単価メニューを中心に法人向け高圧でシェア拡大。",
  },
  {
    name: "F-Power・サミットエナジー・大阪ガス（オーパスエナジー）",
    role: "全国系新電力",
    detail:
      "全国系の新電力も岩手県内で営業。2024年以降は固定プラン中心の営業姿勢で、自動車関連工場・大規模工場との契約獲得を積極化。",
  },
  {
    name: "いわて生活協同組合電気・もりおか暮らしの電力",
    role: "地域密着型新電力",
    detail:
      "いわて生協系の電気事業、もりおか暮らしの電力（盛岡市）など、地域密着の新電力が複数。県民向けセット商品や、地域貢献型メニューを展開。",
  },
  {
    name: "釜石新電力・大船渡電力",
    role: "震災復興型地域新電力",
    detail:
      "震災復興と地産地消を組み合わせた地域新電力。釜石市・大船渡市の地元事業者向けに供給しており、再エネ100%メニューも提供。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で岩手県内でも新電力の新規受付停止・撤退が複数発生したが、2024年以降は10社程度が法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東北電力『業務用高圧電力』の電力量料金は岩手県内で18〜22円/kWh（季節・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味した実質単価は25〜30円/kWhレンジ。全国平均より1〜2円/kWh高い水準。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。トヨタ系・関東自動車工業（東北）等の大規模工場や、関連部品サプライヤーの大口需要家が対象。全国平均並みで、東北電力エリア内では他県とほぼ同水準。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東北電力『低圧電力』は10〜14円/kWh+調整項目。中小事業所・店舗・コンビニ等の店舗系で利用。低圧電灯（事務所等）は17〜21円/kWh。",
  },
  {
    label: "燃料費調整額の岩手県内特性",
    detail:
      "東北電力エリアの燃料費調整額は青森県と同水準。火力比率が比較的高く、2022〜2023年は月最大+7円/kWh水準。2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。為替・原油価格次第で再度上振れリスク。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・自動車部品工場（北上市、特別高圧 3,500kW、年間 2,400万kWh）",
    before:
      "Before: 北上市の自動車部品メーカーA社（プレス・溶接・塗装ライン）。Tier1サプライヤーで24時間2交代稼働。年間電気代 7.2億円。燃料費調整額直撃で2023年は前年比+1.5億円の上昇。ピークデマンド管理は手動運用、塗装ブースの送風機が旧式。",
    after:
      "After: 特別高圧の固定5年契約（東北電力外系新電力との競争入札で獲得）／デマンドコントローラー＋BEMS導入／塗装ブース送風機をインバータ化（SII補助1/3活用、投資 4,200万円）／屋根面積8,000m²に自家消費太陽光1.2MW導入（補助金後 投資1.5億円）。",
    result:
      "Result: 年間電気代 7.2億円 → 5.83億円（▲19%、▲1.37億円）／契約kW 3,500→3,100／投資回収 設備2.5年（補助金後 1.7年）、太陽光6.8年（補助金後 5.1年）。",
  },
  {
    title: "業種2: 流通業・物流センター（盛岡市郊外、高圧 850kW、年間 480万kWh）",
    before:
      "Before: 盛岡市郊外の中規模物流センターB社。冷凍冷蔵在庫の24時間稼働 + 仕分けライン昼夜運用。年間電気代 1.43億円。デマンド管理は基本的な手動運用、LED未更新、ヒートポンプ給湯は旧式。",
    after:
      "After: 高圧の固定3年契約／デマンドコントローラー導入／全照明LED化（投資 900万円、SII補助1/2活用）／冷凍冷蔵設備の高効率化／屋根面積4,000m²に自家消費太陽光600kW導入。",
    result:
      "Result: 年間電気代 1.43億円 → 1.20億円（▲16%、▲2,300万円）／契約kW 850→760／投資回収 LED1.6年（補助金後 0.8年）、太陽光8.2年。",
  },
  {
    title: "業種3: サービス業・温泉旅館/ホテル（花巻温泉、高圧 320kW、年間 170万kWh）",
    before:
      "Before: 花巻温泉のリゾートホテルC社（150室、温泉施設併設）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の60%を占める。年間電気代 5,100万円。市場連動プラン継続で2023年1月は月720万円の請求（前年同月+260万円）を経験。",
    after:
      "After: 固定3年プランへ切替／温泉熱の予熱再利用（廃熱回収器導入）／全館LED化（投資380万円、SII補助1/2活用）／寒冷地仕様ヒートポンプエアコンへの更新／融雪設備のスマート制御導入。",
    result:
      "Result: 年間電気代 5,100万円 → 4,280万円（▲16%、▲820万円）／契約kW 320→290／投資回収 1.9年（補助金後 1.0年）。",
  },
];

const costFactors = [
  {
    label: "内陸寒冷地暖房需要",
    detail:
      "盛岡・北上の暖房度日3,400〜3,500で本州有数。冬季月別電気代が他季の2倍以上になる事業所が多数。年間電気代に占める暖房分は県内事業所平均で20〜30%、ホテル・病院等で40%超に達することも。",
  },
  {
    label: "自動車部品工場の高負荷",
    detail:
      "北上市・金ヶ崎町を中心とした自動車部品サプライヤーは、プレス機・溶接機・塗装ブースなど大型負荷を抱える。デマンドピーク管理の巧拙が年間1,000〜5,000万円の電気代差につながる。",
  },
  {
    label: "震災復興地域のBCP電源コスト",
    detail:
      "沿岸部（釜石・宮古・大船渡）では震災経験から自家発電・蓄電池の導入率が他地域より高い。BCP電源は通常時の電気代削減には限定的だが、停電時の事業継続価値を含めると投資合理性あり。",
  },
  {
    label: "林業・木材加工業の電力プロファイル",
    detail:
      "県北部の久慈・二戸を中心に林業・木材加工業が立地。製材機・乾燥機・チップ製造設備が中心で、年間使用量100〜500万kWh規模。バイオマス自家発電との組合せ事例も増えている。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1,000万kWh使用の自動車部品工場で年4,000万円規模の負担、5年で2億円超。減免制度の対象になりやすい事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・塗装ブース",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "自動車部品・食品加工・林業など岩手県主力業種で採択率が高い主力補助金。塗装ブース送風機・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・物流センターと相性が良い。BCP電源確保意識の高い沿岸部事業者で活用事例多数。",
  },
  {
    name: "岩手県省エネ・脱炭素補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "岩手県環境生活部・産業振興部所管。SII等の国補助との併用ルールに留意。",
  },
  {
    name: "盛岡市・北上市・釜石市の省エネ補助",
    target: "市内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助金。北上市は自動車関連工場向け、釜石市は震災復興型再エネ補助に特化メニューあり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "岩手県内では宮古市・二戸市・葛巻町等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "自動車部品・電子部品（北上・金ヶ崎・盛岡）",
    detail:
      "トヨタ系・関東自動車工業（東北）の集積で、Tier1〜Tier2サプライヤーが多数立地。プレス・溶接・塗装・組立ラインが中心で、特別高圧契約が標準。年間使用量1,000〜5,000万kWh規模。",
  },
  {
    label: "食品加工・水産加工業（沿岸部・盛岡）",
    detail:
      "宮古・釜石・大船渡の水産加工と、盛岡周辺の食品加工。冷凍・冷蔵設備の24時間稼働。サンマ・サケ・ワカメ・コンブの加工が主力。年間使用量100〜1,000万kWh規模。",
  },
  {
    label: "林業・木材加工業（久慈・二戸・遠野）",
    detail:
      "県北部・内陸部を中心とした林業・木材加工。製材機・乾燥機・チップ製造の電力消費。バイオマス自家発電との組合せ可能性あり。",
  },
  {
    label: "観光業・ホテル・温泉旅館（花巻・盛岡・平泉・遠野）",
    detail:
      "花巻温泉・盛岡・平泉・遠野などの観光地。シティホテル・温泉旅館多数。冬季暖房・温泉加熱で電力需要が突出。",
  },
  {
    label: "農業・農畜産業（県全域）",
    detail:
      "畜産（短角牛・前沢牛・南部美人豚等）の畜舎温度管理、農産物の冷蔵・選果設備が中心。中規模で年間50〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で岩手県内法人の新電力シェアは15〜20%（経産省統計）と全国平均よりやや低め。北上・盛岡等の都市圏では切替が進む一方、地方部では東北電力EP継続が多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で岩手県内事業者の多くが市場連動プランから固定プランへ回帰。冬季ピーク時のスポット価格高騰を経験した事業者は市場連動を敬遠する傾向。",
  },
  {
    label: "東北電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・東北6県＋新潟の広域供給ネットワーク・地域貢献。デメリット: 単価が新電力比1〜2円/kWh高め。北上・盛岡都市圏では新電力との単価差が拡大。",
  },
  {
    label: "BCP電源との組合せ契約",
    detail:
      "震災経験から、新電力切替＋BCP電源（自家発電・蓄電池）＋デマンドレスポンス契約のセット提案が増えている。総コスト最適化と事業継続性を両立できる選択肢として有力。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東北電力エリア供給実績、②冬季需要急増時のバランシングコスト対応、③固定単価期間（3〜5年）、④燃料費調整額の有無・上限、⑤BCP電源連携の5点が岩手県では特に重要。",
  },
];

const energySaving = [
  {
    label: "塗装ブース・乾燥炉の省エネ",
    detail:
      "自動車部品工場の塗装ブース送風機をインバータ化、乾燥炉の温度プロファイル最適化で電力▲20〜35%。投資回収 SII補助活用で 2〜4年。",
  },
  {
    label: "暖房ヒートポンプ転換",
    detail:
      "電気パネルヒーター・電気温風機からヒートポンプエアコン（寒冷地仕様）への転換で暖房電力▲30〜50%。事務所・店舗で年間100〜400万円の削減事例多数。",
  },
  {
    label: "冷凍冷蔵設備のインバータ化",
    detail:
      "水産加工・食品加工の冷凍冷蔵庫コンプレッサーをインバータ式に更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "自家消費太陽光（寒冷地仕様）",
    detail:
      "屋根面積3,000m²以上の事業所で1MW級導入が現実的。寒冷地仕様パネル選定が必要。投資回収 7〜10年（補助金後 5〜7年）。",
  },
  {
    label: "BCP電源と省エネの組合せ",
    detail:
      "蓄電池でピークカット＋停電時バックアップを兼用。需要家主導型PPA補助金活用で投資回収 7〜10年。震災経験のある県内で特に投資価値が認識されている。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の2023年4月改定後の単価で再見積を取得したか",
  "東北電力エリア新電力5〜10社からの相見積を取得したか",
  "塗装ブース・冷凍冷蔵設備・暖房設備の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "屋根面積を活用した自家消費太陽光導入の試算を実施したか",
  "BCP電源（自家発電・蓄電池）の導入余地を確認したか",
  "SII省エネ補助金・岩手県補助・市町村補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "震災時の停電想定とBCP対応を契約条件に織り込んでいるか",
];

const faqItems = [
  { question: "岩手県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均より1〜2円/kWh高い水準です。寒冷地暖房需要・東北電力の火力依存度が主要因。中規模事業所（年間100万kWh）で年100〜200万円、大規模工場（年間1,000万kWh）で年1,000〜2,000万円の差が生じます。" },
  { question: "北上市の自動車部品工場で電気代削減はどう進めますか？", answer: "①特別高圧の固定5年契約への切替（年5〜10%削減）、②塗装ブース送風機のインバータ化（電力▲20〜35%）、③デマンドコントローラー＋BEMS導入（基本料金▲5〜10%）、④屋根太陽光導入（自家消費分の単価固定化）の4点パッケージが主力。投資回収はSII補助1/3活用で2〜5年が目安です。" },
  { question: "震災経験のある沿岸部事業者の電気契約のポイントは？", answer: "BCP電源（自家発電・蓄電池）との組合せ契約、停電時の通報・復旧体制、新電力経由の場合の窓口対応の3点を確認することが重要。需要家主導型PPA補助金で蓄電池併設すれば、平常時のピークカットと停電時バックアップを兼用できます。" },
  { question: "岩手県で固定プランと市場連動プランのどちらが向きますか？", answer: "冬季ピーク負荷の大きい岩手県では、24時間稼働事業所・暖房負荷の大きい業種は固定プランが圧倒的に向きます。2022〜2023年の市場高騰で県内事業者の多くが固定プランへ回帰しました。" },
  { question: "林業・木材加工業の電気代削減で効果的な施策は？", answer: "①製材機・乾燥機の高効率化、②バイオマス自家発電（木質チップ）との組合せ、③廃材を活用した熱電併給、④高圧契約の固定プラン採用の4点が主力。バイオマス発電は補助金（GX補助・林野庁補助）の併用も検討対象です。" },
  { question: "岩手県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、岩手県省エネ・脱炭素補助、盛岡市・北上市・釜石市の市町村補助、脱炭素先行地域（宮古市・二戸市・葛巻町等）の特別支援が組合せ可能です。" },
  { question: "ホテル・温泉旅館の電気代削減で効果的な施策は？", answer: "①温泉廃熱の予熱再利用、②寒冷地仕様ヒートポンプエアコン更新、③全館LED化、④融雪設備のスマート制御、⑤固定プラン切替の5点パッケージで年15〜20%の削減事例が多数。SII補助1/2活用で投資回収1〜2年が目安です。" },
  { question: "BCP電源を導入する目安は？", answer: "中規模事業所（高圧 500kW級）で蓄電池100〜500kWh、自家発電（ディーゼル・LPG）100〜500kW級が現実的な目安。需要家主導型PPA補助金活用で投資回収 7〜10年。震災経験のある岩手県では、平常時のピークカット効果と停電時バックアップを兼用する設計が主流です。" },
];

const sourcesItems = [
  { name: "東北電力公式サイト", url: "https://www.tohoku-epco.co.jp/" },
  { name: "経済産業省 東北経済産業局", url: "https://www.tohoku.meti.go.jp/" },
  { name: "岩手県環境生活部・産業振興部", url: "https://www.pref.iwate.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function IwateBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/iwate-business-electricity-cost"
        datePublished="2026-05-19"
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
          <span className="text-slate-800">岩手県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            岩手県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            岩手県は東北電力エリア、震災復興と電力構造の再構築、北上市の自動車関連工場集積、林業・水産業の地場産業という4つの構造的特徴を持ちます。本ページでは県内法人の電気代水準、自動車部品・物流・温泉旅館の業種別影響、震災経験を踏まえたBCP電源活用、補助金活用、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東北電力エリア（岩手県）の電源構成・基本料金構造</li>
              <li>県内法人の電気代水準（高圧・特別高圧・低圧）と業種別影響</li>
              <li>自動車部品・物流・温泉旅館の3業種でBefore/After削減事例</li>
              <li>震災復興・寒冷地・林業など県固有のコスト要因</li>
              <li>SII・岩手県補助・市町村補助の組合せ活用パターン</li>
              <li>岩手県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の電力供給は『東北電力ネットワーク管轄』『内陸盆地と沿岸部の温度差』『震災復興過程の電力インフラ再構築』『自動車部品・林業の集積』という4つの構造的特徴を持ちます。BCP電源確保意識の高さも岩手県固有です。
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
              東北電力エリアの全体像は{" "}
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東北電力エリア事情
              </Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県では2024年時点で約10社の新電力が法人向け高圧で新規受付中。東北系（東北自然エネルギー）、全国系（ENEOS・サミットエナジー）、地域密着型（いわて生協系等）、震災復興型（釜石新電力等）の4カテゴリが主軸となります。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東北電力の単価は全国エリア比で1〜2円/kWh高め。寒冷地暖房需要・火力依存度が主要因。実質単価ベースでの比較が重要です。
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
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 自動車部品・物流・温泉旅館（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の電気代上昇は、複数の県固有要因が同時進行で重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県の補助金・優遇制度
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県では国補助（SII等）に加え、県独自補助、市町村補助、脱炭素先行地域指定による特別支援が組合せ可能です。震災復興と脱炭素を組み合わせた補助メニューが特徴的です。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              岩手県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の事業者構成は、自動車部品・電子部品、食品加工・水産加工、林業・木材加工、観光業、農業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 東北電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の新電力シェアは2024年時点で15〜20%程度。北上・盛岡等の都市圏では切替が進む一方、地方部では東北電力EP継続が多数です。震災経験からBCP電源との組合せ契約が特徴的です。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              県内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県の省エネは『塗装ブース・乾燥炉省エネ』『暖房ヒートポンプ転換』『冷凍冷蔵設備のインバータ化』『自家消費太陽光』『BCP電源組合せ』の5軸が主力です。
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
              岩手県向け契約見直しチェックリスト（12項目）
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
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで岩手県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              岩手県は寒冷地暖房・自動車部品工場の高負荷・震災復興BCP電源の3重要因を抱えます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜19%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-19"
            />
            <GlossaryLinks currentSlug="iwate-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北6県＋新潟県の料金体系・改定動向の詳細。" },
              { href: "/aomori-business-electricity-cost", title: "青森県の法人電気料金", description: "隣接県（東北電力）の電気代事情。" },
              { href: "/miyagi-business-electricity-cost", title: "宮城県の法人電気料金", description: "東北6県の中核、宮城の電気代事情。" },
              { href: "/akita-business-electricity-cost", title: "秋田県の法人電気料金", description: "風力先進県の電気代事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "寒冷地・24時間稼働法人の選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/auto-parts-electricity-cost-review", title: "自動車部品工場の電気料金見直し", description: "北上の自動車部品工場に直結。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "水産加工に直結。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "温泉旅館の暖房・温泉加熱コスト構造。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "蓄電池のBCP×ピークカット活用", description: "震災経験のある県で投資価値が高い。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "寒冷地仕様パネル選定のポイント。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "塗装ブース・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東北電力の火力依存度を踏まえた解説。" },
              { href: "/emergency-power-outage-response", title: "停電・計画停電が発生したときの対応", description: "震災経験のある県で必読。" },
              { href: "/region-supplier-withdrawal-map", title: "エリア別新電力撤退状況マップ", description: "県内新電力の動向を含む全国マップ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="岩手県の自社条件で電気代リスクを試算する"
            description="寒冷地暖房・自動車部品工場・BCP電源など岩手県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="岩手県の電力契約見直し、専門家に相談しませんか？"
            description="寒冷地・自動車部品・BCP電源・震災復興地域の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
