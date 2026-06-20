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
  "補助金事業計画書の書き方 完全ガイド｜採択される構成と記述例";
const pageDescription =
  "補助金の事業計画書の書き方に特化した実務ガイド。採択される計画書の構成（現状課題→投資内容→定量効果→実現可能性→スケジュール）、数値根拠の示し方、生産性向上・省エネ・CN対応の訴求、加点項目の押さえ方、よくある減点ポイント、製造・物流・商業の記述例3パターンを、審査員視点で整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金 事業計画書 書き方",
    "採択 事業計画書 構成",
    "省エネ補助金 申請書 記述例",
    "事業計画書 数値根拠",
    "補助金 加点 減点",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-business-plan-writing-guide",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-business-plan-writing-guide",
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
    label: "事業計画書が採否を分ける理由",
    detail:
      "補助金の採否は、設備の良し悪しよりも事業計画書の説得力で決まります。審査員は限られた予算の中で、政策目的（省エネ・脱炭素・生産性向上）に合致し、効果が定量的に確実で、実現可能性が高い案件を選びます。同じ設備投資でも、現状課題→投資内容→定量効果→実現可能性→スケジュールが論理的につながった計画書は採択されやすく、効果が曖昧で根拠の弱い計画書は不採択になりがちです（出典: SII公式・経産省・各補助金事務局から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは事業計画書の書き方に特化した実務ガイドです。補助金制度全体の概要・採択率の総論は別途整理しています。本ページでは採択される計画書の構成・記述例、数値根拠の示し方、加点・減点ポイントという、計画書作成の実務に焦点を当てます。",
  },
  {
    label: "審査員視点で書く",
    detail:
      "計画書は『自社がやりたいこと』ではなく『審査員が評価する観点』で書くと採択率が高まります。審査員は公募要領の審査項目（政策合致・必要性・効果・実現性・費用対効果）に沿って採点するため、各審査項目に対応する記述を、定量データと論理で示すことが重要です。専門用語を並べるより、効果と根拠を分かりやすく示す計画書が評価されます。",
  },
  {
    label: "定量効果が最重要",
    detail:
      "省エネ補助は補助額あたりの省エネ量（費用対効果）で評価されるため、省エネ量・CO2削減量・電気代削減額を数値で示すことが最重要です。『大幅に削減』ではなく『年間◯kWh・◯トンCO2・◯円削減（算定根拠付き）』と記述すると説得力が高まります。数値は現状把握・省エネ診断・メーカー試算に基づき、算定根拠を明示することが採択の鍵です。",
  },
  {
    label: "計画書作成の前提（現状把握）",
    detail:
      "説得力のある計画書には、現状の電力使用・原単位・課題の定量把握が不可欠です。省エネ診断やBEMS/FEMSの計測データで現状を定量化しておくと、投資の必要性・効果の根拠が整い、計画書全体の一貫性が高まります。現状把握なしに効果だけ書いても審査では評価されにくいため、作成前の現状把握が出発点になります。",
  },
];

const mainSubsidies = [
  {
    name: "1. 現状課題（事業の背景・課題）",
    role: "なぜ投資が必要か",
    detail:
      "現状の電力使用・原単位・設備の老朽化・コスト上昇・取引先のCN要請などの課題を定量で記述。『電気代が高騰している』ではなく『年間電気代◯円、過去3年で◯%上昇、原単位は同業比◯%高い』と数値で示すと、投資の必要性が説得力を持ちます。外部環境（電力価格・脱炭素要請）も背景として明記します。",
  },
  {
    name: "2. 投資内容（導入設備・事業概要）",
    role: "何に投資するか",
    detail:
      "導入する設備（高効率空調・ヒートポンプ・BEMS等）、仕様、台数、設置場所、投資総額を具体的に記述。なぜその設備・仕様を選んだか（現状課題への対応）を論理的に説明します。相見積もり・型番・メーカー試算を添えると客観性が高まります。",
  },
  {
    name: "3. 定量効果（省エネ・CO2・コスト）",
    role: "どれだけ効果が出るか",
    detail:
      "省エネ量（kWh・原油換算）、CO2削減量（トン）、電気代削減額（円）を算定根拠付きで記述。費用対効果（補助額あたりの省エネ量）が採択の決め手のため、計算過程・前提条件を明示します。最重要セクションで、ここの定量性が採否を左右します。",
  },
  {
    name: "4. 実現可能性（体制・資金・スケジュール）",
    role: "確実に実行できるか",
    detail:
      "実施体制（社内担当・施工業者）、資金計画（自己資金・借入・補助金）、リスク対応を記述し、計画が確実に実行できることを示します。審査員は『絵に描いた餅』を嫌うため、実行体制と資金の裏付けが採択評価に寄与します。",
  },
  {
    name: "5. スケジュール（工程・実施計画）",
    role: "いつ実行するか",
    detail:
      "交付決定→発注→設置→運用開始→実績報告の工程を時系列で記述。交付決定前発注の禁止を踏まえ、リードタイムの長い設備の調達計画を現実的に示します。補助事業期間内に完了できる無理のない工程であることが重要です。",
  },
  {
    name: "6. 政策合致・将来展望（加点要素）",
    role: "政策目的との整合",
    detail:
      "省エネ・脱炭素・生産性向上という補助金の政策目的との合致、CN（カーボンニュートラル）目標、将来の事業展望を記述。加点項目（賃上げ・地域貢献・DX等）に該当する取組があれば明記すると、競争的な公募で採択上有利になります。",
  },
];

