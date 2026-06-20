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
  "GX・CN投資促進税制 完全ガイド｜10%税額控除・50%特別償却の要件と対象設備・補助金との併用ルール";
const pageDescription =
  "GX・カーボンニュートラル投資促進税制に特化した法人活用ガイド。投資額10%の税額控除または50%特別償却の要件、脱炭素設備・自家発電・PPA関連・高効率設備という対象設備、事業適応計画等の認定手続き、補助金との併用（取得価額調整）、中小・大企業の使い分け、規模別の税効果試算までを、税理士確認を前提に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "GX投資促進税制",
    "カーボンニュートラル投資促進税制",
    "10%税額控除 50%特別償却",
    "脱炭素設備 税制",
    "補助金 税制 併用",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-gx-cn-investment-tax",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-gx-cn-investment-tax",
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
    label: "GX・CN投資促進税制とは",
    detail:
      "カーボンニュートラル投資促進税制（GX・CN投資促進税制）は、脱炭素・GXに資する設備投資を行う法人に対し、取得価額に応じた税額控除または特別償却を認める優遇税制です。生産工程の脱炭素化・需要構造転換に資する製品の生産設備等が対象とされ、要件を満たす投資について投資額の一定割合の税額控除（代表的には10%相当）または特別償却（同50%相当）のいずれかを選択できます。補助金と異なり『現金が交付される』のではなく『納める税が減る』制度であり、黒字法人ほど効果が出やすいのが特徴です（出典: 経産省・国税庁から整理／2025年度時点・要件確認必須）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページはGX・CN投資促進税制（税額控除・特別償却）に特化した深掘りガイドです。補助金制度全体の概要は別途整理しています。本ページでは10%税額控除と50%特別償却の違いと選び方、脱炭素設備・自家発電・PPA関連・高効率設備という対象設備、事業適応計画等の認定手続き、補助金との併用ルール（取得価額調整）に焦点を当てます。",
  },
  {
    label: "税額控除と特別償却の本質的な違い",
    detail:
      "税額控除は『法人税額そのものを投資額の一定割合だけ直接減らす』制度で、減税額が永続的に残ります。特別償却は『初年度に多く償却して課税を将来へ繰り延べる』制度で、税の総額は変わらず期ズレ（早期回収）の効果です。長期的な節税は税額控除が有利、足元のキャッシュフロー改善は特別償却が有利と整理できます（出典: 国税庁から整理／2025年度時点）。",
  },
  {
    label: "電力多消費法人にとっての位置づけ",
    detail:
      "高効率設備・自家発電・PPA関連設備への投資は電気代削減と直結します。GX・CN投資促進税制を使えば、これらの脱炭素投資の実質負担を税効果で圧縮でき、補助金と組合せればさらに自己負担を抑えられます。電気代の高止まりが続くなかで、省エネ投資の回収を早める手段として有効です。",
  },
  {
    label: "税制は要件が複雑・税理士確認が必須",
    detail:
      "本税制は対象設備の認定・事業計画の認定・適用期限・他制度との調整など要件が複雑で、年度改正でも変更されます。本ページの数値・要件は2025年度時点で公表情報から整理した目安であり、適用可否・控除率・上限の最終判断は必ず顧問税理士・所管窓口に確認してください（出典: 経産省・国税庁／2025年度時点）。",
  },
];

