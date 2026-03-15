import Link from "next/link";

export default function HowToPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl bg-white px-6 py-8 text-slate-800">
      <header className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">使い方</h1>
        <p className="mt-3 text-sm text-slate-600">
          このページでは「法人向け 電気料金上昇リスク シナリオ分析」の入力方法、リスク要因、グラフの見方、
          非常時の確認方法、リスクスコア確認手順を詳しく案内します。
        </p>
      </header>

      <section className="space-y-6 text-sm leading-7 text-slate-700 sm:text-base">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">1. 入力項目の設定方法（左側の入力条件）</h2>
          <p className="mt-2">入力値を変更すると、右側の結果は自動で再計算されます。</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              契約種別: 迷う場合は「高圧」を基準にすると、中規模施設に近い想定で比較しやすくなります。
            </li>
            <li>エリア: 事業所がある地域を選択します。エリア特性はリスク判定にも反映されます。</li>
            <li>春・夏・秋・冬の月間電気代（万円）: 直近実績に近い値を入れると精度が上がります。</li>
            <li>建物用途: オフィス、工場、店舗などの用途を選択します。</li>
            <li>電力使用パターン: 「平日日中メイン」「24時間稼働」など運用実態に近いものを選択します。</li>
            <li>延床面積（㎡）: 数値入力。単位面積あたりコスト評価に使われます。</li>
          </ul>
          <p className="mt-2">
            入力のコツ: まずは現在の平時実績を入れ、その後にリスク要因を追加して差分を見ると、影響の大きい要素を把握しやすくなります。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">2. リスク要因の見方（非常時シナリオの表示）</h2>
          <p className="mt-2">
            「電気料金が上がるリスク要因」でチェックした内容は累積で反映され、非常時を想定した上振れシナリオとして表示されます。
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>ワーストシナリオ: 主要なリスク要因を一括ONにして、最も厳しいケースをすぐ確認できます。</li>
            <li>リスク要因1 猛暑: 7月から9月に影響。夏季の需給逼迫による上振れを想定します。</li>
            <li>リスク要因2 厳冬: 12月から2月に影響。暖房需要増による冬季上振れを想定します。</li>
            <li>リスク要因3 為替リスク（円安）: 通年影響。輸入燃料コスト上昇を想定します。</li>
            <li>リスク要因4 地政学リスク: 通年影響。燃料調達不安による価格上振れを想定します。</li>
            <li>リスク要因5 災害リスク: 発生月と翌月に影響。供給低下による急騰を想定します。</li>
          </ul>
          <p className="mt-2">
            チェック数を増やすほど上振れ幅が大きくなりやすいため、「平時 → 単体要因 → 複合要因」の順で確認するのがおすすめです。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">3. グラフの見方と表示切替</h2>
          <p className="mt-2">右側の「年間シミュレーション」で、12か月の推移を確認できます。</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>線グラフ: 実線は当初想定、点線はリスク要因反映後です。</li>
            <li>グラフ開始月: プルダウンで開始月を変更すると、月ラベルと季節判定が切り替わります。</li>
            <li>表示プランのチェック: 固定/市場連動、当初想定/リスク反映後をON/OFFできます。</li>
            <li>棒グラフ（毎月の電気代比較）: 各月の固定プランと市場連動プランの月額差を確認できます。</li>
            <li>合計カード: 選択中の系列のみ年間累計（万円）が表示されます。</li>
          </ul>
          <p className="mt-2">
            「結果解説」には、現在の条件でどちらのプランが有利か、どの要因で差が出ているかのコメントが表示されます。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">4. リスクスコア（点数）を確認する</h2>
          <p className="mt-2">
            「この入力内容で電力料金上昇リスクスコア（点数）を確認する」ボタンを押すと、入力内容を保存して比較画面へ移動します。
            比較画面ではリスクスコアとリスク判定（例: 注意、高い、非常に高い）を確認できます。
          </p>
          <p className="mt-2">
            保存時はリスク要因を1つ以上選択してください。未選択の場合はエラー表示となり、保存できません。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">5. 保存結果の比較と履歴確認</h2>
          <p className="mt-2">
            比較ページでは、保存した条件の差分や要因分析を確認できます。条件変更の影響を検討する際に有効です。
          </p>
          <p className="mt-2">
            管理画面では保存済みのシミュレーション結果一覧と詳細を確認できます。過去の条件の振り返りや社内共有前の確認に活用してください。
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">6. 使い方のおすすめ手順</h2>
          <p className="mt-2">初めて使う場合は、次の順番で進めると理解しやすくなります。</p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>平時の実績値を入力して、当初想定の推移を確認する。</li>
            <li>リスク要因を1つずつONにして、どの要因が効くか見る。</li>
            <li>ワーストシナリオをONにして非常時の上限感を把握する。</li>
            <li>リスクスコア確認ボタンで比較画面へ進み、判定を確認する。</li>
          </ol>
        </div>
      </section>

      <footer className="mt-10 border-t border-slate-200 pt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          トップへ戻る
        </Link>
      </footer>
    </main>
  );
}
