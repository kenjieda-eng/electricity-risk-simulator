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
  "千代田区の法人電気料金完全ガイド｜大手町・丸の内・霞が関オフィス／官公庁／秋葉原IT電気街";
const pageDescription =
  "東京都千代田区の法人電気代を区固有の論点で解説。大手町・丸の内の特別高圧オフィス、霞が関中央官庁の電力入札、神田・秋葉原の商業・IT、大手町地域冷暖房（DHC）、丸の内再開発を踏まえた契約見直しと省エネ補助の実務をまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "千代田区 法人電気料金",
    "大手町 丸の内 電気代",
    "霞が関 官公庁 電力入札",
    "秋葉原 神田 商業電気代",
    "千代田区 省エネ補助",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/chiyoda-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/chiyoda-ku-business-electricity-cost",
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
    label: "千代田区の事業所構成 — 大企業本社・官公庁集積",
    detail:
      "千代田区は約1平方キロ当たり大企業本社が日本一密集するエリア。大手町・丸の内・有楽町の特別高圧オフィスビルが多数立地し、霞が関・永田町には中央官庁・国会・最高裁が集中。区内日中人口は夜間人口の約20倍に達し、平日昼間の電力負荷が極端に高い構造です（出典: 千代田区統計）。",
  },
  {
    label: "丸の内・大手町エリアの再開発と電力需要",
    detail:
      "三菱地所が中心となった丸の内再開発（大手町タワー・丸の内仲通り・常盤橋プロジェクト等）で延床面積100万m²超のオフィス供給が継続中。1棟当たり年間使用量が2,000万〜5,000万kWh級の特別高圧契約が複数存在し、東電エナジーパートナーと新電力の競争入札が常態化しています。",
  },
  {
    label: "大手町地域冷暖房（DHC）の電力依存",
    detail:
      "大手町・丸の内には大手町地域冷暖房・丸の内熱供給などのDHC事業者が存在。区域内オフィスの冷温水を集中供給する仕組みで、ターボ冷凍機や蓄熱槽の電力負荷が大きく、年間使用量5,000万kWh超の超大型特別高圧需要家として区内電力消費の重要な一翼を担います。",
  },
  {
    label: "霞が関・永田町の官公庁電力入札",
    detail:
      "中央官庁・国会・最高裁の電力調達は会計法に基づく一般競争入札が原則。延床1万m²超の庁舎が並ぶエリアで、年間数千万kWh規模の入札が定期実施されます。新電力の落札実績も多く、官公庁の電力契約動向は新電力業界の指標としても注目されます。",
  },
  {
    label: "神田・秋葉原 — 商業・IT・電気街の負荷プロファイル",
    detail:
      "神田駿河台は大学・専門学校集積（明治・日大・専修等）、秋葉原はIT・家電・サブカル商業集積で、中小ビル・店舗・小規模オフィスの高圧/低圧契約が多数。エリア全体としては営業時間帯のピーク負荷が高く、深夜帯の負荷率が下がる「都心商業型」プロファイルです。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "区内シェア最大。大手町・丸の内・霞が関の特別高圧需要家を多数抱える。『業務用季節別時間帯別電力』『特別高圧電力』が主軸メニュー。2023年6月の規制料金改定で法人向けも実質値上げ。燃料費調整額の上限撤廃継続で、調整額負担が大きい点に注意が必要です。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光等）",
    role: "全国展開新電力",
    detail:
      "千代田区内の特別高圧・高圧オフィスビルで競争入札の主要対抗馬。固定単価メニューを中心に丸の内・大手町の大型ビルでの実績多数。RE100対応の再エネメニューも各社展開し、外資系入居テナント向けの調達ニーズに対応しています。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系・東急電鉄系の新電力。ガス併売（エネファーム・GHP導入ビル）や東急沿線・東京駅周辺ビルでの実績あり。コージェネ既設ビルでは電気＋ガスの一体最適化提案が強みです。",
  },
  {
    name: "官公庁入札参入新電力",
    role: "入札特化型",
    detail:
      "霞が関・永田町の官公庁入札では、エネット・サミットエナジー・F-Power（過去）等の入札特化型新電力が落札実績を持ちます。会計法ベースの一般競争入札で、最低価格落札方式が原則のため価格競争が激しいエリアです。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化型）",
    role: "再エネ特化型",
    detail:
      "外資系金融・コンサル・ITテナント入居ビルのRE100対応需要で採用拡大。丸の内・大手町のグリーン化を進めるオーナー（三菱地所等）が共通電源としてトラッキング付き再エネを採用するケースも増えています。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面では区内特別高圧需要家でも新規受付停止・契約解除が発生。2024年以降は徐々に再開していますが、丸の内・大手町クラスの大型案件では新電力側の供給可能kWh枠が常に逼迫気味で、入札時期を早めに動かすことが重要です。",
  },
];

