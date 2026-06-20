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
  "東京電力エナジーパートナー（東電EP）の法人向けプラン完全ガイド｜特別高圧/高圧の契約メニュー・燃調算定・サポート体制";
const pageDescription =
  "東京電力エナジーパートナー株式会社（東電EP）の法人向け電力サービスを、公開情報に基づき中立的に整理。特別高圧・高圧の契約メニュー体系、燃料費調整額の算定方式、関東エリアの電源構成、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "東京電力エナジーパートナー 法人",
    "東電EP 高圧 特別高圧 プラン",
    "東電EP 燃料費調整",
    "東京電力 法人 電気料金",
    "東電EP 契約手続き",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/tepco-ep-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/tepco-ep-corporate-electricity-guide",
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
    label: "東京電力エナジーパートナーの位置づけ",
    detail:
      "東京電力エナジーパートナー株式会社（以下、東電EP）は、2016年の電力小売全面自由化に伴う東京電力ホールディングスの分社化により発足した小売電気事業者です。発電（東京電力フュエル＆パワー等）・送配電（東京電力パワーグリッド）と法的分離され、関東1都6県＋静岡県東部（富士川以東）等を主な供給区域として法人・家庭向けの電力小売を担います。本ページは特定企業の優劣を評価するものではなく、公開情報に基づき法人契約者が自社条件に照らして判断するための材料を中立的に整理するものです（出典: 東京電力エナジーパートナー公式サイト・東京電力HD統合報告書）。",
  },
  {
    label: "本ページとエリア記事（region-*）の違い",
    detail:
      "当サイトの『東京電力エリアの法人電気代事情』は、エリア全体の市況・新電力動向・JEPX東京エリア価格などの『面』の情報を扱います。本ページはそれと差別化し、東電EPという『特定企業』の法人向けプラン体系・燃料費調整額の算定方式・契約手続き・サポート体制という『個別企業のサービス詳細』を解説します。エリア全体の市況は地域一般記事を、特定企業のサービス詳細は本記事を、と読み分けてください。",
  },
  {
    label: "関東エリアの電源構成と需給の特徴（公表情報）",
    detail:
      "東京電力エリアは火力（特にLNG火力）への依存度が高い電源構成が公表されています。柏崎刈羽原子力発電所は再稼働に向けた手続きが進められている段階で、現時点では火力の比重が大きい状況です。この電源構成は、燃料価格（LNG・石炭・原油）や為替の変動が燃料費調整額に反映されやすい背景となります（出典: 資源エネルギー庁エネルギー基本計画・OCCTO供給計画・東京電力パワーグリッド公表資料）。",
  },
  {
    label: "法人需要家の構成（関東の産業集積）",
    detail:
      "関東エリアには、千代田・港・新宿等のオフィス集積、印西等のデータセンター集積、京浜港湾・圏央道沿線の物流倉庫、千葉の京葉工業地帯など、多様な特別高圧・高圧需要家が立地します。これらの需要家は、契約電力規模・負荷率・稼働時間帯が業種ごとに大きく異なり、最適なプラン選択も業種・立地により変わります。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、燃料費調整の条件（上限の有無）、契約期間、サポート体制、BCP対応、再エネ調達メニューの有無など複数の観点を総合して判断すべきものです。本ページは東電EPの公開情報を整理しますが、他社（新電力含む）との相見積・比較を行ったうえで、自社条件に最適な選択をすることを推奨します。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で情報を整理しています。",
  },
];

