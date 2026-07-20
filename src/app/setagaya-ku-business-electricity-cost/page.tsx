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
  "世田谷区の法人電気料金完全ガイド｜23区最大人口・住商混在・二子玉川再開発と医療教育機関の契約最適化";
const pageDescription =
  "世田谷区（人口約94万人・23区最大）の法人電気料金を地域特化で解説。三軒茶屋・下北沢・自由が丘・二子玉川などの住商混在エリア、楽天本社や医療・大学キャンパスといった大型需要家、中小飲食・小売の低圧契約戦略、世田谷区独自の中小企業省エネ補助までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "世田谷区 法人電気料金",
    "二子玉川 楽天 電力",
    "三軒茶屋 商業 電気代",
    "下北沢 再開発 電力",
    "世田谷区 省エネ補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/setagaya-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/setagaya-ku-business-electricity-cost",
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
    label: "23区最大人口・住宅地中心の電力需要構造",
    detail:
      "世田谷区は約94万人（2025年推計）と23区最大の人口を擁し、面積も58.05km²と23区2位の広さ。住宅地が区面積の大半を占めるため、低圧電灯（住宅・小規模事業所）の契約口数が23区トップクラス。法人需要は中小飲食・小売・クリニック・学習塾など小規模事業者が圧倒的多数を占め、低圧電力（動力）契約が主軸となります。",
  },
  {
    label: "二子玉川再開発と楽天本社の特別高圧大口需要",
    detail:
      "二子玉川ライズ（2015年全面開業）にはオフィス棟・商業棟・住宅棟が複合立地し、楽天グループ本社『楽天クリムゾンハウス』は特別高圧契約クラスの大口需要家。区内の特別高圧契約は二子玉川エリアに集中する構図で、その他は世田谷区民会館・大型病院・大学キャンパスが高圧契約の中心となります。",
  },
  {
    label: "下北沢・自由が丘・三軒茶屋の商業集積",
    detail:
      "下北沢（再開発『下北線路街』2022年全面開業）、自由が丘（駅周辺商業）、三軒茶屋（キャロットタワー・茶沢通り）は区内3大商業エリア。小型飲食・アパレル・雑貨店が密集し、それぞれ年間使用量3万〜30万kWh規模の低圧電力契約が中心となります。",
  },
  {
    label: "医療・大学等の大型需要家集積",
    detail:
      "関東中央病院（上用賀）・国立成育医療研究センター（大蔵）・東京医療センター（隣接目黒区東が丘）・自衛隊中央病院（池尻）など大型医療機関が集積。昭和女子大・成城大・国士舘大・東京農業大などの大学キャンパスも複数立地し、いずれも高圧契約クラスの安定大口需要家として区内電力需要の中核を担います。",
  },
  {
    label: "気象条件と冷暖房需要の特徴",
    detail:
      "23区西部に位置する世田谷区は、内陸性気候の影響でヒートアイランド傾向の都心3区と比べて夏季気温はやや低めですが、それでも年間冷房度日（CDD24）は1,400程度と冷房需要は大きい。冬季は放射冷却で朝晩冷え込み、暖房需要は23区平均より2〜3%高い傾向。住宅併設の事業所が多いため、空調コスト比率が事業者電気代の40〜50%に達するケースが珍しくありません。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "世田谷区内シェア最大。中小事業者・店舗の低圧電力『従量電灯C』『低圧電力』が中心。高圧契約は二子玉川・大学・医療機関・公共施設が主な顧客。2023年6月の規制料金改定で低圧電灯15.9%値上げ後、小規模店舗の電気代負担増が顕在化しています。",
  },
  {
    name: "東京ガスの電気・Looopでんき・ENEOSでんき",
    role: "全国系・ガス併売新電力",
    detail:
      "東京ガスの電気は世田谷区内のガス契約世帯・事業所と親和性が高く、ガス併売の値引きメリットで小売店・飲食店の切替が進む。Looop・ENEOSも区内の小型法人で実績多数。固定単価メニュー中心。",
  },
  {
    name: "東急パワーサプライ",
    role: "地域系新電力",
    detail:
      "東急電鉄系の新電力。東急田園都市線・大井町線・世田谷線の沿線エリア（二子玉川・三軒茶屋・自由が丘）で強い。沿線商業者・住宅向け契約に注力。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信会社系・流通系の新電力。小規模オフィス・飲食店・学習塾・クリニックなどで固定単価プランを提供。携帯料金や流通ポイントとのセット割引が訴求点。",
  },
  {
    name: "みんな電力・自然電力・アスエネ",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供する新電力。区内の意識の高い飲食店・カフェ・教育機関・医療機関の一部で採用。料金水準はやや高めだが、ESG・SDGs対応の観点で選択肢。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で都内でも新電力の新規受付停止が相次ぎ、小規模事業者向け新電力でも一部撤退がありました。2024年以降は再開傾向で、現在は10〜15社が世田谷区内法人向けに新規受付中。最新の受付状況・撤退情報は新電力ネット等で要確認です。",
  },
];

