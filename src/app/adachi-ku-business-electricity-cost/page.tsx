import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "足立区の法人電気料金完全ガイド｜製造業・物流／北千住商業・中小工場集積の契約最適化";
const pageDescription =
  "足立区の法人電気料金を区固有の産業集積（中小製造業・町工場、物流・倉庫、北千住の商業）から実務的に解説します。中小工場・物流の契約電力（kW）最適化・デマンド制御、規模別の代表シナリオ、足立区の省エネ補助までを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "足立区 法人電気料金",
    "北千住 商業 電気代",
    "足立 物流倉庫 デマンド 電力",
    "足立区 中小製造 省エネ補助",
    "町工場 電気代",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/adachi-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/adachi-ku-business-electricity-cost",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/by-region", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/by-region"],
  },
};

const electricSituation = [
  {
    label: "中小製造業・町工場の広域集積という産業構造",
    detail:
      "足立区は23区北東部に位置し、面積が広く、区内各所に中小製造業・町工場が広く集積する「ものづくりのまち」です。金属加工・機械・プレス、食品加工、印刷・紙加工、樹脂成形など多様な業種の小規模事業所が住宅と混在して立地します。法人需要は低圧電力（動力）・高圧電力の中小工場が中心で、稼働の断続性からデマンド（契約kW）変動が大きい点が区の電力需要構造の特徴です。単価水準・燃料費調整額の感応度は東京電力エリア共通で、差別化は区の産業特性に表れます（出典: 経産省工業統計・足立区統計から整理）。",
  },
  {
    label: "金属加工・機械・食品加工の電力プロファイル",
    detail:
      "区内の主力である金属加工・機械・プレス、食品加工の工場では、プレス機・NC工作機械・コンプレッサー・空調、食品の冷蔵・加熱・成形ラインが電力消費の中心です。プレス・機械加工は瞬間的に大きなピークを立て、コンプレッサーや食品の冷蔵・連続生産設備は連続負荷となります。多品種小ロットの受託加工が多いため稼働が断続的で、デマンドのピークが発生しやすく、契約電力（kW）の過大設定につながりがちです。ピーク需要の平準化が基本料金最適化の主戦場となります。",
  },
  {
    label: "物流・倉庫の拠点集積（24時間稼働・冷蔵含む）",
    detail:
      "足立区は環七・首都高沿いや荒川・綾瀬川沿いに物流・倉庫拠点が集積します。常温倉庫に加え冷蔵・冷凍倉庫も立地し、24時間稼働でベース電力が高いのが特徴です。冷凍機・空調・荷役機器・照明が電力消費の柱で、契約電力（kW）が大きい高圧契約が中心となります。広域配送の拠点として、夜間も含めた連続負荷が電力構造を形づくります。",
  },
  {
    label: "北千住の商業・駅前再開発・大学キャンパス",
    detail:
      "北千住は足立区を代表する大型商業・駅前再開発エリアで、駅周辺に商業施設・飲食・小売・サービス業が集積します。区内には複数の大学キャンパスも立地し、教育・研究施設の電力需要も存在します。商業側は空調・照明・冷蔵・共用部が電力の柱で、高圧（大型施設）・低圧電灯（小規模店舗）の契約が混在します。商業集積として小口の法人契約口数が多い点も特徴です。",
  },
  {
    label: "気象条件と冷暖房・生産設備の通年負荷",
    detail:
      "23区北東部の足立区は夏季の冷房需要が大きく、町工場では生産設備の発熱に空調・換気が重なって夏季ピークが立ちやすい傾向です。物流倉庫の冷蔵・冷凍は通年で連続負荷となり、冬季も暖房・給湯に加え食品加工の加熱負荷が発生します。住工混在の市街地が多く、空調・用役（コンプレッサー・換気）が電気代に占める比率が高くなりやすい点に留意が必要です（出典: 気象庁・省エネ事例から整理）。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "足立区内シェア最大。中小工場・物流・店舗の低圧電力『低圧電力』『従量電灯C』、中規模工場・倉庫の『業務用高圧電力』が中心です。長年の取引関係で東電EPを継続する町工場・倉庫が多く、相見積を取得して初めて新電力との差額に気付くケースが典型的です。本記載は各事業者の位置づけを中立的に整理したものです。",
  },
  {
    name: "東京ガスの電気・Looopでんき・ENEOSでんき",
    role: "全国系・ガス併売新電力",
    detail:
      "東京ガスの電気はガス契約のある工場・事業所と親和性が高く、ガス併売の値引きが訴求点。Looop・ENEOSも区内の中小法人・物流で実績があります。固定単価メニューが中心で、年間使用量の大きい中規模工場・倉庫では競争入札の対抗候補になります。",
  },
  {
    name: "新電力（製造業・物流向け・入札特化型を含む）",
    role: "全国展開新電力",
    detail:
      "高圧の中小〜中規模工場・物流倉庫では、固定単価（2〜5年）メニューを持つ新電力が競争入札の主要プレイヤーです。年間使用量・力率・負荷率を提示して相見積を取得することで、単価条件の比較がしやすくなります。供給可能枠と燃調条件を含めた総合比較が前提です。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信・流通系の新電力。小規模工場・店舗・事務所向けに固定単価プランを提供します。携帯料金や流通ポイントとのセット割引が訴求点で、低圧契約の小口事業者で選択肢になります。",
  },
  {
    name: "みんな電力・自然電力・アスエネ",
    role: "再エネ特化型新電力",
    detail:
      "実質再エネ電源を提供する新電力。取引先からのサプライチェーン脱炭素（Scope3）要請を受ける受託加工の工場や、荷主の脱炭素要請を受ける物流倉庫で、再エネメニューや非化石証書付きプランの引合いがあります。料金水準はやや高めの場合があり、調達方針に応じた比較が前提です。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面では都内でも新電力の新規受付停止・撤退が相次ぎました。2024年以降は受付が回復傾向にありますが、年間使用量の大きい工場・倉庫では供給可能枠の確保が課題となるため、契約満了の半年〜1年前からの早期着手が実務上重要です。最新の受付・撤退情報は新電力ネット等で確認できます。",
  },
];

