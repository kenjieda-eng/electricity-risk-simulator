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
  "旧一電10社 法人向けプラン横断比較ガイド｜電源構成・燃調感応度・サービス特徴の中立的整理";
const pageDescription =
  "旧一般電気事業者10社（北海道電力／東北電力／東京電力エナジーパートナー／中部電力ミライズ／北陸電力／関西電力／中国電力／四国電力／九州電力／沖縄電力）の法人向けサービスを、公開情報に基づき横断的・中立的に整理。本ページは特定社の優劣評価ではなく、各社の電源構成・燃料費調整感応度・サービス特徴を客観的に並列記述し、法人需要家が『自社条件に合う選定軸』を見出す判断材料を提供します。第三者・社団法人視点で整理。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "旧一電 法人 プラン 比較",
    "電力会社 10社 横断比較",
    "電源構成 燃調感応度",
    "原子力 火力 水力 電源比率",
    "法人 電気料金 選び方",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/major-utility-comparison-corporate-electricity-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/major-utility-comparison-corporate-electricity-guide",
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
    label: "本ページの目的（重要）",
    detail:
      "本ページは旧一般電気事業者（旧一電）10社の法人向けサービスを横断的に整理するものですが、特定社の優劣を評価するものではありません。『どの社が最も安い／高い』『どの社がおすすめ』といった評価・推奨は一切行わず、各社の電源構成・燃料費調整感応度・供給エリア特性・サービス特徴を客観的に並列記述します。法人需要家が『自社の事業内容・所在エリア・負荷特性・経営方針に合う選定軸』を見出すための判断材料を、第三者・社団法人視点で中立的に提供することが目的です（出典: 各社公式サイト・統合報告書・資源エネルギー庁・OCCTO等の公開情報・参照日2025年10月時点）。一般社団法人エネルギー情報センターは、特定企業を推奨も否定もしない中立的立場で判断材料を整理します。",
  },
  {
    label: "旧一電10社の概要",
    detail:
      "旧一電10社は、北海道電力（ほくでん）／東北電力／東京電力エナジーパートナー（東電EP）／中部電力ミライズ／北陸電力／関西電力／中国電力（エネルギア）／四国電力（よんでん）／九州電力（きゅうでん）／沖縄電力（おきでん）です。2016年の電力小売全面自由化を経て、発電・小売と送配電（一般送配電事業者）が法的分離されました。各社は主に旧供給区域を中心に法人・家庭向け電力小売を展開しつつ、エリア外進出・新電力的なメニュー展開も進めています。",
  },
  {
    label: "本ページとエリア記事・各社個別ページとの関係",
    detail:
      "当サイトでは、エリア全体の市況・新電力動向を扱う『地域別電気料金事情（region-*）』、各社個別のサービス詳細を扱う『電力会社別解説（*-corporate-electricity-guide）』、そして本ページのような『横断比較ガイド』の3層構造で電力会社情報を整理しています。本ページは横断比較の入口として、各社の特徴を整理し、自社条件に合う選定軸を見出した上で、個別ページ・エリア記事に深掘りする使い方を想定しています。",
  },
  {
    label: "横断比較で見るべき主要観点",
    detail:
      "旧一電10社を横断比較する際の主要観点は、（1）電源構成（原子力比率・火力比率・水力比率・再エネ比率の違い）、（2）燃料費調整感応度（電源構成と燃調算定方式の関係）、（3）供給エリアの特性（独立系統・寒冷地・離島・地震多発地帯・産業集積等）、（4）法人需要家向けサービス特徴（特別高圧大口対応・再エネメニュー・コージェネ連携等）、（5）契約手続き・サポート体制・BCP対応です。これらを並列に整理することで、自社条件への適合度を中立的に評価できます。",
  },
  {
    label: "中立的な判断のための前提",
    detail:
      "電力会社の選択は、単価だけでなく、複数の観点を総合して判断すべきものです。本ページは旧一電10社の公開情報を横断的に整理しますが、新電力（全国系・都市ガス系・商社系・地域系）との相見積・比較も行ったうえで、自社条件に最適な選択をすることを推奨します。当センターは特定企業の優劣を断定する立場にありません。",
  },
];

