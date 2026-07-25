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
  "蒸留所（焼酎・ウイスキー・スピリッツ）の電気料金見直しポイント｜蒸留・冷却・貯蔵熟成の契約最適化";
const pageDescription =
  "蒸留所（焼酎・ウイスキー・スピリッツ）の電気料金見直しを解説。蒸留器の加熱、冷却水チラー・凝縮、麹室・発酵タンクの温度管理、貯蔵熟成庫の温湿度空調、瓶詰ライン、排水処理まで電力負荷を整理し、固定vs市場連動、賦課金、SII・GX補助・自家消費太陽光の活用を実務的にまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "蒸留所 電気料金 見直し",
    "焼酎 蔵 電気代",
    "ウイスキー 蒸留所 電力",
    "スピリッツ 製造 電気代",
    "蒸留所 補助金",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/distillery-electricity-cost-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/distillery-electricity-cost-review",
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
    label: "蒸留器の加熱（蒸気ボイラー／電気ヒーター）",
    detail:
      "単式・連続式蒸留器（ポットスチル／連続式蒸留機）のもろみ加熱が中核負荷。多くの蔵は蒸気ボイラー（重油・ガス・電気）で間接加熱し、電気ボイラー・電気ヒーター併用の蔵も増加。蒸留サイクル中は高負荷が続き、加熱系だけで蔵全体の電力使用量の20〜35%を占めるケースが多い。",
  },
  {
    label: "冷却水チラー・凝縮器（蒸気の液化）",
    detail:
      "蒸留で発生した蒸気を冷やして原酒に戻す凝縮工程は、冷却水チラー・クーリングタワー・凝縮器の連続運転が必須。夏季は冷却水温上昇でチラー負荷が増し、蔵全体の15〜30%を占める。蒸留と一体で稼働するため、加熱と冷却が同時にピークを作りやすいのが特徴。",
  },
  {
    label: "麹室・発酵タンクの温度管理（焼酎・スピリッツ）",
    detail:
      "焼酎・本格スピリッツでは麹室（こうじむろ）の温湿度制御と、一次・二次発酵タンクの品温管理が品質を左右する。冷却ジャケット・温調ユニット・空調が季節を問わず稼働し、蔵全体の10〜20%を占める。発酵は微生物反応のため温度逸脱が歩留まり・風味に直結する。",
  },
  {
    label: "貯蔵熟成庫の温湿度空調（ウイスキー・長期熟成）",
    detail:
      "ウイスキー・長期熟成スピリッツの貯蔵庫（ウェアハウス）は、樽熟成の品質安定のため温湿度空調が長期にわたり連続稼働する。庫内容積が大きく、外気変動を吸収する空調・除湿・加湿の負荷が年間を通じて発生し、蔵全体の10〜25%を占める。熟成年数が長いほど累積電力負荷が大きい。",
  },
  {
    label: "瓶詰・充填ライン／排水処理",
    detail:
      "ボトリング（瓶詰・充填・打栓・ラベル）ラインの動力電力と、蒸留残渣（焼酎粕・蒸留廃液）を含む排水処理設備（曝気ブロワー・脱水機・濃縮設備）の負荷。排水は高BOD・高負荷のため処理電力が大きく、両者で蔵全体の10〜20%を占める。",
  },
];