const priceBenchmark = [
  {
    label: "千代田区の特別高圧電力 — 単価水準",
    detail:
      "区内特別高圧（2,000kW超）オフィスビルの電力量料金は標準メニューで概ね17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。新電力との競争入札では標準比1〜2円/kWh下げが目安です。",
  },
  {
    label: "千代田区の高圧電力 — 中小ビル・店舗の単価",
    detail:
      "神田・秋葉原・麹町等の中小ビル（高圧500kW〜1,500kW級）は『業務用高圧電力』が中心で、電力量料金は18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケースが多く、見直し効果が出やすいレンジです。",
  },
  {
    label: "低圧電力 — 神田・秋葉原の店舗・小規模事業所",
    detail:
      "神田・秋葉原の小規模店舗・飲食・小オフィスの『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は17〜20円/kWh。低圧自由化の選択肢は限定的ですが、複数店舗を持つ事業者は高圧一括契約・新電力切替で改善余地があります。",
  },
  {
    label: "DHC・コージェネ併用ビルの実質単価",
    detail:
      "大手町・丸の内のDHC受給ビルでは、自家設備分の電力契約とDHC冷温水購入費を合算で評価する必要があります。コージェネ併用ビルでは買電量が抑えられ、契約電力（kW）削減によるピーク料金抑制が大きな効果を生みます。",
  },
];

