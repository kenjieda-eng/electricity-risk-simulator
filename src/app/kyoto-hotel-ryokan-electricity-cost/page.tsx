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
  "京都府の旅館・ホテルの電気料金完全ガイド｜祇園・嵐山・東山の宿泊業／インバウンド観光・通年空調給湯と契約最適化";
const pageDescription =
  "京都府の旅館・ホテル業に特化した法人電気代ガイド。祇園・嵐山・東山・四条河原町の老舗旅館・観光ホテルの集積、インバウンド観光復活に伴う稼働率上昇、空調・給湯・厨房・洗濯の電力プロファイル、関西電力エリアの契約最適化までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "京都府 旅館 電気料金",
    "京都 ホテル 電気代",
    "祇園 嵐山 東山 宿泊業",
    "関西電力 高圧 旅館",
    "インバウンド観光 電力",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/kyoto-hotel-ryokan-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/kyoto-hotel-ryokan-electricity-cost",
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
    label: "京都の宿泊業集積 — インバウンド需要と老舗旅館の両立",
    detail:
      "京都府は世界的観光都市として、2024〜2025年にかけてインバウンド観光客数が過去最高水準に回復。府内宿泊施設は約3,000〜3,500軒、客室数約5万〜6万室規模で、祇園・東山・嵐山の老舗旅館、四条河原町・京都駅周辺のシティホテル、宇治・伏見・大原野の観光ホテルまで多様な業態が共存します（出典: 京都府観光統計・観光庁宿泊旅行統計調査）。インバウンド客の長期滞在・高単価化に伴い、稼働率と客室単価の上昇が継続しています。",
  },
  {
    label: "旅館・ホテルの電力プロファイル — 通年空調・給湯主体",
    detail:
      "宿泊業の電力消費は空調（30〜45%）、給湯（15〜25%、温泉・大浴場あり旅館は更に大）、照明（10〜15%）、厨房（10〜15%、IH化進展で増加）、洗濯・リネン（5〜10%）が主要構成。客室稼働率と相関する一方、空調・給湯のベース負荷は稼働率に関わらず一定で、低稼働時の単位客室当たり電気代が経営圧迫要因となります。",
  },
  {
    label: "京都の旅館に特有の温泉・大浴場の電力負荷",
    detail:
      "京都は温泉地が多くないものの、嵐山温泉・大原温泉・湯の花温泉・くらま温泉等の旅館では温泉揚水ポンプ・温泉成分管理装置・大浴場ろ過機・循環ポンプが連続稼働。大浴場の循環ろ過＋温度維持で年間使用量数十万kWh規模を消費する旅館もあり、給湯・温泉系の省エネが経営課題となります。",
  },
  {
    label: "インバウンド復活と稼働率変動の影響",
    detail:
      "2020〜2022年のコロナ禍では稼働率が著しく低下、旅館・ホテルの電気代単位客室当たり負担が急増しました。2023年以降のインバウンド復活で稼働率は回復していますが、季節変動（桜・紅葉ハイシーズン）・地政学的影響（為替・国際情勢）に左右される需要構造で、稼働連動型の電気代管理が経営継続上重要です（出典: 観光庁宿泊旅行統計調査・京都府観光統計）。",
  },
  {
    label: "関西電力エリアと京都宿泊業の相互依存",
    detail:
      "関西電力エリアの電源構成は原子力（高浜・大飯・美浜の3基稼働中）＋LNG火力＋大規模太陽光で多様化。エリア単価は東京・中部・東北より相対的に安定し、原子力寄与で燃調感応度が他エリアより低位です。京都の宿泊業は通年稼働・通年空調の業種特性から、燃調安定性の優位性を享受しやすい立地と言えます（出典: 関西電力供給計画／エネ庁エネルギー基本計画）。",
  },
];

