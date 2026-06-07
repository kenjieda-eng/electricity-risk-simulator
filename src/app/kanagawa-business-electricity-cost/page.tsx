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
  "神奈川県の法人電気料金完全ガイド｜京浜工業地帯・横浜港川崎港物流・半導体工場の契約最適化";
const pageDescription =
  "神奈川県の法人電気料金を地域特化で解説。東京電力エリアの京浜工業地帯、自動車・電機・石油化学の大規模工場、横浜港・川崎港物流、半導体・電機の大規模事業所の電力負荷プロファイル、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "神奈川県 法人電気料金",
    "東京電力 高圧 京浜工業",
    "横浜 工場 電気代",
    "川崎港 物流 電力",
    "半導体 神奈川 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kanagawa-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kanagawa-business-electricity-cost",
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
    label: "東京電力エリアと神奈川県の位置付け",
    detail:
      "神奈川県は東京電力エリア。横浜・川崎・横須賀・湘南・県西の5地域から構成され、京浜工業地帯（横浜・川崎）に大規模事業者が集中。県内総電力需要は約450億kWhで東電エリアの17%を占める。県内の発電所立地が多く（火力・地熱を含む）、首都圏電力供給の中核。",
  },
  {
    label: "電源構成 — 県内火力発電所の集積",
    detail:
      "県内に東電・電源開発・JERAの大規模火力発電所が立地（横須賀・横浜・川崎・南横浜）。LNG火力中心で、首都圏電力需要を支えるベースロード。再エネは小田原・三浦半島の太陽光、湯河原・箱根の地熱に限定的。",
  },
  {
    label: "気象条件 — 太平洋側温暖と内陸高温差",
    detail:
      "湘南・横須賀・三浦の沿岸部は太平洋側温暖気候、年間気温差が小さい。横浜・川崎の都市部はヒートアイランドで夏季高温。県西（小田原・箱根）は内陸性で寒暖差大。年間冷房度日（CDD24）1,200〜1,500、暖房度日2,000程度。",
  },
  {
    label: "需給ひっ迫 — 夏季・冬季の最大需要",
    detail:
      "東京電力エリアの需給ひっ迫局面では、京浜工業地帯の大規模事業者にDR要請が来る。2022〜2023年の需給ひっ迫警報時には、複数の特別高圧事業者がDR契約に基づき大規模な需要抑制を実施した実績。",
  },
  {
    label: "京浜工業地帯と多業種集積",
    detail:
      "横浜・川崎・横須賀の沿岸部に石油化学・自動車・電機・製鉄・造船・半導体・医薬品など多業種の大規模工場が立地。特別高圧契約事業者数は全国でも上位、年間使用量1億kWh超の超大型事業者が10社超立地する。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』『高圧電力AB』など。2023年6月の規制料金改定で家庭向け15.9%値上げ。法人向けも同等の改定を実施。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "京浜工業地帯の大規模事業者で実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "ミツウロコでんき・東京ガスエナジー",
    role: "ガス・流通系新電力",
    detail:
      "東京ガスエナジーは横浜・川崎エリアでガス・電気のセット契約に強み。中小事業者・店舗中心。",
  },
  {
    name: "ヨコハマのでんき・かわさきパワー",
    role: "地域密着型新電力",
    detail:
      "横浜市・川崎市の地域密着型新電力。市内自治体施設・中小事業者向け。地産地消・地域経済循環の観点で選択肢。",
  },
  {
    name: "みんな電力・自然電力",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供。RE100宣言企業・SBT対応企業向け。京浜工業地帯の大企業を中心にCO2削減ニーズに対応。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は12社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。全国平均と同水準で、京浜工業地帯の大規模事業者は新電力競争で1〜3円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。自動車工場・石油化学・半導体・鉄鋼などが対象。全国平均比1〜2円/kWh安い水準で、新電力の競争入札による圧力大。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力（動力）』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。",
  },
  {
    label: "大規模特別高圧需要家の特別契約",
    detail:
      "年間使用量1億kWh超の超大型事業者向けには、相対契約による割引が一般化。発電所近接立地のメリットを活かしたメニュー設計も可能。新電力経由ではさらに優遇可能性がある。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・自動車工場（横須賀市追浜、特別高圧 5,500kW、年間 4,200万kWh）",
    before:
      "Before: 日産系自動車部品工場A社。塗装ライン・溶接ライン・組立ラインが24時間稼働。市場連動プラン継続で2023年夏には月最大1.85億円の電気代経験。年間電気代 12.6億円。溶接電力・塗装乾燥炉電力が消費電力の60%を占めるが、デマンド管理は手動運用。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／塗装乾燥炉を高効率ヒートポンプ式に変更／溶接機をインバータ式に更新（SII補助1/3活用、投資1.2億円）／屋根面積1.5万m²に自家消費太陽光2MW＋蓄電池導入／需要家主導型PPAでオフサイト風力3MW契約。",
    result:
      "Result: 年間電気代 12.6億円 → 10.08億円（▲20%、▲2.52億円）／契約kW 5,500→4,900／投資回収 補助金後 2.8年／RE100進捗 60%達成。",
  },
  {
    title: "業種2: 流通業・川崎港物流冷凍倉庫（川崎区東扇島、特別高圧 4,800kW、年間 3,800万kWh）",
    before:
      "Before: 川崎港の冷凍物流センターB社（-25℃冷凍倉庫4棟）。24時間稼働。年間電気代 11.4億円。燃料費調整額直撃で2023年は前年比+2.3億円の上昇。冷凍設備の一部が古く（15年経過）、ピークシフト未対応。",
    after:
      "After: 特別高圧の固定5年契約（DC・物流専門新電力との競争入札）／冷凍庫コンプレッサーをCO2冷媒インバータ式に更新（SII補助1/3活用、投資3.2億円）／断熱性能改善工事／需要家主導型PPAでオフサイト太陽光4MW契約／需要見える化BEMS導入。",
    result:
      "Result: 年間電気代 11.4億円 → 9.1億円（▲20%、▲2.3億円）／契約kW 4,800→4,200／投資回収 補助金後 3.2年。",
  },
  {
    title: "業種3: 製造業・半導体工場（横浜市港北区、特別高圧 8,000kW、年間 6,500万kWh）",
    before:
      "Before: 半導体ファウンドリC社（300mmウェーハ）。24時間連続運転、クリーンルーム空調が消費電力の40%、製造設備40%、UPS等付帯設備20%。年間電気代 19.5億円。市場連動プランは採用せず固定プランだが、2022〜2023年改定で前年比+3億円の上昇。",
    after:
      "After: 特別高圧の固定3年契約を新電力との競争入札で更新（東電継続より1.2円/kWh安）／クリーンルーム空調を可変風量制御＋AI最適化に／製造設備の電力密度向上／需要家主導型PPAでオフサイト太陽光・風力合計15MW契約／屋根太陽光1MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 19.5億円 → 16.4億円（▲16%、▲3.1億円）／契約kW 8,000→7,600／投資回収 補助金後 4.0年／RE100進捗 75%達成。",
  },
];

