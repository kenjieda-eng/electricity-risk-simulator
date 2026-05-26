import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "大田区の法人電気料金完全ガイド｜町工場集積・羽田空港物流・京浜工業地帯";
const pageDescription =
  "大田区の法人電気料金を区固有の視点で解説。東京最大の町工場集積（金属加工・精密機械・部品製造、約3,500社）、羽田空港物流DC、京浜島・城南島の湾岸工業、蒲田駅前商業まで、ものづくりのまちの契約見直し・補助金活用を実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "大田区 法人電気料金",
    "町工場 電気代 大田区",
    "羽田空港 物流 電力",
    "京浜工業地帯 電気料金",
    "蒲田 中小企業 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ota-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ota-ku-business-electricity-cost",
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
    label: "大田区の事業者集積と電力需要構造",
    detail:
      "大田区は東京電力エナジーパートナーの供給エリアで、東京最大の町工場集積地（約3,500社の中小製造業）。区内年間電力需要は推計15〜18億kWh規模と推計。中小製造業（金属加工・精密機械・部品製造）、羽田空港物流、京浜工業地帯（京浜島・城南島・昭和島）、蒲田駅前商業が並列する複合構造。",
  },
  {
    label: "ものづくりのまち大田区と町工場集積",
    detail:
      "大田区は『ものづくりのまち』として国内外で知られ、糀谷・大鳥居・蒲田周辺に金属加工・プレス・金型・精密機械・部品製造の中小製造業が密集。1社あたり年間使用量5〜100万kWh規模の高圧50〜250kW契約が中心。後継者問題と省エネ投資余力の課題も。",
  },
  {
    label: "羽田空港拡張と物流DC需要拡大",
    detail:
      "羽田空港（東京国際空港）の貨物便拡大と国際線旅客拡大に伴い、空港周辺の物流DC・冷凍冷蔵倉庫・国際フォワーダー拠点が急増。FedEx・DHL・ヤマトHD等の大型物流拠点が高圧500〜3,000kW級で契約。24時間稼働で負荷率高い。",
  },
  {
    label: "京浜島・城南島・昭和島の湾岸工業",
    detail:
      "京浜島・城南島・昭和島は東京港埋立地で、中堅製造業・倉庫・冷凍冷蔵施設・廃棄物処理施設が集積。京浜工業地帯（神奈川県川崎市・横浜市と一体）の北端に位置し、年間使用量100〜1,000万kWh規模の高圧契約が中心。",
  },
  {
    label: "蒲田駅前商業と大森オフィス",
    detail:
      "蒲田駅前は東口・西口に商店街・駅ビル・中規模商業施設が集積。大森駅周辺は中規模オフィスビルとホテル。年間使用量100〜2,000万kWh規模の高圧契約が中心。中小事業者の高圧契約は標準メニュー継続が多く、切替余地が大きい。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "旧一般電気事業者",
    detail:
      "大田区内シェア最大。中小製造業・町工場の標準メニュー継続率が高い区の一つ。羽田空港物流の大口契約は個別交渉が中心。蒲田・大森商業エリアでも標準メニュー利用が依然多い。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "大田区の中堅製造業・物流DCで採用実績多数。固定単価3〜5年プランで東電EP標準比2〜4円/kWh安い水準も。蒲田の商業施設・オフィスでも切替実績増加中。",
  },
  {
    name: "ミツウロコでんき・ハルエネ・グランデータ",
    role: "中小事業者向け新電力",
    detail:
      "大田区の町工場・中小事業者向けで実績。低圧電力・低圧電灯から高圧50〜250kW級まで対応。中小製造業の電力契約相談に応じる営業体制を強化。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系は熱併設の大型施設で強み（電気＋ガス複合契約）。東急パワーサプライは池上線・多摩川線沿線の中小事業者・店舗で実績あり。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化）",
    role: "再エネ特化型新電力",
    detail:
      "大田区産業振興協会のCO2削減推進と連動して、町工場のSDGs対応・取引先要請（自動車・電機OEM向けScope3対応）に向けた再エネ切替の相談が増加中。",
  },
  {
    name: "新規受付状況（2025年10月時点）",
    role: "市場動向",
    detail:
      "都内法人向け高圧で新規受付中の新電力は15社前後。低圧電力では大田区中小事業者向けの提案が活発。最新の受付可否は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』は電力量料金18〜22円/kWh+燃料費調整額（2024〜2025年+3.0〜+4.5円/kWh）+再エネ賦課金（2025年度3.98円/kWh）で、実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数。",
  },
  {
    label: "中小製造業（町工場）の標準メニュー実態",
    detail:
      "大田区の町工場は高圧50〜250kW級が中心で、標準メニュー継続率が23区内でも高い。経営者の電力契約見直し優先順位が低く、新電力切替の潜在余地が大きい。年間電気代100〜500万円規模でも切替で年5〜20万円削減事例多数。",
  },
  {
    label: "低圧電力・低圧電灯（小規模事業所）",
    detail:
      "低圧電力（動力）は10〜13円/kWh+調整項目、低圧電灯（事務所）は17〜20円/kWh。蒲田・大森の小規模オフィス・店舗、糀谷の小規模町工場で利用。年間50〜200万円規模の電気代でも切替メリットが出る。",
  },
  {
    label: "羽田空港物流DC・冷凍冷蔵倉庫の契約パターン",
    detail:
      "羽田空港周辺・京浜島の物流DC・冷凍冷蔵倉庫は24時間稼働で負荷率が高く、新電力との競争入札で単価優遇を獲得しやすい。屋根太陽光の導入と組合せで実質単価▲15〜25%が可能。",
  },
];

