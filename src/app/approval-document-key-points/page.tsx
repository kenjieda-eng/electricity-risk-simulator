import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "電力契約見直しの稟議書に入れたい論点整理｜承認を得やすい構成";
const pageDescription =
  "電力契約見直しの稟議書に必要な論点と記載内容を解説。承認を得やすい構成、数値の根拠の示し方、リスクへの対処の書き方、よくある差し戻し理由への対応まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 稟議書 書き方",
    "電気料金 見直し 稟議 承認",
    "電力契約 変更 社内承認",
    "電力調達 稟議 論点",
    "電気料金削減 稟議",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/approval-document-key-points",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/approval-document-key-points",
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

const sections = [
  {
    label: "件名・目的",
    detail:
      "「電力供給契約の変更について」などシンプルな件名を設定し、目的欄に「現行の電力契約条件を見直し、電気料金コストの削減を図るため」と簡潔に記載する。目的が明確なほど審査者が理解しやすくなる。",
  },
  {
    label: "現状と課題",
    detail:
      "現行の電気料金の水準、前年比の変化、電気料金が事業コストに占める割合などを記載する。「課題」として、現行契約の割高感・見直しをしないリスクを数値とともに示す。感覚論ではなく実績データを根拠に置く。",
  },
  {
    label: "見直しの検討経緯",
    detail:
      "複数の電力会社・プランを比較検討した経緯を記載する。「○社に見積を依頼し、比較検討した結果、○社のプランが最も有利な条件であった」という形で、選定の合理性を示す。相見積もりの取得は稟議承認の説得力を高める。",
  },
  {
    label: "契約条件の比較",
    detail:
      "現行契約と新契約の主な条件（単価・プラン種別・契約期間・解約条件など）を表形式で比較する。金額の差分（年間削減見込み額）を明示することで、承認の経済的根拠が明確になる。",
  },
  {
    label: "リスクと対処",
    detail:
      "主なリスク（料金変動・供給安定性・違約金など）と、それぞれへの対処を記載する。「固定プランを選択することで価格変動リスクを抑制」「電力の安定供給は送配電設備に依存し、小売会社の変更で影響しない」などの説明を含める。",
  },
  {
    label: "実施スケジュールと手続き",
    detail:
      "「○月○日に新契約の申込を行い、○月○日から切替を完了する予定」という具体的な実施スケジュールを記載する。契約更新の期限がある場合は、期限を明示して承認のタイムラインを意識させる。",
  },
];

const returnReasons = [
  {
    reason: "削減額の根拠が不明瞭",
    countermeasure:
      "試算の前提条件（使用量・単価・比較期間など）を明記し、見積書を添付する。シミュレーター結果も補足資料として活用できる。",
  },
  {
    reason: "供給安定性・品質への懸念が未回答",
    countermeasure:
      "送配電設備は変わらず電力品質に影響しない旨を稟議本文に明記する。必要に応じて電力の仕組みについての補足資料を添付する。",
  },
  {
    reason: "リスク対処が不十分",
    countermeasure:
      "料金が上昇した場合の対応・解約条件・切替後の問題が起きた場合の対応を具体的に記載する。",
  },
  {
    reason: "比較検討の範囲が狭い",
    countermeasure:
      "比較した電力会社数・プラン数を明記し、選定基準を説明する。最低でも2〜3社の比較を行った旨を示す。",
  },
];

export default function ApprovalDocumentKeyPointsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          電力契約見直しの稟議書に入れたい論点整理
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しを進める際、担当者レベルでの検討が終わった後に必要になるのが、社内での稟議・承認手続きです。稟議書の内容が不十分だと差し戻しが発生し、契約更新のタイミングを逃すリスクがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電力契約見直しの稟議書に含めるべき論点と、承認を得やすい構成を整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>稟議書に含めるべき6つの必須セクション</li>
            <li>数値根拠の示し方と添付資料の考え方</li>
            <li>よくある差し戻し理由とその対処方法</li>
            <li>承認を早めるための工夫</li>
            <li>経営層説明との連携方法</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            稟議書に含めるべき6つのセクション
          </h2>
          <div className="mt-4 space-y-3">
            {sections.map((item) => (
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

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            数値根拠の示し方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            稟議書で最も重要な要素のひとつが、削減効果の数値根拠です。審査者が「信頼できる計算根拠がある」と感じられるように、以下の観点で数値を準備します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>試算に使用した使用量データの出典（請求書実績○年○月〜○年○月）を明記する</li>
            <li>現行の単価と候補先の単価の比較を表形式で示す</li>
            <li>年間削減見込み額の計算式を明記する（使用量×単価差分 など）</li>
            <li>シミュレーター結果を補足資料として添付することで客観性を高める</li>
            <li>削減額の「確実な範囲」と「上振れ・下振れの幅」を分けて示す</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            請求書データの読み方については{" "}
            <Link
              href="/how-to-read-business-electricity-bill"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              法人向け電気料金請求書の見方
            </Link>{" "}
            で確認できます。
          </p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            よくある差し戻し理由と対処
          </h2>
          <div className="mt-4 space-y-3">
            {returnReasons.map((item) => (
              <div key={item.reason} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">差し戻し理由: {item.reason}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">対処: {item.countermeasure}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            承認を早めるための工夫
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            稟議書の内容を充実させることに加えて、以下の工夫で承認を早められる場合があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>稟議提出前に、決裁権者または承認ラインの上位者に口頭でポイントを伝えておく</li>
            <li>契約更新の期限を稟議の冒頭に明記し、タイムラインの緊急性を示す</li>
            <li>添付資料は見積書・請求書抜粋など審査者が確認しやすい資料に絞る</li>
            <li>「今月承認をいただければ次の更新タイミングに切替可能」という形で行動を明確にする</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            経営層説明・比較表との連携
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            稟議書は、経営層への口頭説明や比較表と連携させることで、承認プロセスをスムーズに進めることができます。口頭説明で大筋の理解を得た後に稟議書を提出することで、審査が形式的なチェックになりやすくなります。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            経営層説明のポイントは{" "}
            <Link
              href="/explaining-to-executives"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              経営層向けに電力契約見直しを説明するときのポイント
            </Link>
            で、比較表の作り方は{" "}
            <Link
              href="/sharing-comparison-table-internally"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              比較表を社内共有するときのポイント
            </Link>
            で確認できます。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "コストとリスクを経営層に伝えるための構成。",
            },
            {
              href: "/sharing-comparison-table-internally",
              title: "比較表を社内共有するときのポイント",
              description: "わかりやすい比較表の作り方と共有方法。",
            },
            {
              href: "/using-simulator-results-for-explanation",
              title: "シミュレーター結果を説明材料にする方法",
              description: "診断結果を稟議書の根拠資料として活用する方法。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "稟議に必要な実績データを請求書から読み取る方法。",
            },
            {
              href: "/internal-consensus-building-order",
              title: "契約見直しの社内合意を進める順番",
              description: "稟議提出前の関係者調整の進め方。",
            },
            {
              href: "/information-to-prepare-before-inquiry",
              title: "問い合わせ前に社内で揃えたい情報",
              description: "見積依頼前に準備すべき情報と稟議資料の準備。",
            },
          ]}
        />

        <ContentCta
          heading="稟議の根拠となる数値を準備する"
          description="シミュレーターを使うことで、現行契約の料金上振れリスクや見直し効果を試算できます。稟議書の添付資料として活用できます。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="approval-document-key-points" />
      </div>
    </main>
  );
}
