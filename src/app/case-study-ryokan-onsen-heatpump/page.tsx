import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "旅館・温浴施設×ヒートポンプ給湯で電気代を削減した事例｜大浴場の大量給湯を高効率ヒートポンプ＋蓄熱で最適化（代表シナリオ）";
const pageDescription = "大浴場・客室給湯の熱需要が大きい旅館・温浴施設が、高効率ヒートポンプ給湯と蓄熱・運用最適化で熱コストと電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-ryokan-onsen-heatpump";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["旅館 温浴 ヒートポンプ 事例","温浴施設 給湯 省エネ","旅館 電気代 削減","ヒートポンプ給湯 蓄熱","温浴 投資回収 補助金"],
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

const h1Text = "旅館・温浴施設×ヒートポンプ給湯：大量給湯を高効率化して熱コストと電気代を抑えた代表事例";
const breadcrumbTitle = "旅館・温浴施設×ヒートポンプ給湯の事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。大浴場・客室給湯・厨房といった大量の温水需要を抱える旅館・温浴施設が、高効率ヒートポンプ給湯と蓄熱・運用最適化によって、熱コストと電気代の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は施設規模・給湯量・燃料/電力価格により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社が今回の旅館・温浴施設の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、給湯・空調・厨房のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "ヒートポンプ給湯・省エネ投資の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(高効率化・蓄熱)と単価の最適化(契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["旅館・温浴施設で給湯の熱需要が大きい理由(大浴場・客室・厨房の温水)とコスト構造","高効率ヒートポンプ給湯が重油・ガスボイラの熱コストを電力(高効率な熱供給)に置き換える仕組みと適性条件","蓄熱槽で需要ピークと製造を分離し、運転を平準化する考え方の目安","ヒートポンプ補助・省エネ診断・契約見直しを組み合わせた投資回収(ROI)の見立てと注意点","自社がヒートポンプ給湯・蓄熱に向いているかを見極める観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(給湯の熱需要が中心)","detail":"旅館・温浴施設は、大浴場・客室の給湯、厨房、源泉の加温など、大量の温水需要が熱コストの中心を占めるのが特徴です。入浴は朝夕にピークが立ちやすく、温水を作り・貯めて供給する設計が重要です。空調・照明も無視できませんが、給湯の熱需要が大きいため、熱の作り方(ボイラかヒートポンプか)が電気代・燃料費を大きく左右します。"},{"label":"規模(高圧/低圧・季節と曜日で変動)","detail":"旅館・温浴施設は高圧または低圧で受電し、稼働は季節・曜日・宿泊数で大きく変動します。繁忙期は給湯・空調の需要が同時に高まり、契約電力(デマンド)を押し上げます。給湯をボイラ(燃料)で賄うか電気のヒートポンプで賄うかで、燃料費と電力のバランスが変わるため、両者を一体で捉える視点が前提になります。"},{"label":"契約区分(基本料金+電力量料金+調整費)","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。ヒートポンプ給湯を導入すると給湯分の燃料費が電力に置き換わるため、電力使用量は増えますが燃料費は減ります。時間帯別料金や蓄熱を活用して安い時間帯に沸かせば、単価面のメリットも得られる構造です。"},{"label":"熱需要(給湯ピークが朝夕に集中)","detail":"入浴需要は朝夕に集中し、給湯の熱需要にピークが立ちやすいのが温浴施設の特徴です。ピークに合わせて給湯能力を確保すると設備が過大になりがちですが、蓄熱槽を併用すれば、需要の少ない時間帯に沸かして貯め、ピーク時に供給できます。給湯量の時間帯パターンを把握することが、ヒートポンプ・蓄熱の設計の前提になります。"},{"label":"コスト構造(熱の作り方が支配的)","detail":"旅館・温浴施設のエネルギーコストは、給湯という熱をどう作るかが支配的です。重油・ガスのボイラで作れば燃料費、ヒートポンプで作れば電力に乗ります。燃料価格と電力単価の関係、時間帯別料金の活用可否で有利不利が変わるため、熱の作り方と料金メニューを一体で捉えることが、投資判断の出発点になります。"}];
const beforeState = [{"label":"重油・ガスボイラ中心で熱コストが燃料に偏る","detail":"給湯を重油・ガスのボイラで賄い、熱コストが燃料費に大きく偏っていました。燃料価格の変動を直接受けやすく、価格高騰時に熱コストが膨らむ構造です。ボイラの効率も経年で低下し、配管の保温やドレン管理も後回しで、作る段階・運ぶ段階の双方で熱ロスが生じていました。"},{"label":"給湯ピークに合わせた過大運転と平準化不足","detail":"朝夕の入浴ピークに合わせて給湯を作り続け、需要の少ない時間帯の余力を活かせていませんでした。蓄熱槽が未導入または小容量で、製造と需要を分離できず、ピークに合わせた過大な運転になっていました。時間帯別の料金単価を意識した運転計画もなく、割高な時間帯に沸かす場面もありました。"},{"label":"空調・厨房・照明の旧式化と過剰運転","detail":"客室・浴場・宴会場の空調が旧式で、外気条件や稼働状況に応じた制御がなく、必要以上のエネルギーを消費していました。厨房機器や照明も旧式が残り、無人エリアの点灯や過剰な換気も見られました。給湯ほど比率は大きくないものの、回収の早い領域が手付かずでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"施設全体の電力量や燃料消費は把握できても、給湯・空調・厨房の用途別内訳や時間帯別の給湯量がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。EMSが未整備で、給湯ピークや異常消費を把握しにくく、ヒートポンプ・蓄熱の容量選定に必要な需要データの精緻な把握もできていませんでした。"}];
const approaches = [{"name":"高効率ヒートポンプ給湯への置き換え","role":"給湯の熱コストを高効率な電力供給に転換","detail":"重油・ガスボイラで作っていた給湯の一部または大半を、高効率ヒートポンプ給湯(CO2冷媒等)に置き換えます。ヒートポンプは投入した電力以上の熱を取り出せるため、燃料費を効率の良い電力に転換できます。給湯需要が安定して大きい温浴施設は適性が出やすい一方、必要な給湯温度や外気条件で効率が変わるため、需要と条件の把握が前提です。"},{"name":"蓄熱槽の活用・運転の平準化","role":"需要ピークと製造を分離し運転を最適化","detail":"蓄熱槽を併用し、入浴ピークの少ない時間帯にヒートポンプで温水を作って貯め、朝夕のピーク時に供給します。製造と需要を分離することで、設備容量を抑えつつピークに対応でき、時間帯別料金の安い時間帯に沸かせば単価面のメリットも得られます。給湯量の時間帯パターンに合わせた蓄熱容量の設計が効果を左右します。"},{"name":"ボイラ・配管の効率化と熱ロス対策","role":"残すボイラと給湯系統のロスを削減","detail":"ヒートポンプと併用するボイラは高効率機への更新や運転最適化を行い、給湯配管の保温強化、循環ポンプの見直し、漏れ・滞留の点検で熱ロスを抑えます。源泉加温がある場合は熱交換の効率も見直します。ヒートポンプへの置き換えと併せて、給湯系統全体の熱ロスを減らすことで効果を底上げします。"},{"name":"空調・LED・EMS・運用改善","role":"回収の早い領域と見える化で全体最適化","detail":"客室・浴場・宴会場の空調を高効率機へ更新し、外気冷房や換気量制御を導入、照明をLED化して無人時消灯を自動化します。EMSで給湯・空調・厨房の消費と給湯量を見える化し、ヒートポンプ・蓄熱の運転を最適化します。回収の早い領域と見える化を組み合わせ、施設全体のエネルギーコストを総合的に抑えます。"}];
const caseScenarios = [{"title":"給湯の一部をヒートポンプ化","before":"給湯を重油・ガスボイラ中心で賄い、熱コストが燃料に偏っていた代表シナリオを目安に想定します。","after":"給湯の一部を高効率ヒートポンプに置き換え、燃料費を効率の良い電力に転換しつつ、給湯起因の熱コストを一定程度低減する代表レンジを目安とします。","result":"燃料価格変動への耐性が高まり、電力は増えるが総熱コストの最適化が見込めます。効果は給湯温度・外気条件・価格関係により幅があります。"},{"title":"蓄熱併用でピーク・単価を最適化","before":"給湯ピークに合わせた過大運転で、時間帯別の単価を活かせていなかった代表シナリオを想定します。","after":"蓄熱槽を併用し需要の少ない時間帯に沸かして貯め、ピーク対応と単価最適化を両立する代表レンジを目安とします。","result":"設備容量を抑えつつピークに対応でき、安い時間帯の活用で単価面のメリットも得られます。効果は需要パターンと料金メニューにより異なります。"},{"title":"空調・LED・厨房の高効率化","before":"旧式の空調・厨房・照明が残り、過剰運転だった代表シナリオを想定します。","after":"高効率空調・LED化・換気最適化により、該当領域の消費を概ね二〜四割程度低減する代表レンジを目安とします。","result":"投資回収が比較的短く着手しやすい領域です。給湯より比率は小さめのため総額影響は限定的な傾向です。"},{"title":"全社統合(ヒートポンプ+蓄熱+空調/契約最適化)","before":"給湯・空調・契約がそれぞれ分断され、統合的に最適化されていなかった代表シナリオを想定します。","after":"ヒートポンプ給湯・蓄熱・空調高効率化・契約最適化を組み合わせ、熱コストと電気代を総合的に抑える代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は施設規模・給湯量・給湯温度・燃料/電力価格により異なります。"},{"label":"削減レンジの根拠","detail":"ヒートポンプ給湯・蓄熱・空調高効率化・LED化の効果は、省エネ補助金の採択事例や省エネ診断の一般的な知見を参考にレンジ化しています。必要な給湯温度や外気条件、燃料と電力の価格関係で効果は変わるため、自社では給湯量・温度の実測に基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"旅館・温浴施設は給湯量が大きく、熱の作り方を変えると年間で相応の金額が動き得ますが、本記事では精密な金額の断定は行いません。削減率(%)レンジと幅で示し、燃料価格・電力単価の変動で結果が動く点を併記して、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。ヒートポンプ関連の補助、SII(環境共創イニシアチブ)による省エネ補助金、コージェネレーション関連の補助、EMSなどはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・給湯需要の把握","detail":"電力量・デマンド記録、ボイラ燃料消費に加え、給湯量・給湯温度の時間帯別パターンを集め、用途別(給湯・空調・厨房)に棚卸しします。入浴ピークの立ち方と必要な給湯温度を把握することが、ヒートポンプ・蓄熱の容量選定の出発点です。EMSや簡易計測で見える化し、製造と需要を分離できる余地を見積もります。"},{"label":"分析・診断と適性評価","detail":"第三者の省エネ診断を活用し、給湯需要・温度・外気条件からヒートポンプの適性を評価します。ヒートポンプ給湯・蓄熱・空調高効率化など施策ごとの投資対効果を比較し、回収の早い運用改善・LEDと設備更新を切り分けます。優先順位と概算投資額、補助金適用可能性を含めた投資回収年数(ROI)を試算します。"},{"label":"相見積・補助金/制度・契約の検討","detail":"設備は複数社から相見積を取り、ライフサイクルコストで比較します。ヒートポンプ関連補助やSIIの省エネ補助金の要件・公募スケジュールを確認し、申請に必要な根拠資料を準備します。時間帯別料金など料金メニューの選び直しも併せて検討し、蓄熱と組み合わせた単価最適化の余地を評価します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標(削減率・回収年数・CO2削減量)で行い、稼働への影響が少ない時期に工事を計画します。導入後はEMSで給湯量・電力・燃料の実績をモニタリングし、想定との差異を検証します。蓄熱の運転計画や給湯温度の見直しと組み合わせ、PDCAとして継続的に効率を底上げします。"}];
const viewpoints = [{"label":"熱の作り方(燃料か電力か)を価格関係で判断","detail":"ヒートポンプ給湯は燃料費を効率の良い電力に転換しますが、有利不利は燃料価格と電力単価の関係で変わります。導入時に有利でも価格関係が変われば優位性が薄れる場合があります。複数の価格シナリオで熱の作り方を比較し、価格変動に耐える計画かを見極めることが重要な観点です。"},{"label":"給湯需要と温度がヒートポンプ適性を決める","detail":"ヒートポンプは必要な給湯温度や外気条件で効率が変わります。給湯需要が安定して大きく、必要温度がヒートポンプの得意領域に収まるほど適性が高まります。給湯量・温度の時間帯パターンを実測し、蓄熱の併用余地と併せて適性を見極めることが、導入可否を分ける観点です。"},{"label":"蓄熱で量・単価・ピークを同時に最適化","detail":"蓄熱槽は、需要の少ない時間帯に沸かして貯めることで、設備容量(ピーク)を抑えつつ、時間帯別料金の安い時間帯を活用して単価も下げられます。製造と需要を分離する設計は、量・単価・ピークの三側面に効きます。給湯需要のパターンに合わせた蓄熱容量の設計が効果を左右します。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"ヒートポンプ・蓄熱は、初期投資だけでなく保守費・設備寿命・想定削減額を含めたライフサイクルコストで評価します。補助金で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。燃料・電力価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、施設のデータに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"給湯温度・外気条件で効率が変わる","detail":"ヒートポンプは必要な給湯温度が高すぎたり外気温が低すぎたりすると効率が下がります。本記事の削減レンジは一定の給湯条件を前提とした目安であり、高温給湯が多い施設や寒冷地では効率が想定より低くなることがあります。給湯温度・外気条件の実測に基づいて適性を見極めることが前提です。"},{"label":"燃料価格と電力単価の関係でメリットが変わる","detail":"ヒートポンプ給湯は燃料費を電力に置き換えるため、燃料価格と電力単価の相対関係でメリットが変動します。導入時に有利でも、価格関係が変われば優位性が薄れる場合があります。複数の価格シナリオで感度分析を行い、価格変動に耐える計画かを確認することが大切です。"},{"label":"補助金・制度は要件と期限がある","detail":"ヒートポンプ関連補助やSIIの省エネ補助金は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"見える化だけでは削減しない","detail":"EMSを導入しても、可視化したデータを設備更新や運転・蓄熱の最適化につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、給湯量や需要を見て運転計画を最適化し、効果を検証するPDCAを回して初めて成果が出ます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断は専門家の診断と施設のデータに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["電力量・デマンド記録とボイラ燃料消費を直近1年分そろえる","給湯量・給湯温度の時間帯別パターンを把握する","給湯・空調・厨房の用途別消費を計測または推計する","入浴ピークの立ち方と必要給湯温度を確認する","ヒートポンプ給湯の適性(温度・外気条件)を評価する","蓄熱槽の併用余地と必要容量を試算する","残すボイラの効率と給湯配管の保温・循環を点検する","時間帯別料金など料金メニューの活用余地を確認する","空調・厨房・照明の高効率化・LED化の余地を確認する","ヒートポンプ補助・SII補助金など制度の最新要件を確認する","複数の燃料・電力価格シナリオで感度分析を行う","投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","ヒートポンプ給湯・蓄熱と契約見直しの優先度を考える材料になる","旅館・温浴施設の高騰リスクを定量的に把握できる","中立的な立場で施設データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例集、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです(2026年度時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は施設規模・給湯量・給湯温度・燃料/電力価格により異なるため、施設の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事はヒートポンプ給湯・蓄熱の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や施設データに基づいて行うことをおすすめします。"},{"question":"ヒートポンプ給湯はどんな施設に向いていますか。","answer":"一般に、給湯需要が安定して大きく、必要な給湯温度がヒートポンプの得意領域に収まる施設ほど向いています。大浴場を持つ旅館・温浴施設は給湯需要が大きく適性が出やすい一方、高温給湯が多い場合や寒冷地では効率が下がることがあります。給湯量・温度・外気条件の実測に基づいて適性を見極めることが前提で、導入ありきで進めないことが重要です。"},{"question":"ヒートポンプを入れれば必ず電気代は下がりますか。","answer":"必ずしも電気代が下がるとは限りません。ヒートポンプ給湯は給湯分の燃料費を電力に置き換えるため、電力使用量はむしろ増えますが、燃料費が減ることで総熱コストの最適化を狙う施策です。有利不利は燃料価格と電力単価の関係で変わるため、電気代単体ではなく燃料費を含めた総熱コストで、複数の価格シナリオを用いて判断することが大切です。"},{"question":"蓄熱槽を併用するメリットは何ですか。","answer":"蓄熱槽を併用すると、入浴ピークの少ない時間帯にヒートポンプで温水を作って貯め、朝夕のピーク時に供給できます。これにより設備容量を抑えつつピークに対応でき、時間帯別料金の安い時間帯に沸かせば単価面のメリットも得られます。製造と需要を分離する設計は量・単価・ピークの三側面に効くため、給湯需要のパターンに合わせた蓄熱容量の設計が効果を左右します。"},{"question":"空調や照明の対策も併せて行うべきですか。","answer":"給湯が熱コストの中心ですが、客室・浴場・宴会場の空調や厨房・照明も無視できません。高効率空調への更新、外気冷房・換気量制御、LED化と無人時消灯の自動化は、回収が比較的早い領域です。給湯のヒートポンプ化・蓄熱と併せて空調・照明の高効率化を進めると、施設全体のエネルギーコストを総合的に抑えやすくなります。優先順位は用途別の見える化で判断します。"},{"question":"使える補助金はありますか。","answer":"ヒートポンプ関連の補助やSII(環境共創イニシアチブ)の省エネ補助金など、設備更新を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避け、申請に必要な省エネ効果の根拠資料を早めに準備することをおすすめします。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"ヒートポンプ給湯は給湯分の燃料費を電力に置き換えるため、電力使用量(購入電力量)はむしろ増える一方、燃料費は減ります。再エネ賦課金は購入電力量に対して課されるため、電力使用量が増える分は賦課金相当の負担も増える点に留意が必要です。総熱コストとしては燃料費の削減と電力増加の差し引きで評価し、燃料と電力の双方の価格動向を踏まえて総合的に判断することが重要です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・ヒートポンプ）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"},{"name":"一般財団法人ヒートポンプ・蓄熱センター（HPTCJ）","url":"https://www.hptcj.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/hot-spring-facility-electricity-cost-review","title":"温浴施設の電気代見直し","description":"給湯・浴場の熱需要の構造。"},{"href":"/hotel-electricity-cost-review","title":"ホテルの電気代見直し","description":"宿泊施設の電力・熱構造。"},{"href":"/kyoto-hotel-ryokan-electricity-cost","title":"京都のホテル・旅館の電気料金","description":"旅館×地域クロスの整理。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"給湯・加温の高効率化。"},{"href":"/subsidy-cogeneration-introduction","title":"コージェネ導入と補助金","description":"熱電併給の選択肢。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/bems-fems-ems-overview","title":"BEMS・FEMS・EMS入門","description":"見える化システムの基礎。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/subsidy-roi-payback-calculation","title":"補助金活用時の投資回収計算","description":"補助金込みの回収試算。"},{"href":"/case-study-hotel-resort-cogeneration","title":"リゾートホテル×コージェネの事例","description":"熱需要が大きい施設の事例。"},{"href":"/case-study-welfare-elderly-energy-saving","title":"高齢者施設×省エネ投資の事例","description":"給湯ヒートポンプの別業種ケース。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"省エネ投資の進め方。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyRyokanOnsenHeatpumpPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は施設規模・給湯量・給湯温度・燃料/電力価格により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは多くの旅館・温浴施設で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、ヒートポンプ給湯を軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">施策や領域の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は施設規模・給湯量・価格関係により異なります。実在企業の事例ではありません。</p>
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
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は施設規模・使用実態により異なります。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と給湯需要の取得から始めましょう。</p>
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
            heading="電力契約・省エネ・ヒートポンプ投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・ヒートポンプ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
