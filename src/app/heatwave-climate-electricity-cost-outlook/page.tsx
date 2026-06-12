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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["risk-scenarios"];

const pageTitle =
  "猛暑・気候変動と法人電気代の中長期見通し｜法人の夏季電気代対策（想定シナリオ・規模別・代表シナリオ）";
const pageDescription =
  "猛暑・気候変動の進行が法人電気代に与える中長期の影響を、冷房需要増→夏季ピーク需要増→需給逼迫→JEPXスパイク頻度上昇→構造的コスト上振れという因果で整理。価格構造は楽観・標準・慎重の3つの想定レンジで提示し、業種別感度・規模別代表シナリオ・適応策・補助金・チェックリストまで俯瞰します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "猛暑 電気代 法人",
    "気候変動 電力価格 見通し",
    "夏季ピーク 需給逼迫",
    "電気代 中長期 シナリオ",
    "冷房需要 電力コスト 想定",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/heatwave-climate-electricity-cost-outlook",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/heatwave-climate-electricity-cost-outlook",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/seasonal-strategy", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/seasonal-strategy"],
  },
};

const climateTrend = [
  {
    label: "夏季平均気温の上昇トレンド（観測）",
    detail:
      "気象庁の長期統計では、日本の夏季平均気温は過去30年で約+1.5℃上昇したと整理されます。年ごとの振れは大きいものの、長期トレンドとしては右肩上がりが続いているという見方が一般的です。将来の上昇幅はIPCCのシナリオ（排出経路）に依存するため、本ページでは断定せず想定レンジとして扱います。",
  },
  {
    label: "猛暑日・熱帯夜の増加",
    detail:
      "日最高気温35℃以上の猛暑日、夜間も25℃を下回らない熱帯夜の年間日数は、観測上ここ数十年で増加傾向にあると整理されます。これらは日中だけでなく夜間の冷房稼働も押し上げるため、法人の冷房電力が長時間化する目安要因と考えられます。あくまで観測されたトレンドであり、特定年の再現を約束するものではありません。",
  },
  {
    label: "冷房デグリーデー（CDD）の拡大",
    detail:
      "冷房に必要な暑さの積算指標である冷房デグリーデー（CDD）は、気温上昇に連動して拡大する想定です。CDDが10%拡大すれば冷房電力もおおむね同程度のオーダーで増える、というのが空調負荷の単純な目安ですが、断熱・運用・設備効率で実際の感応度は変わります。",
  },
  {
    label: "電力需要ピークの夏季集中",
    detail:
      "OCCTOや各エリアの需給見通しでは、年間最大需要が真夏の午後〜夕方に集中する構造が示されてきました。気温上昇が進むシナリオでは、このピークがさらに高く・長くなる想定です。ピーク需要の押し上げは、後述する需給逼迫やJEPXスパイクの頻度にも波及し得ます。",
  },
  {
    label: "想定としての位置づけ（断定ではない）",
    detail:
      "本ページで扱う将来の気温・需給・価格はすべて「想定」「目安レンジ」「シナリオ」であり、確定的な予測ではありません。特定の電力会社・契約形態を推奨するものではありません。経営判断にあたっては自社の最新実績と公的な需給見通しを併用してください。",
  },
];

