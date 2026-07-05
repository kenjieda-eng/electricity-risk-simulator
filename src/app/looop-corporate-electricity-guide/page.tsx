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
  "Looop（Looopでんき）の法人向け電力ガイド｜市場連動型メニューの考え方・再エネ電源・受付状況の確認軸";
const pageDescription =
  "Looopでんき（株式会社Looopが運営する電力小売サービス）の法人向けサービスを、公開情報に基づき中立的に整理。太陽光など再生可能エネルギー電源の開発を事業背景に持つ新電力としての特性、高圧・特別高圧を含む法人向けメニューの考え方、市場連動型を扱う新電力を中立的に位置づける確認軸、燃料費調整・受付状況・撤退リスクの留意点、相見積の活用を第三者・社団法人視点でまとめます。高圧の新規受付範囲は時期により変動があるため断定せず、最新の受付状況・対応エリアは公式サイトでの確認を前提とします。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Looopでんき 法人",
    "Looop 高圧 特別高圧",
    "Looopでんき 市場連動",
    "Looop 再エネ 電力",
    "新電力 市場連動 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/looop-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/looop-corporate-electricity-guide",
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
    label: "Looopでんきの位置づけ",
    detail:
      "Looopでんきは、株式会社Looopが運営する電力小売サービスのブランドです。同社は太陽光発電をはじめとする再生可能エネルギー関連事業を出発点として成長し、2016年の電力小売全面自由化を契機に電力小売事業へ参入した新電力です。旧一電（一般電気事業者を母体とする小売）ではない新規参入事業者の立ち位置で、家庭向けに加え、高圧・特別高圧を含む法人向けサービス（Looopでんき ビジネス）を展開していることが公開情報で示されています。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです。市場連動型メニューを扱う新電力の一つとして、その中立的な位置づけと確認軸を整理します（出典: Looopでんき公式サイト・参照日2026年7月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（新電力カテゴリ解説の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、全国系新電力、都市ガス系新電力、商社系新電力、自治体系・地産地消の地域新電力、そして市場連動型メニューを主軸に据える新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『再エネ電源開発を背景に持ち、市場連動型メニューを扱う新電力』の類型の代表例としてLooopでんきの公開情報を解説します。市場連動型の仕組みそのものの詳細解説には本ページでは深入りせず、仕組みの理解は市場連動プランの専門解説記事に譲り、本ページは『中立的な位置づけと確認軸』に焦点を当てます。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "株式会社Looopは、太陽光発電システムの提供・再生可能エネルギー電源の開発を事業背景に持ち、発電・小売を組み合わせたエネルギー事業を展開していることが公開情報で示されています。再エネ電源開発の知見を背景に、電力小売では市場連動型を含むメニュー設計を採用してきた点が事業特性の一つです。電源構成・調達構造の詳細は時期により変動があり、個別の数値は公開情報の範囲での概括にとどめ、確定的な断定は避けます（出典: Looopでんき公式サイト・Looopでんき法人サイト）。",
  },
  {
    label: "法人需要家の構成",
    detail:
      "Looopでんきの法人需要家には、中小規模の事業所・店舗、オフィスビル、製造業、商業施設、物流拠点等が含まれる可能性があります。再エネ志向の需要家や、市場価格の動きに応じたコスト管理を許容できる需要家が、市場連動型メニューを検討対象とするケースが想定されます。ただし、市場連動型が自社に適合するかは使用パターン・リスク許容度により異なるため、後述の確認軸に沿って中立的に判断すべきです。具体的な業種別の対応・条件は公式公表および個別見積で確認してください。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、料金メニューの方式（固定単価型か市場連動型か）、燃料費調整の条件、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無、そして新規受付の状況など複数の観点を総合して判断すべきものです。とりわけ市場連動型を扱う新電力では、受付範囲や対応エリアが時期により変動することがあるため、最新の受付状況・対応エリアは公式サイトで要確認です。本ページはLooopでんきの公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "特別高圧・大型高圧（契約電力の大きい需要家向け）",
    role: "大規模工場・大型商業施設・物流拠点等",
    detail:
      "Looopでんきは法人向けに高圧・特別高圧を含むサービス（Looopでんき ビジネス）を公開しています。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額または市場連動分＋再エネ賦課金で構成される一般的な体系が想定されます。大規模需要家は個別協議・個別見積となるケースが多く、料金方式（固定単価型／市場連動型）・契約期間・解約条件を契約書で詳細に確認することが重要です。なお、高圧の新規受付範囲は時期により変動があるため、本ページでは『受付中』『受付停止』等の断定は行いません。具体的な単価・条件・最新の受付状況は公式の料金公表および個別見積で必ず確認してください（出典: Looopでんき法人サイト・参照日2026年7月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上の需要家向け）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けには、業務用メニューが公開されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まる一般的な構造です。市場連動型メニューを扱う新電力では、電力量料金に相当する部分がJEPX（日本卸電力取引所）のスポット価格に連動する設計となる場合があり、旧一電の標準メニューや固定単価型メニューとは価格変動の性質が異なります。同一条件で比較するには、料金方式の違いを踏まえた相見積が重要です。個社の単価は本ページには記載しません（出典: Looopでんき法人サイト）。",
  },
  {
    name: "再エネ関連メニュー・CN対応",
    role: "RE100対応・脱炭素志向の需要家向け",
    detail:
      "株式会社Looopは太陽光をはじめとする再生可能エネルギー電源の開発を事業背景に持ち、再エネ調達メニュー・非化石証書・実質再エネメニュー等の提供が公開情報で示されています。脱炭素を進める法人需要家向けの調達手段の一つとなります。供給可能量・対応エリア・条件はメニューにより異なり、時期による変動もあるため、調達計画に組み込む際は事前確認が必要です（出典: Looopでんき公式サイト・Looopでんき法人サイト）。RE100やSBTなどの外部イニシアチブへの適合性は、CO2排出係数の扱いを含めて調達計画段階で確認してください。",
  },
  {
    name: "料金方式（固定単価型と市場連動型）",
    role: "全メニュー共通の判断軸",
    detail:
      "新電力の法人メニューには、電力量料金が一定期間固定される固定単価型と、JEPXスポット価格に連動する市場連動型があります。Looopでんきは市場連動型を扱う新電力として知られていますが、法人契約区分・メニューにより方式が異なる可能性があるため、契約書で必ず確認してください。市場連動型の仕組み・メリット・デメリットの詳細は本ページでは深入りせず、市場連動プランの専門解説に譲ります。自社の使用パターンやリスク許容度に応じて、どちらの方式が適合するかを中立的に判断することが重要です（出典: 各社公式の料金方式公表・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア・受付状況（公表情報・要確認）",
    detail:
      "Looopでんきは複数エリアで電力小売サービスを提供している新電力です。ただし、高圧・特別高圧の法人向け新規受付の範囲や対応エリアは時期により変動があるため、本ページでは受付可否を断定しません。自社拠点が対応エリア・受付対象に含まれるかは、最新の受付状況・対応エリアを公式サイトで必ず確認してください（出典: Looopでんき法人サイト サービス提供エリア・受付状況公表）。",
  },
  {
    label: "電源・調達構造（公表情報・概括）",
    detail:
      "株式会社Looopは太陽光をはじめとする再生可能エネルギー電源の開発を事業背景に持ちます。電力小売の調達では、自社・グループの発電に加えJEPX市場からの調達を組み合わせる構造が一般的です。電源構成・調達構造の詳細は時期により変動があり、個別の数値は公開情報の範囲での概括にとどめます。料金方式（固定単価型／市場連動型）と調達構造の関係を確認することで、価格変動リスクの構造を理解できます（出典: Looopでんき公式サイト）。",
  },
  {
    label: "JEPX市場での取扱いと市場連動",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。市場連動型メニューを契約する場合、JEPXスポット価格の高騰時に電力量料金相当の単価が大きく上昇するリスクがあります。市場連動型の仕組みの詳細は本ページでは深入りせず、専門解説記事に譲りますが、固定単価型と市場連動型のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。再エネ賦課金の単価は年度ごとに国が定めます（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 小〜中規模高圧需要家（オフィス・店舗系）",
    annual: "想定年間削減イメージ ▲10万円/年",
    fiveYear: "▲10万円 × 5年 ＝ 50万円",
    detail:
      "契約電力が比較的小さい高圧需要家が、契約電力（デマンド）の適正化と、料金方式（固定単価型／市場連動型）を含む相見積による条件見直しを組み合わせた場合の年間削減イメージです。市場連動型を選ぶ場合は市場価格変動の影響を、固定単価型を選ぶ場合は固定化のメリット・デメリットを踏まえて中立的に判断します。※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 中規模製造業・商業施設",
    annual: "想定年間削減イメージ ▲17万円/年",
    fiveYear: "▲17万円 × 5年 ＝ 85万円",
    detail:
      "中規模の製造業・商業施設が、デマンド管理・力率改善に加え、複数社の相見積で料金方式・契約期間・解約条件を同一条件比較し、自社の使用パターンに合う条件を選定した場合の年間削減イメージです。市場連動型の採否は使用時間帯の分布とリスク許容度に依存するため、専門解説を参照のうえ中立的に判断します。※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 大型高圧・多拠点事業者",
    annual: "想定年間削減イメージ ▲36万円/年",
    fiveYear: "▲36万円 × 5年 ＝ 180万円",
    detail:
      "契約電力の大きい大型高圧需要家や多拠点事業者が、拠点別の契約条件を棚卸しし、料金方式・受付状況・対応エリアを確認したうえで相見積を実施、省エネ投資と組み合わせて総合最適化を図った場合の年間削減イメージです。多拠点では一括管理と拠点別最適化のトレードオフも評価します。※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 市場連動型を検討する中規模需要家",
    before:
      "Before: 現契約（旧一電または固定単価型新電力）を継続する中規模高圧需要家が、市場連動型メニューの採否を検討中。市場価格の動きにコストが左右される点への不安がある。",
    after:
      "After: 市場連動型を扱う新電力（Looopでんき等）と固定単価型・旧一電継続の条件で相見積を取得し、料金方式の違い・契約期間・解約条件を同一条件で整理。市場連動型が向く/向かない条件を専門解説で確認し、自社の使用パターンに合う方式を中立的に選定（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 固定単価型と市場連動型のリスク・メリットを定量的に比較し、自社のリスク許容度に応じて選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 再エネ調達を重視する需要家",
    before:
      "Before: RE100・脱炭素目標を掲げる需要家が、再エネメニューの調達手段を検討。再エネ電源開発を背景に持つ新電力の再エネメニューに関心があるが、対応エリア・供給可能量が不明。",
    after:
      "After: Looopでんきを含む再エネメニュー提供事業者と、非化石証書・コーポレートPPA等の他の調達手段を相見積で比較。対応エリア・供給可能量・CO2排出係数の扱いを確認し、RE100クライテリアへの適合性を含めて中立的に評価。受付状況・対応エリアは公式サイトで確認。",
    result:
      "Result: 再エネ調達手段の選択肢を横並びで整理し、コストと脱炭素効果のバランスで中立的に選定。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 受付状況を確認しながら切替を検討する多拠点事業者",
    before:
      "Before: 複数拠点を展開する事業者が、一部拠点で新電力への切替を検討。ただし高圧の新規受付範囲は時期により変動があり、拠点ごとに対応エリア・受付可否が異なる可能性がある。",
    after:
      "After: 各拠点について最新の受付状況・対応エリアを公式サイトで確認しつつ、受付対象拠点は相見積で条件比較、受付対象外の拠点は旧一電継続・他新電力を含めて中立的に検討。撤退・受付変動リスクへの備えとして最終保障供給の仕組みも確認。",
    result:
      "Result: 受付状況の変動を前提に、拠点別に現実的な選択肢を整理。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。市場連動型を扱う新電力への切替を検討する場合は、料金方式の確認に加え、まず最新の受付状況・対応エリアを公式サイトで確認することが起点となります。現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続きの確認も重要です。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。多拠点で受付状況が拠点により異なる可能性がある場合は、拠点管理表に受付可否・対応エリアの確認結果もあわせて記録しておくと判断がスムーズです。",
  },
  {
    label: "サポート体制・問い合わせ窓口・受付状況の確認",
    detail:
      "Looopでんきは法人向けの問い合わせ窓口・Web会員サービス等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。とりわけ高圧の新規受付範囲は時期により変動があるため、最新の受付状況・対応エリアは公式サイトまたは問い合わせ窓口で必ず確認してください。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜2年程度）、期間途中解約時の違約金条項、料金方式（固定単価型／市場連動型）、市場連動型の場合の価格変動の性質、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。市場連動型を扱う新電力を含めて、新電力撤退・受付停止・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・料金方式（固定単価型／市場連動型）・燃調条件・契約期間・解約条件・サポート・再エネメニュー・受付状況を総合して判断すべきです。本ページはLooopでんきの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "市場連動型メニューの性質を理解する",
    detail:
      "市場連動型メニューは、JEPXスポット価格の動きに電力量料金相当が連動する設計のため、市場高騰時に単価が大きく上昇するリスクがあります。2021年冬・2022〜2023年冬の市場高騰局面の経験を踏まえ、市場連動型の採否は自社のリスク許容度・使用時間帯の分布に応じて中立的に判断してください。仕組みの詳細は市場連動プランの専門解説を参照してください。",
  },
  {
    label: "受付状況・対応エリアは断定せず公式で確認",
    detail:
      "高圧・特別高圧の新規受付範囲や対応エリアは時期により変動があります。本ページでは『受付中』『受付停止』等の断定は行いません。自社拠点が受付対象・対応エリアに含まれるかは、最新の受付状況・対応エリアを公式サイトで必ず確認してください。過去の受付状況が現在も継続しているとは限りません。",
  },
  {
    label: "新電力撤退・受付変動リスクと最終保障供給",
    detail:
      "新電力の事業撤退・小売登録の取消し・新規受付の停止等のリスクは、過去にも事例がありました。新電力契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解し、撤退・受付停止時の切替手順を確認しておくことが重要です。エリア別の供給撤退動向も参考にしてください。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、Looopでんき・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間・料金方式）で比較することが基本です。市場連動型と固定単価型を混在して比較する場合は、価格変動の前提を揃えて評価してください。",
  },
];

