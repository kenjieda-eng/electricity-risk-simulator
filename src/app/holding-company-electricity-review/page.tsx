import type { Metadata } from "next";
import Link from "next/link";
import ReadingProgressBar from "../../components/market-data/ReadingProgressBar";
import PrintButton from "../../components/market-data/PrintButton";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import SourcesAndFaq from "../../components/simulator/SourcesAndFaq";
import { ArticleJsonLd } from "../../components/seo/JsonLd";
import ContactCtaCard from "../../components/contact/ContactCtaCard";
import AuthorBadge from "../../components/market-data/AuthorBadge";
import TableOfContents from "../../components/market-data/TableOfContents";

const pageTitle =
  "持株会社化に伴う電力契約の見直し完全ガイド｜デマンド合算可否・グループ調達集約・ESP設立の実務";
const pageDescription =
  "純粋持株会社・事業持株会社化に伴う電力契約の再設計を実務的に整理。各事業会社の契約単位・デマンド合算の可否・グループ調達集約・エネルギーマネジメント会社（ESP）設立の判断軸を、実務シナリオ3パターンと固有データ表で解説します。";
const pageUrl = "https://simulator.eic-jp.org/holding-company-electricity-review";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "持株会社 電力契約",
    "ホールディングス 電気代",
    "デマンド合算 可否",
    "グループ電力調達",
    "ESP エネルギーサービス",
    "法人電気料金",
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人電気料金ナビ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/api/og/ma-organizational-change", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/ma-organizational-change"],
  },
};

const orgStructures = [
  {
    type: "純粋持株会社（ピュア・ホールディングス）",
    detail:
      "持株会社自身は事業を営まず、子会社株式の保有・グループ統括のみに専念。各事業会社は独立した法人格を持ち、電力契約も各社名義が原則。グループ全体の電力調達を集約する場合でも、契約名義の付替や統合は会社法・税務上の整理が必要になります。",
  },
  {
    type: "事業持株会社（オペレーティング・ホールディングス）",
    detail:
      "持株会社自身も事業を営みつつ、子会社を統括する形態。電力契約は持株会社本体分と子会社分が並存し、名義統合・調達集約の論点は純粋持株会社と概ね共通です。",
  },
  {
    type: "中間持株会社・ジョイントベンチャー型",
    detail:
      "M&A・再編で生まれる中間持株会社や、合弁子会社が並存するグループ。電力契約名義の整理が後回しになりがちで、再編後3〜6ヶ月以内にエネルギー管理体制を棚卸しすることが推奨されます。",
  },
];

const demandAggregationRules = [
  {
    label: "同一需要場所・同一名義の原則",
    rule: "可能",
    detail:
      "託送供給等約款上、同一需要場所かつ同一契約名義であれば1引込・1契約への統合が可能。隣接敷地でも分電盤・引込が別なら原則として別契約扱い。",
  },
  {
    label: "同一敷地・別法人名義（持株会社化後）",
    rule: "原則不可",
    detail:
      "持株会社化で法人格が分かれると、たとえ同一敷地・同一建物であっても、契約名義が異なる以上はデマンド合算不可。事業承継時に名義移管を行うか、ESP（後述）を介在させる方式で実質的に合算する設計が必要。",
  },
  {
    label: "テナント・サブメーター運用",
    rule: "条件付き可",
    detail:
      "ビル一括契約＋テナントへのサブメーター按分は、ビルオーナー名義での一本化が可能。持株会社が不動産保有会社を持つ場合、当該会社名義に電力契約を集約し、各事業会社へは内部請求とする方式が現実的。",
  },
  {
    label: "自営線・特定供給による合算",
    rule: "条件付き可",
    detail:
      "工場・大規模敷地内に自営線を敷設し、グループ各社へ特定供給する設計であれば、引込点を1つに集約してデマンド合算と同等の効果が出せる。ただし電気事業法の特定供給許可が必要で、設計・申請コストが大きい。",
  },
  {
    label: "オンサイトPPA・自家発による融通",
    rule: "限定可",
    detail:
      "自家発電・オンサイトPPAでグループ各社の屋根を活用する場合、需要家連携PPA等のスキームで実質融通が可能。FIT/FIP電源は原則対象外、自家消費型のみが対象。",
  },
];

