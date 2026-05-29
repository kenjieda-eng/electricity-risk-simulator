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
  "補助金不採択の理由と対策 完全ガイド｜よくある不採択ポイントと再申請で採択を勝ち取る戦略";
const pageDescription =
  "補助金の不採択理由と対策に特化した実務ガイド。費用対効果不足・必要性の説明不足・計画の整合性欠如・形式不備など、よくある不採択の6類型と減点ポイントを整理し、再申請の手順・採択率を高める対策・不採択から再申請で採択された事例を解説します。採択率は事務局公表値ベースで公募回により変動し推測しません。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金 不採択 理由",
    "補助金 落ちた 対策",
    "補助金 再申請 戦略",
    "補助金 採択率 上げる",
    "省エネ補助金 審査 ポイント",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-rejection-reasons-countermeasures",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-rejection-reasons-countermeasures",
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
    label: "不採択は次の採択への材料になる",
    detail:
      "補助金は予算と申請件数の関係で採択数に上限があり、要件を満たしていても不採択になることがあります。重要なのは不採択を『失敗』で終わらせず、不採択理由を分析して次の公募で改善することです。多くの補助金は不採択者に評価のフィードバックや問い合わせ対応を行っており、これを材料に再申請すれば採択率を高められます（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『補助金不採択の理由と対策・再申請戦略』に特化した実務ガイドです。各補助金制度の概要・採択率の総論は別途整理しています。本ページではよくある不採択の類型、減点ポイント、再申請の手順、採択率を高める対策という、審査対応の実務に焦点を当てます。採択率は事務局公表値ベースで公募回により変動し、本ページでは推測しません。",
  },
  {
    label: "採択率は公表値ベース・公募回で変動・推測しない",
    detail:
      "採択率は補助金・公募回・予算・申請件数で大きく変動し、各事務局が公募回ごとに採択結果を公表しています。『この補助金は○%採択される』という固定的な見方や推測値での判断は危険で、不採択対策を検討する際も最新の事務局公表値を確認することが前提です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "審査は『費用対効果』と『計画の整合性』が中心",
    detail:
      "SII省エネ補助をはじめ多くの省エネ補助は『補助額あたりの省エネ量・CO2削減（費用対効果）』を重視します。加えて事業計画の必要性・実現可能性・整合性が審査されます。不採択の多くはこの費用対効果か計画の整合性に弱点があるケースで、対策はこの2点の強化が中心になります（出典: SII公式・各補助金事務局／2025年度時点）。",
  },
  {
    label: "形式不備による失格も少なくない",
    detail:
      "内容以前に、必要書類の不足・記載漏れ・要件非該当・期限超過といった形式不備で失格になるケースも少なくありません。これは内容を磨く以前の問題で、提出前のチェックリストとダブルチェックで確実に防げます。形式不備での失格は最も避けやすい不採択です。",
  },
];

