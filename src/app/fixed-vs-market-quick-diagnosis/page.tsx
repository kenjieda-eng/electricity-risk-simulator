import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import GlossaryLinks from "../../components/simulator/GlossaryLinks";
import DiagnosisClient from "./DiagnosisClient";

const pageTitle =
  "固定プラン向き・市場連動向き簡易診断｜自社に合うプランを整理する";
const pageDescription =
  "固定型電力プランと市場連動型プランのどちらが自社に向いているかを、予算優先度・使用量・リスク許容度などの観点から診断。法人担当者がプラン選択の方向性を整理できます。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "固定プラン 市場連動 診断",
    "電力プラン どちらが向いている",
    "法人 電力プラン 選び方",
    "固定型 市場連動型 比較",
    "電気料金プラン 診断",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/fixed-vs-market-quick-diagnosis",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/fixed-vs-market-quick-diagnosis",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "/ogp-default.png", width: 1200, height: 630, alt: pageTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-default.png"],
  },
};

const decisionNodes = [
  {
    question: "電気料金の予算を毎月一定額で安定させることが最優先か？",
    yesLabel: "はい：料金変動は避けたい",
    noLabel: "いいえ：多少の変動は許容できる",
    yesResult: "fixed",
    noNext: true,
  },
  {
    question: "電力使用量が季節・稼働状況によって大きく変わるか？",
    yesLabel: "はい：繁忙期・閑散期で大きく変動する",
    noLabel: "いいえ：通年でほぼ安定している",
    yesResult: null,
    noNext: true,
  },
  {
    question: "電気料金の高騰リスクを自社の経費管理上どの程度織り込めるか？",
    yesLabel: "ほとんど余裕がない：固定で確定させたい",
    noLabel: "ある程度余裕がある：変動リスクを取れる",
    yesResult: "fixed",
    noNext: true,
  },
];

export default function FixedVsMarketQuickDiagnosisPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/diagnostic-tools" className="underline-offset-2 hover:underline">自己診断・簡易チェック</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">固定・市場連動 簡易診断</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          固定プラン向き・市場連動向き簡易診断
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しや新規契約を検討する際に、まず迷うのが「固定型プランと市場連動型プランのどちらを選ぶか」という問題です。このページでは、自社の状況に照らし合わせて方向性を整理するための診断フローとチェックリストを提供します。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          最終的な判断は個別の見積条件を比較して行いますが、まず「自社の優先軸」を明確にしておくことで、比較の基準がぶれにくくなります。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>固定型・市場連動型それぞれの特徴とリスク構造</li>
            <li>自社の優先軸を整理するための判断フロー</li>
            <li>各プランが向く組織の傾向チェックリスト</li>
            <li>プラン選択時に確認すべき具体的ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">2つのプランの基本的な違い</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            固定型と市場連動型は、料金の変動構造が根本的に異なります。詳しい解説は{" "}
            <Link href="/market-linked-vs-fixed" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              市場連動型と固定型プランの違い
            </Link>{" "}
            をご覧ください。
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-base font-semibold text-slate-900">固定型プラン</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                契約時に電力量単価が決まり、契約期間中は原則変わらない。安定性が高い反面、市場価格が下がっても恩恵を受けにくい。
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-base font-semibold text-slate-900">市場連動型プラン</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                JEPXなど電力市場の価格に連動して料金が変動する。安価になる局面もある一方で、相場上昇時は請求額が増加するリスクがある。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">判断フロー：3つの問いで方向性を確認する</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            以下の問いに順番に答えることで、自社の優先軸が固定寄りか市場連動寄りかの方向性が見えてきます。
          </p>
          <div className="mt-4 space-y-4">
            {decisionNodes.map((node, i) => (
              <div key={i} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{node.question}</p>
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-md border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-800">
                      → {node.yesLabel}
                    </div>
                    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                      → {node.noLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            「料金安定を最優先」「コスト変動を吸収する余裕が乏しい」「モニタリング体制がない」といった条件が重なるほど、固定型プランが向く傾向があります。
          </p>
        </section>

        <DiagnosisClient />

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">プラン選択時に必ず確認したいポイント</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            どちらのプランを選ぶ場合でも、以下の点は見積の段階で必ず確認してください。
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額に上限設定があるか、またその上限額はいくらか</li>
            <li>市場価格調整額の算定方式と過去の変動実績</li>
            <li>容量拠出金の請求への反映方法</li>
            <li>契約期間と中途解約時の違約金の有無・金額</li>
            <li>再エネ賦課金の扱い（プラン共通の場合も確認）</li>
            <li>複数年契約の場合の単価改定条件</li>
          </ol>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書の読み方は{" "}
            <Link href="/how-to-read-electricity-quote" className="text-sky-700 underline underline-offset-2 hover:text-sky-900">
              法人向け電気料金見積書の見方
            </Link>{" "}
            で詳しく解説しています。
          </p>
        </section>

        <section className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">診断結果パターン別の推奨</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            診断フローの回答パターンに応じた、プラン選択の方向性と理由を整理しています。
          </p>
          <table className="mt-4 w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">パターン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">特徴</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">推奨プラン</th>
                <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-semibold text-slate-900">理由</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">安定最優先型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">予算管理が厳格・変動コスト吸収余地なし</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">固定型</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">料金予測可能性が最優先。高騰リスクを完全に遮断できる。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">変動許容型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量が安定・モニタリング体制あり・節電余地あり</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-indigo-700">市場連動型</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">価格低下局面でのコスト削減メリットを取りやすい環境。</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">繁閑差大型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">季節・稼働状況で使用量が大きく変動する</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-sky-700">固定型（時間帯別）</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">繁忙期の高騰リスクを固定単価で吸収。時間帯別設計も有効。</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">コスト重視型</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">使用量が大きく・電力コストが経営の重要変数</td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700"><span className="font-semibold text-amber-700">複数プラン比較</span></td>
                <td className="border border-slate-200 px-3 py-2 text-slate-700">両プランの試算を比較し、年間総コストとリスク許容度で判断。</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-6">
          <GlossaryLinks currentSlug="fixed-vs-market-quick-diagnosis" terms={["燃料費調整額", "市場価格調整額", "JEPX", "市場連動プラン", "固定プラン", "最終保障供給"]} />
        </div>

        <RelatedLinks
          heading="関連ページ"
          intro="プラン選択の判断をさらに深めるためのページです。"
          links={[
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動型と固定型プランの違い",
              description: "2つのプランの料金構造・リスクの違いを比較形式で解説。",
            },
            {
              href: "/who-should-choose-fixed-price-plan",
              title: "固定型プランを選ぶべき法人の特徴",
              description: "固定プランが特に向いている組織の条件を詳しく解説。",
            },
            {
              href: "/who-should-choose-market-linked-plan",
              title: "市場連動型プランを選ぶべき法人の特徴",
              description: "市場連動型のメリットを活かせる組織の条件を解説。",
            },
            {
              href: "/compare-market-linked-and-fixed-by-risk-pattern",
              title: "リスクパターン別：固定型と市場連動型の比較",
              description: "価格高騰・安定・下落の各シナリオで2プランを比較する。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書でどの項目を比較すればよいかを項目別に解説。",
            },
            {
              href: "/self-diagnosis-contract-review",
              title: "電力契約見直し自己診断",
              description: "そもそも見直しが必要かを10項目で確認する診断ページ。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで2つのプランを比較する"
          description="固定型と市場連動型のどちらが自社に有利かを、シミュレーターで具体的な数値として比較できます。リスクシナリオ別の試算も可能です。"
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
