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
  "補助金併用・重複活用ルール 完全ガイド｜国×自治体×SIIの組合せ可否マトリクスと重層活用の実務";
const pageDescription =
  "補助金の併用・重複活用に特化した実務ガイド。同一設備への国庫補助の重複は原則不可というルールを起点に、国補助×自治体補助×SII×税制の組合せ可否マトリクス、設備・経費の切り分け、重層活用で実質負担を最大限圧縮するテクニックを、併用成功事例・申請手順・NG例まで整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "補助金 併用",
    "補助金 重複 ルール",
    "国 自治体 補助金 併用",
    "SII 補助金 併用",
    "補助金 GX税制 併用",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/subsidy-stacking-combination-rules",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/subsidy-stacking-combination-rules",
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
    label: "併用・重複活用の基本ルール",
    detail:
      "補助金の併用を考える際の大原則は『同一の設備・経費に複数の国庫補助を重複して受けることは原則不可』という点です。一方で、対象設備・経費を切り分ける、財源（国・自治体）が異なる、補助金と税制（GX・CN投資促進税制）を組合せる、といった条件を満たせば併用可能なケースがあります。本ページではこの組合せ可否を整理し、実質負担を最大限圧縮する重層活用の考え方をまとめます（出典: SII公式・経産省・中小企業庁・各自治体から整理／2025年度時点）。",
  },
  {
    label: "総論との使い分け（カニバリ回避）",
    detail:
      "本ページは『補助金の併用・重複活用ルール』に特化した実務ガイドです。各補助金制度の概要・採択率の総論は別途整理しています。本ページでは国×自治体×SII×税制の組合せ可否マトリクス、設備・経費の切り分けの考え方、重層活用テクニックという、横断的・実務的な論点に焦点を当てます。併用可否は補助金ごとに異なり最終判断は所管窓口・税理士確認が必須です。",
  },
  {
    label: "なぜ重複が原則不可なのか",
    detail:
      "補助金は国民の税金を財源とし、同一経費に複数の国庫補助を充てると公費の二重給付になるため、原則として認められません。多くの補助金の公募要領には『国の他の補助金と重複して交付を受けていない』旨の誓約・確認欄があり、違反が判明すると交付決定取消・返還の対象になります。重層活用は『重複しない範囲で組合せる』ことが前提です。",
  },
  {
    label: "財源が異なれば併用可のケースがある",
    detail:
      "国と自治体は財源が異なるため、自治体補助が『国補助の対象外経費・自己負担分への上乗せ・横出し』を認めている場合は併用可能なケースがあります。ただし自治体側が『国補助との併用不可』を要件にしている場合も多く、自治体の補助要綱で必ず確認が必要です。一般化せず個別に窓口確認する姿勢が安全です。",
  },
  {
    label: "補助金と税制は性質が異なる",
    detail:
      "補助金（支出の一部を給付）と税制優遇（GX・CN投資促進税制の税額控除・特別償却）は性質が異なり、補助金と税制の併用が認められるケースがあります。ただし補助金で取得価額が圧縮される分、税制の控除対象となる取得価額も補助金相当額を差し引いて調整されるのが原則です。二重に得をする設計にはならない点に注意が必要です（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
];

