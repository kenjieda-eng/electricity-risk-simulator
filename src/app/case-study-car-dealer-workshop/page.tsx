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

const pageTitle = "自動車ディーラー×施設最適化で電気代を削減した事例｜ショールーム/整備工場・EV充電併設の契約設計（代表シナリオ）";
const pageDescription = "ショールームの照明・空調、整備工場のコンプレッサ・リフト・塗装ブース、そしてEV充電器を併設する自動車ディーラーが、施設全体の電力を照明LED化・空調最適化・デマンド制御/力率改善・EV充電を含む契約電力設計で見直した代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-car-dealer-workshop";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["自動車ディーラー 電気代 削減 事例","ショールーム 整備工場 省エネ","EV充電器 契約電力 設計","デマンド 力率 改善 店舗","カーディーラー 電気料金 見直し"],
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

const h1Text = "自動車ディーラー×施設最適化：ショールーム/整備工場・EV充電併設の契約設計で電気代を抑えた代表事例";
const breadcrumbTitle = "自動車ディーラーの電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。自動車ディーラーは、大きなガラス面と高照度が求められるショールームの照明・空調、整備工場のコンプレッサ・リフト・塗装ブース・工具、そして近年はEV急速充電器の併設が加わり、性格の異なる電力負荷が同じ拠点に複合します。本記事はショールーム・整備工場・EV充電を含む施設全体の電力最適化を扱うものであり、EV充電単体の電気代・充電料金設計を扱う ev-charging 系ページとは対象範囲が異なる点を、まず冒頭で明示します。照明LED化・空調の運用改善、デマンド制御・力率改善（進相コンデンサ）、EV充電を織り込んだ契約電力の設計によって電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・店舗構成・稼働実態により異なるため、削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回の自動車ディーラー×施設最適化の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、ショールーム・整備工場・EV充電のどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "ショールームの照明・空調やEV充電併設の契約設計の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（LED化・空調運用）と単価・基本料金の最適化（デマンド/力率・契約設計）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["自動車ディーラーで電気代が重くなる理由（ショールーム照明・空調、整備工場動力、EV充電のデマンド）の構造","ショールームの照明LED化・空調運用改善が購入電力量を下げうる仕組みと適性条件","整備工場のコンプレッサ・塗装ブース・工具の運用改善で消費電力量を縮小する考え方の目安","EV充電器の併設を織り込んだデマンド制御・力率改善・契約電力の最適化で基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（ショールーム・整備工場・EV充電の複合負荷）","detail":"自動車ディーラーは、来店客を迎えるショールームと車両を整備する工場が同一拠点に併存し、性格の異なる電力負荷が複合します。ショールームは大きなガラス面と高い照度・快適な空調が求められ、照明と空調の負荷が大きくなりがちです。整備工場ではコンプレッサ・リフト・塗装ブース・溶接・各種工具が動き、動力負荷が加わります。さらにEV急速充電器を併設すると短時間に大きな電力を使うため、施設全体の電力の使い方が一段と複雑になります。本記事はこうした特性を代表シナリオとして整理します。"},{"label":"規模（低圧〜高圧の店舗・中堅拠点が中心）","detail":"単独店舗のディーラーは低圧〜高圧受電が多く、複数ブランドの大型店舗やサービス拠点を束ねる事業者では高圧の中堅需要に及びます。ショールームの規模や整備ベイの数、EV充電器の口数によって契約電力（デマンド）が変わり、基本料金の水準を左右します。基本料金が契約電力で決まるため、営業時間帯の空調・照明とEV充電のピークをどう重ねないかが料金に直結します。規模の異なる複数パターンを想定します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。ショールームの照明・空調は電力量が大きく電力量料金の比率が高くなりやすい一方、EV急速充電が営業ピークと重なるとデマンドが跳ねて基本料金も膨らみます。量（kWh）の削減と契約電力の抑制の双方が効く構造で、どちらにどれだけ取り組むかを切り分けて考えることが出発点になります。"},{"label":"施設負荷（照明・空調・EV充電に削減余地が残る）","detail":"ショールームは開店中の全点灯・強めの空調が続き、閉店後の待機電力や整備工場の空調も積み上がります。EV充電器は口数と同時充電の管理次第でピークが大きく変わり、制御なしでは基本料金を押し上げます。照明のLED化余地、空調の設定・スケジュール、EV充電の出力制御に削減余地が残りやすい領域です。施設全体の負荷を把握することがディーラーの省エネの起点になります。"},{"label":"コスト構造（照明・空調・動力・充電が絡む）","detail":"ディーラーのエネルギーコストは、ショールームの照明・空調、整備工場の動力（コンプレッサ・塗装ブース等）、EV充電の電力が絡み合い、来店状況や季節・整備量の影響も受けます。エネルギー単体ではなく、営業時間・整備計画・充電運用まで含めて捉える必要があります。どの設備でどれだけ使うかを把握することが判断の出発点になります。本記事の金額はすべて代表シナリオの目安です。"}];
const beforeState = [{"label":"ショールーム照明が旧式で終日全点灯している","detail":"経年したショールームでは、水銀灯・蛍光灯などの旧式照明が終日全点灯し、消費電力量が高止まりしていました。調光や間引き・エリア別制御の仕組みがなく、「昔からこの明るさ」という運用が続き、電力量に跳ね返っていました。閉店後や来客の少ない時間帯の消灯も徹底されず、照明の使い方を定量的に把握する仕組みがない状態でした。"},{"label":"空調が過剰運転で待機ロスも大きい","detail":"大きなガラス面からの日射・放熱でショールームの空調負荷が大きく、設定温度やスケジュールが最適化されず過剰運転になっていました。整備工場側の換気・空調も含め、営業時間外の待機や無人時の稼働が残り、無駄な消費が積み上がっていました。空調とEV充電・照明を横断して最適化する発想が乏しい代表シナリオです。"},{"label":"EV充電・空調・整備動力の同時ピークでデマンドが跳ねる／力率が低い","detail":"EV急速充電が営業ピークの空調・照明やコンプレッサ稼働と同じ時間帯に重なり、契約電力（デマンド）のピークが高止まりしていました。充電の出力制御やピークをずらす運用の仕組みがなく、基本料金が過大になりがちです。加えて誘導性負荷が多く力率が低下し、力率割引を十分に取れていない状態でした。契約電力が実態に対して過大でないかの検証もされていませんでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"拠点全体の電力量は把握できても、ショールーム・整備工場・EV充電別の内訳がリアルタイムに見えず、改善は現場担当者の経験に依存していました。BEMS・エネマネが未整備で、待機電力や異常消費に気づきにくく、LED化・空調運用・充電制御の効果を検証する基盤もありません。多くの拠点で共通する課題です。"}];
const approaches = [{"name":"ショールーム照明のLED化・調光制御","role":"高照度の照明を源流から効率化し購入電力量を削減","detail":"旧式照明を高効率LEDへ更新し、エリア別の調光・人感センサー・タイムスケジュール制御を組み合わせて、必要な明るさを必要な場所・時間だけ確保します。ショールームの演出照明と作業照明を分け、閉店後の消灯を徹底します。照度を落とさずに消費電力量を下げられる領域で、投資回収も比較的読みやすいのが特徴です。"},{"name":"空調の運用改善・高効率化","role":"日射負荷の大きい空調を運用と設備の両面で最適化","detail":"設定温度・スケジュールの最適化、フィルタ清掃、遮熱フィルムやブラインドによる日射負荷の低減で空調の無駄を抑えます。老朽空調は高効率機への更新も選択肢です。整備工場側の換気・空調も無人時の停止を徹底し、ショールームとゾーンを分けて制御します。更新は回収年数の見極めが前提です。"},{"name":"整備工場の動力・運用改善","role":"投資を伴わずに動力設備の稼働ロスを削る","detail":"コンプレッサのエア漏れ点検・吐出圧の適正化、リフト・工具の待機電力削減、塗装ブースの送風・乾燥の運用最適化で無駄な消費を抑えます。まとめ作業や段取りの工夫で稼働の平準化を図り、デマンドピークの抑制にもつなげます。投資を伴わない運用改善は回収が早く、まず着手しやすい打ち手です。効果は整備量や作業内容により幅があります。"},{"name":"EV充電を織り込んだデマンド制御・力率改善・契約電力設計","role":"基本料金・単価面を契約と運用の両面で最適化","detail":"EV充電器の出力制御・スケジューリングで、営業ピークの空調・照明・整備動力との同時ピークを避け、契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて充電口数の増設計画を織り込み、契約電力が実態に対して過大・過小でないかを検証します。量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 中小・単独店舗のショールーム照明LED化＋空調運用改善","before":"低圧〜高圧受電の中小ディーラー単独店舗が、旧式照明の終日全点灯と空調の過剰運転を抱えていた代表シナリオを目安に想定します。設備別の消費は見えておらず、照明・空調のロスが電力量に跳ね返っていました。","after":"ショールーム照明のLED化・調光制御と、空調の設定・スケジュール最適化、日射負荷の低減を組み合わせ、施設全体の消費を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約80万kWh × 改善 約1.5円/kWh ＝ 年間 ▲120万円（検算：80×1.5＝120）。5年累計 ▲120万円 × 5年 ＝ ▲600万円（検算：120×5＝600）。照明・空調の運用改善は比較的着手しやすく回収も早い傾向ですが、実額は設備の状態・稼働・エネルギー単価により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"② 中堅・整備併設店のデマンド制御＋力率改善","before":"整備ベイを複数持つ中堅ディーラーが、コンプレッサ・空調・EV充電の同時ピークでデマンドが高止まりし、力率も低かった代表シナリオを想定します。基本料金が過大で、力率割引を十分に取れていませんでした。","after":"デマンド監視によるピーク平準化と、EV充電の出力制御・進相コンデンサによる力率改善・契約電力の適正化を組み合わせ、基本料金と単価面を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約140万kWh × 改善 約2円/kWh ＝ 年間 ▲280万円（検算：140×2＝280）。5年累計 ▲280万円 × 5年 ＝ ▲1,400万円（検算：280×5＝1400）。契約電力の水準が高いほど効果が出やすい傾向ですが、実額は同時稼働の実態・力率・契約条件により異なります。量（kWh）の削減施策と併せて評価することが前提です。"},{"title":"③ 大規模・複数ブランド拠点のEV充電併設契約設計＋設備更新","before":"複数ブランドの大型拠点で、EV急速充電器の増設と空調・照明の老朽化が重なり、契約電力の設計が実態に合っていなかった代表シナリオを想定します。稼働時間が長く、契約設計と設備更新の双方に削減余地がありました。","after":"EV充電を織り込んだ契約電力設計と出力制御に、ショールーム照明のLED化・高効率空調への更新を重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。","result":"年間使用量 約200万kWh × 改善 約1.8円/kWh ＝ 年間 ▲360万円（検算：200×1.8＝360）。5年累計 ▲360万円 × 5年 ＝ ▲1,800万円（検算：360×5＝1800）。更新は大型投資のため回収年数の見極めが前提で、実額は設備仕様・稼働・補助金採択の有無により変動します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲120万円／②▲280万円／③▲360万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、燃料・電力単価や稼働の変動は織り込んでいません。実際の効果は契約条件・店舗構成・稼働実態により異なります。"},{"label":"削減額の考え方（2段電卓の検算）","detail":"各代表シナリオは、年間使用量×改善単価で年間削減額を算出し（①80×1.5＝120、②140×2＝280、③200×1.8＝360、単位は万kWh・円/kWh・万円）、さらに年間削減額×5年で5年累計を算出しています（①120×5＝600、②280×5＝1,400、③360×5＝1,800、単位は万円）。これは効果の規模感を示すための単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。数値はあくまで目安です。"},{"label":"金額表現の扱い","detail":"ショールーム・整備工場・EV充電を併設するディーラーはエネルギー使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。断定的な普遍化は避け、実額は設備の状態・稼働・エネルギー単価・契約条件で変動する点を併記しています。過度な期待を避け、自社の設備別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、EV充電インフラ・事業用車両EV化の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・設備別使用量の把握","detail":"受電の電力量・デマンド記録に加え、ショールーム照明・空調・整備動力・EV充電の消費、営業時間・整備量・充電回数を集めて棚卸しします。どの設備がいつピークを作り、どれだけ待機・過剰消費を出しているかを把握することが、LED化・空調運用・充電制御・契約最適化の出発点です。BEMSや簡易計測で設備別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、照明LED化・空調運用・充電制御など回収の早い施策と、高効率空調更新やEV充電増設のような大型投資を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。"},{"label":"相見積・補助金／税制の検討","detail":"照明・空調・進相コンデンサ・EV充電器などは複数社から相見積を取り、仕様・保証・保守費・電力計画を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、EV充電インフラ補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、閑散期や改装に合わせて照明・空調更新や充電器増設を計画します。導入後はBEMSで設備別の消費と充電制御の実績をモニタリングし、想定との差異を検証します。運用改善（消灯徹底・デマンド管理）も継続し、PDCAとして効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"照明LED化・空調運用・整備動力の改善は使用量（購入電力量）を減らす取り組み、デマンド制御・力率改善・契約電力の設計は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。ディーラーは照明・空調で使用量が大きい一方、EV充電と営業ピークの重なりによる基本料金の最適化も無視できません。要素を切り分けると投資配分の判断がしやすくなります。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"高効率空調更新やEV充電増設のような大型投資は、初期費用だけでなく想定削減額・保守費・設備の寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"照明・空調運用は投資が小さく効きやすい","detail":"照明のLED化・調光や空調の運用改善は、設備の全面更新に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。終日全点灯や過剰空調として捨てている電力は、購入電力量に直接効きます。大型のEV充電増設や空調更新を検討する前に、照明・空調・運用改善で取れる分を先に取り切る順序が現実的です。効果は設備の状態により幅があります。"},{"label":"EV充電は施設全体の中で位置づける","detail":"EV充電を単体で最適化すると施設全体の最適を逃します。充電のピークは空調・照明・整備動力と重なることで契約電力を押し上げるため、充電単体ではなく施設全体のデマンドの中で捉える必要があります。EV充電単体の電気代・充電料金設計は関連ページに譲り、本記事はショールーム・整備工場・EV充電を横断した施設全体の視点で整理します。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の照明・空調メーカーや充電器ベンダー、電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の設備別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備の状態で効果は大きく変わる","detail":"照明・空調の改善効果は、既存設備の効率・稼働パターン・日射条件に強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでにLED化・高効率化が進んだ拠点や営業時間が短い店舗では効果が小さくなります。導入ありきで進めず、設備別の計測に基づいて削減ポテンシャルを見極めることが重要です。"},{"label":"EV充電増設・空調更新は回収年数の見極めが前提","detail":"高効率空調への更新やEV充電の増設は削減・利便性の効果が大きい反面、投資額も大きく、稼働時間が短い拠点では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。照明・空調・運用改善で取れる分を先に取り、更新・増設は回収年数とライフサイクルで判断することが安全です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、EV充電インフラ補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要になるため、設備別データの整備を先行させると有利です。"},{"label":"デマンド・力率改善だけでは量は減らない","detail":"デマンド制御や力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆に照明LED化・空調運用・整備動力改善は量に効きますが、EV充電と営業ピークの重なりの平準化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。代表シナリオでも両輪で整理しています。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資判断は専門家の診断と自社の設備別データに基づき、複数の選択肢を比較したうえで行ってください。数値の断定的な引用は避けてください。"}];
const checklist = ["受電の電力量・デマンド記録を直近1年分そろえる","ショールーム照明・空調・整備動力・EV充電の消費を計測または推計する","ショールーム照明の種別・点灯時間・調光/消灯運用を点検する","空調の設定温度・スケジュール・日射負荷の低減余地を確認する","整備工場のコンプレッサのエア漏れ・吐出圧・工具の待機電力を点検する","EV充電器の口数・出力・同時充電の運用とピーク重なりを時間帯別に把握する","EV充電・空調・整備動力の同時立ち上げによるデマンドピークを時間帯別に把握する","力率と力率割引・割増の適用状況を契約書で確認する","契約電力が実態（EV充電増設計画を含む）に対して過大・過小でないかを検証する","BEMS・エネマネによる設備別・時間帯別の見える化の導入状況を点検する","SII補助金・GX/CN税制・ものづくり補助金・EV充電インフラ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","照明・空調・EV充電の契約設計と設備更新の優先度を考える材料になる","低圧・高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の設備別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲120万円・▲280万円・▲360万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・店舗構成・稼働実態により異なるため、自社の設備別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事はショールーム照明・空調・EV充電の契約設計・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"この記事とEV充電単体の記事はどう読み分ければよいですか。","answer":"本記事はショールーム・整備工場・EV充電を含む施設全体の電力最適化と契約設計を扱います。EV充電単体の電気代や充電料金の設計を詳しく知りたい場合は、法人のEV充電の基礎や事業用EV充電の電気代のページが対象です。ディーラーではEV充電が営業ピークの空調・照明と重なって契約電力を押し上げるため、まず施設全体で捉えることが有効です。目的に応じて両方を読み分けてください。数値は代表シナリオの目安です。"},{"question":"高効率空調やEV充電増設は必ず得になりますか。","answer":"必ず得になるとは限りません。高効率空調更新やEV充電増設は効果が大きい一方で投資額も大きく、稼働時間が短い拠点では回収年数が長くなります。まず照明LED化・空調運用・整備動力の改善で取れる分を取り切り、更新・増設は補助金・税制の活用可能性も含めた回収年数とライフサイクルコストで判断するのが堅実です。導入ありきではなく、感度分析で価格変動への耐性も確認してください。特定の設備ベンダーを推奨するものではありません。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"EV充電と営業ピークの空調・照明・整備動力の同時立ち上げを避けてデマンドのピークを平準化すると、契約電力に基づく基本料金を抑えられる場合があります。充電の出力制御・スケジューリングやデマンド監視が有効です。あわせて進相コンデンサによる力率改善で力率割引を確保し、契約電力が実態に対し過大でないかを検証します。ただし使用量も大きいため、量の削減と契約設計を併せて検討することが大切です。"},{"question":"デマンド制御と力率改善はどう違いますか。","answer":"デマンド制御は一定時間の最大需要（デマンド）を抑えて契約電力＝基本料金を下げる取り組みで、EV充電・空調・整備動力の同時稼働を避けるのが基本です。力率改善は進相コンデンサで無効電力を補償し、力率割引の確保や力率割増の回避につなげる取り組みです。どちらも使用量そのものを大きく減らすものではないため、照明LED化・空調運用・整備動力改善など量の削減施策と組み合わせて考えることが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、EV充電インフラ・事業用車両EV化の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"照明LED化・空調運用・高効率化で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は設備の状態・稼働により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/car-dealership-electricity-cost-review","title":"自動車ディーラーの電気代見直し","description":"ショールーム・整備工場の電力構造。"},{"href":"/auto-repair-bodyshop-electricity-cost-review","title":"自動車整備・板金の電気代見直し","description":"整備工場の電力論点。"},{"href":"/gas-station-electricity-cost-review","title":"ガソリンスタンドの電気代見直し","description":"給油・洗車・充電併設の論点（近縁）。"},{"href":"/auto-parts-electricity-cost-review","title":"自動車部品の電気代見直し","description":"部品供給側の電力（近縁）。"},{"href":"/corporate-ev-charging-basics","title":"法人のEV充電の基礎","description":"EV充電併設の契約設計。"},{"href":"/ev-charging-electricity-cost-business","title":"事業用EV充電の電気代","description":"充電単体の電気代（施設全体との読み分け）。"},{"href":"/subsidy-ev-charging-infrastructure","title":"EV充電インフラ補助金","description":"充電設備の投資支援。"},{"href":"/subsidy-industrial-vehicle-ev","title":"事業用車両EV化の補助金","description":"車両電動化の投資支援。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyCarDealerWorkshopPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・店舗構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/car-dealership-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車ディーラーの電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・施設負荷・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。関連する業種の論点は{" "}
              <Link href="/car-dealership-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車ディーラーの電気代見直し</Link>
              {" "}や{" "}
              <Link href="/auto-repair-bodyshop-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自動車整備・板金の電気代見直し</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代の構造上の課題を整理します。これらはショールームと整備工場・EV充電を併設する多くの自動車ディーラーで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、ショールーム照明・空調を軸に、整備動力の運用改善・EV充電を織り込んだデマンド/力率改善・契約電力設計を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・店舗構成・稼働実態により異なります。実在企業の事例ではありません。年間削減額は年間使用量×改善単価、5年累計は年間削減額×5年の単純累計です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と設備別使用量の取得から始めましょう。</p>
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
            <ConsultCta from="car-dealer-workshop" />
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
            heading="ショールーム・整備工場の省エネ、EV充電併設の契約設計を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・EV充電設計の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
