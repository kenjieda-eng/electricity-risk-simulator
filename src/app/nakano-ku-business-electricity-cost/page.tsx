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
  "中野区の法人電気料金完全ガイド｜中野駅再開発・中野セントラルパーク・サブカル集積の契約最適化";
const pageDescription =
  "中野区の法人電気料金を地域特化で解説。中野駅周辺再開発（サンプラザ建替え・中野二丁目再開発）、中野セントラルパーク、明治大学中野キャンパス・帝京平成大、中野ブロードウェイのサブカル集積、中野坂上オフィス、住友不動産中野坂上ビルなどの電力契約と中野区エコ事業者支援の活用までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中野区 法人電気料金",
    "中野駅 再開発 電力",
    "中野セントラルパーク 電気代",
    "中野ブロードウェイ 電力",
    "中野区 エコ事業者支援",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/nakano-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/nakano-ku-business-electricity-cost",
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
    label: "中野駅周辺の大規模再開発進行エリア",
    detail:
      "中野区は面積15.59km²と中規模だが、中野駅周辺で大型再開発が複数進行中。中野サンプラザ建替え（2024年閉館・大型複合施設へ建替え予定）、中野二丁目再開発（オフィス・住宅・商業の複合開発）、すでに開業済みの中野セントラルパーク（2012年・中野四季の都市）、中野駅新北口駅前エリア再開発と、今後10年で区内電力需要構造が大きく変わるエリアです。",
  },
  {
    label: "中野セントラルパーク — 中堅オフィス集積",
    detail:
      "中野セントラルパーク（中野四季の都市、2012年開業、延床約36万m²）にはキリンビバレッジ本社、帝京平成大学中野キャンパス、栗田工業、帝人グループ等が入居。中堅企業本社が集積するエリアで、高圧契約クラスの大口需要家が複数立地しています。",
  },
  {
    label: "明治大学中野キャンパス・帝京平成大の電力需要",
    detail:
      "中野四季の都市内には明治大学中野キャンパス（国際日本学部・総合数理学部、約4,000人）と帝京平成大学中野キャンパス（医療系学部含む、約8,000人）が立地。両大学は研究設備・実験室・図書館・空調等の電力負荷が大きく、それぞれ高圧契約クラスの需要家として区内電力需要の中核を担います。",
  },
  {
    label: "中野ブロードウェイのサブカル集積",
    detail:
      "中野ブロードウェイ（中野駅北口・1966年開業、地下1階〜地上4階、テナント約300店）はアニメ・漫画・フィギュア等のサブカル系専門店が集積する独特のエリア。各テナントは小規模（年間使用量3〜15万kWh）で低圧契約が中心、商品ショーケース・店舗照明・空調が消費電力の中心です。",
  },
  {
    label: "中野坂上オフィス・住商混在の周辺エリア",
    detail:
      "中野坂上の住友不動産中野坂上ビル（地上32階・延床約13万m²）・ハーモニータワー等のオフィス集積、東中野・新中野・新井薬師の住商混在エリアが区内の電力需要を構成。新中野・東中野は中小オフィス・飲食店・クリニックが中心で、低圧電力・低圧電灯契約が主軸です。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "中野区内シェア最大。中堅企業本社・大学・大型オフィスビル・中小事業者の双方を顧客とする。2023年6月の規制料金改定で15.9%値上げの影響あり。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "中野区内の新電力シェア上位グループ。中野セントラルパーク・住友不動産中野坂上ビル・大学等で実績多数。固定単価・市場連動の両方を提供。",
  },
  {
    name: "東京ガスの電気",
    role: "ガス併売新電力",
    detail:
      "中野区内のガス契約世帯・事業所と親和性が高い。中野ブロードウェイ・新中野・東中野の中小飲食店・小売店・小規模オフィスでの切替が進む。ガス併売の値引きメリットあり。",
  },
  {
    name: "ミツウロコでんき・auでんき・ソフトバンクでんき",
    role: "通信・流通系新電力",
    detail:
      "通信会社系・流通系の新電力。中小事業者・店舗・クリニック・学習塾・サブカル系小売店向けで活発。携帯料金や流通ポイントとのセット割引が訴求点。",
  },
  {
    name: "みんな電力・自然電力・アスエネ",
    role: "再エネ特化型新電力",
    detail:
      "100%再エネ電源を提供する新電力。SDGs志向の大学・中堅企業本社・カフェで採用が進む。料金水準はやや高めだが、ESG対応の観点で選択肢。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で都内でも新電力の新規受付停止・撤退が相次ぎました。2024年以降は再開傾向で、現在は15社前後が中野区内法人向け高圧で新規受付中。中小法人向けの低圧も10社前後で活発に営業中。最新の受付状況・撤退情報は新電力ネット等で要確認です。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数で、中野セントラルパーク・住友不動産中野坂上ビル・大学では競争入札による単価交渉が一般化しています。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。中野区内では中野セントラルパーク全体・住友不動産中野坂上ビル等の大型オフィスビル群が対象。新電力競争による圧力大で、競争入札で1〜2円/kWh単位の単価交渉が可能なケース多数です。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力』は基本料金約1,200円/kW、電力量料金17〜20円/kWh+調整項目。中野ブロードウェイ・サンモール商店街・新中野・東中野の中小飲食店・小売店・クリニックでの利用が中心。年間使用量3〜30万kWhレンジが典型。",
  },
  {
    label: "低圧電灯（事務所・小規模店舗）の単価水準",
    detail:
      "『従量電灯C』は基本料金約290円/kVA、電力量料金第1段階29.80円〜第3段階37.45円/kWhの3段階制。小規模オフィス・店舗・サブカル系小売店で利用が多い。新電力切替で基本料金圧縮と段階単価フラット化で5〜10%程度の削減が見込めるケースが多いです。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型オフィスビル・中野セントラルパーク級（特別高圧 2,200kW、年間 1,500万kWh）",
    before:
      "Before: 中野駅周辺の大型オフィスビルA（地上21階・延床約8万m²）。冷暖房・照明・エレベーター・テナント供給が中心。年間電気代 約4.5億円。市場連動プランで2023年夏は月最大7,300万円の請求。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／全館LED化（投資1,800万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入＋テナント別需要見える化／需要家主導型オフサイトPPAで再エネ調達／屋上太陽光150kW導入。",
    result:
      "Result: 年間電気代 約4.5億円 → 約3.69億円（▲18%、▲8,100万円）／契約kW 2,200→1,950／投資回収 補助金後 2.2年。",
  },
  {
    title: "業種2: 大学キャンパス・明治大中野クラス（高圧 1,500kW、年間 900万kWh）",
    before:
      "Before: 中野エリアの大学キャンパスB（学生約4,000人＋教職員・研究設備・図書館）。研究設備・空調・照明・PC教室・実験室が中心。年間電気代 約2.43億円。複数キャンパス分散契約で交渉力に課題、燃料費調整額の影響も直撃。",
    after:
      "After: 複数キャンパスの一括共同調達による競争入札／全国系新電力との固定3年契約獲得／LED化・高効率空調機への更新（投資1,400万円、SII補助1/2活用）／BEMS導入で需要見える化＋デマンド制御／需要家主導型オフサイトPPAで再エネ調達／長期休暇期の運用最適化。",
    result:
      "Result: 年間電気代 約2.43億円 → 約2.0億円（▲18%、▲4,300万円）／契約kW 1,500→1,350／投資回収 補助金後 2.5年。",
  },
  {
    title: "業種3: 中野ブロードウェイ・サブカル系小売（低圧電力 20kW、年間 4.5万kWh）",
    before:
      "Before: 中野ブロードウェイ内のサブカル系専門店C（店舗面積40m²・営業10時間・商品ショーケース多数）。商品ショーケース・店舗照明・空調・展示用LEDが消費電力の中心。年間電気代 約131万円。東電EP従量電灯C＋低圧電力の混在契約で2023年夏は月最大16万円の請求。",
    after:
      "After: 全国系新電力の固定2年プランに切替／全LED化／高効率冷蔵ショーケースに更新（区エコ事業者支援1/3活用、投資50万円）／高効率エアコンに更新／需要見える化メーター導入。",
    result:
      "Result: 年間電気代 約131万円 → 約107万円（▲18%、▲24万円）／契約kW 20→18／投資回収 補助金後 1.7年。",
  },
];

