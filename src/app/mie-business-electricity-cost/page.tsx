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
  "三重県の法人電気料金完全ガイド｜四日市石油化学コンビナート・亀山半導体・伊勢志摩観光の契約最適化";
const pageDescription =
  "三重県の法人電気料金を地域特化で解説。中部電力エリアの四日市石油化学コンビナート、亀山の半導体・自動車関連工業、伊勢志摩・鈴鹿サーキット観光業、紀州林業の電力負荷プロファイル、特別高圧契約、補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "三重県 法人電気料金",
    "中部電力 高圧 四日市コンビナート",
    "亀山 半導体 電気代",
    "伊勢志摩 観光 電力",
    "鈴鹿 自動車 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/mie-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/mie-business-electricity-cost",
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
    label: "中部電力エリアと三重県の位置付け",
    detail:
      "三重県は主に中部電力ミライズのエリア（南部の熊野市・御浜町・紀宝町等の一部は関西電力エリア）。北勢（四日市・桑名・鈴鹿・亀山）、中勢（津・松阪）、南勢（伊勢・志摩・尾鷲・熊野）の3地域から構成。県内総電力需要は約110億kWhで中部電力管内の約11%を占める。",
  },
  {
    label: "電源構成 — 四日市火力とLNG火力中心",
    detail:
      "県内には中部電力の四日市火力（LNG・石油）・川越火力（LNG）等が立地し、中部エリアの主力電源拠点。LNG火力中心で原発比率はゼロ（中部電力管内は浜岡停止のため）。北勢地域は重化学工業集積で電力需要密度が高い。",
  },
  {
    label: "気象条件 — 太平洋側温暖と紀伊半島山地気候",
    detail:
      "北勢・中勢の平野部は太平洋側温暖気候で、夏季高温・冬季温暖。南勢・東紀州は黒潮の影響で温暖湿潤、台風被害リスク高い。年間冷房度日（CDD24）1,400〜1,800、暖房度日1,800〜2,200。",
  },
  {
    label: "需給ひっ迫 — 中部エリアの最大需要",
    detail:
      "中部電力管内の需給ひっ迫局面では、四日市石油化学コンビナート、亀山半導体・液晶工場、鈴鹿自動車工場へのDR要請が発動。石油化学・半導体は24時間連続運転でDR対応が困難な業種、契約設計に工夫が必要。",
  },
  {
    label: "四日市コンビナートと多業種集積",
    detail:
      "四日市市の臨海部は日本三大石油化学コンビナートの一つ。コスモ石油・三菱化学・日本触媒・JX日鉱日石エネルギー等が集積。年間使用量1〜30億kWh級の超大型事業者多数。亀山はシャープ亀山工場（液晶）跡地に半導体工場、鈴鹿はホンダ鈴鹿製作所、伊勢志摩は観光業の集積地。",
  },
];

const utilitiesList = [
  {
    name: "中部電力ミライズ",
    role: "一般小売事業者（県北中部）",
    detail:
      "県内シェア最大（県北中部）。高圧・特別高圧の標準メニューは『高圧電力Aｓ』『高圧電力Bs』『特高季節別時間帯別電力』など。2023年改定で家庭向け・低圧で約12〜18%値上げ。法人向けも同等の改定を実施し燃料費調整額上限が撤廃された。",
  },
  {
    name: "関西電力（県南部一部）",
    role: "一般小売事業者（熊野等南部一部）",
    detail:
      "熊野市・御浜町・紀宝町等の南部一部は関西電力エリア。関西電力の標準メニュー（高圧AB・特高季節別時間帯別電力等）が適用。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "四日市コンビナート・鈴鹿自動車工場の特別高圧契約で実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "サミットエナジー・シナネン・コスモ石油マーケティング",
    role: "ガス・燃料系新電力",
    detail:
      "コスモ石油マーケティングは四日市コンビナートとの関係で県内法人需要を獲得。ガス・燃料商社系は中小事業者・大口工場まで幅広く対応。",
  },
  {
    name: "地域密着型新電力",
    role: "地域密着型",
    detail:
      "津市・四日市市・伊勢市等の自治体施設、中小事業者向けに地産地消型の供給を展開。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は10社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "中部電力ミライズ『高圧電力Aｓ』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+2.5〜+4.0円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜29円/kWhレンジ。全国平均と同水準で、四日市コンビナート・鈴鹿の大規模事業者は新電力競争で1〜2.5円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。四日市石油化学・亀山半導体・鈴鹿自動車などが対象。全国平均比1〜2円/kWh安い水準で、新電力競争入札による価格圧力が大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "中部電力ミライズ『低圧電力』は10〜13円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は17〜20円/kWh。",
  },
  {
    label: "大規模特別高圧需要家の特別契約",
    detail:
      "年間使用量1億kWh超の超大型事業者向けには、相対契約による割引が一般化。四日市コンビナートの大型化学プラントは年間10〜30億kWh級の電力消費が多数、特別契約交渉余地が大きい業種。新電力経由でさらに優遇可能性がある。",
  },
];

