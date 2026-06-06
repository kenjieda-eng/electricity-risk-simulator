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
  "DR・節電プログラムのインセンティブ制度 完全ガイド｜対象・報酬・参加の進め方";
const pageDescription =
  "ディマンドリスポンス（DR）・節電プログラムの報酬/インセンティブの仕組み（容量市場の発動指令電源・需給調整市場・アグリゲーター経由）を、補助金との違いを明確にして整理。高圧/特別高圧需要家が需要抑制で収益化する実務と注意点を代表シナリオで解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ディマンドリスポンス 報酬",
    "DR インセンティブ",
    "節電プログラム 法人",
    "容量市場 発動指令電源",
    "アグリゲーター 調整力",
    "需給調整市場 需要家",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-demand-response-incentive",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-demand-response-incentive",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/subsidies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/subsidies"],
  },
};

const overview = [
  {
    label: "DR・節電プログラムは「補助金」ではなく実績連動の報酬制度",
    detail:
      "ディマンドリスポンス（DR）・節電プログラムは、設備の取得費を国が補助する設備補助金とは性格が異なります。これらは需要抑制の実績（kW・kWhの抑制量）に応じて支払われる報酬・インセンティブであり、報酬額は市場・公募・アグリゲーター契約により変動します。固定の補助率や固定単価が約束されるものではなく、「需要を減らした成果」に対して対価が支払われる仕組みである、という点をまず押さえてください（出典: 経済産業省/資源エネルギー庁・OCCTO・各事業公募要領から整理／2026年度時点）。",
  },
  {
    label: "需要側を「資源」として活用する政策の流れ",
    detail:
      "再生可能エネルギーの拡大で需給バランスの調整力ニーズが高まるなか、需要家側の需要抑制を電力システムの調整リソースとして活用する政策が進んでいます。資源エネルギー庁のディマンドリスポンス（DR）施策、容量市場の発動指令電源（OCCTO）、需給調整市場、特定卸供給事業者（アグリゲーター）経由の調整力提供などが、その代表的な枠組みです。需要家は需要を抑制した実績に応じて報酬を受け取れる可能性があります。",
  },
  {
    label: "本ページの位置づけ（補助金カテゴリとの使い分け）",
    detail:
      "本ページはDR・節電プログラムの「報酬・インセンティブ」の仕組みに特化した整理です。設備の取得費を補助する各種補助金制度の概要は別途整理しています。蓄電池・自家発・空調制御など、DR参加に役立つ設備への補助金と、DR参加で得られる報酬は別の制度であり、両者を組合せて検討するのが実務です。本ページは制度の中立的な解説であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "報酬は変動する — 確定額を前提にした投資判断は禁物",
    detail:
      "DR・節電プログラムの報酬は、容量市場・需給調整市場の価格や事業者との契約条件、実際の発動回数・抑制実績によって変動します。固定の補助率ではないため、「毎年いくら必ずもらえる」という前提で設備投資の回収計画を立てるのは適切ではありません。報酬はあくまで需要抑制の実績連動であり、市場価格や契約により増減する変動収入として位置づけるのが正しい理解です。",
  },
  {
    label: "対象となりやすい需要家像",
    detail:
      "DR・節電プログラムで報酬を得やすいのは、高圧・特別高圧の需要家で、かつ需要抑制が技術的に可能な事業者です。具体的には自家発電設備・蓄電池を持つ工場、調整可能な空調・生産設備を持つ商業施設・工場などが挙げられます。逆に、需要を抑制する余地がほとんどない、あるいは抑制すると事業に支障が出る業態では参加のメリットが限定的です。参加可否は審査・契約によって決まります。",
  },
];