const priceBenchmark = [
  {
    label: "低圧電力（動力）の単価水準",
    detail:
      "東電EP『低圧電力』は基本料金約1,200円/kW、電力量料金17〜20円/kWh+調整項目。世田谷区内の中小飲食店・小売店・クリニックでは年間使用量3〜30万kWhレンジの契約が大半。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜29円/kWhレンジになります。",
  },
  {
    label: "低圧電灯（事務所・店舗照明）の単価水準",
    detail:
      "『従量電灯C』は基本料金約290円/kVA、電力量料金第1段階29.80円〜第3段階37.45円/kWhの3段階制。小規模オフィス・店舗で利用が多い。新電力に切替えると基本料金圧縮と段階単価フラット化で5〜10%程度の削減が見込めるケースが多いです。",
  },
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。世田谷区では大学・医療機関・大型商業施設・区民会館などで採用。新電力経由なら2〜4円/kWh安いケース多数で、特に大学・医療機関は新電力との競争入札による単価交渉が一般化しています。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。世田谷区内では二子玉川ライズ等の大型複合施設・楽天本社が対象。新電力競争による圧力大で、競争入札で1〜2円/kWh単位の単価交渉が可能なケース多数です。",
  },
];

const industryImpact = [
  {
    title: "業種1: 飲食業・三軒茶屋の中規模レストラン（低圧電力 50kW、年間 12万kWh）",
    before:
      "Before: 三軒茶屋駅前の中規模レストランA社（席数80・営業18時間）。厨房冷凍冷蔵・空調・照明・換気が消費電力の中心。市場連動プランで2023年夏には月最大45万円の電気代経験。年間電気代 約360万円。デマンド管理は手動で、夏季ピーク月の基本料金が割高に固定。",
    after:
      "After: 全国系新電力の固定2年プランに切替／厨房冷凍冷蔵を高効率インバータ機に更新（区の省エネ補助1/2活用、投資180万円）／LED化／空調を高効率エアコンに更新／需要見える化メーターでピーク監視。",
    result:
      "Result: 年間電気代 約360万円 → 約298万円（▲17%、▲62万円）／契約kW 50→44／投資回収 補助金後 2.0年。",
  },
  {
    title: "業種2: 医療機関・関東中央病院クラスの大規模病院（高圧 1,200kW、年間 760万kWh）",
    before:
      "Before: 上用賀エリアの大規模病院B（病床数約400・24時間稼働）。空調・医療機器・冷暖房・給湯・厨房・洗濯が中心。年間電気代 約2.05億円。燃料費調整額上限なしの東電EP契約で2023年夏は月最大2,400万円の請求。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約獲得／全館LED化（投資1,200万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／屋上太陽光200kW＋蓄電池導入（需要家主導型補助活用）。",
    result:
      "Result: 年間電気代 約2.05億円 → 約1.70億円（▲17%、▲3,500万円）／契約kW 1,200→1,080／投資回収 補助金後 2.3年。",
  },
  {
    title: "業種3: 大型複合施設・二子玉川ライズ型（特別高圧 2,800kW、年間 2,000万kWh）",
    before:
      "Before: 二子玉川エリアの大型複合施設C（オフィス棟＋商業棟、テナント約100）。冷暖房・照明・エレベーター・エスカレーター・テナント供給が中心。年間電気代 約6.0億円。市場連動プランで2023年夏は月最大9,800万円の請求。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／全館LED化（投資2,500万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入＋テナント別需要見える化／需要家主導型オフサイトPPAで再エネ調達／屋上太陽光400kW導入。",
    result:
      "Result: 年間電気代 約6.0億円 → 約4.92億円（▲18%、▲1.08億円）／契約kW 2,800→2,500／投資回収 補助金後 2.2年。",
  },
];

