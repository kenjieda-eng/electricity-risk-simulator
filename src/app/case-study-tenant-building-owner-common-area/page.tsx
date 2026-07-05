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

const pageTitle = "テナントビルのオーナーが共用部・受変電で電気代を削減した事例｜高圧一括受電・デマンド制御・テナント課金の適正化（代表シナリオ）";
const pageDescription = "テナントビルのオーナー（貸主）が、共用部LED・空調更新、高圧一括受電の最適化、受変電更新、デマンド制御・力率改善、テナント課金（サブメーター・共用部按分）の適正化でビル全体の電気代と共益費構造を改善した代表シナリオを、業界統計・公開事例から再構成して整理。入居企業側の見直し視点は別記事に譲ります。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-tenant-building-owner-common-area";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["テナントビル オーナー 電気代 削減","共用部 省エネ 事例","高圧一括受電 最適化","テナント課金 サブメーター 按分","ビル デマンド制御 力率改善"],
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

const h1Text = "テナントビルのオーナーが共用部・受変電で電気代を削減した代表事例";
const breadcrumbTitle = "テナントビルのオーナーが共用部・受変電で削減した事例";
const leadText = "本記事は実在企業ではなく、業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。テナントビルのオーナー（貸主）が、自らの裁量で手を打てる共用部・受変電設備・テナント課金の領域に絞って、共用部LED・空調更新、高圧一括受電の最適化、受変電更新、デマンド制御・力率改善、テナント課金（サブメーター・共用部按分）の適正化によって、ビル全体の電気代と共益費構造をどう改善できるかを、中立な社団法人の視点で整理します。入居企業（テナント自身）が自社の契約や使い方を見直す視点は別記事に譲ります。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回のテナントビルの代表シナリオと近い状況かどうかは、まず共用部の使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・契約区分・エリアを入力するだけで電気代の概算と内訳の目安を確認でき、共用部照明・空調・動力・受変電のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "共用部省エネ・受変電最適化の検討は、まず自社（保有ビル）の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（共用部省エネ）と単価の最適化（一括受電の契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["テナントビルのオーナーが電気代で手を打てる範囲（共用部・受変電・テナント課金）と、専有部との切り分けの考え方","共用部LED・高効率空調・デマンド制御・力率改善が購入電力量と基本料金をどう下げうるかの仕組みと適性条件","高圧一括受電の契約電力適正化・受変電（変圧器）更新でビル全体のコストを見直す観点と注意点","テナント課金（サブメーター・共用部按分）の適正化が回収の確実性と請求の透明性に効く理由","入居企業（テナント自身）側の見直しとの読み分け、および自社が同様のケースか診断する手順とチェックリスト"];
const premise = [{"label":"立場（オーナー＝貸主が動かせる範囲）","detail":"テナントビルのオーナー（貸主）が手を打てる範囲は、廊下・エントランス・トイレ・機械室・エレベーター・外構照明といった共用部と、ビル全体を束ねる受変電設備、そして入居各社への電気代の請求（テナント課金・共益費按分）が中心です。専有部（各テナントが使う区画）の使い方や個別契約は入居企業側の裁量に属するため、オーナーは自らの意思決定で動かせる共用部・受変電・課金の三領域から着手するのが定石です。本記事は、このオーナー視点に絞った代表シナリオとして、業界統計・公開事例から再構成して整理します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"},{"label":"規模・受電（高圧一括受電・受変電保有）","detail":"中規模以上のテナントビルは高圧（原則50kW以上）で一括受電し、受変電設備（キュービクル）を自社で保有・保安管理しているケースが多く、大規模ビルでは特別高圧に至ることもあります。ビル全体を一括受電したうえで、専有部の使用量をサブメーターで計量し各テナントへ請求する構造が一般的です。契約電力（デマンド）でビル全体の基本料金が決まるため、共用部と専有部を合わせたピークの管理と力率の維持が、オーナーの電気代に直接効く代表的な論点になります。本記事の代表シナリオも、この一括受電を前提としています。"},{"label":"共用部と専有部の切り分け（負担構造）","detail":"ビルの電気代は、オーナーが負担する共用部（照明・空調・動力・エレベーター・給排水ポンプなど）と、入居各社が使う専有部に分かれます。共用部はオーナーの費用として共益費で回収し、専有部はサブメーター計量で実費請求するのが基本です。この切り分けが曖昧だと、共用部の非効率がそのままオーナーの持ち出しになったり、テナントへの請求根拠が不透明になったりします。まず共用部と専有部の使用量・費用を分けて可視化することが、削減余地を見つける出発点になります。オーナー視点の代表シナリオでは、この共用部負担分が主な対象です。"},{"label":"テナント課金・共益費（サブメーター/按分の実務）","detail":"テナントへの電気代請求は、専有部にサブメーターを設けて実測値で請求する方法と、床面積などで共用部相当を按分する方法が組み合わさります。単価の設定根拠、共用部按分のルール、検針・請求の締め日などが契約書・管理規約で定まっていないと、テナントとの間で不公平感やトラブルが生じやすくなります。オーナーにとって課金の適正化は、値上げ局面でも請求根拠を明確にし、共益費の透明性と回収の確実性を高める代表的な打ち手です。実務の詳細は別途、テナント課金の解説記事もあわせてご確認ください。"},{"label":"コスト構造（基本料金・共用部使用量・賦課金）","detail":"テナントビルのオーナー負担分の電気代は、契約電力に基づく基本料金、共用部の使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。共用部は照明・空調・エレベーター・ポンプなど稼働時間が長い設備が多く、電力量料金と基本料金の双方に効きます。2026年度の再エネ賦課金は4.18円/kWhで、使用量に比例して負担が増えます。どの共用設備がどれだけ使っているかを把握することが、LED化・空調更新・デマンド制御・力率改善の優先順位づけの前提になります。"}];
const beforeState = [{"label":"共用部が経年設備のまま非効率","detail":"共用部の照明が旧来の蛍光灯・水銀灯のまま、空調も経年化した機種を使い続けており、24時間近く点灯する廊下・エントランスや長時間運転のエレベーター・ポンプで無駄が積み上がっていました。共用部はオーナーの費用負担であるにもかかわらず、使用量の内訳が把握されず、更新の優先順位を付けられない状態です。稼働時間が長い共用設備ほど非効率の影響が大きく、削りどころが見えないまま持ち出しが続いていました。これは多くのテナントビルで共通して見られる論点です。"},{"label":"一括受電・受変電の契約/設備が未最適化","detail":"ビル全体を高圧で一括受電しているものの、契約電力が実態より過大なまま据え置かれていたり、受変電設備（キュービクル）が経年化して変圧器の待機損失が生じていたりしました。一括受電の契約条件やメニューを長年見直しておらず、ビル全体の基本料金が実際の使用実態と乖離している可能性を検証できていない状態です。オーナーが動かせる受電・受変電の領域に、点検されないままの削減余地が残っていました。"},{"label":"デマンド・力率が管理されていない","detail":"共用部と専有部を合わせたビル全体のピーク需要（デマンド）や力率が継続的に監視されておらず、特定の時間帯にピークが立って契約電力が高止まりしていました。進相コンデンサの容量が実態に合わず力率割引を十分に確保できていない、といった基本料金に直結する非効率も見過ごされがちです。デマンドと力率はオーナーが管理できる代表的な指標であるにもかかわらず、計測・監視の仕組みがなく放置されていました。"},{"label":"テナント課金が不透明・按分ルールが曖昧","detail":"テナントへの電気代請求が、古い単価設定や大雑把な床面積按分のままで、共用部相当の配賦ルールや検針の根拠が不透明でした。サブメーターの計量値と請求額の突合が甘く、共用部の増減がオーナーの持ち出しに偏ってしまう構造も残っていました。請求根拠が曖昧だとテナントへの説明が難しく、値上げ局面での合意形成も滞ります。課金の適正化はオーナーの回収の確実性に関わる論点として、後回しにされていました。"}];
const approaches = [{"name":"共用部のLED化・高効率空調への更新","role":"稼働時間の長い共用設備から購入電力量を削減","detail":"廊下・エントランス・機械室・外構などの照明をLEDへ更新し、人感センサーや時間帯制御を併用して点灯の無駄を抑えます。共用部の空調・換気も高効率機へ更新し、エレベーターやポンプはインバータ制御を検討します。共用設備は稼働時間が長いほど削減量が積み上がるため、オーナーが自らの費用で着手しやすく、投資回収も比較的読みやすい領域です。まず使用量の大きい共用設備から優先順位を付けて更新するのが、代表シナリオでも効果が出やすい進め方です。"},{"name":"高圧一括受電の最適化・受変電設備の更新","role":"ビル全体の基本料金と変圧器損失を見直す","detail":"ビル全体を束ねる一括受電の契約電力が過大でないかを使用実態と突き合わせ、必要に応じて適正化します。経年化した受変電設備（キュービクル・変圧器）はトップランナー変圧器などの高効率機への更新で待機損失を抑えられます。一括受電のメニューや契約条件は長期間見直されないことが多く、オーナーが主体的に検証できる領域です。ただし契約電力の引き下げは将来のテナント増床や設備増設の余地とのバランスを見て慎重に判断する必要があります。"},{"name":"デマンド制御・力率改善","role":"ピークと力率を管理し基本料金を抑える","detail":"デマンド監視装置でビル全体のピーク需要を可視化し、共用部空調の予冷・予熱やピーク時間帯の運転調整でデマンドを抑えます。進相コンデンサの容量を実態に合わせて調整し、力率割引を確実に確保します。契約電力（デマンド）でビル全体の基本料金が決まるため、ピークを数％抑えるだけでも基本料金の低減につながります。共用部は運転をオーナーが管理できるため、専有部に踏み込まずにピークを平準化しやすいのが利点です。"},{"name":"テナント課金（サブメーター・共用部按分）の適正化","role":"請求根拠を明確にし回収と透明性を高める","detail":"専有部のサブメーターを点検・更新して計量精度を確保し、単価の設定根拠と共用部按分のルールを契約書・管理規約で明文化します。検針・請求の締め日や算定式をテナントに開示し、値上げ局面でも根拠を示して説明できる状態にします。課金の適正化は電気代そのものを下げる施策ではありませんが、共用部の削減効果をオーナーとテナントで公平に配分し、共益費の透明性と回収の確実性を高めます。実務の詳細はテナント課金の解説記事もあわせてご確認ください。"}];
const caseScenarios = [{"title":"中規模オフィスビル：共用部LED＋高効率空調への更新（代表シナリオ）","before":"共用部の照明が蛍光灯・水銀灯のまま、空調も経年機で、24時間近く点灯する廊下・エントランスやエレベーター・ポンプで無駄が積み上がっていた代表シナリオを目安に想定します。","after":"共用部照明のLED化と人感・時間帯制御、高効率空調・換気への更新、ポンプのインバータ化を組み合わせ、共用部の購入電力量を段階的に圧縮した代表レンジを目安とします。","result":"この代表シナリオでは、年間 ▲180万円 → 5年累計 ▲180万円 × 5年 ＝ ▲900万円（電卓検算：180×5＝900）を目安とします。金額は業界統計・公開事例から再構成した代表値で、実額は契約条件・設備構成・稼働実態により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"大規模ビル：高圧一括受電の最適化＋デマンド制御（代表シナリオ）","before":"ビル全体を一括受電しつつ契約電力が過大なまま据え置かれ、デマンド・力率が監視されず、受変電設備も経年化していた代表シナリオを想定します。","after":"使用実態に基づく契約電力の適正化、デマンド監視によるピーク抑制、進相コンデンサ調整での力率改善、高効率変圧器への更新を組み合わせ、基本料金と購入電力量の双方を最適化した代表レンジを目安とします。","result":"この代表シナリオでは、年間 ▲320万円 → 5年累計 ▲320万円 × 5年 ＝ ▲1,600万円（電卓検算：320×5＝1,600）を目安とします。金額は目安であり、実額は契約条件・ピーク実態・力率の状況により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"テナント課金の適正化＋共用部省エネ（代表シナリオ）","before":"テナント課金が古い単価・大雑把な按分のままで請求根拠が不透明、共用部の省エネも手つかずだった代表シナリオを想定します。","after":"サブメーターの計量精度確保と按分ルールの明文化で課金を適正化し、あわせて共用部のLED化・運用改善を進めて、共用部コストの圧縮とテナントへの公平な配分を両立した代表レンジを目安とします。","result":"この代表シナリオでは、年間 ▲130万円 → 5年累計 ▲130万円 × 5年 ＝ ▲650万円（電卓検算：130×5＝650）を目安とします。課金適正化は回収・透明性の改善が主眼で、金額効果は共用部省エネ分が中心です。金額は代表値で、実額は契約条件・按分方式により異なります。特定の電力会社・契約形態を推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（年間▲180万円・▲320万円・▲130万円など）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計や環境省・SIIの採択事例集、不動産・ビル管理分野の業界統計から再構成した代表レンジの目安です（2026年度時点・代表シナリオ）。5年累計はいずれも単純に5倍した参考値（180×5＝900、320×5＝1,600、130×5＝650）で、金利・電力単価の変動や設備更新費は含みません。実際の効果は契約条件・設備構成・稼働実態により異なります。"},{"label":"削減レンジの根拠","detail":"共用部LED化・高効率空調・デマンド制御・力率改善の効果は、省エネ補助金の採択事例やビル省エネの一般的な知見を参考にレンジ化しています。共用部は稼働時間が長く更新効果が読みやすい一方、削減額はビル規模・共用部比率・稼働時間で大きく変わります。高圧一括受電の契約電力適正化はピーク実態に依存し、テナント課金の適正化は主に回収・透明性の改善効果です。自社では共用部の使用実態の実測に基づく試算が不可欠で、本記事の代表シナリオはあくまで出発点の目安です。"},{"label":"金額表現の扱い","detail":"テナントビルは共用部の使用量・契約電力が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事では精密な金額の断定は避けています。年間▲X万円は代表シナリオの目安として示し、5年累計は単純な5倍（電卓検算：X×5＝Y）で参考提示しています。電力単価や燃料費調整額の変動、テナント入退去による共用部負荷の変化で結果は動くため、幅をもって捉える方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。環境共創イニシアチブ（SII）による省エネ補助金、ZEB（ネット・ゼロ・エネルギー・ビル）関連の支援、BEMS（ビルエネルギー管理システム）導入支援、トップランナー変圧器などはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。採択を前提にせず一次情報の確認が前提となります。数値・要件は年度ごとに改正される点にご留意ください。"}];
const process = [{"label":"データ収集・共用部と専有部の切り分け","detail":"受変電の電力量・デマンド記録を直近1年分そろえ、共用部（照明・空調・動力・エレベーター・ポンプ）と専有部（サブメーター計量分）を分けて棚卸しします。共用部のどの設備がどれだけ使っているかを可視化し、稼働時間の長い設備を洗い出すことが、LED化・空調更新・デマンド制御の優先順位づけの出発点です。BEMSや簡易計測で共用部の内訳を見える化し、ピークと力率の実態も併せて把握します。"},{"label":"分析・診断と投資の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、共用部の更新効果と投資回収年数（ROI）、一括受電の契約電力の適正化余地、デマンド・力率改善の効果を切り分けて試算します。回収の早い共用部LED化などと、受変電更新のような大型投資を分け、優先順位と概算投資額、SII補助金・ZEB/BEMS支援の適用可能性を含めて評価します。テナント課金の適正化余地も並行して洗い出します。"},{"label":"相見積・補助金/課金設計の検討","detail":"設備は複数社から相見積を取り、仕様・保証・保守費まで含めたライフサイクルコストで比較します。SIIの省エネ補助金やZEB化・BEMS導入支援の要件・公募スケジュールを確認し、申請に必要な省エネ効果の根拠資料を準備します。あわせてテナント課金の単価・按分ルールを見直し、契約書・管理規約への反映と、値上げ局面でも通用する請求根拠の整備を進めます。制度活用や課金設計はいずれも中立的に複数案を比較して判断します。"},{"label":"実行・効果検証・テナント合意","detail":"投資判断は削減額・回収年数・CO2削減量など経営層と共有できる指標で行い、テナント営業への影響が小さい時間帯に共用部工事を計画します。導入後はBEMSやデマンド監視で効果をモニタリングし、想定との差異を検証します。テナント課金の変更は事前説明と合意形成を丁寧に行い、透明性を確保します。共用部の運用改善はPDCAとして継続し、代表シナリオとの差を定期的に見直します。"}];
const viewpoints = [{"label":"オーナーが動かせる範囲から着手する","detail":"テナントビルの電気代は、オーナーが裁量を持つ共用部・受変電・課金と、入居企業が握る専有部に分かれます。オーナーはまず自らの意思決定で動かせる共用部の省エネと受電・契約の最適化から着手するのが現実的です。専有部の使い方まで踏み込むには入居企業の協力が要るため、無理に一体で進めるより、動かせる範囲の効果を確実に積み上げる視点が有効です。入居企業側の見直し視点は別記事に整理しています。"},{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"共用部LED化・空調更新は使用量（購入電力量）を、デマンド制御・力率改善・契約電力の適正化は基本料金を、契約・メニュー見直しは単価を下げる取り組みです。テナントビルは共用部の稼働時間が長く量の削減効果が出やすい一方、ピーク管理による基本料金最適化も無視できません。要素を切り分けて評価すると、オーナーとして投資をどこに配分すべきかの判断がしやすくなります。"},{"label":"課金の適正化は「下げる」より「公平・透明」","detail":"テナント課金の適正化は電気代そのものを下げる施策ではなく、共用部の削減効果をオーナーとテナントで公平に配分し、請求根拠を透明にする取り組みです。ここを整えないと、せっかくの共用部省エネの効果配分が曖昧になり、値上げ局面でのテナント説明も難しくなります。省エネ（コストを下げる）と課金適正化（公平に配分・回収する）は目的が異なる別の打ち手として整理することが重要です。"},{"label":"投資回収年数とライフサイクルで判断","detail":"共用部更新や受変電更新は初期投資だけでなく、想定削減額・保守費・設備寿命を含めたライフサイクルコストで評価します。SII補助金やZEB/BEMS支援で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。契約電力の引き下げは将来の増床余地とのバランスも見て、電力・燃料価格の変動を感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、自社の共用部の実測データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"共用部と専有部の切り分けを誤らない","detail":"オーナーが削減できるのは主に共用部であり、専有部の使用量は入居企業の裁量です。共用部と専有部の切り分けを誤ると、削減効果の帰属や課金根拠が曖昧になり、テナントとのトラブルにつながります。まず両者を計量・費用の両面で正しく分けることが前提です。本記事の代表シナリオはオーナー負担分（共用部・受変電・基本料金）を対象にした目安であり、専有部を含む全体像は入居企業側の見直しと合わせて捉える必要があります。"},{"label":"契約電力の引き下げは慎重に","detail":"一括受電の契約電力を下げると基本料金は減りますが、将来のテナント増床や設備増設でピークが上がると、契約超過や再契約が必要になる場合があります。目先の基本料金だけで判断せず、稼働計画・増床余地を織り込んで適正な水準を見極めることが大切です。本記事の削減レンジは実態に見合った適正化を前提とした目安であり、過度な引き下げを勧めるものではありません。デマンド監視でピーク実態を把握したうえで判断してください。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金やZEB化・BEMS導入支援は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。制度活用はあくまで投資回収を後押しする要素として位置づけるのが堅実です。"},{"label":"見える化だけでは削減しない","detail":"BEMSやデマンド監視を導入しても、可視化したデータを改善行動につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、共用部の運転・設定を最適化し、効果を検証するPDCAを回して初めて成果が出ます。テナント課金も、仕組みを入れるだけでなく按分ルールと請求根拠を明文化・運用してこそ透明性が確保されます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断や課金設計は専門家の診断と自社データに基づき、複数の選択肢を比較したうえで行ってください。入居企業（テナント自身）の視点での見直しは、別記事の解説をあわせてご確認ください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","共用部と専有部（サブメーター計量分）を分けて使用量を集計する","共用部の照明・空調・動力・エレベーター・ポンプの内訳を計測または推計する","稼働時間の長い共用設備を洗い出し更新の優先順位を付ける","一括受電の契約電力が使用実態に対し過大でないか検証する","受変電設備（変圧器）の経年と待機損失を点検する","ビル全体のデマンドのピーク時間帯と要因を把握する","力率と力率割引の適用状況を契約書で確認する","サブメーターの計量精度と検針・請求の突合を確認する","テナント課金の単価根拠と共用部按分ルールを契約書・管理規約で確認する","SII補助金・ZEB/BEMS支援の最新の公募要件を確認する","共用部更新の投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの共用部・ビル全体の負担増を試算できる","共用部省エネ・受変電最適化と契約見直しの優先度を考える材料になる","高圧一括受電の高騰リスクを定量的に把握できる","中立的な立場で自社の共用部データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計や環境省・SIIの採択事例集、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲180万円・▲320万円・▲130万円などのBefore/Afterや削減率は精密な実績値ではなく、目安として示しています。5年累計は単純な5倍（例：180×5＝900万円）の参考値です。実際の効果は契約条件・設備構成・稼働実態により異なるため、自社の共用部の計測データに基づく試算が前提となります。"},{"question":"オーナーが削減できるのはどの範囲ですか。","answer":"オーナー（貸主）が主体的に削減できるのは、廊下・エントランス・機械室などの共用部の設備、ビル全体を束ねる受変電設備、契約電力や力率といった基本料金に関わる領域、そしてテナント課金・共用部按分の設計です。専有部（各テナントが使う区画）の使い方や個別契約は入居企業の裁量に属します。本記事はオーナー視点に絞った代表シナリオとして整理しており、特定の電力会社・契約形態を推奨するものではありません。"},{"question":"入居しているテナント側の電気代を下げる話はどこを見ればいいですか。","answer":"入居しているテナント自身が自社の契約や使い方を見直す視点は、別の記事に整理しています。オフィスビル入居企業の電気代見直しの考え方は「オフィスビルの電気代見直し」を、入居企業側の削減事例は「オフィスビルの電気代を見直した事例」をご覧ください。本記事はビルを保有・管理するオーナー側の共用部・受変電・課金に絞った代表シナリオです。立場によって打ち手が異なるため、読み分けてご活用ください。"},{"question":"テナント課金・共用部按分の適正化とは何ですか。","answer":"テナント課金・共用部按分の適正化とは、専有部のサブメーター計量値に基づく実費請求と、共用部相当を床面積などで公平に配分するルールを、単価根拠とともに明文化する取り組みです。電気代そのものを下げる施策ではありませんが、請求の透明性と回収の確実性を高め、値上げ局面でもテナントに根拠を示して説明できる状態をつくります。実務の詳細はテナント課金の解説記事もあわせてご確認ください。"},{"question":"高圧一括受電の契約電力は下げてよいですか。","answer":"一括受電の契約電力（デマンド）が使用実態に対して過大なら、適正化で基本料金を抑えられる場合があります。ただし引き下げすぎると、将来のテナント増床や設備増設でピークが上がったときに契約超過や再契約が必要になることがあります。稼働計画・増床余地を織り込み、デマンド監視でピーク実態を把握したうえで慎重に判断することが大切です。"},{"question":"共用部のLED化と空調更新はどちらを先にすべきですか。","answer":"一般には、投資回収が比較的早く稼働時間の長い共用部照明のLED化から着手し、効果を確認しながら高効率空調・換気の更新へ広げる順序が堅実です。空調更新は投資額が大きくなりやすいため、更新時期や補助金の公募状況と合わせて計画します。どちらを優先するかは共用部の使用実態（照明比率・空調比率・稼働時間）によって変わるため、まず内訳を計測して判断することをおすすめします。"},{"question":"使える補助金・税制はありますか。","answer":"環境共創イニシアチブ（SII）の省エネ補助金や、ZEB化・BEMS導入支援など、ビルの設備更新・省エネ投資を後押しする制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避け、一次情報を確認したうえで活用することをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"再エネ賦課金は購入電力量に対して課されるため、共用部のLED化・空調更新・運用改善で購入電力量そのものを減らせば、賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。2026年度の再エネ賦課金は4.18円/kWhで、使用量に比例して負担が増える仕組みです。共用部の省エネは電力量料金と賦課金の双方に効くため、稼働時間の長い設備から取り組むのが効果的です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・再エネ賦課金）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・省エネ・GX・ZEB/BEMS支援）","url":"https://www.meti.go.jp/"},{"name":"環境省（脱炭素・ZEB・省エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/office-building-electricity-cost-review","title":"オフィスビルの電気代見直し【入居企業側はこちら】","description":"入居企業（テナント自身）が契約・使い方を見直す視点。"},{"href":"/case-study-office-building-review","title":"オフィスビルの電気代を見直した事例【入居企業側はこちら】","description":"入居企業側で契約電力を適正化した削減事例。"},{"href":"/office-building-peak-cut","title":"オフィスビルのピークカット","description":"デマンド抑制で基本料金を下げる考え方。"},{"href":"/tenant-sub-meter-electricity-billing","title":"テナントのサブメーター電気代請求（課金実務）","description":"サブメーター計量と共用部按分の実務。"},{"href":"/office-electricity-cost-benchmark","title":"オフィス電気代のベンチマーク","description":"面積あたり電気代の目安と比較。"},{"href":"/subsidy-office-realestate-strategy","title":"オフィス・不動産の補助金戦略","description":"ビル・不動産の省エネ投資と補助金。"},{"href":"/subsidy-zeb-zeh-building","title":"ZEB/ZEH建築の補助金","description":"ネット・ゼロ・エネルギー・ビルの支援。"},{"href":"/subsidy-bemms-fems","title":"BEMS/FEMS導入補助金","description":"エネルギー管理システムの導入支援。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"共用部更新の効果の見立て。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金の基礎用語。"},{"href":"/basic-charge-explained","title":"基本料金の仕組み","description":"契約電力と基本料金の関係。"},{"href":"/high-voltage-electricity-bill-guide","title":"高圧の電気料金ガイド","description":"一括受電・高圧の料金構造。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-university-large-campus-management","title":"大学キャンパス×施設管理の事例","description":"大規模施設の共用インフラ最適化ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyTenantBuildingOwnerCommonAreaPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-06"
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
          <AuthorBadge publishedAt="2026-07-06" updatedAt="2026-07-06" />
          <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4">
            <p className="text-sm font-semibold text-slate-900">読み分けガイド（立場で見る記事が異なります）</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              本記事はビルを保有・管理する<span className="font-semibold">オーナー（貸主）</span>が共用部・受変電・テナント課金で削減する代表シナリオです。<span className="font-semibold">入居企業（テナント自身）</span>が自社の契約や使い方を見直す視点は{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気代見直し</Link>
              {" "}や{" "}
              <Link href="/case-study-office-building-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気代を見直した事例</Link>
              {" "}をご覧ください。テナント課金・共用部按分の実務は{" "}
              <Link href="/tenant-sub-meter-electricity-billing" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">テナントのサブメーター電気代請求</Link>
              {" "}で解説しています。
            </p>
          </div>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例（オーナー視点）の立場・規模・共用部と専有部の切り分け・課金の実務・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前にオーナーが抱えていた共用部・受変電・課金まわりの構造上の課題を整理します。これらは多くのテナントビルで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースでオーナーが採用した削減手法を整理します。単一施策ではなく、共用部省エネ・一括受電最適化・デマンド/力率管理・課金適正化を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模や打ち手の異なる3つの代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・稼働実態により異なります。実在企業の事例ではありません。5年累計はいずれも年間削減額を単純に5倍した参考値です。</p>
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
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・環境省・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。3つの代表シナリオの5年累計は、年間削減額を単純に5倍した参考値（180×5＝900・320×5＝1,600・130×5＝650）です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実行プロセスと体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同様の取り組みを自社で進める際の、データ収集からテナント合意・効果検証までの実行プロセスを整理します。</p>
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
              {" "}で、自社（保有ビル）が本ケースに近いかを確認できます。試算はあくまで目安であり、共用部の実測データに基づく精査が前提です。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは共用部と専有部の切り分けと現状把握から始めましょう。</p>
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
              のデータも参照のうえ、一括受電の契約見直しの判断材料にご活用ください。
            </p>
          </section>

          <ConsultCta from="tenant-building-owner" />

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-06" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社（保有ビル）の電気代と削減余地を試算する"
            description="本ケースに近いかどうかは、自社の業種・規模・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、共用部・ビル全体の上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="共用部省エネ・一括受電・テナント課金の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、ビルオーナーの共用部省エネ・受変電更新・高圧一括受電の見直し・テナント課金の適正化の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
