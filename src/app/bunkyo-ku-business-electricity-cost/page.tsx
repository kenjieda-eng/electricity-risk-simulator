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
  "文京区の法人電気料金完全ガイド｜東大本郷・大型病院・研究機関・東京ドームシティの契約最適化";
const pageDescription =
  "文京区の法人電気料金を地域特化で解説。東京大学本郷キャンパス・東京医科歯科大・順天堂大・日本医大などの大学・大型病院、東京ドームシティ複合施設、谷根千エリアの観光業まで、文京区固有の研究設備・医療機器の高負荷電力と文京区中小企業エコアクション支援の活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "文京区 法人電気料金",
    "東大本郷 電力",
    "順天堂 病院 電気代",
    "東京ドームシティ 電力",
    "文京区 エコアクション補助",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/bunkyo-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/bunkyo-ku-business-electricity-cost",
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
    label: "大学・研究機関の電力負荷が突出するエリア構造",
    detail:
      "文京区は面積11.29km²と23区5番目に狭いが、東京大学本郷キャンパス（年間電力消費量推定1億kWh級、特別高圧）、お茶の水女子大、順天堂大、東京医科歯科大、日本医大、東洋大、拓殖大、東京家政大など教育・研究機関が極めて高密度に集積。区内法人需要に占める大学・研究機関の電力比率は23区内で最も高い構造です。",
  },
  {
    label: "大型病院の集中による医療機器電力負荷",
    detail:
      "順天堂大学医学部附属順天堂医院（本郷）、東京医科歯科大学医学部附属病院（湯島）、日本医科大学付属病院（千駄木）、東京大学医学部附属病院（本郷）など、国内有数の大型大学病院が複数立地。CT・MRI・PET・手術室・ICU・クリーンルーム・冷凍冷蔵等の医療機器電力が需要の中心を占めます。",
  },
  {
    label: "東京ドームシティ — 大規模イベント電力の特殊性",
    detail:
      "東京ドーム（収容5万人）・ラクーア・東京ドームホテル・後楽園ホール・アトラクションズ等を含む後楽の東京ドームシティ複合施設は区内最大級の電力需要家。コンサート・スポーツイベント開催時の瞬間需要が特に大きく、イベントピーク需要への対応が電力契約上の課題です。",
  },
  {
    label: "谷根千・小石川等の住商混在エリア",
    detail:
      "千駄木・根津・谷中（谷根千）の観光・小規模商業、白山・千石・小石川の住商混在エリア、茗荷谷・春日のオフィス・商業エリア。中小飲食・カフェ・小売・クリニックが中心で、低圧電力・低圧電灯契約が主軸です。",
  },
  {
    label: "気象条件と冷暖房需要の特徴",
    detail:
      "23区中央北部に位置する文京区はヒートアイランド傾向で夏季最高気温は周辺県より2〜3℃高い。年間冷房度日（CDD24）は1,500以上。大学・病院は24時間稼働の研究設備・医療機器を持つため、空調以外の負荷も含めて年間ピーク需要が高水準で推移します。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "文京区内シェア最大。東京大学本郷キャンパス等の大規模研究機関、順天堂・医科歯科等の大型病院、東京ドームシティ等の特別高圧・高圧需要家を顧客とする。2023年6月の規制料金改定で15.9%値上げの影響あり。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "文京区内の新電力シェア上位グループ。大学・病院・大型施設で実績多数。固定単価・市場連動の両方を提供。研究機関・医療機関では24時間稼働を理由に固定単価プランへの需要が高い。",
  },
  {
    name: "東京ガスの電気",
    role: "ガス併売新電力",
    detail:
      "文京区内のガス契約世帯・事業所と親和性が高い。中小飲食店・小売店・小規模オフィスでの切替が進む。ガス併売の値引きメリットあり。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信会社系・流通系の新電力。中小事業者・店舗・クリニック・学習塾向けで活発。携帯料金や流通ポイントとのセット割引が訴求点。",
  },
  {
    name: "みんな電力・自然電力・アスエネ",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供する新電力。SDGs志向の大学・研究機関で採用が進む。料金水準はやや高めだが、ESG・脱炭素対応の観点で選択肢。RE100対応の研究機関での導入実績多数。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で都内でも新電力の新規受付停止・撤退が相次ぎました。2024年以降は再開傾向で、現在は15社前後が文京区内法人向け高圧で新規受付中。中小法人向けの低圧も10社前後で活発に営業中。最新の受付状況・撤退情報は新電力ネット等で要確認です。",
  },
];

