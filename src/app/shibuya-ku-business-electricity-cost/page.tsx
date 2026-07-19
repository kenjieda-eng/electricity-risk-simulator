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
  "渋谷区の法人電気料金完全ガイド｜渋谷IT・スタートアップ／原宿表参道／恵比寿代官山オフィス";
const pageDescription =
  "東京都渋谷区の法人電気代を区固有の論点で解説。渋谷駅周辺のIT・スタートアップ集積（GMO・サイバーエージェント・DeNA・Mercari）、渋谷スクランブルスクエア／ストリーム再開発、原宿・表参道のアパレル・クリエイティブ、恵比寿・代官山のオフィス＋商業、ビットバレー文化を踏まえた契約最適化と省エネ補助の実務をまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "渋谷区 法人電気料金",
    "渋谷 スタートアップ IT 電気代",
    "原宿 表参道 商業 電力",
    "恵比寿 代官山 オフィス 電気代",
    "渋谷区 中小企業 省エネ支援",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/shibuya-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/shibuya-ku-business-electricity-cost",
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
    label: "渋谷区の事業所構成 — IT/スタートアップ/クリエイティブ集積",
    detail:
      "渋谷区は渋谷駅周辺のIT・スタートアップ（ビットバレー）、原宿・表参道のアパレル・クリエイティブ・商業、恵比寿・代官山のオフィス＋商業、代々木の教育・オフィス、笹塚・幡ヶ谷の住商混在と、若い企業文化と消費トレンドが集積するエリアです。GMO・サイバーエージェント・DeNA・Mercari等の上場ITベンチャーが本社を構え、グロース企業の電力ニーズが特徴的です。",
  },
  {
    label: "渋谷駅周辺の再開発と特別高圧需要",
    detail:
      "東急が中心となった渋谷再開発（渋谷スクランブルスクエア・渋谷ヒカリエ・渋谷ストリーム・渋谷フクラス・渋谷ソラスタ・渋谷駅桜丘口再開発等）で2020年代に超大型オフィス＋商業複合ビルが連続供給。1棟あたり延床5〜18万m²級、年間使用量2,000万〜5,000万kWh規模の特別高圧契約が中心です。",
  },
  {
    label: "ビットバレー文化と成長企業の電力ニーズ",
    detail:
      "渋谷区は1990年代後半から『ビットバレー』と呼ばれるIT・スタートアップ集積地で、現在も上場ITベンチャー本社が多数集まる。グロース企業はオフィス急拡張・社員急増・サーバー・データ通信機器が増えるため、契約電力（kW）の見直しサイクルが他業態より短い傾向。エクイティ調達直後の事業拡大期は特に電力契約見直しの必要性が高まります。",
  },
  {
    label: "原宿・表参道の商業集積と若年消費",
    detail:
      "原宿・表参道は世界有数のファッション・ライフスタイル商業集積地。ブランド路面店・百貨店（表参道ヒルズ・GYRE等）・カフェ・レストランが密集し、土日祝の集中負荷と平日のオフィス負荷が混在。原宿駅周辺は2020年の駅舎建替後、駅前商業の再開発が活発化しています。",
  },
  {
    label: "恵比寿・代官山の住商混在オフィス",
    detail:
      "恵比寿（恵比寿ガーデンプレイス・サッポロビール本社跡開発）、代官山（蔦屋書店・T-SITE等）、中目黒の住商混在エリアにオフィス＋商業＋飲食が集積。中規模オフィスビル・路面店舗の高圧/低圧契約が多数で、新電力切替の余地が大きい構造です。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "区内シェア最大。渋谷駅周辺の特別高圧オフィス、原宿表参道の大型商業、恵比寿のオフィスを多数抱える。『業務用季節別時間帯別電力』『特別高圧電力』『業務用高圧電力』が主軸メニュー。2023年6月の料金改定後、調整額負担が大きい点に注意が必要です。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光等）",
    role: "全国展開新電力",
    detail:
      "渋谷駅周辺の特別高圧オフィスの競争入札で主要対抗馬。RE100対応の再エネメニューも各社展開し、IT企業・上場ベンチャーのCO2削減ニーズに対応しています。固定3〜5年契約が中心。",
  },
  {
    name: "東京ガスエナジー・東急パワーサプライ",
    role: "ガス・地域系新電力",
    detail:
      "東京ガス系・東急電鉄系の新電力。東急グループの渋谷再開発ビル（スクランブルスクエア等）では東急パワーサプライの採用実績多数。電気＋ガス一体提案、東急グループ施設一括契約等の差別化があります。",
  },
  {
    name: "アーバンエナジー・F-Power後継系",
    role: "中小・新興系",
    detail:
      "渋谷IT・スタートアップ向けの中小・新興系新電力。グロース企業の急拡張ニーズに対応した柔軟な契約条件を提供。ただし2022〜2023年の高騰局面で経営不振となった事業者もあり、与信評価が重要です。",
  },
  {
    name: "みんな電力・自然電力（再エネ特化型）",
    role: "再エネ特化型",
    detail:
      "ESG重視のIT・スタートアップ・アパレルブランドで採用拡大。RE100宣言企業や上場ITベンチャーのCO2削減志向と相性が良く、トラッキング付き非化石証書・オフサイトPPA等の多様な再エネ調達スキームを提供しています。",
  },
  {
    name: "撤退・新規受付停止状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面では渋谷の中小事業者向け新電力でも受付停止・撤退が相次ぎ、特にスタートアップ向け新電力の影響が大きかった。2024年以降は徐々に再開していますが、信用力ある事業者の選定が以前にも増して重要です。",
  },
];

