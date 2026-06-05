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
  "愛媛県の製紙・紙加工工場の電気料金完全ガイド｜四国中央市の日本一の紙産業集積と四国電力";
const pageDescription =
  "愛媛県の製紙・紙加工業に特化。四国中央市の「日本一の紙のまち」の製紙・紙加工・衛生用品の専業集積を核に、抄紙機・蒸解・乾燥・黒液回収ボイラー・自家発電の電力プロファイル、四国電力エリアの単価事情（伊方原発再稼働の影響）、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "愛媛県 製紙 電気料金",
    "四国中央 紙 電気代",
    "製紙工場 抄紙機 電力",
    "四国電力 特別高圧 製紙",
    "紙 パルプ 自家発電",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/ehime-paper-electricity-cost",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/ehime-paper-electricity-cost",
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
    label: "愛媛県の製紙産業集積 — 四国中央市「日本一の紙のまち」",
    detail:
      "愛媛県四国中央市は、紙・パルプ・紙加工品の製造品出荷額で全国市町村のトップクラスに位置する「日本一の紙のまち」とされ、製紙・板紙・家庭紙・衛生用品・紙加工の専業企業が高密度に集積しています。大王製紙、丸住製紙、ユニ・チャームなどの拠点を含むサプライチェーンが川之江・三島地区を中心に半径数km圏に凝集し、パルプ蒸解・抄紙機・乾燥・塗工・加工が連続稼働する装置産業クラスターを形成しています。装置集約度が高いため、特別高圧・高圧の大口需要家が一地域に集中する全国的にも特徴的な構造です（出典: 愛媛県統計・経産省工業統計／業界団体資料から整理）。",
  },
  {
    label: "製紙工場の電力プロファイル — 蒸解／抄紙機／乾燥／塗工",
    detail:
      "製紙工程の電力消費は、抄紙機の駆動（ワイヤーパート・プレスパート・ドライヤーパートのモーター群と真空ポンプ・ブロワ）、パルプ調成（リファイナー・ポンプ）、塗工・加工ラインで大きく、これに乾燥用の大量の蒸気需要が重なります。一般に製紙は「電力と蒸気を同時に大量消費する」典型的な熱電併給型プロセスで、抄紙機モーターのインバータ化や真空系・ブロワの省エネが電力単価最適化の主戦場とされます（出典: 日本製紙連合会／省エネ関連統計から整理）。",
  },
  {
    label: "黒液回収ボイラー・バイオマスによる自家発電比率の高さ",
    detail:
      "クラフトパルプ工程で発生する黒液を回収ボイラーで燃焼し蒸気・電力を回収するほか、木質バイオマス・古紙・廃材を燃料とする自家発電設備を併設する工場が多く、製紙業は製造業の中でも自家発電比率が相対的に高い業種とされます。買電と自家発の最適配分、余剰電力の扱い、補修期の買電増などが運用上の論点になります。なお本記述は業種一般の傾向整理であり、特定の電力会社・契約形態を推奨するものではありません（出典: 日本製紙連合会／エネ庁統計から整理）。",
  },
  {
    label: "古紙・家庭紙・衛生用品の連続操業と電力負荷",
    detail:
      "四国中央市の集積は、印刷用紙・板紙だけでなく、ティッシュ・トイレットペーパー等の家庭紙、紙おむつ等の衛生用品、各種紙加工品まで幅広く、多くが24時間連続操業です。連続抄紙・連続乾燥・連続加工はベース負荷が高く、デマンドの平準化余地は限定的な一方、停機・補修期の電力プロファイル管理や省エネ更新の積み上げが効果を生みやすい構造です。",
  },
  {
    label: "四国電力エリアの系統と製紙工場の相互依存",
    detail:
      "四国エリアの電力供給は四国電力（小売）と四国電力送配電（一般送配電事業者）が担い、電源構成は火力に加えて伊方原発の稼働状況が大きく影響します。製紙クラスターの特別高圧・高圧需要は四国エリア需要の柱の一つで、自家発を持つ工場でも補修期や増産期には買電に依存するため、エリア単価動向と系統運用への感応度が高い状態が続いています（出典: 四国電力送配電 供給・系統情報／エネ庁資料から整理）。",
  },
];