const compareViewpoints = [
  {
    label: "料金方式の確認観点（固定単価型／市場連動型）",
    detail:
      "電力量料金が固定される固定単価型か、JEPXスポット価格に連動する市場連動型かを公開情報・契約書で確認します。方式が異なると価格変動の性質が根本的に異なるため、同一条件比較の前提を揃えることが重要です。市場連動型が向く/向かない条件は専門解説で確認します。",
  },
  {
    label: "受付状況・対応エリアの確認観点",
    detail:
      "高圧・特別高圧の新規受付範囲・対応エリアは時期により変動があるため、自社拠点が対象か公式サイトで確認します。多拠点の場合は拠点ごとに受付可否が異なる可能性を前提に整理します。",
  },
  {
    label: "再エネ調達の選択肢",
    detail:
      "再エネメニュー、非化石証書、コーポレートPPAなど、RE100対応の調達手段を比較します。再エネ電源開発を背景に持つ新電力の再エネメニューの活用可能性も、対応エリア・供給可能量を含めて検討対象です。",
  },
  {
    label: "契約・サポート・撤退/受付変動リスク",
    detail:
      "契約手続きの手間、サポート窓口、新電力撤退・受付停止時の切替体制、最終保障供給の仕組み理解を確認します。市場連動型を扱う新電力では、市場環境の変化に伴う受付方針の変動も念頭に置きます。",
  },
  {
    label: "市場連動型を扱う新電力との比較環境",
    detail:
      "Looopでんきと同様に市場連動型を扱う新電力、固定単価型を主軸とする新電力、旧一電継続の複数パターンで相見積を取得し、同一条件で比較できる環境にあります。方式の違いを揃えたうえで自社条件に照らして判断します。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。市場連動型を選ぶ場合も、基本料金の適正化は方式によらず有効です。",
  },
  {
    label: "再エネ調達によるCN対応",
    detail:
      "再エネメニュー・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。再エネ電源開発を背景に持つ新電力の再エネメニュー活用も選択肢の一つですが、対応エリア・供給可能量を事前に確認します。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。市場連動型メニューでは、蓄電池・デマンドレスポンスで高価格時間帯の使用を抑えることが変動リスク低減にもつながります。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "Looopでんき継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。料金方式（固定単価型／市場連動型）の違いを揃えて比較することが重要です。",
  },
  {
    label: "市場変動への備え",
    detail:
      "市場連動型を選ぶ場合は、使用時間帯のシフト・蓄電池・デマンドレスポンス・再エネ自家消費で市場高騰時の影響を緩和できます。固定単価型を選ぶ場合は固定化のメリット・デメリットを踏まえ、変動リスクへの備えを契約に反映できます。",
  },
];

