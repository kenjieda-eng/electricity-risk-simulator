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

const pageTitle = "コインランドリー×多店舗一括で電気代を削減した事例｜大型乾燥機・24時間無人運転・深夜照明制御（代表シナリオ）";
const pageDescription = "24時間無人運転・多店舗展開のコインランドリーが、大型乾燥機（ガス式/電気式）の効率化・運転最適化、無人稼働の待機電力・照明制御、看板/店内照明のLED化・深夜減光、多店舗の契約一括見直し（本部一括・スケールメリット）、デマンド/基本料金の最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-coin-laundry-multisite";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["コインランドリー 電気代 削減 事例","大型乾燥機 効率化 運転最適化","24時間 無人運転 待機電力 照明制御","多店舗 契約 一括見直し スケールメリット","コインランドリー デマンド 基本料金 最適化"],
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

const h1Text = "コインランドリー×多店舗一括：大型乾燥機・24時間無人運転・深夜照明制御で電気代を抑えた代表事例";
const breadcrumbTitle = "コインランドリーの電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。コインランドリーは、洗濯乾燥機・大型乾燥機（ガス式/電気式）で熱・電力を使いながら、24時間無人で運転する店舗が多く、待機電力・常時照明・空調換気といったユーティリティが1日中積み上がるのが特徴です。同じ「ランドリー」でも、有人でクリーニングを行い工業用ボイラー中心の設備を持つクリーニング工場（別事例）とは電力の使い方が大きく異なり、コインランドリーは無人・多店舗・乾燥機主体という点で読み分ける必要があります。大型乾燥機の効率化・運転最適化、無人稼働の待機電力削減・照明のLED化と深夜減光、看板/店内照明の制御、多店舗の契約一括見直し（本部一括・スケールメリット）、デマンド制御・基本料金の最適化によって電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回のコインランドリー×多店舗一括の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・店舗数・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、大型乾燥機・待機電力・照明・空調のどこに削減余地がありそうか、また多店舗の契約が割高になっていないかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "大型乾燥機の運転最適化や照明のLED化・深夜減光、多店舗の契約一括見直しの検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（乾燥機・待機電力・照明の省エネ）と単価・基本料金の最適化（デマンド/契約一括見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["コインランドリーで電気代が重くなる理由（大型乾燥機・24時間無人運転の待機電力・照明・空調とデマンド・多店舗の契約分散）の構造","大型乾燥機（ガス式/電気式）の効率化・運転最適化が購入電力量と燃料を同時に下げうる仕組みと適性条件","24時間無人稼働の待機電力削減や看板/店内照明のLED化・深夜減光で消費電力量を縮小する考え方の目安","多店舗の契約一括見直し（本部一括・スケールメリット）と、デマンド制御・基本料金最適化で固定費を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（無人・24時間・乾燥機主体の熱負荷）","detail":"コインランドリーは、洗濯乾燥機や大型乾燥機で衣類・寝具を乾かすため熱・電力を使い、多くの店舗が24時間無人で運転します。乾燥機はガス式が主流の店舗もあれば電気式の店舗もあり、これに換気・空調、看板・店内照明、給水加温、両替・決済機器のユーティリティが1日中重なります。有人でクリーニングを行い工業用ボイラーを中心に稼働するクリーニング工場（別事例）とは異なり、無人・多店舗・乾燥機主体という点で電力の使い方が大きく変わるのが特徴です。本記事はこうした特性を代表シナリオとして整理します。"},{"label":"規模（多店舗・低圧/高圧が混在）","detail":"コインランドリーは1店舗あたりの契約容量は大きくない一方、複数店舗を面で展開する事業者が多く、低圧契約の店舗と高圧受電の大型店が混在しがちです。店舗ごとに契約がばらばらだと、本部でまとめて見れば取れるはずのスケールメリットや契約最適化の余地を取りこぼしやすくなります。基本料金や契約電力が店舗単位で決まるため、多店舗合計での固定費をどう抑えるかが料金に直結します。本記事は業界統計・公開事例から再構成した代表シナリオとして、店舗数・規模の異なる複数パターンを想定します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費／多店舗で分散）","detail":"電力料金は契約容量・契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。24時間運転のコインランドリーは待機電力・照明・空調のベース負荷が常時積み上がり、電力量料金の比率が高くなりやすい一方、乾燥機の同時稼働でデマンドが跳ねると高圧店では基本料金も膨らみます。さらに多店舗では契約が分散し、本部で束ねれば取れる交渉余地を活かせていないことが多く、量（kWh）の削減と契約の最適化の双方が効く構造です。"},{"label":"熱需要（乾燥機のガス/電気と待機・排熱）","detail":"コインランドリーの熱需要の中心は乾燥機で、ガス式乾燥機なら燃料（ガス）、電気式乾燥機なら購入電力量に効きます。フィルター詰まりや過乾燥、空運転、排気とともに捨てている排熱に削減余地が残りやすい領域です。24時間無人運転では、稼働していない時間帯の待機電力や常時点灯の照明・換気も無視できないベース負荷になります。設備別・時間帯別の熱・電力の状態を把握することが省エネの起点になります。数値は代表シナリオの目安です。"},{"label":"コスト構造（電力・ガス・無人運転の固定費が絡む）","detail":"コインランドリーのエネルギーコストは、乾燥機の電力・ガス、待機電力・照明・空調換気のユーティリティ、そして多店舗ぶんの基本料金という固定費が絡み合います。無人運転ゆえに人件費は小さい一方、24時間・多店舗で電気代とガス代が積み上がりやすく、稼働率の低い時間帯の無駄がそのまま利益を圧迫します。どの店舗・どの設備でどのエネルギーをどれだけ使うかを把握することが、乾燥機効率化・照明制御・契約一括見直しの判断の出発点になります。本記事の金額はすべて代表シナリオの目安です。"}];
const beforeState = [{"label":"大型乾燥機が非効率に運転されている","detail":"経年した大型乾燥機では、フィルターやダクトの詰まりで乾燥効率が落ち、必要以上の時間・温度で運転して電力・ガスを無駄にしていました。過乾燥や、利用がないのに設定で回り続ける空運転も生じ、排気とともに大量の熱を回収せず捨てていました。ガス式・電気式いずれも、乾燥時間・温度の適正化や高効率機への更新余地があるにもかかわらず、無人ゆえに運転実態が把握されず、非効率が放置されがちな代表シナリオです。"},{"label":"24時間無人稼働の待機電力・常時照明を垂れ流していた","detail":"24時間無人で運転するため、利用者のいない深夜・早朝でも店内照明・看板が全灯し、空調・換気や決済機器の待機電力が常時積み上がっていました。人感センサーやタイマーによる減光・間引きが未導入で、稼働率の低い時間帯もピーク時と同じ電力を消費していました。ベース負荷の見える化がなく、「24時間だから仕方ない」と固定費として受け入れられ、削減機会を取りこぼしていた状態です。"},{"label":"看板・店内照明が旧型で深夜も全灯","detail":"看板や店内照明に旧型の蛍光灯・水銀灯を使い続け、消費電力が大きいうえ、深夜帯も明るさを落とさず全灯していました。LED化や深夜の減光・調光の余地があるにもかかわらず、初期投資や無人運転での管理の難しさを理由に検討が進まず、ランプ交換費や空調負荷も含めた総コストの把握が乏しい状態でした。明るさと防犯・集客のバランスを検証する仕組みがありませんでした。"},{"label":"多店舗で契約がバラバラ、デマンド管理もなし","detail":"店舗ごとに個別に電力契約を結び、契約容量・契約電力が実態に対して過大なまま放置され、本部でまとめて見直す仕組みがありませんでした。高圧受電の大型店では乾燥機の同時稼働でデマンドのピークが高止まりし、基本料金が過大になりがちでした。多店舗を束ねれば取れるスケールメリットや一括見直しの交渉余地を活かせず、店舗別・時間帯別の使用実態もリアルタイムに見えず、改善が現場任せになっていました。"}];
const approaches = [{"name":"大型乾燥機（ガス/電気）の効率化・運転最適化","role":"熱需要の中心を源流から効率化し電力量・燃料を削減","detail":"大型乾燥機のフィルター・ダクトの清掃と点検で乾燥効率を回復し、乾燥時間・温度・停止条件を衣類量に応じて適正化して過乾燥や空運転を抑えます。排気熱の回収・再利用や高効率機・ヒートポンプ乾燥への更新も選択肢で、電気式乾燥なら購入電力量、ガス式なら燃料に直接効きます。乾燥はコインランドリーのエネルギーの中心のため効果が出やすい領域ですが、効果は機種・稼働状態により幅がある目安です。"},{"name":"24時間無人稼働の待機電力削減・照明制御","role":"常時積み上がるベース負荷を運用と設備で圧縮","detail":"人感センサー・タイマー・照度センサーを活用し、利用者のいない深夜・早朝の店内照明を減光・間引きし、看板照明も時間帯で調光します。決済機器・空調・換気の待機電力を見直し、不要な常時稼働を抑えます。無人運転でも安全・防犯・集客に必要な明るさは確保しつつ、稼働率の低い時間帯の無駄を削るのが要点です。多くは投資が小さく回収の早い施策で、まず着手しやすい打ち手です。効果は運用により幅がある目安です。"},{"name":"看板/店内照明のLED化・深夜減光","role":"照明の消費電力量と空調負荷を同時に低減","detail":"看板・店内の旧型照明をLEDへ置き換え、消費電力と発熱・空調負荷、ランプ交換頻度を同時に下げます。あわせて調光・タイマー制御で深夜帯の明るさを落とし、24時間運転でも照明のベース負荷を圧縮します。LED化は投資を伴うため、点灯時間の長さと回収年数を見極めることが前提です。照明・空調の省エネ効果の目安は、量と単価・基本料金の最適化と組み合わせて評価します。"},{"name":"多店舗の契約一括見直し・デマンド/基本料金最適化","role":"多店舗の固定費をスケールメリットと契約で最適化","detail":"店舗ごとに分散していた電力契約を本部で束ね、契約容量・契約電力が実態に対して過大でないかを一括で検証し、複数店舗のスケールメリットを活かして見直します。高圧受電店ではデマンド監視で乾燥機の同時稼働を平準化し、契約電力（基本料金）を抑えます。本記事は代表シナリオとして観点を整理するもので、量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 小規模（数店舗）・乾燥機運転最適化＋照明LED化/深夜減光","before":"低圧中心で数店舗を展開する小規模事業者が、大型乾燥機の非効率運転（フィルター詰まり・過乾燥）と、24時間全灯の旧型照明・待機電力を抱えていた代表シナリオを想定します。無人運転ゆえに深夜帯の無駄が把握されていませんでした。","after":"乾燥機の清掃・点検と乾燥時間/温度の適正化、看板・店内照明のLED化、人感センサー/タイマーによる深夜減光を組み合わせ、24時間運転のベース負荷と乾燥の電力量を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約30万kWh × 改善 約2.0円/kWh ＝ 年間 ▲60万円（検算：30×2.0＝60）。さらに 5年累計 ▲60万円 × 5年 ＝ ▲300万円（検算：60×5＝300）。照明LED化・深夜減光・乾燥運転の見直しは比較的着手しやすく回収も早い傾向ですが、実額は店舗数・稼働・エネルギー単価により異なります。特定の電力会社・契約形態を推奨するものではありません。"},{"title":"② 中規模（十数店舗）・待機電力/照明制御＋多店舗契約一括見直し","before":"低圧店と高圧受電店が混在する十数店舗を展開する中規模事業者が、店舗ごとにバラバラな電力契約と、24時間無人稼働の待機電力・常時照明を抱えていた代表シナリオを想定します。本部でまとめれば取れるスケールメリットを活かせていませんでした。","after":"待機電力削減と照明のLED化・深夜減光に、多店舗の契約一括見直し（本部一括・スケールメリット）と契約容量の適正化を組み合わせ、量とベース負荷・固定費を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約60万kWh × 改善 約2.5円/kWh ＝ 年間 ▲150万円（検算：60×2.5＝150）。さらに 5年累計 ▲150万円 × 5年 ＝ ▲750万円（検算：150×5＝750）。店舗数が多く契約が分散しているほど一括見直しの効果が出やすい傾向ですが、実額は契約条件・稼働実態により異なります。量（kWh）の削減施策と併せて評価することが前提です。"},{"title":"③ 大規模（数十店舗）・乾燥機高効率化＋デマンド/基本料金最適化","before":"高圧受電の大型店を含む数十店舗を展開する大規模事業者で、乾燥機の効率低下・旧型照明・待機電力に加え、大型店で乾燥機の同時稼働によるデマンド高止まりが残っていた代表シナリオを想定します。設備更新と契約最適化の双方に削減余地がありました。","after":"大型乾燥機の高効率化・運転最適化、照明のLED化・深夜減光、待機電力削減に、デマンド監視によるピーク平準化と多店舗の契約一括見直し・基本料金最適化を重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。","result":"年間使用量 約120万kWh × 改善 約2.0円/kWh ＝ 年間 ▲240万円（検算：120×2.0＝240）。さらに 5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（検算：240×5＝1200）。総合更新・契約最適化は投資と交渉の両面が絡むため回収年数の見極めが前提で、実額は設備の仕様・稼働・契約条件・補助金採択の有無により変動します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（特定企業ではなく代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲60万円／②▲150万円／③▲240万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、燃料・電力単価や稼働の変動は織り込んでいません。実際の効果は店舗数・契約条件・設備構成・稼働実態により異なります。特定企業ではなく代表シナリオ・目安である点を改めて明記します。"},{"label":"削減額の考え方（2段電卓の検算）","detail":"各代表シナリオは、まず年間使用量×改善単価で年間削減額を算出し（①30万kWh×2.0円＝60万円、②60万kWh×2.5円＝150万円、③120万kWh×2.0円＝240万円）、次に年間削減額×5年で5年累計を算出しています（①60×5＝300、②150×5＝750、③240×5＝1,200、単位は万円）。これは効果の規模感を示すための単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。"},{"label":"金額表現の扱い","detail":"コインランドリーは24時間・多店舗で乾燥機・照明・待機電力が積み上がり、わずかな効率改善や契約最適化でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。断定的な普遍化は避け、実額は店舗数・設備の状態・稼働・エネルギー単価・契約条件で変動する点を併記しています。自社の店舗別・設備別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、ヒートポンプ関連の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・店舗別/設備別使用量の把握","detail":"各店舗の電力量・デマンド記録と契約内容に加え、大型乾燥機・照明・空調換気・待機電力の消費、24時間の稼働スケジュールを店舗ごとに棚卸しします。どの店舗・どの設備がいつピークを作り、深夜帯にどれだけ待機電力や常時照明を消費しているかを把握することが、乾燥機効率化・照明制御・契約一括見直しの出発点です。スマートメーターや簡易計測で店舗別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、乾燥機の清掃・運転最適化・照明の深夜減光など回収の早い施策と、LED化・高効率乾燥機更新のような投資を切り分けます。あわせて多店舗の契約が実態に対して過大でないか、本部一括で束ねればスケールメリットが取れるかを分析します。設備・契約ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。"},{"label":"相見積・契約一括見直し／補助金の検討","detail":"乾燥機・LED照明・センサー制御機器などは複数社から相見積を取り、仕様・保証・保守費を含めたライフサイクルコストで比較します。多店舗の電力契約は本部で束ねて一括で見直し、スケールメリットや契約容量の適正化余地を確認します。SIIの省エネ補助金やヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。特定の電力会社・設備ベンダーに偏らず中立的に比較することが前提です。"},{"label":"意思決定・実行・効果検証","detail":"投資・契約判断は本部と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、店舗の閑散期や設備更新のタイミングに合わせて工事・切替を計画します。導入後はスマートメーター等で店舗別・時間帯別の消費をモニタリングし、想定との差異を検証します。運用改善（乾燥運転の見直し・深夜減光・待機電力管理・デマンド管理）も継続し、多店舗で横展開しながらPDCAとして効率を底上げする体制を整えます。"}];
const viewpoints = [{"label":"量（kWh）・契約（基本料金）・単価を分けて考える","detail":"乾燥機効率化・照明LED化・待機電力削減・深夜減光は使用量（購入電力量・燃料）を減らす取り組み、デマンド制御・契約容量の適正化は基本料金を抑える取り組み、多店舗の契約一括見直しは単価・固定費を下げる取り組みです。コインランドリーは24時間・多店舗でベース負荷が大きく量の削減効果が大きい一方、店舗が分散するほど契約最適化の余地も大きくなります。役割の違うこの3つを分けて考えることが重要です。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"LED化や高効率乾燥機への更新のような投資は、初期費用だけでなく想定削減額・保守費・エネルギー費・設備寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格や店舗の稼働率の変動も感度分析に織り込むと判断の堅牢性が高まります。無人・多店舗ゆえに横展開効果も加味すると評価が立体的になります。"},{"label":"運転最適化・照明制御は投資が小さく効きやすい","detail":"大型乾燥機のフィルター清掃・運転最適化や、照明の深夜減光・待機電力削減は、設備更新に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。大型のLED化や乾燥機更新を検討する前に、清掃・運用改善・減光で取れる分を先に取り切る順序が現実的です。24時間運転のコインランドリーでは、深夜帯の無駄を削るだけでも効果が積み上がりやすい点が特徴です。効果は設備・運用の状態により幅がある目安です。"},{"label":"電気だけでなくガス・熱・多店舗全体で見る","detail":"電力・ガス・熱を分断して最適化すると全体最適を逃します。ガス式乾燥機ならガス、電気式乾燥機なら電力に効くため、乾燥機の効率化は熱源によって効き方が変わります。またLED化による空調負荷低減のように、電力と熱・空調を横断する施策は片方だけ見ると効果を過小評価しがちです。多店舗のコインランドリーでは店舗単位でなく、事業全体のエネルギーフローと契約を俯瞰し、最も効く順に手を打つ視点が欠かせません。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカー・ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。中立・非営利の立場の情報や第三者診断を併用し、自社の店舗別・設備別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は代表シナリオを中立的に整理したもので、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備・店舗の状態で効果は大きく変わる","detail":"乾燥機効率化・照明制御・待機電力削減の効果は、既存設備の劣化度・乾燥機の熱源（ガス/電気）・照明の種類・各店舗の稼働率に強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでに効率が良好な設備や稼働時間が短い店舗では効果が小さくなります。導入ありきで進めず、店舗別・設備別の計測に基づいて削減ポテンシャルを見極めることが重要です。数値の普遍化は避けてください。"},{"label":"LED化・乾燥機更新は回収年数の見極めが前提","detail":"照明のLED化や高効率乾燥機への更新は削減効果が期待できる反面、多店舗ぶんの投資額も大きく、稼働率の低い店舗では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。清掃・運転最適化・深夜減光・待機電力削減で取れる分を先に取り、更新は回収年数とライフサイクルで判断することが安全です。導入ありきで進めない姿勢が大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、ヒートポンプ関連補助などは、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要になるため、店舗別・設備別の計測データの整備を先行させると有利です。無人・多店舗では対象範囲の切り分けにも注意が必要です。"},{"label":"契約一括見直しだけでは量は減らない","detail":"多店舗の契約一括見直しや契約容量の適正化は基本料金・固定費に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆に乾燥機効率化・照明LED化・待機電力削減は量に効きますが、基本料金の最適化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。代表シナリオでも両輪で整理しています。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資・契約判断は専門家の診断と自社の店舗別・設備別データに基づき、複数の選択肢を比較したうえで行ってください。無人・多店舗という業態特性を踏まえた個別検証が前提です。"}];
const checklist = ["各店舗の電力量・デマンド記録と契約内容を直近1年分そろえる","大型乾燥機・照明・空調換気・待機電力の設備別消費電力を計測または推計する","乾燥機の熱源（ガス式／電気式）とフィルター詰まり・過乾燥・空運転の実態を点検する","乾燥時間・温度・停止条件が衣類量に対して適正か確認する","看板・店内照明の方式（旧型／LED）と深夜帯の点灯・減光の実態を把握する","人感センサー・タイマー・照度センサーによる照明制御の導入状況を確認する","24時間運転の待機電力（決済機器・空調・換気）のベース負荷を時間帯別に把握する","高圧受電店で乾燥機の同時稼働によるデマンドピークを時間帯別に把握する","各店舗の契約容量・契約電力が実態に対して過大でないかを検証する","多店舗の契約を本部一括で束ねたスケールメリットの余地を洗い出す","SII省エネ補助金・ヒートポンプ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算し、多店舗横展開の効果を見込む"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","乾燥機効率化・照明LED化・待機電力削減と多店舗の契約一括見直しの優先度を考える材料になる","低圧・高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の店舗別・設備別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業ではありません。業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオであり、数値は目安です（2026年度時点）。年間▲60万円・▲150万円・▲240万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は店舗数・契約条件・設備構成・稼働実態により異なるため、自社の店舗別・設備別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は大型乾燥機の効率化・照明制御・待機電力削減・多店舗の契約一括見直しの考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資・契約判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"クリーニング工場の事例とは何が違うのですか。","answer":"同じ「ランドリー」でも電力の使い方が異なります。クリーニング工場（別事例）は有人で、工業用ボイラーや大型設備を中心に稼働するのに対し、コインランドリーは無人・多店舗・乾燥機主体という点が特徴です。コインランドリーでは24時間無人運転の待機電力・照明のベース負荷や、多店舗の契約分散が論点になりやすく、打ち手も乾燥機の運転最適化・照明制御・契約一括見直しが中心になります。業態に応じて読み分けてください。数値は代表シナリオの目安です。"},{"question":"大型乾燥機の電気代・ガス代はどう下げられますか。","answer":"まずフィルター・ダクトの清掃と点検で乾燥効率を回復し、乾燥時間・温度・停止条件を衣類量に応じて適正化して過乾燥・空運転を抑えます。排気熱の回収や高効率機・ヒートポンプ乾燥への更新も選択肢で、電気式乾燥なら購入電力量、ガス式なら燃料に効きます。稼働時間が長い店舗ほど効果が出やすい傾向です。まず運転実態を計測し、削減ポテンシャルを見極めてから着手することが重要です。数値は代表シナリオの目安です。"},{"question":"24時間無人運転の待機電力や照明は減らせますか。","answer":"はい、余地があります。人感センサー・タイマー・照度センサーで深夜・早朝の店内照明を減光・間引きし、看板照明も時間帯で調光することで、24時間運転でもベース負荷を圧縮できます。決済機器・空調・換気の待機電力も見直せます。安全・防犯・集客に必要な明るさは確保しつつ、稼働率の低い時間帯の無駄を削るのが要点で、多くは投資が小さく回収が早い傾向です。数値は代表シナリオの目安です。"},{"question":"多店舗の契約は本部でまとめると得になりますか。","answer":"店舗ごとにばらばらだった契約を本部で束ねて一括で見直すと、スケールメリットや契約容量の適正化余地を活かせる場合があります。あわせて高圧受電店では乾燥機の同時稼働を平準化してデマンドのピークを抑え、契約電力（基本料金）を下げられることがあります。ただし使用量（kWh）自体は契約見直しでは減らないため、乾燥機効率化・照明制御などの量の削減と併せて検討することが大切です。特定の電力会社・契約形態を推奨するものではありません。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。無人・多店舗では対象範囲の切り分けにも注意し、採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"乾燥機効率化・照明LED化・待機電力削減で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は店舗の稼働・設備の状態により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・省エネ支援）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/coin-laundry-electricity-cost-review","title":"コインランドリーの電気代見直し","description":"大型乾燥機・24時間無人運転・照明の電力構造。"},{"href":"/retail-store-electricity-cost-review","title":"小売店の電気代見直し","description":"多店舗・照明・空調の電力論点（読み分け）。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/case-study-commercial-laundry-boiler","title":"クリーニング工場×ボイラーの事例","description":"有人・工業用ボイラー中心のケース（業種の読み分け）。"},{"href":"/case-study-retail-multistore-bulk-contract","title":"小売多店舗×契約一括の事例","description":"多店舗の契約一括見直しとスケールメリット。"},{"href":"/case-study-restaurant-chain-demand-control","title":"飲食チェーン×デマンド制御の事例","description":"多店舗のデマンド・基本料金最適化。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・契約電力の基礎用語。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調の削減効果","description":"照明・空調の省エネ効果の目安。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"乾燥・熱利用の投資支援。"},{"href":"/region-tokyo-business-electricity","title":"東京エリアの法人電気料金","description":"エリア別の単価・契約動向の目安。"},{"href":"/region-kansai-business-electricity","title":"関西エリアの法人電気料金","description":"エリア別の単価・契約動向の目安。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyCoinLaundryMultisitePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-07-15"
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
          <AuthorBadge publishedAt="2026-07-15" updatedAt="2026-07-15" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              {whatYouLearn.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・設備構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/coin-laundry-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コインランドリーの電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。関連する業種の論点は{" "}
              <Link href="/coin-laundry-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コインランドリーの電気代見直し</Link>
              {" "}や{" "}
              <Link href="/electricity-cost-reduction-case-studies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人の電気代を下げた事例集</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・ガス代の構造上の課題を整理します。これらは大型乾燥機を持ち24時間無人で運転する多くのコインランドリーで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、大型乾燥機の効率化・運転最適化を軸に、待機電力削減・照明のLED化/深夜減光・多店舗の契約一括見直し・デマンド/基本料金最適化を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">店舗数や規模の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・稼働実態により異なります。実在企業の事例ではありません。各効果は年間使用量×改善単価で年間削減額を、年間削減額×5年で5年累計を算出した単純試算です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースに近い取り組みを自社で進めるための確認項目です。まずは現状把握と店舗別・設備別使用量の取得から始めましょう。</p>
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
            <ConsultCta from="coin-laundry" />
          </div>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-07-15" />
          </div>

          <RelatedLinks heading="関連ページ" links={relatedLinks} />

          <ContentCta
            heading="自社の電気代と削減余地を試算する"
            description="本ケースに近いかどうかは、自社の業種・規模・店舗数・契約条件で試算してみるのが近道です。シミュレーターと業種別電気代計算機で、上振れリスクと削減余地を中立的な判断材料として確認できます。"
            links={contentCtaLinks}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="大型乾燥機の省エネや24時間無人運転・多店舗の電力契約の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・設備更新投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