const costFactors = [
  {
    label: "住宅併設・小規模事業者の段階料金負担",
    detail:
      "世田谷区は住宅併設店舗・SOHO型事業者が多く、低圧電灯の3段階料金（第3段階37.45円/kWh）が直撃。月使用量400kWh超の事業者は新電力のフラット単価プランへの切替メリットが明確に出ます。",
  },
  {
    label: "二子玉川・下北沢再開発エリアの新規大型施設電力負荷",
    detail:
      "二子玉川ライズ・下北線路街等の再開発で延床面積が拡大、各テナント・共用部の電力負荷が増加。再開発エリアのテナント契約条件（電気代上乗せ）も上昇傾向にあり、出店事業者の収益圧迫要因に。",
  },
  {
    label: "医療機関の24時間稼働コスト",
    detail:
      "関東中央病院・国立成育医療研究センター等の大型病院は24時間稼働・医療機器電力負荷が大きく、年間使用量500万〜1,000万kWh規模。電気代上昇局面では運営コスト直撃で、診療報酬で吸収困難なため契約最適化が経営課題に。",
  },
  {
    label: "大学キャンパスの研究設備電力",
    detail:
      "昭和女子大・成城大・国士舘大・東京農業大の研究室・実験設備・空調・照明の電力負荷が大きい。長期休暇期と通常学期で需要変動も大きく、需要パターンに合わせた契約設計が必要です。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇傾向。年間100万kWh使用の中規模事業者で年400万円規模の負担。減免制度の対象は限定的（電気使用密度要件）ですが、該当する製造系の小規模工場は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "世田谷区内では飲食・小売・医療機関・大学・大型施設の更新で採択実績多数。LED化・空調更新・厨房冷凍冷蔵更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "区内では屋上面積が限られる小規模事業者は屋上太陽光より需要家主導型オフサイトPPAの活用が現実的。大型複合施設・医療機関・大学で採択実績。",
  },
  {
    name: "世田谷区 中小企業省エネ補助（区独自）",
    target: "区内中小事業者の省エネ機器導入（LED・空調・冷凍冷蔵設備等）",
    rate: "1/3〜1/2、上限50〜200万円（年度により変動）",
    note: "区独自の補助。区内の中小飲食・小売・クリニック・学習塾の主力打ち手。SII補助との重複は要事前確認。詳細は世田谷区産業振興公社まで。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都独自の補助。建築物環境計画書制度・キャップ&トレード制度の対象事業所には別途インセンティブあり。世田谷区内の大型施設（病院・大学・複合商業）で実績多数。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "再開発エリア・新築医療機関・新築学校の案件で活用実績多数。二子玉川・下北沢の再開発との親和性高い。",
  },
];

const industryProfile = [
  {
    label: "中小飲食・小売（三軒茶屋・下北沢・自由が丘・成城）",
    detail:
      "区内に密集する小型飲食店・カフェ・アパレル・雑貨店・書店等。年間使用量3万〜30万kWh規模の低圧契約が中心。電気代の対売上比率が3〜6%と高く、契約見直しが利益直結。",
  },
  {
    label: "医療機関（関東中央病院・国立成育医療研究センター・自衛隊中央病院ほか）",
    detail:
      "区内に立地する大規模病院・診療所群。年間使用量500万〜1,500万kWh規模の高圧・特別高圧契約。24時間稼働・医療機器負荷・空調負荷が大きく、契約最適化メリットが大きい業態。",
  },
  {
    label: "大学キャンパス（昭和女子大・成城大・国士舘大・東京農業大）",
    detail:
      "区内の私立大学群。年間使用量200万〜600万kWh規模の高圧契約が中心。研究設備・実験室・図書館・空調負荷が大きい。長期休暇期の需要減を活かした契約設計が論点。",
  },
  {
    label: "大型複合施設・再開発エリア（二子玉川ライズ・下北線路街・キャロットタワー）",
    detail:
      "区内の主要再開発エリアのオフィス・商業複合施設。年間使用量500万〜2,500万kWh規模の高圧・特別高圧契約。楽天本社は区内最大級の電力需要家の一つ。",
  },
  {
    label: "公共施設・教育施設（区民会館・小中学校・図書館）",
    detail:
      "世田谷区民会館、区立小中学校約100校、区立図書館等の公共施設。年間使用量数十万〜数百万kWh規模。区の電力一括調達による契約効率化が進展中。",
  },
];

