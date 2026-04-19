import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import { ArticleJsonLd } from "../../components/seo/JsonLd";

// --- 定数 ---
const pageTitle =
  "電気料金の見積書が届いたら｜比較・評価の実践チェックリスト";
const pageDescription =
  "法人の電力見積書を複数社で比較するときに抜け漏れを防ぐための実践チェックリスト。単価の種類・契約期間・燃調費・再エネ賦課金・容量拠出金・付帯サービス・支払条件・担当者対応まで8領域で整理し、比較表の項目例も掲載します。";
const pageUrl =
  "https://simulator.eic-jp.org/electricity-quote-evaluation-checklist";

// --- 8領域チェックリスト ---
const checklistAreas: {
  area: string;
  items: { label: string; detail: string }[];
}[] = [
  {
    area: "1. 単価の種類（基本料金／電力量料金／燃調費上限）",
    items: [
      {
        label: "基本料金単価（円/kW）",
        detail:
          "契約電力に対して課される単価。高圧以上では契約電力×基本料金単価で固定費が決まる。",
      },
      {
        label: "電力量料金単価（円/kWh）",
        detail:
          "夏季・その他季・時間帯別の単価差の有無、土日料金の適用有無も確認。",
      },
      {
        label: "燃料費調整額の上限・計算対象",
        detail:
          "自由料金は上限撤廃されているケースが多い。上限の有無・算定基準燃料価格を確認。",
      },
    ],
  },
  {
    area: "2. 契約期間と中途解約条件",
    items: [
      {
        label: "契約期間（1年／2年／3年）",
        detail:
          "長期契約は単価が優位な一方、途中の市況好転を取りこぼすリスクがある。",
      },
      {
        label: "自動更新条項と通知期限",
        detail:
          "満了○ヶ月前までに申出なければ自動更新となる条項が一般的。通知期限は必ず記録する。",
      },
      {
        label: "中途解約時の違約金計算式",
        detail:
          "「残契約期間×月平均使用量×○円/kWh」などの典型式と、免除事由の有無を確認。",
      },
    ],
  },
  {
    area: "3. 燃料費調整額の計算方式",
    items: [
      {
        label: "基準燃料価格・換算係数",
        detail:
          "事業者ごとに基準値が異なる。同じ市況でも燃調額に差が出るため単価と合わせて評価。",
      },
      {
        label: "3ヶ月平均のタイムラグ",
        detail:
          "検針月に反映される燃調は通常3〜4ヶ月前の燃料価格ベース。予算化の前提として把握。",
      },
      {
        label: "市場価格連動要素の有無",
        detail:
          "「燃調」という名称でも実質的にJEPX連動の項目を含むケースがあるため条項要確認。",
      },
    ],
  },
  {
    area: "4. 再エネ賦課金の扱い",
    items: [
      {
        label: "転嫁方式（国一律単価／事業者別）",
        detail:
          "原則は国一律だが、減免認定を持つ事業者の場合の扱いや還付タイミングを確認。",
      },
      {
        label: "見積書への記載",
        detail:
          "単価込みか別建てかで見た目の単価が変わる。見積比較時は同じ扱いに揃えて比較する。",
      },
    ],
  },
  {
    area: "5. 容量拠出金の扱い",
    items: [
      {
        label: "単価内包か別建てか",
        detail:
          "固定プランは単価に内包、市場連動プランは別建てが多い。見積比較では表記を統一する。",
      },
      {
        label: "年度改定の反映時期",
        detail:
          "OCCTOの約定結果に応じて年度改定される。2年目・3年目の単価上昇想定を確認。",
      },
    ],
  },
  {
    area: "6. 付帯サービス（デマンド監視・請求分析）",
    items: [
      {
        label: "デマンド監視サービスの有無",
        detail:
          "30分デマンドのアラート通知やピーク抑制支援の有無・費用負担を確認。",
      },
      {
        label: "請求書分析・レポート",
        detail:
          "月次の使用量推移や年間ベンチマークレポートの提供有無。",
      },
      {
        label: "設備診断・省エネ提案",
        detail:
          "契約電力見直しやLED化の無償診断など、付随コンサルの範囲。",
      },
    ],
  },
  {
    area: "7. 支払条件",
    items: [
      {
        label: "支払サイト",
        detail:
          "月末締翌月○日払いなど、既存の会計処理との整合性を確認。",
      },
      {
        label: "支払方法",
        detail:
          "口座振替・銀行振込・クレジットカードの可否と手数料負担。",
      },
      {
        label: "インボイス登録",
        detail:
          "小売電気事業者の登録番号と適格請求書対応を確認。",
      },
    ],
  },
  {
    area: "8. 担当者のレスポンス・体制",
    items: [
      {
        label: "見積依頼〜提出までのリードタイム",
        detail:
          "3営業日以内か2週間かで、更新期限前の相見積もり難易度が変わる。",
      },
      {
        label: "契約後の問合せ窓口",
        detail:
          "営業担当・カスタマーサポート・夜間緊急連絡先の有無を確認。",
      },
      {
        label: "質問への回答の正確さ",
        detail:
          "条項の意味を質問した際の回答に曖昧さがないか。のちの交渉のしやすさに直結する。",
      },
    ],
  },
];

