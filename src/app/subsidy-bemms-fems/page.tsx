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
  "BEMS/FEMS導入補助 完全ガイド｜2026年度の対象設備・建物用途別の選び方と採択戦略";
const pageDescription =
  "BEMS（ビル）/FEMS（工場）のエネルギー管理システム導入補助に特化した活用ガイド。計測・制御・見える化システムの補助対象、ビル・工場・商業・倉庫の用途別の選び方、SII省エネ補助・自治体補助の補助率・要件、省エネ効果の実績報告への活用、投資回収までを、事例・採択戦略・併用ルール・申請フローで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "BEMS 補助金",
    "FEMS 補助金",
    "エネルギー管理システム 補助",
    "見える化 省エネ補助金",
    "建物 工場 エネルギー管理",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-bemms-fems",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-bemms-fems",
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
    label: "BEMS/FEMSとエネルギー管理システムの全体像",
    detail:
      "BEMS（Building Energy Management System／ビル）とFEMS（Factory Energy Management System／工場）は、電力・ガス・熱の使用量を計測し、見える化・分析・制御することで省エネを実現するシステムです。導入には①SII省エネ補助金（計測・制御を含む設備一体型）、②自治体の独自省エネ・脱炭素設備補助、③GX・CN投資促進税制、が活用できます。BEMS/FEMS単体だけでなく、空調・照明・生産設備の更新と一体で導入すると補助対象範囲が広がり費用対効果が高まります（出典: SII公式・経産省・環境省・各自治体から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページはBEMS/FEMS（エネルギー管理システム）に特化した深掘りガイドです。補助金制度全体の概要・採択率の総論は別途整理しています。本ページでは計測・制御・見える化システムの補助対象範囲、ビル・工場・商業・倉庫といった建物用途別の選び方、省エネ効果の実績報告への活用という、エネルギー管理システム固有の論点に焦点を当てます。",
  },
  {
    label: "BEMSとFEMSの違いと選び方",
    detail:
      "BEMSはオフィスビル・商業施設・病院など建物のエネルギーを管理し、空調・照明・受変電が主対象。FEMSは工場の生産設備・ユーティリティ（コンプレッサ・ボイラ・冷凍機）を含めて管理し、生産量あたりの原単位（エネルギー効率）改善が主眼です。建物用途の比率が高い施設はBEMS、生産設備の比率が高い工場はFEMSを軸に選定するのが基本です。",
  },
  {
    label: "見える化が省エネ投資の起点になる",
    detail:
      "BEMS/FEMSによる計測・見える化は、どこで・いつ・どれだけ電力を使っているかを定量化し、空調・照明・生産設備のどこに省エネ余地があるかを特定する起点になります。省エネ診断と組合せると投資の優先順位づけが精緻になり、後続の設備更新補助の採択根拠としても活用できます。",
  },
  {
    label: "実績報告・継続管理への活用",
    detail:
      "省エネ補助金は交付後に省エネ効果の実績報告が必要です。BEMS/FEMSがあれば計測データで効果を客観的に示せるため報告がスムーズになり、補助金の費用対効果評価（補助額あたりの省エネ量）の根拠としても有効。導入後の継続的な省エネ管理（PDCA）にも役立ちます（出典: SII公式／2025年度時点）。",
  },
];

