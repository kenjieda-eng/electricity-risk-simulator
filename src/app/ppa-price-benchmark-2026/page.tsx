import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準・電源別/契約期間別/事業者別ベンチマーク";
const pageDescription =
  "2026年時点のコーポレートPPA単価相場(円/kWh)を電源別・契約期間別・事業者規模別に体系整理。価格構成要素・交渉ポイント、Before/After事例、3つの固有データ表、FAQ8件、出典付きで網羅的に解説します。";
const pageUrl = "https://simulator.eic-jp.org/ppa-price-benchmark-2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "PPA価格 相場",
    "コーポレートPPA 単価",
    "PPA 円/kWh",
    "オフサイトPPA 価格",
    "バーチャルPPA 価格",
    "PPA 交渉",
    "RE100 調達コスト",
    "2026 PPA",
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
    images: [{ url: "/api/og/corporate-ppa", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/corporate-ppa"],
  },
};

const ppaPriceBySource = [
  {
    label: "オンサイト太陽光PPA(屋根設置・1〜5MW、20年)",
    detail:
      "12〜18円/kWh(環境価値込み)。屋根設置で託送料金が不要のため低水準。立地・規模(MWスケールメリット)・屋根構造で変動。10MW以上の大規模オンサイトでは11〜14円/kWh水準も。第三者所有モデル(TPO)で初期投資ゼロ。",
  },
  {
    label: "オフサイト太陽光PPA(物理供給・10〜100MW、20年)",
    detail:
      "14〜22円/kWh(託送料金・環境価値込み)。託送料金4〜5円/kWhが価格に占めるため、オンサイトより高水準。発電所立地(東北・九州・四国の高日射エリア)で安価、需要地と発電地が近接(エリア内)ほど系統制約低い。",
  },
  {
    label: "バーチャル太陽光PPA(差金決済・10〜100MW、15年)",
    detail:
      "10〜16円/kWh(差金決済価格)。物理供給を伴わないためコスト構造シンプル。需要家本体は別途小売契約を維持し、市場価格との差額をPPAでヘッジ。会計処理(デリバティブ・ヘッジ会計)の検討が必須。",
  },
  {
    label: "オフサイト風力PPA(物理供給・20〜200MW、20年)",
    detail:
      "12〜19円/kWh(託送・需給調整費・環境価値込み)。陸上風力で東北・北海道立地が中心。設備利用率20〜30%で年次変動大きく、需給管理費5〜10%が上乗せ。洋上風力PPAは2025年以降本格商業化フェーズで、現時点では18〜25円/kWh水準。",
  },
  {
    label: "バイオマスPPA(物理供給・5〜50MW、15〜20年)",
    detail:
      "16〜24円/kWh。燃料費(木質ペレット・パームヤシ殻・PKS等)が単価変動要因のため、燃料費連動条項を含む契約が中心。CO2フリー化・地域貢献の観点で選択肢となる。安定電源(設備利用率70〜80%)である点が太陽光・風力との差別化。",
  },
  {
    label: "再エネアグリゲーションPPA(複合電源・MW級、10〜20年)",
    detail:
      "13〜18円/kWh。太陽光・風力・水力・バイオマスを組合せたアグリゲーション電源。安定供給と環境価値の両立で需要家にとって扱いやすい。中堅事業者(年間使用量500〜2,000万kWh)向けに2024年以降増加中。",
  },
];

const ppaPriceByPeriod = [
  {
    label: "10年契約(短期・高単価)",
    detail:
      "想定単価+2〜4円/kWh(20年比)。発電事業者の資金回収期間が短いため単価上昇。需要見通しに不確実性のある事業者・契約期間長期化に懸念がある経営層向け。中途解約リスク低下。再エネ証書だけ20年取引、電力は10年で組合せる手法もあり。",
  },
  {
    label: "15年契約(中期・標準的選択)",
    detail:
      "想定単価+0.5〜1.5円/kWh(20年比)。プロジェクトファイナンス組成が可能な期間で、発電事業者・需要家双方の合理的な折衷点。日本市場では2023年以降の主流選択。需要変動リスクと単価のバランスが良い。",
  },
  {
    label: "20年契約(長期・低単価)",
    detail:
      "ベース単価。発電事業者のIRR要求(7〜10%)に合致し最低単価が実現。RE100宣言企業・大規模需要家向け。需要変動リスクが累積する点に注意。第三者譲渡・契約量調整条項の充実が必須。",
  },
  {
    label: "25年契約(超長期)",
    detail:
      "想定単価-0.5〜1.0円/kWh(20年比)。一部の大規模案件で見られる。設備の物理寿命(太陽光パネル25〜30年)と整合。需要変動リスクが極めて大きい点に注意。米国・欧州ではPPA市場の主流だが、日本では選択肢は限定的。",
  },
];