const planTypes = [
  {
    name: "観点1: 電源構成の違い（公表情報）",
    role: "原子力・火力・水力・再エネの比率",
    detail:
      "旧一電10社の電源構成（自社保有・調達電源含む）は、各社の歴史的経緯・地理条件により大きく異なります。原子力比率が相対的に高い社（関西電力・九州電力・四国電力等）、水力比率が相対的に高い社（北陸電力・東北電力等）、火力依存度が大きい社（北海道電力・沖縄電力・原発停止局面の各社）など、構成パターンが多様です。電源構成は各社の統合報告書・有価証券報告書で公表されているため、燃調感応度の評価と合わせて確認することが重要です（出典: 各社統合報告書・資源エネルギー庁エネルギー基本計画・OCCTO供給計画）。",
  },
  {
    name: "観点2: 燃料費調整感応度（電源構成との関係）",
    role: "燃料価格変動の単価への反映度",
    detail:
      "燃料費調整額は、原油・LNG・石炭の貿易統計価格に基づく算定式により月ごとに決定されます。火力依存度（特にLNG・石炭・石油の比重）が大きい社は、燃料価格・為替の変動が燃調に反映されやすい傾向があります。原子力比率が高い社・水力比率が高い社では、相対的に燃調変動の影響が小さい可能性があります。各社の燃調算定方式・上限の有無は契約区分により異なるため、契約書での確認が重要です（出典: 各社燃料費調整単価公表・資源エネルギー庁）。",
  },
  {
    name: "観点3: 供給エリア特性と需要家ニーズ",
    role: "エリア特有の構造・需要家層",
    detail:
      "各社の供給エリアには独自の特性があります。北海道（寒冷地・本州非連系の独立性・ブラックアウト経験）、東北（東日本大震災・水力・原発再稼働進行）、関東（首都圏・データセンター集積）、中部（自動車サプライチェーン・LNG火力）、北陸（水力・能登半島地震）、関西（原子力比率・産業集積）、中国（マツダ・島根原発再稼働進行）、四国（伊方原発稼働）、九州（玄海・川内原発4基・太陽光導入量国内最大級）、沖縄（独立系統・離島・台風常襲・通年冷房）など、エリア特性が法人需要家の負荷プロファイルと密接に関係します。",
  },
  {
    name: "観点4: 法人サービス・契約手続きの共通項",
    role: "10社共通の枠組み",
    detail:
      "10社いずれも、特別高圧（契約電力2,000kW以上）・高圧（50kW以上2,000kW未満）・低圧の区分、基本料金＋電力量料金＋燃料費調整額＋再エネ賦課金の料金構成、供給地点特定番号（22桁）を用いた契約手続き、デマンド管理・力率割引等の基本的な枠組みは共通しています。一方、各社独自の業務用メニュー・再エネメニュー・グループ連携サービス（中部電力ミライズの自動車サプライチェーンCN支援、関西電力のおおきにポイント連携、九州電力みらいエナジーの再エネ調達支援等）には差があります。具体条件は各社公式公表で確認してください。",
  },
];

