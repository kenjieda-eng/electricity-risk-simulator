import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";

const pageTitle =
  "オンサイトPPAとは｜自家消費型太陽光の第三者所有モデルを徹底解説（仕組み・メリット・適地条件）";
const pageDescription =
  "オンサイトPPA（第三者所有モデル）の仕組みを単体で深掘り。自家消費型太陽光の初期投資ゼロの構造、自己所有・リースとの違い、メリットと留意点、屋根面積・日射・自家消費率などの適地条件、PPA単価・契約年数の考え方、蓄電池併用、契約時の確認事項までを中立的に整理します。";
const pageUrl = "https://simulator.eic-jp.org/onsite-ppa-explained";

const CATEGORY_FAQ = CATEGORY_FAQ_22_35["corporate-ppa"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "オンサイトPPA",
    "第三者所有モデル",
    "自家消費型太陽光",
    "PPA 仕組み",
    "PPA 適地条件",
    "初期投資ゼロ 太陽光",
  ],
  alternates: {
    canonical: pageUrl,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/corporate-ppa", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/corporate-ppa"],
  },
};

// --- 第三者所有（TPO）モデルの登場人物 ---
const tpoRoles = [
  {
    label: "需要家（自社）",
    detail:
      "屋根や敷地を発電設備の設置場所として提供し、発電された電力を自家消費する側。設備の初期投資・所有権は持たず、消費した電力量（kWh）に応じてPPA事業者へ料金を支払うのが基本構造です。契約年数や単価の設計は個別交渉となるため、条件は事業者・案件により異なります。",
  },
  {
    label: "PPA事業者（発電事業者）",
    detail:
      "発電設備を所有し、設置・維持管理・保険・運用の責任を負う側。設備投資を回収するため、一定の契約年数にわたって需要家に電力を供給します。第三者が設備を所有することから『第三者所有モデル（TPO：Third Party Ownership）』と呼ばれます。",
  },
  {
    label: "EPC・O&M事業者",
    detail:
      "設計・調達・施工（EPC）を担う施工会社と、稼働後の保守・監視・清掃・故障対応（O&M）を担う保守会社。PPA事業者がこれらを一括手配するケースが一般的で、需要家側の運用負担が小さくなる点が特徴です。",
  },
  {
    label: "金融機関・投資家",
    detail:
      "設備投資の資金を提供する側。長期のキャッシュフロー（需要家からの電力料金）を裏づけにファイナンスが組成されます。契約年数が長めに設計されやすいのは、この投資回収の構造が背景にあります。",
  },
];

// --- 所有形態の比較 ---
const ownershipComparison = [
  {
    model: "自己所有（自社購入）",
    initial: "自社が全額負担（または補助金・融資を併用）",
    ownership: "自社",
    maintenance: "自社が手配・負担",
    merit: "発電した電力を全量自社利用でき、長期的な単価メリットが出やすい。減価償却・税制の対象にできる。",
    demerit: "初期投資と保守の手間・リスクを自社が負う。屋根・設備の維持責任も自社。",
  },
  {
    model: "リース",
    initial: "初期投資は原則不要（リース料を分割払い）",
    ownership: "リース会社（契約満了後に移転する形態もある）",
    maintenance: "契約により分担（保守込みのプランもある）",
    merit: "初期投資を抑えつつ、発電量にかかわらず定額のリース料で計画が立てやすい。",
    demerit: "発電量が想定を下回ってもリース料は固定。契約形態により会計処理が異なる。",
  },
  {
    model: "オンサイトPPA（第三者所有）",
    initial: "原則ゼロ（設備はPPA事業者が投資）",
    ownership: "PPA事業者",
    maintenance: "PPA事業者が負担（契約範囲による）",
    merit: "初期投資・保守負担を抑えつつ自家消費できる。消費量に応じた従量課金が基本。",
    demerit: "契約年数が長期になりやすく、単価・解約条件・満了後の扱いを事前確認する必要がある。",
  },
];

