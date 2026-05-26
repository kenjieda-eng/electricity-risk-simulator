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
  "違約金・精算金条項の計算方法完全ガイド｜残存契約期間別の違約金目安と切替損益分岐";
const pageDescription =
  "電力契約の違約金条項（定額型・月額連動型・使用量連動型）の計算方法と、残存期間別の違約金目安、切替メリットとの損益分岐、免除・減額交渉のポイントを実務シナリオ3パターンと固有データ表で整理します。";
const pageUrl = "https://simulator.eic-jp.org/penalty-clause-calculation";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 違約金",
    "中途解約 違約金 計算",
    "残存契約期間 違約金",
    "精算金 条項",
    "電力切替 違約金",
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
    images: [{ url: "/api/og/contract-legal", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/contract-legal"],
  },
};

const penaltyTypes = [
  {
    type: "①定額型",
    formula: "違約金 = 固定金額（数万〜数十万円）",
    target: "低圧契約・小規模高圧（〜100kW程度）",
    detail:
      "契約書に『中途解約時は◯◯万円申し受けます』と固定額が明記される方式。低圧電力・小規模事業者向けプランで多く、新電力の低圧プランでは1〜5万円、高圧50〜100kWクラスでは10〜30万円程度が一般的な目安。",
  },
  {
    type: "②月額連動型（残存期間×月額×率）",
    formula: "違約金 = 残存契約月数 × 月額電気代平均 × 一定率（20〜50%）",
    target: "中規模高圧（100〜2,000kW）が中心",
    detail:
      "中堅事業者向けに最も普及している方式。残存期間が長いほど、月額が大きいほど違約金が高額に。一定率は新電力で20〜30%、旧一般電気事業者で30〜50%が目安。違約金額が数百万〜数千万円規模に達する場合があり、切替損益分岐の慎重な計算が必須。",
  },
  {
    type: "③使用量連動型（残存期間×kWh×単価）",
    formula: "違約金 = 残存契約月数 × 月平均使用量 × 違約金単価（円/kWh）",
    target: "特別高圧・大規模高圧（2,000kW超）",
    detail:
      "特別高圧契約・大規模高圧契約で採用される方式。違約金単価は0.5〜2.0円/kWh程度が目安。使用量が大きい契約ほど違約金額が大きくなるため、データセンター・大型工場・大型商業施設では1〜数億円規模に達するケースもある。",
  },
  {
    type: "④期間進行割引型（経過年数に応じて減額）",
    formula: "違約金 = 基準額 × (残存期間 ÷ 契約期間)",
    target: "5年以上の長期契約・PPA契約",
    detail:
      "PPA契約・電力購入長期契約・需要家主導型PPA等で見られる方式。契約期間に対する残存比率で違約金を案分する設計。10年・15年・20年契約のオフサイトPPAで多用される。",
  },
  {
    type: "⑤逸失利益型（小売事業者の損害賠償）",
    formula: "違約金 = 残存期間中の見込利益相当額",
    target: "大口契約・カスタム契約",
    detail:
      "数億円規模のカスタム契約で稀に見られる方式。小売事業者側の調達コスト確定分を需要家が負担する設計。違約金額が極めて大きくなる傾向があり、契約締結前に弁護士監修が推奨される。",
  },
];

const monthlyRateExamples = [
  {
    label: "ケースA: 高圧100kW・月額40万円・5年契約3年目で解約",
    calc: "残存24ヶ月 × 40万円 × 20%（新電力）= 192万円",
    note: "新電力の標準条項を想定。月20%率は中堅新電力で一般的。",
  },
  {
    label: "ケースB: 高圧500kW・月額150万円・5年契約3年目で解約",
    calc: "残存24ヶ月 × 150万円 × 30%（旧一電）= 1,080万円",
    note: "旧一般電気事業者の標準条項を想定。月30%率は東電EP等で一般的。",
  },
  {
    label: "ケースC: 高圧1,200kW・月額380万円・3年契約2年目で解約",
    calc: "残存12ヶ月 × 380万円 × 25%（新電力中堅）= 1,140万円",
    note: "中規模高圧でも違約金が1,000万円超になりやすい例。切替損益分岐は要慎重判断。",
  },
  {
    label: "ケースD: 特別高圧3,000kW・月額950万円・5年契約4年目で解約",
    calc: "残存12ヶ月 × 950万円 × 40%（旧一電）= 4,560万円",
    note: "特別高圧では違約金が数千万〜億単位に。事前交渉で減額余地あり。",
  },
  {
    label: "ケースE: 特別高圧5,000kW・年間4,500万kWh・違約金単価1.0円/kWh・残存24ヶ月",
    calc: "残存24ヶ月 × (4,500万kWh ÷ 12) × 1.0円 = 9,000万円",
    note: "使用量連動型の典型。データセンター・大型工場で発生し得る規模。",
  },
];