const mainSubsidies = [
  {
    name: "税額控除（投資額の10%相当）",
    role: "国税庁・経産省／恒久的な減税",
    detail:
      "要件を満たす脱炭素設備の取得価額に対し、投資額の一定割合（代表的には10%相当）を法人税額から直接控除します。控除はその年度の法人税額に対する上限の範囲内で適用され、超過分は繰越できる場合があります。長期で見て減税効果が永続的に残るため、黒字が安定する法人に向きます（出典: 国税庁・経産省／2025年度時点・控除率は要件で変動）。",
  },
  {
    name: "特別償却（投資額の50%相当）",
    role: "国税庁・経産省／早期償却・期ズレ",
    detail:
      "通常の減価償却に上乗せして、取得価額の一定割合（代表的には50%相当）を初年度に追加償却できます。初年度の課税所得を圧縮しキャッシュフローを前倒しで改善しますが、生涯の税総額は変わりません。足元の資金繰りを重視する場合や、初年度に大きな利益が出る見込みの法人に向きます（出典: 国税庁・経産省／2025年度時点）。",
  },
  {
    name: "事業適応計画等の認定手続き",
    role: "経産省／適用の前提",
    detail:
      "本税制の適用には、所管省庁による事業計画（事業適応計画等）の認定を前提とする枠組みがあります。脱炭素に資する設備であること・計画の妥当性が審査され、認定後に取得した対象設備が優遇の対象となります。計画認定には一定の準備期間が必要で、設備調達のスケジュールと整合させる必要があります（出典: 経産省／2025年度時点・最新要領の確認必須）。",
  },
  {
    name: "SII省エネ補助金との関係",
    role: "経産省・SII／補助金との併用",
    detail:
      "高効率空調・冷凍機・LED等の省エネ設備はSII省エネ補助金（中小1/2・大企業1/3、上限15億円）の対象です。補助金を受けた設備は、税制の対象となる取得価額から補助金相当額を控除（取得価額調整）したうえで税効果を計算するのが原則です。補助金＋税制の併用設計は専門的判断を要します（出典: SII公式・国税庁／2025年度時点）。",
  },
  {
    name: "需要家主導型再エネ・PPA補助との関係",
    role: "経産省・環境省／再エネ投資",
    detail:
      "自家消費型太陽光・PPA関連設備・蓄電池は需要家主導型再エネ補助の対象になり得ます。これらの脱炭素設備はGX・CN投資促進税制の対象にもなり得るため、補助金と税制を取得価額調整のうえ組合せると自己負担を圧縮できます。RE100対応投資の回収を早める手段として有効です（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "中小企業向け税制（中小企業経営強化税制等）",
    role: "中小企業庁・国税庁／中小の選択肢",
    detail:
      "中小企業は中小企業経営強化税制など別の優遇税制で即時償却・税額控除を選べる場合があります。GX・CN投資促進税制との重複適用は不可で、どの税制が有利かは設備・所得状況で異なります。中小は複数税制を比較のうえ最も有利な制度を選択するのが基本です（出典: 中小企業庁・国税庁／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "控除率・償却率の水準",
    detail:
      "代表的には税額控除が投資額の10%相当、特別償却が50%相当として整理されます。控除率・償却率は対象設備の区分・脱炭素効果の度合い・年度改正により異なるため、適用前に最新の要件を確認してください。例えば取得価額1億円の脱炭素設備なら、税額控除なら1,000万円を法人税額から直接控除、特別償却なら初年度に5,000万円を追加償却できる、という規模感です（出典: 国税庁・経産省／2025年度時点・要件で変動）。",
  },
  {
    label: "控除額の上限と繰越",
    detail:
      "税額控除はその年度の法人税額に対する一定割合（上限）の範囲で適用され、控除しきれない超過分は翌年度以降に繰り越せる場合があります。利益が大きい法人ほど一度に多く控除でき、利益が小さい年度は繰越で平準化できます。上限・繰越の可否は要件で異なるため確認が必要です（出典: 国税庁／2025年度時点）。",
  },
  {
    label: "適用期限と認定のタイミング",
    detail:
      "本税制は適用期限が設けられ、事業計画の認定・対象設備の取得・事業供用のタイミングがすべて期限内に収まる必要があります。認定取得から設備調達・据付・供用開始までのリードタイムを逆算し、期限に間に合う計画とすることが前提です。期限は年度改正で延長・変更され得るため最新情報を確認してください（出典: 経産省・国税庁／2025年度時点）。",
  },
  {
    label: "税効果は黒字法人ほど大きい",
    detail:
      "税額控除・特別償却はいずれも『納める税が前提』の制度です。赤字法人や課税所得が小さい法人は控除しきれず効果が限定的になります（繰越で一部救済される場合あり）。安定的に黒字を出している電力多消費法人ほど、脱炭素投資の税効果が大きく出るのが本制度の特徴です。",
  },
];