const mainSubsidies = [
  {
    name: "パターンA: 設備・経費を分けて国補助同士を併用",
    role: "国×国／設備の切り分け",
    detail:
      "例えば自動倉庫を国交省物流補助、冷凍機をSII省エネ補助、と対象設備を明確に分ければ、同一設備への重複にならず併用可能なケースがあります。鍵は『どの経費をどの補助金で申請するか』を見積段階で切り分け、重複が生じない構成にすること。経費の按分根拠を明確に残す必要があります（出典: 各補助金事務局／2025年度時点・要事前確認）。",
  },
  {
    name: "パターンB: 国補助＋自治体補助の上乗せ・横出し",
    role: "国×自治体／財源が異なる",
    detail:
      "国補助の自己負担分に自治体補助を上乗せ、または国補助の対象外設備に自治体補助を横出しする組合せ。財源が異なるため認められるケースがありますが、自治体側が国補助との併用を禁じている場合も多いため、自治体の補助要綱で必ず確認します（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    name: "パターンC: 補助金＋GX・CN投資促進税制",
    role: "補助金×税制／取得価額調整",
    detail:
      "省エネ設備をSII補助で取得し、残りの自己負担分にGX・CN投資促進税制（税額控除10%または特別償却50%）を適用する組合せ。補助金で圧縮された取得価額が税制の対象額となるよう調整されるのが原則。補助金と税制の併用可否・調整方法は税理士・所轄税務署への確認が必須です（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    name: "パターンD: 補助金＋PPA（初期投資ゼロ）",
    role: "補助金×PPA／投資主体が異なる",
    detail:
      "太陽光をPPA事業者が保有するオンサイトPPAでは、設備の所有者がPPA事業者となるため、需要家側の省エネ補助とは投資主体が分かれます。PPA設備に対する補助はPPA事業者側で活用され、需要家側は省エネ設備（冷凍機・空調・LED）で補助を活用する、という棲み分けが可能なケースがあります（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    name: "パターンE: 中小向け補助＋自治体補助の重ね取り",
    role: "中小×自治体／中小に手厚い構成",
    detail:
      "中小企業はSII省エネ補助（中小1/2）やものづくり補助金等の国補助に、自治体の中小向け省エネ補助を組合せると実質負担を大きく圧縮できます。自治体補助は中小限定・小規模事業者優遇のものが多く、重ね取りの余地が大きい一方、併用条件は自治体ごとに大きく異なります（出典: 中小企業庁・各自治体／2025年度時点）。",
  },
  {
    name: "パターンF: 複数年・複数拠点での分散申請",
    role: "時間軸での分散／同時重複の回避",
    detail:
      "同一経費の同時重複が問題になるため、設備・拠点・年度を分けて複数年計画で段階的に申請すれば、各申請が独立し重複問題を回避しつつ複数の補助金を活用できます。拠点AはSII、拠点Bは自治体補助、というように対象を分けるのも有効な重層活用です（出典: 各補助金事務局／2025年度時点）。",
  },
];

const subsidyRates = [
  {
    label: "組合せ可否マトリクスの基本",
    detail:
      "国補助×国補助は『同一設備は不可・設備を分ければ可のケースあり』、国補助×自治体補助は『財源が異なれば可のケースあり（自治体要綱次第）』、補助金×税制は『取得価額調整のうえ可のケースあり』、補助金×PPAは『投資主体が分かれれば可』が大枠です。いずれも個別の公募要領・補助要綱・税制要件で最終確認が必須で、一般化した判断は危険です（出典: SII公式・経産省・中小企業庁・各自治体／2025年度時点）。",
  },
  {
    label: "補助率の上限（重複給付の天井）",
    detail:
      "併用しても、特定経費に対する補助の合計が一定割合を超えないよう上限が設けられているケースがあります。例えばSII省エネ補助は中小1/2・大企業1/3が基本ですが、自治体補助を上乗せしても合計補助率が対象経費の一定割合に収まるよう調整される設計が一般的。重複給付の天井を超えないことが前提です（出典: SII公式・各自治体／2025年度時点）。",
  },
  {
    label: "併用判断は公募回・年度で変動",
    detail:
      "併用可否のルールは補助金・公募回・年度で変わることがあります。前年度に併用できた組合せが今年度は不可になる場合もあるため、固定的に考えず、申請時点の最新の公募要領・補助要綱で確認することが重要です。採択率と同様に併用ルールも『推測せず公表情報で確認』が原則です。",
  },
  {
    label: "重層活用の費用対効果",
    detail:
      "重層活用が成立すると、実質負担を国補助1/2＋自治体補助の上乗せ＋税制控除で大きく圧縮でき、補助後の投資回収年数を短縮できます。ただし手続きが複雑化し、按分根拠・実績報告の負担も増えるため、得られる圧縮額と事務負担のバランスを見て組合せ範囲を決めるのが実務的です（出典: 各補助金事務局・各自治体／2025年度時点・個別案件で変動）。",
  },
];

