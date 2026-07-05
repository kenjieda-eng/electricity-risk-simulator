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
  "旧一電グループ系新電力の法人活用ガイド｜グループ小売会社の類型・承継動向と中立的な選定軸";
const pageDescription =
  "旧一般電気事業者（旧一電）グループに属する小売系新電力（九電ネクスト・テプコカスタマーサービス等の販売主体）の類型を、公開情報に基づき中立的に整理。本ページは特定企業ではなくタイプ別の横断解説です。旧一電本体（東京電力エナジーパートナー・関西電力等）とは別に、グループ内で全国・エリア外へ展開する小売会社の共通特性、承継・再編動向、燃調算定方式、そして本体・グループ系・他新電力を跨いだ中立的な選定軸を、第三者・社団法人視点でまとめます。特定企業の優劣評価は行いません。";
const pageUrl = "https://simulator.eic-jp.org/utility-affiliated-new-power-corporate-electricity-guide";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "旧一電 グループ 新電力 法人",
    "九電ネクスト テプコカスタマーサービス 法人",
    "旧一般電気事業者 系列 小売",
    "新電力 承継 再編 法人",
    "新電力 選び方 法人",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
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
    label: "旧一電グループ系新電力とは（類型の定義）",
    detail:
      "旧一電グループ系新電力とは、電力小売全面自由化（2016年）以降に、旧一般電気事業者（旧一電。東京電力・関西電力・九州電力・中部電力など、かつて発送電と小売を一体で担った各エリアの電力会社）のグループ内に設けられた、または旧一電が出資・関与する小売系の電力事業者・販売主体の総称です。ここで指すのは旧一電本体の小売部門（例: 東京電力エナジーパートナー、関西電力の小売事業など）そのものではなく、本体とは別会社として全国・エリア外への展開や特定顧客層・特定サービスを担う小売会社です。本ページは特定企業の優劣を評価するものではなく、旧一電グループ系という類型の共通特性と中立的な選定軸を、公開情報に基づき整理するタイプ別の横断解説です（参照日2026年7月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "本ページの位置づけ（タイプ別の横断解説）",
    detail:
      "当サイトの『電力会社別解説』カテゴリでは、旧一電本体の個社解説（東京電力エナジーパートナー・関西電力・九州電力・中部電力ミライズ等）に加え、新電力を類型（石油系・全国系／都市ガス系／商社系／地域ガス系／自治体系・地産地消の地域新電力）ごとに整理しています。本ページは『旧一電グループ系の小売会社』という類型を横断的に解説するもので、旧一電本体の詳細は各社の個別ガイドで、地域新電力や他の系列は各類型ガイドで補完できます。本体か、グループ系の小売会社か、他類型の新電力か——という選択の全体像を中立的に理解したい方に向けた解説です。",
  },
  {
    label: "承継・再編の動向（現行の販売主体名で記述）",
    detail:
      "旧一電グループの小売系事業は、グループ戦略の見直しに伴い、承継・統合・社名変更が行われてきました。たとえば九州電力グループでは、九電みらいエナジーが手がけていた電力小売事業が2025年4月に九電ネクスト株式会社へ承継され、現行の販売主体は九電ネクストとなっています。東京電力グループでは、テプコカスタマーサービス株式会社などのグループ会社が顧客サービス・小売関連の機能を担っています。こうした承継・再編は今後も生じ得るため、本ページでは旧名で『販売中』と断定せず、契約検討時には現行の販売主体名・受付現況を各社公式サイトで必ず確認することを前提とします（出典: 各社公式サイト・各社リリース・参照日2026年7月時点）。",
  },
  {
    label: "旧一電グループ系新電力が想定する法人需要家",
    detail:
      "旧一電グループ系の小売会社は、グループのブランド・信用力や需給運用の知見を背景に、エリア外に拠点を持つ多拠点法人、グループの他サービス（送配電は別会社ですが、ガス・通信・保安・省エネ提案などのグループサービス）と併せて検討する法人、あるいは本体メニューとは別条件の選択肢を探す高圧・特別高圧需要家などが検討対象になり得ます。ただし対応エリア・対応規模・受付現況は会社ごとに大きく異なり、承継・再編で変わることもあるため、具体的なサービス・条件は各社公式公表で確認してください。本記述は公開情報に基づく一般的な整理です。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（連動方式・上限の有無）、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無、事業の継続性など複数の観点を総合して判断すべきものです。本ページは旧一電グループ系新電力という類型を整理しますが、旧一電本体の継続・グループ系小売・他の新電力類型との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。『グループ会社だから安心』『本体だから割高』といった先入観ではなく、公開情報と個別見積に基づく中立的な判断が重要です。当センターは特定企業や特定類型の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "高圧電力・業務用メニュー",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "旧一電グループ系の小売会社は、高圧需要家向けの業務用メニュー（季節別・時間帯別単価等を含む場合あり）を提供することがあります。料金は基本料金（契約電力×単価。デマンド実量に基づく）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される一般的な体系が想定されます。同じグループ内でも、本体メニューとグループ系小売会社のメニューでは、燃調算定方式・契約期間・解約条件・割引条件が異なる場合があるため、『本体と同じ条件』とみなさず、相見積で同一条件比較を行うことが重要です。具体的単価・対応可否は各社公式公表および個別見積で確認してください。",
  },
  {
    name: "特別高圧・大口対応（会社により対応可否が異なる）",
    role: "大規模工場・大型商業施設・物流拠点等",
    detail:
      "特別高圧の大口需要家への対応可否は、旧一電グループ系の小売会社ごとに異なります。大口は個別協議・個別見積となるケースが多く、契約電力・使用パターン・電源調達の状況によって提示条件が変わります。契約期間・解約条件・燃調算定方式・デマンド超過時の取扱い等を契約書で詳細に確認することが重要です。グループの需給運用知見が背景にある点は理解のうえで、条件そのものは各社の個別見積で確認してください。",
  },
  {
    name: "再エネ関連メニュー・CN対応",
    role: "RE100対応・脱炭素志向の需要家向け",
    detail:
      "旧一電グループは、水力・再生可能エネルギー電源や非化石証書を活用した再エネメニュー・CO2フリーメニューを提供する場合があります。グループ系の小売会社がこれらの調達手段を扱うかは会社・メニューにより異なり、対応エリア・供給可能量・追加性の扱い・CO2排出係数の条件も差があります。RE100対応を進める法人は、再エネメニュー・非化石証書・コーポレートPPA等を横並びで比較し、調達計画段階で各社公式公表を確認することが必要です。",
  },
  {
    name: "燃料費調整額の算定（本体方式・独自方式・市場連動の場合あり）",
    role: "全メニュー共通の変動要素",
    detail:
      "新電力の燃料費調整は、旧一電本体と同様の方式（貿易統計の原油・LNG・石炭価格に基づく算定）を採用する場合と、JEPXスポット価格に連動する独自方式（市場連動）を採用する場合があります。旧一電グループ系の小売会社であっても、本体メニューと同一の燃調式とは限らず、メニュー区分・契約区分により算定方式が異なる可能性があるため、契約書で必ず確認してください。市場連動方式の場合は、JEPXスポット価格の高騰局面で単価が大きく変動するリスクがあります（出典: 各社公式の燃調算定方式公表・電力ガス取引監視等委員会）。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（各社で異なる・承継で変わり得る・公表情報）",
    detail:
      "旧一電グループ系新電力の供給エリアは各社で異なります。本体は原則として自エリアを地盤としますが、グループ系の小売会社はエリア外・全国への展開を担う場合があり、逆に特定エリア・特定顧客層に注力する場合もあります。承継・再編に伴い供給エリアや受付現況が変わることもあるため、具体的な対応エリアと契約区分の組合せは各社公式サイト・個別見積で確認してください。全国多拠点を持つ法人は、拠点ごとのエリアと契約区分を整理すると比較が進めやすくなります。",
  },
  {
    label: "電源・需給運用・事業特性（公表情報）",
    detail:
      "旧一電グループは、水力・火力・再生可能エネルギー等の電源やグループの需給運用・調達の知見を背景に持ちます。グループ系の小売会社は、こうした背景に加えJEPX市場での取引も組み合わせて供給する構造が一般的です。ただし小売会社が保有・優先利用できる電源やその条件は本体と同一とは限らないため、電源の背景と燃調算定方式・価格変動リスクの関係を、各社の公表情報で確認することが有効です（出典: 各社統合報告書・有価証券報告書・各社公式サイト）。",
  },
  {
    label: "JEPX市場での取扱い",
    detail:
      "新電力は不足分・余剰分をJEPX（日本卸電力取引所）で調達・販売する構造が一般的です。旧一電グループ系の小売会社もJEPXを活用する場合があります。市場連動方式のメニューを契約する場合、JEPXスポット価格の高騰時に電力量料金単価が大きく上昇するリスクがあります。固定単価方式と市場連動方式のいずれを選ぶかは、自社の使用パターン・リスク許容度に応じて中立的に判断すべきです（出典: JEPX公表データ・電力ガス取引監視等委員会）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社・類型を問わず全需要家に適用される制度上の負担です。これらは本体でもグループ系小売でも他の新電力でも回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です。再エネ賦課金の単価は年度ごとに国が定めます（2026年度は4.18円/kWh（確定））。最新の確定値は一次情報で確認してください（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const scenarios = [
  {
    title: "シナリオ1: 小規模高圧の単一拠点（契約見直し・条件最適化）",
    annual: "想定年間削減イメージ ▲9万円/年",
    fiveYear: "▲9万円 × 5年 ＝ 45万円",
    detail:
      "小規模な高圧単一拠点の法人が、旧一電本体の継続・グループ系小売・他の新電力を同一条件で相見積し、契約電力（デマンド）の適正化や燃調条件の見直しを組み合わせた場合の、一般的な高圧需要家の公的統計水準に基づく年間削減イメージです。金額は例示であり、実際の削減額は契約条件・使用実態により変動します。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ2: 中規模高圧の複数拠点（多拠点の一括整理）",
    annual: "想定年間削減イメージ ▲18万円/年",
    fiveYear: "▲18万円 × 5年 ＝ 90万円",
    detail:
      "中規模の高圧需要家が複数拠点を保有し、拠点ごとにばらついていた契約条件を、旧一電本体・グループ系小売・他新電力を横断して相見積・一括整理した場合の、一般的な高圧需要家の公的統計水準に基づく年間削減イメージです。金額は例示であり、多拠点一括管理と拠点別最適化のどちらが適合するかは自社の運用実態により異なります。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
  {
    title: "シナリオ3: 大口高圧〜特別高圧（調達・省エネの総合最適化）",
    annual: "想定年間削減イメージ ▲40万円/年",
    fiveYear: "▲40万円 × 5年 ＝ 200万円",
    detail:
      "大口高圧〜特別高圧の需要家が、契約区分・燃調条件の精査に加え、再エネ調達・省エネ投資・デマンド管理を総合的に見直した場合の、一般的な大口需要家の公的統計水準に基づく年間削減イメージです。金額は例示であり、実際の効果は電源・燃調方式・使用パターン・市況により大きく変動します。",
    note:
      "※これは一般的な高圧水準・公的統計ベースの例示であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態により変動します。個社の単価は記載しません。",
  },
];

const caseStudies = [
  {
    title: "ケース1: エリア外に本社を持つ多拠点法人（本体 vs グループ系小売）",
    before:
      "Before: 旧一電Aエリアに本社を置きつつ、B・Cエリアにも拠点を持つ多拠点法人が、各拠点で本体（各エリアの旧一電）と個別に高圧契約。エリア外拠点の契約管理が煩雑で、グループ系小売による一括対応の可能性を検討したい。",
    after:
      "After: 旧一電本体の各エリア継続、グループ系小売会社によるエリア外・全国一括対応、他類型の全国系新電力の3パターンで相見積を取得し、同一条件で比較。契約管理の一元化メリットと、エリア別最適化のコストメリットを整理し、承継・再編で条件が変わり得る点も踏まえて中立的に評価（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 一括管理と拠点別最適化のトレードオフを整理し、自社の運用負荷とコストの両面で中立的に選択。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: 承継・社名変更を受けた需要家（現行主体の確認）",
    before:
      "Before: 従前の旧一電グループ会社（例: 承継前の名称）と契約していた高圧需要家が、承継・社名変更（例: 九電みらいエナジーの小売事業が九電ネクストへ承継）の案内を受け取り、契約条件が変わるのか、現行の販売主体はどこかを確認したい。",
    after:
      "After: 現行の販売主体名（例: 九電ネクスト等）と受付現況・契約条件を各社公式で確認し、承継後の燃調算定方式・契約期間・解約条件に変更がないかを整理。あわせて他の新電力・旧一電本体の条件でも相見積を取得し、承継を機に条件を中立的に見直す。",
    result:
      "Result: 承継・再編を『不安要素』ではなく『条件見直しの好機』として活用する枠組みを整理。※実際の条件は各社個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 類型を跨いだ比較（グループ系 vs 他類型・地域新電力）",
    before:
      "Before: 旧一電グループ系小売だけでなく、石油系・全国系、都市ガス系、商社系、地域ガス系、自治体系・地産地消の地域新電力、旧一電本体継続も含めて広く比較したい。",
    after:
      "After: 旧一電グループ系（ブランド・需給運用の背景）、全国系（多拠点一括）、都市ガス系・地域ガス系（ガス電気一括）、商社系（グローバル調達・PPA）、地域新電力（地産地消・自治体連携）、旧一電本体継続という選択肢ごとの特徴を整理し、自社の重視点に合う候補から複数社の相見積を取得して中立的に比較。",
    result:
      "Result: 類型ごとの特徴を踏まえ、自社の重視点に合う選択肢を広く比較する枠組みを整理。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "現行の販売主体・受付現況の確認（最重要）",
    detail:
      "旧一電グループ系の小売会社は承継・社名変更が生じることがあります（例: 九電みらいエナジーの小売事業が2025年4月に九電ネクストへ承継）。契約検討・見直しの起点として、まず現行の販売主体名・受付現況・対応エリアを各社公式サイトで確認します。旧名のままの資料や第三者情報を鵜呑みにせず、一次情報で最新状況を押さえることが重要です。",
  },
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。旧一電本体からグループ系小売へ、あるいはグループ系小売から他新電力へ切り替える場合も、現契約の解約条件（期間途中解約違約金等）の確認、託送供給契約への切替手続き等の確認が必要です。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。エリアが異なる拠点は、契約区分・託送条件も拠点ごとに整理します。",
  },
  {
    label: "切替・承継時の留意事項",
    detail:
      "切替時は、契約期間（多くは1〜3年）、期間途中解約時の違約金条項、燃調算定方式（本体と異なる場合あり）、デマンド超過時の取扱いを契約書で詳細に確認することが重要です。承継・事業譲渡があった場合は、承継後も従前条件が継続するのか、条件が改定されるのかを確認します。新電力撤退・事業譲渡リスクへの備えとして、最終保障供給制度の理解も必要です。停電時の物理的復旧は一般送配電事業者（本体とは法的分離された送配電会社）が担い、契約小売事業者によらず共通です。",
  },
];

