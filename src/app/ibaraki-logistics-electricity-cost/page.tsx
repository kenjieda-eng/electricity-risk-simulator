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
  "茨城県の物流倉庫の電気料金完全ガイド｜圏央道つくば／古河／坂東の大型物流施設・自動倉庫と東京電力契約";
const pageDescription =
  "茨城県の物流業に特化した法人電気代ガイド。圏央道沿線（つくば・常総・坂東・古河）の大型物流施設集積、EC配送ハブ・冷凍冷蔵倉庫・自動倉庫の電力プロファイル、東京電力エリアの単価事情、特別高圧／高圧契約最適化と省エネ・PPA調達までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "茨城県 物流 電気料金",
    "圏央道 つくば 物流 電気代",
    "古河 坂東 大型物流施設",
    "東京電力 特別高圧 物流",
    "EC配送 自動倉庫 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ibaraki-logistics-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ibaraki-logistics-electricity-cost",
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
    label: "茨城県の物流集積 — 圏央道沿線の急成長",
    detail:
      "茨城県は首都圏外郭環状道路（圏央道）の全線開通（2017年完全開通）以降、つくば・常総・坂東・古河・牛久・つくばみらい・五霞などの圏央道沿線・利根川以南エリアに大型物流施設が連続立地する『新興物流ハブ』として急成長。延床1〜10万m²級のマルチテナント型物流施設・EC配送ハブ・自動倉庫が短期間に集積し、東京電力エリアの新規物流需要地として位置づけられています（出典: 茨城県統計年鑑・国土交通省物流動向統計）。",
  },
  {
    label: "物流施設の電力プロファイル — 常温EC＋一部冷凍冷蔵",
    detail:
      "茨城の物流施設は、EC流通向けの常温倉庫＋自動仕分け機・コンベア・搬送ロボット・WMS連動のIT設備が中心。京浜港湾（神奈川）の冷凍冷蔵主体に対し、茨城は『関東広域配送』を担う常温＋一部冷凍冷蔵の混在型が特徴。年間使用電力は中規模で1事業所2,000万〜5,000万kWh、大型施設で1億kWh以上の規模で、特別高圧・高圧契約が併存します。",
  },
  {
    label: "EC配送拠点としての電力需要急増",
    detail:
      "アマゾン・楽天・ヨドバシ・LOHACO・ZOZO等のEC事業者の関東配送拠点として茨城の物流施設が機能。コロナ禍以降のEC市場拡大、24時間出荷体制の標準化、ピッキングロボット・自動倉庫の導入加速により、電力需要は短期で急増基調。新規大型施設の建設も継続し、東京電力PGへの新規受電申込・系統増強コスト判断が立地戦略の重要要素となっています（出典: 経産省商業動態統計・国土交通省物流動向統計）。",
  },
  {
    label: "つくば学園都市・常陸那珂港の補完的役割",
    detail:
      "つくば市は研究機関・先端産業の集積地で、研究機関の機材・サンプル輸送需要に対応する物流拠点としても機能。常陸那珂港（東海村・ひたちなか市）は東関東の海上輸送ハブで、工業製品・コンテナ輸送と連動した物流施設が立地。圏央道経由でこれらの補完的機能が首都圏物流の重要構成要素となっています。",
  },
  {
    label: "東京電力エリアと茨城物流の相互依存",
    detail:
      "茨城県は東京電力エリア。圏央道沿線・利根川以南の物流施設の特別高圧需要は東京電力エリアの新興構成要素として急成長。AI/HPC DC需要急増と合わせて、関東エリア全体の系統容量逼迫が課題化しており、新規物流施設立地では系統増強コスト負担の議論が活発化しています（出典: 東京電力PG供給計画／エネ庁次世代電力ネットワーク小委員会）。",
  },
];

