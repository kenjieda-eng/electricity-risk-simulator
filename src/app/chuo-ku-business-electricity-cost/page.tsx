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
  "中央区の法人電気料金完全ガイド｜銀座百貨店／日本橋金融／晴海・勝どきタワマンと再開発電力";
const pageDescription =
  "東京都中央区の法人電気代を区固有の論点で解説。銀座百貨店・宝飾店のファサード照明、日本橋の金融機関本店・COREDO再開発、月島・晴海・勝どきの湾岸タワー、築地市場跡再開発を踏まえた電力契約最適化と省エネ補助の実務をまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中央区 法人電気料金",
    "銀座 百貨店 電気代",
    "日本橋 金融 電気代",
    "晴海 勝どき タワー 電力",
    "中央区 省エネ補助",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/chuo-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/chuo-ku-business-electricity-cost",
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
    label: "中央区の事業所構成 — 商業・金融・湾岸住商の三層構造",
    detail:
      "中央区は銀座・日本橋・八重洲の伝統的商業金融地区、月島・晴海・勝どき・豊海の湾岸住商開発、築地・新富町の食品流通＋再開発進行エリアの三層構造です。区内の事業所密度は全国トップクラスで、平日昼夜・週末の負荷パターンがエリア別に大きく異なります（出典: 中央区統計）。",
  },
  {
    label: "銀座エリアのファサード照明・ブランド店舗の電力負荷",
    detail:
      "銀座中央通り・並木通り・銀座6〜8丁目は世界有数のブランド集積地。ファサード照明・ショーウィンドウ照明・店内高演色LEDが営業時間外も含めて電力を消費し、店舗当たり契約電力50〜200kW級が一般的。深夜帯のベース負荷も比較的高い「都心商業型」のプロファイルです。",
  },
  {
    label: "日本橋再開発と特別高圧需要の集積",
    detail:
      "三井不動産が中心となった日本橋再開発（COREDO日本橋・COREDO室町・三井タワー・日本橋室町三井タワー・常盤橋プロジェクト等）で、特別高圧オフィス＋商業複合の超大型ビルが連続立地。1棟あたり年間使用量2,000万〜4,000万kWh規模の契約が中心です。",
  },
  {
    label: "晴海フラッグ・勝どきタワーマンション群の電力需要",
    detail:
      "晴海フラッグ（東京2020選手村跡）、勝どきザ・タワー、勝どきビュータワー、HARUMI FLAGなど湾岸タワー群が急増。商業床・共用部の高圧契約と各戸低圧契約が混在し、エリア全体の電力需要は再開発進行に伴い継続的に拡大しています。",
  },
  {
    label: "築地再開発と食品流通電力負荷",
    detail:
      "築地市場跡地は2030年代の再開発が予定され、現状は新富町・築地6丁目の食品流通・卸売・飲食が中心。冷凍冷蔵設備の電力負荷が大きく、食品事業者は契約電力（kW）削減と高効率冷凍冷蔵更新の余地が大きいエリアです。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "区内シェア最大。銀座・日本橋・八重洲の特別高圧需要家と、月島・晴海・勝どきの新興エリア需要家を抱える。『業務用高圧電力』『特別高圧電力』『業務用季節別時間帯別電力』が主軸メニュー。2023年6月の料金改定後、調整額負担が大きい点に注意が必要です。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光等）",
    role: "全国展開新電力",
    detail:
      "中央区内の特別高圧・高圧の競争入札で主力対抗馬。日本橋三井タワー級の特別高圧入札実績多数。固定単価メニューと一部市場連動を提供。RE100対応の再エネメニューも各社展開しています。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系・東急電鉄系の新電力。コージェネ既設ビル・GHP導入ビルでの電気＋ガス一体最適化提案が強み。日本橋・銀座の大型ビルでも採用実績あります。",
  },
  {
    name: "百貨店・大型商業特化型新電力",
    role: "業態特化型",
    detail:
      "百貨店・大型商業施設は需要パターンが特殊で、土日祝の負荷が高く深夜帯はベース照明のみという独特のプロファイル。業態理解のある新電力との契約で1〜2円/kWhの差が生まれます。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化型）",
    role: "再エネ特化型",
    detail:
      "外資系金融・コンサル・ファッションブランド入居ビルのRE100対応需要で採用拡大。銀座のブランド店舗・日本橋の外資金融オフィスを中心に、トラッキング付き再エネ電源の調達が広がっています。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面では区内大型ビル・百貨店向け新電力でも受付停止が発生。2024年以降は徐々に再開していますが、銀座・日本橋クラスの大型案件は新電力側の供給可能枠が逼迫気味で、入札時期を早めに動かすことが重要です。",
  },
];

