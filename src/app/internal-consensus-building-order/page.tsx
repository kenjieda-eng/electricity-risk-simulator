import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "契約見直しの社内合意を進める順番｜関係者の巻き込み方と段取り";
const pageDescription =
  "電力契約見直しの社内合意を効率的に進めるための順番と段取りを解説。関係者の特定、情報収集のタイミング、説明の順番、稟議提出までのスケジュール管理まで実務目線でまとめます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力契約 見直し 社内合意",
    "電気料金 見直し 段取り",
    "電力契約 変更 社内調整",
    "電気代 削減 承認 プロセス",
    "電力見直し 関係者 巻き込み",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/internal-consensus-building-order",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/internal-consensus-building-order",
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

const stakeholders = [
  {
    label: "総務・施設管理担当",
    role:
      "電力契約の日常的な管理者。現行の契約情報・使用量データ・請求書を保有しており、見直しの主導者になることが多い。複数施設がある場合は施設ごとの管理担当者を把握しておく必要がある。",
  },
  {
    label: "財務・経理担当",
    role:
      "電気料金の予算計上・実績管理を担当。見直しによる削減効果の財務影響（予算・損益）を把握したいため、金額面での情報提供が重要。稟議の数値根拠の確認者になることも多い。",
  },
  {
    label: "経営層・役員",
    role:
      "最終的な意思決定者。コストインパクトと安全性（リスク）の両面を重視する。詳細な検討よりも「要点の明確な説明」と「意思決定に必要な情報の整理」が求められる。",
  },
  {
    label: "法務・コンプライアンス担当",
    role:
      "契約書の内容確認・リスク評価を担当。契約条件（解約・違約金・条件変更）の確認や、新電力会社との契約締結に際したレビューが必要になる場合がある。",
  },
  {
    label: "IT・設備管理担当",
    role:
      "データセンター・サーバー室など電力品質に敏感な設備を管理する担当。電力会社の切替による電力品質への影響がないことを確認する必要がある。施設によっては最初に懸念を示す関係者になりやすい。",
  },
];

const steps = [
  {
    step: "ステップ1: 担当者による現状把握と初期調査",
    content:
      "まず総務・施設管理担当が中心になり、現行の電力契約条件・使用量・コスト実績を整理します。シミュレーターによるリスク把握や複数社からの仮見積収集もこの段階で行います。この段階では広く関係者に告知する必要はなく、担当者レベルで情報を集めることが先決です。",
  },
  {
    step: "ステップ2: 財務担当との情報共有・連携",
    content:
      "初期調査の結果（現状のコスト・見直し効果の試算）を財務・経理担当と共有します。「年間○万円の削減余地がある」という情報を財務担当が把握することで、その後の社内調整がスムーズになります。財務担当が稟議の数値根拠を確認する立場にある場合は、この段階で数値の合意を得ておくことが重要です。",
  },
  {
    step: "ステップ3: 正式な見積取得・比較検討",
    content:
      "担当者レベルでの準備が整ったら、複数の電力会社に正式な見積を依頼します。見積条件の統一（同じ使用量・同じ比較期間）に注意しながら、比較表を作成します。この段階で取得した見積は、稟議書の添付資料として活用します。",
  },
  {
    step: "ステップ4: 経営層への事前説明",
    content:
      "稟議書を提出する前に、経営層・決裁権者に口頭または簡単な資料で概要を伝えておきます。「○月末に稟議書を提出する予定で、年間○万円の削減が見込める」という形で事前に認識を共有することで、稟議書審査が形式的な確認になりやすくなります。",
  },
  {
    step: "ステップ5: 稟議書の提出・承認",
    content:
      "比較表・見積書・シミュレーター結果などを添付した稟議書を提出します。契約更新期限から逆算して、稟議提出の期限を設定しておくことが重要です。「○月○日までに承認が必要」という期限を稟議書に明記することで審査が迅速になります。",
  },
  {
    step: "ステップ6: 切替手続き・完了確認",
    content:
      "承認後、選定した電力会社との新契約締結・切替手続きを進めます。切替完了後の最初の請求書を確認し、想定通りの条件で請求されているかを検証します。初回請求後に財務担当と実績報告を共有することで、事後の評価と次回見直しへのサイクルにつなげます。",
  },
];

export default function InternalConsensusBuildingOrderPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          契約見直しの社内合意を進める順番
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しは、担当者が必要性を認識してから実際の切替完了まで、複数の関係者・部署を巻き込んだプロセスが必要です。関係者の巻き込み方や段取りを誤ると、契約更新タイミングを逃したり、稟議が差し戻されたりするリスクがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、電力契約見直しの社内合意を効率的に進めるための順番と段取りを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>電力契約見直しに関わる主な関係者と役割</li>
            <li>合意形成の6つのステップ</li>
            <li>契約更新タイミングから逆算したスケジュール管理</li>
            <li>各ステップでつまずきやすいポイント</li>
            <li>全体の流れをスムーズにする工夫</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            電力契約見直しに関わる主な関係者
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の見直しは、単一の担当者だけで完結することは少なく、複数の部署・関係者が関わります。どの関係者がどのような役割を担うかを把握することが、段取りの起点になります。
          </p>
          <div className="mt-4 space-y-3">
            {stakeholders.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            社内合意を進める6つのステップ
          </h2>
          <div className="mt-4 space-y-4">
            {steps.map((item) => (
              <div key={item.step}>
                <h3 className="text-lg font-semibold text-slate-900">{item.step}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            契約更新タイミングから逆算したスケジュール
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約の切替は、契約更新日（通常は3か月〜6か月前に申込が必要）に合わせたスケジュール管理が重要です。逆算したスケジュールの目安は以下のとおりです。
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm leading-6 text-slate-700">
              <thead>
                <tr className="bg-slate-50 text-slate-900">
                  <th className="border border-slate-200 px-3 py-2">タイミング</th>
                  <th className="border border-slate-200 px-3 py-2">作業内容</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日の5〜6か月前</td>
                  <td className="border border-slate-200 px-3 py-2">現状把握・使用量データ収集・シミュレーション実施</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日の4〜5か月前</td>
                  <td className="border border-slate-200 px-3 py-2">複数社への見積依頼・比較表作成</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日の3〜4か月前</td>
                  <td className="border border-slate-200 px-3 py-2">経営層への事前説明・稟議書作成・提出</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日の2〜3か月前</td>
                  <td className="border border-slate-200 px-3 py-2">稟議承認・選定電力会社への契約申込</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日の1か月前</td>
                  <td className="border border-slate-200 px-3 py-2">切替手続き完了・現行会社への解約通知</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">更新日（切替後）</td>
                  <td className="border border-slate-200 px-3 py-2">新契約開始・初回請求書の確認</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">※上記は目安です。電力会社・プランによって手続き期間は異なります。事前に確認することをお勧めします。</p>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            つまずきやすいポイントと対処
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力契約見直しの社内合意プロセスでつまずきやすいポイントは以下のとおりです。事前に対処方法を準備しておくことでスムーズに進めやすくなります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">現行の契約更新日が不明</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">現行の電力会社・契約書・請求書を確認する。不明な場合は現行の電力会社に直接問い合わせる。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">使用量データが揃わない</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">現行の電力会社に過去12〜24か月の使用量データを請求する。Web会員サービスから取得できることも多い。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">稟議が差し戻される</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">差し戻し理由を確認し、数値根拠・リスク対処・比較の合理性を追記して再提出する。事前説明で大筋の合意を得ておくことで差し戻しを減らせる。</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">タイミングを逃す</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">契約更新タイミングを逃した場合は次の更新まで待つか、中途解約の可否と条件を確認する。次回に向けて半年前からスタートするスケジュールを設定する。</p>
            </div>
          </div>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/information-to-prepare-before-inquiry",
              title: "問い合わせ前に社内で揃えたい情報",
              description: "見積依頼の質を上げるための事前準備の整理。",
            },
            {
              href: "/approval-document-key-points",
              title: "電力契約見直しの稟議書に入れたい論点整理",
              description: "承認を得やすい稟議書の構成と記載内容。",
            },
            {
              href: "/explaining-to-executives",
              title: "経営層向けに電力契約見直しを説明するときのポイント",
              description: "ステップ4（経営層への事前説明）の実践的な方法。",
            },
            {
              href: "/sharing-comparison-table-internally",
              title: "比較表を社内共有するときのポイント",
              description: "ステップ3（見積比較）で作成する比較表の作り方。",
            },
            {
              href: "/review-contract-renewal-deadlines",
              title: "契約更新期限を踏まえた電力契約見直しの進め方",
              description: "更新期限から逆算した見直しタイミングの整理。",
            },
            {
              href: "/business-electricity-contract-checklist",
              title: "法人の電力契約見直しチェックリスト",
              description: "見直しの各ステップで確認すべき項目の一覧。",
            },
          ]}
        />

        <ContentCta
          heading="社内合意の準備を始める"
          description="シミュレーターで現行契約のリスクを把握することが、社内合意プロセスの第一歩です。数値に基づいた問題提起から始めることで、関係者の理解を得やすくなります。"
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
