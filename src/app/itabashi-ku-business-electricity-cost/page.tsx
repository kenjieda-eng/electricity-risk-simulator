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
  "板橋区の法人電気料金完全ガイド｜光学産業・大日本印刷板橋・高島平物流";
const pageDescription =
  "板橋区の法人電気料金を区固有の視点で解説。光学産業のまち（オリンパス・ニコン関連企業集積）、大日本印刷板橋工場ほか印刷業集積、高島平・成増の大型物流拠点、板橋・大山の大型商店街まで、約2,000社の中小製造業の契約見直し・補助金活用を実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "板橋区 法人電気料金",
    "板橋区 光学産業 精密機器",
    "大日本印刷 板橋 電気代",
    "高島平 物流 倉庫 電力",
    "板橋区 中小企業 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/itabashi-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/itabashi-ku-business-electricity-cost",
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
    label: "板橋区の事業者集積と電力需要構造",
    detail:
      "板橋区は東京電力エナジーパートナーの供給エリアで、約2,000社の中小製造業（精密機械・光学機器・印刷）と高島平・成増の大型物流拠点、板橋・大山の大型商店街が並列する複合構造。区内年間電力需要は推計10〜12億kWh規模と推計。光学産業の伝統と印刷業集積が産業の柱。",
  },
  {
    label: "光学産業のまち板橋（オリンパス・ニコン関連）",
    detail:
      "板橋区はかつて『光学産業のまち』として知られ、オリンパス・ニコン・キヤノン等の関連企業（部品・組立・検査）が板橋本町・蓮根・志村周辺に集積。現在も精密機器・光学関連の中小製造業が多数活動。年間使用量100〜800万kWh規模の高圧100〜500kW契約が中心。",
  },
  {
    label: "大日本印刷板橋工場ほか印刷業集積",
    detail:
      "板橋区は大日本印刷（DNP）板橋工場を筆頭に、印刷業の集積地。志村・蓮根周辺に大型印刷工場、中小印刷業（製本・加工）が多数。印刷機の電力負荷が大きく、24時間稼働の事業者も多い。特別高圧契約のDNP関連と高圧500kW級の中堅印刷業が併存。",
  },
  {
    label: "高島平・成増の大型物流拠点",
    detail:
      "高島平・成増・東武練馬周辺は埼玉県境に近く、東京西北部の物流拠点として大型倉庫・3PL事業者・冷凍冷蔵施設が集積。高圧500〜2,000kW級の物流DC契約が中心。e-commerce対応の物流DC新設も増加。",
  },
  {
    label: "板橋・大山の大型商店街と中小商業",
    detail:
      "板橋駅前・大山駅前のハッピーロード大山・遊座大山等の大型商店街が活発。中小商業・サービス業の集積。年間使用量50〜500万kWh規模の高圧契約が中心。商店街単位の省エネ・LED化推進事例も。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "旧一般電気事業者",
    detail:
      "板橋区内シェア最大。中小製造業・印刷業の標準メニュー継続率が高い区の一つ。大日本印刷板橋工場等の大型契約は個別交渉が中心。商店街・中小商業でも標準メニュー利用が依然多い。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "板橋区の中堅製造業・印刷業・物流DCで採用実績多数。固定単価3〜5年プランで東電EP標準比2〜4円/kWh安い水準も。高島平の物流DCでも切替実績増加中。",
  },
  {
    name: "ミツウロコでんき・ハルエネ・グランデータ",
    role: "中小事業者向け新電力",
    detail:
      "板橋区の町工場・中小事業者・商店街向けで実績。低圧電力・低圧電灯から高圧50〜300kW級まで対応。光学関連・印刷関連の中小事業者の電力契約相談に応じる営業体制。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系は熱併設の大型施設で強み（電気＋ガス複合契約）。東武東上線・都営三田線沿線の中小事業者・商業施設で実績あり。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化）",
    role: "再エネ特化型新電力",
    detail:
      "板橋区エコポリス推進活動と連動して、製造業のSDGs対応・取引先要請（光学・印刷OEM向けScope3対応）に向けた再エネ切替の相談が増加中。",
  },
  {
    name: "新規受付状況（2025年10月時点）",
    role: "市場動向",
    detail:
      "都内法人向け高圧で新規受付中の新電力は15社前後。低圧電力では板橋区中小事業者向けの提案が活発。最新の受付可否は新電力ネット等で要確認。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』は電力量料金18〜22円/kWh+燃料費調整額（2024〜2025年+3.0〜+4.5円/kWh）+再エネ賦課金（2025年度3.98円/kWh）で、実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数。",
  },
  {
    label: "中小製造業（光学・印刷）の標準メニュー実態",
    detail:
      "板橋区の光学関連・印刷業中小事業者は高圧100〜500kW級が中心で、標準メニュー継続率が23区内でも高い。経営者の電力契約見直し優先順位が低く、新電力切替の潜在余地が大きい。年間電気代200〜800万円規模でも切替で年10〜40万円削減事例多数。",
  },
  {
    label: "大型印刷工場（特別高圧）の契約パターン",
    detail:
      "大日本印刷板橋工場等の大型印刷工場は特別高圧2,000kW超の個別交渉契約。標準メニュー比1〜2円/kWh安い水準を獲得する例が一般化。新電力との競争入札がほぼ標準。",
  },
  {
    label: "物流DC（高島平・成増）の契約パターン",
    detail:
      "高島平・成増の物流DC・冷凍冷蔵倉庫は24時間稼働で負荷率が高く、新電力との競争入札で単価優遇を獲得しやすい。屋根太陽光の導入と組合せで実質単価▲15〜25%が可能。",
  },
];