const priceBenchmark = [
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。文京区内では東京大学本郷キャンパス、東京ドームシティ、大型大学病院（順天堂・医科歯科・日本医大）が対象。新電力競争による圧力大で、競争入札で1〜2円/kWh単位の単価交渉が可能なケース多数です。共同調達（複数キャンパスの一括契約）による単価交渉力も強みです。",
  },
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数で、大学・病院は競争入札による単価交渉が標準化しています。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力』は基本料金約1,200円/kW、電力量料金17〜20円/kWh+調整項目。谷根千・白山・茗荷谷の中小飲食店・小売店・クリニック・学習塾での利用が中心。年間使用量3〜30万kWhレンジが典型。",
  },
  {
    label: "低圧電灯（事務所・小規模店舗）の単価水準",
    detail:
      "『従量電灯C』は基本料金約290円/kVA、電力量料金第1段階29.80円〜第3段階37.45円/kWhの3段階制。小規模オフィス・店舗で利用が多い。新電力に切替えると基本料金圧縮と段階単価フラット化で5〜10%程度の削減が見込めるケースが多いです。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大学キャンパス・東大本郷型（特別高圧 8,000kW、年間 1.0億kWh）",
    before:
      "Before: 東大本郷キャンパス級の大規模大学A。研究設備・実験室・図書館・空調・付属病院の電力負荷が中心。年間電気代 約30億円。複数キャンパスの分散契約で交渉力に課題、燃料費調整額の影響も直撃。2023年夏には月最大3.8億円の請求実績。",
    after:
      "After: 複数キャンパスの一括共同調達による競争入札／全国系新電力との固定3年契約獲得／LED化・高効率空調機への更新（投資3.5億円、SII補助1/2活用）／BEMS導入で需要見える化＋デマンド制御／需要家主導型オフサイトPPAで再エネ調達／RE100対応進展。",
    result:
      "Result: 年間電気代 約30億円 → 約24.6億円（▲18%、▲5.4億円）／契約kW 8,000→7,200／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種2: 大型大学病院・順天堂クラス（高圧 2,000kW、年間 1,300万kWh）",
    before:
      "Before: 本郷エリアの大型大学病院B（病床数約1,000・24時間稼働）。MRI・CT・PET・手術室・ICU・空調・厨房・洗濯が中心。年間電気代 約3.5億円。燃料費調整額上限なしの東電EP契約で2023年夏は月最大4,200万円の請求。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約獲得／全館LED化（投資2,000万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／コージェネレーション併用／需要家主導型オフサイトPPAで再エネ20%調達。",
    result:
      "Result: 年間電気代 約3.5億円 → 約2.86億円（▲18%、▲6,400万円）／契約kW 2,000→1,800／投資回収 補助金後 2.4年。",
  },
  {
    title: "業種3: 大規模イベント施設・東京ドームシティ型（特別高圧 6,500kW、年間 5,500万kWh）",
    before:
      "Before: 後楽の大規模イベント施設C（ドーム＋ホテル＋商業＋アトラクション複合）。冷暖房・照明・音響・大規模イベント時の瞬間需要が中心。年間電気代 約16.5億円。イベント開催日にデマンドピークが集中し、契約kW最適化が困難。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／全館LED化（投資3,500万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入＋イベント別需要見える化／蓄電池導入でイベントピークカット／需要家主導型オフサイトPPAで再エネ調達。",
    result:
      "Result: 年間電気代 約16.5億円 → 約13.5億円（▲18%、▲3.0億円）／契約kW 6,500→5,900／投資回収 補助金後 2.6年。",
  },
];