const priceBenchmark = [
  {
    label: "特別高圧電力 — 渋谷駅周辺大型オフィスの単価",
    detail:
      "区内特別高圧（2,000kW超）の渋谷スクランブルスクエア・ヒカリエ級ビルは標準メニューで電力量料金17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。新電力経由の競争入札では標準比1〜2円/kWh下げが目安。",
  },
  {
    label: "高圧電力 — 中規模オフィス・商業の単価",
    detail:
      "原宿表参道・恵比寿・代官山・代々木の中規模ビル（高圧500kW〜1,800kW級）は『業務用高圧電力』が中心で、電力量料金18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケースが多く、IT・ベンチャー企業の見直し効果が出やすいレンジです。",
  },
  {
    label: "低圧電力 — 原宿路面店・代官山飲食の単価",
    detail:
      "原宿・表参道の路面店、代官山・中目黒の飲食店の『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は17〜20円/kWh。低圧自由化の選択肢は限定的ですが、複数店舗を持つ事業者は新電力切替の余地があります。",
  },
  {
    label: "成長企業の契約電力（kW）見直しサイクル",
    detail:
      "渋谷IT・スタートアップは事業拡大に伴う社員増・サーバー増で契約電力が短期間で増減します。エクイティ調達直後・社員100名超え・データセンター移行などのタイミングで契約電力（kW）の最適化見直しを行うことが、想定外の電気代増を防ぐポイントです。",
  },
];

