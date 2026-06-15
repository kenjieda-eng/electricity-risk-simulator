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
  "山梨県の法人電気料金完全ガイド｜精密機械（セイコー等）・富士五湖観光業・ワイン産業の契約最適化";
const pageDescription =
  "山梨県の法人電気料金を地域特化で解説。東京電力エリア、甲府盆地の精密機械（セイコー等）、富士五湖・山中湖の観光業、勝沼ワイン産業、桃・ぶどう果樹園の電力負荷、契約見直しと補助金活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "山梨県 法人電気料金",
    "東京電力 高圧 山梨",
    "甲府 精密機械 電気代",
    "富士五湖 観光業 電力",
    "勝沼 ワイン 電気料金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/yamanashi-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/yamanashi-business-electricity-cost",
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
    label: "東京電力エリアと山梨県の位置付け",
    detail:
      "山梨県は東京電力ネットワーク管内。甲府盆地・峡東（勝沼周辺）・峡南（身延）・郡内（富士五湖周辺）の地域に分かれる。県内総電力需要は約30億kWhで東電エリアの1.2%程度を占める。首都圏ベッドタウン・観光地・農業地帯の三面性を持つ。",
  },
  {
    label: "電源構成 — 東電エリアの恩恵と県内再エネ",
    detail:
      "東京電力エリアの火力中心電源構成を引き継ぐ。県内には大規模水力発電所（葛野川揚水発電所等）、太陽光発電所が立地。再エネ100%自治体宣言を行う甲府市・北杜市など、自治体レベルでの再エネ推進が活発。",
  },
  {
    label: "気象条件 — 内陸性気候の寒暖両極",
    detail:
      "甲府盆地は内陸性気候で寒暖差が日本有数。夏季最高気温40℃超の日もあり全国一の暑さ記録（甲府40.7℃）。冬季は朝の最低気温-5℃前後で霜害対策が農業に不可欠。暖房度日2,400〜2,800、冷房度日1,200〜1,400で両方が顕著。",
  },
  {
    label: "需給ひっ迫 — 夏季冷房ピーク",
    detail:
      "東京電力エリアの需給ひっ迫局面では、甲府盆地の夏季冷房ピークが大きな負荷。観光業のシーズン需要（GW・夏休み・富士山閉山）と重なって需給管理の重要因子。",
  },
  {
    label: "産業集積 — 精密機械・観光業・ワイン",
    detail:
      "甲府市・山梨市の精密機械工業（セイコー・キタムラ機械等）、富士五湖・山中湖・河口湖の観光業、勝沼・甲州市のワイン産業（メルシャン・サントリー等）が3本柱。桃・ぶどう・すももの果樹園もデリケートな電力消費を持つ。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "県内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』など。2023年6月の規制料金改定で家庭向け15.9%値上げ。法人向けも同等の改定を実施。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "全国系新電力。中堅製造業・観光業で実績。2022〜2023年の市場高騰局面で一部営業休止もあったが、2024年以降は再開。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信会社系・流通系の新電力。中小事業者・店舗中心だが、観光業向け高圧プランも展開。",
  },
  {
    name: "やまなしパワー・甲府市民エナジー",
    role: "地域密着型新電力",
    detail:
      "山梨県内の地域新電力。県内再エネ電源（太陽光・小水力）を優先調達。県内自治体施設・中小事業者向け。",
  },
  {
    name: "みんな電力・自然電力",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供。RE100宣言企業向け。山梨県は『100%再エネ宣言』自治体が多く、地域全体で再エネ調達ニーズが高い。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で県内でも新電力の新規受付停止・撤退が発生。2024年以降は徐々に再開、現在は9社前後が県内で法人向け高圧で新規受付中。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。全国平均と同水準。新電力経由で2〜3円/kWh安いケース多数。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。県内大手精密機械工場、ワイン醸造大手などが対象。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力（動力）』は10〜13円/kWh+調整項目。中小事業所・観光業店舗・果樹園冷蔵庫等で利用。低圧電灯（事務所等）は17〜20円/kWh。",
  },
  {
    label: "燃料費調整額の東電特性",
    detail:
      "電源構成でLNG・石炭火力依存度が65%程度のため、燃料費調整額の変動幅は大きい。2022〜2023年は月最大+8円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。柏崎刈羽原発の再稼働進展で長期的には負担減の可能性。",
  },
];