const industryImpact = [
  {
    title: "業種1: 板橋本町の光学部品町工場（高圧 220kW、年間 120万kWh）",
    before:
      "Before: 板橋本町地区の光学部品加工A社（工場延床1,500m²、精密加工機・検査装置中心、従業員22名）。クリーンルーム空調が電力負荷の40%。東電EP高圧標準メニュー継続で2023年夏には月最大38万円の請求。年間電気代 360万円。",
    after:
      "After: 中小事業者向け新電力の固定3年プランに切替（標準比▲3.0円/kWh）／クリーンルーム空調を可変風量制御に変更（SII補助1/2活用、投資220万円）／工場LED化（東京都・板橋区補助併用、投資90万円）／デマンドコントローラ導入。",
    result:
      "Result: 年間電気代 360万円 → 278万円（▲23%、▲82万円）／契約kW 220→180／投資回収 補助金後 1.9年／CO2排出 ▲27%／光学OEMのScope3対応で取引強化。",
  },
  {
    title: "業種2: 志村の中堅印刷工場（特別高圧 2,400kW、年間 1,700万kWh）",
    before:
      "Before: 志村地区の中堅印刷B社（延床14,000m²、24時間稼働、商業印刷中心）。印刷機・乾燥機・空調の電力負荷が大きい。市場連動プラン継続で2022年12月〜2023年2月は月最大3,200万円の請求。年間電気代 4.76億円。",
    after:
      "After: 全国系新電力との競争入札で特別高圧固定5年契約（標準比▲1.8円/kWh）／印刷機のインバータ更新・乾燥機の高効率化（SII補助1/2活用、投資3,500万円）／工場LED化／屋根面積8,000m²に自家消費太陽光800kW＋蓄電池導入（経産省・東京都補助併用）。",
    result:
      "Result: 年間電気代 4.76億円 → 3.62億円（▲24%、▲1.14億円）／契約kW 2,400→2,050／投資回収 補助金後 2.4年／自家消費比率 23%／東京都キャップ&トレード制度の削減義務達成。",
  },
  {
    title: "業種3: 高島平の物流DC（高圧 1,500kW、年間 950万kWh）",
    before:
      "Before: 高島平地区の物流C社DC（延床16,000m²、24時間稼働、e-commerce対応3PL）。冷凍冷蔵倉庫＋常温倉庫複合。市場連動プラン継続で2022年12月〜2023年2月は月最大1,720万円の請求。年間電気代 2.85億円。",
    after:
      "After: 全国系新電力の固定3年プランに切替／冷凍機をインバータ式に更新（SII補助1/2活用、投資2,300万円）／屋根面積11,000m²に自家消費太陽光1,100kW＋蓄電池700kWh導入（経産省・東京都補助併用）／デマンドピーク制御強化。",
    result:
      "Result: 年間電気代 2.85億円 → 2.18億円（▲24%、▲6,700万円）／契約kW 1,500→1,250／投資回収 補助金後 2.4年／自家消費比率 26%。",
  },
];