const transmissionPath = [
  {
    label: "経路①：冷房需要の増加",
    detail:
      "気温上昇は最初に冷房需要を押し上げます。オフィス・店舗・データセンター・冷蔵倉庫など冷房比率の高い業態ほど、夏季の電力量（kWh）が想定以上に伸びやすい構造です。kWh×単価の単価が一定でも、量が増えれば請求額は上振れします。",
  },
  {
    label: "経路②：夏季ピーク需要の上昇",
    detail:
      "冷房は午後の気温ピークと同期するため、需要の山が高くなります。契約電力（最大デマンド）は年間の瞬間最大で決まるため、猛暑日のピーク更新は基本料金の押し上げ要因です。ピークが高くなる想定では、デマンド管理の重要度が増します。",
  },
  {
    label: "経路③：需給逼迫の頻度上昇（想定）",
    detail:
      "ピーク需要が供給力に近づくと、エリア全体で需給逼迫が起きやすくなる想定です。逼迫時は予備率が低下し、卸電力市場（JEPX）の価格が跳ねやすくなります。逼迫の頻度・深さは天候・電源構成・燃料情勢に左右されるため、レンジでの想定が現実的です。",
  },
  {
    label: "経路④：JEPXスパイクとコストへの波及",
    detail:
      "需給逼迫はJEPXスポット価格のスパイク（一時的高騰）として表れる想定です。市場連動プランは即時に、固定プランでも市場価格調整額や次期契約更改を通じて、時間差でコストに波及し得ます。将来のスパイク水準は断定できないため目安レンジで捉えます。",
  },
  {
    label: "経路⑤：燃料費調整額・各種単価への間接波及",
    detail:
      "猛暑は世界的な冷房需要を通じてLNG等の需給も押し上げ得るため、燃料費調整額に間接的に効く想定です。なお再エネ賦課金は2026年度で4.18円/kWhと公表値が定まっており、本ページで将来値を予測することはしません。特定の電力会社・契約形態を推奨するものではありません。",
  },
];

const scenarioRanges = [
  {
    label: "楽観シナリオ（想定）：構造上振れ小",
    detail:
      "再エネ・蓄電池・系統増強が想定どおり進み、需給逼迫の頻度が抑えられるケースの想定です。夏季の卸価格スパイクは限定的で、法人の夏季電気代の構造的上振れは対通年で+5〜10%程度の目安レンジにとどまる想定。あくまでシナリオであり確定値ではありません。",
  },
  {
    label: "標準シナリオ（想定）：緩やかな上振れ",
    detail:
      "気温上昇トレンドが継続し、猛暑日のピークが緩やかに高まるケースの想定です。需給逼迫は数年に複数回の頻度で発生し、夏季の構造的上振れは対通年で+10〜20%程度の目安レンジを想定。最も基準として置きやすい中位シナリオという位置づけです。",
  },
  {
    label: "慎重シナリオ（想定）：上振れ大・スパイク頻発",
    detail:
      "猛暑が想定を上回り供給側の制約も重なるケースの想定です。需給逼迫とJEPXスパイクが夏季に頻発し、夏季の構造的上振れが対通年で+20〜35%程度に達する目安レンジを想定。予算編成では、この慎重側を上限ガードとして織り込む考え方が安全側です。",
  },
];