const industryImpact = [
  {
    title: "業種1: 石油化学プラント（四日市市、特別高圧 25,000kW、年間 2.0億kWh)",
    before:
      "Before: 四日市コンビナート内の石油化学プラントA社（エチレン・ポリエチレン・芳香族製造）。24時間連続運転、年間電気代 52億円。蒸気タービン駆動コンプレッサー・電動圧縮機が消費電力の70%。市場連動プラン継続で2023年夏には月最大7.5億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（中部エリア専門新電力との競争入札で獲得、中部電力ミライズ継続より1.5円/kWh安）／電動圧縮機をインバータ・高効率化／コージェネレーション設備の更新・拡張（SII補助1/3活用、投資8.5億円）／需要家主導型PPAでオフサイト風力・太陽光合計30MW契約／敷地内太陽光5MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 52億円 → 41.6億円（▲20%、▲10.4億円）／契約kW 25,000→22,500／投資回収 補助金後 3.5年／RE100進捗 45%達成。",
  },
  {
    title: "業種2: 製造業・半導体工場（亀山市、特別高圧 6,500kW、年間 5,200万kWh)",
    before:
      "Before: 亀山市の半導体工場B社（旧シャープ亀山工場後継、メモリ・センサ製造）。24時間連続運転、クリーンルーム空調が消費電力の40%、製造設備40%。年間電気代 14.6億円。燃料費調整額上限撤廃で2023年は前年比+2.6億円の上昇。",
    after:
      "After: 特別高圧の固定3年契約を新電力との競争入札で更新（中部電力ミライズ継続より1.2円/kWh安）／クリーンルーム空調を可変風量制御＋AI最適化に／外気冷房（フリークーリング）併用／需要家主導型PPAでオフサイト太陽光・風力合計10MW契約／屋根太陽光1MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 14.6億円 → 12.4億円（▲15%、▲2.2億円）／契約kW 6,500→6,150／投資回収 補助金後 3.8年／RE100進捗 70%達成。",
  },
  {
    title: "業種3: 観光業・志摩観光ホテル（志摩市、高圧 800kW、年間 620万kWh)",
    before:
      "Before: 志摩市の大型観光ホテルC社（客室180室、リゾート施設・スパ完備、伊勢志摩サミット会場周辺）。年間電気代 1.9億円。冷暖房・スパ加温・厨房・プールが消費電力の主要要素。燃料費調整額上限撤廃で2023年は前年比+4,500万円の上昇。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調をインバータ式に全面更新・人感センサ連動／LED全館化／スパ加温・プールヒーターの高効率化（観光庁・環境省補助活用、投資4,500万円）／屋根太陽光200kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.9億円 → 1.52億円（▲20%、▲3,800万円）／契約kW 800→700／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "四日市石油化学コンビナートの超大規模需要",
    detail:
      "四日市コンビナートは日本三大石油化学集積の一つ。エチレン・ポリエチレン・芳香族製造プラントは年間使用量1〜30億kWh級。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間1〜30億円規模のコスト変動。契約見直しと省エネ投資の優先度が極めて高い。",
  },
  {
    label: "原発ゼロ依存・燃料価格直撃",
    detail:
      "中部電力は浜岡原発全機停止中で原発比率ゼロ。LNG・石炭火力依存度が約85%と高く、燃料費調整額の変動幅が大きい。2022〜2023年は月最大+7円/kWh、2024〜2025年は+2.5〜+4.0円/kWhレンジで推移。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "ホンダ・コスモ石油・三菱化学等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北・北海道の大規模太陽光・風力電源と直接契約が主流化。化学業界もカーボンニュートラル対応で需要急増。",
  },
  {
    label: "半導体・データセンター需要拡大",
    detail:
      "亀山・四日市で半導体・データセンター集積が進む。AIサーバ等高密度サーバ導入でラック当たり消費電力が10〜30kWに上昇傾向。電力契約も大幅変更が必要。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇。年間10億kWh使用の超大規模化学プラントで年40億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では四日市コンビナート・亀山半導体工場・鈴鹿自動車工場で大型採択実績多数。化学プラントのコージェネレーション・コンプレッサー更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "四日市・鈴鹿の大規模工場で屋根・空地活用の太陽光導入が有効。オフサイトPPAも合わせて活用可能。",
  },
  {
    name: "三重県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "三重県独自補助。石油化学・半導体・自動車の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "四日市市・鈴鹿市・津市の脱炭素補助",
    target: "市内中小事業者・大規模事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜5,000万円",
    note: "四日市市『四日市カーボンニュートラル産業創出事業』、鈴鹿市『鈴鹿市環境配慮型事業所支援』など。市独自の脱炭素政策と連動した手厚い支援。",
  },
  {
    name: "経産省 GX関連補助・コンビナート再編支援",
    target: "石油化学コンビナートのトランジション・水素アンモニア導入",
    rate: "事業規模に応じる、大型補助可能",
    note: "四日市コンビナートのGX投資（水素・アンモニア・蓄電池）を支援する大型補助。電力契約見直しと組合せた中期計画に活用。",
  },
];

