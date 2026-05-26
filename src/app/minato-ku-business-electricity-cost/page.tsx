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
  "港区の法人電気料金完全ガイド｜六本木・虎ノ門ヒルズ／台場データセンター／外資系IT・麻布台ヒルズ";
const pageDescription =
  "東京都港区の法人電気代を区固有の論点で解説。六本木・虎ノ門ヒルズの自家発電とコージェネ、台場のデータセンター集積、外資系GAFAM・金融オフィス、麻布台ヒルズ新規開業、東京ガス系の地域冷暖房を踏まえた契約最適化と省エネ補助の実務をまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "港区 法人電気料金",
    "六本木ヒルズ 虎ノ門 電気代",
    "台場 データセンター 電力",
    "外資 IT 電気代",
    "港区 創エネ蓄エネ省エネ機器助成",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/minato-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/minato-ku-business-electricity-cost",
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
    label: "港区の事業所構成 — 外資・IT・大型商業ビルの集積",
    detail:
      "港区は外資系金融・IT・コンサル、大手不動産系超大型ビル（森ビル系のヒルズ群）、台場のデータセンター・物流、品川駅周辺のIT再開発と、業務地区機能の中でも特殊な構成を持ちます。区内昼間人口は夜間人口の3〜4倍に達し、平日昼間の電力負荷が極端に高い構造です。",
  },
  {
    label: "六本木ヒルズ・虎ノ門ヒルズの自家発電・コージェネ",
    detail:
      "六本木ヒルズは独自のガスタービン式コージェネレーション設備（自家発電）を持ち、東日本大震災時にもエリア内供給を維持した実績で知られます。虎ノ門ヒルズ・愛宕ヒルズ・赤坂サカス等の森ビル系超大型ビルでも自家発電・蓄電池併設のレジリエンス対応が標準仕様。買電契約はベース部分中心で、ピーク時の自家発切替運用が定着しています。",
  },
  {
    label: "台場・港南エリアのデータセンター集積",
    detail:
      "お台場・天王洲・港南は都心至近の物流＋データセンター集積地。NTT・KDDI・IIJ・エクイニクス等のキャリアグレードDC（年間使用量3,000万〜2億kWh規模）が立地し、AI需要拡大で2024年以降は新規DC稼働・拡張が継続中です。",
  },
  {
    label: "東京ガスの地域冷暖房とコージェネ普及",
    detail:
      "港区は東京ガス本社所在地で、芝・浜松町・汐留・大門エリアで東京ガス系の地域冷暖房（DHC）・コージェネ普及率が都内最高水準。電気＋ガスの一体契約・GHP・エネファーム導入ビルが多く、買電量を抑える設計が定着しています。",
  },
  {
    label: "麻布台ヒルズ・品川駅周辺の新規開業",
    detail:
      "2023年11月に麻布台ヒルズ（森JPタワー、複合用途、延床約86万m²）が開業。品川駅周辺ではJR・京急の再開発、リニア中央新幹線関連の品川駅改修が進行中で、エリア全体の電力需要は中長期で増加傾向。新築特別高圧需要家の系統接続調整が活発化しています。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "区内シェア最大。森ビル系のヒルズ群、外資系オフィス、データセンター等の特別高圧需要家を多数抱える。『業務用季節別時間帯別電力』『特別高圧電力』が主軸メニュー。自家発電併用ビルでは買電量が抑制され、契約電力（kW）最適化の余地が大きい構造です。",
  },
  {
    name: "東京ガスエナジー",
    role: "ガス系新電力",
    detail:
      "港区は東京ガス本社所在地で、電気＋ガスの一体契約・コージェネ既設ビルでの実績が都内最大級。芝・浜松町・汐留・大門エリアで強み。電気＋ガス＋熱の総合エネルギーマネジメント提案が差別化ポイントです。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光等）",
    role: "全国展開新電力",
    detail:
      "六本木・虎ノ門・品川の特別高圧・高圧オフィスビルで競争入札の主要対抗馬。RE100対応の再エネメニューも各社展開し、外資系入居テナント向け調達ニーズに対応しています。",
  },
  {
    name: "DC専門・大口特化型新電力",
    role: "業態特化型",
    detail:
      "台場・港南のキャリアグレードDC向け新電力。年間1億kWh超の特別高圧契約に対応できる供給力と、24時間稼働・高負荷率に最適化された料金体系を提供。RE100対応のオフサイトPPA組成にも強みを持ちます。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化型）",
    role: "再エネ特化型",
    detail:
      "外資系GAFAM・金融・コンサルのRE100対応需要で採用拡大。トラッキング付き非化石証書、オフサイトPPA、コーポレートPPAなど多様な再エネ調達スキームを提供しています。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面ではDC・大型オフィス向け新電力でも受付停止が発生。2024年以降は徐々に再開していますが、台場DCクラスの大型案件は新電力側の供給可能枠が常に逼迫気味で、入札時期を早めに動かすことが重要です。",
  },
];