const industryBenchmark = [
  {
    label: "業界全体の電気代水準",
    detail:
      "資源エネルギー庁の省エネ関連統計や酒類製造の公開データから整理すると、蒸留を伴う酒類製造の電気料金は売上高の3〜8%が目安（燃料費を含むエネルギーコスト全体では5〜12%）。蒸留の加熱源が蒸気ボイラー（燃料）か電気かで電気比率が大きく変わるため、自社のエネルギー構成の把握が起点になる。",
  },
  {
    label: "製品1klあたりのエネルギー使用量",
    detail:
      "蒸留は加熱・冷却の両方でエネルギーを要するため、醸造のみの酒類より原単位が高い傾向。一般的な目安として、蒸留・熟成を含む工程では製品1kl（1,000L）あたりの電力使用量が数百〜千数百kWh規模になる例が多い。加熱を電気化するほど電力原単位は上がり、燃料原単位は下がる（総エネルギーの最適化が論点）。",
  },
  {
    label: "蔵の規模別の年間使用量（目安）",
    detail:
      "小規模なクラフト蒸留所・焼酎蔵（年商3〜20億円）で年間30〜200万kWh、中規模の本格焼酎・地ウイスキー蒸留所（年商20〜150億円）で年間300〜1,500万kWh、大手蒸留所・総合酒類メーカーの基幹蒸留所（年商150億円超）で年間1,500万〜6,000万kWh程度が目安。数値は設備構成・加熱方式で大きく変動する。",
  },
];

const costFactors = [
  {
    label: "燃料費調整額の変動が加熱・冷却に与える影響",
    detail:
      "蒸留の加熱・冷却は使用量が大きいため、燃料費調整額が1円/kWh動くだけでも、年間1,000万kWh使用の中規模蔵で年1,000万円規模の差になる。電気ボイラー・電気ヒーターへ加熱を電化している蔵ほど、燃料費調整額の影響を受けやすい。",
  },
  {
    label: "再エネ賦課金の負担増",
    detail:
      "再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇してきた。加熱・熟成空調で使用量の大きい蔵ほど負担額が積み上がり、年間1,000万kWh使用の蔵で賦課金だけで年4,000万円超の水準になる。",
  },
  {
    label: "夏季の冷却負荷増と季節性",
    detail:
      "外気温・冷却水温が上がる夏季は、凝縮器・チラー・貯蔵庫空調の消費電力が増える。仕込み・蒸留の繁忙期（原料の収穫期・出荷期）と重なる年は、加熱と冷却が同時にピークを作り、契約電力（デマンド）を押し上げやすい。",
  },
  {
    label: "貯蔵熟成の長期空調コスト",
    detail:
      "ウイスキー等の長期熟成は、貯蔵庫の温湿度空調が製品出荷までの数年間にわたって継続する。仕掛品（熟成中の原酒）に対する空調電力は売上計上前のコストとして累積するため、熟成年数と貯蔵量が増えるほど電力負担が構造的に重くなる。",
  },
  {
    label: "容量拠出金（2024年度導入）",
    detail:
      "2024年度に導入された容量市場の拠出金はkWhベースで上乗せされ、蒸留のように使用量が大きい業態に影響する。新電力経由でも回避できず、長期的な電気代上昇圧力として継続する見込み。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模クラフト蒸留所・焼酎蔵（年商3〜20億円、従業員10〜60名）",
    profile: "地場の焼酎蔵・クラフトジン／ウイスキー蒸留所／高圧 100〜400kW／年間 30〜200万 kWh",
    annualCost: "年間電気代 900万〜6,000万円",
    note: "LED化・チラー高効率化・蒸留排熱の一次予熱回収で年8〜13%削減の事例が見られる。",
  },
  {
    size: "中規模の本格焼酎・地ウイスキー蒸留所（年商20〜150億円、従業員60〜300名）",
    profile: "本格焼酎メーカー／地ウイスキー蒸留所／高圧 500〜2,000kW／年間 300〜1,500万 kWh",
    annualCost: "年間電気代 0.9〜4.5 億円",
    note: "蒸気ボイラーの一部ヒートポンプ化＋チラーインバータ化＋自家消費太陽光で年10〜16%削減の事例。",
  },
  {
    size: "大手蒸留所・総合酒類メーカー基幹蒸留所（年商150億円超、従業員300名以上）",
    profile: "大手酒類メーカーの基幹蒸留所／特別高圧 2,000〜6,000kW／年間 1,500万〜6,000万 kWh",
    annualCost: "年間電気代 4.5〜18 億円",
    note: "長期固定契約と需要家主導型PPA・コージェネ排熱回収の併用が主流。",
  },
];

