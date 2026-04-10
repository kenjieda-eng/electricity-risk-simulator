import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "新電力の相見積もり前に整理したい情報｜見積精度を上げるための準備";
const pageDescription =
  "電力の相見積もりを依頼する前に準備すべき情報を整理。使用量データ・契約詳細・施設情報・供給地点特定番号など、精度の高い見積を取るために事前に揃えておくべき項目を解説します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 相見積もり 準備",
    "新電力 見積依頼 情報",
    "電力契約 見直し 必要書類",
    "供給地点特定番号 確認",
    "法人 電気 見積 前提条件",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/information-to-prepare-before-quotation-request",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/information-to-prepare-before-quotation-request",
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

const infoCategories = [
  {
    category: "使用量・需要データ",
    items: [
      {
        label: "月別使用電力量（kWh）",
        detail: "直近12か月分が理想。季節変動のパターンを示すためにも12か月そろえる。",
      },
      {
        label: "月別最大需要電力（kW）",
        detail: "契約電力の決定に使われる。請求書の「最大需要電力」または「デマンド値」を確認。",
      },
      {
        label: "30分値データ（取得可能な場合）",
        detail: "スマートメーター設置済みの場合、30分単位の使用量データを取得できることがある。市場連動型プランの評価に有効。",
      },
      {
        label: "使用量の変動予定",
        detail: "設備増設・省エネ投資・生産計画の変更など、今後1〜2年の使用量変化の見込みがあれば伝える。",
      },
    ],
  },
  {
    category: "契約情報",
    items: [
      {
        label: "供給地点特定番号（22桁）",
        detail: "請求書または契約書に記載。電力会社の切替手続きに必要な番号で、見積依頼の際に提示を求められることがある。",
      },
      {
        label: "現行の契約メニュー名・電圧区分",
        detail: "高圧か特別高圧か、また現行プランの名称を確認。見積の前提条件を揃えるために必要。",
      },
      {
        label: "現行の契約電力（kW）",
        detail: "基本料金の計算基準となる数値。請求書の「契約電力」欄で確認。",
      },
      {
        label: "契約満了日と自動更新条項",
        detail: "切替可能タイミングを確認するために必要。解約予告期限と合わせて確認する。",
      },
      {
        label: "中途解約条項（違約金の有無・算定方法）",
        detail: "現行契約から切り替える場合のコストを把握するために必要。",
      },
    ],
  },
  {
    category: "施設・設備情報",
    items: [
      {
        label: "供給場所の住所・建物概要",
        detail: "見積の対象拠点を特定するために必要。複数拠点の場合は全拠点の一覧を用意する。",
      },
      {
        label: "受変電設備の有無と容量",
        detail: "特別高圧・高圧受電の場合、受変電設備（キュービクル等）の有無が関係する。",
      },
      {
        label: "営業時間・使用パターンの概要",
        detail: "昼間と夜間の使用量の比率など、負荷パターンの概要を伝えることで、料金体系との相性を評価しやすくなる。",
      },
    ],
  },
  {
    category: "比較条件の前提",
    items: [
      {
        label: "見積の基準期間（月・年）",
        detail: "「直近12か月の実績ベースで見積もってほしい」と明示することで、各社の見積条件が揃う。",
      },
      {
        label: "希望する契約期間",
        detail: "1年・2年・3年など、希望する契約期間があれば明記する。複数の期間で比較したい場合も伝える。",
      },
      {
        label: "固定か市場連動かの希望",
        detail: "どちらのタイプの見積を求めるかを明示しないと、各社がバラバラな条件で見積もってくることがある。",
      },
      {
        label: "回答期限",
        detail: "見積の回答期限を明示する。2週間程度が目安だが、複数拠点や特殊条件がある場合は3週間以上を見込む。",
      },
    ],
  },
];