const utilitiesList = [
  {
    name: "四国電力（旧一般電気事業者・小売）",
    role: "一般小売事業者（旧一電）",
    detail:
      "四国エリア内最大シェア。四国中央市の製紙・紙加工の特別高圧・高圧需要家を多数抱える。法人向けは『特別高圧電力』『高圧電力』系メニューが主軸で、固定単価・燃調連動型ともに整備されています。長期安定供給と地域の災害復旧体制が強みで大口取引は維持基調ですが、改定局面では実質値上げ局面もあり、競合新電力との価格差が論点になる時期もあります。なお本記述は事業者比較の整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "全国系新電力（ENEOSでんき・出光・Looopでんき・サミットエナジー等）",
    role: "全国展開新電力",
    detail:
      "四国エリアの特別高圧・大型高圧の競争入札における主要対抗馬。固定単価メニュー（3〜5年契約）が中心で、年間使用量の大きい製紙工場の入札で実績を積み上げています。脱炭素対応として非化石証書付き・再エネトラッキング付きメニューの引合いが増えており、製紙の自家発電と買電を組み合わせた調達設計の選択肢が広がっています。",
  },
  {
    name: "地域系・ガス系新電力（四国ガス系・地場PPS等）",
    role: "地域系新電力",
    detail:
      "地場のガス事業者系・地域新電力は、コージェネ併設工場や都市ガス需要家との一括最適化提案が強み。製紙・紙加工のように蒸気と電力を同時に大量消費する装置産業では、ガス＋電気の総合最適パッケージの検討余地があります。供給可能枠は案件規模により制約があるため早期照会が有効です。",
  },
  {
    name: "再エネ特化型・PPA事業者（みんな電力・自然電力・オリックス・地場太陽光開発者等）",
    role: "再エネ特化型／PPA",
    detail:
      "顧客企業や取引先からのScope3対応要請が強まるなか、追加性のある再エネ調達ニーズが拡大。製紙工場は屋根・敷地面積が大きいケースがあり、屋根オンサイトPPA、オフサイトPPA（県内・四国域内の太陽光案件）、コーポレートPPAの引合いが増えています。自家発（バイオマス）と再エネ買電の組合せが論点で、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    name: "撤退・新規受付停止状況（2022〜2024年）",
    role: "市場動向",
    detail:
      "2022年のJEPX高騰局面では四国エリアでも一部新電力が新規受付停止・撤退に動きました。2024年以降は供給枠が徐々に回復していますが、特別高圧・大型高圧案件では供給可能kWh枠の確保が常に課題で、契約満了の早期（12ヶ月前目安）からの入札着手が重要です。",
  },
  {
    name: "JEPX四国エリアプライスの動向",
    role: "市場参照",
    detail:
      "JEPX四国エリアのスポット価格は中国・関西と概ね連動しつつ、伊方原発の稼働状況や火力稼働、再エネ出力により変動します。市場連動型契約の製紙工場では2022〜2023年に大幅な単価上昇を経験し、現在は固定回帰の動きが優勢です。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。",
  },
];

const priceBenchmark = [
  {
    label: "四国電力エリアの特別高圧 — 製紙工場の単価水準",
    detail:
      "大規模製紙・板紙工場（2,000kW超）の特別高圧電力量料金は標準メニューで概ね16〜19円/kWh＋調整項目が目安。これに燃料費調整額（2024〜2025年で概ね＋2.0〜＋4.0円/kWh目安）と再エネ賦課金（2026年度4.18円/kWh・確定）を加算した実質単価は22〜27円/kWhレンジが目安です。新電力競争入札では標準比1〜2円/kWh下げが目安で、年間数千万〜億kWh級の製紙工場では大きな金額インパクトになります。自家発を持つ工場では買電分のみが対象となる点に留意が必要です。数値は目安レンジで、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "高圧電力 — 中小紙加工工場の単価",
    detail:
      "川之江・三島地区の高圧の紙加工・家庭紙・印刷加工工場（500kW〜2,000kW級）は高圧電力系メニューが中心で、電力量料金は17〜21円/kWh＋調整項目が目安。賦課金・燃調を加えた実質単価は24〜29円/kWhレンジが目安です。新電力経由なら2〜3円/kWh安いケースが多く、規模の割に見直し効果が出やすいレンジとされます（数値は目安）。",
  },
  {
    label: "燃料費調整額の感応度 — 四国電力エリアと伊方原発",
    detail:
      "四国電力エリアの電源構成は火力に加え伊方原発の稼働状況に左右されます。原発稼働時は燃料費・燃調が相対的に落ち着きやすい一方、定期検査・停止局面では火力比率が上がり燃調感応度が高まる傾向があります。2022年Q4〜2023年Q1のピーク時には全国的に燃調が大幅拡大した局面もあり、買電比率の高い工場ほど変動の影響を受けます（出典: 四国電力 単価実績／エネ庁エネルギー白書から整理）。",
  },
  {
    label: "再エネ賦課金の累積負担",
    detail:
      "2026年度再エネ賦課金は4.18円/kWh（確定）。年間買電量が大きい製紙工場では賦課金だけで相応の年間負担となります。一部の電力多消費業種は減免（賦課金算定額の8割減免）の対象となる可能性があり、電気使用量原単位の高い製紙・板紙の事業所は適用要件の確認・申請を検討する価値があります。なお自家消費分には賦課金がかからないため、自家発・PPAの活用が賦課金負担の軽減にも寄与します。",
  },
];

