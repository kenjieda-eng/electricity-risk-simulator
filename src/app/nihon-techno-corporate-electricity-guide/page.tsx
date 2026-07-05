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
  "日本テクノの法人向け電力ガイド｜電気保安×電力小売のセット提供・市場連動/CO2フリーメニュー";
const pageDescription =
  "日本テクノ株式会社の法人向け電力サービスを、公開情報に基づき中立的に整理。電気設備の保安管理（電気主任技術者の外部委託・保安点検）と電力小売をセットで提供する事業特性、保安顧客基盤を背景とした高圧需要家向け供給、デマンド監視・電力見える化サービス、市場連動型メニュー・CO2フリーメニューの位置づけ、燃料費調整の算定方式、契約手続き・サポート体制、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "日本テクノ 法人",
    "日本テクノ 高圧 電力",
    "電気保安 電力小売 セット",
    "日本テクノ 市場連動 CO2フリー",
    "新電力 高圧 法人 保安管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/nihon-techno-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/nihon-techno-corporate-electricity-guide",
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
    label: "日本テクノの位置づけ",
    detail:
      "日本テクノ株式会社は、電気設備の保安管理（電気主任技術者の外部委託・キュービクル等の保安点検）を主力事業としつつ、電力小売事業を併営する事業者です。電気保安の顧客基盤を背景に、2009年頃から高圧需要家向けの電力販売を拡大してきた点が事業上の特徴として公開情報で示されています。旧一電（一般電気事業者を母体とする小売）ではない新規参入事業者の立ち位置で、全国の複数エリアで高圧需要家に電力を供給しています。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: 日本テクノ公式サイト・参照日2026年時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（新電力カテゴリ解説の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、全国系新電力、都市ガス系新電力、商社系新電力、自治体系・地産地消の地域新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『電気保安管理と電力小売をセットで提供する事業者』の典型例として日本テクノの公開情報を解説します。保安点検と電力供給を一体で扱う事業モデルは、他の新電力とは顧客接点の作り方が異なる点が特徴です。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "日本テクノは電気保安管理を長く手がけてきた実績があり、キュービクル（高圧受変電設備）を持つ高圧需要家との接点を数多く持つことが公開情報で示されています。この保安顧客基盤に対して電力小売を組み合わせ、あわせてデマンド監視・電力の見える化サービス（消費電力を可視化して省エネ・デマンド管理を支援する仕組み）を提供している点が事業上の特色です。電力調達では、自社電源・相対契約に加えJEPX（日本卸電力取引所）市場からの調達を組み合わせる構造が一般的で、市場連動型メニューやCO2フリーメニューの提供も公開情報で概括されています（出典: 日本テクノ公式サイト）。",
  },
  {
    label: "法人需要家の構成",
    detail:
      "日本テクノの電力需要家には、キュービクルを備える中小の工場・商業施設・店舗・医療福祉施設・オフィスビル等の高圧需要家が含まれる可能性があります。もともと保安点検で関係を持つ事業者が、保安と電力を同一事業者にまとめる文脈で電力契約も検討するケースが想定されます。具体的な業種別の対応内容・供給条件は公式公表および個別見積で確認してください。個社の単価は本ページには記載しません。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、契約期間、サポート体制、BCP対応、再エネ・CO2フリー調達メニューの有無、保安管理など付帯サービスとの一体性など複数の観点を総合して判断すべきものです。本ページは日本テクノの公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中小の工場・ビル・商業施設・店舗・医療福祉施設等",
    detail:
      "日本テクノは高圧需要家向けの電力供給を主力としており、料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。基本料金は契約電力（デマンド実量に基づく）に応じて決まる構造です。保安管理サービスとのセット提供を前提とする場合があるため、電力単体の条件と付帯サービス込みの条件を切り分けて確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 日本テクノ公式サイト・参照日2026年時点）。",
  },
  {
    name: "市場連動型メニュー（JEPX価格連動）",
    role: "市場価格変動を許容できる需要家向け",
    detail:
      "公開情報では、JEPXスポット価格に連動する市場連動型のメニューの提供が概括されています。市場連動方式は、市場が安価な局面では単価が下がる一方、2021年冬・2022〜2023年冬のような市場高騰局面では電力量料金単価が大きく上昇するリスクがあります。市場連動の仕組みとリスクの詳細は共通解説ページで詳述しています。採否は自社の使用パターン・リスク許容度に応じて中立的に判断してください（出典: 日本テクノ公式サイト・JEPX公表データ）。個社の単価・水準は本ページには記載しません。",
  },
  {
    name: "CO2フリーメニュー・再エネ関連メニュー",
    role: "脱炭素・CO2削減志向の需要家向け",
    detail:
      "公開情報では、非化石証書等を用いたCO2フリーメニュー（実質再生可能エネルギー相当）の提供が概括されています。RE100・CDP対応やScope2削減を進める法人需要家にとって、電力由来CO2をゼロ相当とする調達手段の一つとなり得ます。対応エリア・供給可能量・CO2排出係数の扱い・証書の種類はメニューにより異なるため、調達計画に組み込む際は事前確認が必要です（出典: 日本テクノ公式サイト）。",
  },
  {
    name: "燃料費調整額の算定（新電力独自の場合あり）",
    role: "全メニュー共通の変動要素",
    detail:
      "新電力の燃料費調整は、旧一電と同様の方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合があります。日本テクノの法人メニューでも、メニュー区分・契約区分により燃調算定方式が異なる可能性があり、契約書で必ず確認してください。市場連動方式の場合は、JEPXスポット価格の高騰局面で単価が大きく変動する点に留意が必要です（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "日本テクノは全国の複数エリアにまたがって高圧需要家に電力を供給しています。具体的な対応エリアと契約区分の組合せは公式サイト・個別見積で確認してください。首都圏（東京エリア）・中部エリア・関西エリアなど需要密度の高いエリアでの供給が公開情報で概括されています（出典: 日本テクノ公式サイト）。",
  },
  {
    label: "電源調達・事業特性（公表情報）",
    detail:
      "新電力は自社電源・相対契約・JEPX市場調達を組み合わせて需要家に供給する構造が一般的です。日本テクノは電気保安管理の顧客基盤を持ち、デマンド監視・電力見える化サービスを通じて需要家の使用実態データに接点を持つ点が事業特性です。電源構成・燃料調達条件の詳細は公開情報の範囲で概括されており、契約条件・時期により変動します。電源構成と燃調算定方式・燃料調達の関係を確認することで、価格変動リスクの構造を理解できます（出典: 日本テクノ公式サイト）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。市場連動方式のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです。市場連動の仕組みは共通解説ページで詳述しています（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。制度単価は年度ごとに改定されるため、最新値は所管官庁の公表で確認してください（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 小規模高圧の店舗・小規模施設（契約電力〜100kW級）",
    premise:
      "契約電力・使用量が比較的小さい高圧需要家。デマンド監視による契約電力適正化と契約条件の見直しを組み合わせた場合の一般的な試算イメージ。",
    annual: "想定年間削減イメージ ▲7万円/年",
    fiveYear: "▲7万円 × 5年 ＝ 35万円",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 中規模高圧の工場・商業施設（契約電力300kW級）",
    premise:
      "一定の使用量がある中規模の高圧需要家。デマンド管理・力率改善・契約条件の相見積を組み合わせた場合の一般的な試算イメージ。",
    annual: "想定年間削減イメージ ▲13万円/年",
    fiveYear: "▲13万円 × 5年 ＝ 65万円",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 大規模高圧の工場・物流拠点（契約電力1,000kW級）",
    premise:
      "使用量の大きい大規模の高圧需要家。契約電力適正化・省エネ投資・再エネ/CO2フリー調達・相見積を総合した場合の一般的な試算イメージ。",
    annual: "想定年間削減イメージ ▲28万円/年",
    fiveYear: "▲28万円 × 5年 ＝ 140万円",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 保安管理と電力をまとめたい中小工場（高圧・単一拠点）",
    before:
      "Before: キュービクルの保安点検を委託している中小工場が、電力契約は別事業者で継続。保安と電力の窓口が分かれ、使用実態の把握と省エネ提案が一体化していない。",
    after:
      "After: 保安管理と電力小売のセット提供（日本テクノ等）と、保安は現状維持で電力のみ他社・旧一電継続とする選択肢の二つで相見積を取得し、同一条件で比較。窓口一元化・デマンド見える化のメリットと、電力単体を別途最適化するメリットを総合評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 窓口一元化と契約条件最適化のトレードオフを定量化し、自社の運用負荷とコストの両面で中立的に選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: デマンド変動が大きい商業施設（高圧・季節変動あり）",
    before:
      "Before: 空調負荷でデマンドが季節変動する商業施設が現契約（旧一電または現新電力）を継続。契約電力が最大デマンドに引きずられて基本料金が高止まりし、契約見直しを検討中。",
    after:
      "After: 日本テクノを含む複数新電力と旧一電の継続条件で相見積を取得。デマンド監視・見える化サービスの活用可否、燃調算定方式（旧一電方式／市場連動／独自方式）の違い、契約期間・解約条件、CO2フリーメニュー有無を整理し、自社の使用パターンに合う条件を中立的に選定。",
    result:
      "Result: デマンド管理による契約電力適正化と燃調方式の違いを理解したうえで、変動リスクと固定化メリットのバランスを評価。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 脱炭素対応を進める中堅企業（高圧・複数拠点）",
    before:
      "Before: 取引先からScope2削減を求められる中堅企業が、複数拠点で高圧契約を保有。CO2フリー電力の導入と電気代の両立を検討。",
    after:
      "After: 日本テクノのCO2フリーメニューの条件と、他の新電力・旧一電の再エネメニュー・非化石証書調達の条件を相見積で比較。CO2排出係数の扱い・証書の種類・追加コストを整理し、脱炭素効果とコストの両面で中立的に評価して自社にとっての最適解を選定。",
    result:
      "Result: CO2フリー調達の効果とコスト増を定量化し、拠点ごとの優先順位を整理。※削減効果・追加コストは使用実態・メニューにより異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。新電力切替の場合、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が重要です。保安管理とのセット提供を検討する場合は、電力単体条件と付帯サービス込み条件を切り分けて見積を取ると比較しやすくなります。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。キュービクルを持つ高圧需要家は、受変電設備の仕様書とあわせて拠点情報を整理しておくとスムーズです。",
  },
  {
    label: "サポート体制・付帯サービス（公開情報）",
    detail:
      "日本テクノは電気保安管理、デマンド監視・電力見える化サービス等を公開しています。使用量の可視化・省エネ提案・保安点検を電力契約と組み合わせられる点が事業特性です。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）、デマンド超過時の取扱い、保安管理サービスとの契約が電力契約と連動する条件かどうかを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・契約期間・解約条件・サポート・保安管理などの付帯サービス・CO2フリーメニューを総合して判断すべきです。本ページは日本テクノの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "保安と電力のセット条件を切り分ける",
    detail:
      "電気保安管理と電力小売をセットで提供する事業モデルでは、両者の条件が一体化していることがあります。電力単体の条件と付帯サービス込みの条件を切り分けて評価しないと、他社との同一条件比較が難しくなります。見積段階で内訳を確認することが重要です。",
  },
  {
    label: "市場連動メニューのリスク",
    detail:
      "JEPXスポット価格連動のメニューは、市場高騰時に単価が大きく上昇するリスクがあります。2021年冬・2022〜2023年冬の市場高騰局面の経験を踏まえ、市場連動の採否は自社のリスク許容度に応じて中立的に判断してください。固定単価方式との比較も併せて検討しましょう。",
  },
  {
    label: "新電力撤退リスクと最終保障供給",
    detail:
      "新電力の事業撤退・小売登録の取消し等のリスクは、過去にも事例がありました。新電力契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解し、撤退時の切替手順を確認しておくことが重要です。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、日本テクノ・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。当センターは特定社の優劣評価は行いません。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系・付帯サービスの確認観点",
    detail:
      "高圧区分、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件を公開情報で確認します。保安管理・デマンド見える化などの付帯サービスが電力条件とどう組み合わさるかも確認観点です。",
  },
  {
    label: "燃調算定方式の感応度",
    detail:
      "旧一電方式（貿易統計連動）と新電力独自方式・市場連動方式の違いを理解し、自社の使用パターンでの変動リスクを評価します。市場連動を選ぶ場合はJEPX高騰局面での上振れ幅を確認します。",
  },
  {
    label: "CO2フリー・再エネ調達の選択肢",
    detail:
      "CO2フリーメニュー、非化石証書、コーポレートPPAなど、脱炭素対応の調達手段を比較します。CO2排出係数の扱い・証書の種類・追加コストを整理して評価します。",
  },
  {
    label: "契約・サポート・撤退リスク",
    detail:
      "契約手続きの手間、サポート窓口、保安管理との一体性、新電力撤退時の切替体制、最終保障供給の仕組み理解を確認します。",
  },
  {
    label: "同類型・旧一電との比較環境",
    detail:
      "日本テクノのような保安×電力の事業者、全国系新電力、エリア新電力、旧一電継続の複数パターンで相見積を取得し、同一条件で比較できる環境にあります。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド監視・見える化サービスを活用したデマンド管理で適正化することが基本料金削減の第一歩です。デマンド管理の考え方は共通解説ページで詳述しています。",
  },
  {
    label: "CO2フリー調達による脱炭素対応",
    detail:
      "CO2フリーメニュー・非化石証書・コーポレートPPAを組合せることで、Scope2削減・RE100/CDP対応を進められます。追加コストとCO2削減効果を定量化し、拠点ごとの優先順位を整理することが有効です。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。使用実態の見える化データが投資判断の裏づけになります。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "日本テクノ継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。保安込み条件と電力単体条件を切り分けて比較しましょう。",
  },
  {
    label: "燃調変動への備え",
    detail:
      "固定単価・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。市場連動と固定のどちらが自社に合うかを中立的に判断しましょう。",
  },
];