const utilitiesList = [
  {
    name: "東京電力エナジーパートナー（東電EP）",
    role: "一般小売事業者（旧一電）",
    detail:
      "茨城県内物流施設の最大シェア。圏央道沿線の新規大型物流施設の特別高圧需要家を多数獲得。『特別高圧電力』『業務用季節別時間帯別電力』『業務用高圧電力』が主軸。2023年6月の規制料金改定で法人向けも実質値上げ。EC配送24時間体制では『負荷率割引』適用余地もあります。",
  },
  {
    name: "全国系新電力（ENEOSでんき・Looopでんき・出光・東京ガス系・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "茨城県内の大型物流施設・自動倉庫で競争入札の主要対抗馬。固定単価3〜5年契約＋燃調連動の組合せメニューが標準。EC事業者・3PL大手のRE100対応提案が活発化しており、非化石証書付き・再エネトラッキング付きメニューの引合いが急増しています。",
  },
  {
    name: "物流特化型新電力・大規模需要家向け事業者",
    role: "物流特化型",
    detail:
      "物流業界向けに、長期固定契約・電力品質保証・コールドチェーン管理連動の付帯価値を提供する事業者群。3PL大手・物流業界団体経由の共同購買スキームも整備されつつあり、茨城の新興物流ハブでも選択肢が広がっています。",
  },
  {
    name: "再エネ特化型・コーポレートPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "アマゾン・楽天等のEC大手、ヨドバシ・小売大手のRE100加盟と100%再エネ化公約を受け、茨城の物流施設でもオフサイトPPA（県内・福島・北海道の太陽光・風力案件）／VPPA／コーポレートPPAの調達が拡大。物流施設屋根の自家消費太陽光導入も加速しています。",
  },
  {
    name: "東京ガス系新電力（東京ガス『法人向け電気』等）",
    role: "都市ガス系新電力",
    detail:
      "茨城県南部の都市ガス需要家向けにガス＋電気の一括最適化提案。事務所給湯・コージェネ併設の物流施設での総合最適パッケージとして採用例があります。",
  },
  {
    name: "JEPX東京エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX東京エリアスポット価格は2022〜2023年に大幅高騰、現在は落ち着いた水準で推移しつつ夏冬ピーク時間帯は上昇する局面があります。EC配送24時間体制の物流施設は使用量大・高負荷率のため、市場連動型契約のリスクが大きく、固定回帰が主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "東京電力エリアの特別高圧 — 大型物流施設の単価水準",
    detail:
      "大型物流施設（特別高圧2,000kW超、年間1億kWh級）の電力量料金は標準メニューで概ね17〜20円/kWh+調整項目。燃料費調整額（2024〜2025年で+3.0〜+4.5円/kWh目安）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は24〜29円/kWhレンジ。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間1億kWh級では年間数千万円〜億円規模のインパクトです。",
  },
  {
    label: "高圧電力 — 中規模物流施設の単価",
    detail:
      "圏央道沿線の中規模物流施設（500kW〜2,000kW級）の『業務用高圧電力』は18〜22円/kWh+調整項目。実質単価は25〜30円/kWhレンジ。新電力経由なら2〜4円/kWh安いケースが多く、中規模施設でも見直し効果が大きいレンジです。",
  },
  {
    label: "EC配送拠点の負荷率と料金体系",
    detail:
      "EC配送24時間体制の物流施設は負荷率60〜80%と比較的高く、東電EPの『負荷率割引』適用余地が大きい構造。一方、自動仕分け機・コンベア・ピッキングロボット稼働でデイタイムのピーク需要も発生するため、契約電力（kW）の適正化が単価最適化の重要ポイントとなります。",
  },
  {
    label: "電気代の物流原価への影響",
    detail:
      "物流施設の物流原価に占める電気代比率は通常5〜15%（冷凍冷蔵併設施設はより高い）、燃調高騰時には10〜20%に拡大し、保管・配送料金の値上げ転嫁検討を迫られます。EC事業者・3PL契約は中長期固定が中心で即時転嫁が難しく、契約見直し・省エネ投資の優先度が高い経営テーマです（出典: 国土交通省物流動向統計）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大型EC配送ハブ＋自動倉庫（特別高圧 5,000kW、年間 3,500万kWh）",
    before:
      "Before: 圏央道沿線の大型EC配送ハブA（延床10万m²、自動仕分け機・コンベア・ピッキングロボット・AS/RS自動倉庫併設）。EC大手の関東基幹配送拠点。東電EPの特別高圧契約継続＋既往燃調連動。2023年度は燃調影響で請求がピーク月1億円規模。年間電気代 約10億円。",
    after:
      "After: 全国系新電力との競争入札で固定5年契約獲得／自動仕分け機の運転スケジュール最適化／空調更新（高効率セントラル化）／全館LED化＋人感センサー（県補助＋SII併用、投資1.5億円）／屋根太陽光3MW＋蓄電池10MWh導入／オフサイト太陽光PPA 15MW契約／需給予測AI＋DR市場参加。",
    result:
      "Result: 年間電気代 約10億円 → 約8億円（▲約20%、▲2億円・目安）／契約電力 5,000→4,500kW／RE100比率 約35%達成／投資回収 補助金後 3年前後（目安）／EC事業者向けGHG削減レポート提供で営業競争力向上。",
  },
  {
    title: "業種2: 中堅マルチテナント型物流施設（特別高圧 2,000kW、年間 1,400万kWh）",
    before:
      "Before: 古河市内の中堅マルチテナント型物流施設B（延床4万m²、3PL複数社入居、常温＋一部冷凍冷蔵）。東電EPの特別高圧契約。テナント別電力管理。年間電気代 約4億円。",
    after:
      "After: 物流特化型新電力に固定3年で切替／テナント別電力管理の見える化（テナント別請求精緻化）／空調更新（高効率化）／全館LED化＋人感センサー（県補助＋SII併用、投資8,000万円）／屋根太陽光1MW自家消費／BEMS導入。",
    result:
      "Result: 年間電気代 約4億円 → 約3.2億円（▲約20%、▲8,000万円・目安）／契約電力 2,000→1,800kW／投資回収 補助金後 2.5年前後（目安）／テナント満足度向上で稼働率改善。",
  },
  {
    title: "業種3: 中規模3PL倉庫（高圧 1,000kW、年間 700万kWh）",
    before:
      "Before: つくば市の中規模3PL倉庫C（延床1.5万m²、常温EC配送向け、自動仕分け機併設）。東電EPの業務用高圧電力＋燃調連動。2023年度は燃調影響で前年比+18%の電気代増加。年間電気代 約2億円。",
    after:
      "After: 全国系新電力に固定2年・燃調上限ありで切替／自動仕分け機の運転スケジュール最適化／空調更新（高効率化）／全館LED化（県補助＋SII併用、投資4,000万円）／屋根太陽光600kW自家消費／BEMS導入で需要見える化。",
    result:
      "Result: 年間電気代 約2億円 → 約1.6億円（▲約20%、▲4,000万円・目安）／契約電力 1,000→900kW／投資回収 補助金後 2.5年前後（目安）／顧客向けGHG排出量削減レポート提供で受注競争力強化。",
  },
];

