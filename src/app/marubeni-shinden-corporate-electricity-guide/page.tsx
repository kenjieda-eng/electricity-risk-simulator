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
  "丸紅新電力 法人向けプラン完全ガイド｜商社系新電力の特高大口対応・グローバル電力調達知見とPPA・相見積活用";
const pageDescription =
  "丸紅新電力（丸紅グループ）の法人向け電力サービスを、公開情報に基づき中立的に整理。総合商社系新電力としての事業特性、特別高圧大口需要家への対応、グローバル電力・トレーディング知見、コーポレートPPA・再エネ調達支援、特別高圧・高圧の契約メニュー体系、燃料費調整額の連動条件、契約手続き・相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "丸紅新電力 法人",
    "丸紅 電力 高圧 特別高圧",
    "商社系 新電力 特高",
    "丸紅 PPA 再エネ調達",
    "丸紅新電力 燃料費調整",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/marubeni-shinden-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/marubeni-shinden-corporate-electricity-guide",
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
    label: "丸紅新電力（丸紅グループ）の位置づけ",
    detail:
      "丸紅新電力株式会社は、総合商社の丸紅グループに属する電力小売事業者で、商社系新電力の一つとして法人需要家への電力供給を展開しています。丸紅グループは資源・エネルギー・電力・インフラ等を世界規模で手がける総合商社で、海外を含む発電事業や電力トレーディングの知見を背景としていることが公開情報で示されています。2016年の電力小売全面自由化の前後から法人向けの電力サービスを展開してきた商社系新電力の一つです。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: 丸紅新電力・丸紅公式サイト／統合報告書・参照日2026年6月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（商社系新電力の例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、商社系新電力（丸紅新電力・サミットエナジー・伊藤忠エネクス等）、石油系・全国系新電力、都市ガス系新電力、法人特化の新電力、自治体系・地産地消の地域新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『総合商社系の新電力』の例として丸紅新電力の公開情報を解説します。商社系新電力の選び方を横断的に整理した解説も合わせて参照すると、類型の理解が深まります。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "丸紅グループは、国内外の発電事業・電力トレーディング・再生可能エネルギー開発・資源調達等を世界規模で手がける総合商社です。電力事業ではグループの発電資産やトレーディング知見、JEPX市場での取引を組み合わせて法人需要家に供給する構造が公開情報で示されています。グローバルな電力・資源の取り扱い知見や、コーポレートPPA・再エネ調達支援が、商社系新電力の特徴として語られることが一般的です。具体的な電源構成・事業の詳細は、グループの統合報告書・公式公表で確認してください（出典: 丸紅公式サイト・統合報告書）。",
  },
  {
    label: "法人需要家の構成（想定）",
    detail:
      "丸紅新電力の法人需要家には、特別高圧・高圧の大口需要家（製造業・商業施設・物流拠点等）が含まれる可能性があります。グローバルな調達知見や再エネ調達支援を背景に、大口需要家やRE100対応を進める企業が、契約だけでなく再エネ調達の文脈で電力契約を検討するケースが想定されます。具体的な業種別のサービス・条件は公式公表で確認してください。本記述は公開情報に基づく一般的な想定です。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、契約期間、サポート体制、BCP対応、再エネ調達メニュー・PPA支援の有無など複数の観点を総合して判断すべきものです。本ページは丸紅新電力の公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の大口需要家向け）",
    role: "大規模工場・大型商業施設・物流拠点等",
    detail:
      "丸紅新電力は商社系新電力として特別高圧の大口需要家への対応を行っていることが公開情報で示されています。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。大口需要家は個別協議・個別見積となるケースが多く、契約期間・解約条件・燃調算定方式（独自の燃調式やトレーディングを背景とした条件を用いる場合あり）等を契約書で詳細に確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 丸紅新電力公式サイト・参照日2026年6月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けには、業務用メニュー等が公開情報で示されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まる一般的な構造です。商社系新電力の高圧メニューは、旧一電の標準メニューと比較して燃調算定方式・契約期間・解約条件等で違いがあることが一般的なため、相見積で同一条件比較を行うことが重要です（出典: 丸紅新電力公式サイト）。",
  },
  {
    name: "コーポレートPPA・再エネ調達支援",
    role: "RE100対応・大口の脱炭素志向の需要家向け",
    detail:
      "商社系新電力の特徴として、コーポレートPPA（電力購入契約）の組成・仲介や、グローバルな再エネ調達支援が語られることが一般的です。丸紅グループは国内外の再生可能エネルギー開発の知見を背景に、再エネ調達メニュー・非化石証書・PPAの提供を公開情報で示している場合があります。脱炭素を進める大口需要家向けの調達手段の一つとなります。対応条件・供給可能量はメニューにより異なるため、調達計画段階での確認が必要です（出典: 丸紅公式サイト・統合報告書）。",
  },
  {
    name: "燃料費調整額の算定（新電力独自の場合あり）",
    role: "全メニュー共通の変動要素",
    detail:
      "新電力の燃料費調整は、旧一電と同様の方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合があります。商社系新電力はトレーディング知見を背景に独自の料金設計を行う場合があり、メニュー区分・契約区分により燃調算定方式が異なる可能性があるため、契約書で必ず確認してください。市場連動方式の場合は、JEPXスポット価格の高騰局面で単価が大きく変動するリスクがあります（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "丸紅新電力は法人需要家向けに広域で電力小売サービスを提供している事業者です。具体的な対応エリアと契約区分の組合せは公式サイト・個別見積で確認してください（出典: 丸紅新電力公式サイトサービス提供エリア公表）。全国多拠点を持つ法人は、拠点ごとのエリアと契約区分を整理すると比較が進めやすくなります。",
  },
  {
    label: "電源・調達・トレーディング（公表情報）",
    detail:
      "丸紅グループは国内外の発電事業・再生可能エネルギー開発・電力トレーディング・資源調達を世界規模で手がけています。電源・調達の詳細はグループの統合報告書・有価証券報告書で公表されています。グローバルな電力・資源の取り扱い知見が商社系新電力の電源・調達の背景にあることを理解すると、価格・供給の構造を捉えやすくなります（出典: 丸紅統合報告書・有価証券報告書）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。商社系新電力はトレーディング知見を背景に市場を活用する場合があります。市場連動方式のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。賦課金単価は年度ごとに国が定めるため、最新の確定値を一次情報で確認してください（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 特別高圧の大口需要家（RE100対応志向）",
    before:
      "Before: 特別高圧の大口製造業が、RE100対応のため再エネ調達を検討。旧一電または現新電力を継続しつつ、コーポレートPPAや非化石証書の組成を比較したい。",
    after:
      "After: 商社系新電力（丸紅新電力等）のPPA・再エネ調達支援と、他の新電力・旧一電継続＋再エネ調達の条件を相見積で取得し、同一条件で比較。PPAの長期コスト・固定性、非化石証書のコスト、契約条件を整理し、CN対応とコストのバランスを中立的に評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 大口の再エネ調達手段（PPA・証書・メニュー）の選択肢を整理し、CN対応とコストを両立する判断軸を整理。※具体的な削減額・調達コストは契約条件・市況により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 全国多拠点の大口法人（特別高圧・高圧の混在）",
    before:
      "Before: 全国に大口拠点を展開する法人が、各拠点で旧一電エリア別の契約を保有。契約管理の一元化と再エネ調達の標準化を検討中。",
    after:
      "After: 商社系新電力への一括対応の可能性、または旧一電継続のエリア別最適化の二つの選択肢で相見積を取得し、同一条件で比較。契約管理の一元化・再エネ調達の標準化のメリットと、エリア別最適化のコストメリットを総合評価。",
    result:
      "Result: 多拠点一括管理・再エネ標準化と契約最適化のトレードオフを定量化し、中立的に選択。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 中規模製造業（高圧・通常負荷）",
    before:
      "Before: 単一拠点の高圧需要家が現契約を継続。燃料費調整額の変動局面で電気代が変動し、契約見直しを検討中。",
    after:
      "After: 丸紅新電力を含む複数新電力と旧一電の継続条件で相見積を取得。燃調算定方式の違い、契約期間・解約条件、再エネメニュー有無を整理し、自社の使用パターンに合う条件を中立的に選定。",
    result:
      "Result: 燃調算定方式の違いを理解したうえで、変動リスクと固定化メリットのバランスを評価。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。新電力切替の場合、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が重要です。PPAを併用する場合は、PPA契約の期間・条件も合わせて確認します。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "丸紅新電力は法人向けの問い合わせ窓口・サポート体制等を公開しています。請求・使用量の確認、契約変更の手続き、再エネ調達・PPAの相談等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（エリア別の送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年、PPAは長期に及ぶ場合あり）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・契約期間・解約条件・サポート・再エネメニュー・PPA支援を総合して判断すべきです。本ページは丸紅新電力の情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "PPAは長期契約・条件を精査",
    detail:
      "コーポレートPPAは再エネを長期に固定価格で調達できる一方、契約期間が長期に及び、途中解約や条件変更の制約がある場合があります。PPAの価格・期間・追加性・解約条件を精査し、自社の事業計画と整合するかを確認することが重要です。PPAありきではなく、証書・メニュー等の他の調達手段と比較することをおすすめします。",
  },
  {
    label: "燃調算定方式・トレーディング背景を確認",
    detail:
      "商社系新電力はトレーディング知見を背景に独自の料金設計を行う場合があります。同じ『燃調連動』でも算定基礎が異なれば、価格変動の振れ幅・タイミングが異なります。契約書で算定式・市場連動の有無を確認することが重要です。",
  },
  {
    label: "市場連動メニューのリスク",
    detail:
      "JEPXスポット価格連動のメニューは、市場高騰時に単価が大きく上昇するリスクがあります。2021年冬・2022〜2023年冬の市場高騰局面の経験を踏まえ、市場連動の採否は自社のリスク許容度に応じて中立的に判断してください。",
  },
  {
    label: "新電力撤退リスクと最終保障供給／比較は相見積で",
    detail:
      "新電力の事業撤退・小売登録の取消し等のリスクは、過去にも事例がありました。新電力契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解しておくことが重要です。中立的な判断のためには、丸紅新電力・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "特別高圧／高圧の区分、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件、大口の個別見積条件を公開情報で確認します。",
  },
  {
    label: "燃調算定方式の感応度",
    detail:
      "旧一電方式（貿易統計連動）と新電力独自方式・市場連動方式の違いを理解し、自社の使用パターンでの変動リスクを評価します。",
  },
  {
    label: "PPA・再エネ調達の選択肢",
    detail:
      "コーポレートPPA、非化石証書、再エネメニューなど、RE100対応の調達手段を比較します。PPAは長期コスト・固定性・追加性、証書はコスト・柔軟性の観点で評価します。",
  },
  {
    label: "グローバル調達・トレーディング背景",
    detail:
      "商社系新電力のグローバル調達・トレーディング知見が、供給安定性や料金設計にどう反映されるかを公開情報で確認します。",
  },
  {
    label: "契約・サポート・撤退リスク",
    detail:
      "契約手続きの手間、サポート窓口、新電力撤退時の切替体制、最終保障供給の仕組み理解を確認します。商社系新電力、他の新電力、旧一電継続の複数パターンで相見積を取得できます。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧・特別高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "PPA・再エネ調達によるCN対応",
    detail:
      "コーポレートPPA・非化石証書・再エネメニューを組合せることで、RE100対応とCO2削減を進められます。商社系新電力のグローバル再エネ調達支援の活用も選択肢の一つです。",
  },
  {
    label: "大口の相見積・条件交渉",
    detail:
      "特別高圧・大口需要家は個別見積となるケースが多く、複数の事業者から相見積を取得して条件を比較・交渉することで、自社に最適な契約条件を選定できます。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による条件最適化・燃調変動への備え",
    detail:
      "丸紅新電力継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。固定単価・燃調上限ありの条件や、PPA・再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。",
  },
];

