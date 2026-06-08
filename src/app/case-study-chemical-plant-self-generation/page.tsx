import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "化学プラント×自家発電・省エネで電気代を削減した事例｜特別高圧の連続プロセスで購入電力量と契約電力を最適化（代表シナリオ）";
const pageDescription = "反応・蒸留・乾燥など連続プロセスで電力と蒸気を大量に使う化学プラントが、自家発電(コージェネ)・余剰熱活用・省エネで購入電力量と契約電力を最適化した代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-chemical-plant-self-generation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["化学プラント 自家発電 事例","化学工場 電気代 削減","特別高圧 省エネ 投資","化学 コージェネ 蒸気","化学 GX投資促進税制"],
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

const h1Text = "化学プラント×自家発電・省エネ：特別高圧の電気代を抑えた代表事例";
const breadcrumbTitle = "化学プラント×自家発電・省エネの事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。反応・蒸留・乾燥・分離といった連続プロセスで電力と蒸気を大量に消費する化学プラントが、自家発電(コージェネレーション)・余剰熱の活用・省エネ投資によって購入電力量と契約電力の構造をどう改善できるかを、中立な社団法人の視点で整理します。実数値は契約条件・プロセス構成・燃料価格により異なるため、本記事の削減幅はあくまで目安(代表値)としてご覧ください。";
const d1CtaLead = "自社が今回の化学プラントの代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、プロセス動力・蒸気・ユーティリティのどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "自家発電・省エネ投資の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減(自家発電・省エネ)と単価の最適化(契約見直し)のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["化学プラントで電気代が重い理由(連続プロセスの動力・蒸気・分離精製の複合負荷)の構造","自家発電(コージェネ)・余剰熱活用が購入電力量と契約電力を同時に下げうる仕組みと適性条件","プロセス排熱・蒸気の多段利用やユーティリティ最適化で総エネルギーを縮小する考え方の目安","SII省エネ補助金・GX/CN投資促進税制を組み合わせた投資回収(ROI)の見立てと注意点","自社が自家発電・省エネに向いているかを見極める観点と再現用チェックリスト"];
const premise = [{"label":"業種特性(連続プロセス・電力と蒸気の複合負荷)","detail":"化学プラントは反応・蒸留・乾燥・分離精製などの工程が24時間連続で稼働し、ポンプ・コンプレッサ・撹拌・分離機などの動力と、加熱・反応に使う蒸気の双方を常時大量に消費します。電力と蒸気が一体で動くため、エネルギーコストが購入電力と燃料の両面に分散します。プロセスを止めにくい特性上、効率改善は運転を維持したまま積み上げる視点が前提になります。"},{"label":"規模(特別高圧・大口需要)","detail":"中堅以上の化学プラントは特別高圧で受電する大口需要家が多く、年間消費電力量は大きく、契約電力(デマンド)も高水準です。受変電設備を自社で保有し、自家用電気工作物として主任技術者の選任や保安規程が必要な規模です。基本料金が契約電力で決まるため、ピークの抑制と力率管理が料金に直結します。"},{"label":"契約区分(基本料金+電力量料金+調整費)","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。連続プロセスは使用量が大きく電力量料金の比率が高いため、購入電力量(kWh)そのものを減らす施策の金額インパクトが大きい構造です。自家発電は購入電力量と契約電力の双方に効きうる打ち手の一つです。"},{"label":"熱需要(プロセス蒸気が安定して大きい)","detail":"反応や蒸留には安定した蒸気需要が伴い、熱のベースが高く一定なのが化学プラントの特徴です。コージェネは発電とともに発生する排熱を蒸気として使えるため、熱需要が安定して大きいほど排熱を無駄なく使い切れ、総合効率が高まりやすくなります。プロセスの熱と電気の比率(熱電比率)が自家発電の適性を大きく左右します。"},{"label":"コスト構造(電力・燃料・原料が絡み合う)","detail":"化学のエネルギーコストは、購入電力・蒸気用燃料・プロセス動力が相互に絡み合い、原料価格や製品市況の影響も受けます。エネルギー単体の最適化だけでなく、プロセス全体のユーティリティ収支で捉える必要があります。どの工程でどのエネルギーをどれだけ使うかを把握することが、自家発電・省エネ投資の判断の出発点になります。"}];
const beforeState = [{"label":"電力と蒸気を別々に調達し全体最適を逃す","detail":"電気は電力会社から購入し、蒸気はボイラで個別に作るという縦割りの調達が続き、両者を合わせた最適化ができていませんでした。発電に伴う排熱を活用する発想がなく、購入電力量も燃料消費も削りどころが見えにくい状態です。プロセス全体のエネルギーフローを俯瞰する仕組みがなく、横断的な改善機会を取りこぼしていました。"},{"label":"プロセス動力の経年化と部分負荷ロス","detail":"ポンプ・コンプレッサ・撹拌機などの動力設備が経年化し、インバータ未導入のままバルブ絞りで流量調整を行うなど、部分負荷でのエネルギーロスが常態化していました。連続運転で稼働時間が長いほど無駄が積み上がる一方、計測が乏しく改善の優先順位を付けられていませんでした。"},{"label":"プロセス排熱・蒸気ドレンを十分に回収していない","detail":"反応・蒸留・乾燥工程から出る排熱や蒸気ドレンを十分に回収せず、別工程で改めて加熱するなど熱の使い回しが不十分でした。蒸気配管の保温やスチームトラップの管理も後回しになり、熱ロスが残っていました。電力と燃料の双方に跳ね返る非効率が放置されていた状態です。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"プラント全体の電力量は把握できても、工程別・用役別(蒸気・冷熱・電力)の内訳がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。FEMS・エネマネが未整備で、待機ロスや異常消費に気づきにくく、自家発電の容量選定に必要な熱電比率の精緻な把握もできていませんでした。"}];
const approaches = [{"name":"自家発電(コージェネ)の導入・余剰熱の活用","role":"発電と排熱利用で購入電力量と契約電力を同時削減","detail":"ガスタービンやガスエンジンで発電し、その排熱をプロセス蒸気として反応・蒸留・乾燥工程に使うことで、購入電力量とボイラ燃料の双方を置き換えます。化学プラントは蒸気のベース需要が安定して大きいため、排熱を使い切れれば総合効率が高まりやすい領域です。発電容量はベース負荷に合わせて選定し、契約電力の低減にもつなげます。"},{"name":"プロセス動力の高効率化・運用最適化","role":"消費の中心であるプロセス動力ロスを源流から削減","detail":"経年ポンプ・コンプレッサを高効率機へ更新し、インバータ導入で流量・圧力に応じた可変速運転へ切り替えます。コンプレッサは台数制御・吐出圧適正化・エア漏れ対策を併せて実施します。連続運転で稼働時間が長いほど削減量が積み上がり、プロセス動力は化学プラントの省エネで効果が出やすい領域の一つです。"},{"name":"排熱回収・蒸気/ユーティリティ最適化","role":"捨てていた熱を再利用し総エネルギーを縮小","detail":"反応・蒸留・乾燥工程の排熱をエコノマイザや熱交換器で回収し、給水予熱や別工程の加熱に再利用します。蒸気配管の保温強化、スチームトラップ点検、ドレン回収の徹底で熱ロスを抑えます。電力で駆動する冷凍機やヒートポンプの運転最適化も含め、電力・蒸気を横断したユーティリティ全体での最適化を図ります。"},{"name":"FEMS導入・力率/デマンド管理・運用改善","role":"投資効果を見える化し契約面も最適化","detail":"FEMS(工場エネルギー管理システム)で電力・蒸気・冷熱の消費を工程別・時間帯別に可視化し、熱電比率や同時使用を把握します。これは自家発電の容量選定と運転計画の根拠になります。進相コンデンサによる力率改善で力率割引を確保し、デマンド監視でピーク需要を抑えて基本料金を低減。導入後の効果検証とPDCAの基盤としても機能します。"}];
const caseScenarios = [{"title":"動力領域中心(プロセス動力の高効率化を先行)","before":"プロセス動力が消費の中心で、経年設備と部分負荷ロスが課題として残っていた代表シナリオを目安に想定します。","after":"高効率機への更新とインバータ可変速化、コンプレッサ最適化で、動力分の消費電力量を概ね一〜二割程度低減する代表レンジを目安とします。","result":"投資回収が比較的早い動力領域から着手し、稼働時間が長いほど効果が積み上がる傾向です。実額は契約条件・稼働実態により異なります。"},{"title":"中規模(蒸気需要が安定・自家発電導入)","before":"反応・蒸留の蒸気需要が安定して大きく、電力と蒸気を別々に調達していた代表シナリオを想定します。","after":"ベース熱負荷に合わせた自家発電(コージェネ)を導入し、排熱を蒸気利用、購入電力量・契約電力・燃料を同時に最適化する代表レンジを目安とします。","result":"電力と燃料を横断した総エネルギーでの削減効果が出やすく、熱を使い切れるほど総合効率が高まる傾向です。効果は熱電比率により幅があります。"},{"title":"熱回収・ユーティリティ最適化中心","before":"プロセス排熱を十分回収せず、蒸気・ドレンのロスが残っていた代表シナリオを想定します。","after":"排熱回収と保温強化、冷凍機・ヒートポンプ運転の最適化で、熱起因のエネルギー(電力換算分を含む)を概ね一割前後低減する代表レンジを目安とします。","result":"電力と燃料を横断した削減効果が出やすく、CO2削減にも寄与します。効果は工程構成により幅があります。"},{"title":"全社統合(自家発電+省エネ+契約最適化)","before":"用役別の見える化がなく、投資と運用・契約が分断されていた代表シナリオを想定します。","after":"FEMSで熱電比率を把握したうえで自家発電・動力高効率化・力率/デマンド管理を組み合わせ、プラント全体のエネルギーコストを総合的に抑える代表レンジを目安とします。","result":"単独施策より相乗効果が大きく、補助金・税制活用で投資回収年数の短縮も期待できます。実数値は前提条件により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ(代表シナリオ・目安)","detail":"本記事のBefore/Afterや削減率は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例集、業界統計から再構成した代表レンジの目安です(2026年度時点・代表シナリオ)。断定的な金額表示は避け、%レンジや幅で表現しています。実際の効果は契約条件・プロセス構成・熱電比率・燃料価格により異なります。"},{"label":"削減レンジの根拠","detail":"自家発電(コージェネ)による購入電力量・燃料の削減や、動力高効率化・排熱回収の効果は、省エネ補助金の採択事例やコージェネの一般的な総合効率の知見を参考にレンジ化しています。熱を使い切れる度合いで効果は大きく変わるため、自社では熱電比率の実測に基づく試算が不可欠です。"},{"label":"金額表現の扱い","detail":"化学プラントは電力・燃料の使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事では精密な金額の断定は行いません。削減率(%)レンジと幅で示し、燃料価格・電力単価の変動で結果が動く点を併記して、断定を避ける方針を一貫させています。"},{"label":"制度・規格の名称","detail":"本記事で参照する制度・規格は正式名称を用います。SII(環境共創イニシアチブ)による省エネ補助金、GX・カーボンニュートラル投資促進税制、コージェネレーション関連の補助、FEMSなどはいずれも公的・公式に定められた名称であり、対象設備・要件・公募期間は最新の公募要領で要確認です(2026年度時点)。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・熱電比率の把握","detail":"受変電の電力量・デマンド記録に加え、ボイラ燃料消費や蒸気・冷熱の使用実績を集め、工程別・時間帯別に棚卸しします。蒸気需要と電力需要が同時にどれだけ発生するか(熱電比率)を把握することが、自家発電の容量選定の出発点です。FEMSや簡易計測で見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と自家発電適性評価","detail":"第三者の省エネ診断やエネルギー監査を活用し、排熱を使い切れる蒸気需要があるかを評価します。動力高効率化など回収の早い施策と、自家発電のような大型投資を切り分け、優先順位と概算投資額、補助金・税制適用可能性を含めた投資回収年数(ROI)を試算します。熱需要が小さい場合は自家発電を見送る判断も含めます。"},{"label":"相見積・補助金/税制の検討","detail":"設備は複数社から相見積を取り、仕様・保証・保守費・燃料計画まで含めたライフサイクルコストで比較します。SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制、コージェネ関連補助の要件・公募スケジュールを確認し、申請に必要な省エネ効果の根拠資料を準備します。電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標(削減率・回収年数・CO2削減量)で行い、定期修理(シャットダウン)に合わせて工事を計画します。導入後はFEMSで発電・排熱利用の実績をモニタリングし、想定との差異を検証します。部分負荷運転や停止時間を最適化し、PDCAとして継続的に効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"熱を使い切れるかが自家発電可否を分ける","detail":"自家発電(コージェネ)は発電と排熱利用が両立して初めて効果が出ます。排熱を使い切れる安定した蒸気需要がなければ、発電だけでは購入電力との比較で優位になりにくくなります。蒸気需要の量・時間帯・温度帯を実測し、排熱利用率を見極めることが、導入可否を分ける最重要の観点です。"},{"label":"量(kWh)・契約電力・単価を分けて考える","detail":"自家発電・省エネは使用量(購入電力量)と契約電力(基本料金)を減らす取り組み、契約・メニュー見直しは単価を下げる取り組みです。化学は使用量が大きいため量の削減効果が大きい一方、力率・デマンド管理による基本料金最適化も無視できません。要素を切り分けて評価すると投資配分の判断がしやすくなります。"},{"label":"投資回収年数(ROI)とライフサイクルで判断","detail":"初期投資だけでなく、想定削減額・保守費・燃料費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。燃料・電力価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・蒸気・冷熱を分断して最適化すると全体最適を逃します。自家発電や排熱回収のように電力と燃料・熱を横断する施策は、片方だけ見ると効果を過小評価しがちです。プラント全体のエネルギーフローで俯瞰し、最も効く順に手を打つ視点が欠かせません。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立的立場の情報や第三者診断を併用し、自社のプロセスデータに基づいて判断することで、過度な期待や偏った投資を避けられます。"}];
const cautions = [{"label":"熱需要が小さいと自家発電は不利になりやすい","detail":"排熱を使い切れる蒸気需要がなければ、自家発電(コージェネ)の総合効率は下がり、購入電力との比較で優位になりにくくなります。本記事の削減レンジは安定した蒸気需要を前提とした目安であり、熱需要が小さいプラントでは動力高効率化など別の施策を優先する判断が現実的です。導入ありきで進めないことが重要です。"},{"label":"燃料価格の変動でメリットが変わる","detail":"自家発電は燃料を燃やして発電するため、燃料価格と電力単価の相対関係でメリットが変動します。導入時に有利でも、価格関係が変われば優位性が薄れる場合があります。複数の価格シナリオで感度分析を行い、価格変動に耐える計画かを確認することが大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金やGX・カーボンニュートラル投資促進税制、コージェネ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。採択を前提に投資計画を組むと、不採択時に資金計画が崩れるおそれがあります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。"},{"label":"見える化だけでは削減しない","detail":"FEMSやエネマネを導入しても、可視化したデータを改善行動につなげなければ削減は実現しません。よくある誤解として「システム導入が省エネそのもの」と捉えがちですが、熱電比率を見て容量・運転や設定を最適化し、効果を検証するPDCAを回して初めて成果が出ます。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではありません。投資判断は専門家の診断と自社データに基づき、複数の選択肢を比較したうえで行ってください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","ボイラ燃料消費と蒸気の使用実績を工程別に集計する","反応・蒸留・乾燥など用役別の消費を計測または推計する","蒸気需要と電力需要の同時発生(熱電比率)を時間帯別に把握する","プロセス排熱・蒸気ドレンの回収余地と利用先を確認する","ポンプ・コンプレッサの効率とインバータ導入状況を点検する","蒸気配管の保温とスチームトラップを点検する","力率と力率割引の適用状況を契約書で確認する","自家発電の想定容量をベース熱負荷から試算する","SII補助金・GX/CN税制・コージェネ補助の最新要件を確認する","複数の燃料・電力価格シナリオで感度分析を行う","投資回収年数とCO2削減量を施策ごとに試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","自家発電・省エネと契約見直しの優先度を考える材料になる","特別高圧の高騰リスクを定量的に把握できる","中立的な立場で自社データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例集、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです(2026年度時点・代表シナリオ)。Before/Afterや削減率は精密な実績値ではなく、目安として%レンジや幅で示しています。実際の効果や金額は契約条件・プロセス構成・熱電比率・燃料価格により異なるため、自社の計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は自家発電・省エネの考え方や効果の目安を中立的に整理したもので、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"化学プラントの自家発電(コージェネ)はどんな場合に向いていますか。","answer":"一般に、発電とともに発生する排熱を蒸気として使い切れる安定した熱需要があるプラントほど向いています。化学は反応・蒸留などで蒸気のベース需要が大きく、適性が出やすい業種の一つです。逆に熱需要が小さい場合は排熱を活かせず優位になりにくいため、熱電比率の実測に基づいて導入可否を判断することが重要です。導入ありきで進めない姿勢が大切です。"},{"question":"自家発電を入れれば必ず電気代は下がりますか。","answer":"必ず下がるとは限りません。自家発電は燃料を燃やして発電するため、購入電力量は減りますが燃料費は増えます。排熱を使い切れて初めて総合的に有利になり、熱需要が小さい場合や燃料価格が高い局面では優位性が薄れます。導入ありきではなく、複数の価格シナリオで感度分析を行い、ライフサイクルで判断することが大切です。"},{"question":"契約電力(基本料金)を下げる方法はありますか。","answer":"特別高圧の基本料金は契約電力(デマンド)で決まるため、ピーク需要の抑制が効きます。自家発電でベース負荷の一部を賄えばピーク時の購入電力を抑えられ、契約電力の低減につながる場合があります。あわせて進相コンデンサによる力率改善で力率割引を確保し、デマンド監視でピークを管理することも有効です。ただし大口需要は使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"省エネ投資と自家発電はどちらを先にすべきですか。","answer":"一般には、投資回収が比較的早い動力高効率化や運用改善から着手し、その過程で熱電比率のデータを蓄積したうえで、大型投資である自家発電の可否を判断する順序が堅実です。動力の高効率化は購入電力量の削減に直結し、自家発電の容量選定の前提データづくりにも役立ちます。どちらを優先するかは熱需要の規模と安定性によって変わります。"},{"question":"使える補助金・税制はありますか。","answer":"SII(環境共創イニシアチブ)の省エネ補助金やGX・カーボンニュートラル投資促進税制、コージェネレーション関連の補助など、設備更新・低炭素投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金や燃料費調整額の負担は減らせますか。","answer":"自家発電で購入電力量を減らすと、購入電力にかかる電力量料金や、購入電力量に連動する各種調整費・賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課されるため、量の削減は負担軽減に寄与します。ただし自家発電に使う燃料の価格変動という別のリスクを負うため、燃料コストとの綱引きを総合的に評価することが重要です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"},{"name":"一般財団法人コージェネレーション・エネルギー高度利用センター","url":"https://www.ace.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/chemical-electricity-cost-review","title":"化学工業の電気代見直し","description":"連続プロセスの電力構造と対策。"},{"href":"/okayama-chemical-electricity-cost","title":"岡山の化学工業の電気料金","description":"化学×地域クロスの整理。"},{"href":"/subsidy-cogeneration-introduction","title":"コージェネ導入と補助金","description":"自家発電・熱電併給の補助。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ・省エネ投資の税制優遇。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-energy-saving-diagnosis","title":"省エネ診断の活用","description":"投資の優先順位づけ。"},{"href":"/energy-saving-tax-incentives","title":"省エネ関連の税制優遇","description":"投資判断に効く税制。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの基礎","description":"再エネ調達の選択肢。"},{"href":"/extra-high-voltage-electricity-bill-guide","title":"特別高圧の電気料金ガイド","description":"大口需要の料金構造。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金の基礎用語。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"特別高圧の省エネ投資ケース。"},{"href":"/case-study-semiconductor-re100-procurement","title":"半導体工場×RE100調達の事例","description":"連続稼働×再エネ調達。"},{"href":"/case-study-auto-tier1-ppa-introduction","title":"自動車部品Tier1×PPAの事例","description":"製造業の再エネ調達ケース。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyChemicalPlantSelfGenerationPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・プロセス構成・熱電比率・燃料価格により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは多くの化学プラントで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、自家発電を軸に複数の打ち手を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオで、Before/Afterの考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・熱電比率・燃料価格により異なります。実在企業の事例ではありません。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と熱電比率の取得から始めましょう。</p>
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
            heading="電力契約・省エネ・自家発電投資の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・自家発電投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