const costFactors = [
  {
    label: "EC配送24時間体制の絶対需要",
    detail:
      "EC配送24時間体制では、自動仕分け機・コンベア・ピッキングロボット・WMS連動IT設備が常時稼働。負荷率60〜80%と高めで絶対的な年間使用電力が大きく、絶対額の経営インパクトが大きい構造。年間使用量億kWh級では単価差1円/kWhが年間1億円規模の差になります。",
  },
  {
    label: "新規施設開発に伴う系統容量制約",
    detail:
      "圏央道沿線の新規物流施設開発が急増し、東京電力PGへの新規受電申込の系統容量逼迫が課題化。新規開発時の接続検討費用・契約申込費用・系統増強協力金等の判断が立地戦略の重要要素に。",
  },
  {
    label: "東電エリアの燃調感応度",
    detail:
      "東京電力エリアもLNG火力依存度が高く、燃料費調整額の変動幅が大きい。2022〜2023年高騰時は燃調が＋10円/kWh級まで拡大した局面もあり、年間1億kWh級物流施設で年間10億円規模の単価変動を経験。固定回帰や燃調上限ありプランへの切替が経営判断の中心となります。",
  },
  {
    label: "EC事業者・3PL契約の単価転嫁難",
    detail:
      "物流施設の保管・配送料金は中長期固定契約が中心で、電気代単価の上昇分を即時転嫁することが難しい構造。2022〜2023年高騰時には物流事業者の収益が大きく圧迫され、契約見直し・省エネ投資の優先度が極めて高い経営テーマに。",
  },
  {
    label: "EC大手・3PL大手のRE100要請",
    detail:
      "アマゾン・楽天等のEC大手、3PL大手がRE100・CN対応を公約し、サプライチェーン全体でScope3 GHG排出削減を要請。物流施設事業者にも再エネ電源調達（PPA・非化石証書）・施設屋根太陽光設置が事実上必須化しつつあります。",
  },
];