// --- メリット ---
const meritItems = [
  {
    label: "初期投資を抑えて自家消費を始められる",
    detail:
      "設備投資はPPA事業者が負担するため、需要家は原則として初期費用ゼロで自家消費型太陽光を導入できます。設備投資の稟議ハードルを下げやすい点が、導入検討が進みやすい理由の一つとされています。ただし総支払額は契約年数×消費量×単価で決まるため、長期の総コストで評価することが重要です。",
  },
  {
    label: "保守・運用の手間を外部化できる",
    detail:
      "パネル清掃・パワーコンディショナの点検・故障対応・法定点検などの運用は、契約範囲に応じてPPA事業者側が担うのが一般的です。自社に電気設備の専門人材がいない場合でも、運用負担を抑えて再エネ自家消費に取り組みやすくなります。",
  },
  {
    label: "系統からの購入電力を置き換えられる",
    detail:
      "屋根で発電した電力をその場で消費することで、系統から購入する電力量を減らせます。購入電力に含まれる燃料費調整額・再エネ賦課金・託送料金などの変動要素の影響を、自家消費分については受けにくくなる点が特徴です。削減幅は自家消費率や購入単価との差により変動します。",
  },
  {
    label: "再エネ由来電力としての環境価値",
    detail:
      "オンサイトの自家消費太陽光は、追加性のある再エネ電力として扱われることが一般的です。Scope2（購入電力由来の間接排出）の削減や、サプライチェーンからの再エネ要請への対応材料になり得ます。環境価値（証書）の帰属は契約により異なるため、事前確認が必要です。",
  },
  {
    label: "電力コストの見通しを立てやすい",
    detail:
      "自家消費分についてはPPA単価が契約期間中に固定されるケースが多く、系統電力の市場連動・燃料費調整の変動に対する一定のヘッジになり得ます。ただしPPA単価の水準・改定条項は契約ごとに異なるため、固定範囲と改定条件の確認が欠かせません。",
  },
];

// --- 留意点・デメリット ---
const cautionItems = [
  {
    label: "契約年数が長期になりやすい",
    detail:
      "設備投資の回収を前提とする構造上、契約年数は長期に設計されやすい傾向があります。事業の移転・撤退・建て替えなど、長期の事業計画との整合を事前に確認しておく必要があります。中途解約時の条件（違約金・設備買取など）は契約書で必ず確認してください。",
  },
  {
    label: "屋根・建物への制約と原状回復",
    detail:
      "設備の設置により屋根の防水改修や建て替えのタイミングに制約が生じる場合があります。契約満了後の設備の扱い（撤去・買取・継続利用）や原状回復の責任分担も、契約前に整理しておくべき論点です。",
  },
  {
    label: "自家消費率が低いと効果が出にくい",
    detail:
      "オンサイトPPAは『発電した電力をその場で使う』ことで価値が生まれます。休日や夜間の消費が少なく発電が余りやすい事業所では、自家消費率が下がり導入メリットが小さくなる場合があります。負荷パターンと発電カーブの重なりが重要です。",
  },
  {
    label: "PPA単価の水準は一概に安いとは限らない",
    detail:
      "PPA単価は案件・時期・規模・屋根条件により幅があり、系統電力より安くなる保証はありません。系統電力価格が低い局面では割高に見えるケースもあります。長期の総コストと変動リスクの両面で評価することが必要です。",
  },
  {
    label: "所有権・会計処理の確認",
    detail:
      "設備の所有権はPPA事業者にあるのが基本ですが、契約形態によっては会計・税務上の判断が分かれる場合があります。オンバランス・オフバランスの扱いを含め、会計士・監査法人・税理士との事前協議が推奨されます。",
  },
];