const switchingReality = [
  {
    label: "世田谷区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは2024年時点で25〜30%程度と推定（都内平均30〜35%にやや劣後）。小規模事業者は東電EPに留まる比率が高く、新電力切替の余地が大きい。大型施設・医療機関・大学では切替が進展。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内事業者の多くが市場連動から固定プランへ回帰。24時間稼働の医療機関・大型複合施設は特に市場連動を敬遠。中小飲食店でも市場連動経験者は固定プラン回帰が多数。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制・契約変更不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。区内の中小事業者は『慣性』で東電EP継続のケースが多く、相見積取得で初めて差額に気付くパターンが典型的です。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②小規模法人向けの最低契約kW・契約期間条件、③固定単価期間（2〜5年）の確実性、④燃料費調整額の有無・上限、⑤地域・ガス併売割引の有無、の5点が区内では特に重要。中小事業者は契約期間・違約金条項を必ず確認すべきです。",
  },
  {
    label: "需要家主導型PPAの活用",
    detail:
      "区内屋根面積制約のため、大型施設ではオフサイト型PPAが普及拡大。福島・茨城・栃木・千葉の大規模太陽光・風力電源と直接契約で初期投資ゼロで再エネ調達。RE100宣言企業・SBT認定企業の医療機関・大学で導入が進む。",
  },
];