const utilitiesList = [
  {
    name: "関西電力（小売事業）",
    role: "一般小売事業者（旧一電）",
    detail:
      "京都府内宿泊業の最大シェア。『高圧電力AS／BS』『業務用季節別時間帯別電力』が主軸メニュー。シティホテル・大型旅館の高圧需要家と、中小旅館の低圧需要家の両方を抱える。2023年6月の規制料金改定で法人向けも実質値上げ。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・東京ガス系等）",
    role: "全国展開新電力",
    detail:
      "京都府内のシティホテル・中堅旅館で競争入札の主要対抗馬。固定単価3〜5年契約＋燃調連動の組合せメニューが標準。2022〜2023年の市場高騰局面で一部新電力が新規受付停止しましたが、2024年以降は徐々に回復。インバウンド復活で電気代対策の優先度が高まる宿泊業向け提案が活発化しています。",
  },
  {
    name: "大阪ガス系新電力（大阪ガスサービスショップ法人向け等）",
    role: "都市ガス系新電力",
    detail:
      "京都市内・宇治・伏見の都市ガス需要家向けに、ガス＋電気の一括最適化提案。給湯・厨房でガス併用する宿泊業との親和性が高く、コージェネ・GHP併設の中大型ホテルでの採用例があります。",
  },
  {
    name: "再エネ特化型・サステナブル観光向けPPA事業者",
    role: "再エネ特化／PPA",
    detail:
      "ESG・サステナブル観光対応で、外資系ラグジュアリーホテル・国際チェーンの京都進出物件では再エネ100%調達が前提となるケースが増加。みんな電力・自然電力・東京ガス系等のオフサイトPPA・コーポレートPPA契約が拡大しています。",
  },
  {
    name: "京都市・京都府の地域新電力",
    role: "地域系新電力",
    detail:
      "京都の地域社会と連携した地域電力事業者も存在。地産地消の再エネ電源活用を訴求する事業者もあり、サステナブル観光の文脈で老舗旅館・地元ホテルの採用例があります。",
  },
  {
    name: "JEPX関西エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX関西エリアスポット価格は原子力＋太陽光比率の高さから昼間時間帯は他エリアより低位で推移する傾向あり。ただし旅館・ホテルはチェックイン後の夕方〜夜間がピーク需要となるため、市場連動の昼間恩恵を受けにくい構造。固定契約が引き続き主流です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "関西電力エリアの高圧 — シティホテル・大型旅館の単価水準",
    detail:
      "京都市内のシティホテル・大型旅館（高圧500kW〜2,000kW級）の電力量料金は標準メニューで概ね17〜21円/kWh+調整項目。燃料費調整額（2024〜2025年で+1.5〜+3.5円/kWh目安・原子力比率が高いため他エリアより小幅）と再エネ賦課金（2025年度3.98円/kWh）を加算した実質単価は23〜28円/kWhレンジ。新電力競争入札では標準比1〜3円/kWh下げが目安で、年間使用量200〜500万kWh級のホテルでは年間数百万円規模のインパクトです。",
  },
  {
    label: "低圧電力 — 中小旅館・町家宿の単価",
    detail:
      "祇園・東山・西陣等の中小旅館・町家宿（契約電力50kW未満）の『低圧電力（動力）』は10〜13円/kWh+調整項目、『低圧電灯』は18〜21円/kWh+調整項目。低圧自由化の選択肢は限定的ですが、新電力低圧メニューの相見積で改善余地があります。",
  },
  {
    label: "宿泊業の電気代単位指標 — 客室当たり・売上比",
    detail:
      "シティホテル・大型旅館では客室1室・1ヶ月当たり電気代は1.5〜3万円が一般的目安。売上に占める電気代比率は通常2〜5%、稼働率が低い時期や燃調高騰時には7〜10%まで拡大し経営を圧迫。インバウンド復活で稼働率が上がると単位客室当たり電気代は相対的に低下しますが、絶対額の総電気代は増加します。",
  },
  {
    label: "関西エリアの燃調感応度（原子力寄与）",
    detail:
      "関西電力エリアは高浜・大飯・美浜の原子力3基が稼働中で、LNG・石炭火力の比率が他エリアより低位。2022〜2023年の燃料高騰時の燃調変動幅は東京・中部・東北より小幅で推移しました。京都の宿泊業は通年稼働の業種特性で、燃調安定性の優位性を享受しやすい立地です（出典: 関西電力供給計画／エネ庁エネルギー白書）。",
  },
];