const checklistItems = [
  "自社拠点がLooopでんきの対応エリア・新規受付対象に含まれるか公式サイトで確認したか（受付状況は時期により変動）",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と適用メニューを公開情報で確認したか",
  "料金方式（固定単価型／市場連動型）を契約書で確認したか",
  "市場連動型の場合、市場高騰時の価格変動の性質と振れ幅を理解したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "再エネメニュー（非化石証書・コーポレートPPA等）の供給条件・対応エリアを確認したか",
  "新電力撤退・受付停止時の最終保障供給への切替フローを理解したか",
  "Looopでんき・他新電力・旧一電継続の複数パターンで相見積を取得したか",
  "多拠点の場合、拠点別の受付可否と一括管理／拠点別最適化を比較したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "Looopでんきとはどんな会社（サービス）ですか？",
    answer:
      "株式会社Looopが運営する電力小売サービスのブランドです。同社は太陽光発電をはじめとする再生可能エネルギー関連事業を出発点として成長し、電力小売全面自由化を契機に電力小売事業へ参入した新電力です。家庭向けに加え、高圧・特別高圧を含む法人向けサービス（Looopでんき ビジネス）を展開し、市場連動型メニューを扱う新電力として知られています。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: Looopでんき公式サイト・Looopでんき法人サイト・参照日2026年7月時点）。",
  },
  {
    question: "市場連動型を扱う新電力と旧一電（東電EP・関西電力等）の違いは？",
    answer:
      "市場連動型を扱う新電力は、電力量料金相当がJEPXスポット価格に連動するメニューを提供する新規参入事業者です。旧一電は各エリアの一般電気事業者を母体とする小売事業者で、標準メニューは固定的な料金体系が一般的です。料金方式・価格変動の性質・サポート体制・契約期間・解約条件・受付状況などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターは旧一電・新電力のいずれかを推奨する立場にはなく、自社条件に応じた中立的な判断を支援します。",
  },
  {
    question: "Looopでんきの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、高圧・特別高圧を含む法人向けサービス（Looopでんき ビジネス）や再エネ関連メニュー等が示されています。料金は基本料金＋電力量料金（または市場連動分）＋燃料費調整額または市場連動分＋再エネ賦課金で構成される一般的な体系が想定されます。市場連動型を扱う新電力として知られていますが、法人契約区分・メニューにより料金方式が異なる可能性があります。個社の単価は本ページには記載しません。具体的な単価・条件・最新の受付状況は公式の料金公表および個別見積で確認してください（出典: Looopでんき法人サイト・参照日2026年7月時点）。",
  },
  {
    question: "Looopでんきの高圧は新規受付していますか？",
    answer:
      "高圧・特別高圧の新規受付範囲や対応エリアは時期により変動があるため、本ページでは『受付中』『受付停止』等の断定は行いません。自社拠点が新規受付対象・対応エリアに含まれるかは、最新の受付状況・対応エリアを公式サイトまたは問い合わせ窓口で必ず確認してください。過去の受付状況が現在も継続しているとは限らない点に留意が必要です（出典: Looopでんき法人サイト 受付状況・対応エリア公表）。",
  },
  {
    question: "市場連動型メニューは自社に向いていますか？",
    answer:
      "市場連動型が向くかどうかは、使用時間帯の分布・市場価格変動へのリスク許容度・コスト管理体制により異なります。市場高騰時に単価が大きく上昇するリスクがある一方、市場が落ち着いている局面ではコストメリットが生じる場合もあります。仕組みの詳細・向く/向かない条件は市場連動プランの専門解説と『市場連動が向かない法人』の記事を参照し、固定単価型との相見積で中立的に判断してください。当サイトは特定の方式・特定社を推奨しません。",
  },
  {
    question: "Looopでんきと他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・料金方式（固定単価型／市場連動型）・燃調条件・契約期間・サポート・再エネメニュー・受付状況を総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "新電力は撤退・受付停止リスクがあると聞きました。どう備えれば良いですか？",
    answer:
      "新電力の事業撤退・小売登録取消し・新規受付停止等は、過去にも複数の事例があります。新電力契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退・受付停止時の切替手順・必要書類を事前に確認しておくことが重要です。また、契約書の解約条項・違約金条項も確認しておきましょう。エリア別の供給撤退動向も参考になります（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "Looopでんきの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。市場連動型を扱う新電力への切替では、まず最新の受付状況・対応エリアを公式サイトで確認したうえで、契約期間・期間途中解約違約金・料金方式・解約条件を契約書で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "Looopでんき 公式サイト（電力小売サービス）", url: "https://looop-denki.com/" },
  { name: "Looopでんき 法人サイト（高圧・特別高圧・受付状況・対応エリア）", url: "https://looop-denki.com/biz/" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成・再エネ賦課金）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
];

