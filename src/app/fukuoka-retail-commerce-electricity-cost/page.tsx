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
  "福岡県の商業・小売業の電気料金完全ガイド｜天神・博多の百貨店／商業施設／地下街の照明空調と九州電力契約";
const pageDescription =
  "福岡県の商業・小売業に特化した法人電気代ガイド。天神・博多の百貨店・大型商業施設・地下街・専門店の集積、照明・空調・冷蔵が中心の電力プロファイル、九州電力エリアの単価事情（原子力＋太陽光で燃調感応度低め）、天神ビッグバン再開発、契約最適化を実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "福岡県 商業 小売 電気料金",
    "天神 博多 百貨店 電気代",
    "商業施設 地下街 電力",
    "九州電力 高圧 小売",
    "天神ビッグバン 再開発",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/fukuoka-retail-commerce-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fukuoka-retail-commerce-electricity-cost",
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
    label: "福岡県の商業集積 — 天神・博多の九州最大の商圏",
    detail:
      "福岡市は人口160万人超で九州・西日本の経済中枢。天神（福岡PARCO・大丸福岡天神店・岩田屋本店・ソラリアプラザ・天神地下街）と博多駅周辺（博多阪急・JR博多シティ・アミュプラザ博多・KITTE博多・博多マルイ・マイング）に九州最大の商業集積を形成します。商圏は福岡県内のみならず九州全域・山口・アジアからのインバウンドに及び、百貨店・大型商業施設（SC）・専門店・地下街・飲食店が高密度に立地。商業・小売は福岡市経済の柱で、電力需要の重要構成要素です（出典: 福岡県統計・経産省商業統計）。",
  },
  {
    label: "商業・小売の電力プロファイル — 照明・空調・冷蔵が中心",
    detail:
      "百貨店・商業施設の電力消費は、照明（売場・演出・看板／全電力の25〜35%）、空調（30〜45%）、冷蔵冷凍（食品売場・デパ地下／10〜20%）、エスカレーター・エレベーター、厨房・飲食テナントが主要構成。営業時間帯（10〜20時）に負荷が集中する『商業型』プロファイルで、開店前の空調立ち上げ・閉店後の冷蔵維持を含めた運用最適化が課題です。デパ地下・食品スーパーは冷蔵冷凍の通年負荷が大きい構造です。",
  },
  {
    label: "天神ビッグバン・博多コネクティッドの再開発",
    detail:
      "福岡市は『天神ビッグバン』（天神地区の大規模ビル建替え促進）・『博多コネクティッド』（博多駅周辺の再開発促進）を推進し、容積率緩和で大型複合ビルの建替えが進行中。新築ビルは高効率設備・ZEB志向・再エネ導入が前提となり、商業床の電力プロファイルも更新されています。再開発に伴う一時的な需要変動と、完成後の高効率化の両面があります（出典: 福岡市都市計画関連資料）。",
  },
  {
    label: "インバウンド・観光需要と商業電力",
    detail:
      "福岡はアジアからのインバウンド・クルーズ客の玄関口として観光・商業需要が拡大。免税店・ドラッグストア・専門店の営業時間延長・需要拡大により、商業施設の電力需要も増加基調。インバウンド変動（為替・国際情勢）の影響を受ける需要構造で、稼働連動型の電力マネジメントが経営課題となります。",
  },
  {
    label: "九州電力エリアと福岡商業の相互依存",
    detail:
      "九州電力エリアは玄海・川内の原子力（4基稼働中）＋大規模太陽光（九州は太陽光導入量国内最大級）＋LNG火力で電源構成が多様。原子力＋太陽光比率の高さから燃料費調整額の感応度が他エリアより低めで、商業・小売の電力コストの安定性に寄与。一方、春秋の太陽光出力大で昼間の市場価格が下がる九州固有のパターンもあり、商業の昼間営業との相性が論点です（出典: 九州電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "九州電力（きゅうでん）",
    role: "一般小売事業者（旧一電）",
    detail:
      "福岡県内商業・小売の最大シェア。『高圧電力』『業務用季節別時間帯別電力』が主軸メニュー。原子力＋太陽光の電源構成を背景に、燃料費調整額の感応度が他エリアより低めで、商業施設の電力コスト安定性に寄与。天神・博多の大型商業施設の高圧需要家を多数抱えています。",
  },
  {
    name: "九電みらいエナジー",
    role: "九電グループ新電力",
    detail:
      "九州電力グループの再エネ特化新電力。九州エリアの豊富な再エネ（太陽光）電源調達枠を保有し、商業施設・小売のRE100・CN対応の有力選択肢。脱炭素を訴求する大型SC・百貨店での採用が進んでいます。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "福岡県内の大型商業施設・チェーン小売・専門店で競争入札の主要対抗馬。固定単価3〜5年契約＋燃調連動メニューが標準。多店舗チェーン（ドラッグストア・スーパー・専門店）の一括契約・集約購買の提案も活発です。",
  },
  {
    name: "西部ガス系新電力",
    role: "都市ガス系新電力",
    detail:
      "西部ガス系の電気事業が福岡県内の都市ガス需要家向けにガス＋電気の一括最適化提案。飲食テナント・厨房でガス併用する商業施設・百貨店での総合最適パッケージとして採用例があります。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "大手百貨店・大手小売チェーン（イオン・セブン&アイ等）のRE100・CN対応で、商業施設でもオフサイトPPA（九州各県の太陽光・風力）／屋上太陽光自家消費／非化石証書の調達が拡大。九州は太陽光適地が豊富でPPA調達コストが他エリアより低位な優位性があります。",
  },
  {
    name: "JEPX九州エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX九州エリアは、太陽光出力が大きい春秋の昼間に低価格化（時にゼロ円・出力制御発生）する独自パターンを示します。商業施設は昼間営業が中心のため、市場連動型で昼間の安価な電力を活用できる余地がある一方、夕方〜夜間のピークは高値のため、固定契約＋部分的な市場活用が論点です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "九州電力エリアの高圧 — 商業施設の単価水準",
    detail:
      "百貨店・大型商業施設（高圧500kW〜2,000kW級）の電力量料金は標準メニューで概ね17〜21円/kWh+調整項目。燃料費調整額（2024〜2025年で+1.5〜+3.0円/kWh目安・原子力＋太陽光で他エリアより小幅）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は23〜28円/kWhレンジ。新電力競争入札では標準比1〜3円/kWh下げが目安です。",
  },
  {
    label: "特別高圧 — 大型百貨店・複合商業ビルの単価",
    detail:
      "天神・博多の大型百貨店・大規模複合商業ビル（特別高圧2,000kW超）の電力量料金は概ね16〜19円/kWh+調整項目。実質単価は22〜27円/kWhレンジ。年間使用量数千万kWh級では、照明LED化・空調高効率化と契約見直しの組合せで経営インパクトが大きいレンジです。",
  },
  {
    label: "低圧電力 — 中小店舗・専門店・飲食の単価",
    detail:
      "天神・博多・地下街の中小店舗・専門店・飲食店（契約電力50kW未満）の『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は18〜21円/kWh。低圧自由化の選択肢があり、多店舗運営者は高圧一括契約や新電力低圧メニューの相見積で改善余地があります。",
  },
  {
    label: "九州エリアの燃調感応度（相対的に低い）",
    detail:
      "九州電力エリアは原子力4基稼働＋太陽光導入量国内最大級で、LNG/石炭依存度が他エリアより低い。2022〜2023年の燃料高騰時の燃調変動幅も東京・中部・北海道より小幅で推移しました。商業・小売の単価変動リスクは相対的に低めで、固定契約での安定運用に適した構造です（出典: 九州電力供給計画／エネ庁エネルギー白書）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 天神・博多の大型百貨店（特別高圧 3,000kW、年間 1,800万kWh）",
    before:
      "Before: 天神・博多エリアの大型百貨店A（売場面積5万m²超、デパ地下食品売場・複数レストラン・催事場併設）。営業時間帯の照明・空調＋デパ地下冷蔵冷凍が稼働。九州電力の特別高圧契約＋燃調連動。年間電気代 約4.5億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約獲得（再エネ比率付）／全館LED化＋売場調光制御（県補助＋SII併用、投資1.2億円）／高効率セントラル空調更新＋外気冷房／デパ地下冷蔵ショーケースの高効率化＋ナイトカバー／屋上太陽光500kW自家消費／BEMSで営業時間連動運転。",
    result:
      "Result: 年間電気代 約4.5億円 → 約3.6億円（▲約20%、▲9,000万円・目安）／契約電力 3,000→2,700kW／投資回収 補助金後 3年前後（目安）／RE100対応で企業ブランド価値向上。",
  },
  {
    title: "業種2: 大型ショッピングセンター（SC）（高圧 1,800kW、年間 1,000万kWh）",
    before:
      "Before: 福岡市近郊の大型ショッピングセンターB（専門店モール＋食品スーパー＋シネコン＋飲食）。共用部空調・照明＋テナント＋食品スーパー冷蔵冷凍が稼働。九州電力の業務用高圧電力＋燃調連動。年間電気代 約2.5億円。",
    after:
      "After: 九電みらいエナジー（再エネ）に固定3年で切替／共用部LED化＋駐車場照明制御／高効率空調更新／食品スーパー冷蔵の高効率化＋ナイトカバー／屋上・駐車場太陽光1MW自家消費＋蓄電池／テナント別電力見える化／BEMS導入。",
    result:
      "Result: 年間電気代 約2.5億円 → 約2億円（▲約20%、▲5,000万円・目安）／契約電力 1,800→1,620kW／投資回収 補助金後 3年前後（目安）／テナント向けGHG削減レポート提供。",
  },
  {
    title: "業種3: 専門店チェーン・多店舗小売（高圧相当・合算 800kW、年間 450万kWh）",
    before:
      "Before: 福岡県内に多店舗展開する専門店・ドラッグストアチェーンC（県内20〜30店舗、低圧＋一部高圧）。各店舗の照明・空調・冷蔵が主要負荷。九州電力（店舗別契約）＋燃調連動。合算年間電気代 約1.1億円。",
    after:
      "After: 全国系新電力に多店舗一括契約（集約購買で単価交渉力向上）／全店LED化＋照明制御（県補助＋SII併用、投資2,500万円）／空調・冷蔵の高効率機更新／大型店の屋上太陽光自家消費／本部BEMSで全店一元管理。",
    result:
      "Result: 合算年間電気代 約1.1億円 → 約8,800万円（▲約20%、▲2,200万円・目安）／多店舗一括契約で単価▲1.5円/kWh／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "営業時間帯への負荷集中",
    detail:
      "商業施設は営業時間帯（10〜20時）に照明・空調・エスカレーター等の負荷が集中する『商業型』プロファイル。開店前の空調立ち上げ、閉店後の冷蔵維持・清掃を含め、営業時間連動の運用最適化が単価最適化の重要要素です。ピーク時間帯の契約電力管理が基本料金に直結します。",
  },
  {
    label: "デパ地下・食品売場の冷蔵冷凍通年負荷",
    detail:
      "百貨店のデパ地下・SCの食品スーパーの冷蔵冷凍ショーケース・冷蔵庫は24時間稼働の通年負荷。照明・空調と異なり営業時間外も稼働するため、冷蔵設備の高効率化・ナイトカバー・扉付ショーケース化が省エネの重要余地です。",
  },
  {
    label: "九州エリアの燃調感応度（相対的に低い）",
    detail:
      "九州電力エリアは原子力＋太陽光比率が高く、燃調変動幅が他エリアより小幅。2022〜2023年高騰時の単価上昇リスクは相対的に小さく、商業・小売にとっては電力コストの安定性が確保しやすい構造。固定契約での安定運用に適しています。",
  },
  {
    label: "再開発・建替えに伴う設備更新",
    detail:
      "天神ビッグバン・博多コネクティッドによる大型ビル建替えで、新築ビルは高効率設備・ZEB志向・再エネ導入が前提化。一方、既存の老朽商業ビルは設備更新の遅れが電力コスト高の要因になり得るため、再開発・改修のタイミングでの省エネ投資が重要です。",
  },
  {
    label: "インバウンド変動と大手小売のCN要請",
    detail:
      "インバウンド需要は為替・国際情勢に左右され、商業施設の稼働・電力需要が変動。加えて、大手百貨店・大手小売チェーンのRE100・CN対応で、テナント・サプライチェーンにも再エネ調達・省エネが求められつつあります。需要変動と脱炭素の両面のマネジメントが経営課題です。",
  },
];

