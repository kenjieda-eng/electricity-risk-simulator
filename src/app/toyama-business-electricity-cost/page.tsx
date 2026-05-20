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
  "富山県の法人電気料金完全ガイド｜アルミ産業全国1位・医薬品工業・黒部水力の契約最適化";
const pageDescription =
  "富山県の法人電気料金を地域特化で解説。北陸電力エリアの中核、アルミ製錬・圧延全国1位、医薬品工業、黒部ダム水力発電、2023年大幅値上げの影響、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "富山県 法人電気料金",
    "北陸電力 高圧 富山",
    "アルミ産業 電気代",
    "医薬品 富山 電力",
    "黒部ダム 水力発電",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/toyama-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/toyama-business-electricity-cost",
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
    label: "北陸電力エリアと富山県の位置付け",
    detail:
      "富山県は北陸電力ネットワーク管内（富山・石川・福井の3県）の中核県。県内総電力需要は約75億kWhで北陸電力エリア全体の40%超を占めるエリア最大県。富山新港・伏木富山港・氷見・高岡地域に大規模事業者が集積。",
  },
  {
    label: "電源構成 — 水力発電の豊富さと志賀原発停止",
    detail:
      "北陸電力エリアは水力発電比率約30%で全国エリア最高水準。黒部川・神通川・庄川水系の水力発電所群がベースロード。志賀原発（石川県）は2011年以降停止中で、火力（七尾大田・敦賀）と水力の組合せで供給。再エネ比率（太陽光・風力含む）は40%超。",
  },
  {
    label: "気象条件 — 北陸豪雪と冷涼夏季",
    detail:
      "富山市の降雪量は年間2〜3m、立山連峰麓・南砺市利賀は年間8〜12m。暖房度日3,000〜3,300。融雪・除排雪電力需要が高い。夏季は黒部峡谷の冷涼な気候で内陸最高気温も32℃前後と冷涼。冷房需要は低めで、冷暖比不均衡な構造。",
  },
  {
    label: "需給ひっ迫 — 冬季暖房ピーク",
    detail:
      "北陸電力エリアの需給ひっ迫局面は冬季夕方（17〜20時）の暖房ピークが中心。富山県の融雪・暖房電力需要が同時最大の主要構成要素。需要家主導型DR（デマンドレスポンス）契約の重要性が高い。",
  },
  {
    label: "産業集積 — アルミ産業全国一",
    detail:
      "富山県は日本のアルミ製錬・圧延発祥の地で、アルミ生産量全国1位。三協立山アルミ・YKK AP・ナルメックス・タカギ等の大手企業本社・工場が集積。アルミは電力消費が極めて大きい『電気の缶詰』と呼ばれる業種で、県内産業電力需要の中核。",
  },
];