const caseStudies = [
  {
    title: "事例1：クラフト焼酎蔵の年間13%削減（Before/After）",
    before: "九州のクラフト焼酎蔵A社（高圧 200kW、年間 120万 kWh、年間電気代 3,600万円）。市場連動プランを継続、チラーが12年経過、蒸留の凝縮冷却は定速運転、麹室空調も手動制御。",
    after: "新電力へ切替（固定3年）／冷却水チラーを高効率インバータ式へ更新（SII補助1/2活用、投資900万円）／蒸留の凝縮排熱を仕込み水の予熱に一次回収／麹室空調の自動制御化／LED化／デマンドコントローラー導入。",
    result: "年間電気代 3,600万円 → 3,132万円（▲13%、▲468万円）／契約 kW 200→170／投資回収 補助金後 約2.3年（3,600万×0.13＝468万、3,600万−468万＝3,132万）",
  },
  {
    title: "事例2：中規模ウイスキー蒸留所の年間16%削減",
    before: "国内の地ウイスキー蒸留所B社（高圧 1,200kW、年間 800万 kWh、年間電気代 2.4億円）。市場連動プランで2022〜2023年に月最大数百万円の追加負担を経験。夏季の凝縮・貯蔵庫空調ピークとデマンド管理が課題。",
    after: "固定5年プランへ切替／蒸気ボイラーの一部を高温ヒートポンプへ転換（GX・省エネ補助活用）／冷却チラーのインバータ化／貯蔵熟成庫の空調をBEMSで温湿度最適化／自家消費太陽光 500kW 導入／需要家主導型PPA併用。",
    result: "年間電気代 2.4億円 → 2.016億円（▲16%、▲3,840万円）／5年累計 約1.92億円削減（3,840万×5）／契約 kW 1,200→1,020（2.4億×0.16＝3,840万、2.4億−3,840万＝2.016億）",
  },
  {
    title: "事例3：大手蒸留所の年間1.08億円削減",
    before: "大手酒類メーカーの基幹蒸留所C社（特別高圧 3,500kW、年間 3,000万 kWh、年間電気代 9億円）。長期固定契約を継続するも、蒸留ライン増設で契約電力が上振れ。",
    after: "電力契約の10年長期固定を締結／コージェネ導入＋蒸留排熱の多段回収／自家消費太陽光 2MW＋蓄電池／貯蔵庫空調の高効率更新／需要家主導型PPA（オフサイト再エネ）／DR契約締結。",
    result: "年間電気代 9億円 → 7.92億円（▲12%、▲1.08億円）／契約 kW 3,500→3,100／投資回収 補助金後 4〜6年（9億×0.12＝1.08億、9億−1.08億＝7.92億）",
  },
];

