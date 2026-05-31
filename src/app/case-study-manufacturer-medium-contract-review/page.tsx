import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "中堅製造業×契約見直しで電気代を削減した事例｜高圧500〜2,000kWのデマンド適正化・相見積（代表シナリオ）";
const pageDescription = "高圧500〜2,000kW規模の中堅製造業が、契約電力の適正化・デマンド制御・力率改善・相見積による契約見直しで電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-manufacturer-medium-contract-review";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["中堅製造業 電気代 削減","高圧 契約電力 見直し","デマンド制御 工場","力率改善 基本料金","製造業 相見積 事例"],
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

const h1Text = "中堅製造業×契約見直し：高圧500〜2,000kWの電気代を削減した代表事例";
const breadcrumbTitle = "中堅製造業×契約見直しの事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。金属加工や組立を主体とする中堅製造業(高圧500〜2,000kW)が、設備投資ではなく契約・運用の見直しで電気代を抑えた事例を、業界統計と公開事例から再構成して解説します。契約電力(デマンド)の実量制と過大契約、最大デマンドの実測、力率改善、市場連動と固定の使い分け、相見積、燃料費調整の上限確認まで、中立の社団法人の立場で具体的に整理します。実数値は契約条件・使用実態により異なります。";
const d1CtaLead = "自社が本記事のようなケースに当てはまるかは、契約電力・業種・使用規模を入力するだけで概算できます。業種別電気代計算機を使えば、中堅製造業の負荷特性を踏まえた電気代の試算と、見直し余地の当たりをつける材料が得られます。まずは現状の契約電力と月々の使用量を手元に、自社の立ち位置を数値で確認してみてください。試算結果は代表シナリオに基づく目安です。";
const simulatorCtaLead = "自社の電気料金が業界水準に対してどの位置にあるか、まずは概算でつかむことが見直しの第一歩です。本シミュレーターでは契約電力や使用量から電気代上昇・高騰のリスクを試算でき、契約見直しの優先度を判断する材料になります。中堅製造業の負荷特性を意識しながら、基本料金と従量部分のどちらに余地があるかを確認してみてください。結果は代表シナリオに基づく目安です。";
const whatYouLearn = ["高圧の実量制デマンドの仕組みと過大契約が起きる理由","最大デマンドを実測し基本料金の根拠を点検する手順","力率改善・ピークシフトなど運用中心の削減手法の効き方","市場連動と固定単価メニューの使い分けと燃調上限の確認ポイント","規模別の代表シナリオで見る削減率レンジと再現の流れ"];
const premise = [{"label":"業種特性(金属加工・組立)","detail":"中堅製造業のうち金属加工・組立系は、誘導電動機やコンプレッサ、溶接機、加熱炉など回転機・力率の低い負荷を多く抱えます。稼働は日勤2交替や夜勤帯にわたり、段取り替えや一斉起動でデマンドが瞬間的に跳ねやすいのが特徴です。空調・乾燥工程を併せ持つ工場では夏季の冷却負荷も重なります。こうした負荷特性が基本料金と力率割引の双方に影響するため、契約見直しの前提として工程ごとの負荷を把握しておくことが重要になります。"},{"label":"規模(高圧500〜2,000kW)","detail":"本ケースは契約電力が概ね500kWから2,000kWの高圧受電区分を想定します。500kW未満の小規模高圧と比べ、デマンド管理や力率の影響額が大きく、見直し余地が金額で表れやすい帯域です。一方で特別高圧(2,000kW以上)のように自前変電を抱えるほどではなく、契約・運用の工夫で効果を出しやすい中間層と位置づけられます。複数ラインや複数棟を持つ場合は受電点の構成も論点になります。"},{"label":"契約区分(高圧・実量制)","detail":"高圧500kW以上の多くは、過去1年間の最大需要電力(デマンド)で契約電力が決まる実量制が基本です。直近12か月のうち最大の30分デマンド値が翌月以降の契約電力として据え置かれるため、一度の一斉起動で記録した高い値が1年間基本料金を押し上げる構造になります。協議制を併用する場合もありますが、いずれにせよ過去ピークの管理が基本料金の鍵を握る点を前提とします。"},{"label":"負荷パターン(デマンドの跳ね)","detail":"始業時の設備一斉起動、昼休み明けの再稼働、夏季空調の立ち上がりが重なる時間帯にデマンドのピークが集中しがちです。30分単位の需要電力で評価されるため、数分の同時起動でも区間平均が高ければピークとして記録されます。実際には常時その水準を使っていなくても、年に数回の跳ねが契約電力を決めてしまう例が少なくありません。負荷の同時性と起動順序が、運用改善の主要な着眼点になります。"},{"label":"コスト構造(基本料金と力率割引)","detail":"高圧の電気料金は、契約電力に基づく基本料金と、使用量に応じた電力量料金、そして燃料費調整・再エネ賦課金で構成されます。基本料金には力率割引・割増が適用され、力率が基準を下回ると割増、上回ると割引となります。電力量料金には市場価格や燃料価格が反映されるため、固定単価か市場連動かでリスク特性が変わります。削減を考える際は、基本料金(契約電力・力率)と従量部分(単価・使用量)を分けて点検することが出発点です。"}];
const beforeState = [{"label":"過去ピーク据え置きによる過大契約","detail":"増設時や繁忙期に一度記録した高いデマンド値が実量制で据え置かれ、その後ラインを縮小・統合した後も契約電力が下がらないまま基本料金を払い続けている状態です。日々の実需要は契約電力より相当低いにもかかわらず、過去ピークが基準として残っているため、是正余地に気づきにくいのが典型的な課題でした。"},{"label":"力率割増の発生","detail":"誘導電動機やコンプレッサ中心の負荷で進相コンデンサの容量や配置が負荷実態と合わず、力率が基準値を下回って割増が生じていました。逆に軽負荷時間帯は進み力率となり、いずれの場合も最適点から外れて基本料金に不利な係数が掛かっている状態です。力率の実測データを持たないまま運用していた点が背景にありました。"},{"label":"燃調・市場連動リスクの不透明さ","detail":"契約メニューが市場連動を含むのか、燃料費調整に上限が設定されているのかを十分に把握しないまま更新を重ね、燃料価格や市場価格の変動が請求にどう波及するか説明できない状態でした。価格高騰局面で想定外の上振れを経験し、リスクの所在が見えにくいことが意思決定の障害になっていました。"},{"label":"相見積・比較の不在","detail":"長年同一の契約を自動更新し、他社メニューや別契約区分との比較を行っていませんでした。基本料金単価・電力量料金・燃調条件を横並びで評価する仕組みがなく、自社の契約が市場水準に対して妥当かを判断できないまま据え置かれていた点が、削減機会を逃す要因になっていました。"}];
const approaches = [{"name":"最大デマンドの実測と契約電力の適正化","role":"基本料金の土台を点検","detail":"まず受電点のデマンド計や30分需要データを過去12か月分収集し、契約電力に対する実際のピーク使用率を可視化しました。過去ピークが一過性で再現性が低いと判断できる場合は、契約電力の引き下げ余地を検討します。あわせて一斉起動の分散や起動順序の見直し、ピーク到達前のアラート運用で、将来のピークを抑える運用ルールを整え、基本料金の根拠そのものを軽くする方向で進めました。"},{"name":"力率改善(進相コンデンサの最適化)","role":"力率割引を取りに行く","detail":"負荷時間帯ごとに力率を実測し、進相コンデンサの容量・台数・自動力率調整の設定を負荷実態に合わせて見直しました。重負荷時に基準を下回らないようにしつつ、軽負荷時の進み過ぎも抑え、力率割引が安定して得られる状態を目指します。設備の新規大規模投資ではなく、既設コンデンサの調整・段階切替の運用最適化を中心に据え、基本料金の係数を有利にしました。"},{"name":"メニュー区分の最適化(市場連動と固定の使い分け)","role":"従量リスクを設計","detail":"電力量料金について、固定単価メニューと市場連動メニューのリスク特性を比較しました。価格変動を許容できる範囲、季節別・時間帯別の使用構成、ピークシフトの実行可能性を踏まえ、全量を一方に寄せるのではなく、固定と連動の比率を自社のリスク許容度に合わせて設計する考え方を採りました。あわせて燃料費調整の上限の有無を確認し、上振れ時の影響範囲を契約段階で見える化しました。"},{"name":"相見積と契約条件の横並び比較","role":"条件の妥当性を検証","detail":"基本料金単価・電力量料金・燃調条件・割引体系・契約期間・解約条件を統一フォーマットに整理し、複数の供給メニューを横並びで比較しました。単純な単価の安さだけでなく、燃調上限や市場連動の有無、需要パターンとの相性まで含めて総合評価します。中立の立場では特定の供給先を推すのではなく、自社の負荷特性に対してどの条件が整合的かを判断する材料を揃えることを重視しました。"}];
const caseScenarios = [{"title":"高圧500kW級・単一ライン工場","before":"過去ピーク据え置きで契約電力に対する平常使用率が低く、基本料金が割高な状態。力率も基準前後で割引を取り切れていない代表シナリオです。","after":"デマンド実測で再現性の低いピークを特定し契約電力を見直し、進相コンデンサ調整で力率を安定化。電気代全体の削減率は概ね数%から一割程度の幅が目安です。","result":"基本料金中心に効果が表れ、月数万円から数十万円規模の圧縮が代表的な目安。実額は契約条件・使用実態により異なります。"},{"title":"高圧1,000kW級・2交替の金属加工","before":"始業時と夜勤立ち上げの一斉起動でデマンドが跳ね、過去ピークが基本料金を押し上げ。市場連動の影響範囲も不透明な状態の代表シナリオです。","after":"起動分散とピーク監視運用でデマンドを抑制し、固定と市場連動の比率を再設計。燃調上限も確認し、電気代の削減率は概ね一割前後の幅が目安です。","result":"基本料金とリスク低減の双方に効果。月数十万円規模の圧縮が代表的な目安で、実数値は使用実態により変動します。"},{"title":"高圧1,800kW級・空調負荷併設工場","before":"夏季の冷却・空調負荷と生産設備のピークが重なり、契約電力が高止まり。力率割増も季節で発生する代表シナリオです。","after":"季節ピークの集中時間帯をシフトし、力率調整と契約電力の見直しを併用。相見積で従量条件も再設定し、削減率は数%から一割超の幅が目安です。","result":"夏季ピーク対策が効き、年間ベースで月数十万円から百万円規模の幅で圧縮する代表的な目安。実額は条件により異なります。"},{"title":"多工場・受電点分散の中堅製造業","before":"複数拠点で個別に過大契約や力率割増が点在し、全社横断の比較がない代表シナリオ。拠点ごとに条件がばらつき妥当性を評価できていません。","after":"全拠点のデマンドと力率を一元集計し、契約電力・メニュー・燃調条件を横並びで最適化。全社合算の削減率は概ね数%から一割程度の幅が目安です。","result":"拠点横断の是正で総額効果が大きく、全社で月数十万円から数百万円規模の幅が代表的な目安。実数値は各拠点の実態で変わります。"}];
const dataNotes = [{"label":"数値の位置づけ","detail":"本記事のBefore/Afterおよび削減率は、特定企業の実績ではなく、業界統計と公開事例から再構成した代表レンジです。精密な金額の断定は避け、削減率(%)の幅や月数十万円規模といった目安表現で示しています。自社の効果は契約条件・負荷実態・季節性により大きく異なるため、あくまで検討の出発点としてご参照ください。"},{"label":"出典の考え方","detail":"数値レンジは、経済産業省・資源エネルギー庁の公開資料、SII採択事例集、業界統計から再構成しています(2025年10月時点・代表シナリオ)。引用に際しては実在企業の優劣評価や推奨は行わず、制度・規格は正式名称で参照しています。出典の数値をそのまま自社に当てはめるのではなく、自社データで再計算することを前提としています。"},{"label":"デマンド・力率の前提","detail":"契約電力は過去1年間の最大需要電力で決まる実量制を前提とし、力率は基準値からの乖離で基本料金の係数が変動するものとして説明しています。30分需要電力での評価、進相コンデンサによる力率改善といった一般的な制度・運用を前提に置いており、個別の供給約款の条件は契約時に必ず確認が必要です。"},{"label":"市場連動・燃調の前提","detail":"電力量料金には燃料費調整と市場価格の変動が反映されることを前提とし、固定単価と市場連動の使い分けはリスク特性の違いとして整理しています。燃料費調整の上限の有無は契約により異なるため、本記事では一律の数値を断定せず、確認すべき論点として提示しています。価格高騰局面の影響は時期と契約条件で大きく変わります。"}];
const process = [{"label":"データ収集","detail":"受電点のデマンド計や検針データ、過去12か月以上の請求明細を集め、契約電力・最大デマンド・力率・電力量料金・燃調額・再エネ賦課金を費目別に分解します。複数拠点がある場合は同一フォーマットで一元化し、拠点間の条件差を比較できる状態を整えます。まずは現状を数値で見える化することが、後の判断の精度を左右します。"},{"label":"分析・診断","detail":"契約電力に対する実ピークの使用率、ピークの発生時間帯と再現性、力率の時間帯別推移を分析します。過大契約・力率割増・燃調上限の有無といった是正候補を洗い出し、運用改善と契約見直しのどちらで対応すべきかを切り分けます。設備投資の前に、契約・運用で取れる余地を先に評価するのが本ケースの基本方針です。"},{"label":"相見積・条件比較","detail":"基本料金単価・電力量料金・燃調条件・割引体系・契約期間・解約条件を統一表に整理し、複数メニューを横並びで比較します。単価の安さだけでなく、自社の負荷パターンや市場連動リスクとの相性まで含めて総合評価します。中立の立場では、特定の供給先を推奨せず、判断材料を揃えることに徹します。"},{"label":"意思決定と効果検証","detail":"経理・生産・設備の各部門で削減見込みとリスクを共有し、固定と市場連動の比率や契約電力の目標値を合意します。実施後はデマンドと力率、費目別費用を継続モニタリングし、想定との差を検証して運用ルールへ反映します。一度きりではなく、季節や生産計画の変化に応じて見直す体制を残すことが効果の定着につながります。"}];
const viewpoints = [{"label":"基本料金と従量を分けて見る","detail":"電気代を契約電力ベースの基本料金と、使用量ベースの電力量料金に分解して評価します。どちらに削減余地があるかで打ち手が変わるため、合計額だけで判断せず費目別に点検することが、再現性のある見直しの出発点になります。"},{"label":"ピークの再現性を見極める","detail":"過去ピークが恒常的なものか、一過性の一斉起動によるものかを区別します。再現性が低いピークなら運用改善や契約電力の見直し余地があり、恒常的なら設備・工程側の対応が必要です。実測データに基づく見極めが過大契約の是正につながります。"},{"label":"リスク許容度に応じた比率設計","detail":"市場連動か固定かは優劣ではなく、自社が価格変動をどこまで許容できるかで選びます。全量を一方に寄せず比率で設計する発想を持つと、コストと安定性のバランスを自社の事情に合わせて調整できます。"},{"label":"燃調・割引条件まで含めた総合評価","detail":"単価の安さだけでメニューを選ぶと、燃料費調整の上限や力率割引の条件で総額が逆転することがあります。割引体系・燃調・契約期間まで含めて総合的に評価する視点が、見かけの安さに惑わされない判断を支えます。"},{"label":"中立の判断材料を揃える","detail":"供給先からの提案は自社の負荷特性に照らして相対化することが重要です。中立の立場では特定の電力会社を推奨せず、複数条件を横並びで比較できる材料を揃え、自社で意思決定する姿勢を基本とします。"}];
const cautions = [{"label":"契約電力の下げ過ぎリスク","detail":"基本料金を下げたいあまり契約電力を過度に引き下げると、繁忙期や設備一斉起動でデマンドが超過し、かえって契約電力が引き上げられたり超過の影響を受けたりします。実測データに基づき、余裕を見込んだ適正水準を設定することが大切です。"},{"label":"力率改善は万能ではない","detail":"進相コンデンサの容量を増やせば必ず有利になるわけではなく、軽負荷時に進み過ぎると別の不利が生じます。負荷時間帯ごとの実測に基づき、重負荷・軽負荷の双方で基準に収まる調整が必要で、過剰な投資は費用対効果を損ないます。"},{"label":"市場連動=安い という誤解","detail":"市場連動は平常時に有利に見えても、価格高騰局面では大きく上振れする可能性があります。安さだけに着目せず、変動リスクを許容できるか、ピークシフトで吸収できるかを併せて評価する必要があります。固定との比率設計が現実的です。"},{"label":"燃調上限の有無の見落とし","detail":"燃料費調整に上限が設定されているかどうかで、燃料価格高騰時の負担が大きく変わります。契約更新時に上限の有無を確認しないまま単価だけで比較すると、想定外の請求につながりかねません。契約段階での確認が欠かせません。"},{"label":"削減率は自社で再計算すべき","detail":"本記事の削減率や金額はあくまで代表シナリオの目安であり、自社にそのまま当てはまるものではありません。負荷特性・契約条件・季節性で結果は大きく変わるため、必ず自社のデータで再計算し、過度な期待を前提に意思決定しないことが重要です。"}];
const checklist = ["過去12か月のデマンドデータを収集する","契約電力に対する実ピーク使用率を算出","ピークの発生時間帯と再現性を確認する","設備一斉起動の有無と起動順序を点検","時間帯別の力率を実測して把握する","進相コンデンサの容量と設定を見直す","基本料金と電力量料金を費目別に分解","燃料費調整の上限の有無を確認する","市場連動と固定の比率を検討する","複数メニューを統一表で相見積する","契約期間と解約条件を比較確認する","実施後にデマンドと力率を継続監視する"];
const simulatorCtaBullets = ["契約電力と使用量からリスクを概算できる","基本料金と従量部分の構成を把握できる","見直しの優先度を判断する材料が得られる","代表シナリオに基づく目安として活用できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ、本記事は実在企業の実績ではなく、業界統計や公開事例から再構成した架空企業の代表シナリオです。Before/Afterや削減率は精密な金額を断定せず、削減率の幅や月数十万円規模といった目安で示しています。出典は経済産業省・資源エネルギー庁の公開資料やSII採択事例集、業界統計です(2025年10月時点・代表シナリオ)。実数値は契約条件・使用実態により異なるため、必ず自社データで再計算してください。"},{"question":"特定の電力会社や契約形態を推奨しているのですか。","answer":"いいえ、本記事は中立の社団法人の立場で書かれており、特定の電力会社・契約形態を推奨するものではありません。市場連動と固定のどちらが優れているといった優劣評価も行いません。あくまで自社の負荷特性に照らして複数の条件を横並びで比較し、自社で判断するための材料を提供することを目的としています。最終的な選択は各社の使用実態とリスク許容度に基づいて行ってください。"},{"question":"実量制の契約電力はどう決まるのですか。","answer":"高圧500kW以上の多くは実量制で、過去1年間(直近12か月)の最大需要電力により契約電力が決まります。30分単位の需要電力で評価され、最大値が翌月以降の契約電力として据え置かれるため、一度の一斉起動で記録した高いピークが1年間基本料金を押し上げる構造です。協議制を併用する場合もありますが、いずれも過去ピークの管理が基本料金の鍵となります。詳細は供給約款で確認してください。"},{"question":"設備投資をせずに電気代を下げられますか。","answer":"はい、本ケースは設備投資ではなく契約・運用中心の見直しを前提としています。過去ピークの再現性を見極めて契約電力を適正化する、設備の一斉起動を分散してデマンドを抑える、既設の進相コンデンサ設定を最適化して力率割引を取る、相見積で契約条件を見直す、といった手法が中心です。大規模な投資なしでも基本料金や従量条件の余地を点検することで、削減につながる可能性があります。"},{"question":"力率改善はどの程度効果がありますか。","answer":"力率は基本料金の割引・割増に直結するため、改善すれば係数が有利になります。ただし効果は元の力率水準と負荷特性によって異なり、進相コンデンサを増やせば必ず有利になるわけではありません。重負荷時に基準を下回らないようにしつつ、軽負荷時に進み過ぎないよう調整することが重要です。時間帯別の力率実測に基づき、既設設備の設定最適化から検討するのが現実的です。"},{"question":"市場連動メニューと固定メニューはどう選べばよいですか。","answer":"両者は優劣ではなくリスク特性の違いです。市場連動は平常時に有利に見える一方、価格高騰局面では上振れの可能性があります。固定は安定する代わりに割安局面の恩恵を受けにくい面があります。本ケースでは全量を一方に寄せず、価格変動をどこまで許容できるか、ピークシフトで吸収できるかを踏まえ、自社のリスク許容度に応じて固定と連動の比率を設計する考え方を採っています。"},{"question":"燃料費調整の上限は必ず確認すべきですか。","answer":"はい、燃料費調整に上限が設定されているかどうかで、燃料価格高騰時の負担が大きく変わります。上限の有無を確認しないまま単価だけで比較すると、価格上昇局面で想定外の請求につながる可能性があります。契約更新や相見積の際には、基本料金単価や電力量料金だけでなく、燃調条件や割引体系、契約期間まで含めて総合的に比較することをおすすめします。確認は契約段階で行うことが重要です。"},{"question":"多工場の場合はどう進めればよいですか。","answer":"複数拠点では、各拠点で個別に過大契約や力率割増が点在しがちです。まず全拠点のデマンド・力率・費目別費用を同一フォーマットで一元集計し、拠点間の条件差を見える化します。そのうえで契約電力・メニュー・燃調条件を横並びで比較し、全社最適の観点で是正します。拠点横断の比較は総額効果が大きくなりやすい一方、実数値は各拠点の使用実態で変わるため、拠点ごとの再計算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/metal-processing-electricity-cost-review","title":"金属加工業の電気代見直し","description":"金属加工の負荷特性と削減観点。"},{"href":"/assembly-factory-electricity-cost-review","title":"組立工場の電気代見直し","description":"組立工程の電力構造と見直し。"},{"href":"/osaka-sme-factory-electricity-cost","title":"大阪の中小工場の電気料金","description":"業種×地域クロスの参考。"},{"href":"/shizuoka-manufacturing-electricity-cost","title":"静岡の製造業の電気料金","description":"業種×地域クロスの参考。"},{"href":"/subsidy-manufacturing-strategy","title":"製造業の補助金活用戦略","description":"省エネ投資の補助金活用。"},{"href":"/subsidy-vs-contract-review-priority","title":"補助金と契約見直しの優先順位","description":"投資前にやる契約最適化。"},{"href":"/demand-control-reduction-effect","title":"デマンド制御の削減効果","description":"ピーク抑制と基本料金。"},{"href":"/extra-high-voltage-contract-review-points","title":"特別高圧の契約見直しポイント","description":"大規模需要家の見直し論点。"},{"href":"/case-study-factory-large-energy-saving-investment","title":"大規模工場×省エネ投資の事例","description":"規模が大きいケースの比較。"},{"href":"/case-study-manufacturing-cost-reduction","title":"製造業：契約見直しで18%削減の事例","description":"既存の製造業削減事例。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyManufacturerMediumContractReviewPage() {
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