const utilitiesList = [
  {
    name: "北陸電力（ほくでん）",
    role: "一般送配電事業者・小売",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』など。2023年4月の規制料金改定では家庭向け45.84%値上げ（北陸電力管内）で大幅改定。法人向けも同等の大幅改定を実施。値上げ幅は全国で最大規模。",
  },
  {
    name: "北陸電力 株式会社（小売子会社）",
    role: "新電力（北陸電力グループ）",
    detail:
      "北陸電力グループの新電力。固定単価メニュー中心。アルミ・医薬品の大規模事業者で実績多数。電源は北陸電力の余剰電力と相対契約電源を組合せ。",
  },
  {
    name: "ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "全国系新電力。中堅製造業・大規模物流拠点で実績。2023年の北陸電力大幅値上げを受けて新電力切替が加速。",
  },
  {
    name: "Looopでんき・auでんき",
    role: "市場連動・通信系新電力",
    detail:
      "市場連動プラン中心の新電力、通信会社系新電力。中小事業者・店舗中心。冬季ピーク時のスポット価格高騰時には注意が必要。",
  },
  {
    name: "とやま新電力",
    role: "地域密着型新電力",
    detail:
      "富山県内資本の地域新電力。県内再エネ電源（小水力・太陽光）を優先調達し、地域循環型のエネルギー供給を志向。県内自治体施設・中小事業者で実績。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰・北陸電力大幅値上げ局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は8社前後が県内で法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "北陸電力『業務用高圧電力』の電力量料金は20〜24円/kWh（2023年4月改定後）。燃料費調整額（2024〜2025年は+3.5〜+5.0円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は28〜33円/kWhレンジ。2023年値上げにより全国平均より2〜4円/kWh高い水準で、東日本エリアでは最も高単価のエリアに。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金19〜22円/kWh+調整項目。アルミ製錬・大型医薬品工場・大規模機械工場が対象。アルミ製錬向けには電力多消費業種向け特別契約が存在するが、2023年改定で単価上昇。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "北陸電力『低圧電力（動力）』は12〜16円/kWh+調整項目（2023年改定後）。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は19〜23円/kWh。",
  },
  {
    label: "燃料費調整額の北陸電力特性",
    detail:
      "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度。2022〜2023年は月最大+7円/kWh水準、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。志賀原発の再稼働進展（時期未定）で長期的には負担減の可能性があるが、当面は高水準が継続見込み。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・アルミ圧延工場（高岡市・特別高圧 3,500kW、年間 2,800万kWh）",
    before:
      "Before: 高岡市のアルミ押出・圧延メーカーA社。圧延ライン・押出機・ヒーター・コンプレッサーを24時間稼働。市場連動プラン継続で2023年冬には月最大1.6億円の電気代を経験。年間電気代 11.2億円。圧延ヒーター電力が消費電力の50%超、コンプレッサー旧型・デマンド管理は手動。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／圧延ヒーターを高効率誘導加熱に更新（SII補助1/3活用、投資1.5億円）／コンプレッサーをインバータ式に更新／屋根面積1.2万m²に自家消費太陽光1.5MW＋蓄電池導入／需要家主導型PPAでオフサイト水力2MW契約。",
    result:
      "Result: 年間電気代 11.2億円 → 9.1億円（▲19%、▲2.1億円）／契約kW 3,500→3,200／投資回収 補助金後 3.5年。",
  },
  {
    title: "業種2: 製造業・医薬品工場（富山市・高圧 850kW、年間 480万kWh）",
    before:
      "Before: 富山市の医薬品メーカーB社（後発医薬品）。錠剤製造ライン・包装ライン・クリーンルーム空調を24時間稼働。年間電気代 1.6億円。2023年北陸電力値上げで前年比+3,500万円の上昇。クリーンルーム空調が消費電力の45%、包装ライン25%。",
    after:
      "After: 固定3年プランへ切替／クリーンルーム空調を可変風量制御に変更／コンプレッサーをインバータ式に更新（SII補助1/2活用、投資1,200万円）／包装ラインの省エネ化／屋根面積3,200m²に自家消費太陽光400kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.6億円 → 1.31億円（▲18%、▲2,900万円）／契約kW 850→760／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種3: サービス業・宇奈月温泉ホテル（黒部市、高圧 380kW、年間 215万kWh）",
    before:
      "Before: 宇奈月温泉のリゾートホテルC社（130室）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の60%を占める。年間電気代 7,200万円。市場連動プラン継続で2023年1月は月1,250万円の請求（前年同月+450万円）を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資480万円、SII補助1/2活用）／高効率ヒートポンプ給湯機への更新／温泉熱交換器の高効率化／融雪設備のスマート制御導入。",
    result:
      "Result: 年間電気代 7,200万円 → 6,050万円（▲16%、▲1,150万円）／契約kW 380→340／投資回収 1.6年（補助金後 0.8年）。",
  },
];

const costFactors = [
  {
    label: "2023年北陸電力45.84%値上げの影響",
    detail:
      "全国エリアで最大規模の値上げ。家庭向け45.84%、法人向けも同等の大幅改定。中規模事業所（年間100万kWh）で年800〜1,200万円、大規模工場（年間1,000万kWh）で年8,000万〜1.2億円の値上げ。県内法人にとって最大のコスト圧力。",
  },
  {
    label: "アルミ産業の電力多消費体質",
    detail:
      "アルミ製錬・圧延・押出は電力多消費の代表業種。アルミ1トン生産で14,000〜15,000kWhの電力を消費（電気の缶詰）。県内アルミ産業の年間電力需要は10億kWh超で、富山県産業電力需要の20%超を占める。",
  },
  {
    label: "医薬品工業のクリーンルーム電力",
    detail:
      "富山県は医薬品工業（売薬の伝統＋現代の医薬品製造）が集積。クリーンルーム空調が24時間連続稼働で電力負荷大。県内医薬品事業者の年間電力需要は2〜3億kWh規模。",
  },
  {
    label: "雪国・融雪設備電力",
    detail:
      "富山市・高岡市の降雪量は年間2〜3m。屋根融雪・ロードヒーティング・凍結防止ヒーター・除雪機械電力など雪国特有の設備電力消費が大きい。コンビニ・SS・物流拠点で年間100〜300万円規模の電気代要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後と上昇。年間1,000万kWh使用の大規模事業者で年4,000万円規模の負担。アルミ・医薬品は減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になりやすく、申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・ヒートポンプ・誘導加熱・空調・送風機",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内ではアルミ・医薬品・機械工業で大型採択実績多数。アルミの誘導加熱・医薬品のクリーンルーム空調更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・倉庫と相性が良い。富山県は冬季積雪量があるため、積雪荷重対応パネルの選定が必須。",
  },
  {
    name: "富山県脱炭素・省エネ設備導入補助金",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "富山県独自補助。アルミ・医薬品など電力多消費業種への手厚い支援あり。SII補助との併用ルールに留意。",
  },
  {
    name: "富山市・高岡市の省エネ補助",
    target: "市内中小事業者の省エネ設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助。富山市『脱炭素経営推進補助』、高岡市『中小企業エネルギー対策補助』など。県補助・SII補助との併用可能なケースあり。",
  },
  {
    name: "経産省 GX関連補助・電力多消費業種向け支援",
    target: "アルミ・鉄鋼・化学等の電力多消費業種の脱炭素投資",
    rate: "事業規模に応じる、大型補助可能",
    note: "アルミ製錬・圧延の電力多消費業種向けに、GX関連の大型支援制度あり。トランジションファイナンス・需要家主導型PPAとの組合せが代表例。",
  },
];