const priceBenchmark = [
  {
    label: "低圧電力（動力）の単価水準 — 町工場の主軸",
    detail:
      "東電EP『低圧電力』は基本料金 約1,200円/kW、電力量料金17〜20円/kWh＋調整項目が目安です。足立区内の町工場・小規模製造（年間使用量5万〜50万kWhレンジ）の多くがこの契約です。燃料費調整額と再エネ賦課金（2026年度4.18円/kWh・確定）を加味した実質単価は24〜28円/kWhレンジが目安となります。数値は契約条件・季節・時間帯で変動します。",
  },
  {
    label: "高圧電力（業務用）の単価水準 — 中規模工場・物流倉庫",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯で変動）＋調整項目が目安です。区内の中規模金属加工・食品工場・物流倉庫（300kW〜2,000kW級）が対象で、新電力経由で2〜4円/kWh安くなるケースもあります。再エネ賦課金（2026年度4.18円/kWh・確定）と燃調を加えた実質単価は22〜27円/kWhレンジが目安です。",
  },
  {
    label: "低圧電灯（事務所・店舗）の単価水準",
    detail:
      "『従量電灯C』は基本料金 約290円/kVA、電力量料金は3段階制（第1段階約29.80円〜第3段階約37.45円/kWh）です。北千住の小売・飲食・サービス業や事務所で利用が多く、月使用量が大きい事業所は新電力のフラット単価メニューへの切替で基本料金圧縮・段階単価フラット化のメリットが出やすい区分です。",
  },
  {
    label: "燃料費調整額・再エネ賦課金の上乗せ",
    detail:
      "東京電力エリアの燃料費調整額はLNG・石炭価格と為替に連動し、2022〜2023年の高騰局面では実質単価を大きく押し上げました。再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。これらは電力会社を切り替えても一律に課されるため、削減には省エネ・契約最適化・（対象なら）減免申請の組合せが有効です（出典: エネ庁・東京電力エリア単価実績から整理）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 中小製造工場（高圧 500kW、年間 230万kWh）— 代表シナリオ",
    before:
      "Before: 区内の中小製造工場A（金属加工・機械・コンプレッサー・空調）。プレス・加工でピークが立ち、コンプレッサー・空調が連続負荷。東電EPの業務用高圧電力＋燃調連動。年間電気代 約5,300万円規模（目安）。以下は公開事例から再構成した代表シナリオです。",
    after:
      "After: 競争入札で固定3年契約を比較／コンプレッサー高効率化＋エア漏れ対策（SII補助1/2を検討）／プレスのサーボ化・ピーク平準化／全館LED化／BEMS＋蓄電池でデマンド制御。",
    result:
      "Result: 年間電気代 約5,300万円 → 約4,450万円（▲約16%、▲850万円・目安）。5年累計の削減額は約4,250万円（▲850万円×5年＝4,250万円）。契約kW 500→450／投資回収 補助金後 2〜3年前後（目安）。いずれも代表シナリオの目安です。",
  },
  {
    title: "業種2: 物流倉庫・配送センター（高圧 1,000kW、年間 560万kWh）— 代表シナリオ",
    before:
      "Before: 環七・首都高沿いの物流倉庫・配送センターB（冷蔵・常温倉庫の空調・冷凍機・照明・荷役機器）。24時間稼働でベース電力が高い。東電EPの業務用高圧電力＋燃調連動。年間電気代 約1.3億円規模（目安）。",
    after:
      "After: 競争入札で固定3年契約を比較／冷凍機・空調の高効率化＋運転最適化（SII補助1/2を検討）／倉庫全館LED化（人感センサー）／BEMSでデマンド制御／屋根の自家消費太陽光を検討。",
    result:
      "Result: 年間電気代 約1.3億円 → 約1.1億円（▲約15%、▲2,000万円・目安）。5年累計の削減額は約1.0億円（▲2,000万円×5年＝1.0億円）。契約kW 1,000→910／投資回収 補助金後 2〜3年前後（目安）。",
  },
  {
    title: "業種3: 北千住の商業ビル（高圧 350kW、年間 150万kWh）— 代表シナリオ",
    before:
      "Before: 北千住駅前の商業ビルC（テナント空調・照明・冷蔵・共用部）。営業時間帯に空調・照明のピークが立つ。東電EPの業務用高圧電力＋燃調連動。年間電気代 約3,500万円規模（目安）。",
    after:
      "After: 新電力に固定2〜3年・燃調条件を比較して切替検討／全館LED化＋高効率空調（SII補助1/2を検討）／BEMSで需要見える化＋デマンド制御／テナント別の電力管理。",
    result:
      "Result: 年間電気代 約3,500万円 → 約2,940万円（▲約16%、▲560万円・目安）。5年累計の削減額は約2,800万円（▲560万円×5年＝2,800万円）。契約kW 350→315／投資回収 補助金後 2〜3年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "プレス・機械加工のデマンドピークと契約電力の過大設定",
    detail:
      "プレス機・機械加工は瞬間的に大きな電力を消費し、デマンド（30分最大需要電力）のピークを押し上げます。受託加工で稼働が読みにくい町工場では、一度立ったピークに合わせて契約電力が過大に設定されがちで、基本料金が割高に固定されます。稼働スケジュールの調整・ピーク平準化・蓄電池併用が基本料金削減の要点です。",
  },
  {
    label: "物流倉庫の24時間連続負荷とコンプレッサー",
    detail:
      "冷蔵・冷凍倉庫の冷凍機と圧縮空気（エア工具・搬送）のコンプレッサーは連続運転の負荷で、過剰圧力設定・温度設定の甘さ・断熱不良があると電力を無駄に消費します。一般に冷凍機の運転最適化・エア漏れ対策＋高効率インバータ機更新でベース電力を抑える余地が大きく、改善効果が出やすい領域です（出典: 省エネ事例から整理）。",
  },
  {
    label: "住工混在・小規模事業者の段階料金負担",
    detail:
      "住宅併設の小規模工場・事務所では低圧電灯の3段階料金（第3段階約37.45円/kWh）が負担になりやすく、月使用量が一定以上の事業者は新電力のフラット単価メニューへの切替メリットが明確に出ます。低圧電力と低圧電灯の使い分け・契約区分の見直しも論点です。",
  },
  {
    label: "燃料費調整額の変動リスク",
    detail:
      "東京電力エリアの燃料費調整額はLNG・石炭価格と為替に連動し、2022〜2023年の高騰局面では中小工場・物流倉庫の電気代を大きく押し上げました。市場連動プランを採用していた事業所では単価上振れを経験し、固定回帰の動きが見られます。固定か市場連動かは負荷パターンとリスク許容度によります。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。年間使用量300万kWh規模の中規模工場・倉庫では年約1,254万円規模の負担となります（300万kWh×4.18円）。減免制度は電気使用密度などの要件があり中小工場では該当しない場合が多いものの、電力多消費の事業所は対象可否を確認する価値があります（出典: エネ庁から整理）。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・冷凍機・LED・空調・送風機・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "足立区内の金属加工・食品加工・物流倉庫の中小工場・倉庫で活用しやすい主力補助です。コンプレッサー高効率化・冷凍機更新・全館LED化・空調更新などで採択実績があります。詳細はSII（環境共創イニシアチブ）の公募要領で確認してください。",
  },
  {
    name: "足立区 中小企業向け省エネ・設備導入補助（区独自）",
    target: "区内中小事業者の省エネ機器・生産設備の導入（LED・空調・高効率機器等）",
    rate: "1/3〜1/2、上限は年度・事業区分による（目安）",
    note: "区独自の中小企業支援メニュー。区内の町工場・物流・小規模事業者のLED・空調・コンプレッサー更新の打ち手になります。SII補助・都補助との重複可否は事前確認が必要です。最新の公募内容は足立区・産業振興団体の窓口で確認してください。",
  },
  {
    name: "東京都 中小企業の省エネ・再エネ設備導入支援",
    target: "中小規模事業所のCO2削減・省エネ・再エネ設備導入",
    rate: "1/3〜2/3、上限は事業規模による",
    note: "東京都（クール・ネット東京等）の補助。中小製造業・物流の高効率設備・自家消費太陽光・蓄電池の導入で活用例があります。地球温暖化対策報告書制度の対象事業所には別途インセンティブがあります。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり（事業による）",
    note: "屋根面積を確保できる工場・倉庫では自家消費太陽光＋蓄電池が選択肢になります。デマンド平準化（ピークカット）と再エネ調達を両立でき、契約電力の削減にも寄与します。屋根面積が限られる場合はオフサイトPPAも検討材料です。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "高効率設備・燃料転換・PPA関連設備の取得で活用可能性があります。所管は経産省・国税庁。工場・倉庫の設備更新時に他補助と組合せて検討するのが定石で、適用要件は年度ごとに変わるため事前相談が望まれます。",
  },
];

