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
  "省エネ診断補助 完全ガイド｜無料診断から補助金獲得までの実務ロードマップと採択戦略";
const pageDescription =
  "省エネ診断補助に特化した法人向けロードマップ。省エネ診断（無料診断含む・省エネルギーセンター等）から現状把握・改善提案・補助金申請・設備導入・効果検証までの実務フロー、診断結果の補助金申請への活用法、SII補助の費用対効果評価との連動、診断補助制度の対象・補助率を、数値捏造なしで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "省エネ診断 補助",
    "無料省エネ診断 省エネルギーセンター",
    "省エネ診断 補助金 申請",
    "SII 費用対効果 省エネ",
    "省エネ ロードマップ 法人",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-energy-saving-diagnosis",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-energy-saving-diagnosis",
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
    label: "省エネ診断と補助金の全体像",
    detail:
      "省エネ診断は、専門家が事業所のエネルギー使用状況を調査し、省エネ余地・改善提案・投資効果を定量化するサービスです。省エネルギーセンター（ECCJ）等が無料・低額の診断を提供しており、診断結果は補助金（SII省エネ補助等）の申請根拠として活用できます。『診断で省エネ余地を見える化→補助金で設備更新→効果検証』という流れが、補助金獲得と電気代削減の王道ロードマップです（出典: 経産省・省エネルギーセンター・SII公式から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは省エネ診断補助（無料診断から補助金獲得までの実務フロー）に特化した深掘りガイドです。補助金制度全体の概要は別途整理しています。本ページでは省エネ診断の種類、診断結果の補助金申請への活用法、SII補助の費用対効果評価との連動、診断補助制度の対象・補助率に焦点を当てます。",
  },
  {
    label: "なぜ診断が補助金獲得に効くのか",
    detail:
      "SII省エネ補助は『補助額あたりの省エネ量（費用対効果）』で採択評価されます。省エネ診断で現状のエネルギー使用と改善後の削減量を定量化しておくと、申請書に説得力のある省エネ効果を記載でき、採択率の向上につながります。診断は申請の根拠データを整える起点になります。",
  },
  {
    label: "無料診断の活用が第一歩",
    detail:
      "省エネルギーセンターの省エネ最適化診断等は、中小事業者向けに無料・低額で提供されています。費用負担なく省エネ余地を把握できるため、まず無料診断を受けて自社の改善ポイントを見える化し、その結果をもとに補助金の対象設備・優先順位を決めるのが効率的な進め方です（出典: 省エネルギーセンター／2025年度時点）。",
  },
  {
    label: "診断→投資→検証のPDCAで継続改善",
    detail:
      "省エネは一度の設備更新で終わりません。診断で現状把握→補助金で設備導入→効果検証→次の診断、というPDCAを回すことで、電気代削減を継続的に積み上げられます。効果検証のデータは次回の補助申請の根拠にもなり、計画的な省エネ投資のサイクルが構築できます。",
  },
];