const costFactors = [
  {
    label: "再開発進行による電力需要構造変化",
    detail:
      "中野サンプラザ建替え・中野二丁目再開発・新北口駅前エリア再開発で、2025〜2030年にかけて区内電力需要構造が大きく変わる予定。再開発エリアのテナント・出店事業者は事業計画段階での電力契約戦略が重要です。",
  },
  {
    label: "中堅企業本社の高負荷率需要",
    detail:
      "キリンビバレッジ本社・栗田工業・帝人グループ等の中堅企業本社は24時間稼働のサーバルーム・データ処理設備を持つケースが多い。一般オフィスより負荷率が高く、契約kW設定の最適化と高効率設備への投資メリットが大きい。",
  },
  {
    label: "大学キャンパスの長期休暇期変動",
    detail:
      "夏季・冬季の長期休暇期は学生・教職員が減るため需要が大幅減（30〜50%減）。需要パターンに合わせた契約設計（季節別料金・基本料金最適化）が論点。新電力切替時のメニュー選定で重要な要素です。",
  },
  {
    label: "中野ブロードウェイの店舗構造特殊性",
    detail:
      "中野ブロードウェイは1966年開業の古い商業施設で、各テナントの電気設備が個別に異なる。ビル一括電気契約と各店舗の個別契約が混在し、ビル管理組合経由の契約変更が必要なケースもあります。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇傾向。年間1,000万kWh使用の大規模事業者で年4,000万円規模の負担。減免制度の対象は限定的ですが、適用可能性のある事業者は申請を要検討。",
  },
];

