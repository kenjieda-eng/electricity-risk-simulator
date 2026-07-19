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
  "滋賀県の法人電気料金完全ガイド｜内陸工業（米原栗東）・琵琶湖周辺観光・電機機械の契約最適化";
const pageDescription =
  "滋賀県の法人電気料金を地域特化で解説。関西電力エリアの内陸工業（米原・栗東・東近江）、琵琶湖周辺の観光業、電機・機械・自動車部品の電力負荷プロファイル、特別高圧契約、補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "滋賀県 法人電気料金",
    "関西電力 高圧 内陸工業",
    "米原 栗東 工場 電気代",
    "琵琶湖 観光 電力",
    "東近江 製造業 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shiga-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shiga-business-electricity-cost",
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
    label: "関西電力エリアと滋賀県の位置付け",
    detail:
      "滋賀県は関西電力のエリア。湖南（大津・草津・栗東・守山）、湖東（彦根・東近江・近江八幡・米原）、湖北（長浜・米原北部）、湖西（高島）の4地域から構成。県内総電力需要は約90億kWhで関電管内の約8%を占める。京阪神への通勤圏内で内陸工業集積地。",
  },
  {
    label: "電源構成 — 関電原発依存と県内水力",
    detail:
      "関西電力管内は原発依存度が国内最高（高浜・大飯・美浜の再稼働で約30%）。LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には関電・電源開発の水力発電所が多数（琵琶湖周辺・愛知川水系）。原発再稼働により燃料費調整額は他エリアより低水準で推移。",
  },
  {
    label: "気象条件 — 内陸盆地と湖国温暖",
    detail:
      "県内は琵琶湖の影響で夏季は若干涼しいが、内陸盆地のため気温差は大きい。冬季は湖北地方（彦根・長浜）で積雪あり。年間冷房度日（CDD24）1,300〜1,500、暖房度日2,200〜2,800（湖北地方で大）。",
  },
  {
    label: "需給ひっ迫 — 関電エリアの最大需要",
    detail:
      "関西電力管内の需給ひっ迫局面では、東近江・栗東の自動車部品・電機工場へのDR要請が発動。関電エリアは原発再稼働により他エリアより需給に余裕があるが、夏季・冬季ピーク時はDR対応が求められる。",
  },
  {
    label: "湖南・湖東内陸工業地帯と多業種集積",
    detail:
      "湖南（大津・草津・栗東）はパナソニック・東洋紡・京セラの大規模工場、湖東（彦根・東近江）はブリヂストン・ヤンマー・ダイハツ工業の自動車・機械工業集積地。琵琶湖周辺は観光業（彦根城・近江八幡・大津）が活発。年間使用量1,000万〜5,000万kWh規模の中規模事業者が多い。",
  },
];