const mainSubsidies = [
  {
    name: "SII 省エネ補助金（工場・事業場型）",
    role: "経産省／BEMS/FEMS導入の主力",
    detail:
      "空調・照明・生産設備等の更新と一体で、計測・制御・見える化システム（BEMS/FEMS）が補助対象に含まれます。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。エネルギー管理を伴う設備更新は省エネ効果の確実性が高く、費用対効果で採択上有利です（出典: SII公式／2025年度時点）。",
  },
  {
    name: "都道府県・市町村の独自補助",
    role: "自治体／BEMS/FEMS単体も対象になりやすい",
    detail:
      "多くの自治体が省エネ・脱炭素設備補助でBEMS/FEMS・見える化システムを対象としています。国補助が設備一体型なのに対し、自治体補助は計測・見える化システム単体でも対象になるケースがあり、中小・小規模事業者の最初の一歩として活用しやすい制度です（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    name: "GX・カーボンニュートラル投資促進税制",
    role: "経産省・国税庁／税額控除・特別償却",
    detail:
      "脱炭素関連設備の取得で投資額の10%税額控除または50%特別償却。BEMS/FEMSと連動する省エネ設備・自家発電・蓄電池で活用しやすく、補助金と併用可能なケースもあります（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／再エネ調達と連携",
    detail:
      "自家消費型太陽光・蓄電池の導入補助。BEMS/FEMSは太陽光・蓄電池の自家消費最適化（充放電制御・デマンド制御）の頭脳として機能するため、再エネ導入とエネルギー管理を一体で計画すると効果が高まります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "中小企業向け補助（ものづくり等）",
    role: "中小企業庁／生産性向上と一体",
    detail:
      "中小製造業は、ものづくり補助金等で生産設備の更新とFEMS・見える化システムの導入を一体で行える場合があります。生産性向上（省力化）と省エネを一体訴求すると採択上有利です（出典: 中小企業庁／2025年度時点）。",
  },
  {
    name: "省エネ診断・エネルギー管理支援",
    role: "経産省・自治体／導入前の現状把握",
    detail:
      "省エネ診断はBEMS/FEMS導入前の現状把握・省エネ余地の特定に有効。診断結果はBEMS/FEMS・設備更新の補助金申請の根拠資料として活用でき、診断→管理システム→設備更新という投資ロードマップを描けます（出典: 経産省・各自治体から整理／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "補助率の水準（BEMS/FEMS代表構成）",
    detail:
      "SII省エネ補助は中小1/2・大企業1/3が基本。例えば空調・照明更新＋BEMS導入で総額3,000万円の場合、中小は1/2の1,500万円が補助され実質負担1,500万円。BEMSで運用改善を含め電力▲10〜15%なら、補助後の投資回収は3〜5年が目安です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    label: "上限額と申請枠の選択",
    detail:
      "SII省エネ補助は事業類型により上限が異なり、大規模工場のFEMS＋大型設備更新は先進事業（上限15億円）、単体的な設備導入は指定設備導入事業等。BEMS/FEMS単体を狙う場合は自治体補助の方が対象になりやすいケースがあり、投資規模と対象範囲に応じた枠の選択が前提です。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "採択率は補助金・公募回により変動し、各事務局が公募回ごとに採択結果を公表しています。BEMS/FEMSは計測で省エネ効果を客観的に示しやすく費用対効果が評価されやすい傾向。ただし採択率は固定値ではないため、最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果（省エネ量あたり補助額）の重要性",
    detail:
      "SII省エネ補助は補助額あたりの省エネ量で採択評価。BEMS/FEMS単体は省エネ絶対量が小さいため、効果の大きい空調・照明・生産設備の更新と一体で申請し、管理システムが運用改善で効果を底上げするストーリーにすると費用対効果が高く評価されます。",
  },
];

const caseStudies = [
  {
    title: "事例1: 大規模オフィスビルのBEMS全面導入（高圧1,500kW）",
    before:
      "Before: 個別空調・館内照明を手動管理。電力使用の見える化なし。年間電気代約3億円。テナント別の省エネ管理が課題だった。",
    after:
      "After: SII省エネ補助で高効率空調＋全館LED＋BEMS（中央監視・デマンド制御・見える化）を一体導入。自治体補助でテナント別計測を上乗せ。BEMSで運用改善（過冷却・過暖房の是正）を継続実施。",
    result:
      "Result: 年間電気代 ▲約15%（▲4,500万円）／デマンド契約電力▲8%／実績報告も計測データで効率化／補助後の投資回収 約4年（目安）。",
  },
  {
    title: "事例2: 中規模工場のFEMS＋生産設備更新（高圧1,000kW）",
    before:
      "Before: 生産ライン別の電力使用が不明。コンプレッサ・ボイラの運転が非効率。年間電気代約2億円。生産量あたり原単位が悪化していた。",
    after:
      "After: SII省エネ補助（1/2）でコンプレッサ更新＋FEMS（ライン別計測・原単位管理）を一体導入（投資2,400万円のうち補助1,200万円）。FEMSで待機電力・段取り時間のロスを可視化し運用改善。",
    result:
      "Result: 実質投資負担 約1,200万円／生産量あたり原単位 ▲約12%／年間電気代 ▲約13%（▲2,600万円）／補助後の投資回収 約3年（目安）。",
  },
  {
    title: "事例3: 商業施設のBEMS＋見える化（高圧800kW）",
    before:
      "Before: 売場・空調・冷凍冷蔵の電力が混在し用途別が不明。年間電気代約1.5億円。テナント・本部で省エネ意識に差があった。",
    after:
      "After: 自治体補助でBEMS・見える化ダッシュボードを単体導入し、SII補助で空調・LED更新を別途実施。用途別の見える化でテナント協働の省エネ運用を開始。",
    result:
      "Result: 見える化による運用改善で電気代 ▲約8%／設備更新と合わせ ▲約18%／省エネ意識の定着で効果が継続／投資回収 補助後3〜4年（目安）。",
  },
];

