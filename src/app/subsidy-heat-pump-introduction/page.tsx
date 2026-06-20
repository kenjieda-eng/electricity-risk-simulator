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
  "ヒートポンプ導入補助 完全ガイド｜2026年度の対象設備・業種別適性と採択戦略";
const pageDescription =
  "ヒートポンプ導入補助に特化した活用ガイド。業務用エアコン（空調HP）・給湯ヒートポンプ・産業用ヒートポンプ（加温・乾燥）の3類型ごとの補助金・補助率、業種別適性、COP・省エネ効果、ボイラ→HPの燃料転換による脱炭素効果を、事例・採択戦略・併用ルール・申請フローで整理します。SII省エネ補助・脱炭素設備補助の活用法を解説。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ヒートポンプ 補助金",
    "業務用エアコン 補助金",
    "給湯ヒートポンプ 補助",
    "産業用ヒートポンプ 補助金",
    "ボイラ 燃料転換 脱炭素",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-heat-pump-introduction",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-heat-pump-introduction",
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/subsidies", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/subsidies"],
  },
};

const overview = [
  {
    label: "ヒートポンプ導入補助の全体像",
    detail:
      "ヒートポンプ（HP）は空気・水・地中の熱を汲み上げて少ない電力で大きな加熱・冷却を行う設備で、業務用エアコン（空調HP）・給湯ヒートポンプ・産業用ヒートポンプ（加温・乾燥）の3類型があります。導入には①SII省エネ補助金（高効率空調・給湯・産業HP）、②環境省の脱炭素設備補助（燃料転換・電化）、③GX・CN投資促進税制、④自治体の独自補助、が活用できます。ボイラ・燃焼式給湯からHPへの燃料転換は省エネとCO2削減を同時実現でき、採択評価が高い投資です（出典: SII公式・経産省・環境省・各自治体から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページはヒートポンプ（空調・給湯・産業用）に特化した深掘りガイドです。補助金制度全体の概要・採択率の総論は別途整理しています。本ページでは3類型ごとの補助金・補助率、業種別適性（食品給湯・ホテル給湯・工場加温・オフィス空調）、COP・省エネ効果、ボイラ→HPの燃料転換という、ヒートポンプ固有の論点に焦点を当てます。",
  },
  {
    label: "3類型（空調・給湯・産業用）の違い",
    detail:
      "空調HP（業務用エアコン）はオフィス・店舗・施設の冷暖房、給湯HPは厨房・浴場・洗浄向けの温水供給、産業用HPは工場の加温・乾燥・濃縮プロセス向けです。施設の熱需要のうち、冷暖房が大きいなら空調HP、温水需要が大きいなら給湯HP、生産プロセスの加熱が大きいなら産業用HPを軸に選定します。",
  },
  {
    label: "COP（成績係数）が省エネ効果を決める",
    detail:
      "ヒートポンプのCOP（投入電力あたりの熱出力）は3〜5程度に達し、燃焼式（COP約0.8〜0.9相当）に比べエネルギー効率が高い。COPが高い高効率機ほど省エネ絶対量が大きく、SII省エネ補助の費用対効果（補助額あたりの省エネ量）が高く評価されやすいため採択上有利です。",
  },
  {
    label: "燃料転換（ボイラ→HP）の脱炭素効果",
    detail:
      "重油・ガスボイラや燃焼式給湯をヒートポンプに転換すると、燃料燃焼によるCO2を削減し電化によるScope1削減を実現できます。環境省の脱炭素・燃料転換補助の主対象であり、CN（カーボンニュートラル）対応投資として政策目的に合致するため採択評価が高い投資です（出典: 環境省／2025年度時点）。",
  },
];

const mainSubsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    role: "経産省／高効率HP導入の主力",
    detail:
      "高効率空調HP・給湯HP・産業用HPへの更新が対象。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。旧型空調・燃焼式給湯からの高効率HP化はCOP改善による省エネ絶対量が大きく、費用対効果で採択上有利です（出典: SII公式／2025年度時点）。",
  },
  {
    name: "環境省 脱炭素・燃料転換設備補助",
    role: "環境省／ボイラ→HPの電化の主力",
    detail:
      "重油・ガスボイラや燃焼式給湯から電気ヒートポンプへの燃料転換・電化が主対象。Scope1のCO2削減効果が大きく、CN対応投資として高く評価されます。産業用HP（加温・乾燥）の電化も対象になりやすい制度です（出典: 環境省／2025年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経産省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得で投資額の10%税額控除または50%特別償却。ヒートポンプ（特に燃料転換を伴う電化設備）で活用しやすく、補助金と併用可能なケースもあります（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "都道府県・市町村の独自補助",
    role: "自治体／上乗せ・横出し",
    detail:
      "多くの自治体が省エネ・脱炭素設備補助で高効率空調・給湯HP・産業HPを対象としています。国補助と設備・経費を分けることで併用可能なケースもあり、重層活用で実質負担を圧縮できます（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／再エネ電力での電化",
    detail:
      "自家消費型太陽光・蓄電池の導入補助。ヒートポンプの電化と再エネ自家消費を組合せると、電化した電力を脱炭素化でき、CN対応の効果が高まります。電化＋再エネを一体で計画すると説得力が増します（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "中小企業向け補助（ものづくり等）",
    role: "中小企業庁／生産性向上と一体",
    detail:
      "中小製造業は、ものづくり補助金等で生産プロセスの更新と産業用HPの導入を一体で行える場合があります。生産性向上（品質・歩留まり）と省エネ・脱炭素を一体訴求すると採択上有利です（出典: 中小企業庁／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率の水準（HP3類型の代表設備）",
    detail:
      "SII省エネ補助は中小1/2・大企業1/3が基本。例えば燃焼式給湯から給湯HPへの更新で3,000万円の場合、中小は1/2の1,500万円が補助され実質負担1,500万円。給湯・加温の電力・燃料費▲30〜50%なら、補助後の投資回収は3〜5年が目安です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    label: "上限額と申請枠の選択",
    detail:
      "SII省エネ補助は事業類型により上限が異なり、大型産業用HP・複数台空調HPの一括更新は先進事業（上限15億円）、単体設備は指定設備導入事業（上限1億円）等。燃料転換は環境省補助が対象になりやすく、投資内容と対象範囲に応じた枠の選択が前提です。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "採択率は補助金・公募回により変動し、各事務局が公募回ごとに採択結果を公表しています。ボイラ→HPの燃料転換はCO2削減効果が大きく費用対効果が評価されやすい傾向。ただし採択率は固定値ではないため、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果（省エネ量あたり補助額）の重要性",
    detail:
      "SII省エネ補助は補助額あたりの省エネ量で採択評価。COPの高い高効率HP・燃料転換を伴う産業用HPは省エネ・CO2削減絶対量が大きいため費用対効果が高く評価されます。熱需要の大きい設備から優先するのが採択戦略です。",
  },
];

const caseStudies = [
  {
    title: "事例1: 食品工場の給湯HP＋産業用HP（高圧1,200kW）",
    before:
      "Before: 重油ボイラで洗浄・殺菌用の温水と乾燥プロセスを供給。年間燃料費＋電気代約2.5億円。CO2排出が多く取引先のCN要請に未対応だった。",
    after:
      "After: SII省エネ補助（1/2）で給湯HPを導入、環境省脱炭素補助で重油ボイラを産業用HP（加温・乾燥）へ燃料転換。屋根太陽光自家消費と組合せて電化電力を脱炭素化。",
    result:
      "Result: 燃料費＋電気代 ▲約25%／Scope1のCO2大幅削減でCN対応／実質投資負担を重層補助で圧縮／補助後の投資回収 約4年（目安）。",
  },
  {
    title: "事例2: ホテルの給湯HP＋空調HP（高圧900kW）",
    before:
      "Before: ガス給湯ボイラで大浴場・客室温水を供給、旧型の業務用空調を使用。年間燃料費＋電気代約1.8億円。光熱費高騰が経営を圧迫していた。",
    after:
      "After: SII省エネ補助で大容量給湯HPと高効率空調HPを一体更新（COP改善）。自治体補助を上乗せ。深夜電力を活用した蓄熱運用で電力コストも最適化。",
    result:
      "Result: 燃料費＋電気代 ▲約22%（▲4,000万円）／給湯の安定供給で快適性も向上／補助後の投資回収 約3.5年（目安）／CN対応で企業向け宿泊需要にも対応。",
  },
  {
    title: "事例3: オフィスビルの空調HP全面更新（高圧700kW）",
    before:
      "Before: 高経年の業務用エアコン（低COP）を使用。冷暖房電力が全電力の50%超。年間電気代約1.2億円。更新時期を迎え省エネ投資を検討していた。",
    after:
      "After: SII省エネ補助（1/2）で高効率空調HP（高COP・インバータ）へ全面更新、BEMSによる運用制御を併設。自治体補助でLED化も同時実施。",
    result:
      "Result: 冷暖房電力 ▲約25%／年間電気代 ▲約15%（▲1,800万円）／実質投資負担を補助で圧縮／補助後の投資回収 約4年（目安）。",
  },
];