const mainSubsidies = [
  {
    name: "類型1: 費用対効果（省エネ量あたり補助額）の不足",
    role: "最頻出／評価の中核",
    detail:
      "補助額に対する省エネ量・CO2削減量が小さいと、費用対効果で他案件に劣り不採択になりやすい類型。効果の小さい設備を中心に申請した、削減効果の見積もりが弱い、といったケース。対策は効果の大きい設備（空調・冷凍機等の電力多消費設備）を軸に据え、削減効果を定量的に示すことです（出典: SII公式／2025年度時点）。",
  },
  {
    name: "類型2: 投資の必要性・背景の説明不足",
    role: "頻出／ストーリー欠如",
    detail:
      "なぜ今この投資が必要かの背景・課題が伝わらないと、説得力に欠け評価が下がる類型。既存設備の老朽化・電力多消費・取引先のCN要請等の外部要因を計画に明記すると必要性が伝わります。対策は『現状の課題→投資→効果』のストーリーを定量的に示すことです（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    name: "類型3: 事業計画の整合性・実現可能性の欠如",
    role: "頻出／論理破綻",
    detail:
      "削減効果の根拠が薄い、スケジュールに無理がある、資金計画が不明確、といった計画の整合性・実現可能性の弱さによる不採択。対策は省エネ診断等で効果の根拠を固め、実行可能なスケジュール・資金計画を示し、計画全体の論理を一貫させることです（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    name: "類型4: 形式不備・要件非該当（失格）",
    role: "頻出／内容以前",
    detail:
      "必要書類の不足、記載漏れ、対象要件の非該当、提出期限超過による失格。内容を審査される前に脱落する最も避けやすい不採択。対策は公募要領の要件・必要書類を一覧化し、提出前にチェックリストとダブルチェックで確認することです（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    name: "類型5: 政策目的・加点要件との不整合",
    role: "中頻度／評価機会の逸失",
    detail:
      "補助金の政策目的（脱炭素・地域経済・省力化等）との結びつきが弱い、加点要件（先進性・賃上げ・地域貢献等）を満たしていない・記載していない類型。対策は公募要領の評価項目・加点要件を読み込み、該当する要素を計画に反映して評価機会を取りこぼさないことです（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    name: "類型6: 予算・競争倍率による相対的不採択",
    role: "外部要因／相対評価",
    detail:
      "自社の計画に大きな欠点がなくても、予算枠に対し申請件数が多い公募回では相対評価で不採択になることがあります。これは外部要因のため、対策は計画の質をさらに高めて相対順位を上げること、競争の緩い公募回・別の補助金への切替を検討することです（出典: 各補助金事務局の公表採択結果／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "不採択理由は『公表評価項目』から逆算する",
    detail:
      "多くの補助金は公募要領に評価項目・審査の観点を明示しています。不採択理由は推測せず、この公表された評価項目から自社申請のどこが弱かったかを逆算するのが基本。費用対効果・必要性・整合性・加点要件のどこで点を落としたかを特定し、再申請で重点的に補強します（出典: 各補助金事務局の公募要領／2025年度時点）。",
  },
  {
    label: "事務局のフィードバックを活用する",
    detail:
      "補助金によっては不採択者に対し評価結果のフィードバックや問い合わせ対応を行っています。可能な範囲で評価のポイントを確認し、次の申請に反映することで採択率を高められます。フィードバックの有無・方法は補助金ごとに異なるため事務局に確認します（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    label: "採択率は公募回・予算で変動（推測しない）",
    detail:
      "採択率は予算・申請件数・公募回で変動し、各事務局が公募回ごとに採択結果を公表しています。固定値ではないため、再申請の戦略を立てる際も『この補助金は採択されやすい/にくい』と推測せず、最新の公表採択結果を確認することが前提です（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    label: "再申請と別補助金切替の使い分け",
    detail:
      "同じ補助金の次回公募に再申請するか、別の補助金（国の別制度・自治体補助等）に切替えるかは、不採択理由と公募スケジュールで判断します。費用対効果・計画の質に改善余地があれば再申請、競争倍率や要件のミスマッチが原因なら切替も有効。両にらみで戦略を立てます（出典: 各補助金事務局・各自治体／2025年度時点）。",
  },
];

const caseStudies = [
  {
    title: "事例1: 費用対効果不足→効果の大きい設備を軸に再申請（中規模工場）",
    before:
      "Before: 初回は更新しやすいLED中心で申請したが、補助額あたりの省エネ量が小さく費用対効果で見劣りし不採択。",
    after:
      "After: 省エネ診断で削減余地を定量化し、効果の大きい高効率空調・コンプレッサを軸に計画を再構成。削減量・CO2削減を数値で明示し、費用対効果を前面に出して次回公募へ再申請。",
    result:
      "Result: 費用対効果の評価が改善し再申請で採択／効果の大きい設備を軸にしたことで補助後の投資回収も短縮（採択は事務局公表結果に基づく・数値は公開事例から再構成した目安）。",
  },
  {
    title: "事例2: 必要性の説明不足→ストーリーを強化して再申請（中小・多店舗）",
    before:
      "Before: 初回は設備仕様の羅列が中心で『なぜ今必要か』が伝わらず、必要性の説明不足で不採択。",
    after:
      "After: 既存設備の老朽化・電力多消費の現状と取引先のCN要請を背景に据え、『現状の課題→投資→効果』のストーリーを定量的に記述。加点要件（賃上げ・地域貢献）も計画に反映して再申請。",
    result:
      "Result: 投資の必要性と政策目的との結びつきが評価され再申請で採択／加点要件の反映で相対順位も改善（採択は事務局公表結果に基づく・数値は公開事例から再構成した目安）。",
  },
  {
    title: "事例3: 形式不備で失格→チェック体制を整え別補助金で採択（中小）",
    before:
      "Before: 初回は必要書類の一部不足と記載漏れで内容審査前に失格。やり直しの公募まで時間があった。",
    after:
      "After: 公募要領の必要書類・要件をチェックリスト化しダブルチェック体制を構築。競争倍率と要件適合を見極め、自社に適合度の高い別補助金（自治体補助）に切替えて申請。",
    result:
      "Result: 形式不備を解消し別補助金で採択／提出前チェック体制が定着し以後の申請の歩留まりも改善（採択は事務局公表結果に基づく・数値は公開事例から再構成した目安）。",
  },
];