const industryProfile = [
  {
    label: "アルミ製錬・圧延・押出（高岡・射水・砺波）",
    detail:
      "三協立山・YKK AP・タカギ・ナルメックスなど。アルミ製造で全国1位。年間使用量1,000万〜2億kWh規模の大規模事業者多数。電力消費が極めて大きく、電気代コスト構造の中核。",
  },
  {
    label: "医薬品工業（富山市・砺波市）",
    detail:
      "売薬の伝統＋現代の医薬品製造（後発医薬品）が集積。日医工・富山化学・テイカ製薬等。クリーンルーム空調24時間稼働。年間使用量500万〜2,000万kWh規模。",
  },
  {
    label: "機械工業・電子部品（富山・高岡・氷見）",
    detail:
      "コマツ・三協立山機械等の機械工業、富士フィルム富山・パナソニック電工等の電子部品。24時間稼働の中堅工場多数。年間使用量500万〜5,000万kWh規模。",
  },
  {
    label: "観光業・温泉ホテル（宇奈月・黒部・立山）",
    detail:
      "宇奈月温泉、黒部峡谷観光業、立山・室堂の山岳観光業。冬季暖房・温泉加熱・融雪電力需要が大きい。ホテルは年間50〜500万kWh規模。",
  },
  {
    label: "農業・水産業・伝統工芸",
    detail:
      "富山湾の漁業・水産加工、富山平野の米作・チューリップ栽培、高岡の銅器・井波の彫刻等の伝統工芸。中小規模事業者が多数で年間使用量20〜200万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で富山県内法人の新電力シェアは20〜25%（経産省統計）。2023年北陸電力大幅値上げで切替が加速し、新電力シェアが東日本エリアで上昇率最大。アルミ・医薬品の大規模事業者では競争入札による切替が標準化。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。アルミ・医薬品の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "北陸電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・豪雪災害時の復旧体制。デメリット: 単価が新電力比2〜4円/kWh高め（2023年値上げ後）、燃料費調整額上限なし。アルミ・医薬品では新電力との単価差が大きく、競争入札が一般化。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①北陸エリア供給実績の有無、②電力多消費業種（アルミ等）への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤水力電源のメリットを活かせるか、の5点が県内では特に重要。",
  },
  {
    label: "水力電源活用のメリット",
    detail:
      "北陸電力エリアは水力比率30%で全国最高水準。水力電源は燃料費調整額の影響を受けにくく、長期的に安定単価。水力中心電源の新電力との契約は燃料価格高騰時にメリット大。",
  },
];

