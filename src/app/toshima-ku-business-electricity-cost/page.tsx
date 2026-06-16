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
  "豊島区の法人電気料金完全ガイド｜池袋ターミナル・サンシャインシティ・大型商業ホテルの契約最適化";
const pageDescription =
  "豊島区の法人電気料金を地域特化で解説。池袋（JR・東武・西武の3社競合ターミナル）、サンシャインシティの自家発電・地域冷暖房、東池袋Hareza・Brillia Tower再開発、巣鴨商店街中小事業者、目白・大塚の住商混在エリアの電力契約と豊島区独自のエコ・テナント運営支援までを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "豊島区 法人電気料金",
    "池袋 商業 電気代",
    "サンシャインシティ 電力",
    "豊島区 エコテナント",
    "Hareza池袋 電力",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/toshima-ku-business-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/toshima-ku-business-electricity-cost",
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
    label: "池袋ターミナル — 23区有数の電力需要密集地",
    detail:
      "豊島区は面積13.01km²と23区2番目に狭いが、池袋駅の1日あたり乗降客数は約260万人（JR・東武・西武・東京メトロ4社合計）で新宿駅に次ぐ国内2位。駅周辺1km圏内に大型百貨店（西武・東武・パルコ）・サンシャインシティ・東池袋Brillia Tower・Hareza池袋等の大型商業/オフィス複合施設が密集し、23区内でも極めて高い電力需要密度を持つエリアです。",
  },
  {
    label: "サンシャインシティの自家発電・地域冷暖房システム",
    detail:
      "サンシャインシティ（ワールドインポートマート・プリンスホテル・サンシャイン60等を含む複合施設、延床約59万m²）は自家発電設備と地域冷暖房（DHC）システムを保有する区内最大級の電力需要家。特別高圧契約に加え、冷温水の地域供給も行う独自エネルギーインフラを持ち、周辺施設へのエネルギー安定供給に貢献しています。",
  },
  {
    label: "東池袋・南池袋の再開発と高層化",
    detail:
      "東池袋Brillia Tower（2015年）・Hareza池袋（2020年）・としま区民センター等の大型再開発で電力需要密度が継続上昇中。区役所・公共ホール・オフィス・商業・住宅を複合する複合再開発が特徴で、新築ビルはZEB志向の高効率設計が標準化しています。",
  },
  {
    label: "巣鴨・大塚・目白・駒込の住商混在エリア",
    detail:
      "巣鴨商店街（とげぬき地蔵周辺）、大塚（駅前再開発・ホテル）、目白（学習院大）、駒込（住商）など、池袋以外のエリアは中小商店・飲食店・住宅併設事業者が中心。低圧電力・低圧電灯契約が大半で、池袋大型施設とは契約構造が大きく異なります。",
  },
  {
    label: "気象条件と冷暖房需要の特徴",
    detail:
      "23区西北部に位置する豊島区はヒートアイランド傾向で夏季最高気温は周辺県より2〜3℃高い。年間冷房度日（CDD24）は1,500以上。商業集積エリアでは商業ビル・ホテル・百貨店の冷房負荷が需要ピークの中心を占め、夏季7〜8月の電力需要が年間ピークとなります。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者",
    detail:
      "豊島区内シェア最大。高圧・特別高圧の標準メニューは『業務用季節別時間帯別電力』『業務用高圧電力』など。池袋大型百貨店・サンシャインシティ・Hareza池袋等の大規模事業者と中小商店双方を顧客とする。2023年6月の規制料金改定で15.9%値上げの影響あり。",
  },
  {
    name: "Looopでんき・ENEOSでんき・出光昭和シェルでんき",
    role: "全国系新電力",
    detail:
      "豊島区内の新電力シェア上位グループ。池袋大型商業施設・ホテル・オフィスビルで実績多数。固定単価・市場連動の両方を提供。中小飲食店・小売店向けプランも展開。",
  },
  {
    name: "東京ガスの電気",
    role: "ガス併売新電力",
    detail:
      "豊島区内のガス契約世帯・事業所と親和性が高い。池袋・巣鴨・大塚・目白の小売店・飲食店・小規模オフィスでの切替が進む。ガス併売の値引きメリットあり。",
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
      "100%再エネ電源を提供する新電力。豊島区エコ・テナント運営支援対象店舗・SDGs志向の事業者で採用が進む。料金水準はやや高めだが、ESG対応の観点で選択肢。",
  },
  {
    name: "撤退・新規受付状況",
    role: "市場動向",
    detail:
      "2022〜2023年の市場高騰局面で都内でも新電力の新規受付停止・撤退が相次ぎました。2024年以降は再開傾向で、現在は15社前後が豊島区内法人向け高圧で新規受付中。中小法人向けの低圧も10社前後で活発に営業中。最新の受付状況・撤退情報は新電力ネット等で要確認です。",
  },
];