const dataPoints = [
  {
    label: "供給エリア（10社の管轄）",
    detail:
      "北海道電力＝北海道全域／東北電力＝東北6県＋新潟／東京電力エナジーパートナー＝関東1都6県＋静岡県富士川以東・山梨／中部電力ミライズ＝中部地方（愛知・岐阜・三重・長野・静岡富士川以西）／北陸電力＝富山・石川・福井／関西電力＝関西2府4県＋三重県の一部／中国電力＝中国5県／四国電力＝四国4県／九州電力＝九州7県／沖縄電力＝沖縄県全域。エリア境界（富士川等）や離島・特殊エリアの取扱いは各社公式で確認してください（出典: 各社・各一般送配電事業者の供給区域公表）。",
  },
  {
    label: "原子力発電所の稼働状況（公表情報・2025年10月時点）",
    detail:
      "稼働中の原発が立地する電力会社は、関西電力（高浜・大飯・美浜）、四国電力（伊方3号機）、九州電力（玄海3・4号機、川内1・2号機）、東北電力（女川2号機）、中部電力（浜岡）※状況により変動、北陸電力（志賀）※審査中、北海道電力（泊）※審査中、東京電力ホールディングス（柏崎刈羽）※審査・再稼働調整中、中国電力（島根2号機）※再稼働進行、です。沖縄電力は原発立地なし。原子力比率は燃調感応度に大きく影響します。最新の稼働状況は各社・原子力規制委員会公表で確認してください（出典: 原子力規制委員会・資源エネルギー庁・各社統合報告書）。",
  },
  {
    label: "再エネ・水力等の特徴的な電源構成（公表情報）",
    detail:
      "水力比率が相対的に高い: 北陸電力（黒部川等）・東北電力（奥只見等）。風力導入が比較的進む: 東北電力エリア（陸上風力）、北海道エリア（陸上・洋上）。地熱導入: 九州電力（八丁原等）、東北電力（澄川等）。太陽光導入量が大きい: 九州エリア（国内最大級）。バイオマス: 各社で導入が進む。再エネ比率は各社の電源構成公表で確認できます（出典: 資源エネルギー庁エネルギー白書・各社統合報告書）。",
  },
  {
    label: "再エネ賦課金・容量拠出金（全社共通の制度負担）",
    detail:
      "再生可能エネルギー発電促進賦課金や容量拠出金は、電力会社を問わず全需要家に適用される制度上の負担です。これらは特定企業のプラン選択では回避できない共通要素のため、電気代総額の評価では制度負担も含めて把握することが重要です（出典: 資源エネルギー庁・OCCTO公表）。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 多拠点全国法人（複数エリアにまたがる）",
    before:
      "Before: 全国に拠点を持つ法人が、エリアごとに旧一電（東電EP・関西電力・中部電力ミライズ等）と契約。エリア別に条件・燃調感応度が異なり、一括管理が困難。",
    after:
      "After: 各エリアの旧一電継続条件、全国系新電力への一括切替、エリア別最適化（新電力混在含む）の複数パターンで相見積を取得。本ページの横断比較を踏まえ、各エリアの電源構成・燃調感応度・サービス特徴を整理し、自社の運用負荷とコスト・CO2目標との総合評価。",
    result:
      "Result: 多拠点一括管理と拠点別最適化のトレードオフを定量化。エリア別の電源構成・燃調特性を踏まえた中立的判断。※具体的な削減額は契約条件・使用実態により異なり、推測値は記載しません。",
  },
  {
    title: "ケース2: RE100・SBT対応の脱炭素志向法人",
    before:
      "Before: RE100加盟法人が、CO2削減目標達成のための再エネ調達戦略を検討。所在エリアの旧一電の電源構成・再エネメニュー・PPA組成支援の比較が必要。",
    after:
      "After: 旧一電10社の電源構成・再エネメニュー・PPA組成支援・グループ再エネ事業の知見を本ページで横断確認。所在エリアの旧一電に加え、全国系・商社系新電力のPPA組成支援との相見積を取得。CO2排出係数の違い、追加性の扱い、コスト水準を中立的に比較。",
    result:
      "Result: 自社のRE100クライテリアと所在エリアの旧一電・新電力の調達手段を整合させる選択肢を整理。※実際の条件は個別見積で確認が必要です。",
  },
  {
    title: "ケース3: 特定エリア立地の中規模法人（旧一電継続 vs 新電力切替）",
    before:
      "Before: 特定エリア立地の中規模法人（例: 関西エリアの製造業）が、現契約（旧一電・関西電力）の継続か新電力切替を検討。同エリアの燃調感応度（関西電力は原子力比率が相対的に高い）と新電力のメリットを比較したい。",
    after:
      "After: 本ページの横断比較で関西電力の電源構成・燃調感応度の特徴を確認。関西電力継続と、全国系新電力・商社系新電力・地域新電力の複数選択肢で相見積を取得。同一条件比較で、自社の使用パターン・負荷率に合う条件を中立的に選定。",
    result:
      "Result: エリア特性（関西の原子力稼働）を踏まえた燃調変動リスクの理解と、複数選択肢の中立的比較で意思決定。※削減効果は使用実態により異なります。",
  },
];

