import type { Metadata } from "next";
import Link from "next/link";
import ContentCta from "../../components/simulator/ContentCta";
import RelatedLinks from "../../components/simulator/RelatedLinks";

const pageTitle =
  "請求単価だけで比較しないためのチェックポイント｜総額比較の考え方";
const pageDescription =
  "電力の相見積もりで単価だけを比較することの問題点と、総額比較のアプローチを解説。調整費・前提条件・リスク要因を含めた正確な比較のためのチェックリストを提供します。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "電気料金 単価 比較 注意",
    "電力 見積 総額 比較方法",
    "法人 電気料金 比較 チェックリスト",
    "新電力 比較 見落とし",
    "電力 見積 前提条件 揃える",
  ],
  alternates: {
    canonical:
      "https://simulator.eic-jp.org/not-just-unit-price-comparison-checklist",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "https://simulator.eic-jp.org/not-just-unit-price-comparison-checklist",
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

const checkItems = [
  {
    category: "前提条件の確認",
    items: [
      "各社の見積が同じ使用量・契約電力を前提としているか",
      "見積の対象期間（月・年）が揃っているか",
      "契約期間（1年・2年・3年）が揃っているか、または期間ごとに分けて比較しているか",
      "高圧・特別高圧など電圧区分の前提が正しいか",
    ],
  },
  {
    category: "調整費・変動費の確認",
    items: [
      "燃料費調整額が見積に含まれているか、また上限の有無を確認したか",
      "市場価格調整額（JEPX連動要素）が含まれているか確認したか",
      "容量拠出金が見積に含まれているか確認したか",
      "再エネ賦課金（再生可能エネルギー発電促進賦課金）の扱いを確認したか",
    ],
  },
  {
    category: "料金体系の確認",
    items: [
      "基本料金の計算基準（最大需要電力か契約電力か）を確認したか",
      "時間帯別料金（昼間・夜間・深夜）がある場合は自社の使用パターンと照合したか",
      "力率割引・割増の適用可否を確認したか",
      "最低使用量条項（最低料金）がある場合は通常の使用量と比較したか",
    ],
  },
  {
    category: "その他費用・条件の確認",
    items: [
      "切替に伴う工事費用・手数料が発生するか確認したか",
      "中途解約条項（違約金・予告期間）を確認したか",
      "自動更新条項の有無と申出期限を確認したか",
      "請求書の発行方法・支払い方法・振込手数料の負担を確認したか",
    ],
  },
];

export default function NotJustUnitPriceComparisonChecklistPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <nav aria-label="パンくず" className="text-sm text-slate-600">
        <Link href="/" className="underline-offset-2 hover:underline">ホーム</Link>
        <span className="px-2">›</span>
        <Link href="/articles/review-points" className="underline-offset-2 hover:underline">見直しポイントを知る</Link>
        <span className="px-2">›</span>
        <span className="text-slate-800">単価だけで比較しない</span>
      </nav>
      <header className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          請求単価だけで比較しないためのチェックポイント
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
          電力の相見積もりを取った際、「A社の方が単価が安い」という理由だけで選ぶと、実際の年間コストで見るとB社の方が安かった、というケースは珍しくありません。燃料費調整額・容量拠出金・市場価格調整額などの変動費は、見積書の単価部分には現れていないことがあります。
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
          このページでは、単価比較の落とし穴と、総額で正確に比較するためのチェックポイントを整理します。
        </p>
        <div className="mt-4 rounded-lg border border-sky-300 bg-white p-4">
          <p className="text-sm font-semibold text-slate-900">このページでわかること</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700">
            <li>単価比較がなぜ不十分なのか</li>
            <li>総額比較に必要な確認項目のチェックリスト</li>
            <li>年間総額の試算方法</li>
            <li>リスク要因を含めた比較の考え方</li>
            <li>比較表の作り方</li>
          </ul>
        </div>
      </header>

      <section className="mt-6 space-y-6">
        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            単価比較がなぜ不十分なのか
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電気料金の請求書や見積書に記載される単価は、電力量料金（基本的な電力量単価）であることが多く、以下の費用を含んでいない場合があります。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li><strong>燃料費調整額</strong>：使用量に比例して変動する。上限の有無で上振れリスクが異なる</li>
            <li><strong>容量拠出金</strong>：2024年度以降に本格化し、今後上昇する見込みの費用</li>
            <li><strong>市場価格調整額</strong>：JEPX連動の場合、需給逼迫時に急騰するリスクがある</li>
            <li><strong>再エネ賦課金</strong>：毎年単価が改定される全需要家共通の費用</li>
            <li><strong>基本料金</strong>：使用量ではなく契約電力・最大需要電力で決まる固定費</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            電力量単価が安くても、これらの追加費用が高ければ実際の年間総コストは高くなります。
          </p>
        </section>

        {checkItems.map((section) => (
          <section
            key={section.category}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">{section.category}</h2>
            <ul className="mt-4 space-y-2">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-400">
                    ✓
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            年間総額の試算方法
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            各社の見積を総額で比較するには、以下のステップで試算します。
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ステップ1：使用量前提を揃える</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                自社の直近12か月の月別使用量・最大需要電力を基に、各社の見積を同じ前提で計算できるか確認する。前提が揃っていない見積は修正を依頼する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ステップ2：全費用を列挙する</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                基本料金・電力量料金・燃料費調整額・容量拠出金・市場価格調整額・再エネ賦課金のそれぞれを月別に列挙し、年間合計を計算する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ステップ3：変動費はシナリオで確認する</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                燃料費調整額や市場価格調整額は将来変動するため、「現状維持」「10%上昇」「20%上昇」などのシナリオで各社のコスト差を確認する。
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">ステップ4：比較表にまとめる</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                各社の年間総額（現状水準）、上振れシナリオの年間総額、契約条件（期間・解約条項）を一覧にした比較表を作成する。この表を社内説明に使う。
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            リスクを含めた比較の考え方
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            年間総額の比較だけでなく、以下のリスク面も考慮して総合判断します。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
            <li>燃料費調整額に上限がないプランは、高騰時に予算超過リスクがある</li>
            <li>市場連動型は需給逼迫時に急騰するリスクがある（特に冬・夏のピーク期）</li>
            <li>中途解約条項が厳しいプランは、将来の見直し機会が制限される</li>
            <li>電力会社の財務状況・供給継続性も、長期契約では考慮が必要</li>
          </ul>
          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
            コスト面とリスク面を合わせた比較のために、シミュレーターを活用して上振れシナリオの年間コスト幅を試算することをお勧めします。
          </p>
        </section>

        <RelatedLinks
          heading="関連ページ"
          links={[
            {
              href: "/how-to-check-fuel-cost-adjustment-terms",
              title: "燃料費調整額の扱いを確認する方法",
              description: "上限設定と計算方式の確認ポイント。",
            },
            {
              href: "/how-to-check-market-price-adjustment-terms",
              title: "市場価格調整額の有無を確認する方法",
              description: "固定と市場連動を見分けるポイント。",
            },
            {
              href: "/how-to-check-capacity-contribution-terms",
              title: "容量拠出金の扱いを確認する方法",
              description: "見積比較での容量拠出金の確認方法。",
            },
            {
              href: "/how-to-read-electricity-quote",
              title: "法人向け電気料金見積書の見方",
              description: "見積書の構成と比較すべき項目の解説。",
            },
            {
              href: "/non-price-factors-in-electricity-contract",
              title: "法人の電力契約で単価以外に確認したい項目",
              description: "条件・リスク・運用面の確認ポイント。",
            },
            {
              href: "/information-to-prepare-before-quotation-request",
              title: "新電力の相見積もり前に整理したい情報",
              description: "見積依頼の精度を上げる事前準備。",
            },
            {
              href: "/market-linked-vs-fixed",
              title: "市場連動プランと固定プランの違い",
              description: "総額比較に加えて、プラン選択の考え方を整理。",
            },
          ]}
        />

        <ContentCta
          heading="シミュレーターで総額比較を試算する"
          description="各社の見積条件でシミュレーションを行い、上振れシナリオを含めた年間コスト比較を数値で確認してください。"
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