const cautionItems = [
  {
    label: "公募期間・交付決定前の発注は対象外",
    detail:
      "補助金は原則『交付決定後』に発注・契約した設備が対象。BEMS/FEMSは計測点設計・通信工事を含むため、システム設計と公募スケジュールのタイミング管理が重要です。",
  },
  {
    label: "同一設備への国補助の重複は不可",
    detail:
      "同一の設備・経費に複数の国庫補助を重複して受けることは原則不可。BEMS/FEMSを自治体補助、設備更新をSII省エネ補助、と対象を分けることで併用可能なケースがあるため、事前確認が必須です。",
  },
  {
    label: "計測点設計が効果と報告を左右する",
    detail:
      "BEMS/FEMSは計測点（どこを・どの粒度で測るか）の設計が省エネ効果と実績報告の精度を決めます。空調・照明・生産設備の用途別に適切な計測点を設計しないと、見える化しても改善に結びつきません。",
  },
  {
    label: "管理システム単体は省エネ量が小さい",
    detail:
      "BEMS/FEMS単体は省エネ絶対量が小さいため、SII省エネ補助では空調・照明・生産設備の更新と一体で申請するのが基本。管理システムが運用改善で効果を底上げするストーリーが採択上有効です。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回で変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で戦略を立てることが重要です。",
  },
];

const targetEquipment = [
  {
    label: "計測システム（電力・ガス・熱の計量）",
    detail:
      "受変電・分電盤・主要設備への電力量計・CTセンサー、ガス・熱量計など。用途別・系統別に使用量を計量する基盤で、BEMS/FEMSの起点。SII省エネ補助・自治体補助の対象となる計測機器です。",
  },
  {
    label: "見える化システム（ダッシュボード・分析）",
    detail:
      "計測データを集約し、使用量・原単位・デマンドをダッシュボードで見える化する分析システム。テナント別・ライン別の比較や異常検知で省エネ余地を特定。運用改善のPDCAを回す中核機能です。",
  },
  {
    label: "制御システム（デマンド・空調・照明制御）",
    detail:
      "デマンド制御（契約電力超過の抑制）、空調の温度・運転スケジュール制御、照明の調光・スケジュール制御など。過冷却・過暖房・消し忘れを自動で是正し、運用ロスを削減する制御機能です。",
  },
  {
    label: "BEMS（ビル向け中央監視・統合制御）",
    detail:
      "オフィス・商業・病院など建物向けの中央監視装置と統合制御。空調・照明・受変電・エレベータ等を一元管理。テナントビルではテナント別計測と組合せると省エネ運用を協働で進められます。",
  },
  {
    label: "FEMS（工場向け生産設備・ユーティリティ管理）",
    detail:
      "工場の生産設備・コンプレッサ・ボイラ・冷凍機を含めて管理し、生産量あたり原単位を改善。待機電力・段取りロスの可視化、ピークシフト、再エネ自家消費の最適化など、工場固有の省エネに対応します。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 電力使用・省エネ余地の把握",
    detail:
      "まず空調・照明・生産設備の電力使用状況を把握。省エネ診断を活用すると、用途別の省エネ余地が定量化でき、BEMS/FEMSの計測点設計と申請の根拠が整います。",
  },
  {
    label: "STEP2: 補助金の選定・枠の決定",
    detail:
      "BEMS/FEMS単体なら自治体補助、設備更新と一体ならSII省エネ補助、を軸に選定し併用可否を確認。建物用途（ビル/工場/商業/倉庫）に応じてBEMS・FEMSの構成を決めます。",
  },
  {
    label: "STEP3: 事業計画書の作成",
    detail:
      "計測・見える化・制御で得られる運用改善効果と、設備更新の省エネ量を定量で記述。BEMS/FEMSが効果を底上げ・継続管理する役割を明確にすると説得力が高まります。",
  },
  {
    label: "STEP4: 公募申請・交付決定",
    detail:
      "公募期間内に申請。交付決定後に計測機器・システムを発注（決定前発注は対象外）。計測点設計・通信工事を含むため調達計画に注意します。",
  },
  {
    label: "STEP5: 設備導入・実績報告",
    detail:
      "システム導入後、省エネ効果の実績報告を提出。BEMS/FEMSの計測データで効果を客観的に示せるため報告がスムーズで、導入後の継続的な省エネ管理にも役立ちます。",
  },
];

