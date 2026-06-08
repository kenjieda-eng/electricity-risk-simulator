import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "施設園芸×ヒートポンプ加温で電気代・燃料費を削減した事例｜ハウス暖房を重油からヒートポンプ＋蓄熱・PPAで最適化（代表シナリオ）";
const pageDescription = "重油暖房機に依存しがちな施設園芸が、ヒートポンプ加温・蓄熱・自家消費太陽光やPPAでハウス暖房の燃料費と電気代を最適化した代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-greenhouse-horticulture-heatpump";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["施設園芸 ヒートポンプ 事例","ハウス 暖房 省エネ","施設園芸 電気代 燃料費 削減","園芸 PPA 自家消費太陽光","ヒートポンプ 蓄熱 投資回収"],
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

const h1Text = "施設園芸×ヒートポンプ加温：ハウス暖房を高効率化して燃料費と電気代を抑えた代表事例";
const breadcrumbTitle = "施設園芸×ヒートポンプ加温の事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。冬季のハウス暖房を重油暖房機に依存しがちな施設園芸が、ヒートポンプ加温・蓄熱・自家消費太陽光やPPAを組み合わせることで、燃料費と電気代の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は作目・地域・ハウス仕様・燃料/電力価格により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社が今回の施設園芸の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、暖房・補光・換気のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "ヒートポンプ加温・再エネ活用の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(高効率化・自家消費)と単価の最適化(契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["施設園芸で暖房がコストの中心を占める理由(冬季のハウス加温)とエネルギー構造","ヒートポンプ加温が重油暖房の燃料費を電力(高効率な熱供給)に置き換える仕組みと、ハイブリッド運転の考え方","蓄熱・自家消費太陽光・PPAを組み合わせ、昼夜の負荷と再エネを噛み合わせる考え方の目安","農業向け補助・ヒートポンプ補助・GX/CN投資促進税制を組み合わせた投資回収(ROI)の見立てと注意点","自社がヒートポンプ加温・再エネ活用に向いているかを見極める観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(冬季の暖房が中心)","detail":"施設園芸(ハウス栽培)は、冬季の作物の生育温度を保つための暖房がエネルギーコストの中心を占めるのが特徴です。多くのハウスが重油暖房機に依存し、燃料費の変動を直接受けやすい構造です。あわせて補光(LED)・循環扇・換気・潅水・CO2施用などで電力も使います。暖房という熱の作り方が、燃料費と電気代を大きく左右します。"},{"label":"規模(低圧/高圧・作目と地域で変動)","detail":"施設園芸は低圧から高圧まで規模はさまざまで、必要なエネルギーは作目・地域・ハウス仕様(被覆資材・断熱)で大きく変わります。寒冷地や高温性作物ほど暖房負荷が大きく、燃料費の比重が高まります。暖房を重油で賄うか電気のヒートポンプで賄うかで燃料費と電力のバランスが変わるため、両者を一体で捉える視点が前提になります。"},{"label":"契約区分(基本料金+電力量料金+調整費)","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。ヒートポンプ加温を導入すると暖房分の燃料費が電力に置き換わり、電力使用量は増えますが燃料費は減ります。自家消費太陽光や時間帯別料金・蓄熱を活用すれば、増える電力の単価を抑える余地もある構造です。"},{"label":"熱需要(夜間・低温時に暖房ピーク)","detail":"暖房需要は夜間や冷え込む時間帯にピークが立ち、日中は太陽熱で温度が上がりやすいのが施設園芸の特徴です。暖房ピークが夜間に寄るため、昼に発電する太陽光とは時間帯がずれます。蓄熱を併用すれば、日中の余力や安い時間帯に熱を作って貯め、夜間の暖房に使えるため、時間帯のミスマッチを埋める設計が論点になります。"},{"label":"コスト構造(燃料と電力が絡み合う)","detail":"施設園芸のエネルギーコストは、暖房用燃料(重油等)と電力(暖房ヒートポンプ・補光・換気・潅水)が絡み合います。燃料価格と電力単価の両方の変動を受けるため、片方だけの対策では総額が読みにくくなります。暖房の作り方・再エネの活用・蓄熱を一体で捉え、昼夜の負荷と再エネを噛み合わせることが、投資判断の出発点になります。"}];
const beforeState = [{"label":"重油暖房機への依存で燃料費が変動に弱い","detail":"冬季のハウス暖房を重油暖房機で賄い、エネルギーコストが燃料費に大きく偏っていました。燃料価格の変動を直接受けやすく、価格高騰時に経営を圧迫する構造です。暖房機の効率も経年で低下し、設定温度や運転の最適化も十分でなく、暖房の作り方が見直されないまま放置されていました。"},{"label":"暖房ピークと再エネ・安価時間帯がずれている","detail":"暖房ピークは夜間に寄る一方、太陽光が発電するのは日中で、時間帯がずれていました。蓄熱が未導入で、日中の余力や安い時間帯に熱を作って貯める仕組みがなく、ピークに合わせた暖房運転になっていました。再エネや時間帯別料金を活かせる構造になっていなかった状態です。"},{"label":"補光・換気・潅水などの電力が非効率","detail":"補光の照明が旧式で、循環扇・換気・潅水ポンプの運転も最適化されておらず、電力の使い方に無駄がありました。CO2施用や温度・湿度の管理も手動・固定的で、生育に必要な以上のエネルギーを使う場面もありました。暖房ほど比率は大きくないものの、回収の早い効率化が手付かずでした。"},{"label":"エネルギーの見える化が乏しく経験頼み","detail":"ハウス全体の燃料消費や電力量は把握できても、暖房・補光・換気など用途別の内訳や、暖房負荷の時間帯パターンがリアルタイムに見えず、運転は経験則に依存していました。環境制御・計測が十分でなく、ヒートポンプ・蓄熱・太陽光の容量選定に必要な負荷データの精緻な把握もできていませんでした。"}];
const approaches = [{"name":"ヒートポンプ加温・ハイブリッド運転","role":"暖房の燃料費を高効率な電力供給に転換","detail":"重油暖房機で賄っていた暖房の一部または大半を、ヒートポンプ加温に置き換えます。ヒートポンプは投入した電力以上の熱を取り出せるため、燃料費を効率の良い電力に転換できます。外気温が低く効率が下がる厳寒期は重油暖房機と併用するハイブリッド運転とし、両者の良いところを使い分ける設計が、施設園芸では現実的な打ち手とされます。"},{"name":"蓄熱の活用・負荷と再エネの整合","role":"昼夜の負荷と再エネ・安価時間帯を噛み合わせる","detail":"水蓄熱などの蓄熱槽を併用し、日中の太陽光の余力や時間帯別料金の安い時間帯にヒートポンプで熱を作って貯め、夜間の暖房ピークに使います。暖房ピーク(夜間)と発電(日中)のミスマッチを蓄熱で埋めることで、再エネの自家消費率を高め、単価面のメリットも得られます。蓄熱容量は暖房負荷のパターンに合わせて設計します。"},{"name":"自家消費太陽光・PPAの活用","role":"電力の単価とCO2を下げ価格変動に備える","detail":"ハウスの屋根や付帯地の太陽光を自家消費したり、PPA(電力購入契約)で再エネを調達したりして、増える電力の単価を抑え、価格変動への耐性を高めます。蓄熱と組み合わせれば昼の発電を夜の暖房に活かせます。導入形態(自己所有・PPA)や自家消費率で経済性が変わるため、負荷と発電の整合を見極めることが前提です。"},{"name":"補光・換気・環境制御・運用改善","role":"回収の早い領域と見える化で全体最適化","detail":"補光をLED化し、循環扇・換気・潅水ポンプの運転を最適化、環境制御で温度・湿度・CO2を生育に必要な範囲に保ちます。計測・見える化でハウスごとの消費と暖房負荷を把握し、ヒートポンプ・蓄熱・太陽光の運転を最適化します。回収の早い領域と見える化を組み合わせ、施設全体のエネルギーコストを総合的に抑えます。"}];
const caseScenarios = [{"title":"暖房の一部をヒートポンプ化(ハイブリッド)","before":"冬季暖房を重油暖房機中心で賄い、燃料費の変動に弱かった代表シナリオを目安に想定します。","after":"暖房の一部をヒートポンプ化し厳寒期は重油と併用するハイブリッド運転で、燃料費を効率の良い電力に転換しつつ暖房コストを一定程度低減する代表レンジを目安とします。","result":"燃料価格変動への耐性が高まり、電力は増えるが総エネルギーコストの最適化が見込めます。効果は作目・地域・外気条件により幅があります。"},{"title":"蓄熱併用で再エネ・単価を活かす","before":"暖房ピーク(夜間)と太陽光発電(日中)がずれ、安い時間帯も活かせていなかった代表シナリオを想定します。","after":"蓄熱槽を併用し日中・安価時間帯に熱を作って貯め、夜間暖房に使うことで再エネ自家消費率と単価を最適化する代表レンジを目安とします。","result":"昼夜のミスマッチを埋め、再エネ・時間帯別料金を活かせます。効果は暖房負荷パターンと発電量の整合により異なります。"},{"title":"自家消費太陽光・PPAの活用","before":"電力を全量購入し、単価と価格変動の影響を受けやすかった代表シナリオを想定します。","after":"自家消費太陽光やPPAで再エネを取り込み、増える電力の単価とCO2を抑え価格変動に備える代表レンジを目安とします。","result":"単価面・脱炭素面のメリットが得られます。導入形態や自家消費率で経済性が変わるため、負荷と発電の整合が前提です。"},{"title":"全社統合(ヒートポンプ+蓄熱+再エネ+運用改善)","before":"暖房・電力・再エネがそれぞれ分断され、統合的に最適化されていなかった代表シナリオを想定します。","after":"ヒートポンプ加温・蓄熱・自家消費太陽光/PPA・補光や換気の効率化を組み合わせ、燃料費と電気代を総合的に抑える代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金・税制活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定の経営体の実績ではなく、農林水産省・経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は作目・地域・ハウス仕様・燃料/電力価格により異なります。"},{"label":"削減レンジの根拠","detail":"ヒートポンプ加温・蓄熱・自家消費太陽光・補光LED化の効果は、省エネ補助金や施設園芸の省エネ・燃料転換の一般的な知見を参考にレンジ化しています。外気条件や作目の生育温度、燃料と電力の価格関係で効果は変わるため、自社では暖房負荷の実測に基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"施設園芸は暖房の燃料費が大きく、暖房の作り方を変えると年間で相応の金額が動き得ますが、本記事では精密な金額の断定は行いません。削減率(%)レンジと幅で示し、燃料価格・電力単価の変動で結果が動く点を併記して、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。農業向けの補助、ヒートポンプ関連の補助、SII(環境共創イニシアチブ)による省エネ補助金、GX・カーボンニュートラル投資促進税制などはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・暖房負荷の把握","detail":"電力量・デマンド記録、暖房用燃料の消費に加え、暖房負荷の時間帯・季節パターン、必要な生育温度を集め、用途別(暖房・補光・換気・潅水)に棚卸しします。暖房ピークの立ち方と外気条件を把握することが、ヒートポンプ・蓄熱・太陽光の容量選定の出発点です。環境制御・計測で見える化し、再エネとの整合余地を見積もります。"},{"label":"分析・診断と適性評価","detail":"第三者の診断や省エネ・燃料転換の専門知見を活用し、外気条件・生育温度・暖房負荷からヒートポンプの適性とハイブリッド運転の配分を評価します。蓄熱・自家消費太陽光・PPAなど施策ごとの投資対効果を比較し、回収の早い運用改善・LEDと設備投資を切り分けます。優先順位と概算投資額、補助金・税制適用可能性を含めた投資回収年数(ROI)を試算します。"},{"label":"相見積・補助金/税制・契約の検討","detail":"設備は複数社から相見積を取り、ライフサイクルコストで比較します。農業向け補助やヒートポンプ補助、GX・カーボンニュートラル投資促進税制の要件・公募スケジュールを確認し、申請に必要な根拠資料を準備します。自家消費太陽光・PPAの導入形態や、時間帯別料金など料金メニューの選び直しも併せて検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営と現場が共有できる指標(削減率・回収年数・CO2削減量)で行い、栽培への影響が少ない時期に工事を計画します。導入後は計測で暖房負荷・電力・燃料・発電の実績をモニタリングし、想定との差異を検証します。ハイブリッドの運転配分や蓄熱・補光の運用を見直し、PDCAとして継続的に効率を底上げします。"}];
const viewpoints = [{"label":"暖房の作り方(燃料か電力か)を価格関係で判断","detail":"ヒートポンプ加温は暖房の燃料費を効率の良い電力に転換しますが、有利不利は燃料価格と電力単価の関係で変わります。導入時に有利でも価格関係が変われば優位性が薄れる場合があります。複数の価格シナリオで暖房の作り方を比較し、ハイブリッド運転の配分も含めて価格変動に耐える計画かを見極めることが重要です。"},{"label":"昼夜の負荷と再エネを噛み合わせる","detail":"施設園芸は暖房ピークが夜間に寄り、太陽光の発電は日中という時間帯のミスマッチがあります。蓄熱を併用して日中・安価時間帯に熱を作って貯めると、再エネの自家消費率を高め単価も下げられます。負荷と発電のパターンを噛み合わせる設計が、再エネ活用の効果を左右する観点です。"},{"label":"外気条件・作目がヒートポンプ適性を決める","detail":"ヒートポンプは外気温が低いと効率が下がり、必要な生育温度が高い作目ほど暖房負荷が大きくなります。寒冷地や高温性作物では厳寒期に重油暖房機と併用するハイブリッドが現実的なことが多くなります。外気条件・作目・暖房負荷を実測し、適性とハイブリッドの配分を見極めることが導入可否を分ける観点です。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"ヒートポンプ・蓄熱・太陽光は、初期投資だけでなく保守費・設備寿命・想定削減額を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。燃料・電力価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者の診断を併用し、経営体のデータに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"外気条件・作目で効率が大きく変わる","detail":"ヒートポンプは外気温が低いと効率が下がり、高い生育温度を要する作目では暖房負荷が大きくなります。本記事の削減レンジは一定の条件を前提とした目安であり、寒冷地や高温性作物では効率が想定より低くなることがあります。外気条件・作目・暖房負荷の実測に基づいて適性とハイブリッドの配分を見極めることが前提です。"},{"label":"燃料価格と電力単価の関係でメリットが変わる","detail":"ヒートポンプ加温は暖房の燃料費を電力に置き換えるため、燃料価格と電力単価の相対関係でメリットが変動します。導入時に有利でも、価格関係が変われば優位性が薄れる場合があります。複数の価格シナリオで感度分析を行い、価格変動に耐える計画かを確認することが大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"農業向け補助やヒートポンプ補助、GX・カーボンニュートラル投資促進税制は、対象設備・効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"見える化だけでは削減しない","detail":"環境制御や計測を導入しても、可視化したデータを設備更新や運転・蓄熱の最適化につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、暖房負荷や発電を見て運転計画を最適化し、効果を検証するPDCAを回して初めて成果が出ます。栽培の都合との両立も欠かせません。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在の経営体の事例や優劣比較ではありません。投資判断は専門家の診断と経営体のデータに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["電力量・デマンド記録と暖房用燃料の消費を直近1年分そろえる","暖房負荷の時間帯・季節パターンと必要生育温度を把握する","暖房・補光・換気・潅水の用途別消費を計測または推計する","外気条件・作目からヒートポンプの適性とハイブリッド配分を評価する","蓄熱槽の併用余地と必要容量を試算する","自家消費太陽光・PPAの導入余地と自家消費率を確認する","暖房ピーク(夜間)と発電(日中)の整合余地を確認する","補光のLED化・循環扇/換気/潅水の運用最適化の余地を確認する","農業向け補助・ヒートポンプ補助・GX/CN税制の最新要件を確認する","時間帯別料金など料金メニューの活用余地を確認する","複数の燃料・電力価格シナリオで感度分析を行う","投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","ヒートポンプ加温・再エネ活用と契約見直しの優先度を考える材料になる","施設園芸の燃料費・電気代の高騰リスクを定量的に把握できる","中立的な立場で経営体のデータに基づき判断できる"];
const faqItems = [{"question":"この事例は実在の経営体ですか。数値は正確ですか。","answer":"いいえ。本記事は実在の経営体の事例ではなく、農林水産省・経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表シナリオです(2026年度時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は作目・地域・ハウス仕様・燃料/電力価格により異なるため、経営体の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事はヒートポンプ加温・再エネ活用の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の診断や経営体のデータに基づいて行うことをおすすめします。"},{"question":"ヒートポンプ加温はどんな施設園芸に向いていますか。","answer":"一般に、暖房負荷が安定して大きく、外気条件がヒートポンプの効率を確保できる地域・作目ほど向いています。ただし外気温が低いと効率が下がるため、寒冷地や高温性作物では厳寒期に重油暖房機と併用するハイブリッド運転が現実的なことが多くなります。外気条件・作目・暖房負荷を実測し、適性とハイブリッドの配分を見極めることが前提で、導入ありきで進めないことが重要です。"},{"question":"ヒートポンプを入れれば必ずコストは下がりますか。","answer":"必ず下がるとは限りません。ヒートポンプ加温は暖房の燃料費を電力に置き換えるため、電力使用量はむしろ増えますが、燃料費が減ることで総エネルギーコストの最適化を狙う施策です。有利不利は燃料価格と電力単価の関係で変わるため、電気代単体ではなく燃料費を含めた総コストで、複数の価格シナリオを用いてハイブリッド配分も含めて判断することが大切です。"},{"question":"暖房ピークと太陽光の時間帯がずれる問題はどうしますか。","answer":"施設園芸は暖房ピークが夜間に寄る一方、太陽光の発電は日中で時間帯がずれます。蓄熱槽を併用し、日中の発電の余力や時間帯別料金の安い時間帯にヒートポンプで熱を作って貯め、夜間の暖房に使うことでミスマッチを埋められます。これにより再エネの自家消費率を高め、単価面のメリットも得られます。蓄熱容量は暖房負荷のパターンに合わせて設計することが重要です。"},{"question":"自家消費太陽光やPPAは施設園芸で有効ですか。","answer":"自家消費太陽光やPPAは、増える電力の単価を抑えCO2や価格変動への耐性を高める選択肢になり得ます。蓄熱と組み合わせれば昼の発電を夜の暖房に活かせます。ただし導入形態(自己所有・PPA)や自家消費率、ハウスの屋根荷重や日射の遮りといった農業特有の条件で経済性・実現性が変わるため、負荷と発電の整合や栽培への影響を見極めたうえで検討することが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"農業向けの省エネ・燃料転換を支援する補助やヒートポンプ関連の補助、GX・カーボンニュートラル投資促進税制など、設備更新・低炭素投資を支援する制度が用意される年度があります。ただし対象設備・効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"ヒートポンプ加温は暖房の燃料費を電力に置き換えるため、電力使用量(購入電力量)はむしろ増え、再エネ賦課金は購入電力量に対して課されるため賦課金相当の負担も増える点に留意が必要です。一方で自家消費太陽光を活用すれば購入電力量そのものを減らせます。総エネルギーコストとしては燃料費の削減・電力増加・自家消費の効果を差し引きで評価し、燃料と電力の双方の価格動向を踏まえて総合的に判断することが重要です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・再エネ）","url":"https://www.enecho.meti.go.jp/"},{"name":"農林水産省（施設園芸・省エネ・みどりの食料システム）","url":"https://www.maff.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"},{"name":"一般財団法人ヒートポンプ・蓄熱センター（HPTCJ）","url":"https://www.hptcj.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/subsidy-agriculture-primary-strategy","title":"農業・一次産業の補助金戦略","description":"施設園芸の制度活用の整理。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"加温・給湯の高効率化。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの基礎","description":"再エネ調達の選択肢。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ・省エネ投資の税制優遇。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/subsidy-roi-payback-calculation","title":"補助金活用時の投資回収計算","description":"補助金込みの回収試算。"},{"href":"/battery-storage-bcp-peak-cut-hybrid","title":"蓄電池×ピークカット×BCP","description":"蓄電・蓄熱の活用論点。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"補光・照明の省エネ効果。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-logistics-solar-integration","title":"物流倉庫×自家消費太陽光の事例","description":"自家消費の進め方。"},{"href":"/case-study-warehouse-auto-rooftop-pv","title":"自動倉庫×屋根太陽光の事例","description":"自家消費率最適化のケース。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"省エネ投資の進め方。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyGreenhouseHorticultureHeatpumpPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-06-08"
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
          <AuthorBadge publishedAt="2026-06-08" updatedAt="2026-06-08" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は作目・地域・ハウス仕様・燃料/電力価格により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは多くの施設園芸で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、ヒートポンプ加温を軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">施策や領域の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は作目・地域・価格関係により異なります。実在の経営体の事例ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定の経営体の実績ではなく、公開された業界統計・採択事例集・公的データから再構成した代表レンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2026年度時点の公開情報（農林水産省・経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は作目・地域・使用実態により異なります。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と暖房負荷の取得から始めましょう。</p>
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
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-08" />
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
            heading="電力契約・省エネ・ヒートポンプ/再エネ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体・経営体の電力契約の見直しや省エネ・ヒートポンプ/再エネ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
