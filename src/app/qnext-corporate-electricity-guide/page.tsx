import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import ConsultCta from "../../components/ConsultCta";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "九電ネクスト法人向けガイド｜九電100%子会社・高圧特高は市場連動プランのみ提案（2026年7月時点）";
const pageDescription =
  "九州電力100%出資の九電ネクストを公開情報に基づき中立整理。2025年4月に九電みらいエナジーから小売事業を吸収分割で承継した経緯、高圧・特別高圧の新規は市場連動電力プランのみ提案という公式方針、申込状況等により提案不可の場合あり、高圧は公開料金表なしの見積ベース、会員Webは東京・関西・九州エリア向け、を明記し市場連動リスクの既存解説へ誘導します。特定企業の優劣評価は行いません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "九電ネクスト 法人",
    "九電ネクスト 市場連動 高圧",
    "九電みらいエナジー 吸収分割",
    "九州電力 100% 子会社 新電力",
    "九電ネクスト 見積 特別高圧",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/qnext-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/qnext-corporate-electricity-guide",
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
    label: "九電ネクストの位置づけ",
    detail:
      "九電ネクストは、九州電力の100%出資会社です。2025年4月、九電みらいエナジーから小売電気事業を吸収分割により承継し、現行の販売主体は九電ネクストとなっています。公式は『高圧・特別高圧の新規は市場連動電力プランのみ提案』と明記しており、本ページでもこの方針を必ず確認事項として扱います。あわせて『申込状況等により提案不可の場合あり』と注記されます。高圧の公開料金表はなく見積ベースです。会員向けWebは東京・関西・九州エリア向けと案内されています。市場連動はJEPX等の卸価格変動を受けやすいため、既存の市場連動解説ページと併読してください。特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: qnext.co.jp / qnext.kyuden.co.jp・参照日2026年7月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（新電力カテゴリ解説の代表例として）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電大手だけでなく、旧一電グループ系のグループ系小売新電力（九電ネクスト・ENEOSでんき・出光興産系など）、都市ガス系新電力、商社系新電力、自治体系・地産地消の地域新電力など、新電力の主要類型ごとの代表例を中立的に整理しています。本ページは『旧一電100%子会社の小売電気事業者のグループ系小売新電力』の典型例として九電ネクストの公開情報を解説します。特定社を推奨する趣旨ではなく、類型の理解と自社条件への当てはめを目的とします。",
  },
  {
    label: "事業特性（公表情報）",
    detail:
      "九州電力グループは、旧一般電気事業者を母体とする総合エネルギー企業グループです。九電ネクストはその100%出資の小売電気事業者として、グループの小売機能を担います。個別の電源構成・調達方式・単価は公開情報の範囲で概括され、契約条件・時期により変動します（出典: 九州電力公式サイト・九電ネクスト公式サイト）。",
  },
  {
    label: "法人需要家の構成",
    detail:
      "九電ネクストの法人需要家には、サービスステーション併設の店舗、運輸・物流事業者、製造業、卸・小売の商業施設、オフィスビル、多拠点展開の事業者等が含まれる可能性があります。グループの燃料（ガソリン・軽油・重油・LPG等）を利用する事業者は、エネルギー調達の一括検討の文脈で電力契約も併せて検討するケースが想定されます。業種別・契約区分別の具体的な特典・条件は公式公表および個別見積で確認してください。本ページで特定業種を推奨する趣旨はありません。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、契約期間、サポート体制、BCP対応、再エネ・グリーンメニューの有無など複数の観点を総合して判断すべきものです。本ページは九電ネクストの公開情報を整理しますが、旧一電継続・他の新電力との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。『九電ネクストが最も有利／不利』といった断定は行わず、事実ベースで判断材料を提示します。",
  },
];