const priceBenchmark = [
  {
    label: "特別高圧電力 — 日本橋・八重洲の大型ビル単価",
    detail:
      "区内特別高圧（2,000kW超）の大型オフィス・商業複合ビルは標準メニューで電力量料金17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジです。新電力経由の競争入札では標準比1〜2円/kWh下げが目安。",
  },
  {
    label: "高圧電力 — 銀座・百貨店・中規模ビル単価",
    detail:
      "銀座の百貨店・大型商業ビル・中規模オフィス（高圧500kW〜1,800kW級）は『業務用高圧電力』が中心で、電力量料金18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケースが一般的で、業態別新電力との交渉余地が大きいエリアです。",
  },
  {
    label: "低圧電力 — 銀座路面店・新富町飲食の単価",
    detail:
      "銀座路面店・新富町飲食・築地周辺の小規模事業所の『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は17〜20円/kWh。低圧自由化の選択肢は限定的ですが、複数店舗を持つ事業者は高圧一括契約・新電力切替で改善余地があります。",
  },
  {
    label: "百貨店・大型商業施設の実質単価交渉余地",
    detail:
      "百貨店・大型商業施設は土日祝中心の特殊負荷パターンと年間2,000万kWh超の規模感から、特別高圧契約で1〜2円/kWhの単価交渉が一般化。テナント転貸を含む電力管理一体運用で全体最適化を図るのが定石です。",
  },
];

const industryImpact = [
  {
    title: "業種1: 銀座・大型百貨店（特別高圧 2,800kW、年間 2,100万kWh）",
    before:
      "Before: 銀座の老舗百貨店A（地下4階・地上12階、売場面積35,000m²）。空調・照明・エレベーター・エスカレーター・テナント供給が中心。市場連動プラン併用で2023年夏は月最大9,800万円の請求。年間電気代 約5.5億円規模。",
    after:
      "After: 全国系新電力との競争入札で固定5年契約を獲得／売場LED化（SII補助1/2活用、投資3,200万円）／高効率冷凍機への更新／BEMS導入による需要見える化／屋上太陽光300kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 約5.5億円 → 約4.5億円（▲約18%、▲1.0億円・目安）／契約電力 2,800→2,500kW／投資回収 補助金後 2.0〜2.5年（目安）。",
  },
  {
    title: "業種2: 日本橋・金融機関本店（特別高圧 2,200kW、年間 1,700万kWh）",
    before:
      "Before: 日本橋の金融機関B本店ビル（地下3階・地上20階）。執務フロア・データ処理センター・金庫室・店舗営業部の複合用途。市場連動プラン継続で2023年夏は月最大8,200万円の請求。年間電気代 約4.4億円規模。",
    after:
      "After: 入札特化型新電力との競争入札で固定3年契約／全館LED化（投資2,500万円、SII補助1/2活用）／高効率空調機への更新／BEMS＋AI需要予測の導入／RE100対応の非化石証書付き電源組合せ。",
    result:
      "Result: 年間電気代 約4.4億円 → 約3.6億円（▲約18%、▲8,000万円・目安）／契約電力 2,200→2,000kW／投資回収 補助金後 2.0年前後（目安）。",
  },
  {
    title: "業種3: 晴海・湾岸大型商業＋オフィス複合（高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: 晴海エリアの商業＋オフィス複合ビルC（地下2階・地上15階）。商業床・オフィス床・共用部の混在用途で、土日と平日の負荷パターンが大きく異なる。市場連動プランで2023年1月の高騰時は月500万円超の電気代経験。年間電気代 約2.8億円規模。",
    after:
      "After: 全国系新電力に固定3年で切替／共用部LED化＋センサー連動／高効率空調機への更新（SII補助1/2活用、投資1,800万円）／屋上太陽光150kW＋蓄電池導入／需要家主導型オフサイトPPA契約。",
    result:
      "Result: 年間電気代 約2.8億円 → 約2.3億円（▲約18%、▲5,000万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "銀座エリアのファサード照明・ベース負荷",
    detail:
      "銀座のブランド店舗群はファサード照明・ショーウィンドウ照明が深夜帯も点灯するケースが多く、深夜帯ベース負荷が他の商業地区より高い構造。LED化＋タイマー制御で深夜帯電力▲20〜35%が目安。",
  },
  {
    label: "日本橋再開発に伴う特別高圧需要の継続増",
    detail:
      "日本橋常盤橋プロジェクト等の再開発で2027年以降も大型ビル供給が継続。エリア全体の電力需要が増加する一方、最新設備は高効率化が進み、棟当たり原単位は改善傾向です。",
  },
  {
    label: "湾岸エリアの新興需要と系統制約",
    detail:
      "晴海・勝どきの再開発で湾岸エリアの電力需要が急増しており、配電網増強と系統接続調整が進行中。新築ビル・施設の電力契約検討時には系統接続申込のリードタイムを早めに確保する必要があります。",
  },
  {
    label: "東京都キャップ&トレード制度の対象集中",
    detail:
      "中央区内には延床5万m²以上のオフィス・商業ビルが多数立地し、東京都キャップ&トレード制度の対象事業所が集中。第3計画期間以降の削減義務率引き上げで、未達時の排出量取引コストが顕在化します。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量2,000万kWh級の特別高圧需要家では年8,000万円規模の負担。減免制度は限定的ですが、申請可能性のある事業者は早期検討を推奨します。",
  },
];