const drTypes = [
  {
    name: "下げDR（ネガワット／需要抑制）",
    role: "需要を「減らす」方向の調整",
    detail:
      "電力需給が逼迫したとき、需要家が使用量を減らす（または自家発・蓄電池で系統からの受電を減らす）ことで需給を緩和する取組みです。減らした分の電力（ネガワット）が調整リソースとして評価され、抑制実績に応じた報酬の対象になり得ます。最も一般的なDRの形態で、夏季・冬季のピーク時間帯に発動されることが多いものです。報酬は実績連動で変動します。",
  },
  {
    name: "上げDR（需要創出）",
    role: "需要を「増やす」方向の調整",
    detail:
      "再エネの出力が大きく余剰が生じる時間帯などに、需要家が意図的に使用量を増やす（蓄電池への充電、生産前倒し等）ことで需給バランスに貢献する取組みです。再エネの出力制御を抑える観点から注目されています。下げDRに比べると実装例は限定的ですが、蓄電池・EVなどの可制御負荷を持つ事業者では選択肢になり得ます。",
  },
  {
    name: "容量市場（発動指令電源）",
    role: "OCCTO／将来の供給力を確保する仕組み",
    detail:
      "OCCTO（電力広域的運営推進機関）が運営する容量市場には、需要抑制（DR）を供給力としてオークションに応札する「発動指令電源」の区分があります。需要家はアグリゲーター等を通じて応札し、落札すれば容量確保の対価を得られる可能性がありますが、対価の水準はオークション結果で決まり変動します。固定の単価は創作できず、最新のオークション結果・ルールを一次情報で確認する必要があります。",
  },
  {
    name: "需給調整市場",
    role: "リアルタイムに近い調整力の取引",
    detail:
      "需給調整市場は、周波数・需給を維持するための調整力を取引する市場です。応動の速さなどに応じた商品区分があり、DR（需要側リソース）も要件を満たせば参加し得ます。需要家が直接参加するより、アグリゲーターを通じて参加するのが一般的です。約定価格は市場で変動するため、報酬は実績・市場連動で増減します。",
  },
  {
    name: "節電プログラム（ポイント付与等の取組み）",
    role: "需要家向けの参加促進策",
    detail:
      "過去には「節電プログラム促進事業」など、参加・節電実績に応じてポイント等を付与する取組みが実施されたことがあります。こうした取組みは年度・政策により内容や有無が変わり、恒常的に同じ条件で続くものではありません。実施有無・条件は最新の公募要領・各事業の案内で確認する必要があります（出典: 経済産業省/資源エネルギー庁・各事業公募要領から整理／2026年度時点）。",
  },
];

const eligibility = [
  {
    label: "契約区分（高圧・特別高圧が中心）",
    detail:
      "DR・節電プログラムで報酬を得る取組みは、主に高圧・特別高圧の需要家が対象になりやすい領域です。需要規模が大きく、抑制できる量（kW）がまとまることで調整リソースとしての価値が高まるためです。低圧の小規模需要家でも一部のプログラムに参加できる場合がありますが、参加可否・条件はプログラムやアグリゲーター契約により異なります。",
  },
  {
    label: "需要抑制が可能な設備・運用",
    detail:
      "報酬を得るには、発動指令時に実際に需要を抑制できることが前提です。自家発電設備で系統受電を減らせる、蓄電池から放電して受電を抑えられる、空調・生産設備を一時的に絞れる、といった可制御性が必要です。需要抑制が事業運営に支障を与えない範囲で行えるかが、参加判断の核心になります。",
  },
  {
    label: "計測・通信のインフラ",
    detail:
      "抑制実績（ベースラインからの削減量）を正しく計測・報告できる仕組みが必要です。スマートメーター・自社の計測システム・アグリゲーターの管理システムなどを通じて、発動時の使用量を把握できることが求められます。計測体制が整っていないと、抑制したつもりでも実績として認められない可能性があります。",
  },
  {
    label: "ベースラインの考え方",
    detail:
      "DRの報酬は「本来使っていたであろう量（ベースライン）」と「実際の使用量」の差で評価されるのが一般的です。ベースラインの算定方法はプログラムにより定められており、これを理解しておかないと期待した実績にならないことがあります。算定ルールは公募要領・契約で確認してください。",
  },
  {
    label: "参加可否は審査・契約で決まる",
    detail:
      "参加できるかどうか、どの程度の報酬対象になるかは、プログラムの審査やアグリゲーターとの契約条件によって決まります。設備があれば必ず参加できる・必ず報酬が得られると断定することはできません。自社の需要特性・設備・運用制約を踏まえ、提供事業者と個別に条件を確認するのが実務上の前提です。",
  },
];

const rewardConcept = [
  {
    label: "報酬は「実績連動」が基本",
    detail:
      "DR・節電プログラムの報酬は、原則として需要抑制の実績（抑制したkW・kWh、発動への応動度合い）に連動します。発動指令にきちんと応動し、規定の抑制量を達成できたかどうかが対価に直結します。固定額の補助ではないため、参加していても発動がなければ実績連動部分の報酬は発生しない、ということも起こり得ます。",
  },
  {
    label: "容量確保的な対価と実発動の対価",
    detail:
      "枠組みによっては、「いつでも抑制できる態勢を確保していること」に対する対価（容量的な対価）と、「実際に抑制した実績」に対する対価が分かれている場合があります。容量市場の発動指令電源では、確保の対価と発動時の精算が組み合わさる構造があり、いずれもオークション結果や実績で変動します。固定の単価は創作せず、最新ルールで確認してください。",
  },
  {
    label: "市場・公募・契約で水準が変わる",
    detail:
      "報酬の水準は、容量市場・需給調整市場の価格、各事業の公募条件、アグリゲーターとの契約内容によって変動します。同じ抑制量でも、市場価格や契約条件が違えば受け取る額は変わります。したがって本ページでは具体的な報酬単価・補助率・パーセンテージを提示しません。これらは創作せず、必ず一次情報で確認すべき項目です。",
  },
  {
    label: "ペナルティ・未達時の扱い",
    detail:
      "発動指令に応動できなかった場合や、規定の抑制量に達しなかった場合には、報酬の減額や精算上の不利益が生じる仕組みがあることがあります。報酬の上振れだけでなく、未達時の扱いも契約・ルールで確認することが重要です。「参加すれば必ず得をする」と断定はできません。",
  },
];

