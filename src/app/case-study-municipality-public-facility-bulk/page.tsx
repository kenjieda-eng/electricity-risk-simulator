import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "自治体公共施設の一括契約事例｜複数施設の統合入札で電気代を削減（代表シナリオ）";
const pageDescription = "自治体が、庁舎・学校・体育館など複数の公共施設を統合入札(一括契約)し電気代を抑えた代表シナリオを、公開事例から再構成して整理。新電力撤退リスクやゼロカーボンとの両立も整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-municipality-public-facility-bulk";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["自治体 公共施設 一括契約","統合入札 電気代","リバースオークション 電力","ゼロカーボンシティ","公共施設 新電力 撤退"],
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

const h1Text = "自治体公共施設×一括契約：複数施設の統合入札 代表事例";
const breadcrumbTitle = "自治体公共施設×一括契約の事例";
const leadText = "本記事は架空企業ならぬ架空自治体の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。庁舎・学校・図書館・体育館・上下水道施設など多数の公共施設を抱える自治体が、施設ごとにバラバラだった電力契約を「一括契約(統合入札)」へ集約し、調達コストの透明化と削減を図った代表事例を、中立的な立場から整理します。地方自治法上の契約手続きや新電力撤退リスク、ゼロカーボンシティ施策との両立まで、自治体固有の論点に踏み込んで解説します。";
const d1CtaLead = "自社・自施設が同様のケースに当てはまるかは、業種や規模、契約区分によって大きく変わります。業種別電気代計算機を使えば、施設の使用量や契約電力をもとに、現状の電気代水準と見直し余地の目安をかんたんに試算できます。一括契約や統合入札を検討する前段として、まずは自施設の現状を数値で把握することが、説得力のある調達設計の第一歩になります。";
const simulatorCtaLead = "自施設の電気代がどの程度の水準にあり、見直し余地がどれくらいあるのかは、使用量や契約電力をもとに試算してみないと分かりません。当センターのシミュレーターを使えば、現状のコスト水準や料金上昇リスクの目安を中立的な立場で把握できます。一括契約や統合入札を検討する前の現状把握として、また見直し後の効果検証の起点として、まずは数値で自施設の状況を確認してみてください。";
const whatYouLearn = ["複数公共施設の電力を一括契約(統合入札)に集約する基本的な仕組みと狙い","庁舎・学校・図書館・体育館・上下水道など施設種別ごとの負荷特性の違い","入札・リバースオークションと地方自治法の契約手続きの関係と留意点","新電力撤退・最終保障供給という近年の調達リスクへの備え方","RE100・ゼロカーボンシティ・地域新電力と一括契約をどう両立させるか"];
const premise = [{"label":"業種特性(自治体・公共施設)","detail":"自治体は性格の異なる多数の施設を同時に運営します。執務中心の庁舎、空調・照明負荷が大きい学校や体育館、長時間開館の図書館、24時間連続運転のポンプを抱える上下水道施設などが代表例です。各施設は所管課がばらばらで、契約電力や使用実態の全体像を把握しづらいことが多く、これが一括契約による横断的な見直し余地を生みます。中立社団法人の立場として、特定事業者の優劣ではなく仕組みの理解を重視します。"},{"label":"規模(契約電力・施設数)","detail":"本シナリオでは、低圧の小規模施設から高圧・特別高圧の大規模施設まで数十施設を抱える自治体を代表モデルとします。契約電力の合計はキロワット規模で大きく、年間使用量も施設群全体では相当量に上ります。施設規模が混在するため、まとめ方(全施設一括か施設群別か)によって入札の競争性や応札事業者の集まり方が変わる点が、設計上の重要な論点になります。"},{"label":"契約区分(高圧・低圧の混在)","detail":"公共施設は特別高圧(大規模庁舎・浄水場など)、高圧(学校・体育館・中規模施設)、低圧(出張所・小規模施設)が混在します。契約区分ごとに需給管理や供給力確保のハードルが異なるため、一括入札では区分や地域でロット(入札単位)を分けるのが一般的です。本シナリオでも、区分横断で無理に一本化せず、競争が働く単位に整理した前提で考えます。"},{"label":"負荷パターン(施設種別で大きく異なる)","detail":"庁舎・学校は平日昼間に負荷が集中し休日・夜間は低い一方、上下水道のポンプ設備はほぼ24時間連続運転で負荷が平準的です。体育館やプールは利用時間帯やシーズンに偏り、図書館は開館時間帯の照明・空調が中心です。施設群全体で見ると負荷曲線が相互に補完し合うため、まとめて調達することで需給管理上の見通しが立てやすくなる側面があります。"},{"label":"コスト構造(基本料金と従量・燃調)","detail":"電気料金は基本料金(契約電力連動)、電力量料金(従量)、燃料費調整額、再エネ賦課金で構成されます。公共施設では契約電力の妥当性(デマンドの過大設定)や燃料費調整の変動が全体コストに大きく影響します。一括契約の見直しでは、単価(料金メニュー)だけでなく、施設ごとの契約電力の最適化やデマンド管理を併せて検討することが、持続的なコスト構造改善につながります。"}];
const beforeState = [{"label":"施設ごとのバラバラ契約","detail":"見直し前は、施設の建設時期や所管課ごとに個別に電力契約を結んでおり、契約条件や単価の妥当性を横断的に比較できていませんでした。古い契約のまま据え置かれた施設や、契約電力が実態より過大なまま放置された施設が混在し、全体最適の視点が欠けていた点が課題でした。"},{"label":"調達価格の不透明さ","detail":"各施設の単価がどのような水準にあるのか、競争を経て決まっているのかが見えにくく、議会や住民への説明責任の観点でも改善余地がありました。市場価格や他自治体の入札結果と比較する仕組みがなく、調達価格が適正かどうかを定量的に検証できていなかったことが、見直しの出発点になりました。"},{"label":"新電力撤退・最終保障供給のリスク","detail":"近年の燃料価格高騰局面で、入札に応じる新電力が減少したり、契約期間中に新電力が事業から撤退したりする事例が各地で発生しました。撤退時に一時的に最終保障供給へ移行すると割高な料金が生じる恐れがあり、安定供給の継続性をどう契約条件に織り込むかが、見直し前には十分整理されていませんでした。"},{"label":"ゼロカーボン施策との不整合","detail":"ゼロカーボンシティ宣言や環境基本計画で温室効果ガス削減目標を掲げていても、実際の電力調達では環境価値(非化石証書など)の扱いが施設ごとにばらつき、目標と調達実務が連動していませんでした。コスト削減と脱炭素の両立をどう設計するかが、見直し前から積み残された論点でした。"}];
const approaches = [{"name":"電力データの一元集約と契約電力の最適化","role":"現状把握の土台づくり","detail":"まず全施設の検針票・契約情報・デマンド記録を一元的に集約し、施設ごとの使用量・契約電力・単価を可視化しました。そのうえで、実際の最大需要に対して契約電力が過大な施設を抽出し、デマンド監視装置やBEMSの活用も視野に契約電力の見直し余地を整理します。一括入札の前提となる正確な需要データを揃えることが、競争性の高い調達設計の出発点になります。"},{"name":"施設群をロット分割した一括入札の設計","role":"競争性を確保する調達設計","detail":"全施設を一本化するのではなく、契約区分や地域・施設種別を考慮して複数のロット(入札単位)に分割し、それぞれで競争入札を実施する設計としました。ロットの組み方しだいで応札事業者数や入札価格が変わるため、過度に大きすぎず小さすぎない単位を探ります。地方自治法に基づく一般競争入札を基本としつつ、要求水準書で供給力や実績要件を明確化しました。"},{"name":"リバースオークションの活用","role":"価格競争の透明化","detail":"一部のロットでは、複数事業者が制限時間内に価格を下げていくリバースオークション方式を採用し、価格競争のプロセスを透明化しました。落札価格の根拠が時系列で記録されるため、議会・住民への説明責任を果たしやすくなります。ただし価格だけに偏ると安定供給や環境価値が軽視されかねないため、評価項目とのバランス設計が前提になります。"},{"name":"供給安定性・環境価値の契約条件への組み込み","role":"リスク管理と脱炭素の両立","detail":"撤退リスクに備え、供給力確保の要件や撤退時の引継ぎ・違約に関する条項、最終保障供給への移行手順を契約条件へ明記しました。あわせて、ゼロカーボンシティ施策と整合させるため、非化石証書や再エネメニューの選択肢、地域新電力の活用可能性を要求水準に組み込み、価格と環境価値・安定供給を総合評価する枠組みを整えました。"}];
const caseScenarios = [{"title":"小規模町村:低圧中心の十数施設を施設群一括へ","before":"庁舎・出張所・公民館など低圧中心の施設が個別契約で、単価のばらつきが大きい状態を目安とします。","after":"施設群をまとめて一括入札に切り替え、競争を働かせた結果、全体の電力コストを数%から十数%程度抑えられる代表シナリオです。","result":"削減率は数%〜十数%レンジが目安で、月数万円〜十数万円規模の改善が見込まれます。実数値は契約条件・使用実態により異なります。"},{"title":"中核市:高圧主体の数十施設を区分別ロットで統合入札","before":"学校・体育館・中規模庁舎など高圧施設が所管課ごとに個別契約で、調達価格の比較ができていない状態を目安とします。","after":"区分別・地域別にロットを分けた統合入札とリバースオークションを併用し、全体で数%〜十数%規模の削減を狙う代表シナリオです。","result":"削減率は数%〜十数%レンジが目安で、施設数が多いため年間では月数十万円規模の改善幅が想定されます。実数値は契約条件・使用実態により異なります。"},{"title":"施設群別:上下水道など連続運転施設を切り出して最適化","before":"24時間連続運転のポンプ・浄水場などが他施設と同一契約に紛れ、負荷特性に合った料金設計になっていない状態を目安とします。","after":"連続運転施設を別ロットとして切り出し、負荷率の高さを活かした料金メニューと契約電力最適化を組み合わせる代表シナリオです。","result":"削減率は数%〜十数%レンジが目安で、基本料金の見直しを含めると効果が積み上がる傾向です。実数値は契約条件・使用実態により異なります。"},{"title":"ゼロカーボン連動:再エネメニューと地域新電力を併用","before":"ゼロカーボンシティ宣言はあるものの、調達は価格のみで環境価値が反映されていない状態を目安とします。","after":"再エネメニューや非化石証書、地域新電力の活用を要求水準に組み込み、価格と環境価値を総合評価する代表シナリオです。","result":"コストは横ばい〜数%程度の変動レンジが目安で、脱炭素効果との両立を重視した設計となります。実数値は契約条件・使用実態により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterや削減率は、経済産業省・資源エネルギー庁の公開資料、SII(環境共創イニシアチブ)採択事例集、業界統計から再構成した2025年10月時点の代表シナリオ・目安です。特定の自治体の実績ではなく、精密な金額の断定を避け、削減率(%)レンジや規模感で表現しています。"},{"label":"削減率レンジの根拠","detail":"一括契約・統合入札による削減幅は、見直し前の契約水準や燃料費調整の局面、応札事業者数によって大きく変動します。本記事では断定を避け、数%〜十数%程度という幅で示しています。市況によっては削減効果が縮小したり、環境価値重視で横ばいになるケースもあります。実数値は契約条件・使用実態により異なります。"},{"label":"出典の扱い方","detail":"制度・規格名はRE100、ZEB、SII、GX、BEMS、FEMSなど正式名称を用いています。公開された統計・事例集を参照する際も、特定事業者の優劣比較や推奨は行わず、仕組みやレンジの理解に限定しています。中立・非営利の立場から、読者が自らの条件で検証できるよう前提を明示しています。"},{"label":"実額を断定しない理由","detail":"自治体ごとに施設構成・契約電力・地域・市況が異なるため、同じ手法でも結果は大きく分かれます。そのため本記事では月数万円〜月数十万円規模といった幅で目安を示し、精密な金額は提示していません。実際の効果は個別の試算・相見積を通じて確認する必要があります。"}];
const process = [{"label":"データ収集・現状把握","detail":"全施設の検針票、契約情報、デマンド記録、過去の使用量推移を所管課横断で収集し、一元的なデータベースに整理します。施設種別・契約区分・単価・契約電力を一覧化し、見直し余地の大きい施設や過大契約の有無を洗い出します。この段階の精度が、後の入札設計と効果検証の信頼性を左右します。"},{"label":"分析・調達設計","detail":"収集データをもとに負荷特性を分析し、施設群をどのロットに分けるか、どの契約区分を一括対象とするかを設計します。要求水準書では供給力・実績要件、撤退時の手当て、環境価値の扱いを明確化します。一般競争入札やリバースオークションのいずれを採るか、地方自治法の手続きと照らして方式を決定します。"},{"label":"相見積・入札の実施","detail":"設計したロットごとに公告を行い、複数事業者から応札を募ります。リバースオークション対象では価格競争のプロセスを記録し、透明性を確保します。応札が集まりにくいロットは条件を見直すなど、競争性を維持する調整を行います。価格だけでなく供給安定性・環境価値も含めた評価を実施します。"},{"label":"意思決定・効果検証","detail":"入札結果を庁内の財政・環境・各施設所管の関係課で共有し、契約締結の意思決定を行います。契約後は、想定した削減効果が実際に表れているかを使用量・料金データで継続的にモニタリングし、契約電力の再調整やデマンド管理の徹底につなげます。検証結果は次回入札の設計改善に反映します。"}];
const viewpoints = [{"label":"価格だけで判断しない","detail":"落札価格の安さは魅力的ですが、供給安定性・撤退リスク・環境価値を含めた総合的な視点が欠かせません。極端に安い応札は、契約期間中の撤退や条件変更につながる懸念もあるため、価格と継続性のバランスを評価することが中立的な判断の基本になります。"},{"label":"ロット設計の競争性","detail":"施設のまとめ方しだいで応札事業者数や価格が変わります。一本化すれば事務は簡素ですが、対応できる事業者が限られ競争が働きにくくなることもあります。逆に細分化しすぎると事務負担が増大します。競争性と事務効率のバランスをどう取るかを観点として持つことが重要です。"},{"label":"供給継続性の確保","detail":"新電力撤退や最終保障供給への移行リスクを踏まえ、撤退時の引継ぎ手順や供給力要件を契約条件にどう織り込むかを確認します。安価さと引き換えに継続性が損なわれないよう、リスク管理の観点を調達設計に組み込むことが、安定的な施設運営につながります。"},{"label":"脱炭素目標との整合","detail":"ゼロカーボンシティやRE100、ZEBといった環境目標と調達を連動させる視点です。価格のみで決めると環境価値が後回しになりがちなため、再エネメニューや非化石証書、地域新電力の活用をどこまで要求するかを、目標水準と照らして判断する観点が求められます。"},{"label":"説明責任と透明性","detail":"公共調達は議会・住民への説明責任が伴います。入札・リバースオークションの記録、評価基準、削減効果の検証結果を客観的に示せるかが重要です。プロセスの透明性を確保することで、調達の妥当性を対外的に説明でき、継続的な改善サイクルの基盤にもなります。"}];
const cautions = [{"label":"一括化すれば必ず安くなるとは限らない","detail":"一括契約は競争性を高める手段の一つですが、市況や応札状況によっては期待した削減幅に届かないこともあります。燃料費高騰局面では応札が減り、価格が下がりにくくなる場合もあります。一括化そのものを目的化せず、競争が働く設計になっているかを見極めることが大切です。"},{"label":"最終保障供給は割高になりやすい","detail":"新電力撤退などで一時的に最終保障供給へ移行すると、通常の契約より割高な料金が生じる場合があります。これはセーフティネットとしての位置づけであり、長期利用を前提とした料金ではありません。撤退リスクを契約条件で手当てし、移行が長引かない備えを整えておく必要があります。"},{"label":"地方自治法の手続きを軽視しない","detail":"公共調達は地方自治法に基づく契約手続きの遵守が前提です。一般競争入札の原則や随意契約の要件、リバースオークションの運用ルールを庁内で整理せずに進めると、後から手続き上の問題が生じかねません。手続きの適正性を確保したうえで効率化を図る姿勢が求められます。"},{"label":"環境価値とコストはトレードオフになりうる","detail":"再エネメニューや非化石証書を重視すると、価格は横ばい〜上昇方向になることがあります。脱炭素とコスト削減は必ずしも同時に最大化できるわけではなく、自治体の目標水準と財政状況に応じてどちらをどこまで優先するかの判断が必要です。両立の最適点は一律ではありません。"},{"label":"契約電力の最適化を忘れない","detail":"単価(メニュー)の見直しに目が向きがちですが、契約電力が実態より過大なままでは基本料金で無駄が生じ続けます。デマンド監視やBEMSを活用した契約電力の最適化は、入札による単価改善と並ぶ重要な削減要素です。両面から取り組むことで持続的な効果が得られます。"}];
const checklist = ["全施設の検針票と契約情報を一元的に集約したか","施設種別ごとの負荷特性を把握しているか","契約電力が実態より過大な施設を洗い出したか","契約区分(特別高圧・高圧・低圧)を整理したか","施設群のロット分割案を複数比較したか","一般競争入札か随意契約かの根拠を整理したか","リバースオークションの運用ルールを確認したか","供給力・実績要件を要求水準書に明記したか","新電力撤退時の引継ぎ条項を盛り込んだか","ゼロカーボン目標と環境価値の扱いを整合させたか","削減効果の検証指標を事前に決めたか","議会・住民への説明資料を準備したか"];
const simulatorCtaBullets = ["現状の電気代水準と見直し余地の目安を把握できる","契約電力や使用量から料金上昇リスクを確認できる","一括契約検討の前段として現状を数値化できる","中立・非営利の立場で客観的に試算できる"];
const faqItems = [{"question":"この事例は実在する自治体ですか。数値は正確ですか。","answer":"いいえ、本記事は実在の特定自治体の事例ではなく、経済産業省・資源エネルギー庁の公開資料やSII採択事例集、業界統計から再構成した代表シナリオです。Before/Afterや削減率は2025年10月時点の目安であり、精密な金額の断定は避け、数%〜十数%といった幅で示しています。実数値は契約条件・使用実態・市況により異なりますので、必ず個別の試算で確認してください。"},{"question":"この記事は特定の電力会社を推奨しているのですか。","answer":"いいえ、当センターは中立・非営利の立場であり、特定の電力会社や契約形態を推奨することはありません。本記事は一括契約・統合入札という仕組みや調達設計の考え方を理解いただくためのものです。実在事業者の優劣比較や推奨は行っておらず、読者が自らの条件で客観的に判断できるよう、前提や観点を整理することを目的としています。"},{"question":"複数施設を一括契約にすると必ず電気代は下がりますか。","answer":"必ず下がるとは限りません。一括契約は競争性を高める手段の一つですが、効果は市況や応札事業者数、見直し前の契約水準によって変動します。燃料費高騰局面では応札が集まりにくく、削減幅が縮小することもあります。一括化そのものを目的にせず、ロット設計などで実際に競争が働く仕組みになっているかを見極めることが重要です。"},{"question":"リバースオークションとは何ですか。公共調達で使えますか。","answer":"リバースオークションは、複数の事業者が制限時間内に価格を下げていく逆方式の入札で、価格競争のプロセスを時系列で記録できる手法です。落札根拠が明確になり、議会・住民への説明責任を果たしやすくなります。ただし地方自治法に基づく契約手続きとの整合や運用ルールの整理が前提です。価格偏重を避けるため、供給安定性や環境価値も評価項目に含める設計が求められます。"},{"question":"新電力が撤退した場合はどうなりますか。","answer":"契約期間中に新電力が事業から撤退した場合、一時的に最終保障供給へ移行することがあります。最終保障供給はセーフティネットとして通常より割高な料金水準になりやすいため、長期利用は想定されていません。撤退リスクに備え、撤退時の引継ぎ手順や供給力要件を契約条件に明記し、移行が長引かないよう備えておくことが大切です。"},{"question":"全施設を一本化するのと、ロットに分けるのはどちらが良いですか。","answer":"一概にどちらが良いとは言えません。一本化は事務が簡素になる一方、対応できる事業者が限られ競争が働きにくくなることがあります。逆に細分化しすぎると事務負担が増大します。契約区分や地域、施設種別を考慮し、競争性と事務効率のバランスが取れる単位に分けるのが一般的です。複数案を比較して、自治体の実情に合う設計を選ぶことが重要です。"},{"question":"ゼロカーボンシティの目標とコスト削減は両立できますか。","answer":"両立は可能ですが、トレードオフになる場面もあります。再エネメニューや非化石証書を重視すると価格は横ばい〜上昇方向になることがあり、コスト削減と脱炭素を同時に最大化できるとは限りません。要求水準書で環境価値の扱いを定め、価格と環境価値を総合評価する枠組みを整えることで、目標水準と財政状況に応じた最適点を探ることができます。"},{"question":"上下水道のような連続運転施設はどう扱えばよいですか。","answer":"上下水道のポンプや浄水場は24時間連続運転で負荷率が高く、執務中心の庁舎などとは負荷特性が大きく異なります。こうした施設は別ロットとして切り出し、負荷率の高さを活かした料金メニューや契約電力の最適化を組み合わせると効果を得やすい傾向があります。施設種別の負荷特性を踏まえてロットを設計することが、調達設計の精度を高めます。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/municipality-electricity-cost-review","title":"自治体の電気代見直し","description":"公共施設の電力構造。"},{"href":"/public-gym-electricity-cost-review","title":"公共体育館の電気代見直し","description":"大空間空調の削減観点。"},{"href":"/cultural-facility-electricity-cost-review","title":"文化施設の電気代見直し","description":"ホール・展示の電力。"},{"href":"/subsidy-municipality-energy-examples","title":"自治体の省エネ・補助金事例","description":"公共の脱炭素事例。"},{"href":"/subsidy-local-government-list","title":"自治体向け補助金の一覧","description":"地域別の支援制度。"},{"href":"/municipality-bundled-procurement","title":"複数拠点の一括調達の考え方","description":"統合入札の基礎。"},{"href":"/municipality-re100-decarbonization","title":"自治体のRE100・脱炭素","description":"ゼロカーボンシティの調達。"},{"href":"/case-study-municipality-procurement","title":"自治体12施設統合調達の事例","description":"既存の自治体事例。"},{"href":"/case-study-university-large-campus-management","title":"大学キャンパス×エネマネの事例","description":"公共系の比較ケース。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyMunicipalityPublicFacilityBulkPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-05-31"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "事例・削減実績を知る", url: "https://simulator.eic-jp.org/articles/case-studies" },
          { name: breadcrumbTitle, url: pageUrl },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/case-studies" className="underline-offset-2 hover:underline">事例・削減実績を知る</Link>
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
            ※ 本記事は業界統計・公開事例から再構成した架空企業の代表シナリオです。数値は目安であり、実数値は契約条件・使用実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/articles/case-studies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">事例カテゴリ一覧</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・負荷パターン・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
            <div className="mt-4 space-y-3">
              {premise.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">Before：見直し前の電気代構造と課題</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代構造上の課題を整理します。これらは多くの同業種で共通して見られる論点です。</p>
            <div className="mt-4 space-y-3">
              {beforeState.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実施した削減アプローチ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、複数の打ち手を組み合わせている点が特徴です。</p>
            <div className="mt-4 space-y-3">
              {approaches.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別の代表シナリオ（Before/After・目安）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・使用実態により異なります。実在企業の事例ではありません。</p>
            <div className="mt-4 space-y-4">
              {caseScenarios.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">効果（目安）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">数値の前提とデータ出典（捏造ゼロの考え方）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定企業の実績ではなく、公開された業界統計・採択事例集・公的データから再構成した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2025年10月時点の公開情報（経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実行プロセスと体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同様の取り組みを自社で進める際の、データ収集から効果検証までの実行プロセスを整理します。</p>
            <div className="mt-4 space-y-3">
              {process.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">自社が同様のケースか診断する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">{d1CtaLead}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種・規模・契約区分・エリアを選ぶだけで推定年間電気代と削減余地を試算できる{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
              {" "}で、自社が本ケースに近いかを確認できます。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">中立的に判断するための観点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">削減手法を検討する際に、単価や一面的な効果だけでなく総合的に判断するための観点を整理します。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースの手法を検討する際に陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
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
            <h2 className="text-xl font-semibold text-slate-900">自社で再現するためのチェックリスト</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握から始めましょう。</p>
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
              のデータも参照のうえ、契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-31" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代と削減余地を試算する"
            description="本ケースに近いかどうかは、自社の業種・規模・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="電力契約・省エネ・再エネ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・再エネ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
