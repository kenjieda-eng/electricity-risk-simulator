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
  decarbonization: {
    heading: "脱炭素対応を、電力契約の側面から設計する",
    description:
      "Scope2報告や再エネ調達の方針は、現行の電力契約とセットで設計することで実効性が高まります。自社に合った脱炭素ロードマップについては専門家へご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "脱炭素戦略を相談する" },
      { href: "/articles/decarbonization", label: "脱炭素・GX記事一覧" },
    ],
  },
  "corporate-ppa": {
    heading: "PPA契約判断を、数値と制度の両面で進める",
    description:
      "コーポレートPPAは10〜20年の長期契約となるため、事前の需要予測・価格リスク評価が重要です。契約条件の確認ポイントや導入判断は専門家にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/contact", label: "PPA導入を相談する" },
      { href: "/articles/corporate-ppa", label: "コーポレートPPA記事一覧" },
    ],
  },
  "energy-dx": {
    heading: "エネマネDXの投資対効果を、現状データから評価する",
    description:
      "BEMS・AI最適化・需要予測などのDX投資は、まず現状の電力データを可視化するところから始まります。診断結果を踏まえた投資設計は専門家がサポートします。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "DX投資を相談する" },
      { href: "/articles/energy-dx", label: "エネマネDX記事一覧" },
    ],
  },
  "energy-bcp": {
    heading: "電力BCPを、平時と有事の両面で設計する",
    description:
      "電力BCPは、非常用電源の検討だけでなく、平時の需給ひっ迫や新電力撤退への備えも含みます。設計ポイントのご相談は専門家へお気軽にどうぞ。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "電力BCPを相談する" },
      { href: "/articles/energy-bcp", label: "電力BCP記事一覧" },
    ],
  },
  "sme-guide": {
    heading: "中小規模でも使える、現実的な削減策から始める",
    description:
      "限られた予算と人員でも取り組める電気代削減の選択肢を、シミュレーターで試算できます。どこから始めるか迷ったら専門家にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "中小企業向け相談をする" },
      { href: "/articles/sme-guide", label: "中小企業向け記事一覧" },
    ],
  },
  "accounting-tax": {
    heading: "経理・税務処理の実務を、契約実態と合わせて確認する",
    description:
      "インボイス・減価償却・税制優遇などの実務処理は、契約内容と合わせて検討することで抜け漏れを防げます。ご不明点は専門家へご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "経理・税務を相談する" },
      { href: "/articles/accounting-tax", label: "経理・税務記事一覧" },
    ],
  },
  glossary: {
    heading: "用語の理解が進んだら、実際の契約にあてはめる",
    description:
      "用語の意味が分かったら、自社の契約書・請求書でそれぞれを確認しましょう。シミュレーターでは用語を活かした現状診断ができます。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/articles", label: "解説ページ一覧" },
      { href: "/contact", label: "専門家に無料相談する" },
    ],
  },
  faq: {
    heading: "FAQで整理した疑問を、自社の数値で確認する",
    description:
      "よくある質問に当てはめた次は、自社の請求データで実際の状況を診断しましょう。個別事情が複雑なら、専門家への相談が近道です。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "個別相談をする" },
      { href: "/articles", label: "解説ページ一覧" },
    ],
  },
  "regulation-timeline": {
    heading: "制度変更の影響を、自社契約で試算する",
    description:
      "制度改正の影響は契約条件により異なります。シミュレーターで将来の料金シナリオを試算し、必要に応じて専門家にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/contact", label: "制度影響を相談する" },
      { href: "/articles/regulation-timeline", label: "制度改正記事一覧" },
    ],
  },
  "ev-charging": {
    heading: "EV導入の電力インパクトを、基本料金ごと試算する",
    description:
      "社用EV導入は、充電電力量だけでなく契約電力・基本料金にも影響します。事前試算と契約見直しの相談は専門家が対応します。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/contact", label: "EV導入を相談する" },
      { href: "/articles/ev-charging", label: "EV・充電記事一覧" },
    ],
  },
  "contract-legal": {
    heading: "契約条項の確認から、見直しや交渉へ",
    description:
      "契約書・約款の論点を整理したうえで、見直しや再交渉の可能性を検討できます。条項の解釈や交渉論点は専門家にご相談ください。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "契約条項を相談する" },
      { href: "/articles/contract-legal", label: "契約書・約款記事一覧" },
    ],
  },
  "ma-organizational-change": {
    heading: "組織再編時の電力契約を、実行前に整える",
    description:
      "M&A・分社・事業譲渡では電力契約の承継・再締結タイミングが事業継続の要です。スケジューリングのご相談は専門家へお気軽にどうぞ。",
    links: [
      { href: "/", label: "シミュレーターで現状診断する", primary: true },
      { href: "/contact", label: "組織再編を相談する" },
      { href: "/articles/ma-organizational-change", label: "M&A・組織再編記事一覧" },
    ],
  },
  "global-energy": {
    heading: "海外拠点のエネルギー戦略を、グローバル視点で設計する",
    description:
      "各国の電力制度・価格水準を踏まえた拠点戦略の相談を承ります。国別比較データを踏まえた個別相談は専門家が対応します。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/contact", label: "グローバル戦略を相談する" },
      { href: "/articles/global-energy", label: "海外拠点記事一覧" },
    ],
  },
  "datacenter-ai-demand": {
    heading: "データセンター需要の急増を、契約戦略に反映する",
    description:
      "データセンター・AI需要の拡大は、電気料金と供給制約の両面に影響します。立地選定・契約設計の相談は専門家へお気軽にどうぞ。",
    links: [
      { href: "/", label: "シミュレーターで試算する", primary: true },
      { href: "/contact", label: "DC・AI需要を相談する" },
      { href: "/articles/datacenter-ai-demand", label: "DC・AI需要記事一覧" },
    ],
  },
};