const contractIntegrationSim = [
  {
    label: "個別契約のまま継続（変更なし）",
    detail:
      "5社×高圧契約500kWで各契約・各検針・各請求。年間グループ電気代3.2億円。基本料金（1,650円/kW・月）×500kW×12ヶ月×5社=4,950万円。デマンドピークが各社バラバラに発生し、ピーク管理は分散運用。",
  },
  {
    label: "グループ調達集約（名義は各社・単価交渉のみ統合）",
    detail:
      "持株会社主導で新電力5〜10社と一括相見積。契約名義は各事業会社のまま、単価・条件のみグループ統一。年間電気代3.2億円→2.9億円（▲9%、▲2,900万円）。基本料金は不変、電力量料金が単価交渉で▲1.5〜2.5円/kWh。最も実務的かつリスクの低い選択肢。",
  },
  {
    label: "ESP（エネルギーサービス会社）介在型",
    detail:
      "グループ内に電力小売事業者または特定供給事業者を設立し、各事業会社へ再販。理論上はデマンド合算的効果あり（▲5〜8%基本料金圧縮余地）、調達集約・脱炭素・PPA運用を一元化。年間電気代3.2億円→2.6〜2.7億円（▲16〜19%）が目安。設立コスト・運営工数は年間1,000〜3,000万円程度で、年間グループ電気代10億円超で投資回収目安。",
  },
];

const beforeAfterCases = [
  {
    title: "事例A: 製造業ホールディングス（5社・高圧・年間グループ電気代3.2億円）",
    before:
      "Before: 純粋持株会社化2年経過。5事業会社が各々高圧500〜800kW契約を東京電力EPで継続。デマンド管理・契約見直しは各社CFOが個別実施。新電力切替も2社のみ実施で、グループ全体最適は未着手。年間電気代3.2億円。",
    after:
      "After: 持株会社CFO主導で全社相見積を実施（新電力10社）／3年固定単価で全社一括契約／燃料費調整額上限あり／契約名義は各社のまま、調達条件のみ統一／デマンドピーク管理は持株会社の経営管理部がBEMSデータを集約・月次レビュー。",
    result:
      "Result: 年間電気代 3.2億円 → 2.78億円（▲13%、▲4,200万円）／管理工数 各社個別→月1回グループ会議に集約／ESP設立は今回は見送り（投資回収7年と判定）。",
  },
  {
    title: "事例B: 流通系ホールディングス（11社・高圧+低圧電力混在・年間6.8億円）",
    before:
      "Before: 事業持株会社化3年。スーパー・ドラッグストア・物流センター等11社が、各社の店舗ごと（合計約180拠点）に個別契約。市場連動プランと固定プランが混在し、2022〜2023年の市場高騰で4社が予算オーバー。デマンド管理はほぼ未実施で、不要なkW契約が散見。",
    after:
      "After: 持株会社内に『エネルギー戦略室』を新設／グループ拠点180をデマンド実績に基づき再契約kW設定（合計▲8%）／全店舗で固定3年プランへ統一／太陽光屋根活用可能な56拠点でオンサイトPPA／LED化・空調更新で省エネ補助金活用。",
    result:
      "Result: 年間電気代 6.8億円 → 5.55億円（▲18%、▲1.25億円）／うち契約kW最適化 ▲2,200万円、プラン統一 ▲6,300万円、太陽光自家消費 ▲4,000万円／投資回収 補助金後 2.8年。",
  },
  {
    title: "事例C: IT系ホールディングス＋ESP設立（DC含む4社・特別高圧・年間14億円）",
    before:
      "Before: データセンター運営子会社（特高3,500kW）＋ソフトウェア開発子会社（高圧1,200kW）＋本社オフィス（高圧800kW）＋海外子会社（国内分のみ高圧600kW）の4社構成。年間電気代14億円のうちDCが11億円。脱炭素戦略（RE100準拠）も各社別々に運用。",
    after:
      "After: 持株会社100%子会社として『○○エネルギーサービス株式会社』を設立／同社が小売電気事業者として登録／オフサイトPPA（太陽光・風力 計15MW）を一括契約／各事業会社へ再販＋RE100証書付与／DC冷却最適化・サーバ更新で省エネ。",
    result:
      "Result: 年間電気代 14億円 → 11.4億円（▲19%、▲2.6億円）／RE100充足率 32%→78%／ESP設立・運営コスト 年間2,800万円／投資回収 1.5年。CDP・TCFD評価でも『気候戦略』スコアが上昇。",
  },
];

