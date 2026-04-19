import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "市場連動型プランのおすすめは？法人が選ぶ判断基準";
const pageDescription =
  "市場連動型プランは法人におすすめできるのか？使用パターン・固定費比率・リスク許容度の3軸で判断基準を整理し、おすすめできる業種・控えるべき業種を具体例とチェックリストで提示します。";
const pageUrl =
  "https://simulator.eic-jp.org/market-linked-plan-recommendation";

// --- 3つの判断軸 ---
const judgeAxes: {
  axis: string;
  recommended: string;
  caution: string;
}[] = [
  {
    axis: "① 使用パターン（昼夜・時間帯）",
    recommended:
      "JEPXが安い時間帯（太陽光が出る昼、需要の低い深夜）に使用が集中する業態。物流倉庫・夜間稼働工場・サーバ室など。",
    caution:
      "夕方〜夜の家庭需要ピーク帯に稼働が集中する業態。小売チェーン・飲食・ジム等は不利になりやすい。",
  },
  {
    axis: "② 固定費比率（電気代/売上）",
    recommended:
      "電気代が売上の1〜3%程度で、数%の単価変動を吸収できる事業。オフィス業・ソフトウェア業・中規模製造など。",
    caution:
      "電気代が売上の8〜15%を占める電力多消費事業（データセンター・冷蔵倉庫・電炉・印刷）。スパイク1ヶ月で年間予算を超えるリスク。",
  },
  {
    axis: "③ リスク許容度（資金繰り・社内合意）",
    recommended:
      "月次キャッシュフローに余裕があり、経営層がボラティリティを許容済み。予算変動を四半期単位で吸収できる体制。",
    caution:
      "予算が月次で厳格管理され、上振れを役員稟議にかけねばならない組織。自治体・公的機関・厳格な予算管理企業。",
  },
];

// --- 判断チェックリスト ---
const checklist: string[] = [
  "JEPXスポット価格の月次推移（直近12ヶ月）を社内で読み解ける担当者がいる",
  "過去3年の月次使用量と時間帯別使用データ（30分値）を取得・分析できる",
  "電気代が前月比+50%になった場合でも、当月キャッシュで支払える資金余力がある",
  "値上げ局面の説明資料・稟議プロセスがあらかじめ合意されている",
  "固定プランへの切替オプション（途中解約・再見積）を契約書で確認済み",
  "猛暑・厳冬・需給ひっ迫時に使用量を絞るピークカット運用ができる",
];

