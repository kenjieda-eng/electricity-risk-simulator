import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import TableOfContents from "../../components/market-data/TableOfContents";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { CATEGORY_FAQ_22_35 } from "../../data/categoryFaq22to35";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";

const pageTitle =
  "Scope3・サプライチェーン再エネ調達の実務ガイド｜Tier1/Tier2要請・一次データ・GHGプロトコル対応";
const pageDescription =
  "Scope3（サプライチェーン全体の間接排出）と、その削減に向けた再エネ電力調達を実務目線で整理。15カテゴリの全体像、GHGプロトコルの算定の考え方、一次データ収集、Tier1・Tier2サプライヤーへの要請、非化石証書・PPA・RE100、SBT・CDPとの接続、代表シナリオの費用試算まで中立的にまとめます。";
const pageUrl =
  "https://simulator.eic-jp.org/scope3-supply-chain-renewable-procurement";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_22_35["decarbonization"] ?? [];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Scope3 サプライチェーン",
    "Scope3 再エネ調達",
    "GHGプロトコル 算定",
    "Tier1 サプライヤー 要請",
    "一次データ Scope3",
    "SBT CDP 電力",
  ],
  alternates: {
    canonical: pageUrl,
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/decarbonization", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/decarbonization"],
  },
};

// --- Scope3 15カテゴリ（GHGプロトコルの公表分類） ---
const scope3Categories = [
  {
    no: 1,
    stream: "上流",
    name: "購入した製品・サービス",
    note: "原材料・部品・購入電力以外の調達物の製造に伴う排出。多くの企業でScope3の最大割合を占めやすいカテゴリ。",
  },
  {
    no: 2,
    stream: "上流",
    name: "資本財",
    note: "設備・機械・建物など固定資産の製造に伴う排出。設備投資の多い年度に影響が出やすい。",
  },
  {
    no: 3,
    stream: "上流",
    name: "Scope1・2に含まれない燃料・エネルギー関連活動",
    note: "購入電力・燃料の採掘・輸送・送配電ロスなど、Scope1・2の外側にあるエネルギー上流の排出。",
  },
  {
    no: 4,
    stream: "上流",
    name: "輸送・配送（上流）",
    note: "調達物の自社到着までの物流に伴う排出。委託輸送を含む。",
  },
  {
    no: 5,
    stream: "上流",
    name: "事業から出る廃棄物",
    note: "自社事業活動で発生した廃棄物の処理・処分に伴う排出。",
  },
  {
    no: 6,
    stream: "上流",
    name: "出張",
    note: "従業員の出張に伴う交通機関利用の排出。",
  },
  {
    no: 7,
    stream: "上流",
    name: "雇用者の通勤",
    note: "従業員の通勤に伴う排出。在宅勤務時のエネルギー使用を含める整理もある。",
  },
  {
    no: 8,
    stream: "上流",
    name: "リース資産（上流）",
    note: "自社が賃借しているリース資産の運用に伴う排出（Scope1・2に計上していない分）。",
  },
  {
    no: 9,
    stream: "下流",
    name: "輸送・配送（下流）",
    note: "販売した製品の出荷以降、顧客に届くまでの物流に伴う排出。",
  },
  {
    no: 10,
    stream: "下流",
    name: "販売した製品の加工",
    note: "中間製品を販売した場合の、その後の加工工程に伴う排出。",
  },
  {
    no: 11,
    stream: "下流",
    name: "販売した製品の使用",
    note: "電力を消費する製品などでは、使用段階の排出が非常に大きくなりやすいカテゴリ。",
  },
  {
    no: 12,
    stream: "下流",
    name: "販売した製品の廃棄",
    note: "販売した製品が使用後に廃棄・処理される段階の排出。",
  },
  {
    no: 13,
    stream: "下流",
    name: "リース資産（下流）",
    note: "自社が他者に賃貸しているリース資産の運用に伴う排出。",
  },
  {
    no: 14,
    stream: "下流",
    name: "フランチャイズ",
    note: "フランチャイズ加盟店の事業活動に伴う排出（フランチャイザー側の整理）。",
  },
  {
    no: 15,
    stream: "下流",
    name: "投資",
    note: "投資先の事業活動に伴う排出。金融機関では特に重要なカテゴリとされる。",
  },
];