const subsidies = [
  {
    name: "福岡県 中小企業省エネ・脱炭素設備導入補助",
    target: "県内中小・中堅商業小売業の省エネ・脱炭素設備（空調・LED・冷蔵・BEMS等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の中小企業支援補助。商業施設・小売店舗の空調更新・LED化・冷蔵高効率化等で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "福岡市 環境・脱炭素経営支援補助",
    target: "市内事業者の省エネ・再エネ設備・ZEB化",
    rate: "対象経費の1/3〜1/2、上限は事業区分による",
    note: "福岡市環境局による独自補助。天神ビッグバン・博多コネクティッド再開発のZEB化・脱炭素化とリンクして活用余地。最新公募状況は福岡市公式窓口で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／ZEB・既存建築物省エネ化）",
    target: "商業施設の高効率空調・LED・冷蔵冷凍・断熱・BEMS等",
    rate: "中小1/2、大企業1/3、上限事業区分による",
    note: "百貨店・SC・専門店の更新で採択実績多数。全館LED化・高効率空調・冷蔵ショーケース更新・ZEB改修は採択率も比較的高めの王道メニュー。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "屋上太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "九州は太陽光適地が豊富で、商業施設・SCの屋上・駐車場太陽光PPAの適性が高い。大手小売のRE100対応投資との組合せで導入が拡大。",
  },
  {
    name: "多店舗チェーン向け省エネ・一括導入補助",
    target: "チェーン小売の複数店舗一括の省エネ設備導入",
    rate: "1/2以内、まとめ申請で効率化",
    note: "ドラッグストア・スーパー・専門店チェーンの複数店舗一括のLED化・空調更新で活用可能。本部主導の一括導入で申請・施工を効率化できます。",
  },
];