const costFactors = [
  {
    label: "京浜工業地帯の超大規模電力需要",
    detail:
      "横浜・川崎・横須賀の大規模事業者は年間使用量1億kWh級が珍しくない。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間1億円規模のコスト変動。契約見直しの優先度が極めて高い。",
  },
  {
    label: "半導体・データセンター需要の急増",
    detail:
      "横浜港北・川崎武蔵小杉の半導体・データセンター集積地で電力需要が急増。AIサーバ等高密度サーバ導入でラック当たり消費電力が10〜30kWに上昇傾向。電力契約も大幅変更が必要。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "京浜工業地帯の大企業はRE100・SBT対応のためにオフサイトPPA契約を急増中。福島・茨城・千葉の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "県西部観光業の冷暖房需要",
    detail:
      "箱根・湯河原・湯本の温泉ホテル、芦ノ湖・大涌谷の観光業では冬季暖房・夏季冷房負荷が高い。山岳地帯特有の温度差と観光需要のピーク変動が電気代変動要因。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1億kWh使用の超大規模事業者で年4億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では京浜工業地帯の大規模工場で大型採択実績多数。半導体・自動車・化学工場のクリーンルーム空調・コンプレッサー更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "京浜工業地帯の大規模工場で屋根・空地活用の太陽光導入が有効。オフサイトPPAも合わせて活用可能。",
  },
  {
    name: "神奈川県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "神奈川県独自補助。京浜工業地帯の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "横浜市・川崎市の脱炭素補助",
    target: "市内中小事業者・大規模事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜5,000万円",
    note: "横浜市『中小企業向け省エネ補助』、川崎市『川崎カーボンゼロ達成促進事業』など。市独自の脱炭素政策と連動した手厚い支援。",
  },
  {
    name: "経産省 GX関連補助・ESG投資支援",
    target: "RE100対応企業・トランジションファイナンス対象事業",
    rate: "事業規模に応じる、大型補助可能",
    note: "京浜工業地帯の大企業のGX投資（水素・アンモニア・蓄電池）を支援する大型補助。電力契約見直しと組合せた中期計画に活用。",
  },
];