const energySaving = [
  {
    label: "中小店舗・飲食のLED化・厨房設備更新",
    detail:
      "区内中小事業者の主力打ち手。全LED化、高効率厨房冷凍冷蔵への更新、高効率空調機への更新で電力▲15〜25%。区補助＋SII補助＋都補助の組合せで投資回収 1.5〜3年。",
  },
  {
    label: "医療機関の高効率化",
    detail:
      "病院は手術室・ICU・MRI・CT等の医療機器電力負荷が大きく、空調も24時間稼働。全館LED化・高効率空調機更新・BEMS導入・コージェネレーション併用で電力▲15〜25%。投資回収 2〜4年。",
  },
  {
    label: "大学キャンパスの需要平準化",
    detail:
      "長期休暇期と通常学期の需要差が大きい。需要平準化メニュー（オフピーク割引）の活用、研究設備の運用最適化、BEMS導入で電力▲10〜20%。蓄電池導入で需給管理を高度化する事例も増加。",
  },
  {
    label: "大型複合施設の高効率化＋PPA",
    detail:
      "二子玉川ライズ等の大型施設は全館LED化・高効率空調機・BEMS導入・需要家主導型オフサイトPPAの組合せで電力▲20〜30%。RE100対応と電気代削減を両立できる。",
  },
  {
    label: "需要見える化（中小事業者向け）",
    detail:
      "スマートメーター活用とクラウド型需要見える化サービス（月額数千円〜）で小規模事業者でも需要管理が可能に。ピーク需要▲10〜15%の事例多数。区補助対象になる場合あり。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力5〜10社からの相見積を取得し、固定vs市場連動を比較したか",
  "ガス併売割引・地域系新電力（東急パワーサプライ等）の活用可能性を検討したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『地球温暖化対策報告書制度』『キャップ&トレード制度』の対象事業所か確認したか",
  "世田谷区中小企業省エネ補助の活用可否（事業内容・スケジュール）を確認したか",
  "SII補助・都補助・区補助の併用可否を産業振興公社等で確認したか",
  "契約期間・違約金条項を新電力契約書で必ず確認したか（特に中小法人）",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
];

const faqItems = [
  { question: "世田谷区の法人電気代水準は23区内で高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし世田谷区は中小事業者・住宅併設店舗が多く、低圧電灯の3段階単価が高めに作用するケースが多い。新電力切替で5〜15%、設備更新を含めた総合最適化で15〜25%の削減余地があるのが典型パターンです。" },
  { question: "二子玉川エリアの大型施設はどんな電力契約ですか？", answer: "二子玉川ライズや楽天本社（楽天クリムゾンハウス）は特別高圧契約クラスの大口需要家。標準メニュー（電力量料金17〜20円/kWh+調整項目）から、新電力との競争入札で1〜2円/kWh単位の単価交渉が一般化。長期固定契約（3〜5年）＋需要家主導型PPAの組合せが主流です。" },
  { question: "世田谷区の中小飲食・小売の電気代削減策は？", answer: "①新電力相見積（5〜10社）で単価比較、②LED化・高効率厨房冷凍冷蔵への更新（区補助・SII補助活用）、③高効率空調機への更新、④需要見える化メーター導入、⑤契約kW・基本料金の最適化、の5本柱。区内の典型事例では年間電気代の15〜20%削減が見込めます。" },
  { question: "世田谷区独自の補助金にはどんなものがありますか？", answer: "世田谷区中小企業省エネ補助（年度により内容変動・上限50〜200万円・補助率1/3〜1/2）が代表的。区内中小事業者のLED・空調・冷凍冷蔵設備の更新に活用可能。世田谷区産業振興公社経由で申請。詳細は最新の区公式・産業振興公社の公募要領を確認してください。SII補助・都補助との併用可否は事業ごとに要確認です。" },
  { question: "下北沢再開発（下北線路街）周辺の電力事情は？", answer: "下北線路街は2022年に全面開業し、商業・住宅・コワーキング・カフェ等が複合立地。各テナントの電力契約は基本的に個別契約で、低圧電力（動力）が中心。共用部・大型店舗は高圧契約。出店事業者はテナント契約条件（電気代上乗せの有無・基準単価）を必ず確認すべきです。" },
  { question: "区内の大型病院・大学キャンパスの電気代対策は？", answer: "①特別高圧・高圧の競争入札による単価最適化、②全館LED化・高効率空調機への更新（SII補助1/2活用）、③BEMS導入で需要見える化＋デマンド制御、④需要家主導型オフサイトPPAで再エネ調達、⑤コージェネレーション併用（病院）、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "世田谷区で再エネ電源を調達したい場合の選択肢は？", answer: "①需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、②再エネ特化型新電力（みんな電力・自然電力・アスエネ等）、③再エネ証書購入、④屋上太陽光（屋上面積が確保できる場合）、の4手段。大学・病院・大型施設ではオフサイトPPAが急速に普及。中小事業者は再エネ特化型新電力が現実的選択肢です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・24時間対応の有無を確認することが重要です。" },
];

const sourcesItems = [
  { name: "世田谷区 産業振興公社（補助金情報）", url: "https://www.setagaya-icl.or.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
];

export default function SetagayaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/setagaya-ku-business-electricity-cost"
        datePublished="2026-05-27"
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
          <span className="text-slate-800">世田谷区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            世田谷区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            世田谷区は人口約94万人と23区最大、住宅地が区面積の大半を占め、中小飲食・小売・クリニック・学習塾など低圧契約の小規模事業者が圧倒的多数です。一方で二子玉川ライズ・楽天本社といった特別高圧大口需要家、関東中央病院・国立成育医療研究センター等の大型医療機関、昭和女子大・成城大などの大学キャンパスも集積する多層構造の電力需要を持ちます。本ページでは区内法人の電気代水準、業種別影響度、固有の課題、契約見直しの具体策、世田谷区独自補助の活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>世田谷区固有の電力事情（住商混在・大型医療・大学集積・再開発）</li>
              <li>中小飲食店・医療機関・大型複合施設のBefore/After削減事例</li>
              <li>世田谷区中小企業省エネ補助の活用パターン</li>
              <li>区内事業者向け契約見直し12項目チェックリスト</li>
              <li>住宅併設店舗・SOHO型事業者の段階料金対策</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              世田谷区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区は23区最大の人口と面積を持ち、住宅地中心の電力需要構造の中に、二子玉川再開発・楽天本社といった特別高圧大口需要家、大型医療機関、大学キャンパス、商業集積エリア（三軒茶屋・下北沢・自由が丘）が点在する多層構造のエリアです。
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
              世田谷区では東電EP以外に10〜15社程度の新電力が法人向けで活発に営業中です。全国系・地域系・通信流通系・再エネ特化型の4カテゴリが主軸となり、特にガス併売の東京ガスの電気と地域系の東急パワーサプライが沿線エリアで存在感を持ちます。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力選定の基本は{" "}
              <Link href="/how-to-compare-electricity-suppliers" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              世田谷区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（低圧電力・低圧電灯・高圧・特別高圧）によって単価水準が大きく異なります。住宅併設店舗・小規模オフィスは低圧電灯、中小飲食・小売は低圧電力、大学・医療機関は高圧、二子玉川大型施設は特別高圧が標準です。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安・概算です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 中小飲食・大型病院・複合施設（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区の代表的な業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在エリアの業界平均値と公開事例から整理した代表的なシナリオです。
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
              業種横断のコスト構造比較は{" "}
              <Link href="/restaurant-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲食業の電気代見直し</Link>
              、病院は{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              世田谷区固有の電気代上昇要因 — 段階料金・再開発・医療・大学
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区の電気代上昇は、住宅併設小規模事業者の段階料金負担、再開発エリアの新規大型施設電力負荷、医療機関の24時間稼働、大学研究設備など、区固有の事業者構成が複合的に影響します。
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
              個別要因の詳細は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              世田谷区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区では国補助（SII等）・都独自補助・区独自補助（中小企業省エネ補助）が組合せ可能です。特に区独自補助は中小事業者向けに使いやすい設計で、LED・空調・冷凍冷蔵設備更新の主力財源となります。
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
              世田谷区の事業者構成は、中小飲食・小売（最多）、医療機関、大学キャンパス、大型複合施設・再開発エリア、公共施設・教育施設の5層構造です。それぞれ電力消費パターンと契約区分が大きく異なります。
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
              電力会社切替の実情 — 区内事業者の現状
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区の新電力シェアは2024年時点で25〜30%程度と推定され、都内平均にやや劣後します。小規模事業者の切替余地が大きく、ガス併売・地域系新電力の活用、契約期間・違約金条項の確認が重要論点です。
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
              世田谷区の省エネは『中小店舗のLED・厨房設備更新』『医療機関の高効率化』『大学キャンパスの需要平準化』『大型施設の高効率化＋PPA』『中小向け需要見える化』の5軸が主力です。区補助・SII補助・都補助の組合せで投資回収を短縮できます。
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
              世田谷区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。区内中小事業者は特に契約期間・違約金条項・区独自補助の確認を見落としがちです。
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
              シミュレーターで世田谷区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              世田谷区は中小事業者の段階料金負担・医療大学等の24時間稼働・再開発エリアの大型施設電力負荷など固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・区補助活用・省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した15〜18%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/nakano-ku-business-electricity-cost", title: "中野区の法人電気料金完全ガイド", description: "中野駅再開発・中小オフィス・商業エリアの電力需要と契約最適化。" },
              { href: "/tokyo-business-electricity-cost", title: "東京都の法人電気料金完全ガイド", description: "都全体の電力事情・水準・補助金の総合ガイド。" },
              { href: "/articles/by-municipality", title: "市区町村別電気料金事情（一覧）", description: "都内全区の電気料金事情をハブから探す。" },
              { href: "/chiyoda-ku-business-electricity-cost", title: "千代田区の法人電気料金", description: "霞が関・大手町の中央官庁・大型オフィス事情。" },
              { href: "/chuo-ku-business-electricity-cost", title: "中央区の法人電気料金", description: "銀座・日本橋の大型商業・百貨店事情。" },
              { href: "/minato-ku-business-electricity-cost", title: "港区の法人電気料金", description: "六本木・赤坂・台場の大企業本社・ホテル事情。" },
              { href: "/shinjuku-ku-business-electricity-cost", title: "新宿区の法人電気料金", description: "新宿副都心の大型ビル・商業集積事情。" },
              { href: "/shibuya-ku-business-electricity-cost", title: "渋谷区の法人電気料金", description: "渋谷・原宿のIT・ベンチャー・商業事情。" },
              { href: "/shinagawa-ku-business-electricity-cost", title: "品川区の法人電気料金", description: "品川・大崎・天王洲の大型オフィス・物流事情。" },
              { href: "/koto-ku-business-electricity-cost", title: "江東区の法人電気料金", description: "豊洲・有明・湾岸のデータセンター・物流事情。" },
              { href: "/ota-ku-business-electricity-cost", title: "大田区の法人電気料金", description: "羽田・蒲田の製造業・町工場集積事情。" },
              { href: "/sumida-ku-business-electricity-cost", title: "墨田区の法人電気料金", description: "錦糸町・押上のスカイツリー・中小製造業事情。" },
              { href: "/toshima-ku-business-electricity-cost", title: "豊島区の法人電気料金", description: "池袋・サンシャインシティの大型商業事情。" },
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "東大本郷・大型病院・東京ドーム事情。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "板橋の中小製造業・物流事情。" },
              { href: "/restaurant-electricity-cost-benchmark", title: "飲食業の電気代見直し", description: "中小飲食店の主力打ち手を網羅。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "大型医療機関の最適化。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小・大型施設の主力補助金。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="世田谷区の自社条件で電気代リスクを試算する"
            description="中小飲食・医療機関・大学・大型複合施設など世田谷区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。区独自補助・SII補助・固定プラン切替のROIもあわせて確認できます。"
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
            heading="世田谷区の電力契約見直し、専門家に相談しませんか？"
            description="区内の中小飲食店・医療機関・大学・大型複合施設の電気代見直しは事業者規模と用途で論点が大きく変わります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