const costFactors = [
  {
    label: "中小製造業の標準メニュー継続と切替遅れ",
    detail:
      "板橋区の光学関連・印刷業中小事業者は経営者の電力契約見直し優先順位が低く、東電EP標準メニュー継続率が高い。新電力切替で年10〜50万円削減できる余地が放置されているケース多数。区産業振興公社の伴走支援活用が有効。",
  },
  {
    label: "印刷業の24時間稼働と燃料費調整額影響",
    detail:
      "板橋区の中堅・大型印刷業は24時間稼働で負荷率高く、燃料費調整額の影響を直接受ける。市場連動プラン継続事業者は2022〜2023年の高騰局面で大幅な収益圧迫を経験、固定プラン回帰が進行。",
  },
  {
    label: "光学産業のScope3対応と取引先要請",
    detail:
      "光学産業（オリンパス・ニコン・キヤノン等）はサプライヤーへのCO2削減要請を強化中。板橋区の光学関連中小製造業はScope3対応で再エネ電源契約・トラッキング付証書購入の検討が増加。",
  },
  {
    label: "高島平・成増の物流DC新設と電力需要拡大",
    detail:
      "e-commerce対応の物流DC新設で、高島平・成増の電力需要が拡大中。新規高圧契約・既存契約の増設要請が増えており、早期に新電力との競争入札ノウハウを蓄積した事業者が有利。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度予測4.5円/kWh前後。年間500万kWh使用の中堅印刷業で年間2,000万円規模の負担。減免制度の対象は限定的だが、適用可能性のある事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵・空調・送風機・印刷機・乾燥機",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "板橋区の光学関連・印刷業の設備更新で採択実績多数。高島平物流の冷凍機更新でも安定採択。複数年計画申請も有効。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "印刷工場・物流DCの屋根太陽光と組合せ可能。板橋区は屋根面積が大きい工場・倉庫が多く、自家消費太陽光の導入余地大。",
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
    note: "板橋・大山の商業ビル・オフィス新築・大規模改修で活用可能。ZEB Ready以上の認証取得が条件。",
  },
  {
    name: "板橋区 エコポリス推進助成（省エネ・再エネ設備導入）",
    target: "区内中小企業の省エネ機器・再エネ設備導入",
    rate: "1/3〜1/2、上限50〜200万円（年度予算枠あり）",
    note: "板橋区独自の補助制度。LED・高効率空調・コンプレッサー・印刷機・太陽光発電・蓄電池が対象。区内中小企業要件あり。板橋区産業振興公社の伴走支援も活用可能。詳細は板橋区産業振興課で要確認。",
  },
];