const caseStudies = [
  {
    title: "事例1: 大規模製造業（取得価額3億円・高効率設備＋自家発電）",
    before:
      "Before: 老朽空調・コンプレッサーと旧型自家発電を更新予定。投資総額3億円。脱炭素投資の負担が経営課題で、補助金だけでは自己負担が重い見込み。",
    after:
      "After: SII省エネ補助（大企業1/3）で1億円を補助。残る投資にGX・CN投資促進税制を適用し、補助金相当額を控除した取得価額に対し税額控除を選択（恒久的な減税を重視）。",
    result:
      "Result: 補助金1億円＋税額控除で実質負担を大きく圧縮／高効率化で電気代▲20%前後（目安）／黒字安定企業のため税額控除の恒久効果が回収を後押し（数値は目安・税理士確認前提）。",
  },
  {
    title: "事例2: 中堅企業（取得価額1億円・PPA関連設備＋蓄電池）",
    before:
      "Before: 屋根太陽光・蓄電池の自家消費投資1億円を検討。初年度に大きな利益が出る見込みで、足元のキャッシュフロー改善を重視したい。",
    after:
      "After: 需要家主導型再エネ補助で一部を補助し、補助金相当額を控除した取得価額にGX・CN投資促進税制の特別償却（50%相当）を適用。初年度の課税所得を圧縮し資金繰りを前倒しで改善。",
    result:
      "Result: 初年度に追加償却で課税を繰延べ／補助金＋特別償却でキャッシュフローを前倒し改善／RE100対応の再エネ投資回収を加速（数値は目安・税理士確認前提）。",
  },
  {
    title: "事例3: 中小企業（取得価額3,000万円・高効率設備）",
    before:
      "Before: 高効率空調・LED等3,000万円を導入予定。中小企業として複数の優遇税制のどれが有利か判断できていない。",
    after:
      "After: GX・CN投資促進税制と中小企業経営強化税制を比較。設備区分・所得状況から有利な制度を選択（重複適用は不可）。SII省エネ補助（中小1/2）も取得価額調整のうえ併用。",
    result:
      "Result: 補助1/2＋最適税制で実質負担を圧縮／省エネで電気代削減と税効果を両取り／中小は『どの税制が有利か』の比較が回収を左右（数値は目安・税理士確認前提）。",
  },
];

const cautionItems = [
  {
    label: "税額控除と特別償却は併用不可・選択制",
    detail:
      "同一の設備について税額控除と特別償却を同時に適用することはできません。長期の恒久減税なら税額控除、足元のキャッシュフロー改善なら特別償却、と投資目的・所得見込みに応じて選択します。選択は申告で確定するため事前に税理士と方針を固めておくことが重要です。",
  },
  {
    label: "補助金併用時は取得価額の調整が必要",
    detail:
      "補助金を受けた設備に税制を適用する場合、補助金相当額を取得価額から控除（圧縮記帳等）したうえで税効果を計算するのが原則です。補助金を満額受けたうえで満額の設備価額に税制を重ねることはできず、二重取りにならないよう調整します。調整方法は税務処理が複雑なため専門家確認が必須です。",
  },
  {
    label: "事業計画の認定・適用期限を逆算する",
    detail:
      "事業計画の認定が前提となる枠組みでは、認定取得から設備取得・供用開始までのリードタイムを逆算し、適用期限内に収める必要があります。認定に時間がかかると期限に間に合わないリスクがあるため、設備調達計画と一体でスケジュールを管理します。",
  },
  {
    label: "赤字・低所得年度は効果が限定的",
    detail:
      "税額控除・特別償却はいずれも納税が前提のため、赤字や課税所得が小さい年度は効果が出にくいです。繰越で一部救済される場合もありますが、投資年度の所得見込みを踏まえて制度選択することが重要です。",
  },
  {
    label: "要件は年度改正で変わる・推測しない",
    detail:
      "対象設備・控除率・適用期限・上限は税制改正で変更されます。過去の率や条件をそのまま当てはめず、適用年度の最新の税制要件を必ず確認してください。本ページの数値は2025年度時点の目安であり、最終判断は顧問税理士・所管窓口に確認が必要です。",
  },
];