const priceBenchmark = [
  {
    label: "特別高圧電力 — 六本木・虎ノ門・台場の大型契約単価",
    detail:
      "区内特別高圧（2,000kW超）の大型ビル・DCは標準メニューで電力量料金17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。DC専門新電力なら標準比1〜2円/kWh下げが目安です。",
  },
  {
    label: "高圧電力 — 中規模オフィス・商業の単価",
    detail:
      "麻布・白金・新橋・芝公園エリアの中規模ビル（高圧500kW〜1,800kW級）は『業務用高圧電力』が中心で、電力量料金18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数。",
  },
  {
    label: "低圧電力 — 麻布・白金高級商業・飲食",
    detail:
      "麻布十番・白金台・南青山の高級商業・飲食店の『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は17〜20円/kWh。低圧自由化の選択肢は限定的ですが、複数店舗を持つ事業者は新電力切替の余地があります。",
  },
  {
    label: "データセンター向け特別契約と単価交渉",
    detail:
      "DC事業者向けには需要パターン（高負荷率・24時間運用・電源信頼性）に応じた特別契約が一般化。台場・天王洲のDCでは特別高圧の標準メニューより1〜2円/kWh安い単価交渉が可能。DC専門新電力経由ならさらに優遇可能性があります。",
  },
];