const costComparisonTable = [
  {
    label: "持株会社化前（単体経営）",
    contract: "本社＋4工場 = 計5契約 / 高圧2,800kW合計",
    basicFee: "5,544万円/年",
    energyFee: "2.84億円/年",
    total: "約3.4億円/年",
    note: "全契約が同一法人名義のため、本社の電力管理部門が一括交渉・契約管理。",
  },
  {
    label: "持株会社化直後（個別契約のまま）",
    contract: "本社＋4事業会社 = 計5契約 / 各社名義",
    basicFee: "5,544万円/年（変化なし）",
    energyFee: "2.84億円/年（変化なし）",
    total: "約3.4億円/年（短期的には不変）",
    note: "契約承継のみ実施。デマンド合算は法人格の分離で原則不可。管理工数は分散化。",
  },
  {
    label: "持株会社主導のグループ調達集約",
    contract: "5契約のまま、単価・条件のみ統合",
    basicFee: "5,544万円/年（変化なし）",
    energyFee: "2.45〜2.55億円/年（▲10〜14%）",
    total: "約3.0〜3.1億円/年（▲9〜12%）",
    note: "持株会社が一括して相見積・交渉。各社個別契約より単価交渉力が向上。最も実務的。",
  },
  {
    label: "ESP介在型（グループ内小売事業者経由）",
    contract: "ESPが5契約を内部統合＋外部1契約",
    basicFee: "4,800〜5,100万円/年（▲8〜13%）",
    energyFee: "2.35〜2.45億円/年（▲14〜17%）",
    total: "約2.8〜2.95億円/年（▲13〜18%）",
    note: "ESP運営コスト1,000〜3,000万円/年を考慮しても、グループ電気代10億円超で投資回収。脱炭素・PPA運用も一元化可能。",
  },
];

const espProsCons = [
  {
    label: "ESP（エネルギーサービス会社）設立のメリット",
    detail:
      "①グループ調達集約によるスケールメリット（電力量料金▲1〜3円/kWh）／②脱炭素・RE100対応の一元化（PPA契約集約）／③設備投資（蓄電池・自家発・BEMS）の集中化／④デマンド最適化の専門組織化／⑤グループ間融通（自家発電・余剰電力）のスキーム化。",
  },
  {
    label: "ESP設立のデメリット・留意点",
    detail:
      "①設立コスト（小売電気事業者登録・体制構築）／②運営コスト（人員・システム・需給管理体制で年間1,000〜3,000万円）／③税務上の移転価格対応（独立企業間価格の確保）／④需給管理リスク（インバランス料金）／⑤撤退・縮小時の負担。",
  },
  {
    label: "ESP設立判断のしきい値",
    detail:
      "①年間グループ電気代10億円以上（最低ライン）／②脱炭素・RE100戦略の重要度が高い／③グループ内に大型再エネ電源（太陽光・風力）保有または導入計画あり／④5年以上の長期視点でガバナンス整備可能／⑤投資回収3〜5年で許容できる経営判断、の5要件すべてを満たすことが望ましい。",
  },
  {
    label: "ESPの代替手段（みなしESP/集中購買のみ）",
    detail:
      "小売事業者を設立せず、持株会社の経営管理部や本社購買部が『集中購買部隊』として相見積・契約交渉を一元化する手法。設立コスト不要で実施できるため、年間グループ電気代3〜10億円の中堅ホールディングスに適合。",
  },
];

const taxLegalCheckpoints = [
  {
    label: "会社法上の論点",
    detail:
      "持株会社化（吸収分割・新設分割・株式移転）に伴う電力契約の承継は、分割契約書または株式移転計画書に明記する。明記漏れがあると一般承継の整理が必要で、後日の手続コスト増。M&A実行前に弁護士監修で網羅性を確認することが推奨。",
  },
  {
    label: "電気事業法・約款上の論点",
    detail:
      "電力契約は契約名義人が変わる場合、原則として一旦解約・新規契約となる。違約金条項の対象になる可能性があり、契約承継として処理可能か供給者と事前協議が必要。新電力では柔軟対応するケース多数、東京電力EP等の旧一般電気事業者は名義変更手続が標準化されている。",
  },
  {
    label: "税務上の論点（移転価格・寄付金課税）",
    detail:
      "ESPがグループ会社へ電力を再販する場合、独立企業間価格（外部取引価格と概ね同等）で取引する必要がある。ESPが原価割れで子会社に供給すると寄付金課税のリスク、逆に高値で供給すると子会社側の損金否認リスクが生じる。税理士・会計士監修必須。",
  },
  {
    label: "連結会計上の論点",
    detail:
      "ESPと事業会社間の取引は連結消去対象。連結ベースでの電力コスト削減効果のみを KPI として管理することが妥当。",
  },
];