const procedures = [
  {
    label: "10社共通: 契約申込・切替の手続き",
    detail:
      "旧一電10社いずれも、法人の電力契約は、供給地点特定番号（22桁）・契約電力・使用実績データ（直近12ヶ月）を準備のうえ、見積依頼→条件提示→契約申込→供給開始という流れが一般的です。エリアをまたぐ多拠点契約の場合は、各エリアの旧一電または対応する小売事業者ごとに手続きが必要です。",
  },
  {
    label: "10社共通: 供給地点特定番号の確認",
    detail:
      "契約・切替には供給地点特定番号（22桁）が必要です。検針票や請求書、または現契約先で確認できます。複数拠点を持つ法人は拠点ごとに番号が異なるため、拠点管理表での整理が有効です。",
  },
  {
    label: "10社共通: 停電復旧と小売の役割分担",
    detail:
      "停電時の物理的な復旧は一般送配電事業者（北海道電力ネットワーク・東北電力ネットワーク・東京電力パワーグリッド・中部電力パワーグリッド・北陸電力送配電・関西電力送配電・中国電力ネットワーク・四国電力送配電・九州電力送配電・沖縄電力送配電部門）が担います。契約小売事業者によらず物理的復旧の対応は共通です。停電通知・補償窓口等のソフト面対応は小売事業者ごとに異なります。",
  },
  {
    label: "10社の特徴的な法人サービスの違い",
    detail:
      "各社は基本的枠組みを共通とする一方、独自のサービス・メニューを展開しています。例えば、中部電力ミライズの自動車サプライチェーンCN支援、東電EPのデータセンター誘致対応、関西電力の業務用電力（時間帯別単価）の細かい区分、九州電力の太陽光大量導入時の需給調整、北海道電力の寒冷地BCP対応など、エリア特性に応じたサービス展開が見られます。具体内容は各社公式公表・各社個別ページで確認してください。",
  },
];

const cautionItems = [
  {
    label: "本ページは優劣評価ではない",
    detail:
      "本ページは旧一電10社の客観的特徴を並列に整理するものであり、特定社の優劣評価・順位付け・推奨は一切行いません。『どの社が最も安い／高い』『どの社がおすすめ』といった表現は意図的に避けています。法人需要家が自社条件に合う選定軸を見出すための材料を提供することが目的です。",
  },
  {
    label: "公開情報と個別見積の差",
    detail:
      "公式サイトの公表料金は標準的な条件を示すもので、特別高圧・大型高圧では個別協議・個別見積による契約となるケースが多くあります。実際の単価・条件は必ず個別見積で確認してください。",
  },
  {
    label: "燃調算定方式と上限の有無を確認",
    detail:
      "10社いずれも燃料費調整額の算定式を公表していますが、上限の有無は契約区分・メニューにより異なります。火力依存度・原子力稼働状況などの電源構成と合わせて、燃調変動の影響を契約書で確認してください。",
  },
  {
    label: "原発稼働状況は時系列で変化する",
    detail:
      "原子力発電所の稼働状況（再稼働・定期検査・運転停止）は時系列で変化します。本ページの情報は2025年10月時点の公開情報に基づきますが、最新の稼働状況は原子力規制委員会・各社公表で確認してください。",
  },
  {
    label: "比較は同一条件の相見積で",
    detail:
      "中立的な判断のためには、旧一電・新電力複数社からの相見積を、同一条件（契約電力・使用量・期間）で取得し比較することが基本です。本ページの横断比較は入口として活用し、個別ページ・エリア記事と組み合わせて深掘りすることを推奨します。",
  },
];

const compareViewpoints = [
  {
    label: "電源構成の選定軸",
    detail:
      "原子力比率・火力比率・水力比率・再エネ比率の組合せが、燃調感応度とCO2排出係数に影響します。自社のCO2削減目標・コストヘッジ方針に応じた電源構成を持つ社の選択が選定軸の一つです。",
  },
  {
    label: "燃調感応度の選定軸",
    detail:
      "火力依存度が大きい社は燃料価格変動の影響が大きく、原子力・水力比率が高い社は相対的に影響が小さい傾向です。自社の使用量規模と燃調変動許容度を踏まえた選定軸となります。",
  },
  {
    label: "エリア特性との適合",
    detail:
      "自社拠点のエリア特性（寒冷地・離島・地震多発・産業集積・データセンター集積等）と、各社のサービス対応（BCP・産業対応・再エネ）の適合度を評価します。",
  },
  {
    label: "再エネ・脱炭素対応の選定軸",
    detail:
      "RE100・SBT対応の調達手段（再エネメニュー・非化石証書・PPA組成支援・グループ再エネ事業）は各社で差があります。自社の脱炭素戦略との整合性を選定軸とします。",
  },
  {
    label: "横断比較と個別ページの読み分け",
    detail:
      "本ページの横断比較で大局的な特徴を把握した上で、関心のある社の個別ページ（9本のpower-utility-guide記事）、所在エリアのregion-*記事に深掘りする読み方が推奨されます。",
  },
];