const industryImpact = [
  {
    title: "業種1: 渋谷駅前・IT本社オフィス（高圧 1,500kW、年間 1,100万kWh）",
    before:
      "Before: 渋谷駅前の上場IT企業A社本社（執務面積12,000m²、社員約1,200名、サーバルーム併設）。事業急拡大で社員・サーバ増、契約電力見直しせず2023年夏は最大デマンドが契約超過で警報。市場連動プラン継続で2023年夏は月最大3,200万円の請求。年間電気代 約2.8億円。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約を獲得／全執務フロアLED化＋人感センサー連動（SII補助1/2活用、投資1,500万円）／高効率空調機への更新／RE100対応のトラッキング付再エネ電源組合せ／渋谷区中小企業省エネ支援活用／契約電力（kW）の見直し。",
    result:
      "Result: 年間電気代 約2.8億円 → 約2.3億円（▲約18%、▲5,000万円・目安）／契約電力 1,500→1,350kW／投資回収 補助金後 2.0年前後（目安）／RE100調達100%達成。",
  },
  {
    title: "業種2: 表参道・大型商業ビル（特別高圧 2,000kW、年間 1,500万kWh）",
    before:
      "Before: 表参道の大型商業＋オフィス複合ビルB（地下3階・地上12階）。ブランドショップ・レストラン・オフィスの複合用途で土日祝の集中負荷と平日のオフィス負荷が混在。市場連動プラン併用で2023年夏は月最大7,000万円の請求。年間電気代 約3.8億円。",
    after:
      "After: 全国系新電力との競争入札で固定5年契約／全館LED化（SII補助1/2活用、投資2,400万円）／高効率空調機への更新／BEMS導入による需要見える化／屋上太陽光150kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 約3.8億円 → 約3.1億円（▲約18%、▲7,000万円・目安）／契約電力 2,000→1,800kW／投資回収 補助金後 2.0〜2.5年（目安）。",
  },
  {
    title: "業種3: 恵比寿・サッポロビール本社跡複合オフィス（高圧 1,300kW、年間 950万kWh）",
    before:
      "Before: 恵比寿エリアのオフィス＋商業複合ビルC（地下2階・地上14階）。オフィス・商業・飲食の混合用途。市場連動プラン継続で2023年夏は月最大2,800万円の請求。年間電気代 約2.4億円。",
    after:
      "After: 東京ガス系新電力に固定3年で切替／共用部・オフィスLED化（SII補助1/2活用、投資1,800万円）／高効率空調機への更新／BEMSによる需要見える化／需要家主導型オフサイトPPA契約／渋谷区中小企業省エネ支援活用。",
    result:
      "Result: 年間電気代 約2.4億円 → 約2.0億円（▲約17%、▲4,000万円・目安）／契約電力 1,300→1,170kW／投資回収 補助金後 2.5年前後（目安）。",
  },
];

const costFactors = [
  {
    label: "IT・スタートアップの急拡張に伴う契約電力増",
    detail:
      "渋谷のIT・スタートアップは事業拡大に伴う社員増・サーバー増で契約電力が短期間で増減します。契約電力見直しを怠ると、最大デマンド超過による警報や、過剰契約による基本料金増などのリスクが顕在化します。",
  },
  {
    label: "渋谷駅周辺再開発による新規大型ビル供給",
    detail:
      "渋谷スクランブルスクエア・ストリーム・フクラス・桜丘口の連続再開発で、エリア全体の電力需要が増加。新規ビル供給に伴い、テナント企業の契約見直し機会が増えています。",
  },
  {
    label: "原宿表参道商業の土日祝集中負荷",
    detail:
      "原宿・表参道のブランド路面店・大型商業施設は土日祝の負荷が平日より高い特殊なプロファイル。需要パターン理解のある新電力との契約で1〜2円/kWhの差が生まれます。",
  },
  {
    label: "東京都キャップ&トレード制度の対象",
    detail:
      "渋谷区内には延床5万m²以上のオフィス・商業ビルが多数立地し、東京都キャップ&トレード制度の対象事業所が集中。第3計画期間以降の削減義務率引き上げで、未達時の排出量取引コストが顕在化します。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度再エネ賦課金は3.98円/kWh。年間使用量1,000万kWh級の高圧需要家でも年4,000万円規模の負担。減免制度の対象は限定的ですが、申請可能性のある事業者は早期検討を推奨します。",
  },
];