const reviewTimeline = [
  {
    step: "Step1：持株会社化前の棚卸（再編6ヶ月前まで）",
    detail:
      "現在の全電力契約（事業所・本社・倉庫・拠点）をExcelで棚卸。契約名義・契約電力・年間使用量・契約期間・違約金条項を一覧化。M&A・分割スキーム別の契約承継パターンを電力会社と事前協議。",
  },
  {
    step: "Step2：再編実行と契約承継（再編実行月）",
    detail:
      "分割契約書・株式移転計画書に電力契約承継条項を盛り込む。電力会社へ名義変更届を提出（東電EPは標準書式あり、新電力は個別協議）。違約金リスクの整理。",
  },
  {
    step: "Step3：再編後3ヶ月（暫定運用）",
    detail:
      "各事業会社の電力契約を一旦現状維持。持株会社経営管理部で全社契約を集約把握。デマンド実績・使用量パターンを月次でモニタリング。",
  },
  {
    step: "Step4：再編後6ヶ月（グループ調達集約検討）",
    detail:
      "新電力10社へ一括相見積依頼。固定vs市場連動の比較、燃料費調整額上限の有無、脱炭素オプション（RE100証書・グリーン電力）の比較。経営層へ調達集約スキーム提案。",
  },
  {
    step: "Step5：再編後12ヶ月（実行・ESP判断）",
    detail:
      "グループ調達集約を実行。ESP設立は別途、年間グループ電気代・脱炭素戦略重要度を勘案して判断。設立する場合は再編後12〜18ヶ月のスケジュールで準備。",
  },
];

const subsidyAndIncentive = [
  {
    name: "省エネ補助金（経産省 SII / 工場・事業場型）",
    target: "高効率設備（空調・照明・コンプレッサー・冷凍冷蔵）",
    rate: "中小1/2、大企業1/3、上限15億円",
    note: "持株会社化後のグループ各社で個別申請可能。グループ統一仕様で同時申請することで、設計コスト・工事費を圧縮。",
  },
  {
    name: "需要家主導型PPA補助金",
    target: "オンサイト・オフサイト太陽光＋蓄電池",
    rate: "1/2以内、kWh定額型もあり",
    note: "ESP設立とセットで活用しやすい。グループ各社の屋根・敷地を統合活用するスキームで申請。",
  },
  {
    name: "中小企業経営強化税制（電力関連設備）",
    target: "BEMS・高効率変圧器・蓄電池",
    rate: "即時償却または税額控除7〜10%",
    note: "中堅・中小ホールディングスで活用可能。資本金1億円以下の事業会社が対象。",
  },
  {
    name: "東京都・自治体補助（都内本社の場合）",
    target: "省エネ・再エネ・蓄電池設備",
    rate: "1/3〜1/2、上限事業規模に応じる",
    note: "持株会社化に合わせ、グループ全体での補助金活用計画を策定。",
  },
];

const checklistItems = [
  "持株会社化前後の電力契約一覧（事業所・本社・拠点）をExcelで棚卸したか",
  "各契約の契約電力・年間使用量・契約期間・違約金条項を確認したか",
  "持株会社化スキーム（吸収分割・新設分割・株式移転）と電力契約承継条項を弁護士確認したか",
  "電力会社へ名義変更届（または契約承継届）を事前に提出する手続を確認したか",
  "デマンド合算の可否（同一需要場所・同一名義要件）を電力会社に確認したか",
  "グループ調達集約（持株会社主導で新電力10社相見積）の準備を開始したか",
  "固定vs市場連動、燃料費調整額上限の有無を相見積条件に明記したか",
  "脱炭素オプション（RE100証書・グリーン電力・PPA）の比較を含めたか",
  "ESP設立の判断（年間グループ電気代10億円超、脱炭素重要度高、5年視点）を経営層と議論したか",
  "ESP設立する場合、税理士・会計士による移転価格・寄付金課税リスクの整理を完了したか",
  "省エネ補助金（SII・PPA補助・経営強化税制）のグループ統一申請を検討したか",
  "再編後12〜18ヶ月のエネルギー戦略ロードマップを経営層と合意したか",
];