const ppaPriceByScale = [
  {
    label: "10〜30MW案件(中規模)",
    detail:
      "想定単価+1〜3円/kWh(50MW超比)。プロジェクトファイナンス組成は可能だが、規模の経済効果が限定的。中堅企業・複数拠点アグリゲーション向け。発電事業者の選択肢が拡大中で、価格競争による単価低下傾向。",
  },
  {
    label: "50〜100MW案件(大規模・標準)",
    detail:
      "ベース単価。日本のPPA市場の主流規模。プロジェクトファイナンス・税効果(税額控除・グリーン税制)・スケールメリットが効きやすい。大企業・複数事業所合算需要向け。",
  },
  {
    label: "100MW超案件(超大規模)",
    detail:
      "想定単価-0.5〜1.5円/kWh(100MW以下比)。海外IPP・国内大手電力子会社が主体。需要家側もRE100宣言の大手企業(製造業・データセンター)。発電所立地の確保と系統連系が課題。",
  },
];

const ppaPriceComposition = [
  {
    label: "発電コスト(設備費・O&M・金利)",
    detail:
      "全体の50〜65%。太陽光パネル価格は2010年比で90%超下落、2022〜2024年は中国製パネル過剰供給で更に下落。一方、O&M(運転保守)・パワコン交換・モニタリング費用は安定的に発生。プロジェクトIRR要求(7〜10%)に基づき長期回収する。",
  },
  {
    label: "託送料金(オフサイト型)",
    detail:
      "全体の15〜25%(オフサイトのみ)。一般送配電事業者(東電PG・関電送配電・東北電力NW等)の託送料金が4〜5円/kWh。レベニューキャップ制度(5年規制期間)で改定される。自己託送制度活用で一部減免可能だが、需要地と発電地のエリア整合等の条件あり。",
  },
  {
    label: "需給調整費(インバランス料金)",
    detail:
      "全体の5〜10%。太陽光・風力の発電量予測誤差を補填するコスト。アグリゲーター・新電力経由でバランシング。風力では太陽光より高水準(年次変動大)。バーチャルPPAでは物理供給を伴わないため対象外。",
  },
  {
    label: "環境価値(非化石証書)",
    detail:
      "全体の5〜15%。非化石証書(再エネ指定)が0.4〜1.3円/kWh。RE100/SBT報告での使用権を需要家が獲得。価格分離(electricity-only price + REC price)契約とすることで、将来のRE100戦略変更にも柔軟対応可能。",
  },
  {
    label: "事業者利益・リスクプレミアム",
    detail:
      "全体の10〜20%。発電事業者の利益、開発リスク・運用リスク・カントリーリスクのプレミアム。事業者の信用力、契約期間、為替リスク、制度改正リスクで変動。需要家側からの透明性要求(コスト構造開示)が交渉力。",
  },
  {
    label: "その他諸経費(保険・税金・管理費)",
    detail:
      "全体の5〜8%。設備保険・賠償責任保険・固定資産税・事業所税・契約管理費用。長期契約では税制改正の影響も累積。",
  },
];