const planTypes = [
  {
    name: "特別高圧電力（契約電力2,000kW以上の需要家向け）",
    role: "大規模工場・大型DC・大型商業施設等",
    detail:
      "特別高圧の需要家向けに、基本料金（契約電力×単価）＋電力量料金（使用kWh×単価）＋燃料費調整額＋再エネ賦課金で構成される料金体系が公開されています。大規模需要家は個別の供給条件・契約となるケースが多く、契約電力の設定（実量制・協議制）や時間帯別単価の適用などを含めて条件を確認することが重要です。具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 東京電力エナジーパートナー公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    name: "高圧電力（契約電力50kW以上2,000kW未満の需要家向け）",
    role: "中規模工場・ビル・商業施設・物流倉庫等",
    detail:
      "高圧需要家向けには、季節・時間帯別の料金体系を含む業務用メニューが公開されています。基本料金は契約電力（デマンド実量に基づく）に応じて決まり、力率割引・割増の仕組みも公表されています。負荷率や稼働時間帯により最適なメニューが異なるため、自社の使用パターンを把握したうえで選択することが重要です（出典: 東京電力エナジーパートナー公式サイト料金プラン）。",
  },
  {
    name: "再生可能エネルギー関連メニュー（アクアプレミアム等）",
    role: "RE100対応・脱炭素志向の需要家向け",
    detail:
      "東電EPは、水力由来の電力を供給する「アクアプレミアム」など、再生可能エネルギー由来電力やCO2排出ゼロを訴求するメニューを公開しています。RE100加盟企業や脱炭素を進める法人需要家の調達手段の一つとなります。再エネメニューは供給可能量・条件が限られる場合があるため、調達計画に組み込む際は事前確認が必要です（出典: 東京電力エナジーパートナー公式サイト・各メニュー公開情報）。",
  },
  {
    name: "燃料費調整額の算定（公表方式）",
    role: "全メニュー共通の変動要素",
    detail:
      "燃料費調整額は、一定期間の平均燃料価格（原油・LNG・石炭の貿易統計価格）に基づき、公表された算定式により月ごとに決定される仕組みが公開されています。燃料価格や為替の変動が単価に反映される構造のため、関東エリアの火力依存度の高さを踏まえると、燃調変動が電気代に与える影響を把握しておくことが重要です。上限の有無は契約区分・メニューにより異なるため、契約書で確認してください（出典: 東京電力エナジーパートナー公式サイト燃料費調整単価公表）。",
  },
];