// --- おすすめ業種・控えるべき業種 ---
const industryRec: { industry: string; fit: "recommended" | "caution"; reason: string }[] = [
  {
    industry: "物流倉庫（常温中心、深夜稼働あり）",
    fit: "recommended",
    reason: "深夜帯の市場価格が安く、稼働時間帯とJEPXの下落時間が合致しやすい。",
  },
  {
    industry: "オフィスビル（一般テナント）",
    fit: "recommended",
    reason: "固定費比率が低く、昼休み・夜間に負荷が下がるため市場連動の恩恵を受けやすい。",
  },
  {
    industry: "データセンター",
    fit: "caution",
    reason: "24時間高負荷で回避運用ができず、JEPXスパイク時に月次コストが一気に跳ねる。",
  },
  {
    industry: "冷蔵・冷凍倉庫",
    fit: "caution",
    reason: "電気代比率が高く設備停止が難しいため、スポット高騰時の影響をもろに受ける。",
  },
  {
    industry: "小売チェーン・飲食店",
    fit: "caution",
    reason: "夕方の家庭需要ピーク帯と稼働が重なり、月次で単価が跳ねる期間が多い。",
  },
  {
    industry: "中規模製造業（昼稼働中心）",
    fit: "recommended",
    reason: "太陽光発電量が多い昼間の市場価格が安く、生産計画と市場価格を合わせやすい。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "市場連動 プラン おすすめ",
    "市場連動型プラン 法人",
    "市場連動 電気 おすすめ",
    "JEPX 連動 プラン おすすめ",
    "市場連動 メリット デメリット 法人",
    "市場連動プラン 判断基準",
    "市場連動 向き不向き 業種",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      { url: "/api/og/plan-types", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/plan-types"],
  },
};

// --- Page Component ---
export default function MarketLinkedPlanRecommendationPage() {
  return (
    <>
      <ArticleJsonLd
        headline={pageTitle}
        description={pageDescription}
        url={pageUrl}
        datePublished="2026-04-19"
        breadcrumbItems={[
          { name: "ホーム", url: "https://simulator.eic-jp.org/" },
          {
            name: "契約メニューの違いを知る",
            url: "https://simulator.eic-jp.org/articles/plan-types",
          },
          { name: "市場連動型プランのおすすめ判断基準" },
        ]}
      />
      <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
        {/* パンくずナビ */}
        <nav
          aria-label="パンくずリスト"
          className="mb-4 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Link href="/" className="hover:text-sky-700 hover:underline">
            ホーム
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/articles/plan-types"
            className="hover:text-sky-700 hover:underline"
          >
            契約メニューの違いを知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">市場連動型プランのおすすめ</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            契約メニューの違いを知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            市場連動型プランのおすすめは？法人が選ぶ判断基準
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            「市場連動型プランは法人におすすめですか？」という問いに対する答えは、
            <strong>業態と運用体制によってまったく逆になります</strong>
            。JEPXスポット価格が安い時間帯に使用が集中する業態では単価メリットが大きい一方、ピーク帯に使用が集中する業態・電気代比率が高い業態では逆に月次コストが跳ねるリスクが上回ります。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、使用パターン・固定費比率・リスク許容度の3軸でおすすめできる／できない条件を整理し、業種別の具体例とチェックリストで判断プロセスを実務化します。
            プランの仕組みから押さえたい方は先に
            <Link
              href="/market-linked-plan"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              市場連動プランとは
            </Link>
            を読むと判断軸が整理しやすくなります。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 判断軸 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              おすすめできるかを判断する3つの軸
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランの是非は、単価の平均値ではなく
              <strong>自社条件との相性</strong>
              で決まります。以下3軸の組み合わせで向き不向きを見極めます。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      判断軸
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      おすすめできるケース
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      控えるべきケース
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {judgeAxes.map((a) => (
                    <tr
                      key={a.axis}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {a.axis}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {a.recommended}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {a.caution}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 業種別の適性例 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              業種別の適性例
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              業種ごとに、使用パターンと電気代比率の典型から市場連動型プランの適性を整理しました。あくまで目安であり、個別条件（稼働時間・ピーク時間帯・固定費構造）で結論は変わります。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {industryRec.map((r) => (
                <div
                  key={r.industry}
                  className={
                    r.fit === "recommended"
                      ? "rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                      : "rounded-xl border border-rose-200 bg-rose-50 p-4"
                  }
                >
                  <p
                    className={
                      r.fit === "recommended"
                        ? "text-xs font-semibold text-emerald-700"
                        : "text-xs font-semibold text-rose-700"
                    }
                  >
                    {r.fit === "recommended"
                      ? "市場連動の検討余地あり"
                      : "控えるべき業種"}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {r.industry}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {r.reason}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* チェックリスト */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              判断プロセスのチェックリスト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランを選ぶ前に、以下6点を満たしているかを社内で確認してください。
              <strong>3つ以上「No」があるなら、固定プランまたはハイブリッド型を優先検討する</strong>
              のが現実的な判断です。
            </p>
            <ul className="mt-4 space-y-2">
              {checklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm leading-7 text-slate-700"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                    {i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 運用ポイント */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              選んだ後の運用ポイント
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              市場連動型プランは「契約して終わり」ではなく、月次のJEPX価格確認・需給ひっ迫時のピークカット運用・年度単位の切替判断までがセットです。具体的には、
              <strong>
                月次レポートでJEPX月平均と前年比を確認し、四半期単位で固定プランとの乖離を試算
              </strong>
              する体制を構築できれば、上振れ局面でも対応余地を残せます。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              あわせて
              <Link
                href="/market-linked-risk-internal-explanation"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                市場連動のリスクを社内説明するポイント
              </Link>
              、
              <Link
                href="/hybrid-electricity-plan-explained"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                ハイブリッド型プラン
              </Link>
              の比較も、選択肢を広げるうえで有効です。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  市場連動の向き不向きは「平均単価」ではなく、使用パターン・固定費比率・リスク許容度の3軸で決まる。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  物流倉庫・オフィス・昼稼働製造には検討余地あり。データセンター・冷蔵倉庫・小売・飲食では控えるのが無難。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  チェックリスト6項目中「No」が3つ以上なら、固定プランまたはハイブリッド型を優先検討。
                </span>
              </li>
            </ul>
          </section>
        </section>

        {/* 関連リンク */}
        <div className="mt-8">
          <RelatedLinks
            heading="関連ページ"
            links={[
              {
                href: "/market-linked-plan",
                title: "市場連動プランとは",
                description:
                  "市場価格に連動する契約の基本構造と、単価の決まり方を整理します。",
              },
              {
                href: "/market-linked-vs-fixed",
                title: "市場連動プランと固定プランの違い",
                description:
                  "おすすめ判断の前に押さえる、基本の比較軸を整理した入口記事。",
              },
              {
                href: "/market-linked-plan-suited-businesses",
                title: "市場連動プランが向く可能性がある法人の特徴",
                description:
                  "向き不向きの業種特徴を、選択の前提条件とあわせて整理します。",
              },
              {
                href: "/businesses-not-suited-for-market-linked-electricity-plan",
                title: "市場連動が向かない業種",
                description:
                  "避けた方がよい業態の典型例と、その理由を実務目線で整理。",
              },
              {
                href: "/hybrid-electricity-plan-explained",
                title: "ハイブリッド型電力プランとは",
                description:
                  "固定と市場連動を組み合わせる代替案のメリット・デメリット。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社条件で市場連動プランの適性を診断する"
            description="契約区分・月間使用量・時間帯別の使用割合を入力して、固定プランと市場連動プランの試算差を比較できます。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門家に相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
