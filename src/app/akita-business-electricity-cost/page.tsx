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
  "秋田県の法人電気料金完全ガイド｜風力発電全国1位・豪雪・製紙木材の契約最適化";
const pageDescription =
  "秋田県の法人電気料金を地域特化で解説。東北電力エリア、風力発電全国1位の特性、豪雪地帯の電力構造、製紙・木材加工業の電力負荷、洋上風力PPA活用、補助金、契約見直しを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "秋田県 法人電気料金",
    "東北電力 高圧 燃料費調整額",
    "秋田 風力発電 PPA",
    "秋田 製紙 電気代",
    "秋田 木材加工 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/akita-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/akita-business-electricity-cost",
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
    label: "東北電力エリア・風力先進県",
    detail:
      "秋田県は東北電力ネットワーク管轄。陸上風力発電が全国1位（約60万kW）、洋上風力プロジェクトでも全国先進地（能代・秋田港・男鹿・八峰など）。再エネ電源の集積が県内系統運用に大きな影響を与える特異な電源プロファイル。",
  },
  {
    label: "電源構成 — 風力集積・水力豊富",
    detail:
      "秋田県内の電源は風力・水力・地熱（湯沢市・大潟村）が中心。秋田火力（石油・石炭）は供給バランス調整役。能代港・秋田港洋上風力（合計100万kW級）が2022〜2024年に順次運開し、再エネ電源拡大が継続。",
  },
  {
    label: "気象条件 — 豪雪・寒冷地",
    detail:
      "秋田市の年間降雪量は約3〜4m、横手・湯沢の内陸部では7〜10mに達する豪雪地帯。暖房度日（HDD18）は秋田で約3,300、横手で約3,800。冬季の日照時間は東京の50%程度で、太陽光発電量は冬季に大きく落ち込む。",
  },
  {
    label: "出力制御リスク",
    detail:
      "風力発電大量導入で、東北電力エリアでは2022年以降、再エネ出力制御が散発的に発生。秋田県内の風力事業者・PPA契約事業者は出力制御リスクを織り込む必要あり。PPA契約での出力制御負担の分担が交渉論点。",
  },
  {
    label: "雪害対策の電力消費",
    detail:
      "豪雪地帯特有のロードヒーティング・屋根融雪・配管凍結防止ヒーター・除雪機械（電動・ハイブリッド）の電力消費が大きい。コンビニ・SS・工場の駐車場・出入口の融雪設備で年間50〜300万円規模の電気代要因。",
  },
];

