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

const __CATEGORY_FAQ__ = CATEGORY_FAQ_6_20["diagnostic-tools"];

const pageTitle =
  "夏季のデマンド（契約電力）見直しタイミング｜法人の夏季電気代対策（実量制・規模別・代表シナリオ）";
const pageDescription =
  "高圧の実量制（過去12か月の最大需要で契約電力が決まる仕組み）を軸に、なぜ夏のピーク1コマが向こう1年の基本料金を押し上げるのかを解説。6月準備→7-9月監視→10月総括の見直しカレンダー、契約電力過不足の判定方法、規模別の代表シナリオ、デマンド抑制手段、基本料金インパクト試算、補助金、チェックリストまで実務に直結する観点で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "夏季 デマンド 見直し",
    "契約電力 実量制",
    "最大需要 7月 8月",
    "基本料金 削減",
    "デマンド監視 タイミング",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/summer-demand-contract-review",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/summer-demand-contract-review",
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

const jissenStructure = [
  {
    label: "実量制（過去12か月最大需要方式）の基本",
    detail:
      "高圧500kW未満の多くは実量制（デマンド制）で契約電力が決まる。当月を含む過去12か月の各月の最大需要電力（30分デマンドの最大値）のうち、最も大きい1コマが契約電力になる。つまり夏の1コマの跳ね上がりが、その後最大11か月の基本料金を引きずる構造。なお本記事は仕組みの整理であり、特定の電力会社・契約形態を推奨するものではありません。",
  },
  {
    label: "なぜ夏に最大デマンドが出やすいか",
    detail:
      "外気温の上昇で空調負荷が増え、製造・物流では冷却機器も同時稼働する。さらに昼休み明けの一斉稼働や来客ピークが重なると、30分の1コマだけ需要が突出しやすい。年間の最大需要が7-9月に出る事業所は多く、ここを抑えられるかが年間基本料金を左右する。",
  },
  {
    label: "夏のピーク実績が向こう1年を決める",
    detail:
      "7-9月に更新された最大デマンドは、原則として翌年の同月に新しいピークが出るか、12か月の窓から抜け落ちるまで契約電力に残り続ける。8月に一度大きな値を出すと、翌年7月までの基本料金がその水準で固定されやすい。1コマの管理が年間コストに直結する。",
  },
  {
    label: "6月までに見直す理由",
    detail:
      "夏本番の前にデマンド監視・空調制御・運用ルールを整えておかないと、7月の最初の猛暑日で年間ピークを更新してしまう。見直しは事後では遅く、6月までの準備が要となる。",
  },
  {
    label: "夏前点検と夏後振り返りの2点セット",
    detail:
      "6月の夏前点検（設備・しきい値・体制の確認）と、10月の夏後振り返り（実績デマンドと契約電力の差分検証）をセットで回すと、過不足の判定と翌年の打ち手が明確になる。年1回ではなく季節サイクルで管理するのが実量制との相性が良い。",
  },
];

const sizeStructure = [
  {
    label: "小規模高圧（年間電気代 数百万〜3,000万円）の傾向",
    detail:
      "オフィス・小売・小規模工場など。空調が最大デマンドの主因になりやすく、デマンド監視装置＋運用ルールの整備で年間ピークを抑えられる余地が大きい。投資が小さく着手しやすい層。",
  },
  {
    label: "中規模高圧（年間電気代 3,000万〜2億円）の傾向",
    detail:
      "中堅工場・物流・複合施設など。空調＋生産設備が同時に立ち上がるコマでピークが出やすい。デマンド監視＋空調群制御＋一部の負荷シフトで、契約電力の適正化が現実的。",
  },
  {
    label: "大規模高圧・特別高圧（年間電気代 2億円〜）の傾向",
    detail:
      "大型工場・大規模物流・データセンター等。蓄電池ピークカット・自家発・DRの組合せでピークを構造的に抑える層。基本料金の絶対額が大きく、契約電力1kWの差が年間で効いてくる。",
  },
];