const dataPoints = [
  {
    label: "供給区域（公表情報）",
    detail:
      "東電EPの主な供給区域は、東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県・山梨県と、静岡県東部（富士川以東）等です。静岡県は富士川を境に西側が中部電力エリアとなるため、静岡県内に拠点を持つ法人は拠点ごとの供給区域を確認する必要があります（出典: 東京電力パワーグリッド供給区域公表）。",
  },
  {
    label: "関東エリアの電源構成傾向（公表情報）",
    detail:
      "東京電力エリアはLNG火力を中心とする火力依存度の高い電源構成が公表されています。原子力（柏崎刈羽）は再稼働に向けた手続き段階です。火力依存度が高いエリアでは、燃料価格・為替の変動が燃料費調整額に反映されやすい傾向があります（出典: 資源エネルギー庁・OCCTO供給計画）。",
  },
  {
    label: "競争環境（新電力の参入状況）",
    detail:
      "関東エリアは新電力の参入が活発なエリアの一つで、東京ガス系（東京ガス）・全国系新電力・再エネ特化型など多様な小売電気事業者が法人向けサービスを提供しています。需要家は複数社からの相見積を取得し、条件を比較したうえで選択できる環境にあります（出典: 電力・ガス取引監視等委員会 登録小売電気事業者一覧）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金（2025年度3.98円/kWh）や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 関東の特別高圧大型工場（契約電力20,000kW級）",
    before:
      "Before: 関東エリアの大型工場が東電EPの特別高圧メニューを継続利用。燃料費調整額の上昇局面で電気代が変動。エリアの火力依存度を背景に燃調の影響を受けやすい状況を認識。",
    after:
      "After: 自社の負荷率・使用パターンを把握のうえ、東電EP継続と新電力切替の双方で相見積を取得し条件を比較。固定単価・燃調上限ありの条件や再エネメニューの有無を含めて総合評価し、自社条件に合う契約を選択（特定社の優劣ではなく条件適合で判断）。",
    result:
      "Result: 複数社比較により契約条件の透明性が向上。燃調変動リスクへの備え（上限条件・固定化）を契約に反映。※具体的な削減額は契約条件・使用実態により異なります。",
  },
  {
    title: "ケース2: 印西エリアのデータセンター（特別高圧・24h高負荷率）",
    before:
      "Before: 24時間高負荷率のDCが東電EPの特別高圧契約を利用。高負荷率は負荷率割引の観点では有利だが、年間使用量が巨大なため燃調変動の絶対額影響が大きい。",
    after:
      "After: 東電EPの料金体系（負荷率割引等）を公開情報で確認しつつ、RE100対応の再エネメニューやオフサイトPPAも含めて調達戦略を検討。エリア全体の市況は地域一般記事、企業別サービス詳細は本記事で確認し、判断材料を整理。",
    result:
      "Result: 負荷率特性に応じた料金体系の理解と、再エネ調達手段の比較により、調達戦略の選択肢を可視化。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 都内中規模オフィスビル（高圧500kW級）",
    before:
      "Before: 都内のオフィスビルが東電EPの高圧業務用メニューを利用。空調中心の負荷で夏季・冬季にピーク。プラン体系の詳細を把握しないまま契約を継続していた。",
    after:
      "After: 季節・時間帯別の料金体系、力率割引の仕組みを公開情報で確認。デマンド管理（契約電力の適正化）と新電力との比較を実施し、自社の使用パターンに合うメニュー・事業者を中立的に選定。",
    result:
      "Result: 契約電力の適正化と料金体系の理解により、基本料金の見直し余地を把握。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "契約申込・切替の手続き（一般的な流れ）",
    detail:
      "法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。東電EP・新電力いずれの場合も、契約期間・解約条件・燃調条件を契約書で確認することが重要です。",
  },
  {
    label: "供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "サポート体制・問い合わせ窓口（公開情報）",
    detail:
      "東電EPは法人向けの問い合わせ窓口・Web会員サービス等を公開しています。請求・使用量の確認、契約変更の手続き等のサポート体制は公式サイトで確認できます。停電時の物理的な復旧は一般送配電事業者（東京電力パワーグリッド）が担うため、契約小売事業者によらず復旧対応は共通である点も理解しておくと良いでしょう。",
  },
  {
    label: "BCP・災害対応の観点",
    detail:
      "関東エリアは2019年台風や首都直下地震想定など災害リスクを抱えます。停電時の復旧は送配電事業者の管轄ですが、停電通知・補償窓口・自家発連系支援などソフト面の対応は小売事業者ごとに異なります。BCPを重視する需要家は、契約時に災害時対応窓口・体制を確認することが推奨されます。",
  },
];

const cautionItems = [
  {
    label: "単価だけでなく総合的に判断する",
    detail:
      "電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（上限有無）・契約期間・解約条件・サポート・再エネメニューを総合して判断すべきです。本ページは東電EPの情報を整理しますが、特定社が一律に有利・不利と断定するものではありません。",
  },
  {
    label: "公開情報と個別見積の差",
    detail:
      "公式サイトの公表料金は標準的な条件を示すもので、特別高圧・大型高圧では個別協議・個別見積による契約となるケースが多くあります。実際の単価・条件は必ず個別見積で確認してください。",
  },
  {
    label: "燃料費調整の上限有無を確認",
    detail:
      "燃料費調整額の上限の有無は契約区分・メニューにより異なります。火力依存度の高い関東エリアでは燃調変動の影響が大きくなり得るため、上限条件を契約書で確認することが重要です。",
  },
  {
    label: "再エネメニューの供給条件",
    detail:
      "再エネ由来メニュー（アクアプレミアム等）は供給可能量・条件が限られる場合があります。RE100対応で調達する場合は、供給条件・トラッキング属性・追加性の要件を事前に確認してください。",
  },
  {
    label: "比較は相見積で",
    detail:
      "中立的な判断のためには、東電EPと新電力複数社からの相見積を取得し、同一条件（契約電力・使用量・期間）で比較することが基本です。",
  },
];

