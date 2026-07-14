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

const pageTitle = "映画館・アミューズメント×空調最適化で電気代を削減した事例｜上映/営業スケジュール連動（代表シナリオ）";
const pageDescription = "映画館・アミューズメント施設は大空間の空調が電力の中心で、上映・営業スケジュールと連動しない一律運転が電気代を押し上げます。上映/営業スケジュール連動の空調制御・在室連動換気・高効率空調更新・デマンド制御/力率改善・契約電力最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-cinema-amusement-hvac";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["映画館 電気代 削減 事例","アミューズメント 空調 省エネ","上映スケジュール 空調制御","在室連動 換気 デマンド","高効率空調 更新 補助金"],
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

const h1Text = "映画館・アミューズメント×空調最適化：上映/営業スケジュール連動で電気代を抑えた代表事例";
const breadcrumbTitle = "映画館・アミューズメントの電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。映画館・アミューズメント施設は、スクリーンやアトラクションのある大空間を快適に保つ空調（HVAC）が電力の中心で、換気・照明・映像/音響機器・厨房やアーケード機器の動力も複合します。とりわけ空調は、上映・営業スケジュールや来場状況と連動させずに一律運転すると、無人・閑散時間まで過大に冷暖房してしまい電気代を押し上げます。上映/営業スケジュール連動の空調制御、在室・CO2連動の換気、高効率空調への更新、デマンド制御・力率改善（進相コンデンサ）、契約電力の最適化によって電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・施設構成・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回の映画館・アミューズメント×空調最適化の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、空調・換気・照明・機器動力のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "上映/営業スケジュール連動の空調制御や高効率空調更新の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（スケジュール連動・在室連動換気・空調更新）と単価・基本料金の最適化（デマンド/力率・契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["映画館・アミューズメントで電気代が重くなる理由（大空間空調の熱負荷とデマンド・力率）の構造","上映/営業スケジュール連動の空調制御・在室連動換気が購入電力量を下げうる仕組みと適性条件","高効率空調への更新・インバータ化・運用改善で消費電力量を縮小する考え方の目安","デマンド制御・力率改善（進相コンデンサ）・契約電力の最適化で基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（大空間空調と来場変動の複合）","detail":"映画館・アミューズメント施設は、スクリーンのあるシアターやアトラクション・アーケードの大空間を快適に保つ空調が電力の中心で、外気導入の換気、照明、映像・音響機器、厨房・売店の動力が複合します。来場は上映時間・曜日・季節・話題作の有無で大きく変動し、満席と空席で必要な冷暖房・換気量が変わります。上映・営業スケジュールと連動しない一律運転は、無人・閑散時間まで過大に空調してしまうのが特徴です。"},{"label":"規模（高圧・特別高圧の中堅需要が中心）","detail":"シネマコンプレックスや大型アミューズメント施設は高圧受電の中堅規模が多く、複合商業施設内の大型館では特別高圧に及ぶ規模もあります。受変電設備を自社または施設側で保有し、空調の同時立ち上げで契約電力（デマンド）が高めに設定されがちです。基本料金が契約電力で決まるため、開館前の一斉冷暖房によるピークをどう抑えるかが料金に直結します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。大空間空調は運転時間中の電力量が大きく電力量料金の比率が高くなりやすい一方、開館前の一斉立ち上げでデマンドが跳ねると基本料金も膨らみます。量（kWh）の削減と契約電力の抑制の双方が効く構造です。"},{"label":"熱需要（空調・換気に削減余地が残る）","detail":"シアターやアトラクション空間は天井が高く容積が大きいため、上映前の予冷・予熱と満席時の顕熱・潜熱処理に大きな空調負荷がかかり、外気導入の換気も熱負荷として効いてきます。来場が少ない時間帯まで一律に空調・換気していると熱ロスが積み上がり、スケジュール連動・在室連動に削減余地が残りやすい領域です。空調・換気の運転実態を把握することが、映画館・アミューズメントの省エネの起点になります。"},{"label":"コスト構造（空調・換気・機器が絡む）","detail":"施設のエネルギーコストは、空調の電力、外気導入・排気の換気動力、映像・音響・アーケード機器やサイネージの電力、照明が絡み合い、来場変動による負荷率の影響も受けます。エネルギー単体ではなく、上映・営業スケジュールや運用・設備更新まで含めて捉える必要があります。どの設備がどの時間帯にどれだけ使うかを把握することが判断の出発点になります。"}];
const beforeState = [{"label":"上映・営業スケジュールと空調が連動していない","detail":"上映・営業スケジュールや来場状況にかかわらず、空調を一律のスケジュールや手動運転で回し、上映のないスクリーンや閑散時間帯まで過大に冷暖房していました。予冷・予熱のタイミングや設定温度が「昔からこの運用」で固定され、無人時間の空調ロスが電力量に跳ね返っていました。上映開始・終了に合わせた最適な立ち上げ・停止の仕組みがなく、改善の優先順位を付けられない状態です。"},{"label":"換気を来場状況と連動させず一律運転している","detail":"外気導入・排気の換気を、満席・空席にかかわらず最大付近で一律運転し、来場の少ない時間帯まで過剰に外気を取り込んで空調負荷を増やしていました。CO2センサーによる在室連動換気（デマンド制御換気）の余地があるにもかかわらず導入されておらず、換気動力と空調負荷の双方で非効率が残っていました。快適性・衛生と省エネの両立を図る発想が乏しく、改善機会を取りこぼしていた代表シナリオです。"},{"label":"開館前の一斉立ち上げでデマンドが跳ねる／力率が低い","detail":"開館前に複数スクリーン・大空間の空調が同じ時間帯に一斉立ち上がり、契約電力（デマンド）のピークが高止まりしていました。立ち上げをずらす運用や監視の仕組みがなく、基本料金が過大になりがちです。加えて空調・換気の誘導性負荷が多く力率が低下し、力率割引を十分に取れていない、あるいは力率割増を受けている状態でした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"施設全体の電力量は把握できても、スクリーン別・エリア別・用途別（空調・換気・照明・機器）の内訳がリアルタイムに見えず、改善は現場担当者の経験に依存していました。BEMS・エネマネが未整備で、空調の空運転や無人時間の過剰運転に気づきにくく、スケジュール連動・在室連動換気・空調更新の効果を検証する基盤もありません。"}];
const approaches = [{"name":"上映/営業スケジュール連動の空調制御","role":"無人・閑散時間の過剰空調を減らし購入電力量を削減","detail":"上映・営業スケジュールや予約状況と空調運転を連動させ、上映開始前の必要最小限の予冷・予熱、上映のないスクリーンの停止・弱運転、閉館前の惰性運転活用（プレクール／プレヒートの最適化）を行います。BEMSやスケジューラでスクリーン別に立ち上げ・停止を制御し、無人時間の過剰空調を抑えます。来場変動が大きい映画館・アミューズメントで効果が出やすい領域の一つで、効果は稼働パターンにより幅があります。"},{"name":"在室連動換気・高効率空調更新","role":"換気・空調を源流から効率化","detail":"CO2センサーによる在室連動換気（デマンド制御換気）で来場に応じて外気量を調整し、過剰換気による空調負荷を抑えます。あわせて老朽空調を高効率ヒートポンプ空調・高COP機へ更新し、送風機・ポンプにインバータを導入して負荷に応じた可変速運転へ切り替えます。全熱交換器の活用で外気負荷も低減します。運転時間が長い大空間ほど更新効果が積み上がりますが、大型投資のため回収年数の見極めが前提です。"},{"name":"運用改善・設定最適化","role":"投資を伴わずに空調・換気の運転ロスを削る","detail":"設定温度の適正化（過冷房・過暖房の是正）、予冷・予熱時間の見直し、上映間のインターバルでの弱運転、フィルタ清掃など保守の徹底で無駄な運転を抑えます。上映集約や上映スケジュールの平準化により、空調立ち上げのデマンドピーク抑制にもつながります。投資を伴わない運用改善は回収が早く、まず着手しやすい打ち手です。"},{"name":"デマンド制御・力率改善・契約電力最適化","role":"基本料金・単価面を契約と運用の両面で最適化","detail":"デマンド監視で複数スクリーン・大空間空調の一斉立ち上げを避け、ピークを平準化して契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて契約電力が実態に対して過大でないかを検証し、適正化余地を確認します。本記事は代表シナリオとして観点を整理するもので、量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 中小映画館・スケジュール連動＋運用改善","before":"高圧受電の中小映画館が、上映スケジュールと連動しない一律空調運転と過剰換気を抱えていた代表シナリオを目安に想定します。スクリーン別の消費は見えておらず、無人時間の過剰空調が電力量に跳ね返っていました。","after":"上映スケジュール連動の空調制御と設定温度・予冷時間の運用改善、在室連動換気の一部導入を組み合わせ、空調・換気起因の消費を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約90万kWh × 改善 約1.5円/kWh ＝ 年間 ▲135万円（検算：90×1.5＝135）。5年累計 ▲135万円 × 5年 ＝ ▲675万円（検算：135×5＝675）。スケジュール連動・運用改善は比較的着手しやすく回収も早い傾向ですが、実額は施設の稼働・空調構成・エネルギー単価により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"② 中堅アミューズメント・在室連動換気＋デマンド/力率改善","before":"アーケードとアトラクションを持つ中堅アミューズメント施設が、来場変動に連動しない過剰換気と、開館前の空調一斉立ち上げによるデマンド高止まり・低力率を抱えていた代表シナリオを想定します。基本料金が過大で、力率割引を十分に取れていませんでした。","after":"CO2連動の在室連動換気と、デマンド監視によるピーク平準化・進相コンデンサによる力率改善・契約電力の適正化を組み合わせ、使用量と基本料金・単価面を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約160万kWh × 改善 約1.5円/kWh ＝ 年間 ▲240万円（検算：160×1.5＝240）。5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（検算：240×5＝1200）。来場変動が大きいほど在室連動の効果が出やすい傾向ですが、実額は来場実態・力率・契約条件により異なります。量（kWh）の削減施策と契約最適化を併せて評価することが前提です。"},{"title":"③ 大規模シネコン・高効率空調更新＋スケジュール連動","before":"特別高圧クラスの大規模シネマコンプレックスが、老朽空調の効率低下と長時間運転、スケジュール非連動の一律運転を抱えていた代表シナリオを想定します。運転時間が長く、空調更新とスケジュール連動の双方に削減余地がありました。","after":"高効率ヒートポンプ空調への更新・インバータ化・全熱交換器活用に、上映スケジュール連動の運転最適化を重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。","result":"年間使用量 約300万kWh × 改善 約1.2円/kWh ＝ 年間 ▲360万円（検算：300×1.2＝360）。5年累計 ▲360万円 × 5年 ＝ ▲1,800万円（検算：360×5＝1800）。更新は大型投資のため回収年数の見極めが前提で、実額は空調の仕様・稼働・補助金採択の有無により変動します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲135万円／②▲240万円／③▲360万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、電力単価や来場・稼働の変動は織り込んでいません。実際の効果は契約条件・施設構成・稼働実態により異なります。"},{"label":"削減額の考え方（2段電卓検算）","detail":"各代表シナリオは、年間使用量×改善単価で年間削減額を算出し（①90×1.5＝135、②160×1.5＝240、③300×1.2＝360、単位は万kWh×円/kWh＝万円）、さらに年間削減額×5年で5年累計を算出しています（①135×5＝675、②240×5＝1,200、③360×5＝1,800、単位は万円）。これは効果の規模感を示すための単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。"},{"label":"金額表現の扱い","detail":"大空間空調を持つ映画館・アミューズメントは空調のエネルギー使用量が大きく、わずかな運転最適化でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。断定的な普遍化は避け、実額は施設の稼働・空調構成・エネルギー単価・契約条件で変動します。過度な期待を避け、自社の用途別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・用途別使用量の把握","detail":"受変電の電力量・デマンド記録に加え、スクリーン別・エリア別の空調・換気・照明・機器の消費、上映・営業スケジュール、来場変動を棚卸しします。どの設備がいつピークを作り、どの時間帯に過剰運転しているかを把握することが、スケジュール連動・在室連動換気・空調更新・契約最適化の出発点です。BEMSや簡易計測で用途別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、スケジュール連動・運用改善・在室連動換気など回収の早い施策と、高効率空調更新のような大型投資を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。"},{"label":"相見積・補助金／税制の検討","detail":"空調・換気設備・進相コンデンサ・BEMSなどは複数社から相見積を取り、仕様・保証・保守費・運用計画を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、改装に合わせて空調更新・制御工事を計画します。導入後はBEMSで用途別消費とスケジュール連動の実績をモニタリングし、想定との差異を検証します。運用改善（設定最適化・デマンド管理）も継続し、PDCAとして効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"スケジュール連動・在室連動換気・空調更新・運用改善は使用量を減らす取り組み、デマンド制御・力率改善・契約電力の適正化は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。映画館・アミューズメントは空調の使用量が大きく量の削減効果が大きい一方、開館前の一斉立ち上げによる基本料金の最適化も無視できません。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"高効率空調更新のような大型投資は、初期費用だけでなく想定削減額・保守費・電力費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"スケジュール連動・運用改善は投資が小さく効きやすい","detail":"上映/営業スケジュール連動の空調制御・運用改善は、空調更新に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。無人・閑散時間に過剰運転している空調・換気は、抑えるだけで購入電力量に直接効きます。大型の空調更新を検討する前に、スケジュール連動・在室連動換気・運用改善で取れる分を先に取り切る順序が現実的です。効果は稼働により幅がある点に留意してください。"},{"label":"快適性・衛生と省エネの両立で見る","detail":"来場者の快適性や換気の衛生要件を損なう省エネは持続しません。在室連動換気は来場に応じて必要換気量を確保しつつ過剰分だけを抑える考え方で、快適性・衛生と両立させることが前提です。空調・換気・照明・機器までまとめて捉え、体験価値を保ちながら効く順に手を打つ視点が重要です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の空調メーカー・設備ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。中立・非営利の立場の情報や第三者診断を併用し、自社の用途別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は代表シナリオを中立的に整理したもので、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"稼働・来場の実態で効果は大きく変わる","detail":"スケジュール連動・在室連動換気の効果は、既存の運転実態・来場変動・空調の稼働パターンに強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでに運用が最適化された施設や稼働時間が短い施設では効果が小さくなります。導入ありきで進めず、用途別・時間帯別の計測に基づいて削減ポテンシャルを見極めることが重要です。"},{"label":"高効率空調更新は回収年数の見極めが前提","detail":"高効率空調への更新は削減効果が大きい反面、投資額も大きく、稼働時間が短い施設では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。スケジュール連動・在室連動換気・運用改善で取れる分を先に取り、更新は回収年数とライフサイクルで判断することが安全です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要です。"},{"label":"デマンド・力率改善だけでは量は減らない","detail":"デマンド制御や力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆にスケジュール連動・在室連動換気・空調更新は量に効きますが、ピークの平準化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資判断は専門家の診断と自社の用途別データに基づき、複数の選択肢を比較したうえで行ってください。数値の断定的な引用は避けてください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","スクリーン別・エリア別の空調・換気・照明・機器の消費を計測または推計する","上映・営業スケジュールと空調運転の連動状況を時間帯別に整理する","無人・閑散時間の過剰空調・過剰換気の有無を点検する","CO2センサーによる在室連動換気（デマンド制御換気）の導入余地を確認する","開館前の空調一斉立ち上げによるデマンドピークを時間帯別に把握する","力率と力率割引・割増の適用状況を契約書で確認する","契約電力が実態に対して過大でないかを検証する","送風機・ポンプ・空調のインバータ導入状況を点検する","設定温度・予冷/予熱時間・フィルタ清掃など運用改善の余地を洗い出す","SII補助金・GX/CN税制・ものづくり補助金・ヒートポンプ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","スケジュール連動・在室連動換気・空調更新と契約見直しの優先度を考える材料になる","高圧・特別高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の用途別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲135万円・▲240万円・▲360万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・施設構成・稼働実態により異なるため、自社の用途別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や空調メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は上映/営業スケジュール連動の空調制御・在室連動換気・高効率空調更新・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"上映/営業スケジュール連動の空調制御はどんな場合に効果が出ますか。","answer":"一般に、上映のないスクリーンや閑散時間帯まで一律に空調している施設、来場変動が大きい施設、運転時間が長い施設ほど効果が出やすい傾向です。無人・閑散時間の過剰運転を抑えるだけで購入電力量に直接効きます。逆にすでに運用が最適化された施設や稼働が短い施設では効果が小さくなります。まず用途別・時間帯別の消費を計測し、削減ポテンシャルを見極めてから着手することが重要です。数値は代表シナリオの目安です。"},{"question":"高効率空調への更新は必ず得になりますか。","answer":"必ず得になるとは限りません。高効率空調更新は削減効果が大きい一方で投資額も大きく、稼働時間が短い施設では回収年数が長くなります。まずスケジュール連動・在室連動換気・運用改善で取れる分を取り切り、更新は補助金・税制の活用可能性も含めた回収年数とライフサイクルコストで判断するのが堅実です。導入ありきではなく、感度分析で価格変動への耐性も確認してください。特定の設備ベンダーを推奨するものではありません。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"開館前の複数スクリーン・大空間空調の一斉立ち上げを避けてデマンドのピークを平準化すると、契約電力に基づく基本料金を抑えられる場合があります。デマンド監視の導入や運用での立ち上げずらしが有効です。あわせて進相コンデンサによる力率改善で力率割引を確保し、契約電力が実態に対し過大でないかを検証します。ただし使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"在室連動換気は快適性や衛生を損ないませんか。","answer":"在室連動換気（デマンド制御換気）は、CO2センサーなどで来場状況を把握し、必要な換気量を確保しつつ過剰分だけを抑える考え方です。来場が少ない時間帯の過剰な外気導入を抑えることで空調負荷を減らせますが、必要換気量は確保するため、適切に設計・運用すれば快適性・衛生と省エネを両立できます。ただし衛生基準や来場体験を損なわないよう、設定は段階的に検証しながら進めることが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"スケジュール連動・在室連動換気・高効率空調更新で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は施設の稼働・来場により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/aquarium-zoo-electricity-cost-review","title":"水族館・動物園の電気料金見直しポイント","description":"生命維持設備の常時稼働・ろ過ポンプ・水温管理の電力構造と契約見直しの着眼点を整理。"},{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/amusement-facility-electricity-cost-review","title":"アミューズメント施設の電気代見直し","description":"空調中心の電力構造。"},{"href":"/karaoke-box-electricity-cost-review","title":"カラオケ店の電気代見直し","description":"個室空調の論点（近縁業種）。"},{"href":"/internet-cafe-electricity-cost-review","title":"インターネットカフェの電気代見直し","description":"24時間空調・機器の論点（近縁業種）。"},{"href":"/cultural-facility-electricity-cost-review","title":"文化施設の電気代見直し","description":"ホール空調の電力構造。"},{"href":"/film-production-studio-electricity-cost-review","title":"映像制作スタジオの電気代見直し","description":"撮影照明・空調（制作側の読み分け）。"},{"href":"/subsidy-hotel-leisure-strategy","title":"ホテル・レジャーの補助金戦略","description":"レジャー施設の投資支援。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調の削減効果","description":"空調・照明の効果目安。"},{"href":"/demand-control-reduction-effect","title":"デマンド削減の効果","description":"上映スケジュール連動の効果目安。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyCinemaAmusementHvacPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・施設構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/amusement-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">アミューズメント施設の電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。関連する業種の論点は{" "}
              <Link href="/amusement-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">アミューズメント施設の電気代見直し</Link>
              {" "}や{" "}
              <Link href="/cultural-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">文化施設の電気代見直し</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・空調運転の構造上の課題を整理します。これらは大空間空調を持つ多くの映画館・アミューズメント現場で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、上映/営業スケジュール連動の空調制御を軸に、在室連動換気・高効率空調更新・運用改善・デマンド/力率改善を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・施設構成・稼働実態により異なります。実在企業の事例ではありません。各シナリオの効果は「年間使用量×改善単価＝年間削減額」「年間削減額×5年＝5年累計」の2段電卓検算で示します。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と用途別使用量の取得から始めましょう。</p>
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
            <ConsultCta from="cinema-amusement" />
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
            heading="空調最適化・スケジュール連動制御・電力契約の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや空調最適化・設備更新投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