const subsidies = [
  {
    name: "茨城県 中小企業省エネ・脱炭素設備導入補助",
    target: "県内中堅・中小物流事業者の省エネ・脱炭素設備（空調・LED・冷凍機・BEMS等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "県独自の中小企業支援補助。圏央道沿線中堅物流施設の更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "圏央道沿線市町村独自補助",
    target: "つくば・常総・坂東・古河等の市内物流事業者の省エネ・再エネ設備",
    rate: "対象経費の1/3〜1/2、上限は市町村別",
    note: "つくば市『産業政策補助』、古河市『環境保全設備補助』等の市独自補助。県補助・SII補助との重層活用が可能なケースあり。最新公募状況は各市役所・商工会議所で確認。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率空調・LED・自動倉庫高効率化・コンプレッサー等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "圏央道沿線物流施設の更新案件で採択実績多数。空調更新・LED化・自動仕分け機高効率化等で活用しやすい王道補助。",
  },
  {
    name: "国土交通省 物流効率化・脱炭素化補助",
    target: "物流事業者の効率化・脱炭素設備・モーダルシフト支援",
    rate: "対象経費の1/2、上限は事業区分による",
    note: "国交省が運用する物流業界向け支援補助。茨城の新興物流ハブでも省エネ化・自動化と並行して活用可能。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "物流施設は屋根面積が大きい（1〜5万m²超）ことが多く、オンサイト太陽光PPA・蓄電池併設の適性が高い。EC大手・3PL大手のRE100対応投資との組合せで導入加速中。",
  },
];

const industryProfile = [
  {
    label: "つくば市・つくばみらい市 — 学園都市＋物流ハブ",
    detail:
      "つくば学園都市の研究機関・先端産業集積に加え、圏央道つくばJCT周辺に大型物流施設が拡大。先端産業の機材・サンプル輸送と関東広域配送を両立する立地として注目。",
  },
  {
    label: "常総市・坂東市 — 圏央道沿線新興物流ハブ",
    detail:
      "圏央道沿線・利根川以南の常総IC・坂東IC周辺に大型マルチテナント型物流施設が連続立地。延床5〜10万m²級の延床面積、特別高圧需要家として位置づけられる施設が複数。",
  },
  {
    label: "古河市・五霞町 — 北関東物流ハブ",
    detail:
      "圏央道古河IC・五霞ICエリアに大型物流施設が集積。東北道との結節点として北関東〜首都圏配送のハブ機能を担い、特別高圧・高圧の需要家が多数立地。",
  },
  {
    label: "つくばみらい市・牛久市 — 中堅物流施設集積",
    detail:
      "圏央道周辺の中堅マルチテナント型物流施設・3PL専用施設が集積。EC配送向け中規模施設の新設も継続中です。",
  },
  {
    label: "常陸那珂港・東海村 — 海上輸送連動物流",
    detail:
      "常陸那珂港（東海村・ひたちなか市）の海上輸送拠点として、工業製品・コンテナ輸送と連動した物流施設が立地。圏央道経由の関東広域配送と海上輸送を組合せる事業者が中心。",
  },
];

