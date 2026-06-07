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
  "京都府の法人電気料金完全ガイド｜国内最大級観光業・西陣友禅伝統工芸・京セラ半導体電子部品の契約最適化";
const pageDescription =
  "京都府の法人電気料金を地域特化で解説。関西電力エリアの国内最大級観光業、西陣・友禅等の伝統工芸、京セラ・村田製作所等の半導体・電子部品、ハイテク産業の電力負荷プロファイル、特別高圧契約、補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "京都府 法人電気料金",
    "関西電力 高圧 京都",
    "京セラ 半導体 電気代",
    "西陣 友禅 伝統工芸 電力",
    "京都 観光 ホテル 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kyoto-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kyoto-business-electricity-cost",
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
    label: "関西電力エリアと京都府の位置付け",
    detail:
      "京都府は関西電力のエリア。京都市内（中京・下京・上京・東山・左京・右京・北・伏見・山科・西京・南）、洛南（宇治・城陽・八幡・京田辺）、丹後・丹波（亀岡・福知山・舞鶴・京丹後）の3地域から構成。県内総電力需要は約140億kWhで関電管内の約12%を占める。",
  },
  {
    label: "電源構成 — 関電原発依存と京北水力",
    detail:
      "関西電力管内は原発依存度が国内最高（高浜・大飯・美浜の再稼働で約30%）。LNG火力約30%、石炭火力約20%、再エネ・水力約20%。京都府内には関電の水力発電所が複数立地（京北・嵐山等）。原発再稼働により燃料費調整額は他エリアより低水準で推移。",
  },
  {
    label: "気象条件 — 内陸盆地と夏季多湿高温",
    detail:
      "京都市は典型的な内陸盆地気候で、夏季高温多湿・冬季の底冷えで知られる。京都市の夏季最高気温は38℃級。日本海側（舞鶴・宮津）は冬季積雪あり。年間冷房度日（CDD24）1,400〜1,700、暖房度日2,200〜2,500（地域差あり）。",
  },
  {
    label: "需給ひっ迫 — 関電エリアの最大需要",
    detail:
      "関西電力管内の需給ひっ迫局面では、京セラ・村田製作所等の半導体工場、京都市内の大型観光ホテルへのDR要請が発動。関電エリアは原発再稼働により他エリアより需給に余裕があるが、観光繁忙期（春・秋・年末年始）はDR対応が求められる。",
  },
  {
    label: "京都市内観光業・洛南電子部品集積",
    detail:
      "京都市内（東山・伏見・嵐山等）の観光業は国内最大級でホテル・寺社・店舗が多数集積。インバウンド回復で電力需要急増中。洛南（長岡京・向日・八幡）は京セラ・島津製作所・任天堂等の半導体・電子部品・精密機械の集積地。年間使用量2,000万〜2億kWh規模の事業者多数。",
  },
];