const energySaving = [
  {
    label: "見える化→運用改善→設備更新の順で進める",
    detail:
      "まずBEMS/FEMSで見える化し、運用改善（過冷却是正・消し忘れ防止）で初期効果を得てから、効果の大きい空調・生産設備の更新へ進むと投資効率が高い。見える化が後続の設備更新補助の採択根拠にもなります。",
  },
  {
    label: "設備更新と一体で費用対効果を高める（採択戦略）",
    detail:
      "BEMS/FEMS単体は省エネ量が小さいため、SII省エネ補助では効果の大きい空調・照明・コンプレッサ等の更新と一体で申請。管理システムが運用改善で効果を底上げするストーリーで費用対効果を高めます。",
  },
  {
    label: "国補助＋自治体補助＋税制の重層活用",
    detail:
      "BEMS/FEMSを自治体補助、設備更新をSII省エネ補助、関連設備をGX税制、と切り分けて重層活用すると実質負担を圧縮できます。併用可否の見極めが上級テクニックです。",
  },
  {
    label: "再エネ自家消費の最適化と組合せ",
    detail:
      "BEMS/FEMSは太陽光・蓄電池の自家消費最適化（充放電制御・デマンド制御）の頭脳として機能。省エネ設備＋再エネ＋管理システムを組合せると電気代削減とCN対応を同時実現できます。",
  },
  {
    label: "複数拠点・複数年での段階展開",
    detail:
      "複数拠点を持つ事業者は、効果の高い拠点・設備から複数年計画で段階的にBEMS/FEMSと設備更新を展開。標準化した計測点設計を横展開すると効率的に省エネを進められます。",
  },
];

const checklistItems = [
  "空調・照明・生産設備の電力使用状況を用途別に把握しているか",
  "BEMS（ビル）かFEMS（工場）か、建物用途に応じて選定したか",
  "計測点（どこを・どの粒度で測るか）の設計を検討したか",
  "BEMS/FEMS単体か設備更新と一体かで補助金・枠を選定したか",
  "見える化→運用改善→設備更新の投資ロードマップを描いたか",
  "省エネ診断で省エネ余地を定量化し申請根拠を整えたか",
  "国補助・自治体補助・GX税制の重層活用の可否を確認したか",
  "デマンド制御・空調制御の運用改善効果を試算したか",
  "実績報告のための計測データ取得体制を準備しているか",
  "交付決定後に発注するスケジュール管理ができているか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "補助後の投資回収年数を試算したか",
];

