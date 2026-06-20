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
  "中部電力ミライズ 法人向けプラン完全ガイド｜特別高圧/高圧メニュー・LNG依存と燃調・サプライチェーン対応";
const pageDescription =
  "中部電力ミライズ株式会社の法人向け電力サービスを、公開情報に基づき中立的に整理。特別高圧・高圧の契約メニュー体系、LNG火力依存を背景とした燃料費調整額の感応度、中部エリアの自動車サプライチェーン対応、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中部電力ミライズ 法人",
    "中部電力 高圧 特別高圧 プラン",
    "中部電力ミライズ 燃料費調整",
    "中部電力 LNG 電源構成",
    "中部電力ミライズ 契約手続き",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/chuden-miraiz-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/chuden-miraiz-corporate-electricity-guide",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const overview = [
  {
    label: "中部電力ミライズの位置づけ",
    detail:
      "中部電力ミライズ株式会社（以下、中部電力ミライズ）は、2020年の発送電分離・小売事業再編に伴い、中部電力グループの電力・ガス小売事業を担う事業会社として位置づけられています。発電（JERA等）・送配電（中部電力パワーグリッド）と分離され、中部エリア（愛知・岐阜・三重・静岡県西部・長野県の一部）等を主な供給区域として法人・家庭向けの電力・ガス小売を担います。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: 中部電力ミライズ公式サイト・中部電力統合報告書）。",
  },
  {
    label: "本ページとエリア記事（region-*）の違い",
    detail:
      "当サイトの『中部電力エリアの法人電気代事情』は、エリア全体の市況・新電力動向・JEPX中部エリア価格などの『面』の情報を扱います。本ページはそれと差別化し、中部電力ミライズという『特定企業』の法人向けプラン体系・燃料費調整額の感応度・契約手続き・サポート体制という『個別企業のサービス詳細』を解説します。エリア全体の市況は地域一般記事を、特定企業のサービス詳細は本記事を、と読み分けてください。",
  },
  {
    label: "中部エリアの電源構成の特徴（公表情報・LNG依存）",
    detail:
      "中部電力エリアは、浜岡原子力発電所が運転を停止している状況を背景に、LNG火力を中心とする火力依存度が高い電源構成が公表されています。火力依存度が高いエリアでは、燃料価格（LNG・原油・石炭）や為替の変動が燃料費調整額に反映されやすい傾向があります。電源構成は燃調の動きに影響する要素として把握しておくことが重要です（出典: 資源エネルギー庁エネルギー基本計画・中部電力公表電源構成・OCCTO供給計画）。",
  },
  {
    label: "法人需要家の構成（中部の自動車サプライチェーン）",
    detail:
      "中部エリアには、豊田・刈谷・田原を中心とする自動車産業の特別高圧大型需要家とTier1・Tier2サプライヤー、四日市の半導体、富士の製紙（静岡県西部）、浜松の輸送機器・楽器など、製造業の集積が顕著です。完成車メーカーのカーボンニュートラル要請を受けたサプライチェーン全体での再エネ調達ニーズも高まっています。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無など複数の観点を総合して判断すべきものです。本ページは中部電力ミライズの公開情報を整理しますが、他社（新電力含む）との相見積・比較を行ったうえで自社条件に最適な選択をすることを推奨します。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で情報を整理しています。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の需要家向け）",
    role: "自動車完成車工場・大型Tier1・半導体ファブ等",
    detail:
      "特別高圧の需要家向けに、基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成される料金体系が公開されています。大規模需要家は個別の供給条件・契約となるケースが多く、契約電力の設定や時間帯別単価の適用などを含めて条件を確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 中部電力ミライズ公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中規模工場・Tier2部品工場・ビル・商業施設等",
    detail:
      "高圧需要家向けには、季節・時間帯別の料金体系を含む業務用メニューが公開されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まり、力率割引・割増の仕組みも公表されています。負荷率や稼働時間帯により最適なメニューが異なるため、自社の使用パターンを把握したうえで選択することが重要です（出典: 中部電力ミライズ公式サイト料金プラン）。",
  },
  {
    name: "法人向けメニューの体系（ビジネスプラン等の公開メニュー）",
    role: "中小〜中堅の法人需要家向け",
    detail:
      "中部電力ミライズは、法人向けに複数のビジネス向けメニューを公開しています。契約区分・使用量規模により適用可能なメニューが異なり、ガス併売（中部エリアのガス事業）との組合せ提案も公表されています。自社の契約区分・使用パターンに合うメニューを公式情報で確認してください（出典: 中部電力ミライズ公式サイト法人向けメニュー・参照日2025年10月時点）。",
  },
  {
    name: "燃料費調整額の算定（公表方式・LNG依存の影響）",
    role: "全メニュー共通の変動要素",
    detail:
      "燃料費調整額は、一定期間の平均燃料価格（原油・LNG・石炭の貿易統計価格）に基づき、公表された算定式により月ごとに決定される仕組みが公開されています。中部エリアはLNG火力依存度が高いため、燃料価格・為替の変動が燃調に反映されやすい傾向が指摘されています。上限の有無は契約区分・メニューにより異なるため、契約書で確認してください（出典: 中部電力ミライズ公式サイト燃料費調整単価公表・資源エネルギー庁）。",
  },
];