const cautionItems = [
  {
    label: "効果の小さい設備に偏った計画",
    detail:
      "費用対効果（補助額あたりの省エネ量）が重視されるため、効果の小さい設備に偏ると減点要因になります。効果の大きい電力多消費設備（空調・冷凍機・コンプレッサ等）を軸に据えていないのは典型的な減点ポイントです。",
  },
  {
    label: "削減効果の根拠が定性的・希望的",
    detail:
      "『省エネが期待できる』といった定性的・希望的な記述は説得力に欠け減点されます。省エネ診断や実測・計算に基づく定量的な根拠（削減電力量・CO2削減・回収年数）を示せていないのは弱点になります。",
  },
  {
    label: "加点要件の取りこぼし",
    detail:
      "公募要領に明示された加点要件（先進性・賃上げ・地域貢献・連携等）に該当するのに計画に記載しないのは、得られる評価機会を逃す減点です。加点要件は漏れなく確認し、該当する要素を計画に反映します。",
  },
  {
    label: "スケジュール・資金計画の整合性欠如",
    detail:
      "交付決定後の発注・導入スケジュールに無理がある、資金計画（自己負担分の調達）が不明確だと、実現可能性で減点されます。実行可能なスケジュールと明確な資金計画を示すことが重要です。",
  },
  {
    label: "不採択理由を推測で済ませる",
    detail:
      "不採択理由を推測だけで判断し、公表評価項目や事務局フィードバックを確認せずに同じ計画で再申請すると、同じ弱点で再び不採択になりがちです。評価項目から逆算し、確認できる範囲でフィードバックを得て改善することが重要です。",
  },
];