const priceBenchmark = [
  {
    label: "高圧電力（業務用）の単価水準",
    detail:
      "東電EP『業務用高圧電力』の電力量料金は18〜22円/kWh（夏季・その他季・時間帯により変動）。燃料費調整額（2024〜2025年は+3.0〜+4.5円/kWh）と再エネ賦課金（2025年度3.98円/kWh）を加味すると実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケース多数で、池袋大型商業施設は競争入札による単価交渉が一般化しています。",
  },
  {
    label: "特別高圧電力の単価水準",
    detail:
      "特別高圧（2,000kW超）の標準メニューは電力量料金17〜20円/kWh+調整項目。豊島区内ではサンシャインシティ・池袋大型百貨店・Hareza池袋等が対象。新電力競争による圧力大で、競争入札で1〜2円/kWh単位の単価交渉が可能なケース多数です。",
  },
  {
    label: "低圧電力（事業用）の単価水準",
    detail:
      "東電EP『低圧電力』は基本料金約1,200円/kW、電力量料金17〜20円/kWh+調整項目。巣鴨商店街・大塚・目白・駒込の中小飲食店・小売店・クリニックでの利用が中心。年間使用量3〜30万kWhレンジが典型。",
  },
  {
    label: "低圧電灯（事務所・小規模店舗）の単価水準",
    detail:
      "『従量電灯C』は基本料金約290円/kVA、電力量料金第1段階29.80円〜第3段階37.45円/kWhの3段階制。小規模オフィス・店舗で利用が多い。新電力切替で基本料金圧縮と段階単価フラット化で5〜10%程度の削減が見込めるケースが多いです。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型商業施設・池袋百貨店型（特別高圧 2,500kW、年間 1,800万kWh）",
    before:
      "Before: 池袋駅周辺の大型百貨店A社（地下2階・地上12階）。冷暖房・照明・エレベーター・エスカレーター・テナント供給が中心。年間電気代 約5.4億円。市場連動プランで2023年夏は月最大8,800万円の請求。",
    after:
      "After: 特別高圧の固定5年契約（全国系新電力との競争入札で獲得）／全館LED化（投資2,200万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入＋テナント別需要見える化／屋上太陽光300kW＋蓄電池導入。",
    result:
      "Result: 年間電気代 約5.4億円 → 約4.43億円（▲18%、▲9,700万円）／契約kW 2,500→2,200／投資回収 補助金後 2.1年。",
  },
  {
    title: "業種2: ホテル業・池袋大型シティホテル（高圧 1,000kW、年間 700万kWh）",
    before:
      "Before: 池袋エリアの中規模シティホテルB（客室250室・宴会場・レストラン併設）。24時間稼働・空調・客室電力・厨房・洗濯が中心。年間電気代 約1.93億円。燃料費調整額上限なしの東電EP契約で2023年夏は月最大2,200万円の請求。",
    after:
      "After: 全国系新電力との競争入札で固定3年契約獲得／全館LED化（投資950万円、SII補助1/2活用）／高効率空調機への更新／BEMS導入で需要見える化＋デマンド制御／客室シーン制御による省エネ運用。",
    result:
      "Result: 年間電気代 約1.93億円 → 約1.60億円（▲17%、▲3,300万円）／契約kW 1,000→900／投資回収 補助金後 2.0年。",
  },
  {
    title: "業種3: 中小商業・巣鴨商店街の老舗店舗（低圧電力 30kW、年間 7万kWh）",
    before:
      "Before: 巣鴨商店街の老舗物販店C社（店舗面積100m²・営業10時間）。照明・空調・冷蔵ショーケース・換気が中心。年間電気代 約205万円。東電EP従量電灯C＋低圧電力の混在契約で2023年夏は月最大25万円の請求。",
    after:
      "After: 全国系新電力の固定2年プランに切替／全LED化／高効率冷蔵ショーケースに更新（区エコ・テナント運営支援補助1/3活用、投資80万円）／高効率エアコンに更新／需要見える化メーター導入。",
    result:
      "Result: 年間電気代 約205万円 → 約168万円（▲18%、▲37万円）／契約kW 30→27／投資回収 補助金後 1.8年。",
  },
];