const subsidyRates = [
  {
    label: "数値根拠の示し方（算定根拠の明示）",
    detail:
      "効果は必ず算定根拠付きで示します。例えば『高効率空調更新で冷暖房電力▲25%。現状年間◯kWh×0.25＝年間◯kWh削減、CO2換算◯トン、単価◯円/kWhで年間◯円削減』のように計算過程を明示。前提条件（稼働時間・負荷率・単価）も記載すると審査員が検証でき、信頼性が高まります。",
  },
  {
    label: "現状把握データの活用",
    detail:
      "省エネ診断・BEMS/FEMSの計測データ・過去の電気代実績を効果算定の根拠に使うと客観性が高まります。『推定』『おそらく』ではなく実測・診断結果に基づく数値は審査で高く評価されます。現状把握が計画書全体の一貫性を支えます。",
  },
  {
    label: "費用対効果を意識した投資設計",
    detail:
      "省エネ補助は補助額あたりの省エネ量で評価されるため、効果の大きい設備を軸に投資を設計し、計画書でも費用対効果を前面に出します。効果の小さい設備を並べるより、省エネ絶対量の大きい設備を中心に据えると採択上有利です。",
  },
  {
    label: "三つの訴求軸（生産性・省エネ・CN）",
    detail:
      "生産性向上（省力化・歩留まり）、省エネ（コスト削減）、CN対応（脱炭素・取引継続）の3軸を一体で訴求すると、複数の政策目的に合致し採択評価が高まります。単一の効果だけでなく複合効果を示すのが上級テクニックです。",
  },
];

const caseStudies = [
  {
    title: "構成例1: 製造業（FEMS＋生産設備更新）",
    before:
      "課題: 生産ライン別の電力使用が不明、コンプレッサ・空調が高経年、原単位が同業比で高い。年間電気代◯円。取引先からCN対応を要請されている。",
    after:
      "投資・効果: FEMS（ライン別計測）＋高効率コンプレッサを導入。原単位▲12%、年間◯kWh・◯トンCO2・◯円削減（算定根拠付き）。生産性向上＋省エネ＋CN対応を一体訴求。",
    result:
      "採択ポイント: 現状把握（FEMS計測）→投資→定量効果→実現体制→工程が論理的に接続。費用対効果と三つの訴求軸を明示し採択。",
  },
  {
    title: "構成例2: 物流業（冷凍機更新＋屋根太陽光）",
    before:
      "課題: 旧型冷凍機で冷却電力が全電力の◯%、年間電気代◯円。3PL大手からRE100・Scope3削減を要請され取引継続のため投資が必要。",
    after:
      "投資・効果: 高効率冷凍機（COP改善）＋屋根太陽光。冷凍電力▲25%、年間◯kWh・◯トンCO2・◯円削減（算定根拠付き）。RE100比率向上。",
    result:
      "採択ポイント: 外部要請（取引継続）を必要性の根拠に明記。省エネ絶対量の大きい冷凍機を軸に費用対効果を前面化し採択。",
  },
  {
    title: "構成例3: 商業（高効率空調＋BEMS＋LED）",
    before:
      "課題: 高経年空調・蛍光灯で電気代が経営を圧迫、用途別の電力が不明。年間電気代◯円。光熱費高騰への対応が急務。",
    after:
      "投資・効果: 高効率空調＋BEMS（見える化・制御）＋LED化。電力▲18%、年間◯kWh・◯トンCO2・◯円削減（算定根拠付き）。運用改善で効果継続。",
    result:
      "採択ポイント: 見える化による運用改善で効果を底上げするストーリー。実現体制・工程を現実的に示し採択。",
  },
];