const industryImpact = [
  {
    title: "業種1: 京都市内シティホテル（高圧 800kW、年間 280万kWh）",
    before:
      "Before: 京都市内のシティホテルA（客室数250室、宴会場・レストラン・スパ併設）。関西電力の業務用季節別時間帯別電力＋燃調連動。インバウンド復活で稼働率85%超に上昇、年間使用量も増加。2023年度は燃調影響で前年比+12%の電気代増加。年間電気代 約7,000万円。",
    after:
      "After: 全国系新電力に固定3年・燃調上限あり契約で切替／高効率空調更新（マルチエアコン→セントラル）／全館LED化＋客室人感センサー（府補助＋SII併用、投資3,500万円）／給湯のヒートポンプ化＋廃熱回収／屋根太陽光150kW自家消費／BEMS導入で客室稼働連動運転。",
    result:
      "Result: 年間電気代 約7,000万円 → 約5,600万円（▲約20%、▲1,400万円・目安）／契約電力 800→700kW／投資回収 補助金後 3年前後（目安）／RE100ラグジュアリー顧客誘致のブランド価値向上。",
  },
  {
    title: "業種2: 嵐山温泉・大型観光旅館（高圧 500kW、年間 180万kWh）",
    before:
      "Before: 嵐山の大型観光旅館B（客室数80室、温泉大浴場・露天風呂・宴会場・茶室併設）。関西電力の高圧電力AS＋燃調連動。温泉揚水ポンプ・大浴場ろ過機が24時間連続稼働。年間電気代 約4,500万円。",
    after:
      "After: 大阪ガス系新電力に固定2年契約で切替（ガス併売最適化）／高効率ヒートポンプ給湯機＋廃熱回収システム導入／大浴場ろ過機の高効率化＋運転時間最適化／全館LED化（府補助＋SII併用、投資2,000万円）／コージェネ既設システムの稼働最適化／屋根太陽光80kW自家消費。",
    result:
      "Result: 年間電気代 約4,500万円 → 約3,700万円（▲約18%、▲800万円・目安）／契約電力 500→450kW／投資回収 補助金後 2.5年前後（目安）／温泉旅館の脱炭素アピールでサステナブル観光誘致。",
  },
  {
    title: "業種3: 祇園・東山の老舗中小旅館（低圧高負荷／60kW、年間 25万kWh）",
    before:
      "Before: 祇園の老舗中小旅館C（客室数15室、伝統的木造建築、料理長・女将含め10名）。関西電力の低圧電力＋低圧電灯。客室空調・給湯・厨房・洗濯が主要負荷。年間電気代 約700万円。",
    after:
      "After: 低圧新電力（電力量料金▲2円/kWh水準）に切替／高効率ヒートポンプ給湯機更新／IH調理器具導入（厨房ガス→電力一部移行）／全館LED化＋客室調光連動（府補助活用、投資350万円）／屋根太陽光20kW自家消費（伝統建築の意匠を損なわない設計）。",
    result:
      "Result: 年間電気代 約700万円 → 約580万円（▲約17%、▲120万円・目安）／投資回収 補助金後 2.5年前後（目安）／老舗旅館のCN対応でブランド力向上。",
  },
];

const costFactors = [
  {
    label: "通年空調・給湯ベース負荷の大きさ",
    detail:
      "京都の宿泊業は四季変動が顕著ながら、空調・給湯のベース負荷が通年継続。低稼働時期の単位客室当たり電気代負担が大きく、稼働率と相関しない『固定費』としての電気代管理が経営課題に。",
  },
  {
    label: "温泉・大浴場の循環ろ過電力",
    detail:
      "温泉旅館・大浴場併設ホテルでは循環ろ過ポンプ・温度維持装置が24h連続稼働。年間使用量数十万kWh規模の追加負担となり、給湯・温泉系の高効率化（ヒートポンプ・廃熱回収）が経営インパクト大の打ち手。",
  },
  {
    label: "夏季ピーク（祇園祭・盆休み）・冬季ピーク（紅葉・正月）の重複",
    detail:
      "京都は祇園祭（7月）・盆休み・紅葉（11月）・正月（12〜1月）と年間複数の宿泊需要ピークがあり、それぞれ空調・給湯需要が同時集中。契約電力（kW）が年間で4〜5回押し上げられ、基本料金負担が大きくなります。",
  },
  {
    label: "インバウンド需要の為替・地政学的変動リスク",
    detail:
      "インバウンド観光客数は為替・地政学的状況（国際情勢・パンデミック）に左右され、稼働率・電気代総額が短期で大きく変動する経営リスク。経営計画には需要変動シナリオを織り込むことが重要です。",
  },
  {
    label: "ESG・サステナブル観光要求の拡大",
    detail:
      "外資系ラグジュアリーホテル・国際チェーンの京都進出物件では再エネ100%調達・CN対応が前提化。老舗旅館でもCN訴求がブランド差別化要素となり、再エネ調達コスト（PPAプレミアム＋1〜3円/kWh）の経営計画織り込みが必要です。",
  },
];

