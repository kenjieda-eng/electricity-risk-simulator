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
  "兵庫県の法人電気料金完全ガイド｜神戸港物流ハブ・姫路製鉄化学・神戸有馬城崎観光業の契約最適化";
const pageDescription =
  "兵庫県の法人電気料金を地域特化で解説。関西電力エリアの神戸港物流ハブ、姫路の製鉄・化学コンビナート、神戸・有馬・城崎温泉の観光業、阪神工業地帯の電力負荷プロファイル、特別高圧契約、補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "兵庫県 法人電気料金",
    "関西電力 高圧 阪神工業",
    "神戸港 物流 電気代",
    "姫路 製鉄 化学 電力",
    "有馬 城崎 観光 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/hyogo-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/hyogo-business-electricity-cost",
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
    label: "関西電力エリアと兵庫県の位置付け",
    detail:
      "兵庫県は関西電力のエリア。神戸（東灘・灘・中央・兵庫・北・西・須磨・垂水）、阪神（尼崎・西宮・芦屋・伊丹・宝塚）、播磨（姫路・加古川・明石・赤穂・たつの）、但馬・丹波・淡路の4地域から構成。県内総電力需要は約190億kWhで関電管内の約17%を占める。",
  },
  {
    label: "電源構成 — 関電原発依存と相生火力",
    detail:
      "関西電力管内は原発依存度が国内最高（高浜・大飯・美浜の再稼働で約30%）。LNG火力約30%、石炭火力約20%、再エネ・水力約20%。県内には関電の相生火力（重油）・姫路第一第二火力（LNG）等の主力電源が立地。原発再稼働により燃料費調整額は他エリアより低水準で推移。",
  },
  {
    label: "気象条件 — 太平洋・日本海二面性",
    detail:
      "県内は南北で気候が大きく異なる。瀬戸内海側（神戸・播磨）は温暖少雨、日本海側（豊岡・城崎）は冬季積雪あり。淡路島は温暖。年間冷房度日（CDD24）1,400〜1,600、暖房度日2,000〜2,800（地域差大）。",
  },
  {
    label: "需給ひっ迫 — 関電エリアの最大需要",
    detail:
      "関西電力管内の需給ひっ迫局面では、姫路の製鉄化学コンビナート、神戸港物流冷凍倉庫、神戸製鋼所等の重工業へのDR要請が発動。関電エリアは原発再稼働により他エリアより需給に余裕があるが、夏季ピーク時はDR対応が求められる。",
  },
  {
    label: "阪神工業地帯・姫路工業地帯と多業種集積",
    detail:
      "神戸・尼崎・西宮の阪神工業地帯は神戸製鋼・川崎重工・三菱重工等の重工業集積、姫路・加古川は新日鉄住金・日本触媒・神戸製鋼姫路等の製鉄化学コンビナート。神戸港は国際物流ハブで冷凍倉庫・港湾施設集積。神戸・有馬・城崎は観光業集積地。",
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
      "姫路製鉄化学コンビナート・神戸製鋼等の大規模事業者で特別高圧契約実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "大阪ガスエナジー・関電エネルギーソリューション・東邦ガスエナジー",
    role: "ガス・関電グループ系新電力",
    detail:
      "大阪ガスエナジーは阪神エリアでガス・電気のセット契約に強み。神戸製鋼グループの神鋼商事も電力小売事業を展開。関電エネルギーソリューションは関電グループとして大規模法人需要を対応。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向けに固定単価で大口契約を提供。県内大規模法人需要にも対応。",
  },
  {
    name: "こうべ電気・地域密着型新電力",
    role: "地域密着型",
    detail:
      "神戸市・姫路市・尼崎市等の自治体施設、中小事業者向けに地産地消型の供給を展開。神戸製鋼グループとの関連も。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は13社前後が県内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。姫路製鉄化学コンビナート、神戸製鋼、川崎重工・三菱重工神戸などが対象。全国平均比2〜3円/kWh安い水準で、新電力競争入札による更なる価格圧力が大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "関西電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。神戸・有馬・城崎の中小ホテル・旅館は低圧電灯中心。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は原発再稼働（高浜・大飯・美浜）により電力単価が他エリアより構造的に低い。法人需要では年間1〜5億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。新電力経由でさらに優遇可能性がある。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製鉄プラント（姫路市、特別高圧 20,000kW、年間 1.6億kWh）",
    before:
      "Before: 姫路市の製鉄プラントA社（高炉法・電炉併用、薄板・厚板製造）。24時間連続運転、年間電気代 40億円。電炉・圧延機・冷却ファンが消費電力の70%。市場連動プラン継続で2023年夏には月最大5.7億円の電気代経験。",
    after:
      "After: 特別高圧の固定5年契約（関電継続より1.0円/kWh安／原発再稼働メリット込み）／電炉の省エネ運転・蓄熱式・ヒートポンプ転換／コージェネレーション設備の更新（SII補助1/3活用・GX関連補助併用、投資7.0億円）／需要家主導型PPAでオフサイト風力・太陽光合計30MW契約／敷地内太陽光5MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 40億円 → 32億円（▲20%、▲8.0億円）／契約kW 20,000→18,000／投資回収 補助金後 3.3年／RE100進捗 50%達成。",
  },
  {
    title: "業種2: 流通業・神戸港冷凍物流（神戸市東灘区、特別高圧 4,500kW、年間 3,500万kWh）",
    before:
      "Before: 神戸港の冷凍物流センターB社（-25℃冷凍倉庫4棟、輸出入対応）。24時間稼働。年間電気代 9.5億円。燃料費調整額上昇で2023年は前年比+1.8億円の上昇。冷凍設備の一部が古く（14年経過）、ピークシフト未対応。",
    after:
      "After: 特別高圧の固定5年契約（物流専門新電力との競争入札）／冷凍庫コンプレッサーをCO2冷媒インバータ式に更新（SII補助1/3活用、投資3.0億円）／断熱性能改善工事／需要家主導型PPAでオフサイト太陽光3.5MW契約／需要見える化BEMS導入。",
    result:
      "Result: 年間電気代 9.5億円 → 7.6億円（▲20%、▲1.9億円）／契約kW 4,500→3,950／投資回収 補助金後 3.2年。",
  },
  {
    title: "業種3: 観光業・有馬温泉旅館（神戸市北区、高圧 700kW、年間 550万kWh）",
    before:
      "Before: 有馬温泉の老舗高級温泉旅館C社（客室150室、金泉・銀泉源泉、温泉プール・スパ完備）。年間電気代 1.6億円。冷暖房・温泉ポンプ・スパ加温・厨房・露天風呂保温が消費電力の主要要素。燃料費調整額上昇で2023年は前年比+3,000万円の上昇。",
    after:
      "After: 高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調をインバータ式に全面更新・人感センサ連動／LED全館化／温泉ポンプ・スパ加温・露天風呂保温の高効率化（観光庁・環境省補助活用、投資3,500万円）／屋根太陽光150kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 1.6億円 → 1.28億円（▲20%、▲3,200万円）／契約kW 700→610／投資回収 補助金後 2.5年。",
  },
];