const industryProfile = [
  {
    label: "金属加工・機械・プレス（区内各所）",
    detail:
      "区内の主力業種。プレス・NC加工・機械・溶接の受託加工を担う町工場群で、年間使用量5万〜300万kWhレンジの低圧電力・高圧契約が中心。プレス・機械加工のデマンドピークとコンプレッサーの連続負荷が電力構造の柱で、ピーク平準化と契約kW最適化のメリットが大きい業態です。",
  },
  {
    label: "物流・倉庫（環七・首都高・河川沿い）",
    detail:
      "環七・首都高沿いや荒川・綾瀬川沿いに集積する物流・倉庫拠点。冷蔵・常温倉庫の冷凍機・空調・荷役機器・照明の連続負荷が大きく、24時間稼働でベース電力が高い高圧契約が中心。冷凍機・空調の運転最適化と契約最適化の両面で削減余地があります。",
  },
  {
    label: "食品加工・印刷など中小製造（区内各所）",
    detail:
      "食品加工（冷蔵・加熱・成形）、オフセット印刷・製本・紙加工、樹脂成形を担う中小事業所。食品の冷蔵・加熱、印刷機・乾燥・空調の電力負荷があり、年間使用量30万〜300万kWhレンジの低圧電力・高圧契約が中心。受注変動に応じた稼働で契約kWとデマンドの最適化余地があります。",
  },
  {
    label: "商業・大学（北千住）",
    detail:
      "北千住駅周辺の大型商業施設・商店街・飲食・小売・サービス業と、区内に立地する大学キャンパス。商業は空調・照明・冷蔵が、大学は研究・教育施設の空調・照明・実験設備が電力の柱。高圧（大型施設）・低圧電灯（小規模店舗）が混在し、新電力切替・LED化のメリットが利益に直結しやすい層です。",
  },
  {
    label: "公共施設・大型施設（区内各所）",
    detail:
      "区の公共施設・大型商業施設・医療施設など。空調・照明・給湯・共用部設備の電力負荷が通年で発生し、年間使用量の大きい高圧契約が中心。BEMSによる需要見える化・デマンド制御と契約最適化の余地が大きい業態です。",
  },
];