const costFactors = [
  {
    label: "池袋ターミナルの極端な需要密度",
    detail:
      "1km圏内に大型百貨店3社（西武・東武・パルコ）、サンシャインシティ、Brillia Tower、Hareza池袋等が密集し、区内電力需要の60〜70%が池袋エリアに集中。需給ひっ迫局面では池袋エリアの集中的なDR要請対象となるリスクがあります。",
  },
  {
    label: "サンシャインシティ・地域冷暖房依存施設の特殊性",
    detail:
      "サンシャインシティ地域冷暖房（DHC）に接続する周辺施設は、電力契約と冷温水契約を組合せた特殊な料金体系。DHC単価変動の影響を受けるため、電力契約見直しと併せてDHC契約条件の確認も必要です。",
  },
  {
    label: "ホテル業の24時間稼働コスト",
    detail:
      "池袋エリアの大型シティホテル・ビジネスホテルは24時間稼働・客室電力・厨房・空調負荷が大きい。インバウンド観光客回復で稼働率が上昇し電力消費も増加傾向。電気代上昇局面では客室単価への転嫁が難しく契約最適化が経営課題に。",
  },
  {
    label: "再開発エリアの新規大型施設電力負荷",
    detail:
      "東池袋Brillia Tower・Hareza池袋・としま区民センター等の再開発で延床面積が拡大、各テナント・共用部の電力負荷が増加。ZEB志向の高効率設計が標準化しているが、運用面での最適化が引き続き課題です。",
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
    note: "豊島区内では池袋大型百貨店・ホテル・サンシャインシティ等で採択実績多数。LED化・空調更新・厨房設備更新で安定採択。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池の同時導入",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "区内では屋根面積が限られるため、屋上太陽光より需要家主導型オフサイトPPAの活用が現実的。大型商業施設・ホテル・サンシャインシティで採択実績。",
  },
  {
    name: "豊島区 エコ・テナント運営支援（区独自）",
    target: "区内テナント・店舗の省エネ機器導入・運営改善",
    rate: "1/3〜1/2、上限50〜200万円（年度により変動）",
    note: "区独自の補助。区内の中小商業・飲食・サービス事業者の主力打ち手。SII補助との重複は要事前確認。詳細は豊島区環境課まで。",
  },
  {
    name: "東京都 地球温暖化対策報告書制度関連補助",
    target: "中小規模事業所のCO2削減設備導入",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "東京都独自の補助。建築物環境計画書制度・キャップ&トレード制度の対象事業所には別途インセンティブあり。池袋大型施設で実績多数。",
  },
  {
    name: "東京都 ZEB・ZEH支援事業",
    target: "ネット・ゼロ・エネルギー・ビル/ハウスの新築・改修",
    rate: "1/3〜2/3、上限事業規模に応じる",
    note: "東池袋・南池袋再開発の新築・改修案件で活用実績。Hareza池袋・としま区民センター等のZEB志向設計と親和性高い。",
  },
];