const industryImpact = [
  {
    title: "業種1: 丸の内・特別高圧大型オフィスビル（特別高圧 3,000kW、年間 2,400万kWh）",
    before:
      "Before: 丸の内エリアの賃貸オフィスビルA（地上30階・延床80,000m²）。テナント約60社、空調はセントラル方式＋一部DHC受給。市場連動プラン併用で2023年夏は月最大9,500万円の請求。年間電気代 約6.0億円。",
    after:
      "After: 全国系新電力との競争入札で固定5年契約を獲得／全館LED化（SII補助1/2活用、投資3,500万円）／高効率ターボ冷凍機への更新／BEMS導入による需要見える化／一部RE100対応テナント向けにトラッキング付再エネ電源を組合せ。",
    result:
      "Result: 年間電気代 約6.0億円 → 約4.8億円（▲約20%、▲1.2億円・目安）／契約電力 3,000→2,700kW／投資回収 補助金後 2.0年前後（目安）。",
  },
  {
    title: "業種2: 霞が関・中央官庁ビル（特別高圧 1,800kW、年間 1,300万kWh）",
    before:
      "Before: 霞が関の中央官庁B庁舎。会計法の一般競争入札で東電EP標準メニュー継続。市場連動なしだが燃料費調整額の上昇で2023年度は前年比+18%の電気代増加。年間電気代 約3.5億円規模。",
    after:
      "After: 次年度入札で固定2年・燃調上限ありの新電力（入札特化型）が落札／庁舎LED化・空調更新（環境省グリーン政府実行計画関連予算で実施）／ZEB Ready化に向けたBEMS導入。",
    result:
      "Result: 年間電気代 約3.5億円 → 約3.0億円（▲約14%、▲5,000万円・目安）／契約電力 1,800→1,650kW／公的予算上の単年度費用変動リスク低減。",
  },
  {
    title: "業種3: 秋葉原・IT企業本社＋データセンター隣接（高圧 1,200kW、年間 900万kWh）",
    before:
      "Before: 秋葉原のIT企業C社本社ビル（自社運用サーバルーム併設、約120ラック）。24時間稼働サーバー＋日中オフィス負荷で負荷率約65%。市場連動プランで2023年1月の高騰局面では月900万円超の電気代経験。年間電気代 約2.3億円。",
    after:
      "After: DC専門色の強い新電力に固定3年で切替／サーバー集約とラック単位電力密度向上／既設空調機を高効率インバータ式に更新（SII補助1/2、投資1,200万円）／屋上小規模太陽光30kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 約2.3億円 → 約1.9億円（▲約17%、▲4,000万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "丸の内・大手町の超高密度オフィス負荷",
    detail:
      "1棟当たり延床5万〜15万m²級のオフィスが連続立地し、平日昼間の電力需要密度が日本トップクラス。空調・照明・OA機器・エレベーターの負荷が同時集中し、夏季・冬季のピーク料金（基本料金）が経営費に与える影響が大きい構造です。",
  },
  {
    label: "ヒートアイランドと冷房需要",
    detail:
      "千代田区は皇居の緑地以外はアスファルト・ビル群が広く、ヒートアイランドが顕著。年間冷房度日が郊外より高く、オフィスビルでは年間電気代の30〜45%を冷房が占めるとされます。中間期の冷房長期化も含めた省エネ対策が重要です。",
  },
  {
    label: "東京都キャップ&トレード制度の対象集中",
    detail:
      "東京都『温室効果ガス排出総量削減義務と排出量取引制度（キャップ&トレード）』の対象事業所は延床5万m²以上のオフィスビル等で、千代田区内には対象事業所が集中。第3計画期間（2020〜2024年度）以降の削減義務率が引き上げられ、未達時は排出量取引で補填するコストが発生します。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量5,000万kWh級の特別高圧需要家では年約2億円規模の負担。減免制度の対象は限定的ですが、エネルギー多消費業種に該当する場合は申請を検討する価値があります。",
  },
  {
    label: "官公庁ビルの会計年度制約",
    detail:
      "霞が関・永田町の官公庁は単年度予算主義のため、契約期間は1〜3年が中心。中長期固定契約による単価安定化が難しく、燃調変動・市場高騰の影響を直接受けやすい構造的制約があります。",
  },
];

const subsidies = [
  {
    name: "千代田区 中小規模事業所向け省エネ設備導入補助",
    target: "区内中小事業所のLED・空調・冷凍冷蔵・断熱・BEMS等",
    rate: "対象経費の概ね1/3〜1/2（上限は事業区分による）※2025年度時点",
    note: "千代田区環境部公式の補助。神田・秋葉原・麹町の中小ビル・店舗で活用しやすい区独自制度。SII補助との併用可否は要事前確認。",
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
    note: "丸の内・大手町の大型既存ビル・新築ビルの脱炭素化案件で活用実績多数。キャップ&トレード対応とセットで計画立案するのが定石。",
  },
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・冷凍冷蔵・LED・コンプレッサー・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "都内オフィスビル・データセンター・中小工場で採択実績多数。区補助と同一設備での重複は不可だが、対象設備を分けることで併用可能なケースもあり。",
  },
  {
    name: "需要家主導型 PPA・蓄電池併設関連補助",
    target: "自家消費型太陽光・オフサイトPPA・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "千代田区は屋根面積が限られるため、オフサイト型PPAの活用が現実的。丸の内・大手町の大型オフィス・大規模テナント企業のRE100調達手段として浸透しています。",
  },
];

