import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "M&A時の電力契約デューデリジェンス完全ガイド｜契約承継・燃調リスク・脱炭素資産評価（CFO向け）";
const pageDescription = "M&A・事業承継時の電力契約デューデリジェンスを、契約承継・燃料費調整リスク・PPAや発電設備の資産評価・脱炭素の簿外リスクの観点でCFO向けに整理。公開情報に基づく一般的整理で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/cfo-ma-due-diligence-electricity";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["M&A 電力契約 デューデリジェンス","電力 契約承継 チェンジオブコントロール","燃料費調整 リスク M&A","PPA 資産評価","PMI 電力 最適化"],
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

const h1Text = "M&A時の電力契約デューデリジェンス完全ガイド｜契約承継・燃調リスク・脱炭素資産評価";
const breadcrumbTitle = "M&A時の電力契約デューデリジェンス";
const leadText = "M&A(買収・事業承継)において、電力契約は見落とされやすい一方、承継可否・違約金・市場連動エクスポージャー・脱炭素対応など財務とリスクに直結する論点を多く含みます。本記事は公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。CFO・経営企画が電力契約デューデリジェンス(DD)で何を確認し、PMI(統合後)でどう最適化するかを、承継・違約金・PPA・簿外リスクの観点から整理します。投資判断・会計監査の助言ではなく、実務の論点を網羅的に把握するための整理です。";
const d1CtaLead = "対象会社や自社の電力コスト水準を把握する第一歩として、業種別の代表的な使用実態に基づく電気代の試算が役立ちます。業種別電気代計算機で自社・対象事業の規模感を試算し、DDやPMIでのコスト評価の出発点としてご活用ください。表示される金額は公開情報に基づく目安であり、実数値は契約条件・使用実態により異なります。";
const simulatorCtaLead = "M&AやPMIで電力契約を評価する際は、自社の電気料金が市場・制度の変動にどの程度さらされているかを把握することが出発点になります。リスクシミュレーターで料金上昇・高騰リスクの度合いを診断し、買収後の統合計画やリスク評価の検討材料としてご活用ください。診断結果は公開情報に基づく一般的な目安であり、特定の電力会社・契約形態を推奨するものではありません。";
const whatYouLearn = ["M&A時に電力契約DDで確認すべき承継可否・チェンジオブコントロール条項の論点","契約期間・解約違約金・燃料費調整・市場連動が買収価格やキャッシュフローに与える影響の捉え方","PPAやオンサイト発電設備など、電力関連の資産・負債・簿外リスクの評価視点","再エネ調達契約や脱炭素コミットメントの引継ぎがバリュエーションと開示に及ぼす意味","PMIフェーズで電力契約を最適化・統合する際のガバナンスと実務ステップ"];
const background = [{"label":"電力契約はDDの盲点になりやすい","detail":"M&Aの財務・法務DDでは賃貸借や金融契約が重点化される一方、電力契約は定型的とみなされ精査が後回しになりがちです。しかし契約期間・違約金・燃料費調整・市場連動の有無は対象会社の将来コストとキャッシュフローを左右し、結果としてバリュエーションや表明保証の対象に影響します。経営層は電力をユーティリティ費目でなく承継すべき契約資産・負債として捉える視点が求められます。"},{"label":"市場連動エクスポージャーの財務インパクト","detail":"対象会社が市場連動型や燃料費調整の上限撤廃された契約を持つ場合、卸電力市場や燃料価格の変動が将来コストに直接波及します。買収後の損益計画やコベナンツ前提に影響するため、契約の価格決定メカニズムと変動リスクの把握が重要です。実際の影響額は契約条件・使用実態により異なり、代表シナリオや目安として幅をもって評価することが実務的です。"},{"label":"脱炭素コミットの簿外リスク","detail":"対象会社がSBT(SBTi)やRE100などの目標、あるいは取引先からの脱炭素要請を負っている場合、再エネ調達の追加コストや未達リスクが簿外で存在し得ます。これらは財務諸表に明示されにくい一方、買収後にCFOが引き継ぐ将来負担となります。気候関連の開示枠組みがISSB/IFRS S2へ移行する中、Scope1/2排出に関わる電力調達は経営リスクとして可視化が進んでいます。"},{"label":"最終保障供給に陥るリスクの承継","detail":"対象会社が小売電気事業者との契約更改に難航している、あるいは供給契約が不安定な状態にある場合、買収後に最終保障供給(セーフティネット)へ移行し割高な料金が発生するリスクを引き継ぐ可能性があります。これは事業継続性とコストの両面に関わるため、契約の安定性と更改見通しをDD段階で確認する意義があります。"},{"label":"投資家・取締役会への説明責任","detail":"買収後の統合価値や想定シナジーを投資家・取締役会へ説明する際、エネルギーコストとその変動リスクは無視できない要素です。電力契約に潜むリスクを未把握のまま投資判断を行うと、買収後の業績乖離やのれん評価の議論につながりかねません。経営層は電力を含むユーティリティリスクを投資ストーリーの前提として整理しておくことが望まれます。"}];
const frameworks = [{"label":"電力契約の承継可否とCOC条項","detail":"株式譲渡では契約主体が変わらないため電力契約は原則承継されますが、チェンジオブコントロール(COC)条項により相手方の同意や解約権が発生する場合があります。事業譲渡・会社分割では契約の個別承継や相手方同意が必要となることが一般的です。スキームごとに承継の前提が異なるため、契約書の譲渡制限・COC条項の有無を法務DDと連携して確認することが基本となります。"},{"label":"契約期間・違約金・価格条項の精査","detail":"契約期間の残存、中途解約時の違約金、燃料費調整や市場連動の価格決定メカニズムは、買収後のコストとPMIでの再交渉余地を規定します。長期固定契約は安定性をもたらす一方で見直し自由度を制限し、市場連動は柔軟性と引き換えに変動リスクを内包します。優劣ではなく自社のリスク許容度と統合方針に照らして評価する視点が実務的です。"},{"label":"PPA・自家発電設備の資産負債評価","detail":"コーポレートPPAやオンサイトPPA、自家発電・蓄電設備を対象会社が保有・契約している場合、長期購入義務や設備の資産価値・撤去義務・リース会計上の扱いが論点となります。契約形態によってはオフバランス・オンバランスの判定や長期コミットの開示が必要になり得ます。会計・税務の専門家と連携し、実態に即して評価することが求められます。"},{"label":"ISSB/IFRS S2と気候関連リスクの開示","detail":"TCFD(気候関連財務情報開示タスクフォース)は2023年に解散し、開示の枠組みはISSB(国際サステナビリティ基準審議会)のIFRS S1/S2、国内ではSSBJ基準へ引き継がれています。買収により対象会社のScope1/2/3排出や再エネ調達状況が連結に統合されるため、買収後のGHG排出量と気候関連目標への影響を開示観点で事前に把握する意義があります。"}];
const steps = [{"name":"電力契約の棚卸しと条項精査","role":"情報収集","detail":"対象会社の全拠点の電力契約・PPA・自家発電設備を一覧化し、契約期間・違約金・価格条項(燃料費調整・市場連動)・COC条項・承継条件を精査します。データルームの不足情報はQ&Aで補完し、法務DDと連携して譲渡制限の有無を確認します。拠点数が多い場合は影響度の大きい高圧・特別高圧契約から優先的に整理することが実務的です。"},{"name":"リスクとコストの定量・定性評価","role":"リスク評価","detail":"市場連動エクスポージャー、違約金、最終保障供給リスク、脱炭素未達リスクなどを代表シナリオに基づき定量・定性で評価します。数値は公開された制度値・統計・公開事例のレンジに基づき、目安として幅をもって示し、実数値は契約条件・使用実態により異なる旨を併記します。バリュエーションや表明保証への反映可否を財務・法務と協議します。"},{"name":"スキームと契約承継方針の決定","role":"意思決定","detail":"株式譲渡・事業譲渡・会社分割などスキームごとに電力契約の承継可否が異なるため、DD結果を踏まえて承継方針を決定します。COC条項により相手方同意が必要な場合は、クロージング前の通知・同意取得の段取りを設計します。供給の継続性を確保しつつ、特定の事業者への偏りを避け中立的に選択肢を検討することが望まれます。"},{"name":"PMIでの契約最適化と統合","role":"統合実行","detail":"クロージング後のPMIフェーズで、買収側・対象会社の電力契約を統合的に見直し、規模拡大による交渉余地や脱炭素方針の統一を図ります。最適化は特定の契約形態を推奨するものではなく、自社のリスク許容度・コスト・開示方針に照らして判断します。統合後のKPI(コスト・排出量)を設定し、取締役会・投資家への報告体制を整えます。"}];
const caseScenarios = [{"title":"製造業(プライム上場大手)の買収","before":"買収対象の製造子会社が特別高圧・高圧の複数契約を保有し、一部に燃料費調整や市場連動の価格条項が含まれ、将来コストの変動幅が不透明な状態でした。","after":"DDで価格決定メカニズム・契約期間・違約金・COC条項を棚卸しし、市場連動エクスポージャーを代表シナリオで幅をもって評価のうえ、PMIでの再交渉方針を整理しました。","result":"電力コストの変動リスクが投資判断の前提として可視化され、PMI計画に組み込まれました。実際の影響額は契約条件・使用実態により異なり、目安としての整理にとどまります。"},{"title":"多店舗小売業の買収","before":"全国に多数の店舗を持つ対象会社が拠点ごとにばらばらの低圧・高圧契約を抱え、契約条件と更改状況が一元管理されておらず承継可否も不明確でした。","after":"拠点別に契約を一覧化し、解約違約金・更改時期・最終保障供給リスクを点検。事業譲渡スキームに伴う契約の個別承継・同意取得の段取りを法務と連携して設計しました。","result":"クロージング後の供給継続性が確保され、PMIで契約の標準化・集約の検討余地が把握できました。最適化は中立的に選択肢を比較する前提であり、特定事業者を推奨するものではありません。"},{"title":"インフラ系事業の承継(非上場大企業)","before":"事業承継対象が長期のコーポレートPPAや自家発電設備を保有し、長期購入義務・設備の資産価値・脱炭素コミットの引継ぎが財務・開示の論点となっていました。","after":"PPAの残存期間・購入義務・会計上の扱い、設備の資産負債・撤去義務、SBTやRE100関連の目標承継を会計・サステナ部門と連携して評価しました。","result":"長期コミットと簿外リスクが定性的に整理され、承継後の開示・KPI設計に反映されました。会計判定は専門家と連携し、一般的な情報整理として位置づけています。"}];
const dataNotes = [{"label":"数値はすべて公開情報・制度値に基づく","detail":"本記事で参照する制度・枠組みは、TCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、SBTi、各社統合報告書の公開事例から整理(2025年10月時点)したものです。推測単価や憶測の変動率は記載していません。具体的な金額・変動幅は契約条件・使用実態・市場環境により異なるため、代表シナリオ・目安として理解してください。"},{"label":"代表シナリオは断定ではなく整理の前提","detail":"caseScenariosのbefore/after/resultは公開情報をもとにした典型的な状況の整理であり、特定企業の実例や実額を断定するものではありません。各社の契約構成・拠点数・業種特性により論点の重みは異なります。実際のDDでは対象会社の固有情報に基づき定量評価を行う必要があり、本記事はその論点を俯瞰するための整理です。"},{"label":"市場連動・燃料費調整の前提","detail":"電力コストの変動を論じる際は、卸電力市場価格や燃料費調整の動向が前提となりますが、これらは時期により大きく変動します。本記事では特定の単価や変動率を示さず、変動リスクが存在するという定性的な論点として扱っています。実数値の試算は最新の公開統計と対象会社の契約条件に基づき行うことが適切です。"},{"label":"開示枠組みの現状","detail":"気候関連開示はTCFD(2023年解散)からISSBのIFRS S1/S2へ枠組みが引き継がれ、国内ではSSBJ基準の整備が進んでいます。買収による連結範囲の変化はScope1/2/3排出や気候関連目標の集計に影響します。本記事は制度の現状を正確に反映するよう努めていますが、最新の適用時期・要件は各公式情報で確認してください。"}];
const governance = [{"label":"DDチームの部門横断体制","detail":"電力契約DDは財務・法務・調達・サステナ・経営企画が連携して進める必要があります。承継可否は法務、コスト評価は財務・調達、脱炭素コミットの引継ぎはサステナが主管し、CFO・経営企画が統括します。電力をユーティリティ費目として一部門に任せきりにせず、横断的なリスク評価体制を構築することがガバナンス上の要点です。"},{"label":"取締役会への報告と投資判断","detail":"電力契約に潜む違約金・市場連動・最終保障供給・脱炭素未達などのリスクは、投資判断の前提として取締役会に整理して報告することが望まれます。リスクの大きさと対応方針、バリュエーションや表明保証への反映可否を明示し、未把握のまま意思決定が行われることを避けます。中立的な情報整理として、特定の契約形態への偏りを排した説明が求められます。"},{"label":"PMIでのKPI設定とモニタリング","detail":"クロージング後は電力コスト・GHG排出量・契約更改状況などをKPIとして設定し、PMIの進捗をモニタリングします。買収側・対象会社の契約統合や脱炭素方針の整合を図り、効果を定期的に取締役会へ報告します。KPIは特定事業者の優劣評価でなく、自社の財務・開示方針に照らした管理指標として運用することが実務的です。"},{"label":"IR・開示部門との連携","detail":"買収により連結範囲が変わると、Scope1/2/3排出や気候関連目標、エネルギーコストの開示に影響します。IR・サステナビリティ報告の担当部門と早期に連携し、統合後の開示影響を把握することが重要です。ISSB/IFRS S2やSSBJの枠組みに沿って、投資家対話で説明できる形にデータを整理しておくことが望まれます。"}];
const viewpoints = [{"label":"電力リスクを投資ストーリーに織り込む","detail":"買収シナジーや統合価値を投資家へ説明する際、エネルギーコストとその変動リスクは前提条件の一つです。電力契約のリスクを未把握のまま投資ストーリーを描くと、買収後の業績乖離やのれん評価の議論を招きかねません。経営層は電力を含むユーティリティリスクを定量・定性で整理し、投資判断の透明性を高める視点が求められます。"},{"label":"脱炭素対応を価値とリスクの両面で評価","detail":"対象会社の再エネ調達やSBT・RE100などのコミットは、取引先要請への対応力という価値である一方、追加コストや未達リスクという負担でもあります。買収後にCFOが引き継ぐ将来負担として、価値とリスクの両面から評価することが望まれます。気候関連の開示が進む中、脱炭素対応はバリュエーションの一要素として無視できません。"},{"label":"契約形態は優劣でなく適合性で判断","detail":"長期固定・市場連動・PPAなどの契約形態には、それぞれ安定性・柔軟性・脱炭素対応といった特性があります。いずれかが一律に優れているわけではなく、自社のリスク許容度・統合方針・開示方針への適合性で判断することが実務的です。本記事は特定の電力会社・契約形態を推奨するものではなく、論点の整理を目的としています。"},{"label":"クロージング前後のリスク移転の明確化","detail":"電力契約に関するリスクをいつ誰が負うのかを、表明保証・補償条項・前提条件として契約交渉で明確にしておくことが重要です。違約金や承継不能による供給中断などのリスクは、売主・買主のいずれが負担するかを定義することで、買収後の想定外の負担を抑えられます。法務・財務と連携した設計が投資家対話でも説明しやすくなります。"},{"label":"中立的な情報整理としての位置づけ","detail":"本記事の内容は公開情報・制度に基づく一般的な情報整理であり、投資判断・会計監査の助言ではありません。実際のM&Aでは、対象会社の固有情報と最新の制度動向に基づき、財務・法務・会計の専門家と連携して判断する必要があります。特定の電力会社・契約形態を推奨するものではない点を、意思決定の前提として共有しておくことが望まれます。"}];
const cautions = [{"label":"株式譲渡でも自動承継とは限らない","detail":"株式譲渡では契約主体が変わらないため電力契約は原則承継されますが、COC条項により相手方の同意取得や解約権が発生する場合があります。すべての契約が自動的に問題なく引き継がれると誤解せず、契約書ごとに譲渡制限・COC条項の有無を確認することが必要です。スキーム選択と承継可否は法務DDと連携して慎重に評価してください。"},{"label":"違約金は契約書ごとに条件が異なる","detail":"中途解約時の違約金は契約期間・残存期間・契約種別により大きく異なり、一律の目安で判断することはできません。長期契約ほど違約金が大きくなる傾向がある一方、条項の設計は契約ごとに多様です。PMIで契約を見直す際は、解約コストと最適化メリットを個別に比較する必要があり、安易な解約判断は避けるべきです。"},{"label":"市場連動の変動を過小評価しない","detail":"市場連動型や燃料費調整の上限が外れた契約は、市場・燃料価格の変動を将来コストに直接反映します。過去の安定期の実績だけで将来を判断すると、変動局面でコストが想定を超えるリスクがあります。本記事では特定の変動率を示しませんが、変動リスクが存在する前提でシナリオを幅広く検討することが実務的です。"},{"label":"PPA・設備は会計判定が複雑","detail":"PPAや自家発電・蓄電設備は、長期購入義務・リース該当性・資産価値・撤去義務などの会計判定が複雑で、契約形態により扱いが変わります。簡易な評価で済ませず、会計・税務の専門家と連携して実態に即した判断を行う必要があります。オフバランス・オンバランスの判定を誤ると、買収後の財務影響を見誤るおそれがあります。"},{"label":"脱炭素コミットの引継ぎを見落とさない","detail":"対象会社が負うSBTやRE100、取引先からの脱炭素要請は、財務諸表に明示されにくい簿外の将来負担となり得ます。これらを見落とすと、買収後に再エネ調達の追加コストや未達リスクを想定外に引き継ぐことになります。サステナ部門と連携し、コミットの内容と達成見通しをDD段階で把握しておくことが望まれます。"}];
const checklist = ["対象会社の全拠点の電力契約を一覧化したか","契約期間と残存期間を契約ごとに確認したか","中途解約時の違約金条件を把握したか","燃料費調整・市場連動の価格条項を精査したか","COC条項・譲渡制限の有無を法務と確認したか","スキーム別の承継可否を整理したか","最終保障供給に陥るリスクを点検したか","PPA・自家発電設備の資産負債を評価したか","再エネ調達・脱炭素コミットの引継ぎを確認したか","Scope1/2/3排出への連結影響を把握したか","クロージング前後のリスク移転を明確化したか","PMIでのKPIと取締役会報告体制を設計したか"];
const simulatorCtaBullets = ["電気料金の上昇・高騰リスクを定量的に把握","市場連動・燃料費調整のエクスポージャーを意識した検討の出発点","PMIでのコスト評価・KPI設計の参考材料に","結果は公開情報に基づく目安で、実数値は契約条件により異なります"];
const faqItems = [{"question":"M&Aで電力契約はそのまま引き継がれますか","answer":"スキームにより異なります。株式譲渡では契約主体が変わらないため原則承継されますが、チェンジオブコントロール条項により相手方の同意取得や解約権が発生する場合があります。事業譲渡・会社分割では契約の個別承継や相手方同意が必要になることが一般的です。すべての契約が自動承継されると誤解せず、契約書ごとに譲渡制限・COC条項の有無を法務DDと連携して確認することが実務的です。"},{"question":"電力契約DDで最初に確認すべき論点は何ですか","answer":"まず全拠点の電力契約・PPA・自家発電設備を一覧化し、契約期間・残存期間・解約違約金・価格条項(燃料費調整・市場連動)・COC条項・承継条件を棚卸しすることが出発点です。そのうえで市場連動エクスポージャー、最終保障供給リスク、脱炭素コミットの引継ぎなど、影響度の大きい論点を優先的に評価します。拠点が多い場合は高圧・特別高圧契約から整理すると効率的です。"},{"question":"市場連動型の契約はどう評価すればよいですか","answer":"市場連動型や燃料費調整の上限が外れた契約は、卸電力市場や燃料価格の変動を将来コストに直接反映するため、買収後の損益計画に影響します。本記事では特定の変動率や単価を示しませんが、変動リスクが存在する前提で代表シナリオを幅広く検討することが実務的です。安定性と柔軟性はトレードオフであり、優劣でなく自社のリスク許容度との適合性で評価することが望まれます。"},{"question":"PPAや自家発電設備はDDでどう扱いますか","answer":"コーポレートPPAやオンサイト発電・蓄電設備は、長期購入義務・リース該当性・資産価値・撤去義務などの会計判定が複雑です。契約形態によりオフバランス・オンバランスの扱いが変わるため、会計・税務の専門家と連携して実態に即して評価する必要があります。長期コミットや簿外の将来負担を見落とすと買収後の財務影響を見誤るおそれがあるため、慎重な精査が求められます。"},{"question":"脱炭素対応はM&Aのバリュエーションに影響しますか","answer":"対象会社が負うSBT(SBTi)やRE100、取引先からの脱炭素要請は、価値とリスクの両面でバリュエーションに関わり得ます。再エネ調達の追加コストや未達リスクは財務諸表に明示されにくい簿外負担となるため、買収後にCFOが引き継ぐ将来負担として評価することが望まれます。気候関連開示がISSB/IFRS S2へ移行する中、脱炭素対応は無視できない検討要素となっています。"},{"question":"記事の数値や事例は正確ですか","answer":"本記事の制度・枠組みはTCFD/ISSB公式、金融庁、経済産業省、環境省、東証(JPX)、GHGプロトコル、SBTi、各社統合報告書の公開事例から整理(2025年10月時点)したものです。代表シナリオのbefore/after/resultは公開情報に基づく典型的状況の整理であり、特定企業の実例や実額を断定するものではありません。具体的な金額・変動幅は契約条件・使用実態により異なるため、目安として理解してください。"},{"question":"特定の電力会社や契約形態を推奨していますか","answer":"いいえ。本記事は中立・非営利の社団法人の視点による公開情報・制度に基づく一般的な情報整理であり、特定の電力会社・契約形態を推奨するものではありません。長期固定・市場連動・PPAなどの契約形態にはそれぞれ特性があり、優劣ではなく自社のリスク許容度・統合方針・開示方針への適合性で判断することが実務的です。投資判断・会計監査の助言ではない点もご理解ください。"},{"question":"PMIで電力契約はどう最適化すればよいですか","answer":"クロージング後のPMIでは、買収側・対象会社の契約を統合的に見直し、規模拡大による交渉余地や脱炭素方針の統一を図ることが論点となります。ただし解約違約金と最適化メリットを個別に比較し、安易な解約は避けるべきです。最適化は特定の契約形態を推奨するものではなく、自社の財務・開示方針に照らして判断し、コスト・排出量などのKPIで進捗を取締役会へ報告する体制を整えることが望まれます。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"金融庁（サステナビリティ情報の開示・有価証券報告書）","url":"https://www.fsa.go.jp/"},{"name":"IFRS財団 ISSB（IFRS S1/S2 サステナビリティ開示基準）","url":"https://www.ifrs.org/"},{"name":"経済産業省（GX・カーボンニュートラル・エネルギー政策）","url":"https://www.meti.go.jp/"},{"name":"環境省（温室効果ガス排出量算定・SHK制度・GHGプロトコル）","url":"https://www.env.go.jp/"},{"name":"日本取引所グループ JPX（コーポレートガバナンス・開示）","url":"https://www.jpx.co.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/cfo-executive","title":"CFO・経営層向け電気代戦略（カテゴリ）","description":"CFO向け記事ハブ。"},{"href":"/articles/for-executives","title":"経営層・CFO向け（一覧）","description":"経営層向け記事のハブ。"},{"href":"/cfo-electricity-cost-basics","title":"CFOが知るべき電気代の基礎","description":"P/L上の位置づけと経営判断の起点。"},{"href":"/executive-board-report-template","title":"取締役会報告テンプレート","description":"電気代リスクの取締役会報告様式。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/executive-ma-electricity-due-diligence","title":"M&Aの電力デューデリジェンス（経営層）","description":"経営層視点のM&A電力DD。"},{"href":"/executive-business-continuity-risk","title":"経営層が見る事業継続リスク","description":"BCP・供給リスクの評価。"},{"href":"/manufacturing-cfo-electricity-strategy","title":"製造業CFOの電気代戦略","description":"製造業買収時の論点。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"PPA契約・資産の評価。"},{"href":"/executive-multi-site-cost-management","title":"多拠点のコスト管理（経営層）","description":"拠点群の契約棚卸し。"},{"href":"/cfo-global-consolidated-energy-management","title":"海外拠点 連結エネマネ","description":"クロスボーダーM&A(姉妹記事)。"},{"href":"/cfo-supply-chain-cn-strategy","title":"サプライチェーンCN戦略（Scope3対応）","description":"被買収先のCN負債(姉妹記事)。"},{"href":"/case-study-manufacturer-medium-contract-review","title":"中堅製造業×契約見直しの事例","description":"PMI後の契約最適化ケース。"},{"href":"/business-electricity-price-trend-10-years","title":"法人電気料金の10年推移","description":"燃調・市況の長期トレンド。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CfoMaDueDiligenceElectricityPage() {
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