const targetEquipment = [
  {
    label: "費用対効果（省エネ量あたり補助額）",
    detail:
      "省エネ補助の審査で最も重視される評価要素。補助額に対する省エネ量・CO2削減量が大きいほど高評価。効果の大きい設備を軸に、削減効果を定量的に示すことが採択の鍵で、再申請でも最優先で補強すべき要素です。",
  },
  {
    label: "投資の必要性・背景の明確さ",
    detail:
      "なぜ今この投資が必要かの背景・課題が明確だと評価されます。既存設備の老朽化・電力多消費・取引先のCN要請等の外部要因を定量的に示し、『現状の課題→投資→効果』のストーリーが通っていることが評価される要素です。",
  },
  {
    label: "事業計画の整合性・実現可能性",
    detail:
      "削減効果の根拠、スケジュール、資金計画が一貫し実行可能であることが評価されます。計画全体の論理が破綻なく繋がっているか、無理のない実行体制が示されているかが審査で評価される要素です。",
  },
  {
    label: "政策目的・加点要件との適合",
    detail:
      "補助金の政策目的（脱炭素・省力化・地域経済等）との結びつき、加点要件（先進性・賃上げ・地域貢献・連携等）への適合が評価されます。該当する要素を漏れなく計画に反映することが評価機会の取り込みになります。",
  },
  {
    label: "形式要件の充足（失格回避）",
    detail:
      "必要書類の充足、記載の正確さ、対象要件への該当、期限内提出という形式要件は、内容審査の前提として評価される（満たさなければ失格となる）要素。チェックリストで確実に満たすことが評価の土俵に乗る条件です。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 不採択理由の特定（評価項目から逆算）",
    detail:
      "まず公募要領の評価項目から、自社申請のどこが弱かったかを逆算します。費用対効果・必要性・整合性・加点要件・形式のどこで点を落としたかを特定。可能なら事務局のフィードバックも確認し、推測でなく根拠を持って弱点を把握します。",
  },
  {
    label: "STEP2: 再申請か別補助金切替かの判断",
    detail:
      "不採択理由と公募スケジュール・競争倍率を踏まえ、同じ補助金に再申請するか、適合度の高い別補助金（国の別制度・自治体補助）に切替えるかを判断します。計画の質に改善余地があれば再申請、要件ミスマッチや高倍率なら切替も検討します。",
  },
  {
    label: "STEP3: 弱点の重点補強",
    detail:
      "特定した弱点を重点的に補強します。費用対効果不足なら効果の大きい設備を軸に再構成、必要性不足ならストーリーを定量化、整合性不足なら根拠・スケジュール・資金計画を固める、加点要件の取りこぼしなら該当要素を反映します。",
  },
  {
    label: "STEP4: 形式要件のチェック体制構築",
    detail:
      "必要書類・記載事項・対象要件・提出期限をチェックリスト化し、提出前にダブルチェックする体制を構築します。形式不備による失格は最も避けやすい不採択のため、内容の補強と並行して確実に潰します。",
  },
  {
    label: "STEP5: 再申請・採択後の実績報告準備",
    detail:
      "補強した計画で次回公募・別補助金へ再申請します。採択された場合に備え、交付決定後の発注・導入スケジュール、実績報告のための計測体制も準備しておくと、採択後の手続きがスムーズです。",
  },
];

const energySaving = [
  {
    label: "費用対効果を前面に出す",
    detail:
      "採択率を高める最大の対策は費用対効果の明示です。効果の大きい電力多消費設備を軸に据え、補助額あたりの省エネ量・CO2削減・回収年数を定量的に示すことで、評価の中核で高い点を取りにいきます。",
  },
  {
    label: "省エネ診断で根拠を定量化する",
    detail:
      "省エネ診断を活用すると削減余地・効果が定量化でき、計画の根拠が固まります。定性的・希望的な記述を、実測・計算に基づく定量的な根拠に置き換えることで、計画の整合性・実現可能性の評価が高まります。",
  },
  {
    label: "必要性のストーリーを定量的に語る",
    detail:
      "『現状の課題→投資→効果』のストーリーを、既存設備の老朽化・電力多消費・取引先CN要請等の外部要因とともに定量的に語ることで、投資の必要性・緊急性が伝わり評価に寄与します。",
  },
  {
    label: "加点要件を漏れなく反映する",
    detail:
      "公募要領の加点要件（先進性・賃上げ・地域貢献・連携等）を読み込み、該当する要素を漏れなく計画に反映します。加点要件の取りこぼしを防ぐだけで相対順位が上がり、採択率を高められます。",
  },
  {
    label: "形式不備をチェック体制で潰す",
    detail:
      "必要書類・記載・要件・期限をチェックリスト化しダブルチェックすることで、最も避けやすい形式不備による失格を確実に潰します。内容の評価以前に土俵から降ろされないための基本対策です。",
  },
];

const checklistItems = [
  "不採択理由を公募要領の評価項目から逆算して特定したか",
  "事務局のフィードバック・問い合わせ対応を確認したか",
  "費用対効果（補助額あたりの省エネ量）を定量的に示したか",
  "効果の大きい電力多消費設備を軸に据えているか",
  "投資の必要性・背景を定量的なストーリーで語っているか",
  "削減効果の根拠を省エネ診断等で定量化したか",
  "加点要件（先進性・賃上げ・地域貢献等）を漏れなく反映したか",
  "スケジュール・資金計画の整合性・実現可能性を示したか",
  "必要書類・記載・要件・期限をチェックリスト化したか",
  "提出前にダブルチェック体制を組んだか",
  "再申請か別補助金切替かを不採択理由から判断したか",
  "採択率は最新の事務局公表値で確認したか（推測しない）",
];