const industrySensitivity = [
  {
    label: "冷房比率が高い業態（感応度・大）",
    detail:
      "データセンター・冷蔵冷凍倉庫・大型商業施設・ホテル・病院など、電力に占める冷房比率が30〜55%に達する業態は、気温上昇シナリオの感応度が最も高い想定です。CDDが拡大するほど夏季kWhが伸びやすく、中長期の上振れ幅も大きくなる目安。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "冷房比率が中程度の業態（感応度・中）",
    detail:
      "一般オフィス・小売店舗・食品工場など冷房比率15〜30%の業態は、標準シナリオで対通年+10〜20%程度の上振れを想定。換気・断熱・運用改善の効果が出やすく、適応策次第で感応度を下げられる余地が比較的大きいレンジです。",
  },
  {
    label: "冷房比率が低い業態（感応度・小）",
    detail:
      "24時間連続稼働の重化学・素材プラントなどベースロード型は、冷房比率が10〜20%と相対的に低く、夏季の量的上振れは小さい想定です。ただしベース電力が大きいため、JEPXスパイクや燃料費調整額の単価変動が総額に効きやすく、価格側の感応度には注意が必要という見立てです。",
  },
  {
    label: "感応度の試算方法（目安）",
    detail:
      "感応度は「夏季冷房kWh ÷ 年間kWh」で粗く把握できます。ここに単価の想定レンジを掛ければ、シナリオ別の上振れ額の目安が出ます。自社の業種別感応度は業種別電気料金シミュレーターで確認するのが実務的です。数値はすべて目安です。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模（年間電気代 1,000万〜1億円）",
    profile: "中小オフィス・小売・小規模倉庫",
    annualCost: "標準シナリオで夏季 +10〜20% の上振れを想定（目安レンジ）",
    note: "運用改善・換気強化・契約電力の適正化を即時実施。投資は小口でも感応度を下げやすい。すべて想定であり確定値ではありません。",
  },
  {
    size: "中規模（年間電気代 1〜10億円）",
    profile: "中堅製造・物流・複数拠点小売",
    annualCost: "標準シナリオで夏季 +12〜22% の上振れを想定（目安レンジ）",
    note: "高効率空調＋自家消費太陽光＋固定/市場連動の分散契約を3年計画で。慎重シナリオを上限ガードに予算化する想定。",
  },
  {
    size: "大規模（年間電気代 10〜100億円）",
    profile: "大手製造・大規模物流・データセンター",
    annualCost: "標準シナリオで夏季 +10〜25% の上振れを想定（目安レンジ）",
    note: "自家発電・蓄電池・DR・長期相対契約で価格レンジを能動的に管理。Scope2との連動も前提とする想定。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1：中規模オフィスビル運営会社（中長期試算）",
    before:
      "首都圏・中規模オフィスビル運営（年間電気代2億円、契約電力1,800kW、冷房比率約30%）。市場連動プラン中心で、近年の猛暑年は夏季月の電気代が想定を上回って推移。公開事例・業界団体ヒアリングから整理した代表シナリオです。気温上昇トレンドが続く前提で中長期の上振れリスクを試算。",
    after:
      "①固定プランと市場連動の比率を分散（市場連動を6→3割の想定運用）／②高効率空調＋BEMSで冷房kWh▲15%目安／③屋上自家消費太陽光0.5MW／④契約電力の適正化でピーク抑制。すべてシナリオ上の想定施策であり確定値ではありません。",
    result:
      "標準シナリオでは年間電気代の構造的上振れを2億円→約2.1億円（+5%目安）に抑制する代表シナリオ。慎重シナリオでも+12%目安に収まる想定レンジ。年間の上振れ抑制を「▲400万円 ×5年＝▲2,000万円」（5年累計の目安）として予算に織り込む試算です。数値はすべて目安。",
  },
  {
    title: "代表シナリオ2：地域物流・冷蔵倉庫事業者（中長期試算）",
    before:
      "中部地区・冷蔵冷凍倉庫を含む物流（年間電気代6億円、契約電力3,200kW、冷房比率約45%）。外気温上昇で冷却負荷が伸びやすく、慎重シナリオでは夏季の上振れが大きいと想定。公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    after:
      "①断熱性能向上・エアカーテンで冷却kWh▲15%目安／②自家消費太陽光2MW＋蓄電池でピークシフト／③長期固定＋一部市場連動の分散調達／④DR参加でピーク時の需要抑制。いずれも想定施策であり確定値ではありません。",
    result:
      "標準シナリオで構造的上振れを6億円→約6.3億円（+5%目安）に抑える代表シナリオ。適応策の年間効果は「▲1,200万円 ×5年＝▲6,000万円」（5年累計の目安）として試算。慎重シナリオでも上限を+15%目安にガードする想定レンジで、いずれも確定値ではありません。",
  },
  {
    title: "代表シナリオ3：大手データセンター運営（中長期試算）",
    before:
      "関西・大規模データセンター（年間電気代20億円、契約電力9,000kW、冷房比率約50%）。外気温が高い時間帯ほど冷却PUEが悪化しやすく、気温上昇シナリオの感応度が最も高い業態の代表シナリオ。公開事例・業界団体ヒアリングから整理しています。",
    after:
      "①外気冷房（フリークーリング）・液冷で冷却kWh▲12%目安／②自家消費太陽光5MW＋蓄電池でJEPXスパイク回避／③長期相対契約で価格レンジを固定化／④需給逼迫時のDR。すべて想定施策で確定値ではありません。",
    result:
      "標準シナリオで構造的上振れを20億円→約21億円（+5%目安）に抑える代表シナリオ。適応策の年間効果を「▲5,000万円 ×5年＝▲2.5億円」（5年累計の目安）として試算。慎重シナリオでも+13%目安に収める想定レンジ。数値はすべて目安であり予測を保証するものではありません。",
  },
];

