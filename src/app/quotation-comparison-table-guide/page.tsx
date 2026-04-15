import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";


const pageTitle =
  "見積書比較表の作り方｜法人の電力契約で比較しやすい整理方法";
const pageDescription =
  "法人の電力契約見直しで複数社の見積書を横並び比較するための整理方法を解説。比較項目の選び方・条件の統一・経営層への説明に使いやすい比較表の作り方を整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電力 見積書 比較表 作り方",
    "電気料金 見積 比較 整理",
    "法人 電力 見積 横並び比較",
    "電力契約 見直し 比較表",
    "高圧 見積 比較 フォーマット",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/quotation-comparison-table-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/quotation-comparison-table-guide",
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

const comparisonSections = [
  {
    heading: "比較表を作る前の準備：条件の統一",
    content: [
      "複数社の見積書を横並びで比較するために最初に行うべきことは、比較条件の統一です。電力会社ごとに見積書の書式・計算前提が異なるため、そのまま並べても正確な比較になりません。燃料費調整額・再エネ賦課金・容量拠出金の含め方が各社で統一されていないと、表面上の金額差が実態のコスト差を反映しない比較表になります。",
      "最低限統一すべき条件は①試算に使う使用量データ（同一の月別使用量・デマンド実績）、②制度費用（再エネ賦課金・容量拠出金）の含め方（全社「含む」または全社「別途加算」で統一）、③燃料費調整額の扱い（含む場合はどの月の単価を使うか）の3点です。",
    ],
    checkPoints: [
      "全社が同一の使用量・デマンドデータで試算しているか",
      "再エネ賦課金・容量拠出金の含め方が統一されているか",
      "燃料費調整額の扱いが統一されているか",
      "試算の対象期間（年間か月間か）が統一されているか",
    ],
  },
  {
    heading: "比較表に含める主要項目",
    content: [
      "見積書比較表には、料金単価の比較に加えて、契約条件・リスク要因・非価格条件も含めることが重要です。コストだけで判断すると、解約条件や市場リスクを見落としたまま選択してしまうことがあります。",
      "主要な比較項目は大きく「料金条件」「コスト試算」「リスク評価」「契約条件」の4カテゴリで整理できます。それぞれのカテゴリに含める項目を事前に決めておくことで、担当者が変わっても一貫した比較ができます。",
    ],
    checkPoints: [
      "基本料金単価（円/kW）",
      "電力量料金単価（時間帯別、円/kWh）",
      "燃料費調整額の扱い（含む・別途・上限設定）",
      "年間コスト試算額（同一条件）",
      "契約期間・解約条件",
      "固定型か市場連動型かの区分",
    ],
  },
  {
    heading: "料金単価の比較方法",
    content: [
      "基本料金単価（円/kW）は現行契約との差を絶対値と率で示します。例えば「現行1,500円/kW → A社1,450円/kW（△50円/kW、△3.3%）」のように記載すると、削減幅が一目でわかります。電力量料金単価は時間帯別に設定されている場合、各時間帯の比較と合わせて「自社の稼働パターンで加重平均した実効単価」を算出して比較することが有効です。",
      "実効単価の算出方法は、各時間帯の月間使用量比率（例：昼間60%・夜間40%）に各時間帯の単価を乗じて合計します。例えば昼間単価12円/kWh・使用量60%、夜間単価8円/kWh・使用量40%の場合、実効単価は12×0.6 + 8×0.4 = 10.4円/kWhです。比較表にこの実効単価を記載することで、異なる時間帯区分を持つプランの実質的な単価が比較しやすくなります。",
    ],
    checkPoints: [
      "基本料金単価の現行比（円/kW、変化率）",
      "電力量料金の実効単価（自社稼働パターンで加重平均）",
      "季節別単価変動の考慮",
      "制度費用を含めたトータル単価の比較",
    ],
  },
  {
    heading: "年間コスト試算の作成方法",
    content: [
      "見積書比較表の核となる「年間コスト試算」は、直近12か月の実使用量データを各社の料金体系に当てはめて計算します。基本料金（月別）+ 電力量料金（月別）+ 燃料費調整額（試算条件）+ 制度費用を合計し、12か月分を積算したものが年間コスト試算額です。",
      "年間コスト試算を作る際は、使用量が多かった月（ピーク月）と少なかった月（閑散月）での単月試算も合わせて作成しておくと、月次のコスト変動幅が把握できます。また、燃料費調整額の変動シナリオ（現状維持・高騰ケース等）を複数用意して比較すると、リスク評価の材料になります。",
    ],
    checkPoints: [
      "直近12か月の月別使用量・デマンドデータの準備",
      "月別の基本料金・電力量料金の計算（各社）",
      "燃料費調整額の試算条件の設定（複数シナリオ）",
      "年間コスト合計と現行との差額試算",
    ],
  },
  {
    heading: "リスク評価の項目",
    content: [
      "コスト比較と同等以上に重要なのが、各プランのリスク評価です。市場連動型プランは通常時に安く見えますが、市場が高騰した際のコスト上振れリスクがあります。比較表には「市場連動型か固定型か」「燃料費調整額の上限設定の有無」「価格変動が発生した場合の最大コスト試算」を記載することで、リスクの可視化ができます。",
      "リスク評価では「最悪ケース（市場高騰・燃料高騰）での年間コスト試算」も作成しておくことが有用です。楽観シナリオ・現状維持シナリオ・悲観シナリオの3パターンで試算しておくと、経営層への説明資料として説得力が増します。",
    ],
    checkPoints: [
      "各社プランが固定型か市場連動型かの明示",
      "燃料費調整額の上限設定の有無と条件",
      "市場高騰シナリオでの年間コスト試算（上振れ額）",
      "各社のリスクを「低・中・高」で評価する欄の設定",
    ],
  },
  {
    heading: "契約条件・非価格条件の比較",
    content: [
      "料金とリスク評価に加え、契約条件・非価格条件も比較表に含めることで、選択の根拠が明確になります。特に「契約期間と解約条件」は、将来の状況変化に対応する柔軟性に関わる重要条件です。",
      "非価格条件には、電力会社の経営安定性・請求書の見やすさ・電話対応の品質・Webシステムの使いやすさなども含まれます。特に高圧電力では供給トラブル時の対応が重要になる場合があるため、サポート体制の評価も検討してください。",
    ],
    checkPoints: [
      "契約期間（1年・2年・3年等）の比較",
      "解約通知期間と違約金条件",
      "供給開始可能日（スケジュール上の実現可能性）",
      "請求明細・Webシステムの充実度",
      "トラブル対応・サポート体制の評価",
    ],
  },
  {
    heading: "経営層への説明に使いやすい比較表の構成",
    content: [
      "担当者が比較表を作成した後、最終的な意思決定者（経営層・管理部門長等）に説明する際は、詳細な計算過程よりも「結論と根拠の明示」が効果的です。比較表の冒頭に「推奨案とその理由」を1段落でまとめた要約ページを用意し、その後に詳細データを添付する構成が伝わりやすくなります。",
      "意思決定者が判断しやすい比較表にするためのポイントは、①現行比でどれだけ安くなるか（金額と率）、②リスクはどの程度あるか（最悪ケースの試算）、③注意すべき条件は何か（解約条件・縛り等）を1枚で見渡せる形に整理することです。",
    ],
    checkPoints: [
      "要約ページに「推奨案・削減額・主なリスク・注意条件」を明記",
      "現行比の削減額・削減率を最上段に表示",
      "リスク評価を定性・定量で記載",
      "決定事項と次のアクション（供給開始日・手続き期限）を明示",
    ],
  },
];