const caseStudies = [
  {
    title: "事例1: 国×国を設備で切り分け併用（特別高圧 大型物流拠点）",
    before:
      "Before: 冷凍機更新と自動倉庫増設を同時に検討。年間電気代約16億円。単一の補助金では対象範囲が一部に限られ投資負担が課題だった。",
    after:
      "After: 冷凍機をSII省エネ補助（中小1/2相当の枠）、自動倉庫を国交省物流補助、と対象設備を見積段階で明確に切り分けて重複を回避。経費按分の根拠書類を整備し両補助の併用を実現。",
    result:
      "Result: 設備を分けたことで両補助が成立し実質負担を圧縮／補助後の投資回収 3〜4年（目安）／重複給付の指摘を受けず交付決定（数値は公開事例から再構成した目安）。",
  },
  {
    title: "事例2: 国補助＋自治体補助＋税制の三層活用（高圧 中規模工場）",
    before:
      "Before: 高効率空調・LED・受変電設備の更新を検討。投資5,000万円。国補助1/2だけでは自己負担2,500万円が残り、踏み切れずにいた。",
    after:
      "After: 設備本体をSII省エネ補助（1/2）、自己負担分の一部に自治体の省エネ設備補助を上乗せ（自治体要綱で国併用可を確認）、残る取得価額にGX・CN投資促進税制の税額控除を適用（取得価額は補助金相当額を差し引いて調整）。",
    result:
      "Result: 実質負担を大きく圧縮／補助＋税制で投資回収を短縮（目安）／併用可否は自治体窓口と税理士に事前確認のうえ実施（数値は公開事例から再構成した目安）。",
  },
  {
    title: "事例3: 複数年・複数拠点での分散併用（中小 多店舗）",
    before:
      "Before: 3拠点の空調・冷凍設備を一括更新したいが、同時申請で重複指摘のリスクと事務負担が懸念された。",
    after:
      "After: 拠点AはSII省エネ補助、拠点Bは自治体の中小向け補助、拠点Cは翌年度に別公募、と拠点・年度を分けて分散申請。各申請が独立し同時重複を回避しつつ、各拠点で最適な補助を獲得。",
    result:
      "Result: 重複問題を避けつつ3拠点すべてで補助を活用／キャッシュフロー負担を複数年で平準化／補助後の投資回収を各拠点で短縮（数値は公開事例から再構成した目安）。",
  },
];

const cautionItems = [
  {
    label: "同一設備・同一経費への国庫補助の重複は原則不可",
    detail:
      "最も基本的なNG例。同じ冷凍機・同じ空調に対し、SII省エネ補助と別の国庫補助を二重に申請するのは原則不可です。多くの公募要領に重複受給を禁じる誓約欄があり、違反すると交付決定取消・返還の対象になります。",
  },
  {
    label: "自治体補助の『国併用不可』要件の見落とし",
    detail:
      "自治体補助のなかには『国の補助金と併用する場合は対象外』と明記しているものがあります。国併用可と思い込んで申請すると不交付になるため、自治体の補助要綱の併用条項を必ず確認します。",
  },
  {
    label: "税制の取得価額調整を無視した二重取り",
    detail:
      "補助金で取得価額が圧縮された分を無視し、補助前の全額を税制の控除対象にするのはNG。GX・CN投資促進税制では補助金相当額を差し引いた取得価額が控除対象となるのが原則で、二重の利益にはなりません。税理士確認が必須です。",
  },
  {
    label: "経費按分の根拠書類の不備",
    detail:
      "設備・経費を分けて併用する場合、どの経費をどの補助金で申請したかの按分根拠が不明確だと重複と判断されるリスクがあります。見積・契約・支払の書類を補助金ごとに整理し、按分の根拠を残すことが重要です。",
  },
  {
    label: "併用ルールを推測で判断しない",
    detail:
      "併用可否は補助金・公募回・年度で変動します。前例や一般論で『たぶん併用できる』と推測して進めるのは危険。申請時点の最新の公募要領・補助要綱・税制要件で確認し、最終判断は所管窓口・税理士に仰ぐのが安全です。",
  },
];