const dataPoints = [
  {
    label: "供給区域（公表情報）",
    detail:
      "中部電力ミライズの主な供給区域は、愛知県・岐阜県・三重県（北部中心）・静岡県西部（富士川以西）・長野県の一部等です。静岡県は富士川を境に東側が東京電力エリアとなるため、静岡県内に拠点を持つ法人は拠点ごとの供給区域・周波数（50Hz/60Hz境界）を確認する必要があります（出典: 中部電力パワーグリッド供給区域公表）。",
  },
  {
    label: "中部エリアの電源構成傾向（公表情報・LNG依存）",
    detail:
      "中部電力エリアは浜岡原子力発電所の運転停止を背景に、LNG火力を中心とする火力依存度の高い電源構成が公表されています。火力依存度が高いエリアでは、燃料価格・為替の変動が燃料費調整額に反映されやすい傾向があります（出典: 資源エネルギー庁・中部電力公表電源構成）。",
  },
  {
    label: "競争環境（新電力の参入状況）",
    detail:
      "中部エリアは新電力の参入が見られるエリアで、東邦ガス系（東邦ガス）・全国系新電力・再エネ特化型など多様な小売電気事業者が法人向けサービスを提供しています。需要家は複数社からの相見積を取得し、条件を比較したうえで選択できる環境にあります（出典: 電力・ガス取引監視等委員会 登録小売電気事業者一覧）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金（2025年度3.98円/kWh）や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 愛知の特別高圧自動車完成車工場（契約電力30,000kW級）",
    before:
      "Before: 愛知エリアの完成車工場が中部電力ミライズの特別高圧契約を継続利用。中部エリアのLNG依存を背景に燃料費調整額の影響を受けやすい状況を認識。完成車メーカーのCN要請でサプライチェーン全体の再エネ調達が課題。",
    after:
      "After: 自社の使用パターン・CN目標を踏まえ、中部電力ミライズ継続と新電力切替の双方で相見積を取得し条件を比較。燃調条件（上限有無）・再エネメニュー・非化石証書・オフサイトPPAを含めて総合評価し、自社条件とCN要請に合う契約を選択（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 複数社比較により契約条件の透明性が向上。LNG依存を背景とした燃調変動リスクへの備えと再エネ調達を契約戦略に反映。※具体的な削減額は契約条件・使用実態により異なります。",
  },
  {
    title: "ケース2: 四日市の半導体ファブ（特別高圧・クリーンルーム24h）",
    before:
      "Before: 四日市の半導体ファブが中部電力ミライズの特別高圧契約を利用。クリーンルーム24時間稼働で年間使用量が巨大なため、LNG依存を背景とした燃調変動の絶対額影響が大きい。",
    after:
      "After: 中部電力ミライズの料金体系を公開情報で確認しつつ、燃調上限ありの条件や、RE100対応のオフサイトPPA（中部エリアは太陽光適地が限られるため他エリア調達も検討）を含めて調達戦略を整理。エリア全体の市況は地域一般記事、企業別サービス詳細は本記事で確認。",
    result:
      "Result: 燃調感応度の高い中部エリア特性を踏まえた契約戦略と再エネ調達手段の比較により、調達戦略の選択肢を可視化。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 刈谷のTier2部品工場（高圧1,500kW級）",
    before:
      "Before: 刈谷のTier2金属加工工場が中部電力ミライズの高圧業務用メニューを利用。プレス・切削が中心で、完成車メーカーからScope3対応を要請されていた。",
    after:
      "After: 季節・時間帯別の料金体系を公開情報で確認。サーボプレス化等の省エネ投資（補助金活用）と契約見直しを組合せ、中部電力ミライズ・新電力（東邦ガス系等）・再エネメニューを中立的に比較して調達戦略を整理。",
    result:
      "Result: 料金体系の理解と省エネ・再エネ投資の組合せにより、CN要請対応と電気代最適化の両立余地を可視化。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。中部電力ミライズ・新電力いずれの場合も、契約期間・解約条件・燃調条件を契約書で確認することが重要です。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。静岡県内では富士川を境に東電エリアの拠点が混在する可能性があるため特に注意が必要です。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "中部電力ミライズは法人向けの問い合わせ窓口・Web会員サービス・エネルギーマネジメント支援等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（中部電力パワーグリッド）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "BCP・災害対応の観点",
    detail:
      "中部エリアは南海トラフ巨大地震・東海地震想定エリアであり、自動車サプライチェーンのBCPは特に重視されます。停電時の復旧は送配電事業者の管轄ですが、停電通知・補償窓口・自家発連系支援などソフト面の対応は小売事業者ごとに異なります。BCPを重視する需要家は、契約時に災害時対応窓口・体制を確認することが推奨されます。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（上限有無）・契約期間・解約条件・サポート・再エネメニューを総合して判断すべきです。本ページは中部電力ミライズの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "LNG依存を背景とした燃調感応度",
    detail:
      "中部エリアはLNG火力依存度が高く、燃料価格・為替の変動が燃料費調整額に反映されやすい傾向があります。燃調上限の有無を契約書で確認し、変動リスクへの備え（固定化・再エネ自家消費）を検討することが重要です。",
  },
  {
    label: "公開情報と個別見積の差",
    detail:
      "公式サイトの公表料金は標準的な条件を示すもので、特別高圧・大型高圧では個別協議・個別見積による契約となるケースが多くあります。実際の単価・条件は必ず個別見積で確認してください。",
  },
  {
    label: "完成車メーカーのCN要請への対応",
    detail:
      "中部エリアは自動車サプライチェーンが集積し、完成車メーカーからのScope3 GHG削減要請が強まっています。電力契約の選択では、再エネメニュー・非化石証書・PPAの調達可否もCN対応の観点で評価することが重要です。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、中部電力ミライズと新電力複数社（東邦ガス系等）からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "特別高圧／高圧の区分、ビジネス向けメニュー、季節・時間帯別単価の有無、基本料金の算定、力率割引、ガス併売の組合せ条件を公開情報で確認します。",
  },
  {
    label: "燃調・電源構成の感応度",
    detail:
      "中部エリアはLNG火力依存度が高く、燃料価格・為替の変動が燃調に反映されやすい傾向。燃調上限の有無と合わせて、変動リスクを評価します。",
  },
  {
    label: "再エネ調達の選択肢（CN要請対応）",
    detail:
      "中部電力ミライズの再エネメニュー、非化石証書、オフサイトPPAなど、完成車メーカーのCN要請に対応する調達手段を比較します。中部は太陽光適地が限られるため他エリア調達も視野に入ります。",
  },
  {
    label: "契約・サポート・BCP",
    detail:
      "契約手続きの手間、サポート窓口、エネルギーマネジメント支援、災害時対応（南海トラフ・東海地震想定エリア）の体制を確認します。",
  },
  {
    label: "新電力との比較環境",
    detail:
      "中部は東邦ガス系・全国系・再エネ特化型の新電力が法人向けサービスを提供。相見積で条件を比較できます。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "再エネ調達によるCN対応（完成車CN要請）",
    detail:
      "再エネメニュー・非化石証書・オフサイトPPAを組合せることで、完成車メーカーのScope3要請への対応とCO2削減を進められます。LNG依存度の高い中部エリアでは再エネ調達の意義が特に大きくなります。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "サーボプレス・高効率設備・LED・空調更新等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。自動車工場では塗装ライン省エネの効果が大きい場合があります。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "中部電力ミライズ継続と新電力切替の双方で相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。",
  },
  {
    label: "燃調変動への備え",
    detail:
      "LNG依存度の高い中部エリアでは、固定単価・燃調上限ありの条件や、再エネ自家消費・自家発電によるヘッジで、燃調変動リスクへの備えを契約に反映することが特に重要です。",
  },
];