// --- 比較表テンプレート項目 ---
const templateColumns: { col: string; note: string }[] = [
  { col: "事業者名", note: "自社名・登録番号を併記" },
  { col: "プラン種別", note: "固定／市場連動／ハイブリッド" },
  { col: "契約期間", note: "1年／2年／3年" },
  { col: "基本料金単価（円/kW）", note: "契約電力区分ごと" },
  { col: "電力量料金単価（円/kWh）", note: "夏季／その他季の併記" },
  { col: "燃調計算方式", note: "上限有無・基準価格" },
  { col: "再エネ賦課金", note: "単価込か別建か" },
  { col: "容量拠出金", note: "単価込か別建か" },
  { col: "年間想定コスト", note: "自社の12ヶ月実績を代入して算出" },
  { col: "中途解約違約金", note: "計算式と免除事由" },
  { col: "付帯サービス", note: "デマンド監視・分析レポート等" },
  { col: "支払条件", note: "支払サイト・方法" },
];

// --- Metadata ---
export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 見積書 比較",
    "電力 相見積もり チェックリスト",
    "法人 電気 見積 評価",
    "電力契約 見積書 見方",
    "電気代 見積 比較表",
    "電力 見積 チェック項目",
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
        url: "/api/og/review-points",
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
    images: ["/api/og/review-points"],
  },
};

