import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "サプライチェーンCN戦略の完全ガイド｜Scope3対応・Tier1/Tier2への要請（CFO向け・代表シナリオ）";
const pageDescription = "サプライチェーン全体のカーボンニュートラル戦略とScope3対応を、Tier1/Tier2への要請・一次データ収集・CDP/SBT・調達基準の観点でCFO向けに整理。公開情報に基づく代表シナリオで、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/cfo-supply-chain-cn-strategy";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["サプライチェーン カーボンニュートラル","Scope3 対応 CFO","Tier1 Tier2 再エネ 要請","CDP サプライチェーン","SBT 調達基準"],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const h1Text = "サプライチェーンCN戦略の完全ガイド｜Scope3対応・Tier1/Tier2への要請";
const breadcrumbTitle = "サプライチェーンCN戦略（Scope3）";
const leadText = "サプライチェーン全体のカーボンニュートラル(CN)戦略、とりわけScope3対応は、いまや調達・生産部門だけの課題ではなく、財務・開示・投資家対話を担うCFOや経営層の重要テーマです。本記事は公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。完成車・電機などの大手企業が公表するCN目標とサプライヤー要請の一般的潮流を踏まえ、Scope3カテゴリの捉え方、一次データ収集、SBTやCDPサプライチェーンプログラムとの関係、調達基準への再エネ要件組込みまでを、経営の視点から整理します。";
const d1CtaLead = "サプライチェーンCN戦略の前提として、自社のエネルギーコストの現状把握は欠かせません。業種別電気代計算機を使えば、自社の業種・規模に近い条件で電気代の目安を試算でき、Scope2やコスト管理の検討の出発点になります。数値はあくまで目安であり、実額は契約条件・使用実態により異なります。特定の電力会社・契約形態を推奨するものではありません。";
const simulatorCtaLead = "電気料金の上昇・高騰リスクは、サプライチェーンの脱炭素やコスト管理を検討するうえで無視できない要素です。当センターのシミュレーターでは、公開された制度値・統計をもとに、自社が直面しうる電気料金リスクの代表シナリオを把握できます。結果は一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではなく、投資判断の助言でもありません。";
const whatYouLearn = ["Scope3の全体像とカテゴリ1(購入した製品・サービス)が排出量の大半を占めやすい構造","完成車・電機など大手が公表するCN目標とサプライヤー要請が取引・受注に与える影響","Tier1からTier2へCN要請が伝播する仕組みと、自社が要請を受ける側・する側それぞれの論点","一次データ収集とCDPサプライチェーンプログラム、SBT、ISSB/IFRS S2の関係性","調達基準への再エネ要件組込みと、財務・開示・ガバナンスへの落とし込み方"];
const background = [{"label":"Scope3が排出量の大宗を占めやすい","detail":"多くの企業ではScope1・2より、原材料・部品の購入(カテゴリ1)を含むScope3が排出量の大半を占める傾向があります。GHGプロトコルの15カテゴリのうち、調達を通じた間接排出が支配的になりやすく、CFOにとって自社の脱炭素計画の実効性はサプライチェーン全体の管理に左右されます。財務インパクトとして、将来のカーボン関連コストや調達リスクの織り込みが論点となります。"},{"label":"大手のCN目標が取引条件に波及","detail":"完成車・電機などの大手企業が公表するCN目標(特定社の優劣を評価するものではありません)では、サプライヤーに対し排出量の把握や削減、再エネ調達を求める動きが一般的に広がっています。受注企業にとっては、CN対応の巧拙が将来の取引継続・受注機会に関わるテーマとなり、売上・事業継続性という財務観点で経営判断が必要になります。"},{"label":"開示制度との接続","detail":"ISSB(IFRS S2)はScope3を含む温室効果ガス排出の開示を求める方向で整理が進み、日本ではSSBJが基準開発を進めています。CFO・経営層は、サプライチェーン排出の把握体制が将来の開示要請に耐えうるかを見極める必要があります。データ整備の遅れは開示品質・投資家評価に影響しうるため、早期着手が論点です。"},{"label":"投資家・格付の関心","detail":"機関投資家やESG評価機関は、Scope3を含む排出量の把握状況や削減目標(SBTの認定有無など)に関心を寄せます。CDPの質問書ではサプライチェーンに関する設問も含まれ、回答状況がスコアに反映されることがあります。経営層にとっては、資本市場での評価や資金調達コストとの関係を意識した対応が求められます。"},{"label":"コスト・リスクの長期視点","detail":"カーボンプライシングの将来動向やGXリーグの取組など、制度環境は変化が見込まれます。サプライチェーンの脱炭素は短期コストである一方、長期では調達リスクの低減や取引機会の維持につながりうる投資です。CFOは費用と機会の両面を踏まえ、設備投資や調達方針への反映を検討することが論点となります。"}];
const frameworks = [{"label":"GHGプロトコルとScope3の15カテゴリ","detail":"Scope3はGHGプロトコルで上流8・下流7の計15カテゴリに整理されます。製造業ではカテゴリ1(購入した製品・サービス)が大きくなりやすく、まずは自社の排出構造の把握が出発点です。算定には支出ベースと活動量ベースの考え方があり、精度向上のため一次データへの移行が重要論点となります。実数値は事業構造により異なります。"},{"label":"SBT(SBTi)とサプライヤーエンゲージメント","detail":"SBT(SBTi)では、企業がパリ協定整合の削減目標を設定し、Scope3についても目標やサプライヤーエンゲージメント目標を求める枠組みがあります。大手が自社のScope3削減のためTier1に目標設定や削減を促す構図が一般化しつつあり、要請を受ける側・する側の双方で、目標との整合をどう取るかが実務論点です。"},{"label":"CDPサプライチェーンプログラム","detail":"CDPには、発注企業が自社サプライヤーに環境情報の開示を求めるサプライチェーンプログラムがあります。Tier1企業はCDP質問書への回答を通じて排出量や削減取組を報告し、それがTier2への展開につながることもあります。回答体制の整備は、取引先からの要請対応と自社の開示品質向上の両面で意味を持ちます。"},{"label":"ISSB/IFRS S2とSSBJ・調達基準","detail":"ISSBのIFRS S2はScope3を含む気候関連開示の方向性を示し、日本ではSSBJが基準開発を進めています。なおTCFDは2023年に解散し、開示の枠組みはISSB/IFRS S2へ引き継がれました。これらと整合する形で、調達基準に再エネ要件や排出量報告を組み込む動きが論点となります。制度の現状を正確に押さえることが前提です。"}];
const steps = [{"name":"排出構造の把握とホットスポット特定","role":"現状診断","detail":"まずScope3の15カテゴリで自社の排出構造を試算し、カテゴリ1など影響の大きい領域(ホットスポット)を特定します。初期は支出ベースの推計でも、どの調達品目・取引先が重要かを把握できます。CFOは経理・調達のデータを横断し、開示や削減目標の土台となる全体像を共有することが出発点です。"},{"name":"一次データ収集体制の構築","role":"精度向上","detail":"推計から、サプライヤーから実際の排出量や再エネ比率を集める一次データ収集へ移行します。Tier1への依頼様式の標準化、データ品質の検証、Tier2への展開方法を設計します。CDPサプライチェーンプログラム等の既存枠組みの活用も選択肢です。データ基盤は開示と投資家対話の信頼性を左右する論点となります。"},{"name":"削減目標と調達基準への反映","role":"戦略具体化","detail":"把握した排出量をもとに、SBT整合の削減目標やサプライヤーエンゲージメント目標を検討します。調達基準に排出量報告や再エネ要件を段階的に組み込む際は、取引先の負担や代替可能性を踏まえます。特定の電力会社・契約形態を推奨するものではなく、要件は自社の方針と取引関係に応じて設計することが重要です。"},{"name":"開示・ガバナンスへの統合","role":"運用定着","detail":"収集データと取組をISSB/IFRS S2やSSBJの方向性に沿って開示できる形に整え、取締役会への報告やKPIモニタリングに組み込みます。経理・サステナ・調達・IRが連携し、進捗と財務影響を継続的に経営層へ報告する体制を整備します。これにより、サプライチェーンCN戦略が一過性でなく経営に定着します。"}];
const caseScenarios = [{"title":"大手の要請を受けるTier1部品メーカー(プライム上場)","before":"Scope1・2は把握済みだが、自社が調達する原材料(Scope3カテゴリ1)の排出量は支出ベースの概算にとどまり、主要取引先からの排出量報告・再エネ調達の要請に体系的に対応できていない状態。","after":"ホットスポット品目を特定し、上位サプライヤーから一次データを収集する体制を整備。CDP回答やSBT整合の目標設定を進め、調達基準に排出量報告の項目を段階導入。取締役会へ進捗を定期報告する運用へ。","result":"取引先要請への対応力が高まり、受注継続・新規取引の観点でリスク低減が期待できます。開示品質の向上は投資家対話にも資する見込みです。効果の程度は事業構造・取引関係により異なる目安です。"},{"title":"Tier1からの展開要請を受ける中小Tier2サプライヤー(非上場)","before":"排出量の算定経験が乏しく、取引先(Tier1)からの排出量データ提出や再エネ比率の照会に対し、何をどう報告すべきか定まっていない。専任体制も限られ、対応コストへの懸念が大きい状態。","after":"まずScope1・2の把握から着手し、簡易な算定と報告様式を整備。取引先が参加するCDPサプライチェーンプログラム等を通じた報告に対応。再エネ要件は自社の方針と取引関係を踏まえ段階的に検討。","result":"取引先要請に最低限応えられる体制が整い、取引継続上の不確実性の低減が期待できます。過度な初期投資を避け段階対応とすることで、財務負担を抑えた進め方が論点。効果は実態により異なる目安です。"},{"title":"サプライヤーに要請する側の発注企業(プライム上場大手)","before":"自社のScope3カテゴリ1が排出量の大宗を占めるが、多数のサプライヤーからのデータ収集は概算中心で、削減に向けたサプライヤーエンゲージメントの仕組みが未整備の状態。","after":"重要サプライヤーを特定し、CDPサプライチェーンプログラム等で排出量開示を依頼。SBTのサプライヤーエンゲージメント目標を検討し、調達基準に排出量報告・再エネ要件を段階導入。支援メニューも併せて整備。","result":"Scope3データの精度と削減の実効性向上が期待でき、ISSB/IFRS S2方向の開示に資する見込みです。取引先への要請は中立的・段階的に設計することが重要で、効果は取組の進度により異なる目安です。"}];
const dataNotes = [{"label":"数値・前提の取扱い","detail":"本記事では推測単価や憶測の変動率は記載しません。Scope3のカテゴリ構成や排出量の大小関係は一般的傾向として述べており、実数値は契約条件・使用実態・事業構造により異なります。代表シナリオはあくまで目安であり、特定企業の実額を断定するものではありません。"},{"label":"制度・枠組みの出典","detail":"Scope1/2/3の定義やカテゴリ区分はGHGプロトコル、目標設定はSBT(SBTi)、開示の枠組みはISSB(IFRS S1/S2)・SSBJ、質問書・サプライチェーンプログラムはCDPの公開情報に基づき整理しています(2025年10月時点)。TCFDは2023年に解散し、枠組みはISSB/IFRS S2へ引き継がれています。"},{"label":"公的情報の参照範囲","detail":"制度や政策の動向は、金融庁、経済産業省、環境省、東証(JPX)、GXリーグ等の公開情報、および各社統合報告書の公開事例から整理しています。大手のCN目標やサプライヤー要請は公表情報の一般論として言及し、特定社の優劣評価は行いません。最新の制度状況は各公式情報をご確認ください。"},{"label":"算定精度の限界","detail":"Scope3は支出ベースの推計から一次データへ移行するほど精度が高まりますが、上流の取引関係が複雑なほど完全な把握は容易ではありません。算定方法・対象範囲・前提により結果は変動します。開示にあたっては前提条件と限界を明示し、過度な精緻化の主張は避けることが望ましい点に留意が必要です。"}];
const governance = [{"label":"取締役会への報告","detail":"サプライチェーンCNは事業継続・開示・投資家評価に関わるため、取締役会への定期報告事項に位置づけることが論点です。Scope3の把握状況、削減目標の進捗、調達基準への反映、主要取引先からの要請対応などを経営アジェンダとして共有し、監督機能を働かせる体制が望まれます。"},{"label":"部門横断の連携","detail":"経理(データ・財務影響)、サステナビリティ(算定・目標)、調達(サプライヤー対応・基準設計)、IR(開示・投資家対話)の連携が不可欠です。CFOは横串の調整役として、データの整合性と開示の一貫性を担保します。部門間で前提や定義を揃えることが、信頼性ある開示と効率的な運用の前提となります。"},{"label":"KPIとモニタリング","detail":"Scope3の算定カバー率、一次データ比率、主要サプライヤーの目標設定・再エネ調達状況、CDP回答状況などをKPIとして設定し、定期的にモニタリングします。CFOは財務指標とこれらの非財務KPIを接続し、進捗を可視化することで、経営判断と外部開示の双方に資する管理を実現します。"},{"label":"サプライヤーとの公正な関係","detail":"要請する側の発注企業は、データ提出や再エネ要件の組込みが取引先に過度な負担や不公正を生まないよう配慮することが重要です。段階導入・支援メニュー・中立的な基準設計を心がけ、特定の電力会社・契約形態を強制しない運用が望まれます。下請関係の公正性に関する一般的な配慮も論点となります。"}];
const viewpoints = [{"label":"リスクと機会の両面評価","detail":"サプライチェーンCNは、取引継続・受注機会という事業機会と、対応遅れによる取引喪失・開示評価低下というリスクの両面を持ちます。CFO・経営層は、短期コストだけでなく中長期の競争力・資本市場評価を踏まえ、投資の優先順位を判断することが論点です。これは一般的な情報整理であり投資判断の助言ではありません。"},{"label":"投資家対話での説明力","detail":"投資家はScope3の把握状況や削減の実効性、目標との整合に関心を持ちます。算定の前提・限界を率直に示しつつ、改善の道筋を語れることが対話の質を高めます。過度に精緻さを主張せず、データ整備の段階と今後の計画を一貫して説明する姿勢が、資本市場での信頼につながる観点です。"},{"label":"再エネ要件の位置づけ","detail":"調達基準への再エネ要件組込みはScope3削減の有力な手段ですが、取引先の事情や地域の電力事情により実現度は異なります。特定の電力会社・契約形態を推奨するものではなく、複数の選択肢の中から取引先が自社に適した方法を選べる中立的な設計が望ましい観点です。要件は段階的に検討することが現実的です。"},{"label":"自社の立ち位置の見極め","detail":"自社が要請を受ける側(Tier1・Tier2)か、要請する側(発注企業)かで取るべき打ち手は異なります。受ける側は取引継続のための対応力、する側はサプライヤー支援とデータ収集の仕組みが論点です。両方の側面を持つ企業も多く、立ち位置を整理したうえで戦略を設計することが経営判断の出発点です。"},{"label":"開示制度の動向把握","detail":"ISSB/IFRS S2やSSBJの基準動向、各国の開示要請の進展は、Scope3対応の優先度に影響します。経営層は制度の最新状況を継続的に把握し、自社の準備状況とのギャップを早期に認識することが重要です。制度は変化するため、過度な先取り投資と対応遅れの双方を避けるバランスが論点となります。"}];
const cautions = [{"label":"Scope3=自社の直接削減ではない","detail":"Scope3は他社の活動に伴う間接排出が中心で、自社が直接コントロールしにくい点に留意が必要です。完全な把握や急速な削減を一律に求めるのは現実的でない場合があります。把握の段階性を前提に、重要領域から着手する考え方が、誤解を避けるうえで重要です。実態は事業構造により異なります。"},{"label":"推計値の過信を避ける","detail":"支出ベースの推計は便利ですが精度に限界があります。これを確定値のように扱うと、開示や投資家対話で信頼を損なうおそれがあります。前提・対象範囲・算定方法を明示し、一次データへの移行計画とあわせて説明することが望ましく、数値を断定的に扱わない姿勢が留意点です。"},{"label":"取引先への過度な負担","detail":"要請する側がデータ提出や再エネ要件を急激に課すと、特にTier2の中小サプライヤーに過度な負担を生じさせ、取引関係を損なうおそれがあります。段階導入や支援を伴わせ、公正な関係を保つ配慮が必要です。下請取引の公正性に関する一般的な配慮も忘れてはならない留意点です。"},{"label":"特定の手段の強制という誤解","detail":"再エネ要件の組込みは、特定の電力会社・契約形態を強制するものではありません。本記事は中立的・非営利の立場から一般的な情報を整理しており、特定の手段を推奨するものではありません。取引先が複数の選択肢から自社に適した方法を選べる設計が望ましい点を誤解しないことが重要です。"},{"label":"制度の現状の取り違え","detail":"TCFDは2023年に解散し、気候関連開示の枠組みはISSB/IFRS S2へ引き継がれています。古い情報のままTCFDを現行の主体と捉えると、開示対応の方向性を誤るおそれがあります。ISSB・SSBJ・SBT・CDP・GHGプロトコルなど各枠組みの正式名称と現状を正確に把握することが留意点です。"}];
const checklist = ["Scope3の15カテゴリで自社の排出構造を試算したか","カテゴリ1などホットスポットを特定したか","支出ベースから一次データへの移行計画があるか","主要サプライヤーからの排出量収集体制を整えたか","CDPサプライチェーンプログラム等の活用を検討したか","SBT整合の削減目標・エンゲージメント目標を検討したか","調達基準への再エネ要件は段階的・中立的に設計したか","ISSB/IFRS S2・SSBJの開示方向と整合しているか","経理・サステナ・調達・IRの連携体制があるか","取締役会への定期報告とKPIを設定したか","取引先への過度な負担を避ける配慮をしたか","算定の前提・限界を開示で明示する方針か"];
const simulatorCtaBullets = ["電気料金の上昇・高騰リスクを代表シナリオで把握","業種・規模に応じた電気代の目安を試算","Scope2・コスト管理の検討の出発点として活用","公開情報・制度値ベースで中立的に整理"];
const faqItems = [{"question":"Scope3とは何で、なぜCFO・経営層が関与すべきなのですか。","answer":"Scope3は自社の事業活動に関連する他社からの間接排出で、GHGプロトコルで上流・下流の15カテゴリに整理されます。多くの企業で購入した製品・サービス(カテゴリ1)を含むScope3が排出量の大半を占めやすく、開示・投資家評価・取引継続といった財務・経営の論点に直結します。そのため経理・調達・IRを横断するCFO・経営層の関与が重要です。実態は事業構造により異なります。"},{"question":"記載されている数値や事例は正確なのですか。","answer":"本記事では推測単価や憶測の変動率は記載していません。Scope3のカテゴリ構成や排出量の大小は一般的傾向として述べ、実数値は契約条件・使用実態・事業構造により異なります。caseScenariosは公開情報をもとにした代表シナリオであり目安です。制度はGHGプロトコル、SBT、ISSB/IFRS S2、SSBJ、CDP、金融庁・経産省・環境省・東証等の公開情報から2025年10月時点で整理しています。"},{"question":"この記事は特定の電力会社を推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場であり、特定の電力会社・契約形態を推奨するものではありません。調達基準への再エネ要件組込みについても、特定の手段を強制するものではなく、取引先が複数の選択肢から自社に適した方法を選べる中立的な設計が望ましいという考え方を示しています。本記事は一般的な情報整理であり、投資判断や会計監査の助言ではありません。"},{"question":"Tier1とTier2へのCN要請はどのように広がるのですか。","answer":"完成車・電機などの大手企業が公表するCN目標(特定社の優劣を評価するものではありません)の達成には、自社のScope3削減が必要となるため、直接取引先であるTier1に排出量把握や削減、再エネ調達を求める動きが一般化しています。Tier1はさらにTier2へ同様の対応を展開することがあり、要請が階層的に伝播します。これにより中小サプライヤーにも対応が及ぶ構図となります。"},{"question":"一次データの収集はなぜ重要なのですか。","answer":"Scope3は当初、支出ベースなどの推計で算定されることが多いですが、精度に限界があります。サプライヤーから実際の排出量や再エネ比率といった一次データを集めることで、算定精度が高まり、開示や投資家対話の信頼性が向上します。CDPサプライチェーンプログラム等の既存枠組みの活用も選択肢です。ただし上流が複雑なほど完全な把握は容易でなく、段階的な移行が現実的です。"},{"question":"SBTやCDPサプライチェーンプログラムとはどのような関係がありますか。","answer":"SBT(SBTi)はパリ協定整合の削減目標の枠組みで、Scope3についても目標やサプライヤーエンゲージメント目標を求めます。CDPサプライチェーンプログラムは、発注企業がサプライヤーに環境情報の開示を依頼する仕組みです。両者は、大手がTier1に目標設定や排出量報告を促し、それがTier2へ展開する流れと結びつきます。要請を受ける側・する側の双方で整合の取り方が実務論点となります。"},{"question":"TCFDとISSBの関係はどうなっていますか。","answer":"TCFD(気候関連財務情報開示タスクフォース)は2023年に解散し、気候関連開示の枠組みはISSB(国際サステナビリティ基準審議会)のIFRS S2へ引き継がれました。IFRS S2はScope3を含む排出開示の方向性を示し、日本ではSSBJが基準開発を進めています。古い理解のままTCFDを現行主体と捉えると方向性を誤るため、各枠組みの正式名称と現状を正確に把握することが重要です。"},{"question":"再エネ要件を調達基準に組み込む際の注意点は何ですか。","answer":"再エネ要件はScope3削減の有力な手段ですが、取引先の地域・電力事情や経営体力により実現度が異なります。急激に課すと、特にTier2の中小サプライヤーに過度な負担を生じさせ、取引関係を損なうおそれがあります。段階導入や支援を伴わせ、公正な関係を保つ配慮が必要です。特定の電力会社・契約形態を強制せず、取引先が選べる中立的な設計が望ましい点に留意してください。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"金融庁（サステナビリティ情報の開示・有価証券報告書）","url":"https://www.fsa.go.jp/"},{"name":"IFRS財団 ISSB（IFRS S1/S2 サステナビリティ開示基準）","url":"https://www.ifrs.org/"},{"name":"経済産業省（GX・カーボンニュートラル・エネルギー政策）","url":"https://www.meti.go.jp/"},{"name":"環境省（温室効果ガス排出量算定・SHK制度・GHGプロトコル）","url":"https://www.env.go.jp/"},{"name":"日本取引所グループ JPX（コーポレートガバナンス・開示）","url":"https://www.jpx.co.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/cfo-executive","title":"CFO・経営層向け電気代戦略（カテゴリ）","description":"CFO向け記事ハブ。"},{"href":"/articles/for-executives","title":"経営層・CFO向け（一覧）","description":"経営層向け記事のハブ。"},{"href":"/cfo-electricity-cost-basics","title":"CFOが知るべき電気代の基礎","description":"P/L上の位置づけと経営判断の起点。"},{"href":"/executive-board-report-template","title":"取締役会報告テンプレート","description":"電気代リスクの取締役会報告様式。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/scope2-reduction-cfo-responsibility","title":"Scope2削減とCFOの責任","description":"自社排出の削減と接続。"},{"href":"/executive-esg-electricity-disclosure","title":"経営層のESG電気代開示","description":"Scope3開示の論点。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"サプライヤー要請の枠組み。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"再エネ調達の選択肢。"},{"href":"/case-study-auto-tier1-ppa-introduction","title":"自動車部品Tier1×PPA導入の事例","description":"Tier1のCN対応ケース。"},{"href":"/case-study-semiconductor-re100-procurement","title":"半導体×RE100調達の事例","description":"高負荷業種のRE100ケース。"},{"href":"/cfo-tcfd-issb-electricity-disclosure","title":"TCFD/ISSB対応の電気代開示","description":"開示との接続(姉妹記事)。"},{"href":"/cfo-decarbonization-investor-narrative","title":"投資家向け脱炭素シナリオ説明","description":"対外説明(姉妹記事)。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"脱炭素投資の税制優遇。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CfoSupplyChainCnStrategyPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-05-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "CFO・経営層向け電気代戦略", url: "https://simulator.eic-jp.org/articles/cfo-executive" },
          { name: breadcrumbTitle, url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/cfo-executive" className="underline-offset-2 hover:underline">CFO・経営層向け電気代戦略</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">{breadcrumbTitle}</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{h1Text}</h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">{leadText}</p>
          <AuthorBadge publishedAt="2026-05-31" updatedAt="2026-05-31" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は公開された制度・公的データ・統合報告書等の公開事例から整理した一般的な情報・代表シナリオです。投資判断・会計監査・法務の助言ではありません。数値は目安であり、実数値は契約条件・使用実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/articles/cfo-executive" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">CFO・経営層向けカテゴリ</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">なぜCFO・経営層がこのテーマに取り組むべきか（背景と財務インパクト）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本テーマがCFO・経営層にとって重要である背景と、財務・開示・企業価値への影響を整理します。</p>
            <div className="mt-4 space-y-3">
              {background.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">押さえるべき制度・フレームワークと論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">押さえておくべき制度・フレームワークと主要論点を整理します。制度名は正式名称で記載しています。</p>
            <div className="mt-4 space-y-3">
              {frameworks.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実務対応のステップ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">実務として進める際の標準的なステップを整理します。単一の打ち手ではなく段階的な対応が前提です。</p>
            <div className="mt-4 space-y-3">
              {steps.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模・状況別の代表シナリオ（Before/After・公開情報ベース）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模・状況の異なる代表シナリオで、Before/Afterの考え方を整理します。記載は公開情報・制度に基づく代表シナリオの目安で、実際の状況は企業ごとに異なります。実在企業の事例ではありません。</p>
            <div className="mt-4 space-y-4">
              {caseScenarios.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">ねらい・効果（目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">数値・前提とデータ出典（捏造ゼロの考え方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値・記載は、公開された制度・公的データ・統合報告書等の公開事例から整理した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 本記事は2025年10月時点の公開情報（TCFD/ISSB公式・金融庁・経済産業省・環境省・東証（JPX）・GHGプロトコル・各社統合報告書の公開事例等）から整理した代表シナリオ・一般的情報です。投資判断・会計監査・法務の助言ではありません。数値は目安で、実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ガバナンス・他部門連携・KPI</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経理・サステナビリティ・調達・IRなど他部門との連携、取締役会報告、KPI設計の観点を整理します。</p>
            <div className="mt-4 space-y-3">
              {governance.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社の電気代と財務インパクトを試算・診断する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{d1CtaLead}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模・契約区分・エリアを選ぶだけで推定年間電気代と削減余地を試算できる{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              {" "}で、自社の電気代の水準感と感応度を把握する出発点になります。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">経営判断・投資家対話の観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">経営判断・投資家対話の観点から、総合的に検討すべきポイントを整理します。</p>
            <div className="mt-4 space-y-3">
              {viewpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">留意点・よくある誤解</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本テーマで陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
            <div className="mt-4 space-y-3">
              {cautions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">CFO・経営層向けチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">自社で取り組みを進めるための確認項目です。現状把握から着手しましょう。</p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklist.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで自社の電気代と上振れリスクを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{simulatorCtaLead}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              {simulatorCtaBullets.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電力単価・エリア別単価の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、予算策定・開示・投資家対話の判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-31" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代・財務インパクトを試算する"
            description="開示・予算・投資家対話の前提として、自社の電気代の水準感と上振れリスクを把握しておくことが有効です。シミュレーターと業種別電気代計算機で、中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約・脱炭素・開示の論点を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、CFO・経営層の電力・エネルギー戦略（開示・予算・調達・投資家対話）の判断材料を整理します。初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