const checklistItems = [
  "自社拠点が中部電力ミライズの供給区域か（静岡県は富士川以西が中部エリア）確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と適用メニューを公開情報で確認したか",
  "燃料費調整額の上限有無を契約書で確認したか",
  "LNG依存を背景とした燃調感応度の高さを理解したか",
  "季節・時間帯別単価・力率割引・ガス併売条件を把握したか",
  "完成車メーカーのCN要請に対応する再エネメニュー・PPAの調達可否を確認したか",
  "中部電力ミライズと新電力複数社（東邦ガス系等）から同一条件で相見積を取得したか",
  "供給地点特定番号（22桁）を拠点ごとに整理したか（静岡は東電エリア混在に注意）",
  "災害時（南海トラフ・東海地震想定）の対応窓口・BCP体制を確認したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "中部電力ミライズとはどんな会社ですか？",
    answer:
      "2020年の発送電分離・小売事業再編に伴い、中部電力グループの電力・ガス小売事業を担う事業会社として位置づけられた小売電気事業者です。発電（JERA等）・送配電（中部電力パワーグリッド）と分離され、愛知・岐阜・三重・静岡県西部・長野県の一部等を主な供給区域として法人・家庭向けの電力・ガス小売を担います。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: 中部電力ミライズ公式サイト・中部電力統合報告書）。",
  },
  {
    question: "中部エリアは燃料費調整額の影響が大きいのですか？",
    answer:
      "中部電力エリアは浜岡原子力発電所の運転停止を背景に、LNG火力を中心とする火力依存度の高い電源構成が公表されています。このため燃料価格（原油・LNG・石炭）や為替の変動が燃料費調整額に反映されやすい傾向が指摘されています。燃調は公表された算定式により月ごとに決定されます。上限の有無は契約区分・メニューにより異なるため、契約書での確認が重要です（出典: 資源エネルギー庁・中部電力ミライズ燃料費調整単価公表）。",
  },
  {
    question: "エリア記事（中部電力エリアの法人電気代事情）と本ページの違いは？",
    answer:
      "エリア記事はエリア全体の市況・新電力動向・JEPX中部エリア価格など『面』の情報を扱います。本ページは中部電力ミライズという『特定企業』の法人向けプラン体系・燃調感応度・契約手続き・サポート体制という『個別企業のサービス詳細』を解説します。エリア全体の市況は地域一般記事、特定企業のサービス詳細は本記事、と読み分けるのがおすすめです。",
  },
  {
    question: "中部電力ミライズの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、特別高圧電力（契約電力2,000kW以上）、高圧電力（50kW以上2,000kW未満）の業務用メニュー、法人向けのビジネス向けメニュー、ガス併売との組合せ等が提供されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。特別高圧・大型高圧は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 中部電力ミライズ公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    question: "中部電力ミライズと新電力はどちらが安いですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（上限有無）・契約期間・サポート・再エネメニューを総合して判断すべきものです。中部エリアは東邦ガス系をはじめ新電力が法人向けサービスを提供しているため、中部電力ミライズと新電力複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "完成車メーカーのCN要請に対応するには電力契約をどうすべきですか？",
    answer:
      "完成車メーカーからのScope3 GHG削減要請に対応するには、再エネメニュー・非化石証書・オフサイトPPA・コーポレートPPAなどの再エネ調達を契約戦略に組み込むことが有効です。中部エリアは太陽光適地が限られるため、他エリア（北海道・東北・九州等）の大規模再エネとのオフサイトPPAも視野に入ります。中部電力ミライズの再エネメニューと新電力・PPA事業者の調達手段を中立的に比較し、CN目標と整合する調達を選択してください（出典: 中部電力ミライズ公式サイト・各メニュー公開情報）。",
  },
  {
    question: "静岡県の拠点は中部電力ミライズと東電EPのどちらの区域ですか？",
    answer:
      "静岡県は富士川を境に、西側（浜松・磐田・湖西・静岡市等）が中部電力エリア、東側（富士・富士宮・沼津・三島等）が東京電力エリアに分かれます。さらに西日本（60Hz）と東日本（50Hz）の周波数境界でもあります。静岡県内に複数拠点を持つ法人は、拠点ごとに供給区域・周波数・契約先が異なる可能性があるため確認が必要です（出典: 中部電力パワーグリッド・東京電力パワーグリッド供給区域公表）。",
  },
  {
    question: "中部電力ミライズの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・解約条件・燃調条件を契約書で確認することが重要です。停電時の物理的復旧は一般送配電事業者（中部電力パワーグリッド）の管轄で、契約小売事業者によらず共通です。静岡県内では拠点が東電エリアに混在する可能性があるため、拠点ごとの確認が特に重要です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中部電力ミライズ 公式サイト（法人向け料金プラン）", url: "https://miraiz.chuden.co.jp/" },
  { name: "中部電力パワーグリッド（供給区域・系統情報）", url: "https://powergrid.chuden.co.jp/" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧）", url: "https://www.emsc.meti.go.jp/" },
  { name: "OCCTO 電力広域的運営推進機関（供給計画）", url: "https://www.occto.or.jp/" },
];