const remainingPeriodTable = [
  {
    months: "残存6ヶ月",
    smallRate: "30〜90万円",
    midRate: "270〜450万円",
    largeRate: "1,140〜2,280万円",
    note: "切替メリットが大きい場合、ほぼ確実に切替が有利。",
  },
  {
    months: "残存12ヶ月",
    smallRate: "60〜180万円",
    midRate: "540〜900万円",
    largeRate: "2,280〜4,560万円",
    note: "切替後の年間削減額×1〜1.5年で回収判定。",
  },
  {
    months: "残存24ヶ月",
    smallRate: "120〜360万円",
    midRate: "1,080〜1,800万円",
    largeRate: "4,560〜9,120万円",
    note: "切替メリットが年間1,500万円以上なら検討余地。",
  },
  {
    months: "残存36ヶ月",
    smallRate: "180〜540万円",
    midRate: "1,620〜2,700万円",
    largeRate: "6,840〜13,680万円",
    note: "違約金額が大きく、原則として契約満了まで待つ判断が一般的。",
  },
  {
    months: "残存48ヶ月",
    smallRate: "240〜720万円",
    midRate: "2,160〜3,600万円",
    largeRate: "9,120〜18,240万円",
    note: "免除・減額交渉が成立しない限り切替不可。",
  },
];

const occurNonOccurCases = [
  {
    label: "違約金が発生するケース",
    cases: [
      "需要家側の都合での中途解約（新電力切替・自社撤退・事業終了）",
      "契約期間中の契約電力大幅減（多くの契約で20〜30%超の減少が違約金対象）",
      "需要家側の契約違反による解除（料金不払いなど）",
    ],
  },
  {
    label: "違約金が発生しない・減免されうるケース",
    cases: [
      "電力会社側の契約違反（供給義務不履行・約款違反）",
      "値上げ通知後の不同意による解約（多くの約款で違約金免除）",
      "不可抗力事由（大規模災害・需要家事業所の物理的滅失等）",
      "事業承継・M&A・組織再編に伴う契約承継（多くは違約金対象外）",
      "相互合意による早期終了（交渉次第で減額・免除可能）",
      "電力会社の倒産・事業撤退（違約金請求権が消滅または減額）",
    ],
  },
  {
    label: "交渉により減額余地があるケース",
    cases: [
      "残存期間が長く違約金額が極めて大きい場合（▲30〜50%減額交渉余地）",
      "代替プランへの切替（同一電力会社の別プランへの変更）と組合せ",
      "新規長期契約とのバーター（同一電力会社で新たな大型契約を約束）",
      "公正取引委員会・消費者契約法10条の論点が成立しうる条項（不当条項）",
    ],
  },
];