const cautionItems = [
  {
    label: "公募期間・交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象。大容量給湯HP・産業用HPはリードタイムが長いため、公募スケジュールと設備調達のタイミング管理が特に重要です。",
  },
  {
    label: "同一設備への国補助の重複は不可",
    detail:
      "同一の設備・経費に複数の国庫補助を重複して受けることは原則不可。給湯HPをSII省エネ補助、燃料転換の産業用HPを環境省補助、と対象を分けることで併用可能なケースがあるため、事前確認が必須です。",
  },
  {
    label: "熱需要・温度帯の適合確認",
    detail:
      "ヒートポンプは取り出せる温度帯に上限があるため、必要な温水温度・加熱温度に機種が適合するか確認が必要。高温域は産業用HP・ハイブリッド構成が必要になる場合があり、設計段階での熱需要把握が重要です。",
  },
  {
    label: "燃料転換は省エネとCO2を一体訴求",
    detail:
      "環境省の脱炭素補助はCO2削減が主目的のため、ボイラ→HPの燃料転換は省エネ（COP改善）＋CO2削減（電化）＋CN対応を一体で訴求すると採択率が高まります。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回で変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。",
  },
];

const targetEquipment = [
  {
    label: "業務用空調ヒートポンプ（空調HP）",
    detail:
      "オフィス・店舗・施設向けの高効率インバータ空調HP。高経年機（低COP）からの更新で冷暖房電力▲20〜30%。冷暖房が電力の多くを占める施設で省エネ余地が大きく、SII省エネ補助の王道設備です。",
  },
  {
    label: "給湯ヒートポンプ（給湯HP）",
    detail:
      "厨房・浴場・洗浄向けの温水供給用HP。ガス・重油給湯からの転換で燃料費・CO2を削減。食品給湯・ホテル給湯・病院給湯など温水需要の大きい施設で費用対効果が高く、深夜電力の蓄熱運用とも相性が良い設備です。",
  },
  {
    label: "産業用ヒートポンプ（加温・乾燥・濃縮）",
    detail:
      "工場の加温・乾燥・濃縮プロセス向けの高温対応HP。重油・ガスボイラからの燃料転換でScope1を削減。食品・化学・繊維などのプロセス加熱で活用でき、環境省脱炭素補助の主対象です。",
  },
  {
    label: "蓄熱・ハイブリッド構成",
    detail:
      "給湯HP＋蓄熱槽による深夜電力活用、HP＋ボイラのハイブリッドによる高温域対応など。負荷変動や温度帯に応じた構成最適化で、省エネと安定供給を両立。設計段階での熱需要把握が前提です。",
  },
  {
    label: "再エネ・蓄電池との連携設備",
    detail:
      "電化したヒートポンプの電力を太陽光自家消費で脱炭素化、蓄電池でデマンド・夜間運用を最適化。需要家主導型再エネ補助・GX税制の対象で、電化＋再エネのCN対応を強化できます。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 熱需要・省エネ余地の把握",
    detail:
      "まず冷暖房・給湯・プロセス加熱の熱需要と温度帯、現行設備のCOP・燃料費を把握。省エネ診断を活用すると、HP化の省エネ余地が定量化でき、申請の根拠が整います。",
  },
  {
    label: "STEP2: 補助金の選定・枠の決定",
    detail:
      "高効率化はSII省エネ補助、ボイラ→HPの燃料転換は環境省脱炭素補助、を軸に選定し併用可否を確認。空調・給湯・産業用のどの類型を導入するかで補助金・枠を決めます。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "COP改善による省エネ量、燃料転換によるCO2削減量、CN対応の必要性を定量で記述。熱需要と機種の適合・温度帯の妥当性を示すと説得力が高まります。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請。交付決定後に給湯HP・産業用HPを発注（決定前発注は対象外）。リードタイムの長い大容量機は調達計画に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "設備導入後、省エネ・CO2削減効果の実績報告を提出。計測体制（BEMS/FEMS）があると報告がスムーズで、継続的な省エネ・脱炭素管理にも役立ちます。",
  },
];