const industryProfile = [
  {
    label: "天神 — 福岡の商業中心",
    detail:
      "天神は福岡PARCO・大丸福岡天神店・岩田屋本店・ソラリアプラザ・ミーナ天神・天神地下街が集積する九州最大の商業中心。百貨店・ファッションビル・地下街・専門店が高密度に立地し、特別高圧・高圧の大型需要家が集中。天神ビッグバンで大型ビルの建替えが進行中です。",
  },
  {
    label: "博多駅周辺 — 駅ビル・商業集積",
    detail:
      "博多駅周辺は博多阪急・JR博多シティ・アミュプラザ博多・KITTE博多・博多マルイ・マイング（駅ナカ）が集積。新幹線・空港アクセスの良さで観光・ビジネス・インバウンド需要が大きい。博多コネクティッドで駅周辺の再開発が進行中です。",
  },
  {
    label: "福岡近郊 — 大型ショッピングセンター",
    detail:
      "福岡市近郊・郊外にはイオンモール・ゆめタウン・木の葉モール等の大型SCが立地。専門店モール＋食品スーパー＋シネコン＋飲食の複合型で、共用部＋テナント＋食品冷蔵の電力負荷が大きい高圧需要家です。",
  },
  {
    label: "北九州・久留米 — 地域商業中心",
    detail:
      "北九州市（小倉・黒崎）、久留米市等の地域商業中心にも百貨店・商業施設・地域SCが立地。福岡市に次ぐ商業集積として、地域の小売需要を担う中堅商業施設が分布します。",
  },
  {
    label: "九州電力・系統・太陽光資源",
    detail:
      "九州電力の原子力（玄海・川内）＋太陽光（九州は導入量国内最大級）＋火力が主軸。太陽光出力が大きい春秋は出力制御も発生する一方、商業の昼間営業との相性は良い。福岡の商業施設の屋上太陽光・PPA調達のポテンシャルも大きいエリアです。",
  },
];