const costFactors = [
  {
    label: "姫路製鉄化学コンビナートの超大規模需要",
    detail:
      "姫路・加古川の製鉄化学コンビナートは関西最大級。新日鉄住金姫路、日本触媒、神戸製鋼姫路、関西熱化学等は年間使用量1〜30億kWh級。電気代の絶対額が巨額なため、単価1円/kWh変動でも年間1〜30億円規模のコスト変動。",
  },
  {
    label: "神戸港国際物流ハブの冷凍倉庫集積",
    detail:
      "神戸港は日本最大級の貿易港。冷凍倉庫・荷役機械・港湾施設の電力消費が中心。冷凍倉庫は24時間稼働で電力負荷高い。輸出入対応で深夜時間帯の需要も発生。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は高浜・大飯・美浜の原発再稼働により電力単価が他エリアより構造的に低い。法人需要では年間1〜5億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "神戸製鋼・川崎重工・三菱重工・日本触媒等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後と上昇。年間10億kWh使用の超大規模製鉄プラントで年40億円規模の負担。減免制度（年間1,000万kWh以上・電気使用密度要件）の対象になる事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ・産業用ボイラー・コージェネ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "県内では姫路製鉄化学コンビナート・神戸製鋼・川崎重工等で大型採択実績多数。製鉄プラントのコージェネレーション・電炉省エネで安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "姫路・加古川の大規模工場で屋根・空地活用の太陽光導入が有効。神戸港冷凍倉庫もオフサイトPPAで対応。",
  },
  {
    name: "兵庫県脱炭素・省エネ設備導入補助",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "兵庫県独自補助。製鉄・化学・重工業の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "神戸市・姫路市・尼崎市の脱炭素補助",
    target: "市内中小事業者・大規模事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜5,000万円",
    note: "神戸市『神戸市カーボンニュートラル支援』、姫路市『姫路市環境配慮型事業所推進』など。市独自の脱炭素政策と連動した手厚い支援。",
  },
  {
    name: "経産省 GX関連補助・コンビナート再編支援",
    target: "製鉄・石油化学コンビナートのトランジション・水素アンモニア導入",
    rate: "事業規模に応じる、大型補助可能",
    note: "姫路コンビナートのGX投資（水素・アンモニア・蓄電池）を支援する大型補助。電力契約見直しと組合せた中期計画に活用。",
  },
];