// --- GHGプロトコルの算定アプローチ ---
const calcApproaches = [
  {
    label: "支出ベース（金額 × 排出原単位）",
    detail:
      "調達金額に金額あたりの排出原単位を掛けて概算する方法。データ整備の初期段階で全体像を把握するのに向くが、削減努力が数値に反映されにくい。",
  },
  {
    label: "物量ベース（数量 × 物量あたり原単位）",
    detail:
      "重量・数量など物量に物量あたりの原単位を掛ける方法。支出ベースより精度が上がるが、原単位の出所（二次データ）に依存する。",
  },
  {
    label: "サプライヤー固有データ（一次データ）",
    detail:
      "サプライヤーが実測・算定した排出量を直接受け取る方法。再エネ調達などの削減努力が数値に反映されるため、SBT整合の削減管理では最終的にここを目指すのが一般的とされる。",
  },
  {
    label: "ハイブリッド",
    detail:
      "重要サプライヤーは一次データ、裾野の広い少額調達は支出・物量ベースで概算するなど、精度と実務負荷のバランスを取る組み合わせ方。",
  },
];

// --- 一次データ収集の実務 ---
const primaryDataSteps = [
  {
    label: "対象カテゴリの重要度スクリーニング",
    detail:
      "15カテゴリのうち、まず支出・物量ベースで概算し、排出量の大きいカテゴリ（多くの企業でCat.1やCat.11）を特定して一次データ化の優先順位を付ける。",
  },
  {
    label: "サプライヤーの層別（Tier1/Tier2）",
    detail:
      "直接取引のあるTier1と、その先のTier2以降を区別。調達額・排出寄与・データ対応力で層別し、要請の順序と粒度を設計する。",
  },
  {
    label: "データ様式・算定境界の統一",
    detail:
      "サプライヤーごとに算定境界や単位がばらつくと集計できない。共通の入力様式・算定期間・単位を定義し、GHGプロトコルの考え方に沿って揃える。",
  },
  {
    label: "収集基盤の運用",
    detail:
      "アンケート・調達システム連携・専用プラットフォームなどでデータを収集・保管。年次更新の運用体制（依頼・回収・検証）を回す。",
  },
  {
    label: "検証とトレーサビリティの確保",
    detail:
      "再エネ調達分は、証書・契約・トラッキング情報など裏付けを添えて受け取る。第三者検証や開示に耐える記録を残す。",
  },
];

// --- Tier1・Tier2への要請 ---
const tierRequests = [
  {
    label: "Tier1への一次データ提供要請",
    detail:
      "直接取引先に対し、供給する製品・サービスに紐づく排出量の算定・提供を要請。契約更新や調達方針への組み込みで実効性を高める例が多い。",
  },
  {
    label: "Tier1経由でのTier2への波及",
    detail:
      "Tier2以降には直接の取引関係がないため、Tier1を通じて上流にデータ提供・再エネ化を働きかける『カスケード』型のアプローチが取られる。",
  },
  {
    label: "再エネ電力への切替要請",
    detail:
      "サプライヤーに対し、製造に用いる購入電力の再エネ化（メニュー切替・証書・PPA等）を要請する動き。強制ではなく段階的な目標設定・支援と組み合わせるのが一般的とされる。",
  },
  {
    label: "共同での削減・能力構築支援",
    detail:
      "算定ノウハウの共有、勉強会、共同調達など、サプライヤーの負担を下げる支援を併走させることで、データ品質と削減の両方を引き上げやすい。",
  },
];

// --- 再エネ電力の調達手段 ---
const procurementMeans = [
  {
    name: "再エネメニュー（電力会社のグリーンプラン）",
    detail:
      "電力会社が提供する再エネ電源・証書付きメニューへの切替。導入の手続きが比較的軽い一方、上乗せ単価や再エネ属性の裏付けは商品ごとに異なるため確認が必要。",
  },
  {
    name: "非化石証書",
    detail:
      "電気の『非化石価値』を証書として調達し、購入電力に付与する手段。種類や由来（FIT・非FIT、トラッキングの有無）で扱いが変わるため、目的に合う種別の確認が要る。",
  },
  {
    name: "コーポレートPPA（オンサイト／オフサイト）",
    detail:
      "発電事業者と長期契約を結び再エネ電力を調達する枠組み。自社敷地に設備を置くオンサイトと、遠隔地の電源から調達するオフサイトがある。長期の価格見通しを得やすい一方、契約設計は専門性が高い。",
  },
  {
    name: "自家消費型太陽光",
    detail:
      "自社屋根・敷地に太陽光を設置して自家消費する方法。昼間稼働の大きい拠点と相性がよいが、発電量は立地・面積・気象で変動する。",
  },
  {
    name: "RE100などのイニシアチブ整合",
    detail:
      "事業活動で使用する電力を100%再エネにする目標枠組み。調達手段の選択肢や証書の要件はイニシアチブ側の基準に沿って整理する必要がある。",
  },
];

