import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "電力料金上昇リスク診断の使い方 | 法人向け電気料金上昇、高騰リスクシミュレーター",
  description:
    "契約種別、エリア、季節ごとの電気代などを入力して、法人向けの電気料金上昇・高騰リスクを確認する方法をわかりやすく解説します。",
  alternates: {
    canonical: "https://simulator.eic-jp.org/how-to",
  },
  openGraph: {
    title: "電力料金上昇リスク診断の使い方 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "契約種別、エリア、季節ごとの電気代などを入力して、法人向けの電気料金上昇・高騰リスクを確認する方法をわかりやすく解説します。",
    url: "https://simulator.eic-jp.org/how-to",
    siteName: "法人向け電気料金上昇、高騰リスクシミュレーター",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "/ogp-default.png",
        width: 1200,
        height: 630,
        alt: "法人向け電気料金上昇、高騰リスクシミュレーター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "電力料金上昇リスク診断の使い方 | 法人向け電気料金上昇、高騰リスクシミュレーター",
    description:
      "契約種別、エリア、季節ごとの電気代などを入力して、法人向けの電気料金上昇・高騰リスクを確認する方法をわかりやすく解説します。",
    images: ["/twitter-default.png"],
  },
};

type SectionHeadingProps = {
  iconSrc: string;
  text: string;
};

function SectionHeading({ iconSrc, text }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
      <Image src={iconSrc} alt="" width={28} height={28} className="h-7 w-7 shrink-0" aria-hidden />
      <span>{text}</span>
    </h2>
  );
}