const utilitiesList = [
  {
    name: "東北電力（東北電力ネットワーク・東北電力EP）",
    role: "一般送配電事業者・小売",
    detail:
      "東北6県＋新潟県を供給エリアとする東北電力ネットワーク管轄。秋田県内の高圧・特別高圧の標準メニューは『業務用電力』『業務用季節別時間帯別電力』等。2023年4月の規制料金改定では21.9%値上げ。",
  },
  {
    name: "東北自然エネルギー・ENEOSでんき",
    role: "新電力（秋田県内供給実績あり）",
    detail:
      "東北自然エネルギー（東北電力グループ）は再エネ電源を活用したRE100対応プラン。秋田県は風力豊富で、再エネ100%メニューに特に強み。ENEOSでんきは固定単価メニューでシェア拡大。",
  },
  {
    name: "あきた風力発電PPA事業者群",
    role: "再エネPPA特化",
    detail:
      "秋田港・能代港・男鹿・八峰沖の洋上風力プロジェクトに連動したPPA案件が増加。長期固定単価（15〜18円/kWh水準）でCO2フリー電力を調達できる選択肢として、製造業・物流の関心が高い。",
  },
  {
    name: "サミットエナジー・F-Power・大阪ガス（オーパスエナジー）",
    role: "全国系新電力",
    detail:
      "全国系の新電力も秋田県内で営業。2024年以降は固定プラン中心の営業姿勢。",
  },
  {
    name: "あきた地域電力・湯沢地熱でんき",
    role: "地域密着型新電力",
    detail:
      "地域密着型の新電力。あきた地域電力は県主導、湯沢地熱でんきは湯沢市の地熱発電を活用した地産地消型。地域内事業者向けの優遇プランあり。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰で県内でも新電力の新規受付停止・撤退が発生したが、2024年以降は10社程度が法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東北電力『業務用高圧電力』の電力量料金は秋田県内で18〜22円/kWh。燃料費調整額・再エネ賦課金を加味した実質単価は25〜30円/kWhレンジ。全国平均より1〜2円/kWh高い水準。風力PPA活用で1〜3円/kWh安く調達できるケースあり。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。秋田製紙・大館木材加工等の大口需要家が対象。全国平均並み。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東北電力『低圧電力』は10〜14円/kWh+調整項目。低圧電灯（事務所等）は17〜21円/kWh。",
  },
  {
    label: "風力PPA調達単価",
    detail:
      "秋田県内・東北域内の陸上・洋上風力プロジェクトとのPPA契約で長期固定単価15〜18円/kWh水準でCO2フリー電力を調達可能。出力制御リスクの分担次第で1〜2円/kWh変動。20年契約が標準。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・製紙工場（秋田市、特別高圧 5,500kW、年間 3,800万kWh）",
    before:
      "Before: 秋田市の製紙メーカーA社（パルプ・抄紙ライン24時間稼働）。年間電気代 11.4億円。燃料費調整額直撃で2023年は前年比+2.4億円の上昇。蒸気・電力の同時生産設備（コージェネ）は旧式、デマンド管理は手動運用。",
    after:
      "After: 特別高圧の固定5年契約／コージェネ更新（投資 8億円、GX補助1/2活用）／秋田港洋上風力PPA（オフサイト3MW）契約／LED化（投資 1,200万円、SII補助1/2活用）／黒液（製紙廃液）バイオマス発電強化。",
    result:
      "Result: 年間電気代 11.4億円 → 9.0億円（▲21%、▲2.4億円）／契約kW 5,500→4,800／投資回収 コージェネ7.5年（補助金後 5.0年）、LED1.4年、オフサイトPPAは初期投資ゼロ。",
  },
  {
    title: "業種2: 流通業・木材加工/集成材工場（大館市、高圧 480kW、年間 280万kWh）",
    before:
      "Before: 大館市の木材加工メーカーB社（製材・乾燥・集成材製造）。年間電気代 8,400万円。市場連動プラン継続で2023年冬は月最大1,300万円の追加負担を経験。製材機・乾燥機が旧式、廃材バイオマス未活用。",
    after:
      "After: 高圧の固定3年契約／製材機・乾燥機をインバータ式に更新（SII補助1/2活用、投資 1,800万円）／廃材（おがくず・端材）の木質チップボイラー導入（投資 3,500万円、林野庁補助1/2活用）／全LED化（投資 400万円）。",
    result:
      "Result: 年間電気代 8,400万円 → 6,720万円（▲20%、▲1,680万円）／契約kW 480→420／投資回収 製材機2.2年（補助金後 1.1年）、バイオマスボイラー4.0年（補助金後 2.0年）。",
  },
  {
    title: "業種3: サービス業・温泉旅館（乳頭温泉/田沢湖、高圧 280kW、年間 150万kWh）",
    before:
      "Before: 乳頭温泉郷の温泉旅館C社（80室）。冬季の暖房・温泉加熱・融雪設備で電力消費が年間使用量の65%を占める。年間電気代 4,500万円。市場連動プラン継続で2023年1月は月680万円の請求（前年同月+250万円）を経験。",
    after:
      "After: 固定3年プランへ切替／温泉熱の予熱再利用（廃熱回収器導入）／全館LED化（投資 320万円、SII補助1/2活用）／寒冷地仕様ヒートポンプエアコンへの更新／融雪設備のスマート制御導入。",
    result:
      "Result: 年間電気代 4,500万円 → 3,690万円（▲18%、▲810万円）／契約kW 280→250／投資回収 1.8年（補助金後 0.9年）。",
  },
];