const peakConditions = [
  {
    label: "最大デマンドが出やすい時間帯",
    detail:
      "オフィス・商業は13〜16時の午後ピーク（昼休み明けの一斉稼働＋外気温最高）。製造・物流は始業直後の8〜10時と午後の冷却負荷増。空調主体の事業所は猛暑日の14時前後に年間最大が集中しやすい。",
  },
  {
    label: "1コマ突出を生む典型条件",
    detail:
      "①猛暑日に空調を一斉フル稼働②昼休み後の機器一斉復帰③大型機器の同時起動（起動電流）④来客・繁忙の重なり。これらが30分の同一コマに重なると、平常時より2〜3割高いデマンドが1回だけ出る。",
  },
  {
    label: "外気温としきい値の関係",
    detail:
      "外気温が概ね30℃を超えると空調負荷が立ち上がり、35℃超では年間最大デマンド更新のリスクが高い。気温予報としきい値アラートを連動させ、猛暑日に監視を強める運用が有効。",
  },
  {
    label: "見落としやすい連休明け・お盆明け",
    detail:
      "連休明けやお盆明けの再稼働日は、設備の一斉立ち上げと積み残し処理が重なり、平日より高いデマンドが出ることがある。カレンダー上の特異日を監視強化日に設定しておく。",
  },
];

const calendarSteps = [
  {
    label: "6月：夏前準備（見直しの本丸）",
    detail:
      "過去12か月のデマンド推移を取得し年間最大コマを特定。デマンド監視装置の稼働確認、しきい値（警報・限界）の設定、空調群制御の動作確認、ピーク時の手順書と担当の明確化。ここで準備を終えるのが要。",
  },
  {
    label: "7-9月：ピーク監視・抑制の実行期",
    detail:
      "猛暑日・特異日を中心にデマンドをリアルタイム監視。しきい値接近で空調の間引き・設定変更・大型機器の起動分散を実行。年間最大を更新しそうなコマを1回ずつ潰すのが目的。日次でピーク値を記録。",
  },
  {
    label: "10月：夏後総括・差分検証",
    detail:
      "実績デマンドと契約電力の差分を検証。過大なら減設、不足（超過リスク）なら抑制強化や増設を判断。翌年の準備課題を棚卸し。実量制は12か月窓のため、夏のピークが翌夏まで残る点を踏まえて計画する。",
  },
  {
    label: "通年：契約更新タイミングとの接続",
    detail:
      "契約更新や新電力切替の検討は、夏のピーク実績が出そろう10月以降に置くと過不足判定が正確になる。更新3か月前の準備と、夏のデマンド総括を接続させると意思決定の質が上がる。",
  },
];

const judgementMethods = [
  {
    label: "過大契約（契約電力＞実績）の判定",
    detail:
      "過去12か月の最大デマンドが契約電力を恒常的に下回るなら過大契約の可能性。差が10〜20%以上なら減設（契約電力の引き下げ）で基本料金を直接圧縮できる。ただし将来増設予定や季節変動を踏まえて判断する。",
  },
  {
    label: "過小・超過リスク（実績≧契約）の判定",
    detail:
      "実績デマンドが契約電力に張り付く、または超過警報が頻発する場合は超過リスク。超過すると契約電力が自動的に書き換わり基本料金が上がるため、抑制強化か計画的な増設で備える。",
  },
  {
    label: "適正バッファの考え方",
    detail:
      "一般に契約電力に対し実績最大が80〜90%程度に収まると過不足が小さい目安。突発負荷の余地と基本料金のムダのバランスで、業種・季節変動から自社のバッファを設計する。数値は公開情報からの目安です。",
  },
  {
    label: "判定に必要なデータ",
    detail:
      "月別の最大デマンド（過去24か月あると望ましい）、30分デマンドの日内・季節プロファイル、契約電力・基本料金単価、増設計画。これらを揃えると過不足の根拠が定量化できる。",
  },
];