const industryImpact = [
  {
    title: "業種1: 大規模製紙工場（特別高圧・自家発併用 20,000kW、年間 1.2億kWh買電）",
    before:
      "Before: 四国中央市の大規模製紙工場A（板紙・印刷用紙、抄紙機複数ライン、黒液回収ボイラー＋バイオマス自家発併設）。代表シナリオとして、自家発で一定割合を賄いつつ補修期・増産期は買電に依存。四国電力の特別高圧契約＋燃調連動で、燃料高騰時は買電分の単価上昇が利益を圧迫。年間電気代（買電）約30億円規模を想定。",
    after:
      "After: 全国系新電力との競争入札で買電分を固定3年契約に切替（一部非化石証書付）／抄紙機ドライヤー・真空系の省エネ更新と廃熱回収強化／バイオマス自家発の稼働率最適化で買電ピークを抑制／蒸気と電力の同時最適（コージェネ運用見直し）／BEMS・需給予測導入。",
    result:
      "Result: 年間買電コスト 約30億円 → 約25億円（▲約17%、▲5億円・目安）／買電契約電力 20,000→18,000kW／自家発比率の改善でピーク買電を抑制／いずれも代表シナリオの目安レンジです。",
  },
  {
    title: "業種2: 中規模板紙・家庭紙工場（特別高圧〜高圧 4,000kW、年間 3,000万kWh）",
    before:
      "Before: 三島地区の中規模板紙・家庭紙工場B（連続抄紙＋乾燥＋加工が24時間稼働、自家発は小規模または無し）。市場連動プラン併用で2023年の高騰局面では月次請求が大きく上振れ。年間電気代 約8億円規模を想定（代表シナリオ）。",
    after:
      "After: 入札特化型新電力に固定2年で切替（燃調上限あり）／抄紙機モーターのインバータ化＋真空ポンプ高効率機更新（SII補助1/2活用）／乾燥工程の廃熱回収＋蒸気系最適化／コンプレッサー・ブロワの集中管理／自家消費太陽光2MW＋蓄電池導入で買電ピークシフト。",
    result:
      "Result: 年間電気代 約8億円 → 約6.6億円（▲約17%、▲1.4億円・目安）／契約電力 4,000→3,600kW／投資回収 補助金後 2〜3年前後（目安）／買電の単価変動リスクを縮小。数値は目安レンジです。",
  },
  {
    title: "業種3: 中小紙加工工場（高圧 1,200kW、年間 900万kWh）",
    before:
      "Before: 川之江地区の中小紙加工・印刷加工C社（従業員80名）。塗工・スリット・断裁・製袋など加工中心で、空調・コンプレッサー・搬送の電力が主体。四国電力の高圧電力＋燃調連動で、2023年度は燃調影響で前年比増の電気代増加。年間電気代 約2.3億円を想定。",
    after:
      "After: 地域系・全国系新電力に固定2年・燃調上限ありで切替／工場LED化＋空調高効率化（県補助＋SII併用）／コンプレッサーのエア漏れ対策＋集中管理／加工ラインモーターのインバータ化／屋根太陽光500kW自家消費。",
    result:
      "Result: 年間電気代 約2.3億円 → 約1.85億円（▲約20%、▲4,500万円・目安）／契約電力 1,200→1,080kW／投資回収 補助金後 2.0年前後（目安）／いずれも代表シナリオの目安レンジです。",
  },
];

const costFactors = [
  {
    label: "抄紙機・乾燥工程の電力＋蒸気の同時大量消費",
    detail:
      "製紙工場では抄紙機のモーター群・真空系・ブロワ・ポンプの電力と、乾燥工程の大量の蒸気が同時に発生し、装置産業の中でもエネルギー原単位が高い業種とされます。蒸気と電力を同時最適化するコージェネ運用、廃熱回収、抄紙機の駆動効率改善が、電力単価とエネルギーコスト全体の最適化の主戦場です（出典: 日本製紙連合会／省エネ統計から整理）。",
  },
  {
    label: "連続操業によるベース負荷の高さ",
    detail:
      "連続抄紙・連続乾燥・連続加工は24時間ベース負荷が高く、デマンドの山谷をならす余地が限定的なため、契約電力（kW）そのものを下げる省エネ更新（モーターのインバータ化、真空・ブロワの高効率化）と自家発・蓄電池によるピーク買電抑制が基本料金削減の中心になります。",
  },
  {
    label: "四国電力エリアの燃調感応度と伊方原発",
    detail:
      "四国エリアは伊方原発の稼働状況で電源構成・燃料費が変動します。原発停止局面では火力比率が上がり燃調感応度が高まる傾向があり、買電比率の高い製紙工場ほどコスト変動の影響を受けます。今後も伊方の稼働見通しと燃調を見据えた固定vs市場連動の選択が経営判断の中心になります。",
  },
  {
    label: "自家発（黒液・バイオマス）と買電の最適配分",
    detail:
      "製紙は自家発電比率が高い一方、補修期・増産期・自家発トラブル時には買電が増えます。自家発の稼働率・燃料コストと買電単価を見比べ、どの局面で買電を増やすかの配分設計がコストを左右します。余剰電力の系統への扱いや、非化石価値の確保も論点になります。",
  },
  {
    label: "再エネ賦課金と取引先のCN要請",
    detail:
      "再エネ賦課金（2026年度4.18円/kWh・確定）が買電コストに上乗せされるなか、衛生用品・家庭紙・印刷用紙の納入先からScope3 GHG削減要請が強まり、製紙側でも再エネ電源調達（PPA・非化石証書）と自家発のグリーン化が論点化。電気代単価そのものに加え、再エネ調達コストも経営計画に織り込む必要があります。",
  },
];