const industryImpact = [
  {
    title: "業種1: 製造業・精密機械工場（甲府市・高圧 480kW、年間 260万kWh）",
    before:
      "Before: 甲府市の精密機械（時計・計測機器）メーカーA社。クリーンルーム・精密加工ラインを24時間稼働。市場連動プラン継続で2023年夏には月最大850万円の電気代経験。年間電気代 6,800万円。クリーンルーム空調が消費電力の45%、コンプレッサー旧型のまま運用。",
    after:
      "After: 全国系新電力に切替し固定3年プラン採用。クリーンルーム空調を可変風量制御に変更／コンプレッサーをインバータ式に更新（SII補助1/2活用、投資900万円）／屋根面積2,200m²に自家消費太陽光300kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 6,800万円 → 5,650万円（▲17%、▲1,150万円）／契約kW 480→430／投資回収 補助金後 2.3年。",
  },
  {
    title: "業種2: 流通業・桃ぶどう冷蔵倉庫（甲州市・高圧 220kW、年間 110万kWh）",
    before:
      "Before: 甲州市の桃・ぶどう冷蔵倉庫B社（JA系）。収穫期7〜10月のピーク負荷が顕著。年間電気代 2,800万円。燃料費調整額直撃で2023年は前年比+550万円の上昇。冷蔵設備が古く（16年経過）。",
    after:
      "After: 固定3年プランへ切替／冷蔵庫コンプレッサーをCO2冷媒インバータ式に更新（SII＋農水補助1/2活用、投資1,800万円）／断熱性能改善工事／屋根太陽光100kW自家消費＋蓄電池。",
    result:
      "Result: 年間電気代 2,800万円 → 2,240万円（▲20%、▲560万円）／契約kW 220→190／投資回収 補助金後 2.0年。",
  },
  {
    title: "業種3: サービス業・河口湖リゾートホテル（富士河口湖町、高圧 350kW、年間 195万kWh）",
    before:
      "Before: 河口湖のリゾートホテルC社（130室）。富士山観光客の通年需要＋夏季冷房ピーク・冬季暖房ピークの両方を持つ。年間電気代 6,000万円。市場連動プラン継続で2023年8月は月950万円の請求（前年同月+280万円）を経験。",
    after:
      "After: 固定3年プランへ切替／全館LED化（投資380万円、SII補助1/2活用）／高効率ヒートポンプ給湯機への更新／温泉熱交換器の高効率化／BEMS導入で需要見える化＋デマンド制御。",
    result:
      "Result: 年間電気代 6,000万円 → 5,100万円（▲15%、▲900万円）／契約kW 350→310／投資回収 1.7年（補助金後 0.9年）。",
  },
];

const costFactors = [
  {
    label: "甲府盆地の夏季猛暑による冷房需要",
    detail:
      "甲府盆地は全国一の暑さ記録（40.7℃）を持つ猛暑地帯。夏季冷房需要が極めて大きく、オフィスビル・商業施設・工場で年間電気代の30〜45%を冷房が占める。高効率空調更新の効果が大きい。",
  },
  {
    label: "観光業のシーズン需要変動",
    detail:
      "富士五湖・山中湖・河口湖の観光業はGW・夏休み（特に富士山開山期7〜9月）・冬季の3シーズンピーク。電力需要パターンが特殊で、シーズン契約最適化の余地が大きい。",
  },
  {
    label: "果樹園・ワインの収穫期電力負荷",
    detail:
      "桃（6〜8月）・ぶどう（8〜10月）・すもも（6〜8月）の収穫期に冷蔵庫負荷が急増。勝沼・甲州ワイン醸造業の発酵・貯蔵電力も季節変動大。",
  },
  {
    label: "再エネ100%自治体宣言の影響",
    detail:
      "甲府市・北杜市・南アルプス市等が再エネ100%自治体宣言。地域全体で再エネ調達ニーズが高く、需要家主導型PPA・再エネ証書購入が活発。事業者にも自治体方針に沿った調達が求められる。",
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
    note: "県内では精密機械・観光業・ワイン醸造・果樹冷蔵で採択実績多数。空調更新・LED化で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "山梨県は日照時間が長く（年間2,100時間超で全国上位）、太陽光発電量を確保しやすい。観光業・ワイン業界での導入が活発。",
  },
  {
    name: "山梨県脱炭素・省エネ設備導入補助金",
    target: "県内事業者の高効率設備・再エネ設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "山梨県独自補助。再エネ100%宣言自治体への支援が手厚い。SII補助との併用ルールに留意。",
  },
  {
    name: "甲府市・北杜市の脱炭素補助",
    target: "市内中小事業者の省エネ設備導入",
    rate: "1/3、上限100万〜500万円",
    note: "市町村単位の補助。甲府市『脱炭素経営推進事業』、北杜市『再エネ・省エネ推進事業』など。再エネ100%自治体宣言市は手厚い支援。",
  },
  {
    name: "農林水産省 強い農業づくり交付金（果樹・ワイン向け）",
    target: "産地形成・冷蔵庫・醸造設備の更新",
    rate: "1/2、上限事業規模に応じる",
    note: "山梨県は桃・ぶどう・ワインの産地として産地形成交付金の活用実績多数。果樹冷蔵庫・ワイン醸造設備の更新事業が代表例。",
  },
];