const subsidies = [
  {
    name: "中央区 中小企業省エネ設備等導入費助成",
    target: "区内中小事業所のLED・空調・冷凍冷蔵・断熱・BEMS等",
    rate: "対象経費の概ね1/2、上限は事業区分による（2025年度時点）",
    note: "中央区環境部公式の助成。銀座・日本橋・新富町の中小事業所・百貨店内テナント等で活用しやすい区独自制度。SII補助との併用可否は要事前確認。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入（LED・空調・断熱等）",
    rate: "対象経費の1/3〜1/2、上限は事業規模による",
    note: "東京都環境局による都独自補助。区補助と組合せ可能なケースあり。報告書制度の対象事業所には別途インセンティブが設計されています。",
  },
  {
    name: "東京都 ZEB・既存ビル省エネ改修支援",
    target: "ZEB Ready以上の新築・既存ビルの省エネ大規模改修",
    rate: "対象経費の1/3〜2/3、上限事業規模に応じる",
    note: "日本橋・八重洲の大型既存ビル・新築ビルの脱炭素化案件で活用実績多数。キャップ&トレード対応とセットで計画立案するのが定石。",
  },
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・冷凍冷蔵・LED・コンプレッサー・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "都内オフィスビル・商業施設・データセンターで採択実績多数。区補助と同一設備での重複は不可だが、対象設備を分けることで併用可能なケースあり。",
  },
  {
    name: "需要家主導型 PPA・蓄電池併設関連補助",
    target: "自家消費型太陽光・オフサイトPPA・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "中央区は屋根面積制約が大きいため、オフサイト型PPAの活用が現実的。日本橋・晴海の大型オフィスのRE100調達手段として浸透しています。",
  },
];