const energySaving = [
  {
    label: "契約電力（デマンド）の適正化（10社共通）",
    detail:
      "高圧需要家は契約電力が基本料金に直結します。直近12ヶ月の最大デマンドに対し契約電力が過剰でないか確認し、デマンド管理で適正化することが基本料金削減の第一歩です。",
  },
  {
    label: "電源構成を踏まえた燃調ヘッジ戦略",
    detail:
      "火力依存度が大きい社のエリアでは固定単価・燃調上限ありの契約や再エネ自家消費によるヘッジが効きやすく、原子力・水力比率が高い社のエリアでは相対的に燃調変動の影響が小さい傾向。エリア特性に応じた戦略を選定できます。",
  },
  {
    label: "再エネ調達のエリア別最適化",
    detail:
      "再エネメニュー・非化石証書・PPA組成支援は各社で差があります。所在エリアの旧一電の再エネメニューと、全国系・商社系新電力のPPAを組み合わせるポートフォリオ戦略が有効です。",
  },
  {
    label: "省エネ投資との組合せ（10社共通）",
    detail:
      "高効率設備・LED・空調更新・蓄電池・自家発・分散電源等の省エネ投資（補助金活用可）と電力契約見直しを組合せることで、電気代総額の最適化が図れます。",
  },
  {
    label: "相見積による中立判断（10社共通）",
    detail:
      "旧一電継続・他旧一電（エリア外進出メニュー）・全国系新電力・商社系新電力・地域新電力の複数パターンで相見積を取得し、同一条件で比較することで、自社に最適な契約条件を選定できます。",
  },
];

const checklistItems = [
  "自社拠点が所在するエリアの旧一電を確認したか",
  "各拠点の契約電力（kW）が直近12ヶ月の最大デマンドに対して過剰でないか",
  "所在エリアの旧一電の電源構成（原子力・火力・水力・再エネ比率）を公開情報で確認したか",
  "燃料費調整額の算定式と上限の有無を契約書で確認したか",
  "原発稼働状況の最新情報（再稼働・定期検査）を原子力規制委員会等で確認したか",
  "再エネメニュー・非化石証書・PPA組成支援の有無を比較したか",
  "10社の横断比較で自社条件に合う選定軸を整理したか",
  "個別ページ（9本のpower-utility-guide）で関心のある社を深掘りしたか",
  "新電力（全国系・都市ガス系・商社系・地域系）との相見積も取得したか",
  "多拠点法人は一括管理とエリア別最適化のトレードオフを評価したか",
  "RE100・SBT対応の調達戦略を旧一電・新電力の組合せで検討したか",
  "単価だけでなく総合的な条件で中立的に判断したか",
];

