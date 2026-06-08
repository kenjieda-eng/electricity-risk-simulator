import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "繊維・染色工場×廃熱回収で電気代を削減した事例｜染色・乾燥の蒸気と温排水を高効率ボイラー・熱回収で最適化（代表シナリオ）";
const pageDescription = "染色・整理・乾燥で温水・蒸気を多用する繊維・染色工場が、染色排水の廃熱回収・高効率ボイラー・ヒートポンプで電気代と燃料費を最適化した代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-textile-dyeing-heat-recovery";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["繊維 染色 廃熱回収 事例","染色工場 電気代 削減","高効率ボイラー 省エネ","繊維 ヒートポンプ 温水","染色排水 熱回収 投資回収"],
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

const h1Text = "繊維・染色工場×廃熱回収：染色・乾燥の熱を回収して電気代を抑えた代表事例";
const breadcrumbTitle = "繊維・染色工場×廃熱回収の事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。染色・整理・乾燥工程で温水と蒸気を多用し、動力負荷も持つ繊維・染色工場が、染色排水の廃熱回収・高効率ボイラー・ヒートポンプの活用によって、電気代と燃料費の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は契約条件・工程構成・燃料価格により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社が今回の繊維・染色工場の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、染色・乾燥・動力のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "廃熱回収・省エネ投資の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(廃熱回収・高効率化)と単価の最適化(契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["繊維・染色工場で電気代と燃料費が重い理由(染色・整理・乾燥の温水/蒸気と動力の複合負荷)の構造","染色排水・ボイラ排ガスの廃熱回収が燃料費と電力を同時に下げうる仕組みと適性条件","高効率ボイラー・ヒートポンプ・蒸気最適化で熱を無駄なく使い切る考え方の目安","SII省エネ補助金・ヒートポンプ補助・省エネ診断を組み合わせた投資回収(ROI)の見立てと注意点","自社が廃熱回収・高効率化に向いているかを見極める観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(染色・整理の温水/蒸気と動力)","detail":"繊維・染色工場は、染色・精練・整理・乾燥といった工程で大量の温水と蒸気を使い、染色機・テンター(乾燥機)・ポンプ・送風機などの動力も稼働する、熱と電力の双方が重い業種です。とりわけ染色は温水を多用し、温排水として熱を捨ててしまいがちです。熱と電気を別々に最適化すると全体最適を逃しやすく、両者を一体で捉える視点が前提になります。"},{"label":"規模(高圧中心・バッチ/連続が混在)","detail":"中堅の繊維・染色工場は高圧で受電し、染色はバッチ処理、乾燥・整理は連続に近い稼働など、工程ごとに負荷パターンが異なります。製品や受注により稼働が変動し、繁忙期には熱・電気の需要が同時に高まります。契約電力(デマンド)が基本料金を左右するため、ピークの重なりを抑える運用も論点になります。"},{"label":"契約区分(基本料金+電力量料金+調整費)","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。乾燥・動力で使用量が大きく電力量料金の比率が高いほか、ボイラ燃料費の負担も重いため、電力と燃料の双方を下げる施策が効きます。廃熱回収は燃料・電力の両面に効きやすい打ち手の一つです。"},{"label":"熱需要(温水・蒸気が工程に偏在)","detail":"染色・精練は温水・蒸気を多用し、温排水として熱を捨てやすいのが繊維の特徴です。捨てている温排水の熱を回収できれば、ボイラ燃料や給湯の電力を減らせます。熱需要が工程ごとに偏在するため、どの工程でどの温度帯の熱をどれだけ使い・捨てているかを把握することが、廃熱回収の設計の前提になります。"},{"label":"コスト構造(電力・燃料・水が絡み合う)","detail":"繊維・染色のエネルギーコストは、購入電力・ボイラ燃料・温水(用水・排水処理を含む)が相互に絡み合います。熱を捨てる=燃料を無駄にすることであり、水処理コストにも跳ね返ります。エネルギー単体ではなく工場全体のユーティリティと水収支で捉えることが、廃熱回収・高効率化の投資判断の出発点になります。"}];
const beforeState = [{"label":"染色排水の熱を回収せず捨てている","detail":"染色・精練工程の温排水を熱回収せずにそのまま排出し、給水やボイラで改めて加熱していました。捨てている温排水には相当の熱が残っており、回収できれば燃料と給湯電力を減らせる余地が大きい状態です。熱回収という発想が弱く、燃料を作って捨てる非効率が常態化していました。"},{"label":"ボイラの低効率運転と排ガス熱の未回収","detail":"経年ボイラが低効率のまま運転を続け、排ガス熱をエコノマイザで回収していないなど、ボイラ周りの熱ロスが残っていました。蒸気配管の保温やスチームトラップの管理も後回しで、蒸気を作る段階・運ぶ段階の双方でロスが生じていました。燃料費の削りどころが見えにくい状態です。"},{"label":"乾燥・動力設備の経年化と過剰運転","detail":"テンター(乾燥機)や送風機・ポンプが経年化し、インバータ未導入のまま風量・流量を絞るなど部分負荷ロスが常態化していました。乾燥温度や排気の管理が甘く、必要以上のエネルギーを使う場面もありました。照明も旧式が残り、回収の早い領域が手付かずでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"工場全体の電力量は把握できても、工程別・用役別(温水・蒸気・電力)の内訳や、捨てている熱量がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。FEMS・エネマネが未整備で、待機ロスや異常消費に気づきにくく、廃熱回収の効果を定量化する根拠データづくりにも手間がかかっていました。"}];
const approaches = [{"name":"染色排水・排ガスの廃熱回収","role":"捨てていた熱を回収し燃料費と給湯電力を削減","detail":"染色・精練の温排水を熱交換器で回収し、給水予熱や次工程の温水として再利用します。ボイラ排ガスはエコノマイザで回収し給水予熱に回します。捨てている熱を取り戻すことで、ボイラ燃料とヒートポンプ・給湯の電力を減らせます。繊維は温排水の熱量が大きいため、廃熱回収は燃料・電力の双方に効きやすい中心的な打ち手です。"},{"name":"高効率ボイラー・蒸気/ユーティリティ最適化","role":"蒸気を作る・運ぶ段階のロスを源流から削減","detail":"経年ボイラを高効率機へ更新し、蒸気圧の適正化、配管の保温強化、スチームトラップの点検、ドレン回収の徹底で熱ロスを抑えます。蒸気の需要に合わせた台数制御や負荷追従運転も検討します。蒸気を作る段階と運ぶ段階の双方を見直すことで、燃料費を着実に下げられます。"},{"name":"ヒートポンプ・乾燥/動力の高効率化","role":"給湯・乾燥・動力の電力消費を効率化","detail":"温水製造の一部をヒートポンプ給湯に置き換え、乾燥機(テンター)の排気熱回収や温度・排気の最適化を行います。送風機・ポンプにインバータを導入して可変速運転に切り替え、照明はLED化します。電力で動かす設備の効率を底上げすることで、購入電力量と契約電力の双方を抑えます。"},{"name":"FEMS導入・運用改善・効果検証","role":"捨てている熱と消費を見える化し継続改善","detail":"FEMS(工場エネルギー管理システム)で電力・温水・蒸気の消費と、捨てている熱量を工程別・時間帯別に可視化します。これは廃熱回収の効果を定量化し、優先順位を付ける根拠になります。導入後も実績をモニタリングし、染色レシピや乾燥条件・運転スケジュールの見直しを組み合わせるPDCAを回す基盤として機能します。"}];
const caseScenarios = [{"title":"廃熱回収を先行(染色排水・排ガス)","before":"染色排水とボイラ排ガスの熱を回収せず捨てていた代表シナリオを目安に想定します。","after":"温排水・排ガスの廃熱回収で給水予熱・温水を賄い、ボイラ燃料と給湯電力を概ね一割前後低減する代表レンジを目安とします。","result":"捨てていた熱を取り戻す施策は燃料・電力の双方に効き、投資回収も比較的得やすい傾向です。効果は温排水の熱量と回収率により幅があります。"},{"title":"高効率ボイラー・蒸気最適化","before":"経年ボイラと配管ロスが残り、蒸気を作る・運ぶ段階のロスが課題だった代表シナリオを想定します。","after":"高効率ボイラー更新・保温強化・スチームトラップ整備で、蒸気起因の燃料を概ね数%〜一割程度低減する代表レンジを目安とします。","result":"地味だが着実な燃料削減が見込め、廃熱回収と組み合わせると効果が重なります。実額は既存設備の状態により異なります。"},{"title":"ヒートポンプ・乾燥/動力の高効率化","before":"乾燥機・送風機・ポンプが経年化し、給湯も電気・蒸気で非効率だった代表シナリオを想定します。","after":"ヒートポンプ給湯・乾燥排気熱回収・インバータ化・LED化で、該当領域の消費を概ね一〜二割程度低減する代表レンジを目安とします。","result":"電力消費の効率化に直結し、回収の早い領域も含みます。工場全体に占める比率は工程構成により変わります。"},{"title":"全社統合(廃熱回収+高効率化+運用改善)","before":"用役別の見える化がなく、熱回収と設備更新が分断されていた代表シナリオを想定します。","after":"FEMSで捨てている熱と消費を把握したうえで廃熱回収・高効率ボイラー・ヒートポンプ・運用改善を組み合わせ、工場全体のエネルギーコストを総合的に抑える代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は契約条件・工程構成・温排水の熱量・燃料価格により異なります。"},{"label":"削減レンジの根拠","detail":"廃熱回収による燃料・給湯電力の削減や、高効率ボイラー・ヒートポンプ・インバータ化の効果は、省エネ補助金の採択事例や省エネ診断の一般的な知見を参考にレンジ化しています。温排水の熱量や回収率、既存設備の状態で効果は変わるため、自社では計測データに基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"繊維・染色工場は電力・燃料・水の使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事では精密な金額の断定は行いません。削減率(%)レンジと幅で示し、燃料価格・電力単価の変動で結果が動く点を併記して、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。SII(環境共創イニシアチブ)による省エネ補助金、ヒートポンプ関連の補助、FEMSなどはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・熱フローの把握","detail":"受変電の電力量・デマンド記録に加え、ボイラ燃料消費や温水・蒸気の使用実績、温排水の温度・量を集め、工程別・時間帯別に棚卸しします。どこでどの温度帯の熱を使い・捨てているかを把握することが、廃熱回収の設計の出発点です。FEMSや簡易計測で見える化し、回収可能な熱量を見積もります。"},{"label":"分析・診断と優先順位付け","detail":"第三者の省エネ診断やエネルギー監査を活用し、廃熱回収・高効率ボイラー・ヒートポンプ・動力高効率化の投資対効果を比較します。回収の早い廃熱回収・保温・運用改善と、設備更新を切り分け、優先順位と概算投資額、補助金適用可能性を含めた投資回収年数(ROI)を試算します。運用改善で済む項目と更新が必要な項目を分けます。"},{"label":"相見積・補助金/制度の検討","detail":"設備は複数社から相見積を取り、仕様・保証・保守費まで含めたライフサイクルコストで比較します。SIIの省エネ補助金やヒートポンプ関連補助の要件・公募スケジュールを確認し、申請に必要な省エネ効果の根拠資料を準備します。電力契約・燃料調達の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標(削減率・回収年数・CO2削減量)で行い、稼働への影響が少ない時期に工事を計画します。導入後はFEMSで廃熱回収量・燃料・電力の実績をモニタリングし、想定との差異を検証します。染色レシピや乾燥条件の見直しと組み合わせ、PDCAとして継続的に効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"捨てている熱の量が廃熱回収の効果を決める","detail":"廃熱回収は、回収できる温排水・排ガスの熱量が大きいほど効果が出ます。捨てている熱の温度帯と量、利用先との距離を実測しないと効果を過大にも過小にも見積もりかねません。どの工程でどれだけ熱を捨てているかを把握することが、投資効果を見極める最重要の観点です。"},{"label":"量(kWh)・契約電力・燃料・単価を分けて考える","detail":"廃熱回収・高効率化は燃料費と使用電力量を減らす取り組み、契約・メニュー見直しは単価を下げる取り組みです。繊維は燃料費の比率も高いため、電力だけでなく燃料の削減も併せて評価することが大切です。要素を切り分けて評価すると投資配分の判断がしやすくなります。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"初期投資だけでなく、想定削減額・保守費・設備寿命を含めたライフサイクルコストで評価します。補助金で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。燃料・電力価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・蒸気・温水・水処理を分断して最適化すると全体最適を逃します。廃熱回収のように熱と電力・水を横断する施策は、片方だけ見ると効果を過小評価しがちです。工場全体のエネルギーフローと水収支で俯瞰し、最も効く順に手を打つ視点が欠かせません。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、自社のデータに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"廃熱回収は温度帯と利用先で効果が変わる","detail":"温排水・排ガスの熱は、温度帯が低かったり利用先が遠かったりすると回収効率が下がります。本記事の削減レンジは一定の熱量と回収率を前提とした目安であり、捨てている熱が少ない工場では効果が限られます。実測に基づいて回収可能熱量を見積もることが前提です。"},{"label":"高効率ボイラー=必ず黒字ではない","detail":"ボイラ更新は燃料を削減しますが、投資額に対して回収に長期を要する場合があります。既存ボイラの残存価値や稼働率によっては、運用改善や廃熱回収を先に進める方が現実的なこともあります。回収年数が設備寿命の範囲に収まるかを確認して判断することが大切です。"},{"label":"補助金・制度は要件と期限がある","detail":"SIIの省エネ補助金やヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"見える化だけでは削減しない","detail":"FEMSやエネマネを導入しても、可視化したデータを改善行動につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、捨てている熱や消費を見て回収・設定を最適化し、効果を検証するPDCAを回して初めて成果が出ます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断は専門家の診断と自社データに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","ボイラ燃料消費と温水・蒸気の使用実績を集計する","染色・精練・乾燥など用役別の消費を計測または推計する","染色排水・ボイラ排ガスの温度・熱量と回収余地を確認する","廃熱回収の利用先(給水予熱・温水)と距離を確認する","ボイラの効率・蒸気圧・台数制御の状況を点検する","蒸気配管の保温とスチームトラップ・ドレン回収を点検する","乾燥機(テンター)排気熱回収とインバータ導入状況を点検する","ヒートポンプ給湯・LED化の余地を確認する","SII補助金・ヒートポンプ補助など制度の最新要件を確認する","複数の燃料・電力価格シナリオで感度分析を行う","投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","廃熱回収・高効率化と契約見直しの優先度を考える材料になる","繊維・染色の高騰リスクを定量的に把握できる","中立的な立場で自社データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例集、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです(2026年度時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は契約条件・工程構成・温排水の熱量・燃料価格により異なるため、自社の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は廃熱回収・高効率化の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"染色排水の廃熱回収はどんな場合に効果が出ますか。","answer":"一般に、染色・精練工程で温度の高い温排水を継続的に大量に捨てている工場ほど効果が出やすくなります。捨てている温排水の熱を熱交換器で回収し、給水予熱や次工程の温水に再利用すれば、ボイラ燃料と給湯電力を減らせます。ただし温排水の温度帯や利用先との距離で回収効率が変わるため、工程ごとの実測に基づく検討が前提です。"},{"question":"廃熱回収と高効率ボイラー更新はどちらを先にすべきですか。","answer":"一般には、投資回収が比較的早い廃熱回収や保温強化・運用改善から着手し、効果を確認しながら、投資額の大きいボイラ更新の可否を判断する順序が堅実です。廃熱回収は燃料と給湯電力の双方に効き、ボイラ更新の前提となる熱負荷データの把握にも役立ちます。どちらを優先するかは既存設備の状態と捨てている熱量によって変わります。"},{"question":"ヒートポンプ給湯は繊維工場で有効ですか。","answer":"温水需要が安定して大きい繊維・染色工場では、温水製造の一部をヒートポンプ給湯に置き換えると、ボイラ燃料の一部を電力(高効率な熱供給)に転換でき、廃熱回収と組み合わせて全体効率を高められる場合があります。ただし必要な温度帯や電力単価・燃料価格の関係で有利不利が変わるため、自社の温度帯と価格条件に基づいて検討することが大切です。導入ありきで進めない姿勢が重要です。"},{"question":"電力(動力)側でできる対策はありますか。","answer":"乾燥機(テンター)・送風機・ポンプにインバータを導入して風量・流量に応じた可変速運転にしたり、乾燥機の排気熱を回収したり、照明をLED化するなど、電力消費を効率化する打ち手があります。あわせてデマンド監視でピークを抑えれば契約電力(基本料金)の低減にもつながります。熱側の廃熱回収と電力側の高効率化を併せて進めると効果が重なります。"},{"question":"使える補助金はありますか。","answer":"SII(環境共創イニシアチブ)の省エネ補助金やヒートポンプ関連の補助など、設備更新を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避け、申請に必要な省エネ効果の根拠資料を早めに準備することをおすすめします。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"廃熱回収や高効率化で購入電力量を減らすと、購入電力にかかる電力量料金や、購入電力量に連動する各種調整費・賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課されるため、量の削減は負担軽減に寄与します。あわせてボイラ燃料の削減は燃料費そのものを下げるため、電力と燃料の双方を見て総合的に評価することが重要です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・熱回収）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"},{"name":"一般財団法人省エネルギーセンター（ECCJ）","url":"https://www.eccj.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/textile-electricity-cost-review","title":"繊維・染色業の電気代見直し","description":"染色・乾燥の熱と動力の構造。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"給湯・加温の高効率化。"},{"href":"/subsidy-cogeneration-introduction","title":"コージェネ導入と補助金","description":"熱電併給の選択肢。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/bems-fems-ems-overview","title":"BEMS・FEMS・EMS入門","description":"見える化システムの基礎。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/subsidy-roi-payback-calculation","title":"補助金活用時の投資回収計算","description":"補助金込みの回収試算。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"省エネ投資の進め方。"},{"href":"/case-study-manufacturer-medium-contract-review","title":"中堅製造業×契約見直しの事例","description":"契約中心ケースの比較。"},{"href":"/case-study-hotel-resort-cogeneration","title":"リゾートホテル×コージェネの事例","description":"熱需要が大きい施設の事例。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyTextileDyeingHeatRecoveryPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・工程構成・温排水の熱量・燃料価格により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは多くの繊維・染色工場で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、廃熱回収を軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・温排水の熱量・燃料価格により異なります。実在企業の事例ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と熱フローの取得から始めましょう。</p>
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
            heading="電力契約・省エネ・廃熱回収投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・廃熱回収投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