const sizeBenchmarks = [
  {
    size: "小規模高圧（年間電気代 数百万〜3,000万円）",
    profile: "オフィス・小売・小規模工場",
    annualCost: "デマンド監視＋運用で契約電力5〜15%の適正化が目安",
    note: "監視装置＋しきい値運用が中心。投資が小さく着手しやすい。数値は公開情報目安です。",
  },
  {
    size: "中規模高圧（年間電気代 3,000万〜2億円）",
    profile: "中堅工場・物流・複合施設",
    annualCost: "監視＋空調群制御＋負荷シフトで5〜12%の適正化が目安",
    note: "同時起動の分散と空調制御を組合せ。契約区分見直しも視野に。数値は公開情報目安です。",
  },
  {
    size: "大規模高圧・特別高圧（年間電気代 2億円〜）",
    profile: "大型工場・大規模物流・データセンター",
    annualCost: "蓄電池ピークカット＋DRで構造的にピークを抑制",
    note: "1kWの差が年間で効く層。蓄電池・自家発・DRを総合活用。投資回収は補助金で短縮。",
  },
];

const caseStudies = [
  {
    title: "代表シナリオ1：過大契約の適正化（中規模オフィスビル・基本料金 目安▲12%）",
    before:
      "首都圏・中規模オフィスビル（高圧、契約電力 目安450kW）。数年前の入居最大時に設定した契約電力のまま、テナント退去後も見直さず。過去12か月の最大デマンドは目安380kW前後で恒常的に契約を下回り、基本料金にムダが発生していた。",
    after:
      "①過去24か月のデマンド推移を分析し年間最大コマを特定／②デマンド監視装置のしきい値を再設定／③夏季の午後ピークに空調の間引き運用を導入／④10月の夏後総括で実績最大が目安400kW以内に収まることを確認のうえ契約電力を400kWへ減設。これは公開事例・業界団体ヒアリングから整理した代表シナリオであり、特定の電力会社・契約形態を推奨するものではありません。",
    result:
      "契約電力 目安450kW→400kW（▲50kW）で基本料金 目安▲12%。基本料金単価を仮に1,800円/kW・月とすると 50kW×1,800円×12か月＝年108万円の削減目安。数値はkWh×単価／kW×単価ベースの試算で、出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。",
  },
  {
    title: "代表シナリオ2：デマンド監視導入で夏ピーク抑制（中規模食品工場・基本料金 目安▲8%）",
    before:
      "中部・中規模食品工場（高圧、契約電力 目安1,200kW）。デマンド監視が手動で、猛暑日の14時前後に冷却機器と空調が同時稼働し年間最大デマンドが更新されがち。前年8月の1コマが向こう1年の基本料金を押し上げていた。",
    after:
      "①デマンド監視装置＋自動制御を導入／②しきい値接近で空調群と一部冷却の起動を分散／③6月の夏前点検で手順書と担当を明確化／④7-9月は猛暑日・お盆明けを監視強化日に設定。これは公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    result:
      "年間最大デマンドを 目安1,200kW→1,100kW（▲100kW）に抑制し基本料金 目安▲8%。基本料金単価を仮に1,700円/kW・月とすると 100kW×1,700円×12か月＝年204万円の削減目安。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。",
  },
  {
    title: "代表シナリオ3：蓄電池ピークカットで構造的抑制（大規模物流倉庫・基本料金 目安▲10%）",
    before:
      "関西・大規模物流倉庫（高圧、契約電力 目安3,000kW）。冷蔵冷凍の夏季冷却負荷増で午後の30分コマが突出。運用だけではピークを抑えきれず、契約電力が高止まり。",
    after:
      "①過去デマンドから年間最大コマを特定／②蓄電池（ピークカット用）を導入し午後ピークを放電で平準化／③デマンド監視と連動した自動制御／④DR参加で需給ひっ迫時の抑制も収益化／⑤補助金1/2活用で投資回収を短縮。これは公開事例・業界団体ヒアリングから整理した代表シナリオです。",
    result:
      "年間最大デマンドを 目安3,000kW→2,700kW（▲300kW）に抑制し基本料金 目安▲10%。基本料金単価を仮に1,750円/kW・月とすると 300kW×1,750円×12か月＝年630万円の削減目安。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。",
  },
];