const ppaContractTypeComparison = [
  {
    label: "完全固定価格型 — シンプル・予測容易",
    detail:
      "契約期間中の単価が一定。会計・予算管理がシンプル。市場下落時に割高になるリスクあり。需要家のリスク許容度が低い場合・予算統制重視の事業者向け。発電事業者リスクプレミアム0.5〜1円/kWhが上乗せ。日本の標準形態。",
  },
  {
    label: "インフレ連動型 — CPI連動",
    detail:
      "消費者物価指数(CPI)に連動した年率0.5〜1.5%の単価上昇。発電事業者の運用コスト上昇に対応。需要家にとっては毎年の単価上昇が見込まれる予算組み。米国市場では標準形態だが、日本ではまだ少数派。",
  },
  {
    label: "市場連動+カラー(上下限)型",
    detail:
      "JEPX市場価格に連動し、上限(キャップ)・下限(フロア)を設定。市場下落時の追加メリットと上昇時のリスク両方を限定。バーチャルPPAで多用される構造。会計上の見方が複雑。",
  },
  {
    label: "差金決済(CfD)型 — バーチャルPPA",
    detail:
      "契約価格と市場価格の差額のみ精算する物理供給なしのスキーム。会計上はデリバティブ取引、ヘッジ会計適用要件あり。電力契約は別途維持(従来の小売契約継続)、PPAは純粋なヘッジ機能。CDP/RE100報告では非化石証書経由で再エネ実績計上。",
  },
];

const negotiationTips = [
  {
    label: "コスト構造の透明化要求",
    detail:
      "発電事業者に対しPPA単価のコスト構成(発電・託送・需給管理・環境価値・利益)の開示を求める。透明性が高い事業者は信頼性高く、交渉余地も明確化。事業者によって開示意欲・粒度差が大きいため、複数事業者比較の判断軸の1つ。",
  },
  {
    label: "契約期間・契約量の最適化",
    detail:
      "20年→15年で単価+0.5〜1.5円/kWh、需要変動リスク2〜3割減。契約量は年間消費量の50〜70%に抑えると需要悲観時のオフテイク超過コストを軽減。複数発電所組合せでリスク分散も交渉余地。",
  },
  {
    label: "環境価値(REC)の分離価格化",
    detail:
      "電力単価(electricity-only price)と環境価値単価(REC price)を分離した契約構造を交渉。RE100戦略変更時(海外子会社移転・統廃合)に環境価値を柔軟運用可能。日本では2025年以降この構造が増加傾向。",
  },
  {
    label: "中途解約・第三者譲渡条項の交渉",
    detail:
      "中途解約料の上限(残契約年数×単価×想定電力量の50%等)、第三者譲渡(M&A・カーブアウト時の承継権)、契約満了時の延長権を明示。事業者にとってのリスクと需要家にとっての柔軟性の交換交渉。",
  },
  {
    label: "支払条件・前払金・保証金",
    detail:
      "通常は月次後払いだが、需要家の信用力に応じて前払金・保証金を求められるケース。逆に需要家の交渉力が強い場合、四半期払・年間1回払等の柔軟性確保。プロジェクトファイナンス組成案件では支払条件の柔軟性は限定的。",
  },
  {
    label: "発電量保証・補償条項",
    detail:
      "P50(中央値)/P75/P90の発電量保証ベースを明示。下振れ時の補償(代替調達・単価減額・無償追加)を契約書で明文化。発電事業者の責任範囲を不明確にしないことが、長期契約での失敗回避の基本。",
  },
];

const ppaIntermediaries = [
  {
    label: "総合エネルギー事業者(伊藤忠・三井物産・住友商事・丸紅等)",
    detail:
      "総合商社・エネルギー専門商社が発電事業者と需要家を仲介。大規模案件(50MW超)・複数電源組合せ・グローバル展開に強み。アグリゲーション・複数需要家組合せにも対応。",
  },
  {
    label: "電力会社・新電力(東京電力EP・関西電力・東京ガス・ENEOSでんき等)",
    detail:
      "既存電力小売事業者がPPA仲介に参入。既存契約との一体提案・地域実績・運用ノウハウに強み。電力契約とPPA契約を一括設計可能なメリット。",
  },
  {
    label: "再エネ専業事業者(SBエナジー・自然電力・グローバルエンジニアリング・コスモエネルギー等)",
    detail:
      "再エネ特化型開発事業者・PPA事業者。RE100対応・脱炭素ブランディングに強み。需要家との中長期パートナーシップ重視。アグリゲーション・複数電源対応も拡大中。",
  },
  {
    label: "外資系IPP・グローバル事業者(JERA・Vena Energy・Mitsui Renewables等)",
    detail:
      "海外IPP事業者・外資系再エネ事業者。100MW超の超大規模案件に強み。日本市場参入は2020年代から本格化。技術力・資金力・グローバル運用ノウハウが武器。",
  },
  {
    label: "コンサルティング型仲介(国内系・外資系)",
    detail:
      "PwC・KPMG・デロイト・アクセンチュア等のコンサルティングファームが、需要家の代理人として複数事業者比較・契約交渉支援。需要家側に寄り添う第三者性が魅力。手数料水準・成功報酬を要交渉。",
  },
];