// --- SBT・CDPとの接続 ---
const disclosureLinks = [
  {
    label: "SBT（Science Based Targets）",
    detail:
      "科学的根拠に基づく削減目標の枠組み。Scope3が一定割合以上を占める場合はScope3目標の設定が求められる整理があり、サプライヤーエンゲージメント目標が用いられる例もある。具体的な基準は公式ガイダンスの確認が必要。",
  },
  {
    label: "CDP（気候変動質問書）",
    detail:
      "投資家・取引先向けの情報開示プラットフォーム。Scope3の算定状況やサプライヤーへの働きかけが評価項目に含まれる。回答の一貫性と裏付けが重視される。",
  },
  {
    label: "取引先からの要請（サプライチェーン連鎖）",
    detail:
      "大手企業がScope3削減を進めると、その要請が取引先へ連鎖する。中堅・中小でも算定と再エネ調達の準備が取引維持の要件になりつつある。",
  },
];

// --- 代表シナリオ（費用の例示・5年累計） ---
const scenarios = [
  {
    title: "シナリオA：自社購入電力の再エネメニュー切替（上乗せ費用の例示）",
    setup:
      "サプライチェーン上流の自社工程として、購入電力を再エネメニューへ切り替える場合の追加費用を例示。再エネ上乗せ単価を仮に1.2円/kWh、年間使用電力を仮に150万kWhと置いた場合。",
    formula: "1.2円/kWh × 1,500,000kWh = 年180万円 → 5年累計 180万円 × 5 = 900万円",
    result: "年間の再エネ上乗せ費用の目安：約180万円／5年累計：約900万円",
  },
  {
    title: "シナリオB：Tier1サプライヤー10社への一次データ収集基盤（運用費用の例示）",
    setup:
      "Tier1サプライヤー10社に一次データ提供を要請し、データ収集・検証プラットフォームを運用する場合の年間コストを例示。1社あたり月2万円の運用コストと置いた場合。",
    formula:
      "2万円/月 × 12ヶ月 × 10社 = 年240万円 → 5年累計 240万円 × 5 = 1,200万円",
    result: "年間の運用費用の目安：約240万円／5年累計：約1,200万円",
  },
  {
    title: "シナリオC：非化石証書によるサプライチェーン電力の再エネ化（調達費用の例示）",
    setup:
      "上流工程の一部電力に非化石証書を付与して再エネ化する場合の費用を例示。証書単価を仮に0.4円/kWh、対象電力を年間400万kWhと置いた場合。",
    formula: "0.4円/kWh × 4,000,000kWh = 年160万円 → 5年累計 160万円 × 5 = 800万円",
    result: "年間の証書調達費用の目安：約160万円／5年累計：約800万円",
  },
];

// --- よくある落とし穴 ---
const pitfalls = [
  "支出ベースの概算のまま据え置き、再エネ調達の努力が数値に反映されない状態を放置する",
  "算定境界・期間・単位をサプライヤー間で統一せず、集計・比較ができなくなる",
  "非化石証書・PPAの再エネ属性（由来・トラッキング・二重計上防止）の裏付けを確認しないまま計上する",
  "Tier1にだけ要請し、排出寄与の大きいTier2以降への波及設計を欠く",
  "SBT・CDPなど開示先の基準を確認せず、算定方法が要件と食い違う",
  "電気料金の政策コスト（賦課金など）と、Scope算定上の排出量を混同する",
];