const compareViewpoints = [
  {
    label: "プラン体系の確認観点",
    detail:
      "特別高圧／高圧の区分、季節・時間帯別単価の有無、基本料金の算定（実量制/協議制）、力率割引の条件を公開情報で確認します。",
  },
  {
    label: "燃調・電源構成の感応度",
    detail:
      "関東エリアは火力（LNG）依存度が高く、燃料価格・為替の変動が燃調に反映されやすい傾向。燃調上限の有無と合わせて、変動リスクを評価します。",
  },
  {
    label: "再エネ調達の選択肢",
    detail:
      "アクアプレミアム等の再エネメニュー、非化石証書、オフサイトPPAなど、RE100対応の調達手段を比較します。",
  },
  {
    label: "契約・サポート・BCP",
    detail:
      "契約手続きの手間、サポート窓口、災害時対応（台風・地震想定エリア）の体制を確認します。",
  },
  {
    label: "新電力との比較環境",
    detail:
      "関東は新電力参入が活発で相見積を取りやすい環境。東京ガス系・全国系・再エネ特化型と条件を比較できます。",
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
      "再エネメニュー・非化石証書・オフサイトPPAを組合せることで、RE100対応とCO2削減を進められます。火力依存度の高いエリアでは再エネ調達の意義が大きくなります。",
  },
  {
    label: "省エネ投資との組合せ",
    detail:
      "高効率設備・LED・空調更新等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による条件最適化",
    detail:
      "東電EP継続と新電力切替の双方で相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。",
  },
  {
    label: "燃調変動への備え",
    detail:
      "固定単価・燃調上限ありの条件や、再エネ自家消費によるヘッジで、燃調変動リスクへの備えを契約に反映できます。",
  },
];