const industryImpact = [
  {
    title: "業種1: 糀谷の精密機械町工場（高圧 180kW、年間 95万kWh）",
    before:
      "Before: 糀谷地区の精密金属加工A社（工場延床1,200m²、CNC旋盤・マシニングセンター12台、従業員18名）。東電EP高圧標準メニュー継続で2023年夏には月最大32万円の請求。年間電気代 285万円。デマンド管理は手動運用、コンプレッサーは旧式。",
    after:
      "After: 全国系新電力の固定3年プランに切替（標準比▲3.2円/kWh）／コンプレッサーをインバータ式に更新（SII補助1/2活用、投資180万円）／工場LED化（東京都・大田区補助併用、投資85万円）／デマンドコントローラ導入。",
    result:
      "Result: 年間電気代 285万円 → 218万円（▲23%、▲67万円）／契約kW 180→140／投資回収 補助金後 1.7年／CO2排出 ▲28%／Scope3対応で自動車OEM向け取引強化。",
  },
  {
    title: "業種2: 羽田空港周辺の国際物流DC（高圧 1,600kW、年間 1,050万kWh）",
    before:
      "Before: 羽田空港隣接地の国際物流B社（延床18,000m²、24時間稼働、医薬品・電子部品の温度管理輸送）。冷凍冷蔵設備の電力負荷が60%。市場連動プラン継続で2022年12月〜2023年2月は月最大1,750万円の請求。年間電気代 3.0億円。",
    after:
      "After: 全国系新電力の固定3年プランに切替／冷凍機をインバータ式に更新（SII補助1/2活用、投資2,500万円）／屋根面積12,000m²に自家消費太陽光1,200kW＋蓄電池700kWh導入（経産省・東京都補助併用）／空港勤務シフトに合わせたデマンド最適化。",
    result:
      "Result: 年間電気代 3.0億円 → 2.28億円（▲24%、▲7,200万円）／契約kW 1,600→1,350／投資回収 補助金後 2.3年／自家消費比率 28%。",
  },
  {
    title: "業種3: 蒲田駅前の中規模商業ビル（高圧 480kW、年間 240万kWh）",
    before:
      "Before: 蒲田駅東口の中規模商業ビルC（地下1階・地上7階、テナント30店、延床5,500m²）。冷暖房・照明・エレベーター・テナント供給。東電EP高圧標準メニュー継続で2023年夏は月最大780万円の請求。年間電気代 6,700万円。",
    after:
      "After: 全国系新電力との競争入札で高圧固定3年契約（標準比▲2.8円/kWh）／全館LED化（投資480万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御。",
    result:
      "Result: 年間電気代 6,700万円 → 5,360万円（▲20%、▲1,340万円）／契約kW 480→400／投資回収 補助金後 2.0年／東京都キャップ&トレード制度の削減義務達成。",
  },
];