// --- 適地条件 ---
const siteConditions = [
  {
    label: "屋根面積・形状",
    detail:
      "一定以上のまとまった屋根面積が確保できるかが第一条件です。工場・倉庫・商業施設・物流拠点のように陸屋根や大面積の折板屋根を持つ建物は適地になりやすいとされます。天窓・設備・障害物が多い屋根は有効設置面積が減る点に注意が必要です。",
  },
  {
    label: "屋根の強度・築年数",
    detail:
      "パネル・架台の荷重に耐える構造強度と、契約年数にわたって使える屋根状態が必要です。近く建て替え・大規模改修を予定している場合は、設置と改修のタイミング調整が論点になります。防水層の状態や残存年数の確認も欠かせません。",
  },
  {
    label: "日射条件・方位・影",
    detail:
      "南向き・東西向きなどの方位、周辺建物や樹木による影の有無で発電量は変わります。日射量はエリアや立地で差があり、発電シミュレーションは立地条件を踏まえた個別試算が前提です。全国一律の数値で判断しないことが重要です。",
  },
  {
    label: "自家消費率（負荷との重なり）",
    detail:
      "昼間の電力消費が大きく、発電カーブと消費カーブが重なる事業所ほど自家消費率が高くなり、オンサイトPPAの効果が出やすくなります。24時間稼働や日中稼働が中心の施設は相性が良い一方、夜間中心・週末休業の施設は自家消費率が下がりやすい傾向があります。",
  },
  {
    label: "契約電力・受電設備",
    detail:
      "高圧・特別高圧の受電設備や、逆潮流・保護協調などの技術要件を満たせるかも確認事項です。系統連系の可否・条件は電力会社との協議が必要で、案件ごとに個別確認となります。",
  },
];

// --- PPA単価・契約年数の考え方 ---
const priceFactors = [
  {
    label: "PPA単価を構成する要素",
    detail:
      "PPA単価は、設備費・工事費・保守費・保険・ファイナンスコスト・想定発電量などを織り込んで設定されます。屋根条件が良く規模が大きいほど単価が下がりやすい傾向がある一方、条件により幅があり一律ではありません。具体的な単価水準は必ず個別見積で確認してください。",
  },
  {
    label: "契約年数の考え方",
    detail:
      "契約年数は設備投資の回収期間に連動し、長期に設計されやすいのが一般的です。年数が長いほど単価は下がりやすい反面、事業計画・屋根の使用計画との整合や中途解約条件の重要性が増します。年数と単価はトレードオフの関係にある点を踏まえた交渉が必要です。",
  },
  {
    label: "単価改定・エスカレーション条項",
    detail:
      "契約期間中に単価が一定率で変動（エスカレーション）する条項が設定される場合があります。固定なのか、毎年一定率で変わるのか、指標連動なのかを確認し、長期の総支払額を試算することが重要です。",
  },
  {
    label: "系統電力価格との比較軸",
    detail:
      "PPA単価は、系統から購入する電力の実質単価（電力量料金＋燃料費調整額＋再エネ賦課金＋託送料金などを含む総額ベース）と比較して評価します。系統電力は変動要素が大きいため、単年ではなく契約年数全体での比較が適切です。",
  },
];

// --- 蓄電池併用 ---
const batteryItems = [
  {
    label: "自家消費率の底上げ",
    detail:
      "昼間に発電した電力を蓄電池に貯め、夕方・夜間や休日に使うことで自家消費率を高められます。発電の余剰が出やすい事業所では、蓄電池併用でオンサイトPPAの効果を引き上げられる可能性があります。",
  },
  {
    label: "ピークカット・デマンド対策",
    detail:
      "蓄電池からの放電で受電のピークを抑えられれば、契約電力（デマンド）の低減による基本料金の抑制につながり得ます。デマンド管理の考え方は関連ページで整理しています。効果は負荷パターンと運用制御に依存します。",
  },
  {
    label: "BCP（事業継続）への備え",
    detail:
      "停電時に太陽光＋蓄電池で最低限の電力を確保できれば、事業継続の備えになります。ただし停電時に使える容量・回路は設計次第で、全負荷をまかなえるとは限りません。",
  },
  {
    label: "投資回収と補助制度",
    detail:
      "蓄電池は導入コストが相応にかかるため、補助制度の活用可否や運用メリットを踏まえた投資回収の見立てが重要です。制度は年度・地域により内容が変わるため、最新の公募要領を確認してください。",
  },
];