const utilitiesList = [
  {
    name: "関西電力（送配電）",
    role: "一般小売事業者",
    detail:
      "府内シェア最大。高圧・特別高圧の標準メニューは『高圧電力AB』『特高季節別時間帯別電力』など。2023年6月の規制料金改定で家庭向け値上げを実施したが、原発再稼働進展で他エリアより値上げ幅は抑制された。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "京セラ・村田製作所・任天堂等の大規模事業者で特別高圧契約実績多数。固定単価・市場連動の両方を提供。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "大阪ガスエナジー・サミットエナジー・関電エネルギーソリューション",
    role: "ガス・関電グループ系新電力",
    detail:
      "大阪ガスエナジーは京都府内でガス・電気のセット契約に強み。観光業（中小ホテル・旅館）で多数の実績。関電エネルギーソリューションは関電グループとして大規模法人需要を対応。",
  },
  {
    name: "イーレックス・エネット",
    role: "全国系新電力",
    detail:
      "全国規模の事業者向けに固定単価で大口契約を提供。府内大規模法人需要にも対応。",
  },
  {
    name: "けいはんなSI・地域密着型新電力",
    role: "地域密着型",
    detail:
      "京都市・宇治市・京田辺市等の自治体施設、けいはんな学研都市の中小事業者向けに地産地消型の供給を展開。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で府内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は13社前後が府内法人向け高圧で新規受付中。最新状況は新電力ネット等で要確認。",
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
      "特別高圧（2,000kW超）の標準メニューは電力量料金16〜19円/kWh+調整項目。京セラ・村田製作所・任天堂・島津製作所等の大規模事業者などが対象。全国平均比2〜3円/kWh安い水準で、新電力競争入札による更なる価格圧力が大きい。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "関西電力『低圧電力』は9〜12円/kWh+調整項目。中小事業所・店舗・コンビニ等で利用。低圧電灯（事務所等）は16〜19円/kWh。京都市内の中小ホテル・旅館・店舗は低圧電灯中心。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は原発再稼働（高浜・大飯・美浜）により電力単価が他エリアより構造的に低い。法人需要では年間1〜3億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。新電力経由でさらに優遇可能性がある。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・半導体電子部品工場（長岡京市、特別高圧 6,000kW、年間 4,700万kWh）",
    before:
      "Before: 長岡京市の半導体電子部品メーカーA社（村田・京セラ系セラミック電子部品）。24時間連続運転、クリーンルーム空調が消費電力の40%、製造設備40%。年間電気代 11.0億円。燃料費調整額上昇で2023年は前年比+2.0億円の上昇。市場連動プランは採用せず固定プランだが、改定の影響大。",
    after:
      "After: 特別高圧の固定3年契約を新電力との競争入札で更新（関電継続より1.0円/kWh安）／クリーンルーム空調を可変風量制御＋AI最適化に／外気冷房（フリークーリング）併用／需要家主導型PPAでオフサイト太陽光・風力合計10MW契約／屋根太陽光1MW＋蓄電池導入。",
    result:
      "Result: 年間電気代 11.0億円 → 9.4億円（▲15%、▲1.6億円）／契約kW 6,000→5,700／投資回収 補助金後 3.8年／RE100進捗 75%達成。",
  },
  {
    title: "業種2: 観光業・京都市内大型ホテル（京都市東山区、特別高圧 1,500kW、年間 1,200万kWh）",
    before:
      "Before: 京都市内のラグジュアリーホテルB社（客室280室、レストラン・スパ・宴会場完備、インバウンド比率60%）。年間電気代 3.5億円。冷暖房・スパ加温・厨房・宴会場照明・電気自動車充電器が消費電力の主要要素。観光繁忙期（春・秋・年末年始）は電力ピーク急増。",
    after:
      "After: 特別高圧の固定3年契約（観光業対応新電力との競争入札）／客室空調をインバータ式に全面更新・人感センサ連動／LED全館化／スパ加温・厨房の高効率化（観光庁・環境省補助活用、投資6,500万円）／屋根太陽光300kW＋蓄電池導入／需要家主導型PPAでオフサイト太陽光2MW契約。",
    result:
      "Result: 年間電気代 3.5億円 → 2.8億円（▲20%、▲7,000万円）／契約kW 1,500→1,300／投資回収 補助金後 2.8年。",
  },
  {
    title: "業種3: 製造業・伝統工芸（京都市中京区、高圧 350kW、年間 280万kWh）",
    before:
      "Before: 京都市内の西陣織工房C社（伝統工芸産業・小規模事業者集積）。年間電気代 8,400万円。電動織機・染色機・乾燥機・空調が消費電力の主要要素。職人の働き方に合わせた電力消費パターン（朝〜夕の集中稼働）で、夏季冷房需要も高い。",
    after:
      "After: 高圧の固定3年契約（地域密着型新電力との地産地消契約）／電動織機・染色機をインバータ化／空調更新・LED化（中小企業向けSII補助1/2活用、投資1,200万円）／屋根太陽光30kW＋蓄電池導入（伝統工芸補助金活用）。",
    result:
      "Result: 年間電気代 8,400万円 → 6,720万円（▲20%、▲1,680万円）／契約kW 350→300／投資回収 補助金後 2.5年／伝統工芸の脱炭素対応で観光客アピール強化。",
  },
];