const energySaving = [
  {
    label: "熱需要の大きい設備からHP化（採択戦略）",
    detail:
      "冷暖房・給湯・プロセス加熱のうち、熱需要が大きく省エネ絶対量の出る設備からHP化すると費用対効果が高い。効果の大きい設備を軸に申請すると採択率が高まります。",
  },
  {
    label: "燃料転換でScope1削減を訴求",
    detail:
      "ボイラ→HPの燃料転換は省エネ（COP改善）に加えScope1のCO2削減を実現。環境省脱炭素補助の政策目的に合致し、CN対応投資として高く評価されます。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "SII省エネ補助＋環境省脱炭素補助＋自治体補助＋GX税制を設備・経費で切り分けて重層活用すると、実質負担を最大限圧縮できます。併用可否の見極めが上級テクニックです。",
  },
  {
    label: "再エネ自家消費との組合せ",
    detail:
      "電化したヒートポンプの電力を太陽光自家消費で脱炭素化すると、電気代削減とCN対応を同時実現。蓄電池でデマンド・夜間運用を最適化すると効果がさらに高まります。",
  },
  {
    label: "蓄熱・運用最適化と段階導入",
    detail:
      "給湯HP＋蓄熱で深夜電力を活用し電力コストを最適化。複数拠点・複数設備は熱需要の大きい順に複数年計画で段階導入し、年度予算・公募に合わせて計画的に補助を獲得します。",
  },
];

const checklistItems = [
  "冷暖房・給湯・プロセス加熱の熱需要と温度帯を把握しているか",
  "空調HP・給湯HP・産業用HPのどの類型が適するか確認したか",
  "現行設備のCOP・燃料費とHP化後の省エネ余地を試算したか",
  "高効率化（SII）か燃料転換（環境省）かで補助金・枠を選定したか",
  "ボイラ→HPの燃料転換によるCO2削減効果を定量化したか",
  "必要温度帯にHP機種が適合するか（高温域は産業用HP）確認したか",
  "国補助・自治体補助・GX税制の重層活用の可否を確認したか",
  "再エネ自家消費・蓄熱との組合せを検討したか",
  "実績報告のための計測体制（BEMS/FEMS）を準備しているか",
  "交付決定後に発注するスケジュール管理（HPのリードタイム）ができているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "補助後の投資回収年数を試算したか",
];

