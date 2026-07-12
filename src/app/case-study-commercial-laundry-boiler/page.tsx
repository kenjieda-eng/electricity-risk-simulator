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

const pageTitle = "クリーニング工場×ボイラー電化で電気代を削減した事例｜乾燥効率・営業時間シフト（代表シナリオ）";
const pageDescription = "洗濯・乾燥・仕上げで蒸気ボイラーと乾燥機に熱と電力を大量に使うクリーニング工場が、ボイラーの電化（ヒートポンプ化）・乾燥効率の改善・営業時間シフトによるデマンド平準化・力率改善・契約電力最適化で電気代を抑えた代表シナリオを、業界統計・公開事例から再構成して整理。数値は目安で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。";
const pageUrl = "https://simulator.eic-jp.org/case-study-commercial-laundry-boiler";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: ["クリーニング工場 電気代 削減 事例","ボイラー 電化 ヒートポンプ 省エネ","乾燥機 効率 改善 補助金","営業時間シフト デマンド 力率","洗濯 乾燥 仕上げ 電気代"],
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

const h1Text = "クリーニング工場×ボイラー電化：乾燥効率・営業時間シフトで電気代を抑えた代表事例";
const breadcrumbTitle = "クリーニング工場の電気代削減事例";
const leadText = "本記事は実在企業ではなく業界統計・公開事例から再構成した代表シナリオであり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。クリーニング工場（ランドリー工場）は、洗濯・脱水・乾燥・仕上げ（プレス・アイロン）の各工程で蒸気ボイラーと乾燥機を稼働させ、熱と電力を大量に消費します。蒸気ボイラーの燃料に依存する熱供給を、ヒートポンプ化・排熱回収で電化・高効率化し、乾燥機の熱ロスを抑え、営業時間シフトによるデマンド平準化・力率改善・契約電力の最適化を組み合わせることで電気代の構造をどう改善できるかを、中立な社団法人の視点で代表シナリオとして整理します。実数値は契約条件・設備構成・稼働実態により異なるため、本記事の削減幅はあくまで目安（代表値）としてご覧ください。";
const d1CtaLead = "自社が今回のクリーニング工場×ボイラー電化の代表シナリオと近い状況かどうかは、まず使用実態の試算から始まります。業種別電気代計算機を使えば、業種や規模・稼働条件を入力するだけで電気代の概算と内訳の目安を確認でき、ボイラー熱・乾燥機・仕上げ・ユーティリティのどこに削減余地がありそうかの当たりを付けられます。代表シナリオとの差を把握する最初の一歩としてご活用ください。";
const simulatorCtaLead = "ボイラーの電化・乾燥効率改善や営業時間シフトの検討は、まず自社の電気代と高騰リスクを把握することから始まります。法人向け電気料金シミュレーターを使えば、現在の契約条件をもとに料金上昇シナリオでの負担増を見える化でき、量の削減（電化・乾燥効率・排熱回収）と単価・基本料金の最適化（デマンド/力率・契約見直し）のどちらにどれだけ取り組むべきかの判断材料になります。代表シナリオと自社の差を確認する出発点としてご利用ください。";
const whatYouLearn = ["クリーニング工場×ボイラーで電気代が重くなる理由（蒸気ボイラー・乾燥機の熱負荷とデマンド・力率）の構造","蒸気ボイラーの電化（ヒートポンプ化）・排熱回収が燃料と購入電力量のバランスを変える仕組みと適性条件","乾燥機の高効率化・運用改善で消費電力量を縮小する考え方の目安","営業時間シフト・デマンド制御・力率改善・契約電力の最適化で基本料金を抑える観点","規模別の代表シナリオ3件（年間削減額と5年累計）と、自社で再現するためのチェックリスト"];
const premise = [{"label":"業種特性（洗濯・乾燥・仕上げの熱負荷と動力の複合）","detail":"クリーニング工場は、洗濯・脱水・乾燥・仕上げ（プレス・アイロン・タンブラー）の各工程を連続して回すため、蒸気ボイラーによる熱供給と乾燥機・搬送・コンプレッサなどの動力が複合します。とりわけ乾燥と仕上げは蒸気と電力を大量に使い、ボイラーの燃料費と乾燥機の電力量が重くのしかかります。受注量の波動で稼働がバッチ的に増減し、洗濯物の受け入れ・仕上げ・出荷の時間帯によって電力の使い方が大きく変わるのが特徴です。"},{"label":"規模（低圧動力から高圧の中堅需要まで）","detail":"クリーニング工場は、地域密着の小規模工場では低圧電力、集配を担うセントラル工場や病院・ホテルリネンを扱う大型工場では高圧受電の中堅規模まで幅があります。乾燥機・仕上げ機を多数備える工場では契約電力（デマンド）が高めに設定されがちで、基本料金が契約電力で決まるため、複数機の同時稼働によるピークをどう抑えるかが料金に直結します。"},{"label":"契約区分（基本料金＋電力量料金＋燃料費＋調整費）","detail":"電力料金は契約電力に基づく基本料金、使用量に応じた電力量料金、燃料費調整額や再エネ賦課金などで構成され、これに蒸気ボイラーの燃料費（ガス・重油）が加わります。乾燥・仕上げで電力量が大きく電力量料金の比率が高くなりやすい一方、複数機の同時稼働でデマンドが跳ねると基本料金も膨らみます。量（kWh）の削減とボイラー燃料の見直し、契約電力の抑制が複合的に効く構造で、どこにどれだけ取り組むかを切り分けて考えることが出発点になります。"},{"label":"熱需要（ボイラー・乾燥に削減余地が残る）","detail":"クリーニング工場は蒸気を高温で供給し続けるため、ボイラー・配管からの放熱や、乾燥機の排気・ドレンとして捨てている排熱が大きく、電化（ヒートポンプ化）・排熱回収・断熱に削減余地が残りやすい領域です。乾燥機では熱風の排気ロスが積み上がり、仕上げ工程では蒸気の凝縮熱を回収せず捨てているケースもあります。ボイラー・乾燥の熱の状態を把握することが、クリーニング工場の省エネの起点になります。"},{"label":"コスト構造（電力・燃料・水・歩留まりが絡む）","detail":"クリーニングのエネルギーコストは、蒸気ボイラーの燃料、乾燥機・仕上げ機・洗濯機の電力、給湯・給水の熱が絡み合い、再仕上げ（やり直し）や乾燥ムラといった歩留まりの影響も受けます。エネルギー単体ではなく、工程の段取り・受注平準化・生産計画まで含めて捉える必要があります。どの設備でどのエネルギーをどれだけ使うかを把握することが、電化・乾燥効率・排熱回収・契約最適化の判断の出発点になります。"}];
const beforeState = [{"label":"ボイラーの燃料依存と放熱ロスが放置されている","detail":"経年した蒸気ボイラーでは、燃焼効率の低下や配管・バルブの断熱劣化により、投入した熱の相当分が放熱として逃げていました。燃料費が高止まりしても「昔からこのボイラー」という運用が続き、電化（ヒートポンプ化）や高効率機への更新余地を検証できていませんでした。ボイラー効率や蒸気圧の計測も乏しく、どこから手を付けるべきか優先順位を付けられない状態です。"},{"label":"乾燥機・仕上げの排熱を回収せず捨てている","detail":"乾燥機の高温排気や仕上げ工程の蒸気ドレン、コンプレッサの排熱などを回収せず大気へ捨て、別工程では改めて加熱・給湯していました。排熱回収熱交換器やヒートポンプの導入余地があるにもかかわらず、熱の使い回しがされておらず、燃料・購入電力量の双方で非効率が残っていました。改善機会を取りこぼしていた代表シナリオです。"},{"label":"複数機の同時稼働でデマンドが跳ねる／力率が低い","detail":"洗濯機・乾燥機・仕上げ機が朝の立ち上げや繁忙時間帯に一斉に稼働し、契約電力（デマンド）のピークが高止まりしていました。営業時間をずらす発想やピーク監視の仕組みがなく、基本料金が過大になりがちです。加えて誘導性負荷が多く力率が低下し、力率割引を十分に取れていない、あるいは力率割増を受けている状態でした。契約電力が実態に対して過大でないかの検証もされていませんでした。"},{"label":"エネルギーの見える化が乏しく属人運用","detail":"工場全体の電力量や燃料は把握できても、設備別・工程別（洗濯・乾燥・仕上げ・ユーティリティ）の内訳がリアルタイムに見えず、改善はベテラン担当者の経験に依存していました。FEMS・エネマネが未整備で、乾燥機の空運転やボイラーの過剰運転に気づきにくく、電化・排熱回収・効率化の効果を検証する基盤もありません。"}];
const approaches = [{"name":"蒸気ボイラーの電化（ヒートポンプ化）・排熱回収","role":"燃料に依存する熱供給を高効率化し排熱を再利用","detail":"燃料焚きの蒸気ボイラーを、産業用ヒートポンプや高効率機へ置き換え、給湯・低温側の熱需要を電化して排熱を回収・再利用します。乾燥機の排気やドレンの熱を熱交換器で回収し、給水予熱や洗濯の温水へ再利用することで、燃料と購入電力量のロスを同時に抑えます。熱需要の温度帯によって電化の適否が分かれるため、温度帯ごとに熱を仕分けることが要点です。効果は設備の状態により幅があり、代表シナリオの目安として示します。"},{"name":"乾燥機の高効率化・運用改善","role":"消費の中心である乾燥・仕上げを源流から効率化","detail":"老朽乾燥機をヒートポンプ式・高効率タンブラーへ更新し、送風機・ポンプにインバータを導入して負荷に応じた可変速運転へ切り替えます。乾燥時間・温度の適正化、満載運転（空運転の削減）、フィルタ清掃による風量確保などの運用改善で熱ロスを抑えます。稼働時間が長い乾燥機ほど更新効果が積み上がりますが、大型投資のため回収年数の見極めが前提です。"},{"name":"営業時間シフト・生産計画の最適化","role":"投資を伴わずにデマンドと稼働ロスを削る","detail":"洗濯・乾燥・仕上げの立ち上げ時間を分散し、繁忙時間帯に集中していたピークを平準化することで、契約電力（基本料金）の抑制につなげます。受注のロット集約や工程の順序見直しで乾燥機の空運転・待機を減らし、無駄な蒸気供給を抑えます。営業時間シフトや段取り改善は投資を伴わず回収が早く、まず着手しやすい打ち手です。効果は生産計画や納期要件により幅があります。"},{"name":"デマンド制御・力率改善・契約電力最適化","role":"基本料金・単価面を契約と運用の両面で最適化","detail":"デマンド監視で複数機の同時立ち上げを避け、ピークを平準化して契約電力（基本料金）を抑えます。進相コンデンサの設置・容量適正化で力率を改善し、力率割引の確保・力率割増の回避を図ります。あわせて契約電力が実態に対して過大でないかを検証し、適正化余地を確認します。量の削減施策と組み合わせて評価することが前提です。"}];
const caseScenarios = [{"title":"① 中小クリーニング工場・ボイラー電化＋排熱回収","before":"低圧〜高圧受電の中小クリーニング工場が、経年した蒸気ボイラーの燃料依存と乾燥機排熱の未回収を抱えていた代表シナリオを目安に想定します。設備別の消費は見えておらず、放熱・排熱のロスが燃料・電力に跳ね返っていました。","after":"低温側熱需要のヒートポンプ化と、乾燥機排気・ドレン熱の回収による給水予熱・温水再利用を組み合わせ、熱起因の消費を抑えた代表シナリオです。数値は業界統計・公開事例から再構成した目安です。","result":"年間使用量 約80万kWh × 改善 約1.5円/kWh ＝ 年間 ▲120万円（検算：80×1.5＝120）。5年累計 ▲120万円 × 5年 ＝ ▲600万円（検算：120×5＝600）。排熱回収は比較的着手しやすく回収も早い傾向ですが、実額は設備の状態・稼働・エネルギー単価により異なります。"},{"title":"② 中堅セントラル工場・乾燥効率＋営業時間シフト","before":"病院・ホテルリネンを扱う中堅セントラル工場で、乾燥機・仕上げ機の同時稼働でデマンドが高止まりし、乾燥効率も低かった代表シナリオを想定します。基本料金が過大で、繁忙時間帯にピークが集中していました。","after":"乾燥機のヒートポンプ化・満載運転などの効率改善と、営業時間シフトによるピーク平準化・契約電力の適正化を組み合わせ、量と基本料金の双方を抑えた代表シナリオです。数値は目安で、実在企業の事例ではありません。","result":"年間使用量 約150万kWh × 改善 約1.6円/kWh ＝ 年間 ▲240万円（検算：150×1.6＝240）。5年累計 ▲240万円 × 5年 ＝ ▲1,200万円（検算：240×5＝1200）。稼働量が多いほど効果が出やすい傾向ですが、実額は同時稼働の実態・乾燥効率・契約条件により異なります。量（kWh）の削減施策と併せて評価することが前提です。"},{"title":"③ 大規模工場・ボイラー電化＋高効率乾燥機更新","before":"大型のリネンサプライ工場で、老朽ボイラーの効率低下と乾燥機・仕上げ機の熱ロス、待機運転が残っていた代表シナリオを想定します。稼働時間が長く、電化・更新と運用改善の双方に削減余地がありました。","after":"産業用ヒートポンプによるボイラー電化と高効率乾燥機への更新に、排熱回収・営業時間シフト・力率改善を重ねた代表シナリオです。補助金・税制の活用可能性も含めて回収年数を試算します。","result":"年間使用量 約200万kWh × 改善 約1.8円/kWh ＝ 年間 ▲360万円（検算：200×1.8＝360）。5年累計 ▲360万円 × 5年 ＝ ▲1,800万円（検算：360×5＝1800）。更新は大型投資のため回収年数の見極めが前提で、実額は設備の仕様・稼働・補助金採択の有無により変動します。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const dataNotes = [{"label":"数値の位置づけ（代表シナリオ・目安）","detail":"本記事のBefore/Afterや削減額（①▲120万円／②▲240万円／③▲360万円）は、特定企業の実績ではなく、経産省・資源エネルギー庁の統計やSII採択事例、業界統計から再構成した代表シナリオの目安です（2026年度時点）。5年累計は年間削減額を単純に5倍した機械的な試算であり、実際の効果は契約条件・設備構成・稼働実態により異なります。"},{"label":"削減額の考え方（2段電卓の検算）","detail":"各代表シナリオは、年間使用量×改善単価で年間削減額を出し（①80×1.5＝120、②150×1.6＝240、③200×1.8＝360、単位は万kWh×円/kWh＝万円）、さらに年間削減額×5年で5年累計を算出しています（①120×5＝600、②240×5＝1,200、③360×5＝1,800、単位は万円）。これは効果の規模感を示すための単純累計で、割引率・再投資・単価変動を考慮した精緻なキャッシュフローではありません。投資回収の判断では、保守費・設備寿命・補助金採択の有無を含めたライフサイクルで評価してください。数値はあくまで目安です。"},{"label":"金額表現の扱い","detail":"クリーニング工場はボイラー・乾燥のエネルギー使用量が大きく、わずかな効率改善でも年間で相応の金額になり得ますが、本記事の金額はあくまで代表シナリオの目安であり、特定企業の実数ではありません。断定的な普遍化は避け、実額は設備の状態・稼働・エネルギー単価・契約条件で変動する点を併記しています。過度な期待を避け、自社の設備別データに基づく試算を前提としてください。"},{"label":"制度・規格の名称と再エネ賦課金","detail":"参照する制度は正式名称を用います。SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助などはいずれも公的に定められた名称で、対象設備・要件・公募期間は最新の公募要領で要確認です（2026年度時点）。なお購入電力量に課される2026年度の再エネ賦課金は4.18円/kWhです。採択を前提にせず一次情報の確認が前提となります。"}];
const process = [{"label":"データ収集・設備別使用量の把握","detail":"受変電の電力量・デマンド記録とボイラーの燃料使用量、洗濯・乾燥・仕上げ各機の消費電力、稼働スケジュールを集めて棚卸しします。どの設備がいつピークを作り、どれだけ放熱・排熱を出しているかの把握が、電化・排熱回収・乾燥効率化・契約最適化の出発点です。FEMSや簡易計測で設備別・時間帯別に見える化し、ベース負荷とピークを切り分けます。"},{"label":"分析・診断と打ち手の切り分け","detail":"第三者の省エネ診断やエネルギー監査を活用し、排熱回収・運用改善・営業時間シフトなど回収の早い施策と、ボイラー電化・高効率乾燥機更新のような大型投資を切り分けます。設備ごとに削減ポテンシャルと概算投資額、補助金・税制の適用可能性を含めた投資回収年数（ROI）を試算し、優先順位を付けます。効果が小さい設備の更新を急がない判断も重要です。"},{"label":"相見積・補助金／税制の検討","detail":"ヒートポンプ・乾燥機・熱交換器・進相コンデンサなどは複数社から相見積を取り、仕様・保証・保守費・燃料計画を含めたライフサイクルコストで比較します。SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助の要件・公募スケジュールを確認し、省エネ効果の根拠資料を準備します。電力契約の見直し余地も並行して検討します。"},{"label":"意思決定・実行・効果検証","detail":"投資判断は経営層と現場が共有できる指標（削減率・回収年数・CO2削減量）で行い、繁忙期を避けた閑散期や定期修理に合わせてボイラー電化・乾燥機入替工事を計画します。導入後はFEMSで設備別の消費と排熱回収の実績をモニタリングし、想定との差異を検証します。営業時間シフトやデマンド管理などの運用改善も継続します。"}];
const viewpoints = [{"label":"量（kWh）・燃料・契約電力・単価を分けて考える","detail":"ボイラー電化・排熱回収・乾燥効率化は使用量（購入電力量・燃料）を減らす取り組み、営業時間シフト・デマンド制御・力率改善・契約電力の適正化は基本料金や単価面を抑える取り組み、契約・メニュー見直しは単価を下げる取り組みです。クリーニング工場は熱と電力の使用量が大きく量の削減効果が大きい一方、複数機の同時稼働による基本料金の最適化も無視できません。"},{"label":"投資回収年数（ROI）とライフサイクルで判断","detail":"ボイラー電化や高効率乾燥機更新のような大型投資は、初期費用だけでなく想定削減額・保守費・燃料費・設備の寿命を含めたライフサイクルコストで評価します。補助金・税制で実質負担が下がると回収年数が短縮されるため、制度活用の有無で判断が変わることがあります。エネルギー価格の変動も感度分析に織り込むと判断の堅牢性が高まります。"},{"label":"排熱回収・運用改善は投資が小さく効きやすい","detail":"乾燥機・仕上げの排熱回収や営業時間シフトは、ボイラー電化・乾燥機更新に比べて投資が小さく回収が早い傾向があり、まず着手しやすい領域です。捨てている排気・ドレンの熱は、給水予熱や温水へ再利用すると燃料・電力に直接効きます。大型の電化・更新を検討する前に、排熱回収・運用改善で取れる分を先に取り切る順序が現実的です。"},{"label":"電力だけでなくユーティリティ全体で見る","detail":"電力・燃料・熱・水を分断して最適化すると全体最適を逃します。排熱回収やヒートポンプのように電力と燃料・熱を横断する施策は、片方だけ見ると効果を過小評価しがちです。工場全体のエネルギーフローで俯瞰し、最も効く順に手を打つ視点が欠かせません。ボイラーの熱と乾燥・仕上げの電力、コンプレッサの排熱までまとめて捉えることが、クリーニング工場の最適化では重要です。"},{"label":"中立的な比較情報で意思決定する","detail":"特定の設備メーカー・ベンダーや電力会社の提案だけで判断せず、複数の選択肢を中立的に比較することが重要です。当センターのような中立・非営利の立場の情報や第三者診断を併用し、自社の設備別データに基づいて判断することで、過度な期待や偏った投資を避けられます。本記事は代表シナリオを中立的に整理したもので、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"}];
const cautions = [{"label":"設備の状態で効果は大きく変わる","detail":"排熱回収・ボイラー電化の効果は、既存設備の効率・排熱温度・稼働パターンに強く依存します。本記事の削減額は一定の前提を置いた代表シナリオの目安であり、すでに高効率なボイラーや稼働時間が短い乾燥機では効果が小さくなります。導入ありきで進めず、設備別の計測に基づいて削減ポテンシャルを見極めることが重要です。"},{"label":"ボイラー電化・乾燥機更新は回収年数の見極めが前提","detail":"ボイラー電化や高効率乾燥機への更新は削減効果が大きい反面、投資額も大きく、稼働時間が短い設備では回収年数が長くなります。補助金・税制の採択を前提に計画を組むと、不採択時に資金計画が崩れるおそれがあります。排熱回収・運用改善・営業時間シフトで取れる分を先に取り、電化・更新は回収年数とライフサイクルで判断することが安全です。導入ありきで進めない姿勢が大切です。"},{"label":"補助金・税制は要件と期限がある","detail":"SIIの省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連補助は、対象設備・省エネ効果の基準・公募期間が定められ、年度ごとに内容が変わります。2026年度時点でも最新の公募要領を確認し、採択前提に依存しすぎない計画が安全です。申請には省エネ効果の根拠資料が必要になるため、設備別の計測データの整備を先行させると有利です。"},{"label":"営業時間シフト・力率改善だけでは量は減らない","detail":"営業時間シフトやデマンド制御・力率改善（進相コンデンサ）は基本料金や力率割引に効きますが、使用量（kWh）そのものを大きく減らすわけではありません。逆にボイラー電化・排熱回収・乾燥機更新は量に効きますが、ピークの平準化までは自動では実現しません。両者は役割が異なるため、量の削減と契約・単価の最適化を組み合わせて考えることが大切です。"},{"label":"本記事は推奨ではなく参考情報","detail":"本記事は業界統計・公開事例から再構成した代表シナリオに基づく中立的な解説であり、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。実在企業の事例や優劣比較ではなく、金額はすべて目安です。投資判断は専門家の診断と自社の設備別データに基づき、複数の選択肢を比較したうえで行ってください。数値の断定的な引用は避けてください。"}];
const checklist = ["受変電の電力量・デマンド記録を直近1年分そろえる","蒸気ボイラーの燃料使用量と燃焼効率を計測または推計する","洗濯・乾燥・仕上げ各機の消費電力を設備別に集計する","乾燥機の排気温度・満載率・空運転の有無を点検する","ボイラー・配管・バルブの断熱状態と放熱を点検する","乾燥機排気・仕上げドレン・コンプレッサ排熱の回収余地と利用先を確認する","洗濯・乾燥・仕上げの同時立ち上げによるデマンドピークを時間帯別に把握する","力率と力率割引・割増の適用状況を契約書で確認する","契約電力が実態に対して過大でないかを検証する","ポンプ・送風機・コンプレッサのインバータ導入状況を点検する","営業時間シフト・ロット集約など運用改善の余地を洗い出す","SII補助金・GX/CN税制・ものづくり補助金・ヒートポンプ補助の最新要件を確認し施策ごとに投資回収年数とCO2削減量を試算する"];
const simulatorCtaBullets = ["料金上昇シナリオごとの負担増を試算できる","ボイラー電化・乾燥効率化と契約見直しの優先度を考える材料になる","低圧・高圧の高騰リスクを定量的に把握できる","中立的な立場で自社の設備別データに基づき判断できる"];
const faqItems = [{"question":"この事例は実在企業ですか。数値は正確ですか。","answer":"いいえ。本記事は実在企業の事例ではなく、業界統計やSII採択事例、経産省・資源エネルギー庁の公開情報から再構成した代表シナリオです（2026年度時点）。年間▲120万円・▲240万円・▲360万円やその5年累計は精密な実績値ではなく、規模感を示す目安です。実際の効果や金額は契約条件・設備構成・稼働実態により異なるため、自社の設備別計測データに基づく試算が前提となります。特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"},{"question":"特定の電力会社や設備メーカーを推奨しているのですか。","answer":"いいえ。当センターは中立・非営利の立場から情報を提供しており、特定の電力会社・設備ベンダー・契約形態を推奨することはありません。本記事はボイラー電化・乾燥効率化・排熱回収・営業時間シフト・デマンド／力率改善の考え方や効果の目安を中立的に整理した代表シナリオです。投資判断は複数の選択肢を比較し、第三者の省エネ診断や自社データに基づいて行うことをおすすめします。"},{"question":"ボイラーの電化（ヒートポンプ化）はどんな場合に効果が出ますか。","answer":"一般に、燃焼効率が低下した経年ボイラーや、給湯・低温側の熱需要が多い工場、排熱を回収せず捨てている工場ほど効果が出やすい傾向です。熱需要の温度帯によって電化の適否が分かれるため、高温蒸気が必要な工程と低温で足りる工程を仕分けることが重要です。まずボイラー効率・排気温度を計測し、削減ポテンシャルを見極めてから着手することが大切です。数値は代表シナリオの目安です。"},{"question":"乾燥機の更新は必ず得になりますか。","answer":"必ず得になるとは限りません。高効率乾燥機やヒートポンプ式への更新は削減効果が大きい一方で投資額も大きく、稼働時間が短い設備では回収年数が長くなります。まず満載運転・フィルタ清掃・営業時間シフトなど運用改善で取れる分を取り切り、更新は補助金・税制の活用可能性も含めた回収年数とライフサイクルコストで判断するのが堅実です。導入ありきではなく、感度分析で価格変動への耐性も確認してください。"},{"question":"契約電力（基本料金）を下げる方法はありますか。","answer":"洗濯・乾燥・仕上げの同時立ち上げを避けて営業時間をシフトし、デマンドのピークを平準化すると、契約電力に基づく基本料金を抑えられる場合があります。デマンド監視の導入や運用でのピークずらしが有効です。あわせて進相コンデンサによる力率改善で力率割引を確保し、契約電力が実態に対し過大でないかを検証します。ただし使用量も大きいため、量の削減と契約最適化を併せて検討することが大切です。"},{"question":"営業時間シフトとデマンド制御・力率改善はどう違いますか。","answer":"営業時間シフトは稼働のタイミングを分散して最大需要（デマンド）を抑える運用上の取り組み、デマンド制御は監視で一定時間の最大需要を抑えて契約電力＝基本料金を下げる取り組みです。力率改善は進相コンデンサで無効電力を補償し、力率割引の確保や力率割増の回避につなげる取り組みです。いずれも使用量そのものを大きく減らすものではないため、電化・排熱回収・乾燥効率化など量の削減施策と組み合わせて考えることが大切です。"},{"question":"使える補助金・税制はありますか。","answer":"SII（環境共創イニシアチブ）の省エネ補助金、GX・カーボンニュートラル投資促進税制、ものづくり補助金、ヒートポンプ関連の補助など、設備更新・省エネ投資を支援する制度が用意される年度があります。ただし対象設備・省エネ効果の基準・公募期間などの要件は年度ごとに改正されるため、2026年度時点でも必ず最新の公募要領で確認が必要です。採択を前提に資金計画を組むのは避けることをおすすめします。"},{"question":"再エネ賦課金の負担は減らせますか。","answer":"ボイラー電化の設計次第では購入電力量が増える場合もありますが、排熱回収・乾燥効率化・運用改善で全体の購入電力量を減らすと、電力量料金に加え、購入電力量に連動する各種調整費や再エネ賦課金相当の負担も購入量の減少分に応じて相対的に小さくなります。再エネ賦課金は購入電力量に対して課され、2026年度は4.18円/kWhです。量の削減は負担軽減に寄与しますが、効果は設備の状態・稼働により異なるため、自社データに基づく試算が前提です。"}];
const sourcesItems = [{"name":"新電力ネット（電力単価・エリア別単価・新電力比較）","url":"https://pps-net.org/unit"},{"name":"資源エネルギー庁（エネルギー白書・省エネ・電源構成）","url":"https://www.enecho.meti.go.jp/"},{"name":"経済産業省（エネルギー政策・GX・ものづくり補助金）","url":"https://www.meti.go.jp/"},{"name":"環境共創イニシアチブ SII（省エネ補助金・採択事例集）","url":"https://sii.or.jp/"},{"name":"環境省（脱炭素・省エネ・再エネ）","url":"https://www.env.go.jp/"}];
const relatedLinks = [{"href":"/industry-electricity-calculator","title":"業種別電気代計算機","description":"業種・規模・契約・エリアから推定年間電気代と削減余地を即時試算。"},{"href":"/articles/case-studies","title":"事例・削減実績を知る（カテゴリ一覧）","description":"業種別・状況別のケーススタディ集。"},{"href":"/electricity-cost-reduction-case-studies","title":"法人の電気代を下げた事例集","description":"複数業種の削減施策・投資回収を構造化。"},{"href":"/demand-power-glossary","title":"デマンド・契約電力の用語集","description":"基本料金・力率の基礎用語。"},{"href":"/demand-control-guide","title":"デマンド制御ガイド","description":"ピークカットで基本料金を抑える考え方。"},{"href":"/energy-management-roi-calculation","title":"エネマネ投資のROI計算","description":"投資回収の考え方。"},{"href":"/contract-review-practice-guide","title":"契約見直しの実務ガイド","description":"相見積・契約最適化の進め方。"},{"href":"/subsidy-sii-energy-saving","title":"SII省エネ補助金の活用","description":"設備更新の補助金スキーム。"},{"href":"/subsidy-gx-cn-investment-tax","title":"GX・CN投資促進税制 完全ガイド","description":"省エネ・低炭素投資の税制優遇。"},{"href":"/dry-cleaning-electricity-cost-review","title":"クリーニング業の電気代見直し","description":"乾燥・プレス・ボイラーの電力構造。"},{"href":"/coin-laundry-electricity-cost-review","title":"コインランドリーの電気代見直し","description":"セルフ型店舗の電力（業態の読み分け）。"},{"href":"/textile-electricity-cost-review","title":"繊維業の電気代見直し","description":"染色・乾燥の熱需要。"},{"href":"/case-study-textile-dyeing-heat-recovery","title":"繊維染色×廃熱回収の事例","description":"排水・排ガス熱の回収ケース。"},{"href":"/subsidy-heat-pump-introduction","title":"ヒートポンプ導入と補助金","description":"ボイラー電化・給湯の投資支援。"},{"href":"/subsidy-cogeneration-introduction","title":"コージェネ導入と補助金","description":"熱電併給の投資支援。"},{"href":"/factory-electricity-cost-reduction","title":"工場の電気代削減ガイド","description":"量・契約・単価の総合対策。"},{"href":"/led-air-conditioning-reduction-effect","title":"LED・空調の削減効果","description":"省エネ効果の目安。"}];
const contentCtaLinks = [{"href":"/industry-electricity-calculator","label":"自社の電気代を試算する"},{"href":"/simulate","label":"シミュレーターで診断する"},{"href":"/compare","label":"料金メニューを比較する"}];

export default function CaseStudyCommercialLaundryBoilerPage() {
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
            ※ 本記事は業界統計・公開事例から再構成した代表シナリオです。数値は目安であり、実数値は契約条件・設備構成・稼働実態により異なります。本記事は中立的立場で作成しており、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。{" "}
            <Link href="/dry-cleaning-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">クリーニング業の電気代見直し</Link>
            ・
            <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気代計算機</Link>
            もあわせてご活用ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">このケースの前提（業種×規模×削減手法）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本事例の業種特性・規模・契約区分・熱需要・コスト構造の前提を整理します。自社の条件と照らして読み進めてください。関連する業態の論点は{" "}
              <Link href="/dry-cleaning-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">クリーニング業の電気代見直し</Link>
              {" "}や{" "}
              <Link href="/coin-laundry-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">コインランドリーの電気代見直し</Link>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">見直し前に抱えていた電気代・燃料費の構造上の課題を整理します。これらは蒸気ボイラーと乾燥機を持つ多くのクリーニング工場で共通して見られる論点です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">本ケースで採用した削減手法を整理します。単一施策ではなく、ボイラー電化・排熱回収を軸に、乾燥効率化・営業時間シフト・デマンド/力率改善を組み合わせている点が特徴です。</p>
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">規模やサブ業態の異なる代表シナリオ3件で、Before/Afterと削減額の考え方を整理します。記載の削減幅は業界統計・公開事例から再構成した目安で、実際の効果は契約条件・設備構成・稼働実態により異なります。実在企業の事例ではありません。各シナリオは「使用量×改善単価＝年間削減額」「年間削減額×5年＝5年累計」の2段電卓で検算しています。</p>
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
            <ConsultCta from="commercial-laundry" />
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
            heading="ボイラー電化・乾燥効率化・電力契約の進め方を中立的な立場の専門家に相談する"
            description="一般社団法人エネルギー情報センターは、特定の電力会社を推奨も否定もしない中立的立場で、法人・自治体の電力契約の見直しや省エネ・ボイラー電化投資の判断材料を整理します。本記事の事例に近い取り組みの進め方について、初回相談は無料です。"
            note="中立的な立場で、特定の電力会社・契約形態・設備ベンダーを推奨するものではありません。"
          />
        </div>
      </main>
    </>
  );
}