// --- 契約時の確認事項 ---
const contractChecks = [
  {
    label: "契約年数と中途解約条件",
    detail:
      "契約年数、途中解約時の違約金・設備買取義務の有無、事業移転・建て替え時の取り扱いを確認します。長期契約であるほど、この条項の重要度が高まります。",
  },
  {
    label: "PPA単価と改定条項",
    detail:
      "単価の水準、固定かエスカレーションか、指標連動の有無を確認し、契約年数全体の総支払額を試算します。",
  },
  {
    label: "環境価値（証書）の帰属",
    detail:
      "発電に伴う環境価値（非化石証書相当）が需要家に帰属するのかを明確にします。Scope2削減や再エネ調達の実績として使う場合は特に重要です。",
  },
  {
    label: "保守・保険・故障時の責任分担",
    detail:
      "O&Mの範囲、保険の付保状況、故障・災害時の復旧責任と費用負担の分担を確認します。",
  },
  {
    label: "契約満了後の扱い",
    detail:
      "契約満了時に設備を撤去するのか、無償・有償で譲渡されるのか、継続利用できるのかを確認します。",
  },
  {
    label: "屋根・建物の権利関係",
    detail:
      "賃借物件の場合はオーナーの承諾、区分所有の場合は関係者合意など、屋根・建物の権利関係の整理が前提になります。",
  },
];

// --- 代表シナリオ（5年累計・電卓検算） ---
const scenarios = [
  {
    title: "シナリオA：小規模事業所（設備100kW級）",
    profile:
      "日中稼働が中心の小規模事業所。屋根に約100kWの太陽光を設置し、年間の自家消費量を約100,000kWhと想定。",
    assumption:
      "系統からの購入単価とPPA単価の差を仮に 4円/kWh とした場合の例示（実際の差は契約・時期で変動）。",
    annual: "100,000kWh × 4円/kWh = 年間 40万円",
    fiveYear: "年40万円 × 5年 = 5年累計 200万円",
    calc: "100,000 × 4 = 400,000（年40万円）／ 400,000 × 5 = 2,000,000（5年累計200万円）",
  },
  {
    title: "シナリオB：中規模高圧工場（設備500kW級）",
    profile:
      "昼間の負荷が大きい高圧の中規模工場。屋根に約500kWを設置し、年間の自家消費量を約550,000kWhと想定。",
    assumption:
      "購入単価とPPA単価の差を仮に 5円/kWh とした場合の例示（自家消費率が高いほど効果が出やすい）。",
    annual: "550,000kWh × 5円/kWh = 年間 275万円",
    fiveYear: "年275万円 × 5年 = 5年累計 1,375万円",
    calc: "550,000 × 5 = 2,750,000（年275万円）／ 2,750,000 × 5 = 13,750,000（5年累計1,375万円）",
  },
  {
    title: "シナリオC：大規模物流倉庫（設備1MW級）",
    profile:
      "大面積の屋根を持ち日中の消費が大きい物流倉庫。屋根に約1,000kW（1MW）を設置し、年間の自家消費量を約1,100,000kWhと想定。",
    assumption:
      "購入単価とPPA単価の差を仮に 6円/kWh とした場合の例示（規模が大きいほど単価が下がりやすい傾向）。",
    annual: "1,100,000kWh × 6円/kWh = 年間 660万円",
    fiveYear: "年660万円 × 5年 = 5年累計 3,300万円",
    calc: "1,100,000 × 6 = 6,600,000（年660万円）／ 6,600,000 × 5 = 33,000,000（5年累計3,300万円）",
  },
];

// --- 導入手順チェックリスト ---
const checklistItems = [
  "直近12ヶ月の電力使用量・負荷パターン（昼夜・平日休日）を把握したか",
  "屋根面積・形状・強度・築年数・改修予定を確認したか",
  "立地条件を踏まえた発電量の個別シミュレーションを取得したか",
  "自家消費率の見込み（発電カーブと消費カーブの重なり）を試算したか",
  "系統からの購入電力の実質単価（総額ベース）を把握したか",
  "PPA単価・契約年数・単価改定条項を複数社から比較取得したか",
  "中途解約・事業移転・建て替え時の条件を契約書で確認したか",
  "環境価値（証書）の帰属先を明確にしたか",
  "契約満了後の設備の扱い（撤去・買取・継続）を確認したか",
  "保守・保険・故障時の責任分担を確認したか",
  "蓄電池併用の要否と補助制度の活用可否を検討したか",
  "会計・税務上の取り扱いを会計士・税理士と事前協議したか",
];