// --- 実務チェックリスト ---
const checklistItems = [
  "15カテゴリを支出・物量ベースで概算し、排出量の大きいカテゴリを特定したか",
  "一次データ化の優先順位（Cat.1・Cat.11など）を決めたか",
  "サプライヤーをTier1／Tier2以降で層別し、要請の順序を設計したか",
  "データ様式・算定境界・算定期間・単位を統一したか",
  "再エネ調達分の証書・契約・トラッキングの裏付けを収集する運用にしたか",
  "自社購入電力の再エネ化手段（メニュー・証書・PPA・自家消費）を比較検討したか",
  "SBT・CDP・取引先要請など、開示・目標先の基準を確認したか",
  "電気料金コスト（賦課金・燃料費調整等）と排出量算定を切り分けて管理しているか",
  "サプライヤーへの能力構築支援・共同削減の枠組みを用意したか",
  "年次更新（依頼・回収・検証）の体制と担当を定めたか",
];

const faqItems = [
  {
    question: "Scope3とScope2の違いは何ですか？",
    answer:
      "Scope2は自社が購入した電力・熱・蒸気の使用に伴う間接排出で、いわば『買った電気の会計』にあたります。詳細は別ページ（Scope2の算定と報告ガイド）で扱います。一方Scope3は、原材料調達・物流・製品の使用・廃棄・投資など、Scope1・2の外側にあるサプライチェーン全体の間接排出を指し、GHGプロトコルで15カテゴリに分類されています。本ページはScope3と、その削減に向けた再エネ電力調達を分けて整理しています。",
  },
  {
    question: "Scope3の算定はどのカテゴリから始めればよいですか？",
    answer:
      "一般には、まず15カテゴリを支出ベースや物量ベースで概算し、排出量の大きいカテゴリを特定するスクリーニングから始めるのが定石とされます。多くの企業でカテゴリ1（購入した製品・サービス）やカテゴリ11（販売した製品の使用）が大きくなりやすいとされますが、業種により構成は異なります。大きいカテゴリから順に一次データ化を進める考え方が一般的です。",
  },
  {
    question: "電力の再エネ調達はScope3のどこに効きますか？",
    answer:
      "自社が使う購入電力そのものは主にScope2ですが、サプライヤーが製造工程で使う電力の再エネ化はカテゴリ1（購入した製品・サービス）に効き、電力を消費する自社製品の使用段階はカテゴリ11に関わります。また購入電力・燃料の上流はカテゴリ3に該当します。どのカテゴリに効くかは、再エネ化する電力が『誰の・どの工程の』電力かで変わります。",
  },
  {
    question: "一次データと二次データの違いは何ですか？",
    answer:
      "一次データはサプライヤーが実測・算定した固有の排出量データで、再エネ調達などの削減努力が数値に反映されます。二次データは金額あたり・物量あたりの平均的な排出原単位を用いた概算で、初期の全体把握に向く一方、個社の努力は反映されにくい特徴があります。重要サプライヤーは一次データ、裾野は二次データというハイブリッドが実務では取られやすいとされます。",
  },
  {
    question: "Tier1サプライヤーにはどこまで要請できますか？",
    answer:
      "一般には、直接取引先であるTier1に対して排出量の算定・提供や、製造電力の再エネ化を要請する動きが広がっています。ただし強制ではなく、段階的な目標設定・能力構築支援と組み合わせるのが通例です。Tier2以降には直接の取引関係がないため、Tier1を通じて上流へ働きかけるカスケード型の設計が現実的とされます。",
  },
  {
    question: "非化石証書とコーポレートPPAはどう使い分けますか？",
    answer:
      "非化石証書は購入電力に再エネ・非化石の価値を付与する調達手段で、比較的柔軟に量を調整しやすい傾向があります。コーポレートPPAは発電事業者との長期契約で再エネ電力を調達する枠組みで、長期の価格見通しや追加性の観点で選ばれることがあります。いずれも由来・トラッキング・二重計上防止などの要件確認が前提で、目的や規模に応じて組み合わせる考え方が一般的です。断定的な優劣はありません。",
  },
  {
    question: "SBTやCDPではScope3はどう扱われますか？",
    answer:
      "SBT（科学的根拠に基づく目標）では、Scope3が排出全体の一定割合以上を占める場合にScope3目標の設定が求められる整理があり、サプライヤーエンゲージメント目標が用いられる例もあります。CDP（気候変動質問書）ではScope3の算定状況やサプライヤーへの働きかけが評価対象に含まれます。具体的な基準・しきい値は各枠組みの公式ガイダンスで最新版を確認してください。",
  },
  {
    question: "再エネ賦課金はScope3に関係しますか？",
    answer:
      "再エネ賦課金は電気料金に上乗せされる政策コスト（2026年度は4.18円/kWh・確定）であり、Scope算定上の排出量そのものとは別の概念です。賦課金は排出量を減らす仕組みではなく費用負担です。ただし電力コスト全体の水準には影響するため、再エネ調達の費用対効果を検討する際には、排出量の削減と電気料金コストの両面を切り分けて見る必要があります。",
  },
];