const industryProfile = [
  {
    label: "自動車・電機（横須賀・厚木・座間・茅ヶ崎）",
    detail:
      "日産（追浜・厚木・座間）・いすゞ（藤沢）等の自動車関連、富士電機（厚木）・パナソニック（湘南）等の電機。年間使用量1,000万〜10億kWh規模。",
  },
  {
    label: "石油化学・製鉄・造船（川崎・横浜）",
    detail:
      "JFEスチール東日本（川崎）、JX日鉱日石エネルギー、ENEOS（川崎）、富士石油など。年間使用量5,000万〜30億kWh規模の超大型事業者。",
  },
  {
    label: "半導体・医薬品（横浜・川崎・相模原）",
    detail:
      "東京エレクトロン（さがみ）・キオクシア（横浜）等の半導体関連、武田薬品・第一三共・ノバルティス等の医薬品工場。24時間連続運転のクリーンルームが中心。年間使用量2,000万〜2億kWh規模。",
  },
  {
    label: "横浜港・川崎港物流",
    detail:
      "京浜港は日本最大級のコンテナ取扱港。冷凍倉庫・荷役機械・港湾施設の電力消費が中心。冷凍倉庫は24時間稼働で電力負荷高い。",
  },
  {
    label: "県西部観光業・湘南商業",
    detail:
      "箱根・湯河原温泉、大涌谷観光業、湘南エリア（鎌倉・藤沢・茅ヶ崎）の観光商業。年間使用量50〜500万kWh規模が中心。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは30%超（経産省統計）と全国上位。京浜工業地帯の大規模事業者は競争入札による切替が標準化。需要家主導型PPAも急速に普及。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。半導体・自動車・データセンターの24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。京浜工業地帯では新電力との単価差が明確で、特別高圧競争入札が一般化。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②大規模需要対応力・バランシングコスト管理、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "京浜工業地帯の大企業はRE100対応のため、福島・茨城・千葉・栃木の大規模再エネ電源とのオフサイトPPA契約を拡大。初期投資ゼロで再エネ調達可能。",
  },
];

