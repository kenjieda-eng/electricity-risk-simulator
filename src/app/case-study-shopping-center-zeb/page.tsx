import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "大型商業施設のZEB化事例｜LED・高効率空調・自家消費太陽光で電気代を削減（代表シナリオ）";
const pageDescription = "大型商業施設(ショッピングセンター・百貨店)が、LED・高効率空調・BEMS・自家消費太陽光を積み上げてZEB化を進め電気代を抑えた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-shopping-center-zeb";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["商業施設 ZEB","ショッピングセンター 電気代","BEMS 商業施設","自家消費 太陽光 商業","LED 空調 削減"],
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

const h1Text = "大型商業施設×ZEB化：LED・空調・太陽光で電気代を削減した代表事例";
const breadcrumbTitle = "大型商業施設×ZEB化の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。大型商業施設(SC・百貨店)が外皮改修・LED・高効率空調・BEMS・自家消費太陽光を積み上げてZEB化を進めた事例を、業界統計と公開採択事例から再構成して解説します。共用部と専有部の切り分け、テナント協調、補助金活用まで、商業施設固有の論点を中立的に整理します。";
const d1CtaLead = "自社の施設が本ケースと同様の条件かどうかは、業種と規模、契約区分を入力して試算してみると見えてきます。業種別電気代計算機を使えば、大型商業施設の代表的な使用パターンに基づくおおよその電気代水準を確認できます。まずは現状の位置づけを把握し、削減余地の検討材料にしてください。";
const simulatorCtaLead = "本ケースを読んで自社の電気料金リスクや削減余地が気になった場合は、まず現状を客観的に把握することをおすすめします。シミュレーターでは契約区分や使用量をもとに、料金上昇局面でのリスクをおおよそ確認できます。大型商業施設のような大口需要家ほど、見直しの前提となる現状把握の意義は大きくなります。";
const whatYouLearn = ["ZEB・Nearly ZEB・ZEB Ready・ZEB Orientedの定義と大型商業施設での到達目安","外皮・LED・高効率空調・BEMS・自家消費太陽光の省エネ積み上げの考え方","共用部と専有部(テナント区画)の電力構造の違いと協調の進め方","規模・サブ業種別の代表シナリオ4件における削減率レンジの目安","補助金や効果検証を含む実行プロセスと中立的に判断するための観点"];
const premise = [{"label":"業種特性(大型商業施設)","detail":"SCや百貨店は照明・空調・換気・昇降機・冷蔵冷凍ケースなど多様な負荷が混在し、共用部と専有部で管理主体が分かれます。延床面積が大きく営業時間が長いため使用量が膨大で、夏季の冷房と冬季の暖房の双方でピークが立ちやすい点が特徴です。来店者の快適性と省エネの両立が前提となり、見た目や明るさを損なわない更新が求められます。"},{"label":"規模(延床・契約電力)","detail":"本ケースの代表モデルは延床数万平方メートル級、契約電力が高圧から特別高圧にまたがる大型施設を想定します。テナント数十から百以上を抱え、館全体の年間電力使用量は数百万から一千万キロワット時規模に達する代表シナリオです。実数値は施設の業態構成・営業時間・空調方式により大きく異なります。"},{"label":"契約区分","detail":"受電規模により高圧または特別高圧で受電し、デマンド(最大需要電力)に応じた基本料金と従量料金で構成されます。特別高圧では自営の受変電設備を持ち、テナントへは子メーターで按分または共益費に含めて課金する形態が一般的です。契約区分とデマンド管理の前提を整理することが見直しの出発点になります。"},{"label":"負荷パターン","detail":"開店前の立ち上げ、日中の来店ピーク、閉店後の清掃・搬入まで稼働が続きます。空調は外気導入と内部発熱(照明・人体・厨房)の影響が大きく、夏季午後にデマンドが集中します。フードコートや食品売場の冷凍冷蔵は通年で基底負荷を形成し、24時間稼働の設備が基底消費を押し上げる季節性が論点です。"},{"label":"コスト構造","detail":"電気料金は基本料金(デマンド連動)と従量料金、燃料費調整額、再エネ賦課金で構成されます。大型施設では空調と照明が消費量の大きな割合を占め、共用部の運用と専有部の使用が混在します。固定費に近い基本料金の比率も無視できず、ピーク抑制と総使用量削減の両面からコスト構造を捉える必要があります。"}];
const beforeState = [{"label":"旧式照明の高消費と発熱","detail":"蛍光灯や水銀灯・ハロゲンが売場・共用部・駐車場に多数残存し、照明自体の消費に加えて発熱が空調負荷を押し上げていました。点灯時間が長く調光制御も限定的で、明るさの過剰や消し忘れによる無駄が常態化していた代表シナリオです。"},{"label":"空調の効率低下と過剰運転","detail":"経年した熱源機やパッケージ空調が低効率のまま運転され、外気冷房や中間期の最適制御が効いていませんでした。テナント区画ごとの個別運転で全館最適が取れず、無人時間帯や開店前の過剰な立ち上げにより電力とデマンドの双方が膨らんでいました。"},{"label":"デマンド管理の不在","detail":"最大需要電力の発生要因が可視化されておらず、夏季午後に照明・空調・昇降機が重なってピークが形成されても抑制策が後手に回っていました。デマンドが基本料金を押し上げる構造への理解が浅く、契約電力の妥当性を検証する仕組みもない状態でした。"},{"label":"エネルギーデータの分断","detail":"共用部と専有部、設備系統ごとの計量が分断され、どこで何にどれだけ使っているかを横断的に把握できていませんでした。テナントとの省エネ情報共有も乏しく、施設全体としての削減目標やZEB化の方針を立てる前提データが不足していた代表シナリオです。"}];
const approaches = [{"name":"高効率LEDへの照明更新と調光制御","role":"消費と発熱を同時に削減する基盤施策","detail":"売場・共用部・駐車場・看板の照明をLEDへ更新し、人感センサーや昼光連動の調光、タイムスケジュール制御を組み合わせます。照明消費そのものの削減に加え、発熱低減で空調負荷も下がる二次効果が見込めます。来店者の快適性や演色性を確保しつつ過剰照度を是正し、エリア別に明るさを最適化することが要点です。"},{"name":"高効率空調・熱源の更新と外皮対策","role":"最大消費源への本丸施策","detail":"熱源機やパッケージ空調を高効率機へ更新し、外気冷房・全熱交換・インバータ制御を導入します。あわせて窓の遮熱・断熱や日射遮蔽など外皮性能を高め、空調の発生熱量自体を抑えます。商業施設は内部発熱が大きいため、外気導入量の最適化と中間期制御が省エネと快適性の両立に効いてきます。"},{"name":"BEMSによる見える化と全館最適制御","role":"運用改善と効果検証の中枢","detail":"BEMS(ビルエネルギー管理システム)で系統別・テナント別の使用量とデマンドを見える化し、ピーク予測に基づく空調・照明の自動制御やデマンド警報を行います。共用部と専有部のデータを統合することで、運用改善のPDCAが回り、設備更新の効果を継続的に検証できます。テナント協調の共通基盤にもなります。"},{"name":"自家消費型太陽光の導入","role":"創エネによる正味エネルギー削減","detail":"屋上や立体駐車場上部に太陽光発電を設置し、昼間の自家消費で系統からの購入電力を減らします。商業施設は日中の空調・照明負荷が大きく発電と消費の時間帯が重なりやすいため自家消費率を高めやすい点が特徴です。省エネで消費を絞ったうえで創エネを積み上げることがZEB化の到達に寄与します。"}];
const caseScenarios = [{"title":"シナリオ1: 照明・空調更新中心の中規模SC","before":"旧式照明と低効率空調が消費の大半を占め、館全体の電力使用量が高止まりしている代表シナリオです。","after":"LED更新と高効率空調・運用見直しを実施し、空調と照明を中心に積み上げます。","result":"館全体の電力使用量で概ね15〜25%程度の削減が見込める目安です。実額は契約条件・使用実態により異なります。"},{"title":"シナリオ2: 自家消費太陽光を併設した郊外型SC","before":"屋上・駐車場上部に未活用スペースがあり、日中負荷を全量系統購入でまかなっている状態です。","after":"省エネ施策に加えて自家消費型太陽光を併設し、昼間の購入電力を削減します。","result":"省エネと創エネ合算で正味の購入電力を概ね25〜40%程度抑制する目安(代表シナリオ)で、自家消費率により変動します。"},{"title":"シナリオ3: BEMS統合でデマンド最適化した百貨店","before":"テナント・系統ごとの計量が分断され、夏季午後のデマンドピークが基本料金を押し上げています。","after":"BEMSで全館の見える化とピーク予測制御を行い、デマンドと運用無駄を抑制します。","result":"最大需要電力(デマンド)で概ね10〜20%程度の低減と運用改善による追加削減が見込める目安です。"},{"title":"シナリオ4: ZEB Ready到達を目指した大型複合施設","before":"外皮・設備とも更新余地が大きく、エネルギー消費性能が基準比で高い水準にあります。","after":"外皮・LED・高効率空調・BEMSを総合的に積み上げ、ZEB Readyの基準到達を目指します。","result":"基準一次エネルギー消費量比で50%以上の削減(ZEB Readyの目安水準)を狙う代表シナリオで、達成可否は設計条件により異なります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterや削減率は、業界統計と公開された採択事例から再構成した代表レンジであり、特定の実在企業の実績ではありません。精密な金額は断定せず、削減率(%)レンジや幅のある目安表現で示しています。実数値は契約条件・使用実態により異なります。"},{"label":"出典の考え方","detail":"経産省・資源エネルギー庁の省エネ関連資料、SII(環境共創イニシアチブ)の採択事例集、商業施設・建築の業界統計から再構成しています(2025年10月時点・代表シナリオ)。制度や基準の最新内容は一次情報での確認を前提としています。"},{"label":"ZEB水準の定義基準","detail":"ZEBの区分(ZEB・Nearly ZEB・ZEB Ready・ZEB Oriented)は、基準一次エネルギー消費量からの削減率と再エネ評価の有無で定義されます。本記事の到達目安は一般的な定義に基づく代表値であり、実際の認証要件・評価方法は最新の制度定義に従う必要があります。"},{"label":"施設条件による変動","detail":"削減率は延床面積・業態構成・営業時間・空調方式・既存設備の老朽度により大きく変動します。同じ施策でも食品売場比率の高い施設と物販中心の施設では基底負荷が異なり、効果の出方も変わります。本記事の数値はあくまで条件を仮定した目安です。"}];
const process = [{"label":"データ収集と現状把握","detail":"過去の電力使用量・デマンド推移・燃料費調整額を集計し、系統別・テナント別の計量データや設備台帳を整理します。共用部と専有部の使用構造、夏冬のピーク要因を可視化し、どこに削減余地があるかを定量的に把握することから始めます。"},{"label":"省エネ診断と施策の優先順位付け","detail":"照明・空調・外皮・BEMS・太陽光の各施策について投資対効果と実現性を評価し、ZEBのどの水準を目指すかを設定します。営業への影響が小さく効果の大きい施策から段階的に進める計画を立て、設計・施工のスケジュールを来店ピークと調整します。"},{"label":"相見積と補助金の検討","detail":"複数事業者から見積を取得して仕様と価格を比較し、SIIのZEB関連補助金など活用可能な制度を確認します。要件・公募時期・採択条件を踏まえて申請計画を立て、施設側・設計者・施工者で役割と責任範囲を明確化したうえで意思決定材料を整えます。"},{"label":"意思決定と効果検証","detail":"投資・補助金・想定削減効果を経営層に提示して意思決定を行い、施工後はBEMSのデータで効果を継続検証します。想定との差異を分析して運用を調整し、テナントへ削減状況を共有して協調を促すことで、館全体の改善サイクルを定着させます。"}];
const viewpoints = [{"label":"省エネと創エネの順序","detail":"太陽光などの創エネを先行させるより、まず省エネで消費そのものを絞ることが費用対効果の面で有利になりやすい点に留意します。負荷を下げてから設備容量を見直すことで、過大投資を避けつつZEB水準に近づける考え方が中立的に評価できます。"},{"label":"投資回収と耐用年数のバランス","detail":"施策ごとに初期投資と回収年数、機器の耐用年数が異なります。短期で回収する運用改善と、長期で効く外皮・熱源更新を組み合わせ、補助金の有無も含めて全体の経済性を判断することが重要です。単年の削減額だけで評価しない姿勢が求められます。"},{"label":"共用部と専有部の責任分担","detail":"省エネ効果は管理主体によって帰属が変わります。共用部は施設側、専有部はテナント側が主体となるため、賃貸借契約や共益費の枠組みを踏まえて費用と効果の分担を整理しないと、施策が進まない場合があります。協調の枠組み設計が論点です。"},{"label":"快適性・集客との両立","detail":"商業施設では照度・温熱環境が来店者の快適性や売上に影響します。過度な節電は集客に逆効果となる恐れがあるため、品質を維持しながら無駄を削るという視点で施策を選定し、効果検証でも快適性指標を併せて確認することが望まれます。"},{"label":"制度・補助金の前提確認","detail":"ZEBの定義区分や補助制度は更新されるため、最新の要件を一次情報で確認することが前提です。採択事例の数値や条件は当時のものであり、自社にそのまま当てはまるとは限りません。制度を正式名称で正確に把握し、専門家の助言も活用すべきです。"}];
const cautions = [{"label":"削減率は条件依存である","detail":"同じ施策でも施設の業態構成や既存設備の状態によって削減率は大きく変わります。本記事の数値は条件を仮定した代表シナリオの目安であり、自社で同じ効果が得られると保証するものではありません。実数値は契約条件・使用実態により異なります。"},{"label":"ZEB ReadyとフルZEBの違い","detail":"ZEB Readyは省エネで基準比50%以上を達成した水準で、再エネによる正味ゼロを意味するフルZEBとは異なります。大型商業施設は床面積に対して屋上面積が限られ太陽光容量が制約されるため、Nearly ZEBやZEB Orientedを現実的な目標とする場合があります。"},{"label":"テナント協調なしには進まない","detail":"専有部の使用は施設側だけでは制御できません。テナントの理解と協力がないと館全体の削減は頭打ちになります。照明・空調の運用ルールやデータ共有の枠組みを丁寧に設計し、双方にメリットのある形にすることが成功の前提となります。"},{"label":"投資の過大化リスク","detail":"補助金ありきで過大な設備を導入すると、補助終了後に維持費が重荷になる恐れがあります。省エネで負荷を下げてから容量を決める、回収年数を冷静に見積もるなど、長期の経済性を踏まえた判断が必要です。流行や認証取得自体を目的化しない姿勢が大切です。"},{"label":"断定的な金額表現への誤解","detail":"公開事例の金額をそのまま自社に当てはめる誤解が起きやすい点に注意が必要です。本記事は実額を断定せず幅のある目安で示しています。精密な試算は自社の使用実態・契約条件に基づき、見積や専門家の診断を通じて行うべきものです。"}];
const checklist = ["過去の電力使用量とデマンド推移を月別に整理する","共用部と専有部の計量・課金構造を把握する","夏冬のピーク発生時間帯と要因を特定する","照明の種類・台数・点灯時間を棚卸しする","熱源・空調機の効率と経年状況を確認する","外皮(窓・断熱)の遮熱断熱性能を点検する","BEMS導入によるデータ統合の可否を検討する","屋上・駐車場の太陽光設置可能面積を試算する","目指すZEB水準(Ready等)を明確に設定する","施策ごとの投資額と回収年数を比較評価する","活用可能な補助金の要件と公募時期を確認する","テナント協調の枠組みと効果検証方法を決める"];
const simulatorCtaBullets = ["契約区分と使用量から料金上昇リスクの目安を確認できる","デマンドや基本料金の構造を踏まえた現状把握に役立つ","ZEB化など省エネ施策を検討する前提データの整理に使える","代表シナリオと自社条件の差を意識した検討の出発点になる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"本記事は架空企業の代表シナリオであり、実在企業の実績ではありません。Before/Afterや削減率は、経産省・資源エネルギー庁の資料、SIIの採択事例集、業界統計から再構成した代表レンジです(2025年10月時点)。精密な金額は断定せず幅のある目安で示しており、実数値は契約条件・使用実態により異なります。自社の正確な試算は見積や専門家の診断を通じて行ってください。"},{"question":"特定の電力会社や契約形態を推奨しているのですか。","answer":"いいえ。当社団法人は中立・非営利の立場であり、特定の電力会社・契約形態・事業者を推奨するものではありません。本記事はZEB化という省エネ・創エネの考え方を整理する目的のもので、優劣の評価や勧誘は行いません。施策や事業者の選定は、複数の見積比較と一次情報の確認を通じて、自社の条件に即して判断していただくことを前提としています。"},{"question":"ZEBとZEB Readyの違いは何ですか。","answer":"ZEBは省エネと再エネで正味の一次エネルギー消費量を実質ゼロにする建物を指します。ZEB Readyは再エネを除いた省エネ単独で基準比50%以上の削減を達成した水準で、フルZEBの前段階に位置づけられます。さらに再エネを加味して75%以上ならNearly ZEB、大規模建物向けにはZEB Orientedの区分があります。最新の定義・評価方法は一次情報で確認してください。"},{"question":"大型商業施設で最も効果が大きい施策はどれですか。","answer":"施設により異なりますが、一般に消費量の大きい空調と照明の更新が効果の中心になりやすいです。LED化は照明消費と発熱の双方を減らし空調負荷も下げます。高効率空調と外皮対策は最大消費源への本丸施策です。これらをBEMSで見える化し運用最適化を重ねることで効果が積み上がります。優先順位は省エネ診断で投資対効果を評価して決めるのが現実的です。"},{"question":"共用部と専有部で省エネの進め方は変わりますか。","answer":"変わります。共用部は施設側が直接制御できるため照明・空調・昇降機の更新と運用最適化を進めやすいです。一方、専有部はテナントが使用主体のため、賃貸借契約や共益費の枠組みを踏まえた協調が必要になります。データ共有や運用ルールの整備、双方にメリットのある仕組み作りが進捗を左右します。館全体の削減にはテナントとの連携が欠かせません。"},{"question":"自家消費型太陽光は商業施設に向いていますか。","answer":"日中に空調・照明の負荷が大きい商業施設は、発電時間帯と消費時間帯が重なりやすく自家消費率を高めやすい点で相性が良いといえます。屋上や立体駐車場上部の活用が前提です。ただし床面積に対し設置可能面積が限られ容量に制約が出る場合があります。省エネで消費を絞ったうえで創エネを積み上げる順序が、費用対効果の面で有利になりやすいと考えられます。"},{"question":"ZEB化に使える補助金はありますか。","answer":"SII(環境共創イニシアチブ)が運用するZEB関連の補助制度などが代表的です。対象要件・補助率・公募時期は年度ごとに更新されるため、最新の公募要領を一次情報で確認することが前提となります。補助金ありきで過大な設備を導入すると補助終了後の維持費が負担になる恐れもあるため、長期の経済性を踏まえて活用を検討してください。制度名は正式名称で正確に把握しましょう。"},{"question":"投資回収はどのくらいで見込めますか。","answer":"施策・施設条件・補助金の有無で大きく異なるため、一律の回収年数は示せません。運用改善や照明更新は比較的短期で効果が出やすく、外皮や熱源更新は長期で効く傾向があります。本記事は実額や回収年数を断定せず、削減率の目安で示しています。正確な回収見込みは、自社の使用実態と複数見積に基づき個別に試算することをおすすめします。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/shopping-mall-electricity-cost-review","title":"ショッピングモールの電気代見直し","description":"共用部の電力構造。"},{"href":"/department-store-electricity-cost-review","title":"百貨店の電気代見直し","description":"空調・照明の比重。"},{"href":"/subsidy-retail-commerce-strategy","title":"小売・商業の補助金活用戦略","description":"ZEB投資の補助金活用。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-battery-solar-equipment","title":"蓄電池・太陽光設備の補助金","description":"自家消費設備の支援制度。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/self-consumption-solar-cost-benefit","title":"自家消費太陽光の費用対効果","description":"自家消費の経済性。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-warehouse-auto-rooftop-pv","title":"自動倉庫×屋根太陽光の事例","description":"自家消費の比較ケース。"},{"href":"/case-study-retail-multistore-bulk-contract","title":"小売多店舗×一括契約の事例","description":"商業の契約最適化比較。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyShoppingCenterZebPage() {
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