const adaptationMeasures = [
  {
    label: "設備の適応：高効率化と外気利用",
    detail:
      "高効率空調・インバータ・外気冷房（フリークーリング）・断熱性能向上で、気温上昇シナリオ下でも冷房kWhの伸びを抑える想定です。CDD拡大に対する感応度そのものを下げる、最も直接的な適応策という位置づけ。投資回収は補助金活用で短縮できる目安です。",
  },
  {
    label: "契約の分散：固定と市場連動のミックス",
    detail:
      "固定プランと市場連動プランを一定比率で組み合わせると、JEPXスパイク時の影響を平準化できる想定です。すべてを市場連動にすると慎重シナリオで上振れが大きく、すべて固定にすると平時の機動性が下がるため、レンジ管理として分散が有効という考え方。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "調達の分散：自家発電・蓄電池・相対契約",
    detail:
      "自家消費太陽光・蓄電池・コージェネ・長期相対契約を組み合わせ、市場価格レンジへの依存度を能動的に下げる適応策の想定です。ピーク時の自家消費とDRを併用すれば、需給逼迫シナリオ下の総額ブレを抑えやすい目安です。",
  },
  {
    label: "需要側の適応：ピークシフトとDR",
    detail:
      "生産・空調・蓄熱の時間シフトでピークを平準化し、需給逼迫時の高単価帯を避ける適応策の想定です。DR（デマンドレスポンス）参加は、逼迫頻度が上がる慎重シナリオほど相対的な価値が高まる目安と整理されます。",
  },
];

const policyOverview = [
  {
    label: "再エネ拡大と価格影響（俯瞰）",
    detail:
      "再エネ拡大は中長期で限界費用の低い電源を増やし、平時の卸価格を押し下げ得る一方、出力変動により需給逼迫時のスパイクを残す想定です。賦課金は2026年度で4.18円/kWhと公表されており、本ページで将来値を予測することはしません。特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "需給構造の変化（俯瞰）",
    detail:
      "電化（EV・ヒートポンプ・データセンター）の進展は年間需要とピークの両方を押し上げ得る想定です。気温上昇による冷房需要増と重なると、夏季ピークの構造が一段と厳しくなるシナリオも考えられます。供給側の増強ペースとの綱引きという見立てです。",
  },
  {
    label: "容量市場・容量拠出金（俗瞰）",
    detail:
      "供給力確保のための容量市場は、需給逼迫リスクへの備えである一方、容量拠出金として法人の固定費に乗る想定です。気温上昇でピークが高まるシナリオでは、供給力確保の必要性とコストの双方が増す方向と整理されます。将来の拠出金水準は断定しません。",
  },
  {
    label: "脱炭素政策と長期見通し（俯瞰）",
    detail:
      "GX・カーボンニュートラル政策は電源構成と価格構造を中長期で動かす想定要因です。炭素価格・系統増強・原子力の稼働状況など複数の不確実性が絡むため、本ページでは断定的な数値予測を避け、楽観・標準・慎重の3レンジで俯瞰します。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・外気冷房・断熱・換気・BEMS",
    rate: "中小1/2、大企業1/3、上限あり",
    note: "気温上昇シナリオへの設備適応で最も活用しやすい主力補助金。複数施策の組合せで採択率が上がる傾向。金額は目安。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内、kWh定額型もあり",
    note: "JEPXスパイク回避とピークシフトの両立に有効。慎重シナリオほど相対価値が高まる想定。金額は目安。",
  },
  {
    name: "脱炭素先行地域・GX補助（環境省・経産省）",
    target: "ヒートポンプ・コージェネ・系統用蓄電池",
    rate: "1/2、上限数億円規模",
    note: "中長期の脱炭素適応投資向け。容量市場・需給逼迫対応との連動も。金額は目安で確定値ではありません。",
  },
  {
    name: "中小企業向け 省エネ設備等支援補助金",
    target: "中小法人の空調・換気・LED更新",
    rate: "2/3、上限数千万円規模",
    note: "小規模法人の即時適応に向く。運用改善と組み合わせると感応度を下げやすい。金額は目安。",
  },
];