const switchingReality = [
  {
    label: "福岡の商業・小売の新電力浸透度",
    detail:
      "九州電力エリアの新電力比率は全国平均並み。天神・博多の大型商業施設・チェーン小売では競争入札による新電力選定が進み、九電みらいエナジー（再エネ）・全国系・西部ガス系の競争が活発。中小店舗・専門店も新電力切替の余地が大きいエリアです。",
  },
  {
    label: "市場連動と固定の使い分け",
    detail:
      "九州は太陽光出力大で昼間の市場価格が下がる独自パターンがあり、昼間営業中心の商業施設では市場連動の昼間活用余地があります。ただし夕方〜夜間のピーク・燃料高騰リスクから、固定3〜5年＋部分的市場活用、または固定＋燃調上限ありが主流です。",
  },
  {
    label: "九州電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・原子力＋太陽光で燃調感応度低位・大型商業施設対応・災害時復旧体制。デメリット: 新電力比1〜3円/kWh単価が高め、長期固定・多店舗一括での競争余地は新電力に分がある場面も。",
  },
  {
    label: "供給先選定のポイント（福岡×商業固有）",
    detail:
      "①高圧／特別高圧の商業施設供給実績、②再エネ調達枠（RE100・大手小売CN対応）、③多店舗一括契約・集約購買への対応、④燃調上限・連動条件、⑤BCP対応の5点が重要。多店舗チェーンは一括契約での単価交渉力確保が鍵です。",
  },
  {
    label: "屋上太陽光・RE100対応の拡大",
    detail:
      "大手百貨店・大手小売チェーンのRE100・CN対応で、商業施設の屋上・駐車場太陽光自家消費＋オフサイトPPAが拡大。九州は太陽光適地が豊富でPPA調達コストが低位な優位性があり、商業床のRE100化が進みやすいエリアです。",
  },
];