const checklistItems = [
  "自社拠点が東電EPの供給区域か（静岡県は富士川以東が東電エリア）確認したか",
  "契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "特別高圧／高圧の区分と適用メニューを公開情報で確認したか",
  "燃料費調整額の上限有無を契約書で確認したか",
  "季節・時間帯別単価・力率割引の条件を把握したか",
  "再エネメニュー（アクアプレミアム等）の供給条件を確認したか",
  "東電EPと新電力複数社から同一条件で相見積を取得したか",
  "契約期間・解約条件を契約書で確認したか",
  "供給地点特定番号（22桁）を拠点ごとに整理したか",
  "災害時（台風・地震想定）の対応窓口・BCP体制を確認したか",
  "省エネ投資・補助金活用と契約見直しを組合せて検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "東京電力エナジーパートナー（東電EP）とはどんな会社ですか？",
    answer:
      "2016年の電力小売全面自由化に伴う東京電力ホールディングスの分社化で発足した小売電気事業者です。発電・送配電と法的分離され、関東1都6県＋静岡県東部等を主な供給区域として法人・家庭向けの電力小売を担います。本ページは特定企業の優劣評価ではなく、公開情報に基づき法人契約者の判断材料を中立的に整理するものです（出典: 東京電力エナジーパートナー公式サイト・東京電力HD統合報告書）。",
  },
  {
    question: "エリア記事（東京電力エリアの法人電気代事情）と本ページの違いは？",
    answer:
      "エリア記事はエリア全体の市況・新電力動向・JEPX東京エリア価格など『面』の情報を扱います。本ページは東電EPという『特定企業』の法人向けプラン体系・燃調算定・契約手続き・サポート体制という『個別企業のサービス詳細』を解説します。エリア全体の市況は地域一般記事、特定企業のサービス詳細は本記事、と読み分けるのがおすすめです。",
  },
  {
    question: "東電EPの法人向けにはどんなプランがありますか？",
    answer:
      "公開情報では、特別高圧電力（契約電力2,000kW以上）、高圧電力（50kW以上2,000kW未満）の業務用メニュー、水力由来の再エネメニュー「アクアプレミアム」等が提供されています。料金は基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金で構成されます。特別高圧・大型高圧は個別協議・個別見積となるケースが多いため、具体的な単価・条件は公式の料金公表および個別見積で確認してください（出典: 東京電力エナジーパートナー公式サイト料金プラン・参照日2025年10月時点）。",
  },
  {
    question: "関東エリアは燃料費調整額の影響が大きいのですか？",
    answer:
      "東京電力エリアはLNG火力を中心とする火力依存度の高い電源構成が公表されており、燃料価格（原油・LNG・石炭）や為替の変動が燃料費調整額に反映されやすい背景があります。燃調は公表された算定式により月ごとに決定されます。上限の有無は契約区分・メニューにより異なるため、契約書での確認が重要です（出典: 資源エネルギー庁・東京電力エナジーパートナー燃料費調整単価公表）。",
  },
  {
    question: "東電EPと新電力はどちらが安いですか？",
    answer:
      "当サイトは特定企業の優劣を評価する立場にありません。電力会社の選択は、電力量料金単価だけでなく、基本料金・燃調条件（上限有無）・契約期間・サポート・再エネメニューを総合して判断すべきものです。関東エリアは新電力参入が活発で相見積を取りやすい環境のため、東電EPと新電力複数社から同一条件で相見積を取得し、自社条件に最適な選択をすることを推奨します。",
  },
  {
    question: "東電EPの再エネメニューはRE100対応に使えますか？",
    answer:
      "東電EPは水力由来の「アクアプレミアム」等、再生可能エネルギー由来電力やCO2排出ゼロを訴求するメニューを公開しています。RE100加盟企業の調達手段の一つとなり得ますが、供給可能量・条件が限られる場合や、トラッキング属性・追加性の要件確認が必要な場合があります。RE100対応で調達する際は供給条件を事前確認してください（出典: 東京電力エナジーパートナー公式サイト各メニュー公開情報）。",
  },
  {
    question: "静岡県の拠点は東電EPと中部電力ミライズのどちらの区域ですか？",
    answer:
      "静岡県は富士川を境に、東側（富士・富士宮・沼津・三島等）が東京電力エリア、西側（浜松・磐田・湖西・静岡市等）が中部電力エリアに分かれます。さらに東日本（50Hz）と西日本（60Hz）の周波数境界でもあります。静岡県内に複数拠点を持つ法人は、拠点ごとに供給区域・周波数・契約先が異なる可能性があるため確認が必要です（出典: 東京電力パワーグリッド・中部電力パワーグリッド供給区域公表）。",
  },
  {
    question: "東電EPの契約や切替に必要なものは？",
    answer:
      "供給地点特定番号（22桁）、契約電力、直近12ヶ月の使用実績データが一般的に必要です。供給地点特定番号は検針票・請求書で確認できます。契約時は契約期間・解約条件・燃調条件を契約書で確認することが重要です。停電時の物理的復旧は一般送配電事業者（東京電力パワーグリッド）の管轄で、契約小売事業者によらず共通です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 公式サイト（法人向け料金プラン）", url: "https://www.tepco.co.jp/ep/corporate/" },
  { name: "東京電力パワーグリッド（供給区域・系統情報）", url: "https://www.tepco.co.jp/pg/" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧）", url: "https://www.emsc.meti.go.jp/" },
  { name: "OCCTO 電力広域的運営推進機関（供給計画）", url: "https://www.occto.or.jp/" },
];