const utilitiesList = [
  {
    name: "関西電力（送配電）",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『高圧電力AB』『特高季節別時間帯別電力』など。2023年6月の規制料金改定で家庭向け値上げを実施したが、原発再稼働進展で他エリアより値上げ幅は抑制された。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "湖東・湖南の大規模事業者で高圧契約実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "大阪ガスエナジー・サミットエナジー・関電エネルギーソリューション",
    role: "ガス・関電グループ系新電力",
    detail:
      "大阪ガスエナジーは関西エリアでガス・電気のセット契約に強み。関電エネルギーソリューションは関電グループとして大規模法人需要を対応。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向けに固定単価で大口契約を提供。県内法人需要にも対応。",
  },
  {
    name: "地域密着型新電力",
    role: "地域密着型",
    detail:
      "大津市・草津市・彦根市等の自治体施設、中小事業者向けに地産地消型の供給を展開。地域経済循環の観点で選択肢。",
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
      "関西電力『高圧電力AB』の電力量料金は17〜21円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+1.5〜+3.0円/kWh、原発再稼働により低水準）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は23〜27円/kWhレンジ。全国平均より1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。東近江・栗東の自動車部品・電機工場などが対象。全国平均比2〜3円/kWh安い水準で、新電力競争入札による更なる価格圧力が大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "関西電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は原発再稼働（高浜・大飯・美浜）により電力単価が他エリアより構造的に低い。法人需要では年間1〜3億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。新電力経由でさらに優遇可能性がある。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・電機工場（東近江市、特別高圧 4,000kW、年間 3,100万kWh）",
    before:
      "Before: 東近江市の電機メーカーA社（産業用機械・電子部品製造）。年間電気代 7.7億円。工作機械・コンプレッサー・空調が消費電力の60%。市場連動プラン継続で2023年夏には月最大1.1億円の電気代経験。デマンド管理は手動運用。",
    after:
      "After: 特別高圧の固定5年契約（関電継続より0.8円/kWh安／原発再稼働メリット込み）／工作機械をインバータ式に更新／コンプレッサー高効率化／LED全工場化（SII補助1/3活用、投資1.6億円）／屋根面積1.5万m²に自家消費太陽光1.5MW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光2MW契約。",
    result:
      "Result: 年間電気代 7.7億円 → 6.2億円（▲20%、▲1.5億円）／契約kW 4,000→3,550／投資回収 補助金後 2.8年／RE100進捗 60%達成。",
  },
  {
    title: "業種2: 観光業・大型ホテル（大津市、高圧 700kW、年間 550万kWh）",
    before:
      "Before: 大津市の琵琶湖畔リゾートホテルB社（客室200室、スパ・プール・宴会場完備）。年間電気代 1.6億円。冷暖房・温泉ポンプ・スパ加温・厨房・宴会場照明が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+3,000万円の上昇。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調をインバータ式に全面更新・人感センサ連動／LED全館化／温泉ポンプ・スパ加温の高効率化（観光庁・環境省補助活用、投資3,500万円）／屋根太陽光200kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.6億円 → 1.28億円（▲20%、▲3,200万円）／契約kW 700→610／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種3: 流通業・大型物流センター（栗東市、特別高圧 2,500kW、年間 2,000万kWh）",
    before:
      "Before: 栗東市の大規模物流センターC社（名神高速隣接、24時間稼働、3階建て1棟）。年間電気代 5.0億円。冷蔵倉庫・荷役機械・空調・LED照明が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+1.0億円の上昇。",
    after:
      "After: 特別高圧の固定5年契約（物流系新電力との競争入札）／冷蔵庫CO2冷媒インバータ式更新／荷役機械（フォークリフト含む）電動化・蓄電池併用／LED・空調更新（SII補助1/3活用、投資2.0億円）／屋根太陽光1MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 5.0億円 → 4.0億円（▲20%、▲1.0億円）／契約kW 2,500→2,250／投資回収 補助金後 2.8年。",
  },
];

const costFactors = [
  {
    label: "湖南・湖東内陸工業地帯の中規模需要",
    detail:
      "東近江・栗東・草津の中規模事業者は年間使用量1,000万〜5,000万kWh級。電力単価1円/kWhの変動でも年間1,000万円規模のコスト変動。契約見直しと省エネ投資の優先度が高い。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は高浜・大飯・美浜の原発再稼働により電力単価が他エリアより構造的に低い。法人需要では年間1〜3億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "パナソニック・京セラ・ブリヂストン等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "観光業の季節変動と琵琶湖周辺特性",
    detail:
      "琵琶湖周辺の観光業は春（桜）・夏（湖水浴）・秋（紅葉）・冬（雪見・忘新年会）に電力需要急増。インバウンド回復で需要増加傾向。冬季の湖北地方は積雪対応で暖房負荷大。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間1,000万kWh使用の中規模事業者で年4,000万円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では湖南・湖東の自動車部品・電機工場で大型採択実績多数。物流センターの冷蔵庫CO2冷媒化・荷役機械電動化で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "湖東・湖南の中規模工場で屋根・空地活用の太陽光導入が有効。オフサイトPPAも合わせて活用可能。",
  },
  {
    name: "滋賀県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "滋賀県独自補助。製造業・観光業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "大津市・草津市・栗東市・彦根市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "大津市『大津市スマートシティ事業』、草津市『草津市カーボンニュートラル支援』など。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・宿泊施設向け省エネ補助",
    target: "琵琶湖周辺の旅館・ホテル・スパ施設の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・環境省連携の宿泊施設省エネ補助。空調・厨房・温泉ポンプ更新等が対象。",
  },
];