export default function HowToPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1600px] bg-white px-6 py-8 text-slate-800">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">電力料金上昇リスク診断の使い方</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          このページでは、法人向け電気料金上昇、高騰リスクシミュレーターで何がわかるか、どう入力すればよいか、結果をどう読めば
          電力契約の見直しに使えるかを整理しています。企業・自治体・各種法人の担当者が、高圧・特別高圧を含む電力契約の
          比較検討を進める際に、電気料金上昇や高騰リスクを把握するための実務的なガイドです。
        </p>

        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-base leading-7 text-slate-700">
          <h2 className="text-base font-semibold text-slate-900 sm:text-lg">このページでわかること</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>法人向け電気料金シミュレーターで確認できる内容</li>
            <li>入力項目の設定ポイントと、比較しやすい入力の考え方</li>
            <li>リスク要因が料金結果にどう反映されるか</li>
            <li>固定プランと市場連動型プランの比較の見方</li>
            <li>リスクスコア確認と比較画面の活用方法</li>
          </ul>
        </div>
      </header>

      <section className="space-y-6 text-base leading-7 text-slate-700">
        <div>
          <SectionHeading iconSrc="/icons/howto-overview.png" text="1. このツールで何がわかるか" />
          <p className="mt-2">
            この電気料金シミュレーターでは、平時の実績値を起点に、リスク要因を加えた場合の年間コストの動きを比較できます。
            市場連動の影響が大きいケースと、固定プランで上振れを抑えやすいケースの違いを、同じ条件で確認できる点が特徴です。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>季節ごとの電気料金の変動イメージと、月次の上振れ傾向</li>
            <li>猛暑・厳冬・円安・地政学リスク・災害など、要因別の影響の出方</li>
            <li>固定プランと市場連動型プランの差が広がる条件</li>
            <li>非常時シナリオで想定される年間コストの上限感</li>
            <li>比較画面でのリスクスコア確認と、条件差分の整理</li>
          </ul>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-input.png" text="2. 入力項目の設定方法（左側の入力条件）" />
          <p className="mt-2">
            入力値を変更すると、結果は自動で再計算されます。まずは現状に近い値を入力し、その後に条件を変えて比較すると、
            電力契約の見直しポイントが把握しやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              契約種別: 高圧・特別高圧など、現在の契約に合わせて設定します。契約見直しの初期確認では、現行契約を基準に
              入れると差分が読みやすくなります。
            </li>
            <li>エリア: 事業所の地域を選択します。地域特性はリスク判定にも反映されます。</li>
            <li>春・夏・秋・冬の月間電気代（万円）: 直近実績に近い値を入れると、固定プランと市場連動型プランの比較がしやすくなります。</li>
            <li>建物用途: オフィス、工場、店舗など、実際の用途に合わせて選択します。</li>
            <li>電力使用パターン: 「平日日中メイン」「24時間稼働」など、運用に近いパターンほど傾向をつかみやすくなります。</li>
            <li>延床面積（㎡）: 数値入力。施設規模を加味した評価に使われます。</li>
          </ul>
          <p className="mt-2">
            入力のコツ: まずは現在の平時実績を入力し、次に要因を重ねて差分を確認すると、どの条件がコスト変動に効くかを
            担当者間で共有しやすくなります。
          </p>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-risk.png" text="3. リスク要因の見方（非常時シナリオの表示）" />
          <p className="mt-2">
            「電気料金が上がるリスク要因」でチェックした内容は累積で反映され、非常時を想定した上振れシナリオとして表示されます。
            要因ごとに、なぜ料金が上がる可能性があるのかを押さえておくと、比較結果を読み取りやすくなります。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>ワーストシナリオ: 主要要因を一括で反映し、非常時の上限感を短時間で確認できます。</li>
            <li>リスク要因1 猛暑: 7月から9月に影響。冷房需要の増加で需給が逼迫し、料金が上がりやすくなります。</li>
            <li>リスク要因2 厳冬: 12月から2月に影響。暖房需要が集中し、冬季の電気料金上昇リスクが高まります。</li>
            <li>リスク要因3 為替リスク（円安）: 通年影響。輸入燃料コストの増加が料金上昇につながります。</li>
            <li>リスク要因4 地政学リスク: 通年影響。燃料調達や物流の不安定化が市場価格を押し上げる要因になります。</li>
            <li>リスク要因5 災害リスク: 発生月と翌月に影響。供給余力の低下による急騰を想定します。</li>
          </ul>
          <p className="mt-2">
            チェック数を増やすほど上振れ幅が大きくなりやすいため、「平時 → 単体要因 → 複合要因」の順で確認するのがおすすめです。
          </p>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-chart.png" text="4. グラフと結果の見方" />
          <p className="mt-2">
            右側の「年間シミュレーション」では、12か月の推移と月次差分を確認できます。単に増減を見るだけでなく、
            どのリスク要因で固定プランと市場連動型プランの差が広がるかを意識して読むことが重要です。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>線グラフ: 実線は当初想定、点線はリスク要因反映後です。点線の上振れ幅でリスクの影響度を確認できます。</li>
            <li>固定プランと市場連動型プランの比較: 同条件で2つの線を見比べると、どちらが有利か、どの月で差が開くかを把握できます。</li>
            <li>棒グラフ（毎月の電気代比較）: 月ごとの差額を見ることで、契約切替時に注意すべき季節を見つけやすくなります。</li>
            <li>合計カード: 選択中系列の年間累計（万円）が表示され、年間コスト観点での比較に使えます。</li>
            <li>表示切替と開始月変更: 表示対象を絞ることで、社内説明用の確認ポイントを整理しやすくなります。</li>
          </ul>
          <p className="mt-2">
            「結果解説」には、現在の条件でどちらのプランが有利か、どの要因で差が広がるかのコメントが表示されます。
            電力契約見直しの判断では、月次差分と年間累計の両方を見て、短期負担と年間影響をあわせて確認するのがおすすめです。
          </p>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-score.png" text="5. リスクスコア確認と比較画面へのつながり" />
          <p className="mt-2">
            「この入力内容で電力料金上昇リスクスコア（点数）を確認する」ボタンを押すと、入力内容を保存して比較画面へ移動します。
            比較画面では、リスクスコアとリスク判定（例: 注意、高い、非常に高い）を確認できます。
            条件を変更して複数保存しておくと、固定プラン・市場連動の見え方の違いを差分で把握しやすくなります。
          </p>
          <p className="mt-2">
            保存時はリスク要因を1つ以上選択してください。未選択の場合はエラー表示となり、保存できません。比較画面の結果は、
            社内説明や庁内説明の検討材料としても利用しやすい形式です。
          </p>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-people.png" text="6. どんな人に向いているか" />
          <p className="mt-2">
            本ページは、次のような業務で電気料金の比較検討を行う担当者に向いています。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>高圧・特別高圧の電力契約を見直したい企業・自治体・各種法人の担当者</li>
            <li>市場連動型プランのリスクを整理したい総務・経理・施設管理部門</li>
            <li>固定プランとの違いを比較し、予算計画に反映したい担当者</li>
            <li>電気料金上昇リスクを社内・庁内に説明する必要がある担当者</li>
            <li>新電力の提案内容を比較し、判断材料を増やしたい担当者</li>
          </ul>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-steps.png" text="7. おすすめの使い方手順" />
          <p className="mt-2">
            まず現在条件を入れて基準を作り、次に要因を重ねていくと、上振れの背景と契約選択の考え方を整理しやすくなります。
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>平時の実績値を入力して、当初想定の推移を確認する。</li>
            <li>リスク要因を1つずつONにして、どの要因が効くかを見る。</li>
            <li>ワーストシナリオをONにして非常時の上限感を把握する。</li>
            <li>リスクスコア確認ボタンで比較画面へ進み、判定を確認する。</li>
          </ol>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-history.png" text="8. 保存結果の比較と履歴確認" />
          <p className="mt-2">
            比較ページでは、保存した条件の差分や要因分析を確認できます。条件変更の影響や、契約候補ごとのリスク傾向を
            検討する際に有効です。
          </p>
          <p className="mt-2">
            管理画面では保存済みのシミュレーション結果一覧と詳細を確認できます。過去の条件の振り返りや社内共有前の確認に活用してください。
          </p>
        </div>

        <div>
          <SectionHeading iconSrc="/icons/howto-links.png" text="9. 関連ページ" />
          <p className="mt-2">目的に応じて、次のページもあわせて確認してください。</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Link
              href="/"
              className="rounded-lg border border-slate-200 p-4 text-base text-slate-700 transition hover:bg-slate-50"
            >
              <p className="font-semibold text-slate-900">トップページに戻る</p>
              <p className="mt-1">シミュレーターの全体像、使い始める前の要点を確認できます。</p>
            </Link>
            <Link
              href="/compare"
              className="rounded-lg border border-slate-200 p-4 text-base text-slate-700 transition hover:bg-slate-50"
            >
              <p className="font-semibold text-slate-900">固定プランと市場連動型プランの比較を見る</p>
              <p className="mt-1">保存した条件ごとの差分、リスクスコア、判定結果をまとめて確認できます。</p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-slate-200 pt-6 text-base leading-7 text-slate-600">
        <h2 className="flex items-center gap-3 text-base font-semibold text-slate-900 sm:text-lg">
          <Image src="/icons/howto-notice.png" alt="" width={24} height={24} className="h-6 w-6 shrink-0" aria-hidden />
          <span>10. 注意事項</span>
        </h2>
        <p className="mt-2">
          本ツールは将来の市場価格や実際の請求額を保証するものではありません。実際の料金は、契約条件、燃料費調整、
          請求条件、運用状況などによって変動します。シミュレーション結果は、法人向けの比較検討やリスク把握の参考情報としてご活用ください。
        </p>
      </footer>
    </main>
  );
}