const suppressionMeasures = [
  {
    label: "デマンド監視装置（しきい値アラート）",
    detail:
      "30分デマンドを予測し、警報・限界しきい値で接近を知らせる。最も基本かつ費用対効果が高い手段。手動運用でも年間最大コマの更新を1回ずつ防げる。自動制御と連動すると確実性が増す。",
  },
  {
    label: "空調の群制御・間引き運用",
    detail:
      "しきい値接近時に空調機を順番に間引き・設定変更し、室温を大きく崩さずに需要を平準化。午後ピーク帯に効果が大きい。BEMSと連動すると自動化できる。",
  },
  {
    label: "大型機器の起動分散・負荷シフト",
    detail:
      "同時起動を避けて起動タイミングをずらす、昼ピークの作業を朝夕に寄せるなどで1コマの突出を抑える。製造・物流では生産シフトの一部移行が有効な場合がある。",
  },
  {
    label: "蓄電池ピークカット・DR",
    detail:
      "蓄電池で午後ピークを放電平準化し、契約電力を構造的に下げる。DRに参加すれば需給ひっ迫時の抑制を収益化できる。投資は大きいが大規模ほど効く。将来の市場・燃調の前提は想定の目安レンジで見る。",
  },
];

const subsidyPrograms = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率空調・BEMS・デマンド制御・監視装置",
    rate: "中小1/2、大企業1/3、上限あり",
    note: "デマンド見直しに伴う設備更新で活用しやすい主力補助金。複数施策の組合せで採択率が上がる傾向。",
  },
  {
    name: "需要家主導型 PPA / 蓄電池併設補助金",
    target: "自家消費型太陽光・蓄電池・DR連動",
    rate: "1/2以内、kWh定額補助型もあり",
    note: "蓄電池ピークカットで契約電力を構造的に下げる用途。屋根・敷地が広い事業所に向く。",
  },
  {
    name: "DR・デマンド対応のインセンティブ／補助",
    target: "デマンドレスポンス参加・制御設備",
    rate: "制度により異なる（公募型）",
    note: "需給ひっ迫時の抑制を収益化。デマンド見直しと相性が良い。公募時期の確認が必要。",
  },
  {
    name: "中小企業向け省エネ設備支援補助金",
    target: "中小事業者の空調・監視・制御更新",
    rate: "2/3、上限あり",
    note: "小〜中規模高圧でデマンド監視＋空調更新に活用しやすい。採択率が比較的高い。",
  },
];

const checklistItems = [
  "過去12か月（できれば24か月）の月別最大デマンドを取得し、年間最大が出たコマを特定したか",
  "年間最大デマンドが契約電力に対して過大／適正／超過リスクのどれに該当するか判定したか",
  "デマンド監視装置の稼働と、警報・限界しきい値の設定を6月までに確認したか",
  "最大デマンドが出やすい時間帯（午後ピーク等）と特異日（連休・お盆明け）を把握したか",
  "猛暑日に空調群制御・間引き運用を実行する手順書と担当を明確化したか",
  "大型機器の同時起動を避ける起動分散・負荷シフトの余地を検討したか",
  "蓄電池ピークカット・DR参加の費用対効果を規模に応じて試算したか",
  "基本料金単価（円/kW・月）を契約書で確認し、kW削減の金額インパクトを試算したか",
  "10月の夏後総括で実績デマンドと契約電力の差分を検証し、減設／増設を判断したか",
  "再エネ賦課金（2026年度 4.18円/kWh）や燃料費調整額の上限有無など従量側の前提も併せて確認したか",
];