const targetEquipment = [
  {
    label: "省エネ設備（冷凍機・空調）＋自動化設備",
    detail:
      "省エネ設備をSII省エネ補助、自動化・省力化設備を国交省物流補助やものづくり補助金、と切り分けやすい組合せ。設備の機能・目的が異なるため経費按分の根拠を立てやすく、国×国の併用が成立しやすい代表パターンです。",
  },
  {
    label: "省エネ設備（需要家側）＋PPA太陽光（事業者側）",
    detail:
      "需要家側の冷凍機・空調・LEDで省エネ補助、太陽光はPPA事業者が保有し事業者側で補助活用、と投資主体を分ける組合せ。所有者・投資主体が異なるため重複が生じにくく、RE100対応と省エネを両立できます。",
  },
  {
    label: "国補助対象設備＋自治体補助対象設備",
    detail:
      "国補助の対象外となる周辺設備（計測機器・付帯工事の一部等）を自治体補助の横出しで賄う組合せ。財源が異なり対象も分かれるため併用しやすいが、自治体要綱の併用条項確認が前提です。",
  },
  {
    label: "本体設備（補助金）＋自己負担分（税制）",
    detail:
      "本体設備をSII補助で取得し、補助対象外の取得価額部分にGX・CN投資促進税制を適用する組合せ。取得価額調整を前提に補助金と税制を重ねられる代表パターン。税制要件・調整方法の確認が必須です。",
  },
  {
    label: "複数拠点・複数年で分けた設備群",
    detail:
      "拠点・年度を分けて申請する設備群。同時重複を避けつつ各拠点で最適な補助を獲得でき、事務負担も分散できます。多拠点・段階投資を計画する事業者に適した重層活用の構成です。",
  },
];

const applicationFlow = [
  {
    label: "STEP1: 投資内容と対象経費の棚卸し",
    detail:
      "まず導入する設備・工事・付帯費用を経費単位で棚卸しします。どの経費が省エネ設備、自動化設備、PPA設備、付帯費用かを分類し、補助金ごとに切り分けられる粒度まで分解することが併用検討の出発点です。",
  },
  {
    label: "STEP2: 各補助金・税制の対象範囲と併用条項を確認",
    detail:
      "活用候補の補助金・税制の公募要領・補助要綱・税制要件を確認し、対象経費と併用可否（重複禁止条項・国併用条項・取得価額調整）を整理します。自治体補助は補助要綱の併用条項を特に注意して確認します。",
  },
  {
    label: "STEP3: 組合せ可否マトリクスで構成を設計",
    detail:
      "国×国（設備分け）、国×自治体（上乗せ・横出し）、補助金×税制（取得価額調整）、補助金×PPA（主体分け）、複数年・複数拠点（分散）の各パターンから、自社に成立する組合せを設計します。重複給付の天井を超えない構成にします。",
  },
  {
    label: "STEP4: 所管窓口・税理士への事前確認",
    detail:
      "設計した組合せの併用可否を、各補助金の所管窓口・自治体窓口・税理士・所轄税務署に事前確認します。併用ルールは推測で判断せず、申請前に書面・記録の残る形で確認しておくのが安全です。",
  },
  {
    label: "STEP5: 按分根拠を整え申請・実績報告",
    detail:
      "見積・契約・支払を補助金ごとに整理し、経費按分の根拠を明確にして各補助金を申請。交付後は各補助金の実績報告を行い、重複していないことを書類で示せるよう管理します。",
  },
];