const costFactors = [
  {
    label: "豪雪地帯の融雪・除雪電力",
    detail:
      "横手・湯沢など内陸部の豪雪地帯では、ロードヒーティング・屋根融雪・配管凍結防止ヒーターの電力消費が他県より大きい。年間50〜300万円規模の電気代要因となる事業所多数。",
  },
  {
    label: "寒冷地暖房需要",
    detail:
      "秋田・横手の暖房度日3,300〜3,800で本州有数の寒冷地。冬季月別電気代が他季の2倍以上になる事業所が多数。年間電気代に占める暖房分は県内事業所平均で20〜35%。",
  },
  {
    label: "風力出力制御リスク",
    detail:
      "東北電力エリアの再エネ出力制御は2022年以降散発的に発生。秋田県は風力発電全国1位で出力制御の影響を受けやすい。PPA契約では出力制御リスクを需要家負担とするか発電事業者負担とするかが交渉論点。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1,000万kWh使用の中規模製紙工場で年4,000万円規模の負担、5年で20億円超。減免制度の対象になりやすい紙・パルプ・木材加工は申請を要検討。",
  },
  {
    label: "燃料費調整額の感応度",
    detail:
      "東北電力エリアの火力依存度が比較的高く、2022〜2023年は月最大+7円/kWh水準。2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。秋田県は風力導入で長期的には燃料費調整額の影響緩和が期待される。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・乾燥機",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "製紙・木材加工・食品加工など秋田県主力業種で採択率が高い主力補助金。コージェネ・コンプレッサー更新で大規模採択事例多数。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "屋根面積の大きい工場・倉庫と相性が良い。秋田県は風況が良いため、洋上・陸上風力PPAとの組合せ可能性も検討対象。",
  },
  {
    name: "秋田県再エネ・省エネ補助",
    target: "県内事業者の省エネ・再エネ設備導入",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "秋田県産業労働部所管。風力先進県として再エネ関連補助に手厚い。",
  },
  {
    name: "秋田市・大館市・横手市の省エネ補助",
    target: "市内中小事業者の高効率設備導入",
    rate: "1/3、上限100万〜300万円",
    note: "市町村単位の補助金。大館市は木材加工業向け、湯沢市は地熱関連の特化メニューあり。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "脱炭素モデル地域指定によるトータル支援",
    rate: "1/2、上限数十億円",
    note: "秋田県内では秋田市・男鹿市等が脱炭素先行地域選定。地域内事業者は大型補助の対象。",
  },
];