const industryProfile = [
  {
    label: "石油化学・化学（四日市・桑名）",
    detail:
      "コスモ石油、三菱化学、日本触媒、JX日鉱日石エネルギー、東ソー、三菱ガス化学等の四日市石油化学コンビナート。年間使用量1〜30億kWh規模の超大型事業者。",
  },
  {
    label: "自動車・部品（鈴鹿）",
    detail:
      "ホンダ鈴鹿製作所、デンソー、住友電工等の自動車・部品工場。年間使用量1,000万〜10億kWh規模。",
  },
  {
    label: "半導体・電子部品（亀山・四日市）",
    detail:
      "シャープ亀山工場（液晶→キオクシア半導体）、富士フイルム、東芝メモリ関連等の半導体・電子部品工場。24時間連続運転のクリーンルームが中心。年間使用量2,000万〜2億kWh規模。",
  },
  {
    label: "観光業（伊勢志摩・鈴鹿サーキット）",
    detail:
      "伊勢神宮、志摩観光ホテル等の伊勢志摩観光、鈴鹿サーキット周辺の観光業。年間使用量50〜500万kWh規模。",
  },
  {
    label: "農業・林業・水産業（東紀州・伊賀）",
    detail:
      "尾鷲・熊野の林業・水産業、伊賀の農業・忍者観光、紀北の柑橘・梅栽培の電力消費。中小事業者中心、年間使用量50〜500万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは26%前後（経産省統計）。四日市コンビナート・鈴鹿自動車の大規模事業者は競争入札による切替が標準化。ホンダ・三菱化学等のRE100対応で需要家主導型PPAが急速に普及。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。石油化学・半導体・自動車の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "中部電力ミライズ継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制（南海トラフ地震BCP含む）。デメリット: 単価が新電力比1〜2.5円/kWh高め、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①中部エリア供給実績の有無、②大規模需要対応力・バランシングコスト管理、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "ホンダ・三菱化学・コスモ石油の大企業はRE100対応のため、九州・東北・北海道の大規模再エネ電源とのオフサイトPPA契約を拡大。初期投資ゼロで再エネ調達可能。",
  },
];