const subsidies = [
  {
    name: "愛媛県の産業振興・省エネ／脱炭素関連補助（愛媛県）",
    target: "県内中小・中堅製造業の省エネ設備・脱炭素設備導入",
    rate: "対象経費の1/3〜1/2（事業区分による・上限あり）※2026年度時点の目安",
    note: "県独自の産業振興政策に基づく補助メニュー。製紙・紙加工中小製造業の高効率設備更新・コンプレッサー・LED・モーターのインバータ化・廃熱回収・BEMS等が対象となり得ます。SII補助との併用可否は事業別に要確認。最新の公募状況は愛媛県の公式窓口で確認してください。",
  },
  {
    name: "省エネ補助金（経産省 SII／工場・事業場型）",
    target: "高効率モーター・インバータ・真空ポンプ・ブロワ・コンプレッサー・ヒートポンプ・LED等",
    rate: "中小1/2、大企業1/3、上限15億円（先進事業）",
    note: "製紙・紙加工の更新案件で活用しやすい主力補助。抄紙機周辺の真空系・ブロワの高効率化、コンプレッサー更新、全館LED化、廃熱回収などで採択実績が見込まれます。",
  },
  {
    name: "需要家主導型再エネ発電プロジェクト補助・PPA支援",
    target: "オンサイト／オフサイト太陽光PPA・蓄電池併設・バイオマス活用",
    rate: "kWh定額または投資額1/2以内（事業による）",
    note: "屋根・敷地面積の大きい製紙工場で活用余地。自家発（バイオマス）に加え、屋根太陽光PPAやオフサイトPPAでScope2のグリーン化を進める事例が想定されます。導入可否は事業区分・要件により異なります。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    target: "脱炭素関連設備の投資税額控除・特別償却",
    rate: "投資額の10%税額控除または50%特別償却（要件あり）",
    note: "省エネ設備・燃料転換・PPA関連設備の取得で活用可能。所管: 経産省・国税庁。地域の経産局に事前相談窓口があり、工場の設備更新時に組合せ検討するのが定石です。",
  },
  {
    name: "サプライチェーン強靱化・脱炭素関連補助（地域経産局等）",
    target: "製紙・紙加工の生産プロセス革新・脱炭素・省エネ",
    rate: "年度公募により1/2〜2/3",
    note: "生産プロセスの高度化・脱炭素を後押しする年度公募メニュー。製紙クラスターの設備更新・廃熱回収・バイオマス高度利用などが対象となり得ます。年度ごとの公募タイミング把握が重要です。",
  },
];

const industryProfile = [
  {
    label: "四国中央市 川之江・三島地区 — 製紙・板紙の中核",
    detail:
      "川之江・三島地区は製紙・板紙・印刷用紙の中核エリアで、大規模抄紙ライン・黒液回収ボイラー・バイオマス自家発を併設する装置産業が集中。特別高圧・大型高圧の集中度が高く、年間総電力需要は地域全体で大きな規模に達するとされます（出典: 業界団体・自治体統計から整理）。",
  },
  {
    label: "家庭紙・衛生用品 — ティッシュ・トイレットペーパー・紙おむつ",
    detail:
      "ティッシュ・トイレットペーパー等の家庭紙、紙おむつ等の衛生用品の生産拠点が集積。連続抄紙・連続加工が24時間稼働し、ベース負荷が高い高圧〜特別高圧需要家が多数立地します。需要先からの品質・環境要請が強く、再エネ調達のニーズが高まっています。",
  },
  {
    label: "紙加工・コンバーティング — 塗工・スリット・製袋・印刷加工",
    detail:
      "中小の紙加工・コンバーティング（塗工・スリット・断裁・製袋・印刷加工）メーカーが多数立地。高圧契約が中心で、設備更新と新電力切替を組み合わせた電気代見直し余地が大きいエリアです。",
  },
  {
    label: "原料・古紙・物流連動 — 古紙回収・パルプ・製品物流",
    detail:
      "古紙回収・パルプ調達・製品物流が地域内で連動し、原料から製品までのサプライチェーンが四国中央市周辺で完結する集積構造を形成。物流・倉庫・関連加工の事業所も電力需要家として連なります。",
  },
  {
    label: "四国域内の電源・系統との関係",
    detail:
      "製紙クラスターは四国電力送配電の系統に接続し、自家発を持つ工場でも補修期・増産期は買電に依存します。伊方原発の稼働状況・火力稼働・再エネ出力に応じてエリア単価が変動するため、買電比率の管理が重要です。",
  },
];

