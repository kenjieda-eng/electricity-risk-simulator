import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "ハイパースケールDCのPUE改善事例｜液冷・外気冷房で電力効率を高めた代表シナリオ";
const pageDescription = "ハイパースケールデータセンターが、空調が占める消費を液冷・外気冷房などでPUE改善し電力効率を高めた代表シナリオを、公開事例から再構成して整理。PUE値は代表レンジの目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-datacenter-hyperscale-pue";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["データセンター PUE 改善","ハイパースケール 電気代","液冷 サーバ 冷却","外気冷房 DC","DC 再エネ RE100"],
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

const h1Text = "ハイパースケールDC×PUE改善：液冷・外気冷房の代表事例";
const breadcrumbTitle = "ハイパースケールDC×PUE改善の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。ハイパースケールデータセンター(DC)はサーバー負荷率が24時間高水準で、消費電力に占める空調比重が大きい点が特徴です。本ケースではPUE(電力使用効率)の改善を軸に、空冷最適化から外気冷房、液冷、再エネ併用までを段階導入した目安シナリオを、中立的な視点で整理します。数値は業界統計と公開事例から再構成した代表レンジです。";
const d1CtaLead = "自社のデータセンターや高負荷施設が、本記事と同様のPUE改善余地を持つかは、まず現状の電力消費構造を把握することから始まります。業種別電気代計算機を使えば、業種特性を踏まえた電気代の試算ができ、効率改善のインパクトを検討する出発点になります。数値は代表シナリオ・目安としてご活用ください。";
const simulatorCtaLead = "本記事はハイパースケールDCの代表シナリオを整理したものですが、自社の電気料金がどの程度の上昇リスクを抱えているかは、施設ごとに異なります。法人向け電気料金リスクシミュレーターを使えば、契約条件をもとに高騰リスクを可視化できます。PUE改善などの効率施策を検討する前段として、まず現状リスクを把握することをおすすめします。";
const whatYouLearn = ["PUE(電力使用効率)の定義と、ハイパースケールDCで指標が重視される理由","DCの総消費電力に占める空調・冷却の比重と、削減余地の大きさ","空冷最適化・外気冷房・液冷(直接/浸漬)・再エネ併用の位置づけと効果レンジ","規模やサブ業種別に異なる代表シナリオでのPUE改善幅の目安","自社DCで同様の改善を検討する際のプロセス・観点・留意点"];
const premise = [{"label":"業種特性","detail":"ハイパースケールDCはクラウドや大規模Web基盤を支える施設で、ラックあたりの電力密度が高く、サーバーが常時高稼働します。発熱密度が高いため冷却負荷が大きく、IT機器自体の電力に加えて空調・電源変換・照明などの付帯電力が積み上がります。PUEはこの付帯効率を測る代表指標で、運用改善の主戦場となります。本記事の数値は代表シナリオ・目安であり、実数値は契約条件・使用実態により異なります。"},{"label":"規模","detail":"受電規模は特別高圧クラスを想定し、年間消費電力量が大規模工場に匹敵する水準のケースを代表例とします。サーバー増設に伴う需要急増が前提で、設計時点より負荷が拡大する局面が珍しくありません。規模が大きいほど冷却方式の選択や再エネ調達が総コストへ与える影響も大きくなります。実額は規模・地域・契約区分により幅があるため、本記事では断定せず削減率レンジで示します。"},{"label":"契約区分","detail":"大規模DCは特別高圧または高圧での受電が一般的で、基本料金は契約電力(デマンド)に連動します。24時間高負荷のため負荷率が高く、夜間も電力消費が落ちにくい運用特性があります。電力量料金に占める割合が大きい一方、デマンド抑制の余地は限定的で、効率改善(PUE低減)による電力量そのものの削減が主な打ち手となります。契約条件は施設ごとに異なります。"},{"label":"負荷パターン","detail":"一般的な事業所と異なり、DCは昼夜・平日休日を問わず高い稼働率を維持します。負荷率が高いため、わずかなPUE改善でも年間の電力量削減インパクトが大きく出ます。一方で外気冷房は外気温・湿度の季節変動に依存し、夏季は冷却負荷が増えます。サーバー世代交代や繁忙期のトラフィック増で負荷が変動する点も考慮が必要です。"},{"label":"コスト構造","detail":"DCの電力コストはIT機器の消費電力(これは事業上必須)と、冷却・電源変換などの付帯電力に大別されます。PUEはこの両者の比であり、付帯電力を圧縮することが効率改善の核心です。冷却が付帯電力の大半を占めるケースが多く、空調方式の見直しが削減の中心となります。電力単価の上昇局面では、効率1割の改善が年間コストへ与える影響も無視できません。"}];
const beforeState = [{"label":"空調が消費の大きな比重を占める","detail":"見直し前は従来型の機械式空調(冷凍機+空調機)に依存し、付帯電力の多くを冷却が占めていました。PUEは1.4前後の水準にとどまり、IT機器1に対し空調などの付帯で相当量を上乗せして消費していた構図です。空調の効率改善余地が大きいまま放置されていた点が、最初の課題でした。数値は代表シナリオ・目安です。"},{"label":"ホット/コールドアイルの分離が不十分","detail":"サーバーラックの吸気側(コールドアイル)と排気側(ホットアイル)の気流が混ざり、冷たい空気と熱い排気が干渉していました。これにより空調が過剰に冷やす必要が生じ、無駄な冷却電力が発生します。アイル封じ込め(コンテインメント)が未導入で、設定温度を必要以上に下げて運用していた点も非効率の一因でした。"},{"label":"外気の活用ができていない","detail":"立地の外気温が低い時期でも、外気冷房(エアサイドエコノマイザ等)を活用せず通年で機械式冷凍機を稼働させていました。冷涼な気候条件を冷却に使えるポテンシャルがありながら、設備・制御が対応しておらず、冬季や中間期に本来不要な冷凍機電力を消費していた状態です。季節性の機会損失が大きい課題でした。"},{"label":"需要急増への対応が後手","detail":"サーバー増設で電力密度が想定を上回り、既存の空冷方式では高密度ラックの冷却が追いつかなくなりつつありました。局所的なホットスポットが発生し、安全側に立って全体を過冷却することでさらにPUEが悪化する悪循環がありました。再エネ調達(RE100やPPA)の検討も着手前で、効率と調達の両面で打ち手が遅れていました。"}];
const approaches = [{"name":"空冷最適化(アイル封じ込め+設定温度見直し)","role":"低投資で着手する効率改善の起点","detail":"まずホット/コールドアイルの封じ込め(コンテインメント)を導入し、冷気と排気の混合を防ぎました。気流が整うことで空調の過剰冷却が減り、サーバー吸気温度の許容範囲内で設定温度を引き上げる運用へ移行します。比較的少ない投資で着手でき、後続の冷却方式変更の土台になります。効果はPUEで一定幅の改善が見込めますが、数値は代表シナリオ・目安で、立地や運用で異なります。"},{"name":"外気冷房(エコノマイザ)の導入","role":"気候を活かし冷凍機電力を季節的に削減","detail":"外気温・湿度の条件が整う時期に外気を冷却に活用するエアサイドまたはウォーターサイドのエコノマイザを導入します。冷涼な季節は機械式冷凍機の稼働を抑え、付帯電力を季節的に大きく削減できます。効果は立地の気候依存が強く、寒冷地ほど恩恵が大きい一方、夏季や高湿度時は機械式に頼る必要があります。通年効果は気候条件により幅があります。"},{"name":"液冷(直接液冷/浸漬冷却)の導入","role":"高密度ラックの冷却を空冷から転換","detail":"高発熱なプロセッサに対し、冷却液を循環させる直接液冷(コールドプレート)や、機器を絶縁性の液体に浸す浸漬冷却(イマージョン)を採用します。空気より熱輸送効率が高く、冷却に要する付帯電力を抑えながら高密度実装に対応できます。設備投資と運用体制の変更を伴いますが、PUE改善幅が大きい打ち手です。導入可否は機器構成や施設条件に依存します。"},{"name":"再エネ併用(RE100/PPA)による調達面の改善","role":"効率改善と並行した排出・調達の見直し","detail":"効率改善(PUE低減)で消費電力量そのものを下げたうえで、コーポレートPPAや再エネメニューの活用、RE100目標に沿った調達を併用します。これは電力効率の指標であるPUEを直接下げるものではありませんが、使用電力の環境価値を高め、調達コストや排出の観点から全体最適を図ります。中立社団法人として、特定事業者の優劣評価は行いません。"}];
const caseScenarios = [{"title":"シナリオ1: 空冷最適化中心の中規模DC","before":"従来型空調でアイル封じ込めが不十分。PUEは1.4前後が目安です。","after":"コンテインメント導入と設定温度の適正化で、PUEは1.3台前半まで改善する目安です。","result":"付帯電力(主に空調)を一定割合圧縮。低投資で着手でき、年間電力量に効いてくる代表シナリオです。実数値は契約条件・使用実態により異なります。"},{"title":"シナリオ2: 外気冷房を活用する寒冷地DC","before":"通年で機械式冷凍機に依存。気候を活かせずPUEは1.4前後が目安です。","after":"エコノマイザ導入で冷涼期の冷凍機稼働を抑え、PUEは1.2台へ近づく目安です。","result":"冷却の付帯電力を季節的に大きく削減。効果は気候依存が強く、寒冷地ほど恩恵が大きい代表シナリオです。数値は目安です。"},{"title":"シナリオ3: 液冷を導入する高密度ハイパースケールDC","before":"高密度ラックで空冷が限界。過冷却によりPUEは1.4前後が目安です。","after":"直接液冷や浸漬冷却で冷却効率を高め、PUEは1.2程度まで改善する目安です。","result":"冷却の付帯電力を大幅に圧縮し、高密度実装にも対応。投資と運用変更を伴う代表シナリオで、効果は施設条件により幅があります。"},{"title":"シナリオ4: 液冷+RE100併用の大規模DC","before":"効率改善前で再エネ調達も未着手。PUEは1.4前後が目安です。","after":"液冷でPUEを1.2程度に下げ、PPAや再エネメニューを併用する目安です。","result":"効率改善で電力量を削減しつつ、RE100目標に沿って環境価値を高める代表シナリオ。PUE自体は効率指標で、調達面は別軸として整理します。"}];
const dataNotes = [{"label":"PUE値の出典と扱い","detail":"本記事で示すPUE値(1.4から1.2程度)は、経済産業省・資源エネルギー庁の資料、SII(環境共創イニシアチブ)採択事例集、各種業界統計から再構成した代表レンジ(2025年10月時点・代表シナリオ)です。特定施設の実測値ではありません。PUEは施設の立地・規模・冷却方式・負荷率で大きく変わるため、レンジで示し精密値の断定を避けています。"},{"label":"削減率レンジで示す理由","detail":"個別施設の実額は契約電力・電力単価・運用方針で大きく異なるため、本記事では金額を断定せず、PUE値や削減率(%)レンジ、目安表現で記述しています。これは数値の信頼性を保ち、過度な期待や誇張を避けるための方針です。実数値は契約条件・使用実態により異なります。"},{"label":"架空企業の代表シナリオである旨","detail":"caseScenariosの各事例は、実在企業の実績ではなく、業界統計と公開事例から再構成した架空企業の代表シナリオです。特定企業の優劣評価や、特定の電力会社・契約形態の推奨を目的とするものではありません。中立・非営利の社団法人として、客観的な情報整理を意図しています。"},{"label":"制度・規格の名称表記","detail":"本記事で参照する制度・補助金・規格は正式名称で表記します(RE100、ZEB、SII、GX、BEMS、PPAなど)。これらの名称や枠組みの記載は、特定事業者を推奨するものではなく、客観的な制度説明として用いています。最新の制度内容は所管省庁・運営団体の一次情報をご確認ください。"}];
const process = [{"label":"データ収集(計測の整備)","detail":"まずIT機器の消費電力と施設全体の消費電力を分けて計測できる体制を整え、PUEを継続的にモニタリングします。ラック単位の電力密度や吸気・排気温度、外気条件(温湿度)も記録します。改善前のベースラインを正確に把握することが、後続の効果検証の前提になります。計測点が不足する場合は、まず可視化から着手します。"},{"label":"分析(ボトルネックの特定)","detail":"収集データから、付帯電力のうち冷却が占める比重や、過冷却・気流干渉の有無を分析します。ホットスポットや高密度ラックの位置を特定し、空冷最適化で済むのか、外気冷房や液冷まで踏み込むべきかを判断します。季節別の冷却負荷も評価し、エコノマイザのポテンシャルを見積もります。"},{"label":"相見積・方式比較","detail":"アイル封じ込め、エコノマイザ、液冷など複数の方式について、投資額・想定効果・運用負荷を複数事業者から相見積もりで比較します。SII等の補助制度の活用可否も確認します。中立的に複数案を並べ、施設条件に合う方式を選びます。特定事業者を前提にせず、客観的な評価軸で比較することが重要です。"},{"label":"意思決定と効果検証","detail":"段階導入を基本とし、低投資の空冷最適化から着手して効果を確認しながら、外気冷房・液冷・再エネ併用へと拡張します。導入後はPUEの推移をベースラインと比較し、想定効果との差異を検証します。需要急増局面では再計測し、運用設定を継続的に調整します。効果は代表シナリオ・目安であり、実数値は使用実態で異なります。"}];
const viewpoints = [{"label":"PUEは効率指標であり目的ではない","detail":"PUEは施設の付帯電力効率を測る指標で、低いほど効率的とされますが、PUE改善だけが目的化すると、IT機器の省電力やサービス品質とのバランスを見失う恐れがあります。総消費電力量や事業価値を含めて総合評価する視点が必要です。PUE値は立地や負荷率で変わるため、施設間の単純比較は避けます。"},{"label":"立地の気候条件を前提に評価する","detail":"外気冷房や液冷の効果は立地の外気温・湿度に強く依存します。寒冷地では外気冷房の恩恵が大きい一方、温暖多湿地ではその効果が限定的です。他施設の成功事例をそのまま自社に当てはめず、自社の気候・負荷条件に即して評価することが、現実的な意思決定につながります。"},{"label":"投資対効果と回収期間を見る","detail":"液冷など効果の大きい方式は、設備投資と運用体制の変更を伴います。PUE改善幅だけでなく、投資額・回収期間・運用負荷を併せて評価し、段階導入で投資リスクを抑える視点が有効です。補助制度の活用可否も回収期間に影響します。数値は代表シナリオ・目安として扱います。"},{"label":"効率改善と再エネ調達は別軸で整理する","detail":"PUE低減(効率改善)は消費電力量を減らす取り組み、RE100やPPAは使用電力の環境価値を高める取り組みで、目的が異なります。両者を混同せず別軸で整理することで、どこにどれだけ投資すべきかの判断が明確になります。効率を先に高めてから調達を検討する順序が一般的です。"},{"label":"中立的に複数案を比較する","detail":"冷却方式や調達手段は複数の選択肢があり、施設条件で最適解が変わります。特定の方式や事業者を前提とせず、相見積もりや客観的な評価軸で複数案を比較することが、納得感のある意思決定につながります。中立・非営利の立場からは、優劣の断定ではなく判断材料の提供を重視します。"}];
const cautions = [{"label":"PUEの数値は施設間で単純比較できない","detail":"PUEは立地の気候、規模、負荷率、冷却方式で大きく変わるため、異なる施設のPUEを単純に比べて優劣を判断するのは適切ではありません。本記事の1.4から1.2程度という値も代表シナリオ・目安であり、特定施設の実測を保証するものではありません。実数値は契約条件・使用実態により異なります。"},{"label":"液冷は万能ではない","detail":"液冷(直接液冷・浸漬冷却)は高密度ラックに有効ですが、すべての施設や機器構成に適するわけではありません。導入には設備投資、運用体制の変更、機器の対応状況の確認が必要です。空冷最適化や外気冷房で十分な場合もあり、施設条件に応じた選択が求められます。導入可否は個別判断です。"},{"label":"外気冷房は季節・気候に左右される","detail":"外気冷房の効果は外気温・湿度に依存し、夏季や高湿度地域では恩恵が限定的です。通年効果を一律に期待すると見込み違いになりかねません。冷涼期に効く一方、暑熱期は機械式に頼る前提で、季節別に効果を見積もることが重要です。気候データに基づく評価が欠かせません。"},{"label":"設定温度の引き上げには許容範囲の確認が必要","detail":"空調の設定温度を上げるとPUEは改善しますが、サーバー吸気温度の許容範囲を超えると機器の信頼性や寿命に影響する恐れがあります。機器メーカーの推奨範囲や運用ガイドラインを確認し、安全側で運用することが前提です。過度な省エネ運用は本末転倒になりかねません。"},{"label":"PUE改善と再エネ調達を混同しない","detail":"PUEは効率指標であり、再エネ調達(RE100・PPA)はPUE自体を下げるものではありません。これらを混同すると、施策の効果を誤って評価してしまいます。効率改善で電力量を減らす取り組みと、環境価値を高める取り組みは別軸として整理する必要があります。両者の役割を正しく区別しましょう。"}];
const checklist = ["IT機器電力と施設全体電力を分けて計測しているか確認する","PUEを継続的にモニタリングする仕組みがあるか確認する","ホット/コールドアイルの気流干渉がないか点検する","アイル封じ込め(コンテインメント)の導入可否を検討する","サーバー吸気温度の許容範囲内で設定温度を見直す","ラック単位の電力密度とホットスポットを把握する","立地の外気温湿度から外気冷房のポテンシャルを評価する","高密度ラックに液冷が適するか機器構成を確認する","冷却方式を複数事業者で相見積もり比較する","SII等の補助制度の活用可否を確認する","効率改善とRE100やPPA調達を別軸で整理する","段階導入で投資リスクを抑える計画を立てる"];
const simulatorCtaBullets = ["契約条件をもとに電気料金の上昇リスクを可視化できる","高負荷施設の現状を客観的に把握する出発点になる","効率改善や調達見直しの検討前のベースライン把握に役立つ","中立・非営利の立場から特定事業者を推奨せず情報を提供する"];
const faqItems = [{"question":"PUE(電力使用効率)とは何ですか。","answer":"PUEはPower Usage Effectivenessの略で、データセンター全体の消費電力をIT機器の消費電力で割った指標です。値が1に近いほど、冷却や電源変換などの付帯電力が少なく効率的とされます。ハイパースケールDCでは付帯電力に占める冷却の比重が大きいため、PUE改善は冷却の効率化が中心になります。なお、PUEは立地や規模で変わるため、施設間の単純比較には注意が必要です。"},{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"本記事の事例はすべて架空企業の代表シナリオであり、実在企業の実績ではありません。PUE値(1.4から1.2程度)や削減率は、経済産業省・資源エネルギー庁の資料、SII採択事例集、業界統計から再構成した代表レンジ(2025年10月時点・代表シナリオ)で、目安としてお示ししています。実数値は施設の契約条件・使用実態により異なります。精密な金額の断定は行っていません。"},{"question":"特定の電力会社や冷却方式を推奨しているのですか。","answer":"いいえ。本記事は中立・非営利の社団法人の立場から、客観的な情報整理を目的としており、特定の電力会社・契約形態・冷却方式・事業者を推奨するものではありません。各施策は複数の選択肢を相見積もりや客観的な評価軸で比較することを推奨しています。実在企業の優劣評価も行いません。施設条件に応じた個別判断が前提です。"},{"question":"なぜデータセンターは空調の電力が大きいのですか。","answer":"ハイパースケールDCはサーバーが24時間高稼働で発熱密度が高く、その熱を排出するための冷却に多くの電力を要するためです。付帯電力の大半を冷却が占めるケースが多く、空調方式の見直しがPUE改善の主戦場になります。気流の整流(ホット/コールドアイルの分離)や設定温度の適正化、外気冷房・液冷などが代表的な打ち手です。効果は施設条件により幅があります。"},{"question":"液冷と空冷はどう使い分けますか。","answer":"空冷は気流で熱を運ぶ方式で、アイル封じ込めや設定温度の最適化で効率を高められます。一方、液冷(直接液冷・浸漬冷却)は冷却液で熱を運ぶ方式で、空気より熱輸送効率が高く、高密度ラックに適します。高発熱な高密度実装が増える局面では液冷の効果が大きい一方、設備投資と運用変更を伴います。施設の電力密度や機器構成に応じて使い分けます。導入可否は個別判断です。"},{"question":"外気冷房はどの施設でも効果がありますか。","answer":"外気冷房(エコノマイザ)の効果は立地の外気温・湿度に強く依存します。寒冷地や冷涼な季節では冷凍機の稼働を抑えられ恩恵が大きい一方、温暖多湿地域や夏季は機械式に頼る必要があり効果は限定的です。通年効果を一律に期待せず、気候データに基づいて季節別に見積もることが重要です。立地条件次第で削減幅が変わるため、代表シナリオ・目安として扱います。"},{"question":"PUE改善と再エネ調達(RE100・PPA)はどう違いますか。","answer":"PUE改善は付帯電力を減らして消費電力量そのものを下げる効率の取り組みです。一方、RE100やコーポレートPPAは使用する電力の環境価値を高める調達の取り組みで、PUE値を直接下げるものではありません。両者は目的が異なる別軸の施策です。一般には効率を先に高めて電力量を減らし、そのうえで調達面を検討する順序が整理しやすいとされます。"},{"question":"自社で同様の改善を始めるには何から着手すべきですか。","answer":"まずIT機器電力と施設全体電力を分けて計測し、PUEを継続的に把握する体制を整えることが出発点です。次に気流干渉や過冷却などのボトルネックを分析し、低投資の空冷最適化から着手します。効果を確認しながら外気冷房・液冷・再エネ併用へ段階的に拡張すると、投資リスクを抑えられます。複数事業者の相見積もりや補助制度の確認も並行して行うとよいでしょう。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/data-center-electricity-cost-review","title":"データセンターの電気代見直し","description":"IT負荷と空調の電力構造。"},{"href":"/chiba-datacenter-electricity-cost","title":"千葉のデータセンターの電気料金","description":"業種×地域クロス。"},{"href":"/datacenter-electricity-demand-surge","title":"データセンターの電力需要急増","description":"需要増の背景と影響。"},{"href":"/subsidy-datacenter-it-strategy","title":"データセンター・ITの補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ・省エネ投資の税制優遇。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"再エネ100%調達の枠組み。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"PPAの基礎と類型。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"},{"href":"/case-study-semiconductor-re100-procurement","title":"半導体×RE100調達の事例","description":"24h高負荷率の比較ケース。"},{"href":"/case-study-warehouse-auto-rooftop-pv","title":"自動倉庫×屋根太陽光の事例","description":"自家消費の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyDatacenterHyperscalePuePage() {
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
