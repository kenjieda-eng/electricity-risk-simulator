import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import HistoricalEventTimeline, { MAJOR_ENERGY_EVENTS } from "../../components/market-data/HistoricalEventTimeline";
import { CATEGORY_FAQ_6_20 } from "../../data/categoryFaq6to20";
import MarketDataFaq from "../../components/market-data/MarketDataFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["industry-guide"];

const pageTitle =
  "農業（耕種農業）の電気料金見直しポイント｜灌漑ポンプ・乾燥調製・低温貯蔵・園芸用ハウスの契約最適化";
const pageDescription =
  "耕種農業（水稲・畑作・露地/施設園芸）の電気料金見直しを解説。灌漑・揚水ポンプ、籾乾燥・穀物乾燥調製、米・野菜・果実の低温貯蔵、園芸用ハウスの補光・暖房・環境制御、固定vs市場連動の判断、SII・農水補助・自家消費太陽光まで実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "農業 電気料金 見直し",
    "灌漑ポンプ 電気代",
    "籾乾燥 乾燥調製 電力",
    "低温貯蔵 予冷 電気代",
    "施設園芸 ハウス 電気代",
    "農業 補助金 省エネ",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/agriculture-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/agriculture-electricity-cost-review",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

const usageProfile = [
  {
    label: "灌漑・揚水ポンプ（水稲・畑作・園芸の用水）",
    detail:
      "用水路からの揚水・スプリンクラー・点滴灌漑・地下水ポンプの動力電力。水稲では代かき・田植え〜出穂期に、畑作・露地園芸では夏季の潅水期に負荷が集中する。ポンプは定格運転が長時間続くため、揚程・口径に応じて数kW〜数十kWの常時負荷となり、灌漑期の月使用量を大きく押し上げる。インバータ化・適正口径化の余地が大きい設備の代表格。",
  },
  {
    label: "乾燥調製施設（籾乾燥機・穀物乾燥・ライスセンター/カントリーエレベーター）",
    detail:
      "収穫後の籾・麦・大豆・そば等の乾燥と調製（籾すり・選別・計量）を担う設備。循環型乾燥機の送風・搬送モーター、遠赤外線ヒーター、集塵ブロワーが稼働する。収穫期（秋）の数週間に負荷が集中する季節ピーク型で、この時期のデマンドが年間の契約電力を決めてしまうケースが多い。共同利用のカントリーエレベーターでは高圧受電の大口負荷になる。",
  },
  {
    label: "低温貯蔵・予冷（米低温倉庫・野菜果実の予冷/CA貯蔵）",
    detail:
      "玄米の低温倉庫（15℃前後）、野菜・果実の予冷庫（0〜5℃）、りんご等のCA貯蔵（低酸素・低温）が中核。予冷は収穫直後の品温を短時間で下げる高負荷運転で、出荷最盛期に集中する。低温倉庫・CA貯蔵は通年または長期の連続稼働で、冷凍機のコンプレッサー・凝縮器・送風機が電力を消費する。産地の集出荷施設では工場並みの冷却負荷になる。",
  },
  {
    label: "園芸用ハウスの補光・暖房・環境制御",
    detail:
      "施設園芸（トマト・きゅうり・いちご・花き等）のハウスでは、冬季のヒートポンプ暖房、日照不足を補う補光LED、循環扇・換気ファン、炭酸ガス施用機、養液循環ポンプ、環境制御コンピュータが稼働する。加温を電化した施設では冬季の電力負荷が突出し、光熱動力費の中心を電気が占めるようになる。負荷の季節変動と昼夜変動がともに大きいのが特徴。",
  },
  {
    label: "選果・調製・精米（選果ライン・色彩選別・精米機）",
    detail:
      "青果の選果ライン（コンベア・光センサー選別・箱詰め）、色彩選別機、精米・製粉設備の動力電力。集出荷の最盛期に稼働が集中するバッチ負荷で、選果場では搬送・階級選別・包装の連続ラインがまとまった動力を消費する。省エネ改修では高効率モーター化・LED照明化・待機電力削減が定番の打ち手になる。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準（光熱動力費の位置づけ）",
    detail:
      "農林水産省「農業経営統計調査（生産費・営農類型別経営統計）」等によれば、露地の水稲・畑作では光熱動力費（軽油・電気等）が生産費に占める比率は数%〜10%程度にとどまる一方、加温を伴う施設園芸では光熱動力費が経営費の10〜30%に達することがある。電気代の比率は、灌漑・乾燥・低温貯蔵・ハウス加温をどれだけ電化・機械化しているかで大きく変わる。",
  },
  {
    label: "作目・施設別の電力使用の目安",
    detail:
      "水稲（乾燥調製・低温倉庫含む）では収穫期と貯蔵期に、露地野菜・果樹では灌漑期と予冷・貯蔵期に、施設園芸では冬季加温期に使用量が偏る。同じ作付面積でも、加温ハウス・予冷・CA貯蔵の有無で年間使用量は数倍の開きが出る。まずは月別の使用量プロファイル（検針票12ヶ月分）を作り、季節ピークの位置と高さを把握することが出発点になる。",
  },
  {
    label: "経営規模別の受電区分と年間使用量の目安",
    detail:
      "小規模な個人・家族経営では低圧（低圧電力/低圧電灯）が中心で年間数千〜数万kWh、大規模施設園芸やライスセンター・集出荷施設では高圧受電で年間数十万〜数百万kWh、JA共同利用施設・大型産地の集出荷団地では高圧〜特別高圧で年間1,000万kWh超になることもある。受電区分と契約電力（kW）の妥当性の点検が、見直しの第一歩となる。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の変動が加温・乾燥・貯蔵に効く",
    detail:
      "ハウス加温・籾乾燥・低温貯蔵の電化が進むほど、燃料費調整額（燃調）の単価変動が電気代に直結する。燃調は市場燃料価格に連動して毎月変わるため、加温期・乾燥期に使用量が集中する農業経営では、変動局面での月次コストの振れ幅が大きくなる。契約書で燃調の上限有無（あり／なし／一部）を確認しておくことが重要。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇してきた。使用量に比例して負担が増えるため、低温貯蔵やハウス加温で年間使用量の大きい施設ほど賦課金の絶対額が膨らむ。使用量そのものを減らす省エネと、自家消費太陽光による買電量の圧縮が、賦課金負担を下げる有効な手段になる。",
  },
  {
    label: "乾燥期の季節集中デマンド",
    detail:
      "秋の収穫期に稼働する乾燥調製施設は、数週間の集中運転でその年の最大デマンド（契約電力）を決めてしまいやすい。年間を通じて使わない月が多くても、乾燥期のピークで契約電力が高止まりし、基本料金が通年で発生する構造になる。乾燥バッチの時間分散や夜間シフトによるピークカットが、基本料金削減の勘所になる。",
  },
  {
    label: "夏季の予冷・換気負荷と冷凍機効率の低下",
    detail:
      "外気温が高い出荷最盛期は、予冷庫・低温倉庫の凝縮器効率が低下し、同じ庫内温度を保つための消費電力が増える。露地園芸の灌漑ポンプ稼働も夏季に重なるため、7〜9月に使用量とデマンドが同時に膨らみやすい。凝縮器ファンのインバータ化・散水冷却・夜間事前冷却が効果的な対策になる。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度に導入された容量市場の拠出金は、使用量に応じて電気料金に上乗せされる。低温貯蔵の通年稼働のようなベース負荷を持つ施設では、避けにくい上昇圧力として継続する。新電力経由でも回避できないため、省エネと自家消費で使用量自体を圧縮する方向の対策が本質的になる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模（個人・家族経営／水稲・露地野菜・小規模施設園芸）",
    profile: "低圧（低圧電力/低圧電灯）〜小口高圧／灌漑ポンプ＋小型乾燥機＋小規模ハウス／年間 数千〜数万 kWh",
    annualCost: "年間電気代 数十〜数百万円",
    note: "高効率ポンプ・LED・小型ヒートポンプ更新で年10〜15%削減の余地。低圧の契約種別（電力／電灯）と容量の見直しが起点。",
  },
  {
    size: "中規模（大規模施設園芸・ライスセンター・産地集出荷施設）",
    profile: "高圧 200〜1,000kW／加温ハウス＋乾燥調製＋予冷・低温貯蔵／年間 数十万〜数百万 kWh",
    annualCost: "年間電気代 数百万〜数千万円",
    note: "ヒートポンプ・冷凍機の高効率化＋自家消費太陽光＋乾燥期デマンド制御で年10〜16%削減事例。",
  },
  {
    size: "大規模（農業法人・JA共同利用施設・大型集出荷団地）",
    profile: "高圧〜特別高圧 1,000〜3,000kW／大型カントリーエレベーター＋大規模予冷・CA貯蔵＋植物工場型ハウス／年間 500万〜1,500万 kWh超",
    annualCost: "年間電気代 数千万〜数億円",
    note: "長期固定契約＋自家消費太陽光・蓄電池＋需要家主導型PPA併用が主流。BEMS/FEMSによる需要最適化。",
  },
];