const planTypes = [
  {
    name: "高圧・特別高圧電力（九電ネクスト高圧・特別高圧（市場連動プラン・見積））",
    role: "中〜大規模工場・大型商業施設・物流拠点・オフィスビル等",
    detail:
      "公開情報では、高圧・特別高圧の法人需要家向けメニューとして『九電ネクスト高圧・特別高圧（市場連動プラン・見積）』が案内されています。料金は基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。高圧（契約電力50kW以上2,000kW未満）・特別高圧（2,000kW以上）の大口需要家は個別協議・個別見積となるケースが多く、契約期間・解約条件・燃調算定方式等を契約書で詳細に確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 九電ネクスト公式サイト・参照日2026年7月時点）。",
  },
  {
    name: "低圧電力（従量電灯S/M・動力P／九電ネクスト低圧）",
    role: "小規模店舗・小規模事業所・低圧動力を使う事業者向け",
    detail:
      "公開情報では、低圧の法人・事業者向けに従量電灯S・従量電灯Mや動力P（低圧電力）等のメニューが案内されています。契約電力50kW未満の小規模事業所・店舗・低圧動力設備を持つ事業者が対象となる区分です。基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金の一般的な構成で、契約アンペア・契約容量に応じた基本料金が適用される一般的な構造が想定されます。低圧区分の適用可否・具体単価は公式公表・申込条件で確認してください（出典: 九電ネクスト公式サイト）。",
  },
  {
    name: "グリーンメニュー（九電ネクスト環境メニュー（公表範囲））",
    role: "RE100対応・CO2フリー・脱炭素志向の需要家向け",
    detail:
      "公開情報では、環境価値を付与したグリーンメニュー『九電ネクスト環境メニュー（公表範囲）』が案内されています。非化石証書・トラッキング付非化石証書・卒FIT電源等を用いて実質再生可能エネルギー・CO2フリーの電力供給を可能とするメニューで、RE100対応やSBT・CDP等の開示要請への対応手段の一つとなり得ます。対応エリア・供給可能量・CO2排出係数の扱い・トラッキングの有無はメニューにより異なるため、調達計画に組み込む際は事前確認が必要です。九州電力グループは再生可能エネルギー（風力発電等）事業も公開情報で手がけており、グループのエネルギー知見を背景としています（出典: 九電ネクスト公式サイト・九州電力グループ公式サイト）。",
  },
  {
    name: "燃料費調整額の算定（新電力独自の場合あり）",
    role: "全メニュー共通の変動要素",
    detail:
      "新電力の燃料費調整は、旧一電と同様の方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合、独自の燃調上限・下限を設ける場合があります。九電ネクストの法人メニューでも、メニュー区分・契約区分により燃調算定方式が異なる可能性があり、契約書で必ず確認してください。市場連動方式の場合は、JEPXスポット価格の高騰局面で単価が大きく変動するリスクがあります（出典: 各社公式の燃調算定方式公表・電力・ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（公表情報）",
    detail:
      "九電ネクストは、北海道電力エリアから九州電力エリアまでの複数エリア（離島を除く）で電力小売サービスを提供しているグループ系小売の事業者です。沖縄電力エリアや一部離島は対象外となる場合があるため、具体的な対応エリアと契約区分（低圧／高圧／特別高圧）の組合せは公式サイト・個別見積で確認してください（出典: 九電ネクスト公式サイトサービス提供エリア公表）。",
  },
  {
    label: "電源・調達（公表情報）",
    detail:
      "九州電力グループはエネルギー小売の顧客基盤に加え、再生可能エネルギー（風力発電等）事業を公開情報で手がけています。電力小売の電源・調達の詳細は公開情報の範囲で概括され、JEPX市場調達・相対契約・グループの再エネ電源・非化石証書の組合せが想定されますが、個別の電源構成比率は契約条件・時期で変動します。電源構成と燃調算定方式・調達の関係を確認することで、価格変動リスクの構造を理解できます（出典: 九州電力グループ公式サイト・九電ネクスト公式サイト）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。市場連動方式のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力・ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。再エネ賦課金は2026年度は4.18円/kWh（確定）で、これらは特定企業のプラン選択では回避できない共通要素です。電気代総額の評価では、こうした制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 中規模高圧の需要家（単一拠点・通常負荷）",
    profile: "高圧・契約電力200〜500kW程度／製造・倉庫・中規模商業施設を想定",
    annual: "想定年間削減イメージ ▲9万円/年",
    cumulative: "▲9万円 × 5年 ＝ 45万円（検算：9×5＝45）",
    detail:
      "中規模の高圧需要家が、契約電力（デマンド）の適正化・燃調算定方式の見直し・相見積による条件最適化を組み合わせた場合の年間削減イメージです。単価そのものの優劣ではなく、契約電力の過剰分の圧縮とメニュー条件の見直しによる総額最適化の一例として示します。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 商業／多拠点の需要家（複数拠点・負荷変動あり）",
    profile: "高圧・複数拠点合計で契約電力500〜1,500kW程度／小売チェーン・多店舗・物流を想定",
    annual: "想定年間削減イメージ ▲16万円/年",
    cumulative: "▲16万円 × 5年 ＝ 80万円（検算：16×5＝80）",
    detail:
      "複数拠点を持つ商業・多拠点事業者が、拠点ごとの契約条件のばらつきを一元整理し、多拠点一括の相見積と拠点別最適化を比較した場合の年間削減イメージです。管理の一元化と条件最適化のトレードオフを定量化した一例で、特定社への切替を推奨する趣旨ではありません。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 特別高圧の大口／大規模需要家（大規模拠点）",
    profile: "特別高圧・契約電力2,000kW以上／大規模工場・大型物流拠点・大型商業施設を想定",
    annual: "想定年間削減イメージ ▲38万円/年",
    cumulative: "▲38万円 × 5年 ＝ 190万円（検算：38×5＝190）",
    detail:
      "特別高圧の大口需要家が、個別見積による条件最適化・デマンド管理・再エネ調達（グリーンメニュー・非化石証書）の組合せを検討した場合の年間削減イメージです。大口ほど基本料金・電力量料金の絶対額が大きく、条件見直しの影響も大きくなる構造を示す一例です。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 全国多拠点の物流・小売事業者（高圧の複数拠点）",
    before:
      "Before: 全国に倉庫・店舗を展開する事業者が、各拠点で旧一電エリア別の高圧契約を保有。エリアごとに条件がばらつき、一括管理が困難で、契約更新時期も分散している。",
    after:
      "After: グループ系小売新電力（九電ネクスト等）への一括切替の可能性、または旧一電継続のエリア別最適化の二つの選択肢で相見積を取得し、同一条件で比較。契約管理の一元化メリットと、エリア別最適化のコストメリットを総合評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 多拠点一括管理と契約条件最適化のトレードオフを定量化し、自社の運用負荷とコストの両面で中立的に選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 中規模製造業（高圧・通常負荷）",
    before:
      "Before: 単一拠点の高圧需要家が現契約（旧一電または現新電力）を継続。燃料費調整額の変動局面で電気代が変動し、契約見直しを検討中。契約電力が過去の設備更新前の水準のまま据え置かれている。",
    after:
      "After: 九電ネクストを含む複数新電力と旧一電の継続条件で相見積を取得。燃調算定方式（旧一電方式／市場連動／独自方式）の違い、契約期間・解約条件、グリーンメニュー有無を整理し、自社の使用パターンに合う条件を中立的に選定。あわせて契約電力（デマンド）の適正化余地を確認。",
    result:
      "Result: 燃調算定方式の違いを理解したうえで、変動リスクと固定化メリットのバランスを評価。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 脱炭素対応を進める中堅企業（グリーンメニュー検討）",
    before:
      "Before: 取引先・投資家からのCO2排出開示要請（SBT・CDP等）を受け、電力のCO2フリー化・RE100対応を検討する中堅企業。どの調達手段（グリーンメニュー・非化石証書・コーポレートPPA）を選ぶか未整理。",
    after:
      "After: 九電ネクストのグリーンメニュー（ビジネスグリーン）を含む複数事業者のCO2フリーメニュー・非化石証書・PPAの条件を相見積で比較。コスト増分・CO2削減量・トラッキングの有無・RE100適合性を整理し、自社の開示要請に合う調達手段を中立的に選定。",
    result:
      "Result: 環境価値の調達手段ごとのコストと適合性を比較し、脱炭素と電気代のバランスを整理。※削減効果・追加コストは条件により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。新電力切替の場合、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が重要です。低圧・高圧・特別高圧で必要書類や審査の流れが異なる場合があります。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。低圧・高圧いずれの区分でも共通で必要になります。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "九電ネクストは法人向けの問い合わせ窓口・Web会員サービス等を公開情報で案内しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（エリア別の旧一電送配電会社）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "新電力切替時の留意事項",
    detail:
      "新電力切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（旧一電と異なる場合）、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。グリーンメニューを選ぶ場合は環境価値の付与条件・証書の扱いも確認します。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（算定方式・上限有無）・契約期間・解約条件・サポート・グリーンメニューを総合して判断すべきです。本ページは九電ネクストの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "燃調算定方式の差を確認",
    detail:
      "新電力の燃調算定方式は、旧一電方式・市場連動方式・独自方式等で異なる場合があります。同じ『燃調連動』でも算定基礎が異なれば、価格変動の振れ幅・タイミングが異なります。契約書で算定式・上限下限の有無を確認することが重要です。",
  },
  {
    label: "市場連動メニューのリスク",
    detail:
      "JEPXスポット価格連動のメニューは、市場高騰時に単価が大きく上昇するリスクがあります。2021年冬・2022〜2023年冬の市場高騰局面の経験を踏まえ、市場連動の採否は自社のリスク許容度に応じて中立的に判断してください。",
  },
  {
    label: "新電力撤退リスクと最終保障供給",
    detail:
      "新電力の事業撤退・小売登録の取消し等のリスクは、過去にも事例がありました。新電力契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供）の仕組みを理解し、撤退時の切替手順を確認しておくことが重要です。旧一電グループ系グループの基盤があっても、電力小売事業の継続性は制度の観点で確認しておくと安心です。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、九電ネクスト・他の新電力・旧一電継続の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。グリーンメニューを含める場合は環境価値付きと通常メニューを分けて比較すると整理しやすくなります。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "低圧（従量電灯S/M・動力P）／高圧・特別高圧（ビジネスL）の区分、季節・時間帯別単価の有無、基本料金の算定、力率割引の条件を公開情報で確認します。",
  },
  {
    label: "燃調算定方式の感応度",
    detail:
      "旧一電方式（貿易統計連動）と新電力独自方式・市場連動方式の違いを理解し、自社の使用パターンでの変動リスクを評価します。上限・下限の有無も併せて確認します。",
  },
  {
    label: "グリーン・再エネ調達の選択肢",
    detail:
      "グリーンメニュー（ビジネスグリーン）、非化石証書、トラッキング付証書、コーポレートPPAなど、RE100対応の調達手段を比較します。九州電力グループの再エネ事業の活用可能性も検討対象です。",
  },
  {
    label: "契約・サポート・撤退リスク",
    detail:
      "契約手続きの手間、サポート窓口、新電力撤退時の切替体制、最終保障供給の仕組み理解を確認します。低圧と高圧でサポート体制が異なる場合がある点も確認します。",
  },
  {
    label: "グループ系小売新電力との比較環境",
    detail:
      "九電ネクストと同様の旧一電グループ系・グループ系小売新電力（複数社）、エリア新電力、旧一電継続の3パターンで相見積を取得し、同一条件で比較できる環境にあります。優劣ではなく条件適合で選ぶ姿勢が重要です。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。設備更新後にデマンドが下がっている場合は特に見直し余地があります。",
  },
  {
    label: "グリーンメニュー・再エネ調達によるCN対応",
    detail:
      "グリーンメニュー（ビジネスグリーン）・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。九州電力グループの再エネ事業活用も選択肢の一つです。コスト増分と削減量を比較して優先順位を整理します。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。契約見直しだけでなく需要側の対策も併せて検討します。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "九電ネクスト継続・他新電力切替・旧一電継続の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。低圧・高圧の区分ごとに条件を揃えて比較することが重要です。",
  },
  {
    label: "燃調変動への備え",
    detail:
      "固定単価・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。市場連動と固定のバランスを自社のリスク許容度に応じて設計します。",
  },
];

