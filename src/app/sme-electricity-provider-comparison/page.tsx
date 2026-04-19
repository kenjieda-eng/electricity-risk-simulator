import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "中小企業向け電力会社の選び方｜比較で見るべき5項目";
const pageDescription =
  "中小企業が電力会社を比較するときに必ず確認したい5項目（料金単価・契約期間・燃調費の上限・サポート体制・経営安定性）を整理。新電力と大手電力の比較軸、「単価だけで選ぶ」落とし穴まで実務目線でまとめます。";
const pageUrl =
  "https://simulator.eic-jp.org/sme-electricity-provider-comparison";

// --- 比較5項目 ---
const compareItems: { no: number; title: string; point: string; body: string }[] = [
  {
    no: 1,
    title: "料金単価（基本料金 + 従量料金 + 燃調費ルール）",
    point: "「単価」だけでなく「三層構造」で比較する",
    body: "見積書の最上段に書かれている従量単価だけを見ても、実際の請求額は比較できません。基本料金（契約アンペア/kW単価）、従量料金（時間帯・段階別）、燃料費調整額のルール（基準燃料価格・上限の有無）の3層をそろえて年間総額ベースで見ることが必要です。同じ「25円/kWh」でも、基本料金が2倍違えば月額で数千円の差がつきます。",
  },
  {
    no: 2,
    title: "契約期間と違約金",
    point: "1年契約と3年契約で違約金額が桁違いになる",
    body: "中小企業向けプランでは1年〜3年の契約期間が設定され、中途解約時に違約金が発生するケースが一般的です。違約金は「残存契約期間 × 月間使用量 × 違約金単価（2〜5円/kWh）」で計算されることが多く、3年契約の初年度で解約すると数十万円規模になることも。逆に短期契約は単価が割高になる傾向があり、自社の事業計画（移転・閉店予定）とセットで判断します。",
  },
  {
    no: 3,
    title: "燃調費の上限有無",
    point: "規制料金と自由料金の分水嶺",
    body: "燃料費調整額には規制料金（低圧の従量電灯B・Cなど）に設定される上限があり、LNG・原油価格が急騰しても上限を超えた分は電力会社が被ります。一方、自由料金プラン（多くの新電力）では上限なしが多く、2022年のウクライナ危機時には請求が2倍近くに跳ね上がった事例も発生しました。「燃調費上限あり」と明記されているかは、中小企業にとって最も重要な保険です。",
  },
  {
    no: 4,
    title: "カスタマーサポート体制",
    point: "平時のコール有無・緊急時の対応ルート",
    body: "中小企業では専任の電力担当者を置くのが難しく、停電や契約変更の問合せ時にサポートがつながるかが業務継続を左右します。電話窓口の営業時間、メール返信のSLA、災害時の24時間体制の有無、Web上のマイページで請求明細・使用量データが見られるかを確認します。電話窓口を持たない一部の新電力はメール対応のみで、緊急時の不安要素になり得ます。",
  },
  {
    no: 5,
    title: "経営の安定性",
    point: "新電力の市場撤退リスクをどう見るか",
    body: "2021〜2022年のJEPX高騰で数十社の新電力が事業撤退・契約解除を行い、取引先を失った中小企業が最終保障供給に駆け込む事態が多発しました。相手先の親会社・資本金・直近決算・再エネ電源の保有比率・市場調達依存度を公表情報で確認し、格安単価だけで飛びつかないことが重要です。法人向けの帝国データバンク・東京商工リサーチの企業情報で最低限のリスクチェックができます。",
  },
];

// --- 新電力 vs 大手電力 比較 ---
const providerTypeRows: {
  item: string;
  major: string;
  new: string;
}[] = [
  {
    item: "単価水準",
    major: "標準的（規制料金が基準）",
    new: "割安な場合が多い（-5〜-15%）",
  },
  {
    item: "燃調費の上限",
    major: "規制料金には上限あり",
    new: "上限なしが多い（急騰時リスク）",
  },
  {
    item: "契約期間",
    major: "1年自動更新が多い",
    new: "1〜3年固定が多い",
  },
  {
    item: "経営安定性",
    major: "高い（旧一般電気事業者）",
    new: "事業者により大きな差",
  },
  {
    item: "サポート体制",
    major: "電話窓口・店舗あり",
    new: "Web中心・メール対応が中心",
  },
  {
    item: "再エネプラン",
    major: "各種メニュー用意",
    new: "特化型事業者が多い",
  },
];

// --- 落とし穴 ---
const pitfalls: { title: string; body: string }[] = [
  {
    title: "単価の比較で「従量単価」だけを見る",
    body: "基本料金・燃調費ルールを無視すると、実際の請求額と見積試算が乖離します。年間総額で比較してください。",
  },
  {
    title: "初年度だけの特別価格で判断する",
    body: "初年度のみキャンペーン単価で、2年目以降に大幅値上げするケースがあります。期間中の単価推移を確認しましょう。",
  },
  {
    title: "燃調費「なし」を割安と誤解する",
    body: "燃調費相当が従量単価に含まれているだけで、結果として割高になるプランも。燃料変動時の反映ルールを確認します。",
  },
  {
    title: "解約条件を読まずに契約する",
    body: "違約金・解約通告期間・自動更新の条件は契約時に確認必須。移転計画があれば期間設計で揃えます。",
  },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "中小企業 電力会社 選び方",
    "中小企業 電気 比較",
    "新電力 比較",
    "法人 電力会社 比較",
    "電力会社 切替 中小企業",
    "燃調費 上限",
    "電力会社 違約金",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/api/og/sme-guide",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/api/og/sme-guide"],
  },
};