const targetEquipment = [
  {
    label: "生産工程の脱炭素化に資する設備",
    detail:
      "高効率な生産設備・脱炭素プロセスへの転換に資する設備が対象とされ得ます。製造業の生産ライン更新で省エネ・CO2削減効果が大きい設備は、本税制の中心的な対象になります（対象可否は要件確認が必要）。",
  },
  {
    label: "自家発電・コージェネレーション設備",
    detail:
      "高効率な自家発電設備・コージェネレーション（熱電併給）は、電力の脱炭素化・効率化に資する設備として対象になり得ます。電気代の自家供給化と税効果を両立できる設備です（対象可否は要件確認が必要）。",
  },
  {
    label: "PPA関連設備・自家消費型太陽光",
    detail:
      "自家消費型太陽光・PPA関連設備・パワーコンディショナ等は、再エネ調達・脱炭素に資する設備として対象になり得ます。需要家主導型再エネ補助と取得価額調整のうえ組合せると自己負担を圧縮できます（対象可否は要件確認が必要）。",
  },
  {
    label: "蓄電池・エネルギーマネジメント設備",
    detail:
      "蓄電池・BEMS/FEMS等のエネルギーマネジメント設備は、再エネの自家消費率向上・ピークカットに資する設備として対象になり得ます。再エネ設備と一体で導入すると脱炭素効果が高まります（対象可否は要件確認が必要）。",
  },
  {
    label: "高効率空調・冷凍機・産業用機器",
    detail:
      "高効率空調・冷凍機・コンプレッサー・産業用モーター等の省エネ設備は、省エネ・CO2削減効果に応じて対象になり得ます。SII省エネ補助の対象設備とも重なるため、補助金＋税制の併用設計がしやすい設備です（対象可否は要件確認が必要）。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 投資内容と所得見込みの整理",
    detail:
      "脱炭素設備の投資内容・取得価額と、投資年度以降の課税所得見込みを整理します。黒字が安定するなら税額控除、足元の資金繰り重視なら特別償却、と方針を仮置きします。省エネ診断で省エネ効果を定量化しておくと事業計画の根拠になります。",
  },
  {
    label: "STEP2: 対象設備・適用税制の確認",
    detail:
      "投資する設備が本税制の対象に該当するか、控除率・償却率・適用期限を所管窓口・税理士と確認します。中小は中小企業経営強化税制等との有利不利も比較し、最も有利な制度を選定します。",
  },
  {
    label: "STEP3: 事業計画の作成・認定申請",
    detail:
      "事業計画の認定が前提となる場合は、脱炭素効果・計画の妥当性を記述した計画を作成し認定申請します。補助金を併用する場合は補助金の事業計画とも整合させ、取得価額調整の方針を固めます。",
  },
  {
    label: "STEP4: 設備取得・供用開始",
    detail:
      "認定後に対象設備を取得・据付し、適用期限内に事業供用を開始します。補助金を併用する場合は補助金の交付決定後発注ルールも守り、スケジュールを一体管理します。",
  },
  {
    label: "STEP5: 税務申告・効果検証",
    detail:
      "確定申告で税額控除または特別償却を適用します。補助金相当額の取得価額調整・控除上限・繰越処理を税理士とともに正確に処理します。導入後は省エネ効果・電気代削減の実績を検証し、次の投資計画に反映します。",
  },
];

const energySaving = [
  {
    label: "税額控除か特別償却かを所得見込みで選ぶ",
    detail:
      "安定黒字なら恒久減税の税額控除、初年度に利益が集中するなら早期償却の特別償却が有利になりやすいです。投資年度以降の所得見込みを踏まえ、税理士とともに有利判定を行うのが採択（適用）戦略の起点です。",
  },
  {
    label: "補助金＋税制の重層活用（取得価額調整）",
    detail:
      "SII省エネ補助・需要家主導型再エネ補助で自己負担を減らし、残りの取得価額に税制を適用すると実質負担を最大限圧縮できます。二重取りにならないよう取得価額調整を正しく行うのが上級テクニックです。",
  },
  {
    label: "省エネ投資（電気を減らす）と再エネ投資（脱炭素化）を一体で",
    detail:
      "高効率設備で電気を減らし、自家消費太陽光・PPAで電気を脱炭素化する投資を一体で計画すると、電気代削減・CO2削減・税効果を同時に実現できます。RE100要請への対応にもつながります。",
  },
  {
    label: "認定・適用期限を逆算したスケジュール管理",
    detail:
      "事業計画の認定取得から設備供用までのリードタイムを逆算し、適用期限内に収める計画とします。補助金併用時は補助金の交付決定後発注ルールとも整合させ、発注タイミングを一体管理します。",
  },
  {
    label: "複数年・複数拠点での段階的な投資計画",
    detail:
      "複数拠点・大型投資は複数年計画で段階的に進め、各年度の所得・税額に応じて控除を平準化します。控除上限・繰越を踏まえ、税効果を最大化する投資配分を税理士と設計します。",
  },
];