const industryProfile = [
  {
    label: "電機・電子部品（湖南・湖東）",
    detail:
      "パナソニック（草津・湖南）、京セラ（東近江）、村田製作所、NEC関連等の電機・電子部品工場。年間使用量1,000万〜5,000万kWh規模。",
  },
  {
    label: "自動車・機械（彦根・東近江・湖東）",
    detail:
      "ブリヂストン（彦根）、ダイハツ工業滋賀工場、ヤンマー（長浜・米原）、コマツリフト等の自動車・機械工場。年間使用量1,000万〜3,000万kWh規模。",
  },
  {
    label: "繊維・化学・素材（東近江・湖南）",
    detail:
      "東洋紡（湖南）、東レ関連、長浜キヤノン等の繊維・素材工場。年間使用量500万〜2,000万kWh規模。",
  },
  {
    label: "観光業（琵琶湖周辺・彦根・大津）",
    detail:
      "琵琶湖畔のリゾートホテル、彦根城周辺、大津港・浜大津、近江八幡水郷、長浜黒壁スクエア等の観光業。年間使用量50〜500万kWh規模。",
  },
  {
    label: "物流（栗東・名神沿線）",
    detail:
      "名神高速・新名神高速沿線の大型物流センター（栗東・草津・八幡）。年間使用量500万〜3,000万kWh規模。京阪神物流の中継拠点。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは22%前後（経産省統計）。関電エリアの単価が比較的安いため新電力切替の経済メリットがやや小さい。それでも湖東・湖南の中規模事業者は競争入札による切替が拡大中。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。電機・自動車部品・物流の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "関電継続のメリット・デメリット",
    detail:
      "メリット: 単価が他エリア比で安い（原発再稼働メリット）、安定供給・地域貢献、大規模災害時の復旧体制。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①関電エリア供給実績の有無、②原発再稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "パナソニック・京セラ・ブリヂストンの大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。初期投資ゼロで再エネ調達可能。",
  },
];