const switchEconomics = [
  {
    title: "事例X: 高圧500kW・年間400万kWh・残存24ヶ月（月額連動型30%）",
    before:
      "Before: 旧一般電気事業者と5年契約を3年経過。違約金は『残存月数×月額×30%』。直近12ヶ月の月平均電気代150万円。違約金見込額 1,080万円。",
    after:
      "After: 新電力10社相見積で年間削減見込480万円（▲20%）を確認。切替後3年で削減累計1,440万円。違約金1,080万円を引いた純削減 360万円。",
    result:
      "Result: 純削減 360万円（24ヶ月）／早期切替を実行／追加で違約金交渉で▲20%（▲216万円）獲得し純削減 576万円に拡大。",
  },
  {
    title: "事例Y: 特別高圧3,000kW・年間2,700万kWh・残存36ヶ月（月額連動型40%）",
    before:
      "Before: 大型工場の特別高圧契約。残存36ヶ月、月額平均950万円、違約金率40%。違約金見込額 1.37億円。新電力切替メリット 年間1,800万円（▲16%）。",
    after:
      "After: 切替後3年で削減累計5,400万円。違約金1.37億円を上回らず、純損失8,300万円となるため、原則として契約満了まで継続が経済的。代替案として『契約満了12ヶ月前の事前交渉』を新電力2社に依頼、満了タイミングで切替予約を確定。",
    result:
      "Result: 切替は契約満了時に実施／満了前12ヶ月から相見積を開始／満了同日切替で違約金ゼロ＋年間1,800万円削減を確保。",
  },
  {
    title: "事例Z: 高圧200kW・年間140万kWh・値上げ通知後の解約",
    before:
      "Before: 新電力と3年契約を1年経過。新電力から値上げ通知（電力量料金 +2.0円/kWh）。残存24ヶ月、月額60万円、違約金率25%。違約金見込額 360万円。",
    after:
      "After: 約款を確認したところ『値上げ通知に同意しない場合は違約金免除』条項あり。値上げ不同意・違約金免除での解約を申入れ／別新電力と固定3年プラン契約／結果として違約金ゼロ＋単価維持を実現。",
    result:
      "Result: 違約金 0円（▲360万円効果）／年間削減 0円（既存単価維持）／値上げ拒否権の活用で実質的に大幅メリット。",
  },
];

const negotiationLevers = [
  {
    label: "減額交渉レバー①: 違約金条項の法的有効性",
    detail:
      "違約金条項が著しく一方的・過大な場合、消費者契約法10条（一般法律：法人間取引でも参照される）や民法90条（公序良俗違反）の論点が成立しうる。違約金が残存期間中の見込利益を著しく超える場合、減額交渉の根拠になる。弁護士監修推奨。",
  },
  {
    label: "減額交渉レバー②: 公正取引委員会ガイドライン",
    detail:
      "公正取引委員会『優越的地位濫用ガイドライン』では、取引上優位な立場の事業者が不当に不利な条件を強要することを禁じている。電力会社対小規模需要家のケースで参照されることがあり、過度な違約金は減額交渉の対象になる。電力・ガス取引監視等委員会への相談も検討。",
  },
  {
    label: "減額交渉レバー③: 代替契約とのバーター",
    detail:
      "同一電力会社の別プラン（脱炭素オプション付きプラン等）への切替と組合せると、違約金を実質ゼロ・大幅減額にできるケースが多い。新電力では特に柔軟対応の余地大。",
  },
  {
    label: "減額交渉レバー④: 違約金額の積算根拠開示要求",
    detail:
      "違約金額の積算根拠（小売事業者の調達確定コスト・逸失利益）の開示を要求し、根拠が薄弱な場合は減額の妥当性を主張。情報の非対称性を解消する交渉戦術。",
  },
  {
    label: "減額交渉レバー⑤: 電力・ガス取引監視等委員会の相談窓口活用",
    detail:
      "経産省『電力・ガス取引監視等委員会』の相談窓口で、違約金条項の妥当性についてアドバイスを受けられる。直接的な強制力はないが、交渉根拠の補強として有用。",
  },
];