export default function ChudenMiraizCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/chuden-miraiz-corporate-electricity-guide"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "中部電力ミライズの法人向けプラン", url: "https://simulator.eic-jp.org/chuden-miraiz-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中部電力ミライズの法人向けプラン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            中部電力ミライズ 法人向けプラン完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            中部電力ミライズ株式会社の法人向け電力サービスを、公開情報に基づき中立的に整理します。特別高圧・高圧の契約メニュー体系、LNG火力依存を背景とした燃料費調整額の感応度、中部エリアの自動車サプライチェーン対応、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中部電力ミライズの法人向けプラン体系（特別高圧／高圧／ビジネスメニュー）</li>
              <li>LNG依存を背景とした中部エリアの電源構成と燃調感応度（公表情報）</li>
              <li>自動車サプライチェーンのCN要請対応・契約手続き・BCPの確認観点</li>
              <li>規模別のケース別判断材料（中立的整理・捏造数値なし）</li>
              <li>中部電力ミライズ向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。中部電力エリア全体の市況・新電力動向は{" "}
            <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              中部電力エリアの法人電気代事情
            </Link>
            を参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">中部電力ミライズの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力ミライズは中部電力グループの電力・ガス小売事業を担う事業会社です。本ページはエリア記事（市況・新電力動向）と差別化し、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {overview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エリア全体の市況は{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中部電力エリアの法人電気代事情</Link>
              、エリア別の比較は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力ミライズが公開する法人向けプラン体系を、特別高圧・高圧・ビジネスメニュー・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {planTypes.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中部エリアの電源構成・供給区域・制度負担（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給区域、LNG依存を背景とした中部エリアの電源構成傾向、競争環境、全社共通の制度負担を公表データに基づき整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {dataPoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2025年10月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 中部電力ミライズ公式サイト・資源エネルギー庁・OCCTO等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部エリアの代表的な3規模で、中部電力ミライズの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
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
              中部エリアの業種別クロスは{" "}
              <Link href="/aichi-automotive-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">愛知県の自動車・輸送機器工場の電気料金</Link>
              、{" "}
              <Link href="/mie-semiconductor-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">三重県の半導体・電子部品工場の電気料金</Link>
              、{" "}
              <Link href="/shizuoka-manufacturing-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">静岡県の製造業の電気料金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・BCP対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人契約の手続きの流れ、供給地点特定番号の確認（静岡の東電エリア混在注意）、サポート窓口、災害時対応の観点を整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {procedures.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給地点特定番号の詳細は{" "}
              <Link href="/supply-point-identification-number" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">供給地点特定番号（22桁）とは</Link>
              、契約見直し手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力会社の選択を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {compareViewpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択の考え方は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・電源構成を踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力ミライズの公開情報を活用するうえでの留意点を整理します。LNG依存を背景とした燃調感応度、公開情報と個別見積の差、完成車CN要請への対応などに注意が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              燃料費調整額の仕組みは{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力ミライズ契約の有無にかかわらず、中部エリアの法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・再エネ調達（CN要請対応）・省エネ投資・相見積・燃調ヘッジが柱です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金活用は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              、{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 完全ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中部電力ミライズ向け契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。中立的な判断には複数社の相見積と総合的な条件評価が重要です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と上振れリスクを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中部電力ミライズを含む中部エリアの法人需要家は、契約条件・使用実態に応じて電気代の上振れリスクが変わります。LNG依存度の高い中部エリアでは燃調変動の影響も大きいため、シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>夏季・冬季ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>相見積・再エネ調達・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-29" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/region-chubu-business-electricity", title: "中部電力エリアの法人電気代事情（エリア全体）", description: "中部エリアの市況・新電力動向・JEPX中部エリア価格。" },
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の法人電気代事情ハブ。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "中部エリアの業種×地域クロス（中部エリア）。" },
              { href: "/mie-semiconductor-electricity-cost", title: "三重県の半導体・電子部品工場の電気料金", description: "中部エリアの業種×地域クロス（中部エリア）。" },
              { href: "/shizuoka-manufacturing-electricity-cost", title: "静岡県の製造業の電気料金", description: "中部/東京2エリアにまたがる業種×地域クロス。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "LNG依存と燃調算定方式の基礎。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定単価が向くケースの判断軸。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動を避けるべきケース。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "中部エリアの電源構成（LNG依存）を可視化。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "自動車サプライチェーンの省エネ投資。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "再エネ・省エネ投資の税制優遇。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "全社共通の制度負担の見立て。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="中部電力ミライズを含む中部エリアの法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。相見積・再エネ調達（CN要請対応）・省エネ投資の優先順位づけに、中立的な判断材料としてご活用ください。"
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
            heading="電力契約の見直し、中立的な立場の専門家に相談しませんか？"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。中部電力ミライズ・新電力の比較や、完成車CN要請に対応する再エネ調達の進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