const costFactors = [
  {
    label: "京都市内観光業の電力需要急増",
    detail:
      "インバウンド完全回復に伴い、京都市内のホテル・寺社・店舗の電力需要が急増中。観光繁忙期（春・秋・年末年始）はピーク需要が通常期の1.5〜2倍となり、契約電力（kW）の見直し余地が大きい。",
  },
  {
    label: "関電原発再稼働メリット",
    detail:
      "関西電力は高浜・大飯・美浜の原発再稼働により電力単価が他エリアより構造的に低い。法人需要では年間1〜3億円規模の差が出ることもあり、関電エリア事業者は相対的に有利。",
  },
  {
    label: "RE100・SBT対応の再エネ調達ニーズ",
    detail:
      "京セラ・村田製作所・任天堂・島津製作所等のグローバル企業はRE100・SBT・CDP対応のためにオフサイトPPA契約を急増中。九州・東北の大規模太陽光・風力電源と直接契約が主流化。",
  },
  {
    label: "京都市景観条例による太陽光制約",
    detail:
      "京都市は景観条例が厳しく、屋根太陽光設置に建築デザイン・色彩等の制約あり。寺社周辺・歴史地区では設置不可。観光業・伝統工芸事業者の自家消費太陽光導入時は事前協議が必須。オフサイトPPAが代替手段として有効。",
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
    target: "高効率コンプレッサー・LED・空調・送風機・ヒートポンプ・産業用ボイラー・電動織機",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "府内では京セラ・村田・任天堂等の半導体電子部品工場で大型採択実績多数。観光業・伝統工芸事業者の中小企業向け補助も活発。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "洛南・けいはんな学研都市の大規模工場で屋根活用太陽光が有効。京都市内景観条例エリアではオフサイトPPAが代替手段。",
  },
  {
    name: "京都府脱炭素・省エネ設備導入補助",
    target: "府内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "京都府独自補助。観光業・伝統工芸・半導体の脱炭素化を支援する大型補助あり。SII補助との併用ルールに留意。",
  },
  {
    name: "京都市・宇治市・長岡京市の脱炭素補助",
    target: "市内中小事業者のCO2削減投資",
    rate: "1/3〜1/2、上限500万〜3,000万円",
    note: "京都市『京都市脱炭素先行地域事業』、宇治市『宇治市カーボンニュートラル支援』など。市独自の脱炭素政策と連動した支援。",
  },
  {
    name: "観光業・宿泊施設・伝統工芸向け省エネ補助",
    target: "京都市内・嵐山・宇治の旅館・ホテル・寺社・伝統工芸事業者の省エネ化",
    rate: "1/2、上限1,000万円",
    note: "観光庁・環境省連携の宿泊施設省エネ補助、伝統工芸産業振興補助、京都市景観整備補助等の組合せで投資回収を加速。",
  },
];