const subsidies = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率コンプレッサー・LED・冷凍冷蔵設備・空調・送風機・ヒートポンプ",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "中野区内では中野セントラルパーク・住友不動産中野坂上ビル・大学・中堅企業本社で採択実績多数。LED化・空調更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "区内では屋根面積が限られるため、屋上太陽光より需要家主導型オフサイトPPAの活用が現実的。大型オフィスビル・大学で採択実績。",
  },
  {
    name: "中野区 エコ事業者支援（区独自）",
    target: "区内中小事業者の省エネ機器導入（LED・空調・冷凍冷蔵設備等）・エコ事業者認定",
    rate: "1/3〜1/2、上限50〜200万円（年度により変動）",
    note: "区独自の補助。区内の中小飲食・小売・サブカル系専門店・クリニック・学習塾の主力打ち手。SII補助との重複は要事前確認。詳細は中野区産業振興センターまで。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都独自の補助。建築物環境計画書制度・キャップ&トレード制度の対象事業所には別途インセンティブあり。中野区内の大型オフィス・大学で実績多数。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "中野駅周辺再開発の新築案件で活用実績多数。中野サンプラザ建替え・中野二丁目再開発の新棟でZEB志向設計が標準化。",
  },
];

const industryProfile = [
  {
    label: "中堅企業本社（中野セントラルパーク・住友不動産中野坂上ビル）",
    detail:
      "キリンビバレッジ本社、栗田工業、帝人グループ、その他中堅企業本社群。年間使用量500万〜2,000万kWh規模の高圧・特別高圧契約。24時間稼働のサーバルーム・データ処理設備を含むケースが多い。",
  },
  {
    label: "大学キャンパス（明治大中野・帝京平成大）",
    detail:
      "中野四季の都市内の大学群。年間使用量500万〜1,000万kWh規模の高圧契約。研究設備・実験室・図書館・空調負荷が中心。長期休暇期の需要減を活かした契約設計が論点。",
  },
  {
    label: "中野ブロードウェイ・サンモール商店街のサブカル・中小商業",
    detail:
      "中野ブロードウェイ（テナント約300）、中野サンモール商店街、中野駅周辺の中小飲食店・小売店群。年間使用量3万〜30万kWh規模の低圧契約が中心。サブカル系専門店の独特な集積が特徴。",
  },
  {
    label: "オフィス・複合施設（中野坂上・中野駅周辺）",
    detail:
      "住友不動産中野坂上ビル・ハーモニータワー等のオフィス群、中野駅周辺の中堅オフィス。年間使用量200万〜1,500万kWh規模の高圧契約が中心。",
  },
  {
    label: "住商混在エリアの中小事業者（新中野・東中野・新井薬師・鷺宮）",
    detail:
      "新中野・東中野・新井薬師・鷺宮・野方等の住商混在エリアの中小飲食店・小売店・クリニック・学習塾。年間使用量3万〜20万kWh規模の低圧契約が中心。",
  },
];