const caseStudies = [
  {
    title: "事例1：施設園芸トマトハウスの年間15%削減（Before/After）",
    before: "関東の施設園芸トマト農家A社（高圧 150kW、年間 60万 kWh、年間電気代 1,800万円）。冬季は重油ボイラー併用のハウス加温、補光は蛍光灯、低温倉庫は15年経過の冷凍機。市場連動プランを継続し、燃料高局面で月次コストが不安定だった。",
    after: "新電力へ切替（固定3年）／加温をヒートポンプ主体に転換し補光をLED化（SII＋農水省の施設園芸省エネ補助を活用、投資 900万円）／環境制御コンピュータで暖房・換気・炭酸ガスを最適制御／予冷庫の凝縮器ファンをインバータ化／デマンドコントローラー導入。",
    result: "年間電気代 1,800万円 → 1,530万円（▲15%、▲270万円）／契約 kW 150→130／投資回収 補助金後 約2.4年",
  },
  {
    title: "事例2：ライスセンターの年間16%削減",
    before: "東北のライスセンターB施設（高圧 500kW、年間 300万 kWh、年間電気代 9,000万円）。秋の籾乾燥期に稼働が集中し、乾燥機・集塵ブロワー・搬送モーターが日中に一斉稼働。この時期のデマンドで契約電力が高止まりし、玄米低温倉庫は通年稼働。",
    after: "固定5年プランへ切替／乾燥バッチを昼夜2交代に分散しピークを平準化（デマンド制御＋運用改善）／送風・搬送モーターを高効率機に更新／低温倉庫の冷凍機を自然冷媒インバータ式へ更新（SII＋フロン対応補助を活用）／屋根に自家消費太陽光 300kW を設置。",
    result: "年間電気代 9,000万円 → 7,560万円（▲16%、▲1,440万円）／契約 kW 500→440／投資回収 補助金後 約3.5年",
  },
  {
    title: "事例3：JA共同利用・大型集出荷施設の年間4,500万円削減",
    before: "西日本のJA共同利用の大型集出荷施設C（特別高圧 2,000kW、年間 1,200万 kWh、年間電気代 3.6億円）。予冷・CA貯蔵・選果ラインを備え、出荷最盛期の予冷負荷と選果ラインの動力が重なる。長期固定契約を継続していたが設備更新でピークが上振れ。",
    after: "電力契約の長期固定を再締結／予冷・CA貯蔵の冷凍機を自然冷媒インバータ式に全面更新／自家消費太陽光 1.5MW＋蓄電池 2MWh／FEMSで予冷・選果・貯蔵の需要を最適化／需要家主導型PPAとDR（デマンドレスポンス）契約を併用。",
    result: "年間電気代 3.6億円 → 3.15億円（▲12.5%、▲4,500万円）／契約 kW 2,000→1,780／投資回収 補助金後 約5.5年",
  },
];

