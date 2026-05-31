import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "高齢者施設の省エネ投資事例｜給湯ヒートポンプ・LED・空調更新で電気代を削減（代表シナリオ）";
const pageDescription = "高齢者施設(特養・老健・有料老人ホーム)が、24時間の給湯・空調の熱需要に対しヒートポンプ・LED・高効率空調の省エネ投資で電気代を抑えた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-welfare-elderly-energy-saving";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["高齢者施設 省エネ","介護施設 電気代 削減","給湯 ヒートポンプ","特養 LED 空調","福祉施設 補助金"],
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

const h1Text = "高齢者施設×省エネ投資：給湯・LED・空調更新の代表事例";
const breadcrumbTitle = "高齢者施設×省エネ投資の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。高齢者施設は24時間の給湯・空調・入浴介助で熱需要が大きく、電気代の高騰が経営を圧迫しやすい業態です。本稿では特養・老健・有料老人ホーム・小規模多機能の各タイプが、給湯ヒートポンプやLED、高効率空調、運用改善などの省エネ投資で電気代を抑えた目安事例を、中立社団法人の視点で再構成して解説します。";
const d1CtaLead = "自施設が本記事のケースと似た負荷構造かどうかは、業種別の電気使用量の目安と照らし合わせると整理しやすくなります。業種別電気代計算機では、高齢者施設のような24時間稼働・熱需要中心の業態を想定した試算ができます。まずは自施設の規模と契約区分を入力し、削減余地のあたりをつけるところから始めてみてください。";
const simulatorCtaLead = "電気料金の上昇リスクは、契約区分や使用パターンによって受ける影響が異なります。本シミュレーターでは、燃料費の変動や契約条件をふまえて、自施設がどの程度のリスクにさらされているかを把握できます。省エネ投資の判断材料として、まず現状のリスクを可視化し、削減余地と合わせて優先順位を整理するところから始めてみてください。";
const whatYouLearn = ["高齢者施設の電気代が高くなりやすい負荷特性(24時間給湯・空調・入浴)を理解できます","給湯ヒートポンプ・LED・高効率空調・運用改善という主要4手法の位置づけがわかります","特養/老健/有料/小規模多機能の規模別に削減率レンジの目安をつかめます","入居者の快適性を損なわずに省エネを進めるための判断観点が整理できます","補助金活用と投資回収を見極めるためのチェックリストを入手できます"];
const premise = [{"label":"業種特性(24時間稼働・熱需要中心)","detail":"高齢者施設は入居者が常時生活するため、夜間も含めて空調・照明・給湯が止まりません。とりわけ入浴介助に伴う大量の温水需要と、体温調節が難しい高齢者向けの安定した室温維持が電力消費の中心です。冬季の暖房・給湯、夏季の冷房に加え、感染症対策の換気強化も負荷を押し上げます。一般オフィスと異なり、深夜帯にも基礎需要が高止まりする点が大きな特徴です。"},{"label":"規模(定員数と延床面積)","detail":"本ケースでは定員30〜100名規模を中心に想定します。特養・老健は定員50〜100名・延床3000〜6000平方メートル前後、有料老人ホームは50名前後、小規模多機能は登録29名以下と幅があります。定員1名あたりの電力消費は施設タイプや築年数で差が出ますが、給湯設備と空調方式が消費量を大きく左右する点は共通です。実数値は施設の設計・稼働率により異なります。"},{"label":"契約区分(高圧・低圧電力)","detail":"中規模以上の特養・老健は高圧受電(契約電力50キロワット以上)が一般的で、基本料金は契約電力に基づきます。小規模多機能や小型の有料老人ホームは低圧電力や低圧電灯契約のケースもあります。高圧契約では最大需要電力(デマンド)が基本料金を決めるため、ピーク抑制が削減の鍵になります。契約区分の違いで打ち手の優先順位が変わる点に注意が必要です。"},{"label":"負荷パターン(時間帯・季節変動)","detail":"起床前後の給湯ピーク、日中の入浴介助、夕食準備、夜間の暖房維持と、一日を通じて需要が分散しつつも複数のピークを持ちます。季節では真夏と真冬に消費が跳ね上がり、中間期との差が大きいのが特徴です。給湯はタンク蓄熱で夜間電力に寄せられる一方、入浴時間帯の同時使用が瞬間ピークを生みます。負荷の山を平準化できるかが省エネ効果を左右します。"},{"label":"コスト構造(給湯・空調が大半)","detail":"高齢者施設の電力消費は給湯と空調で過半を占めるとされ、次いで照明、厨房、見守り機器・ナースコール等が続きます。給湯をガスや重油から電気ヒートポンプへ切り替えると電力比率が上がる一方、総エネルギーコストは下がる場合があります。基本料金(契約電力連動)と従量料金(燃料費調整・再エネ賦課金含む)の双方を見て、どこに削減余地があるかを分解することが出発点です。"}];
const beforeState = [{"label":"老朽空調による効率低下","detail":"築15年以上の施設では、旧型のパッケージエアコンや個別空調が更新されないまま稼働し、能力低下と消費電力増を招いていました。フィルター清掃や冷媒管理が不十分で、設定温度に達するまで長時間運転する状態が常態化。居室ごとの温度ムラも生じ、入居者からの暑い寒いの訴えに過剰運転で対応していたため、結果として無駄な電力消費が積み上がっていました。"},{"label":"給湯エネルギーの非効率","detail":"従来型のボイラーや電気温水器で大量の温水をまかなっており、保温ロスや過剰加熱が発生していました。入浴介助のピーク時に湯切れを防ぐため常時高温で沸かし続ける運用で、待機エネルギーが大きくなりがちでした。蓄熱タンクの断熱が不十分な施設もあり、夜間に沸かした湯が日中までに冷め、再加熱で電力を余分に消費するケースが見られました。"},{"label":"照明の白熱・蛍光灯残存","detail":"廊下・共用部・居室の多くが蛍光灯や一部白熱灯のままで、24時間点灯する廊下や夜間の常夜灯が消費を押し上げていました。高齢者の安全のため照度を確保する必要から照明を絞りにくく、点灯時間が長い分だけ非効率が累積。器具の経年劣化でちらつきや照度低下も生じ、交換頻度とメンテナンスコストの両面で負担となっていました。"},{"label":"デマンドと契約電力の管理不足","detail":"最大需要電力(デマンド)を可視化する仕組みがなく、入浴・厨房・空調が重なる時間帯に瞬間的なピークが発生していました。一度高いデマンドを記録すると以後1年間の基本料金に反映されるため、知らぬ間に契約電力が過大となり基本料金が割高化。電力使用の実態を時間帯別に把握していなかったため、どこを抑えるべきかの判断材料が不足していました。"}];
const approaches = [{"name":"給湯ヒートポンプ(CO2冷媒等)への更新","role":"最大の熱需要を高効率化","detail":"従来ボイラーや電気温水器を、大気熱を利用する業務用ヒートポンプ給湯機へ更新する手法です。同じ湯量を得るのに投入電力を抑えられ、夜間蓄熱と組み合わせて従量単価の安い時間帯に沸かす運用が可能になります。入浴介助のピークに合わせたタンク容量設計と、湯切れを起こさない制御がポイントです。施設最大のエネルギー費目に手を入れるため、削減インパクトが大きい中核施策となります。"},{"name":"高効率空調(インバータ・全熱交換換気)","role":"24時間負荷を底上げ削減","detail":"旧型空調をインバータ制御の高効率機へ更新し、外気導入には全熱交換型換気を組み合わせる手法です。換気で失う熱を回収することで、感染症対策の換気強化と省エネを両立しやすくなります。居室ごとの細かな温度制御で過剰運転を抑え、入居者の快適性も向上。24時間連続運転する空調は更新効果が積み上がりやすく、給湯と並ぶ削減の柱となります。"},{"name":"LED化と照明制御","role":"点灯時間の長さを効率化","detail":"蛍光灯・白熱灯をLEDへ全面更新し、共用部には人感センサーや調光制御を導入する手法です。高齢者の安全に必要な照度を確保しつつ、消費電力と発熱を抑えられ、結果として空調負荷の軽減にも寄与します。長寿命化で交換頻度が下がり、高所作業を伴うメンテナンス負担も軽減。24時間点灯する廊下や常夜灯の比率が高い施設ほど、累積効果が表れやすい施策です。"},{"name":"運用改善とデマンド管理","role":"投資を伴わない底上げ","detail":"BEMS等でエネルギー使用を可視化し、入浴・厨房・空調が重なるピーク時間をずらして最大需要電力を抑える運用改善です。設定温度の適正化、不要時間帯の消灯、フィルター清掃の定例化など、職員の日常運用に省エネを組み込みます。見守り機器の普及で夜間巡回が効率化された施設では、運用面の余力を省エネ運営に振り向けやすくなります。投資を抑えつつ効果を出せる土台施策です。"}];
const caseScenarios = [{"title":"特別養護老人ホーム(定員80名・高圧・築20年)","before":"給湯と空調が老朽化し電力消費が高止まり。基本料金もデマンド過大で割高な状態が目安です。","after":"給湯ヒートポンプ更新と高効率空調への切替を中核に、施設全体の電力使用量を一定割合抑制した代表シナリオです。","result":"電気使用量ベースで概ね15〜25パーセント程度の削減レンジが目安です。実際の効果は稼働率・気候・契約条件により変動します(代表シナリオ・目安)。"},{"title":"介護老人保健施設(定員100名・高圧・リハビリ併設)","before":"リハビリ機器と日中稼働で日中ピークが高く、空調と給湯の同時使用でデマンドが膨らんでいた状態が目安です。","after":"デマンド管理と空調更新、LED化を組み合わせ、ピーク平準化と基礎負荷削減を同時に進めた代表シナリオです。","result":"電力使用量で概ね10〜20パーセント程度、基本料金面でもピーク抑制による低減が見込める目安です。実数値は契約・運用で異なります(代表シナリオ・目安)。"},{"title":"有料老人ホーム(定員50名・低圧/高圧境界・居室個別空調)","before":"居室ごとの個別空調で温度ムラと過剰運転が生じ、照明も蛍光灯が残存していた状態が目安です。","after":"高効率個別空調とLED化、運用改善を中心に、入居者の快適性を保ちながら消費を抑えた代表シナリオです。","result":"電力使用量で概ね10〜18パーセント程度の削減レンジが目安です。居室稼働率や入居者の在室パターンで変動します(代表シナリオ・目安)。"},{"title":"小規模多機能型居宅介護(登録29名以下・低圧・小規模)","before":"投資余力が限られ、旧型エアコンと蛍光灯のまま運用改善も手探りだった状態が目安です。","after":"費用を抑えたLED化と運用改善を先行し、補助金活用で段階的に空調更新へ進めた代表シナリオです。","result":"電力使用量で概ね8〜15パーセント程度の削減レンジが目安です。小規模ゆえ投資判断は回収年数を重視します(代表シナリオ・目安)。"}];
const dataNotes = [{"label":"数値の出所","detail":"本記事の削減率レンジや負荷の前提は、経済産業省・資源エネルギー庁の省エネ関連資料、SII(環境共創イニシアチブ)の補助事業採択事例集、介護・福祉施設のエネルギー消費に関する業界統計から再構成した代表シナリオです(2025年10月時点)。特定施設の実測値ではなく、一般的な傾向を目安として示すものです。"},{"label":"レンジで示す理由","detail":"高齢者施設のエネルギー消費は、築年数・地域の気候・入居率・要介護度・給湯方式によって大きく異なります。単一の断定値は誤解を招くため、本記事ではあえて削減率をパーセントのレンジ、金額を月数十万円規模といった幅で表現しています。自施設の実数値は必ず個別の検針票や設備仕様に基づいて試算してください。"},{"label":"実額を断定しない方針","detail":"電気料金は基本料金・従量料金に加え、燃料費調整額や再生可能エネルギー発電促進賦課金が時期により変動します。そのため特定の円単位の削減額を断定することは避け、削減率や規模感で示しています。実際の請求額は契約条件・電力会社・使用実態によって変わる点をあらかじめご了承ください。"},{"label":"中立的再構成の前提","detail":"本ケースは中立・非営利の立場から、複数の公開情報を平均的な姿として再構成したものです。実在の特定企業・施設の事例ではなく、特定の設備メーカーや電力会社の優劣を評価する意図はありません。読者が自施設の状況を整理する際の思考の枠組みとしてご活用ください。"}];
const process = [{"label":"データ収集(検針票・設備台帳)","detail":"まず直近12カ月以上の検針票と需要記録を集め、月別・時間帯別の使用量と最大需要電力を把握します。あわせて空調・給湯・照明・厨房・見守り機器の設備台帳を整理し、機器の年式と能力、稼働時間を棚卸しします。季節変動と入居率の影響を切り分けて、どの費目がコストを押し上げているかを定量的に見える化することが出発点です。"},{"label":"分析(費目分解とピーク特定)","detail":"収集データをもとに、給湯・空調・照明など費目ごとの消費割合を推計し、削減余地の大きい領域を特定します。デマンドが立つ時間帯と要因(入浴・厨房・空調の同時使用など)を分析し、運用で平準化できる部分と設備更新が必要な部分を区別します。投資回収の見込みと入居者の快適性への影響を両面から評価し、施策の優先順位を組み立てます。"},{"label":"相見積と補助金確認","detail":"更新対象の設備について複数社から見積を取り、機器性能・保守体制・総額を比較します。並行して、省エネ設備導入に活用できる国・自治体の補助制度(SII関連の補助事業等)の公募時期と要件を確認します。補助金は申請から採択・実績報告までの工程が長いため、施工スケジュールと資金計画を逆算して準備することが重要です。"},{"label":"意思決定と効果検証","detail":"経営層・施設長・現場職員で投資判断を行い、回収年数・入居者影響・運用負荷を総合的に評価します。導入後はBEMS等で使用量とデマンドを継続的にモニタリングし、想定削減率との差異を検証します。効果が出ていない場合は設定や運用を見直し、PDCAを回します。職員への運用ルール周知と定着が、設備効果を最大化する最後の鍵となります。"}];
const viewpoints = [{"label":"投資回収年数で判断する","detail":"省エネ投資は初期費用と年間削減額のバランスで評価します。給湯ヒートポンプや空調更新は効果が大きい一方で投資額も大きいため、補助金適用後の実質負担と回収年数を試算し、施設の財務体力に見合うかを確認します。小規模施設ほど回収年数を厳しく見て、低コスト施策を先行させる判断が現実的です。"},{"label":"快適性と省エネの両立を優先する","detail":"高齢者は体温調節機能が低下しており、過度な節電は健康リスクに直結します。室温・照度を安全圏に保つことを大前提とし、無理な設定変更ではなく高効率機器と制御の最適化で消費を抑える発想が重要です。省エネはあくまで入居者の生活の質を守りながら進めるという順序を崩さないことが大切です。"},{"label":"基本料金と従量料金を分けて見る","detail":"電気料金は契約電力に連動する基本料金と、使用量に応じた従量料金に分かれます。デマンド管理は基本料金に、設備の高効率化は従量料金に主に効きます。どちらにどれだけ削減余地があるかを分けて把握すると、運用改善と設備投資のどちらを優先すべきかの判断が明確になります。"},{"label":"補助金の要件と時期を読む","detail":"省エネ補助金は対象設備・性能要件・公募時期が制度ごとに定められています。正式名称と最新の公募要領を確認し、申請から実績報告までの工程を逆算して計画します。補助率や上限額は年度や制度で変わるため、採択を前提に過度な期待をせず、補助がない場合の採算も併せて検討しておくと安全です。"},{"label":"運用と設備を一体で考える","detail":"高効率設備を入れても、運用が伴わなければ効果は目減りします。逆に運用改善だけでは限界があります。設備更新と日常運用の改善を一体で設計し、職員が無理なく続けられる省エネルールに落とし込むことが、効果を持続させる観点です。導入後のモニタリングと現場へのフィードバックも欠かせません。"}];
const cautions = [{"label":"節電優先で健康を損なわない","detail":"電気代削減を急ぐあまり冷暖房を過度に抑えると、高齢者の熱中症やヒートショックのリスクが高まります。省エネはあくまで入居者の安全と快適を守る範囲で行うものであり、室温・湿度の管理基準を下回らないことが絶対条件です。コスト削減を理由に居室環境を犠牲にしてはならない点を、現場全体で共有しておく必要があります。"},{"label":"削減率は施設条件で大きく変わる","detail":"本記事の削減率レンジはあくまで代表シナリオの目安です。同じ手法でも、築年数・気候・入居率・既存設備の状態によって効果は大きく異なります。他施設の成功事例の数値をそのまま自施設に当てはめると期待外れになることがあるため、必ず自施設の実データに基づいて試算することが重要です。"},{"label":"湯切れ・故障リスクへの備え","detail":"給湯設備の更新では、入浴介助のピーク時に湯切れを起こさないタンク容量と制御設計が不可欠です。また24時間稼働の施設では設備故障が生活に直結するため、保守体制やバックアップの確保を投資判断に含める必要があります。性能だけでなく信頼性とサポート体制を含めて総合評価することが大切です。"},{"label":"補助金は必ず採択されるとは限らない","detail":"補助金は予算枠や審査があり、申請しても採択されない可能性があります。補助金前提で投資計画を組むと、不採択時に資金繰りが厳しくなるおそれがあります。補助がなくても一定の採算が見込めるか、あるいは段階導入で初期負担を抑えられるかを、あらかじめ検討しておくことが安全です。"},{"label":"効果検証を怠ると効果が薄れる","detail":"設備を導入しただけで満足し、その後のモニタリングを怠ると、設定の乱れや運用の形骸化で効果が徐々に薄れることがあります。BEMS等で使用量とデマンドを継続的に確認し、想定との差異を定期的に振り返る仕組みを持つことが、省エネ効果を長く維持するための要点です。"}];
const checklist = ["直近12カ月以上の検針票と需要記録を保管しているか","空調・給湯・照明・厨房・見守り機器を台帳化したか","費目別の消費割合をおおまかに把握できているか","最大需要電力が立つ時間帯と要因を特定したか","契約区分(高圧・低圧)と契約電力が適正か確認したか","給湯方式と蓄熱タンク容量が湯量に見合うか点検したか","蛍光灯・白熱灯の残存箇所を洗い出したか","居室の温度ムラや過剰運転の有無を確認したか","省エネ補助金の公募時期と要件を調べたか","更新設備を複数社で相見積もり比較したか","投資回収年数と入居者影響を両面で評価したか","導入後の効果検証と運用ルールの定着策を用意したか"];
const simulatorCtaBullets = ["燃料費変動が電気料金に与える影響の目安を把握できます","契約区分や使用量からリスクの大きさを可視化できます","省エネ投資の優先順位づけの材料が得られます","現状把握から具体的な見直しの一歩につなげられます"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事の事例はすべて架空企業の代表シナリオであり、実在の特定施設の実測値ではありません。削減率や金額は、経済産業省・資源エネルギー庁の資料やSII採択事例集、業界統計から再構成した目安です(2025年10月時点)。築年数・気候・入居率などで効果は大きく変わるため、数値はあくまで参考のレンジとしてお考えください。実数値は契約条件や使用実態により異なります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当法人は中立・非営利の立場であり、特定の電力会社・契約形態・設備メーカーを推奨したり優劣を評価したりすることはありません。本記事は読者が自施設の状況を整理するための思考の枠組みを提供するものです。実際の選定は、複数社の比較や専門家への相談を通じて、施設ご自身の判断で行ってください。"},{"question":"高齢者施設で最も削減効果が大きいのはどの手法ですか。","answer":"一般に、施設のエネルギー消費の過半を占める給湯と空調の高効率化が効果の柱になりやすいとされます。とりわけ大量の温水を使う入浴介助があるため、給湯ヒートポンプへの更新はインパクトが大きい施策です。ただし投資額も大きいため、補助金の有無や回収年数を含めて判断する必要があります。施設の負荷構造によって最適な順序は異なります(代表シナリオ・目安)。"},{"question":"省エネと入居者の快適性は両立できますか。","answer":"両立は可能です。重要なのは、設定温度を無理に下げる節電ではなく、高効率機器と適切な制御によって同じ快適性をより少ないエネルギーで実現する発想です。高齢者は体温調節が難しく、過度な節電は健康リスクにつながります。室温・湿度を安全圏に保つことを前提に、設備の効率化と運用の最適化で消費を抑える方針が望ましいと考えられます。"},{"question":"投資余力が小さい小規模施設でも省エネは進められますか。","answer":"はい。小規模施設では、まず投資額の小さいLED化や運用改善を先行させ、効果を確認しながら段階的に空調・給湯の更新へ進む方法が現実的です。補助金を活用して初期負担を抑える選択肢もあります。回収年数を厳しめに見積もり、無理のない範囲で優先順位をつけることが、小規模施設で省エネを継続させるための要点です(代表シナリオ・目安)。"},{"question":"デマンド管理とは何で、なぜ重要なのですか。","answer":"デマンド管理とは、一定時間ごとの平均使用電力の最大値(最大需要電力)を抑える取り組みです。高圧契約では、この最大需要電力が基本料金を決める要素になり、一度高い値を記録すると以後の料金に反映されます。高齢者施設では入浴・厨房・空調が重なる時間帯にピークが立ちやすいため、使用を時間的にずらして山を平準化することが基本料金の抑制につながります。"},{"question":"補助金を使えば必ず投資負担は下がりますか。","answer":"補助金は予算枠や審査があり、申請しても採択されるとは限りません。補助金前提で計画を組むと、不採択時に資金繰りが厳しくなるおそれがあります。補助制度の正式名称と最新の公募要領を確認したうえで、補助がない場合でも一定の採算が見込めるか、あるいは段階導入で負担を抑えられるかを併せて検討しておくと安全です。制度内容は年度により変わります。"},{"question":"導入後に効果を維持するには何が必要ですか。","answer":"設備を導入しただけでは効果が徐々に薄れることがあります。BEMS等で使用量と最大需要電力を継続的にモニタリングし、想定削減率との差異を定期的に検証する仕組みが必要です。あわせて、設定温度の適正化やフィルター清掃、消灯ルールなどの運用を職員が無理なく続けられる形に落とし込み、現場への周知と定着を図ることが、効果を長く維持する鍵となります。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/nursing-care-facility-electricity-cost-review","title":"介護施設の電気代見直し","description":"24時間運営の電力構造。"},{"href":"/hospital-electricity-cost-review","title":"病院の電気代見直し","description":"医療設備の電力構造。"},{"href":"/subsidy-medical-welfare-strategy","title":"医療・福祉の補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/subsidy-heat-pump-introduction","title":"業務用ヒートポンプ導入の補助金","description":"給湯熱源の高効率化。"},{"href":"/subsidy-sme-energy-saving-patterns","title":"中小の省エネ補助金の型","description":"規模別の補助金活用。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-hospital-24h-bcp-backup","title":"病院×BCP非常用電源の事例","description":"医療の比較ケース。"},{"href":"/case-study-university-large-campus-management","title":"大学キャンパス×エネマネの事例","description":"施設運営の比較ケース。"},{"href":"/demand-control-guide","title":"デマンド制御の基礎","description":"契約電力・基本料金を抑える。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyWelfareElderlyEnergySavingPage() {
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