const faqItems = [
  {
    question: "ヒートポンプの3類型（空調・給湯・産業用）はどう選びますか？",
    answer:
      "施設の熱需要で選びます。冷暖房が電力の多くを占めるオフィス・店舗は空調HP（業務用エアコン）、厨房・浴場・洗浄の温水需要が大きい食品・ホテル・病院は給湯HP、生産プロセスの加温・乾燥・濃縮が大きい工場は産業用HPが適します。複数の熱需要が大きい施設では、給湯HP＋空調HP、給湯HP＋産業用HPのように組合せて導入するケースもあります。まず熱需要と温度帯を把握することが選定の前提です（出典: SII公式・経産省から整理／2025年度時点）。",
  },
  {
    question: "ヒートポンプはどの補助金の対象になりますか？",
    answer:
      "高効率空調HP・給湯HP・産業用HPへの更新はSII省エネ補助金（工場・事業場型）の対象で、補助率は中小1/2・大企業1/3、上限15億円（先進事業）。重油・ガスボイラからHPへの燃料転換は環境省の脱炭素・燃料転換設備補助の主対象です。GX・CN投資促進税制や自治体の独自補助も活用でき、対象設備を分けることで併用可能なケースもあります（出典: SII公式・環境省・各自治体／2025年度時点）。",
  },
  {
    question: "COPが高いとなぜ補助金で有利なのですか？",
    answer:
      "ヒートポンプのCOP（投入電力あたりの熱出力）は3〜5程度に達し、燃焼式（COP約0.8〜0.9相当）よりエネルギー効率が高い設備です。COPが高い高効率機ほど省エネ絶対量が大きくなり、SII省エネ補助の費用対効果（補助額あたりの省エネ量）が高く評価されます。低COPの旧型機からの更新ほど改善幅が大きく採択上有利になりやすいため、現行設備のCOPと更新後のCOPを比較して効果を定量化することが重要です（出典: SII公式／2025年度時点）。",
  },
  {
    question: "ボイラからヒートポンプへの転換は補助金で評価されますか？",
    answer:
      "高く評価されます。重油・ガスボイラや燃焼式給湯からヒートポンプへの燃料転換は、燃料燃焼によるCO2を削減し電化によるScope1削減を実現します。環境省の脱炭素・燃料転換補助の主対象であり、CN（カーボンニュートラル）対応投資として政策目的に合致するため採択評価が高い投資です。省エネ（COP改善）＋CO2削減（電化）＋CN対応を一体で訴求すると採択率が高まります（出典: 環境省／2025年度時点）。",
  },
  {
    question: "業種別にヒートポンプの適性はどう違いますか？",
    answer:
      "食品工場は洗浄・殺菌の温水と乾燥プロセスで給湯HP・産業用HPの適性が高く、ホテルは大浴場・客室温水で給湯HP、病院は給湯・空調の両方、工場は加温・乾燥の産業用HP、オフィス・店舗は冷暖房の空調HPが中心です。温水・加熱需要の大きい業種ほど燃料転換による省エネ・CO2削減効果が大きく、補助金の費用対効果が高くなります。業種の熱需要プロファイルに合わせた類型選定が採択戦略の起点です。",
  },
  {
    question: "給湯HPの投資回収はどのくらいですか？",
    answer:
      "燃焼式給湯から給湯HPへの更新では、給湯の燃料費・電気代が▲30〜50%程度削減できるケースがあり、SII省エネ補助（中小1/2）を活用すると補助後の投資回収は3〜5年が目安です。例えば投資3,000万円に対し補助1,500万円なら実質負担1,500万円で、温水需要の大きい食品・ホテル・病院では回収が早まります。深夜電力を活用した蓄熱運用を組合せると電力コストをさらに最適化できます（個別案件で変動）。",
  },
  {
    question: "ヒートポンプと太陽光・蓄電池は組合せられますか？",
    answer:
      "組合せられます。ヒートポンプで電化した電力を太陽光自家消費で脱炭素化すると、電気代削減とCN対応を同時実現できます。蓄電池を併用するとデマンド抑制・夜間運用の最適化が可能で、給湯HPの蓄熱運用とも相性が良いです。需要家主導型再エネ補助とSII省エネ補助・環境省脱炭素補助を対象設備で切り分けて併用できるケースもあるため、電化＋再エネを一体で計画すると効果と採択評価が高まります（出典: 経産省・環境省・SII公式／2025年度時点）。",
  },
  {
    question: "交付決定前にヒートポンプを発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象です。大容量の給湯HP・産業用HPはリードタイムが長いため、公募スケジュールと設備調達のタイミング管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。燃料転換を伴う場合は既設ボイラの撤去・配管改修も含めた工程管理が必要になります。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "環境省 脱炭素・燃料転換設備補助", url: "https://www.env.go.jp/" },
  { name: "経済産業省 資源エネルギー庁 省エネ施策", url: "https://www.meti.go.jp/" },
  { name: "各都道府県・市町村 省エネ・脱炭素設備補助", url: "https://www.meti.go.jp/" },
];

export default function SubsidyHeatPumpIntroductionPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-heat-pump-introduction"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "ヒートポンプ導入補助の活用ガイド", url: "https://simulator.eic-jp.org/subsidy-heat-pump-introduction" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">ヒートポンプ導入補助の活用ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            ヒートポンプ導入補助の活用ガイド 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ヒートポンプは少ない電力で大きな加熱・冷却を行う高効率設備で、業務用エアコン（空調HP）・給湯HP・産業用HPの3類型があります。本ページでは3類型ごとの補助金・補助率、業種別適性（食品給湯・ホテル給湯・工場加温・オフィス空調）、COP・省エネ効果、ボイラ→HPの燃料転換による脱炭素効果を、事例・採択戦略・併用ルール・申請フローで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>空調HP・給湯HP・産業用HPの3類型と選び方</li>
              <li>各類型の補助金・補助率と業種別適性</li>
              <li>業種別の補助前後Before/After投資回収事例3件</li>
              <li>COP改善・燃料転換でScope1を削減する採択戦略</li>
              <li>ヒートポンプ導入向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページはヒートポンプ（空調・給湯・産業用）に特化した深掘りガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">ヒートポンプ導入補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプ導入にはSII省エネ補助・環境省脱炭素補助・GX税制・自治体補助が活用できます。COP改善で省エネ、ボイラ→HPの燃料転換でScope1削減を実現し、CN対応投資として一体訴求することで採択率と費用対効果を最大化できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {overview.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の電力プロファイルは{" "}
              <Link href="/food-processing-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">食品加工業の電気料金見直し</Link>
              、{" "}
              <Link href="/hotel-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテルの電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要補助金・税制の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプ導入に活用できる主要な補助金・税制を、役割・補助率・対象別に整理します。高効率化はSII、燃料転換は環境省を軸に、併用・重ね取りを検討します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {mainSubsidies.map((item) => (
                <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助率・上限・採択率の水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助率・上限額・採択率の水準と、費用対効果の重要性を整理します。採択率は公募回で変動するため、最新の事務局公表値での確認が前提です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyRates.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 補助率・上限・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果を必ず確認してください。出典: SII公式・環境省・各自治体から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">業種別事例3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプの代表的な3業種で、補助金活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {caseStudies.map((cs) => (
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
              投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ヒートポンプの補助対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で導入しやすいヒートポンプ関連の設備を整理します。熱需要・温度帯に応じて空調HP・給湯HP・産業用HPを選定し、効果の大きい設備から優先するのが採択戦略です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {targetEquipment.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              エネルギー管理は{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              、太陽光・蓄電池は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要把握から実績報告まで、補助金申請の標準的な流れを整理します。給湯HP・産業用HPのリードタイムと交付決定前発注の禁止に特に注意が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {applicationFlow.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書の書き方は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方完全ガイド</Link>
              、省エネ診断は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金活用の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金活用で失敗しないための留意点を整理します。発注タイミング・併用ルール・温度帯適合・燃料転換の一体訴求が成否を左右します。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-3">
              {cautionItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用ルールは{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              、不採択対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ヒートポンプの省エネ投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              熱需要の大きい設備からのHP化、燃料転換によるScope1削減訴求、国×自治体×税制の重層活用、再エネ自家消費との組合せ、蓄熱・段階導入が採択戦略の柱です。
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
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              GX税制の詳細は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、ホテル向け戦略は{" "}
              <Link href="/subsidy-hotel-leisure-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ホテル・レジャー業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ヒートポンプ導入向け補助金活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、採択率や費用対効果が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中小企業の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで補助金活用後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ヒートポンプの導入・燃料転換による電気代・燃料費の削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、申請する補助金の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>HP化・燃料転換後の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋HP化＋再エネ自家消費の複合効果を見立てる</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 電気代単価・産業別エネルギー消費の最新動向は{" "}
              <a href="https://pps-net.org/unit" className="text-sky-700 underline underline-offset-2 hover:text-sky-900" target="_blank" rel="noopener noreferrer">新電力ネット（pps-net.org/unit）</a>
              のデータも参照のうえ、省エネ投資の優先順位づけにご活用ください。
            </p>
          </section>

          <div className="mt-6">
            <SourcesAndFaq faq={faqItems} sources={sourcesItems} publishedAt="2026-05-29" />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金（総論）", description: "国の主力省エネ補助金の制度概要。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率（総論）", description: "公募タイミングと採択率動向。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "HPの運用制御・実績報告の管理基盤。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "電化・脱炭素設備の税額控除・特別償却。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助金", description: "電化電力の再エネ自家消費との連携。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "SII×環境省×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-hotel-leisure-strategy", title: "ホテル・レジャー業の補助金活用戦略", description: "給湯HP・空調HPの業種別活用。" },
              { href: "/subsidy-medical-welfare-strategy", title: "医療・福祉の補助金活用戦略", description: "病院・施設の給湯・空調HP活用。" },
              { href: "/food-processing-electricity-cost-review", title: "食品加工業の電気料金見直し（業種一般）", description: "給湯・加温の熱需要と省エネ。" },
              { href: "/hotel-electricity-cost-review", title: "ホテルの電気料金見直し（業種一般）", description: "大浴場・客室温水の最適化。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="ヒートポンプ導入と電気代削減を専門家に相談する"
            description="空調HP・給湯HP・産業用HPの選定、ボイラ→HPの燃料転換、補助金・税制の組合せは、熱需要設計や採択戦略が複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="ヒートポンプ導入、専門家に相談しませんか？"
            description="空調・給湯・産業用HPの選定、熱需要に応じた設計、燃料転換による脱炭素化、補助金・税制の組合せは専門知識を要します。エネルギー情報センターは中立的立場でヒートポンプ導入・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
