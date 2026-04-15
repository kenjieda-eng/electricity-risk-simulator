import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";

const pageTitle =
  "法人の電力契約で単価以外に確認したい項目｜条件・リスク・運用面の整理";
const pageDescription =
  "電力契約の選択では単価だけでなく、契約条件・リスク配分・サービス品質・請求の明確さ・サポート対応なども重要です。価格以外の確認ポイントを実務的に整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 単価以外 確認",
    "新電力 選び方 サービス",
    "法人 電力 比較 条件",
    "電力会社 サポート 対応",
    "電力契約 リスク 確認",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/non-price-factors-in-electricity-contract",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/non-price-factors-in-electricity-contract",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const checkSections = [
  {
    title: "契約条件の確認",
    items: [
      {
        label: "契約期間と自動更新条項",
        detail: "1年・2年・3年などの選択肢と、自動更新の申出期限を確認する。期限を過ぎると同条件で自動更新される。",
      },
      {
        label: "中途解約条項と違約金",
        detail: "契約期間中に解約・切替が必要になった場合の違約金と予告期間。事業環境の変化に対応できる柔軟性の確認。",
      },
      {
        label: "供給開始・切替の日程",
        detail: "申込から供給開始まで何日かかるか。希望の切替タイミングに間に合うかを確認する。",
      },
      {
        label: "需給調整・インバランス料金の扱い",
        detail: "需要量の予測誤差（インバランス）が発生した場合に、その費用を電力会社が負担するか需要家が負担するかを確認する。",
      },
    ],
  },
  {
    title: "リスク配分の確認",
    items: [
      {
        label: "電力会社の財務状況・供給継続性",
        detail: "新電力の中には経営状態が不安定な企業もある。最終保障供給に切り替わるリスクを最小化するため、財務面の安定性を確認する。",
      },
      {
        label: "最終保障供給への切替リスク",
        detail: "契約先の電力会社が撤退・倒産した場合、一般送配電事業者の最終保障供給に切り替わる。最終保障供給は通常より料金が高い。",
      },
      {
        label: "天災・緊急時の供給責任",
        detail: "災害や系統障害時の責任範囲と、問い合わせ先・対応フローを確認しておく。",
      },
      {
        label: "電力会社の調達方針",
        detail: "再エネ比率・電源構成の開示状況を確認する。ESG対応やカーボンニュートラルへの取り組みに影響する場合がある。",
      },
    ],
  },
  {
    title: "サービス・運用面の確認",
    items: [
      {
        label: "請求書の発行方法と明細の詳しさ",
        detail: "紙請求か電子請求か、月別の内訳明細が十分に確認できるかを確認する。経理処理や予算管理に影響する。",
      },
      {
        label: "問い合わせ先・担当者の有無",
        detail: "法人担当の窓口があるか。請求内容に疑問が生じたとき、スムーズに問い合わせられる体制か確認する。",
      },
      {
        label: "使用量データの提供",
        detail: "月別・日別の使用量データをポータルやCSVで取得できるか。省エネ管理や予算管理に活用する場合に重要。",
      },
      {
        label: "支払い条件と口座振替の可否",
        detail: "支払い期日・方法（振込・口座振替）・振込手数料の負担などを確認する。",
      },
    ],
  },
  {
    title: "その他の確認事項",
    items: [
      {
        label: "グリーン電力オプション・再エネ証書",
        detail: "再エネ由来の電力を選択できるオプションがあるか。ESG・環境対応の観点から重要性が高まっている。",
      },
      {
        label: "複数拠点の一括管理",
        detail: "複数の供給地点を1社で契約する場合、一括管理・一括請求に対応できるかを確認する。",
      },
      {
        label: "省エネ・デマンド管理サービス",
        detail: "電力会社が省エネコンサルティングやデマンド管理サービスを提供している場合、追加コスト削減につながることがある。",
      },
    ],
  },
];

export default function NonPriceFactorsInElectricityContractPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">単価以外の確認項目</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          法人の電力契約で単価以外に確認したい項目
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の選択において、単価・総額の比較は当然必要ですが、それだけでは十分ではありません。契約条件・リスク配分・サービス品質・運用面の使いやすさなどの非価格要素も、長期的な契約満足度に影響します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、価格比較と並行して確認しておくべき非価格的な項目を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>契約条件・解約条項の確認ポイント</li>
            <li>電力会社の供給継続性・財務リスクの見方</li>
            <li>請求書・データ提供などサービス面の確認事項</li>
            <li>ESG・再エネ対応の確認方法</li>
            <li>複数拠点がある場合の運用確認</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            なぜ非価格要素が重要か
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約は一度結ぶと1〜3年にわたって継続します。その間に以下のような問題が発生した場合、非価格面での確認不足が影響することがあります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>契約先の新電力が経営難に陥り、最終保障供給に切り替わって料金が上昇した</li>
            <li>請求書の内訳が不明確で、予算管理や経費処理に手間がかかった</li>
            <li>中途解約したくなったが、違約金が想定より高く動けなかった</li>
            <li>使用量データが取得できず、省エネ施策の効果測定ができなかった</li>
            <li>問い合わせ窓口が法人対応しておらず、問題解決に時間がかかった</li>
          </ul>
        </section>

        {checkSections.map((sec) => (
          <section key={sec.title} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">{sec.title}</h2>
            <div className="mt-4 space-y-3">
              {sec.items.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            最終保障供給への切替リスクについて
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            新電力が撤退・倒産した場合、自動的に一般送配電事業者が指定する「最終保障供給」に切り替わります。最終保障供給の料金は通常の市場料金より高く設定されており、切り替わった後に代替の電力会社を探す必要があります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            この点については{" "}
            <Link
              href="/last-resort-supply-what-it-is"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              最終保障供給とは
            </Link>{" "}
            で詳しく解説しています。新電力選択時のリスク管理の観点から合わせてご確認ください。
          </p>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            非価格要素の比較表への組み込み方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            価格比較と非価格比較を社内説明に活用するには、以下の形式で一覧にまとめると整理しやすくなります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>価格列：基本料金・電力量料金・年間総額（現状・上昇シナリオ）</li>
            <li>契約条件列：契約期間・自動更新期限・中途解約条項</li>
            <li>リスク列：調整額の変動リスク・電力会社の安定性評価</li>
            <li>サービス列：請求書の明細詳しさ・データ提供・問い合わせ対応</li>
          </ul>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="non-price-factors-in-electricity-contract" terms={["燃料費調整額", "市場価格調整額", "再エネ賦課金", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/not-just-unit-price-comparison-checklist",
              title: "請求単価だけで比較しないためのチェックポイント",
              description: "総額比較の考え方と確認事項。",
            },
            {
              href: "/electricity-contract-period-guide",
              title: "電力契約の契約期間の見方と注意点",
              description: "1年・2年・3年契約の特徴と選択の考え方。",
            },
            {
              href: "/mid-term-cancellation-clause-guide",
              title: "電力契約の中途解約条項の見方と注意点",
              description: "違約金と予告期間の確認方法。",
            },
            {
              href: "/last-resort-supply-what-it-is",
              title: "最終保障供給とは",
              description: "新電力撤退時のリスクと最終保障供給の仕組み。",
            },
            {
              href: "/how-to-compare-electricity-suppliers",
              title: "新電力を比較するときのポイント",
              description: "比較時に見落としやすい観点の整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直し準備で確認すべき全項目の一覧。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "単価以外の条件確認と合わせてプラン選択の軸を整理。",
            },
          ]}
        />

        <ContentCta
          heading="価格とリスクを合わせて判断する"
          description="単価比較と合わせて、上振れリスク幅をシミュレーションで確認することで、総合的な選択判断が可能になります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
    </main>
  );
}