const industryProfile = [
  {
    label: "光学産業・精密機器（板橋本町・蓮根・志村）",
    detail:
      "板橋本町・蓮根・志村周辺の光学関連中小製造業（オリンパス・ニコン・キヤノン等の関連企業）。年間使用量100〜800万kWh規模の高圧100〜500kW契約が中心。クリーンルーム空調の電力負荷が大きい。",
  },
  {
    label: "印刷業・大日本印刷板橋工場（志村・蓮根）",
    detail:
      "大日本印刷（DNP）板橋工場を筆頭に、印刷業の集積地。中堅印刷工場、中小印刷業（製本・加工）が多数。年間使用量1,000〜5,000万kWh規模の高圧・特別高圧契約。24時間稼働で負荷率高い。",
  },
  {
    label: "高島平・成増の物流DC・倉庫",
    detail:
      "高島平・成増・東武練馬周辺の物流DC、冷凍冷蔵倉庫、3PL事業者の物流センター。年間使用量500〜3,000万kWh規模の高圧契約が中心。e-commerce対応の新設DC増加中。",
  },
  {
    label: "板橋・大山の大型商店街・中小商業",
    detail:
      "板橋駅前・大山駅前のハッピーロード大山・遊座大山等の大型商店街。中小商業・サービス業集積。年間使用量50〜500万kWh規模の高圧契約が中心。商店街単位のLED化推進も。",
  },
  {
    label: "上板橋・東武練馬の中小製造・住宅地周辺",
    detail:
      "上板橋・東武練馬周辺の中小製造業、住宅地周辺の小規模商業・診療所・学習塾等。低圧電力・低圧電灯が中心。年間使用量50万kWh以下の小規模事業所多数。",
  },
];

const switchingReality = [
  {
    label: "板橋区内の新電力切替浸透度",
    detail:
      "2024年時点で板橋区法人の新電力シェアは推計25〜30%と23区内では中程度。中小製造業・印刷業の標準メニュー継続率が高く、新電力切替の潜在余地が大きい。高島平物流DCでは切替進行中。",
  },
  {
    label: "印刷業の固定プラン回帰",
    detail:
      "板橋区の中堅・大型印刷業は24時間稼働で負荷率高く、2022〜2023年の市場連動プラン経験から固定プランへの回帰が進行。固定3〜5年契約による経営の安定化を優先する事業者が増加。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の優先復旧体制・既存契約の手続コスト不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。年間200万kWh超の事業者では切替メリットが明確。",
  },
  {
    label: "新電力選定の板橋区固有ポイント",
    detail:
      "①中小製造業・印刷業向けの細やかな営業対応力、②24時間稼働印刷業のピーク需要対応、③固定単価期間（3〜5年）の確実性、④燃料費調整額の上限有無、⑤光学・印刷OEM向けScope3対応の再エネメニュー、の5点が特に重要。",
  },
  {
    label: "屋根太陽光の自家消費活用",
    detail:
      "板橋区は屋根面積が大きい工場・倉庫が多く、自家消費太陽光の導入余地大。印刷工場（屋根8,000m²級）、物流DC（屋根10,000m²級）で1MW級の自家消費太陽光導入事例も。SII＋東京都＋板橋区補助の併用で投資回収2〜4年。",
  },
];

