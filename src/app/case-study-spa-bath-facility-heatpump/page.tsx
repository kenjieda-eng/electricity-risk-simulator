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

const pageTitle = "日帰り温浴・都市型スパ×給湯ヒートポンプで電気代を削減した事例｜循環ポンプ・蓄熱（代表シナリオ）";
const pageDescription = "大量の給湯・浴槽循環ろ過・蓄熱で電力と熱を多く使う日帰り温浴・都市型スパ事業者が、給湯ヒートポンプへの熱源転換・循環ポンプのインバータ化・貯湯槽での蓄熱運用・デマンド制御/力率改善・契約電力最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-spa-bath-facility-heatpump";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["日帰り温浴 電気代 削減 事例","都市型スパ 給湯 ヒートポンプ","循環ポンプ インバータ 省エネ","蓄熱 貯湯槽 深夜電力","スーパー銭湯 電気代 見直し"],
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

const h1Text = "日帰り温浴・都市型スパ×給湯ヒートポンプ：循環ポンプ・蓄熱で電気代を抑えた代表事例";
const breadcrumbTitle = "日帰り温浴・都市型スパの電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。日帰り温浴・都市型スパ（スーパー銭湯・日帰り入浴施設・都市型スパ）は、大量の給湯・浴槽の循環ろ過・館内空調・サウナで電力と熱を多く消費します。給湯ヒートポンプへの熱源転換、循環ポンプのインバータ化・運用改善、貯湯槽を使った蓄熱運用、デマンド制御・力率改善（進相コンデンサ）、契約電力の最適化によって電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。なお本事例は宿泊を伴わない日帰り温浴・都市型スパを対象としており、宿泊型旅館を扱う旅館・温泉のケース（case-study-ryokan-onsen-heatpump）とは業態が異なります。滞在時間が短く営業時間帯に来館が集中して給湯需要のピークが立ちやすい点、夜間の宿泊在館がなく稼働パターンや蓄熱の使い方が異なる点で読み分けが必要です。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安としてご覧ください。";
const d1CtaLead = "自社が今回の日帰り温浴・都市型スパの代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、給湯・循環ポンプ・空調・サウナのどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "給湯ヒートポンプへの熱源転換や循環ポンプのインバータ化・蓄熱運用の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（熱源転換・インバータ化・蓄熱）と単価・基本料金の最適化（デマンド/力率・契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["日帰り温浴・都市型スパで電気代が重くなる理由（給湯・循環ろ過・空調の熱負荷とデマンド・力率）の構造","給湯ヒートポンプへの熱源転換が購入電力量と燃料を同時に下げうる仕組みと適性条件","循環ポンプのインバータ化・貯湯槽での蓄熱運用で消費電力量と基本料金を縮小する考え方の目安","デマンド制御・力率改善（進相コンデンサ）・契約電力の最適化で基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業態特性（給湯・循環ろ過・空調の熱負荷が複合）","detail":"日帰り温浴・都市型スパは、浴槽への大量の給湯・追い焚き、浴槽水の循環ろ過、館内空調・サウナ・シャワーで電力と熱を同時に大量消費します。宿泊を伴わないため夜間の在館需要はなく、営業時間帯に来館が集中して給湯・シャワー・空調のピークが立ちやすいのが特徴です。浴槽は常時保温・循環しつつ、開店前の立ち上げと来館ピークで熱需要が跳ねます。本記事はこうした日帰り温浴・都市型スパの特性を代表シナリオとして整理します。"},{"label":"規模（高圧受電の中堅需要が中心）","detail":"複数の浴槽・サウナ・大型循環設備を持つ日帰り温浴・都市型スパは高圧受電の中堅施設が多く、大型のスーパー銭湯や複合スパでは契約電力が大きくなります。受変電設備を自社保有し、給湯・循環・空調が重なる時間帯に契約電力（デマンド）が高めに設定されがちです。基本料金が契約電力で決まるため、来館ピークと設備稼働の重なりをどう抑えるかが料金に直結します。本記事は規模の異なる複数パターンを代表シナリオとして想定します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。給湯・循環は電力量が大きく電力量料金の比率が高くなりやすい一方、来館ピークで給湯・空調が重なるとデマンドが跳ねて基本料金も膨らみます。量（kWh）の削減と契約電力の抑制の双方が効く構造で、どちらにどれだけ取り組むかを切り分けて考えることが出発点になります。"},{"label":"熱需要（給湯・保温・排熱に削減余地が残る）","detail":"浴槽は高温を長時間保温し、大量の給湯・追い焚きを繰り返すため、配管・貯湯槽からの放熱や、排湯・排気として捨てている排熱が大きく、熱源転換と排熱回収に削減余地が残りやすい領域です。ボイラー給湯からヒートポンプ給湯への転換、貯湯槽の断熱、排湯熱の回収などが効きやすくなります。給湯・保温・排熱の状態を把握することが、日帰り温浴・都市型スパの省エネの起点になります。"},{"label":"コスト構造（電力・燃料・水が絡む）","detail":"温浴のエネルギーコストは、給湯用の電力・ガス・重油などの燃料、循環ポンプ・空調の電力、上下水道・ろ過の費用が絡み合い、来館数の季節変動の影響も受けます。給湯の熱源・循環の運用・営業時間まで含めて捉え、どの設備でどのエネルギーをどれだけ使うかを把握することが、熱源転換・インバータ化・蓄熱・契約最適化の判断の出発点になります。本記事の金額はすべて代表シナリオの目安です。"}];
const beforeState = [{"label":"旧型ボイラー給湯で熱源効率が低い","detail":"経年したガス・重油ボイラーや電気温水器で給湯し、熱源効率が低いまま大量の湯を沸かしていました。空気の熱を汲み上げる給湯ヒートポンプへの転換余地があるにもかかわらず、投入エネルギーに対する熱量の効率が悪く、燃料・電力の双方でコストが積み上がっていた代表シナリオです。"},{"label":"循環ポンプが定速運転で無駄が多い","detail":"浴槽の循環ろ過ポンプが定速で回りっぱなしになり、営業時間外や来館の少ない時間帯も同じ流量で運転していました。インバータによる可変速運転や、時間帯・水質に応じた流量調整がされておらず、動力の電力が過大でした。ポンプは連続稼働で消費が積み上がるため、運用と制御の見直し余地が大きいまま放置されていました。"},{"label":"給湯・空調・来館ピークが重なりデマンドが跳ねる／力率が低い","detail":"開店前の立ち上げや来館ピークに給湯・追い焚き・空調・循環が同時に立ち上がり、契約電力（デマンド）のピークが高止まりしていました。蓄熱でピークをずらす運用や監視の仕組みがなく、基本料金が過大になりがちです。加えて誘導性負荷（ポンプ・空調）が多く力率が低下し、力率割引を十分に取れていない、あるいは力率割増を受けている状態でした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"施設全体の電力量は把握できても、給湯・循環・空調・サウナといった用途別の内訳がリアルタイムに見えず、改善は現場担当者の経験に依存していました。BEMS・エネマネが未整備で、待機損失や異常消費に気づきにくく、熱源転換・インバータ化・蓄熱の効果を検証する基盤もありません。本記事は多くの日帰り温浴・都市型スパで共通する課題を代表シナリオとして整理しています。"}];
const approaches = [{"name":"給湯ヒートポンプへの熱源転換・排熱回収","role":"給湯の熱源を高効率化し購入エネルギーを削減","detail":"旧型ボイラーや電気温水器から、空気の熱を汲み上げる給湯ヒートポンプへ熱源を転換し、少ない電力で大量の湯をつくれるようにします。あわせて排湯・排気の熱を熱交換器で回収して給水予熱に再利用し、貯湯槽の断熱も強化します。ガス・重油給湯なら燃料、電気温水器なら購入電力量に直接効き、給湯需要の大きい日帰り温浴・都市型スパで効果が出やすい領域の一つです。"},{"name":"循環ポンプ・空調のインバータ化・運用改善","role":"連続稼働する動力を負荷に応じて可変速化","detail":"浴槽の循環ろ過ポンプや空調のファン・ポンプにインバータを導入し、時間帯・来館数・水質に応じた可変速運転へ切り替えます。営業時間外の流量抑制や、ろ過運転スケジュールの最適化で待機的な無駄を削ります。連続稼働する動力ほど可変速化の効果が積み上がりますが、水質基準を満たす流量が前提です。"},{"name":"貯湯槽での蓄熱運用・ピークシフト","role":"熱をためて来館ピークと契約電力を平準化","detail":"貯湯槽を活用し、来館の少ない時間帯や夜間にヒートポンプで湯をつくり溜めておき、来館ピーク時の給湯・追い焚き負荷を平準化します。給湯・空調・循環の立ち上げをずらすことで、契約電力（デマンド）のピークを抑えられます。蓄熱容量と来館パターンの適合が前提で、日帰り温浴・都市型スパの営業時間に合わせた運用設計が鍵になります。"},{"name":"デマンド制御・力率改善・契約電力最適化","role":"基本料金・単価面を契約と運用の両面で最適化","detail":"デマンド監視で給湯・空調・循環の同時立ち上げを避け、ピークを平準化して契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて契約電力が実態に対して過大でないかを検証し、適正化余地を確認します。量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 中小の日帰り温浴・給湯ヒートポンプ転換","before":"高圧受電の中小規模の日帰り温浴施設が、旧型ボイラー給湯と定速の循環ポンプを抱えていた代表シナリオを目安に想定します。用途別の消費は見えておらず、給湯の熱源効率の低さと排湯熱の未回収がコストに跳ね返っていました。","after":"給湯ヒートポンプへの熱源転換と排湯熱の回収による給水予熱、貯湯槽の断熱強化を組み合わせ、給湯起因の消費を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約60万kWh × 改善 約1.5円/kWh ＝ 年間 ▲90万円（検算：60×1.5＝90）。5年累計 ▲90万円 × 5年 ＝ ▲450万円（検算：90×5＝450）。給湯の熱源転換は給湯需要が大きいほど効果が出やすい傾向ですが、実額は設備の状態・来館数・エネルギー単価により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"② 中堅スーパー銭湯・循環ポンプのインバータ化＋蓄熱運用","before":"複数浴槽とサウナを持つ中堅のスーパー銭湯で、定速の循環ポンプと、給湯・空調・来館ピークの重なりによるデマンド高止まりを抱えていた代表シナリオを想定します。基本料金が過大で、ピーク平準化の仕組みがありませんでした。","after":"循環ポンプ・空調のインバータ化と、貯湯槽を使った蓄熱運用によるピークシフト、デマンド監視を組み合わせ、電力量と基本料金の双方を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約120万kWh × 改善 約2.0円/kWh ＝ 年間 ▲240万円（検算：120×2.0＝240）。5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（検算：240×5＝1200）。連続稼働する動力が多いほど可変速化の効果が出やすい傾向ですが、実額は稼働実態・水質基準・契約条件により異なります。量（kWh）の削減施策と契約最適化を併せて評価することが前提です。"},{"title":"③ 大規模都市型スパ・熱源転換＋デマンド/力率改善","before":"大型浴槽・複数サウナ・館内空調を備える大規模都市型スパで、旧熱源と低い力率、給湯・空調・循環の同時立ち上げによる高いデマンドが残っていた代表シナリオを想定します。稼働時間が長く、熱源転換と契約最適化の双方に削減余地がありました。","after":"給湯ヒートポンプへの熱源転換に、進相コンデンサによる力率改善・契約電力の適正化、蓄熱によるピークシフトを重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。","result":"年間使用量 約200万kWh × 改善 約2.4円/kWh ＝ 年間 ▲480万円（検算：200×2.4＝480）。5年累計 ▲480万円 × 5年 ＝ ▲2,400万円（検算：480×5＝2400）。契約電力の水準が高いほど効果が出やすい傾向ですが、実額は設備仕様・稼働・補助金採択の有無により変動します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲90万円／②▲240万円／③▲480万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、燃料・電力単価や来館数の変動は織り込んでいません。実際の効果は契約条件・設備構成・稼働実態により異なります。"},{"label":"削減額の考え方（2段検算）","detail":"各代表シナリオの年間削減額は、年間使用量×改善単価で算出し（①60万kWh×1.5円＝90万円、②120万kWh×2.0円＝240万円、③200万kWh×2.4円＝480万円）、5年累計は年間削減額×5年で算出しています（①90×5＝450、②240×5＝1,200、③480×5＝2,400、単位は万円）。これは効果の規模感を示すための単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。数値はあくまで目安です。"},{"label":"金額表現の扱い","detail":"日帰り温浴・都市型スパは給湯・循環のエネルギー使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。実額は設備の状態・稼働・エネルギー単価・契約条件で変動するため、過度な期待を避け、自社の用途別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・用途別使用量の把握","detail":"受変電の電力量・デマンド記録に加え、給湯・循環・空調・サウナといった用途別の消費電力・燃料、来館数・営業時間・浴槽ごとの給湯量を集めて棚卸しします。どの設備がいつピークを作り、どれだけ放熱・排湯熱を出しているかを把握することが、熱源転換・インバータ化・蓄熱・契約最適化の出発点です。BEMSや簡易計測で用途別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、循環ポンプのインバータ化・運用改善・蓄熱運用など回収の早い施策と、給湯ヒートポンプへの熱源転換のような大型投資を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算して優先順位を付けます。効果が小さい設備の更新を急がない判断も含め、代表シナリオの考え方として整理します。"},{"label":"相見積・補助金／税制の検討","detail":"給湯ヒートポンプ・インバータ・進相コンデンサなどは複数社から相見積を取り、仕様・保証・保守費・エネルギー計画を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、休館日や設備更新の閑散期に合わせて熱源転換・インバータ導入・貯湯槽工事を計画します。導入後はBEMSで用途別の消費と蓄熱・排熱回収の実績をモニタリングし、想定との差異を検証します。運用改善も継続し、PDCAとして効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"熱源転換・インバータ化・蓄熱・運用改善は使用量（購入電力量・燃料）を減らす取り組み、デマンド制御・力率改善・契約電力の適正化は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。給湯・循環は使用量が大きく量の削減効果が大きい一方、来館ピークによる基本料金の最適化も無視できません。要素を切り分けると投資配分の判断がしやすくなります。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"給湯ヒートポンプ転換のような大型投資は、初期費用だけでなく想定削減額・保守費・燃料費・設備の寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"運用改善・蓄熱は投資が小さく効きやすい","detail":"循環ポンプのインバータ化・流量調整や貯湯槽での蓄熱運用は、熱源転換に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。連続稼働で捨てている動力や、ピークに重なる負荷は、運用改善とピークシフトで直接効きます。大型の熱源転換を検討する前に、運用改善・蓄熱・排熱で取れる分を先に取り切る順序が現実的です。効果は設備の状態により幅がある目安です。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・燃料・水・熱を分断して最適化すると全体最適を逃します。排湯熱回収やヒートポンプのように電力と燃料・熱を横断する施策は、片方だけ見ると効果を過小評価しがちです。施設全体のエネルギーフローで俯瞰し、給湯の熱と循環の動力、空調・サウナの排熱までまとめて捉え、最も効く順に手を打つ視点が欠かせません。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカー・ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の用途別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は代表シナリオを中立的に整理したもので、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備の状態で効果は大きく変わる","detail":"熱源転換・蓄熱の効果は、既存熱源の効率・排湯温度・来館パターンに強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでに高効率な給湯設備や来館数が少ない施設では効果が小さくなります。導入ありきで進めず、用途別の計測に基づいて削減ポテンシャルを見極めることが重要です。"},{"label":"給湯ヒートポンプ転換は回収年数の見極めが前提","detail":"給湯ヒートポンプへの熱源転換は削減効果が大きい反面、投資額も大きく、給湯需要が小さい施設では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。運用改善・蓄熱・排熱回収で取れる分を先に取り、転換は回収年数とライフサイクルで判断することが安全です。導入ありきで進めない姿勢が大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要になるため、用途別の計測データの整備を先行させておくと有利です。"},{"label":"デマンド・力率改善だけでは量は減らない","detail":"デマンド制御や力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆に熱源転換・インバータ化・蓄熱は量に効きますが、ピークの平準化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資判断は専門家の診断と自社の用途別データに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","給湯・循環・空調・サウナの用途別消費電力・燃料を計測または推計する","浴槽ごとの給湯量・追い焚き・保温の設定温度を工程別に集計する","給湯熱源（ボイラー・電気温水器）の効率と更新時期を点検する","排湯熱・排気熱・貯湯槽の放熱の回収余地と利用先を確認する","給湯・空調・循環・来館の同時ピークを時間帯別に把握する","循環ろ過ポンプ・空調ファンのインバータ導入状況と流量設定を点検する","力率と力率割引・割増の適用状況を契約書で確認する","契約電力が実態に対して過大でないかを検証する","貯湯槽を使った蓄熱・ピークシフトの余地を洗い出す","SII補助金・GX/CN税制・ものづくり補助金・ヒートポンプ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","熱源転換・インバータ化・蓄熱と契約見直しの優先度を考える材料になる","高圧・特別高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の用途別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲90万円・▲240万円・▲480万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・設備構成・稼働実態により異なるため、自社の用途別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は給湯ヒートポンプへの熱源転換・循環ポンプのインバータ化・蓄熱運用・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"宿泊型の旅館・温泉のケースと何が違うのですか。","answer":"本記事は宿泊を伴わない日帰り温浴・都市型スパを対象としており、宿泊型旅館を扱う旅館・温泉のケースとは業態が異なります。日帰り温浴は滞在時間が短く、営業時間帯に来館が集中して給湯・シャワー・空調のピークが立ちやすい一方、夜間の在館需要がありません。宿泊型は夕方から翌朝にかけて給湯・空調が分散します。稼働パターンや蓄熱の使い方が異なるため、読み分けたうえで自社に近いケースを参照してください。"},{"question":"給湯ヒートポンプへの熱源転換はどんな場合に効果が出ますか。","answer":"一般に、旧型のボイラーや電気温水器を使っている施設や、排湯熱を回収せず捨てている施設、給湯需要が大きく稼働時間が長い施設ほど効果が出やすい傾向です。ガス・重油給湯なら燃料、電気温水器なら購入電力量に直接効きます。逆にすでに高効率な給湯設備や給湯量が少ない施設では効果が小さくなります。まず用途別の給湯量・排湯温度を計測し、削減ポテンシャルを見極めてから着手することが重要です。数値は代表シナリオの目安です。"},{"question":"循環ポンプのインバータ化や蓄熱は必ず得になりますか。","answer":"必ず得になるとは限りません。インバータ化・蓄熱は比較的投資が小さく回収が早い傾向がありますが、水質・衛生基準を満たす循環流量の確保や、来館パターンに合った蓄熱容量が前提です。まず流量調整・運用改善で取れる分を取り切り、設備投資は補助金・税制の活用可能性も含めた回収年数とライフサイクルコストで判断するのが堅実です。導入ありきではなく、感度分析で価格変動への耐性も確認してください。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"給湯・空調・循環の同時立ち上げを避け、貯湯槽での蓄熱によって来館ピークの給湯負荷を平準化すると、契約電力に基づく基本料金を抑えられる場合があります。デマンド監視の導入や運用でのピークずらしが有効です。あわせて進相コンデンサによる力率改善で力率割引を確保し、契約電力が実態に対し過大でないかを検証します。ただし使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"熱源転換・インバータ化・蓄熱で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は設備の状態・稼働により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/hot-spring-facility-electricity-cost-review","title":"温浴施設の電気代見直し","description":"給湯・循環・空調の電力構造。"},{"href":"/case-study-ryokan-onsen-heatpump","title":"旅館・温浴×ヒートポンプ給湯の事例","description":"宿泊型旅館のケース（業態の読み分け）。"},{"href":"/public-gym-electricity-cost-review","title":"スポーツ施設の電気代見直し","description":"浴室・空調を持つ施設の論点。"},{"href":"/subsidy-hotel-leisure-strategy","title":"ホテル・レジャーの補助金戦略","description":"宿泊・レジャー施設の投資支援。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"給湯ヒートポンプの投資支援。"},{"href":"/energy-saving-tax-incentive-2026","title":"省エネ税制2026","description":"設備投資の税制優遇。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調の削減効果","description":"省エネ効果の目安。"},{"href":"/energy-management-glossary","title":"エネルギー管理の用語集","description":"契約電力・デマンドの基礎用語。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudySpaBathFacilityHeatpumpPage() {
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
            <Link href="/hot-spring-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">温浴施設の電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業態×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業態特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。関連する論点は{" "}
              <Link href="/hot-spring-facility-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">温浴施設の電気代見直し</Link>
              {" "}や、業態が異なる{" "}
              <Link href="/case-study-ryokan-onsen-heatpump" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">旅館・温浴×ヒートポンプ給湯の事例</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは給湯・循環設備を持つ多くの日帰り温浴・都市型スパで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、給湯ヒートポンプへの熱源転換を軸に、循環ポンプのインバータ化・蓄熱運用・デマンド/力率改善を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業態の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・稼働実態により異なります。実在企業の事例ではありません。年間削減額は年間使用量×改善単価、5年累計は年間削減額×5年の単純累計です。</p>
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
            <ConsultCta from="spa-bath-facility" />
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
            heading="給湯ヒートポンプ・循環設備・電力契約の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・熱源転換投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
