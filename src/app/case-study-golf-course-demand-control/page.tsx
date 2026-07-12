import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import ConsultCta from "../../components/ConsultCta";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "ゴルフ場×デマンド管理で電気代を削減した事例｜ナイター照明LED・カート充電・散水ポンプ（代表シナリオ）";
const pageDescription = "ナイター照明・電動カート充電・散水ポンプ・クラブハウス空調で電力を広く使うゴルフ場が、照明のLED化・カート充電の時間帯分散・散水ポンプのインバータ化・デマンド制御/力率改善・契約電力の最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-golf-course-demand-control";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["ゴルフ場 電気代 削減 事例","ナイター照明 LED 省エネ","電動カート 充電 デマンド","散水ポンプ インバータ 省エネ","ゴルフ場 デマンド 力率 改善"],
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

const h1Text = "ゴルフ場×デマンド管理：ナイター照明LED・カート充電・散水ポンプで電気代を抑えた代表事例";
const breadcrumbTitle = "ゴルフ場の電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。ゴルフ場は、コースの散水ポンプ・電動カート充電・ナイター照明・クラブハウスの空調・厨房・浴場など、屋外屋内にまたがる多様な電力を使う施設です。季節や営業時間帯で負荷が変動し、朝夕の散水やカート一斉充電、ナイター点灯が重なるとデマンド（最大需要電力）が跳ねやすい構造です。ナイター照明のLED化、カート充電の時間帯分散、散水ポンプのインバータ化・運用改善、デマンド制御・力率改善（進相コンデンサ）、契約電力の最適化で電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回のゴルフ場×デマンド管理の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機（/industry-electricity-calculator）を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、ナイター照明・カート充電・散水ポンプ・クラブハウスのどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "ナイター照明のLED化やカート充電の分散、散水ポンプの効率化の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（LED化・ポンプ効率化）と単価・基本料金の最適化（デマンド/力率・契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["ゴルフ場で電気代が重くなる理由（散水ポンプ・カート充電・ナイター照明の複合負荷とデマンド）の構造","ナイター照明のLED化・散水ポンプのインバータ化が購入電力量を下げうる仕組みと適性条件","電動カート充電の時間帯分散・運用改善で消費電力量とピークを抑える考え方の目安","デマンド制御・力率改善（進相コンデンサ）・契約電力の最適化で基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（散水・カート・照明・空調の複合負荷）","detail":"ゴルフ場は、コースの散水ポンプ、電動カート充電、フェアウェイやナイターの照明、クラブハウスの空調・厨房・浴場など、屋外屋内にまたがる多様な電力を使う施設です。朝夕の散水やプレー後のカート一斉充電、ナイター点灯といった負荷が時間帯で重なりやすく、稼働パターンによって電力の使い方が変わります。季節による営業時間や散水量の変動も大きく、負荷の山谷がはっきりしているのが特徴です。"},{"label":"規模（高圧受電の中堅需要が中心）","detail":"18ホール規模のゴルフ場は高圧受電の中堅需要が多く、ナイター設備や大型のクラブハウス・宿泊施設を併設する場合は契約電力が高めに設定されがちです。受変電設備を自社保有し、散水ポンプやカート充電、ナイター照明の同時稼働で契約電力（デマンド）のピークが決まる構造です。基本料金が契約電力で決まるため、ピークをどう抑えるかが料金に直結します。本記事は代表シナリオとして規模の異なる複数パターンを想定します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。ゴルフ場はナイター照明や空調で電力量が大きくなりやすい一方、散水・カート・照明の同時稼働でデマンドが跳ねると基本料金も膨らみます。量（kWh）の削減と契約電力の抑制の双方が効く構造で、どちらにどれだけ取り組むかを切り分けて考えることが出発点になります。"},{"label":"熱・水需要（散水と給湯・浴場が絡む）","detail":"ゴルフ場はコース散水のためのポンプ動力が大きく、クラブハウスでは浴場の給湯・厨房・空調といった熱・水需要も加わります。散水ポンプは定格運転のままで無駄が残りやすく、インバータ化や運用改善に削減余地が残りやすい領域です。給湯はヒートポンプ化の余地があり、電力と熱を横断した最適化が効く場合があります。設備の状態を把握することが省エネの起点になります。数値は代表シナリオの目安です。"},{"label":"コスト構造（電力・季節変動・稼働率が絡む）","detail":"ゴルフ場のエネルギーコストは、散水ポンプ・カート充電・ナイター照明・空調の電力が絡み合い、天候・来場者数・営業時間といった稼働率の影響も強く受けます。エネルギー単体ではなく、営業計画・散水計画・カート運用まで含めて捉える必要があります。どの設備でどれだけ使い、いつピークを作るかを把握することが各施策の判断の出発点です。金額はすべて代表シナリオの目安です。"}];
const beforeState = [{"label":"ナイター照明・投光器が旧式で電力を食っている","detail":"経年したナイター照明やクラブハウス・練習場の投光器がメタルハライドや水銀灯のまま残り、点灯中の消費電力が大きい状態でした。LED化の余地があるにもかかわらず「まだ使えるから」と更新が先送りされ、ナイター営業日の電力量とデマンドの双方に跳ね返っていました。照明別の消費を把握する仕組みも乏しく、どこから手を付けるべきか優先順位を付けられない状態です。本記事は代表シナリオとして共通課題を整理します。"},{"label":"電動カートの一斉充電でピークが跳ねる","detail":"プレー終了後の夕方に多数の電動カートが一斉に充電を始め、散水やナイター点灯と重なって契約電力（デマンド）のピークが高止まりしていました。充電の時間帯をずらす運用や監視の仕組みがなく、基本料金が過大になりがちです。充電器の効率や台数管理も属人的で、ピークの平準化余地が見過ごされていた代表シナリオです。特定の設備ベンダーを推奨するものではありません。"},{"label":"散水ポンプが定格運転で無駄が残る／力率が低い","detail":"コース散水のポンプが負荷に関わらず定格運転を続け、インバータによる可変速制御がされておらず、無駄な電力が残っていました。加えて誘導性負荷が多く力率が低下し、力率割引を十分に取れていない、あるいは力率割増を受けている状態でした。散水スケジュールもタイマー任せで、天候・土壌状態に応じた最適化がされておらず、契約電力が実態に対して過大でないかの検証もされていませんでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"施設全体の電力量は把握できても、設備別・時間帯別（散水・カート・照明・空調）の内訳がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。BEMS・エネマネが未整備で、待機電力や異常消費に気づきにくく、各施策の効果を検証する基盤もありません。多くの現場で共通する課題を代表シナリオとして整理しています。"}];
const approaches = [{"name":"ナイター照明・投光器のLED化","role":"点灯中の購入電力量とデマンドを同時に削減","detail":"ナイターや練習場・クラブハウスの投光器・照明をLEDへ更新し、点灯中の消費電力を抑えます。調光・点灯エリアの制御を組み合わせると、来場状況に応じた無駄な点灯を減らせます。ナイター営業日の電力量に直接効くうえ点灯時のピークも下がるため、量とデマンドの双方に効果が出やすい領域の一つです。効果は既存照明の方式・点灯時間により幅があります。特定の設備ベンダーを推奨するものではありません。"},{"name":"電動カート充電の時間帯分散・運用改善","role":"ピークを平準化し基本料金を抑える","detail":"プレー後に集中しがちなカートの一斉充電を、タイマーや充電管理でナイター・散水と重ならない時間帯へ分散し、契約電力（デマンド）のピークを平準化します。充電台数の段階制御や、来場計画に応じた充電スケジュールの調整で、同時ピークを抑えます。投資を伴わない運用改善は回収が早く、まず着手しやすい打ち手です。効果は運用・来場パターンにより幅があります。"},{"name":"散水ポンプのインバータ化・散水運用最適化","role":"消費の中心である動力を源流から効率化","detail":"散水ポンプにインバータを導入して負荷に応じた可変速運転へ切り替え、定格運転の無駄を削減します。天候・土壌状態に応じた散水スケジュールの見直しや、夜間・早朝への散水時間帯の平準化でピークも抑えます。給湯のヒートポンプ化を併せて検討する場合もあります。稼働時間が長い設備ほど効果が積み上がりますが、投資は回収年数の見極めが前提です。本記事は代表シナリオとして考え方を整理します。"},{"name":"デマンド制御・力率改善・契約電力最適化","role":"基本料金・単価面を契約と運用の両面で最適化","detail":"デマンド監視で散水・カート充電・ナイターの同時立ち上げを避け、ピークを平準化して契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて契約電力が実態に対して過大でないかを検証し、適正化余地を確認します。本記事は代表シナリオとして観点を整理するもので、量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 中小ゴルフ場・ナイター照明LED化＋カート充電分散","before":"高圧受電の中小ゴルフ場が、旧式ナイター照明と夕方のカート一斉充電を抱えていた代表シナリオを目安に想定します。設備別の消費は見えておらず、照明の電力量と充電ピークが料金に跳ね返っていました。","after":"ナイター・投光器のLED化と、カート充電の時間帯分散を組み合わせ、電力量とデマンドの双方を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約90万kWh × 改善 約1.5円/kWh ＝ 年間 ▲135万円（検算：90×1.5＝135）。さらに 5年累計 ▲135万円 × 5年 ＝ ▲675万円（検算：135×5＝675）。LED化と充電分散は比較的着手しやすく回収も早い傾向ですが、実額は照明方式・点灯時間・充電運用により異なります。"},{"title":"② 中堅ゴルフ場・散水ポンプ効率化＋デマンド/力率改善","before":"ナイター営業と大型クラブハウスを持つ中堅ゴルフ場が、散水ポンプの定格運転と低い力率、同時ピークを抱えていた代表シナリオを想定します。基本料金が過大で、力率割引を十分に取れていませんでした。","after":"散水ポンプのインバータ化と、デマンド監視によるピーク平準化・進相コンデンサによる力率改善・契約電力の適正化を組み合わせ、量と基本料金の双方を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約160万kWh × 改善 約1.5円/kWh ＝ 年間 ▲240万円（検算：160×1.5＝240）。さらに 5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（検算：240×5＝1200）。契約電力の水準が高いほど効果が出やすい傾向ですが、実額は散水量・力率・契約条件により異なります。量（kWh）の削減施策と併せて評価することが前提です。"},{"title":"③ 大規模・宿泊併設ゴルフ場の総合省エネ","before":"宿泊施設・浴場・複数コースを併設する大規模ゴルフ場で、照明・散水・カート・空調・給湯が広く旧式のまま残り、稼働時間も長かった代表シナリオを想定します。設備更新と運用改善の双方に削減余地がありました。","after":"ナイターLED化・散水ポンプ効率化・カート充電分散・給湯ヒートポンプ化・デマンド/力率改善を重ね、補助金・税制の活用可能性も含めて回収年数を試算した代表シナリオです。数値は目安です。","result":"年間使用量 約250万kWh × 改善 約1.6円/kWh ＝ 年間 ▲400万円（検算：250×1.6＝400）。さらに 5年累計 ▲400万円 × 5年 ＝ ▲2,000万円（検算：400×5＝2000）。総合更新は投資が大きく回収年数の見極めが前提で、実額は設備仕様・稼働・補助金採択の有無により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲135万円／②▲240万円／③▲400万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、燃料・電力単価や稼働の変動は織り込んでいません。実際の効果は契約条件・設備構成・稼働実態により異なります。"},{"label":"削減額の考え方（2段電卓の検算）","detail":"各代表シナリオは、まず年間使用量×改善単価で年間削減額を求め（①90×1.5＝135、②160×1.5＝240、③250×1.6＝400、単位は万円）、次にその年間額×5年で5年累計を求めています（①135×5＝675、②240×5＝1,200、③400×5＝2,000）。これは効果の規模感を示す単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。数値はあくまで目安です。"},{"label":"金額表現の扱い","detail":"ゴルフ場はナイター照明・散水・空調の電力使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。断定的な普遍化は避け、実額は設備の状態・稼働・エネルギー単価・契約条件で変動する点を併記しています。過度な期待を避け、自社の設備別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・設備別使用量の把握","detail":"受変電の電力量・デマンド記録に加え、散水ポンプ・カート充電・ナイター照明・空調の設備別消費、点灯時間・散水スケジュール・充電時間帯を集めて棚卸しします。どの設備がいつピークを作るかを把握することが、LED化・ポンプ効率化・カート分散・契約最適化の出発点です。BEMSや簡易計測で設備別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、照明LED化・カート充電分散・運用改善など回収の早い施策と、散水ポンプのインバータ化や給湯ヒートポンプ化のような投資を伴う施策を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。効果が小さい設備の更新を急がない判断も含め、代表シナリオの考え方として整理します。"},{"label":"相見積・補助金／税制の検討","detail":"LED照明・インバータ・進相コンデンサ・ヒートポンプなどは複数社から相見積を取り、仕様・保証・保守費を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、クローズ期間やオフシーズンに合わせて照明更新・ポンプ入替工事を計画します。導入後はBEMSで設備別の消費とピークの実績をモニタリングし、想定との差異を検証します。運用改善（カート充電分散・散水最適化・デマンド管理）も継続し、PDCAとして効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"LED化・散水ポンプ効率化・運用改善は使用量（購入電力量）を減らす取り組み、デマンド制御・力率改善・契約電力の適正化は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。ゴルフ場はナイターや散水で使用量が大きい一方、散水・カート・照明の同時稼働による基本料金の最適化も無視できません。要素を切り分けると投資配分の判断がしやすくなります。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"散水ポンプのインバータ化や給湯ヒートポンプ化のような投資は、初期費用だけでなく想定削減額・保守費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。数値は代表シナリオの目安として捉えてください。"},{"label":"運用改善は投資が小さく効きやすい","detail":"カート充電の時間帯分散や散水スケジュールの最適化、デマンド管理は、設備更新に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。同時ピークを避けるだけでも契約電力＝基本料金を抑えられる場合があります。大型の設備更新を検討する前に、運用改善で取れる分を先に取り切る順序が現実的です。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・熱・水を分断して最適化すると全体最適を逃します。給湯のヒートポンプ化や散水ポンプの効率化のように電力と熱・水を横断する施策は、片方だけ見ると効果を過小評価しがちです。施設全体のエネルギーフローで俯瞰し、最も効く順に手を打つ視点が欠かせません。ナイター照明・カート・散水・空調・給湯までまとめて捉えることが重要です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の照明メーカー・設備ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の設備別データに基づいて判断することで過度な期待や偏った投資を避けられます。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備の状態で効果は大きく変わる","detail":"LED化・散水ポンプ効率化の効果は、既存照明の方式・点灯時間、ポンプの稼働パターンに強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでにLED化が進んだ施設や稼働時間が短い設備では効果が小さくなります。導入ありきで進めず、設備別の計測に基づいて削減ポテンシャルを見極めることが重要です。数値の普遍化は避けてください。"},{"label":"設備更新は回収年数の見極めが前提","detail":"散水ポンプのインバータ化や給湯ヒートポンプ化は削減効果が期待できる反面、投資額も相応にかかり、稼働時間が短い設備では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。運用改善で取れる分を先に取り、更新は回収年数とライフサイクルで判断することが安全です。導入ありきで進めない姿勢が大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要になるため、設備別の計測データの整備を先行させると有利です。"},{"label":"デマンド・力率改善だけでは量は減らない","detail":"デマンド制御や力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆にLED化・散水ポンプ効率化は量に効きますが、ピークの平準化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資判断は専門家の診断と自社の設備別データに基づき、複数の選択肢を比較したうえで行ってください。数値の断定的な引用は避けてください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","散水ポンプ・カート充電・ナイター照明・空調の設備別消費を計測または推計する","ナイター・投光器の照明方式と点灯時間を集計する","電動カートの充電時間帯と同時充電台数を時間帯別に把握する","散水ポンプの運転方式（定格／インバータ）と散水スケジュールを点検する","散水・カート充電・ナイターの同時立ち上げによるデマンドピークを時間帯別に把握する","力率と力率割引・割増の適用状況を契約書で確認する","契約電力が実態に対して過大でないかを検証する","給湯・浴場のボイラ／ヒートポンプの状況と熱利用の余地を確認する","カート充電分散・散水最適化など運用改善の余地を洗い出す","SII補助金・GX/CN税制・ものづくり補助金・ヒートポンプ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","LED化・ポンプ効率化・カート分散と契約見直しの優先度を考える材料になる","高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の設備別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲135万円・▲240万円・▲400万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・設備構成・稼働実態により異なるため、自社の設備別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や照明メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事はナイター照明のLED化・カート充電分散・散水ポンプ効率化・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"ナイター照明のLED化・散水ポンプの効率化はどんな場合に効果が出ますか。","answer":"一般に、メタルハライドや水銀灯など旧式のナイター照明が残る施設、点灯時間が長い施設、散水ポンプが定格運転のままの施設ほど効果が出やすい傾向です。LED化は点灯中の電力量とデマンドの双方に効き、ポンプのインバータ化は負荷変動の大きい散水で効きます。逆にすでにLED化が進んだ施設や稼働が短い設備では効果が小さくなります。まず設備別に計測し、削減ポテンシャルを見極めてから着手することが重要です。"},{"question":"散水ポンプのインバータ化や給湯ヒートポンプ化は必ず得になりますか。","answer":"必ず得になるとは限りません。設備更新は削減効果が期待できる一方で投資額も相応にかかり、稼働時間が短い設備では回収年数が長くなります。まずカート充電分散・散水最適化・運用改善で取れる分を取り切り、更新は補助金・税制の活用可能性も含めた回収年数とライフサイクルコストで判断するのが堅実です。導入ありきではなく、感度分析で価格変動への耐性も確認してください。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"散水・カート充電・ナイター照明の同時立ち上げを避けてデマンドのピークを平準化すると、契約電力に基づく基本料金を抑えられる場合があります。デマンド監視の導入や、カート充電の時間帯分散が有効です。あわせて進相コンデンサによる力率改善で力率割引を確保し、契約電力が実態に対し過大でないかを検証します。ただし使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"デマンド制御と力率改善はどう違いますか。","answer":"デマンド制御は一定時間の最大需要（デマンド）を抑えて契約電力＝基本料金を下げる取り組みで、散水・カート充電・ナイターの同時稼働を避けるのが基本です。力率改善は進相コンデンサで無効電力を補償し、力率割引の確保や力率割増の回避につなげる取り組みです。どちらも使用量そのものを大きく減らすものではないため、LED化・散水ポンプ効率化など量の削減施策と組み合わせて考えることが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"LED化・散水ポンプ効率化・カート充電分散で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は設備の状態・稼働により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/public-gym-electricity-cost-review","title":"スポーツ施設の電気代見直し","description":"屋外照明・空調の電力論点（近縁業種）。"},{"href":"/amusement-facility-electricity-cost-review","title":"アミューズメント施設の電気代見直し","description":"レジャー施設の電力構造（近縁業種）。"},{"href":"/parking-facility-electricity-cost-review","title":"駐車場の電気代見直し","description":"照明・充電設備の電力論点。"},{"href":"/corporate-ev-charging-basics","title":"法人のEV充電の基礎","description":"カート/EV充電併設の契約設計。"},{"href":"/subsidy-hotel-leisure-strategy","title":"ホテル・レジャーの補助金戦略","description":"レジャー施設の投資支援。"},{"href":"/case-study-restaurant-chain-demand-control","title":"飲食チェーン×デマンド管理の事例","description":"ピークカットの進め方。"},{"href":"/demand-control-reduction-effect","title":"デマンド削減の効果","description":"ピーク抑制の効果目安。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調の削減効果","description":"ナイター照明LED化の効果目安。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyGolfCourseDemandControlPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-13"
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
          <AuthorBadge publishedAt="2026-07-13" updatedAt="2026-07-13" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・設備構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド制御ガイド</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱/水需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。近縁業種の論点は{" "}
              <Link href="/public-gym-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スポーツ施設の電気代見直し</Link>
              {" "}や{" "}
              <Link href="/amusement-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">アミューズメント施設の電気代見直し</Link>
              {" "}も参照してください。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代の構造上の課題を整理します。これらはナイター設備やカート充電を持つ多くのゴルフ場で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、ナイター照明のLED化・カート充電分散を軸に、散水ポンプ効率化・デマンド/力率改善を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業態の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・稼働実態により異なります。実在企業の事例ではありません。各シナリオは年間使用量×改善単価で年間額を求め、さらに×5年で5年累計を示す2段の電卓検算です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定企業の実績ではなく、公開された業界統計・採択事例集・公的データから再構成した代表シナリオのレンジです。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と設備別使用量の取得から始めましょう。</p>
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
            <ConsultCta from="golf-course" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-13" />
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
            heading="ナイター照明LED化・カート充電分散・散水ポンプ効率化・電力契約の進め方を中立的な専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・設備更新投資の判断材料を整理します。本記事の事例に近い取り組みについて初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