const energySaving = [
  {
    label: "全館LED化＋売場調光・演出制御",
    detail:
      "商業施設の全館LED化＋売場・演出・看板照明の調光制御で照明電力▲50〜70%。照明は商業施設の電力の25〜35%を占め、削減効果が大きい最重要打ち手。営業時間連動・売場別制御でさらに効果大。県補助＋SII補助で投資回収 1.5〜2.5年。",
  },
  {
    label: "高効率セントラル空調＋外気冷房",
    detail:
      "古い空調を高効率セントラル空調に更新＋中間期の外気冷房（外気導入）活用で空調電力▲25〜35%。商業施設の空調は電力の30〜45%を占めるため効果が大きい。SII補助＋県補助で投資回収 3〜4年。",
  },
  {
    label: "冷蔵冷凍ショーケースの高効率化＋ナイトカバー",
    detail:
      "デパ地下・食品スーパーの冷蔵冷凍ショーケースを高効率機・扉付に更新＋夜間ナイトカバーで冷蔵電力▲20〜30%。24時間通年負荷のため削減効果が大きく、SII補助で投資回収 2.5〜3.5年。",
  },
  {
    label: "屋上・駐車場太陽光＋自家消費",
    detail:
      "商業施設・SCは屋上・駐車場の面積が大きく、太陽光500kW〜2MW級の自家消費が現実的。九州の太陽光適地優位性を活かし、RE100算入＋電気代単価下げ＋大手小売CN対応を実現。需要家主導型補助との組合せで投資回収 5〜7年（補助込みで3〜5年）。",
  },
  {
    label: "BEMS・多店舗一元管理＋営業時間連動運転",
    detail:
      "BEMSによる需要見える化＋営業時間連動の空調・照明運転で総電力▲10〜20%。多店舗チェーンは本部BEMSで全店一元管理し、ピーク需要の平準化・契約電力適正化を実現。テナント別電力見える化でテナント協力も得られます。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績（夏季・歳末ピーク含む）に対して過剰でないか",
  "照明・空調・冷蔵冷凍の電力消費比率を把握し、LED化・高効率化の余地を検証したか",
  "デパ地下・食品売場の冷蔵ショーケースのナイトカバー・扉付化を検討したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "九州電力の最新単価で再見積を取得したか",
  "九電みらいエナジー・全国系・西部ガス系の新電力10社以上から相見積を取得したか",
  "多店舗チェーンの場合、複数店舗一括契約・集約購買の単価交渉余地を確認したか",
  "大手小売・親会社のRE100要請に対する再エネ調達計画があるか",
  "屋上・駐車場太陽光自家消費の試算（面積・kW・年間発電量・回収年数）を実施したか",
  "福岡県補助・福岡市補助・SII・需要家主導型補助・多店舗一括補助の併用可否を整理したか",
  "営業時間連動のBEMS運転制御・テナント別電力見える化を検討したか",
  "BCP（停電時の冷蔵維持・営業継続・顧客対応）の体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "福岡の商業・小売は九州電力エリアで電気代が安定していますか？",
    answer:
      "相対的に安定しています。九州電力エリアは玄海・川内の原子力4基稼働＋太陽光導入量国内最大級で、LNG/石炭依存度が他エリアより低く、燃料費調整額の変動幅が小幅で推移してきました。2022〜2023年の燃料高騰時の単価上昇も東京・中部・北海道より小さく、商業・小売にとっては電力コストの安定性が確保しやすい構造です。固定契約での安定運用に適したエリアと言えます（出典: 九州電力供給計画／エネ庁エネルギー白書）。",
  },
  {
    question: "商業施設で電力消費が最も大きいのは何ですか？",
    answer:
      "一般的に空調（30〜45%）が最も大きく、次いで照明（25〜35%）、冷蔵冷凍（食品売場／10〜20%）、エスカレーター・エレベーター、厨房・飲食テナントが続きます。営業時間帯（10〜20時）に負荷が集中する商業型プロファイルです。全館LED化（照明）と高効率空調更新が省エネの二大柱で、デパ地下・食品スーパーがある場合は冷蔵ショーケースの高効率化も重要です。",
  },
  {
    question: "九州の太陽光が多い特性は商業施設の電気代にプラスですか？",
    answer:
      "プラスに働く面があります。九州は太陽光導入量が国内最大級で、春秋の昼間は太陽光出力が大きく市場価格が下がる（時にゼロ円・出力制御）独自パターンがあります。商業施設は昼間営業が中心のため、市場連動型プランで昼間の安価な電力を活用できる余地があります。一方、夕方〜夜間のピークは高値のため、固定契約＋部分的な市場活用、または屋上太陽光自家消費との組合せが現実的。九州は商業施設の屋上太陽光・PPA調達の適地でもあります。",
  },
  {
    question: "天神ビッグバン・博多コネクティッドは電気代にどう影響しますか？",
    answer:
      "再開発による大型ビル建替えで、新築ビルは高効率設備・ZEB志向・再エネ導入が前提となり、完成後は商業床の電力効率が大幅に向上します。建替え期間中は一時的な需要変動がありますが、完成後は省エネ・脱炭素対応の最新設備で電力コストが最適化されます。既存の老朽商業ビルは、再開発・改修のタイミングでの省エネ投資が電力コスト高の解消に重要です（出典: 福岡市都市計画関連資料）。",
  },
  {
    question: "多店舗チェーンの電気代を効率的に下げるには？",
    answer:
      "①複数店舗の一括契約・集約購買による単価交渉力の確保（単独契約より1〜2円/kWh安い水準を引き出せるケースが多い）、②全店LED化・空調高効率化の本部主導一括導入、③本部BEMSによる全店一元管理・ピーク平準化、④大型店の屋上太陽光自家消費、の4方向が定石。多店舗一括の省エネ補助金の活用で、申請・施工を効率化できます。",
  },
  {
    question: "デパ地下・食品スーパーの冷蔵電力をどう削減できますか？",
    answer:
      "①冷蔵冷凍ショーケースの高効率機・扉付（リーチイン）への更新、②夜間ナイトカバーの設置、③冷蔵庫・バックヤード冷蔵の高効率化、④冷蔵設備の集中管理・デフロスト最適化、の4方向で取り組むのが定石です。冷蔵冷凍は24時間通年負荷のため削減効果が大きく、SII補助の活用で投資回収2.5〜3.5年が目安です。",
  },
  {
    question: "福岡の商業・小売向け補助金は何が活用できますか？",
    answer:
      "福岡県の中小企業省エネ・脱炭素設備導入補助、福岡市の環境・脱炭素経営支援補助、国のSII省エネ補助（ZEB・既存建築物省エネ化）、需要家主導型再エネ・PPA補助、多店舗チェーン向け一括導入補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は福岡県商工部・福岡市環境局・SIIの公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "商業施設のBCPは電力面でどう備えるべきですか？",
    answer:
      "商業施設は停電時に冷蔵食品の品質維持・顧客の安全確保・営業継続が課題となります。①非常用発電機（冷蔵維持・最低限の照明・避難誘導）、②蓄電池（太陽光併用でBCP兼用）、③冷蔵設備の系統復旧優先度の確認、④顧客避難・情報提供体制の整備、が重要です。物理的な復旧作業は九州電力送配電（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に確認してください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "九州電力 法人向け料金プラン", url: "https://www.kyuden.co.jp/" },
  { name: "九州電力送配電 供給計画", url: "https://www.kyuden-go.co.jp/" },
  { name: "福岡県 商工部 産業政策", url: "https://www.pref.fukuoka.lg.jp/" },
  { name: "福岡市 経済観光文化局・環境局", url: "https://www.city.fukuoka.lg.jp/" },
  { name: "経済産業省 商業統計・商業動態統計", url: "https://www.meti.go.jp/statistics/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function FukuokaRetailCommerceElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/fukuoka-retail-commerce-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "福岡県の商業・小売業の電気料金", url: "https://simulator.eic-jp.org/fukuoka-retail-commerce-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">福岡県の商業・小売業の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            福岡県の商業・小売業の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            福岡県は天神・博多を中心に九州最大の商業集積を形成し、百貨店・大型商業施設・地下街・専門店・チェーン小売が高密度に立地します。本ページでは「福岡県 × 商業・小売業」というクロス領域に絞り、九州電力エリア固有の単価事情（原子力＋太陽光で燃調感応度低め）と、照明空調冷蔵の電力プロファイル、天神ビッグバン再開発、多店舗一括契約までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>天神・博多・近郊SCの商業集積と電力プロファイル</li>
              <li>大型百貨店／ショッピングセンター／専門店チェーンのBefore/After削減事例</li>
              <li>九州電力エリアの単価水準と燃調感応度の低さ</li>
              <li>天神ビッグバン再開発のZEB化・屋上太陽光・多店舗一括契約</li>
              <li>福岡×商業に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「福岡 × 商業・小売」のクロス領域に特化したガイドです。福岡県全体の文脈は{" "}
            <Link href="/fukuoka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              福岡県の法人電気料金完全ガイド
            </Link>
            、業種一般としての小売店全体は{" "}
            <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              小売店の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福岡県の商業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡市は九州・西日本の経済中枢として、天神・博多に九州最大の商業集積を形成しています。営業時間帯への負荷集中・デパ地下の冷蔵通年負荷という業種特性と、九州電力エリアの燃調感応度の低さが電力事情の中心です。
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
              福岡県全体の文脈は{" "}
              <Link href="/fukuoka-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                福岡県の法人電気料金ガイド
              </Link>
              、九州電力エリア全体は{" "}
              <Link href="/region-kyushu-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                九州電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                小売店の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの主要電力会社・新電力（福岡×商業での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県内の商業・小売は、九州電力に加えて九電みらいエナジー・全国系・西部ガス系・再エネ特化型と多様なプレイヤーが供給。大型商業施設・チェーン小売では競争入札が進み、中小店舗も切替余地が大きいエリアです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              九州電力エリアの料金水準と商業・小売への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・特別高圧・低圧の単価レンジ、九州エリアの燃調感応度の低さを、商業・小売の代表的な契約タイプ別に整理します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 大型百貨店／ショッピングセンター／専門店チェーン（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県内の代表的な3規模の商業・小売で、契約見直し＋LED化＋空調更新＋屋上太陽光の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              業種一般の事例は{" "}
              <Link href="/retail-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">小売店の電気料金見直し</Link>
              、{" "}
              <Link href="/department-store-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">百貨店の電気料金見直し</Link>
              、{" "}
              <Link href="/supermarket-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">スーパーマーケットの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福岡×商業固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡商業の電気代上昇は、営業時間帯への負荷集中・デパ地下の冷蔵通年負荷・九州エリアの燃調感応度（低め）・再開発に伴う設備更新・インバウンド変動と大手CN要請の5要因が複合的に作用します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              個別要因は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金・優遇制度 — 福岡県・福岡市・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡県の中小企業省エネ補助、福岡市の環境・脱炭素経営支援補助、国のSII省エネ補助、需要家主導型PPA補助、多店舗チェーン向け一括導入補助の5層を組合せ、商業・小売投資の回収を1〜2年短縮するのが定石です。
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
              、SIIの詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              主要拠点／集積地の電力プロファイル（天神／博多駅周辺／近郊SC／北九州久留米）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡の商業集積は、天神の商業中心、博多駅周辺の駅ビル商業、福岡近郊の大型SC、北九州・久留米の地域商業中心、九州電力・太陽光資源という構造です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              電力会社切替の実情 — 九州電力と新電力の比較（商業版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大型商業施設・チェーン小売では競争入札が進行中、中小店舗でも切替余地、市場連動と固定の使い分け、屋上太陽光・RE100対応の拡大が共通トレンドです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              プラン選択は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動が向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              福岡×商業の省エネ・自家消費事例（LED／空調／冷蔵ショーケース／屋上太陽光／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              商業・小売の省エネは、全館LED化＋売場調光、高効率セントラル空調＋外気冷房、冷蔵冷凍ショーケース高効率化＋ナイトカバー、屋上駐車場太陽光、BEMS多店舗一元管理の5軸が主力。百貨店・SC・専門店チェーンいずれでも投資回収1.5〜4年で実現可能です。
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
              福岡×商業 契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで福岡×商業の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              福岡の商業・小売は、営業時間帯の負荷集中・デパ地下冷蔵負荷・インバウンド変動・大手CN要請など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・LED空調更新・屋上太陽光のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・歳末商戦期の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した20%前後の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-28"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/fukuoka-business-electricity-cost", title: "福岡県の法人電気料金ガイド（地域一般）", description: "福岡県全体の文脈・九州電力エリア・産業構造。" },
              { href: "/retail-store-electricity-cost-review", title: "小売店の電気料金見直し（業種一般）", description: "専門店・物販小売の業種別最適化。" },
              { href: "/department-store-electricity-cost-review", title: "百貨店の電気料金見直し（業種一般）", description: "デパ地下・売場・催事の業種別最適化。" },
              { href: "/supermarket-electricity-cost-review", title: "スーパーマーケットの電気料金見直し（業種一般）", description: "食品スーパーの冷蔵冷凍ショーケース最適化。" },
              { href: "/region-kyushu-business-electricity", title: "九州電力エリアの法人電気代事情", description: "九州全体の料金体系・原子力＋太陽光電源構成。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/kumamoto-semiconductor-electricity-cost", title: "熊本県の半導体・電子部品工場の電気料金", description: "九州電力エリアのJASM/TSMCクロス（兄弟ページ）。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "商業施設に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "商業施設の市場連動の適否。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "九州エリアの太陽光比率を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "九州エリアの感応度の低さを理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋上・駐車場太陽光の経済性。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "大手小売RE100対応の追加性ある再エネ調達。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="福岡の商業・小売の電気代リスクを自社条件で試算する"
            description="天神・博多の百貨店・大型SC・専門店チェーンなど福岡の商業固有の条件（九州電力エリア・営業時間帯負荷・デパ地下冷蔵・多店舗）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・LED空調更新・屋上太陽光のROIもあわせて確認できます。"
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
            heading="福岡の商業・小売の電力契約見直し、専門家に相談しませんか？"
            description="大型百貨店・SC・専門店チェーンいずれも照明空調冷蔵の規模感とインバウンド変動・大手CN要請が絡み合い、契約・調達・省エネ投資・多店舗一括を一体で設計する必要があります。エネルギー情報センターは中立的立場で福岡県内商業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
