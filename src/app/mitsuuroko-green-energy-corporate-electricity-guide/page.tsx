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
  "ミツウロコでんき（ミツウロコグリーンエネルギー）法人向けプラン完全ガイド｜自社再エネ電源・固定単価型・燃調連動";
const pageDescription =
  "ミツウロコでんき（運営: ミツウロコグリーンエネルギー株式会社／ミツウロコグループホールディングス傘下）の法人向けサービスを、公開情報に基づき中立的に整理。国内複数箇所の自社再生可能エネルギー発電所を背景とした電力小売・卸、都市ガス小売も手がける事業特性、高圧・特別高圧向けの燃料費調整ありの固定単価型メニュー体系、燃調連動条件、契約手続き・サポート体制、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ミツウロコでんき 法人",
    "ミツウロコグリーンエネルギー 高圧 特別高圧",
    "ミツウロコでんき 固定単価 燃料費調整",
    "ミツウロコ 再エネ 電力 法人",
    "新電力 自社電源 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/mitsuuroko-green-energy-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/mitsuuroko-green-energy-corporate-electricity-guide",
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
    label: "ミツウロコでんきの位置づけ",
    detail:
      "ミツウロコでんきは、ミツウロコグリーンエネルギー株式会社（ミツウロコグループホールディングス株式会社傘下）が展開する電力小売サービスのブランドです。ミツウロコグループはLPガス・石油・都市ガス・電力・再生可能エネルギー等を手がけるエネルギー企業グループで、電力事業では自社の再生可能エネルギー発電所の運営を背景に、電力の小売・卸を組み合わせて展開しています。旧一電（一般電気事業者を母体とする小売）ではない新規参入事業者の立ち位置で、複数エリアの法人需要家に対して高圧・特別高圧を含むサービスを提供する新電力です。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: ミツウロコグリーンエネルギー公式サイト・ミツウロコでんき法人サイト・参照日2026年7月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（新電力カテゴリ解説の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、石油系の全国系新電力（ENEOSでんき）、都市ガス系新電力、商社系新電力、自治体系・地産地消の地域新電力、そして自社再エネ電源を持つグループ系新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『自社の再生可能エネルギー発電所を保有し、燃料費調整ありの固定単価型メニューを軸に展開するグループ系新電力』の一例として、ミツウロコでんきの公開情報を解説します。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "ミツウロコグループは、太陽光・風力・バイオマス等を含む自社の再生可能エネルギー発電所を国内複数箇所に保有し、これらを電源の一つとして電力小売・卸を展開していることが公開情報で示されています。加えてLPガス・都市ガス小売も手がけており、エネルギーの複数商材を扱う点が事業特性です。発電から小売までを一定程度自社で担う構造は、電源調達の一部を市場（JEPX）や相対契約に依存する構造との対比で、価格変動リスクの受け止め方を理解するうえでの前提になります。個別の電源構成比率・発電所所在・供給量等は時期により変動するため、最新情報は公式サイトで確認してください（出典: ミツウロコグリーンエネルギー公式サイト）。",
  },
  {
    label: "法人需要家の構成",
    detail:
      "ミツウロコでんきの法人需要家には、製造業、物流・倉庫、商業施設、オフィスビル、店舗、公共・準公共施設等が含まれる可能性があります。グループのLPガス・都市ガス・石油サービスを利用する事業者は、エネルギー一括契約の文脈で電力契約もあわせて検討するケースが想定されます。具体的な業種別の特典・割引・セット契約等の有無は、公式公表および個別見積で確認してください。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、固定単価型か市場連動型かの区分、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無など複数の観点を総合して判断すべきものです。本ページはミツウロコでんきの公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の需要家向け）",
    role: "大規模工場・大型商業施設・物流拠点等",
    detail:
      "ミツウロコでんきは、公開情報において高圧・特別高圧向けの供給に対応する旨を示しています。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。特別高圧の大規模需要家は個別協議・個別見積となるケースが多く、契約期間・解約条件・燃調算定方式、固定単価型メニューの適用条件等を契約書で詳細に確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: ミツウロコでんき法人サイト・参照日2026年7月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けには、業務用メニューが公開情報として示されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まる一般的な構造です。ミツウロコでんきの公開情報では、燃料費調整ありの固定単価型メニューを軸に提供する旨が概括的に示されており、電力量料金の基本単価を契約期間中一定に据え置きつつ、燃料費調整額で燃料価格変動を反映する設計が想定されます。旧一電の標準メニューとは燃調算定方式・契約期間・解約条件等で違いがあることが一般的なため、相見積で同一条件比較を行うことが重要です（出典: ミツウロコでんき法人サイト）。",
  },
  {
    name: "再エネ関連メニュー・CN対応（自社再エネ電源を背景に）",
    role: "RE100対応・脱炭素志向の需要家向け",
    detail:
      "ミツウロコグループは太陽光・風力・バイオマス等の自社再生可能エネルギー発電所を保有しており、これを背景とした再エネ調達メニュー・非化石証書付きメニュー・CO2フリー電力等の提供が公開情報で示されています。脱炭素を進める法人需要家にとって、自社電源を持つ事業者の再エネメニューは調達手段の一つとなり得ます。供給可能量・対応エリア・トラッキングの有無・条件はメニューにより異なるため、RE100等の調達計画に組み込む際は事前確認が必要です（出典: ミツウロコグリーンエネルギー公式サイト）。",
  },
  {
    name: "燃料費調整額の算定（固定単価型メニューでの取扱い）",
    role: "全メニュー共通の変動要素",
    detail:
      "固定単価型メニューであっても、電力量料金の基本単価とは別に、燃料費調整額は毎月変動するのが一般的です。新電力の燃料費調整は、旧一電と同様の方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、独自の算定式・上限設定を用いる場合があります。ミツウロコでんきの法人メニューでも、メニュー区分・契約区分により燃調算定方式・上限の有無が異なる可能性があり、契約書で必ず確認してください。固定単価型は基本単価が据え置かれる一方、燃調部分の変動は残る点を理解しておくことが重要です（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "ミツウロコでんきは複数エリアにまたがって電力小売サービスを提供しています。当サイトの地域別解説では、関東（東京エリア）・中部・東北を含む各エリアの市況を整理しています。具体的な対応エリアと契約区分（高圧・特別高圧）の組合せは公式サイト・個別見積で確認してください（出典: ミツウロコでんき法人サイト）。",
  },
  {
    label: "電源ポートフォリオ・自社再エネ発電所（公表情報）",
    detail:
      "ミツウロコグループは太陽光・風力・バイオマス等の再生可能エネルギー発電所を国内複数箇所に保有・運営していることが公開情報で示されています。自社電源に加え、JEPX市場や相対契約からの調達を組み合わせて供給する構造が一般的です。電源構成の比率・発電所所在・出力等の詳細は時期により変動するため、グループ公式サイト・各種公表資料で確認してください。電源ポートフォリオと燃調算定方式・燃料調達の関係を確認することで、価格変動リスクの構造を理解できます（出典: ミツウロコグリーンエネルギー公式サイト）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は、自社電源で不足する分・余剰となる分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。ミツウロコでんきは自社再エネ電源を持つ一方、需給に応じてJEPXも活用していると考えられます。燃料費調整ありの固定単価型メニューは、基本単価を据え置くことで市場スポット価格の急変動を電力量料金単価に直接反映しにくい設計ですが、燃調部分や燃料調達コストを通じた影響は残ります。固定単価型と市場連動型のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。自社再エネ電源を持つ事業者を選んでも、賦課金・容量拠出金といった制度負担そのものは変わらない点に留意してください（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 小規模高圧（小規模店舗・小型オフィス／契約電力 数十kW規模）",
    annual: "想定年間削減イメージ ▲8万円/年",
    cumulative: "▲8万円 × 5年 ＝ 40万円",
    detail:
      "小規模の高圧需要家が、契約電力の適正化・燃調算定方式の見直し・複数社の相見積を組み合わせた場合の年間削減イメージを、一般的な高圧水準の公的統計をもとに例示したものです。想定として年間 ▲8万円、5年累計では ▲8万円 × 5年 ＝ 40万円 の水準感になります。固定単価型メニューを選ぶ場合は、基本単価の据え置き期間と燃調上限の有無を確認したうえで、変動リスクの抑制効果を自社条件で見積もることが重要です。",
    note: "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 中規模高圧（中規模工場・商業施設／契約電力 数百kW規模）",
    annual: "想定年間削減イメージ ▲14万円/年",
    cumulative: "▲14万円 × 5年 ＝ 70万円",
    detail:
      "中規模の高圧需要家が、デマンド管理による契約電力の適正化・省エネ投資・燃調条件を含めた相見積を組み合わせた場合の年間削減イメージを、一般的な高圧水準の公的統計をもとに例示したものです。想定として年間 ▲14万円、5年累計では ▲14万円 × 5年 ＝ 70万円 の水準感になります。固定単価型と市場連動型の年間コスト差、燃調算定方式の違いを定量化したうえで、自社の使用パターンに合う条件を中立的に選定することが重要です。",
    note: "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 大規模高圧〜特別高圧（大型工場・物流拠点／契約電力 千kW超規模）",
    annual: "想定年間削減イメージ ▲30万円/年",
    cumulative: "▲30万円 × 5年 ＝ 150万円",
    detail:
      "大規模高圧〜特別高圧の需要家が、契約電力の最適化・力率改善・再エネ調達と省エネ投資・複数社の相見積を組み合わせた場合の年間削減イメージを、一般的な高圧水準の公的統計をもとに例示したものです。想定として年間 ▲30万円、5年累計では ▲30万円 × 5年 ＝ 150万円 の水準感になります。特別高圧・大型高圧は個別協議・個別見積が中心となるため、固定単価型メニューの適用条件・燃調上限・契約期間を精査したうえで、自社条件に照らして中立的に判断することが重要です。",
    note: "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 多拠点の物流・倉庫事業者（高圧の複数拠点）",
    before:
      "Before: 複数エリアに倉庫を展開する事業者が、各拠点で旧一電エリア別の高圧契約を保有。エリアごとに条件がばらつき、一括管理が困難。燃調変動局面で電気代が拠点ごとに変動。",
    after:
      "After: 自社再エネ電源を持つグループ系新電力（ミツウロコでんき等）の固定単価型メニューへの一括切替の可能性、または旧一電継続のエリア別最適化の二つの選択肢で相見積を取得し、同一条件で比較。契約管理の一元化メリットと、エリア別最適化のコストメリットを総合評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 多拠点一括管理と契約条件最適化のトレードオフを定量化し、自社の運用負荷とコストの両面で中立的に選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 中規模製造業（高圧・通常負荷／燃調変動を懸念）",
    before:
      "Before: 単一拠点の高圧需要家が現契約（旧一電または現新電力）を継続。燃料費調整額の変動局面で電気代が変動し、価格の見通しを立てにくい状態で契約見直しを検討中。",
    after:
      "After: ミツウロコでんきの固定単価型メニューを含む複数新電力と旧一電の継続条件で相見積を取得。基本単価の据え置き期間・燃調上限の有無、燃調算定方式（旧一電方式／独自方式）の違い、契約期間・解約条件、再エネメニュー有無を整理し、自社の使用パターンに合う条件を中立的に選定。",
    result:
      "Result: 固定単価型による価格見通しの立てやすさと、変動型のメリット・デメリットを比較したうえで判断。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 脱炭素・RE100志向の中堅企業（再エネ調達を検討）",
    before:
      "Before: 取引先・投資家からの要請でRE100・CO2削減の対応を迫られる中堅企業が、再エネ電力の調達手段を検討。自家消費の太陽光だけでは目標達成に不足し、外部調達メニューを比較中。",
    after:
      "After: 自社再エネ発電所を持つ事業者（ミツウロコでんき等）の再エネメニュー・非化石証書付きメニューと、他社の再エネメニュー・コーポレートPPA・非化石証書の直接調達を相見積で比較。トラッキングの有無・CO2排出係数の扱い・追加性の観点を整理し、自社の脱炭素方針に合う調達手段を中立的に選定。",
    result:
      "Result: 再エネ調達の複数手段を要件適合で比較し、コストと脱炭素効果のバランスを評価。※削減効果・要件適合は各メニューの条件により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。新電力切替の場合、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が重要です。固定単価型メニューを選ぶ場合は、基本単価の適用期間・改定条件も見積段階で確認しておくと良いでしょう。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "ミツウロコでんきは法人向けの問い合わせ窓口・Web会員サービス等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。グループのLPガス・都市ガス等の他商材と併せた問い合わせ窓口の有無も、エネルギー一括管理を検討する場合の確認ポイントです。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）・上限の有無、固定単価型の基本単価適用期間、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・契約期間・解約条件・サポート・再エネメニューを総合して判断すべきです。本ページはミツウロコでんきの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "固定単価型でも燃調変動は残る点を確認",
    detail:
      "燃料費調整ありの固定単価型メニューは、電力量料金の基本単価を据え置く一方、燃料費調整額は別途変動するのが一般的です。『固定単価』という表現だけで請求総額が完全に固定されると誤解しないよう、燃調部分の算定方式・上限の有無を契約書で確認することが重要です。",
  },
  {
    label: "燃調算定方式・上限の差を確認",
    detail:
      "新電力の燃調算定方式は、旧一電方式・独自方式等で異なる場合があり、上限設定の有無もメニューにより異なります。同じ『燃調連動』でも算定基礎や上限が異なれば、価格変動の振れ幅・タイミングが異なります。契約書で算定式と上限条件を確認することが重要です。",
  },
  {
    label: "新電力撤退リスクと最終保障供給",
    detail:
      "新電力の事業撤退・小売登録の取消し等のリスクは、過去にも事例がありました。自社電源を持つ事業者であっても、燃料市況・需給環境の変化はリスク要因です。新電力契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解し、撤退時の切替手順を確認しておくことが重要です。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、ミツウロコでんき・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。固定単価型と市場連動型を横並びで比較できる環境を整えることが重要です。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "特別高圧／高圧の区分、固定単価型か市場連動型か、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件を公開情報で確認します。",
  },
  {
    label: "燃調算定方式・上限の感応度",
    detail:
      "旧一電方式（貿易統計連動）と新電力独自方式の違い、燃調上限の有無を理解し、自社の使用パターンでの変動リスクを評価します。固定単価型でも燃調部分は変動する点を織り込みます。",
  },
  {
    label: "再エネ調達の選択肢",
    detail:
      "再エネメニュー、非化石証書、コーポレートPPAなど、RE100対応の調達手段を比較します。ミツウロコグループの自社再エネ発電所を背景としたメニューの活用可能性も検討対象です。",
  },
  {
    label: "契約・サポート・撤退リスク",
    detail:
      "契約手続きの手間、サポート窓口、他商材（LPガス・都市ガス）との一括管理の可否、新電力撤退時の切替体制、最終保障供給の仕組み理解を確認します。",
  },
  {
    label: "新電力・旧一電との比較環境",
    detail:
      "ミツウロコでんきと同様のグループ系・全国系新電力（複数社）、エリア新電力、旧一電継続の複数パターンで相見積を取得し、同一条件で比較できる環境にあります。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "再エネ調達によるCN対応",
    detail:
      "再エネメニュー・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。自社再エネ発電所を持つ事業者のメニュー活用も選択肢の一つです。追加性・トラッキングの要件は事前に確認します。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "ミツウロコでんき継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。固定単価型と市場連動型の年間コスト差の見立ても重要です。",
  },
  {
    label: "燃調変動への備え",
    detail:
      "固定単価型・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。ただし固定単価型でも燃調部分の変動は残るため、上限条件の確認が前提です。",
  },
];