const industryProfile = [
  {
    label: "精密機械・電子部品（甲府市・山梨市・笛吹市）",
    detail:
      "セイコーエプソン関連、キタムラ機械、シチズン時計マニュファクチュアリング等の精密機械、テルモ甲府・東京エレクトロン関連の医療機器・半導体関連。年間使用量200〜2,000万kWh規模。",
  },
  {
    label: "観光業・温泉ホテル（富士五湖・山中湖・河口湖・石和温泉）",
    detail:
      "富士山世界遺産観光、富士五湖・山中湖・河口湖の観光地、石和温泉・湯村温泉の観光ホテル群。シーズン稼働中心。ホテルは年間50〜500万kWh規模。",
  },
  {
    label: "ワイン醸造業・酒造業（勝沼・甲州・北杜）",
    detail:
      "勝沼・甲州市のワイン醸造（メルシャン・サントリー・サドヤワイナリー等）、北杜市のサントリー白州工場（ウイスキー）。発酵・貯蔵電力負荷。年間使用量200万〜2,000万kWh規模。",
  },
  {
    label: "果樹園・農業冷蔵（甲州・笛吹・南アルプス）",
    detail:
      "桃（全国一）・ぶどう（全国一）・すもも・さくらんぼなど果樹生産。CA冷蔵庫・収穫期ピーク負荷。県内に冷蔵庫・選果場が100施設以上。",
  },
  {
    label: "首都圏ベッドタウン商業（甲府・大月）",
    detail:
      "甲府市・大月市の商業施設・物流拠点。首都圏との交通アクセスを活かしたベッドタウンとして商業需要。年間使用量50〜300万kWh規模。",
  },
];

const switchingReality = [
  {
    label: "新電力切替の県内浸透度",
    detail:
      "2024年時点で山梨県内法人の新電力シェアは20〜25%。再エネ100%自治体宣言を行う市町村の事業者では切替・PPA契約が活発。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で県内事業者の多くが市場連動から固定プランへ回帰。観光業のシーズン稼働事業者も市場連動を敬遠。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。新電力との単価差が拡大している。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②夏季ピーク需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100対応の再エネ調達力、の5点が県内では特に重要。",
  },
  {
    label: "再エネ100%自治体での需要家主導型PPA",
    detail:
      "甲府市・北杜市・南アルプス市等の再エネ100%自治体宣言で、地域内事業者の再エネ調達ニーズが高い。県内太陽光・小水力PPAでの再エネ調達が現実的。",
  },
];