const cautionItems = [
  {
    label: "『グループ会社＝本体と同条件』ではない",
    detail:
      "旧一電グループ系の小売会社は、本体の信用・ブランドを背景としつつも、料金メニュー・燃調算定方式・契約期間・解約条件は本体と異なる場合があります。『グループだから本体と同じ』『グループだから安心・割安』といった思い込みではなく、各社の公式公表と個別見積で具体条件を確認することが重要です。特定社・特定類型が一律に有利と断定するものではありません。",
  },
  {
    label: "承継・再編で条件・主体が変わり得る",
    detail:
      "旧一電グループの小売事業は、グループ戦略により承継・統合・社名変更が生じることがあります（例: 九電みらいエナジーの小売事業の九電ネクストへの承継）。旧名のまま『販売中』と誤認せず、現行の販売主体名・受付現況・契約条件を都度、各社公式で確認してください。承継時は従前条件の継続可否・改定有無を確認することが重要です。",
  },
  {
    label: "燃調算定方式・市場連動を確認",
    detail:
      "旧一電グループ系の小売会社であっても、本体方式・独自方式・市場連動方式のいずれを採るかはメニューにより異なります。同じ『燃調連動』でも算定基礎が異なれば、価格変動の振れ幅・タイミングが異なります。市場連動方式のメニューは市場高騰時のリスクがあるため、契約書で算定式・市場連動の有無を確認することが重要です。",
  },
  {
    label: "撤退・事業譲渡リスクと最終保障供給",
    detail:
      "旧一電グループ系という背景は一つの判断材料になり得ますが、将来の供給継続や条件維持を保証するものではありません。新電力全般で事業撤退・小売登録取消し・事業譲渡の事例があり、グループ系も再編の対象になり得ます。契約時は最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退・承継・契約終了時の切替手順を確認しておくことが重要です。エリアごとの供給者動向は供給者撤退マップも参考になります。",
  },
  {
    label: "比較は同一条件の相見積で",
    detail:
      "中立的な判断のためには、旧一電本体・グループ系小売・他の新電力類型の複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。優劣の順位づけではなく、自社条件への適合性で選定します。ブランドや系列だけで決めず、条件で判断することが重要です。",
  },
];