const aggregatorRole = [
  {
    label: "アグリゲーターとは",
    detail:
      "アグリゲーター（特定卸供給事業者等）は、複数の需要家の需要抑制力を束ねて（アグリゲートして）市場や系統運用者に調整力として提供する事業者です。個々の需要家が単独で容量市場・需給調整市場に参加するのはハードルが高いため、アグリゲーターを介して参加するのが一般的な形です。",
  },
  {
    label: "需要家にとっての役割",
    detail:
      "アグリゲーターは、参加手続き・市場応札・発動指令の伝達・実績の計測と精算といった実務を担います。需要家は自社の抑制可能量を提供し、発動時に応動することで、アグリゲーターを通じて報酬を受け取る形になります。契約条件（報酬の配分、応動義務、ペナルティ等）はアグリゲーターごとに異なります。",
  },
  {
    label: "契約条件の見極めが重要",
    detail:
      "アグリゲーター経由で得られる報酬は、束ねた価値からアグリゲーターの取り分を差し引いた形で需要家に配分される構造が一般的です。報酬配分の考え方、発動頻度の想定、未達時のペナルティ、契約期間などは事業者により差があります。複数の事業者の条件を比較検討することが望ましく、自社の実態に合うかを見極めることが重要です。",
  },
  {
    label: "単独参加とアグリゲーター経由の使い分け",
    detail:
      "特別高圧の大口需要家など、単独でもまとまった抑制量を出せる事業者は直接的な参加を検討できる場合もありますが、多くの需要家にとってはアグリゲーター経由が現実的です。自社の規模・体制・抑制可能量を踏まえて、どの参加形態が適するかを提供事業者と相談するのが実務です。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1: 自家発・蓄電池を持つ工場（高圧／数値は目安レンジ）",
    before:
      "Before: 自家発電設備と蓄電池を保有するが、平常時のバックアップ・ピークカット用途に留まり、需要抑制を市場価値として活用していなかった。需給逼迫時にも系統からの受電を続けていた。",
    after:
      "After: アグリゲーターと契約し、発動指令時に自家発の稼働・蓄電池の放電で系統受電を抑制する下げDRに参加。容量市場の発動指令電源としての応札もアグリゲーター経由で実施。抑制可能量を調整リソースとして提供する体制を整備。",
    result:
      "Result: 発動時の需要抑制実績に応じて報酬を獲得（報酬は実績連動で変動）。ピークカットによる契約電力・電気代の抑制効果と合わせ、保有設備の稼働価値を高めた。報酬額は市場価格・契約・発動回数により増減するため固定ではない。",
  },
  {
    title: "代表シナリオ2: 空調制御で需要を抑制する商業施設（高圧／数値は目安レンジ）",
    before:
      "Before: 大型空調を持つ商業施設だが、需要抑制の仕組みは未導入。夏季ピーク時も通常運転を継続し、需給調整への参加機会を活かせていなかった。",
    after:
      "After: 空調の設定温度・運転の一時的な調整で需要を絞る運用を整え、アグリゲーター経由で節電プログラム・DRに参加。顧客快適性に支障の出ない範囲で抑制できる量を事前に検証し、発動時に応動する体制を構築。",
    result:
      "Result: 発動への応動実績に応じて報酬を獲得（報酬は実績連動で変動）。空調の最適運用による平常時の省エネ効果も併せて得た。報酬は発動回数・抑制量・契約条件により変動し、固定の単価ではない。",
  },
  {
    title: "代表シナリオ3: 複数拠点をアグリゲートする事業者（高圧・特別高圧混在／数値は目安レンジ）",
    before:
      "Before: 全国に複数の事業所を持つが、各拠点の需要抑制力を個別にしか把握しておらず、調整リソースとしてまとめて活用できていなかった。",
    after:
      "After: アグリゲーターと連携し、複数拠点の抑制可能量を束ねて市場に提供。拠点ごとの可制御負荷（空調・生産設備・蓄電池）を組合せ、発動時に全体で必要な抑制量を確保できる運用に。",
    result:
      "Result: 束ねた抑制量に応じた報酬を獲得（報酬は実績連動で変動）。拠点単独では参加が難しい市場にもアグリゲート経由で参加機会を得た。報酬の配分・水準は契約・市場価格により変動するため、確定額として見込むことはできない。",
  },
];