const costFactors = [
  {
    label: "研究設備・クリーンルーム・冷凍冷蔵の特殊負荷",
    detail:
      "東大本郷・お茶の水・順天堂・医科歯科等の研究設備、クリーンルーム、超低温冷凍庫（−80℃級）、動物実験施設等の24時間稼働設備が大量に存在。これらは止められない負荷で、ピーク需要時もDR対応が困難。電力契約の安定性が最優先となります。",
  },
  {
    label: "医療機器の高負荷化（PET・MRI・手術ロボット）",
    detail:
      "順天堂・医科歯科・日本医大等の大型病院ではPET・MRI・サイバーナイフ・手術ロボット（ダヴィンチ等）といった高負荷医療機器の導入が加速。1台あたり数百kW級の負荷もあり、設備更新時に契約kW見直しが必要です。",
  },
  {
    label: "東京ドームのイベントピーク需要",
    detail:
      "東京ドームのコンサート・スポーツイベント開催時には瞬間的に数千kW級の需要が発生。デマンド料金（基本料金）への影響が大きく、蓄電池・ピークカット設備の導入で基本料金最適化が可能です。",
  },
  {
    label: "大学長期休暇期の需要変動",
    detail:
      "夏季・冬季の長期休暇期は学生・教職員が減るため需要が大幅減（30〜50%減）。需要パターンに合わせた契約設計（季節別料金・基本料金最適化）が論点。新電力切替時のメニュー選定で重要な要素です。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇傾向。年間1億kWh使用の大学・1,000万kWh使用の大型病院で年4,000万〜4億円規模の負担。減免制度の対象は限定的ですが、適用可能性のある事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "文京区内では大学キャンパス・大型病院・東京ドームシティ等で採択実績多数。LED化・空調更新・冷凍冷蔵更新で安定採択。大規模設備更新は採択額が大きい。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "区内では屋根面積が限られるため、屋上太陽光より需要家主導型オフサイトPPAの活用が現実的。大学・大型病院・東京ドームシティで採択実績。RE100対応との親和性高い。",
  },
  {
    name: "文京区 中小企業エコアクション支援（区独自）",
    target: "区内中小事業者の省エネ機器導入・エコアクション認証取得",
    rate: "1/3〜1/2、上限50〜200万円（年度により変動）",
    note: "区独自の補助。区内の中小飲食・小売・クリニック・学習塾の主力打ち手。SII補助との重複は要事前確認。詳細は文京区産業推進部まで。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都独自の補助。建築物環境計画書制度・キャップ&トレード制度の対象事業所には別途インセンティブあり。文京区内の大学・病院・大型施設で実績多数。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "大学キャンパスの新棟建設・病院新棟・公共施設の改修で活用実績多数。区内の高度なZEB化案件で活用されています。",
  },
];

const industryProfile = [
  {
    label: "大学キャンパス（東大本郷・お茶の水・順天堂・医科歯科・日本医大・東洋・拓殖）",
    detail:
      "区内の大学群。年間使用量500万〜1億kWh規模の高圧・特別高圧契約。研究設備・実験室・付属病院・図書館・空調負荷が中心。区内法人需要の最大比率を占める。",
  },
  {
    label: "大型大学病院（順天堂・医科歯科・日本医大・東大病院）",
    detail:
      "区内の大型病院群。年間使用量1,000万〜1,500万kWh規模の高圧契約。24時間稼働・医療機器負荷・空調負荷・厨房・洗濯が中心。契約最適化メリットが大きい業態。",
  },
  {
    label: "大規模イベント施設（東京ドームシティ）",
    detail:
      "東京ドーム＋ラクーア＋ホテル＋アトラクション複合施設。年間使用量5,000万kWh級の特別高圧契約。イベント開催時のピーク需要対応が特殊な論点。",
  },
  {
    label: "中小商業・飲食・観光（谷根千・白山・茗荷谷・春日）",
    detail:
      "谷根千の観光業、白山・茗荷谷・春日の小規模商業・飲食。年間使用量3万〜30万kWh規模の低圧契約が中心。住宅併設店舗が多い。",
  },
  {
    label: "公共施設・区関連（文京シビックセンター・図書館・学校）",
    detail:
      "文京シビックセンター（区役所複合施設）、区立小中学校、図書館等。年間使用量数十万〜数百万kWh規模。区の電力一括調達による契約効率化が進展中。",
  },
];