const checklistItems = [
  "脱炭素設備の投資内容・取得価額を整理したか",
  "投資年度以降の課税所得（黒字見込み）を確認したか",
  "税額控除（恒久減税）と特別償却（早期償却）のどちらが有利か検討したか",
  "投資する設備が本税制の対象に該当するか所管窓口・税理士に確認したか",
  "中小企業経営強化税制等の他税制との有利不利を比較したか（重複適用不可）",
  "事業計画の認定が前提か、認定スケジュールを逆算したか",
  "適用期限内に設備取得・供用開始できる計画か確認したか",
  "補助金（SII・需要家主導型PPA等）との併用可否を確認したか",
  "補助金併用時の取得価額調整（二重取り回避）の方針を固めたか",
  "控除上限・繰越処理を税理士と確認したか",
  "省エネ・CO2削減効果（電気代削減）を定量化したか",
  "顧問税理士に適用可否・処理方法の最終確認を依頼したか",
];

const faqItems = [
  {
    question: "GX・CN投資促進税制とは何ですか？補助金と何が違いますか？",
    answer:
      "カーボンニュートラル投資促進税制（GX・CN投資促進税制）は、脱炭素に資する設備投資に対し、投資額の一定割合（代表的には10%相当）の税額控除、または同50%相当の特別償却を選択できる優遇税制です。補助金は『現金が交付される』のに対し、本税制は『納める税が減る』制度で、黒字法人ほど効果が出やすいのが違いです。補助金と取得価額調整のうえ併用できる場合もあります。制度の総論は補助金カテゴリの概要記事も参照してください（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    question: "10%税額控除と50%特別償却はどちらを選ぶべきですか？",
    answer:
      "目的次第です。税額控除は法人税額そのものを直接減らし、減税効果が永続的に残るため、安定的に黒字を出す法人の長期的な節税に向きます。特別償却は初年度に多く償却して課税を将来へ繰り延べる制度で、税の総額は変わらず期ズレ（早期回収）効果のため、足元のキャッシュフロー改善や初年度に利益が集中する法人に向きます。投資年度以降の所得見込みを踏まえ、顧問税理士と有利判定を行ってください（出典: 国税庁／2025年度時点）。",
  },
  {
    question: "どんな設備が対象になりますか？",
    answer:
      "生産工程の脱炭素化に資する高効率な生産設備、自家発電・コージェネレーション、自家消費型太陽光・PPA関連設備、蓄電池・エネルギーマネジメント設備、高効率空調・冷凍機等の省エネ設備が対象になり得ます。ただし対象可否・控除率は設備区分や脱炭素効果の度合い、年度改正により異なるため、適用前に所管窓口・税理士に必ず確認してください（出典: 経産省・国税庁／2025年度時点）。",
  },
  {
    question: "SII省エネ補助金などの補助金と併用できますか？",
    answer:
      "併用できる場合がありますが、補助金を受けた設備に税制を適用するときは、補助金相当額を取得価額から控除（圧縮記帳等）したうえで税効果を計算するのが原則です。補助金を満額受けつつ満額の設備価額に税制を重ねる二重取りはできません。SII省エネ補助（中小1/2・大企業1/3、上限15億円）や需要家主導型再エネ補助と組合せる場合は、取得価額調整の方法が税務的に複雑なため専門家確認が必須です（出典: SII公式・国税庁／2025年度時点）。",
  },
  {
    question: "中小企業でも使えますか？他の中小向け税制との関係は？",
    answer:
      "中小企業も活用できますが、中小企業経営強化税制など別の優遇税制（即時償却・税額控除）と重複して同一設備に適用することはできません。どの税制が有利かは設備区分・所得状況で異なるため、複数税制を比較のうえ最も有利な制度を選択するのが基本です。SII省エネ補助（中小1/2）と取得価額調整のうえ併用する設計も検討余地があります（出典: 中小企業庁・国税庁／2025年度時点）。",
  },
  {
    question: "事業計画の認定は必要ですか？手続きの流れは？",
    answer:
      "本税制は所管省庁による事業計画（事業適応計画等）の認定を前提とする枠組みがあります。脱炭素に資する設備であること・計画の妥当性が審査され、認定後に取得した対象設備が優遇対象になります。認定取得から設備取得・供用開始までのリードタイムを逆算し、適用期限内に収める必要があります。認定に時間を要するため、設備調達計画と一体でスケジュール管理してください（出典: 経産省／2025年度時点・最新要領の確認必須）。",
  },
  {
    question: "赤字の法人でもメリットはありますか？",
    answer:
      "税額控除・特別償却はいずれも『納める税が前提』の制度のため、赤字や課税所得が小さい年度は効果が限定的です。税額控除は控除しきれない超過分を翌年度以降に繰り越せる場合があり、特別償却も将来の所得と相殺できる場合がありますが、投資年度以降の所得見込みを踏まえて制度を選ぶことが重要です。所得が見込めない場合は補助金中心の設計を検討してください。",
  },
  {
    question: "税効果はどのくらいの規模になりますか？",
    answer:
      "代表的には税額控除が投資額の10%相当、特別償却が50%相当です。例えば取得価額1億円の脱炭素設備なら、税額控除では1,000万円を法人税額から直接控除、特別償却では初年度に5,000万円を追加償却できる規模感です（控除率・償却率は要件で変動）。ただし税額控除には年度の法人税額に対する上限があり、補助金併用時は取得価額調整が入るため、実際の効果は個別に試算が必要です。最終的な金額は必ず顧問税理士に確認してください（出典: 国税庁・経産省／2025年度時点）。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "経済産業省 GX・カーボンニュートラル投資促進税制", url: "https://www.meti.go.jp/" },
  { name: "国税庁 法人税（税額控除・特別償却）", url: "https://www.nta.go.jp/" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "環境省 脱炭素・再エネ導入支援", url: "https://www.env.go.jp/" },
];

export default function SubsidyGxCnInvestmentTaxPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-gx-cn-investment-tax"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "GX・CN投資促進税制 法人活用完全ガイド", url: "https://simulator.eic-jp.org/subsidy-gx-cn-investment-tax" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">GX・CN投資促進税制 法人活用完全ガイド</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            GX・CN投資促進税制 法人活用完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            GX・カーボンニュートラル投資促進税制は、脱炭素設備への投資に対し投資額10%の税額控除または50%特別償却（いずれも要件あり）を選択できる優遇税制です。本ページでは税額控除と特別償却の違いと選び方、脱炭素設備・自家発電・PPA関連・高効率設備という対象設備、事業適応計画等の認定手続き、補助金との併用（取得価額調整）、中小・大企業の使い分け、規模別の税効果試算までを、税理士確認を前提に整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>10%税額控除と50%特別償却の本質的な違いと選び方</li>
              <li>脱炭素設備・自家発電・PPA関連・高効率設備という対象設備</li>
              <li>事業適応計画等の認定手続きと適用期限の逆算</li>
              <li>補助金との併用ルール（取得価額調整・二重取り回避）</li>
              <li>規模別の税効果Before/After試算3件と活用12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページはGX・CN投資促進税制（税額控除・特別償却）に特化した深掘りガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。税制は要件が複雑で、適用可否は必ず顧問税理士にご確認ください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">GX・CN投資促進税制の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              GX・CN投資促進税制は、脱炭素に資する設備投資に対し税額控除または特別償却を認める優遇税制です。補助金が現金交付なのに対し本税制は減税であり、黒字法人ほど効果が出やすいのが特徴。補助金と取得価額調整のうえ併用すれば、脱炭素投資の実質負担をさらに圧縮できます。
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
              製造業の投資戦略は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              、ROI試算は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税額控除・特別償却・補助金との関係</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本税制の2つの優遇（税額控除・特別償却）と認定手続き、補助金・他税制との関係を、役割・効果別に整理します。投資目的・所得見込みに応じて最適な組合せを選びます。
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
            <h2 className="text-xl font-semibold text-slate-900">控除率・上限・適用期限の水準</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              控除率・償却率・控除上限・適用期限の水準と、税効果が黒字法人ほど大きい点を整理します。要件は年度改正で変わるため、最新の税制要件での確認が前提です。
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
              ※ 控除率・償却率・上限・適用期限は2025年度時点の公表情報を基に整理した目安です。年度改正で変更されるため、最新の税制要件を必ず顧問税理士・所管窓口に確認してください。出典: 経産省・国税庁・SIIから整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">規模別事例3件 — 税効果のBefore/After</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              代表的な3規模で、補助金と税制の組合せによる実質負担圧縮と税効果をBefore/After方式で提示します。いずれも公開情報・税制要件から再構成した代表シナリオで、数値は目安レンジ・税理士確認前提です。
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
            <h2 className="text-xl font-semibold text-slate-900">対象設備の具体例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本税制の対象になり得る代表的な脱炭素・省エネ設備を整理します。いずれも対象可否・控除率は要件確認が必要で、SII省エネ補助等と取得価額調整のうえ併用できる設備が多いのが特徴です。
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
              PPA関連設備は{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              、蓄電池・太陽光は{" "}
              <Link href="/subsidy-battery-solar-equipment" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">蓄電池・太陽光設備の補助金</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">適用実務の流れ（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              投資内容・所得見込みの整理から税務申告・効果検証まで、本税制適用の標準的な流れを整理します。事業計画の認定・適用期限・補助金併用時の取得価額調整に特に注意が必要です。
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
            <h2 className="text-xl font-semibold text-slate-900">税制活用の留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              本税制で失敗しないための留意点を整理します。税額控除と特別償却の選択・補助金併用時の取得価額調整・認定期限・所得見込みが成否を左右します。
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
              、補助金より契約見直しが先かは{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税効果を最大化する活用戦略</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              所得見込みでの制度選択、補助金＋税制の重層活用（取得価額調整）、省エネ＋再エネの一体投資、認定・適用期限の逆算、複数年での段階投資が税効果最大化の柱です。
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
              中小の省エネ補助は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              、データセンター戦略は{" "}
              <Link href="/subsidy-datacenter-it-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">データセンター・IT業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">GX・CN投資促進税制 活用チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              税制適用前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、税効果が下がったり適用要件を満たせなくなる可能性があります。
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
              不採択・否認対策の考え方は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで脱炭素投資後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              GX・CN投資促進税制を使って高効率設備・自家発電・太陽光を導入した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助金・税効果を加味した実質負担と投資回収を定量化し、投資の優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>高効率化・自家発電・太陽光導入後の年間削減額を試算する</li>
              <li>補助金＋税効果を加味した実質負担・投資回収年数を比較する</li>
              <li>省エネ（電気を減らす）＋再エネ（脱炭素化）の複合効果を見立てる</li>
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
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "再エネ調達の選び方と補助金組合せ。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光設備の補助金", description: "自家消費再エネ設備の補助。" },
              { href: "/subsidy-stacking-combination-rules", title: "補助金併用・重複活用ルール", description: "補助金×税制×自治体の組合せ可否。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "補助・税効果込みの回収年数比較。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "認定・採択される計画書の構成。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "否認・不採択ポイントと対策。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "生産設備の脱炭素投資（関連業種）。" },
              { href: "/subsidy-datacenter-it-strategy", title: "データセンター・IT業の補助金活用戦略", description: "高効率設備・自家発電投資（関連業種）。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "投資前に契約見直しが先かを判断。" },
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小向けの補助・税制の進め方。" },
              { href: "/corporate-ppa-overview", title: "コーポレートPPAの全体像", description: "再エネ調達の基本（共通）。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="GX・CN投資促進税制の活用と電気代削減を専門家に相談する"
            description="脱炭素設備の税額控除・特別償却の選択、補助金との併用（取得価額調整）、事業計画の認定は税務・申請の専門知識を要します。まずシミュレーターで削減余地を試算し、税効果の最終判断は顧問税理士・専門家へご相談ください。"
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
            heading="GX・CN投資促進税制の活用、専門家に相談しませんか？"
            description="脱炭素設備の選定、税額控除と特別償却の有利判定、補助金との併用設計は専門知識を要し、適用可否は税理士確認が必須です。エネルギー情報センターは中立的立場で脱炭素投資・電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