const switchingReality = [
  {
    label: "足立区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは都内平均（30〜35%程度）に対しやや低めと推定され、長年の取引で東電EPを継続する町工場・倉庫が多いのが実態です。年間使用量の大きい中規模工場・物流倉庫ほど競争入札による相見積のメリットが出やすく、小規模工場も相見積で初めて差額に気付くケースが典型的です。最終判断は自社の使用実態に即して行う必要があります。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の高騰局面で市場連動を採用していた工場・倉庫の多くが単価上振れを経験し、固定プランへ回帰しました。プレス・機械加工の稼働が読みにくい中小工場や、ベース電力の大きい物流倉庫では、単価を固定して予算管理を安定させる選択が検討されています。固定か市場連動かは負荷パターンとリスク許容度によって異なります。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・大規模災害時の復旧体制・契約変更不要の手間の少なさ。デメリット: 新電力比で単価がやや高めになる局面、燃料費調整額の条件差。区内の中小工場・倉庫は『慣性』で東電EPを継続するケースが多く、継続か切替かは相見積による総合比較が前提です。本記載は特定の電力会社を推奨するものではありません。",
  },
  {
    label: "新電力選定のポイント（足立×製造・物流固有）",
    detail:
      "①東電エリア・製造業/物流（高圧/低圧電力）への供給実績、②最低契約kW・契約期間・違約金条項、③固定単価期間（2〜5年）の確実性、④燃料費調整額の有無・上限・連動条件、⑤デマンド制御・蓄電池併用の提案力、の5点が区内の町工場・倉庫では特に重要です。これらは比較の観点であり、結論は個別条件で変わります。",
  },
  {
    label: "デマンド制御・蓄電池の併用",
    detail:
      "プレス・機械加工のピークが立つ中小工場や、ベース電力の大きい物流倉庫では、デマンドコントローラ・蓄電池の併用で契約電力（kW）を抑え、基本料金を削減する余地があります。需要見える化（スマートメーター＋クラウド監視）と組合せると効果が高まります。導入可否は負荷パターン・投資回収で判断します。",
  },
];