const faqItems = [
  { question: "実量制（デマンド制）とは何ですか？なぜ夏が重要なのですか？", answer: "高圧の多くで採用される契約電力の決定方式で、当月を含む過去12か月の各月の最大需要電力（30分デマンドの最大値）のうち最も大きい1コマが契約電力になります。年間最大が7-9月に出る事業所が多いため、夏の1コマを抑えられるかが年間基本料金を左右します。本記事は仕組みの整理です。" },
  { question: "なぜ夏のピーク1コマが向こう1年の基本料金を押し上げるのですか？", answer: "実量制は過去12か月の最大値を使うため、8月などに一度大きなデマンドを出すと、その値が12か月の窓から抜け落ちる翌年まで契約電力として残ります。つまり夏の30分1コマが、最大で約11か月先までの基本料金を引きずる構造です。" },
  { question: "見直しはいつ着手すべきですか？", answer: "本命は6月の夏前準備です。7月の最初の猛暑日で年間ピークを更新する前に、デマンド監視・しきい値・空調制御・体制を整えます。7-9月は監視と抑制の実行期、10月は実績と契約電力の差分を検証する総括期、という季節サイクルが実量制と相性が良いです。" },
  { question: "契約電力が過大かどうかはどう判定しますか？", answer: "過去12か月の最大デマンドが契約電力を恒常的に10〜20%以上下回るなら過大契約の可能性です。減設で基本料金を直接圧縮できますが、将来の増設予定や季節変動を踏まえて判断します。一般に実績最大が契約電力の80〜90%に収まると過不足が小さい目安です。数値は公開情報からの目安です。" },
  { question: "基本料金はどれくらい下げられますか？", answer: "kW×単価で計算します。たとえば契約電力を50kW下げ、基本料金単価を1,800円/kW・月と仮定すると、50kW×1,800円×12か月＝年108万円の削減目安です。実際の単価は契約で異なるため、自社の契約書で確認してください。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。" },
  { question: "デマンド抑制の手段は何がありますか？", answer: "①デマンド監視装置（しきい値アラート）②空調の群制御・間引き運用③大型機器の起動分散・負荷シフト④蓄電池ピークカット・DR、が基本です。小規模は監視＋運用、大規模は蓄電池・DRが効きます。特定の電力会社・契約形態を推奨するものではありません。" },
  { question: "新電力切替や契約区分変更とデマンド見直しはどう関係しますか？", answer: "夏のピーク実績が出そろう10月以降に切替・区分変更を検討すると、過不足判定が正確になります。契約電力が適正化されてから相見積を取ると比較精度が上がります。判断は中立に行ってください。" },
  { question: "今後の市場価格や燃料費調整額はどう見込めばよいですか？", answer: "JEPXのスポット価格や燃料費調整額の先行きは確定できないため、想定の目安レンジで複数シナリオを置くのが実務的です。デマンド（基本料金）側は自社の運用で確実に効かせられる領域なので、まず夏のピーク管理を固めることをおすすめします。" },
];

