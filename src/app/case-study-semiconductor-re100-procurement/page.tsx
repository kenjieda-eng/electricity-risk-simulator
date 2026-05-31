import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle = "半導体工場のRE100調達事例｜クリーンルーム24時間稼働の再エネ100%調達（代表シナリオ）";
const pageDescription = "半導体・電子部品工場が、24時間稼働のクリーンルームを抱えながらRE100水準の再エネ調達(非化石証書・PPA・自家消費)を段階的に進めた代表シナリオを、公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態を推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-semiconductor-re100-procurement";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["半導体工場 RE100","クリーンルーム 電気代","非化石証書 調達","再エネ100% 事例","電子部品 脱炭素"],
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

const h1Text = "半導体×RE100調達：クリーンルーム24時間稼働の再エネ調達 代表事例";
const breadcrumbTitle = "半導体×RE100調達の事例";
const leadText = "本記事は架空企業の代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。半導体・電子部品工場がRE100調達を進めた事例を、業界統計と公開事例から再構成して解説します。クリーンルームの24時間稼働や温湿度管理空調という固有の負荷特性を踏まえ、非化石証書・PPA・自家消費を組み合わせた段階的な再エネ100%化の考え方を、中立社団法人の立場から整理します。実数値は契約条件や使用実態により異なる点にご留意ください。";
const d1CtaLead = "自社が今回のような半導体・電子部品工場のケースに近いかどうかは、まず使用実態の試算から始めるのが近道です。業種別電気代計算機を使えば、契約区分や月間使用量をもとに自社のおおよその電力コスト規模を把握できます。クリーンルーム24時間稼働の高負荷率を前提に、再エネ調達でどの程度の影響が出るかを検討する出発点としてご活用ください。";
const simulatorCtaLead = "再エネ調達の検討は、自社の電力コストとリスクの現状把握から始まります。法人向け電気料金上昇・高騰リスクシミュレーターでは、契約区分や使用量をもとに、燃料費調整や価格変動が損益に与える影響の度合いを把握できます。高負荷率の半導体工場のように電力比重が高い事業ほど、現状のリスクを数値で確認したうえで再エネ調達戦略を組み立てることが有効です。";
const whatYouLearn = ["クリーンルーム24時間稼働を抱える半導体工場の負荷特性とコスト構造の見方","RE100加盟要件と達成手段としての非化石証書・PPA・自家消費の違い","証書中心・PPA中心・自家消費併用・段階的100%化という4つの調達戦略の代表シナリオ","GX/DXによる需要増局面で再エネ調達コストと供給安定性を両立させる考え方","自社が同様のケースに当てはまるかを判断するための観点とチェックリスト"];
const premise = [{"label":"業種特性(クリーンルーム24時間稼働)","detail":"半導体・電子部品の前工程では微粒子管理のためクリーンルームを連続稼働させ、生産を止められない構造です。製造装置の連続運転に加え、温湿度・気流・圧力を一定に保つ空調と純水・排気処理が電力を多く消費します。負荷率(年間平均負荷を最大需要で割った値)が高く、夜間・休日も需要が大きく落ちないため、ベースロード電源の調達設計が再エネ計画の前提になります。"},{"label":"規模・契約区分","detail":"代表シナリオでは特別高圧または高圧の大口需要家を想定します。受電電圧が高く基本料金(契約電力)と従量料金の双方が大きいため、需要が大きいほど再エネ調達の影響額も拡大します。複数棟・複数ラインを持つ拠点では、メーター単位の使用実態を把握したうえで、棟ごとに証書・PPA・自家消費の最適配分を検討するのが一般的です。実数値は契約条件・使用実態により異なります。"},{"label":"負荷パターン(高負荷率・低季節変動)","detail":"オフィスや小売と異なり、半導体工場は昼夜・平日休日の差が小さく、年間を通じて平準的に高い負荷が続きます。空調は外気条件で変動するものの、製造装置とユーティリティが需要の土台を形成します。この平準的な大量消費は、固定価格で長期に再エネ電力を確保するPPAや、ベース相当を証書で賄う設計と相性が良い一方、自家消費太陽光の発電時間帯とは必ずしも一致しない点が論点です。"},{"label":"コスト構造(電力比重の高さ)","detail":"半導体製造は装置・材料費が大きい一方、製造原価に占めるエネルギーコストの比重も他業種より高い傾向があります。クリーンルーム空調・コンプレッサ・チラー・排気処理が消費の中心で、燃料費調整額や再エネ賦課金の変動が損益に直結します。RE100対応はコスト要因であると同時に、取引先からの調達要件・受注条件にも関わるため、経営判断として位置づけられる代表シナリオです。"},{"label":"RE100調達という前提","detail":"RE100は事業活動で使う電力を100%再生可能エネルギーで賄うことを目指す国際的な企業イニシアチブです。本ケースでは加盟または取引先要請を背景に、購入電力の再エネ化を計画的に進める企業を想定します。達成手段は証書購入・再エネ電力メニュー・PPA・自家消費など複数あり、追加性(新たな再エネ電源の増加への貢献)やトラッキングの考え方を踏まえた組み合わせ設計が前提になります。"}];
const beforeState = [{"label":"再エネ比率が低く取引要件を満たせない","detail":"見直し前は系統からの一般電力が中心で、購入電力の再エネ比率が低い状態でした。グローバルの取引先やサプライチェーン全体の脱炭素要請が強まる中、RE100相当の再エネ調達を示せないことが受注・取引継続のリスクとして意識され始めていた、という課題設定の代表シナリオです。実際の要件は取引先や時期により異なります。"},{"label":"コスト変動リスクの増大","detail":"高負荷率で大量に電力を消費するため、燃料費調整額や市場連動部分、再エネ賦課金の変動が損益を大きく揺らしていました。短期の市場価格に依存する調達のままでは、調達コストの見通しが立てにくく、再エネ化の検討と同時に価格の予見可能性をどう高めるかが論点になっていた、という前提です。"},{"label":"調達手段の比較・評価ができていない","detail":"非化石証書(FIT・非FIT)、トラッキング付き証書、再エネメニュー、コーポレートPPA、自家消費太陽光といった手段の違いや、それぞれの追加性・コスト・契約期間・調達量の安定性が社内で整理されておらず、どこから着手すべきか判断材料が不足していました。手段ごとの位置づけを明確にすることが最初の課題でした。"},{"label":"需要増局面での調達計画の欠如","detail":"GX・DX投資や増産で将来の電力需要が増える見通しがある一方、再エネ調達量を需要増に合わせて拡大する計画がありませんでした。需要が増えるほど再エネ100%化のハードルも上がるため、増設・増産シナリオと整合した中長期の調達ロードマップが描けていない状態でした。"}];
const approaches = [{"name":"非化石証書(FIT・非FIT/トラッキング)の活用","role":"まず量を確保する基礎手段","detail":"非化石証書は再エネの環境価値を電気と切り離して調達する仕組みで、短期に大量の再エネ比率を引き上げやすい点が特徴です。FIT非化石証書・非FIT非化石証書の区別や、産地・電源を特定するトラッキングの有無で、RE100報告での扱いや追加性の評価が変わります。本ケースでは需要全体のうち当面の不足分を証書で補い、後述のPPA・自家消費へ段階移行する土台として位置づけました。"},{"name":"コーポレートPPA(オフサイト・オンサイト)","role":"長期固定で追加性を確保する中核","detail":"PPA(電力購入契約)は発電事業者と長期契約を結び、新設の再エネ電源から電力や環境価値を継続調達する手段です。高負荷率で平準的に大量消費する半導体工場は、長期固定価格で安定調達できるPPAと相性が良く、価格の予見可能性向上と追加性の確保を同時に狙えます。フィジカル・バーチャルの形態や契約年数、発電量と自社需要のマッチングが設計上の論点になります。"},{"name":"自家消費太陽光・グリーン電力メニュー","role":"敷地を活かす分散調達","detail":"工場屋根や敷地に太陽光を設置して発電分を自家消費すれば、その分は系統購入と賦課金を減らしつつ再エネ比率を高められます。ただし昼間中心の発電プロファイルは24時間連続稼働の需要と完全には一致しないため、夜間・悪天時は系統や証書で補う設計になります。あわせて小売事業者の再エネ電力メニューも、調達手段の一つとして比較対象に含めます。"},{"name":"省エネ・需要側対策(空調・ユーティリティ最適化)","role":"分母を小さくする前提整備","detail":"再エネ調達の前提として、消費電力そのものを抑える需要側対策を並行します。クリーンルーム空調の外気導入・送風量の最適化、チラーやコンプレッサの高効率化、BEMS/FEMSによる見える化と運転制御、排熱回収などが代表例です。需要(分母)を下げれば、同じ再エネ比率でも必要な証書・PPA量を抑えられ、RE100達成コストの全体最適につながります。"}];
const caseScenarios = [{"title":"シナリオA:証書中心で短期に比率を引き上げる中規模拠点","before":"購入電力の再エネ比率が低く、取引先要請に対して再エネ調達を示せていない状態(代表シナリオ・目安)","after":"非化石証書を中心に当面の不足分を補い、購入電力の再エネ比率を大きく引き上げ。報告上はトラッキング付き証書を優先採用する想定","result":"再エネ比率は短期で数十パーセントから100%相当まで段階的に引き上げ可能な一方、証書コストが上乗せされ電力関連コストは数パーセント規模で増加するレンジが目安です。追加性は限定的なため次段階でPPA・自家消費へ移行。実数値は契約条件・使用実態により異なります。"},{"title":"シナリオB:長期PPA中心で価格を固定する大規模拠点","before":"市場連動・燃料費調整の変動でコスト見通しが立てにくく、再エネ調達も場当たり的(代表シナリオ・目安)","after":"オフサイトPPAでベース相当を長期固定調達し、追加性のある新設再エネ電源から継続調達。残差を証書で補完する設計","result":"調達コストの予見可能性が高まり、再エネ比率はPPA量に応じて高水準を確保。価格変動の影響を受ける部分を縮小できる一方、契約年数や発電量と需要のミスマッチが残課題です。削減効果は固定化による変動抑制が中心で、実額は契約条件により幅があります。"},{"title":"シナリオC:自家消費太陽光併用で賦課金負担も抑える拠点","before":"系統購入が中心で、敷地・屋根の発電ポテンシャルを活用できていない(代表シナリオ・目安)","after":"工場屋根に自家消費太陽光を導入し昼間需要の一部を自家発電で賄い、夜間・不足分を証書とメニューで補完","result":"自家消費分は系統購入と再エネ賦課金が減るため、その部分の電力コストを一定割合で圧縮できる可能性があります。発電は昼間中心で連続稼働需要との時間的ギャップが残るため、自家消費だけでの100%化は困難で、証書・PPAとの組み合わせが前提になります。実数値は使用実態により異なります。"},{"title":"シナリオD:段階的に100%再エネ化する増産・GX投資中の拠点","before":"増産やGX/DX投資で需要増が見込まれる一方、再エネ調達拡大の計画がない(代表シナリオ・目安)","after":"省エネで分母を抑えつつ、証書→PPA→自家消費の優先順位で年次目標を設定し、需要増に合わせて調達量を拡大する複数年ロードマップを策定","result":"単年での100%化を急がず、追加性とコストのバランスを取りながら数年かけて再エネ比率100%相当を目指す設計です。初期は証書比率が高くコスト上乗せが大きい一方、PPA・自家消費の比率上昇に伴い長期の変動リスクを抑制。効果は累積で評価し、実額は前提条件により異なります。"}];
const dataNotes = [{"label":"Before/Afterの位置づけ","detail":"本記事のBefore/Afterおよび削減率は、経産省・資源エネルギー庁の公表資料、SII採択事例集、業界統計から再構成した代表シナリオ・目安です(2025年10月時点)。特定企業の実績ではなく、精密な金額の断定は行いません。実数値は契約電力・使用実態・調達条件により大きく異なります。"},{"label":"再エネ比率と削減率の扱い","detail":"再エネ比率は調達手段の組み合わせで上下するため、本文では具体的なパーセント断定を避け、数十パーセントから100%相当という幅で表現しています。コスト面も証書単価・PPA価格・賦課金の変動に左右されるため、数パーセント規模の増減という幅+目安表現にとどめています。"},{"label":"証書・PPA・自家消費の前提","detail":"非化石証書はFIT・非FITの別やトラッキングの有無で扱いが変わり、PPAは契約年数・発電量・形態(フィジカル/バーチャル)で評価が異なります。自家消費太陽光は日射・立地・屋根面積に依存します。これらの前提は時期や制度改定で変動するため、最新の公開情報での確認を前提とします。"},{"label":"出典確認のすすめ","detail":"RE100の加盟要件や報告ルール、非化石証書市場、PPAの制度的扱いは継続的に更新されます。本記事は中立社団法人の立場で一般的な考え方を整理したものであり、個別判断にあたっては資源エネルギー庁・SII等の一次情報や、複数事業者からの見積で最新条件を確認することを推奨します。"}];
const process = [{"label":"データ収集(使用実態の見える化)","detail":"まず棟・ライン・用途別の電力使用量を把握します。クリーンルーム空調・製造装置・ユーティリティ・排気処理などの内訳と、24時間・季節別の需要カーブを整理し、BEMS/FEMSや検針データから負荷率と契約電力の妥当性を確認します。再エネ調達計画は、この使用実態の見える化を出発点に組み立てます。"},{"label":"分析(調達手段の比較評価)","detail":"把握した需要に対し、証書・PPA・自家消費・再エネメニューの各手段を、コスト・追加性・契約期間・調達量の安定性・RE100報告での扱いの観点で比較します。ベース相当はPPA、不足分は証書、昼間の一部は自家消費といった役割分担を仮置きし、複数の調達ミックス案を試算します。"},{"label":"相見積・条件比較","detail":"中立性を保つため、複数の小売事業者・発電事業者・PPA事業者から条件を取得し、単価だけでなく契約年数・解約条件・追加性・トラッキングの有無を横並びで比較します。特定の事業者を前提にせず、自社の需要特性に合う組み合わせを評価する段階です。"},{"label":"意思決定と効果検証","detail":"比較結果を踏まえ、年次目標と調達ミックスを経営として決定し、契約を実行します。導入後はBEMS/FEMSと検針データで再エネ比率・コスト・需要の推移をモニタリングし、需要増や制度改定に合わせて翌年以降の計画を見直します。効果は単年でなく累積で評価するのが代表シナリオでの基本姿勢です。"}];
const viewpoints = [{"label":"追加性をどう評価するか","detail":"再エネ調達では、新たな再エネ電源の増加に貢献する追加性が重視されつつあります。証書のみでは追加性が限定的とされる場合があり、PPAや自家消費は追加性が高いと評価されやすい傾向です。RE100報告や取引先要請の観点から、自社にとっての追加性の重要度を整理して手段を選ぶ視点が必要です。"},{"label":"コストと予見可能性のバランス","detail":"短期コストの安さだけでなく、長期の価格変動リスクをどこまで抑えたいかを軸に判断します。証書は柔軟だが単価変動を受け、PPAは長期固定で予見可能性が高い一方で契約に拘束されます。高負荷率の半導体工場では、変動抑制の価値が相対的に大きい点を踏まえて評価します。"},{"label":"需要増シナリオとの整合","detail":"増産・GX/DX投資で需要が増える前提なら、現在の需要だけでなく将来需要に対する再エネ比率で計画を考えます。需要増に調達拡大が追いつかないと再エネ比率が低下するため、複数年の需要見通しと調達ロードマップを一体で設計する観点が重要です。"},{"label":"省エネ(分母)との両輪","detail":"再エネ調達(分子)だけでなく、空調・ユーティリティの省エネで需要(分母)を下げる両輪で考えます。分母が小さいほど必要な証書・PPA量が減り、達成コストの全体最適につながります。設備更新や運転最適化の余地を先に評価する視点が有効です。"},{"label":"中立的な情報源での確認","detail":"制度や市場条件は更新されるため、特定事業者の説明だけに依拠せず、資源エネルギー庁・SII等の一次情報や複数事業者の見積で横断的に確認します。中立社団法人としては、優劣評価ではなく前提条件を揃えた比較の徹底をおすすめします。"}];
const cautions = [{"label":"再エネ比率100%=追加性100%ではない","detail":"証書中心で100%相当に到達しても、追加性の観点では評価が分かれる場合があります。取引先や報告枠組みによって求められる質が異なるため、比率の数字だけで十分と考えず、手段の質も合わせて確認する必要があります。"},{"label":"自家消費だけで100%化はできない","detail":"工場屋根の自家消費太陽光は昼間中心で、24時間連続稼働の需要を単独で賄うことはできません。夜間・悪天時は系統・証書・PPAで補う前提が必要で、自家消費を過大評価しないことが留意点です。"},{"label":"PPAの長期契約リスク","detail":"PPAは価格固定で予見可能性を高める一方、長期にわたり契約に拘束されます。需要が想定より減った場合や市場価格が下落した場合の影響も含め、契約年数・解約条件を事前に確認することが大切です。"},{"label":"証書の種別とトラッキングの混同","detail":"FIT・非FIT非化石証書やトラッキングの有無で、RE100報告での扱いや追加性の評価が変わります。種別を区別せずに調達すると、後から報告要件を満たさないことが判明する場合があるため注意が必要です。"},{"label":"数値はあくまで代表シナリオの目安","detail":"本記事の削減率やコスト幅は業界統計・公開事例から再構成した代表シナリオ・目安であり、自社の実数値は契約条件・使用実態・調達条件で大きく異なります。試算結果を断定的な約束として受け取らないようご注意ください。"}];
const checklist = ["棟・ライン・用途別に電力使用量を見える化したか","クリーンルーム空調と製造装置の負荷内訳を把握したか","24時間・季節別の需要カーブと負荷率を確認したか","RE100加盟要件や取引先の再エネ要請を整理したか","非化石証書のFIT・非FIT別とトラッキングを区別したか","PPAの契約年数・形態・追加性を比較したか","自家消費太陽光の発電量と需要の時間ギャップを確認したか","省エネで需要の分母を下げる余地を評価したか","複数事業者から相見積を取り条件を横並びで比較したか","増産・GX投資など将来需要の見通しを反映したか","年次目標と調達ミックスのロードマップを策定したか","導入後の再エネ比率とコストをモニタリングしているか"];
const simulatorCtaBullets = ["契約区分・使用量から自社の電力コスト規模の目安を把握できます","燃料費調整や価格変動が損益に及ぼすリスクの度合いを確認できます","再エネ調達の検討前に現状のリスクを数値で整理できます","中立社団法人の立場で特定の電力会社を推奨せず一般的な考え方を提供します"];
const faqItems = [{"question":"この事例は実在企業ですか。掲載されている数値は正確ですか。","answer":"実在企業ではありません。本記事は業界統計や公開事例、経産省・資源エネルギー庁・SII採択事例集等から再構成した架空企業の代表シナリオです(2025年10月時点)。Before/Afterや削減率は精密な金額の断定を避け、パーセントレンジや目安表現で示しています。自社の実数値は契約条件・使用実態・調達条件により大きく異なるため、参考の目安としてご活用ください。"},{"question":"この記事は特定の電力会社やPPA事業者を推奨しているのですか。","answer":"いいえ。当法人は中立・非営利の立場であり、特定の電力会社・契約形態・事業者を推奨することはありません。本記事は証書・PPA・自家消費といった調達手段の一般的な考え方と論点を整理したものです。実際の選定にあたっては、複数事業者から条件を取得し、前提を揃えて横並びで比較することをおすすめします。優劣評価は行いません。"},{"question":"クリーンルームを24時間止められないのに、なぜ再エネ調達が論点になるのですか。","answer":"クリーンルームは微粒子管理のため連続稼働が前提で、夜間・休日も需要が落ちにくく負荷率が高いのが特徴です。この平準的な大量消費は環境負荷とコストの双方に直結し、取引先からの脱炭素要請も強まっています。だからこそ、止められない需要をどの再エネ手段で賄うかという調達設計が、半導体・電子部品工場にとって重要な経営論点になります。"},{"question":"非化石証書とPPAはどう使い分けるのが一般的ですか。","answer":"一般論として、非化石証書は短期に大量の再エネ比率を引き上げやすく柔軟ですが追加性が限定的とされる場合があります。PPAは新設電源から長期固定で調達でき追加性と価格の予見可能性が高い一方、契約に拘束されます。高負荷率で平準的に消費する工場では、ベース相当をPPA、不足分を証書で補う組み合わせが代表的な考え方です。自社の要件で配分を検討します。"},{"question":"自家消費太陽光だけで再エネ100%は達成できますか。","answer":"工場屋根の自家消費太陽光は発電が昼間中心のため、24時間連続稼働する半導体工場の需要を単独で100%賄うことはできません。夜間や悪天時は系統・証書・PPAで補う前提が必要です。自家消費は系統購入と再エネ賦課金を減らせる利点がある一方、規模には屋根面積や日射の制約があるため、ほかの手段との組み合わせが前提になります。"},{"question":"RE100に加盟するための要件にはどのようなものがありますか。","answer":"RE100は事業活動で使う電力を100%再生可能エネルギーで賄うことを目指す国際的な企業イニシアチブで、目標年の設定や進捗報告などが求められます。達成手段としては再エネ電力メニュー・証書・PPA・自家消費などが認められますが、報告での扱いや追加性の評価は手段により異なります。最新の要件は一次情報での確認を前提に、自社の調達計画と整合させることが重要です。"},{"question":"GXやDXで需要が増える場合、再エネ調達はどう考えればよいですか。","answer":"需要が増えるほど再エネ100%化のハードルも上がるため、現在の需要だけでなく将来需要に対する再エネ比率で計画を立てます。省エネで分母を抑えつつ、証書→PPA→自家消費の優先順位で年次目標を設定し、増産・投資のスケジュールに合わせて調達量を拡大する複数年ロードマップが有効です。効果は単年でなく累積で評価する姿勢が代表シナリオでの基本になります。"},{"question":"再エネ調達でコストはどの程度変わりますか。","answer":"本記事では精密な金額の断定を避けていますが、一般に証書中心の場合は単価上乗せで電力関連コストが数パーセント規模で増えるレンジが目安です。一方、長期PPAは価格変動の影響を抑え予見可能性を高める効果が期待できます。実際の増減は証書単価・PPA価格・賦課金・使用量で大きく異なるため、複数事業者の見積で自社条件に即して試算することをおすすめします。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・ZEB・再エネ）","url":"https://www.env.go.jp/"},{"name":"OCCTO 電力広域的運営推進機関（需給・容量市場）","url":"https://www.occto.or.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"7業種の月額削減・施策・投資回収を構造化。"},{"href":"/business-electricity-contract-checklist","title":"法人電力契約見直しチェックリスト","description":"見直し準備の全項目を整理。"},{"href":"/fuel-cost-adjustment","title":"燃料費調整額の仕組み","description":"燃調算定方式の基礎。"},{"href":"/contract-review-reduction-effect","title":"契約見直しの削減効果","description":"契約見直しで見込める効果の整理。"},{"href":"/compare","title":"料金メニュー比較・診断","description":"自社に合う電力プランを中立的に診断。"},{"href":"/semiconductor-electricity-cost-review","title":"半導体工場の電気代見直し","description":"前工程の高負荷と削減観点。"},{"href":"/semiconductor-facility-electricity-cost-review","title":"半導体関連設備の電気代見直し","description":"クリーンルーム設備の電力。"},{"href":"/electronic-components-electricity-cost-review","title":"電子部品工場の電気代見直し","description":"高負荷工程の削減観点。"},{"href":"/re100-overview-for-business","title":"法人のRE100入門","description":"再エネ100%調達の枠組み。"},{"href":"/non-fossil-certificate-types-purchase","title":"非化石証書の種類と購入","description":"証書による再エネ価値調達。"},{"href":"/virtual-ppa-explained","title":"バーチャルPPAの仕組み","description":"金融的PPAの基礎。"},{"href":"/corporate-ppa-overview","title":"法人向けPPAの全体像","description":"PPAの基礎と類型。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"再エネ投資の税制優遇。"},{"href":"/case-study-auto-tier1-ppa-introduction","title":"自動車部品Tier1×PPA導入の事例","description":"PPA中心の比較ケース。"},{"href":"/case-study-datacenter-hyperscale-pue","title":"ハイパースケールDC×PUE改善の事例","description":"24h高負荷率の比較ケース。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudySemiconductorRe100ProcurementPage() {
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