const faqItems = [
  {
    question: "本ページはどの旧一電が一番安い／高いと教えてくれますか？",
    answer:
      "本ページは特定社の優劣評価・順位付け・推奨を一切行いません。『どの社が最も安い／高い』『どの社がおすすめ』といった評価は、契約電力規模・使用パターン・所在エリア・契約期間等の条件により大きく異なるため、一律の判断はできません。一般社団法人エネルギー情報センターは特定企業を推奨も否定もしない中立的立場で、各社の客観的特徴（電源構成・燃調感応度・サービス特徴）を並列に整理し、法人需要家が自社条件に合う選定軸を見出すための材料を提供することが目的です。具体的な単価比較は同一条件での相見積で行ってください。",
  },
  {
    question: "旧一電10社の電源構成にはどのような違いがありますか？",
    answer:
      "原子力比率が相対的に高い社（関西電力・九州電力・四国電力等、稼働中原発を持つ社）、水力比率が相対的に高い社（北陸電力・東北電力等）、火力依存度が大きい社（北海道電力・沖縄電力・原発停止局面の各社）、太陽光導入量が大きいエリア（九州電力エリア）など、電源構成は各社の歴史的経緯・地理条件により大きく異なります。電源構成は燃調感応度・CO2排出係数に影響するため、自社の判断材料として重要です。詳細は各社の統合報告書・有価証券報告書で公表されています（出典: 各社統合報告書・資源エネルギー庁・OCCTO供給計画）。",
  },
  {
    question: "燃料費調整感応度の違いはどう判断すれば良いですか？",
    answer:
      "燃料費調整額は、原油・LNG・石炭の貿易統計価格に基づく算定式により月ごとに決定されます。火力依存度（特にLNG・石炭・石油の比重）が大きい社は、燃料価格・為替の変動が燃調に反映されやすい傾向があります。原子力比率・水力比率が高い社では相対的に燃調変動の影響が小さい可能性があります。ただし、上限の有無は契約区分・メニューにより異なるため、契約書で確認する必要があります。エリアの電源構成と自社の使用量規模を踏まえて、燃調変動許容度を中立的に判断してください（出典: 各社燃料費調整単価公表・資源エネルギー庁）。",
  },
  {
    question: "原発稼働中の社の方が電気代が安くなりますか？",
    answer:
      "原子力比率が高い社は燃料費が相対的に安定する傾向がありますが、電気代単価は基本料金・電力量料金単価・燃調・再エネ賦課金等を含めた総額で判断すべきです。原発稼働中でも単価が高い場合・原発停止中でも単価が安定する場合があり、単純比較はできません。原発稼働状況は時系列で変化する点、安全規制への対応・廃炉コスト・新規制基準対応費用等も総合的に料金に反映される点を踏まえ、中立的に判断してください（出典: 各社統合報告書・電力ガス取引監視等委員会）。",
  },
  {
    question: "多拠点の全国法人はどう契約戦略を立てれば良いですか？",
    answer:
      "多拠点法人は、（1）各エリアの旧一電継続のエリア別最適化、（2）全国系新電力（複数エリア対応）への一括切替、（3）エリア別に旧一電・新電力を使い分けるハイブリッド、の3パターンを基本選択肢として相見積で比較するのが一般的です。一括契約のメリット（契約管理一元化・請求一元化）と、拠点別最適化のメリット（エリアごとの最適単価）のトレードオフを定量化し、自社の運用負荷とコストの両面で総合評価することを推奨します。本ページの横断比較で各エリアの特徴を把握した上で、判断材料を整理してください。",
  },
  {
    question: "RE100対応で旧一電10社を比較する観点は？",
    answer:
      "旧一電10社はそれぞれ再エネメニュー（非化石証書付き電力等）、グループ会社による再エネ事業（風力・太陽光・地熱・バイオマス・小水力）、コーポレートPPA組成支援を展開しています。RE100クライテリアへの適合性（追加性・CO2排出係数の扱い・第三者認証）はメニューにより異なります。所在エリアの旧一電の再エネメニューを基本としつつ、全国系・商社系新電力のPPA、地域新電力との組合せでポートフォリオを組成する戦略が有効です（出典: RE100公表クライテリア・環境省・各社公開情報）。",
  },
  {
    question: "本ページの情報はどこまで信頼できますか？",
    answer:
      "本ページは各社公式サイト・統合報告書・資源エネルギー庁・OCCTO等の公開情報（2025年10月時点）に基づき中立的に整理しています。ただし、料金単価・電源構成・原発稼働状況等は時系列で変化するため、最新情報は各出典元で必ず確認してください。また、本ページは横断比較の入口として作成しており、具体的な契約判断は同一条件の相見積で行うことを推奨します。当センターは特定企業を推奨も否定もしない中立的立場で判断材料を整理しています。",
  },
  {
    question: "横断比較の後、何をすれば良いですか？",
    answer:
      "本ページの横断比較で大局的な特徴を把握した後、（1）関心のある社の個別ページ（power-utility-guide配下の各社解説）で詳細を確認、（2）所在エリアのregion-*記事でエリア全体の市況・新電力動向を把握、（3）新電力（全国系・都市ガス系・商社系・地域系）の解説も参照、（4）同一条件で複数社から相見積を取得、（5）契約期間・燃調条件・解約条件・サポート体制を契約書で詳細確認、という流れで進めることを推奨します。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・エリア別単価・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "資源エネルギー庁（エネルギー基本計画・電源構成）", url: "https://www.enecho.meti.go.jp/" },
  { name: "OCCTO 電力広域的運営推進機関（供給計画・連系線）", url: "https://www.occto.or.jp/" },
  { name: "電力・ガス取引監視等委員会（登録小売電気事業者一覧）", url: "https://www.emsc.meti.go.jp/" },
  { name: "原子力規制委員会（原発稼働状況・新規制基準）", url: "https://www.nra.go.jp/" },
  { name: "各旧一電10社 公式サイト・統合報告書（料金プラン・電源構成）", url: "https://www.enecho.meti.go.jp/" },
];

export default function MajorUtilityComparisonCorporateElectricityGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/major-utility-comparison-corporate-electricity-guide"
        datePublished="2026-05-30"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "電力会社別解説", url: "https://simulator.eic-jp.org/articles/power-utility-guide" },
          { name: "旧一電10社 横断比較ガイド", url: "https://simulator.eic-jp.org/major-utility-comparison-corporate-electricity-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/power-utility-guide" className="underline-offset-2 hover:underline">電力会社別解説</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">旧一電10社 横断比較ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            旧一電10社 法人向けプラン横断比較ガイド｜電源構成・燃調感応度・サービス特徴の中立的整理
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            旧一般電気事業者10社（北海道電力／東北電力／東京電力エナジーパートナー／中部電力ミライズ／北陸電力／関西電力／中国電力／四国電力／九州電力／沖縄電力）の法人向けサービスを、公開情報に基づき横断的・中立的に整理します。<strong>本ページは特定社の優劣評価・順位付け・推奨を一切行いません。</strong>各社の電源構成・燃料費調整感応度・サービス特徴を客観的に並列記述し、法人需要家が『自社条件に合う選定軸』を見出す判断材料を、第三者・社団法人視点で提供します。
          </p>
          <AuthorBadge publishedAt="2026-05-30" updatedAt="2026-05-30" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>旧一電10社の電源構成の違い（原子力・火力・水力・再エネ比率）と燃調感応度の関係</li>
              <li>各社の供給エリア特性と法人需要家ニーズの対応</li>
              <li>10社の共通項と独自サービスの違い</li>
              <li>多拠点法人・RE100法人・エリア立地法人の判断材料</li>
              <li>横断比較→個別ページ→相見積の三段活用法</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは横断比較の入口です。関心のある社の詳細は{" "}
            <Link href="/articles/power-utility-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              電力会社別解説カテゴリの個別ページ
            </Link>
            で深掘りできます。本ページは中立的立場で作成しており、特定社の優劣評価・推奨は行いません。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">本ページの目的と中立性の前提</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページは旧一電10社の客観的特徴を並列に整理する横断比較ガイドです。特定社の優劣評価・順位付け・推奨は一切行いません。自社条件に合う選定軸を中立的に見出すための判断材料を提供します。
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
              各社の詳細は{" "}
              <Link href="/articles/power-utility-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社別解説（個別ページ一覧）</Link>
              、エリア全体の市況は{" "}
              <Link href="/articles/by-region" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">地域別電気料金事情（一覧）</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">横断比較の4観点（電源構成／燃調感応度／エリア特性／法人サービス）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電10社を横断比較する主要観点を、電源構成・燃調感応度・エリア特性・法人サービスの4軸で整理します。各観点で各社の客観的特徴を並列記述し、優劣評価は行いません。
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
            <h2 className="text-xl font-semibold text-slate-900">10社の供給エリア・原発稼働・再エネ構成（公表データ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              10社の供給エリア管轄、原発稼働状況（2025年10月時点）、特徴的な再エネ・水力等の電源、全社共通の制度負担を公表データに基づき整理します。
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
              ※ 本セクションのデータは2025年10月時点の公開情報を基に整理した目安です。最新の料金・電源構成・原発稼働状況は各出典元で必ずご確認ください。出典: 各社公式サイト・各社統合報告書・資源エネルギー庁・OCCTO・原子力規制委員会等から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">活用シーン別のケース別判断材料（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              旧一電10社の横断比較を活用する代表的な3シーンで、公開情報を踏まえた中立的な判断プロセスをケース別に整理します。特定社の優劣評価ではなく、自社条件に照らした判断の進め方を示すものです。具体的削減額は契約条件・使用実態により異なり、推測値は記載しません。
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
            <h2 className="text-xl font-semibold text-slate-900">10社共通の契約手続き・サポート体制・独自サービスの違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              10社共通の契約手続き・物理復旧の役割分担と、各社の独自サービスの違いを整理します。
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
            <h2 className="text-xl font-semibold text-slate-900">自社条件に合う『選定軸』の見出し方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページの横断比較を活用して、自社条件に合う選定軸を見出すための観点を整理します。優劣評価ではなく、自社の事業内容・所在エリア・負荷特性・経営方針に照らした適合度評価が重要です。
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
              、新電力の選び方は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電力会社の比較方法</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">横断比較を活用する際の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本ページの横断比較を活用するうえでの留意点を整理します。優劣評価でないこと、原発稼働状況の時系列変化、燃調算定方式の確認、同一条件相見積の必要性に注意が必要です。
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
            <h2 className="text-xl font-semibold text-slate-900">電気代最適化の打ち手（10社共通・エリア別最適化）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              所在エリアの旧一電の選択・継続・切替を問わず、法人需要家が取り得る電気代最適化の打ち手を整理します。契約電力適正化・電源構成を踏まえた燃調ヘッジ・エリア別再エネ調達・省エネ投資・相見積が柱です。
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
            <h2 className="text-xl font-semibold text-slate-900">旧一電横断比較・契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              横断比較を契約判断につなげる前にこのチェックリストで自社状況を整理しましょう。中立的な判断には複数社の同一条件相見積と総合的な条件評価が重要です。
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
              旧一電10社のいずれを契約・検討する法人需要家も、所在エリアの電源構成・契約条件・使用実態に応じて電気代の上振れリスクが変わります。シミュレーターで自社条件の年間電気代・上振れ幅を試算し、契約見直し・再エネ調達・省エネ投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>所在エリアの旧一電条件での年間電気代・上振れリスクを確認する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>原発稼働・火力依存度の異なるエリア間の燃調感応度を比較する</li>
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
              { href: "/articles/power-utility-guide", title: "電力会社別解説（カテゴリ一覧）", description: "旧一電・新電力各社の個別ページ一覧。" },
              { href: "/hepco-corporate-electricity-guide", title: "北海道電力（ほくでん）の法人向けプラン", description: "北海道エリアの個別解説。" },
              { href: "/tohoku-epco-corporate-electricity-guide", title: "東北電力の法人向けプラン", description: "東北エリアの個別解説。" },
              { href: "/tepco-ep-corporate-electricity-guide", title: "東京電力エナジーパートナーの法人向けプラン", description: "関東エリアの個別解説。" },
              { href: "/chuden-miraiz-corporate-electricity-guide", title: "中部電力ミライズの法人向けプラン", description: "中部エリアの個別解説。" },
              { href: "/rikuden-corporate-electricity-guide", title: "北陸電力の法人向けプラン", description: "北陸エリアの個別解説。" },
              { href: "/kepco-corporate-electricity-guide", title: "関西電力の法人向けプラン", description: "関西エリアの個別解説。" },
              { href: "/energia-corporate-electricity-guide", title: "中国電力（エネルギア）の法人向けプラン", description: "中国エリアの個別解説。" },
              { href: "/yonden-corporate-electricity-guide", title: "四国電力（よんでん）の法人向けプラン", description: "四国エリアの個別解説。" },
              { href: "/kyuden-corporate-electricity-guide", title: "九州電力（きゅうでん）の法人向けプラン", description: "九州エリアの個別解説。" },
              { href: "/okiden-corporate-electricity-guide", title: "沖縄電力（おきでん）の法人向けプラン", description: "沖縄エリアの個別解説。" },
              { href: "/articles/by-region", title: "地域別電気料金事情（一覧）", description: "全国エリア別の法人電気代事情ハブ。" },
              { href: "/eneos-denki-corporate-electricity-guide", title: "ENEOSでんき（法人向け）完全ガイド", description: "全国系新電力の参考。" },
              { href: "/local-utility-corporate-electricity-guide", title: "地域新電力（自治体系・地産地消）法人活用ガイド", description: "地域新電力の参考。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調算定方式の基礎。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国エリアの電源構成を可視化。" },
              { href: "/compare", title: "料金メニュー比較・診断", description: "自社に合う電力プランを診断する。" },
            ]}
          />

          <ContentCta
            heading="自社の電気代と契約見直しの優先順位を中立的に整理する"
            description="旧一電10社の横断比較で大局的特徴を把握した法人需要家向けに、シミュレーターで自社の上振れリスクと削減余地を試算できます。一般社団法人エネルギー情報センターは特定の電力会社を推奨も否定もしない中立的立場で、相見積・再エネ調達・省エネ投資の優先順位づけの判断材料を整理します。"
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
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の判断材料を整理します。旧一電継続・新電力切替・エリア別最適化の比較や契約見直しの進め方について、初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