const demandManagement = [
  {
    label: "乾燥バッチの時間分散・夜間シフト",
    detail:
      "秋の乾燥期は、乾燥機を昼間に一斉稼働させると年間の最大デマンドがこの時期に決まってしまう。乾燥バッチを昼夜2交代に分ける、送風・加熱の起動タイミングを30分〜1時間ずらすなどで同時最大負荷を平準化する。運用改善が中心のためコストをかけずに基本料金を抑えられる余地が大きい。",
  },
  {
    label: "灌漑ポンプの時間帯最適化・インバータ化",
    detail:
      "灌漑ポンプは揚程・流量に対して過大な口径・定格で運転されていることが多い。インバータ化で必要流量に応じた回転数制御を行い、揚水スケジュールを需要ピークと重ならない時間帯にずらすことで、デマンドと使用量の両方を抑えられる。適正口径化・配管抵抗の見直しも効果的。",
  },
  {
    label: "予冷・低温貯蔵の夜間事前冷却・蓄熱運用",
    detail:
      "低温倉庫・予冷庫を夜間に深めに冷やして日中の温度上昇を吸収する運用で、外気温の高い昼間の凝縮器負荷を抑える。庫内温度センサーとBEMSの追加が主な投資で、出荷最盛期の昼間ピークカットに効く。CA貯蔵のように長期連続稼働する設備ほど平準化の効果が積み上がる。",
  },
  {
    label: "ハウス補光・環境制御の点灯スケジュール最適化",
    detail:
      "補光LEDの点灯を電力需要ピークと重ならない時間帯に配置し、循環扇・換気ファンの間欠運転を環境制御コンピュータで最適化する。作物の生育に必要な積算光量・温度を確保しつつ、同時稼働を避けることでデマンドを平準化できる。加温のヒートポンプと補光の同時ピークを外す設計が鍵。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率ヒートポンプ・冷凍冷蔵設備・高効率モーター・LED・インバータ・環境制御機器",
    rate: "中小1/2、大企業1/3（区分・公募回により上限額は異なる）",
    note: "農業施設でも設備単位で申請しやすい主力補助金。ハウス加温のヒートポンプ化、低温貯蔵の冷凍機更新で採択事例がある。公募要件は年度ごとに要確認。",
  },
  {
    name: "農林水産省 施設園芸・産地生産基盤の省エネ・脱炭素支援",
    target: "施設園芸のヒートポンプ・木質バイオマス暖房、環境制御、産地の集出荷・貯蔵施設の省エネ化",
    rate: "事業により1/3〜1/2程度（事業区分・要件による）",
    note: "みどりの食料システム戦略に沿った省エネ・脱炭素の取組を支援する農業分野特有の枠組み。詳細は農業向け補助戦略の整理を参照。制度内容は年度で変わるため公募要領で確認。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光・蓄電池補助",
    target: "自家消費型太陽光・蓄電池の導入（屋根置き・営農型を含む）",
    rate: "1/2以内、kWh定額補助型もあり（公募により異なる）",
    note: "屋根面積・遊休地の大きい農業施設と相性が良い。低温貯蔵の通年稼働がある施設は自家消費率が高まりやすく投資効率が上がる。",
  },
  {
    name: "環境省 フロン対策・自然冷媒設備導入補助",
    target: "特定フロン使用の冷凍機を自然冷媒（CO2・アンモニア等）へ更新",
    rate: "1/2程度（事業区分・上限は公募による）",
    note: "予冷庫・低温倉庫・CA貯蔵の冷凍機更新でフロン規制対応と省エネを同時達成できる。SII等との組合せ検討で投資回収を短縮しやすい。",
  },
  {
    name: "農業用省エネ機器・スマート農業導入支援",
    target: "高効率ポンプ、環境制御、選果・調製ラインの省エネ機器、データ活用機器",
    rate: "事業により異なる（自治体・年度で要確認）",
    note: "灌漑ポンプのインバータ化や選果ラインの高効率化に活用できる場合がある。国・都道府県・市町村で制度が分かれるため窓口で最新要件を確認する。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか（乾燥期ピークで高止まりしていないか）",
  "受電区分（低圧電力／低圧電灯／高圧／特別高圧）と契約種別が設備規模に合っているか",
  "灌漑期・乾燥期・加温期・予冷期の月別使用量プロファイルを検針票12ヶ月分で把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "灌漑・揚水ポンプの口径・定格が過大でないか、インバータ化の余地を確認したか",
  "乾燥調製施設のバッチを時間分散・夜間シフトしてデマンドを平準化できないか",
  "低温貯蔵・予冷の冷凍機の自然冷媒・インバータ化、夜間事前冷却の余地を確認したか",
  "園芸用ハウスの加温ヒートポンプ化・補光LED化・環境制御最適化を試算したか",
  "屋根・遊休地を活用した自家消費太陽光（＋蓄電池）導入の試算を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・農水省の施設園芸/産地補助・自家消費太陽光補助・フロン対応補助の組合せ申請を検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営内で合意したか",
];

const faqItems = [
  { question: "耕種農業の電気代は経営費のどれくらいを占めますか？", answer: "露地の水稲・畑作では光熱動力費（軽油・電気等）が生産費に占める比率は数%〜10%程度にとどまることが多い一方、加温を伴う施設園芸では経営費の10〜30%に達することがあります。灌漑・乾燥・低温貯蔵・ハウス加温をどれだけ電化しているかで比率は大きく変わるため、まずは自社の月別使用量を把握することが出発点です。数値は一般的な目安で、作目・地域・経営規模により異なります。" },
  { question: "本ページと施設園芸ヒートポンプ事例・畜産ページの違いは？", answer: "本ページは耕種農業全般（水稲・畑作・露地/施設園芸を横断）の電気料金見直しにフォーカスしています。施設園芸のヒートポンプ導入による省エネの具体事例は「施設園芸ハウスのヒートポンプ導入事例」、家畜の飼養（畜産）に伴う電力対策は「畜産業の電気料金見直し」で個別に扱っています。用途に応じて使い分けてください。" },
  { question: "乾燥調製施設（籾乾燥・ライスセンター）の電気代対策は？", answer: "①乾燥バッチの時間分散・夜間シフトによるデマンド平準化、②送風・搬送モーターの高効率化、③集塵ブロワーのインバータ化、④遠赤外線ヒーター等の運転最適化、⑤BEMSによる需要の見える化、が中心です。秋の乾燥期のピークが年間の契約電力を決めやすいため、まずピークカットが基本料金削減の勘所になります。" },
  { question: "低温貯蔵・予冷の電力を削減するには？", answer: "①冷凍機の自然冷媒（CO2・アンモニア等）インバータ式への更新（フロン対応と同時達成）、②夜間事前冷却・蓄熱運用、③凝縮器ファンのインバータ化、④断熱・扉開閉ロスの改善、⑤BEMSによる温度・負荷の最適制御、が有効です。効果は設備の経過年数・庫内温度帯・外気条件で変動します。" },
  { question: "施設園芸ハウスの加温・補光の電気代を下げるには？", answer: "①重油ボイラーからヒートポンプ暖房への転換（総合効率が高く電化・脱炭素を両立）、②補光のLED化、③環境制御コンピュータによる暖房・換気・炭酸ガスの最適制御、④循環扇・保温カーテンによる熱ロス低減、が中心です。加温と補光の同時ピークを外す運用でデマンドも抑えられます。補助金の活用可否は年度の公募要件で確認してください。" },
  { question: "農業経営に固定プランと市場連動プランのどちらが向きますか？", answer: "低温貯蔵の通年稼働や冬季ハウス加温のようにベース負荷が大きく、停止が品質劣化に直結する施設では、価格の予見性が高い固定プランが向きやすい傾向があります。一方、使用量が季節に強く偏り閑散期が長い経営では、条件次第で市場連動の余地もあります。いずれも自社の負荷プロファイルとリスク許容度に基づく判断が必要で、本記事は特定の契約形態を推奨するものではありません。" },
  { question: "農業向けの省エネ補助金は何が活用しやすいですか？", answer: "経産省SIIの省エネ補助金、農林水産省の施設園芸・産地生産基盤の省エネ/脱炭素支援、自家消費太陽光・蓄電池補助、環境省のフロン対策・自然冷媒設備補助、農業用省エネ機器・スマート農業支援などが候補です。制度は年度ごとに要件・上限が変わるため、公募要領と自治体窓口で最新情報を確認し、複数制度の組合せ申請を検討してください。" },
  { question: "自家消費型太陽光は農業施設で投資回収できますか？", answer: "屋根面積や遊休地が大きく、低温貯蔵の通年稼働などで昼間の電力需要がある施設は相性が良い傾向があります。自家消費率が高いほど買電量・再エネ賦課金の圧縮効果が大きくなります。回収年数は日射条件・設備価格・補助金・自家消費率で変動するため、個別条件での試算が前提です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "農林水産省（みどりの食料システム戦略・農業経営統計）", url: "https://www.maff.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "環境省（フロン排出抑制法・脱炭素関連施策）", url: "https://www.env.go.jp/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function AgricultureElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/agriculture-electricity-cost-review"
        datePublished="2026-07-21"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "業種別の見直しポイント集", url: "https://simulator.eic-jp.org/articles/industry-guide" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/industry-guide" className="underline-offset-2 hover:underline">業種別の見直しポイント集</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">農業（耕種農業）の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            農業（耕種農業）の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            耕種農業（水稲・畑作・露地/施設園芸）は、灌漑・揚水ポンプ、乾燥調製施設（籾乾燥機・穀物乾燥）、低温貯蔵（米・野菜・果実の予冷/CA貯蔵）、園芸用ハウスの補光・暖房・環境制御、選果・精米など、作目と施設構成によって大きく異なる電力負荷を持ちます。秋の乾燥期、夏季の予冷・灌漑、冬季のハウス加温など季節に強く偏る需要が特徴です。本ページは耕種農業全般（水稲・畑作・露地/施設園芸を横断）の電気料金見直しにフォーカスして、負荷特性・業界水準・規模別事例・補助金・契約見直しチェックリストまで実務に直結する観点を整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            なお、施設園芸のヒートポンプ導入による省エネの具体事例は{" "}
            <Link href="/case-study-greenhouse-horticulture-heatpump" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">施設園芸ハウスのヒートポンプ導入事例</Link>
            、家畜の飼養（畜産）に伴う電力対策は{" "}
            <Link href="/livestock-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">畜産業の電気料金見直し</Link>
            で個別に扱います。本ページは耕種農業の横断的な見直しに絞って解説します。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>耕種農業の電力使用プロファイル（灌漑ポンプ／乾燥調製／低温貯蔵／園芸ハウス／選果精米）</li>
              <li>光熱動力費に占める電気の位置づけと作目・施設別の使用量の目安</li>
              <li>乾燥期の季節集中デマンドと夏季予冷・冷凍機効率低下の影響</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>ヒートポンプ化・自然冷媒化・自家消費太陽光の費用対効果</li>
              <li>SII・農水補助・自家消費太陽光補助・フロン対応補助の組合せ活用</li>
              <li>農業経営向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              耕種農業の電力使用特性 — 灌漑・乾燥調製・低温貯蔵・園芸ハウス
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業の電力使用は『灌漑・揚水ポンプ／乾燥調製／低温貯蔵・予冷／園芸ハウスの環境制御／選果・精米』の5層で構成されます。露地中心か施設園芸中心か、貯蔵・加工まで担うかで負荷の中心が変わり、季節ピークの位置と高さが経営ごとに大きく異なるのが特徴です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {usageProfile.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電気料金の上昇要因の全体像は{" "}
              <Link href="/why-business-electricity-prices-rise" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人の電気料金が上がる理由
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              光熱動力費に占める電気の位置づけと使用量の目安
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業の電気代水準は、露地か施設園芸か、貯蔵・加工の有無で大きく異なります。公開統計と一般的な目安から整理した水準を、自社の検針票実績との比較で活用してください。数値は目安であり、作目・地域・経営規模で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {industryBenchmark.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 農林水産省「農業経営統計調査」・資源エネルギー庁の公開資料等から整理。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              耕種農業の主要な電気代上昇要因 — 燃料費・季節集中・夏季効率・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業の電気代上昇は、加温・乾燥・貯蔵の電化に伴う燃料費調整額の影響、乾燥期の季節集中デマンド、夏季の予冷・冷凍機効率低下、賦課金・容量拠出金の上乗せが複合的に重なります。
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
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の削減事例3件 — 施設園芸ハウス／ライスセンター／JA共同利用施設
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業の電気代削減は規模帯ごとに最適施策の組合せが異なります。公開情報から整理した3つのパターンをBefore/Afterで提示します。効果は代表例であり、実際は設備条件・地域・運用で変動します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <div className="mt-1 grid gap-1 text-xs text-slate-600 sm:grid-cols-3">
                    <p><span className="font-semibold text-slate-700">プロファイル：</span>{item.profile}</p>
                    <p><span className="font-semibold text-slate-700">年間電気代：</span>{item.annualCost}</p>
                    <p><span className="font-semibold text-slate-700">特徴：</span>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
                <div key={cs.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{cs.title}</p>
                  <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                    <p><span className="font-semibold text-slate-700">Before（見直し前）：</span>{cs.before}</p>
                    <p><span className="font-semibold text-slate-700">After（実施施策）：</span>{cs.after}</p>
                    <p><span className="font-semibold text-emerald-700">Result（削減効果）：</span>{cs.result}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連は{" "}
              <Link href="/livestock-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">畜産業の電気料金見直し</Link>
              、{" "}
              <Link href="/cold-storage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">冷凍倉庫の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              乾燥期・予冷・灌漑のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業は乾燥バッチの時間分散、灌漑ポンプの時間帯最適化、予冷・貯蔵の夜間事前冷却、ハウス補光のスケジュール最適化など、季節ピークを平準化するデマンド管理が効果的です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {demandManagement.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド管理の基本は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約電力（デマンド）の仕組み</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 加温・乾燥・貯蔵の電化と価格変動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              加温・乾燥・低温貯蔵の電化が進むほど、市場価格や燃料価格の変動が電気代に反映されやすくなります。負荷の季節性とリスク許容度を踏まえたプラン選択が重要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランが向きやすいケース</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>低温貯蔵・CA貯蔵の通年稼働でベース負荷が大きい</li>
                  <li>冬季ハウス加温を電化し停止が品質劣化に直結する</li>
                  <li>価格の予見性を重視し年間予算を固めたい</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動で注意すべき点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季の予冷・灌漑ピークが市場高値期と重なりやすい</li>
                  <li>JEPX高騰局面で乾燥・加温期の月次コストが振れる</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択の論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 貯蔵・加温で使用量が大きい施設の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇してきました。低温貯蔵の通年稼働やハウス加温で使用量の大きい施設ほど、賦課金の絶対額が膨らみます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模の集出荷・貯蔵施設（年500万kWh）の賦課金負担額</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 1,745万円</li>
                  <li>2025年度（3.98円/kWh）：年 1,990万円（+245万円）</li>
                  <li>2026年度（4.18円/kWh）：年 2,090万円（2024年度比 +345万円）</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金の詳細は{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              耕種農業特有の節電・省エネ施策 — ヒートポンプ・自然冷媒・自家消費太陽光
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業の省エネは『ハウス加温のヒートポンプ化』『低温貯蔵の自然冷媒・インバータ化』『灌漑ポンプのインバータ化』『自家消費太陽光＋蓄電池』『BEMS/FEMS』の5軸で組み立てます。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">ハウス加温のヒートポンプ化＋補光LED化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>重油ボイラーからの転換で総合効率が高く電化・脱炭素を両立</li>
                  <li>補光LED化と環境制御で使用量とデマンドを同時抑制</li>
                  <li>SII＋農水省の施設園芸省エネ補助で投資回収を短縮</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">低温貯蔵・予冷の自然冷媒インバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>フロン規制対応と省エネを同時達成</li>
                  <li>凝縮器ファンのインバータ化で夏季の消費電力を低減</li>
                  <li>SII＋フロン対応補助の組合せで回収年数を圧縮</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">灌漑・揚水ポンプのインバータ化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>必要流量に応じた回転数制御で使用量を削減</li>
                  <li>適正口径化・配管抵抗の見直しで効率改善</li>
                  <li>揚水スケジュールの最適化でデマンドも抑制</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（＋蓄電池）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>屋根・遊休地の活用で買電量・賦課金を圧縮</li>
                  <li>低温貯蔵の通年稼働で自家消費率が高まりやすい</li>
                  <li>回収年数は日射・設備価格・補助・自家消費率で変動</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、費用対効果は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・農水補助・自家消費太陽光・フロン対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業で活用しやすい補助金は5本柱。施設園芸の省エネ、低温貯蔵の自然冷媒化、自家消費太陽光の組合せ申請で補助率を最大化できます。制度は年度で要件・上限が変わるため、必ず公募要領で確認してください。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyPrograms.map((item) => (
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
              農業分野の補助戦略は{" "}
              <Link href="/subsidy-agriculture-primary-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">農業向け補助金の活用戦略</Link>
              、省エネ補助の基本は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              耕種農業に合った契約見直しチェックリスト（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直し前にこのチェックリストで自社状況を整理してください。1項目でも未確認があれば、新電力相見積の精度や交渉力が下がります。
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
              シミュレーターで自社農業施設の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              耕種農業は灌漑・乾燥・低温貯蔵・ハウス加温という季節に偏った負荷を同時に抱えます。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替や省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>乾燥期・加温期・予冷期など季節ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12.5〜16%の削減レンジの自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-07-21"
            />
            <GlossaryLinks currentSlug="agriculture-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "基本料金", "契約電力", "デマンド値", "固定プラン", "市場連動プラン"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/livestock-electricity-cost-review", title: "畜産業の電気料金見直し", description: "家畜の飼養に伴う電力対策（本ページの姉妹編）。" },
              { href: "/case-study-greenhouse-horticulture-heatpump", title: "施設園芸ハウスのヒートポンプ導入事例", description: "加温の電化・省エネの具体事例。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "低温貯蔵・予冷の温度管理電力対策。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根・遊休地活用の投資回収試算。" },
              { href: "/solar-suited-corporations", title: "太陽光が向く法人の特徴", description: "自家消費率の高い施設の適性判断。" },
              { href: "/subsidy-agriculture-primary-strategy", title: "農業向け補助金の活用戦略", description: "施設園芸・産地の省エネ/脱炭素支援の整理。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "ヒートポンプ・冷凍機更新の主力補助金。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "通年稼働・加温施設の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "貯蔵・加温施設が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "使用量の大きい施設への負担増。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の農業施設条件でリスクを確認する"
            description="灌漑・乾燥調製・低温貯蔵・園芸ハウスの契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。季節ピークのデマンド変動や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="農業経営の電力契約見直し、専門家に相談しませんか？"
            description="灌漑・乾燥調製・低温貯蔵・施設園芸の電気代見直しは季節ピークや補助制度など固有の論点が多くなります。エネルギー情報センターは中立的立場で農業事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