const energySaving = [
  {
    label: "コンプレッサー高効率化＋エア漏れ対策",
    detail:
      "町工場の圧縮空気系はエア漏れ・過剰圧力設定の見直し＋高効率インバータ機更新で電力▲15〜25%が見込める領域です。金属加工・機械いずれもエア工具・搬送でエアの用途が多く、改善効果が出やすい。SII補助1/2の活用で投資回収 1.5〜2.5年が目安です。",
  },
  {
    label: "冷凍機・空調の高効率化＋運転最適化（物流倉庫）",
    detail:
      "冷蔵・冷凍倉庫の冷凍機を高効率機に更新し、温度設定・運転スケジュール・庫内断熱を最適化することでベース電力を抑えられます。24時間稼働でベース負荷が大きい倉庫ほど効果が大きく、契約電力（kW）削減にも寄与します。投資回収は補助金活用で2〜4年が目安です。",
  },
  {
    label: "プレスのサーボ化・回生＋デマンド平準化",
    detail:
      "油圧プレスのサーボ化で電力消費を抑え、回生電力を蓄電池に貯めてピークを抑制できます。契約電力（kW）削減で基本料金が直接下がるため、ピーク平準化はデマンド料金の高い中小工場で効果が大きい打ち手です。投資回収は補助金活用で2〜4年が目安です。",
  },
  {
    label: "全館LED化・高効率空調",
    detail:
      "工場・倉庫・事務所・店舗のLED化と高効率空調機への更新は、中小事業者の主力打ち手です。区補助＋SII補助＋都補助の組合せで投資回収 1.5〜3年が目安。住工混在で空調比率が高い事業所や、照明面積の大きい倉庫ほど効果が出やすい領域です。",
  },
  {
    label: "需要見える化（中小工場・倉庫向け）",
    detail:
      "スマートメーターとクラウド型需要見える化サービス（月額数千円〜）を使えば、小規模工場・倉庫でもデマンド監視・ピーク管理が可能になります。ピーク需要▲10〜15%の事例があり、契約電力の見直しと組合せて基本料金を削減できます。区補助の対象になる場合があります。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "プレス・機械加工のピークが立つ時間帯と稼働スケジュールを把握しているか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "コンプレッサー・冷凍機のエア漏れ・過剰圧力・温度設定を点検したか",
  "低圧電力・低圧電灯・高圧の契約区分が使用実態に合っているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの現行単価で再見積を取得したか",
  "全国系・入札特化型・通信流通系の新電力5〜10社から相見積を取得したか",
  "再エネ賦課金減免制度（電気使用密度要件）の対象に該当するか確認したか",
  "足立区・東京都・SIIの省エネ補助の併用可否を設備別に整理したか",
  "デマンド制御・蓄電池でピークを抑える余地はあるか試算したか",
  "契約期間・違約金条項を新電力契約書で必ず確認したか（特に中小法人）",
];

const faqItems = [
  { question: "足立区の町工場・倉庫の電気代は他区と比べて高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし足立区は中小製造業・町工場や物流・倉庫が多く、プレス・機械加工のデマンドピークで契約電力が過大設定になりやすいこと、コンプレッサー・冷凍機の連続負荷が大きいことから、契約最適化・ピーク平準化の余地が大きい区といえます。新電力切替で5〜15%、設備更新を含めた総合最適化で15〜25%の削減余地があるのが典型パターンです。本回答は特定の電力会社・契約形態を推奨するものではありません。" },
  { question: "中小製造工場でまず取り組むべき電気代削減策は何ですか？", answer: "①契約電力（kW）が直近の最大デマンドに対して過大でないかの点検、②コンプレッサーのエア漏れ対策＋高効率化、③プレス・機械加工の稼働スケジュール調整によるピーク平準化、④全館LED化、⑤新電力5〜10社の相見積、の5本柱が基本です。足立区・SII・都の省エネ補助を組合せると投資回収を短縮できます。最適な順序は工場の負荷構造によって異なります。" },
  { question: "物流倉庫のデマンド（契約電力）を下げるにはどうすればよいですか？", answer: "冷凍機・空調は24時間稼働でベース電力を押し上げます。冷凍機を高効率機に更新し温度設定・運転スケジュール・庫内断熱を最適化する、荷役機器の同時運転を避ける、デマンドコントローラ・需要見える化でピークを監視する、屋根の自家消費太陽光・蓄電池でピークカットする、といった対策で契約電力（kW）を抑え基本料金を削減できます。導入可否は負荷パターンと投資回収で判断します。" },
  { question: "足立区独自の省エネ補助金はありますか？", answer: "足立区は中小事業者向けの省エネ・設備導入支援メニューを設けており、LED・空調・高効率機器の更新などに活用できる場合があります（年度により内容・上限・補助率が変動）。国のSII補助・東京都の補助との重複可否は事業ごとに確認が必要です。最新の公募内容は足立区および区の産業振興団体の窓口で確認してください。" },
  { question: "再エネ賦課金は中小工場・倉庫の電気代にどれくらい影響しますか？", answer: "再エネ賦課金は2025年度3.98円/kWh→2026年度4.18円/kWh（確定）と上昇傾向です。年間使用量300万kWh規模の中規模工場・倉庫では年約1,254万円規模の負担になります（300万kWh×4.18円）。賦課金は電力会社を切り替えても一律に課されるため、削減には省エネ・自家消費（太陽光）・契約最適化・（対象なら）減免申請の組合せが有効です。減免の可否は電気使用密度などの要件審査によります。" },
  { question: "荷主・取引先から再エネ電源を求められた場合、どう対応すればよいですか？", answer: "サプライチェーン脱炭素（Scope3）要請への対応としては、①再エネ特化型新電力や非化石証書付きメニューへの切替、②屋根の自家消費太陽光、③需要家主導型オフサイトPPA、④再エネ証書購入、の手段があります。中小工場・倉庫では再エネ特化型新電力や非化石証書が現実的な入口で、屋根面積が確保できればPPAも選択肢です。コストと取引先要件のバランスで検討します。" },
  { question: "低圧電力と低圧電灯はどう使い分ければよいですか？", answer: "動力（モーター・コンプレッサー・冷凍機・荷役機器等）には『低圧電力』、照明・コンセント等には『低圧電灯（従量電灯）』が一般的です。低圧電灯の3段階料金は第3段階が高単価のため、月使用量が大きい事業所は新電力のフラット単価メニューへの切替メリットが出やすくなります。契約区分が使用実態に合っているかを点検し、必要なら見直すことが有効です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・連絡フロー・24時間対応の有無を確認することが重要です。冷蔵倉庫・生産設備のBCPは自家発・蓄電池・UPSなど自社側の備えが中心となります。" },
];

const sourcesItems = [
  { name: "足立区（産業振興・補助金情報）", url: "https://www.city.adachi.tokyo.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
];

export default function AdachiKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/adachi-ku-business-electricity-cost"
        datePublished="2026-06-09"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">足立区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            足立区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            足立区は23区北東部に広がり、区内各所に中小製造業・町工場（金属加工・機械・プレス、食品加工、印刷、樹脂成形）が広く集積するとともに、環七・首都高沿いや河川沿いに物流・倉庫拠点、北千住に大型商業・大学キャンパスを擁する多面的な産業構造を持つ区です。本ページでは「足立区 × 製造・物流・北千住商業」というクロス領域に絞り、中小工場・物流倉庫の電力プロファイル、契約電力（kW）最適化・デマンド制御、減免制度の考え方、足立区独自の省エネ補助、規模別の代表シナリオまでを実務目線で整理します。なお全区とも東京電力エリアで単価水準は共通のため、差別化は区の産業特性に置いています。本ページは特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-09" updatedAt="2026-06-09" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>足立区固有の電力事情（中小製造・町工場の広域集積／物流・倉庫／北千住商業）</li>
              <li>中小製造工場・物流倉庫・北千住商業ビルのBefore/After代表シナリオ3件</li>
              <li>プレス・機械加工・冷凍機のデマンドピークと契約電力（kW）最適化の考え方</li>
              <li>足立区・東京都・SIIの省エネ補助の活用パターン</li>
              <li>区内中小工場・倉庫向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              足立区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区は中小製造業・町工場が住宅と混在して広く集積する産業構造に加え、物流・倉庫拠点と北千住の大型商業・大学を擁します。法人需要は低圧電力・高圧の中小工場、24時間稼働の物流倉庫、北千住の商業が柱で、デマンド（契約kW）変動とベース電力の大きさが特徴です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {electricSituation.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              東京都全体の電力事情・水準は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金完全ガイド
              </Link>
              、東電エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区では東電EP以外に全国系・ガス併売・通信流通系・再エネ特化型の新電力が法人向けで営業しています。中小工場・物流倉庫では固定単価メニューを持つ新電力が競争入札の主要プレイヤーで、年間使用量・力率・負荷率を提示して相見積を取るのが実務的です。なお本セクションは各事業者の位置づけを中立的に整理したものです。
            </p>
            <div className="mt-4 space-y-3">
              {utilitiesList.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">役割: {item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力比較の基本は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力の比較方法</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              足立区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（低圧電力・低圧電灯・高圧）によって単価水準が異なります。町工場・小規模製造は低圧電力、中規模金属加工・食品工場・物流倉庫は高圧、事務所・小売は低圧電灯が標準です。単価水準・燃調感応度は東京電力エリア共通で、差別化は産業特性（負荷構造・デマンド・ベース電力）に表れます。
            </p>
            <div className="mt-4 space-y-3">
              {priceBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 単価は2026年時点の標準メニューを基準に整理した目安・概算です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 経産省/エネ庁・自治体統計から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 中小製造工場・物流倉庫・北千住商業（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区の代表的な3規模で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界目安から再構成した代表シナリオで、数値は目安レンジです。5年累計は年額×5で算定しています。実際の効果は各社の設備・運用条件で変わります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {industryImpact.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">{cs.before}</span></p>
                    <p><span className="font-semibold text-slate-700">{cs.after}</span></p>
                    <p><span className="font-semibold text-emerald-700">{cs.result}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種一般の論点は{" "}
              <Link href="/metal-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">金属加工業の電気代見直し</Link>
              、{" "}
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流倉庫の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              、{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売店舗の電気代見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              足立区固有の電気代上昇要因 — デマンド・連続負荷・段階料金・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区の電気代は、プレス・機械加工のデマンドピーク、物流倉庫の24時間連続負荷とコンプレッサー、住工混在の段階料金負担、燃料費調整額の変動、再エネ賦課金の上昇という、製造・物流固有の要因が複合的に影響します。
            </p>
            <div className="mt-4 space-y-3">
              {costFactors.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              足立区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区では国補助（SII等）・都独自補助・区独自補助が組合せ可能です。区独自補助は中小事業者向けに使いやすく、LED・空調・コンプレッサー・冷凍機更新の打ち手になります。なお各制度の対象・採否は公募ごとの要件審査によります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidies.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-2">
                    <p><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                    <p><span className="font-semibold text-slate-700">補助率：</span>{item.rate}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金スケジュールは{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、SII補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内の主要産業と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区の事業者構成は、金属加工・機械・プレス、物流・倉庫、食品加工・印刷などの中小製造、北千住の商業・大学、公共施設・大型施設の5層構造です。それぞれ電力消費パターンと契約区分が異なります。
            </p>
            <div className="mt-4 space-y-3">
              {industryProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              電力会社切替の実情 — 区内事業者の現状
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区の新電力シェアは都内平均にやや劣後すると推定され、長年の取引で東電EPを継続する町工場・倉庫が多いのが実態です。中規模工場・物流倉庫ほど競争入札の効果が出やすく、デマンド制御・蓄電池併用の提案力も選定の論点になります。本セクションは継続・切替それぞれの観点を中立的に整理したものです。
            </p>
            <div className="mt-4 space-y-3">
              {switchingReality.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択論点は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              区内事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区の省エネは『コンプレッサー高効率化＋エア漏れ対策』『冷凍機・空調の高効率化＋運転最適化（物流倉庫）』『プレスのサーボ化＋デマンド平準化』『全館LED化＋高効率空調』『中小向け需要見える化』の5軸が主力です。区補助・SII補助・都補助の組合せで投資回収を短縮できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {energySaving.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              足立区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。区内の中小工場・倉庫は特に契約電力（kW）の過大設定・契約期間・区独自補助の確認を見落としがちです。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで足立区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              足立区は町工場のデマンドピーク・物流倉庫の24時間連続負荷・北千住商業の空調負荷など固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・区補助活用・省エネ投資・デマンド制御のメリットを定量化できます。試算結果は自社条件を入力したうえで判断材料としてご活用ください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>代表シナリオで示した約15〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-09"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/taito-ku-business-electricity-cost", title: "台東区（浅草・上野）の法人電気料金", description: "浅草・上野の観光宿泊、御徒町・合羽橋の問屋街に特化した電気代見直しの実務ガイド。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "製造業・印刷業・物流拠点集積の区の電力需要と契約最適化。" },
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "都全体の電力事情・水準・補助金の総合ガイド。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "都内全区の電気料金事情をハブから探す。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電エリアの料金体系・単価水準・燃調。" },
              { href: "/katsushika-ku-business-electricity-cost", title: "葛飾区の法人電気料金", description: "隣接区。中小製造業・町工場（金属加工・玩具）の事情。" },
              { href: "/arakawa-ku-business-electricity-cost", title: "荒川区の法人電気料金", description: "隣接区。中小製造・町工場・商業の事情。" },
              { href: "/sumida-ku-business-electricity-cost", title: "墨田区の法人電気料金", description: "近縁区。中小製造業・金属加工・印刷の事情。" },
              { href: "/metal-processing-electricity-cost-review", title: "金属加工業の電気代見直し（業種一般）", description: "プレス・NC・溶接のデマンド最適化。" },
              { href: "/warehouse-electricity-cost-review", title: "物流倉庫の電気料金見直し（業種一般）", description: "冷凍機・空調・荷役のベース電力最適化。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店舗の電気代見直し（業種一般）", description: "北千住商業に通じる店舗の省エネ・切替。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小工場・倉庫の主力補助金の対象設備。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動プランが向かない法人", description: "市場連動の適否を負荷パターンで判断。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較で自社の立ち位置を確認。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="足立区の自社条件で電気代リスクを試算する"
            description="中小製造工場・物流倉庫・北千住商業ビルなど足立区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。区独自補助・SII補助・固定プラン切替・デマンド制御のROIもあわせて確認できます。本ページは特定の電力会社・契約形態を推奨するものではありません。"
            links={[
              { href: "/simulate", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>
        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="足立区の電力契約見直し、専門家に相談しませんか？"
            description="区内の中小製造工場・物流倉庫・北千住商業の電気代見直しは、デマンド構造・ベース電力・契約区分で論点が大きく変わります。一般社団法人エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