const cautionItems = [
  {
    label: "効果が定性的・根拠が曖昧（最大の減点）",
    detail:
      "『大幅に削減』『省エネに貢献』など定性的な記述や、算定根拠のない数値は最も評価されません。費用対効果で採点される省エネ補助では、算定根拠付きの定量効果がないと採択は難しくなります。",
  },
  {
    label: "現状課題と投資内容が噛み合っていない",
    detail:
      "現状課題（何に困っているか）と投資内容（何を入れるか）が論理的につながっていないと説得力を欠きます。課題→投資→効果が一本の線でつながる構成にすることが基本です。",
  },
  {
    label: "実現可能性の裏付けが弱い",
    detail:
      "実施体制・資金計画・スケジュールの裏付けが弱いと『実行できるか不安』と評価されます。社内体制・施工業者・資金の調達計画を具体的に示し、無理のない工程にすることが重要です。",
  },
  {
    label: "公募要領の審査項目を踏まえていない",
    detail:
      "公募要領の審査項目・加点項目を読まずに自社目線で書くと、審査の観点とずれて減点されます。審査項目に一つひとつ対応する記述を意識することが採択の近道です。",
  },
  {
    label: "交付決定前発注を前提にした工程",
    detail:
      "交付決定前に発注する前提の工程は補助対象外リスクがあり、計画として不適切と判断されます。交付決定後に発注する現実的な工程を示すことが必須です。",
  },
];

const targetEquipment = [
  {
    label: "事業の背景・課題（現状の定量把握）",
    detail:
      "電力使用・原単位・コスト推移・設備老朽化・外部要請を数値で記述。投資の必要性の出発点で、省エネ診断・計測データで裏付けると説得力が高まります。",
  },
  {
    label: "導入設備・事業概要（仕様・投資額）",
    detail:
      "導入設備の仕様・台数・設置場所・投資総額を具体的に記述。なぜその設備・仕様を選んだかを現状課題と結びつけて説明し、相見積もり・型番・メーカー試算を添えます。",
  },
  {
    label: "省エネ・CO2・コスト効果（算定根拠付き）",
    detail:
      "省エネ量・CO2削減量・電気代削減額を計算過程・前提条件付きで記述。費用対効果（補助額あたりの省エネ量）を明示する最重要項目です。",
  },
  {
    label: "実施体制・資金計画・スケジュール",
    detail:
      "実施体制（社内担当・施工業者）、資金計画（自己資金・借入・補助金）、交付決定→発注→設置→報告の工程を記述し、確実に実行できることを示します。",
  },
  {
    label: "政策合致・加点項目・将来展望",
    detail:
      "省エネ・脱炭素・生産性向上という政策目的との合致、CN目標、加点項目（賃上げ・地域貢献・DX等）、将来の事業展望を記述し、競争的公募での評価を高めます。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 公募要領・審査項目の精読",
    detail:
      "まず公募要領を精読し、対象要件・審査項目・加点項目・提出様式を把握。審査の観点を理解してから書き始めるのが採択への近道です。要件を満たさない投資はそもそも対象外になります。",
  },
  {
    label: "STEP2: 現状把握・効果算定",
    detail:
      "省エネ診断・計測データ・電気代実績で現状を定量把握し、導入設備の省エネ量・CO2削減量・コスト削減額を算定根拠付きで試算。ここが計画書の根拠の土台になります。",
  },
  {
    label: "STEP3: 構成の組立（5構成）",
    detail:
      "現状課題→投資内容→定量効果→実現可能性→スケジュールの5構成で骨子を組み立てます。課題→投資→効果が一本の線でつながるストーリーを設計するのが要点です。",
  },
  {
    label: "STEP4: 記述・数値根拠の作り込み",
    detail:
      "各構成を審査項目に対応させて記述。効果は算定根拠・前提条件を明示し、生産性向上・省エネ・CN対応の三つの訴求軸を一体で示します。加点項目も漏れなく記述します。",
  },
  {
    label: "STEP5: 推敲・第三者チェック・提出",
    detail:
      "論理の一貫性・数値根拠・誤字脱字・様式適合を推敲し、第三者（専門家・社内別部門）のチェックを受けてから提出。減点ポイントの最終確認が採択率を高めます。",
  },
];