const industryImpact = [
  {
    title: "業種1: 六本木・外資金融オフィス（特別高圧 1,800kW、年間 1,300万kWh）",
    before:
      "Before: 六本木のヒルズ系オフィスビル入居の外資金融A社（執務面積15,000m²、トレーディングフロア併設）。24時間稼働サーバー＋日中執務負荷で負荷率55%。市場連動プラン継続で2023年夏は月最大3,800万円の請求。年間電気代 約3.3億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得／全執務フロアLED化（SII補助1/2活用、投資1,800万円）／高効率空調機への更新／RE100対応のオフサイトPPA契約／BEMS導入。",
    result:
      "Result: 年間電気代 約3.3億円 → 約2.7億円（▲約18%、▲6,000万円・目安）／契約電力 1,800→1,650kW／投資回収 補助金後 2.0年前後（目安）／RE100調達100%達成。",
  },
  {
    title: "業種2: 台場・キャリアグレードDC（特別高圧 5,500kW、年間 4,600万kWh）",
    before:
      "Before: 台場のキャリアグレードDC B（サーバ約5,500ラック、PUE 1.55）。冷却電力が全体の40%、UPS・PDU等の付帯設備20%。市場連動プラン併用で2023年夏は月最大1.2億円の請求。年間電気代 約13.8億円。",
    after:
      "After: DC専門新電力との特別高圧固定5年契約／外気冷房（フリークーリング）併用拡大／サーバー集約とラック密度向上／需要家主導型オフサイトPPA（大規模太陽光5MW＋風力）／PUE 1.55→1.30に改善。",
    result:
      "Result: 年間電気代 約13.8億円 → 約10.8億円（▲約22%、▲3.0億円・目安）／契約電力 5,500→4,800kW／RE100調達80%達成／PPAは初期投資ゼロで即効果。",
  },
  {
    title: "業種3: 虎ノ門・大型複合オフィスビル（特別高圧 3,200kW、年間 2,400万kWh）",
    before:
      "Before: 虎ノ門エリアの大型複合ビルC（地下5階・地上40階、延床120,000m²）。コージェネ既設だが買電依存度高い。市場連動プラン継続で2023年夏は月最大9,500万円の請求。年間電気代 約6.2億円。",
    after:
      "After: 東京ガス系＋全国系新電力との競争入札で固定5年契約／コージェネ運転最適化（電気＋ガスの一体運用見直し）／全館LED化（SII補助1/2活用、投資3,200万円）／高効率空調機への更新／BEMS＋AI需要予測の導入。",
    result:
      "Result: 年間電気代 約6.2億円 → 約5.0億円（▲約19%、▲1.2億円・目安）／契約電力 3,200→2,900kW／投資回収 補助金後 2.0年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "ヒルズ系超大型ビルの集中負荷",
    detail:
      "六本木・虎ノ門・赤坂・愛宕の森ビル系ヒルズ群は1棟あたり延床10〜86万m²級で、エリア内電力需要が極端に集中。自家発電・コージェネ・蓄電池併設で買電負荷を抑える設計だが、ピーク時の系統依存度は依然高い構造です。",
  },
  {
    label: "台場・港南のDC集積による電力需要急増",
    detail:
      "台場・天王洲・港南エリアにキャリアグレードDCが集積し、AI需要拡大で2024年以降は新規DC稼働・拡張が継続中。1ラック当たり消費電力が10〜30kWに上昇傾向で、電力契約も大幅変更が必要なケースが増加しています。",
  },
  {
    label: "外資テナントのRE100要件",
    detail:
      "六本木・虎ノ門・品川の外資系GAFAM・金融・コンサル入居ビルでは、テナント側からRE100対応の再エネ電源調達がオーナーに求められます。証書購入・オフサイトPPA・トラッキング属性の証明が標準化しつつあります。",
  },
  {
    label: "東京都キャップ&トレード制度の対象集中",
    detail:
      "港区内には延床5万m²以上のオフィス・商業ビルが多数立地し、東京都キャップ&トレード制度の対象事業所が集中。第3計画期間以降の削減義務率引き上げで、未達時の排出量取引コストが顕在化します。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量4,000万kWh級のDC事業者では年1.5億円規模の負担。減免制度の対象は限定的ですが、エネルギー多消費業種に該当する場合は申請を検討する価値があります。",
  },
];

const subsidies = [
  {
    name: "港区 創エネ・蓄エネ・省エネ機器設置助成",
    target: "区内事業所の太陽光・蓄電池・LED・高効率空調・コージェネ等",
    rate: "対象経費の概ね1/3〜1/2、上限は機器区分による（2025年度時点）",
    note: "港区環境課公式の助成。創エネ（太陽光）・蓄エネ（蓄電池）・省エネ（LED・空調等）の3区分を網羅する区独自制度で、都内でも手厚い部類。SII補助との併用可否は機器別に要確認。",
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
    note: "麻布台ヒルズ・虎ノ門ヒルズ等の大型ビル開発・改修案件で活用実績。キャップ&トレード対応とセットで計画立案するのが定石。",
  },
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・冷凍冷蔵・LED・コンプレッサー・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "DC・大型オフィス・商業施設で採択実績多数。区補助と同一設備での重複は不可だが、対象設備を分けることで併用可能なケースあり。",
  },
  {
    name: "需要家主導型 PPA・蓄電池併設関連補助",
    target: "自家消費型太陽光・オフサイトPPA・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "港区は屋根面積制約が大きいため、オフサイト型PPAの活用が現実的。RE100対応の外資テナント向けに採用拡大中。",
  },
];

