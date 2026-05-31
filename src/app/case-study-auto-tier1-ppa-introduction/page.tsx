import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "自動車部品Tier1のPPA導入事例｜サプライチェーンCN要請に応える再エネ調達（代表シナリオ）";
const pageDescription = "自動車部品Tier1サプライヤーが、完成車メーカーのサプライチェーン脱炭素要請に応えるためPPA(電力購入契約)で再エネを調達した代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-auto-tier1-ppa-introduction";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["自動車部品 PPA 再エネ","Tier1 サプライチェーン 脱炭素","オフサイトPPA 工場","オンサイトPPA 自家消費","Scope2 削減 事例"],
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

const h1Text = "自動車部品Tier1×PPA導入：CN要請に応えた再エネ調達の代表事例";
const breadcrumbTitle = "自動車部品Tier1×PPA導入の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。自動車部品Tier1サプライヤーが、完成車メーカーから広がるサプライチェーン全体の脱炭素要請に応えるため、PPA(電力購入契約)で再生可能エネルギーを調達した代表事例を、業界統計と公開事例から再構成して解説します。オンサイト・オフサイト、フィジカル・バーチャルといったPPAの形態差、追加性、長期契約による価格固定効果、Scope2削減の実務を中立的な社団法人の視点で整理します。";
const d1CtaLead = "自社が本事例と同様のケースに当てはまるか、まず電力使用量とコスト構造の見える化から始めましょう。業種別電気代計算機を使えば、自動車部品製造のような電力多消費業種の使用量・契約区分を入力し、現状の電気代水準やコスト構造の目安を試算できます。PPA導入の検討は、現状把握と削減余地の確認が出発点です。代表シナリオと自社の前提がどれだけ近いかを確かめてみてください。";
const simulatorCtaLead = "PPA導入の検討は、自社の電力使用量とリスク構造の把握から始まります。法人向け電気料金上昇・高騰リスクシミュレーターを使えば、燃料費調整や市場価格変動が自社のコストに与える影響の目安を診断できます。価格変動リスクの大きさを把握することで、長期固定価格を持つPPAがどの程度のヘッジになるかを考える材料が得られます。まずは現状のリスクを見える化してみてください。";
const whatYouLearn = ["完成車メーカーのカーボンニュートラル要請がTier1サプライヤーに波及する仕組みと、Scope2・Scope3対応の位置づけ","オンサイトPPA・オフサイトPPA・フィジカルPPA・バーチャルPPAの違いと、それぞれが適する拠点条件","PPAにおける追加性(アディショナリティ)の考え方と、なぜ調達側が重視するのか","長期契約による電力価格の固定効果と、市場価格変動リスクをどう平準化するか","規模・拠点形態別の代表シナリオで見る、削減率レンジとコスト構造の変化の目安"];
const premise = [{"label":"業種特性(プレス・成形・熱処理の電力多消費)","detail":"自動車部品Tier1は、プレス機・射出成形機・溶接・熱処理炉・塗装乾燥炉・コンプレッサなど電力消費の大きい設備を多数稼働させます。とくに熱処理炉や乾燥炉は連続運転で基底負荷が高く、成形機やプレスは稼働ピーク時に瞬時需要が跳ね上がる傾向があります。工場全体では基底負荷と稼働ピークが重なるため、再エネ調達と省エネを併用して総使用量を抑える設計が前提となります。"},{"label":"規模(年間電力使用量と契約電力)","detail":"本シナリオの代表企業は、年間電力使用量がおおむね数百万〜数千万kWh規模の中堅Tier1を想定します。契約区分は高圧または特別高圧で、複数の生産ラインを持つ単一大規模拠点、または地理的に分散した複数中小拠点という二類型を扱います。使用量が大きいほどPPAの固定費按分が有利になりやすい一方、立地条件で実現可能な形態が変わるため、拠点ごとの個別設計が必要です。"},{"label":"契約区分(高圧・特別高圧)","detail":"大規模拠点では特別高圧、中規模拠点では高圧での受電を想定します。特別高圧では基本料金の比率が相対的に高く、需要のピーク管理がコストに直結します。オンサイトPPAで自家消費分を増やすと買電量が減り基本料金にも影響しますが、託送料金や系統側の制約も考慮が必要です。契約区分により採用しやすいPPA形態と経済性が異なる点が、設計上の重要な分岐になります。"},{"label":"負荷パターン(2交代・3交代と季節変動)","detail":"Tier1工場は受注変動に応じて2交代・3交代を切り替えるため、平日昼夜で負荷が大きく変わります。夜間も熱処理炉や空調が稼働し基底負荷が残るのが特徴です。季節性では、夏季の空調・コンプレッサ負荷増、冬季の暖房・乾燥工程の負荷が重なります。太陽光中心のオンサイトPPAは昼間の自家消費に強い一方、夜間負荷はオフサイトや別手段で補う組み合わせ設計が現実的です。"},{"label":"コスト構造(電力費・燃料費調整・再エネ賦課金)","detail":"電力コストは基本料金・従量料金に加え、燃料費調整額や再生可能エネルギー発電促進賦課金で大きく変動します。燃料価格高騰局面では従量単価が膨らみ、製造原価の変動要因になります。PPAは長期固定価格で電力の一部を調達することで、市場連動部分の変動を平準化する狙いがあります。コスト構造全体に占める電力費の割合と変動幅を把握することが、PPA設計の出発点になります。"}];
const beforeState = [{"label":"完成車メーカーからの再エネ・CN要請の本格化","detail":"近年、完成車メーカー各社が公表するカーボンニュートラル目標を背景に、サプライチェーン全体での排出削減が取引上のテーマとなりつつあります。Tier1サプライヤーには、製品単位の排出量データ提出や再エネ比率の報告を求められる場面が増えています。見直し前の代表企業は、要請に応える具体的な再エネ調達手段を持たず、市販の証書購入に頼る部分的対応にとどまり、追加性のある電源確保が課題でした。"},{"label":"電力市場価格変動による製造原価の不安定化","detail":"見直し前は電力の大部分を市場連動的な契約で調達しており、燃料価格の高騰局面で従量単価が膨らみ、製造原価が読みにくい状況でした。受注見積りの段階で電力コストの前提が立てづらく、価格変動が利益率を圧迫する要因になっていました。電力費の変動幅が大きいほど中長期の設備投資判断も難しくなり、価格固定の仕組みを求める動機が強まっていました。"},{"label":"Scope2排出量の可視化・削減手段の不足","detail":"Before状態では、購入電力に伴うScope2排出量の算定はしていたものの、削減の打ち手が限られていました。系統電力の排出係数に依存するため、自社努力だけでは削減が頭打ちになりがちでした。さらに完成車メーカーからはScope3(購入製品・サービス)としての把握も意識されはじめ、Tier1側の電源由来排出を具体的に下げる必要性が高まっていました。"},{"label":"省エネ施策の頭打ちと追加削減の限界","detail":"高効率モーターやインバータ化、コンプレッサの台数制御など省エネ施策は一巡し、使用量削減だけでは目標達成が難しい段階に入っていました。熱処理炉や乾燥炉のような連続負荷は省エネ余地が限られ、これ以上の削減は電源そのものの脱炭素化に踏み込む必要がありました。省エネとの併用を前提に、再エネ電源の確保が次の一手として検討されました。"}];
const approaches = [{"name":"オンサイトPPA(自家消費型太陽光)","role":"屋根・敷地を活用した昼間負荷の脱炭素化","detail":"工場屋根や遊休地に発電事業者が太陽光設備を設置し、発電した電力を需要家が自家消費する形態です。需要家は初期投資なしで設備を利用でき、発電分は託送を経由しないため再エネ賦課金や託送料金の対象外となる利点があります。Tier1工場は屋根面積が大きく昼間負荷が高いため、2交代昼間ピークと太陽光の発電カーブが整合しやすく、自家消費率を高めやすいのが特徴です。"},{"name":"オフサイトPPA(フィジカル)","role":"遠隔地の再エネ電源を系統経由で物理調達","detail":"離れた場所にある太陽光・風力などの発電所から、系統(送配電網)を経由して実際の電力を需要家へ供給する形態です。自社敷地に十分な設置余地がない拠点でも大規模な再エネ調達が可能で、託送料金が発生する一方、長期の固定価格で電力量を確保できます。夜間負荷の大きい3交代拠点や、屋根設置だけでは不足する大規模需要を補う手段として組み合わせます。"},{"name":"バーチャルPPA(環境価値の調達)","role":"物理供給と切り離した環境価値の長期確保","detail":"電力そのものは従来どおり調達しつつ、再エネ発電所が生み出す環境価値(証書相当)を長期契約で確保する形態です。物理的な電力供給と切り離せるため、複数拠点に環境価値を柔軟に配分でき、立地制約を受けにくい利点があります。差金決済型では市場価格との差額を清算する仕組みもあり、価格変動のヘッジと追加性のある環境価値確保を両立する選択肢として検討されます。"},{"name":"省エネ・需要平準化との併用(BEMS活用)","role":"総需要を下げ再エネ調達効率を高める土台","detail":"PPA導入と並行して、BEMSやエネルギー管理システムでデマンドを見える化し、ピークシフトや設備の運転最適化を進めます。熱処理炉の運転スケジュール調整やコンプレッサの台数制御で総需要と契約電力を抑えれば、必要な再エネ調達量も減り、PPAの経済性が高まります。再エネ調達は省エネを尽くした上での最終手段という位置づけで、両者を組み合わせる設計が中立的に推奨される考え方です。"}];
const caseScenarios = [{"title":"代表シナリオA: 大規模単一拠点×オンサイトPPA(屋根設置)","before":"特別高圧の大規模拠点で、購入電力の再エネ比率はごく一部にとどまり、Scope2排出のほぼ全量が系統電力由来という代表状況です。","after":"広い工場屋根に自家消費型太陽光を導入し、昼間ピーク時の買電を一定程度オンサイト発電で置き換えた目安です。年間使用量に対する再エネ充当はおおむね一桁台後半〜十数パーセント規模が代表レンジです。","result":"電力由来Scope2の削減率はおおむね10〜20パーセント規模が代表的な目安で、昼間買電量と基本料金の一部低減も見込めます。実数値は屋根面積・日射条件・自家消費率により異なり、これは代表シナリオ・目安です。"},{"title":"代表シナリオB: 大規模需要×オフサイトPPA(フィジカル)","before":"屋根設置だけでは需要を賄えない特別高圧拠点で、3交代運転により夜間も基底負荷が高く、再エネ充当が難しかった代表状況です。","after":"遠隔の大規模再エネ電源とフィジカルPPAを締結し、系統経由で相当量の再エネ電力を長期固定価格で調達した目安です。屋根設置と合わせ、再エネ充当比率を大きく引き上げられる構成です。","result":"Scope2削減率はおおむね30〜50パーセント規模が代表的な目安で、長期固定価格による電力費変動の平準化効果も期待できます。実数値は契約量・託送料金・電源稼働率により異なり、代表シナリオ・目安です。"},{"title":"代表シナリオC: 屋根借りモデル×複数中小拠点(オンサイト分散)","before":"高圧受電の中小拠点が複数あり、各拠点単独では再エネ調達の規模メリットが出にくく、対応が後回しになっていた代表状況です。","after":"各拠点の屋根を発電事業者に貸し出す屋根借りモデルで、拠点ごとにオンサイトPPAを導入し、初期投資を抑えつつ複数拠点を一括で脱炭素化した目安です。","result":"拠点群全体でのScope2削減率はおおむね10〜25パーセント規模が代表的な目安です。拠点ごとの屋根条件で差が出るため、これは代表シナリオ・目安であり、実数値は各拠点の使用実態により異なります。"},{"title":"代表シナリオD: 複数拠点横断×バーチャルPPA併用","before":"立地制約で物理的な再エネ導入が難しい拠点を含み、グループ全体で追加性のある環境価値をまとめて確保したい代表状況です。","after":"オンサイト・オフサイトを導入しつつ、不足分をバーチャルPPAで補い、長期契約で環境価値を確保しながら複数拠点へ柔軟に配分した目安です。","result":"グループ全体の実質再エネ比率を大きく高められ、Scope2削減率はおおむね40〜60パーセント規模が代表的な目安です。差金決済の条件や配分方針により異なり、代表シナリオ・目安です。"}];
const dataNotes = [{"label":"数値の位置づけ(代表レンジである旨)","detail":"本記事のBefore/Afterや削減率はすべて、業界統計や公開事例から再構成した代表レンジ・目安です。特定企業の実績を示すものではなく、精密な金額の断定も避けています。削減率はパーセントの幅で示し、金額に触れる場合も月数十万円規模といった幅表現にとどめます。実数値は契約条件・使用実態・立地により大きく異なります。"},{"label":"出典の考え方(公的資料・採択事例集等)","detail":"前提となる制度や数値レンジは、経済産業省・資源エネルギー庁の公開資料、SII(環境共創イニシアチブ)が公表する補助金採択事例集、各種業界統計から再構成しています(2025年10月時点・代表シナリオ)。出典は一般に公開された情報に限り、個別企業の非公開データは使用していません。"},{"label":"排出係数と算定の前提","detail":"Scope2の削減率は、系統電力の排出係数を基準に再エネ充当分を差し引く一般的な考え方で整理しています。係数は地域・年度・算定方式(マーケット基準・ロケーション基準)で変わるため、本記事の削減率はあくまで代表的な目安です。実際の算定では最新の係数と自社の調達構成に基づく必要があります。"},{"label":"再エネ充当率と自家消費率の前提","detail":"オンサイトPPAの効果は、屋根面積・日射量・負荷曲線との整合で決まる自家消費率に左右されます。本記事では一般的な工場屋根の設置可能容量と昼間負荷の代表値を仮定しています。実際には設備配置や受注変動で大きく変わるため、シナリオの再エネ充当率は確定値ではなく目安として扱ってください。"}];
const process = [{"label":"1. データ収集(使用量・負荷曲線・拠点情報)","detail":"まず各拠点の電力使用量・デマンド・負荷曲線、契約区分、屋根面積や遊休地の有無を棚卸しします。月別・時間帯別の使用パターンを把握し、昼夜・季節の負荷特性を可視化します。BEMSやスマートメーターのデータがあれば、自家消費率の試算精度が高まります。この段階の精度がその後の形態選定を左右するため、実測データの収集を重視します。"},{"label":"2. 分析(形態適合性とScope2試算)","detail":"収集データをもとに、拠点ごとにオンサイト・オフサイト・バーチャルのどの形態が適合するかを分析します。屋根設置容量と昼間負荷から自家消費率を見積もり、不足分をオフサイトやバーチャルで補う構成を検討します。あわせて現状のScope2排出量を算定し、各形態を組み合わせた場合の削減見込みレンジを試算して、目標とのギャップを確認します。"},{"label":"3. 相見積・条件比較(複数事業者)","detail":"複数の発電事業者・小売事業者から提案を取り、契約期間・固定価格水準・追加性の有無・解約条件・設備保守の責任分界などを横並びで比較します。特定の一社に偏らず、中立的に条件を評価することが重要です。長期契約のため、価格固定のメリットと将来の事業計画との整合、出口条項のリスクを丁寧に確認します。"},{"label":"4. 意思決定(経営・調達・サステナ部門の合議)","detail":"PPAは長期にわたる契約であり、調達・経理・サステナビリティ・経営層を横断した合議で意思決定します。完成車メーカーへの報告要件、財務影響、価格固定の効果とリスクを総合評価し、形態の組み合わせと契約量を決定します。社内の責任体制を明確にし、契約後のモニタリング担当も同時に定めておくことが実務上重要です。"}];
const viewpoints = [{"label":"省エネを尽くした上での再エネ調達","detail":"PPAは万能ではなく、まず省エネで総需要を下げることが前提です。需要が小さいほど必要な再エネ量も減り、調達コストの効率が上がります。省エネ施策の余地を確認せずにPPAだけを検討すると、過大な調達につながりかねません。省エネと再エネ調達の優先順位を中立的に整理することが、合理的な意思決定につながります。"},{"label":"追加性(アディショナリティ)の有無","detail":"再エネ調達では、その契約が新たな再エネ電源の創出につながる追加性があるかが問われます。既存電源の証書購入だけでは追加性が乏しいとされる場合があり、調達側がこれを重視する傾向があります。PPAは新規電源と長期契約を結ぶことで追加性を確保しやすい手段ですが、契約内容により程度が異なるため、定義と評価基準を確認することが大切です。"},{"label":"長期契約の固定価格と将来リスクの両面評価","detail":"PPAの長期固定価格は、市場価格高騰時には変動を抑えるメリットになりますが、市場価格が下落した局面では割高に見える可能性もあります。価格固定はリスクヘッジであり、必ず得をする仕組みではありません。自社の事業計画期間や価格見通しと照らし、固定の効果とリスクを両面で評価する姿勢が中立的な判断につながります。"},{"label":"形態ごとの会計・財務上の扱い","detail":"PPAは形態によって会計・財務上の扱いが異なる場合があります。とくにバーチャルPPAの差金決済は金融商品としての評価が論点になることがあり、財務・経理部門との事前確認が欠かせません。長期の契約上の義務や偶発債務の認識も含め、専門家の助言を得ながら影響を整理することが望まれます。"},{"label":"完成車メーカーの要請と自社目標の整合","detail":"サプライチェーンの脱炭素要請は取引先により内容や時期が異なります。自社の再エネ調達計画が、複数の取引先の要件と自社の中長期目標の双方に整合するかを確認します。特定の取引先の要請だけに最適化せず、自社の事業継続性とコスト負担のバランスをとった計画にすることが、持続可能な対応につながります。"}];
const cautions = [{"label":"削減率は立地・負荷で大きく変わる","detail":"本記事の削減率レンジは代表的な目安であり、実際の効果は屋根面積・日射条件・負荷曲線・契約区分により大きく変わります。同じ業種でも拠点ごとに結果が異なるため、他社事例の数値をそのまま自社に当てはめることはできません。必ず自社データに基づく試算を行ったうえで判断してください。"},{"label":"オンサイトだけでは大規模需要を賄えない","detail":"オンサイトPPAは昼間負荷に強い一方、屋根面積や日射には上限があり、3交代の夜間負荷や大規模需要のすべてを賄うことは困難です。再エネ比率を大きく高めるには、オフサイトやバーチャルとの組み合わせが現実的です。オンサイト単独で目標を達成できると考えるのは誤解になりやすい点に注意が必要です。"},{"label":"証書購入とPPAは追加性で性質が異なる","detail":"再エネ証書の購入とPPAは、いずれも再エネ調達手段ですが追加性の観点で性質が異なります。証書は手軽な一方、新規電源創出への寄与が論点になる場合があります。取引先や評価基準によって求められる調達の質が違うため、自社が必要とする要件を確認せずに手段を選ぶと、期待した評価につながらないことがあります。"},{"label":"長期契約は解約・出口条件の確認が必須","detail":"PPAは10年超に及ぶ長期契約が一般的で、途中解約には違約金や条件が伴う場合があります。事業構造の変化や拠点統廃合の可能性を見越し、出口条項や契約量の見直し条件を事前に精査することが重要です。価格固定のメリットだけに目を向け、長期の拘束性を軽視すると将来のリスクになりかねません。"},{"label":"再エネ調達は省エネの代替ではない","detail":"PPAによる再エネ調達は電源の脱炭素化に寄与しますが、エネルギーの使用量そのものを減らす省エネとは目的が異なります。再エネを導入したからといって省エネを止めてよいわけではなく、両者は補完関係にあります。総需要を抑えることが調達コストと環境負荷の双方を下げる近道である点を見落とさないようにします。"}];
const checklist = ["各拠点の年間使用量と時間帯別負荷曲線を把握する","契約区分が高圧か特別高圧かを確認する","工場屋根の面積と設置可能容量を概算する","遊休地や駐車場など追加の設置余地を棚卸しする","2交代・3交代など稼働パターンと夜間負荷を整理する","現状のScope2排出量を算定し基準値を持つ","省エネ施策の残余地を先に洗い出す","取引先のカーボンニュートラル要請内容を確認する","オンサイト・オフサイト・バーチャルの適合性を比較する","追加性の有無と評価基準を契約前に確認する","長期固定価格の効果と出口条件を両面で精査する","調達・経理・サステナ・経営の合議体制を整える"];
const simulatorCtaBullets = ["電気料金の上昇・高騰リスクを業種前提で見える化できる","燃料費調整や市場変動の影響度合いを目安として把握できる","PPAの価格固定が持つヘッジ効果を考える材料になる","省エネと再エネ調達の優先順位を検討する出発点になる"];
const faqItems = [{"question":"この事例は実在する企業の実績ですか。数値は正確ですか。","answer":"いいえ。本記事は架空企業の代表シナリオであり、特定企業の実績ではありません。Before/Afterや削減率は、経済産業省・資源エネルギー庁の公開資料やSIIの採択事例集、業界統計から再構成した代表レンジ・目安です(2025年10月時点)。精密な金額の断定は避け、削減率はパーセントの幅で示しています。実数値は契約条件・使用実態・立地により大きく異なるため、必ず自社データに基づく試算を行ってください。"},{"question":"この記事は特定の電力会社やPPA事業者を推奨しているのですか。","answer":"いいえ。当社団法人は中立・非営利の立場であり、特定の電力会社・PPA事業者・契約形態を推奨することはありません。本記事はあくまで形態ごとの特徴や検討の考え方を整理したものです。実際の選定では複数事業者から相見積を取り、契約条件や追加性、出口条件を横並びで比較したうえで、自社の前提に照らして中立的に判断することをおすすめします。"},{"question":"オンサイトPPAとオフサイトPPAは何が違うのですか。","answer":"オンサイトPPAは自社の屋根や敷地に発電設備を設置し、その電力を自家消費する形態です。系統を経由しないため託送料金や再エネ賦課金の対象外となる利点があります。一方オフサイトPPAは遠隔地の発電所から系統を経由して電力を供給する形態で、託送料金が発生しますが大規模な調達が可能です。屋根面積が限られる拠点や大規模需要にはオフサイトが、昼間自家消費にはオンサイトが適する傾向があります。"},{"question":"フィジカルPPAとバーチャルPPAはどう使い分けますか。","answer":"フィジカルPPAは実際の電力そのものを物理的に供給を受ける形態で、特定拠点での再エネ調達に向きます。バーチャルPPAは電力供給と切り離して環境価値だけを長期契約で確保する形態で、立地制約を受けにくく複数拠点へ柔軟に配分できます。物理的な導入が難しい拠点を含めて環境価値をまとめたい場合や、価格変動のヘッジを併せて狙う場合に、バーチャルが選択肢となります。財務上の扱いは事前確認が必要です。"},{"question":"追加性(アディショナリティ)とは何ですか。なぜ重視されるのですか。","answer":"追加性とは、その再エネ調達が新たな再エネ電源の創出につながっているかという考え方です。既存電源由来の証書購入だけでは新規創出への寄与が乏しいとされる場合があり、調達側がこの点を重視する傾向があります。PPAは新規電源と長期契約を結ぶことで追加性を確保しやすい手段とされます。ただし契約内容によって程度が異なるため、求められる要件と評価基準を事前に確認することが大切です。"},{"question":"完成車メーカーのカーボンニュートラル要請にはどう対応すべきですか。","answer":"完成車メーカー各社が公表するカーボンニュートラル目標を背景に、サプライチェーン全体での排出削減が取引上のテーマになりつつあります。Tier1には排出量データの提出や再エネ比率の報告が求められる場面が増えています。対応では、特定の取引先の要請だけに最適化せず、自社の中長期目標やコスト負担とのバランスをとり、省エネと再エネ調達を組み合わせた持続可能な計画を立てることが重要です。"},{"question":"PPAの長期契約はリスクにならないのですか。","answer":"PPAは10年超の長期契約が一般的で、固定価格は市場高騰時のヘッジになる一方、市場価格が下落した局面では割高に見える可能性もあります。価格固定は必ず得をする仕組みではなくリスク管理の手段です。また途中解約には違約金や条件が伴う場合があります。自社の事業計画期間や拠点統廃合の可能性を見越し、出口条項や見直し条件を事前に精査して、効果とリスクを両面で評価してください。"},{"question":"中小規模の拠点でもPPAは導入できますか。","answer":"可能ですが、単独拠点では規模メリットが出にくい場合があります。代表シナリオでは、複数の中小拠点の屋根を発電事業者に貸し出す屋根借りモデルで、初期投資を抑えつつ拠点群をまとめて脱炭素化する構成を示しています。立地制約のある拠点はバーチャルPPAで補う組み合わせも考えられます。いずれも自社の使用量・屋根条件・負荷特性を把握したうえで、形態を中立的に比較することが出発点になります。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/auto-parts-electricity-cost-review","title":"自動車部品工場の電気代見直し","description":"部品製造の電力構造。"},{"href":"/electronic-components-electricity-cost-review","title":"電子部品工場の電気代見直し","description":"高負荷工程の削減観点。"},{"href":"/aichi-automotive-electricity-cost","title":"愛知の自動車・輸送機器工場の電気料金","description":"業種×地域クロス。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"PPAの基礎と類型。"},{"href":"/onsite-vs-offsite-ppa","title":"オンサイトPPAとオフサイトPPA","description":"立地別の調達方式比較。"},{"href":"/ppa-vs-self-consumption-solar","title":"PPAと自家消費太陽光の比較","description":"初期費用と所有形態。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"再エネ100%調達の枠組み。"},{"href":"/subsidy-demand-side-ppa","title":"需要家主導型PPAの補助金","description":"PPA導入の支援制度。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ投資の税制優遇。"},{"href":"/case-study-semiconductor-re100-procurement","title":"半導体×RE100調達の事例","description":"再エネ調達の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyAutoTier1PpaIntroductionPage() {
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