const energySaving = [
  {
    label: "四日市石油化学のコージェネ・電動圧縮機最適化",
    detail:
      "化学プラントのコージェネレーション設備更新・拡張、電動圧縮機のインバータ・高効率化で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "半導体工場の高効率化",
    detail:
      "クリーンルーム空調の可変風量制御＋AI最適化、外気冷房（フリークーリング）併用、サーバ更新で電力密度向上で電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増す。",
  },
  {
    label: "自動車工場の高効率設備更新",
    detail:
      "塗装乾燥炉のヒートポンプ化、コンプレッサーのインバータ化、溶接機のインバータ式更新などで電力▲20〜35%。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "ホンダ・三菱化学・コスモ石油の大企業を中心に、九州・東北・北海道の大規模太陽光・風力との直接契約が拡大。RE100・SBT対応とCO2削減・電気代削減を両立。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・コンビナートでBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。蓄電池併設でDR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月、観光地は年末年始含む）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "中部電力ミライズの2023年改定後の単価で再見積を取得したか（南部一部は関電基準）",
  "県内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・三重県補助・市町村補助・GX関連補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "南海トラフ地震想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "三重県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均と同水準ですが、四日市コンビナート・鈴鹿の大規模事業者は新電力競争で全国平均より1.5〜2.5円/kWh安いケースが多数。特別高圧契約の競争入札では1〜2円/kWh単位の単価交渉が一般化しています。" },
  { question: "四日市コンビナートの石油化学プラント特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量10〜30億kWh級の超大規模事業者では、新電力の競争入札による単価最適化効果が極めて大きい。特別高圧契約での1円/kWhの単価差が年間10〜30億円規模のコスト差になります。複数の新電力からの相見積取得が必須です。" },
  { question: "中部電力ミライズの燃料費調整額の特徴は？", answer: "電源構成でLNG・石炭火力依存度が85%程度と高く、原発比率ゼロのため、燃料費調整額の変動幅は大きいです。2022〜2023年は月最大+7円/kWh、2024〜2025年は+2.5〜+4.0円/kWhレンジで推移。浜岡原発の再稼働見通しは不透明で、上限付きプランへの切替を強く推奨します。" },
  { question: "RE100対応のためのオフサイトPPAは三重県で活用できますか？", answer: "はい、ホンダ・三菱化学・コスモ石油等を中心にオフサイトPPA契約が急速に拡大しています。九州・東北・北海道の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。化学業界もカーボンニュートラル対応で需要急増中です。" },
  { question: "三重県の南部一部は関西電力エリアと聞きました。本当ですか？", answer: "はい、熊野市・御浜町・紀宝町等の南部一部地域は関西電力エリアです。標準メニュー・燃料費調整額は関西電力基準で、中部電力ミライズと供給ルールが異なります。県南部の事業者は契約時に必ず供給エリアを確認してください。" },
  { question: "三重県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、三重県脱炭素・省エネ設備導入補助、四日市市・鈴鹿市・津市の脱炭素補助、経産省GX関連補助・コンビナート再編支援の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "亀山半導体工場の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②クリーンルーム空調の可変風量制御＋AI最適化、③外気冷房（フリークーリング）併用でPUE改善、④需要家主導型オフサイトPPAで再エネ調達、⑤蓄電池・BEMSによる需要最適化、の5本柱が中心。SBT・RE100対応と電気代削減を両立できます。" },
  { question: "南海トラフ地震想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "三重県南部は南海トラフ地震・津波想定地域で、BCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散（リスク分散）、③地域密着型新電力との連携（地産地消エネルギー）、④BEMSによる停電復旧時の電力管理、の4点が重要。新電力選定時にBCP対応力を必ず評価してください。" },
];

const sourcesItems = [
  { name: "中部電力ミライズ 公式サイト", url: "https://miraiz.chuden.co.jp/" },
  { name: "三重県環境生活部", url: "https://www.pref.mie.lg.jp/" },
  { name: "経済産業省 中部経済産業局", url: "https://www.chubu.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function MieBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/mie-business-electricity-cost"
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
          <span className="text-slate-800">三重県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            三重県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            三重県は中部電力エリア（南部一部は関電エリア）で、四日市石油化学コンビナート、亀山の半導体・液晶工場、鈴鹿の自動車工業、伊勢志摩・鈴鹿サーキットの観光業、紀州林業・水産業と多様な産業構造を持ちます。本ページでは県内法人の電気代水準、業種別影響度、四日市コンビナート・半導体工場特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-22" updatedAt="2026-05-22" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中部電力エリアにおける三重県の電気代水準と全国比較</li>
              <li>四日市石油化学・亀山半導体・志摩観光ホテルのBefore/After削減事例</li>
              <li>四日市コンビナートのコージェネ・GX投資と特別高圧競争入札の実務</li>
              <li>SII・三重県・四日市市鈴鹿市・GX関連補助の組合せ活用パターン</li>
              <li>南海トラフ地震想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              三重県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県は中部電力エリア（南部一部のみ関西電力エリア）で、北勢・中勢・南勢の3地域から構成されます。四日市火力等の大規模電源拠点、四日市コンビナートの超大規模需要、亀山半導体の急成長、南海トラフ地震想定地域のBCP対応が県内電力消費の特徴を形成します。
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
              中部電力エリアの全体像は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中部電力エリア事情
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
              三重県では2024年時点で10社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・燃料系（コスモ石油マーケティング含む）、中部電力グループ系、地域密着型の4カテゴリが主軸となります。南部一部は関電エリアで供給ルールが異なる点に留意。
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
              三重県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力エリアの単価は全国平均と同水準で、四日市コンビナート・鈴鹿の大規模事業者は新電力競争で全国平均より1.5〜2.5円/kWh安いケースが多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 石油化学プラント・半導体工場・観光ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、24時間連続稼働は{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">24時間連続稼働工場の見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              三重県固有の電気代上昇要因 — コンビナート・原発ゼロ・RE100・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県の電気代上昇は、四日市石油化学コンビナートの超大規模需要、原発ゼロ依存に伴う燃料価格直撃、ホンダ・三菱化学等のRE100対応など多面的特性が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              三重県の補助金・優遇制度 — SII・県独自・四日市市鈴鹿市・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県では国補助（SII等）に加え、県独自補助、四日市市・鈴鹿市・津市の脱炭素補助、経産省GX関連補助・コンビナート再編支援が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              三重県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県の事業者構成は、石油化学・化学、自動車・部品、半導体・電子部品、観光業、農業・林業・水産業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              電力会社切替の実情 — 中部電力ミライズと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県の新電力シェアは2024年時点で26%前後。四日市コンビナート・鈴鹿自動車の大規模事業者は競争入札による切替が標準化、ホンダ・三菱化学等のRE100対応で需要家主導型PPAが急速に普及。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              三重県の省エネは『四日市石油化学のコージェネ・電動圧縮機最適化』『半導体工場の高効率化』『自動車工場の高効率設備更新』『需要家主導型オフサイトPPA』『BEMS・需要見える化・蓄電池』の5軸が主力。コンビナート・半導体の地域特性を踏まえた施策が重要です。
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
              三重県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで三重県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              三重県は四日市コンビナート・半導体・自動車・観光業など多様な業種構成と南海トラフ地震想定地域のBCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の影響額を試算する</li>
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
              publishedAt="2026-05-22"
            />
            <GlossaryLinks currentSlug="mie-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情", description: "中部電力管内の料金体系・改定動向の詳細。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "南部一部が関電エリアのため。" },
              { href: "/aichi-business-electricity-cost", title: "愛知県の法人電気料金", description: "隣接県・中京工業地帯の愛知県の事情。" },
              { href: "/gifu-business-electricity-cost", title: "岐阜県の法人電気料金", description: "隣接県・美濃工業の岐阜県の事情。" },
              { href: "/shiga-business-electricity-cost", title: "滋賀県の法人電気料金", description: "隣接県・関西電力エリアの滋賀県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・化学プラントの選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "化学・半導体・自動車が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "四日市コンビナートと全国比較。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "化学プラント・半導体工場向け。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "四日市コンビナートのオンサイト・オフサイトPPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・コンプレッサー・空調更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "中部電力エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="三重県の自社条件で電気代リスクを試算する"
            description="四日市コンビナート・半導体・自動車・観光業など三重県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="三重県の電力契約見直し、専門家に相談しませんか？"
            description="四日市コンビナート・亀山半導体・鈴鹿自動車の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