const subsidies = [
  {
    name: "京都府 中小企業省エネ・脱炭素設備導入補助",
    target: "府内中小宿泊業の省エネ・脱炭素設備（空調・給湯ヒートポンプ・LED・断熱等）",
    rate: "対象経費の概ね1/3〜1/2（事業区分による）※2025年度時点",
    note: "府独自の中小企業支援補助。京都市内中小旅館・観光ホテルの更新で活用しやすい主力制度。SII補助との併用可否は事業別に要確認。",
  },
  {
    name: "京都市 環境保全設備・観光関連事業者向け補助",
    target: "市内宿泊事業者の省エネ・再エネ設備・伝統建築改修",
    rate: "対象経費の1/3〜1/2、上限は市町村別",
    note: "京都市環境政策局・産業観光局による独自補助。祇園・東山等の伝統建築改修との連動で活用余地あり。最新公募状況は京都市公式窓口で確認。",
  },
  {
    name: "観光庁 宿泊施設インバウンド対応等支援補助",
    target: "宿泊施設のインバウンド対応・脱炭素・バリアフリー化",
    rate: "対象経費の1/2、上限は事業区分による",
    note: "観光庁が運用する宿泊業向け支援補助。インバウンド対応＋脱炭素＋省エネを組み合わせた更新計画で採択加点が期待できます。",
  },
  {
    name: "省エネ補助金（経産省 SII／ZEB・既存建築物省エネ化）",
    target: "宿泊施設の高効率空調・給湯ヒートポンプ・断熱・LED・BEMS等",
    rate: "中小1/2、大企業1/3、上限事業区分による",
    note: "シティホテル・大型旅館の更新で採択実績多数。給湯ヒートポンプ化・断熱改修・BEMS導入は採択率も比較的高めの王道メニュー。",
  },
  {
    name: "需要家主導型再エネ・PPA・蓄電池併設関連補助",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "シティホテル・大型旅館の屋根活用、伝統建築への意匠配慮型太陽光・オフサイトPPA調達で活用可能。サステナブル観光の文脈で導入が拡大。",
  },
];

const industryProfile = [
  {
    label: "祇園・東山・西陣 — 老舗旅館・伝統建築宿泊",
    detail:
      "祇園・東山・西陣エリアは老舗旅館・町家宿・伝統的旅館が集積。客室数10〜30室の中小規模が中心で、低圧契約が主軸。文化財・登録有形文化財指定物件も多く、改修制約と省エネ対応の両立が経営課題。",
  },
  {
    label: "四条河原町・京都駅周辺 — シティホテル集積",
    detail:
      "四条河原町・京都駅周辺はシティホテル・ビジネスホテル・外資系チェーンが連続立地。客室数100〜500室の中大型物件中心で、高圧契約が主軸。インバウンド復活で2024〜2025年に開業が加速しています。",
  },
  {
    label: "嵐山・大原・宇治 — 観光ホテル・温泉旅館",
    detail:
      "嵐山・大原・宇治・伏見の観光地周辺には大型観光ホテル・温泉旅館が立地。客室数50〜150室の中大型物件中心で、温泉系設備の電力負荷が特徴。コージェネ・GHP併設の総合エネルギー最適化が進む立地。",
  },
  {
    label: "外資系ラグジュアリー・国際チェーン進出物件",
    detail:
      "2010年代後半以降、フォーシーズンズ・パークハイアット・アマン・リッツカールトン等の外資ラグジュアリーホテルが京都進出。RE100要件・サステナブル観光対応で、再エネ調達・脱炭素設備投資の先行事例として注目。",
  },
  {
    label: "京都府の観光業支援機能",
    detail:
      "京都府観光連盟・京都市観光協会・京都商工会議所等が、宿泊業向けの省エネ・脱炭素・補助金情報提供・共同購買支援を実施。中小旅館の電気代見直しの重要な支援チャネルとなっています。",
  },
];