const faqItems = [
  {
    question: "オンサイトPPAとは何ですか？",
    answer:
      "需要家の敷地内（屋根など）にPPA事業者が太陽光発電設備を設置・所有し、発電した電力を需要家がその場で自家消費して、消費量に応じた料金を支払う仕組みです。設備を第三者が所有することから第三者所有モデル（TPO）とも呼ばれ、原則として初期投資ゼロで自家消費型太陽光を導入できる点が特徴です。",
  },
  {
    question: "オンサイトPPAとオフサイトPPAは何が違いますか？",
    answer:
      "オンサイトは需要家の敷地内に設備を置き電力を直接自家消費します。オフサイトは遠隔地の発電所から系統を経由して電力を供給し、フィジカル型とバーチャル型に分かれます。本ページはオンサイト単体の深掘りで、両者の比較はオンサイトPPAとオフサイトPPAの違いのページで扱っています。",
  },
  {
    question: "初期投資は本当にゼロですか？",
    answer:
      "設備投資はPPA事業者が負担するため、原則として初期費用ゼロで始められます。ただし総支払額は契約年数×自家消費量×PPA単価で決まるため、長期の総コストで評価する必要があります。単価や契約年数は案件により異なるため、必ず個別見積で確認してください。",
  },
  {
    question: "自己所有やリースと比べてどう選べばよいですか？",
    answer:
      "初期投資・保守負担を抑えたい場合はオンサイトPPA、長期の単価メリットや税制活用を重視するなら自己所有、その中間としてリースという整理が一般的です。自家消費率・資金計画・保守体制・会計処理の方針で最適解は変わるため、複数形態を比較検討することが推奨されます。",
  },
  {
    question: "どんな事業所が適していますか？",
    answer:
      "まとまった屋根面積と十分な強度があり、昼間の電力消費が大きく発電と消費のカーブが重なる事業所が適地とされます。工場・倉庫・物流拠点・商業施設などが代表例です。夜間中心・週末休業で自家消費率が低い施設は効果が出にくい傾向があります。",
  },
  {
    question: "PPA単価は系統電力より必ず安くなりますか？",
    answer:
      "必ず安くなるとは限りません。PPA単価は屋根条件・規模・契約年数で幅があり、系統電力価格が低い局面では割高に見えるケースもあります。系統電力の実質単価（総額ベース）と契約年数全体で比較し、変動リスクも含めて評価することが重要です。",
  },
  {
    question: "蓄電池は併用したほうがよいですか？",
    answer:
      "発電の余剰が出やすい事業所では、蓄電池併用で自家消費率を高めたり、ピークカットやBCP対応につなげたりできます。一方で蓄電池は導入コストが相応にかかるため、運用メリットと補助制度の活用可否を踏まえて投資回収を見立てる必要があります。",
  },
  {
    question: "契約時に特に確認すべき点は何ですか？",
    answer:
      "契約年数と中途解約条件、PPA単価と改定条項、環境価値（証書）の帰属、保守・保険・故障時の責任分担、契約満了後の設備の扱い、屋根・建物の権利関係の6点が中心です。長期契約であるほどこれらの条項の重要度が高まるため、会計・法務の事前確認を推奨します。",
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "環境省 脱炭素経営・再エネ調達に関する情報", url: "https://www.env.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function OnsitePpaExplainedPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "オンサイトPPAとは — 自家消費型太陽光の第三者所有モデル" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/corporate-ppa" className="underline-offset-2 hover:underline">コーポレートPPA</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">オンサイトPPAとは</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            オンサイトPPAとは — 自家消費型太陽光の第三者所有モデル
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            オンサイトPPAは、需要家の屋根や敷地にPPA事業者が太陽光発電設備を設置・所有し、発電した電力をその場で自家消費して消費量に応じた料金を支払う仕組みです。原則として初期投資ゼロで自家消費型太陽光を導入できる『第三者所有モデル（TPO）』として、法人の電力調達・脱炭素対応の選択肢の一つになっています。本ページでは、仕組み・メリット・留意点・適地条件・単価と契約年数の考え方・蓄電池併用・契約時の確認事項までを、オンサイトPPA単体で深掘りします。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>読み分けについて：</strong>オンサイトとオフサイトの比較は
            <Link href="/onsite-vs-offsite-ppa" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オンサイトPPAとオフサイトPPAの違い</Link>
            で扱っています。本ページはオンサイトPPA単体（第三者所有モデルの構造・自家消費の仕組み・適地条件・蓄電池併用）にフォーカスします。PPA全体の見取り図は
            <Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPAの全体像</Link>
            を、バーチャル型は
            <Link href="/virtual-ppa-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">バーチャルPPAの解説</Link>
            をご覧ください。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>オンサイトPPA（第三者所有モデル）の基本構造と登場人物</li>
              <li>自己所有・リースとの違いと選び方の考え方</li>
              <li>メリットと留意点・デメリットの整理</li>
              <li>適地条件（屋根面積・強度・日射・自家消費率）</li>
              <li>PPA単価・契約年数の考え方と比較軸</li>
              <li>蓄電池併用の効果と契約時の確認事項</li>
              <li>代表シナリオ3件（5年累計の例示）と導入手順チェックリスト12項目</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          {/* 1. オンサイトPPAとは */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイトPPAとは — 自家消費型太陽光を初期投資ゼロで</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPA（Power Purchase Agreement）とは、需要家の敷地内（主に屋根）にPPA事業者が太陽光発電設備を設置・所有し、そこで発電された電力を需要家がその場で自家消費し、消費した電力量（kWh）に応じてPPA事業者へ料金を支払う契約形態です。設備の投資・所有・保守をPPA事業者が担うため、需要家は原則として初期投資ゼロで自家消費型太陽光を導入できます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              『オンサイト』は、発電設備が需要家の敷地内（サイト内）にあることを意味します。系統（送配電網）を経由せず、屋根で発電した電力を建物内でそのまま使うため、送電ロスや託送料金の影響を自家消費分については受けにくいのが特徴です。遠隔地の発電所から系統経由で供給するオフサイトPPAとは、この点が根本的に異なります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              近年は、電気料金の構造的な高止まりや脱炭素対応の要請を背景に、法人の電力調達手段としてオンサイトPPAへの関心が高まっています。ただし契約は長期にわたり、単価や条件は案件ごとに大きく異なるため、仕組みと論点を正しく理解したうえで検討することが重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 2. 第三者所有（TPO）モデルの仕組み */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">第三者所有（TPO）モデルの仕組みと登場人物</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAは『第三者所有モデル（TPO：Third Party Ownership）』とも呼ばれます。発電設備を需要家ではない第三者（PPA事業者）が所有し、その設備から供給される電力を需要家が買い取る、という構造だからです。関係する主なプレイヤーと役割を整理します。
            </p>
            <div className="mt-4 space-y-3">
              {tpoRoles.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              この構造では、設備投資と運用リスクをPPA事業者・金融機関側が負い、需要家は屋根の提供と電力の購入に専念します。需要家にとっては、資産計上や保守の手間を抑えつつ再エネ自家消費に取り組める点がメリットになる一方、投資回収を支えるために契約年数が長期になりやすい点が構造上の特徴です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 3. 自己所有・リースとの違い */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">自己所有・リースとの違い — 3つの導入形態の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自家消費型太陽光の導入形態は、大きく『自己所有（自社購入）』『リース』『オンサイトPPA（第三者所有）』の3つに整理できます。初期投資の有無・所有権・保守負担・メリット・デメリットを比較し、自社の資金計画や保守体制に合った形態を選ぶことが重要です。
            </p>
            <div className="mt-4 space-y-3">
              {ownershipComparison.map((item) => (
                <div key={item.model} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.model}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">初期投資：</span>{item.initial}</p>
                    <p><span className="font-semibold text-slate-700">所有権：</span>{item.ownership}</p>
                    <p className="sm:col-span-2"><span className="font-semibold text-slate-700">保守：</span>{item.maintenance}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600"><span className="font-semibold text-emerald-700">メリット：</span>{item.merit}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600"><span className="font-semibold text-rose-700">留意点：</span>{item.demerit}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自家消費の経済性そのものを比較したい場合は
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              、PPAと自家消費（自己所有）の比較は
              <Link href="/ppa-vs-self-consumption-solar" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPAと自家消費型太陽光の比較</Link>
              が参考になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 4. メリット */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">オンサイトPPAのメリット</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAが法人に選ばれる主な理由は、初期投資・保守負担の外部化と、自家消費による購入電力の置き換え、そして再エネ由来電力としての環境価値にあります。代表的なメリットを整理します。
            </p>
            <div className="mt-4 space-y-3">
              {meritItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自家消費による購入電力の置き換えは、電気料金に含まれる変動要素の影響を受けにくくする効果があります。購入電力の内訳や上昇要因の全体像は
              <Link href="/articles" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">解説ページ一覧</Link>
              から関連記事をたどれます。サプライチェーン全体での再エネ調達の観点は
              <Link href="/scope3-supply-chain-renewable-procurement" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">サプライチェーンの再エネ調達（Scope3）</Link>
              で整理しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 5. 留意点・デメリット */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">留意点・デメリット — 長期契約ゆえの論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              メリットの裏側には、長期契約であるがゆえの論点があります。導入前に押さえておきたい留意点・デメリットを整理します。いずれも契約書と個別条件で結論が変わるため、事前確認が欠かせません。
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
              契約実務で見落とされやすい落とし穴は
              <Link href="/ppa-contract-pitfalls" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA契約の落とし穴</Link>
              に詳しくまとめています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 6. 適地条件 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">適地条件 — 屋根面積・日射・自家消費率</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAの効果は、屋根と負荷の条件に大きく左右されます。『まとまった屋根面積』『十分な強度と残存年数』『良好な日射条件』『高い自家消費率』が揃うほど適地になりやすい、というのが一般的な整理です。主な適地条件を確認します。
            </p>
            <div className="mt-4 space-y-3">
              {siteConditions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光導入に向いた法人の特徴は
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、農業・畜産・製造・商業施設など業種別の負荷特性は
              <Link href="/agriculture-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">農業の電気料金見直し</Link>
              や
              <Link href="/livestock-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">畜産業の電気料金見直し</Link>
              、
              <Link href="/commercial-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">商業施設の電気料金見直し</Link>
              も参考になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 7. PPA単価・契約年数の考え方 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA単価・契約年数の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA単価と契約年数は、オンサイトPPAの経済性を左右する最重要の論点です。ただし単価水準は屋根条件・規模・時期で幅があり、一律の数字で語ることはできません。ここでは『どのような要素で単価が決まり、何を比較軸にすべきか』という考え方を整理します。具体的な単価は必ず個別見積で確認してください。
            </p>
            <div className="mt-4 space-y-3">
              {priceFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年度ごとの価格感やベンチマークの考え方は
              <Link href="/ppa-price-benchmark-2026" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA価格ベンチマーク（2026）</Link>
              、中小企業でも取り組みやすい形態は
              <Link href="/sme-accessible-ppa-options" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業が選びやすいPPAの選択肢</Link>
              を参照してください。なお、系統電力側の変動要素として、再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と推移しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 8. 蓄電池併用 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">蓄電池併用 — 自家消費率とBCPを底上げする</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              発電の余剰が出やすい事業所では、蓄電池を併用することで自家消費率を高め、ピークカットやBCP（事業継続）への備えにつなげられる可能性があります。オンサイトPPAと蓄電池を組み合わせる際の主な観点を整理します。
            </p>
            <div className="mt-4 space-y-3">
              {batteryItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光と蓄電池の組み合わせによる効果の考え方は
              <Link href="/solar-battery-combination-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光＋蓄電池の組み合わせ効果</Link>
              、ピーク需要そのものの管理は
              <Link href="/peak-demand-management" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ピークデマンド管理</Link>
              で整理しています。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 9. 契約時の確認事項 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約時の確認事項 — 長期契約で外せない6点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAは長期契約であるため、契約前の確認が後々の運用を大きく左右します。最低限おさえておきたい確認事項を整理します。いずれも案件・事業者により条件が異なるため、契約書の文言で確認することが前提です。
            </p>
            <div className="mt-4 space-y-3">
              {contractChecks.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 10. 代表シナリオ3件（5年累計） */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ3件 — 自家消費による削減額の例示（5年累計）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAで系統からの購入電力を自家消費に置き換えた場合の削減額を、規模別に例示します。削減額は「自家消費量 ×（購入単価とPPA単価の差）」で概算でき、5年累計は「年間削減額 × 5」で表せます。<strong>以下の単価差はあくまで例示であり、実際の差は契約・時期・屋根条件により変動します。</strong>断定的な数値ではない点にご注意ください。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((sc) => (
                <div key={sc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{sc.title}</p>
                  <div className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">前提：</span>{sc.profile}</p>
                    <p><span className="font-semibold text-slate-700">単価差の仮定：</span>{sc.assumption}</p>
                    <p><span className="font-semibold text-emerald-700">年間削減額：</span>{sc.annual}</p>
                    <p><span className="font-semibold text-emerald-700">5年累計：</span>{sc.fiveYear}</p>
                    <p className="text-xs text-slate-500"><span className="font-semibold">検算：</span>{sc.calc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 上記はいずれも代表例です。実際の削減効果は自家消費率・購入単価・PPA単価・契約年数・立地により大きく変動します。導入判断は個別のシミュレーションと見積に基づいて行ってください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 11. 導入手順チェックリスト */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">導入手順チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              オンサイトPPAの検討を進める前に、このチェックリストで自社状況を整理してください。1項目でも未確認があれば、見積の精度や交渉力が下がりやすくなります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の電力使用状況や上昇リスクは
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              や
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較・診断</Link>
              で確認できます。
            </p>
          </section>

          <MarketDataFaq items={CATEGORY_FAQ} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-07-21"
            />
            <GlossaryLinks
              currentSlug="onsite-ppa-explained"
              terms={["非化石証書", "電力量料金", "再エネ賦課金", "託送料金", "契約電力", "基本料金", "高圧電力"]}
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/corporate-ppa", title: "コーポレートPPA（カテゴリ一覧）", description: "オンサイト・オフサイト・バーチャルPPAの記事をハブから探す。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAの全体像", description: "PPAの種類と選び方の見取り図。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトPPAとオフサイトPPAの違い", description: "設置場所・供給経路・環境価値の違いを比較。" },
              { href: "/virtual-ppa-explained", title: "バーチャルPPAの解説", description: "差金決済型の仕組みと会計上の論点。" },
              { href: "/ppa-price-benchmark-2026", title: "PPA価格ベンチマーク（2026）", description: "価格水準の考え方と比較軸。" },
              { href: "/sme-accessible-ppa-options", title: "中小企業が選びやすいPPA", description: "規模が小さくても取り組みやすい選択肢。" },
              { href: "/ppa-contract-pitfalls", title: "PPA契約の落とし穴", description: "長期契約で見落としやすい条項を整理。" },
              { href: "/ppa-vs-self-consumption-solar", title: "PPAと自家消費型太陽光の比較", description: "第三者所有と自己所有の判断軸。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "自家消費の経済性と投資回収の考え方。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "屋根・負荷・立地から見た適地の条件。" },
              { href: "/solar-battery-combination-benefit", title: "太陽光＋蓄電池の組み合わせ効果", description: "自家消費率とBCPの底上げ。" },
              { href: "/scope3-supply-chain-renewable-procurement", title: "サプライチェーンの再エネ調達（Scope3）", description: "取引先要請に応える調達手段の整理。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理", description: "契約電力・基本料金を抑える考え方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の電力コストと削減余地を確認する"
            description="オンサイトPPAの検討は、まず自社の電力使用状況・購入単価・上昇リスクの把握から始まります。シミュレーターで現状を試算し、自家消費で置き換えられる余地を見立てましょう。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              { href: "/how-to", label: "使い方を見る" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="オンサイトPPAの検討、専門家に相談しませんか？"
            description="オンサイトPPAは長期契約であり、単価・契約年数・環境価値・満了後の扱いなど確認すべき論点が多くなります。エネルギー情報センターは中立的な立場で、法人・自治体の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