const checklistItems = [
  "直近12ヶ月の最大デマンド実績に対し契約電力（kW）が過剰でないか確認したか",
  "夏季の冷房kWhが年間kWhに占める比率（冷房感応度の目安）を把握したか",
  "気温上昇シナリオ（楽観/標準/慎重）の3レンジで予算を試算したか",
  "JEPXスパイクの影響を市場価格調整額・契約更改の両面で確認したか",
  "燃料費調整額の上限有無（あり／なし／一部）を契約書で確認したか",
  "固定プランと市場連動プランの分散比率を見直したか",
  "高効率空調・外気冷房・断熱など設備の適応策を中期計画化したか",
  "自家消費太陽光・蓄電池・DRによる需給逼迫時の上振れ抑制を試算したか",
  "再エネ賦課金は2026年度4.18円/kWhとして単価計算に織り込んだか",
  "慎重シナリオを予算の上限ガードとして経営会議で共有したか",
];

const faqItems = [
  { question: "猛暑・気候変動は法人電気代を本当に押し上げますか？", answer: "観測トレンドとしては、過去30年で夏季平均気温が約+1.5℃上昇し猛暑日も増えており、冷房需要→夏季ピーク→需給逼迫→JEPXスパイクという経路で構造的に上振れし得ると整理されます。ただし将来の幅は想定・目安レンジであり確定的な予測ではありません。" },
  { question: "中長期でどれくらいの上振れを見込めばよいですか？", answer: "本ページでは楽観（対通年+5〜10%目安）、標準（+10〜20%目安）、慎重（+20〜35%目安）の3つの想定シナリオで提示しています。いずれも目安レンジであり、自社の冷房比率・地域・契約で大きく変わります。予算編成では慎重側を上限ガードに置く考え方が安全側です。" },
  { question: "どの業態が気温上昇シナリオの影響を最も受けますか？", answer: "データセンター・冷蔵冷凍倉庫・大型商業施設・ホテル・病院など冷房比率が高い業態ほど感応度が大きい想定です。逆に24時間稼働のベースロード型は量の上振れは小さい一方、JEPXや燃料費調整額の単価変動には注意が必要という見立てです。" },
  { question: "固定プランと市場連動プランはどちらが有利ですか？", answer: "中長期では一概に断定できません。市場連動はスパイク時の上振れが大きく、固定は平時の機動性が下がるため、一定比率で分散しレンジ管理する考え方が現実的です。特定の電力会社・契約形態を推奨するものではありません。最終判断は自社の感応度と最新の市場環境で行ってください。" },
  { question: "再エネ賦課金は今後いくらになりますか？", answer: "本ページでは将来の賦課金額を予測しません。確定している公表値として、再エネ賦課金は2026年度で4.18円/kWhです。単価計算にはこの公表値を用い、将来値は仮定を置かず想定レンジの中で別途扱うのが安全です。" },
  { question: "JEPXのスパイクはどの程度の頻度になりますか？", answer: "将来の頻度・水準は天候・電源構成・燃料情勢に左右されるため断定できません。本ページでは、需給逼迫が標準シナリオで数年に複数回、慎重シナリオで夏季に頻発する想定として扱っています。あくまでシナリオ上の目安です。" },
  { question: "中長期の上振れに対して企業は何から始めるべきですか？", answer: "まず冷房感応度（夏季冷房kWh÷年間kWh）を把握し、3つの想定シナリオで予算を試算します。その上で設備の高効率化、契約の分散、自家発電・蓄電池・DRによる調達分散を段階的に進めるのが定石です。すべて想定に基づく目安です。" },
  { question: "シミュレーターでは中長期の見通しを試算できますか？", answer: "現行契約条件をもとに夏季の上振れ幅や適応策の効果を試算できます。業種別の感応度は業種別電気料金シミュレーターで確認できます。将来値は想定レンジで扱い、楽観・標準・慎重の3シナリオで幅を持って見立てるのが実務的です。" },
];

const sourcesItems = [
  { name: "気象庁（気候変動・気温の長期統計）", url: "https://www.data.jma.go.jp/cpdinfo/" },
  { name: "電力広域的運営推進機関（OCCTO 需給見通し）", url: "https://www.occto.or.jp/" },
  { name: "日本卸電力取引所（JEPX スポット価格）", url: "https://www.jepx.jp/" },
  { name: "経済産業省 資源エネルギー庁", url: "https://www.enecho.meti.go.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/unit" },
];