const energySaving = [
  {
    label: "設備の切り分けで国×国の併用余地を最大化",
    detail:
      "同一設備への重複は不可でも、省エネ設備・自動化設備・付帯設備を機能で切り分ければ複数の国補助を成立させられます。見積段階から経費を補助金ごとに分解し、按分根拠を残すのが重層活用の基本テクニックです。",
  },
  {
    label: "自治体補助の上乗せ・横出しで自己負担を圧縮",
    detail:
      "国補助の自己負担分や対象外設備に、財源の異なる自治体補助を重ねると実質負担を大きく下げられます。自治体補助は中小優遇・地域限定で見落とされがちなので、拠点所在地の自治体補助を網羅的に洗い出すのが有効です。",
  },
  {
    label: "補助金＋税制の取得価額調整を正しく設計",
    detail:
      "補助金で圧縮された取得価額にGX・CN投資促進税制を適用すれば、補助＋税制で実質負担をさらに圧縮できます。取得価額調整を正しく行えば適法に重ねられるため、税理士と連携して設計するのが上級テクニックです。",
  },
  {
    label: "PPAで投資主体を分けて補助を二重に活かす",
    detail:
      "太陽光をPPA事業者保有とすれば、PPA設備の補助は事業者側、省エネ設備の補助は需要家側、と投資主体を分けられます。RE100対応の再エネと省エネ設備の両方で補助を活かす重層活用です。",
  },
  {
    label: "複数年・複数拠点で分散し同時重複を回避",
    detail:
      "拠点・年度を分けて段階的に申請すれば、各申請が独立し同時重複の指摘を避けつつ複数補助を獲得できます。キャッシュフローの平準化にもつながり、多拠点・段階投資の事業者に最適な重層活用です。",
  },
];

const checklistItems = [
  "導入する設備・工事・付帯費用を経費単位で棚卸ししたか",
  "同一設備・同一経費への国庫補助の重複がないことを確認したか",
  "各補助金の公募要領で重複禁止条項を確認したか",
  "自治体補助の補助要綱で『国併用可否』の条項を確認したか",
  "補助金×税制（GX・CN）の取得価額調整を理解したか",
  "PPA活用時に投資主体（需要家／PPA事業者）を整理したか",
  "経費按分の根拠書類（見積・契約・支払）を整備したか",
  "重複給付の天井（合計補助率の上限）を超えていないか確認したか",
  "併用可否を所管窓口・自治体窓口に事前確認したか",
  "税制適用の可否・調整方法を税理士・税務署に確認したか",
  "併用ルールは最新の公募要領・要綱で確認したか（推測しない）",
  "複数年・複数拠点での分散申請の余地を検討したか",
];