const compareViewpoints = [
  {
    label: "本体・グループ系・他類型の選択肢整理",
    detail:
      "まず自社の重視点（継続性・ブランド・多拠点一括・再エネ調達・エリア外対応・コスト等）を明確にし、旧一電本体継続・グループ系小売・他類型の新電力のどこを候補にするかを整理します。系列だけでなく条件で候補を絞り込むことが出発点です。",
  },
  {
    label: "現行主体・受付現況の適合",
    detail:
      "承継・再編を踏まえ、現行の販売主体名・受付現況・対応エリアが自社の拠点構成・契約区分に合うかを各社公式公表で確認します。旧名情報のまま比較しないよう、最新の一次情報で整理します。",
  },
  {
    label: "燃調算定方式の感応度",
    detail:
      "本体方式（貿易統計連動）と独自方式・市場連動方式の違いを理解し、自社の使用パターンでの変動リスクを評価します。グループ系でも本体と同一の燃調式とは限らない点に留意します。",
  },
  {
    label: "再エネ調達・CN対応の選択肢",
    detail:
      "再エネメニュー・非化石証書・コーポレートPPAなど、RE100対応の調達手段を比較します。旧一電グループの水力・再エネ電源の活用可能性や、追加性・CO2排出係数の扱いも確認対象です。",
  },
  {
    label: "契約・サポート・撤退/承継リスク",
    detail:
      "契約手続きの手間、サポート窓口、撤退・承継時の切替体制、最終保障供給の仕組み理解を確認します。旧一電本体、グループ系小売、他の新電力類型の複数パターンで相見積を取得し、同一条件で比較できる環境を整えます。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化",
    detail:
      "高圧・特別高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。旧一電本体・グループ系小売のいずれの契約でも共通して有効な打ち手です。",
  },
  {
    label: "本体・グループ系・他類型を跨いだ相見積",
    detail:
      "旧一電本体継続・グループ系小売・他の新電力類型（全国系・都市ガス系・地域ガス系・商社系・地域新電力）を含めて相見積を取得し、同一条件で比較することで、自社の重視点に合う契約条件を中立的に選定できます。系列やブランドで即断せず、条件で比較することが最適化の要です。",
  },
  {
    label: "再エネ調達によるCN対応",
    detail:
      "再エネメニュー・非化石証書・コーポレートPPAを組合せることで、RE100対応とCO2削減を進められます。旧一電グループの水力・再エネ電源の活用可能性も選択肢の一つですが、追加性・排出係数の扱いを含めて他の調達手段と比較検討します。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新・コージェネ・蓄電池等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。契約見直し単独よりも、需要側の対策と併走させることで効果が高まります。",
  },
  {
    label: "燃調変動・承継への備え",
    detail:
      "固定単価・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。あわせて、承継・再編時に条件が改定される可能性を見越し、契約更新のタイミングで条件を再点検する運用にしておくと安定します。",
  },
];