export default function HeatwaveClimateElectricityCostOutlookPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/heatwave-climate-electricity-cost-outlook"
        datePublished="2026-06-12"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "季節別の電気代対策", url: "https://simulator.eic-jp.org/articles/seasonal-strategy" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/seasonal-strategy" className="underline-offset-2 hover:underline">季節別の電気代対策</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">猛暑・気候変動と法人電気代の中長期見通し</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            猛暑・気候変動と法人電気代の中長期見通し
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            猛暑・気候変動の進行は、冷房需要の増加→夏季ピーク需要の上昇→需給逼迫の頻度上昇→JEPXスパイク→法人電気代の構造的な上振れ、という経路で中長期に効いてくる想定です。本ページでは観測されたトレンドを起点に、価格構造を楽観・標準・慎重の3つの想定シナリオで整理し、業種別の感応度、規模別の代表シナリオ、企業がとるべき適応策、再エネ・需給・容量市場の俯瞰までを見通します。記載の将来値はすべて「想定」「目安レンジ」「シナリオ」であり確定的な予測ではなく、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-12" updatedAt="2026-06-12" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>猛暑・気候変動の観測トレンドと電力需要への影響</li>
              <li>気温上昇が法人電気代に効く因果経路（冷房→ピーク→市場→コスト）</li>
              <li>中長期の価格構造シナリオ（楽観／標準／慎重の3想定レンジ）</li>
              <li>業種別の感応度（冷房比率が高いほど影響大）</li>
              <li>規模別の代表シナリオ3件（中長期試算）</li>
              <li>設備・契約・調達の分散による適応策</li>
              <li>再エネ拡大・需給・容量市場の俯瞰とチェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              猛暑・気候変動の進行と電力需要 — 観測トレンド
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中長期見通しの出発点は、確定的な予測ではなく「観測されたトレンド」です。夏季平均気温の上昇、猛暑日・熱帯夜の増加、冷房デグリーデー（CDD）の拡大、夏季ピークの集中という4つの観測事実が、後述する価格への波及の前提になります。将来値はあくまで想定レンジとして扱います。
            </p>
            <div className="mt-4 space-y-3">
              {climateTrend.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              猛暑そのものの電気代リスクは{" "}
              <Link href="/electricity-cost-risk-heatwave" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                猛暑による電気代リスク
              </Link>
              、天候と価格の連動は{" "}
              <Link href="/weather-electricity-price-link" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                天候と電力価格の関係
              </Link>
              で確認できます。記載はすべて想定であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              気温上昇が法人電気代に効く経路 — 冷房→ピーク→市場→コスト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              気温上昇が請求額に届くまでには明確な因果経路があります。冷房需要の増加（量）→夏季ピークの上昇（基本料金）→需給逼迫（予備率低下）→JEPXスパイク（卸価格）→燃料費調整額等への間接波及、という5段の経路です。kWh×単価を基本に、量と単価の両面で効く点が中長期の特徴です。
            </p>
            <div className="mt-4 space-y-3">
              {transmissionPath.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。単価・統計・削減率は公開情報目安です。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX・気象庁・IPCC等から整理した目安値です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              単価側の波及は{" "}
              <Link href="/fuel-cost-adjustment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">燃料費調整額の仕組み</Link>
              、{" "}
              <Link href="/renewable-surcharge-increase-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ賦課金上昇の影響</Link>
              、需給側は{" "}
              <Link href="/supply-demand-tightness-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">需給逼迫の影響</Link>
              で深掘りできます。いずれも想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中長期の価格構造シナリオ — 楽観／標準／慎重の3想定レンジ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中長期の価格は単一の予測ではなく、幅を持ったシナリオで捉えるのが安全です。ここでは楽観・標準・慎重の3つの想定レンジを示します。いずれも確定的な予測ではなく目安レンジであり、自社の冷房比率・地域・契約で大きく変わります。
            </p>
            <div className="mt-4 space-y-3">
              {scenarioRanges.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 業界団体・経産省／エネ庁・OCCTO・JEPX・気象庁・IPCC等から整理した目安値です。将来値はすべて想定であり確定的な予測ではありません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年単位の見通しは{" "}
              <Link href="/electricity-price-outlook-2026" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">2026年の電気料金見通し</Link>
              、シナリオ設計の考え方は{" "}
              <Link href="/what-is-electricity-price-risk-scenario" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">電気料金リスクシナリオとは</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別の感応度 — 冷房比率が高いほど影響大
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              気温上昇シナリオの効き方は業種で大きく異なります。電力に占める冷房比率が高いほど量的な上振れが大きく、ベースロード型は単価変動への感応度が相対的に高いという構造です。自社がどのレンジに属するかを把握することが、シナリオ別予算の出発点になります。
            </p>
            <div className="mt-4 space-y-3">
              {industrySensitivity.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              自社の業種別感応度は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で試算できます。AI需要を含む構造変化は{" "}
              <Link href="/ai-demand-electricity-price-outlook" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">AI需要と電力価格の見通し</Link>
              で確認できます。いずれも想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の代表シナリオ3件 — 中長期試算（代表シナリオ）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公開事例・業界団体ヒアリングから整理した代表シナリオを、Before/After/Resultで3件提示します。いずれも中長期の想定に基づく代表シナリオであり、特定企業の確定実績ではありません。数値はすべて目安です。
            </p>
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
            <p className="mt-3 text-xs text-slate-500">
              ※ 代表シナリオの数値は目安であり、想定に基づくシナリオです。予測を保証するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              企業がとるべき適応策 — 設備・契約・調達の分散
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中長期の上振れに対しては、単一施策ではなく『設備の適応・契約の分散・調達の分散・需要側の適応』を組み合わせるのが定石です。気温上昇シナリオの感応度そのものを下げる設備投資と、価格レンジへの依存を下げる契約・調達の分散を両輪で進める想定です。
            </p>
            <div className="mt-4 space-y-3">
              {adaptationMeasures.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏季ピークの基礎は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">夏季ピーク電気代の基礎とCFO視点</Link>
              、ピークカットの全体像は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、DRは{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              で確認できます。いずれも想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              再エネ拡大・需給・容量市場の俯瞰 — 価格構造の前提
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              気温上昇シナリオを評価するには、供給側の構造変化も俯瞰する必要があります。再エネ拡大・電化による需要構造の変化・容量市場・脱炭素政策は、いずれも中長期の価格レンジを動かす想定要因です。確定的な数値予測は避け、方向性として整理します。
            </p>
            <div className="mt-4 space-y-3">
              {policyOverview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再エネ拡大の価格影響は{" "}
              <Link href="/renewable-energy-expansion-price-impact" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">再エネ拡大と価格影響</Link>
              、長期の単価推移は{" "}
              <Link href="/business-electricity-price-trend-10-years" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電気料金の10年推移</Link>
              で確認できます。いずれも想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              リスクシナリオ経営 — 感度分析と予算織り込み
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中長期の不確実性は、単一予測ではなくシナリオ経営で扱うのが安全です。楽観・標準・慎重の3レンジで感度分析を行い、慎重シナリオを予算の上限ガードに据える考え方が定石です。すべて想定に基づく目安であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">感度分析の置き方（目安）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>冷房感応度＝夏季冷房kWh÷年間kWh</li>
                  <li>単価想定レンジ（楽観/標準/慎重）を掛ける</li>
                  <li>kWh×単価で上振れ額の目安を算出</li>
                  <li>慎重シナリオを上限ガードに設定</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">取締役会報告の重点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>3シナリオでの夏季上振れレンジ</li>
                  <li>適応策の5年累計効果（目安）</li>
                  <li>契約分散による価格レンジ管理</li>
                  <li>Scope2・ESG開示との連動</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              シナリオの実務的な使い方は{" "}
              <Link href="/how-to-use-electricity-price-risk-scenarios" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">リスクシナリオの使い方</Link>
              で確認できます。いずれも想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金と長期投資 — 適応投資の費用対効果
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              気温上昇シナリオへの適応投資は、補助金スケジュールと合わせると投資回収を短縮できる想定です。設備の高効率化・自家消費太陽光・蓄電池・DRは、慎重シナリオほど相対価値が高まる目安。複数補助金の組合せ申請で採択率が上がる傾向と整理されます。金額は目安であり確定値ではありません。
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
              料金メニューの比較は{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較</Link>
              、記事全体のハブは{" "}
              <Link href="/articles" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">記事一覧</Link>
              から辿れます。金額は目安であり確定値ではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              中長期見通しチェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中長期シナリオを予算と経営計画に織り込む前に、このチェックリストで自社状況を整理してください。1項目でも未確認があれば、シナリオ別予算の精度や適応策の優先順位付けが甘くなります。記載はすべて想定に基づく目安です。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              使い方の基本は{" "}
              <Link href="/how-to" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">シミュレーターの使い方</Link>
              、季節別対策の一覧は{" "}
              <Link href="/articles/seasonal-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">季節別の電気代対策（一覧）</Link>
              で確認できます。記載はすべて想定に基づく目安です。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで中長期の上振れを確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              猛暑・気候変動の影響は、業種・冷房比率・地域・契約で大きく異なります。シミュレーターで自社条件における夏季の上振れ幅と、設備適応・自家消費太陽光・DR参加のメリットを定量化できます。将来値はすべて想定レンジで扱い、楽観・標準・慎重の3シナリオで幅を持って見立てるのが実務的です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での夏季上振れリスク（想定レンジ）を確認する</li>
              <li>冷房感応度に応じた業種別の上振れ幅を試算する</li>
              <li>固定プランと市場連動プランの分散比率を比較する</li>
              <li>適応投資の5年累計効果（目安）を見立てる</li>
              <li>慎重シナリオを予算の上限ガードとして織り込む</li>
            </ul>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の感応度試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              から始められます。特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-12"
            />
            <GlossaryLinks currentSlug="heatwave-climate-electricity-cost-outlook" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・気候変動シナリオのハブ。" },
              { href: "/electricity-cost-risk-heatwave", title: "猛暑による電気代リスク", description: "猛暑年に法人電気代が上振れする仕組み。" },
              { href: "/weather-electricity-price-link", title: "天候と電力価格の関係", description: "気温・天候とJEPX価格の連動を整理。" },
              { href: "/ai-demand-electricity-price-outlook", title: "AI需要と電力価格の見通し", description: "電化・AI需要が中長期の価格に与える想定。" },
              { href: "/electricity-price-outlook-2026", title: "2026年の電気料金見通し", description: "年単位の電気料金見通しと前提。" },
              { href: "/supply-demand-tightness-impact", title: "需給逼迫の影響", description: "予備率低下と卸価格スパイクの構造。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向けレポーティング。" },
              { href: "/renewable-energy-expansion-price-impact", title: "再エネ拡大と価格影響", description: "再エネ拡大が卸価格レンジに与える影響。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "需給逼迫時に価値が高まるDRの基礎。" },
              { href: "/how-to-use-electricity-price-risk-scenarios", title: "リスクシナリオの使い方", description: "3シナリオでの感度分析と予算織り込み。" },
              { href: "/what-is-electricity-price-risk-scenario", title: "電気料金リスクシナリオとは", description: "シナリオ設計の基本的な考え方。" },
              { href: "/business-electricity-price-trend-10-years", title: "法人電気料金の10年推移", description: "長期の単価トレンドを俯瞰。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "燃料情勢が単価に効く経路を解説。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "2026年度4.18円/kWhと単価への効き方。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種別の冷房感応度と上振れを試算。" },
            ]}
          />

          <ContentCta
            heading="自社の中長期シナリオをシミュレーターで確認する"
            description="業種・冷房比率・地域・契約をもとに、夏季電気代の上振れ幅（想定レンジ）と、設備適応・自家消費太陽光・DR参加のメリットを試算できます。楽観・標準・慎重の3シナリオで幅を持って見立て、慎重側を予算の上限ガードに織り込む計画策定にご活用ください。"
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
            heading="電力コストの見直し、専門家に相談しませんか？"
            description="記事を読んで気になった点があれば、エネルギー情報センターにお気軽にご相談ください。法人・自治体の電力契約に精通したスタッフが、中立的な立場で判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