const demandManagement = [
  {
    label: "蒸留バッチの起動タイミング分散",
    detail:
      "複数のポットスチル・蒸留ラインを運用する場合、加熱の立ち上げ（起動突入電力）が重なるとデマンドが跳ね上がる。バッチ開始を30分〜2時間ずらすことで同時最大負荷を10〜18%抑制できる。加熱と冷却が同時ピークになりやすい蒸留業態では特に効果が大きい。",
  },
  {
    label: "冷却水・チラーの夜間予冷と蓄熱運用",
    detail:
      "冷却水槽・蓄熱槽を夜間の低外気温・低電力単価帯に予冷しておき、昼間の凝縮負荷を吸収することで、昼間のチラー・ピーク負荷を▲10〜20%。投資はBEMS・センサー・蓄熱槽の追加が中心で、比較的短期の回収が見込める。",
  },
  {
    label: "貯蔵熟成庫空調の外気連動・ゾーン制御",
    detail:
      "貯蔵庫空調を外気温湿度と連動させ、ゾーンごとに設定を最適化することで、過剰空調を抑制。品質に影響しない範囲での設定緩和とインバータ化で、庫内空調の消費電力を削減できる。長期熟成庫ほど累積効果が大きい。",
  },
  {
    label: "デマンド監視と警報・自動制御の導入",
    detail:
      "デマンドコントローラー・BEMSで契約電力に対する使用状況を常時監視し、閾値接近時に非必須負荷（一部空調・充填ラインの補機等）を自動抑制。基本料金の基礎となる最大デマンドを平準化し、中規模蔵で年数百万円規模の基本料金削減につながる例がある。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率チラー・コンプレッサー・LED・ヒートポンプ・送風機・ボイラー更新",
    rate: "中小1/2、大企業1/3、上限は公募要領による",
    note: "蒸留所の冷却チラー高効率化・蒸留排熱回収・電動化で活用しやすい主力補助金。設備単位の省エネ効果を示す申請が採択の鍵。",
  },
  {
    name: "GX・脱炭素関連の設備導入支援",
    target: "蒸気ボイラーの高温ヒートポンプ転換・燃料転換・排熱回収の脱炭素設備",
    rate: "公募要領による（大型案件の対象になり得る）",
    note: "蒸留の加熱を化石燃料から電化・排熱回収へ転換する取り組みは、脱炭素と電力・燃料コスト最適化を同時に狙える。制度内容・要件は年度により変わるため要確認。",
  },
  {
    name: "需要家主導型 PPA / 自家消費太陽光・蓄電池補助",
    target: "自家消費型太陽光・蓄電池の導入",
    rate: "1/2以内など（公募要領による）",
    note: "蔵・貯蔵庫の屋根面積を活用しやすい。日中稼働の大きい蒸留・空調負荷と自家消費太陽光は相性が良い。",
  },
  {
    name: "自治体・農林水産関連の食品・酒類製造支援",
    target: "省エネ設備・排水処理設備・地域産業振興枠の設備導入",
    rate: "自治体・制度により異なる",
    note: "焼酎粕・蒸留廃液の処理設備更新や地場酒類製造の設備投資で、地域の補助制度が用意されている場合がある。所在自治体の制度を確認する。",
  },
  {
    name: "フロン排出抑制法対応・冷媒更新補助",
    target: "特定フロン使用の冷凍・冷却設備の自然冷媒への更新",
    rate: "公募要領による",
    note: "冷却チラー・冷凍設備の冷媒更新は、規制対応と省エネを同時に進められる。適用可否・補助率は制度ごとに要確認。",
  },
];

const checklistItems = [
  "契約電力（kW）が直近12ヶ月の最大デマンド実績に対して過剰でないか",
  "仕込み・蒸留の繁忙期（原料期・出荷期）と夏季の使用量ピークを把握しているか",
  "蒸留の加熱が蒸気ボイラー（燃料）か電気かを整理し、電気比率を把握しているか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "蒸留加熱・冷却チラー・麹室発酵・貯蔵熟成庫の電力プロファイルを把握しているか",
  "冷却チラー・凝縮器のインバータ化・高効率更新の計画を策定したか",
  "蒸留排熱の回収（仕込み水・洗浄水の予熱等）の余地を確認したか",
  "貯蔵熟成庫空調の外気連動・ゾーン制御の導入余地を確認したか",
  "屋根面積を活用した自家消費太陽光（100kW〜2MW）導入の試算を実施したか",
  "新電力5〜10社からの相見積を取得し、固定／市場連動を比較したか",
  "SII・GX/脱炭素補助・自家消費PPA補助・自治体制度・フロン規制対応補助の組合せを検討したか",
  "JEPX市場価格高騰局面でのコスト変動許容度を経営層と合意したか",
];