const mainSubsidies = [
  {
    name: "省エネ最適化診断（省エネルギーセンター）",
    role: "経産省・ECCJ／無料・低額の現状把握",
    detail:
      "省エネルギーセンター（ECCJ）が提供する診断で、中小事業者向けに無料・低額で実施されます。専門家が現地調査し、エネルギー使用状況・省エネ余地・改善提案・投資効果を報告。補助金申請の根拠データとして活用でき、まず最初に受けるべき診断です（出典: 省エネルギーセンター／2025年度時点）。",
  },
  {
    name: "省エネ診断・コンサルへの補助制度",
    role: "経産省・自治体／診断費用の補助",
    detail:
      "診断・コンサルティング費用の一部を補助する制度が、国・自治体で用意されている場合があります。詳細な精密診断や設備設計を伴う場合の費用負担を軽減でき、本格的な省エネ計画づくりを後押しします（出典: 経産省・各自治体から整理／2025年度時点・制度の有無は要確認）。",
  },
  {
    name: "SII省エネ補助金（設備導入の主力）",
    role: "経産省・SII／診断結果を活かす補助",
    detail:
      "診断で見える化した省エネ設備（高効率空調・冷凍機・LED・コンプレッサー等）の更新を支援。補助率は中小1/2・大企業1/3、上限15億円（先進事業）。補助額あたりの省エネ量で採択評価されるため、診断データが申請の説得力を高めます（出典: SII公式／2025年度時点）。",
  },
  {
    name: "中小企業向け省エネ補助・支援",
    role: "中小企業庁・自治体／中小の選択肢",
    detail:
      "中小事業者向けには、SII補助に加えて自治体の省エネ設備補助・伴走支援が用意されています。無料診断→自治体補助→国補助、と段階的に活用すると費用負担を抑えて省エネ投資を進められます（出典: 中小企業庁・各自治体から整理／2025年度時点）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助",
    role: "経産省・環境省／省エネの次の一手",
    detail:
      "省エネ（電気を減らす）で需要を下げた後、太陽光・PPAで電気を脱炭素化する投資を支援。診断で省エネ余地を出し切ってから再エネ投資を検討すると、必要な再エネ量を抑えられ費用対効果が高まります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "GX・CN投資促進税制",
    role: "経産省・国税庁／税効果で実質負担を圧縮",
    detail:
      "診断で特定した高効率設備・自家発電・再エネ設備は、GX・CN投資促進税制（投資額10%税額控除または50%特別償却）の対象になり得ます。補助金と取得価額調整のうえ組合せると実質負担を圧縮できます（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
];

const subsidyRates = [
  {
    label: "診断の費用水準（無料診断の活用）",
    detail:
      "省エネルギーセンターの省エネ最適化診断は中小事業者向けに無料・低額で提供されています。まず費用負担なく現状を把握できるのが大きなメリット。精密診断や設計を伴う場合は別途費用がかかることがありますが、診断費用への補助制度を活用できる場合もあります（出典: 省エネルギーセンター・経産省／2025年度時点・個別に確認）。",
  },
  {
    label: "設備補助の補助率（SII等）",
    detail:
      "診断で特定した省エネ設備の更新は、SII省エネ補助で中小1/2・大企業1/3、上限15億円（先進事業）が基本です。例えば高効率空調の更新2,000万円なら中小は1,000万円が補助され実質負担1,000万円。省エネ▲20〜30%で年間削減額が大きければ補助後の投資回収は数年が目安です（出典: SII公式／2025年度時点・個別案件で変動）。",
  },
  {
    label: "採択率の実情（公表値ベース）",
    detail:
      "採択率は補助金・公募回により変動し、各事務局が公募回ごとに採択結果を公表しています。診断で費用対効果（補助額あたりの省エネ量）を高く示せる案件は採択されやすい傾向ですが、採択率は固定値ではないため、推測せず最新の事務局公表値を確認のうえ申請戦略を立てることが重要です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "費用対効果評価と診断データの連動",
    detail:
      "SII省エネ補助は補助額あたりの省エネ量で採択評価されます。診断で現状エネルギー使用・改善後の削減量・投資額を定量化しておくと、費用対効果を明確に示せて採択上有利です。効果の大きい設備から優先する診断の知見が、そのまま採択戦略になります。",
  },
];

const caseStudies = [
  {
    title: "事例1: 中小製造業（無料診断→SII補助で設備更新）",
    before:
      "Before: 中小製造業で老朽空調・コンプレッサー・蛍光灯のまま。省エネ余地は感じていたが、どこから手をつけるか・補助金の申請根拠がなく動けなかった。",
    after:
      "After: 省エネルギーセンターの無料診断で省エネ余地を見える化／効果の大きいコンプレッサー・空調・LEDから優先順位を決定／診断データを根拠にSII省エネ補助（中小1/2）を申請し採択。",
    result:
      "Result: 無料診断で投資判断の根拠を獲得／補助1/2で実質負担を半減／省エネで電気代▲20%前後（目安）／効果検証データを次の申請に活用（数値は目安）。",
  },
  {
    title: "事例2: 中堅事業所（精密診断→補助＋税制の併用）",
    before:
      "Before: 中堅事業所で電気代上昇が課題。複数設備の更新を検討していたが、投資の優先順位と費用対効果が定量化できていなかった。",
    after:
      "After: 精密な省エネ診断で各設備の削減量・投資効果を定量化／費用対効果の高い設備からSII補助で更新／高効率設備にGX税制（取得価額調整）を併用し実質負担を圧縮。",
    result:
      "Result: 診断で投資優先順位を最適化／補助＋税制で実質負担を圧縮／費用対効果の高い設備から着手し採択率も確保（数値は目安・税理士確認前提）。",
  },
  {
    title: "事例3: 小規模事業者（診断→自治体補助→段階的更新）",
    before:
      "Before: 小規模事業者で大型投資は難しい。電気代削減はしたいが、まとまった資金を一度に投じる余裕がない。",
    after:
      "After: 無料診断で改善ポイントを把握／投資回収の早いLED・高効率機器から自治体補助で着手／効果検証しながら複数年で段階的に設備を更新するロードマップを策定。",
    result:
      "Result: 無料診断で着手のハードルを下げ／自治体補助で初期負担を軽減／段階的更新でキャッシュフロー負担を平準化しながら電気代を継続削減（数値は目安）。",
  },
];

const cautionItems = [
  {
    label: "診断は受けるだけでなく『活かす』",
    detail:
      "省エネ診断を受けても、報告書を活かさなければ意味がありません。診断結果（省エネ余地・削減量・投資効果）を補助金申請書の根拠データに転記し、設備更新の優先順位づけに使うことで、初めて補助金獲得と電気代削減につながります。",
  },
  {
    label: "交付決定前の発注は補助対象外",
    detail:
      "診断後に設備を更新する場合も、補助金は原則『交付決定後』に発注・契約した設備が対象です。診断で投資を急ぎたくなっても、補助金を使うなら交付決定前の発注は避け、公募スケジュールと調達タイミングを管理します。",
  },
  {
    label: "費用対効果の高い設備から優先",
    detail:
      "診断で複数の改善提案が出ても、補助金は費用対効果（補助額あたりの省エネ量）で評価されます。投資回収が早く省エネ量の大きい設備から優先して申請するのが採択戦略。診断の優先順位をそのまま申請戦略に反映します。",
  },
  {
    label: "効果検証（実績報告）の体制を準備",
    detail:
      "SII省エネ補助は交付後に省エネ効果の実績報告が必要です。電力計測・BEMS等で導入前後のエネルギー使用を計測できる体制を整えておくと、報告がスムーズで、次の診断・申請の根拠データにもなります。",
  },
  {
    label: "採択率は公募回で変動・推測しない",
    detail:
      "採択率は予算・申請件数・公募回で変動します。過去の採択結果（事務局公表値）を参考にしつつ、推測値で判断せず最新情報で申請戦略を立てることが重要です。診断データで費用対効果を高く示すことが採択への近道です。",
  },
];

const targetEquipment = [
  {
    label: "高効率空調・冷凍機",
    detail:
      "診断で省エネ余地が大きいことの多い空調・冷凍機。老朽機から高効率インバータ機への更新で電力▲20〜30%が見込める設備で、SII省エネ補助の王道。診断で削減量を定量化して申請の根拠とします。",
  },
  {
    label: "コンプレッサー・産業用機器",
    detail:
      "製造業で電力を多く使うコンプレッサー・ポンプ・産業用モーター。インバータ化・高効率機更新・エア漏れ対策で大きな省エネが可能。診断で稼働状況・無駄を特定し、効果の大きい設備から更新します。",
  },
  {
    label: "LED照明・照明制御",
    detail:
      "投資回収が早く着手しやすいLED化・照明制御。診断で照明電力の比率・更新効果を把握し、自治体補助との併用もしやすい設備。段階的更新の起点として有効です。",
  },
  {
    label: "BEMS/FEMS・エネルギー計測",
    detail:
      "エネルギー使用の見える化・自動最適化を行うBEMS/FEMS。診断で計測の必要性を確認し導入すると、効果検証（実績報告）がスムーズになり、継続的な省エネ管理にも役立ちます。補助対象になり得ます。",
  },
  {
    label: "高効率変圧器・受変電・再エネ設備",
    detail:
      "高効率変圧器への更新やデマンド制御、診断後の次の一手としての自家消費太陽光・蓄電池。省エネで需要を下げてから再エネを検討すると費用対効果が高まります。GX税制・需要家主導型補助の対象になり得ます。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 省エネ診断で現状把握",
    detail:
      "まず省エネルギーセンターの無料診断等を受け、エネルギー使用状況・省エネ余地・改善提案・投資効果を見える化します。費用負担なく現状を把握できるのが起点で、補助金申請の根拠データが整います。",
  },
  {
    label: "STEP2: 改善提案の精査・優先順位づけ",
    detail:
      "診断で出た改善提案を、費用対効果（補助額あたりの省エネ量）・投資回収年数で精査し、優先順位をつけます。効果の大きい設備から着手するのが採択・削減の両面で有利です。",
  },
  {
    label: "STEP3: 補助金の選定・申請",
    detail:
      "優先設備に応じてSII省エネ補助・自治体補助・GX税制を選定し、診断データを根拠に費用対効果を示した申請書を作成します。補助・税制の併用可否も確認します。",
  },
  {
    label: "STEP4: 交付決定・設備導入",
    detail:
      "交付決定後に設備を発注・導入します（決定前発注は対象外）。診断で出た優先順位に沿って計画的に更新し、必要なら複数年で段階的に進めます。",
  },
  {
    label: "STEP5: 効果検証・次の診断へ",
    detail:
      "導入後、電力計測・BEMS等で省エネ効果を検証し実績報告を提出します。検証データは次の診断・申請の根拠になり、診断→投資→検証のPDCAで継続的に電気代を削減します。",
  },
];

const energySaving = [
  {
    label: "まず無料診断で現状を見える化",
    detail:
      "省エネルギーセンターの無料診断で、費用負担なく省エネ余地を把握するのが第一歩。診断データが補助金申請の根拠になり、どの設備から手をつけるべきかの優先順位も明確になります。",
  },
  {
    label: "費用対効果の高い設備から申請",
    detail:
      "診断で出た改善提案のうち、補助額あたりの省エネ量が大きく投資回収の早い設備から優先して申請します。費用対効果で評価されるSII補助では、診断の優先順位がそのまま採択戦略になります。",
  },
  {
    label: "省エネ→再エネの順で投資する",
    detail:
      "高効率設備で電気を減らしてから太陽光・PPAで脱炭素化すると、必要な再エネ量を抑えられ費用対効果が高まります。診断で省エネ余地を出し切ってから再エネ投資を検討するのが効率的です。",
  },
  {
    label: "補助＋自治体＋税制の重層活用",
    detail:
      "無料診断→自治体補助→SII補助→GX税制、と制度を重ねると実質負担を最大限圧縮できます。診断データを共通の根拠として複数制度に活用し、二重取りにならないよう取得価額調整を行います。",
  },
  {
    label: "効果検証データでPDCAを回す",
    detail:
      "導入後の効果検証データは、実績報告に使えるだけでなく次の診断・申請の根拠になります。診断→投資→検証のPDCAを回し、複数年で電気代削減を継続的に積み上げるのが上級活用です。",
  },
];

const checklistItems = [
  "省エネルギーセンター等の無料・低額診断の利用を検討したか",
  "エネルギー使用状況（用途別・設備別）を把握したか",
  "診断で省エネ余地・削減量・投資効果を定量化したか",
  "改善提案を費用対効果・投資回収年数で優先順位づけしたか",
  "効果の大きい設備（空調・冷凍機・コンプレッサー等）から検討しているか",
  "診断データを補助金申請書の根拠に活用したか",
  "投資内容に応じた補助金（SII／自治体／GX税制）を選定したか",
  "補助・自治体補助・税制の併用可否を確認したか",
  "交付決定後に発注するスケジュール管理ができているか",
  "効果検証（実績報告）のための計測体制（BEMS等）を準備したか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
  "診断→投資→検証のPDCAで継続改善する計画を持っているか",
];

const faqItems = [
  {
    question: "省エネ診断とは何ですか？無料で受けられますか？",
    answer:
      "省エネ診断は、専門家が事業所のエネルギー使用状況を調査し、省エネ余地・改善提案・投資効果を定量化するサービスです。省エネルギーセンター（ECCJ）が提供する省エネ最適化診断等は、中小事業者向けに無料・低額で実施されています。費用負担なく現状を把握できるため、まず無料診断を受けて改善ポイントを見える化するのが効率的です。診断結果は補助金申請の根拠データとして活用できます。総論は補助金カテゴリの概要記事も参照してください（出典: 省エネルギーセンター・経産省／2025年度時点）。",
  },
  {
    question: "なぜ省エネ診断が補助金獲得に効くのですか？",
    answer:
      "SII省エネ補助は『補助額あたりの省エネ量（費用対効果）』で採択評価されるためです。省エネ診断で現状のエネルギー使用と改善後の削減量・投資額を定量化しておくと、申請書に説得力のある省エネ効果を記載でき、採択率の向上につながります。診断は補助金申請の根拠データを整える起点であり、効果の大きい設備から優先する診断の知見が、そのまま採択戦略になります（出典: SII公式・省エネルギーセンター／2025年度時点）。",
  },
  {
    question: "診断から補助金獲得までの流れを教えてください。",
    answer:
      "①省エネ診断で現状把握（無料診断の活用）→②改善提案を費用対効果・投資回収で精査し優先順位づけ→③優先設備に応じてSII補助・自治体補助・GX税制を選定し、診断データを根拠に申請→④交付決定後に設備導入（決定前発注は対象外）→⑤効果検証・実績報告、という流れです。検証データは次の診断・申請の根拠になり、診断→投資→検証のPDCAで継続的に電気代を削減できます（出典: 経産省・SII公式／2025年度時点）。",
  },
  {
    question: "診断の結果はどのように補助金申請に活用しますか？",
    answer:
      "診断報告書の省エネ余地・改善後の削減量・投資効果のデータを、補助金申請書の費用対効果（補助額あたりの省エネ量）の根拠として転記・活用します。SII補助は費用対効果で採択評価されるため、診断で定量化したデータをそのまま申請の説得材料に使えます。また診断の優先順位（効果の大きい設備から）を申請戦略に反映すると、採択率と削減効果の両面で有利になります（出典: SII公式／2025年度時点）。",
  },
  {
    question: "省エネ診断の費用に補助はありますか？",
    answer:
      "省エネルギーセンターの省エネ最適化診断は中小事業者向けに無料・低額で提供されています。さらに精密診断や設備設計を伴う場合の費用を補助する制度が、国・自治体で用意されている場合があります。制度の有無・内容は地域・年度で異なるため、所管窓口・自治体に確認してください。まずは無料診断から始め、必要に応じて精密診断や費用補助を検討するのが現実的です（出典: 省エネルギーセンター・経産省・各自治体から整理／2025年度時点）。",
  },
  {
    question: "どの設備から省エネ投資すべきですか？",
    answer:
      "診断で費用対効果（補助額あたりの省エネ量）が高く投資回収の早い設備から優先します。一般に空調・冷凍機・コンプレッサー等は省エネ余地が大きく効果が出やすい設備です。LED照明は投資回収が早く着手しやすいため段階的更新の起点に向きます。診断で各設備の削減量・投資額を定量化し、効果の大きい設備から計画的に更新するのが採択・削減の両面で有利です（出典: 省エネルギーセンター・SII公式／2025年度時点）。",
  },
  {
    question: "省エネと再エネ（太陽光・PPA）はどちらを先にすべきですか？",
    answer:
      "原則として省エネ（電気を減らす）を先に行い、その後に再エネ（太陽光・PPAで脱炭素化）を検討するのが効率的です。診断で省エネ余地を出し切って需要を下げてから再エネを導入すると、必要な再エネ量を抑えられ費用対効果が高まります。省エネで需要を下げた後、需要家主導型再エネ補助・GX税制を活用して太陽光・PPAを導入する、という順序が合理的です（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    question: "効果検証（実績報告）はなぜ重要ですか？",
    answer:
      "SII省エネ補助は交付後に省エネ効果の実績報告が必要なため、効果検証は補助金活用の必須プロセスです。電力計測・BEMS等で導入前後のエネルギー使用を計測できる体制を整えておくと、報告がスムーズになります。さらに検証データは次の診断・補助申請の根拠データになり、診断→投資→検証のPDCAを回すことで継続的に電気代を削減できます。効果検証は補助の要件であると同時に、次の省エネ投資の出発点でもあります（出典: SII公式／2025年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "省エネルギーセンター（ECCJ）省エネ診断", url: "https://www.eccj.or.jp/" },
  { name: "経済産業省 省エネルギー政策", url: "https://www.meti.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "資源エネルギー庁 省エネ支援", url: "https://www.enecho.meti.go.jp/" },
];

export default function SubsidyEnergySavingDiagnosisPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-energy-saving-diagnosis"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "省エネ診断補助の活用ロードマップ", url: "https://simulator.eic-jp.org/subsidy-energy-saving-diagnosis" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">省エネ診断補助の活用ロードマップ</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            省エネ診断補助の活用ロードマップ
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            省エネ診断は、専門家が事業所のエネルギー使用を調査し省エネ余地・投資効果を定量化するサービスで、補助金申請の根拠データになります。本ページでは省エネ診断（無料診断含む・省エネルギーセンター等）から現状把握・改善提案・補助金申請・設備導入・効果検証までの実務フロー、診断結果の補助金申請への活用法、SII補助の費用対効果評価との連動、診断補助制度までを整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>省エネ診断（無料診断含む）の種類と活用の第一歩</li>
              <li>診断→現状把握→改善提案→補助金申請→導入→検証の実務フロー</li>
              <li>診断結果を補助金申請の根拠に活かす方法</li>
              <li>SII補助の費用対効果評価と診断データの連動</li>
              <li>診断補助制度の対象・補助率と活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは省エネ診断補助（無料診断から補助金獲得までの実務フロー）に特化した深掘りガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ診断と補助金の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断は省エネ余地・改善提案・投資効果を定量化するサービスで、省エネルギーセンター等が無料・低額で提供しています。診断データはSII省エネ補助等の費用対効果評価の根拠になり、『診断→補助金で設備更新→効果検証』のPDCAが電気代削減の王道ロードマップです。
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
              中小の省エネ補助パターンは{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              、補助より契約見直しが先かは{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ診断・補助制度の比較</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断と、診断結果を活かせる補助金・税制を、役割・特徴別に整理します。無料診断を起点に、設備補助・自治体補助・税制を段階的に組合せます。
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
            <h2 className="text-xl font-semibold text-slate-900">診断費用・補助率・採択率の水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              診断の費用水準（無料診断の活用）・設備補助の補助率・採択率と、費用対効果評価と診断データの連動を整理します。採択率は公募回で変動するため、最新の事務局公表値での確認が前提です。
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
              ※ 診断費用・補助率・採択率は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・採択結果・診断制度を必ず確認してください。出典: 省エネルギーセンター・SII公式・経産省から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別事例3件 — 診断活用のBefore/After</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              代表的な3規模で、省エネ診断を起点とした補助金獲得と電気代削減をBefore/After方式で提示します。いずれも公開情報・補助金実績から再構成した代表シナリオで、数値は目安レンジです。
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
            <h2 className="text-xl font-semibold text-slate-900">診断で特定される主な対象設備</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断で改善余地が特定されやすい代表的な設備を整理します。効果の大きい空調・冷凍機・コンプレッサーから優先するのが採択・削減の戦略です。
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
              BEMS/FEMSは{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              、ヒートポンプは{" "}
              <Link href="/subsidy-heat-pump-introduction" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">ヒートポンプ導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">診断から補助金獲得までの実務フロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断による現状把握から効果検証まで、補助金獲得の標準的なロードマップを整理します。診断データの活用・交付決定前発注の禁止・効果検証体制に特に注意が必要です。
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
              、SII省エネ補助の詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">診断・補助活用の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断・補助金活用で失敗しないための留意点を整理します。診断を活かすこと・発注タイミング・費用対効果の優先・効果検証体制が成否を左右します。
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
            <h2 className="text-xl font-semibold text-slate-900">省エネ診断を活かす投資・採択戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              無料診断で現状を見える化、費用対効果の高い設備から申請、省エネ→再エネの順序、補助＋自治体＋税制の重層活用、効果検証データでのPDCAが、診断を活かす採択戦略の柱です。
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
              次の一手のPPA・再エネは{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              、税効果は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">省エネ診断・補助活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              診断・補助申請前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、採択率や費用対効果が下がる可能性があります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の見直しは{" "}
              <Link href="/factory-electricity-cost-benchmark" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">工場の電気料金ベンチマーク</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで省エネ投資後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              省エネ診断で見える化した改善を設備更新した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助・税効果を加味した実質負担と投資回収を定量化し、診断で出た改善提案の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>高効率設備更新後の年間削減額を試算する</li>
              <li>補助＋税効果を加味した実質負担・投資回収年数を比較する</li>
              <li>契約見直し＋省エネ＋再エネの複合効果を見立てる</li>
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
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小向けの補助の進め方。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "エネルギー見える化・効果検証。" },
              { href: "/subsidy-heat-pump-introduction", title: "ヒートポンプ導入補助の活用ガイド", description: "高効率熱源への更新。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "診断データを活かす計画書。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "国×自治体×税制の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助・税効果込みの回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "投資前に契約見直しが先かを判断。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "高効率設備の税額控除・特別償却。" },
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "省エネの次の一手の再エネ調達。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場の電気料金ベンチマーク（共通）", description: "業種比較で省エネ余地を把握。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
            ]}
          />

          <ContentCta
            heading="省エネ診断の活用と電気代削減を専門家に相談する"
            description="省エネ診断の受診、診断結果を活かした補助金申請、SII補助の費用対効果評価、設備更新の優先順位づけは専門知識を要します。まずシミュレーターで削減余地を試算し、必要に応じて専門家へご相談ください。"
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
            heading="省エネ診断と補助金活用、専門家に相談しませんか？"
            description="省エネ診断の受診、診断データを活かした補助金申請書の作成、費用対効果の高い設備の選定は専門知識を要します。エネルギー情報センターは中立的立場で省エネ投資・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