const checklistItems = [
  "旧一電本体継続・グループ系小売・他類型のどこを候補にするか、系列でなく条件で整理したか",
  "候補とするグループ系小売会社の現行の販売主体名・受付現況を各社公式で確認したか",
  "対応エリアが自社の拠点構成・契約区分に合うか確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "高圧／特別高圧の区分と各社の対応可否を確認したか",
  "燃料費調整額の算定方式（本体方式／市場連動／独自）を契約書で確認したか（本体と同一とは限らない）",
  "契約期間と期間途中解約時の違約金条項を確認したか",
  "再エネメニュー（非化石証書・コーポレートPPA等）の供給条件・追加性を確認したか",
  "承継・事業譲渡があった場合、従前条件の継続可否・改定有無を確認したか",
  "撤退・承継時の最終保障供給への切替フローを理解したか",
  "旧一電本体・グループ系小売・他類型の複数パターンで相見積を取得したか",
  "単価だけでなく総合的な条件で、優劣の順位づけではなく自社条件への適合性で中立的に判断したか",
];

const faqItems = [
  {
    question: "旧一電グループ系新電力とは何ですか？",
    answer:
      "旧一電グループ系新電力とは、旧一般電気事業者（旧一電。東京電力・関西電力・九州電力・中部電力など、かつて発送電と小売を一体で担った各エリアの電力会社）のグループ内に設けられた、または旧一電が出資・関与する小売系の電力事業者・販売主体の総称です。旧一電本体の小売部門そのものではなく、本体とは別会社として全国・エリア外への展開や特定顧客層を担う小売会社を指します。本ページは特定企業の優劣評価ではなく、類型の共通特性と中立的な選定軸を整理するタイプ別の横断解説です（出典: 各社公式サイト・各社統合報告書）。",
  },
  {
    question: "旧一電本体（東京電力エナジーパートナー・関西電力等）と何が違うのですか？",
    answer:
      "旧一電本体は各エリアの旧一般電気事業者の小売部門で、原則として自エリアを地盤とします。グループ系の小売会社は、本体とは別会社として全国・エリア外展開や特定サービスを担う場合があります。ブランド・信用や需給運用の背景は共有しつつも、料金メニュー・燃調算定方式・契約期間・解約条件は本体と異なる場合があるため、『グループだから本体と同条件』とみなさず、相見積で同一条件比較を行うことが重要です。本体の詳細は各社の個別ガイドで確認できます。",
  },
  {
    question: "九電みらいエナジーや九電ネクストはこの類型に含まれますか？",
    answer:
      "九州電力グループの電力小売事業については、九電みらいエナジーが手がけていた小売事業が2025年4月に九電ネクスト株式会社へ承継され、現行の販売主体は九電ネクストとなっています。本ページはこうしたグループ系小売会社を『旧一電グループ系新電力』という類型で横断的に整理するものです。承継・社名変更は今後も生じ得るため、契約検討時には現行の販売主体名・受付現況を各社公式サイトで必ず確認してください。旧名のまま『販売中』と断定できない点にご注意ください（出典: 各社公式サイト・各社リリース）。",
  },
  {
    question: "テプコカスタマーサービスのようなグループ会社もこの類型ですか？",
    answer:
      "東京電力グループでは、テプコカスタマーサービス株式会社などのグループ会社が顧客サービス・小売関連の機能を担っています。こうした本体とは別のグループ会社は、広義には本ページで整理する『旧一電グループ系』の枠組みで理解できます。ただし各社の担う機能・対応範囲・受付現況は会社ごとに異なり、公開情報の範囲でしか本ページでは触れられないため、具体的なサービス内容・法人契約の可否は各社公式公表で確認してください。本ページは特定企業の優劣評価は行いません。",
  },
  {
    question: "承継・社名変更があると契約条件は変わりますか？",
    answer:
      "承継・事業譲渡があった場合、従前の契約条件がそのまま継続することもあれば、承継を機に燃調算定方式・契約期間・解約条件が改定されることもあります。旧一電グループ系に限らず、承継・再編の案内を受け取った際は、現行の販売主体名・受付現況とあわせて、従前条件の継続可否・改定有無を各社公式で確認することが重要です。承継は不安要素であると同時に、他社との相見積を含めて条件を中立的に見直す好機でもあります（出典: 各社公式サイト・各社リリース・電力ガス取引監視等委員会）。",
  },
  {
    question: "グループ会社なら撤退リスクは低いですか？",
    answer:
      "旧一電グループという背景は一つの判断材料になり得ますが、将来の供給継続や条件維持、撤退・再編しないことを保証するものではありません。電力事業の方針はグループ戦略により変わり得ます。新電力契約時は類型・系列にかかわらず、最終保障供給制度（一般送配電事業者がセーフティネットとして提供する仕組み）の概要を理解し、撤退・承継・契約終了時の切替手順・必要書類を事前に確認しておくことが重要です。契約書の解約条項・違約金条項も確認しておきましょう（出典: 電力・ガス取引監視等委員会・各一般送配電事業者公表資料）。",
  },
  {
    question: "旧一電グループ系・本体・他の新電力のどれが有利ですか？",
    answer:
      "当サイトは特定企業・特定類型の優劣を評価する立場にありません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。安さや優劣は自社の規模・使用パターン・契約区分・エリアによって変わり、系列やブランドだけでは決まりません。優劣の順位づけではなく、旧一電本体・グループ系小売・他の新電力類型から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "旧一電グループ系新電力を選ぶ際、何を基準に比較すればよいですか？",
    answer:
      "まず自社の重視点（継続性・ブランド・多拠点一括・再エネ調達・エリア外対応・コスト等）を明確にし、それに合う候補（本体継続・グループ系小売・他類型）を絞り込みます。そのうえで、現行の販売主体名・受付現況、対応エリア・対応規模、燃調算定方式、契約期間・解約条件、再エネ調達の選択肢、サポート体制を同一観点で並べて整理し、複数社から相見積を取得します。優劣の順位づけではなく、自社条件への適合性を基準に中立的に選定することが重要です。旧一電本体や地域新電力の個別・類型ガイドも合わせて参照すると比較しやすくなります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成・再エネ賦課金）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧・新電力/承継動向）", url: "https://www.emsc.meti.go.jp/" },
  { name: "JEPX 日本卸電力取引所（スポット市場価格）", url: "http://www.jepx.org/" },
  { name: "経済産業省（電力システム改革・小売全面自由化・制度動向）", url: "https://www.meti.go.jp/" },
];

export default function UtilityAffiliatedNewPowerCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "旧一電グループ系新電力の法人活用ガイド", url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">旧一電グループ系新電力の法人活用ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            旧一電グループ系新電力の法人活用ガイド｜グループ小売会社の類型・承継動向と中立的な選定軸
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            旧一般電気事業者（旧一電）グループに属する小売系新電力（九電ネクスト・テプコカスタマーサービス等の販売主体）の類型を、公開情報に基づき中立的に整理します。本ページは特定企業ではなくタイプ別の横断解説です。旧一電本体（東京電力エナジーパートナー・関西電力等）とは別に、グループ内で全国・エリア外へ展開する小売会社の共通特性、承継・再編動向、燃調算定方式、そして本体・グループ系・他新電力を跨いだ中立的な選定軸を、第三者・社団法人視点でまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-07-05" updatedAt="2026-07-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>旧一電グループ系新電力という類型の定義と、本体（東京電力エナジーパートナー等）との違い</li>
              <li>承継・再編動向（九電みらいエナジーの小売事業→九電ネクストへの承継等）と現行の販売主体の確認</li>
              <li>燃調算定方式・市場連動メニューのリスク（本体と同一とは限らない点）</li>
              <li>本体・グループ系・他類型を跨いだ中立的な選定軸（捏造数値なし・優劣評価なし）</li>
              <li>切替・承継時の確認12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは新電力の類型を公開情報で中立的に整理するガイドです。電力会社の選び方は{" "}
            <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社の比較方法
            </Link>
            も参照してください。本ページは中立的立場で作成しており、特定社・特定類型の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">旧一電グループ系新電力という類型と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電グループ系新電力は新電力の主要類型の一つです。本ページは旧一電本体・新電力の主要類型を読み比べる『電力会社別解説』の一つとして、旧一電グループ系の小売会社という類型を横断的に、公開情報に基づき中立的に整理します。個社（本体）ではなく類型の共通特性と選定軸を示すもので、特定社・特定類型の優劣評価は行いません。
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
              、旧一電各社の横断比較は{" "}
              <Link href="/major-utility-comparison-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旧一電10社 横断比較ガイド</Link>
              、地域別の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電グループ系の小売会社に共通して見られる法人向けプラン体系を、高圧・特別高圧・再エネメニュー・燃調算定方式の観点で整理します。同じグループでも本体メニューと同一条件とは限らないため、具体的単価・対応は各社公式公表・個別見積で確認してください。
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
            <h2 className="text-xl font-semibold text-slate-900">供給エリア・電源/事業特性・JEPX取扱い（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給エリア（各社で異なり承継で変わり得る）、電源・需給運用・事業特性、JEPX市場での取扱い、全社共通の制度負担を公表データに基づき整理します。
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
              ※ 本セクションのデータは2026年7月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価・承継状況は各出典元で必ずご確認ください。出典: 各社公式サイト・各社統合報告書・電力ガス取引監視等委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ別の5年コストインパクト試算（例示）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電本体・グループ系小売・他の新電力を横断して相見積・条件見直しを行った場合の、一般的な高圧需要家の公的統計水準に基づく年間削減イメージと5年累計を、規模別に例示します。以下はあくまで公的統計ベースの<strong>例示</strong>であり、特定社の単価・優劣を示すものではありません。実際の金額は契約条件・使用実態・市況により変動し、個社の単価は記載しません。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。数値は例示であり、特定企業の料金・削減効果を保証するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <div className="mt-2 grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">年間の削減イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.annual}</p>
                    </div>
                    <div className="rounded-lg border border-sky-200 bg-white p-3">
                      <p className="text-xs text-slate-500">5年累計イメージ</p>
                      <p className="mt-1 text-base font-semibold text-emerald-700">{sc.fiveYear}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{sc.detail}</p>
                  <p className="mt-2 text-xs text-slate-500">{sc.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の規模・使用実態に即した試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で、市場連動・固定単価の考え方は{" "}
              <Link href="/market-linked-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランとは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別・活用パターン別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電グループ系新電力の活用・比較パターンを3つの観点で、公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・切替/承継の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              現行の販売主体・受付現況の確認から、法人契約の手続きの流れ、供給地点特定番号の確認、切替・承継時の留意点までを整理します。承継・再編が生じ得る類型のため、最新状況の確認を起点に据えます。
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
              、撤退・承継時の備えは{" "}
              <Link href="/last-resort-supply" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">最終保障供給とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に比較するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電本体・グループ系小売・他類型を中立的に判断するための観点を整理します。系列やブランドだけでなく、複数の要素を総合的に評価することが重要です。
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
              も参照ください。読み分け先として、地域新電力は{" "}
              <Link href="/local-utility-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域新電力（自治体系・地産地消）法人活用ガイド</Link>
              、商社系は{" "}
              <Link href="/shosha-affiliated-new-power-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">商社系新電力の法人活用ガイド</Link>
              、地域ガス系は{" "}
              <Link href="/regional-gas-affiliated-new-power-corporate-electricity-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域ガス系新電力の法人活用ガイド</Link>
              が参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">燃料費調整・撤退/承継リスクを踏まえた留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電グループ系新電力を比較・活用するうえでの留意点を整理します。『グループ＝本体と同条件』ではない点、承継・再編で条件・主体が変わり得る点、燃調算定方式、撤退・承継時の備えに注意が必要です。
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
              、固定単価は{" "}
              <Link href="/fixed-price-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定単価プランとは</Link>
              、エリア別の供給者動向は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別 供給者撤退マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（契約見直し・省エネ・再エネ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電グループ系小売の利用有無にかかわらず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・本体/グループ系/他類型を跨いだ相見積・再エネ調達・省エネ投資・燃調ヘッジが柱です。
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
            <h2 className="text-xl font-semibold text-slate-900">切替・承継・契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。中立的な判断には現行主体の確認、複数社の相見積、総合的な条件評価が重要です。
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
              旧一電本体・グループ系小売・他の新電力を比較検討する法人需要家は、契約条件・燃調方式・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、相見積・契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>市場連動メニューと固定単価メニューの年間コスト差を把握する</li>
              <li>燃調算定方式の違い（本体方式／市場連動／独自）を定量化する</li>
              <li>本体・グループ系・他類型を跨いだ相見積による削減余地を見立てる</li>
            </ul>
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
              { href: "/major-utility-comparison-corporate-electricity-guide", title: "旧一電10社 横断比較ガイド", description: "旧一電本体10社の中立比較。" },
              { href: "/tepco-ep-corporate-electricity-guide", title: "東京電力エナジーパートナーの法人向けプラン", description: "旧一電本体（関東エリア）の参考。" },
              { href: "/kepco-corporate-electricity-guide", title: "関西電力の法人向けプラン", description: "旧一電本体（関西エリア）の参考。" },
              { href: "/kyuden-corporate-electricity-guide", title: "九州電力の法人向けプラン", description: "旧一電本体（九州エリア）の参考。" },
              { href: "/chuden-miraiz-corporate-electricity-guide", title: "中部電力ミライズの法人向けプラン", description: "旧一電本体の小売会社の参考。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の類型解説（読み分け先）。" },
              { href: "/shosha-affiliated-new-power-corporate-electricity-guide", title: "商社系新電力の法人活用ガイド", description: "商社系の類型解説（読み分け先）。" },
              { href: "/regional-gas-affiliated-new-power-corporate-electricity-guide", title: "地域ガス系新電力の法人活用ガイド", description: "地域ガス系の類型解説（読み分け先）。" },
              { href: "/region-tokyo-business-electricity", title: "東京エリアの法人電気料金事情", description: "関東エリアの市況。" },
              { href: "/region-kansai-business-electricity", title: "関西エリアの法人電気料金事情", description: "関西エリアの市況。" },
              { href: "/region-kyushu-business-electricity", title: "九州エリアの法人電気料金事情", description: "九州エリアの市況。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/market-linked-plan", title: "市場連動プランとは", description: "市場連動メニューの仕組みとリスク。" },
              { href: "/last-resort-supply", title: "最終保障供給とは", description: "撤退・承継時のセーフティネット。" },
              { href: "/how-to-compare-electricity-suppliers", title: "電力会社の比較方法", description: "新電力・旧一電を中立的に比較する基礎。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="旧一電本体・グループ系小売・他の新電力を跨いで検討する法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。旧一電本体・グループ系小売・他の新電力の選び方や、承継・再編を機にした契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
