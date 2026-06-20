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
  "東京ガスのでんき（法人向け）完全ガイド｜都市ガス×電気の一括最適化・コージェネ併用工場対応";
const pageDescription =
  "東京ガス株式会社が展開する『東京ガスのでんき』の法人向けサービスを、公開情報に基づき中立的に整理。都市ガス事業を母体とする新電力としての位置づけ、ガス・電気の一括最適化・バンドル割引の枠組み、コージェネレーション併用工場の総合最適化、関東エリアを中心とした特別高圧・高圧の契約メニュー体系、燃料費調整額の感応度、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東京ガスのでんき 法人",
    "東京ガス 電気 法人 プラン",
    "都市ガス 新電力 バンドル",
    "コージェネ 工場 電力",
    "東京ガス 燃料費調整",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/tokyo-gas-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tokyo-gas-corporate-electricity-guide",
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
    label: "東京ガスのでんき（法人向け）の位置づけ",
    detail:
      "『東京ガスのでんき』は、東京ガス株式会社が展開する電力小売サービスのブランドです。東京ガスは関東地方を中心とした都市ガス事業を母体とし、2016年の電力小売全面自由化を契機に法人・家庭向けの電力小売事業を本格展開してきた都市ガス系新電力の代表的存在の一つです。グループ会社が運営するLNG火力発電所、東京湾岸のLNG受入基地、海外LNG調達網など、ガス事業で培ったエネルギーインフラを電力事業にも展開している点が特徴です。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: 東京ガス公式サイト・東京ガス統合報告書・参照日2025年10月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（都市ガス系新電力の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、全国系新電力（ENEOSでんき）、都市ガス系新電力（東京ガスのでんき）、商社系新電力（サミットエナジー）、地域新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『都市ガス系新電力』の典型例として東京ガスのでんきの公開情報を解説します。同じく都市ガス系では大阪ガス・東邦ガス等も電力小売事業を展開しており、本ページの整理は同類型の他社サービスの読み解きにも応用できます。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "東京ガスグループはLNG火力発電所、LNG受入基地、海外上流LNG事業、海外発電事業、コージェネレーション・分散電源、再生可能エネルギー発電を組み合わせた総合エネルギー企業です。電力事業ではガス事業と一体的なエネルギー供給を志向しており、特に都市ガス需要家への電気・ガス一括契約、コージェネ併設工場の総合最適化、産業用蒸気・温水との一体提案などで独自の強みを公開情報で示しています（出典: 東京ガス統合報告書・東京ガス公式サイト法人向け事業案内）。",
  },
  {
    label: "法人需要家の構成",
    detail:
      "東京ガスのでんきの法人需要家には、関東エリアの都市ガスを利用する事業者（工場・ホテル・病院・商業施設・オフィスビル）、コージェネレーション併設工場、ガス空調・吸収式冷凍機を採用する大型建物、海外資源を含めたエネルギー一括契約を求める大手企業等が含まれる可能性があります。都市ガスとの一括契約は請求・サポート一元化のメリットがある一方、契約条件は相見積で同一比較すべきです。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無、ガス契約とのバンドル割引の有無など複数の観点を総合して判断すべきものです。本ページは東京ガスのでんきの公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の需要家向け）",
    role: "大規模工場・大型商業施設・大型ホテル等",
    detail:
      "東京ガスのでんきは法人向けに特別高圧の供給メニューを公開しています。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。大規模需要家は個別協議・個別見積となるケースが多く、契約期間・解約条件・燃調算定方式（LNG連動の独自方式が含まれる場合あり）等を契約書で詳細に確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 東京ガス公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けには、業務用メニュー・季節別／時間帯別の料金体系等が公開されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まる一般的な構造です。同社の場合、都市ガス契約とセットでの割引メニュー・バンドル特典の枠組みが公開されている場合があり、ガス契約も同社の需要家は併せて検討する価値があります。具体条件は公式公表で確認してください（出典: 東京ガス公式サイト料金プラン）。",
  },
  {
    name: "ガス・電気一括契約・コージェネ併用メニュー",
    role: "ガス併用工場・コージェネ採用大型建物向け",
    detail:
      "東京ガスはコージェネレーション（CGS）・ガス吸収式冷温水機・燃料電池等の分散電源を法人需要家向けに普及してきた歴史があり、これらと電力契約を組み合わせた総合最適化メニューが公開されています。コージェネ採用工場は自家発電力の余剰時間帯と買電時間帯を最適化することで、ガス・電気の総コスト削減と省CO2を両立できる可能性があります。具体条件は個別見積・公式公表で確認してください（出典: 東京ガス公式サイトコージェネ・ソリューション情報）。",
  },
  {
    name: "再エネ・脱炭素メニュー・燃調算定",
    role: "RE100対応・CN志向の需要家／全メニュー共通の変動要素",
    detail:
      "東京ガスグループは再エネ発電所の運営・開発、非化石証書取引、CO2フリー電力メニュー等を公開情報で示しており、RE100対応の調達手段の一つとなります。燃料費調整額は新電力独自の算定方式（LNG価格を基礎とする方式等）を採用する場合があります。同じ『燃調連動』でも算定基礎が異なれば変動の振れ幅・タイミングが異なるため、契約書で算定式を必ず確認してください（出典: 東京ガス統合報告書・公式料金公表）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "東京ガスのでんきは関東エリアを中心に電力小売サービスを提供しています。供給エリア外の拠点では契約できない場合があるため、多拠点の法人は拠点別の供給可否を公式サイト・個別見積で確認してください（出典: 東京ガス公式サイトサービス提供エリア公表）。",
  },
  {
    label: "電源ポートフォリオ（公表情報）",
    detail:
      "東京ガスグループはLNG火力発電所（自社・共同保有）、再エネ発電所、コージェネ・分散電源を電源ポートフォリオに持ちます。グループのLNG調達網・LNG受入基地・国内パイプライン網は同社の電源・燃料供給の基盤です。電源構成と燃調算定方式の関係を確認することで、価格変動リスクの構造を理解できます（出典: 東京ガス統合報告書・有価証券報告書）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。市場連動方式のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 関東エリアのコージェネ併設工場（特別高圧）",
    before:
      "Before: 関東エリアの工場が東京ガスの都市ガスを使用したコージェネレーション（CGS）を導入。買電は旧一電（東電EP）の特別高圧メニュー。電気・ガスの契約・運用が別管理で、総合最適化の余地が見えづらい。",
    after:
      "After: 電気契約を東京ガスのでんきへ切替する場合と東電EP継続の場合の双方で相見積を取得。コージェネの稼働パターン（買電時間帯／自家発時間帯）と電気契約の組合せ、ガス・電気バンドル割引、CO2削減（コージェネ＋再エネメニュー）を総合評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: ガス・電気の一括最適化とコージェネ運用見直しによる総コスト削減の余地を可視化。燃調変動リスクへの備えと再エネ調達計画を契約に反映。※具体的な削減額は契約条件・コージェネ稼働率により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 関東エリアの大型ホテル・病院（高圧・通年負荷）",
    before:
      "Before: 関東エリアの大型ホテル・病院が東京ガスの都市ガス（給湯・厨房・暖房）と東電EPの電気の組合せで運用。空調はガス吸収式と電気空調の併用で、ガス・電気のバランスが収益に影響。",
    after:
      "After: 東京ガスのでんきへの電気契約切替と東電EP継続の双方で相見積を取得し、ガス・電気バンドル条件を含めて比較。空調運用（ガス／電気の最適配分）、コージェネ追加投資、再エネメニューの選択を中立的に検討。",
    result:
      "Result: ガス・電気の総合最適化と運用見直しの判断軸を整理。請求・サポート一元化のメリットと相見積による単価メリットを両立する選択を支援。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 関東エリアの中規模商業施設・オフィスビル（高圧）",
    before:
      "Before: 関東エリアの中規模商業施設・オフィスビルが現契約（旧一電または現新電力）を継続。空調・照明中心の負荷で、契約見直しの優先度が低位だった。",
    after:
      "After: 東京ガスのでんき・他の新電力・旧一電継続の3パターンで相見積を取得。ガス・電気バンドルの有無、燃調算定方式の違い、契約期間・解約条件を整理。多拠点の場合、一括契約による契約管理一元化のメリットも考慮。",
    result:
      "Result: バンドル条件と契約管理一元化のメリットを定量化し、単価との総合評価で中立的に判断。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。東京ガスのでんきへの切替時は、ガス契約とのバンドル割引の有無、コージェネ・分散電源の取扱いを確認することが追加ポイントです。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "東京ガスのでんきは法人向けの問い合わせ窓口・Web会員サービス等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。ガス契約と電気契約を同社で一括契約する場合、請求・サポートを一元化できるメリットが整理されています。停電時の物理的な復旧は一般送配電事業者（東京電力パワーグリッド）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項（共通）",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・契約期間・解約条件・サポート・再エネメニュー・ガス契約とのバンドル割引を総合して判断すべきです。本ページは東京ガスのでんきの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "供給エリアの確認",
    detail:
      "都市ガス系新電力は地理的にエリアが限定される場合があります。東京ガスのでんきは関東エリアを中心としているため、関東外の拠点を持つ法人は拠点別の供給可否を確認してください。",
  },
  {
    label: "ガス契約バンドルの実質効果",
    detail:
      "電気・ガスのバンドル割引は、請求一元化・サポート一元化のメリットがある一方、単価面でのバンドル効果はメニューにより異なります。バンドルしない場合の他社条件と比較して、実質的なコストメリットを評価することが重要です。",
  },
  {
    label: "コージェネ運用との整合",
    detail:
      "コージェネ併設工場・建物は、コージェネの稼働パターンと電力契約条件の組合せが総コストを左右します。電力契約見直し時はコージェネ運用の最適化も併せて検討してください。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、東京ガスのでんき・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間・ガス契約有無）で比較することが基本です。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "特別高圧／高圧の区分、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件、ガス契約とのバンドル条件を公開情報で確認します。",
  },
  {
    label: "燃調算定方式の感応度",
    detail:
      "旧一電方式（貿易統計連動）と都市ガス系新電力独自の方式（LNG価格基礎等）の違いを理解し、自社の使用パターンでの変動リスクを評価します。",
  },
  {
    label: "コージェネ・分散電源との総合最適化",
    detail:
      "コージェネ・燃料電池・蓄電池等の分散電源と電力契約の組合せで総コストが変わります。自家発比率・買電時間帯のパターンを踏まえた契約条件を選定します。",
  },
  {
    label: "再エネ調達の選択肢",
    detail:
      "再エネメニュー、非化石証書、コーポレートPPAなど、RE100対応の調達手段を比較します。",
  },
  {
    label: "ガス契約とのバンドル評価",
    detail:
      "都市ガス契約も同社の場合、バンドル割引と請求一元化のメリットを評価します。バンドルしない場合の他社条件と比較し、実質効果を判断します。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "コージェネレーション・燃料電池の活用",
    detail:
      "コージェネ・燃料電池は電気と熱（蒸気・温水）を同時生成するため、ガス併用工場・大型建物では総合効率が高くなる場合があります。電力契約見直しと一体で運用最適化を進められます。",
  },
  {
    label: "再エネ調達によるCN対応",
    detail:
      "再エネメニュー・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・燃料電池・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "東京ガスのでんき・他新電力・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。",
  },
];