const energySaving = [
  {
    label: "効果は算定根拠付きの数値で（最重要）",
    detail:
      "省エネ量・CO2・コスト削減を計算過程・前提条件付きで示すと、審査員が検証でき信頼性が高まります。定性的な表現を避け、すべての効果に算定根拠を付けるのが採択の鍵です。",
  },
  {
    label: "課題→投資→効果を一本の線でつなぐ",
    detail:
      "現状課題と投資内容と定量効果が論理的につながった計画書は説得力が高い。各セクションが独立せず、一貫したストーリーになるよう構成することが採択率を高めます。",
  },
  {
    label: "三つの訴求軸（生産性・省エネ・CN）を一体化",
    detail:
      "生産性向上・省エネ・CN対応を一体で訴求すると複数の政策目的に合致し評価が高まります。単一効果より複合効果を示すのが上級テクニックです。",
  },
  {
    label: "加点項目を漏れなく押さえる",
    detail:
      "賃上げ・地域貢献・DX・先進性などの加点項目に該当する取組があれば必ず明記。競争的な公募では加点の有無が採否を分けるため、公募要領の加点項目を一つずつ確認します。",
  },
  {
    label: "第三者チェックで減点を防ぐ",
    detail:
      "専門家・社内別部門による第三者チェックで、論理の飛躍・根拠不足・様式不適合などの減点ポイントを事前に潰します。不採択時の再申請に備え、講評・審査結果を次回に活かすことも重要です。",
  },
];

const checklistItems = [
  "公募要領の審査項目・加点項目・提出様式を精読したか",
  "現状の電力使用・原単位・課題を定量で把握したか",
  "導入設備の仕様・台数・投資総額を具体的に記述したか",
  "省エネ量・CO2・コスト削減を算定根拠付きで示したか",
  "現状課題→投資内容→定量効果が一本の線でつながっているか",
  "費用対効果（補助額あたりの省エネ量）を前面に出したか",
  "生産性向上・省エネ・CN対応の三つの軸を一体訴求したか",
  "実施体制・資金計画の裏付けを具体的に示したか",
  "交付決定後に発注する現実的な工程になっているか",
  "加点項目に該当する取組を漏れなく記述したか",
  "第三者（専門家・別部門）のチェックを受けたか",
  "不採択時の再申請・改善方針を準備したか",
];