const industryProfile = [
  {
    label: "大手町・丸の内オフィスビル群",
    detail:
      "三菱地所・三井不動産・東京建物等が保有する超大型オフィスビル群。1棟当たり延床5〜15万m²、年間使用量2,000万〜5,000万kWh規模の特別高圧契約が多数。テナント供給型・ビル一括契約の両方が併存します。",
  },
  {
    label: "霞が関・永田町 官公庁エリア",
    detail:
      "中央省庁・国会・最高裁・各種独立行政法人の庁舎群。会計法に基づく一般競争入札による電力調達が原則で、契約期間1〜3年が中心。新電力の落札実績が多く、政府全体としての脱炭素調達方針の影響を受けます。",
  },
  {
    label: "神田・秋葉原 商業・IT集積",
    detail:
      "神田駿河台の大学・専門学校、神保町の出版・書店、秋葉原の家電・IT・サブカル商業・中小オフィス・サーバルーム併設ビルが集積。高圧・低圧の中小契約が中心で、新電力切替の余地が大きいエリアです。",
  },
  {
    label: "麹町・番町 中規模オフィス",
    detail:
      "麹町・一番町・二番町・五番町には中規模オフィスビル・教育出版社・テレビ局関連施設が立地。延床1〜3万m²級が中心で、高圧契約のオフィス用途が主軸です。",
  },
  {
    label: "DHC（地域冷暖房）事業者",
    detail:
      "大手町地域冷暖房・丸の内熱供給等のDHC事業者は特別高圧の超大型需要家。冷温水製造（ターボ冷凍機・蓄熱槽）の電力負荷が中心で、契約電力数千〜1万kW規模、年間使用量5,000万kWh超の規模感です。",
  },
];

const switchingReality = [
  {
    label: "千代田区の新電力浸透度",
    detail:
      "丸の内・大手町クラスの特別高圧では競争入札が標準化しており、新電力の落札比率は全国でも最高水準。神田・秋葉原・麹町の中小ビルでも新電力切替が進み、区全体での新電力比率は東京都平均（30〜35%）を上回ると見られます。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内オフィスビル・データセンター隣接事業者の多くが市場連動から固定回帰。テナント賃料への転嫁難易度が高い賃貸オフィスでは特に固定単価ニーズが強く、3〜5年固定が主流化しています。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・災害時復旧体制・大手町CEMC等のレジリエンス連携。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。特別高圧需要家では数千万円〜億円単位の単価差になり、見直しインパクトが大きいレンジです。",
  },
  {
    label: "新電力選定のポイント（千代田区固有）",
    detail:
      "①特別高圧の供給実績（丸の内・大手町クラス）、②夏季ピーク需要対応力、③RE100対応の再エネメニュー（外資テナント要件）、④官公庁入札参入実績、⑤災害時BCP対応の5点が重要です。",
  },
  {
    label: "需要家主導型オフサイトPPAの主流化",
    detail:
      "千代田区は屋根面積制約が大きく、福島・茨城・栃木・千葉の大規模太陽光・風力との直接契約（オフサイトPPA）が主流化。三菱地所・三井不動産等のデベロッパーが共同調達するスキームも登場しており、テナントへの再エネ供給が標準化しつつあります。",
  },
];