const faqItems = [
  {
    question: "BEMSとFEMSはどう違い、どちらを選べばよいですか？",
    answer:
      "BEMS（ビル）はオフィス・商業・病院など建物のエネルギーを管理し、空調・照明・受変電が主対象です。FEMS（工場）は生産設備・コンプレッサ・ボイラ・冷凍機を含めて管理し、生産量あたりの原単位改善が主眼です。建物用途の比率が高い施設はBEMS、生産設備の比率が高い工場はFEMSを軸に選びます。商業施設は売場・空調・冷凍冷蔵が混在するためBEMSを基本に用途別計測を充実させると効果的です（出典: SII公式・経産省から整理／2025年度時点）。",
  },
  {
    question: "BEMS/FEMSはどの補助金の対象になりますか？",
    answer:
      "SII省エネ補助金（工場・事業場型）では、空調・照明・生産設備の更新と一体で計測・制御・見える化システムが補助対象に含まれます。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。BEMS/FEMS単体を狙う場合は、計測・見える化システムを単体で対象にする自治体補助の方が活用しやすいケースがあります。GX・CN投資促進税制との併用可能なケースもあります（出典: SII公式・各自治体／2025年度時点）。",
  },
  {
    question: "BEMS/FEMS単体だけで補助金は採択されますか？",
    answer:
      "SII省エネ補助は補助額あたりの省エネ量で評価するため、管理システム単体は省エネ絶対量が小さく採択上不利になりがちです。効果の大きい空調・照明・生産設備の更新と一体で申請し、BEMS/FEMSが運用改善で効果を底上げ・継続管理するストーリーにするのが採択戦略です。一方、自治体補助では見える化システム単体でも対象になるケースがあるため、規模に応じて使い分けます（出典: SII公式・各自治体／2025年度時点）。",
  },
  {
    question: "見える化だけでどのくらい電気代が下がりますか？",
    answer:
      "見える化による運用改善（過冷却・過暖房の是正、消し忘れ防止、デマンド制御）だけで電力▲5〜15%程度の削減が見込めるケースがあります。設備を更新せず運用改善のみで初期効果を得てから、効果の大きい空調・生産設備の更新へ進むと投資効率が高くなります。ただし効果は施設の運用状況に依存するため、まず計測・見える化で自社の余地を定量化することが重要です（個別案件で変動）。",
  },
  {
    question: "計測点の設計はなぜ重要なのですか？",
    answer:
      "BEMS/FEMSは計測点（どこを・どの粒度で測るか）の設計が省エネ効果と実績報告の精度を決めます。受変電・分電盤・主要設備を用途別・系統別に適切に計量しないと、見える化しても改善に結びつきません。空調・照明・生産ライン別など、改善したい対象に合わせて計測点を設計することが、投資効果を出すための前提になります。省エネ診断を併用すると計測点設計が精緻になります。",
  },
  {
    question: "BEMS/FEMSは省エネ補助の実績報告に役立ちますか？",
    answer:
      "役立ちます。省エネ補助金は交付後に省エネ効果の実績報告が必要で、BEMS/FEMSがあれば計測データで効果を客観的に示せるため報告がスムーズです。補助金の費用対効果評価（補助額あたりの省エネ量）の根拠としても有効で、導入後の継続的な省エネ管理（PDCA）にも活用できます。実績報告を見据えて計測体制を整えておくことが、複数年の補助金活用にもつながります（出典: SII公式／2025年度時点）。",
  },
  {
    question: "BEMS/FEMSと太陽光・蓄電池は組合せられますか？",
    answer:
      "組合せられます。BEMS/FEMSは太陽光・蓄電池の自家消費最適化（充放電制御・デマンド制御）の頭脳として機能します。省エネ設備（電気を減らす）＋再エネ（電気を脱炭素化）＋管理システム（最適に制御する）を一体で計画すると、電気代削減とCN対応を同時実現できます。需要家主導型再エネ補助とSII省エネ補助を対象設備で切り分けて併用できるケースもあるため事前確認が有効です（出典: 経産省・環境省・SII公式／2025年度時点）。",
  },
  {
    question: "交付決定前にBEMS/FEMSを発注するとどうなりますか？",
    answer:
      "原則として補助対象外になります。補助金は『交付決定後』に発注・契約した設備が対象です。BEMS/FEMSは計測点設計・通信工事・システム構築を含むためリードタイムが長く、システム設計と公募スケジュールのタイミング管理が特に重要です。発注を急ぐ場合は所管窓口に対象範囲を必ず確認してください。設備更新と一体で申請する場合は、設備の調達計画も合わせて管理します。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省 資源エネルギー庁 省エネ施策", url: "https://www.meti.go.jp/" },
  { name: "環境省 脱炭素・省エネ設備補助", url: "https://www.env.go.jp/" },
  { name: "中小企業庁 ものづくり補助金", url: "https://www.chusho.meti.go.jp/" },
];

export default function SubsidyBemmsFemsPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-bemms-fems"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "BEMS/FEMS導入補助の活用ガイド", url: "https://simulator.eic-jp.org/subsidy-bemms-fems" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">BEMS/FEMS導入補助の活用ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            BEMS/FEMS導入補助の活用ガイド 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            BEMS（ビル）/FEMS（工場）はエネルギー使用を計測・見える化・制御して省エネを実現するシステムです。本ページでは計測・制御・見える化システムの補助対象、ビル・工場・商業・倉庫の用途別の選び方、SII省エネ補助・自治体補助の補助率・要件、省エネ効果の実績報告への活用、投資回収までを、事例・採択戦略・併用ルール・申請フローで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>BEMS/FEMSの違いと建物用途別の選び方</li>
              <li>計測・制御・見える化システムの補助対象範囲</li>
              <li>用途別の補助前後Before/After投資回収事例3件</li>
              <li>見える化→運用改善→設備更新の採択戦略</li>
              <li>BEMS/FEMS導入向け補助金活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページはBEMS/FEMS（エネルギー管理システム）に特化した深掘りガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">BEMS/FEMS導入補助の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BEMS/FEMSの導入にはSII省エネ補助・自治体補助・GX税制・需要家主導型再エネ補助が活用できます。見える化を起点に運用改善し、効果の大きい設備更新と一体で訴求することで採択率と費用対効果を最大化できます。
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
              用途別の電力プロファイルは{" "}
              <Link href="/assembly-factory-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">組立工場の電気料金見直し</Link>
              、{" "}
              <Link href="/warehouse-electricity-cost-review" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">倉庫業の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">主要補助金・税制の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BEMS/FEMS導入に活用できる主要な補助金・税制を、役割・補助率・対象範囲別に整理します。投資内容に応じて最適な制度を選定し、併用・重ね取りを検討します。
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
              ※ 補助率・上限・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果を必ず確認してください。出典: SII公式・経産省・各自治体から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">用途別事例3件 — 補助前後の投資回収（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BEMS/FEMSの代表的な3用途で、補助金活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
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
            <h2 className="text-xl font-semibold text-slate-900">BEMS/FEMSの補助対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で導入しやすいBEMS/FEMS関連の設備を整理します。計測→見える化→制御の順に整え、建物用途に応じてBEMS・FEMSを選定するのが基本です。
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
              ヒートポンプ更新は{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              、太陽光・蓄電池は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">申請実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力使用把握から実績報告まで、補助金申請の標準的な流れを整理します。計測点設計・通信工事のリードタイムと交付決定前発注の禁止に特に注意が必要です。
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
              補助金活用で失敗しないための留意点を整理します。発注タイミング・併用ルール・計測点設計・設備更新との一体訴求が成否を左右します。
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
            <h2 className="text-xl font-semibold text-slate-900">BEMS/FEMSの省エネ投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              見える化→運用改善→設備更新の順での投資、設備更新と一体の費用対効果向上、国×自治体×税制の重層活用、再エネ自家消費との組合せ、複数拠点での段階展開が採択戦略の柱です。
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
              、製造業向け戦略は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">BEMS/FEMS導入向け補助金活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、採択率や費用対効果が下がります。
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
              中小企業の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで補助金活用後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              BEMS/FEMSと設備更新を組合せた場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。見える化による運用改善と設備更新の効果を定量化し、申請する補助金の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>見える化・運用改善による年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋省エネ＋再エネ自家消費の複合効果を見立てる</li>
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
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "空調・給湯・産業用HPの補助金。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "診断→管理システムの起点づくり。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "税額控除・特別償却の要件と対象設備。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助金", description: "再エネ自家消費とエネルギー管理の連携。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述例。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助前後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "工場のFEMS・設備更新の補助金活用。" },
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小の見える化・設備更新の進め方。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場の電気料金ベンチマーク", description: "原単位管理・FEMS活用の前提知識。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="BEMS/FEMS導入と電気代削減を専門家に相談する"
            description="計測・見える化・制御システムの設計、設備更新との一体申請、補助金・税制の組合せは、計測点設計や採択戦略が複雑です。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="BEMS/FEMS導入、専門家に相談しませんか？"
            description="計測点の設計、見える化・制御システムの選定、補助金・税制の組合せ、採択される事業計画書の作成は専門知識を要します。エネルギー情報センターは中立的立場でエネルギー管理システム導入・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