const caseStudies = [
  {
    title: "ケース1: 食品メーカー(関東、年間850万kWh、オフサイト太陽光PPA 5MW・15年)",
    before:
      "Before: 2023年時点で既存契約は東京電力EP高圧契約25.2円/kWh(燃料費調整額含む)。RE100対応とコスト削減のため、複数仲介事業者から相見積取得。商社A: 17.8円/kWh、新電力B: 18.3円/kWh、再エネ専業C: 17.2円/kWh。",
    after:
      "After: 再エネ専業C事業者と15年契約締結、最終単価17.2円/kWh(環境価値込み)。需要家側で会計士・税理士確認、契約量を年間消費の60%(510万kWh)に抑える。残り40%は新電力固定プラン継続。",
    result:
      "Result: PPA分での年間コスト削減 510万kWh×(25.2-17.2)= 約4,080万円/年。15年累計約6.1億円のヘッジ効果。RE100カバー率60%達成。残り40%は他PPAや非化石証書購入で対応予定。",
  },
  {
    title: "ケース2: データセンター事業者(関西、年間6,500万kWh、バーチャル太陽光PPA 50MW・15年)",
    before:
      "Before: 2024年時点で既存契約は関西電力エナジーソリューション特別高圧契約25.5円/kWh(燃料費調整額含む)。AI需要拡大で電力需要急増中、価格ヘッジが急務。",
    after:
      "After: 商社系仲介A経由でバーチャルPPA 50MW・15年・14.5円/kWh(差金決済型)で契約。年間想定発電量5,000万kWh。電力本体は関西電力既存契約継続。会計はヘッジ会計適用、四半期決算で時価評価開示。",
    result:
      "Result: PPA経由での実質ヘッジ効果 5,000万kWh×(25.5-14.5)= 約5.5億円/年(市場価格変動次第)。需要急増分はPPA経由で安価調達、本体契約と組合せた平均単価約20円/kWh水準を維持。CDP評価向上。",
  },
  {
    title: "ケース3: 中堅製造業(東北、年間280万kWh、オンサイト屋根PPA 1.2MW・20年)",
    before:
      "Before: 2025年時点で東北電力高圧契約24.5円/kWh。屋根面積2,500m²の半分活用で1.2MW太陽光設置検討。自己投資(投資1.4億円、SII補助50%活用)とPPA(TPO・初期投資ゼロ)の比較検討。",
    after:
      "After: PPA(TPO型)・20年・13.5円/kWhを選択。屋根設置施工完了、初期投資ゼロ。年間発電量約132万kWh(年間消費の47%カバー)。残り余剰時間帯は通常契約。",
    result:
      "Result: 年間コスト削減 132万kWh×(24.5-13.5)= 約1,450万円/年。20年累計約2.9億円。初期投資ゼロで即効果、屋根改修条項を契約書に明示済み。中堅企業の脱炭素・コスト両立モデル。",
  },
];

const checklistItems = [
  "複数仲介事業者(3〜5社)から相見積取得し単価比較したか",
  "コスト構造(発電・託送・需給調整・環境価値・利益)の開示を要求したか",
  "契約期間別の単価差(10年/15年/20年/25年)を比較検討したか",
  "需要悲観シナリオでのオフテイク超過リスクを試算したか",
  "発電量保証(P50/P75/P90)と下振れ補償条項を確認したか",
  "託送料金改定・再エネ賦課金改正のパス・スルー条項を確認したか",
  "環境価値(REC)の分離価格化・帰属を契約書に明示したか",
  "中途解約・第三者譲渡条項を契約書に明示したか",
  "事業者の信用力(親会社格付・PF組成可否・保険付保)を確認したか",
  "バーチャルPPAの場合、会計処理(ヘッジ会計)を税理士・監査法人に確認したか",
];