const calcWorkflowSteps = [
  {
    step: "Step1: 契約書の違約金条項を特定",
    detail:
      "契約書・約款を確認し、違約金条項のタイプ（定額・月額連動・使用量連動・期間進行割引・逸失利益）を特定。複数条項が重複する場合は最も高額となる条項が適用される設計が一般的。",
  },
  {
    step: "Step2: 残存契約期間と月額・使用量を特定",
    detail:
      "解約予定日と契約満了日から残存月数を算出。月額連動型なら直近12ヶ月の月平均電気代、使用量連動型なら直近12ヶ月の月平均使用量を整理。",
  },
  {
    step: "Step3: 計算式に当てはめて違約金総額を算出",
    detail:
      "Step1で特定した計算式に、Step2の数値を代入。複数シナリオ（半年後解約・1年後解約・契約満了時解約）で試算し比較。",
  },
  {
    step: "Step4: 切替後の年間削減額×残存期間と比較",
    detail:
      "新電力10社の相見積で切替後の年間削減額を確定。削減額×残存月数（または満了までの月数）と違約金を比較し、純損益を算出。",
  },
  {
    step: "Step5: 損益分岐判定と減額交渉",
    detail:
      "純損益がプラスなら早期切替が有利、マイナスなら契約満了まで継続が有利。マイナスの場合でも、減額交渉で違約金▲30〜50%圧縮できれば切替メリット復活の余地あり。",
  },
];

const checklistItems = [
  "契約書・約款で違約金条項の有無と類型（定額/月額連動/使用量連動）を特定したか",
  "残存契約期間（解約予定日〜契約満了日）を月単位で算出したか",
  "直近12ヶ月の月平均電気代・月平均使用量を集計したか",
  "違約金額を計算式に当てはめて算出したか（複数シナリオで試算）",
  "新電力10社からの相見積で切替後の年間削減見込を確定したか",
  "切替メリット（削減額×残存期間）と違約金を比較し純損益を算出したか",
  "値上げ通知時の違約金免除条項の有無を約款で確認したか",
  "事業承継・M&A・組織再編に伴う契約承継の違約金免除条項を確認したか",
  "電力会社側の契約違反（供給義務不履行等）の論点が成立する余地を整理したか",
  "違約金の減額交渉余地（▲30〜50%圧縮）を新電力提案と並行して試算したか",
  "違約金交渉に弁護士・電力コンサルタント関与の必要性を判断したか",
  "電力・ガス取引監視等委員会の相談窓口の活用要否を検討したか",
];

const faqItems = [
  {
    question: "電力契約の違約金条項にはどんなタイプがありますか？",
    answer:
      "主要には①定額型（固定金額）、②月額連動型（残存期間×月額×率20〜50%）、③使用量連動型（残存期間×kWh×単価）、④期間進行割引型（PPA契約等）、⑤逸失利益型（大口契約のみ）の5タイプがあります。中規模高圧（100〜2,000kW）では②月額連動型が最も普及しており、率は新電力20〜30%・旧一般電気事業者30〜50%が目安。契約書・約款で必ず確認が必要です。",
  },
  {
    question: "残存期間1年で違約金はどれくらいになりますか？",
    answer:
      "高圧100〜500kWクラスで月額40〜150万円の場合、月額連動率30%なら違約金は約144〜540万円が目安です。特別高圧大規模契約（月額1,000万円超）では数千万〜億単位に達することもあります。残存期間が短いほど切替メリットとの損益分岐は有利になります。",
  },
  {
    question: "違約金を回避する方法はありますか？",
    answer:
      "①契約満了時に切替（違約金ゼロ・最も確実）、②値上げ通知時の不同意による解約（多くの約款で違約金免除）、③M&A・組織再編に伴う契約承継、④電力会社側の契約違反による解除、⑤相互合意による早期終了交渉、の5パターンがあります。最も確実なのは契約満了12ヶ月前から相見積を開始し、満了同日切替を予約することです。",
  },
  {
    question: "違約金の減額交渉は可能ですか？",
    answer:
      "実務上、新電力・旧一般電気事業者ともに減額交渉に応じるケースは少なくありません。レバーとしては①違約金条項の法的有効性（消費者契約法10条・民法90条）、②公正取引委員会ガイドライン、③代替契約とのバーター、④違約金算定根拠の開示要求、⑤監視等委員会の相談窓口活用、の5つが有効です。30〜50%圧縮できるケースもあり、複数の新電力提案と並行交渉が現実的です。",
  },
  {
    question: "値上げ通知が来た場合、違約金は発生しますか？",
    answer:
      "多くの契約約款で『値上げ通知に同意しない場合は違約金免除で解約可能』とする条項があります。約款を確認のうえ、値上げ不同意・違約金免除での解約を申入れることが原則的な選択肢です。ただし条項がない契約・通知期限を過ぎた場合は通常の違約金が発生する可能性があるため、通知受領後すぐに対応開始することが重要です。",
  },
  {
    question: "M&A・組織再編時に違約金は発生しますか？",
    answer:
      "多くの契約で、事業承継・吸収合併・吸収分割・新設分割等に伴う契約承継は『違約金対象外』と整理されています。ただし契約書に明確な承継条項がない場合や、新電力との契約で承継不可と判断された場合は、通常の中途解約として違約金が発生する可能性があります。再編6ヶ月前からの事前協議が推奨されます。",
  },
  {
    question: "違約金が発生しても切替メリットがあるか判断するには？",
    answer:
      "①新電力10社の相見積で年間削減見込を確定、②削減額×残存月数を算出、③違約金額と比較、の3ステップで純損益を算出します。純損益プラスなら早期切替、マイナスなら満了待ち、減額交渉で純損益プラスに転じる余地があれば交渉実行が判断軸です。",
  },
  {
    question: "違約金条項が不当に高額な場合、法的に争えますか？",
    answer:
      "違約金条項が残存期間中の見込利益を著しく超え、社会通念上不合理と判断される場合、消費者契約法10条（一般法律として法人取引でも参照）や民法90条（公序良俗違反）の論点で争う余地があります。ただし最終判断は個別事案ごとに弁護士の評価が必要で、訴訟前の交渉解決が経済的に合理的なケースが多いです。電力・ガス取引監視等委員会の相談窓口活用も補強策として有効です。",
  },
];

