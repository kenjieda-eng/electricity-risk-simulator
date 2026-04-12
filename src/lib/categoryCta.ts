import type { ArticleCategorySlug } from "../data/articles";

// カテゴリ別のNEXT STEP CTA文案。
// /articles/[categorySlug] と各記事ページの両方で共有する。
// 全カテゴリで /contact（お問い合わせ・ご相談受付）への導線を必ず含む。
export type CategoryCta = {
  heading: string;
  description: string;
  links: { href: string; label: string; primary?: boolean }[];
};

export const CATEGORY_CTA: Record<ArticleCategorySlug, CategoryCta> = {
  basic: {
    heading: "基礎を押さえたら、自社の現状を数値で確認する",
    description:
      "ここまで読んで基礎がつかめたら、次は自社の請求書を手元にシミュレーターで現状診断してみましょう。数値を前にしても判断に迷う論点があれば、一般社団法人エネルギー情報センターへ無料でご相談いただけます。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/how-to", label: "使い方を見る" },
    ],
  },
  "price-increase": {
    heading: "上昇要因を踏まえて、今後の影響額を試算する",
    description:
      "燃調費や市場連動、再エネ賦課金など、料金が上がる要因を自社の契約に当てはめると、今後の影響額が具体的に見えてきます。読み解きに不安があるときや、社内説明の材料が必要なときは、専門家へお気軽にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで影響額を試算する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/business-electricity-retrospective", label: "月次動向を振り返る" },
    ],
  },
  "price-trends": {
    heading: "高止まりの時代に、自社の立ち位置を確認する",
    description:
      "推移データを踏まえて、自社の契約がどの位置にあるかをシミュレーターで見える化しましょう。見えてきた課題について壁打ちしたい、あるいは次の一手に迷う場合は、中立の専門家へご相談いただけます。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/business-electricity-retrospective", label: "法人電気料金振り返り" },
    ],
  },
  "plan-types": {
    heading: "固定型と市場連動型のどちらが自社に向くかを数値で比較する",
    description:
      "固定と市場連動のどちらが自社に有利かは、条件によって結論が変わります。シミュレーターで具体的な数値として比較し、迷いが残る部分は専門家との壁打ちで整理しましょう。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/compare", label: "料金メニューを比較する" },
      { href: "/contact", label: "専門家に無料相談する" },
    ],
  },
  "review-points": {
    heading: "見直しの一歩目を、シミュレーターから始める",
    description:
      "見直しポイントがわかったら、まずはシミュレーターで現状のリスクスコアを確認しましょう。進め方に迷ったり、社内説明の段取りが必要なときは、専門家が丁寧に伴走いたします。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/how-to", label: "使い方を見る" },
    ],
  },
  "last-resort-supply": {
    heading: "最終保障供給のリスクを、時間との勝負で確認する",
    description:
      "最終保障供給は時間との勝負です。シミュレーターで自社の該当リスクを確認し、通知が届いている場合や切替先探しで迷っている場合は、できるだけ早めに専門家へご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "今すぐ専門家に相談する" },
    ],
  },
  "risk-scenarios": {
    heading: "複数シナリオで、自社への影響を事前に試算する",
    description:
      "猛暑・円安・地政学リスクなど、複数シナリオで自社の電気代がどう動くかをシミュレーターで試算できます。経営層への説明材料づくりや、シナリオの読み解きは専門家との相談が効果的です。",
    links: [
      { href: "/", label: "シミュレーターでシナリオ試算する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/special/emergency-scenario-analysis", label: "有事シナリオ特集を見る" },
    ],
  },
  "power-procurement": {
    heading: "調達構造を踏まえて、自社の立ち位置を確認する",
    description:
      "電力の仕入れ構造を押さえたうえで、自社の契約がどんな価格リスクに晒されているかをシミュレーターで数値化できます。調達戦略の壁打ちが必要なときは、専門家にお気軽にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
    ],
  },
  "monthly-review": {
    heading: "月次動向を、自社契約に当てはめて把握する",
    description:
      "月次の市況を読み終えたら、自社の電気代がどう動いているかをシミュレーターで確認しましょう。振り返りと合わせて専門家に相談すれば、次の一手の論点が整理されます。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/business-electricity-retrospective", label: "振り返りトップへ" },
    ],
  },
  "industry-guide": {
    heading: "業種の特性を踏まえた見直しを、数値から始める",
    description:
      "業種別のポイントを押さえたら、自社のリスクをシミュレーターで数値化するのが次のステップです。業種特性を踏まえた個別のご提案が必要なときは、専門家へご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "業種別の相談をする" },
    ],
  },
  "energy-equipment": {
    heading: "設備投資の前に、まず現状コスト構造を見える化する",
    description:
      "蓄電池・太陽光・DRの導入判断は、現状の電気代構造を把握することが出発点です。シミュレーターで診断し、投資回収や補助金活用の判断に迷ったら、専門家の視点もご活用ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
    ],
  },
  "internal-explanation": {
    heading: "社内説明の数値材料を、シミュレーターで揃える",
    description:
      "稟議書・経営層説明・庁内説明に必要な定量材料は、シミュレーターの診断結果として取得できます。説明の段取りや論点整理に迷ったら、専門家がお手伝いします。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "説明資料の相談をする" },
    ],
  },
  "diagnostic-tools": {
    heading: "チェックが終わったら、数値診断へ進む",
    description:
      "診断ツールで論点を整理できたら、シミュレーターで実際の数値を試算しましょう。診断結果の読み解きや、次の一手の判断に迷う場合は、専門家にお気軽にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
    ],
  },
  "case-studies": {
    heading: "事例を見たら、自社の削減余地を試算する",
    description:
      "他社の事例を読んで「うちでも同じことができるか」と感じたら、次はシミュレーターで自社のリスクスコアを確認しましょう。削減プランを具体化する段階では、専門家への無料相談が役立ちます。",
    links: [
      { href: "/", label: "シミュレーターで自社診断する", primary: true },
      { href: "/contact", label: "削減プランを相談する" },
    ],
  },
  "emergency-response": {
    heading: "時間との勝負――今すぐ現状を把握する",
    description:
      "値上げ通知・最終保障供給通知・契約解除通知が届いたら、まずシミュレーターで現状のリスクスコアを確認しましょう。判断に迷う時間の余裕がないときは、専門家へすぐにご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "今すぐ専門家に相談する" },
    ],
  },
  municipality: {
    heading: "自治体の電力契約を、中立的な視点で整理する",
    description:
      "公共施設の電力契約について、現状のリスクをシミュレーターで診断できます。入札準備・補正予算・議会説明など、自治体ならではの論点は中立の専門家にご相談いただけます。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "自治体の相談をする" },
    ],
  },
  benchmarks: {
    heading: "相場と自社を突き合わせて、次の判断材料を作る",
    description:
      "相場データを読んだら、自社の電気代がどの位置にあるかをシミュレーターで確認しましょう。相場より高い要因の特定や、削減余地の試算は専門家との壁打ちが効果的です。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "相場診断を相談する" },
    ],
  },
  subsidies: {
    heading: "補助金活用とセットで、投資回収を試算する",
    description:
      "補助金を踏まえた設備投資の費用対効果は、まずシミュレーターで現状コストと照らし合わせて確認しましょう。申請スケジュールや稟議書作成で迷ったら、専門家へお気軽にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "補助金活用を相談する" },
    ],
  },
  "for-executives": {
    heading: "経営判断の数値根拠を、シミュレーターで作る",
    description:
      "経営会議・取締役会で使える定量根拠を、シミュレーターの診断結果から作成できます。中立の立場で経営視点のご相談が必要なときは、どうぞお気軽にご連絡ください。",
    links: [
      { href: "/", label: "シミュレーターで診断する", primary: true },
      { href: "/contact", label: "経営視点の相談をする" },
    ],
  },
  "by-region": {
    heading: "エリア特性を踏まえた、自社向けの診断を行う",
    description:
      "エリアごとの料金特性を踏まえて、自社の契約リスクをシミュレーターで試算できます。地域事情に即した具体的なアドバイスが必要なときは、専門家にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "地域別の相談をする" },
    ],
  },
  "market-data": {
    heading: "データで把握した市場動向を、自社の契約に活かす",
    description:
      "JEPX価格・需要パターン・気象データの分析結果を踏まえて、自社の電気料金リスクをシミュレーターで定量化できます。データに基づく契約判断をサポートします。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "専門家に無料相談する" },
      { href: "/articles/market-data", label: "市場データ記事一覧" },
    ],
  },
};