const checklistItems = [
  "自社拠点が東京ガスのでんきの供給エリアに含まれるか確認したか",
  "都市ガス契約を同社で締結している／していないかを整理したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と適用メニューを公開情報で確認したか",
  "燃料費調整額の算定方式（旧一電方式／LNG連動等独自）を契約書で確認したか",
  "ガス・電気バンドル割引の実質効果を試算したか",
  "コージェネレーション・分散電源との運用整合を検討したか",
  "再エネメニュー（非化石証書・コーポレートPPA等）の供給条件を確認したか",
  "東京ガスのでんき・他新電力・旧一電継続の3パターンで相見積を取得したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "東京ガスのでんきとはどんなサービスですか？",
    answer:
      "東京ガス株式会社が展開する電力小売サービスのブランドです。関東地方を中心とした都市ガス事業を母体とし、2016年の電力小売全面自由化を契機に法人・家庭向けの電力小売事業を本格展開してきた都市ガス系新電力の代表的存在の一つです。LNG火力発電所・LNG調達網など、ガス事業で培ったエネルギーインフラを電力事業にも展開しています。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: 東京ガス公式サイト・東京ガス統合報告書）。",
  },
  {
    question: "都市ガス系新電力と旧一電（東電EP等）の違いは？",
    answer:
      "都市ガス系新電力は、都市ガス事業者を母体とする新電力で、ガス事業と一体的なエネルギー供給を志向します。電気・ガス一括契約、コージェネ等の分散電源活用などで独自の強みを公開情報で示しています。一方、旧一電は各エリアの一般電気事業者を母体とする小売事業者です。料金体系・燃調算定方式・サポート体制・バンドル条件などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターは旧一電・新電力のいずれかを推奨する立場にはなく、自社条件に応じた中立的な判断を支援します。",
  },
  {
    question: "東京ガスのでんきの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、特別高圧電力（契約電力2,000kW以上）、高圧電力（50kW以上2,000kW未満）の業務用メニュー、ガス・電気バンドルメニュー、コージェネ・分散電源連携メニュー、再エネ関連メニュー等が提供されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。特別高圧・大型高圧は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 東京ガス公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    question: "コージェネ併設工場はどう活用すれば良いですか？",
    answer:
      "コージェネレーション（CGS）は電気と熱を同時生成する分散電源で、ガス併用工場・大型建物では総合効率が高くなる場合があります。電力契約見直しと一体で運用最適化（買電時間帯と自家発時間帯の最適配分、起動停止計画）を進めることで、ガス・電気の総コスト削減と省CO2を両立できる可能性があります。コージェネのEEZ・CO2排出係数の整理、再エネメニューとの組合せも検討対象です（出典: 東京ガス公式サイトコージェネ・ソリューション情報・資源エネルギー庁分散電源公表資料）。",
  },
  {
    question: "ガス契約とのバンドル割引はどれくらい有利ですか？",
    answer:
      "ガス・電気のバンドルメニューは、請求一元化・サポート一元化のメリットに加え、単価・基本料金で一定の特典が設定される場合があります。ただし、バンドル効果はメニュー・契約条件により異なるため、バンドルしない場合の他社条件と比較して実質的なコストメリットを評価することが重要です。当センターはバンドル契約を一律に推奨する立場にはなく、相見積による中立比較を推奨します。",
  },
  {
    question: "東京ガスのでんきと他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・契約期間・サポート・再エネメニュー・バンドル条件を総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "供給エリア外の拠点はどうすれば良いですか？",
    answer:
      "東京ガスのでんきは関東エリアを中心とするため、関東外の拠点では同社と契約できない場合があります。多拠点の法人需要家は、エリア別に複数の小売事業者を使い分けるか、全国系新電力（複数エリア対応）を選ぶか、旧一電継続でエリア別最適化するか、戦略的に選択することが必要です。エリア別の市況は地域別電気料金事情のページで確認できます。",
  },
  {
    question: "東京ガスのでんきの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。ガス契約とのバンドル割引を適用する場合はガス契約の情報も必要です。契約時は契約期間・期間途中解約違約金・燃調算定方式・解約条件を契約書で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京ガス 公式サイト（電力小売・法人向け料金プラン）", url: "https://www.tokyo-gas.co.jp/" },
  { name: "東京ガス 統合報告書（事業構成・電源ポートフォリオ）", url: "https://www.tokyo-gas.co.jp/" },
  { name: "資源エネルギー庁（エネルギー基本計画・分散電源）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
];