const industryProfile = [
  {
    label: "大型百貨店・商業施設（池袋）",
    detail:
      "西武・東武・パルコ・サンシャインシティ等の大型商業施設群。年間使用量1,000万〜3,000万kWh規模の高圧・特別高圧契約が中心。テナント別請求・共用部一括契約の組合せが標準。",
  },
  {
    label: "ホテル業（池袋・大塚）",
    detail:
      "池袋プリンスホテル・サンシャインシティプリンスホテル等の大型シティホテル、池袋・大塚エリアのビジネスホテル群。年間使用量200万〜800万kWh規模の高圧契約が中心。",
  },
  {
    label: "中小商業・飲食（池袋・巣鴨・大塚・目白）",
    detail:
      "池袋駅周辺の中小飲食店・小売店、巣鴨商店街の老舗物販店、大塚の中小商業、目白・駒込の住商混在事業者。年間使用量3万〜30万kWh規模の低圧契約が中心。",
  },
  {
    label: "オフィス・複合施設（東池袋・南池袋）",
    detail:
      "東池袋Brillia Tower・Hareza池袋・としま区民センター等のオフィス・公共・商業複合施設。年間使用量500万〜2,000万kWh規模の高圧・特別高圧契約。",
  },
  {
    label: "鉄道事業者本社（東武・西武・東京メトロ）",
    detail:
      "東武鉄道・西武鉄道の本社機能、東京メトロの主要施設が豊島区内に立地。本社オフィス・関連施設の電力契約に加え、鉄道事業者は変電所等の特殊電力契約も保有。",
  },
];

const switchingReality = [
  {
    label: "豊島区内の新電力切替実態",
    detail:
      "区内法人の新電力シェアは2024年時点で30〜35%程度と都内平均並み。池袋大型商業施設・ホテルは競争入札による切替が標準化。一方、巣鴨・大塚・目白の中小商店は東電EP継続率が高く、新電力切替の余地が大きい。",
  },
  {
    label: "市場連動プランのリスク認識",
    detail:
      "2022〜2023年の市場高騰で区内事業者の多くが市場連動から固定プランへ回帰。24時間稼働のホテル・大型商業施設は特に市場連動を敬遠。中小事業者でも市場連動経験者は固定プラン回帰が多数。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・地域貢献・大規模災害時の復旧体制・契約変更不要。デメリット: 単価が新電力比1〜3円/kWh高め、燃料費調整額上限なし。区内中小商店は『慣性』で東電EP継続のケースが多く、相見積取得で初めて差額に気付くパターンが典型的です。",
  },
  {
    label: "新電力選定のポイント",
    detail:
      "①東電エリア供給実績の有無、②夏季ピーク需要への対応力、③固定単価期間（3〜5年）の確実性、④燃料費調整額の有無・上限、⑤RE100・SBT対応の再エネ調達力、の5点が区内では特に重要。ホテル・大型商業施設では特に④と⑤が重視されます。",
  },
  {
    label: "需要家主導型PPAの活用",
    detail:
      "区内屋根面積制約のため、大型施設ではオフサイト型PPAが普及拡大。福島・茨城・栃木・千葉の大規模太陽光・風力電源と直接契約で初期投資ゼロで再エネ調達。サンシャインシティ・大型百貨店・大型ホテルで導入検討が進む。",
  },
];