const switchingReality = [
  {
    label: "中野区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは2024年時点で30〜35%程度と都内平均並み。中野セントラルパーク・住友不動産中野坂上ビル・大学では競争入札による切替が標準化。中野ブロードウェイ・住商混在エリアの中小事業者では切替の余地が大きく残ります。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内事業者の多くが市場連動から固定プランへ回帰。24時間稼働のサーバルームを持つ中堅企業本社・大学は特に市場連動を敬遠。中小事業者でも市場連動経験者は固定プラン回帰が多数。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制・契約変更不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。区内中小事業者は『慣性』で東電EP継続のケースが多く、相見積取得で初めて差額に気付くパターンが典型的です。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②夏季ピーク需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が区内では特に重要。中堅企業本社・大学では④と⑤が特に重視されます。",
  },
  {
    label: "再開発エリアの契約戦略",
    detail:
      "中野サンプラザ建替え・中野二丁目再開発で新規入居予定の事業者は、事業計画段階で電力契約戦略を立てることが重要。再開発ビルのテナント契約条件（電気代上乗せの有無・基準単価）も併せて確認が必要です。",
  },
];

const energySaving = [
  {
    label: "大型オフィスビルの高効率化＋PPA",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、需要家主導型オフサイトPPA活用で電力▲20〜30%。SII補助＋都補助の組合せで投資回収 1.5〜2.5年。中野セントラルパーク等で実績多数。",
  },
  {
    label: "大学キャンパスの需要最適化",
    detail:
      "長期休暇期と通常学期の需要差を活かす契約設計、研究設備の運用最適化、BEMS導入で電力▲15〜25%。蓄電池導入で需給管理を高度化する事例も増加。",
  },
  {
    label: "中野ブロードウェイ・サブカル店舗のLED・ショーケース更新",
    detail:
      "区内中小事業者の主力打ち手。全LED化、高効率冷蔵ショーケースへの更新、高効率エアコンへの更新で電力▲15〜25%。区エコ事業者支援＋SII補助＋都補助の組合せで投資回収 1.5〜3年。",
  },
  {
    label: "中堅企業本社のサーバルーム最適化",
    detail:
      "サーバルームの冷却最適化、外気冷房（フリークーリング）併用、PUE改善で電力▲15〜25%。サーバ更新による電力密度向上も効果大。投資回収 2〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言企業を中心に普及拡大。CO2削減と電気代削減を両立できる。中堅企業本社・大学で導入検討が活発化。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "中野ブロードウェイ等のビル一括契約・個別契約の構造を把握したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『建築物環境計画書制度』『キャップ&トレード制度』の対象事業所か確認したか",
  "中野区エコ事業者支援の活用可否を確認したか",
  "SII補助・都補助・区補助の併用可否を産業振興センター等で確認したか",
  "再開発エリア入居予定の場合、事業計画段階で電力契約戦略を立てたか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
];

const faqItems = [
  { question: "中野区の法人電気代水準は23区内で高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし中野区は中堅企業本社・大学・サブカル系小売など多様な事業者構成を持ち、それぞれの業態特性に応じた契約最適化メリットが大きいエリア。新電力切替で5〜15%、設備更新を含めた総合最適化で15〜25%の削減余地があるのが典型パターンです。" },
  { question: "中野駅周辺再開発エリアの電力契約はどうなりますか？", answer: "中野サンプラザ建替え・中野二丁目再開発・新北口駅前エリア再開発の新棟は、いずれもZEB志向の高効率設計が標準化される見込み。テナント契約条件（電気代上乗せの有無・基準単価）は再開発事業者により異なるため、入居予定事業者は事業計画段階で契約条件を確認し、自社の電力契約戦略を立てることが重要です。" },
  { question: "中野セントラルパーク・住友不動産中野坂上ビル等の大型オフィスビルの電気代対策は？", answer: "①特別高圧・高圧の競争入札による単価最適化、②全館LED化・高効率空調機への更新（SII補助1/2活用）、③BEMS導入＋テナント別需要見える化、④需要家主導型オフサイトPPAで再エネ調達、⑤屋上太陽光＋蓄電池導入、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "明治大中野・帝京平成大等の大学キャンパスの電気代対策は？", answer: "①複数キャンパスの共同調達による競争入札、②LED化・高効率空調機への更新（SII補助1/2活用）、③BEMS導入＋需要見える化、④長期休暇期の運用最適化、⑤需要家主導型オフサイトPPAで再エネ調達、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "中野区独自の補助金にはどんなものがありますか？", answer: "中野区エコ事業者支援（年度により内容変動・上限50〜200万円・補助率1/3〜1/2）が代表的。区内中小事業者の省エネ機器導入とエコ事業者認定に活用可能。中野区産業振興センター経由で申請。詳細は最新の区公式の公募要領を確認してください。SII補助・都補助との併用可否は事業ごとに要確認です。" },
  { question: "中野ブロードウェイ・サブカル系小売店の電気代削減策は？", answer: "①新電力相見積（5〜10社）で単価比較、②LED化・高効率冷蔵ショーケースへの更新（区エコ事業者支援活用）、③高効率エアコンへの更新、④商品ショーケース・展示用LEDの最適化、⑤需要見える化メーター導入、の5本柱。ただしビル一括契約と個別契約の構造を確認することが先決です。区内典型事例では年間電気代の15〜20%削減が見込めます。" },
  { question: "中野区で再エネ電源を調達したい場合の選択肢は？", answer: "①需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、②再エネ特化型新電力（みんな電力・自然電力・アスエネ等）、③再エネ証書購入、④屋上太陽光（屋上面積が確保できる場合）、の4手段。大型オフィスビル・大学・中堅企業本社ではオフサイトPPAが急速に普及。中小事業者は再エネ特化型新電力が現実的選択肢です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・24時間対応の有無を確認することが重要です。" },
];

const sourcesItems = [
  { name: "中野区 産業振興センター（補助金情報）", url: "https://www.city.tokyo-nakano.lg.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁(省エネポータル)", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット(電力単価・スポット価格・新電力比較)", url: "https://pps-net.org/unit" },
];

export default function NakanoKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/nakano-ku-business-electricity-cost"
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
          <span className="text-slate-800">中野区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            中野区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            中野区は中野駅周辺で大型再開発が複数進行中（中野サンプラザ建替え・中野二丁目再開発・新北口駅前再開発）で、今後10年で区内電力需要構造が大きく変わります。中野セントラルパーク（キリンビバレッジ本社・帝京平成大等）、明治大学中野キャンパス、住友不動産中野坂上ビル、中野ブロードウェイのサブカル集積など、多様な事業者構成を持ちます。本ページでは区内法人の電気代水準、業種別影響度、固有の課題、契約見直しの具体策、中野区エコ事業者支援の活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>中野区固有の電力事情（再開発・中堅企業本社・大学・サブカル集積）</li>
              <li>大型オフィスビル・大学・サブカル系小売のBefore/After削減事例</li>
              <li>中野区エコ事業者支援の活用パターン</li>
              <li>区内事業者向け契約見直し12項目チェックリスト</li>
              <li>再開発エリア入居予定事業者の電力契約戦略</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中野区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中野区は中野駅周辺の大規模再開発進行エリアであり、中野セントラルパーク（中堅企業本社集積）、明治大中野・帝京平成大の大学キャンパス、中野ブロードウェイのサブカル集積、中野坂上のオフィスビル群、住商混在の周辺エリアと多層構造の電力需要を持ちます。
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
              中野区では東電EP以外に15社前後の新電力が法人向け高圧で活発に営業中です。中野セントラルパーク・住友不動産中野坂上ビル・大学では競争入札による切替が標準化、中小事業者向けにも10社前後が新規受付中です。
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
              <Link href="/how-to-choose-new-electricity-supplier" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">新電力選びのポイント</Link>
              、撤退情報は{" "}
              <Link href="/region-supplier-withdrawal-map" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">エリア別新電力撤退状況マップ</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中野区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（特別高圧・高圧・低圧電力・低圧電灯）によって単価水準が大きく異なります。中野セントラルパーク・住友不動産中野坂上ビルは特別高圧・高圧、大学は高圧、中野ブロードウェイ・住商混在エリア中小事業者は低圧が標準です。
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
              業種別影響度3件 — 大型オフィス・大学・サブカル系小売（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中野区の代表的な業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在エリアの業界平均値と公開事例から整理した代表的なシナリオです。
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
              <Link href="/office-building-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オフィスビルの電気料金見直し</Link>
              、大学は{" "}
              <Link href="/university-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">大学の電気代見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中野区固有の電気代上昇要因 — 再開発・中堅本社・大学・ブロードウェイ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中野区の電気代上昇は、再開発進行による電力需要構造変化、中堅企業本社の高負荷率需要、大学キャンパスの長期休暇期変動、中野ブロードウェイの店舗構造特殊性など、区固有の事業者構成が複合的に影響します。
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
              中野区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中野区では国補助（SII等）・都独自補助・区独自補助（エコ事業者支援）が組合せ可能です。特に区独自補助は中小飲食・小売・サブカル系専門店向けに使いやすい設計です。
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
              中野区の事業者構成は、中堅企業本社、大学キャンパス、中野ブロードウェイ・サンモール商店街のサブカル・中小商業、オフィス・複合施設、住商混在エリアの中小事業者の5層構造です。それぞれ電力消費パターンと契約区分が大きく異なります。
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
              中野区の新電力シェアは2024年時点で30〜35%程度と都内平均並み。大型オフィスビル・大学では競争入札による切替が標準化、中小事業者では切替の余地が大きく残ります。再開発エリアの新規入居予定事業者は事業計画段階での電力契約戦略が重要論点です。
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
              中野区の省エネは『大型オフィスビルの高効率化＋PPA』『大学キャンパスの需要最適化』『ブロードウェイ・サブカル店舗のLED・ショーケース更新』『中堅企業本社のサーバルーム最適化』『需要家主導型オフサイトPPA』の5軸が主力です。SII・都・区補助の組合せで投資回収を短縮できます。
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
              中野区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。中野区はブロードウェイ等のビル一括契約構造の把握・再開発エリア入居予定事業者の事業計画段階対応・区独自補助の活用が特に重要な確認ポイントです。
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
              シミュレーターで中野区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中野区は再開発進行・中堅企業本社の高負荷率・大学長期休暇期変動・ブロードウェイ店舗構造など固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・区補助活用・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "東大本郷・大型病院・東京ドーム事情。" },
              { href: "/taito-ku-business-electricity-cost", title: "台東区の法人電気料金", description: "浅草・上野観光・問屋街事情。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "板橋の中小製造業・物流事情。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "中堅・大型オフィスビルの主力打ち手。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="中野区の自社条件で電気代リスクを試算する"
            description="中野セントラルパーク・大学・住友不動産中野坂上ビル・中野ブロードウェイ・再開発エリアなど中野区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。区独自補助・SII補助・固定プラン切替のROIもあわせて確認できます。"
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
            heading="中野区の電力契約見直し、専門家に相談しませんか？"
            description="区内の大型オフィス・大学・中堅企業本社・サブカル系小売・再開発エリア入居予定事業者の電気代見直しは事業者規模と立地で論点が大きく変わります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