// --- Page Component ---
export default function ElectricityQuoteEvaluationChecklistPage() {
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
            name: "見直しポイントを知る",
            url: "https://simulator.eic-jp.org/articles/review-points",
          },
          { name: "見積書の比較・評価チェックリスト" },
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
            href="/articles/review-points"
            className="hover:text-sky-700 hover:underline"
          >
            見直しポイントを知る
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-slate-700">見積書の比較・評価チェックリスト</span>
        </nav>

        {/* ヘッダー */}
        <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <p className="text-xs font-semibold tracking-wide text-sky-700">
            見直しポイントを知る
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            電気料金の見積書が届いたら｜比較・評価の実践チェックリスト
          </h1>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            複数の電力会社に相見積もりを依頼すると、似たような見積書が数枚そろいます。
            表紙の単価だけを比べて一番安い会社を選ぶと、2年目に想定外の値上げや違約金トラブルに遭遇することが少なくありません。
            評価軸を8領域に分解し、同じ条件で比較できる状態に揃えるのが実務の第一歩です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            このページでは、見積書が届いてから最終候補を絞り込むまでのチェックリストと、
            Excel比較表に使える12項目のテンプレートをまとめています。
            社内稟議や経営層への説明にもそのまま使える構成です。
          </p>
        </header>

        <section className="mt-6 space-y-6">
          {/* なぜチェックリストが必要か */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              なぜ単価比較だけでは不十分なのか
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              法人向けの電気料金は、基本料金と電力量料金だけで決まるわけではありません。
              燃料費調整額、再エネ賦課金、容量拠出金など複数の上乗せ項目があり、
              さらに契約期間・違約金・付帯サービス・支払条件まで含めた総合的な比較が必要です。
              見積書上の電力量料金単価だけを揃えて比較すると、年間コストで10%以上の差が見落とされることもあります。
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              とくに<Link
                href="/market-linked-vs-fixed"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                固定プランと市場連動プラン
              </Link>
              が混在している場合、単価の見え方は大きく変わります。
              まずは8領域のチェックリストで、各見積書を同じ土俵に揃えることから始めましょう。
            </p>
          </section>

          {/* チェックリスト本体 */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              8領域の実践チェックリスト
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              以下の8領域について、各見積書で確認できる項目・確認できない項目を整理します。
              確認できない項目は必ず電力会社に問い合わせて埋めてから比較表に落とし込みます。
            </p>

            <div className="mt-4 space-y-4">
              {checklistAreas.map((area) => (
                <div
                  key={area.area}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {area.area}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {area.items.map((item) => (
                      <li
                        key={item.label}
                        className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
                      >
                        <p className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-700">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 比較表テンプレート */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              Excel比較表テンプレート（12項目）
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              チェックリストで確認した内容を横並びで比較するための、
              Excel比較表の推奨項目です。
              「年間想定コスト」は自社の直近12ヶ月の実使用量を代入して算出すると、
              単価だけでは見えない総額差を可視化できます。
            </p>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[540px] border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-left text-slate-700">
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      項目
                    </th>
                    <th className="border border-slate-300 px-3 py-2 font-semibold">
                      記入メモ
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {templateColumns.map((row) => (
                    <tr key={row.col} className="odd:bg-white even:bg-slate-50">
                      <td className="border border-slate-300 px-3 py-2 font-medium">
                        {row.col}
                      </td>
                      <td className="border border-slate-300 px-3 py-2">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              比較表の作り方は
              <Link
                href="/quotation-comparison-table-guide"
                className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
              >
                比較表ガイド
              </Link>
              でも詳しく解説しています。
              稟議資料に添付する際は、最終候補2社に絞り込んだバージョンを別シートで作ると承認を得やすくなります。
            </p>
          </section>

          {/* よくある見落とし */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-xl font-semibold text-slate-900">
              比較時に見落としやすい3つの罠
            </h2>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  1. 「燃調費なし」表記の罠
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  燃調を徴収しない代わりに電力量料金単価に織り込まれているケース。
                  市況が下がっても単価据え置きとなり、長期で見るとコスト差が出やすい。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  2. 初年度だけの特別単価
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  「初年度のみ割引」の記載を見落とし、2年目から単価が戻るケース。
                  契約期間全体の平均単価を必ず試算する。
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  3. 違約金の計算対象外期間
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  契約から最初の6ヶ月は違約金が2倍など、
                  条項に細かい例外が書かれていることがある。
                </p>
              </div>
            </div>
          </section>

          {/* まとめ */}
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h2 className="text-xl font-semibold text-slate-900">まとめ</h2>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  見積書の比較は単価だけではなく、8領域×複数項目で整理する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  確認できない項目は必ず問い合わせて、同じ土俵に揃えてから比較する。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  Excel比較表は12項目をベースに、年間想定コスト列を必ず入れる。
                </span>
              </li>
              <li className="flex gap-2">
                <span className="shrink-0 text-sky-700">&#9679;</span>
                <span>
                  燃調の扱い・初年度特価・違約金例外の3つは、典型的な見落としポイント。
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
                href: "/quotation-comparison-table-guide",
                title: "見積比較表の作り方ガイド",
                description:
                  "条件を揃えて比較するための比較表の作り方を、項目選定から稟議提出まで整理します。",
              },
              {
                href: "/how-to-read-electricity-quote",
                title: "法人向け電気料金見積書の見方",
                description:
                  "見積書の標準的なフォーマットと、確認しておきたい項目を実務向けに解説します。",
              },
              {
                href: "/information-to-prepare-before-quotation-request",
                title: "見積依頼前に揃えたい情報",
                description:
                  "精度の高い見積を取るための使用量データ・契約情報の準備項目を整理します。",
              },
              {
                href: "/not-just-unit-price-comparison-checklist",
                title: "単価比較だけにならないチェックリスト",
                description:
                  "総額比較のための調整費・前提条件・リスク要因のチェックリストを提供します。",
              },
              {
                href: "/electricity-contract-period-guide",
                title: "電力契約の期間選び（1年・2年・3年）",
                description:
                  "契約期間ごとのメリット・デメリットと、自動更新・早期解約の扱いを整理します。",
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div className="mt-6">
          <ContentCta
            heading="見積比較の精度を上げたら、リスクも数値で把握する"
            description="自社の使用量・契約区分を入力して、現在の契約条件とシナリオ別のコスト上昇幅を確認できます。見積評価と合わせると判断材料がそろいます。"
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