const faqItems = [
  { question: "蒸留所（焼酎・ウイスキー・スピリッツ）の電気代水準はどれくらいですか？", answer: "蒸留を伴う酒類製造は加熱・冷却の両方で電力を使うため、電気料金は売上高比3〜8%（燃料込みのエネルギーコストで5〜12%）が目安です。蒸留の加熱源が蒸気ボイラー（燃料）か電気かで電気比率が大きく変わるため、まず自社のエネルギー構成を把握することが起点になります。数値は設備構成により変動するため要確認です。" },
  { question: "蒸留器の加熱コストを下げる方法はありますか？", answer: "①蒸気ボイラーの高効率化・一部の高温ヒートポンプ転換、②蒸留排熱の多段回収（仕込み水・洗浄水の予熱）、③加熱バッチの立ち上げタイミング分散によるデマンド抑制、④断熱強化、⑤BEMSによる見える化、が中心です。電化と燃料のどちらが有利かは電力・燃料単価と補助制度により変わるため、総エネルギーコストで比較してください。" },
  { question: "冷却水チラー・凝縮器の電力を削減するには？", answer: "①チラーのインバータ化・高効率更新（外気連動制御）、②夜間予冷・蓄熱運用による昼間ピーク抑制、③クーリングタワー・凝縮器の適正化、④冷却水温の最適管理、⑤BEMS・デマンド監視、の5本柱が中心です。夏季の冷却負荷が大きい蒸留業態では効果が出やすい領域です。" },
  { question: "蒸留所は固定プランと市場連動プランのどちらが向きますか？", answer: "蒸留の加熱・冷却は使用量が大きく、貯蔵熟成庫の空調は年間を通じて連続稼働するためベースロードが厚く、市場高騰局面の影響を受けやすい構造です。一般に価格変動耐性が低い業態は固定プランの優位性が高いとされますが、最終判断は自社の価格転嫁力・変動許容度によります。※本記事は中立的な情報整理であり特定の契約形態を推奨するものではありません。" },
  { question: "貯蔵熟成庫（ウイスキー等）の空調電力はどう最適化しますか？", answer: "熟成庫は製品出荷までの数年間、温湿度空調が連続稼働するため累積コストが大きくなります。①外気連動・ゾーン制御、②品質に影響しない範囲での設定緩和、③空調のインバータ化・高効率更新、④断熱・気密改善、⑤BEMSによる監視、が有効です。仕掛品に対するコストであることを踏まえ、貯蔵量・熟成年数と合わせて計画します。" },
  { question: "麹室・発酵タンクの温度管理電力の対策は？", answer: "麹室・発酵の品温管理は品質に直結するため過度な削減はリスクがあります。①温調ユニット・冷却ジャケットの高効率化、②空調の外気連動制御、③断熱改善、④BEMSでの品温と電力の同時監視、が現実的です。歩留まり・風味への影響を最優先し、品質を担保した範囲で省エネを進めます。" },
  { question: "蒸留所で活用しやすい省エネ・脱炭素補助金は何ですか？", answer: "経産省SII省エネ補助金、GX・脱炭素関連の設備導入支援、需要家主導型PPA・自家消費太陽光/蓄電池補助、自治体・農林水産関連の食品/酒類製造支援、フロン規制対応の冷媒更新補助が挙げられます。制度内容・補助率・要件は年度ごとに変わるため、公募要領で最新情報を確認してください。" },
  { question: "自家消費型太陽光は蒸留所で投資回収できますか？", answer: "蔵・貯蔵庫の屋根面積が大きく、日中の蒸留・冷却・空調負荷が厚い蒸留所は自家消費太陽光と相性が良い業態です。発電量・自家消費率・補助率により投資回収年数は変わり、補助金活用でおおむね数年〜10年程度が目安になります。自社の負荷カーブと屋根条件での試算が前提です。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org" },
  { name: "新電力ネット（エリア別電力単価データ）", url: "https://pps-net.org/unit" },
  { name: "一般社団法人エネルギー情報センター 独自調査" },
];