const participationFlow = [
  {
    label: "STEP1: 自社の需要抑制余地を把握する",
    detail:
      "まず、どの設備をどの程度・どのくらいの時間抑制できるか（事業に支障なく絞れるか）を洗い出します。自家発・蓄電池・空調・生産設備など、可制御な負荷の抑制可能量を見積もることが出発点です。需要のピーク特性の把握には需要管理の知識も役立ちます。",
  },
  {
    label: "STEP2: 参加できるプログラム・市場を調べる",
    detail:
      "下げDR・上げDR、容量市場の発動指令電源、需給調整市場、節電プログラムなど、自社が参加し得る枠組みを整理します。多くの場合、直接参加よりアグリゲーター経由が現実的です。制度の有無・条件は年度で変わるため、最新の公募要領・市場ルールを確認します。",
  },
  {
    label: "STEP3: アグリゲーター等と条件を比較・相談する",
    detail:
      "複数のアグリゲーター・提供事業者に、報酬配分の考え方・想定発動頻度・応動義務・ペナルティ・契約期間などを確認し比較します。報酬は実績連動で変動するため、「確定額」ではなく前提条件の妥当性を見極めることが大切です。",
  },
  {
    label: "STEP4: 計測・通信・運用体制を整える",
    detail:
      "発動指令を受け取り、抑制を実行し、実績を計測・報告できる体制を整えます。スマートメーター・自社計測・アグリゲーターの管理システムの連携を確認し、誰がどの操作を行うか運用フローを定めておきます。ベースラインの算定ルールも事前に理解しておきます。",
  },
  {
    label: "STEP5: 参加・発動応動・実績精算",
    detail:
      "契約に基づき市場・プログラムへ参加し、発動指令時に応動します。抑制実績に応じて報酬が精算されます。発動回数・抑制量・市場価格により受け取る額は変動します。運用実績を振り返り、抑制可能量や運用方法を継続的に見直していきます。",
  },
];