const industryProfile = [
  {
    label: "製鉄・化学・素材（姫路・加古川）",
    detail:
      "新日鉄住金広畑（姫路）、日本触媒、神戸製鋼姫路、関西熱化学、ダイセル等の姫路コンビナート。年間使用量1〜30億kWh規模の超大型事業者。",
  },
  {
    label: "重工業・造船・電機（神戸・尼崎・西宮）",
    detail:
      "神戸製鋼神戸・尼崎、川崎重工神戸、三菱重工神戸、住友ゴム、ノーリツ等の阪神工業地帯。年間使用量1,000万〜5億kWh規模。",
  },
  {
    label: "神戸港・尼崎港物流",
    detail:
      "神戸港・六甲アイランド・ポートアイランドの国際物流ハブ。冷凍倉庫・荷役機械・港湾施設集積。年間使用量1,000万〜5,000万kWh規模。",
  },
  {
    label: "観光業（神戸・有馬・城崎・淡路）",
    detail:
      "神戸三宮・元町・北野異人館街、有馬温泉、城崎温泉、淡路島観光等の観光業。年間使用量50〜2,000万kWh規模（事業規模により幅広い）。",
  },
  {
    label: "食品・酒造（灘・伊丹）",
    detail:
      "灘の酒造（白鶴・菊正宗・大関・剣菱等）、伊丹の食品加工。年間使用量100万〜1,000万kWh規模。酒造業は仕込み時期（冬）の電力需要が高い。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で県内法人の新電力シェアは26%前後（経産省統計）。姫路コンビナート・神戸製鋼等の大規模事業者は競争入札による切替が標準化。観光業は大阪ガスエナジー等のガス・電気セット契約も普及。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。製鉄・化学・物流・観光業の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "関電継続のメリット・デメリット",
    detail:
      "メリット: 単価が他エリア比で安い（原発再稼働メリット）、安定供給・地域貢献。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①関電エリア供給実績の有無、②原発再稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が県内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "神戸製鋼・川崎重工・三菱重工・日本触媒等の大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。製鉄業のGXトランジションでも有効。",
  },
];