const energySaving = [
  {
    label: "大型商業施設の高効率化",
    detail:
      "全館LED化、高効率空調機への更新、BEMS導入、外気冷房（フリークーリング）併用で電力▲20〜30%。SII補助＋都補助の組合せで投資回収 1.5〜2.5年。池袋大型百貨店で実績多数。",
  },
  {
    label: "ホテル業の高効率化",
    detail:
      "ホテルは客室電力（空調・照明・冷蔵庫）と共用部（厨房・宴会場・大浴場）の最適化が課題。客室シーン制御・LED化・高効率空調機・BEMS導入で電力▲15〜25%。投資回収 2〜3年。",
  },
  {
    label: "サンシャインシティ等DHC接続施設の最適化",
    detail:
      "地域冷暖房（DHC）契約と電力契約のセット最適化が必要。冷温水の使用パターン分析、ピーク需要時の運用最適化、BEMS連携で電力＋冷温水コスト▲10〜20%の事例。",
  },
  {
    label: "中小商店・飲食のLED化・設備更新",
    detail:
      "区内中小事業者の主力打ち手。全LED化、高効率冷蔵ショーケース・厨房冷凍冷蔵への更新、高効率エアコンへの更新で電力▲15〜25%。区エコ・テナント運営支援＋SII補助＋都補助の組合せで投資回収 1.5〜3年。",
  },
  {
    label: "需要家主導型オフサイトPPA",
    detail:
      "県外大規模太陽光・風力電源との直接契約で初期投資ゼロで再エネ調達可能。RE100宣言企業を中心に普及拡大。CO2削減と電気代削減を両立できる。池袋大型施設で導入検討が活発化。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "夏季ピーク月（7〜8月）と冬季ピーク月（1〜2月）の使用量を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "都内新電力10〜15社からの相見積を取得し、固定vs市場連動を比較したか",
  "サンシャインシティDHC接続施設の場合、冷温水契約条件も併せて確認したか",
  "再エネ賦課金減免制度（年間1,000万kWh以上・電気使用密度要件）の対象に該当するか",
  "東京都『建築物環境計画書制度』『キャップ&トレード制度』の対象事業所か確認したか",
  "豊島区エコ・テナント運営支援の活用可否（事業内容・スケジュール）を確認したか",
  "SII補助・都補助・区補助の併用可否を環境課等で確認したか",
  "RE100・SBT対応の再エネ電源契約（オフサイトPPA含む）を試算したか",
  "DR（デマンドレスポンス）契約の参加可否を検討したか",
];

const faqItems = [
  { question: "豊島区の法人電気代水準は23区内で高いですか？", answer: "東電EPの単価体系は都内一律のため、単価ベースでは23区平均と同水準です。ただし豊島区は池袋エリアに大型商業施設・ホテル・複合施設が極端に密集し、夏季冷房需要のピークが他区より高い傾向。新電力切替で5〜15%、設備更新を含めた総合最適化で15〜25%の削減余地があるのが典型パターンです。" },
  { question: "サンシャインシティの地域冷暖房と電力契約はどう関係しますか？", answer: "サンシャインシティはDHC（地域冷暖房）システムを保有し、接続する周辺施設は冷温水を購入する形になります。電力契約とは別途のDHC契約があり、両者を併せた総合エネルギーコストで判断する必要があります。電力契約見直し時にはDHC契約条件・単価変動も併せて確認することが重要です。" },
  { question: "池袋大型百貨店の電気代対策は？", answer: "①特別高圧の競争入札による単価最適化、②全館LED化・高効率空調機への更新（SII補助1/2活用）、③BEMS導入＋テナント別需要見える化、④需要家主導型オフサイトPPAで再エネ調達、⑤屋上太陽光＋蓄電池導入、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "豊島区独自の補助金にはどんなものがありますか？", answer: "豊島区エコ・テナント運営支援（年度により内容変動・上限50〜200万円・補助率1/3〜1/2）が代表的。区内中小商業・飲食・サービス事業者のLED・空調・冷蔵設備の更新に活用可能。豊島区環境課経由で申請。詳細は最新の区公式の公募要領を確認してください。SII補助・都補助との併用可否は事業ごとに要確認です。" },
  { question: "巣鴨商店街・大塚エリアの中小事業者の電気代削減策は？", answer: "①新電力相見積（5〜10社）で単価比較、②LED化・高効率冷蔵ショーケースへの更新（区エコ・テナント運営支援補助活用）、③高効率エアコンへの更新、④需要見える化メーター導入、⑤契約kW・基本料金の最適化、の5本柱。区内の典型事例では年間電気代の15〜20%削減が見込めます。" },
  { question: "池袋のホテル業の電気代対策は？", answer: "①新電力との競争入札による単価最適化、②客室シーン制御・LED化（SII補助1/2活用）、③高効率空調機への更新、④BEMS導入で需要見える化＋デマンド制御、⑤厨房・洗濯設備の高効率化、の5本柱が中心。年間電気代の15〜20%削減が標準的に見込めます。" },
  { question: "豊島区で再エネ電源を調達したい場合の選択肢は？", answer: "①需要家主導型オフサイトPPA（県外太陽光・風力との直接契約）、②再エネ特化型新電力（みんな電力・自然電力・アスエネ等）、③再エネ証書購入、④屋上太陽光（屋上面積が確保できる場合）、の4手段。大型商業施設・ホテル・サンシャインシティではオフサイトPPAが急速に普及。中小事業者は再エネ特化型新電力が現実的選択肢です。" },
  { question: "東電EPと新電力で停電時の対応に差がありますか？", answer: "停電時の物理的な復旧作業は一般送配電事業者（東京電力パワーグリッド）が担うため、東電EP契約と新電力契約で復旧時間に差はありません。ただし新電力経由の場合、停電通知・補償対応の窓口が新電力小売事業者になるため、契約時に窓口体制・24時間対応の有無を確認することが重要です。" },
];

const sourcesItems = [
  { name: "豊島区 環境課（補助金情報）", url: "https://www.city.toshima.lg.jp/" },
  { name: "東京電力エナジーパートナー 公式サイト", url: "https://www.tepco.co.jp/ep/" },
  { name: "東京都環境局 地球温暖化対策", url: "https://www.kankyo.metro.tokyo.lg.jp/" },
  { name: "資源エネルギー庁（省エネポータル）", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
];

export default function ToshimaKuBusinessElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/toshima-ku-business-electricity-cost"
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
          <span className="text-slate-800">豊島区の法人電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            豊島区の法人電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            豊島区は池袋ターミナルを中心に大型百貨店3社（西武・東武・パルコ）、サンシャインシティ、東池袋Brillia Tower、Hareza池袋等の大型商業/オフィス複合施設が密集し、23区内でも極めて高い電力需要密度を持つエリアです。一方で巣鴨・大塚・目白・駒込には中小商業・飲食店が多く、契約構造は二極化しています。本ページでは区内法人の電気代水準、業種別影響度、固有の課題、契約見直しの具体策、豊島区エコ・テナント運営支援の活用までを実務的に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-27" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>豊島区固有の電力事情（池袋ターミナル・サンシャインDHC・再開発）</li>
              <li>大型百貨店・ホテル・中小商店のBefore/After削減事例</li>
              <li>豊島区エコ・テナント運営支援の活用パターン</li>
              <li>区内事業者向け契約見直し12項目チェックリスト</li>
              <li>DHC接続施設の契約最適化ポイント</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              豊島区の電力事情と特徴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              豊島区は面積13.01km²と23区2番目に狭いが、池袋ターミナルを中心に大型商業施設・ホテル・複合施設が密集し、極めて高い電力需要密度を持ちます。サンシャインシティの地域冷暖房システム、東池袋・南池袋の再開発、巣鴨・大塚・目白の住商混在エリアと、多層構造の電力需要が特徴です。
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
              豊島区では東電EP以外に15社前後の新電力が法人向け高圧で活発に営業中です。全国系・ガス併売・通信流通系・再エネ特化型の4カテゴリが主軸となり、池袋大型商業施設・ホテルでは競争入札による切替が標準化しています。
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
              豊島区の電気料金水準と契約区分別の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              区内事業者の電気代は契約区分（特別高圧・高圧・低圧電力・低圧電灯）によって単価水準が大きく異なります。池袋大型施設は特別高圧、ホテル・中規模オフィスは高圧、巣鴨・大塚等の中小商店は低圧が標準です。
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
              業種別影響度3件 — 大型百貨店・ホテル・中小商店（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              豊島区の代表的な業種3つで、契約見直し＋設備対策の組合せによる削減効果をBefore/Afterで提示します。いずれも実在エリアの業界平均値と公開事例から整理した代表的なシナリオです。
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
              <Link href="/shopping-mall-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">商業施設の電気代見直し</Link>
              、ホテルは{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              豊島区固有の電気代上昇要因 — 池袋密集・DHC・ホテル・再開発
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              豊島区の電気代上昇は、池袋ターミナルの極端な需要密度、サンシャインシティDHCの特殊性、ホテル業の24時間稼働、再開発エリアの大型施設電力負荷など、区固有の事業者構成が複合的に影響します。
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
              豊島区の補助金・優遇制度 — 区独自・SII・都
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              豊島区では国補助（SII等）・都独自補助・区独自補助（エコ・テナント運営支援）が組合せ可能です。特に区独自補助は中小商業・飲食・サービス事業者向けに使いやすい設計で、設備更新の主力財源となります。
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
              豊島区の事業者構成は、池袋大型百貨店・商業施設、ホテル業、中小商業・飲食、オフィス・複合施設、鉄道事業者本社の5層構造です。それぞれ電力消費パターンと契約区分が大きく異なります。
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
              豊島区の新電力シェアは2024年時点で30〜35%程度と都内平均並み。池袋大型施設では競争入札による切替が標準化、中小商店では切替の余地が大きく残ります。市場連動からの固定回帰、需要家主導型PPAの活用が主要論点です。
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
              豊島区の省エネは『大型商業施設の高効率化』『ホテル業の高効率化』『DHC接続施設の最適化』『中小商店のLED・設備更新』『需要家主導型オフサイトPPA』の5軸が主力です。区エコ・テナント運営支援＋SII＋都補助の組合せで投資回収を短縮できます。
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
              豊島区向け契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。豊島区はDHC接続施設の有無・大型施設の競争入札可否・中小商店の区独自補助活用が特に重要な確認ポイントです。
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
              シミュレーターで豊島区の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              豊島区は池袋ターミナルの極端な需要密度・DHC接続施設・ホテル業の24時間稼働など固有の要素を持ちます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替・区補助活用・省エネ投資のメリットを定量化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
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
              { href: "/bunkyo-ku-business-electricity-cost", title: "文京区の法人電気料金", description: "東大本郷・大型病院・東京ドーム事情。" },
              { href: "/itabashi-ku-business-electricity-cost", title: "板橋区の法人電気料金", description: "板橋の中小製造業・物流事情。" },
              { href: "/shopping-mall-electricity-cost-review", title: "商業施設の電気代見直し", description: "大型百貨店・商業施設の主力打ち手。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し", description: "シティホテル・ビジネスホテルの最適化。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "中小・大型施設の主力補助金。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="豊島区の自社条件で電気代リスクを試算する"
            description="池袋大型商業施設・ホテル・サンシャインDHC接続・巣鴨中小商店など豊島区固有の条件を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。区独自補助・SII補助・固定プラン切替のROIもあわせて確認できます。"
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
            heading="豊島区の電力契約見直し、専門家に相談しませんか？"
            description="区内の大型百貨店・ホテル・サンシャインDHC接続施設・中小商店の電気代見直しは事業者規模と立地で論点が大きく変わります。エネルギー情報センターは中立的立場で区内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