export default function InformationToPrepareBeforeQuotationRequestPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          新電力の相見積もり前に整理したい情報
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力の相見積もりを依頼する際、事前に情報を整理しておくかどうかで、返ってくる見積の精度と比較可能性が大きく変わります。前提条件が不明確なまま依頼すると、各社がそれぞれの前提で見積もるため、単純比較ができなくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、見積依頼を行う前に整理しておくべき情報を4つのカテゴリに分けて解説します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>見積精度を上げるために必要なデータの種類</li>
            <li>供給地点特定番号の確認方法</li>
            <li>前提条件の揃え方と見積依頼時の伝え方</li>
            <li>複数拠点がある場合の注意点</li>
            <li>見積依頼書に記載すべき事項</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            前提条件が揃わないと何が起きるか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積依頼時に情報が不足していると、以下のような問題が発生します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>電力会社ごとに異なる使用量前提で見積もるため、金額の比較が正確にできない</li>
            <li>不足情報の確認に時間がかかり、見積回答が遅れる</li>
            <li>「燃料費調整額込みか別か」「容量拠出金込みか別か」などが不明なまま比較してしまう</li>
            <li>見積後に追加情報が必要になり、金額が変わることがある</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            情報を整理して依頼することで、見積の精度が高まり、比較検討が実質的になります。
          </p>
        </section>

        {infoCategories.map((cat) => (
          <section
            key={cat.category}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{cat.category}</h2>
            <div className="mt-4 space-y-3">
              {cat.items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-4"
                >
                  <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            供給地点特定番号の確認方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            供給地点特定番号（22桁の数字）は、電力切替手続きに必要な番号です。請求書に記載されていることが多く、「供給地点番号」「地点番号」「お客様番号」などの名称で記載されています。見つからない場合は現行の電力会社に問い合わせることで確認できます。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            複数拠点がある場合は、拠点ごとに異なる番号があります。拠点一覧と対応する供給地点特定番号を表にまとめておくと、見積依頼の際にスムーズです。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積依頼書に盛り込む内容
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電話や口頭ではなく、書面（メールや見積依頼書）で依頼することで、前提条件を明確にしたまま複数社に同条件で依頼できます。見積依頼書には以下の内容を記載します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>見積の対象期間（例：2026年4月〜2027年3月）</li>
            <li>使用量の前提（添付する請求書や使用量データの期間を明示）</li>
            <li>希望する契約期間（1年・2年・3年など）</li>
            <li>固定型か市場連動型かの指定、または両方の提示依頼</li>
            <li>燃料費調整額・容量拠出金を見積金額に含むか別途明示するかの指定</li>
            <li>回答期限と担当者の連絡先</li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積を受け取った後の比較手順
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積を受け取ったら、まず前提条件が揃っているか確認します。使用量・契約電力・契約期間が統一されているかを確認し、ズレがある場合は同じ条件で再提出を求めます。その後、基本料金・電力量料金・調整額の各項目を比較し、年間総額でも試算します。見積比較の詳細な手順は{" "}
            <Link
              href="/how-to-read-business-electricity-quotation"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金見積書の見方
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/what-to-do-3-months-before-electricity-contract-renewal",
              title: "法人の電力契約更新の3か月前にやること",
              description: "見積依頼から契約手続き完了までの時系列手順。",
            },
            {
              href: "/contract-renewal-6-months-before",
              title: "法人の電力契約更新の6か月前にやること",
              description: "情報収集・市場調査・社内調整の準備フェーズ。",
            },
            {
              href: "/how-to-read-business-electricity-quotation",
              title: "法人向け電気料金見積書の見方",
              description: "受け取った見積書のどこを確認すればよいか。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書から見積比較に使う情報を読み取る方法。",
            },
            {
              href: "/not-just-unit-price-comparison-checklist",
              title: "請求単価だけで比較しないためのチェックポイント",
              description: "総額比較の考え方と見落としやすい項目。",
            },
            {
              href: "/electricity-contract-period-guide",
              title: "電力契約の契約期間の見方と注意点",
              description: "1年・2年・3年契約の違いと選択の考え方。",
            },
          ]}
        />

        <ContentCta
          heading="見積を取る前にリスクを把握する"
          description="現行契約の条件でシミュレーションを行うことで、見直しの優先度を判断する根拠を作れます。見積依頼の準備と並行して活用してください。"
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