const energySaving = [
  {
    label: "電機・機械工場の高効率化",
    detail:
      "工作機械のインバータ化、コンプレッサーのインバータ化、ボイラーのヒートポンプ転換などで電力▲20〜35%。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "物流センターの冷蔵庫・荷役機械最適化",
    detail:
      "冷蔵庫CO2冷媒インバータ式更新、荷役機械（フォークリフト含む）電動化、屋根太陽光＋蓄電池導入で電力▲25〜35%。SII補助活用で投資回収 2〜3.5年。",
  },
  {
    label: "観光業（湖畔ホテル）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、温泉ポンプ・スパ加温の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "パナソニック・京セラの大企業を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。RE100・SBT対応とCO2削減・電気代削減を両立。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・観光施設・物流センターでBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。蓄電池併設でDR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・滋賀県補助・市町村補助・観光庁補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "湖北地方（彦根・長浜）の積雪期BCPと電力供給安定性を確認したか",
];

const faqItems = [
  { question: "滋賀県の法人電気代水準は全国比どれくらいですか？", answer: "関西電力は原発再稼働により電力単価が他エリアより構造的に1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。特別高圧契約の競争入札では1〜2円/kWh単位の単価交渉が一般化しています。湖南・湖東の中規模事業者は新電力切替のメリットが大きいエリアです。" },
  { question: "関電原発再稼働は電気代にどう影響しますか？", answer: "高浜・大飯・美浜の原発再稼働により、関電管内の燃料費調整額は他エリアより低水準で推移しています。2024〜2025年は+1.5〜+3.0円/kWhレンジで、中部・東京エリア（+2.5〜+4.5円/kWh）より約1〜1.5円/kWh安い水準。年間1,000万kWh使用の事業者で年1,500万円規模のメリットです。" },
  { question: "RE100対応のためのオフサイトPPAは滋賀県で活用できますか？", answer: "はい、パナソニック・京セラ・ブリヂストン等を中心にオフサイトPPA契約が急速に拡大しています。九州・東北の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。原発再稼働メリットと組み合わせるとさらに有利です。" },
  { question: "琵琶湖周辺の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③温泉ポンプ・スパ加温の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "滋賀県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、滋賀県脱炭素・省エネ設備導入補助、大津市・草津市・栗東市・彦根市の脱炭素補助、観光庁・環境省の宿泊施設省エネ補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "栗東・名神沿線の大型物流センターの電気代対策は？", answer: "①冷蔵庫CO2冷媒インバータ式更新、②荷役機械（フォークリフト含む）電動化・蓄電池併用、③LED・空調更新、④特別高圧の競争入札による単価最適化、⑤屋根太陽光＋蓄電池導入、の5本柱が中心。SII補助活用で投資回収は2〜3.5年が目安です。" },
  { question: "関電と新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（関西電力送配電）が担うため、関電契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
  { question: "湖北地方（彦根・長浜）の積雪期は電力契約にどう影響しますか？", answer: "湖北地方は冬季の積雪・低温で暖房負荷が大きく、契約電力（kW）の見直し時にピーク月（1〜2月）の使用量を必ず確認してください。融雪電力契約・寒冷地用空調プランの活用、屋根太陽光＋蓄電池の組合せでBCP対応と省エネを両立できます。" },
];

const sourcesItems = [
  { name: "関西電力 公式サイト", url: "https://kepco.jp/" },
  { name: "滋賀県琵琶湖環境部", url: "https://www.pref.shiga.lg.jp/" },
  { name: "経済産業省 近畿経済産業局", url: "https://www.kansai.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function ShigaBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shiga-business-electricity-cost"
        datePublished="2026-05-22"
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
          <span className="text-slate-800">滋賀県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            滋賀県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            滋賀県は関西電力エリアで、湖南・湖東の内陸工業集積地（パナソニック・京セラ・ブリヂストン・ヤンマー等）、琵琶湖周辺の観光業、栗東・名神沿線の大型物流センターと多様な産業構造を持ちます。関電原発再稼働により電力単価が他エリアより構造的に安いのが特徴。本ページでは県内法人の電気代水準、業種別影響度、内陸工業・観光業特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-22" updatedAt="2026-05-22" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>関西電力エリアにおける滋賀県の電気代水準と全国比較（原発再稼働メリット）</li>
              <li>東近江電機工場・大津湖畔ホテル・栗東物流センターのBefore/After削減事例</li>
              <li>関電原発再稼働メリットを活かした特別高圧競争入札の実務</li>
              <li>SII・滋賀県・大津市草津市栗東市・観光庁補助の組合せ活用パターン</li>
              <li>滋賀県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              滋賀県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県は関西電力エリアで、湖南・湖東・湖北・湖西の4地域から構成されます。関電原発再稼働メリットにより電力単価が他エリアより構造的に低水準、湖南・湖東内陸工業地帯の中規模需要、琵琶湖周辺の観光業の季節変動が県内電力消費の特徴を形成します。
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
              関西電力エリアの全体像は{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                関西電力エリア事情
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
              滋賀県では2024年時点で12社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・関電グループ系、地域密着型の3カテゴリが主軸となります。
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
              滋賀県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関西電力エリアは原発再稼働により単価が全国平均より1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 電機工場・湖畔ホテル・物流センター（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、観光業向けは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・旅館の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              滋賀県固有の電気代上昇要因 — 内陸工業・観光季節変動・湖北豪雪
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県の電気代上昇は、湖南・湖東内陸工業地帯の中規模需要、関電原発再稼働メリット（プラス要因）、観光業の季節変動、湖北地方の積雪期暖房負荷など多面的特性が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              滋賀県の補助金・優遇制度 — SII・県独自・市町村・観光庁
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県では国補助（SII等）に加え、県独自補助、大津市・草津市・栗東市・彦根市の脱炭素補助、観光庁・環境省の宿泊施設省エネ補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              滋賀県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県の事業者構成は、電機・電子部品、自動車・機械、繊維・化学・素材、観光業、物流の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 関電と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県の新電力シェアは2024年時点で22%前後。関電エリアの単価が比較的安いため新電力切替の経済メリットがやや小さいですが、湖東・湖南の中規模事業者は競争入札による切替が拡大中。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              滋賀県の省エネは『電機・機械工場の高効率化』『物流センターの冷蔵庫・荷役機械最適化』『観光業（湖畔ホテル）の省エネ』『需要家主導型オフサイトPPA』『BEMS・需要見える化・蓄電池』の5軸が主力。
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
              滋賀県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで滋賀県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              滋賀県は関電原発再稼働メリットを享受できる一方、湖北豪雪地帯のBCP対応も必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              publishedAt="2026-05-22"
            />
            <GlossaryLinks currentSlug="shiga-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西電力管内の料金体系・改定動向の詳細。" },
              { href: "/kyoto-business-electricity-cost", title: "京都府の法人電気料金", description: "隣接府・観光業大国の京都府の事情。" },
              { href: "/osaka-business-electricity-cost", title: "大阪府の法人電気料金", description: "隣接府・関西物流ハブの大阪府の事情。" },
              { href: "/mie-business-electricity-cost", title: "三重県の法人電気料金", description: "隣接県・中部電力エリアの三重県の事情。" },
              { href: "/fukui-business-electricity-cost", title: "福井県の法人電気料金", description: "隣接県・嶺南原発立地の福井県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・物流センターの選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "電機・物流が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "湖南・湖東内陸工業と全国比較。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "栗東・名神沿線物流センター向け。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "琵琶湖周辺観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コンプレッサー・空調・冷凍設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "関電エリアでも影響あり・原発再稼働で抑制。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="滋賀県の自社条件で電気代リスクを試算する"
            description="湖南・湖東内陸工業・琵琶湖観光業・栗東物流など滋賀県固有の条件と関電原発再稼働メリットを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。"
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
            heading="滋賀県の電力契約見直し、専門家に相談しませんか？"
            description="湖南・湖東内陸工業・琵琶湖観光業・栗東物流の電気代見直しは業種により論点が異なります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