const costFactors = [
  {
    label: "町工場の標準メニュー継続と切替遅れ",
    detail:
      "大田区の中小製造業は経営者の電力契約見直し優先順位が低く、東電EP標準メニュー継続率が高い。新電力切替で年5〜30万円削減できる余地が放置されているケース多数。区産業振興協会の支援を活用した一括見直しが有効。",
  },
  {
    label: "羽田空港拡張と物流DC電力需要急増",
    detail:
      "羽田空港の貨物便拡大・国際線拡大に伴い、空港周辺の物流DC・冷凍冷蔵倉庫が急増。特別高圧契約の新規・更新案件が増えるため、早期に新電力との競争入札ノウハウを蓄積した事業者が有利。",
  },
  {
    label: "京浜工業地帯の自家発電比率と系統依存",
    detail:
      "京浜島・城南島の中堅製造業の一部はコジェネ自家発電を保有するが、近年は燃料コスト高騰でコジェネ運転を縮小し系統依存度を高めている事例も。電力契約と自家発電の併用最適化が論点。",
  },
  {
    label: "Scope3対応で取引先からの再エネ要請増",
    detail:
      "町工場は自動車・電機・航空機OEM向けサプライヤーが多く、取引先のScope3排出量算定・削減対応の影響を受ける。再エネ電源契約・トラッキング付証書購入で取引継続に寄与。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後。年間100万kWh使用の町工場で年間400万円規模の負担。減免制度の対象は限定的だが、適用可能性のある事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "大田区の町工場でコンプレッサー更新・LED化で採択実績多数。羽田物流の冷凍機更新でも安定採択。複数年計画申請も有効。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "京浜島・城南島の倉庫、羽田周辺物流DCで屋根太陽光と組合せ可能。町工場は屋根面積が小さいケース多くオフサイトPPAも選択肢。",
  },
  {
    name: "東京都 中小規模事業所向け省エネ設備導入補助",
    target: "中小規模事業所のCO2削減設備（空調・LED・BEMS等）",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都クール・ネット東京経由で公募。SII補助との併用可能なケースあり。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "蒲田・大森の商業ビル新築・大規模改修で活用可能。ZEB Ready以上の認証取得が条件。",
  },
  {
    name: "大田区 中小企業エネルギー対策費補助",
    target: "区内中小企業の省エネ機器・再エネ設備導入",
    rate: "1/3〜1/2、上限50〜200万円（年度予算枠あり）",
    note: "大田区独自の補助制度。LED・高効率空調・コンプレッサー・太陽光発電・蓄電池が対象。区内中小企業要件あり。大田区産業振興協会の伴走支援も活用可能。詳細は大田区産業振興課で要確認。",
  },
];

const industryProfile = [
  {
    label: "中小製造業・町工場（糀谷・大鳥居・蒲田）",
    detail:
      "東京最大の町工場集積地。金属加工・プレス・金型・精密機械・部品製造の約3,500社が密集。年間使用量5〜100万kWh規模の高圧50〜250kW契約が中心。後継者問題と省エネ投資余力の課題。",
  },
  {
    label: "羽田空港物流・国際フォワーダー",
    detail:
      "羽田空港隣接地の物流DC、国際フォワーダー（FedEx・DHL・ヤマトHD・佐川急便）の大型物流拠点。年間使用量500〜3,000万kWh規模の高圧・特別高圧契約。24時間稼働で負荷率高い。",
  },
  {
    label: "京浜島・城南島・昭和島の湾岸工業",
    detail:
      "東京港埋立地の中堅製造業・倉庫・冷凍冷蔵施設・廃棄物処理施設。年間使用量100〜1,000万kWh規模の高圧契約が中心。京浜工業地帯（神奈川県側と一体）の北端。",
  },
  {
    label: "蒲田駅前商業・大森オフィス",
    detail:
      "蒲田駅前商店街・駅ビル・グランデュオ蒲田、大森駅周辺の中規模オフィス・ホテル。年間使用量100〜2,000万kWh規模の高圧契約が中心。",
  },
  {
    label: "田園調布・洗足池の小商業・住宅地周辺",
    detail:
      "田園調布・洗足池周辺の小規模商業・診療所・学習塾等。低圧電力・低圧電灯が中心。年間使用量50万kWh以下の小規模事業所多数。",
  },
];