export default function TokyoGasCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tokyo-gas-corporate-electricity-guide"
        datePublished="2026-05-30"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "東京ガスのでんき（法人向け）", url: "https://simulator.eic-jp.org/tokyo-gas-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">東京ガスのでんき（法人向け）</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            東京ガスのでんき（法人向け）完全ガイド｜都市ガス×電気の一括最適化・コージェネ併用工場対応
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            東京ガス株式会社が展開する『東京ガスのでんき』の法人向けサービスを、公開情報に基づき中立的に整理します。都市ガス事業を母体とする新電力としての位置づけ、ガス・電気の一括最適化・バンドル割引の枠組み、コージェネレーション併用工場の総合最適化、関東エリアを中心とした特別高圧・高圧の契約メニュー体系、燃料費調整額の感応度、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-05-30" updatedAt="2026-05-30" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東京ガスのでんき法人向けプラン体系（特別高圧／高圧／バンドル／コージェネ連携）</li>
              <li>都市ガス系新電力としての事業特性・電源ポートフォリオ（公表情報）</li>
              <li>コージェネ併設工場・ガス併用大型建物の総合最適化観点</li>
              <li>規模別のケース別判断材料（中立的整理・捏造数値なし）</li>
              <li>都市ガス系新電力切替時の確認12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。関東エリア全体の市況・新電力動向は{" "}
            <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              関東エリアの法人電気代事情
            </Link>
            を参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">東京ガスのでんきの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              『東京ガスのでんき』は都市ガス系新電力の代表例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。
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
              関東エリア全体の市況は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">関東エリアの法人電気代事情</Link>
              、エリア別の比較は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京ガスのでんきが公開する法人向けプラン体系を、特別高圧・高圧・バンドル・コージェネ連携・再エネメニュー・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。
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
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源ポートフォリオ・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、グループ電源ポートフォリオ、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
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
              ※ 本セクションのデータは2025年10月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 東京ガス公式サイト・東京ガス統合報告書・電力ガス取引監視等委員会等から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              都市ガス系新電力の活用パターンを3規模で、東京ガスのでんきの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              都市ガス系新電力と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">バンドル割引・コージェネ運用を踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京ガスのでんきの公開情報を活用するうえでの留意点を整理します。供給エリアの確認、バンドル割引の実質効果、コージェネ運用との整合に注意が必要です。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約・コージェネ・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京ガスのでんき契約の有無にかかわらず、関東エリアの法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・コージェネ活用・再エネ調達・省エネ投資・相見積が柱です。
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
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">都市ガス系新電力切替・契約見直しチェックリスト（12項目）</h2>
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
              東京ガスのでんきを含む新電力切替・コージェネ運用最適化を検討する法人需要家は、契約条件・燃調方式・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・コージェネ運用・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>ガス・電気バンドル条件と非バンドル条件の年間コスト差を把握する</li>
              <li>コージェネ運用最適化の効果を試算する</li>
              <li>相見積・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-30" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/region-tokyo-business-electricity", title: "関東エリアの法人電気代事情（エリア全体）", description: "関東エリアの市況・新電力動向。" },
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/tepco-ep-corporate-electricity-guide", title: "東京電力エナジーパートナーの法人向けプラン", description: "旧一電（関東エリア）の参考。" },
              { href: "/eneos-denki-corporate-electricity-guide", title: "ENEOSでんき（法人向け）完全ガイド", description: "全国系新電力の代表例。" },
              { href: "/summit-energy-corporate-electricity-guide", title: "サミットエナジー（法人向け）完全ガイド", description: "商社系新電力の代表例。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "固定単価メニューの仕組み。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の法人電気代事情ハブ。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="東京ガスのでんきを含む都市ガス系新電力への切替・コージェネ運用最適化を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・コージェネ運用・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。都市ガス系新電力切替・コージェネ運用最適化・旧一電継続の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