const sourcesItems = [
  { name: "経済産業省 資源エネルギー庁（省エネポータルサイト）", url: "https://www.enecho.meti.go.jp/category/saving_and_new/saving/" },
  { name: "電力広域的運営推進機関（OCCTO）", url: "https://www.occto.or.jp/" },
  { name: "日本卸電力取引所（JEPX）", url: "http://www.jepx.org/" },
  { name: "一般社団法人 環境共創イニシアチブ（SII）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "新電力ネット（電力単価・スポット価格）", url: "https://pps-net.org/unit" },
];

export default function SummerDemandContractReviewPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/summer-demand-contract-review"
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
          <span className="text-slate-800">夏季のデマンド（契約電力）見直し</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            夏季のデマンド（契約電力）見直しタイミング
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            高圧の多くは「実量制（デマンド制）」で契約電力が決まります。これは当月を含む過去12か月の最大需要電力（30分デマンドの最大値）のうち、最も大きい1コマが契約電力になる方式です。年間の最大需要は7-9月に出やすく、夏のたった1コマの跳ね上がりが向こう最大11か月の基本料金を押し上げます。本ページでは、なぜ夏に最大デマンドが出やすいのか、夏のピーク実績が向こう1年の契約電力をどう決めるのか、そして6月準備→7-9月監視→10月総括という見直しカレンダーを軸に、契約電力の過不足判定・規模別の代表シナリオ・抑制手段・基本料金インパクト試算・補助金・チェックリストまでを実務に直結する観点で整理します。なお本記事は中立的な解説であり、特定の電力会社・契約形態を推奨するものではありません。
          </p>
          <AuthorBadge publishedAt="2026-06-12" updatedAt="2026-06-12" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>実量制（過去12か月最大需要方式）で契約電力が決まる仕組み</li>
              <li>なぜ夏に最大デマンドが出やすいのか（時間帯・条件）</li>
              <li>夏のピーク実績が向こう1年の契約電力を決める構造</li>
              <li>6月準備→7-9月監視→10月総括の見直しカレンダー</li>
              <li>契約電力の過大／適正／超過リスクの判定方法</li>
              <li>規模別の代表シナリオ3件（適正化／監視導入／蓄電池）</li>
              <li>デマンド抑制の手段・補助金・チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ夏のデマンドが年間契約電力を決めるのか — 実量制の仕組み
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏のデマンド見直しを理解する起点は「実量制」です。契約電力は過去12か月の最大需要電力の最大値で決まるため、夏の1コマの管理が年間基本料金を左右します。まずは仕組みの5論点を押さえましょう。本記事は中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {jissenStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力（デマンド）の定義は{" "}
              <Link href="/contract-demand-what-is-it" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                契約電力（デマンド）とは
              </Link>
              、デマンド管理の全体像は{" "}
              <Link href="/demand-control-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                デマンドコントロール入門
              </Link>
              で確認できます。本記事はそれらの一般論ではなく「夏季のタイミング」に特化しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季の最大デマンドが出る時間帯・条件
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              年間最大デマンドがどのコマで出るかは業種で傾向があります。出やすい時間帯と1コマ突出の条件を把握すると、監視を強める日と時間が明確になります。数値は公開情報からの目安です。
            </p>
            <div className="mt-4 space-y-3">
              {peakConditions.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。実際のピーク時間帯は業種・地域・運用で変わります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏のピークシフトの基礎は{" "}
              <Link href="/demand-response-summer-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR入門・夏のピークシフト</Link>
              、夏季電気代のCFO視点は{" "}
              <Link href="/summer-peak-electricity-cost-cfo" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">夏季ピーク電気代の基礎とCFO視点</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              見直しタイミングのカレンダー — 6月準備→7-9月監視→10月総括
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実量制は12か月窓のため、見直しは「年1回の点検」ではなく季節サイクルで回すのが効果的です。6月までに準備を終え、7-9月に実行し、10月に総括するという流れが核になります。
            </p>
            <div className="mt-4 space-y-3">
              {calendarSteps.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約更新前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              、業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約電力過不足の判定方法 — 過大・超過リスク・適正バッファ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏のデマンド見直しのゴールは「契約電力を実態に合わせること」です。過大なら減設、超過リスクなら抑制・増設の判断を、データに基づいて行います。一般に実績最大が契約電力の80〜90%に収まると過不足が小さい目安です。
            </p>
            <div className="mt-4 space-y-3">
              {judgementMethods.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。減設・増設の可否や手続きは契約・地域で異なります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              削減効果の考え方は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              で確認できます。判断は中立に行い、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              規模別の代表シナリオ3件 — 適正化／監視導入／蓄電池ピークカット
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公開事例・業界団体ヒアリングから整理した3つの代表シナリオをBefore/Afterで提示します。いずれも夏のデマンド管理が年間基本料金にどう効くかを示すものです。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              規模別の傾向と打ち手は次のとおりです。小規模は監視＋運用、中規模は空調制御＋負荷シフト、大規模は蓄電池・DRが中心になります。
            </p>
            <div className="mt-3 space-y-3">
              {sizeStructure.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              {sizeBenchmarks.map((item) => (
                <div key={item.size} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.size}</p>
                  <p className="mt-1 text-sm text-slate-700">{item.profile}</p>
                  <p className="mt-1 text-sm font-semibold text-emerald-700">{item.annualCost}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種横断の打ち手は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、DRが向く法人は{" "}
              <Link href="/demand-response-suited-corporations" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DRが向く法人</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              デマンド抑制の手段 — 監視装置・空調制御・蓄電池・DR
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏の年間最大コマを潰すための手段を、費用対効果の順に整理します。小規模は監視＋運用から、規模が大きいほど蓄電池・DRが効きます。将来の市場価格・燃料費調整額は確定できないため、想定の目安レンジで複数シナリオを置きます。
            </p>
            <div className="mt-4 space-y-3">
              {suppressionMeasures.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              削減効果の試算は{" "}
              <Link href="/demand-control-reduction-effect" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">デマンドコントロール削減効果</Link>
              、DRの費用対効果は{" "}
              <Link href="/demand-response-cost-benefit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DRの費用対効果</Link>
              、蓄電池×BCPは{" "}
              <Link href="/battery-storage-bcp-peak-cut-hybrid" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池×BCP×ピークカット</Link>
              で確認できます。手段選定は中立に行い、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              基本料金インパクトの試算 — kW×単価で考える
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド見直しの効果は「契約電力の削減kW × 基本料金単価（円/kW・月）× 12か月」で計算します。従量側（kWh×単価）とは別に、基本料金は自社の運用で確実に効かせられる領域です。下表は基本料金単価を仮に1,800円/kW・月とした目安です。出典: 業界団体・経産省／エネ庁・OCCTO・JEPX等から整理した目安値です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">削減kW別の年間削減目安</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>▲30kW：30kW×1,800円×12か月＝年64.8万円</li>
                  <li>▲50kW：50kW×1,800円×12か月＝年108万円</li>
                  <li>▲100kW：100kW×1,800円×12か月＝年216万円</li>
                  <li>▲300kW：300kW×1,800円×12か月＝年648万円</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">複数年で見た効果（5年累計）</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>実量制は1コマが12か月残るため累積効果が大きい</li>
                  <li>例：年▲108万円 ×5年＝▲540万円（▲50kW想定）</li>
                  <li>単価が高い契約ほど削減インパクトは拡大</li>
                  <li>従量側（再エネ賦課金 2026年度 4.18円/kWh等）と分けて評価</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実際の基本料金単価は契約で異なるため、必ず契約書で確認してください。kWh×単価の従量側を含めた全体像は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              で試算できます。なお本記事は中立的な整理です。
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 新電力ネット（https://pps-net.org/unit）を加工して整理。基本料金単価・削減率は公開情報の目安で、実値は契約・地域で変わります。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              契約区分・新電力切替との関係 — 順番が大事
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド見直しは、契約区分変更や新電力切替と切り離さず「順番」で考えると効果的です。先に契約電力を適正化してから相見積を取ると、比較精度と交渉力が上がります。特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">推奨する検討順序</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>① 夏のデマンド管理で契約電力を適正化</li>
                  <li>② 10月以降に実績が出そろってから判定</li>
                  <li>③ 固定／市場連動を含め相見積を比較</li>
                  <li>④ 契約区分（高圧／特別高圧）の妥当性確認</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">プラン選択時の論点</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  <li>基本料金（kW）と従量料金（kWh）を分けて評価</li>
                  <li>固定プラン／市場連動プランの値動き想定</li>
                  <li>燃料費調整額・市場価格調整額の上限有無</li>
                  <li>将来のJEPX・燃調は想定の目安レンジで複数試算</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見直し全体の手順は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">法人電力契約見直しチェックリスト</Link>
              、料金メニューの比較は{" "}
              <Link href="/compare" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">料金メニュー比較</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              補助金活用（デマンド見直し） — SII・PPA・DR・中小支援
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド見直しに伴う設備更新は補助金で投資回収を短縮できます。監視装置・空調制御・蓄電池・DR設備が主な対象です。複数補助の組合せ申請で採択率が上がる傾向があります。
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
              DR・デマンド補助金の詳細は{" "}
              <Link href="/subsidy-demand-response-incentive" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">DR・デマンド補助金</Link>
              、EV充電のオフピーク活用は{" "}
              <Link href="/ev-charging-off-peak-tou" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">EV充電のオフピーク活用</Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              夏季デマンド見直しチェックリスト（10項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏のデマンド見直しに着手する前に、このチェックリストで自社状況を整理してください。1項目でも未確認があれば、年間最大コマの管理精度や相見積の交渉力が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ピークカット5戦略は{" "}
              <Link href="/peak-cut-5-strategies" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種横断ピークカット5戦略</Link>
              、契約更新前の準備は{" "}
              <Link href="/what-to-do-3-months-before-electricity-contract-renewal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">契約更新3か月前にやること</Link>
              で確認できます。本チェックは中立的な整理であり、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              シミュレーターで夏季デマンドの効果を確認する
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              夏の年間最大デマンドをどれだけ抑えられるかで、向こう1年の基本料金が変わります。シミュレーターで自社条件における契約電力の過不足と、デマンド抑制・蓄電池・DRのメリットを定量化できます。業種別の試算は{" "}
              <Link href="/industry-electricity-calculator" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別電気料金シミュレーター</Link>
              が便利です。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約での夏季ピーク超過リスクを確認する</li>
              <li>契約電力の削減kWと基本料金（kW×単価）の効果を試算する</li>
              <li>固定プランと市場連動プランの年間コスト差を把握する</li>
              <li>蓄電池ピークカット・DR参加の費用対効果を比較する</li>
              <li>代表シナリオで示した基本料金 目安▲8〜12%の自社適用可能性を見立てる</li>
            </ul>
          </section>

          <MarketDataFaq items={__CATEGORY_FAQ__} />
          <HistoricalEventTimeline events={MAJOR_ENERGY_EVENTS} />

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-06-12"
            />
            <GlossaryLinks currentSlug="summer-demand-contract-review" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "容量拠出金", "固定プラン", "市場連動プラン", "契約電力"]} />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/seasonal-strategy", title: "季節別の電気代対策（一覧）", description: "夏季ピーク対策・DR・業種別戦略のハブ。" },
              { href: "/contract-demand-what-is-it", title: "契約電力（デマンド）とは", description: "デマンド・契約電力の基本定義。" },
              { href: "/demand-control-guide", title: "デマンドコントロール入門", description: "デマンド管理の全体像と基本手法。" },
              { href: "/demand-control-reduction-effect", title: "デマンドコントロール削減効果", description: "デマンド抑制の削減効果試算。" },
              { href: "/demand-response-summer-strategy", title: "DR入門・夏のピークシフト", description: "DR経済性と夏のピークシフト。" },
              { href: "/peak-cut-5-strategies", title: "業種横断ピークカット5戦略", description: "5戦略のROI比較とフェーズドアプローチ。" },
              { href: "/summer-peak-electricity-cost-cfo", title: "夏季ピーク電気代の基礎とCFO視点", description: "夏季電気代の構造とCFO向け整理。" },
              { href: "/demand-response-cost-benefit", title: "DRの費用対効果", description: "DR参加の収益とコストの考え方。" },
              { href: "/demand-response-suited-corporations", title: "DRが向く法人", description: "DR適性の高い業種・条件。" },
              { href: "/subsidy-demand-response-incentive", title: "DR・デマンド補助金", description: "DR・デマンド対応の補助制度。" },
              { href: "/what-to-do-3-months-before-electricity-contract-renewal", title: "契約更新3か月前にやること", description: "更新前の準備と相見積の進め方。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "見直し全体の手順チェック。" },
              { href: "/battery-storage-bcp-peak-cut-hybrid", title: "蓄電池×BCP×ピークカット", description: "蓄電池でピークを構造的に抑制。" },
              { href: "/ev-charging-off-peak-tou", title: "EV充電のオフピーク活用", description: "EV充電のTOU活用でピーク回避。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "業種別に夏季デマンドの効果を試算。" },
            ]}
          />

          <ContentCta
            heading="自社の夏季デマンド見直しをシミュレーターで確認する"
            description="契約電力の過不足と、デマンド抑制・蓄電池・DR参加のメリットを試算できます。6月準備→7-9月監視→10月総括の季節サイクル設計にもご活用ください。特定の電力会社・契約形態を推奨するものではありません。"
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