const sourcesItems = [
  {
    name: "経済産業省 資源エネルギー庁（省エネポータルサイト）",
    url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/",
  },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  {
    name: "環境省 グリーン・バリューチェーンプラットフォーム（Scope3算定）",
    url: "https://www.env.go.jp/",
  },
  { name: "GHG Protocol（温室効果ガスプロトコル 公式）", url: "https://ghgprotocol.org/" },
  { name: "SBTi（Science Based Targets initiative 公式）", url: "https://sciencebasedtargets.org/" },
  { name: "CDP（公式）", url: "https://www.cdp.net/" },
  { name: "RE100（公式）", url: "https://www.there100.org/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function Scope3SupplyChainRenewableProcurementPage() {
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
          {
            name: "脱炭素・GX対応",
            url: "https://simulator.eic-jp.org/articles/decarbonization",
          },
          { name: "Scope3・サプライチェーン再エネ調達の実務ガイド" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">
            ホーム
          </Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">
            解説ページ一覧
          </Link>
          <span className="px-2">›</span>
          <Link
            href="/articles/decarbonization"
            className="underline-offset-2 hover:underline"
          >
            脱炭素・GX対応
          </Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">
            Scope3・サプライチェーン再エネ調達の実務ガイド
          </span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide">
          <PrintButton />
        </div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Scope3・サプライチェーン再エネ調達の実務ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            Scope3は、原材料調達・物流・製品の使用・廃棄・投資など、自社の外側にあるサプライチェーン全体の間接排出です。近年は大手企業がScope3削減を進め、その要請が取引先へ連鎖するかたちで、中堅・中小企業にも算定と再エネ電力調達の準備が求められつつあります。本ページでは、Scope3の全体像とGHGプロトコルに沿った算定の考え方、サプライヤーへの一次データ要請、再エネ電力の調達手段までを実務目線で整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            <strong>読み分け：</strong>自社が購入した電力・熱・蒸気の使用に伴う間接排出（＝購入電力の会計）である <strong>Scope2</strong> は、既存の{" "}
            <Link
              href="/scope2-electricity-accounting"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              Scope2（電力排出量）の算定と報告ガイド
            </Link>{" "}
            で扱います。本ページは <strong>Scope3</strong>（サプライチェーン全体の間接排出）と、その削減に向けた<strong>再エネ調達</strong>を分離して解説します。全体像は{" "}
            <Link
              href="/corporate-decarbonization-overview"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              企業の脱炭素の全体像
            </Link>{" "}
            も参照してください。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">
              このページでわかること
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>Scope3とは何か（Scope1・2との違いと本ページの読み分け）</li>
              <li>GHGプロトコルによるScope3の15カテゴリ（上流8・下流7）の全体像</li>
              <li>なぜ電力の再エネ調達がScope3に効くのか（Cat.1・Cat.11・Cat.3）</li>
              <li>算定の考え方（支出／物量／サプライヤー固有＝一次データ）</li>
              <li>Tier1・Tier2サプライヤーへの一次データ・再エネ要請の進め方</li>
              <li>再エネ調達手段（非化石証書・コーポレートPPA・RE100）の整理</li>
              <li>SBT・CDPとの接続、代表シナリオ3件（5年累計）と実務チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          {/* 1 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Scope3とは — サプライチェーン全体の間接排出
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              温室効果ガスの排出量は、GHGプロトコルの考え方に沿って3つのスコープに分けて整理されます。Scope1は自社が直接排出する分（燃料の燃焼など）、Scope2は購入した電力・熱・蒸気の使用に伴う間接排出、そしてScope3はそれ以外の、サプライチェーン全体で生じる間接排出です。原材料の調達から、物流、販売した製品の使用・廃棄、さらには投資先の活動まで、自社の事業活動に関連して他社で発生する排出が幅広く含まれます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多くの企業では、Scope1・2よりもScope3の方がはるかに大きな排出量を占めるとされます。そのため、脱炭素の実効性を高めるうえでScope3の把握と削減は避けて通れないテーマになりつつあります。ただしScope3は自社の外側で発生するため、自社だけでは削減が完結せず、サプライヤーや顧客との協働が前提になる点が、Scope1・2との大きな違いです。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              購入電力の会計にあたるScope2の詳細は{" "}
              <Link
                href="/scope2-electricity-accounting"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                Scope2の算定と報告ガイド
              </Link>
              に、経営目線での責任分担は{" "}
              <Link
                href="/scope2-reduction-cfo-responsibility"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                Scope2削減とCFOの責任
              </Link>
              に整理があります。本ページはScope3側に焦点を当てます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 2 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Scope3の15カテゴリの全体像（上流8・下流7）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              GHGプロトコルでは、Scope3を15のカテゴリに分類しています。大きく、自社に入ってくる側の「上流」8カテゴリと、自社から出ていく側の「下流」7カテゴリに分かれます。すべてのカテゴリが全企業に関係するわけではなく、業種やビジネスモデルによって重要なカテゴリは異なります。まずは全カテゴリを俯瞰し、自社に該当する範囲を確認するのが出発点です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {scope3Categories.map((c) => (
                <div
                  key={c.no}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="mr-2 inline-block rounded bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800">
                      {c.stream}
                    </span>
                    カテゴリ{c.no}：{c.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{c.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              上流の中でもカテゴリ1（購入した製品・サービス）は、多くの企業でScope3全体の最大割合を占めやすいカテゴリとされます。下流ではカテゴリ11（販売した製品の使用）が、電力を消費する製品を扱う企業で特に大きくなりやすいのが特徴です。どのカテゴリが大きいかは実際に概算してみないと分からないため、次章以降で算定の考え方を整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 3 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ電力調達がScope3に効くのか（Cat.1・Cat.11・Cat.3）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              「電力の再エネ調達」というとScope2の話に見えますが、視点を変えるとScope3の複数カテゴリに効きます。自社が使う購入電力そのものはScope2ですが、<strong>サプライヤーが製造工程で使う電力</strong>を再エネ化すれば、それは自社にとってのカテゴリ1（購入した製品・サービス）の排出を下げることになります。つまり、サプライヤーの電力調達は自社のScope3に直結します。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              下流では、電力を消費する製品を販売している場合、その<strong>使用段階</strong>がカテゴリ11に該当します。製品の省エネ性能向上や、使われる電力の再エネ化を促す情報提供が、下流の排出低減につながる余地があります。さらに、購入電力・燃料の採掘や送配電ロスなどエネルギーの「上流」はカテゴリ3に整理されます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              こうした関係を踏まえると、再エネ電力の調達は「誰の・どの工程の電力を再エネ化するか」でScope2にもScope3にも効く打ち手になります。市場基準（マーケット基準）での算定の考え方は{" "}
              <Link
                href="/ghg-protocol-scope2-market-based"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                GHGプロトコルのマーケット基準
              </Link>
              に整理があります。
            </p>
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                補足：電気料金の「政策コスト」と排出量は別物
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                再エネ賦課金は電気料金に上乗せされる政策コストで、排出量の算定とは別の概念です。賦課金の単価は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と推移しており、電力コスト全体の水準には影響しますが、これ自体はScope算定上の排出量を増減させるものではありません。費用対効果の検討では、排出量の削減と電気料金コストを切り分けて見ることが重要です。制度動向は{" "}
                <Link
                  href="/gx-ets-impact-business-electricity"
                  className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                >
                  GX-ETSが法人電気料金に与える影響
                </Link>
                も参照。
              </p>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 4 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              GHGプロトコルによる算定の考え方（支出・物量・一次データ）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Scope3の算定は、精度とデータ入手性のトレードオフの中で、いくつかのアプローチを使い分けるのが一般的です。初期は概算で全体像を掴み、重要なカテゴリ・サプライヤーから徐々に精度の高いデータへ移行していく、という段階的な進め方が取られます。以下は代表的なアプローチの整理です（具体的な原単位や係数の値は用途・出典で異なるため、本ページでは値を示しません）。
            </p>
            <div className="mt-4 space-y-3">
              {calcApproaches.map((a) => (
                <div
                  key={a.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{a.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{a.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ調達の努力を数値に反映させたい場合、最終的にはサプライヤー固有の一次データへ寄せていく必要があります。支出ベースの概算のままでは、サプライヤーがどれだけ再エネ化しても自社のScope3の数値は動きにくいためです。この点は、算定を「開示のための作業」ではなく「削減マネジメント」として設計するうえで重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 5 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              一次データ収集の実務 — スクリーニングから検証まで
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一次データの収集は、いきなり全サプライヤーへ一律に依頼するのではなく、優先順位を付けて段階的に広げるのが現実的です。データ様式や算定境界を揃えないと集計できないため、依頼の前に「何を・どの単位で・どの期間について」求めるのかを定義しておくことが要になります。代表的な流れを整理します。
            </p>
            <div className="mt-4 space-y-3">
              {primaryDataSteps.map((s, i) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">
                    <span className="mr-2 inline-block rounded-full bg-sky-600 px-2 py-0.5 text-xs font-semibold text-white">
                      STEP {i + 1}
                    </span>
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{s.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ調達分を一次データとして受け取る際は、証書・契約・トラッキング情報といった裏付けを添えてもらうことが重要です。裏付けがないと、第三者検証や開示の場面で再エネ属性を主張できないためです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 6 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Tier1・Tier2サプライヤーへの要請の進め方
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              サプライヤーへの働きかけは、直接取引のあるTier1から始め、その先のTier2以降へ波及させるのが基本形です。Tier2以降には直接の取引関係がないため、Tier1を経由して上流へデータ提供や再エネ化を促す「カスケード」型の設計が現実的とされます。要請は一方的な負担転嫁にならないよう、支援と目標設定をセットにするのが通例です。
            </p>
            <div className="mt-4 space-y-3">
              {tierRequests.map((t) => (
                <div
                  key={t.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{t.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{t.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              調達・購買と経営・サステナビリティ部門をまたいだ全社的な設計が必要になります。サプライチェーン全体でのカーボンニュートラル戦略の論点は{" "}
              <Link
                href="/cfo-supply-chain-cn-strategy"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                CFOが主導するサプライチェーンCN戦略
              </Link>
              に整理があります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 7 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ電力の調達手段（非化石証書・PPA・RE100）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              サプライチェーンの排出を下げるための再エネ電力の調達には、複数の手段があります。手続きの軽さ、量の調整のしやすさ、価格見通し、追加性（新たな再エネ電源の増加につながるか）などの観点で特徴が異なり、目的や規模に応じて組み合わせるのが一般的です。いずれの手段も、再エネ属性の由来・トラッキング・二重計上防止といった要件の確認が前提になります。
            </p>
            <div className="mt-4 space-y-3">
              {procurementMeans.map((m) => (
                <div
                  key={m.name}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{m.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別手段の詳細は、{" "}
              <Link
                href="/non-fossil-certificate-types-purchase"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                非化石証書の種類と購入
              </Link>
              、{" "}
              <Link
                href="/onsite-ppa-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                オンサイトPPAの仕組み
              </Link>
              、{" "}
              <Link
                href="/re100-overview-for-business"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                法人向けRE100の概要
              </Link>
              を参照してください。どれか一つが常に最適というわけではなく、拠点特性・調達量・期間で使い分けるのが実務的です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 8 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              SBT・CDPとの接続 — 目標設定と情報開示
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Scope3の算定と再エネ調達は、それ単体で完結するものではなく、目標設定や情報開示の枠組みと接続して初めて意味を持ちます。SBTのような削減目標、CDPのような開示、そして取引先からの要請という3つの経路が、Scope3への取り組みを後押しする主な力になっています。
            </p>
            <div className="mt-4 space-y-3">
              {disclosureLinks.map((d) => (
                <div
                  key={d.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{d.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{d.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              目標認定・開示の実務は、{" "}
              <Link
                href="/sbt-certification-electricity-plan"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                SBT認定と電力プランの関係
              </Link>
              、{" "}
              <Link
                href="/cdp-questionnaire-electricity-response"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                CDP質問書への電力面の回答
              </Link>
              に整理があります。基準・しきい値は各枠組みの公式ガイダンスで最新版の確認が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 9 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              代表シナリオ3件（費用の例示・5年累計を電卓検算）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              サプライチェーンの再エネ化やデータ収集にどの程度の費用がかかるのか、桁感をつかむための例示です。以下は<strong>仮に置いた単価・数量</strong>による試算であり、実際の単価は市場・証書種別・契約条件で変動します。排出量の削減幅（t-CO2）は排出係数によって変わるため、ここでは費用の桁感のみを示し、削減量の断定は行いません。
            </p>
            <div className="mt-4 space-y-4">
              {scenarios.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    <span className="font-semibold text-slate-700">前提：</span>
                    {s.setup}
                  </p>
                  <p className="mt-2 rounded bg-white px-3 py-2 font-mono text-xs leading-6 text-slate-800 sm:text-sm">
                    {s.formula}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-emerald-700">
                    <span className="font-semibold">試算結果：</span>
                    {s.result}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 上記はいずれも代表例です。実際の費用・効果は、対象電力量・単価・契約条件・拠点特性によって大きく変動します。数値は一般的な桁感を示す例示にとどめ、特定の結果を保証するものではありません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の使用電力量をベースにした概算は{" "}
              <Link
                href="/industry-electricity-calculator"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                業種別電気料金シミュレーター
              </Link>
              や{" "}
              <Link
                href="/compare"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                料金メニュー比較・診断
              </Link>
              でも試せます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 10 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Scope3・再エネ調達でよくある落とし穴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              算定・調達を進める過程では、いくつかの典型的なつまずきがあります。事前に把握しておくことで、手戻りや開示時のトラブルを避けやすくなります。
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {pitfalls.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特に「電気料金の政策コスト（賦課金など）」と「Scope算定上の排出量」の混同は起こりやすい誤りです。賦課金は費用負担であって排出量ではない、という切り分けを社内で共有しておくと、費用対効果の議論が整理しやすくなります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          {/* 11 */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              実務チェックリスト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              Scope3の算定と再エネ調達を進める前に、以下の項目で自社の準備状況を点検してください。未着手の項目があれば、そこが次の一手の候補になります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-07-21"
            />
            <GlossaryLinks
              currentSlug="scope3-supply-chain-renewable-procurement"
              terms={["非化石証書", "再エネ賦課金", "電気料金の内訳", "燃料費調整額"]}
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/scope2-electricity-accounting",
                title: "Scope2（電力排出量）の算定と報告ガイド",
                description: "購入電力の会計＝Scope2の算定・報告の考え方。",
              },
              {
                href: "/corporate-decarbonization-overview",
                title: "企業の脱炭素の全体像",
                description: "Scope1・2・3と再エネ調達の位置づけを俯瞰。",
              },
              {
                href: "/cfo-supply-chain-cn-strategy",
                title: "CFOが主導するサプライチェーンCN戦略",
                description: "経営目線でのScope3・再エネ調達の意思決定。",
              },
              {
                href: "/non-fossil-certificate-types-purchase",
                title: "非化石証書の種類と購入",
                description: "再エネ電力の調達手段としての非化石証書。",
              },
              {
                href: "/onsite-ppa-explained",
                title: "オンサイトPPAの仕組み",
                description: "自社敷地での再エネ電力調達の枠組み。",
              },
              {
                href: "/re100-overview-for-business",
                title: "法人向けRE100の概要",
                description: "使用電力100%再エネの目標枠組みの基本。",
              },
              {
                href: "/sbt-certification-electricity-plan",
                title: "SBT認定と電力プランの関係",
                description: "削減目標と電力調達・プラン選択の接続。",
              },
              {
                href: "/cdp-questionnaire-electricity-response",
                title: "CDP質問書への電力面の回答",
                description: "開示で問われる電力・Scope3の論点。",
              },
              {
                href: "/articles/decarbonization",
                title: "脱炭素・GX対応",
                description: "このカテゴリの記事一覧を見る。",
              },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="次にすること"
            description="Scope3と再エネ調達の全体像を掴んだら、自社の使用電力量をベースに費用感を試算してみましょう。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              {
                href: "/articles/decarbonization",
                label: "脱炭素・GX対応の他の記事を読む",
              },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="Scope3・再エネ調達の進め方、専門家に相談しませんか？"
            description="サプライチェーンの排出算定や再エネ電力の調達手段は、業種・規模・取引構造によって最適解が変わります。エネルギー情報センターは中立的な立場で、法人・自治体の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