const subsidies = [
  {
    name: "渋谷区 中小企業省エネ設備等導入支援",
    target: "区内中小事業所のLED・空調・冷凍冷蔵・断熱・BEMS等",
    rate: "対象経費の概ね1/3〜1/2、上限は事業区分による（2025年度時点）",
    note: "渋谷区環境政策課公式の支援。原宿表参道商業・恵比寿代官山オフィス・笹塚幡ヶ谷の中小事業者で活用しやすい区独自制度。SII補助との併用可否は要事前確認。",
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
    note: "渋谷駅周辺の大型オフィス・商業ビルの開発・改修案件で活用実績。キャップ&トレード対応とセットで計画立案するのが定石。",
  },
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・冷凍冷蔵・LED・コンプレッサー・ヒートポンプ等",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "都内オフィスビル・商業施設で採択実績多数。区補助と同一設備での重複は不可だが、対象設備を分けることで併用可能なケースあり。",
  },
  {
    name: "需要家主導型 PPA・蓄電池併設関連補助",
    target: "自家消費型太陽光・オフサイトPPA・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "渋谷区は屋根面積制約が大きいため、オフサイト型PPAの活用が現実的。ESG重視のIT・スタートアップ・アパレルブランドのRE100調達手段として浸透しつつあります。",
  },
];

const industryProfile = [
  {
    label: "渋谷駅周辺 — IT・スタートアップ・大型オフィス",
    detail:
      "渋谷スクランブルスクエア・ヒカリエ・ストリーム・フクラス・ソラスタ等の超大型オフィス＋商業複合ビル。GMO・サイバーエージェント・DeNA・Mercari等の上場ITベンチャー本社が集積。年間使用量2,000万〜5,000万kWh規模の特別高圧契約が中心です。",
  },
  {
    label: "原宿・表参道 — クリエイティブ・アパレル・大型商業",
    detail:
      "表参道ヒルズ・GYRE・東急プラザ表参道原宿・ラフォーレ原宿等の大型商業＋路面ブランドショップが密集。広告・デザイン・アパレル系オフィスも集積し、商業＋オフィス＋飲食の複合用途の高圧契約が中心です。",
  },
  {
    label: "恵比寿・代官山・中目黒 — オフィス＋商業＋飲食",
    detail:
      "恵比寿ガーデンプレイス・サッポロビール本社跡開発、代官山T-SITE、中目黒駅周辺等のオフィス＋商業＋飲食複合エリア。中規模オフィスビル・路面店舗の高圧/低圧契約が多数です。",
  },
  {
    label: "代々木・原宿駅周辺 — 教育・オフィス",
    detail:
      "代々木ゼミナール・河合塾等の予備校、NHK放送センター、原宿駅周辺再開発、JR代々木駅周辺の中規模オフィス。教育機関は授業時間帯の負荷集中、放送センターは24時間稼働と多様な負荷プロファイルです。",
  },
  {
    label: "笹塚・幡ヶ谷・初台 — 住商混在",
    detail:
      "京王新線沿線の笹塚・幡ヶ谷、東京オペラシティに近い初台の住商混在エリア。中規模オフィス・商業施設・飲食店が立地し、高圧・低圧の中小契約が中心。新電力切替の余地が大きいエリアです。",
  },
];

const switchingReality = [
  {
    label: "渋谷区の新電力浸透度",
    detail:
      "渋谷駅周辺の特別高圧では競争入札が標準化し、東急パワーサプライ等の地域系新電力の落札比率が高い水準。原宿表参道・恵比寿の高圧オフィス・商業でも新電力切替が進み、区全体の新電力比率は都内平均を上回ると見られます。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰でIT・スタートアップ・大型商業の多くが市場連動から固定回帰。事業急拡大期のコスト予測性を重視する企業文化と相まって、3〜5年固定が主流化しています。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・災害時復旧体制・既存契約の継続性。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。特別高圧需要家では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（渋谷区固有）",
    detail:
      "①特別高圧の供給実績（渋谷駅周辺）、②グロース企業の契約電力（kW）柔軟見直し対応、③RE100対応の再エネメニュー（ESG重視企業）、④土日祝集中負荷への対応（原宿表参道商業）、⑤新電力の財務健全性・与信、の5点が重要です。",
  },
  {
    label: "需要家主導型オフサイトPPAの主流化",
    detail:
      "渋谷区は屋根面積制約が大きく、福島・茨城・千葉等の県外大規模太陽光・風力との直接契約（オフサイトPPA）が主流化。RE100宣言企業・ESG重視IT企業・アパレルブランドを中心に普及拡大しています。",
  },
];