const switchingReality = [
  {
    label: "茨城物流の新電力浸透度",
    detail:
      "大型物流施設・自動倉庫では競争入札による新電力選定が標準化。長期固定3〜5年契約＋再エネ調達枠＋RE100対応のセット提案が主流。中堅・中規模施設でも東電EP継続から新電力切替へのシフトが進行中で、新興物流ハブとして新電力比率は急速に上昇傾向。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年のJEPX高騰で物流事業者の多くが市場連動から固定回帰。年間使用量億kWh級の大型施設では高騰時のキャッシュフロー影響が深刻で、固定3〜5年＋燃調上限ありが主流に。EC事業者・3PL契約への単価転嫁難易度も固定化を後押し。",
  },
  {
    label: "東電EP継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・新規物流施設対応の専属体制・災害時復旧体制（茨城県は2019年台風被害の教訓）。デメリット: 新電力比1〜3円/kWh単価が高め、燃料費調整額の上限なし。年間1億kWh級施設では数千万円〜億円単位の単価差になります。",
  },
  {
    label: "新電力選定のポイント（茨城×物流固有）",
    detail:
      "①特別高圧／高圧の物流施設供給実績、②非化石証書／再エネトラッキング付メニュー（EC大手・3PL大手RE100対応）、③長期固定3〜5年の単価安定性、④燃調上限・連動条件、⑤BCP対応（茨城県は台風影響地域）、⑥オフサイトPPA・VPPAの仲介力の6点が重要です。",
  },
  {
    label: "倉庫屋根太陽光・蓄電池併用の主流化",
    detail:
      "圏央道沿線の物流施設は屋根面積が大きい（1〜5万m²超）ため、屋根太陽光1〜10MW級のオンサイトPPA・自家消費が現実的な打ち手。蓄電池併用でピーク需要削減・BCP対応の3効果。EC大手・3PL大手のRE100対応投資との組合せで導入加速中です。",
  },
];