const industryProfile = [
  {
    label: "製紙・パルプ業（秋田・能代・大館）",
    detail:
      "日本製紙秋田工場・北越コーポレーション能代工場等の集積。パルプ・抄紙ラインの24時間稼働。年間使用量5,000万〜2億kWh規模。黒液（製紙廃液）バイオマス発電の自家消費比率が高い。",
  },
  {
    label: "木材加工・集成材業（大館・能代・湯沢）",
    detail:
      "秋田杉・能代杉の木材加工。製材機・乾燥機・チップ製造設備が中心。年間使用量100〜1,000万kWh規模。木質バイオマス自家発電・廃材活用との組合せ事例多数。",
  },
  {
    label: "風力・再エネ発電事業（県全域）",
    detail:
      "陸上風力60万kW（全国1位）、洋上風力プロジェクト多数。再エネ事業者・PPA仲介事業者の集積地でもあり、関連サービス産業も発展。",
  },
  {
    label: "農業・食品加工（県全域）",
    detail:
      "あきたこまち（米）・きりたんぽ・いぶりがっこ等の食品加工。冷蔵・冷凍・乾燥設備が中心。中規模工場で年間50〜500万kWh規模。",
  },
  {
    label: "観光業・温泉旅館（乳頭・玉川・男鹿・角館）",
    detail:
      "乳頭温泉郷・玉川温泉・男鹿温泉郷・角館・田沢湖などの観光地。冬季暖房・温泉加熱・融雪設備で電力需要が突出。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で秋田県内法人の新電力シェアは15〜20%（経産省統計）と全国平均よりやや低め。秋田・大館・横手等の都市圏では切替が進む一方、地方部では東北電力EP継続が多数。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動プランから固定プランへ回帰。冬季ピーク時のスポット価格高騰を経験した事業者は市場連動を敬遠する傾向が強い。",
  },
  {
    label: "風力PPA案件の活発化",
    detail:
      "秋田県は陸上風力1位・洋上風力先進地域。PPA契約で20年程度の長期固定単価でCO2フリー電力を調達できる選択肢が増えている。製造業・物流・大学・自治体の関心が高い。",
  },
  {
    label: "東北電力EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・東北6県＋新潟の広域供給ネットワーク・地域貢献。デメリット: 単価が新電力比1〜2円/kWh高め。秋田・大館都市圏では新電力との単価差が拡大。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東北電力エリア供給実績、②冬季需要急増時のバランシングコスト対応、③固定単価期間（3〜5年）、④燃料費調整額の有無・上限、⑤風力PPA組合せの5点が秋田県では特に重要。",
  },
];