const faqItems = [
  {
    question: "補助金で不採択になる主な理由は何ですか？",
    answer:
      "よくある不採択は6類型に整理できます。①費用対効果（補助額あたりの省エネ量・CO2削減）の不足、②投資の必要性・背景の説明不足、③事業計画の整合性・実現可能性の欠如、④形式不備・要件非該当による失格、⑤政策目的・加点要件との不整合、⑥予算・競争倍率による相対的不採択、です。SIIをはじめ多くの省エネ補助は費用対効果を重視するため、効果の小さい設備に偏った計画や定性的な効果記述は減点されやすい傾向です。対策は費用対効果と計画の整合性の強化が中心になります（出典: SII公式・各補助金事務局／2025年度時点）。",
  },
  {
    question: "不採択になったら再申請できますか？",
    answer:
      "多くの補助金は次回公募で再申請が可能です。重要なのは同じ計画のまま再申請せず、不採択理由を特定して弱点を補強することです。公募要領の評価項目から自社申請のどこが弱かったかを逆算し、可能なら事務局のフィードバックも確認します。費用対効果・必要性・整合性・加点要件・形式のどこで点を落としたかを特定し、重点的に補強したうえで再申請すれば採択率を高められます。なお採択率は公募回・予算で変動するため、最新の公表採択結果を確認して戦略を立ててください（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    question: "不採択の理由は教えてもらえますか？",
    answer:
      "補助金によって対応が異なります。不採択者に対し評価結果のフィードバックや問い合わせ対応を行っている補助金もあれば、詳細な理由を開示しないものもあります。まずは事務局にフィードバックの有無・方法を確認するとよいでしょう。フィードバックが得られない場合でも、公募要領に明示された評価項目・審査の観点から、自社申請のどこが弱かったかを逆算して分析できます。不採択理由を推測だけで済ませず、確認できる根拠に基づいて改善することが重要です（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    question: "採択率はどのくらいですか？",
    answer:
      "採択率は補助金・公募回・予算・申請件数で大きく変動するため、特定の数値を一般化したり推測したりすることはできません。各事務局が公募回ごとに採択結果を公表していますので、検討中の補助金の最新の公表採択結果を必ず確認してください。『この補助金は採択されやすい/にくい』という固定的な見方は危険です。費用対効果が大きく計画の整合性が高い申請は相対的に採択されやすい傾向はありますが、競争倍率の高い公募回では良い計画でも相対評価で不採択になることがあります（出典: 各補助金事務局の公表採択結果／推測値の使用は不可）。",
  },
  {
    question: "費用対効果が低いと言われないためにはどうすればよいですか？",
    answer:
      "費用対効果は『補助額あたりの省エネ量・CO2削減量』で評価されるため、効果の大きい設備を軸に据えることが第一です。電力多消費設備（高効率空調・冷凍機・コンプレッサ等）は削減絶対量が大きく費用対効果が高く評価されやすい一方、効果の小さい設備に偏ると見劣りします。加えて、削減効果を『期待できる』といった定性的な記述でなく、省エネ診断や計算に基づく定量的な根拠（削減電力量・CO2削減・回収年数）で示すことが重要です。効果の大きい設備＋定量的根拠が費用対効果を高く見せる基本です（出典: SII公式／2025年度時点）。",
  },
  {
    question: "形式不備で落ちないためにはどうすればよいですか？",
    answer:
      "形式不備（必要書類の不足・記載漏れ・要件非該当・期限超過）は内容審査の前に失格となる、最も避けやすい不採択です。対策は、公募要領に記載された必要書類・記載事項・対象要件・提出期限を一覧化したチェックリストを作り、提出前に複数人でダブルチェックすることです。特に要件への該当（事業規模・設備区分・対象経費等）は思い込みで判断せず公募要領で確認します。形式不備は内容の良し悪し以前の問題なので、チェック体制を組めば確実に防げます（出典: 各補助金事務局／2025年度時点）。",
  },
  {
    question: "再申請と別の補助金への切替、どちらがよいですか？",
    answer:
      "不採択理由と公募スケジュール・競争倍率で判断します。費用対効果や計画の整合性に改善余地があり、同じ補助金が自社に適している場合は、弱点を補強して次回公募に再申請するのが基本です。一方、要件のミスマッチや競争倍率の高さが主因の場合は、自社に適合度の高い別の補助金（国の別制度・自治体補助）への切替も有効です。両にらみで戦略を立て、再申請の準備と並行して切替先の候補も検討しておくと、機会損失を避けられます（出典: 各補助金事務局・各自治体／2025年度時点）。",
  },
  {
    question: "再申請の準備はどこに相談すればよいですか？",
    answer:
      "再申請は、不採択理由の特定・費用対効果の補強・計画の整合性の強化・加点要件の反映など専門的な対応を伴います。まず公募要領の評価項目から弱点を逆算し、可能なら事務局のフィードバックを確認します。費用対効果の根拠を固めるには省エネ診断の活用が有効で、削減効果の定量化や設備選定を含めた計画の補強は、補助金の審査観点を理解した中立的な専門家に相談するのが安全です。設備選定・補助金構成・事業計画を一体で見直すことで採択率を高められます。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "中小企業庁 補助金・支援制度", url: "https://www.chusho.meti.go.jp/" },
  { name: "経済産業省 GX・脱炭素関連支援", url: "https://www.meti.go.jp/" },
  { name: "各補助金事務局 公募要領・採択結果", url: "https://www.meti.go.jp/" },
];

export default function SubsidyRejectionReasonsCountermeasuresPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-rejection-reasons-countermeasures"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "補助金不採択の理由と対策", url: "https://simulator.eic-jp.org/subsidy-rejection-reasons-countermeasures" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">補助金不採択の理由と対策</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            補助金不採択の理由と対策 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            補助金は予算と申請件数の関係で、要件を満たしても不採択になることがあります。重要なのは不採択を分析し、次の公募で改善することです。本ページでは費用対効果不足・必要性の説明不足・計画の整合性欠如・形式不備など、よくある不採択の6類型と減点ポイントを整理し、再申請の手順・採択率を高める対策・不採択から再申請で採択された事例を解説します。採択率は事務局公表値ベースで公募回により変動し、本ページでは推測しません。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>よくある不採択の6類型と評価の中核（費用対効果・整合性）</li>
              <li>減点されやすいポイントと審査で評価される要素</li>
              <li>不採択→再申請で採択された事例3件（Before/After）</li>
              <li>不採択理由の特定から再申請までの手順</li>
              <li>採択率を高める対策と12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは補助金の不採択理由と対策・再申請戦略に特化した実務ガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金不採択の理由と対策の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不採択は失敗ではなく次の採択への材料です。審査は費用対効果と計画の整合性が中心で、形式不備による失格も少なくありません。採択率は公募回で変動し推測できないため、評価項目から弱点を逆算し、改善して再申請する姿勢が重要です。
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
              公募スケジュールと採択率は{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
              、申請書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付の書類ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">よくある不採択理由（6類型）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金で不採択になる代表的な6つの類型を、評価の中核（費用対効果・必要性・整合性）から外部要因（予算・競争倍率）まで整理します。自社の不採択がどの類型かを特定することが対策の起点です。
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
            <h2 className="text-xl font-semibold text-slate-900">不採択理由の特定と再申請戦略の考え方</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不採択理由を公表評価項目から逆算し、事務局フィードバックを活用して再申請か別補助金切替かを判断する考え方を整理します。採択率は公募回で変動するため、推測せず最新の公表採択結果での確認が前提です。
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
              ※ 採択率は補助金・公募回・予算・申請件数で変動し、各事務局が公募回ごとに採択結果を公表しています。推測値は使用せず最新の公表採択結果を必ず確認してください。出典: 各補助金事務局の公表採択結果・公募要領から整理（2025年度時点）。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">不採択→再申請で採択された事例3件（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              代表的な3つの不採択理由について、弱点を補強して再申請・別補助金で採択に至った流れをBefore/After方式で提示します。いずれも公開事例から再構成した代表シナリオで、採択は事務局公表結果に基づきます。
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
              事業計画書の書き方は{" "}
              <Link href="/subsidy-business-plan-writing-guide" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金事業計画書の書き方完全ガイド</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">審査で評価される要素</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              審査で評価される（点が付く）主要な要素を整理します。費用対効果・必要性・整合性・加点要件・形式要件のそれぞれを満たすことが採択への道筋です。
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
              省エネ診断で根拠を固めるには{" "}
              <Link href="/subsidy-energy-saving-diagnosis" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">省エネ診断補助の活用ロードマップ</Link>
              、費用対効果の試算は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">再申請の手順（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              不採択理由の特定から再申請・採択後準備まで、再申請の標準的な流れを整理します。評価項目からの逆算による弱点特定と、形式不備のチェック体制構築が成否を左右します。
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
              別補助金への切替は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助金リスト</Link>
              、併用の検討は{" "}
              <Link href="/subsidy-stacking-combination-rules" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金併用・重複活用ルール完全ガイド</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">減点ポイント・留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              審査で減点されやすいポイント・留意点を整理します。効果の小さい設備への偏り、定性的な効果記述、加点要件の取りこぼし、計画の整合性欠如が代表的な減点ポイントです。
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
              補助金と料金見直しの優先順位は{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              、中小の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">採択率を高める対策</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              費用対効果を前面に出す、省エネ診断で根拠を定量化する、必要性のストーリーを定量的に語る、加点要件を漏れなく反映する、形式不備をチェック体制で潰す、が採択率を高める対策の柱です。評価の中核を押さえて相対順位を上げます。
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
              製造業の採択戦略は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              、物流業は{" "}
              <Link href="/subsidy-logistics-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">不採択対策・再申請 チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再申請の前にこのチェックリストで対策状況を整理しましょう。1項目でも未対応があれば、同じ弱点で再び不採択になるリスクが高まります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種別の評価ポイントは{" "}
              <Link href="/articles/by-industry" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">業種別の電気料金見直し</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで費用対効果を試算し再申請に活かす</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再申請で費用対効果を示すには、削減効果の定量化が鍵です。シミュレーターで自社条件の年間削減額・回収年数の当たりをつけ、効果の大きい設備を軸にした計画づくりと費用対効果の根拠提示に活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>効果の大きい設備の年間削減額を試算する</li>
              <li>補助前後の投資回収年数を比較し費用対効果を示す</li>
              <li>固定プラン切替＋省エネ＋屋根太陽光の複合効果を見立てる</li>
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
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "採択される計画書の構成・記述。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付の書類ガイド", description: "形式不備を防ぐ書類管理。" },
              { href: "/subsidy-energy-saving-diagnosis", title: "省エネ診断補助の活用ロードマップ", description: "費用対効果の根拠を定量化。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "費用対効果を数値で示す。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "別補助金切替・重層活用。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "補助金と料金見直しの使い分け。" },
              { href: "/subsidy-local-government-list", title: "自治体補助金リスト", description: "切替先の自治体補助の探し方。" },
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小の申請の進め方。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "業種別の採択戦略の例。" },
              { href: "/subsidy-logistics-strategy", title: "物流業の補助金活用戦略", description: "業種別の採択戦略の例。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/articles/by-region", title: "地域別の電気料金見直し（一覧）", description: "地域別ガイドのハブ。" },
            ]}
          />

          <ContentCta
            heading="補助金の再申請・採択率向上を専門家に相談する"
            description="不採択理由の特定・費用対効果の補強・加点要件の反映は、補助金の審査観点の理解を要します。まずシミュレーターで削減余地を試算し、採択される計画づくりは中立的な専門家へご相談ください。"
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
            heading="補助金の再申請・採択率向上、専門家に相談しませんか？"
            description="不採択理由の分析、費用対効果の定量化、事業計画の補強は専門知識を要します。エネルギー情報センターは中立的立場で補助金の採択率向上と電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