const switchingReality = [
  {
    label: "文京区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは2024年時点で30〜35%程度と都内平均並み。大学・大型病院では競争入札による切替が標準化。中小事業者では切替の余地が大きく残ります。大学の共同調達（複数キャンパス・関連機関の一括契約）が特徴的です。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内事業者の多くが市場連動から固定プランへ回帰。24時間稼働の大学研究設備・大型病院は特に市場連動を敬遠。コスト変動を予算化困難な公的機関は固定プラン志向が強い。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制・契約変更不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。区内大学・病院では新電力との単価差が年間数千万〜数億円規模となるため、競争入札による単価交渉が定着しています。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②24時間稼働需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が区内では特に重要。大学・病院では④と⑤が特に重視されます。",
  },
  {
    label: "需要家主導型PPAの活用",
    detail:
      "区内屋根面積制約のため、大学・大型病院・東京ドームシティではオフサイト型PPAが普及拡大。福島・茨城・栃木・千葉の大規模太陽光・風力電源と直接契約で初期投資ゼロで再エネ調達。RE100宣言大学・SBT認定病院で導入実績多数。",
  },
];

const energySaving = [
  {
    label: "大学キャンパスの需要最適化＋PPA",
    detail:
      "複数キャンパスの一括共同調達、研究設備の運用最適化、BEMS導入、需要家主導型オフサイトPPAで電力▲15〜25%。RE100対応と電気代削減を両立できる。投資回収 2〜3年。",
  },
  {
    label: "大型病院の高効率化",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、コージェネレーション併用で電力▲15〜25%。医療機器の運用最適化（待機電力削減等）も効果大。投資回収 2〜4年。",
  },
  {
    label: "イベント施設のピークカット",
    detail:
      "蓄電池導入によるイベントピーク▲20〜35%、デマンド料金最適化。BEMSによるイベント別需要見える化、運用最適化。投資回収 3〜5年（補助金活用前）。",
  },
  {
    label: "中小商店・飲食のLED化・設備更新",
    detail:
      "区内中小事業者の主力打ち手。全LED化、高効率冷蔵ショーケース・厨房冷凍冷蔵への更新、高効率エアコンへの更新で電力▲15〜25%。区エコアクション支援＋SII補助＋都補助の組合せで投資回収 1.5〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言大学・SBT認定病院を中心に普及拡大。CO2削減と電気代削減を両立できる。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "大学・大型病院の場合、複数施設の共同調達による単価交渉力を検討したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『建築物環境計画書制度』『キャップ&トレード制度』の対象事業所か確認したか",
  "文京区中小企業エコアクション支援の活用可否を確認したか",
  "SII補助・都補助・区補助の併用可否を産業推進部等で確認したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "イベント施設の場合、蓄電池導入によるデマンドピークカットを試算したか",
];

const faqItems = [
  { question: "文京区の法人電気代水準は23区内で高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし文京区は大学・研究機関・大型病院の電力負荷が突出し、24時間稼働の研究設備・医療機器が大きな比率を占めるため、絶対額としての電気代は大規模事業者で年間数億〜数十億円規模になります。競争入札による単価最適化メリットが特に大きいエリアです。" },
  { question: "東京大学本郷キャンパスの電力契約は？", answer: "東大本郷キャンパスは特別高圧契約クラスの大口需要家（年間電力消費量推定1億kWh級）。複数キャンパス・関連機関の共同調達による競争入札が標準化。長期固定契約（3〜5年）＋需要家主導型PPAの組合せでRE100対応と電気代削減を両立する戦略が一般化しています。" },
  { question: "大型病院（順天堂・医科歯科・日本医大等）の電気代対策は？", answer: "①特別高圧・高圧の競争入札による単価最適化、②全館LED化・高効率空調機への更新（SII補助1/2活用）、③BEMS導入＋医療機器の運用最適化、④コージェネレーション併用、⑤需要家主導型オフサイトPPAで再エネ調達、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "東京ドームシティの大規模イベント時の電力対応は？", answer: "東京ドームのコンサート・スポーツイベント時には瞬間的に数千kW級の需要が発生し、デマンド料金（基本料金）への影響が大きい。蓄電池導入によるピークカットで基本料金最適化、BEMSによるイベント別需要見える化、特別高圧の長期固定契約（3〜5年）＋PPA組合せが主流対策です。" },
  { question: "文京区独自の補助金にはどんなものがありますか？", answer: "文京区中小企業エコアクション支援（年度により内容変動・上限50〜200万円・補助率1/3〜1/2）が代表的。区内中小事業者の省エネ機器導入とエコアクション認証取得に活用可能。文京区産業推進部経由で申請。詳細は最新の区公式の公募要領を確認してください。SII補助・都補助との併用可否は事業ごとに要確認です。" },
  { question: "谷根千の観光・小売事業者の電気代削減策は？", answer: "①新電力相見積（5〜10社）で単価比較、②LED化・高効率冷蔵ショーケースへの更新（区エコアクション支援活用）、③高効率エアコンへの更新、④需要見える化メーター導入、⑤契約kW・基本料金の最適化、の5本柱。区内の典型事例では年間電気代の15〜20%削減が見込めます。" },
  { question: "文京区で再エネ電源を調達したい場合の選択肢は？", answer: "①需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、②再エネ特化型新電力（みんな電力・自然電力・アスエネ等）、③再エネ証書購入、④屋上太陽光（屋上面積が確保できる場合）、の4手段。大学・大型病院・東京ドームシティではオフサイトPPAが急速に普及。中小事業者は再エネ特化型新電力が現実的選択肢です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・24時間対応の有無を確認することが重要です。特に病院・研究機関は契約時に確認必須です。" },
];

const sourcesItems = [
  { name: "文京区 産業推進部（補助金情報）", url: "https://www.city.bunkyo.lg.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
];

export default function BunkyoKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/bunkyo-ku-business-electricity-cost"
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
          <span className="text-slate-800">文京区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            文京区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            文京区は東京大学本郷キャンパスを筆頭に、お茶の水女子大・順天堂大・東京医科歯科大・日本医大などの大学・研究機関、順天堂医院・医科歯科大病院・日本医大病院・東大病院などの大型大学病院、東京ドームシティ複合施設という3つの大型需要家グループが集積する特徴的なエリアです。一方で谷根千・白山・茗荷谷・春日には中小商業・飲食店もあります。本ページでは区内法人の電気代水準、業種別影響度、固有の課題、契約見直しの具体策、文京区中小企業エコアクション支援の活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>文京区固有の電力事情（大学集積・大型病院・東京ドームシティ）</li>
              <li>東大本郷型大学・大型大学病院・イベント施設のBefore/After削減事例</li>
              <li>文京区中小企業エコアクション支援の活用パターン</li>
              <li>区内事業者向け契約見直し12項目チェックリスト</li>
              <li>研究設備・医療機器の特殊負荷への対応策</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              文京区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              文京区は東京大学本郷・お茶の水・順天堂・医科歯科・日本医大・東洋・拓殖など大学が極めて高密度に集積し、大型大学病院と東京ドームシティを擁する、23区内で最も研究・医療・教育の電力負荷比率が高い構造を持つエリアです。
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
              文京区では東電EP以外に15社前後の新電力が法人向け高圧で活発に営業中です。大学・大型病院では競争入札による切替が標準化、再エネ特化型新電力の活用も進展しています。
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
              文京区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（特別高圧・高圧・低圧電力・低圧電灯）によって単価水準が大きく異なります。東大本郷・東京ドームシティは特別高圧、大型病院・中規模オフィスは高圧、谷根千・茗荷谷の中小商店は低圧が標準です。
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
              ※ 単価は2025年10月時点の標準メニューを基準に整理した目安・概算です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別影響度3件 — 大学・大型病院・イベント施設（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              文京区を象徴する大型需要家3業種で、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在エリアの業界平均値と公開事例から整理した代表的なシナリオです。
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
              <Link href="/university-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">大学の電気代見直し</Link>
              、病院は{" "}
              <Link href="/hospital-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">病院の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              文京区固有の電気代上昇要因 — 研究設備・医療機器・イベント・休暇期変動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              文京区の電気代上昇は、研究設備・クリーンルーム・医療機器の特殊負荷、東京ドームのイベントピーク需要、大学長期休暇期の需要変動など、区固有の事業者構成が複合的に影響します。
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
              文京区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              文京区では国補助（SII等）・都独自補助・区独自補助（中小企業エコアクション支援）が組合せ可能です。大規模事業者向けにはSII大企業枠・ZEB支援事業、中小事業者向けには区エコアクション支援が主力となります。
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
              文京区の事業者構成は、大学キャンパス、大型大学病院、東京ドームシティ、中小商業・飲食・観光、公共施設の5層構造です。それぞれ電力消費パターンと契約区分が大きく異なります。
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
              文京区の新電力シェアは2024年時点で30〜35%程度と都内平均並み。大学・大型病院では競争入札による切替が標準化し、複数キャンパス・関連機関の共同調達が特徴的です。中小事業者では切替の余地が大きく残ります。
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
              文京区の省エネは『大学キャンパスの需要最適化＋PPA』『大型病院の高効率化』『イベント施設のピークカット』『中小商店のLED・設備更新』『需要家主導型オフサイトPPA』の5軸が主力です。SII補助・都補助・区補助の組合せで投資回収を短縮できます。
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
              文京区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。文京区は大学・病院の共同調達可否、研究設備・医療機器の特殊負荷把握、RE100対応の有無が特に重要な確認ポイントです。
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
              見直し全体手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで文京区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              文京区は大学・大型病院・イベント施設の特殊な電力負荷構造を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・共同調達・PPAのメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した18%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/taito-ku-business-electricity-cost", title: "台東区（浅草・上野）の法人電気料金", description: "浅草・上野の観光宿泊、御徒町・合羽橋の問屋街に特化した電気代見直しの実務ガイド。" },
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
              { href: "/setagaya-ku-business-electricity-cost", title: "世田谷区の法人電気料金", description: "23区最大人口の住商混在エリア事情。" },
              { href: "/toshima-ku-business-electricity-cost", title: "豊島区の法人電気料金", description: "池袋・サンシャインシティの大型商業事情。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "板橋の中小製造業・物流事情。" },
              { href: "/university-electricity-cost-review", title: "大学の電気代見直し", description: "大学キャンパスの主力打ち手。" },
              { href: "/hospital-electricity-cost-review", title: "病院の電気料金見直し", description: "大型病院の最適化。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小・大型施設の主力補助金。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="文京区の自社条件で電気代リスクを試算する"
            description="東大本郷型大学・大型大学病院・東京ドームシティ・谷根千中小事業者など文京区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。共同調達・PPA・固定プラン切替のROIもあわせて確認できます。"
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
            heading="文京区の電力契約見直し、専門家に相談しませんか？"
            description="区内の大学キャンパス・大型大学病院・東京ドームシティ・中小商店の電気代見直しは事業者規模と用途で論点が大きく変わります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