const industryProfile = [
  {
    label: "半導体・電子部品（洛南・けいはんな）",
    detail:
      "京セラ（南区・洛南）、村田製作所（長岡京・洛南）、任天堂（南区）、島津製作所（中京・西京）、オムロン（下京）等の半導体・電子部品・ハイテク産業。年間使用量2,000万〜2億kWh規模。",
  },
  {
    label: "観光業（京都市内・嵐山・宇治）",
    detail:
      "京都市内のホテル・旅館（ラグジュアリー〜ビジネス）、寺社（清水寺・金閣寺・伏見稲荷等）、嵐山観光、宇治平等院周辺等の観光業。年間使用量50〜2,000万kWh規模（事業規模により幅広い）。インバウンド完全回復で需要急増。",
  },
  {
    label: "伝統工芸（西陣・友禅・京焼）",
    detail:
      "西陣織、京友禅、京焼・清水焼、京漆器、京和傘等の伝統工芸産業。中小事業者集積（家業中心）。年間使用量50〜500万kWh規模が中心。",
  },
  {
    label: "食品・飲料（伏見・洛南）",
    detail:
      "伏見の酒造（月桂冠・宝酒造・黄桜等）、京菓子製造、食品加工。年間使用量100万〜2,000万kWh規模。酒造業は仕込み時期（冬）の電力需要が高い。",
  },
  {
    label: "日本海側産業（舞鶴・宮津・福知山）",
    detail:
      "舞鶴港の物流・冷凍倉庫・水産加工、福知山の電子・機械工業、宮津・天橋立の観光業。年間使用量100万〜1,000万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の府内浸透度",
    detail:
      "2024年時点で府内法人の新電力シェアは24%前後（経産省統計）。洛南・けいはんなの半導体電子部品工場は競争入札による切替が標準化。観光業は大阪ガスエナジー等のガス・電気セット契約も普及。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で府内事業者の多くが市場連動から固定プランへ回帰。半導体電子部品・観光業の24時間稼働事業者は特に市場連動を敬遠。",
  },
  {
    label: "関電継続のメリット・デメリット",
    detail:
      "メリット: 単価が他エリア比で安い（原発再稼働メリット）、安定供給・地域貢献、京都ブランドへの貢献。デメリット: 新電力比でなお1〜2円/kWh高めの場合あり、燃料費調整額上限なし。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①関電エリア供給実績の有無、②原発再稼働メリットを反映した競争力ある単価、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が府内では特に重要。",
  },
  {
    label: "オフサイトPPAの主流化",
    detail:
      "京セラ・村田製作所・任天堂等の大企業はRE100対応のため、九州・東北の大規模再エネ電源とのオフサイトPPA契約を拡大。京都市内景観条例エリアの観光・伝統工芸事業者にとってもオフサイトPPAが屋根太陽光の代替手段として有効。",
  },
];