const faqItems = [
  {
    question: "事業計画書で最も重視されるのは何ですか？",
    answer:
      "定量効果（費用対効果）が最重要です。省エネ補助は補助額あたりの省エネ量で評価されるため、省エネ量・CO2削減量・電気代削減額を算定根拠付きで示すことが採否を分けます。『大幅に削減』のような定性的な記述ではなく、『年間◯kWh・◯トンCO2・◯円削減（算定根拠：現状◯kWh×削減率◯%、単価◯円/kWh）』のように計算過程と前提条件を明示します。あわせて現状課題→投資内容→定量効果が論理的につながった構成にすることが採択の基本です（出典: SII公式・各補助金事務局から整理／2025年度時点）。",
  },
  {
    question: "採択される計画書の構成を教えてください。",
    answer:
      "現状課題→投資内容→定量効果→実現可能性→スケジュールの5構成が基本です。①現状課題で投資の必要性を定量で示し、②投資内容で導入設備・仕様・投資額を具体的に記述し、③定量効果で省エネ・CO2・コスト削減を算定根拠付きで示し、④実現可能性で実施体制・資金計画を裏付け、⑤スケジュールで現実的な工程を示します。さらに政策合致・加点項目を加えると競争的公募で有利です。各セクションが一本の線でつながるストーリーにすることが重要です。",
  },
  {
    question: "数値根拠はどう示せばよいですか？",
    answer:
      "効果には必ず算定根拠と前提条件を付けます。例えば高効率空調更新なら『現状の冷暖房電力 年間◯kWh × 削減率25% ＝ 年間◯kWh削減、CO2換算◯トン、単価◯円/kWhで年間◯円削減』のように計算過程を明示します。前提条件（稼働時間・負荷率・電力単価）も記載すると審査員が検証でき信頼性が高まります。数値は推定ではなく、省エネ診断・BEMS/FEMSの計測データ・過去の電気代実績・メーカー試算に基づくと説得力が増します（出典: SII公式／2025年度時点）。",
  },
  {
    question: "よくある減点・不採択の理由は何ですか？",
    answer:
      "最も多いのは効果が定性的で算定根拠が曖昧なことです。次に現状課題と投資内容が噛み合っていない、実現可能性の裏付け（体制・資金・工程）が弱い、公募要領の審査項目を踏まえていない、交付決定前発注を前提にした工程、などがあります。いずれも『審査員が評価する観点』ではなく『自社がやりたいこと』目線で書くと起こりがちです。公募要領の審査項目に一つずつ対応し、定量根拠と論理の一貫性を整えることで多くの減点は防げます（出典: 各補助金事務局の公表講評から整理／2025年度時点）。",
  },
  {
    question: "審査員はどんな視点で見ていますか？",
    answer:
      "審査員は公募要領の審査項目に沿って、①政策目的（省エネ・脱炭素・生産性向上）への合致、②投資の必要性、③効果の定量性・確実性、④実現可能性、⑤費用対効果、を採点します。限られた予算で効果の高い案件を選ぶため、定量的で根拠が明確、かつ確実に実行できる計画が高く評価されます。専門用語を並べるより、効果と根拠を分かりやすく示すことが大切です。各審査項目に対応する記述を意識して書くと、審査員が採点しやすく採択率が高まります。",
  },
  {
    question: "加点項目はどう押さえればよいですか？",
    answer:
      "公募要領に記載された加点項目（賃上げ・地域貢献・DX・先進性・CN目標など）を一つずつ確認し、該当する自社の取組を計画書に明記します。競争的な公募では同等の効果の案件が並ぶため、加点の有無が採否を分けることがあります。例えば賃上げ計画、地域雇用、デジタル化、先進的な省エネ技術の採用などです。加点項目は後付けが難しいものもあるため、申請前に該当可能性を整理し、計画に織り込んでおくことが採択戦略になります。",
  },
  {
    question: "生産性向上・省エネ・CN対応はどう訴求し分けますか？",
    answer:
      "三つを一体で訴求するのが上級テクニックです。例えば製造業のFEMS＋設備更新なら『原単位改善で生産性向上、電力削減で省エネ、燃料転換でCN対応』のように、一つの投資が複数の政策目的に貢献することを示します。単一の効果だけを書くより、複合効果を定量で示すと審査評価が高まります。ただし主軸となる効果（省エネ補助なら省エネ量）は明確にし、副次効果として生産性・CNを添える構成にすると論点がぶれません（出典: SII公式・経産省から整理／2025年度時点）。",
  },
  {
    question: "不採択になったらどうすればよいですか？",
    answer:
      "まず審査結果・講評を確認し、減点理由（効果の定量性不足・根拠不足・実現性など）を特定します。次回公募に向けて、現状把握データの追加・効果算定の精緻化・実施体制の強化・加点項目の追加などで計画書を改善します。同一補助金の次回公募や、要件の合う別補助金への切替も選択肢です。多くの補助金は複数回公募されるため、講評を活かして改善し再申請すると採択可能性が高まります。再申請を前提に現状把握データを蓄積しておくことが有効です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金 公募要領", url: "https://sii.or.jp/" },
  { name: "中小企業庁 ものづくり補助金 公募要領", url: "https://www.chusho.meti.go.jp/" },
  { name: "経済産業省 資源エネルギー庁 補助金情報", url: "https://www.meti.go.jp/" },
  { name: "環境省 脱炭素・省エネ設備補助 公募情報", url: "https://www.env.go.jp/" },
];