const energySaving = [
  {
    label: "製鉄コンビナートのコージェネ・電炉最適化",
    detail:
      "製鉄プラントのコージェネレーション設備更新、電炉省エネ運転・蓄熱式・ヒートポンプ転換で電力・熱効率▲20〜30%。SII補助・GX関連補助活用で投資回収 3〜5年。",
  },
  {
    label: "神戸港冷凍倉庫のCO2冷媒インバータ化",
    detail:
      "神戸港・尼崎港の冷凍倉庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII補助活用で 1.5〜3年。",
  },
  {
    label: "重工業の高効率設備更新",
    detail:
      "神戸製鋼・川崎重工等の重工業で塗装乾燥炉のヒートポンプ化、コンプレッサーのインバータ化、ボイラーのヒートポンプ転換などで電力▲20〜35%。SII補助活用で投資回収 2〜4年。",
  },
  {
    label: "観光業（温泉旅館）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、温泉ポンプ・スパ加温・露天風呂保温の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "神戸製鋼・川崎重工・三菱重工等の大企業を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。製鉄業のGXトランジションでも有効。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月、城崎・但馬は積雪期）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の2023年改定後の単価で再見積を取得したか",
  "県内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・兵庫県補助・市町村補助・GX関連補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "南海トラフ地震想定地域でのBCP（停電対応・蓄電池・自家発）と電力供給安定性を確認したか",
];

const faqItems = [
  { question: "兵庫県の法人電気代水準は全国比どれくらいですか？", answer: "関西電力は原発再稼働により電力単価が他エリアより構造的に1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。姫路コンビナート・神戸製鋼等の大規模事業者は新電力切替で年間2〜8億円規模のコスト削減事例も。" },
  { question: "姫路製鉄化学コンビナートの特別高圧契約は新電力切替で有利ですか？", answer: "はい、年間使用量10〜30億kWh級の超大規模事業者では、新電力の競争入札による単価最適化効果が極めて大きい。特別高圧契約での1円/kWhの単価差が年間10〜30億円規模のコスト差になります。複数の新電力からの相見積取得が必須です。" },
  { question: "関電原発再稼働は電気代にどう影響しますか？", answer: "高浜・大飯・美浜の原発再稼働により、関電管内の燃料費調整額は他エリアより低水準で推移しています。2024〜2025年は+1.5〜+3.0円/kWhレンジで、中部・東京エリア（+2.5〜+4.5円/kWh）より約1〜1.5円/kWh安い水準。年間10億kWh使用の事業者で年15億円規模のメリットです。" },
  { question: "RE100対応のためのオフサイトPPAは兵庫県で活用できますか？", answer: "はい、神戸製鋼・川崎重工・三菱重工・日本触媒等を中心にオフサイトPPA契約が急速に拡大しています。九州・東北の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。製鉄業のGXトランジションでも有効です。" },
  { question: "神戸港の冷凍倉庫の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷凍庫への更新（SII補助活用）、②断熱性能改善工事、③特別高圧の競争入札による単価最適化、④需要家主導型オフサイトPPA、⑤デマンドコントローラー導入、の5本柱が中心。投資回収は補助金活用で2〜3.5年が目安です。" },
  { question: "兵庫県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、兵庫県脱炭素・省エネ設備導入補助、神戸市・姫路市・尼崎市の脱炭素補助、経産省GX関連補助・コンビナート再編支援の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "有馬・城崎温泉等の観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③温泉ポンプ・スパ加温・露天風呂保温の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "南海トラフ地震想定地域でのBCP対応は電力契約にどう影響しますか？", answer: "兵庫県南部は南海トラフ地震・津波想定地域で、BCP対応は経営の必須要件です。①蓄電池・自家発電設備の併設、②複数の小売契約への分散（リスク分散）、③地域密着型新電力との連携（地産地消エネルギー）、④BEMSによる停電復旧時の電力管理、の4点が重要。新電力選定時にBCP対応力を必ず評価してください。" },
];

const sourcesItems = [
  { name: "関西電力 公式サイト", url: "https://kepco.jp/" },
  { name: "兵庫県環境部", url: "https://web.pref.hyogo.lg.jp/" },
  { name: "経済産業省 近畿経済産業局", url: "https://www.kansai.meti.go.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function HyogoBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/hyogo-business-electricity-cost"
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
          <span className="text-slate-800">兵庫県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            兵庫県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            兵庫県は関西電力エリアで、姫路・加古川の製鉄化学コンビナート、神戸・尼崎・西宮の阪神工業地帯（神戸製鋼・川崎重工・三菱重工等の重工業）、神戸港の国際物流ハブ、神戸・有馬・城崎の観光業、灘の酒造と多様な産業構造を持ちます。関電原発再稼働により電力単価が他エリアより構造的に安いのが特徴。本ページでは県内法人の電気代水準、業種別影響度、製鉄化学・港湾物流特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-22" updatedAt="2026-05-22" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>関西電力エリアにおける兵庫県の電気代水準と全国比較（原発再稼働メリット）</li>
              <li>姫路製鉄・神戸港冷凍物流・有馬温泉旅館のBefore/After削減事例</li>
              <li>製鉄コンビナートのコージェネ・電炉最適化と特別高圧競争入札の実務</li>
              <li>SII・兵庫県・神戸市姫路市・GX関連補助の組合せ活用パターン</li>
              <li>南海トラフ地震想定地域での電力契約とBCP対応</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              兵庫県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県は関西電力エリアで、神戸・阪神・播磨・但馬丹波淡路の4地域から構成されます。関電原発再稼働メリット、姫路製鉄化学コンビナートの超大規模需要、神戸港国際物流ハブの冷凍倉庫集積、南海トラフ地震想定地域のBCP対応が県内電力消費の特徴を形成します。
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
              兵庫県では2024年時点で13社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・関電グループ系、地域密着型の3カテゴリが主軸となります。
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
              兵庫県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関西電力エリアは原発再稼働により単価が全国平均より1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数あります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 製鉄・神戸港冷凍・温泉旅館（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              、冷凍倉庫向けは{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              兵庫県固有の電気代上昇要因 — コンビナート・港湾物流・原発再稼働
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県の電気代上昇は、姫路製鉄化学コンビナートの超大規模需要、神戸港国際物流ハブの冷凍倉庫集積、関電原発再稼働メリット（プラス要因）、南海トラフ地震想定地域のBCP対応など多面的特性が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              兵庫県の補助金・優遇制度 — SII・県独自・神戸市姫路市・GX
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県では国補助（SII等）に加え、県独自補助、神戸市・姫路市・尼崎市の脱炭素補助、経産省GX関連補助・コンビナート再編支援が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              兵庫県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県の事業者構成は、製鉄・化学・素材、重工業・造船・電機、神戸港・尼崎港物流、観光業、食品・酒造の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              兵庫県の新電力シェアは2024年時点で26%前後。姫路コンビナート・神戸製鋼等の大規模事業者は競争入札による切替が標準化、神戸製鋼・川崎重工等のRE100対応で需要家主導型PPAが急速に普及。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              兵庫県の省エネは『製鉄コンビナートのコージェネ・電炉最適化』『神戸港冷凍倉庫のCO2冷媒インバータ化』『重工業の高効率設備更新』『観光業（温泉旅館）の省エネ』『需要家主導型オフサイトPPA』の5軸が主力。
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
              兵庫県向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。南海トラフ地震想定地域としてBCP対応も電力契約の重要要件です。
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
              シミュレーターで兵庫県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              兵庫県は姫路製鉄・神戸港物流・観光業など多様な業種構成と関電原発再稼働メリット・南海トラフBCP対応が必要な地域です。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
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
            <GlossaryLinks currentSlug="hyogo-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西電力管内の料金体系・改定動向の詳細。" },
              { href: "/osaka-business-electricity-cost", title: "大阪府の法人電気料金", description: "隣接府・関西物流ハブの大阪府の事情。" },
              { href: "/kyoto-business-electricity-cost", title: "京都府の法人電気料金", description: "隣接府・観光業大国の京都府の事情。" },
              { href: "/wakayama-business-electricity-cost", title: "和歌山県の法人電気料金", description: "隣接県・紀ノ川流域工業の和歌山県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・物流の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "製鉄・物流・観光が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "姫路製鉄コンビナートと全国比較。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "24時間連続稼働工場の見直し", description: "製鉄・化学プラント向け。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "神戸港冷凍倉庫の削減ポイント。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "神戸・有馬・城崎観光業向け。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "コージェネ・冷凍設備更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "関電エリアでも影響あり・原発再稼働で抑制。" },
            ]}
          />

          <ContentCta
            heading="兵庫県の自社条件で電気代リスクを試算する"
            description="姫路製鉄・神戸港物流・観光業など兵庫県固有の条件と関電原発再稼働メリットを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="兵庫県の電力契約見直し、専門家に相談しませんか？"
            description="姫路製鉄化学コンビナート・神戸港物流・神戸有馬城崎観光業の電気代見直しは業種により論点が異なります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