const faqItems = [
  {
    question: "補助金は複数を併用できますか？",
    answer:
      "条件次第で併用できます。基本ルールは『同一の設備・同一経費に複数の国庫補助を重複して受けることは原則不可』ですが、対象設備・経費を切り分ける、財源の異なる自治体補助を上乗せ・横出しする、補助金と税制（GX・CN投資促進税制）を取得価額調整のうえ重ねる、PPAで投資主体を分ける、複数年・複数拠点で分散する、といった構成なら併用可能なケースがあります。併用可否は補助金・公募回・年度で変わるため、最終判断は所管窓口・税理士確認が必須です（出典: SII公式・経産省・中小企業庁・各自治体から整理／2025年度時点）。",
  },
  {
    question: "国の補助金同士は併用できますか？",
    answer:
      "同一設備への重複は原則不可ですが、対象設備・経費を明確に分ければ併用可能なケースがあります。例えば自動倉庫を国交省物流補助、冷凍機をSII省エネ補助、と設備を切り分ける方法です。鍵は見積段階から経費を補助金ごとに分解し、どの経費をどの補助金で申請したかの按分根拠を残すこと。同一経費への二重申請は交付決定取消・返還の対象になるため避けてください（出典: 各補助金事務局／2025年度時点・要事前確認）。",
  },
  {
    question: "国の補助金と自治体の補助金は併用できますか？",
    answer:
      "国と自治体は財源が異なるため、自治体補助が国補助の自己負担分への上乗せや対象外設備への横出しを認めていれば併用可能なケースがあります。ただし自治体補助のなかには『国の補助金と併用する場合は対象外』と明記しているものも多く、自治体の補助要綱の併用条項を必ず確認する必要があります。一般化せず、拠点所在地の自治体窓口に個別確認するのが安全です（出典: 各自治体産業労働部から整理／2025年度時点）。",
  },
  {
    question: "補助金とGX・CN投資促進税制は併用できますか？",
    answer:
      "併用が認められるケースがあります。ただし補助金で取得価額が圧縮される分、税制（税額控除10%または特別償却50%）の控除対象となる取得価額も補助金相当額を差し引いて調整されるのが原則です。補助前の全額を税制対象にする二重取りはできません。併用可否・取得価額の調整方法は要件確認が必須で、税理士・所轄税務署に確認のうえ適用してください（出典: 経産省・国税庁／2025年度時点・要件確認必須）。",
  },
  {
    question: "重複受給が判明するとどうなりますか？",
    answer:
      "原則として交付決定の取消・補助金の返還の対象になります。多くの補助金の公募要領には『国の他の補助金と重複して交付を受けていない』旨の誓約・確認欄があり、虚偽があれば返還に加えて以後の申請に影響する場合もあります。重層活用はあくまで『重複しない範囲で組合せる』ことが前提で、按分根拠を書類で示せるように管理することが重要です。",
  },
  {
    question: "PPAで太陽光を入れる場合の補助はどう整理しますか？",
    answer:
      "オンサイトPPAでは設備の所有者がPPA事業者になるため、太陽光設備の補助はPPA事業者側で活用され、需要家側は省エネ設備（冷凍機・空調・LED）で補助を活用する、という投資主体の棲み分けが可能なケースがあります。所有者・投資主体が異なれば重複が生じにくく、RE100対応の再エネと省エネ設備の双方で補助を活かす重層活用になります。契約形態により扱いが異なるため事前確認が必要です（出典: 経産省・環境省／2025年度時点）。",
  },
  {
    question: "併用するとどのくらい実質負担を圧縮できますか？",
    answer:
      "組合せが成立すれば、例えばSII省エネ補助（中小1/2）に自治体補助の上乗せ、自己負担分にGX・CN税制の控除を重ねることで実質負担を大きく圧縮できます。ただし重複給付の天井（合計補助率の上限）を超えない設計が前提で、具体的な圧縮額は補助金・自治体・税制の要件と個別案件で変動します。数値は推測せず、各窓口の公表情報と税理士確認で算定してください（出典: 各補助金事務局・各自治体／2025年度時点・個別案件で変動）。",
  },
  {
    question: "併用の検討はどこに相談すればよいですか？",
    answer:
      "併用可否は補助金・公募回・年度で変動し、設備の切り分けや税制の取得価額調整など専門的な判断を伴います。各補助金の所管窓口・自治体の補助担当窓口に併用条項を確認し、税制が絡む場合は税理士・所轄税務署に確認するのが基本です。設備選定と補助金構成を一体で設計する必要があるため、中立的な専門家に相談して全体最適な組合せを設計するのが安全です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・産業別エネルギー）", url: "https://pps-net.org/unit" },
  { name: "SII（環境共創イニシアチブ）省エネ補助金", url: "https://sii.or.jp/" },
  { name: "経済産業省 GX・脱炭素関連支援", url: "https://www.meti.go.jp/" },
  { name: "中小企業庁 補助金・支援制度", url: "https://www.chusho.meti.go.jp/" },
  { name: "国税庁 税制（投資促進税制）", url: "https://www.nta.go.jp/" },
];

export default function SubsidyStackingCombinationRulesPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url="https://simulator.eic-jp.org/subsidy-stacking-combination-rules"
        datePublished="2026-05-29"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org" },
          { name: "補助金・助成金を知る", url: "https://simulator.eic-jp.org/articles/subsidies" },
          { name: "補助金併用・重複活用ルール", url: "https://simulator.eic-jp.org/subsidy-stacking-combination-rules" },
        ]}
        faq={faqItems}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles/subsidies" className="underline-offset-2 hover:underline">補助金・助成金を知る</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">補助金併用・重複活用ルール</span>
        </nav>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            補助金併用・重複活用ルール 完全ガイド
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            同一設備への国庫補助の重複は原則不可。一方で対象設備・経費を切り分ける、財源の異なる自治体補助を重ねる、補助金と税制を組合せる、といった条件を満たせば併用可能なケースがあります。本ページでは国×自治体×SII×税制の組合せ可否マトリクス、設備・経費の切り分け、重層活用で実質負担を最大限圧縮するテクニックを、併用成功事例・申請手順・NG例まで整理します。
          </p>
          <AuthorBadge publishedAt="2026-05-29" updatedAt="2026-05-29" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>同一設備への国庫補助の重複が原則不可という基本ルール</li>
              <li>国×国・国×自治体・補助金×税制・補助金×PPAの組合せ可否</li>
              <li>重層活用で実質負担を圧縮した併用成功事例3件（補助前後）</li>
              <li>設備・経費の切り分けと按分根拠の整え方</li>
              <li>併用検討のための12項目チェックリスト</li>
            </ul>
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-600">
            ※ 本ページは補助金の併用・重複活用に特化した実務ガイドです。補助金制度全体の概要は{" "}
            <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">SII省エネ補助金</Link>
            、{" "}
            <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金スケジュールと採択率</Link>
            を参照してください。
          </p>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金併用・重複活用の全体像</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用の大原則は『同一設備・同一経費への国庫補助の重複は原則不可』。一方で設備の切り分け・財源の違い・補助金と税制の性質の違いを活かせば、重複しない範囲で複数の支援を重層的に活用できます。まず基本ルールを押さえ、組合せ可否を正しく見極めることが重要です。
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
              自治体補助の探し方は{" "}
              <Link href="/subsidy-local-government-list" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体補助金リスト</Link>
              、{" "}
              <Link href="/subsidy-municipality-energy-examples" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">自治体エネルギー補助の事例</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用可否の主要パターン（6類型）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              補助金を重層活用する代表的な6つのパターンを、組合せの軸（国×国／国×自治体／補助金×税制等）別に整理します。自社の投資内容に当てはまるパターンから検討します。
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
            <h2 className="text-xl font-semibold text-slate-900">組合せ可否マトリクスと補助率の天井</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              組合せ可否の大枠と、重複給付の天井（合計補助率の上限）・費用対効果を整理します。併用ルールは公募回・年度で変動するため、最新の公募要領・補助要綱での確認が前提です。
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
              ※ 併用可否・補助率・天井は2025年度時点の公表情報を基に整理した目安です。最新の公募要領・補助要綱・税制要件を必ず確認してください。出典: SII公式・経産省・中小企業庁・各自治体から整理。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用成功事例3件 — 補助前後の実質負担（Before/After）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              代表的な3つの併用構成で、重層活用による実質負担圧縮と投資回収の改善をBefore/After方式で提示します。いずれも公開事例から再構成した代表シナリオで、数値は目安レンジです。
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
              補助前後の投資回収の試算手法は{" "}
              <Link href="/subsidy-roi-payback-calculation" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金活用後のROI・投資回収試算ガイド</Link>
              で詳しく解説しています。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用しやすい設備の組合せ</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              重複が生じにくく併用しやすい設備の組合せを整理します。機能・目的・投資主体が分かれる設備は経費を切り分けやすく、重層活用が成立しやすいのが特徴です。
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
              PPAの併用整理は{" "}
              <Link href="/subsidy-ppa-vppa-detail" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">PPA/VPPA関連補助金の詳細</Link>
              、税制は{" "}
              <Link href="/subsidy-gx-cn-investment-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">GX・CN投資促進税制 完全ガイド</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用申請の手順（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              経費の棚卸しから按分根拠を整えた申請・実績報告まで、併用申請の標準的な流れを整理します。設備の切り分けと所管窓口・税理士への事前確認が成否を左右します。
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
              、申請・交付の書類は{" "}
              <Link href="/subsidy-application-approval-document" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金申請・交付の書類ガイド</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">併用NG例・留意点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用で失敗しないためのNG例・留意点を整理します。同一設備への重複・自治体要件の見落とし・税制の二重取り・按分根拠の不備が代表的な失敗パターンです。
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
              不採択時の対策は{" "}
              <Link href="/subsidy-rejection-reasons-countermeasures" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金不採択の理由と対策</Link>
              、優先順位づけは{" "}
              <Link href="/subsidy-vs-contract-review-priority" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">補助金と契約見直しの優先順位</Link>
              。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">重層活用の最大化テクニック</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              設備の切り分け、自治体補助の上乗せ・横出し、補助金×税制の取得価額調整、PPAでの主体分け、複数年・複数拠点での分散が重層活用の柱です。重複給付の天井を超えない範囲で組合せ、実質負担を最大限圧縮します。
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
              中小の進め方は{" "}
              <Link href="/subsidy-sme-energy-saving-patterns" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">中小企業の省エネ補助活用パターン</Link>
              、物流業の例は{" "}
              <Link href="/subsidy-logistics-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">物流業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金併用 検討チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              併用を検討する前にこのチェックリストで自社状況を整理しましょう。1項目でも未確認があれば、重複指摘・不交付・返還のリスクが高まります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業の併用例は{" "}
              <Link href="/subsidy-manufacturing-strategy" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">製造業の補助金活用戦略</Link>
              も参照ください。
            </p>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで重層活用後の電気代を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              複数の補助金・税制を重層活用して設備を更新した場合の電気代削減効果を、シミュレーターで自社条件に当てはめて試算できます。補助前後の投資回収・年間削減額を定量化し、どの組合せで申請するかの優先順位づけに活用できます。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約条件での年間電気代・上振れリスクを確認する</li>
              <li>省エネ設備更新後の年間削減額を試算する</li>
              <li>補助前後・重層活用後の投資回収年数を比較する</li>
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
              { href: "/subsidy-gx-cn-investment-tax", title: "GX・CN投資促進税制 完全ガイド", description: "補助金×税制の取得価額調整。" },
              { href: "/subsidy-local-government-list", title: "自治体補助金リスト", description: "国補助に上乗せする自治体補助の探し方。" },
              { href: "/subsidy-municipality-energy-examples", title: "自治体エネルギー補助の事例", description: "上乗せ・横出しの具体例。" },
              { href: "/subsidy-ppa-vppa-detail", title: "PPA/VPPA関連補助金の詳細", description: "PPAでの投資主体の分け方。" },
              { href: "/subsidy-business-plan-writing-guide", title: "補助金事業計画書の書き方", description: "併用時の按分根拠の示し方。" },
              { href: "/subsidy-application-approval-document", title: "補助金申請・交付の書類ガイド", description: "重複していないことを示す書類管理。" },
              { href: "/subsidy-roi-payback-calculation", title: "補助金活用後のROI・投資回収試算", description: "重層活用後の回収年数比較。" },
              { href: "/subsidy-rejection-reasons-countermeasures", title: "補助金不採択の理由と対策", description: "不採択ポイントと再申請戦略。" },
              { href: "/subsidy-vs-contract-review-priority", title: "補助金と契約見直しの優先順位", description: "補助金と料金見直しの使い分け。" },
              { href: "/subsidy-sme-energy-saving-patterns", title: "中小企業の省エネ補助活用パターン", description: "中小の重ね取りの進め方。" },
              { href: "/subsidy-manufacturing-strategy", title: "製造業の補助金活用戦略", description: "業種別の併用構成の例。" },
              { href: "/articles/subsidies", title: "補助金・助成金カテゴリ（一覧）", description: "補助金関連記事のハブ。" },
              { href: "/articles/by-industry", title: "業種別の電気料金見直し（一覧）", description: "業種別ガイドのハブ。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="補助金の併用・重層活用を専門家に相談する"
            description="国×自治体×SII×税制の組合せは、設備の切り分け・按分根拠・取得価額調整など専門的な判断を伴います。まずシミュレーターで削減余地を試算し、併用構成の最適化は中立的な専門家へご相談ください。"
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
            heading="補助金の併用・重層活用、専門家に相談しませんか？"
            description="設備・経費の切り分け、国×自治体×税制の組合せ可否、按分根拠の整え方は専門知識を要します。エネルギー情報センターは中立的立場で補助金の重層活用と電気代削減の判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