const industryProfile = [
  {
    label: "銀座 — 百貨店・宝飾店・ブランド路面店",
    detail:
      "三越銀座店・松屋銀座・銀座シックス・GINZA SIX・GINZA PLACEなどの大型商業と、ブランド路面店・宝飾店が密集。年間使用量1,000万〜3,000万kWhの特別高圧契約が複数存在し、ファサード照明・店内高演色LEDが電力消費の大部分を占めます。",
  },
  {
    label: "日本橋・八重洲 — 金融機関本店・大型オフィス",
    detail:
      "三井不動産の日本橋再開発（COREDO・三井タワー）、金融機関本店（メガバンク・証券・保険）、大型オフィスが集積。年間使用量2,000万〜4,000万kWh規模の特別高圧契約が中心です。",
  },
  {
    label: "月島・晴海・勝どき・豊海 — 湾岸タワー＋商業複合",
    detail:
      "東京2020選手村跡の晴海フラッグ、勝どきザ・タワー、晴海アイランドトリトンスクエアなど湾岸タワー＋商業複合エリア。共用部・商業床の高圧契約と各戸低圧契約が混在し、再開発進行に伴い電力需要が拡大しています。",
  },
  {
    label: "築地・新富町 — 食品流通・卸売・飲食",
    detail:
      "築地市場跡地周辺と新富町・湊・入船には食品流通・卸売・飲食事業者が集積。冷凍冷蔵設備の電力負荷が大きく、契約電力削減と高効率冷凍冷蔵更新の効果が大きいエリアです。",
  },
  {
    label: "京橋・東京駅周辺 — オフィスビル群",
    detail:
      "京橋エドグラン・東京スクエアガーデン等の大型オフィスビル、東京駅八重洲口の再開発エリア。延床5〜10万m²級が中心で、特別高圧・高圧契約のオフィス用途が主軸です。",
  },
];

const switchingReality = [
  {
    label: "中央区の新電力浸透度",
    detail:
      "日本橋・八重洲・銀座の特別高圧では競争入札が標準化し、新電力の落札比率は全国でも上位水準。月島・晴海・勝どきの新興エリアでも新築ビル供給時に新電力との契約締結が一般化しています。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内百貨店・大型商業施設の多くが市場連動から固定回帰。土日祝の集中負荷を持つ業態では特に固定単価ニーズが強く、3〜5年固定が主流化しています。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・災害時復旧体制・大型ビル既存契約の継続性。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。特別高圧需要家では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（中央区固有）",
    detail:
      "①特別高圧の供給実績、②土日祝中心の商業負荷パターン理解、③RE100対応再エネメニュー、④災害時BCP対応、⑤百貨店・大型商業・金融などの業態理解、の5点が重要です。",
  },
  {
    label: "需要家主導型オフサイトPPAの主流化",
    detail:
      "中央区は屋根面積制約が大きく、福島・茨城・千葉等の県外大規模太陽光・風力との直接契約（オフサイトPPA）が主流化。三井不動産等のデベロッパーが共同調達するスキームもあり、RE100対応が容易になっています。",
  },
];

