import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "鉄鋼・電炉×需給管理で電気代を削減した事例｜特別高圧の大電力負荷をデマンド制御・力率改善・契約最適化（代表シナリオ）";
const pageDescription = "電炉で大電力を使う鉄鋼工場が、デマンド制御・力率改善・操業時間帯の最適化・契約見直しで契約電力と電力量料金を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-steel-electric-furnace-demand";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["鉄鋼 電炉 デマンド 事例","電炉 電気代 削減","特別高圧 力率改善","鉄鋼 需給管理 契約最適化","電炉 ピークカット 投資回収"],
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

const h1Text = "鉄鋼・電炉×需給管理：大電力負荷のデマンド・力率・契約を最適化した代表事例";
const breadcrumbTitle = "鉄鋼・電炉×需給管理の事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。電炉でスクラップを溶解し、電力が圧倒的にコストの中心を占める鉄鋼工場が、デマンド制御・力率改善・操業時間帯の最適化・契約見直しによって、契約電力(基本料金)と電力量料金の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は契約条件・操業実態・市況により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社が今回の鉄鋼・電炉の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、電炉・圧延・付帯設備のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "需給管理・契約最適化の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(省エネ)とピーク・単価の最適化(需給管理・契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["鉄鋼・電炉で電気代が圧倒的に重い理由(溶解の大電力負荷とピークの偏り)の構造","デマンド制御・操業時間帯の最適化が契約電力(基本料金)を下げうる仕組みと注意点","力率改善・電力品質対策が力率割引と設備保護に効く考え方の目安","契約見直し・料金メニュー選択・蓄電池の役割と投資回収(ROI)の見立て","自社が需給管理・契約最適化に向いているかを見極める観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(電炉の大電力・ピークの偏り)","detail":"電炉(電気炉)はスクラップを電気で溶解するため、短時間に極めて大きな電力を消費し、コストの中心が圧倒的に電力に偏るのが鉄鋼電炉の特徴です。溶解中は需要が急峻に立ち上がり、契約電力(デマンド)を押し上げます。熱プロセスというより電力プロセスであるため、コージェネより需給管理・契約最適化の論点が中心になります。"},{"label":"規模(特別高圧・大口需要)","detail":"電炉を持つ鉄鋼工場は特別高圧で受電する大口需要家が中心で、年間消費電力量も契約電力も極めて大きい規模です。受変電設備を自社で保有し、自家用電気工作物として主任技術者の選任や保安規程が必要です。基本料金が契約電力で決まるため、ピークの抑制と力率管理が料金に直結します。"},{"label":"契約区分(基本料金+電力量料金+調整費)","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。電炉は契約電力も使用量も大きいため、基本料金と電力量料金の双方が重く、ピーク抑制と量の効率化の両面が効きます。市場連動メニューの場合は価格変動リスクの管理も論点になります。"},{"label":"負荷パターン(短時間の大電力・休止が混在)","detail":"電炉は溶解バッチごとに大電力を短時間使い、間に休止が入る山谷の大きい負荷パターンになりがちです。ピークの立ち方が契約電力を決めるため、溶解の時間配分やバッチの平準化が基本料金に直結します。圧延・付帯設備の負荷も重なるため、工場全体のデマンドをどう平準化するかが需給管理の中心課題です。"},{"label":"コスト構造(電力が支配的)","detail":"電炉鉄鋼のエネルギーコストは購入電力が支配的で、わずかな単価・契約電力の差が年間で大きな金額になります。電力市況や燃料費調整、料金メニューの選択が総額を大きく左右します。電力を量・ピーク・単価の三側面で捉え、それぞれに打ち手を持つことが、コスト最適化の出発点になります。"}];
const beforeState = [{"label":"デマンドのピークが高く基本料金が膨らむ","detail":"電炉の溶解ピークと圧延・付帯設備の負荷が重なり、瞬間的な需要が契約電力を押し上げていました。デマンド監視はあっても予測・制御まで踏み込めず、ピークの平準化ができていませんでした。契約電力が実態より高めに張り付き、基本料金が膨らんでいた状態です。"},{"label":"力率の変動と電力品質の課題","detail":"電炉は力率が変動しやすく、フリッカ(電圧変動)などの電力品質課題も生じやすい設備です。無効電力の補償が不十分だと力率割引を取り切れず、設備にも負担がかかります。進相コンデンサやSVC(無効電力補償)などの対策が後手に回り、料率面・設備面の双方で損をしていました。"},{"label":"操業時間帯と料金メニューが最適化されていない","detail":"操業の時間帯が料金単価や系統の需給を意識せずに組まれ、割高な時間帯に大電力を集中させていました。料金メニューが操業実態に合っておらず、固定・市場連動の選択や時間帯別料金の活用も検討されていませんでした。市況変動の影響を受けやすい契約のまま放置されていた状態です。"},{"label":"エネルギーの見える化と需給予測が乏しい","detail":"工場全体の電力量は把握できても、設備別・時間帯別の負荷や、デマンドの立ち方の予測がリアルタイムに見えず、需給管理が属人的でした。エネマネ・デマンド予測が未整備で、ピーク発生の予兆をつかめず、契約電力の根拠データづくりにも手間がかかっていました。"}];
const approaches = [{"name":"デマンド制御・操業時間帯の最適化","role":"ピークを平準化し契約電力(基本料金)を低減","detail":"デマンド監視・予測を強化し、電炉の溶解バッチと圧延・付帯設備の負荷が重ならないよう操業を平準化します。割高な時間帯や系統がひっ迫する時間帯を避けて大電力工程を配置し、契約電力の根拠となるピークを下げます。生産計画と連動した需給管理により、基本料金の低減と系統負荷の軽減を両立させます。"},{"name":"力率改善・電力品質対策","role":"力率割引の確保と設備保護を両立","detail":"進相コンデンサやSVC(無効電力補償装置)等で無効電力を補償し、力率を改善して力率割引を確実に取り切ります。電炉特有のフリッカ(電圧変動)対策も併せて行い、電力品質を安定させます。料率面のメリットだけでなく、設備への負担軽減や系統への影響低減にもつながる打ち手です。"},{"name":"契約見直し・料金メニュー最適化","role":"操業実態に合った単価・契約電力に整える","detail":"操業の負荷パターンに合わせて契約電力を適正化し、固定・市場連動・時間帯別料金などの料金メニューを操業実態とリスク許容度に照らして選び直します。相見積で複数の選択肢を比較し、市況変動への耐性も評価します。単価と契約電力の双方を操業に合わせて整えることで、総額を抑えます。"},{"name":"蓄電池・省エネ・エネマネの活用","role":"ピークシフトと量の効率化で総合最適化","detail":"蓄電池を活用してピーク時の購入電力を抑えるピークシフトや、付帯設備(ポンプ・送風機・照明)の高効率化・インバータ化で量を効率化します。エネマネ・デマンド予測で需給を見える化し、ピークの予兆をつかみます。投資対効果を見極めながら、ピーク・量・単価の三側面を統合的に最適化する基盤を整えます。"}];
const caseScenarios = [{"title":"デマンド制御・操業平準化を先行","before":"電炉と付帯設備の負荷が重なり、契約電力が実態より高めに張り付いていた代表シナリオを目安に想定します。","after":"デマンド予測と操業平準化で溶解と圧延のピーク重なりを抑え、契約電力(基本料金)を一定程度低減する代表レンジを目安とします。","result":"投資が比較的小さく着手しやすい領域で、基本料金に直接効きます。効果は操業の自由度とピークの偏りにより幅があります。"},{"title":"力率改善・電力品質対策","before":"力率が変動し力率割引を取り切れず、フリッカ等の電力品質課題も残っていた代表シナリオを想定します。","after":"進相コンデンサ・無効電力補償で力率を改善し、力率割引を確保しつつ電力品質を安定させる代表レンジを目安とします。","result":"料率面のメリットに加え設備保護にも寄与します。効果は既存の力率水準と補償の有無により異なります。"},{"title":"契約見直し・料金メニュー最適化","before":"操業実態に合わない契約電力・料金メニューで、市況変動の影響を受けやすかった代表シナリオを想定します。","after":"契約電力の適正化と料金メニューの選び直し、相見積により、単価・契約電力の双方を操業に合わせて整える代表レンジを目安とします。","result":"単価と契約電力の双方に効き、市況耐性も高められます。実額は契約条件・市況により大きく変動します。"},{"title":"全社統合(需給管理+契約+蓄電池/省エネ)","before":"ピーク・量・単価がそれぞれ分断され、統合的に最適化されていなかった代表シナリオを想定します。","after":"デマンド制御・力率改善・契約最適化・蓄電池/省エネを組み合わせ、ピーク・量・単価の三側面を統合的に抑える代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は契約条件・操業実態・市況・力率水準により異なります。"},{"label":"削減レンジの根拠","detail":"デマンド制御・力率改善・契約最適化・蓄電池/省エネの効果は、省エネ補助金の採択事例やデマンド管理・契約見直しの一般的な知見を参考にレンジ化しています。操業の自由度やピークの偏り、既存の契約条件で効果は大きく変わるため、自社では負荷データに基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"電炉鉄鋼は電力使用量・契約電力が極めて大きく、わずかな改善でも年間で大きな金額になり得ますが、本記事では精密な金額の断定は行いません。削減率(%)レンジと幅で示し、市況・燃料費調整・料金メニューの変動で結果が動く点を併記して、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。SII(環境共創イニシアチブ)による省エネ補助金、デマンドレスポンス、FEMSなどはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・負荷とデマンドの把握","detail":"受変電の電力量・デマンド記録、力率の推移、設備別・時間帯別の負荷を集め、電炉の溶解ピークと圧延・付帯設備の重なりを棚卸しします。デマンドの立ち方と契約電力の根拠を把握することが、需給管理の出発点です。エネマネや簡易計測で見える化し、ピーク発生のパターンを分析します。"},{"label":"分析・診断と打ち手の優先順位付け","detail":"第三者の診断やエネルギー監査を活用し、デマンド制御・力率改善・契約最適化・蓄電池/省エネの投資対効果を比較します。投資の小さい運用改善(操業平準化・デマンド制御)と、設備投資(無効電力補償・蓄電池)を切り分け、優先順位と概算投資額、補助金適用可能性を含めた投資回収年数(ROI)を試算します。"},{"label":"相見積・契約見直し・補助金の検討","detail":"設備は複数社から相見積を取り、ライフサイクルコストで比較します。契約電力の適正化と料金メニューの選び直しは、複数の電力会社・プランを中立的に比較し、市況耐性も評価します。SIIの省エネ補助金など制度の要件・公募スケジュールを確認し、申請に必要な根拠資料を準備します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標(削減率・回収年数・契約電力低減量)で行い、操業への影響が少ない形で導入します。導入後はエネマネでデマンド・力率・電力量の実績をモニタリングし、想定との差異を検証します。操業計画との連動を継続的に見直し、PDCAとして最適化を底上げする体制を整えます。"}];
const viewpoints = [{"label":"電力はピーク・量・単価の三側面で捉える","detail":"電炉鉄鋼の電気代は、契約電力(ピーク)・使用量(kWh)・単価(料金メニュー)の三側面で決まります。デマンド制御はピーク、省エネは量、契約見直しは単価に効きます。どれか一つではなく三側面それぞれに打ち手を持ち、効果の大きい順に組み合わせることが、総合的な最適化の鍵になります。"},{"label":"操業の自由度がデマンド制御の効果を決める","detail":"デマンド制御・操業平準化は、生産計画にどれだけ柔軟性を持たせられるかで効果が変わります。納期や設備制約で操業時間が固定的だと平準化の余地が小さくなります。生産と需給管理のバランスを取りながら、現実的に動かせる範囲でピークを下げる視点が重要です。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"無効電力補償や蓄電池などの投資は、初期費用だけでなく保守費・設備寿命を含めたライフサイクルコストで評価します。補助金で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。市況・単価の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"市況・料金メニューのリスクを管理する","detail":"電炉は使用量が大きいため、料金メニューの選択(固定・市場連動・時間帯別)が総額とリスクを大きく左右します。市場連動は単価が下がる局面で有利ですが高騰局面のリスクもあります。操業のリスク許容度に照らし、複数シナリオで負担を試算して選ぶことが大切です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、自社の負荷データに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"デマンド制御は生産制約とのバランスが必要","detail":"ピーク平準化のために操業を動かすと、生産能力や納期に影響する場合があります。本記事の削減レンジは一定の操業自由度を前提とした目安であり、操業が固定的な工場では平準化の余地が小さくなります。生産と需給管理のバランスを取り、現実的に動かせる範囲で進めることが重要です。"},{"label":"市場連動メニューは高騰リスクを伴う","detail":"市場連動の料金メニューは単価が下がる局面で有利ですが、市況高騰時には負担が急増するリスクがあります。使用量の大きい電炉では影響が大きいため、固定・市場連動の選択は複数シナリオで負担を試算し、リスク許容度に照らして慎重に判断することが大切です。安さだけで選ばない姿勢が重要です。"},{"label":"補助金・制度は要件と期限がある","detail":"SIIの省エネ補助金やデマンドレスポンス関連の制度は、対象設備・効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"見える化だけでは削減しない","detail":"エネマネやデマンド予測を導入しても、可視化したデータを操業や契約の見直しにつなげなければ削減は実現しません。よくある誤解として「システム導入が削減そのもの」と捉えがちですが、データを見てピーク・契約・単価を最適化し、効果を検証するPDCAを回して初めて成果が出ます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断は専門家の診断と自社データに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","電炉・圧延・付帯設備の設備別・時間帯別負荷を把握する","デマンドの立ち方と契約電力の根拠を確認する","電炉溶解と圧延のピーク重なりを分析する","力率の推移と力率割引の適用状況を契約書で確認する","フリッカ等の電力品質課題と無効電力補償の有無を点検する","操業時間帯と料金メニューが操業実態に合っているか確認する","固定・市場連動・時間帯別の負担を複数シナリオで試算する","蓄電池・付帯設備の高効率化の投資対効果を試算する","SII補助金・デマンドレスポンス制度の最新要件を確認する","契約電力の適正化と相見積の余地を確認する","投資回収年数と契約電力低減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","需給管理・契約見直しの優先度を考える材料になる","特別高圧・大電力負荷の高騰リスクを定量的に把握できる","中立的な立場で自社データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例集、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです(2026年度時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は契約条件・操業実態・市況・力率水準により異なるため、自社の負荷データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は需給管理・契約最適化の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の診断や自社データに基づいて行うことをおすすめします。"},{"question":"電炉鉄鋼で最も効果が出やすい対策はどこですか。","answer":"一般に、電炉鉄鋼は電力がコストの中心で、契約電力(ピーク)・使用量・単価の三側面で電気代が決まります。どこが効くかは操業の自由度や既存の契約条件によりますが、操業の柔軟性があればデマンド制御によるピーク平準化が基本料金に直接効きやすく、力率改善で力率割引を取り切る、契約電力・料金メニューを操業実態に合わせるといった打ち手も効果的です。三側面それぞれを評価して優先順位を付けることが重要です。"},{"question":"デマンド制御で契約電力はどのくらい下げられますか。","answer":"効果は操業の自由度とピークの偏りによって大きく異なるため一概には言えません。電炉の溶解バッチと圧延・付帯設備の負荷が重なってピークが立っている場合は、操業の平準化で重なりを抑えられれば契約電力を下げられる余地があります。ただし生産能力や納期の制約とのバランスが必要で、現実的に動かせる範囲で進めることが前提です。自社の負荷データに基づく試算が欠かせません。"},{"question":"力率改善はどんなメリットがありますか。","answer":"力率を改善すると、力率割引を確実に取り切れて基本料金面で有利になるほか、無効電力が減ることで設備や系統への負担も軽減されます。電炉は力率が変動しやすくフリッカ等の電力品質課題も生じやすいため、進相コンデンサや無効電力補償装置による対策は料率面・設備面の双方でメリットがあります。既存の力率水準と補償の有無を確認したうえで検討することが大切です。"},{"question":"市場連動の料金メニューは電炉に向いていますか。","answer":"一概には言えません。市場連動は単価が下がる局面で有利ですが、市況高騰時には負担が急増するリスクがあり、使用量の大きい電炉では影響が大きくなります。固定・市場連動・時間帯別の選択は、操業のリスク許容度に照らし、複数の価格シナリオで負担を試算して判断することが大切です。安さだけで選ばず、リスク管理の観点を含めて中立的に比較することをおすすめします。"},{"question":"蓄電池は電炉のピーク対策に使えますか。","answer":"蓄電池はピーク時の購入電力を一部肩代わりするピークシフトに活用できる場合がありますが、電炉のピークは極めて大きいため、蓄電池だけでピークを賄うのは容量・コストの面で現実的でないことが多く、デマンド制御・操業平準化と組み合わせて補完的に使うのが一般的です。投資対効果は容量・用途・補助金の有無で変わるため、ライフサイクルで評価することが大切です。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"省エネで購入電力量を減らすと、購入電力にかかる電力量料金や、購入電力量に連動する各種調整費・賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課されるため、量の削減は負担軽減に寄与します。電炉は使用量が大きいため、量の効率化に加えてピーク(契約電力)・単価(料金メニュー)の最適化も併せて検討することが重要です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・需給）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"},{"name":"一般財団法人省エネルギーセンター（ECCJ）","url":"https://www.eccj.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/steel-electricity-cost-review","title":"鉄鋼業の電気代見直し","description":"電炉の大電力負荷の構造と対策。"},{"href":"/hyogo-steel-electricity-cost","title":"兵庫の鉄鋼業の電気料金","description":"鉄鋼×地域クロスの整理。"},{"href":"/demand-suppression-effectiveness","title":"デマンド抑制の効果","description":"ピークカットの考え方。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金の基礎用語。"},{"href":"/extra-high-voltage-electricity-bill-guide","title":"特別高圧の電気料金ガイド","description":"大口需要の料金構造。"},{"href":"/battery-storage-bcp-peak-cut-hybrid","title":"蓄電池×ピークカット×BCP","description":"蓄電池活用の論点。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"特別高圧の省エネ投資ケース。"},{"href":"/case-study-manufacturer-medium-contract-review","title":"中堅製造業×契約見直しの事例","description":"契約中心ケースの比較。"},{"href":"/case-study-datacenter-hyperscale-pue","title":"ハイパースケールDC×PUE改善の事例","description":"大電力施設の効率化ケース。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudySteelElectricFurnaceDemandPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・操業実態・市況・力率水準により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代構造上の課題を整理します。これらは多くの電炉鉄鋼工場で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、需給管理を軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・操業実態・市況により異なります。実在企業の事例ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握とデマンドの分析から始めましょう。</p>
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
            heading="電力契約・需給管理・省エネの進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや需給管理・省エネ投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