const switchingReality = [
  {
    label: "大田区内の新電力切替浸透度",
    detail:
      "2024年時点で大田区法人の新電力シェアは推計25〜30%。23区内では中程度。中小製造業・町工場の標準メニュー継続率が高く、新電力切替の潜在余地が大きい。羽田物流・京浜島工業では切替進行中。",
  },
  {
    label: "町工場の電力契約見直し優先順位の低さ",
    detail:
      "町工場の経営者は電力契約見直しの優先順位が低く、東電EP標準メニュー継続が多い。区産業振興協会・東商大田支部の啓発で見直し相談は増加傾向だが、まだ余地大。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の優先復旧体制・既存契約の手続コスト不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。年間100万kWh超の事業者では切替メリットが明確。",
  },
  {
    label: "新電力選定の大田区固有ポイント",
    detail:
      "①中小製造業向けの細やかな営業対応力、②羽田物流の24時間稼働対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の上限有無、⑤Scope3対応の再エネメニュー、の5点が特に重要。",
  },
  {
    label: "Scope3対応で再エネ電源契約のニーズ拡大",
    detail:
      "町工場は自動車・電機OEM向けサプライヤーが多く、取引先のScope3対応要請を受けて再エネ電源契約・トラッキング付証書購入のニーズが拡大中。RE100は難しくとも部分的な再エネ調達で取引継続に寄与。",
  },
];

