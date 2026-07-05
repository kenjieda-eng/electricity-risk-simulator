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

const pageTitle = "私立学校法人×複数キャンパスで電気代を削減した事例｜拠点一括契約・デマンド管理・空調/LED更新（代表シナリオ）";
const pageDescription = "空調・照明を主体に長期休暇や時間帯で負荷が変動し、キャンパス/校舎が拠点分散している私立学校法人が、複数拠点の契約一括見直し(スケールメリット)・デマンド管理/監視・空調/LED更新・BEMS・運用改善で電気代を最適化した代表シナリオを、業界統計・公開事例から再構成して整理します。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-private-school-multi-campus";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["私立学校 電気代 削減 事例","複数キャンパス 一括契約","学校法人 デマンド管理","学校 空調 LED 更新","学校 電気料金 見直し"],
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

const h1Text = "私立学校法人×複数キャンパス：拠点一括契約・デマンド管理・空調/LED更新で電気代を抑えた代表事例";
const breadcrumbTitle = "私立学校法人×複数キャンパスの事例";
const leadText = "本記事は実在の学校法人ではなく、業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。教室・体育館・研究棟の空調と照明を主体に、長期休暇や時間帯・季節で負荷が大きく変動し、複数のキャンパス・校舎に拠点が分散している私立学校法人が、複数拠点の契約一括見直し(スケールメリット)・デマンド管理/監視・空調/LED更新・BEMS・運用改善によって電気代の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は契約条件・拠点構成・稼働実態により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社(学校法人)が今回の複数キャンパスの代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、空調・照明・情報機器のどこに削減余地がありそうかの当たりを付けられます。学校の電気代見直しの全体像と併せて、代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "拠点一括契約・デマンド管理・空調/LED更新の検討は、まず自校の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(省エネ・設備更新)と単価の最適化(拠点一括の契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自校の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["私立学校法人で電気代が重くなる理由(空調・照明主体／長期休暇・時間帯・季節で動く負荷／拠点分散)の構造","複数拠点の契約を一括で見直すスケールメリットと、拠点横断で交渉するときの前提条件","デマンド(契約電力)の管理・監視でピークを抑え、基本料金を下げる考え方の目安","空調更新・LED化・BEMS導入・運用改善を組み合わせた投資回収(ROI)の見立てと注意点","自校が拠点一括見直し・省エネ設備投資に向いているかを見極める観点と再現用チェックリスト"];

const premise = [{"label":"業種特性（空調・照明が電力の主役／時間帯・季節で負荷が動く）","detail":"私立学校法人の電力消費は、教室・体育館・特別教室・研究棟の空調と照明が中心で、そこに情報機器・食堂/給食・図書館・実験実習設備などが加わる構造です。冷暖房需要は夏と冬に跳ね上がり、授業のある平日昼間に負荷が集中する一方、夜間・休日・長期休暇は大きく下がるという時間帯・季節の変動が顕著です。こうした負荷の山谷を捉えることが、契約電力(デマンド)の適正化と空調/LED更新の効果試算の出発点になります。本記事は業界統計・公開事例から再構成した代表シナリオであり、特定の学校の実データではありません。"},{"label":"規模（複数キャンパス・拠点分散／高圧と低圧が混在）","detail":"中規模以上の学校法人は、本部キャンパスに加えて第二キャンパス・附属校・研究棟・寮などに拠点が分散し、規模の大きい建物は高圧受電、小規模施設は低圧というように契約区分が混在するのが一般的です。拠点ごとに受変電設備や契約が独立しているため、法人全体の使用量は大きいのに、調達や運用は縦割りで最適化されていないことが多い規模帯です。拠点をまたいで需要を束ねられるかどうかが、スケールメリットを引き出せるかの分かれ目になります。"},{"label":"契約区分（基本料金＋電力量料金＋調整費が拠点ごとに分散）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成され、これが拠点ごとに個別契約として積み上がります。空調・照明主体の負荷は使用量(kWh)が大きく、電力量料金の比率が高い一方、夏冬のピークで契約電力が押し上げられると基本料金も重くなります。拠点分散で契約がバラバラだと、法人全体で見たときの割高・重複が見えにくいのが構造的な課題です。"},{"label":"稼働特性（授業期・長期休暇・行事で負荷が大きく変わる）","detail":"学校は年間を通じて稼働が一定ではなく、授業期は平日昼間に負荷が集中し、夏休み・冬休み・春休みの長期休暇には大きく需要が落ちます。入試・行事・部活動・オープンキャンパス・公開講座などで一時的に負荷が跳ねる日もあり、需要の山谷が読みにくいのが特徴です。この稼働カレンダーを踏まえないと、契約電力(デマンド)を過大に設定して基本料金を払い過ぎる、あるいはピーク時に想定を超えるといった過不足が生じます。"},{"label":"コスト構造（拠点分散で管理が縦割り・スケールメリット未活用）","detail":"学校法人のエネルギーコストは、拠点ごとの電気・ガス・灯油などが各キャンパスの庶務や施設担当に分散して管理され、法人本部で横断的に把握できていないことが少なくありません。結果として、まとめれば効く交渉力や共同調達のスケールメリットを活かせず、拠点間で単価やデマンド管理の巧拙にばらつきが出ます。まず法人全体のエネルギーフローを俯瞰することが、拠点一括見直し・省エネ投資の判断の出発点になります。"}];

const beforeState = [{"label":"拠点ごとにバラバラの契約でスケールメリットを逃していた","detail":"各キャンパス・附属校がそれぞれ個別に電力契約を結び、契約時期も条件もバラバラで、法人全体としての交渉力を活かせていませんでした。まとめて需要を束ねれば引き出せたはずの条件を、拠点分散のまま取りこぼしている状態です。契約更新のタイミングも拠点ごとに異なり、法人本部が全体像を把握して一括で見直す仕組みがなく、横断的なスケールメリットの機会を逃していました。これは複数キャンパスを持つ学校法人に共通して見られる論点です。"},{"label":"デマンド(契約電力)管理が甘く夏冬ピークで基本料金が高止まり","detail":"契約電力は過去のピーク需要で決まりますが、デマンドの監視や制御の仕組みがなく、夏冬の冷暖房ピークや行事日の一時的な跳ね上がりで契約電力が押し上げられ、基本料金が高止まりしていました。ピークの発生要因(空調の一斉立ち上げ等)を把握できておらず、少しの運用改善で避けられるピークにも気づけていない状態です。基本料金は使わなくても毎月かかるため、デマンド管理の甘さがそのまま固定費の重さに直結していました。"},{"label":"空調・照明設備の経年化と非効率が残っていた","detail":"校舎の空調が古い個別エアコンや効率の低い熱源のまま使われ、照明も蛍光灯や水銀灯が残ってLED化が進んでいない拠点がありました。稼働時間が長い共用部・体育館・廊下ほど非効率の積み上がりが大きく、更新すれば削減余地が見込める状態です。ただし更新には投資が必要で、補助金・税制の活用や回収年数の見立てが伴わないと踏み切りにくく、拠点ごとにばらつきを抱えたまま先送りされていました。"},{"label":"エネルギーの見える化が乏しく属人運用だった","detail":"法人全体の電気使用量は請求書で把握できても、拠点別・用途別(空調・照明・情報機器)の内訳や時間帯別の使われ方がリアルタイムに見えず、改善は各拠点の担当者の経験に依存していました。BEMS(ビルエネルギー管理システム)やデマンド監視が未整備で、待機電力や消し忘れ・過剰冷暖房に気づきにくく、デマンド抑制や設備更新の優先順位を数字で語れない状態でした。見える化の欠如が、拠点横断の最適化を妨げる根っこになっていました。"}];

const approaches = [{"name":"複数拠点の契約一括見直し（スケールメリットの追求）","role":"拠点分散の契約を法人全体で束ね単価・基本料金を最適化","detail":"各キャンパス・附属校でバラバラだった電力契約を法人本部が棚卸しし、契約区分・契約電力・使用実態・更新時期を一覧化したうえで、拠点をまたいで需要を束ねる一括見直しを進めます。法人全体の需要規模を背景に条件を比較検討することで、拠点単独では引き出しにくい条件を検討できる余地が生まれます。あわせて各拠点の契約電力が実態に対して過大でないかを点検し、基本料金の適正化も図ります。これは特定の電力会社・契約形態を推奨するものではなく、複数の選択肢を中立的に比較する前提の取り組みです。"},{"name":"デマンド管理・監視（ピークカットで基本料金を抑制）","role":"契約電力を決めるピーク需要を見える化し抑える","detail":"デマンド監視装置やBEMSで30分ごとの需要を可視化し、夏冬の冷暖房ピークや行事日の跳ね上がりを事前に検知します。空調の一斉立ち上げをずらす、外気温に応じて設定を最適化する、警報閾値を超えそうな時に一部機器を制御するといった運用で、契約電力を押し上げるピークを抑えます。契約電力は過去ピークで決まるため、ピークを一度抑えれば基本料金の低減が継続的に効きます。拠点ごとの稼働カレンダーに合わせた管理が肝になります。"},{"name":"空調更新・LED化（省エネ設備投資）","role":"消費の主役である空調・照明を源流から効率化","detail":"経年化した空調を高効率機(高効率ヒートポンプ・適正容量の熱源)へ更新し、蛍光灯・水銀灯をLED照明へ切り替えます。稼働時間の長い体育館・廊下・共用部・実験室から着手すると削減量が積み上がりやすく、人感センサーやスケジュール制御を併用すると消し忘れ・過剰運転の無駄も抑えられます。空調・照明は学校の電力消費の中心のため、設備更新は購入電力量(kWh)の削減に直結します。補助金・税制の活用で回収年数を短縮できる場合があります。"},{"name":"BEMS導入・運用改善（見える化で継続的に底上げ）","role":"投資効果を見える化し縦割りを解消して継続改善","detail":"BEMS(ビルエネルギー管理システム)で拠点別・用途別・時間帯別の消費を可視化し、法人本部が横断的に比較できる基盤を整えます。拠点間でベンチマークすると、同じ規模でも運用の巧拙による差が見え、改善の優先順位を数字で示せます。設定温度の適正化・不在時の消灯/停止・長期休暇時の休止運転といった運用改善は投資が小さく即効性があり、設備更新や契約見直しの効果検証(PDCA)の土台にもなります。"}];

const caseScenarios = [{"title":"① 中規模私立(2キャンパス)：一括契約見直し＋空調更新","before":"本部と第二キャンパスで契約がバラバラ、経年空調が残り夏冬のピークで基本料金が高止まりしていた代表シナリオを目安に想定します。実在企業ではありません。","after":"2キャンパスの契約を法人全体で束ねて見直し、契約電力の適正化と高効率空調への更新を組み合わせた代表シナリオを目安とします。","result":"年間 ▲160万円 → 5年累計 ▲160万円 × 5年 ＝ ▲800万円（電卓検算：160×5＝800）。金額は業界統計・公開事例から再構成した代表値の目安で、実額は契約条件・拠点構成・稼働実態により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"② 大学法人(複数キャンパス)：デマンド管理＋高圧一括","before":"複数キャンパスが高圧で個別受電し、デマンド監視がなく行事や冷暖房ピークで契約電力が押し上げられていた代表シナリオを想定します。","after":"デマンド監視・ピークカット運用を導入し、複数キャンパスの高圧契約を法人全体で一括見直しした代表シナリオを目安とします。","result":"年間 ▲300万円 → 5年累計 ▲300万円 × 5年 ＝ ▲1,500万円（電卓検算：300×5＝1,500）。使用量が大きい大学法人ほどデマンド管理と一括見直しの相乗効果が出やすい傾向ですが、効果は稼働実態により幅があります。数値は代表シナリオの目安です。"},{"title":"③ 小規模校：LED・空調更新中心","before":"単一〜少数拠点で照明のLED化が進まず、経年空調が残って省エネ余地が手つかずだった代表シナリオを想定します。","after":"稼働時間の長い共用部・体育館からLED化と高効率空調更新を進め、運用改善(設定温度・消灯)を併せた代表シナリオを目安とします。","result":"年間 ▲90万円 → 5年累計 ▲90万円 × 5年 ＝ ▲450万円（電卓検算：90×5＝450）。投資回収は補助金・税制の活用有無で変わります。数値は代表シナリオの目安であり、実在の学校法人の実額ではありません。"}];

const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額は、特定の学校法人の実績ではなく、経産省・資源エネルギー庁の統計や公的機関の公開事例、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な実数の主張は避け、代表値・幅で表現しています。実際の効果や金額は契約条件・拠点構成・空調/照明設備の状態・稼働カレンダーにより異なります。自校の検針票と使用実態に基づく試算が前提であり、本記事の数値をそのまま当てはめられるものではありません。"},{"label":"削減額(▲X万円)と5年累計の考え方","detail":"各代表シナリオの効果は「年間 ▲X万円 → 5年累計 ▲X万円 × 5年 ＝ ▲Y万円」という単純な積み上げで示しています(①160×5＝800、②300×5＝1,500、③90×5＝450)。これは効果の規模感を掴むための代表シナリオの電卓検算であり、単価改定・稼働変動・設備劣化・料金水準の変化を織り込んだ精緻な将来予測ではありません。実際には年ごとに変動するため、幅を持って捉え、複数のシナリオで感度を確認することをおすすめします。"},{"label":"金額表現の扱い（断定を避ける方針）","detail":"学校法人は拠点が複数あり使用量も大きいため、わずかな単価・デマンドの改善でも年間で相応の金額になり得ますが、本記事では特定校の精密な金額を断定しません。代表値の目安として示し、電力単価・燃料費調整・稼働の変動で結果が動く点を併記して、断定を避ける方針を一貫させています。金額はあくまで規模感の目安として捉えてください。"},{"label":"制度・規格・単価の名称（正式名称と最新確認）","detail":"本記事で参照する制度・規格は正式名称を用います。SII(環境共創イニシアチブ)の省エネ補助金、ZEB(ネット・ゼロ・エネルギー・ビル)関連支援、BEMS/FEMS導入支援などはいずれも公的に定められた枠組みで、対象・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。なお使用量に連動する賦課金として、2026年度の再エネ賦課金は4.18円/kWhです。採択や適用を前提にせず、一次情報の確認が前提となります。"}];

const process = [{"label":"データ収集・拠点横断の棚卸し","detail":"全キャンパス・附属校の検針票(契約電力・使用量・力率)を直近1年分そろえ、契約区分・契約電力・更新時期・単価を一覧化します。あわせてデマンド記録や、可能なら30分値を集め、拠点別・時間帯別・季節別の使われ方を把握します。まず法人本部が全体像を俯瞰することが、拠点一括見直しとデマンド管理・設備更新の優先順位づけの出発点です。縦割りで分散していた情報を一枚に集約する工程が、代表シナリオの再現の起点になります。"},{"label":"分析・診断とベンチマーク","detail":"拠点間で単位面積あたりや生徒/学生あたりの使用量をベンチマークし、同規模でも差が出ている拠点や、契約電力が実態に対して過大な拠点を洗い出します。省エネ診断やエネルギー監査を活用し、空調・照明の更新余地とデマンド抑制余地を切り分けます。回収の早い運用改善・LED化と、投資が大きい空調更新・BEMS導入を区別し、補助金・税制の適用可能性を含めた投資回収年数(ROI)の目安を試算します。"},{"label":"一括発注・相見積・補助金/税制の検討","detail":"契約見直しは法人全体の需要を背景に複数の選択肢を中立的に比較し、拠点をまたいだ一括での条件を検討します。設備更新は複数社から相見積を取り、機器仕様・保証・保守費・工事時期(長期休暇中の施工等)まで含めたライフサイクルコストで比較します。SIIの省エネ補助金・ZEB関連支援・BEMS/FEMS導入支援などの要件と公募スケジュールを確認し、必要な省エネ効果の根拠資料を準備します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は理事会・法人本部と施設現場が共有できる指標(削減額・回収年数・CO2削減量)で行い、授業に影響しない長期休暇に合わせて工事を計画します。導入後はBEMS・デマンド監視で拠点別の実績をモニタリングし、想定との差異を検証します。設定温度の適正化や休止運転など運用改善のPDCAを回して継続的に底上げし、代表シナリオで示した効果に近づけていく体制を整えます。"}];

const viewpoints = [{"label":"量(kWh)・契約電力・単価を分けて考える","detail":"空調更新・LED化・運用改善は使用量(kWh)を減らす取り組み、デマンド管理は契約電力(基本料金)を減らす取り組み、拠点一括の契約見直しは単価を最適化する取り組みです。学校法人は空調・照明主体で使用量が大きいため量の削減効果が大きい一方、夏冬ピークで押し上がる契約電力の抑制も無視できません。三つの要素を切り分けて評価すると、どこに投資と労力を割くべきかの判断がしやすくなります。"},{"label":"スケールメリットは需要を束ねて初めて効く","detail":"複数キャンパスの強みは、法人全体で需要を束ねられる点にあります。ただし拠点ごとに契約時期・区分・受変電がバラバラのままでは束ねきれず、スケールメリットは絵に描いた餅になります。契約情報を一元化し、更新時期をそろえ、法人本部が横断で交渉できる体制を整えることが前提です。束ねること自体が目的化しないよう、拠点ごとの実態に即した最適解を中立的に比較する姿勢が重要です。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"空調更新・LED化・BEMS導入は初期投資が必要なため、想定削減額・保守費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。長期休暇に施工できる学校特有の事情も工程・費用に効きます。単年度の削減額だけでなく、5年・10年の累計で捉える視点が堅実です。"},{"label":"拠点横断のガバナンス（縦割りの解消）","detail":"削減が続く学校法人は、エネルギー管理を各拠点任せにせず、法人本部が横断的に数字を握って比較・改善する仕組みを持っています。BEMSで拠点をベンチマークし、良い運用を水平展開することで、属人化や拠点間のばらつきを抑えられます。設備投資や契約見直しも、法人全体の方針として意思決定するほうがスケールメリットと一貫性を確保しやすくなります。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の電力会社や設備メーカーの提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者の省エネ診断を併用し、自校の検針票・稼働データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は特定の電力会社・契約形態を推奨するものではなく、比較検討の材料を整理するためのものです。"}];

const cautions = [{"label":"一括契約が常に最適とは限らない","detail":"複数拠点をまとめれば必ず有利になるとは限りません。拠点ごとの契約区分・立地・需要特性によっては、束ねるより個別最適のほうが良い場合もあります。束ねることを目的化せず、法人全体と拠点個別の双方で比較し、条件・リスク・切替の手間を踏まえて判断することが大切です。本記事は業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。"},{"label":"デマンド管理は運用の継続が前提","detail":"デマンド監視装置やBEMSを入れても、ピーク時に運用で対応する体制がなければ契約電力は下がりません。空調の立ち上げ調整や閾値超過時の制御を、現場が無理なく継続できる形に落とし込むことが重要です。よくある誤解として「装置を入れれば自動で下がる」と捉えがちですが、実際には運用ルールと担当の定着があって初めて基本料金の低減が続きます。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金・ZEB関連支援・BEMS/FEMS導入支援などは、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。学校法人向けの要件や申請主体の扱いも事前に確認が必要です。"},{"label":"見える化だけでは削減しない","detail":"BEMSやデマンド監視を導入しても、可視化したデータを改善行動につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、拠点をベンチマークし、設定・運用・投資を最適化して効果を検証するPDCAを回して初めて成果が出ます。見える化は手段であって目的ではない、という前提を関係者で共有することが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態を推奨するものではありません。実在の学校法人の事例や優劣比較ではなく、固有の施設名・契約名も使用していません。投資判断は専門家の診断と自校のデータに基づき、複数の選択肢を比較したうえで行ってください。数値はすべて目安(代表値)です。"}];

const checklist = ["全キャンパス・附属校の検針票を直近1年分そろえて一覧化する","拠点ごとの契約区分・契約電力・単価・更新時期を棚卸しする","高圧拠点のデマンド(30分値)記録を集めてピークの発生日を確認する","夏冬・行事・長期休暇の稼働カレンダーと負荷の山谷を整理する","拠点別・用途別(空調・照明・情報機器)の消費内訳を推計する","空調の経年・熱源効率と更新余地を拠点ごとに点検する","照明のLED化状況を共用部・体育館・廊下から確認する","契約電力が実態に対して過大でないか各拠点で点検する","力率と力率割引の適用状況を契約書で確認する","BEMS・デマンド監視の導入状況と拠点横断の把握体制を確認する","SII省エネ補助金・ZEB・BEMS/FEMS支援の最新要件を確認する","投資回収年数とCO2削減量を施策ごと・拠点ごとに試算する"];

const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を法人全体で試算できる","拠点一括の契約見直しと省エネ設備投資の優先度を考える材料になる","空調・照明主体の高圧/低圧の高騰リスクを定量的に把握できる","中立的な立場で自校データに基づき判断できる"];

const faqItems = [{"question":"この事例は実在の学校法人ですか。数値は正確ですか。","answer":"いいえ。本記事は実在の学校法人の事例ではなく、業界統計や公的機関の公開事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです(2026年度時点)。固有の学校名・施設名は使用していません。Before/Afterや削減額は精密な実績値ではなく、代表値の目安として示しています。実際の効果や金額は契約条件・拠点構成・空調/照明設備の状態・稼働カレンダーにより異なるため、自校の検針票に基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・契約形態を推奨することはありません。本記事は拠点一括見直し・デマンド管理・空調/LED更新の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資や契約の判断は複数の選択肢を比較し、第三者の省エネ診断や自校のデータに基づいて行うことをおすすめします。"},{"question":"複数キャンパスの契約を一括で見直すと必ず安くなりますか。","answer":"必ず安くなるとは限りません。法人全体で需要を束ねるとスケールメリットが働きやすい一方、拠点ごとの契約区分・立地・需要特性によっては個別最適のほうが良い場合もあります。束ねること自体を目的化せず、法人全体と拠点個別の双方で条件を比較し、切替の手間やリスクも含めて中立的に判断することが大切です。まず契約情報の一元化から始めるのが現実的です。"},{"question":"デマンド管理で基本料金はどのくらい下げられますか。","answer":"効果は元のピークの発生要因や稼働特性によって幅があり、一律にはいえません。契約電力は過去のピーク需要で決まるため、夏冬の冷暖房一斉立ち上げや行事日のピークを運用で抑えられれば、基本料金の継続的な低減につながります。ただしデマンド監視装置やBEMSを入れるだけでは下がらず、現場が無理なく運用を続けられる体制づくりが前提です。数値は代表シナリオの目安としてご覧ください。"},{"question":"空調更新やLED化はどこから着手するのが効率的ですか。","answer":"一般には、稼働時間が長く消費の大きい共用部・体育館・廊下・実験室などから着手すると削減量が積み上がりやすい傾向です。照明のLED化は比較的回収が早く、経年空調の高効率機への更新は投資が大きいぶん補助金・税制の活用や回収年数の見立てが重要になります。長期休暇中に施工できる学校特有の事情も工程計画に効きます。拠点ごとの現状把握に基づいて優先順位を決めるのが堅実です。"},{"question":"契約見直しと設備投資はどちらを先にすべきですか。","answer":"一般には、投資が小さく即効性のある運用改善(設定温度の適正化・消灯・休止運転)と契約情報の一元化・契約電力の点検から着手し、その過程で使用実態のデータを蓄積したうえで、投資の大きい空調更新やBEMS導入の可否を判断する順序が堅実です。どちらを優先するかは拠点構成・設備の経年・デマンドの状況によって変わります。まず全拠点の棚卸しから始めることをおすすめします。"},{"question":"使える補助金・税制はありますか。","answer":"SII(環境共創イニシアチブ)の省エネ補助金、ZEB(ネット・ゼロ・エネルギー・ビル)関連支援、BEMS/FEMS導入支援など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間・申請主体の扱いなどの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"再エネ賦課金は購入電力量(kWh)に対して課されるため、空調更新・LED化・運用改善で使用量そのものを減らせば、賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。2026年度の再エネ賦課金は4.18円/kWhで、使用量の大きい学校法人ほど量の削減が負担軽減に寄与します。ただし単価そのものは制度で決まるため、量の削減と契約の最適化を併せて総合的に評価することが重要です。"}];

const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成・再エネ賦課金）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・補助制度）","url":"https://www.meti.go.jp/"},{"name":"環境省（脱炭素・省エネ・ZEB/再エネ）","url":"https://www.env.go.jp/"}];

const relatedLinks = [{"href":"/school-electricity-cost-review","title":"学校の電気代見直し","description":"学校法人の電力構造と削減の考え方。"},{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/university-electricity-cost-review","title":"大学の電気代見直し","description":"研究棟・複数キャンパスの料金構造。"},{"href":"/case-study-university-large-campus-management","title":"大学×大規模キャンパス管理の事例","description":"複数拠点の一括管理ケース。"},{"href":"/case-study-retail-multistore-bulk-contract","title":"小売多店舗×一括契約の事例","description":"拠点分散のスケールメリット活用。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"業種別の月額削減・施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金の基礎用語。"},{"href":"/basic-charge-explained","title":"基本料金の仕組み解説","description":"契約電力と基本料金の決まり方。"},{"href":"/high-voltage-electricity-bill-guide","title":"高圧電気料金ガイド","description":"高圧受電の料金構造。"},{"href":"/subsidy-bemms-fems","title":"BEMS/FEMS導入と補助金","description":"エネマネ機器の支援制度。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明・空調更新の効果の目安。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/municipality-bundled-procurement","title":"自治体・法人の一括調達","description":"需要を束ねる調達の基礎。"},{"href":"/subsidy-zeb-zeh-building","title":"ZEB/ZEH建築物の補助金","description":"省エネ建築の支援制度。"},{"href":"/office-building-peak-cut","title":"オフィスビルのピークカット","description":"デマンド抑制の実務。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/articles/by-industry","title":"業種別の記事一覧","description":"業種ごとの電気代解説。"}];

const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自校の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyPrivateSchoolMultiCampusPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-06-16"
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
          <AuthorBadge publishedAt="2026-06-16" updatedAt="2026-06-16" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・拠点構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態を推奨するものではありません。{" "}
            <Link href="/school-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">学校の電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            ・
            <Link href="/articles/case-studies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">事例カテゴリ一覧</Link>
            もご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例(代表シナリオ)の業種特性・規模・契約区分・稼働特性・コスト構造の前提を整理します。自校の条件と照らして読み進めてください。実在の学校法人ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代の構造上の課題を整理します。これらは複数キャンパスを持つ学校法人で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケース(代表シナリオ)で採用した削減手法を整理します。単一施策ではなく、拠点一括見直しを軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模の異なる3つの代表シナリオで、Before/Afterと効果の考え方を整理します。記載の削減額は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・拠点構成・稼働実態により異なります。実在の学校法人の事例ではなく、特定の電力会社・契約形態を推奨するものではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本記事の数値は、特定校の実績ではなく、公開された業界統計・公的データから再構成した代表レンジ(代表シナリオ)です。前提を以下に明記します。</p>
            <div className="mt-4 space-y-3">
              {dataNotes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・環境省・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・拠点構成・使用実態により異なります。本記事は特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">実行プロセスと体制</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">同様の取り組み(代表シナリオ)を自校で進める際の、データ収集から効果検証までの実行プロセスを整理します。</p>
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
              {" "}と、{" "}
              <Link href="/school-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">学校の電気代見直し</Link>
              {" "}の解説で、自校が本ケース(代表シナリオ)に近いかを確認できます。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケース(代表シナリオ)の手法を検討する際に陥りやすい誤解や、事前に確認すべき留意点を整理します。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケース(代表シナリオ)に近い取り組みを自校で進めるための確認項目です。まずは全拠点の現状把握と棚卸しから始めましょう。</p>
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
            <ConsultCta from="private-school-multi-campus" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-06-16" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自校の電気代と削減余地を試算する"
            description="本ケース(代表シナリオ)に近いかどうかは、自校の業種・規模・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="複数キャンパスの電力契約見直し・デマンド管理・省エネ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、学校法人・自治体の電力契約の見直しやデマンド管理・空調/LED更新・BEMS導入の判断材料を整理します。本記事の代表シナリオに近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態を推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