const peakCutRelation = [
  {
    label: "省エネ・ピークカットとDRは目的が異なる",
    detail:
      "省エネは「平常時の使用量そのものを減らす」取組み、ピークカットは「契約電力に効く最大需要を下げる」取組みです。一方DRは「需給逼迫など特定のタイミングで一時的に需要を抑制する」取組みで、目的とタイミングが異なります。三者は排他ではなく、組合せることで電気代削減と報酬獲得の両面を狙えます。",
  },
  {
    label: "可制御設備は両方に活きる",
    detail:
      "蓄電池・自家発・空調制御といった可制御設備は、平常時のピークカット（契約電力・電気代の抑制）にも、発動時のDR（報酬獲得）にも活用できます。同じ設備を多面的に使えることが、こうした設備の投資価値を考えるうえでのポイントです。ただしDRの報酬は実績連動で変動するため、確定収入として投資回収に織り込むことには注意が必要です。",
  },
  {
    label: "需要管理の基礎が前提になる",
    detail:
      "DRに参加するには、自社の需要パターン・ピークの出方・抑制余地を把握していることが前提です。デマンド管理・ピークカットの基礎を整えておくと、DR参加時の抑制可能量の見積もりや発動時の運用がスムーズになります。需要側の見える化はDRの土台です。",
  },
  {
    label: "電気代削減との関係を総合的に見る",
    detail:
      "DRの報酬は変動収入である一方、契約見直し・省エネ・ピークカットによる電気代削減は比較的見通しやすい効果です。まずは確実性の高い電気代削減を整えたうえで、DR報酬を上乗せの収益機会として位置づけるのがバランスの取れた考え方です。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const cautionItems = [
  {
    label: "報酬は変動 — 確定収入として扱わない",
    detail:
      "DR・節電プログラムの報酬は、市場価格・公募条件・契約・発動回数・抑制実績によって変動します。固定の補助率・固定単価ではないため、設備投資の回収計画に「確定収入」として組み込むのは適切ではありません。変動する上乗せ収益として保守的に見積もることが重要です。",
  },
  {
    label: "発動応動義務とペナルティ",
    detail:
      "参加には発動指令への応動義務が伴うのが一般的で、応動できない・抑制量が未達の場合には報酬減額やペナルティが生じることがあります。事業運営に支障を与えない範囲で確実に応動できる量を、無理のない範囲で設定することが大切です。",
  },
  {
    label: "事業運営への影響",
    detail:
      "需要抑制は、生産計画・顧客サービス・設備運用に影響を及ぼし得ます。報酬を優先して事業に支障が出ては本末転倒です。どの設備をどの時間帯にどこまで抑制できるか、現場の運用制約を踏まえて慎重に設計する必要があります。",
  },
  {
    label: "制度・市場ルールの変更",
    detail:
      "容量市場・需給調整市場の商品設計、DR施策、節電プログラムの内容は、政策・年度により見直されます。過去に実施された取組みが同条件で続くとは限りません。参加判断の前に最新の制度・市場ルールを確認することが不可欠です。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "アグリゲーター契約の精査",
    detail:
      "アグリゲーター経由で参加する場合、報酬配分・応動義務・ペナルティ・契約期間・解約条件などをよく確認する必要があります。条件は事業者により差があるため、複数社を比較し、自社の実態に合うかを見極めることが重要です。断定的な「おすすめ」はなく、自社条件に即した判断が求められます。",
  },
];

const updateCheck = [
  {
    label: "一次情報で最新ルールを確認する",
    detail:
      "DR施策・容量市場・需給調整市場・節電プログラムの最新の制度内容は、資源エネルギー庁・経済産業省・OCCTOなどの公式情報や各事業の公募要領で確認します。報酬単価・要件・スケジュールは年度・公募回で変わるため、本ページの整理は出発点として用い、必ず一次情報に当たってください。",
  },
  {
    label: "報酬水準は創作された数値を信じない",
    detail:
      "ネット上には具体的な報酬単価や利回りを示す情報もありますが、これらは市場・契約により変動するもので、固定の値ではありません。本ページでも具体的な単価・パーセンテージは提示していません。水準は市場・公募・アグリゲーター契約で個別に確認するのが正しい姿勢です。",
  },
  {
    label: "市場価格の動向を継続的に把握する",
    detail:
      "容量市場・需給調整市場の約定価格は変動します。電力単価・産業別エネルギーの動向（新電力ネット等の公開データ）も参考になります。市場環境の変化はDR報酬の水準にも影響するため、継続的なウォッチが望まれます。",
  },
  {
    label: "提供事業者と定期的に条件を見直す",
    detail:
      "アグリゲーター契約の条件や、参加している市場・プログラムの内容は、定期的に見直すことが望ましいものです。発動実績・報酬実績を振り返り、抑制可能量や運用方法、契約条件をアップデートしていきます。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const checklistItems = [
  "DR・節電プログラムが「補助金」ではなく実績連動の報酬制度だと理解しているか",
  "自社の需要抑制余地（どの設備をどこまで・どの時間帯に絞れるか）を把握しているか",
  "高圧・特別高圧の契約区分で、参加対象になり得るか確認したか",
  "自家発・蓄電池・空調・生産設備などの可制御負荷を整理したか",
  "抑制実績を計測・報告できる体制（スマートメーター・計測システム）があるか",
  "ベースラインの算定ルールを理解しているか",
  "参加し得る枠組み（下げDR/上げDR/容量市場/需給調整市場/節電プログラム）を調べたか",
  "アグリゲーター複数社の条件（報酬配分・応動義務・ペナルティ）を比較したか",
  "報酬は変動収入であり、確定収入として投資回収に織り込んでいないか",
  "発動応動が事業運営に支障を与えない範囲か確認したか",
  "省エネ・ピークカット・契約見直しによる電気代削減を先に整えたか",
  "最新の公募要領・市場ルールを一次情報で確認したか（数値を推測しない）",
];

const faqItems = [
  {
    question: "DR・節電プログラムは補助金ですか？",
    answer:
      "いいえ、設備補助金ではなく実績連動の報酬制度です。設備の取得費を国が補助する補助金とは性格が異なり、需要抑制の実績（kW・kWhの抑制量）や発動への応動に応じて支払われる報酬・インセンティブです。報酬額は容量市場・需給調整市場の価格、公募条件、アグリゲーターとの契約により変動し、固定の補助率や固定単価が約束されるものではありません。設備への補助金と、DR参加で得られる報酬は別の制度であり、両者を組合せて検討するのが実務です（出典: 経済産業省/資源エネルギー庁・OCCTO・各事業公募要領から整理／2026年度時点）。",
  },
  {
    question: "どんな事業者が対象になりますか？",
    answer:
      "主に高圧・特別高圧の需要家で、需要抑制が技術的に可能な事業者が対象になりやすい領域です。具体的には自家発電設備・蓄電池を持つ工場、調整可能な空調・生産設備を持つ商業施設・工場などです。需要規模が大きく抑制できる量（kW）がまとまるほど調整リソースとしての価値が高まります。ただし参加できるか、どの程度の報酬対象になるかは、プログラムの審査やアグリゲーターとの契約条件によって決まり、設備があれば必ず参加できると断定はできません。",
  },
  {
    question: "報酬はいくらもらえますか？",
    answer:
      "具体的な金額は提示できません。報酬は需要抑制の実績連動で、容量市場・需給調整市場の価格、各事業の公募条件、アグリゲーターとの契約、実際の発動回数・抑制実績によって変動するためです。同じ抑制量でも市場価格や契約条件が違えば受け取る額は変わります。固定の補助率・単価ではないので、ネット上の特定の単価情報を鵜呑みにせず、提供事業者・公募要領で個別に条件を確認してください（出典: OCCTO・各事業公募要領から整理／2026年度時点）。",
  },
  {
    question: "下げDRと上げDRの違いは何ですか？",
    answer:
      "下げDR（ネガワット）は需給逼迫時などに需要家が使用量を「減らす」取組みで、最も一般的な形態です。減らした分が調整リソースとして評価され、抑制実績に応じた報酬の対象になり得ます。上げDRは再エネ余剰時などに需要家が使用量を意図的に「増やす」（蓄電池充電・生産前倒し等）取組みで、出力制御の抑制に貢献します。下げDRに比べ実装例は限定的ですが、蓄電池・EVなど可制御負荷を持つ事業者では選択肢になり得ます。",
  },
  {
    question: "アグリゲーターを通さないと参加できませんか？",
    answer:
      "特別高圧の大口需要家など単独でまとまった抑制量を出せる場合は直接的な参加を検討できることもありますが、多くの需要家にとってはアグリゲーター（特定卸供給事業者等）経由が現実的です。アグリゲーターは複数の需要家の抑制力を束ねて市場や系統運用者に提供し、参加手続き・市場応札・発動指令の伝達・実績計測・精算を担います。自社の規模・体制・抑制可能量を踏まえ、どの参加形態が適するかを提供事業者と相談するのが実務です。",
  },
  {
    question: "容量市場の発動指令電源とは何ですか？",
    answer:
      "OCCTO（電力広域的運営推進機関）が運営する容量市場で、需要抑制（DR）を将来の供給力としてオークションに応札する区分です。需要家はアグリゲーター等を通じて応札し、落札すれば容量確保の対価を得られる可能性がありますが、対価の水準はオークション結果で決まり変動します。確保の対価と発動時の精算が組み合わさる構造があり、いずれも固定額ではありません。最新のオークション結果・ルールは一次情報で確認してください（出典: OCCTO／2026年度時点）。",
  },
  {
    question: "DRに参加すると必ず得をしますか？",
    answer:
      "必ず得をするとは断定できません。報酬は発動・実績連動で変動し、発動がなければ実績連動部分の報酬は発生しないこともあります。また発動応動義務があり、応動できない・抑制量が未達の場合には報酬減額やペナルティが生じる仕組みがあることもあります。需要抑制が生産計画・顧客サービス・設備運用に影響を及ぼす点も考慮が必要です。報酬の上振れだけでなく、未達時の扱いや事業への影響も契約・ルールで確認したうえで判断してください。",
  },
  {
    question: "省エネ・ピークカットとDRはどう違いますか？",
    answer:
      "省エネは平常時の使用量そのものを減らす取組み、ピークカットは契約電力に効く最大需要を下げる取組み、DRは需給逼迫など特定のタイミングで一時的に需要を抑制し報酬を得る取組みで、目的とタイミングが異なります。三者は排他ではなく、蓄電池・自家発・空調制御などの可制御設備は平常時のピークカットにも発動時のDRにも活用できます。まず確実性の高い電気代削減（契約見直し・省エネ・ピークカット）を整え、DR報酬を上乗せの収益機会として位置づけるのがバランスの取れた考え方です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "経済産業省 資源エネルギー庁（ディマンドリスポンス・省エネ政策）", url: "https://www.enecho.meti.go.jp/" },
  { name: "経済産業省（エネルギー・電力市場政策）", url: "https://www.meti.go.jp/" },
  { name: "OCCTO 電力広域的運営推進機関（容量市場・需給調整市場）", url: "https://www.occto.or.jp/" },
];

export default function SubsidyDemandResponseIncentivePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-demand-response-incentive"
        datePublished="2026-06-06"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "DR・節電プログラムのインセンティブ制度", url: "https://simulator.eic-jp.org/subsidy-demand-response-incentive" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">DR・節電プログラムのインセンティブ制度</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            DR・節電プログラムのインセンティブ制度 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ディマンドリスポンス（DR）・節電プログラムは、設備の取得費を補助する「補助金」ではなく、需要抑制の実績（kW・kWh）に応じて支払われる実績連動の報酬・インセンティブ制度です。報酬額は容量市場・需給調整市場の価格や公募条件、アグリゲーターとの契約により変動します。本ページでは、補助金との違いを明確にしたうえで、DRの種類・対象・報酬の考え方・アグリゲーターの役割・参加の進め方を、高圧/特別高圧需要家の代表シナリオとともに整理します。
          </p>
          <AuthorBadge publishedAt="2026-06-06" updatedAt="2026-06-06" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>DR・節電プログラムが「補助金」と異なる実績連動の報酬制度であること</li>
              <li>下げDR/上げDR・容量市場（発動指令電源）・需給調整市場の違い</li>
              <li>対象になりやすい需要家像と必要な設備・計測体制</li>
              <li>報酬の考え方（実績連動・変動）とアグリゲーターの役割</li>
              <li>高圧/特別高圧の代表シナリオ3件と参加の進め方フロー</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは2026年度時点の整理です。DR施策・容量市場・需給調整市場・節電プログラムの内容は年度・公募回で変わるため、最新の公募要領・市場ルールをご確認ください。設備への補助金は{" "}
            <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の総論</Link>
            、需要管理の基礎は{" "}
            <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド管理ガイド</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">制度の全体像と「補助金」との違い</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR・節電プログラムは、設備の取得費を国が補助する設備補助金とは性格が異なります。これらは需要抑制の実績（kW・kWh）に応じた報酬・インセンティブであり、報酬額は市場・公募・アグリゲーター契約により変動します。まずこの「補助金ではなく実績連動の報酬」という前提を押さえることが重要です。
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
              自社の電気代水準・上昇リスクの試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で、設備への補助金は{" "}
              <Link href="/subsidies-overview" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金・助成金の総論</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">DRの種類と関連市場（下げDR/上げDR・容量市場・需給調整市場）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRには需要を減らす下げDRと増やす上げDRがあり、参加し得る枠組みとして容量市場の発動指令電源、需給調整市場、節電プログラムなどがあります。いずれも報酬は実績・市場連動で変動し、固定の単価ではありません。
            </p>
            <div className="mt-4 space-y-3">
              {drTypes.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 市場・制度の設計は見直されることがあります。最新の商品区分・参加要件は一次情報でご確認ください（出典: 資源エネルギー庁・OCCTO・各事業公募要領から整理／2026年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">対象事業者・必要な設備と体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR・節電プログラムで報酬を得やすいのは、高圧・特別高圧の需要家で、需要抑制が技術的に可能な事業者です。可制御な設備と計測・通信体制が前提になります。参加可否・報酬対象の範囲は審査・契約で決まります。
            </p>
            <div className="mt-4 space-y-3">
              {eligibility.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧の料金構造は{" "}
              <Link href="/extra-high-voltage-electricity-pricing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">特別高圧の電気料金体系</Link>
              、DRに向く法人像は{" "}
              <Link href="/demand-response-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DRに向く法人の条件</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">報酬の考え方（実績連動・変動する）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              報酬は原則として需要抑制の実績に連動し、容量市場・需給調整市場の価格や公募・契約条件で水準が変わります。固定の補助率・単価ではないため、本ページでは具体的な金額・パーセンテージは提示しません。これらは創作せず一次情報で確認すべき項目です。
            </p>
            <div className="mt-4 space-y-3">
              {rewardConcept.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 報酬単価・利回りは市場・公募・契約により変動します。固定の補助率ではありません（出典: OCCTO・各事業公募要領から整理／2026年度時点）。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRの収益モデル・費用対効果は{" "}
              <Link href="/demand-response-revenue-model" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DRの収益モデル解説</Link>
              、{" "}
              <Link href="/demand-response-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DRの費用対効果</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">アグリゲーターの役割と契約の見極め</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              多くの需要家は、複数の抑制力を束ねるアグリゲーター（特定卸供給事業者等）を通じて市場・プログラムに参加します。報酬配分・応動義務・ペナルティ・契約期間は事業者により異なるため、条件の比較・精査が重要です。
            </p>
            <div className="mt-4 space-y-3">
              {aggregatorRole.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRと需要側PPAの関係は{" "}
              <Link href="/subsidy-demand-side-ppa" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">需要家主導型PPA補助の解説</Link>
              、蓄電池・太陽光設備の補助は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">代表シナリオ3件 — 需要抑制で収益化する実務（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧/特別高圧の代表的な3パターンで、需要抑制をどう報酬につなげるかをBefore/After方式で示します。いずれも公開情報から再構成した代表シナリオ（数値は目安レンジ）で、報酬は実績連動で変動し、確定額ではありません。
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
            <p className="mt-3 text-xs leading-6 text-slate-600">
              ※ 上記は代表シナリオであり、報酬は市場価格・契約・発動回数・抑制実績により変動します。固定の補助率・単価ではありません。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季のDR戦略は{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR夏季ピーク戦略</Link>
              、ピークカット手法は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ピークカット5つの戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">参加の進め方フロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              需要抑制余地の把握から、参加枠組みの選定、アグリゲーターとの条件比較、計測・運用体制の整備、発動応動・実績精算まで、参加の標準的な流れを整理します。
            </p>
            <div className="mt-4 space-y-3">
              {participationFlow.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              需要管理の基礎は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド管理ガイド</Link>
              、デマンド値の見方は{" "}
              <Link href="/demand-value-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド値ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ・ピークカットとの関係</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ・ピークカット・DRは目的とタイミングが異なる別々の取組みですが、蓄電池・自家発・空調制御などの可制御設備は三者すべてに活用できます。組合せで電気代削減と報酬獲得の両面を狙えます。
            </p>
            <div className="mt-4 space-y-3">
              {peakCutRelation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気代削減の見直しポイントは{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代削減の見直しポイント</Link>
              、補助金と契約見直しの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">注意点・リスク</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR・節電プログラムは収益機会である一方、報酬の変動性・応動義務・事業運営への影響・制度変更など、参加前に確認すべき注意点があります。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-6 text-slate-600">
              ※ 本ページは2026年度時点の整理です。DR施策・容量市場・需給調整市場・節電プログラムの内容は年度・公募回で変わるため、最新の公募要領・市場ルールをご確認ください。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書の書き方は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方</Link>
              、補助金の投資回収試算は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">情報の更新と確認の仕方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR・節電プログラム・容量市場・需給調整市場の制度は年度・公募回で変わります。報酬水準は創作された数値を信じず、一次情報と提供事業者で個別に確認することが正しい姿勢です。
            </p>
            <div className="mt-4 space-y-3">
              {updateCheck.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 制度内容・市場ルールは見直されることがあります（出典: 経済産業省/資源エネルギー庁・OCCTO・各事業公募要領から整理／2026年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xl font-semibold text-slate-900">DR参加 検討チェックリスト（12項目）</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DR・節電プログラムへの参加を検討する前に、このチェックリストで自社状況を整理しましょう。報酬は実績連動で変動するため、確実性の高い電気代削減を整えたうえで上乗せの収益機会として位置づけるのがバランスの取れた進め方です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-xs leading-6 text-slate-600">
              ※ 本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。参加可否・報酬の水準は審査・市場・契約により決まります。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と削減余地を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              DRの報酬は変動収入であるため、まずは確実性の高い電気代削減（契約見直し・省エネ・ピークカット）の余地を把握することが先決です。シミュレーターで自社条件に当てはめて年間電気代・上昇リスクを試算し、そのうえでDR報酬を上乗せの収益機会として検討するのがバランスの取れた進め方です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>ピークカット・省エネによる削減余地を見立てる</li>
              <li>可制御設備（蓄電池・自家発・空調）の活用余地を整理する</li>
              <li>確実な電気代削減＋変動するDR報酬の全体像をつかむ</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で行えます。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえご活用ください。再エネ賦課金は2026年度4.18円/kWh（確定）で、電気代全体に影響します。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-06" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "自社条件で電気代・上昇リスクを試算。" },
              { href: "/subsidies-overview", title: "補助金・助成金の総論", description: "設備への補助金制度の全体像。" },
              { href: "/demand-control-guide", title: "デマンド管理ガイド", description: "需要管理・ピークの見える化の基礎。" },
              { href: "/demand-response-revenue-model", title: "DRの収益モデル解説", description: "需要抑制を収益化する考え方。" },
              { href: "/demand-response-cost-benefit", title: "DRの費用対効果", description: "参加コストと変動する報酬の整理。" },
              { href: "/demand-response-suited-corporations", title: "DRに向く法人の条件", description: "参加メリットが出やすい需要家像。" },
              { href: "/demand-response-summer-strategy", title: "DR夏季ピーク戦略", description: "夏季逼迫時の需要抑制の進め方。" },
              { href: "/peak-cut-5-strategies", title: "ピークカット5つの戦略", description: "契約電力に効く需要の下げ方。" },
              { href: "/demand-value-guide", title: "デマンド値ガイド", description: "最大需要の把握と管理の基礎。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代削減の見直しポイント", description: "確実性の高い削減の整え方。" },
              { href: "/extra-high-voltage-electricity-pricing", title: "特別高圧の電気料金体系", description: "大口需要家の料金構造の理解。" },
              { href: "/subsidy-demand-side-ppa", title: "需要家主導型PPA補助の解説", description: "再エネ調達とDRの組合せ。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助金", description: "可制御設備への補助の活用。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数の見方。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "何から手をつけるかの整理。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "申請書類の構成・記述の要点。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングの考え方。" },
              { href: "/subsidy-local-government-list", title: "自治体補助金リスト", description: "地域別の補助制度の探し方。" },
            ]}
          />

          <ContentCta
            heading="DR・需要抑制と電気代削減を専門家に相談する"
            description="DR・節電プログラムの報酬は実績連動で変動します。まずシミュレーターで確実性の高い電気代削減余地を試算し、設備への補助金やDR参加の検討は、自社の需要特性を踏まえて専門家へご相談ください。本ページは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。"
            links={[
              { href: "/industry-electricity-calculator", label: "業種別シミュレーターで試算する" },
              { href: "/subsidies-overview", label: "補助金の総論を見る" },
              { href: "/", label: "トップで診断する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="DR参加と電気代削減、専門家に相談しませんか？"
            description="DR・節電プログラムは報酬が変動する実績連動制度で、参加可否や条件はアグリゲーター契約・市場ルールにより異なります。エネルギー情報センターは中立的立場で、需要抑制と電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