const energySaving = [
  {
    label: "町工場のコンプレッサー・LED・空調更新",
    detail:
      "町工場のコンプレッサー（消費電力20〜40%占有）をインバータ式に更新、工場LED化、空調更新で電力▲20〜30%。SII補助＋都補助＋大田区補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "羽田物流・冷凍冷蔵倉庫の電力最適化",
    detail:
      "冷凍機のインバータ化、断熱強化、デマンドピーク制御、自家消費太陽光＋蓄電池で電力▲15〜25%。SII補助の冷凍冷蔵設備区分は採択率が高い。",
  },
  {
    label: "町工場の屋根太陽光・自家消費",
    detail:
      "町工場の屋根（200〜2,000m²）に自家消費太陽光30〜200kW＋蓄電池導入で日中の電力▲30〜50%、年間電気代▲10〜20%。SII・東京都・大田区の補助併用で投資回収2〜4年。",
  },
  {
    label: "区産業振興協会の伴走支援活用",
    detail:
      "大田区産業振興協会（PIO）は中小企業の省エネ診断・補助金申請伴走支援を実施。診断費用が低額または無料で、町工場の見える化に最適。BEMS・FEMS導入の入口として活用価値大。",
  },
  {
    label: "Scope3対応の段階的な再エネ調達",
    detail:
      "全量RE100が難しい中小製造業でも、新電力経由の再エネメニュー・トラッキング付証書購入・部分的なPPA契約で段階的な再エネ調達が可能。取引先のScope3対応要請に応じて柔軟に設計。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "町工場・中小製造業は東電EP標準メニュー継続か新電力切替済みか確認したか",
  "コンプレッサーがインバータ式か旧式かを確認したか（更新でデマンド▲20〜40%可能）",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "取引先のScope3対応要請に応じた再エネ電源契約を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『キャップ&トレード制度』『建築物環境計画書制度』の対象事業所か確認したか",
  "屋根面積を活かした自家消費太陽光の導入可能性を試算したか",
  "SII補助・東京都補助・大田区補助の併用可否を確認したか",
  "大田区産業振興協会（PIO）の省エネ診断・伴走支援を活用したか",
  "羽田空港拡張・近隣物流DC新設の電力需要動向を把握しているか",
];

const faqItems = [
  { question: "大田区の町工場で電気代を削減するポイントは？", answer: "①新電力切替（標準比▲2〜4円/kWh）、②コンプレッサーのインバータ更新（消費電力▲20〜40%）、③工場LED化、④デマンドコントローラ導入、⑤屋根太陽光の自家消費、の5本柱。SII補助＋東京都補助＋大田区補助の組合せで投資回収1.5〜2.5年、年間電気代▲20〜25%が可能なレンジ。大田区産業振興協会（PIO）の伴走支援も活用価値大です。" },
  { question: "羽田空港物流DCの電気代対策は？", answer: "冷凍機のインバータ化・断熱強化・デマンドピーク制御が基本。屋根面積が大きい物流倉庫では自家消費太陽光＋蓄電池導入で電気代▲15〜25%＋自家消費比率20%超が可能。空港勤務シフトに合わせたデマンド最適化（24時間稼働の中でも負荷ピーク時間帯の制御）が重要なポイントです。" },
  { question: "町工場が新電力に切り替えるメリットは？", answer: "東電EP標準メニュー比で2〜4円/kWh安い水準が一般的。年間電気代100〜500万円規模の町工場でも年5〜30万円の削減が見込めます。固定3年プランで燃料費調整額の変動リスクからも解放。Scope3対応の取引先要請に応じた再エネメニュー選択肢もあるため、取引継続にも寄与します。" },
  { question: "Scope3対応で何ができますか？", answer: "全量RE100が難しい中小製造業でも、①新電力経由の再エネメニュー、②トラッキング付証書購入、③部分的なPPA契約、④高効率設備更新によるCO2削減、で段階的にScope3対応可能。自動車・電機OEM向けサプライヤーは取引先要請の度合いに応じて柔軟に設計するのが現実的です。" },
  { question: "大田区独自の補助制度はありますか？", answer: "大田区中小企業エネルギー対策費補助（LED・空調・コンプレッサー・太陽光・蓄電池等が対象、補助率1/3〜1/2、上限50〜200万円）が代表的。年度予算枠があるため早期申請が有利。大田区産業振興協会（PIO）の伴走支援とセットで活用するのが効果的。SII補助・東京都補助との併用可否は事業内容により異なります。" },
  { question: "京浜島・城南島の中堅製造業の電気代対策は？", answer: "高圧500〜2,000kW級の中堅製造業では新電力との競争入札で単価優遇獲得、コジェネ自家発電との運転最適化、屋根太陽光導入が基本。京浜工業地帯（神奈川県川崎市・横浜市と一体）の動向も注視。年間電気代▲15〜25%が可能なレンジです。" },
  { question: "大田区産業振興協会（PIO）の支援はどう活用しますか？", answer: "PIOは中小企業の省エネ診断（低額・一部無料）、補助金申請伴走支援、技術相談等を実施。町工場の見える化（電力使用パターン分析）の入口として活用価値大。BEMS・FEMS導入の前段階としても有効。詳細はPIOの省エネ・環境支援窓口に直接問い合わせを推奨します。" },
  { question: "大田区で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、東京都中小規模事業所向け省エネ設備導入補助、東京都ZEB・ZEH支援事業、大田区中小企業エネルギー対策費補助の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。クール・ネット東京と大田区産業振興課・PIOの最新公募情報を併せて確認するのが効果的です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "大田区 産業振興（中小企業支援）", url: "https://www.city.ota.tokyo.jp/" },
  { name: "公益財団法人 大田区産業振興協会（PIO）", url: "https://www.pio-ota.jp/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "クール・ネット東京（東京都地球温暖化防止活動推進センター）", url: "https://www.tokyo-co2down.jp/" },
];

export default function OtaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ota-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">大田区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            大田区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            大田区は『ものづくりのまち』として知られる東京最大の町工場集積地（約3,500社の中小製造業）。糀谷・大鳥居・蒲田の金属加工・精密機械、羽田空港物流DC、京浜島・城南島の湾岸工業、蒲田駅前商業と多面的な事業者集積を持ちます。本ページでは町工場の標準メニュー切替余地、羽田物流の24時間稼働対応、Scope3対応の再エネ調達、契約見直し・補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>大田区の町工場・物流・湾岸工業・商業の事業者プロファイル別電気代水準</li>
              <li>糀谷精密機械・羽田国際物流・蒲田商業ビルのBefore/After削減事例</li>
              <li>町工場のScope3対応と段階的再エネ調達の現実解</li>
              <li>SII・東京都・大田区補助＋PIO伴走支援の組合せ活用パターン</li>
              <li>大田区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大田区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区は東京最大の町工場集積地（約3,500社）に加え、羽田空港物流、京浜島・城南島の湾岸工業、蒲田駅前商業が並列する複合エリア。中小製造業の標準メニュー継続率が高く、新電力切替の潜在余地が大きい区の一つです。
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
              東京都全体の電力事情は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金完全ガイド
              </Link>
              、町工場の論点は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                工場電気代ベンチマーク
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大田区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区では東電EPに加え、全国系・通信流通系・地域ガス系・再エネ特化型・中小事業者向けの新電力15社前後が法人向け高圧で新規受付中。中小製造業向けの細やかな営業対応力を持つ新電力が増加中です。
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
              大田区の電気料金水準と契約パターン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区は中小製造業・町工場の標準メニュー継続率が高く、実質単価は23区内でも高めのグループに留まっています。新電力切替で2〜4円/kWh削減余地があり、年間電気代100〜500万円規模の町工場でも年5〜30万円の削減効果が見込めます。
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
              業種別影響度3件 — 糀谷町工場・羽田国際物流・蒲田商業ビル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表シナリオです。
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
              、物流DC見直しは{" "}
              <Link href="/logistics-warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              大田区固有の電気代上昇要因 — 標準メニュー継続・羽田拡張・Scope3・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区の電気代上昇は、町工場の標準メニュー継続による高単価放置、羽田空港拡張に伴う物流DC需要急増、取引先からのScope3対応要請、再エネ賦課金上昇など、区固有の要因が複合的に重なります。
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
              大田区の補助金・優遇制度 — SII・東京都・大田区独自補助＋PIO伴走支援
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区では国補助（SII等）、東京都補助、大田区独自補助の3層構造に加え、大田区産業振興協会（PIO）の伴走支援が活用できます。町工場の省エネ診断・補助金申請の伴走で投資回収を1〜2年短縮できます。
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
              大田区の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区の事業者構成は、中小製造業・町工場、羽田空港物流、京浜島・城南島の湾岸工業、蒲田駅前商業、田園調布周辺の小商業の5層構造です。各層で電力需要プロファイルと最適契約戦略が異なります。
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
              大田区の新電力シェアは2024年時点で推計25〜30%と23区内では中程度。中小製造業・町工場の標準メニュー継続率が高く、新電力切替の潜在余地が大きい区です。羽田物流・京浜島工業では切替が進行中。
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
              大田区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区の省エネは『町工場のコンプレッサー・LED・空調更新』『羽田物流の冷凍冷蔵電力最適化』『町工場の屋根太陽光・自家消費』『PIO伴走支援活用』『Scope3対応の段階的再エネ調達』の5軸が主力です。
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
              大田区向け契約見直しチェックリスト（12項目）
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
              シミュレーターで大田区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大田区は町工場・羽田物流・京浜島工業など区固有の事業者構成を持ちます。シミュレーターで自社条件における上振れ幅を試算し、新電力切替・コンプレッサー更新・屋根太陽光・Scope3対応の段階的再エネ調達のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した20〜24%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-27"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "東京都全体の電気料金事情と区横断の論点。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "市区町村別の電気料金事情をハブから探す。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金", description: "丸の内・大手町の特別高圧オフィス集積。" },
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "銀座・日本橋の商業・オフィス集積。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "六本木・赤坂の特別高圧ビルとDHC。" },
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "新宿副都心の超高層オフィス群。" },
              { href: "/shibuya-ku-business-electricity-cost", title: "渋谷区の法人電気料金", description: "渋谷・原宿のIT・商業集積。" },
              { href: "/shinagawa-ku-business-electricity-cost", title: "品川区の法人電気料金", description: "大崎・五反田・天王洲の特別高圧オフィス。" },
              { href: "/koto-ku-business-electricity-cost", title: "江東区の法人電気料金", description: "湾岸データセンター集積と豊洲再開発。" },
              { href: "/setagaya-ku-business-electricity-cost", title: "世田谷区の法人電気料金", description: "住宅地と中小オフィスの混在エリア。" },
              { href: "/sumida-ku-business-electricity-cost", title: "墨田区の法人電気料金", description: "中小製造業とスカイツリー観光。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "製造・印刷業集積と高島平物流。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "町工場・中小製造業の全国比較。" },
              { href: "/logistics-warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "羽田物流・京浜島の主力打ち手。" },
              { href: "/scope3-supply-chain-renewable-procurement", title: "Scope3対応の再エネ調達", description: "取引先要請に応じた段階的調達。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "中小製造業の選択肢。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "町工場の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
            ]}
          />

          <ContentCta
            heading="大田区の自社条件で電気代リスクを試算する"
            description="町工場・羽田物流・京浜島工業・蒲田商業など大田区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。新電力切替・コンプレッサー更新・屋根太陽光・Scope3対応再エネ調達のROIもあわせて確認できます。"
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
            heading="大田区の電力契約見直し、専門家に相談しませんか？"
            description="町工場の標準メニュー切替、羽田物流の冷凍冷蔵電力最適化、取引先のScope3対応要請への再エネ調達など、大田区事業者特有の論点を中立的立場で整理します。エネルギー情報センターの初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
