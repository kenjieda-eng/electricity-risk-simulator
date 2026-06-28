import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "大規模工場×省エネ投資で電気代を削減した事例｜特別高圧2,000kW超のSII補助金・FEMS活用（代表シナリオ）";
const pageDescription = "特別高圧2,000kW超の大規模工場が、高効率設備・FEMS・省エネ診断・SII補助金やGX/CN投資促進税制を活用した省エネ投資で電気代を抑えた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-factory-large-energy-saving-investment";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["大規模工場 省エネ投資","特別高圧 電気代 削減","FEMS 工場 エネマネ","SII 省エネ補助金 事例","GX投資促進税制 工場"],
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

const h1Text = "大規模工場×省エネ投資：特別高圧2,000kW超の電気代を削減した代表事例";
const breadcrumbTitle = "大規模工場×省エネ投資の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。受電電力2,000kW超の特別高圧で連続操業する大規模工場が、省エネ投資によって電力コスト構造をどう改善できるかを、業界統計と公開事例から再構成して解説します。高効率モーターやインバータ、排熱回収、エネマネといった技術ごとの位置づけと、投資回収の考え方を、中立な社団法人の視点で整理します。実数値は契約条件・使用実態により異なります。";
const d1CtaLead = "自社が今回の大規模工場の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、動力・熱・照明空調のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "省エネ投資の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(省エネ投資)と単価の最適化(契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["特別高圧2,000kW超の大規模工場で電気代の大半を占める動力・熱負荷の構造と削減余地","高効率モーター・インバータ・コンプレッサ更新、排熱回収、LED・高効率空調の役割と効果レンジの目安","FEMSやエネマネ、省エネ診断を起点にした「見える化→改善→検証」の進め方","SII補助金・省エネ補助金やGX・カーボンニュートラル投資促進税制を組み合わせた投資回収(ROI)の考え方","自社が同様のケースに当てはまるかを見極めるための観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(連続操業・熱と動力の複合負荷)","detail":"食品・化学などの大規模工場は、ボイラや乾燥・反応・冷却といった熱プロセスと、ポンプ・ファン・コンプレッサ・搬送などの動力が常時稼働する複合負荷が特徴です。24時間連続操業のラインでは負荷の山谷が小さく、わずかな効率改善でも年間の消費電力量への影響が大きくなります。電力だけでなく蒸気・圧縮空気・冷熱といったユーティリティ全体でエネルギーを捉える視点が前提になります。"},{"label":"規模(受電2,000kW超・特別高圧)","detail":"受電電力2,000kW超は特別高圧区分に該当し、自家用電気工作物として主任技術者の選任や保安規程が必要な規模です。受変電設備を自社で保有し、力率や需要率の管理が料金に直結します。年間消費電力量は数千万kWh規模に達することも多く、設備更新の単価は高い一方で、効率改善が年間コストに与えるインパクトも比例して大きくなります。"},{"label":"契約区分(特別高圧・基本料金+電力量料金+調整費)","detail":"特別高圧の料金は、契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。基本料金は契約電力(デマンド)で決まるため、ピーク需要の抑制が基本料金の低減に効きます。力率割引・割増も適用されるため、進相コンデンサ等による力率改善も料金最適化の論点になります。"},{"label":"負荷パターン(ベース負荷が高くピークが平坦)","detail":"連続操業の工場は深夜・休日も一定のベース負荷が続き、需要曲線が平坦になりやすい傾向があります。空調や照明の比率は相対的に小さく、動力と熱プロセスが消費の中心です。このためデマンド制御だけでなく、稼働中の機器効率そのものを底上げする投資が、量(kWh)の削減に直結しやすい点が、業務用ビルなどとは異なる特徴です。"},{"label":"コスト構造(電力量料金比率が高い)","detail":"大規模工場では使用量が大きいため、料金総額に占める電力量料金の比率が高くなりがちです。したがって基本料金対策(ピークカット)以上に、年間kWhそのものを下げる省エネ投資の効果が金額として表れやすい構造です。一方で投資額も大きいため、補助金・税制を含めた投資回収年数の評価が意思決定の鍵になります。"}];
const beforeState = [{"label":"動力設備の経年化と低効率運転","detail":"更新時期を過ぎたモーターやコンプレッサが定格運転を続け、部分負荷でも回転数一定のため無駄が生じていました。インバータ未導入のポンプ・ファンが流量調整をバルブ絞りで行っており、エネルギーロスが常態化していた状態です。どの機器がどれだけ電力を消費しているかの計測が乏しく、改善の優先順位を付けられていませんでした。"},{"label":"排熱の未回収とユーティリティの分断","detail":"ボイラや乾燥・冷却工程から出る排熱・ドレンを回収せずに排出し、別工程で改めて加熱・冷却するなど、熱の使い回しができていませんでした。電気・蒸気・圧縮空気が部門ごとに最適化され、工場全体のエネルギーフローとして俯瞰されていなかったため、横断的な削減機会を取りこぼしていました。"},{"label":"照明・空調の旧式化と過剰運転","detail":"工場棟や倉庫の照明が水銀灯や蛍光灯のまま残り、無人エリアでも点灯し続けていました。事務棟・クリーンルーム等の空調も旧式で、外気条件や在室状況に応じた制御がなく、必要以上のエネルギーを消費していました。比率は動力ほど大きくないものの、投資回収が比較的早い領域が手付かずでした。"},{"label":"エネルギーの見える化不足と属人的運用","detail":"工場全体の電力量は把握できても、ライン別・用役別の内訳がリアルタイムに見えず、改善はベテラン担当者の経験則に依存していました。FEMSやエネマネが未整備で、異常な消費や待機ロスに気づきにくく、省エネ法の定期報告や中長期計画の根拠データづくりにも手間がかかっていました。"}];
const approaches = [{"name":"高効率モーター・インバータ・コンプレッサ更新(動力)","role":"消費の中心である動力ロスを源流から削減","detail":"経年モーターをトップランナー基準相当の高効率機(IE3・IE4クラス相当)へ更新し、ポンプ・ファン・送風機にインバータを導入して流量・風量に応じた可変速運転へ切り替えます。エアコンプレッサは台数制御・吐出圧の適正化・配管エア漏れ対策をあわせて実施します。連続操業で稼働時間が長いほど削減量が積み上がり、動力は工場の省エネで最も効果が出やすい領域です。"},{"name":"排熱回収・熱プロセス最適化(熱)","role":"捨てていた熱を再利用し総エネルギーを縮小","detail":"ボイラ排ガスや乾燥・冷却工程の排熱をエコノマイザや熱交換器で回収し、給水予熱や別工程の加熱に再利用します。蒸気配管の保温強化、スチームトラップの点検、ドレン回収の徹底で熱ロスを抑えます。電力で駆動する冷凍機やヒートポンプの運転最適化も含め、電気・蒸気を横断したユーティリティ全体での最適化を図ります。"},{"name":"LED・高効率空調・受変電最適化(照明空調・電力品質)","role":"回収の早い領域と料金単価の最適化","detail":"工場照明をLED化し、人感・照度センサーで無人時の消灯を自動化します。事務棟・クリーンルーム空調を高効率機へ更新し、外気冷房や換気量制御を導入します。あわせて進相コンデンサによる力率改善で力率割引を確保し、デマンド監視でピーク需要を抑えて基本料金の低減にもつなげます。投資回収が比較的短い施策群です。"},{"name":"FEMS導入・省エネ診断・運用改善(エネマネ)","role":"投資効果を見える化し継続的に底上げ","detail":"FEMS(工場エネルギー管理システム)でライン別・用役別の消費をリアルタイムに可視化し、待機ロスや異常消費を早期に検知します。第三者の省エネ診断で改善余地を客観評価し、設備投資と運用改善(設定温度・圧力・稼働スケジュールの見直し)を組み合わせます。投資後の効果検証と次の改善のPDCAを回す基盤として機能します。"}];
const caseScenarios = [{"title":"動力領域中心(高効率モーター・インバータ・コンプレッサ更新)","before":"動力が工場電力消費の大半を占め、経年モーターと定速運転で無駄が常態化していた代表シナリオ。改善余地が大きい状態を目安として想定します。","after":"高効率機への更新とインバータ可変速化、コンプレッサ最適化により、動力分の消費電力量を概ね一〜二割程度低減する代表レンジを目安とします。","result":"工場全体では数%規模の電力量削減が見込まれ、稼働時間が長いほど効果が積み上がる傾向です。実額は契約条件・稼働実態により異なります。"},{"title":"熱領域中心(排熱回収・蒸気/ユーティリティ最適化)","before":"排熱を回収せず別工程で再加熱し、蒸気配管やドレンのロスが残っていた代表シナリオを想定します。","after":"排熱回収と保温強化、ヒートポンプ・冷凍機運転の最適化で、熱起因のエネルギー(電力換算分を含む)を概ね一割前後低減する代表レンジを目安とします。","result":"電力と燃料を横断した総エネルギーでの削減効果が出やすく、CO2削減にも寄与します。効果は工程構成により幅があります。"},{"title":"照明空調・電力品質領域(LED・高効率空調・力率/デマンド)","before":"旧式照明・空調が残り、力率管理やデマンド監視が不十分だった代表シナリオを想定します。","after":"LED化と高効率空調、力率改善・ピーク抑制により、該当領域の消費を概ね二〜四割程度、契約電力(基本料金)も一部低減する代表レンジを目安とします。","result":"投資回収が比較的短く、初期に着手しやすい領域です。工場全体に占める比率は小さめのため総額影響は限定的な傾向です。"},{"title":"全社統合(FEMS+省エネ投資+運用改善の複合)","before":"用役別の見える化がなく、投資と運用が分断されていた代表シナリオを想定します。","after":"FEMSで可視化したうえで動力・熱・照明空調の投資と運用改善を組み合わせ、工場全体で概ね一〜二割程度の電力量削減を目指す代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金・税制活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2025年10月時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は契約条件・設備構成・稼働実態により異なります。"},{"label":"削減レンジの根拠","detail":"高効率モーターやインバータ導入による動力削減、排熱回収やLED化による効果は、省エネ補助金の採択事例や省エネ診断の一般的な知見で示される改善幅を参考にレンジ化しています。個別工程の効率や稼働率により上下するため、自社では計測データに基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"大規模工場は使用量が大きく、わずかな削減率でも年間で大きな金額になり得ますが、本記事では精密な金額の断定は行いません。月数十万円規模から条件により変動するといった幅と、削減率(%)レンジを併記し、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。SII(環境共創イニシアチブ)による省エネ補助金、GX・カーボンニュートラル投資促進税制、FEMS、BEMS、ZEB、RE100などはいずれも公的・公式に定められた名称であり、内容や要件は最新の公募・制度改正により変わるため、必ず一次情報での確認が前提です。"}];
const process = [{"label":"データ収集・現状把握","detail":"受変電の電力量データやデマンド記録、用役(蒸気・圧縮空気・冷熱)の使用実績を集め、ライン別・設備別の消費を棚卸しします。FEMSや簡易計測器を活用して見える化し、稼働時間・負荷率・待機ロスを把握します。省エネ法の定期報告データも改善余地を見極める出発点になります。"},{"label":"分析・診断と優先順位付け","detail":"第三者の省エネ診断やエネルギー監査を活用し、投資対効果の大きい領域から優先順位を付けます。動力・熱・照明空調・電力品質ごとに削減ポテンシャルと概算投資額を整理し、補助金・税制の適用可能性も含めて投資回収年数(ROI)を試算します。運用改善で済む項目と設備更新が必要な項目を切り分けます。"},{"label":"相見積・補助金/税制の検討","detail":"設備更新は複数社から相見積を取り、仕様・保証・保守費まで含めたライフサイクルコストで比較します。SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制の要件・公募スケジュールを確認し、申請に必要な省エネ効果の根拠資料を準備します。電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標(削減率・回収年数・CO2削減量)で行い、稼働への影響が少ない時期に工事を計画します。導入後はFEMSで効果をモニタリングし、想定との差異を検証します。検証結果を次の改善計画へ反映し、PDCAとして継続的に省エネを底上げする体制を整えます。"}];
const viewpoints = [{"label":"量(kWh)と単価(料金メニュー)を分けて考える","detail":"省エネ投資は使用量(kWh)を減らす取り組み、契約・メニュー見直しは単価を下げる取り組みです。大規模工場は使用量が大きいため量の削減効果が大きい一方、料金単価の最適化も無視できません。両者を切り分けて評価すると、どちらにどれだけ投資すべきかの判断がしやすくなります。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"初期投資額だけでなく、想定削減額・保守費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で意思決定が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"稼働への影響と工事タイミング","detail":"連続操業の工場では設備更新時の停止が生産機会損失に直結します。定期修理(シャットダウン)に合わせた工事計画や段階的導入により、稼働影響を最小化できるかが投資判断の重要な観点です。技術的な効果だけでなく現場運用との両立可能性を見ます。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・蒸気・圧縮空気・冷熱を分断して最適化すると全体最適を逃します。排熱回収のように電力と燃料を横断する施策は、片方だけ見ると効果を過小評価しがちです。工場全体のエネルギーフローで俯瞰し、最も効く順に手を打つ視点が欠かせません。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の機器メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、自社のデータに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"削減率は前提次第で大きく変動する","detail":"本記事の削減レンジは代表シナリオの目安であり、稼働率・負荷特性・既存設備の状態によって実際の効果は上下します。低効率設備が多く残る工場ほど改善余地は大きく、すでに省エネが進んだ工場では伸びしろが小さくなります。自社の計測データに基づく試算が前提です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制は、対象設備・省エネ効果の基準・公募期間が定められており、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。最新の一次情報を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"省エネ投資=必ず黒字ではない","detail":"投資額が大きい施策は、削減額が出ても回収に長期を要する場合があります。回収年数が設備寿命を上回るような投資は慎重な判断が必要です。効果の小さい領域に高額投資をする前に、運用改善や回収の早い施策から着手する順序が現実的です。"},{"label":"見える化だけでは削減しない","detail":"FEMSやエネマネを導入しても、可視化されたデータを改善行動につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、データを見て設定や運用を変え、効果を検証するPDCAを回して初めて成果が出ます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は架空企業の代表シナリオに基づく中立的な解説であり、特定の電力会社・機器・契約形態を推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断は専門家の診断と自社データに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","ライン別・用役別の消費内訳を計測または推計する","高効率化が未実施のモーター・ポンプを洗い出す","インバータ未導入の可変負荷機器を特定する","コンプレッサの吐出圧とエア漏れを点検する","ボイラ排ガス・工程排熱の回収余地を確認する","蒸気配管の保温とスチームトラップを点検する","工場照明のLED化率と無人時消灯の状況を確認する","力率と力率割引の適用状況を契約書で確認する","デマンド監視・ピーク抑制の仕組みの有無を確認する","SII補助金・GX税制など制度の最新要件を確認する","投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","省エネ投資と契約見直しの優先度を考える材料になる","特別高圧の高騰リスクを定量的に把握できる","中立的な立場で自社データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例集、経産省・資源エネルギー庁の公開情報から再構成した架空企業の代表シナリオです(2025年10月時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は契約条件・設備構成・稼働実態により異なるため、自社の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や機器メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・機器メーカー・契約形態を推奨することはありません。本記事は省エネ投資の考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"大規模工場で最も効果が出やすい省エネ領域はどこですか。","answer":"一般に、連続操業の大規模工場では消費の中心が動力(モーター・ポンプ・ファン・コンプレッサ)であるため、高効率機への更新やインバータ可変速化など動力領域の改善が効果として表れやすい傾向です。ただし熱プロセスの比率が高い工場では排熱回収の効果が大きい場合もあります。どこに削減余地があるかは工程構成により異なるため、まず用役別の見える化と省エネ診断で優先順位を付けることが重要です。"},{"question":"省エネ投資の回収年数(ROI)はどう考えればよいですか。","answer":"回収年数は、想定削減額に対する投資額の比で概算しますが、保守費・設備寿命を含めたライフサイクルコストで評価することが大切です。SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制を活用すると実質負担が下がり回収が早まる場合があります。エネルギー価格の変動も感度分析に織り込み、回収年数が設備寿命の範囲に収まるかを確認したうえで判断してください。"},{"question":"排熱回収はどのような場面で有効ですか。","answer":"ボイラ排ガスや乾燥・冷却・反応工程からまとまった排熱が継続的に出ている場合、エコノマイザや熱交換器で回収して給水予熱や別工程の加熱に再利用すると効果が出やすくなります。電力と燃料を横断して総エネルギーを減らせるためCO2削減にも寄与します。一方で排熱の温度・量や利用先との距離によって投資効果は変わるため、工程ごとの実測に基づく検討が前提です。"},{"question":"FEMSやエネマネを導入すれば自動的に省エネになりますか。","answer":"いいえ。FEMS(工場エネルギー管理システム)やエネマネは消費を見える化する手段であり、それ自体が削減を生むわけではありません。可視化したデータをもとに設定温度・圧力・稼働スケジュールの見直しや異常消費の是正といった改善行動を実行し、効果を検証するPDCAを回して初めて成果が出ます。投資と運用改善を組み合わせる前提でご検討ください。"},{"question":"特別高圧2,000kW超の工場で契約面でできる対策はありますか。","answer":"特別高圧の料金は契約電力(デマンド)で決まる基本料金、使用量に応じた電力量料金、燃料費調整額などで構成されます。進相コンデンサによる力率改善で力率割引を確保したり、デマンド監視でピーク需要を抑えて基本料金を低減する余地があります。ただし大規模工場は使用量が大きいため、契約面の最適化に加えて使用量そのものを下げる省エネ投資の効果が金額として表れやすい点も踏まえて検討することが大切です。"},{"question":"補助金や税制を使う場合の注意点は何ですか。","answer":"SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制は、対象設備・省エネ効果の基準・公募期間などの要件が定められ、年度ごとに内容が改正されます。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。必ず最新の一次情報で要件と期限を確認し、申請に必要な省エネ効果の根拠資料を早めに準備するとともに、採択前提に依存しすぎない計画とすることが安全です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/continuous-operation-factory-electricity-cost-review","title":"連続操業工場の電気代見直し","description":"24時間操業の電力構造。"},{"href":"/food-factory-electricity-cost-review","title":"食品工場の電気代見直し","description":"冷却・加熱負荷の削減観点。"},{"href":"/hyogo-steel-electricity-cost","title":"兵庫の鉄鋼業の電気料金","description":"大規模製造×地域クロス。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ・省エネ投資の税制優遇。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調更新の削減効果","description":"照明空調の省エネ効果。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/subsidy-roi-payback-calculation","title":"補助金活用時の投資回収計算","description":"補助金込みの回収試算。"},{"href":"/case-study-manufacturer-medium-contract-review","title":"中堅製造業×契約見直しの事例","description":"契約中心ケースの比較。"},{"href":"/energy-saving-tax-incentives","title":"省エネ投資の税制優遇","description":"省エネ設備投資で使える税制優遇・控除の概要。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyFactoryLargeEnergySavingInvestmentPage() {
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