export default function TepcoEpCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/tepco-ep-corporate-electricity-guide"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "東京電力エナジーパートナーの法人向けプラン", url: "https://simulator.eic-jp.org/tepco-ep-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">東京電力エナジーパートナーの法人向けプラン</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            東京電力エナジーパートナー（東電EP）の法人向けプラン完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            東京電力エナジーパートナー株式会社（東電EP）の法人向け電力サービスを、公開情報に基づき中立的に整理します。特別高圧・高圧の契約メニュー体系、燃料費調整額の算定方式、関東エリアの電源構成、契約手続き・サポート体制を、第三者・社団法人視点で契約者の判断材料としてまとめます。特定企業の優劣を評価するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>東電EPの法人向けプラン体系（特別高圧／高圧／再エネメニュー）</li>
              <li>関東エリアの電源構成と燃料費調整額の算定方式（公表情報）</li>
              <li>契約手続き・サポート体制・BCP対応の確認観点</li>
              <li>規模別のケース別判断材料（中立的整理・捏造数値なし）</li>
              <li>東電EP向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは特定企業のサービスを公開情報で中立的に整理するガイドです。東京電力エリア全体の市況・新電力動向は{" "}
            <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              東京電力エリアの法人電気代事情
            </Link>
            を参照してください。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">東京電力エナジーパートナーの概要と本ページの位置づけ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東電EPは2016年の電力小売全面自由化に伴い発足した小売電気事業者です。本ページはエリア記事（市況・新電力動向）と差別化し、特定企業の法人向けサービス詳細を公開情報に基づき中立的に整理します。
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
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">東京電力エリアの法人電気代事情</Link>
              、エリア別の比較は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">法人向けプラン体系（公開情報）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東電EPが公開する法人向けプラン体系を、特別高圧・高圧・再エネメニュー・燃調算定方式の観点で整理します。具体的単価は公式公表・個別見積で確認してください。
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
            <h2 className="text-xl font-semibold text-slate-900">関東エリアの電源構成・供給区域・制度負担（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              供給区域、関東エリアの電源構成傾向、競争環境、全社共通の制度負担を公表データに基づき整理します。
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
              ※ 本セクションのデータは2025年10月時点の公開情報を基に整理した目安です。最新の料金・電源構成・制度単価は各出典元で必ずご確認ください。出典: 東京電力エナジーパートナー公式サイト・資源エネルギー庁・OCCTO等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関東エリアの代表的な3規模で、東電EPの公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
              関東エリアの業種別クロスは{" "}
              <Link href="/chiba-datacenter-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">千葉県のデータセンターの電気料金</Link>
              、{" "}
              <Link href="/kanagawa-logistics-warehouse-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">神奈川県の物流倉庫の電気料金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約手続き・サポート体制・BCP対応</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人契約の手続きの流れ、供給地点特定番号の確認、サポート窓口、災害時対応の観点を整理します。
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
              東電EPの公開情報を活用するうえでの留意点を整理します。公開情報と個別見積の差、燃調上限の確認、再エネメニューの供給条件などに注意が必要です。
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
              東電EP契約の有無にかかわらず、関東エリアの法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・再エネ調達・省エネ投資・相見積・燃調ヘッジが柱です。
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
            <h2 className="text-xl font-semibold text-slate-900">東電EP向け契約見直しチェックリスト（12項目）</h2>
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
              東電EPを含む関東エリアの法人需要家は、契約条件・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>夏季・冬季ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>相見積・省エネ投資による削減余地を見立てる</li>
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
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情（エリア全体）", description: "関東エリアの市況・新電力動向・JEPX東京エリア価格。" },
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "主要電力会社の法人向けサービスを中立的に整理。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の法人電気代事情ハブ。" },
              { href: "/chiba-datacenter-electricity-cost", title: "千葉県のデータセンターの電気料金", description: "関東エリアの業種×地域クロス（東電エリア）。" },
              { href: "/kanagawa-logistics-warehouse-electricity-cost", title: "神奈川県の物流倉庫の電気料金", description: "関東エリアの業種×地域クロス（東電エリア）。" },
              { href: "/aichi-automotive-electricity-cost", title: "愛知県の自動車・輸送機器工場の電気料金", description: "業種×地域クロスの参考（中部エリア）。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/supply-point-identification-number", title: "供給地点特定番号（22桁）とは", description: "契約・切替に必要な番号の確認方法。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定単価が向くケースの判断軸。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動を避けるべきケース。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "関東エリアの電源構成を可視化。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "省エネ投資の補助金活用（汎用）。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "再エネ・省エネ投資の税制優遇。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "全社共通の制度負担の見立て。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="東電EPを含む関東エリアの法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。相見積・再エネ調達・省エネ投資の優先順位づけに、中立的な判断材料としてご活用ください。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。東電EP・新電力の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