const energySaving = [
  {
    label: "アルミ製錬・圧延の高効率化",
    detail:
      "圧延ヒーターの高効率誘導加熱への更新、コンプレッサーのインバータ化、エネルギー回収システム導入で電力▲15〜25%。SII補助＋県補助＋GX補助の組合せで投資回収 3〜5年。",
  },
  {
    label: "医薬品クリーンルームの可変風量制御",
    detail:
      "クリーンルーム空調の可変風量制御＋AI最適化、フィルター交換・気流最適化で電力▲15〜25%。SII補助活用で投資回収 2〜3年。",
  },
  {
    label: "暖房ヒートポンプ・融雪スマート制御",
    detail:
      "寒冷地仕様ヒートポンプエアコンへの転換で暖房電力▲30〜50%、融雪設備の外気温・降雪量センサー連動制御で融雪電力▲30〜60%。投資回収 SII補助活用で1〜2年。",
  },
  {
    label: "自家消費太陽光＋水力PPA",
    detail:
      "屋根面積3,000m²以上の事業所で1MW級導入が現実的。北陸電力エリアは水力電源が豊富で需要家主導型水力PPA契約のチャンス。アルミ・医薬品の大規模事業者でRE100対応も実現可能。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・倉庫でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。アルミの電力多消費事業所では効果絶大。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "北陸電力の2023年4月改定後の単価で再見積を取得したか",
  "県内新電力（とやま新電力含む）5〜8社からの相見積を取得したか",
  "アルミ・医薬品の電力多消費業種向け特別契約・優遇制度を確認したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "水力電源中心の新電力との契約による燃料費調整額リスク低減を試算したか",
  "融雪・凍結防止ヒーターの運転時間を最適化したか",
  "SII補助・富山県補助・市町村補助・GX関連補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "需要家主導型水力PPA（オフサイト）の試算を実施したか",
];

const faqItems = [
  { question: "富山県の法人電気代水準は全国比どれくらいですか？", answer: "2023年4月の北陸電力大幅値上げ（45.84%）で、高圧電力（業務用）の単価ベースで全国平均より2〜4円/kWh高い水準になりました。中規模事業所（年間100万kWh）で年200〜400万円、大規模工場（年間1,000万kWh）で年2,000〜4,000万円の差が生じます。新電力切替で2〜3円/kWhの単価最適化が可能なケースが多いため、切替を強く推奨します。" },
  { question: "アルミ産業の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②圧延ヒーターの高効率誘導加熱化（SII補助＋GX補助活用）、③コンプレッサーのインバータ化、④需要家主導型水力PPA・オフサイト太陽光、⑤BEMSによる需要最適化、の5本柱が中心。電力多消費業種向けの特別支援制度を最大活用することが重要です。" },
  { question: "医薬品工場のクリーンルーム電気代削減ポイントは？", answer: "①クリーンルーム空調の可変風量制御＋AI最適化、②高効率エアフィルター更新、③コンプレッサーのインバータ化、④包装ラインの省エネ化、⑤屋根太陽光＋蓄電池の自家消費、の5本柱が中心。SII補助＋富山県補助の組合せで投資回収2〜3年が目安です。" },
  { question: "北陸電力の燃料費調整額の特徴は？", answer: "電源構成で火力依存度45%、水力30%、再エネ25%程度のため、燃料費調整額の変動幅は中程度です。2022〜2023年は月最大+7円/kWh、2024〜2025年は+3.5〜+5.0円/kWhレンジで推移。志賀原発の再稼働進展（時期未定）で長期的には負担減の可能性ありますが、当面は上限付きプランへの切替を強く推奨します。" },
  { question: "富山県で固定プランと市場連動プランのどちらが向きますか？", answer: "冬季ピーク時のスポット価格高騰リスクと2023年大幅値上げの経験を考えると、24時間稼働のアルミ・医薬品・機械工業は固定プランが圧倒的に向きます。市場連動プランは限定的なケースのみ検討対象です。" },
  { question: "需要家主導型水力PPAの活用可否は？", answer: "北陸電力エリアは水力電源が豊富で、需要家主導型水力PPA契約の好適エリアです。アルミ・医薬品の大規模事業者でRE100対応とコスト削減を両立可能。長期的に安定した水力電源の単価メリットがあり、燃料費調整額の影響を受けにくい構造を確立できます。" },
  { question: "富山県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、富山県脱炭素・省エネ設備導入補助金、富山市・高岡市の市町村補助、経産省GX関連補助・電力多消費業種向け支援の5本柱が中心。最大3〜4補助の組合せが可能で、アルミ・医薬品の大型投資で投資回収を1〜2年短縮できます。" },
  { question: "北陸電力と新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（北陸電力ネットワーク）が担うため、北陸電力契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "北陸電力 公式サイト", url: "https://www.rikuden.co.jp/" },
  { name: "経済産業省 中部経済産業局電力・ガス事業北陸支局", url: "https://www.chubu.meti.go.jp/b3hokuriku_denkigas/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function ToyamaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/toyama-business-electricity-cost"
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
          <span className="text-slate-800">富山県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            富山県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            富山県は北陸電力エリアの中核で、アルミ製錬・圧延全国1位、医薬品工業、黒部水力発電など特殊な電力構造を持ちます。2023年4月の北陸電力45.84%大幅値上げの影響を最も受けたエリアで、電気代見直しの緊急度が極めて高い県です。本ページでは県内法人の電気代水準、業種別影響度、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>北陸電力エリアの2023年大幅値上げと富山県の電気代水準</li>
              <li>アルミ圧延・医薬品工場・宇奈月温泉ホテルのBefore/After削減事例</li>
              <li>アルミ産業・医薬品工業など電力多消費業種固有の対策</li>
              <li>需要家主導型水力PPAの活用可能性</li>
              <li>SII・富山県補助・市町村補助・GX関連補助の組合せ活用パターン</li>
              <li>富山県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              富山県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県は北陸電力エリアの中核県で、エリア最大の電力需要を持ちます。アルミ製錬・圧延の全国1位、医薬品工業集積、黒部川・神通川・庄川水系の豊富な水力発電が特徴。2023年4月の北陸電力45.84%大幅値上げが県内法人にとって最大のコスト圧力となっています。
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
              富山県では2024年時点で8社前後の新電力が法人向け高圧で新規受付中です。北陸電力グループ系、全国系、地域密着型（とやま新電力）の3カテゴリが主軸となります。2023年北陸電力大幅値上げで切替が加速しました。
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
              富山県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              北陸電力エリアの単価は2023年4月の45.84%大幅値上げにより全国平均より2〜4円/kWh高い水準になりました。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要で、新電力切替の経済効果が最大級のエリアです。
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

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — アルミ圧延・医薬品・宇奈月温泉ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、24時間連続稼働は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              富山県固有の電気代上昇要因 — 2023年値上げ・アルミ・医薬品・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県の電気代上昇は、2023年北陸電力大幅値上げと電力多消費業種の集積が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              富山県の補助金・優遇制度 — SII・県独自・市町村・GX関連
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県では国補助（SII等）に加え、県独自補助、市町村補助、経産省GX関連補助・電力多消費業種向け支援が組合せ可能です。アルミ・医薬品など電力多消費業種で大型補助の活用が重要です。
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
              富山県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県の事業者構成は、アルミ製錬・圧延・押出、医薬品工業、機械工業・電子部品、観光業・温泉ホテル、農業・水産業・伝統工芸の5層構造です。アルミ・医薬品の電力多消費業種が県内産業電力需要の中核を占めます。
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
              富山県の新電力シェアは2024年時点で20〜25%。2023年北陸電力大幅値上げを受けて切替が加速し、東日本エリアで新電力シェア上昇率が最大級です。アルミ・医薬品の大規模事業者では競争入札が標準化しています。
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
              富山県の省エネは『アルミ製錬・圧延の高効率化』『医薬品クリーンルームの可変風量制御』『暖房ヒートポンプ・融雪スマート制御』『自家消費太陽光＋水力PPA』『BEMS・蓄電池』の5軸が主力。電力多消費業種への特化型打ち手が重要です。
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
              富山県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
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
              シミュレーターで富山県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              富山県は2023年北陸電力大幅値上げの影響を最も受けたエリアで、アルミ・医薬品の電力多消費業種特化型対策が必要です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・水力PPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>2023年北陸電力値上げ後の年間電気代を試算する</li>
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
              publishedAt="2026-05-20"
            />
            <GlossaryLinks currentSlug="toyama-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-hokuriku-business-electricity", title: "北陸電力エリアの法人電気代事情", description: "北陸電力管内の料金体系・2023年大幅値上げの詳細。" },
              { href: "/ishikawa-business-electricity-cost", title: "石川県の法人電気料金", description: "隣接県・機械工業の石川県の事情。" },
              { href: "/fukui-business-electricity-cost", title: "福井県の法人電気料金", description: "隣接県・繊維・原発立地の福井県の事情。" },
              { href: "/niigata-business-electricity-cost", title: "新潟県の法人電気料金", description: "隣接県・燕三条金属加工の新潟県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "電力多消費業種が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "アルミ・医薬品工場の全国比較。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "アルミ・医薬品工場向け。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "富山県のオンサイト・水力PPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "アルミ・医薬品設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "水力比率高い北陸エリアの特性。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "電力多消費業種の減免制度判定。" },
            ]}
          />

          <ContentCta
            heading="富山県の自社条件で電気代リスクを試算する"
            description="アルミ製錬・医薬品工業・北陸電力2023年値上げの影響など富山県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・水力PPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="富山県の電力契約見直し、専門家に相談しませんか？"
            description="アルミ・医薬品・宇奈月温泉の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