const energySaving = [
  {
    label: "光学・印刷業の設備更新（クリーンルーム・印刷機）",
    detail:
      "クリーンルーム空調の可変風量制御化、印刷機のインバータ化、乾燥機の高効率化、コンプレッサーのインバータ化で電力▲20〜30%。SII補助＋都補助＋板橋区補助の組合せで投資回収 2〜3年。",
  },
  {
    label: "物流DC・冷凍冷蔵倉庫の電力最適化",
    detail:
      "冷凍機のインバータ化、断熱強化、デマンドピーク制御、自家消費太陽光＋蓄電池で電力▲15〜25%。SII補助の冷凍冷蔵設備区分は採択率が高い。",
  },
  {
    label: "工場・倉庫の屋根太陽光・自家消費",
    detail:
      "印刷工場（屋根8,000m²）、物流DC（屋根10,000m²）に自家消費太陽光800〜1,500kW＋蓄電池導入で日中の電力▲30〜50%、年間電気代▲15〜25%。SII・東京都・板橋区の補助併用で投資回収2〜4年。",
  },
  {
    label: "区産業振興公社の伴走支援活用",
    detail:
      "板橋区産業振興公社は中小企業の省エネ診断・補助金申請伴走支援を実施。診断費用が低額または無料で、町工場・印刷業の見える化に最適。BEMS・FEMS導入の入口として活用価値大。",
  },
  {
    label: "Scope3対応の段階的な再エネ調達",
    detail:
      "光学・印刷OEM向けサプライヤーは取引先のScope3対応要請を受けて再エネ電源契約・トラッキング付証書購入・部分的なPPA契約で段階的な再エネ調達が可能。取引継続にも寄与。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "中小製造業・印刷業は東電EP標準メニュー継続か新電力切替済みか確認したか",
  "クリーンルーム空調・印刷機・乾燥機がインバータ式か旧式かを確認したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "光学・印刷OEM向けのScope3対応要請に応じた再エネ電源契約を試算したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『キャップ&トレード制度』『建築物環境計画書制度』の対象事業所か確認したか",
  "工場・倉庫の屋根面積を活かした自家消費太陽光の導入可能性を試算したか",
  "SII補助・東京都補助・板橋区エコポリス推進助成の併用可否を確認したか",
  "板橋区産業振興公社の省エネ診断・伴走支援を活用したか",
  "高島平・成増の物流DC新設動向と自社電力需要への影響を把握しているか",
];

const faqItems = [
  { question: "板橋区の光学関連・印刷業中小事業者で電気代を削減するポイントは？", answer: "①新電力切替（標準比▲2〜4円/kWh）、②クリーンルーム空調・印刷機・乾燥機のインバータ更新、③コンプレッサーのインバータ化、④工場LED化、⑤Scope3対応の段階的再エネ調達、の5本柱。SII補助＋東京都補助＋板橋区エコポリス推進助成の組合せで投資回収2〜3年、年間電気代▲20〜25%が可能なレンジ。板橋区産業振興公社の伴走支援も活用価値大です。" },
  { question: "大型印刷工場の電気代対策は？", answer: "特別高圧の競争入札による単価最適化（標準比▲1.5〜2.5円/kWh）、印刷機・乾燥機・空調の高効率化、屋根太陽光＋蓄電池の自家消費、固定3〜5年契約による市場連動リスク回避が主要打ち手。年間電気代▲20〜25%、東京都キャップ&トレード制度の削減義務達成も同時に可能。投資回収2.0〜3.0年が一般的なレンジです。" },
  { question: "高島平・成増の物流DCの電気代対策は？", answer: "冷凍機のインバータ化・断熱強化・デマンドピーク制御が基本。屋根面積が大きい倉庫では自家消費太陽光＋蓄電池導入で電気代▲15〜25%＋自家消費比率20%超が可能。SII補助の冷凍冷蔵設備区分は採択率が高く、東京都補助・経産省補助との併用も検討の価値あり。e-commerce対応DC新設の動向も注視。" },
  { question: "光学産業のScope3対応で何ができますか？", answer: "オリンパス・ニコン・キヤノン等の光学産業はサプライヤーへのCO2削減要請を強化中。全量RE100が難しい中小製造業でも、①新電力経由の再エネメニュー、②トラッキング付証書購入、③部分的なPPA契約、④高効率設備更新によるCO2削減、で段階的にScope3対応可能。取引継続のため、優先度が高い施策です。" },
  { question: "板橋区独自の補助制度はありますか？", answer: "板橋区エコポリス推進助成（LED・空調・コンプレッサー・印刷機・太陽光・蓄電池等が対象、補助率1/3〜1/2、上限50〜200万円）が代表的。年度予算枠があるため早期申請が有利。板橋区産業振興公社の伴走支援とセットで活用するのが効果的。SII補助・東京都補助との併用可否は事業内容により異なります。" },
  { question: "中小製造業が新電力に切り替えるメリットは？", answer: "東電EP標準メニュー比で2〜4円/kWh安い水準が一般的。年間電気代200〜800万円規模の中小製造業でも年10〜50万円の削減が見込めます。固定3年プランで燃料費調整額の変動リスクからも解放。光学・印刷OEM向けのScope3対応要請に応じた再エネメニュー選択肢もあるため、取引継続にも寄与します。" },
  { question: "板橋区の屋根太陽光は導入価値ありますか？", answer: "板橋区は屋根面積が大きい工場・倉庫が多く、自家消費太陽光の導入余地が大きい区です。印刷工場（屋根8,000m²級）、物流DC（屋根10,000m²級）で1MW級の自家消費太陽光導入事例も。SII＋東京都＋板橋区補助の併用で投資回収2〜4年、年間電気代▲15〜25%が可能なレンジ。蓄電池併設でデマンドピーク制御も強化できます。" },
  { question: "板橋区で活用できる省エネ補助金は？", answer: "SII省エネ補助金（中小1/2、大企業1/3）、需要家主導型PPA補助金、東京都中小規模事業所向け省エネ設備導入補助、東京都ZEB・ZEH支援事業、板橋区エコポリス推進助成の5本柱が中心。最大3〜4補助の組合せが可能で、投資回収を1〜2年短縮できます。クール・ネット東京と板橋区産業振興課・産業振興公社の最新公募情報を併せて確認するのが効果的です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "板橋区 産業振興（中小企業支援）", url: "https://www.city.itabashi.tokyo.jp/" },
  { name: "公益財団法人 板橋区産業振興公社", url: "https://www.itabashi-kosya.jp/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "クール・ネット東京（東京都地球温暖化防止活動推進センター）", url: "https://www.tokyo-co2down.jp/" },
];

export default function ItabashiKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/itabashi-ku-business-electricity-cost"
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
          <span className="text-slate-800">板橋区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            板橋区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            板橋区は『光学産業のまち』としてオリンパス・ニコン・キヤノン関連企業が集積し、大日本印刷板橋工場ほか印刷業の集積、高島平・成増の大型物流拠点、板橋・大山の大型商店街と多面的な事業者集積を持つ区です。本ページでは光学・印刷の標準メニュー切替余地、特別高圧大型印刷工場の競争入札戦略、物流DCの自家消費太陽光、契約見直し・補助金活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>板橋区の光学・印刷・物流・商店街の事業者プロファイル別電気代水準</li>
              <li>板橋本町光学部品・志村印刷工場・高島平物流DCのBefore/After削減事例</li>
              <li>光学OEMのScope3対応と段階的再エネ調達の現実解</li>
              <li>SII・東京都・板橋区エコポリス推進助成の組合せ活用パターン</li>
              <li>板橋区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              板橋区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区は光学産業の伝統（オリンパス・ニコン関連）、大日本印刷板橋工場ほか印刷業集積、高島平・成増の大型物流拠点、板橋・大山の大型商店街が並列する複合エリア。約2,000社の中小製造業の標準メニュー継続率が高く、新電力切替の潜在余地が大きい区の一つです。
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
              、中小製造業の論点は{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                工場電気代ベンチマーク
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              板橋区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区では東電EPに加え、全国系・通信流通系・地域ガス系・再エネ特化型・中小事業者向けの新電力15社前後が法人向け高圧で新規受付中。中小製造業向けの細やかな営業対応力を持つ新電力が増加中です。
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
              板橋区の電気料金水準と契約パターン
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区は中小製造業・印刷業の標準メニュー継続率が高く、実質単価は23区内でも高めのグループに留まっています。新電力切替で2〜4円/kWh削減余地があり、年間電気代200〜800万円規模の中小製造業でも年10〜50万円の削減効果が見込めます。
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
              業種別影響度3件 — 板橋本町光学部品・志村印刷工場・高島平物流DC（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区の主力業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在事業者の公開事例・業界団体ヒアリングから整理した代表シナリオです。
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
              板橋区固有の電気代上昇要因 — 標準メニュー継続・印刷業24時間稼働・Scope3・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区の電気代上昇は、中小製造業の標準メニュー継続による高単価放置、印刷業の24時間稼働と燃料費調整額影響、光学・印刷OEMからのScope3対応要請、再エネ賦課金上昇など、区固有の要因が複合的に重なります。
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
              板橋区の補助金・優遇制度 — SII・東京都・板橋区エコポリス推進助成
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区では国補助（SII等）、東京都補助、板橋区エコポリス推進助成の3層構造を活用できます。板橋区産業振興公社の伴走支援も併用可能で、中小製造業の省エネ診断・補助金申請伴走で投資回収を1〜2年短縮できます。
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
              板橋区の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区の事業者構成は、光学産業・精密機器、印刷業（大日本印刷板橋工場含む）、高島平・成増物流DC、板橋・大山商店街、上板橋・東武練馬中小製造の5層構造です。各層で電力需要プロファイルと最適契約戦略が異なります。
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
              板橋区の新電力シェアは2024年時点で推計25〜30%と23区内では中程度。中小製造業・印刷業の標準メニュー継続率が高く、新電力切替の潜在余地が大きい区です。高島平物流DCでは切替が進行中。
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
              板橋区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区の省エネは『光学・印刷業の設備更新』『物流DCの電力最適化』『工場・倉庫の屋根太陽光・自家消費』『区産業振興公社の伴走支援活用』『Scope3対応の段階的再エネ調達』の5軸が主力です。
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
              板橋区向け契約見直しチェックリスト（12項目）
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
              シミュレーターで板橋区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              板橋区は光学産業・印刷業・物流DC・商店街など区固有の事業者構成を持ちます。シミュレーターで自社条件における上振れ幅を試算し、新電力切替・印刷機更新・屋根太陽光・Scope3対応再エネ調達のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した23〜24%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/toshima-ku-business-electricity-cost", title: "豊島区の法人電気料金", description: "池袋の商業・オフィス集積（隣接区）。" },
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "大学・研究機関と中小オフィス。" },
              { href: "/nakano-ku-business-electricity-cost", title: "中野区の法人電気料金", description: "中野駅前再開発と中小事業者。" },
              { href: "/sumida-ku-business-electricity-cost", title: "墨田区の法人電気料金", description: "中小製造業とスカイツリー観光。" },
              { href: "/ota-ku-business-electricity-cost", title: "大田区の法人電気料金", description: "町工場集積と羽田空港物流。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "光学・印刷業の全国比較。" },
              { href: "/logistics-warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し", description: "高島平・成増物流の主力打ち手。" },
              { href: "/scope3-supply-chain-renewable-procurement", title: "Scope3対応の再エネ調達", description: "光学OEM取引先要請に応じた段階的調達。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "印刷業・物流の選択肢。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "光学・印刷・物流の主力補助金。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
            ]}
          />

          <ContentCta
            heading="板橋区の自社条件で電気代リスクを試算する"
            description="光学関連中小製造業・大日本印刷ほか印刷業・高島平物流DC・板橋大山商店街など板橋区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。新電力切替・設備更新・屋根太陽光・Scope3対応再エネ調達のROIもあわせて確認できます。"
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
            heading="板橋区の電力契約見直し、専門家に相談しませんか？"
            description="光学関連中小製造業の標準メニュー切替、印刷業の特別高圧契約見直し、高島平物流DCの自家消費太陽光、光学・印刷OEMのScope3対応要請への再エネ調達など、板橋区事業者特有の論点を中立的立場で整理します。エネルギー情報センターの初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