const energySaving = [
  {
    label: "半導体電子部品工場の高効率化",
    detail:
      "クリーンルーム空調の可変風量制御＋AI最適化、外気冷房（フリークーリング）併用、サーバ更新で電力密度向上で電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増す。",
  },
  {
    label: "観光業（京都市内ホテル）の省エネ",
    detail:
      "客室空調インバータ更新＋人感センサ連動、LED全館化、スパ加温・厨房の高効率化で電力▲20〜30%。観光庁・環境省補助活用で投資回収 2〜3年。",
  },
  {
    label: "伝統工芸事業者の電動化・高効率化",
    detail:
      "電動織機・染色機・乾燥機のインバータ化、空調更新・LED化で電力▲20〜30%。中小企業向け補助・京都府伝統工芸産業振興補助の活用で投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "京セラ・村田製作所・任天堂等の大企業を中心に、九州・東北の大規模太陽光・風力との直接契約が拡大。京都市内景観条例エリアの代替手段としても有効。",
  },
  {
    label: "BEMS・需要見える化・蓄電池",
    detail:
      "工場・観光施設・伝統工芸事業者でBEMS導入＋デマンドコントローラー連動でピーク需要▲15〜25%。蓄電池併設でDR報酬獲得・需要家主導型PPAの効率最大化も可能。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "観光繁忙期（春・秋・年末年始）と夏季ピーク月（7〜8月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の2023年改定後の単価で再見積を取得したか",
  "府内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
  "SII補助・京都府補助・京都市・観光庁補助・伝統工芸補助の併用可否を確認したか",
  "需要家主導型PPA（オフサイト太陽光・風力）の試算を実施したか",
  "京都市景観条例に該当する場合、屋根太陽光の事前協議とオフサイトPPA代替案を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "京都府の法人電気代水準は全国比どれくらいですか？", answer: "関西電力は原発再稼働により電力単価が他エリアより構造的に1〜2円/kWh安く、新電力競争で更に1〜2円/kWh安いケース多数。洛南・けいはんなの半導体電子部品工場は新電力切替で年間1〜2億円規模のコスト削減事例も。観光業も電気代削減余地が大きいエリアです。" },
  { question: "京都市内観光業の電気代削減ポイントは？", answer: "①客室空調インバータ更新＋人感センサ連動、②LED全館化、③スパ加温・厨房の高効率化、④高圧契約の競争入札による単価最適化、⑤観光庁・環境省補助の活用、の5本柱が中心。投資回収は補助金活用で2〜3年が目安。インバウンド完全回復で売上も増えるため、設備投資のタイミングとして最適です。" },
  { question: "京都市景観条例に該当する場合の太陽光導入は？", answer: "京都市内・嵐山・宇治の景観条例エリアでは屋根太陽光の設置に建築デザイン・色彩等の制約があり、寺社周辺・歴史地区では設置不可です。事前協議で設置可能性を確認し、不可の場合はオフサイトPPA（九州・東北等の大規模再エネ電源との直接契約）で代替できます。RE100対応にも有効です。" },
  { question: "RE100対応のためのオフサイトPPAは京都府で活用できますか？", answer: "はい、京セラ・村田製作所・任天堂・島津製作所等を中心にオフサイトPPA契約が急速に拡大しています。九州・東北の大規模太陽光・風力電源と直接契約で、初期投資ゼロでCO2削減・電気代削減を両立できます。京都市内景観条例エリアの代替手段としても有効です。" },
  { question: "西陣・友禅等の伝統工芸事業者の電気代対策は？", answer: "①電動織機・染色機・乾燥機のインバータ化、②空調更新・LED化、③高圧契約の競争入札による単価最適化、④地域密着型新電力との地産地消契約、⑤京都府伝統工芸産業振興補助・中小企業SII補助の活用、の5本柱が中心。脱炭素対応で観光客アピールも強化できます。" },
  { question: "京都府で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、京都府脱炭素・省エネ設備導入補助、京都市・宇治市・長岡京市の脱炭素補助、観光庁・環境省・伝統工芸補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "京セラ・村田製作所等の半導体電子部品工場の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②クリーンルーム空調の可変風量制御＋AI最適化、③外気冷房（フリークーリング）併用でPUE改善、④需要家主導型オフサイトPPAで再エネ調達、⑤蓄電池・BEMSによる需要最適化、の5本柱が中心。SBT・RE100対応と電気代削減を両立できます。" },
  { question: "関電と新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（関西電力送配電）が担うため、関電契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "関西電力 公式サイト", url: "https://kepco.jp/" },
  { name: "京都府環境部", url: "https://www.pref.kyoto.jp/" },
  { name: "経済産業省 近畿経済産業局", url: "https://www.kansai.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
];

export default function KyotoBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kyoto-business-electricity-cost"
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
          <span className="text-slate-800">京都府の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            京都府の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            京都府は関西電力エリアで、京都市内の国内最大級観光業、西陣・友禅・京焼等の伝統工芸、洛南・けいはんな学研都市の京セラ・村田製作所・任天堂等の半導体電子部品・ハイテク産業、伏見の酒造、舞鶴港の物流と多様な産業構造を持ちます。関電原発再稼働により電力単価が他エリアより構造的に安いのが特徴。本ページでは府内法人の電気代水準、業種別影響度、観光業・京都市景観条例特有の論点、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-22" updatedAt="2026-05-22" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>関西電力エリアにおける京都府の電気代水準と全国比較（原発再稼働メリット）</li>
              <li>長岡京半導体工場・京都市内ホテル・西陣織工房のBefore/After削減事例</li>
              <li>京都市景観条例とオフサイトPPA代替手段の実務</li>
              <li>SII・京都府・京都市・観光庁・伝統工芸補助の組合せ活用パターン</li>
              <li>インバウンド完全回復に伴う観光業の電力契約見直し</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              京都府の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府は関西電力エリアで、京都市内・洛南・丹後丹波の3地域から構成されます。関電原発再稼働メリット、京都市内観光業の電力需要急増（インバウンド完全回復）、京都市景観条例による太陽光設置制約が府内電力消費の特徴を形成します。
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
              府内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府では2024年時点で13社前後の新電力が法人向け高圧で新規受付中です。全国系、ガス・関電グループ系、地域密着型の3カテゴリが主軸となります。
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
              京都府の電気料金水準と全国比較
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
              業種別影響度3件 — 半導体工場・京都市内ホテル・西陣織工房（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              京都府固有の電気代上昇要因 — 観光急増・景観条例・伝統工芸
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府の電気代上昇は、インバウンド回復による観光業の電力需要急増、関電原発再稼働メリット（プラス要因）、京都市景観条例による太陽光設置制約など多面的特性が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              京都府の補助金・優遇制度 — SII・府独自・京都市・観光庁・伝統工芸
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府では国補助（SII等）に加え、府独自補助、京都市・宇治市・長岡京市の脱炭素補助、観光庁・環境省・伝統工芸補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜2年短縮できます。
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
              京都府の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府の事業者構成は、半導体・電子部品、観光業、伝統工芸、食品・飲料、日本海側産業の5層構造です。各業種の電力消費プロファイルを把握することで自社の位置付けが見えてきます。
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
              京都府の新電力シェアは2024年時点で24%前後。洛南・けいはんなの半導体電子部品工場は競争入札による切替が標準化、京セラ・村田・任天堂等のRE100対応で需要家主導型PPAが急速に普及。市場連動プランから固定プランへの回帰トレンドが鮮明です。
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
              府内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府の省エネは『半導体電子部品工場の高効率化』『観光業（京都市内ホテル）の省エネ』『伝統工芸事業者の電動化・高効率化』『需要家主導型オフサイトPPA』『BEMS・需要見える化・蓄電池』の5軸が主力。京都市景観条例エリアではオフサイトPPAが屋根太陽光の代替手段として有効です。
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
              京都府向け契約見直しチェックリスト（12項目）
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
              シミュレーターで京都府の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府は観光業急増・京都市景観条例・半導体電子部品・伝統工芸など多様な業種構成と地域特性を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>観光繁忙期（春・秋・年末年始）と夏季ピーク月（7〜8月）の影響額を試算する</li>
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
            <GlossaryLinks currentSlug="kyoto-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西電力管内の料金体系・改定動向の詳細。" },
              { href: "/osaka-business-electricity-cost", title: "大阪府の法人電気料金", description: "隣接府・関西物流ハブの大阪府の事情。" },
              { href: "/shiga-business-electricity-cost", title: "滋賀県の法人電気料金", description: "隣接県・内陸工業の滋賀県の事情。" },
              { href: "/nara-business-electricity-cost", title: "奈良県の法人電気料金", description: "隣接県・観光業大国の奈良県の事情。" },
              { href: "/hyogo-business-electricity-cost", title: "兵庫県の法人電気料金", description: "隣接県・神戸港物流の兵庫県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働工場・観光業の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "半導体・観光業が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "洛南半導体工場と全国比較。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル・旅館の電気料金見直し", description: "京都市内・嵐山・宇治観光業向け。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "京都市景観条例とオフサイトPPA代替。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "クリーンルーム空調・コンプレッサー更新の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "関電エリアでも影響あり・原発再稼働で抑制。" },
            ]}
          />

          <ContentCta
            heading="京都府の自社条件で電気代リスクを試算する"
            description="京都市内観光業・洛南半導体・伝統工芸など京都府固有の条件と関電原発再稼働メリットを踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。京都市景観条例エリアではオフサイトPPA代替案も検討できます。"
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
            heading="京都府の電力契約見直し、専門家に相談しませんか？"
            description="京都市内観光業・洛南半導体電子部品・伝統工芸の電気代見直しは業種・地域により論点が異なります。京都市景観条例エリアの太陽光代替案も含め、エネルギー情報センターは中立的立場で府内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