const energySaving = [
  {
    label: "IT・スタートアップオフィスの高効率化",
    detail:
      "全執務フロアLED化＋人感センサー連動、高効率空調機への更新、BEMS導入で電力▲20〜30%が目安。サーバルーム併設の場合は外気冷房・ラック密度向上もあわせて検討。SII補助＋渋谷区中小企業省エネ支援の組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "大型商業・商業複合ビルの高効率化",
    detail:
      "売場・共用部LED化、高効率空調機への更新、BEMS導入で電力▲20〜30%。土日祝集中負荷を踏まえた需要見える化が運用最適化のポイント。投資回収 2〜3年が目安です。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力との直接契約で初期投資ゼロで再エネ調達可能。ESG重視IT企業・アパレルブランド・上場ベンチャーを中心に普及拡大しています。",
  },
  {
    label: "契約電力（kW）の定期見直し",
    detail:
      "事業急拡張期のスタートアップでは契約電力見直しを年1〜2回行うことで、過剰契約による基本料金増と最大デマンド超過警報の両方を防げます。BEMSによる需要見える化と組合せるのが定石です。",
  },
  {
    label: "BEMS・需要見える化",
    detail:
      "ビル全体・オフィス全体の電力消費をBEMSで見える化＋AI分析でピーク需要▲15〜25%。テナント別請求の正確化、節電インセンティブ設計、DR参加など派生メリットも大きい。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰または不足でないか（成長企業は要注意）",
  "夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の使用量と単価を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "新電力の財務健全性・与信状況を確認したか（2022〜2023年の撤退事例多数）",
  "土日祝の負荷パターン（原宿表参道商業特有）を契約条件に反映しているか",
  "東京都キャップ&トレード制度の対象事業所か、削減義務率と進捗を確認したか",
  "RE100・SBT対応の再エネ調達要件（ESG重視IT・アパレル要件）を整理したか",
  "渋谷区中小企業省エネ設備等導入支援の最新公募状況を確認したか",
  "SII補助・都補助・区補助の併用可否を設備別に整理したか",
  "需要家主導型オフサイトPPAのコスト試算を実施したか",
];

const faqItems = [
  { question: "渋谷区のIT・スタートアップで電気代見直しのタイミングは？", answer: "①エクイティ調達直後の事業拡大期、②社員100名超え・オフィス拡張時、③サーバー集約・データセンター移行時、④契約期間更新の3〜6ヶ月前、の4タイミングが重要です。事業急拡張期は契約電力（kW）の見直しサイクルを年1〜2回に設定するのが定石です。" },
  { question: "渋谷駅周辺の特別高圧オフィスで競争入札はどう動きますか？", answer: "渋谷スクランブルスクエア・ヒカリエ・ストリーム級の特別高圧入札は、東電EP・東急パワーサプライ・全国系新電力（ENEOS・出光・Looop等）が主要参加者で、固定3〜5年が中心です。RE100対応・BCP体制を評価する総合評価方式が増えています。" },
  { question: "原宿表参道の商業ビルで電気代削減で最も効果的な施策は？", answer: "①全館・売場LED化（投資回収 1.5〜2年）、②高効率空調機への更新、③BEMS導入による需要見える化、④契約電力（kW）削減、⑤特別高圧/高圧の新電力切替、の5本柱が中心です。SII補助＋都補助＋渋谷区中小企業省エネ支援の組合せで投資回収を1〜2年短縮できます。" },
  { question: "ESG重視のIT・アパレル企業のRE100対応はどう進めますか？", answer: "①トラッキング付き非化石証書の調達、②再エネ特化型新電力との契約、③需要家主導型オフサイトPPA（大規模太陽光・風力との直接契約）、④コーポレートPPAスキームの活用、の4手段が中心。上場ITベンチャーやアパレルブランドはESG投資家からのRE100要請が強まっており、調達手段の多様化が進んでいます。" },
  { question: "渋谷区の中小事業者向け補助金は何がありますか？", answer: "渋谷区環境政策課の『中小企業省エネ設備等導入支援』（LED・空調・BEMS等が対象、概ね1/3〜1/2補助）が代表的です。東京都の地球温暖化対策報告書制度関連補助、国のSII省エネ補助との併用可否は事業者別・設備別に異なるため、応募前に各窓口で確認が必要です（2025年度時点）。" },
  { question: "新電力選定で財務健全性をどう評価しますか？", answer: "①直近2〜3期の決算公開状況、②帝国データバンク・東京商工リサーチの企業評価、③親会社の信用力、④需給管理体制（電源確保力）、⑤公的入札参入実績、の5点を確認します。2022〜2023年の高騰局面で渋谷のスタートアップ向け新電力は撤退事例も多く、与信評価が以前にも増して重要です。" },
  { question: "渋谷区で停電時の対応は東電と新電力で差がありますか？", answer: "物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、契約形態によらず復旧時間は同じです。ただし停電通知・補償窓口は契約小売事業者になるため、契約時に窓口体制・連絡フローを確認することが重要です。" },
  { question: "東京都キャップ&トレード制度への対応はどうすべきですか？", answer: "削減義務率の進捗を毎年度確認し、未達リスクがある場合は早期に省エネ投資・再エネ調達（オフサイトPPA・証書購入）でカバーする必要があります。排出量取引市場での購入も選択肢ですが、価格変動リスクがあるため、自社設備対応を優先するのが定石です。" },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "渋谷区 環境政策課 中小企業省エネ支援（区公式）", url: "https://www.city.shibuya.tokyo.jp/" },
  { name: "東京都環境局 キャップ&トレード制度", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function ShibuyaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/shibuya-ku-business-electricity-cost"
        datePublished="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "市区町村別電気料金事情", url: "https://simulator.eic-jp.org/articles/by-municipality" },
          { name: "渋谷区の法人電気料金", url: "https://simulator.eic-jp.org/shibuya-ku-business-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/by-municipality" className="underline-offset-2 hover:underline">市区町村別電気料金事情</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">渋谷区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            渋谷区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            渋谷区は渋谷駅周辺のIT・スタートアップ集積（ビットバレー）、原宿表参道のクリエイティブ・アパレル商業、恵比寿代官山のオフィス＋商業、代々木の教育・オフィスと、若い企業文化と消費トレンドが集積するエリアです。本ページでは区内固有の電力事情、業種別影響、契約見直し、渋谷区・東京都・国の補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>渋谷駅・原宿表参道・恵比寿代官山の電力プロファイルと契約特性</li>
              <li>IT本社オフィス／表参道大型商業／恵比寿複合オフィスのBefore/After削減事例</li>
              <li>東京都キャップ&トレード制度と渋谷区中小企業省エネ支援の活用</li>
              <li>成長企業の契約電力（kW）見直しサイクルとRE100対応</li>
              <li>渋谷区向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              渋谷区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区はIT・スタートアップ・クリエイティブ・商業の集積地で、エリア別に電力負荷パターンが大きく異なります。渋谷駅周辺の超大型再開発、原宿表参道の若年消費商業、ビットバレーのグロース企業文化など、契約戦略を考えるうえで重要な前提です。
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
              渋谷区の主要電力会社・新電力一覧
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区では、東電EPに加えて全国系新電力・東京ガス系・東急系・中小新興系・再エネ特化型と多様なプレイヤーが供給。渋谷駅周辺の特別高圧、原宿表参道商業、IT・スタートアップ向け契約で競争が活発化しています。
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
              渋谷区の電気料金水準
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧・低圧それぞれの単価レンジを、渋谷駅・原宿表参道・恵比寿・代官山の代表的な契約タイプ別に整理します。成長企業特有の契約電力見直しサイクルも解説します。
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
              業種別影響度3件 — 渋谷IT本社・表参道商業・恵比寿複合オフィス（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区の代表的な3業態で、契約見直し＋設備対策の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界ヒアリングから再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/data-center-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンターの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              渋谷区固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区の電気代上昇は、IT急拡張、再開発、商業集中、キャップ&トレード制度など、ビットバレー特有の要因が複合的に作用します。
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
              補助金・優遇制度 — 渋谷区・東京都・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区独自の中小企業省エネ支援、東京都の報告書制度関連補助・ZEB支援、国のSII省エネ補助の3層を組合せることで、投資回収を1〜2年短縮可能です。設備別の重複可否は事前確認が必要です。
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
              渋谷区の主要産業・施設と電力消費プロファイル
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区の事業者構成は、渋谷駅周辺のIT・スタートアップ・大型オフィス、原宿表参道のクリエイティブ・アパレル、恵比寿代官山中目黒のオフィス＋商業＋飲食、代々木の教育・オフィス、笹塚幡ヶ谷初台の住商混在の5層構造です。
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
              電力会社切替の実情 — 東電EPと新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷駅周辺の特別高圧では競争入札が標準化、東急パワーサプライ等の地域系新電力の落札比率が高い水準です。原宿表参道・恵比寿の中規模事業者でも新電力切替が進行、ESG重視IT企業のRE100対応も急速に進んでいます。
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
              渋谷区事業者の節電・省エネ施策事例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区の省エネは、IT本社オフィス高効率化、大型商業高効率化、オフサイトPPA、契約電力定期見直し、BEMSの5軸が主力です。グロース企業特有のサイクルに合わせた契約最適化が重要です。
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
              渋谷区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理しましょう。成長企業特有の契約電力見直しサイクル、新電力財務健全性確認等の論点を含めて確認することが重要です。
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
              シミュレーターで渋谷区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              渋谷区はIT・スタートアップの急拡張、渋谷駅周辺再開発、原宿表参道商業、ESG重視のRE100要件など、業態別に異なる電力リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オフサイトPPA・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜18%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "隣接区・西新宿副都心の事情。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "隣接区・六本木/虎ノ門の事情。" },
              { href: "/setagaya-ku-business-electricity-cost", title: "世田谷区の法人電気料金", description: "隣接区・住商混在の事情。" },
              { href: "/nakano-ku-business-electricity-cost", title: "中野区の法人電気料金", description: "隣接区・中野駅再開発の事情。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "渋谷駅周辺大型ビルの最適化。" },
              { href: "/data-center-electricity-cost-review", title: "データセンターの電気料金見直し", description: "DC事業者の主力打ち手。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "他業態との比較ベンチマーク。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "オフサイトPPA活用も含む。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "IT・成長企業に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "上場ITベンチャーの選択論点。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "全国9エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "東電エリアでも影響大の項目。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="渋谷区の自社条件で電気代リスクを試算する"
            description="渋谷駅IT・原宿表参道・恵比寿代官山など渋谷区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オフサイトPPA・省エネ投資のROIもあわせて確認できます。"
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
            heading="渋谷区の電力契約見直し、専門家に相談しませんか？"
            description="渋谷駅周辺のIT本社、原宿表参道の大型商業、恵比寿の複合オフィスなど渋谷区の電気代見直しは業態と成長フェーズで論点が異なります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