const sourcesItems = [
  { name: "新電力ネット（電力単価・スポット価格・新電力比較）", url: "https://pps-net.org/unit" },
  { name: "経済産業省 電力・ガス取引監視等委員会（相談窓口）", url: "https://www.emsc.meti.go.jp/" },
  { name: "公正取引委員会（優越的地位濫用ガイドライン）", url: "https://www.jftc.go.jp/" },
  { name: "消費者庁（消費者契約法）", url: "https://www.caa.go.jp/" },
  { name: "資源エネルギー庁（電気事業制度）", url: "https://www.enecho.meti.go.jp/" },
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
          { name: "契約書・約款の読み方", url: "https://simulator.eic-jp.org/articles/contract-legal" },
          { name: "違約金・精算金条項の計算方法" },
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
          <Link href="/articles/contract-legal" className="underline-offset-2 hover:underline">契約書・約款の読み方</Link>
          <span className="px-2">›</span>
          <span className="text-slate-800">違約金・精算金条項の計算方法</span>
        </nav>
        <div className="mt-2 flex justify-end" data-print="hide"><PrintButton /></div>

        <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            違約金・精算金条項の計算方法完全ガイド｜残存契約期間と切替損益分岐
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の違約金条項は、定額型・月額連動型・使用量連動型など複数のタイプが存在し、計算方法によって金額が大きく変動します。本ページでは、5類型の違約金条項、残存期間別の違約金目安表、3つの実務シナリオ（高圧500kW・特別高圧3,000kW・値上げ通知後解約）でのBefore/After損益分岐、減額交渉のレバー、12項目チェックリストまでを実務担当者向けに整理します。
          </p>
          <AuthorBadge publishedAt="2026-04-18" updatedAt="2026-05-27" />
          <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
            <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
              <li>違約金条項の5類型と計算式</li>
              <li>残存契約期間別の違約金目安表（小規模・中規模・大規模別）</li>
              <li>違約金が発生するケース／発生しないケース／減額余地があるケースの一覧</li>
              <li>3パターンの切替損益分岐シミュレーション（Before/After）</li>
              <li>減額交渉の5つのレバー（法的有効性・代替契約バーター等）</li>
              <li>違約金計算ワークフロー5ステップと12項目チェックリスト</li>
            </ul>
          </div>
        </header>

        <TableOfContents />

        <section className="mt-6 space-y-6">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金条項の5つの類型</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              電力契約の違約金条項は、契約規模・電力会社種別・契約形態に応じて5類型に大別されます。自社契約がどの類型に該当するかを把握することが、損益分岐判定の前提です。
            </p>
            <div className="mt-4 space-y-3">
              {penaltyTypes.map((item) => (
                <div key={item.type} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.type}</p>
                  <p className="mt-1 text-xs text-slate-500"><span className="font-semibold text-slate-700">計算式：</span>{item.formula}</p>
                  <p className="text-xs text-slate-500"><span className="font-semibold text-slate-700">対象：</span>{item.target}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約・約款全般の読み方は{" "}
              <Link href="/articles/contract-legal" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                契約書・約款の読み方（カテゴリ）
              </Link>
              、FAQ集は{" "}
              <Link href="/articles/faq" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                FAQ集（カテゴリ）
              </Link>
              で関連記事を確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金算定式と一般的な相場表（月額連動型）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              月額連動型は最も普及している方式です。契約規模・残存期間・違約金率の組合せで、5つの典型ケースを試算しました。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">ケース</th>
                    <th className="border border-slate-200 px-3 py-2">計算</th>
                    <th className="border border-slate-200 px-3 py-2">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyRateExamples.map((row) => (
                    <tr key={row.label} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.label}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-700">{row.calc}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 業界平均値・代表シナリオに基づく試算。実際の違約金率・計算式は契約書記載が優先。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">残存期間別の違約金目安表（規模別）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小規模（高圧100kW・月額40万円）・中規模（高圧500kW・月額150万円）・大規模（特別高圧3,000kW・月額950万円）の3規模別に、残存期間別の違約金レンジ（率20〜40%）を整理しました。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-sky-50 text-left">
                    <th className="border border-slate-200 px-3 py-2">残存期間</th>
                    <th className="border border-slate-200 px-3 py-2">小規模</th>
                    <th className="border border-slate-200 px-3 py-2">中規模</th>
                    <th className="border border-slate-200 px-3 py-2">大規模</th>
                    <th className="border border-slate-200 px-3 py-2">判定の目安</th>
                  </tr>
                </thead>
                <tbody>
                  {remainingPeriodTable.map((row) => (
                    <tr key={row.months} className="align-top">
                      <td className="border border-slate-200 px-3 py-2 font-semibold text-slate-900">{row.months}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.smallRate}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.midRate}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-600">{row.largeRate}</td>
                      <td className="border border-slate-200 px-3 py-2 leading-6 text-slate-500 text-xs">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※ 月額連動型・違約金率20〜40%レンジで試算。代表シナリオに基づく目安値。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金が発生する／発生しないケース表</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金の発生有無は、解約理由・契約条項・周辺事情で大きく変わります。実務上の典型パターンを3カテゴリで整理しました。
            </p>
            <div className="mt-4 space-y-3">
              {occurNonOccurCases.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                    {item.cases.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              値上げ通知時の対応は{" "}
              <Link href="/electricity-price-increase-notice-faq" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                値上げ通知時のFAQ
              </Link>
              、中途解約の論点は{" "}
              <Link href="/mid-term-cancellation-penalty-faq" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                中途解約違約金FAQ
              </Link>
              で深掘りできます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">3パターンの切替損益分岐シミュレーション</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中規模高圧／特別高圧大規模／値上げ通知後解約の3パターンで、違約金と切替メリットの損益分岐をBefore/Afterで整理します。代表的なシナリオに基づく試算で、自社条件への適用は個別計算が必要です。
            </p>
            <div className="mt-4 space-y-4">
              {switchEconomics.map((cs) => (
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
            <h2 className="text-xl font-semibold text-slate-900">減額交渉の5つのレバー</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金が高額な場合、減額交渉で▲30〜50%圧縮できるケースも少なくありません。実務上有効な5つの交渉レバーを整理します。なお具体的な訴訟・行政指導の事例については個別判断が必要なため、ここでは一般論として整理しています。
            </p>
            <div className="mt-4 space-y-3">
              {negotiationLevers.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金計算ワークフロー（5ステップ）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金の正確な計算と切替判定は、5ステップのワークフローで進めると漏れがありません。実務担当者は契約書・約款のコピーを準備のうえ、順を追って試算してください。
            </p>
            <div className="mt-4 space-y-3">
              {calcWorkflowSteps.map((item) => (
                <div key={item.step} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.step}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              契約見直しの全項目は{" "}
              <Link href="/business-electricity-contract-checklist" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
                法人電力契約見直しチェックリスト
              </Link>
              で確認できます。
            </p>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">違約金計算・切替判定チェックリスト（12項目）</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              実務担当者が違約金計算と切替判定の前に確認すべき12項目。1項目でも未確認があれば、損益分岐判定の精度が下がります。
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-sm leading-7 text-slate-700 sm:text-base">
              {checklistItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">シミュレーターで切替メリットを試算する</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              違約金を払ってでも切替メリットがあるか、シミュレーターで自社条件の年間電気代と削減見込を試算できます。違約金額と切替メリットを比較し、損益分岐判定を客観的に行ってください。
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>現行契約の年間電気代と上振れリスクを確認する</li>
              <li>切替後の固定プラン・市場連動プラン別の年間電気代を試算する</li>
              <li>違約金額（自社で算出）と切替メリットの差額を判定する</li>
              <li>燃料費調整額・再エネ賦課金の上昇シナリオでの違いを確認する</li>
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
              { href: "/articles/contract-legal", title: "契約書・約款の読み方（カテゴリ）", description: "契約条項の解説記事ハブ。" },
              { href: "/articles/faq", title: "FAQ集（カテゴリ）", description: "契約・違約金関連のFAQ。" },
              { href: "/articles/accounting-tax", title: "電気代の経理・税務（カテゴリ）", description: "違約金の経理処理。" },
              { href: "/articles/ma-organizational-change", title: "M&A・組織再編時の電力契約（カテゴリ）", description: "再編時の違約金論点。" },
              { href: "/mid-term-cancellation-penalty-faq", title: "中途解約違約金FAQ", description: "違約金の実務的なQ&A。" },
              { href: "/electricity-price-increase-notice-faq", title: "値上げ通知時のFAQ", description: "値上げ不同意での違約金免除条項。" },
              { href: "/holding-company-electricity-review", title: "持株会社化に伴う電力契約の見直し", description: "再編に伴う契約承継。" },
              { href: "/business-electricity-contract-checklist", title: "法人電力契約見直しチェックリスト", description: "契約見直しの全項目。" },
              { href: "/business-electricity-cost-reduction-review-points", title: "法人電気代の削減ポイント", description: "削減打ち手の全体像。" },
              { href: "/businesses-suited-for-fixed-price-electricity-plan", title: "固定プランが向く法人", description: "切替先プランの選定基礎。" },
              { href: "/businesses-not-suited-for-market-linked-electricity-plan", title: "市場連動が向かない法人", description: "市場連動回避の判断軸。" },
              { href: "/market-linked-vs-fixed", title: "市場連動と固定プランの違い", description: "プラン特性の比較。" },
              { href: "/fuel-cost-adjustment", title: "燃料費調整額の仕組み", description: "切替後の燃料費調整リスク。" },
              { href: "/market-price-adjustment", title: "市場価格調整額の解説", description: "市場連動プランの調整項目。" },
              { href: "/renewable-energy-surcharge", title: "再エネ賦課金の概要", description: "賦課金の負担を把握。" },
              { href: "/area-power-supply-mix-comparison", title: "エリア別電源構成マップ", description: "切替先電力会社の電源構成。" },
            ]}
          />

          <ContentCta
            heading="違約金を払うべきか、満了まで待つべきか試算する"
            description="自社契約の年間使用量・契約電力・地域を入力すると、新電力切替後の年間電気代と削減見込が試算できます。違約金額（自社で算出）と比較して、切替の経済合理性を判定してください。"
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
            heading="違約金交渉・契約見直し、専門家に相談しませんか？"
            description="違約金条項の解釈・減額交渉・切替損益分岐の判定は、契約書記載と電力会社対応の両面で実務知見が必要です。エネルギー情報センターは中立的立場で、判断材料の整理から交渉戦略立案までを支援します。初回相談は無料です。"
          />
        </div>
      </main>
    </>
  );
}