const checklistItems = [
  "自社拠点が日本テクノの供給対応エリアに含まれるか確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "高圧区分と適用メニュー（固定単価／市場連動）を公開情報で確認したか",
  "燃料費調整額の算定方式（旧一電方式／市場連動／独自）を契約書で確認したか",
  "上限の有無、変動の振れ幅を理解したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "保安管理・デマンド見える化など付帯サービスと電力条件の切り分けを確認したか",
  "CO2フリーメニュー（非化石証書等）の供給条件・CO2排出係数の扱いを確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "日本テクノ・他新電力・旧一電継続の3パターンで相見積を取得したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "日本テクノとはどんな会社（サービス）ですか？",
    answer:
      "日本テクノ株式会社は、電気設備の保安管理（電気主任技術者の外部委託・キュービクル等の保安点検）を主力事業としつつ、電力小売事業を併営する事業者です。電気保安の顧客基盤を背景に、2009年頃から高圧需要家向けの電力販売を拡大してきた点が特徴として公開情報で示されています。デマンド監視・電力見える化サービスもあわせて提供しています。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: 日本テクノ公式サイト）。",
  },
  {
    question: "保安管理と電力小売のセット提供とはどういう意味ですか？",
    answer:
      "日本テクノはキュービクル（高圧受変電設備）を持つ高圧需要家の保安点検を数多く手がけており、その顧客基盤に対して電力小売やデマンド見える化サービスを組み合わせて提供する事業モデルが公開情報で示されています。保安と電力の窓口を一元化できる利点がある一方、電力単体の条件と付帯サービス込みの条件が一体化していることがあるため、他社と同一条件で比較する際は内訳を切り分けて確認することが重要です。当センターは特定社の優劣評価は行いません。",
  },
  {
    question: "日本テクノの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、高圧電力（契約電力50kW以上2,000kW未満）の業務用メニューを中心に、JEPX価格に連動する市場連動型メニュー、非化石証書等を用いたCO2フリーメニュー等が概括されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。保安管理サービスとのセット提供を前提とする場合があるため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 日本テクノ公式サイト・参照日2026年時点）。個社の単価は本ページには記載しません。",
  },
  {
    question: "市場連動型メニューとCO2フリーメニューの違いは何ですか？",
    answer:
      "市場連動型メニューはJEPXスポット価格に電力量料金単価が連動する料金設計で、市場が安価な局面ではコストが下がる一方、市場高騰局面では単価が大きく上昇するリスクがあります。CO2フリーメニューは非化石証書等を用いて電力由来CO2をゼロ相当とする脱炭素向けの調達手段で、料金設計とは別の軸のサービスです。両者は組み合わせ方や条件がメニューにより異なるため、契約書で必ず確認してください。市場連動の詳細は共通解説ページを参照してください（出典: 日本テクノ公式サイト・JEPX公表データ）。",
  },
  {
    question: "日本テクノと他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・契約期間・サポート・保安管理などの付帯サービス・CO2フリーメニューを総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "新電力は撤退リスクがあると聞きました。どう備えれば良いですか？",
    answer:
      "新電力の事業撤退・小売登録取消し等は、過去にも複数の事例があります。新電力契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退時の切替手順・必要書類を事前に確認しておくことが重要です。また、契約書の解約条項・違約金条項、保安管理サービスが電力契約と連動する条件かどうかも確認しておきましょう（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "日本テクノのCO2フリーメニューは脱炭素対応に使えますか？",
    answer:
      "公開情報では、非化石証書等を用いたCO2フリーメニュー（実質再生可能エネルギー相当）の提供が概括されています。Scope2削減やRE100・CDP対応の調達手段の一つとして検討可能ですが、対応エリア・供給可能量・CO2排出係数の扱い・証書の種類はメニューにより異なります。RE100等のクライテリアへの適合性を含めて、調達計画段階で確認することを推奨します（出典: 日本テクノ公式サイト・資源エネルギー庁）。",
  },
  {
    question: "日本テクノの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・期間途中解約違約金・燃調算定方式・解約条件、保安管理サービスとの連動条件を契約書で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "日本テクノ 公式サイト（電気保安・電力小売・デマンド見える化）", url: "https://www.n-techno.co.jp/" },
  { name: "資源エネルギー庁（エネルギー基本計画・非化石証書・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
  { name: "経済産業省（電力・ガス制度・電力システム改革）", url: "https://www.meti.go.jp/" },
];

export default function NihonTechnoCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/nihon-techno-corporate-electricity-guide"
        datePublished="2026-07-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "日本テクノの法人向け電力", url: "https://simulator.eic-jp.org/nihon-techno-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">日本テクノの法人向け電力</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            日本テクノの法人向け電力ガイド｜電気保安×電力小売のセット提供・市場連動/CO2フリーメニュー
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            日本テクノ株式会社の法人向け電力サービスを、公開情報に基づき中立的に整理します。電気設備の保安管理（電気主任技術者の外部委託・保安点検）と電力小売をセットで提供する事業特性、保安顧客基盤を背景とした高圧需要家向け供給、デマンド監視・電力見える化サービス、市場連動型メニュー・CO2フリーメニューの位置づけ、燃料費調整の算定方式、契約手続き・サポート体制、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-05" updatedAt="2026-07-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>日本テクノの事業特性（電気保安管理×電力小売のセット提供・デマンド見える化）</li>
              <li>法人向けプラン体系（高圧／市場連動型／CO2フリーメニュー・公表情報）</li>
              <li>燃調算定方式の旧一電との違い・市場連動メニューのリスク</li>
              <li>代表シナリオ別の5年コストインパクト試算（例示・捏造数値なし）と規模別ケース</li>
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
            <h2 className="text-xl font-semibold text-slate-900">日本テクノの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本テクノは電気保安管理と電力小売をセットで提供する事業者の代表例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。保安点検と電力供給を一体で扱う事業モデルの特徴と留意点を、契約者の判断材料として示します。
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
              で確認できます。カテゴリ全体の見取り図は{" "}
              <Link href="/articles/power-utility-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社別解説（カテゴリ一覧）</Link>
              をご覧ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本テクノが公開する法人向けプラン体系を、高圧・市場連動型・CO2フリーメニュー・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。個社の単価は本ページには記載しません。
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
              料金設計の考え方は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              、{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プランとは</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・事業特性・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、電源調達・事業特性、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。日本テクノは電気保安の顧客基盤とデマンド見える化サービスを持つ点が事業特性です。
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
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中部エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">関西エリアの法人電気料金</Link>
              で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2026年時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 日本テクノ公式サイト・電力ガス取引監視等委員会・JEPX等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算（例示）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の規模別に、契約電力適正化・デマンド管理・相見積・省エネ/再エネ調達を組み合わせた場合の年間削減イメージと5年累計を例示します。以下の数値は<strong>一般的な高圧水準・公的統計ベースの例示</strong>であり、<strong>特定社（日本テクノ）の単価・優劣を示すものではありません</strong>。実際の金額は契約条件・使用実態により変動し、個社の単価は記載しません。あくまで検討の桁感をつかむための目安としてご覧ください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{sc.premise}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">年間削減イメージ</p>
                      <p className="mt-1 text-lg font-bold text-sky-800">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">5年累計イメージ</p>
                      <p className="mt-1 text-lg font-bold text-sky-800">{sc.fiveYear}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{sc.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の契約電力・使用実態に即した試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で確認できます。上記はあくまで公的統計水準に基づく例示であり、特定社の単価・優劣を示すものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              保安×電力のセット提供・デマンド見える化の活用パターンを3ケースで、日本テクノの公開情報を踏まえた中立的な判断プロセスを整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート・付帯サービス、新電力切替時の留意点を整理します。保安管理とのセット提供を検討する場合は、条件の切り分けが重要です。
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
              保安×電力の事業者と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく、付帯サービスとの一体性を含む複数の要素を総合的に評価することが重要です。
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
              、旧一電との横断比較は{" "}
              <Link href="/major-utility-comparison-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電10社 横断比較ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本テクノの公開情報を活用するうえでの留意点を整理します。保安と電力のセット条件の切り分け、燃調算定方式の確認、市場連動メニューのリスク、新電力撤退時の備えに注意が必要です。
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
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・デマンド管理・省エネ・脱炭素）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本テクノ契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・デマンド管理・CO2フリー調達・省エネ投資・相見積・燃調ヘッジが柱です。
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
              デマンド管理の基礎は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド管理・契約電力適正化ガイド</Link>
              、近縁の新電力の解説は{" "}
              <Link href="/ennet-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エネット（法人向け）完全ガイド</Link>
              、{" "}
              <Link href="/local-utility-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域新電力（自治体系・地産地消）法人活用ガイド</Link>
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
              日本テクノを含む新電力切替を検討する法人需要家は、契約条件・燃調方式・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・デマンド管理・CO2フリー調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動メニューと固定単価メニューの年間コスト差を把握する</li>
              <li>燃調算定方式の違いを定量化する</li>
              <li>デマンド管理・相見積・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・地域・契約区分別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              が便利です。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
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
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/ennet-corporate-electricity-guide", title: "エネット（法人向け）完全ガイド", description: "全国系新電力の代表例。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/demand-control-guide", title: "デマンド管理・契約電力適正化ガイド", description: "基本料金削減の基礎となるデマンド管理。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金", description: "首都圏エリアの市況と単価水準。" },
              { href: "/region-chubu-business-electricity", title: "中部エリアの法人電気料金", description: "中部エリアの市況と単価水準。" },
              { href: "/region-kansai-business-electricity", title: "関西エリアの法人電気料金", description: "関西エリアの市況と単価水準。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の市況まとめ。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "固定単価メニューの仕組み。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動を避けるべきケース。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="日本テクノを含む新電力への切替や保安×電力のセット提供を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・デマンド管理・CO2フリー調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。新電力切替・旧一電継続の比較や保安×電力のセット条件の切り分け、契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