const switchingReality = [
  {
    label: "四国エリアの新電力浸透度",
    detail:
      "四国電力エリアの新電力比率は首都圏・関西よりやや低めとされますが、四国中央市の特別高圧・大型高圧の製紙案件では競争入札が浸透し、新電力落札比率は一定の水準にあります。中小紙加工は四国電力継続が依然多数派ですが切替余地は大きい状況です（出典: 電力ガス取引監視等委員会資料から整理）。",
  },
  {
    label: "市場連動プランからの固定回帰",
    detail:
      "2022〜2023年の高騰で市場連動採用の製紙工場の多くが固定回帰しました。長期固定3〜5年契約が主流化しており、特別高圧では非化石証書付き／再エネトラッキング付きの組合せメニューが標準的なオプションになっています。自家発を持つ工場では買電分のみの固定化設計が検討されます。",
  },
  {
    label: "四国電力継続のメリット・デメリット",
    detail:
      "メリット: 地域の災害復旧体制・大口需要家向けエネルギーマネジメント支援・系統運用面の安定性。デメリット: 新電力比で単価が高めになる局面があること、燃料費調整額の上限有無の確認が必要なこと。買電量の大きい製紙需要家では単価差が大きな金額になり得ます。いずれの選択も自社の買電比率・BCP要件に応じて総合判断が必要です。",
  },
  {
    label: "新電力選定のポイント（愛媛×製紙固有）",
    detail:
      "①製紙・装置産業への供給実績、②非化石証書／再エネトラッキング付メニュー（CN対応）、③長期固定（3〜5年）の単価安定性、④燃調上限・連動条件、⑤自家発との併用・余剰電力の扱いに対応できるかの5点が重要です。買電比率の変動に柔軟な契約設計が望まれます。",
  },
  {
    label: "PPA・オフサイト調達と自家発のグリーン化",
    detail:
      "取引先のCN要請と歩調を合わせ、屋根オンサイトPPA／オフサイトPPA（県内・四国域内の太陽光案件）／コーポレートPPAが拡大。製紙はバイオマス自家発を持つため、自家発のグリーン価値と買電のRE化を組み合わせた調達設計が論点です。RE100調達コストは従来単価＋1〜3円/kWh程度のプレミアムが目安です（数値はあくまで目安）。",
  },
];

const energySaving = [
  {
    label: "抄紙機モーターのインバータ化＋駆動効率改善",
    detail:
      "抄紙機のワイヤー・プレス・ドライヤー各パートのモーターや真空ポンプ・ブロワのインバータ化・高効率機更新で電力▲15〜25%が見込めます。連続運転のためベース電力が大きく、駆動効率の改善が契約電力（kW）削減に直結。SII補助＋県補助の併用で投資回収 2〜4年が目安です。",
  },
  {
    label: "乾燥工程の廃熱回収＋蒸気系最適化",
    detail:
      "ドライヤーパートの排気・凝縮水・排ガスの廃熱を回収し、調成・前工程の温水や予熱に再利用することで全体エネルギーを最適化。蒸気と電力を同時最適化するコージェネ運用見直しと合わせ、買電・燃料の双方を削減できます。投資回収は3〜4年が目安です。",
  },
  {
    label: "真空系・コンプレッサー・ブロワの高効率化＋集中管理",
    detail:
      "抄紙機の真空系、エア漏れ・過剰圧力のコンプレッサー、ブロワの高効率インバータ更新＋集中管理で電力▲15〜25%。製紙・紙加工いずれでも投資効率が高く、SII補助1/2でほぼ確実に回収可能（1.5〜2.5年）とされます。",
  },
  {
    label: "屋根オンサイトPPA＋自家消費・バイオマス自家発の最適化",
    detail:
      "敷地・屋根面積の大きい製紙工場では屋根太陽光の自家消費PPAが現実的な打ち手。初期投資ゼロでRE100算入＋買電単価下げが両立します。加えてバイオマス・黒液自家発の稼働率最適化で買電ピークを抑制でき、自家消費分には賦課金がかからないため賦課金負担の軽減にも寄与します。導入規模は屋根・敷地面積に依存します。",
  },
  {
    label: "BEMS・需給予測＋デマンドレスポンス",
    detail:
      "BEMSで需要見える化＋翌日需給予測＋DR市場参加で、買電ピーク▲10〜15%＋DR報酬収入を獲得可能。自家発を持つ工場では自家発・蓄電池・買電の最適配分を自動化することで、補修期や燃料高騰局面のコスト変動を平準化できます。",
  },
];

const checklistItems = [
  "買電の契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "抄紙機・乾燥・塗工の工程別kW・年間使用kWhを把握しているか",
  "自家発（黒液・バイオマス）と買電の最適配分を局面別に設計しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "四国電力の改定後単価で再見積を取得したか",
  "全国系・地域系・再エネ特化型の新電力10社以上から相見積を取得したか",
  "取引先（家庭紙・衛生用品納入先等）からのScope3/CN要請に対応する再エネ調達計画があるか",
  "屋根オンサイトPPAの試算（屋根面積・kW・年間発電量・回収年数）を実施したか",
  "オフサイトPPA・コーポレートPPAの調達可能性をデベロッパーに照会したか",
  "愛媛県補助・SII・地域経産局補助の併用可否を設備別に整理したか",
  "伊方原発の稼働状況に応じた燃調変動を経営計画に織り込んだか",
  "停電・系統トラブル時のBCP（自家発・蓄電池・復旧優先度）を契約小売側と確認したか",
];