const checklistItems = [
  "自社拠点が丸紅新電力の供給対応エリアに含まれるか確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と大口の個別見積条件を公開情報で確認したか",
  "燃料費調整額の算定方式（旧一電方式／市場連動／独自）を契約書で確認したか",
  "上限の有無、変動の振れ幅を理解したか",
  "コーポレートPPAの価格・期間・追加性・解約条件を精査したか",
  "PPAと非化石証書・再エネメニューを比較したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "丸紅新電力・他新電力・旧一電継続の複数で相見積を取得したか",
  "全国多拠点の場合、一括対応と拠点別最適化を比較したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "丸紅新電力とはどんな会社ですか？",
    answer:
      "丸紅新電力株式会社は、総合商社の丸紅グループに属する電力小売事業者で、商社系新電力の一つとして法人需要家への電力供給を展開しています。丸紅グループは国内外の発電事業・電力トレーディング・再生可能エネルギー開発・資源調達を世界規模で手がける総合商社で、その知見を背景としていることが公開情報で示されています。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: 丸紅新電力・丸紅公式サイト／統合報告書）。",
  },
  {
    question: "商社系新電力と旧一電・他の新電力の違いは？",
    answer:
      "商社系新電力は、総合商社のグローバルな発電・電力トレーディング・資源調達の知見を背景とする事業者で、コーポレートPPAの組成や大口需要家への対応を特徴とすることが語られます。旧一電は各エリアの一般電気事業者を母体とする小売事業者です。料金体系・燃調算定方式・PPA支援・契約期間・解約条件などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターはいずれかを推奨する立場にはなく、自社条件に応じた中立的な判断を支援します。",
  },
  {
    question: "丸紅新電力の法人向けにはどんなプラン・サービスがありますか？",
    answer:
      "公開情報では、特別高圧・高圧の大口需要家向けメニューに加え、コーポレートPPA・非化石証書・再エネメニュー等の再エネ調達支援が示されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。大口需要家は個別協議・個別見積となるケースが多いため、具体的な単価・サービス条件は公式の料金公表および個別見積で確認してください（出典: 丸紅新電力公式サイト・参照日2026年6月時点）。",
  },
  {
    question: "コーポレートPPAは法人にとってどんなメリット・注意点がありますか？",
    answer:
      "コーポレートPPAは、再生可能エネルギーを長期にわたり比較的安定した価格で調達でき、RE100対応や追加性（新規再エネの創出）の観点で評価される調達手段です。一方、契約期間が長期に及び、途中解約や条件変更の制約がある場合があるため、価格・期間・追加性・解約条件を精査し、自社の事業計画と整合するかを確認することが重要です。PPAありきではなく、非化石証書や再エネメニューと比較し、中立的に判断することをおすすめします。",
  },
  {
    question: "燃料費調整額の算定方式は旧一電と同じですか？",
    answer:
      "新電力の燃調算定方式は、旧一電方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合があります。商社系新電力はトレーディング知見を背景に独自の料金設計を行う場合があり、メニュー区分・契約区分により算定方式が異なる可能性があるため、契約書で算定式を必ず確認してください。市場連動の場合はJEPX高騰時のリスクが大きい点に留意が必要です（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
  {
    question: "丸紅新電力と他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・契約期間・サポート・再エネメニュー・PPA支援を総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "商社系新電力は他の商社系とどう比較すればよいですか？",
    answer:
      "丸紅新電力・サミットエナジー・伊藤忠エネクスなど、商社系新電力は複数あり、それぞれグローバル調達・トレーディング・再エネ開発の知見の活かし方や対応領域に違いがあります。優劣を一律に評価するのではなく、自社の規模・再エネ調達ニーズ・対応エリア・契約条件に照らして、複数社から相見積を取得し中立的に比較することが重要です。商社系新電力の横断的な選び方の解説も合わせて参照すると、比較の軸を整理しやすくなります。",
  },
  {
    question: "新電力は撤退リスクがあると聞きました。どう備えれば良いですか？",
    answer:
      "新電力の事業撤退・小売登録取消し等は、過去にも複数の事例があります。新電力契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退時の切替手順・必要書類を事前に確認しておくことが重要です。また、契約書の解約条項・違約金条項、PPA併用時はPPA契約の継続条件も確認しておきましょう（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "丸紅新電力 公式サイト（法人向け電力）", url: "https://www.marubeni-power.co.jp/" },
  { name: "丸紅 公式サイト／統合報告書（電力・再エネ事業・トレーディング）", url: "https://www.marubeni.com/" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成・再エネ賦課金）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
];

export default function MarubeniShindenCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/marubeni-shinden-corporate-electricity-guide"
        datePublished="2026-06-08"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "丸紅新電力の法人向けプラン", url: "https://simulator.eic-jp.org/marubeni-shinden-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">丸紅新電力の法人向けプラン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            丸紅新電力 法人向けプラン完全ガイド｜商社系新電力の特高大口対応・グローバル電力調達知見とPPA・相見積活用
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            丸紅新電力（丸紅グループ）の法人向け電力サービスを、公開情報に基づき中立的に整理します。総合商社系新電力としての事業特性、特別高圧大口需要家への対応、グローバル電力・トレーディング知見、コーポレートPPA・再エネ調達支援、特別高圧・高圧の契約メニュー体系、燃料費調整額の連動条件、契約手続き・相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-08" updatedAt="2026-06-08" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>丸紅新電力の法人向けプラン体系（特別高圧大口／高圧／PPA・再エネ調達支援）</li>
              <li>商社系新電力としての事業特性とグローバル調達・トレーディング知見（公表情報）</li>
              <li>燃調算定方式の旧一電との違い・市場連動メニューのリスク</li>
              <li>規模別のケース別判断材料（中立的整理・捏造数値なし）</li>
              <li>新電力切替時の確認12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。電力会社の選び方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較方法
            </Link>
            も参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">丸紅新電力の概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              丸紅新電力は総合商社系の新電力の例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。特定社の優劣評価は行いません。
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
              新電力の選び方の基礎は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>
              、同じ商社系新電力の例は{" "}
              <Link href="/summit-energy-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">サミットエナジーの法人向けガイド</Link>
              、地域別の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              丸紅新電力が公開する法人向けプラン体系を、特別高圧大口・高圧・PPA/再エネ調達支援・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。
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
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、グループの電源・調達・トレーディング、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
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
              ※ 本セクションのデータは2026年6月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 丸紅新電力・丸紅公式サイト・統合報告書・電力ガス取引監視等委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              商社系新電力の活用パターンを3規模で、丸紅新電力の公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・新電力切替の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口、新電力切替時の留意点を整理します。
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
              、最終保障供給は{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              商社系新電力と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。
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
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              丸紅新電力の公開情報を活用するうえでの留意点を整理します。燃調算定方式の確認、PPAの長期条件、市場連動メニューのリスク、新電力撤退時の備えに注意が必要です。
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
              、市場連動プランの基礎は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              丸紅新電力契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・PPA/再エネ調達・大口相見積・省エネ投資・燃調ヘッジが柱です。
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
            <h2 className="text-xl font-semibold text-slate-900">新電力切替・契約見直しチェックリスト（12項目）</h2>
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
              丸紅新電力を含む商社系新電力への切替や再エネ調達を検討する法人需要家は、契約条件・燃調方式・PPA・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動メニューと固定単価メニューの年間コスト差を把握する</li>
              <li>燃調算定方式の違いを定量化する</li>
              <li>PPA・相見積による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-08" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/summit-energy-corporate-electricity-guide", title: "サミットエナジー（法人向け）完全ガイド", description: "同じ商社系新電力の代表例。" },
              { href: "/itochu-enex-corporate-electricity-guide", title: "伊藤忠エネクス（法人向け）完全ガイド", description: "同じ商社系新電力の例。" },
              { href: "/shosha-affiliated-new-power-corporate-electricity-guide", title: "商社系新電力の法人活用ガイド（横断）", description: "商社系新電力の選び方を横断整理。" },
              { href: "/eneos-denki-corporate-electricity-guide", title: "ENEOSでんき（法人向け）完全ガイド", description: "石油系・全国系新電力の例。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAの基礎", description: "再エネ調達の選択肢。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "固定単価メニューの仕組み。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定単価が向くケースの判断軸。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="丸紅新電力を含む商社系新電力への切替やコーポレートPPAを検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。新電力切替・旧一電継続の比較やコーポレートPPA・再エネ調達の進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
