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

const pageTitle = "農協・カントリーエレベーター×乾燥調製で電気代を削減した事例｜季節ピークと契約電力（代表シナリオ）";
const pageDescription = "収穫期に穀物乾燥・調製が集中する農協・カントリーエレベーター（ライスセンター）が、送風機・乾燥機のインバータ化や乾燥運転の最適化、ヒートポンプ乾燥・排熱回収、収穫期のデマンド平準化・力率改善・契約電力の最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-agri-coop-grain-dryer";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["カントリーエレベーター 電気代 削減 事例","穀物乾燥機 省エネ 送風機","農協 ライスセンター 契約電力","収穫期 デマンド 力率 改善","乾燥調製 ヒートポンプ 排熱回収"],
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

const h1Text = "農協・カントリーエレベーター×乾燥調製：季節ピークと契約電力を抑えた代表事例";
const breadcrumbTitle = "農協・カントリーエレベーターの電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。農協が運営するカントリーエレベーターやライスセンターは、収穫期に大量の籾・麦・大豆などを受け入れ、穀物乾燥機・送風機・昇降機（搬送）・調製設備を集中稼働させるため、短期間に電力・熱（灯油・電気ヒーター）を大量消費します。本事例では、収穫期に乾燥調製が集中する季節ピーク型の需要を扱い、通年で営農する施設園芸の事例（施設園芸×ヒートポンプ加温）とは需要パターン（季節集中 対 通年）が異なる点を、冒頭で明示したうえで整理します。送風機・乾燥機のインバータ化と乾燥運転の最適化、ヒートポンプ乾燥・排熱回収、収穫期のデマンド平準化・力率改善、契約電力の最適化によって電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安としてご覧ください。";
const d1CtaLead = "自社の施設が今回の農協・カントリーエレベーターの代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、乾燥機・送風機・搬送・調製のどこに削減余地がありそうか、収穫期のピークが契約電力をどれだけ押し上げているかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "乾燥機・送風機のインバータ化やヒートポンプ乾燥、収穫期のデマンド平準化の検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（インバータ化・乾燥最適化・排熱回収）と単価・基本料金の最適化（デマンド/力率・契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["農協・カントリーエレベーター（乾燥調製施設）で収穫期に電気代・契約電力が重くなる理由（季節集中のデマンドと熱負荷）の構造","送風機・乾燥機のインバータ化と乾燥温度・風量の最適化が購入電力量を下げうる仕組みと適性条件","ヒートポンプ乾燥・排熱回収で灯油・電気ヒーターの熱コストを縮小する考え方の目安","収穫期のデマンドピーク平準化・力率改善・契約電力の最適化で年間の基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（収穫期集中の乾燥調製と季節ピーク）","detail":"農協が運営するカントリーエレベーターやライスセンターは、秋の収穫期に籾・麦・大豆などを一斉に受け入れ、穀物乾燥機・送風機・昇降機・籾摺り・色彩選別などの調製設備を集中稼働させます。乾燥は水分を規定値まで落とすために長時間の送風・加熱を要し、収穫のピーク時には昼夜連続で運転が続き、収穫期を外れると稼働が大きく落ち込むため、需要が季節に強く偏るのが特徴です。"},{"label":"規模（低圧〜高圧の農業関連需要が中心）","detail":"小規模なライスセンターは低圧、大型のカントリーエレベーターやサイロ併設施設では高圧受電の規模もあり、契約電力（デマンド）は収穫期の同時稼働で決まりがちです。基本料金が年間の最大デマンドで決まるため、短い収穫期に立つピークが年間を通じた基本料金を押し上げる構造になりやすい点が、通年稼働の施設と異なります。本記事は業界統計・公開事例から再構成した代表シナリオとして、規模の異なる複数パターンを想定します。"},{"label":"契約区分（基本料金＋電力量料金＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成されます。カントリーエレベーターは収穫期に電力量が跳ね、送風機・搬送の同時稼働でデマンドも一気に上がるため、基本料金と電力量料金の双方が収穫期に集中します。年間では稼働月が限られ、契約電力の水準と実稼働の乖離をどう扱うかが料金に直結する構造です。"},{"label":"熱需要（乾燥の加熱・送風に削減余地が残る）","detail":"穀物乾燥は水分を落とすために温風を送り続けるため、灯油バーナや電気ヒーターの熱と送風機の電力を大量に消費し、排気とともに熱を捨てています。乾燥温度・風量の設定や、排気熱・機械排熱の回収、ヒートポンプ乾燥への転換に削減余地が残りやすい領域です。乾燥は品質（胴割れ・食味）とのバランスがあり、過度な高温乾燥を避けつつ効率を上げる余地を見極めることが起点になります。"},{"label":"コスト構造（電力・灯油・作業計画が絡む）","detail":"乾燥調製のエネルギーコストは、送風機・搬送・調製の電力、乾燥熱源の灯油または電気、そして収穫の荷受け計画・順番待ちの影響が絡み合い、エネルギー単体ではなく稼働スケジュールまで含めて捉える必要があります。本記事の金額はすべて代表シナリオの目安です。"}];
const beforeState = [{"label":"送風機・乾燥機が定速運転で過剰送風になっている","detail":"経年した乾燥設備では送風機が定速運転のままで、乾燥後半や水分の低い荷でも一律の風量・温度で運転し、過剰な送風・加熱が続いていました。負荷に応じて風量や温度を絞る制御がなく、乾燥の進み具合を計測して運転を調整する仕組みも乏しい状態でした。送風動力と加熱の双方で無駄が積み上がり、電力・灯油に跳ね返っていました。"},{"label":"排気熱を回収せず捨てている","detail":"乾燥機の排気には多くの熱が残っているにもかかわらず、回収せず大気へ捨て、別の乾燥機やロットでは改めて加熱していました。排熱回収やヒートポンプ乾燥の導入余地があるにもかかわらず、熱の使い回しがされておらず、灯油・電力の双方で非効率が残り、改善機会を取りこぼしていました。"},{"label":"収穫期の同時稼働でデマンドが跳ねる／力率が低い","detail":"収穫のピーク時に複数の乾燥機・送風機・搬送・調製設備が同じ時間帯に立ち上がり、契約電力（デマンド）のピークが高止まりしていました。荷受けや乾燥開始のタイミングをずらす運用がなく、年間の基本料金を決める最大デマンドが収穫期に集中していました。加えて誘導性負荷が多く力率が低下し、力率割引を十分に取れていない状態で、契約電力が実態に対して過大でないかの検証もされていませんでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"施設全体の電力量は把握できても、乾燥機別・工程別（乾燥・搬送・調製）の内訳やピークの発生源がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。エネマネ・デマンド監視が未整備で、待機運転や過剰送風に気づきにくく、インバータ化・排熱回収・ヒートポンプ化の効果を検証する基盤もありません。"}];
const approaches = [{"name":"送風機・乾燥機のインバータ化・乾燥運転の最適化","role":"収穫期の送風動力と加熱を負荷に応じて削減","detail":"送風機にインバータを導入して乾燥の進み具合や水分に応じた可変風量運転へ切り替え、乾燥温度・風量・送風時間を最適化して過剰送風・過剰加熱を抑えます。水分計測に基づき必要な分だけ乾かす制御へ移行することで、送風動力と灯油・電気ヒーターの双方に効き、収穫期に使用量が集中する乾燥調製で効果が出やすい領域の一つです。効果は設備の状態により幅があります。"},{"name":"ヒートポンプ乾燥・排熱回収","role":"捨てていた熱を減らし灯油・電力の熱コストを削減","detail":"乾燥機の排気熱を熱交換器で回収して吸気予熱や別ロットの乾燥へ再利用し、灯油バーナの一部をヒートポンプ乾燥に置き換えて熱源効率を高めます。低温除湿乾燥は品質面のメリットもあり、燃料費の変動リスクを抑える効果も期待できます。ただし灯油依存を下げつつ電力へ転換する場合は、収穫期のデマンドとのバランスを見極めることが前提です。"},{"name":"運用改善・荷受け計画の平準化","role":"投資を伴わずに稼働ロスとピークを削る","detail":"荷受けのスケジュール調整や乾燥ロットの組み方の見直しで、複数乾燥機の同時立ち上げを避け、待機運転や中途半端な小ロット乾燥を減らします。乾燥開始のタイミングを分散させることで、収穫期のデマンドピークの抑制にもつながり、投資を伴わない運用改善は回収が早く、まず着手しやすい打ち手です。"},{"name":"デマンド制御・力率改善・契約電力最適化","role":"季節ピークの基本料金・単価面を契約と運用の両面で最適化","detail":"デマンド監視で収穫期の乾燥機・送風機の同時立ち上げを避け、ピークを平準化して契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて年間の最大デマンドが収穫期の一時的なピークで決まっている実態を踏まえ、契約電力が過大でないかを検証します。"}];
const caseScenarios = [{"title":"① 中小ライスセンター・送風機インバータ化＋乾燥最適化","before":"低圧〜高圧の中小ライスセンターが、定速運転の送風機と一律設定の乾燥運転で過剰送風・過剰加熱を抱えていた代表シナリオを目安に想定します。乾燥機別の消費は見えておらず、収穫期に電力・灯油のロスが積み上がっていました。","after":"送風機のインバータ化と、水分計測に基づく乾燥温度・風量・送風時間の最適化を組み合わせ、収穫期の消費を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安で、特定の電力会社・契約形態を推奨するものではありません。","result":"年間使用量 約80万kWh × 改善 約1.5円/kWh ＝ 年間 ▲120万円（検算：80×1.5＝120）。5年累計 ▲120万円 × 5年 ＝ ▲600万円（検算：120×5＝600）。インバータ化・乾燥最適化は比較的着手しやすく回収も早い傾向ですが、実額は設備の状態・収穫量・エネルギー単価により異なります。"},{"title":"② 中堅カントリーエレベーター・デマンド制御＋力率改善","before":"高圧受電の中堅カントリーエレベーターで、収穫期に複数乾燥機・送風機・搬送が同時稼働してデマンドが高止まりし、力率も低かった代表シナリオを想定します。年間の基本料金が収穫期の一時ピークで押し上げられ、力率割引を十分に取れていませんでした。","after":"デマンド監視によるピーク平準化と荷受け計画の分散、進相コンデンサによる力率改善・契約電力の適正化を組み合わせ、基本料金と単価面を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約200万kWh × 改善 約1.4円/kWh ＝ 年間 ▲280万円（検算：200×1.4＝280）。5年累計 ▲280万円 × 5年 ＝ ▲1,400万円（検算：280×5＝1400）。契約電力の水準が高いほど効果が出やすい傾向ですが、実額は同時稼働の実態・力率・契約条件により異なります。量（kWh）の削減施策と併せて評価することが前提です。"},{"title":"③ 大規模施設・ヒートポンプ乾燥＋排熱回収＋運用改善","before":"大規模なカントリーエレベーターで、灯油バーナ主体の乾燥と排気熱の未回収、収穫期の待機ロスが残っていた代表シナリオを想定します。乾燥量が大きく、熱源転換と運用改善の双方に削減余地がありました。","after":"排気熱の回収とヒートポンプ乾燥への一部転換、荷受け平準化・乾燥ロット最適化などの運用改善を重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。","result":"年間使用量 約350万kWh × 改善 約1.2円/kWh ＝ 年間 ▲420万円（検算：350×1.2＝420）。5年累計 ▲420万円 × 5年 ＝ ▲2,100万円（検算：420×5＝2100）。熱源転換は投資が大きく回収年数の見極めが前提で、実額は乾燥量・燃料単価・補助金採択の有無により変動します。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲120万円／②▲280万円／③▲420万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁・農林水産省の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、灯油・電力単価や収穫量の変動は織り込んでいません。"},{"label":"削減額の考え方（2段の電卓検算）","detail":"各代表シナリオは、年間使用量×改善単価＝年間削減額（①80×1.5＝120、②200×1.4＝280、③350×1.2＝420、単位は万円）と、年間削減額×5年＝5年累計（①120×5＝600、②280×5＝1,400、③420×5＝2,100）の2段で算出しています。これは効果の規模感を示すための単純累計で、割引率・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。"},{"label":"金額表現の扱い","detail":"収穫期に集中する乾燥調製はエネルギー使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。実額は設備の状態・収穫量・単価・契約条件で変動するため、自社の設備別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、農林水産省の産地・スマート農業関連支援、ヒートポンプ関連の補助などはいずれも公的に定められた枠組みで、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。"}];
const process = [{"label":"データ収集・設備別使用量の把握","detail":"受変電の電力量・デマンド記録に加え、乾燥機別・工程別（乾燥・送風・搬送・調製）の消費電力・灯油、収穫期の稼働スケジュールや荷受け量を集めて棚卸しします。どの設備がいつピークを作り、どれだけ排熱を出しているかを把握することが各施策の出発点です。簡易計測やデマンド監視で設備別・時間帯別に見える化し、ベース負荷と収穫期ピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、送風機インバータ化・乾燥運転最適化・運用改善など回収の早い施策と、ヒートポンプ乾燥・排熱回収のような設備投資を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。"},{"label":"相見積・補助金／税制の検討","detail":"乾燥機・送風機・熱交換器・進相コンデンサなどは複数社から相見積を取り、仕様・保証・保守費・燃料計画を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、農林水産省の産地・スマート農業関連支援、ヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。あわせて電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、収穫期を外した閑散期に乾燥機のインバータ化・排熱回収・熱源転換の工事を計画します。導入後はデマンド監視やエネマネで設備別の消費と排熱回収の実績をモニタリングし、想定との差異を検証します。"}];
const viewpoints = [{"label":"量（kWh）・契約電力・単価を分けて考える","detail":"インバータ化・乾燥最適化・排熱回収・ヒートポンプ化は使用量（購入電力量・灯油）を減らす取り組み、デマンド制御・力率改善・契約電力の適正化は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。カントリーエレベーターは収穫期に量とピークが集中するため双方が効き、要素を切り分けると投資配分の判断がしやすくなります。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"ヒートポンプ乾燥や排熱回収のような設備投資は、初期費用だけでなく想定削減額・保守費・燃料費・設備の寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあり、灯油・電力価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"収穫期ピークが年間の基本料金を決める","detail":"契約電力に基づく基本料金は年間の最大デマンドで決まるため、短い収穫期に立つピークが稼働の少ない月まで含めた年間の基本料金を押し上げます。荷受けや乾燥開始のタイミングを分散し、収穫期の同時稼働を避けることが、通年稼働の施設以上に効いてきます。デマンド監視で季節ピークを平準化する視点がカントリーエレベーターでは特に重要で、効果は収穫量・体制により幅があります。"},{"label":"電力だけでなく熱・燃料まで含めて見る","detail":"電力・灯油・熱を分断して最適化すると全体最適を逃します。排熱回収やヒートポンプ乾燥のように電力と燃料・熱を横断する施策は片方だけ見ると効果を過小評価しがちなため、施設全体のエネルギーフローで俯瞰し、最も効く順に手を打つ視点が欠かせません。乾燥の熱と送風・搬送の動力までまとめて捉えることが、カントリーエレベーターの最適化では重要です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の乾燥機メーカー・設備ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の設備別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は代表シナリオを中立的に整理したもので、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備の状態と収穫量で効果は大きく変わる","detail":"インバータ化・排熱回収・ヒートポンプ化の効果は、既存設備の効率・排気温度・収穫量・稼働パターンに強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでに高効率な設備や乾燥量が少ない施設では効果が小さくなります。導入ありきで進めず、設備別の計測に基づいて削減ポテンシャルを見極めてください。"},{"label":"ヒートポンプ乾燥・熱源転換は回収年数の見極めが前提","detail":"ヒートポンプ乾燥や排熱回収は削減効果が期待できる反面、投資額も大きく、稼働が収穫期に限られる施設では回収年数が長くなります。採択を前提に計画を組むと不採択時に資金計画が崩れるおそれがあるため、送風機インバータ化・乾燥最適化・運用改善で取れる分を先に取り、熱源転換は回収年数とライフサイクルで判断することが安全です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、農林水産省の産地・スマート農業関連支援、ヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要なため、設備別の計測データの整備を先行させると有利です。"},{"label":"デマンド・力率改善だけでは量は減らない","detail":"デマンド制御や力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆にインバータ化・排熱回収・ヒートポンプ化は量に効きますが、収穫期のピーク平準化までは自動では実現しないため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","乾燥機別・工程別の消費電力・灯油を計測または推計する","収穫期の乾燥運転時間・乾燥温度・風量・処理量を集計する","送風機のインバータ導入状況と過剰送風の有無を点検する","乾燥機の排気温度と排熱回収・ヒートポンプ乾燥の導入余地を確認する","収穫期の同時立ち上げによるデマンドピークを時間帯別に把握する","力率と力率割引・割増の適用状況を契約書で確認する","最大デマンドが収穫期の一時ピークで決まっていないか、契約電力が過大でないか検証する","荷受け計画・乾燥ロットの組み方など運用改善の余地を洗い出す","灯油依存度と燃料費変動リスクを確認する","SII補助金・GX/CN税制・ものづくり補助金・農水省の産地/スマート農業支援・ヒートポンプ補助の最新要件を確認する","施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","インバータ化・排熱回収・ヒートポンプ化と契約見直しの優先度を考える材料になる","収穫期に集中する季節ピークの高騰リスクを定量的に把握できる","中立的な立場で自社の設備別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁・農林水産省の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲120万円・▲280万円・▲420万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・設備構成・収穫量・稼働実態により異なるため、自社の設備別計測データに基づく試算が前提となります。"},{"question":"特定の電力会社や乾燥機メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事は送風機のインバータ化・乾燥最適化・ヒートポンプ乾燥・排熱回収・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオで、優劣比較や勧誘を目的としていません。投資判断は複数の選択肢を比較し、第三者の診断や自社データに基づいて行うことをおすすめします。"},{"question":"収穫期に集中する需要は、通年稼働の施設と何が違いますか。","answer":"カントリーエレベーターやライスセンターは収穫期に乾燥調製が集中する季節ピーク型で、短い期間に立つ最大デマンドが年間の基本料金を決める点が特徴です。通年で営農する施設園芸のように需要が年間に分散する施設とは需要パターンが異なり、収穫期のピーク平準化の重要度が相対的に高くなります。通年型のケースは施設園芸×ヒートポンプ加温の事例で扱っており、需要パターンの違いを踏まえて読み分けることをおすすめします。"},{"question":"送風機のインバータ化や乾燥最適化はどんな場合に効果が出ますか。","answer":"一般に、送風機が定速運転のままの設備や、水分に関係なく一律の温度・風量で運転している乾燥機、収穫期の稼働時間が長い施設ほど効果が出やすい傾向です。水分計測に基づく可変風量・温度制御へ移行すると、送風動力と灯油・電気ヒーターの双方に効きます。逆にすでに可変制御が入っている設備や乾燥量が少ない施設では効果が小さくなります。まず設備別に計測し、削減ポテンシャルを見極めてから着手してください。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"収穫期に複数乾燥機・送風機の同時立ち上げを避け、荷受けや乾燥開始のタイミングを分散してデマンドのピークを平準化すると、契約電力に基づく基本料金を抑えられる場合があります。あわせて進相コンデンサによる力率改善で力率割引を確保し、年間の最大デマンドが収穫期の一時ピークで決まっている場合は契約電力が過大でないかを検証します。使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"デマンド制御と力率改善はどう違いますか。","answer":"デマンド制御は一定時間の最大需要（デマンド）を抑えて契約電力＝基本料金を下げる取り組みで、収穫期の乾燥機・送風機の同時稼働を避けるのが基本です。力率改善は進相コンデンサで無効電力を補償し、力率割引の確保や力率割増の回避につなげる取り組みです。どちらも使用量そのものを大きく減らすものではないため、量の削減施策と組み合わせて考えることが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、農林水産省の産地・スマート農業関連支援、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要で、採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"インバータ化・排熱回収・ヒートポンプ化で購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。効果は設備の状態・稼働により異なり、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"},{"name":"農林水産省（農業のエネルギー・スマート農業）","url":"https://www.maff.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/subsidy-agriculture-primary-strategy","title":"農業の補助金戦略","description":"一次産業の設備投資支援。"},{"href":"/case-study-greenhouse-horticulture-heatpump","title":"施設園芸×ヒートポンプ加温の事例","description":"通年営農のケース（季節ピークとの読み分け）。"},{"href":"/dairy-electricity-cost-review","title":"酪農・畜産の電気代見直し","description":"農業関連の電力論点（近縁業種）。"},{"href":"/food-processing-electricity-cost-review","title":"食品加工業の電気代見直し","description":"乾燥・調製の熱/電力論点。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"乾燥熱源の投資支援。"},{"href":"/demand-control-reduction-effect","title":"デマンド削減の効果","description":"収穫期の契約電力対策の効果目安。"},{"href":"/subsidy-food-processing-strategy","title":"食品加工の補助金戦略","description":"設備更新の投資支援。"},{"href":"/energy-management-glossary","title":"エネルギー管理の用語集","description":"契約電力・デマンドの基礎用語。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyAgriCoopGrainDryerPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・設備構成・収穫量・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド制御ガイド</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。通年営農との読み分けは{" "}
              <Link href="/case-study-greenhouse-horticulture-heatpump" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">施設園芸×ヒートポンプ加温の事例</Link>
              {" "}を、契約電力の基礎は{" "}
              <Link href="/demand-power-glossary" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド・契約電力の用語集</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは乾燥調製施設を運営する多くの農協・カントリーエレベーターで共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、送風機・乾燥機のインバータ化と乾燥最適化を軸に、ヒートポンプ乾燥・排熱回収・運用改善・デマンド/力率改善を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業種の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・収穫量・稼働実態により異なります。実在企業の事例ではありません。5年累計は年間削減額×5年の単純累計です。</p>
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
              ※ 数値は2026年度時点の公開情報（経済産業省・資源エネルギー庁・農林水産省・SII採択事例集・各業界統計等）から再構成した代表シナリオの目安です。実数値は契約条件・使用実態により異なります。本記事は特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。
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
              {" "}で、自社が本ケースに近いかを確認できます。収穫期の契約電力対策の効果目安は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンド削減の効果</Link>
              {" "}も参考になります。試算はあくまで目安であり、特定の電力会社・契約形態を推奨するものではありません。
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
            <ConsultCta from="agri-coop-grain-dryer" />
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
            heading="乾燥調製施設の省エネ・ヒートポンプ乾燥・電力契約の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、農協・法人・自治体の電力契約の見直しや省エネ・設備投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