const energySaving = [
  {
    label: "自動仕分け機・自動倉庫の運転スケジュール最適化",
    detail:
      "自動仕分け機・コンベア・自動倉庫AS/RSの運転を需給予測連動で最適化することで、契約電力（kW）削減＋ピーク料金抑制が可能。EC配送のピーク時間帯と電力ピーク時間帯のずらしも有効です。BEMS導入＋AIによる需給予測との組合せで電力▲10〜15%が目安。",
  },
  {
    label: "高効率空調＋人感センサー連動",
    detail:
      "古い分散型エアコンを高効率セントラル空調に更新＋作業エリアの人感センサー連動で空調電力▲25〜35%。物流施設は天井が高く空調効率に課題があるため、効果が大きい打ち手です。SII補助＋県補助の併用で投資回収 3〜4年。",
  },
  {
    label: "全館LED化＋人感センサー・調光制御",
    detail:
      "全館LED化＋人感センサー・調光制御で照明電力▲50〜70%。物流施設は天井高で照明数が多く、効果が大きい打ち手。物流通路・出荷エリアの稼働時間連動制御で更に効果大。県補助＋SII補助で投資回収 1.5〜2.5年。",
  },
  {
    label: "施設屋根オンサイト太陽光＋自家消費",
    detail:
      "物流施設は屋根面積1〜5万m²以上と広く、屋根太陽光1〜10MW級の自家消費が現実的。初期投資ゼロ・PPA事業者が設備所有・自社は20年間の電力購入契約という形が標準。RE100算入＋電気代単価下げが両立できます。",
  },
  {
    label: "BEMS＋WMS連動最適化",
    detail:
      "BEMS（建物エネルギーマネジメントシステム）でリアルタイム需要見える化＋WMS（Warehouse Management System）連動で、運用最適化を実現。テナント別電力管理の精緻化、出荷タイミング連動の運転制御で電力▲10〜15%。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか（EC配送ピークの反映も確認）",
  "自動仕分け機・自動倉庫・空調の年間使用kWhを工程別に把握しているか",
  "新規施設の場合、系統容量・接続検討費用・系統増強協力金の見積を取得したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "東電EPの2023年6月改定後の単価で再見積を取得したか",
  "全国系・物流特化型・再エネ特化型の新電力10社以上から相見積を取得したか",
  "EC事業者・3PL契約先・親会社のRE100要請に対する追加性ある再エネ調達計画があるか",
  "施設屋根オンサイト太陽光・蓄電池併用の試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・コーポレートPPAの調達可能性をデベロッパーに照会したか",
  "茨城県補助・市町村補助・SII・国交省物流補助・需要家主導型PPA補助の併用可否を整理したか",
  "デマンドレスポンス・容量市場・調整力公募への参加可能性を評価したか",
  "BCP（茨城県は台風影響地域）の自動仕分け機・空調復旧優先度を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "なぜ圏央道沿線に大型物流施設が集中しているのですか？",
    answer:
      "①圏央道全線開通（2017年）による首都圏・北関東・東北方面アクセスの飛躍的向上、②首都圏外環自動車道・東関東自動車道との結節、③首都圏中心部より地価が大幅に安い土地確保、④羽田・成田両空港との適度な距離、⑤大量採用可能な労働力プール、⑥東京電力エリアの電力供給安定性、の6点が複合的に作用しています。コロナ禍以降のEC市場拡大で新規施設開発が継続的に加速しています（出典: 国土交通省物流動向統計・茨城県統計年鑑）。",
  },
  {
    question: "圏央道物流施設と京浜港湾物流（神奈川）の違いは？",
    answer:
      "①取扱品目（京浜港湾＝輸入冷凍水産物・畜肉・冷凍食品の保管が中心 vs 圏央道＝EC配送向けの常温＋一部冷凍冷蔵のスループット型）、②電力プロファイル（京浜＝冷凍冷蔵24h連続冷却中心 vs 圏央道＝自動仕分け機・自動倉庫稼働中心）、③物流コスト構造（京浜＝保管料中心 vs 圏央道＝配送効率中心）、の3点が主な違いです。両者の業種別電力最適化アプローチも異なります。",
  },
  {
    question: "圏央道物流施設の屋根太陽光は採算が合いますか？",
    answer:
      "屋根面積3万m²超の大型物流施設では十分に採算が合います。屋根太陽光3〜10MW級の場合、初期投資6〜20億円（補助金活用で1/2〜1/3）、年間発電量300〜1,000万kWh、自家消費単価20〜25円/kWh換算で投資回収5〜7年（補助込みで3〜5年）が目安。RE100対応のEC大手・3PL大手案件では、PPA事業者経由で初期投資ゼロ・20年契約の長期PPAが主流です。",
  },
  {
    question: "市場連動プランはEC配送物流施設に向きますか？",
    answer:
      "原則として向きません。EC配送24時間体制の物流施設は年間使用量が大きく、高騰時のキャッシュフロー影響が深刻。EC事業者・3PL契約への料金転嫁難易度も高いため、固定3〜5年＋燃調上限ありが主流。市場連動を選択する場合でも、ヘッジ手段（PPA・自家消費太陽光・蓄電池）の併用が前提となります。",
  },
  {
    question: "新規物流施設立地で系統容量が不足する場合の対応は？",
    answer:
      "①周辺エリアへの分散立地（圏央道沿線の別IC周辺・東関東道沿線等）、②変電所増強協力・接続検討段階での早期着手、③オンサイトPPA＋自家消費太陽光で系統負荷軽減、④建設フェーズ分割で段階的受電、の4方向が現実的な打ち手です。経産省・エネ庁では系統増強コスト負担ルールの見直し議論も進行中で、最新動向のウォッチが必要です。",
  },
  {
    question: "EC大手・3PL大手のRE100要請にどう対応すべきですか？",
    answer:
      "①施設屋根オンサイト太陽光＋蓄電池の自家消費、②オフサイトPPA・コーポレートPPAの調達、③非化石証書付き再エネメニューへの切替、④省エネ投資によるCO2原単位改善、の4方向で対応するのが定石。EC大手・3PL大手のサプライヤー要件として事実上必須化しており、需要家主導型PPA補助金との組合せで投資ハードルを下げることが可能です。",
  },
  {
    question: "茨城県の物流業向け補助金は何が活用できますか？",
    answer:
      "茨城県の中小企業省エネ・脱炭素設備導入補助、圏央道沿線市町村独自補助、国のSII省エネ補助、国土交通省物流効率化・脱炭素化補助、需要家主導型再エネ・PPA補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要。最新公募状況は茨城県産業戦略部・各市町村・SII・国交省物流政策課の公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "茨城県の台風・地震BCPは物流施設運用にどう影響しますか？",
    answer:
      "茨城県は2019年台風15号・19号で広域停電を経験し、また首都直下地震・茨城県南部地震の被害想定エリアでもあり、物流事業者は自動仕分け機・空調の系統復旧優先度・自家発電（UPS＋ディーゼル）の燃料備蓄日数・代替施設拠点との連携を重視します。停電が長期化した場合、EC配送遅延の連鎖被害が大きいため、BCP体制は経営重要事項。物理的な復旧作業は東京電力PG（一般送配電事業者）が担うため契約小売事業者によらず同じですが、停電通知・補償・自家発切替支援は小売事業者ごとに体制が異なるため、契約時に必ず確認してください。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "東京電力エナジーパートナー 法人向け料金プラン", url: "https://www.tepco.co.jp/ep/corporate/" },
  { name: "東京電力パワーグリッド 系統情報公開", url: "https://www.tepco.co.jp/pg/" },
  { name: "茨城県 産業戦略部", url: "https://www.pref.ibaraki.jp/" },
  { name: "国土交通省 物流動向統計", url: "https://www.mlit.go.jp/" },
  { name: "経済産業省 商業動態統計", url: "https://www.meti.go.jp/statistics/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function IbarakiLogisticsElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ibaraki-logistics-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "茨城県の物流の電気料金", url: "https://simulator.eic-jp.org/ibaraki-logistics-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">茨城県の物流の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            茨城県の物流倉庫の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            茨城県は圏央道全線開通以降、つくば・常総・坂東・古河の沿線エリアに大型物流施設が連続立地する新興物流ハブとして急成長しています。本ページでは「茨城県 × 物流」というクロス領域に絞り、東京電力エリア固有の単価事情と、EC配送24時間体制・自動仕分け機・自動倉庫・系統容量制約・RE100対応までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>圏央道沿線（つくば・常総・坂東・古河）の物流集積と電力プロファイル</li>
              <li>大型EC配送ハブ／中堅マルチテナント／中規模3PL倉庫のBefore/After削減事例</li>
              <li>東京電力エリアの単価水準と物流原価への影響</li>
              <li>EC大手・3PL大手RE100対応と施設屋根太陽光PPAの導入</li>
              <li>茨城×物流に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「茨城 × 物流」のクロス領域に特化したガイドです。茨城県全体の文脈は{" "}
            <Link href="/ibaraki-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              茨城県の法人電気料金完全ガイド
            </Link>
            、業種一般としての倉庫業全体は{" "}
            <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              倉庫業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              茨城県の物流集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県、特に圏央道沿線（つくば・常総・坂東・古河）は2017年の全線開通以降、首都圏の新興物流ハブとして急成長しています。EC配送24時間体制・自動倉庫・スループット型の特殊な電力プロファイルが業種特性の中心となります。
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
              茨城県全体の文脈は{" "}
              <Link href="/ibaraki-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                茨城県の法人電気料金ガイド
              </Link>
              、東京電力エリア全体は{" "}
              <Link href="/region-tokyo-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                東京電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                倉庫業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              東京電力エリアの主要電力会社・新電力（茨城×物流での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県内の物流施設は、東電EPに加えて全国系新電力・物流特化型・再エネ特化型・東京ガス系と多様なプレイヤーが供給。大型物流施設・自動倉庫では競争入札が標準化、新興物流ハブとして新電力切替の動きが加速しています。
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
              東京電力エリアの料金水準と物流施設への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、EC配送拠点の負荷率と料金体系、電気代の物流原価への影響を、物流施設の代表的な契約タイプ別に整理します。
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
              規模別事例3件 — 大型EC配送ハブ／中堅マルチテナント／中規模3PL（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県内の代表的な3規模の物流施設で、契約見直し＋自動仕分け機最適化＋屋根太陽光＋PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・業界統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">倉庫業の電気料金見直し</Link>
              、{" "}
              <Link href="/transportation-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">運輸業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              茨城×物流固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城物流の電気代上昇は、EC配送24h絶対需要・新規施設開発の系統容量制約・東電エリアの燃調感応度・EC/3PL契約の単価転嫁難・EC大手RE100要請の5要因が複合的に作用します。
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
              補助金・優遇制度 — 茨城県・圏央道沿線市町村・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の中小企業省エネ補助、圏央道沿線市町村独自補助、国のSII省エネ補助、国交省物流効率化・脱炭素化補助、需要家主導型再エネ・PPA補助の5層を組合せ、物流施設投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（つくば／常総・坂東／古河・五霞／つくばみらい・牛久／常陸那珂）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城県の物流集積は、つくば学園都市＋圏央道JCT、常総・坂東の圏央道沿線新興ハブ、古河・五霞の北関東ハブ、つくばみらい・牛久の中堅施設、常陸那珂港の海上輸送連動という構造です。
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
              電力会社切替の実情 — 東電EPと新電力の比較（物流版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              大型物流施設・自動倉庫では競争入札が標準化、中堅施設でも切替シフト進行中、市場連動からの固定回帰、EC大手・3PL大手RE100要請による再エネ調達主流化、施設屋根太陽光・蓄電池併用の主流化が共通トレンドです。
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
              茨城×物流の省エネ・自家消費事例（自動仕分け機／空調／LED／屋根太陽光／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              物流施設の省エネは、自動仕分け機・自動倉庫の運転スケジュール最適化、高効率空調＋人感センサー、全館LED＋人感センサー・調光制御、施設屋根オンサイト太陽光、BEMS＋WMS連動の5軸が主力。大型・中堅・中規模いずれでも投資回収2〜4年で実現可能なメニューが揃っています。
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
              茨城×物流 契約見直しチェックリスト（12項目）
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
              シミュレーターで茨城×物流の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              茨城物流は、EC配送24h需要・新規施設系統容量制約・東電燃調感応度・EC/3PL契約硬直性など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・自動仕分け機最適化・施設屋根太陽光のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
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
              { href: "/ibaraki-business-electricity-cost", title: "茨城県の法人電気料金ガイド（地域一般）", description: "茨城県全体の文脈・東京電力エリア・産業構造。" },
              { href: "/warehouse-electricity-cost-review", title: "倉庫業の電気料金見直し（業種一般）", description: "冷凍冷蔵・常温・自動倉庫の業種別最適化。" },
              { href: "/transportation-electricity-cost-review", title: "運輸業の電気料金見直し", description: "陸運・物流センターのEV充電・冷凍車両プレクール。" },
              { href: "/region-tokyo-business-electricity", title: "東京電力エリアの法人電気代事情", description: "東京エリア全体の料金体系・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/kanagawa-logistics-warehouse-electricity-cost", title: "神奈川県の物流倉庫の電気料金", description: "東京電力エリアの京浜港湾物流クロス（兄弟ページ）。" },
              { href: "/chiba-datacenter-electricity-cost", title: "千葉県のデータセンターの電気料金", description: "東京電力エリアの印西DCクロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "物流施設に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "物流で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "東京エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "物流業の単価変動の主因。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "EC大手・3PL大手RE100対応の追加性ある再エネ調達。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトvsオフサイトPPA", description: "施設屋根活用と外部調達の比較。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="茨城物流の電気代リスクを自社条件で試算する"
            description="圏央道沿線（つくば・常総・坂東・古河）の物流施設固有の条件（東京電力エリア・EC配送24h・自動倉庫・3PL契約）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・自動仕分け機最適化・施設屋根太陽光のROIもあわせて確認できます。"
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
            heading="茨城の物流施設の電力契約見直し、専門家に相談しませんか？"
            description="大型EC配送ハブ・中堅マルチテナント・中規模3PL倉庫いずれも特別高圧・高圧の規模感とEC大手・3PL大手のRE100要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で茨城県内物流事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