const faqItems = [
  {
    question: "持株会社化すると電力契約はどうなりますか？",
    answer:
      "持株会社化（純粋持株会社・事業持株会社いずれも）では、各事業会社が独立した法人格を持つため、電力契約も原則として各事業会社名義で個別管理されます。再編スキーム（吸収分割・新設分割・株式移転）に応じて、契約承継条項を分割契約書等に明記することで承継処理が可能です。明記漏れがあると一旦解約・新規契約となり、違約金リスクが発生する可能性があるため、再編6ヶ月前から電力会社・弁護士と協議することが推奨されます。",
  },
  {
    question: "持株会社化後のデマンド合算は可能ですか？",
    answer:
      "デマンド合算は『同一需要場所・同一契約名義』が原則ルールのため、持株会社化で法人格が分かれた場合は原則不可です。ただし、①不動産保有子会社名義に契約を集約しテナント契約とする方式、②自営線・特定供給によるグループ内融通、③ESP（エネルギーサービス会社）介在型、の3スキームで実質的な合算効果を出すことは可能。いずれもスキーム設計に専門家関与が必要です。",
  },
  {
    question: "グループ調達集約とESP設立、どちらを選ぶべきですか？",
    answer:
      "年間グループ電気代10億円未満の場合は、グループ調達集約（持株会社主導で新電力相見積）で十分なケースが多いです。ESPは設立コスト・運営コスト（年間1,000〜3,000万円）を回収する必要があり、年間電気代10億円超かつ脱炭素戦略の重要度が高い企業に適合します。中堅ホールディングスでは『集中購買部隊』を持株会社経営管理部に置く中間案が現実的です。",
  },
  {
    question: "持株会社化に伴い、新電力との契約は維持できますか？",
    answer:
      "新電力との契約は名義変更（または契約承継）の手続を経て維持可能です。新電力各社は柔軟に対応するケースが多いですが、契約条件・違約金条項の見直しタイミングと位置づけて、グループ全体で改めて相見積を取る方が単価面でメリットが大きいケースが多いです。再編から3〜6ヶ月以内の見直しが推奨されます。",
  },
  {
    question: "ESPを設立する場合、どんな許認可が必要ですか？",
    answer:
      "ESPが小売電気事業を行う場合、経産省への『小売電気事業者登録』が必要です。需給管理体制（インバランス対応）の整備、需要家との契約約款の整備、託送供給契約の締結が要件です。また自営線で特定供給を行う場合は『特定供給許可』が別途必要。設立準備に通常12〜18ヶ月を要します。",
  },
  {
    question: "持株会社化のタイミングで違約金が発生しますか？",
    answer:
      "電力会社が契約承継を認める場合は、違約金は発生しません。ただし新電力との契約で承継不可と判断された場合や、グループ調達集約に伴い既存契約を期中解約する場合は、契約書記載の違約金条項が適用されます。違約金の計算方法は別記事『違約金・精算金条項の計算方法』で詳細解説しています。",
  },
  {
    question: "ESP設立に税務上の注意点はありますか？",
    answer:
      "最も重要なのは『移転価格』の整理です。ESPがグループ会社へ電力を再販する単価は、独立企業間価格（外部市場価格と概ね同等）で設定する必要があります。原価割れの再販は寄付金課税のリスク、逆に高値での再販は子会社側の損金否認リスクが生じます。税理士・会計士監修必須で、毎期の取引価格レビューが必要です。",
  },
  {
    question: "持株会社化と同時に脱炭素戦略（RE100）も再設計すべきですか？",
    answer:
      "強く推奨します。持株会社化は脱炭素戦略の一元化の絶好の機会です。ESP設立に合わせて、グループ全体でのオフサイトPPA契約、再エネ証書一括購入、グループ間融通スキーム構築を進めることで、各社個別運用より大幅にコスト・実効性で優位になります。CDP・TCFD評価でも『気候戦略』スコア向上に直結します。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "経済産業省 資源エネルギー庁（電力小売事業者登録・電気事業制度）", url: "https://www.enecho.meti.go.jp/" },
  { name: "電力・ガス取引監視等委員会", url: "https://www.emsc.meti.go.jp/" },
  { name: "国税庁（移転価格税制）", url: "https://www.nta.go.jp/" },
  { name: "法務省（会社法・組織再編税制）", url: "https://www.moj.go.jp/" },
];

export default function Page() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-18"
        dateModified="2026-05-27"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          { name: "解説ページ一覧", url: "https://simulator.eic-jp.org/articles" },
          { name: "M&A・組織再編時の電力契約", url: "https://simulator.eic-jp.org/articles/ma-organizational-change" },
          { name: "持株会社化に伴う電力契約の見直し" },
        ]}
        faq={faqItems}
      />
      <ReadingProgressBar />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        <nav aria-label="パンくず" className="text-sm text-slate-600">
          <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
          <span className="px-2">›</span>
          <Link href="/articles" className="underline-offset-2 hover:underline">解説ページ一覧</Link>
          <span className="px-2">›</span>
          <Link href="/articles/ma-organizational-change" className="underline-offset-2 hover:underline">M&A・組織再編時の電力契約</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">持株会社化に伴う電力契約の見直し</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            持株会社化に伴う電力契約の見直し完全ガイド｜デマンド合算可否・グループ調達集約・ESP設立
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            純粋持株会社・事業持株会社化に伴う電力契約の再設計は、デマンド合算の可否、各社個別契約と調達集約のバランス、ESP（エネルギーサービス会社）設立の損益分岐、税務・会社法上の論点が複雑に絡みます。本ページでは、3つの実務シナリオ（製造業HD・流通系HD・IT系HD＋ESP設立）のBefore/After事例、固有データ表4種、再編タイムライン、補助金活用、12項目チェックリストまでを実務担当者向けに整理します。
          </p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>持株会社の形態別（純粋・事業・中間）で電力契約に与える影響</li>
              <li>デマンド合算可否の条件表（同一場所・同一名義・自営線・PPA等）</li>
              <li>持株会社化前後のコスト比較表（4スキーム×契約・基本料金・電力量料金）</li>
              <li>ESP設立のメリット・デメリット・損益分岐ライン</li>
              <li>再編6ヶ月前〜18ヶ月後までの実行タイムライン</li>
              <li>製造業・流通・IT系3パターンのBefore/After削減事例</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">持株会社の形態と電力契約への影響</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              持株会社は『純粋持株会社』『事業持株会社』『中間持株会社』の3形態に大別され、いずれの形態でも各事業会社は独立した法人格を持ちます。電力契約は法人格単位で締結するため、形態を問わず『各社名義で個別契約』が原則です。
            </p>
            <div className="mt-4 space-y-3">
              {orgStructures.map((item) => (
                <div key={item.type} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              M&A・組織再編全般の電力契約論点は{" "}
              <Link href="/articles/ma-organizational-change" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                M&A・組織再編時の電力契約（カテゴリ）
              </Link>
              、契約・約款全般は{" "}
              <Link href="/articles/contract-legal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                契約書・約款の読み方（カテゴリ）
              </Link>
              で関連記事を確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">デマンド合算可否の条件表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              デマンド合算（複数契約を1契約として基本料金算定）の可否は、託送供給等約款・各小売事業者の供給約款で定められています。持株会社化後は法人格が分かれるため、原則として合算は不可ですが、代替スキームの選択肢があります。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">ケース</th>
                    <th className="border border-slate-200 px-3 py-2">合算可否</th>
                    <th className="border border-slate-200 px-3 py-2">解説</th>
                  </tr>
                </thead>
                <tbody>
                  {demandAggregationRules.map((row) => (
                    <tr key={row.label} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.label}</td>
                      <td className="border border-slate-200 px-3 py-2 text-sky-700 font-semibold">{row.rule}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 出典: 託送供給等約款（一般送配電事業者各社）、電気事業法および各小売事業者供給約款から整理。実際の判定は契約先小売事業者・送配電事業者と個別協議が必要。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">契約電力統合シミュレーション（5パターン）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              5社×高圧500kWのグループを想定し、契約スキーム別のコスト試算を比較します。実数値は契約条件・地域・新電力選定で変動するため、自社条件での試算は別途必要です。
            </p>
            <div className="mt-4 space-y-3">
              {contractIntegrationSim.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約電力の最適化は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電力契約見直しチェックリスト
              </Link>
              、削減全体像は{" "}
              <Link href="/business-electricity-cost-reduction-review-points" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電気代の削減ポイント
              </Link>
              で深掘りできます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">持株会社化前後のコスト比較表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              『本社＋4工場 合計5契約・高圧2,800kW合計』の単体経営を持株会社化した場合のコスト変化を、4スキーム別に整理します。基本料金・電力量料金・年間総額のレンジで比較し、ESP介在型のメリットを定量化しました。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">スキーム</th>
                    <th className="border border-slate-200 px-3 py-2">契約構成</th>
                    <th className="border border-slate-200 px-3 py-2">基本料金</th>
                    <th className="border border-slate-200 px-3 py-2">電力量料金</th>
                    <th className="border border-slate-200 px-3 py-2">年間総額</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparisonTable.map((row) => (
                    <tr key={row.label} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.label}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.contract}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.basicFee}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.energyFee}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-700 font-semibold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 space-y-2">
              {costComparisonTable.map((row) => (
                <p key={`${row.label}-note`} className="text-xs leading-6 text-slate-500">
                  <span className="font-semibold text-slate-700">[{row.label}]</span> {row.note}
                </p>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 業界平均値・代表シナリオに基づく試算。基本料金単価は東京電力EP高圧業務用1,650円/kW・月をベースに整理。実際の単価・削減幅は契約条件・地域・新電力選定で変動。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3パターンのBefore/After事例</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              製造業HD（中規模）／流通系HD（拠点分散型）／IT系HD（DC含む・ESP設立済）の3パターンで、Before/Afterの削減効果を整理します。いずれも代表的なシナリオで、自社条件への適用は個別試算が必要です。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
            <div className="mt-4 space-y-4">
              {beforeAfterCases.map((cs) => (
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
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">ESP（エネルギーサービス会社）設立の判断軸</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              ESPはグループ内に小売電気事業者または特定供給事業者を設立し、各事業会社へ電力を再販するスキームです。設立判断は経済性と戦略性の両面で慎重に評価する必要があります。
            </p>
            <div className="mt-4 space-y-3">
              {espProsCons.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              新電力選定の基礎は{" "}
              <Link href="/businesses-suited-for-fixed-price-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                固定プランが向く法人
              </Link>
              、市場連動の適否は{" "}
              <Link href="/businesses-not-suited-for-market-linked-electricity-plan" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                市場連動プランが向かない法人
              </Link>
              で確認できます。
            </p>
            <p className="mt-2 text-xs text-slate-500">
              ※ 本記事は中立的な情報整理を目的としており、特定の電力会社・契約形態を推奨するものではありません。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">税務・会社法上の論点</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              持株会社化＋電力契約再設計には、会社法・電気事業法・税法（移転価格・寄付金課税）・連結会計の4領域での整理が必要です。M&A・再編アドバイザー、税理士、弁護士、エネルギー専門家の連携が前提となります。
            </p>
            <div className="mt-4 space-y-3">
              {taxLegalCheckpoints.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              関連の経理・税務論点は{" "}
              <Link href="/articles/accounting-tax" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                電気代の経理・税務（カテゴリ）
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">再編タイムライン（6ヶ月前〜18ヶ月後）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              持株会社化と電力契約再設計の実行タイムラインを5ステップで整理します。再編実行月だけでなく、前後の準備・暫定運用・本格再設計までのスケジュール感が重要です。
            </p>
            <div className="mt-4 space-y-3">
              {reviewTimeline.map((item) => (
                <div key={item.step} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.step}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">補助金・税制優遇の活用</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              持株会社化のタイミングでグループ全体の補助金活用計画を策定することで、設備投資・脱炭素投資の効率を高められます。グループ統一仕様での同時申請が採択率・コスト効率の両面で有利です。
            </p>
            <div className="mt-4 space-y-3">
              {subsidyAndIncentive.map((item) => (
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
              補助金スケジュールは{" "}
              <Link href="/subsidy-schedule-and-approval-rate" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                補助金スケジュールと採択率
              </Link>
              、SIIの詳細は{" "}
              <Link href="/subsidy-sii-energy-saving" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                SII省エネ補助金
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">持株会社化に伴う電力契約見直しチェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              再編6ヶ月前から18ヶ月後までの実務担当者向けチェックリスト。1項目でも未確認があれば、再編後の電力コスト見直しの精度が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで持株会社化後の電気代変動を試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              持株会社化後にグループ全体の電気代がどう変動するか、シミュレーターで試算できます。固定プラン切替・調達集約・ESP設立それぞれのケースで、年間コスト・上振れリスクを比較してください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>持株会社化後の各社個別契約継続ケースの年間電気代</li>
              <li>グループ調達集約後の削減幅（▲9〜14%レンジ）</li>
              <li>ESP設立後の削減幅（▲13〜18%レンジ）と投資回収</li>
              <li>燃料費調整額・再エネ賦課金の上昇シナリオ別影響</li>
            </ul>
          </section>

          <div className="mt-6">
            <SourcesAndFaq
              faq={faqItems}
              sources={sourcesItems}
              publishedAt="2026-04-18"
            />
          </div>

          <RelatedLinks
            heading="関連ページ"
            links={[
              { href: "/articles/ma-organizational-change", title: "M&A・組織再編時の電力契約（カテゴリ）", description: "再編全般の電力契約論点のハブ。" },
              { href: "/articles/contract-legal", title: "契約書・約款の読み方（カテゴリ）", description: "電力契約の法的論点を網羅。" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務（カテゴリ）", description: "ESP関連の税務論点を含む。" },
              { href: "/penalty-clause-calculation", title: "違約金・精算金条項の計算方法", description: "再編に伴う契約解約時の違約金計算。" },
              { href: "/mid-term-cancellation-penalty-faq", title: "中途解約違約金FAQ", description: "違約金の実務的な対応Q&A。" },
              { href: "/electricity-price-increase-notice-faq", title: "値上げ通知時のFAQ", description: "値上げ通知時の解約・違約金論点。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "再編後の契約見直し全項目を一覧化。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "グループ調達集約のヒント。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "グループ各社のプラン選定基礎。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動回避の判断軸。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "持株会社化後の燃料費調整リスク。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金の概要", description: "賦課金の負担を把握する。" },
              { href: "/renewable-surcharge-increase-impact", title: "再エネ賦課金上昇の影響", description: "賦課金上昇のグループ影響。" },
              { href: "/subsidy-sii-energy-saving", title: "SII省エネ補助金", description: "グループ統一申請のヒント。" },
              { href: "/subsidy-schedule-and-approval-rate", title: "補助金スケジュールと採択率", description: "申請タイミングの最適化。" },
              { href: "/subsidy-battery-solar-equipment", title: "蓄電池・太陽光の補助金", description: "ESPと組み合わせる蓄電池PPA。" },
              { href: "/factory-electricity-cost-benchmark", title: "工場電気代ベンチマーク", description: "製造系HDの参考データ。" },
              { href: "/office-building-electricity-cost-review", title: "オフィスビルの電気料金見直し", description: "本社ビル契約の論点。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "グループ各拠点のエリア事情。" },
              { href: "/industry-electricity-calculator", title: "業種別電気料金シミュレーター", description: "地域・業種・契約から現状の年間電気代と削減余地を試算。" },
            ]}
          />

          <ContentCta
            heading="持株会社化後の電気代シナリオを試算する"
            description="グループ各社の年間使用量・契約電力・地域を入力すると、現行プラン・固定プラン・ESP介在型の3スキームでの電気代と上振れリスクを試算できます。再編プロジェクトの経営層向け資料にも活用可能です。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/how-to", label: "使い方を見る" },
              { href: "/compare", label: "料金メニューを比較する" },
            ]}
          />
        </section>

        <div className="mt-8">
          <ContactCtaCard
            source="article"
            variant="secondary"
            heading="持株会社化に伴う電力契約再設計、専門家に相談しませんか？"
            description="持株会社化・組織再編に伴う電力契約見直しは、デマンド合算・ESP設立・税務論点が複雑に絡みます。エネルギー情報センターは中立的立場で、グループ調達集約・ESP損益分岐・補助金活用までの判断材料を整理します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