const faqItems = [
  {
    question: "愛媛県の製紙工場は四国電力エリア固有の単価リスクが大きいですか？",
    answer:
      "四国電力エリアは伊方原発の稼働状況で電源構成・燃料費が変動する構造です。原発稼働時は燃料費・燃調が相対的に落ち着きやすい一方、定期検査や停止局面では火力比率が上がり燃調感応度が高まる傾向があります。製紙は自家発電比率が高い業種ですが、補修期や増産期には買電に依存するため、買電比率の高い局面ほど単価変動の影響を受けます。固定単価＋燃調上限ありのプランへの切替や、自家発の稼働率最適化と再エネ調達でヘッジするのが基本戦略です。なお本回答は一般的な整理であり、特定の電力会社・契約形態を推奨するものではありません（出典: 四国電力 単価実績／エネ庁エネルギー白書から整理）。",
  },
  {
    question: "製紙工場で電力消費が最も大きい工程はどこですか？",
    answer:
      "一般に抄紙機の駆動（ワイヤー・プレス・ドライヤー各パートのモーター群）と真空系・ブロワ・ポンプが電力消費の中心で、これにパルプ調成のリファイナー・ポンプ、塗工・加工ラインが続きます。さらに乾燥工程では大量の蒸気を同時に消費するため、製紙は電力と蒸気を同時に大量消費する典型的なプロセスです。抄紙機モーターのインバータ化、真空・ブロワの高効率化、乾燥工程の廃熱回収が電力単価最適化の主戦場です（出典: 日本製紙連合会／省エネ統計から整理）。",
  },
  {
    question: "静岡県の製造業ガイドとこの記事はどう違いますか？",
    answer:
      "静岡県の製造業ガイド（shizuoka-manufacturing-electricity-cost）は富士の製紙にも言及しますが、対象は中部電力エリアの輸送機器・楽器・製紙などを横断する製造業全般です。本記事は「四国中央市の製紙専業集積・四国電力エリア・出荷額日本一の紙のまち」という独自軸に絞り、伊方原発の影響や黒液回収ボイラー・バイオマス自家発を前提とした買電最適化など、四国中央の製紙固有の論点を扱います。検索意図が異なるため、エリア（四国電力）と地域（四国中央市）が一致するのは本記事です。富士・中部の製造業全般を調べる場合は静岡の記事、四国中央の製紙専業集積を調べる場合は本記事を参照してください。",
  },
  {
    question: "黒液回収ボイラーやバイオマス自家発があれば買電の見直しは不要ですか？",
    answer:
      "不要ではありません。製紙は自家発電比率が高い業種とされますが、定期補修・トラブル・増産局面では買電が増え、買電分には燃調と再エネ賦課金（2026年度4.18円/kWh・確定）が上乗せされます。自家発の稼働率・燃料コストと買電単価を局面別に見比べ、どの局面でどちらを増やすかの最適配分を設計することが重要です。買電分の固定化・燃調上限の付与、需給予測による買電ピーク抑制で変動を平準化できます。なお本回答は一般的な整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "伊方原発の再稼働は製紙工場の電気代にどう影響しますか？",
    answer:
      "伊方原発の稼働は四国エリアの電源構成と燃料費に影響します。原発稼働時は火力依存度が下がり、燃料費・燃料費調整額が相対的に落ち着きやすくなる傾向があります。一方、定期検査や停止局面では火力比率が上がり、燃調が拡大しやすくなります。買電比率の高い製紙工場ほどこの変動の影響を受けるため、伊方の稼働見通しを踏まえつつ、固定単価・燃調上限・再エネ調達でリスクを抑えるのが基本です。JEPX四国エリア価格や四国電力の単価実績を継続的に確認することが有効です。",
  },
  {
    question: "四国中央市の製紙工場でどの新電力が実績がありますか？",
    answer:
      "全国系（ENEOSでんき・出光・サミットエナジー等）と入札特化型新電力が、特別高圧・大型高圧の製紙案件における主要プレイヤーです。固定単価3〜5年契約＋非化石証書付メニューが標準化しており、再エネトラッキング付きの追加性を持つメニューも引合いが増えています。自家発との併用や買電比率の変動に柔軟な契約設計ができるかが選定のポイントです。特定企業の落札実績は入札情報公開の範囲で各社IRや業界紙で確認可能で、本回答は特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    question: "愛媛県の補助金は製紙・紙加工工場でも使えますか？",
    answer:
      "使える可能性があります。県独自の産業振興政策に基づき、中小・中堅製造業の省エネ設備・脱炭素設備導入を後押しする補助メニューが整備されています。モーターのインバータ化・真空ポンプ・ブロワ・コンプレッサー更新・廃熱回収・LED・BEMSなど製紙・紙加工で活用しやすい設備が対象となり得ます。国のSII補助や地域経産局の補助との併用可否は事業区分・設備別に確認が必要です。最新の公募状況は愛媛県の産業政策・企業立地の公式窓口で確認してください（2026年度時点の整理）。",
  },
  {
    question: "停電・系統トラブル時のBCPは新電力切替後も継続できますか？",
    answer:
      "物理的な復旧作業は四国電力送配電（一般送配電事業者）が担うため、契約小売事業者によらず復旧時間そのものは同じです。ただし停電通知・補償・自家発切替支援などのソフト面は小売事業者ごとに体制が異なるため、契約時にBCP対応窓口・連絡フロー・自家発との連系条件を必ず確認してください。製紙工場は黒液・バイオマス自家発を持つケースが多く、系統トラブル時の自家発運転継続や系統復旧時の連系手順を平時から確認しておくことが重要です。なお本回答は一般的な整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "四国電力 法人向け料金プラン", url: "https://www.yonden.co.jp/" },
  { name: "四国電力送配電 供給・系統情報", url: "https://www.yonden.co.jp/nw/" },
  { name: "日本製紙連合会", url: "https://www.jpa.gr.jp/" },
  { name: "愛媛県 産業政策・企業立地", url: "https://www.pref.ehime.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
];

export default function EhimePaperElectricityCostPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/ehime-paper-electricity-cost"
        datePublished="2026-06-05"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種×地域クロス", url: "https://simulator.eic-jp.org/articles/industry-region" },
          { name: "愛媛県の製紙・紙加工工場の電気料金", url: "https://simulator.eic-jp.org/ehime-paper-electricity-cost" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-region" className="underline-offset-2 hover:underline">業種×地域クロス</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">愛媛県の製紙・紙加工工場の電気料金</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            愛媛県の製紙・紙加工工場の電気料金完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            愛媛県四国中央市は、製紙・板紙・家庭紙・衛生用品・紙加工が高密度に集積する「日本一の紙のまち」とされます。本ページでは「愛媛県 × 製紙・紙加工業」というクロス領域に絞り、四国電力エリア固有の単価事情（伊方原発の再稼働の影響）と、抄紙機・蒸解・乾燥・黒液回収ボイラー・バイオマス自家発を含む電力プロファイル、特別高圧の契約最適化、補助金・PPA活用までを実務目線で整理します。
          </p>
          <AuthorBadge publishedAt="2026-06-05" updatedAt="2026-06-05" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>四国中央市の製紙専業集積（製紙・板紙・家庭紙・衛生用品・紙加工）の電力プロファイル</li>
              <li>大規模製紙／中規模板紙・家庭紙／中小紙加工のBefore/After削減事例3件</li>
              <li>四国電力エリアの単価水準と伊方原発・燃調感応度</li>
              <li>黒液・バイオマス自家発と買電の最適配分、再エネ調達（PPA・非化石証書）の進め方</li>
              <li>愛媛×製紙に特化した契約見直し12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは「愛媛 × 製紙・紙加工」のクロス領域に特化したガイドです。なお{" "}
            <Link href="/shizuoka-manufacturing-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              静岡県の製造業ガイド
            </Link>
            は富士の製紙にも言及しますが（対象は中部電力エリアの製造業全般）、本記事は「四国中央市の製紙専業集積・四国電力エリア・出荷額日本一の紙のまち」という独自軸で書き分けており、検索意図を分離しています。愛媛県全体の文脈は{" "}
            <Link href="/ehime-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              愛媛県の法人電気料金ガイド
            </Link>
            、業種一般としての製紙・パルプ業全体は{" "}
            <Link href="/pulp-paper-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              製紙・パルプ業の電気料金見直し
            </Link>
            をあわせて参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              愛媛県の製紙産業集積と電力事情
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県四国中央市は、紙・パルプ・紙加工品の製造品出荷額で全国トップクラスとされる「日本一の紙のまち」です。製紙・板紙・家庭紙・衛生用品・紙加工の専業企業が川之江・三島地区を中心に高密度に集積し、パルプ蒸解・抄紙機・乾燥・塗工・加工が連続稼働する装置産業クラスターを形成しています。装置集約度が高いため、特別高圧・高圧の大口需要家が一地域に集中する全国的にも特徴的な構造です。
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
              愛媛県全体の文脈は{" "}
              <Link href="/ehime-business-electricity-cost" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                愛媛県の法人電気料金ガイド
              </Link>
              、四国電力エリア全体は{" "}
              <Link href="/region-shikoku-business-electricity" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                四国電力エリア事情
              </Link>
              、業種一般は{" "}
              <Link href="/pulp-paper-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                製紙・パルプ業の電気料金見直し
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              四国電力エリアの主要電力会社・新電力（愛媛×製紙での実情）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県内の製紙・紙加工工場は、四国電力に加えて全国系新電力・地域系新電力・再エネ特化型・PPA事業者と多様なプレイヤーが供給。特別高圧・大型高圧では競争入札が浸透し、中小紙加工では切替余地が依然大きい状態です。なお本節は事業者比較の整理であり、特定の電力会社・契約形態を推奨するものではありません。
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
              四国電力エリアの料金水準と製紙工場への影響
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・高圧の単価レンジ、燃料費調整額の感応度（伊方原発の稼働状況の影響）、再エネ賦課金の累積負担を、製紙工場の代表的な契約タイプ別に整理します。四国電力エリア固有の電源構成を踏まえた契約戦略が経営判断の中心となります。
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
              ※ 単価は2026年時点の標準メニューを基準に整理した目安値です。実際の単価は契約条件・季節・時間帯・新電力選定で変動します。再エネ賦課金は2026年度4.18円/kWh（確定）。出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別事例3件 — 大規模製紙／中規模板紙・家庭紙／中小紙加工（Before/After）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県内の代表的な3規模で、契約見直し＋設備対策＋自家発・PPA調達の組合せによる削減効果をBefore/After方式で提示します。いずれも公開情報・業界ヒアリング・業界団体資料等から再構成した代表シナリオで、数値は目安レンジです。
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
              <Link href="/pulp-paper-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製紙・パルプ業の電気料金見直し</Link>
              、{" "}
              <Link href="/continuous-operation-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">連続操業工場の電気料金見直し</Link>
              、{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場電気代ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              愛媛×製紙固有の電気代上昇要因
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛の製紙工場の電気代上昇は、抄紙機・乾燥の電力＋蒸気同時消費・連続操業のベース負荷・四国エリアの燃調感応度（伊方原発）・自家発と買電の配分・再エネ調達コストの5要因が複合的に作用します。
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
              補助金・優遇制度 — 愛媛県・国・地域経産局の組合せ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛県の産業振興・省エネ補助、国のSII省エネ補助、需要家主導型PPA補助、GX投資促進税制、地域経産局のサプライチェーン強靱化補助の5層を組合せ、製紙・紙加工の更新投資の回収を1〜2年短縮するのが定石です。
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
              主要拠点／集積地の電力プロファイル（川之江・三島／家庭紙・衛生用品／紙加工）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛の製紙サプライチェーンは、川之江・三島の製紙・板紙中核を中心に、家庭紙・衛生用品の連続生産、紙加工・コンバーティングの中小集積、原料・古紙・物流の連動、四国域内の電源・系統との関係という多層構造です。
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
              電力会社切替の実情 — 四国電力と新電力の比較
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              特別高圧・大型高圧では競争入札が浸透、中小紙加工では切替余地大、取引先のCN要請と連動した再エネ調達（PPA・非化石証書）と自家発のグリーン化が共通トレンド。市場連動からの固定回帰も顕著です。本節は一般的な整理です。
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
              愛媛×製紙の省エネ・自家消費事例（抄紙機モーター／廃熱回収／真空系／屋根PPA／BEMS）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製紙工場の省エネは、抄紙機モーターのインバータ化、乾燥工程の廃熱回収＋蒸気系最適化、真空系・コンプレッサー・ブロワの高効率化、屋根オンサイトPPA＋バイオマス自家発最適化、BEMS＋需給予測の5軸が主力。大規模製紙・中規模・中小いずれでも投資回収2〜4年で実現可能なメニューが揃っています。
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
              愛媛×製紙 契約見直しチェックリスト（12項目）
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
              シミュレーターで愛媛×製紙の電気代上振れリスクを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              愛媛の製紙工場は、四国エリアの伊方原発依存度・抄紙機と乾燥の電力＋蒸気同時消費・取引先のCN要請・自家発と買電の配分など複合リスクを抱えます。シミュレーターで自社条件の上振れ幅を試算し、固定プラン切替・オンサイトPPA・省エネ投資のメリットを定量化できます。なお試算は一般的な参考であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスク（買電分）を確認する</li>
              <li>夏季ピーク月（7〜8月）・冬季ピーク月（1〜2月）の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した17〜20%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-05"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/ehime-business-electricity-cost", title: "愛媛県の法人電気料金ガイド（地域一般）", description: "愛媛県全体の電力事情・四国の産業集積・補助金。" },
              { href: "/region-shikoku-business-electricity", title: "四国電力エリアの法人電気代事情", description: "四国エリアの料金体系・伊方原発再稼働。" },
              { href: "/articles/industry-region", title: "業種×地域クロス（カテゴリ一覧）", description: "地域×業種の固有論点を扱うクロスカテゴリ。" },
              { href: "/pulp-paper-electricity-cost-review", title: "製紙・パルプ業の電気料金見直し（業種一般）", description: "抄紙機・蒸解・乾燥・自家発の最適化。" },
              { href: "/continuous-operation-factory-electricity-cost-review", title: "連続操業工場の電気料金見直し（業種一般）", description: "24時間連続プロセスのデマンド最適化。" },
              { href: "/shizuoka-manufacturing-electricity-cost", title: "静岡県の製造業の電気料金（クロス・読み分け）", description: "富士の製紙にも言及。本記事=四国中央の製紙専業集積と検索意図を分離。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業態別の比較ベンチマークで自社の立ち位置を確認。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "国の主力補助金の対象設備と活用ガイド。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "公募タイミングと採択率の動向。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を整理。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "固定回帰の判断軸を整理。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "高騰時の経営影響を踏まえた選択。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "各エリアの電源構成を可視化。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃調変動の影響を理解する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金推移と負担増の見立て（2026年度4.18円/kWh）。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPA導入ガイド", description: "追加性ある再エネ調達の進め方。" },
              { href: "/onsite-vs-offsite-ppa", title: "オンサイト屋根PPA活用", description: "屋根面積を活かす自家消費PPA。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター（D-1）", description: "業種・規模から電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="愛媛の製紙工場の電気代リスクを自社条件で試算する"
            description="四国中央市の製紙・紙加工工場固有の条件（四国電力エリア・伊方原発・抄紙機と乾燥の電力＋蒸気同時消費・特別高圧・自家発と買電の配分）を踏まえ、シミュレーターで自社の上振れリスクと削減余地を試算できます。固定プラン切替・オンサイトPPA・省エネ投資のROIもあわせて確認できます。なお本ツールは一般的な参考であり、特定の電力会社・契約形態を推奨するものではありません。"
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
            heading="愛媛の製紙工場の電力契約見直し、専門家に相談しませんか？"
            description="大規模製紙・中規模板紙・中小紙加工いずれも特別高圧・高圧の規模感と自家発（黒液・バイオマス）と買電の配分、取引先のCN要請が絡み合い、契約・調達・省エネ投資を一体で設計する必要があります。エネルギー情報センターは中立的立場で愛媛県内事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