const energySaving = [
  {
    label: "百貨店・商業施設の高効率化",
    detail:
      "全館LED化、高効率冷凍冷蔵設備への更新、BEMS導入、空調機更新で電力▲20〜30%が目安。SII補助＋都補助＋区補助の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "金融機関オフィスの高効率化",
    detail:
      "データ処理センター・執務フロアの空調最適化、LED化、BEMS＋AI需要予測で電力▲15〜25%。RE100対応の再エネ調達と組合せることでESG評価向上にも寄与します。",
  },
  {
    label: "湾岸タワー共用部の省エネ",
    detail:
      "共用部LED化＋センサー連動、エレベーター回生電力活用、共用空調の高効率化で電力▲20〜30%。中央区補助＋都補助の組合せで投資回収 2〜3年が目安です。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言企業・外資テナントを抱える大型ビルでの導入が拡大しています。",
  },
  {
    label: "蓄電池・ピークカット運用",
    detail:
      "ビル地下・屋上に蓄電池設置で契約電力（kW）削減＋ピーク料金抑制。夜間充電・昼間放電のサイクルで電気代削減＋DR報酬獲得が可能です。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の使用量と単価を把握しているか",
  "土日祝の負荷パターン（商業施設・百貨店特有）を契約条件に反映しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "東京都キャップ&トレード制度の対象事業所か、削減義務率と進捗を確認したか",
  "RE100対応テナントの再エネ調達要件（トラッキング属性等）を把握したか",
  "中央区中小企業省エネ助成の最新公募状況を確認したか",
  "SII補助・都補助・区補助の併用可否を設備別に整理したか",
  "需要家主導型オフサイトPPAのコスト試算を実施したか",
  "災害時BCP（停電復旧優先度・自家発電源）の体制を見直したか",
];

const faqItems = [
  { question: "中央区の銀座エリアで電気代見直しはどう進めるべきですか？", answer: "銀座は深夜帯までファサード照明・ベース負荷が高い特殊な商業地区です。①LED化＋タイマー制御による深夜帯電力削減、②高圧契約の新電力切替、③RE100対応の再エネ調達（ブランド企業要件）の3本柱で進めるのが定石。中央区中小企業省エネ助成の活用も推奨です。" },
  { question: "日本橋の特別高圧オフィスビルで競争入札はどう動きますか？", answer: "三井タワー・COREDO級の特別高圧入札は、東電EP・全国系新電力（ENEOS・出光・Looop等）が主要参加者で、固定3〜5年が中心です。最低価格落札方式ではなく、供給安定性・RE100対応・BCP体制も評価する総合評価方式が増えています。" },
  { question: "晴海・勝どきの新築タワーでの電力契約はどう決めるべきですか？", answer: "新築タワーは共用部・商業床の高圧/特別高圧契約と各戸低圧契約が混在します。デベロッパー段階で電力会社選定が行われるケースが多いですが、共用部については竣工後の契約見直しも可能。系統接続申込のリードタイムが長いため、新築計画段階で早めに動くことが重要です。" },
  { question: "百貨店の電気代削減で最も効果的な施策は何ですか？", answer: "①売場LED化（投資回収 1.5〜2年）、②高効率冷凍冷蔵設備への更新、③BEMS導入による需要見える化、④契約電力（kW）削減、⑤特別高圧の新電力切替、の5本柱が中心です。SII補助＋都補助＋中央区助成の組合せで投資回収を1〜2年短縮できます。" },
  { question: "中央区の中小事業者向け補助金は何がありますか？", answer: "中央区環境部の『中央区中小企業省エネ設備等導入費助成』（LED・空調・BEMS等が対象、概ね1/2助成）が代表的です。東京都の地球温暖化対策報告書制度関連補助、国のSII省エネ補助との併用可否は事業者別・設備別に異なるため、応募前に各窓口で確認が必要です（2025年度時点）。" },
  { question: "築地周辺の食品流通事業者で効果的な施策は？", answer: "①高効率冷凍冷蔵設備への更新（SII補助1/2、投資回収 2〜3年）、②契約電力（kW）削減によるピーク料金抑制、③高圧契約の新電力切替、④BEMSによる温度管理最適化、の4本柱です。冷凍冷蔵負荷は電気代の50〜70%を占めるため、設備更新インパクトが大きい業態です。" },
  { question: "中央区で停電時の対応は東電と新電力で差がありますか？", answer: "物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、契約形態によらず復旧時間は同じです。ただし停電通知・補償窓口は契約小売事業者になるため、契約時に窓口体制・連絡フローを確認することが重要です。" },
  { question: "東京都キャップ&トレード制度への対応はどうすべきですか？", answer: "削減義務率の進捗を毎年度確認し、未達リスクがある場合は早期に省エネ投資・再エネ調達（オフサイトPPA・証書購入）でカバーする必要があります。排出量取引市場での購入も選択肢ですが、価格変動リスクがあるため、自社設備対応を優先するのが定石です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "中央区 環境政策（区公式）", url: "https://www.city.chuo.lg.jp/" },
  { name: "東京都環境局 キャップ&トレード制度", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function ChuoKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/chuo-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
          { name: "中央区の法人電気料金", url: "https://simulator.eic-jp.org/chuo-ku-business-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">中央区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            中央区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            中央区は銀座・日本橋・八重洲の伝統的商業金融、月島・晴海・勝どきの湾岸住商開発、築地・新富町の食品流通＋再開発進行と、業態が大きく異なる三層構造を持ちます。本ページでは区内固有の電力事情、業種別影響、契約見直し、中央区・東京都・国の補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>銀座・日本橋・晴海・築地の電力プロファイルと契約特性</li>
              <li>百貨店／金融オフィス／湾岸商業複合のBefore/After削減事例</li>
              <li>東京都キャップ&トレード制度と中央区中小企業助成の活用</li>
              <li>土日祝中心の商業負荷パターンに合わせた契約戦略</li>
              <li>中央区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中央区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区は商業・金融・湾岸住商の三層構造で、エリア別に電力負荷パターンが大きく異なります。銀座のファサード照明、日本橋の特別高圧オフィス、晴海の湾岸再開発、築地の食品流通という多様性が、契約戦略を考えるうえで重要な前提です。
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
              東京都全体の文脈は{" "}
              <Link href="/tokyo-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京都の法人電気料金ガイド
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
              中央区の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区では、東電EPに加えて全国系新電力・東京ガス系・東急系・業態特化型・再エネ特化型と多様なプレイヤーが供給。日本橋の特別高圧、銀座の百貨店、晴海の湾岸新築タワーで競争が活発化しています。
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
              中央区の電気料金水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧・低圧それぞれの単価レンジを、日本橋・銀座・晴海・築地の代表的な契約タイプ別に整理します。土日祝中心の負荷パターン理解が交渉の鍵です。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 銀座百貨店・日本橋金融・晴海商業複合（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区の代表的な3業態で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリングから再構成した代表シナリオで、数値は目安レンジです。
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
              業態別の比較は{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中央区固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区の電気代上昇は、商業中心地・湾岸再開発・食品流通という多様な業態固有の要因が複合的に作用します。エリア別の事業者プロファイルを踏まえた対策が重要です。
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
              補助金・優遇制度 — 中央区・東京都・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区独自の中小企業省エネ助成、東京都の報告書制度関連補助・ZEB支援、国のSII省エネ補助の3層を組合せることで、投資回収を1〜2年短縮可能です。設備別の重複可否は事前確認が必要です。
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
              中央区の主要産業・施設と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区の事業者構成は、銀座の百貨店・ブランド店舗、日本橋・八重洲の金融オフィス、月島・晴海・勝どきの湾岸タワー、築地・新富町の食品流通、京橋・東京駅周辺のオフィスの5層構造です。
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
              電力会社切替の実情 — 東電EPと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              日本橋・銀座の特別高圧では競争入札が標準化、晴海・勝どきの新築タワーでは初期契約段階での新電力採用が一般化しています。市場連動から固定への回帰、RE100対応、オフサイトPPA主流化が共通トレンドです。
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
              中央区事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区の省エネは、百貨店・商業の高効率化、金融オフィスの最適化、湾岸タワー共用部省エネ、オフサイトPPA、蓄電池の5軸が主力です。業態別の打ち手を組合せることで投資回収期間を短縮できます。
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
              中央区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。商業施設の土日祝負荷パターン理解が交渉の精度を左右します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              シミュレーターで中央区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中央区は銀座の商業、日本橋の金融、晴海の湾岸再開発、築地の食品流通など、多様な業態固有のリスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-05-27"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "全国市区町村の電気料金事情ハブ。" },
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金ガイド", description: "都全体の文脈と多摩・23区の比較。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東電管内の料金体系・改定動向。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金", description: "隣接区・丸の内/大手町の事情。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "隣接区・六本木/虎ノ門の事情。" },
              { href: "/koto-ku-business-electricity-cost", title: "江東区の法人電気料金", description: "隣接区・湾岸/DC集積の事情。" },
              { href: "/taito-ku-business-electricity-cost", title: "台東区の法人電気料金", description: "隣接区・浅草/上野の事情。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "日本橋級大型ビルの最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "他業態との比較ベンチマーク。" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC事業者の主力打ち手。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "商業施設に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "百貨店・大型商業の選択論点。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="中央区の自社条件で電気代リスクを試算する"
            description="銀座・日本橋・晴海・築地など中央区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="中央区の電力契約見直し、専門家に相談しませんか？"
            description="銀座の百貨店、日本橋の金融オフィス、晴海の湾岸タワー、築地の食品流通など中央区の電気代見直しは業態別に論点が異なります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