const energySaving = [
  {
    label: "高効率空調・ターボ冷凍機への更新",
    detail:
      "丸の内・大手町クラスの大型ビルではターボ冷凍機の更新で冷房電力▲15〜25%が目安。SII補助・東京都補助の併用で投資回収 2〜3年。DHC受給ビルでも自設備分の更新効果は大きい。",
  },
  {
    label: "全館LED化＋人感センサー連動",
    detail:
      "全館LED化＋人感センサー・タイマー制御で照明電力▲40〜60%が目安。共用部・トイレ・廊下から優先実施するのが定石。千代田区補助＋SII補助の組合せで投資回収 1.5〜2年程度。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言企業・外資テナントを抱えるオフィスビルでの導入が拡大。CO2削減と単価安定化を両立できます。",
  },
  {
    label: "BEMS導入と需要見える化",
    detail:
      "BEMS・AI分析でピーク需要▲15〜25%。テナント別請求の正確化、節電インセンティブ設計、デマンドレスポンス参加など派生メリットも大きい。中規模ビル（高圧）でも導入余地が広がっています。",
  },
  {
    label: "蓄電池・ピークカット運用",
    detail:
      "ビル地下・屋上に蓄電池設置で契約電力（kW）削減＋ピーク料金抑制。夜間充電・昼間放電のサイクルで電気代削減＋DR報酬獲得が可能。需要家主導型蓄電池補助との組合せで投資ハードルを下げられます。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の使用量と単価を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "DHC受給ビルの場合、自設備分とDHC購入費を合算評価したか",
  "東京都キャップ&トレード制度の対象事業所か、削減義務率と進捗を確認したか",
  "RE100対応テナントの再エネ調達要件（トラッキング属性等）を把握したか",
  "千代田区中小規模事業所向け省エネ補助の最新公募状況を確認したか",
  "SII補助・都補助・区補助の併用可否を設備別に整理したか",
  "需要家主導型オフサイトPPAのコスト試算を実施したか",
  "災害時BCP（停電復旧優先度・自家発電源）の体制を見直したか",
];

const faqItems = [
  { question: "千代田区の法人電気代は他区より高いですか？", answer: "標準メニュー単価は都内一律ですが、千代田区は特別高圧の大型ビルが多く、競争入札による単価交渉余地が大きいエリアです。新電力経由なら標準比1〜2円/kWh安い水準が一般的で、年間電気代億円規模のビルでは数千万円単位のインパクトになります。" },
  { question: "大手町地域冷暖房（DHC）受給ビルで電気代見直しは可能ですか？", answer: "可能です。DHC契約は冷温水購入費としてビル全体コストの一部を構成しますが、ビル自体の照明・OA機器・エレベーター等の電力契約は別途存在します。両者を合算評価し、自設備分の契約見直しと省エネ投資（LED・BEMS等）の組合せで全体最適を図るのが定石です。" },
  { question: "霞が関の中央官庁の電力入札にはどんな新電力が参加しますか？", answer: "エネット・サミットエナジー等の入札特化型新電力が中心です。会計法の一般競争入札のため最低価格落札方式が原則で、契約期間は1〜3年が中心。政府全体の脱炭素調達方針により、再エネ比率や非化石証書付き電源の評価加点が拡大しつつあります。" },
  { question: "丸の内・大手町でRE100対応の再エネ調達はどう進めていますか？", answer: "三菱地所等の大手デベロッパーが、福島・茨城等の大規模太陽光・風力との需要家主導型オフサイトPPAを共同調達し、テナントに再エネ電源を供給するスキームが広がっています。トラッキング付き非化石証書の併用で属性証明も可能で、外資金融・コンサルのRE100要件を満たせます。" },
  { question: "千代田区の中小事業者向け補助金は何がありますか？", answer: "千代田区環境部の『中小規模事業所向け省エネ設備導入補助』（LED・空調・BEMS等が対象、概ね1/3〜1/2補助）が代表的です。東京都の地球温暖化対策報告書制度関連補助、国のSII省エネ補助との併用可否は事業者別・設備別に異なるため、応募前に各窓口で確認が必要です（2025年度時点）。" },
  { question: "秋葉原のIT・サーバルーム併設ビルで効果的な施策は？", answer: "①特別高圧/高圧の固定単価切替、②サーバー集約と高密度ラック化、③高効率空調機への更新、④外気冷房（フリークーリング）の併用、⑤BEMS導入による需要見える化、の5本柱です。SII補助1/2＋区補助の組合せで投資回収 2〜3年が目安です。" },
  { question: "千代田区で停電時の対応は東電と新電力で差がありますか？", answer: "物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、契約形態によらず復旧時間は同じです。ただし停電通知・補償窓口は契約小売事業者になるため、契約時に窓口体制・連絡フローを確認することが重要です。" },
  { question: "東京都キャップ&トレード制度の対象事業所はどう動くべきですか？", answer: "削減義務率の進捗を毎年度確認し、未達リスクがある場合は早期に省エネ投資・再エネ調達（オフサイトPPA・証書購入）でカバーする必要があります。排出量取引市場での購入も選択肢ですが、価格変動リスクがあるため、自社設備対応を優先するのが定石です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "千代田区 環境政策（区公式）", url: "https://www.city.chiyoda.lg.jp/koho/kurashi/kankyo/" },
  { name: "東京都環境局 キャップ&トレード制度", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function ChiyodaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/chiyoda-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
          { name: "千代田区の法人電気料金", url: "https://simulator.eic-jp.org/chiyoda-ku-business-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">千代田区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            千代田区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            千代田区は大手町・丸の内の特別高圧オフィス、霞が関の中央官庁、神田・秋葉原のIT商業集積と、日本でも稀有な高密度業務地区です。本ページでは区内固有の電力事情、業種別影響、契約見直し、千代田区・東京都・国の補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>丸の内・大手町・霞が関・秋葉原の電力プロファイルと契約特性</li>
              <li>大型オフィス／中央官庁／IT事業者のBefore/After削減事例</li>
              <li>東京都キャップ&トレード制度と千代田区中小事業所補助の活用</li>
              <li>DHC（地域冷暖房）受給ビルの電気代見直しアプローチ</li>
              <li>千代田区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              千代田区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区は大企業本社・官公庁・大学・IT商業が極めて高密度に集積する特殊なエリアです。1平方キロ当たりの特別高圧需要家数は日本トップクラスで、平日昼間の電力負荷が極端に高い「業務都心型」プロファイルを示します。
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
              千代田区の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区では、東電EPに加えて全国系新電力・東京ガス系・東急系・入札特化型・再エネ特化型と多様なプレイヤーが供給。丸の内・大手町クラスでは競争入札が標準化、霞が関では会計法ベースの入札、神田・秋葉原では中小事業者向け切替が進んでいます。
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
              千代田区の電気料金水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧・低圧それぞれの単価レンジを、丸の内・大手町・神田・秋葉原の代表的な契約タイプ別に整理します。新電力経由の競争入札を活用することで、標準メニュー比1〜4円/kWhの単価改善が見込めます。
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 丸の内オフィス・霞が関庁舎・秋葉原IT（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区の代表的な3業態で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリングから再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/datacenter-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              千代田区固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区の電気代上昇は、業務地区特有の要因が複合的に作用します。それぞれの影響を定量把握することで、契約見直しと省エネ投資の優先順位が明確になります。
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
              補助金・優遇制度 — 千代田区・東京都・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区独自の中小規模事業所補助、東京都の報告書制度関連補助・ZEB支援、国のSII省エネ補助の3層を組合せることで、投資回収を1〜2年短縮可能です。設備別の重複可否は事前確認が必要です。
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
              千代田区の主要産業・施設と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区の事業者構成は、丸の内・大手町オフィスビル群、霞が関・永田町官公庁、神田・秋葉原のIT商業、麹町・番町の中規模オフィス、DHC事業者の5層構造です。それぞれ電力消費プロファイルが大きく異なります。
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
              丸の内・大手町クラスの特別高圧では競争入札が標準化、霞が関では会計法入札、神田・秋葉原では中小事業者切替が進行中です。市場連動から固定への回帰、RE100対応、オフサイトPPAの主流化が共通トレンドです。
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
              千代田区事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区の省エネは、高効率空調更新・LED化・オフサイトPPA・BEMS・蓄電池の5軸が主力です。屋根面積制約が大きいためオンサイト太陽光より、オフサイト型再エネ調達と高効率化が現実的な打ち手となります。
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
              千代田区向け契約見直しチェックリスト（12項目）
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
              シミュレーターで千代田区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              千代田区は丸の内・大手町の超大型オフィス、霞が関の官公庁、秋葉原のIT集積など、業務地区特有のリスクを多面的に抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した14〜20%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "隣接区・銀座/日本橋の事情。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "隣接区・六本木/虎ノ門の事情。" },
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "西新宿副都心の事情。" },
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "隣接区・大学集積の事情。" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC事業者の主力打ち手。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "丸の内・大手町級大型ビルの最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "他業態との比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "賃貸オフィスに固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "テナント賃料転嫁が難しい場合の選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
            ]}
          />

          <ContentCta
            heading="千代田区の自社条件で電気代リスクを試算する"
            description="丸の内・大手町・霞が関・秋葉原など千代田区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="千代田区の電力契約見直し、専門家に相談しませんか？"
            description="丸の内・大手町の特別高圧オフィス、霞が関の官公庁ビル、秋葉原のIT施設など千代田区の電気代見直しは規模が大きく論点も多くなります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