const energySaving = [
  {
    label: "京浜工業地帯の高効率設備更新",
    detail:
      "自動車・電機・化学工場で塗装乾燥炉のヒートポンプ化、コンプレッサーのインバータ化、ボイラーのヒートポンプ転換などで電力▲20〜35%。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "冷凍倉庫のCO2冷媒インバータ化",
    detail:
      "川崎港・横浜港の冷凍倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "半導体・データセンターの高効率化",
    detail:
      "クリーンルーム空調の可変風量制御＋AI最適化、サーバ更新で電力密度向上、外気冷房併用でPUE改善で電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増す。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "京浜工業地帯の大企業を中心に、福島・茨城・千葉の大規模太陽光・風力との直接契約が拡大。RE100・SBT対応とCO2削減・電気代削減を両立。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・倉庫・オフィスでBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。蓄電池併設でDR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "県内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・神奈川県補助・横浜市・川崎市補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "GX関連補助・ESG投資支援の対象事業か確認したか",
];

const faqItems = [
  { question: "神奈川県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均と同水準ですが、京浜工業地帯の大規模事業者は新電力競争で全国平均より2〜3円/kWh安いケースが多数。特別高圧契約の競争入札では1〜2円/kWh単位の単価交渉が一般化しています。" },
  { question: "京浜工業地帯の特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量1億kWh級の超大規模事業者では、新電力の競争入札による単価最適化効果が最も大きいエリアです。特別高圧契約での1円/kWhの単価差が年間1億円規模のコスト差になります。複数の新電力からの相見積取得が必須です。" },
  { question: "東電EPの燃料費調整額の特徴は？", answer: "電源構成でLNG・石炭火力依存度が65%程度のため、燃料費調整額の変動幅は大きいです。2022〜2023年は月最大+8円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。柏崎刈羽原発の再稼働進展で長期的には負担減の可能性ありますが、上限付きプランへの切替を強く推奨します。" },
  { question: "RE100対応のためのオフサイトPPAは神奈川県で活用できますか？", answer: "はい、京浜工業地帯の大企業を中心にオフサイトPPA契約が急速に拡大しています。福島・茨城・千葉・栃木の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。RE100宣言企業のスケールアップに最も効果的な手段です。" },
  { question: "半導体・データセンター事業者の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②クリーンルーム空調の可変風量制御＋AI最適化、③外気冷房（フリークーリング）併用でPUE改善、④需要家主導型オフサイトPPAで再エネ調達、⑤蓄電池・BEMSによる需要最適化、の5本柱が中心。SBT・RE100対応と電気代削減を両立できます。" },
  { question: "神奈川県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、神奈川県脱炭素・省エネ設備導入補助、横浜市・川崎市の脱炭素補助、経産省GX関連補助・ESG投資支援の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "横浜港・川崎港の冷凍倉庫の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷凍庫への更新（SII補助活用）、②断熱性能改善工事、③特別高圧の競争入札による単価最適化、④需要家主導型オフサイトPPA、⑤デマンドコントローラー導入、の5本柱が中心。投資回収は補助金活用で2〜3.5年が目安です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "神奈川県環境エネルギー部", url: "https://www.pref.kanagawa.jp/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function KanagawaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kanagawa-business-electricity-cost"
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
          <span className="text-slate-800">神奈川県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            神奈川県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            神奈川県は東京電力エリアの京浜工業地帯を擁し、自動車・電機・石油化学・半導体・医薬品の大規模事業者が集積します。横浜港・川崎港物流の冷凍倉庫、湘南・箱根の観光業も主要産業です。本ページでは県内法人の電気代水準、業種別影響度、京浜工業地帯特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリアにおける神奈川県の電気代水準と全国比較</li>
              <li>自動車工場・川崎港冷凍倉庫・半導体工場のBefore/After削減事例</li>
              <li>京浜工業地帯の超大規模事業者向け特別高圧競争入札の実務</li>
              <li>SII・神奈川県・横浜市川崎市補助の組合せ活用パターン</li>
              <li>神奈川県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              神奈川県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県は東電エリアで、横浜・川崎・横須賀・湘南・県西の5地域から構成されます。京浜工業地帯の大規模事業者集積、県内火力発電所の立地、横浜港・川崎港の物流拠点としての位置付けが県内電力消費の特徴を形成します。
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
              東京電力エリアの全体像は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
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
              神奈川県では2024年時点で12社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・流通系、地域密着型（ヨコハマのでんき・かわさきパワー）、再エネ特化型の4カテゴリが主軸となります。
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
              神奈川県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東電エリアの単価は全国平均と同水準で、京浜工業地帯の大規模事業者は新電力競争で全国平均より2〜3円/kWh安いケースが多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 自動車工場・川崎港冷凍・半導体工場（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              神奈川県固有の電気代上昇要因 — 京浜工業・半導体DC急増・RE100・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県の電気代上昇は、京浜工業地帯特有の超大規模需要と最新トレンドが複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              神奈川県の補助金・優遇制度 — SII・県独自・横浜市川崎市・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県では国補助（SII等）に加え、県独自補助、横浜市・川崎市の脱炭素補助、経産省GX関連補助・ESG投資支援が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              神奈川県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県の事業者構成は、自動車・電機、石油化学・製鉄・造船、半導体・医薬品、横浜港・川崎港物流、県西部観光業・湘南商業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 東電EPと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県の新電力シェアは2024年時点で30%超と全国上位。京浜工業地帯の大規模事業者は競争入札による切替が標準化、需要家主導型PPAも急速に普及。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              神奈川県の省エネは『京浜工業地帯の高効率設備更新』『冷凍倉庫CO2冷媒化』『半導体・DC高効率化』『需要家主導型オフサイトPPA』『BEMS・需要見える化・蓄電池』の5軸が主力。京浜工業地帯ならではの大規模化を志向することが重要です。
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
              神奈川県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで神奈川県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              神奈川県は京浜工業地帯の超大規模需要・半導体DC急増・RE100対応など多面的特性を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した16〜20%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="kanagawa-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電管内の料金体系・改定動向の詳細。" },
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金", description: "隣接都・首都経済集積の東京都の事情。" },
              { href: "/saitama-business-electricity-cost", title: "埼玉県の法人電気料金", description: "隣接県・首都圏物流拠点の埼玉県の事情。" },
              { href: "/chiba-business-electricity-cost", title: "千葉県の法人電気料金", description: "隣接県・京葉工業地帯の千葉県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・冷凍倉庫の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "半導体・自動車・冷凍倉庫が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "京浜工業地帯と全国比較。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "半導体・自動車工場向け。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "横浜港・川崎港冷凍倉庫の削減ポイント。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "京浜工業地帯のオンサイト・オフサイトPPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コンプレッサー・空調・冷凍設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
            ]}
          />

          <ContentCta
            heading="神奈川県の自社条件で電気代リスクを試算する"
            description="京浜工業地帯の超大規模需要・半導体DC・RE100対応など神奈川県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="神奈川県の電力契約見直し、専門家に相談しませんか？"
            description="京浜工業地帯・横浜港川崎港物流・半導体工場の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