export default function DistilleryElectricityCostReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/distillery-electricity-cost-review"
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
          <span className="text-slate-800">蒸留所（焼酎・ウイスキー・スピリッツ）の見直しポイント</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            蒸留所（焼酎・ウイスキー・スピリッツ）の電気料金見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            蒸留所は、蒸留器の加熱（蒸気ボイラー・電気ヒーター）、蒸気を液化する冷却水チラー・凝縮、麹室・発酵タンクの温度管理、ウイスキー等の貯蔵熟成庫の温湿度空調、瓶詰・充填ライン、そして高負荷の排水処理まで、加熱と冷却が同時にピークを作る独特な電力負荷を持ちます。本ページでは焼酎・ウイスキー・スピリッツ等の蒸留業態にフォーカスし、電力負荷特性・業界平均水準・規模別事例・省エネ・補助金・契約見直しチェックリストまで、実務に直結する観点を整理します。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            読み分けの目安として、醸造（酒造）の温度管理の具体事例は{" "}
            <Link href="/case-study-brewery-temperature-control" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">酒造の温度管理の事例</Link>
            、清涼飲料・飲料製造全般は{" "}
            <Link href="/beverage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲料製造業の電気料金見直し</Link>
            で扱います。本ページは蒸留業態（焼酎・ウイスキー・スピリッツ等の蒸留・熟成）の電力見直しに絞って解説します。
          </p>
          <AuthorBadge publishedAt="2026-07-21" updatedAt="2026-07-21" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>蒸留所の電力使用プロファイル（蒸留加熱／冷却チラー・凝縮／麹室・発酵／貯蔵熟成庫空調／瓶詰・排水）</li>
              <li>業界平均の電気代水準（売上高比3〜8%）と規模別の年間使用量の目安</li>
              <li>加熱・冷却が同時ピークになる蒸留特有のデマンド構造</li>
              <li>規模別（小・中・大）の電気代と削減事例3件（Before/After）</li>
              <li>チラー高効率化・蒸留排熱回収・ヒートポンプ化の勘所</li>
              <li>SII・GX/脱炭素補助・自家消費PPA・自治体制度・フロン規制対応補助の活用</li>
              <li>蒸留所向け契約見直し12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              蒸留所の電力使用特性 — 蒸留加熱・冷却凝縮・発酵・貯蔵熟成
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所の電力使用は『蒸留器の加熱／冷却水チラー・凝縮／麹室・発酵の温度管理／貯蔵熟成庫の温湿度空調／瓶詰・排水処理』の5層で構成されます。蒸留は加熱と冷却を同時に要するため、加熱系と冷却系が同じ時間帯にピークを作りやすく、他の食品製造と異なるコスト構造を形成します。
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
              業界平均の電気代水準 — 売上高比3〜8%、加熱の電化比率で変動
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所の電気代水準は、蒸留の加熱源（蒸気ボイラーか電気か）、熟成の有無、貯蔵量、瓶詰の内製度合いで大きく異なります。公開統計と一般的なレンジから整理した目安を、自社水準との比較の出発点として活用してください。数値は設備構成で変動するため、あくまで目安として扱ってください。
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
              ※ 出典: 資源エネルギー庁の省エネ関連統計・酒類製造の公開データから整理した一般的な目安です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※参考: 新電力ネット（電力単価・エリア別データ）https://pps-net.org/unit を参照。単価・統計は公開情報ベースの目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              蒸留所の主要な電気代上昇要因 — 燃料費・夏季冷却・熟成空調・賦課金
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所の電気代上昇は、加熱・冷却の大きな使用量に加え、夏季の冷却負荷増、貯蔵熟成の長期空調、再エネ賦課金・容量拠出金の上乗せが複合的に重なります。
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
              規模別の削減事例3件 — クラフト焼酎蔵／中規模ウイスキー蒸留所／大手蒸留所
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所の電気代削減は規模帯ごとに最適施策の組合せが異なります。公開情報から整理した3つのパターンをBefore/Afterで提示します。削減幅は代表例であり、実際は設備・運用条件で変動します。
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
              関連業種は{" "}
              <Link href="/food-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/beverage-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">飲料製造業の電気料金見直し</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              蒸留・冷却・熟成庫のデマンド管理
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所は蒸留バッチの起動分散、冷却水の夜間予冷、貯蔵庫空調のゾーン制御、デマンド監視・自動制御など、加熱と冷却が同時ピークになりやすい業態特有のデマンド管理が効果的です。
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
              。ピーク電力そのものの考え方は{" "}
              <Link href="/peak-demand-management" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ピークデマンド管理</Link>
              も参考になります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              燃料費調整・市場連動プランの影響 — 加熱・冷却・熟成のベースロード
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所は蒸留の加熱・冷却が大きく、貯蔵熟成庫の空調が年間を通じて連続稼働するためベースロードが厚く、市場価格高騰局面での影響が事業収支に響きやすい業態です。価格変動耐性が論点になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">固定プランを検討する観点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蒸留加熱・冷却・熟成空調のベースロードが厚い</li>
                  <li>貯蔵熟成は長期間の連続空調が前提</li>
                  <li>製品価格への即時転嫁が難しい場合が多い</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">市場連動を選んだ場合の留意点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>夏季の市場高値期に冷却負荷増＋電力ピークが重なる</li>
                  <li>JEPX高騰局面では月次コストが大きく変動しうる</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              プラン選択の論点は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">市場連動プランが向かない法人</Link>
              、{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">固定プランが向く法人</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ賦課金の影響 — 使用量の大きい蒸留業態の負担増
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ賦課金は2024年度3.49円/kWh、2025年度3.98円/kWh、2026年度4.18円/kWh（確定）と上昇してきました。加熱・冷却・熟成空調で使用量の大きい蒸留所では、賦課金だけでも相応の負担額になります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">中規模蒸留所（年1,000万kWh）の賦課金負担額の試算</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>2024年度（3.49円/kWh）：年 3,490万円</li>
                  <li>2025年度（3.98円/kWh）：年 3,980万円（+490万円）</li>
                  <li>2026年度（4.18円/kWh）：年 4,180万円（+690万円）</li>
                </ul>
                <p className="mt-2 text-xs text-slate-500">
                  ※ 3.49円×1,000万kWh＝3,490万円、3.98円×1,000万kWh＝3,980万円、4.18円×1,000万kWh＝4,180万円。差額は2024年度比。
                </p>
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
              蒸留所特有の節電・省エネ施策 — 排熱回収・チラー高効率化・ヒートポンプ・PPA
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所の省エネは『蒸留排熱の回収』『冷却チラー・凝縮器の高効率化』『加熱のヒートポンプ化・電化』『自家消費太陽光＋PPA』『BEMSによる見える化』の5軸で組み立てます。加熱と冷却が同時に発生する蒸留の特性を活かした熱の使い回しが鍵になります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">蒸留排熱の多段回収</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>凝縮・冷却で捨てていた熱を仕込み水・洗浄水の予熱へ回収</li>
                  <li>加熱と冷却が同時に出る蒸留の特性と好相性</li>
                  <li>ボイラー燃料・電力の双方を削減できる余地</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">冷却チラー・凝縮器の高効率化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>インバータ化・外気連動制御で夏季消費を抑制</li>
                  <li>冷却水温の最適管理でチラー負荷を低減</li>
                  <li>SII・フロン規制対応補助の対象になり得る</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">加熱のヒートポンプ化・電化</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蒸気ボイラーの一部を高温ヒートポンプへ転換</li>
                  <li>脱炭素とエネルギーコスト最適化を同時に狙える</li>
                  <li>GX・脱炭素補助の対象になり得る（要件は要確認）</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">自家消費型太陽光（100kW〜2MW）＋PPA</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>蔵・貯蔵庫の屋根面積を活用しやすい</li>
                  <li>日中の蒸留・冷却・空調負荷と相性が良い</li>
                  <li>需要家主導型PPAで初期投資を平準化できる</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              太陽光の適性は{" "}
              <Link href="/solar-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">太陽光が向く法人の特徴</Link>
              、自家消費の費用対効果は{" "}
              <Link href="/self-consumption-solar-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自家消費型太陽光の費用対効果</Link>
              、オンサイトPPAの仕組みは{" "}
              <Link href="/onsite-ppa-explained" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">オンサイトPPAの解説</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（業種別） — SII・GX/脱炭素・自家消費PPA・自治体・フロン対応
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所で活用しやすい補助金は5本柱。蒸留排熱回収・チラー高効率化・ヒートポンプ化・自家消費太陽光の組合せ申請で、投資回収を短縮しやすくなります。制度内容・補助率は年度ごとに変わるため、必ず最新の公募要領を確認してください。
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
              個別制度の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              蒸留所に合った契約見直しチェックリスト（12項目）
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
              見直し全体の手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、削減の打ち手全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気代の削減ポイント</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで自社の蒸留所の状況を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              蒸留所は蒸留加熱・冷却凝縮・発酵温調・貯蔵熟成空調のベースロードに、夏季の冷却ピークと繁忙期需要が重なります。シミュレーターで自社条件における上振れ幅を試算し、固定プラン切替や省エネ投資のメリットを定量化できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間上振れリスクを確認する</li>
              <li>夏季の冷却ピーク月の影響額を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>事例で示した12〜16%の削減レンジの自社適用可能性を見立てる</li>
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
            <GlossaryLinks currentSlug="distillery-electricity-cost-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/industry-guide", title: "業種別の見直しポイント集（一覧）", description: "業種別の電気料金見直しポイントをハブから探す。" },
              { href: "/beverage-electricity-cost-review", title: "飲料製造業の電気料金見直し", description: "清涼飲料・飲料製造全般の見直しポイント。" },
              { href: "/case-study-brewery-temperature-control", title: "酒造の温度管理の事例", description: "醸造（酒造）の温度管理・電力対策の具体事例。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し", description: "食品加工業一般の見直しポイント。" },
              { href: "/food-factory-electricity-cost-review", title: "食品工場の電気料金見直し", description: "食品工場一般の負荷特性と見直し。" },
              { href: "/cold-storage-electricity-cost-review", title: "冷凍倉庫の電気料金見直し", description: "貯蔵・冷却の温度管理電力対策。" },
              { href: "/factory-electricity-cost-reduction", title: "工場の電気代削減", description: "工場向けの電気代削減アクションの全体像。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "業種横断のコスト構造比較。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "ベースロードの厚い法人の選択肢。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "変動耐性の低い法人が市場連動を避ける理由。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し準備の全項目を一覧で整理。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "電気代削減打ち手の全体像。" },
              { href: "/self-consumption-solar-cost-benefit", title: "自家消費型太陽光の費用対効果", description: "屋根面積の大きい蔵の投資回収試算。" },
              { href: "/onsite-ppa-explained", title: "オンサイトPPAの解説", description: "自家消費太陽光を初期投資なしで導入する仕組み。" },
              { href: "/peak-demand-management", title: "ピークデマンド管理", description: "加熱・冷却同時ピークの平準化。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金の活用", description: "チラー高効率化・排熱回収の主力補助金。" },
              {
                href: "/industry-electricity-calculator",
                title: "業種別電気料金シミュレーター",
                description: "地域・業種・契約から現状の年間電気代と削減余地を試算。",
              },
            ]}
          />

          <ContentCta
            heading="自社の蒸留所条件でリスクを確認する"
            description="蒸留加熱・冷却凝縮・貯蔵熟成の契約条件をもとに、電気料金の上振れ幅をシミュレーターで試算できます。夏季の冷却デマンド変動や、固定プラン・市場連動プランの年間コスト比較にもご活用ください。"
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
            heading="蒸留所の電力契約見直し、専門家に相談しませんか？"
            description="蒸留加熱・冷却凝縮・貯蔵熟成の電気代見直しは固有の論点が多くなります。エネルギー情報センターは中立的立場で蒸留事業者の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