const faqItems = [
  {
    question: "2026年時点のPPA単価相場は?",
    answer:
      "電源・契約形態によって異なります。オンサイト太陽光12〜18円/kWh、オフサイト太陽光14〜22円/kWh、バーチャル太陽光10〜16円/kWh、オフサイト風力12〜19円/kWh、バイオマス16〜24円/kWh(いずれも環境価値込み)が標準レンジです。通常の法人小売(高圧25〜30円/kWh)より5〜10円安いケースが多数ですが、長期コミットメント(15〜20年)が前提です。"
  },
  {
    question: "PPA単価が小売電気料金より高くなることはありますか?",
    answer:
      "あり得ます。①小売電気料金が市場下落で急減(JEPXシステムプライス年平均8〜10円/kWh水準への低下)、②PPA電源がオフサイト型・遠隔地で託送料金高、③発電量下振れで実効単価上昇、等のケース。20年スパンで見れば市場の上下動を平均化するため、ヘッジ機能としては有効。シミュレーションで自社条件の試算が重要です。"
  },
  {
    question: "PPA契約と通常の再エネメニュー契約はどちらが安い?",
    answer:
      "需要家規模・期間で異なります。年間500万kWh以上・15年以上契約可能であれば、PPAは通常再エネメニューより1〜5円/kWh安いケース多数。年間100〜500万kWh規模では再エネメニューの方が柔軟。10年以下のコミットメントしかできない場合は再エネメニューが現実的。アグリゲーションPPAなら中堅事業者(500〜2,000万kWh)でもPPA合理性が出やすくなっています。"
  },
  {
    question: "バーチャルPPAと物理PPAの単価差は?",
    answer:
      "バーチャルPPAは物理供給を伴わないため、託送料金・需給調整費が不要で、物理PPAより2〜4円/kWh安い水準です(同じ電源・期間で14〜16円 vs 17〜20円)。一方、需要家本体は別途小売契約を維持する必要があり、トータルコストでの比較が必要。バーチャルPPAは会計処理(デリバティブ・ヘッジ会計)が論点となるため、税理士・監査法人との事前協議が必須です。"
  },
  {
    question: "PPA契約期間20年は長すぎませんか?",
    answer:
      "需要見通しの確度次第です。RE100宣言の大手企業・継続事業の安定需要(オフィスビル等)では20年が合理的、需要変動リスクの大きい業界(製造業の海外移転リスク)では15年・10年が現実的。10年契約は単価が+2〜4円/kWh高くなりますが、リスク2〜3割減で経営合理性が出やすいケース多数。長期契約の落とし穴は別記事で詳述しています。"
  },
  {
    question: "PPA価格の交渉余地はどこにありますか?",
    answer:
      "①コスト構造透明化要求、②契約期間・契約量の最適化(短期化・小規模化で柔軟性)、③環境価値(REC)分離価格化、④中途解約・第三者譲渡条項、⑤発電量保証と補償条項、⑥支払条件、の6軸が主要交渉余地です。需要家側が複数事業者比較を提示することで、単価0.5〜1.5円/kWhの圧縮余地が出るケース多数です。"
  },
  {
    question: "再エネ証書(非化石証書)購入とPPAはどちらがコスト効率良い?",
    answer:
      "短期(1〜3年)のRE100対応では非化石証書購入が低コスト(0.4〜1.3円/kWh)。長期(15〜20年)のヘッジ機能も含むRE100対応ではPPAが効果的。両者は併用可能で、RE100目標達成にPPA(50〜70%)+非化石証書(30〜50%)の組合せが現実的なケース多数。バーチャルPPAは両者の中間的位置付け(電力供給は通常契約、環境価値はPPA経由)。"
  },
  {
    question: "中小企業でもPPA契約は可能ですか?",
    answer:
      "可能です。①オンサイト屋根PPA(TPO型)で初期投資ゼロ・10年契約から、②アグリゲーションPPA(複数企業組合せ)で年間100〜500万kWh規模でも参加可能、③小規模バーチャルPPA(5MW以下)で1MW相当の購入から、等のメニューが増えています。中小企業向け仲介事業者・補助金活用で実質単価10〜15円/kWhが実現するケースもあります。"
  },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁 「コーポレートPPA推進ガイドブック」", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット(電力単価・スポット価格・新電力比較)", url: "https://pps-net.org/unit" },
  { name: "RE100 公式サイト(年次レポート・参加企業一覧)", url: "https://www.there100.org/" },
  { name: "IEA (International Energy Agency)", url: "https://www.iea.org/" },
  { name: "環境省 脱炭素経営支援・再エネ調達ガイドブック", url: "https://www.env.go.jp/" },
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        dateModified="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "コーポレートPPA", url: "https://simulator.eic-jp.org/articles/corporate-ppa" },
          { name: "PPA価格の相場と交渉ポイント" },
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
          <span className="text-slate-800">PPA価格の相場と交渉ポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            PPA価格の相場と交渉ポイント｜2026年時点の円/kWh水準・電源別/契約期間別/事業者別ベンチマーク
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            コーポレートPPAの価格交渉では、電源別・契約期間別・規模別の相場感を持つことが交渉力の源泉です。本ページでは2026年時点の日本のPPA単価相場を電源別/契約期間別/事業者別に体系整理し、価格構成要素、6つの契約形態、交渉ポイント、Before/After事例3件、出典付き参考資料までを実務観点で網羅します。
          </p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>2026年時点の電源別PPA単価相場(オンサイト/オフサイト/バーチャル/風力/バイオマス/複合)</li>
              <li>契約期間別(10/15/20/25年)・規模別(中・大・超大)の単価差</li>
              <li>PPA単価のコスト構造6要素(発電・託送・需給管理・環境価値・利益・諸経費)</li>
              <li>契約形態4タイプ(固定・CPI連動・市場連動カラー・差金決済)の比較</li>
              <li>6軸の価格交渉ポイントとBefore/After事例3件</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">電源別PPA単価相場(2026年時点) — 6電源タイプの円/kWh水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              2026年時点の日本のコーポレートPPA単価を電源別に整理します。オンサイト/オフサイト/バーチャルの太陽光、風力、バイオマス、再エネアグリゲーションの6タイプで、それぞれの価格レンジと変動要因を解説します。
            </p>
            <div className="mt-4 space-y-3">
              {ppaPriceBySource.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 単価は2025年10月時点の代表案件を目安として整理(出典: 経産省コーポレートPPA推進ガイドブック・業界平均値から整理)。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電源タイプ別の詳細は{" "}
              <Link href="/corporate-ppa-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コーポレートPPAとは</Link>
              、自家消費型との比較は{" "}
              <Link href="/ppa-vs-self-consumption-solar" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPAと自家消費型太陽光の比較</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約期間別単価差 — 10/15/20/25年の円/kWh比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA契約は10〜25年の期間設定が可能ですが、期間長いほど単価が低下する一方、需要変動・制度変更リスクが累積します。契約期間別の単価差と経営判断ロジックを整理します。
            </p>
            <div className="mt-4 space-y-3">
              {ppaPriceByPeriod.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              長期契約の落とし穴は{" "}
              <Link href="/ppa-contract-pitfalls" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA契約の落とし穴</Link>
              、契約更新タイミングは{" "}
              <Link href="/contract-renewal-timing-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新タイミング診断</Link>
              で詳しく確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別単価差 — MW級別のベンチマーク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA案件は10MW〜100MW超までの規模で単価が大きく変動します。スケールメリット・プロジェクトファイナンス組成・税効果の活用可否で決まります。
            </p>
            <div className="mt-4 space-y-3">
              {ppaPriceByScale.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">PPA単価のコスト構造 — 6つの構成要素</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA単価は、発電コスト・託送料金・需給調整費・環境価値・事業者利益・諸経費の6要素で構成されます。コスト構造の透明化要求は、需要家側の交渉力の源泉です。
            </p>
            <div className="mt-4 space-y-3">
              {ppaPriceComposition.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              託送料金の動向は{" "}
              <Link href="/renewable-energy-surcharge" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金の仕組み</Link>
              、環境価値の詳細は{" "}
              <Link href="/non-fossil-certificates" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">非化石証書とは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約形態の比較 — 4タイプの特性</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA契約形態は、完全固定価格・インフレ連動・市場連動カラー・差金決済(CfD)の4タイプから選択します。会計処理・予算管理・リスク許容度で判断します。
            </p>
            <div className="mt-4 space-y-3">
              {ppaContractTypeComparison.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              バーチャルPPAの詳細は{" "}
              <Link href="/virtual-ppa-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">バーチャルPPAとは</Link>
              、固定vs市場連動の基本は{" "}
              <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動と固定プランの違い</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">価格交渉ポイント — 6軸の交渉余地</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA価格は契約締結前の交渉で0.5〜1.5円/kWh圧縮可能なケースが多数あります。コスト構造透明化・契約期間最適化・環境価値分離・解約条項・支払条件・発電量保証の6軸を意識した交渉戦略を整理します。
            </p>
            <div className="mt-4 space-y-3">
              {negotiationTips.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要PPA仲介事業者・発電事業者 — 5タイプ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本のPPA市場には総合商社・電力会社・再エネ専業・外資系IPP・コンサル仲介の5タイプの事業者が参入しています。それぞれの強み・案件規模・需要家層を整理します。
            </p>
            <div className="mt-4 space-y-3">
              {ppaIntermediaries.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 事業者名は代表例として記載(2025年10月時点の主要参入事業者)。新規参入・撤退は継続的に発生するため、最新情報は新電力ネット等で要確認。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Before/After事例3件 — 食品/データセンター/中堅製造業</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別PPA契約のBefore/After事例3件を整理します。いずれも公開事例・業界団体ヒアリングをベースとした代表シナリオです。
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
              データセンター事例の深掘りは{" "}
              <Link href="/datacenter-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、PPAの落とし穴整理は{" "}
              <Link href="/ppa-contract-pitfalls" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA契約の落とし穴</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約締結前チェックリスト(10項目)</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA契約締結前に下記10項目をチェックすることで、長期契約での想定外リスクを大幅に低減できます。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターでPPA価格メリットを定量化する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              PPA契約の経済合理性は、自社の電力単価・需要パターン・契約条件で大きく異なります。シミュレーターで現状契約とPPA契約のトータルコスト比較・年間削減効果・契約期間別の影響を試算できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現契約とPPA(電源別)の単価差・年間コスト差を比較</li>
              <li>10/15/20年契約別の累積コスト差</li>
              <li>RE100カバー率別の調達コスト試算</li>
              <li>PPA(50%)+非化石証書(50%)の組合せ試算</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-27"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/corporate-ppa", title: "コーポレートPPA カテゴリ", description: "PPA関連記事一覧" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAとは", description: "3形態の基本と選び方" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトPPAとオフサイトPPA", description: "設置条件とコスト比較" },
              { href: "/virtual-ppa-explained", title: "バーチャルPPAとは", description: "差金決済型の仕組み" },
              { href: "/ppa-contract-pitfalls", title: "PPA契約の落とし穴", description: "10〜20年契約のリスク" },
              { href: "/ppa-vs-self-consumption-solar", title: "PPAと自家消費型太陽光の比較", description: "投資/契約のトレードオフ" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "オンサイト型の参考値" },
              { href: "/non-fossil-certificates", title: "非化石証書とは", description: "環境価値の基本" },
              { href: "/non-fossil-certificate-types-purchase", title: "非化石証書の種類と購入方法", description: "REC運用の実務" },
              { href: "/re100-overview-for-business", title: "RE100入門", description: "再エネ100%目標の解説" },
              { href: "/sbt-certification-electricity-plan", title: "SBT認定と電力プラン", description: "SBT対応の調達設計" },
              { href: "/corporate-decarbonization-overview", title: "企業の脱炭素経営の全体像", description: "GX対応の俯瞰" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "PPAの位置付け理解" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "長期固定の判断軸" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金の仕組み", description: "PPA経由でも関連" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "PPAでヘッジ対象の項目" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC事業者の打ち手" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種別電気代水準" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "ビル事業者の打ち手" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備項目" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "PPA電源地選択の参考" },
            ]}
          />

          <ContentCta
            heading="自社条件でPPA価格メリットを試算する"
            description="シミュレーターで現契約とPPA契約のトータルコスト比較・契約期間別影響・RE100カバー率を試算できます。複数電源・契約形態の比較で、PPA交渉の準備データを揃えましょう。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/compare", label: "料金メニューを比較する" },
              { href: "/articles/corporate-ppa", label: "コーポレートPPA記事一覧" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="PPA契約・価格交渉、専門家に相談しませんか?"
            description="コーポレートPPA契約は10〜20年の重要意思決定です。エネルギー情報センターは中立的立場で複数事業者比較・契約条件レビュー・交渉論点整理を支援します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