const switchingReality = [
  {
    label: "京都府の宿泊業の新電力浸透度",
    detail:
      "関西電力エリアの新電力比率は全国平均比やや高め（約30〜35%）。京都のシティホテル・大型旅館では新電力切替が進行中で、中小旅館・町家宿は関電継続が依然多数派ですが切替余地は大きい。商工会議所経由の共同購入スキームも普及しています。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年高騰で宿泊業の多くが市場連動から固定回帰。インバウンド復活による稼働率変動と燃調高騰のダブルパンチは経営継続に深刻で、固定3〜5年＋燃調上限ありが主流に。",
  },
  {
    label: "関西電力継続のメリット・デメリット",
    detail:
      "メリット: 安定供給・原子力寄与で燃調感応度低位・大手取引慣行・災害時BCP対応。デメリット: 新電力比1〜3円/kWh単価が高め、長期固定での競争余地は新電力に分がある場面も。",
  },
  {
    label: "新電力選定のポイント（京都×宿泊業固有）",
    detail:
      "①高圧／低圧の宿泊業供給実績、②長期固定（3〜5年）＋燃調上限の有無、③再エネ調達枠（RE100対応・サステナブル観光訴求）、④小規模需要家向けサポート体制、⑤BCP対応（南海トラフ・直下型地震想定エリア）の5点が重要です。",
  },
  {
    label: "サステナブル観光・RE100対応の主流化",
    detail:
      "外資系ラグジュアリー・国際チェーンを中心にRE100・CN対応が標準化。老舗旅館・地元ホテルでもブランド差別化要素として再エネ調達が拡大。オフサイトPPA・コーポレートPPA・非化石証書付きメニューの組合せが現実的な打ち手となります。",
  },
];