const energySaving = [
  {
    label: "甲府盆地の高効率空調更新",
    detail:
      "猛暑地帯の甲府盆地で高効率空調機・全館LED化・BEMS導入の効果が大きい。電力▲25〜35%。SII補助＋県補助＋市町村補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "観光業のシーズン対応省エネ",
    detail:
      "観光業ではシーズン稼働を踏まえた高効率機器更新・BEMS制御・温泉熱の高効率利用で電力▲20〜35%。投資回収 1〜2年。",
  },
  {
    label: "果樹冷蔵庫のCO2冷媒インバータ化",
    detail:
      "桃・ぶどう冷蔵庫でCO2冷媒（自然冷媒）+インバータ式コンプレッサーへの更新で電力▲25〜40%。投資回収 SII＋農水補助活用で 2〜3年。",
  },
  {
    label: "ワイン醸造の発酵・貯蔵省エネ",
    detail:
      "ワイナリーの発酵タンク温度管理・地下貯蔵庫の冷却を高効率化で電力▲15〜25%。SII補助＋県補助の組合せで投資回収 2〜3年。",
  },
  {
    label: "自家消費太陽光（日照長め）",
    detail:
      "山梨県は年間日照時間2,100時間超で全国上位。屋根面積1,500m²以上の事業所で300kW級導入が現実的。冬季も発電量確保しやすく、投資回収 7〜10年（補助金後 4〜6年）。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）の使用量と他季の差を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "県内新電力（やまなしパワー含む）5〜10社からの相見積を取得したか",
  "果樹園・ワイン業の収穫期・発酵期の電力プロファイルを把握しているか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "再エネ100%自治体宣言に対応するためのPPA契約を試算したか",
  "甲府盆地の夏季猛暑対策の高効率空調更新を検討したか",
  "SII補助・山梨県補助・市町村補助・農水補助の併用可否を確認したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
  "観光業のシーズン需要を反映した契約設計をしているか",
];

const faqItems = [
  { question: "山梨県の法人電気代水準は全国比どれくらいですか？", answer: "高圧電力（業務用）の単価ベースで全国平均と同水準ですが、甲府盆地の猛暑による夏季冷房負荷で年間使用量が多くなる業種では年間総額が全国平均より5〜10%高くなります。中規模事業所（年間100万kWh）で年100〜200万円、大規模工場（年間1,000万kWh）で年1,000〜2,000万円の差が生じます。" },
  { question: "甲府盆地の猛暑への対策は？", answer: "①高効率空調機への更新、②全館LED化、③BEMS・デマンド制御、④需要家主導型PPA・屋根太陽光、⑤夏季ピーク特化型契約設計、の5本柱が効果的。投資回収はSII補助＋県補助の組合せで1.5〜2.5年が目安です。" },
  { question: "勝沼・甲州ワイン醸造業の電気代削減ポイントは？", answer: "①発酵タンクの温度管理高効率化、②地下貯蔵庫の冷却高効率化、③瓶詰めライン省エネ化、④ワイン蔵の屋根太陽光自家消費、⑤BEMSによる需要最適化、の5本柱が中心。SII補助＋山梨県補助＋農水補助の組合せで投資回収2〜3年が目安です。" },
  { question: "桃・ぶどう冷蔵庫の電気代削減ポイントは？", answer: "①CO2冷媒インバータ式冷蔵庫への更新（SII＋農水補助活用）、②CA冷蔵の予冷時間最適化、③収穫期シーズン需要を反映した契約設計、④屋根太陽光＋蓄電池の自家消費、の4点が中心。投資回収は補助金活用で2〜3年が目安です。" },
  { question: "東電EPの燃料費調整額の特徴は？", answer: "電源構成でLNG・石炭火力依存度が65%程度のため、燃料費調整額の変動幅は大きいです。2022〜2023年は月最大+8円/kWh、2024〜2025年は+3.0〜+4.5円/kWhレンジで推移。柏崎刈羽原発の再稼働進展で長期的には負担減の可能性ありますが、上限付きプランへの切替を強く推奨します。" },
  { question: "山梨県の再エネ100%自治体宣言は事業者に影響しますか？", answer: "甲府市・北杜市・南アルプス市等の再エネ100%自治体宣言は、地域全体で再エネ調達を促進する政策です。事業者には法的義務はありませんが、自治体方針に沿った再エネ調達（需要家主導型PPA・再エネ証書購入）を行うことで補助金・優遇措置の対象になりやすくなります。県内太陽光・小水力PPAの活用が現実的です。" },
  { question: "山梨県で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、山梨県脱炭素・省エネ設備導入補助金、甲府市・北杜市の市町村補助、農水省の強い農業づくり交付金（果樹・ワイン向け）の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制を確認することが重要です。" },
];

const sourcesItems = [
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "山梨県環境エネルギー部", url: "https://www.pref.yamanashi.jp/" },
  { name: "経済産業省 関東経済産業局", url: "https://www.kanto.meti.go.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
];

export default function YamanashiBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/yamanashi-business-electricity-cost"
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
          <span className="text-slate-800">山梨県の法人電気料金</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            山梨県の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            山梨県は東京電力エリアで、甲府盆地の精密機械工業、富士五湖・山中湖の観光業、勝沼・甲州のワイン産業、全国一の桃・ぶどう果樹園など特色ある産業集積を持ちます。甲府盆地の猛暑による夏季冷房負荷、再エネ100%自治体宣言の活発化など県固有の論点があります。本ページでは県内法人の電気代水準、業種別影響度、契約見直しの具体策、補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-20" updatedAt="2026-05-20" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京電力エリアにおける山梨県の電気代水準と全国比較</li>
              <li>精密機械工場・桃ぶどう冷蔵庫・河口湖ホテルのBefore/After削減事例</li>
              <li>甲府盆地猛暑・観光業シーズン・ワイン醸造など県固有の論点</li>
              <li>SII・山梨県補助・市町村補助・農水補助の組合せ活用パターン</li>
              <li>山梨県向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              山梨県の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県は東電エリアで、甲府盆地・峡東・峡南・郡内の地域に分かれます。内陸性気候の寒暖両極、精密機械・観光業・ワイン産業の3本柱、再エネ100%自治体宣言の活発化が県内電力消費の特徴を形成します。
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
              山梨県では2024年時点で9社前後の新電力が法人向け高圧で新規受付中です。全国系、通信流通系、地域密着型、再エネ特化型の4カテゴリが主軸となります。
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
              山梨県の電気料金水準と全国比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東電エリアの単価は全国平均と同水準ですが、甲府盆地の猛暑による夏季冷房負荷で年間使用量が多くなる業種では年間総額が高くなります。実質単価（電力量料金+燃料費調整額+再エネ賦課金）ベースで比較することが重要です。
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
              業種別影響度3件 — 精密機械・桃ぶどう冷蔵・河口湖ホテル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表パターンです。
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
              山梨県固有の電気代上昇要因 — 甲府盆地猛暑・観光業・ワイン・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県の電気代上昇は、内陸性気候と特色ある産業集積が複合的に重なります。それぞれの影響額を定量把握することで、契約見直しと省エネ投資の優先順位付けが可能になります。
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
              山梨県の補助金・優遇制度 — SII・県独自・市町村・農水補助
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県では国補助（SII等）に加え、県独自補助、再エネ100%自治体（甲府市・北杜市等）の補助、農水省の果樹・ワイン向け補助が組合せ可能です。設備投資のタイミングを補助金スケジュールに合わせることで投資回収を1〜3年短縮できます。
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
              山梨県の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県の事業者構成は、精密機械・電子部品、観光業・温泉ホテル、ワイン醸造業・酒造業、果樹園・農業冷蔵、首都圏ベッドタウン商業の5層構造です。地域ごとに電力消費プロファイルが異なります。
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
              山梨県の新電力シェアは2024年時点で20〜25%。再エネ100%自治体宣言を行う市町村の事業者では切替・PPA契約が活発化しています。
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
              山梨県の省エネは『甲府盆地の高効率空調更新』『観光業のシーズン対応省エネ』『果樹冷蔵庫CO2冷媒化』『ワイン醸造の発酵・貯蔵省エネ』『自家消費太陽光（日照長め）』の5軸が主力。猛暑・観光・果樹・ワインの特性を理解した打ち手が重要です。
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
              山梨県向け契約見直しチェックリスト（12項目）
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
              シミュレーターで山梨県の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              山梨県は甲府盆地猛暑・観光業シーズン・ワイン醸造・果樹冷蔵と多面的特性を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・省エネ投資・PPA活用のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
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
            <GlossaryLinks currentSlug="yamanashi-business-electricity-cost" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリアの電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電管内の料金体系・改定動向の詳細。" },
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金", description: "近隣・首都経済集積の東京都の事情。" },
              { href: "/kanagawa-business-electricity-cost", title: "神奈川県の法人電気料金", description: "近隣・京浜工業地帯の神奈川県の事情。" },
              { href: "/nagano-business-electricity-cost", title: "長野県の法人電気料金", description: "隣接県・精密機械と観光業の長野県の事情。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "観光業・果樹冷蔵が市場連動を避ける理由。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "富士五湖・河口湖リゾートホテル特有のコスト構造。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "桃・ぶどう冷蔵庫の削減ポイント。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "甲府精密機械工場の全国比較。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "日照長めの山梨県でのオンサイト・オフサイトPPA活用。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "精密機械・観光業・ワイン醸造の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="山梨県の自社条件で電気代リスクを試算する"
            description="甲府盆地猛暑・観光業シーズン・ワイン醸造・果樹冷蔵など山梨県固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・省エネ投資・PPAのROIもあわせて確認できます。"
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
            heading="山梨県の電力契約見直し、専門家に相談しませんか？"
            description="精密機械・観光業・ワイン醸造・果樹冷蔵の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