const checklistItems = [
  "自社拠点がミツウロコでんきの供給対応エリアに含まれるか確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と適用メニューを公開情報で確認したか",
  "固定単価型か市場連動型か、基本単価の適用期間を確認したか",
  "燃料費調整額の算定方式（旧一電方式／独自）と上限の有無を契約書で確認したか",
  "『固定単価』でも燃調部分は変動する点を理解したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "再エネメニュー（非化石証書・トラッキング等）の供給条件を確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "ミツウロコでんき・他新電力・旧一電継続の複数パターンで相見積を取得したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "ミツウロコでんき（ミツウロコグリーンエネルギー）とはどんな会社（サービス）ですか？",
    answer:
      "ミツウロコでんきは、ミツウロコグリーンエネルギー株式会社（ミツウロコグループホールディングス傘下）が展開する電力小売サービスのブランドです。ミツウロコグループはLPガス・石油・都市ガス・電力・再生可能エネルギー等を手がけるエネルギー企業グループで、国内複数箇所に自社の再生可能エネルギー発電所を保有し、電力の小売・卸を展開しています。複数エリアで法人・家庭向けにサービスを提供する新電力の一つです。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: ミツウロコグリーンエネルギー公式サイト・ミツウロコでんき法人サイト）。",
  },
  {
    question: "自社再エネ電源を持つ新電力と、旧一電（東電EP・関西電力等）の違いは？",
    answer:
      "ミツウロコでんきのように自社の再生可能エネルギー発電所を持つ新電力は、電源の一部を自社で賄いつつ、不足分・余剰分をJEPXや相対契約で調整する構造が一般的です。旧一電は各エリアの一般電気事業者を母体とする小売事業者で、エリアごとに会社が異なります。料金体系・燃調算定方式・固定単価型か市場連動型か・サポート体制・契約期間・解約条件などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターは旧一電・新電力のいずれかを推奨する立場にはなく、自社条件に応じた中立的な判断を支援します。",
  },
  {
    question: "ミツウロコでんきの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、高圧・特別高圧向けに、燃料費調整ありの固定単価型メニューを提供する旨が概括的に示されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定され、自社再エネ電源を背景とした再エネメニュー・非化石証書付きメニュー等も公開情報で示されています。特別高圧・大型高圧は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: ミツウロコでんき法人サイト・参照日2026年7月時点）。",
  },
  {
    question: "『固定単価型』なら電気代は完全に固定されるのですか？",
    answer:
      "いいえ。燃料費調整ありの固定単価型メニューは、電力量料金の基本単価を契約期間中一定に据え置く設計ですが、燃料費調整額は別途毎月変動するのが一般的です。したがって請求総額が完全に固定されるわけではありません。固定単価型のメリット（基本単価の見通しの立てやすさ）と、燃調部分の変動が残る点の両方を理解したうえで、燃調算定方式・上限の有無を契約書で確認することが重要です（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
  {
    question: "ミツウロコでんきと他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・固定単価型か市場連動型か・契約期間・サポート・再エネメニューを総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "新電力は撤退リスクがあると聞きました。自社電源があれば安心ですか？",
    answer:
      "自社の再生可能エネルギー発電所を持つ事業者であっても、燃料市況・需給環境・市場価格の変化はリスク要因であり、撤退リスクがゼロになるわけではありません。新電力の事業撤退・小売登録取消し等は、過去にも複数の事例があります。新電力契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退時の切替手順・必要書類を事前に確認しておくことが重要です。契約書の解約条項・違約金条項も確認しておきましょう（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "ミツウロコでんきの再エネメニューはRE100対応に使えますか？",
    answer:
      "ミツウロコグループは自社の再生可能エネルギー発電所を保有し、再エネ調達メニュー・非化石証書付きメニュー・CO2フリー電力等を公開しています。これらのメニューはRE100の調達手段の一つとして検討可能ですが、対応エリア・供給可能量・トラッキングの有無・CO2排出係数の扱い・追加性の観点はメニューにより異なります。RE100クライテリアへの適合性を含めて、調達計画段階で確認することを推奨します（出典: ミツウロコグリーンエネルギー公式サイト）。",
  },
  {
    question: "ミツウロコでんきの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・期間途中解約違約金・燃調算定方式・上限の有無・固定単価型の適用期間・解約条件を契約書で詳細に確認することが重要です。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "ミツウロコグリーンエネルギー 公式サイト（電力小売・再エネ発電事業）", url: "https://www.mitsuurokogreenenergy.com/" },
  { name: "ミツウロコでんき 法人向けサイト（高圧・特別高圧メニュー）", url: "https://mitsuurokodenki.jp/biz/" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成・再エネ賦課金）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
];

export default function MitsuurokoGreenEnergyCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/mitsuuroko-green-energy-corporate-electricity-guide"
        datePublished="2026-07-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "ミツウロコでんきの法人向けプラン", url: "https://simulator.eic-jp.org/mitsuuroko-green-energy-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ミツウロコでんきの法人向けプラン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ミツウロコでんき（ミツウロコグリーンエネルギー）法人向けプラン完全ガイド｜自社再エネ電源・固定単価型・燃調連動
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ミツウロコでんき（運営: ミツウロコグリーンエネルギー株式会社／ミツウロコグループホールディングス傘下）の法人向けサービスを、公開情報に基づき中立的に整理します。国内複数箇所の自社再生可能エネルギー発電所を背景とした電力小売・卸、都市ガス小売も手がける事業特性、高圧・特別高圧向けの燃料費調整ありの固定単価型メニュー体系、燃調連動条件、契約手続き・サポート体制、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-05" updatedAt="2026-07-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>ミツウロコでんきの法人向けプラン体系（高圧／特別高圧／固定単価型／再エネメニュー）</li>
              <li>自社再エネ電源を持つグループ系新電力としての事業特性（公表情報）</li>
              <li>燃料費調整ありの固定単価型の考え方・燃調変動が残る点の留意</li>
              <li>代表シナリオ別の5年コストインパクト試算と規模別ケース別判断材料（中立的整理・捏造数値なし）</li>
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
            <h2 className="text-xl font-semibold text-slate-900">ミツウロコでんきの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ミツウロコでんきは、自社の再生可能エネルギー発電所を背景に、燃料費調整ありの固定単価型メニューを軸に展開するグループ系新電力の一例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。
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
              で確認できます。石油系の全国系新電力の例として{" "}
              <Link href="/eneos-denki-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ENEOSでんきの法人向けプラン</Link>
              、地産地消型の例として{" "}
              <Link href="/local-utility-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域新電力（自治体系・地産地消）法人活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ミツウロコでんきが公開する法人向けプラン体系を、特別高圧・高圧・再エネメニュー・燃料費調整ありの固定単価型の観点で整理します。具体的単価は公式公表・個別見積で確認してください。
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
              固定単価型・市場連動型の考え方は{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プランとは</Link>
              、{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              、再エネメニューの基礎は{" "}
              <Link href="/renewable-energy-plan-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネプランの仕組み</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源／事業特性・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア、自社再エネ発電所を含む電源ポートフォリオ、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
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
              <Link href="/region-tohoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東北エリアの法人電気料金</Link>
              で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2026年7月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: ミツウロコグリーンエネルギー公式サイト・ミツウロコでんき法人サイト・電力ガス取引監視等委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧需要家の規模別に、契約電力の適正化・燃調条件の見直し・相見積・省エネ投資を組み合わせた場合の年間削減イメージと5年累計を例示します。以下の数値は一般的な高圧需要家の公的統計水準に基づく例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動し、個社の単価は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。数値は公的統計水準に基づく例示です。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">年間の削減イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">5年累計イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.cumulative}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{sc.detail}</p>
                  <p className="mt-2 text-xs text-slate-500">{sc.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の規模・使用実態に即した試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で確認できます。地域・業種・契約区分から現状の年間電気代と削減余地の目安を把握し、相見積の準備に活用してください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社再エネ電源を持つグループ系新電力の活用パターンを3類型で、ミツウロコでんきの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
              グループ系新電力と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。
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
              ミツウロコでんきの公開情報を活用するうえでの留意点を整理します。固定単価型でも燃調部分は変動する点、燃調算定方式・上限の確認、新電力撤退時の備えに注意が必要です。
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
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ミツウロコでんき契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・再エネ調達・省エネ投資・相見積・燃調ヘッジが柱です。
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
              再エネ調達・脱炭素の基礎は{" "}
              <Link href="/re100-overview-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人のためのRE100入門</Link>
              、{" "}
              <Link href="/non-fossil-certificates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非化石証書とは</Link>
              、電力調達の需要側対策は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロールの基礎</Link>
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
              ミツウロコでんきを含む新電力切替を検討する法人需要家は、契約条件・燃調方式・固定単価型か市場連動型か・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>固定単価型メニューと市場連動メニューの年間コスト差を把握する</li>
              <li>燃調算定方式・上限の有無の違いを定量化する</li>
              <li>相見積・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・契約区分から現状を試算するには{" "}
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
              { href: "/eneos-denki-corporate-electricity-guide", title: "ENEOSでんき（法人向け）完全ガイド", description: "石油系の全国系新電力の代表例。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
              { href: "/fixed-price-plan", title: "固定単価プランとは", description: "固定単価型メニューの仕組み。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/renewable-energy-plan-explained", title: "再エネプランの仕組み", description: "再エネメニューの調達構造を解説。" },
              { href: "/re100-overview-for-business", title: "法人のためのRE100入門", description: "再エネ100%調達の考え方。" },
              { href: "/non-fossil-certificates", title: "非化石証書とは", description: "CO2フリー価値の証書調達の基礎。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金", description: "関東エリアの市況と料金動向。" },
              { href: "/region-chubu-business-electricity", title: "中部エリアの法人電気料金", description: "中部エリアの市況と料金動向。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "エリア別の市況をまとめて確認。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="ミツウロコでんきを含むグループ系・全国系新電力への切替を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。新電力切替・旧一電継続の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