const comparisonTableItems = [
  {
    category: "料金条件",
    items: [
      "基本料金単価（円/kW）",
      "電力量料金単価・時間帯別（円/kWh）",
      "燃料費調整額の扱い（含む/別途/上限）",
      "再エネ賦課金・容量拠出金の扱い",
      "市場連動型か固定型か",
    ],
  },
  {
    category: "コスト試算",
    items: [
      "年間コスト試算額（同一前提）",
      "現行比の差額・削減率",
      "ピーク月・閑散月の単月試算",
      "燃料費高騰シナリオでの試算",
    ],
  },
  {
    category: "リスク評価",
    items: [
      "価格変動リスク（固定/連動）",
      "燃料費調整額の上限設定有無",
      "最悪ケースでの年間コスト試算",
      "総合リスク評価（低/中/高）",
    ],
  },
  {
    category: "契約条件",
    items: [
      "契約期間と自動更新条件",
      "解約通知期間・違約金",
      "供給開始可能日",
      "見積有効期限",
    ],
  },
];

export default function QuotationComparisonTableGuidePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">見積書比較表の作り方</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          見積書比較表の作り方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力契約の見直しで複数社から見積書を取得した後、それらを正確に比較するためには「同一条件での横並び比較表」が不可欠です。見積書のフォーマットは各社で異なるため、そのまま並べても有利・不利の判断が難しくなります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、高圧電力の見積書比較表を作成するための手順・含める項目・経営層への説明に使いやすい構成を解説します。各見積書の読み方については{" "}
          <Link
            href="/high-voltage-quotation-guide"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            高圧電力見積書の見方
          </Link>{" "}
          をあわせてご確認ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>比較表を作る前に統一すべき前提条件</li>
            <li>比較表に含める主要項目（料金・リスク・契約条件）</li>
            <li>年間コスト試算の作成方法</li>
            <li>経営層への説明に使いやすい表の構成</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積書比較表の標準項目一覧
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            比較表に含めるべき項目をカテゴリ別に整理しました。全ての項目を埋めた上で横並びにすることで、網羅的な比較が可能になります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {comparisonTableItems.map((group) => (
              <div
                key={group.category}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {group.category}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {comparisonSections.map((section) => (
          <section
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            {section.content.map((para, i) => (
              <p
                key={i}
                className="mt-3 text-sm leading-7 text-slate-700 sm:text-base"
              >
                {para}
              </p>
            ))}
            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">確認ポイント</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                {section.checkPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較表作成のよくある落とし穴
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書比較表の作成でよく起きる失敗パターンです。事前に把握しておくことで、比較の精度が高まります。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>使用量データが各社でバラバラ：</strong>
              異なる期間・条件のデータで試算されると、同じ使用量想定でも試算額に差が生じる。必ず同一の使用量データを全社に提供する。
            </li>
            <li>
              <strong>制度費用の含め方を確認しない：</strong>
              再エネ賦課金・容量拠出金が含まれているかどうかを確認せずに比較すると、実際より安く見える見積に騙される場合がある。
            </li>
            <li>
              <strong>固定型・市場連動型を区別しない：</strong>
              見積金額の低さだけで選んだ場合、市場連動型で市場が高騰した際に当初の試算額を大幅に上回るコストになりえる。
            </li>
            <li>
              <strong>契約条件（縛り・違約金）を見落とす：</strong>
              コストが安くても解約条件が厳しい場合、将来の見直し機会が失われる。
            </li>
            <li>
              <strong>年間試算の前提を使いまわす：</strong>
              前年度の使用量データでそのまま試算すると、使用量変化・設備変化が反映されず、実態とかけ離れた比較になる。
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            比較表はひとつの判断材料に過ぎない
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書比較表はコスト・リスク・条件の可視化に役立ちますが、それだけで意思決定するのではなく、自社のエネルギー調達方針や将来の設備変更計画なども踏まえた総合判断が重要です。
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            「今の燃料費調整額の水準が将来どう変化するか」「市場連動型のリスクをどう評価するか」は、比較表だけでは答えが出ません。シミュレーションを活用して上振れシナリオを把握しておくことが、現実的な判断の助けになります。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="見積書の読み方と比較判断に役立てるための関連ページです。"
          links={[
            {
              href: "/high-voltage-quotation-guide",
              title: "高圧電力見積書の見方",
              description:
                "高圧電力の見積書で確認すべき項目と注意点を整理。",
            },
            {
              href: "/extra-high-voltage-quotation-guide",
              title: "特別高圧電力見積書の見方",
              description:
                "大規模契約の見積書で確認すべき特高ならではの項目。",
            },
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "比較表の基礎データとなる現行請求書の読み方。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "基本料金単価の比較で押さえるべき契約電力・力率の知識。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "電力量料金単価の比較と時間帯別試算の方法。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "比較表の前提となるデマンド・契約電力の理解。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "比較表に市場連動・固定の条件差を反映させる際の参考として。",
            },
          ]}
        />

        <ContentCta
          heading="見積比較の前に電気料金リスクを把握する"
          description="現行の契約情報をもとに電気料金の上振れリスクをシミュレーションできます。比較表作成と並行して、リスクの全体像を把握しておくことをお勧めします。"
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
