import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "自動倉庫の屋根太陽光・自家消費事例｜自動倉庫負荷に合わせた自家消費最適化（代表シナリオ）";
const pageDescription = "自動倉庫(AS/RS)を備える物流倉庫が、大屋根を活かした太陽光・自家消費を導入し、昼間負荷との同時性を高めて電気代を抑えた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-warehouse-auto-rooftop-pv";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["倉庫 屋根太陽光 自家消費","自動倉庫 電気代","自家消費率 最適化","物流 PPA 太陽光","倉庫 蓄電池 併用"],
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

const h1Text = "自動倉庫×屋根太陽光：自家消費を最適化した代表事例";
const breadcrumbTitle = "自動倉庫×屋根太陽光の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。自動倉庫（AS/RS）を持つ物流倉庫が、広大な大屋根を活かして太陽光発電を導入し、自家消費でコストと脱炭素の両面に取り組んだケースを、業界統計と公開事例から再構成して解説します。スタッカークレーンやコンベアの昼間負荷と発電の同時性、自家消費率、PPAや蓄電池併用の選択肢まで、中立的な視点で意思決定の道筋を整理します。";
const d1CtaLead = "自社が本ケースと同様の条件か気になる方は、まず業種別電気代計算機での試算をおすすめします。業種・規模・契約区分を入力すると、現状の電力コスト水準と削減余地の目安を確認できます。屋根太陽光の自家消費が向くかどうかは、昼間負荷と発電の同時性で決まります。試算結果は代表シナリオの目安であり、実数値は契約条件により異なります。";
const simulatorCtaLead = "屋根太陽光の自家消費が自社に向くかは、まず現状の電力コスト構造を知ることから始まります。シミュレーターで契約区分や使用実態を入力すると、基本料金と電力量料金の構成や削減余地の目安を把握できます。本記事の事例は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。試算結果は目安としてご活用ください。";
const whatYouLearn = ["自動倉庫の昼間負荷と太陽光発電の同時性がなぜ自家消費型と相性が良いのか","大屋根面積から見込める設置容量と自家消費率の考え方の目安","自家消費型・PPAモデル・蓄電池併用の3パターンのコスト構造と向き不向き","Before/Afterで見る電力コストと再エネ比率の代表的な変化レンジ","複数拠点展開や効果検証まで含めた実行プロセスと留意点"];
const premise = [{"label":"業種特性（自動倉庫物流）","detail":"自動倉庫（AS/RS）は、スタッカークレーン、シャトル、コンベア、垂直搬送機といった搬送設備が連続稼働し、空調・照明よりも搬送動力と保管環境維持の電力比率が高い点が特徴です。定温・冷蔵帯を持つ倉庫では冷凍機の負荷も加わります。出荷波動に応じて稼働は変動しますが、日中の入出庫ピークと太陽光の発電ピークが重なりやすく、自家消費型の再エネ導入と構造的に相性が良い業種といえます。"},{"label":"規模・建物条件","detail":"本ケースは延床1万〜3万平方メートル級の平屋・低層大型倉庫を代表条件とします。陸屋根や折板屋根の大屋根面積が広く、太陽光パネルの設置適地が確保しやすい一方、屋根の積載荷重・防水保証・築年数が設置可否を左右します。実数値は建物構造・立地・日射条件により異なり、本記事の面積や容量はあくまで代表シナリオ・目安としてお読みください。"},{"label":"契約区分","detail":"想定する契約区分は高圧（一部は特別高圧）です。搬送設備の同時起動による需要変動が大きく、契約電力（デマンド）の管理が基本料金に直結します。再エネ賦課金や燃料費調整も含めた電力量料金単価の水準が、自家消費による回避メリットの大きさを決めます。契約区分や料金メニューは事業所ごとに異なるため、自社の検針票・デマンド実績の確認が出発点となります。"},{"label":"負荷パターン","detail":"二交代・三交代の稼働形態により負荷の昼夜配分が変わります。日中操業が中心の拠点では太陽光の自家消費率を高めやすく、夜間出荷が多い拠点では発電と消費のズレが生じ、余剰や蓄電池の検討余地が大きくなります。冷蔵・冷凍倉庫では夏季の冷凍機負荷が日射ピークと重なるため、自家消費の同時性がさらに高まる傾向があります（代表シナリオ・目安）。"},{"label":"コスト構造","detail":"電力コストは、契約電力に応じた基本料金と、使用量に応じた電力量料金（燃料費調整・再エネ賦課金を含む）で構成されます。自動倉庫では搬送動力の連続稼働により電力量料金の比率が高くなりやすく、昼間に自家消費で電力量を回避できると効果が出やすい構造です。一方、基本料金は契約電力で決まるため、太陽光だけでは下がりにくく、需要側の運用改善との併用が鍵となります。"}];
const beforeState = [{"label":"電力量料金の上昇圧力","detail":"搬送設備の連続稼働で消費電力量が大きく、燃料費調整や再エネ賦課金を含む電力量料金単価の上昇が、コストを継続的に押し上げていました。出荷量の増加に比例して電力使用量も増えるため、単価上昇局面では収益を圧迫しやすい状況にありました（代表シナリオ）。"},{"label":"デマンド管理の不徹底","detail":"スタッカークレーンや複数コンベアの同時起動でピーク需要が跳ね上がり、契約電力が実需要に対して高めに張り付いていました。デマンド監視や起動タイミングの平準化が十分でなく、基本料金が割高になっていた点が課題でした。"},{"label":"再エネ比率・脱炭素対応の遅れ","detail":"荷主企業や取引先からサプライチェーンの脱炭素を求められる場面が増える一方、自社の再エネ比率は低く、CO2排出の見える化や削減ロードマップが未整備でした。RE100の文脈を含む取引先要請への対応が後手に回っていました。"},{"label":"大屋根という遊休資産の未活用","detail":"広大な大屋根は遮熱以外に活用されておらず、太陽光発電の設置適地でありながら遊休資産化していました。初期投資の負担感や屋根荷重・防水保証への不安から導入判断が進まず、潜在的なコスト削減・脱炭素の機会を逃していました。"}];
const approaches = [{"name":"屋根太陽光の自家消費導入","role":"発電したそばで使う基幹施策","detail":"大屋根に太陽光パネルを設置し、発電電力を構内でそのまま消費する自家消費型を中核に据えました。日中の搬送・冷凍負荷と発電ピークが重なるため、買電量そのものを減らし、燃料費調整や再エネ賦課金を含む電力量料金を回避できます。自家消費率を高めるほど投資回収が早まるため、負荷曲線と発電予測を重ね合わせた容量設計が要点となります（目安）。"},{"name":"デマンド・運用最適化","role":"基本料金を抑える需要側改善","detail":"搬送設備の同時起動を避けるスケジューリングや、デマンド監視による契約電力の適正化を行い、太陽光だけでは下がりにくい基本料金の低減を狙いました。発電量が落ちる曇天・早朝のピーク管理を組み合わせることで、自家消費の効果を最大化します。設備運用の見直しは投資を伴わずに着手できる点も利点です。"},{"name":"蓄電池併用による余剰活用","role":"発電と消費のズレを埋める調整弁","detail":"夜間出荷が多い拠点や休日に発電が余る拠点では、昼間の余剰を蓄電池に貯め、夕方以降のピークや夜間に放電することで自家消費率を底上げしました。停電時のBCP対応にも寄与します。一方で蓄電池は投資負担が大きく、余剰量と放電タイミングの実態に基づく費用対効果の精査が前提となります（代表シナリオ）。"},{"name":"PPAモデルの活用","role":"初期費用ゼロで導入する選択肢","detail":"自己投資を抑えたい場合は、第三者が屋根を借りて発電設備を保有・運用し、発電分を電気料金として支払うPPA（電力販売契約）モデルを検討しました。初期費用ゼロで導入でき、保守も事業者側が担う一方、契約期間が長期になり単価条件で総額が変わるため、自家消費型との総コスト比較が意思決定の核心となります。"}];
const caseScenarios = [{"title":"シナリオA：自家消費型（日中操業中心の常温倉庫・自己投資）","before":"電力コストに占める電力量料金の比率が高く、再エネ比率はほぼゼロの状態を起点とします（代表シナリオ・目安）。","after":"自家消費により昼間の買電量を回避し、年間電力量に対する自家消費充当の割合は数割規模を見込む構成です。","result":"電力コスト削減率はおおむね一桁後半から十数パーセントのレンジが目安です。実数値は契約条件・使用実態・日射により異なります。"},{"title":"シナリオB：PPA型（初期費用ゼロ・キャッシュ重視）","before":"初期投資を避けたいため太陽光導入を見送っていた状態を起点とします（代表シナリオ）。","after":"屋根貸しPPAにより初期費用ゼロで導入し、発電分をPPA単価で購入する形へ移行します。","result":"削減効果は自家消費型より小さめの数パーセント規模が目安ですが、初期投資ゼロでキャッシュフローを温存できます。実額は契約単価・期間で変動します。"},{"title":"シナリオC：蓄電池併用型（夜間出荷の多い冷蔵倉庫）","before":"発電と消費のズレで余剰が発生し、夕方以降のピークが基本料金を押し上げていた状態を起点とします（代表シナリオ・目安）。","after":"昼間の余剰を蓄電池に充電し夕方以降へ放電することで自家消費率を底上げし、ピーク需要も抑制します。","result":"電力コスト削減率は十数パーセント規模が目安で、BCP価値も付加されます。蓄電池投資の回収期間は余剰量・放電実績で大きく変わります。"},{"title":"シナリオD：複数拠点展開型（同型倉庫を全国に横展開）","before":"1拠点で効果を確認した後、横展開の標準化が未整備だった状態を起点とします（代表シナリオ）。","after":"拠点ごとの屋根条件・負荷パターンに応じて自家消費型とPPA型を使い分け、標準仕様で順次展開します。","result":"全社平均で一桁後半から十数パーセントの削減レンジが目安で、再エネ比率も段階的に向上します。拠点差により個別の効果は異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、業界統計と公開事例から再構成した代表レンジです。精密な金額の断定は避け、削減率のレンジや幅で示しています。自社の効果は契約条件・使用実態・日射量・屋根条件により異なるため、必ず個別の試算で確認してください（2025年10月時点・代表シナリオ）。"},{"label":"出典の考え方","detail":"削減率や負荷特性の前提は、経済産業省・資源エネルギー庁の統計、SII（環境共創イニシアチブ）の補助事業採択事例集、物流・倉庫業界の公開統計から再構成しています（2025年10月時点・代表シナリオ）。個別の補助金額や単価は制度年度・地域で変動するため、最新の公募要領で確認することを前提とします。"},{"label":"自家消費率の前提","detail":"自家消費率は、発電量に対して構内でそのまま消費される割合を指します。日中操業の常温倉庫では高く、夜間出荷中心の拠点では低くなる傾向があり、本記事の数割規模という表現はあくまで代表シナリオの目安です。実際は負荷曲線の実測と発電シミュレーションの重ね合わせで個別に算定する必要があります。"},{"label":"コスト構成の前提","detail":"電力コストは基本料金（契約電力連動）と電力量料金（燃料費調整・再エネ賦課金を含む）で構成されると整理しています。太陽光の自家消費は主に電力量料金を回避する効果であり、基本料金はデマンド管理など需要側改善と併用しないと下がりにくい点を前提に削減レンジを示しています（目安）。"}];
const process = [{"label":"データ収集・現状把握","detail":"直近1〜2年の検針票、30分デマンドデータ、稼働スケジュール、屋根図面・荷重資料を収集します。搬送設備や冷凍機の負荷を時間帯別に把握し、契約電力の張り付き具合や電力量料金の構成を見える化することが出発点です。屋根の築年数・防水保証・積載荷重も並行して確認します。"},{"label":"発電・自家消費シミュレーション","detail":"収集した負荷曲線に、立地の日射量に基づく発電予測を重ね合わせ、自家消費率と余剰量を試算します。蓄電池の要否や最適容量、買電削減効果のレンジを比較し、自家消費型・PPA型・蓄電池併用の各シナリオを定量比較します。前提は代表値であり、複数ケースで感度を確認します。"},{"label":"相見積もり・モデル比較","detail":"EPC事業者やPPA事業者から複数の見積もりを取得し、設備仕様・保証・保守体制・契約期間・単価条件を同一基準で比較します。自己投資の回収年数とPPAの総支払額、SII等の補助金活用可否を並べ、屋根荷重補強の要否も含めて総コストで評価します。中立的な比較軸の設計が重要です。"},{"label":"意思決定・効果検証","detail":"経営層への投資判断資料として、削減レンジ・回収年数・再エネ比率・BCP価値・リスクを整理して提示します。導入後は発電量・自家消費率・買電量・デマンドを継続モニタリングし、想定レンジとの差異を検証します。複数拠点展開では標準仕様化し、効果検証の結果を次拠点の設計に反映します。"}];
const viewpoints = [{"label":"昼間負荷との同時性","detail":"太陽光の自家消費効果は、発電ピークと消費ピークがどれだけ重なるかで決まります。日中操業中心の拠点ほど自家消費率を高めやすく、夜間出荷中心なら蓄電池や余剰活用の検討が必要です。自社の負荷曲線を時間帯別に把握することが、向き不向きを中立的に判断する第一歩です。"},{"label":"自己投資とPPAの総コスト比較","detail":"自己投資は回収後のメリットが大きい一方で初期負担とリスクを負い、PPAは初期費用ゼロだが長期契約の総支払額が膨らむ可能性があります。どちらが優れるかは一概に言えず、キャッシュフロー方針・保有期間・単価条件を踏まえて総コストで比較する姿勢が重要です。"},{"label":"基本料金と電力量料金の切り分け","detail":"太陽光は主に電力量料金を回避する施策で、基本料金（契約電力連動）には直接効きにくい点を理解する必要があります。デマンド管理など需要側改善と組み合わせて初めて総コストが下がるため、施策ごとの効く範囲を切り分けて評価することが中立的判断につながります。"},{"label":"屋根の物理条件の確認","detail":"大屋根があっても、積載荷重・防水保証・築年数・屋根形状によって設置可否や追加工事の要否が変わります。容量だけで判断せず、構造調査の結果を踏まえてコストとリスクを評価することが、過大な期待を避けるうえで重要な観点です。"},{"label":"脱炭素価値の位置づけ","detail":"再エネ比率向上やCO2削減は、コスト削減と並ぶ導入動機です。荷主や取引先の脱炭素要請、RE100の文脈での評価など、金額に表れにくい価値も意思決定に含めます。ただし定量化が難しい価値は過大評価を避け、コスト面と切り分けて中立的に位置づけることが大切です。"}];
const cautions = [{"label":"削減率は条件で大きく変わる","detail":"本記事の削減レンジは代表シナリオの目安です。日射量・負荷パターン・契約区分・屋根条件により効果は大きく変わり、同じ業種でも拠点ごとに差が出ます。提示された数値を自社にそのまま当てはめず、必ず個別の試算で確認する姿勢が必要です（実数値は契約条件・使用実態により異なります）。"},{"label":"太陽光だけでは基本料金は下がりにくい","detail":"自家消費は電力量料金の回避が中心で、契約電力で決まる基本料金には直接効きにくい点を誤解しがちです。基本料金を下げるにはデマンド管理など需要側改善が必要で、太陽光単独で総コストが大幅に下がると過大に期待しないことが重要です。"},{"label":"PPAは長期契約の制約を伴う","detail":"PPAは初期費用ゼロが魅力ですが、契約期間が長期に及び、途中解約や建物の改修・売却に制約が生じる場合があります。単価が固定か変動か、契約満了後の設備の扱いはどうかなど、条件を精査しないと総支払額や柔軟性の面で想定外が生じる可能性があります。"},{"label":"蓄電池の費用対効果は要精査","detail":"蓄電池は自家消費率向上やBCPに有効ですが投資負担が大きく、余剰量や放電タイミングの実態次第で回収期間が大きく変わります。導入ありきで判断せず、余剰が十分に発生するか、放電が需要ピークに当たるかを実測ベースで検証することが欠かせません。"},{"label":"補助金は制度年度で変動する","detail":"SII等の補助制度は公募年度・予算・要件が変わり、採択も保証されません。補助金を前提に投資判断を固めると、不採択時に回収計画が崩れるおそれがあります。補助金なしでも成立するかを基準に評価し、補助金は上振れ要素として扱うのが安全です。"}];
const checklist = ["直近1〜2年の検針票とデマンドデータを揃える","搬送・冷凍負荷を時間帯別に把握する","稼働形態（昼夜・交代制）を整理する","屋根の荷重・防水保証・築年数を確認する","立地の日射量で発電量を試算する","負荷と発電を重ねて自家消費率を算定する","余剰量と蓄電池の要否を検討する","自家消費型とPPA型を総コストで比較する","デマンド管理など需要側改善も併せて検討する","SII等の補助金の最新要件を確認する","EPC・PPA事業者から相見積もりを取る","導入後の発電量と買電量を継続検証する"];
const simulatorCtaBullets = ["基本料金と電力量料金の構成比を可視化できる","自家消費が効きやすい昼間負荷の傾向を確認できる","削減余地の目安を業種・規模別に把握できる","自家消費型・PPA型の比較検討の出発点になる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ、本記事は実在企業の事例ではなく、業界統計と公開事例から再構成した架空企業の代表シナリオです。Before/Afterや削減率は精密な金額の断定を避け、レンジや幅で示しています。実際の効果は契約条件・使用実態・日射量・屋根条件により異なるため、必ず自社の検針票やデマンドデータをもとに個別の試算で確認してください（2025年10月時点・代表シナリオ）。"},{"question":"特定の電力会社やPPA事業者を推奨しているのですか。","answer":"いいえ、当法人は中立・非営利の立場であり、特定の電力会社・契約形態・事業者を推奨することはありません。自家消費型・PPA型・蓄電池併用はいずれも長所と制約があり、どれが優れるかは自社の条件次第です。本記事は中立的な比較軸と判断の観点を提供するものであり、特定の選択を勧めるものではありません。"},{"question":"自動倉庫はなぜ屋根太陽光と相性が良いのですか。","answer":"自動倉庫はスタッカークレーンやコンベアなどの搬送設備が日中に連続稼働し、消費ピークが太陽光の発電ピークと重なりやすいためです。発電したそばで電力を使う自家消費の同時性が高く、買電量を効率的に減らせます。さらに広大な大屋根が設置適地になりやすい点も、構造的に相性が良い理由です（代表シナリオ・目安）。"},{"question":"自家消費型とPPAモデルはどちらが得ですか。","answer":"一概には言えません。自家消費型は初期投資を負う代わりに回収後のメリットが大きく、PPAは初期費用ゼロでキャッシュフローを温存できますが長期契約の総支払額が膨らむ可能性があります。キャッシュフロー方針、建物の保有期間、単価条件、補助金活用可否などを踏まえ、総コストで比較して判断することをおすすめします。"},{"question":"太陽光を導入すれば電気料金は大きく下がりますか。","answer":"自家消費は主に電力量料金（燃料費調整や再エネ賦課金を含む）の回避に効きますが、契約電力で決まる基本料金には直接効きにくい点に注意が必要です。基本料金を下げるにはデマンド管理など需要側改善との併用が前提となります。太陽光単独で総コストが大幅に下がると過大に期待せず、施策の効く範囲を切り分けて評価してください。"},{"question":"蓄電池は併用したほうが良いですか。","answer":"拠点の負荷パターン次第です。夜間出荷が多く昼間に発電が余る拠点では、余剰を蓄電池に貯めて夕方以降に放電することで自家消費率を底上げでき、BCP価値も加わります。一方で蓄電池は投資負担が大きく、余剰量や放電タイミングの実態で回収期間が大きく変わるため、実測データに基づく費用対効果の精査が前提です。"},{"question":"屋根があれば必ず太陽光を設置できますか。","answer":"必ずしも設置できるとは限りません。屋根の積載荷重、防水保証、築年数、屋根形状によって設置可否や追加工事の要否が変わります。荷重が不足する場合は補強工事が、防水保証期間中の場合は施工方法の調整が必要になることもあります。容量だけで判断せず、構造調査の結果を踏まえてコストとリスクを評価してください。"},{"question":"複数拠点へ横展開する際の注意点は何ですか。","answer":"拠点ごとに屋根条件と負荷パターンが異なるため、1拠点の結果をそのまま全拠点に当てはめないことが重要です。日中操業の拠点は自家消費型、夜間出荷の拠点は蓄電池併用やPPAなど、条件に応じて使い分けると効果が安定します。標準仕様を整えつつ、各拠点で個別試算と効果検証を行い、結果を次拠点の設計に反映する進め方が有効です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/warehouse-electricity-cost-review","title":"倉庫の電気代見直し","description":"保管・荷役の電力構造。"},{"href":"/distribution-center-electricity-cost-review","title":"物流センターの電気代見直し","description":"庫内・荷役の電力。"},{"href":"/kanagawa-logistics-warehouse-electricity-cost","title":"神奈川の物流倉庫の電気料金","description":"業種×地域クロス。"},{"href":"/subsidy-battery-solar-equipment","title":"蓄電池・太陽光設備の補助金","description":"自家消費設備の支援制度。"},{"href":"/subsidy-logistics-strategy","title":"物流の補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/self-consumption-solar-cost-benefit","title":"自家消費太陽光の費用対効果","description":"自家消費の経済性。"},{"href":"/solar-battery-combination-benefit","title":"太陽光と蓄電池の組合せ効果","description":"発電と蓄電の相乗効果。"},{"href":"/ppa-vs-self-consumption-solar","title":"PPAと自家消費太陽光の比較","description":"初期費用と所有形態。"},{"href":"/case-study-logistics-cold-storage-battery","title":"冷凍冷蔵物流×蓄電池の事例","description":"物流の蓄電池比較。"},{"href":"/case-study-logistics-solar-integration","title":"物流倉庫：太陽光併設の事例","description":"既存の物流削減事例。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyWarehouseAutoRooftopPvPage() {
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
