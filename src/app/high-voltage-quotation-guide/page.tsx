import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";
import CategoryNextStepCta from "../../components/simulator/CategoryNextStepCta";

const pageTitle =
  "高圧電力見積書の見方｜比較時に確認したい項目と注意点";
const pageDescription =
  "高圧電力の見積書で確認すべき項目を解説。基本料金単価・電力量料金単価・調整費の扱い・契約条件など、見積比較で失敗しないためのチェックポイントを整理します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "高圧電力 見積書 見方",
    "高圧 電気 見積 比較 項目",
    "高圧 基本料金 電力量料金 見積",
    "法人 電気 見積 チェックポイント",
    "高圧 電力 見積書 比較",
  ],
  alternates: {
    canonical: "https://simulator.eic-jp.org/high-voltage-quotation-guide",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/high-voltage-quotation-guide",
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

const quotationSections = [
  {
    heading: "見積書の基本構成を把握する",
    content: [
      "高圧電力の見積書は、一般的に「基本料金に関わる項目」「電力量料金に関わる項目」「各種調整費・制度費用」「契約条件」の4つのブロックで構成されます。電力会社・新電力によって書式は異なりますが、比較時にはこれら4項目が揃っているかを確認することが最初のステップです。",
      "受け取った見積書に特定の項目が記載されていない場合、「別途加算」「請求時に調整」の場合と「含まれている」の場合があります。不明な点は必ず確認し、全項目が同一条件で比較できる状態にしてから判断してください。",
    ],
    checkPoints: [
      "見積書に基本料金・電力量料金・調整費・契約条件の4ブロックが揃っているか",
      "記載がない項目がある場合、含まれているのか別途加算なのかを確認",
      "試算に使用した使用量・デマンドの前提条件が明記されているか",
    ],
  },
  {
    heading: "基本料金単価と力率条件の確認",
    content: [
      "高圧電力の基本料金は「契約電力（kW）× 基本料金単価（円/kW）× 力率係数」で算出されます。見積書では基本料金単価（円/kW）が記載されているはずです。現行の請求書と単価を比較する際は、同じ契約電力を前提としているかを確認してください。",
      "力率に関する条件（力率割引・割増の適用ライン）も確認が必要です。現行契約で力率85%以上を達成して割引を受けている場合、新しい見積でも同じ条件が適用されるかを確認します。力率の実績が85%を下回っている場合は、割増が発生する可能性があり、見積金額に影響します。",
    ],
    checkPoints: [
      "基本料金単価（円/kW）が明記されているか",
      "試算に使用した契約電力（kW）は何kWか",
      "力率条件（割引・割増の基準）が明記されているか",
      "夏季・冬季など季節による基本料金の変動がある場合、その条件",
    ],
  },
  {
    heading: "電力量料金単価と時間帯区分",
    content: [
      "電力量料金単価は、時間帯別料金の場合は各時間帯の単価が記載されます。見積書の時間帯区分が現行契約と同じかどうかを確認してください。区分が異なると、自社の稼働パターンによっては単純な単価比較では有利・不利が判断できません。",
      "複数社から見積を取った場合、時間帯区分が異なっていることがあります。比較の際は、自社の実際の使用量データ（各時間帯の使用量）を使って、それぞれの見積単価で年間コストを試算し直すことが、最も正確な比較方法です。単価だけを見て判断すると誤った選択につながるリスクがあります。",
    ],
    checkPoints: [
      "電力量料金単価（各時間帯、円/kWh）が明記されているか",
      "時間帯区分の定義（時間帯の境界）が現行と同じか",
      "夏季・冬季など季節による電力量料金の変動条件",
      "実使用量データで年間コストを試算できる体裁になっているか",
    ],
  },
  {
    heading: "燃料費調整額・市場連動調整額の扱い",
    content: [
      "見積書において最も注意が必要な項目の一つが、燃料費調整額と市場連動調整額の扱いです。見積時点の燃料費調整額を含めた試算を提示している場合、その金額は将来の実際の請求額とは異なります。見積書の試算額は参考値であり、実際の請求時には毎月変動することを念頭に置いてください。",
      "市場連動型プランの場合は「電源調達調整費」「市場価格調整額」などの名称で追加調整額が設けられます。市場連動型と固定単価型では、リスクの性質が根本的に異なります。見積書の電力量料金単価だけを見ると市場連動型の方が安く見えることがありますが、市場が高騰した場合の上振れリスクを加味した比較が必要です。",
    ],
    checkPoints: [
      "燃料費調整額が見積試算に含まれているか、含まれていないか",
      "市場連動型か固定単価型かの明示",
      "市場連動の場合、上限（キャップ）の有無と条件",
      "燃料費調整額の変動が実際の請求額に与える影響の説明があるか",
    ],
  },
  {
    heading: "再エネ賦課金・容量拠出金の含め方",
    content: [
      "再エネ賦課金は全電力会社・新電力で同一の単価が適用されるため、見積書への含め方の違いを確認することが重要です。「含む」「別途加算」「電力量料金に含まれている」など、表記方法が異なる場合があります。比較時には、全ての見積書が再エネ賦課金込みの金額になっているかを統一して確認してください。",
      "容量拠出金についても同様に、見積書への含め方を確認します。電力量料金に含まれている場合と別項目で表示されている場合があり、含まれていない場合は別途加算されることになります。比較表を作成する際は、この含め方の違いを調整した上で横並びにすることが重要です。",
    ],
    checkPoints: [
      "再エネ賦課金が見積金額に含まれているか",
      "容量拠出金が見積金額に含まれているか",
      "制度費用の含め方が各社見積で統一されているか",
      "制度費用の将来的な増加見込みについての説明があるか",
    ],
  },
  {
    heading: "契約期間・解約条件・その他の注意事項",
    content: [
      "見積書には料金単価だけでなく、契約期間・解約条件・最低使用量条件なども記載されています。「2年縛り」「解約時の違約金」「最低使用量に満たない場合の最低料金」などは、コスト比較と同等以上に重要な条件です。",
      "特に高圧電力の契約では、契約変更・解約のタイミングが制限されている場合があります。現行の契約満了時期と新しい契約の開始タイミングのすり合わせが必要です。また、見積の有効期限（見積書に記載の料金単価が有効な期限）も確認し、比較・意思決定の期間内に有効かどうかを確認してください。",
    ],
    checkPoints: [
      "契約期間（1年・2年・3年等）と自動更新の有無",
      "解約時の条件（違約金・解約通知期間等）",
      "最低使用量・最低料金条件の有無",
      "見積の有効期限",
      "供給開始可能時期（現行契約の終了に間に合うか）",
    ],
  },
];

export default function HighVoltageQuotationGuidePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <header className="rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          高圧電力見積書の見方
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          高圧電力の電力会社変更や契約見直しを検討する際、複数社から取得した見積書を正確に比較することが判断の基礎になります。しかし見積書の書式は事業者ごとに異なり、燃料費調整額・市場連動コスト・制度費用の含め方など、見落としやすいポイントが多くあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、高圧電力の見積書を受け取った際に確認すべき項目と、比較時に注意すべき落とし穴を整理します。現行請求書のデータ整理については{" "}
          <Link
            href="/high-voltage-electricity-bill-guide"
            className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
          >
            高圧電力の請求書の見方
          </Link>{" "}
          をあわせてご確認ください。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>高圧電力の見積書に含まれる主要項目の読み方</li>
            <li>基本料金単価・電力量料金単価の比較方法</li>
            <li>燃料費調整額・市場連動コストの取り扱いの違い</li>
            <li>契約条件（期間・解約等）の確認ポイント</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            見積書を受け取ったらまず確認する3つのこと
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            見積書を詳細に分析する前に、まず以下の3点を確認してください。この確認なしに料金単価の比較に入ると、前提条件の違いを見落としたまま判断することになります。
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">① 試算の前提条件</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                どの使用量・デマンドを使って試算したか。自社のデータと一致しているか。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">② 含まれている費用</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                再エネ賦課金・容量拠出金・燃料費調整額が含まれているか別途加算か。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">③ 料金タイプ</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                固定単価型か市場連動型か。将来の変動リスクの性質が異なる。
              </p>
            </div>
          </div>
        </section>

        {quotationSections.map((section) => (
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
            見積書比較でよくある失敗パターン
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            高圧電力の見積比較では、以下のような見落としが起こりやすいです。比較作業に入る前に確認しておくと、誤った判断を防げます。
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>
              <strong>燃料費調整額の含め方の違いを見落とす：</strong>
              ある社は含まず、別の社は含んでいる場合、同じ条件での比較になっていない。
            </li>
            <li>
              <strong>市場連動型と固定型を同列比較する：</strong>
              市場連動型は通常時は安く見えることが多いが、市場高騰時に大幅に上振れるリスクがある。
            </li>
            <li>
              <strong>試算の使用量が実態と乖離している：</strong>
              見積依頼時に提供したデータが古い・ピーク月を含んでいないなど、試算の前提が実態を反映していない。
            </li>
            <li>
              <strong>解約条件を確認せずに安さだけで選ぶ：</strong>
              2〜3年の縛りがある契約の場合、解約・変更が必要になった際に多額の違約金が発生することがある。
            </li>
          </ul>
        </section>

        <RelatedLinks
          heading="関連ページ"
          intro="高圧電力の見積書を正確に比較するための関連ページです。"
          links={[
            {
              href: "/high-voltage-electricity-bill-guide",
              title: "高圧電力の請求書の見方",
              description:
                "見積比較の前提となる現行請求書の確認ポイントを整理。",
            },
            {
              href: "/quotation-comparison-table-guide",
              title: "見積書比較表の作り方",
              description:
                "複数社の見積書を横並びで比較するための整理方法。",
            },
            {
              href: "/basic-charge-explained",
              title: "基本料金の見方",
              description:
                "契約電力と基本料金単価の関係、力率割引の仕組みを解説。",
            },
            {
              href: "/energy-charge-explained",
              title: "電力量料金の見方",
              description:
                "電力量料金の構造と時間帯別料金の確認ポイント。",
            },
            {
              href: "/demand-value-guide",
              title: "デマンド値の見方",
              description:
                "デマンド値が基本料金に与える影響と管理方法を解説。",
            },
            {
              href: "/how-to-read-business-electricity-bill",
              title: "法人向け電気料金請求書の見方",
              description: "請求書の全体構造と主要項目の読み方を整理。",
            },
          ]}
        />

        <ContentCta
          heading="見積比較の前にリスクを把握する"
          description="見積書を比較する前に、現行の電気料金リスクをシミュレーションで確認できます。上振れリスクの大きさを把握してから比較に臨むと、判断精度が高まります。"
          links={[
            { href: "/simulate", label: "シミュレーターで診断する" },
            { href: "/how-to", label: "使い方を見る" },
            { href: "/compare", label: "料金メニューを比較する" },
          ]}
        />
      </section>
      <div className="mt-6">
        <CategoryNextStepCta slug="high-voltage-quotation-guide" />
      </div>
    </main>
  );
}