// --- Page Component ---
export default function SmeElectricityProviderComparisonPage() {
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
            name: "中小企業・小規模事業者向け",
            url: "https://simulator.eic-jp.org/articles/sme-guide",
          },
          { name: "中小企業向け電力会社の選び方" },
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
            href="/articles/sme-guide"
            className="hover:text-sky-700 hover:underline"
          >
            中小企業・小規模事業者向け
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">電力会社の選び方</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            中小企業・小規模事業者向け
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            中小企業向け電力会社の選び方｜比較で見るべき5項目
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            中小企業が電力会社を切り替えるとき、検索しやすいのは「単価」ですが、
            それだけで選ぶと燃調費急騰・違約金・事業撤退など想定外のリスクを抱えやすくなります。
            限られた時間で損をしない選定をするには、比較項目を5つに絞ることが近道です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、<strong>料金単価・契約期間・燃調費の上限・サポート体制・経営安定性</strong>の5軸を、
            新電力と大手電力の違い、陥りがちな落とし穴とあわせて整理します。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* 比較5項目 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              比較で見るべき5項目
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下の5項目を、同じ基準で複数社の見積書から拾い出して並べることで、
              「単価だけ見たとき」と「総合評価で見たとき」の結論が逆転するケースを未然に防げます。
            </p>

            <div className="mt-4 space-y-3">
              {compareItems.map((c) => (
                <div
                  key={c.no}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                      {c.no}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-sky-700">
                        ポイント：{c.point}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-700">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 新電力 vs 大手電力 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              新電力 vs 大手電力 比較視点
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              一般に新電力は単価が割安な一方、燃調費上限なし・サポート縮小などリスクも抱えます。
              大手電力（旧一般電気事業者）は安定性で勝る代わりに単価が標準的です。
              下表で主要軸を整理します。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      比較軸
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      大手電力（旧一般電気事業者）
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      新電力
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {providerTypeRows.map((row) => (
                    <tr
                      key={row.item}
                      className="odd:bg-white even:bg-slate-50"
                    >
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.item}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.major}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.new}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小規模事業者は「数%の単価メリット」と「撤退・急騰リスク」をてんびんにかける判断が必要です。
              <Link
                href="/low-voltage-review-essentials"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                低圧契約の見直し要点
              </Link>
              と合わせて、自社の属性を整理するのがおすすめです。
            </p>
          </section>

          {/* 落とし穴 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              「単価だけで選ぶ」陥りがちな落とし穴
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              小規模事業者が切替で失敗する典型パターンを4つにまとめました。
              どれも見積段階で確認すれば回避できるものです。
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {pitfalls.map((p, i) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-rose-200 bg-rose-50 p-4"
                >
                  <h3 className="text-base font-semibold text-rose-900">
                    落とし穴 {i + 1}：{p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 実務ステップ */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              比較見積を取る実務ステップ
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              中小企業が最短で比較を完結させる流れは、ステップを4つに絞ると迷いが減ります。
              現契約書と直近12ヶ月の請求書をまず手元に揃えるところから始めます。
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
              <li>
                現契約書（供給約款・覚書）と直近12ヶ月の電力使用量データを準備する。
              </li>
              <li>
                2〜3社に同じフォーマットで見積依頼を出す（使用量・契約電力・時間帯別パターンを共有）。
              </li>
              <li>
                5項目を表にして並べ、年間総額・想定リスクの両面で評価する。
              </li>
              <li>
                契約書ドラフトを取り寄せ、違約金・料金改定条項・自動更新条項を確認してから調印する。
              </li>
            </ol>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  中小企業の電力会社比較は「単価・期間・燃調費上限・サポート・経営安定性」の5軸で。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  単価だけの比較は危険。燃調費の上限ルールは燃料高騰時の保険として最重要。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  新電力は割安と引き換えに撤退・急騰リスクを抱える。大手との使い分けで検討する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  比較見積は同フォーマットで出し、年間総額とリスクをセットで評価するのが基本。
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
                href: "/sme-electricity-basics",
                title: "中小企業の電気料金の基礎｜低圧契約を理解する",
                description:
                  "比較の前提となる低圧契約の構造と、料金メニューの読み方を整理します。",
              },
              {
                href: "/low-voltage-review-essentials",
                title: "低圧契約の見直し要点｜小規模事業者向けチェックリスト",
                description:
                  "契約アンペア・プラン・使用実態の3観点で確認する要点をチェックリスト化。",
              },
              {
                href: "/sme-cost-reduction-quick-wins",
                title: "中小企業の電気代削減｜今日から始める即効策",
                description:
                  "契約切替以外の運用改善・低コスト機器更新の選択肢もあわせて。",
              },
              {
                href: "/faq-contract-review-where-to-start",
                title: "【FAQ】法人の電力契約見直しは何から始める？",
                description:
                  "見直しから切替完了までの手順と、各ステップで確認すべきポイント。",
              },
              {
                href: "/auto-renewal-clause-risks",
                title: "自動更新条項のリスク｜意図しない長期拘束を避ける契約管理",
                description:
                  "契約書確認でうっかり見落とす自動更新の罠と、回避の手続き。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="自社の切替後の料金をシミュレーションで確認する"
            description="現在の契約条件を入力するだけで、制度要因・燃調費変動も織り込んだ年間コストを可視化できます。比較の判断材料としてご活用ください。"
            links={[
              { href: "/", label: "シミュレーターで診断する" },
              { href: "/contact", label: "専門スタッフに相談する" },
            ]}
          />
        </div>
      </main>
    </>
  );
}