const industryProfile = [
  {
    label: "六本木・赤坂 — ヒルズ系オフィス・外資集積",
    detail:
      "六本木ヒルズ・赤坂サカス等の超大型ビルに外資系金融・IT・コンサル・メディアが集積。年間使用量2,000万〜5,000万kWh規模の特別高圧契約と、自家発電・コージェネ・蓄電池の組合せ運用が特徴です。",
  },
  {
    label: "虎ノ門・愛宕 — ヒルズ系・大型複合再開発",
    detail:
      "虎ノ門ヒルズ森タワー・ステーションタワー・ビジネスタワー、麻布台ヒルズ森JPタワーなど森ビル系大型複合ビルが集積。コージェネ・蓄電池・自家発電の標準装備でレジリエンス重視の設計です。",
  },
  {
    label: "台場・港南・天王洲 — データセンター・物流",
    detail:
      "NTT・KDDI・IIJ・エクイニクス等のキャリアグレードDC、JR東日本系の物流・倉庫が集積。年間使用量3,000万〜2億kWh規模の特別高圧契約が中心で、AI需要拡大で新規DC稼働が継続中です。",
  },
  {
    label: "品川駅周辺 — IT・再開発オフィス",
    detail:
      "品川駅周辺の再開発（高輪ゲートウェイ駅・品川インターシティ・グランドコモンズ）で大型オフィスが集積。マイクロソフト・LINE・楽天など大手IT本社・拠点が立地し、特別高圧オフィス契約が中心です。",
  },
  {
    label: "麻布・白金・南青山 — 高級住商混在",
    detail:
      "麻布十番・白金台・南青山の高級住宅＋商業混在エリア。レストラン・ブランド店舗・ギャラリーが集積し、低圧・高圧の中小契約が中心。新電力切替の余地が大きいエリアです。",
  },
];

const switchingReality = [
  {
    label: "港区の新電力浸透度",
    detail:
      "六本木・虎ノ門・品川・台場の特別高圧では競争入札が標準化し、DC・大型オフィスを中心に新電力比率が高水準。麻布・白金の中小事業者でも新電力切替が進み、区全体の新電力比率は都内平均を上回ると見られます。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰でDC事業者・大型オフィスの多くが市場連動から固定回帰。24時間稼働DCでは特に市場連動を敬遠し、3〜5年固定が主流化しています。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・災害時復旧体制・既存契約の継続性。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。DC事業者・大型オフィスでは数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（港区固有）",
    detail:
      "①特別高圧の供給実績（DC含む）、②RE100対応の再エネメニュー（外資テナント要件）、③コージェネ・自家発電併用ビルへの対応力、④災害時BCP対応、⑤24時間稼働への対応力、の5点が重要です。",
  },
  {
    label: "需要家主導型オフサイトPPAの主流化",
    detail:
      "港区は屋根面積制約が大きく、福島・茨城・千葉等の県外大規模太陽光・風力との直接契約（オフサイトPPA）が主流化。RE100宣言企業・外資テナント・DC事業者を中心に普及拡大しています。",
  },
];