const checklistItems = [
  "自社拠点が九電ネクストの供給対応エリア（離島除く複数エリア）に含まれるか確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "低圧（従量電灯S/M・動力P）／高圧・特別高圧（ビジネスL）の区分と適用メニューを公開情報で確認したか",
  "燃料費調整額の算定方式（旧一電方式／市場連動／独自）を契約書で確認したか",
  "上限・下限の有無、変動の振れ幅を理解したか",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "グリーンメニュー（ビジネスグリーン）・非化石証書の供給条件・環境価値を確認したか",
  "新電力撤退時の最終保障供給への切替フローを理解したか",
  "九電ネクスト・他新電力・旧一電継続の3パターンで相見積を取得したか",
  "多拠点の場合、一括契約と拠点別最適化を比較したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "九電ネクストとはどんな会社（サービス）ですか？",
    answer:
      "九電ネクストは九州電力の100%出資会社です。2025年4月の吸収分割承継、高圧・特高新規は市場連動のみ提案、提案不可の場合あり、見積ベースという公開方針を中立整理します。本ページは特定企業の優劣評価ではなく、法人契約者の判断材料を中立的に整理するものです（出典: 九電ネクスト公式サイト・九州電力公式サイト）。",
  },
  {
    question: "旧一電グループ系・グループ系小売新電力と旧一電（東電EP・関西電力等）の違いは？",
    answer:
      "旧一電グループ系・グループ系小売新電力は、旧一般電気事業者を母体とするグループ会社が電力小売を行う類型です。旧一電は各エリアの一般電気事業者を母体とする小売事業者で、エリアごとに会社が異なります。料金体系・燃調算定方式・サポート体制・契約期間・解約条件などで違いがあるため、相見積で同一条件比較を行うことが重要です。当センターは旧一電・新電力のいずれかを推奨する立場にはなく、自社条件に応じた中立的な判断を支援します。",
  },
  {
    question: "九電ネクストの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、高圧・特別高圧の法人需要家向けメニュー『九電ネクスト高圧・特別高圧（市場連動プラン・見積）』、低圧の従量電灯S/M・動力P等（九電ネクスト低圧）、環境価値を付与したグリーンメニュー『九電ネクスト環境メニュー（公表範囲）』等が案内されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。高圧・特別高圧の大口は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 九電ネクスト公式サイト・参照日2026年7月時点）。",
  },
  {
    question: "燃料費調整額の算定方式は旧一電と同じですか？",
    answer:
      "新電力の燃調算定方式は、旧一電方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合、独自の上限・下限を設ける場合があります。同じ『燃調連動』でも算定基礎が異なれば変動の振れ幅・タイミングが異なるため、契約書で算定式を必ず確認してください。市場連動の場合はJEPX高騰時のリスクが大きい点に留意が必要です（出典: 各社公式の燃調算定方式公表・電力・ガス取引監視等委員会）。",
  },
  {
    question: "九電ネクストと他の新電力・旧一電はどちらが有利ですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件・契約期間・サポート・グリーンメニューを総合して判断すべきものです。複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。『どちらが安い』という断定は行いません。",
  },
  {
    question: "グループ系小売新電力は撤退リスクがあると聞きました。どう備えれば良いですか？",
    answer:
      "新電力の事業撤退・小売登録取消し等は、過去にも複数の事例があります。旧一電グループ系グループの基盤があっても、電力小売事業の継続性は制度の観点で確認しておくと安心です。新電力契約時は、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退時の切替手順・必要書類を事前に確認しておくことが重要です。契約書の解約条項・違約金条項も確認しておきましょう（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "九電ネクストのグリーンメニューはRE100対応に使えますか？",
    answer:
      "公開情報では、非化石証書・トラッキング付非化石証書・卒FIT電源等を用いたCO2フリー・実質再生可能エネルギーのグリーンメニュー（九電ネクスト環境メニュー（公表範囲））が案内されています。これらのメニューはRE100の調達手段の一つとして検討可能ですが、対応エリア・供給可能量・トラッキングの有無・CO2排出係数の扱いはメニューにより異なります。RE100クライテリアへの適合性を含めて、調達計画段階で確認することを推奨します（出典: 九電ネクスト公式サイト・九州電力グループ公式サイト）。",
  },
  {
    question: "九電ネクストの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・期間途中解約違約金・燃調算定方式・解約条件を契約書で詳細に確認することが重要です。低圧・高圧・特別高圧で必要書類が異なる場合があります。停電時の物理的復旧は一般送配電事業者の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "九電ネクスト 公式サイト（電力小売・法人向け料金プラン）", url: "https://qnext.co.jp/" },
  { name: "九州電力グループ 公式サイト（事業構成・再エネ事業）", url: "https://www.kyuden.co.jp/" },
  { name: "資源エネルギー庁（エネルギー基本計画・再エネ賦課金・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
];

export default function QnextCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/qnext-corporate-electricity-guide"
        datePublished="2026-07-18"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "九電ネクストの法人向けプラン", url: "https://simulator.eic-jp.org/qnext-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">九電ネクストの法人向けプラン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            九電ネクストの法人向けプラン完全ガイド｜旧一電グループ系・全国供給のプラン体系とグリーンメニュー・燃調連動
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            九電ネクスト（九電ネクスト株式会社／九州電力グループの電力小売事業）の法人向けサービスを、公開情報に基づき中立的に整理します。旧一電100%子会社の小売電気事業者としてグループ系小売で電力小売を展開する事業特性、低圧（従量電灯S/M・動力P）から高圧・特別高圧（九電ネクスト高圧・特別高圧（市場連動プラン・見積））までのプラン体系、グリーンメニュー（九電ネクスト環境メニュー（公表範囲））のCO2フリー・RE100対応、燃料費調整額の連動条件、契約手続き・サポート体制、相見積活用のポイントを、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-18" updatedAt="2026-07-18" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>九電ネクストの法人向けプラン体系（低圧／高圧・特別高圧ビジネスL／グリーンメニュー）</li>
              <li>旧一電グループ系・グループ系小売新電力としての事業特性と九州電力グループの基盤（公表情報）</li>
              <li>燃調算定方式の旧一電との違い・市場連動メニューのリスク</li>
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
            <h2 className="text-xl font-semibold text-slate-900">九電ネクストの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九電ネクストは旧一電100%子会社の小売電気事業者のグループ系小売新電力の代表例です。本ページは旧一電・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。優劣評価は行いません。
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
              で確認できます。同じ旧一電グループ系のグループ系小売としては{" "}
              <Link href="/kyuden-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州電力</Link>
              や{" "}
              <Link href="/utility-affiliated-new-power-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電グループ系新電力</Link>
              の解説も参照できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九電ネクストが公開する法人向けプラン体系を、高圧・特別高圧（ビジネスL）・低圧（従量電灯S/M・動力P）・グリーンメニュー・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。「九電ネクストが直接販売」等の断定は避け、公開情報の範囲で整理します。
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
              再エネ・グリーンメニューの調達手段は{" "}
              <Link href="/re100-overview-for-business" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">RE100の基礎（法人向け）</Link>
              、{" "}
              <Link href="/non-fossil-certificates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非化石証書とは</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源／事業特性・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア（北海道〜九州の複数エリア・離島除く）、九州電力グループの電源・調達、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
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
              主要エリアの市況は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">関西エリアの法人電気料金</Link>
              、{" "}
              <Link href="/region-chubu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中部エリアの法人電気料金</Link>
              で確認できます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本セクションのデータは2026年7月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 九電ネクスト公式サイト・九州電力グループ公式サイト・電力・ガス取引監視等委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し（契約電力適正化・燃調算定方式の見直し・相見積による条件最適化）による年間削減イメージと5年累計を、規模別に3つの代表シナリオで示します。以下は<strong>一般的な高圧需要家の公的統計水準に基づく例示</strong>であり、九電ネクストを含む特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。数値は例示であり、特定社の削減保証ではありません。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{sc.profile}</p>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-sky-200 bg-sky-50 p-3">
                      <p className="text-xs text-slate-500">年間削減イメージ</p>
                      <p className="mt-1 text-base font-bold text-slate-900">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                      <p className="text-xs text-slate-500">5年累計イメージ</p>
                      <p className="mt-1 text-base font-bold text-emerald-800">{sc.cumulative}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{sc.detail}</p>
                  <p className="mt-2 text-xs leading-6 text-slate-500">{sc.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の実際の使用実態に基づく試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              、旧一電・新電力の横断比較は{" "}
              <Link href="/major-utility-comparison-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電10社 横断比較ガイド</Link>
              で確認できます。上記の削減額はあくまで公的統計水準の例示であり、九電ネクストの単価・削減効果を示すものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              グループ系小売新電力の活用パターンを3規模で、九電ネクストの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口、新電力切替時の留意点を整理します。低圧・高圧・特別高圧で流れが異なる場合があります。
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
              グループ系小売新電力と旧一電・他新電力を中立的に判断するための観点を整理します。単価だけでなく複数の要素を総合的に評価することが重要です。優劣評価は行いません。
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
              、地域新電力との比較は{" "}
              <Link href="/local-utility-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域新電力（自治体系・地産地消）法人活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・撤退リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              九電ネクストの公開情報を活用するうえでの留意点を整理します。燃調算定方式の確認、市場連動メニューのリスク、新電力撤退時の備えに注意が必要です。
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
              九電ネクスト契約の有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・グリーン／再エネ調達・省エネ投資・相見積・燃調ヘッジが柱です。
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
              、需要側の対策は{" "}
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
              九電ネクストを含む新電力切替を検討する法人需要家は、契約条件・燃調方式・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・グリーン調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動メニューと固定単価メニューの年間コスト差を把握する</li>
              <li>燃調算定方式の違いを定量化する</li>
              <li>相見積・グリーン調達・省エネ投資による削減余地を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              が便利です。
            </p>
          </section>

          <div className="mt-6">
            <ConsultCta from="qnext" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-18" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/kyuden-corporate-electricity-guide", title: "九州電力の法人向けガイド", description: "グループ本体との読み分け。" },
              { href: "/utility-affiliated-new-power-corporate-electricity-guide", title: "旧一電グループ系新電力ガイド", description: "旧一電100%子会社類型の横断整理。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説。" },
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電10社の中立比較。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金", description: "首都圏エリアの市況と契約の考え方。" },
              { href: "/region-kansai-business-electricity", title: "関西エリアの法人電気料金", description: "関西エリアの市況と契約の考え方。" },
              { href: "/region-chubu-business-electricity", title: "中部エリアの法人電気料金", description: "中部エリアの市況と契約の考え方。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の市況を一覧で確認。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/re100-overview-for-business", title: "RE100の基礎（法人向け）", description: "グリーンメニュー・再エネ調達の全体像。" },
              { href: "/non-fossil-certificates", title: "非化石証書とは", description: "環境価値の付与とCO2フリー化の基礎。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "新電力撤退時のセーフティネット。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="九電ネクストを含むグループ系小売新電力への切替を検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・グリーン調達・省エネ投資の優先順位づけの判断材料を整理します。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
        
        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-slate-900">九電ネクスト固有の確認ポイント（市場連動のみ提案・承継・見積）</h3>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            九電ネクストで最も重要な公開情報は、『高圧・特別高圧の新規は市場連動電力プランのみ提案』という公式方針です。固定単価メニューを前提に比較表を作ると要件不一致になるため、新規の高圧・特高は市場連動リスク（卸価格の振れ・予算管理の難度）を先に評価する必要があります。あわせて『申込状況等により提案不可の場合あり』とされており、相見積のスケジュールに余裕を持たせることが実務的です。高圧は公開料金表がなく見積ベースであるため、条件比較は同一の想定使用量・契約電力・期間で揃えた見積書同士で行います。会員Webは東京・関西・九州エリア向けと案内される点も、多拠点法人の運用設計に関わります。承継経緯としては、2025年4月に九電みらいエナジーから吸収分割で小売事業を承継した事実を正確に押さえてください。本ページは特定企業の優劣評価は行いません。2026年7月時点。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            市場連動のリスク整理は{" "}
            <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
            ・{" "}
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定の比較</Link>
            ・{" "}
            <Link href="/who-should-choose-market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向く事業者</Link>
            ・{" "}
            <Link href="/jepx-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">JEPXとは</Link>
            ・{" "}
            <Link href="/market-price-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場価格調整</Link>
            を参照してください。グループ系の横断は{" "}
            <Link href="/utility-affiliated-new-power-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電グループ系新電力ガイド</Link>
            、本体は{" "}
            <Link href="/kyuden-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州電力の法人向けガイド</Link>
            、エリア事情は{" "}
            <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">九州電力エリアの法人電気代事情</Link>
            です。再エネ賦課金は2026年度4.18円/kWh。試算は{" "}
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            、単価参考は{" "}
            <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">pps-net.org/unit</a>
            です。
          </p>
          <p className="mt-2 text-xs text-slate-500">
            ※ 『市場連動のみ提案』『提案不可の場合あり』は公式方針の事実整理です。個社の単価は創作しません。最新は公式で要確認。特定の電力会社・契約形態を推奨するものではありません（2026年7月時点）。
          </p>
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