const energySaving = [
  {
    label: "高効率ヒートポンプ給湯機＋廃熱回収",
    detail:
      "ガス給湯機・電気ボイラからエコキュート級ヒートポンプ給湯機への更新で給湯電力▲40〜50%。大浴場併設旅館では廃熱回収システムとの組合せで更に効率改善が可能。SII補助＋府補助の併用で投資回収 3〜4年。",
  },
  {
    label: "高効率空調・客室人感センサー連動",
    detail:
      "古い分散型エアコンを高効率セントラルorマルチエアコンに更新＋客室人感センサー連動で空調電力▲25〜35%。客室稼働率と連動した運転制御で更に削減効果が広がります。SII補助＋府補助で投資回収 3〜4年。",
  },
  {
    label: "全館LED化＋ダウンライト・調光制御",
    detail:
      "全館LED化＋客室・廊下・宴会場の調光制御で照明電力▲50〜70%。客室稼働率連動・時間帯別演出と組み合わせれば更に効果大。京都市・府補助との組合せで投資回収 1.5〜2.5年。",
  },
  {
    label: "屋根オンサイト太陽光＋自家消費",
    detail:
      "シティホテル・大型旅館では屋根太陽光50〜500kW＋自家消費が現実的。伝統建築の老舗旅館でも意匠配慮型パネル設置の選択肢あり。RE100算入＋電気代単価下げ＋サステナブル観光訴求の3効果。需要家主導型補助との組合せで投資回収 5〜7年（補助込みで3〜5年）。",
  },
  {
    label: "BEMS導入＋客室稼働連動運転",
    detail:
      "BEMS（建物エネルギーマネジメントシステム）で需要見える化＋客室稼働率連動の空調・給湯・照明運転で総電力▲10〜20%。中小旅館でも導入ハードルが下がり、府補助＋SII補助で投資回収 1.5〜2年。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績（祇園祭・紅葉ピーク含む）に対して過剰でないか",
  "稼働率変動シナリオ（コロナ禍水準・標準・インバウンド過去最高）の電気代影響を試算したか",
  "給湯・大浴場の電力消費を把握し、ヒートポンプ化＋廃熱回収の余地を検証したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "関西電力の2023年改定後の単価で再見積を取得したか",
  "全国系・関電系・大阪ガス系・地域系の新電力10社以上から相見積を取得したか",
  "外資系顧客・国際チェーンからのRE100要請の有無を確認したか",
  "オフサイトPPA・コーポレートPPA・非化石証書付メニューの調達可能性を照会したか",
  "屋根太陽光自家消費の試算（屋根面積・意匠配慮・kW・年間発電量・回収年数）を実施したか",
  "京都府補助・京都市補助・SII・観光庁補助の併用可否を整理したか",
  "サステナブル観光・GX認証取得の経営インパクトを評価したか",
  "BCP（南海トラフ・直下型地震想定）の停電復旧・水道・空調復旧体制を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "京都の旅館・ホテルで電気代見直しの優先順位はどう決めればよいですか？",
    answer:
      "①現行契約の単価・燃調・基本料金構成の把握、②新電力10社以上からの相見積取得、③給湯・大浴場のヒートポンプ化＋廃熱回収（即効性大）、④全館LED化＋客室人感センサー（補助金活用で回収1.5〜2.5年）、⑤高効率空調更新（補助金活用で回収3〜4年）、⑥屋根太陽光自家消費（建物条件次第）の順で取り組むのが定石。京都の老舗旅館では文化財制約・意匠保護の配慮も並行検討が必要です。",
  },
  {
    question: "京都の宿泊業の稼働率変動に強い契約形態は？",
    answer:
      "固定単価3〜5年＋燃調上限あり契約が基本です。稼働率変動による使用量変化が大きい宿泊業では、市場連動型は高騰時のキャッシュフロー圧迫リスクが深刻で不向き。年間使用量200〜500万kWh級のホテルでは、固定単価で年間予算管理を安定化させるのが経営判断の中心となります。",
  },
  {
    question: "祇園・東山の老舗旅館でも屋根太陽光は可能ですか？",
    answer:
      "可能性はあります。文化財指定・伝統的建造物保存地区の指定により設計制約はありますが、意匠配慮型の太陽光パネル（瓦一体型・薄型黒色等）の選択肢が拡大しており、京都市の景観条例・文化財保護法に適合する形での設置事例も増えています。京都市環境政策局・文化財保護課の事前相談が前提ですが、伝統建築でもCN対応の選択肢が広がりつつあります。",
  },
  {
    question: "大浴場・温泉のろ過電力をどう削減できますか？",
    answer:
      "①循環ろ過ポンプの高効率インバータ化、②温度維持装置の高効率ヒートポンプ化＋廃熱回収、③大浴場利用時間帯と連動した運転制御、④温泉成分管理装置の最適化、の4方向で取り組むのが定石です。年間使用量数十万kWh規模の温泉旅館では電力▲20〜30%、年間数百万円規模のコスト削減が期待できます。",
  },
  {
    question: "インバウンドの変動リスクに備えた電気代管理は？",
    answer:
      "①稼働率変動シナリオ別の電気代試算（過去最低・標準・過去最高）、②固定単価で予算安定化、③ベース負荷（空調・給湯）の高効率化で稼働低下時の単位客室当たり負担を抑制、④BEMS導入で稼働連動運転、の4方向。観光庁・京都府の宿泊業統計を継続ウォッチし、需要変動シナリオを経営計画に織り込むことが重要です。",
  },
  {
    question: "外資系ラグジュアリーホテルのRE100要件に老舗旅館も対応すべき？",
    answer:
      "ブランド戦略次第ですが、対応の経営価値は高まっています。外資系・国際チェーンの先行事例（RE100、CN宣言、サステナブルツーリズム認証取得）は京都の宿泊業界全体のスタンダードに影響しています。老舗旅館でも非化石証書購入＋オフサイトPPA＋オンサイト太陽光の組合せでRE100対応が可能で、海外富裕層・外資企業の福利厚生利用などの差別化に繋がります。",
  },
  {
    question: "京都市・京都府の宿泊業向け補助金は何が活用できますか？",
    answer:
      "京都府の中小企業省エネ・脱炭素設備導入補助、京都市の環境保全設備・観光関連事業者向け補助、国の観光庁宿泊施設インバウンド対応等支援補助、SII省エネ補助（ZEB・既存建築物省エネ化）、需要家主導型再エネ・PPA補助の5層を組合せ可能。設備別・事業別の重複可否は事前確認が必要です。最新公募状況は京都府商工労働観光部・京都市環境政策局・観光庁・SIIの公式窓口で確認してください（2025年度時点）。",
  },
  {
    question: "南海トラフ・京都盆地地震のBCPは宿泊業として何を備えるべきですか？",
    answer:
      "京都府は南海トラフ巨大地震・京都盆地南北方向の活断層帯の被害想定エリアに該当し、長期間の停電・断水・観光客避難対応のリスクがあります。宿泊業として①自家発電（小型ディーゼル＋燃料備蓄）、②蓄電池、③飲料水・浴用水備蓄、④観光客向け避難ルート整備、⑤多言語対応BCPマニュアルの五本柱で備える事例が増えています。観光庁・京都府のBCP補助金との組合せで投資ハードルを下げることが可能です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "関西電力 法人向け料金プラン", url: "https://kepco.jp/" },
  { name: "関西電力送配電 供給計画", url: "https://www.kansai-td.co.jp/" },
  { name: "京都府 商工労働観光部", url: "https://www.pref.kyoto.jp/" },
  { name: "京都市 産業観光局・環境政策局", url: "https://www.city.kyoto.lg.jp/" },
  { name: "観光庁 宿泊旅行統計調査", url: "https://www.mlit.go.jp/kankocho/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function KyotoHotelRyokanElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/kyoto-hotel-ryokan-electricity-cost"
        datePublished="2026-05-28"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "京都府の旅館・ホテルの電気料金", url: "https://simulator.eic-jp.org/kyoto-hotel-ryokan-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">京都府の旅館・ホテルの電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            京都府の旅館・ホテルの電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            京都府はインバウンド観光復活で稼働率と客室単価が上昇する一方、燃調高騰・サステナブル観光要請が経営課題となる宿泊業集積地です。本ページでは「京都府 × 旅館・ホテル」というクロス領域に絞り、関西電力エリア固有の単価事情と、空調／給湯／温泉ろ過の電力プロファイル、稼働率変動への備え、補助金活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-28" updatedAt="2026-05-28" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>祇園・東山・嵐山・京都駅周辺の宿泊業集積と電力プロファイル</li>
              <li>シティホテル／観光旅館／老舗中小旅館のBefore/After削減事例</li>
              <li>関西電力エリアの単価水準と燃調感応度の優位性</li>
              <li>外資系RE100要請・サステナブル観光対応の進め方</li>
              <li>京都×宿泊業に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「京都 × 旅館・ホテル」のクロス領域に特化したガイドです。京都府全体の文脈は{" "}
            <Link href="/kyoto-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              京都府の法人電気料金完全ガイド
            </Link>
            、業種一般としてのホテル業全体は{" "}
            <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              ホテル業の電気料金見直しポイント
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              京都府の宿泊業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府は世界的観光都市として、祇園・東山・嵐山の老舗旅館、四条河原町・京都駅周辺のシティホテル、宇治・伏見・大原の観光ホテルまで多様な宿泊業態が共存しています。インバウンド需要の復活と燃調高騰の両方を受け、電気代管理の経営重要度が高まる業種です。
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
              京都府全体の文脈は{" "}
              <Link href="/kyoto-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                京都府の法人電気料金ガイド
              </Link>
              、関西電力エリア全体は{" "}
              <Link href="/region-kansai-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                関西電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                ホテル業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              関西電力エリアの主要電力会社・新電力(京都×宿泊業での実情)
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府内の宿泊業は、関西電力に加えて全国系新電力・大阪ガス系・再エネ特化型・地域系新電力と多様なプレイヤーが供給。シティホテル・大型旅館では切替シフトが進行中で、中小旅館も商工会議所支援で選択肢が広がっています。
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
              関西電力エリアの料金水準と宿泊業への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              高圧・低圧の単価レンジ、宿泊業の電気代単位指標（客室当たり・売上比）、原子力寄与による燃調感応度の低位性を、宿泊業の代表的な契約タイプ別に整理します。
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
              規模別事例3件 — シティホテル／観光旅館／老舗中小旅館（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府内の代表的な3規模の宿泊業で、契約見直し＋ヒートポンプ給湯＋空調更新＋屋根太陽光の組合せによる削減効果をBefore/After方式で提示します。いずれも公開事例・観光庁統計から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              京都×宿泊業固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都宿泊業の電気代上昇は、通年空調・給湯ベース負荷・温泉/大浴場循環ろ過電力・年4〜5回のピーク重複・インバウンド変動リスク・ESG/サステナブル観光要求の5要因が複合的に作用します。
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
              補助金・優遇制度 — 京都府・京都市・国の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都府中小企業省エネ補助、京都市環境保全・観光関連補助、観光庁宿泊施設インバウンド対応等支援、国のSII省エネ補助、需要家主導型PPA補助の5層を組合せ、宿泊業更新投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（祇園／東山／四条／嵐山／宇治）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都の宿泊業は、祇園・東山・西陣の老舗旅館・伝統建築、四条河原町・京都駅のシティホテル、嵐山・大原・宇治の観光・温泉旅館、外資ラグジュアリーの先行事例、商工会議所・観光連盟の支援機能という構造です。
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
              電力会社切替の実情 — 関西電力と新電力の比較（宿泊業版）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              シティホテル・大型旅館では切替シフト進行中、市場連動からの固定回帰、外資系RE100要請による再エネ調達主流化、サステナブル観光のブランド差別化が共通トレンドです。
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
              京都×宿泊業の省エネ・自家消費事例（給湯ヒートポンプ／空調／LED／屋根太陽光／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              宿泊業の省エネは、高効率ヒートポンプ給湯機＋廃熱回収、高効率空調＋客室人感センサー、全館LED＋調光制御、屋根オンサイト太陽光、BEMS＋客室稼働連動運転の5軸が主力。シティホテル・大型旅館・中小旅館いずれでも投資回収2〜4年で実現可能なメニューが揃っています。
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
              京都×宿泊業 契約見直しチェックリスト（12項目）
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
              シミュレーターで京都×宿泊業の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              京都の宿泊業は、通年空調・温泉電力・年複数回のピーク・インバウンド変動など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・給湯ヒートポンプ・屋根太陽光のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（11〜1月、紅葉/正月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜20%の削減レンジの自社適用可能性を見立てる</li>
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
              { href: "/kyoto-business-electricity-cost", title: "京都府の法人電気料金ガイド（地域一般）", description: "京都府全体の文脈・関西電力エリア・観光業以外も。" },
              { href: "/hotel-electricity-cost-review", title: "ホテル業の電気料金見直し（業種一般）", description: "シティ・リゾート・ビジネスホテルの業種別最適化。" },
              { href: "/region-kansai-business-electricity", title: "関西電力エリアの法人電気代事情", description: "関西全体の料金体系・原子力寄与・改定動向。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/osaka-sme-factory-electricity-cost", title: "大阪府の中小製造業・町工場の電気料金", description: "関西電力エリアの中小製造業クロス（兄弟ページ）。" },
              { href: "/hyogo-steel-electricity-cost", title: "兵庫県の鉄鋼・重工業の電気料金", description: "関西電力エリアの神戸・姫路鉄鋼クロス（兄弟ページ）。" },
              { href: "/okinawa-hotel-electricity-cost", title: "沖縄県のホテル・宿泊の電気料金", description: "沖縄電力エリアの宿泊業クロス（兄弟ページ）。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマーク。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "宿泊業に固定が向く理由。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "宿泊業で市場連動を避けるべき理由。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "関西エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "関西エリアでの感応度を理解。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "外資系RE100対応の追加性ある再エネ調達。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイトvsオフサイトPPA", description: "シティホテル屋根活用と意匠配慮型。" },
            ]}
          />

          <ContentCta
            heading="京都の旅館・ホテルの電気代リスクを自社条件で試算する"
            description="祇園・東山・嵐山・京都駅周辺など京都の宿泊業固有の条件（関西電力エリア・通年空調・温泉ろ過・インバウンド変動）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・給湯ヒートポンプ・屋根太陽光のROIもあわせて確認できます。"
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
            heading="京都の旅館・ホテルの電力契約見直し、専門家に相談しませんか？"
            description="シティホテル・観光旅館・老舗中小旅館いずれもインバウンド変動とサステナブル観光要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で京都府内宿泊事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