const energySaving = [
  {
    label: "ヒルズ系大型ビルのコージェネ運転最適化",
    detail:
      "コージェネ既設ビルの電気＋ガス一体運用見直しで電力＋ガス合算コスト▲10〜15%が目安。BEMS＋AI需要予測でピーク時の自家発切替を最適化することがポイント。",
  },
  {
    label: "データセンターの高効率化（フリークーリング・PUE改善）",
    detail:
      "サーバ更新で電力密度向上、外気冷房（フリークーリング）併用、PUE改善（1.55→1.30）で電力▲20〜30%。AI需要拡大期にこそ高効率化投資の重要性が増します。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力との直接契約で初期投資ゼロで再エネ調達可能。外資テナントを抱えるオフィスビル・DC事業者を中心に普及拡大しています。",
  },
  {
    label: "全館LED化＋人感センサー連動",
    detail:
      "全館LED化＋人感センサー・タイマー制御で照明電力▲40〜60%が目安。港区創エネ蓄エネ省エネ機器助成＋SII補助の組合せで投資回収 1.5〜2年程度。",
  },
  {
    label: "蓄電池・自家発電のレジリエンス連動",
    detail:
      "ヒルズ系ビルでは蓄電池＋自家発電の組合せでBCP対応＋ピークカット＋DR報酬獲得を一体運用。需要家主導型蓄電池補助との組合せで投資ハードルを下げられます。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の使用量と単価を把握しているか",
  "コージェネ・自家発電併用の場合、買電量と自家発比率の最適バランスを評価したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "DC事業者の場合、PUE改善余地と冷却電力最適化を試算したか",
  "東京都キャップ&トレード制度の対象事業所か、削減義務率と進捗を確認したか",
  "RE100対応テナントの再エネ調達要件（トラッキング属性等）を把握したか",
  "港区創エネ・蓄エネ・省エネ機器助成の最新公募状況を確認したか",
  "SII補助・都補助・区補助の併用可否を設備別に整理したか",
  "需要家主導型オフサイトPPAのコスト試算を実施したか",
  "災害時BCP（停電復旧優先度・自家発電源）の体制を見直したか",
];

const faqItems = [
  { question: "港区の六本木ヒルズ・虎ノ門ヒルズで電気代見直しは可能ですか？", answer: "可能です。ヒルズ系ビルはコージェネ・自家発電・蓄電池を組合せた独自運用ですが、買電契約部分は競争入札による単価交渉余地があります。電気＋ガスの一体運用の最適化と組合せることで、エリア全体のエネルギーコストを5〜15%削減できるケースがあります。" },
  { question: "台場のデータセンター事業者の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②外気冷房（フリークーリング）併用でPUE改善、③サーバ更新で電力密度向上、④需要家主導型オフサイトPPAで再エネ調達、⑤BEMS・AI分析による需要最適化、の5本柱が中心。SBT・RE100対応と電気代削減を両立できます。" },
  { question: "外資系GAFAM入居ビルのRE100対応はどう進めますか？", answer: "①トラッキング付き非化石証書の調達、②再エネ特化型新電力との契約、③需要家主導型オフサイトPPA（大規模太陽光・風力との直接契約）、④コーポレートPPAスキームの活用、の4手段が中心。テナント要件と賃料体系を整理して、ビル全体での最適スキームを設計する必要があります。" },
  { question: "港区の創エネ・蓄エネ・省エネ機器助成はどう活用しますか？", answer: "港区環境課の『創エネ・蓄エネ・省エネ機器設置助成』は太陽光・蓄電池・LED・高効率空調等が対象で、概ね1/3〜1/2の補助率（2025年度時点）。SII補助との重複は機器別に異なるため、応募前に要事前確認。年度内予算枠の消化が早いため、早期申請を推奨します。" },
  { question: "麻布台ヒルズ等の新築大型ビルの電力契約はどう決まりますか？", answer: "新築大型ビルは竣工前に電力会社選定が行われるケースが一般的で、東電EP・東京ガス系・全国系新電力の競争が行われます。コージェネ・自家発電併設の場合は、ガス会社との一体契約が選ばれることも多い。竣工後でも契約見直しは可能で、テナント賃料への転嫁構造を踏まえた検討が必要です。" },
  { question: "港区の中小事業者向け補助金は何がありますか？", answer: "港区創エネ・蓄エネ・省エネ機器助成、東京都の地球温暖化対策報告書制度関連補助、国のSII省エネ補助の3層が代表的。麻布・白金・南青山の中小事業者・店舗でも活用可能です（2025年度時点）。" },
  { question: "港区で停電時の対応は東電と新電力で差がありますか？", answer: "物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、契約形態によらず復旧時間は同じです。ただし停電通知・補償窓口は契約小売事業者になるため、契約時に窓口体制・連絡フローを確認することが重要です。" },
  { question: "東京都キャップ&トレード制度への対応はどうすべきですか？", answer: "削減義務率の進捗を毎年度確認し、未達リスクがある場合は早期に省エネ投資・再エネ調達（オフサイトPPA・証書購入）でカバーする必要があります。排出量取引市場での購入も選択肢ですが、価格変動リスクがあるため、自社設備対応を優先するのが定石です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "港区 環境課 創エネ・蓄エネ・省エネ機器設置助成（区公式）", url: "https://www.city.minato.tokyo.jp/" },
  { name: "東京都環境局 キャップ&トレード制度", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function MinatoKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/minato-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
          { name: "港区の法人電気料金", url: "https://simulator.eic-jp.org/minato-ku-business-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">港区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            港区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            港区は六本木・虎ノ門ヒルズの自家発電付き超大型ビル、台場のデータセンター集積、品川駅周辺のIT再開発、外資系GAFAM・金融、東京ガス系の地域冷暖房と、特殊な業務地区機能を持つエリアです。本ページでは区内固有の電力事情、業種別影響、契約見直し、港区・東京都・国の補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>六本木・虎ノ門・台場・品川の電力プロファイルと契約特性</li>
              <li>外資金融オフィス／キャリアグレードDC／大型複合ビルのBefore/After削減事例</li>
              <li>東京都キャップ&トレード制度と港区創エネ・蓄エネ・省エネ機器助成の活用</li>
              <li>RE100対応のオフサイトPPA・コージェネ最適化アプローチ</li>
              <li>港区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              港区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区は外資・IT・DC・大型商業ビルの集積エリアで、ヒルズ系超大型ビルの自家発電・コージェネ、台場DCの高負荷率・24時間運用、外資テナントのRE100要件など、業務地区機能の中でも特殊な要素を多数抱えています。
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
              港区の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区では、東電EPに加えて東京ガスエナジー・全国系新電力・DC専門・再エネ特化型と多様なプレイヤーが供給。六本木・虎ノ門の特別高圧、台場のDC、品川のIT再開発で競争が活発化しています。
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
              港区の電気料金水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧・低圧それぞれの単価レンジを、六本木・虎ノ門・台場・麻布の代表的な契約タイプ別に整理します。DC・自家発電併用ビル特有の交渉余地も解説します。
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
              業種別影響度3件 — 外資金融・キャリアグレードDC・大型複合ビル（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区の代表的な3業態で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリングから再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/datacenter-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              、{" "}
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              港区固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区の電気代上昇は、ヒルズ系ビル集中、DC需要急増、外資テナントのRE100要件、キャップ&トレード制度など、業務地区特有の要因が複合的に作用します。
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
              補助金・優遇制度 — 港区・東京都・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区独自の創エネ・蓄エネ・省エネ機器助成、東京都の報告書制度関連補助・ZEB支援、国のSII省エネ補助の3層を組合せることで、投資回収を1〜2年短縮可能です。設備別の重複可否は事前確認が必要です。
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
              港区の主要産業・施設と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区の事業者構成は、六本木・赤坂のヒルズ系外資オフィス、虎ノ門・愛宕の大型複合再開発、台場・港南・天王洲のDC・物流、品川駅周辺のIT再開発、麻布・白金・南青山の高級住商の5層構造です。
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
              六本木・虎ノ門・台場・品川の特別高圧では競争入札が標準化。外資テナント要件によるRE100対応、オフサイトPPA主流化、コージェネ既設ビルの一体運用最適化が共通トレンドです。
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
              港区事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区の省エネは、ヒルズ系ビルのコージェネ最適化、DCのフリークーリング・PUE改善、オフサイトPPA、LED化、蓄電池・自家発電のレジリエンス連動の5軸が主力です。
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
              港区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。コージェネ・自家発電併用ビル、DC事業者特有の論点を含めて確認することが重要です。
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
              シミュレーターで港区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              港区はヒルズ系超大型ビル、台場のDC集積、外資テナントのRE100要件など、業務地区特有のリスクを多面的に抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した18〜22%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "隣接区・銀座/日本橋の事情。" },
              { href: "/shinagawa-ku-business-electricity-cost", title: "品川区の法人電気料金", description: "隣接区・大井/天王洲の事情。" },
              { href: "/shibuya-ku-business-electricity-cost", title: "渋谷区の法人電気料金", description: "隣接区・IT/原宿の事情。" },
              { href: "/datacenter-electricity-cost-review", title: "データセンターの電気料金見直し", description: "台場DC事業者の主力打ち手。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "ヒルズ級大型ビルの最適化。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "他業態との比較ベンチマーク。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "オフサイトPPA活用も含む。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "DC・24時間稼働法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "DC・大型オフィスが避ける理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
            ]}
          />

          <ContentCta
            heading="港区の自社条件で電気代リスクを試算する"
            description="六本木・虎ノ門・台場・品川など港区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="港区の電力契約見直し、専門家に相談しませんか？"
            description="六本木・虎ノ門の超大型ビル、台場のDC、品川のIT本社、外資金融オフィスなど港区の電気代見直しは規模・業態ともに論点が多く複雑です。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
