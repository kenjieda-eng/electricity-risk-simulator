import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "ドラッグストアの電気代削減｜冷蔵・照明・空調の見直しポイント";
const pageDescription =
  "ドラッグストアの電気代を削減する具体策を、冷蔵ショーケース・LED照明・空調のエリア別最適化の3軸で整理。路面店・駅ナカ・郊外ロードサイドの店舗フォーマット別に、優先して見直すべきポイントを解説します。";
const pageUrl =
  "https://simulator.eic-jp.org/drugstore-electricity-cost-reduction";

// --- 削減の3軸 ---
const reductionAxes: {
  axis: string;
  share: string;
  actions: string[];
}[] = [
  {
    axis: "① 冷蔵・冷凍ショーケース（食品・飲料・医薬品）",
    share: "店舗電力の約35〜45%（最大の消費源）",
    actions: [
      "ナイトカバー（夜間カーテン）の導入で冷気漏れを抑制（−5〜10%）",
      "ショーケースのインバータ化・霜取りタイマー最適化（−10〜15%）",
      "扉付きリーチインへの更新で常時開放型より−30〜40%",
      "冷凍機の凝縮圧力制御最適化と定期洗浄で年間数%改善",
    ],
  },
  {
    axis: "② LED照明（売場・バックヤード・看板）",
    share: "店舗電力の約20〜30%",
    actions: [
      "蛍光灯・Hf器具をLEDへ一括更新（−50〜60%）",
      "売場ゾーニング別に調光（メイン棚・レジ周り・バックヤード）",
      "閉店後の看板・ファサード照明の自動消灯制御",
      "人感センサ連動（バックヤード・トイレ・休憩室）",
    ],
  },
  {
    axis: "③ 空調（エリア別最適化）",
    share: "店舗電力の約20〜30%",
    actions: [
      "高効率業務用エアコンへの更新（更新前比−25〜35%）",
      "売場・レジ周り・バックヤードでゾーニング制御",
      "冷蔵ショーケースの排熱を考慮した設定温度の再調整",
      "フィルター清掃の頻度を四半期に1回から月1回へ",
    ],
  },
];

// --- 店舗フォーマット別の優先度 ---
const formatPriority: {
  format: string;
  scale: string;
  priority: string;
  note: string;
}[] = [
  {
    format: "路面店（50〜80坪、市街地）",
    scale: "月使用量 6,000〜12,000 kWh",
    priority: "空調>照明>冷蔵",
    note: "営業時間が長く空調負荷が大きい。ガラス面が広い店舗では日射遮蔽（フィルム）も効果大。",
  },
  {
    format: "駅ナカ・駅前小型店（30〜50坪）",
    scale: "月使用量 4,000〜8,000 kWh",
    priority: "冷蔵>照明>空調",
    note: "ドリンク・アイスの冷蔵比率が高く、扉付きリーチイン更新の投資回収が早い。",
  },
  {
    format: "郊外ロードサイド（100坪超、駐車場併設）",
    scale: "月使用量 12,000〜25,000 kWh",
    priority: "冷蔵>空調>照明",
    note: "冷凍食品・医薬品の在庫量が多く、大型冷凍機の運用最適化の影響度が最も大きい。",
  },
  {
    format: "調剤併設店（処方箋窓口＋物販）",
    scale: "月使用量 7,000〜15,000 kWh",
    priority: "空調>冷蔵>照明",
    note: "調剤室の温湿度管理（薬品保管）が優先事項。冷蔵更新と空調ゾーニングを同時検討。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "ドラッグストア 電気代 削減",
    "ドラッグストア 省エネ",
    "ドラッグストア 電気料金 削減",
    "薬局 電気代 削減",
    "冷蔵ショーケース 省エネ",
    "ドラッグストア LED",
    "店舗 空調 省エネ",
    "多店舗 電力 削減",
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
      { url: "/api/og/industry-guide", width: 1200, height: 630, alt: pageTitle },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/industry-guide"],
  },
};