export default function SubsidyBusinessPlanWritingGuidePage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-business-plan-writing-guide"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "補助金事業計画書の書き方完全ガイド", url: "https://simulator.eic-jp.org/subsidy-business-plan-writing-guide" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">補助金事業計画書の書き方完全ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            補助金事業計画書の書き方 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            補助金の採否は設備の良し悪しより事業計画書の説得力で決まります。本ページでは採択される計画書の構成（現状課題→投資内容→定量効果→実現可能性→スケジュール）、数値根拠の示し方、生産性向上・省エネ・CN対応の訴求、加点項目の押さえ方、よくある減点ポイント、製造・物流・商業の記述例3パターンを、審査員視点で整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>採択される事業計画書の5構成と各セクションの書き方</li>
              <li>数値根拠（算定根拠付き定量効果）の示し方</li>
              <li>製造・物流・商業の採択計画書の構成例3パターン</li>
              <li>加点項目の押さえ方・よくある減点ポイント</li>
              <li>計画書作成・申請の12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは事業計画書の書き方に特化した実務ガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">事業計画書が採否を分ける理由</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金の採否は事業計画書の説得力で決まります。審査員視点で書き、定量効果を算定根拠付きで示し、現状課題→投資→効果を一本の線でつなぐことで採択率を高められます。まずは事業計画書の重要性と前提（現状把握）を整理します。
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
              現状把握の起点は{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              、計測基盤は{" "}
              <Link href="/subsidy-bemms-fems" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">BEMS/FEMS導入補助の活用ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択される計画書の主要構成要素</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              採択される事業計画書の主要構成要素を、各セクションの役割と書き方とともに整理します。現状課題→投資内容→定量効果→実現可能性→スケジュール＋政策合致が基本の流れです。
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
            <h2 className="text-xl font-semibold text-slate-900">数値根拠の示し方と訴求軸</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              計画書で最も評価される数値根拠の示し方と、生産性・省エネ・CNの三つの訴求軸を整理します。費用対効果を意識した投資設計が採択を左右します。
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
              ※ 審査項目・加点項目・評価の考え方は2025年度時点の公募要領・公表講評を基に整理した一般的な傾向です。最新の公募要領を必ず確認してください。出典: SII公式・経産省・中小企業庁から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択された計画書の構成例3パターン（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造・物流・商業の代表的な3パターンで、課題→投資・効果→採択ポイントの構成例を提示します。いずれも公開事例・公募要領から再構成した代表シナリオで、数値部分は自社データに置き換えて記述します。
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
            <h2 className="text-xl font-semibold text-slate-900">計画書に記述すべき項目</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書に必ず記述すべき項目を整理します。各項目を審査項目に対応させ、定量データと論理で示すことが採択の前提です。
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
              業種別の投資戦略は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              、{" "}
              <Link href="/subsidy-logistics-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">計画書作成の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              公募要領の精読から提出まで、事業計画書作成の標準的な流れを整理します。現状把握・効果算定・構成の組立・記述・推敲の順で進めると一貫性の高い計画書になります。
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
              添付書類の整え方は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付申請書類の準備ガイド</Link>
              、不採択対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある減点ポイントと留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不採択を招きやすい減点ポイントを整理します。効果の定性的記述・課題と投資の不整合・実現性の裏付け不足・審査項目の無視・工程の不備が主な原因です。
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
              、中小の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択率を高める記述テクニック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              算定根拠付きの数値、課題→投資→効果の一貫性、三つの訴求軸の一体化、加点項目の押さえ、第三者チェックが、採択率を高める記述テクニックの柱です。
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
              GX税制の活用は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 法人活用完全ガイド</Link>
              、見直し優先度は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">事業計画書作成チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              提出前にこのチェックリストで計画書を点検しましょう。1項目でも未確認があれば、採択率が下がります。
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
              申請書類全体の準備は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付申請書類の準備ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで計画書の定量効果を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              事業計画書の定量効果（電気代削減額・投資回収）を、シミュレーターで自社条件に当てはめて試算できます。算定根拠のある削減額・回収年数を計画書に記載することで、効果の説得力を高められます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>設備更新後の年間削減額を試算し計画書の根拠にする</li>
              <li>補助前後の投資回収年数を比較する</li>
              <li>固定プラン切替＋省エネ＋再エネの複合効果を見立てる</li>
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
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付申請書類の準備ガイド", description: "計画書と合わせて整える添付書類。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "減点ポイントと再申請戦略。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "定量効果の算定と回収年数。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "計画書の現状把握・効果算定の起点。" },
              { href: "/subsidy-bemms-fems", title: "BEMS/FEMS導入補助の活用ガイド", description: "効果算定の計測データ基盤。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "計画書での併用設計の前提。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "製造業の投資・計画書の論点。" },
              { href: "/subsidy-logistics-strategy", title: "物流業の補助金活用戦略", description: "物流業の投資・計画書の論点。" },
              { href: "/subsidy-retail-commerce-strategy", title: "小売・商業の補助金活用戦略", description: "商業の投資・計画書の論点。" },
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "CN対応の訴求と税制活用。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "投資判断の前提整理。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="採択される事業計画書の作成を専門家に相談する"
            description="現状把握・効果算定・構成設計・加点項目の押さえ方は専門知識を要します。まずシミュレーターで定量効果の根拠を試算し、必要に応じて専門家へご相談ください。"
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
            heading="事業計画書の作成、専門家に相談しませんか？"
            description="現状把握・効果算定・構成設計・数値根拠の作り込み・加点項目の押さえ方は専門知識を要します。エネルギー情報センターは中立的立場で採択される事業計画書づくり・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