export default function LooopCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/looop-corporate-electricity-guide"
        datePublished="2026-07-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "Looopでんきの法人向けガイド", url: "https://simulator.eic-jp.org/looop-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">Looopでんきの法人向けガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Looop（Looopでんき）の法人向け電力ガイド｜市場連動型メニューの考え方・再エネ電源・受付状況の確認軸
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Looopでんき（株式会社Looopが運営する電力小売サービス）の法人向けサービスを、公開情報に基づき中立的に整理します。太陽光など再生可能エネルギー電源の開発を事業背景に持つ新電力としての特性、高圧・特別高圧を含む法人向けメニューの考え方、市場連動型を扱う新電力を中立的に位置づけるための確認軸、燃料費調整・受付状況・撤退リスクの留意点、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。高圧の新規受付範囲は時期により変動があるため断定せず、最新の受付状況・対応エリアは公式サイトでの確認を前提とします。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-05" updatedAt="2026-07-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>Looopでんきの法人向けメニューの考え方（高圧／特別高圧／再エネメニュー）</li>
              <li>再エネ電源開発を背景に持ち、市場連動型を扱う新電力としての事業特性（公表情報）</li>
              <li>市場連動型を扱う新電力を中立的に位置づけるための確認軸（仕組みの詳細は専門解説へ誘導）</li>
              <li>高圧の受付状況・対応エリアは断定せず公式で確認するという前提</li>
              <li>代表シナリオ別の5年コストインパクト試算（例示・捏造数値なし）と確認12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。電力会社の選び方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較方法
            </Link>
            、市場連動型の仕組みは{" "}
            <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動プランとは
            </Link>
            も参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">Looopでんきの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Looopでんきは、再エネ電源開発を背景に持ち市場連動型メニューを扱う新電力の代表例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービスの考え方を公開情報に基づき中立的に整理します。市場連動型の仕組みそのものの詳細解説には深入りせず、中立的な位置づけと確認軸に焦点を当てます。
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
              新電力の選び方の基礎は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>
              、エリア別の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。旧一電10社の横断比較は{" "}
              <Link href="/major-utility-comparison-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電10社 横断比較ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Looopでんきが公開する法人向けサービスの考え方を、特別高圧・高圧・再エネメニュー・料金方式の観点で整理します。個社の単価は本ページには記載しません。具体的な単価・条件・最新の受付状況は公式公表・個別見積で確認してください。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              料金方式の考え方は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              、{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プランとは</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源/事業特性・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア・受付状況、電源/調達構造、JEPX市場での取扱いと市場連動、全社共通の制度負担を公表データに基づき整理します。高圧・特別高圧の新規受付範囲は時期により変動があるため、受付可否は断定しません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エリア別の市況は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">関西エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州エリアの法人電気料金</Link>
              でも確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2026年7月時点の公開情報を基に整理した目安です。最新の料金・受付状況・対応エリア・制度単価は各出典元で必ずご確認ください。出典: Looopでんき公式サイト・Looopでんき法人サイト・電力ガス取引監視等委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算（例示）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家が契約電力の適正化・料金方式の選定・相見積・省エネ投資を組み合わせた場合の、年間削減イメージと5年累計の試算例を規模別に整理します。以下はいずれも一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動し、個社の単価は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 数値は一般的な高圧需要家の公的統計水準に基づく例示です。特定社の単価・優劣評価ではありません。Looopでんきに限らず、電力会社の選択は複数条件を総合して中立的に判断してください。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-sky-200 bg-sky-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-slate-200 bg-white p-3">
                      <p className="text-xs text-slate-500">年間削減イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-white p-3">
                      <p className="text-xs text-slate-500">5年累計イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.fiveYear}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{sc.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の実際の年間電気代と削減余地は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で試算できます。エリア別の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型を扱う新電力の検討パターンを3ケースで、Looopでんきの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口と受付状況の確認、新電力切替時の留意点を整理します。市場連動型を扱う新電力への切替では、最新の受付状況・対応エリアの公式確認が起点となります。
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
              、最終保障供給は{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型を扱う新電力と旧一電・他新電力を中立的に判断するための観点を整理します。料金方式・受付状況を含め、単価だけでなく複数の要素を総合的に評価することが重要です。
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
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・受付変動・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Looopでんきの公開情報を活用するうえでの留意点を整理します。料金方式（とくに市場連動型）の性質の理解、受付状況・対応エリアの公式確認、新電力撤退・受付停止時の備えに注意が必要です。
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
              、市場連動プランの基礎は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              、エリア別の供給撤退動向は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別 新電力撤退マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Looopでんき契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・再エネ調達・省エネ投資・相見積・市場変動への備えが柱です。
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
              再エネ調達の基礎は{" "}
              <Link href="/renewable-energy-plan-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ電力プランの解説</Link>
              、{" "}
              <Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPAの基礎</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">新電力切替・契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。中立的な判断には、受付状況の確認と複数社の相見積、料金方式を揃えた総合的な条件評価が重要です。
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
              Looopでんきを含む新電力切替を検討する法人需要家は、料金方式（固定単価型／市場連動型）・契約条件・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。市場連動型を検討する場合は、市場高騰時の上振れ幅の把握がとくに重要です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動型メニューと固定単価型メニューの年間コスト差・変動幅を把握する</li>
              <li>料金方式の違いによる価格変動リスクを定量化する</li>
              <li>相見積・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。高圧の受付状況・対応エリアはLooopでんき公式サイトで必ずご確認ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-05" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク（詳細解説）。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動を避けるべきケースの判断軸。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "固定単価メニューの仕組み。" },
              { href: "/nihon-techno-corporate-electricity-guide", title: "日本テクノ（法人向け）完全ガイド", description: "高圧特化の新電力の類型解説。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金", description: "関東エリアの市況と料金事情。" },
              { href: "/region-kansai-business-electricity", title: "関西エリアの法人電気料金", description: "関西エリアの市況と料金事情。" },
              { href: "/region-kyushu-business-electricity", title: "九州エリアの法人電気料金", description: "九州エリアの市況と料金事情。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の市況を一覧で確認。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退・受付停止時のセーフティネット。" },
              { href: "/region-supplier-withdrawal-map", title: "エリア別 新電力撤退マップ", description: "エリア別の供給撤退動向。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="Looopでんきを含む市場連動型を扱う新電力への切替を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、料金方式の選定・相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。高圧の受付状況・対応エリアは公式サイトでのご確認を前提とします。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。市場連動型と固定単価型の比較、新電力切替・旧一電継続の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