// --- Page Component ---
export default function DrugstoreElectricityCostReductionPage() {
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
            name: "業種別の見直しポイント集",
            url: "https://simulator.eic-jp.org/articles/industry-guide",
          },
          { name: "ドラッグストアの電気代削減" },
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
            href="/articles/industry-guide"
            className="hover:text-sky-700 hover:underline"
          >
            業種別の見直しポイント集
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">ドラッグストアの電気代削減</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            業種別の見直しポイント集
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            ドラッグストアの電気代削減｜冷蔵・照明・空調の見直しポイント
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            ドラッグストアの電気代は、
            <strong>冷蔵ショーケースが最大の消費源（約35〜45%）</strong>
            、続いてLED照明（20〜30%）、空調（20〜30%）という構成が典型です。削減の打ち手は設備更新・運用改善・ゾーニング制御の組み合わせで、業種特性上は
            <strong>冷蔵まわりから着手するのが最も費用対効果が高い</strong>
            のが定石です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、冷蔵・照明・空調の3軸で具体的な削減アクションを整理し、路面店・駅ナカ・郊外ロードサイド・調剤併設店の4フォーマット別に優先順位を提示します。電力契約そのものの見直し論点は、
            <Link
              href="/drugstore-electricity-cost-review"
              className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
            >
              ドラッグストアの電気料金見直しポイント（契約編）
            </Link>
            を併読ください。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 電力構成の全体像 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              ドラッグストアの電力消費構成
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              食品・飲料を扱う現代型ドラッグストアは、かつての薬局型店舗と比べて冷蔵・冷凍設備の比重が格段に大きくなっています。年間ベースでは、冷蔵：照明：空調：その他（レジ・PC・給湯等）＝
              <strong>4：3：2：1</strong>
              程度の比率が典型で、冷蔵系の稼働時間が24時間である以上、この構成比は夜間営業の有無によらずほぼ変わりません。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              そのため、削減策の優先順位を付ける際は
              <strong>
                「常時稼働の冷蔵まわりを先に固め、次に営業時間帯の照明・空調を最適化する」
              </strong>
              という順番が、投資回収期間を短くする定石になります。
            </p>
          </section>

          {/* 3軸削減アクション */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              3軸別の削減アクション
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              冷蔵・照明・空調それぞれで、設備更新と運用改善の両面から打ち手を整理しました。店舗改修のタイミングで冷蔵更新を合わせ込むと、投資回収期間が3〜5年で見込めるケースが多い領域です。
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {reductionAxes.map((a) => (
                <div
                  key={a.axis}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {a.axis}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{a.share}</p>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-700">
                    {a.actions.map((act) => (
                      <li key={act}>{act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 店舗フォーマット別優先度 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              店舗フォーマット別の優先順位
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              同じドラッグストアでも、店舗フォーマットごとに最優先で手を打つべき領域が異なります。以下の4タイプに分けて整理すると、多店舗展開のチェーンでは「どの店舗群から着手するか」が判断しやすくなります。
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      フォーマット
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      規模感（月使用量）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      優先順位
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      ポイント
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {formatPriority.map((f) => (
                    <tr
                      key={f.format}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {f.format}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {f.scale}
                      </td>
                      <td className="border border-slate-300 px-3 py-2 font-semibold text-sky-700">
                        {f.priority}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {f.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 契約見直しとの組み合わせ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              設備対策と契約見直しの組み合わせ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              設備投資による削減は確実ですが、効果が出るまで半年〜1年の時間がかかります。並行して
              <strong>契約見直し</strong>
              を進めると、短期的なコスト削減と長期的な省エネを両立できます。多店舗チェーンの場合は、本部一括契約・複数エリアでの相見積・補助金活用（省エネ設備導入補助）をセットで検討するのが効率的です。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              具体的な契約見直しの進め方は
              <Link
                href="/multi-site-plan-selection"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                多拠点展開企業のプラン選定
              </Link>
              、補助金活用は
              <Link
                href="/articles/subsidies"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                補助金カテゴリ
              </Link>
              も参考にしてください。
            </p>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  ドラッグストアの電気代は冷蔵ショーケースが最大の消費源。まず冷蔵まわりから着手する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  冷蔵・照明・空調の3軸で、設備更新と運用改善の両面から打ち手を組み合わせる。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  路面店は空調、駅ナカは冷蔵、郊外大型店は冷凍機運用、調剤併設店は温湿度管理が優先事項。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  設備投資と並行して契約見直しを進めると、短期・長期の両方で削減効果を出せる。
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
                href: "/drugstore-electricity-cost-review",
                title: "ドラッグストアの電気料金見直しポイント（契約編）",
                description:
                  "冷蔵・照明と多拠点を踏まえた契約見直しの考え方を整理します。",
              },
              {
                href: "/convenience-store-electricity-cost-review",
                title: "コンビニの電気料金見直しポイント",
                description:
                  "24時間稼働の小売店舗としての類似論点を整理。比較に有用です。",
              },
              {
                href: "/retail-store-electricity-cost-review",
                title: "小売店舗の電気料金見直しポイント",
                description:
                  "照明・空調と営業時間を踏まえた小売業全般の見直し論点。",
              },
              {
                href: "/multi-site-plan-selection",
                title: "多拠点展開企業のプラン選定",
                description:
                  "本部一括契約・相見積・補助金活用の組み合わせ方を整理します。",
              },
              {
                href: "/shopping-mall-electricity-cost-review",
                title: "ショッピングモールの電気料金見直しポイント",
                description:
                  "モール内テナントとしてのドラッグストアを検討する際の参考に。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社店舗の削減余地を試算する"
            description="店舗規模・月間使用量・契約区分を入力すると、契約見直しと設備対策の両面から削減インパクトを試算できます。"
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