const energySaving = [
  {
    label: "コージェネ・木質バイオマス発電",
    detail:
      "製紙・木材加工では黒液・木質チップを燃料としたバイオマス発電・コージェネが標準。電力購入▲30〜50%、CO₂排出も大幅削減。投資回収 SII・GX補助・林野庁補助の組合せで 3〜6年。",
  },
  {
    label: "暖房ヒートポンプ転換",
    detail:
      "電気パネルヒーター・電気温風機からヒートポンプエアコン（寒冷地仕様）への転換で暖房電力▲30〜50%。",
  },
  {
    label: "融雪設備のスマート制御",
    detail:
      "ロードヒーティング・屋根融雪の運転制御を外気温・降雪量センサー連動に。電力▲30〜60%。投資回収 1〜2年。",
  },
  {
    label: "風力PPA・自家消費太陽光",
    detail:
      "秋田県は風況が良く、陸上風力PPAでCO2フリー電力を15〜18円/kWhで調達可能。屋根面積3,000m²以上の事業所では太陽光1MW級導入も現実的。",
  },
  {
    label: "地熱熱利用（湯沢・男鹿エリア）",
    detail:
      "湯沢市・男鹿市などの地熱地帯では、地熱熱を給湯・暖房に再利用することで熱需要▲30〜50%。地熱発電とのコジェネレーション可能性もあり。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "冬季ピーク月（1〜2月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東北電力の2023年4月改定後の単価で再見積を取得したか",
  "東北電力エリア新電力5〜10社からの相見積を取得したか",
  "風力PPA（陸上・洋上）案件の見積を取得したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "木質バイオマス発電・コージェネ導入の試算を実施したか",
  "融雪・凍結防止ヒーターの運転時間を最適化したか",
  "SII省エネ補助金・秋田県補助・市町村補助・林野庁補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "風力出力制御リスクをPPA契約に織り込んでいるか",
];

const faqItems = [
  { question: "秋田県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の実質単価で全国平均より1〜2円/kWh高い水準ですが、風力PPA活用で1〜3円/kWh安く調達できるケースもあり、業種・規模次第で全国平均並みまで下げられる可能性があります。" },
  { question: "風力PPAは秋田県でどう活用できますか？", answer: "秋田県は陸上風力60万kW（全国1位）、洋上風力プロジェクトでも全国先進地。PPA契約で20年程度の長期固定単価（15〜18円/kWh水準）でCO2フリー電力を調達できます。出力制御リスクの分担を契約で明確化することが重要です。" },
  { question: "製紙工場の電気代削減で効果的な施策は？", answer: "①コージェネ（蒸気・電力同時生産）更新、②黒液バイオマス発電の自家消費率向上、③洋上風力PPA活用、④デマンドコントローラー＋BEMS導入の4点パッケージが主力。投資回収はGX補助・SII補助・林野庁補助の組合せで3〜7年が目安です。" },
  { question: "木材加工業の電気代削減で効果的な施策は？", answer: "①製材機・乾燃機のインバータ化、②廃材（おがくず・端材）の木質チップボイラー導入、③高圧固定プラン採用、④LED化の4点パッケージで年18〜20%の削減事例多数。SII補助1/2＋林野庁補助1/2活用で投資回収1〜4年が目安です。" },
  { question: "豪雪地帯の融雪電力を抑える方法は？", answer: "ロードヒーティング・屋根融雪の運転制御を外気温・降雪量センサー連動に変更することで電力▲30〜60%、年間50〜300万円の削減が可能。投資はセンサー・制御盤で50〜150万円規模、回収1〜2年が目安です。" },
  { question: "秋田県で固定プランと市場連動プランのどちらが向きますか？", answer: "豪雪・寒冷地・24時間稼働事業所が多い秋田県では、固定プランが圧倒的に向きます。2022〜2023年の市場高騰で県内事業者の多くが固定プランへ回帰しました。" },
  { question: "風力出力制御は事業者にどう影響しますか？", answer: "風力PPA契約事業者は、出力制御発生時の電力供給停止リスクを織り込む必要があります。需要家負担とするか発電事業者負担とするかで契約単価が1〜2円/kWh変動。需要家負担の場合は、代替電源（系統電力）への切替契約も含めて設計することが重要です。" },
  { question: "秋田県で活用できる省エネ補助金は？", answer: "SII省エネ補助金、需要家主導型PPA補助金、秋田県再エネ・省エネ補助、秋田市・大館市・横手市の市町村補助、林野庁の木質バイオマス補助、脱炭素先行地域（秋田市・男鹿市等）の特別支援が組合せ可能です。風力先進県として再エネ関連補助に手厚いのが特徴です。" },
];

const sourcesItems = [
  { name: "東北電力公式サイト", url: "https://www.tohoku-epco.co.jp/" },
  { name: "経済産業省 東北経済産業局", url: "https://www.tohoku.meti.go.jp/" },
  { name: "秋田県産業労働部・農林水産部", url: "https://www.pref.akita.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function AkitaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/akita-business-electricity-cost"
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
          <span className="text-slate-800">秋田県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            秋田県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            秋田県は東北電力エリア、風力発電全国1位、豪雪地帯、製紙・木材加工集積という4つの構造的特徴を持ちます。本ページでは県内法人の電気代水準、製紙・木材加工・温泉旅館の業種別影響、風力PPA活用、豪雪地帯固有のコスト構造、補助金活用、契約見直しを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-19" updatedAt="2026-05-19" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東北電力エリア（秋田県）の電源構成・基本料金構造</li>
              <li>県内法人の電気代水準と風力PPA調達単価</li>
              <li>製紙・木材加工・温泉旅館の3業種でBefore/After削減事例</li>
              <li>豪雪・風力出力制御・寒冷地暖房など県固有のコスト要因</li>
              <li>SII・秋田県補助・林野庁補助の組合せ活用パターン</li>
              <li>秋田県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">秋田県の電力事情と特徴</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県は『東北電力エリア・風力発電全国1位』『豪雪・寒冷地需要』『製紙・木材加工集積』『再エネ出力制御の最前線』という4つの構造的特徴を持ちます。
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
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東北電力エリア事情</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">秋田県内の主要電力会社・新電力一覧</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県では2024年時点で約10社の新電力が法人向け高圧で新規受付中。風力PPA特化型新電力が県固有の特徴です。
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
            <h2 className="text-xl font-semibold text-slate-900">秋田県の電気料金水準と全国比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東北電力の単価は全国エリア比で1〜2円/kWh高めですが、風力PPA活用で1〜3円/kWh安く調達できるケースもあり、業種・規模次第で全国平均並みまで下げられる可能性があります。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別影響度3件 — 製紙・木材加工・温泉旅館（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。
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
            <h2 className="text-xl font-semibold text-slate-900">秋田県固有の電気代上昇要因</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県の電気代上昇は、豪雪・寒冷地・風力出力制御・賦課金など複数の県固有要因が同時進行で重なります。
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
            <h2 className="text-xl font-semibold text-slate-900">秋田県の補助金・優遇制度</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県では国補助（SII等）に加え、県独自補助、市町村補助、林野庁補助、脱炭素先行地域指定による特別支援が組合せ可能です。風力先進県として再エネ関連補助に手厚いのが特徴です。
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
            <h2 className="text-xl font-semibold text-slate-900">秋田県の主要産業と電力消費プロファイル</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県の事業者構成は、製紙・パルプ、木材加工、風力・再エネ発電事業、農業・食品加工、観光業の5層構造です。
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
            <h2 className="text-xl font-semibold text-slate-900">電力会社切替の実情 — 東北電力と新電力の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県の新電力シェアは2024年時点で15〜20%程度。風力PPA案件の活発化が県固有の特徴です。
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
            <h2 className="text-xl font-semibold text-slate-900">県内事業者の節電・省エネ施策事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県の省エネは『コージェネ・木質バイオマス発電』『暖房ヒートポンプ転換』『融雪スマート制御』『風力PPA活用』『地熱熱利用』の5軸が主力です。
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
            <h2 className="text-xl font-semibold text-slate-900">秋田県向け契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで秋田県の電気代上振れリスクを確認する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              秋田県は豪雪・寒冷地暖房・製紙木材集積の3重要因を抱えます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資・風力PPA活用のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>風力PPA契約の年間コスト差を把握する</li>
              <li>事例で示した18〜21%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="akita-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tohoku-business-electricity", title: "東北電力エリアの法人電気代事情", description: "東北6県＋新潟県の料金体系・改定動向の詳細。" },
              { href: "/aomori-business-electricity-cost", title: "青森県の法人電気料金", description: "風力発電全国2位の隣接県事情。" },
              { href: "/iwate-business-electricity-cost", title: "岩手県の法人電気料金", description: "東北電力エリアの隣接県事情。" },
              { href: "/miyagi-business-electricity-cost", title: "宮城県の法人電気料金", description: "東北6県の中核、宮城の電気代事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "寒冷地・24時間稼働法人の選択肢。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/pulp-paper-electricity-cost-review", title: "紙パルプ業の電気料金見直し", description: "秋田県主力業種に直結。" },
              { href: "/corporate-ppa-types", title: "コーポレートPPAの類型", description: "風力PPA活用パターン整理。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "温泉旅館の暖房・温泉加熱コスト構造。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "寒冷地仕様パネル選定のポイント。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・コンプレッサー更新の主力補助金。" },
              { href: "/solar-curtailment-by-area", title: "太陽光出力制御の実態", description: "東北電力エリアの出力制御動向。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東北電力の火力依存度を踏まえた解説。" },
              { href: "/region-supplier-withdrawal-map", title: "エリア別新電力撤退状況マップ", description: "県内新電力の動向を含む全国マップ。" },
              { href: "/24h-operation-price-surge-risk", title: "24時間稼働企業の料金高騰リスク", description: "製紙工場の連続稼働事業者向け。" },
            ]}
          />

          <ContentCta
            heading="秋田県の自社条件で電気代リスクを試算する"
            description="豪雪対策・寒冷地暖房・製紙木材・風力PPAなど秋田県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="秋田県の電力契約見直し、専門家に相談しませんか？"
            description="豪雪・寒冷地・製紙・木材加工・風力PPAの電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
